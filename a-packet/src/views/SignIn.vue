<template >
    <section class="signin"><div class="signin-box"><h5 class="text-muted text-uppercase">Sign In</h5><a href="/auth/google" class="btn google" onclick="gtag(&quot;event&quot;,&quot;login&quot;,{method:&quot;Google&quot;})"><i class="fab fa-google"></i> Sign In with Google </a><a href="/auth/microsoftonline" class="btn ms" onclick="gtag(&quot;event&quot;,&quot;login&quot;,{method:&quot;Microsoft&quot;})"><i class="fab fa-microsoft"></i> Sign In with Microsoft</a></div></section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.signin {
    padding-top: 30vh;
    min-height: 820px;
}
.signin .signin-box {
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0,.1);
    margin: 0 auto;
    min-width: 250px;
    padding-bottom: 20px;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
    width: 20%;
}
.signin .signin-box h5 {
    font-size: 1.2rem;
    text-align: center;
}
.text-uppercase {
    text-transform: uppercase;
}
.text-muted {
    opacity: .7;
}
.signin .signin-box .google {
    background-color: #dd4b39;
}
.signin .signin-box .google, .signin .signin-box .ms, .signin .signin-box .twitter {
    border-color: rgba(0,0,0,.2);
    color: #fff;
}
.signin .signin-box .btn {
    border: 1px solid transparent;
    border-radius: 4px;
    display: inline-block;
    font-size: 1.05rem;
    line-height: 20px;
    margin: 5px 0;
    opacity: .85;
    padding: 12px;
    text-align: left;
    text-decoration: none;
    width: 80%;
}
.signin .signin-box i {
    padding-right: 12px;
}
.fab, body {
    font-weight: 400;
}
.fab {
    font-family: Font Awesome\ 5 Brands;
}
.fab {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: auto;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
}
.fa-google:before {
    content: "\f1a0";
}
.fa-microsoft:before {
    content: "\f3ca";
}
.signin .signin-box .ms {
    background-color: #2672ec;
}
.signin .signin-box .ms{
    border-color: rgba(0,0,0,.2);
    color: #fff;
}
</style>