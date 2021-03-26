export interface Results {
    quantity: number;
    data?:     Datum[];
}

export interface Datum {
    image:       string;
    name:        string;
    author:      string;
    description: string;
    rating:      string;
    price:       number;
}


export default Results