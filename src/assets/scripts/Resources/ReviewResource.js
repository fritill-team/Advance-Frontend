import BaseResource from "./BaseResource";

export default class ReviewResource extends BaseResource {

  constructor($container, options) {
    options['prefix'] = 'reviews'
    super($container, options)
    this.fetchItems()
  }

  itemTemplate(item) {
    return `
  <div class="card card--side-col card--transparent" data-data='${JSON.stringify(item)}'>
  <div class="card__side-col">
    <img class="image image--rounded image--profile" src="${item.author.image}" alt="">
    </div>
    <div class="card__content replacable">
    <div class="card__header"><div class="card__header-multiline">
    <a class="primary bold" href="#">
        ${item.author.name}
        <i class="fa fa-check-circle ml-1"></i>
    </a>
    <time class="subtitle-2 gray">${item.created_at}</time><div class="rate-display" data-rate="${item.rate}">
    <div class="jq-star" style="width:20px;  height:20px;">
    <svg
    version="1.0"
    class="jq-star-svg"
    shape-rendering="geometricPrecision"
    xmlns="http://www.w3.org/2000/svg"
    x="0px" y="0px"
    width="305px" height="305px"
    viewBox="60 -62 309 309"
    style="enable-background:new 64 -59 305 305; stroke-width:4px;" xml:space="preserve">
    <style type="text/css">.svg-empty-995{fill:url(#995_SVGID_1_);}.svg-hovered-995{fill:url(#995_SVGID_2_);}.svg-active-995{fill:url(#995_SVGID_3_);}.svg-rated-995{fill:#f2b01e;}
    </style>
    <linearGradient id="995_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250">
    <stop offset="0" style="stop-color:lightgray"></stop>
    <stop offset="1" style="stop-color:lightgray"></stop>
    </linearGradient>
    <linearGradient id="995_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250">
    <stop offset="0" style="stop-color:#f2b01e"></stop>
    <stop offset="1" style="stop-color:#f2b01e"></stop>
     </linearGradient><linearGradient id="995_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#FEF7CD"></stop><stop offset="1" style="stop-color:#FF9511"></stop> </linearGradient><polygon data-side="center" class="svg-empty-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: black;"></polygon><polygon data-side="left" class="svg-active-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;"></polygon><polygon data-side="right" class="svg-active-995" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;"></polygon></svg></div><div class="jq-star" style="width:20px;  height:20px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305; stroke-width:4px;" xml:space="preserve"><style type="text/css">.svg-empty-995{fill:url(#995_SVGID_1_);}.svg-hovered-995{fill:url(#995_SVGID_2_);}.svg-active-995{fill:url(#995_SVGID_3_);}.svg-rated-995{fill:#f2b01e;}</style><linearGradient id="995_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:lightgray"></stop><stop offset="1" style="stop-color:lightgray"></stop> </linearGradient><linearGradient id="995_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#f2b01e"></stop><stop offset="1" style="stop-color:#f2b01e"></stop> </linearGradient><linearGradient id="995_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#FEF7CD"></stop><stop offset="1" style="stop-color:#FF9511"></stop> </linearGradient><polygon data-side="center" class="svg-empty-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: black;"></polygon><polygon data-side="left" class="svg-active-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;"></polygon><polygon data-side="right" class="svg-active-995" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;"></polygon></svg></div><div class="jq-star" style="width:20px;  height:20px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305; stroke-width:4px;" xml:space="preserve"><style type="text/css">.svg-empty-995{fill:url(#995_SVGID_1_);}.svg-hovered-995{fill:url(#995_SVGID_2_);}.svg-active-995{fill:url(#995_SVGID_3_);}.svg-rated-995{fill:#f2b01e;}</style><linearGradient id="995_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:lightgray"></stop><stop offset="1" style="stop-color:lightgray"></stop> </linearGradient><linearGradient id="995_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#f2b01e"></stop><stop offset="1" style="stop-color:#f2b01e"></stop> </linearGradient><linearGradient id="995_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#FEF7CD"></stop><stop offset="1" style="stop-color:#FF9511"></stop> </linearGradient><polygon data-side="center" class="svg-empty-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: black;"></polygon><polygon data-side="left" class="svg-active-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;"></polygon><polygon data-side="right" class="svg-active-995" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;"></polygon></svg></div><div class="jq-star" style="width:20px;  height:20px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305; stroke-width:4px;" xml:space="preserve"><style type="text/css">.svg-empty-995{fill:url(#995_SVGID_1_);}.svg-hovered-995{fill:url(#995_SVGID_2_);}.svg-active-995{fill:url(#995_SVGID_3_);}.svg-rated-995{fill:#f2b01e;}</style><linearGradient id="995_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:lightgray"></stop><stop offset="1" style="stop-color:lightgray"></stop> </linearGradient><linearGradient id="995_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#f2b01e"></stop><stop offset="1" style="stop-color:#f2b01e"></stop> </linearGradient><linearGradient id="995_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#FEF7CD"></stop><stop offset="1" style="stop-color:#FF9511"></stop> </linearGradient><polygon data-side="center" class="svg-empty-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: black;"></polygon><polygon data-side="left" class="svg-active-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;"></polygon><polygon data-side="right" class="svg-active-995" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;"></polygon></svg></div><div class="jq-star" style="width:20px;  height:20px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305; stroke-width:4px;" xml:space="preserve"><style type="text/css">.svg-empty-995{fill:url(#995_SVGID_1_);}.svg-hovered-995{fill:url(#995_SVGID_2_);}.svg-active-995{fill:url(#995_SVGID_3_);}.svg-rated-995{fill:#f2b01e;}</style><linearGradient id="995_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:lightgray"></stop><stop offset="1" style="stop-color:lightgray"></stop> </linearGradient><linearGradient id="995_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#f2b01e"></stop><stop offset="1" style="stop-color:#f2b01e"></stop> </linearGradient><linearGradient id="995_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="250"><stop offset="0" style="stop-color:#FEF7CD"></stop><stop offset="1" style="stop-color:#FF9511"></stop> </linearGradient><polygon data-side="center" class="svg-empty-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: black;"></polygon><polygon data-side="left" class="svg-active-995" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;"></polygon><polygon data-side="right" class="svg-active-995" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;"></polygon></svg></div></div></div><div class="card__tools"><div class="more-dropdown"><a class="more-dropdown__link"><i class="fas fa-ellipsis-h"></i></a><div class="more-dropdown__content"><span class="content__item replacer" data-target="#update-review-form"><i class="item__icon fa fa-edit"></i>Edit</span><span class="content__item"><i class="item__icon fa fa-trash"></i>Delete</span></div></div></div></div><p class="text-2">${item.review}</p></div></div>
`


  }

