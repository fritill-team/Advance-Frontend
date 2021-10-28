MutationObserver = window.MutationObserver || window.WebKitMutationObserver;



const fitHeight = () => {
  let documentHeight = $(document).height(),
    footerHeight = $($('.footer')[0]).height(),
    pageContent = $($('.page__content')[0]),
    pageContentHeight = pageContent.height()

  if (pageContentHeight < documentHeight)
    pageContent.css('height', `${documentHeight - footerHeight - 60}px`)
  //
}

$(document).ready(() => {
  fitHeight()
})
$(window).on('resize', () => {
  fitHeight()
})


let observer = new MutationObserver(function(mutations, observer) {
  // fired when a mutation occurs
  fitHeight()
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});
