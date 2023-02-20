import {
  filterDataType,
  filterDataGeneration,
  search,
  sortData,
} from "../src/data.js";

describe("filter TYPE POKEMON", () => {
  it("is a function", () => {
    expect(typeof filterDataType).toBe("function");
  });

  it("return todos lo pokemones de tipo grass", () => {
    const ejemplo = [
      {
        type: ["grass", "poison"],
      },
      {
        type: ["fire"],
      },
    ];
    expect(filterDataType(ejemplo, "grass")).toEqual([
      {
        type: ["grass", "poison"],
      },
    ]);
  });
});

describe("filter de generacion", () => {
  it("is a function", () => {
    expect(typeof filterDataGeneration).toBe("function");
  });

  it("return todos lo pokemones por generacion kanto", () => {
    const ejemplo1 = [
      {
        generation: {
          num: "generation i",
          name: "kanto",
        },
      },
      {
        generation: {
          num: "generation ii",
          name: "johto",
        },
      },
    ];
    expect(filterDataGeneration(ejemplo1, "kanto")).toEqual([
      {
        generation: {
          num: "generation i",
          name: "kanto",
        },
      },
    ]);
  });
});

describe("search pokemon", () => {
  it("is a function", () => {
    expect(typeof search).toBe("function");
  });

  it("return el pokemon que busca por nombre bulbasaur", () => {
    const ejemplo2 = [
      {
        num: "001",
        name: "bulbasaur",
      },
      {
        num: "152",
        name: "chikorita",
      },
    ];
    expect(search(ejemplo2, "bulbasaur")).toEqual([
      {
        num: "001",
        name: "bulbasaur",
      },
    ]);
  });
});

describe("que ordene pokemones", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("return en orden alfabetico ascendente", () => {
    const ejemplo3 = [
      {
        name: "chikorita",
      },
      {
        name: "bulbasaur",
      },
    ];
    expect(sortData(ejemplo3, "a-z")).toEqual([
      {
        name: "bulbasaur",
      },
      {
        name: "chikorita",
      },
    ]);
  });
});
