import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import TEMPLATE from '../TEMPLATE';
import styles from '../../styles/CVHeaderStyles';

const contactTexts = TEMPLATE.contacts.map((contact) => {
  return (
    <Text key={contact} style={styles.contact}>
      {contact}
    </Text>
  );
});

// Create Document Component
const MyDocument = () => (
  <PDFViewer>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.CVHeader}>
          <View>
            <Text style={styles.fullName}>{TEMPLATE.fullName}</Text>
            <Text style={styles.jobTitle}>{TEMPLATE.jobTitle}</Text>
          </View>
          <View style={styles.contacts}>{contactTexts}</View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default MyDocument;
