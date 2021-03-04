import React, { useState } from 'react';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';
import NavBarContainer from './NavbarContainer';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Logo w="150px" color={'black'} />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};
export default Navbar;
