import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import styles from '../../styles/CVHeaderStyles';

// Create Document Component
function MyDocument(props) {
  const contactTexts = props.person.contacts.map((contact) => {
    return (
      <Text key={contact} style={styles.contact}>
        {contact}
      </Text>
    );
  });

  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.CVHeader}>
            <View>
              <Text style={styles.fullName}>{props.person.fullName}</Text>
              <Text style={styles.jobTitle}>{props.person.jobTitle}</Text>
            </View>
            <View style={styles.contacts}>{contactTexts}</View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default MyDocument;
