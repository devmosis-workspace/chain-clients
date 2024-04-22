import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface AxelarCork {
  /** call body containing the ABI encoded bytes to send to the contract */
  encodedContractCall: Uint8Array;
  /** the chain ID of the evm target chain */
  chainId: bigint;
  /** address of the contract to send the call */
  targetContractAddress: string;
  /**
   * unix timestamp before which the contract call must be executed.
   * enforced by the proxy contract.
   */
  deadline: bigint;
}
export interface AxelarCorkProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarCork";
  value: Uint8Array;
}
export interface AxelarCorkAmino {
  /** call body containing the ABI encoded bytes to send to the contract */
  encoded_contract_call?: string;
  /** the chain ID of the evm target chain */
  chain_id?: string;
  /** address of the contract to send the call */
  target_contract_address?: string;
  /**
   * unix timestamp before which the contract call must be executed.
   * enforced by the proxy contract.
   */
  deadline?: string;
}
export interface AxelarCorkAminoMsg {
  type: "/axelarcork.v1.AxelarCork";
  value: AxelarCorkAmino;
}
export interface AxelarCorkSDKType {
  encoded_contract_call: Uint8Array;
  chain_id: bigint;
  target_contract_address: string;
  deadline: bigint;
}
export interface ScheduledAxelarCork {
  cork?: AxelarCork;
  blockHeight: bigint;
  validator: string;
  id: string;
}
export interface ScheduledAxelarCorkProtoMsg {
  typeUrl: "/axelarcork.v1.ScheduledAxelarCork";
  value: Uint8Array;
}
export interface ScheduledAxelarCorkAmino {
  cork?: AxelarCorkAmino;
  block_height?: string;
  validator?: string;
  id?: string;
}
export interface ScheduledAxelarCorkAminoMsg {
  type: "/axelarcork.v1.ScheduledAxelarCork";
  value: ScheduledAxelarCorkAmino;
}
export interface ScheduledAxelarCorkSDKType {
  cork?: AxelarCorkSDKType;
  block_height: bigint;
  validator: string;
  id: string;
}
export interface ScheduledAxelarCorks {
  scheduledCorks: ScheduledAxelarCork[];
}
export interface ScheduledAxelarCorksProtoMsg {
  typeUrl: "/axelarcork.v1.ScheduledAxelarCorks";
  value: Uint8Array;
}
export interface ScheduledAxelarCorksAmino {
  scheduled_corks?: ScheduledAxelarCorkAmino[];
}
export interface ScheduledAxelarCorksAminoMsg {
  type: "/axelarcork.v1.ScheduledAxelarCorks";
  value: ScheduledAxelarCorksAmino;
}
export interface ScheduledAxelarCorksSDKType {
  scheduled_corks: ScheduledAxelarCorkSDKType[];
}
export interface AxelarCorkResult {
  cork?: AxelarCork;
  blockHeight: bigint;
  approved: boolean;
  approvalPercentage: string;
}
export interface AxelarCorkResultProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarCorkResult";
  value: Uint8Array;
}
export interface AxelarCorkResultAmino {
  cork?: AxelarCorkAmino;
  block_height?: string;
  approved?: boolean;
  approval_percentage?: string;
}
export interface AxelarCorkResultAminoMsg {
  type: "/axelarcork.v1.AxelarCorkResult";
  value: AxelarCorkResultAmino;
}
export interface AxelarCorkResultSDKType {
  cork?: AxelarCorkSDKType;
  block_height: bigint;
  approved: boolean;
  approval_percentage: string;
}
export interface AxelarCorkResults {
  corkResults: AxelarCorkResult[];
}
export interface AxelarCorkResultsProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarCorkResults";
  value: Uint8Array;
}
export interface AxelarCorkResultsAmino {
  cork_results?: AxelarCorkResultAmino[];
}
export interface AxelarCorkResultsAminoMsg {
  type: "/axelarcork.v1.AxelarCorkResults";
  value: AxelarCorkResultsAmino;
}
export interface AxelarCorkResultsSDKType {
  cork_results: AxelarCorkResultSDKType[];
}
export interface CellarIDSet {
  chainId: bigint;
  ids: string[];
}
export interface CellarIDSetProtoMsg {
  typeUrl: "/axelarcork.v1.CellarIDSet";
  value: Uint8Array;
}
export interface CellarIDSetAmino {
  chain_id?: string;
  ids?: string[];
}
export interface CellarIDSetAminoMsg {
  type: "/axelarcork.v1.CellarIDSet";
  value: CellarIDSetAmino;
}
export interface CellarIDSetSDKType {
  chain_id: bigint;
  ids: string[];
}
export interface ChainConfiguration {
  name: string;
  id: bigint;
  proxyAddress: string;
  /**
   * pure token transfers have a fixed fee deducted from the amount sent in the ICS-20 message depending
   * on the asset and destination chain
   * they can be calculated here: https://docs.axelar.dev/resources/mainnet#cross-chain-relayer-gas-fee
   */
  bridgeFees: Coin[];
}
export interface ChainConfigurationProtoMsg {
  typeUrl: "/axelarcork.v1.ChainConfiguration";
  value: Uint8Array;
}
export interface ChainConfigurationAmino {
  name?: string;
  id?: string;
  proxy_address?: string;
  /**
   * pure token transfers have a fixed fee deducted from the amount sent in the ICS-20 message depending
   * on the asset and destination chain
   * they can be calculated here: https://docs.axelar.dev/resources/mainnet#cross-chain-relayer-gas-fee
   */
  bridge_fees?: CoinAmino[];
}
export interface ChainConfigurationAminoMsg {
  type: "/axelarcork.v1.ChainConfiguration";
  value: ChainConfigurationAmino;
}
export interface ChainConfigurationSDKType {
  name: string;
  id: bigint;
  proxy_address: string;
  bridge_fees: CoinSDKType[];
}
export interface ChainConfigurations {
  configurations: ChainConfiguration[];
}
export interface ChainConfigurationsProtoMsg {
  typeUrl: "/axelarcork.v1.ChainConfigurations";
  value: Uint8Array;
}
export interface ChainConfigurationsAmino {
  configurations?: ChainConfigurationAmino[];
}
export interface ChainConfigurationsAminoMsg {
  type: "/axelarcork.v1.ChainConfigurations";
  value: ChainConfigurationsAmino;
}
export interface ChainConfigurationsSDKType {
  configurations: ChainConfigurationSDKType[];
}
/** Used to enforce strictly newer call ordering per contract */
export interface AxelarContractCallNonce {
  chainId: bigint;
  contractAddress: string;
  nonce: bigint;
}
export interface AxelarContractCallNonceProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarContractCallNonce";
  value: Uint8Array;
}
/** Used to enforce strictly newer call ordering per contract */
export interface AxelarContractCallNonceAmino {
  chain_id?: string;
  contract_address?: string;
  nonce?: string;
}
export interface AxelarContractCallNonceAminoMsg {
  type: "/axelarcork.v1.AxelarContractCallNonce";
  value: AxelarContractCallNonceAmino;
}
/** Used to enforce strictly newer call ordering per contract */
export interface AxelarContractCallNonceSDKType {
  chain_id: bigint;
  contract_address: string;
  nonce: bigint;
}
/**
 * Represents a proxy contract upgrade approved by governance with a delay in
 * execution in case of an error.
 */
