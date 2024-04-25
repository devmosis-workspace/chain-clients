import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BundleProposal, BundleProposalAmino, BundleProposalSDKType, FinalizedBundle, FinalizedBundleAmino, FinalizedBundleSDKType, RoundRobinProgress, RoundRobinProgressAmino, RoundRobinProgressSDKType, BundleVersionMap, BundleVersionMapAmino, BundleVersionMapSDKType } from "./bundles";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the bundles module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** bundle_proposal_list ... */
    bundleProposalList: BundleProposal[];
    /** finalized_bundle_list ... */
    finalizedBundleList: FinalizedBundle[];
    /** round_robin_progress_list ... */
    roundRobinProgressList: RoundRobinProgress[];
    /** bundle_version_map ... */
    bundleVersionMap: BundleVersionMap;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the bundles module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    /** bundle_proposal_list ... */
    bundle_proposal_list?: BundleProposalAmino[];
    /** finalized_bundle_list ... */
    finalized_bundle_list?: FinalizedBundleAmino[];
    /** round_robin_progress_list ... */
    round_robin_progress_list?: RoundRobinProgressAmino[];
    /** bundle_version_map ... */
    bundle_version_map?: BundleVersionMapAmino;
}
export interface GenesisStateAminoMsg {
    type: "/kyve.bundles.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the bundles module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    bundle_proposal_list: BundleProposalSDKType[];
    finalized_bundle_list: FinalizedBundleSDKType[];
    round_robin_progress_list: RoundRobinProgressSDKType[];
    bundle_version_map: BundleVersionMapSDKType;
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
