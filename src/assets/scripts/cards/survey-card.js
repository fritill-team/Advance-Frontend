
let gettext
if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key
const surveyTemplate = (item) => `
<div class="course-card course-card--grid-view">
	<a href="${item.url}" class="course-card__preview youtube-activator">
		<img src="${item.thumb}" alt="" class="course-card__preview-cover">
		<div class="course-card__preview-overlay"></div>
	</a>
  <div class="course-card__badge course-card__badge--category" style="${item.type === 'survey' ? 'background-color: #0D9BBD': item.type === 'curriculum' ? 'background-color: #FFCE06': 'background-color: #2FBEBD'}">
    ${gettext(item.type)}  
  </div>
	<div class="course-card__content">
		<a class="title-link text-2 semi-bold" href="${item.url}" lang="${item.language}">${gettext(item.title)}</a>
		<p class="title-link course-card__description body-2 gray" lang="${item.language}" >${gettext(item.short_description) ? gettext(item.short_description) : ""}</p>
		<div class="course-card__meta">
			<p class="body-2 gray bold" lang="${item.language}">${gettext(item.category) ? gettext(item.category) : ""}</p>
		</div>		
    ${item.sponsor ? `
      <div class="course-card__badge">
        <img src="${item.sponsor.cover}" >
      </div>
      <div class="course-card__badge">
        <img src="${item.sponsor.inverted_cover}" >
      </div>
    `: ''}
	</div>
</div>
`;

$(".survey-card-container").each(function (i, item) {
  item = $(item);
  let data = item.data("data");
  item.html($(surveyTemplate(data)));
});

