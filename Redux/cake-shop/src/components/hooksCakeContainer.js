import React from 'react'
import { useSelector } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes);
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer;