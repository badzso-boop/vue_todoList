Vue.component('todoItem', {
    template: '\
    <li>{{cim}}, {{id}}\
    <br>\
    <button type="submit" class="btn btn-danger my-3 mx-1 p-1" v-on:click="$emit(\'remove\')">Töröl</button>\
    <button type="submit" class="btn btn-info my-3 mx-1 p-1" v-on:click="$emit(\'szerkeszt\')">Szerkesztés</button>\
    </li>',
    props: ['cim', 'id']
})

var app = new Vue({
    el: '#teendok',
    data: {
        uzenet: 'Üdvözöllek az oldalon',
        addInput: '',
        addAuthor: '',
        szerkesztettTodo: 'Szerkeszt',
        szerkesztettText: '',
        editMode: false,
        nextTodoId: 0,
        seen: false,
        todos: [],
    },
    methods: {
        addTodo: function() {
            this.todos.push({
                id: this.nextTodoId,
                cim: this.addInput,
                kesz: false,
                author: this.addAuthor,
                editMode: this.editMode
            })
            this.nextTodoId++

            this.addInput = ''
        },
        szerkeszt: function(todoId) {
            //this.editMode = !this.editMode
            this.todos[todoId].editMode = !this.todos[todoId].editMode
            if(this.todos[todoId].editMode)
            {
                this.szerkesztettTodo = 'Mentés'
            } else {
                this.szerkesztettTodo = 'Szerkeszt'
            }
            this.szerkesztettText = this.todos[todoId].cim
            this.todos[todoId].cim = this.szerkesztettText

            this.szerkesztettText = ''
        }
    }
})