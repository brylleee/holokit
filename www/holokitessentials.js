// Create a stream panel
function createStreamPanel(stream) {
    return `
        <div id="stream-images">
            <img id="stream-thumbnail"
            src="${Holojazz.getThumbnail(stream.yt_video_key)}"
            style="width:100%;height:60%" role="button"
            onClick="streamPopup('${encodeURIComponent(JSON.stringify(stream)).replace(/'/g, "%27")}')" />
            <!-- This hack above encodes the object so that we can pass it to the index.html uniquely -->
        </div><br />

        <p align="center" style="font-size:15px;">${sanitize(stream.channel.name)}</p>
        <p align="center" style="font-size:10px;padding-left:2%;padding-right:2%">${sanitize(Holojazz.getCleanTitle(stream.title))}</p>
        `;
}

function createResultTab(stream) {
    return `<hr/>
        <div role="button" onClick="javascript:window.location.href='${sanitize(Holojazz.getVideoUrl(stream.yt_video_key))}'"
             class="result-tab" style="background-color:white;width:100%;height:30%;padding:3%;float:left">
            <img src="${stream.channel.photo}" id="streamer-picture" style="border-radius:50%;height:50%;margin-right:5%;float:left" />
            <p id="stream-name" style="font-size:14px;line-height:200%">${sanitize(Holojazz.getCleanTitle(stream.title))}</p>
        </div>`;
}

function replaceBrokenThumbnails(images) {
    // Check if image is broken through image height
    var thumbnailErrorHeight = 90;
    for(var i = 0; i < images.length; i++) {
        if(images[i].naturalHeight == thumbnailErrorHeight) {
            $(images[i]).attr("src", "assets/thumbnail_unavailable_" + window.localStorage.getItem("language") + ".png");
        }
    }
}

// Avoid XSS injections
function sanitize(string) {
    // Match all html tags
    var tag = /<[^<>]*>/ig;

    // Remove all html tags
    return string.replaceAll(tag, "");
}