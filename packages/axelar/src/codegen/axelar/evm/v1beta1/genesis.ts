import { Params, ParamsSDKType } from "./params";
import { BurnerInfo, BurnerInfoSDKType, ERC20Deposit, ERC20DepositSDKType, CommandBatchMetadata, CommandBatchMetadataSDKType, Gateway, GatewaySDKType, ERC20TokenMetadata, ERC20TokenMetadataSDKType, Event, EventSDKType } from "./types";
import { QueueState, QueueStateSDKType } from "../../utils/v1beta1/queuer";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  chains: GenesisState_Chain[];
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  chains: GenesisState_ChainSDKType[];
}
export interface GenesisState_Chain {
  params?: Params;
  burnerInfos: BurnerInfo[];
  commandQueue?: QueueState;
  confirmedDeposits: ERC20Deposit[];
  burnedDeposits: ERC20Deposit[];
  commandBatches: CommandBatchMetadata[];
  gateway?: Gateway;
  tokens: ERC20TokenMetadata[];
  events: Event[];
  confirmedEventQueue?: QueueState;
  legacyConfirmedDeposits: ERC20Deposit[];
  legacyBurnedDeposits: ERC20Deposit[];
}
export interface GenesisState_ChainSDKType {
  params?: ParamsSDKType;
  burner_infos: BurnerInfoSDKType[];
  command_queue?: QueueStateSDKType;
  confirmed_deposits: ERC20DepositSDKType[];
  burned_deposits: ERC20DepositSDKType[];
  command_batches: CommandBatchMetadataSDKType[];
  gateway?: GatewaySDKType;
  tokens: ERC20TokenMetadataSDKType[];
  events: EventSDKType[];
  confirmed_event_queue?: QueueStateSDKType;
  legacy_confirmed_deposits: ERC20DepositSDKType[];
  legacy_burned_deposits: ERC20DepositSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    chains: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseGenesisState_Chain(): GenesisState_Chain {
  return {
    params: undefined,
    burnerInfos: [],
    commandQueue: undefined,
    confirmedDeposits: [],
    burnedDeposits: [],
    commandBatches: [],
    gateway: undefined,
    tokens: [],
    events: [],
    confirmedEventQueue: undefined,
    legacyConfirmedDeposits: [],
    legacyBurnedDeposits: []
  };
}
export const GenesisState_Chain = {
  encode(message: GenesisState_Chain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};