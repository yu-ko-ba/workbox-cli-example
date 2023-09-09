import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Head>
        <title>workbox-cli-example</title>
      </Head>
      <Link href="/hello">Hello</Link>
    </Container>
  );
}
