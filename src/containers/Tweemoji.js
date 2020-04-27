import twemoji from 'twemoji';
import React from 'react';
export default function Emoji(props) {
  const str = twemoji.parse(props.emoji);
  // -> "<img src="<twitter cdn>" draggable="false" alt="<emoji>">"
  // gets the attributes from the img string
  const elem = str
    // splits by spaces
    .split(/ /g)
    // splits matches the attributes and value
    .map(x => x.match(/^(.+?)=”(.+?)”/))
    // removes extra that didn't match
    .filter(Boolean)
    // builds an object with 2nd and 3rd elements of the match array
    .reduce((obj, [ _, key, val ]) => ({
      ...obj,
      [key]: val
    }), {});
return (
   <img
     src={elem.src}
     alt={elem.alt}
     draggable={elem.draggable}
     {...props}/>
  );
}