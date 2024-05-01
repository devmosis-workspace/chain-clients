import { Params, ParamsAmino, ParamsSDKType, ClassInfo, ClassInfoAmino, ClassInfoSDKType, BatchInfo, BatchInfoAmino, BatchInfoSDKType, CreditTypeSeq, CreditTypeSeqAmino, CreditTypeSeqSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines ecocredit module's genesis state. */
export interface GenesisState {
  /**
   * Params contains the updateable global parameters for use with the x/params
   * module
   */
  params: Params;
  /** class_info is the list of credit class info. */
  classInfo: ClassInfo[];
  /** batch_info is the list of credit batch info. */
  batchInfo: BatchInfo[];
  /** sequences is the list of credit type sequence. */
  sequences: CreditTypeSeq[];
  /** balances is the list of credit batch tradable/retired units. */
  balances: Balance[];
  /** supplies is the list of credit batch tradable/retired supply. */
  supplies: Supply[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines ecocredit module's genesis state. */
export interface GenesisStateAmino {
  /**
   * Params contains the updateable global parameters for use with the x/params
   * module
   */
  params?: ParamsAmino;
  /** class_info is the list of credit class info. */
  class_info?: ClassInfoAmino[];
  /** batch_info is the list of credit batch info. */
  batch_info?: BatchInfoAmino[];
  /** sequences is the list of credit type sequence. */
  sequences?: CreditTypeSeqAmino[];
  /** balances is the list of credit batch tradable/retired units. */
  balances?: BalanceAmino[];
  /** supplies is the list of credit batch tradable/retired supply. */
  supplies?: SupplyAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/regen.ecocredit.v1alpha1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines ecocredit module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  class_info: ClassInfoSDKType[];
  batch_info: BatchInfoSDKType[];
  sequences: CreditTypeSeqSDKType[];
  balances: BalanceSDKType[];
  supplies: SupplySDKType[];
}
/**
 * Balance represents tradable or retired units of a credit batch with an
 * account address, batch_denom, and balance.
 */
export interface Balance {
  /** address is the account address of the account holding credits. */
  address: string;
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /** tradable_balance is the tradable balance of the credit batch. */
  tradableBalance: string;
  /** retired_balance is the retired balance of the credit batch. */
  retiredBalance: string;
}
export interface BalanceProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.Balance";
  value: Uint8Array;
}
/**
 * Balance represents tradable or retired units of a credit batch with an
 * account address, batch_denom, and balance.
 */
export interface BalanceAmino {
  /** address is the account address of the account holding credits. */
  address?: string;
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom?: string;
  /** tradable_balance is the tradable balance of the credit batch. */
  tradable_balance?: string;
  /** retired_balance is the retired balance of the credit batch. */
  retired_balance?: string;
}
export interface BalanceAminoMsg {
  type: "/regen.ecocredit.v1alpha1.Balance";
  value: BalanceAmino;
}
/**
 * Balance represents tradable or retired units of a credit batch with an
 * account address, batch_denom, and balance.
 */
export interface BalanceSDKType {
  address: string;
  batch_denom: string;
  tradable_balance: string;
  retired_balance: string;
}
/** Supply represents a tradable or retired supply of a credit batch. */
export interface Supply {
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /** tradable_supply is the tradable supply of the credit batch. */
  tradableSupply: string;
  /** retired_supply is the retired supply of the credit batch. */
  retiredSupply: string;
}
export interface SupplyProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.Supply";
  value: Uint8Array;
}
/** Supply represents a tradable or retired supply of a credit batch. */
export interface SupplyAmino {
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom?: string;
  /** tradable_supply is the tradable supply of the credit batch. */
  tradable_supply?: string;
  /** retired_supply is the retired supply of the credit batch. */
  retired_supply?: string;
}
export interface SupplyAminoMsg {
  type: "/regen.ecocredit.v1alpha1.Supply";
  value: SupplyAmino;
}
/** Supply represents a tradable or retired supply of a credit batch. */
export interface SupplySDKType {
  batch_denom: string;
  tradable_supply: string;
  retired_supply: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    classInfo: [],
    batchInfo: [],
    sequences: [],
    balances: [],
    supplies: []
  };
}
export const GenesisState = {
  typeUrl: "/regen.ecocredit.v1alpha1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.classInfo) {
      ClassInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.batchInfo) {
      BatchInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      CreditTypeSeq.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.supplies) {
      Supply.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      classInfo: Array.isArray(object?.classInfo) ? object.classInfo.map((e: any) => ClassInfo.fromJSON(e)) : [],
      batchInfo: Array.isArray(object?.batchInfo) ? object.batchInfo.map((e: any) => BatchInfo.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => CreditTypeSeq.fromJSON(e)) : [],
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [],
      supplies: Array.isArray(object?.supplies) ? object.supplies.map((e: any) => Supply.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.classInfo = object.classInfo?.map(e => ClassInfo.fromPartial(e)) || [];
    message.batchInfo = object.batchInfo?.map(e => BatchInfo.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => CreditTypeSeq.fromPartial(e)) || [];
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.supplies = object.supplies?.map(e => Supply.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.classInfo = object.class_info?.map(e => ClassInfo.fromAmino(e)) || [];
    message.batchInfo = object.batch_info?.map(e => BatchInfo.fromAmino(e)) || [];
    message.sequences = object.sequences?.map(e => CreditTypeSeq.fromAmino(e)) || [];
    message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
    message.supplies = object.supplies?.map(e => Supply.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.classInfo) {
      obj.class_info = message.classInfo.map(e => e ? ClassInfo.toAmino(e) : undefined);
    } else {
      obj.class_info = [];
    }
    if (message.batchInfo) {
      obj.batch_info = message.batchInfo.map(e => e ? BatchInfo.toAmino(e) : undefined);
    } else {
      obj.batch_info = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? CreditTypeSeq.toAmino(e) : undefined);
    } else {
      obj.sequences = [];
    }
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }
    if (message.supplies) {
      obj.supplies = message.supplies.map(e => e ? Supply.toAmino(e) : undefined);
    } else {
      obj.supplies = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseBalance(): Balance {
  return {
    address: "",
    batchDenom: "",
    tradableBalance: "",
    retiredBalance: ""
  };
}
export const Balance = {
  typeUrl: "/regen.ecocredit.v1alpha1.Balance",
  encode(message: Balance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.tradableBalance !== "") {
      writer.uint32(26).string(message.tradableBalance);
    }
    if (message.retiredBalance !== "") {
      writer.uint32(34).string(message.retiredBalance);
    }
    return writer;
  },
  fromJSON(object: any): Balance {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableBalance: isSet(object.tradableBalance) ? String(object.tradableBalance) : "",
      retiredBalance: isSet(object.retiredBalance) ? String(object.retiredBalance) : ""
    };
  },
  fromPartial(object: Partial<Balance>): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.tradableBalance = object.tradableBalance ?? "";
    message.retiredBalance = object.retiredBalance ?? "";
    return message;
  },
  fromAmino(object: BalanceAmino): Balance {
    const message = createBaseBalance();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.tradable_balance !== undefined && object.tradable_balance !== null) {
      message.tradableBalance = object.tradable_balance;
    }
    if (object.retired_balance !== undefined && object.retired_balance !== null) {
      message.retiredBalance = object.retired_balance;
    }
    return message;
  },
  toAmino(message: Balance): BalanceAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.batch_denom = message.batchDenom;
    obj.tradable_balance = message.tradableBalance;
    obj.retired_balance = message.retiredBalance;
    return obj;
  },
  fromAminoMsg(object: BalanceAminoMsg): Balance {
    return Balance.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceProtoMsg): Balance {
    return Balance.decode(message.value);
  },
  toProto(message: Balance): Uint8Array {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message: Balance): BalanceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.Balance",
      value: Balance.encode(message).finish()
    };
  }
};
function createBaseSupply(): Supply {
  return {
    batchDenom: "",
    tradableSupply: "",
    retiredSupply: ""
  };
}
export const Supply = {
  typeUrl: "/regen.ecocredit.v1alpha1.Supply",
  encode(message: Supply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.tradableSupply !== "") {
      writer.uint32(18).string(message.tradableSupply);
    }
    if (message.retiredSupply !== "") {
      writer.uint32(26).string(message.retiredSupply);
    }
    return writer;
  },
  fromJSON(object: any): Supply {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableSupply: isSet(object.tradableSupply) ? String(object.tradableSupply) : "",
      retiredSupply: isSet(object.retiredSupply) ? String(object.retiredSupply) : ""
    };
  },
  fromPartial(object: Partial<Supply>): Supply {
    const message = createBaseSupply();
    message.batchDenom = object.batchDenom ?? "";
    message.tradableSupply = object.tradableSupply ?? "";
    message.retiredSupply = object.retiredSupply ?? "";
    return message;
  },
  fromAmino(object: SupplyAmino): Supply {
    const message = createBaseSupply();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.tradable_supply !== undefined && object.tradable_supply !== null) {
      message.tradableSupply = object.tradable_supply;
    }
    if (object.retired_supply !== undefined && object.retired_supply !== null) {
      message.retiredSupply = object.retired_supply;
    }
    return message;
  },
  toAmino(message: Supply): SupplyAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.tradable_supply = message.tradableSupply;
    obj.retired_supply = message.retiredSupply;
    return obj;
  },
  fromAminoMsg(object: SupplyAminoMsg): Supply {
    return Supply.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplyProtoMsg): Supply {
    return Supply.decode(message.value);
  },
  toProto(message: Supply): Uint8Array {
    return Supply.encode(message).finish();
  },
  toProtoMsg(message: Supply): SupplyProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.Supply",
      value: Supply.encode(message).finish()
    };
  }
};