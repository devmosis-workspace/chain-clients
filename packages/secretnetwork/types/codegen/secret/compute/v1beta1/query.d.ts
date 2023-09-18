import { ContractInfo, ContractInfoAmino, ContractInfoSDKType } from "./types";
import { StringEvent, StringEventAmino, StringEventSDKType } from "../../../cosmos/base/abci/v1beta1/abci";
import { BinaryWriter } from "../../../binary";
export interface QuerySecretContractRequest {
    /** address is the bech32 human readable address of the contract */
    contractAddress: string;
    query: Uint8Array;
}
export interface QuerySecretContractRequestProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QuerySecretContractRequest";
    value: Uint8Array;
}
export interface QuerySecretContractRequestAmino {
    /** address is the bech32 human readable address of the contract */
    contract_address: string;
    query: Uint8Array;
}
export interface QuerySecretContractRequestAminoMsg {
    type: "/secret.compute.v1beta1.QuerySecretContractRequest";
    value: QuerySecretContractRequestAmino;
}
export interface QuerySecretContractRequestSDKType {
    contract_address: string;
    query: Uint8Array;
}
export interface QueryByLabelRequest {
    label: string;
}
export interface QueryByLabelRequestProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryByLabelRequest";
    value: Uint8Array;
}
export interface QueryByLabelRequestAmino {
    label: string;
}
export interface QueryByLabelRequestAminoMsg {
    type: "/secret.compute.v1beta1.QueryByLabelRequest";
    value: QueryByLabelRequestAmino;
}
export interface QueryByLabelRequestSDKType {
    label: string;
}
export interface QueryByContractAddressRequest {
    /** address is the bech32 human readable address of the contract */
    contractAddress: string;
}
export interface QueryByContractAddressRequestProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryByContractAddressRequest";
    value: Uint8Array;
}
export interface QueryByContractAddressRequestAmino {
    /** address is the bech32 human readable address of the contract */
    contract_address: string;
}
export interface QueryByContractAddressRequestAminoMsg {
    type: "/secret.compute.v1beta1.QueryByContractAddressRequest";
    value: QueryByContractAddressRequestAmino;
}
export interface QueryByContractAddressRequestSDKType {
    contract_address: string;
}
export interface QueryByCodeIdRequest {
    codeId: bigint;
}
export interface QueryByCodeIdRequestProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryByCodeIdRequest";
    value: Uint8Array;
}
export interface QueryByCodeIdRequestAmino {
    code_id: string;
}
export interface QueryByCodeIdRequestAminoMsg {
    type: "/secret.compute.v1beta1.QueryByCodeIdRequest";
    value: QueryByCodeIdRequestAmino;
}
export interface QueryByCodeIdRequestSDKType {
    code_id: bigint;
}
export interface QuerySecretContractResponse {
    data: Uint8Array;
}
export interface QuerySecretContractResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QuerySecretContractResponse";
    value: Uint8Array;
}
export interface QuerySecretContractResponseAmino {
    data: Uint8Array;
}
export interface QuerySecretContractResponseAminoMsg {
    type: "/secret.compute.v1beta1.QuerySecretContractResponse";
    value: QuerySecretContractResponseAmino;
}
export interface QuerySecretContractResponseSDKType {
    data: Uint8Array;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */
export interface QueryContractInfoResponse {
    /** contract_address is the bech32 human readable address of the contract */
    contractAddress: string;
    ContractInfo: ContractInfo;
}
export interface QueryContractInfoResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryContractInfoResponse";
    value: Uint8Array;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */
export interface QueryContractInfoResponseAmino {
    /** contract_address is the bech32 human readable address of the contract */
    contract_address: string;
    ContractInfo?: ContractInfoAmino;
}
export interface QueryContractInfoResponseAminoMsg {
    type: "/secret.compute.v1beta1.QueryContractInfoResponse";
    value: QueryContractInfoResponseAmino;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */
export interface QueryContractInfoResponseSDKType {
    contract_address: string;
    ContractInfo: ContractInfoSDKType;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */
export interface ContractInfoWithAddress {
    /** contract_address is the bech32 human readable address of the contract */
    contractAddress: string;
    ContractInfo: ContractInfo;
}
export interface ContractInfoWithAddressProtoMsg {
    typeUrl: "/secret.compute.v1beta1.ContractInfoWithAddress";
    value: Uint8Array;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */
export interface ContractInfoWithAddressAmino {
    /** contract_address is the bech32 human readable address of the contract */
    contract_address: string;
    ContractInfo?: ContractInfoAmino;
}
export interface ContractInfoWithAddressAminoMsg {
    type: "/secret.compute.v1beta1.ContractInfoWithAddress";
    value: ContractInfoWithAddressAmino;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */
export interface ContractInfoWithAddressSDKType {
    contract_address: string;
    ContractInfo: ContractInfoSDKType;
}
export interface QueryContractsByCodeIdResponse {
    contractInfos: ContractInfoWithAddress[];
}
export interface QueryContractsByCodeIdResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryContractsByCodeIdResponse";
    value: Uint8Array;
}
export interface QueryContractsByCodeIdResponseAmino {
    contract_infos: ContractInfoWithAddressAmino[];
}
export interface QueryContractsByCodeIdResponseAminoMsg {
    type: "/secret.compute.v1beta1.QueryContractsByCodeIdResponse";
    value: QueryContractsByCodeIdResponseAmino;
}
export interface QueryContractsByCodeIdResponseSDKType {
    contract_infos: ContractInfoWithAddressSDKType[];
}
export interface CodeInfoResponse {
    codeId: bigint;
    /** creator is the bech32 human readable address of the contract */
    creator: string;
    codeHash: string;
    source: string;
    builder: string;
}
export interface CodeInfoResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.CodeInfoResponse";
    value: Uint8Array;
}
export interface CodeInfoResponseAmino {
    code_id: string;
    /** creator is the bech32 human readable address of the contract */
    creator: string;
    code_hash: string;
    source: string;
    builder: string;
}
export interface CodeInfoResponseAminoMsg {
    type: "/secret.compute.v1beta1.CodeInfoResponse";
    value: CodeInfoResponseAmino;
}
export interface CodeInfoResponseSDKType {
    code_id: bigint;
    creator: string;
    code_hash: string;
    source: string;
    builder: string;
}
export interface QueryCodeResponse {
    codeInfo: CodeInfoResponse;
    wasm: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryCodeResponse";
    value: Uint8Array;
}
export interface QueryCodeResponseAmino {
    code_info?: CodeInfoResponseAmino;
    wasm: Uint8Array;
}
export interface QueryCodeResponseAminoMsg {
    type: "/secret.compute.v1beta1.QueryCodeResponse";
    value: QueryCodeResponseAmino;
}
export interface QueryCodeResponseSDKType {
    code_info: CodeInfoResponseSDKType;
    wasm: Uint8Array;
}
export interface QueryCodesResponse {
    codeInfos: CodeInfoResponse[];
}
export interface QueryCodesResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryCodesResponse";
    value: Uint8Array;
}
export interface QueryCodesResponseAmino {
    code_infos: CodeInfoResponseAmino[];
}
export interface QueryCodesResponseAminoMsg {
    type: "/secret.compute.v1beta1.QueryCodesResponse";
    value: QueryCodesResponseAmino;
}
export interface QueryCodesResponseSDKType {
    code_infos: CodeInfoResponseSDKType[];
}
export interface QueryContractAddressResponse {
    /** address is the bech32 human readable address of the contract */
    contractAddress: string;
}
export interface QueryContractAddressResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryContractAddressResponse";
    value: Uint8Array;
}
export interface QueryContractAddressResponseAmino {
    /** address is the bech32 human readable address of the contract */
    contract_address: string;
}
export interface QueryContractAddressResponseAminoMsg {
    type: "/secret.compute.v1beta1.QueryContractAddressResponse";
    value: QueryContractAddressResponseAmino;
}
export interface QueryContractAddressResponseSDKType {
    contract_address: string;
}
export interface QueryContractLabelResponse {
    label: string;
}
export interface QueryContractLabelResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryContractLabelResponse";
    value: Uint8Array;
}
export interface QueryContractLabelResponseAmino {
    label: string;
}
export interface QueryContractLabelResponseAminoMsg {
    type: "/secret.compute.v1beta1.QueryContractLabelResponse";
    value: QueryContractLabelResponseAmino;
}
export interface QueryContractLabelResponseSDKType {
    label: string;
}
export interface QueryCodeHashResponse {
    codeHash: string;
}
export interface QueryCodeHashResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.QueryCodeHashResponse";
    value: Uint8Array;
}
export interface QueryCodeHashResponseAmino {
    code_hash: string;
}
export interface QueryCodeHashResponseAminoMsg {
    type: "/secret.compute.v1beta1.QueryCodeHashResponse";
    value: QueryCodeHashResponseAmino;
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
export interface DecryptedAnswerProtoMsg {
    typeUrl: "/secret.compute.v1beta1.DecryptedAnswer";
    value: Uint8Array;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */
export interface DecryptedAnswerAmino {
    type: string;
    input: string;
    output_data: string;
    output_data_as_string: string;
}
export interface DecryptedAnswerAminoMsg {
    type: "/secret.compute.v1beta1.DecryptedAnswer";
    value: DecryptedAnswerAmino;
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
export interface DecryptedAnswersProtoMsg {
    typeUrl: "/secret.compute.v1beta1.DecryptedAnswers";
    value: Uint8Array;
}
export interface DecryptedAnswersAmino {
    answers: DecryptedAnswerAmino[];
    output_logs: StringEventAmino[];
    output_error: string;
    plaintext_error: string;
}
export interface DecryptedAnswersAminoMsg {
    type: "/secret.compute.v1beta1.DecryptedAnswers";
    value: DecryptedAnswersAmino;
}
export interface DecryptedAnswersSDKType {
    answers: DecryptedAnswerSDKType[];
    output_logs: StringEventSDKType[];
    output_error: string;
    plaintext_error: string;
}
export declare const QuerySecretContractRequest: {
    typeUrl: string;
    encode(message: QuerySecretContractRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySecretContractRequest;
    fromPartial(object: Partial<QuerySecretContractRequest>): QuerySecretContractRequest;
    fromAmino(object: QuerySecretContractRequestAmino): QuerySecretContractRequest;
    toAmino(message: QuerySecretContractRequest): QuerySecretContractRequestAmino;
    fromAminoMsg(object: QuerySecretContractRequestAminoMsg): QuerySecretContractRequest;
    fromProtoMsg(message: QuerySecretContractRequestProtoMsg): QuerySecretContractRequest;
    toProto(message: QuerySecretContractRequest): Uint8Array;
    toProtoMsg(message: QuerySecretContractRequest): QuerySecretContractRequestProtoMsg;
};
export declare const QueryByLabelRequest: {
    typeUrl: string;
    encode(message: QueryByLabelRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryByLabelRequest;
    fromPartial(object: Partial<QueryByLabelRequest>): QueryByLabelRequest;
    fromAmino(object: QueryByLabelRequestAmino): QueryByLabelRequest;
    toAmino(message: QueryByLabelRequest): QueryByLabelRequestAmino;
    fromAminoMsg(object: QueryByLabelRequestAminoMsg): QueryByLabelRequest;
    fromProtoMsg(message: QueryByLabelRequestProtoMsg): QueryByLabelRequest;
    toProto(message: QueryByLabelRequest): Uint8Array;
    toProtoMsg(message: QueryByLabelRequest): QueryByLabelRequestProtoMsg;
};
export declare const QueryByContractAddressRequest: {
    typeUrl: string;
    encode(message: QueryByContractAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryByContractAddressRequest;
    fromPartial(object: Partial<QueryByContractAddressRequest>): QueryByContractAddressRequest;
    fromAmino(object: QueryByContractAddressRequestAmino): QueryByContractAddressRequest;
    toAmino(message: QueryByContractAddressRequest): QueryByContractAddressRequestAmino;
    fromAminoMsg(object: QueryByContractAddressRequestAminoMsg): QueryByContractAddressRequest;
    fromProtoMsg(message: QueryByContractAddressRequestProtoMsg): QueryByContractAddressRequest;
    toProto(message: QueryByContractAddressRequest): Uint8Array;
    toProtoMsg(message: QueryByContractAddressRequest): QueryByContractAddressRequestProtoMsg;
};
export declare const QueryByCodeIdRequest: {
    typeUrl: string;
    encode(message: QueryByCodeIdRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryByCodeIdRequest;
    fromPartial(object: Partial<QueryByCodeIdRequest>): QueryByCodeIdRequest;
    fromAmino(object: QueryByCodeIdRequestAmino): QueryByCodeIdRequest;
    toAmino(message: QueryByCodeIdRequest): QueryByCodeIdRequestAmino;
    fromAminoMsg(object: QueryByCodeIdRequestAminoMsg): QueryByCodeIdRequest;
    fromProtoMsg(message: QueryByCodeIdRequestProtoMsg): QueryByCodeIdRequest;
    toProto(message: QueryByCodeIdRequest): Uint8Array;
    toProtoMsg(message: QueryByCodeIdRequest): QueryByCodeIdRequestProtoMsg;
};
export declare const QuerySecretContractResponse: {
    typeUrl: string;
    encode(message: QuerySecretContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySecretContractResponse;
    fromPartial(object: Partial<QuerySecretContractResponse>): QuerySecretContractResponse;
    fromAmino(object: QuerySecretContractResponseAmino): QuerySecretContractResponse;
    toAmino(message: QuerySecretContractResponse): QuerySecretContractResponseAmino;
    fromAminoMsg(object: QuerySecretContractResponseAminoMsg): QuerySecretContractResponse;
    fromProtoMsg(message: QuerySecretContractResponseProtoMsg): QuerySecretContractResponse;
    toProto(message: QuerySecretContractResponse): Uint8Array;
    toProtoMsg(message: QuerySecretContractResponse): QuerySecretContractResponseProtoMsg;
};
export declare const QueryContractInfoResponse: {
    typeUrl: string;
    encode(message: QueryContractInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryContractInfoResponse;
    fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse;
    fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse;
    toAmino(message: QueryContractInfoResponse): QueryContractInfoResponseAmino;
    fromAminoMsg(object: QueryContractInfoResponseAminoMsg): QueryContractInfoResponse;
    fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse;
    toProto(message: QueryContractInfoResponse): Uint8Array;
    toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg;
};
export declare const ContractInfoWithAddress: {
    typeUrl: string;
    encode(message: ContractInfoWithAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractInfoWithAddress;
    fromPartial(object: Partial<ContractInfoWithAddress>): ContractInfoWithAddress;
    fromAmino(object: ContractInfoWithAddressAmino): ContractInfoWithAddress;
    toAmino(message: ContractInfoWithAddress): ContractInfoWithAddressAmino;
    fromAminoMsg(object: ContractInfoWithAddressAminoMsg): ContractInfoWithAddress;
    fromProtoMsg(message: ContractInfoWithAddressProtoMsg): ContractInfoWithAddress;
    toProto(message: ContractInfoWithAddress): Uint8Array;
    toProtoMsg(message: ContractInfoWithAddress): ContractInfoWithAddressProtoMsg;
};
export declare const QueryContractsByCodeIdResponse: {
    typeUrl: string;
    encode(message: QueryContractsByCodeIdResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryContractsByCodeIdResponse;
    fromPartial(object: Partial<QueryContractsByCodeIdResponse>): QueryContractsByCodeIdResponse;
    fromAmino(object: QueryContractsByCodeIdResponseAmino): QueryContractsByCodeIdResponse;
    toAmino(message: QueryContractsByCodeIdResponse): QueryContractsByCodeIdResponseAmino;
    fromAminoMsg(object: QueryContractsByCodeIdResponseAminoMsg): QueryContractsByCodeIdResponse;
    fromProtoMsg(message: QueryContractsByCodeIdResponseProtoMsg): QueryContractsByCodeIdResponse;
    toProto(message: QueryContractsByCodeIdResponse): Uint8Array;
    toProtoMsg(message: QueryContractsByCodeIdResponse): QueryContractsByCodeIdResponseProtoMsg;
};
export declare const CodeInfoResponse: {
    typeUrl: string;
    encode(message: CodeInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CodeInfoResponse;
    fromPartial(object: Partial<CodeInfoResponse>): CodeInfoResponse;
    fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse;
    toAmino(message: CodeInfoResponse): CodeInfoResponseAmino;
    fromAminoMsg(object: CodeInfoResponseAminoMsg): CodeInfoResponse;
    fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse;
    toProto(message: CodeInfoResponse): Uint8Array;
    toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg;
};
export declare const QueryCodeResponse: {
    typeUrl: string;
    encode(message: QueryCodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCodeResponse;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
    fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse;
    toAmino(message: QueryCodeResponse): QueryCodeResponseAmino;
    fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse;
    fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse;
    toProto(message: QueryCodeResponse): Uint8Array;
    toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg;
};
export declare const QueryCodesResponse: {
    typeUrl: string;
    encode(message: QueryCodesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCodesResponse;
    fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse;
    fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse;
    toAmino(message: QueryCodesResponse): QueryCodesResponseAmino;
    fromAminoMsg(object: QueryCodesResponseAminoMsg): QueryCodesResponse;
    fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse;
    toProto(message: QueryCodesResponse): Uint8Array;
    toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg;
};
export declare const QueryContractAddressResponse: {
    typeUrl: string;
    encode(message: QueryContractAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryContractAddressResponse;
    fromPartial(object: Partial<QueryContractAddressResponse>): QueryContractAddressResponse;
    fromAmino(object: QueryContractAddressResponseAmino): QueryContractAddressResponse;
    toAmino(message: QueryContractAddressResponse): QueryContractAddressResponseAmino;
    fromAminoMsg(object: QueryContractAddressResponseAminoMsg): QueryContractAddressResponse;
    fromProtoMsg(message: QueryContractAddressResponseProtoMsg): QueryContractAddressResponse;
    toProto(message: QueryContractAddressResponse): Uint8Array;
    toProtoMsg(message: QueryContractAddressResponse): QueryContractAddressResponseProtoMsg;
};
export declare const QueryContractLabelResponse: {
    typeUrl: string;
    encode(message: QueryContractLabelResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryContractLabelResponse;
    fromPartial(object: Partial<QueryContractLabelResponse>): QueryContractLabelResponse;
    fromAmino(object: QueryContractLabelResponseAmino): QueryContractLabelResponse;
    toAmino(message: QueryContractLabelResponse): QueryContractLabelResponseAmino;
    fromAminoMsg(object: QueryContractLabelResponseAminoMsg): QueryContractLabelResponse;
    fromProtoMsg(message: QueryContractLabelResponseProtoMsg): QueryContractLabelResponse;
    toProto(message: QueryContractLabelResponse): Uint8Array;
    toProtoMsg(message: QueryContractLabelResponse): QueryContractLabelResponseProtoMsg;
};
export declare const QueryCodeHashResponse: {
    typeUrl: string;
    encode(message: QueryCodeHashResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCodeHashResponse;
    fromPartial(object: Partial<QueryCodeHashResponse>): QueryCodeHashResponse;
    fromAmino(object: QueryCodeHashResponseAmino): QueryCodeHashResponse;
    toAmino(message: QueryCodeHashResponse): QueryCodeHashResponseAmino;
    fromAminoMsg(object: QueryCodeHashResponseAminoMsg): QueryCodeHashResponse;
    fromProtoMsg(message: QueryCodeHashResponseProtoMsg): QueryCodeHashResponse;
    toProto(message: QueryCodeHashResponse): Uint8Array;
    toProtoMsg(message: QueryCodeHashResponse): QueryCodeHashResponseProtoMsg;
};
export declare const DecryptedAnswer: {
    typeUrl: string;
    encode(message: DecryptedAnswer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DecryptedAnswer;
    fromPartial(object: Partial<DecryptedAnswer>): DecryptedAnswer;
    fromAmino(object: DecryptedAnswerAmino): DecryptedAnswer;
    toAmino(message: DecryptedAnswer): DecryptedAnswerAmino;
    fromAminoMsg(object: DecryptedAnswerAminoMsg): DecryptedAnswer;
    fromProtoMsg(message: DecryptedAnswerProtoMsg): DecryptedAnswer;
    toProto(message: DecryptedAnswer): Uint8Array;
    toProtoMsg(message: DecryptedAnswer): DecryptedAnswerProtoMsg;
};
export declare const DecryptedAnswers: {
    typeUrl: string;
    encode(message: DecryptedAnswers, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DecryptedAnswers;
    fromPartial(object: Partial<DecryptedAnswers>): DecryptedAnswers;
    fromAmino(object: DecryptedAnswersAmino): DecryptedAnswers;
    toAmino(message: DecryptedAnswers): DecryptedAnswersAmino;
    fromAminoMsg(object: DecryptedAnswersAminoMsg): DecryptedAnswers;
    fromProtoMsg(message: DecryptedAnswersProtoMsg): DecryptedAnswers;
    toProto(message: DecryptedAnswers): Uint8Array;
    toProtoMsg(message: DecryptedAnswers): DecryptedAnswersProtoMsg;
};
