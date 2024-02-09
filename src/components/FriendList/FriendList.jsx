import css from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      {friends.map((friend) => (
        <FriendListItem user={friend} key={friend.id} />
      ))}
    </div>
  );
};
