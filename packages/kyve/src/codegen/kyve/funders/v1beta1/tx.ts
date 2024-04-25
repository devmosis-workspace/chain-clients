import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCreateFunder defines a SDK message for creating a funder. */
export interface MsgCreateFunder {
  /** creator ... */
  creator: string;
  /** moniker */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website */
  website: string;
  /** contact */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}
export interface MsgCreateFunderProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder";
  value: Uint8Array;
}
/** MsgCreateFunder defines a SDK message for creating a funder. */
export interface MsgCreateFunderAmino {
  /** creator ... */
  creator?: string;
  /** moniker */
  moniker?: string;
  /** identity is the 64 bit keybase.io identity string */
  identity?: string;
  /** website */
  website?: string;
  /** contact */
  contact?: string;
  /** description are some additional notes the funder finds important */
  description?: string;
}
export interface MsgCreateFunderAminoMsg {
  type: "/kyve.funders.v1beta1.MsgCreateFunder";
  value: MsgCreateFunderAmino;
}
/** MsgCreateFunder defines a SDK message for creating a funder. */
export interface MsgCreateFunderSDKType {
  creator: string;
  moniker: string;
  identity: string;
  website: string;
  contact: string;
  description: string;
}
/** MsgCreateFunderResponse defines the Msg/CreateFunder response type. */
export interface MsgCreateFunderResponse {}
export interface MsgCreateFunderResponseProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgCreateFunderResponse";
  value: Uint8Array;
}
/** MsgCreateFunderResponse defines the Msg/CreateFunder response type. */
export interface MsgCreateFunderResponseAmino {}
export interface MsgCreateFunderResponseAminoMsg {
  type: "/kyve.funders.v1beta1.MsgCreateFunderResponse";
  value: MsgCreateFunderResponseAmino;
}
/** MsgCreateFunderResponse defines the Msg/CreateFunder response type. */
export interface MsgCreateFunderResponseSDKType {}
/** MsgUpdateFunder defines a SDK message for updating a funder. */
export interface MsgUpdateFunder {
  /** creator ... */
  creator: string;
  /** moniker */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website */
  website: string;
  /** contact */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}
