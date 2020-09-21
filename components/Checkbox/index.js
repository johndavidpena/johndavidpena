import React, { PureComponent } from 'react';
import CheckboxIcon from './CheckboxIcon';

export default class Checkbox extends PureComponent {
  state = {
    checked: false,
    indeterminate: false,
    disabled: false
  };

  render() {
    return (
      <CheckboxIcon
        onClick={() => {
          this.setState({ checked: !this.state.checked });
          console.log(this.props.interest);
        }}
        checked={this.state.checked}
        indeterminate={this.state.indeterminate}
        disabled={this.state.disabled}
      />
    );
  }
}

// From https://codesandbox.io/s/wqq6j2p95l
