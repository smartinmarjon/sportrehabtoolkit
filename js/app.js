
function printPage(){ window.print(); }
function setToday(inputId){
  const el = document.getElementById(inputId);
  if(el && !el.value){ el.value = new Date().toISOString().slice(0,10); }
}
