import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  epochNumber: Long;
  claimIsPending: boolean;
}
export interface UserRedemptionRecordSDKType {
  id: string;
  sender: string;
  receiver: string;
  amount: string;
  denom: string;
  host_zone_id: string;
  epoch_number: Long;
  claim_is_pending: boolean;
}
/** Params defines the parameters for the module. */
export interface Params {}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {}
export interface RecordsPacketData {
  noData?: NoData;
}
export interface RecordsPacketDataSDKType {
  no_data?: NoDataSDKType;
}
export interface NoData {}
export interface NoDataSDKType {}
export interface DepositRecord {
  id: Long;
  amount: string;
  denom: string;
  hostZoneId: string;
  status: DepositRecord_Status;
  depositEpochNumber: Long;
  source: DepositRecord_Source;
}
export interface DepositRecordSDKType {
  id: Long;
  amount: string;
  denom: string;
  host_zone_id: string;
  status: DepositRecord_Status;
  deposit_epoch_number: Long;
  source: DepositRecord_Source;
}
export interface HostZoneUnbonding {
  stTokenAmount: string;
  nativeTokenAmount: string;
  denom: string;
  hostZoneId: string;
  unbondingTime: Long;
  status: HostZoneUnbonding_Status;
  userRedemptionRecords: string[];
}
export interface HostZoneUnbondingSDKType {
  st_token_amount: string;
  native_token_amount: string;
  denom: string;
  host_zone_id: string;
  unbonding_time: Long;
  status: HostZoneUnbonding_Status;
  user_redemption_records: string[];
}
export interface EpochUnbondingRecord {
  epochNumber: Long;
  hostZoneUnbondings: HostZoneUnbonding[];
}
export interface EpochUnbondingRecordSDKType {
  epoch_number: Long;
  host_zone_unbondings: HostZoneUnbondingSDKType[];
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisState {
  params?: Params;
  portId: string;
  userRedemptionRecordList: UserRedemptionRecord[];
  userRedemptionRecordCount: Long;
  epochUnbondingRecordList: EpochUnbondingRecord[];
  depositRecordList: DepositRecord[];
  depositRecordCount: Long;
}
/**
 * GenesisState defines the recordπs module's genesis state.
 * next id: 9
 */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  port_id: string;
  user_redemption_record_list: UserRedemptionRecordSDKType[];
  user_redemption_record_count: Long;
  epoch_unbonding_record_list: EpochUnbondingRecordSDKType[];
  deposit_record_list: DepositRecordSDKType[];
  deposit_record_count: Long;
}
function createBaseUserRedemptionRecord(): UserRedemptionRecord {
  return {
    id: "",
    sender: "",
    receiver: "",
    amount: "",
    denom: "",
    hostZoneId: "",
    epochNumber: Long.UZERO,
    claimIsPending: false
  };
}
export const UserRedemptionRecord = {
  encode(message: UserRedemptionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.epochNumber.isZero()) {
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
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO,
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
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.claimIsPending = object.claimIsPending ?? false;
    return message;
  }
};
function createBaseParams(): Params {
  return {};
}
export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): Params {
    return {};
  },
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  }
};
function createBaseRecordsPacketData(): RecordsPacketData {
  return {
    noData: undefined
  };
}
export const RecordsPacketData = {
  encode(message: RecordsPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseNoData(): NoData {
  return {};
}
export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): NoData {
    return {};
  },
  fromPartial(_: Partial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  }
};
function createBaseDepositRecord(): DepositRecord {
  return {
    id: Long.UZERO,
    amount: "",
    denom: "",
    hostZoneId: "",
    status: 0,
    depositEpochNumber: Long.UZERO,
    source: 0
  };
}
export const DepositRecord = {
  encode(message: DepositRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
    if (!message.depositEpochNumber.isZero()) {
      writer.uint32(56).uint64(message.depositEpochNumber);
    }
    if (message.source !== 0) {
      writer.uint32(64).int32(message.source);
    }
    return writer;
  },
  fromJSON(object: any): DepositRecord {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      hostZoneId: isSet(object.hostZoneId) ? String(object.hostZoneId) : "",
      status: isSet(object.status) ? depositRecord_StatusFromJSON(object.status) : 0,
      depositEpochNumber: isSet(object.depositEpochNumber) ? Long.fromValue(object.depositEpochNumber) : Long.UZERO,
      source: isSet(object.source) ? depositRecord_SourceFromJSON(object.source) : 0
    };
  },
  fromPartial(object: Partial<DepositRecord>): DepositRecord {
    const message = createBaseDepositRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.status = object.status ?? 0;
    message.depositEpochNumber = object.depositEpochNumber !== undefined && object.depositEpochNumber !== null ? Long.fromValue(object.depositEpochNumber) : Long.UZERO;
    message.source = object.source ?? 0;
    return message;
  }
};
function createBaseHostZoneUnbonding(): HostZoneUnbonding {
  return {
    stTokenAmount: "",
    nativeTokenAmount: "",
    denom: "",
    hostZoneId: "",
    unbondingTime: Long.UZERO,
    status: 0,
    userRedemptionRecords: []
  };
}
export const HostZoneUnbonding = {
  encode(message: HostZoneUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.unbondingTime.isZero()) {
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
      unbondingTime: isSet(object.unbondingTime) ? Long.fromValue(object.unbondingTime) : Long.UZERO,
      status: isSet(object.status) ? hostZoneUnbonding_StatusFromJSON(object.status) : 0,
      userRedemptionRecords: Array.isArray(object?.userRedemptionRecords) ? object.userRedemptionRecords.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<HostZoneUnbonding>): HostZoneUnbonding {
    const message = createBaseHostZoneUnbonding();
    message.stTokenAmount = object.stTokenAmount ?? "";
    message.nativeTokenAmount = object.nativeTokenAmount ?? "";
    message.denom = object.denom ?? "";
    message.hostZoneId = object.hostZoneId ?? "";
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Long.fromValue(object.unbondingTime) : Long.UZERO;
    message.status = object.status ?? 0;
    message.userRedemptionRecords = object.userRedemptionRecords?.map(e => e) || [];
    return message;
  }
};
function createBaseEpochUnbondingRecord(): EpochUnbondingRecord {
  return {
    epochNumber: Long.UZERO,
    hostZoneUnbondings: []
  };
}
export const EpochUnbondingRecord = {
  encode(message: EpochUnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    for (const v of message.hostZoneUnbondings) {
      HostZoneUnbonding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EpochUnbondingRecord {
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.UZERO,
      hostZoneUnbondings: Array.isArray(object?.hostZoneUnbondings) ? object.hostZoneUnbondings.map((e: any) => HostZoneUnbonding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EpochUnbondingRecord>): EpochUnbondingRecord {
    const message = createBaseEpochUnbondingRecord();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.UZERO;
    message.hostZoneUnbondings = object.hostZoneUnbondings?.map(e => HostZoneUnbonding.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    userRedemptionRecordList: [],
    userRedemptionRecordCount: Long.UZERO,
    epochUnbondingRecordList: [],
    depositRecordList: [],
    depositRecordCount: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.userRedemptionRecordList) {
      UserRedemptionRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.userRedemptionRecordCount.isZero()) {
      writer.uint32(32).uint64(message.userRedemptionRecordCount);
    }
    for (const v of message.epochUnbondingRecordList) {
      EpochUnbondingRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.depositRecordList) {
      DepositRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (!message.depositRecordCount.isZero()) {
      writer.uint32(64).uint64(message.depositRecordCount);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      userRedemptionRecordList: Array.isArray(object?.userRedemptionRecordList) ? object.userRedemptionRecordList.map((e: any) => UserRedemptionRecord.fromJSON(e)) : [],
      userRedemptionRecordCount: isSet(object.userRedemptionRecordCount) ? Long.fromValue(object.userRedemptionRecordCount) : Long.UZERO,
      epochUnbondingRecordList: Array.isArray(object?.epochUnbondingRecordList) ? object.epochUnbondingRecordList.map((e: any) => EpochUnbondingRecord.fromJSON(e)) : [],
      depositRecordList: Array.isArray(object?.depositRecordList) ? object.depositRecordList.map((e: any) => DepositRecord.fromJSON(e)) : [],
      depositRecordCount: isSet(object.depositRecordCount) ? Long.fromValue(object.depositRecordCount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.userRedemptionRecordList = object.userRedemptionRecordList?.map(e => UserRedemptionRecord.fromPartial(e)) || [];
    message.userRedemptionRecordCount = object.userRedemptionRecordCount !== undefined && object.userRedemptionRecordCount !== null ? Long.fromValue(object.userRedemptionRecordCount) : Long.UZERO;
    message.epochUnbondingRecordList = object.epochUnbondingRecordList?.map(e => EpochUnbondingRecord.fromPartial(e)) || [];
    message.depositRecordList = object.depositRecordList?.map(e => DepositRecord.fromPartial(e)) || [];
    message.depositRecordCount = object.depositRecordCount !== undefined && object.depositRecordCount !== null ? Long.fromValue(object.depositRecordCount) : Long.UZERO;
    return message;
  }
};