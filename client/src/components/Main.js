import React from 'react'
import PropTypes from 'prop-types'
import pic01 from '../images/UofH-Day-Game.jpg'
import medium_logo from '../images/medium_logo.svg'




class Main extends React.Component {

  state = {stories: []}

  render() {
    console.log(this.state.stories)

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="about picture" /></span>
          
          <p>Graduate from the University of Houston with a Bachelor of Science (GPA: 3.70) and the Flatiron School Houston's Immersive Software Engineering Bootcamp. At the Flatiron School 
           I learned frontend and backend development in a variety of languages and frameworks.
            </p>
          
          <p>
            Aside from writing code, my passions include soccer, video games, and powerlifting. I would love to connect with you to talk shop or have a conversation about a shared passion. 
            Feel free to reach out on <a style = {{color: "#FF0000"}} href = "https://www.linkedin.com/in/robert-vidal/">LinkedIn</a>, or through my email at <a style = {{color: "#FF0000"}} href = "mailto: bobbyvidal@gmail.com">bobbyvidal@gmail.com</a>.
          </p>
          <ul className="icons">
            <li><a href="mailto: bobbyvidal@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            <li><a href="https://www.linkedin.com/in/robert-vidal/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            {/* <li><a href="https://www.instagram.com/bobby_vidal/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li> */}
            <li><a href="https://github.com/bobbyvidal" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
            <p>At the Flatiron School I specialized in the languages of Ruby and JavaScript, front-end/back-end technologies like Ruby on Rails, 
              NodeJS, ReactJS, React Native, and HTML5/CSS. I also bring proficiency in SQLite3 for relational databases and a variety of UI frameworks like Material UI, Semantic UI, and Bootstrap.
            </p>
            <section style={{display: "flex", flexDirection: "row"}}class="section">
              <img style = {{width: "20vw"}} src={medium_logo} class="medium logo" />
              <div style={{padding: "15px"}} class="content">
                <h2 style = {{fontSize: "18px", lineHeight: "24px", textAlign: "center"}} class="title">
                  Medium
                </h2>
                <p style={{display: "flex", flexDirection: "column"}} class="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At non ex earum, libero dignissimos voluptates. Quis beatae dolorem autem ipsa!
                  asdfasdfasdfasdfadsfasdfasdfasdfasdf
                </p>
              </div>
            </section>    
          {close}
        </article> 

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
            
              <h3>Halfway <br></br></h3>
              <p>
              Responsive Web App that allows users to find restaurants near a geographic midpoint between two locations. Halfway utilizes Google Maps, Twilio, and Yelp APIs to simplify the process of grabbing lunch with a co-worker. 
              </p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/m03QK9_884E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
               
              <h3>Draw! <br></br></h3>
              <p>
              Multipurpose web app that allow users to draw, collaborate, and share their sketches in REAL TIME! NodeJS and Socket IO combine to deliver a real-time experience. Draw's frontend components allow users to be created, sketch in a variety of styles, and share their ideas on the HTML5 canvas element.
              </p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xlZx8YlC5I8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
              
              <h3>ToyTanks<br></br></h3>
              <p>
              Fully functioning Player vs Player tank game built with the intention of emulating the Wii tanks game. ToyTanks is built with fully functioning hit detection, bullet ricochet physics, and bullet explosion animations.
              </p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UYB5SAbw_yw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
              {close}
        </article>

        {/* <article id="blogs" className={`${this.props.article === 'blogs' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blogs</h2>
          <form method="post" onSubmit = {this.handleSubmit}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required onChange = {this.handleChange}/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required onChange = {this.handleChange}/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required onChange = {this.handleChange}></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" onClick = {this.handleReset} /></li>
            </ul>
          </form>
         
          <p>I am passionate about building scalable, stable code, competitve powerlifting, the outdoors, and my favorite soccer team Manchester United!</p>
          <p>I would love to connect, share, and learn from you, feel free to connect with me using the links below!</p>
          <ul className="icons">
            <li><a href="mailto: bobbyvidal@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            <li><a href="https://www.linkedin.com/in/robert-vidal/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            {/* <li><a href="https://www.instagram.com/bobby_vidal/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li> 
            <li><a href="https://github.com/bobbyvidal" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article> */}

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