export const initializeRateInput = () => {
  let rateInput = $(".rate-input")

  if (rateInput.length) {
    rateInput.starRating({
      initialRating: 0,
      starSize: 25,
      totalStars: 5,
      starShape: '',
      emptyColor: 'lightgray',
      hoverColor: '#f2b01e',
      // useFullStars: true
    })


  }
}


export const initializeRateDisplay = () => {
  let rateDisplay = $(".rate-display")
  if (rateDisplay.length) {
    rateDisplay.each(function () {
      let initial = $(this).data('rate')
      $(this).starRating({
        readOnly: true,
        initialRating: initial,
        starSize: 20,
        totalStars: 5,
        starShape: '',
        emptyColor: 'lightgray',
        hoverColor: '#f2b01e',
      });
    })
  }
}

initializeRateInput()

initializeRateDisplay()