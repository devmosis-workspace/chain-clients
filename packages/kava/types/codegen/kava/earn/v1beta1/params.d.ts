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
    allowed_vaults: AllowedVaultAmino[];
}
export interface ParamsAminoMsg {
    type: "/kava.earn.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters of the earn module. */
export interface ParamsSDKType {
    allowed_vaults: AllowedVaultSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
