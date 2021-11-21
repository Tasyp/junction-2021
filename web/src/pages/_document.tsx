import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html style={{ maxWidth: "500px", margin: "0 auto" }} lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
