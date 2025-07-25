import React, { Component } from 'react';
import { PatternElem, sew } from './pattern_elems';
import { Theme, CANDY, CREAMSICLE } from './pattern';
import { pflip } from './pattern_ops';
import { nil } from './list';

type ViewerProps = {
  // TODO: fill in props needed from App to initialize component
  //       then replace hardcoded initial vales
}

type ViewerState = {
  theme: Theme,
  rows: bigint,
  flip: boolean,
  double: boolean,
}

export class Viewer extends Component<ViewerProps, ViewerState> {
  constructor(props: ViewerProps) {
    super(props);

    this.state = {
      theme: CANDY,
      rows: 0n,
      flip: false,
      double: false
    }
  }

  render = (): JSX.Element => {
    return <div>
      {this.renderPattern()}
      <div>
        <button onClick={this.doSwapThemeClick}>Swap Theme</button>
        <button onClick={this.doAddRowsClick}>Add Rows</button>
        <button onClick={this.doFlipClick}>Flip</button>
        {this.renderDoubleBtn()}
      </div>
      <button onClick={() => console.log("TODO: create handler to replace this")}>Back</button>
    </div>
  }

  renderPattern = (): JSX.Element => {
    // TODO: replace "nil" with a call to generatePattern() & pass in appropriate params
    const pattern = nil;

    if (this.state.flip === true && this.state.double === true) {
      return <PatternElem pattern={pflip(sew(pattern, pattern))}></PatternElem>;
    } else if (this.state.flip === true) {
      return <PatternElem pattern={pflip(pattern)}></PatternElem>;
    } else if (this.state.double === true) {
      return <PatternElem pattern={sew(pattern, pattern)}></PatternElem>;
    } else {
      return <PatternElem pattern={pattern}></PatternElem>;
    }
  }

  renderDoubleBtn = (): JSX.Element => {
    if (this.state.double === false) {
      return <button onClick={this.doDoubleClick}>Double</button>;
    } else {
      return <button onClick={this.doDoubleClick}>Un-double</button>;

    }
  }

  // TODO: update methods or add new ones as needed

  doSwapThemeClick = (): void => {
    if (this.state.theme === CANDY) {
      this.setState({theme: CREAMSICLE});
    } else {
      this.setState({theme: CANDY});
    }
  }

  doAddRowsClick = (): void => {
    // TODO: update to add the minimum number of rows for the _current design_
    this.setState({rows: this.state.rows + 2n})
  }

  doFlipClick = (): void => {
    this.setState({flip: !this.state.flip});
  }

  doDoubleClick = (): void => {
    this.setState({double: !this.state.double});
  }
}