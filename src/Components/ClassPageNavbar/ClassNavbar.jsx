import React, { useState, useEffect } from 'react'
import image from '../../assets/image.png'
import Button from '../Button/Button'
import './ClassNavbar.css'
function ClassNavbar() {

    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedSubOption, setSelectedSubOption] = useState('');
    const [otherReason, setOtherReason] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    let toggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
       
      }
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);

        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedOption('')

    }
    const openModal = () => {

        setIsModalOpen(true)
    }
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSelectedSubOption(''); // Reset sub-option when main option changes
    };
    const handleSubOptionChange = (event) => {
        setSelectedSubOption(event.target.value);
    };
    const endClassHandler = () => {
        console.log(selectedOption)
        console.log(selectedSubOption)
        console.log(otherReason)
        if (selectedOption === '') {
            alert("Please select the option first")
        }
        else if (selectedOption === 'aborted' && selectedSubOption === '') {
            alert("Please select the reason to abort the class")
        }
        else if (selectedOption === 'other' && otherReason === '') {
            alert("Please type the reason to abort the class")
        }
        else {

            closeModal();
            setIsRunning(false);
            alert(`The class has been ended successfully at ${formatTime(time)}. Reason for class end is : ${selectedOption === 'completed' ? "Completed" : "Aborted : " + selectedSubOption }`)
        }
    }
    const handleOther = (e) => {

        setOtherReason(e.target.value)

    }
    return (
        <div>
            <div id='class-nav'>

                <div className="nav-img">

                    <img src={image} alt="" />

                </div>
                <div className='lesson-name'>
                    Trial Lesson Grade (1-3)
                </div>
                <div className='timer'>
                    {formatTime(time)}
                </div>
                <div id="btn-container">
                    <Button value="End Class" onClick={openModal} />
                </div>
                <div className='menu-icon' onClick={toggle}>

                    <i className="fa-solid fa-bars"></i>
                </div>

            </div>

            {
        isOpen && <div className={`toggled-menu`}>
          <div className='top-row'>
            <img src="https://fastly.codingal.com/images/logos/logos-main/logo-with-text.svg" alt="" />
            <i className="fa-solid fa-x" onClick={toggle}></i>

          </div>

          <div className="second-row">
            <ul className="">
              <li className="">Courses</li>
              <li className="">Competition</li>
              <li className="">Blog</li>
              <li className="">Quizzes</li>
              <li className="">More</li>
              <li className="">Courses</li>
              <li className="">Login</li>
            </ul>


                
          </div>
          
          <div className='btn-container-center'>
                    <Button value="End Class" onClick={openModal} />
                </div>


        </div>
       
      }


            {
                isModalOpen &&
                <div>
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Select a Reason to End class</h2>
                            <div className="option">
                                <input
                                    type="radio"
                                    id="completed"
                                    name="reason"
                                    value="completed"
                                    checked={selectedOption === 'completed'}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor="completed">Class Completed</label>
                            </div>


                            <div className="option">
                                <input
                                    type="radio"
                                    id="aborted"
                                    name="reason"
                                    value="aborted"
                                    checked={selectedOption === 'aborted'}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor="aborted">Aborted</label>
                            </div>
                            {selectedOption === 'aborted' && (
                                <div className="sub-options">
                                    <div className="option">
                                        <input
                                            type="radio"
                                            id="no-interest"
                                            name="sub-reason"
                                            value="Student didn't show interest"
                                            checked={selectedSubOption === "Student didn't show interest"}
                                            onChange={handleSubOptionChange}
                                        />
                                        <label htmlFor="no-interest">Student didn't show interest</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            id="no-show"
                                            name="sub-reason"
                                            value="Student didn't show up"
                                            checked={selectedSubOption === "Student didn't show up"}
                                            onChange={handleSubOptionChange}
                                        />
                                        <label htmlFor="no-show">Student didn't show up</label>
                                    </div>
                                    <div className="option">
                                        <input
                                            type="radio"
                                            id="other"
                                            name="sub-reason"
                                            value="other"
                                            checked={selectedSubOption === "other"}
                                            onChange={handleSubOptionChange}
                                        />
                                        <label htmlFor="other">Other</label>
                                    </div>
                                    {selectedSubOption === 'other' &&
                                        <div className="option">
                                            <textarea required rows="6" cols="30" placeholder='Type here..' onChange={handleOther}></textarea>

                                        </div>}
                                </div>
                            )}

                            <div className='btn-container'>
                                <Button  value="End Class" onClick={endClassHandler} />
                                <Button type="outlined" id="cancel-btn" value="Cancel" onClick={closeModal} />

                            </div>
                            
                        </div>

                    </div>
                </div>
            }
        </div>




    )
}

export default ClassNavbar
