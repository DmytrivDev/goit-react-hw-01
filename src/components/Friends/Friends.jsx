import FriendListItem from "./FriendListItem/FriendListItem";

import css from "./Friends.module.scss";

function Friends({friends}) {
  
  return (
    <ul className={css.friends}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

export default Friends;
