<template>
    <div class="topo">Listagem de Especialidade
        <router-link to="/especialidade/formulario">
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
                <th>Opcoes</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in listaEspecialidade" :key="item.id">
                <th>{{ item.nome }}</th>
                <th>
                    <button @click="onClickPaginaDetalhar(item.id)" class="button is-warning"> Detalhes </button>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import {PageRequest} from "@/model/page/page-request";
import {PageResponse} from "@/model/page/page-response";
import {Especialidade} from "@/model/especialidade.model";
import {EspecialidadeClient} from "@/client/especialidade.client";
import {Vue} from "vue-class-component";

export default class ListagemEspecialidade extends Vue{

    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<Especialidade> = new PageResponse<Especialidade>()

    private listaEspecialidade: Especialidade[] = []
    private especialidadeClient!: EspecialidadeClient

    public mounted(): void{
        this.especialidadeClient = new EspecialidadeClient()
        this.listarEspecialidades()
    }

    private listarEspecialidades(): void{
        this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
            .then(
                success =>{
                    this.pageResponse = success
                    this.listaEspecialidade = success.content
                },
                error => console.log(error)
            )
    }
    private onClickPaginaDetalhar(idEspecialidade: number){
        this.$router.push({ name: 'especialidade-detalhar', params: { id: idEspecialidade, model: 'detalhar' } })
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