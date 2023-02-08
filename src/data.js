export const filterDataType = (data, condition) => {
  const filtroType = data.filter((data) => data.type.includes(condition));
  return filtroType;
};
export const filterDataGeneration = (data, condition) => {
  const filtroGeneration = data.filter((data) =>
    data.generation.name.includes(condition)
  );
  return filtroGeneration;
};
//sortOrder: ascendente , descendente
//sortBy: numero, nombre
export const sortData = (data,sortBy1,sortBy2,sortBy3,sortBy4, sortOrder) => {
  let respuesta;
  switch (sortOrder) {
    case sortBy1: respuesta = data.sort((a, b) => a.name.localeCompare(b.name)); break;
    case sortBy2: respuesta = data.sort((a, b) => b.name.localeCompare(a.name)); break;
    case sortBy3: respuesta = data.sort((a, b) => a.num.localeCompare(b.num)); break;
    case sortBy4: respuesta = data.sort((a, b) => b.num.localeCompare(a.num)); break;
  }
  return respuesta

};




/* calcular, nos permitirá hacer cálculos estadísticos básicos
 para ser mostrados de acuerdo a la data proporcionada. */
export const computeStats = (data) => {
  return "OMG";
};
