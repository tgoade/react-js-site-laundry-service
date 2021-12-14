import "./Faqs.css";
import Question from "./Question";

const Faqs = () => { 
    return (
        <div className="faqs">
            <div className="faqs--container wrapper">
                <h2>Frequently Asked Questions</h2>
                <Question /> 
            </div>
        </div>
    )
}

export default Faqs;