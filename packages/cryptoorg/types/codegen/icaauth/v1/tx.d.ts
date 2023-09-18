import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */
export interface MsgRegisterAccount {
    /** owner represents the owner of the interchain account */
    owner: string;
    /** connectionId represents the IBC `connectionId` of the host chain */
    connectionId: string;
    /** version represents the version of the ICA channel */
    version: string;
}
export interface MsgRegisterAccountProtoMsg {
    typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccount";
    value: Uint8Array;
}
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */
export interface MsgRegisterAccountAmino {
    /** owner represents the owner of the interchain account */
    owner: string;
    /** connectionId represents the IBC `connectionId` of the host chain */
    connectionId: string;
    /** version represents the version of the ICA channel */
    version: string;
}
export interface MsgRegisterAccountAminoMsg {
    type: "/chainmain.icaauth.v1.MsgRegisterAccount";
    value: MsgRegisterAccountAmino;
}
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */
export interface MsgRegisterAccountSDKType {
    owner: string;
    connectionId: string;
    version: string;
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */
export interface MsgRegisterAccountResponse {
}
export interface MsgRegisterAccountResponseProtoMsg {
    typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccountResponse";
    value: Uint8Array;
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */
export interface MsgRegisterAccountResponseAmino {
}
export interface MsgRegisterAccountResponseAminoMsg {
    type: "/chainmain.icaauth.v1.MsgRegisterAccountResponse";
    value: MsgRegisterAccountResponseAmino;
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */
export interface MsgRegisterAccountResponseSDKType {
}
/** MsgSubmitTx defines the request message for MsgSubmitTx */
export interface MsgSubmitTx {
    /** owner represents the owner of the interchain account */
    owner: string;
    /** connectionId represents the IBC `connectionId` of the host chain */
    connectionId: string;
    /** msgs represents the transactions to be submitted to the host chain */
    msgs: (Any)[] | Any[];
    /** timeoutDuration represents the timeout duration for the IBC packet from last block */
    timeoutDuration: Duration;
}
export interface MsgSubmitTxProtoMsg {
    typeUrl: "/chainmain.icaauth.v1.MsgSubmitTx";
    value: Uint8Array;
}
export type MsgSubmitTxEncoded = Omit<MsgSubmitTx, "msgs"> & {
    /** msgs represents the transactions to be submitted to the host chain */ msgs: (AnyProtoMsg)[];
};
/** MsgSubmitTx defines the request message for MsgSubmitTx */
export interface MsgSubmitTxAmino {
    /** owner represents the owner of the interchain account */
    owner: string;
    /** connectionId represents the IBC `connectionId` of the host chain */
    connectionId: string;
    /** msgs represents the transactions to be submitted to the host chain */
    msgs: AnyAmino[];
    /** timeoutDuration represents the timeout duration for the IBC packet from last block */
    timeoutDuration?: DurationAmino;
}
export interface MsgSubmitTxAminoMsg {
    type: "/chainmain.icaauth.v1.MsgSubmitTx";
    value: MsgSubmitTxAmino;
}
/** MsgSubmitTx defines the request message for MsgSubmitTx */
export interface MsgSubmitTxSDKType {
    owner: string;
    connectionId: string;
    msgs: (AnySDKType)[];
    timeoutDuration: DurationSDKType;
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */
export interface MsgSubmitTxResponse {
}
export interface MsgSubmitTxResponseProtoMsg {
    typeUrl: "/chainmain.icaauth.v1.MsgSubmitTxResponse";
    value: Uint8Array;
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */
export interface MsgSubmitTxResponseAmino {
}
export interface MsgSubmitTxResponseAminoMsg {
    type: "/chainmain.icaauth.v1.MsgSubmitTxResponse";
    value: MsgSubmitTxResponseAmino;
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */
export interface MsgSubmitTxResponseSDKType {
}
export declare const MsgRegisterAccount: {
    typeUrl: string;
    encode(message: MsgRegisterAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterAccount;
    fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount;
    fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount;
    toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino;
    fromAminoMsg(object: MsgRegisterAccountAminoMsg): MsgRegisterAccount;
    fromProtoMsg(message: MsgRegisterAccountProtoMsg): MsgRegisterAccount;
    toProto(message: MsgRegisterAccount): Uint8Array;
    toProtoMsg(message: MsgRegisterAccount): MsgRegisterAccountProtoMsg;
};
export declare const MsgRegisterAccountResponse: {
    typeUrl: string;
    encode(_: MsgRegisterAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterAccountResponse;
    fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
    fromAmino(_: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse;
    toAmino(_: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino;
    fromAminoMsg(object: MsgRegisterAccountResponseAminoMsg): MsgRegisterAccountResponse;
    fromProtoMsg(message: MsgRegisterAccountResponseProtoMsg): MsgRegisterAccountResponse;
    toProto(message: MsgRegisterAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseProtoMsg;
};
export declare const MsgSubmitTx: {
    typeUrl: string;
    encode(message: MsgSubmitTx, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitTx;
    fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx;
    fromAmino(object: MsgSubmitTxAmino): MsgSubmitTx;
    toAmino(message: MsgSubmitTx): MsgSubmitTxAmino;
    fromAminoMsg(object: MsgSubmitTxAminoMsg): MsgSubmitTx;
    fromProtoMsg(message: MsgSubmitTxProtoMsg): MsgSubmitTx;
    toProto(message: MsgSubmitTx): Uint8Array;
    toProtoMsg(message: MsgSubmitTx): MsgSubmitTxProtoMsg;
};
export declare const MsgSubmitTxResponse: {
    typeUrl: string;
    encode(_: MsgSubmitTxResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubmitTxResponse;
    fromPartial(_: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
    fromAmino(_: MsgSubmitTxResponseAmino): MsgSubmitTxResponse;
    toAmino(_: MsgSubmitTxResponse): MsgSubmitTxResponseAmino;
    fromAminoMsg(object: MsgSubmitTxResponseAminoMsg): MsgSubmitTxResponse;
    fromProtoMsg(message: MsgSubmitTxResponseProtoMsg): MsgSubmitTxResponse;
    toProto(message: MsgSubmitTxResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitTxResponse): MsgSubmitTxResponseProtoMsg;
};
export declare const Sdk_Msg_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Sdk_Msg_FromAmino: (content: AnyAmino) => Any;
export declare const Sdk_Msg_ToAmino: (content: Any) => AnyAmino;
