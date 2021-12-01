const surveyTemplate = (item) => `
<div class="course-card course-card--grid-view">
	<a href="${item.url}" class="course-card__preview youtube-activator">
		<img src="${item.thumb}" alt="" class="course-card__preview-cover">
		<div class="course-card__preview-overlay"></div>
	</a>
  ${item.sponsor ? `
    <div class="course-card__badge">
      <img src="${item.sponsor.cover}" >
    </div>
  `: ''}
  <div class="course-card__badge course-card__badge--category">
    ${item.type}  
  </div>
	<div class="course-card__content">
		<a class="title-link text-2 semi-bold" href="${item.url}" lang="${item.language}">${item.title}</a>
		<p class="title-link course-card__description body-2 gray" lang="${item.language}" >${item.short_description ? item.short_description : ""}</p>
		<div class="course-card__meta">
			<p class="body-2 gray" lang="${item.language}">${item.category ? item.category : ""}</p>
		</div>		
	</div>
</div>
`;

$(".survey-card-container").each(function (i, item) {
  item = $(item);
  let data = item.data("data");
  item.html($(surveyTemplate(data)));
});
