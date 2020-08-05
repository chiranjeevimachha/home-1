export function itemGenerator(itemData, containerId, length, category) {
  var itemTemplate = [];
  var Type = itemData[0].type;

  for (var i = 1; i < length; i++) {
    $(containerId).empty();
    if (itemData[i].itemType === category || category === "all") {
      itemTemplate[i] =
        `<div class="col-sm-6 col-md-4 col-xl-3 col-lg-3">
      <div class="item-card">
        <a href="#" data-toggle="modal" data-target="#item-modal" data-type="item" data-source = "` +
        i +
        Type +
        `">
          <div class="item-card-img">
            <img src=` +
        itemData[i].itemImages[0] +
        ` alt="">
          </div>
          <span class="item-id">Item Id : ` +
        itemData[i].itemId +
        ` </span>
          <div class="item-details">
            <h6 class="item-name">` +
        itemData[i].itemTitle +
        `</h6>
            <span class="item-price-tag"> ` +
        itemData[i].itemPrice +
        ` </span>
            <span class="item-size">
              Size : ` +
        itemData[i].itemSize +
        `
            </span>
          </div>
        </a>
      </div>
      </div>`;
    }
  }
  $(containerId).append(itemTemplate);
}

export function modalGenerator(carouselID, modalItemData) {
  var modalTitleHeader = $("#item-modal .modal-header h6");
  $(modalTitleHeader).text(modalItemData.itemTitle);

  var carouselInner = $(carouselID + " .carousel-inner");
  var carouselIndicators = $(carouselID + " .carousel-indicators");
  var carouselIndicator = [];
  var carouselItems = [];
  var carouselImagesLength = modalItemData.itemImages.length;

  $(carouselInner).empty();
  $(carouselIndicators).empty();

  if (carouselImagesLength === 1) {
    $(carouselID + " a," + carouselID + " ol").hide();
  } else {
    $(carouselID + " a," + carouselID + " ol").show();
  }

  for (var i = 0; i < carouselImagesLength; i++) {
    if (i == 0) {
      carouselIndicator[i] =
        `<li class="active" data-slide-to='` +
        i +
        `' data-target="#item-carousel"></li>`;
      carouselItems[i] =
        `<div class="carousel-item active">
    <img src=` +
        modalItemData.itemImages[i] +
        ` alt="" class="d-block h-100">
  </div>`;
      continue;
    }
    carouselIndicator[i] =
      `<li data-slide-to='` + i + `' data-target="#item-carousel"></li>`;
    carouselItems[i] =
      `<div class="carousel-item">
    <img src=` +
      modalItemData.itemImages[i] +
      ` alt="" class="d-block h-100">
  </div>`;
  }
  $(carouselInner).append(carouselItems);
  $(carouselIndicators).append(carouselIndicator);

  var modalTitle = $(".item-description .title");
  var modalPrice = $(".item-description .price-tag");
  var modalInfo = $(".item-description .info");
  var modalSizes = $(".item-description .sizes");
  var modalId = $(".item-description .id");

  $(modalTitle).text(modalItemData.itemTitle);
  $(modalPrice).text(modalItemData.itemPrice);
  $(modalInfo).text(modalItemData.itemDescription);
  $(modalSizes).text(modalItemData.itemSize);
  $(modalId).text(modalItemData.itemId);
}
