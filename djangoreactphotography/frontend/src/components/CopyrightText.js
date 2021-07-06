import React from 'react';

class CopyrightText extends React.Component {
    state = {
        xPos: 0,
        yPos: 0,
        showContextMenu: false,
        opacity: 1
    }

    componentDidMount() {
        document.body.addEventListener('contextmenu', (event) => this.handleClick(event));
    }

    componentWillUnmount() {
        document.body.removeEventListener('contextmenu', (event) => this.handleClick(event));
    }

    handleClick = (event) => {
        if (!event.target.className.includes("noStopSteal") && event.target.nodeName === 'IMG') {
            event.preventDefault();
            this.setState({
                xPos: event.clientX + 14,
                yPos: event.clientY + 14,
                showContextMenu: true
            })

            console.log("Context menu rendered")

            setTimeout(() => this.fadeOut(), 2000);
            this.setState({ opacity: 1 });
        }
    }

    fadeOut = () => {
        console.log("Function fadeOut() executed")
        let intervalID = setInterval(() => {
            return this.reduceOpacity()
        }, 50)

        setTimeout(() => {
            console.log("Final setTimeout() function executed")

            clearInterval(intervalID);
            return this.setState({ showContextMenu: false });
        }, 1000)
    }

    reduceOpacity = () => {
        console.log("Function reduceOpacity() executed")
        this.setState(prevOpacity => {
            console.log(prevOpacity.opacity);
            return { opacity: prevOpacity.opacity - 0.05 }
        })

    }

    render() {
        return (
            this.state.showContextMenu ?
                <span id="context-menu" style={{ 'left': this.state.xPos, 'top': this.state.yPos, 'opacity': this.state.opacity }}>
                    Photo © Megan McCarty
                </span>
                : null
        )
    }
}

export default CopyrightText;