import { useEffect, useState } from "react";
import { getNoteById, getNoteFiles } from "./services/ClassnoteService";
import LoadingSpinner  from "./utils/LoadingSpinner";

export default function NoteView({id}) {

    const [classnote, setClassnote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(id) {
            console.log(id);
            getNoteById(id)
                .then((response) => {
                    console.log(response);
                    setClassnote(response);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    , [id]);


  return (
      <>
    { isLoading ? (
        <LoadingSpinner />
    ) :   ( 

      <article className="note-detail d-inline-flex flex-column mt-5 mx-5">
        <section className="title d-flex flex-column mb-2">
          <h1 className="align-self-center">{classnote.title}</h1>
          <p className="align-self-end">Uploaded by Lorem Ipsum</p>
        </section>
        <section className="note-metadata mb-2">
          <p>
            Major: <span className="fw-bold">Computer Science</span>
          </p>
          <p>
            Downloads: <span className="fw-bold">{classnote.downloads}</span>
          </p>
          <p>
            Year: <span className="fw-bold">2023</span>
          </p>
          <p>
            Score: <span className="fw-bold">{classnote.score}</span>
          </p>
        </section>

        <section className="note-actions">
          <button className="btn btn-primary">
            <svg
              width="8%"
              height="8%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="btn btn-secondary">Add to Favourites</button>
        </section>
      </article>
    )}
    </>
  );
}
