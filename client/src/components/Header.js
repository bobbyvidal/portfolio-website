import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span class="icon fa-keyboard-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Bobby Vidal </h1>
                <h5>Full-stack developer <br />Graduate from the University of Houston. <br />Seeking opportunities to leverage the frontend and backend knowledge I acquired at the Flatiron School Houston.</h5>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('projects')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
