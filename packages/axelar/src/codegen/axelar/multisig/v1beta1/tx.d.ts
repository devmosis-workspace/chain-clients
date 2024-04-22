import { BinaryWriter } from "../../../binary";
export interface StartKeygenRequest {
    sender: string;
    keyId: string;
}
export interface StartKeygenRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.StartKeygenRequest";
    value: Uint8Array;
}
export interface StartKeygenRequestAmino {
    sender?: string;
    key_id?: string;
}
export interface StartKeygenRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.StartKeygenRequest";
    value: StartKeygenRequestAmino;
}
export interface StartKeygenRequestSDKType {
    sender: string;
    key_id: string;
}
export interface StartKeygenResponse {
}
export interface StartKeygenResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.StartKeygenResponse";
    value: Uint8Array;
}
export interface StartKeygenResponseAmino {
}
export interface StartKeygenResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.StartKeygenResponse";
    value: StartKeygenResponseAmino;
}
export interface StartKeygenResponseSDKType {
}
export interface SubmitPubKeyRequest {
    sender: string;
    keyId: string;
    pubKey: Uint8Array;
    signature: Uint8Array;
}
export interface SubmitPubKeyRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyRequest";
    value: Uint8Array;
}
export interface SubmitPubKeyRequestAmino {
    sender?: string;
    key_id?: string;
    pub_key?: string;
    signature?: string;
}
export interface SubmitPubKeyRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.SubmitPubKeyRequest";
    value: SubmitPubKeyRequestAmino;
}
export interface SubmitPubKeyRequestSDKType {
    sender: string;
    key_id: string;
    pub_key: Uint8Array;
    signature: Uint8Array;
}
export interface SubmitPubKeyResponse {
}
export interface SubmitPubKeyResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SubmitPubKeyResponse";
    value: Uint8Array;
}
export interface SubmitPubKeyResponseAmino {
}
export interface SubmitPubKeyResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.SubmitPubKeyResponse";
    value: SubmitPubKeyResponseAmino;
}
export interface SubmitPubKeyResponseSDKType {
}
export interface SubmitSignatureRequest {
    sender: string;
    sigId: bigint;
    signature: Uint8Array;
}
export interface SubmitSignatureRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureRequest";
    value: Uint8Array;
}
export interface SubmitSignatureRequestAmino {
    sender?: string;
    sig_id?: string;
    signature?: string;
}
export interface SubmitSignatureRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.SubmitSignatureRequest";
    value: SubmitSignatureRequestAmino;
}
export interface SubmitSignatureRequestSDKType {
    sender: string;
    sig_id: bigint;
    signature: Uint8Array;
}
export interface SubmitSignatureResponse {
}
export interface SubmitSignatureResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.SubmitSignatureResponse";
    value: Uint8Array;
}
export interface SubmitSignatureResponseAmino {
}
export interface SubmitSignatureResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.SubmitSignatureResponse";
    value: SubmitSignatureResponseAmino;
}
export interface SubmitSignatureResponseSDKType {
}
export interface RotateKeyRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
export interface RotateKeyRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.RotateKeyRequest";
    value: Uint8Array;
}
export interface RotateKeyRequestAmino {
    sender?: string;
    chain?: string;
    key_id?: string;
}
export interface RotateKeyRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.RotateKeyRequest";
    value: RotateKeyRequestAmino;
}
export interface RotateKeyRequestSDKType {
    sender: Uint8Array;
    chain: string;
    key_id: string;
}
export interface RotateKeyResponse {
}
export interface RotateKeyResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.RotateKeyResponse";
    value: Uint8Array;
}
export interface RotateKeyResponseAmino {
}
export interface RotateKeyResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.RotateKeyResponse";
    value: RotateKeyResponseAmino;
}
export interface RotateKeyResponseSDKType {
}
export interface KeygenOptOutRequest {
    sender: Uint8Array;
}
export interface KeygenOptOutRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutRequest";
    value: Uint8Array;
}
export interface KeygenOptOutRequestAmino {
    sender?: string;
}
export interface KeygenOptOutRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenOptOutRequest";
    value: KeygenOptOutRequestAmino;
}
export interface KeygenOptOutRequestSDKType {
    sender: Uint8Array;
}
export interface KeygenOptOutResponse {
}
export interface KeygenOptOutResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptOutResponse";
    value: Uint8Array;
}
export interface KeygenOptOutResponseAmino {
}
export interface KeygenOptOutResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenOptOutResponse";
    value: KeygenOptOutResponseAmino;
}
export interface KeygenOptOutResponseSDKType {
}
export interface KeygenOptInRequest {
    sender: Uint8Array;
}
export interface KeygenOptInRequestProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptInRequest";
    value: Uint8Array;
}
export interface KeygenOptInRequestAmino {
    sender?: string;
}
export interface KeygenOptInRequestAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenOptInRequest";
    value: KeygenOptInRequestAmino;
}
export interface KeygenOptInRequestSDKType {
    sender: Uint8Array;
}
export interface KeygenOptInResponse {
}
export interface KeygenOptInResponseProtoMsg {
    typeUrl: "/axelar.multisig.v1beta1.KeygenOptInResponse";
    value: Uint8Array;
}
export interface KeygenOptInResponseAmino {
}
export interface KeygenOptInResponseAminoMsg {
    type: "/axelar.multisig.v1beta1.KeygenOptInResponse";
    value: KeygenOptInResponseAmino;
}
export interface KeygenOptInResponseSDKType {
}
export declare const StartKeygenRequest: {
    typeUrl: string;
    encode(message: StartKeygenRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StartKeygenRequest;
    fromPartial(object: Partial<StartKeygenRequest>): StartKeygenRequest;
    fromAmino(object: StartKeygenRequestAmino): StartKeygenRequest;
    toAmino(message: StartKeygenRequest): StartKeygenRequestAmino;
    fromAminoMsg(object: StartKeygenRequestAminoMsg): StartKeygenRequest;
    fromProtoMsg(message: StartKeygenRequestProtoMsg): StartKeygenRequest;
    toProto(message: StartKeygenRequest): Uint8Array;
    toProtoMsg(message: StartKeygenRequest): StartKeygenRequestProtoMsg;
};
export declare const StartKeygenResponse: {
    typeUrl: string;
    encode(_: StartKeygenResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): StartKeygenResponse;
    fromPartial(_: Partial<StartKeygenResponse>): StartKeygenResponse;
    fromAmino(_: StartKeygenResponseAmino): StartKeygenResponse;
    toAmino(_: StartKeygenResponse): StartKeygenResponseAmino;
    fromAminoMsg(object: StartKeygenResponseAminoMsg): StartKeygenResponse;
    fromProtoMsg(message: StartKeygenResponseProtoMsg): StartKeygenResponse;
    toProto(message: StartKeygenResponse): Uint8Array;
    toProtoMsg(message: StartKeygenResponse): StartKeygenResponseProtoMsg;
};
export declare const SubmitPubKeyRequest: {
    typeUrl: string;
    encode(message: SubmitPubKeyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubmitPubKeyRequest;
    fromPartial(object: Partial<SubmitPubKeyRequest>): SubmitPubKeyRequest;
    fromAmino(object: SubmitPubKeyRequestAmino): SubmitPubKeyRequest;
    toAmino(message: SubmitPubKeyRequest): SubmitPubKeyRequestAmino;
    fromAminoMsg(object: SubmitPubKeyRequestAminoMsg): SubmitPubKeyRequest;
    fromProtoMsg(message: SubmitPubKeyRequestProtoMsg): SubmitPubKeyRequest;
    toProto(message: SubmitPubKeyRequest): Uint8Array;
    toProtoMsg(message: SubmitPubKeyRequest): SubmitPubKeyRequestProtoMsg;
};
export declare const SubmitPubKeyResponse: {
    typeUrl: string;
    encode(_: SubmitPubKeyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): SubmitPubKeyResponse;
    fromPartial(_: Partial<SubmitPubKeyResponse>): SubmitPubKeyResponse;
    fromAmino(_: SubmitPubKeyResponseAmino): SubmitPubKeyResponse;
    toAmino(_: SubmitPubKeyResponse): SubmitPubKeyResponseAmino;
    fromAminoMsg(object: SubmitPubKeyResponseAminoMsg): SubmitPubKeyResponse;
    fromProtoMsg(message: SubmitPubKeyResponseProtoMsg): SubmitPubKeyResponse;
    toProto(message: SubmitPubKeyResponse): Uint8Array;
    toProtoMsg(message: SubmitPubKeyResponse): SubmitPubKeyResponseProtoMsg;
};
export declare const SubmitSignatureRequest: {
    typeUrl: string;
    encode(message: SubmitSignatureRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubmitSignatureRequest;
    fromPartial(object: Partial<SubmitSignatureRequest>): SubmitSignatureRequest;
    fromAmino(object: SubmitSignatureRequestAmino): SubmitSignatureRequest;
    toAmino(message: SubmitSignatureRequest): SubmitSignatureRequestAmino;
    fromAminoMsg(object: SubmitSignatureRequestAminoMsg): SubmitSignatureRequest;
    fromProtoMsg(message: SubmitSignatureRequestProtoMsg): SubmitSignatureRequest;
    toProto(message: SubmitSignatureRequest): Uint8Array;
    toProtoMsg(message: SubmitSignatureRequest): SubmitSignatureRequestProtoMsg;
};
export declare const SubmitSignatureResponse: {
    typeUrl: string;
    encode(_: SubmitSignatureResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): SubmitSignatureResponse;
    fromPartial(_: Partial<SubmitSignatureResponse>): SubmitSignatureResponse;
    fromAmino(_: SubmitSignatureResponseAmino): SubmitSignatureResponse;
    toAmino(_: SubmitSignatureResponse): SubmitSignatureResponseAmino;
    fromAminoMsg(object: SubmitSignatureResponseAminoMsg): SubmitSignatureResponse;
    fromProtoMsg(message: SubmitSignatureResponseProtoMsg): SubmitSignatureResponse;
    toProto(message: SubmitSignatureResponse): Uint8Array;
    toProtoMsg(message: SubmitSignatureResponse): SubmitSignatureResponseProtoMsg;
};
export declare const RotateKeyRequest: {
    typeUrl: string;
    encode(message: RotateKeyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RotateKeyRequest;
    fromPartial(object: Partial<RotateKeyRequest>): RotateKeyRequest;
    fromAmino(object: RotateKeyRequestAmino): RotateKeyRequest;
    toAmino(message: RotateKeyRequest): RotateKeyRequestAmino;
    fromAminoMsg(object: RotateKeyRequestAminoMsg): RotateKeyRequest;
    fromProtoMsg(message: RotateKeyRequestProtoMsg): RotateKeyRequest;
    toProto(message: RotateKeyRequest): Uint8Array;
    toProtoMsg(message: RotateKeyRequest): RotateKeyRequestProtoMsg;
};
export declare const RotateKeyResponse: {
    typeUrl: string;
    encode(_: RotateKeyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RotateKeyResponse;
    fromPartial(_: Partial<RotateKeyResponse>): RotateKeyResponse;
    fromAmino(_: RotateKeyResponseAmino): RotateKeyResponse;
    toAmino(_: RotateKeyResponse): RotateKeyResponseAmino;
    fromAminoMsg(object: RotateKeyResponseAminoMsg): RotateKeyResponse;
    fromProtoMsg(message: RotateKeyResponseProtoMsg): RotateKeyResponse;
    toProto(message: RotateKeyResponse): Uint8Array;
    toProtoMsg(message: RotateKeyResponse): RotateKeyResponseProtoMsg;
};
export declare const KeygenOptOutRequest: {
    typeUrl: string;
    encode(message: KeygenOptOutRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenOptOutRequest;
    fromPartial(object: Partial<KeygenOptOutRequest>): KeygenOptOutRequest;
    fromAmino(object: KeygenOptOutRequestAmino): KeygenOptOutRequest;
    toAmino(message: KeygenOptOutRequest): KeygenOptOutRequestAmino;
    fromAminoMsg(object: KeygenOptOutRequestAminoMsg): KeygenOptOutRequest;
    fromProtoMsg(message: KeygenOptOutRequestProtoMsg): KeygenOptOutRequest;
    toProto(message: KeygenOptOutRequest): Uint8Array;
    toProtoMsg(message: KeygenOptOutRequest): KeygenOptOutRequestProtoMsg;
};
export declare const KeygenOptOutResponse: {
    typeUrl: string;
    encode(_: KeygenOptOutResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): KeygenOptOutResponse;
    fromPartial(_: Partial<KeygenOptOutResponse>): KeygenOptOutResponse;
    fromAmino(_: KeygenOptOutResponseAmino): KeygenOptOutResponse;
    toAmino(_: KeygenOptOutResponse): KeygenOptOutResponseAmino;
    fromAminoMsg(object: KeygenOptOutResponseAminoMsg): KeygenOptOutResponse;
    fromProtoMsg(message: KeygenOptOutResponseProtoMsg): KeygenOptOutResponse;
    toProto(message: KeygenOptOutResponse): Uint8Array;
    toProtoMsg(message: KeygenOptOutResponse): KeygenOptOutResponseProtoMsg;
};
export declare const KeygenOptInRequest: {
    typeUrl: string;
    encode(message: KeygenOptInRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenOptInRequest;
    fromPartial(object: Partial<KeygenOptInRequest>): KeygenOptInRequest;
    fromAmino(object: KeygenOptInRequestAmino): KeygenOptInRequest;
    toAmino(message: KeygenOptInRequest): KeygenOptInRequestAmino;
    fromAminoMsg(object: KeygenOptInRequestAminoMsg): KeygenOptInRequest;
    fromProtoMsg(message: KeygenOptInRequestProtoMsg): KeygenOptInRequest;
    toProto(message: KeygenOptInRequest): Uint8Array;
    toProtoMsg(message: KeygenOptInRequest): KeygenOptInRequestProtoMsg;
};
export declare const KeygenOptInResponse: {
    typeUrl: string;
    encode(_: KeygenOptInResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): KeygenOptInResponse;
    fromPartial(_: Partial<KeygenOptInResponse>): KeygenOptInResponse;
    fromAmino(_: KeygenOptInResponseAmino): KeygenOptInResponse;
    toAmino(_: KeygenOptInResponse): KeygenOptInResponseAmino;
    fromAminoMsg(object: KeygenOptInResponseAminoMsg): KeygenOptInResponse;
    fromProtoMsg(message: KeygenOptInResponseProtoMsg): KeygenOptInResponse;
    toProto(message: KeygenOptInResponse): Uint8Array;
    toProtoMsg(message: KeygenOptInResponse): KeygenOptInResponseProtoMsg;
};
