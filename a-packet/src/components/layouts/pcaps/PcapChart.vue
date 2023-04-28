<template>
    <div class="chart_container">
        <router-link to="/pcaps/creds" class="item">Cred</router-link>
        <router-link to="/pcaps/dns" class="item">DNS</router-link>
    </div>
</template>
<script>
</script>
<style scoped>
.chart_container{
    display: grid;
    grid-template-columns: repeat(auto-fill, 15em);
    width: 100%;
    /* background-color: aqua; */
}

.chart_container .item {
    border: 1px solid white;
    height: 100px;
}
</style>