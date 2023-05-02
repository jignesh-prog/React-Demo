import React,{useState} from 'react'
import Counter from './Counter';
import Counter3 from './Counter3';
function Counter4() {
    const[display,setDisplay]= useState(true);
    const [name,setName] = useState({firstName:'' , lastName:''});
  return (
    <div>
        <h2>Enter your details</h2>
      <form>
        <label for='firstname'>First Name: </label>
        <input id='firstname' type='text' required value={name.firstName} onChange={(e) => setName({firstName: e.target.value})}/>
        <label for='lastname'>Last Name: </label>
        <input id='lastname' type='text' required value={name.lastName} onChange={(e) => setName({lastName: e.target.value})}/> <br/>
        <button onClick={() => setDisplay(!display )}>Login</button>
         { display  && <Counter /> }
         {display && <Counter3 />}
      </form><br/>
    </div>
  )
}

export default Counter4
