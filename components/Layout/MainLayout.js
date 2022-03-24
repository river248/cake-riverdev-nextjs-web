import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

import styles from './MainLayout.module.scss'

function MainLayout({ children }) {
    return (
      <>
      <header>
        <Header/>
      </header>
      <nav>
        <Navigation/>
      </nav>
      <main className={styles.mainLayout}>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
      </>
    )
}

export default MainLayout