<div class="popup_slider">

                        <div class="swiper gallery large">
                            <div class="swiper-wrapper">
                                <?php  foreach ($hotel_photos as $hotel_photo){ ?>
                                    <div class="swiper-slide" photo_id="<?= $hotel_photo->photo_id; ?>">
                                        <img src="<?= $hotel_photo->url_max; ?>" loading="lazy" class="popup_slide-gallery">
                                    </div>
                               <?php  } ?>
                            </div>
                            <div class="index"></div>
                        </div>

                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                        <div class="swiper thumbs">
                            <div class="swiper-wrapper">
                                <?php  foreach ($hotel_photos as $hotel_photo){ ?>
                                    <div class="swiper-slide thumb" photo_id="<?= $hotel_photo->photo_id; ?>">
                                        <img src="<?= $hotel_photo->url_max; ?>" loading="lazy" class="popup_slide-gallery-thumb">
                                    </div>
                                <?php  } ?>
                            </div>
                        </div>

                    </div>
