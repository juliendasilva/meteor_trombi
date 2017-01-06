import {Session} from 'meteor/session'
Template.contact_list.events({
  'click #suppStudent'(event, template) {
    event.preventDefault();
    eleves.remove(this._id);
    Session.set('eleveSelected', eleves.find().fetch()[0]._id);
  }
});

Template.contact_list.events({
  'click #eleve_selectionner'(event, template) {
    Session.set('eleveSelected', this._id);
  }
});

Template.contact_list.helpers({
  list_eleve: function() {
    return eleves.find();
  }
});

Template.contact_list.rendered = function() {
  const DBReady = function() {
    clearInterval(waitDB);
    Session.set('eleveSelected', eleves.find().fetch()[0]._id);
  };
  const waitDB  = setInterval(function() {
    if (eleves.find().fetch()[0]) {
      DBReady()
    }
  }, 3);
};

