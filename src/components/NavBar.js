import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
          <React.Fragment>
            <div>
             <nav id="header" className="indigo darken-4" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="/" className="brand-logo white-text">Gist App</a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <form>
                                <div className="input-field">
                                    <input type="search" placeholder="search gist" id="autocomplete-input" className="autocomplete red-text"/>
                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>
                        </li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/create">Create Gist</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
    
                    <ul id="nav-mobile" className="sidenav">
                        <li>
                            <form>
                                <div className="input-field">
                                    <input type="search" placeholder="search gist" id="autocomplete-input" className="autocomplete red-text"/>
                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>
                        </li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/create">Create Gist</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                    <a href="/" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
          </div>
          </React.Fragment>
        )
      }
}
