import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
/** CDP defines the state of a single collateralized debt position. */
export interface CDP {
  id: bigint;
  owner: Uint8Array;
  type: string;
  collateral: Coin;
  principal: Coin;
  accumulatedFees: Coin;
  feesUpdated: Timestamp;
  interestFactor: string;
}
export interface CDPProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.CDP";
  value: Uint8Array;
}
/** CDP defines the state of a single collateralized debt position. */
export interface CDPAmino {
  id: string;
  owner: Uint8Array;
  type: string;
  collateral?: CoinAmino;
  principal?: CoinAmino;
  accumulated_fees?: CoinAmino;
  fees_updated?: TimestampAmino;
  interest_factor: string;
}
export interface CDPAminoMsg {
  type: "/kava.cdp.v1beta1.CDP";
  value: CDPAmino;
}
/** CDP defines the state of a single collateralized debt position. */
export interface CDPSDKType {
  id: bigint;
  owner: Uint8Array;
  type: string;
  collateral: CoinSDKType;
  principal: CoinSDKType;
  accumulated_fees: CoinSDKType;
  fees_updated: TimestampSDKType;
  interest_factor: string;
}
/** Deposit defines an amount of coins deposited by an account to a cdp */
export interface Deposit {
  cdpId: bigint;
  depositor: string;
  amount: Coin;
}
export interface DepositProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.Deposit";
  value: Uint8Array;
}
/** Deposit defines an amount of coins deposited by an account to a cdp */
export interface DepositAmino {
  cdp_id: string;
  depositor: string;
  amount?: CoinAmino;
}
export interface DepositAminoMsg {
  type: "/kava.cdp.v1beta1.Deposit";
  value: DepositAmino;
}
/** Deposit defines an amount of coins deposited by an account to a cdp */
export interface DepositSDKType {
  cdp_id: bigint;
  depositor: string;
  amount: CoinSDKType;
}
/** TotalPrincipal defines the total principal of a given collateral type */
export interface TotalPrincipal {
  collateralType: string;
  amount: Coin;
}
export interface TotalPrincipalProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.TotalPrincipal";
  value: Uint8Array;
}
/** TotalPrincipal defines the total principal of a given collateral type */
export interface TotalPrincipalAmino {
  collateral_type: string;
  amount?: CoinAmino;
}
export interface TotalPrincipalAminoMsg {
  type: "/kava.cdp.v1beta1.TotalPrincipal";
  value: TotalPrincipalAmino;
}
/** TotalPrincipal defines the total principal of a given collateral type */
export interface TotalPrincipalSDKType {
  collateral_type: string;
  amount: CoinSDKType;
}
/** TotalCollateral defines the total collateral of a given collateral type */
export interface TotalCollateral {
  collateralType: string;
  amount: Coin;
}
export interface TotalCollateralProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.TotalCollateral";
  value: Uint8Array;
}
/** TotalCollateral defines the total collateral of a given collateral type */
export interface TotalCollateralAmino {
  collateral_type: string;
  amount?: CoinAmino;
}
export interface TotalCollateralAminoMsg {
  type: "/kava.cdp.v1beta1.TotalCollateral";
  value: TotalCollateralAmino;
}
/** TotalCollateral defines the total collateral of a given collateral type */
export interface TotalCollateralSDKType {
  collateral_type: string;
  amount: CoinSDKType;
}
/** OwnerCDPIndex defines the cdp ids for a single cdp owner */
export interface OwnerCDPIndex {
  cdpIds: bigint[];
}
export interface OwnerCDPIndexProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.OwnerCDPIndex";
  value: Uint8Array;
}
/** OwnerCDPIndex defines the cdp ids for a single cdp owner */
export interface OwnerCDPIndexAmino {
  cdp_ids: string[];
}
export interface OwnerCDPIndexAminoMsg {
  type: "/kava.cdp.v1beta1.OwnerCDPIndex";
  value: OwnerCDPIndexAmino;
}
/** OwnerCDPIndex defines the cdp ids for a single cdp owner */
export interface OwnerCDPIndexSDKType {
  cdp_ids: bigint[];
}
function createBaseCDP(): CDP {
  return {
    id: BigInt(0),
    owner: new Uint8Array(),
    type: "",
    collateral: Coin.fromPartial({}),
    principal: Coin.fromPartial({}),
    accumulatedFees: Coin.fromPartial({}),
    feesUpdated: Timestamp.fromPartial({}),
    interestFactor: ""
  };
}
export const CDP = {
  typeUrl: "/kava.cdp.v1beta1.CDP",
  encode(message: CDP, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner.length !== 0) {
      writer.uint32(18).bytes(message.owner);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(42).fork()).ldelim();
    }
    if (message.accumulatedFees !== undefined) {
      Coin.encode(message.accumulatedFees, writer.uint32(50).fork()).ldelim();
    }
    if (message.feesUpdated !== undefined) {
      Timestamp.encode(message.feesUpdated, writer.uint32(58).fork()).ldelim();
    }
    if (message.interestFactor !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.interestFactor, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): CDP {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      type: isSet(object.type) ? String(object.type) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined,
      accumulatedFees: isSet(object.accumulatedFees) ? Coin.fromJSON(object.accumulatedFees) : undefined,
      feesUpdated: isSet(object.feesUpdated) ? fromJsonTimestamp(object.feesUpdated) : undefined,
      interestFactor: isSet(object.interestFactor) ? String(object.interestFactor) : ""
    };
  },
  fromPartial(object: Partial<CDP>): CDP {
    const message = createBaseCDP();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? new Uint8Array();
    message.type = object.type ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.principal = object.principal !== undefined && object.principal !== null ? Coin.fromPartial(object.principal) : undefined;
    message.accumulatedFees = object.accumulatedFees !== undefined && object.accumulatedFees !== null ? Coin.fromPartial(object.accumulatedFees) : undefined;
    message.feesUpdated = object.feesUpdated !== undefined && object.feesUpdated !== null ? Timestamp.fromPartial(object.feesUpdated) : undefined;
    message.interestFactor = object.interestFactor ?? "";
    return message;
  },
  fromAmino(object: CDPAmino): CDP {
    return {
      id: BigInt(object.id),
      owner: object.owner,
      type: object.type,
      collateral: object?.collateral ? Coin.fromAmino(object.collateral) : undefined,
      principal: object?.principal ? Coin.fromAmino(object.principal) : undefined,
      accumulatedFees: object?.accumulated_fees ? Coin.fromAmino(object.accumulated_fees) : undefined,
      feesUpdated: object.fees_updated,
      interestFactor: object.interest_factor
    };
  },
  toAmino(message: CDP): CDPAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    obj.type = message.type;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.principal = message.principal ? Coin.toAmino(message.principal) : undefined;
    obj.accumulated_fees = message.accumulatedFees ? Coin.toAmino(message.accumulatedFees) : undefined;
    obj.fees_updated = message.feesUpdated;
    obj.interest_factor = message.interestFactor;
    return obj;
  },
  fromAminoMsg(object: CDPAminoMsg): CDP {
    return CDP.fromAmino(object.value);
  },
  fromProtoMsg(message: CDPProtoMsg): CDP {
    return CDP.decode(message.value);
  },
  toProto(message: CDP): Uint8Array {
    return CDP.encode(message).finish();
  },
  toProtoMsg(message: CDP): CDPProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.CDP",
      value: CDP.encode(message).finish()
    };
  }
};
function createBaseDeposit(): Deposit {
  return {
    cdpId: BigInt(0),
    depositor: "",
    amount: Coin.fromPartial({})
  };
}
export const Deposit = {
  typeUrl: "/kava.cdp.v1beta1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cdpId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cdpId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Deposit {
    return {
      cdpId: isSet(object.cdpId) ? BigInt(object.cdpId.toString()) : BigInt(0),
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.cdpId = object.cdpId !== undefined && object.cdpId !== null ? BigInt(object.cdpId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    return {
      cdpId: BigInt(object.cdp_id),
      depositor: object.depositor,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.cdp_id = message.cdpId ? message.cdpId.toString() : undefined;
    obj.depositor = message.depositor;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseTotalPrincipal(): TotalPrincipal {
  return {
    collateralType: "",
    amount: Coin.fromPartial({})
  };
}
export const TotalPrincipal = {
  typeUrl: "/kava.cdp.v1beta1.TotalPrincipal",
  encode(message: TotalPrincipal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TotalPrincipal {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<TotalPrincipal>): TotalPrincipal {
    const message = createBaseTotalPrincipal();
    message.collateralType = object.collateralType ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: TotalPrincipalAmino): TotalPrincipal {
    return {
      collateralType: object.collateral_type,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: TotalPrincipal): TotalPrincipalAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: TotalPrincipalAminoMsg): TotalPrincipal {
    return TotalPrincipal.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalPrincipalProtoMsg): TotalPrincipal {
    return TotalPrincipal.decode(message.value);
  },
  toProto(message: TotalPrincipal): Uint8Array {
    return TotalPrincipal.encode(message).finish();
  },
  toProtoMsg(message: TotalPrincipal): TotalPrincipalProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.TotalPrincipal",
      value: TotalPrincipal.encode(message).finish()
    };
  }
};
function createBaseTotalCollateral(): TotalCollateral {
  return {
    collateralType: "",
    amount: Coin.fromPartial({})
  };
}
export const TotalCollateral = {
  typeUrl: "/kava.cdp.v1beta1.TotalCollateral",
  encode(message: TotalCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TotalCollateral {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<TotalCollateral>): TotalCollateral {
    const message = createBaseTotalCollateral();
    message.collateralType = object.collateralType ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: TotalCollateralAmino): TotalCollateral {
    return {
      collateralType: object.collateral_type,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: TotalCollateral): TotalCollateralAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: TotalCollateralAminoMsg): TotalCollateral {
    return TotalCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalCollateralProtoMsg): TotalCollateral {
    return TotalCollateral.decode(message.value);
  },
  toProto(message: TotalCollateral): Uint8Array {
    return TotalCollateral.encode(message).finish();
  },
  toProtoMsg(message: TotalCollateral): TotalCollateralProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.TotalCollateral",
      value: TotalCollateral.encode(message).finish()
    };
  }
};
function createBaseOwnerCDPIndex(): OwnerCDPIndex {
  return {
    cdpIds: []
  };
}
export const OwnerCDPIndex = {
  typeUrl: "/kava.cdp.v1beta1.OwnerCDPIndex",
  encode(message: OwnerCDPIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.cdpIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): OwnerCDPIndex {
    return {
      cdpIds: Array.isArray(object?.cdpIds) ? object.cdpIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<OwnerCDPIndex>): OwnerCDPIndex {
    const message = createBaseOwnerCDPIndex();
    message.cdpIds = object.cdpIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: OwnerCDPIndexAmino): OwnerCDPIndex {
    return {
      cdpIds: Array.isArray(object?.cdp_ids) ? object.cdp_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: OwnerCDPIndex): OwnerCDPIndexAmino {
    const obj: any = {};
    if (message.cdpIds) {
      obj.cdp_ids = message.cdpIds.map(e => e.toString());
    } else {
      obj.cdp_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: OwnerCDPIndexAminoMsg): OwnerCDPIndex {
    return OwnerCDPIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerCDPIndexProtoMsg): OwnerCDPIndex {
    return OwnerCDPIndex.decode(message.value);
  },
  toProto(message: OwnerCDPIndex): Uint8Array {
    return OwnerCDPIndex.encode(message).finish();
  },
  toProtoMsg(message: OwnerCDPIndex): OwnerCDPIndexProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.OwnerCDPIndex",
      value: OwnerCDPIndex.encode(message).finish()
    };
  }
};