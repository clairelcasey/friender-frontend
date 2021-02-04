import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../auth/UserContext";
import FrienderApi from "../api/api";

/** Upload Image Form
 *
 *
 * Routes -> UploadImageForm
 */

function UploadImageForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { currentUser } = useContext(UserContext);

  function handleChange(evt){
    console.log('handleChange, file is', evt.target.files[0]);
    setSelectedFile(evt.target.files[0])
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    const data = new FormData();
    data.append('file', selectedFile);
    let url = `http://localhost:5000/users/${currentUser.id}/image-upload`;
    
    console.log("TOKEN =", FrienderApi.token);
    let headers = {
      "Content-Type": "multipart/form-data",
      "Authorization": `${FrienderApi.token}`
    }
    let result = await axios({url, data, headers, method: "POST"});
    console.log('result of post request', result);
  }


  return (
    <div>
      <form
        id="uploadForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange} />
        <button
          type="submit">
          Submit Image
        </button>
      </form>
    </div>
  )
}

export default UploadImageForm;