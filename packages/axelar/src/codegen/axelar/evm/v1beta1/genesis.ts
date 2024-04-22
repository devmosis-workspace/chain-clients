import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BurnerInfo, BurnerInfoAmino, BurnerInfoSDKType, ERC20Deposit, ERC20DepositAmino, ERC20DepositSDKType, CommandBatchMetadata, CommandBatchMetadataAmino, CommandBatchMetadataSDKType, Gateway, GatewayAmino, GatewaySDKType, ERC20TokenMetadata, ERC20TokenMetadataAmino, ERC20TokenMetadataSDKType, Event, EventAmino, EventSDKType } from "./types";
import { QueueState, QueueStateAmino, QueueStateSDKType } from "../../utils/v1beta1/queuer";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  chains: GenesisState_Chain[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
  chains?: GenesisState_ChainAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/axelar.evm.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  chains: GenesisState_ChainSDKType[];
}
export interface GenesisState_Chain {
  params: Params;
  burnerInfos: BurnerInfo[];
  commandQueue: QueueState;
  confirmedDeposits: ERC20Deposit[];
  burnedDeposits: ERC20Deposit[];
  commandBatches: CommandBatchMetadata[];
  gateway: Gateway;
  tokens: ERC20TokenMetadata[];
  events: Event[];
  confirmedEventQueue: QueueState;
  legacyConfirmedDeposits: ERC20Deposit[];
  legacyBurnedDeposits: ERC20Deposit[];
}
export interface GenesisState_ChainProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.Chain";
  value: Uint8Array;
}
export interface GenesisState_ChainAmino {
  params?: ParamsAmino;
  burner_infos?: BurnerInfoAmino[];
  command_queue?: QueueStateAmino;
  confirmed_deposits?: ERC20DepositAmino[];
  burned_deposits?: ERC20DepositAmino[];
  command_batches?: CommandBatchMetadataAmino[];
  gateway?: GatewayAmino;
  tokens?: ERC20TokenMetadataAmino[];
  events?: EventAmino[];
  confirmed_event_queue?: QueueStateAmino;
  legacy_confirmed_deposits?: ERC20DepositAmino[];
  legacy_burned_deposits?: ERC20DepositAmino[];
}
export interface GenesisState_ChainAminoMsg {
  type: "/axelar.evm.v1beta1.Chain";
  value: GenesisState_ChainAmino;
}
export interface GenesisState_ChainSDKType {
  params: ParamsSDKType;
  burner_infos: BurnerInfoSDKType[];
  command_queue: QueueStateSDKType;
  confirmed_deposits: ERC20DepositSDKType[];
  burned_deposits: ERC20DepositSDKType[];
  command_batches: CommandBatchMetadataSDKType[];
  gateway: GatewaySDKType;
  tokens: ERC20TokenMetadataSDKType[];
  events: EventSDKType[];
  confirmed_event_queue: QueueStateSDKType;
  legacy_confirmed_deposits: ERC20DepositSDKType[];
  legacy_burned_deposits: ERC20DepositSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    chains: []
  };
}
export const GenesisState = {
  typeUrl: "/axelar.evm.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chains) {
      GenesisState_Chain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => GenesisState_Chain.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.chains = object.chains?.map(e => GenesisState_Chain.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.chains = object.chains?.map(e => GenesisState_Chain.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.chains) {
      obj.chains = message.chains.map(e => e ? GenesisState_Chain.toAmino(e) : undefined);
    } else {
      obj.chains = [];
    }
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
      typeUrl: "/axelar.evm.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisState_Chain(): GenesisState_Chain {
  return {
    params: Params.fromPartial({}),
    burnerInfos: [],
    commandQueue: QueueState.fromPartial({}),
    confirmedDeposits: [],
    burnedDeposits: [],
    commandBatches: [],
    gateway: Gateway.fromPartial({}),
    tokens: [],
    events: [],
    confirmedEventQueue: QueueState.fromPartial({}),
    legacyConfirmedDeposits: [],
    legacyBurnedDeposits: []
  };
}
export const GenesisState_Chain = {
  typeUrl: "/axelar.evm.v1beta1.Chain",
  encode(message: GenesisState_Chain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.burnerInfos) {
      BurnerInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.commandQueue !== undefined) {
      QueueState.encode(message.commandQueue, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.confirmedDeposits) {
      ERC20Deposit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.burnedDeposits) {
      ERC20Deposit.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.commandBatches) {
      CommandBatchMetadata.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.gateway !== undefined) {
      Gateway.encode(message.gateway, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.tokens) {
      ERC20TokenMetadata.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.confirmedEventQueue !== undefined) {
      QueueState.encode(message.confirmedEventQueue, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.legacyConfirmedDeposits) {
      ERC20Deposit.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.legacyBurnedDeposits) {
      ERC20Deposit.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_Chain {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      burnerInfos: Array.isArray(object?.burnerInfos) ? object.burnerInfos.map((e: any) => BurnerInfo.fromJSON(e)) : [],
      commandQueue: isSet(object.commandQueue) ? QueueState.fromJSON(object.commandQueue) : undefined,
      confirmedDeposits: Array.isArray(object?.confirmedDeposits) ? object.confirmedDeposits.map((e: any) => ERC20Deposit.fromJSON(e)) : [],
      burnedDeposits: Array.isArray(object?.burnedDeposits) ? object.burnedDeposits.map((e: any) => ERC20Deposit.fromJSON(e)) : [],
      commandBatches: Array.isArray(object?.commandBatches) ? object.commandBatches.map((e: any) => CommandBatchMetadata.fromJSON(e)) : [],
      gateway: isSet(object.gateway) ? Gateway.fromJSON(object.gateway) : undefined,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => ERC20TokenMetadata.fromJSON(e)) : [],
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      confirmedEventQueue: isSet(object.confirmedEventQueue) ? QueueState.fromJSON(object.confirmedEventQueue) : undefined,
      legacyConfirmedDeposits: Array.isArray(object?.legacyConfirmedDeposits) ? object.legacyConfirmedDeposits.map((e: any) => ERC20Deposit.fromJSON(e)) : [],
      legacyBurnedDeposits: Array.isArray(object?.legacyBurnedDeposits) ? object.legacyBurnedDeposits.map((e: any) => ERC20Deposit.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState_Chain>): GenesisState_Chain {
    const message = createBaseGenesisState_Chain();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.burnerInfos = object.burnerInfos?.map(e => BurnerInfo.fromPartial(e)) || [];
    message.commandQueue = object.commandQueue !== undefined && object.commandQueue !== null ? QueueState.fromPartial(object.commandQueue) : undefined;
    message.confirmedDeposits = object.confirmedDeposits?.map(e => ERC20Deposit.fromPartial(e)) || [];
    message.burnedDeposits = object.burnedDeposits?.map(e => ERC20Deposit.fromPartial(e)) || [];
    message.commandBatches = object.commandBatches?.map(e => CommandBatchMetadata.fromPartial(e)) || [];
    message.gateway = object.gateway !== undefined && object.gateway !== null ? Gateway.fromPartial(object.gateway) : undefined;
    message.tokens = object.tokens?.map(e => ERC20TokenMetadata.fromPartial(e)) || [];
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.confirmedEventQueue = object.confirmedEventQueue !== undefined && object.confirmedEventQueue !== null ? QueueState.fromPartial(object.confirmedEventQueue) : undefined;
    message.legacyConfirmedDeposits = object.legacyConfirmedDeposits?.map(e => ERC20Deposit.fromPartial(e)) || [];
    message.legacyBurnedDeposits = object.legacyBurnedDeposits?.map(e => ERC20Deposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisState_ChainAmino): GenesisState_Chain {
    const message = createBaseGenesisState_Chain();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.burnerInfos = object.burner_infos?.map(e => BurnerInfo.fromAmino(e)) || [];
    if (object.command_queue !== undefined && object.command_queue !== null) {
      message.commandQueue = QueueState.fromAmino(object.command_queue);
    }
    message.confirmedDeposits = object.confirmed_deposits?.map(e => ERC20Deposit.fromAmino(e)) || [];
    message.burnedDeposits = object.burned_deposits?.map(e => ERC20Deposit.fromAmino(e)) || [];
    message.commandBatches = object.command_batches?.map(e => CommandBatchMetadata.fromAmino(e)) || [];
    if (object.gateway !== undefined && object.gateway !== null) {
      message.gateway = Gateway.fromAmino(object.gateway);
    }
    message.tokens = object.tokens?.map(e => ERC20TokenMetadata.fromAmino(e)) || [];
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    if (object.confirmed_event_queue !== undefined && object.confirmed_event_queue !== null) {
      message.confirmedEventQueue = QueueState.fromAmino(object.confirmed_event_queue);
    }
    message.legacyConfirmedDeposits = object.legacy_confirmed_deposits?.map(e => ERC20Deposit.fromAmino(e)) || [];
    message.legacyBurnedDeposits = object.legacy_burned_deposits?.map(e => ERC20Deposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState_Chain): GenesisState_ChainAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.burnerInfos) {
      obj.burner_infos = message.burnerInfos.map(e => e ? BurnerInfo.toAmino(e) : undefined);
    } else {
      obj.burner_infos = [];
    }
    obj.command_queue = message.commandQueue ? QueueState.toAmino(message.commandQueue) : undefined;
    if (message.confirmedDeposits) {
      obj.confirmed_deposits = message.confirmedDeposits.map(e => e ? ERC20Deposit.toAmino(e) : undefined);
    } else {
      obj.confirmed_deposits = [];
    }
    if (message.burnedDeposits) {
      obj.burned_deposits = message.burnedDeposits.map(e => e ? ERC20Deposit.toAmino(e) : undefined);
    } else {
      obj.burned_deposits = [];
    }
    if (message.commandBatches) {
      obj.command_batches = message.commandBatches.map(e => e ? CommandBatchMetadata.toAmino(e) : undefined);
    } else {
      obj.command_batches = [];
    }
    obj.gateway = message.gateway ? Gateway.toAmino(message.gateway) : undefined;
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? ERC20TokenMetadata.toAmino(e) : undefined);
    } else {
      obj.tokens = [];
    }
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = [];
    }
    obj.confirmed_event_queue = message.confirmedEventQueue ? QueueState.toAmino(message.confirmedEventQueue) : undefined;
    if (message.legacyConfirmedDeposits) {
      obj.legacy_confirmed_deposits = message.legacyConfirmedDeposits.map(e => e ? ERC20Deposit.toAmino(e) : undefined);
    } else {
      obj.legacy_confirmed_deposits = [];
    }
    if (message.legacyBurnedDeposits) {
      obj.legacy_burned_deposits = message.legacyBurnedDeposits.map(e => e ? ERC20Deposit.toAmino(e) : undefined);
    } else {
      obj.legacy_burned_deposits = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisState_ChainAminoMsg): GenesisState_Chain {
    return GenesisState_Chain.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_ChainProtoMsg): GenesisState_Chain {
    return GenesisState_Chain.decode(message.value);
  },
  toProto(message: GenesisState_Chain): Uint8Array {
    return GenesisState_Chain.encode(message).finish();
  },
  toProtoMsg(message: GenesisState_Chain): GenesisState_ChainProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.Chain",
      value: GenesisState_Chain.encode(message).finish()
    };
  }
};