import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

    state = {
        loading: false,
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.onTermSubmit("framer motion library")
    }

    onTermSubmit = async(term) => {
        this.setState({loading: true})

        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})

        this.setState({loading: false})
    }

    onVideoSelected = (video) => {
        this.setState({selectedVideo: video})
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelected}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default App;