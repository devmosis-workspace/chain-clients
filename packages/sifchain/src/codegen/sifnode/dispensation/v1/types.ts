import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Distribution type enum */
export enum DistributionType {
  /** DISTRIBUTION_TYPE_UNSPECIFIED - Unspecified distribution type */
  DISTRIBUTION_TYPE_UNSPECIFIED = 0,
  /** DISTRIBUTION_TYPE_AIRDROP - Airdrop distribution type */
  DISTRIBUTION_TYPE_AIRDROP = 1,
  /** DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY - Validator Subsidy distribution type */
  DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY = 2,
  /** DISTRIBUTION_TYPE_LIQUIDITY_MINING - Liquidity mining distribution type */
  DISTRIBUTION_TYPE_LIQUIDITY_MINING = 3,
  UNRECOGNIZED = -1,
}
export const DistributionTypeSDKType = DistributionType;
export const DistributionTypeAmino = DistributionType;
export function distributionTypeFromJSON(object: any): DistributionType {
  switch (object) {
    case 0:
    case "DISTRIBUTION_TYPE_UNSPECIFIED":
      return DistributionType.DISTRIBUTION_TYPE_UNSPECIFIED;
    case 1:
    case "DISTRIBUTION_TYPE_AIRDROP":
      return DistributionType.DISTRIBUTION_TYPE_AIRDROP;
    case 2:
    case "DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY":
      return DistributionType.DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY;
    case 3:
    case "DISTRIBUTION_TYPE_LIQUIDITY_MINING":
      return DistributionType.DISTRIBUTION_TYPE_LIQUIDITY_MINING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DistributionType.UNRECOGNIZED;
  }
}
export function distributionTypeToJSON(object: DistributionType): string {
  switch (object) {
    case DistributionType.DISTRIBUTION_TYPE_UNSPECIFIED:
      return "DISTRIBUTION_TYPE_UNSPECIFIED";
    case DistributionType.DISTRIBUTION_TYPE_AIRDROP:
      return "DISTRIBUTION_TYPE_AIRDROP";
    case DistributionType.DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY:
      return "DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY";
    case DistributionType.DISTRIBUTION_TYPE_LIQUIDITY_MINING:
      return "DISTRIBUTION_TYPE_LIQUIDITY_MINING";
    case DistributionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Claim status enum */
export enum DistributionStatus {
  /** DISTRIBUTION_STATUS_UNSPECIFIED - Unspecified */
  DISTRIBUTION_STATUS_UNSPECIFIED = 0,
  /** DISTRIBUTION_STATUS_PENDING - Pending status */
  DISTRIBUTION_STATUS_PENDING = 1,
  /** DISTRIBUTION_STATUS_COMPLETED - Completed status */
  DISTRIBUTION_STATUS_COMPLETED = 2,
  /** DISTRIBUTION_STATUS_FAILED - Failed status */
  DISTRIBUTION_STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}
export const DistributionStatusSDKType = DistributionStatus;
export const DistributionStatusAmino = DistributionStatus;
export function distributionStatusFromJSON(object: any): DistributionStatus {
  switch (object) {
    case 0:
    case "DISTRIBUTION_STATUS_UNSPECIFIED":
      return DistributionStatus.DISTRIBUTION_STATUS_UNSPECIFIED;
    case 1:
    case "DISTRIBUTION_STATUS_PENDING":
      return DistributionStatus.DISTRIBUTION_STATUS_PENDING;
    case 2:
    case "DISTRIBUTION_STATUS_COMPLETED":
      return DistributionStatus.DISTRIBUTION_STATUS_COMPLETED;
    case 3:
    case "DISTRIBUTION_STATUS_FAILED":
      return DistributionStatus.DISTRIBUTION_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DistributionStatus.UNRECOGNIZED;
  }
}
export function distributionStatusToJSON(object: DistributionStatus): string {
  switch (object) {
    case DistributionStatus.DISTRIBUTION_STATUS_UNSPECIFIED:
      return "DISTRIBUTION_STATUS_UNSPECIFIED";
    case DistributionStatus.DISTRIBUTION_STATUS_PENDING:
      return "DISTRIBUTION_STATUS_PENDING";
    case DistributionStatus.DISTRIBUTION_STATUS_COMPLETED:
      return "DISTRIBUTION_STATUS_COMPLETED";
    case DistributionStatus.DISTRIBUTION_STATUS_FAILED:
      return "DISTRIBUTION_STATUS_FAILED";
    case DistributionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface GenesisState {
  distributionRecords?: DistributionRecords;
  distributions?: Distributions;
  claims?: UserClaims;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  distribution_records?: DistributionRecordsAmino;
  distributions?: DistributionsAmino;
  claims?: UserClaimsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/sifnode.dispensation.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  distribution_records?: DistributionRecordsSDKType;
  distributions?: DistributionsSDKType;
  claims?: UserClaimsSDKType;
}
export interface DistributionRecord {
  distributionStatus: DistributionStatus;
  distributionType: DistributionType;
  distributionName: string;
  recipientAddress: string;
  coins: Coin[];
  distributionStartHeight: bigint;
  distributionCompletedHeight: bigint;
  authorizedRunner: string;
}
export interface DistributionRecordProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.DistributionRecord";
  value: Uint8Array;
}
export interface DistributionRecordAmino {
  distribution_status?: DistributionStatus;
  distribution_type?: DistributionType;
  distribution_name?: string;
  recipient_address?: string;
  coins?: CoinAmino[];
  distribution_start_height?: string;
  distribution_completed_height?: string;
  authorized_runner?: string;
}
export interface DistributionRecordAminoMsg {
  type: "/sifnode.dispensation.v1.DistributionRecord";
  value: DistributionRecordAmino;
}
export interface DistributionRecordSDKType {
  distribution_status: DistributionStatus;
  distribution_type: DistributionType;
  distribution_name: string;
  recipient_address: string;
  coins: CoinSDKType[];
  distribution_start_height: bigint;
  distribution_completed_height: bigint;
  authorized_runner: string;
}
export interface DistributionRecords {
  distributionRecords: DistributionRecord[];
}
export interface DistributionRecordsProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.DistributionRecords";
  value: Uint8Array;
}
export interface DistributionRecordsAmino {
  distribution_records?: DistributionRecordAmino[];
}
export interface DistributionRecordsAminoMsg {
  type: "/sifnode.dispensation.v1.DistributionRecords";
  value: DistributionRecordsAmino;
}
export interface DistributionRecordsSDKType {
  distribution_records: DistributionRecordSDKType[];
}
export interface Distributions {
  distributions: Distribution[];
}
export interface DistributionsProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.Distributions";
  value: Uint8Array;
}
export interface DistributionsAmino {
  distributions?: DistributionAmino[];
}
export interface DistributionsAminoMsg {
  type: "/sifnode.dispensation.v1.Distributions";
  value: DistributionsAmino;
}
export interface DistributionsSDKType {
  distributions: DistributionSDKType[];
}
export interface Distribution {
  distributionType: DistributionType;
  distributionName: string;
  runner: string;
}
export interface DistributionProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.Distribution";
  value: Uint8Array;
}
export interface DistributionAmino {
  distribution_type?: DistributionType;
  distribution_name?: string;
  runner?: string;
}
export interface DistributionAminoMsg {
  type: "/sifnode.dispensation.v1.Distribution";
  value: DistributionAmino;
}
export interface DistributionSDKType {
  distribution_type: DistributionType;
  distribution_name: string;
  runner: string;
}
export interface UserClaim {
  userAddress: string;
  userClaimType: DistributionType;
  userClaimTime: string;
}
export interface UserClaimProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.UserClaim";
  value: Uint8Array;
}
export interface UserClaimAmino {
  user_address?: string;
  user_claim_type?: DistributionType;
  user_claim_time?: string;
}
export interface UserClaimAminoMsg {
  type: "/sifnode.dispensation.v1.UserClaim";
  value: UserClaimAmino;
}
export interface UserClaimSDKType {
  user_address: string;
  user_claim_type: DistributionType;
  user_claim_time: string;
}
export interface UserClaims {
  userClaims: UserClaim[];
}
export interface UserClaimsProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.UserClaims";
  value: Uint8Array;
}
export interface UserClaimsAmino {
  user_claims?: UserClaimAmino[];
}
export interface UserClaimsAminoMsg {
  type: "/sifnode.dispensation.v1.UserClaims";
  value: UserClaimsAmino;
}
export interface UserClaimsSDKType {
  user_claims: UserClaimSDKType[];
}
export interface MintController {
  totalCounter: Coin;
}
export interface MintControllerProtoMsg {
  typeUrl: "/sifnode.dispensation.v1.MintController";
  value: Uint8Array;
}
export interface MintControllerAmino {
  total_counter?: CoinAmino;
}
export interface MintControllerAminoMsg {
  type: "/sifnode.dispensation.v1.MintController";
  value: MintControllerAmino;
}
export interface MintControllerSDKType {
  total_counter: CoinSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    distributionRecords: undefined,
    distributions: undefined,
    claims: undefined
  };
}
export const GenesisState = {
  typeUrl: "/sifnode.dispensation.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionRecords !== undefined) {
      DistributionRecords.encode(message.distributionRecords, writer.uint32(10).fork()).ldelim();
    }
    if (message.distributions !== undefined) {
      Distributions.encode(message.distributions, writer.uint32(18).fork()).ldelim();
    }
    if (message.claims !== undefined) {
      UserClaims.encode(message.claims, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      distributionRecords: isSet(object.distributionRecords) ? DistributionRecords.fromJSON(object.distributionRecords) : undefined,
      distributions: isSet(object.distributions) ? Distributions.fromJSON(object.distributions) : undefined,
      claims: isSet(object.claims) ? UserClaims.fromJSON(object.claims) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.distributionRecords = object.distributionRecords !== undefined && object.distributionRecords !== null ? DistributionRecords.fromPartial(object.distributionRecords) : undefined;
    message.distributions = object.distributions !== undefined && object.distributions !== null ? Distributions.fromPartial(object.distributions) : undefined;
    message.claims = object.claims !== undefined && object.claims !== null ? UserClaims.fromPartial(object.claims) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.distribution_records !== undefined && object.distribution_records !== null) {
      message.distributionRecords = DistributionRecords.fromAmino(object.distribution_records);
    }
    if (object.distributions !== undefined && object.distributions !== null) {
      message.distributions = Distributions.fromAmino(object.distributions);
    }
    if (object.claims !== undefined && object.claims !== null) {
      message.claims = UserClaims.fromAmino(object.claims);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.distribution_records = message.distributionRecords ? DistributionRecords.toAmino(message.distributionRecords) : undefined;
    obj.distributions = message.distributions ? Distributions.toAmino(message.distributions) : undefined;
    obj.claims = message.claims ? UserClaims.toAmino(message.claims) : undefined;
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
      typeUrl: "/sifnode.dispensation.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseDistributionRecord(): DistributionRecord {
  return {
    distributionStatus: 0,
    distributionType: 0,
    distributionName: "",
    recipientAddress: "",
    coins: [],
    distributionStartHeight: BigInt(0),
    distributionCompletedHeight: BigInt(0),
    authorizedRunner: ""
  };
}
export const DistributionRecord = {
  typeUrl: "/sifnode.dispensation.v1.DistributionRecord",
  encode(message: DistributionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionStatus !== 0) {
      writer.uint32(8).int32(message.distributionStatus);
    }
    if (message.distributionType !== 0) {
      writer.uint32(16).int32(message.distributionType);
    }
    if (message.distributionName !== "") {
      writer.uint32(26).string(message.distributionName);
    }
    if (message.recipientAddress !== "") {
      writer.uint32(34).string(message.recipientAddress);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.distributionStartHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.distributionStartHeight);
    }
    if (message.distributionCompletedHeight !== BigInt(0)) {
      writer.uint32(56).int64(message.distributionCompletedHeight);
    }
    if (message.authorizedRunner !== "") {
      writer.uint32(66).string(message.authorizedRunner);
    }
    return writer;
  },
  fromJSON(object: any): DistributionRecord {
    return {
      distributionStatus: isSet(object.distributionStatus) ? distributionStatusFromJSON(object.distributionStatus) : -1,
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : -1,
      distributionName: isSet(object.distributionName) ? String(object.distributionName) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      distributionStartHeight: isSet(object.distributionStartHeight) ? BigInt(object.distributionStartHeight.toString()) : BigInt(0),
      distributionCompletedHeight: isSet(object.distributionCompletedHeight) ? BigInt(object.distributionCompletedHeight.toString()) : BigInt(0),
      authorizedRunner: isSet(object.authorizedRunner) ? String(object.authorizedRunner) : ""
    };
  },
  fromPartial(object: Partial<DistributionRecord>): DistributionRecord {
    const message = createBaseDistributionRecord();
    message.distributionStatus = object.distributionStatus ?? 0;
    message.distributionType = object.distributionType ?? 0;
    message.distributionName = object.distributionName ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.distributionStartHeight = object.distributionStartHeight !== undefined && object.distributionStartHeight !== null ? BigInt(object.distributionStartHeight.toString()) : BigInt(0);
    message.distributionCompletedHeight = object.distributionCompletedHeight !== undefined && object.distributionCompletedHeight !== null ? BigInt(object.distributionCompletedHeight.toString()) : BigInt(0);
    message.authorizedRunner = object.authorizedRunner ?? "";
    return message;
  },
  fromAmino(object: DistributionRecordAmino): DistributionRecord {
    const message = createBaseDistributionRecord();
    if (object.distribution_status !== undefined && object.distribution_status !== null) {
      message.distributionStatus = object.distribution_status;
    }
    if (object.distribution_type !== undefined && object.distribution_type !== null) {
      message.distributionType = object.distribution_type;
    }
    if (object.distribution_name !== undefined && object.distribution_name !== null) {
      message.distributionName = object.distribution_name;
    }
    if (object.recipient_address !== undefined && object.recipient_address !== null) {
      message.recipientAddress = object.recipient_address;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.distribution_start_height !== undefined && object.distribution_start_height !== null) {
      message.distributionStartHeight = BigInt(object.distribution_start_height);
    }
    if (object.distribution_completed_height !== undefined && object.distribution_completed_height !== null) {
      message.distributionCompletedHeight = BigInt(object.distribution_completed_height);
    }
    if (object.authorized_runner !== undefined && object.authorized_runner !== null) {
      message.authorizedRunner = object.authorized_runner;
    }
    return message;
  },
  toAmino(message: DistributionRecord): DistributionRecordAmino {
    const obj: any = {};
    obj.distribution_status = message.distributionStatus === 0 ? undefined : message.distributionStatus;
    obj.distribution_type = message.distributionType === 0 ? undefined : message.distributionType;
    obj.distribution_name = message.distributionName === "" ? undefined : message.distributionName;
    obj.recipient_address = message.recipientAddress === "" ? undefined : message.recipientAddress;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    obj.distribution_start_height = message.distributionStartHeight !== BigInt(0) ? message.distributionStartHeight.toString() : undefined;
    obj.distribution_completed_height = message.distributionCompletedHeight !== BigInt(0) ? message.distributionCompletedHeight.toString() : undefined;
    obj.authorized_runner = message.authorizedRunner === "" ? undefined : message.authorizedRunner;
    return obj;
  },
  fromAminoMsg(object: DistributionRecordAminoMsg): DistributionRecord {
    return DistributionRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionRecordProtoMsg): DistributionRecord {
    return DistributionRecord.decode(message.value);
  },
  toProto(message: DistributionRecord): Uint8Array {
    return DistributionRecord.encode(message).finish();
  },
  toProtoMsg(message: DistributionRecord): DistributionRecordProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.DistributionRecord",
      value: DistributionRecord.encode(message).finish()
    };
  }
};
function createBaseDistributionRecords(): DistributionRecords {
  return {
    distributionRecords: []
  };
}
export const DistributionRecords = {
  typeUrl: "/sifnode.dispensation.v1.DistributionRecords",
  encode(message: DistributionRecords, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.distributionRecords) {
      DistributionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DistributionRecords {
    return {
      distributionRecords: Array.isArray(object?.distributionRecords) ? object.distributionRecords.map((e: any) => DistributionRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DistributionRecords>): DistributionRecords {
    const message = createBaseDistributionRecords();
    message.distributionRecords = object.distributionRecords?.map(e => DistributionRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DistributionRecordsAmino): DistributionRecords {
    const message = createBaseDistributionRecords();
    message.distributionRecords = object.distribution_records?.map(e => DistributionRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DistributionRecords): DistributionRecordsAmino {
    const obj: any = {};
    if (message.distributionRecords) {
      obj.distribution_records = message.distributionRecords.map(e => e ? DistributionRecord.toAmino(e) : undefined);
    } else {
      obj.distribution_records = message.distributionRecords;
    }
    return obj;
  },
  fromAminoMsg(object: DistributionRecordsAminoMsg): DistributionRecords {
    return DistributionRecords.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionRecordsProtoMsg): DistributionRecords {
    return DistributionRecords.decode(message.value);
  },
  toProto(message: DistributionRecords): Uint8Array {
    return DistributionRecords.encode(message).finish();
  },
  toProtoMsg(message: DistributionRecords): DistributionRecordsProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.DistributionRecords",
      value: DistributionRecords.encode(message).finish()
    };
  }
};
function createBaseDistributions(): Distributions {
  return {
    distributions: []
  };
}
export const Distributions = {
  typeUrl: "/sifnode.dispensation.v1.Distributions",
  encode(message: Distributions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.distributions) {
      Distribution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Distributions {
    return {
      distributions: Array.isArray(object?.distributions) ? object.distributions.map((e: any) => Distribution.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Distributions>): Distributions {
    const message = createBaseDistributions();
    message.distributions = object.distributions?.map(e => Distribution.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DistributionsAmino): Distributions {
    const message = createBaseDistributions();
    message.distributions = object.distributions?.map(e => Distribution.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Distributions): DistributionsAmino {
    const obj: any = {};
    if (message.distributions) {
      obj.distributions = message.distributions.map(e => e ? Distribution.toAmino(e) : undefined);
    } else {
      obj.distributions = message.distributions;
    }
    return obj;
  },
  fromAminoMsg(object: DistributionsAminoMsg): Distributions {
    return Distributions.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionsProtoMsg): Distributions {
    return Distributions.decode(message.value);
  },
  toProto(message: Distributions): Uint8Array {
    return Distributions.encode(message).finish();
  },
  toProtoMsg(message: Distributions): DistributionsProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.Distributions",
      value: Distributions.encode(message).finish()
    };
  }
};
function createBaseDistribution(): Distribution {
  return {
    distributionType: 0,
    distributionName: "",
    runner: ""
  };
}
export const Distribution = {
  typeUrl: "/sifnode.dispensation.v1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionType !== 0) {
      writer.uint32(8).int32(message.distributionType);
    }
    if (message.distributionName !== "") {
      writer.uint32(18).string(message.distributionName);
    }
    if (message.runner !== "") {
      writer.uint32(26).string(message.runner);
    }
    return writer;
  },
  fromJSON(object: any): Distribution {
    return {
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : -1,
      distributionName: isSet(object.distributionName) ? String(object.distributionName) : "",
      runner: isSet(object.runner) ? String(object.runner) : ""
    };
  },
  fromPartial(object: Partial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.distributionType = object.distributionType ?? 0;
    message.distributionName = object.distributionName ?? "";
    message.runner = object.runner ?? "";
    return message;
  },
  fromAmino(object: DistributionAmino): Distribution {
    const message = createBaseDistribution();
    if (object.distribution_type !== undefined && object.distribution_type !== null) {
      message.distributionType = object.distribution_type;
    }
    if (object.distribution_name !== undefined && object.distribution_name !== null) {
      message.distributionName = object.distribution_name;
    }
    if (object.runner !== undefined && object.runner !== null) {
      message.runner = object.runner;
    }
    return message;
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.distribution_type = message.distributionType === 0 ? undefined : message.distributionType;
    obj.distribution_name = message.distributionName === "" ? undefined : message.distributionName;
    obj.runner = message.runner === "" ? undefined : message.runner;
    return obj;
  },
  fromAminoMsg(object: DistributionAminoMsg): Distribution {
    return Distribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProtoMsg): Distribution {
    return Distribution.decode(message.value);
  },
  toProto(message: Distribution): Uint8Array {
    return Distribution.encode(message).finish();
  },
  toProtoMsg(message: Distribution): DistributionProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.Distribution",
      value: Distribution.encode(message).finish()
    };
  }
};
function createBaseUserClaim(): UserClaim {
  return {
    userAddress: "",
    userClaimType: 0,
    userClaimTime: ""
  };
}
export const UserClaim = {
  typeUrl: "/sifnode.dispensation.v1.UserClaim",
  encode(message: UserClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.userClaimType !== 0) {
      writer.uint32(16).int32(message.userClaimType);
    }
    if (message.userClaimTime !== "") {
      writer.uint32(26).string(message.userClaimTime);
    }
    return writer;
  },
  fromJSON(object: any): UserClaim {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      userClaimType: isSet(object.userClaimType) ? distributionTypeFromJSON(object.userClaimType) : -1,
      userClaimTime: isSet(object.userClaimTime) ? String(object.userClaimTime) : ""
    };
  },
  fromPartial(object: Partial<UserClaim>): UserClaim {
    const message = createBaseUserClaim();
    message.userAddress = object.userAddress ?? "";
    message.userClaimType = object.userClaimType ?? 0;
    message.userClaimTime = object.userClaimTime ?? "";
    return message;
  },
  fromAmino(object: UserClaimAmino): UserClaim {
    const message = createBaseUserClaim();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    if (object.user_claim_type !== undefined && object.user_claim_type !== null) {
      message.userClaimType = object.user_claim_type;
    }
    if (object.user_claim_time !== undefined && object.user_claim_time !== null) {
      message.userClaimTime = object.user_claim_time;
    }
    return message;
  },
  toAmino(message: UserClaim): UserClaimAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    obj.user_claim_type = message.userClaimType === 0 ? undefined : message.userClaimType;
    obj.user_claim_time = message.userClaimTime === "" ? undefined : message.userClaimTime;
    return obj;
  },
  fromAminoMsg(object: UserClaimAminoMsg): UserClaim {
    return UserClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: UserClaimProtoMsg): UserClaim {
    return UserClaim.decode(message.value);
  },
  toProto(message: UserClaim): Uint8Array {
    return UserClaim.encode(message).finish();
  },
  toProtoMsg(message: UserClaim): UserClaimProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.UserClaim",
      value: UserClaim.encode(message).finish()
    };
  }
};
function createBaseUserClaims(): UserClaims {
  return {
    userClaims: []
  };
}
export const UserClaims = {
  typeUrl: "/sifnode.dispensation.v1.UserClaims",
  encode(message: UserClaims, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userClaims) {
      UserClaim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UserClaims {
    return {
      userClaims: Array.isArray(object?.userClaims) ? object.userClaims.map((e: any) => UserClaim.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UserClaims>): UserClaims {
    const message = createBaseUserClaims();
    message.userClaims = object.userClaims?.map(e => UserClaim.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UserClaimsAmino): UserClaims {
    const message = createBaseUserClaims();
    message.userClaims = object.user_claims?.map(e => UserClaim.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UserClaims): UserClaimsAmino {
    const obj: any = {};
    if (message.userClaims) {
      obj.user_claims = message.userClaims.map(e => e ? UserClaim.toAmino(e) : undefined);
    } else {
      obj.user_claims = message.userClaims;
    }
    return obj;
  },
  fromAminoMsg(object: UserClaimsAminoMsg): UserClaims {
    return UserClaims.fromAmino(object.value);
  },
  fromProtoMsg(message: UserClaimsProtoMsg): UserClaims {
    return UserClaims.decode(message.value);
  },
  toProto(message: UserClaims): Uint8Array {
    return UserClaims.encode(message).finish();
  },
  toProtoMsg(message: UserClaims): UserClaimsProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.UserClaims",
      value: UserClaims.encode(message).finish()
    };
  }
};
function createBaseMintController(): MintController {
  return {
    totalCounter: Coin.fromPartial({})
  };
}
export const MintController = {
  typeUrl: "/sifnode.dispensation.v1.MintController",
  encode(message: MintController, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCounter !== undefined) {
      Coin.encode(message.totalCounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MintController {
    return {
      totalCounter: isSet(object.totalCounter) ? Coin.fromJSON(object.totalCounter) : undefined
    };
  },
  fromPartial(object: Partial<MintController>): MintController {
    const message = createBaseMintController();
    message.totalCounter = object.totalCounter !== undefined && object.totalCounter !== null ? Coin.fromPartial(object.totalCounter) : undefined;
    return message;
  },
  fromAmino(object: MintControllerAmino): MintController {
    const message = createBaseMintController();
    if (object.total_counter !== undefined && object.total_counter !== null) {
      message.totalCounter = Coin.fromAmino(object.total_counter);
    }
    return message;
  },
  toAmino(message: MintController): MintControllerAmino {
    const obj: any = {};
    obj.total_counter = message.totalCounter ? Coin.toAmino(message.totalCounter) : undefined;
    return obj;
  },
  fromAminoMsg(object: MintControllerAminoMsg): MintController {
    return MintController.fromAmino(object.value);
  },
  fromProtoMsg(message: MintControllerProtoMsg): MintController {
    return MintController.decode(message.value);
  },
  toProto(message: MintController): Uint8Array {
    return MintController.encode(message).finish();
  },
  toProtoMsg(message: MintController): MintControllerProtoMsg {
    return {
      typeUrl: "/sifnode.dispensation.v1.MintController",
      value: MintController.encode(message).finish()
    };
  }
};