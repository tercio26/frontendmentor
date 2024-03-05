import { defineStore } from 'pinia'
import constants from "@/constants.js";

export const useCardStore = defineStore('card', {
    state: () => ({
        step: constants.step.FORM,

        name: '',
        number: '',
        expMonth: '',
        expYear: '',
        cvc: ''
    }),

    actions: {
        clearCard() {
            this.name = this.number = this.expMonth = this.expYear = this.cvc = ''
        },

        submitCard() {
            this.step = constants.step.COMPLETE
        },

        completeCard() {
            this.clearCard()
            this.step = constants.step.FORM
        }
    }
})