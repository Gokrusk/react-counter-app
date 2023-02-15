import React from 'react';

function Button({ text, buttonClick, manejarClic }) {
  return (
    <button
      className={buttonClick ? 'boton-clic' : 'boton-reset'}
      onClick={manejarClic}
    >
      {text}
    </button>
  );
}

export default Button;
