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
                    toAmino: ({ sender, wasmByteCode, source, builder }: _1.MsgStoreCode) => {
                        sender: Uint8Array;
                        wasm_byte_code: string;
                        source: string;
                        builder: string;
                    };
                    fromAmino: ({ sender, wasm_byte_code, source, builder }: {
                        sender: Uint8Array;
                        wasm_byte_code: string;
                        source: string;
                        builder: string;
                    }) => _1.MsgStoreCode;
                };
                "/secret.compute.v1beta1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, callbackCodeHash, codeId, label, initMsg, initFunds, callbackSig }: _1.MsgInstantiateContract) => {
                        sender: Uint8Array;
                        callback_code_hash: string;
                        code_id: string;
                        label: string;
                        init_msg: Uint8Array;
                        init_funds: {
                            denom: string;
                            amount: string;
                        }[];
                        callback_sig: Uint8Array;
                    };
                    fromAmino: ({ sender, callback_code_hash, code_id, label, init_msg, init_funds, callback_sig }: {
                        sender: Uint8Array;
                        callback_code_hash: string;
                        code_id: string;
                        label: string;
                        init_msg: Uint8Array;
                        init_funds: {
                            denom: string;
                            amount: string;
                        }[];
                        callback_sig: Uint8Array;
                    }) => _1.MsgInstantiateContract;
                };
                "/secret.compute.v1beta1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, callbackCodeHash, sentFunds, callbackSig }: _1.MsgExecuteContract) => {
                        sender: Uint8Array;
                        contract: Uint8Array;
                        msg: Uint8Array;
                        callback_code_hash: string;
                        sent_funds: {
                            denom: string;
                            amount: string;
                        }[];
                        callback_sig: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, msg, callback_code_hash, sent_funds, callback_sig }: {
                        sender: Uint8Array;
                        contract: Uint8Array;
                        msg: Uint8Array;
                        callback_code_hash: string;
                        sent_funds: {
                            denom: string;
                            amount: string;
                        }[];
                        callback_sig: Uint8Array;
                    }) => _1.MsgExecuteContract;
                };
            };
            accessTypeFromJSON(object: any): _3.AccessType;
            accessTypeToJSON(object: _3.AccessType): string;
            AccessType: typeof _3.AccessType;
            AccessTypeSDKType: typeof _3.AccessType;
            AccessTypeParam: {
                encode(message: _3.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.AccessTypeParam;
                fromPartial(object: Partial<_3.AccessTypeParam>): _3.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _3.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.CodeInfo;
                fromPartial(object: Partial<_3.CodeInfo>): _3.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _3.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.ContractCustomInfo;
                fromPartial(object: Partial<_3.ContractCustomInfo>): _3.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _3.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.ContractInfo;
                fromPartial(object: Partial<_3.ContractInfo>): _3.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _3.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.AbsoluteTxPosition;
                fromPartial(object: Partial<_3.AbsoluteTxPosition>): _3.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _3.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.Model;
                fromPartial(object: Partial<_3.Model>): _3.Model;
            };
            QuerySecretContractRequest: {
                encode(message: _2.QuerySecretContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QuerySecretContractRequest;
                fromPartial(object: Partial<_2.QuerySecretContractRequest>): _2.QuerySecretContractRequest;
            };
            QueryByLabelRequest: {
                encode(message: _2.QueryByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryByLabelRequest;
                fromPartial(object: Partial<_2.QueryByLabelRequest>): _2.QueryByLabelRequest;
            };
            QueryByContractAddressRequest: {
                encode(message: _2.QueryByContractAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryByContractAddressRequest;
                fromPartial(object: Partial<_2.QueryByContractAddressRequest>): _2.QueryByContractAddressRequest;
            };
            QueryByCodeIdRequest: {
                encode(message: _2.QueryByCodeIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryByCodeIdRequest;
                fromPartial(object: Partial<_2.QueryByCodeIdRequest>): _2.QueryByCodeIdRequest;
            };
            QuerySecretContractResponse: {
                encode(message: _2.QuerySecretContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QuerySecretContractResponse;
                fromPartial(object: Partial<_2.QuerySecretContractResponse>): _2.QuerySecretContractResponse;
            };
            QueryContractInfoResponse: {
                encode(message: _2.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryContractInfoResponse;
                fromPartial(object: Partial<_2.QueryContractInfoResponse>): _2.QueryContractInfoResponse;
            };
            ContractInfoWithAddress: {
                encode(message: _2.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.ContractInfoWithAddress;
                fromPartial(object: Partial<_2.ContractInfoWithAddress>): _2.ContractInfoWithAddress;
            };
            QueryContractsByCodeIdResponse: {
                encode(message: _2.QueryContractsByCodeIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryContractsByCodeIdResponse;
                fromPartial(object: Partial<_2.QueryContractsByCodeIdResponse>): _2.QueryContractsByCodeIdResponse;
            };
            CodeInfoResponse: {
                encode(message: _2.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.CodeInfoResponse;
                fromPartial(object: Partial<_2.CodeInfoResponse>): _2.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _2.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryCodeResponse;
                fromPartial(object: Partial<_2.QueryCodeResponse>): _2.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _2.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryCodesResponse;
                fromPartial(object: Partial<_2.QueryCodesResponse>): _2.QueryCodesResponse;
            };
            QueryContractAddressResponse: {
                encode(message: _2.QueryContractAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryContractAddressResponse;
                fromPartial(object: Partial<_2.QueryContractAddressResponse>): _2.QueryContractAddressResponse;
            };
            QueryContractLabelResponse: {
                encode(message: _2.QueryContractLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryContractLabelResponse;
                fromPartial(object: Partial<_2.QueryContractLabelResponse>): _2.QueryContractLabelResponse;
            };
            QueryCodeHashResponse: {
                encode(message: _2.QueryCodeHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryCodeHashResponse;
                fromPartial(object: Partial<_2.QueryCodeHashResponse>): _2.QueryCodeHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _2.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.DecryptedAnswer;
                fromPartial(object: Partial<_2.DecryptedAnswer>): _2.DecryptedAnswer;
            };
            DecryptedAnswers: {
                encode(message: _2.DecryptedAnswers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.DecryptedAnswers;
                fromPartial(object: Partial<_2.DecryptedAnswers>): _2.DecryptedAnswers;
            };
            MsgStoreCode: {
                encode(message: _1.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgStoreCode;
                fromPartial(object: Partial<_1.MsgStoreCode>): _1.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _1.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgStoreCodeResponse;
                fromPartial(object: Partial<_1.MsgStoreCodeResponse>): _1.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _1.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgInstantiateContract;
                fromPartial(object: Partial<_1.MsgInstantiateContract>): _1.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _1.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_1.MsgInstantiateContractResponse>): _1.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _1.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgExecuteContract;
                fromPartial(object: Partial<_1.MsgExecuteContract>): _1.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _1.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgExecuteContractResponse;
                fromPartial(object: Partial<_1.MsgExecuteContractResponse>): _1.MsgExecuteContractResponse;
            };
            GenesisState: {
                encode(message: _0.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.GenesisState;
                fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
            };
            Code: {
                encode(message: _0.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Code;
                fromPartial(object: Partial<_0.Code>): _0.Code;
            };
            Contract: {
                encode(message: _0.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Contract;
                fromPartial(object: Partial<_0.Contract>): _0.Contract;
            };
            Sequence: {
                encode(message: _0.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Sequence;
                fromPartial(object: Partial<_0.Sequence>): _0.Sequence;
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
                    toAmino: ({ sender }: _7.MsgToggleIbcSwitch) => {
                        sender: string;
                    };
                    fromAmino: ({ sender }: {
                        sender: string;
                    }) => _7.MsgToggleIbcSwitch;
                };
            };
            MsgToggleIbcSwitch: {
                encode(message: _7.MsgToggleIbcSwitch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MsgToggleIbcSwitch;
                fromPartial(object: Partial<_7.MsgToggleIbcSwitch>): _7.MsgToggleIbcSwitch;
            };
            MsgToggleIbcSwitchResponse: {
                encode(_: _7.MsgToggleIbcSwitchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _7.MsgToggleIbcSwitchResponse;
                fromPartial(_: Partial<_7.MsgToggleIbcSwitchResponse>): _7.MsgToggleIbcSwitchResponse;
            };
            ParamsRequest: {
                encode(_: _6.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _6.ParamsRequest;
                fromPartial(_: Partial<_6.ParamsRequest>): _6.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _6.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.ParamsResponse;
                fromPartial(object: Partial<_6.ParamsResponse>): _6.ParamsResponse;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Params;
                fromPartial(object: Partial<_5.Params>): _5.Params;
            };
            GenesisState: {
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.GenesisState;
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
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
                    toAmino: ({ owner, connectionId, version }: _9.MsgRegisterAccount) => {
                        owner: string;
                        connection_id: string;
                        version: string;
                    };
                    fromAmino: ({ owner, connection_id, version }: {
                        owner: string;
                        connection_id: string;
                        version: string;
                    }) => _9.MsgRegisterAccount;
                };
                "/secret.intertx.v1beta1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, msg }: _9.MsgSubmitTx) => {
                        owner: Uint8Array;
                        connection_id: string;
                        msg: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ owner, connection_id, msg }: {
                        owner: Uint8Array;
                        connection_id: string;
                        msg: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _9.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _9.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MsgRegisterAccount;
                fromPartial(object: Partial<_9.MsgRegisterAccount>): _9.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _9.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.MsgRegisterAccountResponse;
                fromPartial(_: Partial<_9.MsgRegisterAccountResponse>): _9.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _9.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MsgSubmitTx;
                fromPartial(object: Partial<_9.MsgSubmitTx>): _9.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _9.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.MsgSubmitTxResponse;
                fromPartial(_: Partial<_9.MsgSubmitTxResponse>): _9.MsgSubmitTxResponse;
            };
            QueryInterchainAccountFromAddressRequest: {
                encode(message: _8.QueryInterchainAccountFromAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryInterchainAccountFromAddressRequest;
                fromPartial(object: Partial<_8.QueryInterchainAccountFromAddressRequest>): _8.QueryInterchainAccountFromAddressRequest;
            };
            QueryInterchainAccountFromAddressResponse: {
                encode(message: _8.QueryInterchainAccountFromAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.QueryInterchainAccountFromAddressResponse;
                fromPartial(object: Partial<_8.QueryInterchainAccountFromAddressResponse>): _8.QueryInterchainAccountFromAddressResponse;
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
                encode(message: _13.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.SeedConfig;
                fromPartial(object: Partial<_13.SeedConfig>): _13.SeedConfig;
            };
            LegacySeedConfig: {
                encode(message: _13.LegacySeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.LegacySeedConfig;
                fromPartial(object: Partial<_13.LegacySeedConfig>): _13.LegacySeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _13.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.RegistrationNodeInfo;
                fromPartial(object: Partial<_13.RegistrationNodeInfo>): _13.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _12.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryEncryptedSeedRequest;
                fromPartial(object: Partial<_12.QueryEncryptedSeedRequest>): _12.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _12.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryEncryptedSeedResponse;
                fromPartial(object: Partial<_12.QueryEncryptedSeedResponse>): _12.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _11.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.RaAuthenticate;
                fromPartial(object: Partial<_11.RaAuthenticate>): _11.RaAuthenticate;
            };
            MasterKey: {
                encode(message: _11.MasterKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MasterKey;
                fromPartial(object: Partial<_11.MasterKey>): _11.MasterKey;
            };
            Key: {
                encode(message: _11.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Key;
                fromPartial(object: Partial<_11.Key>): _11.Key;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _14.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.QuoteReport;
                    fromPartial(object: Partial<_14.QuoteReport>): _14.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _14.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.QuoteReportBody;
                    fromPartial(object: Partial<_14.QuoteReportBody>): _14.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _14.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.QuoteReportData;
                    fromPartial(object: Partial<_14.QuoteReportData>): _14.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _14.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.EndorsedAttestationReport;
                    fromPartial(object: Partial<_14.EndorsedAttestationReport>): _14.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _14.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.SGXEC256Signature;
                    fromPartial(object: Partial<_14.SGXEC256Signature>): _14.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _14.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _14.PlatformInfoBlob;
                    fromPartial(object: Partial<_14.PlatformInfoBlob>): _14.PlatformInfoBlob;
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
