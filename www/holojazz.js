class Holojazz {
    static api = 'https://api.holotools.app/v1/';
    static dexApi = 'https://holodex.net/api/v2/';

    static #request(options) {
        var result;
        // Send non-asynchronous request to api
        $.ajax({ url: this.api + options,
                 type: 'get',
                 async: false,
                 success: function(data) {
                    result = data;
                 },
                 error: function() {
                    result = "ERROR";
                 }
       });

       return result;
    }

    static #dexRequest(options) {
        var result;
        // Send non-asynchronous request to api
        $.ajax({ url: this.dexApi + options,
                 type: 'get',
                 async: false,
                 success: function(data) {
                    result = data;
                 }
       });
       return result;
    }

    static getAllChannels(limit = 50, offset = 0) {
        let options = `channels?limit=${limit}&offset=${offset}`;
        return this.#request(options);
    }

    static getChannelByName(name) {
        let options = `channels?name=${name}`;
        return this.#request(options);
    }

    static getStreams(maxHours = 0, lookbackHours = 9, hideChannelDescription = false) {
        let options = `live?max_upcoming_hours=${maxHours}&lookback_hours=${lookbackHours}&hide_channel_desc=${hideChannelDescription}`;
        return this.#request(options);
    }

    static getChannelByID(ytVideoKey) {
        let options = `channels/youtube/${ytVideoKey}`;
        return this.#request(options);
    }

    static getVideoByTitle(title) {
        let options = `videos?title=${title.replace(" ", "%20")}`;
        return this.#request(options);
    }

    static getVideoByID(id, withComments = 0) {
        let options = `videos/youtube/{id}?with_comments=${withComments}`;
        return this.#request(options);
    }

    static getComments(query, limit = 5, offset = 0, id = 0) {
        let options = `comments/search?q={query.replace(" ", "%20")}&limit=${limit}&offset=${offset}`;
        return this.#request(options);
    }

    static getClips() {
        let options = `videos?type=clip`;
        return this.#dexRequest(options);
    }

    static getVideoUrl(ytVideoKey) {
        return `https://www.youtube.com/watch?v=${ytVideoKey}`;
    }

    static getThumbnail(ytVideoKey) {
        return `https://img.youtube.com/vi/${ytVideoKey}/maxresdefault.jpg`;
    }

    static getChannel(channelId) {
        return `https://www.youtube.com/channel/${channelId}`;
    }

    // Remove unnecessary bracket information at the end of a stream name
    static getCleanTitle(title) {
        var cleanTitle = "";
        var count = 0;
        for(var i = 0; i < title.length; i++) {
            // 12304 char code of that bracket thingy lol
            if(title.charCodeAt(i) == 12304) {
                count += 1;
            }

            if (count == 2) {
                break;
            }

            cleanTitle += title.charAt(i);
        }

        return cleanTitle
    }
}