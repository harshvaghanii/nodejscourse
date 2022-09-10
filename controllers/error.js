exports.pageNotFound = (req, res) => {
  res.status(404).render("404", {
    pageTitle: "Error 404!",
    path: "/error",
  });
};
