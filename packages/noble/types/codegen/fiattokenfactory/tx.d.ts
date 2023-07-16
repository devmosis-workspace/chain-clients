import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface MsgUpdateMasterMinter {
    from: string;
    address: string;
}
export interface MsgUpdateMasterMinterSDKType {
    from: string;
    address: string;
}
export interface MsgUpdateMasterMinterResponse {
}
export interface MsgUpdateMasterMinterResponseSDKType {
}
export interface MsgUpdatePauser {
    from: string;
    address: string;
}
export interface MsgUpdatePauserSDKType {
    from: string;
    address: string;
}
export interface MsgUpdatePauserResponse {
}
export interface MsgUpdatePauserResponseSDKType {
}
export interface MsgUpdateBlacklister {
    from: string;
    address: string;
}
export interface MsgUpdateBlacklisterSDKType {
    from: string;
    address: string;
}
export interface MsgUpdateBlacklisterResponse {
}
export interface MsgUpdateBlacklisterResponseSDKType {
}
export interface MsgUpdateOwner {
    from: string;
    address: string;
}
export interface MsgUpdateOwnerSDKType {
    from: string;
    address: string;
}
export interface MsgUpdateOwnerResponse {
}
export interface MsgUpdateOwnerResponseSDKType {
}
export interface MsgAcceptOwner {
    from: string;
}
export interface MsgAcceptOwnerSDKType {
    from: string;
}
export interface MsgAcceptOwnerResponse {
}
export interface MsgAcceptOwnerResponseSDKType {
}
export interface MsgConfigureMinter {
    from: string;
    address: string;
    allowance?: Coin;
}
export interface MsgConfigureMinterSDKType {
    from: string;
    address: string;
    allowance?: CoinSDKType;
}
export interface MsgConfigureMinterResponse {
}
export interface MsgConfigureMinterResponseSDKType {
}
export interface MsgRemoveMinter {
    from: string;
    address: string;
}
export interface MsgRemoveMinterSDKType {
    from: string;
    address: string;
}
export interface MsgRemoveMinterResponse {
}
export interface MsgRemoveMinterResponseSDKType {
}
export interface MsgMint {
    from: string;
    address: string;
    amount?: Coin;
}
export interface MsgMintSDKType {
    from: string;
    address: string;
    amount?: CoinSDKType;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseSDKType {
}
export interface MsgBurn {
    from: string;
    amount?: Coin;
}
export interface MsgBurnSDKType {
    from: string;
    amount?: CoinSDKType;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseSDKType {
}
export interface MsgBlacklist {
    from: string;
    address: string;
}
export interface MsgBlacklistSDKType {
    from: string;
    address: string;
}
export interface MsgBlacklistResponse {
}
export interface MsgBlacklistResponseSDKType {
}
export interface MsgUnblacklist {
    from: string;
    address: string;
}
export interface MsgUnblacklistSDKType {
    from: string;
    address: string;
}
export interface MsgUnblacklistResponse {
}
export interface MsgUnblacklistResponseSDKType {
}
export interface MsgPause {
    from: string;
}
export interface MsgPauseSDKType {
    from: string;
}
export interface MsgPauseResponse {
}
export interface MsgPauseResponseSDKType {
}
export interface MsgUnpause {
    from: string;
}
export interface MsgUnpauseSDKType {
    from: string;
}
export interface MsgUnpauseResponse {
}
export interface MsgUnpauseResponseSDKType {
}
export interface MsgConfigureMinterController {
    from: string;
    controller: string;
    minter: string;
}
export interface MsgConfigureMinterControllerSDKType {
    from: string;
    controller: string;
    minter: string;
}
export interface MsgConfigureMinterControllerResponse {
}
export interface MsgConfigureMinterControllerResponseSDKType {
}
export interface MsgRemoveMinterController {
    from: string;
    controller: string;
}
export interface MsgRemoveMinterControllerSDKType {
    from: string;
    controller: string;
}
export interface MsgRemoveMinterControllerResponse {
}
export interface MsgRemoveMinterControllerResponseSDKType {
}
export declare const MsgUpdateMasterMinter: {
    encode(message: MsgUpdateMasterMinter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateMasterMinter;
    fromPartial(object: Partial<MsgUpdateMasterMinter>): MsgUpdateMasterMinter;
};
export declare const MsgUpdateMasterMinterResponse: {
    encode(_: MsgUpdateMasterMinterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateMasterMinterResponse;
    fromPartial(_: Partial<MsgUpdateMasterMinterResponse>): MsgUpdateMasterMinterResponse;
};
export declare const MsgUpdatePauser: {
    encode(message: MsgUpdatePauser, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdatePauser;
    fromPartial(object: Partial<MsgUpdatePauser>): MsgUpdatePauser;
};
export declare const MsgUpdatePauserResponse: {
    encode(_: MsgUpdatePauserResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdatePauserResponse;
    fromPartial(_: Partial<MsgUpdatePauserResponse>): MsgUpdatePauserResponse;
};
export declare const MsgUpdateBlacklister: {
    encode(message: MsgUpdateBlacklister, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateBlacklister;
    fromPartial(object: Partial<MsgUpdateBlacklister>): MsgUpdateBlacklister;
};
export declare const MsgUpdateBlacklisterResponse: {
    encode(_: MsgUpdateBlacklisterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateBlacklisterResponse;
    fromPartial(_: Partial<MsgUpdateBlacklisterResponse>): MsgUpdateBlacklisterResponse;
};
export declare const MsgUpdateOwner: {
    encode(message: MsgUpdateOwner, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateOwner;
    fromPartial(object: Partial<MsgUpdateOwner>): MsgUpdateOwner;
};
export declare const MsgUpdateOwnerResponse: {
    encode(_: MsgUpdateOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateOwnerResponse;
    fromPartial(_: Partial<MsgUpdateOwnerResponse>): MsgUpdateOwnerResponse;
};
export declare const MsgAcceptOwner: {
    encode(message: MsgAcceptOwner, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAcceptOwner;
    fromPartial(object: Partial<MsgAcceptOwner>): MsgAcceptOwner;
};
export declare const MsgAcceptOwnerResponse: {
    encode(_: MsgAcceptOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAcceptOwnerResponse;
    fromPartial(_: Partial<MsgAcceptOwnerResponse>): MsgAcceptOwnerResponse;
};
export declare const MsgConfigureMinter: {
    encode(message: MsgConfigureMinter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConfigureMinter;
    fromPartial(object: Partial<MsgConfigureMinter>): MsgConfigureMinter;
};
export declare const MsgConfigureMinterResponse: {
    encode(_: MsgConfigureMinterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConfigureMinterResponse;
    fromPartial(_: Partial<MsgConfigureMinterResponse>): MsgConfigureMinterResponse;
};
export declare const MsgRemoveMinter: {
    encode(message: MsgRemoveMinter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRemoveMinter;
    fromPartial(object: Partial<MsgRemoveMinter>): MsgRemoveMinter;
};
export declare const MsgRemoveMinterResponse: {
    encode(_: MsgRemoveMinterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRemoveMinterResponse;
    fromPartial(_: Partial<MsgRemoveMinterResponse>): MsgRemoveMinterResponse;
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
export declare const MsgBlacklist: {
    encode(message: MsgBlacklist, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBlacklist;
    fromPartial(object: Partial<MsgBlacklist>): MsgBlacklist;
};
export declare const MsgBlacklistResponse: {
    encode(_: MsgBlacklistResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBlacklistResponse;
    fromPartial(_: Partial<MsgBlacklistResponse>): MsgBlacklistResponse;
};
export declare const MsgUnblacklist: {
    encode(message: MsgUnblacklist, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnblacklist;
    fromPartial(object: Partial<MsgUnblacklist>): MsgUnblacklist;
};
export declare const MsgUnblacklistResponse: {
    encode(_: MsgUnblacklistResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUnblacklistResponse;
    fromPartial(_: Partial<MsgUnblacklistResponse>): MsgUnblacklistResponse;
};
export declare const MsgPause: {
    encode(message: MsgPause, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgPause;
    fromPartial(object: Partial<MsgPause>): MsgPause;
};
export declare const MsgPauseResponse: {
    encode(_: MsgPauseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgPauseResponse;
    fromPartial(_: Partial<MsgPauseResponse>): MsgPauseResponse;
};
export declare const MsgUnpause: {
    encode(message: MsgUnpause, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnpause;
    fromPartial(object: Partial<MsgUnpause>): MsgUnpause;
};
export declare const MsgUnpauseResponse: {
    encode(_: MsgUnpauseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUnpauseResponse;
    fromPartial(_: Partial<MsgUnpauseResponse>): MsgUnpauseResponse;
};
export declare const MsgConfigureMinterController: {
    encode(message: MsgConfigureMinterController, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgConfigureMinterController;
    fromPartial(object: Partial<MsgConfigureMinterController>): MsgConfigureMinterController;
};
export declare const MsgConfigureMinterControllerResponse: {
    encode(_: MsgConfigureMinterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgConfigureMinterControllerResponse;
    fromPartial(_: Partial<MsgConfigureMinterControllerResponse>): MsgConfigureMinterControllerResponse;
};
export declare const MsgRemoveMinterController: {
    encode(message: MsgRemoveMinterController, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRemoveMinterController;
    fromPartial(object: Partial<MsgRemoveMinterController>): MsgRemoveMinterController;
};
export declare const MsgRemoveMinterControllerResponse: {
    encode(_: MsgRemoveMinterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRemoveMinterControllerResponse;
    fromPartial(_: Partial<MsgRemoveMinterControllerResponse>): MsgRemoveMinterControllerResponse;
};
