<template>
    <h1 v-if="!model || this.model === 'editar'">Pagina de Cadastro</h1>
    <h1 v-else>Pagina de Detalhes</h1>
    <br>
    <div class="columns is-justify-content-space-evenly">
        <input class="input column is-10" type="text" placeholder="Nome" :readonly="model === 'detalhar'" :value="this.paciente.nome">
    </div>
    <br>
    <div class="columns is-justify-content-space-evenly">
        <input class="input column is-2" type="tel" placeholder="Telefone" :readonly="model === 'detalhar'" :value="this.paciente.telefone">
        <input class="input column is-2" type="tel" placeholder="Celular" :readonly="model === 'detalhar'" :value="this.paciente.celular">
        <input class="input column is-4" type="text" placeholder="Email" :readonly="model === 'detalhar'" :value="this.paciente.email">
    </div>
    <br>
    <div class="columns is-justify-content-space-evenly">
        <input class="input column is-4" type="text" placeholder="Nacionalidade" :readonly="model === 'detalhar'" :value="this.paciente.nacionalidade">
        <input class="input column is-2" type="text" placeholder="CPF" :readonly="model === 'detalhar'" :value="this.paciente.cpf">
        <input class="input column is-2" type="text" placeholder="RG" :readonly="model === 'detalhar'" :value="this.paciente.rg">
    </div>
    <br>
    <div class="columns is-justify-content-space-evenly">
        <input class="input column is-1" type="text" placeholder="Convenio" :readonly="model === 'detalhar'" :value="this.paciente.convenio">
        <input class="input column is-2" type="text" placeholder="Numero Cartao Convenio" :readonly="model === 'detalhar'" :value="this.paciente.cartaoConvenio">
        <input class="input column is-2" type="text" placeholder="Login" :readonly="model === 'detalhar'" :value="this.paciente.login">
        <input class="input column is-2" type="text" placeholder="Senha" :readonly="model === 'detalhar'" :value="this.paciente.senha">
    </div>
    <div class="buttons is-right">
        <div>
            <router-link to="/paciente/listar">
                <button class="button is-warning">
                    Voltar
                </button>
            </router-link>
        </div>
        <div v-if="this.model === 'detalhar'">
            <router-link :to="`/paciente/formulario/editar/${this.id}`">
                <button class="button is-success">
                    Editar
                </button>
            </router-link>
        </div>
        <div v-if="!model ||this.model === 'editar'">
            <button class="button is-success" @click="onClickEvent">
                Salvar
            </button>
        </div>
        <div v-if="this.model === 'detalhar' || this.model === 'editar'">
            <button class="button is-black">
                Excluir
            </button>
        </div>
    </div>

</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {PacienteClient} from "@/client/paciente.client";
import {Paciente} from "@/model/paciente.model";
import {Prop} from "vue-property-decorator";

export default class FormularioPaciente extends Vue{
    private pacienteClient!: PacienteClient
    private paciente: Paciente = new Paciente()

    @Prop({type: Number, required: false})
    private readonly id!: number
    @Prop({type: String, default: false})
    private readonly model!: string

    public mounted(): void{
        this.pacienteClient = new PacienteClient()
        if (this.model){
            this.pacienteClient.findById(this.id)
                .then(
                    success =>{
                        this.paciente = success
                    },
                    error => console.log(error)
                )
        }
        console.log(this.id)
        console.log(this.model)
    }
    private onClickEvent(): void{
        if (this.model === "editar")
            this.onClickUpdate()
        else
            this.onClickCadastrar()
    }

    private onClickCadastrar(): void{
        this.pacienteClient.cadastrar(this.paciente)
            .then(
                success => {
                    console.log("Cadastrado")
                },
                error => console.log(error)
            )
    }

    private onClickUpdate(): void{
        this.pacienteClient.editar(this.paciente)
            .then(
                success => console.log("Atualizado"),
                error => console.log(error)
            )
    }

}
</script>

<style scoped>

</style>