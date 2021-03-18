var app2 = new Vue({
    el: '#oldal',
    data: {
        reg: {            
                nev: null,
                email: null,
                password: null,
                password2: null
            },
        signin: {
               username: '',
               password: ''
            },
        errormsgreg: '',
        errormsgsign: ''
    },
    methods: {
        regisztracio: function() {
            if(this.reg.nev == undefined || this.reg.email == undefined || this.reg.password == undefined || this.reg.password2 == undefined || this.reg.nev == "" || this.reg.email == "" || this.reg.password == "" || this.reg.password2 == "")
            {
                if(this.reg.nev == undefined || this.reg.nev == "")
                {
                    this.errormsgreg = 'Kérem írja be a nevét!'
                }else if(this.reg.email == undefined || this.reg.email == "")
                {
                    this.errormsgreg = 'Kérem írja be az e-mail címét/felhasználónevét!'
                }else if(this.reg.password == undefined || this.reg.password == "")
                {
                    this.errormsgreg = 'Kérem írja be a jelszavát!'
                }else if(this.reg.password2 == undefined || this.reg.password2 == "")
                {
                    this.errormsgreg = 'Kérem írja be a jelszavát újra!'
                } else {
                    this.errormsgreg = 'Kérem töltse ki az összes mezőt!'
                }
            }else if(this.reg.password != this.reg.password2) 
            {
                this.errormsgreg = 'A jelszavak nem egyeznek meg!'
            } else {
                this.errormsgreg = 'Sikeres Regisztráció!'
                axios({
                    method: 'post',
                    url: '/login',
                    data: {
                        reg: this.reg
                    }
                });
            }
        },
        belepes: function() {

        },
        kitoltes: function() {
            this.reg.nev = 'Ujj Norbert',
            this.reg.email = 'norbert.ujj@gmail.com',
            this.reg.password = 'Jelszo123',
            this.reg.password2 = 'Jelszo123'
        }
    }
})