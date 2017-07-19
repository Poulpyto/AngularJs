/**
 * Created by PC-01 on 17/07/2017.
 */

const coords = {
    x: 10,
    y: 20,
};

const json = JSON.stringify(coords);
console.log(json);//{"x":10,"y":20}

const Contact = function (prenom) {
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour, je m\'appelle ' + this.prenom;
};

console.log(typeof Contact);//function
console.log(typeof Number);//function

const florent = new Contact('Florent');
console.log(typeof florent);//object
console.log(florent.prenom);

console.log(Contact.prototype.hello());// Bonjour, je m'appelle undefined
console.log(florent.hello());
console.log(florent.hasOwnProperty('prenom'));// true
console.log(florent.hasOwnProperty('hello'));// false