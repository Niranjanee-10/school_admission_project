import React, { useState, useEffect } from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer'
import './home.css';
function Home() {
    // Create state variables for the index and image array
    const [index, setIndex] = useState(0);
    const images = ['https://static.scientificamerican.com/sciam/cache/file/4AC9C323-EF15-4344-BF4D79E5A5F152EA_source.jpg?w=1220&h=490', 'https://thumbs.dreamstime.com/b/children-education-kid-read-book-school-boy-reading-books-dreaming-over-blackboard-background-92807607.jpg', 'https://www.ctvnews.ca/polopoly_fs/1.4270510.1570292473!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg'];
    
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    
    // Render the current image
    return (
       
        <>
            
        <Header/>
        <div className='home'>
        
    <h2>NPM PUBLIC SCHOOL</h2>
    <p><i>
    NPM SCHOOL is a community of learners including students, parents and staff who are dedicated to creating an academically rigorous, culturally caring and inclusive learning environment. We are Reaching Excellence in Academics and Changing History! Together, we are champions of knowledge, our communities, the environment and of our futures. REACH Achievers are goal-oriented, critical thinkers and community leaders who are dedicated to achieving the highest level of integrity and academic success.
 
The administration and staff are committed to providing a challenging and supportive learning environment where all students can succeed and reach their full potential. Every member participates in cycles of continuous learning and improvement that includes establishing high expectations, goal setting, planning, action and reflection. 
To this end, we seek to develop well-rounded students who exemplify health, wellness and character development using our core schoolwide expectations and values.
    </i></p>
  

        </div>
        <img src={images[index] } alt='Chumma'  style={{ width: '500px', height: '500px', top: '50%', position: 'top 120px' }} />
        <br/>
        <br/>
       
        
        <About/>
        <br/>
        <br/>
        <Footer/>
        </>
        
        
        );
}

export default Home;
