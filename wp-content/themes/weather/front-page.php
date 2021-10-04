<?php get_header() ?>

<section class="weather">
    <div class="page__container">
        <div class="weather__box" data-module="weather">
            <div class="weather__brf">
                <div class="cities">
                    <select name="cities" id="cities">
                        <option>Select City</option>
                        <?php
                    $citiArgs = array(
                        'post_type'=> 'city',
                        'posts_per_page'    => -1,
                        'order'    => 'ASC'
                    );   
                    $citi_query = new WP_Query( $citiArgs );

                    if($citi_query->have_posts()):
                        while($citi_query->have_posts()):
                            $citi_query->the_post();
                ?>
                        <option value="<?php echo strtoLower(the_title()); ?>"><?php echo the_title(); ?></option>

                        <?php  endwhile; endif; ?>

                    </select>

                </div>
                <div class="curr__date">
                    <span class="date"></span>
                    <span class="time"></span>
                </div>
            </div>

            <div class="weather__summary">
                <div class="weather_one">
                    <div class="imgs">
                        <img class="img" src="" alt="">
                    </div>
                    <div class="deg">
                        <span class="deg__current"><span class="deg_cur"></span>
                            <span>&#8451;</span></span>
                        <span class="deg__lower"><span class="max__deg"></span><span>&#8451;</span></span>
                    </div>

                </div>
                <div class="weather__two">
                    <span class="weather__date"></span>
                    <span class="weather__now"></span>
                    <span class="weather__hum"></span>
                    <span class="wind"></span>
                </div>
            </div>
        </div>
    </div>
</section>


<?php get_footer( ) ?>