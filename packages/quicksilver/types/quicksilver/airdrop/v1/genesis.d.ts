import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ZoneDrop, ZoneDropAmino, ZoneDropSDKType, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./airdrop";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisState {
    params: Params;
    zoneDrops: ZoneDrop[];
    claimRecords: ClaimRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    zone_drops?: ZoneDropAmino[];
    claim_records?: ClaimRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.airdrop.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    zone_drops: ZoneDropSDKType[];
    claim_records: ClaimRecordSDKType[];
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
