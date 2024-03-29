
import { Terminal } from 'xterm';

import { FitAddon } from 'xterm-addon-fit';

import { Prompt } from './prompt';
import { Theme } from './theme';

const term = new Terminal({
  fontFamily: "monospace",
  cursorBlink: true,
  cursorStyle: "block",
  altClickMovesCursor: false,
  convertEol: false,
  rightClickSelectsWord: true,
  disableStdin: false,
  rows: 40
  //logLevel: "debug",
});

const fitAddon = new FitAddon()
term.loadAddon(fitAddon);

let lineBuffer = '';
let entries = [];
let prompt = new Prompt(Theme);

term.open(document.getElementById('terminal'));

term.writeln(prompt.header());
prompt.cowsay().forEach(line => term.writeln(line) );

term.write(prompt.motd());
term.write(prompt.value);
term.focus();

fitAddon.fit();

term.onKey( (k, e)  => {

  if(k.key.charCodeAt(0)) {

    switch(k.key) {

      case "\u007f":
        if(lineBuffer.length) {
          lineBuffer = lineBuffer.slice(0, -1);
          term.write("\b \b");
        }
        break;

      default:
        if(prompt.type == 'password') {
          term.write("*");
        } else {
          lineBuffer += k.key;
          term.write(k.key);
        }
    }

    if(k.key == "\r") {
      entries.push(lineBuffer);
      lineBuffer = "";

      switch(prompt.type) {
        case "login":
          prompt.type = "password";
          term.write("\r\n");
          term.write(prompt.value);
          break;
        case "password":
          term.write("\r\n");
          setTimeout(() => {
            term.writeln("\r\nLogin incorrect");
            prompt.type = "login";
            term.write(prompt.value);
          }, 3000);
          break;
        default:
          prompt.type = "command";
          term.write(prompt.value);

      }
    }

  }


});

