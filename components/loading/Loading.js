import React, { Component } from 'react';
import { TimelineMax, TweenMax, Bounce, Elastic } from 'gsap';

import { css } from '@emotion/core';
// First way to import
// Another way to import
import ClipLoader from 'react-spinners/ClipLoader';

class Loading extends Component {
  state = {
    show: true
  };

  componentDidMount() {
    this.runAnimations(); // runs loading screen animations
  }

  runAnimations = () => {
    // TimelineMax (for handling Animation)
    const tl = new TimelineMax();
    // refs for targetting elements in react
    const platform = this.refs.platform;
    const circleArea = this.refs.circleArea;
    const loadingTitle = this.refs.loadingTitle;
    const logo = this.refs.logo;
    const obj = this.refs.obj;
    const obj2 = this.refs.obj2;
    const shadow = this.refs.shadow;
    const contentWrap = this.refs.contentWrap;

    // timing variables
    const circleLoad1 = 1;
    const circleLoad2 = 1.7;
    const platformLoad = 1;
    const objLoad = 2;
    const obj2Load = 1;
    const logoLoad = 1;
    const shadowLoad = 1;
    const animationTime =
      circleLoad1 + circleLoad2 + platformLoad + objLoad + obj2Load + shadow;
    // delay variables
    const logoDelay = circleLoad1 + platformLoad;
    const shadowDelay = circleLoad1;

    // sequencing animations
    // tl.set(contentWrap, {});
    tl.to(circleArea, circleLoad1, { scale: 5 })
      .from(platform, platformLoad, {
        opacity: 0,
        y: -300,
        ease: Bounce.easeOut
      })
      .from(
        obj,
        objLoad,
        {
          opacity: 0,
          rotation: -70,
          ease: Bounce.easeOut
        },
        'mk1'
      )
      .from(
        obj2,
        obj2Load,
        {
          opacity: 0,
          x: 50,
          ease: Elastic.easeOut.config(1, 0.3)
        },
        'mk1+=1'
      )
      .to(circleArea, circleLoad2, { scale: 12 }, 'circ2')
      .from(loadingTitle, 1.5, { opacity: 0, scale: 0.5 }, 'circ2-=1');
    TweenMax.from(logo, logoLoad, {
      opacity: 0,
      y: -300,
      ease: Bounce.easeOut,
      delay: logoDelay
    });
    TweenMax.from(shadow, shadowLoad, {
      opacity: 0,
      scale: 0.2,
      delay: shadowDelay
    });
  };

  displayState = () => {
    if (this.state.show === true) {
      return null;
    } else {
      const style = {
        display: 'none'
      };
      return style;
    }
  };

  render() {
    return (
      <div className="loading-page">
        <div className="circle-area" ref="circleArea" />
        <div className="loading-content">
          <div className="content-wrap" ref="contentWrap">
            {/* div wrap for purely animating up and down
                        <div className="animate-wrap"> */}
            <div className="logo" ref="logo">
              <img
                src="/static/img/logo-shoushan.png"
                alt="壽山國家自然公園籌備處"
                title="壽山國家自然公園籌備處"
              />
            </div>
            <img
              src="/static/img/loading-page/SVG/SHOUSHAN.svg"
              className="loading-title"
              ref="loadingTitle"
            />

            <img
              src="static/img/loading-page/MonkeyA.png"
              // src="../../img/loading-page/MonkeyA.png"
              alt="monkey"
              className="monkeyA"
              ref="obj"
            />
            <img
              src="/static/img/loading-page/MonkeyB.png"
              alt="two_monkeys"
              className="monkeyB"
              ref="obj2"
            />
            <img
              src="/static/img/loading-page/foliage.png"
              className="platform"
              ref="platform"
            />
            {/* <img src="" alt="monkey" />
                        <img src="../../src/img/loading-page/monkey2.jpg" alt="monkey" />
                        <img
                        src="/shoushan-beta/src/img/loading-page/platform.png"
                        alt="platform"
                    /> */}
            {/* <img src="../../img/loading-page/monkey1.jpg" alt=""/> */}
            <img
              src="/static/img/loading-page/under_shadow.png"
              className="shadow"
              ref="shadow"
              alt="shadow"
            />
            <div className="circle-loader">
              <ClipLoader
                sizeUnit={'px'}
                size={80}
                color={'#7E5F15'}
                loading={this.state.loading}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .circle-loader {
            position: absolute;
            bottom: -18%;
            left: 43%;
          }
        `}</style>
      </div>
    );
  }
}

export default Loading;
