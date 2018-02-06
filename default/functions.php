<?php

//=================================//
// Вывод постов на странице

function showPosts($data){
    
    $count = 0;
    foreach ($data as $posts) {
        $count++;
        if ($count <= 3){
            
            ?>
  <div class="content col l4">
    <h4>
            <?php echo $posts['name']; ?>
            </h4>
    <h3>
            <?php echo $posts['category']; ?>
            </h3>
    <p class="">
      <?php echo $posts['content']; ?>
    </p>
    <p>
      <a target="__blank" href="<?php echo $posts['link']; ?>">
        <?php echo $posts['link']; ?>
      </a>
    </p>
  </div>
  <?php
        } else {
            return;
        }
    }
}

//=================================//

function rus_date()
{
    // Перевод
    $translate = array(
    "am" => "дп",
    "pm" => "пп",
    "AM" => "ДП",
    "PM" => "ПП",
    "Monday" => "Понедельник",
    "Mon" => "Пн",
    "Tuesday" => "Вторник",
    "Tue" => "Вт",
    "Wednesday" => "Среда",
    "Wed" => "Ср",
    "Thursday" => "Четверг",
    "Thu" => "Чт",
    "Friday" => "Пятница",
    "Fri" => "Пт",
    "Saturday" => "Суббота",
    "Sat" => "Сб",
    "Sunday" => "Воскресенье",
    "Sun" => "Вс",
    "January" => "Января",
    "Jan" => "Янв",
    "February" => "Февраля",
    "Feb" => "Фев",
    "March" => "Марта",
    "Mar" => "Мар",
    "April" => "Апреля",
    "Apr" => "Апр",
    "May" => "Мая",
    "May" => "Мая",
    "June" => "Июня",
    "Jun" => "Июн",
    "July" => "Июля",
    "Jul" => "Июл",
    "August" => "Августа",
    "Aug" => "Авг",
    "September" => "Сентября",
    "Sep" => "Сен",
    "October" => "Октября",
    "Oct" => "Окт",
    "November" => "Ноября",
    "Nov" => "Ноя",
    "December" => "Декабря",
    "Dec" => "Дек",
    "st" => "ое",
    "nd" => "ое",
    "rd" => "е",
    "th" => "ое"
    );
    // если передали дату, то переводим ее
    if (func_num_args() > 1) {
        $timestamp = func_get_arg(1);
        return strtr(date(func_get_arg(0), $timestamp), $translate);
    }
    else {
        // иначе текущую дату
        return strtr(date(func_get_arg(0)), $translate);
    }
}