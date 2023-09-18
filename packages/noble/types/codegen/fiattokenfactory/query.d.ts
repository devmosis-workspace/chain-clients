import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Blacklisted, BlacklistedAmino, BlacklistedSDKType } from "./blacklisted";
import { Paused, PausedAmino, PausedSDKType } from "./paused";
import { MasterMinter, MasterMinterAmino, MasterMinterSDKType } from "./master_minter";
import { Minters, MintersAmino, MintersSDKType } from "./minters";
import { Pauser, PauserAmino, PauserSDKType } from "./pauser";
import { Blacklister, BlacklisterAmino, BlacklisterSDKType } from "./blacklister";
import { Owner, OwnerAmino, OwnerSDKType } from "./owner";
import { MinterController, MinterControllerAmino, MinterControllerSDKType } from "./minter_controller";
import { MintingDenom, MintingDenomAmino, MintingDenomSDKType } from "./minting_denom";
import { BinaryWriter } from "../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetBlacklistedRequest {
    address: string;
}
export interface QueryGetBlacklistedRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetBlacklistedRequest";
    value: Uint8Array;
}
export interface QueryGetBlacklistedRequestAmino {
    address: string;
}
export interface QueryGetBlacklistedRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetBlacklistedRequest";
    value: QueryGetBlacklistedRequestAmino;
}
export interface QueryGetBlacklistedRequestSDKType {
    address: string;
}
export interface QueryGetBlacklistedResponse {
    blacklisted: Blacklisted;
}
export interface QueryGetBlacklistedResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetBlacklistedResponse";
    value: Uint8Array;
}
export interface QueryGetBlacklistedResponseAmino {
    blacklisted?: BlacklistedAmino;
}
export interface QueryGetBlacklistedResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetBlacklistedResponse";
    value: QueryGetBlacklistedResponseAmino;
}
export interface QueryGetBlacklistedResponseSDKType {
    blacklisted: BlacklistedSDKType;
}
export interface QueryAllBlacklistedRequest {
    pagination: PageRequest;
}
export interface QueryAllBlacklistedRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryAllBlacklistedRequest";
    value: Uint8Array;
}
export interface QueryAllBlacklistedRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllBlacklistedRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryAllBlacklistedRequest";
    value: QueryAllBlacklistedRequestAmino;
}
export interface QueryAllBlacklistedRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryAllBlacklistedResponse {
    blacklisted: Blacklisted[];
    pagination: PageResponse;
}
export interface QueryAllBlacklistedResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryAllBlacklistedResponse";
    value: Uint8Array;
}
export interface QueryAllBlacklistedResponseAmino {
    blacklisted: BlacklistedAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllBlacklistedResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryAllBlacklistedResponse";
    value: QueryAllBlacklistedResponseAmino;
}
export interface QueryAllBlacklistedResponseSDKType {
    blacklisted: BlacklistedSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetPausedRequest {
}
export interface QueryGetPausedRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetPausedRequest";
    value: Uint8Array;
}
export interface QueryGetPausedRequestAmino {
}
export interface QueryGetPausedRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetPausedRequest";
    value: QueryGetPausedRequestAmino;
}
export interface QueryGetPausedRequestSDKType {
}
export interface QueryGetPausedResponse {
    paused: Paused;
}
export interface QueryGetPausedResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetPausedResponse";
    value: Uint8Array;
}
export interface QueryGetPausedResponseAmino {
    paused?: PausedAmino;
}
export interface QueryGetPausedResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetPausedResponse";
    value: QueryGetPausedResponseAmino;
}
export interface QueryGetPausedResponseSDKType {
    paused: PausedSDKType;
}
export interface QueryGetMasterMinterRequest {
}
export interface QueryGetMasterMinterRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetMasterMinterRequest";
    value: Uint8Array;
}
export interface QueryGetMasterMinterRequestAmino {
}
export interface QueryGetMasterMinterRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetMasterMinterRequest";
    value: QueryGetMasterMinterRequestAmino;
}
export interface QueryGetMasterMinterRequestSDKType {
}
export interface QueryGetMasterMinterResponse {
    masterMinter: MasterMinter;
}
export interface QueryGetMasterMinterResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetMasterMinterResponse";
    value: Uint8Array;
}
export interface QueryGetMasterMinterResponseAmino {
    masterMinter?: MasterMinterAmino;
}
export interface QueryGetMasterMinterResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetMasterMinterResponse";
    value: QueryGetMasterMinterResponseAmino;
}
export interface QueryGetMasterMinterResponseSDKType {
    masterMinter: MasterMinterSDKType;
}
export interface QueryGetMintersRequest {
    address: string;
}
export interface QueryGetMintersRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetMintersRequest";
    value: Uint8Array;
}
export interface QueryGetMintersRequestAmino {
    address: string;
}
export interface QueryGetMintersRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetMintersRequest";
    value: QueryGetMintersRequestAmino;
}
export interface QueryGetMintersRequestSDKType {
    address: string;
}
export interface QueryGetMintersResponse {
    minters: Minters;
}
export interface QueryGetMintersResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetMintersResponse";
    value: Uint8Array;
}
export interface QueryGetMintersResponseAmino {
    minters?: MintersAmino;
}
export interface QueryGetMintersResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetMintersResponse";
    value: QueryGetMintersResponseAmino;
}
export interface QueryGetMintersResponseSDKType {
    minters: MintersSDKType;
}
export interface QueryAllMintersRequest {
    pagination: PageRequest;
}
export interface QueryAllMintersRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryAllMintersRequest";
    value: Uint8Array;
}
export interface QueryAllMintersRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllMintersRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryAllMintersRequest";
    value: QueryAllMintersRequestAmino;
}
export interface QueryAllMintersRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryAllMintersResponse {
    minters: Minters[];
    pagination: PageResponse;
}
export interface QueryAllMintersResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryAllMintersResponse";
    value: Uint8Array;
}
export interface QueryAllMintersResponseAmino {
    minters: MintersAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllMintersResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryAllMintersResponse";
    value: QueryAllMintersResponseAmino;
}
export interface QueryAllMintersResponseSDKType {
    minters: MintersSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetPauserRequest {
}
export interface QueryGetPauserRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetPauserRequest";
    value: Uint8Array;
}
export interface QueryGetPauserRequestAmino {
}
export interface QueryGetPauserRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetPauserRequest";
    value: QueryGetPauserRequestAmino;
}
export interface QueryGetPauserRequestSDKType {
}
export interface QueryGetPauserResponse {
    pauser: Pauser;
}
export interface QueryGetPauserResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetPauserResponse";
    value: Uint8Array;
}
export interface QueryGetPauserResponseAmino {
    pauser?: PauserAmino;
}
export interface QueryGetPauserResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetPauserResponse";
    value: QueryGetPauserResponseAmino;
}
export interface QueryGetPauserResponseSDKType {
    pauser: PauserSDKType;
}
export interface QueryGetBlacklisterRequest {
}
export interface QueryGetBlacklisterRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetBlacklisterRequest";
    value: Uint8Array;
}
export interface QueryGetBlacklisterRequestAmino {
}
export interface QueryGetBlacklisterRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetBlacklisterRequest";
    value: QueryGetBlacklisterRequestAmino;
}
export interface QueryGetBlacklisterRequestSDKType {
}
export interface QueryGetBlacklisterResponse {
    blacklister: Blacklister;
}
export interface QueryGetBlacklisterResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetBlacklisterResponse";
    value: Uint8Array;
}
export interface QueryGetBlacklisterResponseAmino {
    blacklister?: BlacklisterAmino;
}
export interface QueryGetBlacklisterResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetBlacklisterResponse";
    value: QueryGetBlacklisterResponseAmino;
}
export interface QueryGetBlacklisterResponseSDKType {
    blacklister: BlacklisterSDKType;
}
export interface QueryGetOwnerRequest {
}
export interface QueryGetOwnerRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetOwnerRequest";
    value: Uint8Array;
}
export interface QueryGetOwnerRequestAmino {
}
export interface QueryGetOwnerRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetOwnerRequest";
    value: QueryGetOwnerRequestAmino;
}
export interface QueryGetOwnerRequestSDKType {
}
export interface QueryGetOwnerResponse {
    owner: Owner;
}
export interface QueryGetOwnerResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetOwnerResponse";
    value: Uint8Array;
}
export interface QueryGetOwnerResponseAmino {
    owner?: OwnerAmino;
}
export interface QueryGetOwnerResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetOwnerResponse";
    value: QueryGetOwnerResponseAmino;
}
export interface QueryGetOwnerResponseSDKType {
    owner: OwnerSDKType;
}
export interface QueryGetMinterControllerRequest {
    controllerAddress: string;
}
export interface QueryGetMinterControllerRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetMinterControllerRequest";
    value: Uint8Array;
}
export interface QueryGetMinterControllerRequestAmino {
    controllerAddress: string;
}
export interface QueryGetMinterControllerRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetMinterControllerRequest";
    value: QueryGetMinterControllerRequestAmino;
}
export interface QueryGetMinterControllerRequestSDKType {
    controllerAddress: string;
}
export interface QueryGetMinterControllerResponse {
    minterController: MinterController;
}
export interface QueryGetMinterControllerResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetMinterControllerResponse";
    value: Uint8Array;
}
export interface QueryGetMinterControllerResponseAmino {
    minterController?: MinterControllerAmino;
}
export interface QueryGetMinterControllerResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetMinterControllerResponse";
    value: QueryGetMinterControllerResponseAmino;
}
export interface QueryGetMinterControllerResponseSDKType {
    minterController: MinterControllerSDKType;
}
export interface QueryAllMinterControllerRequest {
    pagination: PageRequest;
}
export interface QueryAllMinterControllerRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryAllMinterControllerRequest";
    value: Uint8Array;
}
export interface QueryAllMinterControllerRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllMinterControllerRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryAllMinterControllerRequest";
    value: QueryAllMinterControllerRequestAmino;
}
export interface QueryAllMinterControllerRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryAllMinterControllerResponse {
    minterController: MinterController[];
    pagination: PageResponse;
}
export interface QueryAllMinterControllerResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryAllMinterControllerResponse";
    value: Uint8Array;
}
export interface QueryAllMinterControllerResponseAmino {
    minterController: MinterControllerAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllMinterControllerResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryAllMinterControllerResponse";
    value: QueryAllMinterControllerResponseAmino;
}
export interface QueryAllMinterControllerResponseSDKType {
    minterController: MinterControllerSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetMintingDenomRequest {
}
export interface QueryGetMintingDenomRequestProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetMintingDenomRequest";
    value: Uint8Array;
}
export interface QueryGetMintingDenomRequestAmino {
}
export interface QueryGetMintingDenomRequestAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetMintingDenomRequest";
    value: QueryGetMintingDenomRequestAmino;
}
export interface QueryGetMintingDenomRequestSDKType {
}
export interface QueryGetMintingDenomResponse {
    mintingDenom: MintingDenom;
}
export interface QueryGetMintingDenomResponseProtoMsg {
    typeUrl: "/noble.fiattokenfactory.QueryGetMintingDenomResponse";
    value: Uint8Array;
}
export interface QueryGetMintingDenomResponseAmino {
    mintingDenom?: MintingDenomAmino;
}
export interface QueryGetMintingDenomResponseAminoMsg {
    type: "/noble.fiattokenfactory.QueryGetMintingDenomResponse";
    value: QueryGetMintingDenomResponseAmino;
}
export interface QueryGetMintingDenomResponseSDKType {
    mintingDenom: MintingDenomSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetBlacklistedRequest: {
    typeUrl: string;
    encode(message: QueryGetBlacklistedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetBlacklistedRequest;
    fromPartial(object: Partial<QueryGetBlacklistedRequest>): QueryGetBlacklistedRequest;
    fromAmino(object: QueryGetBlacklistedRequestAmino): QueryGetBlacklistedRequest;
    toAmino(message: QueryGetBlacklistedRequest): QueryGetBlacklistedRequestAmino;
    fromAminoMsg(object: QueryGetBlacklistedRequestAminoMsg): QueryGetBlacklistedRequest;
    fromProtoMsg(message: QueryGetBlacklistedRequestProtoMsg): QueryGetBlacklistedRequest;
    toProto(message: QueryGetBlacklistedRequest): Uint8Array;
    toProtoMsg(message: QueryGetBlacklistedRequest): QueryGetBlacklistedRequestProtoMsg;
};
export declare const QueryGetBlacklistedResponse: {
    typeUrl: string;
    encode(message: QueryGetBlacklistedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetBlacklistedResponse;
    fromPartial(object: Partial<QueryGetBlacklistedResponse>): QueryGetBlacklistedResponse;
    fromAmino(object: QueryGetBlacklistedResponseAmino): QueryGetBlacklistedResponse;
    toAmino(message: QueryGetBlacklistedResponse): QueryGetBlacklistedResponseAmino;
    fromAminoMsg(object: QueryGetBlacklistedResponseAminoMsg): QueryGetBlacklistedResponse;
    fromProtoMsg(message: QueryGetBlacklistedResponseProtoMsg): QueryGetBlacklistedResponse;
    toProto(message: QueryGetBlacklistedResponse): Uint8Array;
    toProtoMsg(message: QueryGetBlacklistedResponse): QueryGetBlacklistedResponseProtoMsg;
};
export declare const QueryAllBlacklistedRequest: {
    typeUrl: string;
    encode(message: QueryAllBlacklistedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllBlacklistedRequest;
    fromPartial(object: Partial<QueryAllBlacklistedRequest>): QueryAllBlacklistedRequest;
    fromAmino(object: QueryAllBlacklistedRequestAmino): QueryAllBlacklistedRequest;
    toAmino(message: QueryAllBlacklistedRequest): QueryAllBlacklistedRequestAmino;
    fromAminoMsg(object: QueryAllBlacklistedRequestAminoMsg): QueryAllBlacklistedRequest;
    fromProtoMsg(message: QueryAllBlacklistedRequestProtoMsg): QueryAllBlacklistedRequest;
    toProto(message: QueryAllBlacklistedRequest): Uint8Array;
    toProtoMsg(message: QueryAllBlacklistedRequest): QueryAllBlacklistedRequestProtoMsg;
};
export declare const QueryAllBlacklistedResponse: {
    typeUrl: string;
    encode(message: QueryAllBlacklistedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllBlacklistedResponse;
    fromPartial(object: Partial<QueryAllBlacklistedResponse>): QueryAllBlacklistedResponse;
    fromAmino(object: QueryAllBlacklistedResponseAmino): QueryAllBlacklistedResponse;
    toAmino(message: QueryAllBlacklistedResponse): QueryAllBlacklistedResponseAmino;
    fromAminoMsg(object: QueryAllBlacklistedResponseAminoMsg): QueryAllBlacklistedResponse;
    fromProtoMsg(message: QueryAllBlacklistedResponseProtoMsg): QueryAllBlacklistedResponse;
    toProto(message: QueryAllBlacklistedResponse): Uint8Array;
    toProtoMsg(message: QueryAllBlacklistedResponse): QueryAllBlacklistedResponseProtoMsg;
};
export declare const QueryGetPausedRequest: {
    typeUrl: string;
    encode(_: QueryGetPausedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetPausedRequest;
    fromPartial(_: Partial<QueryGetPausedRequest>): QueryGetPausedRequest;
    fromAmino(_: QueryGetPausedRequestAmino): QueryGetPausedRequest;
    toAmino(_: QueryGetPausedRequest): QueryGetPausedRequestAmino;
    fromAminoMsg(object: QueryGetPausedRequestAminoMsg): QueryGetPausedRequest;
    fromProtoMsg(message: QueryGetPausedRequestProtoMsg): QueryGetPausedRequest;
    toProto(message: QueryGetPausedRequest): Uint8Array;
    toProtoMsg(message: QueryGetPausedRequest): QueryGetPausedRequestProtoMsg;
};
export declare const QueryGetPausedResponse: {
    typeUrl: string;
    encode(message: QueryGetPausedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPausedResponse;
    fromPartial(object: Partial<QueryGetPausedResponse>): QueryGetPausedResponse;
    fromAmino(object: QueryGetPausedResponseAmino): QueryGetPausedResponse;
    toAmino(message: QueryGetPausedResponse): QueryGetPausedResponseAmino;
    fromAminoMsg(object: QueryGetPausedResponseAminoMsg): QueryGetPausedResponse;
    fromProtoMsg(message: QueryGetPausedResponseProtoMsg): QueryGetPausedResponse;
    toProto(message: QueryGetPausedResponse): Uint8Array;
    toProtoMsg(message: QueryGetPausedResponse): QueryGetPausedResponseProtoMsg;
};
export declare const QueryGetMasterMinterRequest: {
    typeUrl: string;
    encode(_: QueryGetMasterMinterRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetMasterMinterRequest;
    fromPartial(_: Partial<QueryGetMasterMinterRequest>): QueryGetMasterMinterRequest;
    fromAmino(_: QueryGetMasterMinterRequestAmino): QueryGetMasterMinterRequest;
    toAmino(_: QueryGetMasterMinterRequest): QueryGetMasterMinterRequestAmino;
    fromAminoMsg(object: QueryGetMasterMinterRequestAminoMsg): QueryGetMasterMinterRequest;
    fromProtoMsg(message: QueryGetMasterMinterRequestProtoMsg): QueryGetMasterMinterRequest;
    toProto(message: QueryGetMasterMinterRequest): Uint8Array;
    toProtoMsg(message: QueryGetMasterMinterRequest): QueryGetMasterMinterRequestProtoMsg;
};
export declare const QueryGetMasterMinterResponse: {
    typeUrl: string;
    encode(message: QueryGetMasterMinterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetMasterMinterResponse;
    fromPartial(object: Partial<QueryGetMasterMinterResponse>): QueryGetMasterMinterResponse;
    fromAmino(object: QueryGetMasterMinterResponseAmino): QueryGetMasterMinterResponse;
    toAmino(message: QueryGetMasterMinterResponse): QueryGetMasterMinterResponseAmino;
    fromAminoMsg(object: QueryGetMasterMinterResponseAminoMsg): QueryGetMasterMinterResponse;
    fromProtoMsg(message: QueryGetMasterMinterResponseProtoMsg): QueryGetMasterMinterResponse;
    toProto(message: QueryGetMasterMinterResponse): Uint8Array;
    toProtoMsg(message: QueryGetMasterMinterResponse): QueryGetMasterMinterResponseProtoMsg;
};
export declare const QueryGetMintersRequest: {
    typeUrl: string;
    encode(message: QueryGetMintersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetMintersRequest;
    fromPartial(object: Partial<QueryGetMintersRequest>): QueryGetMintersRequest;
    fromAmino(object: QueryGetMintersRequestAmino): QueryGetMintersRequest;
    toAmino(message: QueryGetMintersRequest): QueryGetMintersRequestAmino;
    fromAminoMsg(object: QueryGetMintersRequestAminoMsg): QueryGetMintersRequest;
    fromProtoMsg(message: QueryGetMintersRequestProtoMsg): QueryGetMintersRequest;
    toProto(message: QueryGetMintersRequest): Uint8Array;
    toProtoMsg(message: QueryGetMintersRequest): QueryGetMintersRequestProtoMsg;
};
export declare const QueryGetMintersResponse: {
    typeUrl: string;
    encode(message: QueryGetMintersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetMintersResponse;
    fromPartial(object: Partial<QueryGetMintersResponse>): QueryGetMintersResponse;
    fromAmino(object: QueryGetMintersResponseAmino): QueryGetMintersResponse;
    toAmino(message: QueryGetMintersResponse): QueryGetMintersResponseAmino;
    fromAminoMsg(object: QueryGetMintersResponseAminoMsg): QueryGetMintersResponse;
    fromProtoMsg(message: QueryGetMintersResponseProtoMsg): QueryGetMintersResponse;
    toProto(message: QueryGetMintersResponse): Uint8Array;
    toProtoMsg(message: QueryGetMintersResponse): QueryGetMintersResponseProtoMsg;
};
export declare const QueryAllMintersRequest: {
    typeUrl: string;
    encode(message: QueryAllMintersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllMintersRequest;
    fromPartial(object: Partial<QueryAllMintersRequest>): QueryAllMintersRequest;
    fromAmino(object: QueryAllMintersRequestAmino): QueryAllMintersRequest;
    toAmino(message: QueryAllMintersRequest): QueryAllMintersRequestAmino;
    fromAminoMsg(object: QueryAllMintersRequestAminoMsg): QueryAllMintersRequest;
    fromProtoMsg(message: QueryAllMintersRequestProtoMsg): QueryAllMintersRequest;
    toProto(message: QueryAllMintersRequest): Uint8Array;
    toProtoMsg(message: QueryAllMintersRequest): QueryAllMintersRequestProtoMsg;
};
export declare const QueryAllMintersResponse: {
    typeUrl: string;
    encode(message: QueryAllMintersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllMintersResponse;
    fromPartial(object: Partial<QueryAllMintersResponse>): QueryAllMintersResponse;
    fromAmino(object: QueryAllMintersResponseAmino): QueryAllMintersResponse;
    toAmino(message: QueryAllMintersResponse): QueryAllMintersResponseAmino;
    fromAminoMsg(object: QueryAllMintersResponseAminoMsg): QueryAllMintersResponse;
    fromProtoMsg(message: QueryAllMintersResponseProtoMsg): QueryAllMintersResponse;
    toProto(message: QueryAllMintersResponse): Uint8Array;
    toProtoMsg(message: QueryAllMintersResponse): QueryAllMintersResponseProtoMsg;
};
export declare const QueryGetPauserRequest: {
    typeUrl: string;
    encode(_: QueryGetPauserRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetPauserRequest;
    fromPartial(_: Partial<QueryGetPauserRequest>): QueryGetPauserRequest;
    fromAmino(_: QueryGetPauserRequestAmino): QueryGetPauserRequest;
    toAmino(_: QueryGetPauserRequest): QueryGetPauserRequestAmino;
    fromAminoMsg(object: QueryGetPauserRequestAminoMsg): QueryGetPauserRequest;
    fromProtoMsg(message: QueryGetPauserRequestProtoMsg): QueryGetPauserRequest;
    toProto(message: QueryGetPauserRequest): Uint8Array;
    toProtoMsg(message: QueryGetPauserRequest): QueryGetPauserRequestProtoMsg;
};
export declare const QueryGetPauserResponse: {
    typeUrl: string;
    encode(message: QueryGetPauserResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPauserResponse;
    fromPartial(object: Partial<QueryGetPauserResponse>): QueryGetPauserResponse;
    fromAmino(object: QueryGetPauserResponseAmino): QueryGetPauserResponse;
    toAmino(message: QueryGetPauserResponse): QueryGetPauserResponseAmino;
    fromAminoMsg(object: QueryGetPauserResponseAminoMsg): QueryGetPauserResponse;
    fromProtoMsg(message: QueryGetPauserResponseProtoMsg): QueryGetPauserResponse;
    toProto(message: QueryGetPauserResponse): Uint8Array;
    toProtoMsg(message: QueryGetPauserResponse): QueryGetPauserResponseProtoMsg;
};
export declare const QueryGetBlacklisterRequest: {
    typeUrl: string;
    encode(_: QueryGetBlacklisterRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetBlacklisterRequest;
    fromPartial(_: Partial<QueryGetBlacklisterRequest>): QueryGetBlacklisterRequest;
    fromAmino(_: QueryGetBlacklisterRequestAmino): QueryGetBlacklisterRequest;
    toAmino(_: QueryGetBlacklisterRequest): QueryGetBlacklisterRequestAmino;
    fromAminoMsg(object: QueryGetBlacklisterRequestAminoMsg): QueryGetBlacklisterRequest;
    fromProtoMsg(message: QueryGetBlacklisterRequestProtoMsg): QueryGetBlacklisterRequest;
    toProto(message: QueryGetBlacklisterRequest): Uint8Array;
    toProtoMsg(message: QueryGetBlacklisterRequest): QueryGetBlacklisterRequestProtoMsg;
};
export declare const QueryGetBlacklisterResponse: {
    typeUrl: string;
    encode(message: QueryGetBlacklisterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetBlacklisterResponse;
    fromPartial(object: Partial<QueryGetBlacklisterResponse>): QueryGetBlacklisterResponse;
    fromAmino(object: QueryGetBlacklisterResponseAmino): QueryGetBlacklisterResponse;
    toAmino(message: QueryGetBlacklisterResponse): QueryGetBlacklisterResponseAmino;
    fromAminoMsg(object: QueryGetBlacklisterResponseAminoMsg): QueryGetBlacklisterResponse;
    fromProtoMsg(message: QueryGetBlacklisterResponseProtoMsg): QueryGetBlacklisterResponse;
    toProto(message: QueryGetBlacklisterResponse): Uint8Array;
    toProtoMsg(message: QueryGetBlacklisterResponse): QueryGetBlacklisterResponseProtoMsg;
};
export declare const QueryGetOwnerRequest: {
    typeUrl: string;
    encode(_: QueryGetOwnerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetOwnerRequest;
    fromPartial(_: Partial<QueryGetOwnerRequest>): QueryGetOwnerRequest;
    fromAmino(_: QueryGetOwnerRequestAmino): QueryGetOwnerRequest;
    toAmino(_: QueryGetOwnerRequest): QueryGetOwnerRequestAmino;
    fromAminoMsg(object: QueryGetOwnerRequestAminoMsg): QueryGetOwnerRequest;
    fromProtoMsg(message: QueryGetOwnerRequestProtoMsg): QueryGetOwnerRequest;
    toProto(message: QueryGetOwnerRequest): Uint8Array;
    toProtoMsg(message: QueryGetOwnerRequest): QueryGetOwnerRequestProtoMsg;
};
export declare const QueryGetOwnerResponse: {
    typeUrl: string;
    encode(message: QueryGetOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetOwnerResponse;
    fromPartial(object: Partial<QueryGetOwnerResponse>): QueryGetOwnerResponse;
    fromAmino(object: QueryGetOwnerResponseAmino): QueryGetOwnerResponse;
    toAmino(message: QueryGetOwnerResponse): QueryGetOwnerResponseAmino;
    fromAminoMsg(object: QueryGetOwnerResponseAminoMsg): QueryGetOwnerResponse;
    fromProtoMsg(message: QueryGetOwnerResponseProtoMsg): QueryGetOwnerResponse;
    toProto(message: QueryGetOwnerResponse): Uint8Array;
    toProtoMsg(message: QueryGetOwnerResponse): QueryGetOwnerResponseProtoMsg;
};
export declare const QueryGetMinterControllerRequest: {
    typeUrl: string;
    encode(message: QueryGetMinterControllerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetMinterControllerRequest;
    fromPartial(object: Partial<QueryGetMinterControllerRequest>): QueryGetMinterControllerRequest;
    fromAmino(object: QueryGetMinterControllerRequestAmino): QueryGetMinterControllerRequest;
    toAmino(message: QueryGetMinterControllerRequest): QueryGetMinterControllerRequestAmino;
    fromAminoMsg(object: QueryGetMinterControllerRequestAminoMsg): QueryGetMinterControllerRequest;
    fromProtoMsg(message: QueryGetMinterControllerRequestProtoMsg): QueryGetMinterControllerRequest;
    toProto(message: QueryGetMinterControllerRequest): Uint8Array;
    toProtoMsg(message: QueryGetMinterControllerRequest): QueryGetMinterControllerRequestProtoMsg;
};
export declare const QueryGetMinterControllerResponse: {
    typeUrl: string;
    encode(message: QueryGetMinterControllerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetMinterControllerResponse;
    fromPartial(object: Partial<QueryGetMinterControllerResponse>): QueryGetMinterControllerResponse;
    fromAmino(object: QueryGetMinterControllerResponseAmino): QueryGetMinterControllerResponse;
    toAmino(message: QueryGetMinterControllerResponse): QueryGetMinterControllerResponseAmino;
    fromAminoMsg(object: QueryGetMinterControllerResponseAminoMsg): QueryGetMinterControllerResponse;
    fromProtoMsg(message: QueryGetMinterControllerResponseProtoMsg): QueryGetMinterControllerResponse;
    toProto(message: QueryGetMinterControllerResponse): Uint8Array;
    toProtoMsg(message: QueryGetMinterControllerResponse): QueryGetMinterControllerResponseProtoMsg;
};
export declare const QueryAllMinterControllerRequest: {
    typeUrl: string;
    encode(message: QueryAllMinterControllerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllMinterControllerRequest;
    fromPartial(object: Partial<QueryAllMinterControllerRequest>): QueryAllMinterControllerRequest;
    fromAmino(object: QueryAllMinterControllerRequestAmino): QueryAllMinterControllerRequest;
    toAmino(message: QueryAllMinterControllerRequest): QueryAllMinterControllerRequestAmino;
    fromAminoMsg(object: QueryAllMinterControllerRequestAminoMsg): QueryAllMinterControllerRequest;
    fromProtoMsg(message: QueryAllMinterControllerRequestProtoMsg): QueryAllMinterControllerRequest;
    toProto(message: QueryAllMinterControllerRequest): Uint8Array;
    toProtoMsg(message: QueryAllMinterControllerRequest): QueryAllMinterControllerRequestProtoMsg;
};
export declare const QueryAllMinterControllerResponse: {
    typeUrl: string;
    encode(message: QueryAllMinterControllerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllMinterControllerResponse;
    fromPartial(object: Partial<QueryAllMinterControllerResponse>): QueryAllMinterControllerResponse;
    fromAmino(object: QueryAllMinterControllerResponseAmino): QueryAllMinterControllerResponse;
    toAmino(message: QueryAllMinterControllerResponse): QueryAllMinterControllerResponseAmino;
    fromAminoMsg(object: QueryAllMinterControllerResponseAminoMsg): QueryAllMinterControllerResponse;
    fromProtoMsg(message: QueryAllMinterControllerResponseProtoMsg): QueryAllMinterControllerResponse;
    toProto(message: QueryAllMinterControllerResponse): Uint8Array;
    toProtoMsg(message: QueryAllMinterControllerResponse): QueryAllMinterControllerResponseProtoMsg;
};
export declare const QueryGetMintingDenomRequest: {
    typeUrl: string;
    encode(_: QueryGetMintingDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGetMintingDenomRequest;
    fromPartial(_: Partial<QueryGetMintingDenomRequest>): QueryGetMintingDenomRequest;
    fromAmino(_: QueryGetMintingDenomRequestAmino): QueryGetMintingDenomRequest;
    toAmino(_: QueryGetMintingDenomRequest): QueryGetMintingDenomRequestAmino;
    fromAminoMsg(object: QueryGetMintingDenomRequestAminoMsg): QueryGetMintingDenomRequest;
    fromProtoMsg(message: QueryGetMintingDenomRequestProtoMsg): QueryGetMintingDenomRequest;
    toProto(message: QueryGetMintingDenomRequest): Uint8Array;
    toProtoMsg(message: QueryGetMintingDenomRequest): QueryGetMintingDenomRequestProtoMsg;
};
export declare const QueryGetMintingDenomResponse: {
    typeUrl: string;
    encode(message: QueryGetMintingDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetMintingDenomResponse;
    fromPartial(object: Partial<QueryGetMintingDenomResponse>): QueryGetMintingDenomResponse;
    fromAmino(object: QueryGetMintingDenomResponseAmino): QueryGetMintingDenomResponse;
    toAmino(message: QueryGetMintingDenomResponse): QueryGetMintingDenomResponseAmino;
    fromAminoMsg(object: QueryGetMintingDenomResponseAminoMsg): QueryGetMintingDenomResponse;
    fromProtoMsg(message: QueryGetMintingDenomResponseProtoMsg): QueryGetMintingDenomResponse;
    toProto(message: QueryGetMintingDenomResponse): Uint8Array;
    toProtoMsg(message: QueryGetMintingDenomResponse): QueryGetMintingDenomResponseProtoMsg;
};
