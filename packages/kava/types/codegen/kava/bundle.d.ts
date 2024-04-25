import * as _0 from "./auction/v1beta1/auction";
import * as _1 from "./auction/v1beta1/genesis";
import * as _2 from "./auction/v1beta1/query";
import * as _3 from "./auction/v1beta1/tx";
import * as _4 from "./bep3/v1beta1/bep3";
import * as _5 from "./bep3/v1beta1/genesis";
import * as _6 from "./bep3/v1beta1/query";
import * as _7 from "./bep3/v1beta1/tx";
import * as _8 from "./cdp/v1beta1/cdp";
import * as _9 from "./cdp/v1beta1/genesis";
import * as _10 from "./cdp/v1beta1/query";
import * as _11 from "./cdp/v1beta1/tx";
import * as _12 from "./committee/v1beta1/committee";
import * as _13 from "./committee/v1beta1/genesis";
import * as _14 from "./committee/v1beta1/permissions";
import * as _15 from "./committee/v1beta1/proposal";
import * as _16 from "./committee/v1beta1/query";
import * as _17 from "./committee/v1beta1/tx";
import * as _18 from "./community/v1beta1/genesis";
import * as _19 from "./community/v1beta1/params";
import * as _20 from "./community/v1beta1/proposal";
import * as _21 from "./community/v1beta1/query";
import * as _22 from "./community/v1beta1/staking";
import * as _23 from "./community/v1beta1/tx";
import * as _24 from "./earn/v1beta1/genesis";
import * as _25 from "./earn/v1beta1/params";
import * as _26 from "./earn/v1beta1/proposal";
import * as _27 from "./earn/v1beta1/query";
import * as _28 from "./earn/v1beta1/strategy";
import * as _29 from "./earn/v1beta1/tx";
import * as _30 from "./earn/v1beta1/vault";
import * as _31 from "./evmutil/v1beta1/conversion_pair";
import * as _32 from "./evmutil/v1beta1/genesis";
import * as _33 from "./evmutil/v1beta1/query";
import * as _34 from "./evmutil/v1beta1/tx";
import * as _35 from "./hard/v1beta1/genesis";
import * as _36 from "./hard/v1beta1/hard";
import * as _37 from "./hard/v1beta1/query";
import * as _38 from "./hard/v1beta1/tx";
import * as _39 from "./incentive/v1beta1/apy";
import * as _40 from "./incentive/v1beta1/claims";
import * as _41 from "./incentive/v1beta1/genesis";
import * as _42 from "./incentive/v1beta1/params";
import * as _43 from "./incentive/v1beta1/query";
import * as _44 from "./incentive/v1beta1/tx";
import * as _45 from "./issuance/v1beta1/genesis";
import * as _46 from "./issuance/v1beta1/query";
import * as _47 from "./issuance/v1beta1/tx";
import * as _48 from "./kavadist/v1beta1/genesis";
import * as _49 from "./kavadist/v1beta1/params";
import * as _50 from "./kavadist/v1beta1/proposal";
import * as _51 from "./kavadist/v1beta1/query";
import * as _52 from "./liquid/v1beta1/query";
import * as _53 from "./liquid/v1beta1/tx";
import * as _54 from "./pricefeed/v1beta1/genesis";
import * as _55 from "./pricefeed/v1beta1/query";
import * as _56 from "./pricefeed/v1beta1/store";
import * as _57 from "./pricefeed/v1beta1/tx";
import * as _58 from "./router/v1beta1/tx";
import * as _59 from "./savings/v1beta1/genesis";
import * as _60 from "./savings/v1beta1/query";
import * as _61 from "./savings/v1beta1/store";
import * as _62 from "./savings/v1beta1/tx";
import * as _63 from "./swap/v1beta1/genesis";
import * as _64 from "./swap/v1beta1/query";
import * as _65 from "./swap/v1beta1/swap";
import * as _66 from "./swap/v1beta1/tx";
import * as _67 from "./validatorvesting/v1beta1/query";
import * as _243 from "./auction/v1beta1/query.lcd";
import * as _244 from "./bep3/v1beta1/query.lcd";
import * as _245 from "./cdp/v1beta1/query.lcd";
import * as _246 from "./committee/v1beta1/query.lcd";
import * as _247 from "./community/v1beta1/query.lcd";
import * as _248 from "./earn/v1beta1/query.lcd";
import * as _249 from "./evmutil/v1beta1/query.lcd";
import * as _250 from "./hard/v1beta1/query.lcd";
import * as _251 from "./incentive/v1beta1/query.lcd";
import * as _252 from "./issuance/v1beta1/query.lcd";
import * as _253 from "./kavadist/v1beta1/query.lcd";
import * as _254 from "./liquid/v1beta1/query.lcd";
import * as _255 from "./pricefeed/v1beta1/query.lcd";
import * as _256 from "./savings/v1beta1/query.lcd";
import * as _257 from "./swap/v1beta1/query.lcd";
import * as _258 from "./validatorvesting/v1beta1/query.lcd";
import * as _259 from "./auction/v1beta1/query.rpc.Query";
import * as _260 from "./bep3/v1beta1/query.rpc.Query";
import * as _261 from "./cdp/v1beta1/query.rpc.Query";
import * as _262 from "./committee/v1beta1/query.rpc.Query";
import * as _263 from "./community/v1beta1/query.rpc.Query";
import * as _264 from "./earn/v1beta1/query.rpc.Query";
import * as _265 from "./evmutil/v1beta1/query.rpc.Query";
import * as _266 from "./hard/v1beta1/query.rpc.Query";
import * as _267 from "./incentive/v1beta1/query.rpc.Query";
import * as _268 from "./issuance/v1beta1/query.rpc.Query";
import * as _269 from "./kavadist/v1beta1/query.rpc.Query";
import * as _270 from "./liquid/v1beta1/query.rpc.Query";
import * as _271 from "./pricefeed/v1beta1/query.rpc.Query";
import * as _272 from "./savings/v1beta1/query.rpc.Query";
import * as _273 from "./swap/v1beta1/query.rpc.Query";
import * as _274 from "./validatorvesting/v1beta1/query.rpc.Query";
import * as _275 from "./auction/v1beta1/tx.rpc.msg";
import * as _276 from "./bep3/v1beta1/tx.rpc.msg";
import * as _277 from "./cdp/v1beta1/tx.rpc.msg";
import * as _278 from "./committee/v1beta1/tx.rpc.msg";
import * as _279 from "./community/v1beta1/tx.rpc.msg";
import * as _280 from "./earn/v1beta1/tx.rpc.msg";
import * as _281 from "./evmutil/v1beta1/tx.rpc.msg";
import * as _282 from "./hard/v1beta1/tx.rpc.msg";
import * as _283 from "./incentive/v1beta1/tx.rpc.msg";
import * as _284 from "./issuance/v1beta1/tx.rpc.msg";
import * as _285 from "./liquid/v1beta1/tx.rpc.msg";
import * as _286 from "./pricefeed/v1beta1/tx.rpc.msg";
import * as _287 from "./router/v1beta1/tx.rpc.msg";
import * as _288 from "./savings/v1beta1/tx.rpc.msg";
import * as _289 from "./swap/v1beta1/tx.rpc.msg";
export declare namespace kava {
    namespace auction {
        const v1beta1: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                auction(request: _2.QueryAuctionRequest): Promise<_2.QueryAuctionResponse>;
                auctions(request: _2.QueryAuctionsRequest): Promise<_2.QueryAuctionsResponse>;
                nextAuctionID(request?: _2.QueryNextAuctionIDRequest): Promise<_2.QueryNextAuctionIDResponse>;
            };
            LCDQueryClient: typeof _243.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeBid(value: _3.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeBid(value: _3.MsgPlaceBid): {
                        typeUrl: string;
                        value: _3.MsgPlaceBid;
                    };
                };
                fromJSON: {
                    placeBid(value: any): {
                        typeUrl: string;
                        value: _3.MsgPlaceBid;
                    };
                };
                fromPartial: {
                    placeBid(value: _3.MsgPlaceBid): {
                        typeUrl: string;
                        value: _3.MsgPlaceBid;
                    };
                };
            };
            AminoConverter: {
                "/kava.auction.v1beta1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: (message: _3.MsgPlaceBid) => _3.MsgPlaceBidAmino;
                    fromAmino: (object: _3.MsgPlaceBidAmino) => _3.MsgPlaceBid;
                };
            };
            MsgPlaceBid: {
                typeUrl: string;
                encode(message: _3.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgPlaceBid;
                fromPartial(object: Partial<_3.MsgPlaceBid>): _3.MsgPlaceBid;
                fromAmino(object: _3.MsgPlaceBidAmino): _3.MsgPlaceBid;
                toAmino(message: _3.MsgPlaceBid): _3.MsgPlaceBidAmino;
                fromAminoMsg(object: _3.MsgPlaceBidAminoMsg): _3.MsgPlaceBid;
                fromProtoMsg(message: _3.MsgPlaceBidProtoMsg): _3.MsgPlaceBid;
                toProto(message: _3.MsgPlaceBid): Uint8Array;
                toProtoMsg(message: _3.MsgPlaceBid): _3.MsgPlaceBidProtoMsg;
            };
            MsgPlaceBidResponse: {
                typeUrl: string;
                encode(_: _3.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgPlaceBidResponse;
                fromPartial(_: Partial<_3.MsgPlaceBidResponse>): _3.MsgPlaceBidResponse;
                fromAmino(_: _3.MsgPlaceBidResponseAmino): _3.MsgPlaceBidResponse;
                toAmino(_: _3.MsgPlaceBidResponse): _3.MsgPlaceBidResponseAmino;
                fromAminoMsg(object: _3.MsgPlaceBidResponseAminoMsg): _3.MsgPlaceBidResponse;
                fromProtoMsg(message: _3.MsgPlaceBidResponseProtoMsg): _3.MsgPlaceBidResponse;
                toProto(message: _3.MsgPlaceBidResponse): Uint8Array;
                toProtoMsg(message: _3.MsgPlaceBidResponse): _3.MsgPlaceBidResponseProtoMsg;
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
            QueryAuctionRequest: {
                typeUrl: string;
                encode(message: _2.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAuctionRequest;
                fromPartial(object: Partial<_2.QueryAuctionRequest>): _2.QueryAuctionRequest;
                fromAmino(object: _2.QueryAuctionRequestAmino): _2.QueryAuctionRequest;
                toAmino(message: _2.QueryAuctionRequest): _2.QueryAuctionRequestAmino;
                fromAminoMsg(object: _2.QueryAuctionRequestAminoMsg): _2.QueryAuctionRequest;
                fromProtoMsg(message: _2.QueryAuctionRequestProtoMsg): _2.QueryAuctionRequest;
                toProto(message: _2.QueryAuctionRequest): Uint8Array;
                toProtoMsg(message: _2.QueryAuctionRequest): _2.QueryAuctionRequestProtoMsg;
            };
            QueryAuctionResponse: {
                typeUrl: string;
                encode(message: _2.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAuctionResponse;
                fromPartial(object: Partial<_2.QueryAuctionResponse>): _2.QueryAuctionResponse;
                fromAmino(object: _2.QueryAuctionResponseAmino): _2.QueryAuctionResponse;
                toAmino(message: _2.QueryAuctionResponse): _2.QueryAuctionResponseAmino;
                fromAminoMsg(object: _2.QueryAuctionResponseAminoMsg): _2.QueryAuctionResponse;
                fromProtoMsg(message: _2.QueryAuctionResponseProtoMsg): _2.QueryAuctionResponse;
                toProto(message: _2.QueryAuctionResponse): Uint8Array;
                toProtoMsg(message: _2.QueryAuctionResponse): _2.QueryAuctionResponseProtoMsg;
            };
            QueryAuctionsRequest: {
                typeUrl: string;
                encode(message: _2.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAuctionsRequest;
                fromPartial(object: Partial<_2.QueryAuctionsRequest>): _2.QueryAuctionsRequest;
                fromAmino(object: _2.QueryAuctionsRequestAmino): _2.QueryAuctionsRequest;
                toAmino(message: _2.QueryAuctionsRequest): _2.QueryAuctionsRequestAmino;
                fromAminoMsg(object: _2.QueryAuctionsRequestAminoMsg): _2.QueryAuctionsRequest;
                fromProtoMsg(message: _2.QueryAuctionsRequestProtoMsg): _2.QueryAuctionsRequest;
                toProto(message: _2.QueryAuctionsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryAuctionsRequest): _2.QueryAuctionsRequestProtoMsg;
            };
            QueryAuctionsResponse: {
                typeUrl: string;
                encode(message: _2.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAuctionsResponse;
                fromPartial(object: Partial<_2.QueryAuctionsResponse>): _2.QueryAuctionsResponse;
                fromAmino(object: _2.QueryAuctionsResponseAmino): _2.QueryAuctionsResponse;
                toAmino(message: _2.QueryAuctionsResponse): _2.QueryAuctionsResponseAmino;
                fromAminoMsg(object: _2.QueryAuctionsResponseAminoMsg): _2.QueryAuctionsResponse;
                fromProtoMsg(message: _2.QueryAuctionsResponseProtoMsg): _2.QueryAuctionsResponse;
                toProto(message: _2.QueryAuctionsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryAuctionsResponse): _2.QueryAuctionsResponseProtoMsg;
            };
            QueryNextAuctionIDRequest: {
                typeUrl: string;
                encode(_: _2.QueryNextAuctionIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryNextAuctionIDRequest;
                fromPartial(_: Partial<_2.QueryNextAuctionIDRequest>): _2.QueryNextAuctionIDRequest;
                fromAmino(_: _2.QueryNextAuctionIDRequestAmino): _2.QueryNextAuctionIDRequest;
                toAmino(_: _2.QueryNextAuctionIDRequest): _2.QueryNextAuctionIDRequestAmino;
                fromAminoMsg(object: _2.QueryNextAuctionIDRequestAminoMsg): _2.QueryNextAuctionIDRequest;
                fromProtoMsg(message: _2.QueryNextAuctionIDRequestProtoMsg): _2.QueryNextAuctionIDRequest;
                toProto(message: _2.QueryNextAuctionIDRequest): Uint8Array;
                toProtoMsg(message: _2.QueryNextAuctionIDRequest): _2.QueryNextAuctionIDRequestProtoMsg;
            };
            QueryNextAuctionIDResponse: {
                typeUrl: string;
                encode(message: _2.QueryNextAuctionIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryNextAuctionIDResponse;
                fromPartial(object: Partial<_2.QueryNextAuctionIDResponse>): _2.QueryNextAuctionIDResponse;
                fromAmino(object: _2.QueryNextAuctionIDResponseAmino): _2.QueryNextAuctionIDResponse;
                toAmino(message: _2.QueryNextAuctionIDResponse): _2.QueryNextAuctionIDResponseAmino;
                fromAminoMsg(object: _2.QueryNextAuctionIDResponseAminoMsg): _2.QueryNextAuctionIDResponse;
                fromProtoMsg(message: _2.QueryNextAuctionIDResponseProtoMsg): _2.QueryNextAuctionIDResponse;
                toProto(message: _2.QueryNextAuctionIDResponse): Uint8Array;
                toProtoMsg(message: _2.QueryNextAuctionIDResponse): _2.QueryNextAuctionIDResponseProtoMsg;
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
            GenesisAuction_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            GenesisAuction_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            GenesisAuction_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            BaseAuction: {
                typeUrl: string;
                encode(message: _0.BaseAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.BaseAuction;
                fromPartial(object: Partial<_0.BaseAuction>): _0.BaseAuction;
                fromAmino(object: _0.BaseAuctionAmino): _0.BaseAuction;
                toAmino(message: _0.BaseAuction): _0.BaseAuctionAmino;
                fromAminoMsg(object: _0.BaseAuctionAminoMsg): _0.BaseAuction;
                fromProtoMsg(message: _0.BaseAuctionProtoMsg): _0.BaseAuction;
                toProto(message: _0.BaseAuction): Uint8Array;
                toProtoMsg(message: _0.BaseAuction): _0.BaseAuctionProtoMsg;
            };
            SurplusAuction: {
                typeUrl: string;
                encode(message: _0.SurplusAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.SurplusAuction;
                fromPartial(object: Partial<_0.SurplusAuction>): _0.SurplusAuction;
                fromAmino(object: _0.SurplusAuctionAmino): _0.SurplusAuction;
                toAmino(message: _0.SurplusAuction): _0.SurplusAuctionAmino;
                fromAminoMsg(object: _0.SurplusAuctionAminoMsg): _0.SurplusAuction;
                fromProtoMsg(message: _0.SurplusAuctionProtoMsg): _0.SurplusAuction;
                toProto(message: _0.SurplusAuction): Uint8Array;
                toProtoMsg(message: _0.SurplusAuction): _0.SurplusAuctionProtoMsg;
            };
            DebtAuction: {
                typeUrl: string;
                encode(message: _0.DebtAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.DebtAuction;
                fromPartial(object: Partial<_0.DebtAuction>): _0.DebtAuction;
                fromAmino(object: _0.DebtAuctionAmino): _0.DebtAuction;
                toAmino(message: _0.DebtAuction): _0.DebtAuctionAmino;
                fromAminoMsg(object: _0.DebtAuctionAminoMsg): _0.DebtAuction;
                fromProtoMsg(message: _0.DebtAuctionProtoMsg): _0.DebtAuction;
                toProto(message: _0.DebtAuction): Uint8Array;
                toProtoMsg(message: _0.DebtAuction): _0.DebtAuctionProtoMsg;
            };
            CollateralAuction: {
                typeUrl: string;
                encode(message: _0.CollateralAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.CollateralAuction;
                fromPartial(object: Partial<_0.CollateralAuction>): _0.CollateralAuction;
                fromAmino(object: _0.CollateralAuctionAmino): _0.CollateralAuction;
                toAmino(message: _0.CollateralAuction): _0.CollateralAuctionAmino;
                fromAminoMsg(object: _0.CollateralAuctionAminoMsg): _0.CollateralAuction;
                fromProtoMsg(message: _0.CollateralAuctionProtoMsg): _0.CollateralAuction;
                toProto(message: _0.CollateralAuction): Uint8Array;
                toProtoMsg(message: _0.CollateralAuction): _0.CollateralAuctionProtoMsg;
            };
            WeightedAddresses: {
                typeUrl: string;
                encode(message: _0.WeightedAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.WeightedAddresses;
                fromPartial(object: Partial<_0.WeightedAddresses>): _0.WeightedAddresses;
                fromAmino(object: _0.WeightedAddressesAmino): _0.WeightedAddresses;
                toAmino(message: _0.WeightedAddresses): _0.WeightedAddressesAmino;
                fromAminoMsg(object: _0.WeightedAddressesAminoMsg): _0.WeightedAddresses;
                fromProtoMsg(message: _0.WeightedAddressesProtoMsg): _0.WeightedAddresses;
                toProto(message: _0.WeightedAddresses): Uint8Array;
                toProtoMsg(message: _0.WeightedAddresses): _0.WeightedAddressesProtoMsg;
            };
        };
    }
    namespace bep3 {
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                assetSupply(request: _6.QueryAssetSupplyRequest): Promise<_6.QueryAssetSupplyResponse>;
                assetSupplies(request?: _6.QueryAssetSuppliesRequest): Promise<_6.QueryAssetSuppliesResponse>;
                atomicSwap(request: _6.QueryAtomicSwapRequest): Promise<_6.QueryAtomicSwapResponse>;
                atomicSwaps(request: _6.QueryAtomicSwapsRequest): Promise<_6.QueryAtomicSwapsResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createAtomicSwap(value: _7.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAtomicSwap(value: _7.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    refundAtomicSwap(value: _7.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createAtomicSwap(value: _7.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: _7.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: _7.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: _7.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: _7.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: _7.MsgRefundAtomicSwap;
                    };
                };
                fromJSON: {
                    createAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _7.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _7.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _7.MsgRefundAtomicSwap;
                    };
                };
                fromPartial: {
                    createAtomicSwap(value: _7.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: _7.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: _7.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: _7.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: _7.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: _7.MsgRefundAtomicSwap;
                    };
                };
            };
            AminoConverter: {
                "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
                    aminoType: string;
                    toAmino: (message: _7.MsgCreateAtomicSwap) => _7.MsgCreateAtomicSwapAmino;
                    fromAmino: (object: _7.MsgCreateAtomicSwapAmino) => _7.MsgCreateAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
                    aminoType: string;
                    toAmino: (message: _7.MsgClaimAtomicSwap) => _7.MsgClaimAtomicSwapAmino;
                    fromAmino: (object: _7.MsgClaimAtomicSwapAmino) => _7.MsgClaimAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
                    aminoType: string;
                    toAmino: (message: _7.MsgRefundAtomicSwap) => _7.MsgRefundAtomicSwapAmino;
                    fromAmino: (object: _7.MsgRefundAtomicSwapAmino) => _7.MsgRefundAtomicSwap;
                };
            };
            MsgCreateAtomicSwap: {
                typeUrl: string;
                encode(message: _7.MsgCreateAtomicSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgCreateAtomicSwap;
                fromPartial(object: Partial<_7.MsgCreateAtomicSwap>): _7.MsgCreateAtomicSwap;
                fromAmino(object: _7.MsgCreateAtomicSwapAmino): _7.MsgCreateAtomicSwap;
                toAmino(message: _7.MsgCreateAtomicSwap): _7.MsgCreateAtomicSwapAmino;
                fromAminoMsg(object: _7.MsgCreateAtomicSwapAminoMsg): _7.MsgCreateAtomicSwap;
                fromProtoMsg(message: _7.MsgCreateAtomicSwapProtoMsg): _7.MsgCreateAtomicSwap;
                toProto(message: _7.MsgCreateAtomicSwap): Uint8Array;
                toProtoMsg(message: _7.MsgCreateAtomicSwap): _7.MsgCreateAtomicSwapProtoMsg;
            };
            MsgCreateAtomicSwapResponse: {
                typeUrl: string;
                encode(_: _7.MsgCreateAtomicSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgCreateAtomicSwapResponse;
                fromPartial(_: Partial<_7.MsgCreateAtomicSwapResponse>): _7.MsgCreateAtomicSwapResponse;
                fromAmino(_: _7.MsgCreateAtomicSwapResponseAmino): _7.MsgCreateAtomicSwapResponse;
                toAmino(_: _7.MsgCreateAtomicSwapResponse): _7.MsgCreateAtomicSwapResponseAmino;
                fromAminoMsg(object: _7.MsgCreateAtomicSwapResponseAminoMsg): _7.MsgCreateAtomicSwapResponse;
                fromProtoMsg(message: _7.MsgCreateAtomicSwapResponseProtoMsg): _7.MsgCreateAtomicSwapResponse;
                toProto(message: _7.MsgCreateAtomicSwapResponse): Uint8Array;
                toProtoMsg(message: _7.MsgCreateAtomicSwapResponse): _7.MsgCreateAtomicSwapResponseProtoMsg;
            };
            MsgClaimAtomicSwap: {
                typeUrl: string;
                encode(message: _7.MsgClaimAtomicSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgClaimAtomicSwap;
                fromPartial(object: Partial<_7.MsgClaimAtomicSwap>): _7.MsgClaimAtomicSwap;
                fromAmino(object: _7.MsgClaimAtomicSwapAmino): _7.MsgClaimAtomicSwap;
                toAmino(message: _7.MsgClaimAtomicSwap): _7.MsgClaimAtomicSwapAmino;
                fromAminoMsg(object: _7.MsgClaimAtomicSwapAminoMsg): _7.MsgClaimAtomicSwap;
                fromProtoMsg(message: _7.MsgClaimAtomicSwapProtoMsg): _7.MsgClaimAtomicSwap;
                toProto(message: _7.MsgClaimAtomicSwap): Uint8Array;
                toProtoMsg(message: _7.MsgClaimAtomicSwap): _7.MsgClaimAtomicSwapProtoMsg;
            };
            MsgClaimAtomicSwapResponse: {
                typeUrl: string;
                encode(_: _7.MsgClaimAtomicSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgClaimAtomicSwapResponse;
                fromPartial(_: Partial<_7.MsgClaimAtomicSwapResponse>): _7.MsgClaimAtomicSwapResponse;
                fromAmino(_: _7.MsgClaimAtomicSwapResponseAmino): _7.MsgClaimAtomicSwapResponse;
                toAmino(_: _7.MsgClaimAtomicSwapResponse): _7.MsgClaimAtomicSwapResponseAmino;
                fromAminoMsg(object: _7.MsgClaimAtomicSwapResponseAminoMsg): _7.MsgClaimAtomicSwapResponse;
                fromProtoMsg(message: _7.MsgClaimAtomicSwapResponseProtoMsg): _7.MsgClaimAtomicSwapResponse;
                toProto(message: _7.MsgClaimAtomicSwapResponse): Uint8Array;
                toProtoMsg(message: _7.MsgClaimAtomicSwapResponse): _7.MsgClaimAtomicSwapResponseProtoMsg;
            };
            MsgRefundAtomicSwap: {
                typeUrl: string;
                encode(message: _7.MsgRefundAtomicSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MsgRefundAtomicSwap;
                fromPartial(object: Partial<_7.MsgRefundAtomicSwap>): _7.MsgRefundAtomicSwap;
                fromAmino(object: _7.MsgRefundAtomicSwapAmino): _7.MsgRefundAtomicSwap;
                toAmino(message: _7.MsgRefundAtomicSwap): _7.MsgRefundAtomicSwapAmino;
                fromAminoMsg(object: _7.MsgRefundAtomicSwapAminoMsg): _7.MsgRefundAtomicSwap;
                fromProtoMsg(message: _7.MsgRefundAtomicSwapProtoMsg): _7.MsgRefundAtomicSwap;
                toProto(message: _7.MsgRefundAtomicSwap): Uint8Array;
                toProtoMsg(message: _7.MsgRefundAtomicSwap): _7.MsgRefundAtomicSwapProtoMsg;
            };
            MsgRefundAtomicSwapResponse: {
                typeUrl: string;
                encode(_: _7.MsgRefundAtomicSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.MsgRefundAtomicSwapResponse;
                fromPartial(_: Partial<_7.MsgRefundAtomicSwapResponse>): _7.MsgRefundAtomicSwapResponse;
                fromAmino(_: _7.MsgRefundAtomicSwapResponseAmino): _7.MsgRefundAtomicSwapResponse;
                toAmino(_: _7.MsgRefundAtomicSwapResponse): _7.MsgRefundAtomicSwapResponseAmino;
                fromAminoMsg(object: _7.MsgRefundAtomicSwapResponseAminoMsg): _7.MsgRefundAtomicSwapResponse;
                fromProtoMsg(message: _7.MsgRefundAtomicSwapResponseProtoMsg): _7.MsgRefundAtomicSwapResponse;
                toProto(message: _7.MsgRefundAtomicSwapResponse): Uint8Array;
                toProtoMsg(message: _7.MsgRefundAtomicSwapResponse): _7.MsgRefundAtomicSwapResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _6.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.QueryParamsRequest;
                fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
                fromAmino(_: _6.QueryParamsRequestAmino): _6.QueryParamsRequest;
                toAmino(_: _6.QueryParamsRequest): _6.QueryParamsRequestAmino;
                fromAminoMsg(object: _6.QueryParamsRequestAminoMsg): _6.QueryParamsRequest;
                fromProtoMsg(message: _6.QueryParamsRequestProtoMsg): _6.QueryParamsRequest;
                toProto(message: _6.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryParamsRequest): _6.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _6.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryParamsResponse;
                fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
                fromAmino(object: _6.QueryParamsResponseAmino): _6.QueryParamsResponse;
                toAmino(message: _6.QueryParamsResponse): _6.QueryParamsResponseAmino;
                fromAminoMsg(object: _6.QueryParamsResponseAminoMsg): _6.QueryParamsResponse;
                fromProtoMsg(message: _6.QueryParamsResponseProtoMsg): _6.QueryParamsResponse;
                toProto(message: _6.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryParamsResponse): _6.QueryParamsResponseProtoMsg;
            };
            QueryAssetSupplyRequest: {
                typeUrl: string;
                encode(message: _6.QueryAssetSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAssetSupplyRequest;
                fromPartial(object: Partial<_6.QueryAssetSupplyRequest>): _6.QueryAssetSupplyRequest;
                fromAmino(object: _6.QueryAssetSupplyRequestAmino): _6.QueryAssetSupplyRequest;
                toAmino(message: _6.QueryAssetSupplyRequest): _6.QueryAssetSupplyRequestAmino;
                fromAminoMsg(object: _6.QueryAssetSupplyRequestAminoMsg): _6.QueryAssetSupplyRequest;
                fromProtoMsg(message: _6.QueryAssetSupplyRequestProtoMsg): _6.QueryAssetSupplyRequest;
                toProto(message: _6.QueryAssetSupplyRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAssetSupplyRequest): _6.QueryAssetSupplyRequestProtoMsg;
            };
            AssetSupplyResponse: {
                typeUrl: string;
                encode(message: _6.AssetSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.AssetSupplyResponse;
                fromPartial(object: Partial<_6.AssetSupplyResponse>): _6.AssetSupplyResponse;
                fromAmino(object: _6.AssetSupplyResponseAmino): _6.AssetSupplyResponse;
                toAmino(message: _6.AssetSupplyResponse): _6.AssetSupplyResponseAmino;
                fromAminoMsg(object: _6.AssetSupplyResponseAminoMsg): _6.AssetSupplyResponse;
                fromProtoMsg(message: _6.AssetSupplyResponseProtoMsg): _6.AssetSupplyResponse;
                toProto(message: _6.AssetSupplyResponse): Uint8Array;
                toProtoMsg(message: _6.AssetSupplyResponse): _6.AssetSupplyResponseProtoMsg;
            };
            QueryAssetSupplyResponse: {
                typeUrl: string;
                encode(message: _6.QueryAssetSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAssetSupplyResponse;
                fromPartial(object: Partial<_6.QueryAssetSupplyResponse>): _6.QueryAssetSupplyResponse;
                fromAmino(object: _6.QueryAssetSupplyResponseAmino): _6.QueryAssetSupplyResponse;
                toAmino(message: _6.QueryAssetSupplyResponse): _6.QueryAssetSupplyResponseAmino;
                fromAminoMsg(object: _6.QueryAssetSupplyResponseAminoMsg): _6.QueryAssetSupplyResponse;
                fromProtoMsg(message: _6.QueryAssetSupplyResponseProtoMsg): _6.QueryAssetSupplyResponse;
                toProto(message: _6.QueryAssetSupplyResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAssetSupplyResponse): _6.QueryAssetSupplyResponseProtoMsg;
            };
            QueryAssetSuppliesRequest: {
                typeUrl: string;
                encode(_: _6.QueryAssetSuppliesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.QueryAssetSuppliesRequest;
                fromPartial(_: Partial<_6.QueryAssetSuppliesRequest>): _6.QueryAssetSuppliesRequest;
                fromAmino(_: _6.QueryAssetSuppliesRequestAmino): _6.QueryAssetSuppliesRequest;
                toAmino(_: _6.QueryAssetSuppliesRequest): _6.QueryAssetSuppliesRequestAmino;
                fromAminoMsg(object: _6.QueryAssetSuppliesRequestAminoMsg): _6.QueryAssetSuppliesRequest;
                fromProtoMsg(message: _6.QueryAssetSuppliesRequestProtoMsg): _6.QueryAssetSuppliesRequest;
                toProto(message: _6.QueryAssetSuppliesRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAssetSuppliesRequest): _6.QueryAssetSuppliesRequestProtoMsg;
            };
            QueryAssetSuppliesResponse: {
                typeUrl: string;
                encode(message: _6.QueryAssetSuppliesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAssetSuppliesResponse;
                fromPartial(object: Partial<_6.QueryAssetSuppliesResponse>): _6.QueryAssetSuppliesResponse;
                fromAmino(object: _6.QueryAssetSuppliesResponseAmino): _6.QueryAssetSuppliesResponse;
                toAmino(message: _6.QueryAssetSuppliesResponse): _6.QueryAssetSuppliesResponseAmino;
                fromAminoMsg(object: _6.QueryAssetSuppliesResponseAminoMsg): _6.QueryAssetSuppliesResponse;
                fromProtoMsg(message: _6.QueryAssetSuppliesResponseProtoMsg): _6.QueryAssetSuppliesResponse;
                toProto(message: _6.QueryAssetSuppliesResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAssetSuppliesResponse): _6.QueryAssetSuppliesResponseProtoMsg;
            };
            QueryAtomicSwapRequest: {
                typeUrl: string;
                encode(message: _6.QueryAtomicSwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAtomicSwapRequest;
                fromPartial(object: Partial<_6.QueryAtomicSwapRequest>): _6.QueryAtomicSwapRequest;
                fromAmino(object: _6.QueryAtomicSwapRequestAmino): _6.QueryAtomicSwapRequest;
                toAmino(message: _6.QueryAtomicSwapRequest): _6.QueryAtomicSwapRequestAmino;
                fromAminoMsg(object: _6.QueryAtomicSwapRequestAminoMsg): _6.QueryAtomicSwapRequest;
                fromProtoMsg(message: _6.QueryAtomicSwapRequestProtoMsg): _6.QueryAtomicSwapRequest;
                toProto(message: _6.QueryAtomicSwapRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAtomicSwapRequest): _6.QueryAtomicSwapRequestProtoMsg;
            };
            QueryAtomicSwapResponse: {
                typeUrl: string;
                encode(message: _6.QueryAtomicSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAtomicSwapResponse;
                fromPartial(object: Partial<_6.QueryAtomicSwapResponse>): _6.QueryAtomicSwapResponse;
                fromAmino(object: _6.QueryAtomicSwapResponseAmino): _6.QueryAtomicSwapResponse;
                toAmino(message: _6.QueryAtomicSwapResponse): _6.QueryAtomicSwapResponseAmino;
                fromAminoMsg(object: _6.QueryAtomicSwapResponseAminoMsg): _6.QueryAtomicSwapResponse;
                fromProtoMsg(message: _6.QueryAtomicSwapResponseProtoMsg): _6.QueryAtomicSwapResponse;
                toProto(message: _6.QueryAtomicSwapResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAtomicSwapResponse): _6.QueryAtomicSwapResponseProtoMsg;
            };
            AtomicSwapResponse: {
                typeUrl: string;
                encode(message: _6.AtomicSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.AtomicSwapResponse;
                fromPartial(object: Partial<_6.AtomicSwapResponse>): _6.AtomicSwapResponse;
                fromAmino(object: _6.AtomicSwapResponseAmino): _6.AtomicSwapResponse;
                toAmino(message: _6.AtomicSwapResponse): _6.AtomicSwapResponseAmino;
                fromAminoMsg(object: _6.AtomicSwapResponseAminoMsg): _6.AtomicSwapResponse;
                fromProtoMsg(message: _6.AtomicSwapResponseProtoMsg): _6.AtomicSwapResponse;
                toProto(message: _6.AtomicSwapResponse): Uint8Array;
                toProtoMsg(message: _6.AtomicSwapResponse): _6.AtomicSwapResponseProtoMsg;
            };
            QueryAtomicSwapsRequest: {
                typeUrl: string;
                encode(message: _6.QueryAtomicSwapsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAtomicSwapsRequest;
                fromPartial(object: Partial<_6.QueryAtomicSwapsRequest>): _6.QueryAtomicSwapsRequest;
                fromAmino(object: _6.QueryAtomicSwapsRequestAmino): _6.QueryAtomicSwapsRequest;
                toAmino(message: _6.QueryAtomicSwapsRequest): _6.QueryAtomicSwapsRequestAmino;
                fromAminoMsg(object: _6.QueryAtomicSwapsRequestAminoMsg): _6.QueryAtomicSwapsRequest;
                fromProtoMsg(message: _6.QueryAtomicSwapsRequestProtoMsg): _6.QueryAtomicSwapsRequest;
                toProto(message: _6.QueryAtomicSwapsRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAtomicSwapsRequest): _6.QueryAtomicSwapsRequestProtoMsg;
            };
            QueryAtomicSwapsResponse: {
                typeUrl: string;
                encode(message: _6.QueryAtomicSwapsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAtomicSwapsResponse;
                fromPartial(object: Partial<_6.QueryAtomicSwapsResponse>): _6.QueryAtomicSwapsResponse;
                fromAmino(object: _6.QueryAtomicSwapsResponseAmino): _6.QueryAtomicSwapsResponse;
                toAmino(message: _6.QueryAtomicSwapsResponse): _6.QueryAtomicSwapsResponseAmino;
                fromAminoMsg(object: _6.QueryAtomicSwapsResponseAminoMsg): _6.QueryAtomicSwapsResponse;
                fromProtoMsg(message: _6.QueryAtomicSwapsResponseProtoMsg): _6.QueryAtomicSwapsResponse;
                toProto(message: _6.QueryAtomicSwapsResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAtomicSwapsResponse): _6.QueryAtomicSwapsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
            swapStatusFromJSON(object: any): _4.SwapStatus;
            swapStatusToJSON(object: _4.SwapStatus): string;
            swapDirectionFromJSON(object: any): _4.SwapDirection;
            swapDirectionToJSON(object: _4.SwapDirection): string;
            SwapStatus: typeof _4.SwapStatus;
            SwapStatusSDKType: typeof _4.SwapStatus;
            SwapStatusAmino: typeof _4.SwapStatus;
            SwapDirection: typeof _4.SwapDirection;
            SwapDirectionSDKType: typeof _4.SwapDirection;
            SwapDirectionAmino: typeof _4.SwapDirection;
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
            AssetParam: {
                typeUrl: string;
                encode(message: _4.AssetParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.AssetParam;
                fromPartial(object: Partial<_4.AssetParam>): _4.AssetParam;
                fromAmino(object: _4.AssetParamAmino): _4.AssetParam;
                toAmino(message: _4.AssetParam): _4.AssetParamAmino;
                fromAminoMsg(object: _4.AssetParamAminoMsg): _4.AssetParam;
                fromProtoMsg(message: _4.AssetParamProtoMsg): _4.AssetParam;
                toProto(message: _4.AssetParam): Uint8Array;
                toProtoMsg(message: _4.AssetParam): _4.AssetParamProtoMsg;
            };
            SupplyLimit: {
                typeUrl: string;
                encode(message: _4.SupplyLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.SupplyLimit;
                fromPartial(object: Partial<_4.SupplyLimit>): _4.SupplyLimit;
                fromAmino(object: _4.SupplyLimitAmino): _4.SupplyLimit;
                toAmino(message: _4.SupplyLimit): _4.SupplyLimitAmino;
                fromAminoMsg(object: _4.SupplyLimitAminoMsg): _4.SupplyLimit;
                fromProtoMsg(message: _4.SupplyLimitProtoMsg): _4.SupplyLimit;
                toProto(message: _4.SupplyLimit): Uint8Array;
                toProtoMsg(message: _4.SupplyLimit): _4.SupplyLimitProtoMsg;
            };
            AtomicSwap: {
                typeUrl: string;
                encode(message: _4.AtomicSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.AtomicSwap;
                fromPartial(object: Partial<_4.AtomicSwap>): _4.AtomicSwap;
                fromAmino(object: _4.AtomicSwapAmino): _4.AtomicSwap;
                toAmino(message: _4.AtomicSwap): _4.AtomicSwapAmino;
                fromAminoMsg(object: _4.AtomicSwapAminoMsg): _4.AtomicSwap;
                fromProtoMsg(message: _4.AtomicSwapProtoMsg): _4.AtomicSwap;
                toProto(message: _4.AtomicSwap): Uint8Array;
                toProtoMsg(message: _4.AtomicSwap): _4.AtomicSwapProtoMsg;
            };
            AssetSupply: {
                typeUrl: string;
                encode(message: _4.AssetSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.AssetSupply;
                fromPartial(object: Partial<_4.AssetSupply>): _4.AssetSupply;
                fromAmino(object: _4.AssetSupplyAmino): _4.AssetSupply;
                toAmino(message: _4.AssetSupply): _4.AssetSupplyAmino;
                fromAminoMsg(object: _4.AssetSupplyAminoMsg): _4.AssetSupply;
                fromProtoMsg(message: _4.AssetSupplyProtoMsg): _4.AssetSupply;
                toProto(message: _4.AssetSupply): Uint8Array;
                toProtoMsg(message: _4.AssetSupply): _4.AssetSupplyProtoMsg;
            };
        };
    }
    namespace cdp {
        const v1beta1: {
            MsgClientImpl: typeof _277.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                totalPrincipal(request: _10.QueryTotalPrincipalRequest): Promise<_10.QueryTotalPrincipalResponse>;
                totalCollateral(request: _10.QueryTotalCollateralRequest): Promise<_10.QueryTotalCollateralResponse>;
                cdps(request: _10.QueryCdpsRequest): Promise<_10.QueryCdpsResponse>;
                cdp(request: _10.QueryCdpRequest): Promise<_10.QueryCdpResponse>;
                deposits(request: _10.QueryDepositsRequest): Promise<_10.QueryDepositsResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCDP(value: _11.MsgCreateCDP): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _11.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _11.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    drawDebt(value: _11.MsgDrawDebt): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repayDebt(value: _11.MsgRepayDebt): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _11.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCDP(value: _11.MsgCreateCDP): {
                        typeUrl: string;
                        value: _11.MsgCreateCDP;
                    };
                    deposit(value: _11.MsgDeposit): {
                        typeUrl: string;
                        value: _11.MsgDeposit;
                    };
                    withdraw(value: _11.MsgWithdraw): {
                        typeUrl: string;
                        value: _11.MsgWithdraw;
                    };
                    drawDebt(value: _11.MsgDrawDebt): {
                        typeUrl: string;
                        value: _11.MsgDrawDebt;
                    };
                    repayDebt(value: _11.MsgRepayDebt): {
                        typeUrl: string;
                        value: _11.MsgRepayDebt;
                    };
                    liquidate(value: _11.MsgLiquidate): {
                        typeUrl: string;
                        value: _11.MsgLiquidate;
                    };
                };
                fromJSON: {
                    createCDP(value: any): {
                        typeUrl: string;
                        value: _11.MsgCreateCDP;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _11.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _11.MsgWithdraw;
                    };
                    drawDebt(value: any): {
                        typeUrl: string;
                        value: _11.MsgDrawDebt;
                    };
                    repayDebt(value: any): {
                        typeUrl: string;
                        value: _11.MsgRepayDebt;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _11.MsgLiquidate;
                    };
                };
                fromPartial: {
                    createCDP(value: _11.MsgCreateCDP): {
                        typeUrl: string;
                        value: _11.MsgCreateCDP;
                    };
                    deposit(value: _11.MsgDeposit): {
                        typeUrl: string;
                        value: _11.MsgDeposit;
                    };
                    withdraw(value: _11.MsgWithdraw): {
                        typeUrl: string;
                        value: _11.MsgWithdraw;
                    };
                    drawDebt(value: _11.MsgDrawDebt): {
                        typeUrl: string;
                        value: _11.MsgDrawDebt;
                    };
                    repayDebt(value: _11.MsgRepayDebt): {
                        typeUrl: string;
                        value: _11.MsgRepayDebt;
                    };
                    liquidate(value: _11.MsgLiquidate): {
                        typeUrl: string;
                        value: _11.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.cdp.v1beta1.MsgCreateCDP": {
                    aminoType: string;
                    toAmino: (message: _11.MsgCreateCDP) => _11.MsgCreateCDPAmino;
                    fromAmino: (object: _11.MsgCreateCDPAmino) => _11.MsgCreateCDP;
                };
                "/kava.cdp.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _11.MsgDeposit) => _11.MsgDepositAmino;
                    fromAmino: (object: _11.MsgDepositAmino) => _11.MsgDeposit;
                };
                "/kava.cdp.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _11.MsgWithdraw) => _11.MsgWithdrawAmino;
                    fromAmino: (object: _11.MsgWithdrawAmino) => _11.MsgWithdraw;
                };
                "/kava.cdp.v1beta1.MsgDrawDebt": {
                    aminoType: string;
                    toAmino: (message: _11.MsgDrawDebt) => _11.MsgDrawDebtAmino;
                    fromAmino: (object: _11.MsgDrawDebtAmino) => _11.MsgDrawDebt;
                };
                "/kava.cdp.v1beta1.MsgRepayDebt": {
                    aminoType: string;
                    toAmino: (message: _11.MsgRepayDebt) => _11.MsgRepayDebtAmino;
                    fromAmino: (object: _11.MsgRepayDebtAmino) => _11.MsgRepayDebt;
                };
                "/kava.cdp.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: (message: _11.MsgLiquidate) => _11.MsgLiquidateAmino;
                    fromAmino: (object: _11.MsgLiquidateAmino) => _11.MsgLiquidate;
                };
            };
            MsgCreateCDP: {
                typeUrl: string;
                encode(message: _11.MsgCreateCDP, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgCreateCDP;
                fromPartial(object: Partial<_11.MsgCreateCDP>): _11.MsgCreateCDP;
                fromAmino(object: _11.MsgCreateCDPAmino): _11.MsgCreateCDP;
                toAmino(message: _11.MsgCreateCDP): _11.MsgCreateCDPAmino;
                fromAminoMsg(object: _11.MsgCreateCDPAminoMsg): _11.MsgCreateCDP;
                fromProtoMsg(message: _11.MsgCreateCDPProtoMsg): _11.MsgCreateCDP;
                toProto(message: _11.MsgCreateCDP): Uint8Array;
                toProtoMsg(message: _11.MsgCreateCDP): _11.MsgCreateCDPProtoMsg;
            };
            MsgCreateCDPResponse: {
                typeUrl: string;
                encode(message: _11.MsgCreateCDPResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgCreateCDPResponse;
                fromPartial(object: Partial<_11.MsgCreateCDPResponse>): _11.MsgCreateCDPResponse;
                fromAmino(object: _11.MsgCreateCDPResponseAmino): _11.MsgCreateCDPResponse;
                toAmino(message: _11.MsgCreateCDPResponse): _11.MsgCreateCDPResponseAmino;
                fromAminoMsg(object: _11.MsgCreateCDPResponseAminoMsg): _11.MsgCreateCDPResponse;
                fromProtoMsg(message: _11.MsgCreateCDPResponseProtoMsg): _11.MsgCreateCDPResponse;
                toProto(message: _11.MsgCreateCDPResponse): Uint8Array;
                toProtoMsg(message: _11.MsgCreateCDPResponse): _11.MsgCreateCDPResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _11.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgDeposit;
                fromPartial(object: Partial<_11.MsgDeposit>): _11.MsgDeposit;
                fromAmino(object: _11.MsgDepositAmino): _11.MsgDeposit;
                toAmino(message: _11.MsgDeposit): _11.MsgDepositAmino;
                fromAminoMsg(object: _11.MsgDepositAminoMsg): _11.MsgDeposit;
                fromProtoMsg(message: _11.MsgDepositProtoMsg): _11.MsgDeposit;
                toProto(message: _11.MsgDeposit): Uint8Array;
                toProtoMsg(message: _11.MsgDeposit): _11.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _11.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgDepositResponse;
                fromPartial(_: Partial<_11.MsgDepositResponse>): _11.MsgDepositResponse;
                fromAmino(_: _11.MsgDepositResponseAmino): _11.MsgDepositResponse;
                toAmino(_: _11.MsgDepositResponse): _11.MsgDepositResponseAmino;
                fromAminoMsg(object: _11.MsgDepositResponseAminoMsg): _11.MsgDepositResponse;
                fromProtoMsg(message: _11.MsgDepositResponseProtoMsg): _11.MsgDepositResponse;
                toProto(message: _11.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _11.MsgDepositResponse): _11.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _11.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgWithdraw;
                fromPartial(object: Partial<_11.MsgWithdraw>): _11.MsgWithdraw;
                fromAmino(object: _11.MsgWithdrawAmino): _11.MsgWithdraw;
                toAmino(message: _11.MsgWithdraw): _11.MsgWithdrawAmino;
                fromAminoMsg(object: _11.MsgWithdrawAminoMsg): _11.MsgWithdraw;
                fromProtoMsg(message: _11.MsgWithdrawProtoMsg): _11.MsgWithdraw;
                toProto(message: _11.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _11.MsgWithdraw): _11.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _11.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgWithdrawResponse;
                fromPartial(_: Partial<_11.MsgWithdrawResponse>): _11.MsgWithdrawResponse;
                fromAmino(_: _11.MsgWithdrawResponseAmino): _11.MsgWithdrawResponse;
                toAmino(_: _11.MsgWithdrawResponse): _11.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _11.MsgWithdrawResponseAminoMsg): _11.MsgWithdrawResponse;
                fromProtoMsg(message: _11.MsgWithdrawResponseProtoMsg): _11.MsgWithdrawResponse;
                toProto(message: _11.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _11.MsgWithdrawResponse): _11.MsgWithdrawResponseProtoMsg;
            };
            MsgDrawDebt: {
                typeUrl: string;
                encode(message: _11.MsgDrawDebt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgDrawDebt;
                fromPartial(object: Partial<_11.MsgDrawDebt>): _11.MsgDrawDebt;
                fromAmino(object: _11.MsgDrawDebtAmino): _11.MsgDrawDebt;
                toAmino(message: _11.MsgDrawDebt): _11.MsgDrawDebtAmino;
                fromAminoMsg(object: _11.MsgDrawDebtAminoMsg): _11.MsgDrawDebt;
                fromProtoMsg(message: _11.MsgDrawDebtProtoMsg): _11.MsgDrawDebt;
                toProto(message: _11.MsgDrawDebt): Uint8Array;
                toProtoMsg(message: _11.MsgDrawDebt): _11.MsgDrawDebtProtoMsg;
            };
            MsgDrawDebtResponse: {
                typeUrl: string;
                encode(_: _11.MsgDrawDebtResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgDrawDebtResponse;
                fromPartial(_: Partial<_11.MsgDrawDebtResponse>): _11.MsgDrawDebtResponse;
                fromAmino(_: _11.MsgDrawDebtResponseAmino): _11.MsgDrawDebtResponse;
                toAmino(_: _11.MsgDrawDebtResponse): _11.MsgDrawDebtResponseAmino;
                fromAminoMsg(object: _11.MsgDrawDebtResponseAminoMsg): _11.MsgDrawDebtResponse;
                fromProtoMsg(message: _11.MsgDrawDebtResponseProtoMsg): _11.MsgDrawDebtResponse;
                toProto(message: _11.MsgDrawDebtResponse): Uint8Array;
                toProtoMsg(message: _11.MsgDrawDebtResponse): _11.MsgDrawDebtResponseProtoMsg;
            };
            MsgRepayDebt: {
                typeUrl: string;
                encode(message: _11.MsgRepayDebt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgRepayDebt;
                fromPartial(object: Partial<_11.MsgRepayDebt>): _11.MsgRepayDebt;
                fromAmino(object: _11.MsgRepayDebtAmino): _11.MsgRepayDebt;
                toAmino(message: _11.MsgRepayDebt): _11.MsgRepayDebtAmino;
                fromAminoMsg(object: _11.MsgRepayDebtAminoMsg): _11.MsgRepayDebt;
                fromProtoMsg(message: _11.MsgRepayDebtProtoMsg): _11.MsgRepayDebt;
                toProto(message: _11.MsgRepayDebt): Uint8Array;
                toProtoMsg(message: _11.MsgRepayDebt): _11.MsgRepayDebtProtoMsg;
            };
            MsgRepayDebtResponse: {
                typeUrl: string;
                encode(_: _11.MsgRepayDebtResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgRepayDebtResponse;
                fromPartial(_: Partial<_11.MsgRepayDebtResponse>): _11.MsgRepayDebtResponse;
                fromAmino(_: _11.MsgRepayDebtResponseAmino): _11.MsgRepayDebtResponse;
                toAmino(_: _11.MsgRepayDebtResponse): _11.MsgRepayDebtResponseAmino;
                fromAminoMsg(object: _11.MsgRepayDebtResponseAminoMsg): _11.MsgRepayDebtResponse;
                fromProtoMsg(message: _11.MsgRepayDebtResponseProtoMsg): _11.MsgRepayDebtResponse;
                toProto(message: _11.MsgRepayDebtResponse): Uint8Array;
                toProtoMsg(message: _11.MsgRepayDebtResponse): _11.MsgRepayDebtResponseProtoMsg;
            };
            MsgLiquidate: {
                typeUrl: string;
                encode(message: _11.MsgLiquidate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.MsgLiquidate;
                fromPartial(object: Partial<_11.MsgLiquidate>): _11.MsgLiquidate;
                fromAmino(object: _11.MsgLiquidateAmino): _11.MsgLiquidate;
                toAmino(message: _11.MsgLiquidate): _11.MsgLiquidateAmino;
                fromAminoMsg(object: _11.MsgLiquidateAminoMsg): _11.MsgLiquidate;
                fromProtoMsg(message: _11.MsgLiquidateProtoMsg): _11.MsgLiquidate;
                toProto(message: _11.MsgLiquidate): Uint8Array;
                toProtoMsg(message: _11.MsgLiquidate): _11.MsgLiquidateProtoMsg;
            };
            MsgLiquidateResponse: {
                typeUrl: string;
                encode(_: _11.MsgLiquidateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.MsgLiquidateResponse;
                fromPartial(_: Partial<_11.MsgLiquidateResponse>): _11.MsgLiquidateResponse;
                fromAmino(_: _11.MsgLiquidateResponseAmino): _11.MsgLiquidateResponse;
                toAmino(_: _11.MsgLiquidateResponse): _11.MsgLiquidateResponseAmino;
                fromAminoMsg(object: _11.MsgLiquidateResponseAminoMsg): _11.MsgLiquidateResponse;
                fromProtoMsg(message: _11.MsgLiquidateResponseProtoMsg): _11.MsgLiquidateResponse;
                toProto(message: _11.MsgLiquidateResponse): Uint8Array;
                toProtoMsg(message: _11.MsgLiquidateResponse): _11.MsgLiquidateResponseProtoMsg;
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
            QueryAccountsRequest: {
                typeUrl: string;
                encode(_: _10.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.QueryAccountsRequest;
                fromPartial(_: Partial<_10.QueryAccountsRequest>): _10.QueryAccountsRequest;
                fromAmino(_: _10.QueryAccountsRequestAmino): _10.QueryAccountsRequest;
                toAmino(_: _10.QueryAccountsRequest): _10.QueryAccountsRequestAmino;
                fromAminoMsg(object: _10.QueryAccountsRequestAminoMsg): _10.QueryAccountsRequest;
                fromProtoMsg(message: _10.QueryAccountsRequestProtoMsg): _10.QueryAccountsRequest;
                toProto(message: _10.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryAccountsRequest): _10.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _10.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryAccountsResponse;
                fromPartial(object: Partial<_10.QueryAccountsResponse>): _10.QueryAccountsResponse;
                fromAmino(object: _10.QueryAccountsResponseAmino): _10.QueryAccountsResponse;
                toAmino(message: _10.QueryAccountsResponse): _10.QueryAccountsResponseAmino;
                fromAminoMsg(object: _10.QueryAccountsResponseAminoMsg): _10.QueryAccountsResponse;
                fromProtoMsg(message: _10.QueryAccountsResponseProtoMsg): _10.QueryAccountsResponse;
                toProto(message: _10.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryAccountsResponse): _10.QueryAccountsResponseProtoMsg;
            };
            QueryCdpRequest: {
                typeUrl: string;
                encode(message: _10.QueryCdpRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCdpRequest;
                fromPartial(object: Partial<_10.QueryCdpRequest>): _10.QueryCdpRequest;
                fromAmino(object: _10.QueryCdpRequestAmino): _10.QueryCdpRequest;
                toAmino(message: _10.QueryCdpRequest): _10.QueryCdpRequestAmino;
                fromAminoMsg(object: _10.QueryCdpRequestAminoMsg): _10.QueryCdpRequest;
                fromProtoMsg(message: _10.QueryCdpRequestProtoMsg): _10.QueryCdpRequest;
                toProto(message: _10.QueryCdpRequest): Uint8Array;
                toProtoMsg(message: _10.QueryCdpRequest): _10.QueryCdpRequestProtoMsg;
            };
            QueryCdpResponse: {
                typeUrl: string;
                encode(message: _10.QueryCdpResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCdpResponse;
                fromPartial(object: Partial<_10.QueryCdpResponse>): _10.QueryCdpResponse;
                fromAmino(object: _10.QueryCdpResponseAmino): _10.QueryCdpResponse;
                toAmino(message: _10.QueryCdpResponse): _10.QueryCdpResponseAmino;
                fromAminoMsg(object: _10.QueryCdpResponseAminoMsg): _10.QueryCdpResponse;
                fromProtoMsg(message: _10.QueryCdpResponseProtoMsg): _10.QueryCdpResponse;
                toProto(message: _10.QueryCdpResponse): Uint8Array;
                toProtoMsg(message: _10.QueryCdpResponse): _10.QueryCdpResponseProtoMsg;
            };
            QueryCdpsRequest: {
                typeUrl: string;
                encode(message: _10.QueryCdpsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCdpsRequest;
                fromPartial(object: Partial<_10.QueryCdpsRequest>): _10.QueryCdpsRequest;
                fromAmino(object: _10.QueryCdpsRequestAmino): _10.QueryCdpsRequest;
                toAmino(message: _10.QueryCdpsRequest): _10.QueryCdpsRequestAmino;
                fromAminoMsg(object: _10.QueryCdpsRequestAminoMsg): _10.QueryCdpsRequest;
                fromProtoMsg(message: _10.QueryCdpsRequestProtoMsg): _10.QueryCdpsRequest;
                toProto(message: _10.QueryCdpsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryCdpsRequest): _10.QueryCdpsRequestProtoMsg;
            };
            QueryCdpsResponse: {
                typeUrl: string;
                encode(message: _10.QueryCdpsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryCdpsResponse;
                fromPartial(object: Partial<_10.QueryCdpsResponse>): _10.QueryCdpsResponse;
                fromAmino(object: _10.QueryCdpsResponseAmino): _10.QueryCdpsResponse;
                toAmino(message: _10.QueryCdpsResponse): _10.QueryCdpsResponseAmino;
                fromAminoMsg(object: _10.QueryCdpsResponseAminoMsg): _10.QueryCdpsResponse;
                fromProtoMsg(message: _10.QueryCdpsResponseProtoMsg): _10.QueryCdpsResponse;
                toProto(message: _10.QueryCdpsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryCdpsResponse): _10.QueryCdpsResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _10.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryDepositsRequest;
                fromPartial(object: Partial<_10.QueryDepositsRequest>): _10.QueryDepositsRequest;
                fromAmino(object: _10.QueryDepositsRequestAmino): _10.QueryDepositsRequest;
                toAmino(message: _10.QueryDepositsRequest): _10.QueryDepositsRequestAmino;
                fromAminoMsg(object: _10.QueryDepositsRequestAminoMsg): _10.QueryDepositsRequest;
                fromProtoMsg(message: _10.QueryDepositsRequestProtoMsg): _10.QueryDepositsRequest;
                toProto(message: _10.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _10.QueryDepositsRequest): _10.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _10.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryDepositsResponse;
                fromPartial(object: Partial<_10.QueryDepositsResponse>): _10.QueryDepositsResponse;
                fromAmino(object: _10.QueryDepositsResponseAmino): _10.QueryDepositsResponse;
                toAmino(message: _10.QueryDepositsResponse): _10.QueryDepositsResponseAmino;
                fromAminoMsg(object: _10.QueryDepositsResponseAminoMsg): _10.QueryDepositsResponse;
                fromProtoMsg(message: _10.QueryDepositsResponseProtoMsg): _10.QueryDepositsResponse;
                toProto(message: _10.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _10.QueryDepositsResponse): _10.QueryDepositsResponseProtoMsg;
            };
            QueryTotalPrincipalRequest: {
                typeUrl: string;
                encode(message: _10.QueryTotalPrincipalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryTotalPrincipalRequest;
                fromPartial(object: Partial<_10.QueryTotalPrincipalRequest>): _10.QueryTotalPrincipalRequest;
                fromAmino(object: _10.QueryTotalPrincipalRequestAmino): _10.QueryTotalPrincipalRequest;
                toAmino(message: _10.QueryTotalPrincipalRequest): _10.QueryTotalPrincipalRequestAmino;
                fromAminoMsg(object: _10.QueryTotalPrincipalRequestAminoMsg): _10.QueryTotalPrincipalRequest;
                fromProtoMsg(message: _10.QueryTotalPrincipalRequestProtoMsg): _10.QueryTotalPrincipalRequest;
                toProto(message: _10.QueryTotalPrincipalRequest): Uint8Array;
                toProtoMsg(message: _10.QueryTotalPrincipalRequest): _10.QueryTotalPrincipalRequestProtoMsg;
            };
            QueryTotalPrincipalResponse: {
                typeUrl: string;
                encode(message: _10.QueryTotalPrincipalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryTotalPrincipalResponse;
                fromPartial(object: Partial<_10.QueryTotalPrincipalResponse>): _10.QueryTotalPrincipalResponse;
                fromAmino(object: _10.QueryTotalPrincipalResponseAmino): _10.QueryTotalPrincipalResponse;
                toAmino(message: _10.QueryTotalPrincipalResponse): _10.QueryTotalPrincipalResponseAmino;
                fromAminoMsg(object: _10.QueryTotalPrincipalResponseAminoMsg): _10.QueryTotalPrincipalResponse;
                fromProtoMsg(message: _10.QueryTotalPrincipalResponseProtoMsg): _10.QueryTotalPrincipalResponse;
                toProto(message: _10.QueryTotalPrincipalResponse): Uint8Array;
                toProtoMsg(message: _10.QueryTotalPrincipalResponse): _10.QueryTotalPrincipalResponseProtoMsg;
            };
            QueryTotalCollateralRequest: {
                typeUrl: string;
                encode(message: _10.QueryTotalCollateralRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryTotalCollateralRequest;
                fromPartial(object: Partial<_10.QueryTotalCollateralRequest>): _10.QueryTotalCollateralRequest;
                fromAmino(object: _10.QueryTotalCollateralRequestAmino): _10.QueryTotalCollateralRequest;
                toAmino(message: _10.QueryTotalCollateralRequest): _10.QueryTotalCollateralRequestAmino;
                fromAminoMsg(object: _10.QueryTotalCollateralRequestAminoMsg): _10.QueryTotalCollateralRequest;
                fromProtoMsg(message: _10.QueryTotalCollateralRequestProtoMsg): _10.QueryTotalCollateralRequest;
                toProto(message: _10.QueryTotalCollateralRequest): Uint8Array;
                toProtoMsg(message: _10.QueryTotalCollateralRequest): _10.QueryTotalCollateralRequestProtoMsg;
            };
            QueryTotalCollateralResponse: {
                typeUrl: string;
                encode(message: _10.QueryTotalCollateralResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.QueryTotalCollateralResponse;
                fromPartial(object: Partial<_10.QueryTotalCollateralResponse>): _10.QueryTotalCollateralResponse;
                fromAmino(object: _10.QueryTotalCollateralResponseAmino): _10.QueryTotalCollateralResponse;
                toAmino(message: _10.QueryTotalCollateralResponse): _10.QueryTotalCollateralResponseAmino;
                fromAminoMsg(object: _10.QueryTotalCollateralResponseAminoMsg): _10.QueryTotalCollateralResponse;
                fromProtoMsg(message: _10.QueryTotalCollateralResponseProtoMsg): _10.QueryTotalCollateralResponse;
                toProto(message: _10.QueryTotalCollateralResponse): Uint8Array;
                toProtoMsg(message: _10.QueryTotalCollateralResponse): _10.QueryTotalCollateralResponseProtoMsg;
            };
            CDPResponse: {
                typeUrl: string;
                encode(message: _10.CDPResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.CDPResponse;
                fromPartial(object: Partial<_10.CDPResponse>): _10.CDPResponse;
                fromAmino(object: _10.CDPResponseAmino): _10.CDPResponse;
                toAmino(message: _10.CDPResponse): _10.CDPResponseAmino;
                fromAminoMsg(object: _10.CDPResponseAminoMsg): _10.CDPResponse;
                fromProtoMsg(message: _10.CDPResponseProtoMsg): _10.CDPResponse;
                toProto(message: _10.CDPResponse): Uint8Array;
                toProtoMsg(message: _10.CDPResponse): _10.CDPResponseProtoMsg;
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
            DebtParam: {
                typeUrl: string;
                encode(message: _9.DebtParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.DebtParam;
                fromPartial(object: Partial<_9.DebtParam>): _9.DebtParam;
                fromAmino(object: _9.DebtParamAmino): _9.DebtParam;
                toAmino(message: _9.DebtParam): _9.DebtParamAmino;
                fromAminoMsg(object: _9.DebtParamAminoMsg): _9.DebtParam;
                fromProtoMsg(message: _9.DebtParamProtoMsg): _9.DebtParam;
                toProto(message: _9.DebtParam): Uint8Array;
                toProtoMsg(message: _9.DebtParam): _9.DebtParamProtoMsg;
            };
            CollateralParam: {
                typeUrl: string;
                encode(message: _9.CollateralParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.CollateralParam;
                fromPartial(object: Partial<_9.CollateralParam>): _9.CollateralParam;
                fromAmino(object: _9.CollateralParamAmino): _9.CollateralParam;
                toAmino(message: _9.CollateralParam): _9.CollateralParamAmino;
                fromAminoMsg(object: _9.CollateralParamAminoMsg): _9.CollateralParam;
                fromProtoMsg(message: _9.CollateralParamProtoMsg): _9.CollateralParam;
                toProto(message: _9.CollateralParam): Uint8Array;
                toProtoMsg(message: _9.CollateralParam): _9.CollateralParamProtoMsg;
            };
            GenesisAccumulationTime: {
                typeUrl: string;
                encode(message: _9.GenesisAccumulationTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.GenesisAccumulationTime;
                fromPartial(object: Partial<_9.GenesisAccumulationTime>): _9.GenesisAccumulationTime;
                fromAmino(object: _9.GenesisAccumulationTimeAmino): _9.GenesisAccumulationTime;
                toAmino(message: _9.GenesisAccumulationTime): _9.GenesisAccumulationTimeAmino;
                fromAminoMsg(object: _9.GenesisAccumulationTimeAminoMsg): _9.GenesisAccumulationTime;
                fromProtoMsg(message: _9.GenesisAccumulationTimeProtoMsg): _9.GenesisAccumulationTime;
                toProto(message: _9.GenesisAccumulationTime): Uint8Array;
                toProtoMsg(message: _9.GenesisAccumulationTime): _9.GenesisAccumulationTimeProtoMsg;
            };
            GenesisTotalPrincipal: {
                typeUrl: string;
                encode(message: _9.GenesisTotalPrincipal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.GenesisTotalPrincipal;
                fromPartial(object: Partial<_9.GenesisTotalPrincipal>): _9.GenesisTotalPrincipal;
                fromAmino(object: _9.GenesisTotalPrincipalAmino): _9.GenesisTotalPrincipal;
                toAmino(message: _9.GenesisTotalPrincipal): _9.GenesisTotalPrincipalAmino;
                fromAminoMsg(object: _9.GenesisTotalPrincipalAminoMsg): _9.GenesisTotalPrincipal;
                fromProtoMsg(message: _9.GenesisTotalPrincipalProtoMsg): _9.GenesisTotalPrincipal;
                toProto(message: _9.GenesisTotalPrincipal): Uint8Array;
                toProtoMsg(message: _9.GenesisTotalPrincipal): _9.GenesisTotalPrincipalProtoMsg;
            };
            CDP: {
                typeUrl: string;
                encode(message: _8.CDP, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.CDP;
                fromPartial(object: Partial<_8.CDP>): _8.CDP;
                fromAmino(object: _8.CDPAmino): _8.CDP;
                toAmino(message: _8.CDP): _8.CDPAmino;
                fromAminoMsg(object: _8.CDPAminoMsg): _8.CDP;
                fromProtoMsg(message: _8.CDPProtoMsg): _8.CDP;
                toProto(message: _8.CDP): Uint8Array;
                toProtoMsg(message: _8.CDP): _8.CDPProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _8.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Deposit;
                fromPartial(object: Partial<_8.Deposit>): _8.Deposit;
                fromAmino(object: _8.DepositAmino): _8.Deposit;
                toAmino(message: _8.Deposit): _8.DepositAmino;
                fromAminoMsg(object: _8.DepositAminoMsg): _8.Deposit;
                fromProtoMsg(message: _8.DepositProtoMsg): _8.Deposit;
                toProto(message: _8.Deposit): Uint8Array;
                toProtoMsg(message: _8.Deposit): _8.DepositProtoMsg;
            };
            TotalPrincipal: {
                typeUrl: string;
                encode(message: _8.TotalPrincipal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.TotalPrincipal;
                fromPartial(object: Partial<_8.TotalPrincipal>): _8.TotalPrincipal;
                fromAmino(object: _8.TotalPrincipalAmino): _8.TotalPrincipal;
                toAmino(message: _8.TotalPrincipal): _8.TotalPrincipalAmino;
                fromAminoMsg(object: _8.TotalPrincipalAminoMsg): _8.TotalPrincipal;
                fromProtoMsg(message: _8.TotalPrincipalProtoMsg): _8.TotalPrincipal;
                toProto(message: _8.TotalPrincipal): Uint8Array;
                toProtoMsg(message: _8.TotalPrincipal): _8.TotalPrincipalProtoMsg;
            };
            TotalCollateral: {
                typeUrl: string;
                encode(message: _8.TotalCollateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.TotalCollateral;
                fromPartial(object: Partial<_8.TotalCollateral>): _8.TotalCollateral;
                fromAmino(object: _8.TotalCollateralAmino): _8.TotalCollateral;
                toAmino(message: _8.TotalCollateral): _8.TotalCollateralAmino;
                fromAminoMsg(object: _8.TotalCollateralAminoMsg): _8.TotalCollateral;
                fromProtoMsg(message: _8.TotalCollateralProtoMsg): _8.TotalCollateral;
                toProto(message: _8.TotalCollateral): Uint8Array;
                toProtoMsg(message: _8.TotalCollateral): _8.TotalCollateralProtoMsg;
            };
            OwnerCDPIndex: {
                typeUrl: string;
                encode(message: _8.OwnerCDPIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.OwnerCDPIndex;
                fromPartial(object: Partial<_8.OwnerCDPIndex>): _8.OwnerCDPIndex;
                fromAmino(object: _8.OwnerCDPIndexAmino): _8.OwnerCDPIndex;
                toAmino(message: _8.OwnerCDPIndex): _8.OwnerCDPIndexAmino;
                fromAminoMsg(object: _8.OwnerCDPIndexAminoMsg): _8.OwnerCDPIndex;
                fromProtoMsg(message: _8.OwnerCDPIndexProtoMsg): _8.OwnerCDPIndex;
                toProto(message: _8.OwnerCDPIndex): Uint8Array;
                toProtoMsg(message: _8.OwnerCDPIndex): _8.OwnerCDPIndexProtoMsg;
            };
        };
    }
    namespace committee {
        const v1beta1: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                committees(request?: _16.QueryCommitteesRequest): Promise<_16.QueryCommitteesResponse>;
                committee(request: _16.QueryCommitteeRequest): Promise<_16.QueryCommitteeResponse>;
                proposals(request: _16.QueryProposalsRequest): Promise<_16.QueryProposalsResponse>;
                proposal(request: _16.QueryProposalRequest): Promise<_16.QueryProposalResponse>;
                nextProposalID(request?: _16.QueryNextProposalIDRequest): Promise<_16.QueryNextProposalIDResponse>;
                votes(request: _16.QueryVotesRequest): Promise<_16.QueryVotesResponse>;
                vote(request: _16.QueryVoteRequest): Promise<_16.QueryVoteResponse>;
                tally(request: _16.QueryTallyRequest): Promise<_16.QueryTallyResponse>;
                rawParams(request: _16.QueryRawParamsRequest): Promise<_16.QueryRawParamsResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _17.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _17.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _17.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _17.MsgSubmitProposal;
                    };
                    vote(value: _17.MsgVote): {
                        typeUrl: string;
                        value: _17.MsgVote;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _17.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _17.MsgVote;
                    };
                };
                fromPartial: {
                    submitProposal(value: _17.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _17.MsgSubmitProposal;
                    };
                    vote(value: _17.MsgVote): {
                        typeUrl: string;
                        value: _17.MsgVote;
                    };
                };
            };
            AminoConverter: {
                "/kava.committee.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _17.MsgSubmitProposal) => _17.MsgSubmitProposalAmino;
                    fromAmino: (object: _17.MsgSubmitProposalAmino) => _17.MsgSubmitProposal;
                };
                "/kava.committee.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _17.MsgVote) => _17.MsgVoteAmino;
                    fromAmino: (object: _17.MsgVoteAmino) => _17.MsgVote;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _17.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSubmitProposal;
                fromPartial(object: Partial<_17.MsgSubmitProposal>): _17.MsgSubmitProposal;
                fromAmino(object: _17.MsgSubmitProposalAmino): _17.MsgSubmitProposal;
                toAmino(message: _17.MsgSubmitProposal): _17.MsgSubmitProposalAmino;
                fromAminoMsg(object: _17.MsgSubmitProposalAminoMsg): _17.MsgSubmitProposal;
                fromProtoMsg(message: _17.MsgSubmitProposalProtoMsg): _17.MsgSubmitProposal;
                toProto(message: _17.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _17.MsgSubmitProposal): _17.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _17.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_17.MsgSubmitProposalResponse>): _17.MsgSubmitProposalResponse;
                fromAmino(object: _17.MsgSubmitProposalResponseAmino): _17.MsgSubmitProposalResponse;
                toAmino(message: _17.MsgSubmitProposalResponse): _17.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _17.MsgSubmitProposalResponseAminoMsg): _17.MsgSubmitProposalResponse;
                fromProtoMsg(message: _17.MsgSubmitProposalResponseProtoMsg): _17.MsgSubmitProposalResponse;
                toProto(message: _17.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSubmitProposalResponse): _17.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _17.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgVote;
                fromPartial(object: Partial<_17.MsgVote>): _17.MsgVote;
                fromAmino(object: _17.MsgVoteAmino): _17.MsgVote;
                toAmino(message: _17.MsgVote): _17.MsgVoteAmino;
                fromAminoMsg(object: _17.MsgVoteAminoMsg): _17.MsgVote;
                fromProtoMsg(message: _17.MsgVoteProtoMsg): _17.MsgVote;
                toProto(message: _17.MsgVote): Uint8Array;
                toProtoMsg(message: _17.MsgVote): _17.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _17.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgVoteResponse;
                fromPartial(_: Partial<_17.MsgVoteResponse>): _17.MsgVoteResponse;
                fromAmino(_: _17.MsgVoteResponseAmino): _17.MsgVoteResponse;
                toAmino(_: _17.MsgVoteResponse): _17.MsgVoteResponseAmino;
                fromAminoMsg(object: _17.MsgVoteResponseAminoMsg): _17.MsgVoteResponse;
                fromProtoMsg(message: _17.MsgVoteResponseProtoMsg): _17.MsgVoteResponse;
                toProto(message: _17.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _17.MsgVoteResponse): _17.MsgVoteResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.CommitteeChangeProposal | _15.CommitteeDeleteProposal | import("../cosmos/distribution/v1beta1/distribution").CommunityPoolSpendProposal | import("../cosmos/distribution/v1beta1/distribution").CommunityPoolSpendProposalWithDeposit | import("../cosmos/params/v1beta1/params").ParameterChangeProposal | import("../cosmos/upgrade/v1beta1/upgrade").SoftwareUpgradeProposal | import("../cosmos/upgrade/v1beta1/upgrade").CancelSoftwareUpgradeProposal | import("../cosmos/gov/v1beta1/gov").TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryCommitteesRequest: {
                typeUrl: string;
                encode(_: _16.QueryCommitteesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryCommitteesRequest;
                fromPartial(_: Partial<_16.QueryCommitteesRequest>): _16.QueryCommitteesRequest;
                fromAmino(_: _16.QueryCommitteesRequestAmino): _16.QueryCommitteesRequest;
                toAmino(_: _16.QueryCommitteesRequest): _16.QueryCommitteesRequestAmino;
                fromAminoMsg(object: _16.QueryCommitteesRequestAminoMsg): _16.QueryCommitteesRequest;
                fromProtoMsg(message: _16.QueryCommitteesRequestProtoMsg): _16.QueryCommitteesRequest;
                toProto(message: _16.QueryCommitteesRequest): Uint8Array;
                toProtoMsg(message: _16.QueryCommitteesRequest): _16.QueryCommitteesRequestProtoMsg;
            };
            QueryCommitteesResponse: {
                typeUrl: string;
                encode(message: _16.QueryCommitteesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryCommitteesResponse;
                fromPartial(object: Partial<_16.QueryCommitteesResponse>): _16.QueryCommitteesResponse;
                fromAmino(object: _16.QueryCommitteesResponseAmino): _16.QueryCommitteesResponse;
                toAmino(message: _16.QueryCommitteesResponse): _16.QueryCommitteesResponseAmino;
                fromAminoMsg(object: _16.QueryCommitteesResponseAminoMsg): _16.QueryCommitteesResponse;
                fromProtoMsg(message: _16.QueryCommitteesResponseProtoMsg): _16.QueryCommitteesResponse;
                toProto(message: _16.QueryCommitteesResponse): Uint8Array;
                toProtoMsg(message: _16.QueryCommitteesResponse): _16.QueryCommitteesResponseProtoMsg;
            };
            QueryCommitteeRequest: {
                typeUrl: string;
                encode(message: _16.QueryCommitteeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryCommitteeRequest;
                fromPartial(object: Partial<_16.QueryCommitteeRequest>): _16.QueryCommitteeRequest;
                fromAmino(object: _16.QueryCommitteeRequestAmino): _16.QueryCommitteeRequest;
                toAmino(message: _16.QueryCommitteeRequest): _16.QueryCommitteeRequestAmino;
                fromAminoMsg(object: _16.QueryCommitteeRequestAminoMsg): _16.QueryCommitteeRequest;
                fromProtoMsg(message: _16.QueryCommitteeRequestProtoMsg): _16.QueryCommitteeRequest;
                toProto(message: _16.QueryCommitteeRequest): Uint8Array;
                toProtoMsg(message: _16.QueryCommitteeRequest): _16.QueryCommitteeRequestProtoMsg;
            };
            QueryCommitteeResponse: {
                typeUrl: string;
                encode(message: _16.QueryCommitteeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryCommitteeResponse;
                fromPartial(object: Partial<_16.QueryCommitteeResponse>): _16.QueryCommitteeResponse;
                fromAmino(object: _16.QueryCommitteeResponseAmino): _16.QueryCommitteeResponse;
                toAmino(message: _16.QueryCommitteeResponse): _16.QueryCommitteeResponseAmino;
                fromAminoMsg(object: _16.QueryCommitteeResponseAminoMsg): _16.QueryCommitteeResponse;
                fromProtoMsg(message: _16.QueryCommitteeResponseProtoMsg): _16.QueryCommitteeResponse;
                toProto(message: _16.QueryCommitteeResponse): Uint8Array;
                toProtoMsg(message: _16.QueryCommitteeResponse): _16.QueryCommitteeResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _16.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryProposalsRequest;
                fromPartial(object: Partial<_16.QueryProposalsRequest>): _16.QueryProposalsRequest;
                fromAmino(object: _16.QueryProposalsRequestAmino): _16.QueryProposalsRequest;
                toAmino(message: _16.QueryProposalsRequest): _16.QueryProposalsRequestAmino;
                fromAminoMsg(object: _16.QueryProposalsRequestAminoMsg): _16.QueryProposalsRequest;
                fromProtoMsg(message: _16.QueryProposalsRequestProtoMsg): _16.QueryProposalsRequest;
                toProto(message: _16.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryProposalsRequest): _16.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _16.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryProposalsResponse;
                fromPartial(object: Partial<_16.QueryProposalsResponse>): _16.QueryProposalsResponse;
                fromAmino(object: _16.QueryProposalsResponseAmino): _16.QueryProposalsResponse;
                toAmino(message: _16.QueryProposalsResponse): _16.QueryProposalsResponseAmino;
                fromAminoMsg(object: _16.QueryProposalsResponseAminoMsg): _16.QueryProposalsResponse;
                fromProtoMsg(message: _16.QueryProposalsResponseProtoMsg): _16.QueryProposalsResponse;
                toProto(message: _16.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryProposalsResponse): _16.QueryProposalsResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _16.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryProposalRequest;
                fromPartial(object: Partial<_16.QueryProposalRequest>): _16.QueryProposalRequest;
                fromAmino(object: _16.QueryProposalRequestAmino): _16.QueryProposalRequest;
                toAmino(message: _16.QueryProposalRequest): _16.QueryProposalRequestAmino;
                fromAminoMsg(object: _16.QueryProposalRequestAminoMsg): _16.QueryProposalRequest;
                fromProtoMsg(message: _16.QueryProposalRequestProtoMsg): _16.QueryProposalRequest;
                toProto(message: _16.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _16.QueryProposalRequest): _16.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _16.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryProposalResponse;
                fromPartial(object: Partial<_16.QueryProposalResponse>): _16.QueryProposalResponse;
                fromAmino(object: _16.QueryProposalResponseAmino): _16.QueryProposalResponse;
                toAmino(message: _16.QueryProposalResponse): _16.QueryProposalResponseAmino;
                fromAminoMsg(object: _16.QueryProposalResponseAminoMsg): _16.QueryProposalResponse;
                fromProtoMsg(message: _16.QueryProposalResponseProtoMsg): _16.QueryProposalResponse;
                toProto(message: _16.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _16.QueryProposalResponse): _16.QueryProposalResponseProtoMsg;
            };
            QueryNextProposalIDRequest: {
                typeUrl: string;
                encode(_: _16.QueryNextProposalIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryNextProposalIDRequest;
                fromPartial(_: Partial<_16.QueryNextProposalIDRequest>): _16.QueryNextProposalIDRequest;
                fromAmino(_: _16.QueryNextProposalIDRequestAmino): _16.QueryNextProposalIDRequest;
                toAmino(_: _16.QueryNextProposalIDRequest): _16.QueryNextProposalIDRequestAmino;
                fromAminoMsg(object: _16.QueryNextProposalIDRequestAminoMsg): _16.QueryNextProposalIDRequest;
                fromProtoMsg(message: _16.QueryNextProposalIDRequestProtoMsg): _16.QueryNextProposalIDRequest;
                toProto(message: _16.QueryNextProposalIDRequest): Uint8Array;
                toProtoMsg(message: _16.QueryNextProposalIDRequest): _16.QueryNextProposalIDRequestProtoMsg;
            };
            QueryNextProposalIDResponse: {
                typeUrl: string;
                encode(message: _16.QueryNextProposalIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryNextProposalIDResponse;
                fromPartial(object: Partial<_16.QueryNextProposalIDResponse>): _16.QueryNextProposalIDResponse;
                fromAmino(object: _16.QueryNextProposalIDResponseAmino): _16.QueryNextProposalIDResponse;
                toAmino(message: _16.QueryNextProposalIDResponse): _16.QueryNextProposalIDResponseAmino;
                fromAminoMsg(object: _16.QueryNextProposalIDResponseAminoMsg): _16.QueryNextProposalIDResponse;
                fromProtoMsg(message: _16.QueryNextProposalIDResponseProtoMsg): _16.QueryNextProposalIDResponse;
                toProto(message: _16.QueryNextProposalIDResponse): Uint8Array;
                toProtoMsg(message: _16.QueryNextProposalIDResponse): _16.QueryNextProposalIDResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _16.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryVotesRequest;
                fromPartial(object: Partial<_16.QueryVotesRequest>): _16.QueryVotesRequest;
                fromAmino(object: _16.QueryVotesRequestAmino): _16.QueryVotesRequest;
                toAmino(message: _16.QueryVotesRequest): _16.QueryVotesRequestAmino;
                fromAminoMsg(object: _16.QueryVotesRequestAminoMsg): _16.QueryVotesRequest;
                fromProtoMsg(message: _16.QueryVotesRequestProtoMsg): _16.QueryVotesRequest;
                toProto(message: _16.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _16.QueryVotesRequest): _16.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _16.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryVotesResponse;
                fromPartial(object: Partial<_16.QueryVotesResponse>): _16.QueryVotesResponse;
                fromAmino(object: _16.QueryVotesResponseAmino): _16.QueryVotesResponse;
                toAmino(message: _16.QueryVotesResponse): _16.QueryVotesResponseAmino;
                fromAminoMsg(object: _16.QueryVotesResponseAminoMsg): _16.QueryVotesResponse;
                fromProtoMsg(message: _16.QueryVotesResponseProtoMsg): _16.QueryVotesResponse;
                toProto(message: _16.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _16.QueryVotesResponse): _16.QueryVotesResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _16.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryVoteRequest;
                fromPartial(object: Partial<_16.QueryVoteRequest>): _16.QueryVoteRequest;
                fromAmino(object: _16.QueryVoteRequestAmino): _16.QueryVoteRequest;
                toAmino(message: _16.QueryVoteRequest): _16.QueryVoteRequestAmino;
                fromAminoMsg(object: _16.QueryVoteRequestAminoMsg): _16.QueryVoteRequest;
                fromProtoMsg(message: _16.QueryVoteRequestProtoMsg): _16.QueryVoteRequest;
                toProto(message: _16.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _16.QueryVoteRequest): _16.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _16.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryVoteResponse;
                fromPartial(object: Partial<_16.QueryVoteResponse>): _16.QueryVoteResponse;
                fromAmino(object: _16.QueryVoteResponseAmino): _16.QueryVoteResponse;
                toAmino(message: _16.QueryVoteResponse): _16.QueryVoteResponseAmino;
                fromAminoMsg(object: _16.QueryVoteResponseAminoMsg): _16.QueryVoteResponse;
                fromProtoMsg(message: _16.QueryVoteResponseProtoMsg): _16.QueryVoteResponse;
                toProto(message: _16.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _16.QueryVoteResponse): _16.QueryVoteResponseProtoMsg;
            };
            QueryTallyRequest: {
                typeUrl: string;
                encode(message: _16.QueryTallyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryTallyRequest;
                fromPartial(object: Partial<_16.QueryTallyRequest>): _16.QueryTallyRequest;
                fromAmino(object: _16.QueryTallyRequestAmino): _16.QueryTallyRequest;
                toAmino(message: _16.QueryTallyRequest): _16.QueryTallyRequestAmino;
                fromAminoMsg(object: _16.QueryTallyRequestAminoMsg): _16.QueryTallyRequest;
                fromProtoMsg(message: _16.QueryTallyRequestProtoMsg): _16.QueryTallyRequest;
                toProto(message: _16.QueryTallyRequest): Uint8Array;
                toProtoMsg(message: _16.QueryTallyRequest): _16.QueryTallyRequestProtoMsg;
            };
            QueryTallyResponse: {
                typeUrl: string;
                encode(message: _16.QueryTallyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryTallyResponse;
                fromPartial(object: Partial<_16.QueryTallyResponse>): _16.QueryTallyResponse;
                fromAmino(object: _16.QueryTallyResponseAmino): _16.QueryTallyResponse;
                toAmino(message: _16.QueryTallyResponse): _16.QueryTallyResponseAmino;
                fromAminoMsg(object: _16.QueryTallyResponseAminoMsg): _16.QueryTallyResponse;
                fromProtoMsg(message: _16.QueryTallyResponseProtoMsg): _16.QueryTallyResponse;
                toProto(message: _16.QueryTallyResponse): Uint8Array;
                toProtoMsg(message: _16.QueryTallyResponse): _16.QueryTallyResponseProtoMsg;
            };
            QueryRawParamsRequest: {
                typeUrl: string;
                encode(message: _16.QueryRawParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryRawParamsRequest;
                fromPartial(object: Partial<_16.QueryRawParamsRequest>): _16.QueryRawParamsRequest;
                fromAmino(object: _16.QueryRawParamsRequestAmino): _16.QueryRawParamsRequest;
                toAmino(message: _16.QueryRawParamsRequest): _16.QueryRawParamsRequestAmino;
                fromAminoMsg(object: _16.QueryRawParamsRequestAminoMsg): _16.QueryRawParamsRequest;
                fromProtoMsg(message: _16.QueryRawParamsRequestProtoMsg): _16.QueryRawParamsRequest;
                toProto(message: _16.QueryRawParamsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryRawParamsRequest): _16.QueryRawParamsRequestProtoMsg;
            };
            QueryRawParamsResponse: {
                typeUrl: string;
                encode(message: _16.QueryRawParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryRawParamsResponse;
                fromPartial(object: Partial<_16.QueryRawParamsResponse>): _16.QueryRawParamsResponse;
                fromAmino(object: _16.QueryRawParamsResponseAmino): _16.QueryRawParamsResponse;
                toAmino(message: _16.QueryRawParamsResponse): _16.QueryRawParamsResponseAmino;
                fromAminoMsg(object: _16.QueryRawParamsResponseAminoMsg): _16.QueryRawParamsResponse;
                fromProtoMsg(message: _16.QueryRawParamsResponseProtoMsg): _16.QueryRawParamsResponse;
                toProto(message: _16.QueryRawParamsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryRawParamsResponse): _16.QueryRawParamsResponseProtoMsg;
            };
            Committee_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _12.BaseCommittee | _12.MemberCommittee | _12.TokenCommittee;
            Committee_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Committee_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            CommitteeChangeProposal: {
                typeUrl: string;
                encode(message: _15.CommitteeChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.CommitteeChangeProposal;
                fromPartial(object: Partial<_15.CommitteeChangeProposal>): _15.CommitteeChangeProposal;
                fromAmino(object: _15.CommitteeChangeProposalAmino): _15.CommitteeChangeProposal;
                toAmino(message: _15.CommitteeChangeProposal): _15.CommitteeChangeProposalAmino;
                fromAminoMsg(object: _15.CommitteeChangeProposalAminoMsg): _15.CommitteeChangeProposal;
                fromProtoMsg(message: _15.CommitteeChangeProposalProtoMsg): _15.CommitteeChangeProposal;
                toProto(message: _15.CommitteeChangeProposal): Uint8Array;
                toProtoMsg(message: _15.CommitteeChangeProposal): _15.CommitteeChangeProposalProtoMsg;
            };
            CommitteeDeleteProposal: {
                typeUrl: string;
                encode(message: _15.CommitteeDeleteProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.CommitteeDeleteProposal;
                fromPartial(object: Partial<_15.CommitteeDeleteProposal>): _15.CommitteeDeleteProposal;
                fromAmino(object: _15.CommitteeDeleteProposalAmino): _15.CommitteeDeleteProposal;
                toAmino(message: _15.CommitteeDeleteProposal): _15.CommitteeDeleteProposalAmino;
                fromAminoMsg(object: _15.CommitteeDeleteProposalAminoMsg): _15.CommitteeDeleteProposal;
                fromProtoMsg(message: _15.CommitteeDeleteProposalProtoMsg): _15.CommitteeDeleteProposal;
                toProto(message: _15.CommitteeDeleteProposal): Uint8Array;
                toProtoMsg(message: _15.CommitteeDeleteProposal): _15.CommitteeDeleteProposalProtoMsg;
            };
            GodPermission: {
                typeUrl: string;
                encode(_: _14.GodPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.GodPermission;
                fromPartial(_: Partial<_14.GodPermission>): _14.GodPermission;
                fromAmino(_: _14.GodPermissionAmino): _14.GodPermission;
                toAmino(_: _14.GodPermission): _14.GodPermissionAmino;
                fromAminoMsg(object: _14.GodPermissionAminoMsg): _14.GodPermission;
                fromProtoMsg(message: _14.GodPermissionProtoMsg): _14.GodPermission;
                toProto(message: _14.GodPermission): Uint8Array;
                toProtoMsg(message: _14.GodPermission): _14.GodPermissionProtoMsg;
            };
            SoftwareUpgradePermission: {
                typeUrl: string;
                encode(_: _14.SoftwareUpgradePermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.SoftwareUpgradePermission;
                fromPartial(_: Partial<_14.SoftwareUpgradePermission>): _14.SoftwareUpgradePermission;
                fromAmino(_: _14.SoftwareUpgradePermissionAmino): _14.SoftwareUpgradePermission;
                toAmino(_: _14.SoftwareUpgradePermission): _14.SoftwareUpgradePermissionAmino;
                fromAminoMsg(object: _14.SoftwareUpgradePermissionAminoMsg): _14.SoftwareUpgradePermission;
                fromProtoMsg(message: _14.SoftwareUpgradePermissionProtoMsg): _14.SoftwareUpgradePermission;
                toProto(message: _14.SoftwareUpgradePermission): Uint8Array;
                toProtoMsg(message: _14.SoftwareUpgradePermission): _14.SoftwareUpgradePermissionProtoMsg;
            };
            TextPermission: {
                typeUrl: string;
                encode(_: _14.TextPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.TextPermission;
                fromPartial(_: Partial<_14.TextPermission>): _14.TextPermission;
                fromAmino(_: _14.TextPermissionAmino): _14.TextPermission;
                toAmino(_: _14.TextPermission): _14.TextPermissionAmino;
                fromAminoMsg(object: _14.TextPermissionAminoMsg): _14.TextPermission;
                fromProtoMsg(message: _14.TextPermissionProtoMsg): _14.TextPermission;
                toProto(message: _14.TextPermission): Uint8Array;
                toProtoMsg(message: _14.TextPermission): _14.TextPermissionProtoMsg;
            };
            CommunityCDPRepayDebtPermission: {
                typeUrl: string;
                encode(_: _14.CommunityCDPRepayDebtPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.CommunityCDPRepayDebtPermission;
                fromPartial(_: Partial<_14.CommunityCDPRepayDebtPermission>): _14.CommunityCDPRepayDebtPermission;
                fromAmino(_: _14.CommunityCDPRepayDebtPermissionAmino): _14.CommunityCDPRepayDebtPermission;
                toAmino(_: _14.CommunityCDPRepayDebtPermission): _14.CommunityCDPRepayDebtPermissionAmino;
                fromAminoMsg(object: _14.CommunityCDPRepayDebtPermissionAminoMsg): _14.CommunityCDPRepayDebtPermission;
                fromProtoMsg(message: _14.CommunityCDPRepayDebtPermissionProtoMsg): _14.CommunityCDPRepayDebtPermission;
                toProto(message: _14.CommunityCDPRepayDebtPermission): Uint8Array;
                toProtoMsg(message: _14.CommunityCDPRepayDebtPermission): _14.CommunityCDPRepayDebtPermissionProtoMsg;
            };
            CommunityCDPWithdrawCollateralPermission: {
                typeUrl: string;
                encode(_: _14.CommunityCDPWithdrawCollateralPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.CommunityCDPWithdrawCollateralPermission;
                fromPartial(_: Partial<_14.CommunityCDPWithdrawCollateralPermission>): _14.CommunityCDPWithdrawCollateralPermission;
                fromAmino(_: _14.CommunityCDPWithdrawCollateralPermissionAmino): _14.CommunityCDPWithdrawCollateralPermission;
                toAmino(_: _14.CommunityCDPWithdrawCollateralPermission): _14.CommunityCDPWithdrawCollateralPermissionAmino;
                fromAminoMsg(object: _14.CommunityCDPWithdrawCollateralPermissionAminoMsg): _14.CommunityCDPWithdrawCollateralPermission;
                fromProtoMsg(message: _14.CommunityCDPWithdrawCollateralPermissionProtoMsg): _14.CommunityCDPWithdrawCollateralPermission;
                toProto(message: _14.CommunityCDPWithdrawCollateralPermission): Uint8Array;
                toProtoMsg(message: _14.CommunityCDPWithdrawCollateralPermission): _14.CommunityCDPWithdrawCollateralPermissionProtoMsg;
            };
            CommunityPoolLendWithdrawPermission: {
                typeUrl: string;
                encode(_: _14.CommunityPoolLendWithdrawPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.CommunityPoolLendWithdrawPermission;
                fromPartial(_: Partial<_14.CommunityPoolLendWithdrawPermission>): _14.CommunityPoolLendWithdrawPermission;
                fromAmino(_: _14.CommunityPoolLendWithdrawPermissionAmino): _14.CommunityPoolLendWithdrawPermission;
                toAmino(_: _14.CommunityPoolLendWithdrawPermission): _14.CommunityPoolLendWithdrawPermissionAmino;
                fromAminoMsg(object: _14.CommunityPoolLendWithdrawPermissionAminoMsg): _14.CommunityPoolLendWithdrawPermission;
                fromProtoMsg(message: _14.CommunityPoolLendWithdrawPermissionProtoMsg): _14.CommunityPoolLendWithdrawPermission;
                toProto(message: _14.CommunityPoolLendWithdrawPermission): Uint8Array;
                toProtoMsg(message: _14.CommunityPoolLendWithdrawPermission): _14.CommunityPoolLendWithdrawPermissionProtoMsg;
            };
            ParamsChangePermission: {
                typeUrl: string;
                encode(message: _14.ParamsChangePermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.ParamsChangePermission;
                fromPartial(object: Partial<_14.ParamsChangePermission>): _14.ParamsChangePermission;
                fromAmino(object: _14.ParamsChangePermissionAmino): _14.ParamsChangePermission;
                toAmino(message: _14.ParamsChangePermission): _14.ParamsChangePermissionAmino;
                fromAminoMsg(object: _14.ParamsChangePermissionAminoMsg): _14.ParamsChangePermission;
                fromProtoMsg(message: _14.ParamsChangePermissionProtoMsg): _14.ParamsChangePermission;
                toProto(message: _14.ParamsChangePermission): Uint8Array;
                toProtoMsg(message: _14.ParamsChangePermission): _14.ParamsChangePermissionProtoMsg;
            };
            AllowedParamsChange: {
                typeUrl: string;
                encode(message: _14.AllowedParamsChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.AllowedParamsChange;
                fromPartial(object: Partial<_14.AllowedParamsChange>): _14.AllowedParamsChange;
                fromAmino(object: _14.AllowedParamsChangeAmino): _14.AllowedParamsChange;
                toAmino(message: _14.AllowedParamsChange): _14.AllowedParamsChangeAmino;
                fromAminoMsg(object: _14.AllowedParamsChangeAminoMsg): _14.AllowedParamsChange;
                fromProtoMsg(message: _14.AllowedParamsChangeProtoMsg): _14.AllowedParamsChange;
                toProto(message: _14.AllowedParamsChange): Uint8Array;
                toProtoMsg(message: _14.AllowedParamsChange): _14.AllowedParamsChangeProtoMsg;
            };
            SubparamRequirement: {
                typeUrl: string;
                encode(message: _14.SubparamRequirement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.SubparamRequirement;
                fromPartial(object: Partial<_14.SubparamRequirement>): _14.SubparamRequirement;
                fromAmino(object: _14.SubparamRequirementAmino): _14.SubparamRequirement;
                toAmino(message: _14.SubparamRequirement): _14.SubparamRequirementAmino;
                fromAminoMsg(object: _14.SubparamRequirementAminoMsg): _14.SubparamRequirement;
                fromProtoMsg(message: _14.SubparamRequirementProtoMsg): _14.SubparamRequirement;
                toProto(message: _14.SubparamRequirement): Uint8Array;
                toProtoMsg(message: _14.SubparamRequirement): _14.SubparamRequirementProtoMsg;
            };
            voteTypeFromJSON(object: any): _13.VoteType;
            voteTypeToJSON(object: _13.VoteType): string;
            VoteType: typeof _13.VoteType;
            VoteTypeSDKType: typeof _13.VoteType;
            VoteTypeAmino: typeof _13.VoteType;
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
            Proposal: {
                typeUrl: string;
                encode(message: _13.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Proposal;
                fromPartial(object: Partial<_13.Proposal>): _13.Proposal;
                fromAmino(object: _13.ProposalAmino): _13.Proposal;
                toAmino(message: _13.Proposal): _13.ProposalAmino;
                fromAminoMsg(object: _13.ProposalAminoMsg): _13.Proposal;
                fromProtoMsg(message: _13.ProposalProtoMsg): _13.Proposal;
                toProto(message: _13.Proposal): Uint8Array;
                toProtoMsg(message: _13.Proposal): _13.ProposalProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _13.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Vote;
                fromPartial(object: Partial<_13.Vote>): _13.Vote;
                fromAmino(object: _13.VoteAmino): _13.Vote;
                toAmino(message: _13.Vote): _13.VoteAmino;
                fromAminoMsg(object: _13.VoteAminoMsg): _13.Vote;
                fromProtoMsg(message: _13.VoteProtoMsg): _13.Vote;
                toProto(message: _13.Vote): Uint8Array;
                toProtoMsg(message: _13.Vote): _13.VoteProtoMsg;
            };
            tallyOptionFromJSON(object: any): _12.TallyOption;
            tallyOptionToJSON(object: _12.TallyOption): string;
            TallyOption: typeof _12.TallyOption;
            TallyOptionSDKType: typeof _12.TallyOption;
            TallyOptionAmino: typeof _12.TallyOption;
            BaseCommittee: {
                typeUrl: string;
                encode(message: _12.BaseCommittee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.BaseCommittee;
                fromPartial(object: Partial<_12.BaseCommittee>): _12.BaseCommittee;
                fromAmino(object: _12.BaseCommitteeAmino): _12.BaseCommittee;
                toAmino(message: _12.BaseCommittee): _12.BaseCommitteeAmino;
                fromAminoMsg(object: _12.BaseCommitteeAminoMsg): _12.BaseCommittee;
                fromProtoMsg(message: _12.BaseCommitteeProtoMsg): _12.BaseCommittee;
                toProto(message: _12.BaseCommittee): Uint8Array;
                toProtoMsg(message: _12.BaseCommittee): _12.BaseCommitteeProtoMsg;
            };
            MemberCommittee: {
                typeUrl: string;
                encode(message: _12.MemberCommittee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.MemberCommittee;
                fromPartial(object: Partial<_12.MemberCommittee>): _12.MemberCommittee;
                fromAmino(object: _12.MemberCommitteeAmino): _12.MemberCommittee;
                toAmino(message: _12.MemberCommittee): _12.MemberCommitteeAmino;
                fromAminoMsg(object: _12.MemberCommitteeAminoMsg): _12.MemberCommittee;
                fromProtoMsg(message: _12.MemberCommitteeProtoMsg): _12.MemberCommittee;
                toProto(message: _12.MemberCommittee): Uint8Array;
                toProtoMsg(message: _12.MemberCommittee): _12.MemberCommitteeProtoMsg;
            };
            TokenCommittee: {
                typeUrl: string;
                encode(message: _12.TokenCommittee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.TokenCommittee;
                fromPartial(object: Partial<_12.TokenCommittee>): _12.TokenCommittee;
                fromAmino(object: _12.TokenCommitteeAmino): _12.TokenCommittee;
                toAmino(message: _12.TokenCommittee): _12.TokenCommitteeAmino;
                fromAminoMsg(object: _12.TokenCommitteeAminoMsg): _12.TokenCommittee;
                fromProtoMsg(message: _12.TokenCommitteeProtoMsg): _12.TokenCommittee;
                toProto(message: _12.TokenCommittee): Uint8Array;
                toProtoMsg(message: _12.TokenCommittee): _12.TokenCommitteeProtoMsg;
            };
            Permission_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _14.GodPermission | _14.SoftwareUpgradePermission | _14.TextPermission | _14.CommunityCDPRepayDebtPermission | _14.CommunityCDPWithdrawCollateralPermission | _14.CommunityPoolLendWithdrawPermission | _14.ParamsChangePermission;
            Permission_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Permission_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace community {
        const v1beta1: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                balance(request?: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                totalBalance(request?: _21.QueryTotalBalanceRequest): Promise<_21.QueryTotalBalanceResponse>;
                annualizedRewards(request?: _21.QueryAnnualizedRewardsRequest): Promise<_21.QueryAnnualizedRewardsResponse>;
            };
            LCDQueryClient: typeof _247.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    fundCommunityPool(value: _23.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    fundCommunityPool(value: _23.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _23.MsgFundCommunityPool;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _23.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    fundCommunityPool(value: _23.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _23.MsgFundCommunityPool;
                    };
                    updateParams(value: _23.MsgUpdateParams): {
                        typeUrl: string;
                        value: _23.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/kava.community.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _23.MsgFundCommunityPool) => _23.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _23.MsgFundCommunityPoolAmino) => _23.MsgFundCommunityPool;
                };
                "/kava.community.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _23.MsgUpdateParams) => _23.MsgUpdateParamsAmino;
                    fromAmino: (object: _23.MsgUpdateParamsAmino) => _23.MsgUpdateParams;
                };
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _23.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.MsgFundCommunityPool;
                fromPartial(object: Partial<_23.MsgFundCommunityPool>): _23.MsgFundCommunityPool;
                fromAmino(object: _23.MsgFundCommunityPoolAmino): _23.MsgFundCommunityPool;
                toAmino(message: _23.MsgFundCommunityPool): _23.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _23.MsgFundCommunityPoolAminoMsg): _23.MsgFundCommunityPool;
                fromProtoMsg(message: _23.MsgFundCommunityPoolProtoMsg): _23.MsgFundCommunityPool;
                toProto(message: _23.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _23.MsgFundCommunityPool): _23.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _23.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_23.MsgFundCommunityPoolResponse>): _23.MsgFundCommunityPoolResponse;
                fromAmino(_: _23.MsgFundCommunityPoolResponseAmino): _23.MsgFundCommunityPoolResponse;
                toAmino(_: _23.MsgFundCommunityPoolResponse): _23.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _23.MsgFundCommunityPoolResponseAminoMsg): _23.MsgFundCommunityPoolResponse;
                fromProtoMsg(message: _23.MsgFundCommunityPoolResponseProtoMsg): _23.MsgFundCommunityPoolResponse;
                toProto(message: _23.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _23.MsgFundCommunityPoolResponse): _23.MsgFundCommunityPoolResponseProtoMsg;
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
            StakingRewardsState: {
                typeUrl: string;
                encode(message: _22.StakingRewardsState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.StakingRewardsState;
                fromPartial(object: Partial<_22.StakingRewardsState>): _22.StakingRewardsState;
                fromAmino(object: _22.StakingRewardsStateAmino): _22.StakingRewardsState;
                toAmino(message: _22.StakingRewardsState): _22.StakingRewardsStateAmino;
                fromAminoMsg(object: _22.StakingRewardsStateAminoMsg): _22.StakingRewardsState;
                fromProtoMsg(message: _22.StakingRewardsStateProtoMsg): _22.StakingRewardsState;
                toProto(message: _22.StakingRewardsState): Uint8Array;
                toProtoMsg(message: _22.StakingRewardsState): _22.StakingRewardsStateProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _21.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryParamsRequest;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
                fromAmino(_: _21.QueryParamsRequestAmino): _21.QueryParamsRequest;
                toAmino(_: _21.QueryParamsRequest): _21.QueryParamsRequestAmino;
                fromAminoMsg(object: _21.QueryParamsRequestAminoMsg): _21.QueryParamsRequest;
                fromProtoMsg(message: _21.QueryParamsRequestProtoMsg): _21.QueryParamsRequest;
                toProto(message: _21.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryParamsRequest): _21.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryParamsResponse;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
                fromAmino(object: _21.QueryParamsResponseAmino): _21.QueryParamsResponse;
                toAmino(message: _21.QueryParamsResponse): _21.QueryParamsResponseAmino;
                fromAminoMsg(object: _21.QueryParamsResponseAminoMsg): _21.QueryParamsResponse;
                fromProtoMsg(message: _21.QueryParamsResponseProtoMsg): _21.QueryParamsResponse;
                toProto(message: _21.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryParamsResponse): _21.QueryParamsResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(_: _21.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryBalanceRequest;
                fromPartial(_: Partial<_21.QueryBalanceRequest>): _21.QueryBalanceRequest;
                fromAmino(_: _21.QueryBalanceRequestAmino): _21.QueryBalanceRequest;
                toAmino(_: _21.QueryBalanceRequest): _21.QueryBalanceRequestAmino;
                fromAminoMsg(object: _21.QueryBalanceRequestAminoMsg): _21.QueryBalanceRequest;
                fromProtoMsg(message: _21.QueryBalanceRequestProtoMsg): _21.QueryBalanceRequest;
                toProto(message: _21.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _21.QueryBalanceRequest): _21.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _21.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryBalanceResponse;
                fromPartial(object: Partial<_21.QueryBalanceResponse>): _21.QueryBalanceResponse;
                fromAmino(object: _21.QueryBalanceResponseAmino): _21.QueryBalanceResponse;
                toAmino(message: _21.QueryBalanceResponse): _21.QueryBalanceResponseAmino;
                fromAminoMsg(object: _21.QueryBalanceResponseAminoMsg): _21.QueryBalanceResponse;
                fromProtoMsg(message: _21.QueryBalanceResponseProtoMsg): _21.QueryBalanceResponse;
                toProto(message: _21.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _21.QueryBalanceResponse): _21.QueryBalanceResponseProtoMsg;
            };
            QueryTotalBalanceRequest: {
                typeUrl: string;
                encode(_: _21.QueryTotalBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryTotalBalanceRequest;
                fromPartial(_: Partial<_21.QueryTotalBalanceRequest>): _21.QueryTotalBalanceRequest;
                fromAmino(_: _21.QueryTotalBalanceRequestAmino): _21.QueryTotalBalanceRequest;
                toAmino(_: _21.QueryTotalBalanceRequest): _21.QueryTotalBalanceRequestAmino;
                fromAminoMsg(object: _21.QueryTotalBalanceRequestAminoMsg): _21.QueryTotalBalanceRequest;
                fromProtoMsg(message: _21.QueryTotalBalanceRequestProtoMsg): _21.QueryTotalBalanceRequest;
                toProto(message: _21.QueryTotalBalanceRequest): Uint8Array;
                toProtoMsg(message: _21.QueryTotalBalanceRequest): _21.QueryTotalBalanceRequestProtoMsg;
            };
            QueryTotalBalanceResponse: {
                typeUrl: string;
                encode(message: _21.QueryTotalBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryTotalBalanceResponse;
                fromPartial(object: Partial<_21.QueryTotalBalanceResponse>): _21.QueryTotalBalanceResponse;
                fromAmino(object: _21.QueryTotalBalanceResponseAmino): _21.QueryTotalBalanceResponse;
                toAmino(message: _21.QueryTotalBalanceResponse): _21.QueryTotalBalanceResponseAmino;
                fromAminoMsg(object: _21.QueryTotalBalanceResponseAminoMsg): _21.QueryTotalBalanceResponse;
                fromProtoMsg(message: _21.QueryTotalBalanceResponseProtoMsg): _21.QueryTotalBalanceResponse;
                toProto(message: _21.QueryTotalBalanceResponse): Uint8Array;
                toProtoMsg(message: _21.QueryTotalBalanceResponse): _21.QueryTotalBalanceResponseProtoMsg;
            };
            QueryAnnualizedRewardsRequest: {
                typeUrl: string;
                encode(_: _21.QueryAnnualizedRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryAnnualizedRewardsRequest;
                fromPartial(_: Partial<_21.QueryAnnualizedRewardsRequest>): _21.QueryAnnualizedRewardsRequest;
                fromAmino(_: _21.QueryAnnualizedRewardsRequestAmino): _21.QueryAnnualizedRewardsRequest;
                toAmino(_: _21.QueryAnnualizedRewardsRequest): _21.QueryAnnualizedRewardsRequestAmino;
                fromAminoMsg(object: _21.QueryAnnualizedRewardsRequestAminoMsg): _21.QueryAnnualizedRewardsRequest;
                fromProtoMsg(message: _21.QueryAnnualizedRewardsRequestProtoMsg): _21.QueryAnnualizedRewardsRequest;
                toProto(message: _21.QueryAnnualizedRewardsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryAnnualizedRewardsRequest): _21.QueryAnnualizedRewardsRequestProtoMsg;
            };
            QueryAnnualizedRewardsResponse: {
                typeUrl: string;
                encode(message: _21.QueryAnnualizedRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryAnnualizedRewardsResponse;
                fromPartial(object: Partial<_21.QueryAnnualizedRewardsResponse>): _21.QueryAnnualizedRewardsResponse;
                fromAmino(object: _21.QueryAnnualizedRewardsResponseAmino): _21.QueryAnnualizedRewardsResponse;
                toAmino(message: _21.QueryAnnualizedRewardsResponse): _21.QueryAnnualizedRewardsResponseAmino;
                fromAminoMsg(object: _21.QueryAnnualizedRewardsResponseAminoMsg): _21.QueryAnnualizedRewardsResponse;
                fromProtoMsg(message: _21.QueryAnnualizedRewardsResponseProtoMsg): _21.QueryAnnualizedRewardsResponse;
                toProto(message: _21.QueryAnnualizedRewardsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryAnnualizedRewardsResponse): _21.QueryAnnualizedRewardsResponseProtoMsg;
            };
            CommunityPoolLendDepositProposal: {
                typeUrl: string;
                encode(message: _20.CommunityPoolLendDepositProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.CommunityPoolLendDepositProposal;
                fromPartial(object: Partial<_20.CommunityPoolLendDepositProposal>): _20.CommunityPoolLendDepositProposal;
                fromAmino(object: _20.CommunityPoolLendDepositProposalAmino): _20.CommunityPoolLendDepositProposal;
                toAmino(message: _20.CommunityPoolLendDepositProposal): _20.CommunityPoolLendDepositProposalAmino;
                fromAminoMsg(object: _20.CommunityPoolLendDepositProposalAminoMsg): _20.CommunityPoolLendDepositProposal;
                fromProtoMsg(message: _20.CommunityPoolLendDepositProposalProtoMsg): _20.CommunityPoolLendDepositProposal;
                toProto(message: _20.CommunityPoolLendDepositProposal): Uint8Array;
                toProtoMsg(message: _20.CommunityPoolLendDepositProposal): _20.CommunityPoolLendDepositProposalProtoMsg;
            };
            CommunityPoolLendWithdrawProposal: {
                typeUrl: string;
                encode(message: _20.CommunityPoolLendWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.CommunityPoolLendWithdrawProposal;
                fromPartial(object: Partial<_20.CommunityPoolLendWithdrawProposal>): _20.CommunityPoolLendWithdrawProposal;
                fromAmino(object: _20.CommunityPoolLendWithdrawProposalAmino): _20.CommunityPoolLendWithdrawProposal;
                toAmino(message: _20.CommunityPoolLendWithdrawProposal): _20.CommunityPoolLendWithdrawProposalAmino;
                fromAminoMsg(object: _20.CommunityPoolLendWithdrawProposalAminoMsg): _20.CommunityPoolLendWithdrawProposal;
                fromProtoMsg(message: _20.CommunityPoolLendWithdrawProposalProtoMsg): _20.CommunityPoolLendWithdrawProposal;
                toProto(message: _20.CommunityPoolLendWithdrawProposal): Uint8Array;
                toProtoMsg(message: _20.CommunityPoolLendWithdrawProposal): _20.CommunityPoolLendWithdrawProposalProtoMsg;
            };
            CommunityCDPRepayDebtProposal: {
                typeUrl: string;
                encode(message: _20.CommunityCDPRepayDebtProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.CommunityCDPRepayDebtProposal;
                fromPartial(object: Partial<_20.CommunityCDPRepayDebtProposal>): _20.CommunityCDPRepayDebtProposal;
                fromAmino(object: _20.CommunityCDPRepayDebtProposalAmino): _20.CommunityCDPRepayDebtProposal;
                toAmino(message: _20.CommunityCDPRepayDebtProposal): _20.CommunityCDPRepayDebtProposalAmino;
                fromAminoMsg(object: _20.CommunityCDPRepayDebtProposalAminoMsg): _20.CommunityCDPRepayDebtProposal;
                fromProtoMsg(message: _20.CommunityCDPRepayDebtProposalProtoMsg): _20.CommunityCDPRepayDebtProposal;
                toProto(message: _20.CommunityCDPRepayDebtProposal): Uint8Array;
                toProtoMsg(message: _20.CommunityCDPRepayDebtProposal): _20.CommunityCDPRepayDebtProposalProtoMsg;
            };
            CommunityCDPWithdrawCollateralProposal: {
                typeUrl: string;
                encode(message: _20.CommunityCDPWithdrawCollateralProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.CommunityCDPWithdrawCollateralProposal;
                fromPartial(object: Partial<_20.CommunityCDPWithdrawCollateralProposal>): _20.CommunityCDPWithdrawCollateralProposal;
                fromAmino(object: _20.CommunityCDPWithdrawCollateralProposalAmino): _20.CommunityCDPWithdrawCollateralProposal;
                toAmino(message: _20.CommunityCDPWithdrawCollateralProposal): _20.CommunityCDPWithdrawCollateralProposalAmino;
                fromAminoMsg(object: _20.CommunityCDPWithdrawCollateralProposalAminoMsg): _20.CommunityCDPWithdrawCollateralProposal;
                fromProtoMsg(message: _20.CommunityCDPWithdrawCollateralProposalProtoMsg): _20.CommunityCDPWithdrawCollateralProposal;
                toProto(message: _20.CommunityCDPWithdrawCollateralProposal): Uint8Array;
                toProtoMsg(message: _20.CommunityCDPWithdrawCollateralProposal): _20.CommunityCDPWithdrawCollateralProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _19.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Params;
                fromPartial(object: Partial<_19.Params>): _19.Params;
                fromAmino(object: _19.ParamsAmino): _19.Params;
                toAmino(message: _19.Params): _19.ParamsAmino;
                fromAminoMsg(object: _19.ParamsAminoMsg): _19.Params;
                fromProtoMsg(message: _19.ParamsProtoMsg): _19.Params;
                toProto(message: _19.Params): Uint8Array;
                toProtoMsg(message: _19.Params): _19.ParamsProtoMsg;
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
        };
    }
    namespace earn {
        const v1beta1: {
            MsgClientImpl: typeof _280.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                vaults(request?: _27.QueryVaultsRequest): Promise<_27.QueryVaultsResponse>;
                vault(request: _27.QueryVaultRequest): Promise<_27.QueryVaultResponse>;
                deposits(request: _27.QueryDepositsRequest): Promise<_27.QueryDepositsResponse>;
                totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _248.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _29.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                    withdraw(value: _29.MsgWithdraw): {
                        typeUrl: string;
                        value: _29.MsgWithdraw;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _29.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                    withdraw(value: _29.MsgWithdraw): {
                        typeUrl: string;
                        value: _29.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.earn.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _29.MsgDeposit) => _29.MsgDepositAmino;
                    fromAmino: (object: _29.MsgDepositAmino) => _29.MsgDeposit;
                };
                "/kava.earn.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _29.MsgWithdraw) => _29.MsgWithdrawAmino;
                    fromAmino: (object: _29.MsgWithdrawAmino) => _29.MsgWithdraw;
                };
            };
            AllowedVault: {
                typeUrl: string;
                encode(message: _30.AllowedVault, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.AllowedVault;
                fromPartial(object: Partial<_30.AllowedVault>): _30.AllowedVault;
                fromAmino(object: _30.AllowedVaultAmino): _30.AllowedVault;
                toAmino(message: _30.AllowedVault): _30.AllowedVaultAmino;
                fromAminoMsg(object: _30.AllowedVaultAminoMsg): _30.AllowedVault;
                fromProtoMsg(message: _30.AllowedVaultProtoMsg): _30.AllowedVault;
                toProto(message: _30.AllowedVault): Uint8Array;
                toProtoMsg(message: _30.AllowedVault): _30.AllowedVaultProtoMsg;
            };
            VaultRecord: {
                typeUrl: string;
                encode(message: _30.VaultRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.VaultRecord;
                fromPartial(object: Partial<_30.VaultRecord>): _30.VaultRecord;
                fromAmino(object: _30.VaultRecordAmino): _30.VaultRecord;
                toAmino(message: _30.VaultRecord): _30.VaultRecordAmino;
                fromAminoMsg(object: _30.VaultRecordAminoMsg): _30.VaultRecord;
                fromProtoMsg(message: _30.VaultRecordProtoMsg): _30.VaultRecord;
                toProto(message: _30.VaultRecord): Uint8Array;
                toProtoMsg(message: _30.VaultRecord): _30.VaultRecordProtoMsg;
            };
            VaultShareRecord: {
                typeUrl: string;
                encode(message: _30.VaultShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.VaultShareRecord;
                fromPartial(object: Partial<_30.VaultShareRecord>): _30.VaultShareRecord;
                fromAmino(object: _30.VaultShareRecordAmino): _30.VaultShareRecord;
                toAmino(message: _30.VaultShareRecord): _30.VaultShareRecordAmino;
                fromAminoMsg(object: _30.VaultShareRecordAminoMsg): _30.VaultShareRecord;
                fromProtoMsg(message: _30.VaultShareRecordProtoMsg): _30.VaultShareRecord;
                toProto(message: _30.VaultShareRecord): Uint8Array;
                toProtoMsg(message: _30.VaultShareRecord): _30.VaultShareRecordProtoMsg;
            };
            VaultShare: {
                typeUrl: string;
                encode(message: _30.VaultShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.VaultShare;
                fromPartial(object: Partial<_30.VaultShare>): _30.VaultShare;
                fromAmino(object: _30.VaultShareAmino): _30.VaultShare;
                toAmino(message: _30.VaultShare): _30.VaultShareAmino;
                fromAminoMsg(object: _30.VaultShareAminoMsg): _30.VaultShare;
                fromProtoMsg(message: _30.VaultShareProtoMsg): _30.VaultShare;
                toProto(message: _30.VaultShare): Uint8Array;
                toProtoMsg(message: _30.VaultShare): _30.VaultShareProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _29.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgDeposit;
                fromPartial(object: Partial<_29.MsgDeposit>): _29.MsgDeposit;
                fromAmino(object: _29.MsgDepositAmino): _29.MsgDeposit;
                toAmino(message: _29.MsgDeposit): _29.MsgDepositAmino;
                fromAminoMsg(object: _29.MsgDepositAminoMsg): _29.MsgDeposit;
                fromProtoMsg(message: _29.MsgDepositProtoMsg): _29.MsgDeposit;
                toProto(message: _29.MsgDeposit): Uint8Array;
                toProtoMsg(message: _29.MsgDeposit): _29.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(message: _29.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgDepositResponse;
                fromPartial(object: Partial<_29.MsgDepositResponse>): _29.MsgDepositResponse;
                fromAmino(object: _29.MsgDepositResponseAmino): _29.MsgDepositResponse;
                toAmino(message: _29.MsgDepositResponse): _29.MsgDepositResponseAmino;
                fromAminoMsg(object: _29.MsgDepositResponseAminoMsg): _29.MsgDepositResponse;
                fromProtoMsg(message: _29.MsgDepositResponseProtoMsg): _29.MsgDepositResponse;
                toProto(message: _29.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _29.MsgDepositResponse): _29.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _29.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgWithdraw;
                fromPartial(object: Partial<_29.MsgWithdraw>): _29.MsgWithdraw;
                fromAmino(object: _29.MsgWithdrawAmino): _29.MsgWithdraw;
                toAmino(message: _29.MsgWithdraw): _29.MsgWithdrawAmino;
                fromAminoMsg(object: _29.MsgWithdrawAminoMsg): _29.MsgWithdraw;
                fromProtoMsg(message: _29.MsgWithdrawProtoMsg): _29.MsgWithdraw;
                toProto(message: _29.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _29.MsgWithdraw): _29.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(message: _29.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgWithdrawResponse;
                fromPartial(object: Partial<_29.MsgWithdrawResponse>): _29.MsgWithdrawResponse;
                fromAmino(object: _29.MsgWithdrawResponseAmino): _29.MsgWithdrawResponse;
                toAmino(message: _29.MsgWithdrawResponse): _29.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _29.MsgWithdrawResponseAminoMsg): _29.MsgWithdrawResponse;
                fromProtoMsg(message: _29.MsgWithdrawResponseProtoMsg): _29.MsgWithdrawResponse;
                toProto(message: _29.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawResponse): _29.MsgWithdrawResponseProtoMsg;
            };
            strategyTypeFromJSON(object: any): _28.StrategyType;
            strategyTypeToJSON(object: _28.StrategyType): string;
            StrategyType: typeof _28.StrategyType;
            StrategyTypeSDKType: typeof _28.StrategyType;
            StrategyTypeAmino: typeof _28.StrategyType;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _27.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.QueryParamsRequest;
                fromPartial(_: Partial<_27.QueryParamsRequest>): _27.QueryParamsRequest;
                fromAmino(_: _27.QueryParamsRequestAmino): _27.QueryParamsRequest;
                toAmino(_: _27.QueryParamsRequest): _27.QueryParamsRequestAmino;
                fromAminoMsg(object: _27.QueryParamsRequestAminoMsg): _27.QueryParamsRequest;
                fromProtoMsg(message: _27.QueryParamsRequestProtoMsg): _27.QueryParamsRequest;
                toProto(message: _27.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _27.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryParamsResponse;
                fromPartial(object: Partial<_27.QueryParamsResponse>): _27.QueryParamsResponse;
                fromAmino(object: _27.QueryParamsResponseAmino): _27.QueryParamsResponse;
                toAmino(message: _27.QueryParamsResponse): _27.QueryParamsResponseAmino;
                fromAminoMsg(object: _27.QueryParamsResponseAminoMsg): _27.QueryParamsResponse;
                fromProtoMsg(message: _27.QueryParamsResponseProtoMsg): _27.QueryParamsResponse;
                toProto(message: _27.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseProtoMsg;
            };
            QueryVaultsRequest: {
                typeUrl: string;
                encode(_: _27.QueryVaultsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.QueryVaultsRequest;
                fromPartial(_: Partial<_27.QueryVaultsRequest>): _27.QueryVaultsRequest;
                fromAmino(_: _27.QueryVaultsRequestAmino): _27.QueryVaultsRequest;
                toAmino(_: _27.QueryVaultsRequest): _27.QueryVaultsRequestAmino;
                fromAminoMsg(object: _27.QueryVaultsRequestAminoMsg): _27.QueryVaultsRequest;
                fromProtoMsg(message: _27.QueryVaultsRequestProtoMsg): _27.QueryVaultsRequest;
                toProto(message: _27.QueryVaultsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryVaultsRequest): _27.QueryVaultsRequestProtoMsg;
            };
            QueryVaultsResponse: {
                typeUrl: string;
                encode(message: _27.QueryVaultsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryVaultsResponse;
                fromPartial(object: Partial<_27.QueryVaultsResponse>): _27.QueryVaultsResponse;
                fromAmino(object: _27.QueryVaultsResponseAmino): _27.QueryVaultsResponse;
                toAmino(message: _27.QueryVaultsResponse): _27.QueryVaultsResponseAmino;
                fromAminoMsg(object: _27.QueryVaultsResponseAminoMsg): _27.QueryVaultsResponse;
                fromProtoMsg(message: _27.QueryVaultsResponseProtoMsg): _27.QueryVaultsResponse;
                toProto(message: _27.QueryVaultsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryVaultsResponse): _27.QueryVaultsResponseProtoMsg;
            };
            QueryVaultRequest: {
                typeUrl: string;
                encode(message: _27.QueryVaultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryVaultRequest;
                fromPartial(object: Partial<_27.QueryVaultRequest>): _27.QueryVaultRequest;
                fromAmino(object: _27.QueryVaultRequestAmino): _27.QueryVaultRequest;
                toAmino(message: _27.QueryVaultRequest): _27.QueryVaultRequestAmino;
                fromAminoMsg(object: _27.QueryVaultRequestAminoMsg): _27.QueryVaultRequest;
                fromProtoMsg(message: _27.QueryVaultRequestProtoMsg): _27.QueryVaultRequest;
                toProto(message: _27.QueryVaultRequest): Uint8Array;
                toProtoMsg(message: _27.QueryVaultRequest): _27.QueryVaultRequestProtoMsg;
            };
            QueryVaultResponse: {
                typeUrl: string;
                encode(message: _27.QueryVaultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryVaultResponse;
                fromPartial(object: Partial<_27.QueryVaultResponse>): _27.QueryVaultResponse;
                fromAmino(object: _27.QueryVaultResponseAmino): _27.QueryVaultResponse;
                toAmino(message: _27.QueryVaultResponse): _27.QueryVaultResponseAmino;
                fromAminoMsg(object: _27.QueryVaultResponseAminoMsg): _27.QueryVaultResponse;
                fromProtoMsg(message: _27.QueryVaultResponseProtoMsg): _27.QueryVaultResponse;
                toProto(message: _27.QueryVaultResponse): Uint8Array;
                toProtoMsg(message: _27.QueryVaultResponse): _27.QueryVaultResponseProtoMsg;
            };
            VaultResponse: {
                typeUrl: string;
                encode(message: _27.VaultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.VaultResponse;
                fromPartial(object: Partial<_27.VaultResponse>): _27.VaultResponse;
                fromAmino(object: _27.VaultResponseAmino): _27.VaultResponse;
                toAmino(message: _27.VaultResponse): _27.VaultResponseAmino;
                fromAminoMsg(object: _27.VaultResponseAminoMsg): _27.VaultResponse;
                fromProtoMsg(message: _27.VaultResponseProtoMsg): _27.VaultResponse;
                toProto(message: _27.VaultResponse): Uint8Array;
                toProtoMsg(message: _27.VaultResponse): _27.VaultResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _27.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDepositsRequest;
                fromPartial(object: Partial<_27.QueryDepositsRequest>): _27.QueryDepositsRequest;
                fromAmino(object: _27.QueryDepositsRequestAmino): _27.QueryDepositsRequest;
                toAmino(message: _27.QueryDepositsRequest): _27.QueryDepositsRequestAmino;
                fromAminoMsg(object: _27.QueryDepositsRequestAminoMsg): _27.QueryDepositsRequest;
                fromProtoMsg(message: _27.QueryDepositsRequestProtoMsg): _27.QueryDepositsRequest;
                toProto(message: _27.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDepositsRequest): _27.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _27.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDepositsResponse;
                fromPartial(object: Partial<_27.QueryDepositsResponse>): _27.QueryDepositsResponse;
                fromAmino(object: _27.QueryDepositsResponseAmino): _27.QueryDepositsResponse;
                toAmino(message: _27.QueryDepositsResponse): _27.QueryDepositsResponseAmino;
                fromAminoMsg(object: _27.QueryDepositsResponseAminoMsg): _27.QueryDepositsResponse;
                fromProtoMsg(message: _27.QueryDepositsResponseProtoMsg): _27.QueryDepositsResponse;
                toProto(message: _27.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDepositsResponse): _27.QueryDepositsResponseProtoMsg;
            };
            DepositResponse: {
                typeUrl: string;
                encode(message: _27.DepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.DepositResponse;
                fromPartial(object: Partial<_27.DepositResponse>): _27.DepositResponse;
                fromAmino(object: _27.DepositResponseAmino): _27.DepositResponse;
                toAmino(message: _27.DepositResponse): _27.DepositResponseAmino;
                fromAminoMsg(object: _27.DepositResponseAminoMsg): _27.DepositResponse;
                fromProtoMsg(message: _27.DepositResponseProtoMsg): _27.DepositResponse;
                toProto(message: _27.DepositResponse): Uint8Array;
                toProtoMsg(message: _27.DepositResponse): _27.DepositResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(_: _27.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_27.QueryTotalSupplyRequest>): _27.QueryTotalSupplyRequest;
                fromAmino(_: _27.QueryTotalSupplyRequestAmino): _27.QueryTotalSupplyRequest;
                toAmino(_: _27.QueryTotalSupplyRequest): _27.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _27.QueryTotalSupplyRequestAminoMsg): _27.QueryTotalSupplyRequest;
                fromProtoMsg(message: _27.QueryTotalSupplyRequestProtoMsg): _27.QueryTotalSupplyRequest;
                toProto(message: _27.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _27.QueryTotalSupplyRequest): _27.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _27.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_27.QueryTotalSupplyResponse>): _27.QueryTotalSupplyResponse;
                fromAmino(object: _27.QueryTotalSupplyResponseAmino): _27.QueryTotalSupplyResponse;
                toAmino(message: _27.QueryTotalSupplyResponse): _27.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _27.QueryTotalSupplyResponseAminoMsg): _27.QueryTotalSupplyResponse;
                fromProtoMsg(message: _27.QueryTotalSupplyResponseProtoMsg): _27.QueryTotalSupplyResponse;
                toProto(message: _27.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _27.QueryTotalSupplyResponse): _27.QueryTotalSupplyResponseProtoMsg;
            };
            CommunityPoolDepositProposal: {
                typeUrl: string;
                encode(message: _26.CommunityPoolDepositProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.CommunityPoolDepositProposal;
                fromPartial(object: Partial<_26.CommunityPoolDepositProposal>): _26.CommunityPoolDepositProposal;
                fromAmino(object: _26.CommunityPoolDepositProposalAmino): _26.CommunityPoolDepositProposal;
                toAmino(message: _26.CommunityPoolDepositProposal): _26.CommunityPoolDepositProposalAmino;
                fromAminoMsg(object: _26.CommunityPoolDepositProposalAminoMsg): _26.CommunityPoolDepositProposal;
                fromProtoMsg(message: _26.CommunityPoolDepositProposalProtoMsg): _26.CommunityPoolDepositProposal;
                toProto(message: _26.CommunityPoolDepositProposal): Uint8Array;
                toProtoMsg(message: _26.CommunityPoolDepositProposal): _26.CommunityPoolDepositProposalProtoMsg;
            };
            CommunityPoolDepositProposalJSON: {
                typeUrl: string;
                encode(message: _26.CommunityPoolDepositProposalJSON, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.CommunityPoolDepositProposalJSON;
                fromPartial(object: Partial<_26.CommunityPoolDepositProposalJSON>): _26.CommunityPoolDepositProposalJSON;
                fromAmino(object: _26.CommunityPoolDepositProposalJSONAmino): _26.CommunityPoolDepositProposalJSON;
                toAmino(message: _26.CommunityPoolDepositProposalJSON): _26.CommunityPoolDepositProposalJSONAmino;
                fromAminoMsg(object: _26.CommunityPoolDepositProposalJSONAminoMsg): _26.CommunityPoolDepositProposalJSON;
                fromProtoMsg(message: _26.CommunityPoolDepositProposalJSONProtoMsg): _26.CommunityPoolDepositProposalJSON;
                toProto(message: _26.CommunityPoolDepositProposalJSON): Uint8Array;
                toProtoMsg(message: _26.CommunityPoolDepositProposalJSON): _26.CommunityPoolDepositProposalJSONProtoMsg;
            };
            CommunityPoolWithdrawProposal: {
                typeUrl: string;
                encode(message: _26.CommunityPoolWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.CommunityPoolWithdrawProposal;
                fromPartial(object: Partial<_26.CommunityPoolWithdrawProposal>): _26.CommunityPoolWithdrawProposal;
                fromAmino(object: _26.CommunityPoolWithdrawProposalAmino): _26.CommunityPoolWithdrawProposal;
                toAmino(message: _26.CommunityPoolWithdrawProposal): _26.CommunityPoolWithdrawProposalAmino;
                fromAminoMsg(object: _26.CommunityPoolWithdrawProposalAminoMsg): _26.CommunityPoolWithdrawProposal;
                fromProtoMsg(message: _26.CommunityPoolWithdrawProposalProtoMsg): _26.CommunityPoolWithdrawProposal;
                toProto(message: _26.CommunityPoolWithdrawProposal): Uint8Array;
                toProtoMsg(message: _26.CommunityPoolWithdrawProposal): _26.CommunityPoolWithdrawProposalProtoMsg;
            };
            CommunityPoolWithdrawProposalJSON: {
                typeUrl: string;
                encode(message: _26.CommunityPoolWithdrawProposalJSON, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.CommunityPoolWithdrawProposalJSON;
                fromPartial(object: Partial<_26.CommunityPoolWithdrawProposalJSON>): _26.CommunityPoolWithdrawProposalJSON;
                fromAmino(object: _26.CommunityPoolWithdrawProposalJSONAmino): _26.CommunityPoolWithdrawProposalJSON;
                toAmino(message: _26.CommunityPoolWithdrawProposalJSON): _26.CommunityPoolWithdrawProposalJSONAmino;
                fromAminoMsg(object: _26.CommunityPoolWithdrawProposalJSONAminoMsg): _26.CommunityPoolWithdrawProposalJSON;
                fromProtoMsg(message: _26.CommunityPoolWithdrawProposalJSONProtoMsg): _26.CommunityPoolWithdrawProposalJSON;
                toProto(message: _26.CommunityPoolWithdrawProposalJSON): Uint8Array;
                toProtoMsg(message: _26.CommunityPoolWithdrawProposalJSON): _26.CommunityPoolWithdrawProposalJSONProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _25.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Params;
                fromPartial(object: Partial<_25.Params>): _25.Params;
                fromAmino(object: _25.ParamsAmino): _25.Params;
                toAmino(message: _25.Params): _25.ParamsAmino;
                fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
                fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
                toProto(message: _25.Params): Uint8Array;
                toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _24.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
                fromAmino(object: _24.GenesisStateAmino): _24.GenesisState;
                toAmino(message: _24.GenesisState): _24.GenesisStateAmino;
                fromAminoMsg(object: _24.GenesisStateAminoMsg): _24.GenesisState;
                fromProtoMsg(message: _24.GenesisStateProtoMsg): _24.GenesisState;
                toProto(message: _24.GenesisState): Uint8Array;
                toProtoMsg(message: _24.GenesisState): _24.GenesisStateProtoMsg;
            };
        };
    }
    namespace evmutil {
        const v1beta1: {
            MsgClientImpl: typeof _281.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                deployedCosmosCoinContracts(request: _33.QueryDeployedCosmosCoinContractsRequest): Promise<_33.QueryDeployedCosmosCoinContractsResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoinToERC20(value: _34.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20ToCoin(value: _34.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertCosmosCoinToERC20(value: _34.MsgConvertCosmosCoinToERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertCosmosCoinFromERC20(value: _34.MsgConvertCosmosCoinFromERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoinToERC20(value: _34.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: _34.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: _34.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: _34.MsgConvertERC20ToCoin;
                    };
                    convertCosmosCoinToERC20(value: _34.MsgConvertCosmosCoinToERC20): {
                        typeUrl: string;
                        value: _34.MsgConvertCosmosCoinToERC20;
                    };
                    convertCosmosCoinFromERC20(value: _34.MsgConvertCosmosCoinFromERC20): {
                        typeUrl: string;
                        value: _34.MsgConvertCosmosCoinFromERC20;
                    };
                };
                fromJSON: {
                    convertCoinToERC20(value: any): {
                        typeUrl: string;
                        value: _34.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: any): {
                        typeUrl: string;
                        value: _34.MsgConvertERC20ToCoin;
                    };
                    convertCosmosCoinToERC20(value: any): {
                        typeUrl: string;
                        value: _34.MsgConvertCosmosCoinToERC20;
                    };
                    convertCosmosCoinFromERC20(value: any): {
                        typeUrl: string;
                        value: _34.MsgConvertCosmosCoinFromERC20;
                    };
                };
                fromPartial: {
                    convertCoinToERC20(value: _34.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: _34.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: _34.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: _34.MsgConvertERC20ToCoin;
                    };
                    convertCosmosCoinToERC20(value: _34.MsgConvertCosmosCoinToERC20): {
                        typeUrl: string;
                        value: _34.MsgConvertCosmosCoinToERC20;
                    };
                    convertCosmosCoinFromERC20(value: _34.MsgConvertCosmosCoinFromERC20): {
                        typeUrl: string;
                        value: _34.MsgConvertCosmosCoinFromERC20;
                    };
                };
            };
            AminoConverter: {
                "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
                    aminoType: string;
                    toAmino: (message: _34.MsgConvertCoinToERC20) => _34.MsgConvertCoinToERC20Amino;
                    fromAmino: (object: _34.MsgConvertCoinToERC20Amino) => _34.MsgConvertCoinToERC20;
                };
                "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
                    aminoType: string;
                    toAmino: (message: _34.MsgConvertERC20ToCoin) => _34.MsgConvertERC20ToCoinAmino;
                    fromAmino: (object: _34.MsgConvertERC20ToCoinAmino) => _34.MsgConvertERC20ToCoin;
                };
                "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20": {
                    aminoType: string;
                    toAmino: (message: _34.MsgConvertCosmosCoinToERC20) => _34.MsgConvertCosmosCoinToERC20Amino;
                    fromAmino: (object: _34.MsgConvertCosmosCoinToERC20Amino) => _34.MsgConvertCosmosCoinToERC20;
                };
                "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20": {
                    aminoType: string;
                    toAmino: (message: _34.MsgConvertCosmosCoinFromERC20) => _34.MsgConvertCosmosCoinFromERC20Amino;
                    fromAmino: (object: _34.MsgConvertCosmosCoinFromERC20Amino) => _34.MsgConvertCosmosCoinFromERC20;
                };
            };
            MsgConvertCoinToERC20: {
                typeUrl: string;
                encode(message: _34.MsgConvertCoinToERC20, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgConvertCoinToERC20;
                fromPartial(object: Partial<_34.MsgConvertCoinToERC20>): _34.MsgConvertCoinToERC20;
                fromAmino(object: _34.MsgConvertCoinToERC20Amino): _34.MsgConvertCoinToERC20;
                toAmino(message: _34.MsgConvertCoinToERC20): _34.MsgConvertCoinToERC20Amino;
                fromAminoMsg(object: _34.MsgConvertCoinToERC20AminoMsg): _34.MsgConvertCoinToERC20;
                fromProtoMsg(message: _34.MsgConvertCoinToERC20ProtoMsg): _34.MsgConvertCoinToERC20;
                toProto(message: _34.MsgConvertCoinToERC20): Uint8Array;
                toProtoMsg(message: _34.MsgConvertCoinToERC20): _34.MsgConvertCoinToERC20ProtoMsg;
            };
            MsgConvertCoinToERC20Response: {
                typeUrl: string;
                encode(_: _34.MsgConvertCoinToERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgConvertCoinToERC20Response;
                fromPartial(_: Partial<_34.MsgConvertCoinToERC20Response>): _34.MsgConvertCoinToERC20Response;
                fromAmino(_: _34.MsgConvertCoinToERC20ResponseAmino): _34.MsgConvertCoinToERC20Response;
                toAmino(_: _34.MsgConvertCoinToERC20Response): _34.MsgConvertCoinToERC20ResponseAmino;
                fromAminoMsg(object: _34.MsgConvertCoinToERC20ResponseAminoMsg): _34.MsgConvertCoinToERC20Response;
                fromProtoMsg(message: _34.MsgConvertCoinToERC20ResponseProtoMsg): _34.MsgConvertCoinToERC20Response;
                toProto(message: _34.MsgConvertCoinToERC20Response): Uint8Array;
                toProtoMsg(message: _34.MsgConvertCoinToERC20Response): _34.MsgConvertCoinToERC20ResponseProtoMsg;
            };
            MsgConvertERC20ToCoin: {
                typeUrl: string;
                encode(message: _34.MsgConvertERC20ToCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgConvertERC20ToCoin;
                fromPartial(object: Partial<_34.MsgConvertERC20ToCoin>): _34.MsgConvertERC20ToCoin;
                fromAmino(object: _34.MsgConvertERC20ToCoinAmino): _34.MsgConvertERC20ToCoin;
                toAmino(message: _34.MsgConvertERC20ToCoin): _34.MsgConvertERC20ToCoinAmino;
                fromAminoMsg(object: _34.MsgConvertERC20ToCoinAminoMsg): _34.MsgConvertERC20ToCoin;
                fromProtoMsg(message: _34.MsgConvertERC20ToCoinProtoMsg): _34.MsgConvertERC20ToCoin;
                toProto(message: _34.MsgConvertERC20ToCoin): Uint8Array;
                toProtoMsg(message: _34.MsgConvertERC20ToCoin): _34.MsgConvertERC20ToCoinProtoMsg;
            };
            MsgConvertERC20ToCoinResponse: {
                typeUrl: string;
                encode(_: _34.MsgConvertERC20ToCoinResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgConvertERC20ToCoinResponse;
                fromPartial(_: Partial<_34.MsgConvertERC20ToCoinResponse>): _34.MsgConvertERC20ToCoinResponse;
                fromAmino(_: _34.MsgConvertERC20ToCoinResponseAmino): _34.MsgConvertERC20ToCoinResponse;
                toAmino(_: _34.MsgConvertERC20ToCoinResponse): _34.MsgConvertERC20ToCoinResponseAmino;
                fromAminoMsg(object: _34.MsgConvertERC20ToCoinResponseAminoMsg): _34.MsgConvertERC20ToCoinResponse;
                fromProtoMsg(message: _34.MsgConvertERC20ToCoinResponseProtoMsg): _34.MsgConvertERC20ToCoinResponse;
                toProto(message: _34.MsgConvertERC20ToCoinResponse): Uint8Array;
                toProtoMsg(message: _34.MsgConvertERC20ToCoinResponse): _34.MsgConvertERC20ToCoinResponseProtoMsg;
            };
            MsgConvertCosmosCoinToERC20: {
                typeUrl: string;
                encode(message: _34.MsgConvertCosmosCoinToERC20, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgConvertCosmosCoinToERC20;
                fromPartial(object: Partial<_34.MsgConvertCosmosCoinToERC20>): _34.MsgConvertCosmosCoinToERC20;
                fromAmino(object: _34.MsgConvertCosmosCoinToERC20Amino): _34.MsgConvertCosmosCoinToERC20;
                toAmino(message: _34.MsgConvertCosmosCoinToERC20): _34.MsgConvertCosmosCoinToERC20Amino;
                fromAminoMsg(object: _34.MsgConvertCosmosCoinToERC20AminoMsg): _34.MsgConvertCosmosCoinToERC20;
                fromProtoMsg(message: _34.MsgConvertCosmosCoinToERC20ProtoMsg): _34.MsgConvertCosmosCoinToERC20;
                toProto(message: _34.MsgConvertCosmosCoinToERC20): Uint8Array;
                toProtoMsg(message: _34.MsgConvertCosmosCoinToERC20): _34.MsgConvertCosmosCoinToERC20ProtoMsg;
            };
            MsgConvertCosmosCoinToERC20Response: {
                typeUrl: string;
                encode(_: _34.MsgConvertCosmosCoinToERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgConvertCosmosCoinToERC20Response;
                fromPartial(_: Partial<_34.MsgConvertCosmosCoinToERC20Response>): _34.MsgConvertCosmosCoinToERC20Response;
                fromAmino(_: _34.MsgConvertCosmosCoinToERC20ResponseAmino): _34.MsgConvertCosmosCoinToERC20Response;
                toAmino(_: _34.MsgConvertCosmosCoinToERC20Response): _34.MsgConvertCosmosCoinToERC20ResponseAmino;
                fromAminoMsg(object: _34.MsgConvertCosmosCoinToERC20ResponseAminoMsg): _34.MsgConvertCosmosCoinToERC20Response;
                fromProtoMsg(message: _34.MsgConvertCosmosCoinToERC20ResponseProtoMsg): _34.MsgConvertCosmosCoinToERC20Response;
                toProto(message: _34.MsgConvertCosmosCoinToERC20Response): Uint8Array;
                toProtoMsg(message: _34.MsgConvertCosmosCoinToERC20Response): _34.MsgConvertCosmosCoinToERC20ResponseProtoMsg;
            };
            MsgConvertCosmosCoinFromERC20: {
                typeUrl: string;
                encode(message: _34.MsgConvertCosmosCoinFromERC20, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MsgConvertCosmosCoinFromERC20;
                fromPartial(object: Partial<_34.MsgConvertCosmosCoinFromERC20>): _34.MsgConvertCosmosCoinFromERC20;
                fromAmino(object: _34.MsgConvertCosmosCoinFromERC20Amino): _34.MsgConvertCosmosCoinFromERC20;
                toAmino(message: _34.MsgConvertCosmosCoinFromERC20): _34.MsgConvertCosmosCoinFromERC20Amino;
                fromAminoMsg(object: _34.MsgConvertCosmosCoinFromERC20AminoMsg): _34.MsgConvertCosmosCoinFromERC20;
                fromProtoMsg(message: _34.MsgConvertCosmosCoinFromERC20ProtoMsg): _34.MsgConvertCosmosCoinFromERC20;
                toProto(message: _34.MsgConvertCosmosCoinFromERC20): Uint8Array;
                toProtoMsg(message: _34.MsgConvertCosmosCoinFromERC20): _34.MsgConvertCosmosCoinFromERC20ProtoMsg;
            };
            MsgConvertCosmosCoinFromERC20Response: {
                typeUrl: string;
                encode(_: _34.MsgConvertCosmosCoinFromERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MsgConvertCosmosCoinFromERC20Response;
                fromPartial(_: Partial<_34.MsgConvertCosmosCoinFromERC20Response>): _34.MsgConvertCosmosCoinFromERC20Response;
                fromAmino(_: _34.MsgConvertCosmosCoinFromERC20ResponseAmino): _34.MsgConvertCosmosCoinFromERC20Response;
                toAmino(_: _34.MsgConvertCosmosCoinFromERC20Response): _34.MsgConvertCosmosCoinFromERC20ResponseAmino;
                fromAminoMsg(object: _34.MsgConvertCosmosCoinFromERC20ResponseAminoMsg): _34.MsgConvertCosmosCoinFromERC20Response;
                fromProtoMsg(message: _34.MsgConvertCosmosCoinFromERC20ResponseProtoMsg): _34.MsgConvertCosmosCoinFromERC20Response;
                toProto(message: _34.MsgConvertCosmosCoinFromERC20Response): Uint8Array;
                toProtoMsg(message: _34.MsgConvertCosmosCoinFromERC20Response): _34.MsgConvertCosmosCoinFromERC20ResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _33.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
                fromAmino(_: _33.QueryParamsRequestAmino): _33.QueryParamsRequest;
                toAmino(_: _33.QueryParamsRequest): _33.QueryParamsRequestAmino;
                fromAminoMsg(object: _33.QueryParamsRequestAminoMsg): _33.QueryParamsRequest;
                fromProtoMsg(message: _33.QueryParamsRequestProtoMsg): _33.QueryParamsRequest;
                toProto(message: _33.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _33.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
                fromAmino(object: _33.QueryParamsResponseAmino): _33.QueryParamsResponse;
                toAmino(message: _33.QueryParamsResponse): _33.QueryParamsResponseAmino;
                fromAminoMsg(object: _33.QueryParamsResponseAminoMsg): _33.QueryParamsResponse;
                fromProtoMsg(message: _33.QueryParamsResponseProtoMsg): _33.QueryParamsResponse;
                toProto(message: _33.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseProtoMsg;
            };
            QueryDeployedCosmosCoinContractsRequest: {
                typeUrl: string;
                encode(message: _33.QueryDeployedCosmosCoinContractsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDeployedCosmosCoinContractsRequest;
                fromPartial(object: Partial<_33.QueryDeployedCosmosCoinContractsRequest>): _33.QueryDeployedCosmosCoinContractsRequest;
                fromAmino(object: _33.QueryDeployedCosmosCoinContractsRequestAmino): _33.QueryDeployedCosmosCoinContractsRequest;
                toAmino(message: _33.QueryDeployedCosmosCoinContractsRequest): _33.QueryDeployedCosmosCoinContractsRequestAmino;
                fromAminoMsg(object: _33.QueryDeployedCosmosCoinContractsRequestAminoMsg): _33.QueryDeployedCosmosCoinContractsRequest;
                fromProtoMsg(message: _33.QueryDeployedCosmosCoinContractsRequestProtoMsg): _33.QueryDeployedCosmosCoinContractsRequest;
                toProto(message: _33.QueryDeployedCosmosCoinContractsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDeployedCosmosCoinContractsRequest): _33.QueryDeployedCosmosCoinContractsRequestProtoMsg;
            };
            QueryDeployedCosmosCoinContractsResponse: {
                typeUrl: string;
                encode(message: _33.QueryDeployedCosmosCoinContractsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.QueryDeployedCosmosCoinContractsResponse;
                fromPartial(object: Partial<_33.QueryDeployedCosmosCoinContractsResponse>): _33.QueryDeployedCosmosCoinContractsResponse;
                fromAmino(object: _33.QueryDeployedCosmosCoinContractsResponseAmino): _33.QueryDeployedCosmosCoinContractsResponse;
                toAmino(message: _33.QueryDeployedCosmosCoinContractsResponse): _33.QueryDeployedCosmosCoinContractsResponseAmino;
                fromAminoMsg(object: _33.QueryDeployedCosmosCoinContractsResponseAminoMsg): _33.QueryDeployedCosmosCoinContractsResponse;
                fromProtoMsg(message: _33.QueryDeployedCosmosCoinContractsResponseProtoMsg): _33.QueryDeployedCosmosCoinContractsResponse;
                toProto(message: _33.QueryDeployedCosmosCoinContractsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDeployedCosmosCoinContractsResponse): _33.QueryDeployedCosmosCoinContractsResponseProtoMsg;
            };
            DeployedCosmosCoinContract: {
                typeUrl: string;
                encode(message: _33.DeployedCosmosCoinContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DeployedCosmosCoinContract;
                fromPartial(object: Partial<_33.DeployedCosmosCoinContract>): _33.DeployedCosmosCoinContract;
                fromAmino(object: _33.DeployedCosmosCoinContractAmino): _33.DeployedCosmosCoinContract;
                toAmino(message: _33.DeployedCosmosCoinContract): _33.DeployedCosmosCoinContractAmino;
                fromAminoMsg(object: _33.DeployedCosmosCoinContractAminoMsg): _33.DeployedCosmosCoinContract;
                fromProtoMsg(message: _33.DeployedCosmosCoinContractProtoMsg): _33.DeployedCosmosCoinContract;
                toProto(message: _33.DeployedCosmosCoinContract): Uint8Array;
                toProtoMsg(message: _33.DeployedCosmosCoinContract): _33.DeployedCosmosCoinContractProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            Account: {
                typeUrl: string;
                encode(message: _32.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Account;
                fromPartial(object: Partial<_32.Account>): _32.Account;
                fromAmino(object: _32.AccountAmino): _32.Account;
                toAmino(message: _32.Account): _32.AccountAmino;
                fromAminoMsg(object: _32.AccountAminoMsg): _32.Account;
                fromProtoMsg(message: _32.AccountProtoMsg): _32.Account;
                toProto(message: _32.Account): Uint8Array;
                toProtoMsg(message: _32.Account): _32.AccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _32.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Params;
                fromPartial(object: Partial<_32.Params>): _32.Params;
                fromAmino(object: _32.ParamsAmino): _32.Params;
                toAmino(message: _32.Params): _32.ParamsAmino;
                fromAminoMsg(object: _32.ParamsAminoMsg): _32.Params;
                fromProtoMsg(message: _32.ParamsProtoMsg): _32.Params;
                toProto(message: _32.Params): Uint8Array;
                toProtoMsg(message: _32.Params): _32.ParamsProtoMsg;
            };
            ConversionPair: {
                typeUrl: string;
                encode(message: _31.ConversionPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.ConversionPair;
                fromPartial(object: Partial<_31.ConversionPair>): _31.ConversionPair;
                fromAmino(object: _31.ConversionPairAmino): _31.ConversionPair;
                toAmino(message: _31.ConversionPair): _31.ConversionPairAmino;
                fromAminoMsg(object: _31.ConversionPairAminoMsg): _31.ConversionPair;
                fromProtoMsg(message: _31.ConversionPairProtoMsg): _31.ConversionPair;
                toProto(message: _31.ConversionPair): Uint8Array;
                toProtoMsg(message: _31.ConversionPair): _31.ConversionPairProtoMsg;
            };
            AllowedCosmosCoinERC20Token: {
                typeUrl: string;
                encode(message: _31.AllowedCosmosCoinERC20Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.AllowedCosmosCoinERC20Token;
                fromPartial(object: Partial<_31.AllowedCosmosCoinERC20Token>): _31.AllowedCosmosCoinERC20Token;
                fromAmino(object: _31.AllowedCosmosCoinERC20TokenAmino): _31.AllowedCosmosCoinERC20Token;
                toAmino(message: _31.AllowedCosmosCoinERC20Token): _31.AllowedCosmosCoinERC20TokenAmino;
                fromAminoMsg(object: _31.AllowedCosmosCoinERC20TokenAminoMsg): _31.AllowedCosmosCoinERC20Token;
                fromProtoMsg(message: _31.AllowedCosmosCoinERC20TokenProtoMsg): _31.AllowedCosmosCoinERC20Token;
                toProto(message: _31.AllowedCosmosCoinERC20Token): Uint8Array;
                toProtoMsg(message: _31.AllowedCosmosCoinERC20Token): _31.AllowedCosmosCoinERC20TokenProtoMsg;
            };
        };
    }
    namespace hard {
        const v1beta1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                accounts(request?: _37.QueryAccountsRequest): Promise<_37.QueryAccountsResponse>;
                deposits(request: _37.QueryDepositsRequest): Promise<_37.QueryDepositsResponse>;
                unsyncedDeposits(request: _37.QueryUnsyncedDepositsRequest): Promise<_37.QueryUnsyncedDepositsResponse>;
                totalDeposited(request: _37.QueryTotalDepositedRequest): Promise<_37.QueryTotalDepositedResponse>;
                borrows(request: _37.QueryBorrowsRequest): Promise<_37.QueryBorrowsResponse>;
                unsyncedBorrows(request: _37.QueryUnsyncedBorrowsRequest): Promise<_37.QueryUnsyncedBorrowsResponse>;
                totalBorrowed(request: _37.QueryTotalBorrowedRequest): Promise<_37.QueryTotalBorrowedResponse>;
                interestRate(request: _37.QueryInterestRateRequest): Promise<_37.QueryInterestRateResponse>;
                reserves(request: _37.QueryReservesRequest): Promise<_37.QueryReservesResponse>;
                interestFactors(request: _37.QueryInterestFactorsRequest): Promise<_37.QueryInterestFactorsResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _38.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    borrow(value: _38.MsgBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repay(value: _38.MsgRepay): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _38.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: _38.MsgDeposit;
                    };
                    withdraw(value: _38.MsgWithdraw): {
                        typeUrl: string;
                        value: _38.MsgWithdraw;
                    };
                    borrow(value: _38.MsgBorrow): {
                        typeUrl: string;
                        value: _38.MsgBorrow;
                    };
                    repay(value: _38.MsgRepay): {
                        typeUrl: string;
                        value: _38.MsgRepay;
                    };
                    liquidate(value: _38.MsgLiquidate): {
                        typeUrl: string;
                        value: _38.MsgLiquidate;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _38.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _38.MsgWithdraw;
                    };
                    borrow(value: any): {
                        typeUrl: string;
                        value: _38.MsgBorrow;
                    };
                    repay(value: any): {
                        typeUrl: string;
                        value: _38.MsgRepay;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _38.MsgLiquidate;
                    };
                };
                fromPartial: {
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: _38.MsgDeposit;
                    };
                    withdraw(value: _38.MsgWithdraw): {
                        typeUrl: string;
                        value: _38.MsgWithdraw;
                    };
                    borrow(value: _38.MsgBorrow): {
                        typeUrl: string;
                        value: _38.MsgBorrow;
                    };
                    repay(value: _38.MsgRepay): {
                        typeUrl: string;
                        value: _38.MsgRepay;
                    };
                    liquidate(value: _38.MsgLiquidate): {
                        typeUrl: string;
                        value: _38.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.hard.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _38.MsgDeposit) => _38.MsgDepositAmino;
                    fromAmino: (object: _38.MsgDepositAmino) => _38.MsgDeposit;
                };
                "/kava.hard.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _38.MsgWithdraw) => _38.MsgWithdrawAmino;
                    fromAmino: (object: _38.MsgWithdrawAmino) => _38.MsgWithdraw;
                };
                "/kava.hard.v1beta1.MsgBorrow": {
                    aminoType: string;
                    toAmino: (message: _38.MsgBorrow) => _38.MsgBorrowAmino;
                    fromAmino: (object: _38.MsgBorrowAmino) => _38.MsgBorrow;
                };
                "/kava.hard.v1beta1.MsgRepay": {
                    aminoType: string;
                    toAmino: (message: _38.MsgRepay) => _38.MsgRepayAmino;
                    fromAmino: (object: _38.MsgRepayAmino) => _38.MsgRepay;
                };
                "/kava.hard.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: (message: _38.MsgLiquidate) => _38.MsgLiquidateAmino;
                    fromAmino: (object: _38.MsgLiquidateAmino) => _38.MsgLiquidate;
                };
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _38.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgDeposit;
                fromPartial(object: Partial<_38.MsgDeposit>): _38.MsgDeposit;
                fromAmino(object: _38.MsgDepositAmino): _38.MsgDeposit;
                toAmino(message: _38.MsgDeposit): _38.MsgDepositAmino;
                fromAminoMsg(object: _38.MsgDepositAminoMsg): _38.MsgDeposit;
                fromProtoMsg(message: _38.MsgDepositProtoMsg): _38.MsgDeposit;
                toProto(message: _38.MsgDeposit): Uint8Array;
                toProtoMsg(message: _38.MsgDeposit): _38.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _38.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgDepositResponse;
                fromPartial(_: Partial<_38.MsgDepositResponse>): _38.MsgDepositResponse;
                fromAmino(_: _38.MsgDepositResponseAmino): _38.MsgDepositResponse;
                toAmino(_: _38.MsgDepositResponse): _38.MsgDepositResponseAmino;
                fromAminoMsg(object: _38.MsgDepositResponseAminoMsg): _38.MsgDepositResponse;
                fromProtoMsg(message: _38.MsgDepositResponseProtoMsg): _38.MsgDepositResponse;
                toProto(message: _38.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _38.MsgDepositResponse): _38.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _38.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgWithdraw;
                fromPartial(object: Partial<_38.MsgWithdraw>): _38.MsgWithdraw;
                fromAmino(object: _38.MsgWithdrawAmino): _38.MsgWithdraw;
                toAmino(message: _38.MsgWithdraw): _38.MsgWithdrawAmino;
                fromAminoMsg(object: _38.MsgWithdrawAminoMsg): _38.MsgWithdraw;
                fromProtoMsg(message: _38.MsgWithdrawProtoMsg): _38.MsgWithdraw;
                toProto(message: _38.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _38.MsgWithdraw): _38.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _38.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgWithdrawResponse;
                fromPartial(_: Partial<_38.MsgWithdrawResponse>): _38.MsgWithdrawResponse;
                fromAmino(_: _38.MsgWithdrawResponseAmino): _38.MsgWithdrawResponse;
                toAmino(_: _38.MsgWithdrawResponse): _38.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _38.MsgWithdrawResponseAminoMsg): _38.MsgWithdrawResponse;
                fromProtoMsg(message: _38.MsgWithdrawResponseProtoMsg): _38.MsgWithdrawResponse;
                toProto(message: _38.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _38.MsgWithdrawResponse): _38.MsgWithdrawResponseProtoMsg;
            };
            MsgBorrow: {
                typeUrl: string;
                encode(message: _38.MsgBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgBorrow;
                fromPartial(object: Partial<_38.MsgBorrow>): _38.MsgBorrow;
                fromAmino(object: _38.MsgBorrowAmino): _38.MsgBorrow;
                toAmino(message: _38.MsgBorrow): _38.MsgBorrowAmino;
                fromAminoMsg(object: _38.MsgBorrowAminoMsg): _38.MsgBorrow;
                fromProtoMsg(message: _38.MsgBorrowProtoMsg): _38.MsgBorrow;
                toProto(message: _38.MsgBorrow): Uint8Array;
                toProtoMsg(message: _38.MsgBorrow): _38.MsgBorrowProtoMsg;
            };
            MsgBorrowResponse: {
                typeUrl: string;
                encode(_: _38.MsgBorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgBorrowResponse;
                fromPartial(_: Partial<_38.MsgBorrowResponse>): _38.MsgBorrowResponse;
                fromAmino(_: _38.MsgBorrowResponseAmino): _38.MsgBorrowResponse;
                toAmino(_: _38.MsgBorrowResponse): _38.MsgBorrowResponseAmino;
                fromAminoMsg(object: _38.MsgBorrowResponseAminoMsg): _38.MsgBorrowResponse;
                fromProtoMsg(message: _38.MsgBorrowResponseProtoMsg): _38.MsgBorrowResponse;
                toProto(message: _38.MsgBorrowResponse): Uint8Array;
                toProtoMsg(message: _38.MsgBorrowResponse): _38.MsgBorrowResponseProtoMsg;
            };
            MsgRepay: {
                typeUrl: string;
                encode(message: _38.MsgRepay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgRepay;
                fromPartial(object: Partial<_38.MsgRepay>): _38.MsgRepay;
                fromAmino(object: _38.MsgRepayAmino): _38.MsgRepay;
                toAmino(message: _38.MsgRepay): _38.MsgRepayAmino;
                fromAminoMsg(object: _38.MsgRepayAminoMsg): _38.MsgRepay;
                fromProtoMsg(message: _38.MsgRepayProtoMsg): _38.MsgRepay;
                toProto(message: _38.MsgRepay): Uint8Array;
                toProtoMsg(message: _38.MsgRepay): _38.MsgRepayProtoMsg;
            };
            MsgRepayResponse: {
                typeUrl: string;
                encode(_: _38.MsgRepayResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgRepayResponse;
                fromPartial(_: Partial<_38.MsgRepayResponse>): _38.MsgRepayResponse;
                fromAmino(_: _38.MsgRepayResponseAmino): _38.MsgRepayResponse;
                toAmino(_: _38.MsgRepayResponse): _38.MsgRepayResponseAmino;
                fromAminoMsg(object: _38.MsgRepayResponseAminoMsg): _38.MsgRepayResponse;
                fromProtoMsg(message: _38.MsgRepayResponseProtoMsg): _38.MsgRepayResponse;
                toProto(message: _38.MsgRepayResponse): Uint8Array;
                toProtoMsg(message: _38.MsgRepayResponse): _38.MsgRepayResponseProtoMsg;
            };
            MsgLiquidate: {
                typeUrl: string;
                encode(message: _38.MsgLiquidate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgLiquidate;
                fromPartial(object: Partial<_38.MsgLiquidate>): _38.MsgLiquidate;
                fromAmino(object: _38.MsgLiquidateAmino): _38.MsgLiquidate;
                toAmino(message: _38.MsgLiquidate): _38.MsgLiquidateAmino;
                fromAminoMsg(object: _38.MsgLiquidateAminoMsg): _38.MsgLiquidate;
                fromProtoMsg(message: _38.MsgLiquidateProtoMsg): _38.MsgLiquidate;
                toProto(message: _38.MsgLiquidate): Uint8Array;
                toProtoMsg(message: _38.MsgLiquidate): _38.MsgLiquidateProtoMsg;
            };
            MsgLiquidateResponse: {
                typeUrl: string;
                encode(_: _38.MsgLiquidateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgLiquidateResponse;
                fromPartial(_: Partial<_38.MsgLiquidateResponse>): _38.MsgLiquidateResponse;
                fromAmino(_: _38.MsgLiquidateResponseAmino): _38.MsgLiquidateResponse;
                toAmino(_: _38.MsgLiquidateResponse): _38.MsgLiquidateResponseAmino;
                fromAminoMsg(object: _38.MsgLiquidateResponseAminoMsg): _38.MsgLiquidateResponse;
                fromProtoMsg(message: _38.MsgLiquidateResponseProtoMsg): _38.MsgLiquidateResponse;
                toProto(message: _38.MsgLiquidateResponse): Uint8Array;
                toProtoMsg(message: _38.MsgLiquidateResponse): _38.MsgLiquidateResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _37.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.QueryParamsRequest;
                fromPartial(_: Partial<_37.QueryParamsRequest>): _37.QueryParamsRequest;
                fromAmino(_: _37.QueryParamsRequestAmino): _37.QueryParamsRequest;
                toAmino(_: _37.QueryParamsRequest): _37.QueryParamsRequestAmino;
                fromAminoMsg(object: _37.QueryParamsRequestAminoMsg): _37.QueryParamsRequest;
                fromProtoMsg(message: _37.QueryParamsRequestProtoMsg): _37.QueryParamsRequest;
                toProto(message: _37.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryParamsRequest): _37.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _37.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryParamsResponse;
                fromPartial(object: Partial<_37.QueryParamsResponse>): _37.QueryParamsResponse;
                fromAmino(object: _37.QueryParamsResponseAmino): _37.QueryParamsResponse;
                toAmino(message: _37.QueryParamsResponse): _37.QueryParamsResponseAmino;
                fromAminoMsg(object: _37.QueryParamsResponseAminoMsg): _37.QueryParamsResponse;
                fromProtoMsg(message: _37.QueryParamsResponseProtoMsg): _37.QueryParamsResponse;
                toProto(message: _37.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryParamsResponse): _37.QueryParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(_: _37.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _37.QueryAccountsRequest;
                fromPartial(_: Partial<_37.QueryAccountsRequest>): _37.QueryAccountsRequest;
                fromAmino(_: _37.QueryAccountsRequestAmino): _37.QueryAccountsRequest;
                toAmino(_: _37.QueryAccountsRequest): _37.QueryAccountsRequestAmino;
                fromAminoMsg(object: _37.QueryAccountsRequestAminoMsg): _37.QueryAccountsRequest;
                fromProtoMsg(message: _37.QueryAccountsRequestProtoMsg): _37.QueryAccountsRequest;
                toProto(message: _37.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryAccountsRequest): _37.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _37.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryAccountsResponse;
                fromPartial(object: Partial<_37.QueryAccountsResponse>): _37.QueryAccountsResponse;
                fromAmino(object: _37.QueryAccountsResponseAmino): _37.QueryAccountsResponse;
                toAmino(message: _37.QueryAccountsResponse): _37.QueryAccountsResponseAmino;
                fromAminoMsg(object: _37.QueryAccountsResponseAminoMsg): _37.QueryAccountsResponse;
                fromProtoMsg(message: _37.QueryAccountsResponseProtoMsg): _37.QueryAccountsResponse;
                toProto(message: _37.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryAccountsResponse): _37.QueryAccountsResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _37.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryDepositsRequest;
                fromPartial(object: Partial<_37.QueryDepositsRequest>): _37.QueryDepositsRequest;
                fromAmino(object: _37.QueryDepositsRequestAmino): _37.QueryDepositsRequest;
                toAmino(message: _37.QueryDepositsRequest): _37.QueryDepositsRequestAmino;
                fromAminoMsg(object: _37.QueryDepositsRequestAminoMsg): _37.QueryDepositsRequest;
                fromProtoMsg(message: _37.QueryDepositsRequestProtoMsg): _37.QueryDepositsRequest;
                toProto(message: _37.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryDepositsRequest): _37.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _37.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryDepositsResponse;
                fromPartial(object: Partial<_37.QueryDepositsResponse>): _37.QueryDepositsResponse;
                fromAmino(object: _37.QueryDepositsResponseAmino): _37.QueryDepositsResponse;
                toAmino(message: _37.QueryDepositsResponse): _37.QueryDepositsResponseAmino;
                fromAminoMsg(object: _37.QueryDepositsResponseAminoMsg): _37.QueryDepositsResponse;
                fromProtoMsg(message: _37.QueryDepositsResponseProtoMsg): _37.QueryDepositsResponse;
                toProto(message: _37.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryDepositsResponse): _37.QueryDepositsResponseProtoMsg;
            };
            QueryUnsyncedDepositsRequest: {
                typeUrl: string;
                encode(message: _37.QueryUnsyncedDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryUnsyncedDepositsRequest;
                fromPartial(object: Partial<_37.QueryUnsyncedDepositsRequest>): _37.QueryUnsyncedDepositsRequest;
                fromAmino(object: _37.QueryUnsyncedDepositsRequestAmino): _37.QueryUnsyncedDepositsRequest;
                toAmino(message: _37.QueryUnsyncedDepositsRequest): _37.QueryUnsyncedDepositsRequestAmino;
                fromAminoMsg(object: _37.QueryUnsyncedDepositsRequestAminoMsg): _37.QueryUnsyncedDepositsRequest;
                fromProtoMsg(message: _37.QueryUnsyncedDepositsRequestProtoMsg): _37.QueryUnsyncedDepositsRequest;
                toProto(message: _37.QueryUnsyncedDepositsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryUnsyncedDepositsRequest): _37.QueryUnsyncedDepositsRequestProtoMsg;
            };
            QueryUnsyncedDepositsResponse: {
                typeUrl: string;
                encode(message: _37.QueryUnsyncedDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryUnsyncedDepositsResponse;
                fromPartial(object: Partial<_37.QueryUnsyncedDepositsResponse>): _37.QueryUnsyncedDepositsResponse;
                fromAmino(object: _37.QueryUnsyncedDepositsResponseAmino): _37.QueryUnsyncedDepositsResponse;
                toAmino(message: _37.QueryUnsyncedDepositsResponse): _37.QueryUnsyncedDepositsResponseAmino;
                fromAminoMsg(object: _37.QueryUnsyncedDepositsResponseAminoMsg): _37.QueryUnsyncedDepositsResponse;
                fromProtoMsg(message: _37.QueryUnsyncedDepositsResponseProtoMsg): _37.QueryUnsyncedDepositsResponse;
                toProto(message: _37.QueryUnsyncedDepositsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryUnsyncedDepositsResponse): _37.QueryUnsyncedDepositsResponseProtoMsg;
            };
            QueryTotalDepositedRequest: {
                typeUrl: string;
                encode(message: _37.QueryTotalDepositedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryTotalDepositedRequest;
                fromPartial(object: Partial<_37.QueryTotalDepositedRequest>): _37.QueryTotalDepositedRequest;
                fromAmino(object: _37.QueryTotalDepositedRequestAmino): _37.QueryTotalDepositedRequest;
                toAmino(message: _37.QueryTotalDepositedRequest): _37.QueryTotalDepositedRequestAmino;
                fromAminoMsg(object: _37.QueryTotalDepositedRequestAminoMsg): _37.QueryTotalDepositedRequest;
                fromProtoMsg(message: _37.QueryTotalDepositedRequestProtoMsg): _37.QueryTotalDepositedRequest;
                toProto(message: _37.QueryTotalDepositedRequest): Uint8Array;
                toProtoMsg(message: _37.QueryTotalDepositedRequest): _37.QueryTotalDepositedRequestProtoMsg;
            };
            QueryTotalDepositedResponse: {
                typeUrl: string;
                encode(message: _37.QueryTotalDepositedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryTotalDepositedResponse;
                fromPartial(object: Partial<_37.QueryTotalDepositedResponse>): _37.QueryTotalDepositedResponse;
                fromAmino(object: _37.QueryTotalDepositedResponseAmino): _37.QueryTotalDepositedResponse;
                toAmino(message: _37.QueryTotalDepositedResponse): _37.QueryTotalDepositedResponseAmino;
                fromAminoMsg(object: _37.QueryTotalDepositedResponseAminoMsg): _37.QueryTotalDepositedResponse;
                fromProtoMsg(message: _37.QueryTotalDepositedResponseProtoMsg): _37.QueryTotalDepositedResponse;
                toProto(message: _37.QueryTotalDepositedResponse): Uint8Array;
                toProtoMsg(message: _37.QueryTotalDepositedResponse): _37.QueryTotalDepositedResponseProtoMsg;
            };
            QueryBorrowsRequest: {
                typeUrl: string;
                encode(message: _37.QueryBorrowsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryBorrowsRequest;
                fromPartial(object: Partial<_37.QueryBorrowsRequest>): _37.QueryBorrowsRequest;
                fromAmino(object: _37.QueryBorrowsRequestAmino): _37.QueryBorrowsRequest;
                toAmino(message: _37.QueryBorrowsRequest): _37.QueryBorrowsRequestAmino;
                fromAminoMsg(object: _37.QueryBorrowsRequestAminoMsg): _37.QueryBorrowsRequest;
                fromProtoMsg(message: _37.QueryBorrowsRequestProtoMsg): _37.QueryBorrowsRequest;
                toProto(message: _37.QueryBorrowsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryBorrowsRequest): _37.QueryBorrowsRequestProtoMsg;
            };
            QueryBorrowsResponse: {
                typeUrl: string;
                encode(message: _37.QueryBorrowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryBorrowsResponse;
                fromPartial(object: Partial<_37.QueryBorrowsResponse>): _37.QueryBorrowsResponse;
                fromAmino(object: _37.QueryBorrowsResponseAmino): _37.QueryBorrowsResponse;
                toAmino(message: _37.QueryBorrowsResponse): _37.QueryBorrowsResponseAmino;
                fromAminoMsg(object: _37.QueryBorrowsResponseAminoMsg): _37.QueryBorrowsResponse;
                fromProtoMsg(message: _37.QueryBorrowsResponseProtoMsg): _37.QueryBorrowsResponse;
                toProto(message: _37.QueryBorrowsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryBorrowsResponse): _37.QueryBorrowsResponseProtoMsg;
            };
            QueryUnsyncedBorrowsRequest: {
                typeUrl: string;
                encode(message: _37.QueryUnsyncedBorrowsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryUnsyncedBorrowsRequest;
                fromPartial(object: Partial<_37.QueryUnsyncedBorrowsRequest>): _37.QueryUnsyncedBorrowsRequest;
                fromAmino(object: _37.QueryUnsyncedBorrowsRequestAmino): _37.QueryUnsyncedBorrowsRequest;
                toAmino(message: _37.QueryUnsyncedBorrowsRequest): _37.QueryUnsyncedBorrowsRequestAmino;
                fromAminoMsg(object: _37.QueryUnsyncedBorrowsRequestAminoMsg): _37.QueryUnsyncedBorrowsRequest;
                fromProtoMsg(message: _37.QueryUnsyncedBorrowsRequestProtoMsg): _37.QueryUnsyncedBorrowsRequest;
                toProto(message: _37.QueryUnsyncedBorrowsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryUnsyncedBorrowsRequest): _37.QueryUnsyncedBorrowsRequestProtoMsg;
            };
            QueryUnsyncedBorrowsResponse: {
                typeUrl: string;
                encode(message: _37.QueryUnsyncedBorrowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryUnsyncedBorrowsResponse;
                fromPartial(object: Partial<_37.QueryUnsyncedBorrowsResponse>): _37.QueryUnsyncedBorrowsResponse;
                fromAmino(object: _37.QueryUnsyncedBorrowsResponseAmino): _37.QueryUnsyncedBorrowsResponse;
                toAmino(message: _37.QueryUnsyncedBorrowsResponse): _37.QueryUnsyncedBorrowsResponseAmino;
                fromAminoMsg(object: _37.QueryUnsyncedBorrowsResponseAminoMsg): _37.QueryUnsyncedBorrowsResponse;
                fromProtoMsg(message: _37.QueryUnsyncedBorrowsResponseProtoMsg): _37.QueryUnsyncedBorrowsResponse;
                toProto(message: _37.QueryUnsyncedBorrowsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryUnsyncedBorrowsResponse): _37.QueryUnsyncedBorrowsResponseProtoMsg;
            };
            QueryTotalBorrowedRequest: {
                typeUrl: string;
                encode(message: _37.QueryTotalBorrowedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryTotalBorrowedRequest;
                fromPartial(object: Partial<_37.QueryTotalBorrowedRequest>): _37.QueryTotalBorrowedRequest;
                fromAmino(object: _37.QueryTotalBorrowedRequestAmino): _37.QueryTotalBorrowedRequest;
                toAmino(message: _37.QueryTotalBorrowedRequest): _37.QueryTotalBorrowedRequestAmino;
                fromAminoMsg(object: _37.QueryTotalBorrowedRequestAminoMsg): _37.QueryTotalBorrowedRequest;
                fromProtoMsg(message: _37.QueryTotalBorrowedRequestProtoMsg): _37.QueryTotalBorrowedRequest;
                toProto(message: _37.QueryTotalBorrowedRequest): Uint8Array;
                toProtoMsg(message: _37.QueryTotalBorrowedRequest): _37.QueryTotalBorrowedRequestProtoMsg;
            };
            QueryTotalBorrowedResponse: {
                typeUrl: string;
                encode(message: _37.QueryTotalBorrowedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryTotalBorrowedResponse;
                fromPartial(object: Partial<_37.QueryTotalBorrowedResponse>): _37.QueryTotalBorrowedResponse;
                fromAmino(object: _37.QueryTotalBorrowedResponseAmino): _37.QueryTotalBorrowedResponse;
                toAmino(message: _37.QueryTotalBorrowedResponse): _37.QueryTotalBorrowedResponseAmino;
                fromAminoMsg(object: _37.QueryTotalBorrowedResponseAminoMsg): _37.QueryTotalBorrowedResponse;
                fromProtoMsg(message: _37.QueryTotalBorrowedResponseProtoMsg): _37.QueryTotalBorrowedResponse;
                toProto(message: _37.QueryTotalBorrowedResponse): Uint8Array;
                toProtoMsg(message: _37.QueryTotalBorrowedResponse): _37.QueryTotalBorrowedResponseProtoMsg;
            };
            QueryInterestRateRequest: {
                typeUrl: string;
                encode(message: _37.QueryInterestRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryInterestRateRequest;
                fromPartial(object: Partial<_37.QueryInterestRateRequest>): _37.QueryInterestRateRequest;
                fromAmino(object: _37.QueryInterestRateRequestAmino): _37.QueryInterestRateRequest;
                toAmino(message: _37.QueryInterestRateRequest): _37.QueryInterestRateRequestAmino;
                fromAminoMsg(object: _37.QueryInterestRateRequestAminoMsg): _37.QueryInterestRateRequest;
                fromProtoMsg(message: _37.QueryInterestRateRequestProtoMsg): _37.QueryInterestRateRequest;
                toProto(message: _37.QueryInterestRateRequest): Uint8Array;
                toProtoMsg(message: _37.QueryInterestRateRequest): _37.QueryInterestRateRequestProtoMsg;
            };
            QueryInterestRateResponse: {
                typeUrl: string;
                encode(message: _37.QueryInterestRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryInterestRateResponse;
                fromPartial(object: Partial<_37.QueryInterestRateResponse>): _37.QueryInterestRateResponse;
                fromAmino(object: _37.QueryInterestRateResponseAmino): _37.QueryInterestRateResponse;
                toAmino(message: _37.QueryInterestRateResponse): _37.QueryInterestRateResponseAmino;
                fromAminoMsg(object: _37.QueryInterestRateResponseAminoMsg): _37.QueryInterestRateResponse;
                fromProtoMsg(message: _37.QueryInterestRateResponseProtoMsg): _37.QueryInterestRateResponse;
                toProto(message: _37.QueryInterestRateResponse): Uint8Array;
                toProtoMsg(message: _37.QueryInterestRateResponse): _37.QueryInterestRateResponseProtoMsg;
            };
            QueryReservesRequest: {
                typeUrl: string;
                encode(message: _37.QueryReservesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryReservesRequest;
                fromPartial(object: Partial<_37.QueryReservesRequest>): _37.QueryReservesRequest;
                fromAmino(object: _37.QueryReservesRequestAmino): _37.QueryReservesRequest;
                toAmino(message: _37.QueryReservesRequest): _37.QueryReservesRequestAmino;
                fromAminoMsg(object: _37.QueryReservesRequestAminoMsg): _37.QueryReservesRequest;
                fromProtoMsg(message: _37.QueryReservesRequestProtoMsg): _37.QueryReservesRequest;
                toProto(message: _37.QueryReservesRequest): Uint8Array;
                toProtoMsg(message: _37.QueryReservesRequest): _37.QueryReservesRequestProtoMsg;
            };
            QueryReservesResponse: {
                typeUrl: string;
                encode(message: _37.QueryReservesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryReservesResponse;
                fromPartial(object: Partial<_37.QueryReservesResponse>): _37.QueryReservesResponse;
                fromAmino(object: _37.QueryReservesResponseAmino): _37.QueryReservesResponse;
                toAmino(message: _37.QueryReservesResponse): _37.QueryReservesResponseAmino;
                fromAminoMsg(object: _37.QueryReservesResponseAminoMsg): _37.QueryReservesResponse;
                fromProtoMsg(message: _37.QueryReservesResponseProtoMsg): _37.QueryReservesResponse;
                toProto(message: _37.QueryReservesResponse): Uint8Array;
                toProtoMsg(message: _37.QueryReservesResponse): _37.QueryReservesResponseProtoMsg;
            };
            QueryInterestFactorsRequest: {
                typeUrl: string;
                encode(message: _37.QueryInterestFactorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryInterestFactorsRequest;
                fromPartial(object: Partial<_37.QueryInterestFactorsRequest>): _37.QueryInterestFactorsRequest;
                fromAmino(object: _37.QueryInterestFactorsRequestAmino): _37.QueryInterestFactorsRequest;
                toAmino(message: _37.QueryInterestFactorsRequest): _37.QueryInterestFactorsRequestAmino;
                fromAminoMsg(object: _37.QueryInterestFactorsRequestAminoMsg): _37.QueryInterestFactorsRequest;
                fromProtoMsg(message: _37.QueryInterestFactorsRequestProtoMsg): _37.QueryInterestFactorsRequest;
                toProto(message: _37.QueryInterestFactorsRequest): Uint8Array;
                toProtoMsg(message: _37.QueryInterestFactorsRequest): _37.QueryInterestFactorsRequestProtoMsg;
            };
            QueryInterestFactorsResponse: {
                typeUrl: string;
                encode(message: _37.QueryInterestFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.QueryInterestFactorsResponse;
                fromPartial(object: Partial<_37.QueryInterestFactorsResponse>): _37.QueryInterestFactorsResponse;
                fromAmino(object: _37.QueryInterestFactorsResponseAmino): _37.QueryInterestFactorsResponse;
                toAmino(message: _37.QueryInterestFactorsResponse): _37.QueryInterestFactorsResponseAmino;
                fromAminoMsg(object: _37.QueryInterestFactorsResponseAminoMsg): _37.QueryInterestFactorsResponse;
                fromProtoMsg(message: _37.QueryInterestFactorsResponseProtoMsg): _37.QueryInterestFactorsResponse;
                toProto(message: _37.QueryInterestFactorsResponse): Uint8Array;
                toProtoMsg(message: _37.QueryInterestFactorsResponse): _37.QueryInterestFactorsResponseProtoMsg;
            };
            DepositResponse: {
                typeUrl: string;
                encode(message: _37.DepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.DepositResponse;
                fromPartial(object: Partial<_37.DepositResponse>): _37.DepositResponse;
                fromAmino(object: _37.DepositResponseAmino): _37.DepositResponse;
                toAmino(message: _37.DepositResponse): _37.DepositResponseAmino;
                fromAminoMsg(object: _37.DepositResponseAminoMsg): _37.DepositResponse;
                fromProtoMsg(message: _37.DepositResponseProtoMsg): _37.DepositResponse;
                toProto(message: _37.DepositResponse): Uint8Array;
                toProtoMsg(message: _37.DepositResponse): _37.DepositResponseProtoMsg;
            };
            SupplyInterestFactorResponse: {
                typeUrl: string;
                encode(message: _37.SupplyInterestFactorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.SupplyInterestFactorResponse;
                fromPartial(object: Partial<_37.SupplyInterestFactorResponse>): _37.SupplyInterestFactorResponse;
                fromAmino(object: _37.SupplyInterestFactorResponseAmino): _37.SupplyInterestFactorResponse;
                toAmino(message: _37.SupplyInterestFactorResponse): _37.SupplyInterestFactorResponseAmino;
                fromAminoMsg(object: _37.SupplyInterestFactorResponseAminoMsg): _37.SupplyInterestFactorResponse;
                fromProtoMsg(message: _37.SupplyInterestFactorResponseProtoMsg): _37.SupplyInterestFactorResponse;
                toProto(message: _37.SupplyInterestFactorResponse): Uint8Array;
                toProtoMsg(message: _37.SupplyInterestFactorResponse): _37.SupplyInterestFactorResponseProtoMsg;
            };
            BorrowResponse: {
                typeUrl: string;
                encode(message: _37.BorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.BorrowResponse;
                fromPartial(object: Partial<_37.BorrowResponse>): _37.BorrowResponse;
                fromAmino(object: _37.BorrowResponseAmino): _37.BorrowResponse;
                toAmino(message: _37.BorrowResponse): _37.BorrowResponseAmino;
                fromAminoMsg(object: _37.BorrowResponseAminoMsg): _37.BorrowResponse;
                fromProtoMsg(message: _37.BorrowResponseProtoMsg): _37.BorrowResponse;
                toProto(message: _37.BorrowResponse): Uint8Array;
                toProtoMsg(message: _37.BorrowResponse): _37.BorrowResponseProtoMsg;
            };
            BorrowInterestFactorResponse: {
                typeUrl: string;
                encode(message: _37.BorrowInterestFactorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.BorrowInterestFactorResponse;
                fromPartial(object: Partial<_37.BorrowInterestFactorResponse>): _37.BorrowInterestFactorResponse;
                fromAmino(object: _37.BorrowInterestFactorResponseAmino): _37.BorrowInterestFactorResponse;
                toAmino(message: _37.BorrowInterestFactorResponse): _37.BorrowInterestFactorResponseAmino;
                fromAminoMsg(object: _37.BorrowInterestFactorResponseAminoMsg): _37.BorrowInterestFactorResponse;
                fromProtoMsg(message: _37.BorrowInterestFactorResponseProtoMsg): _37.BorrowInterestFactorResponse;
                toProto(message: _37.BorrowInterestFactorResponse): Uint8Array;
                toProtoMsg(message: _37.BorrowInterestFactorResponse): _37.BorrowInterestFactorResponseProtoMsg;
            };
            MoneyMarketInterestRate: {
                typeUrl: string;
                encode(message: _37.MoneyMarketInterestRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MoneyMarketInterestRate;
                fromPartial(object: Partial<_37.MoneyMarketInterestRate>): _37.MoneyMarketInterestRate;
                fromAmino(object: _37.MoneyMarketInterestRateAmino): _37.MoneyMarketInterestRate;
                toAmino(message: _37.MoneyMarketInterestRate): _37.MoneyMarketInterestRateAmino;
                fromAminoMsg(object: _37.MoneyMarketInterestRateAminoMsg): _37.MoneyMarketInterestRate;
                fromProtoMsg(message: _37.MoneyMarketInterestRateProtoMsg): _37.MoneyMarketInterestRate;
                toProto(message: _37.MoneyMarketInterestRate): Uint8Array;
                toProtoMsg(message: _37.MoneyMarketInterestRate): _37.MoneyMarketInterestRateProtoMsg;
            };
            InterestFactor: {
                typeUrl: string;
                encode(message: _37.InterestFactor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.InterestFactor;
                fromPartial(object: Partial<_37.InterestFactor>): _37.InterestFactor;
                fromAmino(object: _37.InterestFactorAmino): _37.InterestFactor;
                toAmino(message: _37.InterestFactor): _37.InterestFactorAmino;
                fromAminoMsg(object: _37.InterestFactorAminoMsg): _37.InterestFactor;
                fromProtoMsg(message: _37.InterestFactorProtoMsg): _37.InterestFactor;
                toProto(message: _37.InterestFactor): Uint8Array;
                toProtoMsg(message: _37.InterestFactor): _37.InterestFactorProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _36.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Params;
                fromPartial(object: Partial<_36.Params>): _36.Params;
                fromAmino(object: _36.ParamsAmino): _36.Params;
                toAmino(message: _36.Params): _36.ParamsAmino;
                fromAminoMsg(object: _36.ParamsAminoMsg): _36.Params;
                fromProtoMsg(message: _36.ParamsProtoMsg): _36.Params;
                toProto(message: _36.Params): Uint8Array;
                toProtoMsg(message: _36.Params): _36.ParamsProtoMsg;
            };
            MoneyMarket: {
                typeUrl: string;
                encode(message: _36.MoneyMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MoneyMarket;
                fromPartial(object: Partial<_36.MoneyMarket>): _36.MoneyMarket;
                fromAmino(object: _36.MoneyMarketAmino): _36.MoneyMarket;
                toAmino(message: _36.MoneyMarket): _36.MoneyMarketAmino;
                fromAminoMsg(object: _36.MoneyMarketAminoMsg): _36.MoneyMarket;
                fromProtoMsg(message: _36.MoneyMarketProtoMsg): _36.MoneyMarket;
                toProto(message: _36.MoneyMarket): Uint8Array;
                toProtoMsg(message: _36.MoneyMarket): _36.MoneyMarketProtoMsg;
            };
            BorrowLimit: {
                typeUrl: string;
                encode(message: _36.BorrowLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.BorrowLimit;
                fromPartial(object: Partial<_36.BorrowLimit>): _36.BorrowLimit;
                fromAmino(object: _36.BorrowLimitAmino): _36.BorrowLimit;
                toAmino(message: _36.BorrowLimit): _36.BorrowLimitAmino;
                fromAminoMsg(object: _36.BorrowLimitAminoMsg): _36.BorrowLimit;
                fromProtoMsg(message: _36.BorrowLimitProtoMsg): _36.BorrowLimit;
                toProto(message: _36.BorrowLimit): Uint8Array;
                toProtoMsg(message: _36.BorrowLimit): _36.BorrowLimitProtoMsg;
            };
            InterestRateModel: {
                typeUrl: string;
                encode(message: _36.InterestRateModel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.InterestRateModel;
                fromPartial(object: Partial<_36.InterestRateModel>): _36.InterestRateModel;
                fromAmino(object: _36.InterestRateModelAmino): _36.InterestRateModel;
                toAmino(message: _36.InterestRateModel): _36.InterestRateModelAmino;
                fromAminoMsg(object: _36.InterestRateModelAminoMsg): _36.InterestRateModel;
                fromProtoMsg(message: _36.InterestRateModelProtoMsg): _36.InterestRateModel;
                toProto(message: _36.InterestRateModel): Uint8Array;
                toProtoMsg(message: _36.InterestRateModel): _36.InterestRateModelProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _36.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Deposit;
                fromPartial(object: Partial<_36.Deposit>): _36.Deposit;
                fromAmino(object: _36.DepositAmino): _36.Deposit;
                toAmino(message: _36.Deposit): _36.DepositAmino;
                fromAminoMsg(object: _36.DepositAminoMsg): _36.Deposit;
                fromProtoMsg(message: _36.DepositProtoMsg): _36.Deposit;
                toProto(message: _36.Deposit): Uint8Array;
                toProtoMsg(message: _36.Deposit): _36.DepositProtoMsg;
            };
            Borrow: {
                typeUrl: string;
                encode(message: _36.Borrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Borrow;
                fromPartial(object: Partial<_36.Borrow>): _36.Borrow;
                fromAmino(object: _36.BorrowAmino): _36.Borrow;
                toAmino(message: _36.Borrow): _36.BorrowAmino;
                fromAminoMsg(object: _36.BorrowAminoMsg): _36.Borrow;
                fromProtoMsg(message: _36.BorrowProtoMsg): _36.Borrow;
                toProto(message: _36.Borrow): Uint8Array;
                toProtoMsg(message: _36.Borrow): _36.BorrowProtoMsg;
            };
            SupplyInterestFactor: {
                typeUrl: string;
                encode(message: _36.SupplyInterestFactor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.SupplyInterestFactor;
                fromPartial(object: Partial<_36.SupplyInterestFactor>): _36.SupplyInterestFactor;
                fromAmino(object: _36.SupplyInterestFactorAmino): _36.SupplyInterestFactor;
                toAmino(message: _36.SupplyInterestFactor): _36.SupplyInterestFactorAmino;
                fromAminoMsg(object: _36.SupplyInterestFactorAminoMsg): _36.SupplyInterestFactor;
                fromProtoMsg(message: _36.SupplyInterestFactorProtoMsg): _36.SupplyInterestFactor;
                toProto(message: _36.SupplyInterestFactor): Uint8Array;
                toProtoMsg(message: _36.SupplyInterestFactor): _36.SupplyInterestFactorProtoMsg;
            };
            BorrowInterestFactor: {
                typeUrl: string;
                encode(message: _36.BorrowInterestFactor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.BorrowInterestFactor;
                fromPartial(object: Partial<_36.BorrowInterestFactor>): _36.BorrowInterestFactor;
                fromAmino(object: _36.BorrowInterestFactorAmino): _36.BorrowInterestFactor;
                toAmino(message: _36.BorrowInterestFactor): _36.BorrowInterestFactorAmino;
                fromAminoMsg(object: _36.BorrowInterestFactorAminoMsg): _36.BorrowInterestFactor;
                fromProtoMsg(message: _36.BorrowInterestFactorProtoMsg): _36.BorrowInterestFactor;
                toProto(message: _36.BorrowInterestFactor): Uint8Array;
                toProtoMsg(message: _36.BorrowInterestFactor): _36.BorrowInterestFactorProtoMsg;
            };
            CoinsProto: {
                typeUrl: string;
                encode(message: _36.CoinsProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.CoinsProto;
                fromPartial(object: Partial<_36.CoinsProto>): _36.CoinsProto;
                fromAmino(object: _36.CoinsProtoAmino): _36.CoinsProto;
                toAmino(message: _36.CoinsProto): _36.CoinsProtoAmino;
                fromAminoMsg(object: _36.CoinsProtoAminoMsg): _36.CoinsProto;
                fromProtoMsg(message: _36.CoinsProtoProtoMsg): _36.CoinsProto;
                toProto(message: _36.CoinsProto): Uint8Array;
                toProtoMsg(message: _36.CoinsProto): _36.CoinsProtoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _35.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GenesisState;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
            GenesisAccumulationTime: {
                typeUrl: string;
                encode(message: _35.GenesisAccumulationTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.GenesisAccumulationTime;
                fromPartial(object: Partial<_35.GenesisAccumulationTime>): _35.GenesisAccumulationTime;
                fromAmino(object: _35.GenesisAccumulationTimeAmino): _35.GenesisAccumulationTime;
                toAmino(message: _35.GenesisAccumulationTime): _35.GenesisAccumulationTimeAmino;
                fromAminoMsg(object: _35.GenesisAccumulationTimeAminoMsg): _35.GenesisAccumulationTime;
                fromProtoMsg(message: _35.GenesisAccumulationTimeProtoMsg): _35.GenesisAccumulationTime;
                toProto(message: _35.GenesisAccumulationTime): Uint8Array;
                toProtoMsg(message: _35.GenesisAccumulationTime): _35.GenesisAccumulationTimeProtoMsg;
            };
        };
    }
    namespace incentive {
        const v1beta1: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                rewards(request: _43.QueryRewardsRequest): Promise<_43.QueryRewardsResponse>;
                rewardFactors(request?: _43.QueryRewardFactorsRequest): Promise<_43.QueryRewardFactorsResponse>;
                apy(request?: _43.QueryApyRequest): Promise<_43.QueryApyResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimUSDXMintingReward(value: _44.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimHardReward(value: _44.MsgClaimHardReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimDelegatorReward(value: _44.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSwapReward(value: _44.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSavingsReward(value: _44.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimEarnReward(value: _44.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimUSDXMintingReward(value: _44.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _44.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _44.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _44.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _44.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _44.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _44.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _44.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _44.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: _44.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: _44.MsgClaimEarnReward;
                    };
                };
                fromJSON: {
                    claimUSDXMintingReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgClaimEarnReward;
                    };
                };
                fromPartial: {
                    claimUSDXMintingReward(value: _44.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _44.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _44.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _44.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _44.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _44.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _44.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _44.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _44.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: _44.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: _44.MsgClaimEarnReward;
                    };
                };
            };
            AminoConverter: {
                "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgClaimUSDXMintingReward) => _44.MsgClaimUSDXMintingRewardAmino;
                    fromAmino: (object: _44.MsgClaimUSDXMintingRewardAmino) => _44.MsgClaimUSDXMintingReward;
                };
                "/kava.incentive.v1beta1.MsgClaimHardReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgClaimHardReward) => _44.MsgClaimHardRewardAmino;
                    fromAmino: (object: _44.MsgClaimHardRewardAmino) => _44.MsgClaimHardReward;
                };
                "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgClaimDelegatorReward) => _44.MsgClaimDelegatorRewardAmino;
                    fromAmino: (object: _44.MsgClaimDelegatorRewardAmino) => _44.MsgClaimDelegatorReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSwapReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgClaimSwapReward) => _44.MsgClaimSwapRewardAmino;
                    fromAmino: (object: _44.MsgClaimSwapRewardAmino) => _44.MsgClaimSwapReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgClaimSavingsReward) => _44.MsgClaimSavingsRewardAmino;
                    fromAmino: (object: _44.MsgClaimSavingsRewardAmino) => _44.MsgClaimSavingsReward;
                };
                "/kava.incentive.v1beta1.MsgClaimEarnReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgClaimEarnReward) => _44.MsgClaimEarnRewardAmino;
                    fromAmino: (object: _44.MsgClaimEarnRewardAmino) => _44.MsgClaimEarnReward;
                };
            };
            Selection: {
                typeUrl: string;
                encode(message: _44.Selection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.Selection;
                fromPartial(object: Partial<_44.Selection>): _44.Selection;
                fromAmino(object: _44.SelectionAmino): _44.Selection;
                toAmino(message: _44.Selection): _44.SelectionAmino;
                fromAminoMsg(object: _44.SelectionAminoMsg): _44.Selection;
                fromProtoMsg(message: _44.SelectionProtoMsg): _44.Selection;
                toProto(message: _44.Selection): Uint8Array;
                toProtoMsg(message: _44.Selection): _44.SelectionProtoMsg;
            };
            MsgClaimUSDXMintingReward: {
                typeUrl: string;
                encode(message: _44.MsgClaimUSDXMintingReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgClaimUSDXMintingReward;
                fromPartial(object: Partial<_44.MsgClaimUSDXMintingReward>): _44.MsgClaimUSDXMintingReward;
                fromAmino(object: _44.MsgClaimUSDXMintingRewardAmino): _44.MsgClaimUSDXMintingReward;
                toAmino(message: _44.MsgClaimUSDXMintingReward): _44.MsgClaimUSDXMintingRewardAmino;
                fromAminoMsg(object: _44.MsgClaimUSDXMintingRewardAminoMsg): _44.MsgClaimUSDXMintingReward;
                fromProtoMsg(message: _44.MsgClaimUSDXMintingRewardProtoMsg): _44.MsgClaimUSDXMintingReward;
                toProto(message: _44.MsgClaimUSDXMintingReward): Uint8Array;
                toProtoMsg(message: _44.MsgClaimUSDXMintingReward): _44.MsgClaimUSDXMintingRewardProtoMsg;
            };
            MsgClaimUSDXMintingRewardResponse: {
                typeUrl: string;
                encode(_: _44.MsgClaimUSDXMintingRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgClaimUSDXMintingRewardResponse;
                fromPartial(_: Partial<_44.MsgClaimUSDXMintingRewardResponse>): _44.MsgClaimUSDXMintingRewardResponse;
                fromAmino(_: _44.MsgClaimUSDXMintingRewardResponseAmino): _44.MsgClaimUSDXMintingRewardResponse;
                toAmino(_: _44.MsgClaimUSDXMintingRewardResponse): _44.MsgClaimUSDXMintingRewardResponseAmino;
                fromAminoMsg(object: _44.MsgClaimUSDXMintingRewardResponseAminoMsg): _44.MsgClaimUSDXMintingRewardResponse;
                fromProtoMsg(message: _44.MsgClaimUSDXMintingRewardResponseProtoMsg): _44.MsgClaimUSDXMintingRewardResponse;
                toProto(message: _44.MsgClaimUSDXMintingRewardResponse): Uint8Array;
                toProtoMsg(message: _44.MsgClaimUSDXMintingRewardResponse): _44.MsgClaimUSDXMintingRewardResponseProtoMsg;
            };
            MsgClaimHardReward: {
                typeUrl: string;
                encode(message: _44.MsgClaimHardReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgClaimHardReward;
                fromPartial(object: Partial<_44.MsgClaimHardReward>): _44.MsgClaimHardReward;
                fromAmino(object: _44.MsgClaimHardRewardAmino): _44.MsgClaimHardReward;
                toAmino(message: _44.MsgClaimHardReward): _44.MsgClaimHardRewardAmino;
                fromAminoMsg(object: _44.MsgClaimHardRewardAminoMsg): _44.MsgClaimHardReward;
                fromProtoMsg(message: _44.MsgClaimHardRewardProtoMsg): _44.MsgClaimHardReward;
                toProto(message: _44.MsgClaimHardReward): Uint8Array;
                toProtoMsg(message: _44.MsgClaimHardReward): _44.MsgClaimHardRewardProtoMsg;
            };
            MsgClaimHardRewardResponse: {
                typeUrl: string;
                encode(_: _44.MsgClaimHardRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgClaimHardRewardResponse;
                fromPartial(_: Partial<_44.MsgClaimHardRewardResponse>): _44.MsgClaimHardRewardResponse;
                fromAmino(_: _44.MsgClaimHardRewardResponseAmino): _44.MsgClaimHardRewardResponse;
                toAmino(_: _44.MsgClaimHardRewardResponse): _44.MsgClaimHardRewardResponseAmino;
                fromAminoMsg(object: _44.MsgClaimHardRewardResponseAminoMsg): _44.MsgClaimHardRewardResponse;
                fromProtoMsg(message: _44.MsgClaimHardRewardResponseProtoMsg): _44.MsgClaimHardRewardResponse;
                toProto(message: _44.MsgClaimHardRewardResponse): Uint8Array;
                toProtoMsg(message: _44.MsgClaimHardRewardResponse): _44.MsgClaimHardRewardResponseProtoMsg;
            };
            MsgClaimDelegatorReward: {
                typeUrl: string;
                encode(message: _44.MsgClaimDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgClaimDelegatorReward;
                fromPartial(object: Partial<_44.MsgClaimDelegatorReward>): _44.MsgClaimDelegatorReward;
                fromAmino(object: _44.MsgClaimDelegatorRewardAmino): _44.MsgClaimDelegatorReward;
                toAmino(message: _44.MsgClaimDelegatorReward): _44.MsgClaimDelegatorRewardAmino;
                fromAminoMsg(object: _44.MsgClaimDelegatorRewardAminoMsg): _44.MsgClaimDelegatorReward;
                fromProtoMsg(message: _44.MsgClaimDelegatorRewardProtoMsg): _44.MsgClaimDelegatorReward;
                toProto(message: _44.MsgClaimDelegatorReward): Uint8Array;
                toProtoMsg(message: _44.MsgClaimDelegatorReward): _44.MsgClaimDelegatorRewardProtoMsg;
            };
            MsgClaimDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _44.MsgClaimDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgClaimDelegatorRewardResponse;
                fromPartial(_: Partial<_44.MsgClaimDelegatorRewardResponse>): _44.MsgClaimDelegatorRewardResponse;
                fromAmino(_: _44.MsgClaimDelegatorRewardResponseAmino): _44.MsgClaimDelegatorRewardResponse;
                toAmino(_: _44.MsgClaimDelegatorRewardResponse): _44.MsgClaimDelegatorRewardResponseAmino;
                fromAminoMsg(object: _44.MsgClaimDelegatorRewardResponseAminoMsg): _44.MsgClaimDelegatorRewardResponse;
                fromProtoMsg(message: _44.MsgClaimDelegatorRewardResponseProtoMsg): _44.MsgClaimDelegatorRewardResponse;
                toProto(message: _44.MsgClaimDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _44.MsgClaimDelegatorRewardResponse): _44.MsgClaimDelegatorRewardResponseProtoMsg;
            };
            MsgClaimSwapReward: {
                typeUrl: string;
                encode(message: _44.MsgClaimSwapReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgClaimSwapReward;
                fromPartial(object: Partial<_44.MsgClaimSwapReward>): _44.MsgClaimSwapReward;
                fromAmino(object: _44.MsgClaimSwapRewardAmino): _44.MsgClaimSwapReward;
                toAmino(message: _44.MsgClaimSwapReward): _44.MsgClaimSwapRewardAmino;
                fromAminoMsg(object: _44.MsgClaimSwapRewardAminoMsg): _44.MsgClaimSwapReward;
                fromProtoMsg(message: _44.MsgClaimSwapRewardProtoMsg): _44.MsgClaimSwapReward;
                toProto(message: _44.MsgClaimSwapReward): Uint8Array;
                toProtoMsg(message: _44.MsgClaimSwapReward): _44.MsgClaimSwapRewardProtoMsg;
            };
            MsgClaimSwapRewardResponse: {
                typeUrl: string;
                encode(_: _44.MsgClaimSwapRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgClaimSwapRewardResponse;
                fromPartial(_: Partial<_44.MsgClaimSwapRewardResponse>): _44.MsgClaimSwapRewardResponse;
                fromAmino(_: _44.MsgClaimSwapRewardResponseAmino): _44.MsgClaimSwapRewardResponse;
                toAmino(_: _44.MsgClaimSwapRewardResponse): _44.MsgClaimSwapRewardResponseAmino;
                fromAminoMsg(object: _44.MsgClaimSwapRewardResponseAminoMsg): _44.MsgClaimSwapRewardResponse;
                fromProtoMsg(message: _44.MsgClaimSwapRewardResponseProtoMsg): _44.MsgClaimSwapRewardResponse;
                toProto(message: _44.MsgClaimSwapRewardResponse): Uint8Array;
                toProtoMsg(message: _44.MsgClaimSwapRewardResponse): _44.MsgClaimSwapRewardResponseProtoMsg;
            };
            MsgClaimSavingsReward: {
                typeUrl: string;
                encode(message: _44.MsgClaimSavingsReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgClaimSavingsReward;
                fromPartial(object: Partial<_44.MsgClaimSavingsReward>): _44.MsgClaimSavingsReward;
                fromAmino(object: _44.MsgClaimSavingsRewardAmino): _44.MsgClaimSavingsReward;
                toAmino(message: _44.MsgClaimSavingsReward): _44.MsgClaimSavingsRewardAmino;
                fromAminoMsg(object: _44.MsgClaimSavingsRewardAminoMsg): _44.MsgClaimSavingsReward;
                fromProtoMsg(message: _44.MsgClaimSavingsRewardProtoMsg): _44.MsgClaimSavingsReward;
                toProto(message: _44.MsgClaimSavingsReward): Uint8Array;
                toProtoMsg(message: _44.MsgClaimSavingsReward): _44.MsgClaimSavingsRewardProtoMsg;
            };
            MsgClaimSavingsRewardResponse: {
                typeUrl: string;
                encode(_: _44.MsgClaimSavingsRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgClaimSavingsRewardResponse;
                fromPartial(_: Partial<_44.MsgClaimSavingsRewardResponse>): _44.MsgClaimSavingsRewardResponse;
                fromAmino(_: _44.MsgClaimSavingsRewardResponseAmino): _44.MsgClaimSavingsRewardResponse;
                toAmino(_: _44.MsgClaimSavingsRewardResponse): _44.MsgClaimSavingsRewardResponseAmino;
                fromAminoMsg(object: _44.MsgClaimSavingsRewardResponseAminoMsg): _44.MsgClaimSavingsRewardResponse;
                fromProtoMsg(message: _44.MsgClaimSavingsRewardResponseProtoMsg): _44.MsgClaimSavingsRewardResponse;
                toProto(message: _44.MsgClaimSavingsRewardResponse): Uint8Array;
                toProtoMsg(message: _44.MsgClaimSavingsRewardResponse): _44.MsgClaimSavingsRewardResponseProtoMsg;
            };
            MsgClaimEarnReward: {
                typeUrl: string;
                encode(message: _44.MsgClaimEarnReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgClaimEarnReward;
                fromPartial(object: Partial<_44.MsgClaimEarnReward>): _44.MsgClaimEarnReward;
                fromAmino(object: _44.MsgClaimEarnRewardAmino): _44.MsgClaimEarnReward;
                toAmino(message: _44.MsgClaimEarnReward): _44.MsgClaimEarnRewardAmino;
                fromAminoMsg(object: _44.MsgClaimEarnRewardAminoMsg): _44.MsgClaimEarnReward;
                fromProtoMsg(message: _44.MsgClaimEarnRewardProtoMsg): _44.MsgClaimEarnReward;
                toProto(message: _44.MsgClaimEarnReward): Uint8Array;
                toProtoMsg(message: _44.MsgClaimEarnReward): _44.MsgClaimEarnRewardProtoMsg;
            };
            MsgClaimEarnRewardResponse: {
                typeUrl: string;
                encode(_: _44.MsgClaimEarnRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgClaimEarnRewardResponse;
                fromPartial(_: Partial<_44.MsgClaimEarnRewardResponse>): _44.MsgClaimEarnRewardResponse;
                fromAmino(_: _44.MsgClaimEarnRewardResponseAmino): _44.MsgClaimEarnRewardResponse;
                toAmino(_: _44.MsgClaimEarnRewardResponse): _44.MsgClaimEarnRewardResponseAmino;
                fromAminoMsg(object: _44.MsgClaimEarnRewardResponseAminoMsg): _44.MsgClaimEarnRewardResponse;
                fromProtoMsg(message: _44.MsgClaimEarnRewardResponseProtoMsg): _44.MsgClaimEarnRewardResponse;
                toProto(message: _44.MsgClaimEarnRewardResponse): Uint8Array;
                toProtoMsg(message: _44.MsgClaimEarnRewardResponse): _44.MsgClaimEarnRewardResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _43.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.QueryParamsRequest;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
                fromAmino(_: _43.QueryParamsRequestAmino): _43.QueryParamsRequest;
                toAmino(_: _43.QueryParamsRequest): _43.QueryParamsRequestAmino;
                fromAminoMsg(object: _43.QueryParamsRequestAminoMsg): _43.QueryParamsRequest;
                fromProtoMsg(message: _43.QueryParamsRequestProtoMsg): _43.QueryParamsRequest;
                toProto(message: _43.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _43.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryParamsResponse;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
                fromAmino(object: _43.QueryParamsResponseAmino): _43.QueryParamsResponse;
                toAmino(message: _43.QueryParamsResponse): _43.QueryParamsResponseAmino;
                fromAminoMsg(object: _43.QueryParamsResponseAminoMsg): _43.QueryParamsResponse;
                fromProtoMsg(message: _43.QueryParamsResponseProtoMsg): _43.QueryParamsResponse;
                toProto(message: _43.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseProtoMsg;
            };
            QueryRewardsRequest: {
                typeUrl: string;
                encode(message: _43.QueryRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryRewardsRequest;
                fromPartial(object: Partial<_43.QueryRewardsRequest>): _43.QueryRewardsRequest;
                fromAmino(object: _43.QueryRewardsRequestAmino): _43.QueryRewardsRequest;
                toAmino(message: _43.QueryRewardsRequest): _43.QueryRewardsRequestAmino;
                fromAminoMsg(object: _43.QueryRewardsRequestAminoMsg): _43.QueryRewardsRequest;
                fromProtoMsg(message: _43.QueryRewardsRequestProtoMsg): _43.QueryRewardsRequest;
                toProto(message: _43.QueryRewardsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryRewardsRequest): _43.QueryRewardsRequestProtoMsg;
            };
            QueryRewardsResponse: {
                typeUrl: string;
                encode(message: _43.QueryRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryRewardsResponse;
                fromPartial(object: Partial<_43.QueryRewardsResponse>): _43.QueryRewardsResponse;
                fromAmino(object: _43.QueryRewardsResponseAmino): _43.QueryRewardsResponse;
                toAmino(message: _43.QueryRewardsResponse): _43.QueryRewardsResponseAmino;
                fromAminoMsg(object: _43.QueryRewardsResponseAminoMsg): _43.QueryRewardsResponse;
                fromProtoMsg(message: _43.QueryRewardsResponseProtoMsg): _43.QueryRewardsResponse;
                toProto(message: _43.QueryRewardsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryRewardsResponse): _43.QueryRewardsResponseProtoMsg;
            };
            QueryRewardFactorsRequest: {
                typeUrl: string;
                encode(_: _43.QueryRewardFactorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.QueryRewardFactorsRequest;
                fromPartial(_: Partial<_43.QueryRewardFactorsRequest>): _43.QueryRewardFactorsRequest;
                fromAmino(_: _43.QueryRewardFactorsRequestAmino): _43.QueryRewardFactorsRequest;
                toAmino(_: _43.QueryRewardFactorsRequest): _43.QueryRewardFactorsRequestAmino;
                fromAminoMsg(object: _43.QueryRewardFactorsRequestAminoMsg): _43.QueryRewardFactorsRequest;
                fromProtoMsg(message: _43.QueryRewardFactorsRequestProtoMsg): _43.QueryRewardFactorsRequest;
                toProto(message: _43.QueryRewardFactorsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryRewardFactorsRequest): _43.QueryRewardFactorsRequestProtoMsg;
            };
            QueryRewardFactorsResponse: {
                typeUrl: string;
                encode(message: _43.QueryRewardFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryRewardFactorsResponse;
                fromPartial(object: Partial<_43.QueryRewardFactorsResponse>): _43.QueryRewardFactorsResponse;
                fromAmino(object: _43.QueryRewardFactorsResponseAmino): _43.QueryRewardFactorsResponse;
                toAmino(message: _43.QueryRewardFactorsResponse): _43.QueryRewardFactorsResponseAmino;
                fromAminoMsg(object: _43.QueryRewardFactorsResponseAminoMsg): _43.QueryRewardFactorsResponse;
                fromProtoMsg(message: _43.QueryRewardFactorsResponseProtoMsg): _43.QueryRewardFactorsResponse;
                toProto(message: _43.QueryRewardFactorsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryRewardFactorsResponse): _43.QueryRewardFactorsResponseProtoMsg;
            };
            QueryApyRequest: {
                typeUrl: string;
                encode(_: _43.QueryApyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _43.QueryApyRequest;
                fromPartial(_: Partial<_43.QueryApyRequest>): _43.QueryApyRequest;
                fromAmino(_: _43.QueryApyRequestAmino): _43.QueryApyRequest;
                toAmino(_: _43.QueryApyRequest): _43.QueryApyRequestAmino;
                fromAminoMsg(object: _43.QueryApyRequestAminoMsg): _43.QueryApyRequest;
                fromProtoMsg(message: _43.QueryApyRequestProtoMsg): _43.QueryApyRequest;
                toProto(message: _43.QueryApyRequest): Uint8Array;
                toProtoMsg(message: _43.QueryApyRequest): _43.QueryApyRequestProtoMsg;
            };
            QueryApyResponse: {
                typeUrl: string;
                encode(message: _43.QueryApyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryApyResponse;
                fromPartial(object: Partial<_43.QueryApyResponse>): _43.QueryApyResponse;
                fromAmino(object: _43.QueryApyResponseAmino): _43.QueryApyResponse;
                toAmino(message: _43.QueryApyResponse): _43.QueryApyResponseAmino;
                fromAminoMsg(object: _43.QueryApyResponseAminoMsg): _43.QueryApyResponse;
                fromProtoMsg(message: _43.QueryApyResponseProtoMsg): _43.QueryApyResponse;
                toProto(message: _43.QueryApyResponse): Uint8Array;
                toProtoMsg(message: _43.QueryApyResponse): _43.QueryApyResponseProtoMsg;
            };
            RewardPeriod: {
                typeUrl: string;
                encode(message: _42.RewardPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.RewardPeriod;
                fromPartial(object: Partial<_42.RewardPeriod>): _42.RewardPeriod;
                fromAmino(object: _42.RewardPeriodAmino): _42.RewardPeriod;
                toAmino(message: _42.RewardPeriod): _42.RewardPeriodAmino;
                fromAminoMsg(object: _42.RewardPeriodAminoMsg): _42.RewardPeriod;
                fromProtoMsg(message: _42.RewardPeriodProtoMsg): _42.RewardPeriod;
                toProto(message: _42.RewardPeriod): Uint8Array;
                toProtoMsg(message: _42.RewardPeriod): _42.RewardPeriodProtoMsg;
            };
            MultiRewardPeriod: {
                typeUrl: string;
                encode(message: _42.MultiRewardPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MultiRewardPeriod;
                fromPartial(object: Partial<_42.MultiRewardPeriod>): _42.MultiRewardPeriod;
                fromAmino(object: _42.MultiRewardPeriodAmino): _42.MultiRewardPeriod;
                toAmino(message: _42.MultiRewardPeriod): _42.MultiRewardPeriodAmino;
                fromAminoMsg(object: _42.MultiRewardPeriodAminoMsg): _42.MultiRewardPeriod;
                fromProtoMsg(message: _42.MultiRewardPeriodProtoMsg): _42.MultiRewardPeriod;
                toProto(message: _42.MultiRewardPeriod): Uint8Array;
                toProtoMsg(message: _42.MultiRewardPeriod): _42.MultiRewardPeriodProtoMsg;
            };
            Multiplier: {
                typeUrl: string;
                encode(message: _42.Multiplier, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Multiplier;
                fromPartial(object: Partial<_42.Multiplier>): _42.Multiplier;
                fromAmino(object: _42.MultiplierAmino): _42.Multiplier;
                toAmino(message: _42.Multiplier): _42.MultiplierAmino;
                fromAminoMsg(object: _42.MultiplierAminoMsg): _42.Multiplier;
                fromProtoMsg(message: _42.MultiplierProtoMsg): _42.Multiplier;
                toProto(message: _42.Multiplier): Uint8Array;
                toProtoMsg(message: _42.Multiplier): _42.MultiplierProtoMsg;
            };
            MultipliersPerDenom: {
                typeUrl: string;
                encode(message: _42.MultipliersPerDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MultipliersPerDenom;
                fromPartial(object: Partial<_42.MultipliersPerDenom>): _42.MultipliersPerDenom;
                fromAmino(object: _42.MultipliersPerDenomAmino): _42.MultipliersPerDenom;
                toAmino(message: _42.MultipliersPerDenom): _42.MultipliersPerDenomAmino;
                fromAminoMsg(object: _42.MultipliersPerDenomAminoMsg): _42.MultipliersPerDenom;
                fromProtoMsg(message: _42.MultipliersPerDenomProtoMsg): _42.MultipliersPerDenom;
                toProto(message: _42.MultipliersPerDenom): Uint8Array;
                toProtoMsg(message: _42.MultipliersPerDenom): _42.MultipliersPerDenomProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _42.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Params;
                fromPartial(object: Partial<_42.Params>): _42.Params;
                fromAmino(object: _42.ParamsAmino): _42.Params;
                toAmino(message: _42.Params): _42.ParamsAmino;
                fromAminoMsg(object: _42.ParamsAminoMsg): _42.Params;
                fromProtoMsg(message: _42.ParamsProtoMsg): _42.Params;
                toProto(message: _42.Params): Uint8Array;
                toProtoMsg(message: _42.Params): _42.ParamsProtoMsg;
            };
            AccumulationTime: {
                typeUrl: string;
                encode(message: _41.AccumulationTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.AccumulationTime;
                fromPartial(object: Partial<_41.AccumulationTime>): _41.AccumulationTime;
                fromAmino(object: _41.AccumulationTimeAmino): _41.AccumulationTime;
                toAmino(message: _41.AccumulationTime): _41.AccumulationTimeAmino;
                fromAminoMsg(object: _41.AccumulationTimeAminoMsg): _41.AccumulationTime;
                fromProtoMsg(message: _41.AccumulationTimeProtoMsg): _41.AccumulationTime;
                toProto(message: _41.AccumulationTime): Uint8Array;
                toProtoMsg(message: _41.AccumulationTime): _41.AccumulationTimeProtoMsg;
            };
            GenesisRewardState: {
                typeUrl: string;
                encode(message: _41.GenesisRewardState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.GenesisRewardState;
                fromPartial(object: Partial<_41.GenesisRewardState>): _41.GenesisRewardState;
                fromAmino(object: _41.GenesisRewardStateAmino): _41.GenesisRewardState;
                toAmino(message: _41.GenesisRewardState): _41.GenesisRewardStateAmino;
                fromAminoMsg(object: _41.GenesisRewardStateAminoMsg): _41.GenesisRewardState;
                fromProtoMsg(message: _41.GenesisRewardStateProtoMsg): _41.GenesisRewardState;
                toProto(message: _41.GenesisRewardState): Uint8Array;
                toProtoMsg(message: _41.GenesisRewardState): _41.GenesisRewardStateProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _41.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.GenesisState;
                fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
                fromAmino(object: _41.GenesisStateAmino): _41.GenesisState;
                toAmino(message: _41.GenesisState): _41.GenesisStateAmino;
                fromAminoMsg(object: _41.GenesisStateAminoMsg): _41.GenesisState;
                fromProtoMsg(message: _41.GenesisStateProtoMsg): _41.GenesisState;
                toProto(message: _41.GenesisState): Uint8Array;
                toProtoMsg(message: _41.GenesisState): _41.GenesisStateProtoMsg;
            };
            BaseClaim: {
                typeUrl: string;
                encode(message: _40.BaseClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.BaseClaim;
                fromPartial(object: Partial<_40.BaseClaim>): _40.BaseClaim;
                fromAmino(object: _40.BaseClaimAmino): _40.BaseClaim;
                toAmino(message: _40.BaseClaim): _40.BaseClaimAmino;
                fromAminoMsg(object: _40.BaseClaimAminoMsg): _40.BaseClaim;
                fromProtoMsg(message: _40.BaseClaimProtoMsg): _40.BaseClaim;
                toProto(message: _40.BaseClaim): Uint8Array;
                toProtoMsg(message: _40.BaseClaim): _40.BaseClaimProtoMsg;
            };
            BaseMultiClaim: {
                typeUrl: string;
                encode(message: _40.BaseMultiClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.BaseMultiClaim;
                fromPartial(object: Partial<_40.BaseMultiClaim>): _40.BaseMultiClaim;
                fromAmino(object: _40.BaseMultiClaimAmino): _40.BaseMultiClaim;
                toAmino(message: _40.BaseMultiClaim): _40.BaseMultiClaimAmino;
                fromAminoMsg(object: _40.BaseMultiClaimAminoMsg): _40.BaseMultiClaim;
                fromProtoMsg(message: _40.BaseMultiClaimProtoMsg): _40.BaseMultiClaim;
                toProto(message: _40.BaseMultiClaim): Uint8Array;
                toProtoMsg(message: _40.BaseMultiClaim): _40.BaseMultiClaimProtoMsg;
            };
            RewardIndex: {
                typeUrl: string;
                encode(message: _40.RewardIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.RewardIndex;
                fromPartial(object: Partial<_40.RewardIndex>): _40.RewardIndex;
                fromAmino(object: _40.RewardIndexAmino): _40.RewardIndex;
                toAmino(message: _40.RewardIndex): _40.RewardIndexAmino;
                fromAminoMsg(object: _40.RewardIndexAminoMsg): _40.RewardIndex;
                fromProtoMsg(message: _40.RewardIndexProtoMsg): _40.RewardIndex;
                toProto(message: _40.RewardIndex): Uint8Array;
                toProtoMsg(message: _40.RewardIndex): _40.RewardIndexProtoMsg;
            };
            RewardIndexesProto: {
                typeUrl: string;
                encode(message: _40.RewardIndexesProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.RewardIndexesProto;
                fromPartial(object: Partial<_40.RewardIndexesProto>): _40.RewardIndexesProto;
                fromAmino(object: _40.RewardIndexesProtoAmino): _40.RewardIndexesProto;
                toAmino(message: _40.RewardIndexesProto): _40.RewardIndexesProtoAmino;
                fromAminoMsg(object: _40.RewardIndexesProtoAminoMsg): _40.RewardIndexesProto;
                fromProtoMsg(message: _40.RewardIndexesProtoProtoMsg): _40.RewardIndexesProto;
                toProto(message: _40.RewardIndexesProto): Uint8Array;
                toProtoMsg(message: _40.RewardIndexesProto): _40.RewardIndexesProtoProtoMsg;
            };
            MultiRewardIndex: {
                typeUrl: string;
                encode(message: _40.MultiRewardIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MultiRewardIndex;
                fromPartial(object: Partial<_40.MultiRewardIndex>): _40.MultiRewardIndex;
                fromAmino(object: _40.MultiRewardIndexAmino): _40.MultiRewardIndex;
                toAmino(message: _40.MultiRewardIndex): _40.MultiRewardIndexAmino;
                fromAminoMsg(object: _40.MultiRewardIndexAminoMsg): _40.MultiRewardIndex;
                fromProtoMsg(message: _40.MultiRewardIndexProtoMsg): _40.MultiRewardIndex;
                toProto(message: _40.MultiRewardIndex): Uint8Array;
                toProtoMsg(message: _40.MultiRewardIndex): _40.MultiRewardIndexProtoMsg;
            };
            MultiRewardIndexesProto: {
                typeUrl: string;
                encode(message: _40.MultiRewardIndexesProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.MultiRewardIndexesProto;
                fromPartial(object: Partial<_40.MultiRewardIndexesProto>): _40.MultiRewardIndexesProto;
                fromAmino(object: _40.MultiRewardIndexesProtoAmino): _40.MultiRewardIndexesProto;
                toAmino(message: _40.MultiRewardIndexesProto): _40.MultiRewardIndexesProtoAmino;
                fromAminoMsg(object: _40.MultiRewardIndexesProtoAminoMsg): _40.MultiRewardIndexesProto;
                fromProtoMsg(message: _40.MultiRewardIndexesProtoProtoMsg): _40.MultiRewardIndexesProto;
                toProto(message: _40.MultiRewardIndexesProto): Uint8Array;
                toProtoMsg(message: _40.MultiRewardIndexesProto): _40.MultiRewardIndexesProtoProtoMsg;
            };
            USDXMintingClaim: {
                typeUrl: string;
                encode(message: _40.USDXMintingClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.USDXMintingClaim;
                fromPartial(object: Partial<_40.USDXMintingClaim>): _40.USDXMintingClaim;
                fromAmino(object: _40.USDXMintingClaimAmino): _40.USDXMintingClaim;
                toAmino(message: _40.USDXMintingClaim): _40.USDXMintingClaimAmino;
                fromAminoMsg(object: _40.USDXMintingClaimAminoMsg): _40.USDXMintingClaim;
                fromProtoMsg(message: _40.USDXMintingClaimProtoMsg): _40.USDXMintingClaim;
                toProto(message: _40.USDXMintingClaim): Uint8Array;
                toProtoMsg(message: _40.USDXMintingClaim): _40.USDXMintingClaimProtoMsg;
            };
            HardLiquidityProviderClaim: {
                typeUrl: string;
                encode(message: _40.HardLiquidityProviderClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.HardLiquidityProviderClaim;
                fromPartial(object: Partial<_40.HardLiquidityProviderClaim>): _40.HardLiquidityProviderClaim;
                fromAmino(object: _40.HardLiquidityProviderClaimAmino): _40.HardLiquidityProviderClaim;
                toAmino(message: _40.HardLiquidityProviderClaim): _40.HardLiquidityProviderClaimAmino;
                fromAminoMsg(object: _40.HardLiquidityProviderClaimAminoMsg): _40.HardLiquidityProviderClaim;
                fromProtoMsg(message: _40.HardLiquidityProviderClaimProtoMsg): _40.HardLiquidityProviderClaim;
                toProto(message: _40.HardLiquidityProviderClaim): Uint8Array;
                toProtoMsg(message: _40.HardLiquidityProviderClaim): _40.HardLiquidityProviderClaimProtoMsg;
            };
            DelegatorClaim: {
                typeUrl: string;
                encode(message: _40.DelegatorClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.DelegatorClaim;
                fromPartial(object: Partial<_40.DelegatorClaim>): _40.DelegatorClaim;
                fromAmino(object: _40.DelegatorClaimAmino): _40.DelegatorClaim;
                toAmino(message: _40.DelegatorClaim): _40.DelegatorClaimAmino;
                fromAminoMsg(object: _40.DelegatorClaimAminoMsg): _40.DelegatorClaim;
                fromProtoMsg(message: _40.DelegatorClaimProtoMsg): _40.DelegatorClaim;
                toProto(message: _40.DelegatorClaim): Uint8Array;
                toProtoMsg(message: _40.DelegatorClaim): _40.DelegatorClaimProtoMsg;
            };
            SwapClaim: {
                typeUrl: string;
                encode(message: _40.SwapClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.SwapClaim;
                fromPartial(object: Partial<_40.SwapClaim>): _40.SwapClaim;
                fromAmino(object: _40.SwapClaimAmino): _40.SwapClaim;
                toAmino(message: _40.SwapClaim): _40.SwapClaimAmino;
                fromAminoMsg(object: _40.SwapClaimAminoMsg): _40.SwapClaim;
                fromProtoMsg(message: _40.SwapClaimProtoMsg): _40.SwapClaim;
                toProto(message: _40.SwapClaim): Uint8Array;
                toProtoMsg(message: _40.SwapClaim): _40.SwapClaimProtoMsg;
            };
            SavingsClaim: {
                typeUrl: string;
                encode(message: _40.SavingsClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.SavingsClaim;
                fromPartial(object: Partial<_40.SavingsClaim>): _40.SavingsClaim;
                fromAmino(object: _40.SavingsClaimAmino): _40.SavingsClaim;
                toAmino(message: _40.SavingsClaim): _40.SavingsClaimAmino;
                fromAminoMsg(object: _40.SavingsClaimAminoMsg): _40.SavingsClaim;
                fromProtoMsg(message: _40.SavingsClaimProtoMsg): _40.SavingsClaim;
                toProto(message: _40.SavingsClaim): Uint8Array;
                toProtoMsg(message: _40.SavingsClaim): _40.SavingsClaimProtoMsg;
            };
            EarnClaim: {
                typeUrl: string;
                encode(message: _40.EarnClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.EarnClaim;
                fromPartial(object: Partial<_40.EarnClaim>): _40.EarnClaim;
                fromAmino(object: _40.EarnClaimAmino): _40.EarnClaim;
                toAmino(message: _40.EarnClaim): _40.EarnClaimAmino;
                fromAminoMsg(object: _40.EarnClaimAminoMsg): _40.EarnClaim;
                fromProtoMsg(message: _40.EarnClaimProtoMsg): _40.EarnClaim;
                toProto(message: _40.EarnClaim): Uint8Array;
                toProtoMsg(message: _40.EarnClaim): _40.EarnClaimProtoMsg;
            };
            Apy: {
                typeUrl: string;
                encode(message: _39.Apy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Apy;
                fromPartial(object: Partial<_39.Apy>): _39.Apy;
                fromAmino(object: _39.ApyAmino): _39.Apy;
                toAmino(message: _39.Apy): _39.ApyAmino;
                fromAminoMsg(object: _39.ApyAminoMsg): _39.Apy;
                fromProtoMsg(message: _39.ApyProtoMsg): _39.Apy;
                toProto(message: _39.Apy): Uint8Array;
                toProtoMsg(message: _39.Apy): _39.ApyProtoMsg;
            };
        };
    }
    namespace issuance {
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _46.QueryParamsRequest): Promise<_46.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueTokens(value: _47.MsgIssueTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokens(value: _47.MsgRedeemTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    blockAddress(value: _47.MsgBlockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unblockAddress(value: _47.MsgUnblockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPauseStatus(value: _47.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueTokens(value: _47.MsgIssueTokens): {
                        typeUrl: string;
                        value: _47.MsgIssueTokens;
                    };
                    redeemTokens(value: _47.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _47.MsgRedeemTokens;
                    };
                    blockAddress(value: _47.MsgBlockAddress): {
                        typeUrl: string;
                        value: _47.MsgBlockAddress;
                    };
                    unblockAddress(value: _47.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _47.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _47.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _47.MsgSetPauseStatus;
                    };
                };
                fromJSON: {
                    issueTokens(value: any): {
                        typeUrl: string;
                        value: _47.MsgIssueTokens;
                    };
                    redeemTokens(value: any): {
                        typeUrl: string;
                        value: _47.MsgRedeemTokens;
                    };
                    blockAddress(value: any): {
                        typeUrl: string;
                        value: _47.MsgBlockAddress;
                    };
                    unblockAddress(value: any): {
                        typeUrl: string;
                        value: _47.MsgUnblockAddress;
                    };
                    setPauseStatus(value: any): {
                        typeUrl: string;
                        value: _47.MsgSetPauseStatus;
                    };
                };
                fromPartial: {
                    issueTokens(value: _47.MsgIssueTokens): {
                        typeUrl: string;
                        value: _47.MsgIssueTokens;
                    };
                    redeemTokens(value: _47.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _47.MsgRedeemTokens;
                    };
                    blockAddress(value: _47.MsgBlockAddress): {
                        typeUrl: string;
                        value: _47.MsgBlockAddress;
                    };
                    unblockAddress(value: _47.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _47.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _47.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _47.MsgSetPauseStatus;
                    };
                };
            };
            AminoConverter: {
                "/kava.issuance.v1beta1.MsgIssueTokens": {
                    aminoType: string;
                    toAmino: (message: _47.MsgIssueTokens) => _47.MsgIssueTokensAmino;
                    fromAmino: (object: _47.MsgIssueTokensAmino) => _47.MsgIssueTokens;
                };
                "/kava.issuance.v1beta1.MsgRedeemTokens": {
                    aminoType: string;
                    toAmino: (message: _47.MsgRedeemTokens) => _47.MsgRedeemTokensAmino;
                    fromAmino: (object: _47.MsgRedeemTokensAmino) => _47.MsgRedeemTokens;
                };
                "/kava.issuance.v1beta1.MsgBlockAddress": {
                    aminoType: string;
                    toAmino: (message: _47.MsgBlockAddress) => _47.MsgBlockAddressAmino;
                    fromAmino: (object: _47.MsgBlockAddressAmino) => _47.MsgBlockAddress;
                };
                "/kava.issuance.v1beta1.MsgUnblockAddress": {
                    aminoType: string;
                    toAmino: (message: _47.MsgUnblockAddress) => _47.MsgUnblockAddressAmino;
                    fromAmino: (object: _47.MsgUnblockAddressAmino) => _47.MsgUnblockAddress;
                };
                "/kava.issuance.v1beta1.MsgSetPauseStatus": {
                    aminoType: string;
                    toAmino: (message: _47.MsgSetPauseStatus) => _47.MsgSetPauseStatusAmino;
                    fromAmino: (object: _47.MsgSetPauseStatusAmino) => _47.MsgSetPauseStatus;
                };
            };
            MsgIssueTokens: {
                typeUrl: string;
                encode(message: _47.MsgIssueTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgIssueTokens;
                fromPartial(object: Partial<_47.MsgIssueTokens>): _47.MsgIssueTokens;
                fromAmino(object: _47.MsgIssueTokensAmino): _47.MsgIssueTokens;
                toAmino(message: _47.MsgIssueTokens): _47.MsgIssueTokensAmino;
                fromAminoMsg(object: _47.MsgIssueTokensAminoMsg): _47.MsgIssueTokens;
                fromProtoMsg(message: _47.MsgIssueTokensProtoMsg): _47.MsgIssueTokens;
                toProto(message: _47.MsgIssueTokens): Uint8Array;
                toProtoMsg(message: _47.MsgIssueTokens): _47.MsgIssueTokensProtoMsg;
            };
            MsgIssueTokensResponse: {
                typeUrl: string;
                encode(_: _47.MsgIssueTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgIssueTokensResponse;
                fromPartial(_: Partial<_47.MsgIssueTokensResponse>): _47.MsgIssueTokensResponse;
                fromAmino(_: _47.MsgIssueTokensResponseAmino): _47.MsgIssueTokensResponse;
                toAmino(_: _47.MsgIssueTokensResponse): _47.MsgIssueTokensResponseAmino;
                fromAminoMsg(object: _47.MsgIssueTokensResponseAminoMsg): _47.MsgIssueTokensResponse;
                fromProtoMsg(message: _47.MsgIssueTokensResponseProtoMsg): _47.MsgIssueTokensResponse;
                toProto(message: _47.MsgIssueTokensResponse): Uint8Array;
                toProtoMsg(message: _47.MsgIssueTokensResponse): _47.MsgIssueTokensResponseProtoMsg;
            };
            MsgRedeemTokens: {
                typeUrl: string;
                encode(message: _47.MsgRedeemTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgRedeemTokens;
                fromPartial(object: Partial<_47.MsgRedeemTokens>): _47.MsgRedeemTokens;
                fromAmino(object: _47.MsgRedeemTokensAmino): _47.MsgRedeemTokens;
                toAmino(message: _47.MsgRedeemTokens): _47.MsgRedeemTokensAmino;
                fromAminoMsg(object: _47.MsgRedeemTokensAminoMsg): _47.MsgRedeemTokens;
                fromProtoMsg(message: _47.MsgRedeemTokensProtoMsg): _47.MsgRedeemTokens;
                toProto(message: _47.MsgRedeemTokens): Uint8Array;
                toProtoMsg(message: _47.MsgRedeemTokens): _47.MsgRedeemTokensProtoMsg;
            };
            MsgRedeemTokensResponse: {
                typeUrl: string;
                encode(_: _47.MsgRedeemTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgRedeemTokensResponse;
                fromPartial(_: Partial<_47.MsgRedeemTokensResponse>): _47.MsgRedeemTokensResponse;
                fromAmino(_: _47.MsgRedeemTokensResponseAmino): _47.MsgRedeemTokensResponse;
                toAmino(_: _47.MsgRedeemTokensResponse): _47.MsgRedeemTokensResponseAmino;
                fromAminoMsg(object: _47.MsgRedeemTokensResponseAminoMsg): _47.MsgRedeemTokensResponse;
                fromProtoMsg(message: _47.MsgRedeemTokensResponseProtoMsg): _47.MsgRedeemTokensResponse;
                toProto(message: _47.MsgRedeemTokensResponse): Uint8Array;
                toProtoMsg(message: _47.MsgRedeemTokensResponse): _47.MsgRedeemTokensResponseProtoMsg;
            };
            MsgBlockAddress: {
                typeUrl: string;
                encode(message: _47.MsgBlockAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgBlockAddress;
                fromPartial(object: Partial<_47.MsgBlockAddress>): _47.MsgBlockAddress;
                fromAmino(object: _47.MsgBlockAddressAmino): _47.MsgBlockAddress;
                toAmino(message: _47.MsgBlockAddress): _47.MsgBlockAddressAmino;
                fromAminoMsg(object: _47.MsgBlockAddressAminoMsg): _47.MsgBlockAddress;
                fromProtoMsg(message: _47.MsgBlockAddressProtoMsg): _47.MsgBlockAddress;
                toProto(message: _47.MsgBlockAddress): Uint8Array;
                toProtoMsg(message: _47.MsgBlockAddress): _47.MsgBlockAddressProtoMsg;
            };
            MsgBlockAddressResponse: {
                typeUrl: string;
                encode(_: _47.MsgBlockAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgBlockAddressResponse;
                fromPartial(_: Partial<_47.MsgBlockAddressResponse>): _47.MsgBlockAddressResponse;
                fromAmino(_: _47.MsgBlockAddressResponseAmino): _47.MsgBlockAddressResponse;
                toAmino(_: _47.MsgBlockAddressResponse): _47.MsgBlockAddressResponseAmino;
                fromAminoMsg(object: _47.MsgBlockAddressResponseAminoMsg): _47.MsgBlockAddressResponse;
                fromProtoMsg(message: _47.MsgBlockAddressResponseProtoMsg): _47.MsgBlockAddressResponse;
                toProto(message: _47.MsgBlockAddressResponse): Uint8Array;
                toProtoMsg(message: _47.MsgBlockAddressResponse): _47.MsgBlockAddressResponseProtoMsg;
            };
            MsgUnblockAddress: {
                typeUrl: string;
                encode(message: _47.MsgUnblockAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgUnblockAddress;
                fromPartial(object: Partial<_47.MsgUnblockAddress>): _47.MsgUnblockAddress;
                fromAmino(object: _47.MsgUnblockAddressAmino): _47.MsgUnblockAddress;
                toAmino(message: _47.MsgUnblockAddress): _47.MsgUnblockAddressAmino;
                fromAminoMsg(object: _47.MsgUnblockAddressAminoMsg): _47.MsgUnblockAddress;
                fromProtoMsg(message: _47.MsgUnblockAddressProtoMsg): _47.MsgUnblockAddress;
                toProto(message: _47.MsgUnblockAddress): Uint8Array;
                toProtoMsg(message: _47.MsgUnblockAddress): _47.MsgUnblockAddressProtoMsg;
            };
            MsgUnblockAddressResponse: {
                typeUrl: string;
                encode(_: _47.MsgUnblockAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgUnblockAddressResponse;
                fromPartial(_: Partial<_47.MsgUnblockAddressResponse>): _47.MsgUnblockAddressResponse;
                fromAmino(_: _47.MsgUnblockAddressResponseAmino): _47.MsgUnblockAddressResponse;
                toAmino(_: _47.MsgUnblockAddressResponse): _47.MsgUnblockAddressResponseAmino;
                fromAminoMsg(object: _47.MsgUnblockAddressResponseAminoMsg): _47.MsgUnblockAddressResponse;
                fromProtoMsg(message: _47.MsgUnblockAddressResponseProtoMsg): _47.MsgUnblockAddressResponse;
                toProto(message: _47.MsgUnblockAddressResponse): Uint8Array;
                toProtoMsg(message: _47.MsgUnblockAddressResponse): _47.MsgUnblockAddressResponseProtoMsg;
            };
            MsgSetPauseStatus: {
                typeUrl: string;
                encode(message: _47.MsgSetPauseStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MsgSetPauseStatus;
                fromPartial(object: Partial<_47.MsgSetPauseStatus>): _47.MsgSetPauseStatus;
                fromAmino(object: _47.MsgSetPauseStatusAmino): _47.MsgSetPauseStatus;
                toAmino(message: _47.MsgSetPauseStatus): _47.MsgSetPauseStatusAmino;
                fromAminoMsg(object: _47.MsgSetPauseStatusAminoMsg): _47.MsgSetPauseStatus;
                fromProtoMsg(message: _47.MsgSetPauseStatusProtoMsg): _47.MsgSetPauseStatus;
                toProto(message: _47.MsgSetPauseStatus): Uint8Array;
                toProtoMsg(message: _47.MsgSetPauseStatus): _47.MsgSetPauseStatusProtoMsg;
            };
            MsgSetPauseStatusResponse: {
                typeUrl: string;
                encode(_: _47.MsgSetPauseStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.MsgSetPauseStatusResponse;
                fromPartial(_: Partial<_47.MsgSetPauseStatusResponse>): _47.MsgSetPauseStatusResponse;
                fromAmino(_: _47.MsgSetPauseStatusResponseAmino): _47.MsgSetPauseStatusResponse;
                toAmino(_: _47.MsgSetPauseStatusResponse): _47.MsgSetPauseStatusResponseAmino;
                fromAminoMsg(object: _47.MsgSetPauseStatusResponseAminoMsg): _47.MsgSetPauseStatusResponse;
                fromProtoMsg(message: _47.MsgSetPauseStatusResponseProtoMsg): _47.MsgSetPauseStatusResponse;
                toProto(message: _47.MsgSetPauseStatusResponse): Uint8Array;
                toProtoMsg(message: _47.MsgSetPauseStatusResponse): _47.MsgSetPauseStatusResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _46.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _46.QueryParamsRequest;
                fromPartial(_: Partial<_46.QueryParamsRequest>): _46.QueryParamsRequest;
                fromAmino(_: _46.QueryParamsRequestAmino): _46.QueryParamsRequest;
                toAmino(_: _46.QueryParamsRequest): _46.QueryParamsRequestAmino;
                fromAminoMsg(object: _46.QueryParamsRequestAminoMsg): _46.QueryParamsRequest;
                fromProtoMsg(message: _46.QueryParamsRequestProtoMsg): _46.QueryParamsRequest;
                toProto(message: _46.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _46.QueryParamsRequest): _46.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _46.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.QueryParamsResponse;
                fromPartial(object: Partial<_46.QueryParamsResponse>): _46.QueryParamsResponse;
                fromAmino(object: _46.QueryParamsResponseAmino): _46.QueryParamsResponse;
                toAmino(message: _46.QueryParamsResponse): _46.QueryParamsResponseAmino;
                fromAminoMsg(object: _46.QueryParamsResponseAminoMsg): _46.QueryParamsResponse;
                fromProtoMsg(message: _46.QueryParamsResponseProtoMsg): _46.QueryParamsResponse;
                toProto(message: _46.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _46.QueryParamsResponse): _46.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _45.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
                fromAmino(object: _45.GenesisStateAmino): _45.GenesisState;
                toAmino(message: _45.GenesisState): _45.GenesisStateAmino;
                fromAminoMsg(object: _45.GenesisStateAminoMsg): _45.GenesisState;
                fromProtoMsg(message: _45.GenesisStateProtoMsg): _45.GenesisState;
                toProto(message: _45.GenesisState): Uint8Array;
                toProtoMsg(message: _45.GenesisState): _45.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _45.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Params;
                fromPartial(object: Partial<_45.Params>): _45.Params;
                fromAmino(object: _45.ParamsAmino): _45.Params;
                toAmino(message: _45.Params): _45.ParamsAmino;
                fromAminoMsg(object: _45.ParamsAminoMsg): _45.Params;
                fromProtoMsg(message: _45.ParamsProtoMsg): _45.Params;
                toProto(message: _45.Params): Uint8Array;
                toProtoMsg(message: _45.Params): _45.ParamsProtoMsg;
            };
            Asset: {
                typeUrl: string;
                encode(message: _45.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Asset;
                fromPartial(object: Partial<_45.Asset>): _45.Asset;
                fromAmino(object: _45.AssetAmino): _45.Asset;
                toAmino(message: _45.Asset): _45.AssetAmino;
                fromAminoMsg(object: _45.AssetAminoMsg): _45.Asset;
                fromProtoMsg(message: _45.AssetProtoMsg): _45.Asset;
                toProto(message: _45.Asset): Uint8Array;
                toProtoMsg(message: _45.Asset): _45.AssetProtoMsg;
            };
            RateLimit: {
                typeUrl: string;
                encode(message: _45.RateLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.RateLimit;
                fromPartial(object: Partial<_45.RateLimit>): _45.RateLimit;
                fromAmino(object: _45.RateLimitAmino): _45.RateLimit;
                toAmino(message: _45.RateLimit): _45.RateLimitAmino;
                fromAminoMsg(object: _45.RateLimitAminoMsg): _45.RateLimit;
                fromProtoMsg(message: _45.RateLimitProtoMsg): _45.RateLimit;
                toProto(message: _45.RateLimit): Uint8Array;
                toProtoMsg(message: _45.RateLimit): _45.RateLimitProtoMsg;
            };
            AssetSupply: {
                typeUrl: string;
                encode(message: _45.AssetSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.AssetSupply;
                fromPartial(object: Partial<_45.AssetSupply>): _45.AssetSupply;
                fromAmino(object: _45.AssetSupplyAmino): _45.AssetSupply;
                toAmino(message: _45.AssetSupply): _45.AssetSupplyAmino;
                fromAminoMsg(object: _45.AssetSupplyAminoMsg): _45.AssetSupply;
                fromProtoMsg(message: _45.AssetSupplyProtoMsg): _45.AssetSupply;
                toProto(message: _45.AssetSupply): Uint8Array;
                toProtoMsg(message: _45.AssetSupply): _45.AssetSupplyProtoMsg;
            };
        };
    }
    namespace kavadist {
        const v1beta1: {
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                balance(request?: _51.QueryBalanceRequest): Promise<_51.QueryBalanceResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _51.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.QueryParamsRequest;
                fromPartial(_: Partial<_51.QueryParamsRequest>): _51.QueryParamsRequest;
                fromAmino(_: _51.QueryParamsRequestAmino): _51.QueryParamsRequest;
                toAmino(_: _51.QueryParamsRequest): _51.QueryParamsRequestAmino;
                fromAminoMsg(object: _51.QueryParamsRequestAminoMsg): _51.QueryParamsRequest;
                fromProtoMsg(message: _51.QueryParamsRequestProtoMsg): _51.QueryParamsRequest;
                toProto(message: _51.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryParamsRequest): _51.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _51.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryParamsResponse;
                fromPartial(object: Partial<_51.QueryParamsResponse>): _51.QueryParamsResponse;
                fromAmino(object: _51.QueryParamsResponseAmino): _51.QueryParamsResponse;
                toAmino(message: _51.QueryParamsResponse): _51.QueryParamsResponseAmino;
                fromAminoMsg(object: _51.QueryParamsResponseAminoMsg): _51.QueryParamsResponse;
                fromProtoMsg(message: _51.QueryParamsResponseProtoMsg): _51.QueryParamsResponse;
                toProto(message: _51.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryParamsResponse): _51.QueryParamsResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(_: _51.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.QueryBalanceRequest;
                fromPartial(_: Partial<_51.QueryBalanceRequest>): _51.QueryBalanceRequest;
                fromAmino(_: _51.QueryBalanceRequestAmino): _51.QueryBalanceRequest;
                toAmino(_: _51.QueryBalanceRequest): _51.QueryBalanceRequestAmino;
                fromAminoMsg(object: _51.QueryBalanceRequestAminoMsg): _51.QueryBalanceRequest;
                fromProtoMsg(message: _51.QueryBalanceRequestProtoMsg): _51.QueryBalanceRequest;
                toProto(message: _51.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _51.QueryBalanceRequest): _51.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _51.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.QueryBalanceResponse;
                fromPartial(object: Partial<_51.QueryBalanceResponse>): _51.QueryBalanceResponse;
                fromAmino(object: _51.QueryBalanceResponseAmino): _51.QueryBalanceResponse;
                toAmino(message: _51.QueryBalanceResponse): _51.QueryBalanceResponseAmino;
                fromAminoMsg(object: _51.QueryBalanceResponseAminoMsg): _51.QueryBalanceResponse;
                fromProtoMsg(message: _51.QueryBalanceResponseProtoMsg): _51.QueryBalanceResponse;
                toProto(message: _51.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _51.QueryBalanceResponse): _51.QueryBalanceResponseProtoMsg;
            };
            CommunityPoolMultiSpendProposal: {
                typeUrl: string;
                encode(message: _50.CommunityPoolMultiSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.CommunityPoolMultiSpendProposal;
                fromPartial(object: Partial<_50.CommunityPoolMultiSpendProposal>): _50.CommunityPoolMultiSpendProposal;
                fromAmino(object: _50.CommunityPoolMultiSpendProposalAmino): _50.CommunityPoolMultiSpendProposal;
                toAmino(message: _50.CommunityPoolMultiSpendProposal): _50.CommunityPoolMultiSpendProposalAmino;
                fromAminoMsg(object: _50.CommunityPoolMultiSpendProposalAminoMsg): _50.CommunityPoolMultiSpendProposal;
                fromProtoMsg(message: _50.CommunityPoolMultiSpendProposalProtoMsg): _50.CommunityPoolMultiSpendProposal;
                toProto(message: _50.CommunityPoolMultiSpendProposal): Uint8Array;
                toProtoMsg(message: _50.CommunityPoolMultiSpendProposal): _50.CommunityPoolMultiSpendProposalProtoMsg;
            };
            CommunityPoolMultiSpendProposalJSON: {
                typeUrl: string;
                encode(message: _50.CommunityPoolMultiSpendProposalJSON, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.CommunityPoolMultiSpendProposalJSON;
                fromPartial(object: Partial<_50.CommunityPoolMultiSpendProposalJSON>): _50.CommunityPoolMultiSpendProposalJSON;
                fromAmino(object: _50.CommunityPoolMultiSpendProposalJSONAmino): _50.CommunityPoolMultiSpendProposalJSON;
                toAmino(message: _50.CommunityPoolMultiSpendProposalJSON): _50.CommunityPoolMultiSpendProposalJSONAmino;
                fromAminoMsg(object: _50.CommunityPoolMultiSpendProposalJSONAminoMsg): _50.CommunityPoolMultiSpendProposalJSON;
                fromProtoMsg(message: _50.CommunityPoolMultiSpendProposalJSONProtoMsg): _50.CommunityPoolMultiSpendProposalJSON;
                toProto(message: _50.CommunityPoolMultiSpendProposalJSON): Uint8Array;
                toProtoMsg(message: _50.CommunityPoolMultiSpendProposalJSON): _50.CommunityPoolMultiSpendProposalJSONProtoMsg;
            };
            MultiSpendRecipient: {
                typeUrl: string;
                encode(message: _50.MultiSpendRecipient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MultiSpendRecipient;
                fromPartial(object: Partial<_50.MultiSpendRecipient>): _50.MultiSpendRecipient;
                fromAmino(object: _50.MultiSpendRecipientAmino): _50.MultiSpendRecipient;
                toAmino(message: _50.MultiSpendRecipient): _50.MultiSpendRecipientAmino;
                fromAminoMsg(object: _50.MultiSpendRecipientAminoMsg): _50.MultiSpendRecipient;
                fromProtoMsg(message: _50.MultiSpendRecipientProtoMsg): _50.MultiSpendRecipient;
                toProto(message: _50.MultiSpendRecipient): Uint8Array;
                toProtoMsg(message: _50.MultiSpendRecipient): _50.MultiSpendRecipientProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _49.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Params;
                fromPartial(object: Partial<_49.Params>): _49.Params;
                fromAmino(object: _49.ParamsAmino): _49.Params;
                toAmino(message: _49.Params): _49.ParamsAmino;
                fromAminoMsg(object: _49.ParamsAminoMsg): _49.Params;
                fromProtoMsg(message: _49.ParamsProtoMsg): _49.Params;
                toProto(message: _49.Params): Uint8Array;
                toProtoMsg(message: _49.Params): _49.ParamsProtoMsg;
            };
            InfrastructureParams: {
                typeUrl: string;
                encode(message: _49.InfrastructureParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.InfrastructureParams;
                fromPartial(object: Partial<_49.InfrastructureParams>): _49.InfrastructureParams;
                fromAmino(object: _49.InfrastructureParamsAmino): _49.InfrastructureParams;
                toAmino(message: _49.InfrastructureParams): _49.InfrastructureParamsAmino;
                fromAminoMsg(object: _49.InfrastructureParamsAminoMsg): _49.InfrastructureParams;
                fromProtoMsg(message: _49.InfrastructureParamsProtoMsg): _49.InfrastructureParams;
                toProto(message: _49.InfrastructureParams): Uint8Array;
                toProtoMsg(message: _49.InfrastructureParams): _49.InfrastructureParamsProtoMsg;
            };
            CoreReward: {
                typeUrl: string;
                encode(message: _49.CoreReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.CoreReward;
                fromPartial(object: Partial<_49.CoreReward>): _49.CoreReward;
                fromAmino(object: _49.CoreRewardAmino): _49.CoreReward;
                toAmino(message: _49.CoreReward): _49.CoreRewardAmino;
                fromAminoMsg(object: _49.CoreRewardAminoMsg): _49.CoreReward;
                fromProtoMsg(message: _49.CoreRewardProtoMsg): _49.CoreReward;
                toProto(message: _49.CoreReward): Uint8Array;
                toProtoMsg(message: _49.CoreReward): _49.CoreRewardProtoMsg;
            };
            PartnerReward: {
                typeUrl: string;
                encode(message: _49.PartnerReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.PartnerReward;
                fromPartial(object: Partial<_49.PartnerReward>): _49.PartnerReward;
                fromAmino(object: _49.PartnerRewardAmino): _49.PartnerReward;
                toAmino(message: _49.PartnerReward): _49.PartnerRewardAmino;
                fromAminoMsg(object: _49.PartnerRewardAminoMsg): _49.PartnerReward;
                fromProtoMsg(message: _49.PartnerRewardProtoMsg): _49.PartnerReward;
                toProto(message: _49.PartnerReward): Uint8Array;
                toProtoMsg(message: _49.PartnerReward): _49.PartnerRewardProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _49.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Period;
                fromPartial(object: Partial<_49.Period>): _49.Period;
                fromAmino(object: _49.PeriodAmino): _49.Period;
                toAmino(message: _49.Period): _49.PeriodAmino;
                fromAminoMsg(object: _49.PeriodAminoMsg): _49.Period;
                fromProtoMsg(message: _49.PeriodProtoMsg): _49.Period;
                toProto(message: _49.Period): Uint8Array;
                toProtoMsg(message: _49.Period): _49.PeriodProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _48.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
                fromAmino(object: _48.GenesisStateAmino): _48.GenesisState;
                toAmino(message: _48.GenesisState): _48.GenesisStateAmino;
                fromAminoMsg(object: _48.GenesisStateAminoMsg): _48.GenesisState;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
        };
    }
    namespace liquid {
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                delegatedBalance(request: _52.QueryDelegatedBalanceRequest): Promise<_52.QueryDelegatedBalanceResponse>;
                totalSupply(request?: _52.QueryTotalSupplyRequest): Promise<_52.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintDerivative(value: _53.MsgMintDerivative): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnDerivative(value: _53.MsgBurnDerivative): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintDerivative(value: _53.MsgMintDerivative): {
                        typeUrl: string;
                        value: _53.MsgMintDerivative;
                    };
                    burnDerivative(value: _53.MsgBurnDerivative): {
                        typeUrl: string;
                        value: _53.MsgBurnDerivative;
                    };
                };
                fromJSON: {
                    mintDerivative(value: any): {
                        typeUrl: string;
                        value: _53.MsgMintDerivative;
                    };
                    burnDerivative(value: any): {
                        typeUrl: string;
                        value: _53.MsgBurnDerivative;
                    };
                };
                fromPartial: {
                    mintDerivative(value: _53.MsgMintDerivative): {
                        typeUrl: string;
                        value: _53.MsgMintDerivative;
                    };
                    burnDerivative(value: _53.MsgBurnDerivative): {
                        typeUrl: string;
                        value: _53.MsgBurnDerivative;
                    };
                };
            };
            AminoConverter: {
                "/kava.liquid.v1beta1.MsgMintDerivative": {
                    aminoType: string;
                    toAmino: (message: _53.MsgMintDerivative) => _53.MsgMintDerivativeAmino;
                    fromAmino: (object: _53.MsgMintDerivativeAmino) => _53.MsgMintDerivative;
                };
                "/kava.liquid.v1beta1.MsgBurnDerivative": {
                    aminoType: string;
                    toAmino: (message: _53.MsgBurnDerivative) => _53.MsgBurnDerivativeAmino;
                    fromAmino: (object: _53.MsgBurnDerivativeAmino) => _53.MsgBurnDerivative;
                };
            };
            MsgMintDerivative: {
                typeUrl: string;
                encode(message: _53.MsgMintDerivative, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgMintDerivative;
                fromPartial(object: Partial<_53.MsgMintDerivative>): _53.MsgMintDerivative;
                fromAmino(object: _53.MsgMintDerivativeAmino): _53.MsgMintDerivative;
                toAmino(message: _53.MsgMintDerivative): _53.MsgMintDerivativeAmino;
                fromAminoMsg(object: _53.MsgMintDerivativeAminoMsg): _53.MsgMintDerivative;
                fromProtoMsg(message: _53.MsgMintDerivativeProtoMsg): _53.MsgMintDerivative;
                toProto(message: _53.MsgMintDerivative): Uint8Array;
                toProtoMsg(message: _53.MsgMintDerivative): _53.MsgMintDerivativeProtoMsg;
            };
            MsgMintDerivativeResponse: {
                typeUrl: string;
                encode(message: _53.MsgMintDerivativeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgMintDerivativeResponse;
                fromPartial(object: Partial<_53.MsgMintDerivativeResponse>): _53.MsgMintDerivativeResponse;
                fromAmino(object: _53.MsgMintDerivativeResponseAmino): _53.MsgMintDerivativeResponse;
                toAmino(message: _53.MsgMintDerivativeResponse): _53.MsgMintDerivativeResponseAmino;
                fromAminoMsg(object: _53.MsgMintDerivativeResponseAminoMsg): _53.MsgMintDerivativeResponse;
                fromProtoMsg(message: _53.MsgMintDerivativeResponseProtoMsg): _53.MsgMintDerivativeResponse;
                toProto(message: _53.MsgMintDerivativeResponse): Uint8Array;
                toProtoMsg(message: _53.MsgMintDerivativeResponse): _53.MsgMintDerivativeResponseProtoMsg;
            };
            MsgBurnDerivative: {
                typeUrl: string;
                encode(message: _53.MsgBurnDerivative, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgBurnDerivative;
                fromPartial(object: Partial<_53.MsgBurnDerivative>): _53.MsgBurnDerivative;
                fromAmino(object: _53.MsgBurnDerivativeAmino): _53.MsgBurnDerivative;
                toAmino(message: _53.MsgBurnDerivative): _53.MsgBurnDerivativeAmino;
                fromAminoMsg(object: _53.MsgBurnDerivativeAminoMsg): _53.MsgBurnDerivative;
                fromProtoMsg(message: _53.MsgBurnDerivativeProtoMsg): _53.MsgBurnDerivative;
                toProto(message: _53.MsgBurnDerivative): Uint8Array;
                toProtoMsg(message: _53.MsgBurnDerivative): _53.MsgBurnDerivativeProtoMsg;
            };
            MsgBurnDerivativeResponse: {
                typeUrl: string;
                encode(message: _53.MsgBurnDerivativeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.MsgBurnDerivativeResponse;
                fromPartial(object: Partial<_53.MsgBurnDerivativeResponse>): _53.MsgBurnDerivativeResponse;
                fromAmino(object: _53.MsgBurnDerivativeResponseAmino): _53.MsgBurnDerivativeResponse;
                toAmino(message: _53.MsgBurnDerivativeResponse): _53.MsgBurnDerivativeResponseAmino;
                fromAminoMsg(object: _53.MsgBurnDerivativeResponseAminoMsg): _53.MsgBurnDerivativeResponse;
                fromProtoMsg(message: _53.MsgBurnDerivativeResponseProtoMsg): _53.MsgBurnDerivativeResponse;
                toProto(message: _53.MsgBurnDerivativeResponse): Uint8Array;
                toProtoMsg(message: _53.MsgBurnDerivativeResponse): _53.MsgBurnDerivativeResponseProtoMsg;
            };
            QueryDelegatedBalanceRequest: {
                typeUrl: string;
                encode(message: _52.QueryDelegatedBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDelegatedBalanceRequest;
                fromPartial(object: Partial<_52.QueryDelegatedBalanceRequest>): _52.QueryDelegatedBalanceRequest;
                fromAmino(object: _52.QueryDelegatedBalanceRequestAmino): _52.QueryDelegatedBalanceRequest;
                toAmino(message: _52.QueryDelegatedBalanceRequest): _52.QueryDelegatedBalanceRequestAmino;
                fromAminoMsg(object: _52.QueryDelegatedBalanceRequestAminoMsg): _52.QueryDelegatedBalanceRequest;
                fromProtoMsg(message: _52.QueryDelegatedBalanceRequestProtoMsg): _52.QueryDelegatedBalanceRequest;
                toProto(message: _52.QueryDelegatedBalanceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryDelegatedBalanceRequest): _52.QueryDelegatedBalanceRequestProtoMsg;
            };
            QueryDelegatedBalanceResponse: {
                typeUrl: string;
                encode(message: _52.QueryDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryDelegatedBalanceResponse;
                fromPartial(object: Partial<_52.QueryDelegatedBalanceResponse>): _52.QueryDelegatedBalanceResponse;
                fromAmino(object: _52.QueryDelegatedBalanceResponseAmino): _52.QueryDelegatedBalanceResponse;
                toAmino(message: _52.QueryDelegatedBalanceResponse): _52.QueryDelegatedBalanceResponseAmino;
                fromAminoMsg(object: _52.QueryDelegatedBalanceResponseAminoMsg): _52.QueryDelegatedBalanceResponse;
                fromProtoMsg(message: _52.QueryDelegatedBalanceResponseProtoMsg): _52.QueryDelegatedBalanceResponse;
                toProto(message: _52.QueryDelegatedBalanceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryDelegatedBalanceResponse): _52.QueryDelegatedBalanceResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(_: _52.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_52.QueryTotalSupplyRequest>): _52.QueryTotalSupplyRequest;
                fromAmino(_: _52.QueryTotalSupplyRequestAmino): _52.QueryTotalSupplyRequest;
                toAmino(_: _52.QueryTotalSupplyRequest): _52.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _52.QueryTotalSupplyRequestAminoMsg): _52.QueryTotalSupplyRequest;
                fromProtoMsg(message: _52.QueryTotalSupplyRequestProtoMsg): _52.QueryTotalSupplyRequest;
                toProto(message: _52.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _52.QueryTotalSupplyRequest): _52.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _52.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_52.QueryTotalSupplyResponse>): _52.QueryTotalSupplyResponse;
                fromAmino(object: _52.QueryTotalSupplyResponseAmino): _52.QueryTotalSupplyResponse;
                toAmino(message: _52.QueryTotalSupplyResponse): _52.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _52.QueryTotalSupplyResponseAminoMsg): _52.QueryTotalSupplyResponse;
                fromProtoMsg(message: _52.QueryTotalSupplyResponseProtoMsg): _52.QueryTotalSupplyResponse;
                toProto(message: _52.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _52.QueryTotalSupplyResponse): _52.QueryTotalSupplyResponseProtoMsg;
            };
        };
    }
    namespace pricefeed {
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                price(request: _55.QueryPriceRequest): Promise<_55.QueryPriceResponse>;
                prices(request?: _55.QueryPricesRequest): Promise<_55.QueryPricesResponse>;
                rawPrices(request: _55.QueryRawPricesRequest): Promise<_55.QueryRawPricesResponse>;
                oracles(request: _55.QueryOraclesRequest): Promise<_55.QueryOraclesResponse>;
                markets(request?: _55.QueryMarketsRequest): Promise<_55.QueryMarketsResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    postPrice(value: _57.MsgPostPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    postPrice(value: _57.MsgPostPrice): {
                        typeUrl: string;
                        value: _57.MsgPostPrice;
                    };
                };
                fromJSON: {
                    postPrice(value: any): {
                        typeUrl: string;
                        value: _57.MsgPostPrice;
                    };
                };
                fromPartial: {
                    postPrice(value: _57.MsgPostPrice): {
                        typeUrl: string;
                        value: _57.MsgPostPrice;
                    };
                };
            };
            AminoConverter: {
                "/kava.pricefeed.v1beta1.MsgPostPrice": {
                    aminoType: string;
                    toAmino: (message: _57.MsgPostPrice) => _57.MsgPostPriceAmino;
                    fromAmino: (object: _57.MsgPostPriceAmino) => _57.MsgPostPrice;
                };
            };
            MsgPostPrice: {
                typeUrl: string;
                encode(message: _57.MsgPostPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.MsgPostPrice;
                fromPartial(object: Partial<_57.MsgPostPrice>): _57.MsgPostPrice;
                fromAmino(object: _57.MsgPostPriceAmino): _57.MsgPostPrice;
                toAmino(message: _57.MsgPostPrice): _57.MsgPostPriceAmino;
                fromAminoMsg(object: _57.MsgPostPriceAminoMsg): _57.MsgPostPrice;
                fromProtoMsg(message: _57.MsgPostPriceProtoMsg): _57.MsgPostPrice;
                toProto(message: _57.MsgPostPrice): Uint8Array;
                toProtoMsg(message: _57.MsgPostPrice): _57.MsgPostPriceProtoMsg;
            };
            MsgPostPriceResponse: {
                typeUrl: string;
                encode(_: _57.MsgPostPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.MsgPostPriceResponse;
                fromPartial(_: Partial<_57.MsgPostPriceResponse>): _57.MsgPostPriceResponse;
                fromAmino(_: _57.MsgPostPriceResponseAmino): _57.MsgPostPriceResponse;
                toAmino(_: _57.MsgPostPriceResponse): _57.MsgPostPriceResponseAmino;
                fromAminoMsg(object: _57.MsgPostPriceResponseAminoMsg): _57.MsgPostPriceResponse;
                fromProtoMsg(message: _57.MsgPostPriceResponseProtoMsg): _57.MsgPostPriceResponse;
                toProto(message: _57.MsgPostPriceResponse): Uint8Array;
                toProtoMsg(message: _57.MsgPostPriceResponse): _57.MsgPostPriceResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _56.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Params;
                fromPartial(object: Partial<_56.Params>): _56.Params;
                fromAmino(object: _56.ParamsAmino): _56.Params;
                toAmino(message: _56.Params): _56.ParamsAmino;
                fromAminoMsg(object: _56.ParamsAminoMsg): _56.Params;
                fromProtoMsg(message: _56.ParamsProtoMsg): _56.Params;
                toProto(message: _56.Params): Uint8Array;
                toProtoMsg(message: _56.Params): _56.ParamsProtoMsg;
            };
            Market: {
                typeUrl: string;
                encode(message: _56.Market, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Market;
                fromPartial(object: Partial<_56.Market>): _56.Market;
                fromAmino(object: _56.MarketAmino): _56.Market;
                toAmino(message: _56.Market): _56.MarketAmino;
                fromAminoMsg(object: _56.MarketAminoMsg): _56.Market;
                fromProtoMsg(message: _56.MarketProtoMsg): _56.Market;
                toProto(message: _56.Market): Uint8Array;
                toProtoMsg(message: _56.Market): _56.MarketProtoMsg;
            };
            PostedPrice: {
                typeUrl: string;
                encode(message: _56.PostedPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.PostedPrice;
                fromPartial(object: Partial<_56.PostedPrice>): _56.PostedPrice;
                fromAmino(object: _56.PostedPriceAmino): _56.PostedPrice;
                toAmino(message: _56.PostedPrice): _56.PostedPriceAmino;
                fromAminoMsg(object: _56.PostedPriceAminoMsg): _56.PostedPrice;
                fromProtoMsg(message: _56.PostedPriceProtoMsg): _56.PostedPrice;
                toProto(message: _56.PostedPrice): Uint8Array;
                toProtoMsg(message: _56.PostedPrice): _56.PostedPriceProtoMsg;
            };
            CurrentPrice: {
                typeUrl: string;
                encode(message: _56.CurrentPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CurrentPrice;
                fromPartial(object: Partial<_56.CurrentPrice>): _56.CurrentPrice;
                fromAmino(object: _56.CurrentPriceAmino): _56.CurrentPrice;
                toAmino(message: _56.CurrentPrice): _56.CurrentPriceAmino;
                fromAminoMsg(object: _56.CurrentPriceAminoMsg): _56.CurrentPrice;
                fromProtoMsg(message: _56.CurrentPriceProtoMsg): _56.CurrentPrice;
                toProto(message: _56.CurrentPrice): Uint8Array;
                toProtoMsg(message: _56.CurrentPrice): _56.CurrentPriceProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _55.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.QueryParamsRequest;
                fromPartial(_: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
                fromAmino(_: _55.QueryParamsRequestAmino): _55.QueryParamsRequest;
                toAmino(_: _55.QueryParamsRequest): _55.QueryParamsRequestAmino;
                fromAminoMsg(object: _55.QueryParamsRequestAminoMsg): _55.QueryParamsRequest;
                fromProtoMsg(message: _55.QueryParamsRequestProtoMsg): _55.QueryParamsRequest;
                toProto(message: _55.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _55.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryParamsResponse;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
                fromAmino(object: _55.QueryParamsResponseAmino): _55.QueryParamsResponse;
                toAmino(message: _55.QueryParamsResponse): _55.QueryParamsResponseAmino;
                fromAminoMsg(object: _55.QueryParamsResponseAminoMsg): _55.QueryParamsResponse;
                fromProtoMsg(message: _55.QueryParamsResponseProtoMsg): _55.QueryParamsResponse;
                toProto(message: _55.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseProtoMsg;
            };
            QueryPriceRequest: {
                typeUrl: string;
                encode(message: _55.QueryPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryPriceRequest;
                fromPartial(object: Partial<_55.QueryPriceRequest>): _55.QueryPriceRequest;
                fromAmino(object: _55.QueryPriceRequestAmino): _55.QueryPriceRequest;
                toAmino(message: _55.QueryPriceRequest): _55.QueryPriceRequestAmino;
                fromAminoMsg(object: _55.QueryPriceRequestAminoMsg): _55.QueryPriceRequest;
                fromProtoMsg(message: _55.QueryPriceRequestProtoMsg): _55.QueryPriceRequest;
                toProto(message: _55.QueryPriceRequest): Uint8Array;
                toProtoMsg(message: _55.QueryPriceRequest): _55.QueryPriceRequestProtoMsg;
            };
            QueryPriceResponse: {
                typeUrl: string;
                encode(message: _55.QueryPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryPriceResponse;
                fromPartial(object: Partial<_55.QueryPriceResponse>): _55.QueryPriceResponse;
                fromAmino(object: _55.QueryPriceResponseAmino): _55.QueryPriceResponse;
                toAmino(message: _55.QueryPriceResponse): _55.QueryPriceResponseAmino;
                fromAminoMsg(object: _55.QueryPriceResponseAminoMsg): _55.QueryPriceResponse;
                fromProtoMsg(message: _55.QueryPriceResponseProtoMsg): _55.QueryPriceResponse;
                toProto(message: _55.QueryPriceResponse): Uint8Array;
                toProtoMsg(message: _55.QueryPriceResponse): _55.QueryPriceResponseProtoMsg;
            };
            QueryPricesRequest: {
                typeUrl: string;
                encode(_: _55.QueryPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.QueryPricesRequest;
                fromPartial(_: Partial<_55.QueryPricesRequest>): _55.QueryPricesRequest;
                fromAmino(_: _55.QueryPricesRequestAmino): _55.QueryPricesRequest;
                toAmino(_: _55.QueryPricesRequest): _55.QueryPricesRequestAmino;
                fromAminoMsg(object: _55.QueryPricesRequestAminoMsg): _55.QueryPricesRequest;
                fromProtoMsg(message: _55.QueryPricesRequestProtoMsg): _55.QueryPricesRequest;
                toProto(message: _55.QueryPricesRequest): Uint8Array;
                toProtoMsg(message: _55.QueryPricesRequest): _55.QueryPricesRequestProtoMsg;
            };
            QueryPricesResponse: {
                typeUrl: string;
                encode(message: _55.QueryPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryPricesResponse;
                fromPartial(object: Partial<_55.QueryPricesResponse>): _55.QueryPricesResponse;
                fromAmino(object: _55.QueryPricesResponseAmino): _55.QueryPricesResponse;
                toAmino(message: _55.QueryPricesResponse): _55.QueryPricesResponseAmino;
                fromAminoMsg(object: _55.QueryPricesResponseAminoMsg): _55.QueryPricesResponse;
                fromProtoMsg(message: _55.QueryPricesResponseProtoMsg): _55.QueryPricesResponse;
                toProto(message: _55.QueryPricesResponse): Uint8Array;
                toProtoMsg(message: _55.QueryPricesResponse): _55.QueryPricesResponseProtoMsg;
            };
            QueryRawPricesRequest: {
                typeUrl: string;
                encode(message: _55.QueryRawPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryRawPricesRequest;
                fromPartial(object: Partial<_55.QueryRawPricesRequest>): _55.QueryRawPricesRequest;
                fromAmino(object: _55.QueryRawPricesRequestAmino): _55.QueryRawPricesRequest;
                toAmino(message: _55.QueryRawPricesRequest): _55.QueryRawPricesRequestAmino;
                fromAminoMsg(object: _55.QueryRawPricesRequestAminoMsg): _55.QueryRawPricesRequest;
                fromProtoMsg(message: _55.QueryRawPricesRequestProtoMsg): _55.QueryRawPricesRequest;
                toProto(message: _55.QueryRawPricesRequest): Uint8Array;
                toProtoMsg(message: _55.QueryRawPricesRequest): _55.QueryRawPricesRequestProtoMsg;
            };
            QueryRawPricesResponse: {
                typeUrl: string;
                encode(message: _55.QueryRawPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryRawPricesResponse;
                fromPartial(object: Partial<_55.QueryRawPricesResponse>): _55.QueryRawPricesResponse;
                fromAmino(object: _55.QueryRawPricesResponseAmino): _55.QueryRawPricesResponse;
                toAmino(message: _55.QueryRawPricesResponse): _55.QueryRawPricesResponseAmino;
                fromAminoMsg(object: _55.QueryRawPricesResponseAminoMsg): _55.QueryRawPricesResponse;
                fromProtoMsg(message: _55.QueryRawPricesResponseProtoMsg): _55.QueryRawPricesResponse;
                toProto(message: _55.QueryRawPricesResponse): Uint8Array;
                toProtoMsg(message: _55.QueryRawPricesResponse): _55.QueryRawPricesResponseProtoMsg;
            };
            QueryOraclesRequest: {
                typeUrl: string;
                encode(message: _55.QueryOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryOraclesRequest;
                fromPartial(object: Partial<_55.QueryOraclesRequest>): _55.QueryOraclesRequest;
                fromAmino(object: _55.QueryOraclesRequestAmino): _55.QueryOraclesRequest;
                toAmino(message: _55.QueryOraclesRequest): _55.QueryOraclesRequestAmino;
                fromAminoMsg(object: _55.QueryOraclesRequestAminoMsg): _55.QueryOraclesRequest;
                fromProtoMsg(message: _55.QueryOraclesRequestProtoMsg): _55.QueryOraclesRequest;
                toProto(message: _55.QueryOraclesRequest): Uint8Array;
                toProtoMsg(message: _55.QueryOraclesRequest): _55.QueryOraclesRequestProtoMsg;
            };
            QueryOraclesResponse: {
                typeUrl: string;
                encode(message: _55.QueryOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryOraclesResponse;
                fromPartial(object: Partial<_55.QueryOraclesResponse>): _55.QueryOraclesResponse;
                fromAmino(object: _55.QueryOraclesResponseAmino): _55.QueryOraclesResponse;
                toAmino(message: _55.QueryOraclesResponse): _55.QueryOraclesResponseAmino;
                fromAminoMsg(object: _55.QueryOraclesResponseAminoMsg): _55.QueryOraclesResponse;
                fromProtoMsg(message: _55.QueryOraclesResponseProtoMsg): _55.QueryOraclesResponse;
                toProto(message: _55.QueryOraclesResponse): Uint8Array;
                toProtoMsg(message: _55.QueryOraclesResponse): _55.QueryOraclesResponseProtoMsg;
            };
            QueryMarketsRequest: {
                typeUrl: string;
                encode(_: _55.QueryMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.QueryMarketsRequest;
                fromPartial(_: Partial<_55.QueryMarketsRequest>): _55.QueryMarketsRequest;
                fromAmino(_: _55.QueryMarketsRequestAmino): _55.QueryMarketsRequest;
                toAmino(_: _55.QueryMarketsRequest): _55.QueryMarketsRequestAmino;
                fromAminoMsg(object: _55.QueryMarketsRequestAminoMsg): _55.QueryMarketsRequest;
                fromProtoMsg(message: _55.QueryMarketsRequestProtoMsg): _55.QueryMarketsRequest;
                toProto(message: _55.QueryMarketsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryMarketsRequest): _55.QueryMarketsRequestProtoMsg;
            };
            QueryMarketsResponse: {
                typeUrl: string;
                encode(message: _55.QueryMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.QueryMarketsResponse;
                fromPartial(object: Partial<_55.QueryMarketsResponse>): _55.QueryMarketsResponse;
                fromAmino(object: _55.QueryMarketsResponseAmino): _55.QueryMarketsResponse;
                toAmino(message: _55.QueryMarketsResponse): _55.QueryMarketsResponseAmino;
                fromAminoMsg(object: _55.QueryMarketsResponseAminoMsg): _55.QueryMarketsResponse;
                fromProtoMsg(message: _55.QueryMarketsResponseProtoMsg): _55.QueryMarketsResponse;
                toProto(message: _55.QueryMarketsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryMarketsResponse): _55.QueryMarketsResponseProtoMsg;
            };
            PostedPriceResponse: {
                typeUrl: string;
                encode(message: _55.PostedPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.PostedPriceResponse;
                fromPartial(object: Partial<_55.PostedPriceResponse>): _55.PostedPriceResponse;
                fromAmino(object: _55.PostedPriceResponseAmino): _55.PostedPriceResponse;
                toAmino(message: _55.PostedPriceResponse): _55.PostedPriceResponseAmino;
                fromAminoMsg(object: _55.PostedPriceResponseAminoMsg): _55.PostedPriceResponse;
                fromProtoMsg(message: _55.PostedPriceResponseProtoMsg): _55.PostedPriceResponse;
                toProto(message: _55.PostedPriceResponse): Uint8Array;
                toProtoMsg(message: _55.PostedPriceResponse): _55.PostedPriceResponseProtoMsg;
            };
            CurrentPriceResponse: {
                typeUrl: string;
                encode(message: _55.CurrentPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.CurrentPriceResponse;
                fromPartial(object: Partial<_55.CurrentPriceResponse>): _55.CurrentPriceResponse;
                fromAmino(object: _55.CurrentPriceResponseAmino): _55.CurrentPriceResponse;
                toAmino(message: _55.CurrentPriceResponse): _55.CurrentPriceResponseAmino;
                fromAminoMsg(object: _55.CurrentPriceResponseAminoMsg): _55.CurrentPriceResponse;
                fromProtoMsg(message: _55.CurrentPriceResponseProtoMsg): _55.CurrentPriceResponse;
                toProto(message: _55.CurrentPriceResponse): Uint8Array;
                toProtoMsg(message: _55.CurrentPriceResponse): _55.CurrentPriceResponseProtoMsg;
            };
            MarketResponse: {
                typeUrl: string;
                encode(message: _55.MarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MarketResponse;
                fromPartial(object: Partial<_55.MarketResponse>): _55.MarketResponse;
                fromAmino(object: _55.MarketResponseAmino): _55.MarketResponse;
                toAmino(message: _55.MarketResponse): _55.MarketResponseAmino;
                fromAminoMsg(object: _55.MarketResponseAminoMsg): _55.MarketResponse;
                fromProtoMsg(message: _55.MarketResponseProtoMsg): _55.MarketResponse;
                toProto(message: _55.MarketResponse): Uint8Array;
                toProtoMsg(message: _55.MarketResponse): _55.MarketResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _54.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.GenesisState;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
        };
    }
    namespace router {
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintDeposit(value: _58.MsgMintDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateMintDeposit(value: _58.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawBurn(value: _58.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawBurnUndelegate(value: _58.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintDeposit(value: _58.MsgMintDeposit): {
                        typeUrl: string;
                        value: _58.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: _58.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: _58.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: _58.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: _58.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: _58.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: _58.MsgWithdrawBurnUndelegate;
                    };
                };
                fromJSON: {
                    mintDeposit(value: any): {
                        typeUrl: string;
                        value: _58.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: any): {
                        typeUrl: string;
                        value: _58.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: any): {
                        typeUrl: string;
                        value: _58.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: any): {
                        typeUrl: string;
                        value: _58.MsgWithdrawBurnUndelegate;
                    };
                };
                fromPartial: {
                    mintDeposit(value: _58.MsgMintDeposit): {
                        typeUrl: string;
                        value: _58.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: _58.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: _58.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: _58.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: _58.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: _58.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: _58.MsgWithdrawBurnUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/kava.router.v1beta1.MsgMintDeposit": {
                    aminoType: string;
                    toAmino: (message: _58.MsgMintDeposit) => _58.MsgMintDepositAmino;
                    fromAmino: (object: _58.MsgMintDepositAmino) => _58.MsgMintDeposit;
                };
                "/kava.router.v1beta1.MsgDelegateMintDeposit": {
                    aminoType: string;
                    toAmino: (message: _58.MsgDelegateMintDeposit) => _58.MsgDelegateMintDepositAmino;
                    fromAmino: (object: _58.MsgDelegateMintDepositAmino) => _58.MsgDelegateMintDeposit;
                };
                "/kava.router.v1beta1.MsgWithdrawBurn": {
                    aminoType: string;
                    toAmino: (message: _58.MsgWithdrawBurn) => _58.MsgWithdrawBurnAmino;
                    fromAmino: (object: _58.MsgWithdrawBurnAmino) => _58.MsgWithdrawBurn;
                };
                "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
                    aminoType: string;
                    toAmino: (message: _58.MsgWithdrawBurnUndelegate) => _58.MsgWithdrawBurnUndelegateAmino;
                    fromAmino: (object: _58.MsgWithdrawBurnUndelegateAmino) => _58.MsgWithdrawBurnUndelegate;
                };
            };
            MsgMintDeposit: {
                typeUrl: string;
                encode(message: _58.MsgMintDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgMintDeposit;
                fromPartial(object: Partial<_58.MsgMintDeposit>): _58.MsgMintDeposit;
                fromAmino(object: _58.MsgMintDepositAmino): _58.MsgMintDeposit;
                toAmino(message: _58.MsgMintDeposit): _58.MsgMintDepositAmino;
                fromAminoMsg(object: _58.MsgMintDepositAminoMsg): _58.MsgMintDeposit;
                fromProtoMsg(message: _58.MsgMintDepositProtoMsg): _58.MsgMintDeposit;
                toProto(message: _58.MsgMintDeposit): Uint8Array;
                toProtoMsg(message: _58.MsgMintDeposit): _58.MsgMintDepositProtoMsg;
            };
            MsgMintDepositResponse: {
                typeUrl: string;
                encode(_: _58.MsgMintDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgMintDepositResponse;
                fromPartial(_: Partial<_58.MsgMintDepositResponse>): _58.MsgMintDepositResponse;
                fromAmino(_: _58.MsgMintDepositResponseAmino): _58.MsgMintDepositResponse;
                toAmino(_: _58.MsgMintDepositResponse): _58.MsgMintDepositResponseAmino;
                fromAminoMsg(object: _58.MsgMintDepositResponseAminoMsg): _58.MsgMintDepositResponse;
                fromProtoMsg(message: _58.MsgMintDepositResponseProtoMsg): _58.MsgMintDepositResponse;
                toProto(message: _58.MsgMintDepositResponse): Uint8Array;
                toProtoMsg(message: _58.MsgMintDepositResponse): _58.MsgMintDepositResponseProtoMsg;
            };
            MsgDelegateMintDeposit: {
                typeUrl: string;
                encode(message: _58.MsgDelegateMintDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgDelegateMintDeposit;
                fromPartial(object: Partial<_58.MsgDelegateMintDeposit>): _58.MsgDelegateMintDeposit;
                fromAmino(object: _58.MsgDelegateMintDepositAmino): _58.MsgDelegateMintDeposit;
                toAmino(message: _58.MsgDelegateMintDeposit): _58.MsgDelegateMintDepositAmino;
                fromAminoMsg(object: _58.MsgDelegateMintDepositAminoMsg): _58.MsgDelegateMintDeposit;
                fromProtoMsg(message: _58.MsgDelegateMintDepositProtoMsg): _58.MsgDelegateMintDeposit;
                toProto(message: _58.MsgDelegateMintDeposit): Uint8Array;
                toProtoMsg(message: _58.MsgDelegateMintDeposit): _58.MsgDelegateMintDepositProtoMsg;
            };
            MsgDelegateMintDepositResponse: {
                typeUrl: string;
                encode(_: _58.MsgDelegateMintDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgDelegateMintDepositResponse;
                fromPartial(_: Partial<_58.MsgDelegateMintDepositResponse>): _58.MsgDelegateMintDepositResponse;
                fromAmino(_: _58.MsgDelegateMintDepositResponseAmino): _58.MsgDelegateMintDepositResponse;
                toAmino(_: _58.MsgDelegateMintDepositResponse): _58.MsgDelegateMintDepositResponseAmino;
                fromAminoMsg(object: _58.MsgDelegateMintDepositResponseAminoMsg): _58.MsgDelegateMintDepositResponse;
                fromProtoMsg(message: _58.MsgDelegateMintDepositResponseProtoMsg): _58.MsgDelegateMintDepositResponse;
                toProto(message: _58.MsgDelegateMintDepositResponse): Uint8Array;
                toProtoMsg(message: _58.MsgDelegateMintDepositResponse): _58.MsgDelegateMintDepositResponseProtoMsg;
            };
            MsgWithdrawBurn: {
                typeUrl: string;
                encode(message: _58.MsgWithdrawBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgWithdrawBurn;
                fromPartial(object: Partial<_58.MsgWithdrawBurn>): _58.MsgWithdrawBurn;
                fromAmino(object: _58.MsgWithdrawBurnAmino): _58.MsgWithdrawBurn;
                toAmino(message: _58.MsgWithdrawBurn): _58.MsgWithdrawBurnAmino;
                fromAminoMsg(object: _58.MsgWithdrawBurnAminoMsg): _58.MsgWithdrawBurn;
                fromProtoMsg(message: _58.MsgWithdrawBurnProtoMsg): _58.MsgWithdrawBurn;
                toProto(message: _58.MsgWithdrawBurn): Uint8Array;
                toProtoMsg(message: _58.MsgWithdrawBurn): _58.MsgWithdrawBurnProtoMsg;
            };
            MsgWithdrawBurnResponse: {
                typeUrl: string;
                encode(_: _58.MsgWithdrawBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgWithdrawBurnResponse;
                fromPartial(_: Partial<_58.MsgWithdrawBurnResponse>): _58.MsgWithdrawBurnResponse;
                fromAmino(_: _58.MsgWithdrawBurnResponseAmino): _58.MsgWithdrawBurnResponse;
                toAmino(_: _58.MsgWithdrawBurnResponse): _58.MsgWithdrawBurnResponseAmino;
                fromAminoMsg(object: _58.MsgWithdrawBurnResponseAminoMsg): _58.MsgWithdrawBurnResponse;
                fromProtoMsg(message: _58.MsgWithdrawBurnResponseProtoMsg): _58.MsgWithdrawBurnResponse;
                toProto(message: _58.MsgWithdrawBurnResponse): Uint8Array;
                toProtoMsg(message: _58.MsgWithdrawBurnResponse): _58.MsgWithdrawBurnResponseProtoMsg;
            };
            MsgWithdrawBurnUndelegate: {
                typeUrl: string;
                encode(message: _58.MsgWithdrawBurnUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.MsgWithdrawBurnUndelegate;
                fromPartial(object: Partial<_58.MsgWithdrawBurnUndelegate>): _58.MsgWithdrawBurnUndelegate;
                fromAmino(object: _58.MsgWithdrawBurnUndelegateAmino): _58.MsgWithdrawBurnUndelegate;
                toAmino(message: _58.MsgWithdrawBurnUndelegate): _58.MsgWithdrawBurnUndelegateAmino;
                fromAminoMsg(object: _58.MsgWithdrawBurnUndelegateAminoMsg): _58.MsgWithdrawBurnUndelegate;
                fromProtoMsg(message: _58.MsgWithdrawBurnUndelegateProtoMsg): _58.MsgWithdrawBurnUndelegate;
                toProto(message: _58.MsgWithdrawBurnUndelegate): Uint8Array;
                toProtoMsg(message: _58.MsgWithdrawBurnUndelegate): _58.MsgWithdrawBurnUndelegateProtoMsg;
            };
            MsgWithdrawBurnUndelegateResponse: {
                typeUrl: string;
                encode(_: _58.MsgWithdrawBurnUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _58.MsgWithdrawBurnUndelegateResponse;
                fromPartial(_: Partial<_58.MsgWithdrawBurnUndelegateResponse>): _58.MsgWithdrawBurnUndelegateResponse;
                fromAmino(_: _58.MsgWithdrawBurnUndelegateResponseAmino): _58.MsgWithdrawBurnUndelegateResponse;
                toAmino(_: _58.MsgWithdrawBurnUndelegateResponse): _58.MsgWithdrawBurnUndelegateResponseAmino;
                fromAminoMsg(object: _58.MsgWithdrawBurnUndelegateResponseAminoMsg): _58.MsgWithdrawBurnUndelegateResponse;
                fromProtoMsg(message: _58.MsgWithdrawBurnUndelegateResponseProtoMsg): _58.MsgWithdrawBurnUndelegateResponse;
                toProto(message: _58.MsgWithdrawBurnUndelegateResponse): Uint8Array;
                toProtoMsg(message: _58.MsgWithdrawBurnUndelegateResponse): _58.MsgWithdrawBurnUndelegateResponseProtoMsg;
            };
        };
    }
    namespace savings {
        const v1beta1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                totalSupply(request?: _60.QueryTotalSupplyRequest): Promise<_60.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _62.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                    withdraw(value: _62.MsgWithdraw): {
                        typeUrl: string;
                        value: _62.MsgWithdraw;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _62.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _62.MsgDeposit): {
                        typeUrl: string;
                        value: _62.MsgDeposit;
                    };
                    withdraw(value: _62.MsgWithdraw): {
                        typeUrl: string;
                        value: _62.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.savings.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _62.MsgDeposit) => _62.MsgDepositAmino;
                    fromAmino: (object: _62.MsgDepositAmino) => _62.MsgDeposit;
                };
                "/kava.savings.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _62.MsgWithdraw) => _62.MsgWithdrawAmino;
                    fromAmino: (object: _62.MsgWithdrawAmino) => _62.MsgWithdraw;
                };
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _62.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgDeposit;
                fromPartial(object: Partial<_62.MsgDeposit>): _62.MsgDeposit;
                fromAmino(object: _62.MsgDepositAmino): _62.MsgDeposit;
                toAmino(message: _62.MsgDeposit): _62.MsgDepositAmino;
                fromAminoMsg(object: _62.MsgDepositAminoMsg): _62.MsgDeposit;
                fromProtoMsg(message: _62.MsgDepositProtoMsg): _62.MsgDeposit;
                toProto(message: _62.MsgDeposit): Uint8Array;
                toProtoMsg(message: _62.MsgDeposit): _62.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _62.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgDepositResponse;
                fromPartial(_: Partial<_62.MsgDepositResponse>): _62.MsgDepositResponse;
                fromAmino(_: _62.MsgDepositResponseAmino): _62.MsgDepositResponse;
                toAmino(_: _62.MsgDepositResponse): _62.MsgDepositResponseAmino;
                fromAminoMsg(object: _62.MsgDepositResponseAminoMsg): _62.MsgDepositResponse;
                fromProtoMsg(message: _62.MsgDepositResponseProtoMsg): _62.MsgDepositResponse;
                toProto(message: _62.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _62.MsgDepositResponse): _62.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _62.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.MsgWithdraw;
                fromPartial(object: Partial<_62.MsgWithdraw>): _62.MsgWithdraw;
                fromAmino(object: _62.MsgWithdrawAmino): _62.MsgWithdraw;
                toAmino(message: _62.MsgWithdraw): _62.MsgWithdrawAmino;
                fromAminoMsg(object: _62.MsgWithdrawAminoMsg): _62.MsgWithdraw;
                fromProtoMsg(message: _62.MsgWithdrawProtoMsg): _62.MsgWithdraw;
                toProto(message: _62.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _62.MsgWithdraw): _62.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _62.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _62.MsgWithdrawResponse;
                fromPartial(_: Partial<_62.MsgWithdrawResponse>): _62.MsgWithdrawResponse;
                fromAmino(_: _62.MsgWithdrawResponseAmino): _62.MsgWithdrawResponse;
                toAmino(_: _62.MsgWithdrawResponse): _62.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _62.MsgWithdrawResponseAminoMsg): _62.MsgWithdrawResponse;
                fromProtoMsg(message: _62.MsgWithdrawResponseProtoMsg): _62.MsgWithdrawResponse;
                toProto(message: _62.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _62.MsgWithdrawResponse): _62.MsgWithdrawResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _61.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Params;
                fromPartial(object: Partial<_61.Params>): _61.Params;
                fromAmino(object: _61.ParamsAmino): _61.Params;
                toAmino(message: _61.Params): _61.ParamsAmino;
                fromAminoMsg(object: _61.ParamsAminoMsg): _61.Params;
                fromProtoMsg(message: _61.ParamsProtoMsg): _61.Params;
                toProto(message: _61.Params): Uint8Array;
                toProtoMsg(message: _61.Params): _61.ParamsProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _61.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.Deposit;
                fromPartial(object: Partial<_61.Deposit>): _61.Deposit;
                fromAmino(object: _61.DepositAmino): _61.Deposit;
                toAmino(message: _61.Deposit): _61.DepositAmino;
                fromAminoMsg(object: _61.DepositAminoMsg): _61.Deposit;
                fromProtoMsg(message: _61.DepositProtoMsg): _61.Deposit;
                toProto(message: _61.Deposit): Uint8Array;
                toProtoMsg(message: _61.Deposit): _61.DepositProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _60.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryParamsRequest;
                fromPartial(_: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromAmino(_: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(_: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
                fromAminoMsg(object: _60.QueryParamsRequestAminoMsg): _60.QueryParamsRequest;
                fromProtoMsg(message: _60.QueryParamsRequestProtoMsg): _60.QueryParamsRequest;
                toProto(message: _60.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _60.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryParamsResponse;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
                fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
                toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
                fromAminoMsg(object: _60.QueryParamsResponseAminoMsg): _60.QueryParamsResponse;
                fromProtoMsg(message: _60.QueryParamsResponseProtoMsg): _60.QueryParamsResponse;
                toProto(message: _60.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDepositsRequest;
                fromPartial(object: Partial<_60.QueryDepositsRequest>): _60.QueryDepositsRequest;
                fromAmino(object: _60.QueryDepositsRequestAmino): _60.QueryDepositsRequest;
                toAmino(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestAmino;
                fromAminoMsg(object: _60.QueryDepositsRequestAminoMsg): _60.QueryDepositsRequest;
                fromProtoMsg(message: _60.QueryDepositsRequestProtoMsg): _60.QueryDepositsRequest;
                toProto(message: _60.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryDepositsResponse;
                fromPartial(object: Partial<_60.QueryDepositsResponse>): _60.QueryDepositsResponse;
                fromAmino(object: _60.QueryDepositsResponseAmino): _60.QueryDepositsResponse;
                toAmino(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseAmino;
                fromAminoMsg(object: _60.QueryDepositsResponseAminoMsg): _60.QueryDepositsResponse;
                fromProtoMsg(message: _60.QueryDepositsResponseProtoMsg): _60.QueryDepositsResponse;
                toProto(message: _60.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(_: _60.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _60.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_60.QueryTotalSupplyRequest>): _60.QueryTotalSupplyRequest;
                fromAmino(_: _60.QueryTotalSupplyRequestAmino): _60.QueryTotalSupplyRequest;
                toAmino(_: _60.QueryTotalSupplyRequest): _60.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _60.QueryTotalSupplyRequestAminoMsg): _60.QueryTotalSupplyRequest;
                fromProtoMsg(message: _60.QueryTotalSupplyRequestProtoMsg): _60.QueryTotalSupplyRequest;
                toProto(message: _60.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _60.QueryTotalSupplyRequest): _60.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _60.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_60.QueryTotalSupplyResponse>): _60.QueryTotalSupplyResponse;
                fromAmino(object: _60.QueryTotalSupplyResponseAmino): _60.QueryTotalSupplyResponse;
                toAmino(message: _60.QueryTotalSupplyResponse): _60.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _60.QueryTotalSupplyResponseAminoMsg): _60.QueryTotalSupplyResponse;
                fromProtoMsg(message: _60.QueryTotalSupplyResponseProtoMsg): _60.QueryTotalSupplyResponse;
                toProto(message: _60.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _60.QueryTotalSupplyResponse): _60.QueryTotalSupplyResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _59.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.GenesisState;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
                fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
                toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
                fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
                fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
                toProto(message: _59.GenesisState): Uint8Array;
                toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
            };
        };
    }
    namespace swap {
        const v1beta1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                pools(request: _64.QueryPoolsRequest): Promise<_64.QueryPoolsResponse>;
                deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _66.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactForTokens(value: _66.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapForExactTokens(value: _66.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                    withdraw(value: _66.MsgWithdraw): {
                        typeUrl: string;
                        value: _66.MsgWithdraw;
                    };
                    swapExactForTokens(value: _66.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _66.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _66.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _66.MsgSwapForExactTokens;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _66.MsgWithdraw;
                    };
                    swapExactForTokens(value: any): {
                        typeUrl: string;
                        value: _66.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: any): {
                        typeUrl: string;
                        value: _66.MsgSwapForExactTokens;
                    };
                };
                fromPartial: {
                    deposit(value: _66.MsgDeposit): {
                        typeUrl: string;
                        value: _66.MsgDeposit;
                    };
                    withdraw(value: _66.MsgWithdraw): {
                        typeUrl: string;
                        value: _66.MsgWithdraw;
                    };
                    swapExactForTokens(value: _66.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _66.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _66.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _66.MsgSwapForExactTokens;
                    };
                };
            };
            AminoConverter: {
                "/kava.swap.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _66.MsgDeposit) => _66.MsgDepositAmino;
                    fromAmino: (object: _66.MsgDepositAmino) => _66.MsgDeposit;
                };
                "/kava.swap.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _66.MsgWithdraw) => _66.MsgWithdrawAmino;
                    fromAmino: (object: _66.MsgWithdrawAmino) => _66.MsgWithdraw;
                };
                "/kava.swap.v1beta1.MsgSwapExactForTokens": {
                    aminoType: string;
                    toAmino: (message: _66.MsgSwapExactForTokens) => _66.MsgSwapExactForTokensAmino;
                    fromAmino: (object: _66.MsgSwapExactForTokensAmino) => _66.MsgSwapExactForTokens;
                };
                "/kava.swap.v1beta1.MsgSwapForExactTokens": {
                    aminoType: string;
                    toAmino: (message: _66.MsgSwapForExactTokens) => _66.MsgSwapForExactTokensAmino;
                    fromAmino: (object: _66.MsgSwapForExactTokensAmino) => _66.MsgSwapForExactTokens;
                };
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _66.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgDeposit;
                fromPartial(object: Partial<_66.MsgDeposit>): _66.MsgDeposit;
                fromAmino(object: _66.MsgDepositAmino): _66.MsgDeposit;
                toAmino(message: _66.MsgDeposit): _66.MsgDepositAmino;
                fromAminoMsg(object: _66.MsgDepositAminoMsg): _66.MsgDeposit;
                fromProtoMsg(message: _66.MsgDepositProtoMsg): _66.MsgDeposit;
                toProto(message: _66.MsgDeposit): Uint8Array;
                toProtoMsg(message: _66.MsgDeposit): _66.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _66.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgDepositResponse;
                fromPartial(_: Partial<_66.MsgDepositResponse>): _66.MsgDepositResponse;
                fromAmino(_: _66.MsgDepositResponseAmino): _66.MsgDepositResponse;
                toAmino(_: _66.MsgDepositResponse): _66.MsgDepositResponseAmino;
                fromAminoMsg(object: _66.MsgDepositResponseAminoMsg): _66.MsgDepositResponse;
                fromProtoMsg(message: _66.MsgDepositResponseProtoMsg): _66.MsgDepositResponse;
                toProto(message: _66.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _66.MsgDepositResponse): _66.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _66.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgWithdraw;
                fromPartial(object: Partial<_66.MsgWithdraw>): _66.MsgWithdraw;
                fromAmino(object: _66.MsgWithdrawAmino): _66.MsgWithdraw;
                toAmino(message: _66.MsgWithdraw): _66.MsgWithdrawAmino;
                fromAminoMsg(object: _66.MsgWithdrawAminoMsg): _66.MsgWithdraw;
                fromProtoMsg(message: _66.MsgWithdrawProtoMsg): _66.MsgWithdraw;
                toProto(message: _66.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _66.MsgWithdraw): _66.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _66.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgWithdrawResponse;
                fromPartial(_: Partial<_66.MsgWithdrawResponse>): _66.MsgWithdrawResponse;
                fromAmino(_: _66.MsgWithdrawResponseAmino): _66.MsgWithdrawResponse;
                toAmino(_: _66.MsgWithdrawResponse): _66.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _66.MsgWithdrawResponseAminoMsg): _66.MsgWithdrawResponse;
                fromProtoMsg(message: _66.MsgWithdrawResponseProtoMsg): _66.MsgWithdrawResponse;
                toProto(message: _66.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _66.MsgWithdrawResponse): _66.MsgWithdrawResponseProtoMsg;
            };
            MsgSwapExactForTokens: {
                typeUrl: string;
                encode(message: _66.MsgSwapExactForTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgSwapExactForTokens;
                fromPartial(object: Partial<_66.MsgSwapExactForTokens>): _66.MsgSwapExactForTokens;
                fromAmino(object: _66.MsgSwapExactForTokensAmino): _66.MsgSwapExactForTokens;
                toAmino(message: _66.MsgSwapExactForTokens): _66.MsgSwapExactForTokensAmino;
                fromAminoMsg(object: _66.MsgSwapExactForTokensAminoMsg): _66.MsgSwapExactForTokens;
                fromProtoMsg(message: _66.MsgSwapExactForTokensProtoMsg): _66.MsgSwapExactForTokens;
                toProto(message: _66.MsgSwapExactForTokens): Uint8Array;
                toProtoMsg(message: _66.MsgSwapExactForTokens): _66.MsgSwapExactForTokensProtoMsg;
            };
            MsgSwapExactForTokensResponse: {
                typeUrl: string;
                encode(_: _66.MsgSwapExactForTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgSwapExactForTokensResponse;
                fromPartial(_: Partial<_66.MsgSwapExactForTokensResponse>): _66.MsgSwapExactForTokensResponse;
                fromAmino(_: _66.MsgSwapExactForTokensResponseAmino): _66.MsgSwapExactForTokensResponse;
                toAmino(_: _66.MsgSwapExactForTokensResponse): _66.MsgSwapExactForTokensResponseAmino;
                fromAminoMsg(object: _66.MsgSwapExactForTokensResponseAminoMsg): _66.MsgSwapExactForTokensResponse;
                fromProtoMsg(message: _66.MsgSwapExactForTokensResponseProtoMsg): _66.MsgSwapExactForTokensResponse;
                toProto(message: _66.MsgSwapExactForTokensResponse): Uint8Array;
                toProtoMsg(message: _66.MsgSwapExactForTokensResponse): _66.MsgSwapExactForTokensResponseProtoMsg;
            };
            MsgSwapForExactTokens: {
                typeUrl: string;
                encode(message: _66.MsgSwapForExactTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.MsgSwapForExactTokens;
                fromPartial(object: Partial<_66.MsgSwapForExactTokens>): _66.MsgSwapForExactTokens;
                fromAmino(object: _66.MsgSwapForExactTokensAmino): _66.MsgSwapForExactTokens;
                toAmino(message: _66.MsgSwapForExactTokens): _66.MsgSwapForExactTokensAmino;
                fromAminoMsg(object: _66.MsgSwapForExactTokensAminoMsg): _66.MsgSwapForExactTokens;
                fromProtoMsg(message: _66.MsgSwapForExactTokensProtoMsg): _66.MsgSwapForExactTokens;
                toProto(message: _66.MsgSwapForExactTokens): Uint8Array;
                toProtoMsg(message: _66.MsgSwapForExactTokens): _66.MsgSwapForExactTokensProtoMsg;
            };
            MsgSwapForExactTokensResponse: {
                typeUrl: string;
                encode(_: _66.MsgSwapForExactTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.MsgSwapForExactTokensResponse;
                fromPartial(_: Partial<_66.MsgSwapForExactTokensResponse>): _66.MsgSwapForExactTokensResponse;
                fromAmino(_: _66.MsgSwapForExactTokensResponseAmino): _66.MsgSwapForExactTokensResponse;
                toAmino(_: _66.MsgSwapForExactTokensResponse): _66.MsgSwapForExactTokensResponseAmino;
                fromAminoMsg(object: _66.MsgSwapForExactTokensResponseAminoMsg): _66.MsgSwapForExactTokensResponse;
                fromProtoMsg(message: _66.MsgSwapForExactTokensResponseProtoMsg): _66.MsgSwapForExactTokensResponse;
                toProto(message: _66.MsgSwapForExactTokensResponse): Uint8Array;
                toProtoMsg(message: _66.MsgSwapForExactTokensResponse): _66.MsgSwapForExactTokensResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _65.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.Params;
                fromPartial(object: Partial<_65.Params>): _65.Params;
                fromAmino(object: _65.ParamsAmino): _65.Params;
                toAmino(message: _65.Params): _65.ParamsAmino;
                fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                toProto(message: _65.Params): Uint8Array;
                toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
            };
            AllowedPool: {
                typeUrl: string;
                encode(message: _65.AllowedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.AllowedPool;
                fromPartial(object: Partial<_65.AllowedPool>): _65.AllowedPool;
                fromAmino(object: _65.AllowedPoolAmino): _65.AllowedPool;
                toAmino(message: _65.AllowedPool): _65.AllowedPoolAmino;
                fromAminoMsg(object: _65.AllowedPoolAminoMsg): _65.AllowedPool;
                fromProtoMsg(message: _65.AllowedPoolProtoMsg): _65.AllowedPool;
                toProto(message: _65.AllowedPool): Uint8Array;
                toProtoMsg(message: _65.AllowedPool): _65.AllowedPoolProtoMsg;
            };
            PoolRecord: {
                typeUrl: string;
                encode(message: _65.PoolRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.PoolRecord;
                fromPartial(object: Partial<_65.PoolRecord>): _65.PoolRecord;
                fromAmino(object: _65.PoolRecordAmino): _65.PoolRecord;
                toAmino(message: _65.PoolRecord): _65.PoolRecordAmino;
                fromAminoMsg(object: _65.PoolRecordAminoMsg): _65.PoolRecord;
                fromProtoMsg(message: _65.PoolRecordProtoMsg): _65.PoolRecord;
                toProto(message: _65.PoolRecord): Uint8Array;
                toProtoMsg(message: _65.PoolRecord): _65.PoolRecordProtoMsg;
            };
            ShareRecord: {
                typeUrl: string;
                encode(message: _65.ShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ShareRecord;
                fromPartial(object: Partial<_65.ShareRecord>): _65.ShareRecord;
                fromAmino(object: _65.ShareRecordAmino): _65.ShareRecord;
                toAmino(message: _65.ShareRecord): _65.ShareRecordAmino;
                fromAminoMsg(object: _65.ShareRecordAminoMsg): _65.ShareRecord;
                fromProtoMsg(message: _65.ShareRecordProtoMsg): _65.ShareRecord;
                toProto(message: _65.ShareRecord): Uint8Array;
                toProtoMsg(message: _65.ShareRecord): _65.ShareRecordProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _64.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _64.QueryParamsRequest;
                fromPartial(_: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
                fromAmino(_: _64.QueryParamsRequestAmino): _64.QueryParamsRequest;
                toAmino(_: _64.QueryParamsRequest): _64.QueryParamsRequestAmino;
                fromAminoMsg(object: _64.QueryParamsRequestAminoMsg): _64.QueryParamsRequest;
                fromProtoMsg(message: _64.QueryParamsRequestProtoMsg): _64.QueryParamsRequest;
                toProto(message: _64.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _64.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryParamsResponse;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
                fromAmino(object: _64.QueryParamsResponseAmino): _64.QueryParamsResponse;
                toAmino(message: _64.QueryParamsResponse): _64.QueryParamsResponseAmino;
                fromAminoMsg(object: _64.QueryParamsResponseAminoMsg): _64.QueryParamsResponse;
                fromProtoMsg(message: _64.QueryParamsResponseProtoMsg): _64.QueryParamsResponse;
                toProto(message: _64.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _64.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryPoolsRequest;
                fromPartial(object: Partial<_64.QueryPoolsRequest>): _64.QueryPoolsRequest;
                fromAmino(object: _64.QueryPoolsRequestAmino): _64.QueryPoolsRequest;
                toAmino(message: _64.QueryPoolsRequest): _64.QueryPoolsRequestAmino;
                fromAminoMsg(object: _64.QueryPoolsRequestAminoMsg): _64.QueryPoolsRequest;
                fromProtoMsg(message: _64.QueryPoolsRequestProtoMsg): _64.QueryPoolsRequest;
                toProto(message: _64.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryPoolsRequest): _64.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _64.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryPoolsResponse;
                fromPartial(object: Partial<_64.QueryPoolsResponse>): _64.QueryPoolsResponse;
                fromAmino(object: _64.QueryPoolsResponseAmino): _64.QueryPoolsResponse;
                toAmino(message: _64.QueryPoolsResponse): _64.QueryPoolsResponseAmino;
                fromAminoMsg(object: _64.QueryPoolsResponseAminoMsg): _64.QueryPoolsResponse;
                fromProtoMsg(message: _64.QueryPoolsResponseProtoMsg): _64.QueryPoolsResponse;
                toProto(message: _64.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryPoolsResponse): _64.QueryPoolsResponseProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _64.PoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.PoolResponse;
                fromPartial(object: Partial<_64.PoolResponse>): _64.PoolResponse;
                fromAmino(object: _64.PoolResponseAmino): _64.PoolResponse;
                toAmino(message: _64.PoolResponse): _64.PoolResponseAmino;
                fromAminoMsg(object: _64.PoolResponseAminoMsg): _64.PoolResponse;
                fromProtoMsg(message: _64.PoolResponseProtoMsg): _64.PoolResponse;
                toProto(message: _64.PoolResponse): Uint8Array;
                toProtoMsg(message: _64.PoolResponse): _64.PoolResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDepositsRequest;
                fromPartial(object: Partial<_64.QueryDepositsRequest>): _64.QueryDepositsRequest;
                fromAmino(object: _64.QueryDepositsRequestAmino): _64.QueryDepositsRequest;
                toAmino(message: _64.QueryDepositsRequest): _64.QueryDepositsRequestAmino;
                fromAminoMsg(object: _64.QueryDepositsRequestAminoMsg): _64.QueryDepositsRequest;
                fromProtoMsg(message: _64.QueryDepositsRequestProtoMsg): _64.QueryDepositsRequest;
                toProto(message: _64.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDepositsRequest): _64.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.QueryDepositsResponse;
                fromPartial(object: Partial<_64.QueryDepositsResponse>): _64.QueryDepositsResponse;
                fromAmino(object: _64.QueryDepositsResponseAmino): _64.QueryDepositsResponse;
                toAmino(message: _64.QueryDepositsResponse): _64.QueryDepositsResponseAmino;
                fromAminoMsg(object: _64.QueryDepositsResponseAminoMsg): _64.QueryDepositsResponse;
                fromProtoMsg(message: _64.QueryDepositsResponseProtoMsg): _64.QueryDepositsResponse;
                toProto(message: _64.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDepositsResponse): _64.QueryDepositsResponseProtoMsg;
            };
            DepositResponse: {
                typeUrl: string;
                encode(message: _64.DepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DepositResponse;
                fromPartial(object: Partial<_64.DepositResponse>): _64.DepositResponse;
                fromAmino(object: _64.DepositResponseAmino): _64.DepositResponse;
                toAmino(message: _64.DepositResponse): _64.DepositResponseAmino;
                fromAminoMsg(object: _64.DepositResponseAminoMsg): _64.DepositResponse;
                fromProtoMsg(message: _64.DepositResponseProtoMsg): _64.DepositResponse;
                toProto(message: _64.DepositResponse): Uint8Array;
                toProtoMsg(message: _64.DepositResponse): _64.DepositResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _63.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                toProto(message: _63.GenesisState): Uint8Array;
                toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
            };
        };
    }
    namespace validatorvesting {
        const v1beta1: {
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                circulatingSupply(request?: _67.QueryCirculatingSupplyRequest): Promise<_67.QueryCirculatingSupplyResponse>;
                totalSupply(request?: _67.QueryTotalSupplyRequest): Promise<_67.QueryTotalSupplyResponse>;
                circulatingSupplyHARD(request?: _67.QueryCirculatingSupplyHARDRequest): Promise<_67.QueryCirculatingSupplyHARDResponse>;
                circulatingSupplyUSDX(request?: _67.QueryCirculatingSupplyUSDXRequest): Promise<_67.QueryCirculatingSupplyUSDXResponse>;
                circulatingSupplySWP(request?: _67.QueryCirculatingSupplySWPRequest): Promise<_67.QueryCirculatingSupplySWPResponse>;
                totalSupplyHARD(request?: _67.QueryTotalSupplyHARDRequest): Promise<_67.QueryTotalSupplyHARDResponse>;
                totalSupplyUSDX(request?: _67.QueryTotalSupplyUSDXRequest): Promise<_67.QueryTotalSupplyUSDXResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            QueryCirculatingSupplyRequest: {
                typeUrl: string;
                encode(_: _67.QueryCirculatingSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryCirculatingSupplyRequest;
                fromPartial(_: Partial<_67.QueryCirculatingSupplyRequest>): _67.QueryCirculatingSupplyRequest;
                fromAmino(_: _67.QueryCirculatingSupplyRequestAmino): _67.QueryCirculatingSupplyRequest;
                toAmino(_: _67.QueryCirculatingSupplyRequest): _67.QueryCirculatingSupplyRequestAmino;
                fromAminoMsg(object: _67.QueryCirculatingSupplyRequestAminoMsg): _67.QueryCirculatingSupplyRequest;
                fromProtoMsg(message: _67.QueryCirculatingSupplyRequestProtoMsg): _67.QueryCirculatingSupplyRequest;
                toProto(message: _67.QueryCirculatingSupplyRequest): Uint8Array;
                toProtoMsg(message: _67.QueryCirculatingSupplyRequest): _67.QueryCirculatingSupplyRequestProtoMsg;
            };
            QueryCirculatingSupplyResponse: {
                typeUrl: string;
                encode(message: _67.QueryCirculatingSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryCirculatingSupplyResponse;
                fromPartial(object: Partial<_67.QueryCirculatingSupplyResponse>): _67.QueryCirculatingSupplyResponse;
                fromAmino(object: _67.QueryCirculatingSupplyResponseAmino): _67.QueryCirculatingSupplyResponse;
                toAmino(message: _67.QueryCirculatingSupplyResponse): _67.QueryCirculatingSupplyResponseAmino;
                fromAminoMsg(object: _67.QueryCirculatingSupplyResponseAminoMsg): _67.QueryCirculatingSupplyResponse;
                fromProtoMsg(message: _67.QueryCirculatingSupplyResponseProtoMsg): _67.QueryCirculatingSupplyResponse;
                toProto(message: _67.QueryCirculatingSupplyResponse): Uint8Array;
                toProtoMsg(message: _67.QueryCirculatingSupplyResponse): _67.QueryCirculatingSupplyResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(_: _67.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_67.QueryTotalSupplyRequest>): _67.QueryTotalSupplyRequest;
                fromAmino(_: _67.QueryTotalSupplyRequestAmino): _67.QueryTotalSupplyRequest;
                toAmino(_: _67.QueryTotalSupplyRequest): _67.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _67.QueryTotalSupplyRequestAminoMsg): _67.QueryTotalSupplyRequest;
                fromProtoMsg(message: _67.QueryTotalSupplyRequestProtoMsg): _67.QueryTotalSupplyRequest;
                toProto(message: _67.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _67.QueryTotalSupplyRequest): _67.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _67.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_67.QueryTotalSupplyResponse>): _67.QueryTotalSupplyResponse;
                fromAmino(object: _67.QueryTotalSupplyResponseAmino): _67.QueryTotalSupplyResponse;
                toAmino(message: _67.QueryTotalSupplyResponse): _67.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _67.QueryTotalSupplyResponseAminoMsg): _67.QueryTotalSupplyResponse;
                fromProtoMsg(message: _67.QueryTotalSupplyResponseProtoMsg): _67.QueryTotalSupplyResponse;
                toProto(message: _67.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _67.QueryTotalSupplyResponse): _67.QueryTotalSupplyResponseProtoMsg;
            };
            QueryCirculatingSupplyHARDRequest: {
                typeUrl: string;
                encode(_: _67.QueryCirculatingSupplyHARDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryCirculatingSupplyHARDRequest;
                fromPartial(_: Partial<_67.QueryCirculatingSupplyHARDRequest>): _67.QueryCirculatingSupplyHARDRequest;
                fromAmino(_: _67.QueryCirculatingSupplyHARDRequestAmino): _67.QueryCirculatingSupplyHARDRequest;
                toAmino(_: _67.QueryCirculatingSupplyHARDRequest): _67.QueryCirculatingSupplyHARDRequestAmino;
                fromAminoMsg(object: _67.QueryCirculatingSupplyHARDRequestAminoMsg): _67.QueryCirculatingSupplyHARDRequest;
                fromProtoMsg(message: _67.QueryCirculatingSupplyHARDRequestProtoMsg): _67.QueryCirculatingSupplyHARDRequest;
                toProto(message: _67.QueryCirculatingSupplyHARDRequest): Uint8Array;
                toProtoMsg(message: _67.QueryCirculatingSupplyHARDRequest): _67.QueryCirculatingSupplyHARDRequestProtoMsg;
            };
            QueryCirculatingSupplyHARDResponse: {
                typeUrl: string;
                encode(message: _67.QueryCirculatingSupplyHARDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryCirculatingSupplyHARDResponse;
                fromPartial(object: Partial<_67.QueryCirculatingSupplyHARDResponse>): _67.QueryCirculatingSupplyHARDResponse;
                fromAmino(object: _67.QueryCirculatingSupplyHARDResponseAmino): _67.QueryCirculatingSupplyHARDResponse;
                toAmino(message: _67.QueryCirculatingSupplyHARDResponse): _67.QueryCirculatingSupplyHARDResponseAmino;
                fromAminoMsg(object: _67.QueryCirculatingSupplyHARDResponseAminoMsg): _67.QueryCirculatingSupplyHARDResponse;
                fromProtoMsg(message: _67.QueryCirculatingSupplyHARDResponseProtoMsg): _67.QueryCirculatingSupplyHARDResponse;
                toProto(message: _67.QueryCirculatingSupplyHARDResponse): Uint8Array;
                toProtoMsg(message: _67.QueryCirculatingSupplyHARDResponse): _67.QueryCirculatingSupplyHARDResponseProtoMsg;
            };
            QueryCirculatingSupplyUSDXRequest: {
                typeUrl: string;
                encode(_: _67.QueryCirculatingSupplyUSDXRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryCirculatingSupplyUSDXRequest;
                fromPartial(_: Partial<_67.QueryCirculatingSupplyUSDXRequest>): _67.QueryCirculatingSupplyUSDXRequest;
                fromAmino(_: _67.QueryCirculatingSupplyUSDXRequestAmino): _67.QueryCirculatingSupplyUSDXRequest;
                toAmino(_: _67.QueryCirculatingSupplyUSDXRequest): _67.QueryCirculatingSupplyUSDXRequestAmino;
                fromAminoMsg(object: _67.QueryCirculatingSupplyUSDXRequestAminoMsg): _67.QueryCirculatingSupplyUSDXRequest;
                fromProtoMsg(message: _67.QueryCirculatingSupplyUSDXRequestProtoMsg): _67.QueryCirculatingSupplyUSDXRequest;
                toProto(message: _67.QueryCirculatingSupplyUSDXRequest): Uint8Array;
                toProtoMsg(message: _67.QueryCirculatingSupplyUSDXRequest): _67.QueryCirculatingSupplyUSDXRequestProtoMsg;
            };
            QueryCirculatingSupplyUSDXResponse: {
                typeUrl: string;
                encode(message: _67.QueryCirculatingSupplyUSDXResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryCirculatingSupplyUSDXResponse;
                fromPartial(object: Partial<_67.QueryCirculatingSupplyUSDXResponse>): _67.QueryCirculatingSupplyUSDXResponse;
                fromAmino(object: _67.QueryCirculatingSupplyUSDXResponseAmino): _67.QueryCirculatingSupplyUSDXResponse;
                toAmino(message: _67.QueryCirculatingSupplyUSDXResponse): _67.QueryCirculatingSupplyUSDXResponseAmino;
                fromAminoMsg(object: _67.QueryCirculatingSupplyUSDXResponseAminoMsg): _67.QueryCirculatingSupplyUSDXResponse;
                fromProtoMsg(message: _67.QueryCirculatingSupplyUSDXResponseProtoMsg): _67.QueryCirculatingSupplyUSDXResponse;
                toProto(message: _67.QueryCirculatingSupplyUSDXResponse): Uint8Array;
                toProtoMsg(message: _67.QueryCirculatingSupplyUSDXResponse): _67.QueryCirculatingSupplyUSDXResponseProtoMsg;
            };
            QueryCirculatingSupplySWPRequest: {
                typeUrl: string;
                encode(_: _67.QueryCirculatingSupplySWPRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryCirculatingSupplySWPRequest;
                fromPartial(_: Partial<_67.QueryCirculatingSupplySWPRequest>): _67.QueryCirculatingSupplySWPRequest;
                fromAmino(_: _67.QueryCirculatingSupplySWPRequestAmino): _67.QueryCirculatingSupplySWPRequest;
                toAmino(_: _67.QueryCirculatingSupplySWPRequest): _67.QueryCirculatingSupplySWPRequestAmino;
                fromAminoMsg(object: _67.QueryCirculatingSupplySWPRequestAminoMsg): _67.QueryCirculatingSupplySWPRequest;
                fromProtoMsg(message: _67.QueryCirculatingSupplySWPRequestProtoMsg): _67.QueryCirculatingSupplySWPRequest;
                toProto(message: _67.QueryCirculatingSupplySWPRequest): Uint8Array;
                toProtoMsg(message: _67.QueryCirculatingSupplySWPRequest): _67.QueryCirculatingSupplySWPRequestProtoMsg;
            };
            QueryCirculatingSupplySWPResponse: {
                typeUrl: string;
                encode(message: _67.QueryCirculatingSupplySWPResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryCirculatingSupplySWPResponse;
                fromPartial(object: Partial<_67.QueryCirculatingSupplySWPResponse>): _67.QueryCirculatingSupplySWPResponse;
                fromAmino(object: _67.QueryCirculatingSupplySWPResponseAmino): _67.QueryCirculatingSupplySWPResponse;
                toAmino(message: _67.QueryCirculatingSupplySWPResponse): _67.QueryCirculatingSupplySWPResponseAmino;
                fromAminoMsg(object: _67.QueryCirculatingSupplySWPResponseAminoMsg): _67.QueryCirculatingSupplySWPResponse;
                fromProtoMsg(message: _67.QueryCirculatingSupplySWPResponseProtoMsg): _67.QueryCirculatingSupplySWPResponse;
                toProto(message: _67.QueryCirculatingSupplySWPResponse): Uint8Array;
                toProtoMsg(message: _67.QueryCirculatingSupplySWPResponse): _67.QueryCirculatingSupplySWPResponseProtoMsg;
            };
            QueryTotalSupplyHARDRequest: {
                typeUrl: string;
                encode(_: _67.QueryTotalSupplyHARDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryTotalSupplyHARDRequest;
                fromPartial(_: Partial<_67.QueryTotalSupplyHARDRequest>): _67.QueryTotalSupplyHARDRequest;
                fromAmino(_: _67.QueryTotalSupplyHARDRequestAmino): _67.QueryTotalSupplyHARDRequest;
                toAmino(_: _67.QueryTotalSupplyHARDRequest): _67.QueryTotalSupplyHARDRequestAmino;
                fromAminoMsg(object: _67.QueryTotalSupplyHARDRequestAminoMsg): _67.QueryTotalSupplyHARDRequest;
                fromProtoMsg(message: _67.QueryTotalSupplyHARDRequestProtoMsg): _67.QueryTotalSupplyHARDRequest;
                toProto(message: _67.QueryTotalSupplyHARDRequest): Uint8Array;
                toProtoMsg(message: _67.QueryTotalSupplyHARDRequest): _67.QueryTotalSupplyHARDRequestProtoMsg;
            };
            QueryTotalSupplyHARDResponse: {
                typeUrl: string;
                encode(message: _67.QueryTotalSupplyHARDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryTotalSupplyHARDResponse;
                fromPartial(object: Partial<_67.QueryTotalSupplyHARDResponse>): _67.QueryTotalSupplyHARDResponse;
                fromAmino(object: _67.QueryTotalSupplyHARDResponseAmino): _67.QueryTotalSupplyHARDResponse;
                toAmino(message: _67.QueryTotalSupplyHARDResponse): _67.QueryTotalSupplyHARDResponseAmino;
                fromAminoMsg(object: _67.QueryTotalSupplyHARDResponseAminoMsg): _67.QueryTotalSupplyHARDResponse;
                fromProtoMsg(message: _67.QueryTotalSupplyHARDResponseProtoMsg): _67.QueryTotalSupplyHARDResponse;
                toProto(message: _67.QueryTotalSupplyHARDResponse): Uint8Array;
                toProtoMsg(message: _67.QueryTotalSupplyHARDResponse): _67.QueryTotalSupplyHARDResponseProtoMsg;
            };
            QueryTotalSupplyUSDXRequest: {
                typeUrl: string;
                encode(_: _67.QueryTotalSupplyUSDXRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.QueryTotalSupplyUSDXRequest;
                fromPartial(_: Partial<_67.QueryTotalSupplyUSDXRequest>): _67.QueryTotalSupplyUSDXRequest;
                fromAmino(_: _67.QueryTotalSupplyUSDXRequestAmino): _67.QueryTotalSupplyUSDXRequest;
                toAmino(_: _67.QueryTotalSupplyUSDXRequest): _67.QueryTotalSupplyUSDXRequestAmino;
                fromAminoMsg(object: _67.QueryTotalSupplyUSDXRequestAminoMsg): _67.QueryTotalSupplyUSDXRequest;
                fromProtoMsg(message: _67.QueryTotalSupplyUSDXRequestProtoMsg): _67.QueryTotalSupplyUSDXRequest;
                toProto(message: _67.QueryTotalSupplyUSDXRequest): Uint8Array;
                toProtoMsg(message: _67.QueryTotalSupplyUSDXRequest): _67.QueryTotalSupplyUSDXRequestProtoMsg;
            };
            QueryTotalSupplyUSDXResponse: {
                typeUrl: string;
                encode(message: _67.QueryTotalSupplyUSDXResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryTotalSupplyUSDXResponse;
                fromPartial(object: Partial<_67.QueryTotalSupplyUSDXResponse>): _67.QueryTotalSupplyUSDXResponse;
                fromAmino(object: _67.QueryTotalSupplyUSDXResponseAmino): _67.QueryTotalSupplyUSDXResponse;
                toAmino(message: _67.QueryTotalSupplyUSDXResponse): _67.QueryTotalSupplyUSDXResponseAmino;
                fromAminoMsg(object: _67.QueryTotalSupplyUSDXResponseAminoMsg): _67.QueryTotalSupplyUSDXResponse;
                fromProtoMsg(message: _67.QueryTotalSupplyUSDXResponseProtoMsg): _67.QueryTotalSupplyUSDXResponse;
                toProto(message: _67.QueryTotalSupplyUSDXResponse): Uint8Array;
                toProtoMsg(message: _67.QueryTotalSupplyUSDXResponse): _67.QueryTotalSupplyUSDXResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            kava: {
                auction: {
                    v1beta1: _275.MsgClientImpl;
                };
                bep3: {
                    v1beta1: _276.MsgClientImpl;
                };
                cdp: {
                    v1beta1: _277.MsgClientImpl;
                };
                committee: {
                    v1beta1: _278.MsgClientImpl;
                };
                community: {
                    v1beta1: _279.MsgClientImpl;
                };
                earn: {
                    v1beta1: _280.MsgClientImpl;
                };
                evmutil: {
                    v1beta1: _281.MsgClientImpl;
                };
                hard: {
                    v1beta1: _282.MsgClientImpl;
                };
                incentive: {
                    v1beta1: _283.MsgClientImpl;
                };
                issuance: {
                    v1beta1: _284.MsgClientImpl;
                };
                liquid: {
                    v1beta1: _285.MsgClientImpl;
                };
                pricefeed: {
                    v1beta1: _286.MsgClientImpl;
                };
                router: {
                    v1beta1: _287.MsgClientImpl;
                };
                savings: {
                    v1beta1: _288.MsgClientImpl;
                };
                swap: {
                    v1beta1: _289.MsgClientImpl;
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
            kava: {
                auction: {
                    v1beta1: {
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        auction(request: _2.QueryAuctionRequest): Promise<_2.QueryAuctionResponse>;
                        auctions(request: _2.QueryAuctionsRequest): Promise<_2.QueryAuctionsResponse>;
                        nextAuctionID(request?: _2.QueryNextAuctionIDRequest): Promise<_2.QueryNextAuctionIDResponse>;
                    };
                };
                bep3: {
                    v1beta1: {
                        params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        assetSupply(request: _6.QueryAssetSupplyRequest): Promise<_6.QueryAssetSupplyResponse>;
                        assetSupplies(request?: _6.QueryAssetSuppliesRequest): Promise<_6.QueryAssetSuppliesResponse>;
                        atomicSwap(request: _6.QueryAtomicSwapRequest): Promise<_6.QueryAtomicSwapResponse>;
                        atomicSwaps(request: _6.QueryAtomicSwapsRequest): Promise<_6.QueryAtomicSwapsResponse>;
                    };
                };
                cdp: {
                    v1beta1: {
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                        totalPrincipal(request: _10.QueryTotalPrincipalRequest): Promise<_10.QueryTotalPrincipalResponse>;
                        totalCollateral(request: _10.QueryTotalCollateralRequest): Promise<_10.QueryTotalCollateralResponse>;
                        cdps(request: _10.QueryCdpsRequest): Promise<_10.QueryCdpsResponse>;
                        cdp(request: _10.QueryCdpRequest): Promise<_10.QueryCdpResponse>;
                        deposits(request: _10.QueryDepositsRequest): Promise<_10.QueryDepositsResponse>;
                    };
                };
                committee: {
                    v1beta1: {
                        committees(request?: _16.QueryCommitteesRequest): Promise<_16.QueryCommitteesResponse>;
                        committee(request: _16.QueryCommitteeRequest): Promise<_16.QueryCommitteeResponse>;
                        proposals(request: _16.QueryProposalsRequest): Promise<_16.QueryProposalsResponse>;
                        proposal(request: _16.QueryProposalRequest): Promise<_16.QueryProposalResponse>;
                        nextProposalID(request?: _16.QueryNextProposalIDRequest): Promise<_16.QueryNextProposalIDResponse>;
                        votes(request: _16.QueryVotesRequest): Promise<_16.QueryVotesResponse>;
                        vote(request: _16.QueryVoteRequest): Promise<_16.QueryVoteResponse>;
                        tally(request: _16.QueryTallyRequest): Promise<_16.QueryTallyResponse>;
                        rawParams(request: _16.QueryRawParamsRequest): Promise<_16.QueryRawParamsResponse>;
                    };
                };
                community: {
                    v1beta1: {
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                        balance(request?: _21.QueryBalanceRequest): Promise<_21.QueryBalanceResponse>;
                        totalBalance(request?: _21.QueryTotalBalanceRequest): Promise<_21.QueryTotalBalanceResponse>;
                        annualizedRewards(request?: _21.QueryAnnualizedRewardsRequest): Promise<_21.QueryAnnualizedRewardsResponse>;
                    };
                };
                earn: {
                    v1beta1: {
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        vaults(request?: _27.QueryVaultsRequest): Promise<_27.QueryVaultsResponse>;
                        vault(request: _27.QueryVaultRequest): Promise<_27.QueryVaultResponse>;
                        deposits(request: _27.QueryDepositsRequest): Promise<_27.QueryDepositsResponse>;
                        totalSupply(request?: _27.QueryTotalSupplyRequest): Promise<_27.QueryTotalSupplyResponse>;
                    };
                };
                evmutil: {
                    v1beta1: {
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                        deployedCosmosCoinContracts(request: _33.QueryDeployedCosmosCoinContractsRequest): Promise<_33.QueryDeployedCosmosCoinContractsResponse>;
                    };
                };
                hard: {
                    v1beta1: {
                        params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                        accounts(request?: _37.QueryAccountsRequest): Promise<_37.QueryAccountsResponse>;
                        deposits(request: _37.QueryDepositsRequest): Promise<_37.QueryDepositsResponse>;
                        unsyncedDeposits(request: _37.QueryUnsyncedDepositsRequest): Promise<_37.QueryUnsyncedDepositsResponse>;
                        totalDeposited(request: _37.QueryTotalDepositedRequest): Promise<_37.QueryTotalDepositedResponse>;
                        borrows(request: _37.QueryBorrowsRequest): Promise<_37.QueryBorrowsResponse>;
                        unsyncedBorrows(request: _37.QueryUnsyncedBorrowsRequest): Promise<_37.QueryUnsyncedBorrowsResponse>;
                        totalBorrowed(request: _37.QueryTotalBorrowedRequest): Promise<_37.QueryTotalBorrowedResponse>;
                        interestRate(request: _37.QueryInterestRateRequest): Promise<_37.QueryInterestRateResponse>;
                        reserves(request: _37.QueryReservesRequest): Promise<_37.QueryReservesResponse>;
                        interestFactors(request: _37.QueryInterestFactorsRequest): Promise<_37.QueryInterestFactorsResponse>;
                    };
                };
                incentive: {
                    v1beta1: {
                        params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                        rewards(request: _43.QueryRewardsRequest): Promise<_43.QueryRewardsResponse>;
                        rewardFactors(request?: _43.QueryRewardFactorsRequest): Promise<_43.QueryRewardFactorsResponse>;
                        apy(request?: _43.QueryApyRequest): Promise<_43.QueryApyResponse>;
                    };
                };
                issuance: {
                    v1beta1: {
                        params(request?: _46.QueryParamsRequest): Promise<_46.QueryParamsResponse>;
                    };
                };
                kavadist: {
                    v1beta1: {
                        params(request?: _51.QueryParamsRequest): Promise<_51.QueryParamsResponse>;
                        balance(request?: _51.QueryBalanceRequest): Promise<_51.QueryBalanceResponse>;
                    };
                };
                liquid: {
                    v1beta1: {
                        delegatedBalance(request: _52.QueryDelegatedBalanceRequest): Promise<_52.QueryDelegatedBalanceResponse>;
                        totalSupply(request?: _52.QueryTotalSupplyRequest): Promise<_52.QueryTotalSupplyResponse>;
                    };
                };
                pricefeed: {
                    v1beta1: {
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        price(request: _55.QueryPriceRequest): Promise<_55.QueryPriceResponse>;
                        prices(request?: _55.QueryPricesRequest): Promise<_55.QueryPricesResponse>;
                        rawPrices(request: _55.QueryRawPricesRequest): Promise<_55.QueryRawPricesResponse>;
                        oracles(request: _55.QueryOraclesRequest): Promise<_55.QueryOraclesResponse>;
                        markets(request?: _55.QueryMarketsRequest): Promise<_55.QueryMarketsResponse>;
                    };
                };
                savings: {
                    v1beta1: {
                        params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                        totalSupply(request?: _60.QueryTotalSupplyRequest): Promise<_60.QueryTotalSupplyResponse>;
                    };
                };
                swap: {
                    v1beta1: {
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        pools(request: _64.QueryPoolsRequest): Promise<_64.QueryPoolsResponse>;
                        deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                    };
                };
                validatorvesting: {
                    v1beta1: {
                        circulatingSupply(request?: _67.QueryCirculatingSupplyRequest): Promise<_67.QueryCirculatingSupplyResponse>;
                        totalSupply(request?: _67.QueryTotalSupplyRequest): Promise<_67.QueryTotalSupplyResponse>;
                        circulatingSupplyHARD(request?: _67.QueryCirculatingSupplyHARDRequest): Promise<_67.QueryCirculatingSupplyHARDResponse>;
                        circulatingSupplyUSDX(request?: _67.QueryCirculatingSupplyUSDXRequest): Promise<_67.QueryCirculatingSupplyUSDXResponse>;
                        circulatingSupplySWP(request?: _67.QueryCirculatingSupplySWPRequest): Promise<_67.QueryCirculatingSupplySWPResponse>;
                        totalSupplyHARD(request?: _67.QueryTotalSupplyHARDRequest): Promise<_67.QueryTotalSupplyHARDResponse>;
                        totalSupplyUSDX(request?: _67.QueryTotalSupplyUSDXRequest): Promise<_67.QueryTotalSupplyUSDXResponse>;
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
            kava: {
                auction: {
                    v1beta1: _243.LCDQueryClient;
                };
                bep3: {
                    v1beta1: _244.LCDQueryClient;
                };
                cdp: {
                    v1beta1: _245.LCDQueryClient;
                };
                committee: {
                    v1beta1: _246.LCDQueryClient;
                };
                community: {
                    v1beta1: _247.LCDQueryClient;
                };
                earn: {
                    v1beta1: _248.LCDQueryClient;
                };
                evmutil: {
                    v1beta1: _249.LCDQueryClient;
                };
                hard: {
                    v1beta1: _250.LCDQueryClient;
                };
                incentive: {
                    v1beta1: _251.LCDQueryClient;
                };
                issuance: {
                    v1beta1: _252.LCDQueryClient;
                };
                kavadist: {
                    v1beta1: _253.LCDQueryClient;
                };
                liquid: {
                    v1beta1: _254.LCDQueryClient;
                };
                pricefeed: {
                    v1beta1: _255.LCDQueryClient;
                };
                savings: {
                    v1beta1: _256.LCDQueryClient;
                };
                swap: {
                    v1beta1: _257.LCDQueryClient;
                };
                validatorvesting: {
                    v1beta1: _258.LCDQueryClient;
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
