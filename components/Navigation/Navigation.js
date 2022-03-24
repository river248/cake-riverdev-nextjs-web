import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Navigation.module.scss'

function Navigation() {

    const router = useRouter()
    const navRef = useRef(null)

    const stickyNav = () => {
        const position = 100 - window.pageYOffset
        
        if( position <= 0)
            navRef.current.style.setProperty('top', '0px')
        else
            navRef.current.style.setProperty('top', `${position}px`)
    }

    useEffect(() => {
      
        window.addEventListener('scroll', stickyNav)
    
        return () => window.removeEventListener('scroll', stickyNav)

    }, [])

  return (
    <div className={styles.navigationContainer} ref={navRef}>
        <ul>
            <li className={(router.pathname === '/') ? `${styles.active}` : ''}>
                <Link href={'/'}><a>Home</a></Link>
            </li>
            <li
                className={(router.pathname === '/shop' ||
                router.pathname === '/shopping-cart' ||
                router.pathname === '/shop/product') ? `${styles.active}` : ''}>
                <Link href={'/shop'}><a>Shop</a></Link>
            </li>
            <li className={router.pathname === '/blog' ? `${styles.active}` : ''}>
                <Link href={'/blog'}><a>Blog</a></Link>
            </li>
            <li className={router.pathname === '/contact' ? `${styles.active}` : ''}>
                <Link href={'/contact'}><a>Contact</a></Link>
            </li>
            <li className={router.pathname === '/about' ? `${styles.active}` : ''}>
                <Link href={'/about'}><a>About</a></Link>
            </li>
            <div className={styles.currentLink}/>
        </ul>
    </div>
  )
}

export default Navigation