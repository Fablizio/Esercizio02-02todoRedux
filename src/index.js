import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import TodosProvider from './Context/store';
import Notes from './Notes';
import './style.css';

const App = () => {
  return (
    <TodosProvider>
      <Notes />
    </TodosProvider>
  );
};

render(<App />, document.getElementById('root'));
