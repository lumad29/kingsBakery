<script setup>
const model = defineModel() // el v-model se recibe con defineModel()

const props = defineProps({
    products: {
        type: Array,
        default: () => []
    }
})

// computed properties
const selectedProduct = computed(() => {
    return model.value !== null ? props.products[model.value].name : ''
})

const selectedProductText = computed(() => {
    return props.products[model.value].text
})


</script>

<template>
    <v-card color="#37474F" rounded="0" class="pt-16" flat>
        <v-sheet class=" mx-auto mt-18" elevation="0" max-width="1000" color="#37474F">

            <v-slide-group v-model="model" class="pa-4" show-arrows>
                <v-slide-group-item v-for="product in products" :key="product.id" v-slot="{ toggle }">

                    <v-card :class="['ma-2']" color="grey" height="400" width="300" @click="toggle"
                        :image="product.src">

                        <!-- <div class=" d-flex fill-height align-center justify-center">
                            <v-img src="/assets/bread-1.jpg"
                                gradient="to bottom, rgba(150, 150, 150, 0.2), rgba(34, 34, 34, 0.5)" />
                        </div> -->

                    </v-card>

                </v-slide-group-item>
            </v-slide-group>

            <v-expand-transition>
                <v-sheet v-if="model != null" height="160" color="#37474F">
                    <div class="d-flex fill-height align-center justify-center">
                        <v-card :title="selectedProduct" :text="selectedProductText" color="#37474F" elevation="0"
                            max-width="87%">
                            <div class="mx-4">
                                <v-btn variant="outlined" size="small">see all</v-btn>
                            </div>
                        </v-card>
                    </div>
                </v-sheet>
            </v-expand-transition>
        </v-sheet>
    </v-card>
</template>
