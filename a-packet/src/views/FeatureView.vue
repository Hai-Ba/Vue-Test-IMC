<script setup>
import FeatureItem from '../components/layouts/feature-page/FeatureItem.vue';
import ScreenIcon from '../components/icons/feature-icons/ScreenIcon.vue';
import WiFi from '../components/icons/feature-icons/WiFi.vue';
import ConnectCircle from '../components/icons/feature-icons/ConnectCircle.vue';
import PcapIcon from '../components/icons/feature-icons/PcapIcon.vue';
import SmbIcon from '../components/icons/feature-icons/SmbIcon.vue';
import DnsIcon from '../components/icons/feature-icons/DnsIcon.vue';
import ArpIcon from '../components/icons/feature-icons/ArpIcon.vue';
import KeyIcon from '../components/icons/feature-icons/KeyIcon.vue';
import ApiIcon from '../components/icons/feature-icons/ApiIcon.vue';
import SslIcon from '../components/icons/feature-icons/SslIcon.vue';
import MainButton from '../components/buttons/MainButton.vue'


// import ScreenIcon from '../components/icons/feature-icons';
</script>
<template >
    <div class="ft_container app_bg_color">
        <section class="main">
            <div>
                <h1>A-Packets</h1>
                <h2>Online pcap file analyzer</h2>
                <br>
                <p>Allow read and view pcap file online. 
                    Explore IPv4/IPv6, HTTP, Telnet, FTP, DNS, 
                    SSDP, WPA2 protocols details. You can build 
                    map of network structure and view nodes 
                    communications. Sniff and analyze network 
                    traffic and other pcap data.
                </p>
                <br>
                <p>
                    Analyse pcap files to view HTTP headers, 
                    request and response data. Extract transferred 
                    files, office documents, pictures. Find passwords 
                    for various protocols.
                </p>
                <hr>
                <div class="btn_holder">
                    <MainButton text="View analyzed pcaps"/>
                    <MainButton text="Upload pcap file"/>
                </div>
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
                    <DnsIcon/>
                </template>
                <template #text>
                    <h3>DNS queries investigation</h3>
                    <p>
                        You can explore protocols DNS, mDNS 
                        (Multicast DNS) and NBNS (NetBIOS Name 
                        Service). Gather information about network
                         structure and activities of running services.
                    </p>
                    <p>
                        Use filters to separate DNS traffic by type. 
                        Analyze queries and responses from target servers.
                         Find Multicast/broadcast addresses (in case of mDNS 
                         and NBNS).
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem>
                <template #icon>
                    <ArpIcon/>
                </template>
                <template #text>
                    <h3>Analyze ARP packets</h3>
                    <p>ARP (Address Resolution Protocol) messages contains 
                        valuable information about devices topology. It uses 
                        MAC addresses on 
                        <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/OSI_model#Layer_2:_Data_Link_Layer">
                            Layer 2 (OSI)
                        </a>. 
                        You can elicit device-IP accordance directly from ARP requests and responses. 
                        Investigate gratuitous ARP messages during devices boot.
                    </p>
                    <p>Basic automatic analyze enables to detect various anomalies 
                        in ARP communications. Detect routers and smart switches 
                        and WiFi access points integrated into LAN. It is possible 
                        to detect malicious activities like ARP spoofing nodes.
                    </p>
                </template>
            </FeatureItem>
            <FeatureItem reverseItem="true">
                <template #icon>
                    <KeyIcon/>
                </template>
                <template #text>
                    <h3>Find passwords in pcap file</h3>
                    <p>A-Packets scans uploaded pcap file for various protocols to find user credentials. You can find plain text passwords in authorization headers or detect cryptographic hashes. The service is also looking for complex challenge-base auth protocols.</p>
                    <p>You can extract passwords/hashes from protocols:</p>
                    <ul><li>HTTP Basic/Digest/Negotiate</li><li>SIP Digest</li><li>NTLMv1/v2 (SMB)</li><li>Kerberos</li><li>LDAP</li><li>SNMP, IMAP, SMTP</li><li>Postgres, MSSQL (TDS 7.0+)</li><li>Telnet and FTP sessions</li></ul>
                    <p>You can restore original passwords from obtained hashes with any hash-cracking tool.</p>
                </template>
            </FeatureItem>
            <FeatureItem>
                <template #icon>
                    <ApiIcon/>
                </template>
                <template #text>
                    <h3>Pcap files processing API</h3>
                    <p>By using the <a target="_blank" href="/auto">API</a>, you can automate the process of uploading pcap files and parse them to extract useful information. This allows you to efficiently analyze large volumes of network data without requiring manual intervention for each individual file.</p>
                    <p>One key advantage of using the API for pcap file analysis is the ability to schedule the process. This means that you can set up a regular schedule for uploading and analyzing pcap files, ensuring that you always have up-to-date information about your network traffic. The APIs can help you streamline your network analysis process and gain insights into your network's performance and security.</p>
                
                </template>
            </FeatureItem>
            <FeatureItem reverseItem="true">
                <template #icon>
                    <SslIcon/>
                </template>
                <template #text>
                    <h3>SSL/TLS Information</h3>
                    <p>Our tool parses pcap files to extract SSL/TLS session information, which can be used to detect attacks, identify self-signed and expired certificates, and perform other security-related analyses.</p>
                    <p>You can view detailed information about each session, including the source and destination IP addresses, the protocol version, the cipher suite used, and any certificate information. Additionally, our tool can identify anomalies in SSL/TLS traffic, such as unexpected cipher suites or expired certificates, helping you to detect potential attacks or configuration issues.</p>
                    <p>Overall, our SSL/TLS diagnostic tool is an essential tool for anyone involved in network security. Whether you are a network administrator, security analyst, or researcher, our tool can provide valuable insights into SSL/TLS traffic that can help you identify and mitigate potential threats.</p>
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

.main > div {
    flex-basis: 0;
    flex-grow: 1;
    font-size: 1.3em;
    margin: 20px;
    text-align: justify;
}

.btn_holder {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
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

/* Phone */
@media screen and (max-width: 600px) {    
    .main {
        flex-direction: column;
    }
}
</style>