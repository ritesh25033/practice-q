//rafce shortcut for react template  extension es7+react/redux/react-native snippet and eslint and prettier and
import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Search from '../Search/Search';

const Navbar = () => {
  return (
    // <div>
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder={"Search a song of your choice"} />
      <Button text={"Give Feedback"} />
    </nav>
    // </div>
  );
};

export default Navbar;
