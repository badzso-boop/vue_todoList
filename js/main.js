Vue.component('navigacio', {
    template: '<nav class="navbar navbar-expand-xl bg-dark navbar-dark">\
    <a class="navbar-brand" href="#">Családi Napló</a>\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="collapsibleNavbar">\
        <ul class="navbar-nav">\
            <li class="nav-item">\
                <a class="nav-link py-2 px-3" href="">Belépés/Regisztráció</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link py-2 px-3" href="">Főoldal</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link py-2 px-3" href="teendok.html">Teendők</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link py-2 px-3" href="">Géphasználat</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link py-2 px-3" href="">Kilépés</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link py-2 px-3" href="">Felhasználói profil</a>\
            </li>\
        </ul>\
    </div>\
</nav>'
})

Vue.component('lab',{
    template: '<footer class="bg-dark text-center text-white fixed-bottom">\
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">\
        © 2021 \
        <a class="text-white font-weight-bold" href="#">Programozó Palánták</a>\
    </div>\
</footer>'
})

Vue.component('todoItem', {
    template: '\
    <li>{{cim}}\
    <button v-on:click="$emit(\'remove\')">Töröl</button>\
    </li>',
    props: ['cim']
})

new Vue({
    el: '#teendok',
    data: {
        newTodo: '',
        todos: [
            {id: 1, cim: 'Norbi',},
            {id: 2, cim: 'Dávid',},
            {id: 3, cim: 'Ádám',}
        ],
        nextTodoId: 4
    },
    methods: {
        todoAdd: function() {
            this.todos.push({
                id: this.nextTodoId++,
                cim: this.newTodo
            })
            this.newTodo = ''
        }
    }
})

var app2 = new Vue({
    el: '#oldal'
})

































var app = new Vue({
    el: '#proba',
    data: {
        udvozlom: 'Norbert',
        seen: true,
        tuntesd: true,
        szoveg: 'Varazslat',
        versenyzok: ['krozser', 'adam', 'norbi', 15],
        talaldKi: ''
    },
    methods: {
        reverseMessage: function() {
            this.udvozlom = this.udvozlom.split('').reverse().join('')
        },
        varazslat: function() {
            this.tuntesd = !this.tuntesd
            if(this.tuntesd)
            {
                this.szoveg = 'Varazslat'
            }
            else
            {
                this.szoveg = 'megse varazsolok'
            }
        }
    }
})