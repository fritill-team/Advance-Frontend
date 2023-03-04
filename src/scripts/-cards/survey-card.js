
let gettext
if (typeof window.gettext === 'function')
  gettext = window.gettext
else
  gettext = key => key
const surveyTemplate = (item) => `
<div class="display-card display-card--grid-view">
	<a href="${item.url}" class="display-card__preview youtube-activator">
		<img src="${item.thumb}" alt="" class="display-card__preview-cover">
		<div class="display-card__preview-overlay"></div>
	</a>
  <div class="display-card__badge display-card__badge--category" style="${item.type === 'survey' ? 'background-color: #0D9BBD': item.type === 'curriculum' ? 'background-color: #FFCE06': 'background-color: #2FBEBD'}">
    ${gettext(item.type)}
  </div>
	<div class="display-card__content">
		<a class=" text-2 semi-bold" href="${item.url}" lang="${item.language}">${gettext(item.title)}</a>
		<p class=" display-card__description body-2 gray" lang="${item.language}" >${gettext(item.short_description) ? gettext(item.short_description) : ""}</p>
		<div class="display-card__meta">
			<p class="body-2 gray bold" lang="${item.language}">${gettext(item.category) ? gettext(item.category) : ""}</p>
		</div>
    ${item.sponsor ? `
      <div class="display-card__badge">
        <img src="${item.sponsor.cover}" >
      </div>
      <div class="display-card__badge">
        <img src="${item.sponsor.inverted_cover}" >
      </div>
    `: ''}
	</div>
</div>
`;

let surveyCards = $(".survey-card-container")
if (surveyCards.length)
  surveyCards.each(function (i, item) {
    item = $(item);
    let data = item.data("data");
    if (data)
      item.html($(surveyTemplate(data)));
  });
