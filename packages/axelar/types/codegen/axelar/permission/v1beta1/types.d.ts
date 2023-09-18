import { Role } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
export interface GovAccount {
    address: Uint8Array;
    role: Role;
}
export interface GovAccountProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.GovAccount";
    value: Uint8Array;
}
export interface GovAccountAmino {
    address: Uint8Array;
    role: Role;
}
export interface GovAccountAminoMsg {
    type: "/axelar.permission.v1beta1.GovAccount";
    value: GovAccountAmino;
}
export interface GovAccountSDKType {
    address: Uint8Array;
    role: Role;
}
export declare const GovAccount: {
    typeUrl: string;
    encode(message: GovAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GovAccount;
    fromPartial(object: Partial<GovAccount>): GovAccount;
    fromAmino(object: GovAccountAmino): GovAccount;
    toAmino(message: GovAccount): GovAccountAmino;
    fromAminoMsg(object: GovAccountAminoMsg): GovAccount;
    fromProtoMsg(message: GovAccountProtoMsg): GovAccount;
    toProto(message: GovAccount): Uint8Array;
    toProtoMsg(message: GovAccount): GovAccountProtoMsg;
};
