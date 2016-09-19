var fs = require('fs');
var request = require('request');


exports.pwd = function(filename, done) {
  done(process.env.PWD);
}

exports.ls = function(filename, done) {
  var outstr = '';
  return fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      outstr += file.toString() + "\n";
    });
    done(outstr);
})}

exports.echo = function(filename, done) {
  if (filename[0] === "$") {
    var restArg = filename.slice(1);
    done(process.env[restArg] + "\n");
  } else {
    done(filename + "\n");
  }
}

exports.cat = function(filename, done) {
  return fs.readFile(filename, function(err, data) {
    if (err) throw err;
  done(data.toString());
  });
}

exports.head = function(filename, done) {
  return fs.readFile(filename, function(err, data) {
    if (err) throw err;
  var textArr = data.toString().split("\n");
  done(textArr.slice(0, 10).join("\n"));
  });
}

exports.tail = function(filename, done) {
  return fs.readFile(filename, function(err, data) {
    if (err) throw err;
  var textArr = data.toString().split("\n");
  done(textArr.slice(textArr.length - 10).join("\n"));
  });
}

exports.wc = function(filename, done) {
  return fs.readFile(filename, function(err, data) {
    if (err) throw err;
  var textArr = data.toString().split("\n");
  done(textArr.length.toString() + "\n");
  });
}

exports.sort = function(filename, done) {
  return fs.readFile(filename, function(err, data) {
    if (err) throw err;
  var textArr = data.toString().split("\n").sort();
  done(textArr.join("\n"));
  });
}

exports.uniq = function(filename, done) {
  return fs.readFile(filename, function(err, data) {
    if (err) throw err;
  var textArr = data.toString().split("\n").sort()
  var newArr = []
  textArr.forEach(function(item, i) {
    if (textArr[i] !== textArr[i - 1]) {
      newArr.push(item);
    }
  });
  done(newArr.join("\n"));
  });
}

exports.curl = function(filename, done) {
  var reqObj = request.get("http://" + filename + "\n");
  var reqStr = "";
  for (var key in reqObj) {
    if (reqObj.hasOwnProperty(key)) {
      console.log(key, reqObj[key]);
      //reqStr = (key, reqObj[key]);
    }
  }
  console.log(reqStr);
  //curldone(reqStr);
}
