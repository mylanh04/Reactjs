import React, { Component } from "react";
import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; 2024 Ngô Thị Mỹ Lành. More information,please visit my youtube
          chanel.
          <a
            target="blank"
            href="https://www.youtube.com/watch?v=kGR0mkeS_mo&t=29s"
          >
            &#8594; Click here &#8592;
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
