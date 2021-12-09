import { useState } from "react";
import "./Faqs.css";
import Question from "./Question";


const Faqs = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'Do you service where I live?',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        }, 
        {
            question: 'Do I need to separate my white, colored, and delicate laundry items?',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        },
        {
            question: 'Do I have the option to choose my preferred detegent and fabric softener?',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        },
        {
            question: 'Do I have the option to choose whether my clean clothes be delivered folded or hung?',
            answer: 'Curabitur sit amet rhoncus sapien.',
            open: false
        },
        {
            question: 'How will cost be calculated? Is there a minimum charge?',
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
                 
                    {faqs.map((faq, index) => (
                        <Question faq={faq} index={index} toggleFaqs={toggleFaqs}/>
                        // <div className={`faqs--qa ${faq.open ? "open" : ""}`} key={index} onClick={()=>{toggleFaqs(index)}}>
                        //     <div className="faqs--question">
                        //         <p>{faq.question}</p>
                        //         {faq.open ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
                        //     </div>
                        //     <div className="faqs--answer">
                        //         <div className="faqs--answer-wrap">
                        //             <p>{faq.answer}</p>
                        //         </div>
                        //     </div>
                        // </div>
                    ))}
                
            </div>
        </div>
    )
}

export default Faqs;