import React, { useState, useMemo, useCallback } from 'react';

import Button from '#rsu/../v2/Action/Button';

import Map from '#re-map';
import MapContainer from '#re-map/MapContainer';
import MapBounds from '#re-map/MapBounds';
import MapShapeEditor from '#re-map/MapShapeEditor';
import MapSource from '#re-map/MapSource';
import MapLayer from '#re-map/MapSource/MapLayer';
import MapState from '#re-map/MapSource/MapState';
import MapTooltip from '#re-map/MapTooltip';
import { getLayerName } from '#re-map/utils';

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

const hoverAttributes = [
    {
        id: 4,
        value: true,
    },
];

const selectedAttributes = [
    {
        id: 1,
        value: true,
    },
    {
        id: 7,
        value: true,
    },
];

const geoJsonFillOptions = {
    id: 'not-required',
    type: 'fill',
    paint: {
        'fill-color': 'red',
        'fill-opacity': 0.3,
    },
    filter: ['==', '$type', 'Polygon'],
};

const geoJsonCircleOptions = {
    id: 'not-required-much',
    type: 'circle',
    paint: {
        'circle-color': 'red',
        'circle-opacity': 0.3,
        'circle-radius': 5,
    },
    filter: ['==', '$type', 'Point'],
};

export const VectorLayersMap = () => (
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
VectorLayersMap.story = {
    name: 'With vector layers',
};

export const VectorLayersOrderingMap = () => (
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
                beneath={getLayerName('nepal', 'municipality')}
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
                beneath={getLayerName('nepal', 'district')}
                layerOptions={{
                    'source-layer': 'provincegeo',
                    type: 'fill',
                    paint: {
                        'fill-color': '#ff0000',
                    },
                }}
            />
        </MapSource>
        <MapContainer
            className={styles.map}
        />
    </Map>
);
VectorLayersOrderingMap.story = {
    name: 'With vector layers (ordered)',
};

export const LayerDrawMap = () => {
    const [mode, setMode] = useState('simple_select');

    const [editMode, setEditMode] = useState(false);
    const [geoJsons, setGeoJsons] = useState([
        {
            id: 'hari',
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [83.40612677290363, 28.541178881358036],
                        [84.21525456675533, 28.528963224917845],
                        [84.03389833710014, 27.81801041995429],
                        [83.40612677290363, 28.541178881358036],
                    ],
                ],
            },
            properties: {
                color: 'red',
                code: 2,
            },
        },
        {
            id: 'shyam',
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [
                    84.62858932054638,
                    27.778619058603084,
                ],
            },
            properties: {
                code: 1,
                color: 'red',
            },
        },
    ]);

    const handleCreate = useCallback(
        (features) => {
            const maxValue = Math.max(0, ...geoJsons.map(item => item.properties.code));
            const newFeatures = features.map((feature, index) => ({
                ...feature,
                properties: {
                    ...feature.properties,
                    code: maxValue + index + 1,
                },
            }));
            const newJsons = [...geoJsons, ...newFeatures];
            setGeoJsons(newJsons);
        },
        [geoJsons],
    );

    const handleDelete = useCallback(
        (features) => {
            const copy = [...geoJsons];
            features.forEach((feature) => {
                const index = geoJsons.findIndex(geoJson => geoJson.id === feature.id);
                copy.splice(index, 1);
            });
            setGeoJsons(copy);
        },
        [geoJsons],
    );

    const handleUpdate = useCallback(
        (features) => {
            const copy = [...geoJsons];
            features.forEach((feature) => {
                const index = geoJsons.findIndex(geoJson => geoJson.id === feature.id);
                copy[index] = feature;
            });
            setGeoJsons(copy);
        },
        [geoJsons],
    );

    return (
        <Map
            mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
            mapOptions={mapOptions}
            scaleControlShown
            navControlShown
        >
            <MapContainer
                className={styles.map}
            />
            <MapBounds
                bounds={mapOptions.bounds}
                padding={50}
            />
            {editMode && (
                <MapShapeEditor
                    onCreate={handleCreate}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                    onModeChange={setMode}

                    geoJsons={geoJsons}
                />
            )}
            {!editMode && geoJsons.map(geoJson => (
                <MapSource
                    key={geoJson.id}
                    sourceKey={geoJson.id}
                    sourceOptions={{
                        type: 'geojson',
                        promoteId: 'code',
                    }}
                    geoJson={geoJson}
                >
                    <MapLayer
                        layerKey="fill"
                        layerOptions={geoJsonFillOptions}
                    />
                    <MapLayer
                        layerKey="circle"
                        layerOptions={geoJsonCircleOptions}
                    />
                </MapSource>
            ))}
            <Button
                onClick={() => {
                    setEditMode(!editMode);
                }}
            >
                {`Currently editing: ${editMode}`}
            </Button>
            <div>
                {`Mode: ${mode}`}
            </div>
            <div>
                {`Total features: ${geoJsons.length}`}
            </div>
        </Map>
    );
};
LayerDrawMap.story = {
    name: 'With layer draw',
};

