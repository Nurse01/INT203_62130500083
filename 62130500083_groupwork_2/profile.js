const app = {
    data() {
        return {
            firstname: 'Warathaya',
            lastname: 'Rattachai',
            location:'Ladprao',
            imageUpper:'images/upper.jpg',
            imageProfile:'images/profile.jpg',
            followers:'500',
            projects:'20',
            ranks:'5'
        }
    }

}
Vue.createApp(app).mount('#app')