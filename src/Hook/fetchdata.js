import React, {useState,useEffect} from 'react'
import axios from 'axios';

function Fetchdata() {
  const [photo,setPhoto] = useState({});
  const[id,setId] = useState(1);
  const [idFromButtonClick,setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id)
  }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${idFromButtonClick}`)
    .then(res => {
      setPhoto(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[idFromButtonClick])
 
  return (
    <div>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>Fetch Photo</button>
      {photo.thumbnailUrl}
    </div>
  )
}

export default Fetchdata
