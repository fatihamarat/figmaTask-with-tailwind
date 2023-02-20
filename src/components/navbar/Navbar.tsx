import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo from "/home/fatih/app/src/components/navbar/LOGO.png";
import React,{useState} from 'react';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'What We Do', href: '#', current: false },
  { name: 'GAMI Statistics', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="flex items-center justify-center border-b-2 border-b-solid border-b-gray bg-white w-1440px h-62px mt-2.5 box-border">
      {({ open }) => (
        <>
              <div className="w-full flex space-x-72 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="ml-20 w-36px h-46px flex flex-shrink-0 items-center">
                  <img
                    className="h-46px w-36px"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="w-481px h-26px items-center justify-center hidden sm:ml-6 sm:block">
                  <div className="text-slate-900 w-478px h-20 flex justify-center space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-slate-900 hover:border-solid hover:border-gray hover:border-2 hover:border-b-0' : 'text-slate-900 hover:border-solid hover:border-gray hover:border-2 hover:border-b-0',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}                   
                  </div>                
                </div>
                <button className="h-12 rounded-md px-7 py-3.5 bg-gray-800 text-white">Buy GAMI</button>
              </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
};
