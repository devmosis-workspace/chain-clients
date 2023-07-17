import { Coin, CoinSDKType } from "../../../cosmos/base/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Distribution type enum */
export declare enum DistributionType {
    /** DISTRIBUTION_TYPE_UNSPECIFIED - Unspecified distribution type */
    DISTRIBUTION_TYPE_UNSPECIFIED = 0,
    /** DISTRIBUTION_TYPE_AIRDROP - Airdrop distribution type */
    DISTRIBUTION_TYPE_AIRDROP = 1,
    /** DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY - Validator Subsidy distribution type */
    DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY = 2,
    /** DISTRIBUTION_TYPE_LIQUIDITY_MINING - Liquidity mining distribution type */
    DISTRIBUTION_TYPE_LIQUIDITY_MINING = 3,
    UNRECOGNIZED = -1
}
export declare const DistributionTypeSDKType: typeof DistributionType;
export declare function distributionTypeFromJSON(object: any): DistributionType;
export declare function distributionTypeToJSON(object: DistributionType): string;
/** Claim status enum */
export declare enum DistributionStatus {
    /** DISTRIBUTION_STATUS_UNSPECIFIED - Unspecified */
    DISTRIBUTION_STATUS_UNSPECIFIED = 0,
    /** DISTRIBUTION_STATUS_PENDING - Pending status */
    DISTRIBUTION_STATUS_PENDING = 1,
    /** DISTRIBUTION_STATUS_COMPLETED - Completed status */
    DISTRIBUTION_STATUS_COMPLETED = 2,
    /** DISTRIBUTION_STATUS_FAILED - Failed status */
    DISTRIBUTION_STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const DistributionStatusSDKType: typeof DistributionStatus;
export declare function distributionStatusFromJSON(object: any): DistributionStatus;
export declare function distributionStatusToJSON(object: DistributionStatus): string;
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const DistributionRecord: {
    encode(message: DistributionRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DistributionRecord;
    fromPartial(object: Partial<DistributionRecord>): DistributionRecord;
};
export declare const DistributionRecords: {
    encode(message: DistributionRecords, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DistributionRecords;
    fromPartial(object: Partial<DistributionRecords>): DistributionRecords;
};
export declare const Distributions: {
    encode(message: Distributions, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Distributions;
    fromPartial(object: Partial<Distributions>): Distributions;
};
export declare const Distribution: {
    encode(message: Distribution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Distribution;
    fromPartial(object: Partial<Distribution>): Distribution;
};
export declare const UserClaim: {
    encode(message: UserClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserClaim;
    fromPartial(object: Partial<UserClaim>): UserClaim;
};
export declare const UserClaims: {
    encode(message: UserClaims, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserClaims;
    fromPartial(object: Partial<UserClaims>): UserClaims;
};
export declare const MintController: {
    encode(message: MintController, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MintController;
    fromPartial(object: Partial<MintController>): MintController;
};
