import { itemGenerator, modalGenerator } from "./functions.js";
import { mensWear } from "./mensWearData.js";

for (var i = 1; i < mensWear.length; i++) {
  for (var j = 0; j < mensWear[i].itemImages.length; j++) {
    mensWear[i].itemImages[j] = "." + mensWear[i].itemImages[j];
  }
}

$("#main-container").on("click", 'a[data-type="item"]', function () {
  var dataSource = $(this).attr("data-source");
  var dataSourceId = parseInt(dataSource[0]);
  var dataSourceType = dataSource[1];
  var data;

  if (dataSourceType === "M" || dataSourceType === "m") {
    data = mensWear[dataSourceId];
  } else if (dataSourceType === "w" || dataSourceType === "W") {
    data = womensWear[dataSourceId];
  }
  modalGenerator("#item-carousel", data);
});

itemGenerator(
  mensWear,
  "#mens-collection",
  mensWear.length,
  $("#category").val()
);

$("#category").change(function () {
  var category = $(this).val();
  itemGenerator(mensWear, "#mens-collection", mensWear.length, category);
  $(".item-price-tag")
    .prepend('<i class="fas fa-rupee-sign"></i> ')
    .append(" /-");
});

$(".item-price-tag")
  .prepend('<i class="fas fa-rupee-sign"></i> ')
  .append(" /-");
