import { ChainConfigurations, ChainConfigurationsAmino, ChainConfigurationsSDKType, CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ScheduledAxelarCorks, ScheduledAxelarCorksAmino, ScheduledAxelarCorksSDKType, AxelarCorkResults, AxelarCorkResultsAmino, AxelarCorkResultsSDKType, AxelarContractCallNonce, AxelarContractCallNonceAmino, AxelarContractCallNonceSDKType, AxelarUpgradeData, AxelarUpgradeDataAmino, AxelarUpgradeDataSDKType } from "./axelarcork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
  params?: Params;
  chainConfigurations: ChainConfigurations;
  cellarIds: CellarIDSet[];
  scheduledCorks?: ScheduledAxelarCorks;
  corkResults?: AxelarCorkResults;
  axelarContractCallNonces: AxelarContractCallNonce[];
  axelarUpgradeData: AxelarUpgradeData[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelarcork.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  chain_configurations?: ChainConfigurationsAmino;
  cellar_ids?: CellarIDSetAmino[];
  scheduled_corks?: ScheduledAxelarCorksAmino;
  cork_results?: AxelarCorkResultsAmino;
  axelar_contract_call_nonces?: AxelarContractCallNonceAmino[];
  axelar_upgrade_data?: AxelarUpgradeDataAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/axelarcork.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  chain_configurations: ChainConfigurationsSDKType;
  cellar_ids: CellarIDSetSDKType[];
  scheduled_corks?: ScheduledAxelarCorksSDKType;
  cork_results?: AxelarCorkResultsSDKType;
  axelar_contract_call_nonces: AxelarContractCallNonceSDKType[];
  axelar_upgrade_data: AxelarUpgradeDataSDKType[];
}
export interface Params {
  enabled: boolean;
  ibcChannel: string;
  ibcPort: string;
  gmpAccount: string;
  executorAccount: string;
  timeoutDuration: bigint;
  corkTimeoutBlocks: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/axelarcork.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  enabled?: boolean;
  ibc_channel?: string;
  ibc_port?: string;
  gmp_account?: string;
  executor_account?: string;
  timeout_duration?: string;
  cork_timeout_blocks?: string;
}
export interface ParamsAminoMsg {
  type: "/axelarcork.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  enabled: boolean;
  ibc_channel: string;
  ibc_port: string;
  gmp_account: string;
  executor_account: string;
  timeout_duration: bigint;
  cork_timeout_blocks: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    chainConfigurations: ChainConfigurations.fromPartial({}),
    cellarIds: [],
    scheduledCorks: undefined,
    corkResults: undefined,
    axelarContractCallNonces: [],
    axelarUpgradeData: []
  };
}
export const GenesisState = {
  typeUrl: "/axelarcork.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainConfigurations !== undefined) {
      ChainConfigurations.encode(message.chainConfigurations, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.cellarIds) {
      CellarIDSet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.scheduledCorks !== undefined) {
      ScheduledAxelarCorks.encode(message.scheduledCorks, writer.uint32(34).fork()).ldelim();
    }
    if (message.corkResults !== undefined) {
      AxelarCorkResults.encode(message.corkResults, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.axelarContractCallNonces) {
      AxelarContractCallNonce.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.axelarUpgradeData) {
      AxelarUpgradeData.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      chainConfigurations: isSet(object.chainConfigurations) ? ChainConfigurations.fromJSON(object.chainConfigurations) : undefined,
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => CellarIDSet.fromJSON(e)) : [],
      scheduledCorks: isSet(object.scheduledCorks) ? ScheduledAxelarCorks.fromJSON(object.scheduledCorks) : undefined,
      corkResults: isSet(object.corkResults) ? AxelarCorkResults.fromJSON(object.corkResults) : undefined,
      axelarContractCallNonces: Array.isArray(object?.axelarContractCallNonces) ? object.axelarContractCallNonces.map((e: any) => AxelarContractCallNonce.fromJSON(e)) : [],
      axelarUpgradeData: Array.isArray(object?.axelarUpgradeData) ? object.axelarUpgradeData.map((e: any) => AxelarUpgradeData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.chainConfigurations = object.chainConfigurations !== undefined && object.chainConfigurations !== null ? ChainConfigurations.fromPartial(object.chainConfigurations) : undefined;
    message.cellarIds = object.cellarIds?.map(e => CellarIDSet.fromPartial(e)) || [];
    message.scheduledCorks = object.scheduledCorks !== undefined && object.scheduledCorks !== null ? ScheduledAxelarCorks.fromPartial(object.scheduledCorks) : undefined;
    message.corkResults = object.corkResults !== undefined && object.corkResults !== null ? AxelarCorkResults.fromPartial(object.corkResults) : undefined;
    message.axelarContractCallNonces = object.axelarContractCallNonces?.map(e => AxelarContractCallNonce.fromPartial(e)) || [];
    message.axelarUpgradeData = object.axelarUpgradeData?.map(e => AxelarUpgradeData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.chain_configurations !== undefined && object.chain_configurations !== null) {
      message.chainConfigurations = ChainConfigurations.fromAmino(object.chain_configurations);
    }
    message.cellarIds = object.cellar_ids?.map(e => CellarIDSet.fromAmino(e)) || [];
    if (object.scheduled_corks !== undefined && object.scheduled_corks !== null) {
      message.scheduledCorks = ScheduledAxelarCorks.fromAmino(object.scheduled_corks);
    }
    if (object.cork_results !== undefined && object.cork_results !== null) {
      message.corkResults = AxelarCorkResults.fromAmino(object.cork_results);
    }
    message.axelarContractCallNonces = object.axelar_contract_call_nonces?.map(e => AxelarContractCallNonce.fromAmino(e)) || [];
    message.axelarUpgradeData = object.axelar_upgrade_data?.map(e => AxelarUpgradeData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.chain_configurations = message.chainConfigurations ? ChainConfigurations.toAmino(message.chainConfigurations) : undefined;
    if (message.cellarIds) {
      obj.cellar_ids = message.cellarIds.map(e => e ? CellarIDSet.toAmino(e) : undefined);
    } else {
      obj.cellar_ids = [];
    }
    obj.scheduled_corks = message.scheduledCorks ? ScheduledAxelarCorks.toAmino(message.scheduledCorks) : undefined;
    obj.cork_results = message.corkResults ? AxelarCorkResults.toAmino(message.corkResults) : undefined;
    if (message.axelarContractCallNonces) {
      obj.axelar_contract_call_nonces = message.axelarContractCallNonces.map(e => e ? AxelarContractCallNonce.toAmino(e) : undefined);
    } else {
      obj.axelar_contract_call_nonces = [];
    }
    if (message.axelarUpgradeData) {
      obj.axelar_upgrade_data = message.axelarUpgradeData.map(e => e ? AxelarUpgradeData.toAmino(e) : undefined);
    } else {
      obj.axelar_upgrade_data = [];
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
      typeUrl: "/axelarcork.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enabled: false,
    ibcChannel: "",
    ibcPort: "",
    gmpAccount: "",
    executorAccount: "",
    timeoutDuration: BigInt(0),
    corkTimeoutBlocks: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/axelarcork.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.ibcChannel !== "") {
      writer.uint32(18).string(message.ibcChannel);
    }
    if (message.ibcPort !== "") {
      writer.uint32(26).string(message.ibcPort);
    }
    if (message.gmpAccount !== "") {
      writer.uint32(34).string(message.gmpAccount);
    }
    if (message.executorAccount !== "") {
      writer.uint32(42).string(message.executorAccount);
    }
    if (message.timeoutDuration !== BigInt(0)) {
      writer.uint32(48).uint64(message.timeoutDuration);
    }
    if (message.corkTimeoutBlocks !== BigInt(0)) {
      writer.uint32(56).uint64(message.corkTimeoutBlocks);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      ibcChannel: isSet(object.ibcChannel) ? String(object.ibcChannel) : "",
      ibcPort: isSet(object.ibcPort) ? String(object.ibcPort) : "",
      gmpAccount: isSet(object.gmpAccount) ? String(object.gmpAccount) : "",
      executorAccount: isSet(object.executorAccount) ? String(object.executorAccount) : "",
      timeoutDuration: isSet(object.timeoutDuration) ? BigInt(object.timeoutDuration.toString()) : BigInt(0),
      corkTimeoutBlocks: isSet(object.corkTimeoutBlocks) ? BigInt(object.corkTimeoutBlocks.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    message.ibcChannel = object.ibcChannel ?? "";
    message.ibcPort = object.ibcPort ?? "";
    message.gmpAccount = object.gmpAccount ?? "";
    message.executorAccount = object.executorAccount ?? "";
    message.timeoutDuration = object.timeoutDuration !== undefined && object.timeoutDuration !== null ? BigInt(object.timeoutDuration.toString()) : BigInt(0);
    message.corkTimeoutBlocks = object.corkTimeoutBlocks !== undefined && object.corkTimeoutBlocks !== null ? BigInt(object.corkTimeoutBlocks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.ibc_channel !== undefined && object.ibc_channel !== null) {
      message.ibcChannel = object.ibc_channel;
    }
    if (object.ibc_port !== undefined && object.ibc_port !== null) {
      message.ibcPort = object.ibc_port;
    }
    if (object.gmp_account !== undefined && object.gmp_account !== null) {
      message.gmpAccount = object.gmp_account;
    }
    if (object.executor_account !== undefined && object.executor_account !== null) {
      message.executorAccount = object.executor_account;
    }
    if (object.timeout_duration !== undefined && object.timeout_duration !== null) {
      message.timeoutDuration = BigInt(object.timeout_duration);
    }
    if (object.cork_timeout_blocks !== undefined && object.cork_timeout_blocks !== null) {
      message.corkTimeoutBlocks = BigInt(object.cork_timeout_blocks);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    obj.ibc_channel = message.ibcChannel;
    obj.ibc_port = message.ibcPort;
    obj.gmp_account = message.gmpAccount;
    obj.executor_account = message.executorAccount;
    obj.timeout_duration = message.timeoutDuration ? message.timeoutDuration.toString() : undefined;
    obj.cork_timeout_blocks = message.corkTimeoutBlocks ? message.corkTimeoutBlocks.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};