"use client"
import { Navbar, Container, Nav } from "react-bootstrap";

const menuItems = [
  {
    label: 'Accommodation',
    link: '/accommodation'
  },
  {
    label: 'Activities',
    link: '/activities'
  },
  {
    label: 'Attractions',
    link: '/attractions'
  },
  {
    label: 'Gallery',
    link: '/gallery'
  },
  {
    label: 'Contact',
    link: '/contact'
  },
  {
    label: 'Reservations',
    link: '/reservations'
  },
]

export default function SiteNav() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-primary pt-4 pb-4 fs-4">
      <Container>
        <Navbar.Brand href="/" className="fs-2">Vue Du Vallon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              menuItems.map(({ label, link }) =>
                <Nav.Link
                  key={link}
                  href={link}>
                  {label}
                </Nav.Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
