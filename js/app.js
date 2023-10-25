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
            newTaskText: '',
            newTask: ''
        }
    },
    methods: {
        removeActivity(index){
            this.toDos.splice(index, 1)
        },
        addActivity(){
            this.newTask = {
                text: this.newTaskText,
                done: false
            }
            this.toDos.push(this.newTask)
            this.newTaskText = ''
        }
    }
}).mount('#app')