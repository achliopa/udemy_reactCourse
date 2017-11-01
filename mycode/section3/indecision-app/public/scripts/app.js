'use strict';

var app = {
    title: 'Visibility Toggle',
    subtitle: 'Hey. These are some details you can now see!',
    visible: true,
    button: 'Hide Details'
};

var appRoot = document.getElementById('app');

var onHide = function onHide() {
    if (app.visible) {
        app.visible = false;
        app.button = 'Show Details';
    } else {
        app.visible = true;
        app.button = 'Hide Details';
    }
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onHide },
            app.button
        ),
        app.visible && React.createElement(
            'p',
            null,
            app.subtitle
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
