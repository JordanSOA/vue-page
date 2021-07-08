<template>
<div>
<p class="footerDate">{{footerDate}}</p>
<p class="myName">{{myName}}</p>
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

</style>