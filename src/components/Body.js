import React, { Component } from "react";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }
  play = (data, url) => {
    return this.props.play(data, url);
  };
  render() {
    return (
      <div>
        {this.props.data.map(data => (
          <div className="speaker-box">
            <img src={data.image} alt="speaker image" id="speaker-img" />
            <div className="detail-box">
              <div className="topic">{data.topic}</div>
              <div className="name">{data.name}</div>
              <div dangerouslySetInnerHTML={{ __html: data.detail }} />
            </div>
            <div className="play-box">
              <div
                className="en-play-box"
                onClick={() => this.play(data, data.url_en)}
              >
                Play
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
