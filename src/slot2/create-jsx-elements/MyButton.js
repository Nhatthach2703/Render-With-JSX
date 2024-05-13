import React from 'react';

class MyButton extends React.Component {
  render() {
    return (
        <button type="">{this.props.children}</button>
    );
  }
}
export default MyButton;