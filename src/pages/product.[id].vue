<script setup>
import { useAppStore } from '@/store/app'; // esto tiene que ver con pinia
const appStore = useAppStore()
const route = useRoute('/product/[id]') // esto tiene que ver con vue router
// console.log(appStore.products[0].id);

const productId = computed(() => {
    // esto tenia que ser convertido a Number
    return appStore.products.find(product => product.id === Number(route.params.id))
})

const selectedProductItems = computed(() => {
    return productId.value.items
})

console.log(productId.value);

</script>
<template>
    <v-card class="mx-auto" max-width="344" v-for="item in selectedProductItems">
        <v-img :src="item.img" height="200px" cover />
        <v-card-title>
            {{ item.name }}
        </v-card-title>

        <!-- <v-card-subtitle>
            {{ item.description }}
        </v-card-subtitle> -->

        <v-card-subtitle>
            {{ item.hello }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange-lighten-2" text="Explore"></v-btn>
            <v-spacer></v-spacer>

        </v-card-actions>
    </v-card>
</template>