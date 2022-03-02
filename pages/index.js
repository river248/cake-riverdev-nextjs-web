import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Cake sHOP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Row>
            <Col><h1>Hello Next App</h1></Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}
