import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyBZy7KEHnl5p7csHlmRwE1XtPZIaEZavtM',
  authDomain: 'react-redux-bbs.firebaseapp.com',
  databaseURL: 'https://react-redux-bbs.firebaseio.com',
  projectId: 'react-redux-bbs',
  storageBucket: '',
  messagingSenderId: '1099035408181',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
