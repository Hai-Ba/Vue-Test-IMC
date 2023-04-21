<template>
    <div class="faq_item">
        <input type="checkbox" class="item" :id="item">
        <label :for="item" class="ques">
            <slot name="question"></slot>
        </label>
        <div class="ans">
            <slot name="answer"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: String
    }
}
</script>
<style scoped>
.faq_item {
    margin: 0 20px 30px 20px;
}
.ques {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    line-height: 32px;
    padding: 10px;
    border: 2px solid transparent;
    margin-bottom: 10px;
}

.ques:hover {
    color: red;
    border: 2px solid red;
    border-radius: 4px;
}

.ans {
    display: none;
    font-size: 1.1rem;
    padding-left: 15px;
    text-align: justify;
}

.item{
    display: none;
}

.item:checked ~ .ans {
    display: block;
    animation: 1s slide-right 0.5s forwards;
    transform:translateX(-100%);
}

@keyframes slide-right {
  to {
    transform:translateX(0);
  }
}

.item:checked ~ .ques {
    color: red;
    border: 2px solid red;
    border-radius: 4px;
}
</style>