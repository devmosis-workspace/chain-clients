import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Allocation, AllocationAmino, AllocationSDKType } from "./allocation";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisSubscription {
  subscription?: Any;
  allocations: Allocation[];
}
export interface GenesisSubscriptionProtoMsg {
  typeUrl: "/sentinel.subscription.v2.GenesisSubscription";
  value: Uint8Array;
}
export interface GenesisSubscriptionAmino {
  subscription?: AnyAmino;
  allocations?: AllocationAmino[];
}
export interface GenesisSubscriptionAminoMsg {
  type: "/sentinel.subscription.v2.GenesisSubscription";
  value: GenesisSubscriptionAmino;
}
export interface GenesisSubscriptionSDKType {
  subscription?: AnySDKType;
  allocations: AllocationSDKType[];
}
export interface GenesisState {
  subscriptions: GenesisSubscription[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sentinel.subscription.v2.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  subscriptions?: GenesisSubscriptionAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/sentinel.subscription.v2.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  subscriptions: GenesisSubscriptionSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisSubscription(): GenesisSubscription {
  return {
    subscription: undefined,
    allocations: []
  };
}
export const GenesisSubscription = {
  typeUrl: "/sentinel.subscription.v2.GenesisSubscription",
  encode(message: GenesisSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== undefined) {
      Any.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisSubscription {
    return {
      subscription: isSet(object.subscription) ? Any.fromJSON(object.subscription) : undefined,
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => Allocation.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisSubscription>): GenesisSubscription {
    const message = createBaseGenesisSubscription();
    message.subscription = object.subscription !== undefined && object.subscription !== null ? Any.fromPartial(object.subscription) : undefined;
    message.allocations = object.allocations?.map(e => Allocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisSubscriptionAmino): GenesisSubscription {
    const message = createBaseGenesisSubscription();
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = Any.fromAmino(object.subscription);
    }
    message.allocations = object.allocations?.map(e => Allocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisSubscription): GenesisSubscriptionAmino {
    const obj: any = {};
    obj.subscription = message.subscription ? Any.toAmino(message.subscription) : undefined;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? Allocation.toAmino(e) : undefined);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisSubscriptionAminoMsg): GenesisSubscription {
    return GenesisSubscription.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisSubscriptionProtoMsg): GenesisSubscription {
    return GenesisSubscription.decode(message.value);
  },
  toProto(message: GenesisSubscription): Uint8Array {
    return GenesisSubscription.encode(message).finish();
  },
  toProtoMsg(message: GenesisSubscription): GenesisSubscriptionProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.GenesisSubscription",
      value: GenesisSubscription.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    subscriptions: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/sentinel.subscription.v2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriptions) {
      GenesisSubscription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      subscriptions: Array.isArray(object?.subscriptions) ? object.subscriptions.map((e: any) => GenesisSubscription.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.subscriptions = object.subscriptions?.map(e => GenesisSubscription.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.subscriptions = object.subscriptions?.map(e => GenesisSubscription.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? GenesisSubscription.toAmino(e) : undefined);
    } else {
      obj.subscriptions = message.subscriptions;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/sentinel.subscription.v2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};