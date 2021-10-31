const surveyTemplate = (item) => `
<div class="course-card course-card--grid-view">
	<a href="${item.url}" class="course-card__preview youtube-activator">
		<img src="${item.thumb}" alt="" class="course-card__preview-cover">
		<div class="course-card__preview-overlay"></div>
	</a>
	<div class="course-card__content">
		<a class="title-link text-2 semi-bold" href="${item.url}">${item.title}</a>
		<p class="title-link course-card__description body-2 gray">${item.short_description}</p>
		<div class="course-card__meta">
			<p class="body-2 gray">${item.category}</p>
		</div>		
	</div>
</div>
`;

$(".survey-card-container").each(function (i, item) {
  item = $(item);
  let data = item.data("data");
  item.html($(surveyTemplate(data)));
});
