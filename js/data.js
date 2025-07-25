 function goToDetail(data) {
  localStorage.setItem("selectedCity", JSON.stringify(data));
  window.location.href = "../html/detalle.html";
}
window.goToDetail = goToDetail;