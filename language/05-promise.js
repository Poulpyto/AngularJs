/**
 * Created by PC-01 on 17/07/2017.
 */

const fs =  require('fs');
const util =  require('util');

const logSync = (logPath, msg) => {
  fs.appendFileSync(logPath, msg + '\n');
};

const logsSync = () => {
  try {
    logSync('logs/app.log', 'Ligne 1');
    logSync('logs/app.log', 'Ligne 2');
    logSync('logs/app.log', 'Ligne 3');
    logSync('logs/app.log', 'Ligne 4');
    logSync('logs/app.log', 'Ligne 5');
  }
  catch (err) {
    console.log(err.message);
  }
};
//console.time('logsSync()');
//logsSync();
//console.timeEnd('logsSync()');

const logAsync = (logPath, msg, cb) => {// cb = callback
  fs.appendFile(logPath, msg + '\n', cb);
};
const logsAsync = () => {
  logAsync('logs/app.log', 'Ligne 1', () => {
    logAsync('logs/app.log', 'Ligne 2', () => {
      logAsync('logs/app.log', 'Ligne 3', () => {
        logAsync('logs/app.log', 'Ligne 4', () => {
          logAsync('logs/app.log', 'Ligne 5', () => {
          });
        });
      });
    });
  });
};
//console.time('logsAsync');
//logsAsync();
//console.timeEnd('logsAsync');



const logPromise = util.promifisy(logAsync);
const statPromise = util.promifisy();
const mkdirPromise = util.promifisy();

/*const logPromise = (logPath, msg, cb) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(logPath, msg + '\n', resolve);
  });
};*/

const logsPromise = () => {// then = prochain succes, catch = prochaine erreur
  statPromise('logs')
  logPromise('logs/app.log', 'ligne 1 toto')
    .then(() => logPromise('logs/app.log', 'ligne 2tutu'))
    .then(() => logPromise('logs/app.log', 'ligne 3'))
    .then(() => logPromise('logs/app.log', 'ligne 4'))
    .then(() => logPromise('logs/app.log', 'ligne 5'))
    .catch((err) => {// remplace un try and catch + recupere les throw
      console.log(err.message);
    });
};

logsPromise();

