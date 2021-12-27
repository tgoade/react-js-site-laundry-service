import ServicesHero from "../../components/hero/ServicesHero";
import ImageCopyPanel from "../../components/panel/ImageCopyPanel";

const Services = () => {
    return (
        <>
            <ServicesHero />
            <ImageCopyPanel image="images/wash-n-fold.jpg" title="Wash and Fold Services" side="image-left">
                <h3>Wash and Fold Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis hendrerit tincidunt. Fusce ut lectus vitae leo ullamcorper venenatis non eget augue. Aliquam quis est ullamcorper, ultrices purus ut, finibus nulla.</p>
            </ImageCopyPanel>
            <ImageCopyPanel image="images/dry-cleaning.jpg" title="Dry Cleaning" side="copy-left">
                <h3>Dry Cleaning</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis hendrerit tincidunt. Fusce ut lectus vitae leo ullamcorper venenatis non eget augue. Aliquam quis est ullamcorper, ultrices purus ut, finibus nulla.</p>
            </ImageCopyPanel>
            <ImageCopyPanel image="images/commercial.jpg" title="Commercial Services" side="image-left">
                <h3>Commercial Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis hendrerit tincidunt. Fusce ut lectus vitae leo ullamcorper venenatis non eget augue. Aliquam quis est ullamcorper, ultrices purus ut, finibus nulla.</p>
            </ImageCopyPanel>
        </>
    )
}

export default Services;