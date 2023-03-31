document.getElementById('goUrlForm').addEventListener('submit', function (e) {
  let creating = browser.tabs.create({
    url: "localhost:4545/" + e.target.slug.value,
    active: true
  });
  creating.then(() => {
    console.log("created")
  }, () => {
    console.log("failed")
  });
});