import { LegacyAminoPubKey, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import * as _m0 from "protobufjs/minimal";
export interface UpdateGovernanceKeyRequest {
    sender: Uint8Array;
    governanceKey?: LegacyAminoPubKey;
}
export interface UpdateGovernanceKeyRequestSDKType {
    sender: Uint8Array;
    governance_key?: LegacyAminoPubKeySDKType;
}
export interface UpdateGovernanceKeyResponse {
}
export interface UpdateGovernanceKeyResponseSDKType {
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
    sender: Uint8Array;
    controller: Uint8Array;
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequestSDKType {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface RegisterControllerResponse {
}
export interface RegisterControllerResponseSDKType {
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
    sender: Uint8Array;
    controller: Uint8Array;
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequestSDKType {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface DeregisterControllerResponse {
}
export interface DeregisterControllerResponseSDKType {
}
export declare const UpdateGovernanceKeyRequest: {
    encode(message: UpdateGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateGovernanceKeyRequest;
    fromPartial(object: Partial<UpdateGovernanceKeyRequest>): UpdateGovernanceKeyRequest;
};
export declare const UpdateGovernanceKeyResponse: {
    encode(_: UpdateGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): UpdateGovernanceKeyResponse;
    fromPartial(_: Partial<UpdateGovernanceKeyResponse>): UpdateGovernanceKeyResponse;
};
export declare const RegisterControllerRequest: {
    encode(message: RegisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterControllerRequest;
    fromPartial(object: Partial<RegisterControllerRequest>): RegisterControllerRequest;
};
export declare const RegisterControllerResponse: {
    encode(_: RegisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RegisterControllerResponse;
    fromPartial(_: Partial<RegisterControllerResponse>): RegisterControllerResponse;
};
export declare const DeregisterControllerRequest: {
    encode(message: DeregisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeregisterControllerRequest;
    fromPartial(object: Partial<DeregisterControllerRequest>): DeregisterControllerRequest;
};
export declare const DeregisterControllerResponse: {
    encode(_: DeregisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): DeregisterControllerResponse;
    fromPartial(_: Partial<DeregisterControllerResponse>): DeregisterControllerResponse;
};
