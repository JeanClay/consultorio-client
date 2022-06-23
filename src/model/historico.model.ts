import {AbstractEntity} from "./abstract-entity.model";
import {StatusAgenda} from "./status-agenda.enum";
import {Secretaria} from "./secretaria.model";
import {Paciente} from "./paciente.model";
import {Agenda} from "./agenda.model";

export class Historico extends AbstractEntity{
    data: any;
    status!: StatusAgenda;
    observacao!: string;
    secretaria!: Secretaria;
    paciente!: Paciente;
    agenda!: Agenda
}