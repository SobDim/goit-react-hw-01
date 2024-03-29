import s from './FriendListItem.module.css';
import clsx from 'clsx';
const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      <p className={clsx(friend.isOnline ? s.online : s.offline)}>
        {clsx(friend.isOnline ? 'Online' : 'Offline')}
      </p>
    </div>
  );
};

export default FriendListItem;

// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.
