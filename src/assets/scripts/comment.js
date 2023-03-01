const commentForm = function(form) {
  return `
    <div class="comments__add-comment">
      <div class="add-comment__group">
        <div class="group__img-wrapper">
          <img class="group__img" src="@images/hd_dp.jpg" alt="">
        </div>
        <textarea class="group__textarea" placeholder="Add a public comment"></textarea>
      </div>
    </div>
  `;
}
// $('.comment-form').html($(commentForm))
$('.comment-form').each(function (i, item){
  $(this).append(commentForm);
})

const commentTemplate = function (comment) {
  return `
  <div class="review-comment__item">
    <div class="item__wrapper d-flex">
      <div class="item__reviews-user">
        <img class="reviews-user__img" src="../../assets/images/hd_dp.jpg" alt="">
        <div class="reviews-user__title">
          <a class="btn btn--text title__name" href="#">John Doe</a>
          <span class="title__time">2 hour ago</span>
        </div>
      </div>
    </div>
    <p class="review-comment__comment">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
    <div class="item__actions">
      <a class="action__report">
        <span class="material-icons report__icon">thumb_up_alt</span>10
      </a>
      <a class="action__report">
        <span class="material-icons report__icon">thumb_down</span>1
      </a>
      <a class="action__report">
        <span class="material-icons report__icon">favorite</span>Reply
      </a>
    </div>
  </div>
  `
}
const replayTemplate = function (comment) {
  return `
  <div class="review-comment__item review-comment__item--replay">
    <div class="item__wrapper d-flex">
      <div class="item__reviews-user">
        <img class="reviews-user__img" src="../../assets/images/hd_dp.jpg" alt="">
        <div class="reviews-user__title">
          <a class="btn btn--text title__name" href="#">John Doe</a>
          <span class="title__time">2 hour ago</span>
        </div>
      </div>
    </div>
    <p class="review-comment__comment">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
    <div class="item__actions">
      <a class="action__report">
        <span class="material-icons report__icon">thumb_up_alt</span>10
      </a>
      <a class="action__report">
        <span class="material-icons report__icon">thumb_down</span>1
      </a>
      <a class="action__report">
        <span class="material-icons report__icon">favorite</span>Reply
      </a>
    </div>
  </div>
  <div class="review-comment__item review-comment__item--replay">
    <div class="item__wrapper d-flex">
      <div class="item__reviews-user">
        <img class="reviews-user__img" src="../../assets/images/hd_dp.jpg" alt="">
        <div class="reviews-user__title">
          <a class="btn btn--text title__name" href="#">John Doe</a>
          <span class="title__time">2 hour ago</span>
        </div>
      </div>
    </div>
    <p class="review-comment__comment">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
    <div class="item__actions">
      <a class="action__report">
        <span class="material-icons report__icon">thumb_up_alt</span>10
      </a>
      <a class="action__report">
        <span class="material-icons report__icon">thumb_down</span>1
      </a>
      <a class="action__report">
        <span class="material-icons report__icon">favorite</span>Reply
      </a>
    </div>
  </div>
  `
}



$(".comment-container").each(function(i, item){
  let comment = $(item),
  data = comment.data('data');
  comment.html($(commentTemplate(data)))
  $(this).append(replayTemplate)
})
