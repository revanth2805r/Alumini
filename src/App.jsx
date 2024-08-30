import React, { useState, useEffect } from 'react';
import EmblaCarousel from './components/EmblaCarousel';
import Layout from './components/Layout';
import ProfilePage  from './components/ProfilePage'
import News from './components/News'
import JobPage from './components/JobPage'
import Popup from './components/Popup'
function App() {
  const [posts, setPosts] = useState([]); // State to store fetched posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/alumni/exclude/66cc95edbf870471866ce20a');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data); // Update state with fetched posts
        console.log(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
      
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this runs only once on mount

  

  return (
    <div className="App">
      
        
        <EmblaCarousel slides={posts} />


        {/* Uncomment and use the other components as needed */}
        <News/> 
        {/* <ProfilePage/> */}
        {/* <JobPost/> */}
         {/* <JobPage/>
        <Popup/>  */}
     
    </div>
  );
}

export default App;
