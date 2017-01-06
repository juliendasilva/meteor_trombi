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

Template.modal.events({
  'click #enregister'(event, template) {
    var prenom     = template.find("#prenom").value;
    var nom        = template.find("#nom").value;
    var classe     = template.find("#classe").value;
    var groupe     = template.find("#groupe").value;
    var mail       = template.find("#mail").value;
    var age        = template.find("#age").value;
    var specialite = template.find("#specialite").value;
    eleves.insert({prenom: prenom, nom: nom, classe: classe, groupe: groupe, mail: mail, age: age, specialite})
  }
});

