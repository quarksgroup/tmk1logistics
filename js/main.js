$(function () {
  $("form#contact-form").on("submit", function (e) {
    e.preventDefault();
    var names = $("#contact-form input#names").val();
    var phone = $("#contact-form input#phone").val();
    var email = $("#contact-form input#email").val();
    var service = $("#contact-form select#service").val();
    var message = $("#contact-form textarea#message").val();
    const TID = "template_r5woika";
    const SID = "service_u2zr2e4";

    const params = {
      names,
      email,
      service,
      phone,
      message,
    };
    console.log(params);
    $this = $("#submit-btn");
    $this.prop("disabled", true);
    $this.addClass("load");
    emailjs
      .send(SID, TID, params)
      .then(function (res) {
        alert("Email sent successfully.");
      })
      .catch(function (err) {
        console.log(err);
        alert("Failed to send message");
      })
      .finally(() => {
        $this.prop("disabled", false);
        $this.removeClass("load");
      });
  });
});
