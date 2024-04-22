import { DepositParams, DepositParamsAmino, DepositParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
  depositParams: DepositParams;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.gov.v1beta3.GenesisState";
  value: Uint8Array;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateAmino {
  deposit_params?: DepositParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/akash.gov.v1beta3.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
  deposit_params: DepositParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    depositParams: DepositParams.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/akash.gov.v1beta3.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.depositParams = DepositParams.fromAmino(object.deposit_params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
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
      typeUrl: "/akash.gov.v1beta3.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};