export interface AxelarUpgradeData {
  chainId: bigint;
  payload: Uint8Array;
  executableHeightThreshold: bigint;
}
export interface AxelarUpgradeDataProtoMsg {
  typeUrl: "/axelarcork.v1.AxelarUpgradeData";
  value: Uint8Array;
}
/**
 * Represents a proxy contract upgrade approved by governance with a delay in
 * execution in case of an error.
 */
export interface AxelarUpgradeDataAmino {
  chain_id?: string;
  payload?: string;
  executable_height_threshold?: string;
}
export interface AxelarUpgradeDataAminoMsg {
  type: "/axelarcork.v1.AxelarUpgradeData";
  value: AxelarUpgradeDataAmino;
}
/**
 * Represents a proxy contract upgrade approved by governance with a delay in
 * execution in case of an error.
 */
export interface AxelarUpgradeDataSDKType {
  chain_id: bigint;
  payload: Uint8Array;
  executable_height_threshold: bigint;
}
/** Represents a cork that has received enough votes to be executed */
export interface WinningAxelarCork {
  cork?: AxelarCork;
  blockHeight: bigint;
}
export interface WinningAxelarCorkProtoMsg {
  typeUrl: "/axelarcork.v1.WinningAxelarCork";
  value: Uint8Array;
}
/** Represents a cork that has received enough votes to be executed */
export interface WinningAxelarCorkAmino {
  cork?: AxelarCorkAmino;
  block_height?: string;
}
export interface WinningAxelarCorkAminoMsg {
  type: "/axelarcork.v1.WinningAxelarCork";
  value: WinningAxelarCorkAmino;
}
/** Represents a cork that has received enough votes to be executed */
export interface WinningAxelarCorkSDKType {
  cork?: AxelarCorkSDKType;
  block_height: bigint;
}
function createBaseAxelarCork(): AxelarCork {
  return {
    encodedContractCall: new Uint8Array(),
    chainId: BigInt(0),
    targetContractAddress: "",
    deadline: BigInt(0)
  };
}
export const AxelarCork = {
  typeUrl: "/axelarcork.v1.AxelarCork",
  encode(message: AxelarCork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.encodedContractCall.length !== 0) {
      writer.uint32(10).bytes(message.encodedContractCall);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(26).string(message.targetContractAddress);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(32).uint64(message.deadline);
    }
    return writer;
  },
  fromJSON(object: any): AxelarCork {
    return {
      encodedContractCall: isSet(object.encodedContractCall) ? bytesFromBase64(object.encodedContractCall) : new Uint8Array(),
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : "",
      deadline: isSet(object.deadline) ? BigInt(object.deadline.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<AxelarCork>): AxelarCork {
    const message = createBaseAxelarCork();
    message.encodedContractCall = object.encodedContractCall ?? new Uint8Array();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.targetContractAddress = object.targetContractAddress ?? "";
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AxelarCorkAmino): AxelarCork {
    const message = createBaseAxelarCork();
    if (object.encoded_contract_call !== undefined && object.encoded_contract_call !== null) {
      message.encodedContractCall = bytesFromBase64(object.encoded_contract_call);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.target_contract_address !== undefined && object.target_contract_address !== null) {
      message.targetContractAddress = object.target_contract_address;
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    return message;
  },
  toAmino(message: AxelarCork): AxelarCorkAmino {
    const obj: any = {};
    obj.encoded_contract_call = message.encodedContractCall ? base64FromBytes(message.encodedContractCall) : undefined;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.target_contract_address = message.targetContractAddress;
    obj.deadline = message.deadline ? message.deadline.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AxelarCorkAminoMsg): AxelarCork {
    return AxelarCork.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarCorkProtoMsg): AxelarCork {
    return AxelarCork.decode(message.value);
  },
  toProto(message: AxelarCork): Uint8Array {
    return AxelarCork.encode(message).finish();
  },
  toProtoMsg(message: AxelarCork): AxelarCorkProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarCork",
      value: AxelarCork.encode(message).finish()
    };
  }
};
function createBaseScheduledAxelarCork(): ScheduledAxelarCork {
  return {
    cork: undefined,
    blockHeight: BigInt(0),
    validator: "",
    id: ""
  };
}
export const ScheduledAxelarCork = {
  typeUrl: "/axelarcork.v1.ScheduledAxelarCork",
  encode(message: ScheduledAxelarCork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      AxelarCork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): ScheduledAxelarCork {
    return {
      cork: isSet(object.cork) ? AxelarCork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      validator: isSet(object.validator) ? String(object.validator) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<ScheduledAxelarCork>): ScheduledAxelarCork {
    const message = createBaseScheduledAxelarCork();
    message.cork = object.cork !== undefined && object.cork !== null ? AxelarCork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validator = object.validator ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: ScheduledAxelarCorkAmino): ScheduledAxelarCork {
    const message = createBaseScheduledAxelarCork();
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = AxelarCork.fromAmino(object.cork);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: ScheduledAxelarCork): ScheduledAxelarCorkAmino {
    const obj: any = {};
    obj.cork = message.cork ? AxelarCork.toAmino(message.cork) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.validator = message.validator;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: ScheduledAxelarCorkAminoMsg): ScheduledAxelarCork {
    return ScheduledAxelarCork.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduledAxelarCorkProtoMsg): ScheduledAxelarCork {
    return ScheduledAxelarCork.decode(message.value);
  },
  toProto(message: ScheduledAxelarCork): Uint8Array {
    return ScheduledAxelarCork.encode(message).finish();
  },
  toProtoMsg(message: ScheduledAxelarCork): ScheduledAxelarCorkProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.ScheduledAxelarCork",
      value: ScheduledAxelarCork.encode(message).finish()
    };
  }
};
function createBaseScheduledAxelarCorks(): ScheduledAxelarCorks {
  return {
    scheduledCorks: []
  };
}
export const ScheduledAxelarCorks = {
  typeUrl: "/axelarcork.v1.ScheduledAxelarCorks",
  encode(message: ScheduledAxelarCorks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.scheduledCorks) {
      ScheduledAxelarCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ScheduledAxelarCorks {
    return {
      scheduledCorks: Array.isArray(object?.scheduledCorks) ? object.scheduledCorks.map((e: any) => ScheduledAxelarCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ScheduledAxelarCorks>): ScheduledAxelarCorks {
    const message = createBaseScheduledAxelarCorks();
    message.scheduledCorks = object.scheduledCorks?.map(e => ScheduledAxelarCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ScheduledAxelarCorksAmino): ScheduledAxelarCorks {
    const message = createBaseScheduledAxelarCorks();
    message.scheduledCorks = object.scheduled_corks?.map(e => ScheduledAxelarCork.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ScheduledAxelarCorks): ScheduledAxelarCorksAmino {
    const obj: any = {};
    if (message.scheduledCorks) {
      obj.scheduled_corks = message.scheduledCorks.map(e => e ? ScheduledAxelarCork.toAmino(e) : undefined);
    } else {
      obj.scheduled_corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: ScheduledAxelarCorksAminoMsg): ScheduledAxelarCorks {
    return ScheduledAxelarCorks.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduledAxelarCorksProtoMsg): ScheduledAxelarCorks {
    return ScheduledAxelarCorks.decode(message.value);
  },
  toProto(message: ScheduledAxelarCorks): Uint8Array {
    return ScheduledAxelarCorks.encode(message).finish();
  },
  toProtoMsg(message: ScheduledAxelarCorks): ScheduledAxelarCorksProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.ScheduledAxelarCorks",
      value: ScheduledAxelarCorks.encode(message).finish()
    };
  }
};
function createBaseAxelarCorkResult(): AxelarCorkResult {
  return {
    cork: undefined,
    blockHeight: BigInt(0),
    approved: false,
    approvalPercentage: ""
  };
}
export const AxelarCorkResult = {
  typeUrl: "/axelarcork.v1.AxelarCorkResult",
  encode(message: AxelarCorkResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      AxelarCork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.approved === true) {
      writer.uint32(24).bool(message.approved);
    }
    if (message.approvalPercentage !== "") {
      writer.uint32(34).string(message.approvalPercentage);
    }
    return writer;
  },
  fromJSON(object: any): AxelarCorkResult {
    return {
      cork: isSet(object.cork) ? AxelarCork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      approved: isSet(object.approved) ? Boolean(object.approved) : false,
      approvalPercentage: isSet(object.approvalPercentage) ? String(object.approvalPercentage) : ""
    };
  },
  fromPartial(object: Partial<AxelarCorkResult>): AxelarCorkResult {
    const message = createBaseAxelarCorkResult();
    message.cork = object.cork !== undefined && object.cork !== null ? AxelarCork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.approved = object.approved ?? false;
    message.approvalPercentage = object.approvalPercentage ?? "";
    return message;
  },
  fromAmino(object: AxelarCorkResultAmino): AxelarCorkResult {
    const message = createBaseAxelarCorkResult();
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = AxelarCork.fromAmino(object.cork);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved;
    }
    if (object.approval_percentage !== undefined && object.approval_percentage !== null) {
      message.approvalPercentage = object.approval_percentage;
    }
    return message;
  },
  toAmino(message: AxelarCorkResult): AxelarCorkResultAmino {
    const obj: any = {};
    obj.cork = message.cork ? AxelarCork.toAmino(message.cork) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.approved = message.approved;
    obj.approval_percentage = message.approvalPercentage;
    return obj;
  },
  fromAminoMsg(object: AxelarCorkResultAminoMsg): AxelarCorkResult {
    return AxelarCorkResult.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarCorkResultProtoMsg): AxelarCorkResult {
    return AxelarCorkResult.decode(message.value);
  },
  toProto(message: AxelarCorkResult): Uint8Array {
    return AxelarCorkResult.encode(message).finish();
  },
  toProtoMsg(message: AxelarCorkResult): AxelarCorkResultProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarCorkResult",
      value: AxelarCorkResult.encode(message).finish()
    };
  }
};
function createBaseAxelarCorkResults(): AxelarCorkResults {
  return {
    corkResults: []
  };
}
export const AxelarCorkResults = {
  typeUrl: "/axelarcork.v1.AxelarCorkResults",
  encode(message: AxelarCorkResults, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corkResults) {
      AxelarCorkResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AxelarCorkResults {
    return {
      corkResults: Array.isArray(object?.corkResults) ? object.corkResults.map((e: any) => AxelarCorkResult.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AxelarCorkResults>): AxelarCorkResults {
    const message = createBaseAxelarCorkResults();
    message.corkResults = object.corkResults?.map(e => AxelarCorkResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AxelarCorkResultsAmino): AxelarCorkResults {
    const message = createBaseAxelarCorkResults();
    message.corkResults = object.cork_results?.map(e => AxelarCorkResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AxelarCorkResults): AxelarCorkResultsAmino {
    const obj: any = {};
    if (message.corkResults) {
      obj.cork_results = message.corkResults.map(e => e ? AxelarCorkResult.toAmino(e) : undefined);
    } else {
      obj.cork_results = [];
    }
    return obj;
  },
  fromAminoMsg(object: AxelarCorkResultsAminoMsg): AxelarCorkResults {
    return AxelarCorkResults.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarCorkResultsProtoMsg): AxelarCorkResults {
    return AxelarCorkResults.decode(message.value);
  },
  toProto(message: AxelarCorkResults): Uint8Array {
    return AxelarCorkResults.encode(message).finish();
  },
  toProtoMsg(message: AxelarCorkResults): AxelarCorkResultsProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarCorkResults",
      value: AxelarCorkResults.encode(message).finish()
    };
  }
};
function createBaseCellarIDSet(): CellarIDSet {
  return {
    chainId: BigInt(0),
    ids: []
  };
}
export const CellarIDSet = {
  typeUrl: "/axelarcork.v1.CellarIDSet",
  encode(message: CellarIDSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CellarIDSet {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CellarIDSet>): CellarIDSet {
    const message = createBaseCellarIDSet();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CellarIDSetAmino): CellarIDSet {
    const message = createBaseCellarIDSet();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: CellarIDSet): CellarIDSetAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: CellarIDSetAminoMsg): CellarIDSet {
    return CellarIDSet.fromAmino(object.value);
  },
  fromProtoMsg(message: CellarIDSetProtoMsg): CellarIDSet {
    return CellarIDSet.decode(message.value);
  },
  toProto(message: CellarIDSet): Uint8Array {
    return CellarIDSet.encode(message).finish();
  },
  toProtoMsg(message: CellarIDSet): CellarIDSetProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.CellarIDSet",
      value: CellarIDSet.encode(message).finish()
    };
  }
};
function createBaseChainConfiguration(): ChainConfiguration {
  return {
    name: "",
    id: BigInt(0),
    proxyAddress: "",
    bridgeFees: []
  };
}
export const ChainConfiguration = {
  typeUrl: "/axelarcork.v1.ChainConfiguration",
  encode(message: ChainConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.proxyAddress !== "") {
      writer.uint32(26).string(message.proxyAddress);
    }
    for (const v of message.bridgeFees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ChainConfiguration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      proxyAddress: isSet(object.proxyAddress) ? String(object.proxyAddress) : "",
      bridgeFees: Array.isArray(object?.bridgeFees) ? object.bridgeFees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ChainConfiguration>): ChainConfiguration {
    const message = createBaseChainConfiguration();
    message.name = object.name ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.proxyAddress = object.proxyAddress ?? "";
    message.bridgeFees = object.bridgeFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ChainConfigurationAmino): ChainConfiguration {
    const message = createBaseChainConfiguration();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.proxy_address !== undefined && object.proxy_address !== null) {
      message.proxyAddress = object.proxy_address;
    }
    message.bridgeFees = object.bridge_fees?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ChainConfiguration): ChainConfigurationAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.proxy_address = message.proxyAddress;
    if (message.bridgeFees) {
      obj.bridge_fees = message.bridgeFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bridge_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChainConfigurationAminoMsg): ChainConfiguration {
    return ChainConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainConfigurationProtoMsg): ChainConfiguration {
    return ChainConfiguration.decode(message.value);
  },
  toProto(message: ChainConfiguration): Uint8Array {
    return ChainConfiguration.encode(message).finish();
  },
  toProtoMsg(message: ChainConfiguration): ChainConfigurationProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.ChainConfiguration",
      value: ChainConfiguration.encode(message).finish()
    };
  }
};
function createBaseChainConfigurations(): ChainConfigurations {
  return {
    configurations: []
  };
}
export const ChainConfigurations = {
  typeUrl: "/axelarcork.v1.ChainConfigurations",
  encode(message: ChainConfigurations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.configurations) {
      ChainConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ChainConfigurations {
    return {
      configurations: Array.isArray(object?.configurations) ? object.configurations.map((e: any) => ChainConfiguration.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ChainConfigurations>): ChainConfigurations {
    const message = createBaseChainConfigurations();
    message.configurations = object.configurations?.map(e => ChainConfiguration.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ChainConfigurationsAmino): ChainConfigurations {
    const message = createBaseChainConfigurations();
    message.configurations = object.configurations?.map(e => ChainConfiguration.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ChainConfigurations): ChainConfigurationsAmino {
    const obj: any = {};
    if (message.configurations) {
      obj.configurations = message.configurations.map(e => e ? ChainConfiguration.toAmino(e) : undefined);
    } else {
      obj.configurations = [];
    }
    return obj;
  },
  fromAminoMsg(object: ChainConfigurationsAminoMsg): ChainConfigurations {
    return ChainConfigurations.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainConfigurationsProtoMsg): ChainConfigurations {
    return ChainConfigurations.decode(message.value);
  },
  toProto(message: ChainConfigurations): Uint8Array {
    return ChainConfigurations.encode(message).finish();
  },
  toProtoMsg(message: ChainConfigurations): ChainConfigurationsProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.ChainConfigurations",
      value: ChainConfigurations.encode(message).finish()
    };
  }
};
function createBaseAxelarContractCallNonce(): AxelarContractCallNonce {
  return {
    chainId: BigInt(0),
    contractAddress: "",
    nonce: BigInt(0)
  };
}
export const AxelarContractCallNonce = {
  typeUrl: "/axelarcork.v1.AxelarContractCallNonce",
  encode(message: AxelarContractCallNonce, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): AxelarContractCallNonce {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<AxelarContractCallNonce>): AxelarContractCallNonce {
    const message = createBaseAxelarContractCallNonce();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AxelarContractCallNonceAmino): AxelarContractCallNonce {
    const message = createBaseAxelarContractCallNonce();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    return message;
  },
  toAmino(message: AxelarContractCallNonce): AxelarContractCallNonceAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.contract_address = message.contractAddress;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AxelarContractCallNonceAminoMsg): AxelarContractCallNonce {
    return AxelarContractCallNonce.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarContractCallNonceProtoMsg): AxelarContractCallNonce {
    return AxelarContractCallNonce.decode(message.value);
  },
  toProto(message: AxelarContractCallNonce): Uint8Array {
    return AxelarContractCallNonce.encode(message).finish();
  },
  toProtoMsg(message: AxelarContractCallNonce): AxelarContractCallNonceProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarContractCallNonce",
      value: AxelarContractCallNonce.encode(message).finish()
    };
  }
};
function createBaseAxelarUpgradeData(): AxelarUpgradeData {
  return {
    chainId: BigInt(0),
    payload: new Uint8Array(),
    executableHeightThreshold: BigInt(0)
  };
}
export const AxelarUpgradeData = {
  typeUrl: "/axelarcork.v1.AxelarUpgradeData",
  encode(message: AxelarUpgradeData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    if (message.executableHeightThreshold !== BigInt(0)) {
      writer.uint32(24).int64(message.executableHeightThreshold);
    }
    return writer;
  },
  fromJSON(object: any): AxelarUpgradeData {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      executableHeightThreshold: isSet(object.executableHeightThreshold) ? BigInt(object.executableHeightThreshold.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<AxelarUpgradeData>): AxelarUpgradeData {
    const message = createBaseAxelarUpgradeData();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.payload = object.payload ?? new Uint8Array();
    message.executableHeightThreshold = object.executableHeightThreshold !== undefined && object.executableHeightThreshold !== null ? BigInt(object.executableHeightThreshold.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AxelarUpgradeDataAmino): AxelarUpgradeData {
    const message = createBaseAxelarUpgradeData();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    if (object.executable_height_threshold !== undefined && object.executable_height_threshold !== null) {
      message.executableHeightThreshold = BigInt(object.executable_height_threshold);
    }
    return message;
  },
  toAmino(message: AxelarUpgradeData): AxelarUpgradeDataAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.executable_height_threshold = message.executableHeightThreshold ? message.executableHeightThreshold.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AxelarUpgradeDataAminoMsg): AxelarUpgradeData {
    return AxelarUpgradeData.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarUpgradeDataProtoMsg): AxelarUpgradeData {
    return AxelarUpgradeData.decode(message.value);
  },
  toProto(message: AxelarUpgradeData): Uint8Array {
    return AxelarUpgradeData.encode(message).finish();
  },
  toProtoMsg(message: AxelarUpgradeData): AxelarUpgradeDataProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.AxelarUpgradeData",
      value: AxelarUpgradeData.encode(message).finish()
    };
  }
};
function createBaseWinningAxelarCork(): WinningAxelarCork {
  return {
    cork: undefined,
    blockHeight: BigInt(0)
  };
}
export const WinningAxelarCork = {
  typeUrl: "/axelarcork.v1.WinningAxelarCork",
  encode(message: WinningAxelarCork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      AxelarCork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    return writer;
  },
  fromJSON(object: any): WinningAxelarCork {
    return {
      cork: isSet(object.cork) ? AxelarCork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<WinningAxelarCork>): WinningAxelarCork {
    const message = createBaseWinningAxelarCork();
    message.cork = object.cork !== undefined && object.cork !== null ? AxelarCork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WinningAxelarCorkAmino): WinningAxelarCork {
    const message = createBaseWinningAxelarCork();
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = AxelarCork.fromAmino(object.cork);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: WinningAxelarCork): WinningAxelarCorkAmino {
    const obj: any = {};
    obj.cork = message.cork ? AxelarCork.toAmino(message.cork) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WinningAxelarCorkAminoMsg): WinningAxelarCork {
    return WinningAxelarCork.fromAmino(object.value);
  },
  fromProtoMsg(message: WinningAxelarCorkProtoMsg): WinningAxelarCork {
    return WinningAxelarCork.decode(message.value);
  },
  toProto(message: WinningAxelarCork): Uint8Array {
    return WinningAxelarCork.encode(message).finish();
  },
  toProtoMsg(message: WinningAxelarCork): WinningAxelarCorkProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.WinningAxelarCork",
      value: WinningAxelarCork.encode(message).finish()
    };
  }
};