<template>
    <div  class="px-3">
        <div class="c-search pt-3">
            <div class="relative">
                <input
                    v-model="itemProduct"
                    type="text" 
                    class="form-control c-input__seacrh" 
                    placeholder="Buscar producto"
                    @input="realizarBusqueda()"
    
                >
                <div class="absolute--div">
                    <button v-if="itemProduct.length == 0" class="btn btn-light p-0" @click="showModalScanner()">
                        <img src="../assets/images/scanner.png" alt="">
                    </button>
                    <button v-else class="btn btn-light p-0" @click="clearInput()">
                        <img src="../assets/images/close.png" alt="">
                    </button>
                </div>
            </div>
            <p class="text-filtros">Filtros</p>
        </div>
        <CardListVue ref="CardList"/>
    </div>
    <ModalScannerVue ref="ModalScannerVue" @GetInfoScanner="GetInfoScanner"/>
  </template>
  
  <script>
    import CardListVue from './CardList.vue'
    import ModalScannerVue from './ModalScanner.vue'
  export default {
    name: 'SearchBar',
    components: {
        CardListVue,
        ModalScannerVue
    },
    data() {
        return {
            itemProduct: '',
        }
    },
    methods:{
        realizarBusqueda(){
            console.log(this.itemProduct)
            this.axios.get(`https://dev.orkestra.mx/api/v1/smart-cart/products?with_selects=0&page=1&limit=50&search=${this.itemProduct}&with_products=1`, {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYTFlNzVkMzYxYWE3YzZkZWUxNDc3YTkwNzlhODE1ZWUwZDAzNDUyNzZjZTM0MWQzNmNhM2NmOWFlOTI3MDM0ODI1OGJmOWEyMGVlOGUwMjgiLCJpYXQiOjE2ODcxODcwNDguMjY0MzE3LCJuYmYiOjE2ODcxODcwNDguMjY0MzIzLCJleHAiOjQ4NDI4NjA2NDguMjQ2ODA2LCJzdWIiOiIxIiwic2NvcGVzIjpbImNvbXBhbnlfdG9rZW4iXX0.FDRh7h7RJMG4RGQ3ojhhLnzGn11LT3FZmZdy3kWal2yJYicNht_MN2wb5YSgyEVt_pfbWz6n8KKAtLjoc8DvVVCY0cREcc0atJFlCnEgblN_TFAs6TA79FKaX2-T2mnijEfHWVl1yoKvZVbdxsforGbu1QC4jJkaFsLi-y6QF5V7Akl0O_QOl0eCgUkB53wkdB7kYgRshSWzrPtcjkUJp80iYUE4wGK3RcGkBDARCkRawSEQ6Wzz7mkuWHjfmW4crfsh27TtsGxgSO89k8L5taDyU55Hb70t2FgJr0lRm4WYi7E_K0Sx_R7EHlA48BuXrI45lKpIwS7_d4D-cEwm64B1KmvQH5cZmm8IkYtWu4-ReR7kDWIe3twnEVxx-lZPvjP1zH766K2LxrIiqmF_wiUOZoetT675NXqW1d8ferA8A6drgPdruHPFAnXl_jJ2LZbn2W4iANiVxMf9FXVrbK1FR8hCt9n4rJhPBBwBHZvOU6xyHjbHiu5dVPLdKsT9n6y3-MwlQw2aDN9YToONmMGLhirg3KnvyUyHkLciQAoLtpYSza2q1w0u54LCH17vtKLYOFSSuyazBNF8edj_9kgOMIzCoFlp4RlQZO-Lp7b4Ks7huMUS3JEwEw4Ixx8YPjjUUqKCHenTSaLF9ZDv2NqPaNSoxBMwe5Bm_bGiPDM',
            }
            })
            .then(response => {
                console.log(response.data.products);
                let result = response.data.products.data
                this.$refs.CardList.getInfoProduct(result)

            })
            .catch(error => {
                console.error(error);
            });
        },
        clearInput(){
            this.itemProduct = '';
            this.$refs.CardList.allInfoProduct()
        },
        showModalScanner(){
            console.log('entra 1')
            this.$refs.ModalScannerVue.ShowModal()
        },
        GetInfoScanner(data){
            console.log('GetInfoScanner',data)
            this.itemProduct = data
            this.realizarBusqueda();
        }

    }
  }
  </script>
  <style lang="scss">
    .c-search{
        z-index: 10;
        top: 0;
        position: sticky;
        background-color: #E3E9EE;
    }
    .relative{
        position: relative;
    }
    .absolute--div{
        top: 7px;
        position: absolute;
        right: 6px; 
    }
  .text-filtros{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
    text-decoration-line: underline;
    color: #2780BA;
    text-align: right;
  }
  .c-input__seacrh{
    background-image: url('../assets/images/search.png');
    background-repeat: no-repeat;
    background-size: 25px 25px;
    background-position: 2% 50%;
    padding: 10px 37px !important;

  }
    
  </style>
  
  