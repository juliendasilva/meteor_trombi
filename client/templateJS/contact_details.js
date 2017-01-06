Template.contact_details.helpers({
  eleveSelected: function() {
    return eleves.findOne(Session.get('eleveSelected'));
  }
});