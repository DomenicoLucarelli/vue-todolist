const { createApp } = Vue

  createApp({
    data() {
      return {
        
        list: [

            {
                text: 'Guadagnare 5000 euro',
                done: false
            },

            {
                text: 'Comprare un corso boolean',
                done: false
            },

            {
                text: 'Frequentare il corso',
                done: false
            },

            {
                text: 'Riguadagnare 5000 euro',
                done: false
            },
        ],

        // variabile che mi permette di memorizzare l'input dell'utente
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

            this.list.push(this.inputValue);
            this.inputValue = {
                text:'',
                done: false,
            }

        },
        //  funzione che toggla il valore di done 
        changeDoneValue(index){
            if(this.list[index].done == false){
                this.list[index].done = true
            }else{
                this.list[index].done = false
            }
        }

        
    },
  }).mount('#app')