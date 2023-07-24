import React from 'react';

const AdminFeedetails = ({
    show: {
        name,
        mail,
        rollnum,
        std

    }
}) => {
    const tableStyle = {
    
        width: '100%',
        textAlign: 'center',
        marginTop: '10px',
    };

    const thStyle = {
        backgroundColor: 'pink',
        padding: '1px',
    };

    const tdStyle = {
        padding: '1px',
       
        
    };

    return (
        <div>
            <table style={tableStyle} border="1">
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Mail</th>
                        <th style={thStyle}>Admission Number</th>
                        <th style={thStyle}>Standard</th>
                        
                    </tr>
                </thead>
              
               
                <tbody>
                    <tr>
                        <td style={tdStyle}>{name}</td>
                        <td style={tdStyle}>{mail}</td>
                        <td style={tdStyle}>{rollnum}</td>
                        <td style={tdStyle}>{std}</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminFeedetails;
