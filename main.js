const app = Vue.createApp({
    data(){
        return {
            inputValue: '',
            enterValue: '',
        }
    },
    methods:{        
        showAlert(){
            alert('Hello my first job!!!')
        },

        setName(event){
            this.inputValue = event.target.value;
        },

        getValue(){
            const message = this.$refs.inputField.value;
            this.enterValue = `${message}`;
        },
    },
});

app.mount('#assignment');