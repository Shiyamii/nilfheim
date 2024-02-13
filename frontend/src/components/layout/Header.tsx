import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';

export function Header() {
  return (
    <header>
      <Navbar className="bg-opacity-75 max-w-fitt">
        <NavbarContent justify="start"></NavbarContent>
        <NavbarBrand>
          <p className="mx-auto font-extralight text-inherit text-4xl lacquer-regular text-center">
            Nilfheim
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
