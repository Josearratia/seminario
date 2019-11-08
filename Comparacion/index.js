const natural = require('natural'); 
const classifier = new natural.BayesClassifier();

console.log('Creando registros...');
classifier.addDocument('MORENA es lo peor que le ha pasado a México', 'MALO');
classifier.addDocument('¿Al mal llamado presidente de México, Andrés Manuel López Obrador le robaron la presidencia dos veces o salvaron a México 12 años?', 'MALO');
classifier.addDocument('Muchas felicidades campeona', 'BUENO');
classifier.addDocument('Mi respeto a la Armada de México.', 'BUENO');
classifier.addDocument('¿Cómo hacer a México atractivo? Más innovación, talento y certeza', 'NEUTRO');
classifier.addDocument('Tenemos que estar orgullosos de todas esas personas que ayudaron a tener un México independiente', 'NEUTRO');
classifier.addDocument('Así es la justicia en México desde siempre', 'MALO');
classifier.addDocument('Saludos desde México', 'NEUTRO');
classifier.addDocument('Felicidades','BUENO')

console.log('Entrenando...');
classifier.train();
console.log('Realizando prueba de clasificación...');
console.log(classifier.classify('pensaron que yo iba a ser el peor presidente de Mexico, jajaja como les va'));
console.log(classifier.classify('México en todo regresa a los años ochenta, como con el senador Jesse Helms'));
console.log('Guardando clasificaciones...');
classifier.save('clasificaciones.json');
console.log('Cargando clasificaciones...');
natural.BayesClassifier.load('clasificaciones.json', null, function(err, classifier) {
  console.log(classifier.classify('BUEN VIDEO, YA HACÍA BUEN RATO QUE NO LO VEÍA... GRACIAS POR COMPARTIR! 🤓🤓🤓'));
  console.log(classifier.classify('Y a los que no le guste que se vayan de México y dejen a los ciudadanos conscientes mejorar el país'));
  console.log(classifier.classify('Desde la Secretaría de Relaciones Internacionales de #Morena en México, exigimos el levantamiento inmediato e incondicional del criminal bloqueo que Estados Unidos mantiene en contra de Cuba.'));
  console.log(classifier.getClassifications('El día que gusten les doy clases de historia de México. Y el que me conoce sabe de qué hablo.'));
});