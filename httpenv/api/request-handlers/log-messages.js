const fs = require('fs');
const LineByLine = require('n-readlines');
const path = require('path');

const OBSE_LOG_LOCATION = path.resolve(`${__dirname}/../log/share/obse.log`);
const ORIG_STATE_LOG_LOCATION = path.resolve(
  `${__dirname}/../log/share/orig-state.log`
);

const readFileThenSendBack = (fileLocation, req, res) => {
  if (!fs.existsSync(fileLocation)) {
    res.status(404);
    res.send('Log file does not exist');
  } else {
    res.status(200);
    const liner = new LineByLine(fileLocation);
    let line;
    let data = '';
    // eslint-disable-next-line no-cond-assign
    while ((line = liner.next())) {
      data = data.concat(`${line.toString('ascii')}<br/>`);
    }
    res.send(data);
  }
};

const obseLogHanlder = (req, res) => {
  readFileThenSendBack(OBSE_LOG_LOCATION, req, res);
};

const origStateLogHanlder = (req, res) => {
  readFileThenSendBack(ORIG_STATE_LOG_LOCATION, req, res);
};

module.exports = {
  obseLogHanlder,
  origStateLogHanlder,
};
