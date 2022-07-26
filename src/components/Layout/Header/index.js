import React from "react";
import classNames from "classnames/bind";

// styles
// @ts-ignore
import styles from "./Header.module.scss";
//import "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
    return <div className={cx("wrapper")}>Header</div>;
};

export default Header;
