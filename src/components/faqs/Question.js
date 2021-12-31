
import { Data } from "./Data";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Question = () => {
    const [preparedData, setPreparedData] = useState(null);
    const [displayImg, setDisplayImg] = useState(null);
    const [activeQ, setActiveQ] = useState(null);

    const prepareQwithIds = () => {                                         // Add unique ids to data creating a new data bject with ids
        const newData = Data.map((data) => ({...data, id: nanoid()}));
        setPreparedData(newData);
        setDisplayImg(newData[0].image);
    }
    useEffect(() => {
        prepareQwithIds();
    }, []);

    const faqHandler = (clickedQ, clickedImg) => {                                    // Sets the active question id  
        clickedQ === activeQ ? setActiveQ(null) : setActiveQ(clickedQ);
        setDisplayImg(clickedImg);
    }

    return (
        <div className="faqs--container wrapper">
            {preparedData && preparedData.map((data) => (
                <div key={data.id} className="faqs--question-wrap">
                    <div className={`faqs--qa`} onClick={()=>{faqHandler(data.id, data.image)}}>
                        <div className="faqs--question" aria-label={`question`}>
                            <p>{data.question}</p>
                            {activeQ === data.id ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                        </div>
                        <div className={`faqs--answer ${activeQ === data.id ? "open" : ""}`} aria-label={`answer`}>
                            <div className="faqs--answer-wrap">
                                <p>{data.answer}</p>
                            </div>
                        </div>
                    </div>
                    <div className="faqs--image">
                        <img src={activeQ ? data.image : displayImg} alt="" className={(activeQ === data.id) || activeQ === null ? "active-slide" : ""}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Question;