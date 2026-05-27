import Image from 'next/image';
import Link from 'next/link';
import Button from '../common/Button';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link href="./">
          <Image
            src="/assets/logo/logo.png"
            alt="SSA Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        <Button variant="primary" className="self-start text-xl !mx-0">
          Contact Us
        </Button>
      </div>
    </header>
  );
}
