import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { VaultRecord, VaultRecordAmino, VaultRecordSDKType, VaultShareRecord, VaultShareRecordAmino, VaultShareRecordSDKType } from "./vault";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the earn module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters related to earn */
    params: Params;
    /** vault_records defines the available vaults */
    vaultRecords: VaultRecord[];
    /** share_records defines the owned shares of each vault */
    vaultShareRecords: VaultShareRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.earn.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the earn module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters related to earn */
    params?: ParamsAmino;
    /** vault_records defines the available vaults */
    vault_records?: VaultRecordAmino[];
    /** share_records defines the owned shares of each vault */
    vault_share_records?: VaultShareRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kava.earn.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the earn module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    vault_records: VaultRecordSDKType[];
    vault_share_records: VaultShareRecordSDKType[];
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
