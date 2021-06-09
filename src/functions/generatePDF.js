import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function generatePDF() {
  const input = document.getElementById('EditContainer');

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('download.pdf');
  });
}

export default generatePDF;
