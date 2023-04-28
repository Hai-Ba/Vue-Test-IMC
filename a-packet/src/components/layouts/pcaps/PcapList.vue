<script setup></script>
<template>
    <div class="list_container">
        <div class="list">
            <ul>
                <li class="list_item" :class="isActive ? 'li_active' : ''" v-for="item in list" :key="item.index">
                    <router-link to="/pcaps/charts">
                        {{ item.name }}
                    </router-link>
                    <router-link v-if="item.cred>0" class="bubble_item" to="/pcaps/creds" style="background-color: brown;">cred: {{ item.cred }}</router-link>
                    <router-link v-if="item.DNS>0" class="bubble_item" to="/pcaps/dns" style="background-color: blueviolet;">dns: {{ item.DNS }}</router-link>
                </li>
            </ul>
        </div>
        <div class="pagination">
            <a-pagination v-model:current="current" :total="pageTotal" :showSizeChanger="true" :pageSizeOptions="['10', '25', '50']"/>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import pcapList from '../../../datas';
export default defineComponent({
  setup() {
    return {
      current: ref(1),
      pageTotal: ref(pcapList.length),
      list: ref(pcapList),
    };
  },
});
</script>
<style scoped>
.list_container {
    height: 100%;
    width: 100%;
}

.list {
    /* background-color: cadetblue; */
    min-height: 300px;
    width: 100%;
}

.list ul li{
    margin-bottom: 10px;
    height: 40px;
}

.list ul li a {
    display: flex;
    /* height: 40px; */
    width: fit-content;
    align-items: center;
    color: white;
}

.list ul li a:first-child {  
    padding-left: 10px;
    border-radius: 4px;
    border-left: 7px solid red;
    margin-right: 15px;
}
.list_item {
    display: flex;
}

.list ul li:hover {
    background: linear-gradient(180deg,#818181 5%,#dddbdb);
    border-radius: 4px;
}

.list ul li:hover a{
    color: black  !important;
}

.bubble_item {
    display: flex;
    height: 20px;
    min-width: 50px;
    /* background-color: brown; */
    font-weight: 600;
    font-size: 13px;
    border-radius: 8px;
    padding: 5px;
    margin: 2px 5px 3px 5px;
    color: white;
}

.bubble_item:hover {
    position: relative;
    top: 2px;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: right;
    /* background-color: #DDD; */
    height: 50px;
    width: 100%;
}
</style>