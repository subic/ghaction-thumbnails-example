const thumb = require('node-thumbnail').thumb;

const generateThumbs = width => thumb({
  source: './test',
  destination: `./test/node-thumbnail/${width}`,
  width: width,
  overwrite: false,
  skip: true,
  quiet: true,
  ignore: true,
  suffix: ''
});

generateThumbs(480).then(generateThumbs(960)).catch(error => console.log(error));
