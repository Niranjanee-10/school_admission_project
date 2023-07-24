// import React from 'react'

// export default function Details({
//     show:{
//         fname,
//         lname,
//         dob,
//         place,
//         religion,
//         nationality,
//         gender,
//         address,
//         mail,
//         aadhar,
//         birth,
//         report
//     },
// })
// {
// return(
//     <div>
    
//     <table border="1">
//     <center>
	
// 		<tr>
// 			<th>fname</th>
// 			<th>lname</th>
// 			<th>dob</th>
// 			<th>place</th>
// 			<th>religion</th>
// 			<th>nationality</th>
// 			<th>gender</th>
// 			<th>address</th>
// 			<th>email</th>
// 			<th>aadhar</th>
// 			<th>birth</th>
// 			<th>report</th>
			
			
// 		</tr>
// 		<tr>
// 			<td>{fname}</td>
// 			<td>{lname}</td>
// 			<td>{dob}</td>
// 			<td>{place}</td>
// 			<td>{religion}</td>
// 			<td>{nationality}</td>
// 			<td>{gender}</td>
// 			<td>{address}</td>
// 			<td>{aadhar}</td>
// 			<td>{birth}</td>
// 			<td>{report}</td>
			
			
// 		</tr>
       
//         </center>
// 	</table>
   
//     </div>
// );
// };

 
import React from 'react';

const Details = ({
    show: {
        fname,
        lname,
        dob,
        place,
        religion,
        nationality,
        gender,
        address,
        mail,
        aadhar,
        birth,
        report
    }
}) => {
    const tableStyle = {
    
        width: '100%',
        textAlign: 'center',
        marginTop: '10px',
    };

    const thStyle = {
        backgroundColor: 'pink',
        padding: '2px',
    };

    const tdStyle = {
        padding: '2px',
        
    };

    return (
        <div>
            <table style={tableStyle} border="1">
                <thead>
                    <tr>
                        <th style={thStyle}>First Name</th>
                        <th style={thStyle}>Last Name</th>
                        <th style={thStyle}>Date of Birth</th>
                        <th style={thStyle}>Place</th>
                        <th style={thStyle}>Religion</th>
                        <th style={thStyle}>Nationality</th>
                        <th style={thStyle}>Gender</th>
                        <th style={thStyle}>Address</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Aadhar</th>
                        <th style={thStyle}>Birth</th>
                        <th style={thStyle}>Report</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={tdStyle}>{fname}</td>
                        <td style={tdStyle}>{lname}</td>
                        <td style={tdStyle}>{dob}</td>
                        <td style={tdStyle}>{place}</td>
                        <td style={tdStyle}>{religion}</td>
                        <td style={tdStyle}>{nationality}</td>
                        <td style={tdStyle}>{gender}</td>
                        <td style={tdStyle}>{address}</td>
                        <td style={tdStyle}>{mail}</td>
                        <td style={tdStyle}>{aadhar}</td>
                        <td style={tdStyle}>{birth}</td>
                        <td style={tdStyle}>{report}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Details;

  