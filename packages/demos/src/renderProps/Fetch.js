import React from "react";

class Fetch extends React.Component {
  state = {
    loading: true,
    error: null,
    data: null
  };

  handleError = error => {
    this.setState({ error, loading: false });
  };

  componentDidMount = async () => {
    const data = await this.props.fetchFunction(this.handleError);
    if (data) {
      this.setState({ data, loading: false });
    }
  };

  render() {
    return this.props.children(this.state);
  }
}

export default Fetch;
