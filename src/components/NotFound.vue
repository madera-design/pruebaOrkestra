<template>
    <div class="o-notfound">
        <img src="../assets/images/not_found.png" alt="">
        <p class="o-notfound--text">No existen resultados</p>
        <p class="o-notfound--text">Para esta busqueda</p>
    </div>
  </template>
  
  <script>
    export default {
        name: 'NotFound',
        
        data() {
            return {
            }
        },
        created() {
        },
        methods:{
        }
    }
  </script>
  <style lang="scss">
  .o-notfound{
    text-align: center;
  }
  .o-notfound--text{
    color: red;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
  }
   
  </style>
  