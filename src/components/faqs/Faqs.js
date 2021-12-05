import { useState } from "react";
import "./Faqs.css";
import Question from "./Question";


const Faqs = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus fringilla augue fringilla. ',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        }, 
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus fringilla augue fringilla. ',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus fringilla augue fringilla. ',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus fringilla augue fringilla. ',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus fringilla augue fringilla. ',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        }
    ]);

    const toggleFaqs = (index) => {
        setFaqs(faqs.map((faq, i) => {
            if(i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }
    
    return (
        <div className="faqs">
            <div className="faqs--container wrapper">
                <h2>Frequently Asked Questions</h2>
               
                    {/* <Step src="images/schedule-icon.png" text="Schedule Your Pickup" testid="icon" /> */}
                    {faqs.map((faq, index) => (
                        <Question faq={faq} index={index} toggleFaqs={toggleFaqs}/>
                    ))}
                
            </div>
        </div>
    )
}

export default Faqs;