export const TooltipMap = () => (
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
        <MapTooltip
            coordinates={mapOptions.center}
            tooltipOptions={{
                closeOnClick: false,
                closeButton: false,
            }}
        >
            <>
                <h1> Example </h1>
                <p> Tooltips are great to show information over map and marker points. </p>
            </>
        </MapTooltip>
        <MapContainer
            className={styles.map}
        />
    </Map>
);
TooltipMap.story = {
    name: 'With tooltip map',
};

export const MapStatesMap = () => (
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
                layerKey="province-fill"
                layerOptions={{
                    'source-layer': 'provincegeo',
                    type: 'fill',
                    paint: {
                        'fill-color': 'green',
                        'fill-opacity': ['case',
                            ['boolean', ['feature-state', 'hover'], false],
                            0.5,
                            0,
                        ],
                    },
                }}
            />
            <MapLayer
                layerKey="province-line"
                layerOptions={{
                    'source-layer': 'provincegeo',
                    type: 'line',
                    paint: {
                        'line-color': 'blue',

                        'line-width': ['case',
                            ['boolean', ['feature-state', 'selected'], false],
                            5,
                            1,
                        ],
                    },
                }}
            />
            <MapState
                sourceLayer="provincegeo"
                attributes={hoverAttributes}
                attributeKey="hover"
            />
            <MapState
                sourceLayer="provincegeo"
                attributes={selectedAttributes}
                attributeKey="selected"
            />
        </MapSource>
        <MapContainer
            className={styles.map}
        />
    </Map>
);
MapStatesMap.story = {
    name: 'With map states',
};

export const ClickableMap = () => (
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
                onClick={(feature) => {
                    console.warn('Click district fill', feature);
                }}
                layerKey="district-fill"
                layerOptions={{
                    'source-layer': 'districtgeo',
                    type: 'fill',
                    paint: {
                        'fill-color': 'red',
                        'fill-opacity': 0.5,
                    },
                }}
            />
            <MapLayer
                onClick={(feature) => {
                    console.warn('Click province fill', feature);
                    // NOTE: block propagation
                    return true;
                }}
                layerKey="province-fill"
                layerOptions={{
                    'source-layer': 'provincegeo',
                    type: 'fill',
                    paint: {
                        'fill-color': 'green',
                        'fill-opacity': 0.5,
                    },
                    filter: [
                        '==',
                        'title',
                        'Province 5',
                    ],
                }}
            />
        </MapSource>
        <MapContainer
            className={styles.map}
        />
    </Map>
);
ClickableMap.story = {
    name: 'With clickable feature map',
};

export const HoverableMap = () => {
    const [districtHoverId, setDistrictHoverId] = useState(undefined);
    const [provinceHoverId, setProvinceHoverId] = useState(undefined);

    const provinceHovers = useMemo(
        () => {
            if (provinceHoverId === undefined) {
                return [];
            }
            return [{ id: provinceHoverId, value: true }];
        },
        [provinceHoverId],
    );
    const districtHovers = useMemo(
        () => {
            if (districtHoverId === undefined) {
                return [];
            }
            return [{ id: districtHoverId, value: true }];
        },
        [districtHoverId],
    );

    return (
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
                    onMouseEnter={(feature) => {
                        setDistrictHoverId(feature.id);
                    }}
                    onMouseLeave={() => {
                        setDistrictHoverId(undefined);
                    }}
                    layerKey="district-fill"
                    layerOptions={{
                        'source-layer': 'districtgeo',
                        type: 'fill',
                        paint: {
                            'fill-color': 'red',
                            'fill-opacity': ['case',
                                ['boolean', ['feature-state', 'hover'], false],
                                0.5,
                                0.2,
                            ],
                        },
                    }}
                />
                <MapLayer
                    onMouseEnter={(feature) => {
                        setProvinceHoverId(feature.id);
                    }}
                    onMouseLeave={() => {
                        setProvinceHoverId(undefined);
                    }}
                    layerKey="province-fill"
                    layerOptions={{
                        'source-layer': 'provincegeo',
                        type: 'fill',
                        paint: {
                            'fill-color': 'green',
                            'fill-opacity': ['case',
                                ['boolean', ['feature-state', 'hover'], false],
                                0.5,
                                0.2,
                            ],
                        },
                        filter: [
                            '==',
                            'title',
                            'Province 5',
                        ],
                    }}
                />
                <MapState
                    sourceLayer="provincegeo"
                    attributes={provinceHovers}
                    attributeKey="hover"
                />
                <MapState
                    sourceLayer="districtgeo"
                    attributes={districtHovers}
                    attributeKey="hover"
                />
            </MapSource>
            <MapContainer
                className={styles.map}
            />
        </Map>
    );
};
HoverableMap.story = {
    name: 'With hoverable feature map',
};

