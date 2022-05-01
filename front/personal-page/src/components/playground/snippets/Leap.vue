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
          SEE LEAP 
        </v-btn>
      </template>
        <v-card>
            <v-btn @click="dialog = false" icon>
                <v-icon> mdi-close</v-icon>
            </v-btn>
        <v-card-title>LeapYear</v-card-title>
        <v-card-subtitle>
            <v-row justify="center">
                <v-col cols="12" md="4" sm="3">
                Input : year like 1994
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="12" md="4" sm="3">
                Output : LEAP OR NO LEAP
                </v-col>
            </v-row>
        </v-card-subtitle>
        <v-card-text>
            <div>
                <v-divider></v-divider>
                <vue-code-highlight language="javascript">
                    <pre v-html="leapYear"></pre>
                </vue-code-highlight>
                <v-divider></v-divider>
            </div>
            <div>
                <v-container fluid>
                <v-row>
                    <h3>{{$t('playground_test_title')}}</h3>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" md="4" sm="3">
                    <label for="leapInput"> Enter a year </label>
                    <input
                        v-model.number="leapInput"
                        outlined
                        name="leapInput"
                        type="number"/>
                    </v-col>
                    <v-col cols="12" md="4" sm="3">
                    <p v-if="leapInput">Result : {{ leapFunctionResult }}</p>
                    </v-col>
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
    data : () => ({
        dialog: false,
        leapInput: null,
        leapYear: "function isLeapYear(year) {\n    var numCalc4 = (0 == (year % 4));\n    var numCalc100 = (0 == (year % 100));\n    var cas2 = (0 == (year % 400));\n    var cas1 = (numCalc4 && (numCalc100 == false));\n    return cas1 || cas2;\n    }"
        }),
    computed: {
        leapFunctionResult() {
            return this.isLeapYear(this.leapInput) ? "LEAP" : "NO LEAP";
            }
    },
    methods: {
        isLeapYear: function (year) {
            if (year === null) {
                console.log("error");
            }
            var numCalc4 = 0 == year % 4;
            var numCalc100 = 0 == year % 100;
            var cas2 = 0 == year % 400;
            var cas1 = numCalc4 && numCalc100 == false;
            return cas1 || cas2;
            },
        },
    }
</script>