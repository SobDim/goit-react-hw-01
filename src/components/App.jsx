import Profiles from './Profile/Profile';
import FriendList from './FriendList/FriendList';

import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import 'modern-normalize';
import '../index.css';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <>
      <Profiles
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
