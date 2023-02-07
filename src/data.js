export const filterDataType = (data, condition) => {
  const filtroType = data.filter((data) => data.type.includes(condition)); 
  return filtroType;
}
export const filterDataGeneration = (data, condition) => {
  const filtroGeneration = data.filter((data) => data.generation.name.includes(condition));
  return filtroGeneration;
}
//sortOrder: ascendente , descendente
//sortBy: numero, nombre 
export const sortData = (data, sortBy, sortOrder) => {
  //data.sort()///orden ascendente (de la A a la Z) por defecto
 ///ordenar descentente
 console.log(sortOrder);
  //data.sort().reverse()///ordenar descentente
  if (sortOrder==='descendente') {
    console.log('aqui2')
    console.log(data.sort().reverse() )
  } else {
    console.log('aqui')
    console.log(data.sort())
  }
 
  //const orden = data(propiedad=>propiedad.num)
  
  return 'ordenar';
};
/* calcular, nos permitirá hacer cálculos estadísticos básicos
 para ser mostrados de acuerdo a la data proporcionada. */
export const computeStats = (data) => {
  return 'OMG';
};


