/**
 * Created by PC-01 on 17/07/2017.
 */
const contact = {
  prenom: 'Florent'
};

const helloPasDansContact = function(prenom) {
  return 'Bonjour ' +prenom+' , je m\'appelle ' + this.prenom;
};

console.log(helloPasDansContact());//Bonjour, je m'appelle undefined
console.log(helloPasDansContact.call(contact, 'Eric'));
console.log(helloPasDansContact.apply(contact, ['Eric']));

const helloSurContact = helloPasDansContact.bind(contact);
console.log(helloSurContact('Eric'));//Bonjour Eric , je m'appelle Florent

const contactAsync = {
  prenom: 'Florent2',
  helloAsync: function(prenom) {
    var that = this;//save this avant quil soit transforme dans la nvl function appelee
    setTimeout(() => {// la fleche permet de ne pas recreer la valeur de this != function()
      console.log(this);//this vien de la fonction timeout ou est redirigé la fonction asynchrone
      console.log('Bonjour ' +prenom+' je m\'appelle ' +this.prenom);
    }, 1000);
  }
};
contactAsync.helloAsync('Toto');