import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white p-4" >
            <div className="container mx-auto flex justify-between items-center" >
               <div className="font-bold text-xl" >Quick-commerce</div>
               <div className="flex space-x-4" >
                <Link href={'/'} >Home</Link>
                <Link href={'/categories'} >Categories</Link>
                <Link href={'/about-us'} >About us</Link>
                <Link href={'/contact'} >Contact</Link>
               </div>
            </div>
        </nav>
    )
}


export default Navbar;