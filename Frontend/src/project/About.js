import React, { useState, useEffect } from 'react';

import "./about.css";
function About() {
    // Create state variables for the index and image array
    const [index, setIndex] = useState(0);
    const images = ['https://upload.wikimedia.org/wikipedia/commons/2/2e/Mariadelapasion2.jpg','https://www.josephs.ac.in/wp-content/uploads/2019/08/motto.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Philip_Fruytiers_-_St._Francis_of_Assisi.jpg/800px-Philip_Fruytiers_-_St._Francis_of_Assisi.jpg'];
    
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
  


        return () => clearInterval(intervalId);
    }, []);
    
    // Render the current image
    return (
       
        <>
            
       
       <div className='about-section'>
       <h1>About Us</h1>
       </div>
       <br/>
       
        <div className='about'>
        
        <h3><b><center>OUR VISION</center></b></h3>
        <p><i>True to the ideals and vision of Blessed Mary of the Passion, the foundress of the Institute of the Franciscan Missionaries of Mary, the management considers the school a powerful agent of social transformation.</i></p>
     
        <h3><b><center>OUR PATRON</center></b></h3>
        <p><i>Known as Francis of Assisi (Italian: Francesco d'Assisi; c. 1181 – 3 October 1226),[a] was an Italian mystic and Catholic friar who founded the Franciscans. He was inspired to lead a life of poverty as an itinerant preacher. One of the most venerated figures in Christianity,[3][1] Francis was canonized by Pope Gregory IX on 16 July 1228. He is usually depicted in a robe with a rope as a belt </i></p>
        
        <h3><b><center>OUR MOTTO</center></b></h3>
        

    <p><i>“Towards Truth and Love” embodies the spiritual and moral principles of our education. Love of God and one’s brothers and sisters together with an unrelenting search for “Truth” in all the circumstances of one’s life</i></p>


        </div>
        <img src={images[index]}  style={{ width: '500px', height: '550px', top: '50%', position: 'top 120px' }} />
        
        </>
        
        
        );
}



export default About