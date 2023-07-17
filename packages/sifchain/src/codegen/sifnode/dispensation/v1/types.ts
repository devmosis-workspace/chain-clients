import { Coin, CoinSDKType } from "../../../cosmos/base/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  distributionStartHeight: Long;
  distributionCompletedHeight: Long;
  authorizedRunner: string;
}
export interface DistributionRecordSDKType {
  distribution_status: DistributionStatus;
  distribution_type: DistributionType;
  distribution_name: string;
  recipient_address: string;
  coins: CoinSDKType[];
  distribution_start_height: Long;
  distribution_completed_height: Long;
  authorized_runner: string;
}
export interface DistributionRecords {
  distributionRecords: DistributionRecord[];
}
export interface DistributionRecordsSDKType {
  distribution_records: DistributionRecordSDKType[];
}
export interface Distributions {
  distributions: Distribution[];
}
export interface DistributionsSDKType {
  distributions: DistributionSDKType[];
}
export interface Distribution {
  distributionType: DistributionType;
  distributionName: string;
  runner: string;
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
export interface UserClaimSDKType {
  user_address: string;
  user_claim_type: DistributionType;
  user_claim_time: string;
}
export interface UserClaims {
  userClaims: UserClaim[];
}
export interface UserClaimsSDKType {
  user_claims: UserClaimSDKType[];
}
export interface MintController {
  totalCounter?: Coin;
}
export interface MintControllerSDKType {
  total_counter?: CoinSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    distributionRecords: undefined,
    distributions: undefined,
    claims: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDistributionRecord(): DistributionRecord {
  return {
    distributionStatus: 0,
    distributionType: 0,
    distributionName: "",
    recipientAddress: "",
    coins: [],
    distributionStartHeight: Long.ZERO,
    distributionCompletedHeight: Long.ZERO,
    authorizedRunner: ""
  };
}
export const DistributionRecord = {
  encode(message: DistributionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.distributionStartHeight.isZero()) {
      writer.uint32(48).int64(message.distributionStartHeight);
    }
    if (!message.distributionCompletedHeight.isZero()) {
      writer.uint32(56).int64(message.distributionCompletedHeight);
    }
    if (message.authorizedRunner !== "") {
      writer.uint32(66).string(message.authorizedRunner);
    }
    return writer;
  },
  fromJSON(object: any): DistributionRecord {
    return {
      distributionStatus: isSet(object.distributionStatus) ? distributionStatusFromJSON(object.distributionStatus) : 0,
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : 0,
      distributionName: isSet(object.distributionName) ? String(object.distributionName) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      distributionStartHeight: isSet(object.distributionStartHeight) ? Long.fromValue(object.distributionStartHeight) : Long.ZERO,
      distributionCompletedHeight: isSet(object.distributionCompletedHeight) ? Long.fromValue(object.distributionCompletedHeight) : Long.ZERO,
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
    message.distributionStartHeight = object.distributionStartHeight !== undefined && object.distributionStartHeight !== null ? Long.fromValue(object.distributionStartHeight) : Long.ZERO;
    message.distributionCompletedHeight = object.distributionCompletedHeight !== undefined && object.distributionCompletedHeight !== null ? Long.fromValue(object.distributionCompletedHeight) : Long.ZERO;
    message.authorizedRunner = object.authorizedRunner ?? "";
    return message;
  }
};
function createBaseDistributionRecords(): DistributionRecords {
  return {
    distributionRecords: []
  };
}
export const DistributionRecords = {
  encode(message: DistributionRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDistributions(): Distributions {
  return {
    distributions: []
  };
}
export const Distributions = {
  encode(message: Distributions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: Distribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : 0,
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
  encode(message: UserClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      userClaimType: isSet(object.userClaimType) ? distributionTypeFromJSON(object.userClaimType) : 0,
      userClaimTime: isSet(object.userClaimTime) ? String(object.userClaimTime) : ""
    };
  },
  fromPartial(object: Partial<UserClaim>): UserClaim {
    const message = createBaseUserClaim();
    message.userAddress = object.userAddress ?? "";
    message.userClaimType = object.userClaimType ?? 0;
    message.userClaimTime = object.userClaimTime ?? "";
    return message;
  }
};
function createBaseUserClaims(): UserClaims {
  return {
    userClaims: []
  };
}
export const UserClaims = {
  encode(message: UserClaims, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMintController(): MintController {
  return {
    totalCounter: undefined
  };
}
export const MintController = {
  encode(message: MintController, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};