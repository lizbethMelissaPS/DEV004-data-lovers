export const filterDataType = (data, condition) => {
  const filtroType = data.filter((data) => data.type.includes(condition)); 
  return filtroType;
}
export const filterDataGeneration = (data, condition) => {
  const filtroGeneration = data.filter((data) => data.generation.name.includes(condition));
  return filtroGeneration;
}

export const sortData = (data, sortBy, sortOrder) => {
  const descentente = data.sort(sortOrder)
  console.log(descentente);
  //data.sort()///orden ascendente (de la A a la Z) por defecto
/*  data.sort(sortOrder)///ordenar descentente
  data.sort().reverse()///ordenar descentente
  //const orden = data(propiedad=>propiedad.num)
  console.log(data.sort(sortOrder))
  return 'ordenar'; */
};
/* calcular, nos permitirá hacer cálculos estadísticos básicos
 para ser mostrados de acuerdo a la data proporcionada. */
export const computeStats = (data) => {
  return 'OMG';
};


