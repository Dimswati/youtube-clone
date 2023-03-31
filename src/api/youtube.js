import axios from "axios";

const KEY = "AIzaSyBgpRYB8R89TBlAPr15ldewCctG67igg_g"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});

