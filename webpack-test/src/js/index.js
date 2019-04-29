import '../scss/style.scss';

import VideoFile from '../video/movie1.mp4';

import videoPlay from '../js/main.js';

function component() {
    const element = document.createElement('div');

    const source = document.createElement('source');

    source.src = VideoFile;

    source.type = 'video/mp4';

    console.log( source );

    element.classList.add('video-box');

    element.innerHTML = `
        <div class="video-box__holder">
                <video id="myVideo">
                    Your browser does not support the video tag.
                </video>
                <div class="holder-play"><i class="fa fa-play"></i></div>
                <div class="progress-bar">
                    <div class="progress-bar__holder">
                        <span class="bar"></span>
                    </div>
                </div>
            </div>
            <div class="toolbar">
                <ul class="btn-list">
                    <li>
                        <button class="btn btn-play dynamic-ico">
                            <i class="fa fa-play second"></i>
                            <i class="fa fa-pause first"></i>
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-stop">
                            <i class="fa fa-stop"></i>
                        </button>
                    </li>
                </ul>
                <div class="volume-box">
                    <button class="btn btn-volume dynamic-ico">
                        <i class="fa fa-volume-up second"></i>
                        <i class="fa fa-volume-off first"></i>
                    </button>
                    <div class="volume-box__holder">
                        <div class="volume-box__holder__center">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    element.querySelector('#myVideo').appendChild(source);

    return element;
}

document.body.appendChild(component());

document.body.appendChild( videoPlay() );