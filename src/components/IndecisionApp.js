import React from "react";
import Action from "./Action";
import Header from "./Header";
import AddOptions from "./AddOptions";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log("Error in parsing Json");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[randomNum] }));
  };

  handleAddOption = option => {
    if (!option) return "Enter a value";
    else if (this.state.options.indexOf(option) > -1)
      return "Value already exist";

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  handleCloseOptionModel = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  render() {
    var title = "Indecision App";
    var subtitle = "Put your life into hands of computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseOptionModel={this.handleCloseOptionModel}
        />
      </div>
    );
  }
}
