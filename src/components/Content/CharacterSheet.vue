<script setup>

import { NLayoutSider, NLayoutContent, NLayout, NSpace, NCard, NDivider, NButton, NCollapseItem, NCollapse, NIcon, NCheckbox, NCheckboxGroup, NSlider } from 'naive-ui'

const props = defineProps({
    character: {
        type: Object,
        required: true,
        default: function () {
            return null
        }
    }
})
</script>

<template>
    <n-space justify="space-evenly">
        <n-space>
            <n-card :bordered="false" hoverable>
                <template #cover>
                    <img :src="character.picture">
                </template>
            </n-card>
        </n-space>

        <n-space vertical>
            <h3>Informations</h3>
            <p>Niveau : {{ character.level }}</p>
            <p>Points d'expérience : {{ character.xp }}</p>

        </n-space>

        <n-space vertical>
            <h3>Traits</h3>
            <p>Ascendance : {{ character.ascendancy }}</p>
            <p>Classe: {{ character.path }}</p>
            <p>Historique : {{ character.background }}</p>
            <p>Défaut : {{ character.flaw }}</p>
        </n-space>

        <n-space vertical>
            <h3>Stats</h3>
            <p>Force : {{ character.stats.strength }}</p>
            <p>Dextérité : {{ character.stats.dexterity }}</p>
            <p>Constitution : {{ character.stats.constitution }}</p>
            <p>Intelligence : {{ character.stats.intelligence }}</p>
            <p>Sagesse : {{ character.stats.wisdom }}</p>
            <p>Charisme : {{ character.stats.charisma }}</p>
        </n-space>

        <n-space vertical>
            <h3>Inventaire</h3>
            <p>Bourse : {{ character.gold }} pièces d'or</p>
            <p>Arme : {{ character.weapon }}</p>
        </n-space>

    </n-space>
</template>

<style scoped>
img {
    max-width: 300px;
}
</style>