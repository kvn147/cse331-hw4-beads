import React, { Component, ChangeEvent } from 'react';
import { Viewer } from './Viewer';

type AppProps = {};  // no props

type AppState = {
  renderPattern: boolean,
  design: string,
  theme: string,
  rows: bigint,
  flip: boolean,
  double: boolean,
  error: string
};


/** Top-level component that displays the entire UI. */
export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      renderPattern: false,
      design: "",
      theme: "",
      rows: 2n,
      flip: false,
      double: false,
      error: ""
    }
  }

  render = (): JSX.Element => {
    if (this.state.renderPattern === true) {
      // TODO: add needed props to Viewer
      return <Viewer></Viewer>
    } else {
      return this.renderPatternForm();
    }
  }

  renderPatternForm = (): JSX.Element => {
    return (<div>
      <h1>Friendship Bracelet Designer</h1>
      <p>
      <label>Select a design: </label>
      <select name="design" value={this.state.design} onChange={this.doDesignChange}>
        <option value="">Select</option>
        <option value="slopes">Slopes</option>
        <option value="diamonds">Diamonds</option>
        <option value="hearts">Hearts</option>
        <option value="infinities">Infinities</option>
      </select>
      </p>

      <p>
      <label>Select a theme: </label>
      <select name="theme" value={this.state.theme} onChange={this.doColorChange}>
        <option value="">Select</option>
        <option value="CANDY">Cotton Candy</option>
        <option value="CREAMSICLE">Orange Creamsicle</option>
      </select>
      </p>

      <p>
      <label>Select a number of rows: </label>
        <input type="number" name="rows" min="1"
          value={Number(this.state.rows)} // input doesn't support bigint, convert to Number
          onChange={this.doRowsChange}></input>
      </p>

      <p>
      <label>Flip Pattern </label>
      <input type="checkbox" name="flip" checked={this.state.flip} onChange={this.doFlipChange}></input>
      </p>

      <p>
      <label>Double Pattern </label>
      <input type="checkbox" name="double" checked={this.state.double} onChange={this.doDoubleChange}></input>
      </p>

      <button onClick={this.doGoClick}>Go</button>

      <p style={{color: "red"}}>{this.state.error}</p>
    </div>);
  }

  // TODO: update methods or add new ones as needed

  doDesignChange = (evt: ChangeEvent<HTMLSelectElement>): void => {
    this.setState({design: evt.target.value, error: ""});
  }

  doColorChange = (evt: ChangeEvent<HTMLSelectElement>): void => {
    this.setState({theme: evt.target.value, error: ""});
  }

  doRowsChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({rows: BigInt(evt.target.value), error: ""});
  }

  doFlipChange = (_evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({flip: !this.state.flip, error: ""});
  }

  doDoubleChange = (_evt: ChangeEvent<HTMLInputElement>): void => {
    this.setState({double: !this.state.double, error: ""});
  }

  doGoClick = (): void => {
    if (this.state.design === "") {
      this.setState({error: "Must select a design"});

    } else if (this.state.theme === "") {
      this.setState({error: "Must select a theme"});

    } else if (this.state.rows <= 0n) {
      this.setState({error: "Must select a non-zero number of rows."});

    } else if (this.state.design !== "slopes" && this.state.rows % 2n !== 0n) {
      this.setState({error: "heart, diamond, and infinity designs can only be made with an even numbers of rows"});

    } else {
      this.setState({renderPattern: true});
    }
  }
}