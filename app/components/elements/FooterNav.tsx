import React from 'react';

type NavColumn = {
  links: { label: string; href: string }[];
};

const navColumns: NavColumn[] = [
  {
    links: [
      { label: 'About Us', href: '#tennisAcademyAbout' },
      { label: 'Programs', href: './' },
    ],
  },
  {
    links: [
      { label: 'Coaches', href: './' },
      { label: 'Amenities', href: './' },
    ],
  },
  {
    links: [
      { label: 'News', href: './' },
      { label: 'Blogs', href: './' },
    ],
  },
  {
    links: [{ label: 'Matches', href: './' }],
  },
  {
    links: [{ label: 'Events', href: './' }],
  },
  {
    links: [{ label: 'FAQs', href: './' }],
  },
];

export default function FooterNav() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-4 text-center sm:text-left">
      {navColumns.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-3">
          {col.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.82rem] text-gray-700 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
