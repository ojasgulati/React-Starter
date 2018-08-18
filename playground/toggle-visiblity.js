console.log("App is running");

class ToggleVisiblity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.toggleVisiblity = this.toggleVisiblity.bind(this);
  }
  toggleVisiblity() {
    this.setState(prevState => {
      return { isVisible: !prevState.isVisible };
    });
  }
  render() {
    return (
      <div>
        <h1>Toggle Visiblity</h1>
        <button onClick={this.toggleVisiblity}>
          {app.hidenState ? "Show Details" : "Hide Details"}
        </button>
        {this.state.isVisible && <p>This is hidden text LOL</p>}
      </div>
    );
  }
}

var appRoot = document.getElementById("app");
ReactDOM.render(<ToggleVisiblity />, appRoot);