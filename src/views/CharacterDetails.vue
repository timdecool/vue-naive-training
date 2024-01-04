<script setup>
import { NLayoutSider, NLayoutContent, NLayout, NSpace, NCard, NDivider, NButton, NCollapseItem, NCollapse, NIcon, NCheckbox, NCheckboxGroup, NSlider } from 'naive-ui'
import { ArrowLeft, User } from '@vicons/fa'
import CharacterSheet from '@/components/Content/CharacterSheet.vue'

// Route config
import { useRoute } from 'vue-router'
const route = useRoute()

// Get character data
import { useCharacterStore } from '@/stores/character'
const charStore = useCharacterStore()
const character = charStore.getOneCharacter(route.params.id)

</script>

<template>
    <n-layout>
        <n-layout-content content-style="padding: 24px;">
            <n-space justify="space-between" align="center">
                <n-space>
                    <n-space>
                        <router-link to="/characters" >
                            <n-button size="large">
                                <template #icon><n-icon :component="ArrowLeft" /></template>
                                Retour galerie
                            </n-button>
                        </router-link>
                    </n-space>
    
                    <n-space>
                        <h2>Fiche de personnage : {{ character.name }}</h2>
                    </n-space>
                </n-space>    
                
                <n-space>
                    <n-button size="large">
                                <template #icon><n-icon :component="User" /></template>
                                Éditer le personnage
                    </n-button>
                </n-space>

            </n-space>
            <n-divider></n-divider>


            <character-sheet :character="character" />
        </n-layout-content>
    </n-layout>


</template>