import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom. It requires a sender address and a subdenomination.
 * The (sender_address, sub_denomination) pair must be unique and cannot be
 * re-used. The resulting denom created is `factory/{creator
 * address}/{subdenom}`. The resultant denom's admin is originally set to be the
 * creator, but this can be changed later. The token denom does not indicate the
 * current admin.
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
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom. It requires a sender address and a subdenomination.
 * The (sender_address, sub_denomination) pair must be unique and cannot be
 * re-used. The resulting denom created is `factory/{creator
 * address}/{subdenom}`. The resultant denom's admin is originally set to be the
 * creator, but this can be changed later. The token denom does not indicate the
 * current admin.
 */
export interface MsgCreateDenomAmino {
    sender: string;
    /** subdenom can be up to 44 "alphanumeric" characters long. */
    subdenom: string;
}
export interface MsgCreateDenomAminoMsg {
    type: "osmosis/tokenfactory/create-denom";
    value: MsgCreateDenomAmino;
}
/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom. It requires a sender address and a subdenomination.
 * The (sender_address, sub_denomination) pair must be unique and cannot be
 * re-used. The resulting denom created is `factory/{creator
 * address}/{subdenom}`. The resultant denom's admin is originally set to be the
 * creator, but this can be changed later. The token denom does not indicate the
 * current admin.
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
    new_token_denom: string;
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
    sender: string;
    amount?: CoinAmino;
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
    sender: string;
    amount?: CoinAmino;
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
    sender: string;
    denom: string;
    newAdmin: string;
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
    newAdmin: string;
}
export interface MsgChangeAdminResponse {
}
export interface MsgChangeAdminResponseProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse";
    value: Uint8Array;
}
export interface MsgChangeAdminResponseAmino {
}
export interface MsgChangeAdminResponseAminoMsg {
    type: "osmosis/tokenfactory/change-admin-response";
    value: MsgChangeAdminResponseAmino;
}
export interface MsgChangeAdminResponseSDKType {
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
