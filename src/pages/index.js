import React, { useState } from 'react';

import BookDemo from '../components/book-demo';
import Features from '../components/features';
import HowItWorks from '../components/how-it-works';
import Layout from '../components/layout';
import WhyUs from '../components/why-us';
import { useDisclosure } from '@chakra-ui/react';

const IndexPage = () => {
  const [demoTitle, setDemoTitle] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bookDemo = (isFindOut) => {
    if (!isFindOut) {
      setDemoTitle('Book a Demo');
    } else {
      setDemoTitle('Find out more');
    }
    onOpen();
  };
  return (
    <>
      <Layout bookDemo={() => bookDemo()}>
        <form name="bookdemo" method="post" action="/" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="firstName" hidden />
          <input type="text" name="lastName" hidden />
          <input type="text" name="email" hidden />
          <input type="text" name="phone" hidden />
          <input type="text" name="company" hidden />
        </form>
        <WhyUs />
        <Features bookDemo={() => bookDemo()} />
        <HowItWorks findOutMore={() => bookDemo(true)} />
        <BookDemo title={demoTitle} isOpen={isOpen} onClose={onClose} />
      </Layout>
    </>
  );
};

export default IndexPage;
