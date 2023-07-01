import React, { Fragment } from 'react';
import './scss/style.scss';
import GlobalStyles from "./global/GlobalStyle";
import { Dashboard  , Header , Footer} from './components';
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Dashboard />
      <Footer />
    </Fragment>
  );
}

export default App;
