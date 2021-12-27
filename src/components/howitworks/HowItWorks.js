import Step from "./Step";
import './HowItWorks.css';


const HowItWorks = () => {

    return (
        <div className="how-it-works">
            <h2>How It Works</h2>
            <div className="flex steps">
                <Step src="images/schedule-icon.png" text="Schedule Your Pickup" testid="icon" />
                <Step src="images/pickup-icon.png" text="We Pick Up Your Dirty Laundry" testid="icon" />
                <Step src="images/delivery-icon.png" text="We Deliver Your Clean Clothes" testid="icon" />
            </div>
        </div>
    )
}

export default HowItWorks;