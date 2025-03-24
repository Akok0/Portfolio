fetch("/version.txt")
  .then(response => response.text())
  .then(version => {
    if (localStorage.getItem("site_version") !== version) {
      localStorage.setItem("site_version", version);
      location.reload(true);
    }
  });
