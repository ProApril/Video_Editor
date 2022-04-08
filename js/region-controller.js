wavesurfer.on('ready', function() {
    wavesurfer.enableDragSelection({
        color: randomColor(0.25)
    });

    wavesurfer.util
        .fetchFile({
            responseType: 'json',
            url: '../media/nasa.json'
        })
        .on('success', function(data) {
            loadRegions(data);
            saveRegions();
        });
});
wavesurfer.on('region-click', function(region, e) {
    e.stopPropagation();
    // Play on click, loop on shift click
    region.playLoop()
    
});
wavesurfer.on('region-click', editAnnotation);
wavesurfer.on('region-update-end', saveRegions);
wavesurfer.on('region-updated', saveRegions);
wavesurfer.on('region-removed', saveRegions);
wavesurfer.on('region-in', showNote);
wavesurfer.on('region-out', hideNote);

wavesurfer.on('region-play', function(region) {
    region.once('out', function() {
        wavesurfer.play(region.start);
        wavesurfer.pause();
    });
});

/* Toggle play/pause buttons. */
let playButton = document.querySelector('#play');
let pauseButton = document.querySelector('#pause');
wavesurfer.on('play', function() {
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
});
wavesurfer.on('pause', function() {
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
});
