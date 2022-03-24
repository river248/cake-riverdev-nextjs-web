import React from 'react'
import { FaBars } from 'react-icons/fa'
import { connect } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

import styles from './HeaderMobile.module.scss'
import { toggleNav } from '../../redux/actions/globalState'

function HeaderMobile({ isVisible, toggleNav }) {

    return (
        <>
        <div className={styles.headerMobileContainer}>
            <div className={styles.headerMobileItem}>
                <Link href={'/'}>
                    <a><Image src={'/header-logo.png'} alt='logo' width={120} height={52}/></a>
                </Link>
                <button onClick={() => toggleNav(!isVisible)}><FaBars/></button>
            </div>
        </div>
        { isVisible && <div className={styles.backgroundCover} onClick={() => toggleNav(false)} />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isVisible: state.globalState.isVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNav : (state) => {
            dispatch(toggleNav(state))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile)