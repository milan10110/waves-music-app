import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ libraryStatus, setSongs, songs, setCurrentSong, audioRef, isPlaying }) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        key={song.id}
                        song={song}
                        setCurrentSong={setCurrentSong}
                        songs={songs}
                        audioRef={audioRef}
                        id={song.id}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library