<script setup>
import { useAppStore } from '@/store/app'; // esto tiene que ver con pinia
const appStore = useAppStore()
const route = useRoute('/product/[id]') // esto tiene que ver con vue router
// console.log(appStore.products[0].id);

const selectedProduct = computed(() => {
    // esto tenia que ser convertido a Number
    return appStore.products.find(product => product.id === Number(route.params.id))
})

</script>

<template>
    <div class="background-grey">
        <v-img :src="selectedProduct.pageImg" height="400" cover>
            <div class="fill-height d-flex align-center justify-center text-white">
                <h1>{{ selectedProduct.name }}</h1>
            </div>
        </v-img>
        <v-container class="d-flex">
            <v-row class="mt-5">
                <v-col v-for="product in selectedProduct.items" cols="6">
                    <v-card class="mx-auto bg-grey" width="90%" min-height="500">
                        <v-img height="400" :src="product.img" cover></v-img>
                        <v-card-title>
                            {{ product.name }}
                        </v-card-title>

                        <v-card-subtitle>
                            {{ product.description }}
                        </v-card-subtitle>

                        <v-card-subtitle v-for="ingrediant in product.ingredients">
                            {{ ingrediant }}
                        </v-card-subtitle>


                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>
<style>
.background-grey {
    background-color: rgb(55, 71, 79)
}
</style>