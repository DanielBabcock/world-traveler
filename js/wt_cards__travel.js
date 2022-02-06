/*
 *
 * IMPORTANT: 
 *
 * TODO: Should be swapped out for Vanilla JS or be doe with a Library/Framework in future.
 *
 */
$.ajax({
  url: "data/wt_cards__travel.json"
}).done(techs)
  .fail(function (error) {
    console.log("error", error);
  });

function techs(list) {
  let data = list.techs;
  data.forEach(function (item) {
    document.getElementById("wt_cards__travel").innerHTML +=
      `<div class="col-sm-4 technologies">
      <center><img class="techs" src="${item.image}"><br>
      ${item.name}</center>
      </div>`;

  });
};

/*
 *
 * IMPORTANT: 
 *
 * TODO: Vanilla JS async/await concept to test later instead of using the jQuery above ("https://codepen.io/DanielBabcock/pen/KKyNgeY")...
 *
 */

// let utils = {};
// utils.get = (url) => {
//   return new Promise(function (resolve, reject) {
//     var req = new XMLHttpRequest();
//     req.open("GET", url);
//     req.onload = function () {
//       // handle both remote 200 responses and local zero responses...
//       if (req.status == 200) {
//         resolve(req.response);
//       } else {
//         reject(Error("promise error with " + req.status));
//       }
//     };
//     req.onerror = function (err) {
//       reject(Error("Network Error with " + url + ": " + err));
//     };
//     // optional
//     req.onreadystatechange = function (m) {
//       console.log("m: " + m);
//     };
//     req.send();
//   });
// };

// utils.getJSON = async function (url) {
//   var data = {};

//   var string = null;
//   try {
//     string = await utils.get(url);
//   } catch (e) {
//     alert("error: " + e);
//   }
//   try {
//     data = JSON.parse(string);
//     success = true;
//   } catch (e) {
//     alert("parse error");
//   }
//   return data;
// };
// async function init() {
//   let root = document.querySelector("#root");
//   let url = "data.json";
//   //   https://gist.github.com/DanielBabcock/4c7f1dd242b6f829550add602b21d543
//   let albums = null;
//   try {
//     albums = await utils.getJSON(url);
//   } catch (e) {
//     root.textContent = "error: " + e;
//   }
//   root.innerHTML = buildList(albums);
// }
// function buildList(albums) {
//   let html = "";

//   for (album of albums) {
//     // start a section element for each album
//     html += '<section class="1">';

//     // create a <div> for each key-value pair
//     for (key in album) {
//       html += `<div>${key} ${album[key]}</div>`;
//     }
//     // close off the section
//     html += "</section>";
//   }
//   // return the html
//   return html;
// }
// async function init_then() {
//   let root = document.querySelector("#root");
//   let url = "https://gist.githubusercontent.com/nevkatz/186d22e53cfb3db1ee4a9bd151e5e3b6/raw/addf4dc5ad09f74f8dc4ec66a6ff10ce16dcaaa7/content-1.json";

//   utils
//     .getJSON(url)
//     .then(function (data) {
//       root.textContent = JSON.stringify(data);
//     })
//     .catch(function (e) {
//       alert("error - " + e);
//     });
// }
// init();
