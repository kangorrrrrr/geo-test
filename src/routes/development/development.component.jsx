import Navigation from "../navigation/navigation.component";
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useState } from "react";

function Development() {

  const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC8BcAMJGUKK6F4Y-fIWq6XCHZ8hDxBIhE",
    })

    if (!isLoaded) {
        return <div>Loading...</div>
    }



    return ( 
        <div>
            <Navigation />
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-xl font-bold text-center">Choose Your Personal Route</h1>
                <h1 className="text-xl font-bold text-center">選擇您的街跑路線</h1>
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

    const [coordinates, setCoordinates] = useState({ lat: 22.305807393427344, lng: 114.253535827995})

    return ( 
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <select
          id="location"
          name="location"
          className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue="Choose District"
        >
          <option value="">Choose District</option>
          <option value="HK Island" onClick={() => setCoordinates({ lat: 22.265288304629017, lng: 114.19334336847231 })}>Hong Kong Island</option>
          <option value="KL" onClick={() => setCoordinates({ lat: 22.313053944397023, lng: 114.17316071220313 })}>Kowloon</option>
          <option value="NT" onClick={() => setCoordinates({ lat: 22.371501631547694, lng: 114.17872248615326 })}>New Territories</option>
          <option value="CC" onClick={() => setCoordinates({ lat: 22.208881551019363, lng: 114.02968140494471 })}>Cheung Chau / Islands District</option>
        </select>

        <label htmlFor="start" className="block text-sm font-medium text-gray-700">
          Choose a starting point
        </label>
        <select
          id="start"
          name="start"
          className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          defaultValue="Choose a starting point"
        >
          <option value="">Choose a starting point</option>
          <option value="HK Island" onClick={() => setCoordinates({ lat: 22.265288304629017, lng: 114.19334336847231 })}>Hong Kong Island</option>
          <option value="KL" onClick={() => setCoordinates({ lat: 22.313053944397023, lng: 114.17316071220313 })}>Kowloon</option>
          <option value="NT" onClick={() => setCoordinates({ lat: 22.371501631547694, lng: 114.17872248615326 })}>New Territories</option>
          <option value="CC" onClick={() => setCoordinates({ lat: 22.208881551019363, lng: 114.02968140494471 })}>Cheung Chau / Islands District</option>
        </select>
      </div>
    )
  }

function Map() {
    let center = { lat: 22.305807393427344, lng: 114.253535827995}
    const containerStyle = {width: '1080px', height: '960px'}
    const zoom = 18
    const maptype = 'hybrid'

    let map = <GoogleMap center={center} zoom={zoom} mapContainerStyle={containerStyle} mapTypeId={maptype}></GoogleMap>

    return map
}


export default Development;