// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import Developer from "./Developer";
import { fetchDevelopers } from "../store/developers/actions";

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // Do the data fetch...
    this.props.dispatch(fetchDevelopers);
  }
  render() {
    if (!this.props.devs) {
      return <p>Loading...</p>;
    }
    console.log(this.props.devs);
    return (
      <div>
        <h1>Codaisseur developers</h1>
        <p>We have {this.props.devs.count} developers!</p>
        {this.props.devs.rows.map((developer, index) => (
          <Developer dev={developer} key={index} />
        ))}
      </div>
    );
  }
}
// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:
function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);
