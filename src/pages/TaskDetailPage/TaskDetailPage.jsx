import React from 'react';
import styles from './TaskDetailPage.module.scss';
import {useParams} from "react-router-dom";
import {mathTasks} from "../../components/TodoList/TodoList.jsx";


export const TaskDetailPage = () => {
    const {taskId} = useParams();
    const task = mathTasks.find((task) => task.id === Number(taskId));

    console.log(task);
    return (
        <div className={styles.container}>
            <h2>нформация о задаче №{taskId}</h2>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
};
