import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** Action is used as an enum to denote specific actions or tasks. */
export declare enum Action {
    /** ActionUndefined - Undefined action (per protobuf spec) */
    ActionUndefined = 0,
    /** ActionInitialClaim - Initial claim action */
    ActionInitialClaim = 1,
    /** ActionDepositT1 - Deposit tier 1 (e.g. > 5% of base_value) */
    ActionDepositT1 = 2,
    /** ActionDepositT2 - Deposit tier 2 (e.g. > 10% of base_value) */
    ActionDepositT2 = 3,
    /** ActionDepositT3 - Deposit tier 3 (e.g. > 15% of base_value) */
    ActionDepositT3 = 4,
    /** ActionDepositT4 - Deposit tier 4 (e.g. > 22% of base_value) */
    ActionDepositT4 = 5,
    /** ActionDepositT5 - Deposit tier 5 (e.g. > 30% of base_value) */
    ActionDepositT5 = 6,
    /** ActionStakeQCK - Active QCK delegation */
    ActionStakeQCK = 7,
    /** ActionSignalIntent - Intent is set */
    ActionSignalIntent = 8,
    /** ActionQSGov - Cast governance vote on QS */
    ActionQSGov = 9,
    /** ActionGbP - Governance By Proxy (GbP): cast vote on remote zone */
    ActionGbP = 10,
    /** ActionOsmosis - Provide liquidity on Osmosis */
    ActionOsmosis = 11,
    UNRECOGNIZED = -1
}
export declare const ActionSDKType: typeof Action;
export declare const ActionAmino: typeof Action;
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
/** Status is used as an enum to denote zone status. */
export declare enum Status {
    StatusUndefined = 0,
    StatusActive = 1,
    StatusFuture = 2,
    StatusExpired = 3,
    UNRECOGNIZED = -1
}
export declare const StatusSDKType: typeof Status;
export declare const StatusAmino: typeof Status;
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDrop {
    chainId: string;
    startTime: Timestamp;
    duration: Duration;
    decay: Duration;
    allocation: bigint;
    actions: string[];
    isConcluded: boolean;
}
export interface ZoneDropProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.ZoneDrop";
    value: Uint8Array;
}
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDropAmino {
    chain_id?: string;
    start_time?: string;
    duration?: DurationAmino;
    decay?: DurationAmino;
    allocation?: string;
    actions?: string[];
    is_concluded?: boolean;
}
export interface ZoneDropAminoMsg {
    type: "/quicksilver.airdrop.v1.ZoneDrop";
    value: ZoneDropAmino;
}
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDropSDKType {
    chain_id: string;
    start_time: TimestampSDKType;
    duration: DurationSDKType;
    decay: DurationSDKType;
    allocation: bigint;
    actions: string[];
    is_concluded: boolean;
}
export interface ClaimRecord_ActionsCompletedEntry {
    key: number;
    value?: CompletedAction;
}
export interface ClaimRecord_ActionsCompletedEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface ClaimRecord_ActionsCompletedEntryAmino {
    key?: number;
    value?: CompletedActionAmino;
}
export interface ClaimRecord_ActionsCompletedEntryAminoMsg {
    type: string;
    value: ClaimRecord_ActionsCompletedEntryAmino;
}
export interface ClaimRecord_ActionsCompletedEntrySDKType {
    key: number;
    value?: CompletedActionSDKType;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecord {
    chainId: string;
    address: string;
    /** Protobuf3 does not allow enum as map key */
    actionsCompleted: {
        [key: number]: CompletedAction;
    };
    maxAllocation: bigint;
    baseValue: bigint;
}
export interface ClaimRecordProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.ClaimRecord";
    value: Uint8Array;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecordAmino {
    chain_id?: string;
    address?: string;
    /** Protobuf3 does not allow enum as map key */
    actions_completed?: {
        [key: number]: CompletedActionAmino;
    };
    max_allocation?: string;
    base_value?: string;
}
export interface ClaimRecordAminoMsg {
    type: "/quicksilver.airdrop.v1.ClaimRecord";
    value: ClaimRecordAmino;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecordSDKType {
    chain_id: string;
    address: string;
    actions_completed: {
        [key: number]: CompletedActionSDKType;
    };
    max_allocation: bigint;
    base_value: bigint;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedAction {
    completeTime: Timestamp;
    claimAmount: bigint;
}
export interface CompletedActionProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.CompletedAction";
    value: Uint8Array;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedActionAmino {
    complete_time?: string;
    claim_amount?: string;
}
export interface CompletedActionAminoMsg {
    type: "/quicksilver.airdrop.v1.CompletedAction";
    value: CompletedActionAmino;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedActionSDKType {
    complete_time: TimestampSDKType;
    claim_amount: bigint;
}
export declare const ZoneDrop: {
    typeUrl: string;
    encode(message: ZoneDrop, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ZoneDrop;
    fromPartial(object: Partial<ZoneDrop>): ZoneDrop;
    fromAmino(object: ZoneDropAmino): ZoneDrop;
    toAmino(message: ZoneDrop): ZoneDropAmino;
    fromAminoMsg(object: ZoneDropAminoMsg): ZoneDrop;
    fromProtoMsg(message: ZoneDropProtoMsg): ZoneDrop;
    toProto(message: ZoneDrop): Uint8Array;
    toProtoMsg(message: ZoneDrop): ZoneDropProtoMsg;
};
export declare const ClaimRecord_ActionsCompletedEntry: {
    encode(message: ClaimRecord_ActionsCompletedEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClaimRecord_ActionsCompletedEntry;
    fromPartial(object: Partial<ClaimRecord_ActionsCompletedEntry>): ClaimRecord_ActionsCompletedEntry;
    fromAmino(object: ClaimRecord_ActionsCompletedEntryAmino): ClaimRecord_ActionsCompletedEntry;
    toAmino(message: ClaimRecord_ActionsCompletedEntry): ClaimRecord_ActionsCompletedEntryAmino;
    fromAminoMsg(object: ClaimRecord_ActionsCompletedEntryAminoMsg): ClaimRecord_ActionsCompletedEntry;
    fromProtoMsg(message: ClaimRecord_ActionsCompletedEntryProtoMsg): ClaimRecord_ActionsCompletedEntry;
    toProto(message: ClaimRecord_ActionsCompletedEntry): Uint8Array;
};
export declare const ClaimRecord: {
    typeUrl: string;
    encode(message: ClaimRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClaimRecord;
    fromPartial(object: Partial<ClaimRecord>): ClaimRecord;
    fromAmino(object: ClaimRecordAmino): ClaimRecord;
    toAmino(message: ClaimRecord): ClaimRecordAmino;
    fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord;
    fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord;
    toProto(message: ClaimRecord): Uint8Array;
    toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg;
};
export declare const CompletedAction: {
    typeUrl: string;
    encode(message: CompletedAction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CompletedAction;
    fromPartial(object: Partial<CompletedAction>): CompletedAction;
    fromAmino(object: CompletedActionAmino): CompletedAction;
    toAmino(message: CompletedAction): CompletedActionAmino;
    fromAminoMsg(object: CompletedActionAminoMsg): CompletedAction;
    fromProtoMsg(message: CompletedActionProtoMsg): CompletedAction;
    toProto(message: CompletedAction): Uint8Array;
    toProtoMsg(message: CompletedAction): CompletedActionProtoMsg;
};
