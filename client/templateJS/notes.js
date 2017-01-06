Template.notes.events({
  'click #supp'(event, template) {
    event.preventDefault();
    notes.remove(this._id);
  }
});

Template.notes.helpers({
  list_notes: function() {
    return notes.find();
  }
});