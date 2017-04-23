const LineByLineReader = require('line-by-line'),
const Parserrequire('argparse').ArgumentParser;
var ap = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Argparse example'
});

// input file parameter
ap.addArgument([ '-f', '--file' ], {
    help: 'The JSON file to beautify.'
});

// output file parameter
ap.addArgument([ '-o', '--out' ], {
    help: 'The output file post beautify.'
});

const args = ap.parseArgs();
const lr = new LineByLineReader(ap.file);

