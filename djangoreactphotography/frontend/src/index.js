import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import 'semantic-ui-css/semantic.min.css';
import 'lightgallery.js/dist/css/lightgallery.css';
import './styles.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
How I need to restructure my website
|--App.js
    |--CopyrightText.js
    |--Navbar.js
        |--MenuLinks.js
        |--Footer.js
    |--MainContainer.js => This component will display a gallery of images (depending on state, either
        |--About.js        14 image categories or full gallery for a given category)
        |--GalleryContainer.js
            |--GalleryCard.js => This component will represent 1 individual image category to display in the gallery
        |--PhotoContainer.js
            |--PhotoCard.js => This component will represent 1 individual image *from* a category to display in the gallery
*/
