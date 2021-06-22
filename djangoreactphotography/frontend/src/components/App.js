import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Navbar from './Nav/Navbar.js';
import Gallery from './Gallery.js';
import About from './About.js';
import Animals from './Animals.js';
import Architecture from './Architecture.js';
import Arthropods from './Arthropods.js';
import Autumn from './Autumn.js';
import Butterflies from './Butterflies.js';
import Caterpillars from './Caterpillars.js';
import Landscapes from './Landscapes.js';
import Pets from './Pets.js';
import Plants from './Plants.js';
import Spring from './Spring.js';
import Sunsets from './Sunsets.js';
import Water from './Water.js';
import Weather from './Weather.js';
import Winter from './Winter.js';
import CopyrightText from './CopyrightText';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

    return (
        <div className="Main-container">
            <CopyrightText />
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" component={Gallery} exact />
                    <Route path="/about" component={About} />
                    <Route path="/animals" component={Animals} />
                    <Route path="/architecture" component={Architecture} />
                    <Route path="/arthropods" component={Arthropods} />
                    <Route path="/autumn" component={Autumn} />
                    <Route path="/butterflies" component={Butterflies} />
                    <Route path="/caterpillars" component={Caterpillars} />
                    <Route path="/landscapes" component={Landscapes} />
                    <Route path="/pets" component={Pets} />
                    <Route path="/plants-and-flowers" component={Plants} />
                    <Route path="/spring" component={Spring} />
                    <Route path="/sunsets-and-skies" component={Sunsets} />
                    <Route path="/water" component={Water} />
                    <Route path="/weather" component={Weather} />
                    <Route path="/winter" component={Winter} />
                </Switch>
            </BrowserRouter>
        </div>
    )

}

/* Below is stopStealPhoto.js code to disable right-clicking photos
and replace with copyright notice; code taken from Andrew Novikov (andymarch25):
https://github.com/andymarch25/stopStealPhoto */

// $.fn.stopStealPhoto = function (options) {

//     // default settings
//     var settings = $.extend({
//         message: 'Photo © Megan McCarty',
//         delay: 2000,
//         customClass: undefined,
//         cursorOffset: 14
//     }, options);

//     var timer;
//     var elem = this;

//     $('body').on('contextmenu', '.stopSteal', function (event) {
//         event.preventDefault();

//         var currentElement = event.currentTarget;

//         var hintPositionX = event.clientX + settings.cursorOffset;
//         var hintPositionY = event.clientY + settings.cursorOffset;

//         window.clearTimeout(timer);
//         $('.ssph-hint').remove();

//         var newId = Math.floor(Date.now());

//         var hint = $('<div class="ssph-hint" id="ssph-' + newId + '" />');

//         hint.css({
//             'position': 'absolute',
//             'left': hintPositionX,
//             'top': hintPositionY,
//             'z-index': 100
//         })

//         if (settings.customClass) {

//             hint.addClass(settings.customClass)

//         } else {
//             hint.css({
//                 'background-color': 'rgba(	73, 138, 104,0.75)',
//                 'color': '#fff',
//                 'font-size': '15px',
//                 'padding': '8px',
//                 'font-family': 'sans-serif',
//                 'border-radius': '4px',
//                 'position': 'fixed',
//                 'z-index': '99999'
//             })
//         }

//         // if data attribute exist in current element -> take text from it
//         var dataText = $(currentElement).attr('data-ssph');
//         var hintText = (dataText ? dataText : settings.message);
//         hint.text(hintText);

//         $('body').append(hint);

//         timer = window.setTimeout(function () {
//             $('#ssph-' + newId).fadeOut();
//         }, settings.delay);

//     })

// };

// $('.stopSteal').stopStealPhoto();

export default App;
