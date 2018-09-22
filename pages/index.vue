<template>
  <v-layout>
    <v-flex text-xs-center>
      <h2>Do Plan</h2>
      <v-form v-on:submit.prevent>
          <!-- <v-flex text-xs-center xs12 sm6 md3> -->
        <div class="item">
            <h3>Worker Salaries</h3>
            <ul>
              <li v-for="(input, index) in inputs" :key="index">
                <v-text-field
                  v-model="input.one"
                  placeholder="0"
                  class="workers"
                  min=0
                  type="number"
                  v-bind:label="'Worker ' + (index + 1)"
                  suffix="BYN"
                  required
                  @change="countWorkerCost"
                  ref="workerRef"
              ></v-text-field>
                <v-btn inline color="error" dark @click="deleteRow(index)">Delete</v-btn>
              </li>
            </ul>
            <v-btn block color="primary" dark @click="addWorker()">Add Worker</v-btn>
            <v-btn v-show="staff" color="warning" dark>Штат: {{ staff }}</v-btn>
            <v-btn v-show="staffTax" color="warning" dark>Налоги: {{ staffTax }}</v-btn>
          <!-- </v-flex> -->
          </div>
          <div class="item">
            <h3>Material Costs</h3>
              <v-text-field
                placeholder="0"
                class="technology"
                min=0
                type="number"
                label="Оргтехника"
                suffix="BYN"
                required
                @change="countAllData"
                ref="workerRef"
            ></v-text-field>
            <v-text-field
              placeholder="0"
              class="materials"
              min=0
              type="number"
              label="Канцтовары, материалы"
              suffix="BYN"
              required
              @change="countAllData"
              ref="workerRef"
            ></v-text-field>
            <v-text-field
              placeholder="0"
              class="ads"
              min=0
              type="number"
              label="Реклама"
              suffix="BYN"
              required
              @change="countAllData"
            ></v-text-field>
            <v-text-field
              placeholder="0"
              class="housing"
              min=0
              type="number"
              label="Аренда"
              suffix="BYN"
              required
              ref="workerRef"
              @change="countAllData"
            ></v-text-field>
            <v-text-field
              placeholder="0"
              class="buying"
              min=0
              type="number"
              label="Кокупка Товаров"
              suffix="BYN"
              required
              @change="countAllData"
            ></v-text-field>
            <v-text-field
              placeholder="0"
              class="percent"
              min=0
              type="number"
              label="Наценка"
              suffix="%"
              required
              @change="countAllData"
            ></v-text-field>
            <v-btn v-show="realDeal" color="warning" dark>Реализация выручка: {{ realDeal }}</v-btn>
            <v-btn v-show="grossIncome" color="warning" dark>Валовый доход: {{ grossIncome }}</v-btn>
            <v-btn v-show="vat" color="warning" dark>НДС к уплате: {{ vat }}</v-btn>
            <!-- <v-btn v-show="incomeTax" color="warning" dark>Налог на прибыль: {{ incomeTax }}</v-btn> -->
          </div>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import calculator from '../assets/js/calculator.js'

export default {
  data () {
    return {
      valid: true,
      inputs: [],
      staff: '',
      staffTax: '',
      realDeal: '',
      grossIncome: '',
      vat: ''
      // incomeTax: ''
    }
  },
  methods: {
    countWorkerCost: function (event) {
      let sum = []
      let workers = document.getElementsByClassName('workers')
      for (let i = 0; i < workers.length; i++) {
        let target = 'Worker ' + (i + 1)
        console.log(target)
        let element = parseInt(workers[i].querySelector('[aria-label=' + '"' + target + '"' + ']').value)
        sum.push(element)
      }
      console.log(sum)

      this.staff = calculator.staff(sum)
      this.staffTax = calculator.staffTax(this.staff)
    },
    countAllData: function (event) {
      let tech = parseInt(document.getElementsByClassName('technology')[0].querySelector('[aria-label="Оргтехника"]').value)
      let materials = parseInt(document.getElementsByClassName('materials')[0].querySelector('[aria-label="Канцтовары, материалы"]').value)
      let ads = parseInt((document.getElementsByClassName('ads')[0]).querySelector('[aria-label="Реклама"]').value)
      let housing = parseInt((document.getElementsByClassName('housing')[0]).querySelector('[aria-label="Аренда"').value)
      let buying = parseInt((document.getElementsByClassName('buying')[0]).querySelector('[aria-label="Кокупка Товаров"').value)
      let percent = parseInt((document.getElementsByClassName('percent')[0]).querySelector('[aria-label="Наценка"').value)

      console.log(tech)
      console.log(ads)
      console.log(housing)
      console.log(buying)
      console.log(percent)

      this.realDeal = calculator.realDeal(buying, percent)
      this.grossIncome = calculator.grossIncome(buying, this.realDeal)
      this.vat = calculator.vat(tech, materials, housing, buying, this.realDeal)
      // this.incomeTax = calculator.incomeTax(this.grossIncome, this.staff, tech, materials, ads, housing)
    },
    addWorker () {
      this.inputs.push({
        one: '',
        two: ''
      })
    },
    deleteRow (index) {
      this.inputs.splice(index, 1)
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway");
 h1, h2 {
   font-family: 'Raleway', sans-serif;
 }
 body {
   text-align: center;
 }

 input {
   margin: 0 auto;
 }
 li {
   list-style-type: none;
 }

 form {
   display: flex;
   flex-direction: row;
 }

 .item {
   flex-grow: 1;
   width: 50%;
   margin: 4%;
 }
</style>
