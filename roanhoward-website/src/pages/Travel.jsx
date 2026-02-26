import { useState, useEffect, useRef } from 'react';
import { useStaggerReveal } from '../hooks/useScrollReveal';
import './Travel.css';

const REGIONS = [
  { id: 'all',              label: 'All',              color: '#5C5952' },
  { id: 'pacific-nw',      label: 'Pacific Northwest', color: '#2D6A4F' },
  { id: 'alaska',          label: 'Alaska',            color: '#1B4332' },
  { id: 'california',      label: 'California',        color: '#40916C' },
  { id: 'mountain-west',   label: 'Mountain West',     color: '#52B788' },
  { id: 'east-coast',      label: 'East Coast',        color: '#74C69D' },
  { id: 'europe',          label: 'Europe',            color: '#243D28' },
];

const LOCATIONS = [
  { name: 'Seattle',        lat: 47.6062,  lng: -122.3321, region: 'pacific-nw'    },
  { name: 'Portland',       lat: 45.5051,  lng: -122.6750, region: 'pacific-nw'    },
  { name: 'Vancouver BC',   lat: 49.2827,  lng: -123.1207, region: 'pacific-nw'    },
  { name: 'Spokane',        lat: 47.6588,  lng: -117.4260, region: 'pacific-nw'    },
  { name: 'Juneau',         lat: 58.3005,  lng: -134.4197, region: 'alaska'        },
  { name: 'San Francisco',  lat: 37.7749,  lng: -122.4194, region: 'california'    },
  { name: 'Palo Alto',      lat: 37.4419,  lng: -122.1430, region: 'california'    },
  { name: 'San Diego',      lat: 32.7157,  lng: -117.1611, region: 'california'    },
  { name: 'Reno',           lat: 39.5296,  lng: -119.8138, region: 'mountain-west' },
  { name: "Coeur d'Alene",  lat: 47.6777,  lng: -116.7805, region: 'mountain-west' },
  { name: 'Billings',       lat: 45.7833,  lng: -108.5007, region: 'mountain-west' },
  { name: 'Salt Lake City', lat: 40.7608,  lng: -111.8910, region: 'mountain-west' },
  { name: 'Tucson',         lat: 32.2226,  lng: -110.9747, region: 'mountain-west' },
  { name: 'New York',       lat: 40.7128,  lng:  -74.0060, region: 'east-coast'    },
  { name: 'Paris',          lat: 48.8566,  lng:    2.3522, region: 'europe'        },
  { name: 'Bern',           lat: 46.9480,  lng:    7.4474, region: 'europe'        },
  { name: 'London',         lat: 51.5074,  lng:   -0.1278, region: 'europe'        },
  { name: 'Berlin',         lat: 52.5200,  lng:   13.4050, region: 'europe'        },
  { name: 'Amsterdam',      lat: 52.3676,  lng:    4.9041, region: 'europe'        },
  { name: 'Brussels',       lat: 50.8503,  lng:    4.3517, region: 'europe'        },
  { name: 'Milan',          lat: 45.4642,  lng:    9.1900, region: 'europe'        },
  { name: 'Rome',           lat: 41.9028,  lng:   12.4964, region: 'europe'        },
  { name: 'Split',          lat: 43.5081,  lng:   16.4402, region: 'europe'        },
  { name: 'Athens',         lat: 37.9838,  lng:   23.7275, region: 'europe'        },
  { name: 'Madrid',         lat: 40.4168,  lng:   -3.7038, region: 'europe'        },
];

function getColor(regionId) {
  const r = REGIONS.find(r => r.id === regionId);
  return r ? r.color : '#5C5952';
}

export default function Travel() {
  const [activeRegion, setActiveRegion] = useState('all');
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const listRef = useStaggerReveal();

  const filtered = activeRegion === 'all'
    ? LOCATIONS
    : LOCATIONS.filter(l => l.region === activeRegion);

  // Dynamically import Leaflet and initialise map
  useEffect(() => {
    let map;
    async function initMap() {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!mapRef.current || mapInstanceRef.current) return;

      map = L.map(mapRef.current, {
        center: [35, 10],
        zoom: 2,
        scrollWheelZoom: true,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;
      renderMarkers(L, map, LOCATIONS);
    }

    function renderMarkers(L, map, locations) {
      markersRef.current.forEach(m => m.remove());
      markersRef.current = [];
      locations.forEach(loc => {
        const color = getColor(loc.region);
        const icon = L.divIcon({
          className: '',
          html: `<div style="
            width:12px;height:12px;border-radius:50%;
            background:${color};border:2px solid #fff;
            box-shadow:0 1px 4px rgba(0,0,0,0.3);
          "></div>`,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        });
        const marker = L.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindTooltip(loc.name, { permanent: false, direction: 'top', offset: [0, -8] });
        markersRef.current.push(marker);
      });
    }

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers when region filter changes
  useEffect(() => {
    async function updateMarkers() {
      const map = mapInstanceRef.current;
      if (!map) return;
      const L = (await import('leaflet')).default;

      markersRef.current.forEach(m => m.remove());
      markersRef.current = [];

      filtered.forEach(loc => {
        const color = getColor(loc.region);
        const icon = L.divIcon({
          className: '',
          html: `<div style="
            width:12px;height:12px;border-radius:50%;
            background:${color};border:2px solid #fff;
            box-shadow:0 1px 4px rgba(0,0,0,0.3);
          "></div>`,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        });
        const marker = L.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindTooltip(loc.name, { permanent: false, direction: 'top', offset: [0, -8] });
        markersRef.current.push(marker);
      });
    }
    updateMarkers();
  }, [activeRegion, filtered]);

  return (
    <div className="travel-page">
      {/* Header */}
      <header className="travel-header section">
        <p className="travel-label">Exploration</p>
        <h1 className="travel-title">Places I&apos;ve been.</h1>
        <p className="travel-count">{LOCATIONS.length} cities across {REGIONS.length - 1} regions</p>
      </header>

      {/* Filter buttons */}
      <div className="travel-filters section">
        {REGIONS.map(r => (
          <button
            key={r.id}
            className={`travel-filter${activeRegion === r.id ? ' travel-filter--active' : ''}`}
            style={{ '--region-color': r.color }}
            onClick={() => setActiveRegion(r.id)}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="travel-map-wrap">
        <div ref={mapRef} className="travel-map" />
      </div>

      {/* Location list */}
      <section className="travel-list section" ref={listRef}>
        {filtered.map((loc, i) => (
          <div key={i} className="travel-location reveal" style={{ transitionDelay: `${i * 0.03}s` }}>
            <span
              className="travel-location__dot"
              style={{ background: getColor(loc.region) }}
            />
            <span className="travel-location__name">{loc.name}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
