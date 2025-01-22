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
      console.log(result)
      setData((prevData) => [...prevData, ...result]); // Append new data to existing
      if (result.length < 10) {
        setHasMore(false); // If less than 10 items are returned, no more data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data whenever page changes
  useEffect(() => {
    console.log("fetch")
    fetchData();
  }, [page]);
 

     
  return (
    <div>   

    <Navbar/>
   
   <div className='post-row'>
   {
    data.map((post)=>{
     return <Card data={post} key={post.id}/>
    })
    
   }

   {loading && <p>Loading...</p>}

{hasMore && !loading && (
  <button onClick={() => setPage(page+1)}>
    Load More
  </button>
)}

{!hasMore && <p>No more data to load.</p>}
</div>
      
    </div>
    
  )
}

export default Posts
