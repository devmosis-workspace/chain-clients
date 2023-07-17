import { ContractInfo, ContractInfoSDKType } from "./types";
import { StringEvent, StringEventSDKType } from "../../../cosmos/base/abci/v1beta1/abci";
import { Long } from "../../../helpers";
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
export declare const QuerySecretContractRequest: {
    encode(message: QuerySecretContractRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySecretContractRequest;
    fromPartial(object: Partial<QuerySecretContractRequest>): QuerySecretContractRequest;
};
export declare const QueryByLabelRequest: {
    encode(message: QueryByLabelRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryByLabelRequest;
    fromPartial(object: Partial<QueryByLabelRequest>): QueryByLabelRequest;
};
export declare const QueryByContractAddressRequest: {
    encode(message: QueryByContractAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryByContractAddressRequest;
    fromPartial(object: Partial<QueryByContractAddressRequest>): QueryByContractAddressRequest;
};
export declare const QueryByCodeIdRequest: {
    encode(message: QueryByCodeIdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryByCodeIdRequest;
    fromPartial(object: Partial<QueryByCodeIdRequest>): QueryByCodeIdRequest;
};
export declare const QuerySecretContractResponse: {
    encode(message: QuerySecretContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySecretContractResponse;
    fromPartial(object: Partial<QuerySecretContractResponse>): QuerySecretContractResponse;
};
export declare const QueryContractInfoResponse: {
    encode(message: QueryContractInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryContractInfoResponse;
    fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse;
};
export declare const ContractInfoWithAddress: {
    encode(message: ContractInfoWithAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractInfoWithAddress;
    fromPartial(object: Partial<ContractInfoWithAddress>): ContractInfoWithAddress;
};
export declare const QueryContractsByCodeIdResponse: {
    encode(message: QueryContractsByCodeIdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryContractsByCodeIdResponse;
    fromPartial(object: Partial<QueryContractsByCodeIdResponse>): QueryContractsByCodeIdResponse;
};
export declare const CodeInfoResponse: {
    encode(message: CodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CodeInfoResponse;
    fromPartial(object: Partial<CodeInfoResponse>): CodeInfoResponse;
};
export declare const QueryCodeResponse: {
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCodeResponse;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
};
export declare const QueryCodesResponse: {
    encode(message: QueryCodesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCodesResponse;
    fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse;
};
export declare const QueryContractAddressResponse: {
    encode(message: QueryContractAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryContractAddressResponse;
    fromPartial(object: Partial<QueryContractAddressResponse>): QueryContractAddressResponse;
};
export declare const QueryContractLabelResponse: {
    encode(message: QueryContractLabelResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryContractLabelResponse;
    fromPartial(object: Partial<QueryContractLabelResponse>): QueryContractLabelResponse;
};
export declare const QueryCodeHashResponse: {
    encode(message: QueryCodeHashResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCodeHashResponse;
    fromPartial(object: Partial<QueryCodeHashResponse>): QueryCodeHashResponse;
};
export declare const DecryptedAnswer: {
    encode(message: DecryptedAnswer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DecryptedAnswer;
    fromPartial(object: Partial<DecryptedAnswer>): DecryptedAnswer;
};
export declare const DecryptedAnswers: {
    encode(message: DecryptedAnswers, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DecryptedAnswers;
    fromPartial(object: Partial<DecryptedAnswers>): DecryptedAnswers;
};
