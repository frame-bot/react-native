export interface ProductResponse {
    data: Product[];
    meta: Meta;
}

export interface Product {
    id:      number;
    title:   string;
    detail:  string;
    date:    Date;
    view:    number;
    picture: string;
}

export interface Meta {
    status:      string;
    status_code: number;
}
