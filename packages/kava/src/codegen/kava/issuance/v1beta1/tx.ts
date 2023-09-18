import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokens {
  sender: string;
  tokens: Coin;
  receiver: string;
}
export interface MsgIssueTokensProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens";
  value: Uint8Array;
}
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokensAmino {
  sender: string;
  tokens?: CoinAmino;
  receiver: string;
}
export interface MsgIssueTokensAminoMsg {
  type: "/kava.issuance.v1beta1.MsgIssueTokens";
  value: MsgIssueTokensAmino;
}
/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokensSDKType {
  sender: string;
  tokens: CoinSDKType;
  receiver: string;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponse {}
export interface MsgIssueTokensResponseProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgIssueTokensResponse";
  value: Uint8Array;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponseAmino {}
export interface MsgIssueTokensResponseAminoMsg {
  type: "/kava.issuance.v1beta1.MsgIssueTokensResponse";
  value: MsgIssueTokensResponseAmino;
}
/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponseSDKType {}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokens {
  sender: string;
  tokens: Coin;
}
export interface MsgRedeemTokensProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens";
  value: Uint8Array;
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokensAmino {
  sender: string;
  tokens?: CoinAmino;
}
export interface MsgRedeemTokensAminoMsg {
  type: "/kava.issuance.v1beta1.MsgRedeemTokens";
  value: MsgRedeemTokensAmino;
}
/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokensSDKType {
  sender: string;
  tokens: CoinSDKType;
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponse {}
export interface MsgRedeemTokensResponseProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokensResponse";
  value: Uint8Array;
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponseAmino {}
export interface MsgRedeemTokensResponseAminoMsg {
  type: "/kava.issuance.v1beta1.MsgRedeemTokensResponse";
  value: MsgRedeemTokensResponseAmino;
}
/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponseSDKType {}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddress {
  sender: string;
  denom: string;
  blockedAddress: string;
}
export interface MsgBlockAddressProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress";
  value: Uint8Array;
}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddressAmino {
  sender: string;
  denom: string;
  blocked_address: string;
}
export interface MsgBlockAddressAminoMsg {
  type: "/kava.issuance.v1beta1.MsgBlockAddress";
  value: MsgBlockAddressAmino;
}
/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddressSDKType {
  sender: string;
  denom: string;
  blocked_address: string;
}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponse {}
export interface MsgBlockAddressResponseProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgBlockAddressResponse";
  value: Uint8Array;
}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponseAmino {}
export interface MsgBlockAddressResponseAminoMsg {
  type: "/kava.issuance.v1beta1.MsgBlockAddressResponse";
  value: MsgBlockAddressResponseAmino;
}
/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponseSDKType {}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddress {
  sender: string;
  denom: string;
  blockedAddress: string;
}
export interface MsgUnblockAddressProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress";
  value: Uint8Array;
}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddressAmino {
  sender: string;
  denom: string;
  blocked_address: string;
}
export interface MsgUnblockAddressAminoMsg {
  type: "/kava.issuance.v1beta1.MsgUnblockAddress";
  value: MsgUnblockAddressAmino;
}
/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddressSDKType {
  sender: string;
  denom: string;
  blocked_address: string;
}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponse {}
export interface MsgUnblockAddressResponseProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddressResponse";
  value: Uint8Array;
}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponseAmino {}
export interface MsgUnblockAddressResponseAminoMsg {
  type: "/kava.issuance.v1beta1.MsgUnblockAddressResponse";
  value: MsgUnblockAddressResponseAmino;
}
/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponseSDKType {}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatus {
  sender: string;
  denom: string;
  status: boolean;
}
export interface MsgSetPauseStatusProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus";
  value: Uint8Array;
}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatusAmino {
  sender: string;
  denom: string;
  status: boolean;
}
export interface MsgSetPauseStatusAminoMsg {
  type: "/kava.issuance.v1beta1.MsgSetPauseStatus";
  value: MsgSetPauseStatusAmino;
}
/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatusSDKType {
  sender: string;
  denom: string;
  status: boolean;
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponse {}
export interface MsgSetPauseStatusResponseProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatusResponse";
  value: Uint8Array;
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponseAmino {}
export interface MsgSetPauseStatusResponseAminoMsg {
  type: "/kava.issuance.v1beta1.MsgSetPauseStatusResponse";
  value: MsgSetPauseStatusResponseAmino;
}
/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponseSDKType {}
function createBaseMsgIssueTokens(): MsgIssueTokens {
  return {
    sender: "",
    tokens: Coin.fromPartial({}),
    receiver: ""
  };
}
export const MsgIssueTokens = {
  typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens",
  encode(message: MsgIssueTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): MsgIssueTokens {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokens: isSet(object.tokens) ? Coin.fromJSON(object.tokens) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<MsgIssueTokens>): MsgIssueTokens {
    const message = createBaseMsgIssueTokens();
    message.sender = object.sender ?? "";
    message.tokens = object.tokens !== undefined && object.tokens !== null ? Coin.fromPartial(object.tokens) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgIssueTokensAmino): MsgIssueTokens {
    return {
      sender: object.sender,
      tokens: object?.tokens ? Coin.fromAmino(object.tokens) : undefined,
      receiver: object.receiver
    };
  },
  toAmino(message: MsgIssueTokens): MsgIssueTokensAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.tokens = message.tokens ? Coin.toAmino(message.tokens) : undefined;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgIssueTokensAminoMsg): MsgIssueTokens {
    return MsgIssueTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueTokensProtoMsg): MsgIssueTokens {
    return MsgIssueTokens.decode(message.value);
  },
  toProto(message: MsgIssueTokens): Uint8Array {
    return MsgIssueTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueTokens): MsgIssueTokensProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens",
      value: MsgIssueTokens.encode(message).finish()
    };
  }
};
function createBaseMsgIssueTokensResponse(): MsgIssueTokensResponse {
  return {};
}
export const MsgIssueTokensResponse = {
  typeUrl: "/kava.issuance.v1beta1.MsgIssueTokensResponse",
  encode(_: MsgIssueTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgIssueTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIssueTokensResponse>): MsgIssueTokensResponse {
    const message = createBaseMsgIssueTokensResponse();
    return message;
  },
  fromAmino(_: MsgIssueTokensResponseAmino): MsgIssueTokensResponse {
    return {};
  },
  toAmino(_: MsgIssueTokensResponse): MsgIssueTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIssueTokensResponseAminoMsg): MsgIssueTokensResponse {
    return MsgIssueTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueTokensResponseProtoMsg): MsgIssueTokensResponse {
    return MsgIssueTokensResponse.decode(message.value);
  },
  toProto(message: MsgIssueTokensResponse): Uint8Array {
    return MsgIssueTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueTokensResponse): MsgIssueTokensResponseProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgIssueTokensResponse",
      value: MsgIssueTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokens(): MsgRedeemTokens {
  return {
    sender: "",
    tokens: Coin.fromPartial({})
  };
}
export const MsgRedeemTokens = {
  typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens",
  encode(message: MsgRedeemTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRedeemTokens {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokens: isSet(object.tokens) ? Coin.fromJSON(object.tokens) : undefined
    };
  },
  fromPartial(object: Partial<MsgRedeemTokens>): MsgRedeemTokens {
    const message = createBaseMsgRedeemTokens();
    message.sender = object.sender ?? "";
    message.tokens = object.tokens !== undefined && object.tokens !== null ? Coin.fromPartial(object.tokens) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensAmino): MsgRedeemTokens {
    return {
      sender: object.sender,
      tokens: object?.tokens ? Coin.fromAmino(object.tokens) : undefined
    };
  },
  toAmino(message: MsgRedeemTokens): MsgRedeemTokensAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.tokens = message.tokens ? Coin.toAmino(message.tokens) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensAminoMsg): MsgRedeemTokens {
    return MsgRedeemTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemTokensProtoMsg): MsgRedeemTokens {
    return MsgRedeemTokens.decode(message.value);
  },
  toProto(message: MsgRedeemTokens): Uint8Array {
    return MsgRedeemTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokens): MsgRedeemTokensProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens",
      value: MsgRedeemTokens.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensResponse(): MsgRedeemTokensResponse {
  return {};
}
export const MsgRedeemTokensResponse = {
  typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokensResponse",
  encode(_: MsgRedeemTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRedeemTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRedeemTokensResponse>): MsgRedeemTokensResponse {
    const message = createBaseMsgRedeemTokensResponse();
    return message;
  },
  fromAmino(_: MsgRedeemTokensResponseAmino): MsgRedeemTokensResponse {
    return {};
  },
  toAmino(_: MsgRedeemTokensResponse): MsgRedeemTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensResponseAminoMsg): MsgRedeemTokensResponse {
    return MsgRedeemTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemTokensResponseProtoMsg): MsgRedeemTokensResponse {
    return MsgRedeemTokensResponse.decode(message.value);
  },
  toProto(message: MsgRedeemTokensResponse): Uint8Array {
    return MsgRedeemTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensResponse): MsgRedeemTokensResponseProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokensResponse",
      value: MsgRedeemTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBlockAddress(): MsgBlockAddress {
  return {
    sender: "",
    denom: "",
    blockedAddress: ""
  };
}
export const MsgBlockAddress = {
  typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress",
  encode(message: MsgBlockAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.blockedAddress !== "") {
      writer.uint32(26).string(message.blockedAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgBlockAddress {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockedAddress: isSet(object.blockedAddress) ? String(object.blockedAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgBlockAddress>): MsgBlockAddress {
    const message = createBaseMsgBlockAddress();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.blockedAddress = object.blockedAddress ?? "";
    return message;
  },
  fromAmino(object: MsgBlockAddressAmino): MsgBlockAddress {
    return {
      sender: object.sender,
      denom: object.denom,
      blockedAddress: object.blocked_address
    };
  },
  toAmino(message: MsgBlockAddress): MsgBlockAddressAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    obj.blocked_address = message.blockedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgBlockAddressAminoMsg): MsgBlockAddress {
    return MsgBlockAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBlockAddressProtoMsg): MsgBlockAddress {
    return MsgBlockAddress.decode(message.value);
  },
  toProto(message: MsgBlockAddress): Uint8Array {
    return MsgBlockAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgBlockAddress): MsgBlockAddressProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress",
      value: MsgBlockAddress.encode(message).finish()
    };
  }
};
function createBaseMsgBlockAddressResponse(): MsgBlockAddressResponse {
  return {};
}
export const MsgBlockAddressResponse = {
  typeUrl: "/kava.issuance.v1beta1.MsgBlockAddressResponse",
  encode(_: MsgBlockAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBlockAddressResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBlockAddressResponse>): MsgBlockAddressResponse {
    const message = createBaseMsgBlockAddressResponse();
    return message;
  },
  fromAmino(_: MsgBlockAddressResponseAmino): MsgBlockAddressResponse {
    return {};
  },
  toAmino(_: MsgBlockAddressResponse): MsgBlockAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBlockAddressResponseAminoMsg): MsgBlockAddressResponse {
    return MsgBlockAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBlockAddressResponseProtoMsg): MsgBlockAddressResponse {
    return MsgBlockAddressResponse.decode(message.value);
  },
  toProto(message: MsgBlockAddressResponse): Uint8Array {
    return MsgBlockAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBlockAddressResponse): MsgBlockAddressResponseProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgBlockAddressResponse",
      value: MsgBlockAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnblockAddress(): MsgUnblockAddress {
  return {
    sender: "",
    denom: "",
    blockedAddress: ""
  };
}
export const MsgUnblockAddress = {
  typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress",
  encode(message: MsgUnblockAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.blockedAddress !== "") {
      writer.uint32(26).string(message.blockedAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnblockAddress {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockedAddress: isSet(object.blockedAddress) ? String(object.blockedAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUnblockAddress>): MsgUnblockAddress {
    const message = createBaseMsgUnblockAddress();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.blockedAddress = object.blockedAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnblockAddressAmino): MsgUnblockAddress {
    return {
      sender: object.sender,
      denom: object.denom,
      blockedAddress: object.blocked_address
    };
  },
  toAmino(message: MsgUnblockAddress): MsgUnblockAddressAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    obj.blocked_address = message.blockedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnblockAddressAminoMsg): MsgUnblockAddress {
    return MsgUnblockAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnblockAddressProtoMsg): MsgUnblockAddress {
    return MsgUnblockAddress.decode(message.value);
  },
  toProto(message: MsgUnblockAddress): Uint8Array {
    return MsgUnblockAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgUnblockAddress): MsgUnblockAddressProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress",
      value: MsgUnblockAddress.encode(message).finish()
    };
  }
};
function createBaseMsgUnblockAddressResponse(): MsgUnblockAddressResponse {
  return {};
}
export const MsgUnblockAddressResponse = {
  typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddressResponse",
  encode(_: MsgUnblockAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnblockAddressResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnblockAddressResponse>): MsgUnblockAddressResponse {
    const message = createBaseMsgUnblockAddressResponse();
    return message;
  },
  fromAmino(_: MsgUnblockAddressResponseAmino): MsgUnblockAddressResponse {
    return {};
  },
  toAmino(_: MsgUnblockAddressResponse): MsgUnblockAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnblockAddressResponseAminoMsg): MsgUnblockAddressResponse {
    return MsgUnblockAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnblockAddressResponseProtoMsg): MsgUnblockAddressResponse {
    return MsgUnblockAddressResponse.decode(message.value);
  },
  toProto(message: MsgUnblockAddressResponse): Uint8Array {
    return MsgUnblockAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnblockAddressResponse): MsgUnblockAddressResponseProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddressResponse",
      value: MsgUnblockAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPauseStatus(): MsgSetPauseStatus {
  return {
    sender: "",
    denom: "",
    status: false
  };
}
export const MsgSetPauseStatus = {
  typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus",
  encode(message: MsgSetPauseStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.status === true) {
      writer.uint32(24).bool(message.status);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetPauseStatus {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      status: isSet(object.status) ? Boolean(object.status) : false
    };
  },
  fromPartial(object: Partial<MsgSetPauseStatus>): MsgSetPauseStatus {
    const message = createBaseMsgSetPauseStatus();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.status = object.status ?? false;
    return message;
  },
  fromAmino(object: MsgSetPauseStatusAmino): MsgSetPauseStatus {
    return {
      sender: object.sender,
      denom: object.denom,
      status: object.status
    };
  },
  toAmino(message: MsgSetPauseStatus): MsgSetPauseStatusAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseStatusAminoMsg): MsgSetPauseStatus {
    return MsgSetPauseStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPauseStatusProtoMsg): MsgSetPauseStatus {
    return MsgSetPauseStatus.decode(message.value);
  },
  toProto(message: MsgSetPauseStatus): Uint8Array {
    return MsgSetPauseStatus.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseStatus): MsgSetPauseStatusProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus",
      value: MsgSetPauseStatus.encode(message).finish()
    };
  }
};
function createBaseMsgSetPauseStatusResponse(): MsgSetPauseStatusResponse {
  return {};
}
export const MsgSetPauseStatusResponse = {
  typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatusResponse",
  encode(_: MsgSetPauseStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetPauseStatusResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetPauseStatusResponse>): MsgSetPauseStatusResponse {
    const message = createBaseMsgSetPauseStatusResponse();
    return message;
  },
  fromAmino(_: MsgSetPauseStatusResponseAmino): MsgSetPauseStatusResponse {
    return {};
  },
  toAmino(_: MsgSetPauseStatusResponse): MsgSetPauseStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseStatusResponseAminoMsg): MsgSetPauseStatusResponse {
    return MsgSetPauseStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPauseStatusResponseProtoMsg): MsgSetPauseStatusResponse {
    return MsgSetPauseStatusResponse.decode(message.value);
  },
  toProto(message: MsgSetPauseStatusResponse): Uint8Array {
    return MsgSetPauseStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseStatusResponse): MsgSetPauseStatusResponseProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatusResponse",
      value: MsgSetPauseStatusResponse.encode(message).finish()
    };
  }
};