
    setInterval(function(){
        var video = document.getElementById('myVideo');
        var video_play_button = document.getElementById('togglePlayPauseComposition');        
        var wavesurfer_play_btn = document.getElementById("wavesurfer_play_btn");
        var wavesurfer_pause_btn = document.getElementById("wavesurfer_pause_btn");
        
        // console.log(video.currentTime,video.duration)
        // console.log(video.ended)
        console.log(wavesurfer.getCurrentTime(),wavesurfer.getDuration());
        if (Math.abs(video.currentTime - wavesurfer.getCurrentTime()) >1){
            video.currentTime = wavesurfer.getCurrentTime();
        }
        
        if(video.ended){
            video_play_button.className="play";        
            wavesurfer_pause_btn.click();
        }
        if(video.paused){
            //영상종료 후 진행할 함수 입력부분  
            video_play_button.className="play";        
            wavesurfer_pause_btn.click();
        }
    },100);