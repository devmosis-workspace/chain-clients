import { BinaryWriter } from "../binary";
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuper {
    description: string;
    address: string;
    addedBy: string;
}
export interface MsgAddSuperProtoMsg {
    typeUrl: "/irishub.guardian.MsgAddSuper";
    value: Uint8Array;
}
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuperAmino {
    description: string;
    address: string;
    added_by: string;
}
export interface MsgAddSuperAminoMsg {
    type: "/irishub.guardian.MsgAddSuper";
    value: MsgAddSuperAmino;
}
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuperSDKType {
    description: string;
    address: string;
    added_by: string;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponse {
}
export interface MsgAddSuperResponseProtoMsg {
    typeUrl: "/irishub.guardian.MsgAddSuperResponse";
    value: Uint8Array;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponseAmino {
}
export interface MsgAddSuperResponseAminoMsg {
    type: "/irishub.guardian.MsgAddSuperResponse";
    value: MsgAddSuperResponseAmino;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponseSDKType {
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuper {
    address: string;
    deletedBy: string;
}
export interface MsgDeleteSuperProtoMsg {
    typeUrl: "/irishub.guardian.MsgDeleteSuper";
    value: Uint8Array;
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuperAmino {
    address: string;
    deleted_by: string;
}
export interface MsgDeleteSuperAminoMsg {
    type: "/irishub.guardian.MsgDeleteSuper";
    value: MsgDeleteSuperAmino;
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuperSDKType {
    address: string;
    deleted_by: string;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponse {
}
export interface MsgDeleteSuperResponseProtoMsg {
    typeUrl: "/irishub.guardian.MsgDeleteSuperResponse";
    value: Uint8Array;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponseAmino {
}
export interface MsgDeleteSuperResponseAminoMsg {
    type: "/irishub.guardian.MsgDeleteSuperResponse";
    value: MsgDeleteSuperResponseAmino;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponseSDKType {
}
export declare const MsgAddSuper: {
    typeUrl: string;
    encode(message: MsgAddSuper, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddSuper;
    fromPartial(object: Partial<MsgAddSuper>): MsgAddSuper;
    fromAmino(object: MsgAddSuperAmino): MsgAddSuper;
    toAmino(message: MsgAddSuper): MsgAddSuperAmino;
    fromAminoMsg(object: MsgAddSuperAminoMsg): MsgAddSuper;
    fromProtoMsg(message: MsgAddSuperProtoMsg): MsgAddSuper;
    toProto(message: MsgAddSuper): Uint8Array;
    toProtoMsg(message: MsgAddSuper): MsgAddSuperProtoMsg;
};
export declare const MsgAddSuperResponse: {
    typeUrl: string;
    encode(_: MsgAddSuperResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddSuperResponse;
    fromPartial(_: Partial<MsgAddSuperResponse>): MsgAddSuperResponse;
    fromAmino(_: MsgAddSuperResponseAmino): MsgAddSuperResponse;
    toAmino(_: MsgAddSuperResponse): MsgAddSuperResponseAmino;
    fromAminoMsg(object: MsgAddSuperResponseAminoMsg): MsgAddSuperResponse;
    fromProtoMsg(message: MsgAddSuperResponseProtoMsg): MsgAddSuperResponse;
    toProto(message: MsgAddSuperResponse): Uint8Array;
    toProtoMsg(message: MsgAddSuperResponse): MsgAddSuperResponseProtoMsg;
};
export declare const MsgDeleteSuper: {
    typeUrl: string;
    encode(message: MsgDeleteSuper, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteSuper;
    fromPartial(object: Partial<MsgDeleteSuper>): MsgDeleteSuper;
    fromAmino(object: MsgDeleteSuperAmino): MsgDeleteSuper;
    toAmino(message: MsgDeleteSuper): MsgDeleteSuperAmino;
    fromAminoMsg(object: MsgDeleteSuperAminoMsg): MsgDeleteSuper;
    fromProtoMsg(message: MsgDeleteSuperProtoMsg): MsgDeleteSuper;
    toProto(message: MsgDeleteSuper): Uint8Array;
    toProtoMsg(message: MsgDeleteSuper): MsgDeleteSuperProtoMsg;
};
export declare const MsgDeleteSuperResponse: {
    typeUrl: string;
    encode(_: MsgDeleteSuperResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteSuperResponse;
    fromPartial(_: Partial<MsgDeleteSuperResponse>): MsgDeleteSuperResponse;
    fromAmino(_: MsgDeleteSuperResponseAmino): MsgDeleteSuperResponse;
    toAmino(_: MsgDeleteSuperResponse): MsgDeleteSuperResponseAmino;
    fromAminoMsg(object: MsgDeleteSuperResponseAminoMsg): MsgDeleteSuperResponse;
    fromProtoMsg(message: MsgDeleteSuperResponseProtoMsg): MsgDeleteSuperResponse;
    toProto(message: MsgDeleteSuperResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteSuperResponse): MsgDeleteSuperResponseProtoMsg;
};
