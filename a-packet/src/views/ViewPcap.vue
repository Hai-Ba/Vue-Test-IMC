<template >
    <div class="pcap">
        <div class="side_bar">
            <input type="checkbox" id="toggle-side-bar" style="display: none;">
            <label title="Minimize/Maximize" class="sidebar_btn pcap_item" for="toggle-side-bar"><font-awesome-icon class="pcap_icon" icon="fa-solid fa-arrow-right-arrow-left" /> <span class="item_text">Minimize</span></label>
            <ul>
                <li title="Pcap list"><router-link class="pcap_item" to="/pcaps/list"><font-awesome-icon class="pcap_icon" icon="fa-solid fa-list" /> <span class="item_text">Pcaps List</span></router-link></li>
                <li title="Overview"><router-link class="pcap_item" to="/pcaps/charts"><font-awesome-icon class="pcap_icon" icon="fa-solid fa-chart-pie" /> <span class="item_text">Overview</span></router-link></li>
                <li title="Credentials"><router-link class="pcap_item" to="/pcaps/creds"><font-awesome-icon class="pcap_icon" icon="fa-solid fa-key" /> <span class="item_text">Credentials</span></router-link></li>
                <li title="DNS"><router-link class="pcap_item" to="/pcaps/dns"><font-awesome-icon class="pcap_icon" icon="fa-solid fa-database" /> <span class="item_text">DNS</span></router-link></li>
            </ul>
        </div>
        <div class="container">
            <div class="bread_cum"></div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.pcap {
    display: flex;
    /* min-height: 825px; */
    width: 100vw;
}

.side_bar {
    height: 825px;
    /* background-color: red; */
    /* width: 200px; */
    /* padding-top: 30px; */
}

.pcap_icon {
    width: 20px;
    margin-right: 5px;
}

.item_text {
    width: 150px;
    padding-left: 10px;
    /* display: none; */
}

.pcap_item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    padding: 10px;
}

.pcap_item:hover {
    background: linear-gradient(180deg,#333 5%,#999898);
    border-radius: 4px;
}

.router-link-active {
    background: linear-gradient(180deg,#333 5%,#999898);

}

.sidebar_btn {
    height: 47px;
    border-bottom: 1px solid #ff0000;
}
.sidebar_btn:hover {
    background: linear-gradient(180deg,#c0bfbf 5%,#9b9999);
    color: black;
    cursor: pointer;
}

#toggle-side-bar:checked ~ .sidebar_btn .item_text, #toggle-side-bar:checked ~ ul li .item_text{
    display: none;
}

.container {
    display: flex;
    flex-direction: column;
    /* width: calc(100% - 200px); */
    padding-right: 20px;
    flex: 1;
}

.bread_cum {
    /* margin: 20px; */
    height: 50px;
    width: 100%;
    background-color: aqua;
    border-radius: 4px;
}

.content {
    height: 100%;
    width: 100%;
    border-radius: 4px;
    background-color: blue;
}
</style>