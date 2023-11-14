import fs from 'fs';
import PDFDocument from '@openartmarket/pdfkit';

const pdf = new PDFDocument();
pdf.pipe(fs.createWriteStream('out2print.pdf'));
pdf.addSpotColor('PANTONE 123 C', 100, 0, 0, 10);
pdf.addSpotColor('MYSPOTCOLOR', 0, 100, 0, 10);

// Add another page
pdf.fontSize(25).text('Here is some vector graphics...', 100, 100);

// Draw a triangle
pdf.moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill('PANTONE 123 C');

// Apply some transforms and render an SVG path with the 'even-odd' fill rule
pdf
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('MYSPOTCOLOR', 'even-odd');

// Add some text with annotations
pdf
  .fillColor('blue')
  .text('Here is a link!', 100, 100)
  .underline(100, 100, 160, 27, { color: 'MYSPOTCOLOR' });

// Finalize PDF file
pdf.end();
