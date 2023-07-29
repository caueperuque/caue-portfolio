import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Content from './components/Content';
import {
  Header,
  CookieConsentComponent,
  Footer,
  Background,
} from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <CookieConsentComponent />
          <main id="about">
            <Content />
          </main>
          <Footer />
          <Background />
        </ContextProvider>
      </BrowserRouter>
    );
  }
}

export default App;
