// export const logger = require("pino")();

class Logger {
  RED: string;
  GREEN: string;
  YELLOW: string;
  BLUE: string;
  PURPLE: string;
  RESET: string;

  constructor() {
    this.RED = "\x1b[31m";
    this.GREEN = "\x1b[32m";
    this.YELLOW = "\x1b[33m";
    this.BLUE = "\x1b[34m";
    this.PURPLE = "\x1b[35m";
    this.RESET = "\x1b[0m";
  }

  timestamp() {
    const timeRaw = new Date().toISOString();
    const timeFormatted = timeRaw.slice(5, 19).replace("T", " ");
    return `${this.BLUE}${timeFormatted}${this.RESET}`;
  }

  info(data: any, message: string) {
    console.log(`[${this.timestamp()}] ${this.PURPLE}${message}${this.RESET}: `, data);
  }

  error(error: any) {
    console.log(`[${this.timestamp()}] ${this.RED}ERROR${this.RESET} ${error}`);
  }
}

export const logger = new Logger();
