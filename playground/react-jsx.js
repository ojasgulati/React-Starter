console.log("App is running");
const appInfo = {
    title: 'Indecision App',
    subtitle: 'Let the computer select the work',
    options: []
}

//Better solution replace it with ternary operator
/* function showOptions(options) {
    if (options.length > 0) {
        return "Here are your options"
    } else {
        return "No options available"
    }
} */

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        appInfo
            .options
            .push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appInfo.options.length)
    alert(appInfo.options[randomNum])
}

const onRemoveAll = () => {
    appInfo.options = [];
    renderApp();
}

var appRoot = document.getElementById('app');

renderApp();

function renderApp() {
    const template = (
        <div>
            <h1>{appInfo.title}</h1>
            {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0
                    ? "Here are your options"
                    : "No options available"}</p>
            <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ul>
                {appInfo
                    .options
                    .map((option, index) => {
                        return <li key={index}>{option}</li>
                    })}
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>

        </div>
    );

    ReactDOM.render(template, appRoot);
}