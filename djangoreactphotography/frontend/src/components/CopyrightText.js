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
        console.log("Function reduceOpacity() executed")
        return setOpacity((opacity) => opacity - 0.05)
    }
    
    function fadeOut() {
        console.log("Function fadeOut() executed")
        let intervalID = setInterval(reduceOpacity, 50)
        setTimeout(() => {
            console.log("Final setTimeout() function executed")
            clearInterval(intervalID);
            return setShowContextMenu(false);
        }, 1000)
    }
    
    function handleClick(event) {
        if (!event.target.className.includes("noStopSteal") && event.target.nodeName === 'IMG' ) {
            event.preventDefault();
            setXPos((xPos) => xPos = event.clientX + 14);
            setYPos((yPos) => yPos = event.clientY + 14);
            setShowContextMenu(true);
            console.log("Context menu rendered")
    
            setTimeout(() => fadeOut(), 2000);
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