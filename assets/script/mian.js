// $(document).ready(function () {
//   var $categorySlider = $('.sticky-cat');
//   $(window).on('scroll', function () {
//     var scrollTop = $(window).scrollTop();

//     // Show/hide the category slider based on scroll position
//     // if (scrollTop > 0) {
//     //   $categorySlider.fadeIn();
//     // } else {
//     //   $categorySlider.fadeOut();
//     // }

//     // Highlight category link on scroll
//     var scrollPos = scrollTop + $(window).height() / 2;
//     $('.category-items').each(function () {
//       var id = $(this).attr('id');
//       var offsetTop = $(this).offset().top;
//       var offsetBottom = offsetTop + $(this).outerHeight();
//       if (scrollPos >= offsetTop && scrollPos <= offsetBottom) {
//         $('.sticky-cat .category-slider a').removeClass('highlight');
//         $('.sticky-cat .category-slider a[data-target="#' + id + '"]').addClass('highlight');
//       }
//     });
//   });

//   // Scroll to category items on click
//   $('.category-slider a').on('click', function (e) {
//     e.preventDefault();
//     var target = $($(this).data('target'));
//     $('html, body').animate({
//       scrollTop: target.offset().top
//     }, 500);
//   });
// });

$(document).ready(function () {
  var $categorySlider = $('.sticky-cat');
  var $categoryLinks = $('.sticky-cat .category-slider a');


  // var $stictopbar = $(".sticky-cat");
  // // var $stickynav = $(".main-menu");
  // var stickytopinfo = $stictopbar.offset().top;
  // // var stickynavTop = $stickynav.offset().top;
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > stickytopinfo) {
  //     $stictopbar.css({
  //       position: "fixed",
  //       display: "block",
  //       top: "94px",
  //       width: "100%",
  //       "z-index": "2", // Ensures the div is above other content
  //     });
  //   } else {
  //     $stictopbar.css({
  //       display: "none !important",
  //     });
  //   }
  // });

  // Initialize mCustomScrollbar
  $('#scroall-7').mCustomScrollbar({
    axis: "x", // horizontal scrollbar
    theme: "3d", // choose the theme that suits your design
  });

  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();

    // Show/hide the category slider based on scroll position
    if (scrollTop > 0) {
      $categorySlider.css({
        position: "fixed",
        display: "block",
        top: "94px",
        width: "100%",
        "z-index": "2", // Ensures the div is above other content
      });
    } else {
      $categorySlider.fadeOut();
    }

    // Highlight category link on scroll
    var scrollPos = scrollTop + $(window).height() / 2;
    $('.category-items').each(function () {
      var id = $(this).attr('id');
      var offsetTop = $(this).offset().top;
      var offsetBottom = offsetTop + $(this).outerHeight();
      if (scrollPos >= offsetTop && scrollPos <= offsetBottom) {
        $categoryLinks.removeClass('highlight');
        var $highlightedLink = $('.sticky-cat .category-slider a[data-target="#' + id + '"]');
        $highlightedLink.addClass('highlight');

        // Scroll the mCustomScrollbar to make the highlighted link visible
        var linkPosition = $highlightedLink.position().left;
        $('#scroall-7').mCustomScrollbar('scrollTo', linkPosition);
      }
    });
  });

  // Scroll to category items on click
  $categoryLinks.on('click', function (e) {
    e.preventDefault();
    var target = $($(this).data('target'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
  });
});


$(document).ready(function () {
  $(".show-test-menu").click(function () {
    $(".test-menu-ul").toggleClass('visibal').animation('1000');
  });
  /**
  *
  * ******************************************
  *  2_ fixed top bar
  * ******************************************
  *
  **/
  var $stickyDiv = $(".main-menu-one");
  // var $stickynav = $(".main-menu");

  var stickyDivTop = $stickyDiv.offset().top;
  // var stickynavTop = $stickynav.offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > stickyDivTop) {
      $stickyDiv.css({
        position: "fixed",
        top: "0px",
        width: "100%",
        "z-index": "8", // Ensures the div is above other content
      });
    } else {
      $stickyDiv.css({
        position: "relative",
        top: "0",
      });
    }
  });


  $(window).scroll(function () {
    if ($(window).scrollTop() > stickynavTop) {
      $stickynav.css({
        position: "fixed",
        top: "0",
        margin: "40",
        // 'width': '100%',
        // 'z-index': '1000' // Ensures the div is above other content
      });
    } else {
      $stickynav.css("position", "relative");
    }
  });

});

// $(document).ready(function(){
//   /**
//     ##########################################
//     ###     7_ setting lang suport rtl, ltr
//     ##########################################
//    **/
//   // Function to set the language and update UI
//   function setLanguage(lang) {
//     if (lang === "en") {
//       $("html").attr("lang", "en");
//       $("body").css({
//         direction: "ltr",
//         "text-align": "left",
//       });
//       $("#headline").text("Hello, World!");
//       $("#paragraph").text(
//         "This is a sample text to demonstrate language and direction change."
//       );
//       $("#btn-en").addClass("active");
//       $("#btn-ar").removeClass("active");
//       $("#btn-en-2").addClass("active");
//       $("#btn-ar-2").removeClass("active");
//     } else if (lang === "ar") {
//       $("html").attr("lang", "ar");
//       $("body").css({
//         direction: "rtl",
//         "text-align": "right",
//       });
//       $("#headline").text("مرحبا بالعالم!");
//       $("#paragraph").text("هذا نص تجريبي لعرض تغيير اللغة والاتجاه.");
//       $("#btn-ar").addClass("active");
//       $("#btn-en").removeClass("active");
//     }
//     // Save the selected language in localStorage
//     localStorage.setItem("preferredLanguage", lang);
//   }

//   // Check for saved language preference in localStorage
//   const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
//   setLanguage(savedLanguage);

//   // Event listeners for buttons
//   $("#btn-en").click(function () {
//     setLanguage("en");
//   });
//   $("#btn-ar").click(function () {
//     setLanguage("ar");
//   });
//   $("#btn-en-2").click(function () {
//     setLanguage("en");
//   });
//   $("#btn-ar-2").click(function () {
//     setLanguage("ar");
//   });
// });

