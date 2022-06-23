import {Pessoa} from "./pessoa.model";
import {TipoAtendimento} from "./tipo-atendimento.enum";
import {Convenio} from "./convenio.model";

export class Paciente extends Pessoa{
    tipoAtendimento!: TipoAtendimento;
    cartaoConvenio!: string;
    dataVencimento: any;
    convenio!: Convenio
}