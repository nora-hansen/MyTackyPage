import ReactPlayer from 'react-player';
import './Aside.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

function Aside()    {
    const [value, setValue] = React.useState(30);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <div className="aside">
            <ReactPlayer 
            url='https://soundcloud.com/noriakinure/sets/mixtape-for-nurenur-eu?si=51227b766dc04b90b5686ebc0e2f5f2d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' 
            width="200px"            
            controls="true"
            volume={value / 100}
            />
            <Box sx={{ width: 200 }}>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                <VolumeUp />
                </Stack>
            </Box>
      </div>
    )
}

export default Aside;