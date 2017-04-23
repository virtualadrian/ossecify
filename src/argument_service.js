import {ArgumentParser} from "argparse";


/**
 * Handle any command line args
 */
export class ArgumentService {

    /**
     * constructor creates Arg Parser
     * adds the default arguments
     */
    constructor(){
        this.ap = new ArgumentParser({
            version: "0.0.1",
            addHelp: true,
            description: "Argparse Lib"
        });

        this.addArguments();
    }

    /**
     * Add the default arguments and help text
     */
    addArguments() {
        this.ap.addArgument(["-f", "--file"], {
            help: "The JSON file to beautify."
        });
        this.ap.addArgument(["-o", "--out"], {
            help: "The output file post beautify."
        });
    }

    /**
     * Parse all the arguments and return the parser
     * @returns {ArgumentParser}
     */
    parseAll() {
        this.ap.parseArgs();
        return this.ap;
    }
}