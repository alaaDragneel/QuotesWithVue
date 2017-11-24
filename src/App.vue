<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
        <div class="row">
          <div class="text-center">
              <div class="alert alert-info">Info: Click On Quote TO Delete It</div>
          </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data () {
        	return {
        		quotes: [
        			'Just Simple Quote To See Something'
        		],
        		maxQuotes: 10,
        	};
        },
        mounted () {
            Event.listen('quoteWasAdded', this.newQuote);
            Event.listen('quoteWasDeleted', this.deleteQuote);
        },
        methods: {
            newQuote (quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please Delete Quotes First!');
                }
                this.quotes.push(quote);
            },
            deleteQuote (index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header,
        }
    }
</script>

<style>
</style>
