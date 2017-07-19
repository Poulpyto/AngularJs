/**
 * Created by PC-01 on 17/07/2017.
 */
const logClosure = (msg) => {
  return() => {
    console.log(msg);
  };
};

const hello = logClosure('Hello');

hello();
hello();

for (var i = 0; i<3; i++){
    setTimeout(() => {
      console.log(i);
      }, 1000);
}

for (var i = 0; i<3; i++){
  setTimeout(logClosure(i), 1000);
}