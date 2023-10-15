import configData from "./config.json"

export async function getNotes() {
  return fetch(`${configData.CLASSNOTES_URL}/classnotes/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getNoteById(id) {
  return fetch(`${configData.CLASSNOTES_URL}/classnotes/` + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getNoteFiles(id) {
  return fetch(`${configData.CLASSNOTES_URL}/classnotes/` + id + "/files", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}


// TODO: Check if this works
export async function uploadNoteFile(id, file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(
      `${configData.CLASSNOTES_URL}/classnotes/` + id + "/files",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("File upload failed");
    }
  } catch (err) {
    throw new Error(
      "An error occured while uploading the file: " + err.message
    );
  }
}


export async function downloadNotefile(id, fileKey) {
    return fetch(
        `${configData.CLASSNOTES_URL}/classnotes/` + id + "/files/" + fileKey,
        {
        method: "GET",
        }
    ).then((response) => {
        return response.blob();
    });
}

