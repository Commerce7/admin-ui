import NavComponent, { NavProps } from './Nav';
import NavLink, { NavLinkProps } from './NavLink';
import SubNav, { SubNavProps } from './SubNav';
import SubNavLink, { SubNavLinkProps } from './SubNavLink';

const Nav = Object.assign(NavComponent, {
  NavLink,
  SubNav,
  SubNavLink
});

export type { NavLinkProps, NavProps, SubNavLinkProps, SubNavProps };

export default Nav;