const tooltipOptions = {
    closeOnClick: false,
    closeButton: false,
    offset: 8,
};

export const NativeHoverableMap = () => {
    const [coordinates, setCoordinates] = useState(undefined);
    const handleMouseEnter = useCallback(
        (_, c) => {
            setCoordinates(c);
        },
        [setCoordinates],
    );

    const handleMouseLeave = useCallback(
        () => {
            setCoordinates(undefined);
        },
        [setCoordinates],
    );
    return (
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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    layerKey="district-fill"
                    layerOptions={{
                        'source-layer': 'districtgeo',
                        type: 'fill',
                        paint: {
                            'fill-color': 'red',
                            'fill-opacity': ['case',
                                ['boolean', ['feature-state', 'hovered'], false],
                                0.5,
                                0.2,
                            ],
                        },
                    }}
                />
                <MapLayer
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    layerKey="province-fill"
                    layerOptions={{
                        'source-layer': 'provincegeo',
                        type: 'fill',
                        paint: {
                            'fill-color': 'green',
                            'fill-opacity': ['case',
                                ['boolean', ['feature-state', 'hovered'], false],
                                0.5,
                                0.2,
                            ],
                        },
                        filter: [
                            '==',
                            'title',
                            'Province 5',
                        ],
                    }}
                />
            </MapSource>
            {coordinates && (
                <MapTooltip
                    coordinates={coordinates}
                    tooltipOptions={tooltipOptions}
                    trackPointer
                >
                    <div>
                        Tooltip
                    </div>
                </MapTooltip>
            )}
            <MapContainer
                className={styles.map}
            />
        </Map>
    );
};
NativeHoverableMap.story = {
    name: 'With native hoverable feature map',
};

export const NativeHoverableWithStateMap = () => {
    const [districtHoverId, setDistrictHoverId] = useState(undefined);

    const KASKI_ID = 46;

    const districtHovers = useMemo(
        () => {
            if (districtHoverId === undefined) {
                return [];
            }
            return [{ id: districtHoverId, value: true }];
        },
        [districtHoverId],
    );

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div
                    onMouseEnter={() => {
                        setDistrictHoverId(KASKI_ID);
                    }}
                    onMouseLeave={() => {
                        setDistrictHoverId(undefined);
                    }}
                    style={{
                        backgroundColor: districtHoverId === KASKI_ID ? 'yellow' : 'white',
                    }}
                >
                    Kaski
                </div>
            </div>
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
                        onMouseEnter={(feature) => {
                            setDistrictHoverId(feature.id);
                        }}
                        onMouseLeave={() => {
                            setDistrictHoverId(undefined);
                        }}
                        layerKey="district-fill"
                        layerOptions={{
                            'source-layer': 'districtgeo',
                            type: 'fill',
                            paint: {
                                'fill-color': 'red',
                                'fill-opacity': ['case',
                                    ['boolean', ['feature-state', 'hover'], false],
                                    0.5,
                                    0.2,
                                ],
                            },
                        }}
                    />
                    <MapState
                        sourceLayer="districtgeo"
                        attributes={districtHovers}
                        attributeKey="hover"
                    />
                </MapSource>
                <MapContainer
                    className={styles.right}
                />
            </Map>
        </div>
    );
};
NativeHoverableWithStateMap.story = {
    name: 'With native hoverable feature map and side-bar',
};
