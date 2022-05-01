
import { DateTime } from "luxon";

import { say, DEFAULT_COW, DRAGON, HEDGEHOG, SHEEP, SQUIRREL, TUX  } from 'cowsay';

import { Animal } from 'animal-vegetable';

const parser = new UAParser();

class Prompt {

  type = 'login';
  hostname = 'www';
  domain = window.location.hostname;
  browser = parser.getBrowser();
  os = parser.getOS();


  /**
   * @param String type login,password or command
   */
  constructor(theme) {
    this.theme = theme;
  }

  header() {
    const dt = DateTime.now();
    return `Welcome to ${this.hostname}.${this.domain} (${this.browser.name}) ${ dt.toLocaleString( DateTime.DATETIME_MED ) }`;
  }

  get email() {
    const email = atob(`dzhpOG9jMHR6QG1vem1haWwuY29t`);
    return `${this.theme.green}${email}${this.theme.foreground}`;
  }

  motd() {
    return `\r\n${this.theme.foreground}This site is pending construction.\r\n\r\n${this.theme.foreground}To ${this.theme.yellow}collaborate${this.theme.foreground} please contact me on ${this.email}.\r\n\r\n`;
  }

  wisewords() {
    const said = Animal.say();
    return `${said.quote} - ${said.author}`;
  }

  cow() {
    const cows = [DEFAULT_COW, DRAGON, HEDGEHOG, SHEEP, SQUIRREL, TUX];
    const rand = cows[Math.floor(Math.random()*cows.length)];
    console.log(rand);
    return rand;
  }

  cowsay() {
    return say({
      text: this.wisewords(),
      cow: this.cow(),
      wrap: false,
      wrapLength: 80
    }).split("\n");
  }

  get value() {

    switch(this.type) {

      case "login":
        return `${this.theme.white}${this.hostname} login: `
        break;

      case "password":
        return `${this.theme.white}Password: `;
        break;

      default:
        return `${this.username}@${this.hostname}:~$ `

    }

  }

}

export { Prompt } ;
