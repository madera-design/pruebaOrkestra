<template>
    <div class="scroll-list" ref="scrollList" @scroll="handleScroll">
        <ul v-if="data_products.length > 0">
            <li v-for="item in data_products" :key="item.product_id">
                <CardItem :data="item" />
            </li>
        </ul>
        <NotFoundVue v-else/>
    </div>
  </template>
  
  <script>
    import CardItem from './CardItem.vue';
    import NotFoundVue from './NotFound.vue';
    export default {
        name: 'CardList',
        components:{
            CardItem,
            NotFoundVue
        },
        data() {
            return {
                data_products: [],
                nextBatchIndex: 0, // Índice del próximo lote de elementos a cargar
                batchSize: 10 // Tamaño del lote de elementos a cargar
            }
        },
        created() {
            this.allInfoProduct();
        },
        methods:{
            async allInfoProduct(){
                await this.axios.get('https://dev.orkestra.mx/api/v1/smart-cart/products', {
                headers: {
                    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYTFlNzVkMzYxYWE3YzZkZWUxNDc3YTkwNzlhODE1ZWUwZDAzNDUyNzZjZTM0MWQzNmNhM2NmOWFlOTI3MDM0ODI1OGJmOWEyMGVlOGUwMjgiLCJpYXQiOjE2ODcxODcwNDguMjY0MzE3LCJuYmYiOjE2ODcxODcwNDguMjY0MzIzLCJleHAiOjQ4NDI4NjA2NDguMjQ2ODA2LCJzdWIiOiIxIiwic2NvcGVzIjpbImNvbXBhbnlfdG9rZW4iXX0.FDRh7h7RJMG4RGQ3ojhhLnzGn11LT3FZmZdy3kWal2yJYicNht_MN2wb5YSgyEVt_pfbWz6n8KKAtLjoc8DvVVCY0cREcc0atJFlCnEgblN_TFAs6TA79FKaX2-T2mnijEfHWVl1yoKvZVbdxsforGbu1QC4jJkaFsLi-y6QF5V7Akl0O_QOl0eCgUkB53wkdB7kYgRshSWzrPtcjkUJp80iYUE4wGK3RcGkBDARCkRawSEQ6Wzz7mkuWHjfmW4crfsh27TtsGxgSO89k8L5taDyU55Hb70t2FgJr0lRm4WYi7E_K0Sx_R7EHlA48BuXrI45lKpIwS7_d4D-cEwm64B1KmvQH5cZmm8IkYtWu4-ReR7kDWIe3twnEVxx-lZPvjP1zH766K2LxrIiqmF_wiUOZoetT675NXqW1d8ferA8A6drgPdruHPFAnXl_jJ2LZbn2W4iANiVxMf9FXVrbK1FR8hCt9n4rJhPBBwBHZvOU6xyHjbHiu5dVPLdKsT9n6y3-MwlQw2aDN9YToONmMGLhirg3KnvyUyHkLciQAoLtpYSza2q1w0u54LCH17vtKLYOFSSuyazBNF8edj_9kgOMIzCoFlp4RlQZO-Lp7b4Ks7huMUS3JEwEw4Ixx8YPjjUUqKCHenTSaLF9ZDv2NqPaNSoxBMwe5Bm_bGiPDM',
                }
                })
                .then(response => {
                    const newItems = response.data.products.data.slice(
                        this.nextBatchIndex,
                        this.nextBatchIndex + this.batchSize
                    );
                    this.data_products = this.data_products.concat(newItems);
                    this.nextBatchIndex += this.batchSize;
                    // console.log(response.data.products.data);
                    // this.data_products = response.data.products.data
                })
                .catch(error => {
                    // Manejar el error
                    console.error(error);
                });
            },
            getInfoProduct(product){
                console.log(product)
                this.data_products = product;
            },
            handleScroll() {
                const scrollList = this.$refs.scrollList;
                if (
                    scrollList.scrollTop + scrollList.clientHeight >=
                    scrollList.scrollHeight
                ) {
                    this.allInfoProduct();
                }
            }
        }
  
    }
  </script>
  <style lang="scss">
  .scroll-list {
    // height: 300px;
    overflow-y: auto;
    }
    ul {
        list-style: none;
        padding: 0 1rem !important;
    }

  </style>
  