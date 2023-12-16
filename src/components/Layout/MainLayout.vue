<script setup>
import { NLayout, NLayoutHeader, NLayoutFooter } from 'naive-ui'
</script>

<template>
    <n-layout>
        <!-- HEADER SLOT -->
        <n-layout-header bordered inverted>
            <slot name="header"></slot>
        </n-layout-header>

        <!-- MAIN -->
        <slot name="content"></slot>

        <!-- FOOTER -->
        <n-layout-footer bordered>
            <slot name="footer"></slot>
        </n-layout-footer>
    </n-layout>
</template>
