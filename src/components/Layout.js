import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ClassName from 'models/classname';
import { usePageMeta } from 'hooks';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Globals from './GlobalStyles';

const Layout = ({ children, pageName, className }) => {
  const componentClass = new ClassName();
  if (pageName) componentClass.add(`page-${pageName}`);
  if (className) componentClass.add(className);

  const { meta } = usePageMeta();

  const helmetSettings = {
    ...meta,
    bodyAttributes: {
      ...meta.bodyAttributes,
      class: componentClass.string,
    },
  };

  return (
    <div>
      <Globals />
      <Helmet {...helmetSettings} />
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageName: PropTypes.string,
  className: PropTypes.string,
};

export default Layout;
