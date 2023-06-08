import { Link } from 'react-router-dom';

function HampterPage()  {
    return(
        <div className="hampter">
        <h1>FLAT HAMPTER</h1>
        <div className="hammy-grid">
        <img src="https://media.tenor.com/jGzBdcdHVXoAAAAd/flat-hamster.gif"/>
        <img src="https://media.tenor.com/wYlvf-0lpy8AAAAd/hamster-stroking-a-hamster.gif"/>
        <img src="https://media.tenor.com/2shmiu_6kUYAAAAd/flathamster-hamster.gif"/>
        <img src="https://media.tenor.com/k6wAWLEXeM4AAAAC/flat-hamster.gif" height="640px"></img>
        <Link to='/' title="Home page"><p>Back to home</p></Link>
        </div>
            </div>
    )
}

export default HampterPage;