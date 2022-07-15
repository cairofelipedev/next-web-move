import React from "react";
import { Disclosure } from "@headlessui/react";
import Container from "@components/container";
import Link from "next/link";
import Image from "next/image";
import GetImage from "@utils/getImage";
import { myLoader } from "@utils/all";

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Quem Somos",
      href: "#"
    },
    {
      label: "Contato",
      href: "#"
    }
  ];

  const rightmenu = [
    {
      label: "Notícias",
      href: "#"
    },
    {
      label: "Vídeos",
      href: "#",
      external: true
    }
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <>
      <div className="flex max-w-6xl justify-between px-2 pt-4 sm:mx-auto">
        <Link href="/">
          <div className="mb-1 flex items-center">
            <div className="mr-3">
              <img
                src="/img/logo.png"
                alt="avatar"
                width="150px"
                height="50px"
              />
            </div>
          </div>
        </Link>
        <div className="flex justify-between space-x-3">
          <div className="relative hidden max-w-lg sm:block">
            <input
              aria-label="Pesquise no site"
              type="text"
              placeholder="Pesquise no site"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-white sm:bg-blue-900">
        <div className="container mx-auto hidden max-w-6xl py-3 px-3 sm:block">
          <Link href="/">HOME</Link>
          <div className="group inline-block">
            <button className="inline-flex items-center rounded py-2 px-6">
              <span className="mr-1 text-white">QUEM SOMOS</span>
              {/* <svg
                className="h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg> */}
            </button>
            {/* <ul className="absolute z-10 hidden rounded bg-white pt-1 shadow-md shadow-gray-300 group-hover:block dark:bg-gray-800">
              <li>
                <button className="inline-flex items-center rounded py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#E96708"
                    className="bi bi-chevron-right font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <h1 className="ml-2 mr-5 text-sm">MISSÃO, VISSÃO, VALORES</h1>
                </button>
              </li>
              <li>
                <button className="inline-flex items-center rounded py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#E96708"
                    className="bi bi-chevron-right font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <h1 className="ml-2 mr-5 text-sm">DIRETORIA</h1>
                </button>
              </li>
            </ul> */}
          </div>
          <div className="group inline-block">
            <button className="inline-flex items-center rounded py-2 px-4">
              <span className="mr-1 text-white">NOTICÍAS</span>
            </button>
          </div>
          <div className="group inline-block">
            <button className="inline-flex items-center rounded py-2 px-4">
              <span className="mr-1 text-white">CONTATO</span>
            </button>
          </div>
          <div className="group inline-block">
            <button className="inline-flex items-center rounded py-2 px-4">
              <span className="mr-1 text-white">VÍDEOS</span>
            </button>
          </div>
          <div className="group inline-block">
            <button className="inline-flex items-center rounded py-2 px-4">
              <span className="mr-1 text-white">ASSOCIE-SE</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
