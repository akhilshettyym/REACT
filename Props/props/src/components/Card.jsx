const Card = (props) => {
  return (
    <div className="upperCard">
      <div className="card">
        <img src={props.img}></img>
        <h3 className="heading1">{props.song}</h3>
        <h5 className="heading2">{props.artist}</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default Card