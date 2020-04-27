import  React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, isLog, indexNo } from '../actions/actions';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';

const Home = (props) => {
    const cardDetails = useSelector(state=> state.cardDatas.cardData);
    const counter = useSelector(state=> state.counter);
    const isLogged = useSelector(state=> state.isLogged);
    
    const dispatch = useDispatch();

    const btnDetails = (no) =>{
      dispatch(indexNo(no))
      props.history.push("./Moredetails")
    }

    const btnGraph = () =>{
      
      props.history.push("./Chart")
    }

    const btnTwemoji = () =>{
      
      props.history.push("./Twemoji")
    }
   

    console.log('some',cardDetails)
 return(
    <div className="App">
      <header className="App-header">
      <div style={{display: 'flex', flexDirection:'column', alignContent: 'space-between', padding: '2%'}}>

        <div className="Card">
        {cardDetails.map((card) => (
        <Card style={{ width: '18rem', margin: '10px'}}>
          <Card.Img variant="top" src={card.img} style={{ height: '150px' }} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Subtitle>
              {card.descp}
            </Card.Subtitle>
          <Button style={{marginTop: '10px'}}variant="primary" onClick={() => btnDetails(card.id)} >{card.btnTitle}</Button>
          </Card.Body>
         </Card>
        )
        )}

        </div>

          <div style={{margin: '20px'}}>Counter: {counter}</div>

          <div style={{display: 'felx', flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>

            <Button style={{margin: '10px'}} onClick={() => dispatch(increment(5))}>+</Button>
           
            <Button  style={{margin: '10px'}} onClick={() => dispatch(decrement())}>-</Button>
           
         </div>

         <div style={{display: 'felx', flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
           <Button  style={{margin: '10px'}} onClick={() => dispatch(isLog())}>Info</Button>
           <Button  style={{margin: '10px'}}  onClick={() => btnGraph()}>Graph</Button>
           <Button  style={{margin: '10px'}}  onClick={() => btnTwemoji()}>Twemoji</Button>
         </div>
         <div style={{margin: '20px'}}>
         {isLogged ? <h6> Valar Morghulis </h6> : ''}
         </div>
        
        <a
          className="App-link"
          href="https://www.hbo.com/game-of-thrones"
          target="_blank"
          rel="noopener noreferrer"
          style={{margin: '10px'}}
        >
          GOT INFO
        </a>
        </div>
       
      </header>
    </div>
 );
  
}

export default Home;