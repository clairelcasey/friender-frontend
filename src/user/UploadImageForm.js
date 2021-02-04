import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../auth/UserContext";

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
    let headers = {
      "Content-Type": "multipart/form-data"
    }
    let result = await axios.post(url, data, headers);
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