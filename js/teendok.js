Vue.component('todoItem', {
    template: '\
    <li>{{cim}}\
    <button v-on:click="$emit(\'remove\')">Töröl</button>\
    <button v-on:click="$emit(\'szerkeszt\')">Szerkesztés</button>\
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
        nextTodoId: 4,
        szia: 'hali ur'
    },
    methods: {
        todoAdd: function() {
            this.todos.push({
                id: this.nextTodoId++,
                cim: this.newTodo
            })
            this.newTodo = ''
        },
        szerkeszt: function() {
            this.szia = 'nemhali ur'
        }
    }
})