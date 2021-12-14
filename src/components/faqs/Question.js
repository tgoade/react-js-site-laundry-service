
import { Data } from "./Data";
import { useState } from "react";

const Question = () => {
    const [activeQ, setActiveQ] = useState(null);

    const faqHandler = (question) => {
        if(question === activeQ){
            setActiveQ(null);
        } else {
            setActiveQ(question);
        }
    }

    return (
        <>
            {Data.map((data) => (
                <div className={`faqs--qa`} key={data.number} onClick={()=>{faqHandler(data.number)}}>
                    <div className="faqs--question" aria-label={`question ${data.number}`}>
                        <p>{data.question}</p>
                        {activeQ === data.number ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                    </div>
                    <div className={`faqs--answer ${activeQ === data.number ? "open" : ""}`} aria-label={`answer ${data.number}`}>
                        <div className="faqs--answer-wrap">
                            <p>{data.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Question;