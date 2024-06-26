<script setup>
import { ref } from 'vue'
const model = ref(null)
</script>

<template>
    <v-card color="#37474F" flat rounded="0" class="pt-16">
        <v-sheet class=" mx-auto mt-18" elevation="0" max-width="1000" color="#37474F">
            <v-slide-group v-model="model" class="pa-4" selected-class="bg-primaryx" show-arrows color="red">
                <v-slide-group-item v-for="n in 10" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                    <v-card :class="['ma-4', selectedClass]" color="grey" height="400" width="300" @click="toggle">
                        <div class="d-flex fill-height align-center justify-center">
                            <v-img src="/public/assets/bread-1.jpg"
                                gradient="to bottom, rgba(150, 150, 150, 0.2), rgba(34, 34, 34, 0.5)" />
                            <!-- <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                        </v-scale-transition> -->
                        </div>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>

            <v-expand-transition>
                <v-sheet v-if="model != null" height="200" color="#37474F">
                    <div class="d-flex fill-height align-center justify-center">
                        <h3 class="text-h6">
                            Selected {{ model }}
                        </h3>
                    </div>
                </v-sheet>
            </v-expand-transition>
        </v-sheet>
    </v-card>
</template>
