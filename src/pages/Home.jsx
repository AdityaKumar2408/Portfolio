import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import '../style/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className='home'>
        <div className='about'>
          <h2>Hi, My Name is Aditya Kumar</h2>
          <div className='prompt'>
            <p>A Software Developer with a passion for learning and creating.</p>
            <Link to="https://linkedin.com/in/aditya-kumar-743a88222" target="_blank"><LinkedinIcon/></Link>
            <Link to="/" target="_blank"><EmailIcon/></Link>
            <Link to="https://github.com/AdityaKumar2408" target="_blank"><GithubIcon/></Link>
          </div>
        </div>
        <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span> ReactJS, Redux ToolKit, NEXTJS, HTML, CSS, NPM, MaterialUI, StyledComponents </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span> NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Java, C++, Python, C</span>
          </li>
          <li className='item'>
            <h2>Coding Profile</h2>
            <span><a href="https://leetcode.com/tinguchouhan7705/" target="_blank" rel="noopener noreferrer">Leetcode</a></span>
            &nbsp;
            <span><a href="https://codeforces.com/profile/NobelPrizeIsMine" target="_blank" rel="noopener noreferrer">CodeForces</a></span>
          </li>
        </ol>
        </div>
      </div>
    </>
  )
}

export default Home
