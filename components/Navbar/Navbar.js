import React from 'react';
// spa con Link
import Link from 'next/linx'

const Navbar = () => {
    return (
        <div>
            <nav>
                <menu>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </menu>
            </nav>
        </div>
    );
};

export default Navbar;