$(document).ready(function () {
  /**
    ##########################################
    ###     7_ setting lang suport rtl, ltr
    ##########################################
   **/
  // Function to set the language and update UI
  function setLanguage(lang) {
    if (lang === "en") {
      $("html").attr("lang", "en");
      $("body").css({
        direction: "ltr",
        "text-align": "left",
      });
      $("#headline").text("Hello, World!");
      $("#paragraph").text(
        "This is a sample text to demonstrate language and direction change."
      );
      $("#btn-en").addClass("active");
      $("#btn-ar").removeClass("active");
      $("#btn-en-2").addClass("active");
      $("#btn-ar-2").removeClass("active");
    } else if (lang === "ar") {
      $("html").attr("lang", "ar");
      $("body").css({
        direction: "rtl",
        "text-align": "right",
      });
      $("#headline").text("مرحبا بالعالم!");
      $("#paragraph").text("هذا نص تجريبي لعرض تغيير اللغة والاتجاه.");
      $("#btn-ar").addClass("active");
      $("#btn-en").removeClass("active");
    }
    // Save the selected language in localStorage
    localStorage.setItem("preferredLanguage", lang);
  }

  // Check for saved language preference in localStorage
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
  setLanguage(savedLanguage);

  // Event listener for select dropdown
  $("#lang-select").change(function () {
    const selectedLanguage = $(this).val();
    setLanguage(selectedLanguage);
    $(this).addClass('no-border'); // Add the class to remove the border
  });

  // Set the select value to the saved language
  $("#lang-select").val(savedLanguage);
});

// ############################################
// #### scraoll
// ############################################

// ############################################
// #### darck mode
// ############################################
$(document).ready(function () {
  if (localStorage.getItem("darkMode") === "enabled") {
    $("body").addClass("dark-mode");
  }

  // Check the saved preference on page load
  if (localStorage.getItem("darkMode") === "enabled") {
    $("body").addClass("dark-mode");
    $("#toggle-dark-mode .fa").removeClass("fa-moon").addClass("fa-sun");
  }

  $("#toggle-dark-mode").click(function () {
    $("body").toggleClass("dark-mode");

    // Toggle the icon
    if ($("body").hasClass("dark-mode")) {
      $("#toggle-dark-mode .fa").removeClass("fa-moon").addClass("fa-sun");
      localStorage.setItem("darkMode", "enabled");
    } else {
      $("#toggle-dark-mode .fa").removeClass("fa-sun").addClass("fa-moon");
      localStorage.removeItem("darkMode");
    }
  });

});

$(document).ready(function () {
  let basePrice = 0;
  let addonsPrice = 0;
  let quantity = 1;

  // Function to update the total price
  function updateTotalPrice() {
    let totalPrice = (basePrice + addonsPrice) * quantity;
    $(".total-price").text(totalPrice.toFixed(2) + " ريال");
  }

  // Handle size selection (only one can be selected)
  $('.items-size input[type="checkbox"]').on("change", function () {
    $('.items-size input[type="checkbox"]').not(this).prop("checked", false);

    if ($(this).is(":checked")) {
      basePrice = parseFloat(
        $(this)
          .closest(".d-flex")
          .find("h3")
          .text()
          .replace(/[^\d.]/g, "")
      );
    } else {
      basePrice = 0;
    }
    updateTotalPrice();
  });

  // Handle add-ons selection (multiple can be selected)

  $('.items-adds input[type="checkbox"]').on("change", function () {
    let addonPrice = parseFloat(
      $(this)
        .closest(".d-flex")
        .find("h3")
        .text()
        .replace(/[^\d.]/g, "")
    );

    if ($(this).is(":checked")) {
      addonsPrice += addonPrice;
    } else {
      addonsPrice -= addonPrice;
    }
    updateTotalPrice();
  });

  // Handle quantity increase
  $(".counter-plus").on("click", function () {
    quantity++;
    $("#handleCounter input").val(quantity);
    updateTotalPrice();
  });

  // Handle quantity decrease
  $(".counter-minus").on("click", function () {
    if (quantity > 1) {
      quantity--;
      $("#handleCounter input").val(quantity);
      updateTotalPrice();
    }
  });
});

/**
 * ########################################################
 * ########################################################
 * ########################################################
 */
// $(document).ready(function() {
//     $('.qtagselect__select').tagselect({
//         // additional class(es)
//         'class': 'kkdjjjd',

//         // placeholder
//         'placeholder': 'select an option',

//         // additional class(es) for the dropdown
//         'dropClass': '',

//         // shows the footer in the dropdown
//         'dropFooter': true,

//         // is opened on page load
//         'isOpen': false,

//         // maximum number of tags allowed to select
//         'maxTag': 20,

//         // parent container
//         'tagParent': 'qmain',

//         // error message
//         'tagMessage': 'Up to 4 tags!',

//         // auto hides after this timeout
//         'tagMessageHide': '3000',

//         // custom styles for the error message
//         'tagMessageStyle': ''
//     });

// });

// new AirDatepicker('#data-one');
function exportToExcel() {
  var invoiceContent = document.getElementById("invoiceone").outerHTML;

  // Convert the HTML content to a worksheet
  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.aoa_to_sheet([
    ["مطعم برو"],
    ["موعد الطلب:", "10/2/2024 : 12:30 PM"],
    ["رقم الطلب:", "2334412"],
    ["نوع الطلب:", "داخل المطعم"],
    ["رقم الوحدة:", "320"],
    ["اسم العميل:", "2334412"],
    ["رقم الجوال:", "9099939393"],
    ["الصنف", "الكمية", "الاضافات", "السعر"],
    ["اسم الصنف", 3, "-", 4],
    ["اسم الصنف", 5, "-", 54],
    ["اسم الصنف", 3, "-", 74],
    ["المجموع:", "120ريال"],
    ["ضريبة القيمة المضافة:", "10ريال"],
    ["الاجمالى:", "220ريال"],
  ]);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, "Invoice");

  // Export the workbook to an Excel file
  XLSX.writeFile(wb, "invoice.xlsx");
}

document.addEventListener("DOMContentLoaded", function () {
  var $on = "section";
  $($on).css({
    background: "none",
    border: "none",
    "box-shadow": "none",
  });
  flatpickr("#datepicker1", {
    enableTime: true,
    dateFormat: "Y-M-d",
  });
  flatpickr("#datepicker2", {
    enableTime: true,
    dateFormat: "Y-m-d",
  });
  flatpickr("#datepicker3", {
    enableTime: true,
    dateFormat: "Y-m-d",
  });
  flatpickr("#datepicker4", {
    enableTime: true,
    dateFormat: "Y-m-d",
  });
  flatpickr("#datepicker5", {
    enableTime: true,
    dateFormat: "Y",
  });
  flatpickr("#datepicker6", {
    enableTime: true,
    dateFormat: "M",
  });

  flatpickr("#timpickers1", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i K",
    time_24hr: false,
  });
  flatpickr("#timpickers2", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i K",
    time_24hr: false,
  });
  flatpickr("#timpickers3", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i K",
    time_24hr: false,
  });
  flatpickr("#timpickers4", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i K",
    time_24hr: false,
  });
  flatpickr("#timpickers5", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i K",
    time_24hr: false,
  });
});

