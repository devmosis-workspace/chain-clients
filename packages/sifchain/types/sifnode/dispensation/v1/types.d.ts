import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/coin";
import { BinaryWriter } from "../../../binary";
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
export declare const DistributionTypeAmino: typeof DistributionType;
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
export declare const DistributionStatusAmino: typeof DistributionStatus;
export declare function distributionStatusFromJSON(object: any): DistributionStatus;
export declare function distributionStatusToJSON(object: DistributionStatus): string;
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const DistributionRecord: {
    typeUrl: string;
    encode(message: DistributionRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistributionRecord;
    fromPartial(object: Partial<DistributionRecord>): DistributionRecord;
    fromAmino(object: DistributionRecordAmino): DistributionRecord;
    toAmino(message: DistributionRecord): DistributionRecordAmino;
    fromAminoMsg(object: DistributionRecordAminoMsg): DistributionRecord;
    fromProtoMsg(message: DistributionRecordProtoMsg): DistributionRecord;
    toProto(message: DistributionRecord): Uint8Array;
    toProtoMsg(message: DistributionRecord): DistributionRecordProtoMsg;
};
export declare const DistributionRecords: {
    typeUrl: string;
    encode(message: DistributionRecords, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistributionRecords;
    fromPartial(object: Partial<DistributionRecords>): DistributionRecords;
    fromAmino(object: DistributionRecordsAmino): DistributionRecords;
    toAmino(message: DistributionRecords): DistributionRecordsAmino;
    fromAminoMsg(object: DistributionRecordsAminoMsg): DistributionRecords;
    fromProtoMsg(message: DistributionRecordsProtoMsg): DistributionRecords;
    toProto(message: DistributionRecords): Uint8Array;
    toProtoMsg(message: DistributionRecords): DistributionRecordsProtoMsg;
};
export declare const Distributions: {
    typeUrl: string;
    encode(message: Distributions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Distributions;
    fromPartial(object: Partial<Distributions>): Distributions;
    fromAmino(object: DistributionsAmino): Distributions;
    toAmino(message: Distributions): DistributionsAmino;
    fromAminoMsg(object: DistributionsAminoMsg): Distributions;
    fromProtoMsg(message: DistributionsProtoMsg): Distributions;
    toProto(message: Distributions): Uint8Array;
    toProtoMsg(message: Distributions): DistributionsProtoMsg;
};
export declare const Distribution: {
    typeUrl: string;
    encode(message: Distribution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Distribution;
    fromPartial(object: Partial<Distribution>): Distribution;
    fromAmino(object: DistributionAmino): Distribution;
    toAmino(message: Distribution): DistributionAmino;
    fromAminoMsg(object: DistributionAminoMsg): Distribution;
    fromProtoMsg(message: DistributionProtoMsg): Distribution;
    toProto(message: Distribution): Uint8Array;
    toProtoMsg(message: Distribution): DistributionProtoMsg;
};
export declare const UserClaim: {
    typeUrl: string;
    encode(message: UserClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UserClaim;
    fromPartial(object: Partial<UserClaim>): UserClaim;
    fromAmino(object: UserClaimAmino): UserClaim;
    toAmino(message: UserClaim): UserClaimAmino;
    fromAminoMsg(object: UserClaimAminoMsg): UserClaim;
    fromProtoMsg(message: UserClaimProtoMsg): UserClaim;
    toProto(message: UserClaim): Uint8Array;
    toProtoMsg(message: UserClaim): UserClaimProtoMsg;
};
export declare const UserClaims: {
    typeUrl: string;
    encode(message: UserClaims, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UserClaims;
    fromPartial(object: Partial<UserClaims>): UserClaims;
    fromAmino(object: UserClaimsAmino): UserClaims;
    toAmino(message: UserClaims): UserClaimsAmino;
    fromAminoMsg(object: UserClaimsAminoMsg): UserClaims;
    fromProtoMsg(message: UserClaimsProtoMsg): UserClaims;
    toProto(message: UserClaims): Uint8Array;
    toProtoMsg(message: UserClaims): UserClaimsProtoMsg;
};
export declare const MintController: {
    typeUrl: string;
    encode(message: MintController, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MintController;
    fromPartial(object: Partial<MintController>): MintController;
    fromAmino(object: MintControllerAmino): MintController;
    toAmino(message: MintController): MintControllerAmino;
    fromAminoMsg(object: MintControllerAminoMsg): MintController;
    fromProtoMsg(message: MintControllerProtoMsg): MintController;
    toProto(message: MintController): Uint8Array;
    toProtoMsg(message: MintController): MintControllerProtoMsg;
};
