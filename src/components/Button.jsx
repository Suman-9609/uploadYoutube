import Link from "next/link"

export default function Button(props) {
    return (
        <>
            {
                props.name === 'Sign In' &&
                <Link href={'/'} className='border-2 border-green-300 rounded-full px-12 py-2 inline-block hover:bg-green-500 hover:shadow-2xl hover:text-white transition-all duration-500 font-semibold'>{props.name}</Link>}
            {
                props.name === 'Sign Up' && <Link href={'/'} className='border-2 rounded-full px-12 py-2 inline-block hover:bg-white  hover:shadow-2xl hover:text-green-500 transition-all duration-500 font-semibold'>{props.name}</Link>
            }

        </>
    )
}