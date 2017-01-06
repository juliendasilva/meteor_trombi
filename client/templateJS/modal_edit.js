Template.modal_edit.helpers({
  editEleve: function() {
    return eleves.findOne(Session.get('eleveSelected'));
  }
});

Template.modal_edit.events({
  'click #updateEleve'(event, template) {
    event.preventDefault();
    const prenom     = template.find("#prenom").value;
    const nom        = template.find("#nom").value;
    const classe     = template.find("#classe").value;
    const groupe     = template.find("#groupe").value;
    const mail       = template.find("#mail").value;
    const age        = template.find("#age").value;
    const specialite = template.find("#specialite").value;
    // eleves.insert({prenom: prenom, nom: nom, classe: classe, groupe: groupe, mail: mail, age: age, specialite})
    eleves.update(Session.get('eleveSelected'), {
      $set: {prenom: prenom, nom: nom, classe: classe, groupe: groupe, mail: mail, age: age, specialite}
    });
  },
  'click #suppStudent'(event, template) {
    eleves.remove(Session.get('eleveSelected'));
    Session.set('eleveSelected', eleves.find().fetch()[0]._id);
  }
});