$(document).ready(function () {
  $(".delete-icon2").click(function () {
    $("#gallery2").empty();
    $(".progress-bar2").css("width", "0%");
    $("#upload-percentage2").text("0%");
    $(".progress-bar-container2").hide();
    $(".completion-message2").hide();
    $("#file-upload2").val("");
    updateImageCount();
  });

  //

  $(".dropdown-btn").click(function () {
    // Close all dropdowns except the one being clicked
    $(".dropdown-container").not($(this).next()).slideUp();
    $(".dropdown-btn").not($(this)).removeClass("active");
    $(".dropdown-btn")
      .not($(this))
      .find(".fa-caret-down")
      .removeClass("rotate");

    // Toggle the clicked dropdown
    $(this).next(".dropdown-container").slideToggle();
    $(this).toggleClass("active");
    $(this).find(".fa-caret-down").toggleClass("rotate");
  });

  /**
   * ******************************************
   *  1_ add weekly days
   * ******************************************
   **/
  $(".add-item").click(function () {
    addItem();
  });

  $(".item-input").keypress(function (e) {
    if (e.which == 13) {
      // Enter key pressed
      addItem();
    }
  });

  $(".item-list").on("click", ".delete-item", function () {
    $(this).parent().remove();
  });

  function addItem() {
    var itemValue = $(".item-input").val().trim();
    if (itemValue) {
      var listItem = $('<li class="text-X-Small"></li>').text(itemValue);

      var deleteButton = $(
        '<span class="delete-item"><i class="fa fa-xmark-circle"></i></span>'
      );
      listItem.append(deleteButton);
      $(".item-list").append(listItem);
      $(".item-input").val("");
    }
  }

  /**
   * ******************************************
   *  1_ increc number
   * ******************************************
   **/
  $(".counter-plus").click(function () {
    var $input = $(this).siblings("input");
    var value = parseInt($input.val());
    value = isNaN(value) ? 0 : value;
    $input.val(value + 1);
  });

  $(".counter-minus").click(function () {
    var $input = $(this).siblings("input");
    var value = parseInt($input.val());
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
      $input.val(value - 1);
    }
  });

  /**
   * ******************************************
   *  1_ image uplaod
   * ******************************************
   **/

  $("#file-upload").change(function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#uploaded-image").attr("src", e.target.result).show();
        $(".delete-icon").show();
        const fileSize = (file.size / 1024).toFixed(2) + " KB";
        $("#image-size").text(fileSize);
        $(".image-info").show();
      };
      reader.readAsDataURL(file);
    }
  });

  // Simulate upload progress
  $("#file-upload").change(function () {
    $(".progress-bar-container").show();
    let progress = 0;
    const interval = setInterval(function () {
      progress += 10;
      $(".progress-bar").css("width", progress + "%");
      $("#upload-percentage").text(progress + "%");
      if (progress >= 100) {
        clearInterval(interval);
        $container.find(".pdf-img").show();
        setTimeout(function () {
          $(".completion-message").show();
        }, 500);
        $(".upload-label").hide();
      }
    }, 300);
  });

  $(".delete-icon").click(function () {
    $("#uploaded-image").hide();
    $(".delete-icon").hide();
    $(".progress-bar").css("width", "0%");
    $("#upload-percentage").text("0%");
    $(".image-info").hide();
    $(".progress-bar-container").hide();
    $(".completion-message").hide();
    $("#file-upload").val("");
  });
  /**
   * ******************************************
   *  1_ date pickers
   * ******************************************
   **/

  // $(document).on('change', '.file-upload', function(event) {
  //     const $container = $(this).closest('.upload-container');
  //     const file = event.target.files[0];
  //     if (file) {
  //         const reader = new FileReader();
  //         reader.onload = function(e) {
  //             $container.find('.uploaded-image').attr('src', e.target.result).show();
  //             $container.find('.delete-icon').show();
  //             const fileSize = (file.size / 1024).toFixed(2) + ' KB';
  //             $container.find('.image-size').text(fileSize);
  //             $container.find('.img-info').show();
  //         };
  //         reader.readAsDataURL(file);

  //         // Simulate upload progress
  //         $container.find('.progress-bar-container').show();
  //         let progress = 0;
  //         const interval = setInterval(function() {
  //             progress += 10;
  //             $container.find('.progress-bar').css('width', progress + '%');
  //             $container.find('.upload-percentage').text(progress + '%');
  //             if (progress >= 100) {
  //                 clearInterval(interval);
  //                 setTimeout(function() {
  //                     $container.find('.completion-message').show();
  //                 }, 500);
  //             }
  //         }, 300);
  //     }
  // });
  $(document).on("change", ".file-upload", function (event) {
    const $container = $(this).closest(".upload-container");
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $container.find(".uploaded-image").attr("src", e.target.result).show();
        $container.find(".delete-icon").show();
        const fileSize = (file.size / 1024).toFixed(2) + " KB";
        $container.find(".image-size").text(fileSize);
        $container.find(".img-info").show();
      };
      reader.readAsDataURL(file);

      // Simulate upload progress
      $container.find(".progress-bar-container").show();
      let progress = 0;
      const interval = setInterval(function () {
        progress += 10;
        $container.find(".progress-bar").css("width", progress + "%");
        $container.find(".upload-percentage").text(progress + "%");
        if (progress >= 100) {
          clearInterval(interval);
          // Hide divs when progress is 100%
          $container.find(".pdf-img").show();
          $container.find(".upload-label").hide(); // Add the selector of the div you want to hide
          setTimeout(function () {
            $container.find(".completion-message").show();
          }, 500);
        }
      }, 300);
    }
  });

  $(document).on("click", ".delete-icon", function () {
    const $container = $(this).closest(".upload-container");
    $container.find(".uploaded-image").hide();
    $(this).hide();
    $container.find(".progress-bar").css("width", "0%");
    $container.find(".upload-percentage").text("0%");
    $container.find(".img-info").hide();
    $container.find(".progress-bar-container").hide();
    $container.find(".completion-message").hide();
    $container.find(".pdf-img").hide();
    $container.find(".upload-label").show();
    $container.find(".file-upload").val("");
  });

  /**
   * ******************************************
   *  1_ open popup model
   * ******************************************
   **/
  $(".open-modal").click(function (e) {
    e.preventDefault();
    var modalId = $(this).data("modal");
    $('.modal-overlay[data-modal="' + modalId + '"]').fadeIn();
    $('.modal-box[data-modal="' + modalId + '"]').fadeIn();
  });
  $(".open-modal-1").click(function (e) {
    e.preventDefault();
    var modalId = $(this).data("modal");
    $('.modal-overlay[data-modal="' + modalId + '"]').fadeIn();
    $('.modal-box[data-modal="' + modalId + '"]').fadeIn();
  });

  $(".modal-close, .modal-close-icon, .modal-overlay").click(function () {
    var modalId = $(this).data("modal");
    $('.modal-overlay[data-modal="' + modalId + '"]').fadeOut();
    $('.modal-box[data-modal="' + modalId + '"]').fadeOut();
  });

  /**
   * ******************************************
   *  1_ show popup window
   * ******************************************
   **/
  $(".icon-box").on("click", function (event) {
    event.preventDefault();
    var target = $(this).data("target");
    if ($(target).hasClass("show")) {
      $(target).removeClass("show").fadeOut(10);
    } else {
      $(target).addClass("show").fadeIn(10);
    }
    $(this)
      .find(".icon")
      .text(function (i, text) {
        return text === "☰" ? "✖" : "☰";
      });
  });

  $(document).on("click", function (event) {
    $(".popup-box").each(function () {
      if (
        !$(event.target).closest(this).length &&
        !$(event.target).closest(
          '.icon-box[data-target="' +
          "." +
          $(this).attr("class").split(" ")[1] +
          '"]'
        ).length
      ) {
        $(this).removeClass("show").fadeOut(10);
        $(
          '.icon-box[data-target=".' +
          $(this).attr("class").split(" ")[1] +
          '"]'
        )
          .find(".icon")
          .text("☰");
      }
    });
  });

  $(window).on("resize", function () {
    $(".popup-box").removeClass("show").fadeOut(1000);
    $(".icon").text("☰");
  });

  /**
   * #####################################
   * ## 1_ order status
   * #####################################
   **/
  function initializeToggleButton(selector) {
    $(document).on("click", selector, function () {
      var $btn = $(this);
      var toggleId = $btn.data("toggle-id");
      var onText = $btn.data("on-text");
      var offText = $btn.data("off-text");
      var $toggleText = $btn.siblings(".toggle-text");

      if ($btn.hasClass("active")) {
        $btn.removeClass("active");
        localStorage.removeItem("toggleStatus-" + toggleId);
        $toggleText.eq(0).text(offText);
        $toggleText.eq(1).text("");
      } else {
        $btn.addClass("active");
        localStorage.setItem("toggleStatus-" + toggleId, "active");
        $toggleText.eq(0).text(onText);
        $toggleText.eq(1).text("");
      }
    });

    // Initialize the state based on localStorage
    $(selector).each(function () {
      var $btn = $(this);
      var toggleId = $btn.data("toggle-id");
      var onText = $btn.data("on-text");
      var offText = $btn.data("off-text");
      var $toggleText = $btn.siblings(".toggle-text");

      if (localStorage.getItem("toggleStatus-" + toggleId) === "active") {
        $btn.addClass("active");
        $toggleText.eq(0).text(onText);
        $toggleText.eq(1).text("");
      } else {
        $toggleText.eq(0).text(offText);
        $toggleText.eq(1).text("");
      }
    });
  }

  // Call the function on document ready and after any DOM changes
  $(document).ready(function () {
    initializeToggleButton(".toggle-btn");

    // Example: Reinitialize after showing more columns
    $("#show-more-columns").click(function () {
      // Code to show more columns
      // ...

      // Reinitialize toggle buttons
      initializeToggleButton(".toggle-btn");
    });
  });

  /**
   * ******************************************
   *  1_ show color swicher
   * ******************************************
   **/
  // show color box icon
  $(".select-color").click(function () {
    const $icon = $(this).find("i");

    $(this).toggleClass("show-color-option");
    $(".color-slection").toggle(); // Toggle the visibility of the text

    if ($(this).hasClass("show-color-option")) {
      $icon.removeClass("fa-circle-half-stroke").addClass("fa-close");
    } else {
      $icon.removeClass("fa-close").addClass("fa-circle-half-stroke");
    }

    setTimeout(() => {
      $(this).removeClass("show-color-option");
      $icon.removeClass("fa-close").addClass("fa-circle-half-stroke"); // Revert to default icon
    }, 1000000000); // Match this duration to the animation duration
  });

  // #################################################################################

  // Load the saved color from localStorage
  var savedColor = localStorage.getItem("backgroundColor");
  if (savedColor) {
    $(".bg-custom-color").css("background-color", savedColor);
    $(".theme-color").css("color", savedColor);
  }

  // Change the background color, save it to localStorage, and add a class to a specific div
  $(".color-btn").click(function () {
    var color = $(this).data("color");
    $(".bg-custom-color").css("background-color", color);
    $(".theme-color").css("color", color);
    localStorage.setItem("backgroundColor", color);

    // Add a class to the specific div
    $("color-slection").addClass("new-class");
  });


  // drobdown
  $(".dropdown-btn").click(function () {
    $(this).next(".dropdown-content").toggleClass("show");
    $(this).find(".dropdown-icon").toggleClass("rotate");
  });

  // Close the dropdown if the user clicks outside of it
  $(window).click(function (event) {
    if (!event.target.matches(".dropdown-btn")) {
      $(".dropdown-content").removeClass("show");
      $(".dropdown-icon").removeClass("rotate");
    }
  });
  /**
   *
   * ******************************************
   *  4_ owl carosel (slider for )
   * ******************************************
   *
   **/

  $(".number-of").owlCarousel({
    loop: true,
    autoWidth: true,
    // autoHeight: true,
    rtl: true,
    margin: 10,
    autoHeight: true, // Enable auto height
    onInitialized: setEqualHeight, // Callback after initialization
    onResized: setEqualHeight, // Callback after resizing
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".reserv-unts").owlCarousel({
    loop: true,
    autoWidth: true,
    // autoHeight: true,
    rtl: true,
    margin: 10,
    nav: true,
    dots: false,
    autoHeight: true, // Enable auto height
    onInitialized: setEqualHeight, // Callback after initialization
    onResized: setEqualHeight, // Callback after resizing
    navText: [
      "<i class='fa fa-solid fa-arrow-left'></i>",
      "<i class='fa fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".category-slide").owlCarousel({
    loop: false,
    autoWidth: true,
    autoHeight: true,
    rtl: true,
    nav: false,
    margin: 10,
    autoHeight: true, // Enable auto height
    onInitialized: setEqualHeight, // Callback after initialization
    onResized: setEqualHeight, // Callback after resizing
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".category-sli").owlCarousel({
    loop: false,
    autoWidth: true,
    autoHeight: true,
    rtl: true,
    nav: false,
    margin: 10,
    autoHeight: true, // Enable auto height
    onInitialized: setEqualHeight, // Callback after initialization
    onResized: setEqualHeight, // Callback after resizing
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  function setEqualHeight() {
    var maxHeight = 0;

    // Find the maximum height
    $(".number-of .card-one").each(function () {
      var itemHeight = $(this).outerHeight();
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    // Set each item to the maximum height
    $(".number-of .card-one").each(function () {
      $(this).css("height", maxHeight + "px");
    });
    $(".category-slide .mb-2").each(function () {
      var itemHeight = $(this).outerHeight();
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    // Set each item to the maximum height
    $(".category-slide .mb-2").each(function () {
      $(this).css("height", maxHeight + "px");
    });
  }

  /**
   * ******************************************
   *  5_color switsher
   * ******************************************
   **/

  $(".dropdown-toggle").click(function (event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    $(this).next(".dropdown-menu1").toggle();
  });

  // Close the dropdown if the user clicks outside of it
  $(window).click(function (event) {
    if (!$(event.target).closest(".dropdown1").length) {
      $(".dropdown-menu1").hide();
    }
  });

  // mobile nav bar
  $("#mobile-icon").click(function () {
    $(".sidpar").toggleClass("expanded");
  });

  // Close the menu if the user clicks outside of it
  $(window).click(function (event) {
    if (!$(event.target).closest("#mobile-icon, .sidpar ").length) {
      $(".sidpar ").removeClass("expanded");
    }
  });

  /**
   *
   * ******************************************
   *  6_ dark mode
   * ******************************************
   *
   **/
  // Check if dark mode is enabled in localStorage


  /**
   * ******************************************
   *  1_ tag selector
   * ******************************************
   **/

  // function initializeTagSelect(selector, options) {
  //     $(selector).tagselect(options);
  // }

  // Initialize the first select element
  // initializeTagSelect('.qtagselect__select', {
  //     'class': '',
  //     'placeholder': 'Select an option',
  //     'dropClass': '',
  //     'dropFooter': true,
  //     'isOpen': false,
  //     'maxTag': 20,
  //     'tagParent': 'qmain',
  //     'tagMessage': 'Up to 4 tags!',
  //     'tagMessageHide': '3000',
  //     'tagMessageStyle': ''
  // });

  // // Initialize the second select element with different options
  // initializeTagSelect('.qtagselect__select-alt', {
  //     'class': 'custom-class',
  //     'placeholder': 'Choose options',
  //     'dropClass': 'custom-drop-class',
  //     'dropFooter': false,
  //     'isOpen': true,
  //     'maxTag': 10,
  //     'tagParent': 'custom-parent',
  //     'tagMessage': 'Max 10 tags!',
  //     'tagMessageHide': '2000',
  //     'tagMessageStyle': 'color: red;'
  // });
  /**
   * ##########################################
   * ##  print pdf table
   * ##########################################
   **/
  // $('#printTableBtn').click(function() {
  //     var printWindow = window.open('', '', 'height=600,width=800');
  //     var tableContent = $('#datatable5').html();
  //     var styles = '<link rel="stylesheet" href="assets/css/all.css">';
  //     styles += '<link rel="stylesheet" href="assets/css/normalize.css">';
  //     styles += '<link rel="stylesheet" href="assets/css/lib/datatable.css">';
  //     styles += '<link rel="stylesheet" href="assets/css/style.css">';

  //     printWindow.document.write('<html><head><title>Print Table</title>');
  //     printWindow.document.write(styles);
  //     printWindow.document.write('</head><body>');
  //     printWindow.document.write('<table>' + tableContent + '</table>');
  //     printWindow.document.write('</body></html>');
  //     printWindow.document.close();
  //     printWindow.print();
  // });
  $("#printpdf").click(function () {
    var $contentToExport = $("#invoiceone");

    // Ensure all images are fully loaded before printing
    var imagesLoaded = true;
    $contentToExport.find("img").each(function () {
      if (!this.complete) {
        imagesLoaded = false;
        $(this)
          .on("load", function () {
            if (
              $contentToExport.find("img").length ===
              $contentToExport.find("img:complete").length
            ) {
              printContent();
            }
          })
          .on("error", function () {
            console.error("Image failed to load: " + this.src);
            if (
              $contentToExport.find("img").length ===
              $contentToExport.find("img:complete").length
            ) {
              printContent();
            }
          });
      }
    });

    if (imagesLoaded) {
      printContent();
    }

    function printContent() {
      var baseURL = window.location.origin;

      $("head").append('<base href="' + baseURL + '">');

      $contentToExport.printThis({
        importCSS: true,
        importStyle: true,
        loadCSS: ["assets/css/style.css", "style2.css", "style3.css"],
        printContainer: true,
        base: baseURL,
      });

      $("base").remove();
    }
  });

  /**
   * ******************************************
   *  air date pickers
   * ******************************************
   **/
  // airdatapicker
  new AirDatepicker("#data-one", {
    dateFormat: "dd/MM/yyyy",
    clear: "حذف",
    months: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "اكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    autoClose: true,
    position({ $datepicker, $target, $pointer }) {
      let coords = $target.getBoundingClientRect(),
        dpHeight = $datepicker.clientHeight,
        dpWidth = $datepicker.clientWidth;

      let top = coords.y + coords.height / 2 + window.scrollY - dpHeight / 2;
      let left = coords.x + coords.width / 2 - dpWidth / 2;

      $datepicker.style.left = `${left}px`;
      $datepicker.style.top = `${top}px`;

      $pointer.style.display = "none";
    },
  });
  /**
   * ******************************************
   *  1_ tags selector
   * ******************************************
   **/

  // $('#printpdf').click(function() {
  //     $('#invoiceone').printThis({
  //         importCSS: true,
  //         importStyle: true,
  //         loadCSS: [
  //             "style1.css",
  //             "style2.css",
  //             "style3.css"
  //         ],
  //         printContainer: true
  //     });
  // });

  //  end jquery
});
$(document).ready(function () {
  $("#languageselector").selectize({
    maxItems: null,
    valueField: "value",
    labelField: "text",
    searchField: ["text"],
    create: false,
    render: {
      option: function (item, escape) {
        return "<div>" + escape(item.text) + "</div>";
      },
      item: function (item, escape) {
        return (
          "<div>" +
          escape(item.text) +
          ' <span class="remove-item" style="cursor:pointer;"><i class="fa-thin fa-xmark-circle"></i></span></div>'
        );
      },
    },
    onItemAdd: function (value, $item) {
      // Attach click event to the "x" icon to remove the item
      $item.find(".remove-item").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevents the default behavior and stops event bubbling
        var selectize = $("#languageselector")[0].selectize;
        selectize.removeItem(value);
      });
    },
  });
  $("#activityselector").selectize({
    maxItems: null,
    valueField: "value",
    labelField: "text",
    searchField: ["text"],
    create: false,
    render: {
      option: function (item, escape) {
        return "<div>" + escape(item.text) + "</div>";
      },
      item: function (item, escape) {
        return (
          "<div>" +
          escape(item.text) +
          ' <span class="remove-item" style="cursor:pointer;"><i class="fa-thin fa-xmark-circle"></i></span></div>'
        );
      },
    },
    onItemAdd: function (value, $item) {
      // Attach click event to the "x" icon to remove the item
      $item.find(".remove-item").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevents the default behavior and stops event bubbling
        var selectize = $("#activityselector")[0].selectize;
        selectize.removeItem(value);
      });
    },
  });
  $("#weeklydays").selectize({
    maxItems: null,
    valueField: "value",
    labelField: "text",
    searchField: ["text"],
    create: false,
    render: {
      option: function (item, escape) {
        return "<div>" + escape(item.text) + "</div>";
      },
      item: function (item, escape) {
        return (
          "<div>" +
          escape(item.text) +
          ' <span class="remove-item" style="cursor:pointer;"><i class="fa-thin fa-xmark-circle"></i></span></div>'
        );
      },
    },
    onItemAdd: function (value, $item) {
      // Attach click event to the "x" icon to remove the item
      $item.find(".remove-item").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevents the default behavior and stops event bubbling
        var selectize = $("#weeklydays")[0].selectize;
        selectize.removeItem(value);
      });
    },
  });
});
$(document).ready(function () {
  var optionss = [
    { id: 1, title: "English" },
    { id: 2, title: "عربي" }, // Arabic text for 'Arabic'
    { id: 3, title: "Español" },
    { id: 4, title: "Français" },
    { id: 5, title: "Deutsch" },
  ];
  // $("#weeklydays").selectize({
  //     maxItems: null,
  //     valueField: 'id',
  //     labelField: 'title',
  //     searchField: ['title'],
  //     // options: optionss,
  //     create: false,
  //     render: {
  //         option: function(item, escape) {
  //             return '<div>' + escape(item.title) + '</div>';
  //         }
  //     }
  // });
  // $("#languageselector").selectize({
  //     maxItems: null,
  //     valueField: 'id',
  //     labelField: 'title',
  //     searchField: 'title',
  //     options: [

  //     ],
  //     create: false
  // });
  // $("#activityselector").selectize({
  //     maxItems: null,
  //     valueField: 'id',
  //     labelField: 'title',
  //     searchField: 'title',
  //     options: [

  //     ],
  //     create: false
  // });
});

/**
 * ##############################################
 * ## show limte content i a table content
 * ##############################################
 **/
$(document).ready(function () {
  const limit = 2; // Set the word limit

  $(".limited-text").each(function () {
    let fullText = $(this).text();
    let words = fullText.split(" ");

    if (words.length > limit) {
      let visibleText = words.slice(0, limit).join(" ");
      let hiddenText = words.slice(limit).join(" ");

      $(this).html(
        `${visibleText} <span class="dots">...</span><span class="more-text" style="display:none;">${hiddenText}</span> <span class="show-more"> اكثر</span>`
      );

      $(this)
        .find(".show-more")
        .on("click", function () {
          $(this).siblings(".more-text, .dots").toggle();
          $(this).text($(this).text() === " اكثر" ? " اقل" : " اكثر");
        });
    }
  });
});

/**
 * ##############################################
 * ## scroall bars for elemntes
 * ##############################################
 **/
$(document).ready(function () {
  $(".menu1").mCustomScrollbar({
    theme: "minimal-dark",
    autoHideScrollbar: true,
    // langDir:$this.css("direction"),
    // axis: "yx",
    // setLangDir: true // Enable langDir setting
  });
  $(".menu").mCustomScrollbar({
    theme: "minimal-dark",
    autoHideScrollbar: true,
  });
  $(".scroall-1").mCustomScrollbar({
    theme: "minimal-dark",
    scrollbarPosition: "inside",
    autoHideScrollbar: true,
    axis: "y",
  });
  // category horistall scroall bar
  $("#scroall-2").mCustomScrollbar({
    axis: "x",
    // theme: "3d-thick",
    scrollButtons: { enable: true },
    theme: "3d",
    scrollbarPosition: "inside",
    setLeft: 0,
    setright: 0,
    advanced: { autoExpandHorizontalScroll: true }
  });
  $(".scroall-4").mCustomScrollbar({
    theme: "minimal-dark",
    autoHideScrollbar: true,
    // langDir:$this.css("direction"),
    axis: "y",
    setLeft: 0,
    setright: 0,
    // setLangDir: true // Enable langDir setting
  });
});

$(document).ready(function () {
  function validateNumberInput(inputSelector, errorSelector) {
    $(document).on("input", inputSelector, function () {
      var $input = $(this);
      var value = $input.val().trim();
      if (/^[0-9]+$/.test(value)) {
        // Updated to allow empty input
        $input.removeClass("invalid");
        $input.next(errorSelector).hide();
      } else {
        $input.addClass("invalid");
        $input.next(errorSelector).show();
      }
    });
  }
  validateNumberInput(".number-input", ".error");
});
/**
 * ##############################################
 * ## show the right view
 * ##############################################
 **/
$(document).ready(function () {
  // Show the first h2 and make the first button active by default
  $("#view-tpe .content:first").addClass("active");
  $("#view-tpe .type-of-view:first").addClass("active");

  // Add click event to buttons
  $("#view-tpe .type-of-view").click(function () {
    // Remove active class from all buttons and h2s
    $("#view-tpe .type-of-view").removeClass("active");
    $("#view-tpe .content").removeClass("active");

    // Add active class to the clicked button
    $(this).addClass("active");

    // Get the target h2 ID from the data attribute
    var target = $(this).data("target");

    // Show the corresponding h2
    $("#" + target).addClass("active");
  });
});

$(document).ready(function () {
  // Show the first h2 and make the first button active by default
  $("#main-div .content:first").addClass("active");
  $("#main-div .btn:first").addClass("active");

  // Add click event to buttons
  $("#main-div .btn").click(function () {
    // Remove active class from all buttons and h2s
    $("#main-div .btn").removeClass("active");
    $("#main-div .content").removeClass("active");

    // Add active class to the clicked button
    $(this).addClass("active");

    // Get the target h2 ID from the data attribute
    var target = $(this).data("target");

    // Show the corresponding h2
    $("#" + target).addClass("active");
  });
});
$(document).ready(function () {
  // Show the first h2 and make the first button active by default
  $("#catego .content:first").addClass("active");
  $("#catego .btn:first").addClass("active");

  // Add click event to buttons
  $(".order-box-tow33").click(function () {
    // Remove active class from all buttons and h2s
    $(".order-box-tow33").removeClass("active-user-link");
    $("#catego .content").removeClass("active");

    // Add active class to the clicked button
    $(this).addClass("active-user-link");

    // Get the target h2 ID from the data attribute
    var target = $(this).data("target");

    // Show the corresponding h2
    $("#" + target).addClass("active");
  });
});

/**
 * ##############################################
 * ## remove and add classess
 * ##############################################
 **/

$(document).ready(function () {
  $('.type-of-view input[type="checkbox"]').on("change", function () {
    $('.type-of-view input[type="checkbox"]').not(this).prop("checked", false);

    if ($(this).is(":checked")) {
    } else {
    }
  });
});

$(document).ready(function () {
  // Handle main nav links
  $(".nav-link-1").on("click", function () {
    $(".nav-link-1").removeClass("active-link-one");
    $(this).addClass("active-link-one");
  });
  // Handle category items
  $(".order-box-tow").on("click", function () {
    $(".order-box-tow").removeClass("active-three");
    $(this).addClass("active-three");
  });
  // Handle category items
  $(".cateory-tow").on("click", function () {
    $(".cateory-tow").removeClass("active-four");
    $(this).addClass("active-four");
  });

  // Handle dropdown items
  $(".dropdown-item").on("click", function () {
    $(".dropdown-item").removeClass("active-link-one");
    $(this).addClass("active-link-one");
  });
});

/**
 * ##############################################
 * ## 1_ auto filtter code
 * ##############################################
 **/
$(function ($) {
  $.autofilter({
    showClass: "",
    animation: true,
    duration: 100,
  });
});

$(document).ready(function () {
  $(".toggle-btn").on("click", function () {
    var $toggleCircle = $(this).find(".toggle-circle");
    var $content = $(this).closest(".toggle-block").find(".content-to-toggle");
    var onText = $(this).data("on-text");
    var offText = $(this).data("off-text");

    // Toggle the content based on the current state
    if ($toggleCircle.hasClass("bg-custom-color")) {
      // Currently on (نعم), turn off (لا)
      $content.show();
      $toggleCircle.removeClass("bg-custom-color");
    } else {
      // Currently off (لا), turn on (نعم)
      $content.hide();
      $toggleCircle.addClass("bg-custom-color");
    }
  });
});
$(document).ready(function () {
  $("#other-checkbox").change(function () {
    if (this.checked) {
      $("#content-to-toggle").show();
    } else {
      $("#content-to-toggle").hide();
    }
  });
});
/**
 * #######################################################
 * ##  1- owl carosel for section for for hame defeluat ##
 * #######################################################
 **/
$(document).ready(function () {
  $(".outer").each(function (index) {
    var bigCarousel = $(this).find(".big");
    var thumbCarousel = $(this).find(".thumbs");

    bigCarousel
      .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        dots: false,
        loop: false,
        rtl: true,
        responsiveRefreshRate: 200,
        navText: [
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
        ],
      })
      .on("changed.owl.carousel", function (event) {
        syncPosition(event, thumbCarousel);
      });

    thumbCarousel
      .on("initialized.owl.carousel", function () {
        thumbCarousel.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: 10,
        margin: 10,
        rtl: true,
        autoWidth: false,
        dots: false,
        nav: false,
        navText: [
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
        ],
        responsive: {
          0: {
            items: 4,
          },
          600: {
            items: 6,
          },
          1000: {
            items: 6,
          },
        },
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        responsiveRefreshRate: 100,
      })
      .on("changed.owl.carousel", function (event) {
        syncPosition2(event, bigCarousel);
      });

    thumbCarousel.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      bigCarousel.data("owl.carousel").to(number, 300, true);
    });
    $(".horizantal-sc").mCustomScrollbar({
      axis: "x",
      theme: "dark-thin",
    });
  });

  function syncPosition(event, thumbCarousel) {
    var count = event.item.count - 1;
    var current = Math.round(event.item.index - event.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    thumbCarousel
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");

    var onscreen = thumbCarousel.find(".owl-item.active").length - 1;
    var start = thumbCarousel.find(".owl-item.active").first().index();
    var end = thumbCarousel.find(".owl-item.active").last().index();

    if (current > end) {
      thumbCarousel.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbCarousel.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(event, bigCarousel) {
    var number = event.item.index;
    bigCarousel.data("owl.carousel").to(number, 100, true);
  }

  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    // autoWidth: true,
    // autoHeight: true,
    rtl: true,
    margin: 10,
    dots: true,
    nav: false,

    autoHeight: true, // Enable auto height
    // onInitialized: setEqualHeight, // Callback after initialization
    // onResized: setEqualHeight, // Callback after resizing

  });
});

