<script setup>
import {NMenu, NSpace, NInput, NSwitch, NIcon} from 'naive-ui'
import {h, ref} from "vue"
import { RouterLink } from "vue-router"
import { Moon, Sun, Home, Dungeon, User } from '@vicons/fa'

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

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
        key: "go-back-home",
        icon: renderIcon(Home)
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
        key: "characters",
        icon: renderIcon(User)
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
        key: "dungeons",
        icon: renderIcon(Dungeon)
    }

]

const activeKey= ref(null)

</script>

<template>
    <nav>
        <n-space justify="space-between" align="center">
            <n-space align="center">
                <n-space horizontal align="center">
                    <img width="40vh" src="../../../public/favicon.png" alt="">
                    <h1>QuickLoot</h1>
                </n-space>
                <n-space align="center">
                    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" class="navbar"/>
                    <n-input type="text" placeholder="Rechercher un élément" clearable />
                </n-space>
            </n-space>
            <n-switch size="medium" :default-value="true">
                <template #checked-icon>
                    <n-icon :component="Moon" />
                </template>
                <template #unchecked-icon>
                    <n-icon :component="Sun" />
                </template>

            </n-switch>
        </n-space>
    </nav>

</template>

<style scoped>
nav {
    padding: 15px 30px;
}

.navbar {
    margin-left: 30px;
}


</style>