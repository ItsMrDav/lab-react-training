import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  height = `${height}cm`;
  birth = birth.toDateString();

  return (
    <>
      <img src={picture} alt="picture" />
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth}</p>
    </>
  );
}

export default IdCard;
