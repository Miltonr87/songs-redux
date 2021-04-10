import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Smells Like Teen Spirit', duration: '3:00' },
        { title: 'All Star', duration: '2:30' },
        { title: 'I Want That Away', duration: '2:54' },
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong:selectedSongReducer
})