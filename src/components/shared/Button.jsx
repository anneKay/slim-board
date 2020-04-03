import React from 'react';

const Button = ({ text, clicked, buttonType, buttonClass }) => {
  return (
    <>
      <button onClick={clicked} className={buttonClass}>
        {text}
      </button>
    </>
  );
};

export default Button;
