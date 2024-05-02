import { BinaryWriter } from "../../../binary";
export declare enum Permission {
    UNSPECIFIED = 0,
    CLP = 1,
    IBCEXPORT = 2,
    IBCIMPORT = 3,
    DISABLE_BUY = 4,
    DISABLE_SELL = 5,
    UNRECOGNIZED = -1
}
export declare const PermissionSDKType: typeof Permission;
export declare const PermissionAmino: typeof Permission;
export declare function permissionFromJSON(object: any): Permission;
export declare function permissionToJSON(object: Permission): string;
export interface SifnodeTokenRegistry {
    entries: RegistryEntry[];
}
export interface SifnodeTokenRegistryProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.SifnodeTokenRegistry";
    value: Uint8Array;
}
export interface SifnodeTokenRegistryAmino {
    entries?: RegistryEntryAmino[];
}
export interface SifnodeTokenRegistryAminoMsg {
    type: "/sifnode.tokenregistry.v1.SifnodeTokenRegistry";
    value: SifnodeTokenRegistryAmino;
}
export interface SifnodeTokenRegistrySDKType {
    entries: RegistryEntrySDKType[];
}
export interface RegistryEntry {
    decimals: bigint;
    denom: string;
    baseDenom: string;
    path: string;
    ibcChannelId: string;
    ibcCounterpartyChannelId: string;
    displayName: string;
    displaySymbol: string;
    network: string;
    address: string;
    externalSymbol: string;
    transferLimit: string;
    permissions: Permission[];
    /**
     * The name of denomination unit of this token that is the smallest unit
     * stored. IBC imports of this RegistryEntry convert and store funds as
     * unit_denom. Several different denom units of a token may be imported into
     * this same unit denom, they should all be stored under the same unit_denom
     * if they are the same token. When exporting a RegistryEntry where unit_denom
     * != denom, then unit_denom can, in future, be used to indicate the source of
     * funds for a denom unit that does not actually exist on chain, enabling
     * other chains to overcome the uint64 limit on the packet level and import
     * large amounts of high precision tokens easily. ie. microrowan -> rowan i.e
     * rowan -> rowan
     */
    unitDenom: string;
    /**
     * The name of denomination unit of this token that should appear on
     * counterparty chain when this unit is exported. If empty, the denom is
     * exported as is. Generally this will only be used to map a high precision
     * (unit_denom) to a lower precision, to overcome the current uint64 limit on
     * the packet level. i.e rowan -> microrowan i.e microrowan -> microrowan
     */
    ibcCounterpartyDenom: string;
    ibcCounterpartyChainId: string;
}
export interface RegistryEntryProtoMsg {
    typeUrl: "/sifnode.tokenregistry.v1.RegistryEntry";
    value: Uint8Array;
}
export interface RegistryEntryAmino {
    decimals?: string;
    denom?: string;
    base_denom?: string;
    path?: string;
    ibc_channel_id?: string;
    ibc_counterparty_channel_id?: string;
    display_name?: string;
    display_symbol?: string;
    network?: string;
    address?: string;
    external_symbol?: string;
    transfer_limit?: string;
    permissions?: Permission[];
    /**
     * The name of denomination unit of this token that is the smallest unit
     * stored. IBC imports of this RegistryEntry convert and store funds as
     * unit_denom. Several different denom units of a token may be imported into
     * this same unit denom, they should all be stored under the same unit_denom
     * if they are the same token. When exporting a RegistryEntry where unit_denom
     * != denom, then unit_denom can, in future, be used to indicate the source of
     * funds for a denom unit that does not actually exist on chain, enabling
     * other chains to overcome the uint64 limit on the packet level and import
     * large amounts of high precision tokens easily. ie. microrowan -> rowan i.e
     * rowan -> rowan
     */
    unit_denom?: string;
    /**
     * The name of denomination unit of this token that should appear on
     * counterparty chain when this unit is exported. If empty, the denom is
     * exported as is. Generally this will only be used to map a high precision
     * (unit_denom) to a lower precision, to overcome the current uint64 limit on
     * the packet level. i.e rowan -> microrowan i.e microrowan -> microrowan
     */
    ibc_counterparty_denom?: string;
    ibc_counterparty_chain_id?: string;
}
export interface RegistryEntryAminoMsg {
    type: "/sifnode.tokenregistry.v1.RegistryEntry";
    value: RegistryEntryAmino;
}
export interface RegistryEntrySDKType {
    decimals: bigint;
    denom: string;
    base_denom: string;
    path: string;
    ibc_channel_id: string;
    ibc_counterparty_channel_id: string;
    display_name: string;
    display_symbol: string;
    network: string;
    address: string;
    external_symbol: string;
    transfer_limit: string;
    permissions: Permission[];
    unit_denom: string;
    ibc_counterparty_denom: string;
    ibc_counterparty_chain_id: string;
}
export declare const SifnodeTokenRegistry: {
    typeUrl: string;
    encode(message: SifnodeTokenRegistry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SifnodeTokenRegistry;
    fromPartial(object: Partial<SifnodeTokenRegistry>): SifnodeTokenRegistry;
    fromAmino(object: SifnodeTokenRegistryAmino): SifnodeTokenRegistry;
    toAmino(message: SifnodeTokenRegistry): SifnodeTokenRegistryAmino;
    fromAminoMsg(object: SifnodeTokenRegistryAminoMsg): SifnodeTokenRegistry;
    fromProtoMsg(message: SifnodeTokenRegistryProtoMsg): SifnodeTokenRegistry;
    toProto(message: SifnodeTokenRegistry): Uint8Array;
    toProtoMsg(message: SifnodeTokenRegistry): SifnodeTokenRegistryProtoMsg;
};
export declare const RegistryEntry: {
    typeUrl: string;
    encode(message: RegistryEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegistryEntry;
    fromPartial(object: Partial<RegistryEntry>): RegistryEntry;
    fromAmino(object: RegistryEntryAmino): RegistryEntry;
    toAmino(message: RegistryEntry): RegistryEntryAmino;
    fromAminoMsg(object: RegistryEntryAminoMsg): RegistryEntry;
    fromProtoMsg(message: RegistryEntryProtoMsg): RegistryEntry;
    toProto(message: RegistryEntry): Uint8Array;
    toProtoMsg(message: RegistryEntry): RegistryEntryProtoMsg;
};
