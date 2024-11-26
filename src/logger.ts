// export const logger = require("pino")();

class Logger {
  BLUE: string;
  GREEN: string;
  RED: string;
  RESET: string;

  constructor() {
    this.BLUE = "\x1b[34m";
    this.GREEN = "\x1b[32m";
    this.RED = "\x1b[31m";
    this.RESET = "\x1b[0m";
  }

  timestamp() {
    const timeRaw = new Date().toISOString();
    const timeFormatted = timeRaw.slice(5, 19).replace("T", " ");
    return `${this.BLUE}${timeFormatted}${this.RESET}`;
  }

  info(data: any, message: string) {
    console.log(`[${this.timestamp()}] ${this.GREEN}INFO${this.RESET} ${message}: `, data);
  }

  error(error: any) {
    console.log(`[${this.timestamp()}] ${this.RED}ERROR${this.RESET} ${error}`);
  }
}

export const logger = new Logger();
