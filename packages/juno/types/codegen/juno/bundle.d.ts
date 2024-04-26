import * as _3 from "./clock/v1/clock";
import * as _4 from "./clock/v1/genesis";
import * as _5 from "./clock/v1/query";
import * as _6 from "./clock/v1/tx";
import * as _7 from "./cwhooks/v1/genesis";
import * as _8 from "./cwhooks/v1/query";
import * as _9 from "./cwhooks/v1/tx";
import * as _10 from "./drip/v1/genesis";
import * as _11 from "./drip/v1/query";
import * as _12 from "./drip/v1/tx";
import * as _13 from "./feepay/v1/feepay";
import * as _14 from "./feepay/v1/genesis";
import * as _15 from "./feepay/v1/query";
import * as _16 from "./feepay/v1/tx";
import * as _17 from "./feeshare/v1/feeshare";
import * as _18 from "./feeshare/v1/genesis";
import * as _19 from "./feeshare/v1/query";
import * as _20 from "./feeshare/v1/tx";
import * as _21 from "./mint/genesis";
import * as _22 from "./mint/mint";
import * as _23 from "./mint/query";
import * as _24 from "./mint/tx";
import * as _199 from "./clock/v1/query.lcd";
import * as _200 from "./cwhooks/v1/query.lcd";
import * as _201 from "./drip/v1/query.lcd";
import * as _202 from "./feepay/v1/query.lcd";
import * as _203 from "./feeshare/v1/query.lcd";
import * as _204 from "./mint/query.lcd";
import * as _205 from "./clock/v1/query.rpc.Query";
import * as _206 from "./cwhooks/v1/query.rpc.Query";
import * as _207 from "./drip/v1/query.rpc.Query";
import * as _208 from "./feepay/v1/query.rpc.Query";
import * as _209 from "./feeshare/v1/query.rpc.Query";
import * as _210 from "./mint/query.rpc.Query";
import * as _211 from "./clock/v1/tx.rpc.msg";
import * as _212 from "./cwhooks/v1/tx.rpc.msg";
import * as _213 from "./drip/v1/tx.rpc.msg";
import * as _214 from "./feepay/v1/tx.rpc.msg";
import * as _215 from "./feeshare/v1/tx.rpc.msg";
import * as _216 from "./mint/tx.rpc.msg";
export declare namespace juno {
    namespace clock {
        const v1: {
            MsgClientImpl: typeof _211.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                clockContracts(request?: _5.QueryClockContracts): Promise<_5.QueryClockContractsResponse>;
                clockContract(request: _5.QueryClockContract): Promise<_5.QueryClockContractResponse>;
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerClockContract(value: _6.MsgRegisterClockContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterClockContract(value: _6.MsgUnregisterClockContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unjailClockContract(value: _6.MsgUnjailClockContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _6.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerClockContract(value: _6.MsgRegisterClockContract): {
                        typeUrl: string;
                        value: _6.MsgRegisterClockContract;
                    };
                    unregisterClockContract(value: _6.MsgUnregisterClockContract): {
                        typeUrl: string;
                        value: _6.MsgUnregisterClockContract;
                    };
                    unjailClockContract(value: _6.MsgUnjailClockContract): {
                        typeUrl: string;
                        value: _6.MsgUnjailClockContract;
                    };
                    updateParams(value: _6.MsgUpdateParams): {
                        typeUrl: string;
                        value: _6.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    registerClockContract(value: any): {
                        typeUrl: string;
                        value: _6.MsgRegisterClockContract;
                    };
                    unregisterClockContract(value: any): {
                        typeUrl: string;
                        value: _6.MsgUnregisterClockContract;
                    };
                    unjailClockContract(value: any): {
                        typeUrl: string;
                        value: _6.MsgUnjailClockContract;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _6.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerClockContract(value: _6.MsgRegisterClockContract): {
                        typeUrl: string;
                        value: _6.MsgRegisterClockContract;
                    };
                    unregisterClockContract(value: _6.MsgUnregisterClockContract): {
                        typeUrl: string;
                        value: _6.MsgUnregisterClockContract;
                    };
                    unjailClockContract(value: _6.MsgUnjailClockContract): {
                        typeUrl: string;
                        value: _6.MsgUnjailClockContract;
                    };
                    updateParams(value: _6.MsgUpdateParams): {
                        typeUrl: string;
                        value: _6.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/juno.clock.v1.MsgRegisterClockContract": {
                    aminoType: string;
                    toAmino: (message: _6.MsgRegisterClockContract) => _6.MsgRegisterClockContractAmino;
                    fromAmino: (object: _6.MsgRegisterClockContractAmino) => _6.MsgRegisterClockContract;
                };
                "/juno.clock.v1.MsgUnregisterClockContract": {
                    aminoType: string;
                    toAmino: (message: _6.MsgUnregisterClockContract) => _6.MsgUnregisterClockContractAmino;
                    fromAmino: (object: _6.MsgUnregisterClockContractAmino) => _6.MsgUnregisterClockContract;
                };
                "/juno.clock.v1.MsgUnjailClockContract": {
                    aminoType: string;
                    toAmino: (message: _6.MsgUnjailClockContract) => _6.MsgUnjailClockContractAmino;
                    fromAmino: (object: _6.MsgUnjailClockContractAmino) => _6.MsgUnjailClockContract;
                };
                "/juno.clock.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _6.MsgUpdateParams) => _6.MsgUpdateParamsAmino;
                    fromAmino: (object: _6.MsgUpdateParamsAmino) => _6.MsgUpdateParams;
                };
            };
            MsgRegisterClockContract: {
                typeUrl: string;
                encode(message: _6.MsgRegisterClockContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgRegisterClockContract;
                fromPartial(object: Partial<_6.MsgRegisterClockContract>): _6.MsgRegisterClockContract;
                fromAmino(object: _6.MsgRegisterClockContractAmino): _6.MsgRegisterClockContract;
                toAmino(message: _6.MsgRegisterClockContract): _6.MsgRegisterClockContractAmino;
                fromAminoMsg(object: _6.MsgRegisterClockContractAminoMsg): _6.MsgRegisterClockContract;
                fromProtoMsg(message: _6.MsgRegisterClockContractProtoMsg): _6.MsgRegisterClockContract;
                toProto(message: _6.MsgRegisterClockContract): Uint8Array;
                toProtoMsg(message: _6.MsgRegisterClockContract): _6.MsgRegisterClockContractProtoMsg;
            };
            MsgRegisterClockContractResponse: {
                typeUrl: string;
                encode(_: _6.MsgRegisterClockContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgRegisterClockContractResponse;
                fromPartial(_: Partial<_6.MsgRegisterClockContractResponse>): _6.MsgRegisterClockContractResponse;
                fromAmino(_: _6.MsgRegisterClockContractResponseAmino): _6.MsgRegisterClockContractResponse;
                toAmino(_: _6.MsgRegisterClockContractResponse): _6.MsgRegisterClockContractResponseAmino;
                fromAminoMsg(object: _6.MsgRegisterClockContractResponseAminoMsg): _6.MsgRegisterClockContractResponse;
                fromProtoMsg(message: _6.MsgRegisterClockContractResponseProtoMsg): _6.MsgRegisterClockContractResponse;
                toProto(message: _6.MsgRegisterClockContractResponse): Uint8Array;
                toProtoMsg(message: _6.MsgRegisterClockContractResponse): _6.MsgRegisterClockContractResponseProtoMsg;
            };
            MsgUnregisterClockContract: {
                typeUrl: string;
                encode(message: _6.MsgUnregisterClockContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgUnregisterClockContract;
                fromPartial(object: Partial<_6.MsgUnregisterClockContract>): _6.MsgUnregisterClockContract;
                fromAmino(object: _6.MsgUnregisterClockContractAmino): _6.MsgUnregisterClockContract;
                toAmino(message: _6.MsgUnregisterClockContract): _6.MsgUnregisterClockContractAmino;
                fromAminoMsg(object: _6.MsgUnregisterClockContractAminoMsg): _6.MsgUnregisterClockContract;
                fromProtoMsg(message: _6.MsgUnregisterClockContractProtoMsg): _6.MsgUnregisterClockContract;
                toProto(message: _6.MsgUnregisterClockContract): Uint8Array;
                toProtoMsg(message: _6.MsgUnregisterClockContract): _6.MsgUnregisterClockContractProtoMsg;
            };
            MsgUnregisterClockContractResponse: {
                typeUrl: string;
                encode(_: _6.MsgUnregisterClockContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgUnregisterClockContractResponse;
                fromPartial(_: Partial<_6.MsgUnregisterClockContractResponse>): _6.MsgUnregisterClockContractResponse;
                fromAmino(_: _6.MsgUnregisterClockContractResponseAmino): _6.MsgUnregisterClockContractResponse;
                toAmino(_: _6.MsgUnregisterClockContractResponse): _6.MsgUnregisterClockContractResponseAmino;
                fromAminoMsg(object: _6.MsgUnregisterClockContractResponseAminoMsg): _6.MsgUnregisterClockContractResponse;
                fromProtoMsg(message: _6.MsgUnregisterClockContractResponseProtoMsg): _6.MsgUnregisterClockContractResponse;
                toProto(message: _6.MsgUnregisterClockContractResponse): Uint8Array;
                toProtoMsg(message: _6.MsgUnregisterClockContractResponse): _6.MsgUnregisterClockContractResponseProtoMsg;
            };
            MsgUnjailClockContract: {
                typeUrl: string;
                encode(message: _6.MsgUnjailClockContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgUnjailClockContract;
                fromPartial(object: Partial<_6.MsgUnjailClockContract>): _6.MsgUnjailClockContract;
                fromAmino(object: _6.MsgUnjailClockContractAmino): _6.MsgUnjailClockContract;
                toAmino(message: _6.MsgUnjailClockContract): _6.MsgUnjailClockContractAmino;
                fromAminoMsg(object: _6.MsgUnjailClockContractAminoMsg): _6.MsgUnjailClockContract;
                fromProtoMsg(message: _6.MsgUnjailClockContractProtoMsg): _6.MsgUnjailClockContract;
                toProto(message: _6.MsgUnjailClockContract): Uint8Array;
                toProtoMsg(message: _6.MsgUnjailClockContract): _6.MsgUnjailClockContractProtoMsg;
            };
            MsgUnjailClockContractResponse: {
                typeUrl: string;
                encode(_: _6.MsgUnjailClockContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgUnjailClockContractResponse;
                fromPartial(_: Partial<_6.MsgUnjailClockContractResponse>): _6.MsgUnjailClockContractResponse;
                fromAmino(_: _6.MsgUnjailClockContractResponseAmino): _6.MsgUnjailClockContractResponse;
                toAmino(_: _6.MsgUnjailClockContractResponse): _6.MsgUnjailClockContractResponseAmino;
                fromAminoMsg(object: _6.MsgUnjailClockContractResponseAminoMsg): _6.MsgUnjailClockContractResponse;
                fromProtoMsg(message: _6.MsgUnjailClockContractResponseProtoMsg): _6.MsgUnjailClockContractResponse;
                toProto(message: _6.MsgUnjailClockContractResponse): Uint8Array;
                toProtoMsg(message: _6.MsgUnjailClockContractResponse): _6.MsgUnjailClockContractResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _6.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgUpdateParams;
                fromPartial(object: Partial<_6.MsgUpdateParams>): _6.MsgUpdateParams;
                fromAmino(object: _6.MsgUpdateParamsAmino): _6.MsgUpdateParams;
                toAmino(message: _6.MsgUpdateParams): _6.MsgUpdateParamsAmino;
                fromAminoMsg(object: _6.MsgUpdateParamsAminoMsg): _6.MsgUpdateParams;
                fromProtoMsg(message: _6.MsgUpdateParamsProtoMsg): _6.MsgUpdateParams;
                toProto(message: _6.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _6.MsgUpdateParams): _6.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _6.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_6.MsgUpdateParamsResponse>): _6.MsgUpdateParamsResponse;
                fromAmino(_: _6.MsgUpdateParamsResponseAmino): _6.MsgUpdateParamsResponse;
                toAmino(_: _6.MsgUpdateParamsResponse): _6.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _6.MsgUpdateParamsResponseAminoMsg): _6.MsgUpdateParamsResponse;
                fromProtoMsg(message: _6.MsgUpdateParamsResponseProtoMsg): _6.MsgUpdateParamsResponse;
                toProto(message: _6.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _6.MsgUpdateParamsResponse): _6.MsgUpdateParamsResponseProtoMsg;
            };
            QueryClockContracts: {
                typeUrl: string;
                encode(message: _5.QueryClockContracts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryClockContracts;
                fromPartial(object: Partial<_5.QueryClockContracts>): _5.QueryClockContracts;
                fromAmino(object: _5.QueryClockContractsAmino): _5.QueryClockContracts;
                toAmino(message: _5.QueryClockContracts): _5.QueryClockContractsAmino;
                fromAminoMsg(object: _5.QueryClockContractsAminoMsg): _5.QueryClockContracts;
                fromProtoMsg(message: _5.QueryClockContractsProtoMsg): _5.QueryClockContracts;
                toProto(message: _5.QueryClockContracts): Uint8Array;
                toProtoMsg(message: _5.QueryClockContracts): _5.QueryClockContractsProtoMsg;
            };
            QueryClockContractsResponse: {
                typeUrl: string;
                encode(message: _5.QueryClockContractsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryClockContractsResponse;
                fromPartial(object: Partial<_5.QueryClockContractsResponse>): _5.QueryClockContractsResponse;
                fromAmino(object: _5.QueryClockContractsResponseAmino): _5.QueryClockContractsResponse;
                toAmino(message: _5.QueryClockContractsResponse): _5.QueryClockContractsResponseAmino;
                fromAminoMsg(object: _5.QueryClockContractsResponseAminoMsg): _5.QueryClockContractsResponse;
                fromProtoMsg(message: _5.QueryClockContractsResponseProtoMsg): _5.QueryClockContractsResponse;
                toProto(message: _5.QueryClockContractsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryClockContractsResponse): _5.QueryClockContractsResponseProtoMsg;
            };
            QueryClockContract: {
                typeUrl: string;
                encode(message: _5.QueryClockContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryClockContract;
                fromPartial(object: Partial<_5.QueryClockContract>): _5.QueryClockContract;
                fromAmino(object: _5.QueryClockContractAmino): _5.QueryClockContract;
                toAmino(message: _5.QueryClockContract): _5.QueryClockContractAmino;
                fromAminoMsg(object: _5.QueryClockContractAminoMsg): _5.QueryClockContract;
                fromProtoMsg(message: _5.QueryClockContractProtoMsg): _5.QueryClockContract;
                toProto(message: _5.QueryClockContract): Uint8Array;
                toProtoMsg(message: _5.QueryClockContract): _5.QueryClockContractProtoMsg;
            };
            QueryClockContractResponse: {
                typeUrl: string;
                encode(message: _5.QueryClockContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryClockContractResponse;
                fromPartial(object: Partial<_5.QueryClockContractResponse>): _5.QueryClockContractResponse;
                fromAmino(object: _5.QueryClockContractResponseAmino): _5.QueryClockContractResponse;
                toAmino(message: _5.QueryClockContractResponse): _5.QueryClockContractResponseAmino;
                fromAminoMsg(object: _5.QueryClockContractResponseAminoMsg): _5.QueryClockContractResponse;
                fromProtoMsg(message: _5.QueryClockContractResponseProtoMsg): _5.QueryClockContractResponse;
                toProto(message: _5.QueryClockContractResponse): Uint8Array;
                toProtoMsg(message: _5.QueryClockContractResponse): _5.QueryClockContractResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _5.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryParamsRequest;
                fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
                fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
                toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
                fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
                fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
                toProto(message: _5.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _5.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryParamsResponse;
                fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
                fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
                toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
                fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
                fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
                toProto(message: _5.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _4.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
                fromAmino(object: _4.ParamsAmino): _4.Params;
                toAmino(message: _4.Params): _4.ParamsAmino;
                fromAminoMsg(object: _4.ParamsAminoMsg): _4.Params;
                fromProtoMsg(message: _4.ParamsProtoMsg): _4.Params;
                toProto(message: _4.Params): Uint8Array;
                toProtoMsg(message: _4.Params): _4.ParamsProtoMsg;
            };
            ClockContract: {
                typeUrl: string;
                encode(message: _3.ClockContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.ClockContract;
                fromPartial(object: Partial<_3.ClockContract>): _3.ClockContract;
                fromAmino(object: _3.ClockContractAmino): _3.ClockContract;
                toAmino(message: _3.ClockContract): _3.ClockContractAmino;
                fromAminoMsg(object: _3.ClockContractAminoMsg): _3.ClockContract;
                fromProtoMsg(message: _3.ClockContractProtoMsg): _3.ClockContract;
                toProto(message: _3.ClockContract): Uint8Array;
                toProtoMsg(message: _3.ClockContract): _3.ClockContractProtoMsg;
            };
        };
    }
    namespace cwhooks {
        const v1: {
            MsgClientImpl: typeof _212.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                stakingContracts(request?: _8.QueryStakingContractsRequest): Promise<_8.QueryStakingContractsResponse>;
                governanceContracts(request?: _8.QueryGovernanceContractsRequest): Promise<_8.QueryGovernanceContractsResponse>;
            };
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _9.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerStaking(value: _9.MsgRegisterStaking): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterStaking(value: _9.MsgUnregisterStaking): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerGovernance(value: _9.MsgRegisterGovernance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterGovernance(value: _9.MsgUnregisterGovernance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _9.MsgUpdateParams): {
                        typeUrl: string;
                        value: _9.MsgUpdateParams;
                    };
                    registerStaking(value: _9.MsgRegisterStaking): {
                        typeUrl: string;
                        value: _9.MsgRegisterStaking;
                    };
                    unregisterStaking(value: _9.MsgUnregisterStaking): {
                        typeUrl: string;
                        value: _9.MsgUnregisterStaking;
                    };
                    registerGovernance(value: _9.MsgRegisterGovernance): {
                        typeUrl: string;
                        value: _9.MsgRegisterGovernance;
                    };
                    unregisterGovernance(value: _9.MsgUnregisterGovernance): {
                        typeUrl: string;
                        value: _9.MsgUnregisterGovernance;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _9.MsgUpdateParams;
                    };
                    registerStaking(value: any): {
                        typeUrl: string;
                        value: _9.MsgRegisterStaking;
                    };
                    unregisterStaking(value: any): {
                        typeUrl: string;
                        value: _9.MsgUnregisterStaking;
                    };
                    registerGovernance(value: any): {
                        typeUrl: string;
                        value: _9.MsgRegisterGovernance;
                    };
                    unregisterGovernance(value: any): {
                        typeUrl: string;
                        value: _9.MsgUnregisterGovernance;
                    };
                };
                fromPartial: {
                    updateParams(value: _9.MsgUpdateParams): {
                        typeUrl: string;
                        value: _9.MsgUpdateParams;
                    };
                    registerStaking(value: _9.MsgRegisterStaking): {
                        typeUrl: string;
                        value: _9.MsgRegisterStaking;
                    };
                    unregisterStaking(value: _9.MsgUnregisterStaking): {
                        typeUrl: string;
                        value: _9.MsgUnregisterStaking;
                    };
                    registerGovernance(value: _9.MsgRegisterGovernance): {
                        typeUrl: string;
                        value: _9.MsgRegisterGovernance;
                    };
                    unregisterGovernance(value: _9.MsgUnregisterGovernance): {
                        typeUrl: string;
                        value: _9.MsgUnregisterGovernance;
                    };
                };
            };
            AminoConverter: {
                "/juno.cwhooks.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _9.MsgUpdateParams) => _9.MsgUpdateParamsAmino;
                    fromAmino: (object: _9.MsgUpdateParamsAmino) => _9.MsgUpdateParams;
                };
                "/juno.cwhooks.v1.MsgRegisterStaking": {
                    aminoType: string;
                    toAmino: (message: _9.MsgRegisterStaking) => _9.MsgRegisterStakingAmino;
                    fromAmino: (object: _9.MsgRegisterStakingAmino) => _9.MsgRegisterStaking;
                };
                "/juno.cwhooks.v1.MsgUnregisterStaking": {
                    aminoType: string;
                    toAmino: (message: _9.MsgUnregisterStaking) => _9.MsgUnregisterStakingAmino;
                    fromAmino: (object: _9.MsgUnregisterStakingAmino) => _9.MsgUnregisterStaking;
                };
                "/juno.cwhooks.v1.MsgRegisterGovernance": {
                    aminoType: string;
                    toAmino: (message: _9.MsgRegisterGovernance) => _9.MsgRegisterGovernanceAmino;
                    fromAmino: (object: _9.MsgRegisterGovernanceAmino) => _9.MsgRegisterGovernance;
                };
                "/juno.cwhooks.v1.MsgUnregisterGovernance": {
                    aminoType: string;
                    toAmino: (message: _9.MsgUnregisterGovernance) => _9.MsgUnregisterGovernanceAmino;
                    fromAmino: (object: _9.MsgUnregisterGovernanceAmino) => _9.MsgUnregisterGovernance;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _9.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgUpdateParams;
                fromPartial(object: Partial<_9.MsgUpdateParams>): _9.MsgUpdateParams;
                fromAmino(object: _9.MsgUpdateParamsAmino): _9.MsgUpdateParams;
                toAmino(message: _9.MsgUpdateParams): _9.MsgUpdateParamsAmino;
                fromAminoMsg(object: _9.MsgUpdateParamsAminoMsg): _9.MsgUpdateParams;
                fromProtoMsg(message: _9.MsgUpdateParamsProtoMsg): _9.MsgUpdateParams;
                toProto(message: _9.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _9.MsgUpdateParams): _9.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _9.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_9.MsgUpdateParamsResponse>): _9.MsgUpdateParamsResponse;
                fromAmino(_: _9.MsgUpdateParamsResponseAmino): _9.MsgUpdateParamsResponse;
                toAmino(_: _9.MsgUpdateParamsResponse): _9.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _9.MsgUpdateParamsResponseAminoMsg): _9.MsgUpdateParamsResponse;
                fromProtoMsg(message: _9.MsgUpdateParamsResponseProtoMsg): _9.MsgUpdateParamsResponse;
                toProto(message: _9.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _9.MsgUpdateParamsResponse): _9.MsgUpdateParamsResponseProtoMsg;
            };
            MsgRegisterStaking: {
                typeUrl: string;
                encode(message: _9.MsgRegisterStaking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgRegisterStaking;
                fromPartial(object: Partial<_9.MsgRegisterStaking>): _9.MsgRegisterStaking;
                fromAmino(object: _9.MsgRegisterStakingAmino): _9.MsgRegisterStaking;
                toAmino(message: _9.MsgRegisterStaking): _9.MsgRegisterStakingAmino;
                fromAminoMsg(object: _9.MsgRegisterStakingAminoMsg): _9.MsgRegisterStaking;
                fromProtoMsg(message: _9.MsgRegisterStakingProtoMsg): _9.MsgRegisterStaking;
                toProto(message: _9.MsgRegisterStaking): Uint8Array;
                toProtoMsg(message: _9.MsgRegisterStaking): _9.MsgRegisterStakingProtoMsg;
            };
            MsgRegisterStakingResponse: {
                typeUrl: string;
                encode(_: _9.MsgRegisterStakingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgRegisterStakingResponse;
                fromPartial(_: Partial<_9.MsgRegisterStakingResponse>): _9.MsgRegisterStakingResponse;
                fromAmino(_: _9.MsgRegisterStakingResponseAmino): _9.MsgRegisterStakingResponse;
                toAmino(_: _9.MsgRegisterStakingResponse): _9.MsgRegisterStakingResponseAmino;
                fromAminoMsg(object: _9.MsgRegisterStakingResponseAminoMsg): _9.MsgRegisterStakingResponse;
                fromProtoMsg(message: _9.MsgRegisterStakingResponseProtoMsg): _9.MsgRegisterStakingResponse;
                toProto(message: _9.MsgRegisterStakingResponse): Uint8Array;
                toProtoMsg(message: _9.MsgRegisterStakingResponse): _9.MsgRegisterStakingResponseProtoMsg;
            };
            MsgRegisterGovernance: {
                typeUrl: string;
                encode(message: _9.MsgRegisterGovernance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgRegisterGovernance;
                fromPartial(object: Partial<_9.MsgRegisterGovernance>): _9.MsgRegisterGovernance;
                fromAmino(object: _9.MsgRegisterGovernanceAmino): _9.MsgRegisterGovernance;
                toAmino(message: _9.MsgRegisterGovernance): _9.MsgRegisterGovernanceAmino;
                fromAminoMsg(object: _9.MsgRegisterGovernanceAminoMsg): _9.MsgRegisterGovernance;
                fromProtoMsg(message: _9.MsgRegisterGovernanceProtoMsg): _9.MsgRegisterGovernance;
                toProto(message: _9.MsgRegisterGovernance): Uint8Array;
                toProtoMsg(message: _9.MsgRegisterGovernance): _9.MsgRegisterGovernanceProtoMsg;
            };
            MsgRegisterGovernanceResponse: {
                typeUrl: string;
                encode(_: _9.MsgRegisterGovernanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgRegisterGovernanceResponse;
                fromPartial(_: Partial<_9.MsgRegisterGovernanceResponse>): _9.MsgRegisterGovernanceResponse;
                fromAmino(_: _9.MsgRegisterGovernanceResponseAmino): _9.MsgRegisterGovernanceResponse;
                toAmino(_: _9.MsgRegisterGovernanceResponse): _9.MsgRegisterGovernanceResponseAmino;
                fromAminoMsg(object: _9.MsgRegisterGovernanceResponseAminoMsg): _9.MsgRegisterGovernanceResponse;
                fromProtoMsg(message: _9.MsgRegisterGovernanceResponseProtoMsg): _9.MsgRegisterGovernanceResponse;
                toProto(message: _9.MsgRegisterGovernanceResponse): Uint8Array;
                toProtoMsg(message: _9.MsgRegisterGovernanceResponse): _9.MsgRegisterGovernanceResponseProtoMsg;
            };
            MsgUnregisterGovernance: {
                typeUrl: string;
                encode(message: _9.MsgUnregisterGovernance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgUnregisterGovernance;
                fromPartial(object: Partial<_9.MsgUnregisterGovernance>): _9.MsgUnregisterGovernance;
                fromAmino(object: _9.MsgUnregisterGovernanceAmino): _9.MsgUnregisterGovernance;
                toAmino(message: _9.MsgUnregisterGovernance): _9.MsgUnregisterGovernanceAmino;
                fromAminoMsg(object: _9.MsgUnregisterGovernanceAminoMsg): _9.MsgUnregisterGovernance;
                fromProtoMsg(message: _9.MsgUnregisterGovernanceProtoMsg): _9.MsgUnregisterGovernance;
                toProto(message: _9.MsgUnregisterGovernance): Uint8Array;
                toProtoMsg(message: _9.MsgUnregisterGovernance): _9.MsgUnregisterGovernanceProtoMsg;
            };
            MsgUnregisterGovernanceResponse: {
                typeUrl: string;
                encode(_: _9.MsgUnregisterGovernanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgUnregisterGovernanceResponse;
                fromPartial(_: Partial<_9.MsgUnregisterGovernanceResponse>): _9.MsgUnregisterGovernanceResponse;
                fromAmino(_: _9.MsgUnregisterGovernanceResponseAmino): _9.MsgUnregisterGovernanceResponse;
                toAmino(_: _9.MsgUnregisterGovernanceResponse): _9.MsgUnregisterGovernanceResponseAmino;
                fromAminoMsg(object: _9.MsgUnregisterGovernanceResponseAminoMsg): _9.MsgUnregisterGovernanceResponse;
                fromProtoMsg(message: _9.MsgUnregisterGovernanceResponseProtoMsg): _9.MsgUnregisterGovernanceResponse;
                toProto(message: _9.MsgUnregisterGovernanceResponse): Uint8Array;
                toProtoMsg(message: _9.MsgUnregisterGovernanceResponse): _9.MsgUnregisterGovernanceResponseProtoMsg;
            };
            MsgUnregisterStaking: {
                typeUrl: string;
                encode(message: _9.MsgUnregisterStaking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgUnregisterStaking;
                fromPartial(object: Partial<_9.MsgUnregisterStaking>): _9.MsgUnregisterStaking;
                fromAmino(object: _9.MsgUnregisterStakingAmino): _9.MsgUnregisterStaking;
                toAmino(message: _9.MsgUnregisterStaking): _9.MsgUnregisterStakingAmino;
                fromAminoMsg(object: _9.MsgUnregisterStakingAminoMsg): _9.MsgUnregisterStaking;
                fromProtoMsg(message: _9.MsgUnregisterStakingProtoMsg): _9.MsgUnregisterStaking;
                toProto(message: _9.MsgUnregisterStaking): Uint8Array;
                toProtoMsg(message: _9.MsgUnregisterStaking): _9.MsgUnregisterStakingProtoMsg;
            };
            MsgUnregisterStakingResponse: {
                typeUrl: string;
                encode(_: _9.MsgUnregisterStakingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgUnregisterStakingResponse;
                fromPartial(_: Partial<_9.MsgUnregisterStakingResponse>): _9.MsgUnregisterStakingResponse;
                fromAmino(_: _9.MsgUnregisterStakingResponseAmino): _9.MsgUnregisterStakingResponse;
                toAmino(_: _9.MsgUnregisterStakingResponse): _9.MsgUnregisterStakingResponseAmino;
                fromAminoMsg(object: _9.MsgUnregisterStakingResponseAminoMsg): _9.MsgUnregisterStakingResponse;
                fromProtoMsg(message: _9.MsgUnregisterStakingResponseProtoMsg): _9.MsgUnregisterStakingResponse;
                toProto(message: _9.MsgUnregisterStakingResponse): Uint8Array;
                toProtoMsg(message: _9.MsgUnregisterStakingResponse): _9.MsgUnregisterStakingResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _8.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryParamsRequest;
                fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
                fromAmino(_: _8.QueryParamsRequestAmino): _8.QueryParamsRequest;
                toAmino(_: _8.QueryParamsRequest): _8.QueryParamsRequestAmino;
                fromAminoMsg(object: _8.QueryParamsRequestAminoMsg): _8.QueryParamsRequest;
                fromProtoMsg(message: _8.QueryParamsRequestProtoMsg): _8.QueryParamsRequest;
                toProto(message: _8.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _8.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryParamsResponse;
                fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
                fromAmino(object: _8.QueryParamsResponseAmino): _8.QueryParamsResponse;
                toAmino(message: _8.QueryParamsResponse): _8.QueryParamsResponseAmino;
                fromAminoMsg(object: _8.QueryParamsResponseAminoMsg): _8.QueryParamsResponse;
                fromProtoMsg(message: _8.QueryParamsResponseProtoMsg): _8.QueryParamsResponse;
                toProto(message: _8.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseProtoMsg;
            };
            QueryStakingContractsRequest: {
                typeUrl: string;
                encode(_: _8.QueryStakingContractsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryStakingContractsRequest;
                fromPartial(_: Partial<_8.QueryStakingContractsRequest>): _8.QueryStakingContractsRequest;
                fromAmino(_: _8.QueryStakingContractsRequestAmino): _8.QueryStakingContractsRequest;
                toAmino(_: _8.QueryStakingContractsRequest): _8.QueryStakingContractsRequestAmino;
                fromAminoMsg(object: _8.QueryStakingContractsRequestAminoMsg): _8.QueryStakingContractsRequest;
                fromProtoMsg(message: _8.QueryStakingContractsRequestProtoMsg): _8.QueryStakingContractsRequest;
                toProto(message: _8.QueryStakingContractsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryStakingContractsRequest): _8.QueryStakingContractsRequestProtoMsg;
            };
            QueryStakingContractsResponse: {
                typeUrl: string;
                encode(message: _8.QueryStakingContractsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryStakingContractsResponse;
                fromPartial(object: Partial<_8.QueryStakingContractsResponse>): _8.QueryStakingContractsResponse;
                fromAmino(object: _8.QueryStakingContractsResponseAmino): _8.QueryStakingContractsResponse;
                toAmino(message: _8.QueryStakingContractsResponse): _8.QueryStakingContractsResponseAmino;
                fromAminoMsg(object: _8.QueryStakingContractsResponseAminoMsg): _8.QueryStakingContractsResponse;
                fromProtoMsg(message: _8.QueryStakingContractsResponseProtoMsg): _8.QueryStakingContractsResponse;
                toProto(message: _8.QueryStakingContractsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryStakingContractsResponse): _8.QueryStakingContractsResponseProtoMsg;
            };
            QueryGovernanceContractsRequest: {
                typeUrl: string;
                encode(_: _8.QueryGovernanceContractsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryGovernanceContractsRequest;
                fromPartial(_: Partial<_8.QueryGovernanceContractsRequest>): _8.QueryGovernanceContractsRequest;
                fromAmino(_: _8.QueryGovernanceContractsRequestAmino): _8.QueryGovernanceContractsRequest;
                toAmino(_: _8.QueryGovernanceContractsRequest): _8.QueryGovernanceContractsRequestAmino;
                fromAminoMsg(object: _8.QueryGovernanceContractsRequestAminoMsg): _8.QueryGovernanceContractsRequest;
                fromProtoMsg(message: _8.QueryGovernanceContractsRequestProtoMsg): _8.QueryGovernanceContractsRequest;
                toProto(message: _8.QueryGovernanceContractsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGovernanceContractsRequest): _8.QueryGovernanceContractsRequestProtoMsg;
            };
            QueryGovernanceContractsResponse: {
                typeUrl: string;
                encode(message: _8.QueryGovernanceContractsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGovernanceContractsResponse;
                fromPartial(object: Partial<_8.QueryGovernanceContractsResponse>): _8.QueryGovernanceContractsResponse;
                fromAmino(object: _8.QueryGovernanceContractsResponseAmino): _8.QueryGovernanceContractsResponse;
                toAmino(message: _8.QueryGovernanceContractsResponse): _8.QueryGovernanceContractsResponseAmino;
                fromAminoMsg(object: _8.QueryGovernanceContractsResponseAminoMsg): _8.QueryGovernanceContractsResponse;
                fromProtoMsg(message: _8.QueryGovernanceContractsResponseProtoMsg): _8.QueryGovernanceContractsResponse;
                toProto(message: _8.QueryGovernanceContractsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGovernanceContractsResponse): _8.QueryGovernanceContractsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _7.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenesisState;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _7.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Params;
                fromPartial(object: Partial<_7.Params>): _7.Params;
                fromAmino(object: _7.ParamsAmino): _7.Params;
                toAmino(message: _7.Params): _7.ParamsAmino;
                fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
                fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
                toProto(message: _7.Params): Uint8Array;
                toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
            };
        };
    }
    namespace drip {
        const v1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    distributeTokens(value: _12.MsgDistributeTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    distributeTokens(value: _12.MsgDistributeTokens): {
                        typeUrl: string;
                        value: _12.MsgDistributeTokens;
                    };
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: _12.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    distributeTokens(value: any): {
                        typeUrl: string;
                        value: _12.MsgDistributeTokens;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _12.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    distributeTokens(value: _12.MsgDistributeTokens): {
                        typeUrl: string;
                        value: _12.MsgDistributeTokens;
                    };
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: _12.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/juno.drip.v1.MsgDistributeTokens": {
                    aminoType: string;
                    toAmino: (message: _12.MsgDistributeTokens) => _12.MsgDistributeTokensAmino;
                    fromAmino: (object: _12.MsgDistributeTokensAmino) => _12.MsgDistributeTokens;
                };
                "/juno.drip.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _12.MsgUpdateParams) => _12.MsgUpdateParamsAmino;
                    fromAmino: (object: _12.MsgUpdateParamsAmino) => _12.MsgUpdateParams;
                };
            };
            MsgDistributeTokens: {
                typeUrl: string;
                encode(message: _12.MsgDistributeTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgDistributeTokens;
                fromPartial(object: Partial<_12.MsgDistributeTokens>): _12.MsgDistributeTokens;
                fromAmino(object: _12.MsgDistributeTokensAmino): _12.MsgDistributeTokens;
                toAmino(message: _12.MsgDistributeTokens): _12.MsgDistributeTokensAmino;
                fromAminoMsg(object: _12.MsgDistributeTokensAminoMsg): _12.MsgDistributeTokens;
                fromProtoMsg(message: _12.MsgDistributeTokensProtoMsg): _12.MsgDistributeTokens;
                toProto(message: _12.MsgDistributeTokens): Uint8Array;
                toProtoMsg(message: _12.MsgDistributeTokens): _12.MsgDistributeTokensProtoMsg;
            };
            MsgDistributeTokensResponse: {
                typeUrl: string;
                encode(_: _12.MsgDistributeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgDistributeTokensResponse;
                fromPartial(_: Partial<_12.MsgDistributeTokensResponse>): _12.MsgDistributeTokensResponse;
                fromAmino(_: _12.MsgDistributeTokensResponseAmino): _12.MsgDistributeTokensResponse;
                toAmino(_: _12.MsgDistributeTokensResponse): _12.MsgDistributeTokensResponseAmino;
                fromAminoMsg(object: _12.MsgDistributeTokensResponseAminoMsg): _12.MsgDistributeTokensResponse;
                fromProtoMsg(message: _12.MsgDistributeTokensResponseProtoMsg): _12.MsgDistributeTokensResponse;
                toProto(message: _12.MsgDistributeTokensResponse): Uint8Array;
                toProtoMsg(message: _12.MsgDistributeTokensResponse): _12.MsgDistributeTokensResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _12.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgUpdateParams;
                fromPartial(object: Partial<_12.MsgUpdateParams>): _12.MsgUpdateParams;
                fromAmino(object: _12.MsgUpdateParamsAmino): _12.MsgUpdateParams;
                toAmino(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAmino;
                fromAminoMsg(object: _12.MsgUpdateParamsAminoMsg): _12.MsgUpdateParams;
                toAminoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _12.MsgUpdateParamsProtoMsg): _12.MsgUpdateParams;
                toProto(message: _12.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _12.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_12.MsgUpdateParamsResponse>): _12.MsgUpdateParamsResponse;
                fromAmino(_: _12.MsgUpdateParamsResponseAmino): _12.MsgUpdateParamsResponse;
                toAmino(_: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _12.MsgUpdateParamsResponseAminoMsg): _12.MsgUpdateParamsResponse;
                fromProtoMsg(message: _12.MsgUpdateParamsResponseProtoMsg): _12.MsgUpdateParamsResponse;
                toProto(message: _12.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _11.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.QueryParamsRequest;
                fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
                fromAmino(_: _11.QueryParamsRequestAmino): _11.QueryParamsRequest;
                toAmino(_: _11.QueryParamsRequest): _11.QueryParamsRequestAmino;
                fromAminoMsg(object: _11.QueryParamsRequestAminoMsg): _11.QueryParamsRequest;
                fromProtoMsg(message: _11.QueryParamsRequestProtoMsg): _11.QueryParamsRequest;
                toProto(message: _11.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _11.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryParamsResponse;
                fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
                fromAmino(object: _11.QueryParamsResponseAmino): _11.QueryParamsResponse;
                toAmino(message: _11.QueryParamsResponse): _11.QueryParamsResponseAmino;
                fromAminoMsg(object: _11.QueryParamsResponseAminoMsg): _11.QueryParamsResponse;
                fromProtoMsg(message: _11.QueryParamsResponseProtoMsg): _11.QueryParamsResponse;
                toProto(message: _11.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _10.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Params;
                fromPartial(object: Partial<_10.Params>): _10.Params;
                fromAmino(object: _10.ParamsAmino): _10.Params;
                toAmino(message: _10.Params): _10.ParamsAmino;
                fromAminoMsg(object: _10.ParamsAminoMsg): _10.Params;
                fromProtoMsg(message: _10.ParamsProtoMsg): _10.Params;
                toProto(message: _10.Params): Uint8Array;
                toProtoMsg(message: _10.Params): _10.ParamsProtoMsg;
            };
        };
    }
    namespace feepay {
        const v1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feePayContract(request: _15.QueryFeePayContract): Promise<_15.QueryFeePayContractResponse>;
                feePayContracts(request?: _15.QueryFeePayContracts): Promise<_15.QueryFeePayContractsResponse>;
                feePayContractUses(request: _15.QueryFeePayContractUses): Promise<_15.QueryFeePayContractUsesResponse>;
                feePayWalletIsEligible(request: _15.QueryFeePayWalletIsEligible): Promise<_15.QueryFeePayWalletIsEligibleResponse>;
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeePayContract(value: _16.MsgRegisterFeePayContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterFeePayContract(value: _16.MsgUnregisterFeePayContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundFeePayContract(value: _16.MsgFundFeePayContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeePayContractWalletLimit(value: _16.MsgUpdateFeePayContractWalletLimit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _16.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeePayContract(value: _16.MsgRegisterFeePayContract): {
                        typeUrl: string;
                        value: _16.MsgRegisterFeePayContract;
                    };
                    unregisterFeePayContract(value: _16.MsgUnregisterFeePayContract): {
                        typeUrl: string;
                        value: _16.MsgUnregisterFeePayContract;
                    };
                    fundFeePayContract(value: _16.MsgFundFeePayContract): {
                        typeUrl: string;
                        value: _16.MsgFundFeePayContract;
                    };
                    updateFeePayContractWalletLimit(value: _16.MsgUpdateFeePayContractWalletLimit): {
                        typeUrl: string;
                        value: _16.MsgUpdateFeePayContractWalletLimit;
                    };
                    updateParams(value: _16.MsgUpdateParams): {
                        typeUrl: string;
                        value: _16.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    registerFeePayContract(value: any): {
                        typeUrl: string;
                        value: _16.MsgRegisterFeePayContract;
                    };
                    unregisterFeePayContract(value: any): {
                        typeUrl: string;
                        value: _16.MsgUnregisterFeePayContract;
                    };
                    fundFeePayContract(value: any): {
                        typeUrl: string;
                        value: _16.MsgFundFeePayContract;
                    };
                    updateFeePayContractWalletLimit(value: any): {
                        typeUrl: string;
                        value: _16.MsgUpdateFeePayContractWalletLimit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _16.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerFeePayContract(value: _16.MsgRegisterFeePayContract): {
                        typeUrl: string;
                        value: _16.MsgRegisterFeePayContract;
                    };
                    unregisterFeePayContract(value: _16.MsgUnregisterFeePayContract): {
                        typeUrl: string;
                        value: _16.MsgUnregisterFeePayContract;
                    };
                    fundFeePayContract(value: _16.MsgFundFeePayContract): {
                        typeUrl: string;
                        value: _16.MsgFundFeePayContract;
                    };
                    updateFeePayContractWalletLimit(value: _16.MsgUpdateFeePayContractWalletLimit): {
                        typeUrl: string;
                        value: _16.MsgUpdateFeePayContractWalletLimit;
                    };
                    updateParams(value: _16.MsgUpdateParams): {
                        typeUrl: string;
                        value: _16.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/juno.feepay.v1.MsgRegisterFeePayContract": {
                    aminoType: string;
                    toAmino: (message: _16.MsgRegisterFeePayContract) => _16.MsgRegisterFeePayContractAmino;
                    fromAmino: (object: _16.MsgRegisterFeePayContractAmino) => _16.MsgRegisterFeePayContract;
                };
                "/juno.feepay.v1.MsgUnregisterFeePayContract": {
                    aminoType: string;
                    toAmino: (message: _16.MsgUnregisterFeePayContract) => _16.MsgUnregisterFeePayContractAmino;
                    fromAmino: (object: _16.MsgUnregisterFeePayContractAmino) => _16.MsgUnregisterFeePayContract;
                };
                "/juno.feepay.v1.MsgFundFeePayContract": {
                    aminoType: string;
                    toAmino: (message: _16.MsgFundFeePayContract) => _16.MsgFundFeePayContractAmino;
                    fromAmino: (object: _16.MsgFundFeePayContractAmino) => _16.MsgFundFeePayContract;
                };
                "/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit": {
                    aminoType: string;
                    toAmino: (message: _16.MsgUpdateFeePayContractWalletLimit) => _16.MsgUpdateFeePayContractWalletLimitAmino;
                    fromAmino: (object: _16.MsgUpdateFeePayContractWalletLimitAmino) => _16.MsgUpdateFeePayContractWalletLimit;
                };
                "/juno.feepay.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _16.MsgUpdateParams) => _16.MsgUpdateParamsAmino;
                    fromAmino: (object: _16.MsgUpdateParamsAmino) => _16.MsgUpdateParams;
                };
            };
            MsgRegisterFeePayContract: {
                typeUrl: string;
                encode(message: _16.MsgRegisterFeePayContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgRegisterFeePayContract;
                fromPartial(object: Partial<_16.MsgRegisterFeePayContract>): _16.MsgRegisterFeePayContract;
                fromAmino(object: _16.MsgRegisterFeePayContractAmino): _16.MsgRegisterFeePayContract;
                toAmino(message: _16.MsgRegisterFeePayContract): _16.MsgRegisterFeePayContractAmino;
                fromAminoMsg(object: _16.MsgRegisterFeePayContractAminoMsg): _16.MsgRegisterFeePayContract;
                fromProtoMsg(message: _16.MsgRegisterFeePayContractProtoMsg): _16.MsgRegisterFeePayContract;
                toProto(message: _16.MsgRegisterFeePayContract): Uint8Array;
                toProtoMsg(message: _16.MsgRegisterFeePayContract): _16.MsgRegisterFeePayContractProtoMsg;
            };
            MsgRegisterFeePayContractResponse: {
                typeUrl: string;
                encode(_: _16.MsgRegisterFeePayContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgRegisterFeePayContractResponse;
                fromPartial(_: Partial<_16.MsgRegisterFeePayContractResponse>): _16.MsgRegisterFeePayContractResponse;
                fromAmino(_: _16.MsgRegisterFeePayContractResponseAmino): _16.MsgRegisterFeePayContractResponse;
                toAmino(_: _16.MsgRegisterFeePayContractResponse): _16.MsgRegisterFeePayContractResponseAmino;
                fromAminoMsg(object: _16.MsgRegisterFeePayContractResponseAminoMsg): _16.MsgRegisterFeePayContractResponse;
                fromProtoMsg(message: _16.MsgRegisterFeePayContractResponseProtoMsg): _16.MsgRegisterFeePayContractResponse;
                toProto(message: _16.MsgRegisterFeePayContractResponse): Uint8Array;
                toProtoMsg(message: _16.MsgRegisterFeePayContractResponse): _16.MsgRegisterFeePayContractResponseProtoMsg;
            };
            MsgUnregisterFeePayContract: {
                typeUrl: string;
                encode(message: _16.MsgUnregisterFeePayContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgUnregisterFeePayContract;
                fromPartial(object: Partial<_16.MsgUnregisterFeePayContract>): _16.MsgUnregisterFeePayContract;
                fromAmino(object: _16.MsgUnregisterFeePayContractAmino): _16.MsgUnregisterFeePayContract;
                toAmino(message: _16.MsgUnregisterFeePayContract): _16.MsgUnregisterFeePayContractAmino;
                fromAminoMsg(object: _16.MsgUnregisterFeePayContractAminoMsg): _16.MsgUnregisterFeePayContract;
                fromProtoMsg(message: _16.MsgUnregisterFeePayContractProtoMsg): _16.MsgUnregisterFeePayContract;
                toProto(message: _16.MsgUnregisterFeePayContract): Uint8Array;
                toProtoMsg(message: _16.MsgUnregisterFeePayContract): _16.MsgUnregisterFeePayContractProtoMsg;
            };
            MsgUnregisterFeePayContractResponse: {
                typeUrl: string;
                encode(_: _16.MsgUnregisterFeePayContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgUnregisterFeePayContractResponse;
                fromPartial(_: Partial<_16.MsgUnregisterFeePayContractResponse>): _16.MsgUnregisterFeePayContractResponse;
                fromAmino(_: _16.MsgUnregisterFeePayContractResponseAmino): _16.MsgUnregisterFeePayContractResponse;
                toAmino(_: _16.MsgUnregisterFeePayContractResponse): _16.MsgUnregisterFeePayContractResponseAmino;
                fromAminoMsg(object: _16.MsgUnregisterFeePayContractResponseAminoMsg): _16.MsgUnregisterFeePayContractResponse;
                fromProtoMsg(message: _16.MsgUnregisterFeePayContractResponseProtoMsg): _16.MsgUnregisterFeePayContractResponse;
                toProto(message: _16.MsgUnregisterFeePayContractResponse): Uint8Array;
                toProtoMsg(message: _16.MsgUnregisterFeePayContractResponse): _16.MsgUnregisterFeePayContractResponseProtoMsg;
            };
            MsgFundFeePayContract: {
                typeUrl: string;
                encode(message: _16.MsgFundFeePayContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgFundFeePayContract;
                fromPartial(object: Partial<_16.MsgFundFeePayContract>): _16.MsgFundFeePayContract;
                fromAmino(object: _16.MsgFundFeePayContractAmino): _16.MsgFundFeePayContract;
                toAmino(message: _16.MsgFundFeePayContract): _16.MsgFundFeePayContractAmino;
                fromAminoMsg(object: _16.MsgFundFeePayContractAminoMsg): _16.MsgFundFeePayContract;
                fromProtoMsg(message: _16.MsgFundFeePayContractProtoMsg): _16.MsgFundFeePayContract;
                toProto(message: _16.MsgFundFeePayContract): Uint8Array;
                toProtoMsg(message: _16.MsgFundFeePayContract): _16.MsgFundFeePayContractProtoMsg;
            };
            MsgFundFeePayContractResponse: {
                typeUrl: string;
                encode(_: _16.MsgFundFeePayContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgFundFeePayContractResponse;
                fromPartial(_: Partial<_16.MsgFundFeePayContractResponse>): _16.MsgFundFeePayContractResponse;
                fromAmino(_: _16.MsgFundFeePayContractResponseAmino): _16.MsgFundFeePayContractResponse;
                toAmino(_: _16.MsgFundFeePayContractResponse): _16.MsgFundFeePayContractResponseAmino;
                fromAminoMsg(object: _16.MsgFundFeePayContractResponseAminoMsg): _16.MsgFundFeePayContractResponse;
                fromProtoMsg(message: _16.MsgFundFeePayContractResponseProtoMsg): _16.MsgFundFeePayContractResponse;
                toProto(message: _16.MsgFundFeePayContractResponse): Uint8Array;
                toProtoMsg(message: _16.MsgFundFeePayContractResponse): _16.MsgFundFeePayContractResponseProtoMsg;
            };
            MsgUpdateFeePayContractWalletLimit: {
                typeUrl: string;
                encode(message: _16.MsgUpdateFeePayContractWalletLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgUpdateFeePayContractWalletLimit;
                fromPartial(object: Partial<_16.MsgUpdateFeePayContractWalletLimit>): _16.MsgUpdateFeePayContractWalletLimit;
                fromAmino(object: _16.MsgUpdateFeePayContractWalletLimitAmino): _16.MsgUpdateFeePayContractWalletLimit;
                toAmino(message: _16.MsgUpdateFeePayContractWalletLimit): _16.MsgUpdateFeePayContractWalletLimitAmino;
                fromAminoMsg(object: _16.MsgUpdateFeePayContractWalletLimitAminoMsg): _16.MsgUpdateFeePayContractWalletLimit;
                fromProtoMsg(message: _16.MsgUpdateFeePayContractWalletLimitProtoMsg): _16.MsgUpdateFeePayContractWalletLimit;
                toProto(message: _16.MsgUpdateFeePayContractWalletLimit): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateFeePayContractWalletLimit): _16.MsgUpdateFeePayContractWalletLimitProtoMsg;
            };
            MsgUpdateFeePayContractWalletLimitResponse: {
                typeUrl: string;
                encode(_: _16.MsgUpdateFeePayContractWalletLimitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgUpdateFeePayContractWalletLimitResponse;
                fromPartial(_: Partial<_16.MsgUpdateFeePayContractWalletLimitResponse>): _16.MsgUpdateFeePayContractWalletLimitResponse;
                fromAmino(_: _16.MsgUpdateFeePayContractWalletLimitResponseAmino): _16.MsgUpdateFeePayContractWalletLimitResponse;
                toAmino(_: _16.MsgUpdateFeePayContractWalletLimitResponse): _16.MsgUpdateFeePayContractWalletLimitResponseAmino;
                fromAminoMsg(object: _16.MsgUpdateFeePayContractWalletLimitResponseAminoMsg): _16.MsgUpdateFeePayContractWalletLimitResponse;
                fromProtoMsg(message: _16.MsgUpdateFeePayContractWalletLimitResponseProtoMsg): _16.MsgUpdateFeePayContractWalletLimitResponse;
                toProto(message: _16.MsgUpdateFeePayContractWalletLimitResponse): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateFeePayContractWalletLimitResponse): _16.MsgUpdateFeePayContractWalletLimitResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _16.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgUpdateParams;
                fromPartial(object: Partial<_16.MsgUpdateParams>): _16.MsgUpdateParams;
                fromAmino(object: _16.MsgUpdateParamsAmino): _16.MsgUpdateParams;
                toAmino(message: _16.MsgUpdateParams): _16.MsgUpdateParamsAmino;
                fromAminoMsg(object: _16.MsgUpdateParamsAminoMsg): _16.MsgUpdateParams;
                fromProtoMsg(message: _16.MsgUpdateParamsProtoMsg): _16.MsgUpdateParams;
                toProto(message: _16.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateParams): _16.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _16.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_16.MsgUpdateParamsResponse>): _16.MsgUpdateParamsResponse;
                fromAmino(_: _16.MsgUpdateParamsResponseAmino): _16.MsgUpdateParamsResponse;
                toAmino(_: _16.MsgUpdateParamsResponse): _16.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _16.MsgUpdateParamsResponseAminoMsg): _16.MsgUpdateParamsResponse;
                fromProtoMsg(message: _16.MsgUpdateParamsResponseProtoMsg): _16.MsgUpdateParamsResponse;
                toProto(message: _16.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _16.MsgUpdateParamsResponse): _16.MsgUpdateParamsResponseProtoMsg;
            };
            QueryFeePayContract: {
                typeUrl: string;
                encode(message: _15.QueryFeePayContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryFeePayContract;
                fromPartial(object: Partial<_15.QueryFeePayContract>): _15.QueryFeePayContract;
                fromAmino(object: _15.QueryFeePayContractAmino): _15.QueryFeePayContract;
                toAmino(message: _15.QueryFeePayContract): _15.QueryFeePayContractAmino;
                fromAminoMsg(object: _15.QueryFeePayContractAminoMsg): _15.QueryFeePayContract;
                fromProtoMsg(message: _15.QueryFeePayContractProtoMsg): _15.QueryFeePayContract;
                toProto(message: _15.QueryFeePayContract): Uint8Array;
                toProtoMsg(message: _15.QueryFeePayContract): _15.QueryFeePayContractProtoMsg;
            };
            QueryFeePayContractResponse: {
                typeUrl: string;
                encode(message: _15.QueryFeePayContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryFeePayContractResponse;
                fromPartial(object: Partial<_15.QueryFeePayContractResponse>): _15.QueryFeePayContractResponse;
                fromAmino(object: _15.QueryFeePayContractResponseAmino): _15.QueryFeePayContractResponse;
                toAmino(message: _15.QueryFeePayContractResponse): _15.QueryFeePayContractResponseAmino;
                fromAminoMsg(object: _15.QueryFeePayContractResponseAminoMsg): _15.QueryFeePayContractResponse;
                fromProtoMsg(message: _15.QueryFeePayContractResponseProtoMsg): _15.QueryFeePayContractResponse;
                toProto(message: _15.QueryFeePayContractResponse): Uint8Array;
                toProtoMsg(message: _15.QueryFeePayContractResponse): _15.QueryFeePayContractResponseProtoMsg;
            };
            QueryFeePayContracts: {
                typeUrl: string;
                encode(message: _15.QueryFeePayContracts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryFeePayContracts;
                fromPartial(object: Partial<_15.QueryFeePayContracts>): _15.QueryFeePayContracts;
                fromAmino(object: _15.QueryFeePayContractsAmino): _15.QueryFeePayContracts;
                toAmino(message: _15.QueryFeePayContracts): _15.QueryFeePayContractsAmino;
                fromAminoMsg(object: _15.QueryFeePayContractsAminoMsg): _15.QueryFeePayContracts;
                fromProtoMsg(message: _15.QueryFeePayContractsProtoMsg): _15.QueryFeePayContracts;
                toProto(message: _15.QueryFeePayContracts): Uint8Array;
                toProtoMsg(message: _15.QueryFeePayContracts): _15.QueryFeePayContractsProtoMsg;
            };
            QueryFeePayContractsResponse: {
                typeUrl: string;
                encode(message: _15.QueryFeePayContractsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryFeePayContractsResponse;
                fromPartial(object: Partial<_15.QueryFeePayContractsResponse>): _15.QueryFeePayContractsResponse;
                fromAmino(object: _15.QueryFeePayContractsResponseAmino): _15.QueryFeePayContractsResponse;
                toAmino(message: _15.QueryFeePayContractsResponse): _15.QueryFeePayContractsResponseAmino;
                fromAminoMsg(object: _15.QueryFeePayContractsResponseAminoMsg): _15.QueryFeePayContractsResponse;
                fromProtoMsg(message: _15.QueryFeePayContractsResponseProtoMsg): _15.QueryFeePayContractsResponse;
                toProto(message: _15.QueryFeePayContractsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryFeePayContractsResponse): _15.QueryFeePayContractsResponseProtoMsg;
            };
            QueryFeePayContractUses: {
                typeUrl: string;
                encode(message: _15.QueryFeePayContractUses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryFeePayContractUses;
                fromPartial(object: Partial<_15.QueryFeePayContractUses>): _15.QueryFeePayContractUses;
                fromAmino(object: _15.QueryFeePayContractUsesAmino): _15.QueryFeePayContractUses;
                toAmino(message: _15.QueryFeePayContractUses): _15.QueryFeePayContractUsesAmino;
                fromAminoMsg(object: _15.QueryFeePayContractUsesAminoMsg): _15.QueryFeePayContractUses;
                fromProtoMsg(message: _15.QueryFeePayContractUsesProtoMsg): _15.QueryFeePayContractUses;
                toProto(message: _15.QueryFeePayContractUses): Uint8Array;
                toProtoMsg(message: _15.QueryFeePayContractUses): _15.QueryFeePayContractUsesProtoMsg;
            };
            QueryFeePayContractUsesResponse: {
                typeUrl: string;
                encode(message: _15.QueryFeePayContractUsesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryFeePayContractUsesResponse;
                fromPartial(object: Partial<_15.QueryFeePayContractUsesResponse>): _15.QueryFeePayContractUsesResponse;
                fromAmino(object: _15.QueryFeePayContractUsesResponseAmino): _15.QueryFeePayContractUsesResponse;
                toAmino(message: _15.QueryFeePayContractUsesResponse): _15.QueryFeePayContractUsesResponseAmino;
                fromAminoMsg(object: _15.QueryFeePayContractUsesResponseAminoMsg): _15.QueryFeePayContractUsesResponse;
                fromProtoMsg(message: _15.QueryFeePayContractUsesResponseProtoMsg): _15.QueryFeePayContractUsesResponse;
                toProto(message: _15.QueryFeePayContractUsesResponse): Uint8Array;
                toProtoMsg(message: _15.QueryFeePayContractUsesResponse): _15.QueryFeePayContractUsesResponseProtoMsg;
            };
            QueryFeePayWalletIsEligible: {
                typeUrl: string;
                encode(message: _15.QueryFeePayWalletIsEligible, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryFeePayWalletIsEligible;
                fromPartial(object: Partial<_15.QueryFeePayWalletIsEligible>): _15.QueryFeePayWalletIsEligible;
                fromAmino(object: _15.QueryFeePayWalletIsEligibleAmino): _15.QueryFeePayWalletIsEligible;
                toAmino(message: _15.QueryFeePayWalletIsEligible): _15.QueryFeePayWalletIsEligibleAmino;
                fromAminoMsg(object: _15.QueryFeePayWalletIsEligibleAminoMsg): _15.QueryFeePayWalletIsEligible;
                fromProtoMsg(message: _15.QueryFeePayWalletIsEligibleProtoMsg): _15.QueryFeePayWalletIsEligible;
                toProto(message: _15.QueryFeePayWalletIsEligible): Uint8Array;
                toProtoMsg(message: _15.QueryFeePayWalletIsEligible): _15.QueryFeePayWalletIsEligibleProtoMsg;
            };
            QueryFeePayWalletIsEligibleResponse: {
                typeUrl: string;
                encode(message: _15.QueryFeePayWalletIsEligibleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryFeePayWalletIsEligibleResponse;
                fromPartial(object: Partial<_15.QueryFeePayWalletIsEligibleResponse>): _15.QueryFeePayWalletIsEligibleResponse;
                fromAmino(object: _15.QueryFeePayWalletIsEligibleResponseAmino): _15.QueryFeePayWalletIsEligibleResponse;
                toAmino(message: _15.QueryFeePayWalletIsEligibleResponse): _15.QueryFeePayWalletIsEligibleResponseAmino;
                fromAminoMsg(object: _15.QueryFeePayWalletIsEligibleResponseAminoMsg): _15.QueryFeePayWalletIsEligibleResponse;
                fromProtoMsg(message: _15.QueryFeePayWalletIsEligibleResponseProtoMsg): _15.QueryFeePayWalletIsEligibleResponse;
                toProto(message: _15.QueryFeePayWalletIsEligibleResponse): Uint8Array;
                toProtoMsg(message: _15.QueryFeePayWalletIsEligibleResponse): _15.QueryFeePayWalletIsEligibleResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _15.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.QueryParamsRequest;
                fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
                fromAmino(_: _15.QueryParamsRequestAmino): _15.QueryParamsRequest;
                toAmino(_: _15.QueryParamsRequest): _15.QueryParamsRequestAmino;
                fromAminoMsg(object: _15.QueryParamsRequestAminoMsg): _15.QueryParamsRequest;
                fromProtoMsg(message: _15.QueryParamsRequestProtoMsg): _15.QueryParamsRequest;
                toProto(message: _15.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _15.QueryParamsRequest): _15.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _15.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryParamsResponse;
                fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
                fromAmino(object: _15.QueryParamsResponseAmino): _15.QueryParamsResponse;
                toAmino(message: _15.QueryParamsResponse): _15.QueryParamsResponseAmino;
                fromAminoMsg(object: _15.QueryParamsResponseAminoMsg): _15.QueryParamsResponse;
                fromProtoMsg(message: _15.QueryParamsResponseProtoMsg): _15.QueryParamsResponse;
                toProto(message: _15.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _15.QueryParamsResponse): _15.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _14.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
                fromAmino(object: _14.GenesisStateAmino): _14.GenesisState;
                toAmino(message: _14.GenesisState): _14.GenesisStateAmino;
                fromAminoMsg(object: _14.GenesisStateAminoMsg): _14.GenesisState;
                fromProtoMsg(message: _14.GenesisStateProtoMsg): _14.GenesisState;
                toProto(message: _14.GenesisState): Uint8Array;
                toProtoMsg(message: _14.GenesisState): _14.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _14.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Params;
                fromPartial(object: Partial<_14.Params>): _14.Params;
                fromAmino(object: _14.ParamsAmino): _14.Params;
                toAmino(message: _14.Params): _14.ParamsAmino;
                fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
                fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
                toProto(message: _14.Params): Uint8Array;
                toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
            };
            FeePayContract: {
                typeUrl: string;
                encode(message: _13.FeePayContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.FeePayContract;
                fromPartial(object: Partial<_13.FeePayContract>): _13.FeePayContract;
                fromAmino(object: _13.FeePayContractAmino): _13.FeePayContract;
                toAmino(message: _13.FeePayContract): _13.FeePayContractAmino;
                fromAminoMsg(object: _13.FeePayContractAminoMsg): _13.FeePayContract;
                fromProtoMsg(message: _13.FeePayContractProtoMsg): _13.FeePayContract;
                toProto(message: _13.FeePayContract): Uint8Array;
                toProtoMsg(message: _13.FeePayContract): _13.FeePayContractProtoMsg;
            };
            FeePayWalletUsage: {
                typeUrl: string;
                encode(message: _13.FeePayWalletUsage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.FeePayWalletUsage;
                fromPartial(object: Partial<_13.FeePayWalletUsage>): _13.FeePayWalletUsage;
                fromAmino(object: _13.FeePayWalletUsageAmino): _13.FeePayWalletUsage;
                toAmino(message: _13.FeePayWalletUsage): _13.FeePayWalletUsageAmino;
                fromAminoMsg(object: _13.FeePayWalletUsageAminoMsg): _13.FeePayWalletUsage;
                fromProtoMsg(message: _13.FeePayWalletUsageProtoMsg): _13.FeePayWalletUsage;
                toProto(message: _13.FeePayWalletUsage): Uint8Array;
                toProtoMsg(message: _13.FeePayWalletUsage): _13.FeePayWalletUsageProtoMsg;
            };
        };
    }
    namespace feeshare {
        const v1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeShares(request?: _19.QueryFeeSharesRequest): Promise<_19.QueryFeeSharesResponse>;
                feeShare(request: _19.QueryFeeShareRequest): Promise<_19.QueryFeeShareResponse>;
                params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                deployerFeeShares(request: _19.QueryDeployerFeeSharesRequest): Promise<_19.QueryDeployerFeeSharesResponse>;
                withdrawerFeeShares(request: _19.QueryWithdrawerFeeSharesRequest): Promise<_19.QueryWithdrawerFeeSharesResponse>;
            };
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeeShare(value: _20.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeeShare(value: _20.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelFeeShare(value: _20.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _20.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeeShare(value: _20.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _20.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _20.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _20.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _20.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _20.MsgCancelFeeShare;
                    };
                    updateParams(value: _20.MsgUpdateParams): {
                        typeUrl: string;
                        value: _20.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    registerFeeShare(value: any): {
                        typeUrl: string;
                        value: _20.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: any): {
                        typeUrl: string;
                        value: _20.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: any): {
                        typeUrl: string;
                        value: _20.MsgCancelFeeShare;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _20.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerFeeShare(value: _20.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _20.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _20.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _20.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _20.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _20.MsgCancelFeeShare;
                    };
                    updateParams(value: _20.MsgUpdateParams): {
                        typeUrl: string;
                        value: _20.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/juno.feeshare.v1.MsgRegisterFeeShare": {
                    aminoType: string;
                    toAmino: (message: _20.MsgRegisterFeeShare) => _20.MsgRegisterFeeShareAmino;
                    fromAmino: (object: _20.MsgRegisterFeeShareAmino) => _20.MsgRegisterFeeShare;
                };
                "/juno.feeshare.v1.MsgUpdateFeeShare": {
                    aminoType: string;
                    toAmino: (message: _20.MsgUpdateFeeShare) => _20.MsgUpdateFeeShareAmino;
                    fromAmino: (object: _20.MsgUpdateFeeShareAmino) => _20.MsgUpdateFeeShare;
                };
                "/juno.feeshare.v1.MsgCancelFeeShare": {
                    aminoType: string;
                    toAmino: (message: _20.MsgCancelFeeShare) => _20.MsgCancelFeeShareAmino;
                    fromAmino: (object: _20.MsgCancelFeeShareAmino) => _20.MsgCancelFeeShare;
                };
                "/juno.feeshare.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _20.MsgUpdateParams) => _20.MsgUpdateParamsAmino;
                    fromAmino: (object: _20.MsgUpdateParamsAmino) => _20.MsgUpdateParams;
                };
            };
            MsgRegisterFeeShare: {
                typeUrl: string;
                encode(message: _20.MsgRegisterFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgRegisterFeeShare;
                fromPartial(object: Partial<_20.MsgRegisterFeeShare>): _20.MsgRegisterFeeShare;
                fromAmino(object: _20.MsgRegisterFeeShareAmino): _20.MsgRegisterFeeShare;
                toAmino(message: _20.MsgRegisterFeeShare): _20.MsgRegisterFeeShareAmino;
                fromAminoMsg(object: _20.MsgRegisterFeeShareAminoMsg): _20.MsgRegisterFeeShare;
                fromProtoMsg(message: _20.MsgRegisterFeeShareProtoMsg): _20.MsgRegisterFeeShare;
                toProto(message: _20.MsgRegisterFeeShare): Uint8Array;
                toProtoMsg(message: _20.MsgRegisterFeeShare): _20.MsgRegisterFeeShareProtoMsg;
            };
            MsgRegisterFeeShareResponse: {
                typeUrl: string;
                encode(_: _20.MsgRegisterFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.MsgRegisterFeeShareResponse;
                fromPartial(_: Partial<_20.MsgRegisterFeeShareResponse>): _20.MsgRegisterFeeShareResponse;
                fromAmino(_: _20.MsgRegisterFeeShareResponseAmino): _20.MsgRegisterFeeShareResponse;
                toAmino(_: _20.MsgRegisterFeeShareResponse): _20.MsgRegisterFeeShareResponseAmino;
                fromAminoMsg(object: _20.MsgRegisterFeeShareResponseAminoMsg): _20.MsgRegisterFeeShareResponse;
                fromProtoMsg(message: _20.MsgRegisterFeeShareResponseProtoMsg): _20.MsgRegisterFeeShareResponse;
                toProto(message: _20.MsgRegisterFeeShareResponse): Uint8Array;
                toProtoMsg(message: _20.MsgRegisterFeeShareResponse): _20.MsgRegisterFeeShareResponseProtoMsg;
            };
            MsgUpdateFeeShare: {
                typeUrl: string;
                encode(message: _20.MsgUpdateFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgUpdateFeeShare;
                fromPartial(object: Partial<_20.MsgUpdateFeeShare>): _20.MsgUpdateFeeShare;
                fromAmino(object: _20.MsgUpdateFeeShareAmino): _20.MsgUpdateFeeShare;
                toAmino(message: _20.MsgUpdateFeeShare): _20.MsgUpdateFeeShareAmino;
                fromAminoMsg(object: _20.MsgUpdateFeeShareAminoMsg): _20.MsgUpdateFeeShare;
                fromProtoMsg(message: _20.MsgUpdateFeeShareProtoMsg): _20.MsgUpdateFeeShare;
                toProto(message: _20.MsgUpdateFeeShare): Uint8Array;
                toProtoMsg(message: _20.MsgUpdateFeeShare): _20.MsgUpdateFeeShareProtoMsg;
            };
            MsgUpdateFeeShareResponse: {
                typeUrl: string;
                encode(_: _20.MsgUpdateFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.MsgUpdateFeeShareResponse;
                fromPartial(_: Partial<_20.MsgUpdateFeeShareResponse>): _20.MsgUpdateFeeShareResponse;
                fromAmino(_: _20.MsgUpdateFeeShareResponseAmino): _20.MsgUpdateFeeShareResponse;
                toAmino(_: _20.MsgUpdateFeeShareResponse): _20.MsgUpdateFeeShareResponseAmino;
                fromAminoMsg(object: _20.MsgUpdateFeeShareResponseAminoMsg): _20.MsgUpdateFeeShareResponse;
                fromProtoMsg(message: _20.MsgUpdateFeeShareResponseProtoMsg): _20.MsgUpdateFeeShareResponse;
                toProto(message: _20.MsgUpdateFeeShareResponse): Uint8Array;
                toProtoMsg(message: _20.MsgUpdateFeeShareResponse): _20.MsgUpdateFeeShareResponseProtoMsg;
            };
            MsgCancelFeeShare: {
                typeUrl: string;
                encode(message: _20.MsgCancelFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgCancelFeeShare;
                fromPartial(object: Partial<_20.MsgCancelFeeShare>): _20.MsgCancelFeeShare;
                fromAmino(object: _20.MsgCancelFeeShareAmino): _20.MsgCancelFeeShare;
                toAmino(message: _20.MsgCancelFeeShare): _20.MsgCancelFeeShareAmino;
                fromAminoMsg(object: _20.MsgCancelFeeShareAminoMsg): _20.MsgCancelFeeShare;
                fromProtoMsg(message: _20.MsgCancelFeeShareProtoMsg): _20.MsgCancelFeeShare;
                toProto(message: _20.MsgCancelFeeShare): Uint8Array;
                toProtoMsg(message: _20.MsgCancelFeeShare): _20.MsgCancelFeeShareProtoMsg;
            };
            MsgCancelFeeShareResponse: {
                typeUrl: string;
                encode(_: _20.MsgCancelFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.MsgCancelFeeShareResponse;
                fromPartial(_: Partial<_20.MsgCancelFeeShareResponse>): _20.MsgCancelFeeShareResponse;
                fromAmino(_: _20.MsgCancelFeeShareResponseAmino): _20.MsgCancelFeeShareResponse;
                toAmino(_: _20.MsgCancelFeeShareResponse): _20.MsgCancelFeeShareResponseAmino;
                fromAminoMsg(object: _20.MsgCancelFeeShareResponseAminoMsg): _20.MsgCancelFeeShareResponse;
                fromProtoMsg(message: _20.MsgCancelFeeShareResponseProtoMsg): _20.MsgCancelFeeShareResponse;
                toProto(message: _20.MsgCancelFeeShareResponse): Uint8Array;
                toProtoMsg(message: _20.MsgCancelFeeShareResponse): _20.MsgCancelFeeShareResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _20.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgUpdateParams;
                fromPartial(object: Partial<_20.MsgUpdateParams>): _20.MsgUpdateParams;
                fromAmino(object: _20.MsgUpdateParamsAmino): _20.MsgUpdateParams;
                toAmino(message: _20.MsgUpdateParams): _20.MsgUpdateParamsAmino;
                fromAminoMsg(object: _20.MsgUpdateParamsAminoMsg): _20.MsgUpdateParams;
                fromProtoMsg(message: _20.MsgUpdateParamsProtoMsg): _20.MsgUpdateParams;
                toProto(message: _20.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _20.MsgUpdateParams): _20.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _20.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_20.MsgUpdateParamsResponse>): _20.MsgUpdateParamsResponse;
                fromAmino(_: _20.MsgUpdateParamsResponseAmino): _20.MsgUpdateParamsResponse;
                toAmino(_: _20.MsgUpdateParamsResponse): _20.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _20.MsgUpdateParamsResponseAminoMsg): _20.MsgUpdateParamsResponse;
                fromProtoMsg(message: _20.MsgUpdateParamsResponseProtoMsg): _20.MsgUpdateParamsResponse;
                toProto(message: _20.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _20.MsgUpdateParamsResponse): _20.MsgUpdateParamsResponseProtoMsg;
            };
            QueryFeeSharesRequest: {
                typeUrl: string;
                encode(message: _19.QueryFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryFeeSharesRequest;
                fromPartial(object: Partial<_19.QueryFeeSharesRequest>): _19.QueryFeeSharesRequest;
                fromAmino(object: _19.QueryFeeSharesRequestAmino): _19.QueryFeeSharesRequest;
                toAmino(message: _19.QueryFeeSharesRequest): _19.QueryFeeSharesRequestAmino;
                fromAminoMsg(object: _19.QueryFeeSharesRequestAminoMsg): _19.QueryFeeSharesRequest;
                fromProtoMsg(message: _19.QueryFeeSharesRequestProtoMsg): _19.QueryFeeSharesRequest;
                toProto(message: _19.QueryFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _19.QueryFeeSharesRequest): _19.QueryFeeSharesRequestProtoMsg;
            };
            QueryFeeSharesResponse: {
                typeUrl: string;
                encode(message: _19.QueryFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryFeeSharesResponse;
                fromPartial(object: Partial<_19.QueryFeeSharesResponse>): _19.QueryFeeSharesResponse;
                fromAmino(object: _19.QueryFeeSharesResponseAmino): _19.QueryFeeSharesResponse;
                toAmino(message: _19.QueryFeeSharesResponse): _19.QueryFeeSharesResponseAmino;
                fromAminoMsg(object: _19.QueryFeeSharesResponseAminoMsg): _19.QueryFeeSharesResponse;
                fromProtoMsg(message: _19.QueryFeeSharesResponseProtoMsg): _19.QueryFeeSharesResponse;
                toProto(message: _19.QueryFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _19.QueryFeeSharesResponse): _19.QueryFeeSharesResponseProtoMsg;
            };
            QueryFeeShareRequest: {
                typeUrl: string;
                encode(message: _19.QueryFeeShareRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryFeeShareRequest;
                fromPartial(object: Partial<_19.QueryFeeShareRequest>): _19.QueryFeeShareRequest;
                fromAmino(object: _19.QueryFeeShareRequestAmino): _19.QueryFeeShareRequest;
                toAmino(message: _19.QueryFeeShareRequest): _19.QueryFeeShareRequestAmino;
                fromAminoMsg(object: _19.QueryFeeShareRequestAminoMsg): _19.QueryFeeShareRequest;
                fromProtoMsg(message: _19.QueryFeeShareRequestProtoMsg): _19.QueryFeeShareRequest;
                toProto(message: _19.QueryFeeShareRequest): Uint8Array;
                toProtoMsg(message: _19.QueryFeeShareRequest): _19.QueryFeeShareRequestProtoMsg;
            };
            QueryFeeShareResponse: {
                typeUrl: string;
                encode(message: _19.QueryFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryFeeShareResponse;
                fromPartial(object: Partial<_19.QueryFeeShareResponse>): _19.QueryFeeShareResponse;
                fromAmino(object: _19.QueryFeeShareResponseAmino): _19.QueryFeeShareResponse;
                toAmino(message: _19.QueryFeeShareResponse): _19.QueryFeeShareResponseAmino;
                fromAminoMsg(object: _19.QueryFeeShareResponseAminoMsg): _19.QueryFeeShareResponse;
                fromProtoMsg(message: _19.QueryFeeShareResponseProtoMsg): _19.QueryFeeShareResponse;
                toProto(message: _19.QueryFeeShareResponse): Uint8Array;
                toProtoMsg(message: _19.QueryFeeShareResponse): _19.QueryFeeShareResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _19.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.QueryParamsRequest;
                fromPartial(_: Partial<_19.QueryParamsRequest>): _19.QueryParamsRequest;
                fromAmino(_: _19.QueryParamsRequestAmino): _19.QueryParamsRequest;
                toAmino(_: _19.QueryParamsRequest): _19.QueryParamsRequestAmino;
                fromAminoMsg(object: _19.QueryParamsRequestAminoMsg): _19.QueryParamsRequest;
                fromProtoMsg(message: _19.QueryParamsRequestProtoMsg): _19.QueryParamsRequest;
                toProto(message: _19.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _19.QueryParamsRequest): _19.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _19.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryParamsResponse;
                fromPartial(object: Partial<_19.QueryParamsResponse>): _19.QueryParamsResponse;
                fromAmino(object: _19.QueryParamsResponseAmino): _19.QueryParamsResponse;
                toAmino(message: _19.QueryParamsResponse): _19.QueryParamsResponseAmino;
                fromAminoMsg(object: _19.QueryParamsResponseAminoMsg): _19.QueryParamsResponse;
                fromProtoMsg(message: _19.QueryParamsResponseProtoMsg): _19.QueryParamsResponse;
                toProto(message: _19.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _19.QueryParamsResponse): _19.QueryParamsResponseProtoMsg;
            };
            QueryDeployerFeeSharesRequest: {
                typeUrl: string;
                encode(message: _19.QueryDeployerFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryDeployerFeeSharesRequest;
                fromPartial(object: Partial<_19.QueryDeployerFeeSharesRequest>): _19.QueryDeployerFeeSharesRequest;
                fromAmino(object: _19.QueryDeployerFeeSharesRequestAmino): _19.QueryDeployerFeeSharesRequest;
                toAmino(message: _19.QueryDeployerFeeSharesRequest): _19.QueryDeployerFeeSharesRequestAmino;
                fromAminoMsg(object: _19.QueryDeployerFeeSharesRequestAminoMsg): _19.QueryDeployerFeeSharesRequest;
                fromProtoMsg(message: _19.QueryDeployerFeeSharesRequestProtoMsg): _19.QueryDeployerFeeSharesRequest;
                toProto(message: _19.QueryDeployerFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _19.QueryDeployerFeeSharesRequest): _19.QueryDeployerFeeSharesRequestProtoMsg;
            };
            QueryDeployerFeeSharesResponse: {
                typeUrl: string;
                encode(message: _19.QueryDeployerFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryDeployerFeeSharesResponse;
                fromPartial(object: Partial<_19.QueryDeployerFeeSharesResponse>): _19.QueryDeployerFeeSharesResponse;
                fromAmino(object: _19.QueryDeployerFeeSharesResponseAmino): _19.QueryDeployerFeeSharesResponse;
                toAmino(message: _19.QueryDeployerFeeSharesResponse): _19.QueryDeployerFeeSharesResponseAmino;
                fromAminoMsg(object: _19.QueryDeployerFeeSharesResponseAminoMsg): _19.QueryDeployerFeeSharesResponse;
                fromProtoMsg(message: _19.QueryDeployerFeeSharesResponseProtoMsg): _19.QueryDeployerFeeSharesResponse;
                toProto(message: _19.QueryDeployerFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _19.QueryDeployerFeeSharesResponse): _19.QueryDeployerFeeSharesResponseProtoMsg;
            };
            QueryWithdrawerFeeSharesRequest: {
                typeUrl: string;
                encode(message: _19.QueryWithdrawerFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryWithdrawerFeeSharesRequest;
                fromPartial(object: Partial<_19.QueryWithdrawerFeeSharesRequest>): _19.QueryWithdrawerFeeSharesRequest;
                fromAmino(object: _19.QueryWithdrawerFeeSharesRequestAmino): _19.QueryWithdrawerFeeSharesRequest;
                toAmino(message: _19.QueryWithdrawerFeeSharesRequest): _19.QueryWithdrawerFeeSharesRequestAmino;
                fromAminoMsg(object: _19.QueryWithdrawerFeeSharesRequestAminoMsg): _19.QueryWithdrawerFeeSharesRequest;
                fromProtoMsg(message: _19.QueryWithdrawerFeeSharesRequestProtoMsg): _19.QueryWithdrawerFeeSharesRequest;
                toProto(message: _19.QueryWithdrawerFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _19.QueryWithdrawerFeeSharesRequest): _19.QueryWithdrawerFeeSharesRequestProtoMsg;
            };
            QueryWithdrawerFeeSharesResponse: {
                typeUrl: string;
                encode(message: _19.QueryWithdrawerFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryWithdrawerFeeSharesResponse;
                fromPartial(object: Partial<_19.QueryWithdrawerFeeSharesResponse>): _19.QueryWithdrawerFeeSharesResponse;
                fromAmino(object: _19.QueryWithdrawerFeeSharesResponseAmino): _19.QueryWithdrawerFeeSharesResponse;
                toAmino(message: _19.QueryWithdrawerFeeSharesResponse): _19.QueryWithdrawerFeeSharesResponseAmino;
                fromAminoMsg(object: _19.QueryWithdrawerFeeSharesResponseAminoMsg): _19.QueryWithdrawerFeeSharesResponse;
                fromProtoMsg(message: _19.QueryWithdrawerFeeSharesResponseProtoMsg): _19.QueryWithdrawerFeeSharesResponse;
                toProto(message: _19.QueryWithdrawerFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _19.QueryWithdrawerFeeSharesResponse): _19.QueryWithdrawerFeeSharesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
                fromAmino(object: _18.GenesisStateAmino): _18.GenesisState;
                toAmino(message: _18.GenesisState): _18.GenesisStateAmino;
                fromAminoMsg(object: _18.GenesisStateAminoMsg): _18.GenesisState;
                fromProtoMsg(message: _18.GenesisStateProtoMsg): _18.GenesisState;
                toProto(message: _18.GenesisState): Uint8Array;
                toProtoMsg(message: _18.GenesisState): _18.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _18.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Params;
                fromPartial(object: Partial<_18.Params>): _18.Params;
                fromAmino(object: _18.ParamsAmino): _18.Params;
                toAmino(message: _18.Params): _18.ParamsAmino;
                fromAminoMsg(object: _18.ParamsAminoMsg): _18.Params;
                fromProtoMsg(message: _18.ParamsProtoMsg): _18.Params;
                toProto(message: _18.Params): Uint8Array;
                toProtoMsg(message: _18.Params): _18.ParamsProtoMsg;
            };
            FeeShare: {
                typeUrl: string;
                encode(message: _17.FeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.FeeShare;
                fromPartial(object: Partial<_17.FeeShare>): _17.FeeShare;
                fromAmino(object: _17.FeeShareAmino): _17.FeeShare;
                toAmino(message: _17.FeeShare): _17.FeeShareAmino;
                fromAminoMsg(object: _17.FeeShareAminoMsg): _17.FeeShare;
                fromProtoMsg(message: _17.FeeShareProtoMsg): _17.FeeShare;
                toProto(message: _17.FeeShare): Uint8Array;
                toProtoMsg(message: _17.FeeShare): _17.FeeShareProtoMsg;
            };
        };
    }
    const mint: {
        MsgClientImpl: typeof _216.MsgClientImpl;
        QueryClientImpl: typeof _210.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
            inflation(request?: _23.QueryInflationRequest): Promise<_23.QueryInflationResponse>;
            annualProvisions(request?: _23.QueryAnnualProvisionsRequest): Promise<_23.QueryAnnualProvisionsResponse>;
            targetSupply(request?: _23.QueryTargetSupplyRequest): Promise<_23.QueryTargetSupplyResponse>;
        };
        LCDQueryClient: typeof _204.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _24.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _24.MsgUpdateParams): {
                    typeUrl: string;
                    value: _24.MsgUpdateParams;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _24.MsgUpdateParams;
                };
            };
            fromPartial: {
                updateParams(value: _24.MsgUpdateParams): {
                    typeUrl: string;
                    value: _24.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/juno.mint.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _24.MsgUpdateParams) => _24.MsgUpdateParamsAmino;
                fromAmino: (object: _24.MsgUpdateParamsAmino) => _24.MsgUpdateParams;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _24.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.MsgUpdateParams;
            fromPartial(object: Partial<_24.MsgUpdateParams>): _24.MsgUpdateParams;
            fromAmino(object: _24.MsgUpdateParamsAmino): _24.MsgUpdateParams;
            toAmino(message: _24.MsgUpdateParams): _24.MsgUpdateParamsAmino;
            fromAminoMsg(object: _24.MsgUpdateParamsAminoMsg): _24.MsgUpdateParams;
            fromProtoMsg(message: _24.MsgUpdateParamsProtoMsg): _24.MsgUpdateParams;
            toProto(message: _24.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _24.MsgUpdateParams): _24.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _24.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _24.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_24.MsgUpdateParamsResponse>): _24.MsgUpdateParamsResponse;
            fromAmino(_: _24.MsgUpdateParamsResponseAmino): _24.MsgUpdateParamsResponse;
            toAmino(_: _24.MsgUpdateParamsResponse): _24.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _24.MsgUpdateParamsResponseAminoMsg): _24.MsgUpdateParamsResponse;
            fromProtoMsg(message: _24.MsgUpdateParamsResponseProtoMsg): _24.MsgUpdateParamsResponse;
            toProto(message: _24.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _24.MsgUpdateParamsResponse): _24.MsgUpdateParamsResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _23.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.QueryParamsRequest;
            fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
            fromAmino(_: _23.QueryParamsRequestAmino): _23.QueryParamsRequest;
            toAmino(_: _23.QueryParamsRequest): _23.QueryParamsRequestAmino;
            fromAminoMsg(object: _23.QueryParamsRequestAminoMsg): _23.QueryParamsRequest;
            fromProtoMsg(message: _23.QueryParamsRequestProtoMsg): _23.QueryParamsRequest;
            toProto(message: _23.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _23.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.QueryParamsResponse;
            fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
            fromAmino(object: _23.QueryParamsResponseAmino): _23.QueryParamsResponse;
            toAmino(message: _23.QueryParamsResponse): _23.QueryParamsResponseAmino;
            fromAminoMsg(object: _23.QueryParamsResponseAminoMsg): _23.QueryParamsResponse;
            fromProtoMsg(message: _23.QueryParamsResponseProtoMsg): _23.QueryParamsResponse;
            toProto(message: _23.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseProtoMsg;
        };
        QueryInflationRequest: {
            typeUrl: string;
            encode(_: _23.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.QueryInflationRequest;
            fromPartial(_: Partial<_23.QueryInflationRequest>): _23.QueryInflationRequest;
            fromAmino(_: _23.QueryInflationRequestAmino): _23.QueryInflationRequest;
            toAmino(_: _23.QueryInflationRequest): _23.QueryInflationRequestAmino;
            fromAminoMsg(object: _23.QueryInflationRequestAminoMsg): _23.QueryInflationRequest;
            fromProtoMsg(message: _23.QueryInflationRequestProtoMsg): _23.QueryInflationRequest;
            toProto(message: _23.QueryInflationRequest): Uint8Array;
            toProtoMsg(message: _23.QueryInflationRequest): _23.QueryInflationRequestProtoMsg;
        };
        QueryInflationResponse: {
            typeUrl: string;
            encode(message: _23.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.QueryInflationResponse;
            fromPartial(object: Partial<_23.QueryInflationResponse>): _23.QueryInflationResponse;
            fromAmino(object: _23.QueryInflationResponseAmino): _23.QueryInflationResponse;
            toAmino(message: _23.QueryInflationResponse): _23.QueryInflationResponseAmino;
            fromAminoMsg(object: _23.QueryInflationResponseAminoMsg): _23.QueryInflationResponse;
            fromProtoMsg(message: _23.QueryInflationResponseProtoMsg): _23.QueryInflationResponse;
            toProto(message: _23.QueryInflationResponse): Uint8Array;
            toProtoMsg(message: _23.QueryInflationResponse): _23.QueryInflationResponseProtoMsg;
        };
        QueryAnnualProvisionsRequest: {
            typeUrl: string;
            encode(_: _23.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.QueryAnnualProvisionsRequest;
            fromPartial(_: Partial<_23.QueryAnnualProvisionsRequest>): _23.QueryAnnualProvisionsRequest;
            fromAmino(_: _23.QueryAnnualProvisionsRequestAmino): _23.QueryAnnualProvisionsRequest;
            toAmino(_: _23.QueryAnnualProvisionsRequest): _23.QueryAnnualProvisionsRequestAmino;
            fromAminoMsg(object: _23.QueryAnnualProvisionsRequestAminoMsg): _23.QueryAnnualProvisionsRequest;
            fromProtoMsg(message: _23.QueryAnnualProvisionsRequestProtoMsg): _23.QueryAnnualProvisionsRequest;
            toProto(message: _23.QueryAnnualProvisionsRequest): Uint8Array;
            toProtoMsg(message: _23.QueryAnnualProvisionsRequest): _23.QueryAnnualProvisionsRequestProtoMsg;
        };
        QueryAnnualProvisionsResponse: {
            typeUrl: string;
            encode(message: _23.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.QueryAnnualProvisionsResponse;
            fromPartial(object: Partial<_23.QueryAnnualProvisionsResponse>): _23.QueryAnnualProvisionsResponse;
            fromAmino(object: _23.QueryAnnualProvisionsResponseAmino): _23.QueryAnnualProvisionsResponse;
            toAmino(message: _23.QueryAnnualProvisionsResponse): _23.QueryAnnualProvisionsResponseAmino;
            fromAminoMsg(object: _23.QueryAnnualProvisionsResponseAminoMsg): _23.QueryAnnualProvisionsResponse;
            fromProtoMsg(message: _23.QueryAnnualProvisionsResponseProtoMsg): _23.QueryAnnualProvisionsResponse;
            toProto(message: _23.QueryAnnualProvisionsResponse): Uint8Array;
            toProtoMsg(message: _23.QueryAnnualProvisionsResponse): _23.QueryAnnualProvisionsResponseProtoMsg;
        };
        QueryTargetSupplyRequest: {
            typeUrl: string;
            encode(_: _23.QueryTargetSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.QueryTargetSupplyRequest;
            fromPartial(_: Partial<_23.QueryTargetSupplyRequest>): _23.QueryTargetSupplyRequest;
            fromAmino(_: _23.QueryTargetSupplyRequestAmino): _23.QueryTargetSupplyRequest;
            toAmino(_: _23.QueryTargetSupplyRequest): _23.QueryTargetSupplyRequestAmino;
            fromAminoMsg(object: _23.QueryTargetSupplyRequestAminoMsg): _23.QueryTargetSupplyRequest;
            fromProtoMsg(message: _23.QueryTargetSupplyRequestProtoMsg): _23.QueryTargetSupplyRequest;
            toProto(message: _23.QueryTargetSupplyRequest): Uint8Array;
            toProtoMsg(message: _23.QueryTargetSupplyRequest): _23.QueryTargetSupplyRequestProtoMsg;
        };
        QueryTargetSupplyResponse: {
            typeUrl: string;
            encode(message: _23.QueryTargetSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.QueryTargetSupplyResponse;
            fromPartial(object: Partial<_23.QueryTargetSupplyResponse>): _23.QueryTargetSupplyResponse;
            fromAmino(object: _23.QueryTargetSupplyResponseAmino): _23.QueryTargetSupplyResponse;
            toAmino(message: _23.QueryTargetSupplyResponse): _23.QueryTargetSupplyResponseAmino;
            fromAminoMsg(object: _23.QueryTargetSupplyResponseAminoMsg): _23.QueryTargetSupplyResponse;
            fromProtoMsg(message: _23.QueryTargetSupplyResponseProtoMsg): _23.QueryTargetSupplyResponse;
            toProto(message: _23.QueryTargetSupplyResponse): Uint8Array;
            toProtoMsg(message: _23.QueryTargetSupplyResponse): _23.QueryTargetSupplyResponseProtoMsg;
        };
        Minter: {
            typeUrl: string;
            encode(message: _22.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.Minter;
            fromPartial(object: Partial<_22.Minter>): _22.Minter;
            fromAmino(object: _22.MinterAmino): _22.Minter;
            toAmino(message: _22.Minter): _22.MinterAmino;
            fromAminoMsg(object: _22.MinterAminoMsg): _22.Minter;
            fromProtoMsg(message: _22.MinterProtoMsg): _22.Minter;
            toProto(message: _22.Minter): Uint8Array;
            toProtoMsg(message: _22.Minter): _22.MinterProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _22.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.Params;
            fromPartial(object: Partial<_22.Params>): _22.Params;
            fromAmino(object: _22.ParamsAmino): _22.Params;
            toAmino(message: _22.Params): _22.ParamsAmino;
            fromAminoMsg(object: _22.ParamsAminoMsg): _22.Params;
            fromProtoMsg(message: _22.ParamsProtoMsg): _22.Params;
            toProto(message: _22.Params): Uint8Array;
            toProtoMsg(message: _22.Params): _22.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _21.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.GenesisState;
            fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
            fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
            toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
            fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
            fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
            toProto(message: _21.GenesisState): Uint8Array;
            toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            juno: {
                clock: {
                    v1: _211.MsgClientImpl;
                };
                cwhooks: {
                    v1: _212.MsgClientImpl;
                };
                drip: {
                    v1: _213.MsgClientImpl;
                };
                feepay: {
                    v1: _214.MsgClientImpl;
                };
                feeshare: {
                    v1: _215.MsgClientImpl;
                };
                mint: _216.MsgClientImpl;
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            juno: {
                clock: {
                    v1: {
                        clockContracts(request?: _5.QueryClockContracts): Promise<_5.QueryClockContractsResponse>;
                        clockContract(request: _5.QueryClockContract): Promise<_5.QueryClockContractResponse>;
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                    };
                };
                cwhooks: {
                    v1: {
                        params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                        stakingContracts(request?: _8.QueryStakingContractsRequest): Promise<_8.QueryStakingContractsResponse>;
                        governanceContracts(request?: _8.QueryGovernanceContractsRequest): Promise<_8.QueryGovernanceContractsResponse>;
                    };
                };
                drip: {
                    v1: {
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                    };
                };
                feepay: {
                    v1: {
                        feePayContract(request: _15.QueryFeePayContract): Promise<_15.QueryFeePayContractResponse>;
                        feePayContracts(request?: _15.QueryFeePayContracts): Promise<_15.QueryFeePayContractsResponse>;
                        feePayContractUses(request: _15.QueryFeePayContractUses): Promise<_15.QueryFeePayContractUsesResponse>;
                        feePayWalletIsEligible(request: _15.QueryFeePayWalletIsEligible): Promise<_15.QueryFeePayWalletIsEligibleResponse>;
                        params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                    };
                };
                feeshare: {
                    v1: {
                        feeShares(request?: _19.QueryFeeSharesRequest): Promise<_19.QueryFeeSharesResponse>;
                        feeShare(request: _19.QueryFeeShareRequest): Promise<_19.QueryFeeShareResponse>;
                        params(request?: _19.QueryParamsRequest): Promise<_19.QueryParamsResponse>;
                        deployerFeeShares(request: _19.QueryDeployerFeeSharesRequest): Promise<_19.QueryDeployerFeeSharesResponse>;
                        withdrawerFeeShares(request: _19.QueryWithdrawerFeeSharesRequest): Promise<_19.QueryWithdrawerFeeSharesResponse>;
                    };
                };
                mint: {
                    params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                    inflation(request?: _23.QueryInflationRequest): Promise<_23.QueryInflationResponse>;
                    annualProvisions(request?: _23.QueryAnnualProvisionsRequest): Promise<_23.QueryAnnualProvisionsResponse>;
                    targetSupply(request?: _23.QueryTargetSupplyRequest): Promise<_23.QueryTargetSupplyResponse>;
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
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
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
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
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
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
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            juno: {
                clock: {
                    v1: _199.LCDQueryClient;
                };
                cwhooks: {
                    v1: _200.LCDQueryClient;
                };
                drip: {
                    v1: _201.LCDQueryClient;
                };
                feepay: {
                    v1: _202.LCDQueryClient;
                };
                feeshare: {
                    v1: _203.LCDQueryClient;
                };
                mint: _204.LCDQueryClient;
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
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
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
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
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
