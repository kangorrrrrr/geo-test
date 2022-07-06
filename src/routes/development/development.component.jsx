import Navigation from "../navigation/navigation.component";
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function Development() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC8BcAMJGUKK6F4Y-fIWq6XCHZ8hDxBIhE",
    })

    const center = { lat: 22.305807393427344, lng: 114.253535827995}

    if (!isLoaded) {
        return <div>Loading...</div>
    }



    return ( 
        <div>
            <Navigation />
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-xl font-bold text-center">Choose Your Personal Route</h1>
            </div>
            <div className="">
                <div className="flex mx-auto mt-10 max-w-7xl">
                    <Map />


                    <Dropdown className="pl-10"/>
                </div>

            </div>
        </div>

     );
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Dropdown() {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Choose District
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Hong Kong Island
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Kowloon
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    New Territories
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      Cheung Chau / Islands District
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }

function Map() {
    const center = { lat: 22.305807393427344, lng: 114.253535827995}
    const containerStyle = {width: '1080px', height: '960px'}
    const zoom = 18
    const maptype = 'satellite'

    let map = <GoogleMap center={center} zoom={zoom} mapContainerStyle={containerStyle} mapTypeId={maptype}></GoogleMap>


    return map
}


export default Development;