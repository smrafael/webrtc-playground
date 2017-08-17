window.onload = load;

function load() {
    var video1 = document.querySelector('#cam1');
    var video2 = document.querySelector('#cam2');

    navigator.mediaDevices.enumerateDevices().then(devices => {
        devices.forEach(device => {
            if(device.kind === 'videoinput') {
                var constraints = {
                    audio: true,
                    video: { optional: [ { sourceId: device.deviceId } ] }
                }

                navigator.mediaDevices.getUserMedia(constraints).then(stream => {
                    video1.srcObject ? video2.srcObject = stream : video1.srcObject = stream;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    });
}