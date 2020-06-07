import React from 'react';
import './App.css';
import Hello from './hello'

function App({name,age}) {
return <div> Hello  <strong>{name} </strong> 
<br/>
<ul>
<li>Your Name is : {name}</li>
<li>Your age is : {age}</li>
<li>You are computer scientist</li>
</ul>
 <Hello firstName={name}/>
 </div>
}

export default App;
