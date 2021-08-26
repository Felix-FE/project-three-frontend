import { useHistory } from 'react-router-dom'

function ImageCard({ image }){
  const history = useHistory()
  function handleClick() {
    history.push(`/images/${image._id}`)
  }

  return (
    <div 
      key={image._id}
      className="card" 
      onClick={handleClick}
    >
      <img src={image.url} />
    </div>

    
  )

}

export default ImageCard