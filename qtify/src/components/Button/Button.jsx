import React from 'react'
import styles from './Button.module.css'


function Button({text}) { // text is coming as a prop
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default Button
