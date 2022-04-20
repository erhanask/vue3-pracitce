const app = Vue.createApp({
    data() {
        return {
            showUser : true,
            name : 'Erhan Aşık',
            age : 20,
            job : 'Developer'
        }
    },
    methods : {
        changeName(name) {
            this.name = name;
        },
        changeStatus() {
            this.showUser=!this.showUser
        }
    }
})

app.mount('#app')