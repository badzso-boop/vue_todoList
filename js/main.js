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
            this.kattint = !this.kattint
            if(this.kattint){
                this.szoveg2 = this.szoveg2.toLowerCase()
            }
            else {
                this.szoveg2 = this.szoveg2.toUpperCase()
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