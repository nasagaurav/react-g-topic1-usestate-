import React from 'react';
import './style.css';

export default function App() {
    const a = [a,seta] = React.useState([]);

    const p1 =()=>{ 
    
      seta=( [...a,' '] );
    }

return(
 <div>
   <button onClick={p1}>add more questions</button>

<h1>total questions {a.length}</h1>

<ol>
{a.map(item=>  <li>question </li>)}

</ol>

   </div>
);
}
