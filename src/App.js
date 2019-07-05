import React, { Component } from "react";

import Body from "./components/Body";
import SinglePage from "./components/SinglePage";

import { forum1_en, forum1_tc, forum1_sc } from "./data/forum1";
import { forum2_en, forum2_tc, forum2_sc } from "./data/forum2";
import { forum3_en, forum3_tc, forum3_sc } from "./data/forum3";

import "./App.css";
import lg_banner from "./images/top_banner_lg.jpg";
import md_banner from "./images/top_banner.jpg";
import sm_banner from "./images/top_banner_app.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forum: "one",
      singlePage: false,
      currentPage: {},
      currentForum: forum1_en,
      lang: "en",
      singlePageData: {},
      singlePageUrl: ""
    };
  }
  play = (data, url) => {
    this.setState({
      singlePage: true,
      singlePageData: data,
      singlePageUrl: url
    });
  };
  closeSinglePage = () => {
    this.setState({
      singlePage: false,
      singlePageData: {},
      singlePageUrl: ""
    });
  };

  render() {
    return (
      <div className="box">
        <div className="banner-box">
          <img src={lg_banner} alt="large banner" id="lg_banner" />
          <img src={md_banner} alt="medium banner" id="md_banner" />
          <img src={sm_banner} alt="small banner" id="sm_banner" />
        </div>
        {!this.state.singlePage && (
          <div>
            <div className="top-box">
              <div className="lang-box">
                <span
                  className={this.state.lang === "en" ? "en active" : "en"}
                  onClick={() =>
                    this.setState({
                      lang: "en",
                      currentForum:
                        this.state.forum === "one"
                          ? forum1_en
                          : this.state.forum === "two"
                          ? forum2_en
                          : forum3_en
                    })
                  }
                >
                  ENG
                </span>{" "}
                |{" "}
                <span
                  className={this.state.lang === "tc" ? "tc active" : "tc"}
                  onClick={() =>
                    this.setState({
                      lang: "tc",
                      currentForum:
                        this.state.forum === "one"
                          ? forum1_tc
                          : this.state.forum === "two"
                          ? forum2_tc
                          : forum3_tc
                    })
                  }
                >
                  繁
                </span>{" "}
                |{" "}
                <span
                  className={this.state.lang === "sc" ? "sc active" : "sc"}
                  onClick={() =>
                    this.setState({
                      lang: "sc",
                      currentForum:
                        this.state.forum === "one"
                          ? forum1_sc
                          : this.state.forum === "two"
                          ? forum2_sc
                          : forum3_sc
                    })
                  }
                >
                  简
                </span>
              </div>
              <div className="heading-box">
                <div className="line" />
                <div className="text">PROGRAMME VIDEO ARCHIVE</div>
                <div className="line" />
              </div>
              <div className="tab-box">
                <div
                  className={
                    this.state.forum === "one" ? "forum1 active" : "forum1"
                  }
                  onClick={() =>
                    this.setState({
                      forum: "one",
                      currentForum:
                        this.state.lang === "en"
                          ? forum1_en
                          : this.state.lang === "tc"
                          ? forum1_tc
                          : forum1_sc
                    })
                  }
                >
                  Forum 1: Liveable Smart City
                </div>
                <div
                  className={
                    this.state.forum === "two" ? "forum2 active" : "forum2"
                  }
                  onClick={() =>
                    this.setState({
                      forum: "two",
                      currentForum:
                        this.state.lang === "en"
                          ? forum2_en
                          : this.state.lang === "tc"
                          ? forum2_tc
                          : forum2_sc
                    })
                  }
                >
                  Forum 2: Future Retail & Lifestyle
                </div>
                <div
                  className={
                    this.state.forum === "three" ? "forum3 active" : "forum3"
                  }
                  onClick={() =>
                    this.setState({
                      forum: "three",
                      currentForum:
                        this.state.lang === "en"
                          ? forum3_en
                          : this.state.lang === "tc"
                          ? forum3_tc
                          : forum3_sc
                    })
                  }
                >
                  Forum 3: Digital Health
                </div>
              </div>
            </div>
            <div className="body-box">
              <Body data={this.state.currentForum} play={this.play} />
            </div>
          </div>
        )}
        {this.state.singlePage && (
          <SinglePage
            data={this.state.singlePageData}
            url={this.state.singlePageUrl}
            back={this.closeSinglePage}
          />
        )}
      </div>
    );
  }
}

export default App;
