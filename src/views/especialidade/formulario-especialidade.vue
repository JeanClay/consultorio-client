<template>

    <div class="columns">
        <div class="column is-12 is-size-3">
            Cadastrar Especialidade
        </div>
    </div>

    <hr />

    <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
            <div :class="notification.classe">
                <button @click="onClickFecharNotificacao()" class="delete" ></button>
                {{ notification.mensagem }}
            </div>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">
                <input v-model="especialidade.ativo" checked type="checkbox">
                Ativar Especialidade
            </label>
        </div>
    </div>

    <div class="columns">
        <div class="column is-12 is-size-3">
            <label class="label">Nome</label>
            <div class="control">
                <input class="input is-primary" type="text" v-model="especialidade.nome" placeholder="Nome da Especialidade">
            </div>
        </div>
    </div>

    <hr />

    <div class="columns">
        <div class="column is-8"></div>
        <div class="column is-2">
            <a href="/especialidade/listar" class="button is-fullwidth is-info">Voltar</a>
        </div>
        <div class="column is-2">
            <button class="button is-fullwidth is-success" @click="onClickCadastrar()">Success</button>
        </div>
    </div>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Especialidade } from '@/model/especialidade.model'
import { Notification } from '@/model/notification'
import { EspecialidadeClient } from '@/client/especialidade.client'
/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export default class EspecialidadeForm extends Vue {
    private especialidadeClient!: EspecialidadeClient
    private especialidade : Especialidade = new Especialidade()
    private notification : Notification = new Notification()

    @Prop({ type: Number, required: false })
    private readonly id!: number
    @Prop({ type: String, default: false })
    private readonly model!: string
    public mounted(): void {
        this.especialidadeClient = new EspecialidadeClient()
        console.log(this.id)
        console.log(this.model)
    }

    private onClickCadastrar(): void {

        this.especialidadeClient.cadastrar(this.especialidade)
            .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Cadastrada com sucesso!!!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                })
    }
    private onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    private onClickLimpar(): void {
        this.especialidade = new Especialidade()
    }
    private loadDetalhes():void {
        if (this.model ){
            this.especialidadeClient.findById(this.id)
                .then(
                    success => {
                        this.especialidade = success
                    },
                    error => console.log(error)
                )
        }
    }
}
</script>

