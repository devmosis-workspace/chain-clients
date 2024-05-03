import * as _0 from "./blob/v1/event";
import * as _1 from "./blob/v1/genesis";
import * as _2 from "./blob/v1/params";
import * as _3 from "./blob/v1/query";
import * as _4 from "./blob/v1/tx";
import * as _5 from "./da/data_availability_header";
import * as _6 from "./mint/v1/genesis";
import * as _7 from "./mint/v1/mint";
import * as _8 from "./mint/v1/query";
import * as _9 from "./qgb/v1/genesis";
import * as _10 from "./qgb/v1/query";
import * as _11 from "./qgb/v1/tx";
import * as _12 from "./qgb/v1/types";
import * as _132 from "./blob/v1/query.lcd";
import * as _133 from "./mint/v1/query.lcd";
import * as _134 from "./qgb/v1/query.lcd";
import * as _135 from "./blob/v1/query.rpc.Query";
import * as _136 from "./mint/v1/query.rpc.Query";
import * as _137 from "./qgb/v1/query.rpc.Query";
import * as _138 from "./blob/v1/tx.rpc.msg";
import * as _139 from "./qgb/v1/tx.rpc.msg";
export declare namespace celestia {
    namespace blob {
        const v1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    payForBlobs(value: _4.MsgPayForBlobs): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    payForBlobs(value: _4.MsgPayForBlobs): {
                        typeUrl: string;
                        value: _4.MsgPayForBlobs;
                    };
                };
                fromJSON: {
                    payForBlobs(value: any): {
                        typeUrl: string;
                        value: _4.MsgPayForBlobs;
                    };
                };
                fromPartial: {
                    payForBlobs(value: _4.MsgPayForBlobs): {
                        typeUrl: string;
                        value: _4.MsgPayForBlobs;
                    };
                };
            };
            AminoConverter: {
                "/celestia.blob.v1.MsgPayForBlobs": {
                    aminoType: string;
                    toAmino: (message: _4.MsgPayForBlobs) => _4.MsgPayForBlobsAmino;
                    fromAmino: (object: _4.MsgPayForBlobsAmino) => _4.MsgPayForBlobs;
                };
            };
            MsgPayForBlobs: {
                typeUrl: string;
                encode(message: _4.MsgPayForBlobs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgPayForBlobs;
                fromPartial(object: Partial<_4.MsgPayForBlobs>): _4.MsgPayForBlobs;
                fromAmino(object: _4.MsgPayForBlobsAmino): _4.MsgPayForBlobs;
                toAmino(message: _4.MsgPayForBlobs): _4.MsgPayForBlobsAmino;
                fromAminoMsg(object: _4.MsgPayForBlobsAminoMsg): _4.MsgPayForBlobs;
                fromProtoMsg(message: _4.MsgPayForBlobsProtoMsg): _4.MsgPayForBlobs;
                toProto(message: _4.MsgPayForBlobs): Uint8Array;
                toProtoMsg(message: _4.MsgPayForBlobs): _4.MsgPayForBlobsProtoMsg;
            };
            MsgPayForBlobsResponse: {
                typeUrl: string;
                encode(_: _4.MsgPayForBlobsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.MsgPayForBlobsResponse;
                fromPartial(_: Partial<_4.MsgPayForBlobsResponse>): _4.MsgPayForBlobsResponse;
                fromAmino(_: _4.MsgPayForBlobsResponseAmino): _4.MsgPayForBlobsResponse;
                toAmino(_: _4.MsgPayForBlobsResponse): _4.MsgPayForBlobsResponseAmino;
                fromAminoMsg(object: _4.MsgPayForBlobsResponseAminoMsg): _4.MsgPayForBlobsResponse;
                fromProtoMsg(message: _4.MsgPayForBlobsResponseProtoMsg): _4.MsgPayForBlobsResponse;
                toProto(message: _4.MsgPayForBlobsResponse): Uint8Array;
                toProtoMsg(message: _4.MsgPayForBlobsResponse): _4.MsgPayForBlobsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
                fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
                toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
                fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
                fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
                toProto(message: _3.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _3.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
                fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
                toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
                fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
                fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
                toProto(message: _3.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
                fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
                toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
                fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
                fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
                toProto(message: _1.GenesisState): Uint8Array;
                toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
            };
            EventPayForBlobs: {
                typeUrl: string;
                encode(message: _0.EventPayForBlobs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EventPayForBlobs;
                fromPartial(object: Partial<_0.EventPayForBlobs>): _0.EventPayForBlobs;
                fromAmino(object: _0.EventPayForBlobsAmino): _0.EventPayForBlobs;
                toAmino(message: _0.EventPayForBlobs): _0.EventPayForBlobsAmino;
                fromAminoMsg(object: _0.EventPayForBlobsAminoMsg): _0.EventPayForBlobs;
                fromProtoMsg(message: _0.EventPayForBlobsProtoMsg): _0.EventPayForBlobs;
                toProto(message: _0.EventPayForBlobs): Uint8Array;
                toProtoMsg(message: _0.EventPayForBlobs): _0.EventPayForBlobsProtoMsg;
            };
        };
    }
    const da: {
        DataAvailabilityHeader: {
            typeUrl: string;
            encode(message: _5.DataAvailabilityHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.DataAvailabilityHeader;
            fromPartial(object: Partial<_5.DataAvailabilityHeader>): _5.DataAvailabilityHeader;
            fromAmino(object: _5.DataAvailabilityHeaderAmino): _5.DataAvailabilityHeader;
            toAmino(message: _5.DataAvailabilityHeader): _5.DataAvailabilityHeaderAmino;
            fromAminoMsg(object: _5.DataAvailabilityHeaderAminoMsg): _5.DataAvailabilityHeader;
            fromProtoMsg(message: _5.DataAvailabilityHeaderProtoMsg): _5.DataAvailabilityHeader;
            toProto(message: _5.DataAvailabilityHeader): Uint8Array;
            toProtoMsg(message: _5.DataAvailabilityHeader): _5.DataAvailabilityHeaderProtoMsg;
        };
    };
    namespace mint {
        const v1: {
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                inflationRate(request?: _8.QueryInflationRateRequest): Promise<_8.QueryInflationRateResponse>;
                annualProvisions(request?: _8.QueryAnnualProvisionsRequest): Promise<_8.QueryAnnualProvisionsResponse>;
                genesisTime(request?: _8.QueryGenesisTimeRequest): Promise<_8.QueryGenesisTimeResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            QueryInflationRateRequest: {
                typeUrl: string;
                encode(_: _8.QueryInflationRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryInflationRateRequest;
                fromPartial(_: Partial<_8.QueryInflationRateRequest>): _8.QueryInflationRateRequest;
                fromAmino(_: _8.QueryInflationRateRequestAmino): _8.QueryInflationRateRequest;
                toAmino(_: _8.QueryInflationRateRequest): _8.QueryInflationRateRequestAmino;
                fromAminoMsg(object: _8.QueryInflationRateRequestAminoMsg): _8.QueryInflationRateRequest;
                fromProtoMsg(message: _8.QueryInflationRateRequestProtoMsg): _8.QueryInflationRateRequest;
                toProto(message: _8.QueryInflationRateRequest): Uint8Array;
                toProtoMsg(message: _8.QueryInflationRateRequest): _8.QueryInflationRateRequestProtoMsg;
            };
            QueryInflationRateResponse: {
                typeUrl: string;
                encode(message: _8.QueryInflationRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryInflationRateResponse;
                fromPartial(object: Partial<_8.QueryInflationRateResponse>): _8.QueryInflationRateResponse;
                fromAmino(object: _8.QueryInflationRateResponseAmino): _8.QueryInflationRateResponse;
                toAmino(message: _8.QueryInflationRateResponse): _8.QueryInflationRateResponseAmino;
                fromAminoMsg(object: _8.QueryInflationRateResponseAminoMsg): _8.QueryInflationRateResponse;
                fromProtoMsg(message: _8.QueryInflationRateResponseProtoMsg): _8.QueryInflationRateResponse;
                toProto(message: _8.QueryInflationRateResponse): Uint8Array;
                toProtoMsg(message: _8.QueryInflationRateResponse): _8.QueryInflationRateResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _8.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_8.QueryAnnualProvisionsRequest>): _8.QueryAnnualProvisionsRequest;
                fromAmino(_: _8.QueryAnnualProvisionsRequestAmino): _8.QueryAnnualProvisionsRequest;
                toAmino(_: _8.QueryAnnualProvisionsRequest): _8.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _8.QueryAnnualProvisionsRequestAminoMsg): _8.QueryAnnualProvisionsRequest;
                fromProtoMsg(message: _8.QueryAnnualProvisionsRequestProtoMsg): _8.QueryAnnualProvisionsRequest;
                toProto(message: _8.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAnnualProvisionsRequest): _8.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _8.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_8.QueryAnnualProvisionsResponse>): _8.QueryAnnualProvisionsResponse;
                fromAmino(object: _8.QueryAnnualProvisionsResponseAmino): _8.QueryAnnualProvisionsResponse;
                toAmino(message: _8.QueryAnnualProvisionsResponse): _8.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _8.QueryAnnualProvisionsResponseAminoMsg): _8.QueryAnnualProvisionsResponse;
                fromProtoMsg(message: _8.QueryAnnualProvisionsResponseProtoMsg): _8.QueryAnnualProvisionsResponse;
                toProto(message: _8.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAnnualProvisionsResponse): _8.QueryAnnualProvisionsResponseProtoMsg;
            };
            QueryGenesisTimeRequest: {
                typeUrl: string;
                encode(_: _8.QueryGenesisTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryGenesisTimeRequest;
                fromPartial(_: Partial<_8.QueryGenesisTimeRequest>): _8.QueryGenesisTimeRequest;
                fromAmino(_: _8.QueryGenesisTimeRequestAmino): _8.QueryGenesisTimeRequest;
                toAmino(_: _8.QueryGenesisTimeRequest): _8.QueryGenesisTimeRequestAmino;
                fromAminoMsg(object: _8.QueryGenesisTimeRequestAminoMsg): _8.QueryGenesisTimeRequest;
                fromProtoMsg(message: _8.QueryGenesisTimeRequestProtoMsg): _8.QueryGenesisTimeRequest;
                toProto(message: _8.QueryGenesisTimeRequest): Uint8Array;
                toProtoMsg(message: _8.QueryGenesisTimeRequest): _8.QueryGenesisTimeRequestProtoMsg;
            };
            QueryGenesisTimeResponse: {
                typeUrl: string;
                encode(message: _8.QueryGenesisTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryGenesisTimeResponse;
                fromPartial(object: Partial<_8.QueryGenesisTimeResponse>): _8.QueryGenesisTimeResponse;
                fromAmino(object: _8.QueryGenesisTimeResponseAmino): _8.QueryGenesisTimeResponse;
                toAmino(message: _8.QueryGenesisTimeResponse): _8.QueryGenesisTimeResponseAmino;
                fromAminoMsg(object: _8.QueryGenesisTimeResponseAminoMsg): _8.QueryGenesisTimeResponse;
                fromProtoMsg(message: _8.QueryGenesisTimeResponseProtoMsg): _8.QueryGenesisTimeResponse;
                toProto(message: _8.QueryGenesisTimeResponse): Uint8Array;
                toProtoMsg(message: _8.QueryGenesisTimeResponse): _8.QueryGenesisTimeResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _7.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Minter;
                fromPartial(object: Partial<_7.Minter>): _7.Minter;
                fromAmino(object: _7.MinterAmino): _7.Minter;
                toAmino(message: _7.Minter): _7.MinterAmino;
                fromAminoMsg(object: _7.MinterAminoMsg): _7.Minter;
                fromProtoMsg(message: _7.MinterProtoMsg): _7.Minter;
                toProto(message: _7.Minter): Uint8Array;
                toProtoMsg(message: _7.Minter): _7.MinterProtoMsg;
            };
            GenesisTime: {
                typeUrl: string;
                encode(message: _7.GenesisTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.GenesisTime;
                fromPartial(object: Partial<_7.GenesisTime>): _7.GenesisTime;
                fromAmino(object: _7.GenesisTimeAmino): _7.GenesisTime;
                toAmino(message: _7.GenesisTime): _7.GenesisTimeAmino;
                fromAminoMsg(object: _7.GenesisTimeAminoMsg): _7.GenesisTime;
                fromProtoMsg(message: _7.GenesisTimeProtoMsg): _7.GenesisTime;
                toProto(message: _7.GenesisTime): Uint8Array;
                toProtoMsg(message: _7.GenesisTime): _7.GenesisTimeProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _6.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.GenesisState;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
                fromAmino(object: _6.GenesisStateAmino): _6.GenesisState;
                toAmino(message: _6.GenesisState): _6.GenesisStateAmino;
                fromAminoMsg(object: _6.GenesisStateAminoMsg): _6.GenesisState;
                fromProtoMsg(message: _6.GenesisStateProtoMsg): _6.GenesisState;
                toProto(message: _6.GenesisState): Uint8Array;
                toProtoMsg(message: _6.GenesisState): _6.GenesisStateProtoMsg;
            };
        };
    }
    namespace qgb {
        const v1: {
            MsgClientImpl: typeof _139.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                attestationRequestByNonce(request: _10.QueryAttestationRequestByNonceRequest): Promise<_10.QueryAttestationRequestByNonceResponse>;
                latestAttestationNonce(request?: _10.QueryLatestAttestationNonceRequest): Promise<_10.QueryLatestAttestationNonceResponse>;
                earliestAttestationNonce(request?: _10.QueryEarliestAttestationNonceRequest): Promise<_10.QueryEarliestAttestationNonceResponse>;
                latestValsetRequestBeforeNonce(request: _10.QueryLatestValsetRequestBeforeNonceRequest): Promise<_10.QueryLatestValsetRequestBeforeNonceResponse>;
                latestUnbondingHeight(request?: _10.QueryLatestUnbondingHeightRequest): Promise<_10.QueryLatestUnbondingHeightResponse>;
                dataCommitmentRangeForHeight(request: _10.QueryDataCommitmentRangeForHeightRequest): Promise<_10.QueryDataCommitmentRangeForHeightResponse>;
                latestDataCommitment(request?: _10.QueryLatestDataCommitmentRequest): Promise<_10.QueryLatestDataCommitmentResponse>;
                eVMAddress(request: _10.QueryEVMAddressRequest): Promise<_10.QueryEVMAddressResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    registerEVMAddress(value: _11.MsgRegisterEVMAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerEVMAddress(value: _11.MsgRegisterEVMAddress): {
                        typeUrl: string;
                        value: _11.MsgRegisterEVMAddress;
                    };
                };
                fromJSON: {
                    registerEVMAddress(value: any): {
                        typeUrl: string;
                        value: _11.MsgRegisterEVMAddress;
                    };
                };
                fromPartial: {
                    registerEVMAddress(value: _11.MsgRegisterEVMAddress): {
                        typeUrl: string;
                        value: _11.MsgRegisterEVMAddress;
                    };
                };
            };
            AminoConverter: {
                "/celestia.qgb.v1.MsgRegisterEVMAddress": {
                    aminoType: string;
                    toAmino: (message: _11.MsgRegisterEVMAddress) => _11.MsgRegisterEVMAddressAmino;
                    fromAmino: (object: _11.MsgRegisterEVMAddressAmino) => _11.MsgRegisterEVMAddress;
                };
            };
            BridgeValidator: {
                typeUrl: string;
                encode(message: _12.BridgeValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.BridgeValidator;
                fromPartial(object: Partial<_12.BridgeValidator>): _12.BridgeValidator;
                fromAmino(object: _12.BridgeValidatorAmino): _12.BridgeValidator;
                toAmino(message: _12.BridgeValidator): _12.BridgeValidatorAmino;
                fromAminoMsg(object: _12.BridgeValidatorAminoMsg): _12.BridgeValidator;
                fromProtoMsg(message: _12.BridgeValidatorProtoMsg): _12.BridgeValidator;
                toProto(message: _12.BridgeValidator): Uint8Array;
                toProtoMsg(message: _12.BridgeValidator): _12.BridgeValidatorProtoMsg;
            };
            Valset: {
                typeUrl: string;
                encode(message: _12.Valset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Valset;
                fromPartial(object: Partial<_12.Valset>): _12.Valset;
                fromAmino(object: _12.ValsetAmino): _12.Valset;
                toAmino(message: _12.Valset): _12.ValsetAmino;
                fromAminoMsg(object: _12.ValsetAminoMsg): _12.Valset;
                fromProtoMsg(message: _12.ValsetProtoMsg): _12.Valset;
                toProto(message: _12.Valset): Uint8Array;
                toProtoMsg(message: _12.Valset): _12.ValsetProtoMsg;
            };
            DataCommitment: {
                typeUrl: string;
                encode(message: _12.DataCommitment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.DataCommitment;
                fromPartial(object: Partial<_12.DataCommitment>): _12.DataCommitment;
                fromAmino(object: _12.DataCommitmentAmino): _12.DataCommitment;
                toAmino(message: _12.DataCommitment): _12.DataCommitmentAmino;
                fromAminoMsg(object: _12.DataCommitmentAminoMsg): _12.DataCommitment;
                fromProtoMsg(message: _12.DataCommitmentProtoMsg): _12.DataCommitment;
                toProto(message: _12.DataCommitment): Uint8Array;
                toProtoMsg(message: _12.DataCommitment): _12.DataCommitmentProtoMsg;
            };
            MsgRegisterEVMAddress: {
                typeUrl: string;
                encode(message: _11.MsgRegisterEVMAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgRegisterEVMAddress;
                fromPartial(object: Partial<_11.MsgRegisterEVMAddress>): _11.MsgRegisterEVMAddress;
                fromAmino(object: _11.MsgRegisterEVMAddressAmino): _11.MsgRegisterEVMAddress;
                toAmino(message: _11.MsgRegisterEVMAddress): _11.MsgRegisterEVMAddressAmino;
                fromAminoMsg(object: _11.MsgRegisterEVMAddressAminoMsg): _11.MsgRegisterEVMAddress;
                fromProtoMsg(message: _11.MsgRegisterEVMAddressProtoMsg): _11.MsgRegisterEVMAddress;
                toProto(message: _11.MsgRegisterEVMAddress): Uint8Array;
                toProtoMsg(message: _11.MsgRegisterEVMAddress): _11.MsgRegisterEVMAddressProtoMsg;
            };
            MsgRegisterEVMAddressResponse: {
                typeUrl: string;
                encode(_: _11.MsgRegisterEVMAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgRegisterEVMAddressResponse;
                fromPartial(_: Partial<_11.MsgRegisterEVMAddressResponse>): _11.MsgRegisterEVMAddressResponse;
                fromAmino(_: _11.MsgRegisterEVMAddressResponseAmino): _11.MsgRegisterEVMAddressResponse;
                toAmino(_: _11.MsgRegisterEVMAddressResponse): _11.MsgRegisterEVMAddressResponseAmino;
                fromAminoMsg(object: _11.MsgRegisterEVMAddressResponseAminoMsg): _11.MsgRegisterEVMAddressResponse;
                fromProtoMsg(message: _11.MsgRegisterEVMAddressResponseProtoMsg): _11.MsgRegisterEVMAddressResponse;
                toProto(message: _11.MsgRegisterEVMAddressResponse): Uint8Array;
                toProtoMsg(message: _11.MsgRegisterEVMAddressResponse): _11.MsgRegisterEVMAddressResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _10.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryParamsRequest;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
                fromAmino(_: _10.QueryParamsRequestAmino): _10.QueryParamsRequest;
                toAmino(_: _10.QueryParamsRequest): _10.QueryParamsRequestAmino;
                fromAminoMsg(object: _10.QueryParamsRequestAminoMsg): _10.QueryParamsRequest;
                fromProtoMsg(message: _10.QueryParamsRequestProtoMsg): _10.QueryParamsRequest;
                toProto(message: _10.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryParamsRequest): _10.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _10.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryParamsResponse;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
                fromAmino(object: _10.QueryParamsResponseAmino): _10.QueryParamsResponse;
                toAmino(message: _10.QueryParamsResponse): _10.QueryParamsResponseAmino;
                fromAminoMsg(object: _10.QueryParamsResponseAminoMsg): _10.QueryParamsResponse;
                fromProtoMsg(message: _10.QueryParamsResponseProtoMsg): _10.QueryParamsResponse;
                toProto(message: _10.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryParamsResponse): _10.QueryParamsResponseProtoMsg;
            };
            QueryAttestationRequestByNonceRequest: {
                typeUrl: string;
                encode(message: _10.QueryAttestationRequestByNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAttestationRequestByNonceRequest;
                fromPartial(object: Partial<_10.QueryAttestationRequestByNonceRequest>): _10.QueryAttestationRequestByNonceRequest;
                fromAmino(object: _10.QueryAttestationRequestByNonceRequestAmino): _10.QueryAttestationRequestByNonceRequest;
                toAmino(message: _10.QueryAttestationRequestByNonceRequest): _10.QueryAttestationRequestByNonceRequestAmino;
                fromAminoMsg(object: _10.QueryAttestationRequestByNonceRequestAminoMsg): _10.QueryAttestationRequestByNonceRequest;
                fromProtoMsg(message: _10.QueryAttestationRequestByNonceRequestProtoMsg): _10.QueryAttestationRequestByNonceRequest;
                toProto(message: _10.QueryAttestationRequestByNonceRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAttestationRequestByNonceRequest): _10.QueryAttestationRequestByNonceRequestProtoMsg;
            };
            QueryAttestationRequestByNonceResponse: {
                typeUrl: string;
                encode(message: _10.QueryAttestationRequestByNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAttestationRequestByNonceResponse;
                fromPartial(object: Partial<_10.QueryAttestationRequestByNonceResponse>): _10.QueryAttestationRequestByNonceResponse;
                fromAmino(object: _10.QueryAttestationRequestByNonceResponseAmino): _10.QueryAttestationRequestByNonceResponse;
                toAmino(message: _10.QueryAttestationRequestByNonceResponse): _10.QueryAttestationRequestByNonceResponseAmino;
                fromAminoMsg(object: _10.QueryAttestationRequestByNonceResponseAminoMsg): _10.QueryAttestationRequestByNonceResponse;
                fromProtoMsg(message: _10.QueryAttestationRequestByNonceResponseProtoMsg): _10.QueryAttestationRequestByNonceResponse;
                toProto(message: _10.QueryAttestationRequestByNonceResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAttestationRequestByNonceResponse): _10.QueryAttestationRequestByNonceResponseProtoMsg;
            };
            QueryLatestAttestationNonceRequest: {
                typeUrl: string;
                encode(_: _10.QueryLatestAttestationNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryLatestAttestationNonceRequest;
                fromPartial(_: Partial<_10.QueryLatestAttestationNonceRequest>): _10.QueryLatestAttestationNonceRequest;
                fromAmino(_: _10.QueryLatestAttestationNonceRequestAmino): _10.QueryLatestAttestationNonceRequest;
                toAmino(_: _10.QueryLatestAttestationNonceRequest): _10.QueryLatestAttestationNonceRequestAmino;
                fromAminoMsg(object: _10.QueryLatestAttestationNonceRequestAminoMsg): _10.QueryLatestAttestationNonceRequest;
                fromProtoMsg(message: _10.QueryLatestAttestationNonceRequestProtoMsg): _10.QueryLatestAttestationNonceRequest;
                toProto(message: _10.QueryLatestAttestationNonceRequest): Uint8Array;
                toProtoMsg(message: _10.QueryLatestAttestationNonceRequest): _10.QueryLatestAttestationNonceRequestProtoMsg;
            };
            QueryLatestAttestationNonceResponse: {
                typeUrl: string;
                encode(message: _10.QueryLatestAttestationNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryLatestAttestationNonceResponse;
                fromPartial(object: Partial<_10.QueryLatestAttestationNonceResponse>): _10.QueryLatestAttestationNonceResponse;
                fromAmino(object: _10.QueryLatestAttestationNonceResponseAmino): _10.QueryLatestAttestationNonceResponse;
                toAmino(message: _10.QueryLatestAttestationNonceResponse): _10.QueryLatestAttestationNonceResponseAmino;
                fromAminoMsg(object: _10.QueryLatestAttestationNonceResponseAminoMsg): _10.QueryLatestAttestationNonceResponse;
                fromProtoMsg(message: _10.QueryLatestAttestationNonceResponseProtoMsg): _10.QueryLatestAttestationNonceResponse;
                toProto(message: _10.QueryLatestAttestationNonceResponse): Uint8Array;
                toProtoMsg(message: _10.QueryLatestAttestationNonceResponse): _10.QueryLatestAttestationNonceResponseProtoMsg;
            };
            QueryEarliestAttestationNonceRequest: {
                typeUrl: string;
                encode(_: _10.QueryEarliestAttestationNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryEarliestAttestationNonceRequest;
                fromPartial(_: Partial<_10.QueryEarliestAttestationNonceRequest>): _10.QueryEarliestAttestationNonceRequest;
                fromAmino(_: _10.QueryEarliestAttestationNonceRequestAmino): _10.QueryEarliestAttestationNonceRequest;
                toAmino(_: _10.QueryEarliestAttestationNonceRequest): _10.QueryEarliestAttestationNonceRequestAmino;
                fromAminoMsg(object: _10.QueryEarliestAttestationNonceRequestAminoMsg): _10.QueryEarliestAttestationNonceRequest;
                fromProtoMsg(message: _10.QueryEarliestAttestationNonceRequestProtoMsg): _10.QueryEarliestAttestationNonceRequest;
                toProto(message: _10.QueryEarliestAttestationNonceRequest): Uint8Array;
                toProtoMsg(message: _10.QueryEarliestAttestationNonceRequest): _10.QueryEarliestAttestationNonceRequestProtoMsg;
            };
            QueryEarliestAttestationNonceResponse: {
                typeUrl: string;
                encode(message: _10.QueryEarliestAttestationNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryEarliestAttestationNonceResponse;
                fromPartial(object: Partial<_10.QueryEarliestAttestationNonceResponse>): _10.QueryEarliestAttestationNonceResponse;
                fromAmino(object: _10.QueryEarliestAttestationNonceResponseAmino): _10.QueryEarliestAttestationNonceResponse;
                toAmino(message: _10.QueryEarliestAttestationNonceResponse): _10.QueryEarliestAttestationNonceResponseAmino;
                fromAminoMsg(object: _10.QueryEarliestAttestationNonceResponseAminoMsg): _10.QueryEarliestAttestationNonceResponse;
                fromProtoMsg(message: _10.QueryEarliestAttestationNonceResponseProtoMsg): _10.QueryEarliestAttestationNonceResponse;
                toProto(message: _10.QueryEarliestAttestationNonceResponse): Uint8Array;
                toProtoMsg(message: _10.QueryEarliestAttestationNonceResponse): _10.QueryEarliestAttestationNonceResponseProtoMsg;
            };
            QueryLatestValsetRequestBeforeNonceRequest: {
                typeUrl: string;
                encode(message: _10.QueryLatestValsetRequestBeforeNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryLatestValsetRequestBeforeNonceRequest;
                fromPartial(object: Partial<_10.QueryLatestValsetRequestBeforeNonceRequest>): _10.QueryLatestValsetRequestBeforeNonceRequest;
                fromAmino(object: _10.QueryLatestValsetRequestBeforeNonceRequestAmino): _10.QueryLatestValsetRequestBeforeNonceRequest;
                toAmino(message: _10.QueryLatestValsetRequestBeforeNonceRequest): _10.QueryLatestValsetRequestBeforeNonceRequestAmino;
                fromAminoMsg(object: _10.QueryLatestValsetRequestBeforeNonceRequestAminoMsg): _10.QueryLatestValsetRequestBeforeNonceRequest;
                fromProtoMsg(message: _10.QueryLatestValsetRequestBeforeNonceRequestProtoMsg): _10.QueryLatestValsetRequestBeforeNonceRequest;
                toProto(message: _10.QueryLatestValsetRequestBeforeNonceRequest): Uint8Array;
                toProtoMsg(message: _10.QueryLatestValsetRequestBeforeNonceRequest): _10.QueryLatestValsetRequestBeforeNonceRequestProtoMsg;
            };
            QueryLatestValsetRequestBeforeNonceResponse: {
                typeUrl: string;
                encode(message: _10.QueryLatestValsetRequestBeforeNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryLatestValsetRequestBeforeNonceResponse;
                fromPartial(object: Partial<_10.QueryLatestValsetRequestBeforeNonceResponse>): _10.QueryLatestValsetRequestBeforeNonceResponse;
                fromAmino(object: _10.QueryLatestValsetRequestBeforeNonceResponseAmino): _10.QueryLatestValsetRequestBeforeNonceResponse;
                toAmino(message: _10.QueryLatestValsetRequestBeforeNonceResponse): _10.QueryLatestValsetRequestBeforeNonceResponseAmino;
                fromAminoMsg(object: _10.QueryLatestValsetRequestBeforeNonceResponseAminoMsg): _10.QueryLatestValsetRequestBeforeNonceResponse;
                fromProtoMsg(message: _10.QueryLatestValsetRequestBeforeNonceResponseProtoMsg): _10.QueryLatestValsetRequestBeforeNonceResponse;
                toProto(message: _10.QueryLatestValsetRequestBeforeNonceResponse): Uint8Array;
                toProtoMsg(message: _10.QueryLatestValsetRequestBeforeNonceResponse): _10.QueryLatestValsetRequestBeforeNonceResponseProtoMsg;
            };
            QueryLatestUnbondingHeightRequest: {
                typeUrl: string;
                encode(_: _10.QueryLatestUnbondingHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryLatestUnbondingHeightRequest;
                fromPartial(_: Partial<_10.QueryLatestUnbondingHeightRequest>): _10.QueryLatestUnbondingHeightRequest;
                fromAmino(_: _10.QueryLatestUnbondingHeightRequestAmino): _10.QueryLatestUnbondingHeightRequest;
                toAmino(_: _10.QueryLatestUnbondingHeightRequest): _10.QueryLatestUnbondingHeightRequestAmino;
                fromAminoMsg(object: _10.QueryLatestUnbondingHeightRequestAminoMsg): _10.QueryLatestUnbondingHeightRequest;
                fromProtoMsg(message: _10.QueryLatestUnbondingHeightRequestProtoMsg): _10.QueryLatestUnbondingHeightRequest;
                toProto(message: _10.QueryLatestUnbondingHeightRequest): Uint8Array;
                toProtoMsg(message: _10.QueryLatestUnbondingHeightRequest): _10.QueryLatestUnbondingHeightRequestProtoMsg;
            };
            QueryLatestUnbondingHeightResponse: {
                typeUrl: string;
                encode(message: _10.QueryLatestUnbondingHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryLatestUnbondingHeightResponse;
                fromPartial(object: Partial<_10.QueryLatestUnbondingHeightResponse>): _10.QueryLatestUnbondingHeightResponse;
                fromAmino(object: _10.QueryLatestUnbondingHeightResponseAmino): _10.QueryLatestUnbondingHeightResponse;
                toAmino(message: _10.QueryLatestUnbondingHeightResponse): _10.QueryLatestUnbondingHeightResponseAmino;
                fromAminoMsg(object: _10.QueryLatestUnbondingHeightResponseAminoMsg): _10.QueryLatestUnbondingHeightResponse;
                fromProtoMsg(message: _10.QueryLatestUnbondingHeightResponseProtoMsg): _10.QueryLatestUnbondingHeightResponse;
                toProto(message: _10.QueryLatestUnbondingHeightResponse): Uint8Array;
                toProtoMsg(message: _10.QueryLatestUnbondingHeightResponse): _10.QueryLatestUnbondingHeightResponseProtoMsg;
            };
            QueryLatestDataCommitmentRequest: {
                typeUrl: string;
                encode(_: _10.QueryLatestDataCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryLatestDataCommitmentRequest;
                fromPartial(_: Partial<_10.QueryLatestDataCommitmentRequest>): _10.QueryLatestDataCommitmentRequest;
                fromAmino(_: _10.QueryLatestDataCommitmentRequestAmino): _10.QueryLatestDataCommitmentRequest;
                toAmino(_: _10.QueryLatestDataCommitmentRequest): _10.QueryLatestDataCommitmentRequestAmino;
                fromAminoMsg(object: _10.QueryLatestDataCommitmentRequestAminoMsg): _10.QueryLatestDataCommitmentRequest;
                fromProtoMsg(message: _10.QueryLatestDataCommitmentRequestProtoMsg): _10.QueryLatestDataCommitmentRequest;
                toProto(message: _10.QueryLatestDataCommitmentRequest): Uint8Array;
                toProtoMsg(message: _10.QueryLatestDataCommitmentRequest): _10.QueryLatestDataCommitmentRequestProtoMsg;
            };
            QueryLatestDataCommitmentResponse: {
                typeUrl: string;
                encode(message: _10.QueryLatestDataCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryLatestDataCommitmentResponse;
                fromPartial(object: Partial<_10.QueryLatestDataCommitmentResponse>): _10.QueryLatestDataCommitmentResponse;
                fromAmino(object: _10.QueryLatestDataCommitmentResponseAmino): _10.QueryLatestDataCommitmentResponse;
                toAmino(message: _10.QueryLatestDataCommitmentResponse): _10.QueryLatestDataCommitmentResponseAmino;
                fromAminoMsg(object: _10.QueryLatestDataCommitmentResponseAminoMsg): _10.QueryLatestDataCommitmentResponse;
                fromProtoMsg(message: _10.QueryLatestDataCommitmentResponseProtoMsg): _10.QueryLatestDataCommitmentResponse;
                toProto(message: _10.QueryLatestDataCommitmentResponse): Uint8Array;
                toProtoMsg(message: _10.QueryLatestDataCommitmentResponse): _10.QueryLatestDataCommitmentResponseProtoMsg;
            };
            QueryDataCommitmentRangeForHeightRequest: {
                typeUrl: string;
                encode(message: _10.QueryDataCommitmentRangeForHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryDataCommitmentRangeForHeightRequest;
                fromPartial(object: Partial<_10.QueryDataCommitmentRangeForHeightRequest>): _10.QueryDataCommitmentRangeForHeightRequest;
                fromAmino(object: _10.QueryDataCommitmentRangeForHeightRequestAmino): _10.QueryDataCommitmentRangeForHeightRequest;
                toAmino(message: _10.QueryDataCommitmentRangeForHeightRequest): _10.QueryDataCommitmentRangeForHeightRequestAmino;
                fromAminoMsg(object: _10.QueryDataCommitmentRangeForHeightRequestAminoMsg): _10.QueryDataCommitmentRangeForHeightRequest;
                fromProtoMsg(message: _10.QueryDataCommitmentRangeForHeightRequestProtoMsg): _10.QueryDataCommitmentRangeForHeightRequest;
                toProto(message: _10.QueryDataCommitmentRangeForHeightRequest): Uint8Array;
                toProtoMsg(message: _10.QueryDataCommitmentRangeForHeightRequest): _10.QueryDataCommitmentRangeForHeightRequestProtoMsg;
            };
            QueryDataCommitmentRangeForHeightResponse: {
                typeUrl: string;
                encode(message: _10.QueryDataCommitmentRangeForHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryDataCommitmentRangeForHeightResponse;
                fromPartial(object: Partial<_10.QueryDataCommitmentRangeForHeightResponse>): _10.QueryDataCommitmentRangeForHeightResponse;
                fromAmino(object: _10.QueryDataCommitmentRangeForHeightResponseAmino): _10.QueryDataCommitmentRangeForHeightResponse;
                toAmino(message: _10.QueryDataCommitmentRangeForHeightResponse): _10.QueryDataCommitmentRangeForHeightResponseAmino;
                fromAminoMsg(object: _10.QueryDataCommitmentRangeForHeightResponseAminoMsg): _10.QueryDataCommitmentRangeForHeightResponse;
                fromProtoMsg(message: _10.QueryDataCommitmentRangeForHeightResponseProtoMsg): _10.QueryDataCommitmentRangeForHeightResponse;
                toProto(message: _10.QueryDataCommitmentRangeForHeightResponse): Uint8Array;
                toProtoMsg(message: _10.QueryDataCommitmentRangeForHeightResponse): _10.QueryDataCommitmentRangeForHeightResponseProtoMsg;
            };
            QueryEVMAddressRequest: {
                typeUrl: string;
                encode(message: _10.QueryEVMAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryEVMAddressRequest;
                fromPartial(object: Partial<_10.QueryEVMAddressRequest>): _10.QueryEVMAddressRequest;
                fromAmino(object: _10.QueryEVMAddressRequestAmino): _10.QueryEVMAddressRequest;
                toAmino(message: _10.QueryEVMAddressRequest): _10.QueryEVMAddressRequestAmino;
                fromAminoMsg(object: _10.QueryEVMAddressRequestAminoMsg): _10.QueryEVMAddressRequest;
                fromProtoMsg(message: _10.QueryEVMAddressRequestProtoMsg): _10.QueryEVMAddressRequest;
                toProto(message: _10.QueryEVMAddressRequest): Uint8Array;
                toProtoMsg(message: _10.QueryEVMAddressRequest): _10.QueryEVMAddressRequestProtoMsg;
            };
            QueryEVMAddressResponse: {
                typeUrl: string;
                encode(message: _10.QueryEVMAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryEVMAddressResponse;
                fromPartial(object: Partial<_10.QueryEVMAddressResponse>): _10.QueryEVMAddressResponse;
                fromAmino(object: _10.QueryEVMAddressResponseAmino): _10.QueryEVMAddressResponse;
                toAmino(message: _10.QueryEVMAddressResponse): _10.QueryEVMAddressResponseAmino;
                fromAminoMsg(object: _10.QueryEVMAddressResponseAminoMsg): _10.QueryEVMAddressResponse;
                fromProtoMsg(message: _10.QueryEVMAddressResponseProtoMsg): _10.QueryEVMAddressResponse;
                toProto(message: _10.QueryEVMAddressResponse): Uint8Array;
                toProtoMsg(message: _10.QueryEVMAddressResponse): _10.QueryEVMAddressResponseProtoMsg;
            };
            AttestationRequestI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _12.Valset | _12.DataCommitment;
            AttestationRequestI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AttestationRequestI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _9.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
                fromAmino(object: _9.GenesisStateAmino): _9.GenesisState;
                toAmino(message: _9.GenesisState): _9.GenesisStateAmino;
                fromAminoMsg(object: _9.GenesisStateAminoMsg): _9.GenesisState;
                fromProtoMsg(message: _9.GenesisStateProtoMsg): _9.GenesisState;
                toProto(message: _9.GenesisState): Uint8Array;
                toProtoMsg(message: _9.GenesisState): _9.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            celestia: {
                blob: {
                    v1: _138.MsgClientImpl;
                };
                qgb: {
                    v1: _139.MsgClientImpl;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
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
            rpcEndpoint: any;
        }) => Promise<{
            celestia: {
                blob: {
                    v1: {
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    };
                };
                mint: {
                    v1: {
                        inflationRate(request?: _8.QueryInflationRateRequest): Promise<_8.QueryInflationRateResponse>;
                        annualProvisions(request?: _8.QueryAnnualProvisionsRequest): Promise<_8.QueryAnnualProvisionsResponse>;
                        genesisTime(request?: _8.QueryGenesisTimeRequest): Promise<_8.QueryGenesisTimeResponse>;
                    };
                };
                qgb: {
                    v1: {
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        attestationRequestByNonce(request: _10.QueryAttestationRequestByNonceRequest): Promise<_10.QueryAttestationRequestByNonceResponse>;
                        latestAttestationNonce(request?: _10.QueryLatestAttestationNonceRequest): Promise<_10.QueryLatestAttestationNonceResponse>;
                        earliestAttestationNonce(request?: _10.QueryEarliestAttestationNonceRequest): Promise<_10.QueryEarliestAttestationNonceResponse>;
                        latestValsetRequestBeforeNonce(request: _10.QueryLatestValsetRequestBeforeNonceRequest): Promise<_10.QueryLatestValsetRequestBeforeNonceResponse>;
                        latestUnbondingHeight(request?: _10.QueryLatestUnbondingHeightRequest): Promise<_10.QueryLatestUnbondingHeightResponse>;
                        dataCommitmentRangeForHeight(request: _10.QueryDataCommitmentRangeForHeightRequest): Promise<_10.QueryDataCommitmentRangeForHeightResponse>;
                        latestDataCommitment(request?: _10.QueryLatestDataCommitmentRequest): Promise<_10.QueryLatestDataCommitmentResponse>;
                        eVMAddress(request: _10.QueryEVMAddressRequest): Promise<_10.QueryEVMAddressResponse>;
                    };
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
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
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
            celestia: {
                blob: {
                    v1: _132.LCDQueryClient;
                };
                mint: {
                    v1: _133.LCDQueryClient;
                };
                qgb: {
                    v1: _134.LCDQueryClient;
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
