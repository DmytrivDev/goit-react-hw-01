import clsx from "clsx";

import css from "./FriendListItem.module.scss";

function FriendListItem({itemId, avatar, name, isOnline}) {
  return (
    <li id={itemId} className={css.friendItem}>
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
}

export default FriendListItem;
