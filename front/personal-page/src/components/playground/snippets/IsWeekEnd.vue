<template>
  <v-dialog
    v-model="dialog"
    persistent
    :fullscreen="$vuetify.breakpoint.mobile"
    max-width="600"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> SEE IS WE </v-btn>
    </template>
    <v-card>
        <v-btn @click="dialog = false" icon>
      <v-icon> mdi-close</v-icon>
    </v-btn>
        <v-card-title> Is WeekEnd</v-card-title>
        <v-card-subtitle>
            <v-row>
                <v-col>
                    Input : a month number, and a day number and years min and max
                </v-col>
                <v-divider vertical></v-divider>
              <v-col>
                  Output : Years and if its a sunday or a saturday
              </v-col>
          </v-row>
      </v-card-subtitle>
      <v-card-text>
        <div>
            <v-divider></v-divider>
            <vue-code-highlight language="javascript">
            <pre v-html="isWETemp"></pre>
            </vue-code-highlight>
            <v-divider></v-divider>
        </div>
        <div>
          <v-container fluid>
            <v-row>
                <h3>{{$t('playground_test_title')}}</h3>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="6">
                <label for="dayIpt"> Enter a day number </label>
                <input
                    v-model.number="dayIpt"
                    outlined
                    placeholder="Between 1 and 31"
                    name="dayIpt"
                    type="number"
                />
                </v-col>
                <v-col cols="12" md="6">
                <label for="monthIpt"> Enter a month number </label>
                <input
                    v-model.number="monthIpt"
                    outlined
                    placeholder="Between 1 and 12"
                    name="monthIpt"
                    type="number"
                />
                </v-col>
                <v-col cols="12" md="6">
                <label for="startYearIpt"> Enter a start year </label>
                <input
                    v-model.number="startYearIpt"
                    outlined
                    placeholder="1994"
                    name="startYearIpt"
                    type="number"
                />
                </v-col>
                <v-col cols="12" md="6">
                <label for="endYearIpt"> Enter a end year </label>
                <input
                    v-model.number="endYearIpt"
                    outlined
                    placeholder=" 2014"
                    name="endYearIpt"
                    type="number"
                />
                </v-col>
            </v-row>
          </v-container>
        </div>
        <div v-if=" this.monthIpt !== null && this.dayIpt !== null && this.startYearIpt !== null && this.endYearIpt !== null">
          <div v-if="Array.isArray(isWEbyYearsResponse)">
            <div v-for="(resp, idx) in isWEbyYearsResponse" :key="idx">
              <p>
                In Year : {{ resp.y }}, the {{ dayIpt }}/{{ monthIpt }} will be
                a <span v-if="resp.d === 'sat'">saturday</span>
                <span v-else>sunday</span>
              </p>
            </div>
          </div>
          <div v-else>
            {{ isWEbyYearsResponse }}
          </div>
          <div>
            <v-btn @click="clearIsWE" >CLEAR</v-btn>
            <v-btn @click="launchFunc"> SUBMIT </v-btn>
          </div>
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
    VueCodeHighlight,
  },
  data: () => ({
    dialog: false,
    isWEbyYearsResponse: null,
    monthIpt: null,
    dayIpt: null,
    startYearIpt: null,
    endYearIpt: null,
    isWETemp: `function isWE(month, day, syear, eyear) {
        const years = [];
        if (this.unvalidYearsIpt(syear, eyear)) return "End year must be after start year";
        if (this.unvalidMonthIpt(month)) return "Months between 1 et 12";
        if (this.unvalidDayIpt(day)) "Days between 1 et 31";

        for (let i = syear; i < eyear; i++) {
            if (new Date(i, month - 1, day).getDay() === 0) {
            years.push({ y: i, d: "sun" });
            } else if (new Date(i, month - 1, day).getDay() === 6) {
            years.push({ y: i, d: "sat" });
            }
        }
        return years;
        }`
    }),
  methods: {
    launchFunc: function (evt) {
      evt.preventDefault();
      this.isWEbyYearsResponse = this.isWE(
        this.monthIpt,
        this.dayIpt,
        this.startYearIpt,
        this.endYearIpt);
    },
    isWE: function (month, day, syear, eyear) {
      const years = [];
      if (this.unvalidYearsIpt(syear, eyear) || eyear - syear > 500) {
        return "Please End year must be after start year Or End Year way too far , not more than 500 years";
      }
      if (this.unvalidMonthIpt(month)) {
        return "Month number between 1 et 12";
      }

      if (this.unvalidDayIpt(day)) {
        return "Days between 1 et 31";
      }
      for (let i = syear; i < eyear; i++) {
        if (new Date(i, month - 1, day).getDay() === 0) {
          years.push({ y: i, d: "sun" });
        } else if (new Date(i, month - 1, day).getDay() === 6) {
          years.push({ y: i, d: "sat" });
        }
      }
      return years;
    },
    clearIsWE: function (){
        this.dayIpt = null;
        this.monthIpt = null;
        this.startYearIpt = null;
        this.endYearIpt = null;
        this.isWEbyYearsResponse = null ;
    },
    unvalidYearsIpt: (syear, eyear) => !(syear < eyear),
    unvalidMonthIpt: (month) => !(1 <= month && month <= 12),
    unvalidDayIpt: (day) => !(1 <= day && day <= 31),
  },
};
</script>