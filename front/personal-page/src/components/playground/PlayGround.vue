<template>
<v-card
    class="mx-auto"
  >
    <v-card-text>
      <div>{{$t('playground_up_text')}}</div>
      <p class="text-h4 primary--text">
        The PlayGround
      </p>
      <div>
        {{$t('playground_subtitle')}}
      </div>
    </v-card-text>
    <v-card-actions >
      <v-btn
        text
        color="primary"
        @click="reveal = true">
        {{$t('playground_btn_play')}}
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
        <v-card  v-if="reveal"
        class="pg-section-window transition-fast-in-fast-out v-card--reveal">
    <v-container fluid align="center" class="d-flex flex-column">
            <v-row class="pg-section" justify="space-around" align="center">
            <v-col
            class="d-flex justify-center align-center sectionP"
            cols="12"
            sm="6"
            md="3">
            <Fizz-buzz/>
            </v-col>
            <v-col
                class="d-flex justify-center align-center sectionP"
                cols="12"
                sm="6"
                md="3">
                <Leap/>
            </v-col>
            <v-col
                class="d-flex justify-center align-center sectionP"
                cols="12"
                sm="6"
                md="3">
                <is-week-end/>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-btn
            text
            color="primary"
            @click="reveal = false">
            {{$t('close_txt')}}
          </v-btn>
        </v-row>
    </v-container>
 </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script>
import FizzBuzz from './snippets/FizzBuzz.vue'
import Leap from './snippets/Leap.vue'
import IsWeekEnd from './snippets/IsWeekEnd.vue'
export default {
    components: {FizzBuzz, Leap, IsWeekEnd},
    data() {
        return {
            reveal: false,
        }
    },
};
</script>
<style scoped>
.pg-section-window{
    border: 0.75vw solid var(--v-primary-base);
    }
.pg-section {
    background-color: var(--v-surface-base);
}
.sectionP {
    margin: 1vh;
    max-width: 80%;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  display: flex;
align-items: center;
}
@media (min-width: 600px) {
  .pg-section-window{
    height: 100%;
  }
    .pg-section {
        background-color: var(--v-surface-base);
        height: 15vh;
        }
.sectionP {
    height: 7.5vh;
    }
.pg-section-window{
    border: 0.75vw double var(--v-primary-base);
    }
}
</style>