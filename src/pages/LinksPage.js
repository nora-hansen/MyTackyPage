import LinkElement from "../elements/LinkElement";
function LinksPage()    {
    return(
        <div className="main">
        <h1>Links</h1>
        <div>
            <div className="row">
            <LinkElement 
                title="DeviantArt profile" 
                image="https://play-lh.googleusercontent.com/IUcqE41VIxbZexis7tPuWMuGD_4mQCPx4cuO5z1ZrgzeMqRu1-uU720TtznqPWS69Jk"
                description="Artworks both traditional and digital" 
                link="https://www.deviantart.com/ukitchen"
                hover="Deviantart profile (ukitchen)">
            </LinkElement>
            <LinkElement
                title="Source code on GitHub"
                image="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
                description="The source code of thiis website for you to judge :.)"
                link="https://github.com/nora-hansen/MyTackyPage"
                hover="Github profile (nora-hansen)">
            </LinkElement>
            <LinkElement
                title="Music YouTube channel"
                image="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                description="Songs by me"
                link="https://www.youtube.com/@dronningnure"
                hover="Main YouTube channel (noriak_)">
            </LinkElement>
            <LinkElement
                title="Secondary Music YouTube channel"
                image="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                description="Less finished songs with bs lyrics"
                link="https://www.youtube.com/@nurenoriaki"
                hover="Secondary YouTube channel (nurenurenur)-">
            </LinkElement>
            <LinkElement
                title="Twitter"
                image="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                description="Tweets and uh :)"
                link="https://twitter.com/dronningnure"
                hover="Twitter profile (dronningnure)">
            </LinkElement>
            <LinkElement
                title="SoundCloud Primary"
                image="https://cdn-icons-png.flaticon.com/512/48/48967.png"
                description="Songs and instrumentals"
                link="https://soundcloud.com/noriakinure"
                hover="Primary SoundCloud profile (noriaki(nure))">
            </LinkElement>
            <LinkElement
                title="SoundCloud Secondary"
                image="https://cdn-icons-png.flaticon.com/512/48/48967.png"
                description="Less finished songs, and some bs"
                link="https://soundcloud.com/user-978403960"
                hover="Secondary SoundCloud profile (nure noriaki)">
            </LinkElement>
            <LinkElement
                title="VSynth Files (OneDrive)"
                image="https://www.tenforums.com/geek/gars/images/2/types/thumb_15755611680_ne_rive_folder.png"
                description="Instrumentals and vocal synth files for covers"
                link="https://1drv.ms/u/s!AgZljPU836NwnfR_8HO161NVqPAKGA?e=qwuSZk"
                hover="Vocal Synth Files (Instrumentals, SVP, VSQX, MIDI, TRK ...)">
            </LinkElement>
            </div>
        </div>
        </div>
    )
}

export default LinksPage;