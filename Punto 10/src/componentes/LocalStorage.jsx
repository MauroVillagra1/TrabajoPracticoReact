const LocalStorage = {
    claveLocalStorage: 'peliculas',
  
    obtenerPeliculas() {
      const peliculas = JSON.parse(localStorage.getItem(this.claveLocalStorage)) || [];
      return peliculas;
    },
  
    guardarPelicula(pelicula) {
      const peliculas = this.obtenerPeliculas();
      peliculas.push(pelicula);
      localStorage.setItem(this.claveLocalStorage, JSON.stringify(peliculas));
    },
  };
  
  export default LocalStorage;
  