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

export const sortData = (data, sortOrder) => {
  let sort;
  switch (sortOrder) {
  case "a-z":
    sort = data.sort((a, b) => a.name.localeCompare(b.name));
    break;
  case "z-a":
    sort = data.sort((a, b) => b.name.localeCompare(a.name));
    break;
  case "ascending":
    sort = data.sort((a, b) => a.num.localeCompare(b.num));
    break;
  case "descending":
    sort = data.sort((a, b) => b.num.localeCompare(a.num));
    break;
  }
  return sort;
};

export const search = (data, condition) => {
  const searchName = data.filter((data) => data.name.startsWith(condition));
  const searchNum = data.filter((data) => data.num.startsWith(condition));
  return [...searchName, ...searchNum];
};
