import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

interface IDocumentProps {
  name: string;
  picture: FileList;
}

const MyDocument: React.FC<IDocumentProps> = ({ name, picture }) => {
  const pictureUrl = picture && picture.length > 0 ? URL.createObjectURL(picture[0]) : null;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.content}>{pictureUrl && <Image src={pictureUrl} style={styles.image} />}</View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 24,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#007bff",
    width: "100%",
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: 8,
  },
});

export default MyDocument;
