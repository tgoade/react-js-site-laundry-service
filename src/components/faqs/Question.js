
const Question = ({faq, index, toggleFaqs}) => {
    return (
        <div className={`faqs--qa ${faq.open ? "open" : ""}`} key={index} onClick={()=>{toggleFaqs(index)}}>
            <div className="faqs--question">
                <p>{faq.question}</p>
                {faq.open ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}
            </div>
            <div className="faqs--answer">
                <p>{faq.answer}</p>
            </div>
        </div>
    )
}

export default Question;