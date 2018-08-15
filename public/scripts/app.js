'use strict';

console.log("App is running");
var appInfo = {
    title: 'Indecision App',
    subtitle: 'Let the computer select the work',
    options: []
    //Better solution replace it with ternary operator
};function showOptions(options) {
    if (options.length > 0) {
        return "Here are your options";
    } else {
        return "No options available";
    }
}

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        appInfo.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * appInfo.options.length);
    alert(appInfo.options[randomNum]);
};

var onRemoveAll = function onRemoveAll() {
    appInfo.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

renderApp();

function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appInfo.title
        ),
        appInfo.subtitle && React.createElement(
            'p',
            null,
            appInfo.subtitle
        ),
        React.createElement(
            'p',
            null,
            appInfo.options.length > 0 ? "Here are your options" : "No options available"
        ),
        React.createElement(
            'button',
            { disabled: appInfo.options.length === 0, onClick: onMakeDecision },
            'What Should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ul',
            null,
            appInfo.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
}
