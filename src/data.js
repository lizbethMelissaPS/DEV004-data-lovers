/* esta función filter o filtrar recibiría la data, 
y nos retornaría aquellos datos que sí cumplan con la condición. */

export const filterDataType = (data, condition) => {
  const filtroType = data.filter((data) => data.type.includes(condition)); 
  return filtroType;
}
export const filterDataGeneration = (data, condition) => {
  console.log(condition);
  const filtroGeneration = data.filter((data) => data.generation.name.includes(condition));
  console.log(filterDataGeneration);
  return filtroGeneration;
}
/* data, nos entrega los datos.
  sortBy, campos de la data se quiere ordenar.
  sortOrder, indica ascendente o descendente. */
export const sortData = (data, sortBy, sortOrder) => {
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


