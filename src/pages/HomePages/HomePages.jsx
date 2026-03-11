import React from 'react';
import styles from './HomePages.module.scss';
import {TodoList} from "../../components/TodoList/TodoList.jsx";


export const HomePages = () => {
    return (
        <div className={styles.container}>
            <TodoList />
        </div>
    );
};
