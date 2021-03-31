import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={styles['friends-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={styles.item} key={id}>
            <span
              className={styles.status}
              style={{ backgroundColor: `${colorSwitch(isOnline)}` }}
            ></span>
            <img className={styles.avatar} src={avatar} alt="" width="60" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

/* FriendList.defaultProps = {
  friends: PropTypes.shape
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/763/763704.svg',
}; */

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

function colorSwitch(toChange) {
  if (toChange) {
    return '#008000';
  } else {
    return '#ff0000';
  }
}

export default FriendList;
