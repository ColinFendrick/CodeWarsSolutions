export class G964 {

  public static stockList = (listOfArt, listOfCat) => {
    if (!listOfArt.length) { return '' };
    const res = listOfCat.reduce((obj, i) => {
      obj[i] = 0; return obj
    }, {});
    listOfArt.forEach(el => listOfCat.includes(el[0]) ? res[el[0]] += +(el.match(/\d+/)[0]) : undefined);
    return listOfCat.map(el => `(${el} : ${res[el]})`).join(' - ');
  }
}
