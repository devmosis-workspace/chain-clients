import { Params, ParamsSDKType } from "./params";
import { BundleProposal, BundleProposalSDKType, FinalizedBundle, FinalizedBundleSDKType, RoundRobinProgress, RoundRobinProgressSDKType } from "./bundles";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    bundleProposalList: [],
    finalizedBundleList: [],
    roundRobinProgressList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bundleProposalList) {
      BundleProposal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.finalizedBundleList) {
      FinalizedBundle.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.roundRobinProgressList) {
      RoundRobinProgress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bundleProposalList: Array.isArray(object?.bundleProposalList) ? object.bundleProposalList.map((e: any) => BundleProposal.fromJSON(e)) : [],
      finalizedBundleList: Array.isArray(object?.finalizedBundleList) ? object.finalizedBundleList.map((e: any) => FinalizedBundle.fromJSON(e)) : [],
      roundRobinProgressList: Array.isArray(object?.roundRobinProgressList) ? object.roundRobinProgressList.map((e: any) => RoundRobinProgress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bundleProposalList = object.bundleProposalList?.map(e => BundleProposal.fromPartial(e)) || [];
    message.finalizedBundleList = object.finalizedBundleList?.map(e => FinalizedBundle.fromPartial(e)) || [];
    message.roundRobinProgressList = object.roundRobinProgressList?.map(e => RoundRobinProgress.fromPartial(e)) || [];
    return message;
  }
};