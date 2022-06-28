<template>
    <h1>Cadastrar Pacientes</h1>
    <br>
    <div>
        <div class="linha">
            <input class="input" type="text" placeholder="Nome">
        </div>
        <div class="linha">
            <input class="input" type="tel" placeholder="Telefone">
            <input class="input" type="tel" placeholder="Celular">
        </div>
        <div class="linha">
            <input class="input" type="text" placeholder="Convenio">
            <input class="input" type="text" placeholder="Cartao Convenio">
        </div>
        <div class="linha">
            <input class="input" type="text" placeholder="Nacionalidade">
        </div>
        <div class="linha">
            <input class="input" type="text" placeholder="CPF">
            <input class="input" type="text" placeholder="RG">
        </div>
        <div class="linha">
            <input class="input" type="text" placeholder="E-Mail">
        </div>
        <div class="linha">
            <input class="input" type="text" placeholder="Login">
            <input class="input" type="text" placeholder="Senha">
        </div>
    </div>
    <div class="buttons is-right">
        <router-link to="../paciente">
            <button class="button is-warning">
                Voltar
            </button>
        </router-link>
        <router-link to="../paciente">
            <button class="button is-success">
                Salvar
            </button>
        </router-link>

    </div>
</template>

<script>
export default {
    name: "paciente-form-cadastro"
}
</script>

<style scoped>
.cadastro{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-items: center;
}
.linha{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10%;
    margin-left: 10%;
    margin-bottom: 1rem;

}
</style>