// $(document).ready(function () {
//   var bigimage = $(".big");
//   var thumbs = $(".thumbs");
//   //var totalslides = 10;
//   var syncedSecondary = true;

//   bigimage
//     .owlCarousel({
//       items: 1,
//       slideSpeed: 2000,
//       nav: false,
//       // autoplay: true,
//       dots: false,
//       loop: false,
//       rtl: true,
//       responsiveRefreshRate: 200,
//       navText: [
//         '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
//         '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
//       ],
//     })
//     .on("changed.owl.carousel", syncPosition);

//   thumbs
//     .on("initialized.owl.carousel", function () {
//       thumbs.find(".owl-item").eq(0).addClass("current");
//     })
//     .owlCarousel({
//       items: 10,
//       margin: 10,
//       rtl: true,
//       autoWidth: false,
//       dots: false,
//       nav: false,
//       navText: [
//         '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
//         '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
//       ],
//       responsive: {
//         0: {
//           items: 4,
//         },
//         600: {
//           items: 6,
//         },
//         1000: {
//           items: 6,
//         },
//       },
//       smartSpeed: 200,
//       slideSpeed: 500,
//       slideBy: 4,
//       responsiveRefreshRate: 100,
//     })
//     .on("changed.owl.carousel", syncPosition2);

//   function syncPosition(el) {
//     //if loop is set to false, then you have to uncomment the next line
//     //var current = el.item.index;

