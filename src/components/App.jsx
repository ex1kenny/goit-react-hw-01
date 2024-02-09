import { Profile } from "./Profile/Profile.jsx";
import userData from "../userData.json";
import { FriendList } from "./FriendList/FriendList.jsx";
import friendsData from "../friends.json";
import transactionsData from "../transactions.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";

export const App = () => {
  return (
    <div className="container">
      <Profile data={userData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
};
