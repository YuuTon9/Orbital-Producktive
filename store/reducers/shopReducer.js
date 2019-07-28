    
import ducks from '../../Components/game/shop/ducks.png'
const initialState = {
  shopList: [
  	{id: 0, price: 20, xLocation: 0, yLocation: 0, top: 590, left: 300, pic: ducks}, 
  	{id: 1, price: 20, xLocation: 256, yLocation: 0, top: 590, left: 1200, pic: ducks},
  	{id: 2, price: 30, xLocation: 0, yLocation: 256, top: 550, left: 1000, pic: ducks},
  	{id: 3, price: 50, xLocation: 256, yLocation: 256, top: 610, left: 410, pic: ducks} ],
  shopIndex: -1,
  bought: [],
}

const shopReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default shopReducer