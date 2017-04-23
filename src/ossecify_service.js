import LineByLineReader from "line-by-line";


export class OssecifyService {

    constructor(args) {
        this.args = args;
        this.events = [];
    }

    /**
     * Trigger Beautify and attach events
     */
    beautify() {
        this.lr = new LineByLineReader(this.args.file);

        // register event handlers
        this.lr.on("error", (err) => this.error_handler(err));
        this.lr.on("line", (line) => this.line_handler(line));
        this.lr.on("end", () => this.end_handler());
    }

    /**
     * Handle error events for the line walker
     * @param err
     */
    error_handler(err) {
        console.log(`Problem encountered. Detail:${err.message}`);
    }

    /**
     * Handle a new incoming line event
     * @param line
     */
    line_handler(line) {
        this.events.push(JSON.parse(line));
    }

    /**
     * Handle the end
     */
    end_handler() {

    }
}
