<template>
    <div class="topo">Listagem de Pacientes
        <router-link to="/paciente/formcadastro">
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
            <tr>
                <th>Ana</th>
                <th>(00) 00000-0000</th>
                <th>(00) 00000-0000</th>
                <th>Feminino</th>
                <th>Particular</th>
                <th>0000-0000-0000-0000</th>
                <th>
                    <router-link to="/paciente/formeditar">
                        <button class="button is-warning">
                            Detalhes
                        </button>
                    </router-link>
                </th>
            </tr>
            <tr>
                <th>Joana</th>
                <th>(00) 00000-0000</th>
                <th>(00) 00000-0000</th>
                <th>Feminino</th>
                <th>Particular</th>
                <th>0000-0000-0000-0000</th>
                <th>
                    <router-link to="/paciente/formeditar">
                        <button class="button is-warning">
                            Detalhes
                        </button>
                    </router-link>
                </th>
            </tr>
            <tr>
                <th>Joao</th>
                <th>(00) 00000-0000</th>
                <th>(00) 00000-0000</th>
                <th>Masculino</th>
                <th>Particular</th>
                <th>0000-0000-0000-0000</th>
                <th>
                    <router-link to="/paciente/formeditar">
                        <button class="button is-warning">
                            Detalhes
                        </button>
                    </router-link>
                </th>
            </tr>
            <tr>
                <th>Jose</th>
                <th>(00) 00000-0000</th>
                <th>(00) 00000-0000</th>
                <th>Masculino</th>
                <th>Particular</th>
                <th>0000-0000-0000-0000</th>
                <th>
                    <router-link to="/paciente/formeditar">
                        <button class="button is-warning">
                            Detalhes
                        </button>
                    </router-link>
                </th>
            </tr>
            <tr>
                <th>Thiago</th>
                <th>(00) 00000-0000</th>
                <th>(00) 00000-0000</th>
                <th>Masculino</th>
                <th>Particular</th>
                <th>0000-0000-0000-0000</th>
                <th>
                    <router-link to="/paciente/formeditar">
                        <button class="button is-warning">
                            Detalhes
                        </button>
                    </router-link>
                </th>
            </tr>
            <tr>
                <th>Bruno</th>
                <th>(00) 00000-0000</th>
                <th>(00) 00000-0000</th>
                <th>Masculino</th>
                <th>Particular</th>
                <th>0000-0000-0000-0000</th>
                <th>
                    <router-link to="/paciente/formeditar">
                        <button class="button is-warning">
                            Detalhes
                        </button>
                    </router-link>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "paciente-list.vue"
}
</script>

<style scoped>

.topo{
    display: flex;
    font-size: xx-large;
    width: 100%;
    justify-content: space-around;
    padding-inline: 11 %;
}
.tableCss{
    display: flex;
    justify-content: center;
}
</style>