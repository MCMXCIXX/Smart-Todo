import React from 'react';
import styles from './TodoItem.module.scss';


export const TodoItem = (props) => {
    const {task } = props;
    return (

        <div className={styles.container}>
            <label htmlFor={`task${task.id}`}>
                <p>{task.title}</p>
                <input id={`task${task.id}`} type="checkbox"/>
            </label>
        </div>
    );
};
