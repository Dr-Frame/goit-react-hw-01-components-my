import React from 'react';
import Statistics from './components/Statistics/Statistics';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './user.json';
import statisticalData from './statistical-data.json';
import friendData from './friends.json';
import transactionData from './transaction.json';

const App = () => {
  return (
    <React.Fragment>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactionData} />
    </React.Fragment>
  );
};

export default App;