  formTemplate(item = {}, action = '') {
    return `
    <div class="card card--side-col">
    <div class="card__side-col">
    <img class="image image--profile image--rounded" src="../../assets/images/hd_dp.jpg" alt=""></div>
    <div class="card__content" id="${this.prefix}-form">
    <div class="card__header">
    <a class="bold primary" href="#"></a>
    </div>
    <form action="${action}" method="post"><div class="field-wrapper field-wrapper--no-label">
    <div class="field-wrapper__content">
    <input class="field-wrapper__input" type="text" placeholder="Insert your review." name="review">
    <div class="field-wrapper field-wrapper--no-label"><div class="field-wrapper__content">
    <input name="rate">
    </div><button class="btn btn--primary btn--rounded">Add Review</button></form></div></div>
`
  }

//   containerTemplate(data) {
//     return $(`
//       <div class="card card--side-col">
//         ${this.deleteDialog()}
//         <div class="card__side-col" >
//         <div class="card card--side-col">
//           <div class="card__side-col">
//             <img class="image image--profile image--rounded" src="" alt="">
//           </div>
//           <div class="card__content" id="${this.prefix}-form">
//             <div class="card__header">
//               <a class="bold primary" href="#"></a>
//             </div>
//             ${this.formTemplate({}, this.createURL)}
//           </div>
//         </div>
//         </div>
//       </div>
//       ${this.searchForm()}
//       <ul id="${this.prefix}-listing">${this.listingTemplate()}</ul>
// `)
//   }

}
