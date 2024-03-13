import Link from 'next/link';

const linkArr1 = [
  { label: 'Blog', href: '/blogs' },
  { label: 'Career', href: '/career' },
  { label: 'Support', href: '/support' },
];

const linkArr2 = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export default function Footer() {
  return (
    <div className="bg-pry w-full px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-6 flex gap-8 sm:gap-20 md:gap-32">
          <div className="flex flex-col gap-8">
            {linkArr1.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg text-white hover:underline hover:underline-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {linkArr2.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg text-white hover:underline hover:underline-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
