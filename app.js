(function() {
  hello.init(
    {
      joinme: "acfwmje3yrhz3nmmpd943whd"
    },
    {
      scope: "start_meeting",
      redirect_uri: "http://178.128.100.249/livestream-joinme/redirect.html",
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
    }
  });
}
