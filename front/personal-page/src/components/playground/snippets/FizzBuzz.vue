<template>
    <v-dialog
      v-model="dialog"
      persistent
      :fullscreen="$vuetify.breakpoint.mobile"
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          SEE FIZZBUZZ
        </v-btn>
      </template>
      <v-card>
           <v-btn @click="dialog = false" icon>
            <v-icon> mdi-close</v-icon>
          </v-btn>
      <v-card-title>FizzBuzz</v-card-title>
      <v-card-subtitle>
        Between 0 and {{ fizzBuzzInput || "Select Max Number" }}
      </v-card-subtitle>
      <v-card-text>
        <div>
          <v-divider></v-divider>
          <vue-code-highlight language="javascript">
            <pre v-html="fizzBuzz"></pre>
          </vue-code-highlight>
          <v-divider></v-divider>
        </div>
        <div>
          <v-container fluid>
            <v-row>
              <h3>{{$t('playground_test_title')}}</h3>
            </v-row>
            <v-row>
              <v-col>
                <label for="fizzBuzzInput"> Enter a limit Number </label>
                <input
                  v-model.number="fizzBuzzInput"
                  name="fizzBuzzInput"
                  type="number"
                  :max="500"/>
              </v-col>
              <v-col>
                <v-divider v-if="fizzBuzzInput > 2"></v-divider>
                <p v-if="typeof fizzBuzzResponse === 'string'">
                  {{ fizzBuzzResponse }}
                  </p>
                <p v-else-if="typeof fizzBuzzResponse !== 'string' && fizzBuzzResponse.length > 2 ">
                  Result : {{ fizzBuzzResponse.toString() }}
                </p>
                <v-divider v-if="fizzBuzzInput > 2"></v-divider>
              </v-col>

            </v-row>
            <v-row justify="center">
              <v-btn v-if="fizzBuzzInput > 2" @click="clearFizzBuzzTest" >
                Clear 
                </v-btn>
            </v-row>
          </v-container>
        </div>
      </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
import "vue-code-highlight/themes/prism.css";
export default {
    components: {
        VueCodeHighlight
    },
    name: 'FizzBuzz',
    data : () => ({
        dialog: false,
        fizzBuzzInput: null,
        fizzBuzz: `function fizzBuzz(iNum) { 
            return Array.from(Array(iNum), (val, index) => index + 1)
            .map((num) => {
            return num % 3 == 0 && num % 5 == 0 ?
                "FizzBuzz" :
                num % 3 == 0 ? 
                "Fizz" :
                num % 5 == 0 ? 
                "Buzz" :
                num;
                })}`,
        }),
    computed: {
        fizzBuzzResponse() {
            return this.fizzBuzzMethod(this.fizzBuzzInput);
            }
    },
    methods: {
        fizzBuzzMethod: function (num) {
        if (num > 500)
            return "C'mon , its too many fizzbuzzing going on , relax !";
        return Array.from(Array(num), (val, index) => index + 1).map((num) => {
            return num % 3 == 0 && num % 5 == 0
            ? "FizzBuzz"
            : num % 3 == 0
            ? "Fizz"
            : num % 5 == 0
            ? "Buzz"
            : num;
        });
        },
        clearFizzBuzzTest: function () {
            this.fizzBuzzInput = null;
        }
    },
}
</script>