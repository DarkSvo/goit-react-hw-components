import React from 'react';
import classes from './Profile.module.css';


export const Profile = (props) => {
  return (<div className={classes.appWrapper}>
        <div className={classes.profileContainer}>
            <div className={classes.profileTitle}>
                <div className={classes.profileImage}>
                    <img src={props.user.avatar} className={classes.image} alt="user avatar" />
                </div>
                <div className={classes.profileName}>{props.user.username}</div>
                <div className={classes.profileNickname}>{props.user.tag}</div>
                <div className={classes.profileLocation}>{props.user.location}</div>
            </div>
            <div className={classes.profileStats}>
                <div className={classes.statsContainer}>
                    <div className={classes.statsTitle}>Followers</div>
                    <div className={classes.statsSubtitle}>{props.user.stats.followers}</div>
                </div>
                <div className={classes.statsContainer}>
                    <div className={classes.statsTitle}>Viewers</div>
                    <div className={classes.statsSubtitle}>{props.user.stats.views}</div>
                </div>
                <div className={classes.statsContainer}>
                    <div className={classes.statsTitle}>Likes</div>
                    <div className={classes.statsSubtitle}>{props.user.stats.likes}</div>
                </div>
            </div>
        </div>
    </div>);
};
