import React from 'react'
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Player = ({
    songs,
    setSongs,
    audioRef,
    currentSong,
    isPlaying,
    setIsPlaying,
    songInfo,
    setSongInfo,
    setCurrentSong,
}) => {

    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
    }

    //Event handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            // setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            // setIsPlaying(!isPlaying);
        }
        setIsPlaying(!isPlaying);
    };


    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === "skip-backward") {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1])
            } else {
                await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
                activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
            }
        }
        if (isPlaying) audioRef.current.play();
    }

    return (
        <div className='player'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range"
                />
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => (skipTrackHandler("skip-backward"))} className='skip-back' size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className='play'
                    size='2x'
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon onClick={() => (skipTrackHandler("skip-forward"))} className='skip-forward' size='2x' icon={faAngleRight} />
            </div>

        </div>
    );
};

export default Player