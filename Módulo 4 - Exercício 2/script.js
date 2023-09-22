function requestLyrics(artist_name, music) {
    fetch(`https://api.lyrics.ovh/v1/${artist_name}/${music}`);
}

async function searchLyricsButton() {
    const artist_name = document.querySelector('input#band-name').value;
    const music_name = document.querySelector('input#music-name').value;
    const lyrics_element = document.querySelector('lyrics-text');
    
    console.log(artist_name, music_name);
    try {
        const api_response = await requestLyrics(artist_name, music_name);
        const response_data = await api_response.json();
        if (response_data.lyrics){
            lyrics_element.innerHTML = response_data.lyrics
        } else{
            lyrics_element.innerHTML = response_data.error
        }
    } catch (error){
        console.log(error)
    }
}