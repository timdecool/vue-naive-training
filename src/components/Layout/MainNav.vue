<script setup>
import {NMenu, NSpace, NInput, NSwitch, NIcon} from 'naive-ui'
import {h, ref} from "vue"
import { RouterLink } from "vue-router"
import { MoonRegular, SunRegular } from '@vicons/fa'

const menuOptions = [
    {
    label: () => h(
        RouterLink,
        {
            to: {
                name: "home"
            }
        },
        { default: () => "Accueil"}
        ),
        key: "go-back-home"
    },
    {
    label: () => h(
        RouterLink,
        {
            to: {
                name: "characters"
            }
        },
        { default: () => "Personnages"}
        ),
        key: "characters"
    },
    {
    label: () => h(
        RouterLink,
        {
            to: {
                name: "dungeons"
            }
        },
        { default: () => "Donjons"}
        ),
        key: "dungeons"
    }

]

const activeKey= ref(null)

</script>

<template>
    <nav>
        <n-space justify="space-between" align="center">
            <n-space horizontal align="center">
                <img width="40vh" src="../../../public/favicon.png" alt="">
                <h1>QuickLoot</h1>
            </n-space>
            <n-space align="center">
                <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
                <n-input type="text" placeholder="Rechercher un élément" clearable />
            </n-space>
            <n-switch size="large" :default-value="true">
                <template #checked-icon>
                    <n-icon :component="MoonRegular" />
                </template>
                <template #unchecked-icon>
                    <n-icon :component="SunRegular" />
                </template>

            </n-switch>
        </n-space>
    </nav>

</template>

<style scoped>
nav {
    padding: 15px 30px;
}


</style>