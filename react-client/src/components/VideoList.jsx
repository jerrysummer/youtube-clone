import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from "./VideoListItem.jsx";

class VideoList extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      videos: []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div className="col-md-4 list-group">
        {this.props.videos.items.map(video => {
          return (
            <VideoListItem
              key={video.etag}
              video={video}
            />
          )
        })}
      </div>
    )
  }
};



const mapStateToProps = (state, ownProps) => ({
  videos: state.videos,
});


export default connect(mapStateToProps, {})(VideoList);
