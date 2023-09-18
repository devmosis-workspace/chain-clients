import * as _0 from "./authority/v1/authority";
import * as _1 from "./authority/v1/genesis";
import * as _2 from "./authority/v1/query";
import * as _3 from "./authority/v1/tx";
import * as _4 from "./buyback/v1/genesis";
import * as _5 from "./buyback/v1/query";
import * as _6 from "./inflation/v1/genesis";
import * as _7 from "./inflation/v1/inflation";
import * as _8 from "./inflation/v1/query";
import * as _9 from "./issuer/v1/genesis";
import * as _10 from "./issuer/v1/issuer";
import * as _11 from "./issuer/v1/query";
import * as _12 from "./issuer/v1/tx";
import * as _13 from "./liquidityprovider/v1/genesis";
import * as _14 from "./liquidityprovider/v1/liquidityprovider";
import * as _15 from "./liquidityprovider/v1/query";
import * as _16 from "./liquidityprovider/v1/tx";
import * as _17 from "./market/v1/market";
import * as _18 from "./market/v1/query";
import * as _19 from "./market/v1/tx";
import * as _20 from "./queries/v1/query";
import * as _127 from "./authority/v1/query.lcd";
import * as _128 from "./buyback/v1/query.lcd";
import * as _129 from "./inflation/v1/query.lcd";
import * as _130 from "./issuer/v1/query.lcd";
import * as _131 from "./liquidityprovider/v1/query.lcd";
import * as _132 from "./market/v1/query.lcd";
import * as _133 from "./queries/v1/query.lcd";
import * as _134 from "./authority/v1/query.rpc.Query";
import * as _135 from "./buyback/v1/query.rpc.Query";
import * as _136 from "./inflation/v1/query.rpc.Query";
import * as _137 from "./issuer/v1/query.rpc.Query";
import * as _138 from "./liquidityprovider/v1/query.rpc.Query";
import * as _139 from "./market/v1/query.rpc.Query";
import * as _140 from "./queries/v1/query.rpc.Query";
import * as _141 from "./authority/v1/tx.rpc.msg";
import * as _142 from "./issuer/v1/tx.rpc.msg";
import * as _143 from "./liquidityprovider/v1/tx.rpc.msg";
import * as _144 from "./market/v1/tx.rpc.msg";
export declare namespace em {
    namespace authority {
        const v1: {
            MsgClientImpl: typeof _141.MsgClientImpl;
            QueryClientImpl: typeof _134.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gasPrices(request?: _2.QueryGasPricesRequest): Promise<_2.QueryGasPricesResponse>;
                upgradePlan(request?: _2.QueryUpgradePlanRequest): Promise<_2.QueryUpgradePlanResponse>;
            };
            LCDQueryClient: typeof _127.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createIssuer(value: _3.MsgCreateIssuer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    destroyIssuer(value: _3.MsgDestroyIssuer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setGasPrices(value: _3.MsgSetGasPrices): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    replaceAuthority(value: _3.MsgReplaceAuthority): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    scheduleUpgrade(value: _3.MsgScheduleUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setParameters(value: _3.MsgSetParameters): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createIssuer(value: _3.MsgCreateIssuer): {
                        typeUrl: string;
                        value: _3.MsgCreateIssuer;
                    };
                    destroyIssuer(value: _3.MsgDestroyIssuer): {
                        typeUrl: string;
                        value: _3.MsgDestroyIssuer;
                    };
                    setGasPrices(value: _3.MsgSetGasPrices): {
                        typeUrl: string;
                        value: _3.MsgSetGasPrices;
                    };
                    replaceAuthority(value: _3.MsgReplaceAuthority): {
                        typeUrl: string;
                        value: _3.MsgReplaceAuthority;
                    };
                    scheduleUpgrade(value: _3.MsgScheduleUpgrade): {
                        typeUrl: string;
                        value: _3.MsgScheduleUpgrade;
                    };
                    setParameters(value: _3.MsgSetParameters): {
                        typeUrl: string;
                        value: _3.MsgSetParameters;
                    };
                };
                fromJSON: {
                    createIssuer(value: any): {
                        typeUrl: string;
                        value: _3.MsgCreateIssuer;
                    };
                    destroyIssuer(value: any): {
                        typeUrl: string;
                        value: _3.MsgDestroyIssuer;
                    };
                    setGasPrices(value: any): {
                        typeUrl: string;
                        value: _3.MsgSetGasPrices;
                    };
                    replaceAuthority(value: any): {
                        typeUrl: string;
                        value: _3.MsgReplaceAuthority;
                    };
                    scheduleUpgrade(value: any): {
                        typeUrl: string;
                        value: _3.MsgScheduleUpgrade;
                    };
                    setParameters(value: any): {
                        typeUrl: string;
                        value: _3.MsgSetParameters;
                    };
                };
                fromPartial: {
                    createIssuer(value: _3.MsgCreateIssuer): {
                        typeUrl: string;
                        value: _3.MsgCreateIssuer;
                    };
                    destroyIssuer(value: _3.MsgDestroyIssuer): {
                        typeUrl: string;
                        value: _3.MsgDestroyIssuer;
                    };
                    setGasPrices(value: _3.MsgSetGasPrices): {
                        typeUrl: string;
                        value: _3.MsgSetGasPrices;
                    };
                    replaceAuthority(value: _3.MsgReplaceAuthority): {
                        typeUrl: string;
                        value: _3.MsgReplaceAuthority;
                    };
                    scheduleUpgrade(value: _3.MsgScheduleUpgrade): {
                        typeUrl: string;
                        value: _3.MsgScheduleUpgrade;
                    };
                    setParameters(value: _3.MsgSetParameters): {
                        typeUrl: string;
                        value: _3.MsgSetParameters;
                    };
                };
            };
            AminoConverter: {
                "/em.authority.v1.MsgCreateIssuer": {
                    aminoType: string;
                    toAmino: (message: _3.MsgCreateIssuer) => _3.MsgCreateIssuerAmino;
                    fromAmino: (object: _3.MsgCreateIssuerAmino) => _3.MsgCreateIssuer;
                };
                "/em.authority.v1.MsgDestroyIssuer": {
                    aminoType: string;
                    toAmino: (message: _3.MsgDestroyIssuer) => _3.MsgDestroyIssuerAmino;
                    fromAmino: (object: _3.MsgDestroyIssuerAmino) => _3.MsgDestroyIssuer;
                };
                "/em.authority.v1.MsgSetGasPrices": {
                    aminoType: string;
                    toAmino: (message: _3.MsgSetGasPrices) => _3.MsgSetGasPricesAmino;
                    fromAmino: (object: _3.MsgSetGasPricesAmino) => _3.MsgSetGasPrices;
                };
                "/em.authority.v1.MsgReplaceAuthority": {
                    aminoType: string;
                    toAmino: (message: _3.MsgReplaceAuthority) => _3.MsgReplaceAuthorityAmino;
                    fromAmino: (object: _3.MsgReplaceAuthorityAmino) => _3.MsgReplaceAuthority;
                };
                "/em.authority.v1.MsgScheduleUpgrade": {
                    aminoType: string;
                    toAmino: (message: _3.MsgScheduleUpgrade) => _3.MsgScheduleUpgradeAmino;
                    fromAmino: (object: _3.MsgScheduleUpgradeAmino) => _3.MsgScheduleUpgrade;
                };
                "/em.authority.v1.MsgSetParameters": {
                    aminoType: string;
                    toAmino: (message: _3.MsgSetParameters) => _3.MsgSetParametersAmino;
                    fromAmino: (object: _3.MsgSetParametersAmino) => _3.MsgSetParameters;
                };
            };
            MsgCreateIssuer: {
                typeUrl: string;
                encode(message: _3.MsgCreateIssuer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgCreateIssuer;
                fromPartial(object: Partial<_3.MsgCreateIssuer>): _3.MsgCreateIssuer;
                fromAmino(object: _3.MsgCreateIssuerAmino): _3.MsgCreateIssuer;
                toAmino(message: _3.MsgCreateIssuer): _3.MsgCreateIssuerAmino;
                fromAminoMsg(object: _3.MsgCreateIssuerAminoMsg): _3.MsgCreateIssuer;
                fromProtoMsg(message: _3.MsgCreateIssuerProtoMsg): _3.MsgCreateIssuer;
                toProto(message: _3.MsgCreateIssuer): Uint8Array;
                toProtoMsg(message: _3.MsgCreateIssuer): _3.MsgCreateIssuerProtoMsg;
            };
            Denomination: {
                typeUrl: string;
                encode(message: _3.Denomination, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.Denomination;
                fromPartial(object: Partial<_3.Denomination>): _3.Denomination;
                fromAmino(object: _3.DenominationAmino): _3.Denomination;
                toAmino(message: _3.Denomination): _3.DenominationAmino;
                fromAminoMsg(object: _3.DenominationAminoMsg): _3.Denomination;
                fromProtoMsg(message: _3.DenominationProtoMsg): _3.Denomination;
                toProto(message: _3.Denomination): Uint8Array;
                toProtoMsg(message: _3.Denomination): _3.DenominationProtoMsg;
            };
            MsgCreateIssuerResponse: {
                typeUrl: string;
                encode(_: _3.MsgCreateIssuerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgCreateIssuerResponse;
                fromPartial(_: Partial<_3.MsgCreateIssuerResponse>): _3.MsgCreateIssuerResponse;
                fromAmino(_: _3.MsgCreateIssuerResponseAmino): _3.MsgCreateIssuerResponse;
                toAmino(_: _3.MsgCreateIssuerResponse): _3.MsgCreateIssuerResponseAmino;
                fromAminoMsg(object: _3.MsgCreateIssuerResponseAminoMsg): _3.MsgCreateIssuerResponse;
                fromProtoMsg(message: _3.MsgCreateIssuerResponseProtoMsg): _3.MsgCreateIssuerResponse;
                toProto(message: _3.MsgCreateIssuerResponse): Uint8Array;
                toProtoMsg(message: _3.MsgCreateIssuerResponse): _3.MsgCreateIssuerResponseProtoMsg;
            };
            MsgDestroyIssuer: {
                typeUrl: string;
                encode(message: _3.MsgDestroyIssuer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgDestroyIssuer;
                fromPartial(object: Partial<_3.MsgDestroyIssuer>): _3.MsgDestroyIssuer;
                fromAmino(object: _3.MsgDestroyIssuerAmino): _3.MsgDestroyIssuer;
                toAmino(message: _3.MsgDestroyIssuer): _3.MsgDestroyIssuerAmino;
                fromAminoMsg(object: _3.MsgDestroyIssuerAminoMsg): _3.MsgDestroyIssuer;
                fromProtoMsg(message: _3.MsgDestroyIssuerProtoMsg): _3.MsgDestroyIssuer;
                toProto(message: _3.MsgDestroyIssuer): Uint8Array;
                toProtoMsg(message: _3.MsgDestroyIssuer): _3.MsgDestroyIssuerProtoMsg;
            };
            MsgDestroyIssuerResponse: {
                typeUrl: string;
                encode(_: _3.MsgDestroyIssuerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgDestroyIssuerResponse;
                fromPartial(_: Partial<_3.MsgDestroyIssuerResponse>): _3.MsgDestroyIssuerResponse;
                fromAmino(_: _3.MsgDestroyIssuerResponseAmino): _3.MsgDestroyIssuerResponse;
                toAmino(_: _3.MsgDestroyIssuerResponse): _3.MsgDestroyIssuerResponseAmino;
                fromAminoMsg(object: _3.MsgDestroyIssuerResponseAminoMsg): _3.MsgDestroyIssuerResponse;
                fromProtoMsg(message: _3.MsgDestroyIssuerResponseProtoMsg): _3.MsgDestroyIssuerResponse;
                toProto(message: _3.MsgDestroyIssuerResponse): Uint8Array;
                toProtoMsg(message: _3.MsgDestroyIssuerResponse): _3.MsgDestroyIssuerResponseProtoMsg;
            };
            MsgSetGasPrices: {
                typeUrl: string;
                encode(message: _3.MsgSetGasPrices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgSetGasPrices;
                fromPartial(object: Partial<_3.MsgSetGasPrices>): _3.MsgSetGasPrices;
                fromAmino(object: _3.MsgSetGasPricesAmino): _3.MsgSetGasPrices;
                toAmino(message: _3.MsgSetGasPrices): _3.MsgSetGasPricesAmino;
                fromAminoMsg(object: _3.MsgSetGasPricesAminoMsg): _3.MsgSetGasPrices;
                fromProtoMsg(message: _3.MsgSetGasPricesProtoMsg): _3.MsgSetGasPrices;
                toProto(message: _3.MsgSetGasPrices): Uint8Array;
                toProtoMsg(message: _3.MsgSetGasPrices): _3.MsgSetGasPricesProtoMsg;
            };
            MsgSetGasPricesResponse: {
                typeUrl: string;
                encode(_: _3.MsgSetGasPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgSetGasPricesResponse;
                fromPartial(_: Partial<_3.MsgSetGasPricesResponse>): _3.MsgSetGasPricesResponse;
                fromAmino(_: _3.MsgSetGasPricesResponseAmino): _3.MsgSetGasPricesResponse;
                toAmino(_: _3.MsgSetGasPricesResponse): _3.MsgSetGasPricesResponseAmino;
                fromAminoMsg(object: _3.MsgSetGasPricesResponseAminoMsg): _3.MsgSetGasPricesResponse;
                fromProtoMsg(message: _3.MsgSetGasPricesResponseProtoMsg): _3.MsgSetGasPricesResponse;
                toProto(message: _3.MsgSetGasPricesResponse): Uint8Array;
                toProtoMsg(message: _3.MsgSetGasPricesResponse): _3.MsgSetGasPricesResponseProtoMsg;
            };
            MsgReplaceAuthority: {
                typeUrl: string;
                encode(message: _3.MsgReplaceAuthority, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgReplaceAuthority;
                fromPartial(object: Partial<_3.MsgReplaceAuthority>): _3.MsgReplaceAuthority;
                fromAmino(object: _3.MsgReplaceAuthorityAmino): _3.MsgReplaceAuthority;
                toAmino(message: _3.MsgReplaceAuthority): _3.MsgReplaceAuthorityAmino;
                fromAminoMsg(object: _3.MsgReplaceAuthorityAminoMsg): _3.MsgReplaceAuthority;
                fromProtoMsg(message: _3.MsgReplaceAuthorityProtoMsg): _3.MsgReplaceAuthority;
                toProto(message: _3.MsgReplaceAuthority): Uint8Array;
                toProtoMsg(message: _3.MsgReplaceAuthority): _3.MsgReplaceAuthorityProtoMsg;
            };
            MsgReplaceAuthorityResponse: {
                typeUrl: string;
                encode(message: _3.MsgReplaceAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgReplaceAuthorityResponse;
                fromPartial(object: Partial<_3.MsgReplaceAuthorityResponse>): _3.MsgReplaceAuthorityResponse;
                fromAmino(object: _3.MsgReplaceAuthorityResponseAmino): _3.MsgReplaceAuthorityResponse;
                toAmino(message: _3.MsgReplaceAuthorityResponse): _3.MsgReplaceAuthorityResponseAmino;
                fromAminoMsg(object: _3.MsgReplaceAuthorityResponseAminoMsg): _3.MsgReplaceAuthorityResponse;
                fromProtoMsg(message: _3.MsgReplaceAuthorityResponseProtoMsg): _3.MsgReplaceAuthorityResponse;
                toProto(message: _3.MsgReplaceAuthorityResponse): Uint8Array;
                toProtoMsg(message: _3.MsgReplaceAuthorityResponse): _3.MsgReplaceAuthorityResponseProtoMsg;
            };
            MsgScheduleUpgrade: {
                typeUrl: string;
                encode(message: _3.MsgScheduleUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgScheduleUpgrade;
                fromPartial(object: Partial<_3.MsgScheduleUpgrade>): _3.MsgScheduleUpgrade;
                fromAmino(object: _3.MsgScheduleUpgradeAmino): _3.MsgScheduleUpgrade;
                toAmino(message: _3.MsgScheduleUpgrade): _3.MsgScheduleUpgradeAmino;
                fromAminoMsg(object: _3.MsgScheduleUpgradeAminoMsg): _3.MsgScheduleUpgrade;
                fromProtoMsg(message: _3.MsgScheduleUpgradeProtoMsg): _3.MsgScheduleUpgrade;
                toProto(message: _3.MsgScheduleUpgrade): Uint8Array;
                toProtoMsg(message: _3.MsgScheduleUpgrade): _3.MsgScheduleUpgradeProtoMsg;
            };
            MsgScheduleUpgradeResponse: {
                typeUrl: string;
                encode(_: _3.MsgScheduleUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgScheduleUpgradeResponse;
                fromPartial(_: Partial<_3.MsgScheduleUpgradeResponse>): _3.MsgScheduleUpgradeResponse;
                fromAmino(_: _3.MsgScheduleUpgradeResponseAmino): _3.MsgScheduleUpgradeResponse;
                toAmino(_: _3.MsgScheduleUpgradeResponse): _3.MsgScheduleUpgradeResponseAmino;
                fromAminoMsg(object: _3.MsgScheduleUpgradeResponseAminoMsg): _3.MsgScheduleUpgradeResponse;
                fromProtoMsg(message: _3.MsgScheduleUpgradeResponseProtoMsg): _3.MsgScheduleUpgradeResponse;
                toProto(message: _3.MsgScheduleUpgradeResponse): Uint8Array;
                toProtoMsg(message: _3.MsgScheduleUpgradeResponse): _3.MsgScheduleUpgradeResponseProtoMsg;
            };
            MsgSetParameters: {
                typeUrl: string;
                encode(message: _3.MsgSetParameters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgSetParameters;
                fromPartial(object: Partial<_3.MsgSetParameters>): _3.MsgSetParameters;
                fromAmino(object: _3.MsgSetParametersAmino): _3.MsgSetParameters;
                toAmino(message: _3.MsgSetParameters): _3.MsgSetParametersAmino;
                fromAminoMsg(object: _3.MsgSetParametersAminoMsg): _3.MsgSetParameters;
                fromProtoMsg(message: _3.MsgSetParametersProtoMsg): _3.MsgSetParameters;
                toProto(message: _3.MsgSetParameters): Uint8Array;
                toProtoMsg(message: _3.MsgSetParameters): _3.MsgSetParametersProtoMsg;
            };
            MsgSetParametersResponse: {
                typeUrl: string;
                encode(_: _3.MsgSetParametersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgSetParametersResponse;
                fromPartial(_: Partial<_3.MsgSetParametersResponse>): _3.MsgSetParametersResponse;
                fromAmino(_: _3.MsgSetParametersResponseAmino): _3.MsgSetParametersResponse;
                toAmino(_: _3.MsgSetParametersResponse): _3.MsgSetParametersResponseAmino;
                fromAminoMsg(object: _3.MsgSetParametersResponseAminoMsg): _3.MsgSetParametersResponse;
                fromProtoMsg(message: _3.MsgSetParametersResponseProtoMsg): _3.MsgSetParametersResponse;
                toProto(message: _3.MsgSetParametersResponse): Uint8Array;
                toProtoMsg(message: _3.MsgSetParametersResponse): _3.MsgSetParametersResponseProtoMsg;
            };
            QueryGasPricesRequest: {
                typeUrl: string;
                encode(_: _2.QueryGasPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryGasPricesRequest;
                fromPartial(_: Partial<_2.QueryGasPricesRequest>): _2.QueryGasPricesRequest;
                fromAmino(_: _2.QueryGasPricesRequestAmino): _2.QueryGasPricesRequest;
                toAmino(_: _2.QueryGasPricesRequest): _2.QueryGasPricesRequestAmino;
                fromAminoMsg(object: _2.QueryGasPricesRequestAminoMsg): _2.QueryGasPricesRequest;
                fromProtoMsg(message: _2.QueryGasPricesRequestProtoMsg): _2.QueryGasPricesRequest;
                toProto(message: _2.QueryGasPricesRequest): Uint8Array;
                toProtoMsg(message: _2.QueryGasPricesRequest): _2.QueryGasPricesRequestProtoMsg;
            };
            QueryGasPricesResponse: {
                typeUrl: string;
                encode(message: _2.QueryGasPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryGasPricesResponse;
                fromPartial(object: Partial<_2.QueryGasPricesResponse>): _2.QueryGasPricesResponse;
                fromAmino(object: _2.QueryGasPricesResponseAmino): _2.QueryGasPricesResponse;
                toAmino(message: _2.QueryGasPricesResponse): _2.QueryGasPricesResponseAmino;
                fromAminoMsg(object: _2.QueryGasPricesResponseAminoMsg): _2.QueryGasPricesResponse;
                fromProtoMsg(message: _2.QueryGasPricesResponseProtoMsg): _2.QueryGasPricesResponse;
                toProto(message: _2.QueryGasPricesResponse): Uint8Array;
                toProtoMsg(message: _2.QueryGasPricesResponse): _2.QueryGasPricesResponseProtoMsg;
            };
            QueryUpgradePlanRequest: {
                typeUrl: string;
                encode(_: _2.QueryUpgradePlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryUpgradePlanRequest;
                fromPartial(_: Partial<_2.QueryUpgradePlanRequest>): _2.QueryUpgradePlanRequest;
                fromAmino(_: _2.QueryUpgradePlanRequestAmino): _2.QueryUpgradePlanRequest;
                toAmino(_: _2.QueryUpgradePlanRequest): _2.QueryUpgradePlanRequestAmino;
                fromAminoMsg(object: _2.QueryUpgradePlanRequestAminoMsg): _2.QueryUpgradePlanRequest;
                fromProtoMsg(message: _2.QueryUpgradePlanRequestProtoMsg): _2.QueryUpgradePlanRequest;
                toProto(message: _2.QueryUpgradePlanRequest): Uint8Array;
                toProtoMsg(message: _2.QueryUpgradePlanRequest): _2.QueryUpgradePlanRequestProtoMsg;
            };
            QueryUpgradePlanResponse: {
                typeUrl: string;
                encode(message: _2.QueryUpgradePlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryUpgradePlanResponse;
                fromPartial(object: Partial<_2.QueryUpgradePlanResponse>): _2.QueryUpgradePlanResponse;
                fromAmino(object: _2.QueryUpgradePlanResponseAmino): _2.QueryUpgradePlanResponse;
                toAmino(message: _2.QueryUpgradePlanResponse): _2.QueryUpgradePlanResponseAmino;
                fromAminoMsg(object: _2.QueryUpgradePlanResponseAminoMsg): _2.QueryUpgradePlanResponse;
                fromProtoMsg(message: _2.QueryUpgradePlanResponseProtoMsg): _2.QueryUpgradePlanResponse;
                toProto(message: _2.QueryUpgradePlanResponse): Uint8Array;
                toProtoMsg(message: _2.QueryUpgradePlanResponse): _2.QueryUpgradePlanResponseProtoMsg;
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
            Authority: {
                typeUrl: string;
                encode(message: _0.Authority, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Authority;
                fromPartial(object: Partial<_0.Authority>): _0.Authority;
                fromAmino(object: _0.AuthorityAmino): _0.Authority;
                toAmino(message: _0.Authority): _0.AuthorityAmino;
                fromAminoMsg(object: _0.AuthorityAminoMsg): _0.Authority;
                fromProtoMsg(message: _0.AuthorityProtoMsg): _0.Authority;
                toProto(message: _0.Authority): Uint8Array;
                toProtoMsg(message: _0.Authority): _0.AuthorityProtoMsg;
            };
            GasPrices: {
                typeUrl: string;
                encode(message: _0.GasPrices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GasPrices;
                fromPartial(object: Partial<_0.GasPrices>): _0.GasPrices;
                fromAmino(object: _0.GasPricesAmino): _0.GasPrices;
                toAmino(message: _0.GasPrices): _0.GasPricesAmino;
                fromAminoMsg(object: _0.GasPricesAminoMsg): _0.GasPrices;
                fromProtoMsg(message: _0.GasPricesProtoMsg): _0.GasPrices;
                toProto(message: _0.GasPrices): Uint8Array;
                toProtoMsg(message: _0.GasPrices): _0.GasPricesProtoMsg;
            };
        };
    }
    namespace buyback {
        const v1: {
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request?: _5.QueryBalanceRequest): Promise<_5.QueryBalanceResponse>;
                buybackTime(request?: _5.QueryBuybackTimeRequest): Promise<_5.QueryBuybackTimeResponse>;
            };
            LCDQueryClient: typeof _128.LCDQueryClient;
            QueryBalanceRequest: {
                typeUrl: string;
                encode(_: _5.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryBalanceRequest;
                fromPartial(_: Partial<_5.QueryBalanceRequest>): _5.QueryBalanceRequest;
                fromAmino(_: _5.QueryBalanceRequestAmino): _5.QueryBalanceRequest;
                toAmino(_: _5.QueryBalanceRequest): _5.QueryBalanceRequestAmino;
                fromAminoMsg(object: _5.QueryBalanceRequestAminoMsg): _5.QueryBalanceRequest;
                fromProtoMsg(message: _5.QueryBalanceRequestProtoMsg): _5.QueryBalanceRequest;
                toProto(message: _5.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _5.QueryBalanceRequest): _5.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _5.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryBalanceResponse;
                fromPartial(object: Partial<_5.QueryBalanceResponse>): _5.QueryBalanceResponse;
                fromAmino(object: _5.QueryBalanceResponseAmino): _5.QueryBalanceResponse;
                toAmino(message: _5.QueryBalanceResponse): _5.QueryBalanceResponseAmino;
                fromAminoMsg(object: _5.QueryBalanceResponseAminoMsg): _5.QueryBalanceResponse;
                fromProtoMsg(message: _5.QueryBalanceResponseProtoMsg): _5.QueryBalanceResponse;
                toProto(message: _5.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _5.QueryBalanceResponse): _5.QueryBalanceResponseProtoMsg;
            };
            QueryBuybackTimeRequest: {
                typeUrl: string;
                encode(_: _5.QueryBuybackTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryBuybackTimeRequest;
                fromPartial(_: Partial<_5.QueryBuybackTimeRequest>): _5.QueryBuybackTimeRequest;
                fromAmino(_: _5.QueryBuybackTimeRequestAmino): _5.QueryBuybackTimeRequest;
                toAmino(_: _5.QueryBuybackTimeRequest): _5.QueryBuybackTimeRequestAmino;
                fromAminoMsg(object: _5.QueryBuybackTimeRequestAminoMsg): _5.QueryBuybackTimeRequest;
                fromProtoMsg(message: _5.QueryBuybackTimeRequestProtoMsg): _5.QueryBuybackTimeRequest;
                toProto(message: _5.QueryBuybackTimeRequest): Uint8Array;
                toProtoMsg(message: _5.QueryBuybackTimeRequest): _5.QueryBuybackTimeRequestProtoMsg;
            };
            QueryBuybackTimeResponse: {
                typeUrl: string;
                encode(message: _5.QueryBuybackTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryBuybackTimeResponse;
                fromPartial(object: Partial<_5.QueryBuybackTimeResponse>): _5.QueryBuybackTimeResponse;
                fromAmino(object: _5.QueryBuybackTimeResponseAmino): _5.QueryBuybackTimeResponse;
                toAmino(message: _5.QueryBuybackTimeResponse): _5.QueryBuybackTimeResponseAmino;
                fromAminoMsg(object: _5.QueryBuybackTimeResponseAminoMsg): _5.QueryBuybackTimeResponse;
                fromProtoMsg(message: _5.QueryBuybackTimeResponseProtoMsg): _5.QueryBuybackTimeResponse;
                toProto(message: _5.QueryBuybackTimeResponse): Uint8Array;
                toProtoMsg(message: _5.QueryBuybackTimeResponse): _5.QueryBuybackTimeResponseProtoMsg;
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
    namespace inflation {
        const v1: {
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                inflation(request?: _8.QueryInflationRequest): Promise<_8.QueryInflationResponse>;
            };
            LCDQueryClient: typeof _129.LCDQueryClient;
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _8.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.QueryInflationRequest;
                fromPartial(_: Partial<_8.QueryInflationRequest>): _8.QueryInflationRequest;
                fromAmino(_: _8.QueryInflationRequestAmino): _8.QueryInflationRequest;
                toAmino(_: _8.QueryInflationRequest): _8.QueryInflationRequestAmino;
                fromAminoMsg(object: _8.QueryInflationRequestAminoMsg): _8.QueryInflationRequest;
                fromProtoMsg(message: _8.QueryInflationRequestProtoMsg): _8.QueryInflationRequest;
                toProto(message: _8.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _8.QueryInflationRequest): _8.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _8.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.QueryInflationResponse;
                fromPartial(object: Partial<_8.QueryInflationResponse>): _8.QueryInflationResponse;
                fromAmino(object: _8.QueryInflationResponseAmino): _8.QueryInflationResponse;
                toAmino(message: _8.QueryInflationResponse): _8.QueryInflationResponseAmino;
                fromAminoMsg(object: _8.QueryInflationResponseAminoMsg): _8.QueryInflationResponse;
                fromProtoMsg(message: _8.QueryInflationResponseProtoMsg): _8.QueryInflationResponse;
                toProto(message: _8.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _8.QueryInflationResponse): _8.QueryInflationResponseProtoMsg;
            };
            InflationAsset: {
                typeUrl: string;
                encode(message: _7.InflationAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.InflationAsset;
                fromPartial(object: Partial<_7.InflationAsset>): _7.InflationAsset;
                fromAmino(object: _7.InflationAssetAmino): _7.InflationAsset;
                toAmino(message: _7.InflationAsset): _7.InflationAssetAmino;
                fromAminoMsg(object: _7.InflationAssetAminoMsg): _7.InflationAsset;
                fromProtoMsg(message: _7.InflationAssetProtoMsg): _7.InflationAsset;
                toProto(message: _7.InflationAsset): Uint8Array;
                toProtoMsg(message: _7.InflationAsset): _7.InflationAssetProtoMsg;
            };
            InflationState: {
                typeUrl: string;
                encode(message: _7.InflationState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.InflationState;
                fromPartial(object: Partial<_7.InflationState>): _7.InflationState;
                fromAmino(object: _7.InflationStateAmino): _7.InflationState;
                toAmino(message: _7.InflationState): _7.InflationStateAmino;
                fromAminoMsg(object: _7.InflationStateAminoMsg): _7.InflationState;
                fromProtoMsg(message: _7.InflationStateProtoMsg): _7.InflationState;
                toProto(message: _7.InflationState): Uint8Array;
                toProtoMsg(message: _7.InflationState): _7.InflationStateProtoMsg;
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
    namespace issuer {
        const v1: {
            MsgClientImpl: typeof _142.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                issuers(request?: _11.QueryIssuersRequest): Promise<_11.QueryIssuersResponse>;
            };
            LCDQueryClient: typeof _130.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    increaseMintable(value: _12.MsgIncreaseMintable): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    decreaseMintable(value: _12.MsgDecreaseMintable): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeLiquidityProvider(value: _12.MsgRevokeLiquidityProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setInflation(value: _12.MsgSetInflation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    increaseMintable(value: _12.MsgIncreaseMintable): {
                        typeUrl: string;
                        value: _12.MsgIncreaseMintable;
                    };
                    decreaseMintable(value: _12.MsgDecreaseMintable): {
                        typeUrl: string;
                        value: _12.MsgDecreaseMintable;
                    };
                    revokeLiquidityProvider(value: _12.MsgRevokeLiquidityProvider): {
                        typeUrl: string;
                        value: _12.MsgRevokeLiquidityProvider;
                    };
                    setInflation(value: _12.MsgSetInflation): {
                        typeUrl: string;
                        value: _12.MsgSetInflation;
                    };
                };
                fromJSON: {
                    increaseMintable(value: any): {
                        typeUrl: string;
                        value: _12.MsgIncreaseMintable;
                    };
                    decreaseMintable(value: any): {
                        typeUrl: string;
                        value: _12.MsgDecreaseMintable;
                    };
                    revokeLiquidityProvider(value: any): {
                        typeUrl: string;
                        value: _12.MsgRevokeLiquidityProvider;
                    };
                    setInflation(value: any): {
                        typeUrl: string;
                        value: _12.MsgSetInflation;
                    };
                };
                fromPartial: {
                    increaseMintable(value: _12.MsgIncreaseMintable): {
                        typeUrl: string;
                        value: _12.MsgIncreaseMintable;
                    };
                    decreaseMintable(value: _12.MsgDecreaseMintable): {
                        typeUrl: string;
                        value: _12.MsgDecreaseMintable;
                    };
                    revokeLiquidityProvider(value: _12.MsgRevokeLiquidityProvider): {
                        typeUrl: string;
                        value: _12.MsgRevokeLiquidityProvider;
                    };
                    setInflation(value: _12.MsgSetInflation): {
                        typeUrl: string;
                        value: _12.MsgSetInflation;
                    };
                };
            };
            AminoConverter: {
                "/em.issuer.v1.MsgIncreaseMintable": {
                    aminoType: string;
                    toAmino: (message: _12.MsgIncreaseMintable) => _12.MsgIncreaseMintableAmino;
                    fromAmino: (object: _12.MsgIncreaseMintableAmino) => _12.MsgIncreaseMintable;
                };
                "/em.issuer.v1.MsgDecreaseMintable": {
                    aminoType: string;
                    toAmino: (message: _12.MsgDecreaseMintable) => _12.MsgDecreaseMintableAmino;
                    fromAmino: (object: _12.MsgDecreaseMintableAmino) => _12.MsgDecreaseMintable;
                };
                "/em.issuer.v1.MsgRevokeLiquidityProvider": {
                    aminoType: string;
                    toAmino: (message: _12.MsgRevokeLiquidityProvider) => _12.MsgRevokeLiquidityProviderAmino;
                    fromAmino: (object: _12.MsgRevokeLiquidityProviderAmino) => _12.MsgRevokeLiquidityProvider;
                };
                "/em.issuer.v1.MsgSetInflation": {
                    aminoType: string;
                    toAmino: (message: _12.MsgSetInflation) => _12.MsgSetInflationAmino;
                    fromAmino: (object: _12.MsgSetInflationAmino) => _12.MsgSetInflation;
                };
            };
            MsgIncreaseMintable: {
                typeUrl: string;
                encode(message: _12.MsgIncreaseMintable, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgIncreaseMintable;
                fromPartial(object: Partial<_12.MsgIncreaseMintable>): _12.MsgIncreaseMintable;
                fromAmino(object: _12.MsgIncreaseMintableAmino): _12.MsgIncreaseMintable;
                toAmino(message: _12.MsgIncreaseMintable): _12.MsgIncreaseMintableAmino;
                fromAminoMsg(object: _12.MsgIncreaseMintableAminoMsg): _12.MsgIncreaseMintable;
                fromProtoMsg(message: _12.MsgIncreaseMintableProtoMsg): _12.MsgIncreaseMintable;
                toProto(message: _12.MsgIncreaseMintable): Uint8Array;
                toProtoMsg(message: _12.MsgIncreaseMintable): _12.MsgIncreaseMintableProtoMsg;
            };
            MsgIncreaseMintableResponse: {
                typeUrl: string;
                encode(_: _12.MsgIncreaseMintableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgIncreaseMintableResponse;
                fromPartial(_: Partial<_12.MsgIncreaseMintableResponse>): _12.MsgIncreaseMintableResponse;
                fromAmino(_: _12.MsgIncreaseMintableResponseAmino): _12.MsgIncreaseMintableResponse;
                toAmino(_: _12.MsgIncreaseMintableResponse): _12.MsgIncreaseMintableResponseAmino;
                fromAminoMsg(object: _12.MsgIncreaseMintableResponseAminoMsg): _12.MsgIncreaseMintableResponse;
                fromProtoMsg(message: _12.MsgIncreaseMintableResponseProtoMsg): _12.MsgIncreaseMintableResponse;
                toProto(message: _12.MsgIncreaseMintableResponse): Uint8Array;
                toProtoMsg(message: _12.MsgIncreaseMintableResponse): _12.MsgIncreaseMintableResponseProtoMsg;
            };
            MsgDecreaseMintable: {
                typeUrl: string;
                encode(message: _12.MsgDecreaseMintable, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgDecreaseMintable;
                fromPartial(object: Partial<_12.MsgDecreaseMintable>): _12.MsgDecreaseMintable;
                fromAmino(object: _12.MsgDecreaseMintableAmino): _12.MsgDecreaseMintable;
                toAmino(message: _12.MsgDecreaseMintable): _12.MsgDecreaseMintableAmino;
                fromAminoMsg(object: _12.MsgDecreaseMintableAminoMsg): _12.MsgDecreaseMintable;
                fromProtoMsg(message: _12.MsgDecreaseMintableProtoMsg): _12.MsgDecreaseMintable;
                toProto(message: _12.MsgDecreaseMintable): Uint8Array;
                toProtoMsg(message: _12.MsgDecreaseMintable): _12.MsgDecreaseMintableProtoMsg;
            };
            MsgDecreaseMintableResponse: {
                typeUrl: string;
                encode(_: _12.MsgDecreaseMintableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgDecreaseMintableResponse;
                fromPartial(_: Partial<_12.MsgDecreaseMintableResponse>): _12.MsgDecreaseMintableResponse;
                fromAmino(_: _12.MsgDecreaseMintableResponseAmino): _12.MsgDecreaseMintableResponse;
                toAmino(_: _12.MsgDecreaseMintableResponse): _12.MsgDecreaseMintableResponseAmino;
                fromAminoMsg(object: _12.MsgDecreaseMintableResponseAminoMsg): _12.MsgDecreaseMintableResponse;
                fromProtoMsg(message: _12.MsgDecreaseMintableResponseProtoMsg): _12.MsgDecreaseMintableResponse;
                toProto(message: _12.MsgDecreaseMintableResponse): Uint8Array;
                toProtoMsg(message: _12.MsgDecreaseMintableResponse): _12.MsgDecreaseMintableResponseProtoMsg;
            };
            MsgRevokeLiquidityProvider: {
                typeUrl: string;
                encode(message: _12.MsgRevokeLiquidityProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgRevokeLiquidityProvider;
                fromPartial(object: Partial<_12.MsgRevokeLiquidityProvider>): _12.MsgRevokeLiquidityProvider;
                fromAmino(object: _12.MsgRevokeLiquidityProviderAmino): _12.MsgRevokeLiquidityProvider;
                toAmino(message: _12.MsgRevokeLiquidityProvider): _12.MsgRevokeLiquidityProviderAmino;
                fromAminoMsg(object: _12.MsgRevokeLiquidityProviderAminoMsg): _12.MsgRevokeLiquidityProvider;
                fromProtoMsg(message: _12.MsgRevokeLiquidityProviderProtoMsg): _12.MsgRevokeLiquidityProvider;
                toProto(message: _12.MsgRevokeLiquidityProvider): Uint8Array;
                toProtoMsg(message: _12.MsgRevokeLiquidityProvider): _12.MsgRevokeLiquidityProviderProtoMsg;
            };
            MsgRevokeLiquidityProviderResponse: {
                typeUrl: string;
                encode(_: _12.MsgRevokeLiquidityProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgRevokeLiquidityProviderResponse;
                fromPartial(_: Partial<_12.MsgRevokeLiquidityProviderResponse>): _12.MsgRevokeLiquidityProviderResponse;
                fromAmino(_: _12.MsgRevokeLiquidityProviderResponseAmino): _12.MsgRevokeLiquidityProviderResponse;
                toAmino(_: _12.MsgRevokeLiquidityProviderResponse): _12.MsgRevokeLiquidityProviderResponseAmino;
                fromAminoMsg(object: _12.MsgRevokeLiquidityProviderResponseAminoMsg): _12.MsgRevokeLiquidityProviderResponse;
                fromProtoMsg(message: _12.MsgRevokeLiquidityProviderResponseProtoMsg): _12.MsgRevokeLiquidityProviderResponse;
                toProto(message: _12.MsgRevokeLiquidityProviderResponse): Uint8Array;
                toProtoMsg(message: _12.MsgRevokeLiquidityProviderResponse): _12.MsgRevokeLiquidityProviderResponseProtoMsg;
            };
            MsgSetInflation: {
                typeUrl: string;
                encode(message: _12.MsgSetInflation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MsgSetInflation;
                fromPartial(object: Partial<_12.MsgSetInflation>): _12.MsgSetInflation;
                fromAmino(object: _12.MsgSetInflationAmino): _12.MsgSetInflation;
                toAmino(message: _12.MsgSetInflation): _12.MsgSetInflationAmino;
                fromAminoMsg(object: _12.MsgSetInflationAminoMsg): _12.MsgSetInflation;
                fromProtoMsg(message: _12.MsgSetInflationProtoMsg): _12.MsgSetInflation;
                toProto(message: _12.MsgSetInflation): Uint8Array;
                toProtoMsg(message: _12.MsgSetInflation): _12.MsgSetInflationProtoMsg;
            };
            MsgSetInflationResponse: {
                typeUrl: string;
                encode(_: _12.MsgSetInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.MsgSetInflationResponse;
                fromPartial(_: Partial<_12.MsgSetInflationResponse>): _12.MsgSetInflationResponse;
                fromAmino(_: _12.MsgSetInflationResponseAmino): _12.MsgSetInflationResponse;
                toAmino(_: _12.MsgSetInflationResponse): _12.MsgSetInflationResponseAmino;
                fromAminoMsg(object: _12.MsgSetInflationResponseAminoMsg): _12.MsgSetInflationResponse;
                fromProtoMsg(message: _12.MsgSetInflationResponseProtoMsg): _12.MsgSetInflationResponse;
                toProto(message: _12.MsgSetInflationResponse): Uint8Array;
                toProtoMsg(message: _12.MsgSetInflationResponse): _12.MsgSetInflationResponseProtoMsg;
            };
            QueryIssuersRequest: {
                typeUrl: string;
                encode(_: _11.QueryIssuersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.QueryIssuersRequest;
                fromPartial(_: Partial<_11.QueryIssuersRequest>): _11.QueryIssuersRequest;
                fromAmino(_: _11.QueryIssuersRequestAmino): _11.QueryIssuersRequest;
                toAmino(_: _11.QueryIssuersRequest): _11.QueryIssuersRequestAmino;
                fromAminoMsg(object: _11.QueryIssuersRequestAminoMsg): _11.QueryIssuersRequest;
                fromProtoMsg(message: _11.QueryIssuersRequestProtoMsg): _11.QueryIssuersRequest;
                toProto(message: _11.QueryIssuersRequest): Uint8Array;
                toProtoMsg(message: _11.QueryIssuersRequest): _11.QueryIssuersRequestProtoMsg;
            };
            QueryIssuersResponse: {
                typeUrl: string;
                encode(message: _11.QueryIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryIssuersResponse;
                fromPartial(object: Partial<_11.QueryIssuersResponse>): _11.QueryIssuersResponse;
                fromAmino(object: _11.QueryIssuersResponseAmino): _11.QueryIssuersResponse;
                toAmino(message: _11.QueryIssuersResponse): _11.QueryIssuersResponseAmino;
                fromAminoMsg(object: _11.QueryIssuersResponseAminoMsg): _11.QueryIssuersResponse;
                fromProtoMsg(message: _11.QueryIssuersResponseProtoMsg): _11.QueryIssuersResponse;
                toProto(message: _11.QueryIssuersResponse): Uint8Array;
                toProtoMsg(message: _11.QueryIssuersResponse): _11.QueryIssuersResponseProtoMsg;
            };
            Issuer: {
                typeUrl: string;
                encode(message: _10.Issuer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Issuer;
                fromPartial(object: Partial<_10.Issuer>): _10.Issuer;
                fromAmino(object: _10.IssuerAmino): _10.Issuer;
                toAmino(message: _10.Issuer): _10.IssuerAmino;
                fromAminoMsg(object: _10.IssuerAminoMsg): _10.Issuer;
                fromProtoMsg(message: _10.IssuerProtoMsg): _10.Issuer;
                toProto(message: _10.Issuer): Uint8Array;
                toProtoMsg(message: _10.Issuer): _10.IssuerProtoMsg;
            };
            Issuers: {
                typeUrl: string;
                encode(message: _10.Issuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Issuers;
                fromPartial(object: Partial<_10.Issuers>): _10.Issuers;
                fromAmino(object: _10.IssuersAmino): _10.Issuers;
                toAmino(message: _10.Issuers): _10.IssuersAmino;
                fromAminoMsg(object: _10.IssuersAminoMsg): _10.Issuers;
                fromProtoMsg(message: _10.IssuersProtoMsg): _10.Issuers;
                toProto(message: _10.Issuers): Uint8Array;
                toProtoMsg(message: _10.Issuers): _10.IssuersProtoMsg;
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
    namespace liquidityprovider {
        const v1: {
            MsgClientImpl: typeof _143.MsgClientImpl;
            QueryClientImpl: typeof _138.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                list(request?: _15.QueryListRequest): Promise<_15.QueryListResponse>;
                mintable(request: _15.QueryMintableRequest): Promise<_15.QueryMintableResponse>;
            };
            LCDQueryClient: typeof _131.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintTokens(value: _16.MsgMintTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnTokens(value: _16.MsgBurnTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintTokens(value: _16.MsgMintTokens): {
                        typeUrl: string;
                        value: _16.MsgMintTokens;
                    };
                    burnTokens(value: _16.MsgBurnTokens): {
                        typeUrl: string;
                        value: _16.MsgBurnTokens;
                    };
                };
                fromJSON: {
                    mintTokens(value: any): {
                        typeUrl: string;
                        value: _16.MsgMintTokens;
                    };
                    burnTokens(value: any): {
                        typeUrl: string;
                        value: _16.MsgBurnTokens;
                    };
                };
                fromPartial: {
                    mintTokens(value: _16.MsgMintTokens): {
                        typeUrl: string;
                        value: _16.MsgMintTokens;
                    };
                    burnTokens(value: _16.MsgBurnTokens): {
                        typeUrl: string;
                        value: _16.MsgBurnTokens;
                    };
                };
            };
            AminoConverter: {
                "/em.liquidityprovider.v1.MsgMintTokens": {
                    aminoType: string;
                    toAmino: (message: _16.MsgMintTokens) => _16.MsgMintTokensAmino;
                    fromAmino: (object: _16.MsgMintTokensAmino) => _16.MsgMintTokens;
                };
                "/em.liquidityprovider.v1.MsgBurnTokens": {
                    aminoType: string;
                    toAmino: (message: _16.MsgBurnTokens) => _16.MsgBurnTokensAmino;
                    fromAmino: (object: _16.MsgBurnTokensAmino) => _16.MsgBurnTokens;
                };
            };
            MsgMintTokens: {
                typeUrl: string;
                encode(message: _16.MsgMintTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgMintTokens;
                fromPartial(object: Partial<_16.MsgMintTokens>): _16.MsgMintTokens;
                fromAmino(object: _16.MsgMintTokensAmino): _16.MsgMintTokens;
                toAmino(message: _16.MsgMintTokens): _16.MsgMintTokensAmino;
                fromAminoMsg(object: _16.MsgMintTokensAminoMsg): _16.MsgMintTokens;
                fromProtoMsg(message: _16.MsgMintTokensProtoMsg): _16.MsgMintTokens;
                toProto(message: _16.MsgMintTokens): Uint8Array;
                toProtoMsg(message: _16.MsgMintTokens): _16.MsgMintTokensProtoMsg;
            };
            MsgMintTokensResponse: {
                typeUrl: string;
                encode(_: _16.MsgMintTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgMintTokensResponse;
                fromPartial(_: Partial<_16.MsgMintTokensResponse>): _16.MsgMintTokensResponse;
                fromAmino(_: _16.MsgMintTokensResponseAmino): _16.MsgMintTokensResponse;
                toAmino(_: _16.MsgMintTokensResponse): _16.MsgMintTokensResponseAmino;
                fromAminoMsg(object: _16.MsgMintTokensResponseAminoMsg): _16.MsgMintTokensResponse;
                fromProtoMsg(message: _16.MsgMintTokensResponseProtoMsg): _16.MsgMintTokensResponse;
                toProto(message: _16.MsgMintTokensResponse): Uint8Array;
                toProtoMsg(message: _16.MsgMintTokensResponse): _16.MsgMintTokensResponseProtoMsg;
            };
            MsgBurnTokens: {
                typeUrl: string;
                encode(message: _16.MsgBurnTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.MsgBurnTokens;
                fromPartial(object: Partial<_16.MsgBurnTokens>): _16.MsgBurnTokens;
                fromAmino(object: _16.MsgBurnTokensAmino): _16.MsgBurnTokens;
                toAmino(message: _16.MsgBurnTokens): _16.MsgBurnTokensAmino;
                fromAminoMsg(object: _16.MsgBurnTokensAminoMsg): _16.MsgBurnTokens;
                fromProtoMsg(message: _16.MsgBurnTokensProtoMsg): _16.MsgBurnTokens;
                toProto(message: _16.MsgBurnTokens): Uint8Array;
                toProtoMsg(message: _16.MsgBurnTokens): _16.MsgBurnTokensProtoMsg;
            };
            MsgBurnTokensResponse: {
                typeUrl: string;
                encode(_: _16.MsgBurnTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.MsgBurnTokensResponse;
                fromPartial(_: Partial<_16.MsgBurnTokensResponse>): _16.MsgBurnTokensResponse;
                fromAmino(_: _16.MsgBurnTokensResponseAmino): _16.MsgBurnTokensResponse;
                toAmino(_: _16.MsgBurnTokensResponse): _16.MsgBurnTokensResponseAmino;
                fromAminoMsg(object: _16.MsgBurnTokensResponseAminoMsg): _16.MsgBurnTokensResponse;
                fromProtoMsg(message: _16.MsgBurnTokensResponseProtoMsg): _16.MsgBurnTokensResponse;
                toProto(message: _16.MsgBurnTokensResponse): Uint8Array;
                toProtoMsg(message: _16.MsgBurnTokensResponse): _16.MsgBurnTokensResponseProtoMsg;
            };
            QueryListRequest: {
                typeUrl: string;
                encode(_: _15.QueryListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.QueryListRequest;
                fromPartial(_: Partial<_15.QueryListRequest>): _15.QueryListRequest;
                fromAmino(_: _15.QueryListRequestAmino): _15.QueryListRequest;
                toAmino(_: _15.QueryListRequest): _15.QueryListRequestAmino;
                fromAminoMsg(object: _15.QueryListRequestAminoMsg): _15.QueryListRequest;
                fromProtoMsg(message: _15.QueryListRequestProtoMsg): _15.QueryListRequest;
                toProto(message: _15.QueryListRequest): Uint8Array;
                toProtoMsg(message: _15.QueryListRequest): _15.QueryListRequestProtoMsg;
            };
            QueryListResponse: {
                typeUrl: string;
                encode(message: _15.QueryListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryListResponse;
                fromPartial(object: Partial<_15.QueryListResponse>): _15.QueryListResponse;
                fromAmino(object: _15.QueryListResponseAmino): _15.QueryListResponse;
                toAmino(message: _15.QueryListResponse): _15.QueryListResponseAmino;
                fromAminoMsg(object: _15.QueryListResponseAminoMsg): _15.QueryListResponse;
                fromProtoMsg(message: _15.QueryListResponseProtoMsg): _15.QueryListResponse;
                toProto(message: _15.QueryListResponse): Uint8Array;
                toProtoMsg(message: _15.QueryListResponse): _15.QueryListResponseProtoMsg;
            };
            QueryMintableRequest: {
                typeUrl: string;
                encode(message: _15.QueryMintableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryMintableRequest;
                fromPartial(object: Partial<_15.QueryMintableRequest>): _15.QueryMintableRequest;
                fromAmino(object: _15.QueryMintableRequestAmino): _15.QueryMintableRequest;
                toAmino(message: _15.QueryMintableRequest): _15.QueryMintableRequestAmino;
                fromAminoMsg(object: _15.QueryMintableRequestAminoMsg): _15.QueryMintableRequest;
                fromProtoMsg(message: _15.QueryMintableRequestProtoMsg): _15.QueryMintableRequest;
                toProto(message: _15.QueryMintableRequest): Uint8Array;
                toProtoMsg(message: _15.QueryMintableRequest): _15.QueryMintableRequestProtoMsg;
            };
            QueryMintableResponse: {
                typeUrl: string;
                encode(message: _15.QueryMintableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryMintableResponse;
                fromPartial(object: Partial<_15.QueryMintableResponse>): _15.QueryMintableResponse;
                fromAmino(object: _15.QueryMintableResponseAmino): _15.QueryMintableResponse;
                toAmino(message: _15.QueryMintableResponse): _15.QueryMintableResponseAmino;
                fromAminoMsg(object: _15.QueryMintableResponseAminoMsg): _15.QueryMintableResponse;
                fromProtoMsg(message: _15.QueryMintableResponseProtoMsg): _15.QueryMintableResponse;
                toProto(message: _15.QueryMintableResponse): Uint8Array;
                toProtoMsg(message: _15.QueryMintableResponse): _15.QueryMintableResponseProtoMsg;
            };
            LiquidityProviderAccount: {
                typeUrl: string;
                encode(message: _14.LiquidityProviderAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.LiquidityProviderAccount;
                fromPartial(object: Partial<_14.LiquidityProviderAccount>): _14.LiquidityProviderAccount;
                fromAmino(object: _14.LiquidityProviderAccountAmino): _14.LiquidityProviderAccount;
                toAmino(message: _14.LiquidityProviderAccount): _14.LiquidityProviderAccountAmino;
                fromAminoMsg(object: _14.LiquidityProviderAccountAminoMsg): _14.LiquidityProviderAccount;
                fromProtoMsg(message: _14.LiquidityProviderAccountProtoMsg): _14.LiquidityProviderAccount;
                toProto(message: _14.LiquidityProviderAccount): Uint8Array;
                toProtoMsg(message: _14.LiquidityProviderAccount): _14.LiquidityProviderAccountProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            GenesisAcc: {
                typeUrl: string;
                encode(message: _13.GenesisAcc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.GenesisAcc;
                fromPartial(object: Partial<_13.GenesisAcc>): _13.GenesisAcc;
                fromAmino(object: _13.GenesisAccAmino): _13.GenesisAcc;
                toAmino(message: _13.GenesisAcc): _13.GenesisAccAmino;
                fromAminoMsg(object: _13.GenesisAccAminoMsg): _13.GenesisAcc;
                fromProtoMsg(message: _13.GenesisAccProtoMsg): _13.GenesisAcc;
                toProto(message: _13.GenesisAcc): Uint8Array;
                toProtoMsg(message: _13.GenesisAcc): _13.GenesisAccProtoMsg;
            };
        };
    }
    namespace market {
        const v1: {
            MsgClientImpl: typeof _144.MsgClientImpl;
            QueryClientImpl: typeof _139.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                byAccount(request: _18.QueryByAccountRequest): Promise<_18.QueryByAccountResponse>;
                instruments(request?: _18.QueryInstrumentsRequest): Promise<_18.QueryInstrumentsResponse>;
                instrument(request: _18.QueryInstrumentRequest): Promise<_18.QueryInstrumentResponse>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addLimitOrder(value: _19.MsgAddLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addMarketOrder(value: _19.MsgAddMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _19.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelReplaceLimitOrder(value: _19.MsgCancelReplaceLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelReplaceMarketOrder(value: _19.MsgCancelReplaceMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addLimitOrder(value: _19.MsgAddLimitOrder): {
                        typeUrl: string;
                        value: _19.MsgAddLimitOrder;
                    };
                    addMarketOrder(value: _19.MsgAddMarketOrder): {
                        typeUrl: string;
                        value: _19.MsgAddMarketOrder;
                    };
                    cancelOrder(value: _19.MsgCancelOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelOrder;
                    };
                    cancelReplaceLimitOrder(value: _19.MsgCancelReplaceLimitOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceLimitOrder;
                    };
                    cancelReplaceMarketOrder(value: _19.MsgCancelReplaceMarketOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceMarketOrder;
                    };
                };
                fromJSON: {
                    addLimitOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgAddLimitOrder;
                    };
                    addMarketOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgAddMarketOrder;
                    };
                    cancelOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgCancelOrder;
                    };
                    cancelReplaceLimitOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceLimitOrder;
                    };
                    cancelReplaceMarketOrder(value: any): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceMarketOrder;
                    };
                };
                fromPartial: {
                    addLimitOrder(value: _19.MsgAddLimitOrder): {
                        typeUrl: string;
                        value: _19.MsgAddLimitOrder;
                    };
                    addMarketOrder(value: _19.MsgAddMarketOrder): {
                        typeUrl: string;
                        value: _19.MsgAddMarketOrder;
                    };
                    cancelOrder(value: _19.MsgCancelOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelOrder;
                    };
                    cancelReplaceLimitOrder(value: _19.MsgCancelReplaceLimitOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceLimitOrder;
                    };
                    cancelReplaceMarketOrder(value: _19.MsgCancelReplaceMarketOrder): {
                        typeUrl: string;
                        value: _19.MsgCancelReplaceMarketOrder;
                    };
                };
            };
            AminoConverter: {
                "/em.market.v1.MsgAddLimitOrder": {
                    aminoType: string;
                    toAmino: (message: _19.MsgAddLimitOrder) => _19.MsgAddLimitOrderAmino;
                    fromAmino: (object: _19.MsgAddLimitOrderAmino) => _19.MsgAddLimitOrder;
                };
                "/em.market.v1.MsgAddMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _19.MsgAddMarketOrder) => _19.MsgAddMarketOrderAmino;
                    fromAmino: (object: _19.MsgAddMarketOrderAmino) => _19.MsgAddMarketOrder;
                };
                "/em.market.v1.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCancelOrder) => _19.MsgCancelOrderAmino;
                    fromAmino: (object: _19.MsgCancelOrderAmino) => _19.MsgCancelOrder;
                };
                "/em.market.v1.MsgCancelReplaceLimitOrder": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCancelReplaceLimitOrder) => _19.MsgCancelReplaceLimitOrderAmino;
                    fromAmino: (object: _19.MsgCancelReplaceLimitOrderAmino) => _19.MsgCancelReplaceLimitOrder;
                };
                "/em.market.v1.MsgCancelReplaceMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCancelReplaceMarketOrder) => _19.MsgCancelReplaceMarketOrderAmino;
                    fromAmino: (object: _19.MsgCancelReplaceMarketOrderAmino) => _19.MsgCancelReplaceMarketOrder;
                };
            };
            MsgAddLimitOrder: {
                typeUrl: string;
                encode(message: _19.MsgAddLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgAddLimitOrder;
                fromPartial(object: Partial<_19.MsgAddLimitOrder>): _19.MsgAddLimitOrder;
                fromAmino(object: _19.MsgAddLimitOrderAmino): _19.MsgAddLimitOrder;
                toAmino(message: _19.MsgAddLimitOrder): _19.MsgAddLimitOrderAmino;
                fromAminoMsg(object: _19.MsgAddLimitOrderAminoMsg): _19.MsgAddLimitOrder;
                fromProtoMsg(message: _19.MsgAddLimitOrderProtoMsg): _19.MsgAddLimitOrder;
                toProto(message: _19.MsgAddLimitOrder): Uint8Array;
                toProtoMsg(message: _19.MsgAddLimitOrder): _19.MsgAddLimitOrderProtoMsg;
            };
            MsgAddLimitOrderResponse: {
                typeUrl: string;
                encode(_: _19.MsgAddLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgAddLimitOrderResponse;
                fromPartial(_: Partial<_19.MsgAddLimitOrderResponse>): _19.MsgAddLimitOrderResponse;
                fromAmino(_: _19.MsgAddLimitOrderResponseAmino): _19.MsgAddLimitOrderResponse;
                toAmino(_: _19.MsgAddLimitOrderResponse): _19.MsgAddLimitOrderResponseAmino;
                fromAminoMsg(object: _19.MsgAddLimitOrderResponseAminoMsg): _19.MsgAddLimitOrderResponse;
                fromProtoMsg(message: _19.MsgAddLimitOrderResponseProtoMsg): _19.MsgAddLimitOrderResponse;
                toProto(message: _19.MsgAddLimitOrderResponse): Uint8Array;
                toProtoMsg(message: _19.MsgAddLimitOrderResponse): _19.MsgAddLimitOrderResponseProtoMsg;
            };
            MsgAddMarketOrder: {
                typeUrl: string;
                encode(message: _19.MsgAddMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgAddMarketOrder;
                fromPartial(object: Partial<_19.MsgAddMarketOrder>): _19.MsgAddMarketOrder;
                fromAmino(object: _19.MsgAddMarketOrderAmino): _19.MsgAddMarketOrder;
                toAmino(message: _19.MsgAddMarketOrder): _19.MsgAddMarketOrderAmino;
                fromAminoMsg(object: _19.MsgAddMarketOrderAminoMsg): _19.MsgAddMarketOrder;
                fromProtoMsg(message: _19.MsgAddMarketOrderProtoMsg): _19.MsgAddMarketOrder;
                toProto(message: _19.MsgAddMarketOrder): Uint8Array;
                toProtoMsg(message: _19.MsgAddMarketOrder): _19.MsgAddMarketOrderProtoMsg;
            };
            MsgAddMarketOrderResponse: {
                typeUrl: string;
                encode(_: _19.MsgAddMarketOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgAddMarketOrderResponse;
                fromPartial(_: Partial<_19.MsgAddMarketOrderResponse>): _19.MsgAddMarketOrderResponse;
                fromAmino(_: _19.MsgAddMarketOrderResponseAmino): _19.MsgAddMarketOrderResponse;
                toAmino(_: _19.MsgAddMarketOrderResponse): _19.MsgAddMarketOrderResponseAmino;
                fromAminoMsg(object: _19.MsgAddMarketOrderResponseAminoMsg): _19.MsgAddMarketOrderResponse;
                fromProtoMsg(message: _19.MsgAddMarketOrderResponseProtoMsg): _19.MsgAddMarketOrderResponse;
                toProto(message: _19.MsgAddMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _19.MsgAddMarketOrderResponse): _19.MsgAddMarketOrderResponseProtoMsg;
            };
            MsgCancelOrder: {
                typeUrl: string;
                encode(message: _19.MsgCancelOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCancelOrder;
                fromPartial(object: Partial<_19.MsgCancelOrder>): _19.MsgCancelOrder;
                fromAmino(object: _19.MsgCancelOrderAmino): _19.MsgCancelOrder;
                toAmino(message: _19.MsgCancelOrder): _19.MsgCancelOrderAmino;
                fromAminoMsg(object: _19.MsgCancelOrderAminoMsg): _19.MsgCancelOrder;
                fromProtoMsg(message: _19.MsgCancelOrderProtoMsg): _19.MsgCancelOrder;
                toProto(message: _19.MsgCancelOrder): Uint8Array;
                toProtoMsg(message: _19.MsgCancelOrder): _19.MsgCancelOrderProtoMsg;
            };
            MsgCancelOrderResponse: {
                typeUrl: string;
                encode(_: _19.MsgCancelOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgCancelOrderResponse;
                fromPartial(_: Partial<_19.MsgCancelOrderResponse>): _19.MsgCancelOrderResponse;
                fromAmino(_: _19.MsgCancelOrderResponseAmino): _19.MsgCancelOrderResponse;
                toAmino(_: _19.MsgCancelOrderResponse): _19.MsgCancelOrderResponseAmino;
                fromAminoMsg(object: _19.MsgCancelOrderResponseAminoMsg): _19.MsgCancelOrderResponse;
                fromProtoMsg(message: _19.MsgCancelOrderResponseProtoMsg): _19.MsgCancelOrderResponse;
                toProto(message: _19.MsgCancelOrderResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCancelOrderResponse): _19.MsgCancelOrderResponseProtoMsg;
            };
            MsgCancelReplaceLimitOrder: {
                typeUrl: string;
                encode(message: _19.MsgCancelReplaceLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCancelReplaceLimitOrder;
                fromPartial(object: Partial<_19.MsgCancelReplaceLimitOrder>): _19.MsgCancelReplaceLimitOrder;
                fromAmino(object: _19.MsgCancelReplaceLimitOrderAmino): _19.MsgCancelReplaceLimitOrder;
                toAmino(message: _19.MsgCancelReplaceLimitOrder): _19.MsgCancelReplaceLimitOrderAmino;
                fromAminoMsg(object: _19.MsgCancelReplaceLimitOrderAminoMsg): _19.MsgCancelReplaceLimitOrder;
                fromProtoMsg(message: _19.MsgCancelReplaceLimitOrderProtoMsg): _19.MsgCancelReplaceLimitOrder;
                toProto(message: _19.MsgCancelReplaceLimitOrder): Uint8Array;
                toProtoMsg(message: _19.MsgCancelReplaceLimitOrder): _19.MsgCancelReplaceLimitOrderProtoMsg;
            };
            MsgCancelReplaceLimitOrderResponse: {
                typeUrl: string;
                encode(_: _19.MsgCancelReplaceLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgCancelReplaceLimitOrderResponse;
                fromPartial(_: Partial<_19.MsgCancelReplaceLimitOrderResponse>): _19.MsgCancelReplaceLimitOrderResponse;
                fromAmino(_: _19.MsgCancelReplaceLimitOrderResponseAmino): _19.MsgCancelReplaceLimitOrderResponse;
                toAmino(_: _19.MsgCancelReplaceLimitOrderResponse): _19.MsgCancelReplaceLimitOrderResponseAmino;
                fromAminoMsg(object: _19.MsgCancelReplaceLimitOrderResponseAminoMsg): _19.MsgCancelReplaceLimitOrderResponse;
                fromProtoMsg(message: _19.MsgCancelReplaceLimitOrderResponseProtoMsg): _19.MsgCancelReplaceLimitOrderResponse;
                toProto(message: _19.MsgCancelReplaceLimitOrderResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCancelReplaceLimitOrderResponse): _19.MsgCancelReplaceLimitOrderResponseProtoMsg;
            };
            MsgCancelReplaceMarketOrder: {
                typeUrl: string;
                encode(message: _19.MsgCancelReplaceMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCancelReplaceMarketOrder;
                fromPartial(object: Partial<_19.MsgCancelReplaceMarketOrder>): _19.MsgCancelReplaceMarketOrder;
                fromAmino(object: _19.MsgCancelReplaceMarketOrderAmino): _19.MsgCancelReplaceMarketOrder;
                toAmino(message: _19.MsgCancelReplaceMarketOrder): _19.MsgCancelReplaceMarketOrderAmino;
                fromAminoMsg(object: _19.MsgCancelReplaceMarketOrderAminoMsg): _19.MsgCancelReplaceMarketOrder;
                fromProtoMsg(message: _19.MsgCancelReplaceMarketOrderProtoMsg): _19.MsgCancelReplaceMarketOrder;
                toProto(message: _19.MsgCancelReplaceMarketOrder): Uint8Array;
                toProtoMsg(message: _19.MsgCancelReplaceMarketOrder): _19.MsgCancelReplaceMarketOrderProtoMsg;
            };
            MsgCancelReplaceMarketOrderResponse: {
                typeUrl: string;
                encode(_: _19.MsgCancelReplaceMarketOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgCancelReplaceMarketOrderResponse;
                fromPartial(_: Partial<_19.MsgCancelReplaceMarketOrderResponse>): _19.MsgCancelReplaceMarketOrderResponse;
                fromAmino(_: _19.MsgCancelReplaceMarketOrderResponseAmino): _19.MsgCancelReplaceMarketOrderResponse;
                toAmino(_: _19.MsgCancelReplaceMarketOrderResponse): _19.MsgCancelReplaceMarketOrderResponseAmino;
                fromAminoMsg(object: _19.MsgCancelReplaceMarketOrderResponseAminoMsg): _19.MsgCancelReplaceMarketOrderResponse;
                fromProtoMsg(message: _19.MsgCancelReplaceMarketOrderResponseProtoMsg): _19.MsgCancelReplaceMarketOrderResponse;
                toProto(message: _19.MsgCancelReplaceMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCancelReplaceMarketOrderResponse): _19.MsgCancelReplaceMarketOrderResponseProtoMsg;
            };
            QueryByAccountRequest: {
                typeUrl: string;
                encode(message: _18.QueryByAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryByAccountRequest;
                fromPartial(object: Partial<_18.QueryByAccountRequest>): _18.QueryByAccountRequest;
                fromAmino(object: _18.QueryByAccountRequestAmino): _18.QueryByAccountRequest;
                toAmino(message: _18.QueryByAccountRequest): _18.QueryByAccountRequestAmino;
                fromAminoMsg(object: _18.QueryByAccountRequestAminoMsg): _18.QueryByAccountRequest;
                fromProtoMsg(message: _18.QueryByAccountRequestProtoMsg): _18.QueryByAccountRequest;
                toProto(message: _18.QueryByAccountRequest): Uint8Array;
                toProtoMsg(message: _18.QueryByAccountRequest): _18.QueryByAccountRequestProtoMsg;
            };
            QueryByAccountResponse: {
                typeUrl: string;
                encode(message: _18.QueryByAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryByAccountResponse;
                fromPartial(object: Partial<_18.QueryByAccountResponse>): _18.QueryByAccountResponse;
                fromAmino(object: _18.QueryByAccountResponseAmino): _18.QueryByAccountResponse;
                toAmino(message: _18.QueryByAccountResponse): _18.QueryByAccountResponseAmino;
                fromAminoMsg(object: _18.QueryByAccountResponseAminoMsg): _18.QueryByAccountResponse;
                fromProtoMsg(message: _18.QueryByAccountResponseProtoMsg): _18.QueryByAccountResponse;
                toProto(message: _18.QueryByAccountResponse): Uint8Array;
                toProtoMsg(message: _18.QueryByAccountResponse): _18.QueryByAccountResponseProtoMsg;
            };
            QueryInstrumentsRequest: {
                typeUrl: string;
                encode(_: _18.QueryInstrumentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.QueryInstrumentsRequest;
                fromPartial(_: Partial<_18.QueryInstrumentsRequest>): _18.QueryInstrumentsRequest;
                fromAmino(_: _18.QueryInstrumentsRequestAmino): _18.QueryInstrumentsRequest;
                toAmino(_: _18.QueryInstrumentsRequest): _18.QueryInstrumentsRequestAmino;
                fromAminoMsg(object: _18.QueryInstrumentsRequestAminoMsg): _18.QueryInstrumentsRequest;
                fromProtoMsg(message: _18.QueryInstrumentsRequestProtoMsg): _18.QueryInstrumentsRequest;
                toProto(message: _18.QueryInstrumentsRequest): Uint8Array;
                toProtoMsg(message: _18.QueryInstrumentsRequest): _18.QueryInstrumentsRequestProtoMsg;
            };
            QueryInstrumentsResponse: {
                typeUrl: string;
                encode(message: _18.QueryInstrumentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryInstrumentsResponse;
                fromPartial(object: Partial<_18.QueryInstrumentsResponse>): _18.QueryInstrumentsResponse;
                fromAmino(object: _18.QueryInstrumentsResponseAmino): _18.QueryInstrumentsResponse;
                toAmino(message: _18.QueryInstrumentsResponse): _18.QueryInstrumentsResponseAmino;
                fromAminoMsg(object: _18.QueryInstrumentsResponseAminoMsg): _18.QueryInstrumentsResponse;
                fromProtoMsg(message: _18.QueryInstrumentsResponseProtoMsg): _18.QueryInstrumentsResponse;
                toProto(message: _18.QueryInstrumentsResponse): Uint8Array;
                toProtoMsg(message: _18.QueryInstrumentsResponse): _18.QueryInstrumentsResponseProtoMsg;
            };
            QueryInstrumentsResponse_Element: {
                typeUrl: string;
                encode(message: _18.QueryInstrumentsResponse_Element, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryInstrumentsResponse_Element;
                fromPartial(object: Partial<_18.QueryInstrumentsResponse_Element>): _18.QueryInstrumentsResponse_Element;
                fromAmino(object: _18.QueryInstrumentsResponse_ElementAmino): _18.QueryInstrumentsResponse_Element;
                toAmino(message: _18.QueryInstrumentsResponse_Element): _18.QueryInstrumentsResponse_ElementAmino;
                fromAminoMsg(object: _18.QueryInstrumentsResponse_ElementAminoMsg): _18.QueryInstrumentsResponse_Element;
                fromProtoMsg(message: _18.QueryInstrumentsResponse_ElementProtoMsg): _18.QueryInstrumentsResponse_Element;
                toProto(message: _18.QueryInstrumentsResponse_Element): Uint8Array;
                toProtoMsg(message: _18.QueryInstrumentsResponse_Element): _18.QueryInstrumentsResponse_ElementProtoMsg;
            };
            QueryInstrumentRequest: {
                typeUrl: string;
                encode(message: _18.QueryInstrumentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryInstrumentRequest;
                fromPartial(object: Partial<_18.QueryInstrumentRequest>): _18.QueryInstrumentRequest;
                fromAmino(object: _18.QueryInstrumentRequestAmino): _18.QueryInstrumentRequest;
                toAmino(message: _18.QueryInstrumentRequest): _18.QueryInstrumentRequestAmino;
                fromAminoMsg(object: _18.QueryInstrumentRequestAminoMsg): _18.QueryInstrumentRequest;
                fromProtoMsg(message: _18.QueryInstrumentRequestProtoMsg): _18.QueryInstrumentRequest;
                toProto(message: _18.QueryInstrumentRequest): Uint8Array;
                toProtoMsg(message: _18.QueryInstrumentRequest): _18.QueryInstrumentRequestProtoMsg;
            };
            QueryInstrumentResponse: {
                typeUrl: string;
                encode(message: _18.QueryInstrumentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryInstrumentResponse;
                fromPartial(object: Partial<_18.QueryInstrumentResponse>): _18.QueryInstrumentResponse;
                fromAmino(object: _18.QueryInstrumentResponseAmino): _18.QueryInstrumentResponse;
                toAmino(message: _18.QueryInstrumentResponse): _18.QueryInstrumentResponseAmino;
                fromAminoMsg(object: _18.QueryInstrumentResponseAminoMsg): _18.QueryInstrumentResponse;
                fromProtoMsg(message: _18.QueryInstrumentResponseProtoMsg): _18.QueryInstrumentResponse;
                toProto(message: _18.QueryInstrumentResponse): Uint8Array;
                toProtoMsg(message: _18.QueryInstrumentResponse): _18.QueryInstrumentResponseProtoMsg;
            };
            QueryOrderResponse: {
                typeUrl: string;
                encode(message: _18.QueryOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryOrderResponse;
                fromPartial(object: Partial<_18.QueryOrderResponse>): _18.QueryOrderResponse;
                fromAmino(object: _18.QueryOrderResponseAmino): _18.QueryOrderResponse;
                toAmino(message: _18.QueryOrderResponse): _18.QueryOrderResponseAmino;
                fromAminoMsg(object: _18.QueryOrderResponseAminoMsg): _18.QueryOrderResponse;
                fromProtoMsg(message: _18.QueryOrderResponseProtoMsg): _18.QueryOrderResponse;
                toProto(message: _18.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _18.QueryOrderResponse): _18.QueryOrderResponseProtoMsg;
            };
            timeInForceFromJSON(object: any): _17.TimeInForce;
            timeInForceToJSON(object: _17.TimeInForce): string;
            TimeInForce: typeof _17.TimeInForce;
            TimeInForceSDKType: typeof _17.TimeInForce;
            TimeInForceAmino: typeof _17.TimeInForce;
            Instrument: {
                typeUrl: string;
                encode(message: _17.Instrument, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Instrument;
                fromPartial(object: Partial<_17.Instrument>): _17.Instrument;
                fromAmino(object: _17.InstrumentAmino): _17.Instrument;
                toAmino(message: _17.Instrument): _17.InstrumentAmino;
                fromAminoMsg(object: _17.InstrumentAminoMsg): _17.Instrument;
                fromProtoMsg(message: _17.InstrumentProtoMsg): _17.Instrument;
                toProto(message: _17.Instrument): Uint8Array;
                toProtoMsg(message: _17.Instrument): _17.InstrumentProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _17.Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Order;
                fromPartial(object: Partial<_17.Order>): _17.Order;
                fromAmino(object: _17.OrderAmino): _17.Order;
                toAmino(message: _17.Order): _17.OrderAmino;
                fromAminoMsg(object: _17.OrderAminoMsg): _17.Order;
                fromProtoMsg(message: _17.OrderProtoMsg): _17.Order;
                toProto(message: _17.Order): Uint8Array;
                toProtoMsg(message: _17.Order): _17.OrderProtoMsg;
            };
            ExecutionPlan: {
                typeUrl: string;
                encode(message: _17.ExecutionPlan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.ExecutionPlan;
                fromPartial(object: Partial<_17.ExecutionPlan>): _17.ExecutionPlan;
                fromAmino(object: _17.ExecutionPlanAmino): _17.ExecutionPlan;
                toAmino(message: _17.ExecutionPlan): _17.ExecutionPlanAmino;
                fromAminoMsg(object: _17.ExecutionPlanAminoMsg): _17.ExecutionPlan;
                fromProtoMsg(message: _17.ExecutionPlanProtoMsg): _17.ExecutionPlan;
                toProto(message: _17.ExecutionPlan): Uint8Array;
                toProtoMsg(message: _17.ExecutionPlan): _17.ExecutionPlanProtoMsg;
            };
            MarketData: {
                typeUrl: string;
                encode(message: _17.MarketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MarketData;
                fromPartial(object: Partial<_17.MarketData>): _17.MarketData;
                fromAmino(object: _17.MarketDataAmino): _17.MarketData;
                toAmino(message: _17.MarketData): _17.MarketDataAmino;
                fromAminoMsg(object: _17.MarketDataAminoMsg): _17.MarketData;
                fromProtoMsg(message: _17.MarketDataProtoMsg): _17.MarketData;
                toProto(message: _17.MarketData): Uint8Array;
                toProtoMsg(message: _17.MarketData): _17.MarketDataProtoMsg;
            };
        };
    }
    namespace queries {
        const v1: {
            QueryClientImpl: typeof _140.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                circulating(request?: _20.QueryCirculatingRequest): Promise<_20.QueryCirculatingResponse>;
                missedBlocks(request: _20.QueryMissedBlocksRequest): Promise<_20.QueryMissedBlocksResponse>;
                spendable(request: _20.QuerySpendableRequest): Promise<_20.QuerySpendableResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            QueryCirculatingRequest: {
                typeUrl: string;
                encode(_: _20.QueryCirculatingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryCirculatingRequest;
                fromPartial(_: Partial<_20.QueryCirculatingRequest>): _20.QueryCirculatingRequest;
                fromAmino(_: _20.QueryCirculatingRequestAmino): _20.QueryCirculatingRequest;
                toAmino(_: _20.QueryCirculatingRequest): _20.QueryCirculatingRequestAmino;
                fromAminoMsg(object: _20.QueryCirculatingRequestAminoMsg): _20.QueryCirculatingRequest;
                fromProtoMsg(message: _20.QueryCirculatingRequestProtoMsg): _20.QueryCirculatingRequest;
                toProto(message: _20.QueryCirculatingRequest): Uint8Array;
                toProtoMsg(message: _20.QueryCirculatingRequest): _20.QueryCirculatingRequestProtoMsg;
            };
            QueryCirculatingResponse: {
                typeUrl: string;
                encode(message: _20.QueryCirculatingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryCirculatingResponse;
                fromPartial(object: Partial<_20.QueryCirculatingResponse>): _20.QueryCirculatingResponse;
                fromAmino(object: _20.QueryCirculatingResponseAmino): _20.QueryCirculatingResponse;
                toAmino(message: _20.QueryCirculatingResponse): _20.QueryCirculatingResponseAmino;
                fromAminoMsg(object: _20.QueryCirculatingResponseAminoMsg): _20.QueryCirculatingResponse;
                fromProtoMsg(message: _20.QueryCirculatingResponseProtoMsg): _20.QueryCirculatingResponse;
                toProto(message: _20.QueryCirculatingResponse): Uint8Array;
                toProtoMsg(message: _20.QueryCirculatingResponse): _20.QueryCirculatingResponseProtoMsg;
            };
            QuerySpendableRequest: {
                typeUrl: string;
                encode(message: _20.QuerySpendableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QuerySpendableRequest;
                fromPartial(object: Partial<_20.QuerySpendableRequest>): _20.QuerySpendableRequest;
                fromAmino(object: _20.QuerySpendableRequestAmino): _20.QuerySpendableRequest;
                toAmino(message: _20.QuerySpendableRequest): _20.QuerySpendableRequestAmino;
                fromAminoMsg(object: _20.QuerySpendableRequestAminoMsg): _20.QuerySpendableRequest;
                fromProtoMsg(message: _20.QuerySpendableRequestProtoMsg): _20.QuerySpendableRequest;
                toProto(message: _20.QuerySpendableRequest): Uint8Array;
                toProtoMsg(message: _20.QuerySpendableRequest): _20.QuerySpendableRequestProtoMsg;
            };
            QuerySpendableResponse: {
                typeUrl: string;
                encode(message: _20.QuerySpendableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QuerySpendableResponse;
                fromPartial(object: Partial<_20.QuerySpendableResponse>): _20.QuerySpendableResponse;
                fromAmino(object: _20.QuerySpendableResponseAmino): _20.QuerySpendableResponse;
                toAmino(message: _20.QuerySpendableResponse): _20.QuerySpendableResponseAmino;
                fromAminoMsg(object: _20.QuerySpendableResponseAminoMsg): _20.QuerySpendableResponse;
                fromProtoMsg(message: _20.QuerySpendableResponseProtoMsg): _20.QuerySpendableResponse;
                toProto(message: _20.QuerySpendableResponse): Uint8Array;
                toProtoMsg(message: _20.QuerySpendableResponse): _20.QuerySpendableResponseProtoMsg;
            };
            QueryMissedBlocksRequest: {
                typeUrl: string;
                encode(message: _20.QueryMissedBlocksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryMissedBlocksRequest;
                fromPartial(object: Partial<_20.QueryMissedBlocksRequest>): _20.QueryMissedBlocksRequest;
                fromAmino(object: _20.QueryMissedBlocksRequestAmino): _20.QueryMissedBlocksRequest;
                toAmino(message: _20.QueryMissedBlocksRequest): _20.QueryMissedBlocksRequestAmino;
                fromAminoMsg(object: _20.QueryMissedBlocksRequestAminoMsg): _20.QueryMissedBlocksRequest;
                fromProtoMsg(message: _20.QueryMissedBlocksRequestProtoMsg): _20.QueryMissedBlocksRequest;
                toProto(message: _20.QueryMissedBlocksRequest): Uint8Array;
                toProtoMsg(message: _20.QueryMissedBlocksRequest): _20.QueryMissedBlocksRequestProtoMsg;
            };
            QueryMissedBlocksResponse: {
                typeUrl: string;
                encode(message: _20.QueryMissedBlocksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryMissedBlocksResponse;
                fromPartial(object: Partial<_20.QueryMissedBlocksResponse>): _20.QueryMissedBlocksResponse;
                fromAmino(object: _20.QueryMissedBlocksResponseAmino): _20.QueryMissedBlocksResponse;
                toAmino(message: _20.QueryMissedBlocksResponse): _20.QueryMissedBlocksResponseAmino;
                fromAminoMsg(object: _20.QueryMissedBlocksResponseAminoMsg): _20.QueryMissedBlocksResponse;
                fromProtoMsg(message: _20.QueryMissedBlocksResponseProtoMsg): _20.QueryMissedBlocksResponse;
                toProto(message: _20.QueryMissedBlocksResponse): Uint8Array;
                toProtoMsg(message: _20.QueryMissedBlocksResponse): _20.QueryMissedBlocksResponseProtoMsg;
            };
            MissedBlocksInfo: {
                typeUrl: string;
                encode(message: _20.MissedBlocksInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MissedBlocksInfo;
                fromPartial(object: Partial<_20.MissedBlocksInfo>): _20.MissedBlocksInfo;
                fromAmino(object: _20.MissedBlocksInfoAmino): _20.MissedBlocksInfo;
                toAmino(message: _20.MissedBlocksInfo): _20.MissedBlocksInfoAmino;
                fromAminoMsg(object: _20.MissedBlocksInfoAminoMsg): _20.MissedBlocksInfo;
                fromProtoMsg(message: _20.MissedBlocksInfoProtoMsg): _20.MissedBlocksInfo;
                toProto(message: _20.MissedBlocksInfo): Uint8Array;
                toProtoMsg(message: _20.MissedBlocksInfo): _20.MissedBlocksInfoProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            em: {
                authority: {
                    v1: _141.MsgClientImpl;
                };
                issuer: {
                    v1: _142.MsgClientImpl;
                };
                liquidityprovider: {
                    v1: _143.MsgClientImpl;
                };
                market: {
                    v1: _144.MsgClientImpl;
                };
            };
            cosmos: {
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
            em: {
                authority: {
                    v1: {
                        gasPrices(request?: _2.QueryGasPricesRequest): Promise<_2.QueryGasPricesResponse>;
                        upgradePlan(request?: _2.QueryUpgradePlanRequest): Promise<_2.QueryUpgradePlanResponse>;
                    };
                };
                buyback: {
                    v1: {
                        balance(request?: _5.QueryBalanceRequest): Promise<_5.QueryBalanceResponse>;
                        buybackTime(request?: _5.QueryBuybackTimeRequest): Promise<_5.QueryBuybackTimeResponse>;
                    };
                };
                inflation: {
                    v1: {
                        inflation(request?: _8.QueryInflationRequest): Promise<_8.QueryInflationResponse>;
                    };
                };
                issuer: {
                    v1: {
                        issuers(request?: _11.QueryIssuersRequest): Promise<_11.QueryIssuersResponse>;
                    };
                };
                liquidityprovider: {
                    v1: {
                        list(request?: _15.QueryListRequest): Promise<_15.QueryListResponse>;
                        mintable(request: _15.QueryMintableRequest): Promise<_15.QueryMintableResponse>;
                    };
                };
                market: {
                    v1: {
                        byAccount(request: _18.QueryByAccountRequest): Promise<_18.QueryByAccountResponse>;
                        instruments(request?: _18.QueryInstrumentsRequest): Promise<_18.QueryInstrumentsResponse>;
                        instrument(request: _18.QueryInstrumentRequest): Promise<_18.QueryInstrumentResponse>;
                    };
                };
                queries: {
                    v1: {
                        circulating(request?: _20.QueryCirculatingRequest): Promise<_20.QueryCirculatingResponse>;
                        missedBlocks(request: _20.QueryMissedBlocksRequest): Promise<_20.QueryMissedBlocksResponse>;
                        spendable(request: _20.QuerySpendableRequest): Promise<_20.QuerySpendableResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
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
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
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
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            em: {
                authority: {
                    v1: _127.LCDQueryClient;
                };
                buyback: {
                    v1: _128.LCDQueryClient;
                };
                inflation: {
                    v1: _129.LCDQueryClient;
                };
                issuer: {
                    v1: _130.LCDQueryClient;
                };
                liquidityprovider: {
                    v1: _131.LCDQueryClient;
                };
                market: {
                    v1: _132.LCDQueryClient;
                };
                queries: {
                    v1: _133.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
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
