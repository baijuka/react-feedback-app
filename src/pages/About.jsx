import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function About() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This app was created in React.JS to leave feedback about a product or service</p>
            <br />
            <p><Link to="/">Back to Home</Link></p>

        </div>
      About Us
    </Card>
  )
}

export default About
