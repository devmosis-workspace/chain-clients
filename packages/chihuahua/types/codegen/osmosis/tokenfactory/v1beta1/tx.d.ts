import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, MetadataSDKType, Params, ParamsAmino, ParamsSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryWriter } from "../../../binary";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
export interface MsgCreateDenomProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom";
    value: Uint8Array;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomAmino {
    sender?: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom?: string;
}
export interface MsgCreateDenomAminoMsg {
    type: "osmosis/tokenfactory/create-denom";
    value: MsgCreateDenomAmino;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomSDKType {
    sender: string;
    subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
    newTokenDenom: string;
}
export interface MsgCreateDenomResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse";
    value: Uint8Array;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseAmino {
    new_token_denom?: string;
}
export interface MsgCreateDenomResponseAminoMsg {
    type: "osmosis/tokenfactory/create-denom-response";
    value: MsgCreateDenomResponseAmino;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseSDKType {
    new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
    sender: string;
    amount: Coin;
    mintToAddress: string;
}
export interface MsgMintProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint";
    value: Uint8Array;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintAmino {
    sender?: string;
    amount?: CoinAmino;
    mintToAddress?: string;
}
export interface MsgMintAminoMsg {
    type: "osmosis/tokenfactory/mint";
    value: MsgMintAmino;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
    sender: string;
    amount: CoinSDKType;
    mintToAddress: string;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse";
    value: Uint8Array;
}
export interface MsgMintResponseAmino {
}
export interface MsgMintResponseAminoMsg {
    type: "osmosis/tokenfactory/mint-response";
    value: MsgMintResponseAmino;
}
export interface MsgMintResponseSDKType {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount: Coin;
    burnFromAddress: string;
}
export interface MsgBurnProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn";
    value: Uint8Array;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnAmino {
    sender?: string;
    amount?: CoinAmino;
    burnFromAddress?: string;
}
export interface MsgBurnAminoMsg {
    type: "osmosis/tokenfactory/burn";
    value: MsgBurnAmino;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
    sender: string;
    amount: CoinSDKType;
    burnFromAddress: string;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse";
    value: Uint8Array;
}
export interface MsgBurnResponseAmino {
}
export interface MsgBurnResponseAminoMsg {
    type: "osmosis/tokenfactory/burn-response";
    value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
    sender: string;
    denom: string;
    newAdmin: string;
}
export interface MsgChangeAdminProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin";
    value: Uint8Array;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminAmino {
    sender?: string;
    denom?: string;
    new_admin?: string;
}
export interface MsgChangeAdminAminoMsg {
    type: "osmosis/tokenfactory/change-admin";
    value: MsgChangeAdminAmino;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminSDKType {
    sender: string;
    denom: string;
    new_admin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponse {
}
export interface MsgChangeAdminResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse";
    value: Uint8Array;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseAmino {
}
export interface MsgChangeAdminResponseAminoMsg {
    type: "osmosis/tokenfactory/change-admin-response";
    value: MsgChangeAdminResponseAmino;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeAdminResponseSDKType {
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadata {
    sender: string;
    metadata: Metadata;
}
export interface MsgSetDenomMetadataProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata";
    value: Uint8Array;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadataAmino {
    sender?: string;
    metadata?: MetadataAmino;
}
export interface MsgSetDenomMetadataAminoMsg {
    type: "osmosis/tokenfactory/set-denom-metadata";
    value: MsgSetDenomMetadataAmino;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadataSDKType {
    sender: string;
    metadata: MetadataSDKType;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponse {
}
export interface MsgSetDenomMetadataResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse";
    value: Uint8Array;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponseAmino {
}
export interface MsgSetDenomMetadataResponseAminoMsg {
    type: "osmosis/tokenfactory/set-denom-metadata-response";
    value: MsgSetDenomMetadataResponseAmino;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponseSDKType {
}
export interface MsgForceTransfer {
    sender: string;
    amount: Coin;
    transferFromAddress: string;
    transferToAddress: string;
}
export interface MsgForceTransferProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer";
    value: Uint8Array;
}
export interface MsgForceTransferAmino {
    sender?: string;
    amount?: CoinAmino;
    transferFromAddress?: string;
    transferToAddress?: string;
}
export interface MsgForceTransferAminoMsg {
    type: "osmosis/tokenfactory/force-transfer";
    value: MsgForceTransferAmino;
}
export interface MsgForceTransferSDKType {
    sender: string;
    amount: CoinSDKType;
    transferFromAddress: string;
    transferToAddress: string;
}
export interface MsgForceTransferResponse {
}
export interface MsgForceTransferResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse";
    value: Uint8Array;
}
export interface MsgForceTransferResponseAmino {
}
export interface MsgForceTransferResponseAminoMsg {
    type: "osmosis/tokenfactory/force-transfer-response";
    value: MsgForceTransferResponseAmino;
}
export interface MsgForceTransferResponseSDKType {
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
     * params defines the x/mint parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams";
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
     * params defines the x/mint parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "osmosis/tokenfactory/update-params";
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
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParamsResponse";
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
    type: "osmosis/tokenfactory/update-params-response";
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
    encode(message: MsgCreateDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDenomResponse;
    fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
    fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse;
    toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino;
    fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse;
    toAminoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseAminoMsg;
    fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse;
    toProto(message: MsgCreateDenomResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg;
};
export declare const MsgMint: {
    typeUrl: string;
    encode(message: MsgMint, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMint;
    fromPartial(object: Partial<MsgMint>): MsgMint;
    fromAmino(object: MsgMintAmino): MsgMint;
    toAmino(message: MsgMint): MsgMintAmino;
    fromAminoMsg(object: MsgMintAminoMsg): MsgMint;
    toAminoMsg(message: MsgMint): MsgMintAminoMsg;
    fromProtoMsg(message: MsgMintProtoMsg): MsgMint;
    toProto(message: MsgMint): Uint8Array;
    toProtoMsg(message: MsgMint): MsgMintProtoMsg;
};
export declare const MsgMintResponse: {
    typeUrl: string;
    encode(_: MsgMintResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMintResponse;
    fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse;
    fromAmino(_: MsgMintResponseAmino): MsgMintResponse;
    toAmino(_: MsgMintResponse): MsgMintResponseAmino;
    fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse;
    toAminoMsg(message: MsgMintResponse): MsgMintResponseAminoMsg;
    fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse;
    toProto(message: MsgMintResponse): Uint8Array;
    toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg;
};
export declare const MsgBurn: {
    typeUrl: string;
    encode(message: MsgBurn, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBurn;
    fromPartial(object: Partial<MsgBurn>): MsgBurn;
    fromAmino(object: MsgBurnAmino): MsgBurn;
    toAmino(message: MsgBurn): MsgBurnAmino;
    fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn;
    toAminoMsg(message: MsgBurn): MsgBurnAminoMsg;
    fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn;
    toProto(message: MsgBurn): Uint8Array;
    toProtoMsg(message: MsgBurn): MsgBurnProtoMsg;
};
export declare const MsgBurnResponse: {
    typeUrl: string;
    encode(_: MsgBurnResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBurnResponse;
    fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse;
    fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse;
    toAmino(_: MsgBurnResponse): MsgBurnResponseAmino;
    fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse;
    toAminoMsg(message: MsgBurnResponse): MsgBurnResponseAminoMsg;
    fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse;
    toProto(message: MsgBurnResponse): Uint8Array;
    toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg;
};
export declare const MsgChangeAdmin: {
    typeUrl: string;
    encode(message: MsgChangeAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeAdmin;
    fromPartial(object: Partial<MsgChangeAdmin>): MsgChangeAdmin;
    fromAmino(object: MsgChangeAdminAmino): MsgChangeAdmin;
    toAmino(message: MsgChangeAdmin): MsgChangeAdminAmino;
    fromAminoMsg(object: MsgChangeAdminAminoMsg): MsgChangeAdmin;
    toAminoMsg(message: MsgChangeAdmin): MsgChangeAdminAminoMsg;
    fromProtoMsg(message: MsgChangeAdminProtoMsg): MsgChangeAdmin;
    toProto(message: MsgChangeAdmin): Uint8Array;
    toProtoMsg(message: MsgChangeAdmin): MsgChangeAdminProtoMsg;
};
export declare const MsgChangeAdminResponse: {
    typeUrl: string;
    encode(_: MsgChangeAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeAdminResponse;
    fromPartial(_: Partial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
    fromAmino(_: MsgChangeAdminResponseAmino): MsgChangeAdminResponse;
    toAmino(_: MsgChangeAdminResponse): MsgChangeAdminResponseAmino;
    fromAminoMsg(object: MsgChangeAdminResponseAminoMsg): MsgChangeAdminResponse;
    toAminoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseAminoMsg;
    fromProtoMsg(message: MsgChangeAdminResponseProtoMsg): MsgChangeAdminResponse;
    toProto(message: MsgChangeAdminResponse): Uint8Array;
    toProtoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseProtoMsg;
};
export declare const MsgSetDenomMetadata: {
    typeUrl: string;
    encode(message: MsgSetDenomMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetDenomMetadata;
    fromPartial(object: Partial<MsgSetDenomMetadata>): MsgSetDenomMetadata;
    fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata;
    toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino;
    fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata;
    toAminoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataAminoMsg;
    fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata;
    toProto(message: MsgSetDenomMetadata): Uint8Array;
    toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg;
};
export declare const MsgSetDenomMetadataResponse: {
    typeUrl: string;
    encode(_: MsgSetDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetDenomMetadataResponse;
    fromPartial(_: Partial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse;
    fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse;
    toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino;
    fromAminoMsg(object: MsgSetDenomMetadataResponseAminoMsg): MsgSetDenomMetadataResponse;
    toAminoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAminoMsg;
    fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg): MsgSetDenomMetadataResponse;
    toProto(message: MsgSetDenomMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg;
};
export declare const MsgForceTransfer: {
    typeUrl: string;
    encode(message: MsgForceTransfer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgForceTransfer;
    fromPartial(object: Partial<MsgForceTransfer>): MsgForceTransfer;
    fromAmino(object: MsgForceTransferAmino): MsgForceTransfer;
    toAmino(message: MsgForceTransfer): MsgForceTransferAmino;
    fromAminoMsg(object: MsgForceTransferAminoMsg): MsgForceTransfer;
    toAminoMsg(message: MsgForceTransfer): MsgForceTransferAminoMsg;
    fromProtoMsg(message: MsgForceTransferProtoMsg): MsgForceTransfer;
    toProto(message: MsgForceTransfer): Uint8Array;
    toProtoMsg(message: MsgForceTransfer): MsgForceTransferProtoMsg;
};
export declare const MsgForceTransferResponse: {
    typeUrl: string;
    encode(_: MsgForceTransferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgForceTransferResponse;
    fromPartial(_: Partial<MsgForceTransferResponse>): MsgForceTransferResponse;
    fromAmino(_: MsgForceTransferResponseAmino): MsgForceTransferResponse;
    toAmino(_: MsgForceTransferResponse): MsgForceTransferResponseAmino;
    fromAminoMsg(object: MsgForceTransferResponseAminoMsg): MsgForceTransferResponse;
    toAminoMsg(message: MsgForceTransferResponse): MsgForceTransferResponseAminoMsg;
    fromProtoMsg(message: MsgForceTransferResponseProtoMsg): MsgForceTransferResponse;
    toProto(message: MsgForceTransferResponse): Uint8Array;
    toProtoMsg(message: MsgForceTransferResponse): MsgForceTransferResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
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
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
