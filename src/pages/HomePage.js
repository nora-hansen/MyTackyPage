import EasterEggCount from "../elements/EasterEggCount";
function HomePage()  {
    return(
        <div className="main">
            <div className="index-list">
            <h1>Home</h1>
            <p>This is my page! It is very simple, but in constant development ;)</p>
            <h2>Pages</h2>
            <h3>Index</h3>
            <p>You are here!</p>
            <h3>About</h3>
            <p>About Nure</p>
            <h3>Links</h3>
            <p>Very cool links B)</p>
            <h3>JavaScript bull</h3>
            <p>Experiments and fooling around with js</p>
            <h3>Cool song</h3>
            <p>Best music ever (facts)</p>
            <h3>Special thanks</h3>
            <p>Shout out to nice people!!</p>
            <h3>Flutter preview</h3>
            <p>A small taste of the upcoming remake of the website! (VERY MUCH LACKING)</p>
            <img src="https://media.tenor.com/op2Gre5elT0AAAAC/blingee-megamind.gif" width="100" />
            </div>
            <EasterEggCount
                count="0">
            </EasterEggCount>
        </div>
    )
}

export default HomePage;