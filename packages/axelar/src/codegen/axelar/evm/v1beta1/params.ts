import { NetworkInfo, NetworkInfoAmino, NetworkInfoSDKType } from "./types";
import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Chain, ChainAmino, ChainSDKType } from "../../nexus/exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** Params is the parameter set for this module */
export interface Params {
  chain: string;
  confirmationHeight: bigint;
  network: string;
  tokenCode: Uint8Array;
  burnable: Uint8Array;
  revoteLockingPeriod: bigint;
  networks: NetworkInfo[];
  votingThreshold: Threshold;
  minVoterCount: bigint;
  commandsGasLimit: number;
  votingGracePeriod: bigint;
  endBlockerLimit: bigint;
  transferLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.Params";
  value: Uint8Array;
}
/** Params is the parameter set for this module */
export interface ParamsAmino {
  chain: string;
  confirmation_height: string;
  network: string;
  token_code: Uint8Array;
  burnable: Uint8Array;
  revote_locking_period: string;
  networks: NetworkInfoAmino[];
  voting_threshold?: ThresholdAmino;
  min_voter_count: string;
  commands_gas_limit: number;
  voting_grace_period: string;
  end_blocker_limit: string;
  transfer_limit: string;
}
export interface ParamsAminoMsg {
  type: "/axelar.evm.v1beta1.Params";
  value: ParamsAmino;
}
/** Params is the parameter set for this module */
export interface ParamsSDKType {
  chain: string;
  confirmation_height: bigint;
  network: string;
  token_code: Uint8Array;
  burnable: Uint8Array;
  revote_locking_period: bigint;
  networks: NetworkInfoSDKType[];
  voting_threshold: ThresholdSDKType;
  min_voter_count: bigint;
  commands_gas_limit: number;
  voting_grace_period: bigint;
  end_blocker_limit: bigint;
  transfer_limit: bigint;
}
export interface PendingChain {
  params: Params;
  chain: Chain;
}
export interface PendingChainProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.PendingChain";
  value: Uint8Array;
}
export interface PendingChainAmino {
  params?: ParamsAmino;
  chain?: ChainAmino;
}
export interface PendingChainAminoMsg {
  type: "/axelar.evm.v1beta1.PendingChain";
  value: PendingChainAmino;
}
export interface PendingChainSDKType {
  params: ParamsSDKType;
  chain: ChainSDKType;
}
function createBaseParams(): Params {
  return {
    chain: "",
    confirmationHeight: BigInt(0),
    network: "",
    tokenCode: new Uint8Array(),
    burnable: new Uint8Array(),
    revoteLockingPeriod: BigInt(0),
    networks: [],
    votingThreshold: Threshold.fromPartial({}),
    minVoterCount: BigInt(0),
    commandsGasLimit: 0,
    votingGracePeriod: BigInt(0),
    endBlockerLimit: BigInt(0),
    transferLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/axelar.evm.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.confirmationHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.confirmationHeight);
    }
    if (message.network !== "") {
      writer.uint32(26).string(message.network);
    }
    if (message.tokenCode.length !== 0) {
      writer.uint32(42).bytes(message.tokenCode);
    }
    if (message.burnable.length !== 0) {
      writer.uint32(50).bytes(message.burnable);
    }
    if (message.revoteLockingPeriod !== BigInt(0)) {
      writer.uint32(56).int64(message.revoteLockingPeriod);
    }
    for (const v of message.networks) {
      NetworkInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.votingThreshold !== undefined) {
      Threshold.encode(message.votingThreshold, writer.uint32(74).fork()).ldelim();
    }
    if (message.minVoterCount !== BigInt(0)) {
      writer.uint32(80).int64(message.minVoterCount);
    }
    if (message.commandsGasLimit !== 0) {
      writer.uint32(88).uint32(message.commandsGasLimit);
    }
    if (message.votingGracePeriod !== BigInt(0)) {
      writer.uint32(104).int64(message.votingGracePeriod);
    }
    if (message.endBlockerLimit !== BigInt(0)) {
      writer.uint32(112).int64(message.endBlockerLimit);
    }
    if (message.transferLimit !== BigInt(0)) {
      writer.uint32(120).uint64(message.transferLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
      network: isSet(object.network) ? String(object.network) : "",
      tokenCode: isSet(object.tokenCode) ? bytesFromBase64(object.tokenCode) : new Uint8Array(),
      burnable: isSet(object.burnable) ? bytesFromBase64(object.burnable) : new Uint8Array(),
      revoteLockingPeriod: isSet(object.revoteLockingPeriod) ? BigInt(object.revoteLockingPeriod.toString()) : BigInt(0),
      networks: Array.isArray(object?.networks) ? object.networks.map((e: any) => NetworkInfo.fromJSON(e)) : [],
      votingThreshold: isSet(object.votingThreshold) ? Threshold.fromJSON(object.votingThreshold) : undefined,
      minVoterCount: isSet(object.minVoterCount) ? BigInt(object.minVoterCount.toString()) : BigInt(0),
      commandsGasLimit: isSet(object.commandsGasLimit) ? Number(object.commandsGasLimit) : 0,
      votingGracePeriod: isSet(object.votingGracePeriod) ? BigInt(object.votingGracePeriod.toString()) : BigInt(0),
      endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0),
      transferLimit: isSet(object.transferLimit) ? BigInt(object.transferLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.chain = object.chain ?? "";
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
    message.network = object.network ?? "";
    message.tokenCode = object.tokenCode ?? new Uint8Array();
    message.burnable = object.burnable ?? new Uint8Array();
    message.revoteLockingPeriod = object.revoteLockingPeriod !== undefined && object.revoteLockingPeriod !== null ? BigInt(object.revoteLockingPeriod.toString()) : BigInt(0);
    message.networks = object.networks?.map(e => NetworkInfo.fromPartial(e)) || [];
    message.votingThreshold = object.votingThreshold !== undefined && object.votingThreshold !== null ? Threshold.fromPartial(object.votingThreshold) : undefined;
    message.minVoterCount = object.minVoterCount !== undefined && object.minVoterCount !== null ? BigInt(object.minVoterCount.toString()) : BigInt(0);
    message.commandsGasLimit = object.commandsGasLimit ?? 0;
    message.votingGracePeriod = object.votingGracePeriod !== undefined && object.votingGracePeriod !== null ? BigInt(object.votingGracePeriod.toString()) : BigInt(0);
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
    message.transferLimit = object.transferLimit !== undefined && object.transferLimit !== null ? BigInt(object.transferLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      chain: object.chain,
      confirmationHeight: BigInt(object.confirmation_height),
      network: object.network,
      tokenCode: object.token_code,
      burnable: object.burnable,
      revoteLockingPeriod: BigInt(object.revote_locking_period),
      networks: Array.isArray(object?.networks) ? object.networks.map((e: any) => NetworkInfo.fromAmino(e)) : [],
      votingThreshold: object?.voting_threshold ? Threshold.fromAmino(object.voting_threshold) : undefined,
      minVoterCount: BigInt(object.min_voter_count),
      commandsGasLimit: object.commands_gas_limit,
      votingGracePeriod: BigInt(object.voting_grace_period),
      endBlockerLimit: BigInt(object.end_blocker_limit),
      transferLimit: BigInt(object.transfer_limit)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
    obj.network = message.network;
    obj.token_code = message.tokenCode;
    obj.burnable = message.burnable;
    obj.revote_locking_period = message.revoteLockingPeriod ? message.revoteLockingPeriod.toString() : undefined;
    if (message.networks) {
      obj.networks = message.networks.map(e => e ? NetworkInfo.toAmino(e) : undefined);
    } else {
      obj.networks = [];
    }
    obj.voting_threshold = message.votingThreshold ? Threshold.toAmino(message.votingThreshold) : undefined;
    obj.min_voter_count = message.minVoterCount ? message.minVoterCount.toString() : undefined;
    obj.commands_gas_limit = message.commandsGasLimit;
    obj.voting_grace_period = message.votingGracePeriod ? message.votingGracePeriod.toString() : undefined;
    obj.end_blocker_limit = message.endBlockerLimit ? message.endBlockerLimit.toString() : undefined;
    obj.transfer_limit = message.transferLimit ? message.transferLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBasePendingChain(): PendingChain {
  return {
    params: Params.fromPartial({}),
    chain: Chain.fromPartial({})
  };
}
export const PendingChain = {
  typeUrl: "/axelar.evm.v1beta1.PendingChain",
  encode(message: PendingChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PendingChain {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined
    };
  },
  fromPartial(object: Partial<PendingChain>): PendingChain {
    const message = createBasePendingChain();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
    return message;
  },
  fromAmino(object: PendingChainAmino): PendingChain {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      chain: object?.chain ? Chain.fromAmino(object.chain) : undefined
    };
  },
  toAmino(message: PendingChain): PendingChainAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.chain = message.chain ? Chain.toAmino(message.chain) : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingChainAminoMsg): PendingChain {
    return PendingChain.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingChainProtoMsg): PendingChain {
    return PendingChain.decode(message.value);
  },
  toProto(message: PendingChain): Uint8Array {
    return PendingChain.encode(message).finish();
  },
  toProtoMsg(message: PendingChain): PendingChainProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.PendingChain",
      value: PendingChain.encode(message).finish()
    };
  }
};