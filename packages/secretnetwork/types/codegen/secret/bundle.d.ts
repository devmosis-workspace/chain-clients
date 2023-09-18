import * as _0 from "./compute/v1beta1/genesis";
import * as _1 from "./compute/v1beta1/msg";
import * as _2 from "./compute/v1beta1/query";
import * as _3 from "./compute/v1beta1/types";
import * as _4 from "./emergencybutton/v1beta1/genesis";
import * as _5 from "./emergencybutton/v1beta1/params";
import * as _6 from "./emergencybutton/v1beta1/query";
import * as _7 from "./emergencybutton/v1beta1/tx";
import * as _8 from "./intertx/v1beta1/query";
import * as _9 from "./intertx/v1beta1/tx";
import * as _10 from "./registration/v1beta1/genesis";
import * as _11 from "./registration/v1beta1/msg";
import * as _12 from "./registration/v1beta1/query";
import * as _13 from "./registration/v1beta1/types";
import * as _14 from "./registration/v1beta1/remote_attestation/types";
import * as _165 from "./compute/v1beta1/query.lcd";
import * as _166 from "./emergencybutton/v1beta1/query.lcd";
import * as _167 from "./intertx/v1beta1/query.lcd";
import * as _168 from "./registration/v1beta1/query.lcd";
import * as _169 from "./compute/v1beta1/query.rpc.Query";
import * as _170 from "./emergencybutton/v1beta1/query.rpc.Query";
import * as _171 from "./intertx/v1beta1/query.rpc.Query";
import * as _172 from "./registration/v1beta1/query.rpc.Query";
import * as _173 from "./compute/v1beta1/msg.rpc.msg";
import * as _174 from "./emergencybutton/v1beta1/tx.rpc.msg";
import * as _175 from "./intertx/v1beta1/tx.rpc.msg";
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            MsgClientImpl: typeof _173.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _2.QueryByContractAddressRequest): Promise<_2.QueryContractInfoResponse>;
                contractsByCodeId(request: _2.QueryByCodeIdRequest): Promise<_2.QueryContractsByCodeIdResponse>;
                querySecretContract(request: _2.QuerySecretContractRequest): Promise<_2.QuerySecretContractResponse>;
                code(request: _2.QueryByCodeIdRequest): Promise<_2.QueryCodeResponse>;
                codes(request?: google.protobuf.Empty): Promise<_2.QueryCodesResponse>;
                codeHashByContractAddress(request: _2.QueryByContractAddressRequest): Promise<_2.QueryCodeHashResponse>;
                codeHashByCodeId(request: _2.QueryByCodeIdRequest): Promise<_2.QueryCodeHashResponse>;
                labelByAddress(request: _2.QueryByContractAddressRequest): Promise<_2.QueryContractLabelResponse>;
                addressByLabel(request: _2.QueryByLabelRequest): Promise<_2.QueryContractAddressResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _1.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _1.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _1.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _1.MsgStoreCode): {
                        typeUrl: string;
                        value: _1.MsgStoreCode;
                    };
                    instantiateContract(value: _1.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _1.MsgInstantiateContract;
                    };
                    executeContract(value: _1.MsgExecuteContract): {
                        typeUrl: string;
                        value: _1.MsgExecuteContract;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _1.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _1.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _1.MsgExecuteContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _1.MsgStoreCode): {
                        typeUrl: string;
                        value: _1.MsgStoreCode;
                    };
                    instantiateContract(value: _1.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _1.MsgInstantiateContract;
                    };
                    executeContract(value: _1.MsgExecuteContract): {
                        typeUrl: string;
                        value: _1.MsgExecuteContract;
                    };
                };
            };
            AminoConverter: {
                "/secret.compute.v1beta1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _1.MsgStoreCode) => _1.MsgStoreCodeAmino;
                    fromAmino: (object: _1.MsgStoreCodeAmino) => _1.MsgStoreCode;
                };
                "/secret.compute.v1beta1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _1.MsgInstantiateContract) => _1.MsgInstantiateContractAmino;
                    fromAmino: (object: _1.MsgInstantiateContractAmino) => _1.MsgInstantiateContract;
                };
                "/secret.compute.v1beta1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _1.MsgExecuteContract) => _1.MsgExecuteContractAmino;
                    fromAmino: (object: _1.MsgExecuteContractAmino) => _1.MsgExecuteContract;
                };
            };
            accessTypeFromJSON(object: any): _3.AccessType;
            accessTypeToJSON(object: _3.AccessType): string;
            AccessType: typeof _3.AccessType;
            AccessTypeSDKType: typeof _3.AccessType;
            AccessTypeAmino: typeof _3.AccessType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _3.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.AccessTypeParam;
                fromPartial(object: Partial<_3.AccessTypeParam>): _3.AccessTypeParam;
                fromAmino(object: _3.AccessTypeParamAmino): _3.AccessTypeParam;
                toAmino(message: _3.AccessTypeParam): _3.AccessTypeParamAmino;
                fromAminoMsg(object: _3.AccessTypeParamAminoMsg): _3.AccessTypeParam;
                fromProtoMsg(message: _3.AccessTypeParamProtoMsg): _3.AccessTypeParam;
                toProto(message: _3.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _3.AccessTypeParam): _3.AccessTypeParamProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _3.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.CodeInfo;
                fromPartial(object: Partial<_3.CodeInfo>): _3.CodeInfo;
                fromAmino(object: _3.CodeInfoAmino): _3.CodeInfo;
                toAmino(message: _3.CodeInfo): _3.CodeInfoAmino;
                fromAminoMsg(object: _3.CodeInfoAminoMsg): _3.CodeInfo;
                fromProtoMsg(message: _3.CodeInfoProtoMsg): _3.CodeInfo;
                toProto(message: _3.CodeInfo): Uint8Array;
                toProtoMsg(message: _3.CodeInfo): _3.CodeInfoProtoMsg;
            };
            ContractCustomInfo: {
                typeUrl: string;
                encode(message: _3.ContractCustomInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.ContractCustomInfo;
                fromPartial(object: Partial<_3.ContractCustomInfo>): _3.ContractCustomInfo;
                fromAmino(object: _3.ContractCustomInfoAmino): _3.ContractCustomInfo;
                toAmino(message: _3.ContractCustomInfo): _3.ContractCustomInfoAmino;
                fromAminoMsg(object: _3.ContractCustomInfoAminoMsg): _3.ContractCustomInfo;
                fromProtoMsg(message: _3.ContractCustomInfoProtoMsg): _3.ContractCustomInfo;
                toProto(message: _3.ContractCustomInfo): Uint8Array;
                toProtoMsg(message: _3.ContractCustomInfo): _3.ContractCustomInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _3.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.ContractInfo;
                fromPartial(object: Partial<_3.ContractInfo>): _3.ContractInfo;
                fromAmino(object: _3.ContractInfoAmino): _3.ContractInfo;
                toAmino(message: _3.ContractInfo): _3.ContractInfoAmino;
                fromAminoMsg(object: _3.ContractInfoAminoMsg): _3.ContractInfo;
                fromProtoMsg(message: _3.ContractInfoProtoMsg): _3.ContractInfo;
                toProto(message: _3.ContractInfo): Uint8Array;
                toProtoMsg(message: _3.ContractInfo): _3.ContractInfoProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _3.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.AbsoluteTxPosition;
                fromPartial(object: Partial<_3.AbsoluteTxPosition>): _3.AbsoluteTxPosition;
                fromAmino(object: _3.AbsoluteTxPositionAmino): _3.AbsoluteTxPosition;
                toAmino(message: _3.AbsoluteTxPosition): _3.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _3.AbsoluteTxPositionAminoMsg): _3.AbsoluteTxPosition;
                fromProtoMsg(message: _3.AbsoluteTxPositionProtoMsg): _3.AbsoluteTxPosition;
                toProto(message: _3.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _3.AbsoluteTxPosition): _3.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _3.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.Model;
                fromPartial(object: Partial<_3.Model>): _3.Model;
                fromAmino(object: _3.ModelAmino): _3.Model;
                toAmino(message: _3.Model): _3.ModelAmino;
                fromAminoMsg(object: _3.ModelAminoMsg): _3.Model;
                fromProtoMsg(message: _3.ModelProtoMsg): _3.Model;
                toProto(message: _3.Model): Uint8Array;
                toProtoMsg(message: _3.Model): _3.ModelProtoMsg;
            };
            QuerySecretContractRequest: {
                typeUrl: string;
                encode(message: _2.QuerySecretContractRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QuerySecretContractRequest;
                fromPartial(object: Partial<_2.QuerySecretContractRequest>): _2.QuerySecretContractRequest;
                fromAmino(object: _2.QuerySecretContractRequestAmino): _2.QuerySecretContractRequest;
                toAmino(message: _2.QuerySecretContractRequest): _2.QuerySecretContractRequestAmino;
                fromAminoMsg(object: _2.QuerySecretContractRequestAminoMsg): _2.QuerySecretContractRequest;
                fromProtoMsg(message: _2.QuerySecretContractRequestProtoMsg): _2.QuerySecretContractRequest;
                toProto(message: _2.QuerySecretContractRequest): Uint8Array;
                toProtoMsg(message: _2.QuerySecretContractRequest): _2.QuerySecretContractRequestProtoMsg;
            };
            QueryByLabelRequest: {
                typeUrl: string;
                encode(message: _2.QueryByLabelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryByLabelRequest;
                fromPartial(object: Partial<_2.QueryByLabelRequest>): _2.QueryByLabelRequest;
                fromAmino(object: _2.QueryByLabelRequestAmino): _2.QueryByLabelRequest;
                toAmino(message: _2.QueryByLabelRequest): _2.QueryByLabelRequestAmino;
                fromAminoMsg(object: _2.QueryByLabelRequestAminoMsg): _2.QueryByLabelRequest;
                fromProtoMsg(message: _2.QueryByLabelRequestProtoMsg): _2.QueryByLabelRequest;
                toProto(message: _2.QueryByLabelRequest): Uint8Array;
                toProtoMsg(message: _2.QueryByLabelRequest): _2.QueryByLabelRequestProtoMsg;
            };
            QueryByContractAddressRequest: {
                typeUrl: string;
                encode(message: _2.QueryByContractAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryByContractAddressRequest;
                fromPartial(object: Partial<_2.QueryByContractAddressRequest>): _2.QueryByContractAddressRequest;
                fromAmino(object: _2.QueryByContractAddressRequestAmino): _2.QueryByContractAddressRequest;
                toAmino(message: _2.QueryByContractAddressRequest): _2.QueryByContractAddressRequestAmino;
                fromAminoMsg(object: _2.QueryByContractAddressRequestAminoMsg): _2.QueryByContractAddressRequest;
                fromProtoMsg(message: _2.QueryByContractAddressRequestProtoMsg): _2.QueryByContractAddressRequest;
                toProto(message: _2.QueryByContractAddressRequest): Uint8Array;
                toProtoMsg(message: _2.QueryByContractAddressRequest): _2.QueryByContractAddressRequestProtoMsg;
            };
            QueryByCodeIdRequest: {
                typeUrl: string;
                encode(message: _2.QueryByCodeIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryByCodeIdRequest;
                fromPartial(object: Partial<_2.QueryByCodeIdRequest>): _2.QueryByCodeIdRequest;
                fromAmino(object: _2.QueryByCodeIdRequestAmino): _2.QueryByCodeIdRequest;
                toAmino(message: _2.QueryByCodeIdRequest): _2.QueryByCodeIdRequestAmino;
                fromAminoMsg(object: _2.QueryByCodeIdRequestAminoMsg): _2.QueryByCodeIdRequest;
                fromProtoMsg(message: _2.QueryByCodeIdRequestProtoMsg): _2.QueryByCodeIdRequest;
                toProto(message: _2.QueryByCodeIdRequest): Uint8Array;
                toProtoMsg(message: _2.QueryByCodeIdRequest): _2.QueryByCodeIdRequestProtoMsg;
            };
            QuerySecretContractResponse: {
                typeUrl: string;
                encode(message: _2.QuerySecretContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QuerySecretContractResponse;
                fromPartial(object: Partial<_2.QuerySecretContractResponse>): _2.QuerySecretContractResponse;
                fromAmino(object: _2.QuerySecretContractResponseAmino): _2.QuerySecretContractResponse;
                toAmino(message: _2.QuerySecretContractResponse): _2.QuerySecretContractResponseAmino;
                fromAminoMsg(object: _2.QuerySecretContractResponseAminoMsg): _2.QuerySecretContractResponse;
                fromProtoMsg(message: _2.QuerySecretContractResponseProtoMsg): _2.QuerySecretContractResponse;
                toProto(message: _2.QuerySecretContractResponse): Uint8Array;
                toProtoMsg(message: _2.QuerySecretContractResponse): _2.QuerySecretContractResponseProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _2.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryContractInfoResponse;
                fromPartial(object: Partial<_2.QueryContractInfoResponse>): _2.QueryContractInfoResponse;
                fromAmino(object: _2.QueryContractInfoResponseAmino): _2.QueryContractInfoResponse;
                toAmino(message: _2.QueryContractInfoResponse): _2.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _2.QueryContractInfoResponseAminoMsg): _2.QueryContractInfoResponse;
                fromProtoMsg(message: _2.QueryContractInfoResponseProtoMsg): _2.QueryContractInfoResponse;
                toProto(message: _2.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _2.QueryContractInfoResponse): _2.QueryContractInfoResponseProtoMsg;
            };
            ContractInfoWithAddress: {
                typeUrl: string;
                encode(message: _2.ContractInfoWithAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.ContractInfoWithAddress;
                fromPartial(object: Partial<_2.ContractInfoWithAddress>): _2.ContractInfoWithAddress;
                fromAmino(object: _2.ContractInfoWithAddressAmino): _2.ContractInfoWithAddress;
                toAmino(message: _2.ContractInfoWithAddress): _2.ContractInfoWithAddressAmino;
                fromAminoMsg(object: _2.ContractInfoWithAddressAminoMsg): _2.ContractInfoWithAddress;
                fromProtoMsg(message: _2.ContractInfoWithAddressProtoMsg): _2.ContractInfoWithAddress;
                toProto(message: _2.ContractInfoWithAddress): Uint8Array;
                toProtoMsg(message: _2.ContractInfoWithAddress): _2.ContractInfoWithAddressProtoMsg;
            };
            QueryContractsByCodeIdResponse: {
                typeUrl: string;
                encode(message: _2.QueryContractsByCodeIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryContractsByCodeIdResponse;
                fromPartial(object: Partial<_2.QueryContractsByCodeIdResponse>): _2.QueryContractsByCodeIdResponse;
                fromAmino(object: _2.QueryContractsByCodeIdResponseAmino): _2.QueryContractsByCodeIdResponse;
                toAmino(message: _2.QueryContractsByCodeIdResponse): _2.QueryContractsByCodeIdResponseAmino;
                fromAminoMsg(object: _2.QueryContractsByCodeIdResponseAminoMsg): _2.QueryContractsByCodeIdResponse;
                fromProtoMsg(message: _2.QueryContractsByCodeIdResponseProtoMsg): _2.QueryContractsByCodeIdResponse;
                toProto(message: _2.QueryContractsByCodeIdResponse): Uint8Array;
                toProtoMsg(message: _2.QueryContractsByCodeIdResponse): _2.QueryContractsByCodeIdResponseProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _2.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.CodeInfoResponse;
                fromPartial(object: Partial<_2.CodeInfoResponse>): _2.CodeInfoResponse;
                fromAmino(object: _2.CodeInfoResponseAmino): _2.CodeInfoResponse;
                toAmino(message: _2.CodeInfoResponse): _2.CodeInfoResponseAmino;
                fromAminoMsg(object: _2.CodeInfoResponseAminoMsg): _2.CodeInfoResponse;
                fromProtoMsg(message: _2.CodeInfoResponseProtoMsg): _2.CodeInfoResponse;
                toProto(message: _2.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _2.CodeInfoResponse): _2.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _2.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryCodeResponse;
                fromPartial(object: Partial<_2.QueryCodeResponse>): _2.QueryCodeResponse;
                fromAmino(object: _2.QueryCodeResponseAmino): _2.QueryCodeResponse;
                toAmino(message: _2.QueryCodeResponse): _2.QueryCodeResponseAmino;
                fromAminoMsg(object: _2.QueryCodeResponseAminoMsg): _2.QueryCodeResponse;
                fromProtoMsg(message: _2.QueryCodeResponseProtoMsg): _2.QueryCodeResponse;
                toProto(message: _2.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _2.QueryCodeResponse): _2.QueryCodeResponseProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _2.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryCodesResponse;
                fromPartial(object: Partial<_2.QueryCodesResponse>): _2.QueryCodesResponse;
                fromAmino(object: _2.QueryCodesResponseAmino): _2.QueryCodesResponse;
                toAmino(message: _2.QueryCodesResponse): _2.QueryCodesResponseAmino;
                fromAminoMsg(object: _2.QueryCodesResponseAminoMsg): _2.QueryCodesResponse;
                fromProtoMsg(message: _2.QueryCodesResponseProtoMsg): _2.QueryCodesResponse;
                toProto(message: _2.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _2.QueryCodesResponse): _2.QueryCodesResponseProtoMsg;
            };
            QueryContractAddressResponse: {
                typeUrl: string;
                encode(message: _2.QueryContractAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryContractAddressResponse;
                fromPartial(object: Partial<_2.QueryContractAddressResponse>): _2.QueryContractAddressResponse;
                fromAmino(object: _2.QueryContractAddressResponseAmino): _2.QueryContractAddressResponse;
                toAmino(message: _2.QueryContractAddressResponse): _2.QueryContractAddressResponseAmino;
                fromAminoMsg(object: _2.QueryContractAddressResponseAminoMsg): _2.QueryContractAddressResponse;
                fromProtoMsg(message: _2.QueryContractAddressResponseProtoMsg): _2.QueryContractAddressResponse;
                toProto(message: _2.QueryContractAddressResponse): Uint8Array;
                toProtoMsg(message: _2.QueryContractAddressResponse): _2.QueryContractAddressResponseProtoMsg;
            };
            QueryContractLabelResponse: {
                typeUrl: string;
                encode(message: _2.QueryContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryContractLabelResponse;
                fromPartial(object: Partial<_2.QueryContractLabelResponse>): _2.QueryContractLabelResponse;
                fromAmino(object: _2.QueryContractLabelResponseAmino): _2.QueryContractLabelResponse;
                toAmino(message: _2.QueryContractLabelResponse): _2.QueryContractLabelResponseAmino;
                fromAminoMsg(object: _2.QueryContractLabelResponseAminoMsg): _2.QueryContractLabelResponse;
                fromProtoMsg(message: _2.QueryContractLabelResponseProtoMsg): _2.QueryContractLabelResponse;
                toProto(message: _2.QueryContractLabelResponse): Uint8Array;
                toProtoMsg(message: _2.QueryContractLabelResponse): _2.QueryContractLabelResponseProtoMsg;
            };
            QueryCodeHashResponse: {
                typeUrl: string;
                encode(message: _2.QueryCodeHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryCodeHashResponse;
                fromPartial(object: Partial<_2.QueryCodeHashResponse>): _2.QueryCodeHashResponse;
                fromAmino(object: _2.QueryCodeHashResponseAmino): _2.QueryCodeHashResponse;
                toAmino(message: _2.QueryCodeHashResponse): _2.QueryCodeHashResponseAmino;
                fromAminoMsg(object: _2.QueryCodeHashResponseAminoMsg): _2.QueryCodeHashResponse;
                fromProtoMsg(message: _2.QueryCodeHashResponseProtoMsg): _2.QueryCodeHashResponse;
                toProto(message: _2.QueryCodeHashResponse): Uint8Array;
                toProtoMsg(message: _2.QueryCodeHashResponse): _2.QueryCodeHashResponseProtoMsg;
            };
            DecryptedAnswer: {
                typeUrl: string;
                encode(message: _2.DecryptedAnswer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.DecryptedAnswer;
                fromPartial(object: Partial<_2.DecryptedAnswer>): _2.DecryptedAnswer;
                fromAmino(object: _2.DecryptedAnswerAmino): _2.DecryptedAnswer;
                toAmino(message: _2.DecryptedAnswer): _2.DecryptedAnswerAmino;
                fromAminoMsg(object: _2.DecryptedAnswerAminoMsg): _2.DecryptedAnswer;
                fromProtoMsg(message: _2.DecryptedAnswerProtoMsg): _2.DecryptedAnswer;
                toProto(message: _2.DecryptedAnswer): Uint8Array;
                toProtoMsg(message: _2.DecryptedAnswer): _2.DecryptedAnswerProtoMsg;
            };
            DecryptedAnswers: {
                typeUrl: string;
                encode(message: _2.DecryptedAnswers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.DecryptedAnswers;
                fromPartial(object: Partial<_2.DecryptedAnswers>): _2.DecryptedAnswers;
                fromAmino(object: _2.DecryptedAnswersAmino): _2.DecryptedAnswers;
                toAmino(message: _2.DecryptedAnswers): _2.DecryptedAnswersAmino;
                fromAminoMsg(object: _2.DecryptedAnswersAminoMsg): _2.DecryptedAnswers;
                fromProtoMsg(message: _2.DecryptedAnswersProtoMsg): _2.DecryptedAnswers;
                toProto(message: _2.DecryptedAnswers): Uint8Array;
                toProtoMsg(message: _2.DecryptedAnswers): _2.DecryptedAnswersProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _1.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgStoreCode;
                fromPartial(object: Partial<_1.MsgStoreCode>): _1.MsgStoreCode;
                fromAmino(object: _1.MsgStoreCodeAmino): _1.MsgStoreCode;
                toAmino(message: _1.MsgStoreCode): _1.MsgStoreCodeAmino;
                fromAminoMsg(object: _1.MsgStoreCodeAminoMsg): _1.MsgStoreCode;
                fromProtoMsg(message: _1.MsgStoreCodeProtoMsg): _1.MsgStoreCode;
                toProto(message: _1.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _1.MsgStoreCode): _1.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _1.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgStoreCodeResponse;
                fromPartial(object: Partial<_1.MsgStoreCodeResponse>): _1.MsgStoreCodeResponse;
                fromAmino(object: _1.MsgStoreCodeResponseAmino): _1.MsgStoreCodeResponse;
                toAmino(message: _1.MsgStoreCodeResponse): _1.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _1.MsgStoreCodeResponseAminoMsg): _1.MsgStoreCodeResponse;
                fromProtoMsg(message: _1.MsgStoreCodeResponseProtoMsg): _1.MsgStoreCodeResponse;
                toProto(message: _1.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _1.MsgStoreCodeResponse): _1.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _1.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgInstantiateContract;
                fromPartial(object: Partial<_1.MsgInstantiateContract>): _1.MsgInstantiateContract;
                fromAmino(object: _1.MsgInstantiateContractAmino): _1.MsgInstantiateContract;
                toAmino(message: _1.MsgInstantiateContract): _1.MsgInstantiateContractAmino;
                fromAminoMsg(object: _1.MsgInstantiateContractAminoMsg): _1.MsgInstantiateContract;
                fromProtoMsg(message: _1.MsgInstantiateContractProtoMsg): _1.MsgInstantiateContract;
                toProto(message: _1.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _1.MsgInstantiateContract): _1.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _1.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_1.MsgInstantiateContractResponse>): _1.MsgInstantiateContractResponse;
                fromAmino(object: _1.MsgInstantiateContractResponseAmino): _1.MsgInstantiateContractResponse;
                toAmino(message: _1.MsgInstantiateContractResponse): _1.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _1.MsgInstantiateContractResponseAminoMsg): _1.MsgInstantiateContractResponse;
                fromProtoMsg(message: _1.MsgInstantiateContractResponseProtoMsg): _1.MsgInstantiateContractResponse;
                toProto(message: _1.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _1.MsgInstantiateContractResponse): _1.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _1.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgExecuteContract;
                fromPartial(object: Partial<_1.MsgExecuteContract>): _1.MsgExecuteContract;
                fromAmino(object: _1.MsgExecuteContractAmino): _1.MsgExecuteContract;
                toAmino(message: _1.MsgExecuteContract): _1.MsgExecuteContractAmino;
                fromAminoMsg(object: _1.MsgExecuteContractAminoMsg): _1.MsgExecuteContract;
                fromProtoMsg(message: _1.MsgExecuteContractProtoMsg): _1.MsgExecuteContract;
                toProto(message: _1.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _1.MsgExecuteContract): _1.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _1.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgExecuteContractResponse;
                fromPartial(object: Partial<_1.MsgExecuteContractResponse>): _1.MsgExecuteContractResponse;
                fromAmino(object: _1.MsgExecuteContractResponseAmino): _1.MsgExecuteContractResponse;
                toAmino(message: _1.MsgExecuteContractResponse): _1.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _1.MsgExecuteContractResponseAminoMsg): _1.MsgExecuteContractResponse;
                fromProtoMsg(message: _1.MsgExecuteContractResponseProtoMsg): _1.MsgExecuteContractResponse;
                toProto(message: _1.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _1.MsgExecuteContractResponse): _1.MsgExecuteContractResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _0.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GenesisState;
                fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
                fromAmino(object: _0.GenesisStateAmino): _0.GenesisState;
                toAmino(message: _0.GenesisState): _0.GenesisStateAmino;
                fromAminoMsg(object: _0.GenesisStateAminoMsg): _0.GenesisState;
                fromProtoMsg(message: _0.GenesisStateProtoMsg): _0.GenesisState;
                toProto(message: _0.GenesisState): Uint8Array;
                toProtoMsg(message: _0.GenesisState): _0.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _0.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Code;
                fromPartial(object: Partial<_0.Code>): _0.Code;
                fromAmino(object: _0.CodeAmino): _0.Code;
                toAmino(message: _0.Code): _0.CodeAmino;
                fromAminoMsg(object: _0.CodeAminoMsg): _0.Code;
                fromProtoMsg(message: _0.CodeProtoMsg): _0.Code;
                toProto(message: _0.Code): Uint8Array;
                toProtoMsg(message: _0.Code): _0.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _0.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Contract;
                fromPartial(object: Partial<_0.Contract>): _0.Contract;
                fromAmino(object: _0.ContractAmino): _0.Contract;
                toAmino(message: _0.Contract): _0.ContractAmino;
                fromAminoMsg(object: _0.ContractAminoMsg): _0.Contract;
                fromProtoMsg(message: _0.ContractProtoMsg): _0.Contract;
                toProto(message: _0.Contract): Uint8Array;
                toProtoMsg(message: _0.Contract): _0.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _0.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Sequence;
                fromPartial(object: Partial<_0.Sequence>): _0.Sequence;
                fromAmino(object: _0.SequenceAmino): _0.Sequence;
                toAmino(message: _0.Sequence): _0.SequenceAmino;
                fromAminoMsg(object: _0.SequenceAminoMsg): _0.Sequence;
                fromProtoMsg(message: _0.SequenceProtoMsg): _0.Sequence;
                toProto(message: _0.Sequence): Uint8Array;
                toProtoMsg(message: _0.Sequence): _0.SequenceProtoMsg;
            };
        };
    }
    namespace emergencybutton {
        const v1beta1: {
            MsgClientImpl: typeof _174.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _6.ParamsRequest): Promise<_6.ParamsResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    toggleIbcSwitch(value: _7.MsgToggleIbcSwitch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    toggleIbcSwitch(value: _7.MsgToggleIbcSwitch): {
                        typeUrl: string;
                        value: _7.MsgToggleIbcSwitch;
                    };
                };
                fromJSON: {
                    toggleIbcSwitch(value: any): {
                        typeUrl: string;
                        value: _7.MsgToggleIbcSwitch;
                    };
                };
                fromPartial: {
                    toggleIbcSwitch(value: _7.MsgToggleIbcSwitch): {
                        typeUrl: string;
                        value: _7.MsgToggleIbcSwitch;
                    };
                };
            };
            AminoConverter: {
                "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch": {
                    aminoType: string;
                    toAmino: (message: _7.MsgToggleIbcSwitch) => _7.MsgToggleIbcSwitchAmino;
                    fromAmino: (object: _7.MsgToggleIbcSwitchAmino) => _7.MsgToggleIbcSwitch;
                };
            };
            MsgToggleIbcSwitch: {
                typeUrl: string;
                encode(message: _7.MsgToggleIbcSwitch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgToggleIbcSwitch;
                fromPartial(object: Partial<_7.MsgToggleIbcSwitch>): _7.MsgToggleIbcSwitch;
                fromAmino(object: _7.MsgToggleIbcSwitchAmino): _7.MsgToggleIbcSwitch;
                toAmino(message: _7.MsgToggleIbcSwitch): _7.MsgToggleIbcSwitchAmino;
                fromAminoMsg(object: _7.MsgToggleIbcSwitchAminoMsg): _7.MsgToggleIbcSwitch;
                fromProtoMsg(message: _7.MsgToggleIbcSwitchProtoMsg): _7.MsgToggleIbcSwitch;
                toProto(message: _7.MsgToggleIbcSwitch): Uint8Array;
                toProtoMsg(message: _7.MsgToggleIbcSwitch): _7.MsgToggleIbcSwitchProtoMsg;
            };
            MsgToggleIbcSwitchResponse: {
                typeUrl: string;
                encode(_: _7.MsgToggleIbcSwitchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgToggleIbcSwitchResponse;
                fromPartial(_: Partial<_7.MsgToggleIbcSwitchResponse>): _7.MsgToggleIbcSwitchResponse;
                fromAmino(_: _7.MsgToggleIbcSwitchResponseAmino): _7.MsgToggleIbcSwitchResponse;
                toAmino(_: _7.MsgToggleIbcSwitchResponse): _7.MsgToggleIbcSwitchResponseAmino;
                fromAminoMsg(object: _7.MsgToggleIbcSwitchResponseAminoMsg): _7.MsgToggleIbcSwitchResponse;
                fromProtoMsg(message: _7.MsgToggleIbcSwitchResponseProtoMsg): _7.MsgToggleIbcSwitchResponse;
                toProto(message: _7.MsgToggleIbcSwitchResponse): Uint8Array;
                toProtoMsg(message: _7.MsgToggleIbcSwitchResponse): _7.MsgToggleIbcSwitchResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _6.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.ParamsRequest;
                fromPartial(_: Partial<_6.ParamsRequest>): _6.ParamsRequest;
                fromAmino(_: _6.ParamsRequestAmino): _6.ParamsRequest;
                toAmino(_: _6.ParamsRequest): _6.ParamsRequestAmino;
                fromAminoMsg(object: _6.ParamsRequestAminoMsg): _6.ParamsRequest;
                fromProtoMsg(message: _6.ParamsRequestProtoMsg): _6.ParamsRequest;
                toProto(message: _6.ParamsRequest): Uint8Array;
                toProtoMsg(message: _6.ParamsRequest): _6.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _6.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.ParamsResponse;
                fromPartial(object: Partial<_6.ParamsResponse>): _6.ParamsResponse;
                fromAmino(object: _6.ParamsResponseAmino): _6.ParamsResponse;
                toAmino(message: _6.ParamsResponse): _6.ParamsResponseAmino;
                fromAminoMsg(object: _6.ParamsResponseAminoMsg): _6.ParamsResponse;
                fromProtoMsg(message: _6.ParamsResponseProtoMsg): _6.ParamsResponse;
                toProto(message: _6.ParamsResponse): Uint8Array;
                toProtoMsg(message: _6.ParamsResponse): _6.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _5.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Params;
                fromPartial(object: Partial<_5.Params>): _5.Params;
                fromAmino(object: _5.ParamsAmino): _5.Params;
                toAmino(message: _5.Params): _5.ParamsAmino;
                fromAminoMsg(object: _5.ParamsAminoMsg): _5.Params;
                fromProtoMsg(message: _5.ParamsProtoMsg): _5.Params;
                toProto(message: _5.Params): Uint8Array;
                toProtoMsg(message: _5.Params): _5.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
                fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
                toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
                fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                toProto(message: _4.GenesisState): Uint8Array;
                toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
            };
        };
    }
    namespace intertx {
        const v1beta1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                interchainAccountFromAddress(request: _8.QueryInterchainAccountFromAddressRequest): Promise<_8.QueryInterchainAccountFromAddressResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _9.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _9.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _9.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _9.MsgRegisterAccount;
                    };
                    submitTx(value: _9.MsgSubmitTx): {
                        typeUrl: string;
                        value: _9.MsgSubmitTx;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _9.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _9.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _9.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _9.MsgRegisterAccount;
                    };
                    submitTx(value: _9.MsgSubmitTx): {
                        typeUrl: string;
                        value: _9.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/secret.intertx.v1beta1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: (message: _9.MsgRegisterAccount) => _9.MsgRegisterAccountAmino;
                    fromAmino: (object: _9.MsgRegisterAccountAmino) => _9.MsgRegisterAccount;
                };
                "/secret.intertx.v1beta1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: _9.MsgSubmitTx) => _9.MsgSubmitTxAmino;
                    fromAmino: (object: _9.MsgSubmitTxAmino) => _9.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                typeUrl: string;
                encode(message: _9.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgRegisterAccount;
                fromPartial(object: Partial<_9.MsgRegisterAccount>): _9.MsgRegisterAccount;
                fromAmino(object: _9.MsgRegisterAccountAmino): _9.MsgRegisterAccount;
                toAmino(message: _9.MsgRegisterAccount): _9.MsgRegisterAccountAmino;
                fromAminoMsg(object: _9.MsgRegisterAccountAminoMsg): _9.MsgRegisterAccount;
                fromProtoMsg(message: _9.MsgRegisterAccountProtoMsg): _9.MsgRegisterAccount;
                toProto(message: _9.MsgRegisterAccount): Uint8Array;
                toProtoMsg(message: _9.MsgRegisterAccount): _9.MsgRegisterAccountProtoMsg;
            };
            MsgRegisterAccountResponse: {
                typeUrl: string;
                encode(_: _9.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgRegisterAccountResponse;
                fromPartial(_: Partial<_9.MsgRegisterAccountResponse>): _9.MsgRegisterAccountResponse;
                fromAmino(_: _9.MsgRegisterAccountResponseAmino): _9.MsgRegisterAccountResponse;
                toAmino(_: _9.MsgRegisterAccountResponse): _9.MsgRegisterAccountResponseAmino;
                fromAminoMsg(object: _9.MsgRegisterAccountResponseAminoMsg): _9.MsgRegisterAccountResponse;
                fromProtoMsg(message: _9.MsgRegisterAccountResponseProtoMsg): _9.MsgRegisterAccountResponse;
                toProto(message: _9.MsgRegisterAccountResponse): Uint8Array;
                toProtoMsg(message: _9.MsgRegisterAccountResponse): _9.MsgRegisterAccountResponseProtoMsg;
            };
            MsgSubmitTx: {
                typeUrl: string;
                encode(message: _9.MsgSubmitTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgSubmitTx;
                fromPartial(object: Partial<_9.MsgSubmitTx>): _9.MsgSubmitTx;
                fromAmino(object: _9.MsgSubmitTxAmino): _9.MsgSubmitTx;
                toAmino(message: _9.MsgSubmitTx): _9.MsgSubmitTxAmino;
                fromAminoMsg(object: _9.MsgSubmitTxAminoMsg): _9.MsgSubmitTx;
                fromProtoMsg(message: _9.MsgSubmitTxProtoMsg): _9.MsgSubmitTx;
                toProto(message: _9.MsgSubmitTx): Uint8Array;
                toProtoMsg(message: _9.MsgSubmitTx): _9.MsgSubmitTxProtoMsg;
            };
            MsgSubmitTxResponse: {
                typeUrl: string;
                encode(_: _9.MsgSubmitTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgSubmitTxResponse;
                fromPartial(_: Partial<_9.MsgSubmitTxResponse>): _9.MsgSubmitTxResponse;
                fromAmino(_: _9.MsgSubmitTxResponseAmino): _9.MsgSubmitTxResponse;
                toAmino(_: _9.MsgSubmitTxResponse): _9.MsgSubmitTxResponseAmino;
                fromAminoMsg(object: _9.MsgSubmitTxResponseAminoMsg): _9.MsgSubmitTxResponse;
                fromProtoMsg(message: _9.MsgSubmitTxResponseProtoMsg): _9.MsgSubmitTxResponse;
                toProto(message: _9.MsgSubmitTxResponse): Uint8Array;
                toProtoMsg(message: _9.MsgSubmitTxResponse): _9.MsgSubmitTxResponseProtoMsg;
            };
            QueryInterchainAccountFromAddressRequest: {
                typeUrl: string;
                encode(message: _8.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryInterchainAccountFromAddressRequest;
                fromPartial(object: Partial<_8.QueryInterchainAccountFromAddressRequest>): _8.QueryInterchainAccountFromAddressRequest;
                fromAmino(object: _8.QueryInterchainAccountFromAddressRequestAmino): _8.QueryInterchainAccountFromAddressRequest;
                toAmino(message: _8.QueryInterchainAccountFromAddressRequest): _8.QueryInterchainAccountFromAddressRequestAmino;
                fromAminoMsg(object: _8.QueryInterchainAccountFromAddressRequestAminoMsg): _8.QueryInterchainAccountFromAddressRequest;
                fromProtoMsg(message: _8.QueryInterchainAccountFromAddressRequestProtoMsg): _8.QueryInterchainAccountFromAddressRequest;
                toProto(message: _8.QueryInterchainAccountFromAddressRequest): Uint8Array;
                toProtoMsg(message: _8.QueryInterchainAccountFromAddressRequest): _8.QueryInterchainAccountFromAddressRequestProtoMsg;
            };
            QueryInterchainAccountFromAddressResponse: {
                typeUrl: string;
                encode(message: _8.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryInterchainAccountFromAddressResponse;
                fromPartial(object: Partial<_8.QueryInterchainAccountFromAddressResponse>): _8.QueryInterchainAccountFromAddressResponse;
                fromAmino(object: _8.QueryInterchainAccountFromAddressResponseAmino): _8.QueryInterchainAccountFromAddressResponse;
                toAmino(message: _8.QueryInterchainAccountFromAddressResponse): _8.QueryInterchainAccountFromAddressResponseAmino;
                fromAminoMsg(object: _8.QueryInterchainAccountFromAddressResponseAminoMsg): _8.QueryInterchainAccountFromAddressResponse;
                fromProtoMsg(message: _8.QueryInterchainAccountFromAddressResponseProtoMsg): _8.QueryInterchainAccountFromAddressResponse;
                toProto(message: _8.QueryInterchainAccountFromAddressResponse): Uint8Array;
                toProtoMsg(message: _8.QueryInterchainAccountFromAddressResponse): _8.QueryInterchainAccountFromAddressResponseProtoMsg;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                txKey(request?: google.protobuf.Empty): Promise<_11.Key>;
                registrationKey(request?: google.protobuf.Empty): Promise<_11.Key>;
                encryptedSeed(request: _12.QueryEncryptedSeedRequest): Promise<_12.QueryEncryptedSeedResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            SeedConfig: {
                typeUrl: string;
                encode(message: _13.SeedConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.SeedConfig;
                fromPartial(object: Partial<_13.SeedConfig>): _13.SeedConfig;
                fromAmino(object: _13.SeedConfigAmino): _13.SeedConfig;
                toAmino(message: _13.SeedConfig): _13.SeedConfigAmino;
                fromAminoMsg(object: _13.SeedConfigAminoMsg): _13.SeedConfig;
                fromProtoMsg(message: _13.SeedConfigProtoMsg): _13.SeedConfig;
                toProto(message: _13.SeedConfig): Uint8Array;
                toProtoMsg(message: _13.SeedConfig): _13.SeedConfigProtoMsg;
            };
            LegacySeedConfig: {
                typeUrl: string;
                encode(message: _13.LegacySeedConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.LegacySeedConfig;
                fromPartial(object: Partial<_13.LegacySeedConfig>): _13.LegacySeedConfig;
                fromAmino(object: _13.LegacySeedConfigAmino): _13.LegacySeedConfig;
                toAmino(message: _13.LegacySeedConfig): _13.LegacySeedConfigAmino;
                fromAminoMsg(object: _13.LegacySeedConfigAminoMsg): _13.LegacySeedConfig;
                fromProtoMsg(message: _13.LegacySeedConfigProtoMsg): _13.LegacySeedConfig;
                toProto(message: _13.LegacySeedConfig): Uint8Array;
                toProtoMsg(message: _13.LegacySeedConfig): _13.LegacySeedConfigProtoMsg;
            };
            RegistrationNodeInfo: {
                typeUrl: string;
                encode(message: _13.RegistrationNodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.RegistrationNodeInfo;
                fromPartial(object: Partial<_13.RegistrationNodeInfo>): _13.RegistrationNodeInfo;
                fromAmino(object: _13.RegistrationNodeInfoAmino): _13.RegistrationNodeInfo;
                toAmino(message: _13.RegistrationNodeInfo): _13.RegistrationNodeInfoAmino;
                fromAminoMsg(object: _13.RegistrationNodeInfoAminoMsg): _13.RegistrationNodeInfo;
                fromProtoMsg(message: _13.RegistrationNodeInfoProtoMsg): _13.RegistrationNodeInfo;
                toProto(message: _13.RegistrationNodeInfo): Uint8Array;
                toProtoMsg(message: _13.RegistrationNodeInfo): _13.RegistrationNodeInfoProtoMsg;
            };
            QueryEncryptedSeedRequest: {
                typeUrl: string;
                encode(message: _12.QueryEncryptedSeedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryEncryptedSeedRequest;
                fromPartial(object: Partial<_12.QueryEncryptedSeedRequest>): _12.QueryEncryptedSeedRequest;
                fromAmino(object: _12.QueryEncryptedSeedRequestAmino): _12.QueryEncryptedSeedRequest;
                toAmino(message: _12.QueryEncryptedSeedRequest): _12.QueryEncryptedSeedRequestAmino;
                fromAminoMsg(object: _12.QueryEncryptedSeedRequestAminoMsg): _12.QueryEncryptedSeedRequest;
                fromProtoMsg(message: _12.QueryEncryptedSeedRequestProtoMsg): _12.QueryEncryptedSeedRequest;
                toProto(message: _12.QueryEncryptedSeedRequest): Uint8Array;
                toProtoMsg(message: _12.QueryEncryptedSeedRequest): _12.QueryEncryptedSeedRequestProtoMsg;
            };
            QueryEncryptedSeedResponse: {
                typeUrl: string;
                encode(message: _12.QueryEncryptedSeedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryEncryptedSeedResponse;
                fromPartial(object: Partial<_12.QueryEncryptedSeedResponse>): _12.QueryEncryptedSeedResponse;
                fromAmino(object: _12.QueryEncryptedSeedResponseAmino): _12.QueryEncryptedSeedResponse;
                toAmino(message: _12.QueryEncryptedSeedResponse): _12.QueryEncryptedSeedResponseAmino;
                fromAminoMsg(object: _12.QueryEncryptedSeedResponseAminoMsg): _12.QueryEncryptedSeedResponse;
                fromProtoMsg(message: _12.QueryEncryptedSeedResponseProtoMsg): _12.QueryEncryptedSeedResponse;
                toProto(message: _12.QueryEncryptedSeedResponse): Uint8Array;
                toProtoMsg(message: _12.QueryEncryptedSeedResponse): _12.QueryEncryptedSeedResponseProtoMsg;
            };
            RaAuthenticate: {
                typeUrl: string;
                encode(message: _11.RaAuthenticate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.RaAuthenticate;
                fromPartial(object: Partial<_11.RaAuthenticate>): _11.RaAuthenticate;
                fromAmino(object: _11.RaAuthenticateAmino): _11.RaAuthenticate;
                toAmino(message: _11.RaAuthenticate): _11.RaAuthenticateAmino;
                fromAminoMsg(object: _11.RaAuthenticateAminoMsg): _11.RaAuthenticate;
                fromProtoMsg(message: _11.RaAuthenticateProtoMsg): _11.RaAuthenticate;
                toProto(message: _11.RaAuthenticate): Uint8Array;
                toProtoMsg(message: _11.RaAuthenticate): _11.RaAuthenticateProtoMsg;
            };
            MasterKey: {
                typeUrl: string;
                encode(message: _11.MasterKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MasterKey;
                fromPartial(object: Partial<_11.MasterKey>): _11.MasterKey;
                fromAmino(object: _11.MasterKeyAmino): _11.MasterKey;
                toAmino(message: _11.MasterKey): _11.MasterKeyAmino;
                fromAminoMsg(object: _11.MasterKeyAminoMsg): _11.MasterKey;
                fromProtoMsg(message: _11.MasterKeyProtoMsg): _11.MasterKey;
                toProto(message: _11.MasterKey): Uint8Array;
                toProtoMsg(message: _11.MasterKey): _11.MasterKeyProtoMsg;
            };
            Key: {
                typeUrl: string;
                encode(message: _11.Key, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Key;
                fromPartial(object: Partial<_11.Key>): _11.Key;
                fromAmino(object: _11.KeyAmino): _11.Key;
                toAmino(message: _11.Key): _11.KeyAmino;
                fromAminoMsg(object: _11.KeyAminoMsg): _11.Key;
                fromProtoMsg(message: _11.KeyProtoMsg): _11.Key;
                toProto(message: _11.Key): Uint8Array;
                toProtoMsg(message: _11.Key): _11.KeyProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    typeUrl: string;
                    encode(message: _14.QuoteReport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.QuoteReport;
                    fromPartial(object: Partial<_14.QuoteReport>): _14.QuoteReport;
                    fromAmino(object: _14.QuoteReportAmino): _14.QuoteReport;
                    toAmino(message: _14.QuoteReport): _14.QuoteReportAmino;
                    fromAminoMsg(object: _14.QuoteReportAminoMsg): _14.QuoteReport;
                    fromProtoMsg(message: _14.QuoteReportProtoMsg): _14.QuoteReport;
                    toProto(message: _14.QuoteReport): Uint8Array;
                    toProtoMsg(message: _14.QuoteReport): _14.QuoteReportProtoMsg;
                };
                QuoteReportBody: {
                    typeUrl: string;
                    encode(message: _14.QuoteReportBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.QuoteReportBody;
                    fromPartial(object: Partial<_14.QuoteReportBody>): _14.QuoteReportBody;
                    fromAmino(object: _14.QuoteReportBodyAmino): _14.QuoteReportBody;
                    toAmino(message: _14.QuoteReportBody): _14.QuoteReportBodyAmino;
                    fromAminoMsg(object: _14.QuoteReportBodyAminoMsg): _14.QuoteReportBody;
                    fromProtoMsg(message: _14.QuoteReportBodyProtoMsg): _14.QuoteReportBody;
                    toProto(message: _14.QuoteReportBody): Uint8Array;
                    toProtoMsg(message: _14.QuoteReportBody): _14.QuoteReportBodyProtoMsg;
                };
                QuoteReportData: {
                    typeUrl: string;
                    encode(message: _14.QuoteReportData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.QuoteReportData;
                    fromPartial(object: Partial<_14.QuoteReportData>): _14.QuoteReportData;
                    fromAmino(object: _14.QuoteReportDataAmino): _14.QuoteReportData;
                    toAmino(message: _14.QuoteReportData): _14.QuoteReportDataAmino;
                    fromAminoMsg(object: _14.QuoteReportDataAminoMsg): _14.QuoteReportData;
                    fromProtoMsg(message: _14.QuoteReportDataProtoMsg): _14.QuoteReportData;
                    toProto(message: _14.QuoteReportData): Uint8Array;
                    toProtoMsg(message: _14.QuoteReportData): _14.QuoteReportDataProtoMsg;
                };
                EndorsedAttestationReport: {
                    typeUrl: string;
                    encode(message: _14.EndorsedAttestationReport, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.EndorsedAttestationReport;
                    fromPartial(object: Partial<_14.EndorsedAttestationReport>): _14.EndorsedAttestationReport;
                    fromAmino(object: _14.EndorsedAttestationReportAmino): _14.EndorsedAttestationReport;
                    toAmino(message: _14.EndorsedAttestationReport): _14.EndorsedAttestationReportAmino;
                    fromAminoMsg(object: _14.EndorsedAttestationReportAminoMsg): _14.EndorsedAttestationReport;
                    fromProtoMsg(message: _14.EndorsedAttestationReportProtoMsg): _14.EndorsedAttestationReport;
                    toProto(message: _14.EndorsedAttestationReport): Uint8Array;
                    toProtoMsg(message: _14.EndorsedAttestationReport): _14.EndorsedAttestationReportProtoMsg;
                };
                SGXEC256Signature: {
                    typeUrl: string;
                    encode(message: _14.SGXEC256Signature, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.SGXEC256Signature;
                    fromPartial(object: Partial<_14.SGXEC256Signature>): _14.SGXEC256Signature;
                    fromAmino(object: _14.SGXEC256SignatureAmino): _14.SGXEC256Signature;
                    toAmino(message: _14.SGXEC256Signature): _14.SGXEC256SignatureAmino;
                    fromAminoMsg(object: _14.SGXEC256SignatureAminoMsg): _14.SGXEC256Signature;
                    fromProtoMsg(message: _14.SGXEC256SignatureProtoMsg): _14.SGXEC256Signature;
                    toProto(message: _14.SGXEC256Signature): Uint8Array;
                    toProtoMsg(message: _14.SGXEC256Signature): _14.SGXEC256SignatureProtoMsg;
                };
                PlatformInfoBlob: {
                    typeUrl: string;
                    encode(message: _14.PlatformInfoBlob, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.PlatformInfoBlob;
                    fromPartial(object: Partial<_14.PlatformInfoBlob>): _14.PlatformInfoBlob;
                    fromAmino(object: _14.PlatformInfoBlobAmino): _14.PlatformInfoBlob;
                    toAmino(message: _14.PlatformInfoBlob): _14.PlatformInfoBlobAmino;
                    fromAminoMsg(object: _14.PlatformInfoBlobAminoMsg): _14.PlatformInfoBlob;
                    fromProtoMsg(message: _14.PlatformInfoBlobProtoMsg): _14.PlatformInfoBlob;
                    toProto(message: _14.PlatformInfoBlob): Uint8Array;
                    toProtoMsg(message: _14.PlatformInfoBlob): _14.PlatformInfoBlobProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            secret: {
                compute: {
                    v1beta1: _173.MsgClientImpl;
                };
                emergencybutton: {
                    v1beta1: _174.MsgClientImpl;
                };
                intertx: {
                    v1beta1: _175.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            secret: {
                compute: {
                    v1beta1: {
                        contractInfo(request: _2.QueryByContractAddressRequest): Promise<_2.QueryContractInfoResponse>;
                        contractsByCodeId(request: _2.QueryByCodeIdRequest): Promise<_2.QueryContractsByCodeIdResponse>;
                        querySecretContract(request: _2.QuerySecretContractRequest): Promise<_2.QuerySecretContractResponse>;
                        code(request: _2.QueryByCodeIdRequest): Promise<_2.QueryCodeResponse>;
                        codes(request?: google.protobuf.Empty): Promise<_2.QueryCodesResponse>;
                        codeHashByContractAddress(request: _2.QueryByContractAddressRequest): Promise<_2.QueryCodeHashResponse>;
                        codeHashByCodeId(request: _2.QueryByCodeIdRequest): Promise<_2.QueryCodeHashResponse>;
                        labelByAddress(request: _2.QueryByContractAddressRequest): Promise<_2.QueryContractLabelResponse>;
                        addressByLabel(request: _2.QueryByLabelRequest): Promise<_2.QueryContractAddressResponse>;
                    };
                };
                emergencybutton: {
                    v1beta1: {
                        params(request?: _6.ParamsRequest): Promise<_6.ParamsResponse>;
                    };
                };
                intertx: {
                    v1beta1: {
                        interchainAccountFromAddress(request: _8.QueryInterchainAccountFromAddressRequest): Promise<_8.QueryInterchainAccountFromAddressResponse>;
                    };
                };
                registration: {
                    v1beta1: {
                        txKey(request?: google.protobuf.Empty): Promise<_11.Key>;
                        registrationKey(request?: google.protobuf.Empty): Promise<_11.Key>;
                        encryptedSeed(request: _12.QueryEncryptedSeedRequest): Promise<_12.QueryEncryptedSeedResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                        foundationTax(request?: import("../cosmos/distribution/v1beta1/query").QueryFoundationTaxRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryFoundationTaxResponse>;
                        restakeThreshold(request?: import("../cosmos/distribution/v1beta1/query").QueryRestakeThresholdRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryRestakeThresholdResponse>;
                        restakingEntries(request: import("../cosmos/distribution/v1beta1/query").QueryRestakeEntriesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryRestakingEntriesResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            secret: {
                compute: {
                    v1beta1: _165.LCDQueryClient;
                };
                emergencybutton: {
                    v1beta1: _166.LCDQueryClient;
                };
                intertx: {
                    v1beta1: _167.LCDQueryClient;
                };
                registration: {
                    v1beta1: _168.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
