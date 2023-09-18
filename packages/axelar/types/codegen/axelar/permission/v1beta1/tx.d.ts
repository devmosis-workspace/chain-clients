import { LegacyAminoPubKey, LegacyAminoPubKeyAmino, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import { BinaryWriter } from "../../../binary";
export interface UpdateGovernanceKeyRequest {
    sender: Uint8Array;
    governanceKey: LegacyAminoPubKey;
}
export interface UpdateGovernanceKeyRequestProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
    value: Uint8Array;
}
export interface UpdateGovernanceKeyRequestAmino {
    sender: Uint8Array;
    governance_key?: LegacyAminoPubKeyAmino;
}
export interface UpdateGovernanceKeyRequestAminoMsg {
    type: "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
    value: UpdateGovernanceKeyRequestAmino;
}
export interface UpdateGovernanceKeyRequestSDKType {
    sender: Uint8Array;
    governance_key: LegacyAminoPubKeySDKType;
}
export interface UpdateGovernanceKeyResponse {
}
export interface UpdateGovernanceKeyResponseProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.UpdateGovernanceKeyResponse";
    value: Uint8Array;
}
export interface UpdateGovernanceKeyResponseAmino {
}
export interface UpdateGovernanceKeyResponseAminoMsg {
    type: "/axelar.permission.v1beta1.UpdateGovernanceKeyResponse";
    value: UpdateGovernanceKeyResponseAmino;
}
export interface UpdateGovernanceKeyResponseSDKType {
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface RegisterControllerRequestProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.RegisterControllerRequest";
    value: Uint8Array;
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequestAmino {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface RegisterControllerRequestAminoMsg {
    type: "/axelar.permission.v1beta1.RegisterControllerRequest";
    value: RegisterControllerRequestAmino;
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequestSDKType {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface RegisterControllerResponse {
}
export interface RegisterControllerResponseProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.RegisterControllerResponse";
    value: Uint8Array;
}
export interface RegisterControllerResponseAmino {
}
export interface RegisterControllerResponseAminoMsg {
    type: "/axelar.permission.v1beta1.RegisterControllerResponse";
    value: RegisterControllerResponseAmino;
}
export interface RegisterControllerResponseSDKType {
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface DeregisterControllerRequestProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.DeregisterControllerRequest";
    value: Uint8Array;
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequestAmino {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface DeregisterControllerRequestAminoMsg {
    type: "/axelar.permission.v1beta1.DeregisterControllerRequest";
    value: DeregisterControllerRequestAmino;
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequestSDKType {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface DeregisterControllerResponse {
}
export interface DeregisterControllerResponseProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.DeregisterControllerResponse";
    value: Uint8Array;
}
export interface DeregisterControllerResponseAmino {
}
export interface DeregisterControllerResponseAminoMsg {
    type: "/axelar.permission.v1beta1.DeregisterControllerResponse";
    value: DeregisterControllerResponseAmino;
}
export interface DeregisterControllerResponseSDKType {
}
export declare const UpdateGovernanceKeyRequest: {
    typeUrl: string;
    encode(message: UpdateGovernanceKeyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateGovernanceKeyRequest;
    fromPartial(object: Partial<UpdateGovernanceKeyRequest>): UpdateGovernanceKeyRequest;
    fromAmino(object: UpdateGovernanceKeyRequestAmino): UpdateGovernanceKeyRequest;
    toAmino(message: UpdateGovernanceKeyRequest): UpdateGovernanceKeyRequestAmino;
    fromAminoMsg(object: UpdateGovernanceKeyRequestAminoMsg): UpdateGovernanceKeyRequest;
    fromProtoMsg(message: UpdateGovernanceKeyRequestProtoMsg): UpdateGovernanceKeyRequest;
    toProto(message: UpdateGovernanceKeyRequest): Uint8Array;
    toProtoMsg(message: UpdateGovernanceKeyRequest): UpdateGovernanceKeyRequestProtoMsg;
};
export declare const UpdateGovernanceKeyResponse: {
    typeUrl: string;
    encode(_: UpdateGovernanceKeyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): UpdateGovernanceKeyResponse;
    fromPartial(_: Partial<UpdateGovernanceKeyResponse>): UpdateGovernanceKeyResponse;
    fromAmino(_: UpdateGovernanceKeyResponseAmino): UpdateGovernanceKeyResponse;
    toAmino(_: UpdateGovernanceKeyResponse): UpdateGovernanceKeyResponseAmino;
    fromAminoMsg(object: UpdateGovernanceKeyResponseAminoMsg): UpdateGovernanceKeyResponse;
    fromProtoMsg(message: UpdateGovernanceKeyResponseProtoMsg): UpdateGovernanceKeyResponse;
    toProto(message: UpdateGovernanceKeyResponse): Uint8Array;
    toProtoMsg(message: UpdateGovernanceKeyResponse): UpdateGovernanceKeyResponseProtoMsg;
};
export declare const RegisterControllerRequest: {
    typeUrl: string;
    encode(message: RegisterControllerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterControllerRequest;
    fromPartial(object: Partial<RegisterControllerRequest>): RegisterControllerRequest;
    fromAmino(object: RegisterControllerRequestAmino): RegisterControllerRequest;
    toAmino(message: RegisterControllerRequest): RegisterControllerRequestAmino;
    fromAminoMsg(object: RegisterControllerRequestAminoMsg): RegisterControllerRequest;
    fromProtoMsg(message: RegisterControllerRequestProtoMsg): RegisterControllerRequest;
    toProto(message: RegisterControllerRequest): Uint8Array;
    toProtoMsg(message: RegisterControllerRequest): RegisterControllerRequestProtoMsg;
};
export declare const RegisterControllerResponse: {
    typeUrl: string;
    encode(_: RegisterControllerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RegisterControllerResponse;
    fromPartial(_: Partial<RegisterControllerResponse>): RegisterControllerResponse;
    fromAmino(_: RegisterControllerResponseAmino): RegisterControllerResponse;
    toAmino(_: RegisterControllerResponse): RegisterControllerResponseAmino;
    fromAminoMsg(object: RegisterControllerResponseAminoMsg): RegisterControllerResponse;
    fromProtoMsg(message: RegisterControllerResponseProtoMsg): RegisterControllerResponse;
    toProto(message: RegisterControllerResponse): Uint8Array;
    toProtoMsg(message: RegisterControllerResponse): RegisterControllerResponseProtoMsg;
};
export declare const DeregisterControllerRequest: {
    typeUrl: string;
    encode(message: DeregisterControllerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DeregisterControllerRequest;
    fromPartial(object: Partial<DeregisterControllerRequest>): DeregisterControllerRequest;
    fromAmino(object: DeregisterControllerRequestAmino): DeregisterControllerRequest;
    toAmino(message: DeregisterControllerRequest): DeregisterControllerRequestAmino;
    fromAminoMsg(object: DeregisterControllerRequestAminoMsg): DeregisterControllerRequest;
    fromProtoMsg(message: DeregisterControllerRequestProtoMsg): DeregisterControllerRequest;
    toProto(message: DeregisterControllerRequest): Uint8Array;
    toProtoMsg(message: DeregisterControllerRequest): DeregisterControllerRequestProtoMsg;
};
export declare const DeregisterControllerResponse: {
    typeUrl: string;
    encode(_: DeregisterControllerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): DeregisterControllerResponse;
    fromPartial(_: Partial<DeregisterControllerResponse>): DeregisterControllerResponse;
    fromAmino(_: DeregisterControllerResponseAmino): DeregisterControllerResponse;
    toAmino(_: DeregisterControllerResponse): DeregisterControllerResponseAmino;
    fromAminoMsg(object: DeregisterControllerResponseAminoMsg): DeregisterControllerResponse;
    fromProtoMsg(message: DeregisterControllerResponseProtoMsg): DeregisterControllerResponse;
    toProto(message: DeregisterControllerResponse): Uint8Array;
    toProtoMsg(message: DeregisterControllerResponse): DeregisterControllerResponseProtoMsg;
};
