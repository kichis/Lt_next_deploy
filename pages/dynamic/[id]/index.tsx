import { useRouter } from "next/router"

const NonDynamic = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <h1>動的ルーティングを使用しています！</h1>
            <p>idは。。{id}</p>
        </>
    )
}

export default NonDynamic