export interface MsgUpdateFunderProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder";
  value: Uint8Array;
}
/** MsgUpdateFunder defines a SDK message for updating a funder. */
export interface MsgUpdateFunderAmino {
  /** creator ... */
  creator?: string;
  /** moniker */
  moniker?: string;
  /** identity is the 64 bit keybase.io identity string */
  identity?: string;
  /** website */
  website?: string;
  /** contact */
  contact?: string;
  /** description are some additional notes the funder finds important */
  description?: string;
}
export interface MsgUpdateFunderAminoMsg {
  type: "/kyve.funders.v1beta1.MsgUpdateFunder";
  value: MsgUpdateFunderAmino;
}
/** MsgUpdateFunder defines a SDK message for updating a funder. */
export interface MsgUpdateFunderSDKType {
  creator: string;
  moniker: string;
  identity: string;
  website: string;
  contact: string;
  description: string;
}
/** MsgUpdateFunderResponse defines the Msg/UpdateFunder response type. */
export interface MsgUpdateFunderResponse {}
export interface MsgUpdateFunderResponseProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunderResponse";
  value: Uint8Array;
}
/** MsgUpdateFunderResponse defines the Msg/UpdateFunder response type. */
export interface MsgUpdateFunderResponseAmino {}
export interface MsgUpdateFunderResponseAminoMsg {
  type: "/kyve.funders.v1beta1.MsgUpdateFunderResponse";
  value: MsgUpdateFunderResponseAmino;
}
/** MsgUpdateFunderResponse defines the Msg/UpdateFunder response type. */
export interface MsgUpdateFunderResponseSDKType {}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  poolId: bigint;
  /** amount is the total amount available for distribution */
  amount: bigint;
  /** amount_per_bundle defines the amount of tokens that are distributed per submitted bundle */
  amountPerBundle: bigint;
}
export interface MsgFundPoolProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgFundPool";
  value: Uint8Array;
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPoolAmino {
  /** creator ... */
  creator?: string;
  /** id ... */
  pool_id?: string;
  /** amount is the total amount available for distribution */
  amount?: string;
  /** amount_per_bundle defines the amount of tokens that are distributed per submitted bundle */
  amount_per_bundle?: string;
}
export interface MsgFundPoolAminoMsg {
  type: "/kyve.funders.v1beta1.MsgFundPool";
  value: MsgFundPoolAmino;
}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPoolSDKType {
  creator: string;
  pool_id: bigint;
  amount: bigint;
  amount_per_bundle: bigint;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {}
export interface MsgFundPoolResponseProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgFundPoolResponse";
  value: Uint8Array;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponseAmino {}
export interface MsgFundPoolResponseAminoMsg {
  type: "/kyve.funders.v1beta1.MsgFundPoolResponse";
  value: MsgFundPoolResponseAmino;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponseSDKType {}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  poolId: bigint;
  /** amount ... */
  amount: bigint;
}
export interface MsgDefundPoolProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgDefundPool";
  value: Uint8Array;
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPoolAmino {
  /** creator ... */
  creator?: string;
  /** id ... */
  pool_id?: string;
  /** amount ... */
  amount?: string;
}
export interface MsgDefundPoolAminoMsg {
  type: "/kyve.funders.v1beta1.MsgDefundPool";
  value: MsgDefundPoolAmino;
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPoolSDKType {
  creator: string;
  pool_id: bigint;
  amount: bigint;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {}
export interface MsgDefundPoolResponseProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgDefundPoolResponse";
  value: Uint8Array;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponseAmino {}
export interface MsgDefundPoolResponseAminoMsg {
  type: "/kyve.funders.v1beta1.MsgDefundPoolResponse";
  value: MsgDefundPoolResponseAmino;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponseSDKType {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/delegation parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** payload defines the x/delegation parameters to update. */
  payload?: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/kyve.funders.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/kyve.funders.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateFunder(): MsgCreateFunder {
  return {
    creator: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: ""
  };
}
export const MsgCreateFunder = {
  typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder",
  encode(message: MsgCreateFunder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateFunder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateFunder>): MsgCreateFunder {
    const message = createBaseMsgCreateFunder();
    message.creator = object.creator ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgCreateFunderAmino): MsgCreateFunder {
    const message = createBaseMsgCreateFunder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgCreateFunder): MsgCreateFunderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.contact = message.contact;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: MsgCreateFunderAminoMsg): MsgCreateFunder {
    return MsgCreateFunder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateFunderProtoMsg): MsgCreateFunder {
    return MsgCreateFunder.decode(message.value);
  },
  toProto(message: MsgCreateFunder): Uint8Array {
    return MsgCreateFunder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateFunder): MsgCreateFunderProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder",
      value: MsgCreateFunder.encode(message).finish()
    };
  }
};
function createBaseMsgCreateFunderResponse(): MsgCreateFunderResponse {
  return {};
}
export const MsgCreateFunderResponse = {
  typeUrl: "/kyve.funders.v1beta1.MsgCreateFunderResponse",
  encode(_: MsgCreateFunderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateFunderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateFunderResponse>): MsgCreateFunderResponse {
    const message = createBaseMsgCreateFunderResponse();
    return message;
  },
  fromAmino(_: MsgCreateFunderResponseAmino): MsgCreateFunderResponse {
    const message = createBaseMsgCreateFunderResponse();
    return message;
  },
  toAmino(_: MsgCreateFunderResponse): MsgCreateFunderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateFunderResponseAminoMsg): MsgCreateFunderResponse {
    return MsgCreateFunderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateFunderResponseProtoMsg): MsgCreateFunderResponse {
    return MsgCreateFunderResponse.decode(message.value);
  },
  toProto(message: MsgCreateFunderResponse): Uint8Array {
    return MsgCreateFunderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateFunderResponse): MsgCreateFunderResponseProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgCreateFunderResponse",
      value: MsgCreateFunderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFunder(): MsgUpdateFunder {
  return {
    creator: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: ""
  };
}
export const MsgUpdateFunder = {
  typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder",
  encode(message: MsgUpdateFunder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateFunder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateFunder>): MsgUpdateFunder {
    const message = createBaseMsgUpdateFunder();
    message.creator = object.creator ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateFunderAmino): MsgUpdateFunder {
    const message = createBaseMsgUpdateFunder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgUpdateFunder): MsgUpdateFunderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.contact = message.contact;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFunderAminoMsg): MsgUpdateFunder {
    return MsgUpdateFunder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFunderProtoMsg): MsgUpdateFunder {
    return MsgUpdateFunder.decode(message.value);
  },
  toProto(message: MsgUpdateFunder): Uint8Array {
    return MsgUpdateFunder.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFunder): MsgUpdateFunderProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder",
      value: MsgUpdateFunder.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateFunderResponse(): MsgUpdateFunderResponse {
  return {};
}
export const MsgUpdateFunderResponse = {
  typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunderResponse",
  encode(_: MsgUpdateFunderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateFunderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateFunderResponse>): MsgUpdateFunderResponse {
    const message = createBaseMsgUpdateFunderResponse();
    return message;
  },
  fromAmino(_: MsgUpdateFunderResponseAmino): MsgUpdateFunderResponse {
    const message = createBaseMsgUpdateFunderResponse();
    return message;
  },
  toAmino(_: MsgUpdateFunderResponse): MsgUpdateFunderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFunderResponseAminoMsg): MsgUpdateFunderResponse {
    return MsgUpdateFunderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFunderResponseProtoMsg): MsgUpdateFunderResponse {
    return MsgUpdateFunderResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFunderResponse): Uint8Array {
    return MsgUpdateFunderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFunderResponse): MsgUpdateFunderResponseProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunderResponse",
      value: MsgUpdateFunderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundPool(): MsgFundPool {
  return {
    creator: "",
    poolId: BigInt(0),
    amount: BigInt(0),
    amountPerBundle: BigInt(0)
  };
}
export const MsgFundPool = {
  typeUrl: "/kyve.funders.v1beta1.MsgFundPool",
  encode(message: MsgFundPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.amountPerBundle !== BigInt(0)) {
      writer.uint32(32).uint64(message.amountPerBundle);
    }
    return writer;
  },
  fromJSON(object: any): MsgFundPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      amountPerBundle: isSet(object.amountPerBundle) ? BigInt(object.amountPerBundle.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgFundPool>): MsgFundPool {
    const message = createBaseMsgFundPool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.amountPerBundle = object.amountPerBundle !== undefined && object.amountPerBundle !== null ? BigInt(object.amountPerBundle.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgFundPoolAmino): MsgFundPool {
    const message = createBaseMsgFundPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.amount_per_bundle !== undefined && object.amount_per_bundle !== null) {
      message.amountPerBundle = BigInt(object.amount_per_bundle);
    }
    return message;
  },
  toAmino(message: MsgFundPool): MsgFundPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.amount_per_bundle = message.amountPerBundle ? message.amountPerBundle.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgFundPoolAminoMsg): MsgFundPool {
    return MsgFundPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundPoolProtoMsg): MsgFundPool {
    return MsgFundPool.decode(message.value);
  },
  toProto(message: MsgFundPool): Uint8Array {
    return MsgFundPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundPool): MsgFundPoolProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgFundPool",
      value: MsgFundPool.encode(message).finish()
    };
  }
};
function createBaseMsgFundPoolResponse(): MsgFundPoolResponse {
  return {};
}
export const MsgFundPoolResponse = {
  typeUrl: "/kyve.funders.v1beta1.MsgFundPoolResponse",
  encode(_: MsgFundPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgFundPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgFundPoolResponse>): MsgFundPoolResponse {
    const message = createBaseMsgFundPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundPoolResponseAmino): MsgFundPoolResponse {
    const message = createBaseMsgFundPoolResponse();
    return message;
  },
  toAmino(_: MsgFundPoolResponse): MsgFundPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundPoolResponseAminoMsg): MsgFundPoolResponse {
    return MsgFundPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundPoolResponseProtoMsg): MsgFundPoolResponse {
    return MsgFundPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundPoolResponse): Uint8Array {
    return MsgFundPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundPoolResponse): MsgFundPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgFundPoolResponse",
      value: MsgFundPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDefundPool(): MsgDefundPool {
  return {
    creator: "",
    poolId: BigInt(0),
    amount: BigInt(0)
  };
}
export const MsgDefundPool = {
  typeUrl: "/kyve.funders.v1beta1.MsgDefundPool",
  encode(message: MsgDefundPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgDefundPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDefundPool>): MsgDefundPool {
    const message = createBaseMsgDefundPool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDefundPoolAmino): MsgDefundPool {
    const message = createBaseMsgDefundPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDefundPool): MsgDefundPoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDefundPoolAminoMsg): MsgDefundPool {
    return MsgDefundPool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefundPoolProtoMsg): MsgDefundPool {
    return MsgDefundPool.decode(message.value);
  },
  toProto(message: MsgDefundPool): Uint8Array {
    return MsgDefundPool.encode(message).finish();
  },
  toProtoMsg(message: MsgDefundPool): MsgDefundPoolProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgDefundPool",
      value: MsgDefundPool.encode(message).finish()
    };
  }
};
function createBaseMsgDefundPoolResponse(): MsgDefundPoolResponse {
  return {};
}
export const MsgDefundPoolResponse = {
  typeUrl: "/kyve.funders.v1beta1.MsgDefundPoolResponse",
  encode(_: MsgDefundPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDefundPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDefundPoolResponse>): MsgDefundPoolResponse {
    const message = createBaseMsgDefundPoolResponse();
    return message;
  },
  fromAmino(_: MsgDefundPoolResponseAmino): MsgDefundPoolResponse {
    const message = createBaseMsgDefundPoolResponse();
    return message;
  },
  toAmino(_: MsgDefundPoolResponse): MsgDefundPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDefundPoolResponseAminoMsg): MsgDefundPoolResponse {
    return MsgDefundPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefundPoolResponseProtoMsg): MsgDefundPoolResponse {
    return MsgDefundPoolResponse.decode(message.value);
  },
  toProto(message: MsgDefundPoolResponse): Uint8Array {
    return MsgDefundPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDefundPoolResponse): MsgDefundPoolResponseProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgDefundPoolResponse",
      value: MsgDefundPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    payload: ""
  };
}
export const MsgUpdateParams = {
  typeUrl: "/kyve.funders.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/kyve.funders.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};