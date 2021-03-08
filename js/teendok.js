Vue.component('todoItem', {
    template: '\
    <li>{{cim}}, {{id}}\
    <br>\
    <button type="submit" class="btn btn-danger my-3 mx-1 p-1" v-on:click="$emit(\'remove\')">Töröl</button>\
    <button type="submit" class="btn btn-info my-3 mx-1 p-1" v-on:click="$emit(\'szerkeszt\')">Szerkesztés</button>\
    </li>',
    props: ['cim', 'id']
})

var app2 = new Vue({
    el: '#teendok',
    data: {
        todoSzerkeszt: '',
        szoveg: 'szia',
        newTodo: '',
        todos: [
            {id: 1, cim: 'Norbi',},
            {id: 2, cim: 'Dávid',},
            {id: 3, cim: 'Ádám',}
        ],
        nextTodoId: 4,
        seen: true,
        szoveg: '',
        szam: 0
    },
    methods: {
        szerkeszt: function(cim,id) {
            this.seen = !this.seen
            
        },
        todoAdd: function() {
            this.todos.push({
                id: this.nextTodoId++,
                cim: this.newTodo
            })
            this.newTodo = ''
        }
    }
})