import EasterEggCount from "../elements/EasterEggCount";
function HomePage()  {
    return(
        <div className="main">
            <div className="index-list">
            <h1>Home</h1>
            <p>This is my page! It is very simple, but in constant development ;)</p>
            <h2>Pages</h2>
            <h3>Home</h3>
            <p>You are here!</p>
            <h3>About me</h3>
            <p>About me, Nure</p>
            <h3>Links</h3>
            <p>Very cool links B) Like socials and other resources</p>
            <h3>JS Bullshit</h3>
            <p>Formerly JavaScript experimentation, will most likely be React.JS experimentation</p>
            <h3>Songs</h3>
            <p>Recent, popular, and upcoming songs</p>
            <h3>Special thanks</h3>
            <p>Shout out to nice people!!</p>
            <br></br>
            <p><a href="http://nurenur.eu/old" title="Old version of nurenur.eu">Go to the old version at "https://nurenur.eu/old"</a></p>
            <img src="https://media.tenor.com/op2Gre5elT0AAAAC/blingee-megamind.gif" width="100" alt="Megamind blingee gif with the caption &ldquoNo bitches?&rdquo" />
            </div>
            <EasterEggCount>
            </EasterEggCount>
        </div>
    )
}

export default HomePage;