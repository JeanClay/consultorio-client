<template>
    <div class="topo">Listagem de Pacientes
        <router-link to="/paciente/formulario">
            <button class="button is-success">
                Cadastrar
            </button>
        </router-link>
    </div>
    <div class="tableCss">
        <table class="table is-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Celular</th>
                    <th>Sexo</th>
                    <th>Tipo de Atendimento</th>
                    <th>Cartao Convenio</th>
                    <th>Opcoes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in pacienteList" :key="item.id">
                    <th>{{ item.nome }}</th>
                    <th>{{ item.telefone }}</th>
                    <th>{{ item.celular }}</th>
                    <th>{{ item.sexo }}</th>
                    <th>{{ item.tipoAtendimento }}</th>
                    <th>{{ item.cartaoConvenio }}</th>
                    <th>
                        <button @click="onClickPaginaDetalhar(item.id)" class="button is-warning"> Detalhes </button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

import {PageRequest} from '@/model/page/page-request'
import { PageResponse } from "@/model/page/page-response";
import {Paciente} from "@/model/paciente.model";
import { PacienteClient } from "@/client/paciente.client";

export default class ListagemPaciente extends Vue{
    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<Paciente> = new PageResponse()

    private pacienteList: Paciente[] = []
    private pacienteClient!: PacienteClient

    public mounted(): void{
        this.pacienteClient = new PacienteClient()
        this.listarPacientes()
    }

    private listarPacientes(): void{
        this.pacienteClient.findByFiltrosPaginado(this.pageRequest)
            .then(
                success =>{
                    this.pageResponse = success
                    this.pacienteList = success.content
                },
                error => console.log(error)
            )
    }
    private onClickPaginaDetalhar(idPaciente: number){
        this.$router.push({ name: 'paciente-detalhar', params: { id: idPaciente, model: 'detalhar' } })
    }
}
</script>

<style scoped>

.topo{
    display: flex;
    font-size: xx-large;
    width: 100%;
    justify-content: space-around;
    padding-inline: 11%;
}
.tableCss{
    display: flex;
    justify-content: center;
}

</style>