<script setup>
import { useAppStore } from '@/store/app'; // esto tiene que ver con pinia
const appStore = useAppStore()
const route = useRoute('/product/[id]') // esto tiene que ver con vue router
console.log(appStore.products[0].id);

const product = computed(() => {
    // esto tenia que ser convertido a Number
    return appStore.products.find(product => product.id === Number(route.params.id))
})
</script>

<template>
    <h1>hello {{ product.id }}</h1>
</template>