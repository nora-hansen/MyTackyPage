function CalculatorElement()    {
    return(
    <><h3>Calculator</h3><div id="calculator">
            <div id="output">0</div>
            <div className="buttons">
                <input className="buttons" type="button" value="7"></input>
                <input className="buttons" type="button" value="8"></input>
                <input className="buttons" type="button" value="9"></input>
            </div>
            <div className="buttons">
                <input className="buttons" type="button" value="4"></input>
                <input className="buttons" type="button" value="5"></input>
                <input className="buttons" type="button" value="6"></input>
            </div>
            <div className="buttons">
                <input className="buttons" type="button" value="1"></input>
                <input className="buttons" type="button" value="2"></input>
                <input className="buttons" type="button" value="3"></input>
            </div>
        </div></>      
    )
}
export default CalculatorElement;