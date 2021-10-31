const contentTemplate = (item) => `
	<div class="content-list-item">
		<a href="${item.url}" class="content-list-item__image">
			<img src="${item.thumb}" alt=""/>
		</a>
		<div class="content-list-item__content">
			<div class="content-list-item__content-header">
				<h5 class="title-5">
					${
            item.enabled
              ? `<a class="title-5" href="${item.url}">${item.title}</a>`
              : item.title
          }
				</h5>
				${
          item.type === "video"
            ? `<span class="title-5">${item.duration}</span>`
            : item.type === "exam" && item.enabled
            ? `<span class="title-5">${item.progress}</span>`
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
    <span class="title-5">${item.progress}<span>lectures</span></span>
    <span class="title-5">${item.duration}</span>
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
