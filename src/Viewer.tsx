import React, { Component } from 'react';
import { generatePattern, PatternElem, sew } from './pattern_elems';
import { Theme, CANDY, CREAMSICLE } from './pattern';
import { pflip } from './pattern_ops';

type ViewerProps = {
  // TODO: fill in props needed from App to initialize component
  //       then replace hardcoded initial vales
  design?: string,
  theme?: Theme,
  rows?: bigint,
  flip?: boolean,
  double?: boolean,
  onback?: (design: string, theme: Theme, rows: bigint, flip: boolean, double: boolean) => void
}

type ViewerState = {
  design: string,
  theme: Theme,
  rows: bigint,
  flip: boolean,
  double: boolean,
}

export class Viewer extends Component<ViewerProps, ViewerState> {
  constructor(props: ViewerProps) {
    super(props);

    this.state = {
      design: props.design || "",
      theme: props.theme || CANDY,
      rows: props.rows || 2n,
      flip: props.flip || false,
      double: props.double || false
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
      <button onClick={this.doBackClick}>Back</button>
    </div>
  }

  renderPattern = (): JSX.Element => {
    // TODO: replace "nil" with a call to generatePattern() & pass in appropriate params
    const pattern = generatePattern(this.state.design, this.state.theme, this.state.rows);

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
    if (this.state.design === "slopes") {
      this.setState({rows: this.state.rows + 1n});
    } else {
      this.setState({rows: this.state.rows + 2n});
    }
  }

  doFlipClick = (): void => {
    this.setState({flip: !this.state.flip});
  }

  doDoubleClick = (): void => {
    this.setState({double: !this.state.double});
  }

  doBackClick = (): void => {
    if (this.props.onback) {
      this.props.onback(this.state.design, this.state.theme, this.state.rows, this.state.flip, this.state.double);
    }
  }
}