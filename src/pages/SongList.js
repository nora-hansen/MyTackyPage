import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

const SongList = () => {
    // Need a state variable to remember things! I guess here that will be what it fetches from
    //  the database?

    // song is a state variable and setSong is the setter function.
    const [songs, setSongs] = useState([]);
    var updated = false;

    const fetchPost = async () => {
        await getDocs(collection(db, "testobjects"))
            .then((querySnapshot)=>{     
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setSongs(newData);                
                console.log(songs, newData);
                
            })
    }

    useEffect(()=>{
        fetchPost();
    }, [songs])

    return(
        <div className="testobject-content">
            {
                songs?.map((song,i)=>(
                    <>
                    <h4 key={i}>
                        {song.name}
                    </h4>
                    <p key={i}>
                        {song.age}
                    </p>
                    </>
                ))
            }
        </div>
    )
}

export default SongList;

