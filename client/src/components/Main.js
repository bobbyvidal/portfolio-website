import React from 'react'
import PropTypes from 'prop-types'
import pic01 from '../images/UofH-Day-Game.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {

  state = {name:'', 
           email: '',   
           message: ''}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value ,
      [event.target.name]: event.target.value ,
      [event.target.name]: event.target.value
    })
  }

  handleReset = () => {
    this.setState({
          name:'', 
          email: '',   
          message: ''
    })
  }

  render() {
    console.log(this.state)

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="about picture" /></span>
          
          <p>Graduate from the University of Houston with a Bachelor of Science. Throughout much of my undergraduate I was studying and preparing for Physical Therapy school. 
            I volunteered over 300 hours in a variety of Physical Therapy clinics.
            However, shortly after discovering my passion for code I began teaching myself through resources like Codecademy and the Flatiron School's free bootcamp prep resources.</p>
          
          <p>After graduating from the University of Houston, I enrolled in the Flatiron School's Immersive Software Engineering Bootcamp 
            with the dream of becoming a Full-Stack developer. At the Flatiron School we specialized in the languages of Ruby and JavaScript and front-end/back-end technologies like Ruby on Rails, 
            NodeJS, ReactJS, React Native, and HTML5/CSS. I also bring proficiency in SQLite3 for relational databases and a variety of UI frameworks like Material UI and Semantic UI.
          </p>
          
          <p>
            Aside from coding, my passions include soccer, video games, and powerlifting. Growing up I was a competitive soccer player for 16 years and superfan of Manchester United. 
            Going into college I found my other passions of PC gaming after I build my own computer and became a founding member of the University of Houston Powerlifting team. 
          </p>
          
          {close}
        </article>

        {/* <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
              
          {close}
        </article> */}

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
              <p>
              Halfway <br></br>
              Responsive Web App that allows users to find restaurants near a geographic midpoint with texting capabilities.<br></br>
              + Implemented ES6 async/await syntax to properly order my backend fetches.<br></br>
              + Permits users to favorite restaurants, store them in a cache, and text their stored restaurants to the person they are meeting.<br></br>
              + Instrumented the Twilio API to allows for the texting capability.<br></br>
              + Composed my application with Material UI for a smooth display and clean interface.<br></br>
              </p>
              
              <p>
              Draw! <br></br>
              Allows users to sketch and share ideas in real-time. <br></br>
              + Implemented Socket IO for expedited real-time sharing. <br></br>
              + Utilized ReactJS for efficient layout of page components.<br></br>
              + Employed Semantic UI library to optimize front-end experience.<br></br>
              + Incorporated NodeJS backend for user data persistence. <br></br>
              </p>
              <p>
              ToyTanks<br></br>
              Fully functioning Player vs Player tank game with bullet ricochet and hit detection physics.<br></br>
              + Integrated Separating Axis Theorem for bullet collision and ricochet physics.<br></br>
              + Spearheaded Player vs Player capabilities using JavaScript event listeners.<br></br>
              + Instituted bullet explosion smoke graphics using setTimeouts.<br></br>
              + Designed maps playable on any size screen with while loops and client widths/heights.<br></br>
              </p>
              <p>
              TalkAboutIt<br></br>
              Full CRUD blogging application with user email verification.<br></br>
              + Generated many to many relationships with Active Record.<br></br>
              + Persisted blogs and blog replies to a central database in accordance to RESTful conventions.<br></br>
              + Stored user passwords responsibly with the bcrypt gem and password digest.<br></br>
              + Programmed a user verification bot that randomly generates a 12 digit alphanumeric code.<br></br>
              </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="http://localhost:4000/contact">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange = {this.handleChange}/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange = {this.handleChange}/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" onChange = {this.handleChange}></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" onSubmit = {this.handleSubmit}/></li>
              <li><input type="reset" value="Reset" onClick = {this.handleReset} /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="mailto: bobbyvidal@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            <li><a href="https://www.linkedin.com/in/robert-vidal/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.instagram.com/bobby_vidal/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/bobbyvidal" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main