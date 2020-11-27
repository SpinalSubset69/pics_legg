import React, { Component } from "react";
import axios from "axios"; //#rd package to make request to unsplash API

//Components
import SearchBar from "./SearchBar";

class App extends Component {
  state = {images: []};

  //Metodo asyncrono por que recibira información que puede demorar tiempo
  onSearchSubmit =async (term) => {
    //Cuando se hace una peticion se usa el metodo get de Axios, recibe dos argumentos
    //El primero es la URL a donde se hara la petición, el segundoconfiguramos la petición
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      //Parametros que espera nuestra api para realizar la busqueda
      params: { query: term },
      //Headers que espera la API para la atenticación del usuario, se especifica en la documentación que espera el objeto y su contenido
      //Es el atributo Authorization: "Client-ID CLAVE DE ACCESO A LA API"
      headers: {
        Authorization: "Client-ID E45Yi6g_YnTuHS7qYDOlASSqR4LpI-bNyIfvhs0Gze8",
      },
    });
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="header">
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
         <p className="found">Found: {this.state.images.length} images.</p>
        </div>
      </div>
    );
  }
}

export default App;
