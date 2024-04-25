import { AllowedVault, AllowedVaultAmino, AllowedVaultSDKType } from "./vault";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters of the earn module. */
export interface Params {
  allowedVaults: AllowedVault[];
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.earn.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters of the earn module. */
export interface ParamsAmino {
  allowed_vaults?: AllowedVaultAmino[];
}
export interface ParamsAminoMsg {
  type: "/kava.earn.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters of the earn module. */
export interface ParamsSDKType {
  allowed_vaults: AllowedVaultSDKType[];
}
function createBaseParams(): Params {
  return {
    allowedVaults: []
  };
}
export const Params = {
  typeUrl: "/kava.earn.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedVaults) {
      AllowedVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      allowedVaults: Array.isArray(object?.allowedVaults) ? object.allowedVaults.map((e: any) => AllowedVault.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedVaults = object.allowedVaults?.map(e => AllowedVault.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.allowedVaults = object.allowed_vaults?.map(e => AllowedVault.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowedVaults) {
      obj.allowed_vaults = message.allowedVaults.map(e => e ? AllowedVault.toAmino(e) : undefined);
    } else {
      obj.allowed_vaults = [];
    }
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
      typeUrl: "/kava.earn.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};