import React from 'react';

function Button({ text, buttonClick, manageClick }) {
  return (
    <button
      className={buttonClick ? 'btn-click' : 'btn-reset'}
      onClick={manageClick}
    >
      {text}
    </button>
  );
}

export default Button;
