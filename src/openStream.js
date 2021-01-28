const playVideo = reuqire('./playVideo')

function openStream() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true})
    .then(stream => playVideo(stream, 'localStream'))
    .catch(err => console.log(err));
}

module.exports = openStream;