import { StyleSheet } from '@react-pdf/renderer';

export default StyleSheet.create({
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
