import { modalGenerator, itemGenerator } from "./functions.js";
import { womensWear } from "./womenWearData.js";
import { mensWear } from "./mensWearData.js";

itemGenerator(mensWear, "#mens-collection", 9, "all");

itemGenerator(womensWear, "#women-collection", 9, "all");

$('a[data-type="item"]').click(function () {
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

$(".item-price-tag")
  .prepend('<i class="fas fa-rupee-sign"></i> ')
  .append(" /-");
