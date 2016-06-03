var yoyo = require('yo-yo');
var layout = require('../layout');
var pictureCard = require('../picture-card');
var translate = require('../translate');

module.exports = function (pictures) {
  var element = yoyo

  `<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
        <form enctype="multipart/form-data" class="form-upload">
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <span><i class="fa fa-camera" aria-hidden="true"></i> ${translate.message('upload.text')}</span>
            <input name="picture" id="file" type="file" class="upload"/>
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate.message('upload.btn-text')}</button>
          <button id="btnCancel" type="button" class="btn btn-flat red hide"><i class="fa fa-times" arria-hidden="true"></i></button>
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

  return layout(element);
}
