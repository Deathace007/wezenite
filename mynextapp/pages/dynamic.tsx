import { GetStaticProps } from 'next';

// getStaticProps runs only at build time and generates static HTML.
// The props returned here are passed to the component below.
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      myFavNum: Math.random(), // This number is generated at build time and stays static
    },
  };
};

// Define the type for the props
type StaticProps = {
  myFavNum: number;
};

// React component that receives the static props
export default function StaticPage(props: StaticProps) {
  return <h1>Static Number - {props.myFavNum}</h1>;
}