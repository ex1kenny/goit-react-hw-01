import css from "./FriendListItem.module.css";

export const FriendListItem = ({ user }) => {
  const onlineStatus = user.isOnline ? css.isOnline : css.isOffline;
  const statusWord = user.isOnline ? "Online" : "Offline";
  return (
    <div className={css.item}>
      <img className={css.avatar} src={user.avatar} alt="Avatar" width="48" />
      <p className={css.name}>{user.name}</p>
      <p className={onlineStatus}>{statusWord}</p>
    </div>
  );
};
