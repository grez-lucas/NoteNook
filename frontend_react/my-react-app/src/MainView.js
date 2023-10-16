// import React from "react";
// import sample1 from "./images/imagen 1.png";
// import sample2 from "./images/imagen 2.png";
// import sample3 from "./images/imagen 3.png";

// function MainView() {
//   return (
//     <>
//       <div className="uploads-container">
//         <h1>Last Uploaded Notes: </h1>
//         <div className="items-container">
//           <div className="upload-item">
//             <img src={sample1} alt="Document 1" />
//             <p>Document 1</p>
//           </div>
//           <div className="upload-item">
//             <img src={sample2} alt="Document 2" />
//             <p>Document 2</p>
//           </div>
//           <div className="upload-item">
//             <img src={sample3} alt="Document 3" />
//             <p>Document 3</p>
//           </div>
//           <div className="upload-item more">
//             <span className="more-icon">...</span>
//             <p>More</p>
//           </div>
//         </div>
//       </div>

//       <div className="uploads-container">
//         <h1>Popular Notes: </h1>
//         <div className="items-container">
//           <div className="upload-item">
//             <img src={sample1} alt="Document 1" />
//             <p>Document 1</p>
//           </div>
//           <div className="upload-item">
//             <img src={sample2} alt="Document 2" />
//             <p>Document 2</p>
//           </div>
//           <div className="upload-item">
//             <img src={sample3} alt="Document 3" />
//             <p>Document 3</p>
//           </div>
//           <div className="upload-item more">
//             <span className="more-icon">...</span>
//             <p>More</p>
//           </div>
//         </div>
//       </div>

//       <div className="uploads-container">
//         <h1>My Favourite Notes: </h1>
//         <div className="items-container">
//           <div className="upload-item">
//             <img src={sample1} alt="Document 1" />
//             <p>Document 1</p>
//           </div>
//           <div className="upload-item">
//             <img src={sample2} alt="Document 2" />
//             <p>Document 2</p>
//           </div>
//           <div className="upload-item">
//             <img src={sample3} alt="Document 3" />
//             <p>Document 3</p>
//           </div>
//           <div className="upload-item more">
//             <span className="more-icon">...</span>
//             <p>More</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MainView;


import React from "react";
import { useState, useEffect } from "react";
import "./MainView.css";  // Agregar tu archivo de estilos aquí
import sample1 from "./images/imagen 1.png";
import sample2 from "./images/imagen 2.png";
import sample3 from "./images/imagen 3.png";
import { getNotes, getNoteFiles } from "./services/ClassnoteService";
import LoadingSpinner from "./utils/LoadingSpinner"



const handleGetNotes = () => {
  getNotes()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

const handleGetNoteFiles = () => {
  getNoteFiles(1)
  .then(response => {
    console.log(response);
  }
  )
  .catch(error => {
    console.log(error);
  }
  )
}


const NoteItem = ({ image, alt, text, href }) => (
  <a 
  href={href} className="upload-item"
  >
    <img src={image} alt={alt} />
    <p>{text}</p>
  </a>
);

const MoreItem = () => (
  <a href="/link-to-more" className="upload-item more">
    <span className="more-icon">...</span>
    <p>More</p>
  </a>
);

const MainView = () => {

const [isLoading, setIsLoading ] = useState(true);

const [noteData, setNoteData] = useState([
  { id: 1, image: sample1, alt: "Document 1", text: "Document 1", href: "/link-to-document1" },
  { id: 2, image: sample2, alt: "Document 2", text: "Document 2", href: "/link-to-document2" },
  { id: 3, image: sample3, alt: "Document 3", text: "Document 3", href: "/link-to-document3" },
]);

useEffect(() => {
  getNotes()
  .then(response => {
    console.log(response);
    const parsedNoteData = response.map((note) => ({
      id: note.id,
      image: sample1,
      alt: `Document ${note.id}`,
      text: note.title,
      href: `/link-to-document${note.id}`,
    }));
    setNoteData(parsedNoteData.slice(0, 3)); // Only the first three notes for now
    setIsLoading(false);
  })
  .catch(error => {
    console.log(error);
    setIsLoading(false);
  })
}
, []);
  
 return (


  <>
  { isLoading ? (<LoadingSpinner />) : (
    ["Last Uploaded", "Popular", "My Favourite"].map((category) => (
      <div className="uploads-container" key={category}>
        <h1>{category} Notes: </h1>
        <div className="items-container">
          {noteData.map((note) => (
            <NoteItem
              key={note.id}
              image={note.image}
              alt={note.alt}
              text={note.text}
              href={note.href}
            />
          ))}
          <MoreItem />
          <button type="button" onClick={handleGetNoteFiles}>Get Notes</button>
        </div>
      </div>
    ))
  )} 
    
  </>
)};

export default MainView;