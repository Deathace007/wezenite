import Link from "next/link"

export default function route1(){
    return(
        <div>
            <Link href="/routing/route1">
                Route1
            </Link><br/>
            <Link href="/routing/route2">
                Route2
            </Link><br/>

        </div>
    )
}