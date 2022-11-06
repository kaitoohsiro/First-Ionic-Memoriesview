<template>
    <base-layout
        :page-title="LoadedMemory ? loadedMemory.title : 'Loading...'"
        page-default-back-link="/memories">
        <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
        <memory-over-view
            v-else
            :title="loadedMemory.title"
            :image="loadedMemory.image"
            :description="loadedMemory.description"
            ></memory-over-view>
    </base-layout>
</template>


<script>
import MemoryOverView from '../components/memories/MemoryOverview.vue';

export default {
    components: {
        MemoryOverView
    },
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },
    computed: {
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    },
    // watch: {
    //     $route(currentRoute) {
    //         this.memoryId = currentRoute.params.id;
    //     }
    // }
};
</script>


<style scoped>

</style>