// import React from 'react';
function AboutPage()  {
    return(
        <div className="main">
            <h1>About me<img src="https://img1.picmix.com/output/stamp/normal/5/8/0/0/1870085_6eb64.gif" style={{height: "30px"}} alt="Green star"></img></h1>
            <h3>Basic info</h3>
            <p>My name is Nora, but I go by Nure and Noriaki online. I am 23 years old and based in northern Europe. I am currently writing my bachelor thesis in Programming at NTNU :)</p>
            <h3>Interests</h3>
            <p>I love creativity and technololgy! My main hobbies and interests are..</p>
            <ul>
                <li>Programming (Web is awesome)</li>
                <li>Making music,, specifically with vocal synths</li>
                <li>Playing guitar (I've only played for about half a year so I'm still a newbie!)</li>
                <li>Drawing, both traditional and digital art</li>
                <li>Gaming</li>
                <li>Watching bad reality TV</li>
                <li>Hanging out with buddies</li>
                <li>Operating systems (They're so cool)</li>
            </ul>
            <h3>Favorites</h3>
            <table>
                <tr>
                    <th>TV</th>
                    <td>My 6000lb Life</td>
                </tr>
                <tr>
                    <th>Movie</th>
                    <td>Avatar 1 or 2 idk</td>
                </tr>
                <tr>
                    <th>Musician</th>
                    <td>AVTechNO!</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>Green</td>
                </tr>
                <tr>
                    <th>Vocaloid</th>
                    <td>Kagamine Len (How original)</td>
                </tr>
                <tr>
                    <th>SynthV</th>
                    <td>Yuma</td>
                </tr>
            </table>
        </div>
    )
}

export default AboutPage;