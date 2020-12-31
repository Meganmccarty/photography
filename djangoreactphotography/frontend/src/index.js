import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import 'lightgallery.js/dist/css/lightgallery.css';
import './styles.css';
import * as serviceWorker from './serviceWorker';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const my_user_name = process.env.USERNAME; /* NOTE: Using environment variables throws console errors, yet website works fine */
const my_password = process.env.PASSWORD;  /*       Not sure how to fix the errors, but this secures sensitive data */

axios.post('/login/', { username: my_user_name, password: my_password}).then(rv => {
    console.log('Login', rv)
    /*axios.get('/api/photos/').then(resp => {
        console.log('Response', resp)
    }).catch(err => {
        console.log('Error', err.response.status)
    });*/
}).catch(err => {
    console.log('Login error', err.response)
});

const updatePhoto = () => {
    axios.patch('https://meganmccarty.pythonanywhere.com/api/photos/').then(resp => {
        console.log('Update response', resp)
    }).catch(error => {
        console.log("Update error", error)
    })
}

/*axios.get('/api/').then(resp => {
    console.log('Response', resp)
}).catch(err => {
    console.log('Error', err.response.status)
});*/

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
