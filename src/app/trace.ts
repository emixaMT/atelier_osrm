import {GeoJSON} from 'geojson';

export class Trace {
  constructor(public readonly id: number,
              public readonly geometry: GeoJSON.LineString
  ) {}
  getId(): number {
    return this.id;
  }
  getGeometry(): GeoJSON.LineString {
    return this.geometry;
  }
}

export function extractTrace(data): Trace {
  return new Trace(
    data.id,
    data.geometry,
  );
}
