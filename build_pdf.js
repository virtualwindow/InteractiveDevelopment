var markdownpdf = require("markdown-pdf")
  , fs = require("fs")

var options = {}
options.renderDelay = 10000;
options.paperBorder = "20mm";

fs.createReadStream("ID1/ID1_studyGuide.md")
  .pipe(markdownpdf(options))
  .pipe(fs.createWriteStream("ID1/ID1_studyGuide.md.pdf"))