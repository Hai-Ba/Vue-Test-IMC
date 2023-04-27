<script setup></script>
<template>
    <div class="list_container">
        <div class="list"></div>
        <div class="pagination">1 2 3 4 5 6 7 8</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.list_container {
    height: 100%;
    width: 100%;
}

.list {
    background-color: cadetblue;
    min-height: 300px;
    width: 100%;
}

.pagination {
    background-color: brown;
    height: 50px;
    width: 100%;
    text-align: right;
}
</style>