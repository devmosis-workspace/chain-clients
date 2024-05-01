import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType, Index, IndexAmino, IndexSDKType } from "./metoken";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgSwap represents a user's request to swap assets for Index's meToken. */
export interface MsgSwap {
  /** User is the account address swapping assets and the signer of the message. */
  user: string;
  asset: Coin;
  metokenDenom: string;
}
export interface MsgSwapProtoMsg {
  typeUrl: "/umee.metoken.v1.MsgSwap";
  value: Uint8Array;
}
/** MsgSwap represents a user's request to swap assets for Index's meToken. */
export interface MsgSwapAmino {
  /** User is the account address swapping assets and the signer of the message. */
  user?: string;
  asset?: CoinAmino;
  metoken_denom?: string;
}
export interface MsgSwapAminoMsg {
  type: "/umee.metoken.v1.MsgSwap";
  value: MsgSwapAmino;
}
/** MsgSwap represents a user's request to swap assets for Index's meToken. */
export interface MsgSwapSDKType {
  user: string;
  asset: CoinSDKType;
  metoken_denom: string;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {
  /** Fee is the amount of accepted asset charged to the user as the fee for the transaction. */
  fee: Coin;
  /** Returned is the amount of Index's meToken minted and returned to the user. */
  returned: Coin;
}
export interface MsgSwapResponseProtoMsg {
  typeUrl: "/umee.metoken.v1.MsgSwapResponse";
  value: Uint8Array;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseAmino {
  /** Fee is the amount of accepted asset charged to the user as the fee for the transaction. */
  fee?: CoinAmino;
  /** Returned is the amount of Index's meToken minted and returned to the user. */
  returned?: CoinAmino;
}
export interface MsgSwapResponseAminoMsg {
  type: "/umee.metoken.v1.MsgSwapResponse";
  value: MsgSwapResponseAmino;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseSDKType {
  fee: CoinSDKType;
  returned: CoinSDKType;
}
/** MsgRedeem represents a user's request to redeem Index's meTokens for one of the accepted assets. */
export interface MsgRedeem {
  /** User is the account address redeeming assets and the signer of the message. */
  user: string;
  metoken: Coin;
  assetDenom: string;
}
export interface MsgRedeemProtoMsg {
  typeUrl: "/umee.metoken.v1.MsgRedeem";
  value: Uint8Array;
}
/** MsgRedeem represents a user's request to redeem Index's meTokens for one of the accepted assets. */
export interface MsgRedeemAmino {
  /** User is the account address redeeming assets and the signer of the message. */
  user?: string;
  metoken?: CoinAmino;
  asset_denom?: string;
}
export interface MsgRedeemAminoMsg {
  type: "/umee.metoken.v1.MsgRedeem";
  value: MsgRedeemAmino;
}
/** MsgRedeem represents a user's request to redeem Index's meTokens for one of the accepted assets. */
export interface MsgRedeemSDKType {
  user: string;
  metoken: CoinSDKType;
  asset_denom: string;
}
/** MsgRedeemResponse defines the Msg/Redeem response type. */
export interface MsgRedeemResponse {
  /** Returned is the amount of accepted asset returned to the user. */
  returned: Coin;
  /** Fee is the amount of accepted asset charged to the user as the fee for the transaction. */
  fee: Coin;
}
export interface MsgRedeemResponseProtoMsg {
  typeUrl: "/umee.metoken.v1.MsgRedeemResponse";
  value: Uint8Array;
}
/** MsgRedeemResponse defines the Msg/Redeem response type. */
export interface MsgRedeemResponseAmino {
  /** Returned is the amount of accepted asset returned to the user. */
  returned?: CoinAmino;
  /** Fee is the amount of accepted asset charged to the user as the fee for the transaction. */
  fee?: CoinAmino;
}
export interface MsgRedeemResponseAminoMsg {
  type: "/umee.metoken.v1.MsgRedeemResponse";
  value: MsgRedeemResponseAmino;
}
/** MsgRedeemResponse defines the Msg/Redeem response type. */
export interface MsgRedeemResponseSDKType {
  returned: CoinSDKType;
  fee: CoinSDKType;
}
/** MsgGovSetParams defines the Msg/GovSetParams request type. */
export interface MsgGovSetParams {
  /** authority must be the address of the governance account. */
  authority: string;
  params: Params;
}
export interface MsgGovSetParamsProtoMsg {
  typeUrl: "/umee.metoken.v1.MsgGovSetParams";
  value: Uint8Array;
}
/** MsgGovSetParams defines the Msg/GovSetParams request type. */
export interface MsgGovSetParamsAmino {
  /** authority must be the address of the governance account. */
  authority?: string;
  params?: ParamsAmino;
}
export interface MsgGovSetParamsAminoMsg {
  type: "/umee.metoken.v1.MsgGovSetParams";
  value: MsgGovSetParamsAmino;
}
/** MsgGovSetParams defines the Msg/GovSetParams request type. */
export interface MsgGovSetParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgGovSetParamsResponse defines the Msg/GovSetParams response type. */
export interface MsgGovSetParamsResponse {}
export interface MsgGovSetParamsResponseProtoMsg {
  typeUrl: "/umee.metoken.v1.MsgGovSetParamsResponse";
  value: Uint8Array;
}
/** MsgGovSetParamsResponse defines the Msg/GovSetParams response type. */
export interface MsgGovSetParamsResponseAmino {}
export interface MsgGovSetParamsResponseAminoMsg {
  type: "/umee.metoken.v1.MsgGovSetParamsResponse";
  value: MsgGovSetParamsResponseAmino;
}
/** MsgGovSetParamsResponse defines the Msg/GovSetParams response type. */
export interface MsgGovSetParamsResponseSDKType {}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistry {
  /** authority is the address of the governance account. */
  authority: string;
  /** add_index defines new index settings. */
  addIndex: Index[];
  /** update_index defines the new settings for existing index. */
  updateIndex: Index[];
}
export interface MsgGovUpdateRegistryProtoMsg {
  typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistry";
  value: Uint8Array;
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistryAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** add_index defines new index settings. */
  add_index?: IndexAmino[];
  /** update_index defines the new settings for existing index. */
  update_index?: IndexAmino[];
}
export interface MsgGovUpdateRegistryAminoMsg {
  type: "/umee.metoken.v1.MsgGovUpdateRegistry";
  value: MsgGovUpdateRegistryAmino;
}
/** MsgGovUpdateRegistry defines the Msg/GovUpdateRegistry request type. */
export interface MsgGovUpdateRegistrySDKType {
  authority: string;
  add_index: IndexSDKType[];
  update_index: IndexSDKType[];
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponse {}
export interface MsgGovUpdateRegistryResponseProtoMsg {
  typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistryResponse";
  value: Uint8Array;
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseAmino {}
export interface MsgGovUpdateRegistryResponseAminoMsg {
  type: "/umee.metoken.v1.MsgGovUpdateRegistryResponse";
  value: MsgGovUpdateRegistryResponseAmino;
}
/** MsgGovUpdateRegistryResponse defines the Msg/GovUpdateRegistry response type. */
export interface MsgGovUpdateRegistryResponseSDKType {}
function createBaseMsgSwap(): MsgSwap {
  return {
    user: "",
    asset: Coin.fromPartial({}),
    metokenDenom: ""
  };
}
export const MsgSwap = {
  typeUrl: "/umee.metoken.v1.MsgSwap",
  encode(message: MsgSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    if (message.metokenDenom !== "") {
      writer.uint32(26).string(message.metokenDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgSwap {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      metokenDenom: isSet(object.metokenDenom) ? String(object.metokenDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.user = object.user ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.metokenDenom = object.metokenDenom ?? "";
    return message;
  },
  fromAmino(object: MsgSwapAmino): MsgSwap {
    const message = createBaseMsgSwap();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    if (object.metoken_denom !== undefined && object.metoken_denom !== null) {
      message.metokenDenom = object.metoken_denom;
    }
    return message;
  },
  toAmino(message: MsgSwap): MsgSwapAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.metoken_denom = message.metokenDenom === "" ? undefined : message.metokenDenom;
    return obj;
  },
  fromAminoMsg(object: MsgSwapAminoMsg): MsgSwap {
    return MsgSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapProtoMsg): MsgSwap {
    return MsgSwap.decode(message.value);
  },
  toProto(message: MsgSwap): Uint8Array {
    return MsgSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgSwap): MsgSwapProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.MsgSwap",
      value: MsgSwap.encode(message).finish()
    };
  }
};
function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {
    fee: Coin.fromPartial({}),
    returned: Coin.fromPartial({})
  };
}
export const MsgSwapResponse = {
  typeUrl: "/umee.metoken.v1.MsgSwapResponse",
  encode(message: MsgSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.returned !== undefined) {
      Coin.encode(message.returned, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSwapResponse {
    return {
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      returned: isSet(object.returned) ? Coin.fromJSON(object.returned) : undefined
    };
  },
  fromPartial(object: Partial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.returned = object.returned !== undefined && object.returned !== null ? Coin.fromPartial(object.returned) : undefined;
    return message;
  },
  fromAmino(object: MsgSwapResponseAmino): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    if (object.returned !== undefined && object.returned !== null) {
      message.returned = Coin.fromAmino(object.returned);
    }
    return message;
  },
  toAmino(message: MsgSwapResponse): MsgSwapResponseAmino {
    const obj: any = {};
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    obj.returned = message.returned ? Coin.toAmino(message.returned) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse {
    return MsgSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse {
    return MsgSwapResponse.decode(message.value);
  },
  toProto(message: MsgSwapResponse): Uint8Array {
    return MsgSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.MsgSwapResponse",
      value: MsgSwapResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeem(): MsgRedeem {
  return {
    user: "",
    metoken: Coin.fromPartial({}),
    assetDenom: ""
  };
}
export const MsgRedeem = {
  typeUrl: "/umee.metoken.v1.MsgRedeem",
  encode(message: MsgRedeem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.metoken !== undefined) {
      Coin.encode(message.metoken, writer.uint32(18).fork()).ldelim();
    }
    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }
    return writer;
  },
  fromJSON(object: any): MsgRedeem {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      metoken: isSet(object.metoken) ? Coin.fromJSON(object.metoken) : undefined,
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : ""
    };
  },
  fromPartial(object: Partial<MsgRedeem>): MsgRedeem {
    const message = createBaseMsgRedeem();
    message.user = object.user ?? "";
    message.metoken = object.metoken !== undefined && object.metoken !== null ? Coin.fromPartial(object.metoken) : undefined;
    message.assetDenom = object.assetDenom ?? "";
    return message;
  },
  fromAmino(object: MsgRedeemAmino): MsgRedeem {
    const message = createBaseMsgRedeem();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.metoken !== undefined && object.metoken !== null) {
      message.metoken = Coin.fromAmino(object.metoken);
    }
    if (object.asset_denom !== undefined && object.asset_denom !== null) {
      message.assetDenom = object.asset_denom;
    }
    return message;
  },
  toAmino(message: MsgRedeem): MsgRedeemAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.metoken = message.metoken ? Coin.toAmino(message.metoken) : undefined;
    obj.asset_denom = message.assetDenom === "" ? undefined : message.assetDenom;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemAminoMsg): MsgRedeem {
    return MsgRedeem.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemProtoMsg): MsgRedeem {
    return MsgRedeem.decode(message.value);
  },
  toProto(message: MsgRedeem): Uint8Array {
    return MsgRedeem.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeem): MsgRedeemProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.MsgRedeem",
      value: MsgRedeem.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemResponse(): MsgRedeemResponse {
  return {
    returned: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgRedeemResponse = {
  typeUrl: "/umee.metoken.v1.MsgRedeemResponse",
  encode(message: MsgRedeemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.returned !== undefined) {
      Coin.encode(message.returned, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRedeemResponse {
    return {
      returned: isSet(object.returned) ? Coin.fromJSON(object.returned) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<MsgRedeemResponse>): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    message.returned = object.returned !== undefined && object.returned !== null ? Coin.fromPartial(object.returned) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemResponseAmino): MsgRedeemResponse {
    const message = createBaseMsgRedeemResponse();
    if (object.returned !== undefined && object.returned !== null) {
      message.returned = Coin.fromAmino(object.returned);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgRedeemResponse): MsgRedeemResponseAmino {
    const obj: any = {};
    obj.returned = message.returned ? Coin.toAmino(message.returned) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemResponseAminoMsg): MsgRedeemResponse {
    return MsgRedeemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemResponseProtoMsg): MsgRedeemResponse {
    return MsgRedeemResponse.decode(message.value);
  },
  toProto(message: MsgRedeemResponse): Uint8Array {
    return MsgRedeemResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemResponse): MsgRedeemResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.MsgRedeemResponse",
      value: MsgRedeemResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetParams(): MsgGovSetParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgGovSetParams = {
  typeUrl: "/umee.metoken.v1.MsgGovSetParams",
  encode(message: MsgGovSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovSetParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgGovSetParams>): MsgGovSetParams {
    const message = createBaseMsgGovSetParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgGovSetParamsAmino): MsgGovSetParams {
    const message = createBaseMsgGovSetParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgGovSetParams): MsgGovSetParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGovSetParamsAminoMsg): MsgGovSetParams {
    return MsgGovSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetParamsProtoMsg): MsgGovSetParams {
    return MsgGovSetParams.decode(message.value);
  },
  toProto(message: MsgGovSetParams): Uint8Array {
    return MsgGovSetParams.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetParams): MsgGovSetParamsProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.MsgGovSetParams",
      value: MsgGovSetParams.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetParamsResponse(): MsgGovSetParamsResponse {
  return {};
}
export const MsgGovSetParamsResponse = {
  typeUrl: "/umee.metoken.v1.MsgGovSetParamsResponse",
  encode(_: MsgGovSetParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovSetParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovSetParamsResponse>): MsgGovSetParamsResponse {
    const message = createBaseMsgGovSetParamsResponse();
    return message;
  },
  fromAmino(_: MsgGovSetParamsResponseAmino): MsgGovSetParamsResponse {
    const message = createBaseMsgGovSetParamsResponse();
    return message;
  },
  toAmino(_: MsgGovSetParamsResponse): MsgGovSetParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetParamsResponseAminoMsg): MsgGovSetParamsResponse {
    return MsgGovSetParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetParamsResponseProtoMsg): MsgGovSetParamsResponse {
    return MsgGovSetParamsResponse.decode(message.value);
  },
  toProto(message: MsgGovSetParamsResponse): Uint8Array {
    return MsgGovSetParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetParamsResponse): MsgGovSetParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.MsgGovSetParamsResponse",
      value: MsgGovSetParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateRegistry(): MsgGovUpdateRegistry {
  return {
    authority: "",
    addIndex: [],
    updateIndex: []
  };
}
export const MsgGovUpdateRegistry = {
  typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistry",
  encode(message: MsgGovUpdateRegistry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.addIndex) {
      Index.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.updateIndex) {
      Index.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovUpdateRegistry {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      addIndex: Array.isArray(object?.addIndex) ? object.addIndex.map((e: any) => Index.fromJSON(e)) : [],
      updateIndex: Array.isArray(object?.updateIndex) ? object.updateIndex.map((e: any) => Index.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgGovUpdateRegistry>): MsgGovUpdateRegistry {
    const message = createBaseMsgGovUpdateRegistry();
    message.authority = object.authority ?? "";
    message.addIndex = object.addIndex?.map(e => Index.fromPartial(e)) || [];
    message.updateIndex = object.updateIndex?.map(e => Index.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgGovUpdateRegistryAmino): MsgGovUpdateRegistry {
    const message = createBaseMsgGovUpdateRegistry();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.addIndex = object.add_index?.map(e => Index.fromAmino(e)) || [];
    message.updateIndex = object.update_index?.map(e => Index.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgGovUpdateRegistry): MsgGovUpdateRegistryAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.addIndex) {
      obj.add_index = message.addIndex.map(e => e ? Index.toAmino(e) : undefined);
    } else {
      obj.add_index = message.addIndex;
    }
    if (message.updateIndex) {
      obj.update_index = message.updateIndex.map(e => e ? Index.toAmino(e) : undefined);
    } else {
      obj.update_index = message.updateIndex;
    }
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateRegistryAminoMsg): MsgGovUpdateRegistry {
    return MsgGovUpdateRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateRegistryProtoMsg): MsgGovUpdateRegistry {
    return MsgGovUpdateRegistry.decode(message.value);
  },
  toProto(message: MsgGovUpdateRegistry): Uint8Array {
    return MsgGovUpdateRegistry.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateRegistry): MsgGovUpdateRegistryProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistry",
      value: MsgGovUpdateRegistry.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateRegistryResponse(): MsgGovUpdateRegistryResponse {
  return {};
}
export const MsgGovUpdateRegistryResponse = {
  typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistryResponse",
  encode(_: MsgGovUpdateRegistryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateRegistryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateRegistryResponse>): MsgGovUpdateRegistryResponse {
    const message = createBaseMsgGovUpdateRegistryResponse();
    return message;
  },
  fromAmino(_: MsgGovUpdateRegistryResponseAmino): MsgGovUpdateRegistryResponse {
    const message = createBaseMsgGovUpdateRegistryResponse();
    return message;
  },
  toAmino(_: MsgGovUpdateRegistryResponse): MsgGovUpdateRegistryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateRegistryResponseAminoMsg): MsgGovUpdateRegistryResponse {
    return MsgGovUpdateRegistryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateRegistryResponseProtoMsg): MsgGovUpdateRegistryResponse {
    return MsgGovUpdateRegistryResponse.decode(message.value);
  },
  toProto(message: MsgGovUpdateRegistryResponse): Uint8Array {
    return MsgGovUpdateRegistryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateRegistryResponse): MsgGovUpdateRegistryResponseProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistryResponse",
      value: MsgGovUpdateRegistryResponse.encode(message).finish()
    };
  }
};