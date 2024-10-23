const library = {
       tracks: {
         t01: { id: 't01', name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
         t02: { id: 't02', name: 'Track 2', artist: 'Artist 2', album: 'Album 2' }
       },
     
       playlists: {
         p01: { id: 'p01', name: 'Playlist 1', tracks: ['t01', 't02'] }
       },
     
printPlaylists: function () {
         for (let playlistId in this.playlists) {
           console.log(`${this.playlists[playlistId].id}: ${this.playlists[playlistId].name}`);
         }
       },
     
printTracks: function () {
         for (let trackId in this.tracks) {
           let track = this.tracks[trackId];
           console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
         }
       },
     
printPlaylist: function (playlistId) {
         const playlist = this.playlists[playlistId];
         console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
         playlist.tracks.forEach(trackId => {
           const track = this.tracks[trackId];
           console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
         });
       },
     
addTrackToPlaylist: function (trackId, playlistId) {
         if (this.playlists[playlistId]) {
           this.playlists[playlistId].tracks.push(trackId);
           console.log(`Added track ${trackId} to playlist ${playlistId}`);
         } else {
           console.log(`Playlist ${playlistId} does not exist.`);
         }
       }
     }; 
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
function generateUid() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
function addTrack(name, artist, album) {
       const newId = `t${Object.keys(library.tracks).length + 1}`;
       library.tracks[newId] = { id: newId, name, artist, album };
}


// adds a playlist to the library
function addPlaylist(name) {
       const newId = `p${Object.keys(library.tracks).length + 1}`;
       library.playlists[newId] = { id: newId, name, tracks: [] };
}

//test code for all functions
library.printPlaylists(); 
library.printTracks(); 
library.printPlaylist('p01'); 
library.addTrackToPlaylist('t01', 'p01'); 
library.printPlaylist('p01'); 
addTrack('New Song', 'New Artist', 'New Album'); 
library.printTracks(); 
addPlaylist('My Playlist'); 
library.printPlaylists(); 

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}