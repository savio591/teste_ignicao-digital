export default interface FiltersResponse {
    id?: string;
    prices?: string[];
    values_range?: ValuesRange;
    categories?: Category[];
    rating?: Rating[];
}

export interface Category {
    id: string;
    name: string;
    quantity: number;
}

export interface Rating {
    stars: number;
    quantity: number;
}

export interface ValuesRange {
    min: number;
    max: number;
}
