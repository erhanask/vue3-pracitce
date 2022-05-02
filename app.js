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
                {title : 'name of the wind 1',author : 'patrick rathfuss 1',img: 'assets/1.jpg',isFav: true},
                {title : 'name of the wind 2',author : 'patrick rathfuss 2',img: 'assets/2.jpg',isFav: false},
                {title : 'name of the wind 3',author : 'patrick rathfuss 3',img: 'assets/3.jpg',isFav: true},
                {title : 'name of the wind 4',author : 'patrick rathfuss 4',img: 'assets/1.jpg',isFav: true},
                {title : 'name of the wind 5',author : 'patrick rathfuss 5',img: 'assets/2.jpg',isFav: true}
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
        },
        changeFavClass(book){
            book.isFav = !book.isFav
        }
    },
    computed : {
        filteredBooks(){return this.books.filter((book)=>book.isFav) }
    }
})

app.mount('#app')