<template>
    <f7-input
        type="text"
        outline
        v-model:value="search"
        @keyup.enter="handleEnterClick"
        placeholder="Search"
        info="Press Enter to redirect"
    />
</template>

<script setup>
import { ref } from "vue";
import { f7 } from "framework7-vue";

const search = ref(null);

const handleEnterClick = () => {
    const url = f7.views.main.router.generateUrl({
        name: 'search',
        params: null,
        query: { name: search.value }
    });

    const options = {
        history: true,
        browserHistory: true,
        allowPageChange: true
    };

    f7.views.main.router.navigate(url, options);
}
</script>

<style lang="less" scoped>

</style>