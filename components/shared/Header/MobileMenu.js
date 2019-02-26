import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default class MobileMenu extends React.Component {
  state = {
    searchValue: '' // search value empty by default
  };
  handleMenuClose = () => {
    const menu = document.querySelector('.overlay-contentscale');
    menu.classList.remove('open');
  };

  handleInpChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    Router.push(`/search?q=${this.state.searchValue}`);
  };

  render() {
    return (
      <div className="overlay overlay-contentscale">
        <div className="row">
          <div className="col-2 text-left">
            <a className="overlay-close" onClick={this.handleMenuClose}>
              <i className="fa fa-times" />
            </a>
          </div>

          <div className="col-2" />

          <div className="col-4 pt-3 text-center">
            <a href="#" className="icon-sitemap" />
            <a href="#" className="icon-facebook" />
            <a href="#" className="icon-youtube" />
          </div>

          <div className="col-4 pt-3 text-center right-link" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
            <li>
              <a href="#" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
