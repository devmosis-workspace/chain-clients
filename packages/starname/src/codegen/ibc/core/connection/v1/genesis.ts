import { IdentifiedConnection, IdentifiedConnectionSDKType, ConnectionPaths, ConnectionPathsSDKType } from "./connection";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
  connections: IdentifiedConnection[];
  clientConnectionPaths: ConnectionPaths[];
  /** the sequence for the next generated connection identifier */
  nextConnectionSequence: Long;
}
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisStateSDKType {
  connections: IdentifiedConnectionSDKType[];
  client_connection_paths: ConnectionPathsSDKType[];
  next_connection_sequence: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    connections: [],
    clientConnectionPaths: [],
    nextConnectionSequence: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientConnectionPaths) {
      ConnectionPaths.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.nextConnectionSequence.isZero()) {
      writer.uint32(24).uint64(message.nextConnectionSequence);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromJSON(e)) : [],
      clientConnectionPaths: Array.isArray(object?.clientConnectionPaths) ? object.clientConnectionPaths.map((e: any) => ConnectionPaths.fromJSON(e)) : [],
      nextConnectionSequence: isSet(object.nextConnectionSequence) ? Long.fromValue(object.nextConnectionSequence) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
    message.clientConnectionPaths = object.clientConnectionPaths?.map(e => ConnectionPaths.fromPartial(e)) || [];
    message.nextConnectionSequence = object.nextConnectionSequence !== undefined && object.nextConnectionSequence !== null ? Long.fromValue(object.nextConnectionSequence) : Long.UZERO;
    return message;
  }
};