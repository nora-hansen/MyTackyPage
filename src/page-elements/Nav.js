import { Link } from 'react-router-dom';
function Nav()  {
    return(
        <div class="nav">
        <p>Pages</p>
        <ul>
            <Link to='/' title="Home page"><li>Home</li></Link>
            <Link to='/about' title="About the Nure"><li>About me</li></Link> 
            <Link to='/links' title="Misc links to socials and such"><li>Links</li></Link>         
            <Link to='/jsbull' title="Experimentation formerly with JavaScript"><li>JS Bullshit</li></Link>  
            <Link to='/songs' title="Songs I have made"><li>Songs</li></Link>
            <Link to='/thanks' title="Special thanks"><li>Special Thanks</li></Link>
            {/* <a href="pages/flutterPreview.html" title="Flutter migration preview"><li>Flutter preview</li></a> */}
        </ul>
        <img src="https://i.gifer.com/4w7Z.gif" width="100%" title="Go to nurenur.eu/hampter"alt="Hamster laying in a hand, eating something"></img>
        </div>
    )
}

export default Nav;