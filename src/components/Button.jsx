import React from 'react';

const Button = ({ type, onClick, children }) => {
  const classNames = `page-link ${type === 'outline' ? 'button-outline' : ''}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
