/**
 * @description Change Home page slider's arrows active status
 */

function updateSliderArrowsStatus(
    cardsContainer,
    containerWidth,
    cardCount,
    cardWidth
  ) {
    if (
      $(cardsContainer).scrollLeft() + containerWidth <
      cardCount * cardWidth + 15
    ) {
      $("#slide-right-container1").addClass("active");
    } else {
      $("#slide-right-container1").removeClass("active");
    }
    if ($(cardsContainer).scrollLeft() > 0) {
      $("#slide-left-container1").addClass("active");
    } else {
      $("#slide-left-container1").removeClass("active");
    }
  }
  $(function() {
    // Scroll products' slider left/right
    let div = $("#cards-container");
    let cardCount = $(div)
      .find(".cards")
      .children(".card").length;
    let speed = 1000;
    let containerWidth = $(".container").width();
    let cardWidth = 390
  
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  
    //Remove scrollbars
    $("#slide-right-container1").click(function(e) {
      if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
        $(div).animate(
          {
            scrollLeft: $(div).scrollLeft() + cardWidth
          },
          {
            duration: speed,
            complete: function() {
              setTimeout(
                updateSliderArrowsStatus(
                  div,
                  containerWidth,
                  cardCount,
                  cardWidth
                ),
                1005
              );
            }
          }
        );
      }
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });
    $("#slide-left-container1").click(function(e) {
      if ($(div).scrollLeft() + containerWidth > containerWidth) {
        $(div).animate(
          {
            scrollLeft: "-=" + cardWidth
          },
          {
            duration: speed,
            complete: function() {
              setTimeout(
                updateSliderArrowsStatus(
                  div,
                  containerWidth,
                  cardCount,
                  cardWidth
                ),
                1005
              );
            }
          }
        );
      }
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });
  
    // If resize action ocurred then update the container width value
    $(window).resize(function() {
      try {
        containerWidth = $("#cards-container").width();
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
      } catch (error) {
        console.log(
          `Error occured while trying to get updated slider container width: 
              ${error}`
        );
      }
    });
  });

  var modal = document.getElementById('myModal');
  var div_open = document.getElementById("myBtn");
  var div_close = document.getElementsByClassName("btn_close")[0];

  div_open.onclick = function() {
    modal.style.display = "block";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  }

  div_close.onclick = function() {
    modal.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
  }

  //window.onclick = function(event) {
  //  if (event.target == modal) {
  //    modal.style.display = "none";
  //  }
  //}

  

  //var div = document.getElementById("myBtn");
  //div.onclick = function (e) {
  //var e = e || window.event;
  //var target = e.target || e.srcElement;
  //if (this == target) alert("Вместо меня должно стоять модальное окно");
  //}

