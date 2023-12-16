<script setup>
import { ref } from 'vue'
import { NLayoutSider, NLayoutContent, NLayout, NSpace, NCard, NDivider, NButton, NCollapseItem, NCollapse, NIcon, NCheckbox, NCheckboxGroup, NSlider } from 'naive-ui'
import { Plus, SearchPlus, PeopleArrows } from '@vicons/fa'
import { useCharacterStore } from '@/stores/character';
const charStore = useCharacterStore()
const selectedClasses = ref(charStore.getAvailableClasses)
const levelRange = ref([charStore.getLevelRange.min, charStore.getLevelRange.max])

</script>

<template>
    <main>
        <n-layout has-sider>
        <n-layout-sider
            content-style="padding: 24px;"
            bordered
            collapse-mode="transform"
            :collapsed-width="20"
            :width="240"
            show-trigger="arrow-circle"
        >
        <n-space vertical>
            <h2>Filtres</h2>
            <n-collapse>
                <n-collapse-item title="Voies" name="paths">
                    <n-checkbox-group v-model:value="selectedClasses">
                        <n-space vertical>
                            <n-checkbox v-for="item of charStore.getAvailableClasses" size="small" :value="item" :label="item" />
                        </n-space>
                    </n-checkbox-group>
                </n-collapse-item>
                <n-collapse-item title="Niveaux" name="levels">
                    <n-space vertical>
                        <p>Du niveau {{ levelRange[0] }} au niveau {{ levelRange[1] }}</p>
                        <n-slider v-model:value="levelRange" range step="1" :max="charStore.getLevelRange.max" :min="charStore.getLevelRange.min" />                    
                    </n-space>
                </n-collapse-item>
                <n-collapse-item title="Groupes" name="parties" disabled>
                    
                </n-collapse-item>
            </n-collapse>
        </n-space>
            
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
            <n-space justify="space-between" align="end">
                <n-space vertical>
                    <h2>Personnages</h2>
                    <p>Tous les personnages que vous avez créés.</p>
                </n-space>
                <n-space>
                    <n-button size="large">
                        <template #icon><n-icon :component="Plus" /></template>
                        Nouveau personnage
                    </n-button>
                    <n-button size="large">
                        <template #icon><n-icon :component="PeopleArrows" /></template>
                        Gérer les groupes
                    </n-button>
                </n-space>
            </n-space>
            <n-divider></n-divider>
            <n-space>
                <n-card 
                    v-for="character in charStore.characters" 
                    :key="character.id" 
                    :title="character.name" 
                    :bordered="false" 
                    hoverable
                >
                    <template #cover>
                        <img :src="character.picture">
                    </template>
                    <template #header-extra>
                        <n-button secondary round><n-icon :component="SearchPlus"/></n-button>
                    </template>
                    {{ character.path }} de niveau {{ character.level }}
                </n-card>


            </n-space>
        </n-layout-content>
        </n-layout>
    </main>
</template>

<style scoped>
img {
    max-width: 220px;
}

</style>