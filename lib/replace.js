module.exports = {
    replace: function(objetivo, reemplazos) {
      // Utiliza una función de reemplazo personalizada
      return objetivo.replace(/%(.*?)%/g, (match, key) => {
        if (reemplazos[key]) {
          return reemplazos[key];
        }
        // Si no se encuentra el reemplazo, devuelve la cadena original
        return match;
      });
    }
  };
  