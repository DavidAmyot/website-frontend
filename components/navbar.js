import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ children, home }) {
    return (
        <nav className='flex h-20 items-center w-screen p-3 lg:px-8 lg:h-16 flex-row'>

            {/* Website logo */}
            <div className='flex w-full lg:w-56 justify-center align-middle items-center'>
                <Link href='/'>
                    <a className='flex'>
                        <Image
                            priority
                            src="/images/logo.png"
                            height={54}
                            width={250}
                            alt={"Website Logo"}
                        />
                    </a>
                </Link>
            </div>

            {/* Hamburger menu */}
            <button className='inline-flex rounded lg:hidden text-black ml-auto hover:text-orange-hover outline-none'>
                <svg
                    className='w-14 h-14'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>

            <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-orange-hover '>
                            Home
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-orange-hover'>
                            About
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-orange-hover'>
                            Projects
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-orange-hover'>
                            Contact me
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}