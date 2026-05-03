<template>
    <div>
        <v-btn @click="openModal">{{ gifCtaLabel }}</v-btn>
        <v-dialog v-model="modalOpen" max-width="800">
            <v-carousel :show-arrows="!$vuetify.breakpoint.mobile">
                <v-carousel-item v-for="(item, i) in itemsData" :key="i" :src="item.src" cover>
                    <div v-if="item.description" class="carousel-item-description">{{ item.description }}</div>
                </v-carousel-item>
            </v-carousel>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        itemsData: {
            type: Array,
            required: true
        },
        gifCtaLabel: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            modalOpen: false
        }
    },
    methods: {
        openModal() {
            this.modalOpen = true;
        }
    }
}
</script>

<style scoped>
.carousel-item-description {
    position: absolute;
    bottom: 8vh;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 8px;
    font-size: 14px;
    text-align: center;
}
</style>
