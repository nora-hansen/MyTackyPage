import React, {Component} from "react";

class EasterEggCount extends Component {
    constructor(props)   {
        super(props);
        this.state = {
            count: 0
        };
    }

    // handleClick = () =>   {
    //     console.log('Click ' + this.state.count);
    //     this.setState({
    //         count: this.state.count + 1
    //     });
    // }

    render()    {
        return(
            <div className="egg-count">
                <h2>Easteregg count: X</h2>
                <p>Can you find them all? {">"}:)</p>
                <img src="https://www.animatedimages.org/data/media/29/animated-easter-egg-image-0004.gif" 
                alt="Easter egg gif" />
            </div>
        )
    }
}


export default EasterEggCount;