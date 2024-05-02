import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export enum Position {
  UNSPECIFIED = 0,
  LONG = 1,
  SHORT = 2,
  UNRECOGNIZED = -1,
}
export const PositionSDKType = Position;
export const PositionAmino = Position;
export function positionFromJSON(object: any): Position {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Position.UNSPECIFIED;
    case 1:
    case "LONG":
      return Position.LONG;
    case 2:
    case "SHORT":
      return Position.SHORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Position.UNRECOGNIZED;
  }
}
export function positionToJSON(object: Position): string {
  switch (object) {
    case Position.UNSPECIFIED:
      return "UNSPECIFIED";
    case Position.LONG:
      return "LONG";
    case Position.SHORT:
      return "SHORT";
    case Position.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MTP {
  address: string;
  collateralAsset: string;
  collateralAmount: string;
  liabilities: string;
  interestPaidCollateral: string;
  interestPaidCustody: string;
  interestUnpaidCollateral: string;
  custodyAsset: string;
  custodyAmount: string;
  leverage: string;
  mtpHealth: string;
  position: Position;
  id: bigint;
}
export interface MTPProtoMsg {
  typeUrl: "/sifnode.margin.v1.MTP";
  value: Uint8Array;
}
export interface MTPAmino {
  address?: string;
  collateral_asset?: string;
  collateral_amount?: string;
  liabilities?: string;
  interest_paid_collateral?: string;
  interest_paid_custody?: string;
  interest_unpaid_collateral?: string;
  custody_asset?: string;
  custody_amount?: string;
  leverage?: string;
  mtp_health?: string;
  position?: Position;
  id?: string;
}
export interface MTPAminoMsg {
  type: "/sifnode.margin.v1.MTP";
  value: MTPAmino;
}
export interface MTPSDKType {
  address: string;
  collateral_asset: string;
  collateral_amount: string;
  liabilities: string;
  interest_paid_collateral: string;
  interest_paid_custody: string;
  interest_unpaid_collateral: string;
  custody_asset: string;
  custody_amount: string;
  leverage: string;
  mtp_health: string;
  position: Position;
  id: bigint;
}
function createBaseMTP(): MTP {
  return {
    address: "",
    collateralAsset: "",
    collateralAmount: "",
    liabilities: "",
    interestPaidCollateral: "",
    interestPaidCustody: "",
    interestUnpaidCollateral: "",
    custodyAsset: "",
    custodyAmount: "",
    leverage: "",
    mtpHealth: "",
    position: 0,
    id: BigInt(0)
  };
}
export const MTP = {
  typeUrl: "/sifnode.margin.v1.MTP",
  encode(message: MTP, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.collateralAsset !== "") {
      writer.uint32(18).string(message.collateralAsset);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    if (message.liabilities !== "") {
      writer.uint32(34).string(message.liabilities);
    }
    if (message.interestPaidCollateral !== "") {
      writer.uint32(42).string(message.interestPaidCollateral);
    }
    if (message.interestPaidCustody !== "") {
      writer.uint32(50).string(message.interestPaidCustody);
    }
    if (message.interestUnpaidCollateral !== "") {
      writer.uint32(58).string(message.interestUnpaidCollateral);
    }
    if (message.custodyAsset !== "") {
      writer.uint32(66).string(message.custodyAsset);
    }
    if (message.custodyAmount !== "") {
      writer.uint32(74).string(message.custodyAmount);
    }
    if (message.leverage !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.mtpHealth !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.mtpHealth, 18).atomics);
    }
    if (message.position !== 0) {
      writer.uint32(96).int32(message.position);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(104).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MTP {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      collateralAsset: isSet(object.collateralAsset) ? String(object.collateralAsset) : "",
      collateralAmount: isSet(object.collateralAmount) ? String(object.collateralAmount) : "",
      liabilities: isSet(object.liabilities) ? String(object.liabilities) : "",
      interestPaidCollateral: isSet(object.interestPaidCollateral) ? String(object.interestPaidCollateral) : "",
      interestPaidCustody: isSet(object.interestPaidCustody) ? String(object.interestPaidCustody) : "",
      interestUnpaidCollateral: isSet(object.interestUnpaidCollateral) ? String(object.interestUnpaidCollateral) : "",
      custodyAsset: isSet(object.custodyAsset) ? String(object.custodyAsset) : "",
      custodyAmount: isSet(object.custodyAmount) ? String(object.custodyAmount) : "",
      leverage: isSet(object.leverage) ? String(object.leverage) : "",
      mtpHealth: isSet(object.mtpHealth) ? String(object.mtpHealth) : "",
      position: isSet(object.position) ? positionFromJSON(object.position) : -1,
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MTP>): MTP {
    const message = createBaseMTP();
    message.address = object.address ?? "";
    message.collateralAsset = object.collateralAsset ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.liabilities = object.liabilities ?? "";
    message.interestPaidCollateral = object.interestPaidCollateral ?? "";
    message.interestPaidCustody = object.interestPaidCustody ?? "";
    message.interestUnpaidCollateral = object.interestUnpaidCollateral ?? "";
    message.custodyAsset = object.custodyAsset ?? "";
    message.custodyAmount = object.custodyAmount ?? "";
    message.leverage = object.leverage ?? "";
    message.mtpHealth = object.mtpHealth ?? "";
    message.position = object.position ?? 0;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MTPAmino): MTP {
    const message = createBaseMTP();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.collateral_asset !== undefined && object.collateral_asset !== null) {
      message.collateralAsset = object.collateral_asset;
    }
    if (object.collateral_amount !== undefined && object.collateral_amount !== null) {
      message.collateralAmount = object.collateral_amount;
    }
    if (object.liabilities !== undefined && object.liabilities !== null) {
      message.liabilities = object.liabilities;
    }
    if (object.interest_paid_collateral !== undefined && object.interest_paid_collateral !== null) {
      message.interestPaidCollateral = object.interest_paid_collateral;
    }
    if (object.interest_paid_custody !== undefined && object.interest_paid_custody !== null) {
      message.interestPaidCustody = object.interest_paid_custody;
    }
    if (object.interest_unpaid_collateral !== undefined && object.interest_unpaid_collateral !== null) {
      message.interestUnpaidCollateral = object.interest_unpaid_collateral;
    }
    if (object.custody_asset !== undefined && object.custody_asset !== null) {
      message.custodyAsset = object.custody_asset;
    }
    if (object.custody_amount !== undefined && object.custody_amount !== null) {
      message.custodyAmount = object.custody_amount;
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    if (object.mtp_health !== undefined && object.mtp_health !== null) {
      message.mtpHealth = object.mtp_health;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MTP): MTPAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.collateral_asset = message.collateralAsset === "" ? undefined : message.collateralAsset;
    obj.collateral_amount = message.collateralAmount === "" ? undefined : message.collateralAmount;
    obj.liabilities = message.liabilities === "" ? undefined : message.liabilities;
    obj.interest_paid_collateral = message.interestPaidCollateral === "" ? undefined : message.interestPaidCollateral;
    obj.interest_paid_custody = message.interestPaidCustody === "" ? undefined : message.interestPaidCustody;
    obj.interest_unpaid_collateral = message.interestUnpaidCollateral === "" ? undefined : message.interestUnpaidCollateral;
    obj.custody_asset = message.custodyAsset === "" ? undefined : message.custodyAsset;
    obj.custody_amount = message.custodyAmount === "" ? undefined : message.custodyAmount;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    obj.mtp_health = message.mtpHealth === "" ? undefined : message.mtpHealth;
    obj.position = message.position === 0 ? undefined : message.position;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPAminoMsg): MTP {
    return MTP.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPProtoMsg): MTP {
    return MTP.decode(message.value);
  },
  toProto(message: MTP): Uint8Array {
    return MTP.encode(message).finish();
  },
  toProtoMsg(message: MTP): MTPProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MTP",
      value: MTP.encode(message).finish()
    };
  }
};