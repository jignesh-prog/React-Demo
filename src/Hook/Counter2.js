import React,{useState,useEffect} from 'react';

function CounterTwo() {
    const [count,setCount] = useState(0)
     useEffect(() => {
      const  interval = setInterval(() => { 
            setCount(count =>
       count + 1);
     }, 1000);
    return () => clearInterval(interval)},[count]);
  return (
    <div>
      Time is {count}s
    </div>
  )
}

export default CounterTwo