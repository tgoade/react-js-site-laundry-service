import Button from '../button/Button';
import './HeroBanner.css';

const HeroBanner = () => {

    return (
        <div className="hero--container">
            {/* <video src="videos/aerial-shoreline.mp4" autoPlay loop muted /> */}
            <div className="hero--btn">
                <Button buttonSize="btn--large" path="../login" >Schedule Laundry Service</Button>
            </div>
        </div>
    )
}

export default HeroBanner;