import s from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ friend }) => {
  return (
    <div className={s.wrapper}>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={s.name}>{friend.name}</p>
      <p className={clsx(friend.isOnline ? s.online : s.offline, 'status')}>
        {clsx(friend.isOnline ? 'Online' : 'Offline')}
      </p>
    </div>
  );
};

export default FriendListItem;
