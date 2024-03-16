import FriendListItem from "./FriendListItem/FriendListItem";

import css from "./Friends.module.scss";

function Friends({friends}) {
  
  return (
    <ul className={css.friends}>
      {friends.map((friend) => {
        const { id, avatar, name, isOnline } = friend;
        return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />;
      })}
    </ul>
  );
} 

export default Friends;
