import React, {useState} from 'react'

function Counter() {
    const initialCount = 0;
    const [count,setCount] =useState(initialCount);
    const [items,setItems] = useState([]);

    const addItem = () => {
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }

        ])
    }
    return (
    <div>
      <h1>Nike Outlet</h1>
      <div>
      <br/><br/>
      </div>
      <div id='page'>
        <span class='count'>count {count} </span><br/>
     
      <button class='button button1'  onClick={() => setCount(initialCount)}>Reset</button>
      <button class='button' onClick={() => setCount(prevCount => prevCount + 1)}>Increse</button>
      <button class='button' onClick={() => setCount(prevCount => prevCount - 1)}>Decrese</button>
      <button class='button' onClick={() => setCount(prevCount => prevCount + 5)}>Add 5</button>
      <br/>
        <button onClick={addItem}>Add Item</button>
        <ol>
            {items.map(item => (
            <li key={item.id}> {item.value}</li>
            )
            )}
        </ol>
      </div>
    </div>
  )
}

export default Counter
