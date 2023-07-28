// import React, { useState, useEffect } from "react";
// import axios from "axios";
// //import BlogItem from "./BlogItem";
// //import "./styles.css";
// import Details from"./Details";

// const Admin = () => {
//   const [shows, setShows] = useState([]);
//   const[update,setUpdate]=useState([]);
//   const[del,setDel]=useState([]);

//   useEffect(() => {
//     fetchShows();
    
// }, []);


// const fetchShows = () => {
//     axios
//     .get("http://localhost:8080/get/") // Replace with your backend URL
//     .then((response) => {
//         setShows(response.data);
//         console.log(shows);
//       })
//       .catch((error) => {
//         console.error("Error fetching data :", error);
//       });
//   };


//   return (
//     <div>
//      {shows.map((show) => (
//         <Details key={show.fname}show={show}/>
//      ))} 
//     </div>
//   );
// };

// export default Admin;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./Details";

const Admin = () => {
  const [shows, setShows] = useState([]);
  //const [show, setShow] = useState([]);
  const [onUpdate,setOnUpdate]=useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = () => {
    axios
      .get("http://localhost:8080/get/") // Replace with your backend URL for fetching data
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
      });
  };

  const handleUpdate = (fname) => {
    const updatedShow = shows.find((show) => show.fname === fname);
  
    axios
      .put('http://localhost:8080/put/${fname}', updatedShow)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
      
        fetchShows();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDelete = (fname) => {
    
    axios
      .delete('http://localhost:8080/del/${fname}')
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
        
        fetchShows();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div>
    <div>
          {/* //onUpdate={() => handleUpdate(show.fname)} */}
      {shows.map((show) => (
        <Details
          key={show.fname}
          show={show}
          onDelete={() => handleDelete(show.fname)}
        />
      ))}
      </div>
      <div>
      {/* <button>
            {/* // onClick={()=>handleUpdate(show.fname)} */}
            {/* Update
          </button> */} 

      </div>
    </div>
  );
};

export default Admin;
