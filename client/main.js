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

Template.notes.helpers({
  list_notes: function() {
  	var notes = [12, 14, 9, 10];
    return notes;
  }
});

Template.contact_list.events({
  'click #addEleves'(event, instance) {
    eleves.insert({})
  }
});

