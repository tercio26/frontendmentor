const Constant = Object.freeze({
    Reaction: 'Reaction', Memory: 'Memory', Verbal: 'Verbal', Visual: 'Visual',
    AverageScore: 80,
    Messages: {
        Result: {
            HigherThanAverage: 'Great',
            LowerThanAverage: 'Bad'
        },
        Description: {
            HigherThanAverage: 'You scored higher than 65% of the people who have taken these tests.',
            LowerThanAverage: 'You scored lower than 65% of the people who have taken these tests.'
        }
    }
})

const app = Vue.createApp({
    data() {
        return {
            data: [
                {
                    category: "Reaction",
                    score: 0,
                    icon: "./assets/images/icon-reaction.svg"
                },
                {
                    category: "Memory",
                    score: 0,
                    icon: "./assets/images/icon-memory.svg"
                },
                {
                    category: "Verbal",
                    score: 0,
                    icon: "./assets/images/icon-verbal.svg"
                },
                {
                    category: "Visual",
                    score: 0,
                    icon: "./assets/images/icon-visual.svg"
                }
            ],
            averageScore: 0,
            result: '',
            resultDescription: ''
        }
    },

    methods: {
        calculateAverageScore() {
            let total = this.data.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.score
            }, 0)
            this.averageScore = Math.floor(total / this.data.length)
        },

        calculateResult() {
            if (this.averageScore >= Constant.AverageScore) {
                this.result = Constant.Messages.Result.HigherThanAverage
                this.resultDescription = Constant.Messages.Description.HigherThanAverage
            } else {
                this.result = Constant.Messages.Result.LowerThanAverage
                this.resultDescription = Constant.Messages.Description.LowerThanAverage
            }
        },

        async fetchData() {
            this.data = await fetch('./data.json').then(res => res.json())

            this.calculateAverageScore()
            this.calculateResult()
        }
    },

})

app.mount('#app')