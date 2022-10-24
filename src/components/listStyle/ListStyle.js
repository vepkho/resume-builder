import React from 'react'
import styles from './ListStyle.module.css'


const ListStyle = (props) => {
  return (
    <div className={styles.Container} style={{background : `${props.containerColor}`}}>
        <div className={styles.Badge}>{props.number}</div>
    </div>
  )
}

export default ListStyle