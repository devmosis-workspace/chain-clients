import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccount {
    owner: string;
    connectionId: string;
    version: string;
}
export interface MsgRegisterAccountProtoMsg {
    typeUrl: "/secret.intertx.v1beta1.MsgRegisterAccount";
    value: Uint8Array;
}
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccountAmino {
    owner: string;
    connection_id: string;
    version: string;
}
export interface MsgRegisterAccountAminoMsg {
    type: "/secret.intertx.v1beta1.MsgRegisterAccount";
    value: MsgRegisterAccountAmino;
}
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccountSDKType {
    owner: string;
    connection_id: string;
    version: string;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {
}
export interface MsgRegisterAccountResponseProtoMsg {
    typeUrl: "/secret.intertx.v1beta1.MsgRegisterAccountResponse";
    value: Uint8Array;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseAmino {
}
export interface MsgRegisterAccountResponseAminoMsg {
    type: "/secret.intertx.v1beta1.MsgRegisterAccountResponse";
    value: MsgRegisterAccountResponseAmino;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseSDKType {
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed using an interchain account */
export interface MsgSubmitTx {
    owner: Uint8Array;
    connectionId: string;
    msg: Any;
}
export interface MsgSubmitTxProtoMsg {
    typeUrl: "/secret.intertx.v1beta1.MsgSubmitTx";
    value: Uint8Array;
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed using an interchain account */
export interface MsgSubmitTxAmino {
    owner: Uint8Array;
    connection_id: string;
    msg?: AnyAmino;
}
export interface MsgSubmitTxAminoMsg {
    type: "/secret.intertx.v1beta1.MsgSubmitTx";
    value: MsgSubmitTxAmino;
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed using an interchain account */
export interface MsgSubmitTxSDKType {
    owner: Uint8Array;
    connection_id: string;
    msg: AnySDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponse {
}
export interface MsgSubmitTxResponseProtoMsg {
    typeUrl: "/secret.intertx.v1beta1.MsgSubmitTxResponse";
    value: Uint8Array;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponseAmino {
}
export interface MsgSubmitTxResponseAminoMsg {
    type: "/secret.intertx.v1beta1.MsgSubmitTxResponse";
    value: MsgSubmitTxResponseAmino;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
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
