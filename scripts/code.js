var pageCode = parseInt($(".page-code").text());
var path = "./";
if (pageCode === 0001) {
  path = "./html/";
}
$("header")
  .removeClass("sticky-top")
  .load(path + "header.html", function () {
    if (pageCode === 0001) {
      $(".navbar-brand")
        .attr("href", "./index.html")
        .children("img")
        .attr("src", "./img/icon-white.png");
      var currentPath = $(".collections a");
      $(currentPath[0]).attr("href", "./html/menswear.html");
      $(currentPath[1]).attr("href", "./html/womenswear.html");
    }
    $("#home-nav .nav-link").click(function (e) {
      e.preventDefault();
      const hash = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900
      );
      $(".navbar-toggler").trigger("click");
    });
    $(".navbar-toggler").click(function () {
      $("#home-nav,.overlay").toggleClass("active");
    });
    $(".overlay").click(function () {
      $(".navbar-toggler").trigger("click");
      $("#home-nav,.overlay").removeClass("active");
    });
  });
$("footer")
  .attr("id", "about-us")
  .load(path + "footer.html", function () {
    if (pageCode === 0001) {
      path = "./html/";
      $("footer img").attr("src", "./img/icon-white.png");
    }
    $(".click-on-top a").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $("html body").offset().top,
        },
        900
      );
    });
  });

const headerSibling = $("header").next();

const headerObserver = new IntersectionObserver(function (
  elements,
  headerObserver
) {
  elements.forEach((element) => {
    if (!element.isIntersecting) {
      $(".click-on-top").addClass("active");
    } else {
      $(".click-on-top").removeClass("active");
    }
  });
});

headerObserver.observe(headerSibling[0]);
