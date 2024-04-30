import { IncentivizedPool, IncentivizedPoolAmino, IncentivizedPoolSDKType } from "../../osmosis/pool-incentives/v1beta1/query";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "../../osmosis/epochs/genesis";
import { BinaryWriter } from "../../binary";
export interface OsmosisRequestState {
    packetSequence: bigint;
    acknowledged: boolean;
    failed: boolean;
    updatedAtHeight: bigint;
}
export interface OsmosisRequestStateProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.OsmosisRequestState";
    value: Uint8Array;
}
export interface OsmosisRequestStateAmino {
    packet_sequence?: string;
    acknowledged?: boolean;
    failed?: boolean;
    updated_at_height?: string;
}
export interface OsmosisRequestStateAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.OsmosisRequestState";
    value: OsmosisRequestStateAmino;
}
export interface OsmosisRequestStateSDKType {
    packet_sequence: bigint;
    acknowledged: boolean;
    failed: boolean;
    updated_at_height: bigint;
}
export interface IncentivizedPools {
    incentivizedPools: IncentivizedPool[];
}
export interface IncentivizedPoolsProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.IncentivizedPools";
    value: Uint8Array;
}
export interface IncentivizedPoolsAmino {
    incentivized_pools?: IncentivizedPoolAmino[];
}
export interface IncentivizedPoolsAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.IncentivizedPools";
    value: IncentivizedPoolsAmino;
}
export interface IncentivizedPoolsSDKType {
    incentivized_pools: IncentivizedPoolSDKType[];
}
export interface EpochsInfo {
    epochsInfo: EpochInfo[];
}
export interface EpochsInfoProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.EpochsInfo";
    value: Uint8Array;
}
export interface EpochsInfoAmino {
    epochs_info?: EpochInfoAmino[];
}
export interface EpochsInfoAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.EpochsInfo";
    value: EpochsInfoAmino;
}
export interface EpochsInfoSDKType {
    epochs_info: EpochInfoSDKType[];
}
export declare const OsmosisRequestState: {
    typeUrl: string;
    encode(message: OsmosisRequestState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OsmosisRequestState;
    fromPartial(object: Partial<OsmosisRequestState>): OsmosisRequestState;
    fromAmino(object: OsmosisRequestStateAmino): OsmosisRequestState;
    toAmino(message: OsmosisRequestState): OsmosisRequestStateAmino;
    fromAminoMsg(object: OsmosisRequestStateAminoMsg): OsmosisRequestState;
    fromProtoMsg(message: OsmosisRequestStateProtoMsg): OsmosisRequestState;
    toProto(message: OsmosisRequestState): Uint8Array;
    toProtoMsg(message: OsmosisRequestState): OsmosisRequestStateProtoMsg;
};
export declare const IncentivizedPools: {
    typeUrl: string;
    encode(message: IncentivizedPools, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IncentivizedPools;
    fromPartial(object: Partial<IncentivizedPools>): IncentivizedPools;
    fromAmino(object: IncentivizedPoolsAmino): IncentivizedPools;
    toAmino(message: IncentivizedPools): IncentivizedPoolsAmino;
    fromAminoMsg(object: IncentivizedPoolsAminoMsg): IncentivizedPools;
    fromProtoMsg(message: IncentivizedPoolsProtoMsg): IncentivizedPools;
    toProto(message: IncentivizedPools): Uint8Array;
    toProtoMsg(message: IncentivizedPools): IncentivizedPoolsProtoMsg;
};
export declare const EpochsInfo: {
    typeUrl: string;
    encode(message: EpochsInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EpochsInfo;
    fromPartial(object: Partial<EpochsInfo>): EpochsInfo;
    fromAmino(object: EpochsInfoAmino): EpochsInfo;
    toAmino(message: EpochsInfo): EpochsInfoAmino;
    fromAminoMsg(object: EpochsInfoAminoMsg): EpochsInfo;
    fromProtoMsg(message: EpochsInfoProtoMsg): EpochsInfo;
    toProto(message: EpochsInfo): Uint8Array;
    toProtoMsg(message: EpochsInfo): EpochsInfoProtoMsg;
};
