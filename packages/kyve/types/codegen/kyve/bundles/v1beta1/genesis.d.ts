import { Params, ParamsSDKType } from "./params";
import { BundleProposal, BundleProposalSDKType, FinalizedBundle, FinalizedBundleSDKType, RoundRobinProgress, RoundRobinProgressSDKType } from "./bundles";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the bundles module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** bundle_proposal_list ... */
    bundleProposalList: BundleProposal[];
    /** finalized_bundle_list ... */
    finalizedBundleList: FinalizedBundle[];
    /** round_robin_progress_list ... */
    roundRobinProgressList: RoundRobinProgress[];
}
/** GenesisState defines the bundles module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    bundle_proposal_list: BundleProposalSDKType[];
    finalized_bundle_list: FinalizedBundleSDKType[];
    round_robin_progress_list: RoundRobinProgressSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
