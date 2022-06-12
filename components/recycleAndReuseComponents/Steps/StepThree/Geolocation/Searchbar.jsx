import { GeoSearchControl } from 'leaflet-geosearch'
import { useEffect } from 'react'

const SearchBar = (props) => {
  const { map, ...rest } = props
  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      ...rest,
    })
    map.addControl(searchcontrol)
    return () => map.removeControl(searchControl)
  }, [props, map, rest])

  return null
}

export default SearchBar
