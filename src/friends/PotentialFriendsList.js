import { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import FriendDetail from "./FriendDetail";
import "./PotentialFriendsList.css";

/** PotentialFriendsList component
* 
* Routed at /find-friends
* 
* Props:
* - like: function passed from App Component, handles liking a potential friend
* - dislike: function passed from App Component, handles disliking a potential friend
* 
* State: 
* - friendIndx: current index in the potentialFriends array
* 
* Context:
* - potentialFriends: array of objects 
*         [ {username, email, first_name, last_name, image_url, 
*            hobbies, interests, zip_code, friend_radius_miles}, ... ]
* 
* App -> Routes -> PotentialFriendsList -> FriendDetail
*/

function PotentialFriendsList({ like, dislike }) {
  const { potentialFriends } = useContext(UserContext);

  const [friendIndx, setFriendIndx] = useState(0);

  const friendInfo = potentialFriends[friendIndx];
  const total = potentialFriends.length;
  const leftIconHidden = friendIndx === 0 ? "hidden" : "";
  const rightIconHidden = friendIndx === total - 1 ? "hidden" : "";
  const goForward = () => setFriendIndx(friendIndx + 1);
  const goBack = () => setFriendIndx(friendIndx - 1);

  /* Handles liking the potential friend */
  function handleLike(evt) {

    // TODO: refactor if statement into a function and use in handleLike and handleDislike

    // If at end of potentialFriends array, need logic to prevent
    // having a friendIndx outside the bounds of the array
    if (friendIndx >= potentialFriends.length - 1) {
      if (friendIndx === 0) {
        setFriendIndx(0);
      } else {
        setFriendIndx(friendIndx => friendIndx - 1)
      }
    }

    like(friendInfo.id);
  }

  /* Handles disliking the potential friend */
  function handleDislike(evt) {
    if (friendIndx >= potentialFriends.length - 1) {
      if (friendIndx === 0) {
        setFriendIndx(0);
      } else {
        setFriendIndx(friendIndx => friendIndx - 1)
      }
    }

    dislike(friendInfo.id);
  }

  if (total === 0) return <div>No potential friends.</div>

  return (
    <div className="PotentialFriendsList">
      <h1>Your Potential Friend Matches!</h1>
      <div className="PotentialFriendsList-main">
        <i
          className={`fas fa-chevron-circle-left fa-2x ${leftIconHidden}`}
          onClick={goBack}
          data-testid="left-arrow"
        />
        <FriendDetail
          friendInfo={friendInfo}
          currNum={friendIndx + 1}
          totalNum={total}
          like={like}
          dislike={dislike}
        />
        <i
          className={`fas fa-chevron-circle-right fa-2x ${rightIconHidden}`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
      <button onClick={handleLike} class="btn btn-success m-2"><i class="fas fa-thumbs-up"></i>Like</button>
      <button onClick={handleDislike} class="btn btn-danger m-2"><i class="fas fa-thumbs-down"></i>Dislike</button>
    </div>
  );

}


export default PotentialFriendsList;