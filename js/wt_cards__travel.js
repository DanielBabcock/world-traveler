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

function techs(list) {
  let data = list.cards;
  data.forEach(function (item) {
    document.getElementById("wt_cards__travel").innerHTML +=
      `<div class="flex-row">
          <div class="wt-card--flex-left flex-column">
              <img src="${item.image}" alt="image">
          </div>
          <div class="wt-card--flex-right flex-column">
              <p class="wt-card--travel-cta">
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
      </div>`;

  });
};