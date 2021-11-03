<template>
    
        <div class="breads">
          <a href="/" class="breads-link">Главная</a>
          
          <div class="breads-sep" v-if="level_1">›</div>
          <a :href="level_1_uri" class="breads-link" v-if="level_1">{{level_1}}</a>

          <div class="breads-sep" v-if="level_2">›</div>
          <a :href="level_2_uri" class="breads-link" v-if="level_2">{{level_2}}</a>

          <div class="breads-sep" v-if="level_3">›</div>
          <a :href="level_3_uri" class="breads-link" v-if="level_3">{{level_3}}</a>
        </div>

</template>

<script>

export default{
    props:{
        level_1: String,
        level_2: String,
        level_3: {
            type: String,
             required: false,
        },

        level_1_uri: {
            type: String,
            default: '#'
        },
        level_2_uri: {
            type: String,
            default: '#'
        },
        level_3_uri: {
            type: String,
            required: false,
             default: "#"
        },


    }
}


</script>
