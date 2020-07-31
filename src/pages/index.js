import React from 'react';
import Layout from 'components/Layout';

const IndexPage = () => {
  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  return <Layout pageName='home'>Home Page</Layout>;
};

export default IndexPage;
