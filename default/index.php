<?php $this->header();
?>
    <?php //$this->component('head');
?>
    <?php //$this->block('comments', ['comments' => 'комментарии']);

?>
      <div id="info_window">
        <ul class="landing-indicators">
          <li class="indicator-item"></li>
          <li class="indicator-item"></li>
          <li class="indicator-item"></li>
          <li class="indicator-item"></li>
          <li class="indicator-item"></li>
        </ul>
      </div>
      <div class="divider"></div>
      <section id='s1' class="section content" data-section=1>
        <div class="container row">
          <h5>Section 1</h5>
          <p>Stuff</p>
          <p>
          </p>
        </div>
      </section>
      <div class="divider"></div>
      <section id='s2' class="section content red lighten-2" data-section=2>
        <div class="container">
          <h5>Section 2</h5>
          <p>Stuff</p>
          <p>
            <?php
            // $this->page->getPageData(1);
            foreach ($this->user->getUsers()[0] as $key => $value) :
                echo "$key = $value <br>";
            endforeach;
?>
                <?php $this->sidebar();
?>
          </p>
        </div>
      </section>
      <div class="divider"></div>
      <section id='s3' class="section content" data-section=3>
        <div class="container">
          <h5>Section 3</h5>
          <p>Stuff</p>
        </div>
      </section>
      <div class="divider"></div>
      <section id='s4' class="section content blue lighten-2" data-section=4>
        <div class="container">
          <h5>Section 4</h5>
          <p>Stuff</p>
        </div>
      </section>
        <?php $this->footer();
?>
