
const Question = ({faq, index, toggleFaqs}) => {
    console.log(`key=${index}`);
    return (
        <div className={`faqs--qa ${faq.open ? "open" : ""}`} key={index} onClick={()=>{toggleFaqs(index)}}>
            <div className="faqs--question">
                <p>{faq.question}</p>
                {faq.open ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
            </div>
            <div className="faqs--answer">
                <div className="faqs--answer-wrap">
                    <p>{faq.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Question;