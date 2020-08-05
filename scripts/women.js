import { modalGenerator, itemGenerator } from "./functions.js";
import { womensWear } from "./womenWearData.js";

for (var i = 1; i < womensWear.length; i++) {
  for (var j = 0; j < womensWear[i].itemImages.length; j++) {
    womensWear[i].itemImages[j] = "." + womensWear[i].itemImages[j];
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
itemGenerator(womensWear, "#women-collection", womensWear.length, "all");
$("#category").change(function () {
  var category = $(this).val();
  itemGenerator(womensWear, "#women-collection", womensWear.length, category);
  $(".item-price-tag")
    .prepend('<i class="fas fa-rupee-sign"></i> ')
    .append(" /-");
});

$(".item-price-tag")
  .prepend('<i class="fas fa-rupee-sign"></i> ')
  .append(" /-");
