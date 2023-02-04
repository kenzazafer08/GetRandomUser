const app = Vue.createApp({
    data () {
        return{
            firstName: 'Kenza',
            lastName : 'ZAFER',
            email : 'kanzazafe@gmail.com',
            gender : 'female',
            picture : 'https://randomuser.me/api/portraits/women/12.jpg',
        }
    },
    methods: {
        async getuser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res .json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email =  results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})
app.mount('#app')