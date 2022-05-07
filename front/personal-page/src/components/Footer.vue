<template>
<div class="footerC">
    <v-footer class="foot" padless>
        <v-col cols="12" class="text-center">
            <p class="footerDate">{{footerDate}} - <span class="myName">{{myName}}</span></p>
        </v-col>
    </v-footer>
</div>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        myName: "Jordan Soares",
    }),
    computed: {
        footerDate: function(){
            const date = new Date();
            return date.getMonth() +1 +"/"+ date.getFullYear();
        }
    }
}
</script>

<style scoped>
.foot{
    border-top: 2px solid var(--v-primary-base);
}
.footerDate{
    margin-bottom: 0px;
}
</style>