import { Delegation, DelegationAmino, DelegationSDKType, DelegatorIntent, DelegatorIntentAmino, DelegatorIntentSDKType, Zone, ZoneAmino, ZoneSDKType, Receipt, ReceiptAmino, ReceiptSDKType, PortConnectionTuple, PortConnectionTupleAmino, PortConnectionTupleSDKType, WithdrawalRecord, WithdrawalRecordAmino, WithdrawalRecordSDKType } from "./interchainstaking";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface Params_v1 {
  depositInterval: bigint;
  validatorsetInterval: bigint;
  commissionRate: string;
}
export interface Params_v1ProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.Params_v1";
  value: Uint8Array;
}
export interface Params_v1Amino {
  deposit_interval?: string;
  validatorset_interval?: string;
  commission_rate?: string;
}
export interface Params_v1AminoMsg {
  type: "/quicksilver.interchainstaking.v1.Params_v1";
  value: Params_v1Amino;
}
export interface Params_v1SDKType {
  deposit_interval: bigint;
  validatorset_interval: bigint;
  commission_rate: string;
}
export interface Params {
  depositInterval: bigint;
  validatorsetInterval: bigint;
  commissionRate: string;
  unbondingEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  deposit_interval?: string;
  validatorset_interval?: string;
  commission_rate?: string;
  unbonding_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  deposit_interval: bigint;
  validatorset_interval: bigint;
  commission_rate: string;
  unbonding_enabled: boolean;
}
export interface DelegationsForZone {
  chainId: string;
  delegations: Delegation[];
}
export interface DelegationsForZoneProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone";
  value: Uint8Array;
}
export interface DelegationsForZoneAmino {
  chain_id?: string;
  delegations?: DelegationAmino[];
}
export interface DelegationsForZoneAminoMsg {
  type: "/quicksilver.interchainstaking.v1.DelegationsForZone";
  value: DelegationsForZoneAmino;
}
export interface DelegationsForZoneSDKType {
  chain_id: string;
  delegations: DelegationSDKType[];
}
export interface DelegatorIntentsForZone {
  chainId: string;
  delegationIntent: DelegatorIntent[];
  snapshot: boolean;
}
export interface DelegatorIntentsForZoneProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone";
  value: Uint8Array;
}
export interface DelegatorIntentsForZoneAmino {
  chain_id?: string;
  delegation_intent?: DelegatorIntentAmino[];
  snapshot?: boolean;
}
export interface DelegatorIntentsForZoneAminoMsg {
  type: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone";
  value: DelegatorIntentsForZoneAmino;
}
export interface DelegatorIntentsForZoneSDKType {
  chain_id: string;
  delegation_intent: DelegatorIntentSDKType[];
  snapshot: boolean;
}
/** GenesisState defines the interchainstaking module's genesis state. */
export interface GenesisState {
  params: Params;
  zones: Zone[];
  receipts: Receipt[];
  delegations: DelegationsForZone[];
  performanceDelegations: DelegationsForZone[];
  delegatorIntents: DelegatorIntentsForZone[];
  portConnections: PortConnectionTuple[];
  withdrawalRecords: WithdrawalRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the interchainstaking module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  zones?: ZoneAmino[];
  receipts?: ReceiptAmino[];
  delegations?: DelegationsForZoneAmino[];
  performance_delegations?: DelegationsForZoneAmino[];
  delegator_intents?: DelegatorIntentsForZoneAmino[];
  port_connections?: PortConnectionTupleAmino[];
  withdrawal_records?: WithdrawalRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/quicksilver.interchainstaking.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the interchainstaking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  zones: ZoneSDKType[];
  receipts: ReceiptSDKType[];
  delegations: DelegationsForZoneSDKType[];
  performance_delegations: DelegationsForZoneSDKType[];
  delegator_intents: DelegatorIntentsForZoneSDKType[];
  port_connections: PortConnectionTupleSDKType[];
  withdrawal_records: WithdrawalRecordSDKType[];
}
function createBaseParams_v1(): Params_v1 {
  return {
    depositInterval: BigInt(0),
    validatorsetInterval: BigInt(0),
    commissionRate: ""
  };
}
export const Params_v1 = {
  typeUrl: "/quicksilver.interchainstaking.v1.Params_v1",
  encode(message: Params_v1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositInterval !== BigInt(0)) {
      writer.uint32(8).uint64(message.depositInterval);
    }
    if (message.validatorsetInterval !== BigInt(0)) {
      writer.uint32(16).uint64(message.validatorsetInterval);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commissionRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params_v1 {
    return {
      depositInterval: isSet(object.depositInterval) ? BigInt(object.depositInterval.toString()) : BigInt(0),
      validatorsetInterval: isSet(object.validatorsetInterval) ? BigInt(object.validatorsetInterval.toString()) : BigInt(0),
      commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : ""
    };
  },
  fromPartial(object: Partial<Params_v1>): Params_v1 {
    const message = createBaseParams_v1();
    message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? BigInt(object.depositInterval.toString()) : BigInt(0);
    message.validatorsetInterval = object.validatorsetInterval !== undefined && object.validatorsetInterval !== null ? BigInt(object.validatorsetInterval.toString()) : BigInt(0);
    message.commissionRate = object.commissionRate ?? "";
    return message;
  },
  fromAmino(object: Params_v1Amino): Params_v1 {
    const message = createBaseParams_v1();
    if (object.deposit_interval !== undefined && object.deposit_interval !== null) {
      message.depositInterval = BigInt(object.deposit_interval);
    }
    if (object.validatorset_interval !== undefined && object.validatorset_interval !== null) {
      message.validatorsetInterval = BigInt(object.validatorset_interval);
    }
    if (object.commission_rate !== undefined && object.commission_rate !== null) {
      message.commissionRate = object.commission_rate;
    }
    return message;
  },
  toAmino(message: Params_v1): Params_v1Amino {
    const obj: any = {};
    obj.deposit_interval = message.depositInterval ? message.depositInterval.toString() : undefined;
    obj.validatorset_interval = message.validatorsetInterval ? message.validatorsetInterval.toString() : undefined;
    obj.commission_rate = message.commissionRate;
    return obj;
  },
  fromAminoMsg(object: Params_v1AminoMsg): Params_v1 {
    return Params_v1.fromAmino(object.value);
  },
  fromProtoMsg(message: Params_v1ProtoMsg): Params_v1 {
    return Params_v1.decode(message.value);
  },
  toProto(message: Params_v1): Uint8Array {
    return Params_v1.encode(message).finish();
  },
  toProtoMsg(message: Params_v1): Params_v1ProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Params_v1",
      value: Params_v1.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    depositInterval: BigInt(0),
    validatorsetInterval: BigInt(0),
    commissionRate: "",
    unbondingEnabled: false
  };
}
export const Params = {
  typeUrl: "/quicksilver.interchainstaking.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositInterval !== BigInt(0)) {
      writer.uint32(8).uint64(message.depositInterval);
    }
    if (message.validatorsetInterval !== BigInt(0)) {
      writer.uint32(16).uint64(message.validatorsetInterval);
    }
    if (message.commissionRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.commissionRate, 18).atomics);
    }
    if (message.unbondingEnabled === true) {
      writer.uint32(32).bool(message.unbondingEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      depositInterval: isSet(object.depositInterval) ? BigInt(object.depositInterval.toString()) : BigInt(0),
      validatorsetInterval: isSet(object.validatorsetInterval) ? BigInt(object.validatorsetInterval.toString()) : BigInt(0),
      commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
      unbondingEnabled: isSet(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? BigInt(object.depositInterval.toString()) : BigInt(0);
    message.validatorsetInterval = object.validatorsetInterval !== undefined && object.validatorsetInterval !== null ? BigInt(object.validatorsetInterval.toString()) : BigInt(0);
    message.commissionRate = object.commissionRate ?? "";
    message.unbondingEnabled = object.unbondingEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.deposit_interval !== undefined && object.deposit_interval !== null) {
      message.depositInterval = BigInt(object.deposit_interval);
    }
    if (object.validatorset_interval !== undefined && object.validatorset_interval !== null) {
      message.validatorsetInterval = BigInt(object.validatorset_interval);
    }
    if (object.commission_rate !== undefined && object.commission_rate !== null) {
      message.commissionRate = object.commission_rate;
    }
    if (object.unbonding_enabled !== undefined && object.unbonding_enabled !== null) {
      message.unbondingEnabled = object.unbonding_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.deposit_interval = message.depositInterval ? message.depositInterval.toString() : undefined;
    obj.validatorset_interval = message.validatorsetInterval ? message.validatorsetInterval.toString() : undefined;
    obj.commission_rate = message.commissionRate;
    obj.unbonding_enabled = message.unbondingEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDelegationsForZone(): DelegationsForZone {
  return {
    chainId: "",
    delegations: []
  };
}
export const DelegationsForZone = {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone",
  encode(message: DelegationsForZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelegationsForZone {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DelegationsForZone>): DelegationsForZone {
    const message = createBaseDelegationsForZone();
    message.chainId = object.chainId ?? "";
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationsForZoneAmino): DelegationsForZone {
    const message = createBaseDelegationsForZone();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegationsForZone): DelegationsForZoneAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegationsForZoneAminoMsg): DelegationsForZone {
    return DelegationsForZone.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationsForZoneProtoMsg): DelegationsForZone {
    return DelegationsForZone.decode(message.value);
  },
  toProto(message: DelegationsForZone): Uint8Array {
    return DelegationsForZone.encode(message).finish();
  },
  toProtoMsg(message: DelegationsForZone): DelegationsForZoneProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone",
      value: DelegationsForZone.encode(message).finish()
    };
  }
};
function createBaseDelegatorIntentsForZone(): DelegatorIntentsForZone {
  return {
    chainId: "",
    delegationIntent: [],
    snapshot: false
  };
}
export const DelegatorIntentsForZone = {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone",
  encode(message: DelegatorIntentsForZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.delegationIntent) {
      DelegatorIntent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.snapshot === true) {
      writer.uint32(24).bool(message.snapshot);
    }
    return writer;
  },
  fromJSON(object: any): DelegatorIntentsForZone {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      delegationIntent: Array.isArray(object?.delegationIntent) ? object.delegationIntent.map((e: any) => DelegatorIntent.fromJSON(e)) : [],
      snapshot: isSet(object.snapshot) ? Boolean(object.snapshot) : false
    };
  },
  fromPartial(object: Partial<DelegatorIntentsForZone>): DelegatorIntentsForZone {
    const message = createBaseDelegatorIntentsForZone();
    message.chainId = object.chainId ?? "";
    message.delegationIntent = object.delegationIntent?.map(e => DelegatorIntent.fromPartial(e)) || [];
    message.snapshot = object.snapshot ?? false;
    return message;
  },
  fromAmino(object: DelegatorIntentsForZoneAmino): DelegatorIntentsForZone {
    const message = createBaseDelegatorIntentsForZone();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    message.delegationIntent = object.delegation_intent?.map(e => DelegatorIntent.fromAmino(e)) || [];
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = object.snapshot;
    }
    return message;
  },
  toAmino(message: DelegatorIntentsForZone): DelegatorIntentsForZoneAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    if (message.delegationIntent) {
      obj.delegation_intent = message.delegationIntent.map(e => e ? DelegatorIntent.toAmino(e) : undefined);
    } else {
      obj.delegation_intent = [];
    }
    obj.snapshot = message.snapshot;
    return obj;
  },
  fromAminoMsg(object: DelegatorIntentsForZoneAminoMsg): DelegatorIntentsForZone {
    return DelegatorIntentsForZone.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorIntentsForZoneProtoMsg): DelegatorIntentsForZone {
    return DelegatorIntentsForZone.decode(message.value);
  },
  toProto(message: DelegatorIntentsForZone): Uint8Array {
    return DelegatorIntentsForZone.encode(message).finish();
  },
  toProtoMsg(message: DelegatorIntentsForZone): DelegatorIntentsForZoneProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone",
      value: DelegatorIntentsForZone.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    zones: [],
    receipts: [],
    delegations: [],
    performanceDelegations: [],
    delegatorIntents: [],
    portConnections: [],
    withdrawalRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/quicksilver.interchainstaking.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.zones) {
      Zone.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.receipts) {
      Receipt.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegations) {
      DelegationsForZone.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.performanceDelegations) {
      DelegationsForZone.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.delegatorIntents) {
      DelegatorIntentsForZone.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.portConnections) {
      PortConnectionTuple.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.withdrawalRecords) {
      WithdrawalRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      zones: Array.isArray(object?.zones) ? object.zones.map((e: any) => Zone.fromJSON(e)) : [],
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => Receipt.fromJSON(e)) : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => DelegationsForZone.fromJSON(e)) : [],
      performanceDelegations: Array.isArray(object?.performanceDelegations) ? object.performanceDelegations.map((e: any) => DelegationsForZone.fromJSON(e)) : [],
      delegatorIntents: Array.isArray(object?.delegatorIntents) ? object.delegatorIntents.map((e: any) => DelegatorIntentsForZone.fromJSON(e)) : [],
      portConnections: Array.isArray(object?.portConnections) ? object.portConnections.map((e: any) => PortConnectionTuple.fromJSON(e)) : [],
      withdrawalRecords: Array.isArray(object?.withdrawalRecords) ? object.withdrawalRecords.map((e: any) => WithdrawalRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.zones = object.zones?.map(e => Zone.fromPartial(e)) || [];
    message.receipts = object.receipts?.map(e => Receipt.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => DelegationsForZone.fromPartial(e)) || [];
    message.performanceDelegations = object.performanceDelegations?.map(e => DelegationsForZone.fromPartial(e)) || [];
    message.delegatorIntents = object.delegatorIntents?.map(e => DelegatorIntentsForZone.fromPartial(e)) || [];
    message.portConnections = object.portConnections?.map(e => PortConnectionTuple.fromPartial(e)) || [];
    message.withdrawalRecords = object.withdrawalRecords?.map(e => WithdrawalRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.zones = object.zones?.map(e => Zone.fromAmino(e)) || [];
    message.receipts = object.receipts?.map(e => Receipt.fromAmino(e)) || [];
    message.delegations = object.delegations?.map(e => DelegationsForZone.fromAmino(e)) || [];
    message.performanceDelegations = object.performance_delegations?.map(e => DelegationsForZone.fromAmino(e)) || [];
    message.delegatorIntents = object.delegator_intents?.map(e => DelegatorIntentsForZone.fromAmino(e)) || [];
    message.portConnections = object.port_connections?.map(e => PortConnectionTuple.fromAmino(e)) || [];
    message.withdrawalRecords = object.withdrawal_records?.map(e => WithdrawalRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.zones) {
      obj.zones = message.zones.map(e => e ? Zone.toAmino(e) : undefined);
    } else {
      obj.zones = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? Receipt.toAmino(e) : undefined);
    } else {
      obj.receipts = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationsForZone.toAmino(e) : undefined);
    } else {
      obj.delegations = [];
    }
    if (message.performanceDelegations) {
      obj.performance_delegations = message.performanceDelegations.map(e => e ? DelegationsForZone.toAmino(e) : undefined);
    } else {
      obj.performance_delegations = [];
    }
    if (message.delegatorIntents) {
      obj.delegator_intents = message.delegatorIntents.map(e => e ? DelegatorIntentsForZone.toAmino(e) : undefined);
    } else {
      obj.delegator_intents = [];
    }
    if (message.portConnections) {
      obj.port_connections = message.portConnections.map(e => e ? PortConnectionTuple.toAmino(e) : undefined);
    } else {
      obj.port_connections = [];
    }
    if (message.withdrawalRecords) {
      obj.withdrawal_records = message.withdrawalRecords.map(e => e ? WithdrawalRecord.toAmino(e) : undefined);
    } else {
      obj.withdrawal_records = [];
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
      typeUrl: "/quicksilver.interchainstaking.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};