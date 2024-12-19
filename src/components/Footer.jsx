import Link from "next/link";

export default function Footer() {
    return (
      <footer className=" bg-blue-600 mt-4 w-full  border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span className="tetxt-sm text-white sm:text-center" >© 2023 Quick-commerce. All Rights Reseved.</span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
        <li>
            <Link href="/about-us" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
            <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
        </li>
        <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
      </footer>
    );
}   
