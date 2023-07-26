import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip position="top">
        <button>Hover me</button>
      </Tooltip>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
