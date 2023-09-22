import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import '../style/Footer.css'
function Footer() {
  return (
    <>
        <div className='footer'>
            <div className='socialMedia'>
                <Link to="https://instagram.com/adi_9o12?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><InstagramIcon/>
                </Link>
                 <Link to="https://twitter.com/AdityaK90Z" target="_blank"> 
                <TwitterIcon/></Link>
                <Link to="https://linkedin.com/in/aditya-kumar-743a88222" target="_blank"><LinkedinIcon/></Link>
            </div>
            <p>&copy; 2023 portfolio.com</p>
        </div>
    </>
  )
}

export default Footer
