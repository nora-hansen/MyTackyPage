function EasterEggCount({count})    {
    return(
        <div className="egg-count">
            <h2>Easteregg count: {count}</h2>
            <p>Can you find them all? {">"}:)</p>
            <img src="https://www.animatedimages.org/data/media/29/animated-easter-egg-image-0004.gif" 
            alt="Easter egg gif" />
        </div>
    )
}

export default EasterEggCount;