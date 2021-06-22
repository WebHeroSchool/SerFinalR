import React from 'react';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id, onClickDeleteItem}) => {
  return (
    <div className={styles.wrapp}>
      <input
        type='checkbox'
        className={styles.checkbox}
        id={id}
        defaultChecked={isDone}
      />
      <label
        htmlFor={id}
        className={styles.value}
        onClick={() => onClickDone(id)}
      >
        {value}
      </label>
      <button
        className={styles['button_delete']}
        onClick={() => onClickDeleteItem(id)}
      />
    </div>
  );
};

export default Item;