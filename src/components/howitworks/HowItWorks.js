import Step from "./Step";
import './HowItWorks.css';


const HowItWorks = () => {

    return (
        <div className="how-it-works">
            <div className="wrapper">
                <h2>How We Can Help You</h2>
                <div className="flex steps">
                    <Step icon="fa-desktop" heading="You Schedule Laundry Pickup" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" testid="icon" />
                    <Step icon="fa-truck" heading="We Pick Up Your Laundry" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" testid="icon" />
                    <Step icon="fa-tshirt" heading="We Deliver Your Clean Clothes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" testid="icon" />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;