import React, {useState, useEffect} from 'react';

function CopyrightText() {
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        document.body.addEventListener('contextmenu', handleClick);

        return function cleanup() {
            window.removeEventListener('contextmenu', handleClick);
        }
    }, []);

    function reduceOpacity() {
        return setOpacity((opacity) => opacity - 0.05)
    }
    
    function fadeOut(intervalID) {
        intervalID = setInterval(reduceOpacity, 50)
        setTimeout(() => {
            clearInterval(intervalID);
            return setShowContextMenu(false);
        }, 1000)
    }
    
    function handleClick(event) {
        let intervalID;
        console.log(event);
        console.log(event.target);
        console.log(event.currentTarget);
        if (!event.target.className.includes("noStopSteal") && event.target.nodeName === 'IMG' ) {
            event.preventDefault();
            let x = event.clientX + 14;
            let y = event.clientY + 14;
            setXPos((xPos) => xPos = x);
            setYPos((yPos) => yPos = y);
            setShowContextMenu(true);
    
            setTimeout(() => fadeOut(intervalID), 1000);
            setOpacity((opacity) => opacity = 1);
        }
    }

    return (
        showContextMenu ?
            <span id="context-menu" style={{ 'left': xPos, 'top': yPos, 'opacity': opacity }}>
                Photo © Megan McCarty
            </span>
            : null
    )
}

export default CopyrightText;