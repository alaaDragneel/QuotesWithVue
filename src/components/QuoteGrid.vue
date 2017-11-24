<template lang="html">
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue';
export default {
    props: ['quotes'],
    methods: {
        deleteQuote (index)  {
            Event.fire('quoteWasDeleted', index);
        }
    },
    components: {
        appQuote: Quote
    }
}
</script>

<style lang="css">
</style>
