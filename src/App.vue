<template>
    <nav class="navbar header" role="navigation" aria-label="main navigation" >
        <div class="navbar-brand" >
            <a class="navbar-item">
                <router-link to="/">
                    Consultorio
                </router-link>

            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    <router-link to="/">Home</router-link>
                </a>

                <a class="navbar-item">
                    <router-link to="/about">About</router-link>
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Agenda
                    </a>

                    <div class="navbar-dropdown">
                        <router-link to="/agendamento">
                            <a class="navbar-item">
                                Agendamento
                            </a>
                        </router-link>
                        <router-link to="/historico">
                            <a class="navbar-item">
                                Historico
                            </a>
                        </router-link>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable ">
                    <a class="navbar-link">
                        Pessoa
                    </a>

                    <div class="navbar-dropdown">
                        <router-link to="/paciente">
                            <a class="navbar-item">
                                Paciente
                            </a>
                        </router-link>
                        <router-link to="/medico">
                            <a class="navbar-item">
                                Medico
                            </a>
                        </router-link>
                        <router-link to="/secretaria">
                            <a class="navbar-item">
                                Secretaria
                            </a>
                        </router-link>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Administracao
                    </a>

                    <div class="navbar-dropdown">
                        <router-link to="/especialidade">
                            <a class="navbar-item">
                                Especialidade
                            </a>
                        </router-link>
                        <router-link to="/convenio">
                            <a class="navbar-item">
                                Convenio
                            </a>
                        </router-link>

                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  <router-view/>
</template>

<style lang="scss">
    @import "~bulma/bulma.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
    padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header{
    background: lightgray;
}
@media screen and (min-width: 1025px) {
    .navbar-item.is-hoverable:hover .navbar-dropdown {
        display: block !important;
    }
    .navbar-item.is-hoverable:focus-within .navbar-dropdown {
        display: none;
    }
}
</style>
