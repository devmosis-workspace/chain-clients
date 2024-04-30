import * as _0 from "./alloc/v1beta1/genesis";
import * as _1 from "./alloc/v1beta1/params";
import * as _2 from "./alloc/v1beta1/query";
import * as _3 from "./alloc/v1beta1/tx";
import * as _4 from "./globalfee/v1beta1/genesis";
import * as _5 from "./globalfee/v1beta1/query";
import * as _6 from "./globalfee/v1beta1/tx";
import * as _7 from "./itc/v1/genesis";
import * as _8 from "./itc/v1/itc";
import * as _9 from "./itc/v1/params";
import * as _10 from "./itc/v1/query";
import * as _11 from "./itc/v1/tx";
import * as _12 from "./marketplace/v1beta1/auction";
import * as _13 from "./marketplace/v1beta1/events";
import * as _14 from "./marketplace/v1beta1/genesis";
import * as _15 from "./marketplace/v1beta1/listing";
import * as _16 from "./marketplace/v1beta1/params";
import * as _17 from "./marketplace/v1beta1/query";
import * as _18 from "./marketplace/v1beta1/tx";
import * as _19 from "./onft/v1beta1/genesis";
import * as _20 from "./onft/v1beta1/onft";
import * as _21 from "./onft/v1beta1/params";
import * as _22 from "./onft/v1beta1/query";
import * as _23 from "./onft/v1beta1/tx";
import * as _191 from "./alloc/v1beta1/query.lcd";
import * as _192 from "./globalfee/v1beta1/query.lcd";
import * as _193 from "./itc/v1/query.lcd";
import * as _194 from "./marketplace/v1beta1/query.lcd";
import * as _195 from "./onft/v1beta1/query.lcd";
import * as _196 from "./alloc/v1beta1/query.rpc.Query";
import * as _197 from "./globalfee/v1beta1/query.rpc.Query";
import * as _198 from "./itc/v1/query.rpc.Query";
import * as _199 from "./marketplace/v1beta1/query.rpc.Query";
import * as _200 from "./onft/v1beta1/query.rpc.Query";
import * as _201 from "./alloc/v1beta1/tx.rpc.msg";
import * as _202 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _203 from "./itc/v1/tx.rpc.msg";
import * as _204 from "./marketplace/v1beta1/tx.rpc.msg";
import * as _205 from "./onft/v1beta1/tx.rpc.msg";
export declare namespace OmniFlix {
    namespace alloc {
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/OmniFlix.alloc.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _3.MsgUpdateParams) => _3.MsgUpdateParamsAmino;
                    fromAmino: (object: _3.MsgUpdateParamsAmino) => _3.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _3.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgUpdateParams;
                fromPartial(object: Partial<_3.MsgUpdateParams>): _3.MsgUpdateParams;
                fromAmino(object: _3.MsgUpdateParamsAmino): _3.MsgUpdateParams;
                toAmino(message: _3.MsgUpdateParams): _3.MsgUpdateParamsAmino;
                fromAminoMsg(object: _3.MsgUpdateParamsAminoMsg): _3.MsgUpdateParams;
                fromProtoMsg(message: _3.MsgUpdateParamsProtoMsg): _3.MsgUpdateParams;
                toProto(message: _3.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _3.MsgUpdateParams): _3.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _3.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_3.MsgUpdateParamsResponse>): _3.MsgUpdateParamsResponse;
                fromAmino(_: _3.MsgUpdateParamsResponseAmino): _3.MsgUpdateParamsResponse;
                toAmino(_: _3.MsgUpdateParamsResponse): _3.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _3.MsgUpdateParamsResponseAminoMsg): _3.MsgUpdateParamsResponse;
                fromProtoMsg(message: _3.MsgUpdateParamsResponseProtoMsg): _3.MsgUpdateParamsResponse;
                toProto(message: _3.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _3.MsgUpdateParamsResponse): _3.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _2.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
                fromAmino(_: _2.QueryParamsRequestAmino): _2.QueryParamsRequest;
                toAmino(_: _2.QueryParamsRequest): _2.QueryParamsRequestAmino;
                fromAminoMsg(object: _2.QueryParamsRequestAminoMsg): _2.QueryParamsRequest;
                fromProtoMsg(message: _2.QueryParamsRequestProtoMsg): _2.QueryParamsRequest;
                toProto(message: _2.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryParamsRequest): _2.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _2.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
                fromAmino(object: _2.QueryParamsResponseAmino): _2.QueryParamsResponse;
                toAmino(message: _2.QueryParamsResponse): _2.QueryParamsResponseAmino;
                fromAminoMsg(object: _2.QueryParamsResponseAminoMsg): _2.QueryParamsResponse;
                fromProtoMsg(message: _2.QueryParamsResponseProtoMsg): _2.QueryParamsResponse;
                toProto(message: _2.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryParamsResponse): _2.QueryParamsResponseProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _1.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.WeightedAddress;
                fromPartial(object: Partial<_1.WeightedAddress>): _1.WeightedAddress;
                fromAmino(object: _1.WeightedAddressAmino): _1.WeightedAddress;
                toAmino(message: _1.WeightedAddress): _1.WeightedAddressAmino;
                fromAminoMsg(object: _1.WeightedAddressAminoMsg): _1.WeightedAddress;
                fromProtoMsg(message: _1.WeightedAddressProtoMsg): _1.WeightedAddress;
                toProto(message: _1.WeightedAddress): Uint8Array;
                toProtoMsg(message: _1.WeightedAddress): _1.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _1.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.DistributionProportions;
                fromPartial(object: Partial<_1.DistributionProportions>): _1.DistributionProportions;
                fromAmino(object: _1.DistributionProportionsAmino): _1.DistributionProportions;
                toAmino(message: _1.DistributionProportions): _1.DistributionProportionsAmino;
                fromAminoMsg(object: _1.DistributionProportionsAminoMsg): _1.DistributionProportions;
                fromProtoMsg(message: _1.DistributionProportionsProtoMsg): _1.DistributionProportions;
                toProto(message: _1.DistributionProportions): Uint8Array;
                toProtoMsg(message: _1.DistributionProportions): _1.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _1.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.Params;
                fromPartial(object: Partial<_1.Params>): _1.Params;
                fromAmino(object: _1.ParamsAmino): _1.Params;
                toAmino(message: _1.Params): _1.ParamsAmino;
                fromAminoMsg(object: _1.ParamsAminoMsg): _1.Params;
                fromProtoMsg(message: _1.ParamsProtoMsg): _1.Params;
                toProto(message: _1.Params): Uint8Array;
                toProtoMsg(message: _1.Params): _1.ParamsProtoMsg;
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
        };
    }
    namespace globalfee {
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _6.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _6.MsgUpdateParams): {
                        typeUrl: string;
                        value: _6.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _6.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _6.MsgUpdateParams): {
                        typeUrl: string;
                        value: _6.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/OmniFlix.globalfee.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _6.MsgUpdateParams) => _6.MsgUpdateParamsAmino;
                    fromAmino: (object: _6.MsgUpdateParamsAmino) => _6.MsgUpdateParams;
                };
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
        };
    }
    namespace itc {
        const v1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                campaigns(request: _10.QueryCampaignsRequest): Promise<_10.QueryCampaignsResponse>;
                campaign(request: _10.QueryCampaignRequest): Promise<_10.QueryCampaignResponse>;
                claims(request: _10.QueryClaimsRequest): Promise<_10.QueryClaimsResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCampaign(value: _11.MsgCreateCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelCampaign(value: _11.MsgCancelCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claim(value: _11.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositCampaign(value: _11.MsgDepositCampaign): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _11.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCampaign(value: _11.MsgCreateCampaign): {
                        typeUrl: string;
                        value: _11.MsgCreateCampaign;
                    };
                    cancelCampaign(value: _11.MsgCancelCampaign): {
                        typeUrl: string;
                        value: _11.MsgCancelCampaign;
                    };
                    claim(value: _11.MsgClaim): {
                        typeUrl: string;
                        value: _11.MsgClaim;
                    };
                    depositCampaign(value: _11.MsgDepositCampaign): {
                        typeUrl: string;
                        value: _11.MsgDepositCampaign;
                    };
                    updateParams(value: _11.MsgUpdateParams): {
                        typeUrl: string;
                        value: _11.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createCampaign(value: any): {
                        typeUrl: string;
                        value: _11.MsgCreateCampaign;
                    };
                    cancelCampaign(value: any): {
                        typeUrl: string;
                        value: _11.MsgCancelCampaign;
                    };
                    claim(value: any): {
                        typeUrl: string;
                        value: _11.MsgClaim;
                    };
                    depositCampaign(value: any): {
                        typeUrl: string;
                        value: _11.MsgDepositCampaign;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _11.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createCampaign(value: _11.MsgCreateCampaign): {
                        typeUrl: string;
                        value: _11.MsgCreateCampaign;
                    };
                    cancelCampaign(value: _11.MsgCancelCampaign): {
                        typeUrl: string;
                        value: _11.MsgCancelCampaign;
                    };
                    claim(value: _11.MsgClaim): {
                        typeUrl: string;
                        value: _11.MsgClaim;
                    };
                    depositCampaign(value: _11.MsgDepositCampaign): {
                        typeUrl: string;
                        value: _11.MsgDepositCampaign;
                    };
                    updateParams(value: _11.MsgUpdateParams): {
                        typeUrl: string;
                        value: _11.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/OmniFlix.itc.v1.MsgCreateCampaign": {
                    aminoType: string;
                    toAmino: (message: _11.MsgCreateCampaign) => _11.MsgCreateCampaignAmino;
                    fromAmino: (object: _11.MsgCreateCampaignAmino) => _11.MsgCreateCampaign;
                };
                "/OmniFlix.itc.v1.MsgCancelCampaign": {
                    aminoType: string;
                    toAmino: (message: _11.MsgCancelCampaign) => _11.MsgCancelCampaignAmino;
                    fromAmino: (object: _11.MsgCancelCampaignAmino) => _11.MsgCancelCampaign;
                };
                "/OmniFlix.itc.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _11.MsgClaim) => _11.MsgClaimAmino;
                    fromAmino: (object: _11.MsgClaimAmino) => _11.MsgClaim;
                };
                "/OmniFlix.itc.v1.MsgDepositCampaign": {
                    aminoType: string;
                    toAmino: (message: _11.MsgDepositCampaign) => _11.MsgDepositCampaignAmino;
                    fromAmino: (object: _11.MsgDepositCampaignAmino) => _11.MsgDepositCampaign;
                };
                "/OmniFlix.itc.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _11.MsgUpdateParams) => _11.MsgUpdateParamsAmino;
                    fromAmino: (object: _11.MsgUpdateParamsAmino) => _11.MsgUpdateParams;
                };
            };
            MsgCreateCampaign: {
                typeUrl: string;
                encode(message: _11.MsgCreateCampaign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgCreateCampaign;
                fromPartial(object: Partial<_11.MsgCreateCampaign>): _11.MsgCreateCampaign;
                fromAmino(object: _11.MsgCreateCampaignAmino): _11.MsgCreateCampaign;
                toAmino(message: _11.MsgCreateCampaign): _11.MsgCreateCampaignAmino;
                fromAminoMsg(object: _11.MsgCreateCampaignAminoMsg): _11.MsgCreateCampaign;
                toAminoMsg(message: _11.MsgCreateCampaign): _11.MsgCreateCampaignAminoMsg;
                fromProtoMsg(message: _11.MsgCreateCampaignProtoMsg): _11.MsgCreateCampaign;
                toProto(message: _11.MsgCreateCampaign): Uint8Array;
                toProtoMsg(message: _11.MsgCreateCampaign): _11.MsgCreateCampaignProtoMsg;
            };
            MsgCreateCampaignResponse: {
                typeUrl: string;
                encode(_: _11.MsgCreateCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgCreateCampaignResponse;
                fromPartial(_: Partial<_11.MsgCreateCampaignResponse>): _11.MsgCreateCampaignResponse;
                fromAmino(_: _11.MsgCreateCampaignResponseAmino): _11.MsgCreateCampaignResponse;
                toAmino(_: _11.MsgCreateCampaignResponse): _11.MsgCreateCampaignResponseAmino;
                fromAminoMsg(object: _11.MsgCreateCampaignResponseAminoMsg): _11.MsgCreateCampaignResponse;
                fromProtoMsg(message: _11.MsgCreateCampaignResponseProtoMsg): _11.MsgCreateCampaignResponse;
                toProto(message: _11.MsgCreateCampaignResponse): Uint8Array;
                toProtoMsg(message: _11.MsgCreateCampaignResponse): _11.MsgCreateCampaignResponseProtoMsg;
            };
            MsgCancelCampaign: {
                typeUrl: string;
                encode(message: _11.MsgCancelCampaign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgCancelCampaign;
                fromPartial(object: Partial<_11.MsgCancelCampaign>): _11.MsgCancelCampaign;
                fromAmino(object: _11.MsgCancelCampaignAmino): _11.MsgCancelCampaign;
                toAmino(message: _11.MsgCancelCampaign): _11.MsgCancelCampaignAmino;
                fromAminoMsg(object: _11.MsgCancelCampaignAminoMsg): _11.MsgCancelCampaign;
                toAminoMsg(message: _11.MsgCancelCampaign): _11.MsgCancelCampaignAminoMsg;
                fromProtoMsg(message: _11.MsgCancelCampaignProtoMsg): _11.MsgCancelCampaign;
                toProto(message: _11.MsgCancelCampaign): Uint8Array;
                toProtoMsg(message: _11.MsgCancelCampaign): _11.MsgCancelCampaignProtoMsg;
            };
            MsgCancelCampaignResponse: {
                typeUrl: string;
                encode(_: _11.MsgCancelCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgCancelCampaignResponse;
                fromPartial(_: Partial<_11.MsgCancelCampaignResponse>): _11.MsgCancelCampaignResponse;
                fromAmino(_: _11.MsgCancelCampaignResponseAmino): _11.MsgCancelCampaignResponse;
                toAmino(_: _11.MsgCancelCampaignResponse): _11.MsgCancelCampaignResponseAmino;
                fromAminoMsg(object: _11.MsgCancelCampaignResponseAminoMsg): _11.MsgCancelCampaignResponse;
                fromProtoMsg(message: _11.MsgCancelCampaignResponseProtoMsg): _11.MsgCancelCampaignResponse;
                toProto(message: _11.MsgCancelCampaignResponse): Uint8Array;
                toProtoMsg(message: _11.MsgCancelCampaignResponse): _11.MsgCancelCampaignResponseProtoMsg;
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _11.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgClaim;
                fromPartial(object: Partial<_11.MsgClaim>): _11.MsgClaim;
                fromAmino(object: _11.MsgClaimAmino): _11.MsgClaim;
                toAmino(message: _11.MsgClaim): _11.MsgClaimAmino;
                fromAminoMsg(object: _11.MsgClaimAminoMsg): _11.MsgClaim;
                toAminoMsg(message: _11.MsgClaim): _11.MsgClaimAminoMsg;
                fromProtoMsg(message: _11.MsgClaimProtoMsg): _11.MsgClaim;
                toProto(message: _11.MsgClaim): Uint8Array;
                toProtoMsg(message: _11.MsgClaim): _11.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(_: _11.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgClaimResponse;
                fromPartial(_: Partial<_11.MsgClaimResponse>): _11.MsgClaimResponse;
                fromAmino(_: _11.MsgClaimResponseAmino): _11.MsgClaimResponse;
                toAmino(_: _11.MsgClaimResponse): _11.MsgClaimResponseAmino;
                fromAminoMsg(object: _11.MsgClaimResponseAminoMsg): _11.MsgClaimResponse;
                fromProtoMsg(message: _11.MsgClaimResponseProtoMsg): _11.MsgClaimResponse;
                toProto(message: _11.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _11.MsgClaimResponse): _11.MsgClaimResponseProtoMsg;
            };
            MsgDepositCampaign: {
                typeUrl: string;
                encode(message: _11.MsgDepositCampaign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgDepositCampaign;
                fromPartial(object: Partial<_11.MsgDepositCampaign>): _11.MsgDepositCampaign;
                fromAmino(object: _11.MsgDepositCampaignAmino): _11.MsgDepositCampaign;
                toAmino(message: _11.MsgDepositCampaign): _11.MsgDepositCampaignAmino;
                fromAminoMsg(object: _11.MsgDepositCampaignAminoMsg): _11.MsgDepositCampaign;
                toAminoMsg(message: _11.MsgDepositCampaign): _11.MsgDepositCampaignAminoMsg;
                fromProtoMsg(message: _11.MsgDepositCampaignProtoMsg): _11.MsgDepositCampaign;
                toProto(message: _11.MsgDepositCampaign): Uint8Array;
                toProtoMsg(message: _11.MsgDepositCampaign): _11.MsgDepositCampaignProtoMsg;
            };
            MsgDepositCampaignResponse: {
                typeUrl: string;
                encode(_: _11.MsgDepositCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgDepositCampaignResponse;
                fromPartial(_: Partial<_11.MsgDepositCampaignResponse>): _11.MsgDepositCampaignResponse;
                fromAmino(_: _11.MsgDepositCampaignResponseAmino): _11.MsgDepositCampaignResponse;
                toAmino(_: _11.MsgDepositCampaignResponse): _11.MsgDepositCampaignResponseAmino;
                fromAminoMsg(object: _11.MsgDepositCampaignResponseAminoMsg): _11.MsgDepositCampaignResponse;
                fromProtoMsg(message: _11.MsgDepositCampaignResponseProtoMsg): _11.MsgDepositCampaignResponse;
                toProto(message: _11.MsgDepositCampaignResponse): Uint8Array;
                toProtoMsg(message: _11.MsgDepositCampaignResponse): _11.MsgDepositCampaignResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _11.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgUpdateParams;
                fromPartial(object: Partial<_11.MsgUpdateParams>): _11.MsgUpdateParams;
                fromAmino(object: _11.MsgUpdateParamsAmino): _11.MsgUpdateParams;
                toAmino(message: _11.MsgUpdateParams): _11.MsgUpdateParamsAmino;
                fromAminoMsg(object: _11.MsgUpdateParamsAminoMsg): _11.MsgUpdateParams;
                fromProtoMsg(message: _11.MsgUpdateParamsProtoMsg): _11.MsgUpdateParams;
                toProto(message: _11.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _11.MsgUpdateParams): _11.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _11.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_11.MsgUpdateParamsResponse>): _11.MsgUpdateParamsResponse;
                fromAmino(_: _11.MsgUpdateParamsResponseAmino): _11.MsgUpdateParamsResponse;
                toAmino(_: _11.MsgUpdateParamsResponse): _11.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _11.MsgUpdateParamsResponseAminoMsg): _11.MsgUpdateParamsResponse;
                fromProtoMsg(message: _11.MsgUpdateParamsResponseProtoMsg): _11.MsgUpdateParamsResponse;
                toProto(message: _11.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _11.MsgUpdateParamsResponse): _11.MsgUpdateParamsResponseProtoMsg;
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
            QueryCampaignsRequest: {
                typeUrl: string;
                encode(message: _10.QueryCampaignsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCampaignsRequest;
                fromPartial(object: Partial<_10.QueryCampaignsRequest>): _10.QueryCampaignsRequest;
                fromAmino(object: _10.QueryCampaignsRequestAmino): _10.QueryCampaignsRequest;
                toAmino(message: _10.QueryCampaignsRequest): _10.QueryCampaignsRequestAmino;
                fromAminoMsg(object: _10.QueryCampaignsRequestAminoMsg): _10.QueryCampaignsRequest;
                fromProtoMsg(message: _10.QueryCampaignsRequestProtoMsg): _10.QueryCampaignsRequest;
                toProto(message: _10.QueryCampaignsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryCampaignsRequest): _10.QueryCampaignsRequestProtoMsg;
            };
            QueryCampaignsResponse: {
                typeUrl: string;
                encode(message: _10.QueryCampaignsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCampaignsResponse;
                fromPartial(object: Partial<_10.QueryCampaignsResponse>): _10.QueryCampaignsResponse;
                fromAmino(object: _10.QueryCampaignsResponseAmino): _10.QueryCampaignsResponse;
                toAmino(message: _10.QueryCampaignsResponse): _10.QueryCampaignsResponseAmino;
                fromAminoMsg(object: _10.QueryCampaignsResponseAminoMsg): _10.QueryCampaignsResponse;
                fromProtoMsg(message: _10.QueryCampaignsResponseProtoMsg): _10.QueryCampaignsResponse;
                toProto(message: _10.QueryCampaignsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryCampaignsResponse): _10.QueryCampaignsResponseProtoMsg;
            };
            QueryCampaignRequest: {
                typeUrl: string;
                encode(message: _10.QueryCampaignRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCampaignRequest;
                fromPartial(object: Partial<_10.QueryCampaignRequest>): _10.QueryCampaignRequest;
                fromAmino(object: _10.QueryCampaignRequestAmino): _10.QueryCampaignRequest;
                toAmino(message: _10.QueryCampaignRequest): _10.QueryCampaignRequestAmino;
                fromAminoMsg(object: _10.QueryCampaignRequestAminoMsg): _10.QueryCampaignRequest;
                fromProtoMsg(message: _10.QueryCampaignRequestProtoMsg): _10.QueryCampaignRequest;
                toProto(message: _10.QueryCampaignRequest): Uint8Array;
                toProtoMsg(message: _10.QueryCampaignRequest): _10.QueryCampaignRequestProtoMsg;
            };
            QueryCampaignResponse: {
                typeUrl: string;
                encode(message: _10.QueryCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCampaignResponse;
                fromPartial(object: Partial<_10.QueryCampaignResponse>): _10.QueryCampaignResponse;
                fromAmino(object: _10.QueryCampaignResponseAmino): _10.QueryCampaignResponse;
                toAmino(message: _10.QueryCampaignResponse): _10.QueryCampaignResponseAmino;
                fromAminoMsg(object: _10.QueryCampaignResponseAminoMsg): _10.QueryCampaignResponse;
                fromProtoMsg(message: _10.QueryCampaignResponseProtoMsg): _10.QueryCampaignResponse;
                toProto(message: _10.QueryCampaignResponse): Uint8Array;
                toProtoMsg(message: _10.QueryCampaignResponse): _10.QueryCampaignResponseProtoMsg;
            };
            QueryClaimsRequest: {
                typeUrl: string;
                encode(message: _10.QueryClaimsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryClaimsRequest;
                fromPartial(object: Partial<_10.QueryClaimsRequest>): _10.QueryClaimsRequest;
                fromAmino(object: _10.QueryClaimsRequestAmino): _10.QueryClaimsRequest;
                toAmino(message: _10.QueryClaimsRequest): _10.QueryClaimsRequestAmino;
                fromAminoMsg(object: _10.QueryClaimsRequestAminoMsg): _10.QueryClaimsRequest;
                fromProtoMsg(message: _10.QueryClaimsRequestProtoMsg): _10.QueryClaimsRequest;
                toProto(message: _10.QueryClaimsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryClaimsRequest): _10.QueryClaimsRequestProtoMsg;
            };
            QueryClaimsResponse: {
                typeUrl: string;
                encode(message: _10.QueryClaimsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryClaimsResponse;
                fromPartial(object: Partial<_10.QueryClaimsResponse>): _10.QueryClaimsResponse;
                fromAmino(object: _10.QueryClaimsResponseAmino): _10.QueryClaimsResponse;
                toAmino(message: _10.QueryClaimsResponse): _10.QueryClaimsResponseAmino;
                fromAminoMsg(object: _10.QueryClaimsResponseAminoMsg): _10.QueryClaimsResponse;
                fromProtoMsg(message: _10.QueryClaimsResponseProtoMsg): _10.QueryClaimsResponse;
                toProto(message: _10.QueryClaimsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryClaimsResponse): _10.QueryClaimsResponseProtoMsg;
            };
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
            distributionTypeFromJSON(object: any): _8.DistributionType;
            distributionTypeToJSON(object: _8.DistributionType): string;
            interactionTypeFromJSON(object: any): _8.InteractionType;
            interactionTypeToJSON(object: _8.InteractionType): string;
            campaignStatusFromJSON(object: any): _8.CampaignStatus;
            campaignStatusToJSON(object: _8.CampaignStatus): string;
            claimTypeFromJSON(object: any): _8.ClaimType;
            claimTypeToJSON(object: _8.ClaimType): string;
            DistributionType: typeof _8.DistributionType;
            DistributionTypeSDKType: typeof _8.DistributionType;
            DistributionTypeAmino: typeof _8.DistributionType;
            InteractionType: typeof _8.InteractionType;
            InteractionTypeSDKType: typeof _8.InteractionType;
            InteractionTypeAmino: typeof _8.InteractionType;
            CampaignStatus: typeof _8.CampaignStatus;
            CampaignStatusSDKType: typeof _8.CampaignStatus;
            CampaignStatusAmino: typeof _8.CampaignStatus;
            ClaimType: typeof _8.ClaimType;
            ClaimTypeSDKType: typeof _8.ClaimType;
            ClaimTypeAmino: typeof _8.ClaimType;
            Campaign: {
                typeUrl: string;
                encode(message: _8.Campaign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Campaign;
                fromPartial(object: Partial<_8.Campaign>): _8.Campaign;
                fromAmino(object: _8.CampaignAmino): _8.Campaign;
                toAmino(message: _8.Campaign): _8.CampaignAmino;
                fromAminoMsg(object: _8.CampaignAminoMsg): _8.Campaign;
                fromProtoMsg(message: _8.CampaignProtoMsg): _8.Campaign;
                toProto(message: _8.Campaign): Uint8Array;
                toProtoMsg(message: _8.Campaign): _8.CampaignProtoMsg;
            };
            Distribution: {
                typeUrl: string;
                encode(message: _8.Distribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Distribution;
                fromPartial(object: Partial<_8.Distribution>): _8.Distribution;
                fromAmino(object: _8.DistributionAmino): _8.Distribution;
                toAmino(message: _8.Distribution): _8.DistributionAmino;
                fromAminoMsg(object: _8.DistributionAminoMsg): _8.Distribution;
                fromProtoMsg(message: _8.DistributionProtoMsg): _8.Distribution;
                toProto(message: _8.Distribution): Uint8Array;
                toProtoMsg(message: _8.Distribution): _8.DistributionProtoMsg;
            };
            NFTDetails: {
                typeUrl: string;
                encode(message: _8.NFTDetails, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.NFTDetails;
                fromPartial(object: Partial<_8.NFTDetails>): _8.NFTDetails;
                fromAmino(object: _8.NFTDetailsAmino): _8.NFTDetails;
                toAmino(message: _8.NFTDetails): _8.NFTDetailsAmino;
                fromAminoMsg(object: _8.NFTDetailsAminoMsg): _8.NFTDetails;
                fromProtoMsg(message: _8.NFTDetailsProtoMsg): _8.NFTDetails;
                toProto(message: _8.NFTDetails): Uint8Array;
                toProtoMsg(message: _8.NFTDetails): _8.NFTDetailsProtoMsg;
            };
            Claim: {
                typeUrl: string;
                encode(message: _8.Claim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Claim;
                fromPartial(object: Partial<_8.Claim>): _8.Claim;
                fromAmino(object: _8.ClaimAmino): _8.Claim;
                toAmino(message: _8.Claim): _8.ClaimAmino;
                fromAminoMsg(object: _8.ClaimAminoMsg): _8.Claim;
                fromProtoMsg(message: _8.ClaimProtoMsg): _8.Claim;
                toProto(message: _8.Claim): Uint8Array;
                toProtoMsg(message: _8.Claim): _8.ClaimProtoMsg;
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
        };
    }
    namespace marketplace {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                listings(request: _17.QueryListingsRequest): Promise<_17.QueryListingsResponse>;
                listing(request: _17.QueryListingRequest): Promise<_17.QueryListingResponse>;
                listingsByOwner(request: _17.QueryListingsByOwnerRequest): Promise<_17.QueryListingsByOwnerResponse>;
                listingsByPriceDenom(request: _17.QueryListingsByPriceDenomRequest): Promise<_17.QueryListingsByPriceDenomResponse>;
                listingByNftId(request: _17.QueryListingByNFTIDRequest): Promise<_17.QueryListingResponse>;
                auctions(request: _17.QueryAuctionsRequest): Promise<_17.QueryAuctionsResponse>;
                auction(request: _17.QueryAuctionRequest): Promise<_17.QueryAuctionResponse>;
                auctionsByOwner(request: _17.QueryAuctionsByOwnerRequest): Promise<_17.QueryAuctionsResponse>;
                auctionsByPriceDenom(request: _17.QueryAuctionsByPriceDenomRequest): Promise<_17.QueryAuctionsResponse>;
                auctionByNftId(request: _17.QueryAuctionByNFTIDRequest): Promise<_17.QueryAuctionResponse>;
                bids(request: _17.QueryBidsRequest): Promise<_17.QueryBidsResponse>;
                bid(request: _17.QueryBidRequest): Promise<_17.QueryBidResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    listNFT(value: _18.MsgListNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editListing(value: _18.MsgEditListing): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deListNFT(value: _18.MsgDeListNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    buyNFT(value: _18.MsgBuyNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createAuction(value: _18.MsgCreateAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelAuction(value: _18.MsgCancelAuction): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    placeBid(value: _18.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    listNFT(value: _18.MsgListNFT): {
                        typeUrl: string;
                        value: _18.MsgListNFT;
                    };
                    editListing(value: _18.MsgEditListing): {
                        typeUrl: string;
                        value: _18.MsgEditListing;
                    };
                    deListNFT(value: _18.MsgDeListNFT): {
                        typeUrl: string;
                        value: _18.MsgDeListNFT;
                    };
                    buyNFT(value: _18.MsgBuyNFT): {
                        typeUrl: string;
                        value: _18.MsgBuyNFT;
                    };
                    createAuction(value: _18.MsgCreateAuction): {
                        typeUrl: string;
                        value: _18.MsgCreateAuction;
                    };
                    cancelAuction(value: _18.MsgCancelAuction): {
                        typeUrl: string;
                        value: _18.MsgCancelAuction;
                    };
                    placeBid(value: _18.MsgPlaceBid): {
                        typeUrl: string;
                        value: _18.MsgPlaceBid;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    listNFT(value: any): {
                        typeUrl: string;
                        value: _18.MsgListNFT;
                    };
                    editListing(value: any): {
                        typeUrl: string;
                        value: _18.MsgEditListing;
                    };
                    deListNFT(value: any): {
                        typeUrl: string;
                        value: _18.MsgDeListNFT;
                    };
                    buyNFT(value: any): {
                        typeUrl: string;
                        value: _18.MsgBuyNFT;
                    };
                    createAuction(value: any): {
                        typeUrl: string;
                        value: _18.MsgCreateAuction;
                    };
                    cancelAuction(value: any): {
                        typeUrl: string;
                        value: _18.MsgCancelAuction;
                    };
                    placeBid(value: any): {
                        typeUrl: string;
                        value: _18.MsgPlaceBid;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    listNFT(value: _18.MsgListNFT): {
                        typeUrl: string;
                        value: _18.MsgListNFT;
                    };
                    editListing(value: _18.MsgEditListing): {
                        typeUrl: string;
                        value: _18.MsgEditListing;
                    };
                    deListNFT(value: _18.MsgDeListNFT): {
                        typeUrl: string;
                        value: _18.MsgDeListNFT;
                    };
                    buyNFT(value: _18.MsgBuyNFT): {
                        typeUrl: string;
                        value: _18.MsgBuyNFT;
                    };
                    createAuction(value: _18.MsgCreateAuction): {
                        typeUrl: string;
                        value: _18.MsgCreateAuction;
                    };
                    cancelAuction(value: _18.MsgCancelAuction): {
                        typeUrl: string;
                        value: _18.MsgCancelAuction;
                    };
                    placeBid(value: _18.MsgPlaceBid): {
                        typeUrl: string;
                        value: _18.MsgPlaceBid;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/OmniFlix.marketplace.v1beta1.MsgListNFT": {
                    aminoType: string;
                    toAmino: (message: _18.MsgListNFT) => _18.MsgListNFTAmino;
                    fromAmino: (object: _18.MsgListNFTAmino) => _18.MsgListNFT;
                };
                "/OmniFlix.marketplace.v1beta1.MsgEditListing": {
                    aminoType: string;
                    toAmino: (message: _18.MsgEditListing) => _18.MsgEditListingAmino;
                    fromAmino: (object: _18.MsgEditListingAmino) => _18.MsgEditListing;
                };
                "/OmniFlix.marketplace.v1beta1.MsgDeListNFT": {
                    aminoType: string;
                    toAmino: (message: _18.MsgDeListNFT) => _18.MsgDeListNFTAmino;
                    fromAmino: (object: _18.MsgDeListNFTAmino) => _18.MsgDeListNFT;
                };
                "/OmniFlix.marketplace.v1beta1.MsgBuyNFT": {
                    aminoType: string;
                    toAmino: (message: _18.MsgBuyNFT) => _18.MsgBuyNFTAmino;
                    fromAmino: (object: _18.MsgBuyNFTAmino) => _18.MsgBuyNFT;
                };
                "/OmniFlix.marketplace.v1beta1.MsgCreateAuction": {
                    aminoType: string;
                    toAmino: (message: _18.MsgCreateAuction) => _18.MsgCreateAuctionAmino;
                    fromAmino: (object: _18.MsgCreateAuctionAmino) => _18.MsgCreateAuction;
                };
                "/OmniFlix.marketplace.v1beta1.MsgCancelAuction": {
                    aminoType: string;
                    toAmino: (message: _18.MsgCancelAuction) => _18.MsgCancelAuctionAmino;
                    fromAmino: (object: _18.MsgCancelAuctionAmino) => _18.MsgCancelAuction;
                };
                "/OmniFlix.marketplace.v1beta1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: (message: _18.MsgPlaceBid) => _18.MsgPlaceBidAmino;
                    fromAmino: (object: _18.MsgPlaceBidAmino) => _18.MsgPlaceBid;
                };
                "/OmniFlix.marketplace.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _18.MsgUpdateParams) => _18.MsgUpdateParamsAmino;
                    fromAmino: (object: _18.MsgUpdateParamsAmino) => _18.MsgUpdateParams;
                };
            };
            MsgListNFT: {
                typeUrl: string;
                encode(message: _18.MsgListNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgListNFT;
                fromPartial(object: Partial<_18.MsgListNFT>): _18.MsgListNFT;
                fromAmino(object: _18.MsgListNFTAmino): _18.MsgListNFT;
                toAmino(message: _18.MsgListNFT): _18.MsgListNFTAmino;
                fromAminoMsg(object: _18.MsgListNFTAminoMsg): _18.MsgListNFT;
                toAminoMsg(message: _18.MsgListNFT): _18.MsgListNFTAminoMsg;
                fromProtoMsg(message: _18.MsgListNFTProtoMsg): _18.MsgListNFT;
                toProto(message: _18.MsgListNFT): Uint8Array;
                toProtoMsg(message: _18.MsgListNFT): _18.MsgListNFTProtoMsg;
            };
            MsgListNFTResponse: {
                typeUrl: string;
                encode(_: _18.MsgListNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgListNFTResponse;
                fromPartial(_: Partial<_18.MsgListNFTResponse>): _18.MsgListNFTResponse;
                fromAmino(_: _18.MsgListNFTResponseAmino): _18.MsgListNFTResponse;
                toAmino(_: _18.MsgListNFTResponse): _18.MsgListNFTResponseAmino;
                fromAminoMsg(object: _18.MsgListNFTResponseAminoMsg): _18.MsgListNFTResponse;
                fromProtoMsg(message: _18.MsgListNFTResponseProtoMsg): _18.MsgListNFTResponse;
                toProto(message: _18.MsgListNFTResponse): Uint8Array;
                toProtoMsg(message: _18.MsgListNFTResponse): _18.MsgListNFTResponseProtoMsg;
            };
            MsgEditListing: {
                typeUrl: string;
                encode(message: _18.MsgEditListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgEditListing;
                fromPartial(object: Partial<_18.MsgEditListing>): _18.MsgEditListing;
                fromAmino(object: _18.MsgEditListingAmino): _18.MsgEditListing;
                toAmino(message: _18.MsgEditListing): _18.MsgEditListingAmino;
                fromAminoMsg(object: _18.MsgEditListingAminoMsg): _18.MsgEditListing;
                toAminoMsg(message: _18.MsgEditListing): _18.MsgEditListingAminoMsg;
                fromProtoMsg(message: _18.MsgEditListingProtoMsg): _18.MsgEditListing;
                toProto(message: _18.MsgEditListing): Uint8Array;
                toProtoMsg(message: _18.MsgEditListing): _18.MsgEditListingProtoMsg;
            };
            MsgEditListingResponse: {
                typeUrl: string;
                encode(_: _18.MsgEditListingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgEditListingResponse;
                fromPartial(_: Partial<_18.MsgEditListingResponse>): _18.MsgEditListingResponse;
                fromAmino(_: _18.MsgEditListingResponseAmino): _18.MsgEditListingResponse;
                toAmino(_: _18.MsgEditListingResponse): _18.MsgEditListingResponseAmino;
                fromAminoMsg(object: _18.MsgEditListingResponseAminoMsg): _18.MsgEditListingResponse;
                fromProtoMsg(message: _18.MsgEditListingResponseProtoMsg): _18.MsgEditListingResponse;
                toProto(message: _18.MsgEditListingResponse): Uint8Array;
                toProtoMsg(message: _18.MsgEditListingResponse): _18.MsgEditListingResponseProtoMsg;
            };
            MsgDeListNFT: {
                typeUrl: string;
                encode(message: _18.MsgDeListNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgDeListNFT;
                fromPartial(object: Partial<_18.MsgDeListNFT>): _18.MsgDeListNFT;
                fromAmino(object: _18.MsgDeListNFTAmino): _18.MsgDeListNFT;
                toAmino(message: _18.MsgDeListNFT): _18.MsgDeListNFTAmino;
                fromAminoMsg(object: _18.MsgDeListNFTAminoMsg): _18.MsgDeListNFT;
                toAminoMsg(message: _18.MsgDeListNFT): _18.MsgDeListNFTAminoMsg;
                fromProtoMsg(message: _18.MsgDeListNFTProtoMsg): _18.MsgDeListNFT;
                toProto(message: _18.MsgDeListNFT): Uint8Array;
                toProtoMsg(message: _18.MsgDeListNFT): _18.MsgDeListNFTProtoMsg;
            };
            MsgDeListNFTResponse: {
                typeUrl: string;
                encode(_: _18.MsgDeListNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgDeListNFTResponse;
                fromPartial(_: Partial<_18.MsgDeListNFTResponse>): _18.MsgDeListNFTResponse;
                fromAmino(_: _18.MsgDeListNFTResponseAmino): _18.MsgDeListNFTResponse;
                toAmino(_: _18.MsgDeListNFTResponse): _18.MsgDeListNFTResponseAmino;
                fromAminoMsg(object: _18.MsgDeListNFTResponseAminoMsg): _18.MsgDeListNFTResponse;
                fromProtoMsg(message: _18.MsgDeListNFTResponseProtoMsg): _18.MsgDeListNFTResponse;
                toProto(message: _18.MsgDeListNFTResponse): Uint8Array;
                toProtoMsg(message: _18.MsgDeListNFTResponse): _18.MsgDeListNFTResponseProtoMsg;
            };
            MsgBuyNFT: {
                typeUrl: string;
                encode(message: _18.MsgBuyNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgBuyNFT;
                fromPartial(object: Partial<_18.MsgBuyNFT>): _18.MsgBuyNFT;
                fromAmino(object: _18.MsgBuyNFTAmino): _18.MsgBuyNFT;
                toAmino(message: _18.MsgBuyNFT): _18.MsgBuyNFTAmino;
                fromAminoMsg(object: _18.MsgBuyNFTAminoMsg): _18.MsgBuyNFT;
                toAminoMsg(message: _18.MsgBuyNFT): _18.MsgBuyNFTAminoMsg;
                fromProtoMsg(message: _18.MsgBuyNFTProtoMsg): _18.MsgBuyNFT;
                toProto(message: _18.MsgBuyNFT): Uint8Array;
                toProtoMsg(message: _18.MsgBuyNFT): _18.MsgBuyNFTProtoMsg;
            };
            MsgBuyNFTResponse: {
                typeUrl: string;
                encode(_: _18.MsgBuyNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgBuyNFTResponse;
                fromPartial(_: Partial<_18.MsgBuyNFTResponse>): _18.MsgBuyNFTResponse;
                fromAmino(_: _18.MsgBuyNFTResponseAmino): _18.MsgBuyNFTResponse;
                toAmino(_: _18.MsgBuyNFTResponse): _18.MsgBuyNFTResponseAmino;
                fromAminoMsg(object: _18.MsgBuyNFTResponseAminoMsg): _18.MsgBuyNFTResponse;
                fromProtoMsg(message: _18.MsgBuyNFTResponseProtoMsg): _18.MsgBuyNFTResponse;
                toProto(message: _18.MsgBuyNFTResponse): Uint8Array;
                toProtoMsg(message: _18.MsgBuyNFTResponse): _18.MsgBuyNFTResponseProtoMsg;
            };
            MsgCreateAuction: {
                typeUrl: string;
                encode(message: _18.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgCreateAuction;
                fromPartial(object: Partial<_18.MsgCreateAuction>): _18.MsgCreateAuction;
                fromAmino(object: _18.MsgCreateAuctionAmino): _18.MsgCreateAuction;
                toAmino(message: _18.MsgCreateAuction): _18.MsgCreateAuctionAmino;
                fromAminoMsg(object: _18.MsgCreateAuctionAminoMsg): _18.MsgCreateAuction;
                toAminoMsg(message: _18.MsgCreateAuction): _18.MsgCreateAuctionAminoMsg;
                fromProtoMsg(message: _18.MsgCreateAuctionProtoMsg): _18.MsgCreateAuction;
                toProto(message: _18.MsgCreateAuction): Uint8Array;
                toProtoMsg(message: _18.MsgCreateAuction): _18.MsgCreateAuctionProtoMsg;
            };
            MsgCreateAuctionResponse: {
                typeUrl: string;
                encode(message: _18.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgCreateAuctionResponse;
                fromPartial(object: Partial<_18.MsgCreateAuctionResponse>): _18.MsgCreateAuctionResponse;
                fromAmino(object: _18.MsgCreateAuctionResponseAmino): _18.MsgCreateAuctionResponse;
                toAmino(message: _18.MsgCreateAuctionResponse): _18.MsgCreateAuctionResponseAmino;
                fromAminoMsg(object: _18.MsgCreateAuctionResponseAminoMsg): _18.MsgCreateAuctionResponse;
                fromProtoMsg(message: _18.MsgCreateAuctionResponseProtoMsg): _18.MsgCreateAuctionResponse;
                toProto(message: _18.MsgCreateAuctionResponse): Uint8Array;
                toProtoMsg(message: _18.MsgCreateAuctionResponse): _18.MsgCreateAuctionResponseProtoMsg;
            };
            MsgCancelAuction: {
                typeUrl: string;
                encode(message: _18.MsgCancelAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgCancelAuction;
                fromPartial(object: Partial<_18.MsgCancelAuction>): _18.MsgCancelAuction;
                fromAmino(object: _18.MsgCancelAuctionAmino): _18.MsgCancelAuction;
                toAmino(message: _18.MsgCancelAuction): _18.MsgCancelAuctionAmino;
                fromAminoMsg(object: _18.MsgCancelAuctionAminoMsg): _18.MsgCancelAuction;
                toAminoMsg(message: _18.MsgCancelAuction): _18.MsgCancelAuctionAminoMsg;
                fromProtoMsg(message: _18.MsgCancelAuctionProtoMsg): _18.MsgCancelAuction;
                toProto(message: _18.MsgCancelAuction): Uint8Array;
                toProtoMsg(message: _18.MsgCancelAuction): _18.MsgCancelAuctionProtoMsg;
            };
            MsgCancelAuctionResponse: {
                typeUrl: string;
                encode(_: _18.MsgCancelAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgCancelAuctionResponse;
                fromPartial(_: Partial<_18.MsgCancelAuctionResponse>): _18.MsgCancelAuctionResponse;
                fromAmino(_: _18.MsgCancelAuctionResponseAmino): _18.MsgCancelAuctionResponse;
                toAmino(_: _18.MsgCancelAuctionResponse): _18.MsgCancelAuctionResponseAmino;
                fromAminoMsg(object: _18.MsgCancelAuctionResponseAminoMsg): _18.MsgCancelAuctionResponse;
                fromProtoMsg(message: _18.MsgCancelAuctionResponseProtoMsg): _18.MsgCancelAuctionResponse;
                toProto(message: _18.MsgCancelAuctionResponse): Uint8Array;
                toProtoMsg(message: _18.MsgCancelAuctionResponse): _18.MsgCancelAuctionResponseProtoMsg;
            };
            MsgPlaceBid: {
                typeUrl: string;
                encode(message: _18.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgPlaceBid;
                fromPartial(object: Partial<_18.MsgPlaceBid>): _18.MsgPlaceBid;
                fromAmino(object: _18.MsgPlaceBidAmino): _18.MsgPlaceBid;
                toAmino(message: _18.MsgPlaceBid): _18.MsgPlaceBidAmino;
                fromAminoMsg(object: _18.MsgPlaceBidAminoMsg): _18.MsgPlaceBid;
                toAminoMsg(message: _18.MsgPlaceBid): _18.MsgPlaceBidAminoMsg;
                fromProtoMsg(message: _18.MsgPlaceBidProtoMsg): _18.MsgPlaceBid;
                toProto(message: _18.MsgPlaceBid): Uint8Array;
                toProtoMsg(message: _18.MsgPlaceBid): _18.MsgPlaceBidProtoMsg;
            };
            MsgPlaceBidResponse: {
                typeUrl: string;
                encode(_: _18.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgPlaceBidResponse;
                fromPartial(_: Partial<_18.MsgPlaceBidResponse>): _18.MsgPlaceBidResponse;
                fromAmino(_: _18.MsgPlaceBidResponseAmino): _18.MsgPlaceBidResponse;
                toAmino(_: _18.MsgPlaceBidResponse): _18.MsgPlaceBidResponseAmino;
                fromAminoMsg(object: _18.MsgPlaceBidResponseAminoMsg): _18.MsgPlaceBidResponse;
                fromProtoMsg(message: _18.MsgPlaceBidResponseProtoMsg): _18.MsgPlaceBidResponse;
                toProto(message: _18.MsgPlaceBidResponse): Uint8Array;
                toProtoMsg(message: _18.MsgPlaceBidResponse): _18.MsgPlaceBidResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _18.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgUpdateParams;
                fromPartial(object: Partial<_18.MsgUpdateParams>): _18.MsgUpdateParams;
                fromAmino(object: _18.MsgUpdateParamsAmino): _18.MsgUpdateParams;
                toAmino(message: _18.MsgUpdateParams): _18.MsgUpdateParamsAmino;
                fromAminoMsg(object: _18.MsgUpdateParamsAminoMsg): _18.MsgUpdateParams;
                fromProtoMsg(message: _18.MsgUpdateParamsProtoMsg): _18.MsgUpdateParams;
                toProto(message: _18.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateParams): _18.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _18.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_18.MsgUpdateParamsResponse>): _18.MsgUpdateParamsResponse;
                fromAmino(_: _18.MsgUpdateParamsResponseAmino): _18.MsgUpdateParamsResponse;
                toAmino(_: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _18.MsgUpdateParamsResponseAminoMsg): _18.MsgUpdateParamsResponse;
                fromProtoMsg(message: _18.MsgUpdateParamsResponseProtoMsg): _18.MsgUpdateParamsResponse;
                toProto(message: _18.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _17.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryParamsRequest;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
                fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
                fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
                fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
                toProto(message: _17.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _17.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryParamsResponse;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
                fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
                fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
                fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
                toProto(message: _17.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
            };
            QueryListingsRequest: {
                typeUrl: string;
                encode(message: _17.QueryListingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingsRequest;
                fromPartial(object: Partial<_17.QueryListingsRequest>): _17.QueryListingsRequest;
                fromAmino(object: _17.QueryListingsRequestAmino): _17.QueryListingsRequest;
                toAmino(message: _17.QueryListingsRequest): _17.QueryListingsRequestAmino;
                fromAminoMsg(object: _17.QueryListingsRequestAminoMsg): _17.QueryListingsRequest;
                fromProtoMsg(message: _17.QueryListingsRequestProtoMsg): _17.QueryListingsRequest;
                toProto(message: _17.QueryListingsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryListingsRequest): _17.QueryListingsRequestProtoMsg;
            };
            QueryListingsResponse: {
                typeUrl: string;
                encode(message: _17.QueryListingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingsResponse;
                fromPartial(object: Partial<_17.QueryListingsResponse>): _17.QueryListingsResponse;
                fromAmino(object: _17.QueryListingsResponseAmino): _17.QueryListingsResponse;
                toAmino(message: _17.QueryListingsResponse): _17.QueryListingsResponseAmino;
                fromAminoMsg(object: _17.QueryListingsResponseAminoMsg): _17.QueryListingsResponse;
                fromProtoMsg(message: _17.QueryListingsResponseProtoMsg): _17.QueryListingsResponse;
                toProto(message: _17.QueryListingsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryListingsResponse): _17.QueryListingsResponseProtoMsg;
            };
            QueryListingRequest: {
                typeUrl: string;
                encode(message: _17.QueryListingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingRequest;
                fromPartial(object: Partial<_17.QueryListingRequest>): _17.QueryListingRequest;
                fromAmino(object: _17.QueryListingRequestAmino): _17.QueryListingRequest;
                toAmino(message: _17.QueryListingRequest): _17.QueryListingRequestAmino;
                fromAminoMsg(object: _17.QueryListingRequestAminoMsg): _17.QueryListingRequest;
                fromProtoMsg(message: _17.QueryListingRequestProtoMsg): _17.QueryListingRequest;
                toProto(message: _17.QueryListingRequest): Uint8Array;
                toProtoMsg(message: _17.QueryListingRequest): _17.QueryListingRequestProtoMsg;
            };
            QueryListingResponse: {
                typeUrl: string;
                encode(message: _17.QueryListingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingResponse;
                fromPartial(object: Partial<_17.QueryListingResponse>): _17.QueryListingResponse;
                fromAmino(object: _17.QueryListingResponseAmino): _17.QueryListingResponse;
                toAmino(message: _17.QueryListingResponse): _17.QueryListingResponseAmino;
                fromAminoMsg(object: _17.QueryListingResponseAminoMsg): _17.QueryListingResponse;
                fromProtoMsg(message: _17.QueryListingResponseProtoMsg): _17.QueryListingResponse;
                toProto(message: _17.QueryListingResponse): Uint8Array;
                toProtoMsg(message: _17.QueryListingResponse): _17.QueryListingResponseProtoMsg;
            };
            QueryListingsByOwnerRequest: {
                typeUrl: string;
                encode(message: _17.QueryListingsByOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingsByOwnerRequest;
                fromPartial(object: Partial<_17.QueryListingsByOwnerRequest>): _17.QueryListingsByOwnerRequest;
                fromAmino(object: _17.QueryListingsByOwnerRequestAmino): _17.QueryListingsByOwnerRequest;
                toAmino(message: _17.QueryListingsByOwnerRequest): _17.QueryListingsByOwnerRequestAmino;
                fromAminoMsg(object: _17.QueryListingsByOwnerRequestAminoMsg): _17.QueryListingsByOwnerRequest;
                fromProtoMsg(message: _17.QueryListingsByOwnerRequestProtoMsg): _17.QueryListingsByOwnerRequest;
                toProto(message: _17.QueryListingsByOwnerRequest): Uint8Array;
                toProtoMsg(message: _17.QueryListingsByOwnerRequest): _17.QueryListingsByOwnerRequestProtoMsg;
            };
            QueryListingsByOwnerResponse: {
                typeUrl: string;
                encode(message: _17.QueryListingsByOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingsByOwnerResponse;
                fromPartial(object: Partial<_17.QueryListingsByOwnerResponse>): _17.QueryListingsByOwnerResponse;
                fromAmino(object: _17.QueryListingsByOwnerResponseAmino): _17.QueryListingsByOwnerResponse;
                toAmino(message: _17.QueryListingsByOwnerResponse): _17.QueryListingsByOwnerResponseAmino;
                fromAminoMsg(object: _17.QueryListingsByOwnerResponseAminoMsg): _17.QueryListingsByOwnerResponse;
                fromProtoMsg(message: _17.QueryListingsByOwnerResponseProtoMsg): _17.QueryListingsByOwnerResponse;
                toProto(message: _17.QueryListingsByOwnerResponse): Uint8Array;
                toProtoMsg(message: _17.QueryListingsByOwnerResponse): _17.QueryListingsByOwnerResponseProtoMsg;
            };
            QueryListingByNFTIDRequest: {
                typeUrl: string;
                encode(message: _17.QueryListingByNFTIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingByNFTIDRequest;
                fromPartial(object: Partial<_17.QueryListingByNFTIDRequest>): _17.QueryListingByNFTIDRequest;
                fromAmino(object: _17.QueryListingByNFTIDRequestAmino): _17.QueryListingByNFTIDRequest;
                toAmino(message: _17.QueryListingByNFTIDRequest): _17.QueryListingByNFTIDRequestAmino;
                fromAminoMsg(object: _17.QueryListingByNFTIDRequestAminoMsg): _17.QueryListingByNFTIDRequest;
                fromProtoMsg(message: _17.QueryListingByNFTIDRequestProtoMsg): _17.QueryListingByNFTIDRequest;
                toProto(message: _17.QueryListingByNFTIDRequest): Uint8Array;
                toProtoMsg(message: _17.QueryListingByNFTIDRequest): _17.QueryListingByNFTIDRequestProtoMsg;
            };
            QueryListingsByPriceDenomRequest: {
                typeUrl: string;
                encode(message: _17.QueryListingsByPriceDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingsByPriceDenomRequest;
                fromPartial(object: Partial<_17.QueryListingsByPriceDenomRequest>): _17.QueryListingsByPriceDenomRequest;
                fromAmino(object: _17.QueryListingsByPriceDenomRequestAmino): _17.QueryListingsByPriceDenomRequest;
                toAmino(message: _17.QueryListingsByPriceDenomRequest): _17.QueryListingsByPriceDenomRequestAmino;
                fromAminoMsg(object: _17.QueryListingsByPriceDenomRequestAminoMsg): _17.QueryListingsByPriceDenomRequest;
                fromProtoMsg(message: _17.QueryListingsByPriceDenomRequestProtoMsg): _17.QueryListingsByPriceDenomRequest;
                toProto(message: _17.QueryListingsByPriceDenomRequest): Uint8Array;
                toProtoMsg(message: _17.QueryListingsByPriceDenomRequest): _17.QueryListingsByPriceDenomRequestProtoMsg;
            };
            QueryListingsByPriceDenomResponse: {
                typeUrl: string;
                encode(message: _17.QueryListingsByPriceDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryListingsByPriceDenomResponse;
                fromPartial(object: Partial<_17.QueryListingsByPriceDenomResponse>): _17.QueryListingsByPriceDenomResponse;
                fromAmino(object: _17.QueryListingsByPriceDenomResponseAmino): _17.QueryListingsByPriceDenomResponse;
                toAmino(message: _17.QueryListingsByPriceDenomResponse): _17.QueryListingsByPriceDenomResponseAmino;
                fromAminoMsg(object: _17.QueryListingsByPriceDenomResponseAminoMsg): _17.QueryListingsByPriceDenomResponse;
                fromProtoMsg(message: _17.QueryListingsByPriceDenomResponseProtoMsg): _17.QueryListingsByPriceDenomResponse;
                toProto(message: _17.QueryListingsByPriceDenomResponse): Uint8Array;
                toProtoMsg(message: _17.QueryListingsByPriceDenomResponse): _17.QueryListingsByPriceDenomResponseProtoMsg;
            };
            QueryAuctionsRequest: {
                typeUrl: string;
                encode(message: _17.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAuctionsRequest;
                fromPartial(object: Partial<_17.QueryAuctionsRequest>): _17.QueryAuctionsRequest;
                fromAmino(object: _17.QueryAuctionsRequestAmino): _17.QueryAuctionsRequest;
                toAmino(message: _17.QueryAuctionsRequest): _17.QueryAuctionsRequestAmino;
                fromAminoMsg(object: _17.QueryAuctionsRequestAminoMsg): _17.QueryAuctionsRequest;
                fromProtoMsg(message: _17.QueryAuctionsRequestProtoMsg): _17.QueryAuctionsRequest;
                toProto(message: _17.QueryAuctionsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAuctionsRequest): _17.QueryAuctionsRequestProtoMsg;
            };
            QueryAuctionsResponse: {
                typeUrl: string;
                encode(message: _17.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAuctionsResponse;
                fromPartial(object: Partial<_17.QueryAuctionsResponse>): _17.QueryAuctionsResponse;
                fromAmino(object: _17.QueryAuctionsResponseAmino): _17.QueryAuctionsResponse;
                toAmino(message: _17.QueryAuctionsResponse): _17.QueryAuctionsResponseAmino;
                fromAminoMsg(object: _17.QueryAuctionsResponseAminoMsg): _17.QueryAuctionsResponse;
                fromProtoMsg(message: _17.QueryAuctionsResponseProtoMsg): _17.QueryAuctionsResponse;
                toProto(message: _17.QueryAuctionsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAuctionsResponse): _17.QueryAuctionsResponseProtoMsg;
            };
            QueryAuctionRequest: {
                typeUrl: string;
                encode(message: _17.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAuctionRequest;
                fromPartial(object: Partial<_17.QueryAuctionRequest>): _17.QueryAuctionRequest;
                fromAmino(object: _17.QueryAuctionRequestAmino): _17.QueryAuctionRequest;
                toAmino(message: _17.QueryAuctionRequest): _17.QueryAuctionRequestAmino;
                fromAminoMsg(object: _17.QueryAuctionRequestAminoMsg): _17.QueryAuctionRequest;
                fromProtoMsg(message: _17.QueryAuctionRequestProtoMsg): _17.QueryAuctionRequest;
                toProto(message: _17.QueryAuctionRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAuctionRequest): _17.QueryAuctionRequestProtoMsg;
            };
            QueryAuctionResponse: {
                typeUrl: string;
                encode(message: _17.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAuctionResponse;
                fromPartial(object: Partial<_17.QueryAuctionResponse>): _17.QueryAuctionResponse;
                fromAmino(object: _17.QueryAuctionResponseAmino): _17.QueryAuctionResponse;
                toAmino(message: _17.QueryAuctionResponse): _17.QueryAuctionResponseAmino;
                fromAminoMsg(object: _17.QueryAuctionResponseAminoMsg): _17.QueryAuctionResponse;
                fromProtoMsg(message: _17.QueryAuctionResponseProtoMsg): _17.QueryAuctionResponse;
                toProto(message: _17.QueryAuctionResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAuctionResponse): _17.QueryAuctionResponseProtoMsg;
            };
            QueryAuctionsByOwnerRequest: {
                typeUrl: string;
                encode(message: _17.QueryAuctionsByOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAuctionsByOwnerRequest;
                fromPartial(object: Partial<_17.QueryAuctionsByOwnerRequest>): _17.QueryAuctionsByOwnerRequest;
                fromAmino(object: _17.QueryAuctionsByOwnerRequestAmino): _17.QueryAuctionsByOwnerRequest;
                toAmino(message: _17.QueryAuctionsByOwnerRequest): _17.QueryAuctionsByOwnerRequestAmino;
                fromAminoMsg(object: _17.QueryAuctionsByOwnerRequestAminoMsg): _17.QueryAuctionsByOwnerRequest;
                fromProtoMsg(message: _17.QueryAuctionsByOwnerRequestProtoMsg): _17.QueryAuctionsByOwnerRequest;
                toProto(message: _17.QueryAuctionsByOwnerRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAuctionsByOwnerRequest): _17.QueryAuctionsByOwnerRequestProtoMsg;
            };
            QueryAuctionByNFTIDRequest: {
                typeUrl: string;
                encode(message: _17.QueryAuctionByNFTIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAuctionByNFTIDRequest;
                fromPartial(object: Partial<_17.QueryAuctionByNFTIDRequest>): _17.QueryAuctionByNFTIDRequest;
                fromAmino(object: _17.QueryAuctionByNFTIDRequestAmino): _17.QueryAuctionByNFTIDRequest;
                toAmino(message: _17.QueryAuctionByNFTIDRequest): _17.QueryAuctionByNFTIDRequestAmino;
                fromAminoMsg(object: _17.QueryAuctionByNFTIDRequestAminoMsg): _17.QueryAuctionByNFTIDRequest;
                fromProtoMsg(message: _17.QueryAuctionByNFTIDRequestProtoMsg): _17.QueryAuctionByNFTIDRequest;
                toProto(message: _17.QueryAuctionByNFTIDRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAuctionByNFTIDRequest): _17.QueryAuctionByNFTIDRequestProtoMsg;
            };
            QueryAuctionsByPriceDenomRequest: {
                typeUrl: string;
                encode(message: _17.QueryAuctionsByPriceDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAuctionsByPriceDenomRequest;
                fromPartial(object: Partial<_17.QueryAuctionsByPriceDenomRequest>): _17.QueryAuctionsByPriceDenomRequest;
                fromAmino(object: _17.QueryAuctionsByPriceDenomRequestAmino): _17.QueryAuctionsByPriceDenomRequest;
                toAmino(message: _17.QueryAuctionsByPriceDenomRequest): _17.QueryAuctionsByPriceDenomRequestAmino;
                fromAminoMsg(object: _17.QueryAuctionsByPriceDenomRequestAminoMsg): _17.QueryAuctionsByPriceDenomRequest;
                fromProtoMsg(message: _17.QueryAuctionsByPriceDenomRequestProtoMsg): _17.QueryAuctionsByPriceDenomRequest;
                toProto(message: _17.QueryAuctionsByPriceDenomRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAuctionsByPriceDenomRequest): _17.QueryAuctionsByPriceDenomRequestProtoMsg;
            };
            QueryBidsRequest: {
                typeUrl: string;
                encode(message: _17.QueryBidsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBidsRequest;
                fromPartial(object: Partial<_17.QueryBidsRequest>): _17.QueryBidsRequest;
                fromAmino(object: _17.QueryBidsRequestAmino): _17.QueryBidsRequest;
                toAmino(message: _17.QueryBidsRequest): _17.QueryBidsRequestAmino;
                fromAminoMsg(object: _17.QueryBidsRequestAminoMsg): _17.QueryBidsRequest;
                fromProtoMsg(message: _17.QueryBidsRequestProtoMsg): _17.QueryBidsRequest;
                toProto(message: _17.QueryBidsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBidsRequest): _17.QueryBidsRequestProtoMsg;
            };
            QueryBidsResponse: {
                typeUrl: string;
                encode(message: _17.QueryBidsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBidsResponse;
                fromPartial(object: Partial<_17.QueryBidsResponse>): _17.QueryBidsResponse;
                fromAmino(object: _17.QueryBidsResponseAmino): _17.QueryBidsResponse;
                toAmino(message: _17.QueryBidsResponse): _17.QueryBidsResponseAmino;
                fromAminoMsg(object: _17.QueryBidsResponseAminoMsg): _17.QueryBidsResponse;
                fromProtoMsg(message: _17.QueryBidsResponseProtoMsg): _17.QueryBidsResponse;
                toProto(message: _17.QueryBidsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBidsResponse): _17.QueryBidsResponseProtoMsg;
            };
            QueryBidRequest: {
                typeUrl: string;
                encode(message: _17.QueryBidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBidRequest;
                fromPartial(object: Partial<_17.QueryBidRequest>): _17.QueryBidRequest;
                fromAmino(object: _17.QueryBidRequestAmino): _17.QueryBidRequest;
                toAmino(message: _17.QueryBidRequest): _17.QueryBidRequestAmino;
                fromAminoMsg(object: _17.QueryBidRequestAminoMsg): _17.QueryBidRequest;
                fromProtoMsg(message: _17.QueryBidRequestProtoMsg): _17.QueryBidRequest;
                toProto(message: _17.QueryBidRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBidRequest): _17.QueryBidRequestProtoMsg;
            };
            QueryBidResponse: {
                typeUrl: string;
                encode(message: _17.QueryBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBidResponse;
                fromPartial(object: Partial<_17.QueryBidResponse>): _17.QueryBidResponse;
                fromAmino(object: _17.QueryBidResponseAmino): _17.QueryBidResponse;
                toAmino(message: _17.QueryBidResponse): _17.QueryBidResponseAmino;
                fromAminoMsg(object: _17.QueryBidResponseAminoMsg): _17.QueryBidResponse;
                fromProtoMsg(message: _17.QueryBidResponseProtoMsg): _17.QueryBidResponse;
                toProto(message: _17.QueryBidResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBidResponse): _17.QueryBidResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Params;
                fromPartial(object: Partial<_16.Params>): _16.Params;
                fromAmino(object: _16.ParamsAmino): _16.Params;
                toAmino(message: _16.Params): _16.ParamsAmino;
                fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
                fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
                toProto(message: _16.Params): Uint8Array;
                toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
            };
            Distribution: {
                typeUrl: string;
                encode(message: _16.Distribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Distribution;
                fromPartial(object: Partial<_16.Distribution>): _16.Distribution;
                fromAmino(object: _16.DistributionAmino): _16.Distribution;
                toAmino(message: _16.Distribution): _16.DistributionAmino;
                fromAminoMsg(object: _16.DistributionAminoMsg): _16.Distribution;
                fromProtoMsg(message: _16.DistributionProtoMsg): _16.Distribution;
                toProto(message: _16.Distribution): Uint8Array;
                toProtoMsg(message: _16.Distribution): _16.DistributionProtoMsg;
            };
            Listing: {
                typeUrl: string;
                encode(message: _15.Listing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Listing;
                fromPartial(object: Partial<_15.Listing>): _15.Listing;
                fromAmino(object: _15.ListingAmino): _15.Listing;
                toAmino(message: _15.Listing): _15.ListingAmino;
                fromAminoMsg(object: _15.ListingAminoMsg): _15.Listing;
                fromProtoMsg(message: _15.ListingProtoMsg): _15.Listing;
                toProto(message: _15.Listing): Uint8Array;
                toProtoMsg(message: _15.Listing): _15.ListingProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _15.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.WeightedAddress;
                fromPartial(object: Partial<_15.WeightedAddress>): _15.WeightedAddress;
                fromAmino(object: _15.WeightedAddressAmino): _15.WeightedAddress;
                toAmino(message: _15.WeightedAddress): _15.WeightedAddressAmino;
                fromAminoMsg(object: _15.WeightedAddressAminoMsg): _15.WeightedAddress;
                fromProtoMsg(message: _15.WeightedAddressProtoMsg): _15.WeightedAddress;
                toProto(message: _15.WeightedAddress): Uint8Array;
                toProtoMsg(message: _15.WeightedAddress): _15.WeightedAddressProtoMsg;
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
            EventListNFT: {
                typeUrl: string;
                encode(message: _13.EventListNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventListNFT;
                fromPartial(object: Partial<_13.EventListNFT>): _13.EventListNFT;
                fromAmino(object: _13.EventListNFTAmino): _13.EventListNFT;
                toAmino(message: _13.EventListNFT): _13.EventListNFTAmino;
                fromAminoMsg(object: _13.EventListNFTAminoMsg): _13.EventListNFT;
                fromProtoMsg(message: _13.EventListNFTProtoMsg): _13.EventListNFT;
                toProto(message: _13.EventListNFT): Uint8Array;
                toProtoMsg(message: _13.EventListNFT): _13.EventListNFTProtoMsg;
            };
            EventEditListing: {
                typeUrl: string;
                encode(message: _13.EventEditListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventEditListing;
                fromPartial(object: Partial<_13.EventEditListing>): _13.EventEditListing;
                fromAmino(object: _13.EventEditListingAmino): _13.EventEditListing;
                toAmino(message: _13.EventEditListing): _13.EventEditListingAmino;
                fromAminoMsg(object: _13.EventEditListingAminoMsg): _13.EventEditListing;
                fromProtoMsg(message: _13.EventEditListingProtoMsg): _13.EventEditListing;
                toProto(message: _13.EventEditListing): Uint8Array;
                toProtoMsg(message: _13.EventEditListing): _13.EventEditListingProtoMsg;
            };
            EventDeListNFT: {
                typeUrl: string;
                encode(message: _13.EventDeListNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventDeListNFT;
                fromPartial(object: Partial<_13.EventDeListNFT>): _13.EventDeListNFT;
                fromAmino(object: _13.EventDeListNFTAmino): _13.EventDeListNFT;
                toAmino(message: _13.EventDeListNFT): _13.EventDeListNFTAmino;
                fromAminoMsg(object: _13.EventDeListNFTAminoMsg): _13.EventDeListNFT;
                fromProtoMsg(message: _13.EventDeListNFTProtoMsg): _13.EventDeListNFT;
                toProto(message: _13.EventDeListNFT): Uint8Array;
                toProtoMsg(message: _13.EventDeListNFT): _13.EventDeListNFTProtoMsg;
            };
            EventBuyNFT: {
                typeUrl: string;
                encode(message: _13.EventBuyNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventBuyNFT;
                fromPartial(object: Partial<_13.EventBuyNFT>): _13.EventBuyNFT;
                fromAmino(object: _13.EventBuyNFTAmino): _13.EventBuyNFT;
                toAmino(message: _13.EventBuyNFT): _13.EventBuyNFTAmino;
                fromAminoMsg(object: _13.EventBuyNFTAminoMsg): _13.EventBuyNFT;
                fromProtoMsg(message: _13.EventBuyNFTProtoMsg): _13.EventBuyNFT;
                toProto(message: _13.EventBuyNFT): Uint8Array;
                toProtoMsg(message: _13.EventBuyNFT): _13.EventBuyNFTProtoMsg;
            };
            EventCreateAuction: {
                typeUrl: string;
                encode(message: _13.EventCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventCreateAuction;
                fromPartial(object: Partial<_13.EventCreateAuction>): _13.EventCreateAuction;
                fromAmino(object: _13.EventCreateAuctionAmino): _13.EventCreateAuction;
                toAmino(message: _13.EventCreateAuction): _13.EventCreateAuctionAmino;
                fromAminoMsg(object: _13.EventCreateAuctionAminoMsg): _13.EventCreateAuction;
                fromProtoMsg(message: _13.EventCreateAuctionProtoMsg): _13.EventCreateAuction;
                toProto(message: _13.EventCreateAuction): Uint8Array;
                toProtoMsg(message: _13.EventCreateAuction): _13.EventCreateAuctionProtoMsg;
            };
            EventCancelAuction: {
                typeUrl: string;
                encode(message: _13.EventCancelAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventCancelAuction;
                fromPartial(object: Partial<_13.EventCancelAuction>): _13.EventCancelAuction;
                fromAmino(object: _13.EventCancelAuctionAmino): _13.EventCancelAuction;
                toAmino(message: _13.EventCancelAuction): _13.EventCancelAuctionAmino;
                fromAminoMsg(object: _13.EventCancelAuctionAminoMsg): _13.EventCancelAuction;
                fromProtoMsg(message: _13.EventCancelAuctionProtoMsg): _13.EventCancelAuction;
                toProto(message: _13.EventCancelAuction): Uint8Array;
                toProtoMsg(message: _13.EventCancelAuction): _13.EventCancelAuctionProtoMsg;
            };
            EventPlaceBid: {
                typeUrl: string;
                encode(message: _13.EventPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.EventPlaceBid;
                fromPartial(object: Partial<_13.EventPlaceBid>): _13.EventPlaceBid;
                fromAmino(object: _13.EventPlaceBidAmino): _13.EventPlaceBid;
                toAmino(message: _13.EventPlaceBid): _13.EventPlaceBidAmino;
                fromAminoMsg(object: _13.EventPlaceBidAminoMsg): _13.EventPlaceBid;
                fromProtoMsg(message: _13.EventPlaceBidProtoMsg): _13.EventPlaceBid;
                toProto(message: _13.EventPlaceBid): Uint8Array;
                toProtoMsg(message: _13.EventPlaceBid): _13.EventPlaceBidProtoMsg;
            };
            auctionStatusFromJSON(object: any): _12.AuctionStatus;
            auctionStatusToJSON(object: _12.AuctionStatus): string;
            AuctionStatus: typeof _12.AuctionStatus;
            AuctionStatusSDKType: typeof _12.AuctionStatus;
            AuctionStatusAmino: typeof _12.AuctionStatus;
            AuctionListing: {
                typeUrl: string;
                encode(message: _12.AuctionListing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.AuctionListing;
                fromPartial(object: Partial<_12.AuctionListing>): _12.AuctionListing;
                fromAmino(object: _12.AuctionListingAmino): _12.AuctionListing;
                toAmino(message: _12.AuctionListing): _12.AuctionListingAmino;
                fromAminoMsg(object: _12.AuctionListingAminoMsg): _12.AuctionListing;
                fromProtoMsg(message: _12.AuctionListingProtoMsg): _12.AuctionListing;
                toProto(message: _12.AuctionListing): Uint8Array;
                toProtoMsg(message: _12.AuctionListing): _12.AuctionListingProtoMsg;
            };
            Bid: {
                typeUrl: string;
                encode(message: _12.Bid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Bid;
                fromPartial(object: Partial<_12.Bid>): _12.Bid;
                fromAmino(object: _12.BidAmino): _12.Bid;
                toAmino(message: _12.Bid): _12.BidAmino;
                fromAminoMsg(object: _12.BidAminoMsg): _12.Bid;
                fromProtoMsg(message: _12.BidProtoMsg): _12.Bid;
                toProto(message: _12.Bid): Uint8Array;
                toProtoMsg(message: _12.Bid): _12.BidProtoMsg;
            };
        };
    }
    namespace onft {
        const v1beta1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                collection(request: _22.QueryCollectionRequest): Promise<_22.QueryCollectionResponse>;
                iBCCollection(request: _22.QueryIBCCollectionRequest): Promise<_22.QueryCollectionResponse>;
                denom(request: _22.QueryDenomRequest): Promise<_22.QueryDenomResponse>;
                iBCDenom(request: _22.QueryIBCDenomRequest): Promise<_22.QueryDenomResponse>;
                denoms(request: _22.QueryDenomsRequest): Promise<_22.QueryDenomsResponse>;
                oNFT(request: _22.QueryONFTRequest): Promise<_22.QueryONFTResponse>;
                iBCDenomONFT(request: _22.QueryIBCDenomONFTRequest): Promise<_22.QueryONFTResponse>;
                ownerONFTs(request: _22.QueryOwnerONFTsRequest): Promise<_22.QueryOwnerONFTsResponse>;
                ownerIBCDenomONFTs(request: _22.QueryOwnerIBCDenomONFTsRequest): Promise<_22.QueryOwnerONFTsResponse>;
                supply(request: _22.QuerySupplyRequest): Promise<_22.QuerySupplyResponse>;
                iBCDenomSupply(request: _22.QueryIBCDenomSupplyRequest): Promise<_22.QuerySupplyResponse>;
                params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _23.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDenom(value: _23.MsgUpdateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferDenom(value: _23.MsgTransferDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    purgeDenom(value: _23.MsgPurgeDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintONFT(value: _23.MsgMintONFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferONFT(value: _23.MsgTransferONFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnONFT(value: _23.MsgBurnONFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _23.MsgCreateDenom): {
                        typeUrl: string;
                        value: _23.MsgCreateDenom;
                    };
                    updateDenom(value: _23.MsgUpdateDenom): {
                        typeUrl: string;
                        value: _23.MsgUpdateDenom;
                    };
                    transferDenom(value: _23.MsgTransferDenom): {
                        typeUrl: string;
                        value: _23.MsgTransferDenom;
                    };
                    purgeDenom(value: _23.MsgPurgeDenom): {
                        typeUrl: string;
                        value: _23.MsgPurgeDenom;
                    };
                    mintONFT(value: _23.MsgMintONFT): {
                        typeUrl: string;
                        value: _23.MsgMintONFT;
                    };
                    transferONFT(value: _23.MsgTransferONFT): {
                        typeUrl: string;
                        value: _23.MsgTransferONFT;
                    };
                    burnONFT(value: _23.MsgBurnONFT): {
                        typeUrl: string;
                        value: _23.MsgBurnONFT;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _23.MsgCreateDenom;
                    };
                    updateDenom(value: any): {
                        typeUrl: string;
                        value: _23.MsgUpdateDenom;
                    };
                    transferDenom(value: any): {
                        typeUrl: string;
                        value: _23.MsgTransferDenom;
                    };
                    purgeDenom(value: any): {
                        typeUrl: string;
                        value: _23.MsgPurgeDenom;
                    };
                    mintONFT(value: any): {
                        typeUrl: string;
                        value: _23.MsgMintONFT;
                    };
                    transferONFT(value: any): {
                        typeUrl: string;
                        value: _23.MsgTransferONFT;
                    };
                    burnONFT(value: any): {
                        typeUrl: string;
                        value: _23.MsgBurnONFT;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createDenom(value: _23.MsgCreateDenom): {
                        typeUrl: string;
                        value: _23.MsgCreateDenom;
                    };
                    updateDenom(value: _23.MsgUpdateDenom): {
                        typeUrl: string;
                        value: _23.MsgUpdateDenom;
                    };
                    transferDenom(value: _23.MsgTransferDenom): {
                        typeUrl: string;
                        value: _23.MsgTransferDenom;
                    };
                    purgeDenom(value: _23.MsgPurgeDenom): {
                        typeUrl: string;
                        value: _23.MsgPurgeDenom;
                    };
                    mintONFT(value: _23.MsgMintONFT): {
                        typeUrl: string;
                        value: _23.MsgMintONFT;
                    };
                    transferONFT(value: _23.MsgTransferONFT): {
                        typeUrl: string;
                        value: _23.MsgTransferONFT;
                    };
                    burnONFT(value: _23.MsgBurnONFT): {
                        typeUrl: string;
                        value: _23.MsgBurnONFT;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/OmniFlix.onft.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _23.MsgCreateDenom) => _23.MsgCreateDenomAmino;
                    fromAmino: (object: _23.MsgCreateDenomAmino) => _23.MsgCreateDenom;
                };
                "/OmniFlix.onft.v1beta1.MsgUpdateDenom": {
                    aminoType: string;
                    toAmino: (message: _23.MsgUpdateDenom) => _23.MsgUpdateDenomAmino;
                    fromAmino: (object: _23.MsgUpdateDenomAmino) => _23.MsgUpdateDenom;
                };
                "/OmniFlix.onft.v1beta1.MsgTransferDenom": {
                    aminoType: string;
                    toAmino: (message: _23.MsgTransferDenom) => _23.MsgTransferDenomAmino;
                    fromAmino: (object: _23.MsgTransferDenomAmino) => _23.MsgTransferDenom;
                };
                "/OmniFlix.onft.v1beta1.MsgPurgeDenom": {
                    aminoType: string;
                    toAmino: (message: _23.MsgPurgeDenom) => _23.MsgPurgeDenomAmino;
                    fromAmino: (object: _23.MsgPurgeDenomAmino) => _23.MsgPurgeDenom;
                };
                "/OmniFlix.onft.v1beta1.MsgMintONFT": {
                    aminoType: string;
                    toAmino: (message: _23.MsgMintONFT) => _23.MsgMintONFTAmino;
                    fromAmino: (object: _23.MsgMintONFTAmino) => _23.MsgMintONFT;
                };
                "/OmniFlix.onft.v1beta1.MsgTransferONFT": {
                    aminoType: string;
                    toAmino: (message: _23.MsgTransferONFT) => _23.MsgTransferONFTAmino;
                    fromAmino: (object: _23.MsgTransferONFTAmino) => _23.MsgTransferONFT;
                };
                "/OmniFlix.onft.v1beta1.MsgBurnONFT": {
                    aminoType: string;
                    toAmino: (message: _23.MsgBurnONFT) => _23.MsgBurnONFTAmino;
                    fromAmino: (object: _23.MsgBurnONFTAmino) => _23.MsgBurnONFT;
                };
                "/OmniFlix.onft.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _23.MsgUpdateParams) => _23.MsgUpdateParamsAmino;
                    fromAmino: (object: _23.MsgUpdateParamsAmino) => _23.MsgUpdateParams;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _23.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgCreateDenom;
                fromPartial(object: Partial<_23.MsgCreateDenom>): _23.MsgCreateDenom;
                fromAmino(object: _23.MsgCreateDenomAmino): _23.MsgCreateDenom;
                toAmino(message: _23.MsgCreateDenom): _23.MsgCreateDenomAmino;
                fromAminoMsg(object: _23.MsgCreateDenomAminoMsg): _23.MsgCreateDenom;
                toAminoMsg(message: _23.MsgCreateDenom): _23.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _23.MsgCreateDenomProtoMsg): _23.MsgCreateDenom;
                toProto(message: _23.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _23.MsgCreateDenom): _23.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(_: _23.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgCreateDenomResponse;
                fromPartial(_: Partial<_23.MsgCreateDenomResponse>): _23.MsgCreateDenomResponse;
                fromAmino(_: _23.MsgCreateDenomResponseAmino): _23.MsgCreateDenomResponse;
                toAmino(_: _23.MsgCreateDenomResponse): _23.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _23.MsgCreateDenomResponseAminoMsg): _23.MsgCreateDenomResponse;
                fromProtoMsg(message: _23.MsgCreateDenomResponseProtoMsg): _23.MsgCreateDenomResponse;
                toProto(message: _23.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _23.MsgCreateDenomResponse): _23.MsgCreateDenomResponseProtoMsg;
            };
            MsgUpdateDenom: {
                typeUrl: string;
                encode(message: _23.MsgUpdateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgUpdateDenom;
                fromPartial(object: Partial<_23.MsgUpdateDenom>): _23.MsgUpdateDenom;
                fromAmino(object: _23.MsgUpdateDenomAmino): _23.MsgUpdateDenom;
                toAmino(message: _23.MsgUpdateDenom): _23.MsgUpdateDenomAmino;
                fromAminoMsg(object: _23.MsgUpdateDenomAminoMsg): _23.MsgUpdateDenom;
                toAminoMsg(message: _23.MsgUpdateDenom): _23.MsgUpdateDenomAminoMsg;
                fromProtoMsg(message: _23.MsgUpdateDenomProtoMsg): _23.MsgUpdateDenom;
                toProto(message: _23.MsgUpdateDenom): Uint8Array;
                toProtoMsg(message: _23.MsgUpdateDenom): _23.MsgUpdateDenomProtoMsg;
            };
            MsgUpdateDenomResponse: {
                typeUrl: string;
                encode(_: _23.MsgUpdateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgUpdateDenomResponse;
                fromPartial(_: Partial<_23.MsgUpdateDenomResponse>): _23.MsgUpdateDenomResponse;
                fromAmino(_: _23.MsgUpdateDenomResponseAmino): _23.MsgUpdateDenomResponse;
                toAmino(_: _23.MsgUpdateDenomResponse): _23.MsgUpdateDenomResponseAmino;
                fromAminoMsg(object: _23.MsgUpdateDenomResponseAminoMsg): _23.MsgUpdateDenomResponse;
                fromProtoMsg(message: _23.MsgUpdateDenomResponseProtoMsg): _23.MsgUpdateDenomResponse;
                toProto(message: _23.MsgUpdateDenomResponse): Uint8Array;
                toProtoMsg(message: _23.MsgUpdateDenomResponse): _23.MsgUpdateDenomResponseProtoMsg;
            };
            MsgPurgeDenom: {
                typeUrl: string;
                encode(message: _23.MsgPurgeDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgPurgeDenom;
                fromPartial(object: Partial<_23.MsgPurgeDenom>): _23.MsgPurgeDenom;
                fromAmino(object: _23.MsgPurgeDenomAmino): _23.MsgPurgeDenom;
                toAmino(message: _23.MsgPurgeDenom): _23.MsgPurgeDenomAmino;
                fromAminoMsg(object: _23.MsgPurgeDenomAminoMsg): _23.MsgPurgeDenom;
                toAminoMsg(message: _23.MsgPurgeDenom): _23.MsgPurgeDenomAminoMsg;
                fromProtoMsg(message: _23.MsgPurgeDenomProtoMsg): _23.MsgPurgeDenom;
                toProto(message: _23.MsgPurgeDenom): Uint8Array;
                toProtoMsg(message: _23.MsgPurgeDenom): _23.MsgPurgeDenomProtoMsg;
            };
            MsgPurgeDenomResponse: {
                typeUrl: string;
                encode(_: _23.MsgPurgeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgPurgeDenomResponse;
                fromPartial(_: Partial<_23.MsgPurgeDenomResponse>): _23.MsgPurgeDenomResponse;
                fromAmino(_: _23.MsgPurgeDenomResponseAmino): _23.MsgPurgeDenomResponse;
                toAmino(_: _23.MsgPurgeDenomResponse): _23.MsgPurgeDenomResponseAmino;
                fromAminoMsg(object: _23.MsgPurgeDenomResponseAminoMsg): _23.MsgPurgeDenomResponse;
                fromProtoMsg(message: _23.MsgPurgeDenomResponseProtoMsg): _23.MsgPurgeDenomResponse;
                toProto(message: _23.MsgPurgeDenomResponse): Uint8Array;
                toProtoMsg(message: _23.MsgPurgeDenomResponse): _23.MsgPurgeDenomResponseProtoMsg;
            };
            MsgTransferDenom: {
                typeUrl: string;
                encode(message: _23.MsgTransferDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgTransferDenom;
                fromPartial(object: Partial<_23.MsgTransferDenom>): _23.MsgTransferDenom;
                fromAmino(object: _23.MsgTransferDenomAmino): _23.MsgTransferDenom;
                toAmino(message: _23.MsgTransferDenom): _23.MsgTransferDenomAmino;
                fromAminoMsg(object: _23.MsgTransferDenomAminoMsg): _23.MsgTransferDenom;
                toAminoMsg(message: _23.MsgTransferDenom): _23.MsgTransferDenomAminoMsg;
                fromProtoMsg(message: _23.MsgTransferDenomProtoMsg): _23.MsgTransferDenom;
                toProto(message: _23.MsgTransferDenom): Uint8Array;
                toProtoMsg(message: _23.MsgTransferDenom): _23.MsgTransferDenomProtoMsg;
            };
            MsgTransferDenomResponse: {
                typeUrl: string;
                encode(_: _23.MsgTransferDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgTransferDenomResponse;
                fromPartial(_: Partial<_23.MsgTransferDenomResponse>): _23.MsgTransferDenomResponse;
                fromAmino(_: _23.MsgTransferDenomResponseAmino): _23.MsgTransferDenomResponse;
                toAmino(_: _23.MsgTransferDenomResponse): _23.MsgTransferDenomResponseAmino;
                fromAminoMsg(object: _23.MsgTransferDenomResponseAminoMsg): _23.MsgTransferDenomResponse;
                fromProtoMsg(message: _23.MsgTransferDenomResponseProtoMsg): _23.MsgTransferDenomResponse;
                toProto(message: _23.MsgTransferDenomResponse): Uint8Array;
                toProtoMsg(message: _23.MsgTransferDenomResponse): _23.MsgTransferDenomResponseProtoMsg;
            };
            MsgMintONFT: {
                typeUrl: string;
                encode(message: _23.MsgMintONFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgMintONFT;
                fromPartial(object: Partial<_23.MsgMintONFT>): _23.MsgMintONFT;
                fromAmino(object: _23.MsgMintONFTAmino): _23.MsgMintONFT;
                toAmino(message: _23.MsgMintONFT): _23.MsgMintONFTAmino;
                fromAminoMsg(object: _23.MsgMintONFTAminoMsg): _23.MsgMintONFT;
                toAminoMsg(message: _23.MsgMintONFT): _23.MsgMintONFTAminoMsg;
                fromProtoMsg(message: _23.MsgMintONFTProtoMsg): _23.MsgMintONFT;
                toProto(message: _23.MsgMintONFT): Uint8Array;
                toProtoMsg(message: _23.MsgMintONFT): _23.MsgMintONFTProtoMsg;
            };
            MsgMintONFTResponse: {
                typeUrl: string;
                encode(_: _23.MsgMintONFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgMintONFTResponse;
                fromPartial(_: Partial<_23.MsgMintONFTResponse>): _23.MsgMintONFTResponse;
                fromAmino(_: _23.MsgMintONFTResponseAmino): _23.MsgMintONFTResponse;
                toAmino(_: _23.MsgMintONFTResponse): _23.MsgMintONFTResponseAmino;
                fromAminoMsg(object: _23.MsgMintONFTResponseAminoMsg): _23.MsgMintONFTResponse;
                fromProtoMsg(message: _23.MsgMintONFTResponseProtoMsg): _23.MsgMintONFTResponse;
                toProto(message: _23.MsgMintONFTResponse): Uint8Array;
                toProtoMsg(message: _23.MsgMintONFTResponse): _23.MsgMintONFTResponseProtoMsg;
            };
            MsgTransferONFT: {
                typeUrl: string;
                encode(message: _23.MsgTransferONFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgTransferONFT;
                fromPartial(object: Partial<_23.MsgTransferONFT>): _23.MsgTransferONFT;
                fromAmino(object: _23.MsgTransferONFTAmino): _23.MsgTransferONFT;
                toAmino(message: _23.MsgTransferONFT): _23.MsgTransferONFTAmino;
                fromAminoMsg(object: _23.MsgTransferONFTAminoMsg): _23.MsgTransferONFT;
                toAminoMsg(message: _23.MsgTransferONFT): _23.MsgTransferONFTAminoMsg;
                fromProtoMsg(message: _23.MsgTransferONFTProtoMsg): _23.MsgTransferONFT;
                toProto(message: _23.MsgTransferONFT): Uint8Array;
                toProtoMsg(message: _23.MsgTransferONFT): _23.MsgTransferONFTProtoMsg;
            };
            MsgTransferONFTResponse: {
                typeUrl: string;
                encode(_: _23.MsgTransferONFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgTransferONFTResponse;
                fromPartial(_: Partial<_23.MsgTransferONFTResponse>): _23.MsgTransferONFTResponse;
                fromAmino(_: _23.MsgTransferONFTResponseAmino): _23.MsgTransferONFTResponse;
                toAmino(_: _23.MsgTransferONFTResponse): _23.MsgTransferONFTResponseAmino;
                fromAminoMsg(object: _23.MsgTransferONFTResponseAminoMsg): _23.MsgTransferONFTResponse;
                fromProtoMsg(message: _23.MsgTransferONFTResponseProtoMsg): _23.MsgTransferONFTResponse;
                toProto(message: _23.MsgTransferONFTResponse): Uint8Array;
                toProtoMsg(message: _23.MsgTransferONFTResponse): _23.MsgTransferONFTResponseProtoMsg;
            };
            MsgBurnONFT: {
                typeUrl: string;
                encode(message: _23.MsgBurnONFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgBurnONFT;
                fromPartial(object: Partial<_23.MsgBurnONFT>): _23.MsgBurnONFT;
                fromAmino(object: _23.MsgBurnONFTAmino): _23.MsgBurnONFT;
                toAmino(message: _23.MsgBurnONFT): _23.MsgBurnONFTAmino;
                fromAminoMsg(object: _23.MsgBurnONFTAminoMsg): _23.MsgBurnONFT;
                toAminoMsg(message: _23.MsgBurnONFT): _23.MsgBurnONFTAminoMsg;
                fromProtoMsg(message: _23.MsgBurnONFTProtoMsg): _23.MsgBurnONFT;
                toProto(message: _23.MsgBurnONFT): Uint8Array;
                toProtoMsg(message: _23.MsgBurnONFT): _23.MsgBurnONFTProtoMsg;
            };
            MsgBurnONFTResponse: {
                typeUrl: string;
                encode(_: _23.MsgBurnONFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgBurnONFTResponse;
                fromPartial(_: Partial<_23.MsgBurnONFTResponse>): _23.MsgBurnONFTResponse;
                fromAmino(_: _23.MsgBurnONFTResponseAmino): _23.MsgBurnONFTResponse;
                toAmino(_: _23.MsgBurnONFTResponse): _23.MsgBurnONFTResponseAmino;
                fromAminoMsg(object: _23.MsgBurnONFTResponseAminoMsg): _23.MsgBurnONFTResponse;
                fromProtoMsg(message: _23.MsgBurnONFTResponseProtoMsg): _23.MsgBurnONFTResponse;
                toProto(message: _23.MsgBurnONFTResponse): Uint8Array;
                toProtoMsg(message: _23.MsgBurnONFTResponse): _23.MsgBurnONFTResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _23.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgUpdateParams;
                fromPartial(object: Partial<_23.MsgUpdateParams>): _23.MsgUpdateParams;
                fromAmino(object: _23.MsgUpdateParamsAmino): _23.MsgUpdateParams;
                toAmino(message: _23.MsgUpdateParams): _23.MsgUpdateParamsAmino;
                fromAminoMsg(object: _23.MsgUpdateParamsAminoMsg): _23.MsgUpdateParams;
                fromProtoMsg(message: _23.MsgUpdateParamsProtoMsg): _23.MsgUpdateParams;
                toProto(message: _23.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _23.MsgUpdateParams): _23.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _23.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_23.MsgUpdateParamsResponse>): _23.MsgUpdateParamsResponse;
                fromAmino(_: _23.MsgUpdateParamsResponseAmino): _23.MsgUpdateParamsResponse;
                toAmino(_: _23.MsgUpdateParamsResponse): _23.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _23.MsgUpdateParamsResponseAminoMsg): _23.MsgUpdateParamsResponse;
                fromProtoMsg(message: _23.MsgUpdateParamsResponseProtoMsg): _23.MsgUpdateParamsResponse;
                toProto(message: _23.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _23.MsgUpdateParamsResponse): _23.MsgUpdateParamsResponseProtoMsg;
            };
            QueryCollectionRequest: {
                typeUrl: string;
                encode(message: _22.QueryCollectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryCollectionRequest;
                fromPartial(object: Partial<_22.QueryCollectionRequest>): _22.QueryCollectionRequest;
                fromAmino(object: _22.QueryCollectionRequestAmino): _22.QueryCollectionRequest;
                toAmino(message: _22.QueryCollectionRequest): _22.QueryCollectionRequestAmino;
                fromAminoMsg(object: _22.QueryCollectionRequestAminoMsg): _22.QueryCollectionRequest;
                fromProtoMsg(message: _22.QueryCollectionRequestProtoMsg): _22.QueryCollectionRequest;
                toProto(message: _22.QueryCollectionRequest): Uint8Array;
                toProtoMsg(message: _22.QueryCollectionRequest): _22.QueryCollectionRequestProtoMsg;
            };
            QueryCollectionResponse: {
                typeUrl: string;
                encode(message: _22.QueryCollectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryCollectionResponse;
                fromPartial(object: Partial<_22.QueryCollectionResponse>): _22.QueryCollectionResponse;
                fromAmino(object: _22.QueryCollectionResponseAmino): _22.QueryCollectionResponse;
                toAmino(message: _22.QueryCollectionResponse): _22.QueryCollectionResponseAmino;
                fromAminoMsg(object: _22.QueryCollectionResponseAminoMsg): _22.QueryCollectionResponse;
                fromProtoMsg(message: _22.QueryCollectionResponseProtoMsg): _22.QueryCollectionResponse;
                toProto(message: _22.QueryCollectionResponse): Uint8Array;
                toProtoMsg(message: _22.QueryCollectionResponse): _22.QueryCollectionResponseProtoMsg;
            };
            QueryIBCCollectionRequest: {
                typeUrl: string;
                encode(message: _22.QueryIBCCollectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryIBCCollectionRequest;
                fromPartial(object: Partial<_22.QueryIBCCollectionRequest>): _22.QueryIBCCollectionRequest;
                fromAmino(object: _22.QueryIBCCollectionRequestAmino): _22.QueryIBCCollectionRequest;
                toAmino(message: _22.QueryIBCCollectionRequest): _22.QueryIBCCollectionRequestAmino;
                fromAminoMsg(object: _22.QueryIBCCollectionRequestAminoMsg): _22.QueryIBCCollectionRequest;
                fromProtoMsg(message: _22.QueryIBCCollectionRequestProtoMsg): _22.QueryIBCCollectionRequest;
                toProto(message: _22.QueryIBCCollectionRequest): Uint8Array;
                toProtoMsg(message: _22.QueryIBCCollectionRequest): _22.QueryIBCCollectionRequestProtoMsg;
            };
            QueryDenomRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomRequest;
                fromPartial(object: Partial<_22.QueryDenomRequest>): _22.QueryDenomRequest;
                fromAmino(object: _22.QueryDenomRequestAmino): _22.QueryDenomRequest;
                toAmino(message: _22.QueryDenomRequest): _22.QueryDenomRequestAmino;
                fromAminoMsg(object: _22.QueryDenomRequestAminoMsg): _22.QueryDenomRequest;
                fromProtoMsg(message: _22.QueryDenomRequestProtoMsg): _22.QueryDenomRequest;
                toProto(message: _22.QueryDenomRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomRequest): _22.QueryDenomRequestProtoMsg;
            };
            QueryDenomResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomResponse;
                fromPartial(object: Partial<_22.QueryDenomResponse>): _22.QueryDenomResponse;
                fromAmino(object: _22.QueryDenomResponseAmino): _22.QueryDenomResponse;
                toAmino(message: _22.QueryDenomResponse): _22.QueryDenomResponseAmino;
                fromAminoMsg(object: _22.QueryDenomResponseAminoMsg): _22.QueryDenomResponse;
                fromProtoMsg(message: _22.QueryDenomResponseProtoMsg): _22.QueryDenomResponse;
                toProto(message: _22.QueryDenomResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomResponse): _22.QueryDenomResponseProtoMsg;
            };
            QueryIBCDenomRequest: {
                typeUrl: string;
                encode(message: _22.QueryIBCDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryIBCDenomRequest;
                fromPartial(object: Partial<_22.QueryIBCDenomRequest>): _22.QueryIBCDenomRequest;
                fromAmino(object: _22.QueryIBCDenomRequestAmino): _22.QueryIBCDenomRequest;
                toAmino(message: _22.QueryIBCDenomRequest): _22.QueryIBCDenomRequestAmino;
                fromAminoMsg(object: _22.QueryIBCDenomRequestAminoMsg): _22.QueryIBCDenomRequest;
                fromProtoMsg(message: _22.QueryIBCDenomRequestProtoMsg): _22.QueryIBCDenomRequest;
                toProto(message: _22.QueryIBCDenomRequest): Uint8Array;
                toProtoMsg(message: _22.QueryIBCDenomRequest): _22.QueryIBCDenomRequestProtoMsg;
            };
            QueryDenomsRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomsRequest;
                fromPartial(object: Partial<_22.QueryDenomsRequest>): _22.QueryDenomsRequest;
                fromAmino(object: _22.QueryDenomsRequestAmino): _22.QueryDenomsRequest;
                toAmino(message: _22.QueryDenomsRequest): _22.QueryDenomsRequestAmino;
                fromAminoMsg(object: _22.QueryDenomsRequestAminoMsg): _22.QueryDenomsRequest;
                fromProtoMsg(message: _22.QueryDenomsRequestProtoMsg): _22.QueryDenomsRequest;
                toProto(message: _22.QueryDenomsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomsRequest): _22.QueryDenomsRequestProtoMsg;
            };
            QueryDenomsResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryDenomsResponse;
                fromPartial(object: Partial<_22.QueryDenomsResponse>): _22.QueryDenomsResponse;
                fromAmino(object: _22.QueryDenomsResponseAmino): _22.QueryDenomsResponse;
                toAmino(message: _22.QueryDenomsResponse): _22.QueryDenomsResponseAmino;
                fromAminoMsg(object: _22.QueryDenomsResponseAminoMsg): _22.QueryDenomsResponse;
                fromProtoMsg(message: _22.QueryDenomsResponseProtoMsg): _22.QueryDenomsResponse;
                toProto(message: _22.QueryDenomsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomsResponse): _22.QueryDenomsResponseProtoMsg;
            };
            QueryONFTRequest: {
                typeUrl: string;
                encode(message: _22.QueryONFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryONFTRequest;
                fromPartial(object: Partial<_22.QueryONFTRequest>): _22.QueryONFTRequest;
                fromAmino(object: _22.QueryONFTRequestAmino): _22.QueryONFTRequest;
                toAmino(message: _22.QueryONFTRequest): _22.QueryONFTRequestAmino;
                fromAminoMsg(object: _22.QueryONFTRequestAminoMsg): _22.QueryONFTRequest;
                fromProtoMsg(message: _22.QueryONFTRequestProtoMsg): _22.QueryONFTRequest;
                toProto(message: _22.QueryONFTRequest): Uint8Array;
                toProtoMsg(message: _22.QueryONFTRequest): _22.QueryONFTRequestProtoMsg;
            };
            QueryONFTResponse: {
                typeUrl: string;
                encode(message: _22.QueryONFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryONFTResponse;
                fromPartial(object: Partial<_22.QueryONFTResponse>): _22.QueryONFTResponse;
                fromAmino(object: _22.QueryONFTResponseAmino): _22.QueryONFTResponse;
                toAmino(message: _22.QueryONFTResponse): _22.QueryONFTResponseAmino;
                fromAminoMsg(object: _22.QueryONFTResponseAminoMsg): _22.QueryONFTResponse;
                fromProtoMsg(message: _22.QueryONFTResponseProtoMsg): _22.QueryONFTResponse;
                toProto(message: _22.QueryONFTResponse): Uint8Array;
                toProtoMsg(message: _22.QueryONFTResponse): _22.QueryONFTResponseProtoMsg;
            };
            QueryIBCDenomONFTRequest: {
                typeUrl: string;
                encode(message: _22.QueryIBCDenomONFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryIBCDenomONFTRequest;
                fromPartial(object: Partial<_22.QueryIBCDenomONFTRequest>): _22.QueryIBCDenomONFTRequest;
                fromAmino(object: _22.QueryIBCDenomONFTRequestAmino): _22.QueryIBCDenomONFTRequest;
                toAmino(message: _22.QueryIBCDenomONFTRequest): _22.QueryIBCDenomONFTRequestAmino;
                fromAminoMsg(object: _22.QueryIBCDenomONFTRequestAminoMsg): _22.QueryIBCDenomONFTRequest;
                fromProtoMsg(message: _22.QueryIBCDenomONFTRequestProtoMsg): _22.QueryIBCDenomONFTRequest;
                toProto(message: _22.QueryIBCDenomONFTRequest): Uint8Array;
                toProtoMsg(message: _22.QueryIBCDenomONFTRequest): _22.QueryIBCDenomONFTRequestProtoMsg;
            };
            QueryOwnerONFTsRequest: {
                typeUrl: string;
                encode(message: _22.QueryOwnerONFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryOwnerONFTsRequest;
                fromPartial(object: Partial<_22.QueryOwnerONFTsRequest>): _22.QueryOwnerONFTsRequest;
                fromAmino(object: _22.QueryOwnerONFTsRequestAmino): _22.QueryOwnerONFTsRequest;
                toAmino(message: _22.QueryOwnerONFTsRequest): _22.QueryOwnerONFTsRequestAmino;
                fromAminoMsg(object: _22.QueryOwnerONFTsRequestAminoMsg): _22.QueryOwnerONFTsRequest;
                fromProtoMsg(message: _22.QueryOwnerONFTsRequestProtoMsg): _22.QueryOwnerONFTsRequest;
                toProto(message: _22.QueryOwnerONFTsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryOwnerONFTsRequest): _22.QueryOwnerONFTsRequestProtoMsg;
            };
            QueryOwnerONFTsResponse: {
                typeUrl: string;
                encode(message: _22.QueryOwnerONFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryOwnerONFTsResponse;
                fromPartial(object: Partial<_22.QueryOwnerONFTsResponse>): _22.QueryOwnerONFTsResponse;
                fromAmino(object: _22.QueryOwnerONFTsResponseAmino): _22.QueryOwnerONFTsResponse;
                toAmino(message: _22.QueryOwnerONFTsResponse): _22.QueryOwnerONFTsResponseAmino;
                fromAminoMsg(object: _22.QueryOwnerONFTsResponseAminoMsg): _22.QueryOwnerONFTsResponse;
                fromProtoMsg(message: _22.QueryOwnerONFTsResponseProtoMsg): _22.QueryOwnerONFTsResponse;
                toProto(message: _22.QueryOwnerONFTsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryOwnerONFTsResponse): _22.QueryOwnerONFTsResponseProtoMsg;
            };
            QueryOwnerIBCDenomONFTsRequest: {
                typeUrl: string;
                encode(message: _22.QueryOwnerIBCDenomONFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryOwnerIBCDenomONFTsRequest;
                fromPartial(object: Partial<_22.QueryOwnerIBCDenomONFTsRequest>): _22.QueryOwnerIBCDenomONFTsRequest;
                fromAmino(object: _22.QueryOwnerIBCDenomONFTsRequestAmino): _22.QueryOwnerIBCDenomONFTsRequest;
                toAmino(message: _22.QueryOwnerIBCDenomONFTsRequest): _22.QueryOwnerIBCDenomONFTsRequestAmino;
                fromAminoMsg(object: _22.QueryOwnerIBCDenomONFTsRequestAminoMsg): _22.QueryOwnerIBCDenomONFTsRequest;
                fromProtoMsg(message: _22.QueryOwnerIBCDenomONFTsRequestProtoMsg): _22.QueryOwnerIBCDenomONFTsRequest;
                toProto(message: _22.QueryOwnerIBCDenomONFTsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryOwnerIBCDenomONFTsRequest): _22.QueryOwnerIBCDenomONFTsRequestProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _22.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySupplyRequest;
                fromPartial(object: Partial<_22.QuerySupplyRequest>): _22.QuerySupplyRequest;
                fromAmino(object: _22.QuerySupplyRequestAmino): _22.QuerySupplyRequest;
                toAmino(message: _22.QuerySupplyRequest): _22.QuerySupplyRequestAmino;
                fromAminoMsg(object: _22.QuerySupplyRequestAminoMsg): _22.QuerySupplyRequest;
                fromProtoMsg(message: _22.QuerySupplyRequestProtoMsg): _22.QuerySupplyRequest;
                toProto(message: _22.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySupplyRequest): _22.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _22.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QuerySupplyResponse;
                fromPartial(object: Partial<_22.QuerySupplyResponse>): _22.QuerySupplyResponse;
                fromAmino(object: _22.QuerySupplyResponseAmino): _22.QuerySupplyResponse;
                toAmino(message: _22.QuerySupplyResponse): _22.QuerySupplyResponseAmino;
                fromAminoMsg(object: _22.QuerySupplyResponseAminoMsg): _22.QuerySupplyResponse;
                fromProtoMsg(message: _22.QuerySupplyResponseProtoMsg): _22.QuerySupplyResponse;
                toProto(message: _22.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySupplyResponse): _22.QuerySupplyResponseProtoMsg;
            };
            QueryIBCDenomSupplyRequest: {
                typeUrl: string;
                encode(message: _22.QueryIBCDenomSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryIBCDenomSupplyRequest;
                fromPartial(object: Partial<_22.QueryIBCDenomSupplyRequest>): _22.QueryIBCDenomSupplyRequest;
                fromAmino(object: _22.QueryIBCDenomSupplyRequestAmino): _22.QueryIBCDenomSupplyRequest;
                toAmino(message: _22.QueryIBCDenomSupplyRequest): _22.QueryIBCDenomSupplyRequestAmino;
                fromAminoMsg(object: _22.QueryIBCDenomSupplyRequestAminoMsg): _22.QueryIBCDenomSupplyRequest;
                fromProtoMsg(message: _22.QueryIBCDenomSupplyRequestProtoMsg): _22.QueryIBCDenomSupplyRequest;
                toProto(message: _22.QueryIBCDenomSupplyRequest): Uint8Array;
                toProtoMsg(message: _22.QueryIBCDenomSupplyRequest): _22.QueryIBCDenomSupplyRequestProtoMsg;
            };
            OwnerONFTCollection: {
                typeUrl: string;
                encode(message: _22.OwnerONFTCollection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.OwnerONFTCollection;
                fromPartial(object: Partial<_22.OwnerONFTCollection>): _22.OwnerONFTCollection;
                fromAmino(object: _22.OwnerONFTCollectionAmino): _22.OwnerONFTCollection;
                toAmino(message: _22.OwnerONFTCollection): _22.OwnerONFTCollectionAmino;
                fromAminoMsg(object: _22.OwnerONFTCollectionAminoMsg): _22.OwnerONFTCollection;
                fromProtoMsg(message: _22.OwnerONFTCollectionProtoMsg): _22.OwnerONFTCollection;
                toProto(message: _22.OwnerONFTCollection): Uint8Array;
                toProtoMsg(message: _22.OwnerONFTCollection): _22.OwnerONFTCollectionProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _22.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.QueryParamsRequest;
                fromPartial(_: Partial<_22.QueryParamsRequest>): _22.QueryParamsRequest;
                fromAmino(_: _22.QueryParamsRequestAmino): _22.QueryParamsRequest;
                toAmino(_: _22.QueryParamsRequest): _22.QueryParamsRequestAmino;
                fromAminoMsg(object: _22.QueryParamsRequestAminoMsg): _22.QueryParamsRequest;
                fromProtoMsg(message: _22.QueryParamsRequestProtoMsg): _22.QueryParamsRequest;
                toProto(message: _22.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryParamsRequest): _22.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _22.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.QueryParamsResponse;
                fromPartial(object: Partial<_22.QueryParamsResponse>): _22.QueryParamsResponse;
                fromAmino(object: _22.QueryParamsResponseAmino): _22.QueryParamsResponse;
                toAmino(message: _22.QueryParamsResponse): _22.QueryParamsResponseAmino;
                fromAminoMsg(object: _22.QueryParamsResponseAminoMsg): _22.QueryParamsResponse;
                fromProtoMsg(message: _22.QueryParamsResponseProtoMsg): _22.QueryParamsResponse;
                toProto(message: _22.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryParamsResponse): _22.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _21.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
                fromAmino(object: _21.ParamsAmino): _21.Params;
                toAmino(message: _21.Params): _21.ParamsAmino;
                fromAminoMsg(object: _21.ParamsAminoMsg): _21.Params;
                fromProtoMsg(message: _21.ParamsProtoMsg): _21.Params;
                toProto(message: _21.Params): Uint8Array;
                toProtoMsg(message: _21.Params): _21.ParamsProtoMsg;
            };
            Collection: {
                typeUrl: string;
                encode(message: _20.Collection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Collection;
                fromPartial(object: Partial<_20.Collection>): _20.Collection;
                fromAmino(object: _20.CollectionAmino): _20.Collection;
                toAmino(message: _20.Collection): _20.CollectionAmino;
                fromAminoMsg(object: _20.CollectionAminoMsg): _20.Collection;
                fromProtoMsg(message: _20.CollectionProtoMsg): _20.Collection;
                toProto(message: _20.Collection): Uint8Array;
                toProtoMsg(message: _20.Collection): _20.CollectionProtoMsg;
            };
            IDCollection: {
                typeUrl: string;
                encode(message: _20.IDCollection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.IDCollection;
                fromPartial(object: Partial<_20.IDCollection>): _20.IDCollection;
                fromAmino(object: _20.IDCollectionAmino): _20.IDCollection;
                toAmino(message: _20.IDCollection): _20.IDCollectionAmino;
                fromAminoMsg(object: _20.IDCollectionAminoMsg): _20.IDCollection;
                fromProtoMsg(message: _20.IDCollectionProtoMsg): _20.IDCollection;
                toProto(message: _20.IDCollection): Uint8Array;
                toProtoMsg(message: _20.IDCollection): _20.IDCollectionProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _20.Denom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Denom;
                fromPartial(object: Partial<_20.Denom>): _20.Denom;
                fromAmino(object: _20.DenomAmino): _20.Denom;
                toAmino(message: _20.Denom): _20.DenomAmino;
                fromAminoMsg(object: _20.DenomAminoMsg): _20.Denom;
                fromProtoMsg(message: _20.DenomProtoMsg): _20.Denom;
                toProto(message: _20.Denom): Uint8Array;
                toProtoMsg(message: _20.Denom): _20.DenomProtoMsg;
            };
            DenomMetadata: {
                typeUrl: string;
                encode(message: _20.DenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.DenomMetadata;
                fromPartial(object: Partial<_20.DenomMetadata>): _20.DenomMetadata;
                fromAmino(object: _20.DenomMetadataAmino): _20.DenomMetadata;
                toAmino(message: _20.DenomMetadata): _20.DenomMetadataAmino;
                fromAminoMsg(object: _20.DenomMetadataAminoMsg): _20.DenomMetadata;
                fromProtoMsg(message: _20.DenomMetadataProtoMsg): _20.DenomMetadata;
                toProto(message: _20.DenomMetadata): Uint8Array;
                toProtoMsg(message: _20.DenomMetadata): _20.DenomMetadataProtoMsg;
            };
            ONFT: {
                typeUrl: string;
                encode(message: _20.ONFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ONFT;
                fromPartial(object: Partial<_20.ONFT>): _20.ONFT;
                fromAmino(object: _20.ONFTAmino): _20.ONFT;
                toAmino(message: _20.ONFT): _20.ONFTAmino;
                fromAminoMsg(object: _20.ONFTAminoMsg): _20.ONFT;
                fromProtoMsg(message: _20.ONFTProtoMsg): _20.ONFT;
                toProto(message: _20.ONFT): Uint8Array;
                toProtoMsg(message: _20.ONFT): _20.ONFTProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _20.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Metadata;
                fromPartial(object: Partial<_20.Metadata>): _20.Metadata;
                fromAmino(object: _20.MetadataAmino): _20.Metadata;
                toAmino(message: _20.Metadata): _20.MetadataAmino;
                fromAminoMsg(object: _20.MetadataAminoMsg): _20.Metadata;
                fromProtoMsg(message: _20.MetadataProtoMsg): _20.Metadata;
                toProto(message: _20.Metadata): Uint8Array;
                toProtoMsg(message: _20.Metadata): _20.MetadataProtoMsg;
            };
            ONFTMetadata: {
                typeUrl: string;
                encode(message: _20.ONFTMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ONFTMetadata;
                fromPartial(object: Partial<_20.ONFTMetadata>): _20.ONFTMetadata;
                fromAmino(object: _20.ONFTMetadataAmino): _20.ONFTMetadata;
                toAmino(message: _20.ONFTMetadata): _20.ONFTMetadataAmino;
                fromAminoMsg(object: _20.ONFTMetadataAminoMsg): _20.ONFTMetadata;
                fromProtoMsg(message: _20.ONFTMetadataProtoMsg): _20.ONFTMetadata;
                toProto(message: _20.ONFTMetadata): Uint8Array;
                toProtoMsg(message: _20.ONFTMetadata): _20.ONFTMetadataProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _20.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Owner;
                fromPartial(object: Partial<_20.Owner>): _20.Owner;
                fromAmino(object: _20.OwnerAmino): _20.Owner;
                toAmino(message: _20.Owner): _20.OwnerAmino;
                fromAminoMsg(object: _20.OwnerAminoMsg): _20.Owner;
                fromProtoMsg(message: _20.OwnerProtoMsg): _20.Owner;
                toProto(message: _20.Owner): Uint8Array;
                toProtoMsg(message: _20.Owner): _20.OwnerProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _20.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.WeightedAddress;
                fromPartial(object: Partial<_20.WeightedAddress>): _20.WeightedAddress;
                fromAmino(object: _20.WeightedAddressAmino): _20.WeightedAddress;
                toAmino(message: _20.WeightedAddress): _20.WeightedAddressAmino;
                fromAminoMsg(object: _20.WeightedAddressAminoMsg): _20.WeightedAddress;
                fromProtoMsg(message: _20.WeightedAddressProtoMsg): _20.WeightedAddress;
                toProto(message: _20.WeightedAddress): Uint8Array;
                toProtoMsg(message: _20.WeightedAddress): _20.WeightedAddressProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
                fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
                toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
                fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
                fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
                toProto(message: _19.GenesisState): Uint8Array;
                toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            OmniFlix: {
                alloc: {
                    v1beta1: _201.MsgClientImpl;
                };
                globalfee: {
                    v1beta1: _202.MsgClientImpl;
                };
                itc: {
                    v1: _203.MsgClientImpl;
                };
                marketplace: {
                    v1beta1: _204.MsgClientImpl;
                };
                onft: {
                    v1beta1: _205.MsgClientImpl;
                };
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
            OmniFlix: {
                alloc: {
                    v1beta1: {
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                    };
                };
                globalfee: {
                    v1beta1: {
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                    };
                };
                itc: {
                    v1: {
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        campaigns(request: _10.QueryCampaignsRequest): Promise<_10.QueryCampaignsResponse>;
                        campaign(request: _10.QueryCampaignRequest): Promise<_10.QueryCampaignResponse>;
                        claims(request: _10.QueryClaimsRequest): Promise<_10.QueryClaimsResponse>;
                    };
                };
                marketplace: {
                    v1beta1: {
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        listings(request: _17.QueryListingsRequest): Promise<_17.QueryListingsResponse>;
                        listing(request: _17.QueryListingRequest): Promise<_17.QueryListingResponse>;
                        listingsByOwner(request: _17.QueryListingsByOwnerRequest): Promise<_17.QueryListingsByOwnerResponse>;
                        listingsByPriceDenom(request: _17.QueryListingsByPriceDenomRequest): Promise<_17.QueryListingsByPriceDenomResponse>;
                        listingByNftId(request: _17.QueryListingByNFTIDRequest): Promise<_17.QueryListingResponse>;
                        auctions(request: _17.QueryAuctionsRequest): Promise<_17.QueryAuctionsResponse>;
                        auction(request: _17.QueryAuctionRequest): Promise<_17.QueryAuctionResponse>;
                        auctionsByOwner(request: _17.QueryAuctionsByOwnerRequest): Promise<_17.QueryAuctionsResponse>;
                        auctionsByPriceDenom(request: _17.QueryAuctionsByPriceDenomRequest): Promise<_17.QueryAuctionsResponse>;
                        auctionByNftId(request: _17.QueryAuctionByNFTIDRequest): Promise<_17.QueryAuctionResponse>;
                        bids(request: _17.QueryBidsRequest): Promise<_17.QueryBidsResponse>;
                        bid(request: _17.QueryBidRequest): Promise<_17.QueryBidResponse>;
                    };
                };
                onft: {
                    v1beta1: {
                        collection(request: _22.QueryCollectionRequest): Promise<_22.QueryCollectionResponse>;
                        iBCCollection(request: _22.QueryIBCCollectionRequest): Promise<_22.QueryCollectionResponse>;
                        denom(request: _22.QueryDenomRequest): Promise<_22.QueryDenomResponse>;
                        iBCDenom(request: _22.QueryIBCDenomRequest): Promise<_22.QueryDenomResponse>;
                        denoms(request: _22.QueryDenomsRequest): Promise<_22.QueryDenomsResponse>;
                        oNFT(request: _22.QueryONFTRequest): Promise<_22.QueryONFTResponse>;
                        iBCDenomONFT(request: _22.QueryIBCDenomONFTRequest): Promise<_22.QueryONFTResponse>;
                        ownerONFTs(request: _22.QueryOwnerONFTsRequest): Promise<_22.QueryOwnerONFTsResponse>;
                        ownerIBCDenomONFTs(request: _22.QueryOwnerIBCDenomONFTsRequest): Promise<_22.QueryOwnerONFTsResponse>;
                        supply(request: _22.QuerySupplyRequest): Promise<_22.QuerySupplyResponse>;
                        iBCDenomSupply(request: _22.QueryIBCDenomSupplyRequest): Promise<_22.QuerySupplyResponse>;
                        params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
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
            OmniFlix: {
                alloc: {
                    v1beta1: _191.LCDQueryClient;
                };
                globalfee: {
                    v1beta1: _192.LCDQueryClient;
                };
                itc: {
                    v1: _193.LCDQueryClient;
                };
                marketplace: {
                    v1beta1: _194.LCDQueryClient;
                };
                onft: {
                    v1beta1: _195.LCDQueryClient;
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
