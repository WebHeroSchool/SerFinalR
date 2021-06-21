import React from 'react';
import classnames from 'classnames';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    isError: false,
  };

  onButtonClick = () => {
    if (this.state.inputValue === '') {
      this.setState({
        isError: true,
      });

      setTimeout(() => {
        this.setState({
          isError: false
        });
      }, 1500);
    } else {
      this.setState({
        inputValue: '',
        isError: false
      });
  
      this.props.onClickAddItem(this.state.inputValue);
    };
  };

  render() {
    const { inputValue, isError } = this.state;
    const { classNameForInputWrapp } = this.props;
    
    return (
      <div className={styles.wrap}>
        <div className={classnames({
          [styles['wrap__text']]: true,
          [styles['wrap__error-empty-text']]: isError,
          [styles['wrap__error-repeat-case']]: classNameForInputWrapp,
        })}>
          <input
            placeholder={'Введите текст'}
            className={styles.input}
            value={inputValue}
            onChange={event =>
              this.setState({
                inputValue: event.target.value 
              })
            }>
          </input>
        </div>
        <button className={styles.wrap__button} onClick={this.onButtonClick}></button>
      </div>
    );
  };
};

export default InputItem;