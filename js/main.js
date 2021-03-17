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
                <a class="nav-link py-2 px-3" href="main.html">Főoldal</a>\
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

var app2 = new Vue({
    el: '#oldal',
    data: {
        reg: [
            {
                nev: '',
                email: '',
                password: '',
                password2: ''
            }
        ],
        signin: [
            {
               username: '',
               password: ''
            }
        ],
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
            }else {
                this.errormsg = 'Sikeres Regisztráció!'
                axios({
                    method: 'post',
                    url: '/login',
                    data: {
                        nev: this.reg.nev,
                        email: this.reg.email,
                        password: this.reg.password,
                        password2: this.reg.password2
                    }
                });
            }
        },
    }
})