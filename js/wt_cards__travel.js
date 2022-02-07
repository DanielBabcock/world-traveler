/*
 *
 * IMPORTANT: 
 *
 * TODO: Should be swapped out for Vanilla JS or be doe with a Library/Framework in future.
 *
 */
$.ajax({
  url: "assets/data/wt_cards__travel.json"
}).done(techs)
  .fail(function (error) {
    console.log("error", error);
  });

const htmlCard = (item , initialClass) => {
  const initialDiv = initialClass ? `<div class=${initialClass}>` : '<div>'
  return `${initialDiv}
            <div class="row">
              <div class="col">
                  <img src="${item.image}" alt="image">
              </div>
              <div class="col">
                  <p class="wt-card--travel-body-cta">
                      ${item.cta}
                  </p>
                  <p class="wt-card--travel-location">
                      ${item.location}
                  </p>
                  <p class="wt-card--travel-date">
                      ${item.date}
                  </p>
                  <p class="wt-card--travel-text">
                      ${item.text}
                  </p>
              </div>
          </div>
        </div>`
}


function techs(list) {
  let data = list.cards;
  let doc;
  data.forEach(function (item) {
    if( item.id === 0 ){
      doc = document.querySelector(".wt_cards__travel_large") 
      doc.innerHTML = htmlCard(item)
    } else {
      doc = document.querySelector(".wt_cards__travel_small")
      doc.innerHTML += htmlCard(item, 'col')
    }
  });
};