//this is a component used in the test page "Jornal" it can be delited in the future
import React, { Component } from "react";
import { CgArrowUpO } from 'react-icons/cg';

import styles from './scrollToTop.module.css';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 100) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className={styles.scroll_to_top}>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <CgArrowUpO className={styles.scroll_icon}/>
          </div>
        )}
      </div>
    );
  }
}
