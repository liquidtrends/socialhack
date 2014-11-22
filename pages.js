var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.index = function(req, res) {
  User.create({
    Name : 'Todd',
    Password : 'passwd',
    Office : 'Guatemala',
    Position : 'Master of Poverty',
    Expertise : ['penniless', 'homeless', 'hairless'],
    Picture : 'some pic file',
    ContactInfo : {
      Phone : '555-867-5309',
      Fax : '999999',
      Email : 'povs@mail.com'
    }
  },
  function (err, user) {
    var strOutput;
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    if (err) {
      console.log(err);
      strOutput = "Oh noes, you've got an error";
    } else {
      console.log('User created: ' + user);
      strOutput = user.Name + ' created at ' + user.Location;
    }
    res.write(strOutput);
    res.send();
    });
};
