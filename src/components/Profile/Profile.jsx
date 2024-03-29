import s from './Profile.module.css';
const Profiles = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.user__info}>
        <img src={image} alt="User avatar" />
        <p className={s.user__name}>{name}</p>
        <p className={s.user__tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.social__list}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profiles;
