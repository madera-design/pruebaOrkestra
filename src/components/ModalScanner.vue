
<template>
    <div v-if="show_modal" class="o-modal--container">
        <button 
            @click="show_modal = false"
            class="btn btn-outline-primary btn-regresar"
        >
        <img src="../assets/images/Regresar.png">
        regresar
        </button>
       <p class="t-scanner">Escanea el código</p>
       <div>
        <StreamBarcodeReader
            @decode="(a, b, c) => onDecode(a, b, c)"
            @loaded="() => onLoaded()"
            ></StreamBarcodeReader>
        </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import { StreamBarcodeReader } from "vue-barcode-reader";
  import SearchBarVue from './SearchBar.vue';
    export default {
        name: 'CardList',
        components: {
            StreamBarcodeReader,
            SearchBarVue
        },
        data() {
            return {
                show_modal: false,
                text: "",
            }
        },
        created() {
        },
        mounted() {
        },
        methods:{
            ShowModal(){
                this.show_modal = true;
                // console.log('entra 2', this.show_modal)
            },
            onDecode(a, b, c) {
                // console.log(a, b, c);
                this.text = a;
                if(this.text != ""){
                    this.$emit('GetInfoScanner',  this.text);
                    this.show_modal = false;
                }            
            },
            onLoaded() {
            console.log("load");
            },
        }
  
    }
  </script>
  <style lang="scss">
    .o-modal--container{
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 100%;
        background-color: white;
        top: 7%;       
    }
    .btn-regresar{
        color:#2980B9 !important;
        font-weight: 600 !important;
        font-size: 20px !important;
        line-height: 32px !important;
        border-width: 0;

    }
    .btn-regresar:hover {
        // color: #fff;
        background-color: none !important;
        border-color: none !important;
    }
    .t-scanner{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        /* identical to box height */

        // text-align: center;

        color: #000000; 
    }
    
  </style>
  