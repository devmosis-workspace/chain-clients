import { NetworkInfo, NetworkInfoSDKType } from "./types";
import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Chain, ChainSDKType } from "../../nexus/exported/v1beta1/types";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params is the parameter set for this module */
export interface Params {
  chain: string;
  confirmationHeight: Long;
  network: string;
  tokenCode: Uint8Array;
  burnable: Uint8Array;
  revoteLockingPeriod: Long;
  networks: NetworkInfo[];
  votingThreshold?: Threshold;
  minVoterCount: Long;
  commandsGasLimit: number;
  votingGracePeriod: Long;
  endBlockerLimit: Long;
  transferLimit: Long;
}
/** Params is the parameter set for this module */
export interface ParamsSDKType {
  chain: string;
  confirmation_height: Long;
  network: string;
  token_code: Uint8Array;
  burnable: Uint8Array;
  revote_locking_period: Long;
  networks: NetworkInfoSDKType[];
  voting_threshold?: ThresholdSDKType;
  min_voter_count: Long;
  commands_gas_limit: number;
  voting_grace_period: Long;
  end_blocker_limit: Long;
  transfer_limit: Long;
}
export interface PendingChain {
  params?: Params;
  chain?: Chain;
}
export interface PendingChainSDKType {
  params?: ParamsSDKType;
  chain?: ChainSDKType;
}
function createBaseParams(): Params {
  return {
    chain: "",
    confirmationHeight: Long.UZERO,
    network: "",
    tokenCode: new Uint8Array(),
    burnable: new Uint8Array(),
    revoteLockingPeriod: Long.ZERO,
    networks: [],
    votingThreshold: undefined,
    minVoterCount: Long.ZERO,
    commandsGasLimit: 0,
    votingGracePeriod: Long.ZERO,
    endBlockerLimit: Long.ZERO,
    transferLimit: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (!message.confirmationHeight.isZero()) {
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
    if (!message.revoteLockingPeriod.isZero()) {
      writer.uint32(56).int64(message.revoteLockingPeriod);
    }
    for (const v of message.networks) {
      NetworkInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.votingThreshold !== undefined) {
      Threshold.encode(message.votingThreshold, writer.uint32(74).fork()).ldelim();
    }
    if (!message.minVoterCount.isZero()) {
      writer.uint32(80).int64(message.minVoterCount);
    }
    if (message.commandsGasLimit !== 0) {
      writer.uint32(88).uint32(message.commandsGasLimit);
    }
    if (!message.votingGracePeriod.isZero()) {
      writer.uint32(104).int64(message.votingGracePeriod);
    }
    if (!message.endBlockerLimit.isZero()) {
      writer.uint32(112).int64(message.endBlockerLimit);
    }
    if (!message.transferLimit.isZero()) {
      writer.uint32(120).uint64(message.transferLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      confirmationHeight: isSet(object.confirmationHeight) ? Long.fromValue(object.confirmationHeight) : Long.UZERO,
      network: isSet(object.network) ? String(object.network) : "",
      tokenCode: isSet(object.tokenCode) ? bytesFromBase64(object.tokenCode) : new Uint8Array(),
      burnable: isSet(object.burnable) ? bytesFromBase64(object.burnable) : new Uint8Array(),
      revoteLockingPeriod: isSet(object.revoteLockingPeriod) ? Long.fromValue(object.revoteLockingPeriod) : Long.ZERO,
      networks: Array.isArray(object?.networks) ? object.networks.map((e: any) => NetworkInfo.fromJSON(e)) : [],
      votingThreshold: isSet(object.votingThreshold) ? Threshold.fromJSON(object.votingThreshold) : undefined,
      minVoterCount: isSet(object.minVoterCount) ? Long.fromValue(object.minVoterCount) : Long.ZERO,
      commandsGasLimit: isSet(object.commandsGasLimit) ? Number(object.commandsGasLimit) : 0,
      votingGracePeriod: isSet(object.votingGracePeriod) ? Long.fromValue(object.votingGracePeriod) : Long.ZERO,
      endBlockerLimit: isSet(object.endBlockerLimit) ? Long.fromValue(object.endBlockerLimit) : Long.ZERO,
      transferLimit: isSet(object.transferLimit) ? Long.fromValue(object.transferLimit) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.chain = object.chain ?? "";
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? Long.fromValue(object.confirmationHeight) : Long.UZERO;
    message.network = object.network ?? "";
    message.tokenCode = object.tokenCode ?? new Uint8Array();
    message.burnable = object.burnable ?? new Uint8Array();
    message.revoteLockingPeriod = object.revoteLockingPeriod !== undefined && object.revoteLockingPeriod !== null ? Long.fromValue(object.revoteLockingPeriod) : Long.ZERO;
    message.networks = object.networks?.map(e => NetworkInfo.fromPartial(e)) || [];
    message.votingThreshold = object.votingThreshold !== undefined && object.votingThreshold !== null ? Threshold.fromPartial(object.votingThreshold) : undefined;
    message.minVoterCount = object.minVoterCount !== undefined && object.minVoterCount !== null ? Long.fromValue(object.minVoterCount) : Long.ZERO;
    message.commandsGasLimit = object.commandsGasLimit ?? 0;
    message.votingGracePeriod = object.votingGracePeriod !== undefined && object.votingGracePeriod !== null ? Long.fromValue(object.votingGracePeriod) : Long.ZERO;
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? Long.fromValue(object.endBlockerLimit) : Long.ZERO;
    message.transferLimit = object.transferLimit !== undefined && object.transferLimit !== null ? Long.fromValue(object.transferLimit) : Long.UZERO;
    return message;
  }
};
function createBasePendingChain(): PendingChain {
  return {
    params: undefined,
    chain: undefined
  };
}
export const PendingChain = {
  encode(message: PendingChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};