import React from 'react'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt="logo" />
        <h1>机器人反帝哦方式的蜜蜂到</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
      </div>
    </div>
  );
}

export default App;
