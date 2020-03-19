(function() {
  hello.init(
    {
      joinme: "acfwmje3yrhz3nmmpd943whd"
    },
    {
      scope: "start_meeting",
      redirect_uri: "http://localhost/",
      state: "LIVE",
      response_type: "code",
      display: "popup"
    }
  );
})();

function login() {
  hello.login("joinme", res => {
    if (res.error) {
      const { message } = res.error;
      return alert(message);
    } else {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      console.log(code);
    }
  });
}
