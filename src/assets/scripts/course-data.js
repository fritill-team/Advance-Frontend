const courseTemplate = function(course){
    return `
				<div class="course-card">
					<div class="course-card__card-media">
					<div class="card-media__card-img my-0" href="course_detail_view.html"> </div>
							<div class="card-media__card-content">
									<div class="course-card__details">
											<div class="d-flex justify-content-between align-items-center">
													<div class="card-content__card-details"><span class="card-details__card-view">${course.uum_of_subcribers}</span>
                          <span class="card-details__card-view">${course.duration}</span></div>
													<div class="card-overlay__reviews"><i class="far fa-star"></i>${course.total_rate}</div>
											</div>
                      <a class="title-link text-2 semi-bold " href="course_detail_view.html">${course.title}</a>
                          <a class="card-content__card-title" href="#">${course.category}</a>
											<p class="card-auth__name-auth">By<a class="my-0 text-2 bold" href="#"> ${course.created_at}</a></p>
									</div>
									<div class="card-auth__price">
											<div class="course-card__actions">
                      <a class="btn btn--primary btn--outlined mb-0" href="${action.link}" title="Enroll">${action.text}</a>
                      </div> 
                      <a class="btn-wishlist accent" href="#"><i class="fas fa-heart"></i></a>
									</div>
							</div>
						</div>
					</div>
    `
  }

    $(".course-hover").each(function(i, item) {
      let course = $(item),
          data = course.data("data")
      course.html($(courseTemplate(data))) 
      // console.log(data)
  })
  
