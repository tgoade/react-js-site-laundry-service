import './Step.css';

const Step = ({icon, heading, text, testid}) => {
    return (
        <>
          <div className="step">
            <div className="step--info">
                <i className={`fas ${icon} fa-2x`} role="img" data-testid={testid} ></i>
                <h3 className="step--text">{heading}</h3>
                <p>{text}</p>
              </div>
          </div>  
        </>
    )
}

export default Step