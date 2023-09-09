import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export function getServerSideProps() {
  console.log("Hello!");
  return { props: { hello: "Hello!" } };
}

export default function Hello() {
  return (
    <Container maxWidth="md">
      <Head>
        <title>Hello</title>
      </Head>
      <Link href="/">Home</Link>
    </Container>
  );
}
