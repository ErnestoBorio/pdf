import PDFDocument from 'pdfkit';

const pdf = new PDFDocument();
pdf.addSpotColor('PANTONE 123 C', 0.1, 0.82, 0, 0.1);
