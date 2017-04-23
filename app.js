import {OssecifyService, ArgumentService} from "./src";

// create parser services
const argService = new ArgumentService();
const beautyService = new OssecifyService(argService.parseAll());

// trigger the beautify
beautyService.beautify();

console.log("Done");
