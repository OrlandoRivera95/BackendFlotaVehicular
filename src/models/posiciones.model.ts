import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Posiciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  latitud?: number;

  @property({
    type: 'number',
  })
  longitud?: number;

  @property({
    type: 'string',
  })
  altitud?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Posiciones>) {
    super(data);
  }
}

export interface PosicionesRelations {
  // describe navigational properties here
}

export type PosicionesWithRelations = Posiciones & PosicionesRelations;
