var commands = require('./commands');


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  //console.log(cmd)

  if (cmd === "pwd") {
    commands.pwd(cmd, done);
  } else if (cmd === "ls") {
    commands.ls(cmd, done);
  } else if (cmd.slice(0, 4) === "echo") {
    var arg = cmd.slice(5);
    commands.echo(arg, done);
  } else if (cmd.slice(0, 3) === "cat") {
    var arg = cmd.slice(4);
    commands.cat(arg, done);
  } else if (cmd.slice(0, 4) === "head") {
    var arg = cmd.slice(5);
    commands.head(arg, done);
  } else if (cmd.slice(0, 4) === "tail") {
    var arg = cmd.slice(5);
    commands.tail(arg, done);
  } else if (cmd.slice(0, 2) === "wc") {
    var arg = cmd.slice(3);
    commands.wc(arg, done);
  } else if (cmd.slice(0, 4) === "sort") {
    var arg = cmd.slice(5);
    commands.sort(arg, done);
  } else if (cmd.slice(0, 4) === "uniq") {
    var arg = cmd.slice(5);
    commands.uniq(arg, done);
  } else if (cmd.slice(0, 4) === "curl") {
    var arg = cmd.slice(5);
    commands.curl(arg, done);
  } else if (cmd === "date") {
    var date = new Date();
    process.stdout.write(date.toString());
    process.stdout.write('\nprompt > ');
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }


});

var done = function(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}
