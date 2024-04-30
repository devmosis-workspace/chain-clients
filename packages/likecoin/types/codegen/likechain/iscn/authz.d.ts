import { BinaryWriter } from "../../binary";
export interface UpdateAuthorization {
    $typeUrl?: "/likechain.iscn.UpdateAuthorization";
    iscnIdPrefix: string;
}
export interface UpdateAuthorizationProtoMsg {
    typeUrl: "/likechain.iscn.UpdateAuthorization";
    value: Uint8Array;
}
export interface UpdateAuthorizationAmino {
    iscn_id_prefix?: string;
}
export interface UpdateAuthorizationAminoMsg {
    type: "/likechain.iscn.UpdateAuthorization";
    value: UpdateAuthorizationAmino;
}
export interface UpdateAuthorizationSDKType {
    $typeUrl?: "/likechain.iscn.UpdateAuthorization";
    iscn_id_prefix: string;
}
export declare const UpdateAuthorization: {
    typeUrl: string;
    encode(message: UpdateAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateAuthorization;
    fromPartial(object: Partial<UpdateAuthorization>): UpdateAuthorization;
    fromAmino(object: UpdateAuthorizationAmino): UpdateAuthorization;
    toAmino(message: UpdateAuthorization): UpdateAuthorizationAmino;
    fromAminoMsg(object: UpdateAuthorizationAminoMsg): UpdateAuthorization;
    fromProtoMsg(message: UpdateAuthorizationProtoMsg): UpdateAuthorization;
    toProto(message: UpdateAuthorization): Uint8Array;
    toProtoMsg(message: UpdateAuthorization): UpdateAuthorizationProtoMsg;
};
