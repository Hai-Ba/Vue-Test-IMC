<script setup>
import FeatureItem from '../components/layouts/feature-page/FeatureItem.vue';
import ScreenIcon from '../components/icons/feature-icons/ScreenIcon.vue';
import WiFi from '../components/icons/feature-icons/WiFi.vue';
import ConnectCircle from '../components/icons/feature-icons/ConnectCircle.vue';
import PcapIcon from '../components/icons/feature-icons/PcapIcon.vue';
import SmbIcon from '../components/icons/feature-icons/SmbIcon.vue';

// import ScreenIcon from '../components/icons/feature-icons';
</script>
<template >
    <div class="ft_container app_bg_color">
        <section class="main">
            <div>
                <h1>A-Packets</h1>
                <h2>Online pcap file analyzer</h2>
                <p>Allow read and view pcap file online. 
                    Explore IPv4/IPv6, HTTP, Telnet, FTP, DNS, 
                    SSDP, WPA2 protocols details. You can build 
                    map of network structure and view nodes 
                    communications. Sniff and analyze network 
                    traffic and other pcap data.
                </p>
                <p>
                    Analyse pcap files to view HTTP headers, 
                    request and response data. Extract transferred 
                    files, office documents, pictures. Find passwords 
                    for various protocols.
                </p>
                <hr>
                <button>abc</button>
                <button>abc</button>
            </div>
            <div class="video_wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TVzLAmQvw_U" frameborder="0"></iframe>
            </div>
        </section>
        <div class="content_head">
            <div>FEATURE</div>
            <p>
                Bring intellectual network traffic analysis into Cloud. Open
                 pcap files online with our pcapng viewer.
            </p>
        </div>
        <section>
            <FeatureItem>
                <template #icon>
                    <ScreenIcon/>
                </template>
                <template #text>
                    <h3>View HTTP headers and HTTP communication</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem reverseItem="true">
                <template #icon>
                    <ConnectCircle/>
                </template>
                <template #text>
                    <h3>Find devices on network</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem>
                <template #icon>
                    <WiFi/>
                </template>
                <template #text>
                    <h3>Gather WiFi Information</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem reverseItem="true">
                <template #icon>
                    <PcapIcon/>
                </template>
                <template #text>
                    <h3>Extract files from pcap</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem>
                <template #icon>
                    <SmbIcon/>
                </template>
                <template #text>
                    <h3>SMB Sniffer</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem reverseItem="true">
                <template #icon>
                    <ScreenIcon/>
                </template>
                <template #text>
                    <h3>View HTTP headers and HTTP communication</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem>
                <template #icon>
                    <ScreenIcon/>
                </template>
                <template #text>
                    <h3>View HTTP headers and HTTP communication</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem reverseItem="true">
                <template #icon>
                    <ScreenIcon/>
                </template>
                <template #text>
                    <h3>View HTTP headers and HTTP communication</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem>
                <template #icon>
                    <ScreenIcon/>
                </template>
                <template #text>
                    <h3>View HTTP headers and HTTP communication</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem reverseItem="true">
                <template #icon>
                    <ScreenIcon/>
                </template>
                <template #text>
                    <h3>View HTTP headers and HTTP communication</h3>
                    <p>
                        Deep packet inspection allows you to dive 
                        into HTTP communications. Explore HTTP 
                        requests and responses. Web servers information 
                        and payloads, collect forms data and analyze 
                        transferred content.
                    </p>
                    <p>
                        Wonder to view established HTTP sessions 
                        and users credentials? Find transferred files 
                        including office documents? Use A-Packets network 
                        traffic analysis and integrated pcap file viewer.
                    </p>
                    <p>
                        Analyze pcap file to investigate HTTP data in 
                        details. View network traffic, rebuild 
                        client-server communications step by step.
                    </p>
                </template>
            </FeatureItem>
        </section>
    </div>
</template>
<script>
export default {
    components: { FeatureItem }
}
</script>
<style scoped>
.ft_container {
    display: flex;
    flex-direction: column;
}

.main {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 80%;
}

.main div {
    flex-basis: 0;
    flex-grow: 1;
    font-size: 1.3em;
    margin: 20px;
    text-align: justify;
}

.video_wrapper {
    border-radius: 0.25rem!important;
    display: block;
    margin-top: 0!important;
    min-height: 300px;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-align: center!important;
    width: 100%;
}

.content_head {
    border-bottom: 1px solid #cecece;
    color: #888;
    margin: 0 auto 10px;
    width: 80%;
    text-align: center;
    line-height: 30px;
    margin-bottom: 40px;
}

h3 {
    text-align: center;
    line-height: 2.5rem;
}
</style>