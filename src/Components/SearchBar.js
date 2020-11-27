import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  //Cuando se manda llamar dentro de un manejador de eventos se escribe sin parentesis (this.onInputChange)
  onInputeChange(event) {
    console.log(event.target.value);
  }

  //Se crea una funcion de flecha para poder hacer bind a la propiedad this y así evitar el error de tipo
  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <label>Image Search:</label>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
