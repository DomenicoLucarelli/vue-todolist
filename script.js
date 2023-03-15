const { createApp } = Vue

  createApp({
    data() {
      return {
        
        list: [

            {
                text: 'Guadagnare 5000 euro',
                done: true
            },

            {
                text: 'Comprare un corso boolean',
                done: true
            },

            {
                text: 'Frequentare il corso',
                done: true
            },

            {
                text: 'Riguadagnare 5000 euro',
                done: false
            },
        ],

        inputValue:{
            text: '' ,
            done: false,
        },
      }
    },

    methods: {

        //funxione che cancella elemento dall'array 
        removeTodo(listIndex){
            this.list.splice(listIndex , 1)
        },

        // funzione che pusha un oggetto nell'array
        pushInput(){

            this.list.push(this.inputValue)

        },

        
    },
  }).mount('#app')