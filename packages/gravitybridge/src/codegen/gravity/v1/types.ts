import { Metadata, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../helpers";
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
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
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
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
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
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposal {
  title: string;
  description: string;
  targetNonce: Long;
}
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposalSDKType {
  title: string;
  description: string;
  target_nonce: Long;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposal {
  title: string;
  description: string;
  denom: string;
  recipients: Uint8Array;
  amounts: Long[];
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposalSDKType {
  title: string;
  description: string;
  denom: string;
  recipients: Uint8Array;
  amounts: Long[];
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposal {
  title: string;
  description: string;
  metadata?: Metadata;
  ibcDenom: string;
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposalSDKType {
  title: string;
  description: string;
  metadata?: MetadataSDKType;
  ibc_denom: string;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForward {
  /** the destination address. sdk.AccAddress does not preserve foreign prefixes */
  foreignReceiver: string;
  /** the token sent from ethereum to the ibc-enabled chain over `IbcChannel` */
  token?: Coin;
  /** the IBC channel to send `Amount` over via ibc-transfer module */
  ibcChannel: string;
  /** the EventNonce from the MsgSendToCosmosClaim, used for ordering the queue */
  eventNonce: Long;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForwardSDKType {
  foreign_receiver: string;
  token?: CoinSDKType;
  ibc_channel: string;
  event_nonce: Long;
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
function createBaseUnhaltBridgeProposal(): UnhaltBridgeProposal {
  return {
    title: "",
    description: "",
    targetNonce: Long.UZERO
  };
}
export const UnhaltBridgeProposal = {
  encode(message: UnhaltBridgeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (!message.targetNonce.isZero()) {
      writer.uint32(32).uint64(message.targetNonce);
    }
    return writer;
  },
  fromJSON(object: any): UnhaltBridgeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      targetNonce: isSet(object.targetNonce) ? Long.fromValue(object.targetNonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<UnhaltBridgeProposal>): UnhaltBridgeProposal {
    const message = createBaseUnhaltBridgeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.targetNonce = object.targetNonce !== undefined && object.targetNonce !== null ? Long.fromValue(object.targetNonce) : Long.UZERO;
    return message;
  }
};
function createBaseAirdropProposal(): AirdropProposal {
  return {
    title: "",
    description: "",
    denom: "",
    recipients: new Uint8Array(),
    amounts: []
  };
}
export const AirdropProposal = {
  encode(message: AirdropProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.recipients.length !== 0) {
      writer.uint32(34).bytes(message.recipients);
    }
    writer.uint32(42).fork();
    for (const v of message.amounts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): AirdropProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      recipients: isSet(object.recipients) ? bytesFromBase64(object.recipients) : new Uint8Array(),
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<AirdropProposal>): AirdropProposal {
    const message = createBaseAirdropProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.recipients = object.recipients ?? new Uint8Array();
    message.amounts = object.amounts?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseIBCMetadataProposal(): IBCMetadataProposal {
  return {
    title: "",
    description: "",
    metadata: undefined,
    ibcDenom: ""
  };
}
export const IBCMetadataProposal = {
  encode(message: IBCMetadataProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.ibcDenom !== "") {
      writer.uint32(34).string(message.ibcDenom);
    }
    return writer;
  },
  fromJSON(object: any): IBCMetadataProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      ibcDenom: isSet(object.ibcDenom) ? String(object.ibcDenom) : ""
    };
  },
  fromPartial(object: Partial<IBCMetadataProposal>): IBCMetadataProposal {
    const message = createBaseIBCMetadataProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.ibcDenom = object.ibcDenom ?? "";
    return message;
  }
};
function createBasePendingIbcAutoForward(): PendingIbcAutoForward {
  return {
    foreignReceiver: "",
    token: undefined,
    ibcChannel: "",
    eventNonce: Long.UZERO
  };
}
export const PendingIbcAutoForward = {
  encode(message: PendingIbcAutoForward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.foreignReceiver !== "") {
      writer.uint32(10).string(message.foreignReceiver);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    if (message.ibcChannel !== "") {
      writer.uint32(26).string(message.ibcChannel);
    }
    if (!message.eventNonce.isZero()) {
      writer.uint32(32).uint64(message.eventNonce);
    }
    return writer;
  },
  fromJSON(object: any): PendingIbcAutoForward {
    return {
      foreignReceiver: isSet(object.foreignReceiver) ? String(object.foreignReceiver) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      ibcChannel: isSet(object.ibcChannel) ? String(object.ibcChannel) : "",
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PendingIbcAutoForward>): PendingIbcAutoForward {
    const message = createBasePendingIbcAutoForward();
    message.foreignReceiver = object.foreignReceiver ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.ibcChannel = object.ibcChannel ?? "";
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    return message;
  }
};