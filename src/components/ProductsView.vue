<script setup>

const model = ref(null)

const products = [
    {
        id: 'bread1',
        name: 'Bread',
        src: '/assets/bread-group.jpg',
        text: 'Our bread is baked fresh every day using the best ingredients. We have everything from classic sourdough to unique artisan loaves. Each slice is tasty and wholesome, perfect for sandwiches, meals, or just with butter. Enjoy the homemade goodness in every bite',
    },
    { id: 'bread2', name: 'dos', text: 'this is dos text', src: '/assets/bread-1.jpg' },
    { id: 'bread3', name: 'tres' },
    { id: 'bread4', name: 'cuatro' }
]
</script>

<template>
    <ProductsSlide :products v-model="model" />
</template>
