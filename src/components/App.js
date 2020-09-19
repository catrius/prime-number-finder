import React from 'react';
import '@material/react-button/dist/button.min.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-typography/dist/typography.css';

import 'components/App.css';
import Homepage from 'components/homepage';


function App() {
  return (
    <div className='App'>
      <Homepage/>
    </div>
  );
}

export default App;
