import React, { useState, useEffect } from 'react';
import Header from './Header';
import './home.css';
function Home() {
    // Create state variables for the index and image array
    const [index, setIndex] = useState(0);
    const images = ['https://st.depositphotos.com/2420147/2658/i/600/depositphotos_26586893-stock-photo-old-school-classroom.jpg', 'https://images.pexels.com/photos/5211446/pexels-photo-5211446.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
    
    
    
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
        
    <h2>School</h2>
    <p>
A blog is a form of a digital journal wherein a single person or group regularly updates and writes new entries on a digital platform. Blogging in the classroom is used as an educational tool to augment, not replace, instruction and helps to keep students engaged, informed, and connected to their education.
For many teachers, creating classroom rules that kids follow is a difficult task. As teachers, most of us are sure of setting expectations in the classroom. However, many times we struggle to pass on our message accurately and effectively to the students. Due to this lack of expectation setting, students fail to adhere to the guidelines that are laid down by the teacher. And all this leads to a poor classroom environment along with a new series of challenges for the teacher.
Rules and procedures are imperative to create an effective learning environment, especially when students need to collaborate with each other. Other than these obvious reasons, children also need to learn the importance of discipline.
    </p>
  

        </div>
        <img src={images[index]}  style={{ width: '750px', height: '500px', top: '50%', position: 'top 120px' }} />
        </>
        
        
        );
}

export default Home;
