import Button from '../button/Button';
import './HeroBanner.css';
import ParalaxLogic from "./ParalaxLogic";

const HeroBanner = () => {
    const { offsetY } = ParalaxLogic();

    return (
        <div className="hero--container" style={{transform: `translateY(${offsetY * 0.2}px)`}}>
            <div className="hero--btn" style={{transform: `translateY(${offsetY * 0.25}px)`}}>
                <Button buttonSize="btn--large" path="../login" >Schedule Laundry Service</Button>
            </div>
        </div>
    )
}

export default HeroBanner;