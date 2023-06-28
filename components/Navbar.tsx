import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
            <Link href="/" className="flex justify-center items-center">
                <Image 
                    src="/birdskz-logo-m.svg"
                    alt="Birds.Watch Logo"
                    width={121}
                    height={34}
                    className="object-contain"
                />
            </Link>
            <CustomButton 
                title="Sign In (TBD)"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'

            />
        </nav>

    </header>
  )
}

export default Navbar