import React from 'react';

function BoxColor({ r, g, b }) {
  return (
    <>
      <div style= backgroundColor: rgb({r},{g},{b})> </div>
    </>
  );
}

export default BoxColor;
