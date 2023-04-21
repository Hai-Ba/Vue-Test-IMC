<template >
    <section class="upload-section">
        <h1>Upload pcap or pcapng file</h1>
        <h2 class="subtitle">
            to analyze network structure, 
            HTTP headers and data, FTP, Telnet, WiFi, 
            ARP, SSDP and other
        </h2>
        <br>
        <noscript><div class="alert alert-danger">Please enable JavaScript</div></noscript>
        <div class="upload-holder">
            <div id="drop-area">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="73.161" width="80"><path d="M62.799 19.948C60.018 6.437 46.806-2.262 33.29.518c-11.573 2.38-19.896 12.54-19.95 24.353 0 .562.024 1.139.073 1.748C5.181 27.49-.787 34.87.085 43.1c.806 7.63 7.248 13.417 14.922 13.41h1.749c-.04-.553-.084-1.103-.084-1.666 0-11.956 9.696-21.648 21.655-21.648 11.96 0 21.654 9.692 21.654 21.648 0 .563-.043 1.112-.083 1.665h1.749c10.108.028 18.325-8.142 18.353-18.247.026-9.696-7.519-17.73-17.201-18.314Z" fill="#bbdefb"></path><ellipse ry="18.317" rx="18.322" cy="54.844" cx="38.326" fill="#4caf50"></ellipse><g fill="#fafafa"><path d="M38.326 66.5a1.665 1.665 0 0 1-1.666-1.665V44.853a1.666 1.666 0 0 1 3.332 0v19.982c0 .92-.746 1.665-1.666 1.665z"></path><path d="M44.989 53.179a1.665 1.665 0 0 1-1.18-.487l-5.483-5.484-5.484 5.484a1.666 1.666 0 0 1-2.356-2.354l6.665-6.66a1.666 1.666 0 0 1 2.354 0l6.663 6.66a1.664 1.664 0 0 1-1.18 2.84z"></path></g></svg></div><form><p>Drag &amp; drop <b>.pcap</b> or <b>.pcapng</b> file over here</p><p>OR select</p><p><label title="Upload file from local drive" class="btn-upload" for="fileElem"><i class="fas fa-hdd"></i> From Device</label> <input type="file" id="fileElem" onchange="handleFiles(this.files)" accept=".pcap,.pcapng,.cap" hidden=""></p><div class="provider-toolbar"><button title="Upload file from your Dropbox" class="btn-provider" id="dropboxContainer"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="28.188" viewBox="0 0 0.478 0.407"><path d="M.12 0 0 .077l.12.075.119-.075Zm.238 0-.12.077.12.075.12-.075zM0 .229l.12.077.119-.077-.12-.077zM.358.152.238.23l.12.077.12-.077zM.12.33l.12.077.12-.077-.12-.075z" fill="#0062ff"></path></svg></button> <button title="Upload file from your Google Drive" class="btn-provider" id="gDrive"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.993 13.85" height="24" width="27.707"><path d="M2.666 13.716 5.33 9.098h10.662l-2.665 4.618z" fill="#3777e3"></path><path d="M10.662 9.098h5.331l-5.33-9.236H5.33Z" fill="#ffcf63"></path><path d="m0 9.098 2.666 4.618 5.33-9.236L5.332-.138z" fill="#11a861"></path>
                    </svg>
                    </button> 
                    <button title="Upload file from your One Drive" class="btn-provider" id="oneDrive">
                        <svg xmlns="http://www.w3.org/2000/svg" height="23.999" width="37.462" viewBox="-1.132 4.727 0.51 0.433"><path d="m-.957 4.847.142.085.084-.036a.137.137 0 0 1 .055-.01h.01a.211.211 0 0 0-.382-.064h.002a.168.168 0 0 1 .089.025z" fill="#0364b8"></path><path d="M-.957 4.847a.168.168 0 0 0-.089-.025h-.002a.169.169 0 0 0-.137.265l.125-.052.056-.024.124-.052.065-.027z" fill="#0078d4"></path><path d="M-.667 4.885a.139.139 0 0 0-.01 0 .137.137 0 0 0-.054.011l-.084.036.024.015.08.048.036.02.12.073a.137.137 0 0 0-.112-.203z" fill="#1490df"></path><path d="m-.675 5.016-.035-.021-.08-.048-.025-.015-.065.027-.124.052-.056.024-.125.052a.169.169 0 0 0 .139.073h.37a.137.137 0 0 0 .12-.072z" fill="#28a8ea"></path>
                        </svg>
                    </button>
                </div>
                <p></p>
                <div id="msg-response" class="alert alert-upload" role="alert"></div>
                <progress class="progress-bar" role="progressbar" max="100" value="0"></progress>
                <div id="processing-spinner" role="status">
                    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="160px" height="20px" viewBox="0 0 128 16" xml:space="preserve"><path fill="#949494" fill-opacity="0.42" d="M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z"></path><g><path fill="#999999" fill-opacity="1" d="M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z"></path><animateTransform attributeName="transform" type="translate" values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0" calcMode="discrete" dur="1690ms" repeatCount="indefinite"></animateTransform></g>
                    </svg>
                </div>
                </form></div>
                <div class="warn-holder"><div id="public-info" class="alert alert-info" role="alert"><p><i class="fas fa-info-circle"></i> <b>PUBLIC UPLOAD!</b></p><p>Your files and analysis reports will be visible to anyone after processing. To keep your reports and files privately <a href="/price" class="btn-buy">🔓 Choose Plan</a></p></div></div></div>
                <br>
                <div><h3>How to make pcap file on Windows</h3>
                    <br>
                    <p>You can use <a rel="noopener" target="_blank" href="https://www.wireshark.org/">Wireshark</a> sniffer or other pcap tools to prepare .pcap files. Choose network adapter to capture packets and click "Capture". See details about installation and packets capturing on <a href="https://www.wireshark.org/faq.html">Wireshark FAQ</a>.</p></div>
                    <br>
                    <div><h3>How to make pcap file on Linux/MacOS X</h3>
                        <br>
                        <p>You can use <b>tcpdump</b> (a data-network packet analyzer) to collect network packets. <i>tcpdump</i> allows filtration to adjust collected packets, see options on <a href="https://www.tcpdump.org/manpages/tcpdump.1.html">tcpdump main page</a>. Run as superuser:</p>
                    <pre class="bash"># tcpdump -i eth0 -w mycap.pcap</pre><p>or use Wireshark sniffer.</p><div class="alert alert-warning" style="padding-left: 0; padding-right: 0;">Please note that you should set up appropriate permissions on the pcap file then.<pre class="bash"># chmod 644 mycap.pcap</pre></div></div>
                    <div><h3>How to open pcap file report</h3>
                        <br>
                        <p>After pcap analysis will be finished you can follow a generated link to find a full report. Or just go to <a href="/pcaps">View Pcaps</a> report section for public files. Reports for pcap files uploaded privately will appear in your personal profile. <a href="/price">See plans and pricing</a>.</p><p>The report contains network protocol analysis and found files in HTTP data. Use pcap visualization of network devices - see <a href="/#features-list">all features</a>. There are also WiFi associating information, handshakes and user credentials, etc.</p></div><div>
                    <br>
                            <h3>What is a pcap file</h3>
                    <br>
                    <p>Pcap file contains sniffed network packets. You can use it detect various anomalies in network work. <a rel="noopener" target="_blank" href="https://en.wikipedia.org/wiki/Pcap">Details ...</a></p>
                </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.upload-section {
    margin: 0 auto;
    max-width: 80%;
    text-align: left;
}

