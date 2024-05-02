import { Position, positionFromJSON } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface MsgOpen {
  signer: string;
  collateralAsset: string;
  collateralAmount: string;
  borrowAsset: string;
  position: Position;
  leverage: string;
}
export interface MsgOpenProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgOpen";
  value: Uint8Array;
}
export interface MsgOpenAmino {
  signer?: string;
  collateral_asset?: string;
  collateral_amount?: string;
  borrow_asset?: string;
  position?: Position;
  leverage?: string;
}
export interface MsgOpenAminoMsg {
  type: "/sifnode.margin.v1.MsgOpen";
  value: MsgOpenAmino;
}
export interface MsgOpenSDKType {
  signer: string;
  collateral_asset: string;
  collateral_amount: string;
  borrow_asset: string;
  position: Position;
  leverage: string;
}
export interface MsgOpenResponse {}
export interface MsgOpenResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgOpenResponse";
  value: Uint8Array;
}
export interface MsgOpenResponseAmino {}
export interface MsgOpenResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgOpenResponse";
  value: MsgOpenResponseAmino;
}
export interface MsgOpenResponseSDKType {}
export interface MsgClose {
  signer: string;
  id: bigint;
}
export interface MsgCloseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgClose";
  value: Uint8Array;
}
export interface MsgCloseAmino {
  signer?: string;
  id?: string;
}
export interface MsgCloseAminoMsg {
  type: "/sifnode.margin.v1.MsgClose";
  value: MsgCloseAmino;
}
export interface MsgCloseSDKType {
  signer: string;
  id: bigint;
}
export interface MsgCloseResponse {}
export interface MsgCloseResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgCloseResponse";
  value: Uint8Array;
}
export interface MsgCloseResponseAmino {}
export interface MsgCloseResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgCloseResponse";
  value: MsgCloseResponseAmino;
}
export interface MsgCloseResponseSDKType {}
export interface MsgForceClose {
  signer: string;
  mtpAddress: string;
  id: bigint;
}
export interface MsgForceCloseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgForceClose";
  value: Uint8Array;
}
export interface MsgForceCloseAmino {
  signer?: string;
  mtp_address?: string;
  id?: string;
}
export interface MsgForceCloseAminoMsg {
  type: "/sifnode.margin.v1.MsgForceClose";
  value: MsgForceCloseAmino;
}
export interface MsgForceCloseSDKType {
  signer: string;
  mtp_address: string;
  id: bigint;
}
export interface MsgForceCloseResponse {}
export interface MsgForceCloseResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgForceCloseResponse";
  value: Uint8Array;
}
export interface MsgForceCloseResponseAmino {}
export interface MsgForceCloseResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgForceCloseResponse";
  value: MsgForceCloseResponseAmino;
}
export interface MsgForceCloseResponseSDKType {}
export interface MsgUpdateParams {
  signer: string;
  params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  signer?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/sifnode.margin.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  signer: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgUpdatePools {
  signer: string;
  pools: string[];
  closedPools: string[];
}
export interface MsgUpdatePoolsProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgUpdatePools";
  value: Uint8Array;
}
export interface MsgUpdatePoolsAmino {
  signer?: string;
  pools?: string[];
  closed_pools?: string[];
}
export interface MsgUpdatePoolsAminoMsg {
  type: "/sifnode.margin.v1.MsgUpdatePools";
  value: MsgUpdatePoolsAmino;
}
export interface MsgUpdatePoolsSDKType {
  signer: string;
  pools: string[];
  closed_pools: string[];
}
export interface MsgUpdatePoolsResponse {}
export interface MsgUpdatePoolsResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgUpdatePoolsResponse";
  value: Uint8Array;
}
export interface MsgUpdatePoolsResponseAmino {}
export interface MsgUpdatePoolsResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgUpdatePoolsResponse";
  value: MsgUpdatePoolsResponseAmino;
}
export interface MsgUpdatePoolsResponseSDKType {}
export interface MsgUpdateRowanCollateral {
  signer: string;
  rowanCollateralEnabled: boolean;
}
export interface MsgUpdateRowanCollateralProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateral";
  value: Uint8Array;
}
export interface MsgUpdateRowanCollateralAmino {
  signer?: string;
  rowan_collateral_enabled?: boolean;
}
export interface MsgUpdateRowanCollateralAminoMsg {
  type: "/sifnode.margin.v1.MsgUpdateRowanCollateral";
  value: MsgUpdateRowanCollateralAmino;
}
export interface MsgUpdateRowanCollateralSDKType {
  signer: string;
  rowan_collateral_enabled: boolean;
}
export interface MsgUpdateRowanCollateralResponse {}
export interface MsgUpdateRowanCollateralResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateralResponse";
  value: Uint8Array;
}
export interface MsgUpdateRowanCollateralResponseAmino {}
export interface MsgUpdateRowanCollateralResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgUpdateRowanCollateralResponse";
  value: MsgUpdateRowanCollateralResponseAmino;
}
export interface MsgUpdateRowanCollateralResponseSDKType {}
export interface MsgWhitelist {
  signer: string;
  whitelistedAddress: string;
}
export interface MsgWhitelistProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgWhitelist";
  value: Uint8Array;
}
export interface MsgWhitelistAmino {
  signer?: string;
  whitelisted_address?: string;
}
export interface MsgWhitelistAminoMsg {
  type: "/sifnode.margin.v1.MsgWhitelist";
  value: MsgWhitelistAmino;
}
export interface MsgWhitelistSDKType {
  signer: string;
  whitelisted_address: string;
}
export interface MsgWhitelistResponse {}
export interface MsgWhitelistResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgWhitelistResponse";
  value: Uint8Array;
}
export interface MsgWhitelistResponseAmino {}
export interface MsgWhitelistResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgWhitelistResponse";
  value: MsgWhitelistResponseAmino;
}
export interface MsgWhitelistResponseSDKType {}
export interface MsgDewhitelist {
  signer: string;
  whitelistedAddress: string;
}
export interface MsgDewhitelistProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgDewhitelist";
  value: Uint8Array;
}
export interface MsgDewhitelistAmino {
  signer?: string;
  whitelisted_address?: string;
}
export interface MsgDewhitelistAminoMsg {
  type: "/sifnode.margin.v1.MsgDewhitelist";
  value: MsgDewhitelistAmino;
}
export interface MsgDewhitelistSDKType {
  signer: string;
  whitelisted_address: string;
}
export interface MsgDewhitelistResponse {}
export interface MsgDewhitelistResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgDewhitelistResponse";
  value: Uint8Array;
}
export interface MsgDewhitelistResponseAmino {}
export interface MsgDewhitelistResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgDewhitelistResponse";
  value: MsgDewhitelistResponseAmino;
}
export interface MsgDewhitelistResponseSDKType {}
export interface MsgAdminCloseAll {
  signer: string;
  takeMarginFund: boolean;
}
export interface MsgAdminCloseAllProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgAdminCloseAll";
  value: Uint8Array;
}
export interface MsgAdminCloseAllAmino {
  signer?: string;
  take_margin_fund?: boolean;
}
export interface MsgAdminCloseAllAminoMsg {
  type: "/sifnode.margin.v1.MsgAdminCloseAll";
  value: MsgAdminCloseAllAmino;
}
export interface MsgAdminCloseAllSDKType {
  signer: string;
  take_margin_fund: boolean;
}
export interface MsgAdminCloseAllResponse {}
export interface MsgAdminCloseAllResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgAdminCloseAllResponse";
  value: Uint8Array;
}
export interface MsgAdminCloseAllResponseAmino {}
export interface MsgAdminCloseAllResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgAdminCloseAllResponse";
  value: MsgAdminCloseAllResponseAmino;
}
export interface MsgAdminCloseAllResponseSDKType {}
export interface MsgAdminClose {
  signer: string;
  mtpAddress: string;
  id: bigint;
  takeMarginFund: boolean;
}
export interface MsgAdminCloseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgAdminClose";
  value: Uint8Array;
}
export interface MsgAdminCloseAmino {
  signer?: string;
  mtp_address?: string;
  id?: string;
  take_margin_fund?: boolean;
}
export interface MsgAdminCloseAminoMsg {
  type: "/sifnode.margin.v1.MsgAdminClose";
  value: MsgAdminCloseAmino;
}
export interface MsgAdminCloseSDKType {
  signer: string;
  mtp_address: string;
  id: bigint;
  take_margin_fund: boolean;
}
export interface MsgAdminCloseResponse {}
export interface MsgAdminCloseResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MsgAdminCloseResponse";
  value: Uint8Array;
}
export interface MsgAdminCloseResponseAmino {}
export interface MsgAdminCloseResponseAminoMsg {
  type: "/sifnode.margin.v1.MsgAdminCloseResponse";
  value: MsgAdminCloseResponseAmino;
}
export interface MsgAdminCloseResponseSDKType {}
function createBaseMsgOpen(): MsgOpen {
  return {
    signer: "",
    collateralAsset: "",
    collateralAmount: "",
    borrowAsset: "",
    position: 0,
    leverage: ""
  };
}
export const MsgOpen = {
  typeUrl: "/sifnode.margin.v1.MsgOpen",
  encode(message: MsgOpen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.collateralAsset !== "") {
      writer.uint32(18).string(message.collateralAsset);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    if (message.borrowAsset !== "") {
      writer.uint32(34).string(message.borrowAsset);
    }
    if (message.position !== 0) {
      writer.uint32(40).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgOpen {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      collateralAsset: isSet(object.collateralAsset) ? String(object.collateralAsset) : "",
      collateralAmount: isSet(object.collateralAmount) ? String(object.collateralAmount) : "",
      borrowAsset: isSet(object.borrowAsset) ? String(object.borrowAsset) : "",
      position: isSet(object.position) ? positionFromJSON(object.position) : -1,
      leverage: isSet(object.leverage) ? String(object.leverage) : ""
    };
  },
  fromPartial(object: Partial<MsgOpen>): MsgOpen {
    const message = createBaseMsgOpen();
    message.signer = object.signer ?? "";
    message.collateralAsset = object.collateralAsset ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.borrowAsset = object.borrowAsset ?? "";
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    return message;
  },
  fromAmino(object: MsgOpenAmino): MsgOpen {
    const message = createBaseMsgOpen();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.collateral_asset !== undefined && object.collateral_asset !== null) {
      message.collateralAsset = object.collateral_asset;
    }
    if (object.collateral_amount !== undefined && object.collateral_amount !== null) {
      message.collateralAmount = object.collateral_amount;
    }
    if (object.borrow_asset !== undefined && object.borrow_asset !== null) {
      message.borrowAsset = object.borrow_asset;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    return message;
  },
  toAmino(message: MsgOpen): MsgOpenAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.collateral_asset = message.collateralAsset === "" ? undefined : message.collateralAsset;
    obj.collateral_amount = message.collateralAmount === "" ? undefined : message.collateralAmount;
    obj.borrow_asset = message.borrowAsset === "" ? undefined : message.borrowAsset;
    obj.position = message.position === 0 ? undefined : message.position;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    return obj;
  },
  fromAminoMsg(object: MsgOpenAminoMsg): MsgOpen {
    return MsgOpen.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOpenProtoMsg): MsgOpen {
    return MsgOpen.decode(message.value);
  },
  toProto(message: MsgOpen): Uint8Array {
    return MsgOpen.encode(message).finish();
  },
  toProtoMsg(message: MsgOpen): MsgOpenProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgOpen",
      value: MsgOpen.encode(message).finish()
    };
  }
};
function createBaseMsgOpenResponse(): MsgOpenResponse {
  return {};
}
export const MsgOpenResponse = {
  typeUrl: "/sifnode.margin.v1.MsgOpenResponse",
  encode(_: MsgOpenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgOpenResponse {
    return {};
  },
  fromPartial(_: Partial<MsgOpenResponse>): MsgOpenResponse {
    const message = createBaseMsgOpenResponse();
    return message;
  },
  fromAmino(_: MsgOpenResponseAmino): MsgOpenResponse {
    const message = createBaseMsgOpenResponse();
    return message;
  },
  toAmino(_: MsgOpenResponse): MsgOpenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgOpenResponseAminoMsg): MsgOpenResponse {
    return MsgOpenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgOpenResponseProtoMsg): MsgOpenResponse {
    return MsgOpenResponse.decode(message.value);
  },
  toProto(message: MsgOpenResponse): Uint8Array {
    return MsgOpenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgOpenResponse): MsgOpenResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgOpenResponse",
      value: MsgOpenResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClose(): MsgClose {
  return {
    signer: "",
    id: BigInt(0)
  };
}
export const MsgClose = {
  typeUrl: "/sifnode.margin.v1.MsgClose",
  encode(message: MsgClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgClose {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgClose>): MsgClose {
    const message = createBaseMsgClose();
    message.signer = object.signer ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCloseAmino): MsgClose {
    const message = createBaseMsgClose();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgClose): MsgCloseAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseAminoMsg): MsgClose {
    return MsgClose.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseProtoMsg): MsgClose {
    return MsgClose.decode(message.value);
  },
  toProto(message: MsgClose): Uint8Array {
    return MsgClose.encode(message).finish();
  },
  toProtoMsg(message: MsgClose): MsgCloseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgClose",
      value: MsgClose.encode(message).finish()
    };
  }
};
function createBaseMsgCloseResponse(): MsgCloseResponse {
  return {};
}
export const MsgCloseResponse = {
  typeUrl: "/sifnode.margin.v1.MsgCloseResponse",
  encode(_: MsgCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCloseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCloseResponse>): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    return message;
  },
  fromAmino(_: MsgCloseResponseAmino): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    return message;
  },
  toAmino(_: MsgCloseResponse): MsgCloseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseResponseAminoMsg): MsgCloseResponse {
    return MsgCloseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseResponseProtoMsg): MsgCloseResponse {
    return MsgCloseResponse.decode(message.value);
  },
  toProto(message: MsgCloseResponse): Uint8Array {
    return MsgCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseResponse): MsgCloseResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgCloseResponse",
      value: MsgCloseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForceClose(): MsgForceClose {
  return {
    signer: "",
    mtpAddress: "",
    id: BigInt(0)
  };
}
export const MsgForceClose = {
  typeUrl: "/sifnode.margin.v1.MsgForceClose",
  encode(message: MsgForceClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.mtpAddress !== "") {
      writer.uint32(18).string(message.mtpAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgForceClose {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      mtpAddress: isSet(object.mtpAddress) ? String(object.mtpAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgForceClose>): MsgForceClose {
    const message = createBaseMsgForceClose();
    message.signer = object.signer ?? "";
    message.mtpAddress = object.mtpAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgForceCloseAmino): MsgForceClose {
    const message = createBaseMsgForceClose();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.mtp_address !== undefined && object.mtp_address !== null) {
      message.mtpAddress = object.mtp_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgForceClose): MsgForceCloseAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.mtp_address = message.mtpAddress === "" ? undefined : message.mtpAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgForceCloseAminoMsg): MsgForceClose {
    return MsgForceClose.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForceCloseProtoMsg): MsgForceClose {
    return MsgForceClose.decode(message.value);
  },
  toProto(message: MsgForceClose): Uint8Array {
    return MsgForceClose.encode(message).finish();
  },
  toProtoMsg(message: MsgForceClose): MsgForceCloseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgForceClose",
      value: MsgForceClose.encode(message).finish()
    };
  }
};
function createBaseMsgForceCloseResponse(): MsgForceCloseResponse {
  return {};
}
export const MsgForceCloseResponse = {
  typeUrl: "/sifnode.margin.v1.MsgForceCloseResponse",
  encode(_: MsgForceCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgForceCloseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgForceCloseResponse>): MsgForceCloseResponse {
    const message = createBaseMsgForceCloseResponse();
    return message;
  },
  fromAmino(_: MsgForceCloseResponseAmino): MsgForceCloseResponse {
    const message = createBaseMsgForceCloseResponse();
    return message;
  },
  toAmino(_: MsgForceCloseResponse): MsgForceCloseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgForceCloseResponseAminoMsg): MsgForceCloseResponse {
    return MsgForceCloseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForceCloseResponseProtoMsg): MsgForceCloseResponse {
    return MsgForceCloseResponse.decode(message.value);
  },
  toProto(message: MsgForceCloseResponse): Uint8Array {
    return MsgForceCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceCloseResponse): MsgForceCloseResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgForceCloseResponse",
      value: MsgForceCloseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    signer: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  typeUrl: "/sifnode.margin.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/sifnode.margin.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/sifnode.margin.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sifnode.margin.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePools(): MsgUpdatePools {
  return {
    signer: "",
    pools: [],
    closedPools: []
  };
}
export const MsgUpdatePools = {
  typeUrl: "/sifnode.margin.v1.MsgUpdatePools",
  encode(message: MsgUpdatePools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.pools) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.closedPools) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePools {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => String(e)) : [],
      closedPools: Array.isArray(object?.closedPools) ? object.closedPools.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUpdatePools>): MsgUpdatePools {
    const message = createBaseMsgUpdatePools();
    message.signer = object.signer ?? "";
    message.pools = object.pools?.map(e => e) || [];
    message.closedPools = object.closedPools?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdatePoolsAmino): MsgUpdatePools {
    const message = createBaseMsgUpdatePools();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.pools = object.pools?.map(e => e) || [];
    message.closedPools = object.closed_pools?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdatePools): MsgUpdatePoolsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.pools) {
      obj.pools = message.pools.map(e => e);
    } else {
      obj.pools = message.pools;
    }
    if (message.closedPools) {
      obj.closed_pools = message.closedPools.map(e => e);
    } else {
      obj.closed_pools = message.closedPools;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolsAminoMsg): MsgUpdatePools {
    return MsgUpdatePools.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolsProtoMsg): MsgUpdatePools {
    return MsgUpdatePools.decode(message.value);
  },
  toProto(message: MsgUpdatePools): Uint8Array {
    return MsgUpdatePools.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePools): MsgUpdatePoolsProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgUpdatePools",
      value: MsgUpdatePools.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePoolsResponse(): MsgUpdatePoolsResponse {
  return {};
}
export const MsgUpdatePoolsResponse = {
  typeUrl: "/sifnode.margin.v1.MsgUpdatePoolsResponse",
  encode(_: MsgUpdatePoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePoolsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePoolsResponse>): MsgUpdatePoolsResponse {
    const message = createBaseMsgUpdatePoolsResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePoolsResponseAmino): MsgUpdatePoolsResponse {
    const message = createBaseMsgUpdatePoolsResponse();
    return message;
  },
  toAmino(_: MsgUpdatePoolsResponse): MsgUpdatePoolsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolsResponseAminoMsg): MsgUpdatePoolsResponse {
    return MsgUpdatePoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolsResponseProtoMsg): MsgUpdatePoolsResponse {
    return MsgUpdatePoolsResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePoolsResponse): Uint8Array {
    return MsgUpdatePoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolsResponse): MsgUpdatePoolsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgUpdatePoolsResponse",
      value: MsgUpdatePoolsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRowanCollateral(): MsgUpdateRowanCollateral {
  return {
    signer: "",
    rowanCollateralEnabled: false
  };
}
export const MsgUpdateRowanCollateral = {
  typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateral",
  encode(message: MsgUpdateRowanCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.rowanCollateralEnabled === true) {
      writer.uint32(16).bool(message.rowanCollateralEnabled);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRowanCollateral {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      rowanCollateralEnabled: isSet(object.rowanCollateralEnabled) ? Boolean(object.rowanCollateralEnabled) : false
    };
  },
  fromPartial(object: Partial<MsgUpdateRowanCollateral>): MsgUpdateRowanCollateral {
    const message = createBaseMsgUpdateRowanCollateral();
    message.signer = object.signer ?? "";
    message.rowanCollateralEnabled = object.rowanCollateralEnabled ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateRowanCollateralAmino): MsgUpdateRowanCollateral {
    const message = createBaseMsgUpdateRowanCollateral();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.rowan_collateral_enabled !== undefined && object.rowan_collateral_enabled !== null) {
      message.rowanCollateralEnabled = object.rowan_collateral_enabled;
    }
    return message;
  },
  toAmino(message: MsgUpdateRowanCollateral): MsgUpdateRowanCollateralAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.rowan_collateral_enabled = message.rowanCollateralEnabled === false ? undefined : message.rowanCollateralEnabled;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRowanCollateralAminoMsg): MsgUpdateRowanCollateral {
    return MsgUpdateRowanCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRowanCollateralProtoMsg): MsgUpdateRowanCollateral {
    return MsgUpdateRowanCollateral.decode(message.value);
  },
  toProto(message: MsgUpdateRowanCollateral): Uint8Array {
    return MsgUpdateRowanCollateral.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRowanCollateral): MsgUpdateRowanCollateralProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateral",
      value: MsgUpdateRowanCollateral.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRowanCollateralResponse(): MsgUpdateRowanCollateralResponse {
  return {};
}
export const MsgUpdateRowanCollateralResponse = {
  typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateralResponse",
  encode(_: MsgUpdateRowanCollateralResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRowanCollateralResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRowanCollateralResponse>): MsgUpdateRowanCollateralResponse {
    const message = createBaseMsgUpdateRowanCollateralResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRowanCollateralResponseAmino): MsgUpdateRowanCollateralResponse {
    const message = createBaseMsgUpdateRowanCollateralResponse();
    return message;
  },
  toAmino(_: MsgUpdateRowanCollateralResponse): MsgUpdateRowanCollateralResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRowanCollateralResponseAminoMsg): MsgUpdateRowanCollateralResponse {
    return MsgUpdateRowanCollateralResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRowanCollateralResponseProtoMsg): MsgUpdateRowanCollateralResponse {
    return MsgUpdateRowanCollateralResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRowanCollateralResponse): Uint8Array {
    return MsgUpdateRowanCollateralResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRowanCollateralResponse): MsgUpdateRowanCollateralResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateralResponse",
      value: MsgUpdateRowanCollateralResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelist(): MsgWhitelist {
  return {
    signer: "",
    whitelistedAddress: ""
  };
}
export const MsgWhitelist = {
  typeUrl: "/sifnode.margin.v1.MsgWhitelist",
  encode(message: MsgWhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.whitelistedAddress !== "") {
      writer.uint32(18).string(message.whitelistedAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgWhitelist {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      whitelistedAddress: isSet(object.whitelistedAddress) ? String(object.whitelistedAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgWhitelist>): MsgWhitelist {
    const message = createBaseMsgWhitelist();
    message.signer = object.signer ?? "";
    message.whitelistedAddress = object.whitelistedAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWhitelistAmino): MsgWhitelist {
    const message = createBaseMsgWhitelist();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.whitelisted_address !== undefined && object.whitelisted_address !== null) {
      message.whitelistedAddress = object.whitelisted_address;
    }
    return message;
  },
  toAmino(message: MsgWhitelist): MsgWhitelistAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.whitelisted_address = message.whitelistedAddress === "" ? undefined : message.whitelistedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistAminoMsg): MsgWhitelist {
    return MsgWhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistProtoMsg): MsgWhitelist {
    return MsgWhitelist.decode(message.value);
  },
  toProto(message: MsgWhitelist): Uint8Array {
    return MsgWhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelist): MsgWhitelistProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgWhitelist",
      value: MsgWhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgWhitelistResponse(): MsgWhitelistResponse {
  return {};
}
export const MsgWhitelistResponse = {
  typeUrl: "/sifnode.margin.v1.MsgWhitelistResponse",
  encode(_: MsgWhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWhitelistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWhitelistResponse>): MsgWhitelistResponse {
    const message = createBaseMsgWhitelistResponse();
    return message;
  },
  fromAmino(_: MsgWhitelistResponseAmino): MsgWhitelistResponse {
    const message = createBaseMsgWhitelistResponse();
    return message;
  },
  toAmino(_: MsgWhitelistResponse): MsgWhitelistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistResponseAminoMsg): MsgWhitelistResponse {
    return MsgWhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistResponseProtoMsg): MsgWhitelistResponse {
    return MsgWhitelistResponse.decode(message.value);
  },
  toProto(message: MsgWhitelistResponse): Uint8Array {
    return MsgWhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistResponse): MsgWhitelistResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgWhitelistResponse",
      value: MsgWhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDewhitelist(): MsgDewhitelist {
  return {
    signer: "",
    whitelistedAddress: ""
  };
}
export const MsgDewhitelist = {
  typeUrl: "/sifnode.margin.v1.MsgDewhitelist",
  encode(message: MsgDewhitelist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.whitelistedAddress !== "") {
      writer.uint32(18).string(message.whitelistedAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgDewhitelist {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      whitelistedAddress: isSet(object.whitelistedAddress) ? String(object.whitelistedAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgDewhitelist>): MsgDewhitelist {
    const message = createBaseMsgDewhitelist();
    message.signer = object.signer ?? "";
    message.whitelistedAddress = object.whitelistedAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDewhitelistAmino): MsgDewhitelist {
    const message = createBaseMsgDewhitelist();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.whitelisted_address !== undefined && object.whitelisted_address !== null) {
      message.whitelistedAddress = object.whitelisted_address;
    }
    return message;
  },
  toAmino(message: MsgDewhitelist): MsgDewhitelistAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.whitelisted_address = message.whitelistedAddress === "" ? undefined : message.whitelistedAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDewhitelistAminoMsg): MsgDewhitelist {
    return MsgDewhitelist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDewhitelistProtoMsg): MsgDewhitelist {
    return MsgDewhitelist.decode(message.value);
  },
  toProto(message: MsgDewhitelist): Uint8Array {
    return MsgDewhitelist.encode(message).finish();
  },
  toProtoMsg(message: MsgDewhitelist): MsgDewhitelistProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgDewhitelist",
      value: MsgDewhitelist.encode(message).finish()
    };
  }
};
function createBaseMsgDewhitelistResponse(): MsgDewhitelistResponse {
  return {};
}
export const MsgDewhitelistResponse = {
  typeUrl: "/sifnode.margin.v1.MsgDewhitelistResponse",
  encode(_: MsgDewhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDewhitelistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDewhitelistResponse>): MsgDewhitelistResponse {
    const message = createBaseMsgDewhitelistResponse();
    return message;
  },
  fromAmino(_: MsgDewhitelistResponseAmino): MsgDewhitelistResponse {
    const message = createBaseMsgDewhitelistResponse();
    return message;
  },
  toAmino(_: MsgDewhitelistResponse): MsgDewhitelistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDewhitelistResponseAminoMsg): MsgDewhitelistResponse {
    return MsgDewhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDewhitelistResponseProtoMsg): MsgDewhitelistResponse {
    return MsgDewhitelistResponse.decode(message.value);
  },
  toProto(message: MsgDewhitelistResponse): Uint8Array {
    return MsgDewhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDewhitelistResponse): MsgDewhitelistResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgDewhitelistResponse",
      value: MsgDewhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAdminCloseAll(): MsgAdminCloseAll {
  return {
    signer: "",
    takeMarginFund: false
  };
}
export const MsgAdminCloseAll = {
  typeUrl: "/sifnode.margin.v1.MsgAdminCloseAll",
  encode(message: MsgAdminCloseAll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.takeMarginFund === true) {
      writer.uint32(16).bool(message.takeMarginFund);
    }
    return writer;
  },
  fromJSON(object: any): MsgAdminCloseAll {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      takeMarginFund: isSet(object.takeMarginFund) ? Boolean(object.takeMarginFund) : false
    };
  },
  fromPartial(object: Partial<MsgAdminCloseAll>): MsgAdminCloseAll {
    const message = createBaseMsgAdminCloseAll();
    message.signer = object.signer ?? "";
    message.takeMarginFund = object.takeMarginFund ?? false;
    return message;
  },
  fromAmino(object: MsgAdminCloseAllAmino): MsgAdminCloseAll {
    const message = createBaseMsgAdminCloseAll();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.take_margin_fund !== undefined && object.take_margin_fund !== null) {
      message.takeMarginFund = object.take_margin_fund;
    }
    return message;
  },
  toAmino(message: MsgAdminCloseAll): MsgAdminCloseAllAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.take_margin_fund = message.takeMarginFund === false ? undefined : message.takeMarginFund;
    return obj;
  },
  fromAminoMsg(object: MsgAdminCloseAllAminoMsg): MsgAdminCloseAll {
    return MsgAdminCloseAll.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAdminCloseAllProtoMsg): MsgAdminCloseAll {
    return MsgAdminCloseAll.decode(message.value);
  },
  toProto(message: MsgAdminCloseAll): Uint8Array {
    return MsgAdminCloseAll.encode(message).finish();
  },
  toProtoMsg(message: MsgAdminCloseAll): MsgAdminCloseAllProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgAdminCloseAll",
      value: MsgAdminCloseAll.encode(message).finish()
    };
  }
};
function createBaseMsgAdminCloseAllResponse(): MsgAdminCloseAllResponse {
  return {};
}
export const MsgAdminCloseAllResponse = {
  typeUrl: "/sifnode.margin.v1.MsgAdminCloseAllResponse",
  encode(_: MsgAdminCloseAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAdminCloseAllResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAdminCloseAllResponse>): MsgAdminCloseAllResponse {
    const message = createBaseMsgAdminCloseAllResponse();
    return message;
  },
  fromAmino(_: MsgAdminCloseAllResponseAmino): MsgAdminCloseAllResponse {
    const message = createBaseMsgAdminCloseAllResponse();
    return message;
  },
  toAmino(_: MsgAdminCloseAllResponse): MsgAdminCloseAllResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAdminCloseAllResponseAminoMsg): MsgAdminCloseAllResponse {
    return MsgAdminCloseAllResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAdminCloseAllResponseProtoMsg): MsgAdminCloseAllResponse {
    return MsgAdminCloseAllResponse.decode(message.value);
  },
  toProto(message: MsgAdminCloseAllResponse): Uint8Array {
    return MsgAdminCloseAllResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAdminCloseAllResponse): MsgAdminCloseAllResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgAdminCloseAllResponse",
      value: MsgAdminCloseAllResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAdminClose(): MsgAdminClose {
  return {
    signer: "",
    mtpAddress: "",
    id: BigInt(0),
    takeMarginFund: false
  };
}
export const MsgAdminClose = {
  typeUrl: "/sifnode.margin.v1.MsgAdminClose",
  encode(message: MsgAdminClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.mtpAddress !== "") {
      writer.uint32(18).string(message.mtpAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.takeMarginFund === true) {
      writer.uint32(32).bool(message.takeMarginFund);
    }
    return writer;
  },
  fromJSON(object: any): MsgAdminClose {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      mtpAddress: isSet(object.mtpAddress) ? String(object.mtpAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      takeMarginFund: isSet(object.takeMarginFund) ? Boolean(object.takeMarginFund) : false
    };
  },
  fromPartial(object: Partial<MsgAdminClose>): MsgAdminClose {
    const message = createBaseMsgAdminClose();
    message.signer = object.signer ?? "";
    message.mtpAddress = object.mtpAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.takeMarginFund = object.takeMarginFund ?? false;
    return message;
  },
  fromAmino(object: MsgAdminCloseAmino): MsgAdminClose {
    const message = createBaseMsgAdminClose();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.mtp_address !== undefined && object.mtp_address !== null) {
      message.mtpAddress = object.mtp_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.take_margin_fund !== undefined && object.take_margin_fund !== null) {
      message.takeMarginFund = object.take_margin_fund;
    }
    return message;
  },
  toAmino(message: MsgAdminClose): MsgAdminCloseAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.mtp_address = message.mtpAddress === "" ? undefined : message.mtpAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.take_margin_fund = message.takeMarginFund === false ? undefined : message.takeMarginFund;
    return obj;
  },
  fromAminoMsg(object: MsgAdminCloseAminoMsg): MsgAdminClose {
    return MsgAdminClose.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAdminCloseProtoMsg): MsgAdminClose {
    return MsgAdminClose.decode(message.value);
  },
  toProto(message: MsgAdminClose): Uint8Array {
    return MsgAdminClose.encode(message).finish();
  },
  toProtoMsg(message: MsgAdminClose): MsgAdminCloseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgAdminClose",
      value: MsgAdminClose.encode(message).finish()
    };
  }
};
function createBaseMsgAdminCloseResponse(): MsgAdminCloseResponse {
  return {};
}
export const MsgAdminCloseResponse = {
  typeUrl: "/sifnode.margin.v1.MsgAdminCloseResponse",
  encode(_: MsgAdminCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAdminCloseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAdminCloseResponse>): MsgAdminCloseResponse {
    const message = createBaseMsgAdminCloseResponse();
    return message;
  },
  fromAmino(_: MsgAdminCloseResponseAmino): MsgAdminCloseResponse {
    const message = createBaseMsgAdminCloseResponse();
    return message;
  },
  toAmino(_: MsgAdminCloseResponse): MsgAdminCloseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAdminCloseResponseAminoMsg): MsgAdminCloseResponse {
    return MsgAdminCloseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAdminCloseResponseProtoMsg): MsgAdminCloseResponse {
    return MsgAdminCloseResponse.decode(message.value);
  },
  toProto(message: MsgAdminCloseResponse): Uint8Array {
    return MsgAdminCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAdminCloseResponse): MsgAdminCloseResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MsgAdminCloseResponse",
      value: MsgAdminCloseResponse.encode(message).finish()
    };
  }
};