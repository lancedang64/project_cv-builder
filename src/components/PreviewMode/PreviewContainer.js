import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import styles from '../../styles/PDFStyles';

// Create Document Component
function MyDocument(props) {
  const { fullName, jobTitle, contacts, profile } = props.personData;

  const contactTexts = contacts.map((contact, index) => {
    return (
      <Text key={index} style={styles.contact}>
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
              <Text style={styles.fullName}>{fullName}</Text>
              <Text style={styles.jobTitle}>{jobTitle}</Text>
            </View>
            <View style={styles.contacts}>{contactTexts}</View>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Profile</Text>
            <Text>{profile}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default MyDocument;
