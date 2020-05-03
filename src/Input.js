import React from 'react';


const Input = () => {
  const success = true;
  const currentGuess = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    this.props.guessWord(this.state.currentGuess);
    this.setState({ currentGuess: '' })
  }

  const handleChange = ({ target }) => {
    this.setState({ currentGuess: target.value });
  }

  const contents = success
    ?  null
    : (
      <form className="form-inline">
        <input
          data-test="input-box"
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
          value={currentGuess}
          onChange={handleChange}
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={handleSubmit}
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

export default Input;
