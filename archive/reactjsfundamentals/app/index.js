import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

const USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
};


const ProfileName = ({name}) => <div>{name}</div>;
const ProfilePic = ({imageUrl}) => <img src={imageUrl} style={{height: 100, width: 100}} />;
const ProfileLink = ({username}) => {
  return (
    <div>
      <a href={'http://github.com/' + username}>
        {username}
      </a>
    </div>
  );
};

const Avatar = ({user}) => {
  return (
    <div>
      <ProfilePic imageUrl={user.image}></ProfilePic>
      <ProfileName name={user.name}></ProfileName>
      <ProfileLink username={user.username}></ProfileLink>
    </div>
  )
}

ReactDOM.render(
  routes,
  document.getElementById('app')
);