import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mine.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>DIEUDONNE OJONG-OMEMA</h1>
                <h5 className="text-light">Computer Engineering Student</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt ="me"/>
                </div>
                <div>
                    <a href="tel://+237675890481" className='scroll_down'>Scroll Down</a>
                </div>
            </div>
        </header>
    )
}
export default Header;