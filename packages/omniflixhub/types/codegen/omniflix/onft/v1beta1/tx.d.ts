import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { WeightedAddress, WeightedAddressAmino, WeightedAddressSDKType, Metadata, MetadataAmino, MetadataSDKType } from "./onft";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface MsgCreateDenom {
    id: string;
    symbol: string;
    name: string;
    description: string;
    previewUri: string;
    schema: string;
    sender: string;
    creationFee: Coin;
    uri: string;
    uriHash: string;
    data: string;
    royaltyReceivers: WeightedAddress[];
}
export interface MsgCreateDenomProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom";
    value: Uint8Array;
}
export interface MsgCreateDenomAmino {
    id?: string;
    symbol?: string;
    name?: string;
    description?: string;
    preview_uri?: string;
    schema?: string;
    sender?: string;
    creation_fee?: CoinAmino;
    uri?: string;
    uri_hash?: string;
    data?: string;
    royalty_receivers?: WeightedAddressAmino[];
}
export interface MsgCreateDenomAminoMsg {
    type: "OmniFlix/onft/MsgCreateDenom";
    value: MsgCreateDenomAmino;
}
export interface MsgCreateDenomSDKType {
    id: string;
    symbol: string;
    name: string;
    description: string;
    preview_uri: string;
    schema: string;
    sender: string;
    creation_fee: CoinSDKType;
    uri: string;
    uri_hash: string;
    data: string;
    royalty_receivers: WeightedAddressSDKType[];
}
export interface MsgCreateDenomResponse {
}
export interface MsgCreateDenomResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse";
    value: Uint8Array;
}
export interface MsgCreateDenomResponseAmino {
}
export interface MsgCreateDenomResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgCreateDenomResponse";
    value: MsgCreateDenomResponseAmino;
}
export interface MsgCreateDenomResponseSDKType {
}
export interface MsgUpdateDenom {
    id: string;
    name: string;
    description: string;
    previewUri: string;
    sender: string;
    royaltyReceivers: WeightedAddress[];
}
export interface MsgUpdateDenomProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom";
    value: Uint8Array;
}
export interface MsgUpdateDenomAmino {
    id?: string;
    name?: string;
    description?: string;
    preview_uri?: string;
    sender?: string;
    royalty_receivers?: WeightedAddressAmino[];
}
export interface MsgUpdateDenomAminoMsg {
    type: "OmniFlix/onft/MsgUpdateDenom";
    value: MsgUpdateDenomAmino;
}
export interface MsgUpdateDenomSDKType {
    id: string;
    name: string;
    description: string;
    preview_uri: string;
    sender: string;
    royalty_receivers: WeightedAddressSDKType[];
}
export interface MsgUpdateDenomResponse {
}
export interface MsgUpdateDenomResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse";
    value: Uint8Array;
}
export interface MsgUpdateDenomResponseAmino {
}
export interface MsgUpdateDenomResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgUpdateDenomResponse";
    value: MsgUpdateDenomResponseAmino;
}
export interface MsgUpdateDenomResponseSDKType {
}
export interface MsgPurgeDenom {
    id: string;
    sender: string;
}
export interface MsgPurgeDenomProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom";
    value: Uint8Array;
}
export interface MsgPurgeDenomAmino {
    id?: string;
    sender?: string;
}
export interface MsgPurgeDenomAminoMsg {
    type: "OmniFlix/onft/MsgPurgeDenom";
    value: MsgPurgeDenomAmino;
}
export interface MsgPurgeDenomSDKType {
    id: string;
    sender: string;
}
export interface MsgPurgeDenomResponse {
}
export interface MsgPurgeDenomResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse";
    value: Uint8Array;
}
export interface MsgPurgeDenomResponseAmino {
}
export interface MsgPurgeDenomResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgPurgeDenomResponse";
    value: MsgPurgeDenomResponseAmino;
}
export interface MsgPurgeDenomResponseSDKType {
}
export interface MsgTransferDenom {
    id: string;
    sender: string;
    recipient: string;
}
export interface MsgTransferDenomProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom";
    value: Uint8Array;
}
export interface MsgTransferDenomAmino {
    id?: string;
    sender?: string;
    recipient?: string;
}
export interface MsgTransferDenomAminoMsg {
    type: "OmniFlix/onft/MsgTransferDenom";
    value: MsgTransferDenomAmino;
}
export interface MsgTransferDenomSDKType {
    id: string;
    sender: string;
    recipient: string;
}
export interface MsgTransferDenomResponse {
}
export interface MsgTransferDenomResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse";
    value: Uint8Array;
}
export interface MsgTransferDenomResponseAmino {
}
export interface MsgTransferDenomResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgTransferDenomResponse";
    value: MsgTransferDenomResponseAmino;
}
export interface MsgTransferDenomResponseSDKType {
}
export interface MsgMintONFT {
    id: string;
    denomId: string;
    metadata: Metadata;
    data: string;
    transferable: boolean;
    extensible: boolean;
    nsfw: boolean;
    royaltyShare: string;
    sender: string;
    recipient: string;
}
export interface MsgMintONFTProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT";
    value: Uint8Array;
}
export interface MsgMintONFTAmino {
    id?: string;
    denom_id?: string;
    metadata?: MetadataAmino;
    data?: string;
    transferable?: boolean;
    extensible?: boolean;
    nsfw?: boolean;
    royalty_share?: string;
    sender?: string;
    recipient?: string;
}
export interface MsgMintONFTAminoMsg {
    type: "OmniFlix/onft/MsgMintONFT";
    value: MsgMintONFTAmino;
}
export interface MsgMintONFTSDKType {
    id: string;
    denom_id: string;
    metadata: MetadataSDKType;
    data: string;
    transferable: boolean;
    extensible: boolean;
    nsfw: boolean;
    royalty_share: string;
    sender: string;
    recipient: string;
}
export interface MsgMintONFTResponse {
}
export interface MsgMintONFTResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse";
    value: Uint8Array;
}
export interface MsgMintONFTResponseAmino {
}
export interface MsgMintONFTResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgMintONFTResponse";
    value: MsgMintONFTResponseAmino;
}
export interface MsgMintONFTResponseSDKType {
}
export interface MsgTransferONFT {
    id: string;
    denomId: string;
    sender: string;
    recipient: string;
}
export interface MsgTransferONFTProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT";
    value: Uint8Array;
}
export interface MsgTransferONFTAmino {
    id?: string;
    denom_id?: string;
    sender?: string;
    recipient?: string;
}
export interface MsgTransferONFTAminoMsg {
    type: "OmniFlix/onft/MsgTransferONFT";
    value: MsgTransferONFTAmino;
}
export interface MsgTransferONFTSDKType {
    id: string;
    denom_id: string;
    sender: string;
    recipient: string;
}
export interface MsgTransferONFTResponse {
}
export interface MsgTransferONFTResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse";
    value: Uint8Array;
}
export interface MsgTransferONFTResponseAmino {
}
export interface MsgTransferONFTResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgTransferONFTResponse";
    value: MsgTransferONFTResponseAmino;
}
export interface MsgTransferONFTResponseSDKType {
}
export interface MsgBurnONFT {
    id: string;
    denomId: string;
    sender: string;
}
export interface MsgBurnONFTProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT";
    value: Uint8Array;
}
export interface MsgBurnONFTAmino {
    id?: string;
    denom_id?: string;
    sender?: string;
}
export interface MsgBurnONFTAminoMsg {
    type: "OmniFlix/onft/MsgBurnONFT";
    value: MsgBurnONFTAmino;
}
export interface MsgBurnONFTSDKType {
    id: string;
    denom_id: string;
    sender: string;
}
export interface MsgBurnONFTResponse {
}
export interface MsgBurnONFTResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse";
    value: Uint8Array;
}
export interface MsgBurnONFTResponseAmino {
}
export interface MsgBurnONFTResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgBurnONFTResponse";
    value: MsgBurnONFTResponseAmino;
}
export interface MsgBurnONFTResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the onft module parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /**
     * params defines the onft module parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateDenom: {
    typeUrl: string;
    encode(message: MsgCreateDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDenom;
    fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom;
    fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom;
    toAmino(message: MsgCreateDenom): MsgCreateDenomAmino;
    fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom;
    toAminoMsg(message: MsgCreateDenom): MsgCreateDenomAminoMsg;
    fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom;
    toProto(message: MsgCreateDenom): Uint8Array;
    toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg;
};
export declare const MsgCreateDenomResponse: {
    typeUrl: string;
    encode(_: MsgCreateDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateDenomResponse;
    fromPartial(_: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
    fromAmino(_: MsgCreateDenomResponseAmino): MsgCreateDenomResponse;
    toAmino(_: MsgCreateDenomResponse): MsgCreateDenomResponseAmino;
    fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse;
    fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse;
    toProto(message: MsgCreateDenomResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg;
};
export declare const MsgUpdateDenom: {
    typeUrl: string;
    encode(message: MsgUpdateDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDenom;
    fromPartial(object: Partial<MsgUpdateDenom>): MsgUpdateDenom;
    fromAmino(object: MsgUpdateDenomAmino): MsgUpdateDenom;
    toAmino(message: MsgUpdateDenom): MsgUpdateDenomAmino;
    fromAminoMsg(object: MsgUpdateDenomAminoMsg): MsgUpdateDenom;
    toAminoMsg(message: MsgUpdateDenom): MsgUpdateDenomAminoMsg;
    fromProtoMsg(message: MsgUpdateDenomProtoMsg): MsgUpdateDenom;
    toProto(message: MsgUpdateDenom): Uint8Array;
    toProtoMsg(message: MsgUpdateDenom): MsgUpdateDenomProtoMsg;
};
export declare const MsgUpdateDenomResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDenomResponse;
    fromPartial(_: Partial<MsgUpdateDenomResponse>): MsgUpdateDenomResponse;
    fromAmino(_: MsgUpdateDenomResponseAmino): MsgUpdateDenomResponse;
    toAmino(_: MsgUpdateDenomResponse): MsgUpdateDenomResponseAmino;
    fromAminoMsg(object: MsgUpdateDenomResponseAminoMsg): MsgUpdateDenomResponse;
    fromProtoMsg(message: MsgUpdateDenomResponseProtoMsg): MsgUpdateDenomResponse;
    toProto(message: MsgUpdateDenomResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDenomResponse): MsgUpdateDenomResponseProtoMsg;
};
export declare const MsgPurgeDenom: {
    typeUrl: string;
    encode(message: MsgPurgeDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPurgeDenom;
    fromPartial(object: Partial<MsgPurgeDenom>): MsgPurgeDenom;
    fromAmino(object: MsgPurgeDenomAmino): MsgPurgeDenom;
    toAmino(message: MsgPurgeDenom): MsgPurgeDenomAmino;
    fromAminoMsg(object: MsgPurgeDenomAminoMsg): MsgPurgeDenom;
    toAminoMsg(message: MsgPurgeDenom): MsgPurgeDenomAminoMsg;
    fromProtoMsg(message: MsgPurgeDenomProtoMsg): MsgPurgeDenom;
    toProto(message: MsgPurgeDenom): Uint8Array;
    toProtoMsg(message: MsgPurgeDenom): MsgPurgeDenomProtoMsg;
};
export declare const MsgPurgeDenomResponse: {
    typeUrl: string;
    encode(_: MsgPurgeDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPurgeDenomResponse;
    fromPartial(_: Partial<MsgPurgeDenomResponse>): MsgPurgeDenomResponse;
    fromAmino(_: MsgPurgeDenomResponseAmino): MsgPurgeDenomResponse;
    toAmino(_: MsgPurgeDenomResponse): MsgPurgeDenomResponseAmino;
    fromAminoMsg(object: MsgPurgeDenomResponseAminoMsg): MsgPurgeDenomResponse;
    fromProtoMsg(message: MsgPurgeDenomResponseProtoMsg): MsgPurgeDenomResponse;
    toProto(message: MsgPurgeDenomResponse): Uint8Array;
    toProtoMsg(message: MsgPurgeDenomResponse): MsgPurgeDenomResponseProtoMsg;
};
export declare const MsgTransferDenom: {
    typeUrl: string;
    encode(message: MsgTransferDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferDenom;
    fromPartial(object: Partial<MsgTransferDenom>): MsgTransferDenom;
    fromAmino(object: MsgTransferDenomAmino): MsgTransferDenom;
    toAmino(message: MsgTransferDenom): MsgTransferDenomAmino;
    fromAminoMsg(object: MsgTransferDenomAminoMsg): MsgTransferDenom;
    toAminoMsg(message: MsgTransferDenom): MsgTransferDenomAminoMsg;
    fromProtoMsg(message: MsgTransferDenomProtoMsg): MsgTransferDenom;
    toProto(message: MsgTransferDenom): Uint8Array;
    toProtoMsg(message: MsgTransferDenom): MsgTransferDenomProtoMsg;
};
export declare const MsgTransferDenomResponse: {
    typeUrl: string;
    encode(_: MsgTransferDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferDenomResponse;
    fromPartial(_: Partial<MsgTransferDenomResponse>): MsgTransferDenomResponse;
    fromAmino(_: MsgTransferDenomResponseAmino): MsgTransferDenomResponse;
    toAmino(_: MsgTransferDenomResponse): MsgTransferDenomResponseAmino;
    fromAminoMsg(object: MsgTransferDenomResponseAminoMsg): MsgTransferDenomResponse;
    fromProtoMsg(message: MsgTransferDenomResponseProtoMsg): MsgTransferDenomResponse;
    toProto(message: MsgTransferDenomResponse): Uint8Array;
    toProtoMsg(message: MsgTransferDenomResponse): MsgTransferDenomResponseProtoMsg;
};
export declare const MsgMintONFT: {
    typeUrl: string;
    encode(message: MsgMintONFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMintONFT;
    fromPartial(object: Partial<MsgMintONFT>): MsgMintONFT;
    fromAmino(object: MsgMintONFTAmino): MsgMintONFT;
    toAmino(message: MsgMintONFT): MsgMintONFTAmino;
    fromAminoMsg(object: MsgMintONFTAminoMsg): MsgMintONFT;
    toAminoMsg(message: MsgMintONFT): MsgMintONFTAminoMsg;
    fromProtoMsg(message: MsgMintONFTProtoMsg): MsgMintONFT;
    toProto(message: MsgMintONFT): Uint8Array;
    toProtoMsg(message: MsgMintONFT): MsgMintONFTProtoMsg;
};
export declare const MsgMintONFTResponse: {
    typeUrl: string;
    encode(_: MsgMintONFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMintONFTResponse;
    fromPartial(_: Partial<MsgMintONFTResponse>): MsgMintONFTResponse;
    fromAmino(_: MsgMintONFTResponseAmino): MsgMintONFTResponse;
    toAmino(_: MsgMintONFTResponse): MsgMintONFTResponseAmino;
    fromAminoMsg(object: MsgMintONFTResponseAminoMsg): MsgMintONFTResponse;
    fromProtoMsg(message: MsgMintONFTResponseProtoMsg): MsgMintONFTResponse;
    toProto(message: MsgMintONFTResponse): Uint8Array;
    toProtoMsg(message: MsgMintONFTResponse): MsgMintONFTResponseProtoMsg;
};
export declare const MsgTransferONFT: {
    typeUrl: string;
    encode(message: MsgTransferONFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferONFT;
    fromPartial(object: Partial<MsgTransferONFT>): MsgTransferONFT;
    fromAmino(object: MsgTransferONFTAmino): MsgTransferONFT;
    toAmino(message: MsgTransferONFT): MsgTransferONFTAmino;
    fromAminoMsg(object: MsgTransferONFTAminoMsg): MsgTransferONFT;
    toAminoMsg(message: MsgTransferONFT): MsgTransferONFTAminoMsg;
    fromProtoMsg(message: MsgTransferONFTProtoMsg): MsgTransferONFT;
    toProto(message: MsgTransferONFT): Uint8Array;
    toProtoMsg(message: MsgTransferONFT): MsgTransferONFTProtoMsg;
};
export declare const MsgTransferONFTResponse: {
    typeUrl: string;
    encode(_: MsgTransferONFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferONFTResponse;
    fromPartial(_: Partial<MsgTransferONFTResponse>): MsgTransferONFTResponse;
    fromAmino(_: MsgTransferONFTResponseAmino): MsgTransferONFTResponse;
    toAmino(_: MsgTransferONFTResponse): MsgTransferONFTResponseAmino;
    fromAminoMsg(object: MsgTransferONFTResponseAminoMsg): MsgTransferONFTResponse;
    fromProtoMsg(message: MsgTransferONFTResponseProtoMsg): MsgTransferONFTResponse;
    toProto(message: MsgTransferONFTResponse): Uint8Array;
    toProtoMsg(message: MsgTransferONFTResponse): MsgTransferONFTResponseProtoMsg;
};
export declare const MsgBurnONFT: {
    typeUrl: string;
    encode(message: MsgBurnONFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBurnONFT;
    fromPartial(object: Partial<MsgBurnONFT>): MsgBurnONFT;
    fromAmino(object: MsgBurnONFTAmino): MsgBurnONFT;
    toAmino(message: MsgBurnONFT): MsgBurnONFTAmino;
    fromAminoMsg(object: MsgBurnONFTAminoMsg): MsgBurnONFT;
    toAminoMsg(message: MsgBurnONFT): MsgBurnONFTAminoMsg;
    fromProtoMsg(message: MsgBurnONFTProtoMsg): MsgBurnONFT;
    toProto(message: MsgBurnONFT): Uint8Array;
    toProtoMsg(message: MsgBurnONFT): MsgBurnONFTProtoMsg;
};
export declare const MsgBurnONFTResponse: {
    typeUrl: string;
    encode(_: MsgBurnONFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBurnONFTResponse;
    fromPartial(_: Partial<MsgBurnONFTResponse>): MsgBurnONFTResponse;
    fromAmino(_: MsgBurnONFTResponseAmino): MsgBurnONFTResponse;
    toAmino(_: MsgBurnONFTResponse): MsgBurnONFTResponseAmino;
    fromAminoMsg(object: MsgBurnONFTResponseAminoMsg): MsgBurnONFTResponse;
    fromProtoMsg(message: MsgBurnONFTResponseProtoMsg): MsgBurnONFTResponse;
    toProto(message: MsgBurnONFTResponse): Uint8Array;
    toProtoMsg(message: MsgBurnONFTResponse): MsgBurnONFTResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
