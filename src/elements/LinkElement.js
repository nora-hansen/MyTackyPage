import './LinkElement.css';
function LinkElement({title, image, description, link}) {
    return(
        <div className="link-element">
        <a href={link} target="_blank">
        <img src={image} style={{width: '70px'}} alt={title}/>
        <h4>{title}</h4>
        </a>
        <p>{description}</p>
        </div>
    )
}
export default LinkElement;