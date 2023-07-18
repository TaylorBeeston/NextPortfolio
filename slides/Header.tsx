import React, { FC } from 'react';
import Link from 'next/link';

type HeaderProps = {
    links: Array<{
        display: string;
        location: string;
    }>;
};

const Header: FC<HeaderProps> = ({ links }) => (
    <header className="absolute top-0 z-20 flex flex-wrap py-4 bg-transparent">
        {links.map(({ display, location }) => (
            <Link
                className="p-4 text-2xl text-gray-700 underline dark:text-gray-300 hover:no-underline"
                key={location}
                href={location}
            >
                {display}
            </Link>
        ))}
    </header>
);

export default Header;
