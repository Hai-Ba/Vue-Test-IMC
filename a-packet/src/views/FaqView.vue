<script setup>
import FaqItem from '../components/layouts/faq-page/FaqItem.vue';
</script>
<template >
    <div class="faq">
        <div class="faq_title">FAQ</div>
        <div class="faq_item">
            <FaqItem item="item-1">
                <template #question>
                    1. What is apackets.com?
                </template>
                <template #answer>
                    <p>A-Packets is an online pcap file analyzer 
                        that allows users to explore and analyze 
                        network traffic, extract files, detect 
                        devices on a network, investigate DNS queries 
                        and ARP packets, and gather SSL/TLS information. 
                        It also has a password finding feature for 
                        various protocols and an API for automating 
                        the analysis process (see 
                        <a title="Choose subscription plan" href="/price">
                            subscription plans
                        </a> 
                        for details).
                    </p>
                </template>
            </FaqItem>
            <FaqItem item="item-2">
                <template #question>
                    2. What file formats does A-Packets support?
                </template>
                <template #answer>
                    <p>A-Packets supports <b>pcap</b> and <b>pcapng</b> files, which are a common format for storing network traffic data captured by packet capture software.</p>
                </template>
            </FaqItem>
            <FaqItem item="item-3">
                <template #question>
                    3. Is this service free?
                </template>
                <template #answer>
                    <p>Yes, it is free for common usage. You can upload, download and analyze <b>pcap</b> files (and <b>pcapng</b>) for free. It does not require any personalization or any charge. Please note that free usage is limited by <b>25Mb</b> per pcap/pcapng file.</p>
                </template>
            </FaqItem>
            <FaqItem item="item-4">
                <template #question>
                    4. What information am I sharing when I upload a pcap file ?
                </template>
                <template #answer>
                    <p>Everything stored within the pcap file, including the file itself. Please be sure to read the <a href="/privacy">privacy policy</a> before submitting your the first file.</p>
                </template>
            </FaqItem>
            <FaqItem item="item-5">
                <template #question>
                    5. Can I view HTTP headers and communications with A-Packets?
                </template>
                <template #answer>
                    <p>Yes, A-Packets allows users to dive into HTTP communications, explore requests and responses, and collect form data.</p>
                </template>
            </FaqItem>
            <FaqItem item="item-6">
                <template #question>
                    6. Can A-Packets detect running network services and open ports?
                </template>
                <template #answer>
                    <p>Yes, A-Packets uses passive fingerprinting to detect running network services and open ports.</p>
                </template>
            </FaqItem>
            <FaqItem item="item-7">
                <template #question>
                    7. Can I find devices on a network with A-Packets?
                </template>
                <template #answer>
                    <p>Yes, A-Packets allows users to build a visualization of network communications, explore a network devices map, and classify network nodes by their type through pcap analysis.</p>
                </template>
            </FaqItem>
            <FaqItem item="item-8">
                <template #question>
                    8. Can I gather Wi-Fi information with A-Packets?
                </template>
                <template #answer>
                    <p>Yes, A-Packets allows users to view wireless network information extracted from pcap files, find access points and their SSIDs, and recognize multicast traffic to find used network protocols and services.</p>
                </template>
            </FaqItem>
            <FaqItem item="item-9">
                <template #question>
                    9. Can A-Packets extract files from pcap files?
                </template>
                <template #answer>
                    <p>Yes, A-Packets allows users to detect and extract pictures, view office documents and other file formats found during the analysis of uploaded pcap files.</p>
                </template>
            </FaqItem>
            <FaqItem item="item-10">
                <template #question>
                    10. Can I find passwords in a pcap file with A-Packets?
                </template>
                <template #answer>
                    <p>Yes, A-Packets scans uploaded pcap files for various protocols to find user credentials, including plain text passwords in authorization headers, cryptographic hashes, and complex challenge-base auth protocols.</p>
                </template>
            </FaqItem>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.faq {
    min-height: 825px;
    margin: 0 auto;
    max-width: 80%;
    text-align: left;
}

.faq_title {
    font-size: 1.8rem;
    font-weight: 800;
    padding-left: 30px;
    /* color: red; */
}

.faq_item p a {
    text-decoration: underline;
}
</style>