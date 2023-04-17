import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  clickHandler() {
    this.setState({hasError: false})
    this.props.onClick();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Something went wrong!</p>
          <button onClick={this.clickHandler.bind(this)}>reset</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
