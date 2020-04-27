import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, isLog } from './actions/actions';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import Home from './containers/Home';
import { Router, Route , BrowserRouter} from 'react-router-dom'
import Moredetails from './containers/Moredetails';
import Chart from './containers/Chart';
import TwemojiDisplay from './containers/TwemojiDisplay';

//import { createBrowserHistory } from 'history'

function App(){

//   state = {
//     item: [
//       {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:img1},
//       {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: img2}
      
//   ]
//  };



//  constructor(props) {
//   super(props);

//   this.handleSubmit = this.handleSubmit.bind(this);
 
// }

// handleSubmit(event) {
//   event.preventDefault();
//   console.log(this.state.email,' ',this.state.password)
// }

// renderItems = () => {

//   return (
//     <Card.Group> 
//       {this.state.items.map((card) => 
//         <Card
//           key={card.id} // Make sure you use a unique key identifier for React
//           image={card.imageUrl} // This is the url of the image for the current object inside this.state.news.YOUR_CURRENT_OBJECT
//           header={card.title}
//           meta={card.type}
//           description={card.description}
//         />
//       )}
//     </Card.Group>
//   )
// }

 


//render(){
  
  ///const history = createBrowserHistory();
  
  return (
   
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Moredetails" component={Moredetails} />
      <Route exact path="/Chart" component={Chart} />
      <Route exact path="/Twemoji" component={TwemojiDisplay} />
    </BrowserRouter>
    
  );
//}

}

export default App;
