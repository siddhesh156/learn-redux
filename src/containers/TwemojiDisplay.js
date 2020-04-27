import  React from 'react'; 
import Twemoji from 'react-twemoji';
import { Card, Button } from 'react-bootstrap';
import EmojiConvertor from 'emoji-js';
import './TwemojiDisplay.css';
 
class TwemojiDisplay extends React.Component{
     array1 = ['😃','😄','😂','😉'];
     array2 = [':smiley:',':smile:',':joy:',':wink:'];
     array3 = ['https://twemoji.maxcdn.com/v/latest/svg/1f600.svg','https://twemoji.maxcdn.com/v/latest/svg/1f603.svg','https://twemoji.maxcdn.com/v/latest/svg/1f604.svg','https://twemoji.maxcdn.com/v/latest/svg/1f601.svg'];
    nr = 600;
     imgSrc = 'https://twemoji.maxcdn.com/v/latest/svg/1f' +`${this.nr}`+'.svg';
    
     nrArr = [];

      btnAdd = () =>{
       
      }

     render() {
        var emoji = new EmojiConvertor();
        var output2 = emoji.replace_colons(":smiley:");
        var output3 = emoji.replace_colons(":smile:");
       // console.log(this.imgSrc)
        return (
        <div className="App-header">
            <div className="TwemojiDisplayCss">
                {this.array3.map((emoji) => ( <Card style={{ width: '18rem', margin: '20px'}}>
                <Card.Img variant="top" src={emoji} style={{ height: '150px' , marginTop: '5px' }} />
                <Card.Body>
                    <Card.Title>Twemoji URL</Card.Title>
                    <Card.Subtitle>Enter your name</Card.Subtitle>
                    <input type="text" class="form-control-plaintext" style={{ border : "solid", borderRadius : "5px",
  borderColor: "blue", marginTop: '10px'}}></input>
                <Button style={{marginTop: '10px'}}variant="primary">Next</Button>
                </Card.Body>
            </Card>))
        }
            </div>



        <Twemoji style={{display: 'flex',  justifyContent: 'space-around', backgroundColor: 'transparent', width: '100%', position: 'absolute', bottom :'10px'}}  options={{ className: 'twemoji' }}>
        <p style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'blue' , width: '50%'}}>
            <b>Twemoji: <span style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'blue', padding: '2%'}}>{this.array1}</span> </b>
        </p>

        <p style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'blue' , width: '50%'}}>
           <b>Emoji-js: <span style={{display: 'flex', justifyContent: 'space-between', 
            backgroundColor: 'blue', padding: '2%'}}>{this.array2.map((entry, index)=>( emoji.replace_colons(entry)))}</span> </b>
        </p>
         
        </Twemoji>
        </div>
        );
    }
}

export default TwemojiDisplay;


/*  <p style={{display: 'flex', justifyContent: 'space-between'}}>
         
        <span style={{margin: '20px', padding: '5%'}}>😉</span>
        <span style={{margin: '20px', padding: '5%'}}>😂</span>
        <span style={{margin: '20px', padding: '5%'}}>{output2}</span>
        <span style={{margin: '20px', padding: '5%'}}>{output3}</span>
        </p>

        */


/* 
const parsedText = parseEmojis("Hello 👋 world");
      if (parsed.length === 1) {
          if (!parsed[0].emoji) {
            return parsed[0].text;
          }
          else {
            return <Emoji emoji={parsed[0].text} style={style.emoji}/>;
          }
        }
        else {
          return parsed.map((x, i) => {
            if (x.emoji) {
              return (
                <Emoji
                  key={i}
                  style={style.emoji}
                  emoji={x.text}/>
              );
            }
            return <span key={i}>{x.text}</span>;
          });
        }
      }

*/