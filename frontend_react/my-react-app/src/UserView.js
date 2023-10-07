import React from 'react';
import './UserView.css';
import sample3 from "./images/imagen 3.png";

function UserView() {
  // Dummy user data (replace with actual user data)
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    profileImage: sample3, // Replace with the actual image path
  };

  // Dummy favorite PDFs (replace with actual data)
  const favoritePDFs = [
    {
      title: 'PDF 1',
      url: '/path/to/pdf1.pdf',
    },
    {
      title: 'PDF 2',
      url: '/path/to/pdf2.pdf',
    },
    {
      title: 'PDF 3',
      url: '/path/to/pdf3.pdf',
    },
  ];

  return (
    <div>
      {/* Gray box with user information */}
      <div className="user-info-box">
        <div className="user-image">
          <img src={user.profileImage} alt="User" />
        </div>
        <div className="user-details">
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p>Email: {user.email}</p>
          {/* Add more user information here */}
        </div>
      </div>

      {/* Section for favorite PDFs */}
      <div className="favorite-pdfs">
        <h3>Favorite PDFs</h3>
        <ul>
          {favoritePDFs.map((pdf, index) => (
            <li key={index}>
              <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                {pdf.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserView;
