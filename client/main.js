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

Template.notes.helpers({
  list_notes: function() {
    return notes.find();
  }
});

Template.notes_data.helpers({
  moyenneEleve: function() {
    var sum = 0;
    var i   = 0;
    notes.find().fetch().forEach(function(note) {
      sum += parseInt(note.note);
      i++;
    });
    sum /= i;
    return sum;
  },
  list_notes: function() {
    return notes.find();
  },
  sumTrimestreOne: function() {
    var sumTrimestreOne = 0;
    var i               = 0;
    notes.find().fetch().forEach(function(note) {
      if (note.trimestre == 1) {
        sumTrimestreOne += parseInt(note.note);
        i++;
      }
      ;
    });
    sumTrimestreOne /= i;
    return sumTrimestreOne;
  },
  sumTrimestreTwo: function() {
    var sumTrimestreTwo = 0;
    var i               = 0;
    notes.find().fetch().forEach(function(note) {
      if (note.trimestre == 2) {
        sumTrimestreTwo += parseInt(note.note);
        i++;
      }
      ;
    });
    sumTrimestreTwo /= i;
    return sumTrimestreTwo;
  },
  sumTrimestreThree: function() {
    var sumTrimestreThree = 0;
    var i                 = 0;
    notes.find().fetch().forEach(function(note) {
      if (note.trimestre == 3) {
        sumTrimestreThree += parseInt(note.note);
        i++;
      }
      ;
    });
    sumTrimestreThree /= i;
    return sumTrimestreThree;
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

Template.modal_note.events({
  'click #enregister'(event, template) {
    var note      = parseInt(template.find("#inputNote").value);
    var matiere   = template.find("#inputMatiere option:selected").value;
    var trimestre = template.find("#inputTrimestre option:selected").value;
    notes.insert({note: note, matiere: matiere, trimestre: trimestre})

  }
});

Template.notes.events({
  'click #supp'(event, template) {
    event.preventDefault();
    notes.remove(this._id);
  }
});

Template.contact_list.events({
  'click #suppStudent'(event, template) {
    event.preventDefault();
    eleves.remove(this._id);
  }
});

Template.contact_list.events({
  'click #eleve_selectionner'(event, template) {
    // console.log(this);
    window.eleveSelected = this;
    // console.log(window.eleveSelected)

  }
});
