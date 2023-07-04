import UnderConstructionPage from "./UnderConstructionOage";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PendingIcon from '@mui/icons-material/Pending';
import ReactPlayer from "react-player";

function SongsPage()    {
    return(
        <div className="main">
        <h1>Songs</h1>
            <div className="songs">
                <div className="song">
                <h2>Most recent <StarOutlineIcon /></h2>
                <ReactPlayer 
                className="react-player video"
                url="https://www.youtube.com/watch?v=6RmC0hBUkds"
                width="100%"
                controls="true"
                />
                </div>
                <div>
                <h2>Most popular<EmojiEventsIcon/></h2>
                <ReactPlayer 
                className="react-player video"
                url="https://www.youtube.com/watch?v=umBTkQzeUGg"
                width="100%"
                controls="true"
                />
                </div>
            </div>
            <div className="songs">
                <div className="song">
                <h2>Upcoming ...</h2>
                <ReactPlayer 
                className="react-player video"
                url="https://www.youtube.com/watch?v=SmOTFaNZYf0"
                width="100%"
                controls="true"
                />
                </div>
                <div className="song">
                <h2 style={{opacity:"0"}}>shh</h2>
                <ReactPlayer 
                className="react-player video"
                url="https://www.youtube.com/watch?v=4EaLJkMW2II"
                width="100%"
                controls="true"
                />
                </div>
            </div>
        </div>
    )
}

export default SongsPage;