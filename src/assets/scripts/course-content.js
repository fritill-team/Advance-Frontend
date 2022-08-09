const contentTemplate = (item) => `
	<div class="content-list-item">
		<a href="${item.enabled ? item.url : 'javascript:void(0)'}" class="content-list-item__image">
			<img src="${item.thumb}" alt=""/>
		</a>
		<div class="content-list-item__content">
			<div class="content-list-item__content-header">
        <a class="5" href="${item.enabled ? item.url : 'javascript:void(0)'}">${item.title}</a>
				${
          item.type === "video"
            ? `<span class="5">${item.duration}</span>`
            : item.type === "exam" && item.enabled
            ? `<span class="5">${item.progress}</span>`
            : ""
        }
			</div>
			<div class="content-list-item__content-description body-2">
				${item.description}
			</div>
			${
        item.type === "video" && item.enabled
          ? `<div class="content-list-item__progress"><span style= "max-width: ${item.progress}"></span></div>`
          : ""
      }
		</div>
	</div>
`;

const chapterTemplate = (item) => `
  <h3 class="chapter-item__title">${item.title}</h3>
  <div class="chapter-item__details">
    <span class="5">${item.progress.progress}<span>lectures</span></span>
    <span class="5">${item.duration}</span>
  </div>`;

$(".content-list-item").each(function (i, item) {
  item = $(item);
  let data = item.data("data");
  item.html($(contentTemplate(data)));
});

$(".chapter-item").each(function (i, item) {
  item = $(item);
  let data = item.data("data");
  item.html($(chapterTemplate(data)));
});
