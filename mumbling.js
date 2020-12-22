const accum = str => str.split('').map((c, i) => c.toUpperCase() + c.repeat(i).toLowerCase()).join('-');
