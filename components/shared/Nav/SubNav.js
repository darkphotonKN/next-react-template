import React, { Component } from 'react';

import Link from 'next/link';

/* Expects a "subnav" prop containing an:
array with "name" and "path" of each subnav, along with ONE "active: true" to 
indicate the active current page

e.g.. in the file you are using <SubNav /> write:

const subNavList = 
[
  {name: '地質景觀', path: '/conservation/geo-landscape'}, 
  {name: '地質景觀', path: '/conservation/geo-landscape', active: true}, 
  {name: '地質景觀', path: '/conservation/geo-landscape'}, 
..]
..
// use the component and add the props "subNavList" to the tag 
<SubNav subNavList={subNavList} />
..

If you have a INNER NAV within your SUB NAV, nest another
array with objects { name: '', path: ''} that you want to create
another nav list with
*/

class SubNav extends Component {
  state = {
    isShow: false
  };

  expandSubNav = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    const { subNavList } = this.props;

    return (
      <React.Fragment>
        <div className="sub-nav d-none d-sm-none d-md-block">
          <ul className="nav flex-column">
            {/* Only output side nav if subnavList prop is provided */}
            {subNavList
              ? subNavList.map((subnav) => {
                  return (
                    <li className="nav-item" key={subnav.path + subnav.name}>
                      <Link href={subnav.path}>
                        <a
                          className={
                            subnav.active ? 'nav-link active' : 'nav-link'
                          }
                        >
                          {subnav.name}
                        </a>
                      </Link>
                      {/* if there is a inner nav, we render that
                  here in it's own expandable <ul> */}
                      {subnav.innernav ? (
                        <ul className="inner-nav">
                          {subnav.innernav.map((inner) => (
                            <li
                              className={
                                inner.active
                                  ? 'inner-item active'
                                  : 'inner-item'
                              }
                              key={inner.name + inner.path}
                            >
                              <Link href={inner.path}>
                                <a>{inner.name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        // else no inner-nav render nothing
                        ''
                      )}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <div className="sub-nav-mobile d-block d-sm-block d-md-none">
          <ul className="nav flex-column">
            {/* Only output side nav if subnavList prop is provided */}
            {subNavList
              ? subNavList.map((subnav) => {
                  return subnav.active ? (
                    <li className="nav-item" key={subnav.path + subnav.name}>
                      <a
                        className="nav-link active"
                        onClick={this.expandSubNav}
                      >
                        {subnav.name}

                        {subnav.innernav
                          ? subnav.innernav.map((inner) =>
                              inner.active ? <span> - {inner.name}</span> : null
                            )
                          : null}
                      </a>
                    </li>
                  ) : null;
                })
              : null}
          </ul>
        </div>

        <div
          className={
            this.state.isShow
              ? 'sub-nav-mobile-option d-block d-sm-block d-md-none active'
              : 'sub-nav-mobile-option d-block d-sm-block d-md-none'
          }
        >
          <ul className="nav flex-column">
            {/* Only output side nav if subnavList prop is provided */}
            {subNavList
              ? subNavList.map((subnav) => {
                  return (
                    <li className="nav-item" key={subnav.path + subnav.name}>
                      <Link href={subnav.path}>
                        <a
                          className={
                            subnav.active ? 'nav-link active' : 'nav-link'
                          }
                        >
                          {subnav.name}
                        </a>
                      </Link>

                      {/* if there is a inner nav, we render that
            here in it's own expandable <ul> */}
                      {subnav.innernav ? (
                        <ul className="inner-nav">
                          {subnav.innernav.map((inner) => (
                            <li
                              className={
                                inner.active
                                  ? 'inner-item active'
                                  : 'inner-item'
                              }
                              key={inner.name + inner.path}
                            >
                              <Link href={inner.path}>
                                <a>{inner.name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        // else no inner-nav render nothing
                        ''
                      )}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SubNav;
