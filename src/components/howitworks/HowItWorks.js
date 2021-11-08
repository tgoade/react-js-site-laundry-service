import Step from "./Step";
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <div className="how-it-works wrapper">
            <h2>How It Works</h2>
            <div className="flex">
                <Step src="images/schedule-icon.png" text="Schedule Your Pickup" />
                <Step src="images/pickup-icon.png" text="We Pick Up Your Dirty Laundry" />
                <Step src="images/delivery-icon.png" text="We Deliver Your Clean Clothes" />
            </div>
        </div>
    )
}

export default HowItWorks