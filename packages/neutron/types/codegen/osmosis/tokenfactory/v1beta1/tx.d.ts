import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
    amount?: Coin;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintSDKType {
    sender: string;
    amount?: CoinSDKType;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseSDKType {
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
    sender: string;
    amount?: Coin;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnSDKType {
    sender: string;
    amount?: CoinSDKType;
}
export interface MsgBurnResponse {
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
export interface MsgChangeAdminResponseSDKType {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDenom;
    fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(message: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDenomResponse;
    fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMint;
    fromPartial(object: Partial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgMintResponse;
    fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBurn;
    fromPartial(object: Partial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBurnResponse;
    fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgChangeAdmin: {
    encode(message: MsgChangeAdmin, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgChangeAdmin;
    fromPartial(object: Partial<MsgChangeAdmin>): MsgChangeAdmin;
};
export declare const MsgChangeAdminResponse: {
    encode(_: MsgChangeAdminResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgChangeAdminResponse;
    fromPartial(_: Partial<MsgChangeAdminResponse>): MsgChangeAdminResponse;
};