//     //to disable loop, comment this block
//     console.log(el);
//     var count = el.item.count - 1;
//     var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

//     if (current < 0) {
//       current = count;
//     }
//     if (current > count) {
//       current = 0;
//     }
//     //to this
//     thumbs
//       .find(".owl-item")
//       .removeClass("current")
//       .eq(current)
//       .addClass("current");
//     var onscreen = thumbs.find(".owl-item.active").length - 1;
//     console.log(onscreen);
//     var start = thumbs.find(".owl-item.active").first().index();
//     var end = thumbs.find(".owl-item.active").last().index();
//     console.log(end);
//     if (current > end) {
//       thumbs.data("owl.carousel").to(current, 100, true);
//     }
//     if (current < start) {
//       thumbs.data("owl.carousel").to(current - onscreen, 100, true);
//     }
//   }

//   function syncPosition2(el) {
//     if (syncedSecondary) {
//       var number = el.item.index;
//       bigimage.data("owl.carousel").to(number, 100, true);
//     }
//   }

//   thumbs.on("click", ".owl-item", function (e) {
//     e.preventDefault();
//     var number = $(this).index();
//     bigimage.data("owl.carousel").to(number, 300, true);
//   });
// });
/**
 * ##############################################
 * ##  2- video paly section
 * ##############################################
 **/
