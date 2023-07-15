import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
  power: Long;
  ethereumAddress: string;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
  power: Long;
  ethereum_address: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
  nonce: Long;
  members: BridgeValidator[];
  height: Long;
  rewardAmount: string;
  /** the reward token in it's Ethereum hex address representation */
  rewardToken: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each peggy validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
  nonce: Long;
  members: BridgeValidatorSDKType[];
  height: Long;
  reward_amount: string;
  reward_token: string;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeight {
  cosmosBlockHeight: Long;
  ethereumBlockHeight: Long;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightSDKType {
  cosmos_block_height: Long;
  ethereum_block_height: Long;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEvent {
  ethereumEventNonce: Long;
  ethereumEventHeight: Long;
}
/** LastClaimEvent stores last claim event details of validator. */
export interface LastClaimEventSDKType {
  ethereum_event_nonce: Long;
  ethereum_event_height: Long;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
  erc20: string;
  denom: string;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomSDKType {
  erc20: string;
  denom: string;
}
function createBaseBridgeValidator(): BridgeValidator {
  return {
    power: Long.UZERO,
    ethereumAddress: ""
  };
}
export const BridgeValidator = {
  encode(message: BridgeValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.power.isZero()) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(18).string(message.ethereumAddress);
    }
    return writer;
  },
  fromJSON(object: any): BridgeValidator {
    return {
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.UZERO,
      ethereumAddress: isSet(object.ethereumAddress) ? String(object.ethereumAddress) : ""
    };
  },
  fromPartial(object: Partial<BridgeValidator>): BridgeValidator {
    const message = createBaseBridgeValidator();
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.UZERO;
    message.ethereumAddress = object.ethereumAddress ?? "";
    return message;
  }
};
function createBaseValset(): Valset {
  return {
    nonce: Long.UZERO,
    members: [],
    height: Long.UZERO,
    rewardAmount: "",
    rewardToken: ""
  };
}
export const Valset = {
  encode(message: Valset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.rewardAmount !== "") {
      writer.uint32(34).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(42).string(message.rewardToken);
    }
    return writer;
  },
  fromJSON(object: any): Valset {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
      rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : ""
    };
  },
  fromPartial(object: Partial<Valset>): Valset {
    const message = createBaseValset();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  }
};
function createBaseLastObservedEthereumBlockHeight(): LastObservedEthereumBlockHeight {
  return {
    cosmosBlockHeight: Long.UZERO,
    ethereumBlockHeight: Long.UZERO
  };
}
export const LastObservedEthereumBlockHeight = {
  encode(message: LastObservedEthereumBlockHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cosmosBlockHeight.isZero()) {
      writer.uint32(8).uint64(message.cosmosBlockHeight);
    }
    if (!message.ethereumBlockHeight.isZero()) {
      writer.uint32(16).uint64(message.ethereumBlockHeight);
    }
    return writer;
  },
  fromJSON(object: any): LastObservedEthereumBlockHeight {
    return {
      cosmosBlockHeight: isSet(object.cosmosBlockHeight) ? Long.fromValue(object.cosmosBlockHeight) : Long.UZERO,
      ethereumBlockHeight: isSet(object.ethereumBlockHeight) ? Long.fromValue(object.ethereumBlockHeight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<LastObservedEthereumBlockHeight>): LastObservedEthereumBlockHeight {
    const message = createBaseLastObservedEthereumBlockHeight();
    message.cosmosBlockHeight = object.cosmosBlockHeight !== undefined && object.cosmosBlockHeight !== null ? Long.fromValue(object.cosmosBlockHeight) : Long.UZERO;
    message.ethereumBlockHeight = object.ethereumBlockHeight !== undefined && object.ethereumBlockHeight !== null ? Long.fromValue(object.ethereumBlockHeight) : Long.UZERO;
    return message;
  }
};
function createBaseLastClaimEvent(): LastClaimEvent {
  return {
    ethereumEventNonce: Long.UZERO,
    ethereumEventHeight: Long.UZERO
  };
}
export const LastClaimEvent = {
  encode(message: LastClaimEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ethereumEventNonce.isZero()) {
      writer.uint32(8).uint64(message.ethereumEventNonce);
    }
    if (!message.ethereumEventHeight.isZero()) {
      writer.uint32(16).uint64(message.ethereumEventHeight);
    }
    return writer;
  },
  fromJSON(object: any): LastClaimEvent {
    return {
      ethereumEventNonce: isSet(object.ethereumEventNonce) ? Long.fromValue(object.ethereumEventNonce) : Long.UZERO,
      ethereumEventHeight: isSet(object.ethereumEventHeight) ? Long.fromValue(object.ethereumEventHeight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<LastClaimEvent>): LastClaimEvent {
    const message = createBaseLastClaimEvent();
    message.ethereumEventNonce = object.ethereumEventNonce !== undefined && object.ethereumEventNonce !== null ? Long.fromValue(object.ethereumEventNonce) : Long.UZERO;
    message.ethereumEventHeight = object.ethereumEventHeight !== undefined && object.ethereumEventHeight !== null ? Long.fromValue(object.ethereumEventHeight) : Long.UZERO;
    return message;
  }
};
function createBaseERC20ToDenom(): ERC20ToDenom {
  return {
    erc20: "",
    denom: ""
  };
}
export const ERC20ToDenom = {
  encode(message: ERC20ToDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): ERC20ToDenom {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<ERC20ToDenom>): ERC20ToDenom {
    const message = createBaseERC20ToDenom();
    message.erc20 = object.erc20 ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};