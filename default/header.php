<?php
$themePath = $_SERVER['DOCUMENT_ROOT'];

?>
  <!DOCTYPE html>
  <html lang="ru">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
    <link rel="stylesheet" href="/content/themes/default/materialize/css/materialize.css">
    <link rel="stylesheet" href="/content/themes/default/layerslider/css/layerslider.css">
    <link rel="stylesheet" href="/content/themes/default/css/style.css">
    <link rel="stylesheet" href="/content/themes/default/css/normalize.min.css">
    <title>Создание, разработка сайтов в Каменске-Уральском</title>
  </head>

  <body id="top">

    <div class="preloader valign-wrapper blue-text text-darken-3">

      <!-- <div class="loader"> -->
      <!-- <div class="cssload-thecube"> -->
      <!-- <div class="cssload-cube cssload-c1"></div> -->
      <!-- <div class="cssload-cube cssload-c2"></div> -->
      <!-- <div class="cssload-cube cssload-c4"></div> -->
      <!-- <div class="cssload-cube cssload-c3"></div> -->
      <!-- </div> -->
      <!-- </div> -->

      <!--<div class="loader">
<span>{</span> <div> Loading... </div> <span>}</span>
</div>-->

    </div>

    <header id="s0" class="section parallax-window" data-section=0>
     

      <div class="parallax"><img src="/content/themes/default/img/background1.jpg" alt=""></div>

      <div class="row">
        <div class="carousel container carousel-slider center top-slider z-depth-3" data-indicators="true">

          <div class="carousel-item red white-text" href="#one!">
            <h1>Разработка сйтов на заказ</h1>
            <h4>В Каменске-Уральском</h4>
            <p class="white-text">This is your first panel</p>
          </div>
          <div class="carousel-item amber white-text" href="#two!">
            <h1>Адаптивная вёрстка</h1>
            <p class="white-text">This is your second panel</p>
          </div>
          <div class="carousel-item green white-text" href="#three!">
            <h2>Популярные системы управления контентом</h2>
            <h4>Wordpress, Joomla, Drupal ...</h4>
            <p class="white-text">This is your third panel</p>
          </div>
          <div class="carousel-item blue white-text" href="#four!">
            <h2>Fourth Panel</h2>
            <p class="white-text">This is your fourth panel</p>
          </div>
        </div>
        <a class="btn btn-floating btn-large pulse"><i class="material-icons">cloud</i></a>
        <div class="carousel-fixed-item center">
          <a href="#s1" class="begin btn btn-large waves-effect white grey-text darken-text-2">Начать навигацию</a>

        </div>
      </div>

    </header>
    
    <?php $this->sidebar(); ?>