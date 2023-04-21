<template>
    <div :class="[reverseItem ? 'ft_item_reverse' : '','ft_item']">
        <div class="ft_item_img">
            <slot name="icon"></slot>
        </div>
        <div class="ft_item_text">
            <slot name="text"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        reverseItem: Boolean
    }
}
</script>
<style scoped>
.ft_item {
    align-items: center;
    display: flex;
    flex-wrap: no-wrap;
    margin: 10px auto 50px;
    width: 80%;
}

.ft_item_reverse {
    flex-direction: row-reverse;
}

.ft_item div {
    flex-basis: 0;
    flex-grow: 1;
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 10px;
    min-width: 250px;
}

.ft_item_text h3{
    text-align: center;
}

.ft_item_text {
    text-align: justify;
}

.ft_item_img {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 800px) {    
    .ft_item {
        flex-direction: column;
    }

    .ft_item_reverse {
        flex-direction: column;
    }
}
</style>