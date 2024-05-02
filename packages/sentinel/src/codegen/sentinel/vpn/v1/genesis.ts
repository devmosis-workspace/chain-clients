import { Deposit, DepositAmino, DepositSDKType } from "../../deposit/v1/deposit";
import { GenesisState as GenesisState1 } from "../../node/v2/genesis";
import { GenesisStateAmino as GenesisState1Amino } from "../../node/v2/genesis";
import { GenesisStateSDKType as GenesisState1SDKType } from "../../node/v2/genesis";
import { GenesisPlan, GenesisPlanAmino, GenesisPlanSDKType } from "../../plan/v2/genesis";
import { GenesisState as GenesisState2 } from "../../provider/v2/genesis";
import { GenesisStateAmino as GenesisState2Amino } from "../../provider/v2/genesis";
import { GenesisStateSDKType as GenesisState2SDKType } from "../../provider/v2/genesis";
import { GenesisState as GenesisState3 } from "../../session/v2/genesis";
import { GenesisStateAmino as GenesisState3Amino } from "../../session/v2/genesis";
import { GenesisStateSDKType as GenesisState3SDKType } from "../../session/v2/genesis";
import { GenesisState as GenesisState4 } from "../../subscription/v2/genesis";
import { GenesisStateAmino as GenesisState4Amino } from "../../subscription/v2/genesis";
import { GenesisStateSDKType as GenesisState4SDKType } from "../../subscription/v2/genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  deposits: Deposit[];
  nodes?: GenesisState1;
  plans: GenesisPlan[];
  providers?: GenesisState2;
  sessions?: GenesisState3;
  subscriptions?: GenesisState4;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sentinel.vpn.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  deposits?: DepositAmino[];
  nodes?: GenesisState1Amino;
  plans?: GenesisPlanAmino[];
  providers?: GenesisState2Amino;
  sessions?: GenesisState3Amino;
  subscriptions?: GenesisState4Amino;
}
export interface GenesisStateAminoMsg {
  type: "/sentinel.vpn.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  deposits: DepositSDKType[];
  nodes?: GenesisState1SDKType;
  plans: GenesisPlanSDKType[];
  providers?: GenesisState2SDKType;
  sessions?: GenesisState3SDKType;
  subscriptions?: GenesisState4SDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    deposits: [],
    nodes: undefined,
    plans: [],
    providers: undefined,
    sessions: undefined,
    subscriptions: undefined
  };
}
export const GenesisState = {
  typeUrl: "/sentinel.vpn.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodes !== undefined) {
      GenesisState1.encode(message.nodes, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.plans) {
      GenesisPlan.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.providers !== undefined) {
      GenesisState2.encode(message.providers, writer.uint32(34).fork()).ldelim();
    }
    if (message.sessions !== undefined) {
      GenesisState3.encode(message.sessions, writer.uint32(42).fork()).ldelim();
    }
    if (message.subscriptions !== undefined) {
      GenesisState4.encode(message.subscriptions, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      nodes: isSet(object.nodes) ? GenesisState1.fromJSON(object.nodes) : undefined,
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => GenesisPlan.fromJSON(e)) : [],
      providers: isSet(object.providers) ? GenesisState2.fromJSON(object.providers) : undefined,
      sessions: isSet(object.sessions) ? GenesisState3.fromJSON(object.sessions) : undefined,
      subscriptions: isSet(object.subscriptions) ? GenesisState4.fromJSON(object.subscriptions) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.nodes = object.nodes !== undefined && object.nodes !== null ? GenesisState1.fromPartial(object.nodes) : undefined;
    message.plans = object.plans?.map(e => GenesisPlan.fromPartial(e)) || [];
    message.providers = object.providers !== undefined && object.providers !== null ? GenesisState2.fromPartial(object.providers) : undefined;
    message.sessions = object.sessions !== undefined && object.sessions !== null ? GenesisState3.fromPartial(object.sessions) : undefined;
    message.subscriptions = object.subscriptions !== undefined && object.subscriptions !== null ? GenesisState4.fromPartial(object.subscriptions) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.nodes !== undefined && object.nodes !== null) {
      message.nodes = GenesisState1.fromAmino(object.nodes);
    }
    message.plans = object.plans?.map(e => GenesisPlan.fromAmino(e)) || [];
    if (object.providers !== undefined && object.providers !== null) {
      message.providers = GenesisState2.fromAmino(object.providers);
    }
    if (object.sessions !== undefined && object.sessions !== null) {
      message.sessions = GenesisState3.fromAmino(object.sessions);
    }
    if (object.subscriptions !== undefined && object.subscriptions !== null) {
      message.subscriptions = GenesisState4.fromAmino(object.subscriptions);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    obj.nodes = message.nodes ? GenesisState1.toAmino(message.nodes) : undefined;
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? GenesisPlan.toAmino(e) : undefined);
    } else {
      obj.plans = message.plans;
    }
    obj.providers = message.providers ? GenesisState2.toAmino(message.providers) : undefined;
    obj.sessions = message.sessions ? GenesisState3.toAmino(message.sessions) : undefined;
    obj.subscriptions = message.subscriptions ? GenesisState4.toAmino(message.subscriptions) : undefined;
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
      typeUrl: "/sentinel.vpn.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};