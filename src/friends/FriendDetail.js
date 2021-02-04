import React from "react";
import "./FriendDetail.css";

function FriendDetail({friendInfo, currNum, totalNum}) {
  const {
    first_name,
    last_name,
    hobbies,
    image_url,
    interests,
    username,
    zip_code
  } = friendInfo;
  return (
    <div className="FriendDetail">
      <h4 className="FriendDetail-title">{first_name} {last_name}</h4>
      <p className="FriendDetail-title">Hobbies include: {hobbies}</p>
      <p className="FriendDetail-title">Interests include: {interests}</p>
      <img className="FriendDetail-image" src={image_url} alt="User Image" />
      <small className="FriendDetail-small">
        Potential Friend {currNum} of {totalNum}.
      </small>
    </div>
  );
}

export default FriendDetail;
