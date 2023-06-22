<template>
    <div>
      <header>
        <div class="row mx-0 c-header_navbar">
            <div class="col-2 c-header_navbar--items border_right--white">
                <img src="../assets/images/logo.png" alt="logo">
            </div>
            <div class="col-5 c-header_navbar--items">
                <img src="../assets/images/letras.png" alt="logo_letras">
            </div>
            <div class="col-5 px-0 c-header_navbar--icons">
                <img src="../assets/images/user.png" alt="user">
                <img src="../assets/images/carrito.png" alt="carrito">
                <img src="../assets/images/notificacion.png" alt="notificacion">
            </div>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderApp',
  }
  </script>
  <style lang="scss">
    .c-header_navbar{
        background-image: url('../assets/images/bg_orkestra.png');
    }
    .c-header_navbar--items{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .c-header_navbar--icons{
        display: flex;
        justify-content: space-between;
        align-items: center; 
        img{
            border-left: black 1px solid;
            padding: 5px;
        }
    }
    .border_right--white{
        border-right: white 1px solid;
    }
  </style>
  
  