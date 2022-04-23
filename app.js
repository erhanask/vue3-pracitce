const app = Vue.createApp({
    data() {
        return {
            showUser : true,
            showBooks:true,
            name : 'Erhan Aşık',
            age : 20,
            job : 'Developer',
            x: 0 ,
            y: 0,
            books : [
                {title : 'name of the wind 1',author : 'patrick rathfuss 1',img: 'assets/1.jpg'},
                {title : 'name of the wind 2',author : 'patrick rathfuss 2',img: 'assets/2.jpg'},
                {title : 'name of the wind 3',author : 'patrick rathfuss 3',img: 'assets/3.jpg'}
            ]
        }
    },
    methods : {
        changeName(name) {
            this.name = name;
        },
        changeStatus() {
            this.showUser=!this.showUser
        },
        handleEvent(e) {
        console.log('event triggered.');
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleBookShow(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')