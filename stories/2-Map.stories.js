import React from 'react';

import Map from '#re-map';
import MapContainer from '#re-map/MapContainer';
import MapBounds from '#re-map/MapBounds';
import MapSource from '#re-map/MapSource';
import MapLayer from '#re-map/MapSource/MapLayer';

import styles from './styles.scss';

export default {
    title: 'Design|Map',
};

const mapOptions = {
    zoomLevel: 3,
    center: [84.1240, 28.3949],
    bounds: [
        80.05858661752784, 26.347836996368667,
        88.20166918432409, 30.44702867091792,
    ],
};

// FIXME: problem with control visibility
export const simpleMap = () => (
    <Map
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        mapOptions={mapOptions}
        scaleControlShown
        navControlShown
    >
        <MapBounds
            bounds={mapOptions.bounds}
            padding={50}
        />
        <MapSource
            sourceKey="nepal"
            sourceOptions={{
                type: 'vector',
                url: 'mapbox://adityakhatri.colcm1cq',
            }}
        >
            <MapLayer
                layerKey="municipality"
                layerOptions={{
                    'source-layer': 'municipalitygeo',
                    type: 'line',
                    paint: {
                        'line-color': '#00ff00',
                        'line-width': 0.5,
                    },
                }}
            />
            <MapLayer
                layerKey="district"
                layerOptions={{
                    'source-layer': 'districtgeo',
                    type: 'line',
                    paint: {
                        'line-color': '#0000ff',
                        'line-width': 2,
                    },
                }}
            />
            <MapLayer
                layerKey="province"
                layerOptions={{
                    'source-layer': 'provincegeo',
                    type: 'line',
                    paint: {
                        'line-color': '#ff0000',
                        'line-width': 3,
                    },
                }}
            />
        </MapSource>
        <MapContainer
            className={styles.map}
        />
    </Map>
);
simpleMap.story = {
    name: 'simple map',
};
