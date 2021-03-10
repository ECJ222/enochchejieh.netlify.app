import React from 'react'
import ProfileImage from '../image'
import Typewriter from 'typewriter-effect'

const About = () => {
  return (
    <>
      <div id="about">
        <div className="info">
          <Typewriter
            options={{
              strings: "Hello I'm Enoch Chejieh",
              autoStart: true,
              loop: true
            }}
          />
          <p>
            I&apos;m a software developer and technical writter based in Nigeria
            with a love for open source and exploring new things.
          </p>
          <em>„Faber est Suae Quisque Fortunae“</em>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>React Js</li>
            <li>Vue Js</li>
            <li>Node / Express Js</li>
            <li>Python</li>
          </ul>
        </div>
        <ProfileImage />
      </div>
    </>
  )
}

export default About
