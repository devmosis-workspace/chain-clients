import { Params, ParamsSDKType } from "./params";
import { PollMetadata, PollMetadataSDKType } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface GenesisState {
  params?: Params;
  pollMetadatas: PollMetadata[];
}
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  poll_metadatas: PollMetadataSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    pollMetadatas: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pollMetadatas) {
      PollMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      pollMetadatas: Array.isArray(object?.pollMetadatas) ? object.pollMetadatas.map((e: any) => PollMetadata.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.pollMetadatas = object.pollMetadatas?.map(e => PollMetadata.fromPartial(e)) || [];
    return message;
  }
};