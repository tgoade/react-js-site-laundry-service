import "./Card.css";

const Card = ({children, title, className=""}) => {
    const classes = `card ${className}`
    return (
        <div className={classes}>
            <div className="card-body">
                <h2 className="text-center mb-4 mt-2">{title}</h2>
                {children}
            </div>
          </div> 
    )
}

export default Card;