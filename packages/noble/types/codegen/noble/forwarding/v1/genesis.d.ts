import { BinaryWriter } from "../../../binary";
export interface GenesisState_NumOfAccountsEntry {
    key: string;
    value: bigint;
}
export interface GenesisState_NumOfAccountsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface GenesisState_NumOfAccountsEntryAmino {
    key?: string;
    value?: string;
}
export interface GenesisState_NumOfAccountsEntryAminoMsg {
    type: string;
    value: GenesisState_NumOfAccountsEntryAmino;
}
export interface GenesisState_NumOfAccountsEntrySDKType {
    key: string;
    value: bigint;
}
export interface GenesisState_NumOfForwardsEntry {
    key: string;
    value: bigint;
}
export interface GenesisState_NumOfForwardsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface GenesisState_NumOfForwardsEntryAmino {
    key?: string;
    value?: string;
}
export interface GenesisState_NumOfForwardsEntryAminoMsg {
    type: string;
    value: GenesisState_NumOfForwardsEntryAmino;
}
export interface GenesisState_NumOfForwardsEntrySDKType {
    key: string;
    value: bigint;
}
export interface GenesisState_TotalForwardedEntry {
    key: string;
    value: string;
}
export interface GenesisState_TotalForwardedEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface GenesisState_TotalForwardedEntryAmino {
    key?: string;
    value?: string;
}
export interface GenesisState_TotalForwardedEntryAminoMsg {
    type: string;
    value: GenesisState_TotalForwardedEntryAmino;
}
export interface GenesisState_TotalForwardedEntrySDKType {
    key: string;
    value: string;
}
export interface GenesisState {
    numOfAccounts: {
        [key: string]: bigint;
    };
    numOfForwards: {
        [key: string]: bigint;
    };
    totalForwarded: {
        [key: string]: string;
    };
}
export interface GenesisStateProtoMsg {
    typeUrl: "/noble.forwarding.v1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    num_of_accounts?: {
        [key: string]: string;
    };
    num_of_forwards?: {
        [key: string]: string;
    };
    total_forwarded?: {
        [key: string]: string;
    };
}
export interface GenesisStateAminoMsg {
    type: "/noble.forwarding.v1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    num_of_accounts: {
        [key: string]: bigint;
    };
    num_of_forwards: {
        [key: string]: bigint;
    };
    total_forwarded: {
        [key: string]: string;
    };
}
export declare const GenesisState_NumOfAccountsEntry: {
    encode(message: GenesisState_NumOfAccountsEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState_NumOfAccountsEntry;
    fromPartial(object: Partial<GenesisState_NumOfAccountsEntry>): GenesisState_NumOfAccountsEntry;
    fromAmino(object: GenesisState_NumOfAccountsEntryAmino): GenesisState_NumOfAccountsEntry;
    toAmino(message: GenesisState_NumOfAccountsEntry): GenesisState_NumOfAccountsEntryAmino;
    fromAminoMsg(object: GenesisState_NumOfAccountsEntryAminoMsg): GenesisState_NumOfAccountsEntry;
    fromProtoMsg(message: GenesisState_NumOfAccountsEntryProtoMsg): GenesisState_NumOfAccountsEntry;
    toProto(message: GenesisState_NumOfAccountsEntry): Uint8Array;
};
export declare const GenesisState_NumOfForwardsEntry: {
    encode(message: GenesisState_NumOfForwardsEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState_NumOfForwardsEntry;
    fromPartial(object: Partial<GenesisState_NumOfForwardsEntry>): GenesisState_NumOfForwardsEntry;
    fromAmino(object: GenesisState_NumOfForwardsEntryAmino): GenesisState_NumOfForwardsEntry;
    toAmino(message: GenesisState_NumOfForwardsEntry): GenesisState_NumOfForwardsEntryAmino;
    fromAminoMsg(object: GenesisState_NumOfForwardsEntryAminoMsg): GenesisState_NumOfForwardsEntry;
    fromProtoMsg(message: GenesisState_NumOfForwardsEntryProtoMsg): GenesisState_NumOfForwardsEntry;
    toProto(message: GenesisState_NumOfForwardsEntry): Uint8Array;
};
export declare const GenesisState_TotalForwardedEntry: {
    encode(message: GenesisState_TotalForwardedEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState_TotalForwardedEntry;
    fromPartial(object: Partial<GenesisState_TotalForwardedEntry>): GenesisState_TotalForwardedEntry;
    fromAmino(object: GenesisState_TotalForwardedEntryAmino): GenesisState_TotalForwardedEntry;
    toAmino(message: GenesisState_TotalForwardedEntry): GenesisState_TotalForwardedEntryAmino;
    fromAminoMsg(object: GenesisState_TotalForwardedEntryAminoMsg): GenesisState_TotalForwardedEntry;
    fromProtoMsg(message: GenesisState_TotalForwardedEntryProtoMsg): GenesisState_TotalForwardedEntry;
    toProto(message: GenesisState_TotalForwardedEntry): Uint8Array;
};
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
