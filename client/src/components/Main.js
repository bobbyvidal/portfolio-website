import React from 'react'
import PropTypes from 'prop-types'
import pic01 from '../images/UofH-Day-Game.jpg'
import cohort_pic from '../images/Cohort_pic.jpg'
import "../iframe.css"




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
          
          <p> I am a graduate from the University of Houston with a Bachelor of Science (GPA: 3.70) and the Flatiron School Houston's Immersive Software Engineering Bootcamp. At the Flatiron School 
           I learned the principles behind front-end and back-end development in a variety of development settings (individual, team, and pair programming) in an Agile environment.  
          </p>
          <p>
            Aside from writing code, my passions include soccer, video games, and powerlifting. I was one of the founding members of the University of Houston Powerlifting Team. 
            Feel free to reach out on <a style = {{color: "#FF0000"}} target="_blank" href = "https://www.linkedin.com/in/robert-vidal/">LinkedIn</a>, or through my email at <a style = {{color: "#FF0000"}} href = "mailto: bobbyvidal@gmail.com">bobbyvidal@gmail.com</a>.
          </p>
          <ul className="icons">
            <li><a href="mailto: bobbyvidal@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            <li><a href="https://www.linkedin.com/in/robert-vidal/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/bobbyvidal" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={cohort_pic} alt="work picture" /></span>
            <p>At the Flatiron School I specialized in the languages of Ruby and JavaScript, front-end/back-end technologies like Ruby on Rails, 
              NodeJS, ReactJS, React Native, and HTML5/CSS. I also bring proficiency in SQLite3 for relational databases and a variety of UI frameworks like Material UI, Semantic UI, and Bootstrap to bring responsive displays to some of my more recent projects.
            </p>
            <section style={{display: "flex", flexDirection: "row"}}class="section">
              <div style={{paddingLeft: "15px"}} class="content">
                <h2 style = {{fontSize: "18px", lineHeight: "24px", textAlign: "center"}} class="title">Medium</h2>
                <p>
                  If you're interested, check out my <a style = {{color: "#FF0000"}} target="_blank" href = "https://medium.com/@bobbyvidal">Medium</a> account as I publish new blogs each week. I use these blogs to explore new topics and brush up on those that I have previous exposure to. 
                </p>
              </div>
            </section>
            <section style={{display: "flex", flexDirection: "row"}}class="section">
              <div style={{paddingLeft: "15px"}} class="content">
                <h2 style = {{fontSize: "18px", lineHeight: "24px", textAlign: "center"}} class="title">
                  Udemy
                </h2>
                <p style={{display: "flex", flexDirection: "column"}} class="paragraph">
                  I am always looking to expand my knowledge of all things code. I am currently working on a Udemy course that 
                  gives me a deeper understanding of algorithmic thinking and data structures in JavaScript. 
                </p>
              </div>
            </section>
            <section style={{display: "flex", flexDirection: "row"}}class="section">
              <div style={{paddingLeft: "15px"}} class="content">
              <h2 style = {{fontSize: "18px", lineHeight: "24px", textAlign: "center"}} class="title">
                  JavaScript 30
                </h2>
                <p style={{display: "flex", flexDirection: "column"}} class="paragraph">
                  I am currently enrolled in the JavaScript30 course led by Wes Bos. This course is meant for developer of all skill levels looking to gain familiarity with vanilla JavaScript, CSS, and HTML5 tips and tricks! 
                </p>
              </div>
            </section>
          <ul className="icons">
            <li><a href="mailto: bobbyvidal@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            <li><a href="https://www.linkedin.com/in/robert-vidal/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/bobbyvidal" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>      
          {close}
        </article> 

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          
              <h3>Halfway</h3>
              <p>
              Responsive Web App that allows users to find restaurants near a geographic midpoint. Halfway utilizes Google Maps, Twilio (SMS functionality), and Yelp APIs to simplify the process of grabbing lunch with a co-worker. 
              </p>
              <div class = "iframe-container">
                <iframe src="https://www.youtube.com/embed/m03QK9_884E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
              </div>
              <br></br><br/>
              <h3>Draw!</h3>
              <p>
              Multipurpose web app that allow users to draw, collaborate, and share their sketches in REAL TIME! NodeJS and Socket IO combine to deliver a real-time experience. Draw's frontend components allow users to be created, sketch in a variety of styles, and share their ideas on the HTML5 canvas element.
              </p>
              <div class = "iframe-container">
              <iframe src="https://www.youtube.com/embed/xlZx8YlC5I8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
              </div>
              <br></br><br/>

              <h3>ToyTanks</h3>
              <p>
              Fully functioning Player vs Player tank game built with the intention of emulating the Wii tanks game. ToyTanks was built with bullet-on-tank hit detection, bullet ricochet physics, and bullet explosion animations.
              </p>
              <div class = "iframe-container">
              <iframe src="https://www.youtube.com/embed/UYB5SAbw_yw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
              </div>
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