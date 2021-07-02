<template>
  <div id="app">
      <Header />
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> | 
      <router-link to="/first_ablation">First Ablation</router-link> | 
      <router-link to="/medication">Medication</router-link> | 
      <router-link to="/following_ablation">Following Ablation</router-link>
    </div>-->
    <router-view @pushContents="refreshContents"></router-view>
    <PageInformation v-bind:contents="contents"></PageInformation>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import PageInformation from '@/components/PageInformation.vue'
export default {
    components: {
        Header,
        PageInformation
    },
    data() {
        return {
            contents: {},
        }
    },
    methods: {
        returnBoke: function () {
            return "boke";
        },
        extractSection: function( dom ) {
            for ( const element of dom.children ) {
                if ( element.nodeName == 'SECTION' ) {
                    return element
                }
            }
        },
        refreshContents: function( noContents ) {
            if ( noContents === true ){
                this.contents = null;
            } else {
                //console.log( this.$el );
                var result = {};
                var preContentSection = this.extractSection( this.$el );
                var contentsSection = []
                for ( const element of preContentSection.children ){
                    if ( element.nodeName == 'SECTION' ){
                        contentsSection.push( element );        
                    }
                }
                //console.log( contentsSection );
                var headerText = ""
                for ( var item of contentsSection ){
                    for ( var child of item.children ){
                        if ( child.nodeName == "H2" && headerText !== child.innerText ){
                            headerText = child.innerText;
                            result[headerText] = {};
                        }
                        if ( child.nodeName == "P" || child.nodeName == "FIELDSET" ){
                            let rect = child.children[0].getBoundingClientRect();    
                            result[headerText][child.children[0].innerText] = rect.top;    
                            //console.log( child );
                        }        
                    }
                }
                //console.log( result );
                //console.log( this.$el );
                this.contents = result;
            }
        }
    },
    mounted: function() {
        //this.$nextTick(function() {
            this.refreshContents();
        //})
    },
    //router.beforeEach( function ( to, from, next ) ) {
    //    console.log( 'route?' )
    //}
}
</script>
<style>
* {
    box-sizing: border-box;
}
html {
    color: #333;
    font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
}
body {
    margin: 0;
    margin-left: 20%;
    margin-top: 80px;
    padding: 0 10%;
    max-width: 80%;
    background-color: #dddddd;
    position: relative;
}

/* Header */

header {
    background-color: #80abb0;
    padding: 10px;
    position: fixed; 
    top: 0;
    left: 20%;
    right: 0;
    height: 80px;
    z-index: 100;
}
header h1 {
    color: #f3f3f3;
}

/* Main */

h1 {
    margin: 0;
    margin-top: 2.5em;
    padding-left: 0.5em;
    font-size: 2.5rem;
    border-bottom: 6px solid #718ca0;
}
.pageInformation h1 {
}
h2 {
    color: #fcfcfc;
    font-size: 2rem;
    text-align: center;
    border-bottom: double 5px #fcfcfc;
    background-color: #718ca0;
    position: sticky;
    top: 80px;
    z-index: 10;
}
legend, label {
    color: white;
    background-color: #80abb0;
    padding: 5px 10px;
    font-size: 1.2rem;
    line-height: 1em;
    width: 50%;
    text-align: left;
    font-weight: bold;
    margin-left: 0;
}

input[type="number"]::webkit-outer-spin-button,
input[type="number"]::webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
p.form__row, fieldset {
    background-color: #fcfcfc;
    margin: 20px 0;
    border-radius: 10px;
    transition: transform 0.5s ease;
}
p.form__row.hidden,
fieldset.hidden {
    transform: scaleY(0);
    overflow: hidden;
    height: 0;
    padding: 0;
    margin: 0;
    margin: -10px 0;
}
p.form__row {
    margin-top: calc(20px + 0.5em + 5px);
    margin-left: 2px;
    margin-right: 2px;
    padding: 10px;
    padding-top: calc(10px + 0.5em);
    position: relative;
    text-align: center;
}
p.form__row label {
    line-height: 1em;
    position: absolute;
    top: calc(-0.5em - 5px);
    left: 0;
}
p.form__row input {
    font-size: 1.5rem;
    width: 70%;
    text-align: center;
    border: 2px solid #80abb0;
    padding: 10px;
    background-color: #dddddd;
}
fieldset {
    display: flex;
    border: none;
    padding-left: 0;
    padding-right: 0;
}
fieldset > label {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #80abb0;
    border-top: 2px solid #80abb0;
    border-bottom: 2px solid #80abb0;
    background-color: #8a8a58;
    color: #333;
    text-align: center;
    padding: 0;
    font-weight: bold;
}
fieldset > label:first-of-type {
    margin-left: 10px;
    border-left: 2px solid #80abb0;
}
fieldset > label:last-of-type {
    margin-right: 10px;
    border-right: 2px solid #80abb0;
}
fieldset > label > input {
    position: absolute;
    display: block;
    z-index: -10;
}
fieldset > label > span {
    display: flex;
    margin: 0;
    padding: 10px 0;
    width: 100%;
    height: 100%;
    background-color: #dddddd;
    align-items: center;
    justify-content: center;
}
fieldset > label > input:checked + span {
    background-color: #80abb0;
    color: #fcfcfc;
}
fieldset.panel {
    flex-wrap: wrap;
    padding: 10px;
}
fieldset.panel > label {
    width: 20%;
    border-width: 1px;
}
fieldset.panel > label:first-of-type {
    margin-left: 0;
    border-left-width: 1px;
}
fieldset.panel > label:last-of-type {
    margin-right: 0;
    border-right-width: 1px;
}
</style>
