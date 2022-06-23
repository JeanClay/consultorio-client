import {Pessoa} from "./pessoa.model";

export class Secretaria extends Pessoa{
    salario!: number;
    pis!: string;
    dataContratacao: any;
}