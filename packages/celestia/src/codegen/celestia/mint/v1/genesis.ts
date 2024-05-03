import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** BondDenom is the denomination of the token that should be minted. */
  bondDenom: string;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/celestia.mint.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
  /** BondDenom is the denomination of the token that should be minted. */
  bond_denom?: string;
}
export interface GenesisStateAminoMsg {
  type: "/celestia.mint.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
  bond_denom: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    bondDenom: ""
  };
}
export const GenesisState = {
  typeUrl: "/celestia.mint.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : ""
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.bondDenom = object.bondDenom ?? "";
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};