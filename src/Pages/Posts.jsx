import React from 'react'
import {useState, useEffect} from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import './Posts.css'
function Posts() {
  const API_KEY = "https://jsonplaceholder.typicode.com/posts"
   
  const [data, setData] = useState([]); 
  const [page, setPage] = useState(1);  
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true); 
  const fetchData = async () => {
    

    setLoading(true);
    try {
      const response = await fetch(`${API_KEY}?_page=${page}&_limit=10`);
      const result = await response.json();
      setData((prevData) => [...prevData, ...result]); 
      if (result.length < 10) {
        setHasMore(false); 
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data whenever page changes
  useEffect(() => {
    console.log("callling useEffect fetch")
    fetchData();
  }, [page]);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);
     
  return (
    <div>   

    <Navbar/>
   
   <div className='post-row'>
   {
    data.map((post)=>{
     return <Card data={post} key={post.id}/>
    })
    
   }

   {loading && <div className="loader"></div>}



{!hasMore && <p>No more data to load.</p>}
</div>
      
    </div>
    
  )
}

export default Posts
