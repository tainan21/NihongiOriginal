<?php include('includes/header.php');?>
<div class="banner">
     <div class="banner__img--contato">
          <div class="banner__img-wrap">
               <div class="container">
                    <div class="banner__img-title">Entre em contato com a nihong!</div>
                    <div class="mb-5">  </div>
                    <a href=""  data-toggle="modal" data-target="#exampleModalLong" class="banner__img-button" id="login" data-toggle="modal" data-target="#ExemploModalCentralizado"> Entrar </a>
               </div>
          </div>
     </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
     <div class="modal-dialog" role="document">
          <div class="modal-content">
               <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Entre em contato</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">x</button>
               </div>
               <div class="modal-body">  
               <div class="container">
                    <div class="row">
                         <div class="col-lg-12">
                              <div class="form-group row">
                                   <label for="example-email-input" class="col-lg-3 col-12 col-form-label">Nome</label>
                                   <div class="col-lg-9 col-12 ">
                                        <input class="form-control" type="text" placeholder="Digite seu nome completo!" id="example-email-input">
                                   </div>
                              </div>
                              <div class="form-group row">
                                   <label for="example-email-input" class="col-lg-3 col-12 col-form-label">Email</label>
                                   <div class="col-lg-9 col-12 ">
                                        <input class="form-control" type="email" placeholder="Digite seu email!" id="example-email-input">
                                   </div>
                              </div>
                              <div class="form-group row">
                                   <label for="example-tel-input" class="col-lg-3 col-12 col-form-label"> Telefone</label>
                                   <div class="col-lg-9 col-12">
                                        <input class="form-control" type="tel" placeholder="1-(555)-555-5555" id="example-tel-input">
                                   </div>
                              </div>
                         </div>
                         <img src="assets/images/logo.png" class="modal-logo m-auto" alt="">
                    </div>
               </div>
               </div>
               <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">close</button>
                    <button type="button" class="btn btn-primary"> enviar </button>
               </div>
          </div>
     </div>
</div>	
<div class="banner">     
     <div class="swiper-container s1">
          <div class="swiper-wrapper">
               <div class="swiper-slide">
                    <div class="banner__img" style="background-image: url(assets/images/slider3.jpg)">
                         <div class="banner__img-mask">
                              <div class="container">
                                   <div class="banner__text text-center">
                                        <span class="banner__text-sub">NA MEDIDA CERTA <br>PARA SEU NEGÓCIO   </span>
                                        <a href="#" class="banner__button">Texto aq</a>        
                                   </div>
                              </div>
                         </div>
                    </div>    
               </div>
               <div class="swiper-slide">
                    <div class="banner__img" style="background-image: url(assets/images/slider4.jpg)">
                         <div class="banner__img-mask">
                              <div class="container">
                                   <div class="banner__text text-center">
                                        <span class="banner__text-sub">NA MEDIDA CERTA <br>PARA SEU NEGÓCIO   </span>
                                        <a href="#" class="banner__button">Texto aq</a>        
                                   </div>
                              </div>
                         </div>
                    </div>    
               </div>
               <div class="swiper-slide">
                    <div class="banner__img" style="background-image: url(assets/images/slider1.jpg)">
                         <div class="banner__img-mask">
                              <div class="container">
                                   <div class="banner__text text-center">
                                        <span class="banner__text-sub">NA MEDIDA CERTA<br> PARA SEU NEGÓCIO   </span>
                                        <a href="#" class="banner__button">Texto aq</a>        
                                   </div>
                              </div>
                         </div>
                    </div>    
               </div>
               <div class="swiper-slide">
                    <div class="banner__img" style="background-image: url(assets/images/slider2.jpg)">
                         <div class="banner__img-mask">
                              <div class="container">
                                   <div class="banner__text text-center">
                                        <span class="banner__text-sub">NA MEDIDA CERTA <br>PARA SEU NEGÓCIO   </span>
                                        <a href="#" class="banner__button">Texto aq</a>        
                                   </div>
                              </div>
                         </div>
                    </div>    
               </div>
          </div>    
          <div class="swiper-button-next swiper-button-white s1-button-next"></div>
          <div class="swiper-button-prev swiper-button-white s1-button-prev"></div>       
          <div class="swiper-pagination s1-pagination swiper-pagination-white"></div>     
     </div>
</div>

  <script src="../dist/js/swiper.min.js"></script>

<script type="text/javascript">
     var swiper1 = new Swiper('.s1', {
     loop: true,
     autoplay: {
          delay: 5000,
          disableOnInteraction: false
     },
     pagination: {
          el: '.s1-pagination',
          dynamicBullets: true
     },
     navigation: {
          nextEl: '.s1-button-next',
          prevEl: '.s1-button-prev'
     }
});

</script>
  <!-- Initialize Swiper -->
  
<?php include('includes/footer.php');?> 