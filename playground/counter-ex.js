let count = 0;
const addOne = () => {
    count++;
    renderApp();
}
const minusOne = () => {}
const reset = () => {}

var appRoot = document.getElementById('app');

renderApp();

function renderApp() {
    const templateTwo = (
        <div>
            <h1>count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot);
}
