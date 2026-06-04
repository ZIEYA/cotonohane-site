/* 日本語 / English の切り替え。デフォルトは日本語。 */
function setLang(l) {
  document.documentElement.setAttribute("data-lang", l);
  var btns = document.querySelectorAll("[data-lang-btn]");
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.toggle("active", btns[i].getAttribute("data-lang-btn") === l);
  }
  try { document.documentElement.lang = (l === "en") ? "en" : "ja"; } catch (e) {}
}
document.addEventListener("DOMContentLoaded", function () {
  setLang("ja");
});
