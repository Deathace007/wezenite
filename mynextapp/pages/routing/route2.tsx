import { useRouter } from "next/router"
export default function route2(){
    const router = useRouter()
    function goback(){
        router.push('/') //places the url at top of stack allowing to go previous url
        // router.replace('/') //replaces the current path with the provided path
    }

    return(
        <div>
            <h1>This is route2 page</h1>
            <button onClick={goback}>Goback</button>
        </div>
    )
}