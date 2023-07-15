import { FeeInfo, FeeInfoSDKType } from "../exported/v1beta1/types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
export interface RegisterChainMaintainerRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface RegisterChainMaintainerRequestSDKType {
    sender: Uint8Array;
    chains: string[];
}
export interface RegisterChainMaintainerResponse {
}
export interface RegisterChainMaintainerResponseSDKType {
}
export interface DeregisterChainMaintainerRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface DeregisterChainMaintainerRequestSDKType {
    sender: Uint8Array;
    chains: string[];
}
export interface DeregisterChainMaintainerResponse {
}
export interface DeregisterChainMaintainerResponseSDKType {
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
    sender: Uint8Array;
    chains: string[];
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequestSDKType {
    sender: Uint8Array;
    chains: string[];
}
export interface ActivateChainResponse {
}
export interface ActivateChainResponseSDKType {
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
    sender: Uint8Array;
    chains: string[];
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequestSDKType {
    sender: Uint8Array;
    chains: string[];
}
export interface DeactivateChainResponse {
}
export interface DeactivateChainResponseSDKType {
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
    sender: Uint8Array;
    feeInfo?: FeeInfo;
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequestSDKType {
    sender: Uint8Array;
    fee_info?: FeeInfoSDKType;
}
export interface RegisterAssetFeeResponse {
}
export interface RegisterAssetFeeResponseSDKType {
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequest {
    sender: Uint8Array;
    chain: string;
    limit?: Coin;
    window?: Duration;
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequestSDKType {
    sender: Uint8Array;
    chain: string;
    limit?: CoinSDKType;
    window?: DurationSDKType;
}
export interface SetTransferRateLimitResponse {
}
export interface SetTransferRateLimitResponseSDKType {
}
export declare const RegisterChainMaintainerRequest: {
    encode(message: RegisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterChainMaintainerRequest;
    fromPartial(object: Partial<RegisterChainMaintainerRequest>): RegisterChainMaintainerRequest;
};
export declare const RegisterChainMaintainerResponse: {
    encode(_: RegisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RegisterChainMaintainerResponse;
    fromPartial(_: Partial<RegisterChainMaintainerResponse>): RegisterChainMaintainerResponse;
};
export declare const DeregisterChainMaintainerRequest: {
    encode(message: DeregisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeregisterChainMaintainerRequest;
    fromPartial(object: Partial<DeregisterChainMaintainerRequest>): DeregisterChainMaintainerRequest;
};
export declare const DeregisterChainMaintainerResponse: {
    encode(_: DeregisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): DeregisterChainMaintainerResponse;
    fromPartial(_: Partial<DeregisterChainMaintainerResponse>): DeregisterChainMaintainerResponse;
};
export declare const ActivateChainRequest: {
    encode(message: ActivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ActivateChainRequest;
    fromPartial(object: Partial<ActivateChainRequest>): ActivateChainRequest;
};
export declare const ActivateChainResponse: {
    encode(_: ActivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ActivateChainResponse;
    fromPartial(_: Partial<ActivateChainResponse>): ActivateChainResponse;
};
export declare const DeactivateChainRequest: {
    encode(message: DeactivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeactivateChainRequest;
    fromPartial(object: Partial<DeactivateChainRequest>): DeactivateChainRequest;
};
export declare const DeactivateChainResponse: {
    encode(_: DeactivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): DeactivateChainResponse;
    fromPartial(_: Partial<DeactivateChainResponse>): DeactivateChainResponse;
};
export declare const RegisterAssetFeeRequest: {
    encode(message: RegisterAssetFeeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterAssetFeeRequest;
    fromPartial(object: Partial<RegisterAssetFeeRequest>): RegisterAssetFeeRequest;
};
export declare const RegisterAssetFeeResponse: {
    encode(_: RegisterAssetFeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RegisterAssetFeeResponse;
    fromPartial(_: Partial<RegisterAssetFeeResponse>): RegisterAssetFeeResponse;
};
export declare const SetTransferRateLimitRequest: {
    encode(message: SetTransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetTransferRateLimitRequest;
    fromPartial(object: Partial<SetTransferRateLimitRequest>): SetTransferRateLimitRequest;
};
export declare const SetTransferRateLimitResponse: {
    encode(_: SetTransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): SetTransferRateLimitResponse;
    fromPartial(_: Partial<SetTransferRateLimitResponse>): SetTransferRateLimitResponse;
};
