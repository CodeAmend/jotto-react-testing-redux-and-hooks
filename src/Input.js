import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';


export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.guessWord(this.state.currentGuess);
    this.setState({ currentGuess: '' })
  }

  handleChange = ({ target }) => {
    this.setState({ currentGuess: target.value });
  }

  render() {
    const contents = this.props.success
      ?  null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            type="text"
            className="mb-2 mx-sm-3"
            placeholder="enter guess"
            value={this.state.currentGuess}
            onChange={this.handleChange}
          />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary mb-2"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      )

    return (
      <div data-test="component-input">
        {contents}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
