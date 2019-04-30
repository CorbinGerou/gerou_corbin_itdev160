var modal = document.getElementById('modal-dialog');
var btnNew = document.getElementById('new-button');
var span = document.getElementById('edit-title-message');
var btnCancle = document.getElementById('cancle-button');
var btnSave = document.getElementById('save-button');

btnNew.onclick = function openModal() {
  modal.style.display = "block";
}

btnCancle.onclick = function closeModal() {
  modal.style.display = "none";
}

btnSave.onclick = function saveContent() {
  var content = document.getElementById('edit-content-text');
  var contentText = content.getElementById['edit-content-text'].value;
  var userText = document.getElementById('display-content');
  document.writeIn('display-content') = contentText.value;


}
