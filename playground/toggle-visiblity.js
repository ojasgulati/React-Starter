console.log('App is running');

const app = {
    title: "Toggle Visiblity",
    hidenState: true,
    button: "Show Details",
    subTitle: "This is hidden text LOL"
}

var toggleHidden = () => {
    app.hidenState = !app.hidenState;
    renderApp();
}

var appRoot = document.getElementById('app');
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleHidden}>{app.hidenState ? "Show Details":"Hide Details"}</button>
            <p hidden={app.hidenState}>{app.subTitle}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();