import React, {useState,useEffect} from 'react'

function Counter3() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = `You have Clicked ${count} times.`
    })
    
  return (
    <div>
      <button onClick = {() => setCount(count+1)}>Click {count}</button>
    </div>
  )
}

export default Counter3
