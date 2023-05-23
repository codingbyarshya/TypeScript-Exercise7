interface Country {
    name: string;
    code: string;
    population?: number;
}

const countryA: Country = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

const countryB: Country = {
    name: "Italy",
    code: "IT"
};

const countryC: Country = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};



type Currency = {
    readonly name: string;
    code: string;
    symbol: string;
};

const currencyData: Currency = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};

// The following lines will cause a type error and should be removed , since the `name` property is readonly in the `Currency` type.
// currencyData.name = "Gold";
// currencyData.code = "GGG";



export {};
