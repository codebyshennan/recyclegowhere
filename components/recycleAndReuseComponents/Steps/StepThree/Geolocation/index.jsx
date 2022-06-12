import { useDisclosure } from '@chakra-ui/react'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import React, { useRef, useState } from 'react'
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import AsyncSelect from 'react-select/async'
import { selectStylesForColorModes } from '../../../../DarkModeSwitch'
import { InfoBox } from './InfoBox'
import { InstructionalBox } from './InstructionalBox'
import { markerHome, markerOthers, markerRecycle } from './markers'
import { NoOptions } from './NoOptions'
import { PopupInfo } from './PopupContentComponent'
import SearchBar from './Searchbar'
import UtilityBar from './UtilityBar'
import {
  fetchOneMapSuggestions,
  getNearestBlueBin,
  getNearestNonBlueBinFacilities,
} from './utils'

const { BaseLayer } = LayersControl

const LocationMarker = ({ position, setPosition }) => {
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position} icon={markerHome}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default function Geolocation({ userItems }) {
  const { onToggle } = useDisclosure()
  const prov = new OpenStreetMapProvider()
  const [position, setPosition] = useState(null)

  // Initial Position
  const mapCenter = useRef({
    lat: 1.36882713986152,
    lng: 103.950296238717,
  })

  // Encode JSON to Base64
  const encode = useRef('')

  // Display address after search bar input
  const inputAddress = useRef('')

  // Markers (non bluebin + bluebin)
  const [nonBlueBinMarkers, setNonBlueBinMarkers] = useState([])
  const [blueBinMarkers, setBlueBinMarkers] = useState([])

  // Disable button if no location
  const [disable, setDisable] = useState(true)

  // Popup
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState('')
  const [displayDirection, setDisplayDirection] = useState(false)

  const [map, setMap] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChangeHandler = (event) => {
    generateMarkers(
      event.label,
      { lat: event.lat, lng: event.long },
      event.value
    )
  }

  const handleHomeMarkerClick = () => {
    setDisplayDirection(false)
    setPopupContent(inputAddress.current)
    setShowPopup(true)
    onToggle()
  }

  const generateMarkers = (addressLabel, { lat, lng }, postcode) => {
    inputAddress.current = addressLabel
    mapCenter.current = {
      lat,
      lng,
    }

    const allLocations = []

    /* SORT OUT BLUE BIN OBJECTS FROM NON BLUE BIN  */
    const nonBlueBinItems = []
    const blueBinItems = []

    for (const userItem of userItems) {
      if (userItem.bluebinrecyclable == 0) {
        blueBinItems.push(userItem.description)
      } else {
        nonBlueBinItems.push(userItem)
      }
    }

    /* BLUE BIN MARKERS */
    const nearestBin = getNearestBlueBin(blueBinItems, { lat, lng }, postcode)
    if (nearestBin) {
      setBlueBinMarkers([nearestBin])
      allLocations.push(nearestBin)
    }

    /* NON-BLUE BIN ITEMS */
    const nonBlueBinFacilities = getNearestNonBlueBinFacilities(
      nonBlueBinItems,
      { lat, lng }
    )
    if (nonBlueBinFacilities) {
      setNonBlueBinMarkers(nonBlueBinFacilities)
      allLocations.push(...nonBlueBinFacilities)
    }

    const person = {
      latitude: lat,
      longitude: lng,
      isPerson: true,
    }
    allLocations.push(person)

    encode.current = Buffer.from(JSON.stringify(allLocations), 'base64')
    setDisable(false)
  }

  return (
    <div>
      <div
        style={{
          position: 'relative',
        }}
      >
        {/* Pop Up Box */}
        {showPopup && (
          <InfoBox
            content={popupContent}
            homeMarker={position}
            displayDirection={displayDirection}
            handleCloseInfoBox={() => setShowPopup(false)}
          />
        )}
        {/* Center instructional Box */}
        {disable && <InstructionalBox />}

        {/* Map */}
        <div className='map-root'>
          <MapContainer
            center={[mapCenter.current.lat, mapCenter.current.lng]}
            zoom={13}
            style={{
              height: '700px',
              flex: 4,
              width: '140%',
              marginLeft: '-20%',
            }}
            whenCreated={setMap}
          >
            <LayersControl position='topleft'>
              <BaseLayer checked name='OpenStreetMap'>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {/* Multiselect+Buttons */}
                <div
                  style={{
                    position: 'absolute',
                    width: '90%',
                    height: 'auto',
                    top: 0,
                    zIndex: 10000,
                    justifyContent: 'center',
                    left: { left_proportion: '50%' },
                    marginLeft: '5%',
                    marginTop: '5%',
                  }}
                >
                  {/* <AsyncSelect
                    value={inputAddress.current}
                    isSearchable
                    placeholder={'Enter your Location'}
                    loadOptions={fetchOneMapSuggestions}
                    onChange={onChangeHandler}
                    components={{ NoOptions }}
                    styles={selectStyles}
                  /> */}
                  <UtilityBar
                    encode={encode}
                    disable={disable}
										setDisable={setDisable}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </div>
                <LocationMarker position={position} setPosition={setPosition} />
                {nonBlueBinMarkers.map((marker, idx) => (
                  <Marker
                    key={`marker-${idx}`}
                    position={[marker.latitude, marker.longitude]}
                    icon={markerOthers}
                    onClick={() => {
                      setPopupContent(<PopupInfo.nonBlueBin marker={marker} />)
                      setDisplayDirection(true)
                      setShowPopup(true)
                    }}
                  />
                ))}
                {blueBinMarkers.map((marker, idx) => (
                  <Marker
                    key={`marker-${idx}`}
                    position={[marker.latitude, marker.longitude]}
                    icon={markerRecycle}
                    onClick={() => {
                      setPopupContent(<PopupInfo.blueBin marker={marker} />)
                      setDisplayDirection(true)
                      setShowPopup(true)
                    }}
                  />
                ))}
              </BaseLayer>
            </LayersControl>
            {map && (
              <SearchBar
                map={map}
                provider={prov}
                style='bar'
                showMarker={true}
                maxMarkers={3}
                showPopup={false}
                autoClose={true}
                retainZoomLevel={false}
                animateZoom={true}
                keepResult={true}
                searchLabel={'Enter Address'}
              />
            )}
          </MapContainer>
          <style jsx>
            {`
              .map-root {
                height: 100%;
              }
              .leaflet-container {
                height: 400px !important;
                width: 80%;
                margin: 0 auto;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  )
}

// Map style
const selectStyles = {
  ...selectStylesForColorModes,
  menu: (styles) => ({ ...styles, zIndex: 999 }),
}
