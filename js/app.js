const { createApp } = Vue

createApp({
    data(){
        return{
            toDos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
            ],
            // newTask: ''
        }
    },
    methods: {
    
    }
}).mount('#app')