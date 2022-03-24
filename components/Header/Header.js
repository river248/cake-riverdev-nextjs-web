import Link from 'next/link'
import React from 'react'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { BsHeart } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import Image from 'next/image'

import style from './Header.module.scss'

function Header() {

    const router = useRouter()

    return (
        <div className={style.headerContainer}>
            <div className={style.leftHeader}>
                <Link href={'/account/sign-up'}><a>Sign up</a></Link>
                <hr/>
                <Link href={'/account/sign-in'}><a>Sign in</a></Link>
            </div>
            <Link href={'/home'}>
                <a>
                    <Image
                        src={'/header-logo.png'}
                        alt={'header-logo'}
                        width={120}
                        height={52}/>
                </a>
            </Link>
            {/* <div className={style.navMobileContainer, style.headerItem} ref={menuRef}>
                <div className={style.navMobileItem} onClick={toggleMenu}>
                    <span>menu</span>
                    <FaBars/>
                </div>
                <ul>
                    <li className={(location.pathname === '/home' || location.pathname === '/') ? `${style.activeNavMobile}` : ''}>
                        <Link href={'/home'}>Home</Link>
                    </li>
                    <li
                        className={(location.pathname === '/shop' ||
                        location.pathname === '/shopping-cart' ||
                        location.pathname === '/shop/product') ? `${style.activeNavMobile}` : ''}>
                        <Link href={'/shop'}>Shop</Link>
                    </li>
                    <li className={location.pathname === '/blog' ? `${style.activeNavMobile}` : ''}>
                        <Link href={'/blog'}>Blog</Link>
                    </li>
                    <li className={location.pathname === '/contact' ? `${style.activeNavMobile}` : ''}>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                    <li className={location.pathname === '/about' ? `${style.activeNavMobile}` : ''}>
                        <Link href={'/about'}>About</Link>
                    </li>
                </ul>
            </div> */}
            <div className={`${style.rightHeader} ${style.headerItem}`}>
                <div className={style.rightHeaderLinks}>
                    <FiSearch/>
                    <hr/>
                    <BsHeart/>
                </div>
                <div className={style.rightHeaderCart}>
                    <FiShoppingBag onClick={() => navigate('shopping-cart')}/>
                    {/* { (shoppingCart.length) > 0 && <span className={style.quantityProductInCart}>{shoppingCart.length}</span>} */}
                    <span>Cart: $0.00</span>
                </div>
            </div>
        </div>
  )
}

export default Header