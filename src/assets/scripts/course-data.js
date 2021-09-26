const courseTemplate = function(course){
    return `
				<div class="course-card">
					<div class="course-card__card-media">
					<div class="card-media__card-img my-0" href="course_detail_view.html">
					<iframe src="https://www.youtube.com/embed/S7YqVez2sUw?autoplay=1" frameborder="0" allow="autoplay" id="iframe" style="width : 100%; height: 100%;"></iframe>
 							</div>
							<div class="card-media__card-content">
									<div class="course-card__details">
											<div class="d-flex justify-content-between align-items-center">
													<div class="card-content__card-details"><span class="card-details__card-view">109k views</span><span class="card-details__card-view">15 days ago</span></div>
													<div class="card-overlay__reviews"><i class="far fa-star"></i>4.5</div>
											</div>
                      <a class="title-link text-2 semi-bold " href="course_detail_view.html">Complete Python Bootcamp: Go from zero to hero
													in Python 3</a>
                          <a class="card-content__card-title" href="#">Web Development | Python</a>
											<p class="card-auth__name-auth">By<a class="my-0 text-2 bold" href="#">John Doe</a></p>
									</div>
									<div class="card-auth__price">
											<div class="course-card__actions"><a class="btn btn--primary btn--outlined mb-0" href="#" title="Enroll">Enroll</a><a class="btn-wishlist accent" href="#"><i class="fas fa-heart"></i></a></div>
											<p class="my-0">$10</p>
									</div>
							</div>
						</div>
					</div>
    `
  }
  $(document).ready(function(){

    $(".course-hover").each(function(i, item) {
      let course = $(item),
          data = course.data("data"),
          player;
      
      course.html($(courseTemplate(data)))
      console.log(data);
  })
  //   console.log(course.find('.youtube-course-player')[0])
  //   function onYouTubeIframeAPIReady() {
  //     new YT.Player(course.find('.youtube-course-player')[0], {
  //       height: '390',
  //       width: '640',
  //       videoId: course.video_id,
  //       playerVars: {
  //         'playsinline': 1
  //       },
  //       events: {
  //         'onReady': onPlayerReady,
  //         'onStateChange': onPlayerStateChange
  //       }
  //     })
      
  //   }
  //   function onPlayerReady(event) {
  //      event.target.playVideo();
  //   }
  //   var done = false;
  //   function onPlayerStateChange(event) {
  //     if (event.data == YT.PlayerState.PLAYING && !done) {
  //       setTimeout(stopVideo, 6000);
  //       done = true;
  //     }
  //   }
  //   function stopVideo() {
  //     player.stopVideo();
  //   }
  })