import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  externalChainVotingInflationRate: Uint8Array;
  keyMgmtRelativeInflationRate: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  external_chain_voting_inflation_rate: Uint8Array;
  key_mgmt_relative_inflation_rate: Uint8Array;
}
function createBaseParams(): Params {
  return {
    externalChainVotingInflationRate: new Uint8Array(),
    keyMgmtRelativeInflationRate: new Uint8Array()
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalChainVotingInflationRate.length !== 0) {
      writer.uint32(10).bytes(message.externalChainVotingInflationRate);
    }
    if (message.keyMgmtRelativeInflationRate.length !== 0) {
      writer.uint32(18).bytes(message.keyMgmtRelativeInflationRate);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      externalChainVotingInflationRate: isSet(object.externalChainVotingInflationRate) ? bytesFromBase64(object.externalChainVotingInflationRate) : new Uint8Array(),
      keyMgmtRelativeInflationRate: isSet(object.keyMgmtRelativeInflationRate) ? bytesFromBase64(object.keyMgmtRelativeInflationRate) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.externalChainVotingInflationRate = object.externalChainVotingInflationRate ?? new Uint8Array();
    message.keyMgmtRelativeInflationRate = object.keyMgmtRelativeInflationRate ?? new Uint8Array();
    return message;
  }
};