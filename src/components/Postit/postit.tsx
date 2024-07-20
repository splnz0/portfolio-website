import "./postit.css"

interface PostitProps{
    text:string;
    sender:string;
    color:number;
}

const Postit = ({text,sender,color}:PostitProps) => {
  return (
    <div className={`postit postit-color${color}`}>
        <div className={`corner corner-color${color}`}>
        </div>
        <div className="postit-text">      
            {text}
        </div>
        <div className="postit-sender">
            - {sender}
        </div>
    </div>
  )
}

export default Postit