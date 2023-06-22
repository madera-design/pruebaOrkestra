<template>
    <div class="card">
        <div class="row">
            <div class="col-4">
                <img :src="image(data)"
                >
            </div>
            <div class="col-8">
                <p class="o-text o-text-primary">{{ description }}</p>
                <p class="o-text o-text-secondary bold" >{{ data.product_name }}</p>
                <p class="o-text o-text-secondary" :style="color_price_discount">{{ FormatMoney(price_discount) }}</p>
                <p class="o-text o-text-primary">{{ data.color_name }}</p>
                <p class="o-text o-text-primary">{{ data.brand_name }}</p>
            </div>
        </div>
    
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardItem',
    props: {
      data: {

      }
    },
    computed:{
        price_discount(){
            return this.data.price_with_discount != 0 ?  this.data.price_with_discount : this.data.price;
        },
        color_price_discount(){
            return this.data.price_with_discount > 0 ?  'color: red' : 'color: #35495E';
        },
        description(){
            return this.data.product_description ? this.data.product_description : 'Sin descripción'
        }
    },
    methods:{
        image(dataImg){
            if(dataImg.images.length > 0){
                return dataImg.images[0].path
            }
            else{
                return '../assets/images/logo.png'
            }

        },
        FormatMoney(valor){
            const cantidad = parseFloat(valor).toFixed(2);

            const formato = new Intl.NumberFormat('es-MX', {
                style: 'currency',
                currency: 'MXN'
            });
            
            return formato.format(cantidad);
        }
    }
}
  </script>
  <style lang="scss">
  .o-text{
    font-size: 18px;
    margin-bottom: 0px !important;
    & -primary{
        color:#95A5A6
    }
    & -secondary{
        color:#35495E
    }
  }
  .bold{
    font-weight: bold;
  }
  </style>