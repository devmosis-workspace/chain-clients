import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Blacklisted, BlacklistedSDKType } from "./blacklisted";
import { Paused, PausedSDKType } from "./paused";
import { MasterMinter, MasterMinterSDKType } from "./master_minter";
import { Minters, MintersSDKType } from "./minters";
import { Pauser, PauserSDKType } from "./pauser";
import { Blacklister, BlacklisterSDKType } from "./blacklister";
import { Owner, OwnerSDKType } from "./owner";
import { MinterController, MinterControllerSDKType } from "./minter_controller";
import { MintingDenom, MintingDenomSDKType } from "./minting_denom";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryGetBlacklistedRequest {
    address: string;
}
export interface QueryGetBlacklistedRequestSDKType {
    address: string;
}
export interface QueryGetBlacklistedResponse {
    blacklisted?: Blacklisted;
}
export interface QueryGetBlacklistedResponseSDKType {
    blacklisted?: BlacklistedSDKType;
}
export interface QueryAllBlacklistedRequest {
    pagination?: PageRequest;
}
export interface QueryAllBlacklistedRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllBlacklistedResponse {
    blacklisted: Blacklisted[];
    pagination?: PageResponse;
}
export interface QueryAllBlacklistedResponseSDKType {
    blacklisted: BlacklistedSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetPausedRequest {
}
export interface QueryGetPausedRequestSDKType {
}
export interface QueryGetPausedResponse {
    paused?: Paused;
}
export interface QueryGetPausedResponseSDKType {
    paused?: PausedSDKType;
}
export interface QueryGetMasterMinterRequest {
}
export interface QueryGetMasterMinterRequestSDKType {
}
export interface QueryGetMasterMinterResponse {
    masterMinter?: MasterMinter;
}
export interface QueryGetMasterMinterResponseSDKType {
    masterMinter?: MasterMinterSDKType;
}
export interface QueryGetMintersRequest {
    address: string;
}
export interface QueryGetMintersRequestSDKType {
    address: string;
}
export interface QueryGetMintersResponse {
    minters?: Minters;
}
export interface QueryGetMintersResponseSDKType {
    minters?: MintersSDKType;
}
export interface QueryAllMintersRequest {
    pagination?: PageRequest;
}
export interface QueryAllMintersRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllMintersResponse {
    minters: Minters[];
    pagination?: PageResponse;
}
export interface QueryAllMintersResponseSDKType {
    minters: MintersSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetPauserRequest {
}
export interface QueryGetPauserRequestSDKType {
}
export interface QueryGetPauserResponse {
    pauser?: Pauser;
}
export interface QueryGetPauserResponseSDKType {
    pauser?: PauserSDKType;
}
export interface QueryGetBlacklisterRequest {
}
export interface QueryGetBlacklisterRequestSDKType {
}
export interface QueryGetBlacklisterResponse {
    blacklister?: Blacklister;
}
export interface QueryGetBlacklisterResponseSDKType {
    blacklister?: BlacklisterSDKType;
}
export interface QueryGetOwnerRequest {
}
export interface QueryGetOwnerRequestSDKType {
}
export interface QueryGetOwnerResponse {
    owner?: Owner;
}
export interface QueryGetOwnerResponseSDKType {
    owner?: OwnerSDKType;
}
export interface QueryGetMinterControllerRequest {
    controllerAddress: string;
}
export interface QueryGetMinterControllerRequestSDKType {
    controllerAddress: string;
}
export interface QueryGetMinterControllerResponse {
    minterController?: MinterController;
}
export interface QueryGetMinterControllerResponseSDKType {
    minterController?: MinterControllerSDKType;
}
export interface QueryAllMinterControllerRequest {
    pagination?: PageRequest;
}
export interface QueryAllMinterControllerRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllMinterControllerResponse {
    minterController: MinterController[];
    pagination?: PageResponse;
}
export interface QueryAllMinterControllerResponseSDKType {
    minterController: MinterControllerSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetMintingDenomRequest {
}
export interface QueryGetMintingDenomRequestSDKType {
}
export interface QueryGetMintingDenomResponse {
    mintingDenom?: MintingDenom;
}
export interface QueryGetMintingDenomResponseSDKType {
    mintingDenom?: MintingDenomSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetBlacklistedRequest: {
    encode(message: QueryGetBlacklistedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetBlacklistedRequest;
    fromPartial(object: Partial<QueryGetBlacklistedRequest>): QueryGetBlacklistedRequest;
};
export declare const QueryGetBlacklistedResponse: {
    encode(message: QueryGetBlacklistedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetBlacklistedResponse;
    fromPartial(object: Partial<QueryGetBlacklistedResponse>): QueryGetBlacklistedResponse;
};
export declare const QueryAllBlacklistedRequest: {
    encode(message: QueryAllBlacklistedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllBlacklistedRequest;
    fromPartial(object: Partial<QueryAllBlacklistedRequest>): QueryAllBlacklistedRequest;
};
export declare const QueryAllBlacklistedResponse: {
    encode(message: QueryAllBlacklistedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllBlacklistedResponse;
    fromPartial(object: Partial<QueryAllBlacklistedResponse>): QueryAllBlacklistedResponse;
};
export declare const QueryGetPausedRequest: {
    encode(_: QueryGetPausedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetPausedRequest;
    fromPartial(_: Partial<QueryGetPausedRequest>): QueryGetPausedRequest;
};
export declare const QueryGetPausedResponse: {
    encode(message: QueryGetPausedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetPausedResponse;
    fromPartial(object: Partial<QueryGetPausedResponse>): QueryGetPausedResponse;
};
export declare const QueryGetMasterMinterRequest: {
    encode(_: QueryGetMasterMinterRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetMasterMinterRequest;
    fromPartial(_: Partial<QueryGetMasterMinterRequest>): QueryGetMasterMinterRequest;
};
export declare const QueryGetMasterMinterResponse: {
    encode(message: QueryGetMasterMinterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetMasterMinterResponse;
    fromPartial(object: Partial<QueryGetMasterMinterResponse>): QueryGetMasterMinterResponse;
};
export declare const QueryGetMintersRequest: {
    encode(message: QueryGetMintersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetMintersRequest;
    fromPartial(object: Partial<QueryGetMintersRequest>): QueryGetMintersRequest;
};
export declare const QueryGetMintersResponse: {
    encode(message: QueryGetMintersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetMintersResponse;
    fromPartial(object: Partial<QueryGetMintersResponse>): QueryGetMintersResponse;
};
export declare const QueryAllMintersRequest: {
    encode(message: QueryAllMintersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllMintersRequest;
    fromPartial(object: Partial<QueryAllMintersRequest>): QueryAllMintersRequest;
};
export declare const QueryAllMintersResponse: {
    encode(message: QueryAllMintersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllMintersResponse;
    fromPartial(object: Partial<QueryAllMintersResponse>): QueryAllMintersResponse;
};
export declare const QueryGetPauserRequest: {
    encode(_: QueryGetPauserRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetPauserRequest;
    fromPartial(_: Partial<QueryGetPauserRequest>): QueryGetPauserRequest;
};
export declare const QueryGetPauserResponse: {
    encode(message: QueryGetPauserResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetPauserResponse;
    fromPartial(object: Partial<QueryGetPauserResponse>): QueryGetPauserResponse;
};
export declare const QueryGetBlacklisterRequest: {
    encode(_: QueryGetBlacklisterRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetBlacklisterRequest;
    fromPartial(_: Partial<QueryGetBlacklisterRequest>): QueryGetBlacklisterRequest;
};
export declare const QueryGetBlacklisterResponse: {
    encode(message: QueryGetBlacklisterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetBlacklisterResponse;
    fromPartial(object: Partial<QueryGetBlacklisterResponse>): QueryGetBlacklisterResponse;
};
export declare const QueryGetOwnerRequest: {
    encode(_: QueryGetOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetOwnerRequest;
    fromPartial(_: Partial<QueryGetOwnerRequest>): QueryGetOwnerRequest;
};
export declare const QueryGetOwnerResponse: {
    encode(message: QueryGetOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetOwnerResponse;
    fromPartial(object: Partial<QueryGetOwnerResponse>): QueryGetOwnerResponse;
};
export declare const QueryGetMinterControllerRequest: {
    encode(message: QueryGetMinterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetMinterControllerRequest;
    fromPartial(object: Partial<QueryGetMinterControllerRequest>): QueryGetMinterControllerRequest;
};
export declare const QueryGetMinterControllerResponse: {
    encode(message: QueryGetMinterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetMinterControllerResponse;
    fromPartial(object: Partial<QueryGetMinterControllerResponse>): QueryGetMinterControllerResponse;
};
export declare const QueryAllMinterControllerRequest: {
    encode(message: QueryAllMinterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllMinterControllerRequest;
    fromPartial(object: Partial<QueryAllMinterControllerRequest>): QueryAllMinterControllerRequest;
};
export declare const QueryAllMinterControllerResponse: {
    encode(message: QueryAllMinterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAllMinterControllerResponse;
    fromPartial(object: Partial<QueryAllMinterControllerResponse>): QueryAllMinterControllerResponse;
};
export declare const QueryGetMintingDenomRequest: {
    encode(_: QueryGetMintingDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGetMintingDenomRequest;
    fromPartial(_: Partial<QueryGetMintingDenomRequest>): QueryGetMintingDenomRequest;
};
export declare const QueryGetMintingDenomResponse: {
    encode(message: QueryGetMintingDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGetMintingDenomResponse;
    fromPartial(object: Partial<QueryGetMintingDenomResponse>): QueryGetMintingDenomResponse;
};
