import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const onlineStatus = isOnline ? css.isOnline : css.isOffline;
  const statusWord = isOnline ? "Online" : "Offline";

  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={onlineStatus}>{statusWord}</p>
    </div>
  );
};
