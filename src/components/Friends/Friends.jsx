import React from "react";
import classes from './Friends.module.css';


export const Friends = (props) => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div key={friend.id} className={classes.friendBox}>
                        <div>{friend.isOnline
                        ? <div className={classes.onlineInd}></div>
                        : <div className={classes.offlineInd}></div>
                        }</div>
                        <div className={classes.imgCont}>
                        <img src={friend.avatar} className={classes.image} alt="user avatar" />
                        </div>
                        <div className={classes.name}>{friend.name}</div>
                    </div>
                )
            })}
        </div>
    )
}