import './Step.css';

const Step = ({src, text}) => {
    return (
        <>
          <div className="step">
              <figure >
                <img src={src} className="step--icon" alt={text} />
              </figure>
              <div className="step--info">
                  <h3 className="step--text">{text}</h3>
              </div>
          </div>  
        </>
    )
}

export default Step