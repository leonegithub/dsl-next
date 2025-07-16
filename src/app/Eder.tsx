"use client";

import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import AccordionComponent from "@/components/accordion";
import DropdownComponent from "@/components/dropdown";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo DSLeone Test.png";
/* import { useAuth } from "@/context/AuthContext"; */
import "./header.css";
import {
  getOptions1,
  getOptions2,
  getOptions3,
  getOptions4
} from "@/components/header-options";

export default function Header() {
  const [show, setShow] = useState(false);
  /* const { userId, userData } = useAuth(); */

  const options1 = getOptions1();
  const options2 = getOptions2();
  const options3 = getOptions3();
  const options4 = getOptions4();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className={`p-4 flex items-center`}>
        <div className=" logo">
          <Link href={`/`}>
            <Image className="pb-2 blue" src={logo} width={175} alt="logo-america" />
          </Link>
        </div>
        <nav className="nav-menu flex justify-between">
          <ul className="xl:flex hidden items-center space-x-4">
            <li>
              <Link href={`/events`}>Chi siamo</Link>
            </li>
            <li>
              <DropdownComponent options={options3} dropdownLabel="Prodotti" />
            </li>
            <li>
              <DropdownComponent options={options4} dropdownLabel="Servizi" />
            </li>
            <li>
              <Link href={`/events`}>Casi clinici</Link>
            </li>
            <li>
              <DropdownComponent options={options1} dropdownLabel="News" />
            </li>
          </ul>
        </nav>
      
          <Link href="https://smile.dsleone.it/account/login" target="_blank">
            <div className="hidden xl:flex blue flex items-center">
             Area Riservata
            </div>
          </Link>
        
        <button className="hamburger" onClick={handleShow} aria-label="Menu">
          <i className="fa-solid fa-bars"></i>
        </button>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="mobile-body">
              <ul>
                <li>
                  <AccordionComponent
                    options={options1}
                    accordionLabel="Company"
                  />
                </li>
                <li>
                  <AccordionComponent
                    options={options2}
                    accordionLabel="Orthodontics"
                  />
                </li>
                <li>
                  <Link href={`/orders`}>Orders</Link>
                </li>
                <li>
                  <Link href={`/events`}>Events</Link>
                </li>
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
}
