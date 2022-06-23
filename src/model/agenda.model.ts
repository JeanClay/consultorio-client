import {AbstractEntity} from "./abstract-entity.model";
import {StatusAgenda} from "./status-agenda.enum";
import {Paciente} from "./paciente.model";
import {Medico} from "./medico.model";

export class Agenda extends AbstractEntity{
    status!: StatusAgenda;
    dataDe!: any;
    dataAte!: any;
    encaixe!: boolean;
    paciente!: Paciente;
    medico!: Medico

}