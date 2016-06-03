var yoyo = require('yo-yo');
var layout = require('../layout');
var pictureCard = require('../picture-card');
var translate = require('../translate');
var request = require('superagent');

module.exports = function (pictures) {
  var element = yoyo

  `<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
        <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onSubmit}>
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <span><i class="fa fa-camera" aria-hidden="true"></i> ${translate.message('upload.text')}</span>
            <input name="picture" id="file" type="file" class="upload" onchange=${onChange}/>
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate.message('upload.btn-text')}</button>
          <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-times" arria-hidden="true"></i></button>
        </form>
      </div>
    </row>
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${  pictures.map( function (picture) {
              return pictureCard(picture);
            }) }
      </div>
    </div>
  </div>`;

  function toggleButtons() {
    document.getElementById('fileName').classList.toggle('hide');
    document.getElementById('btnUpload').classList.toggle('hide');
    document.getElementById('btnCancel').classList.toggle('hide');
  }

  function cancel() {
    toggleButtons();
    document.getElementById('formUpload').reset();
  }

  function onChange() {
    toggleButtons();
  }

  function onSubmit(event) {
    var data = new FormData(this);

    event.preventDefault();
    request
      .post('/api/pictures')
      .send(data)
      .end( function (error, response) {
        console.log(arguments);
      });
  }

  return layout(element);
}
