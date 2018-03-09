import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { searchYT } from './actions/actions';

import List from './components/List.jsx';
import SearchBar from './components/SearchBar.jsx';
import VideoList from './components/VideoList.jsx';
import CurrentVideo from './components/CurrentVideo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      videos: []
    }
  }


  render () {
    return (
    <div>
      <SearchBar/>
      <CurrentVideo video={this.props.currentVideo}/>
      <VideoList videos={this.props.videos}/>
    </div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  videos: state.videos,
  currentVideo: state.currentVideo,
});


export default connect(mapStateToProps, { })(App);