import "./ImageCopyPanel.css";

const ImageCopyPanel = ({ image, title, children, side }) => {
    
    const block = ['image-left', 'copy-left'];

    const checkClasses = block.includes(side) ? side : block[0];

    return(
        <article className={`panel--image-copy wrapper ${checkClasses}`}>
            <div className="panel--image">
                <img src={image} alt={title} />
            </div>
            <div className="panel--copy">
                {children}
            </div>
        </article>
    )
}

export default ImageCopyPanel;