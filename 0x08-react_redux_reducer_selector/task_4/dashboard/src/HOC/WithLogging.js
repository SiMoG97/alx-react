import React from "react";

const WidthLogging = (WrapperComponent) => {
  const wrappedCompName = WrapperComponent.name || "Component";
  class WidthLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${wrappedCompName} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${wrappedCompName} is going to unmount`);
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  WidthLogging.displayName = `WithLogging(${wrappedCompName})`;

  return WidthLogging;
};

export default WidthLogging;