$(document).ready(function () {
  $("#playIcon").on("click", function () {
    $(this).hide();
    var video = $("#myVideo")[0];
    video.style.display = "block";
    video.play();
    video.controls = true;
  });

  $("#myVideo").on("ended", function () {
    $("#playIcon").show();
  });
});

/**
 * ##############################################
 * ##  3- custom Scraoll bar 
 * ##############################################
 **/
$(document).ready(function () {
  $(".horizantal-sc").mCustomScrollbar({
    axis: "x",
    theme: "dark-thin",
  });
});
$(document).ready(function () {
  let isLocked = false;
  let timerInterval;

  // Automatically move to the next input field
  $('.otp-input').on('keyup', function (e) {
    if ($(this).val().length === 1) {
      $(this).next('.otp-input').focus();
    }
  });

  // Verify button click event
  $('#verify-btn').on('click', function () {
    if (isLocked) return;

    let otp = '';
    $('.otp-input').each(function () {
      otp += $(this).val();
    });

    if (otp === '1234') { // Example correct OTP
      // alert('OTP Verified Successfully');
      $('#timer').text(`تمت عملية التحقق بنجاح`).show();
    } else {
      startTimer();
    }
  });

  function startTimer() {
    let timeLeft = 60;
    $('#timer').text(`اعد المحاولة بعد ${timeLeft} ثانية`).show();
    isLocked = true;
    $('.otp-input').prop('disabled', true);
    $('#verify-btn').prop('disabled', true);

    timerInterval = setInterval(function () {
      timeLeft--;
      $('#timer').text(`اعد المحاولة بعد ${timeLeft} ثانية`);

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        $('#timer').hide();
        isLocked = false;
        $('.otp-input').prop('disabled', false).val('');
        $('#verify-btn').prop('disabled', false);
      }
    }, 1000);
  }
});
$(document).ready(function () {
  // Initialize Emoji Picker
  const picker = new EmojiButton();
  picker.on('emoji', emoji => {
    $('#chat-input').val($('#chat-input').val() + emoji);
  });

  $('#emoji-btn').on('click', function () {
    picker.togglePicker(this);
  });

  // Image Upload
  $('#image-btn').on('click', function () {
    $('#image-upload').click();
  });

  $('#image-upload').on('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#chat-output').append('<div><img src="' + e.target.result + '" width="200"></div>');
      };
      reader.readAsDataURL(file);
    }
  });

  // Sound Recording (simplified)
  let mediaRecorder;
  let audioChunks = [];

  $('#record-btn').on('click', function () {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      $('#record-btn').text('🎤');
    } else {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        $('#record-btn').text('🔴 Recording');
        mediaRecorder.ondataavailable = event => {
          audioChunks.push(event.data);
        };
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg-3' });
          audioChunks = [];
          const audioUrl = URL.createObjectURL(audioBlob);
          $('#chat-output').append('<div><audio controls src="' + audioUrl + '"></audio></div>');
        };
      });
    }
  });

  // Send Button
  $('#send-btn').on('click', function () {
    const message = $('#chat-input').val();
    if (message.trim() !== '') {
      $('#chat-output').append('<div>' + message + '</div>');
      $('#chat-input').val('');
    }
  });
});


