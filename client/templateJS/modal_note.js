Template.modal_note.events({
  'click #enregister'(event, template) {
    var note      = parseInt(template.find("#inputNote").value);
    var matiere   = template.find("#inputMatiere option:selected").value;
    var trimestre = template.find("#inputTrimestre option:selected").value;
    notes.insert({note: note, matiere: matiere, trimestre: trimestre});
  }
});