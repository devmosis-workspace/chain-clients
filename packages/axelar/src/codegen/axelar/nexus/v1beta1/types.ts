import { Bitmap, BitmapAmino, BitmapSDKType } from "../../utils/v1beta1/bitmap";
import { Chain, ChainAmino, ChainSDKType, Asset, AssetAmino, AssetSDKType, CrossChainAddress, CrossChainAddressAmino, CrossChainAddressSDKType, TransferDirection, transferDirectionFromJSON } from "../exported/v1beta1/types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface MaintainerState {
  address: Uint8Array;
  missingVotes: Bitmap;
  incorrectVotes: Bitmap;
  chain: string;
}
export interface MaintainerStateProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.MaintainerState";
  value: Uint8Array;
}
export interface MaintainerStateAmino {
  address: Uint8Array;
  missing_votes?: BitmapAmino;
  incorrect_votes?: BitmapAmino;
  chain: string;
}
export interface MaintainerStateAminoMsg {
  type: "/axelar.nexus.v1beta1.MaintainerState";
  value: MaintainerStateAmino;
}
export interface MaintainerStateSDKType {
  address: Uint8Array;
  missing_votes: BitmapSDKType;
  incorrect_votes: BitmapSDKType;
  chain: string;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainState {
  chain: Chain;
  activated: boolean;
  assets: Asset[];
  /** @deprecated */
  maintainerStates: MaintainerState[];
}
export interface ChainStateProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.ChainState";
  value: Uint8Array;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainStateAmino {
  chain?: ChainAmino;
  activated: boolean;
  assets: AssetAmino[];
  /** @deprecated */
  maintainer_states: MaintainerStateAmino[];
}
export interface ChainStateAminoMsg {
  type: "/axelar.nexus.v1beta1.ChainState";
  value: ChainStateAmino;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainStateSDKType {
  chain: ChainSDKType;
  activated: boolean;
  assets: AssetSDKType[];
  /** @deprecated */
  maintainer_states: MaintainerStateSDKType[];
}
export interface LinkedAddresses {
  depositAddress: CrossChainAddress;
  recipientAddress: CrossChainAddress;
}
export interface LinkedAddressesProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.LinkedAddresses";
  value: Uint8Array;
}
export interface LinkedAddressesAmino {
  deposit_address?: CrossChainAddressAmino;
  recipient_address?: CrossChainAddressAmino;
}
export interface LinkedAddressesAminoMsg {
  type: "/axelar.nexus.v1beta1.LinkedAddresses";
  value: LinkedAddressesAmino;
}
export interface LinkedAddressesSDKType {
  deposit_address: CrossChainAddressSDKType;
  recipient_address: CrossChainAddressSDKType;
}
export interface RateLimit {
  chain: string;
  limit: Coin;
  window: Duration;
}
export interface RateLimitProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.RateLimit";
  value: Uint8Array;
}
export interface RateLimitAmino {
  chain: string;
  limit?: CoinAmino;
  window?: DurationAmino;
}
export interface RateLimitAminoMsg {
  type: "/axelar.nexus.v1beta1.RateLimit";
  value: RateLimitAmino;
}
export interface RateLimitSDKType {
  chain: string;
  limit: CoinSDKType;
  window: DurationSDKType;
}
export interface TransferEpoch {
  chain: string;
  amount: Coin;
  epoch: bigint;
  /**
   * indicates whether the tracking is for transfers outgoing
   * to that chain or incoming from it
   */
  direction: TransferDirection;
}
export interface TransferEpochProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.TransferEpoch";
  value: Uint8Array;
}
export interface TransferEpochAmino {
  chain: string;
  amount?: CoinAmino;
  epoch: string;
  /**
   * indicates whether the tracking is for transfers outgoing
   * to that chain or incoming from it
   */
  direction: TransferDirection;
}
export interface TransferEpochAminoMsg {
  type: "/axelar.nexus.v1beta1.TransferEpoch";
  value: TransferEpochAmino;
}
export interface TransferEpochSDKType {
  chain: string;
  amount: CoinSDKType;
  epoch: bigint;
  direction: TransferDirection;
}
function createBaseMaintainerState(): MaintainerState {
  return {
    address: new Uint8Array(),
    missingVotes: Bitmap.fromPartial({}),
    incorrectVotes: Bitmap.fromPartial({}),
    chain: ""
  };
}
export const MaintainerState = {
  typeUrl: "/axelar.nexus.v1beta1.MaintainerState",
  encode(message: MaintainerState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.missingVotes !== undefined) {
      Bitmap.encode(message.missingVotes, writer.uint32(18).fork()).ldelim();
    }
    if (message.incorrectVotes !== undefined) {
      Bitmap.encode(message.incorrectVotes, writer.uint32(26).fork()).ldelim();
    }
    if (message.chain !== "") {
      writer.uint32(34).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): MaintainerState {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      missingVotes: isSet(object.missingVotes) ? Bitmap.fromJSON(object.missingVotes) : undefined,
      incorrectVotes: isSet(object.incorrectVotes) ? Bitmap.fromJSON(object.incorrectVotes) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<MaintainerState>): MaintainerState {
    const message = createBaseMaintainerState();
    message.address = object.address ?? new Uint8Array();
    message.missingVotes = object.missingVotes !== undefined && object.missingVotes !== null ? Bitmap.fromPartial(object.missingVotes) : undefined;
    message.incorrectVotes = object.incorrectVotes !== undefined && object.incorrectVotes !== null ? Bitmap.fromPartial(object.incorrectVotes) : undefined;
    message.chain = object.chain ?? "";
    return message;
  },
  fromAmino(object: MaintainerStateAmino): MaintainerState {
    return {
      address: object.address,
      missingVotes: object?.missing_votes ? Bitmap.fromAmino(object.missing_votes) : undefined,
      incorrectVotes: object?.incorrect_votes ? Bitmap.fromAmino(object.incorrect_votes) : undefined,
      chain: object.chain
    };
  },
  toAmino(message: MaintainerState): MaintainerStateAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.missing_votes = message.missingVotes ? Bitmap.toAmino(message.missingVotes) : undefined;
    obj.incorrect_votes = message.incorrectVotes ? Bitmap.toAmino(message.incorrectVotes) : undefined;
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: MaintainerStateAminoMsg): MaintainerState {
    return MaintainerState.fromAmino(object.value);
  },
  fromProtoMsg(message: MaintainerStateProtoMsg): MaintainerState {
    return MaintainerState.decode(message.value);
  },
  toProto(message: MaintainerState): Uint8Array {
    return MaintainerState.encode(message).finish();
  },
  toProtoMsg(message: MaintainerState): MaintainerStateProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.MaintainerState",
      value: MaintainerState.encode(message).finish()
    };
  }
};
function createBaseChainState(): ChainState {
  return {
    chain: Chain.fromPartial({}),
    activated: false,
    assets: [],
    maintainerStates: []
  };
}
export const ChainState = {
  typeUrl: "/axelar.nexus.v1beta1.ChainState",
  encode(message: ChainState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    if (message.activated === true) {
      writer.uint32(24).bool(message.activated);
    }
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.maintainerStates) {
      MaintainerState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ChainState {
    return {
      chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
      activated: isSet(object.activated) ? Boolean(object.activated) : false,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      maintainerStates: Array.isArray(object?.maintainerStates) ? object.maintainerStates.map((e: any) => MaintainerState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ChainState>): ChainState {
    const message = createBaseChainState();
    message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
    message.activated = object.activated ?? false;
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.maintainerStates = object.maintainerStates?.map(e => MaintainerState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ChainStateAmino): ChainState {
    return {
      chain: object?.chain ? Chain.fromAmino(object.chain) : undefined,
      activated: object.activated,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromAmino(e)) : [],
      maintainerStates: Array.isArray(object?.maintainer_states) ? object.maintainer_states.map((e: any) => MaintainerState.fromAmino(e)) : []
    };
  },
  toAmino(message: ChainState): ChainStateAmino {
    const obj: any = {};
    obj.chain = message.chain ? Chain.toAmino(message.chain) : undefined;
    obj.activated = message.activated;
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
    if (message.maintainerStates) {
      obj.maintainer_states = message.maintainerStates.map(e => e ? MaintainerState.toAmino(e) : undefined);
    } else {
      obj.maintainer_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChainStateAminoMsg): ChainState {
    return ChainState.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainStateProtoMsg): ChainState {
    return ChainState.decode(message.value);
  },
  toProto(message: ChainState): Uint8Array {
    return ChainState.encode(message).finish();
  },
  toProtoMsg(message: ChainState): ChainStateProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.ChainState",
      value: ChainState.encode(message).finish()
    };
  }
};
function createBaseLinkedAddresses(): LinkedAddresses {
  return {
    depositAddress: CrossChainAddress.fromPartial({}),
    recipientAddress: CrossChainAddress.fromPartial({})
  };
}
export const LinkedAddresses = {
  typeUrl: "/axelar.nexus.v1beta1.LinkedAddresses",
  encode(message: LinkedAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositAddress !== undefined) {
      CrossChainAddress.encode(message.depositAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.recipientAddress !== undefined) {
      CrossChainAddress.encode(message.recipientAddress, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LinkedAddresses {
    return {
      depositAddress: isSet(object.depositAddress) ? CrossChainAddress.fromJSON(object.depositAddress) : undefined,
      recipientAddress: isSet(object.recipientAddress) ? CrossChainAddress.fromJSON(object.recipientAddress) : undefined
    };
  },
  fromPartial(object: Partial<LinkedAddresses>): LinkedAddresses {
    const message = createBaseLinkedAddresses();
    message.depositAddress = object.depositAddress !== undefined && object.depositAddress !== null ? CrossChainAddress.fromPartial(object.depositAddress) : undefined;
    message.recipientAddress = object.recipientAddress !== undefined && object.recipientAddress !== null ? CrossChainAddress.fromPartial(object.recipientAddress) : undefined;
    return message;
  },
  fromAmino(object: LinkedAddressesAmino): LinkedAddresses {
    return {
      depositAddress: object?.deposit_address ? CrossChainAddress.fromAmino(object.deposit_address) : undefined,
      recipientAddress: object?.recipient_address ? CrossChainAddress.fromAmino(object.recipient_address) : undefined
    };
  },
  toAmino(message: LinkedAddresses): LinkedAddressesAmino {
    const obj: any = {};
    obj.deposit_address = message.depositAddress ? CrossChainAddress.toAmino(message.depositAddress) : undefined;
    obj.recipient_address = message.recipientAddress ? CrossChainAddress.toAmino(message.recipientAddress) : undefined;
    return obj;
  },
  fromAminoMsg(object: LinkedAddressesAminoMsg): LinkedAddresses {
    return LinkedAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkedAddressesProtoMsg): LinkedAddresses {
    return LinkedAddresses.decode(message.value);
  },
  toProto(message: LinkedAddresses): Uint8Array {
    return LinkedAddresses.encode(message).finish();
  },
  toProtoMsg(message: LinkedAddresses): LinkedAddressesProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.LinkedAddresses",
      value: LinkedAddresses.encode(message).finish()
    };
  }
};
function createBaseRateLimit(): RateLimit {
  return {
    chain: "",
    limit: Coin.fromPartial({}),
    window: Duration.fromPartial({})
  };
}
export const RateLimit = {
  typeUrl: "/axelar.nexus.v1beta1.RateLimit",
  encode(message: RateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.limit !== undefined) {
      Coin.encode(message.limit, writer.uint32(18).fork()).ldelim();
    }
    if (message.window !== undefined) {
      Duration.encode(message.window, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RateLimit {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      limit: isSet(object.limit) ? Coin.fromJSON(object.limit) : undefined,
      window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined
    };
  },
  fromPartial(object: Partial<RateLimit>): RateLimit {
    const message = createBaseRateLimit();
    message.chain = object.chain ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Coin.fromPartial(object.limit) : undefined;
    message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
    return message;
  },
  fromAmino(object: RateLimitAmino): RateLimit {
    return {
      chain: object.chain,
      limit: object?.limit ? Coin.fromAmino(object.limit) : undefined,
      window: object?.window ? Duration.fromAmino(object.window) : undefined
    };
  },
  toAmino(message: RateLimit): RateLimitAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.limit = message.limit ? Coin.toAmino(message.limit) : undefined;
    obj.window = message.window ? Duration.toAmino(message.window) : undefined;
    return obj;
  },
  fromAminoMsg(object: RateLimitAminoMsg): RateLimit {
    return RateLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: RateLimitProtoMsg): RateLimit {
    return RateLimit.decode(message.value);
  },
  toProto(message: RateLimit): Uint8Array {
    return RateLimit.encode(message).finish();
  },
  toProtoMsg(message: RateLimit): RateLimitProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.RateLimit",
      value: RateLimit.encode(message).finish()
    };
  }
};
function createBaseTransferEpoch(): TransferEpoch {
  return {
    chain: "",
    amount: Coin.fromPartial({}),
    epoch: BigInt(0),
    direction: 0
  };
}
export const TransferEpoch = {
  typeUrl: "/axelar.nexus.v1beta1.TransferEpoch",
  encode(message: TransferEpoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.direction !== 0) {
      writer.uint32(32).int32(message.direction);
    }
    return writer;
  },
  fromJSON(object: any): TransferEpoch {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      direction: isSet(object.direction) ? transferDirectionFromJSON(object.direction) : -1
    };
  },
  fromPartial(object: Partial<TransferEpoch>): TransferEpoch {
    const message = createBaseTransferEpoch();
    message.chain = object.chain ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.direction = object.direction ?? 0;
    return message;
  },
  fromAmino(object: TransferEpochAmino): TransferEpoch {
    return {
      chain: object.chain,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      epoch: BigInt(object.epoch),
      direction: isSet(object.direction) ? transferDirectionFromJSON(object.direction) : -1
    };
  },
  toAmino(message: TransferEpoch): TransferEpochAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.direction = message.direction;
    return obj;
  },
  fromAminoMsg(object: TransferEpochAminoMsg): TransferEpoch {
    return TransferEpoch.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferEpochProtoMsg): TransferEpoch {
    return TransferEpoch.decode(message.value);
  },
  toProto(message: TransferEpoch): Uint8Array {
    return TransferEpoch.encode(message).finish();
  },
  toProtoMsg(message: TransferEpoch): TransferEpochProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.TransferEpoch",
      value: TransferEpoch.encode(message).finish()
    };
  }
};