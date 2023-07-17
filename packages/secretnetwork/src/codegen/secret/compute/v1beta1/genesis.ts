import { CodeInfo, CodeInfoSDKType, ContractInfo, ContractInfoSDKType, Model, ModelSDKType, ContractCustomInfo, ContractCustomInfoSDKType } from "./types";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  /** Params params = 1 [(gogoproto.nullable) = false]; */
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
  codes: CodeSDKType[];
  contracts: ContractSDKType[];
  sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeId: Long;
  codeInfo?: CodeInfo;
  codeBytes: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
  code_id: Long;
  code_info?: CodeInfoSDKType;
  code_bytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: Uint8Array;
  contractInfo?: ContractInfo;
  contractState: Model[];
  contractCustomInfo?: ContractCustomInfo;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
  contract_address: Uint8Array;
  contract_info?: ContractInfoSDKType;
  contract_state: ModelSDKType[];
  contract_custom_info?: ContractCustomInfoSDKType;
}
/** Sequence id and value of a counter */
export interface Sequence {
  idKey: Uint8Array;
  value: Long;
}
/** Sequence id and value of a counter */
export interface SequenceSDKType {
  id_key: Uint8Array;
  value: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    codes: [],
    contracts: [],
    sequences: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCode(): Code {
  return {
    codeId: Long.UZERO,
    codeInfo: undefined,
    codeBytes: new Uint8Array()
  };
}
export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    return writer;
  },
  fromJSON(object: any): Code {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Code>): Code {
    const message = createBaseCode();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    return message;
  }
};
function createBaseContract(): Contract {
  return {
    contractAddress: new Uint8Array(),
    contractInfo: undefined,
    contractState: [],
    contractCustomInfo: undefined
  };
}
export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress.length !== 0) {
      writer.uint32(10).bytes(message.contractAddress);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.contractCustomInfo !== undefined) {
      ContractCustomInfo.encode(message.contractCustomInfo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Contract {
    return {
      contractAddress: isSet(object.contractAddress) ? bytesFromBase64(object.contractAddress) : new Uint8Array(),
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
      contractState: Array.isArray(object?.contractState) ? object.contractState.map((e: any) => Model.fromJSON(e)) : [],
      contractCustomInfo: isSet(object.contractCustomInfo) ? ContractCustomInfo.fromJSON(object.contractCustomInfo) : undefined
    };
  },
  fromPartial(object: Partial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
    message.contractCustomInfo = object.contractCustomInfo !== undefined && object.contractCustomInfo !== null ? ContractCustomInfo.fromPartial(object.contractCustomInfo) : undefined;
    return message;
  }
};
function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: Long.UZERO
  };
}
export const Sequence = {
  encode(message: Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Sequence {
    return {
      idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }
};