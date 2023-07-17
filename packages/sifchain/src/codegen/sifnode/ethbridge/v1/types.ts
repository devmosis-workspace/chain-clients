import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Claim type enum */
export enum ClaimType {
  /** CLAIM_TYPE_UNSPECIFIED - Unspecified claim type */
  CLAIM_TYPE_UNSPECIFIED = 0,
  /** CLAIM_TYPE_BURN - Burn claim type */
  CLAIM_TYPE_BURN = 1,
  /** CLAIM_TYPE_LOCK - Lock claim type */
  CLAIM_TYPE_LOCK = 2,
  UNRECOGNIZED = -1,
}
export const ClaimTypeSDKType = ClaimType;
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_UNSPECIFIED":
      return ClaimType.CLAIM_TYPE_UNSPECIFIED;
    case 1:
    case "CLAIM_TYPE_BURN":
      return ClaimType.CLAIM_TYPE_BURN;
    case 2:
    case "CLAIM_TYPE_LOCK":
      return ClaimType.CLAIM_TYPE_LOCK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_UNSPECIFIED:
      return "CLAIM_TYPE_UNSPECIFIED";
    case ClaimType.CLAIM_TYPE_BURN:
      return "CLAIM_TYPE_BURN";
    case ClaimType.CLAIM_TYPE_LOCK:
      return "CLAIM_TYPE_LOCK";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaim {
  ethereumChainId: Long;
  /** bridge_contract_address is an EthereumAddress */
  bridgeContractAddress: string;
  nonce: Long;
  symbol: string;
  /** token_contract_address is an EthereumAddress */
  tokenContractAddress: string;
  /** ethereum_sender is an EthereumAddress */
  ethereumSender: string;
  /** cosmos_receiver is an sdk.AccAddress */
  cosmosReceiver: string;
  /** validator_address is an sdk.ValAddress */
  validatorAddress: string;
  amount: string;
  claimType: ClaimType;
}
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaimSDKType {
  ethereum_chain_id: Long;
  bridge_contract_address: string;
  nonce: Long;
  symbol: string;
  token_contract_address: string;
  ethereum_sender: string;
  cosmos_receiver: string;
  validator_address: string;
  amount: string;
  claim_type: ClaimType;
}
export interface PeggyTokens {
  tokens: string[];
}
export interface PeggyTokensSDKType {
  tokens: string[];
}
/** GenesisState for ethbridge */
export interface GenesisState {
  cethReceiveAccount: string;
  peggyTokens: string[];
}
/** GenesisState for ethbridge */
export interface GenesisStateSDKType {
  ceth_receive_account: string;
  peggy_tokens: string[];
}
export interface Pause {
  isPaused: boolean;
}
export interface PauseSDKType {
  is_paused: boolean;
}
function createBaseEthBridgeClaim(): EthBridgeClaim {
  return {
    ethereumChainId: Long.ZERO,
    bridgeContractAddress: "",
    nonce: Long.ZERO,
    symbol: "",
    tokenContractAddress: "",
    ethereumSender: "",
    cosmosReceiver: "",
    validatorAddress: "",
    amount: "",
    claimType: 0
  };
}
export const EthBridgeClaim = {
  encode(message: EthBridgeClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ethereumChainId.isZero()) {
      writer.uint32(8).int64(message.ethereumChainId);
    }
    if (message.bridgeContractAddress !== "") {
      writer.uint32(18).string(message.bridgeContractAddress);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).int64(message.nonce);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.tokenContractAddress !== "") {
      writer.uint32(42).string(message.tokenContractAddress);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(50).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(58).string(message.cosmosReceiver);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(66).string(message.validatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(74).string(message.amount);
    }
    if (message.claimType !== 0) {
      writer.uint32(80).int32(message.claimType);
    }
    return writer;
  },
  fromJSON(object: any): EthBridgeClaim {
    return {
      ethereumChainId: isSet(object.ethereumChainId) ? Long.fromValue(object.ethereumChainId) : Long.ZERO,
      bridgeContractAddress: isSet(object.bridgeContractAddress) ? String(object.bridgeContractAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.ZERO,
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenContractAddress: isSet(object.tokenContractAddress) ? String(object.tokenContractAddress) : "",
      ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : "",
      cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      claimType: isSet(object.claimType) ? claimTypeFromJSON(object.claimType) : 0
    };
  },
  fromPartial(object: Partial<EthBridgeClaim>): EthBridgeClaim {
    const message = createBaseEthBridgeClaim();
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? Long.fromValue(object.ethereumChainId) : Long.ZERO;
    message.bridgeContractAddress = object.bridgeContractAddress ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.ZERO;
    message.symbol = object.symbol ?? "";
    message.tokenContractAddress = object.tokenContractAddress ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    message.claimType = object.claimType ?? 0;
    return message;
  }
};
function createBasePeggyTokens(): PeggyTokens {
  return {
    tokens: []
  };
}
export const PeggyTokens = {
  encode(message: PeggyTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokens) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): PeggyTokens {
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<PeggyTokens>): PeggyTokens {
    const message = createBasePeggyTokens();
    message.tokens = object.tokens?.map(e => e) || [];
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    cethReceiveAccount: "",
    peggyTokens: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cethReceiveAccount !== "") {
      writer.uint32(10).string(message.cethReceiveAccount);
    }
    for (const v of message.peggyTokens) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      cethReceiveAccount: isSet(object.cethReceiveAccount) ? String(object.cethReceiveAccount) : "",
      peggyTokens: Array.isArray(object?.peggyTokens) ? object.peggyTokens.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.cethReceiveAccount = object.cethReceiveAccount ?? "";
    message.peggyTokens = object.peggyTokens?.map(e => e) || [];
    return message;
  }
};
function createBasePause(): Pause {
  return {
    isPaused: false
  };
}
export const Pause = {
  encode(message: Pause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPaused === true) {
      writer.uint32(8).bool(message.isPaused);
    }
    return writer;
  },
  fromJSON(object: any): Pause {
    return {
      isPaused: isSet(object.isPaused) ? Boolean(object.isPaused) : false
    };
  },
  fromPartial(object: Partial<Pause>): Pause {
    const message = createBasePause();
    message.isPaused = object.isPaused ?? false;
    return message;
  }
};