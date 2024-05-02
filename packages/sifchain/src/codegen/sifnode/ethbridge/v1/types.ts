import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export const ClaimTypeAmino = ClaimType;
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
  ethereumChainId: bigint;
  /** bridge_contract_address is an EthereumAddress */
  bridgeContractAddress: string;
  nonce: bigint;
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
export interface EthBridgeClaimProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.EthBridgeClaim";
  value: Uint8Array;
}
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaimAmino {
  ethereum_chain_id?: string;
  /** bridge_contract_address is an EthereumAddress */
  bridge_contract_address?: string;
  nonce?: string;
  symbol?: string;
  /** token_contract_address is an EthereumAddress */
  token_contract_address?: string;
  /** ethereum_sender is an EthereumAddress */
  ethereum_sender?: string;
  /** cosmos_receiver is an sdk.AccAddress */
  cosmos_receiver?: string;
  /** validator_address is an sdk.ValAddress */
  validator_address?: string;
  amount?: string;
  claim_type?: ClaimType;
}
export interface EthBridgeClaimAminoMsg {
  type: "/sifnode.ethbridge.v1.EthBridgeClaim";
  value: EthBridgeClaimAmino;
}
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaimSDKType {
  ethereum_chain_id: bigint;
  bridge_contract_address: string;
  nonce: bigint;
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
export interface PeggyTokensProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.PeggyTokens";
  value: Uint8Array;
}
export interface PeggyTokensAmino {
  tokens?: string[];
}
export interface PeggyTokensAminoMsg {
  type: "/sifnode.ethbridge.v1.PeggyTokens";
  value: PeggyTokensAmino;
}
export interface PeggyTokensSDKType {
  tokens: string[];
}
export interface Pause {
  isPaused: boolean;
}
export interface PauseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.Pause";
  value: Uint8Array;
}
export interface PauseAmino {
  is_paused?: boolean;
}
export interface PauseAminoMsg {
  type: "/sifnode.ethbridge.v1.Pause";
  value: PauseAmino;
}
export interface PauseSDKType {
  is_paused: boolean;
}
function createBaseEthBridgeClaim(): EthBridgeClaim {
  return {
    ethereumChainId: BigInt(0),
    bridgeContractAddress: "",
    nonce: BigInt(0),
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
  typeUrl: "/sifnode.ethbridge.v1.EthBridgeClaim",
  encode(message: EthBridgeClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ethereumChainId !== BigInt(0)) {
      writer.uint32(8).int64(message.ethereumChainId);
    }
    if (message.bridgeContractAddress !== "") {
      writer.uint32(18).string(message.bridgeContractAddress);
    }
    if (message.nonce !== BigInt(0)) {
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
      ethereumChainId: isSet(object.ethereumChainId) ? BigInt(object.ethereumChainId.toString()) : BigInt(0),
      bridgeContractAddress: isSet(object.bridgeContractAddress) ? String(object.bridgeContractAddress) : "",
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenContractAddress: isSet(object.tokenContractAddress) ? String(object.tokenContractAddress) : "",
      ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : "",
      cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      claimType: isSet(object.claimType) ? claimTypeFromJSON(object.claimType) : -1
    };
  },
  fromPartial(object: Partial<EthBridgeClaim>): EthBridgeClaim {
    const message = createBaseEthBridgeClaim();
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? BigInt(object.ethereumChainId.toString()) : BigInt(0);
    message.bridgeContractAddress = object.bridgeContractAddress ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.symbol = object.symbol ?? "";
    message.tokenContractAddress = object.tokenContractAddress ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    message.claimType = object.claimType ?? 0;
    return message;
  },
  fromAmino(object: EthBridgeClaimAmino): EthBridgeClaim {
    const message = createBaseEthBridgeClaim();
    if (object.ethereum_chain_id !== undefined && object.ethereum_chain_id !== null) {
      message.ethereumChainId = BigInt(object.ethereum_chain_id);
    }
    if (object.bridge_contract_address !== undefined && object.bridge_contract_address !== null) {
      message.bridgeContractAddress = object.bridge_contract_address;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.token_contract_address !== undefined && object.token_contract_address !== null) {
      message.tokenContractAddress = object.token_contract_address;
    }
    if (object.ethereum_sender !== undefined && object.ethereum_sender !== null) {
      message.ethereumSender = object.ethereum_sender;
    }
    if (object.cosmos_receiver !== undefined && object.cosmos_receiver !== null) {
      message.cosmosReceiver = object.cosmos_receiver;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.claim_type !== undefined && object.claim_type !== null) {
      message.claimType = object.claim_type;
    }
    return message;
  },
  toAmino(message: EthBridgeClaim): EthBridgeClaimAmino {
    const obj: any = {};
    obj.ethereum_chain_id = message.ethereumChainId !== BigInt(0) ? message.ethereumChainId.toString() : undefined;
    obj.bridge_contract_address = message.bridgeContractAddress === "" ? undefined : message.bridgeContractAddress;
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.token_contract_address = message.tokenContractAddress === "" ? undefined : message.tokenContractAddress;
    obj.ethereum_sender = message.ethereumSender === "" ? undefined : message.ethereumSender;
    obj.cosmos_receiver = message.cosmosReceiver === "" ? undefined : message.cosmosReceiver;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.claim_type = message.claimType === 0 ? undefined : message.claimType;
    return obj;
  },
  fromAminoMsg(object: EthBridgeClaimAminoMsg): EthBridgeClaim {
    return EthBridgeClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: EthBridgeClaimProtoMsg): EthBridgeClaim {
    return EthBridgeClaim.decode(message.value);
  },
  toProto(message: EthBridgeClaim): Uint8Array {
    return EthBridgeClaim.encode(message).finish();
  },
  toProtoMsg(message: EthBridgeClaim): EthBridgeClaimProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.EthBridgeClaim",
      value: EthBridgeClaim.encode(message).finish()
    };
  }
};
function createBasePeggyTokens(): PeggyTokens {
  return {
    tokens: []
  };
}
export const PeggyTokens = {
  typeUrl: "/sifnode.ethbridge.v1.PeggyTokens",
  encode(message: PeggyTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PeggyTokensAmino): PeggyTokens {
    const message = createBasePeggyTokens();
    message.tokens = object.tokens?.map(e => e) || [];
    return message;
  },
  toAmino(message: PeggyTokens): PeggyTokensAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e);
    } else {
      obj.tokens = message.tokens;
    }
    return obj;
  },
  fromAminoMsg(object: PeggyTokensAminoMsg): PeggyTokens {
    return PeggyTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: PeggyTokensProtoMsg): PeggyTokens {
    return PeggyTokens.decode(message.value);
  },
  toProto(message: PeggyTokens): Uint8Array {
    return PeggyTokens.encode(message).finish();
  },
  toProtoMsg(message: PeggyTokens): PeggyTokensProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.PeggyTokens",
      value: PeggyTokens.encode(message).finish()
    };
  }
};
function createBasePause(): Pause {
  return {
    isPaused: false
  };
}
export const Pause = {
  typeUrl: "/sifnode.ethbridge.v1.Pause",
  encode(message: Pause, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PauseAmino): Pause {
    const message = createBasePause();
    if (object.is_paused !== undefined && object.is_paused !== null) {
      message.isPaused = object.is_paused;
    }
    return message;
  },
  toAmino(message: Pause): PauseAmino {
    const obj: any = {};
    obj.is_paused = message.isPaused === false ? undefined : message.isPaused;
    return obj;
  },
  fromAminoMsg(object: PauseAminoMsg): Pause {
    return Pause.fromAmino(object.value);
  },
  fromProtoMsg(message: PauseProtoMsg): Pause {
    return Pause.decode(message.value);
  },
  toProto(message: Pause): Uint8Array {
    return Pause.encode(message).finish();
  },
  toProtoMsg(message: Pause): PauseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.Pause",
      value: Pause.encode(message).finish()
    };
  }
};