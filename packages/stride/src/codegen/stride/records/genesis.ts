import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export enum DepositRecord_Status {
  /** TRANSFER_QUEUE - in transfer queue to be sent to the delegation ICA */
  TRANSFER_QUEUE = 0,
  /** TRANSFER_IN_PROGRESS - transfer in progress (IBC packet sent, ack not received) */
  TRANSFER_IN_PROGRESS = 2,
  /** DELEGATION_QUEUE - in staking queue on delegation ICA */
  DELEGATION_QUEUE = 1,
  /** DELEGATION_IN_PROGRESS - staking in progress (ICA packet sent, ack not received) */
  DELEGATION_IN_PROGRESS = 3,
  UNRECOGNIZED = -1,
}
export const DepositRecord_StatusSDKType = DepositRecord_Status;
export const DepositRecord_StatusAmino = DepositRecord_Status;
export function depositRecord_StatusFromJSON(object: any): DepositRecord_Status {
  switch (object) {
    case 0:
    case "TRANSFER_QUEUE":
      return DepositRecord_Status.TRANSFER_QUEUE;
    case 2:
    case "TRANSFER_IN_PROGRESS":
      return DepositRecord_Status.TRANSFER_IN_PROGRESS;
    case 1:
    case "DELEGATION_QUEUE":
      return DepositRecord_Status.DELEGATION_QUEUE;
    case 3:
    case "DELEGATION_IN_PROGRESS":
      return DepositRecord_Status.DELEGATION_IN_PROGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRecord_Status.UNRECOGNIZED;
  }
}
export function depositRecord_StatusToJSON(object: DepositRecord_Status): string {
  switch (object) {
    case DepositRecord_Status.TRANSFER_QUEUE:
      return "TRANSFER_QUEUE";
    case DepositRecord_Status.TRANSFER_IN_PROGRESS:
      return "TRANSFER_IN_PROGRESS";
    case DepositRecord_Status.DELEGATION_QUEUE:
      return "DELEGATION_QUEUE";
    case DepositRecord_Status.DELEGATION_IN_PROGRESS:
      return "DELEGATION_IN_PROGRESS";
    case DepositRecord_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum DepositRecord_Source {
  STRIDE = 0,
  WITHDRAWAL_ICA = 1,
  UNRECOGNIZED = -1,
}
export const DepositRecord_SourceSDKType = DepositRecord_Source;
export const DepositRecord_SourceAmino = DepositRecord_Source;
export function depositRecord_SourceFromJSON(object: any): DepositRecord_Source {
  switch (object) {
    case 0:
    case "STRIDE":
      return DepositRecord_Source.STRIDE;
    case 1:
    case "WITHDRAWAL_ICA":
      return DepositRecord_Source.WITHDRAWAL_ICA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DepositRecord_Source.UNRECOGNIZED;
  }
}
export function depositRecord_SourceToJSON(object: DepositRecord_Source): string {
  switch (object) {
    case DepositRecord_Source.STRIDE:
      return "STRIDE";
    case DepositRecord_Source.WITHDRAWAL_ICA:
      return "WITHDRAWAL_ICA";
    case DepositRecord_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum HostZoneUnbonding_Status {
  /** UNBONDING_QUEUE - tokens bonded on delegate account */
  UNBONDING_QUEUE = 0,
  UNBONDING_IN_PROGRESS = 3,
  /** EXIT_TRANSFER_QUEUE - unbonding completed on delegate account */
  EXIT_TRANSFER_QUEUE = 1,
  EXIT_TRANSFER_IN_PROGRESS = 4,
  /** CLAIMABLE - transfer success */
  CLAIMABLE = 2,
  UNRECOGNIZED = -1,
}
export const HostZoneUnbonding_StatusSDKType = HostZoneUnbonding_Status;
export const HostZoneUnbonding_StatusAmino = HostZoneUnbonding_Status;
export function hostZoneUnbonding_StatusFromJSON(object: any): HostZoneUnbonding_Status {
  switch (object) {
    case 0:
    case "UNBONDING_QUEUE":
      return HostZoneUnbonding_Status.UNBONDING_QUEUE;
    case 3:
    case "UNBONDING_IN_PROGRESS":
      return HostZoneUnbonding_Status.UNBONDING_IN_PROGRESS;
    case 1:
    case "EXIT_TRANSFER_QUEUE":
      return HostZoneUnbonding_Status.EXIT_TRANSFER_QUEUE;
    case 4:
    case "EXIT_TRANSFER_IN_PROGRESS":
      return HostZoneUnbonding_Status.EXIT_TRANSFER_IN_PROGRESS;
    case 2:
    case "CLAIMABLE":
      return HostZoneUnbonding_Status.CLAIMABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HostZoneUnbonding_Status.UNRECOGNIZED;
  }
}
export function hostZoneUnbonding_StatusToJSON(object: HostZoneUnbonding_Status): string {
  switch (object) {
    case HostZoneUnbonding_Status.UNBONDING_QUEUE:
      return "UNBONDING_QUEUE";
    case HostZoneUnbonding_Status.UNBONDING_IN_PROGRESS:
      return "UNBONDING_IN_PROGRESS";
    case HostZoneUnbonding_Status.EXIT_TRANSFER_QUEUE:
      return "EXIT_TRANSFER_QUEUE";
    case HostZoneUnbonding_Status.EXIT_TRANSFER_IN_PROGRESS:
      return "EXIT_TRANSFER_IN_PROGRESS";
    case HostZoneUnbonding_Status.CLAIMABLE:
      return "CLAIMABLE";
    case HostZoneUnbonding_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface UserRedemptionRecord {
  /** {chain_id}.{epoch}.{sender} */
  id: string;
  sender: string;
  receiver: string;
  amount: string;
  denom: string;
  hostZoneId: string;
  epochNumber: bigint;
  claimIsPending: boolean;
}
export interface UserRedemptionRecordProtoMsg {
  typeUrl: "/stride.records.UserRedemptionRecord";
  value: Uint8Array;
}
export interface UserRedemptionRecordAmino {
  /** {chain_id}.{epoch}.{sender} */
  id: string;
  sender: string;
  receiver: string;
  amount: string;
  denom: string;
  host_zone_id: string;
  epoch_number: string;
  claim_is_pending: boolean;
}
export interface UserRedemptionRecordAminoMsg {
  type: "/stride.records.UserRedemptionRecord";
  value: UserRedemptionRecordAmino;
}
export interface UserRedemptionRecordSDKType {
  id: string;
  sender: string;
  receiver: string;
  amount: string;
  denom: string;
  host_zone_id: string;
  epoch_number: bigint;
  claim_is_pending: boolean;
}
/** Params defines the parameters for the module. */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/stride.records.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/stride.records.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {}
export interface RecordsPacketData {
  noData?: NoData;
}
export interface RecordsPacketDataProtoMsg {
  typeUrl: "/stride.records.RecordsPacketData";
  value: Uint8Array;
}
export interface RecordsPacketDataAmino {
  no_data?: NoDataAmino;
}
export interface RecordsPacketDataAminoMsg {
  type: "/stride.records.RecordsPacketData";
  value: RecordsPacketDataAmino;
}
export interface RecordsPacketDataSDKType {
  no_data?: NoDataSDKType;
}
export interface NoData {}
export interface NoDataProtoMsg {
  typeUrl: "/stride.records.NoData";
  value: Uint8Array;
}
export interface NoDataAmino {}
export interface NoDataAminoMsg {
  type: "/stride.records.NoData";
  value: NoDataAmino;
}
export interface NoDataSDKType {}
export interface DepositRecord {
  id: bigint;
  amount: string;
  denom: string;
  hostZoneId: string;
  status: DepositRecord_Status;
  depositEpochNumber: bigint;
  source: DepositRecord_Source;
}
export interface DepositRecordProtoMsg {
  typeUrl: "/stride.records.DepositRecord";
  value: Uint8Array;
}
export interface DepositRecordAmino {
  id: string;
  amount: string;
  denom: string;
  host_zone_id: string;
  status: DepositRecord_Status;
  deposit_epoch_number: string;
  source: DepositRecord_Source;
}
export interface DepositRecordAminoMsg {
  type: "/stride.records.DepositRecord";
  value: DepositRecordAmino;
}
export interface DepositRecordSDKType {
  id: bigint;
  amount: string;
  denom: string;
  host_zone_id: string;
  status: DepositRecord_Status;
  deposit_epoch_number: bigint;
  source: DepositRecord_Source;
}
export interface HostZoneUnbonding {
  stTokenAmount: string;
  nativeTokenAmount: string;
  denom: string;
  hostZoneId: string;
  unbondingTime: bigint;
  status: HostZoneUnbonding_Status;
  userRedemptionRecords: string[];
}
export interface HostZoneUnbondingProtoMsg {
  typeUrl: "/stride.records.HostZoneUnbonding";
  value: Uint8Array;
}
export interface HostZoneUnbondingAmino {
  st_token_amount: string;
  native_token_amount: string;
  denom: string;
  host_zone_id: string;
  unbonding_time: string;
  status: HostZoneUnbonding_Status;
  user_redemption_records: string[];
}
export interface HostZoneUnbondingAminoMsg {
  type: "/stride.records.HostZoneUnbonding";
  value: HostZoneUnbondingAmino;
}
export interface HostZoneUnbondingSDKType {
  st_token_amount: string;
  native_token_amount: string;
  denom: string;
  host_zone_id: string;
  unbonding_time: bigint;
  status: HostZoneUnbonding_Status;
  user_redemption_records: string[];
}
export interface EpochUnbondingRecord {
  epochNumber: bigint;
  hostZoneUnbondings: HostZoneUnbonding[];
}
export interface EpochUnbondingRecordProtoMsg {
  typeUrl: "/stride.records.EpochUnbondingRecord";
  value: Uint8Array;
}
export interface EpochUnbondingRecordAmino {
  epoch_number: string;
  host_zone_unbondings: HostZoneUnbondingAmino[];
}
export interface EpochUnbondingRecordAminoMsg {
  type: "/stride.records.EpochUnbondingRecord";
  value: EpochUnbondingRecordAmino;
}
export interface EpochUnbondingRecordSDKType {
  epoch_number: bigint;
  host_zone_unbondings: HostZoneUnbondingSDKType[];
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisState {
  params: Params;
  portId: string;
  userRedemptionRecordList: UserRedemptionRecord[];
  userRedemptionRecordCount: bigint;
  epochUnbondingRecordList: EpochUnbondingRecord[];
  depositRecordList: DepositRecord[];
  depositRecordCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.records.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  port_id: string;
  user_redemption_record_list: UserRedemptionRecordAmino[];
  user_redemption_record_count: string;
  epoch_unbonding_record_list: EpochUnbondingRecordAmino[];
  deposit_record_list: DepositRecordAmino[];
  deposit_record_count: string;
}
export interface GenesisStateAminoMsg {
  type: "/stride.records.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  user_redemption_record_list: UserRedemptionRecordSDKType[];
  user_redemption_record_count: bigint;
  epoch_unbonding_record_list: EpochUnbondingRecordSDKType[];
  deposit_record_list: DepositRecordSDKType[];
  deposit_record_count: bigint;
}
function createBaseUserRedemptionRecord(): UserRedemptionRecord {
  return {
    id: "",
    sender: "",
    receiver: "",
    amount: "",
    denom: "",
    hostZoneId: "",
    epochNumber: BigInt(0),
    claimIsPending: false
  };
}
export const UserRedemptionRecord = {
  typeUrl: "/stride.records.UserRedemptionRecord",
  encode(message: UserRedemptionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(50).string(message.hostZoneId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(56).uint64(message.epochNumber);
    }
    if (message.claimIsPending === true) {
      writer.uint32(64).bool(message.claimIsPending);
    }
    return writer;
  },
  fromJSON(object: any): UserRedemptionRecord {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      claimIsPending: isSet(object.claimIsPending) ? Boolean(object.claimIsPending) : false
    };
  },
  fromPartial(object: Partial<UserRedemptionRecord>): UserRedemptionRecord {
    const message = createBaseUserRedemptionRecord();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.claimIsPending = object.claimIsPending ?? false;
    return message;
  },
  fromAmino(object: UserRedemptionRecordAmino): UserRedemptionRecord {
    return {
      id: object.id,
      sender: object.sender,
      receiver: object.receiver,
      amount: object.amount,
      denom: object.denom,
      hostZoneId: object.host_zone_id,
      epochNumber: BigInt(object.epoch_number),
      claimIsPending: object.claim_is_pending
    };
  },
  toAmino(message: UserRedemptionRecord): UserRedemptionRecordAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.amount = message.amount;
    obj.denom = message.denom;
    obj.host_zone_id = message.hostZoneId;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    obj.claim_is_pending = message.claimIsPending;
    return obj;
  },
  fromAminoMsg(object: UserRedemptionRecordAminoMsg): UserRedemptionRecord {
    return UserRedemptionRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: UserRedemptionRecordProtoMsg): UserRedemptionRecord {
    return UserRedemptionRecord.decode(message.value);
  },
  toProto(message: UserRedemptionRecord): Uint8Array {
    return UserRedemptionRecord.encode(message).finish();
  },
  toProtoMsg(message: UserRedemptionRecord): UserRedemptionRecordProtoMsg {
    return {
      typeUrl: "/stride.records.UserRedemptionRecord",
      value: UserRedemptionRecord.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/stride.records.Params",
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): Params {
    return {};
  },
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    return {};
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
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
      typeUrl: "/stride.records.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseRecordsPacketData(): RecordsPacketData {
  return {
    noData: undefined
  };
}
export const RecordsPacketData = {
  typeUrl: "/stride.records.RecordsPacketData",
  encode(message: RecordsPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RecordsPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined
    };
  },
  fromPartial(object: Partial<RecordsPacketData>): RecordsPacketData {
    const message = createBaseRecordsPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  },
  fromAmino(object: RecordsPacketDataAmino): RecordsPacketData {
    return {
      noData: object?.no_data ? NoData.fromAmino(object.no_data) : undefined
    };
  },
  toAmino(message: RecordsPacketData): RecordsPacketDataAmino {
    const obj: any = {};
    obj.no_data = message.noData ? NoData.toAmino(message.noData) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecordsPacketDataAminoMsg): RecordsPacketData {
    return RecordsPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: RecordsPacketDataProtoMsg): RecordsPacketData {
    return RecordsPacketData.decode(message.value);
  },
  toProto(message: RecordsPacketData): Uint8Array {
    return RecordsPacketData.encode(message).finish();
  },
  toProtoMsg(message: RecordsPacketData): RecordsPacketDataProtoMsg {
    return {
      typeUrl: "/stride.records.RecordsPacketData",
      value: RecordsPacketData.encode(message).finish()
    };
  }
};
function createBaseNoData(): NoData {
  return {};
}
export const NoData = {
  typeUrl: "/stride.records.NoData",
  encode(_: NoData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): NoData {
    return {};
  },
  fromPartial(_: Partial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_: NoDataAmino): NoData {
    return {};
  },
  toAmino(_: NoData): NoDataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NoDataAminoMsg): NoData {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message: NoDataProtoMsg): NoData {
    return NoData.decode(message.value);
  },
  toProto(message: NoData): Uint8Array {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message: NoData): NoDataProtoMsg {
    return {
      typeUrl: "/stride.records.NoData",
      value: NoData.encode(message).finish()
    };
  }
};
function createBaseDepositRecord(): DepositRecord {
  return {
    id: BigInt(0),
    amount: "",
    denom: "",
    hostZoneId: "",
    status: 0,
    depositEpochNumber: BigInt(0),
    source: 0
  };
}
export const DepositRecord = {
  typeUrl: "/stride.records.DepositRecord",
  encode(message: DepositRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.depositEpochNumber !== BigInt(0)) {
      writer.uint32(56).uint64(message.depositEpochNumber);
    }
    if (message.source !== 0) {
      writer.uint32(64).int32(message.source);
    }
    return writer;
  },
  fromJSON(object: any): DepositRecord {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      status: isSet(object.status) ? depositRecord_StatusFromJSON(object.status) : -1,
      depositEpochNumber: isSet(object.depositEpochNumber) ? BigInt(object.depositEpochNumber.toString()) : BigInt(0),
      source: isSet(object.source) ? depositRecord_SourceFromJSON(object.source) : -1
    };
  },
  fromPartial(object: Partial<DepositRecord>): DepositRecord {
    const message = createBaseDepositRecord();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.status = object.status ?? 0;
    message.depositEpochNumber = object.depositEpochNumber !== undefined && object.depositEpochNumber !== null ? BigInt(object.depositEpochNumber.toString()) : BigInt(0);
    message.source = object.source ?? 0;
    return message;
  },
  fromAmino(object: DepositRecordAmino): DepositRecord {
    return {
      id: BigInt(object.id),
      amount: object.amount,
      denom: object.denom,
      hostZoneId: object.host_zone_id,
      status: isSet(object.status) ? depositRecord_StatusFromJSON(object.status) : -1,
      depositEpochNumber: BigInt(object.deposit_epoch_number),
      source: isSet(object.source) ? depositRecord_SourceFromJSON(object.source) : -1
    };
  },
  toAmino(message: DepositRecord): DepositRecordAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount;
    obj.denom = message.denom;
    obj.host_zone_id = message.hostZoneId;
    obj.status = message.status;
    obj.deposit_epoch_number = message.depositEpochNumber ? message.depositEpochNumber.toString() : undefined;
    obj.source = message.source;
    return obj;
  },
  fromAminoMsg(object: DepositRecordAminoMsg): DepositRecord {
    return DepositRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositRecordProtoMsg): DepositRecord {
    return DepositRecord.decode(message.value);
  },
  toProto(message: DepositRecord): Uint8Array {
    return DepositRecord.encode(message).finish();
  },
  toProtoMsg(message: DepositRecord): DepositRecordProtoMsg {
    return {
      typeUrl: "/stride.records.DepositRecord",
      value: DepositRecord.encode(message).finish()
    };
  }
};
function createBaseHostZoneUnbonding(): HostZoneUnbonding {
  return {
    stTokenAmount: "",
    nativeTokenAmount: "",
    denom: "",
    hostZoneId: "",
    unbondingTime: BigInt(0),
    status: 0,
    userRedemptionRecords: []
  };
}
export const HostZoneUnbonding = {
  typeUrl: "/stride.records.HostZoneUnbonding",
  encode(message: HostZoneUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stTokenAmount !== "") {
      writer.uint32(10).string(message.stTokenAmount);
    }
    if (message.nativeTokenAmount !== "") {
      writer.uint32(18).string(message.nativeTokenAmount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.hostZoneId !== "") {
      writer.uint32(34).string(message.hostZoneId);
    }
    if (message.unbondingTime !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingTime);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    for (const v of message.userRedemptionRecords) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): HostZoneUnbonding {
    return {
      stTokenAmount: isSet(object.stTokenAmount) ? String(object.stTokenAmount) : "",
      nativeTokenAmount: isSet(object.nativeTokenAmount) ? String(object.nativeTokenAmount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      unbondingTime: isSet(object.unbondingTime) ? BigInt(object.unbondingTime.toString()) : BigInt(0),
      status: isSet(object.status) ? hostZoneUnbonding_StatusFromJSON(object.status) : -1,
      userRedemptionRecords: Array.isArray(object?.userRedemptionRecords) ? object.userRedemptionRecords.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<HostZoneUnbonding>): HostZoneUnbonding {
    const message = createBaseHostZoneUnbonding();
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? BigInt(object.unbondingTime.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.userRedemptionRecords = object.userRedemptionRecords?.map(e => e) || [];
    return message;
  },
  fromAmino(object: HostZoneUnbondingAmino): HostZoneUnbonding {
    return {
      stTokenAmount: object.st_token_amount,
      nativeTokenAmount: object.native_token_amount,
      denom: object.denom,
      hostZoneId: object.host_zone_id,
      unbondingTime: BigInt(object.unbonding_time),
      status: isSet(object.status) ? hostZoneUnbonding_StatusFromJSON(object.status) : -1,
      userRedemptionRecords: Array.isArray(object?.user_redemption_records) ? object.user_redemption_records.map((e: any) => e) : []
    };
  },
  toAmino(message: HostZoneUnbonding): HostZoneUnbondingAmino {
    const obj: any = {};
    obj.st_token_amount = message.stTokenAmount;
    obj.native_token_amount = message.nativeTokenAmount;
    obj.denom = message.denom;
    obj.host_zone_id = message.hostZoneId;
    obj.unbonding_time = message.unbondingTime ? message.unbondingTime.toString() : undefined;
    obj.status = message.status;
    if (message.userRedemptionRecords) {
      obj.user_redemption_records = message.userRedemptionRecords.map(e => e);
    } else {
      obj.user_redemption_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: HostZoneUnbondingAminoMsg): HostZoneUnbonding {
    return HostZoneUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: HostZoneUnbondingProtoMsg): HostZoneUnbonding {
    return HostZoneUnbonding.decode(message.value);
  },
  toProto(message: HostZoneUnbonding): Uint8Array {
    return HostZoneUnbonding.encode(message).finish();
  },
  toProtoMsg(message: HostZoneUnbonding): HostZoneUnbondingProtoMsg {
    return {
      typeUrl: "/stride.records.HostZoneUnbonding",
      value: HostZoneUnbonding.encode(message).finish()
    };
  }
};
function createBaseEpochUnbondingRecord(): EpochUnbondingRecord {
  return {
    epochNumber: BigInt(0),
    hostZoneUnbondings: []
  };
}
export const EpochUnbondingRecord = {
  typeUrl: "/stride.records.EpochUnbondingRecord",
  encode(message: EpochUnbondingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    for (const v of message.hostZoneUnbondings) {
      HostZoneUnbonding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EpochUnbondingRecord {
    return {
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      hostZoneUnbondings: Array.isArray(object?.hostZoneUnbondings) ? object.hostZoneUnbondings.map((e: any) => HostZoneUnbonding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EpochUnbondingRecord>): EpochUnbondingRecord {
    const message = createBaseEpochUnbondingRecord();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.hostZoneUnbondings = object.hostZoneUnbondings?.map(e => HostZoneUnbonding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EpochUnbondingRecordAmino): EpochUnbondingRecord {
    return {
      epochNumber: BigInt(object.epoch_number),
      hostZoneUnbondings: Array.isArray(object?.host_zone_unbondings) ? object.host_zone_unbondings.map((e: any) => HostZoneUnbonding.fromAmino(e)) : []
    };
  },
  toAmino(message: EpochUnbondingRecord): EpochUnbondingRecordAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    if (message.hostZoneUnbondings) {
      obj.host_zone_unbondings = message.hostZoneUnbondings.map(e => e ? HostZoneUnbonding.toAmino(e) : undefined);
    } else {
      obj.host_zone_unbondings = [];
    }
    return obj;
  },
  fromAminoMsg(object: EpochUnbondingRecordAminoMsg): EpochUnbondingRecord {
    return EpochUnbondingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochUnbondingRecordProtoMsg): EpochUnbondingRecord {
    return EpochUnbondingRecord.decode(message.value);
  },
  toProto(message: EpochUnbondingRecord): Uint8Array {
    return EpochUnbondingRecord.encode(message).finish();
  },
  toProtoMsg(message: EpochUnbondingRecord): EpochUnbondingRecordProtoMsg {
    return {
      typeUrl: "/stride.records.EpochUnbondingRecord",
      value: EpochUnbondingRecord.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: "",
    userRedemptionRecordList: [],
    userRedemptionRecordCount: BigInt(0),
    epochUnbondingRecordList: [],
    depositRecordList: [],
    depositRecordCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/stride.records.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.userRedemptionRecordList) {
      UserRedemptionRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.userRedemptionRecordCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.userRedemptionRecordCount);
    }
    for (const v of message.epochUnbondingRecordList) {
      EpochUnbondingRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.depositRecordList) {
      DepositRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.depositRecordCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.depositRecordCount);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      userRedemptionRecordList: Array.isArray(object?.userRedemptionRecordList) ? object.userRedemptionRecordList.map((e: any) => UserRedemptionRecord.fromJSON(e)) : [],
      userRedemptionRecordCount: isSet(object.userRedemptionRecordCount) ? BigInt(object.userRedemptionRecordCount.toString()) : BigInt(0),
      epochUnbondingRecordList: Array.isArray(object?.epochUnbondingRecordList) ? object.epochUnbondingRecordList.map((e: any) => EpochUnbondingRecord.fromJSON(e)) : [],
      depositRecordList: Array.isArray(object?.depositRecordList) ? object.depositRecordList.map((e: any) => DepositRecord.fromJSON(e)) : [],
      depositRecordCount: isSet(object.depositRecordCount) ? BigInt(object.depositRecordCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.userRedemptionRecordList = object.userRedemptionRecordList?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.userRedemptionRecordCount = object.userRedemptionRecordCount !== undefined && object.userRedemptionRecordCount !== null ? BigInt(object.userRedemptionRecordCount.toString()) : BigInt(0);
    message.epochUnbondingRecordList = object.epochUnbondingRecordList?.map(e => EpochUnbondingRecord.fromPartial(e)) || [];
    message.depositRecordList = object.depositRecordList?.map(e => DepositRecord.fromPartial(e)) || [];
    message.depositRecordCount = object.depositRecordCount !== undefined && object.depositRecordCount !== null ? BigInt(object.depositRecordCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      portId: object.port_id,
      userRedemptionRecordList: Array.isArray(object?.user_redemption_record_list) ? object.user_redemption_record_list.map((e: any) => UserRedemptionRecord.fromAmino(e)) : [],
      userRedemptionRecordCount: BigInt(object.user_redemption_record_count),
      epochUnbondingRecordList: Array.isArray(object?.epoch_unbonding_record_list) ? object.epoch_unbonding_record_list.map((e: any) => EpochUnbondingRecord.fromAmino(e)) : [],
      depositRecordList: Array.isArray(object?.deposit_record_list) ? object.deposit_record_list.map((e: any) => DepositRecord.fromAmino(e)) : [],
      depositRecordCount: BigInt(object.deposit_record_count)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.port_id = message.portId;
    if (message.userRedemptionRecordList) {
      obj.user_redemption_record_list = message.userRedemptionRecordList.map(e => e ? UserRedemptionRecord.toAmino(e) : undefined);
    } else {
      obj.user_redemption_record_list = [];
    }
    obj.user_redemption_record_count = message.userRedemptionRecordCount ? message.userRedemptionRecordCount.toString() : undefined;
    if (message.epochUnbondingRecordList) {
      obj.epoch_unbonding_record_list = message.epochUnbondingRecordList.map(e => e ? EpochUnbondingRecord.toAmino(e) : undefined);
    } else {
      obj.epoch_unbonding_record_list = [];
    }
    if (message.depositRecordList) {
      obj.deposit_record_list = message.depositRecordList.map(e => e ? DepositRecord.toAmino(e) : undefined);
    } else {
      obj.deposit_record_list = [];
    }
    obj.deposit_record_count = message.depositRecordCount ? message.depositRecordCount.toString() : undefined;
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
      typeUrl: "/stride.records.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};