const Steps = {
    Subscribe: 1,
    Success: 2
}

const app = Vue.createApp({
    data() {
        return {
            currentStep: Steps.Subscribe,
            email: '',
            error: ''
        }
    },
    computed: {
        isStepSubcribe() {
            return this.currentStep === Steps.Subscribe
        },
        isStepSuccess() {
            return this.currentStep === Steps.Success
        },
        hasError() {
            return this.email === '' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
        }
    },
    methods: {
        submitForm() {
            if (this.hasError) {
                this.error = 'Valid email required'
            } else {
                this.currentStep = Steps.Success
            }
        },
        dismissMessage() {
            this.currentStep = Steps.Subscribe
            this.email = this.error = ''
        },
    }

})

app.mount('#app')