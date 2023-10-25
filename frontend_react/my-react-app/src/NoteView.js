import { useEffect, useState } from "react";
import {
  getNoteById,
  getNoteFiles,
  downloadNotefile,
} from "./services/ClassnoteService";
import LoadingSpinner from "./utils/LoadingSpinner";

export default function NoteView({ id }) {
  const [classnote, setClassnote] = useState(null);
  const [files, setFiles] = useState([]); // [ {id: 1, name: "file1.pdf", file_key: "abcdefg"}, {id: 2, name: "file2.pdf", file_key: "abcdefg"}
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
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
  }, [id]);

  useEffect(() => {
    if (classnote && id) {
      getNoteFiles(id)
        .then((response) => {
          console.log(response);
          setFiles(response.files);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [classnote, id]);

  const handleDownload = () => {
    console.log("Downloaded");
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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

          {Array.isArray(files) && files.length > 0 ? (
            <section className="note-files mb-2">
              <h2>Files</h2>
              <p>Click on a file to download it</p>
              <ul>
                {files.map((file) => (
                  <li key={file.id}>
                    <a
                      href={downloadNotefile(`${file.id}.${file.file_ext}`)}
                      download={file.file_name}
                    >{file.file_name}</a>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <p>No files available for this note.</p>
          )}

          <section className="note-actions">
            <button className="btn btn-primary">
              Download all files as ZIP
            </button>
            <button className="btn btn-secondary">Add to Favourites</button>
          </section>
        </article>
      )}
    </>
  );
}
