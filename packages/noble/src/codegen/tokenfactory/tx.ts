import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface MsgUpdateMasterMinter {
  from: string;
  address: string;
}
export interface MsgUpdateMasterMinterProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinter";
  value: Uint8Array;
}
export interface MsgUpdateMasterMinterAmino {
  from: string;
  address: string;
}
export interface MsgUpdateMasterMinterAminoMsg {
  type: "/noble.tokenfactory.MsgUpdateMasterMinter";
  value: MsgUpdateMasterMinterAmino;
}
export interface MsgUpdateMasterMinterSDKType {
  from: string;
  address: string;
}
export interface MsgUpdateMasterMinterResponse {}
export interface MsgUpdateMasterMinterResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinterResponse";
  value: Uint8Array;
}
export interface MsgUpdateMasterMinterResponseAmino {}
export interface MsgUpdateMasterMinterResponseAminoMsg {
  type: "/noble.tokenfactory.MsgUpdateMasterMinterResponse";
  value: MsgUpdateMasterMinterResponseAmino;
}
export interface MsgUpdateMasterMinterResponseSDKType {}
export interface MsgUpdatePauser {
  from: string;
  address: string;
}
export interface MsgUpdatePauserProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUpdatePauser";
  value: Uint8Array;
}
export interface MsgUpdatePauserAmino {
  from: string;
  address: string;
}
export interface MsgUpdatePauserAminoMsg {
  type: "/noble.tokenfactory.MsgUpdatePauser";
  value: MsgUpdatePauserAmino;
}
export interface MsgUpdatePauserSDKType {
  from: string;
  address: string;
}
export interface MsgUpdatePauserResponse {}
export interface MsgUpdatePauserResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUpdatePauserResponse";
  value: Uint8Array;
}
export interface MsgUpdatePauserResponseAmino {}
export interface MsgUpdatePauserResponseAminoMsg {
  type: "/noble.tokenfactory.MsgUpdatePauserResponse";
  value: MsgUpdatePauserResponseAmino;
}
export interface MsgUpdatePauserResponseSDKType {}
export interface MsgUpdateBlacklister {
  from: string;
  address: string;
}
export interface MsgUpdateBlacklisterProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUpdateBlacklister";
  value: Uint8Array;
}
export interface MsgUpdateBlacklisterAmino {
  from: string;
  address: string;
}
export interface MsgUpdateBlacklisterAminoMsg {
  type: "/noble.tokenfactory.MsgUpdateBlacklister";
  value: MsgUpdateBlacklisterAmino;
}
export interface MsgUpdateBlacklisterSDKType {
  from: string;
  address: string;
}
export interface MsgUpdateBlacklisterResponse {}
export interface MsgUpdateBlacklisterResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUpdateBlacklisterResponse";
  value: Uint8Array;
}
export interface MsgUpdateBlacklisterResponseAmino {}
export interface MsgUpdateBlacklisterResponseAminoMsg {
  type: "/noble.tokenfactory.MsgUpdateBlacklisterResponse";
  value: MsgUpdateBlacklisterResponseAmino;
}
export interface MsgUpdateBlacklisterResponseSDKType {}
export interface MsgUpdateOwner {
  from: string;
  address: string;
}
export interface MsgUpdateOwnerProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUpdateOwner";
  value: Uint8Array;
}
export interface MsgUpdateOwnerAmino {
  from: string;
  address: string;
}
export interface MsgUpdateOwnerAminoMsg {
  type: "/noble.tokenfactory.MsgUpdateOwner";
  value: MsgUpdateOwnerAmino;
}
export interface MsgUpdateOwnerSDKType {
  from: string;
  address: string;
}
export interface MsgUpdateOwnerResponse {}
export interface MsgUpdateOwnerResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUpdateOwnerResponse";
  value: Uint8Array;
}
export interface MsgUpdateOwnerResponseAmino {}
export interface MsgUpdateOwnerResponseAminoMsg {
  type: "/noble.tokenfactory.MsgUpdateOwnerResponse";
  value: MsgUpdateOwnerResponseAmino;
}
export interface MsgUpdateOwnerResponseSDKType {}
export interface MsgAcceptOwner {
  from: string;
}
export interface MsgAcceptOwnerProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgAcceptOwner";
  value: Uint8Array;
}
export interface MsgAcceptOwnerAmino {
  from: string;
}
export interface MsgAcceptOwnerAminoMsg {
  type: "/noble.tokenfactory.MsgAcceptOwner";
  value: MsgAcceptOwnerAmino;
}
export interface MsgAcceptOwnerSDKType {
  from: string;
}
export interface MsgAcceptOwnerResponse {}
export interface MsgAcceptOwnerResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgAcceptOwnerResponse";
  value: Uint8Array;
}
export interface MsgAcceptOwnerResponseAmino {}
export interface MsgAcceptOwnerResponseAminoMsg {
  type: "/noble.tokenfactory.MsgAcceptOwnerResponse";
  value: MsgAcceptOwnerResponseAmino;
}
export interface MsgAcceptOwnerResponseSDKType {}
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
  from: string;
  address: string;
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
export interface MsgConfigureMinterResponse {}
export interface MsgConfigureMinterResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgConfigureMinterResponse";
  value: Uint8Array;
}
export interface MsgConfigureMinterResponseAmino {}
export interface MsgConfigureMinterResponseAminoMsg {
  type: "/noble.tokenfactory.MsgConfigureMinterResponse";
  value: MsgConfigureMinterResponseAmino;
}
export interface MsgConfigureMinterResponseSDKType {}
export interface MsgRemoveMinter {
  from: string;
  address: string;
}
export interface MsgRemoveMinterProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgRemoveMinter";
  value: Uint8Array;
}
export interface MsgRemoveMinterAmino {
  from: string;
  address: string;
}
export interface MsgRemoveMinterAminoMsg {
  type: "/noble.tokenfactory.MsgRemoveMinter";
  value: MsgRemoveMinterAmino;
}
export interface MsgRemoveMinterSDKType {
  from: string;
  address: string;
}
export interface MsgRemoveMinterResponse {}
export interface MsgRemoveMinterResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgRemoveMinterResponse";
  value: Uint8Array;
}
export interface MsgRemoveMinterResponseAmino {}
export interface MsgRemoveMinterResponseAminoMsg {
  type: "/noble.tokenfactory.MsgRemoveMinterResponse";
  value: MsgRemoveMinterResponseAmino;
}
export interface MsgRemoveMinterResponseSDKType {}
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
  from: string;
  address: string;
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
export interface MsgMintResponse {}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgMintResponse";
  value: Uint8Array;
}
export interface MsgMintResponseAmino {}
export interface MsgMintResponseAminoMsg {
  type: "/noble.tokenfactory.MsgMintResponse";
  value: MsgMintResponseAmino;
}
export interface MsgMintResponseSDKType {}
export interface MsgBurn {
  from: string;
  amount: Coin;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgBurn";
  value: Uint8Array;
}
export interface MsgBurnAmino {
  from: string;
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
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgBurnResponse";
  value: Uint8Array;
}
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/noble.tokenfactory.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {}
export interface MsgBlacklist {
  from: string;
  address: string;
}
export interface MsgBlacklistProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgBlacklist";
  value: Uint8Array;
}
export interface MsgBlacklistAmino {
  from: string;
  address: string;
}
export interface MsgBlacklistAminoMsg {
  type: "/noble.tokenfactory.MsgBlacklist";
  value: MsgBlacklistAmino;
}
export interface MsgBlacklistSDKType {
  from: string;
  address: string;
}
export interface MsgBlacklistResponse {}
export interface MsgBlacklistResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgBlacklistResponse";
  value: Uint8Array;
}
export interface MsgBlacklistResponseAmino {}
export interface MsgBlacklistResponseAminoMsg {
  type: "/noble.tokenfactory.MsgBlacklistResponse";
  value: MsgBlacklistResponseAmino;
}
export interface MsgBlacklistResponseSDKType {}
export interface MsgUnblacklist {
  from: string;
  address: string;
}
export interface MsgUnblacklistProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUnblacklist";
  value: Uint8Array;
}
export interface MsgUnblacklistAmino {
  from: string;
  address: string;
}
export interface MsgUnblacklistAminoMsg {
  type: "/noble.tokenfactory.MsgUnblacklist";
  value: MsgUnblacklistAmino;
}
export interface MsgUnblacklistSDKType {
  from: string;
  address: string;
}
export interface MsgUnblacklistResponse {}
export interface MsgUnblacklistResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUnblacklistResponse";
  value: Uint8Array;
}
export interface MsgUnblacklistResponseAmino {}
export interface MsgUnblacklistResponseAminoMsg {
  type: "/noble.tokenfactory.MsgUnblacklistResponse";
  value: MsgUnblacklistResponseAmino;
}
export interface MsgUnblacklistResponseSDKType {}
export interface MsgPause {
  from: string;
}
export interface MsgPauseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgPause";
  value: Uint8Array;
}
export interface MsgPauseAmino {
  from: string;
}
export interface MsgPauseAminoMsg {
  type: "/noble.tokenfactory.MsgPause";
  value: MsgPauseAmino;
}
export interface MsgPauseSDKType {
  from: string;
}
export interface MsgPauseResponse {}
export interface MsgPauseResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgPauseResponse";
  value: Uint8Array;
}
export interface MsgPauseResponseAmino {}
export interface MsgPauseResponseAminoMsg {
  type: "/noble.tokenfactory.MsgPauseResponse";
  value: MsgPauseResponseAmino;
}
export interface MsgPauseResponseSDKType {}
export interface MsgUnpause {
  from: string;
}
export interface MsgUnpauseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUnpause";
  value: Uint8Array;
}
export interface MsgUnpauseAmino {
  from: string;
}
export interface MsgUnpauseAminoMsg {
  type: "/noble.tokenfactory.MsgUnpause";
  value: MsgUnpauseAmino;
}
export interface MsgUnpauseSDKType {
  from: string;
}
export interface MsgUnpauseResponse {}
export interface MsgUnpauseResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgUnpauseResponse";
  value: Uint8Array;
}
export interface MsgUnpauseResponseAmino {}
export interface MsgUnpauseResponseAminoMsg {
  type: "/noble.tokenfactory.MsgUnpauseResponse";
  value: MsgUnpauseResponseAmino;
}
export interface MsgUnpauseResponseSDKType {}
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
  from: string;
  controller: string;
  minter: string;
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
export interface MsgConfigureMinterControllerResponse {}
export interface MsgConfigureMinterControllerResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgConfigureMinterControllerResponse";
  value: Uint8Array;
}
export interface MsgConfigureMinterControllerResponseAmino {}
export interface MsgConfigureMinterControllerResponseAminoMsg {
  type: "/noble.tokenfactory.MsgConfigureMinterControllerResponse";
  value: MsgConfigureMinterControllerResponseAmino;
}
export interface MsgConfigureMinterControllerResponseSDKType {}
export interface MsgRemoveMinterController {
  from: string;
  controller: string;
}
export interface MsgRemoveMinterControllerProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgRemoveMinterController";
  value: Uint8Array;
}
export interface MsgRemoveMinterControllerAmino {
  from: string;
  controller: string;
}
export interface MsgRemoveMinterControllerAminoMsg {
  type: "/noble.tokenfactory.MsgRemoveMinterController";
  value: MsgRemoveMinterControllerAmino;
}
export interface MsgRemoveMinterControllerSDKType {
  from: string;
  controller: string;
}
export interface MsgRemoveMinterControllerResponse {}
export interface MsgRemoveMinterControllerResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.MsgRemoveMinterControllerResponse";
  value: Uint8Array;
}
export interface MsgRemoveMinterControllerResponseAmino {}
export interface MsgRemoveMinterControllerResponseAminoMsg {
  type: "/noble.tokenfactory.MsgRemoveMinterControllerResponse";
  value: MsgRemoveMinterControllerResponseAmino;
}
export interface MsgRemoveMinterControllerResponseSDKType {}
function createBaseMsgUpdateMasterMinter(): MsgUpdateMasterMinter {
  return {
    from: "",
    address: ""
  };
}
export const MsgUpdateMasterMinter = {
  typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinter",
  encode(message: MsgUpdateMasterMinter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateMasterMinter {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateMasterMinter>): MsgUpdateMasterMinter {
    const message = createBaseMsgUpdateMasterMinter();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMasterMinterAmino): MsgUpdateMasterMinter {
    return {
      from: object.from,
      address: object.address
    };
  },
  toAmino(message: MsgUpdateMasterMinter): MsgUpdateMasterMinterAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMasterMinterAminoMsg): MsgUpdateMasterMinter {
    return MsgUpdateMasterMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMasterMinterProtoMsg): MsgUpdateMasterMinter {
    return MsgUpdateMasterMinter.decode(message.value);
  },
  toProto(message: MsgUpdateMasterMinter): Uint8Array {
    return MsgUpdateMasterMinter.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMasterMinter): MsgUpdateMasterMinterProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinter",
      value: MsgUpdateMasterMinter.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMasterMinterResponse(): MsgUpdateMasterMinterResponse {
  return {};
}
export const MsgUpdateMasterMinterResponse = {
  typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinterResponse",
  encode(_: MsgUpdateMasterMinterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateMasterMinterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateMasterMinterResponse>): MsgUpdateMasterMinterResponse {
    const message = createBaseMsgUpdateMasterMinterResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMasterMinterResponseAmino): MsgUpdateMasterMinterResponse {
    return {};
  },
  toAmino(_: MsgUpdateMasterMinterResponse): MsgUpdateMasterMinterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMasterMinterResponseAminoMsg): MsgUpdateMasterMinterResponse {
    return MsgUpdateMasterMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMasterMinterResponseProtoMsg): MsgUpdateMasterMinterResponse {
    return MsgUpdateMasterMinterResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMasterMinterResponse): Uint8Array {
    return MsgUpdateMasterMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMasterMinterResponse): MsgUpdateMasterMinterResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinterResponse",
      value: MsgUpdateMasterMinterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePauser(): MsgUpdatePauser {
  return {
    from: "",
    address: ""
  };
}
export const MsgUpdatePauser = {
  typeUrl: "/noble.tokenfactory.MsgUpdatePauser",
  encode(message: MsgUpdatePauser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePauser {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdatePauser>): MsgUpdatePauser {
    const message = createBaseMsgUpdatePauser();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUpdatePauserAmino): MsgUpdatePauser {
    return {
      from: object.from,
      address: object.address
    };
  },
  toAmino(message: MsgUpdatePauser): MsgUpdatePauserAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePauserAminoMsg): MsgUpdatePauser {
    return MsgUpdatePauser.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePauserProtoMsg): MsgUpdatePauser {
    return MsgUpdatePauser.decode(message.value);
  },
  toProto(message: MsgUpdatePauser): Uint8Array {
    return MsgUpdatePauser.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePauser): MsgUpdatePauserProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUpdatePauser",
      value: MsgUpdatePauser.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePauserResponse(): MsgUpdatePauserResponse {
  return {};
}
export const MsgUpdatePauserResponse = {
  typeUrl: "/noble.tokenfactory.MsgUpdatePauserResponse",
  encode(_: MsgUpdatePauserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePauserResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePauserResponse>): MsgUpdatePauserResponse {
    const message = createBaseMsgUpdatePauserResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePauserResponseAmino): MsgUpdatePauserResponse {
    return {};
  },
  toAmino(_: MsgUpdatePauserResponse): MsgUpdatePauserResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePauserResponseAminoMsg): MsgUpdatePauserResponse {
    return MsgUpdatePauserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePauserResponseProtoMsg): MsgUpdatePauserResponse {
    return MsgUpdatePauserResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePauserResponse): Uint8Array {
    return MsgUpdatePauserResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePauserResponse): MsgUpdatePauserResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUpdatePauserResponse",
      value: MsgUpdatePauserResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBlacklister(): MsgUpdateBlacklister {
  return {
    from: "",
    address: ""
  };
}
export const MsgUpdateBlacklister = {
  typeUrl: "/noble.tokenfactory.MsgUpdateBlacklister",
  encode(message: MsgUpdateBlacklister, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateBlacklister {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateBlacklister>): MsgUpdateBlacklister {
    const message = createBaseMsgUpdateBlacklister();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateBlacklisterAmino): MsgUpdateBlacklister {
    return {
      from: object.from,
      address: object.address
    };
  },
  toAmino(message: MsgUpdateBlacklister): MsgUpdateBlacklisterAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBlacklisterAminoMsg): MsgUpdateBlacklister {
    return MsgUpdateBlacklister.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBlacklisterProtoMsg): MsgUpdateBlacklister {
    return MsgUpdateBlacklister.decode(message.value);
  },
  toProto(message: MsgUpdateBlacklister): Uint8Array {
    return MsgUpdateBlacklister.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBlacklister): MsgUpdateBlacklisterProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUpdateBlacklister",
      value: MsgUpdateBlacklister.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBlacklisterResponse(): MsgUpdateBlacklisterResponse {
  return {};
}
export const MsgUpdateBlacklisterResponse = {
  typeUrl: "/noble.tokenfactory.MsgUpdateBlacklisterResponse",
  encode(_: MsgUpdateBlacklisterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateBlacklisterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateBlacklisterResponse>): MsgUpdateBlacklisterResponse {
    const message = createBaseMsgUpdateBlacklisterResponse();
    return message;
  },
  fromAmino(_: MsgUpdateBlacklisterResponseAmino): MsgUpdateBlacklisterResponse {
    return {};
  },
  toAmino(_: MsgUpdateBlacklisterResponse): MsgUpdateBlacklisterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBlacklisterResponseAminoMsg): MsgUpdateBlacklisterResponse {
    return MsgUpdateBlacklisterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBlacklisterResponseProtoMsg): MsgUpdateBlacklisterResponse {
    return MsgUpdateBlacklisterResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBlacklisterResponse): Uint8Array {
    return MsgUpdateBlacklisterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBlacklisterResponse): MsgUpdateBlacklisterResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUpdateBlacklisterResponse",
      value: MsgUpdateBlacklisterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOwner(): MsgUpdateOwner {
  return {
    from: "",
    address: ""
  };
}
export const MsgUpdateOwner = {
  typeUrl: "/noble.tokenfactory.MsgUpdateOwner",
  encode(message: MsgUpdateOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateOwner {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateOwner>): MsgUpdateOwner {
    const message = createBaseMsgUpdateOwner();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateOwnerAmino): MsgUpdateOwner {
    return {
      from: object.from,
      address: object.address
    };
  },
  toAmino(message: MsgUpdateOwner): MsgUpdateOwnerAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOwnerAminoMsg): MsgUpdateOwner {
    return MsgUpdateOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOwnerProtoMsg): MsgUpdateOwner {
    return MsgUpdateOwner.decode(message.value);
  },
  toProto(message: MsgUpdateOwner): Uint8Array {
    return MsgUpdateOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOwner): MsgUpdateOwnerProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUpdateOwner",
      value: MsgUpdateOwner.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOwnerResponse(): MsgUpdateOwnerResponse {
  return {};
}
export const MsgUpdateOwnerResponse = {
  typeUrl: "/noble.tokenfactory.MsgUpdateOwnerResponse",
  encode(_: MsgUpdateOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateOwnerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateOwnerResponse>): MsgUpdateOwnerResponse {
    const message = createBaseMsgUpdateOwnerResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOwnerResponseAmino): MsgUpdateOwnerResponse {
    return {};
  },
  toAmino(_: MsgUpdateOwnerResponse): MsgUpdateOwnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOwnerResponseAminoMsg): MsgUpdateOwnerResponse {
    return MsgUpdateOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOwnerResponseProtoMsg): MsgUpdateOwnerResponse {
    return MsgUpdateOwnerResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOwnerResponse): Uint8Array {
    return MsgUpdateOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOwnerResponse): MsgUpdateOwnerResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUpdateOwnerResponse",
      value: MsgUpdateOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptOwner(): MsgAcceptOwner {
  return {
    from: ""
  };
}
export const MsgAcceptOwner = {
  typeUrl: "/noble.tokenfactory.MsgAcceptOwner",
  encode(message: MsgAcceptOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgAcceptOwner {
    return {
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgAcceptOwner>): MsgAcceptOwner {
    const message = createBaseMsgAcceptOwner();
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgAcceptOwnerAmino): MsgAcceptOwner {
    return {
      from: object.from
    };
  },
  toAmino(message: MsgAcceptOwner): MsgAcceptOwnerAmino {
    const obj: any = {};
    obj.from = message.from;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptOwnerAminoMsg): MsgAcceptOwner {
    return MsgAcceptOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptOwnerProtoMsg): MsgAcceptOwner {
    return MsgAcceptOwner.decode(message.value);
  },
  toProto(message: MsgAcceptOwner): Uint8Array {
    return MsgAcceptOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptOwner): MsgAcceptOwnerProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgAcceptOwner",
      value: MsgAcceptOwner.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptOwnerResponse(): MsgAcceptOwnerResponse {
  return {};
}
export const MsgAcceptOwnerResponse = {
  typeUrl: "/noble.tokenfactory.MsgAcceptOwnerResponse",
  encode(_: MsgAcceptOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAcceptOwnerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAcceptOwnerResponse>): MsgAcceptOwnerResponse {
    const message = createBaseMsgAcceptOwnerResponse();
    return message;
  },
  fromAmino(_: MsgAcceptOwnerResponseAmino): MsgAcceptOwnerResponse {
    return {};
  },
  toAmino(_: MsgAcceptOwnerResponse): MsgAcceptOwnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptOwnerResponseAminoMsg): MsgAcceptOwnerResponse {
    return MsgAcceptOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptOwnerResponseProtoMsg): MsgAcceptOwnerResponse {
    return MsgAcceptOwnerResponse.decode(message.value);
  },
  toProto(message: MsgAcceptOwnerResponse): Uint8Array {
    return MsgAcceptOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptOwnerResponse): MsgAcceptOwnerResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgAcceptOwnerResponse",
      value: MsgAcceptOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfigureMinter(): MsgConfigureMinter {
  return {
    from: "",
    address: "",
    allowance: Coin.fromPartial({})
  };
}
export const MsgConfigureMinter = {
  typeUrl: "/noble.tokenfactory.MsgConfigureMinter",
  encode(message: MsgConfigureMinter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.allowance !== undefined) {
      Coin.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgConfigureMinter {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : "",
      allowance: isSet(object.allowance) ? Coin.fromJSON(object.allowance) : undefined
    };
  },
  fromPartial(object: Partial<MsgConfigureMinter>): MsgConfigureMinter {
    const message = createBaseMsgConfigureMinter();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Coin.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromAmino(object: MsgConfigureMinterAmino): MsgConfigureMinter {
    return {
      from: object.from,
      address: object.address,
      allowance: object?.allowance ? Coin.fromAmino(object.allowance) : undefined
    };
  },
  toAmino(message: MsgConfigureMinter): MsgConfigureMinterAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    obj.allowance = message.allowance ? Coin.toAmino(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgConfigureMinterAminoMsg): MsgConfigureMinter {
    return MsgConfigureMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfigureMinterProtoMsg): MsgConfigureMinter {
    return MsgConfigureMinter.decode(message.value);
  },
  toProto(message: MsgConfigureMinter): Uint8Array {
    return MsgConfigureMinter.encode(message).finish();
  },
  toProtoMsg(message: MsgConfigureMinter): MsgConfigureMinterProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgConfigureMinter",
      value: MsgConfigureMinter.encode(message).finish()
    };
  }
};
function createBaseMsgConfigureMinterResponse(): MsgConfigureMinterResponse {
  return {};
}
export const MsgConfigureMinterResponse = {
  typeUrl: "/noble.tokenfactory.MsgConfigureMinterResponse",
  encode(_: MsgConfigureMinterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConfigureMinterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfigureMinterResponse>): MsgConfigureMinterResponse {
    const message = createBaseMsgConfigureMinterResponse();
    return message;
  },
  fromAmino(_: MsgConfigureMinterResponseAmino): MsgConfigureMinterResponse {
    return {};
  },
  toAmino(_: MsgConfigureMinterResponse): MsgConfigureMinterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfigureMinterResponseAminoMsg): MsgConfigureMinterResponse {
    return MsgConfigureMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfigureMinterResponseProtoMsg): MsgConfigureMinterResponse {
    return MsgConfigureMinterResponse.decode(message.value);
  },
  toProto(message: MsgConfigureMinterResponse): Uint8Array {
    return MsgConfigureMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfigureMinterResponse): MsgConfigureMinterResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgConfigureMinterResponse",
      value: MsgConfigureMinterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveMinter(): MsgRemoveMinter {
  return {
    from: "",
    address: ""
  };
}
export const MsgRemoveMinter = {
  typeUrl: "/noble.tokenfactory.MsgRemoveMinter",
  encode(message: MsgRemoveMinter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveMinter {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveMinter>): MsgRemoveMinter {
    const message = createBaseMsgRemoveMinter();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveMinterAmino): MsgRemoveMinter {
    return {
      from: object.from,
      address: object.address
    };
  },
  toAmino(message: MsgRemoveMinter): MsgRemoveMinterAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveMinterAminoMsg): MsgRemoveMinter {
    return MsgRemoveMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveMinterProtoMsg): MsgRemoveMinter {
    return MsgRemoveMinter.decode(message.value);
  },
  toProto(message: MsgRemoveMinter): Uint8Array {
    return MsgRemoveMinter.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveMinter): MsgRemoveMinterProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgRemoveMinter",
      value: MsgRemoveMinter.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveMinterResponse(): MsgRemoveMinterResponse {
  return {};
}
export const MsgRemoveMinterResponse = {
  typeUrl: "/noble.tokenfactory.MsgRemoveMinterResponse",
  encode(_: MsgRemoveMinterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveMinterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveMinterResponse>): MsgRemoveMinterResponse {
    const message = createBaseMsgRemoveMinterResponse();
    return message;
  },
  fromAmino(_: MsgRemoveMinterResponseAmino): MsgRemoveMinterResponse {
    return {};
  },
  toAmino(_: MsgRemoveMinterResponse): MsgRemoveMinterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveMinterResponseAminoMsg): MsgRemoveMinterResponse {
    return MsgRemoveMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveMinterResponseProtoMsg): MsgRemoveMinterResponse {
    return MsgRemoveMinterResponse.decode(message.value);
  },
  toProto(message: MsgRemoveMinterResponse): Uint8Array {
    return MsgRemoveMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveMinterResponse): MsgRemoveMinterResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgRemoveMinterResponse",
      value: MsgRemoveMinterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMint(): MsgMint {
  return {
    from: "",
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgMint = {
  typeUrl: "/noble.tokenfactory.MsgMint",
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMint {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    return {
      from: object.from,
      address: object.address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
export const MsgMintResponse = {
  typeUrl: "/noble.tokenfactory.MsgMintResponse",
  encode(_: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMintResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  fromAmino(_: MsgMintResponseAmino): MsgMintResponse {
    return {};
  },
  toAmino(_: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
    return MsgMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    from: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBurn = {
  typeUrl: "/noble.tokenfactory.MsgBurn",
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBurn {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.from = object.from ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    return {
      from: object.from,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  typeUrl: "/noble.tokenfactory.MsgBurnResponse",
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBurnResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    return {};
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBlacklist(): MsgBlacklist {
  return {
    from: "",
    address: ""
  };
}
export const MsgBlacklist = {
  typeUrl: "/noble.tokenfactory.MsgBlacklist",
  encode(message: MsgBlacklist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgBlacklist {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgBlacklist>): MsgBlacklist {
    const message = createBaseMsgBlacklist();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgBlacklistAmino): MsgBlacklist {
    return {
      from: object.from,
      address: object.address
    };
  },
  toAmino(message: MsgBlacklist): MsgBlacklistAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgBlacklistAminoMsg): MsgBlacklist {
    return MsgBlacklist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBlacklistProtoMsg): MsgBlacklist {
    return MsgBlacklist.decode(message.value);
  },
  toProto(message: MsgBlacklist): Uint8Array {
    return MsgBlacklist.encode(message).finish();
  },
  toProtoMsg(message: MsgBlacklist): MsgBlacklistProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgBlacklist",
      value: MsgBlacklist.encode(message).finish()
    };
  }
};
function createBaseMsgBlacklistResponse(): MsgBlacklistResponse {
  return {};
}
export const MsgBlacklistResponse = {
  typeUrl: "/noble.tokenfactory.MsgBlacklistResponse",
  encode(_: MsgBlacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBlacklistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBlacklistResponse>): MsgBlacklistResponse {
    const message = createBaseMsgBlacklistResponse();
    return message;
  },
  fromAmino(_: MsgBlacklistResponseAmino): MsgBlacklistResponse {
    return {};
  },
  toAmino(_: MsgBlacklistResponse): MsgBlacklistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBlacklistResponseAminoMsg): MsgBlacklistResponse {
    return MsgBlacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBlacklistResponseProtoMsg): MsgBlacklistResponse {
    return MsgBlacklistResponse.decode(message.value);
  },
  toProto(message: MsgBlacklistResponse): Uint8Array {
    return MsgBlacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBlacklistResponse): MsgBlacklistResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgBlacklistResponse",
      value: MsgBlacklistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnblacklist(): MsgUnblacklist {
  return {
    from: "",
    address: ""
  };
}
export const MsgUnblacklist = {
  typeUrl: "/noble.tokenfactory.MsgUnblacklist",
  encode(message: MsgUnblacklist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnblacklist {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgUnblacklist>): MsgUnblacklist {
    const message = createBaseMsgUnblacklist();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUnblacklistAmino): MsgUnblacklist {
    return {
      from: object.from,
      address: object.address
    };
  },
  toAmino(message: MsgUnblacklist): MsgUnblacklistAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUnblacklistAminoMsg): MsgUnblacklist {
    return MsgUnblacklist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnblacklistProtoMsg): MsgUnblacklist {
    return MsgUnblacklist.decode(message.value);
  },
  toProto(message: MsgUnblacklist): Uint8Array {
    return MsgUnblacklist.encode(message).finish();
  },
  toProtoMsg(message: MsgUnblacklist): MsgUnblacklistProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUnblacklist",
      value: MsgUnblacklist.encode(message).finish()
    };
  }
};
function createBaseMsgUnblacklistResponse(): MsgUnblacklistResponse {
  return {};
}
export const MsgUnblacklistResponse = {
  typeUrl: "/noble.tokenfactory.MsgUnblacklistResponse",
  encode(_: MsgUnblacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnblacklistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnblacklistResponse>): MsgUnblacklistResponse {
    const message = createBaseMsgUnblacklistResponse();
    return message;
  },
  fromAmino(_: MsgUnblacklistResponseAmino): MsgUnblacklistResponse {
    return {};
  },
  toAmino(_: MsgUnblacklistResponse): MsgUnblacklistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnblacklistResponseAminoMsg): MsgUnblacklistResponse {
    return MsgUnblacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnblacklistResponseProtoMsg): MsgUnblacklistResponse {
    return MsgUnblacklistResponse.decode(message.value);
  },
  toProto(message: MsgUnblacklistResponse): Uint8Array {
    return MsgUnblacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnblacklistResponse): MsgUnblacklistResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUnblacklistResponse",
      value: MsgUnblacklistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPause(): MsgPause {
  return {
    from: ""
  };
}
export const MsgPause = {
  typeUrl: "/noble.tokenfactory.MsgPause",
  encode(message: MsgPause, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgPause {
    return {
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgPause>): MsgPause {
    const message = createBaseMsgPause();
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgPauseAmino): MsgPause {
    return {
      from: object.from
    };
  },
  toAmino(message: MsgPause): MsgPauseAmino {
    const obj: any = {};
    obj.from = message.from;
    return obj;
  },
  fromAminoMsg(object: MsgPauseAminoMsg): MsgPause {
    return MsgPause.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPauseProtoMsg): MsgPause {
    return MsgPause.decode(message.value);
  },
  toProto(message: MsgPause): Uint8Array {
    return MsgPause.encode(message).finish();
  },
  toProtoMsg(message: MsgPause): MsgPauseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgPause",
      value: MsgPause.encode(message).finish()
    };
  }
};
function createBaseMsgPauseResponse(): MsgPauseResponse {
  return {};
}
export const MsgPauseResponse = {
  typeUrl: "/noble.tokenfactory.MsgPauseResponse",
  encode(_: MsgPauseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPauseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPauseResponse>): MsgPauseResponse {
    const message = createBaseMsgPauseResponse();
    return message;
  },
  fromAmino(_: MsgPauseResponseAmino): MsgPauseResponse {
    return {};
  },
  toAmino(_: MsgPauseResponse): MsgPauseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPauseResponseAminoMsg): MsgPauseResponse {
    return MsgPauseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPauseResponseProtoMsg): MsgPauseResponse {
    return MsgPauseResponse.decode(message.value);
  },
  toProto(message: MsgPauseResponse): Uint8Array {
    return MsgPauseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseResponse): MsgPauseResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgPauseResponse",
      value: MsgPauseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnpause(): MsgUnpause {
  return {
    from: ""
  };
}
export const MsgUnpause = {
  typeUrl: "/noble.tokenfactory.MsgUnpause",
  encode(message: MsgUnpause, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnpause {
    return {
      from: isSet(object.from) ? String(object.from) : ""
    };
  },
  fromPartial(object: Partial<MsgUnpause>): MsgUnpause {
    const message = createBaseMsgUnpause();
    message.from = object.from ?? "";
    return message;
  },
  fromAmino(object: MsgUnpauseAmino): MsgUnpause {
    return {
      from: object.from
    };
  },
  toAmino(message: MsgUnpause): MsgUnpauseAmino {
    const obj: any = {};
    obj.from = message.from;
    return obj;
  },
  fromAminoMsg(object: MsgUnpauseAminoMsg): MsgUnpause {
    return MsgUnpause.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnpauseProtoMsg): MsgUnpause {
    return MsgUnpause.decode(message.value);
  },
  toProto(message: MsgUnpause): Uint8Array {
    return MsgUnpause.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpause): MsgUnpauseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUnpause",
      value: MsgUnpause.encode(message).finish()
    };
  }
};
function createBaseMsgUnpauseResponse(): MsgUnpauseResponse {
  return {};
}
export const MsgUnpauseResponse = {
  typeUrl: "/noble.tokenfactory.MsgUnpauseResponse",
  encode(_: MsgUnpauseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnpauseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnpauseResponse>): MsgUnpauseResponse {
    const message = createBaseMsgUnpauseResponse();
    return message;
  },
  fromAmino(_: MsgUnpauseResponseAmino): MsgUnpauseResponse {
    return {};
  },
  toAmino(_: MsgUnpauseResponse): MsgUnpauseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnpauseResponseAminoMsg): MsgUnpauseResponse {
    return MsgUnpauseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnpauseResponseProtoMsg): MsgUnpauseResponse {
    return MsgUnpauseResponse.decode(message.value);
  },
  toProto(message: MsgUnpauseResponse): Uint8Array {
    return MsgUnpauseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnpauseResponse): MsgUnpauseResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgUnpauseResponse",
      value: MsgUnpauseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfigureMinterController(): MsgConfigureMinterController {
  return {
    from: "",
    controller: "",
    minter: ""
  };
}
export const MsgConfigureMinterController = {
  typeUrl: "/noble.tokenfactory.MsgConfigureMinterController",
  encode(message: MsgConfigureMinterController, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.controller !== "") {
      writer.uint32(18).string(message.controller);
    }
    if (message.minter !== "") {
      writer.uint32(26).string(message.minter);
    }
    return writer;
  },
  fromJSON(object: any): MsgConfigureMinterController {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      controller: isSet(object.controller) ? String(object.controller) : "",
      minter: isSet(object.minter) ? String(object.minter) : ""
    };
  },
  fromPartial(object: Partial<MsgConfigureMinterController>): MsgConfigureMinterController {
    const message = createBaseMsgConfigureMinterController();
    message.from = object.from ?? "";
    message.controller = object.controller ?? "";
    message.minter = object.minter ?? "";
    return message;
  },
  fromAmino(object: MsgConfigureMinterControllerAmino): MsgConfigureMinterController {
    return {
      from: object.from,
      controller: object.controller,
      minter: object.minter
    };
  },
  toAmino(message: MsgConfigureMinterController): MsgConfigureMinterControllerAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.controller = message.controller;
    obj.minter = message.minter;
    return obj;
  },
  fromAminoMsg(object: MsgConfigureMinterControllerAminoMsg): MsgConfigureMinterController {
    return MsgConfigureMinterController.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfigureMinterControllerProtoMsg): MsgConfigureMinterController {
    return MsgConfigureMinterController.decode(message.value);
  },
  toProto(message: MsgConfigureMinterController): Uint8Array {
    return MsgConfigureMinterController.encode(message).finish();
  },
  toProtoMsg(message: MsgConfigureMinterController): MsgConfigureMinterControllerProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgConfigureMinterController",
      value: MsgConfigureMinterController.encode(message).finish()
    };
  }
};
function createBaseMsgConfigureMinterControllerResponse(): MsgConfigureMinterControllerResponse {
  return {};
}
export const MsgConfigureMinterControllerResponse = {
  typeUrl: "/noble.tokenfactory.MsgConfigureMinterControllerResponse",
  encode(_: MsgConfigureMinterControllerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConfigureMinterControllerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConfigureMinterControllerResponse>): MsgConfigureMinterControllerResponse {
    const message = createBaseMsgConfigureMinterControllerResponse();
    return message;
  },
  fromAmino(_: MsgConfigureMinterControllerResponseAmino): MsgConfigureMinterControllerResponse {
    return {};
  },
  toAmino(_: MsgConfigureMinterControllerResponse): MsgConfigureMinterControllerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfigureMinterControllerResponseAminoMsg): MsgConfigureMinterControllerResponse {
    return MsgConfigureMinterControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfigureMinterControllerResponseProtoMsg): MsgConfigureMinterControllerResponse {
    return MsgConfigureMinterControllerResponse.decode(message.value);
  },
  toProto(message: MsgConfigureMinterControllerResponse): Uint8Array {
    return MsgConfigureMinterControllerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfigureMinterControllerResponse): MsgConfigureMinterControllerResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgConfigureMinterControllerResponse",
      value: MsgConfigureMinterControllerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveMinterController(): MsgRemoveMinterController {
  return {
    from: "",
    controller: ""
  };
}
export const MsgRemoveMinterController = {
  typeUrl: "/noble.tokenfactory.MsgRemoveMinterController",
  encode(message: MsgRemoveMinterController, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.controller !== "") {
      writer.uint32(18).string(message.controller);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveMinterController {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      controller: isSet(object.controller) ? String(object.controller) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveMinterController>): MsgRemoveMinterController {
    const message = createBaseMsgRemoveMinterController();
    message.from = object.from ?? "";
    message.controller = object.controller ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveMinterControllerAmino): MsgRemoveMinterController {
    return {
      from: object.from,
      controller: object.controller
    };
  },
  toAmino(message: MsgRemoveMinterController): MsgRemoveMinterControllerAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.controller = message.controller;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveMinterControllerAminoMsg): MsgRemoveMinterController {
    return MsgRemoveMinterController.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveMinterControllerProtoMsg): MsgRemoveMinterController {
    return MsgRemoveMinterController.decode(message.value);
  },
  toProto(message: MsgRemoveMinterController): Uint8Array {
    return MsgRemoveMinterController.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveMinterController): MsgRemoveMinterControllerProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgRemoveMinterController",
      value: MsgRemoveMinterController.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveMinterControllerResponse(): MsgRemoveMinterControllerResponse {
  return {};
}
export const MsgRemoveMinterControllerResponse = {
  typeUrl: "/noble.tokenfactory.MsgRemoveMinterControllerResponse",
  encode(_: MsgRemoveMinterControllerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveMinterControllerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveMinterControllerResponse>): MsgRemoveMinterControllerResponse {
    const message = createBaseMsgRemoveMinterControllerResponse();
    return message;
  },
  fromAmino(_: MsgRemoveMinterControllerResponseAmino): MsgRemoveMinterControllerResponse {
    return {};
  },
  toAmino(_: MsgRemoveMinterControllerResponse): MsgRemoveMinterControllerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveMinterControllerResponseAminoMsg): MsgRemoveMinterControllerResponse {
    return MsgRemoveMinterControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveMinterControllerResponseProtoMsg): MsgRemoveMinterControllerResponse {
    return MsgRemoveMinterControllerResponse.decode(message.value);
  },
  toProto(message: MsgRemoveMinterControllerResponse): Uint8Array {
    return MsgRemoveMinterControllerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveMinterControllerResponse): MsgRemoveMinterControllerResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MsgRemoveMinterControllerResponse",
      value: MsgRemoveMinterControllerResponse.encode(message).finish()
    };
  }
};