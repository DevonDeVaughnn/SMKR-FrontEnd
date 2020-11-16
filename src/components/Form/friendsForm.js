import React, { Component } from "react";

class FriendSearch extends Component {

  
  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Enter a Friend!</h3>
            <fieldset className="form-group">
              <label>Friend's Name:</label>
              <input
                type="text"
                ref="name"
                name="name"
                className="form-control"
              />
            </fieldset>

            <fieldset className="form-group">
              <label>Friend's Email:</label>
              <input
                type="text"
                ref="email"
                name="email"
                className="form-control"
              />
            </fieldset>
            <button className="btn btn-success" type="submit">
              Save Friend
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FriendSearch;
