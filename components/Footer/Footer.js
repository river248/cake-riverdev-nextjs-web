import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { GrSend } from 'react-icons/gr'
import Image from 'next/image'
import style from './Footer.module.scss'

function Footer() {
  return (
    <div className={style.footerContainer}>
            <div className={style.topFooter}>
                <div className={style.topLeftFooter}>
                    <h6>WORKING HOURSE</h6>
                    <span>Monday - Friday: 08:00 am - 08:30 pm</span>
                    <span>Saturday: 10:00 am - 16:30 pm</span>
                    <span>Sunday: 10:00 am - 16:30 pm</span>
                </div>
                <hr/>
                <div className={style.topCenterFooter}>
                    <Image src={'/xfooter-logo.png'} alt={'footer-logo'} width={120} height={52}/>
                    <span>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</span>
                    <div className={style.socialIconContainer}>
                        <div><FaFacebookF/></div>
                        <div><AiOutlineTwitter/></div>
                        <div><FiInstagram/></div>
                        <div><AiFillYoutube/></div>
                    </div>
                </div>
                <hr/>
                <div className={style.topRightFooter}>
                    <h6>SUBSCRIBE</h6>
                    <span>Get latest updates and offers.</span>
                    <div className={style.emailInp}>
                        <input type={'email'} placeholder='Email'/>
                        <GrSend/>
                    </div>
                </div>
            </div>
            <div className={style.bottomFooter}>
                <span>Copyright ©2022 All rights reserved | This template is made with love by Colorlib</span>
                <ul>
                    <li>Privacy</li>
                    <hr/>
                    <li>Terms & Conditions</li>
                    <hr/>
                    <li>Site Map</li>
                </ul>
            </div>
        </div>
  )
}

export default Footer