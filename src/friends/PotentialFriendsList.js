import { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import FriendDetail from "./FriendDetail";
import "./PotentialFriendsList.css";


function PotentialFriendsList() {
  const { potentialFriends } = useContext(UserContext);

  const [friendIndx, setFriendIndx] = useState(0);
  const friendInfo = potentialFriends[friendIndx];
  const total = potentialFriends.length;
  const leftIconHidden = friendIndx === 0 ? "hidden" : "";
  const rightIconHidden = friendIndx === total - 1 ? "hidden" : "";
  const goForward = () => setFriendIndx(friendIndx + 1);
  const goBack = () => setFriendIndx(friendIndx - 1);


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
        />
        <i
          className={`fas fa-chevron-circle-right fa-2x ${rightIconHidden}`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );

}


export default PotentialFriendsList;