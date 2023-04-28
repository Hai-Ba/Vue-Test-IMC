<script setup>
    import CredIcon from '../../icons/pcap-overview/CredIcon.vue';
    import DNSQuery from '../../icons/pcap-overview/DNSQuery.vue';
</script>
<template>
    <div class="chart_container">
        <router-link to="/pcaps/creds" class="item">
            <div>
                <CredIcon></CredIcon>
            </div>
            <h3 style="font-weight: 700;">Found credentials</h3>
            <div class="content">View found plain text passwords or hashes for various authentication protocols.</div>
        </router-link>
        <router-link to="/pcaps/dns" class="item">
            <div>
                <DNSQuery></DNSQuery>
            </div>
            <h3 style="font-weight: 700;">DNS Queries</h3>
            <div class="content">Explore DNS/NBNS/mDNS queries to DNS servers on world map.</div>
        </router-link>
        <router-link to="/pcaps/creds" class="item">
            <div>
                <CredIcon></CredIcon>
            </div>
            <h3 style="font-weight: 700;">Found credentials</h3>
            <div class="content">View found plain text passwords or hashes for various authentication protocols.</div>
        </router-link>
        <router-link to="/pcaps/dns" class="item">
            <div>
                <DNSQuery></DNSQuery>
            </div>
            <h3 style="font-weight: 700;">DNS Queries</h3>
            <div class="content">Explore DNS/NBNS/mDNS queries to DNS servers on world map.</div>
        </router-link>
        <router-link to="/pcaps/creds" class="item">
            <div>
                <CredIcon></CredIcon>
            </div>
            <h3 style="font-weight: 700;">Found credentials</h3>
            <div class="content">View found plain text passwords or hashes for various authentication protocols.</div>
        </router-link>
        <router-link to="/pcaps/dns" class="item">
            <div>
                <DNSQuery></DNSQuery>
            </div>
            <h3 style="font-weight: 700;">DNS Queries</h3>
            <div class="content">Explore DNS/NBNS/mDNS queries to DNS servers on world map.</div>
        </router-link>
        <router-link to="/pcaps/creds" class="item">
            <div>
                <CredIcon></CredIcon>
            </div>
            <h3 style="font-weight: 700;">Found credentials</h3>
            <div class="content">View found plain text passwords or hashes for various authentication protocols.</div>
        </router-link>
        <router-link to="/pcaps/dns" class="item">
            <div>
                <DNSQuery></DNSQuery>
            </div>
            <h3 style="font-weight: 700;">DNS Queries</h3>
            <div class="content">Explore DNS/NBNS/mDNS queries to DNS servers on world map.</div>
        </router-link>
        <router-link to="/pcaps/creds" class="item">
            <div>
                <CredIcon></CredIcon>
            </div>
            <h3 style="font-weight: 700;">Found credentials</h3>
            <div class="content">View found plain text passwords or hashes for various authentication protocols.</div>
        </router-link>
        <router-link to="/pcaps/dns" class="item">
            <div>
                <DNSQuery></DNSQuery>
            </div>
            <h3 style="font-weight: 700;">DNS Queries</h3>
            <div class="content">Explore DNS/NBNS/mDNS queries to DNS servers on world map.</div>
        </router-link>
        <!-- <router-link to="/pcaps/dns" class="item">DNS</router-link> -->
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
    padding: 10px;
    display: block;
    border: 1px solid white;
    width: 200px;
    min-height: 200px;
    font-size: 16px;
}
</style>