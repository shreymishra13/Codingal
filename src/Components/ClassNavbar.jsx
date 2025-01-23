import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/image.png'
import Button from '../Components/Button'
import './ClassNavbar.css'
function ClassNavbar() {

    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(true)
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedSubOption, setSelectedSubOption] = useState('');
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
        console.log("close modal")
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
      const endClassHandler=()=>{
        closeModal();
        alert(`The class has been ended successfully at ${formatTime(time)}. Reason for class end is : ${selectedOption==='completed'?"Completed":"Aborted : "+ selectedSubOption}`)
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
                <Button value="End Class" onClick={openModal} />
            </div>

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
                                        </div>
                                    )}
                                    
                                <div className='btn-container'>
                                    <Button value="End Class" onClick={endClassHandler} />
                                    <Button id="cancel-btn" value="Cancel" onClick={closeModal} />

                                </div>
\
                        </div>

                    </div> 
                </div>
            }
    </div>




    )
}

export default ClassNavbar
