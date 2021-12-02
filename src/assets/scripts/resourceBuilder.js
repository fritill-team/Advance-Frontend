import TagResource from "./Resources/TagResource";
import CategoryResource from "./Resources/CategoryResource";
import RecommendationResource from "./Resources/RecommendationResource";
import ClassificationResource from "./Resources/ClassificationResource";
import ReviewResource from "./Resources/ReviewResource";
import CommentResource from "./Resources/CommentResource";
import ThreadRecourse from './Resources/ThreadResource';
const mapErrors = (app, $form, errors) => {
  for (let field in errors)
    if (Object.prototype.hasOwnProperty.call(field, errors))
      $form.find(`#${app}-${field}-messages`)
        .empty()
        .append($(errors[field].map(error => `<li>${error}</li>`).join('')))
}

const categories = $('#categories-list')
if (categories.length > 0) {
  new CategoryResource(categories, {
    listingURL: categories.data('listing-url'),
    createURL: categories.data('create-url'),
  })
}

const tags = $('#tags-list')
if (tags.length > 0) {
  new TagResource(tags, {
    listingURL: tags.data('listing-url'),
    createURL: tags.data('create-url'),
  })
}

const recommendations = $('#recommendations-list')
if (recommendations.length > 0) {
  new RecommendationResource(recommendations, {
    listingURL: recommendations.data('listing-url'),
    createURL: recommendations.data('create-url'),
  })
}

const classifications = $('#classifications-list')
if (classifications.length > 0) {
  new ClassificationResource(classifications, {
    listingURL: classifications.data('listing-url'),
    createURL: classifications.data('create-url'),
  })
}

const reviews = $('#reviews-list')
if (reviews.length > 0) {
  new ReviewResource(reviews, {
    listingURL: reviews.data('listing-url'),
    starterURL: reviews.data('listing-url'),
    createURL: reviews.data('create-url'),
    admin: reviews.data('is-admin'),
    user: reviews.data('user')
  })
}


const threads = $('#threads-list')
if (threads.length > 0){
  let categoriesList = [],tags = [];
    $.when(
    $.ajax({
      url: threads.data('tags-url'),
      type: 'get',
      headers: {'X-CSRFToken': self.csrf},
      success: function (data) {
        tags = data
      },
      error: function (xhr) {
        console.error(xhr)
      }
    }),
      $.ajax({
        url: threads.data('category-url'),
        type: 'get',
        headers: {'X-CSRFToken': self.csrf},
        success: function (data) {
          categoriesList = data
        },
        error: function (xhr) {
          console.error(xhr)
        }
      })
    ).done(function (data){
        new ThreadRecourse(threads, {
          listingURL: threads.data('listing-url'),
          createURL: threads.data('create-url'),
          user: threads.data('user'),
          categories: categoriesList,
          tags:tags
        })
      })
}

const comments = $('#comments-list')
if (comments.length > 0) {
  new CommentResource(comments, {
    listingURL: comments.data('listing-url'),
    createURL: comments.data('create-url'),
  })
}
