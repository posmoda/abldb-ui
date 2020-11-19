<template>
  <div id="app">
      <Header/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> | 
      <router-link to="/first_ablation">First Ablation</router-link> | 
      <router-link to="/madication">Medication</router-link> | 
      <router-link to="/following_ablation">Following Ablation</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>
<style>
html {
    color: #333;
    font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
}
body {
    max-width: 1000px;
    margin: 0 auto;
    background-color: #f6f6f4;
}
header {
    background-color: #6bb3a8;
}
h1 {
    margin: 0;
}
h2 {
    color: #333;
    font-size: 2rem;
    text-align: center;
    border-bottom: double 5px #6bb3a8;
    background-color: white;
}
legend, label {
    color: white;
    background-color: #6bb3a8;
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
    background-color: white;
    margin: 20px 0;
}
p.form__row {
    margin-top: 20px + 0.5em + 5px);
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
    border: 2px solid #97c5a3;
    padding: 10px;
    background-color: #fefcd1;
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
    align-content: center;
    justify-content: center;
    border: 1px solid #97c5a3;
    border-top: 2px solid #97c5a3;
    border-bottom: 2px solid #97c5a3;
    background-color: #fefcd1;
    color: #333;
    text-align: center;
    padding: 0;
    font-weight: bold;
}
fieldset > label:first-of-type {
    margin-left: 10px;
    border-left: 2px solid #97c5a3;
}
fieldset > label:last-of-type {
    margin-right: 10px;
    border-right: 2px solid #97c5a3;
}
fieldset > label > input {
    position: absolute;
    display: block;
    z-index: -10;
}
fieldset > label > span {
    display: block;
    margin: 0;
    padding: 10px 0;
    width: 100%;
    height: calc(100% - 20px);
    background-color: #fefcd1;
}
fieldset > label > input:checked + span {
    background-color: #fddc8b;
    color: #333;
}
</style>
