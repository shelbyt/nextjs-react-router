import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router'

export default function App(props: { message: string }) {
    const router = useRouter()
  const { pid } = router.query
  console.log("xxx, ", pid)

  return (
    <div>
      <p>{props.message}</p>
      <p>User Page {pid}</p>
      <NextLink href="/">Home</NextLink>
    </div>
  );
}

export const getServerSideProps = () => {
  return { props: { message: 'This PROFILE PAGE is rendered on the server!' } };
};
