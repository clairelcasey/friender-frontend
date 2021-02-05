import React from "react";
import "./FriendDetail.css";

/** FriendDetail component
* Presentational component to display potential friend details.
* 
* Props:
* - friendInfo: object of friend info
*          {username, email, first_name, last_name, image_url, 
*           hobbies, interests, zip_code, friend_radius_miles}
* - currNum: current potential friend number
* - totalNum: total number of potential friends 
* 
* State: none
* 
* PotentialFriendsList -> FriendDetail
*/

function FriendDetail({friendInfo, currNum, totalNum}) {
  const {
    first_name,
    last_name,
    hobbies,
    image_url,
    interests,
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
