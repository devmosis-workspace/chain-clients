import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
export interface MsgUpdateMasterMinter {
    from: string;
    address: string;
}
export interface MsgUpdateMasterMinterProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinter";
    value: Uint8Array;
}
export interface MsgUpdateMasterMinterAmino {
    from?: string;
    address?: string;
}
export interface MsgUpdateMasterMinterAminoMsg {
    type: "/noble.tokenfactory.MsgUpdateMasterMinter";
    value: MsgUpdateMasterMinterAmino;
}
export interface MsgUpdateMasterMinterSDKType {
    from: string;
    address: string;
}
export interface MsgUpdateMasterMinterResponse {
}
export interface MsgUpdateMasterMinterResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinterResponse";
    value: Uint8Array;
}
export interface MsgUpdateMasterMinterResponseAmino {
}
export interface MsgUpdateMasterMinterResponseAminoMsg {
    type: "/noble.tokenfactory.MsgUpdateMasterMinterResponse";
    value: MsgUpdateMasterMinterResponseAmino;
}
export interface MsgUpdateMasterMinterResponseSDKType {
}
export interface MsgUpdatePauser {
    from: string;
    address: string;
}
export interface MsgUpdatePauserProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUpdatePauser";
    value: Uint8Array;
}
export interface MsgUpdatePauserAmino {
    from?: string;
    address?: string;
}
export interface MsgUpdatePauserAminoMsg {
    type: "/noble.tokenfactory.MsgUpdatePauser";
    value: MsgUpdatePauserAmino;
}
export interface MsgUpdatePauserSDKType {
    from: string;
    address: string;
}
export interface MsgUpdatePauserResponse {
}
export interface MsgUpdatePauserResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUpdatePauserResponse";
    value: Uint8Array;
}
export interface MsgUpdatePauserResponseAmino {
}
export interface MsgUpdatePauserResponseAminoMsg {
    type: "/noble.tokenfactory.MsgUpdatePauserResponse";
    value: MsgUpdatePauserResponseAmino;
}
export interface MsgUpdatePauserResponseSDKType {
}
export interface MsgUpdateBlacklister {
    from: string;
    address: string;
}
export interface MsgUpdateBlacklisterProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUpdateBlacklister";
    value: Uint8Array;
}
export interface MsgUpdateBlacklisterAmino {
    from?: string;
    address?: string;
}
export interface MsgUpdateBlacklisterAminoMsg {
    type: "/noble.tokenfactory.MsgUpdateBlacklister";
    value: MsgUpdateBlacklisterAmino;
}
export interface MsgUpdateBlacklisterSDKType {
    from: string;
    address: string;
}
export interface MsgUpdateBlacklisterResponse {
}
export interface MsgUpdateBlacklisterResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUpdateBlacklisterResponse";
    value: Uint8Array;
}
export interface MsgUpdateBlacklisterResponseAmino {
}
export interface MsgUpdateBlacklisterResponseAminoMsg {
    type: "/noble.tokenfactory.MsgUpdateBlacklisterResponse";
    value: MsgUpdateBlacklisterResponseAmino;
}
export interface MsgUpdateBlacklisterResponseSDKType {
}
export interface MsgUpdateOwner {
    from: string;
    address: string;
}
export interface MsgUpdateOwnerProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUpdateOwner";
    value: Uint8Array;
}
export interface MsgUpdateOwnerAmino {
    from?: string;
    address?: string;
}
export interface MsgUpdateOwnerAminoMsg {
    type: "/noble.tokenfactory.MsgUpdateOwner";
    value: MsgUpdateOwnerAmino;
}
export interface MsgUpdateOwnerSDKType {
    from: string;
    address: string;
}
export interface MsgUpdateOwnerResponse {
}
export interface MsgUpdateOwnerResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUpdateOwnerResponse";
    value: Uint8Array;
}
export interface MsgUpdateOwnerResponseAmino {
}
export interface MsgUpdateOwnerResponseAminoMsg {
    type: "/noble.tokenfactory.MsgUpdateOwnerResponse";
    value: MsgUpdateOwnerResponseAmino;
}
export interface MsgUpdateOwnerResponseSDKType {
}
export interface MsgAcceptOwner {
    from: string;
}
export interface MsgAcceptOwnerProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgAcceptOwner";
    value: Uint8Array;
}
export interface MsgAcceptOwnerAmino {
    from?: string;
}
export interface MsgAcceptOwnerAminoMsg {
    type: "/noble.tokenfactory.MsgAcceptOwner";
    value: MsgAcceptOwnerAmino;
}
export interface MsgAcceptOwnerSDKType {
    from: string;
}
export interface MsgAcceptOwnerResponse {
}
export interface MsgAcceptOwnerResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgAcceptOwnerResponse";
    value: Uint8Array;
}
export interface MsgAcceptOwnerResponseAmino {
}
export interface MsgAcceptOwnerResponseAminoMsg {
    type: "/noble.tokenfactory.MsgAcceptOwnerResponse";
    value: MsgAcceptOwnerResponseAmino;
}
export interface MsgAcceptOwnerResponseSDKType {
}
export interface MsgConfigureMinter {
    from: string;
    address: string;
    allowance: Coin;
}
export interface MsgConfigureMinterProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgConfigureMinter";
    value: Uint8Array;
}
export interface MsgConfigureMinterAmino {
    from?: string;
    address?: string;
    allowance?: CoinAmino;
}
export interface MsgConfigureMinterAminoMsg {
    type: "/noble.tokenfactory.MsgConfigureMinter";
    value: MsgConfigureMinterAmino;
}
export interface MsgConfigureMinterSDKType {
    from: string;
    address: string;
    allowance: CoinSDKType;
}
export interface MsgConfigureMinterResponse {
}
export interface MsgConfigureMinterResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgConfigureMinterResponse";
    value: Uint8Array;
}
export interface MsgConfigureMinterResponseAmino {
}
export interface MsgConfigureMinterResponseAminoMsg {
    type: "/noble.tokenfactory.MsgConfigureMinterResponse";
    value: MsgConfigureMinterResponseAmino;
}
export interface MsgConfigureMinterResponseSDKType {
}
export interface MsgRemoveMinter {
    from: string;
    address: string;
}
export interface MsgRemoveMinterProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgRemoveMinter";
    value: Uint8Array;
}
export interface MsgRemoveMinterAmino {
    from?: string;
    address?: string;
}
export interface MsgRemoveMinterAminoMsg {
    type: "/noble.tokenfactory.MsgRemoveMinter";
    value: MsgRemoveMinterAmino;
}
export interface MsgRemoveMinterSDKType {
    from: string;
    address: string;
}
export interface MsgRemoveMinterResponse {
}
export interface MsgRemoveMinterResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgRemoveMinterResponse";
    value: Uint8Array;
}
export interface MsgRemoveMinterResponseAmino {
}
export interface MsgRemoveMinterResponseAminoMsg {
    type: "/noble.tokenfactory.MsgRemoveMinterResponse";
    value: MsgRemoveMinterResponseAmino;
}
export interface MsgRemoveMinterResponseSDKType {
}
export interface MsgMint {
    from: string;
    address: string;
    amount: Coin;
}
export interface MsgMintProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgMint";
    value: Uint8Array;
}
export interface MsgMintAmino {
    from?: string;
    address?: string;
    amount?: CoinAmino;
}
export interface MsgMintAminoMsg {
    type: "/noble.tokenfactory.MsgMint";
    value: MsgMintAmino;
}
export interface MsgMintSDKType {
    from: string;
    address: string;
    amount: CoinSDKType;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgMintResponse";
    value: Uint8Array;
}
export interface MsgMintResponseAmino {
}
export interface MsgMintResponseAminoMsg {
    type: "/noble.tokenfactory.MsgMintResponse";
    value: MsgMintResponseAmino;
}
export interface MsgMintResponseSDKType {
}
export interface MsgBurn {
    from: string;
    amount: Coin;
}
export interface MsgBurnProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgBurn";
    value: Uint8Array;
}
export interface MsgBurnAmino {
    from?: string;
    amount?: CoinAmino;
}
export interface MsgBurnAminoMsg {
    type: "/noble.tokenfactory.MsgBurn";
    value: MsgBurnAmino;
}
export interface MsgBurnSDKType {
    from: string;
    amount: CoinSDKType;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgBurnResponse";
    value: Uint8Array;
}
export interface MsgBurnResponseAmino {
}
export interface MsgBurnResponseAminoMsg {
    type: "/noble.tokenfactory.MsgBurnResponse";
    value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
}
export interface MsgBlacklist {
    from: string;
    address: string;
}
export interface MsgBlacklistProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgBlacklist";
    value: Uint8Array;
}
export interface MsgBlacklistAmino {
    from?: string;
    address?: string;
}
export interface MsgBlacklistAminoMsg {
    type: "/noble.tokenfactory.MsgBlacklist";
    value: MsgBlacklistAmino;
}
export interface MsgBlacklistSDKType {
    from: string;
    address: string;
}
export interface MsgBlacklistResponse {
}
export interface MsgBlacklistResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgBlacklistResponse";
    value: Uint8Array;
}
export interface MsgBlacklistResponseAmino {
}
export interface MsgBlacklistResponseAminoMsg {
    type: "/noble.tokenfactory.MsgBlacklistResponse";
    value: MsgBlacklistResponseAmino;
}
export interface MsgBlacklistResponseSDKType {
}
export interface MsgUnblacklist {
    from: string;
    address: string;
}
export interface MsgUnblacklistProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUnblacklist";
    value: Uint8Array;
}
export interface MsgUnblacklistAmino {
    from?: string;
    address?: string;
}
export interface MsgUnblacklistAminoMsg {
    type: "/noble.tokenfactory.MsgUnblacklist";
    value: MsgUnblacklistAmino;
}
export interface MsgUnblacklistSDKType {
    from: string;
    address: string;
}
export interface MsgUnblacklistResponse {
}
export interface MsgUnblacklistResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUnblacklistResponse";
    value: Uint8Array;
}
export interface MsgUnblacklistResponseAmino {
}
export interface MsgUnblacklistResponseAminoMsg {
    type: "/noble.tokenfactory.MsgUnblacklistResponse";
    value: MsgUnblacklistResponseAmino;
}
export interface MsgUnblacklistResponseSDKType {
}
export interface MsgPause {
    from: string;
}
export interface MsgPauseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgPause";
    value: Uint8Array;
}
export interface MsgPauseAmino {
    from?: string;
}
export interface MsgPauseAminoMsg {
    type: "/noble.tokenfactory.MsgPause";
    value: MsgPauseAmino;
}
export interface MsgPauseSDKType {
    from: string;
}
export interface MsgPauseResponse {
}
export interface MsgPauseResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgPauseResponse";
    value: Uint8Array;
}
export interface MsgPauseResponseAmino {
}
export interface MsgPauseResponseAminoMsg {
    type: "/noble.tokenfactory.MsgPauseResponse";
    value: MsgPauseResponseAmino;
}
export interface MsgPauseResponseSDKType {
}
export interface MsgUnpause {
    from: string;
}
export interface MsgUnpauseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUnpause";
    value: Uint8Array;
}
export interface MsgUnpauseAmino {
    from?: string;
}
export interface MsgUnpauseAminoMsg {
    type: "/noble.tokenfactory.MsgUnpause";
    value: MsgUnpauseAmino;
}
export interface MsgUnpauseSDKType {
    from: string;
}
export interface MsgUnpauseResponse {
}
export interface MsgUnpauseResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgUnpauseResponse";
    value: Uint8Array;
}
export interface MsgUnpauseResponseAmino {
}
export interface MsgUnpauseResponseAminoMsg {
    type: "/noble.tokenfactory.MsgUnpauseResponse";
    value: MsgUnpauseResponseAmino;
}
export interface MsgUnpauseResponseSDKType {
}
export interface MsgConfigureMinterController {
    from: string;
    controller: string;
    minter: string;
}
export interface MsgConfigureMinterControllerProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgConfigureMinterController";
    value: Uint8Array;
}
export interface MsgConfigureMinterControllerAmino {
    from?: string;
    controller?: string;
    minter?: string;
}
export interface MsgConfigureMinterControllerAminoMsg {
    type: "/noble.tokenfactory.MsgConfigureMinterController";
    value: MsgConfigureMinterControllerAmino;
}
export interface MsgConfigureMinterControllerSDKType {
    from: string;
    controller: string;
    minter: string;
}
export interface MsgConfigureMinterControllerResponse {
}
export interface MsgConfigureMinterControllerResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgConfigureMinterControllerResponse";
    value: Uint8Array;
}
export interface MsgConfigureMinterControllerResponseAmino {
}
export interface MsgConfigureMinterControllerResponseAminoMsg {
    type: "/noble.tokenfactory.MsgConfigureMinterControllerResponse";
    value: MsgConfigureMinterControllerResponseAmino;
}
export interface MsgConfigureMinterControllerResponseSDKType {
}
export interface MsgRemoveMinterController {
    from: string;
    controller: string;
}
export interface MsgRemoveMinterControllerProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgRemoveMinterController";
    value: Uint8Array;
}
export interface MsgRemoveMinterControllerAmino {
    from?: string;
    controller?: string;
}
export interface MsgRemoveMinterControllerAminoMsg {
    type: "/noble.tokenfactory.MsgRemoveMinterController";
    value: MsgRemoveMinterControllerAmino;
}
export interface MsgRemoveMinterControllerSDKType {
    from: string;
    controller: string;
}
export interface MsgRemoveMinterControllerResponse {
}
export interface MsgRemoveMinterControllerResponseProtoMsg {
    typeUrl: "/noble.tokenfactory.MsgRemoveMinterControllerResponse";
    value: Uint8Array;
}
export interface MsgRemoveMinterControllerResponseAmino {
}
export interface MsgRemoveMinterControllerResponseAminoMsg {
    type: "/noble.tokenfactory.MsgRemoveMinterControllerResponse";
    value: MsgRemoveMinterControllerResponseAmino;
}
export interface MsgRemoveMinterControllerResponseSDKType {
}
export declare const MsgUpdateMasterMinter: {
    typeUrl: string;
    encode(message: MsgUpdateMasterMinter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateMasterMinter;
    fromPartial(object: Partial<MsgUpdateMasterMinter>): MsgUpdateMasterMinter;
    fromAmino(object: MsgUpdateMasterMinterAmino): MsgUpdateMasterMinter;
    toAmino(message: MsgUpdateMasterMinter): MsgUpdateMasterMinterAmino;
    fromAminoMsg(object: MsgUpdateMasterMinterAminoMsg): MsgUpdateMasterMinter;
    fromProtoMsg(message: MsgUpdateMasterMinterProtoMsg): MsgUpdateMasterMinter;
    toProto(message: MsgUpdateMasterMinter): Uint8Array;
    toProtoMsg(message: MsgUpdateMasterMinter): MsgUpdateMasterMinterProtoMsg;
};
export declare const MsgUpdateMasterMinterResponse: {
    typeUrl: string;
    encode(_: MsgUpdateMasterMinterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateMasterMinterResponse;
    fromPartial(_: Partial<MsgUpdateMasterMinterResponse>): MsgUpdateMasterMinterResponse;
    fromAmino(_: MsgUpdateMasterMinterResponseAmino): MsgUpdateMasterMinterResponse;
    toAmino(_: MsgUpdateMasterMinterResponse): MsgUpdateMasterMinterResponseAmino;
    fromAminoMsg(object: MsgUpdateMasterMinterResponseAminoMsg): MsgUpdateMasterMinterResponse;
    fromProtoMsg(message: MsgUpdateMasterMinterResponseProtoMsg): MsgUpdateMasterMinterResponse;
    toProto(message: MsgUpdateMasterMinterResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateMasterMinterResponse): MsgUpdateMasterMinterResponseProtoMsg;
};
export declare const MsgUpdatePauser: {
    typeUrl: string;
    encode(message: MsgUpdatePauser, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdatePauser;
    fromPartial(object: Partial<MsgUpdatePauser>): MsgUpdatePauser;
    fromAmino(object: MsgUpdatePauserAmino): MsgUpdatePauser;
    toAmino(message: MsgUpdatePauser): MsgUpdatePauserAmino;
    fromAminoMsg(object: MsgUpdatePauserAminoMsg): MsgUpdatePauser;
    fromProtoMsg(message: MsgUpdatePauserProtoMsg): MsgUpdatePauser;
    toProto(message: MsgUpdatePauser): Uint8Array;
    toProtoMsg(message: MsgUpdatePauser): MsgUpdatePauserProtoMsg;
};
export declare const MsgUpdatePauserResponse: {
    typeUrl: string;
    encode(_: MsgUpdatePauserResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdatePauserResponse;
    fromPartial(_: Partial<MsgUpdatePauserResponse>): MsgUpdatePauserResponse;
    fromAmino(_: MsgUpdatePauserResponseAmino): MsgUpdatePauserResponse;
    toAmino(_: MsgUpdatePauserResponse): MsgUpdatePauserResponseAmino;
    fromAminoMsg(object: MsgUpdatePauserResponseAminoMsg): MsgUpdatePauserResponse;
    fromProtoMsg(message: MsgUpdatePauserResponseProtoMsg): MsgUpdatePauserResponse;
    toProto(message: MsgUpdatePauserResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePauserResponse): MsgUpdatePauserResponseProtoMsg;
};
export declare const MsgUpdateBlacklister: {
    typeUrl: string;
    encode(message: MsgUpdateBlacklister, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateBlacklister;
    fromPartial(object: Partial<MsgUpdateBlacklister>): MsgUpdateBlacklister;
    fromAmino(object: MsgUpdateBlacklisterAmino): MsgUpdateBlacklister;
    toAmino(message: MsgUpdateBlacklister): MsgUpdateBlacklisterAmino;
    fromAminoMsg(object: MsgUpdateBlacklisterAminoMsg): MsgUpdateBlacklister;
    fromProtoMsg(message: MsgUpdateBlacklisterProtoMsg): MsgUpdateBlacklister;
    toProto(message: MsgUpdateBlacklister): Uint8Array;
    toProtoMsg(message: MsgUpdateBlacklister): MsgUpdateBlacklisterProtoMsg;
};
export declare const MsgUpdateBlacklisterResponse: {
    typeUrl: string;
    encode(_: MsgUpdateBlacklisterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateBlacklisterResponse;
    fromPartial(_: Partial<MsgUpdateBlacklisterResponse>): MsgUpdateBlacklisterResponse;
    fromAmino(_: MsgUpdateBlacklisterResponseAmino): MsgUpdateBlacklisterResponse;
    toAmino(_: MsgUpdateBlacklisterResponse): MsgUpdateBlacklisterResponseAmino;
    fromAminoMsg(object: MsgUpdateBlacklisterResponseAminoMsg): MsgUpdateBlacklisterResponse;
    fromProtoMsg(message: MsgUpdateBlacklisterResponseProtoMsg): MsgUpdateBlacklisterResponse;
    toProto(message: MsgUpdateBlacklisterResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateBlacklisterResponse): MsgUpdateBlacklisterResponseProtoMsg;
};
export declare const MsgUpdateOwner: {
    typeUrl: string;
    encode(message: MsgUpdateOwner, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateOwner;
    fromPartial(object: Partial<MsgUpdateOwner>): MsgUpdateOwner;
    fromAmino(object: MsgUpdateOwnerAmino): MsgUpdateOwner;
    toAmino(message: MsgUpdateOwner): MsgUpdateOwnerAmino;
    fromAminoMsg(object: MsgUpdateOwnerAminoMsg): MsgUpdateOwner;
    fromProtoMsg(message: MsgUpdateOwnerProtoMsg): MsgUpdateOwner;
    toProto(message: MsgUpdateOwner): Uint8Array;
    toProtoMsg(message: MsgUpdateOwner): MsgUpdateOwnerProtoMsg;
};
export declare const MsgUpdateOwnerResponse: {
    typeUrl: string;
    encode(_: MsgUpdateOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateOwnerResponse;
    fromPartial(_: Partial<MsgUpdateOwnerResponse>): MsgUpdateOwnerResponse;
    fromAmino(_: MsgUpdateOwnerResponseAmino): MsgUpdateOwnerResponse;
    toAmino(_: MsgUpdateOwnerResponse): MsgUpdateOwnerResponseAmino;
    fromAminoMsg(object: MsgUpdateOwnerResponseAminoMsg): MsgUpdateOwnerResponse;
    fromProtoMsg(message: MsgUpdateOwnerResponseProtoMsg): MsgUpdateOwnerResponse;
    toProto(message: MsgUpdateOwnerResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateOwnerResponse): MsgUpdateOwnerResponseProtoMsg;
};
export declare const MsgAcceptOwner: {
    typeUrl: string;
    encode(message: MsgAcceptOwner, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAcceptOwner;
    fromPartial(object: Partial<MsgAcceptOwner>): MsgAcceptOwner;
    fromAmino(object: MsgAcceptOwnerAmino): MsgAcceptOwner;
    toAmino(message: MsgAcceptOwner): MsgAcceptOwnerAmino;
    fromAminoMsg(object: MsgAcceptOwnerAminoMsg): MsgAcceptOwner;
    fromProtoMsg(message: MsgAcceptOwnerProtoMsg): MsgAcceptOwner;
    toProto(message: MsgAcceptOwner): Uint8Array;
    toProtoMsg(message: MsgAcceptOwner): MsgAcceptOwnerProtoMsg;
};
export declare const MsgAcceptOwnerResponse: {
    typeUrl: string;
    encode(_: MsgAcceptOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAcceptOwnerResponse;
    fromPartial(_: Partial<MsgAcceptOwnerResponse>): MsgAcceptOwnerResponse;
    fromAmino(_: MsgAcceptOwnerResponseAmino): MsgAcceptOwnerResponse;
    toAmino(_: MsgAcceptOwnerResponse): MsgAcceptOwnerResponseAmino;
    fromAminoMsg(object: MsgAcceptOwnerResponseAminoMsg): MsgAcceptOwnerResponse;
    fromProtoMsg(message: MsgAcceptOwnerResponseProtoMsg): MsgAcceptOwnerResponse;
    toProto(message: MsgAcceptOwnerResponse): Uint8Array;
    toProtoMsg(message: MsgAcceptOwnerResponse): MsgAcceptOwnerResponseProtoMsg;
};
export declare const MsgConfigureMinter: {
    typeUrl: string;
    encode(message: MsgConfigureMinter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConfigureMinter;
    fromPartial(object: Partial<MsgConfigureMinter>): MsgConfigureMinter;
    fromAmino(object: MsgConfigureMinterAmino): MsgConfigureMinter;
    toAmino(message: MsgConfigureMinter): MsgConfigureMinterAmino;
    fromAminoMsg(object: MsgConfigureMinterAminoMsg): MsgConfigureMinter;
    fromProtoMsg(message: MsgConfigureMinterProtoMsg): MsgConfigureMinter;
    toProto(message: MsgConfigureMinter): Uint8Array;
    toProtoMsg(message: MsgConfigureMinter): MsgConfigureMinterProtoMsg;
};
export declare const MsgConfigureMinterResponse: {
    typeUrl: string;
    encode(_: MsgConfigureMinterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConfigureMinterResponse;
    fromPartial(_: Partial<MsgConfigureMinterResponse>): MsgConfigureMinterResponse;
    fromAmino(_: MsgConfigureMinterResponseAmino): MsgConfigureMinterResponse;
    toAmino(_: MsgConfigureMinterResponse): MsgConfigureMinterResponseAmino;
    fromAminoMsg(object: MsgConfigureMinterResponseAminoMsg): MsgConfigureMinterResponse;
    fromProtoMsg(message: MsgConfigureMinterResponseProtoMsg): MsgConfigureMinterResponse;
    toProto(message: MsgConfigureMinterResponse): Uint8Array;
    toProtoMsg(message: MsgConfigureMinterResponse): MsgConfigureMinterResponseProtoMsg;
};
export declare const MsgRemoveMinter: {
    typeUrl: string;
    encode(message: MsgRemoveMinter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveMinter;
    fromPartial(object: Partial<MsgRemoveMinter>): MsgRemoveMinter;
    fromAmino(object: MsgRemoveMinterAmino): MsgRemoveMinter;
    toAmino(message: MsgRemoveMinter): MsgRemoveMinterAmino;
    fromAminoMsg(object: MsgRemoveMinterAminoMsg): MsgRemoveMinter;
    fromProtoMsg(message: MsgRemoveMinterProtoMsg): MsgRemoveMinter;
    toProto(message: MsgRemoveMinter): Uint8Array;
    toProtoMsg(message: MsgRemoveMinter): MsgRemoveMinterProtoMsg;
};
export declare const MsgRemoveMinterResponse: {
    typeUrl: string;
    encode(_: MsgRemoveMinterResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveMinterResponse;
    fromPartial(_: Partial<MsgRemoveMinterResponse>): MsgRemoveMinterResponse;
    fromAmino(_: MsgRemoveMinterResponseAmino): MsgRemoveMinterResponse;
    toAmino(_: MsgRemoveMinterResponse): MsgRemoveMinterResponseAmino;
    fromAminoMsg(object: MsgRemoveMinterResponseAminoMsg): MsgRemoveMinterResponse;
    fromProtoMsg(message: MsgRemoveMinterResponseProtoMsg): MsgRemoveMinterResponse;
    toProto(message: MsgRemoveMinterResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveMinterResponse): MsgRemoveMinterResponseProtoMsg;
};
export declare const MsgMint: {
    typeUrl: string;
    encode(message: MsgMint, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMint;
    fromPartial(object: Partial<MsgMint>): MsgMint;
    fromAmino(object: MsgMintAmino): MsgMint;
    toAmino(message: MsgMint): MsgMintAmino;
    fromAminoMsg(object: MsgMintAminoMsg): MsgMint;
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
    fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse;
    toProto(message: MsgBurnResponse): Uint8Array;
    toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg;
};
export declare const MsgBlacklist: {
    typeUrl: string;
    encode(message: MsgBlacklist, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBlacklist;
    fromPartial(object: Partial<MsgBlacklist>): MsgBlacklist;
    fromAmino(object: MsgBlacklistAmino): MsgBlacklist;
    toAmino(message: MsgBlacklist): MsgBlacklistAmino;
    fromAminoMsg(object: MsgBlacklistAminoMsg): MsgBlacklist;
    fromProtoMsg(message: MsgBlacklistProtoMsg): MsgBlacklist;
    toProto(message: MsgBlacklist): Uint8Array;
    toProtoMsg(message: MsgBlacklist): MsgBlacklistProtoMsg;
};
export declare const MsgBlacklistResponse: {
    typeUrl: string;
    encode(_: MsgBlacklistResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBlacklistResponse;
    fromPartial(_: Partial<MsgBlacklistResponse>): MsgBlacklistResponse;
    fromAmino(_: MsgBlacklistResponseAmino): MsgBlacklistResponse;
    toAmino(_: MsgBlacklistResponse): MsgBlacklistResponseAmino;
    fromAminoMsg(object: MsgBlacklistResponseAminoMsg): MsgBlacklistResponse;
    fromProtoMsg(message: MsgBlacklistResponseProtoMsg): MsgBlacklistResponse;
    toProto(message: MsgBlacklistResponse): Uint8Array;
    toProtoMsg(message: MsgBlacklistResponse): MsgBlacklistResponseProtoMsg;
};
export declare const MsgUnblacklist: {
    typeUrl: string;
    encode(message: MsgUnblacklist, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnblacklist;
    fromPartial(object: Partial<MsgUnblacklist>): MsgUnblacklist;
    fromAmino(object: MsgUnblacklistAmino): MsgUnblacklist;
    toAmino(message: MsgUnblacklist): MsgUnblacklistAmino;
    fromAminoMsg(object: MsgUnblacklistAminoMsg): MsgUnblacklist;
    fromProtoMsg(message: MsgUnblacklistProtoMsg): MsgUnblacklist;
    toProto(message: MsgUnblacklist): Uint8Array;
    toProtoMsg(message: MsgUnblacklist): MsgUnblacklistProtoMsg;
};
export declare const MsgUnblacklistResponse: {
    typeUrl: string;
    encode(_: MsgUnblacklistResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnblacklistResponse;
    fromPartial(_: Partial<MsgUnblacklistResponse>): MsgUnblacklistResponse;
    fromAmino(_: MsgUnblacklistResponseAmino): MsgUnblacklistResponse;
    toAmino(_: MsgUnblacklistResponse): MsgUnblacklistResponseAmino;
    fromAminoMsg(object: MsgUnblacklistResponseAminoMsg): MsgUnblacklistResponse;
    fromProtoMsg(message: MsgUnblacklistResponseProtoMsg): MsgUnblacklistResponse;
    toProto(message: MsgUnblacklistResponse): Uint8Array;
    toProtoMsg(message: MsgUnblacklistResponse): MsgUnblacklistResponseProtoMsg;
};
export declare const MsgPause: {
    typeUrl: string;
    encode(message: MsgPause, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPause;
    fromPartial(object: Partial<MsgPause>): MsgPause;
    fromAmino(object: MsgPauseAmino): MsgPause;
    toAmino(message: MsgPause): MsgPauseAmino;
    fromAminoMsg(object: MsgPauseAminoMsg): MsgPause;
    fromProtoMsg(message: MsgPauseProtoMsg): MsgPause;
    toProto(message: MsgPause): Uint8Array;
    toProtoMsg(message: MsgPause): MsgPauseProtoMsg;
};
export declare const MsgPauseResponse: {
    typeUrl: string;
    encode(_: MsgPauseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPauseResponse;
    fromPartial(_: Partial<MsgPauseResponse>): MsgPauseResponse;
    fromAmino(_: MsgPauseResponseAmino): MsgPauseResponse;
    toAmino(_: MsgPauseResponse): MsgPauseResponseAmino;
    fromAminoMsg(object: MsgPauseResponseAminoMsg): MsgPauseResponse;
    fromProtoMsg(message: MsgPauseResponseProtoMsg): MsgPauseResponse;
    toProto(message: MsgPauseResponse): Uint8Array;
    toProtoMsg(message: MsgPauseResponse): MsgPauseResponseProtoMsg;
};
export declare const MsgUnpause: {
    typeUrl: string;
    encode(message: MsgUnpause, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnpause;
    fromPartial(object: Partial<MsgUnpause>): MsgUnpause;
    fromAmino(object: MsgUnpauseAmino): MsgUnpause;
    toAmino(message: MsgUnpause): MsgUnpauseAmino;
    fromAminoMsg(object: MsgUnpauseAminoMsg): MsgUnpause;
    fromProtoMsg(message: MsgUnpauseProtoMsg): MsgUnpause;
    toProto(message: MsgUnpause): Uint8Array;
    toProtoMsg(message: MsgUnpause): MsgUnpauseProtoMsg;
};
export declare const MsgUnpauseResponse: {
    typeUrl: string;
    encode(_: MsgUnpauseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnpauseResponse;
    fromPartial(_: Partial<MsgUnpauseResponse>): MsgUnpauseResponse;
    fromAmino(_: MsgUnpauseResponseAmino): MsgUnpauseResponse;
    toAmino(_: MsgUnpauseResponse): MsgUnpauseResponseAmino;
    fromAminoMsg(object: MsgUnpauseResponseAminoMsg): MsgUnpauseResponse;
    fromProtoMsg(message: MsgUnpauseResponseProtoMsg): MsgUnpauseResponse;
    toProto(message: MsgUnpauseResponse): Uint8Array;
    toProtoMsg(message: MsgUnpauseResponse): MsgUnpauseResponseProtoMsg;
};
export declare const MsgConfigureMinterController: {
    typeUrl: string;
    encode(message: MsgConfigureMinterController, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgConfigureMinterController;
    fromPartial(object: Partial<MsgConfigureMinterController>): MsgConfigureMinterController;
    fromAmino(object: MsgConfigureMinterControllerAmino): MsgConfigureMinterController;
    toAmino(message: MsgConfigureMinterController): MsgConfigureMinterControllerAmino;
    fromAminoMsg(object: MsgConfigureMinterControllerAminoMsg): MsgConfigureMinterController;
    fromProtoMsg(message: MsgConfigureMinterControllerProtoMsg): MsgConfigureMinterController;
    toProto(message: MsgConfigureMinterController): Uint8Array;
    toProtoMsg(message: MsgConfigureMinterController): MsgConfigureMinterControllerProtoMsg;
};
export declare const MsgConfigureMinterControllerResponse: {
    typeUrl: string;
    encode(_: MsgConfigureMinterControllerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgConfigureMinterControllerResponse;
    fromPartial(_: Partial<MsgConfigureMinterControllerResponse>): MsgConfigureMinterControllerResponse;
    fromAmino(_: MsgConfigureMinterControllerResponseAmino): MsgConfigureMinterControllerResponse;
    toAmino(_: MsgConfigureMinterControllerResponse): MsgConfigureMinterControllerResponseAmino;
    fromAminoMsg(object: MsgConfigureMinterControllerResponseAminoMsg): MsgConfigureMinterControllerResponse;
    fromProtoMsg(message: MsgConfigureMinterControllerResponseProtoMsg): MsgConfigureMinterControllerResponse;
    toProto(message: MsgConfigureMinterControllerResponse): Uint8Array;
    toProtoMsg(message: MsgConfigureMinterControllerResponse): MsgConfigureMinterControllerResponseProtoMsg;
};
export declare const MsgRemoveMinterController: {
    typeUrl: string;
    encode(message: MsgRemoveMinterController, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveMinterController;
    fromPartial(object: Partial<MsgRemoveMinterController>): MsgRemoveMinterController;
    fromAmino(object: MsgRemoveMinterControllerAmino): MsgRemoveMinterController;
    toAmino(message: MsgRemoveMinterController): MsgRemoveMinterControllerAmino;
    fromAminoMsg(object: MsgRemoveMinterControllerAminoMsg): MsgRemoveMinterController;
    fromProtoMsg(message: MsgRemoveMinterControllerProtoMsg): MsgRemoveMinterController;
    toProto(message: MsgRemoveMinterController): Uint8Array;
    toProtoMsg(message: MsgRemoveMinterController): MsgRemoveMinterControllerProtoMsg;
};
export declare const MsgRemoveMinterControllerResponse: {
    typeUrl: string;
    encode(_: MsgRemoveMinterControllerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveMinterControllerResponse;
    fromPartial(_: Partial<MsgRemoveMinterControllerResponse>): MsgRemoveMinterControllerResponse;
    fromAmino(_: MsgRemoveMinterControllerResponseAmino): MsgRemoveMinterControllerResponse;
    toAmino(_: MsgRemoveMinterControllerResponse): MsgRemoveMinterControllerResponseAmino;
    fromAminoMsg(object: MsgRemoveMinterControllerResponseAminoMsg): MsgRemoveMinterControllerResponse;
    fromProtoMsg(message: MsgRemoveMinterControllerResponseProtoMsg): MsgRemoveMinterControllerResponse;
    toProto(message: MsgRemoveMinterControllerResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveMinterControllerResponse): MsgRemoveMinterControllerResponseProtoMsg;
};
