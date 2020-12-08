import React from 'react';
import $ from 'jquery';
import Navbar from './Navbar.js';
import Gallery from './Gallery.js';
import About from './About.js';
import Butterflies from './Butterflies.js';
import Plants from './Plants.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render () {
        return (
            <div className="Main-container">
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Gallery} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/butterflies" component={Butterflies}/>
                        <Route path="/plants" component={Plants}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

/* Below is stopStealPhoto.js code to disable right-clicking photos 
and replace with copyright notice; code taken from Andrew Novikov (andymarch25):
https://github.com/andymarch25/stopStealPhoto */

$.fn.stopStealPhoto = function(options) {
  
    // default settings
    var settings = $.extend({
        message: 'Image © Megan McCarty',
        delay: 2000,
        customClass: undefined,
        cursorOffset: 14
    }, options);

    var timer;
    var elem = this;

    $('body').on('contextmenu', 'img', function (event) {
        event.preventDefault();

        var currentElement = event.currentTarget;

        var hintPositionX = event.clientX + settings.cursorOffset;
        var hintPositionY = event.clientY + settings.cursorOffset;

        window.clearTimeout(timer);
        $('.ssph-hint').remove();

        var newId = Math.floor(Date.now());

        var hint = $('<div class="ssph-hint" id="ssph-'+newId+'" />');

        hint.css({
             'position' : 'absolute',
             'left' : hintPositionX,
             'top' : hintPositionY,
             'z-index' : 100
        })

        if (settings.customClass) {
             
            hint.addClass(settings.customClass)

        } else {
            hint.css({
                'background-color': 'rgba(	73, 138, 104,0.75)',
                'color': '#fff',
                'font-size': '11px',
                'padding': '4px',
                'font-family': 'sans-serif',
                'border-radius': '4px',
                'position': 'fixed',
                'z-index': '99999'
            })
        }

        // if data attribute exist in current element -> take text from it
        var dataText = $(currentElement).attr('data-ssph');
        var hintText = (dataText ? dataText : settings.message);
        hint.text(hintText);

        $('body').append(hint);

        timer = window.setTimeout(function(){
            $('#ssph-'+newId).fadeOut();
        }, settings.delay);

    })

};

$('img').stopStealPhoto();

export default App;
