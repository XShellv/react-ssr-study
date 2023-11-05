import React from "react";
import styles from "./index.module.less";
import { Link, Outlet } from "react-router-dom";

export default function index() {
    return <>
        <div className={styles.header}>
            <Link to="/">首页</Link>
            <Link to="/about"> 关于我</Link>
        </div>
        <Outlet />
    </>;
}
