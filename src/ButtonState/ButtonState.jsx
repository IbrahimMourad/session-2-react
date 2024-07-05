import { useState } from 'react';

const ButtonState = ({ count, setCount }) => {
  return (
    <button
      style={{
        color: count % 2 === 0 ? 'red' : 'green',
      }}
      onClick={() => setCount(count + 1)}
    >
      count {count}
    </button>
  );
};

export default ButtonState;
