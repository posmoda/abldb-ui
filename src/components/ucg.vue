<template>
    <section class="ucg">
        <h2>UCG</h2>
            <p class="form__row">
                <label for="ucg__">LVEF (Teichholz)</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">LVEF (Simpson)</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">LVDd</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">LVDs</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">LAD</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">LA径 (4C縦)</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">LA径 (4C横)</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">MR（4段階）</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">MR(5段階)</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">E/E'</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">E波</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">A波</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">DcT</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <fieldset>
                <legend>AR（４段階）</legend>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
            </fieldset>
            <fieldset>
                <legend>AR（３段階）</legend>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
            </fieldset>
            <fieldset>
                <legend>TR（４段階）</legend>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
            </fieldset>
            <fieldset>
                <legend>TR（３段階）</legend>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
            </fieldset>
            <p class="form__row">
                <label for="ucg__"></label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <fieldset>
                <legend>MS</legend>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
            </fieldset>
            <fieldset>
                <legend>AS（３段階）</legend>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
                <label><input type="radio" name="ucg__" id="ucg__" value="true" v-model="ucg."><span>あり</span></label>
            </fieldset>
            <p class="form__row">
                <label for="ucg__">LAA Flow</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
            <p class="form__row">
                <label for="ucg__">SEC</label>
                <input type="number" step="0.1" name="ucg__" id="ucg__" v-model="ucg.">
            </p>
    </section>
</template>
        
