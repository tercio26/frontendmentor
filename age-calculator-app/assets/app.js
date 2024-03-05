const app = Vue.createApp({
    data() {
        return {
            errors: {
                day: '',
                month: '',
                year: '',
            },
            age: {
                years: '--',
                months: '--',
                days: '--',
            },
            interval: {
                years: null,
                months: null,
                days: null,
            },
            day: '',
            month: '',
            year: '',
        }
    },
    computed: {
        hasError() {
            return Object.values(this.errors).some(value => value !== '');
        }
    },
    watch: {
        hasError(val) {
            if (val) {
                this.age = {
                    years: '--',
                    months: '--',
                    days: '--',
                }
            }
        }
    },

    methods: {
        calculateAge() {
            const today = new Date();
            const birthDate = new Date(this.year, this.month - 1, this.day);

            this.validateDate(today, birthDate);
            if (this.hasError) {
                return;
            }

            const diff = today.getTime() - birthDate.getTime();
            const age = new Date(diff);
            this.age.years = age.getUTCFullYear() - 1970;
            this.age.months = age.getUTCMonth();
            this.age.days = age.getUTCDate() - 1;
        },
        validateDate(today, birthDate) {
            this.errors = {
                day: '',
                month: '',
                year: '',
            };
            for (const key of Object.keys(this.errors)) {
                if (this[key] === '') {
                    this.errors[key] = 'This field is required'
                }
            }

            if (this.day < 1 || this.day > 31) {
                this.errors.day = 'Must be a valid day'
            }

            if (this.month < 1 || this.month > 12) {
                this.errors.month = 'Must be a valid month'
            }

            const diff = today.getTime() - birthDate.getTime();
            if (this.year < 1) {
                this.errors.year = 'Must be a valid year'
            } else if (this.year > new Date().getFullYear() || diff < 0) {
                this.errors.year = 'Must be in the past'
            }

            if (this.day != birthDate.getDate() || this.month != birthDate.getMonth() + 1 || this.year != birthDate.getFullYear()) {
                this.errors.month = 'Must be a valid month'
            }
        }
    }

})

app.mount('#app')