import { BinaryWriter } from "../../../../binary";
export interface KeygenRequest {
    keyUid: string;
    /** used only for logging */
    partyUid: string;
}
export interface KeygenRequestProtoMsg {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenRequest";
    value: Uint8Array;
}
export interface KeygenRequestAmino {
    key_uid: string;
    /** used only for logging */
    party_uid: string;
}
export interface KeygenRequestAminoMsg {
    type: "/axelar.tss.tofnd.v1beta1.KeygenRequest";
    value: KeygenRequestAmino;
}
export interface KeygenRequestSDKType {
    key_uid: string;
    party_uid: string;
}
export interface KeygenResponse {
    /** SEC1-encoded compressed curve point */
    pubKey?: Uint8Array;
    /** reply with an error message if keygen fails */
    error?: string;
}
export interface KeygenResponseProtoMsg {
    typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResponse";
    value: Uint8Array;
}
export interface KeygenResponseAmino {
    /** SEC1-encoded compressed curve point */
    pub_key?: Uint8Array;
    /** reply with an error message if keygen fails */
    error?: string;
}
export interface KeygenResponseAminoMsg {
    type: "/axelar.tss.tofnd.v1beta1.KeygenResponse";
    value: KeygenResponseAmino;
}
export interface KeygenResponseSDKType {
    pub_key?: Uint8Array;
    error?: string;
}
export interface SignRequest {
    keyUid: string;
    /** 32-byte pre-hashed message digest */
    msgToSign: Uint8Array;
    /** used only for logging */
    partyUid: string;
    /**
     * SEC1-encoded compressed pub key bytes to find the right
     * mnemonic. Latest is used, if empty.
     */
    pubKey: Uint8Array;
}
export interface SignRequestProtoMsg {
    typeUrl: "/axelar.tss.tofnd.v1beta1.SignRequest";
    value: Uint8Array;
}
export interface SignRequestAmino {
    key_uid: string;
    /** 32-byte pre-hashed message digest */
    msg_to_sign: Uint8Array;
    /** used only for logging */
    party_uid: string;
    /**
     * SEC1-encoded compressed pub key bytes to find the right
     * mnemonic. Latest is used, if empty.
     */
    pub_key: Uint8Array;
}
export interface SignRequestAminoMsg {
    type: "/axelar.tss.tofnd.v1beta1.SignRequest";
    value: SignRequestAmino;
}
export interface SignRequestSDKType {
    key_uid: string;
    msg_to_sign: Uint8Array;
    party_uid: string;
    pub_key: Uint8Array;
}
export interface SignResponse {
    /** ASN.1 DER-encoded ECDSA signature */
    signature?: Uint8Array;
    /** reply with an error message if sign fails */
    error?: string;
}
export interface SignResponseProtoMsg {
    typeUrl: "/axelar.tss.tofnd.v1beta1.SignResponse";
    value: Uint8Array;
}
export interface SignResponseAmino {
    /** ASN.1 DER-encoded ECDSA signature */
    signature?: Uint8Array;
    /** reply with an error message if sign fails */
    error?: string;
}
export interface SignResponseAminoMsg {
    type: "/axelar.tss.tofnd.v1beta1.SignResponse";
    value: SignResponseAmino;
}
export interface SignResponseSDKType {
    signature?: Uint8Array;
    error?: string;
}
export declare const KeygenRequest: {
    typeUrl: string;
    encode(message: KeygenRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenRequest;
    fromPartial(object: Partial<KeygenRequest>): KeygenRequest;
    fromAmino(object: KeygenRequestAmino): KeygenRequest;
    toAmino(message: KeygenRequest): KeygenRequestAmino;
    fromAminoMsg(object: KeygenRequestAminoMsg): KeygenRequest;
    fromProtoMsg(message: KeygenRequestProtoMsg): KeygenRequest;
    toProto(message: KeygenRequest): Uint8Array;
    toProtoMsg(message: KeygenRequest): KeygenRequestProtoMsg;
};
export declare const KeygenResponse: {
    typeUrl: string;
    encode(message: KeygenResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenResponse;
    fromPartial(object: Partial<KeygenResponse>): KeygenResponse;
    fromAmino(object: KeygenResponseAmino): KeygenResponse;
    toAmino(message: KeygenResponse): KeygenResponseAmino;
    fromAminoMsg(object: KeygenResponseAminoMsg): KeygenResponse;
    fromProtoMsg(message: KeygenResponseProtoMsg): KeygenResponse;
    toProto(message: KeygenResponse): Uint8Array;
    toProtoMsg(message: KeygenResponse): KeygenResponseProtoMsg;
};
export declare const SignRequest: {
    typeUrl: string;
    encode(message: SignRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignRequest;
    fromPartial(object: Partial<SignRequest>): SignRequest;
    fromAmino(object: SignRequestAmino): SignRequest;
    toAmino(message: SignRequest): SignRequestAmino;
    fromAminoMsg(object: SignRequestAminoMsg): SignRequest;
    fromProtoMsg(message: SignRequestProtoMsg): SignRequest;
    toProto(message: SignRequest): Uint8Array;
    toProtoMsg(message: SignRequest): SignRequestProtoMsg;
};
export declare const SignResponse: {
    typeUrl: string;
    encode(message: SignResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignResponse;
    fromPartial(object: Partial<SignResponse>): SignResponse;
    fromAmino(object: SignResponseAmino): SignResponse;
    toAmino(message: SignResponse): SignResponseAmino;
    fromAminoMsg(object: SignResponseAminoMsg): SignResponse;
    fromProtoMsg(message: SignResponseProtoMsg): SignResponse;
    toProto(message: SignResponse): Uint8Array;
    toProtoMsg(message: SignResponse): SignResponseProtoMsg;
};
