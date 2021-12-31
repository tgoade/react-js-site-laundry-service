import './ServicesHero.css';
import ParalaxLogic from "./ParalaxLogic";

const ServicesHero = () => {
    const { offsetY } = ParalaxLogic();

    return (
        <div className="services--hero">
            <div className="services--intro" style={{opacity: `calc(1 - ${offsetY/300})`}}>
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis hendrerit tincidunt. Fusce ut lectus vitae leo ullamcorper venenatis non eget augue. Aliquam quis est ullamcorper, ultrices purus ut, finibus nulla. In luctus urna at ultrices vestibulum. Aliquam est nulla, sodales sit amet lectus quis, volutpat aliquam massa. </p>
            </div>
        </div>
        
    )
}

export default ServicesHero;