/**
 * ##############################################
 * ##  3- hid and show passwoed field
 * ##############################################
 **/
$(document).ready(function () {
  $('.toggle-password').on('click', function () {
    // Toggle the type attribute
    const passwordField = $(this).siblings('.password');
    const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);

    // Toggle the icon
    $(this).toggleClass('fa-eye fa-eye-slash');
  });
});

/**
 * ##############################################
 * ##  only one checkbox is ckli
 * ##############################################
 **/
$(document).ready(function () {
  $('.single-checkbox').on('change', function () {
    // Uncheck all checkboxes
    $('.single-checkbox').not(this).prop('checked', false);

    // Show/Hide hidden box based on the state of the second checkbox
    if ($('#checkbox2').is(':checked')) {
      $('#hiddenBox2').show();
    } else {
      $('#hiddenBox2').hide();
    }
    if ($('#checkbox3').is(':checked')) {
      $('#hiddenBox3').show();
    } else {
      $('#hiddenBox3').hide();
    }
    if ($('#checkbox4').is(':checked')) {
      $('#hiddenBox4').show();
    } else {
      $('#hiddenBox4').hide();
    }
  });
  $('.single-checkbox2').on('change', function () {
    $('.single-checkbox2').not(this).prop('checked', false);
  });
});


/**
 * ##############################################
 * ##  country slect
 * ##############################################
 **/
$("#country_selector").countrySelect({
  defaultCountry: "sa",
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // responsiveDropdown: true,
  preferredCountries: ['ca', 'gb', 'us']
});
$("#country_selector2").countrySelect({
  defaultCountry: "sa",
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // responsiveDropdown: true,
  preferredCountries: ['ca', 'gb', 'us']
});

/**
 * ##############################################
 * ##  copy text inside elemnt
 * ##############################################
 **/

$(document).ready(function () {
  $(".copy-button").click(function () {
    var $copyText = $(this).siblings(".copy-text").text();
    var $message = $(this).siblings(".copy-message");

    // Create a temporary input element to copy text
    var tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val($copyText).select();
    document.execCommand("copy");
    tempInput.remove();

    // Show the message and hide it after 10 seconds
    $message.addClass('show');
    setTimeout(function () {
      $message.removeClass('show');
    }, 200); // Hide after 10 seconds
  });
});


// show test-menu

$(documen).ready(function () {


});