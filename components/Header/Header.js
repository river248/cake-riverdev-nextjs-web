import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { BsHeart } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import Image from 'next/image'

import styles from './Header.module.scss'
import { connect } from 'react-redux'

function Header(props) {

    const {
        isVisible
    } = props

    const router = useRouter()
    const menuRef = useRef()
    const headerRef = useRef()
    const [isShow, setIsShow] = useState(false)

    const toggleMenu = () => {
        if (isShow) {
            setIsShow(false)
            menuRef.current.style.setProperty('height', '65px')
        }
        else {
            setIsShow(true)
            menuRef.current.style.setProperty('height', '276px')
        }
    }

    useEffect(() => {
        if (isVisible)
            headerRef.current.style.setProperty('left', '0px')
        else
            headerRef.current.style.setProperty('left', '-300px')
    }, [isVisible])


    return (
        <div className={styles.headerContainer} ref = {headerRef}>
            <div className={styles.leftHeader}>
                <Link href={'/account/sign-up'}><a>Sign up</a></Link>
                <hr/>
                <Link href={'/account/sign-in'}><a>Sign in</a></Link>
            </div>
            <Link href={'/home'}>
                <a className={styles.headerItem}>
                    <Image
                        src={'/header-logo.png'}
                        alt={'header-logo'}
                        width={120}
                        height={52}
                    />
                </a>
            </Link>
            <div className={`${styles.navMobileContainer} ${styles.headerItem}`} ref={menuRef}>
                <div className={styles.navMobileItem} onClick={toggleMenu}>
                    <span>menu</span>
                    <FaBars/>
                </div>
                <ul>
                    <li className={(router.pathname === '/home' || router.pathname === '/') ? `${styles.activeNavMobile}` : ''}>
                        <Link href={'/home'}>Home</Link>
                    </li>
                    <li
                        className={(router.pathname === '/shop' ||
                        router.pathname === '/shopping-cart' ||
                        router.pathname === '/shop/product') ? `${styles.activeNavMobile}` : ''}>
                        <Link href={'/shop'}>Shop</Link>
                    </li>
                    <li className={router.pathname === '/blog' ? `${styles.activeNavMobile}` : ''}>
                        <Link href={'/blog'}>Blog</Link>
                    </li>
                    <li className={router.pathname === '/contact' ? `${styles.activeNavMobile}` : ''}>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                    <li className={router.pathname === '/about' ? `${styles.activeNavMobile}` : ''}>
                        <Link href={'/about'}>About</Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.rightHeader} ${styles.headerItem}`}>
                <div className={styles.rightHeaderLinks}>
                    <FiSearch/>
                    <hr/>
                    <BsHeart/>
                </div>
                <div className={styles.rightHeaderCart}>
                    <FiShoppingBag onClick={() => navigate('shopping-cart')}/>
                    {/* { (shoppingCart.length) > 0 && <span className={styles.quantityProductInCart}>{shoppingCart.length}</span>} */}
                    <span>Cart: $0.00</span>
                </div>
            </div>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        isVisible: state.globalState.isVisible,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUserInfor : (token) => {
//             dispatch(actGetUserInfo(token))
//         },
//         logout : () => {
//             dispatch(actLogOut())
//         }
//     }
// }

export default connect(mapStateToProps,null)(Header)