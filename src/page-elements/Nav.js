import { Link } from 'react-router-dom';
function Nav()  {
    return(
        <div class="nav">
        <p>Pages</p>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About me</li></Link> 
            <Link to='/links'><li>Links</li></Link>         
            <Link to='/jsbull'><li>JS Bullshit</li></Link>  
            <Link to='/songs'><li>Songs</li></Link>
            <Link to='/thanks'><li>Special Thanks</li></Link>
            {/* <a href="pages/flutterPreview.html" title="Flutter migration preview"><li>Flutter preview</li></a> */}
        </ul>
        <img src="resources/baby.gif" width="120"></img>
        </div>
    )
}

export default Nav;