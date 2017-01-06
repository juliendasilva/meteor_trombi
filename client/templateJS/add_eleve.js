Template.modal.events({
  'click #enregisterEleve'(event, template) {
    const prenom     = template.find("#prenom").value;
    const nom        = template.find("#nom").value;
    const classe     = template.find("#classe").value;
    const groupe     = template.find("#groupe").value;
    const mail       = template.find("#mail").value;
    const age        = template.find("#age").value;
    const specialite = template.find("#specialite").value;
    eleves.insert({prenom: prenom, nom: nom, classe: classe, groupe: groupe, mail: mail, age: age, specialite})
  }
});