import { Metadata, MetadataAmino, MetadataSDKType } from "../../cosmos/bank/v1beta1/bank";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
  power: bigint;
  ethereumAddress: string;
}
export interface BridgeValidatorProtoMsg {
  typeUrl: "/gravity.v1.BridgeValidator";
  value: Uint8Array;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorAmino {
  power: string;
  ethereum_address: string;
}
export interface BridgeValidatorAminoMsg {
  type: "/gravity.v1.BridgeValidator";
  value: BridgeValidatorAmino;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
  power: bigint;
  ethereum_address: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
  nonce: bigint;
  members: BridgeValidator[];
  height: bigint;
  rewardAmount: string;
  /** the reward token in it's Ethereum hex address representation */
  rewardToken: string;
}
export interface ValsetProtoMsg {
  typeUrl: "/gravity.v1.Valset";
  value: Uint8Array;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetAmino {
  nonce: string;
  members: BridgeValidatorAmino[];
  height: string;
  reward_amount: string;
  /** the reward token in it's Ethereum hex address representation */
  reward_token: string;
}
export interface ValsetAminoMsg {
  type: "/gravity.v1.Valset";
  value: ValsetAmino;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
  nonce: bigint;
  members: BridgeValidatorSDKType[];
  height: bigint;
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
  cosmosBlockHeight: bigint;
  ethereumBlockHeight: bigint;
}
export interface LastObservedEthereumBlockHeightProtoMsg {
  typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight";
  value: Uint8Array;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightAmino {
  cosmos_block_height: string;
  ethereum_block_height: string;
}
export interface LastObservedEthereumBlockHeightAminoMsg {
  type: "/gravity.v1.LastObservedEthereumBlockHeight";
  value: LastObservedEthereumBlockHeightAmino;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeightSDKType {
  cosmos_block_height: bigint;
  ethereum_block_height: bigint;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
  erc20: string;
  denom: string;
}
export interface ERC20ToDenomProtoMsg {
  typeUrl: "/gravity.v1.ERC20ToDenom";
  value: Uint8Array;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenomAmino {
  erc20: string;
  denom: string;
}
export interface ERC20ToDenomAminoMsg {
  type: "/gravity.v1.ERC20ToDenom";
  value: ERC20ToDenomAmino;
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
  targetNonce: bigint;
}
export interface UnhaltBridgeProposalProtoMsg {
  typeUrl: "/gravity.v1.UnhaltBridgeProposal";
  value: Uint8Array;
}
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposalAmino {
  title: string;
  description: string;
  target_nonce: string;
}
export interface UnhaltBridgeProposalAminoMsg {
  type: "/gravity.v1.UnhaltBridgeProposal";
  value: UnhaltBridgeProposalAmino;
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
  target_nonce: bigint;
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
  amounts: bigint[];
}
export interface AirdropProposalProtoMsg {
  typeUrl: "/gravity.v1.AirdropProposal";
  value: Uint8Array;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposalAmino {
  title: string;
  description: string;
  denom: string;
  recipients: Uint8Array;
  amounts: string[];
}
export interface AirdropProposalAminoMsg {
  type: "/gravity.v1.AirdropProposal";
  value: AirdropProposalAmino;
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
  amounts: bigint[];
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
  metadata: Metadata;
  ibcDenom: string;
}
export interface IBCMetadataProposalProtoMsg {
  typeUrl: "/gravity.v1.IBCMetadataProposal";
  value: Uint8Array;
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
export interface IBCMetadataProposalAmino {
  title: string;
  description: string;
  metadata?: MetadataAmino;
  ibc_denom: string;
}
export interface IBCMetadataProposalAminoMsg {
  type: "/gravity.v1.IBCMetadataProposal";
  value: IBCMetadataProposalAmino;
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
  metadata: MetadataSDKType;
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
  token: Coin;
  /** the IBC channel to send `Amount` over via ibc-transfer module */
  ibcChannel: string;
  /** the EventNonce from the MsgSendToCosmosClaim, used for ordering the queue */
  eventNonce: bigint;
}
export interface PendingIbcAutoForwardProtoMsg {
  typeUrl: "/gravity.v1.PendingIbcAutoForward";
  value: Uint8Array;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForwardAmino {
  /** the destination address. sdk.AccAddress does not preserve foreign prefixes */
  foreign_receiver: string;
  /** the token sent from ethereum to the ibc-enabled chain over `IbcChannel` */
  token?: CoinAmino;
  /** the IBC channel to send `Amount` over via ibc-transfer module */
  ibc_channel: string;
  /** the EventNonce from the MsgSendToCosmosClaim, used for ordering the queue */
  event_nonce: string;
}
export interface PendingIbcAutoForwardAminoMsg {
  type: "/gravity.v1.PendingIbcAutoForward";
  value: PendingIbcAutoForwardAmino;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForwardSDKType {
  foreign_receiver: string;
  token: CoinSDKType;
  ibc_channel: string;
  event_nonce: bigint;
}
function createBaseBridgeValidator(): BridgeValidator {
  return {
    power: BigInt(0),
    ethereumAddress: ""
  };
}
export const BridgeValidator = {
  typeUrl: "/gravity.v1.BridgeValidator",
  encode(message: BridgeValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.power !== BigInt(0)) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(18).string(message.ethereumAddress);
    }
    return writer;
  },
  fromJSON(object: any): BridgeValidator {
    return {
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
      ethereumAddress: isSet(object.ethereumAddress) ? String(object.ethereumAddress) : ""
    };
  },
  fromPartial(object: Partial<BridgeValidator>): BridgeValidator {
    const message = createBaseBridgeValidator();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.ethereumAddress = object.ethereumAddress ?? "";
    return message;
  },
  fromAmino(object: BridgeValidatorAmino): BridgeValidator {
    return {
      power: BigInt(object.power),
      ethereumAddress: object.ethereum_address
    };
  },
  toAmino(message: BridgeValidator): BridgeValidatorAmino {
    const obj: any = {};
    obj.power = message.power ? message.power.toString() : undefined;
    obj.ethereum_address = message.ethereumAddress;
    return obj;
  },
  fromAminoMsg(object: BridgeValidatorAminoMsg): BridgeValidator {
    return BridgeValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: BridgeValidatorProtoMsg): BridgeValidator {
    return BridgeValidator.decode(message.value);
  },
  toProto(message: BridgeValidator): Uint8Array {
    return BridgeValidator.encode(message).finish();
  },
  toProtoMsg(message: BridgeValidator): BridgeValidatorProtoMsg {
    return {
      typeUrl: "/gravity.v1.BridgeValidator",
      value: BridgeValidator.encode(message).finish()
    };
  }
};
function createBaseValset(): Valset {
  return {
    nonce: BigInt(0),
    members: [],
    height: BigInt(0),
    rewardAmount: "",
    rewardToken: ""
  };
}
export const Valset = {
  typeUrl: "/gravity.v1.Valset",
  encode(message: Valset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
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
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromJSON(e)) : [],
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
      rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : ""
    };
  },
  fromPartial(object: Partial<Valset>): Valset {
    const message = createBaseValset();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  },
  fromAmino(object: ValsetAmino): Valset {
    return {
      nonce: BigInt(object.nonce),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromAmino(e)) : [],
      height: BigInt(object.height),
      rewardAmount: object.reward_amount,
      rewardToken: object.reward_token
    };
  },
  toAmino(message: Valset): ValsetAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.height = message.height ? message.height.toString() : undefined;
    obj.reward_amount = message.rewardAmount;
    obj.reward_token = message.rewardToken;
    return obj;
  },
  fromAminoMsg(object: ValsetAminoMsg): Valset {
    return Valset.fromAmino(object.value);
  },
  fromProtoMsg(message: ValsetProtoMsg): Valset {
    return Valset.decode(message.value);
  },
  toProto(message: Valset): Uint8Array {
    return Valset.encode(message).finish();
  },
  toProtoMsg(message: Valset): ValsetProtoMsg {
    return {
      typeUrl: "/gravity.v1.Valset",
      value: Valset.encode(message).finish()
    };
  }
};
function createBaseLastObservedEthereumBlockHeight(): LastObservedEthereumBlockHeight {
  return {
    cosmosBlockHeight: BigInt(0),
    ethereumBlockHeight: BigInt(0)
  };
}
export const LastObservedEthereumBlockHeight = {
  typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight",
  encode(message: LastObservedEthereumBlockHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmosBlockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.cosmosBlockHeight);
    }
    if (message.ethereumBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethereumBlockHeight);
    }
    return writer;
  },
  fromJSON(object: any): LastObservedEthereumBlockHeight {
    return {
      cosmosBlockHeight: isSet(object.cosmosBlockHeight) ? BigInt(object.cosmosBlockHeight.toString()) : BigInt(0),
      ethereumBlockHeight: isSet(object.ethereumBlockHeight) ? BigInt(object.ethereumBlockHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<LastObservedEthereumBlockHeight>): LastObservedEthereumBlockHeight {
    const message = createBaseLastObservedEthereumBlockHeight();
    message.cosmosBlockHeight = object.cosmosBlockHeight !== undefined && object.cosmosBlockHeight !== null ? BigInt(object.cosmosBlockHeight.toString()) : BigInt(0);
    message.ethereumBlockHeight = object.ethereumBlockHeight !== undefined && object.ethereumBlockHeight !== null ? BigInt(object.ethereumBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LastObservedEthereumBlockHeightAmino): LastObservedEthereumBlockHeight {
    return {
      cosmosBlockHeight: BigInt(object.cosmos_block_height),
      ethereumBlockHeight: BigInt(object.ethereum_block_height)
    };
  },
  toAmino(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightAmino {
    const obj: any = {};
    obj.cosmos_block_height = message.cosmosBlockHeight ? message.cosmosBlockHeight.toString() : undefined;
    obj.ethereum_block_height = message.ethereumBlockHeight ? message.ethereumBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastObservedEthereumBlockHeightAminoMsg): LastObservedEthereumBlockHeight {
    return LastObservedEthereumBlockHeight.fromAmino(object.value);
  },
  fromProtoMsg(message: LastObservedEthereumBlockHeightProtoMsg): LastObservedEthereumBlockHeight {
    return LastObservedEthereumBlockHeight.decode(message.value);
  },
  toProto(message: LastObservedEthereumBlockHeight): Uint8Array {
    return LastObservedEthereumBlockHeight.encode(message).finish();
  },
  toProtoMsg(message: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeightProtoMsg {
    return {
      typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight",
      value: LastObservedEthereumBlockHeight.encode(message).finish()
    };
  }
};
function createBaseERC20ToDenom(): ERC20ToDenom {
  return {
    erc20: "",
    denom: ""
  };
}
export const ERC20ToDenom = {
  typeUrl: "/gravity.v1.ERC20ToDenom",
  encode(message: ERC20ToDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ERC20ToDenomAmino): ERC20ToDenom {
    return {
      erc20: object.erc20,
      denom: object.denom
    };
  },
  toAmino(message: ERC20ToDenom): ERC20ToDenomAmino {
    const obj: any = {};
    obj.erc20 = message.erc20;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: ERC20ToDenomAminoMsg): ERC20ToDenom {
    return ERC20ToDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20ToDenomProtoMsg): ERC20ToDenom {
    return ERC20ToDenom.decode(message.value);
  },
  toProto(message: ERC20ToDenom): Uint8Array {
    return ERC20ToDenom.encode(message).finish();
  },
  toProtoMsg(message: ERC20ToDenom): ERC20ToDenomProtoMsg {
    return {
      typeUrl: "/gravity.v1.ERC20ToDenom",
      value: ERC20ToDenom.encode(message).finish()
    };
  }
};
function createBaseUnhaltBridgeProposal(): UnhaltBridgeProposal {
  return {
    title: "",
    description: "",
    targetNonce: BigInt(0)
  };
}
export const UnhaltBridgeProposal = {
  typeUrl: "/gravity.v1.UnhaltBridgeProposal",
  encode(message: UnhaltBridgeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.targetNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.targetNonce);
    }
    return writer;
  },
  fromJSON(object: any): UnhaltBridgeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      targetNonce: isSet(object.targetNonce) ? BigInt(object.targetNonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<UnhaltBridgeProposal>): UnhaltBridgeProposal {
    const message = createBaseUnhaltBridgeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.targetNonce = object.targetNonce !== undefined && object.targetNonce !== null ? BigInt(object.targetNonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UnhaltBridgeProposalAmino): UnhaltBridgeProposal {
    return {
      title: object.title,
      description: object.description,
      targetNonce: BigInt(object.target_nonce)
    };
  },
  toAmino(message: UnhaltBridgeProposal): UnhaltBridgeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.target_nonce = message.targetNonce ? message.targetNonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnhaltBridgeProposalAminoMsg): UnhaltBridgeProposal {
    return UnhaltBridgeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UnhaltBridgeProposalProtoMsg): UnhaltBridgeProposal {
    return UnhaltBridgeProposal.decode(message.value);
  },
  toProto(message: UnhaltBridgeProposal): Uint8Array {
    return UnhaltBridgeProposal.encode(message).finish();
  },
  toProtoMsg(message: UnhaltBridgeProposal): UnhaltBridgeProposalProtoMsg {
    return {
      typeUrl: "/gravity.v1.UnhaltBridgeProposal",
      value: UnhaltBridgeProposal.encode(message).finish()
    };
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
  typeUrl: "/gravity.v1.AirdropProposal",
  encode(message: AirdropProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<AirdropProposal>): AirdropProposal {
    const message = createBaseAirdropProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.recipients = object.recipients ?? new Uint8Array();
    message.amounts = object.amounts?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: AirdropProposalAmino): AirdropProposal {
    return {
      title: object.title,
      description: object.description,
      denom: object.denom,
      recipients: object.recipients,
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: AirdropProposal): AirdropProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.denom = message.denom;
    obj.recipients = message.recipients;
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e.toString());
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: AirdropProposalAminoMsg): AirdropProposal {
    return AirdropProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AirdropProposalProtoMsg): AirdropProposal {
    return AirdropProposal.decode(message.value);
  },
  toProto(message: AirdropProposal): Uint8Array {
    return AirdropProposal.encode(message).finish();
  },
  toProtoMsg(message: AirdropProposal): AirdropProposalProtoMsg {
    return {
      typeUrl: "/gravity.v1.AirdropProposal",
      value: AirdropProposal.encode(message).finish()
    };
  }
};
function createBaseIBCMetadataProposal(): IBCMetadataProposal {
  return {
    title: "",
    description: "",
    metadata: Metadata.fromPartial({}),
    ibcDenom: ""
  };
}
export const IBCMetadataProposal = {
  typeUrl: "/gravity.v1.IBCMetadataProposal",
  encode(message: IBCMetadataProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: IBCMetadataProposalAmino): IBCMetadataProposal {
    return {
      title: object.title,
      description: object.description,
      metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined,
      ibcDenom: object.ibc_denom
    };
  },
  toAmino(message: IBCMetadataProposal): IBCMetadataProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.ibc_denom = message.ibcDenom;
    return obj;
  },
  fromAminoMsg(object: IBCMetadataProposalAminoMsg): IBCMetadataProposal {
    return IBCMetadataProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCMetadataProposalProtoMsg): IBCMetadataProposal {
    return IBCMetadataProposal.decode(message.value);
  },
  toProto(message: IBCMetadataProposal): Uint8Array {
    return IBCMetadataProposal.encode(message).finish();
  },
  toProtoMsg(message: IBCMetadataProposal): IBCMetadataProposalProtoMsg {
    return {
      typeUrl: "/gravity.v1.IBCMetadataProposal",
      value: IBCMetadataProposal.encode(message).finish()
    };
  }
};
function createBasePendingIbcAutoForward(): PendingIbcAutoForward {
  return {
    foreignReceiver: "",
    token: Coin.fromPartial({}),
    ibcChannel: "",
    eventNonce: BigInt(0)
  };
}
export const PendingIbcAutoForward = {
  typeUrl: "/gravity.v1.PendingIbcAutoForward",
  encode(message: PendingIbcAutoForward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.foreignReceiver !== "") {
      writer.uint32(10).string(message.foreignReceiver);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    if (message.ibcChannel !== "") {
      writer.uint32(26).string(message.ibcChannel);
    }
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.eventNonce);
    }
    return writer;
  },
  fromJSON(object: any): PendingIbcAutoForward {
    return {
      foreignReceiver: isSet(object.foreignReceiver) ? String(object.foreignReceiver) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      ibcChannel: isSet(object.ibcChannel) ? String(object.ibcChannel) : "",
      eventNonce: isSet(object.eventNonce) ? BigInt(object.eventNonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PendingIbcAutoForward>): PendingIbcAutoForward {
    const message = createBasePendingIbcAutoForward();
    message.foreignReceiver = object.foreignReceiver ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.ibcChannel = object.ibcChannel ?? "";
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PendingIbcAutoForwardAmino): PendingIbcAutoForward {
    return {
      foreignReceiver: object.foreign_receiver,
      token: object?.token ? Coin.fromAmino(object.token) : undefined,
      ibcChannel: object.ibc_channel,
      eventNonce: BigInt(object.event_nonce)
    };
  },
  toAmino(message: PendingIbcAutoForward): PendingIbcAutoForwardAmino {
    const obj: any = {};
    obj.foreign_receiver = message.foreignReceiver;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.ibc_channel = message.ibcChannel;
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingIbcAutoForwardAminoMsg): PendingIbcAutoForward {
    return PendingIbcAutoForward.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingIbcAutoForwardProtoMsg): PendingIbcAutoForward {
    return PendingIbcAutoForward.decode(message.value);
  },
  toProto(message: PendingIbcAutoForward): Uint8Array {
    return PendingIbcAutoForward.encode(message).finish();
  },
  toProtoMsg(message: PendingIbcAutoForward): PendingIbcAutoForwardProtoMsg {
    return {
      typeUrl: "/gravity.v1.PendingIbcAutoForward",
      value: PendingIbcAutoForward.encode(message).finish()
    };
  }
};