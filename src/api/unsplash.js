import axios from 'axios';

//Se crea una instancia de axios con propiedades por default
export default axios.create({
  baseURL: "https://api.unsplash.com",
  //Headers que espera la API para la atenticación del usuario, se especifica en la documentación que espera el objeto y su contenido
  //Es el atributo Authorization: "Client-ID CLAVE DE ACCESO A LA API"
  headers: {
    Authorization: "Client-ID E45Yi6g_YnTuHS7qYDOlASSqR4LpI-bNyIfvhs0Gze8",
  },
});
