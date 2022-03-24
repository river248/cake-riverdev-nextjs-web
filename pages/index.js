import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import { FiInstagram } from 'react-icons/fi'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import MainLayout from '../components/Layout/MainLayout'
// import Slider from 'react-slick'

import styles from '../styles/Home.module.scss'

function HomePage() {

  const images = [1, 2, 3, 4, 5, 6]

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 2000,
  //   nextArrow: <SampleNextArrow/>,
  //   prevArrow: <SamplePrevArrow/>,
  //   responsive: [
  //       {
  //           breakpoint: 1200,
  //           settings: {
  //               slidesToShow: 4,
  //               slidesToScroll: 1,
  //           }
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 1,
  //         }
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //             centerMode: true,
  //             centerPadding: '10px',
  //             arrows: false,
  //         }
  //       },
  //       {
  //         breakpoint: 540,
  //         settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             centerMode: true,
  //             centerPadding: '0px',
  //             arrows: false,
  //         }
  //       }
  //   ]
  // }

  return (
    <div className={styles.homePageContainer}>
      <section className={styles.homePageTitleContainer}>
        <div className={styles.homePageTitleBox}>
          <h1>Making your life sweeter one bite at a time!</h1>
          <button>OUR CAKES</button>
        </div>
      </section>

      {/* <AboutCakeShop/>
      
      
      <div className={styles.cakeTypeSlider}>
        <Slider {...settings}>
          {categories.map(category => (
            <div className={styles.cakeTypeItem} key={category._id}>
              <div className={styles.cakeTypeItemContainer}>
                <ImageURL source={category.image} alert={category.categoryName}/>
                <h5>{category.categoryName}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>


      <section className={`${styles.homeProductContainer} ${styles.sliderContainerMoblie}`}>
      { loading ? (fake8Products.map(item => <LoadingCard key={item}/>)) :
        (newCakes.map(newCake => <CakeCard key={newCake._id} cakeItem={newCake}/>))}
      </section>

      <IntroduceVideo/>
      <OurTeam/>
      <Testimonial/>

      <section className={styles.sweetMomentsContainer}>
        <div className={styles.sweetMomentsLeft}>
          <h3>FOLLOW US ON INSTAGRAM</h3>
          <h1>Sweet moments are saved as memories.</h1>
          <h5><FiInstagram/>@sweetcake</h5>
        </div>
        <div className={styles.sweetMomentsRight}>
          {images.map(index => (
          <div className={styles.sweetMomentsRightItem} key={index}>
            <div className={styles.sweetMomentsRightImage}>
              <img src={moment} alt=''/>
            </div>
          </div>))}
        </div>
      </section>
      <MapContainer/> */}
    </div>
  )
}

function SampleNextArrow(props) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}><IoIosArrowForward/></div>
  )
}

function SamplePrevArrow(props) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}><IoIosArrowBack/></div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default HomePage