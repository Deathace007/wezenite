import styles from '@/styles/styles.module.css'


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
            <Heading heading="styles" />
            <h1>Hey</h1>
        </>
    )
}
