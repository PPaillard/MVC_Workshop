import React, { useRef, useState } from "react";
import { useCurrentUserContext } from "../contexts/userContext";

function Avatar() {
  const avatarRef = useRef(null);
  const { user, setUser, token } = useCurrentUserContext();
  const [msg, setMsg] = useState("Aucun upload effectué");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatarRef.current.files[0]) {
      // recupération des articles.
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("avatar", avatarRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeader,
        body: formData,
      };
      // on appelle le back
      fetch("http://localhost:5000/api/avatars", requestOptions)
        .then((response) => response.json())
        .then((results) => {
          // maj avatar
          setUser({ ...user, avatar: results.avatar });
          setMsg("Upload réussi !");
        })
        .catch((error) => {
          console.error(error);
          setMsg("Upload échoué !");
        });
    } else {
      setMsg(
        "Vous auriez pas oublié un truc ? Le fichier à uploader, par exemple ?"
      );
    }
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="file" ref={avatarRef} />
        <button type="submit">Envoyer</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default Avatar;
