import { ContractInfo, ContractInfoSDKType } from "./types";
import { StringEvent, StringEventSDKType } from "../../../cosmos/base/abci/v1beta1/abci";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QuerySecretContractRequest {
  /** address is the bech32 human readable address of the contract */
  contractAddress: string;
  query: Uint8Array;
}
export interface QuerySecretContractRequestSDKType {
  contract_address: string;
  query: Uint8Array;
}
export interface QueryByLabelRequest {
  label: string;
}
export interface QueryByLabelRequestSDKType {
  label: string;
}
export interface QueryByContractAddressRequest {
  /** address is the bech32 human readable address of the contract */
  contractAddress: string;
}
export interface QueryByContractAddressRequestSDKType {
  contract_address: string;
}
export interface QueryByCodeIdRequest {
  codeId: Long;
}
export interface QueryByCodeIdRequestSDKType {
  code_id: Long;
}
export interface QuerySecretContractResponse {
  data: Uint8Array;
}
export interface QuerySecretContractResponseSDKType {
  data: Uint8Array;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */
export interface QueryContractInfoResponse {
  /** contract_address is the bech32 human readable address of the contract */
  contractAddress: string;
  ContractInfo?: ContractInfo;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */
export interface QueryContractInfoResponseSDKType {
  contract_address: string;
  ContractInfo?: ContractInfoSDKType;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */
export interface ContractInfoWithAddress {
  /** contract_address is the bech32 human readable address of the contract */
  contractAddress: string;
  ContractInfo?: ContractInfo;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */
export interface ContractInfoWithAddressSDKType {
  contract_address: string;
  ContractInfo?: ContractInfoSDKType;
}
export interface QueryContractsByCodeIdResponse {
  contractInfos: ContractInfoWithAddress[];
}
export interface QueryContractsByCodeIdResponseSDKType {
  contract_infos: ContractInfoWithAddressSDKType[];
}
export interface CodeInfoResponse {
  codeId: Long;
  /** creator is the bech32 human readable address of the contract */
  creator: string;
  codeHash: string;
  source: string;
  builder: string;
}
export interface CodeInfoResponseSDKType {
  code_id: Long;
  creator: string;
  code_hash: string;
  source: string;
  builder: string;
}
export interface QueryCodeResponse {
  codeInfo?: CodeInfoResponse;
  wasm: Uint8Array;
}
export interface QueryCodeResponseSDKType {
  code_info?: CodeInfoResponseSDKType;
  wasm: Uint8Array;
}
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
}
export interface QueryCodesResponseSDKType {
  code_infos: CodeInfoResponseSDKType[];
}
export interface QueryContractAddressResponse {
  /** address is the bech32 human readable address of the contract */
  contractAddress: string;
}
export interface QueryContractAddressResponseSDKType {
  contract_address: string;
}
export interface QueryContractLabelResponse {
  label: string;
}
export interface QueryContractLabelResponseSDKType {
  label: string;
}
export interface QueryCodeHashResponse {
  codeHash: string;
}
export interface QueryCodeHashResponseSDKType {
  code_hash: string;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */
export interface DecryptedAnswer {
  type: string;
  input: string;
  outputData: string;
  outputDataAsString: string;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */
export interface DecryptedAnswerSDKType {
  type: string;
  input: string;
  output_data: string;
  output_data_as_string: string;
}
export interface DecryptedAnswers {
  answers: DecryptedAnswer[];
  outputLogs: StringEvent[];
  outputError: string;
  plaintextError: string;
}
export interface DecryptedAnswersSDKType {
  answers: DecryptedAnswerSDKType[];
  output_logs: StringEventSDKType[];
  output_error: string;
  plaintext_error: string;
}
function createBaseQuerySecretContractRequest(): QuerySecretContractRequest {
  return {
    contractAddress: "",
    query: new Uint8Array()
  };
}
export const QuerySecretContractRequest = {
  encode(message: QuerySecretContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.query.length !== 0) {
      writer.uint32(18).bytes(message.query);
    }
    return writer;
  },
  fromJSON(object: any): QuerySecretContractRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      query: isSet(object.query) ? bytesFromBase64(object.query) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QuerySecretContractRequest>): QuerySecretContractRequest {
    const message = createBaseQuerySecretContractRequest();
    message.contractAddress = object.contractAddress ?? "";
    message.query = object.query ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryByLabelRequest(): QueryByLabelRequest {
  return {
    label: ""
  };
}
export const QueryByLabelRequest = {
  encode(message: QueryByLabelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    return writer;
  },
  fromJSON(object: any): QueryByLabelRequest {
    return {
      label: isSet(object.label) ? String(object.label) : ""
    };
  },
  fromPartial(object: Partial<QueryByLabelRequest>): QueryByLabelRequest {
    const message = createBaseQueryByLabelRequest();
    message.label = object.label ?? "";
    return message;
  }
};
function createBaseQueryByContractAddressRequest(): QueryByContractAddressRequest {
  return {
    contractAddress: ""
  };
}
export const QueryByContractAddressRequest = {
  encode(message: QueryByContractAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryByContractAddressRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryByContractAddressRequest>): QueryByContractAddressRequest {
    const message = createBaseQueryByContractAddressRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryByCodeIdRequest(): QueryByCodeIdRequest {
  return {
    codeId: Long.UZERO
  };
}
export const QueryByCodeIdRequest = {
  encode(message: QueryByCodeIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  fromJSON(object: any): QueryByCodeIdRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryByCodeIdRequest>): QueryByCodeIdRequest {
    const message = createBaseQueryByCodeIdRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }
};
function createBaseQuerySecretContractResponse(): QuerySecretContractResponse {
  return {
    data: new Uint8Array()
  };
}
export const QuerySecretContractResponse = {
  encode(message: QuerySecretContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): QuerySecretContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QuerySecretContractResponse>): QuerySecretContractResponse {
    const message = createBaseQuerySecretContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    contractAddress: "",
    ContractInfo: undefined
  };
}
export const QueryContractInfoResponse = {
  encode(message: QueryContractInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.ContractInfo !== undefined) {
      ContractInfo.encode(message.ContractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryContractInfoResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      ContractInfo: isSet(object.ContractInfo) ? ContractInfo.fromJSON(object.ContractInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.contractAddress = object.contractAddress ?? "";
    message.ContractInfo = object.ContractInfo !== undefined && object.ContractInfo !== null ? ContractInfo.fromPartial(object.ContractInfo) : undefined;
    return message;
  }
};
function createBaseContractInfoWithAddress(): ContractInfoWithAddress {
  return {
    contractAddress: "",
    ContractInfo: undefined
  };
}
export const ContractInfoWithAddress = {
  encode(message: ContractInfoWithAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.ContractInfo !== undefined) {
      ContractInfo.encode(message.ContractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ContractInfoWithAddress {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      ContractInfo: isSet(object.ContractInfo) ? ContractInfo.fromJSON(object.ContractInfo) : undefined
    };
  },
  fromPartial(object: Partial<ContractInfoWithAddress>): ContractInfoWithAddress {
    const message = createBaseContractInfoWithAddress();
    message.contractAddress = object.contractAddress ?? "";
    message.ContractInfo = object.ContractInfo !== undefined && object.ContractInfo !== null ? ContractInfo.fromPartial(object.ContractInfo) : undefined;
    return message;
  }
};
function createBaseQueryContractsByCodeIdResponse(): QueryContractsByCodeIdResponse {
  return {
    contractInfos: []
  };
}
export const QueryContractsByCodeIdResponse = {
  encode(message: QueryContractsByCodeIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractInfos) {
      ContractInfoWithAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryContractsByCodeIdResponse {
    return {
      contractInfos: Array.isArray(object?.contractInfos) ? object.contractInfos.map((e: any) => ContractInfoWithAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryContractsByCodeIdResponse>): QueryContractsByCodeIdResponse {
    const message = createBaseQueryContractsByCodeIdResponse();
    message.contractInfos = object.contractInfos?.map(e => ContractInfoWithAddress.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: Long.UZERO,
    creator: "",
    codeHash: "",
    source: "",
    builder: ""
  };
}
export const CodeInfoResponse = {
  encode(message: CodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.codeHash !== "") {
      writer.uint32(26).string(message.codeHash);
    }
    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(42).string(message.builder);
    }
    return writer;
  },
  fromJSON(object: any): CodeInfoResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      codeHash: isSet(object.codeHash) ? String(object.codeHash) : "",
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : ""
    };
  },
  fromPartial(object: Partial<CodeInfoResponse>): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.codeHash = object.codeHash ?? "";
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    return message;
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    wasm: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.wasm.length !== 0) {
      writer.uint32(18).bytes(message.wasm);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeResponse {
    return {
      codeInfo: isSet(object.codeInfo) ? CodeInfoResponse.fromJSON(object.codeInfo) : undefined,
      wasm: isSet(object.wasm) ? bytesFromBase64(object.wasm) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
    message.wasm = object.wasm ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: []
  };
}
export const QueryCodesResponse = {
  encode(message: QueryCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.codeInfos) ? object.codeInfos.map((e: any) => CodeInfoResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryContractAddressResponse(): QueryContractAddressResponse {
  return {
    contractAddress: ""
  };
}
export const QueryContractAddressResponse = {
  encode(message: QueryContractAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryContractAddressResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryContractAddressResponse>): QueryContractAddressResponse {
    const message = createBaseQueryContractAddressResponse();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryContractLabelResponse(): QueryContractLabelResponse {
  return {
    label: ""
  };
}
export const QueryContractLabelResponse = {
  encode(message: QueryContractLabelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    return writer;
  },
  fromJSON(object: any): QueryContractLabelResponse {
    return {
      label: isSet(object.label) ? String(object.label) : ""
    };
  },
  fromPartial(object: Partial<QueryContractLabelResponse>): QueryContractLabelResponse {
    const message = createBaseQueryContractLabelResponse();
    message.label = object.label ?? "";
    return message;
  }
};
function createBaseQueryCodeHashResponse(): QueryCodeHashResponse {
  return {
    codeHash: ""
  };
}
export const QueryCodeHashResponse = {
  encode(message: QueryCodeHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeHash !== "") {
      writer.uint32(10).string(message.codeHash);
    }
    return writer;
  },
  fromJSON(object: any): QueryCodeHashResponse {
    return {
      codeHash: isSet(object.codeHash) ? String(object.codeHash) : ""
    };
  },
  fromPartial(object: Partial<QueryCodeHashResponse>): QueryCodeHashResponse {
    const message = createBaseQueryCodeHashResponse();
    message.codeHash = object.codeHash ?? "";
    return message;
  }
};
function createBaseDecryptedAnswer(): DecryptedAnswer {
  return {
    type: "",
    input: "",
    outputData: "",
    outputDataAsString: ""
  };
}
export const DecryptedAnswer = {
  encode(message: DecryptedAnswer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.outputData !== "") {
      writer.uint32(26).string(message.outputData);
    }
    if (message.outputDataAsString !== "") {
      writer.uint32(34).string(message.outputDataAsString);
    }
    return writer;
  },
  fromJSON(object: any): DecryptedAnswer {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      input: isSet(object.input) ? String(object.input) : "",
      outputData: isSet(object.outputData) ? String(object.outputData) : "",
      outputDataAsString: isSet(object.outputDataAsString) ? String(object.outputDataAsString) : ""
    };
  },
  fromPartial(object: Partial<DecryptedAnswer>): DecryptedAnswer {
    const message = createBaseDecryptedAnswer();
    message.type = object.type ?? "";
    message.input = object.input ?? "";
    message.outputData = object.outputData ?? "";
    message.outputDataAsString = object.outputDataAsString ?? "";
    return message;
  }
};
function createBaseDecryptedAnswers(): DecryptedAnswers {
  return {
    answers: [],
    outputLogs: [],
    outputError: "",
    plaintextError: ""
  };
}
export const DecryptedAnswers = {
  encode(message: DecryptedAnswers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.answers) {
      DecryptedAnswer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputLogs) {
      StringEvent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.outputError !== "") {
      writer.uint32(26).string(message.outputError);
    }
    if (message.plaintextError !== "") {
      writer.uint32(34).string(message.plaintextError);
    }
    return writer;
  },
  fromJSON(object: any): DecryptedAnswers {
    return {
      answers: Array.isArray(object?.answers) ? object.answers.map((e: any) => DecryptedAnswer.fromJSON(e)) : [],
      outputLogs: Array.isArray(object?.outputLogs) ? object.outputLogs.map((e: any) => StringEvent.fromJSON(e)) : [],
      outputError: isSet(object.outputError) ? String(object.outputError) : "",
      plaintextError: isSet(object.plaintextError) ? String(object.plaintextError) : ""
    };
  },
  fromPartial(object: Partial<DecryptedAnswers>): DecryptedAnswers {
    const message = createBaseDecryptedAnswers();
    message.answers = object.answers?.map(e => DecryptedAnswer.fromPartial(e)) || [];
    message.outputLogs = object.outputLogs?.map(e => StringEvent.fromPartial(e)) || [];
    message.outputError = object.outputError ?? "";
    message.plaintextError = object.plaintextError ?? "";
    return message;
  }
};