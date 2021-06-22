let video = document.querySelector("video");
let constraints = {audio : true,video : true};
navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream)
{
    video.srcObject = mediaStream;
})
.catch(function(error)
{
    console.log(error);
})