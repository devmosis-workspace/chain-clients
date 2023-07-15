import { Bitmap, BitmapSDKType } from "../../utils/v1beta1/bitmap";
import { Chain, ChainSDKType, Asset, AssetSDKType, CrossChainAddress, CrossChainAddressSDKType, TransferDirection, transferDirectionFromJSON } from "../exported/v1beta1/types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MaintainerState {
  address: Uint8Array;
  missingVotes?: Bitmap;
  incorrectVotes?: Bitmap;
  chain: string;
}
export interface MaintainerStateSDKType {
  address: Uint8Array;
  missing_votes?: BitmapSDKType;
  incorrect_votes?: BitmapSDKType;
  chain: string;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainState {
  chain?: Chain;
  activated: boolean;
  assets: Asset[];
  /** @deprecated */
  maintainerStates: MaintainerState[];
}
/** ChainState represents the state of a registered blockchain */
export interface ChainStateSDKType {
  chain?: ChainSDKType;
  activated: boolean;
  assets: AssetSDKType[];
  /** @deprecated */
  maintainer_states: MaintainerStateSDKType[];
}
export interface LinkedAddresses {
  depositAddress?: CrossChainAddress;
  recipientAddress?: CrossChainAddress;
}
export interface LinkedAddressesSDKType {
  deposit_address?: CrossChainAddressSDKType;
  recipient_address?: CrossChainAddressSDKType;
}
export interface RateLimit {
  chain: string;
  limit?: Coin;
  window?: Duration;
}
export interface RateLimitSDKType {
  chain: string;
  limit?: CoinSDKType;
  window?: DurationSDKType;
}
export interface TransferEpoch {
  chain: string;
  amount?: Coin;
  epoch: Long;
  /**
   * indicates whether the tracking is for transfers outgoing
   * to that chain or incoming from it
   */
  direction: TransferDirection;
}
export interface TransferEpochSDKType {
  chain: string;
  amount?: CoinSDKType;
  epoch: Long;
  direction: TransferDirection;
}
function createBaseMaintainerState(): MaintainerState {
  return {
    address: new Uint8Array(),
    missingVotes: undefined,
    incorrectVotes: undefined,
    chain: ""
  };
}
export const MaintainerState = {
  encode(message: MaintainerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseChainState(): ChainState {
  return {
    chain: undefined,
    activated: false,
    assets: [],
    maintainerStates: []
  };
}
export const ChainState = {
  encode(message: ChainState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseLinkedAddresses(): LinkedAddresses {
  return {
    depositAddress: undefined,
    recipientAddress: undefined
  };
}
export const LinkedAddresses = {
  encode(message: LinkedAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRateLimit(): RateLimit {
  return {
    chain: "",
    limit: undefined,
    window: undefined
  };
}
export const RateLimit = {
  encode(message: RateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseTransferEpoch(): TransferEpoch {
  return {
    chain: "",
    amount: undefined,
    epoch: Long.UZERO,
    direction: 0
  };
}
export const TransferEpoch = {
  encode(message: TransferEpoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (!message.epoch.isZero()) {
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
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      direction: isSet(object.direction) ? transferDirectionFromJSON(object.direction) : 0
    };
  },
  fromPartial(object: Partial<TransferEpoch>): TransferEpoch {
    const message = createBaseTransferEpoch();
    message.chain = object.chain ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.direction = object.direction ?? 0;
    return message;
  }
};