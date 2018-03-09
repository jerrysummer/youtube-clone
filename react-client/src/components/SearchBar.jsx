import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from "lodash";

import { searchYT } from "../actions/actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "hp" };
  }

  componentWillMount() {
    this.search = _.debounce(term => {
      this.props.searchYT(term);
    }, 1000);
  }
  
  onInputChange(term) {
    this.setState({ term });
    this.search(term);
  }

  componentDidMount() {
    this.props.searchYT('hp')
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
});

export default connect(mapStateToProps, { searchYT })(SearchBar);
