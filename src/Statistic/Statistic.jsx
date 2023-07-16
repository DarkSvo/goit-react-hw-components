import React from "react";
import classes from './statistic.module.css'

export const Statistic = (props) => {
    return (
        <div className={classes.statWrapper}>
            <div className={classes.statTitle}>Upload Stats</div>
            <div className={classes.boxWrapper}>
                {props.statistic.map(box => {
                    return <div key={box.id} className={classes.boxContainer}>
                        <div className={classes.boxTitle}>{box.label}</div>
                        <div>{box.percentage}</div>
                    </div>
                })}
            </div>
        </div>
    )
}