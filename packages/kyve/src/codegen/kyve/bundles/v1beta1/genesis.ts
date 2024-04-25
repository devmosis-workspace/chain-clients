import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BundleProposal, BundleProposalAmino, BundleProposalSDKType, FinalizedBundle, FinalizedBundleAmino, FinalizedBundleSDKType, RoundRobinProgress, RoundRobinProgressAmino, RoundRobinProgressSDKType, BundleVersionMap, BundleVersionMapAmino, BundleVersionMapSDKType } from "./bundles";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    bundleProposalList: [],
    finalizedBundleList: [],
    roundRobinProgressList: [],
    bundleVersionMap: BundleVersionMap.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/kyve.bundles.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.bundleVersionMap !== undefined) {
      BundleVersionMap.encode(message.bundleVersionMap, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bundleProposalList: Array.isArray(object?.bundleProposalList) ? object.bundleProposalList.map((e: any) => BundleProposal.fromJSON(e)) : [],
      finalizedBundleList: Array.isArray(object?.finalizedBundleList) ? object.finalizedBundleList.map((e: any) => FinalizedBundle.fromJSON(e)) : [],
      roundRobinProgressList: Array.isArray(object?.roundRobinProgressList) ? object.roundRobinProgressList.map((e: any) => RoundRobinProgress.fromJSON(e)) : [],
      bundleVersionMap: isSet(object.bundleVersionMap) ? BundleVersionMap.fromJSON(object.bundleVersionMap) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bundleProposalList = object.bundleProposalList?.map(e => BundleProposal.fromPartial(e)) || [];
    message.finalizedBundleList = object.finalizedBundleList?.map(e => FinalizedBundle.fromPartial(e)) || [];
    message.roundRobinProgressList = object.roundRobinProgressList?.map(e => RoundRobinProgress.fromPartial(e)) || [];
    message.bundleVersionMap = object.bundleVersionMap !== undefined && object.bundleVersionMap !== null ? BundleVersionMap.fromPartial(object.bundleVersionMap) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.bundleProposalList = object.bundle_proposal_list?.map(e => BundleProposal.fromAmino(e)) || [];
    message.finalizedBundleList = object.finalized_bundle_list?.map(e => FinalizedBundle.fromAmino(e)) || [];
    message.roundRobinProgressList = object.round_robin_progress_list?.map(e => RoundRobinProgress.fromAmino(e)) || [];
    if (object.bundle_version_map !== undefined && object.bundle_version_map !== null) {
      message.bundleVersionMap = BundleVersionMap.fromAmino(object.bundle_version_map);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.bundleProposalList) {
      obj.bundle_proposal_list = message.bundleProposalList.map(e => e ? BundleProposal.toAmino(e) : undefined);
    } else {
      obj.bundle_proposal_list = [];
    }
    if (message.finalizedBundleList) {
      obj.finalized_bundle_list = message.finalizedBundleList.map(e => e ? FinalizedBundle.toAmino(e) : undefined);
    } else {
      obj.finalized_bundle_list = [];
    }
    if (message.roundRobinProgressList) {
      obj.round_robin_progress_list = message.roundRobinProgressList.map(e => e ? RoundRobinProgress.toAmino(e) : undefined);
    } else {
      obj.round_robin_progress_list = [];
    }
    obj.bundle_version_map = message.bundleVersionMap ? BundleVersionMap.toAmino(message.bundleVersionMap) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kyve.bundles.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};