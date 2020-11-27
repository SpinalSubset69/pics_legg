import React, { Component } from "react";
import unsplash from "../api/unsplash";

//Components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  //Metodo asyncrono por que recibira información que puede demorar tiempo
  onSearchSubmit = async (term) => {
    //Cuando se hace una peticion se usa el metodo get de Axios, recibe dos argumentos
    //El primero es la URL a donde se hara la petición, el segundoconfiguramos la petición
    const response = await unsplash.get("/search/photos", {
      //Parametros que espera nuestra api para realizar la busqueda
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="header">
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <p className="found">Found: {this.state.images.length} images.</p>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
