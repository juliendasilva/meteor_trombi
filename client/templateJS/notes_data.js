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