'use client';
import styles from '@/app/styles.module.css'

function Heading(props: { heading: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello this is {props.heading}</h1>
    </div>
  );
}

export default function Index(){
    return (
        <>
            <Heading heading="styled-jsx!" />
            <h1>Hey</h1>
        </>
    )
}
