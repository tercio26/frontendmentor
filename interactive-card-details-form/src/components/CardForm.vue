<template>
  <Form @submit="submit" v-slot="{ errors }" :validation-schema="schemas">
    <div class="form-group" :class="{ error: errors.card_name }">
      <label class="form-label" for="card-name">Cardholder Name</label>
      <Field v-model="cardStore.name"
             class="form-control"
             ref="card_name"
             name="card_name"
             id="card-name"
             type="text"
             placeholder=" e.g. Jane Appleseed"/>
      <ErrorMessage name="card_name" class="form-error"/>
    </div>

    <div class="form-group" :class="{ error: errors.card_number }">
      <label class="form-label" for="card-number">Card Number</label>
      <Field v-model="cardStore.number"
             maxlength="16"
             class="form-control"
             ref="card_number"
             name="card_number"
             id="card-number"
             type="text"
             placeholder="e.g. 1234 5678 9123 0000"/>
      <ErrorMessage name="card_number" class="form-error"/>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="form-group" :class="{ error: errors.card_exp_month || errors.card_exp_year }">
          <label class="form-label" for="exp-month">Exp. Date (MM/YY)</label>
          <div class="row gap-x-2 gap-y-0">
            <Field v-model="cardStore.expMonth"
                   class="form-control col-6"
                   maxlength="2"
                   ref="card_exp_month"
                   name="card_exp_month"
                   id="exp-date"
                   type="text"
                   placeholder="MM"/>
            <Field v-model="cardStore.expYear"
                   class="form-control col-6"
                   maxlength="2"
                   ref="card_exp_year"
                   name="card_exp_year"
                   id="exp-month"
                   type="text"
                   placeholder="YY"/>
            <ErrorMessage name="card_exp_month" class="form-error"/>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group" :class="{ error: errors.card_cvc }">
          <label class="form-label" for="cvc">CVC</label>
          <Field v-model="cardStore.cvc"
                 class="form-control"
                 maxlength="3"
                 ref="card_cvc"
                 name="card_cvc"
                 id="cvc"
                 type="text"
                 placeholder="e.g. 123"/>
          <ErrorMessage name="card_cvc" class="form-error"/>
        </div>
      </div>
    </div>

    <button class="btn btn-block btn-dark" type="submit">Confirm</button>
  </Form>
</template>

<script>
import { mapStores, mapState } from 'pinia';
import { Form, Field, ErrorMessage, configure } from 'vee-validate';
import { useCardStore } from '@/stores/card.store.js';
import langs from "@/langs.js";
import firebase from "@/firebase.js";
import * as Yup from 'yup';

configure({
  validateOnBlur: true,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
});

export default {
  name: "CardForm",

  components: {Form, Field, ErrorMessage},

  data() {
    return {
      firebaseApp: firebase,
    }
  },

  computed: {
    ...mapStores(useCardStore),
    ...mapState(useCardStore, ['name', 'number', 'expYear', 'expYear', 'cvc']),
    schemas() {
      const today = new Date()
      return Yup.object({
        card_name: Yup.string().required(langs.required),
        card_number: Yup.string()
            .required(langs.required)
            .typeError(langs.wrongFormat.common)
            .max(16, langs.wrongFormat.cardNumber)
            .min(16, langs.wrongFormat.cardNumber),
        card_exp_month: Yup.date()
            .transform((value, originalValue) => {
              try {
                const date = new Date(`20${this.cardStore.expYear}-${originalValue}-01`)
                return (originalValue.length === 0) ? null : date;
              } catch (e) {
                return null
              }
            })
            .test('date-expired', langs.dateExpired, (value) => !!value && value >= today)
            .required(langs.required)
            .typeError(langs.wrongFormat.common),
        card_exp_year: Yup.date()
            .transform((value, originalValue) => {
              try {
                const date = new Date(`20${originalValue}-${this.cardStore.expMonth}-01`)
                return (originalValue.length === 0) ? null : date;
              } catch (e) {
                return null
              }
            })
            .test('date-expired', langs.dateExpired, (value) => !!value && value >= today)
            .required(langs.required)
            .typeError(langs.wrongFormat.common),
        card_cvc: Yup.string()
            .test('is-number', langs.wrongFormat.common, (value) => !!(1 * value))
            .required(langs.required)
            .max(3, langs.wrongFormat.common)
            .min(3, langs.wrongFormat.common)
      })
    },
  },

  created() {
    this.firebaseApp =  firebase.construct()
  },

  methods: {
     submit(values) {
       // if (this.isExist()) {
       //   const provider = this.$refs['card_number'];
       //   console.log(provider)
       //   return false
       // }

       // this.firebaseApp.writeDB(this.firebaseApp.tables.creditCards, {
       //   name: values.card_name,
       //   number: values.card_number,
       //   expMonth: values.card_exp_month,
       //   expYear: values.card_exp_year,
       //   cvc: values.card_cvc
       // }, values.card_number)

       this.cardStore.submitCard();
     },

    async isExist() {
      const response = await this.firebaseApp.fetchOne(this.firebaseApp.tables.creditCards, this.cardStore.number)
      return (response.number && response.number === this.cardStore.number)
    }
  },
}
</script>

<style scoped>

</style>