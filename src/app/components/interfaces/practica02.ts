export interface Practica02{
    posts: Array<Practica>;
}

export interface Practica {
    id?:number;
    nombre:string;
    usuario:string;
    telefono?:string;
    direccion?:string;
}
