var app = new Vue({
    el: '#proba',
    data: {
        nev: '',
        username: '',
        password: '',
        password2: ''
    },
    methods: {
        reg: function() {
            axios({
                method: 'post',
                url: '/login',
                data: {
                    nev: this.nev,
                    email: this.email,
                    password: this.password,
                    password2: this.password2
                }
            });
        }
    }
})