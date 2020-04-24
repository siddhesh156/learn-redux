import { combineReducers } from 'redux';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';

//STATE
const initialState = {
  cardData: [
    {id: 0, img: img1, title: 'House Stark', 
  descp: 'House Stark is one of the Great Houses of the Seven Kingdoms and is the principal house of the North.',
   btnTitle: 'Winter is coming'},
   {id: 1, img: img2, title: 'House Lannister', 
  descp: 'House Lannister of Casterly Rock is one of the Great Houses of Seven Kingdoms, and the principal house of the westerlands.',
   btnTitle: 'Hear Me Roar'},
   {id: 2, img: img3, title: 'House Tyrell', 
  descp: 'House Tyrell of Highgarden is one of the Great Houses of the Seven Kingdoms, being Lords Paramount of the Mander and the liege lords of the Reach',
   btnTitle: 'Growing Strong'},
   {id: 3, img: img4, title: 'House Targaryen', 
  descp: 'House Targaryen of Dragonstone is a noble family of Valyrian descent who once ruled the Seven Kingdoms of Westeros.',
   btnTitle: 'Fire And Blood'}
  ]
}

//REDUCER
const cardReducer = (state = initialState,action) =>{
  switch(action.type){
    case 'CARDDATA': return{
      ...state,
      card: action.cardData
       }
    default:
        return state;
  }
}

//REDUCER
const indexReducer = (state = 0,action) =>{
  switch(action.type){
    case 'INDEX':
      return action.payload;
    default:
        return state;
  }
}

//REDUCER
const counterReducer = (state = 0,action) =>{
    switch(action.type){
      case 'INCREMENT':
        return state + action.payload;
      case 'DECREMENT':
        return state - 1;
      default:
          return state;
    }
  }

  //REDUCER
const isLoggedReducer = (state = false,action) =>{
    switch(action.type){
      case 'SIGN_IN':
        return !state;
    default:
        return state;
      
    }
  }

  const allReducers = combineReducers({
      cardDatas: cardReducer,
      counter: counterReducer,
      isLogged: isLoggedReducer,
      indexNos: indexReducer
      
    });

  export default allReducers;