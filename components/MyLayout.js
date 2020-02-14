import Header from './Header';
import Head from 'next/head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>    
    <Head>
      <title>A Next Project</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
    </Head>

    <Header />
    {props.children}
    <style global jsx>{`
      body {
        font-family: 'Roboto', sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;