import {useContext} from "react";
import UserContext from "../auth/UserContext";

function PotentialFriendsList() {
  const {potentialFriends} = useContext(UserContext);

  console.log(potentialFriends);
  function displayPotentialFriends() {
      return potentialFriends.map(friend => (<li>
        {friend.username}
        <img src={friend.image_url}></img>
        </li>));
  }

  return (
    <div>
      <ul>
        {displayPotentialFriends()}
      </ul>
    </div>
  );

}


export default PotentialFriendsList;