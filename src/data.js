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
export const sortData = (data, sortOrder) => {
  if (sortOrder === "descending") {
    console.log("aqui2");
    const des = data.sort().reverse();
    return des
  } else {
    console.log("aqui");
    return data.sort();
  }
};
/* calcular, nos permitirá hacer cálculos estadísticos básicos
 para ser mostrados de acuerdo a la data proporcionada. */
export const computeStats = (data) => {
  return "OMG";
};
