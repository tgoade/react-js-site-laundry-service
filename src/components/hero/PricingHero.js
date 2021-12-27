import ParalaxLogic from "./ParalaxLogic";
import "./PricingHero.css";
import Card from "../card/Card";
import Button from "../button/Button";

const PricingHero = () => {
    const { offsetY } = ParalaxLogic();
    
    return (
        <div className="pricing">
            <div className="hero--bg" style={{transform: `translateY(${offsetY * 0.1}px)`}}>
                <div className="hero--intro text-center" style={{transform: `translateY(${offsetY * 0.2}px)`, opacity: `calc(1 - ${offsetY/220})`}}>
                    <h1>Pricing, made simple</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis hendrerit tincidunt. Fusce ut lectus vitae leo ullamcorper venenatis non eget augue. Aliquam quis est ullamcorper, ultrices purus ut, finibus nulla.</p>
                </div>
            </div>
            <div className="pricing--section">
                <Card title="By Load" className="text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="pricing--price">
                        <span className="pricing--sign">$</span>
                        <span className="pricing--dollar">2</span>
                    </div>
                    <p>per pound</p>
                    <div className="pricing--includes text-left">
                        <p>Includes</p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>dolor sit amet</li>
                            <li>consectetur adipiscing</li>
                        </ul>   
                    </div>
                    <Button className="btn--medium mt-2 mb-3" path="../login">Schedule Service</Button>
                </Card>
                <Card title="Weekly" className="text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="pricing--price">
                        <span className="pricing--sign">$</span>
                        <span className="pricing--dollar">1</span>
                        <span className="pricing--cent">.75</span>
                    </div>
                    <p>per pound</p>
                    <div className="pricing--includes text-left">
                        <p>Includes</p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>dolor sit amet</li>
                            <li>consectetur adipiscing</li>
                            <li>hendrerit tincidunt</li>
                        </ul>   
                    </div>
                    <Button className="btn--medium mt-2 mb-3" path="../login">Schedule Service</Button>
                </Card>
                <Card title="Dry Cleaning" className="text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="pricing--price">
                        <span className="pricing--sign">$</span>
                        <span className="pricing--dollar">2</span>
                    </div>
                    <p>per item</p>
                    <div className="pricing--includes text-left">
                        <p>Item Type</p>
                        <div className="two-col">
                            <div className="col">
                                <ul>
                                    <li>Pants</li>
                                    <li>Skirt</li>
                                    <li>Short</li>
                                    <li>Sweaters</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li>Shirts</li>
                                    <li>Blouse</li>
                                    <li>Dress</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Button className="btn--medium mt-2 mb-3" path="../login">Schedule Service</Button>
                </Card>
            </div>
        </div>
    )
}

export default PricingHero;