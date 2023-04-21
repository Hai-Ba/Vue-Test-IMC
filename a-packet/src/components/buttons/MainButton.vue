<template>
    <button type="button" class="main_btn">{{text}}</button>
</template>
<script>
export default {
    props: {
        text: String
    }
}
</script>
<style scoped>
.main_btn {
    min-width: 200px;
    height: 50px;
    background: linear-gradient(180deg,#d31414 5%,#ce1616);
    background-color: #8d7676;
    border: 1px solid #b30505;
    box-shadow: inset 0 1px 3px 0 #91b8b3;
    text-shadow: 0 -1px 0 #2b665e;
    color: var(--color-text);
    font-size: 1.1rem;
    border-radius: 4px;
}

.main_btn:hover{
    cursor: pointer;
    background: linear-gradient(180deg,#d64040 5%,#d33f3f);
}

.main_btn:active{
    cursor: pointer;
    background: linear-gradient(180deg,#830606 5%,#6e0808);
}
</style>