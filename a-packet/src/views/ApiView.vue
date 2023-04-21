<template >
    <section class="api-section"><h1>How to upload a pcap file with a REST API Key</h1>
        <br>
        <p class="alert alert-info"><i class="fas fa-info-circle"></i> This functionality is available only for customers who subscribed for <a href="/price">Professional</a> or <a href="/price">Business</a> plan.</p>
        <br>
        <p>You can find REST API Key in your profile (starting from <a href="/price">Professional</a> subscription). Click <i>Show</i> to display the existing key or click <i>Generate</i> to (re)generate a new one. All features available to your account, such as limiting the number of files or file size, also apply to uploading files using the key.</p>
        <br>
        <p class="img-holder"><img src="../assets/img/k1.jpg" alt="REST API key in user profile"></p><h2>Upload a pcap file</h2><p>Run this command to put a file to processing queue:</p><pre class="bash">curl -X POST -H "Authorization: Bearer &lt;REST API Key&gt;" -F file=@&lt;path to pcap file&gt; https://apackets.com/api/v1/upload/private/</pre>
        <br>
        <p>You will get a response from the upload service with pcap UUID for further reference:</p><pre class="bash">{"name":"&lt;pcap file name&gt;","uuid":"&lt;pcap UUID&gt;"}</pre><h2>Processing status</h2><p>During the file processing you can check the status using the pcap UUID from the previous step:</p><pre class="bash">curl -H "Authorization: Bearer &lt;REST API Key&gt;" https://apackets.com/api/v1/pcaps/private/status/&lt;pcap UUID&gt;</pre>
        <br>
        <p>When pcap processing is complete, the request returns</p><pre class="bash">{"status": "ok"}</pre><br>otherwise<pre class="bash">{"status": "processing"}</pre><p></p>
        <br>
        <p>After completion you can browse and manage processed files in your profile on https://apackets.com/my</p><h2>Usage info</h2><p>To check your subscription limits and view current usage run:</p><pre class="bash">curl -H "Authorization: Bearer &lt;REST API Key&gt;" https://apackets.com/api/v1/pcaps/private/user/limits</pre>
        <br>
        <p>Output example:</p><pre class="bash">{
    "currentFilesCount": 2,
    "filesLimit": 500,
    "maxFileSize": 104857600
}</pre></section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.api-section {
    margin: 0 auto;
    max-width: 80%;
    text-align: left;
}
h1 {
    font-size: 2.5rem;
    text-align: center;
}
.api-section .alert {
    margin: 0 auto;
    width: 80%;
}
.alert-info {
    text-align: center;
}
.alert-info {
    background-color: #d1ecf1;
    border-color: #bee5eb;
    color: #0c5460;
}
.alert {
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0,.1);
    margin-bottom: 15px;
    padding: 20px;
    text-align: left;
}
.api-section .img-holder {
    text-align: center;
}
.api-section h2 {
    margin-bottom: 10pt;
    margin-top: 30pt;
}
h2 {
    font-size: 2rem;
}
.api-section pre.bash {
    background-color: #282c34;
    border-radius: 5px;
    color: #fff;
    font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;
    font-size: 8pt;
    overflow: auto;
    padding: 10px;
}
</style>