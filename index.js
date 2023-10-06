const param_replacer = require('./lib/replace');

const objetivo = "%hello%world%! -- %world% %hello%!";
const idioma = "en"; // Define el idioma deseado

const reemplazos = {
  "en": {
    "hello": "Hello",
    "world": "World"
  },
  "es": {
    "hello": "Hola",
    "world": "Mundo"
  }
};

if (reemplazos[idioma]) {
  const resultado = param_replacer.replace(objetivo, reemplazos[idioma]);
  console.log(resultado);
} else {
  console.log(`Idioma "${idioma}" no encontrado en reemplazos.`);
}
