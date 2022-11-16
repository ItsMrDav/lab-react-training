import React from 'react';

function Random({ min, max }) {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * max + min);
  return <>{`Random value between ${min} and ${max} => ${randomNumber}`}</>;
}

export default Random;
