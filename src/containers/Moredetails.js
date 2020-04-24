import  React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';

const Moredetails = (props) => {
    const cardDetails = useSelector(state=> state.cardDatas.cardData);
    const i = useSelector(state=> state.indexNos);

    const btnBack = () => {
        props.history.push("./")
    }

    return(

        <div className="App-header2">
            <div><Button onClick={()=> btnBack()}>Back</Button></div>
            <img style={{width: '80%', height: '400px'}} src={cardDetails[i].img}></img>
             <div><h1>{cardDetails[i].title}</h1></div>
            <div><h3>{cardDetails[i].descp}</h3></div>
            <div>{cardDetails[i].btnTitle}</div>

        </div>
    );

}

export default Moredetails;