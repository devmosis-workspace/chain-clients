import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParams {
  /**
   * min_initial_deposit_rate minimum % of TotalDeposit
   * author of the proposal must put in order for proposal tx to be committed
   */
  minInitialDepositRate: Uint8Array;
}
export interface DepositParamsProtoMsg {
  typeUrl: "/akash.gov.v1beta3.DepositParams";
  value: Uint8Array;
}
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParamsAmino {
  /**
   * min_initial_deposit_rate minimum % of TotalDeposit
   * author of the proposal must put in order for proposal tx to be committed
   */
  min_initial_deposit_rate?: string;
}
export interface DepositParamsAminoMsg {
  type: "/akash.gov.v1beta3.DepositParams";
  value: DepositParamsAmino;
}
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParamsSDKType {
  min_initial_deposit_rate: Uint8Array;
}
function createBaseDepositParams(): DepositParams {
  return {
    minInitialDepositRate: new Uint8Array()
  };
}
export const DepositParams = {
  typeUrl: "/akash.gov.v1beta3.DepositParams",
  encode(message: DepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minInitialDepositRate.length !== 0) {
      writer.uint32(10).bytes(message.minInitialDepositRate);
    }
    return writer;
  },
  fromJSON(object: any): DepositParams {
    return {
      minInitialDepositRate: isSet(object.minInitialDepositRate) ? bytesFromBase64(object.minInitialDepositRate) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.minInitialDepositRate = object.minInitialDepositRate ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DepositParamsAmino): DepositParams {
    const message = createBaseDepositParams();
    if (object.min_initial_deposit_rate !== undefined && object.min_initial_deposit_rate !== null) {
      message.minInitialDepositRate = bytesFromBase64(object.min_initial_deposit_rate);
    }
    return message;
  },
  toAmino(message: DepositParams): DepositParamsAmino {
    const obj: any = {};
    obj.min_initial_deposit_rate = message.minInitialDepositRate ? base64FromBytes(message.minInitialDepositRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositParamsAminoMsg): DepositParams {
    return DepositParams.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/akash.gov.v1beta3.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};