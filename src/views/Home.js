import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <button id="btn-increment" onClick={onIncrement}>
        Vous avez cliqué {counter} fois
      </button>
      <button id="btn-decrement" onClick={onDecrement}>
        Décrémentation
      </button>
    </div>
  );
};

export default Home;
