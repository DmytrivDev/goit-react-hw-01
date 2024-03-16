import clsx from "clsx";

import css from "./FriendListItem.module.scss";

function FriendListItem({ friends }) {
  return (
    <>
      {friends.map((friend) => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <li key={id} className={css.friendItem}>
            <img src={avatar} alt="User avatar" />
            <div>{name}</div>
            <span
              className={clsx({
                [css.online]: isOnline,
              })}
            >
              {isOnline ? "Online" : "Ofline"}
            </span>
          </li>
        );
      })}
    </>
  );
}

export default FriendListItem;
