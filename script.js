$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");

    // Show the side letter after the fly-out animation finishes
    setTimeout(() => {
      document.body.classList.add("show-side-letter");
    }, 900);
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    document.body.classList.remove("show-side-letter");
  }
});
