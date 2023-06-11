<template>
  <div>
    <myjob />
  </div>
</template>

<script>
import feather from 'feather-icons';
import Myjob from '../components/job/myjob.vue';

export default {
    name: "Job",
    data() {
        return {};
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
    methods: {},
    components: { Myjob }
};
</script>

<style scoped></style>
