import React from 'react';
import { Provider } from 'react-redux';

import '@material/react-button/dist/button.min.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-typography/dist/typography.css';
import 'components/App.css';
import store from 'store';
import HomepageContainer from 'components/homepage';


function App() {
  return (
    <Provider store={ store }>
      <div className='App'>
        <HomepageContainer />
      </div>
    </Provider>
  );
}

export default App;
