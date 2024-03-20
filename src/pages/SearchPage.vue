<template>
<f7-page
    name="SearchPage"
    @page:init="handlePageInit"
    @page:reinit="handlePageInit"
>
    <f7-block>
        <f7-button outline popover-open=".filter-popover" >
           Filter
            <f7-badge class="margin-left-half">
                {{selectedOption.length}}
            </f7-badge>
        </f7-button>
        <f7-popover
            class="filter-popover"
            close-by-outside-click
            :backdrop="false"
        >
           <f7-list no-chevron>
               <f7-list-item
                   v-for="option in options"
                   :key="option.id"
                   link
                   :title="option.name"
                   @click="handleOptionClick(option.id)"
               />
               <f7-list-button @click="handleClearClick">Clear filter</f7-list-button>
           </f7-list>
        </f7-popover>
    </f7-block>
</f7-page>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { f7 } from "framework7-vue";

const selectedOption = ref([]);

const queryParams = reactive({
    name: null,
    foo: []
})

const options = ref([
    {
        id: 1,
        name: 'first item'
    },
    {
        id: 2,
        name: 'second item'
    },
    {
        id: 3,
        name: 'third item'
    },
    {
        id: 4,
        name: 'fourth item'
    }
])

const handleOptionClick = (id) => {
    queryParams.foo = queryParams.foo + id.toString()
}

const handleClearClick = () => {
    queryParams.foo = []
}

const handlePageInit = (e) => {
    Object.keys(queryParams).forEach(key => {
        queryParams[key] = e.route.query[key]
    })
}

watch([queryParams], () => {
    const newUrl = f7.view.main.router.generateUrl({
        name: 'search',
        query: queryParams
    })

    f7.views.main.router.updateCurrentUrl(newUrl);
})
</script>

<style lang="scss" scoped>
.button {
    max-width: 120px;
}
</style>