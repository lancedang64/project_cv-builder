import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import TEMPLATE from './TEMPLATE';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: '2.54cm',
    backgroundColor: '#E4E4E4',
    fontSize: '11pt',
  },
  CVHeader: {},
  fullName: {
    fontSize: '30pt',
  },
  jobTitle: {
    fontSize: '15pt',
  },
  contacts: {
    position: 'absolute',
    textAlign: 'right',
  },
  contact: {
    marginBottom: '5px',
  },
});

const contactTexts = TEMPLATE.contacts.map((contact) => {
  return (
    <Text key={contact} style={styles.contact}>
      {contact}
    </Text>
  );
});

// Create Document Component
const MyDocument = () => (
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
);

export default MyDocument;
