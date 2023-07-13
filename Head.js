import React from 'react';
import { useSelector } from 'react-redux';

export default function Head() {
  const first = useSelector((state) => {
    console.log(state);
    return state.UpDown
  });

  return <div style={{marginLeft:"45px"}}>{first}</div>;
}