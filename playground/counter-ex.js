class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    try {
      const count = parseInt(JSON.parse(localStorage.getItem("count")), 10);
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("count", JSON.stringify(this.state.count));
  }
  addOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
    //count++;
    //renderApp();
  }
  minusOne() {
    this.setState(prevState => {
      if (prevState.count > 0)
        return {
          count: prevState.count - 1
        };
    });
  }
  reset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
var appRoot = document.getElementById("app");
ReactDOM.render(<Counter />, appRoot);

/* let count = 0;
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
 */
