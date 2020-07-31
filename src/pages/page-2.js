import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName='two'>
      <Helmet>
        <title>Page Two</title>
      </Helmet>
      <Container className='content'>
        <h1>Page Two</h1>
        <p>Welcome to page 2</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
