// Function to load a jQuery script

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    // For IE
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // For others
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Load jQuery and then run a function after it's loaded
loadScript("https://code.jquery.com/jquery-3.6.0.min.js", function () {
  // jQuery-dependent code can be placed here
  $(function () {
    // Add a click event handler to the button
    $(".btn.icon-no-margin").on("click", function () {
      // Add the desired class to the footer with class "custom-footer"
      $(".custom-footer").addClass("adjust-footer");
      console.log("Tell me if this is working!");
    });
  });
  // Function to change the text "Receive a grade" to "Take the assessment"
  $(function () {
    // Target the id and alter the inner text of the span element.
    $("#take-the-assessment").text("Take the assessment");
  });

  $(function () {
    // Add a click event handler to the button
    $(".btn.drawertoggle.icon-no-margin").on("click", function () {
      // remove the class from the footer which was added with class "custom-footer"
      $(".custom-footer").removeClass("adjust-footer");
      console.log("Let me know if this is working!");
    });
  });
});
