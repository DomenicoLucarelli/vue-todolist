const { createApp } = Vue

  createApp({
    data() {
      return {
        
        list: [

            {
                text: 'guadagnare 5000 euro',
                done: true
            },

            {
                text: 'comprare un corso boolean',
                done: true
            },

            {
                text: 'frequentare il corso',
                done: true
            },

            {
                text: 'riguadagnare 5000 euro',
                done: false
            },
        ]
      }
    }
  }).mount('#app')