var app = new Vue({
    el: '#proba',
    data: {
        udvozlom: 'Norbert',
        kattint: false,
        seen: true,
        tuntesd: true,
        szoveg: 'Varazslat',
        versenyzok: ['krozser', 'adam', 'norbi', 15],
        szoveg2: 'szia'
    },
    methods: {
        nagybetu: function() {
            if(this.kattint){
                this.szoveg2 = this.szoveg2.toLowerCase()
                this.kattint = false
            }
            else {
                this.szoveg2 = this.szoveg2.toUpperCase()
                this.kattint = true
            }
        },
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