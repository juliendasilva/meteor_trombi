import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });


Template.contact_list.helpers({
  list_eleve: function() {
    return eleves.find();
  }
});

Template.contact_details.helpers({
  eleveSelected: function() {
    console.log(window.eleveSelected);
    return window.eleveSelected;
  }
});

Template.modal.events({
  'click #enregister'(event, template) {
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

Template.contact_list.events({
  'click #eleve_selectionner'(event, template) {
    // console.log(this);
    window.eleveSelected = this;
    // console.log(window.eleveSelected)

  }
});
