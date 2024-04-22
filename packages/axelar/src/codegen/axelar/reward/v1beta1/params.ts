import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  externalChainVotingInflationRate: Uint8Array;
  keyMgmtRelativeInflationRate: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.Params";
  value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
  external_chain_voting_inflation_rate?: string;
  key_mgmt_relative_inflation_rate?: string;
}
export interface ParamsAminoMsg {
  type: "/axelar.reward.v1beta1.Params";
  value: ParamsAmino;
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
  typeUrl: "/axelar.reward.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.external_chain_voting_inflation_rate !== undefined && object.external_chain_voting_inflation_rate !== null) {
      message.externalChainVotingInflationRate = bytesFromBase64(object.external_chain_voting_inflation_rate);
    }
    if (object.key_mgmt_relative_inflation_rate !== undefined && object.key_mgmt_relative_inflation_rate !== null) {
      message.keyMgmtRelativeInflationRate = bytesFromBase64(object.key_mgmt_relative_inflation_rate);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.external_chain_voting_inflation_rate = message.externalChainVotingInflationRate ? base64FromBytes(message.externalChainVotingInflationRate) : undefined;
    obj.key_mgmt_relative_inflation_rate = message.keyMgmtRelativeInflationRate ? base64FromBytes(message.keyMgmtRelativeInflationRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};