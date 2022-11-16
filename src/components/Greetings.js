import React from 'react';

function Greetings({ lang, children }) {
  let greet;
  if (lang === 'fr') {
    greet = 'Bonjour';
  }
  if (lang === 'de') {
    greet = 'Hallo';
  }
  return (
    <>
      <p>
        {greet},{children}
      </p>
    </>
  );
}

export default Greetings;
