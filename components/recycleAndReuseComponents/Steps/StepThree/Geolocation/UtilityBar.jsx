import React, { useState } from 'react'
import { ArrowForwardIcon, SearchIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'
import { useMapEvents } from 'react-leaflet'

const UtilityBar = ({ encode, disable, setDisable, loading, setLoading }) => {
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng)
      setLoading(false)
      setDisable(false)
    },
  })

  const onUseMylocation = () => {
    setLoading(true)
    map.locate()
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      }}
    >
      <Button
        onClick={onUseMylocation}
        marginRight={2}
        colorScheme='teal'
        isLoading={loading}
        loadingText='Submitting'
      >
        <SearchIcon />{' '}
        <span style={{ fontSize: '0.9rem' }}>Use My Location! </span>
      </Button>
      <Link
        href={{
          pathname: '/summary/[code]',
          query: {
            code: encode.current,
          },
        }}
        as={`/summary/${encode.current}`}
        passHref
      >
        <Button
          disabled={disable}
          rightIcon={<ArrowForwardIcon />}
          onClick={() => setLoading(false)}
          colorScheme='teal'
        >
          <span style={{ fontSize: '0.9rem' }}>I&apos;m done!</span>
        </Button>
      </Link>
    </div>
  )
}

export default UtilityBar