.upload-section h1 {
    text-align: center;
    font-size: 2.5rem;
}

.upload-section h2 {
    text-align: center;
    font-size: 2rem;
}

.subtitle {
    font-weight: 500;
    text-align: center!important;
}

.upload-section .upload-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.upload-section #drop-area {
    border: 2px dashed #ccc;
    border-radius: 20px;
    flex-basis: 0;
    flex-grow: 2;
    font-family: sans-serif;
    min-height: 210px;
    min-width: 400px;
    padding: 20px;
    text-align: center;
}

.upload-section .btn-upload {
    background: linear-gradient(180deg,#007dc1 5%,#0061a7);
    background-color: #007dc1;
    border: 1px solid #124d77;
    border-radius: 8px;
    box-shadow: inset 0 1px 0 0 #54a3f7;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Arial;
    font-size: 18px;
    font-weight: 700;
    padding: 16px 32px;
    text-decoration: none;
    text-shadow: 0 1px 0 #154682;
}

.upload-section #fileElem {
    display: none;
}

.upload-section .provider-toolbar {
    margin-top: 10px;
}

.upload-section .btn-provider {
    background: linear-gradient(180deg,#ededed 5%,#dfdfdf);
    background-color: #ededed;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    box-shadow: inset 0 1px 0 0 #fff;
    color: #777;
    cursor: pointer;
    display: inline-block;
    font-family: Arial;
    font-size: 15px;
    font-weight: 700;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
}

.upload-section .progress-bar {
    margin-bottom: 5px;
    visibility: hidden;
    width: 80%;
}
.upload-section #msg-response {
    display: none;
    margin-top: 10px;
}

.upload-section .alert-upload {
    text-align: center!important;
}
.alert {
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0,.1);
    margin-bottom: 15px;
    padding: 20px;
    text-align: left;
}

.upload-section #processing-spinner {
    display: none;
}

.upload-section .upload-holder .warn-holder {
    flex-basis: 0;
    flex-grow: 1;
    margin: 30px;
}
.upload-section .upload-holder .warn-holder #public-info {
    padding-top: 0;
}

.alert-info {
    background-color: #d1ecf1;
    border-color: #bee5eb;
    color: #0c5460;
    text-align: center;
}

.upload-section .btn-buy {
    background: linear-gradient(180deg,#2b9dc7 5%,#047199);
    background-color: #2b9dc7;
    border: 1px solid #057fd0;
    border-radius: 6px;
    box-shadow: 0 1px 0 0 #f0f7fa;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Arial;
    font-size: 15px;
    font-weight: 700;
    margin-top: 10px;
    padding: 8px 26px;
    text-decoration: none;
}

.upload-section .upload-holder .warn-holder #public-info .fa-info-circle {
    color: #007dc1;
    font-size: 1.5rem;
}

.fas {
    font-family: Font Awesome\ 5 Free;
    font-weight: 900;
}
.fas {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: auto;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
}
.upload-section .upload-holder .warn-holder #public-info:before {
    border-bottom: 15px solid transparent;
    border-right: 15px solid #d1ecf1;
    border-top: 15px solid transparent;
    content: "";
    display: block;
    height: 0;
    left: -35px;
    position: relative;
    top: 40px;
    width: 0;
}

.upload-section pre.bash {
    background-color: #cfd3da;
    border-radius: 5px;
    color: #131212;
    font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;
    font-size: medium;
    padding: 10px;
}
</style>