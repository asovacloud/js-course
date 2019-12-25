export default function() {
    /* Video */
    const video = document.querySelector('.video-box #myVideo');

    /* buttons */
    const btnPlay = document.querySelector('.video-box .btn-play');
    const btnStop = document.querySelector('.video-box .btn-stop');
    const holderPlay = document.querySelector('.video-box .holder-play');
    const btnVolume = document.querySelector('.video-box .btn-volume');

    /* progress bar */
    const bar = document.querySelector('.video-box .progress-bar .bar');
    const barHolder = document.querySelector('.video-box .progress-bar');
    const barHolderWidth = barHolder.offsetWidth;

    /* volume */
    const volumeBoxHolder = document.querySelector('.video-box .volume-box__holder');
    const volumeBoxIndicator = document.querySelector('.video-box .volume-box__holder span');
    const volumeBoxWidth = volumeBoxHolder.offsetWidth;

    const currentProgress = (vidDuration) => {
        const vidCurrent = Math.round(video.currentTime);
        const currentProcent = vidCurrent / vidDuration * 100;

        bar.style.width = `${currentProcent}%`;
    }

    const playVid = () => video.play();

    const pauseVid  = () => video.pause();

    const stopVid  = () => {
        video.currentTime = 0;
        video.pause();
    };

    video.onpause = () => {
        btnPlay.classList.remove('active');
        holderPlay.classList.remove('active');
    };
    video.onplay = () => {
        btnPlay.classList.add('active');
        holderPlay.classList.add('active');
    }

    video.onloadeddata = function() {
        const videoDuration = video.duration;
        const vidDuration = Math.round( video.duration );

        video.ontimeupdate = function() {currentProgress(vidDuration)};

        barHolder.addEventListener('click', function (e) {
            e.preventDefault();

            playVid();

            const getClickPosOnBar = Math.round(e.offsetX / barHolderWidth * 100);
            const getDurationPercent = videoDuration * getClickPosOnBar / 100;

            video.currentTime = getDurationPercent;

        });

        const playPauseVideo = (e) => {

            e.preventDefault();

            if (video.paused) {
                playVid();
            } else {
                pauseVid();
            };

        };

        btnPlay.addEventListener('click', playPauseVideo);
        holderPlay.addEventListener('click', playPauseVideo);
        btnStop.addEventListener('click', () => stopVid() );

        btnVolume.addEventListener('click', (e) => {

            e.preventDefault();

            if(video.volume !== 0){
                video.volume = 0;
            } else {
                video.volume = 1;
            }

        });

        volumeBoxHolder.addEventListener('click', function (e) {

            e.preventDefault();

            const getClickVolumeOnBar = e.offsetX / volumeBoxWidth;

            video.volume = getClickVolumeOnBar;

        });

        video.onvolumechange = function() {

            if(video.volume !== 0){
                btnVolume.classList.remove('active');
            } else {
                btnVolume.classList.add('active');
            }

            volumeBoxIndicator.style.width = `${video.volume * 100}%`;

        };

    };
};