import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDeleteItem }) => {
  if (items.length > 0) {
    return (
      <ul className={styles.list}>
        {items.map(item => (
        <li key={item.id}>
          <Item
            value={item.value} 
            isDone={item.isDone} 
            id={item.id} 
            onClickDone={onClickDone}
            onClickDeleteItem={onClickDeleteItem} 
          />
        </li>))}
      </ul>
    );
  } else {
    return (
      <div className={styles['empty-list']}>
        <p className={styles['empty-list__text']}>Вы ещё не добавили ни одной задачи</p>
        <p className={styles['empty-list__subtext']}>Сделайте это прямо сейчас!</p>
      </div>
    );
  };
};

export default ItemList;