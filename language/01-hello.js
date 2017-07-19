/**
 * Created by PC-01 on 17/07/2017.
 */

/**
 * additionne 2 param (=> == function())
 * @param a {number|string} 1er param
 * @param b {number|string} 2nd param
 * @return {number} la somme
 */

const addition = (a, b) => {
  return Number(a) + Number(b);
};

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0){
    console.log(addition(i, i));
  }
}