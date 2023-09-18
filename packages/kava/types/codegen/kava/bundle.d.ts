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
import * as _18 from "./community/v1beta1/proposal";
import * as _19 from "./community/v1beta1/query";
import * as _20 from "./community/v1beta1/tx";
import * as _21 from "./earn/v1beta1/genesis";
import * as _22 from "./earn/v1beta1/params";
import * as _23 from "./earn/v1beta1/proposal";
import * as _24 from "./earn/v1beta1/query";
import * as _25 from "./earn/v1beta1/strategy";
import * as _26 from "./earn/v1beta1/tx";
import * as _27 from "./earn/v1beta1/vault";
import * as _28 from "./evmutil/v1beta1/conversion_pair";
import * as _29 from "./evmutil/v1beta1/genesis";
import * as _30 from "./evmutil/v1beta1/query";
import * as _31 from "./evmutil/v1beta1/tx";
import * as _32 from "./hard/v1beta1/genesis";
import * as _33 from "./hard/v1beta1/hard";
import * as _34 from "./hard/v1beta1/query";
import * as _35 from "./hard/v1beta1/tx";
import * as _36 from "./incentive/v1beta1/apy";
import * as _37 from "./incentive/v1beta1/claims";
import * as _38 from "./incentive/v1beta1/genesis";
import * as _39 from "./incentive/v1beta1/params";
import * as _40 from "./incentive/v1beta1/query";
import * as _41 from "./incentive/v1beta1/tx";
import * as _42 from "./issuance/v1beta1/genesis";
import * as _43 from "./issuance/v1beta1/query";
import * as _44 from "./issuance/v1beta1/tx";
import * as _45 from "./kavadist/v1beta1/genesis";
import * as _46 from "./kavadist/v1beta1/params";
import * as _47 from "./kavadist/v1beta1/proposal";
import * as _48 from "./kavadist/v1beta1/query";
import * as _49 from "./liquid/v1beta1/query";
import * as _50 from "./liquid/v1beta1/tx";
import * as _51 from "./pricefeed/v1beta1/genesis";
import * as _52 from "./pricefeed/v1beta1/query";
import * as _53 from "./pricefeed/v1beta1/store";
import * as _54 from "./pricefeed/v1beta1/tx";
import * as _55 from "./router/v1beta1/tx";
import * as _56 from "./savings/v1beta1/genesis";
import * as _57 from "./savings/v1beta1/query";
import * as _58 from "./savings/v1beta1/store";
import * as _59 from "./savings/v1beta1/tx";
import * as _60 from "./swap/v1beta1/genesis";
import * as _61 from "./swap/v1beta1/query";
import * as _62 from "./swap/v1beta1/swap";
import * as _63 from "./swap/v1beta1/tx";
import * as _209 from "./auction/v1beta1/query.lcd";
import * as _210 from "./bep3/v1beta1/query.lcd";
import * as _211 from "./cdp/v1beta1/query.lcd";
import * as _212 from "./committee/v1beta1/query.lcd";
import * as _213 from "./community/v1beta1/query.lcd";
import * as _214 from "./earn/v1beta1/query.lcd";
import * as _215 from "./evmutil/v1beta1/query.lcd";
import * as _216 from "./hard/v1beta1/query.lcd";
import * as _217 from "./incentive/v1beta1/query.lcd";
import * as _218 from "./issuance/v1beta1/query.lcd";
import * as _219 from "./kavadist/v1beta1/query.lcd";
import * as _220 from "./liquid/v1beta1/query.lcd";
import * as _221 from "./pricefeed/v1beta1/query.lcd";
import * as _222 from "./savings/v1beta1/query.lcd";
import * as _223 from "./swap/v1beta1/query.lcd";
import * as _224 from "./auction/v1beta1/query.rpc.Query";
import * as _225 from "./bep3/v1beta1/query.rpc.Query";
import * as _226 from "./cdp/v1beta1/query.rpc.Query";
import * as _227 from "./committee/v1beta1/query.rpc.Query";
import * as _228 from "./community/v1beta1/query.rpc.Query";
import * as _229 from "./earn/v1beta1/query.rpc.Query";
import * as _230 from "./evmutil/v1beta1/query.rpc.Query";
import * as _231 from "./hard/v1beta1/query.rpc.Query";
import * as _232 from "./incentive/v1beta1/query.rpc.Query";
import * as _233 from "./issuance/v1beta1/query.rpc.Query";
import * as _234 from "./kavadist/v1beta1/query.rpc.Query";
import * as _235 from "./liquid/v1beta1/query.rpc.Query";
import * as _236 from "./pricefeed/v1beta1/query.rpc.Query";
import * as _237 from "./savings/v1beta1/query.rpc.Query";
import * as _238 from "./swap/v1beta1/query.rpc.Query";
import * as _239 from "./auction/v1beta1/tx.rpc.msg";
import * as _240 from "./bep3/v1beta1/tx.rpc.msg";
import * as _241 from "./cdp/v1beta1/tx.rpc.msg";
import * as _242 from "./committee/v1beta1/tx.rpc.msg";
import * as _243 from "./community/v1beta1/tx.rpc.msg";
import * as _244 from "./earn/v1beta1/tx.rpc.msg";
import * as _245 from "./evmutil/v1beta1/tx.rpc.msg";
import * as _246 from "./hard/v1beta1/tx.rpc.msg";
import * as _247 from "./incentive/v1beta1/tx.rpc.msg";
import * as _248 from "./issuance/v1beta1/tx.rpc.msg";
import * as _249 from "./liquid/v1beta1/tx.rpc.msg";
import * as _250 from "./pricefeed/v1beta1/tx.rpc.msg";
import * as _251 from "./router/v1beta1/tx.rpc.msg";
import * as _252 from "./savings/v1beta1/tx.rpc.msg";
import * as _253 from "./swap/v1beta1/tx.rpc.msg";
export declare namespace kava {
    namespace auction {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                auction(request: _2.QueryAuctionRequest): Promise<_2.QueryAuctionResponse>;
                auctions(request: _2.QueryAuctionsRequest): Promise<_2.QueryAuctionsResponse>;
                nextAuctionID(request?: _2.QueryNextAuctionIDRequest): Promise<_2.QueryNextAuctionIDResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
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
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                assetSupply(request: _6.QueryAssetSupplyRequest): Promise<_6.QueryAssetSupplyResponse>;
                assetSupplies(request?: _6.QueryAssetSuppliesRequest): Promise<_6.QueryAssetSuppliesResponse>;
                atomicSwap(request: _6.QueryAtomicSwapRequest): Promise<_6.QueryAtomicSwapResponse>;
                atomicSwaps(request: _6.QueryAtomicSwapsRequest): Promise<_6.QueryAtomicSwapsResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
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
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                totalPrincipal(request: _10.QueryTotalPrincipalRequest): Promise<_10.QueryTotalPrincipalResponse>;
                totalCollateral(request: _10.QueryTotalCollateralRequest): Promise<_10.QueryTotalCollateralResponse>;
                cdps(request: _10.QueryCdpsRequest): Promise<_10.QueryCdpsResponse>;
                cdp(request: _10.QueryCdpRequest): Promise<_10.QueryCdpResponse>;
                deposits(request: _10.QueryDepositsRequest): Promise<_10.QueryDepositsResponse>;
            };
            LCDQueryClient: typeof _211.LCDQueryClient;
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
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
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
            LCDQueryClient: typeof _212.LCDQueryClient;
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
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _15.CommitteeChangeProposal | _15.CommitteeDeleteProposal | import("../cosmos/distribution/v1beta1/distribution").CommunityPoolSpendProposal | import("../cosmos/distribution/v1beta1/distribution").CommunityPoolSpendProposalWithDeposit | import("../cosmos/params/v1beta1/params").ParameterChangeProposal | import("../cosmos/upgrade/v1beta1/upgrade").SoftwareUpgradeProposal | import("../cosmos/upgrade/v1beta1/upgrade").CancelSoftwareUpgradeProposal;
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
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request?: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                totalBalance(request?: _19.QueryTotalBalanceRequest): Promise<_19.QueryTotalBalanceResponse>;
            };
            LCDQueryClient: typeof _213.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    fundCommunityPool(value: _20.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    fundCommunityPool(value: _20.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _20.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _20.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    fundCommunityPool(value: _20.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _20.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/kava.community.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _20.MsgFundCommunityPool) => _20.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _20.MsgFundCommunityPoolAmino) => _20.MsgFundCommunityPool;
                };
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _20.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgFundCommunityPool;
                fromPartial(object: Partial<_20.MsgFundCommunityPool>): _20.MsgFundCommunityPool;
                fromAmino(object: _20.MsgFundCommunityPoolAmino): _20.MsgFundCommunityPool;
                toAmino(message: _20.MsgFundCommunityPool): _20.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _20.MsgFundCommunityPoolAminoMsg): _20.MsgFundCommunityPool;
                fromProtoMsg(message: _20.MsgFundCommunityPoolProtoMsg): _20.MsgFundCommunityPool;
                toProto(message: _20.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _20.MsgFundCommunityPool): _20.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _20.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_20.MsgFundCommunityPoolResponse>): _20.MsgFundCommunityPoolResponse;
                fromAmino(_: _20.MsgFundCommunityPoolResponseAmino): _20.MsgFundCommunityPoolResponse;
                toAmino(_: _20.MsgFundCommunityPoolResponse): _20.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _20.MsgFundCommunityPoolResponseAminoMsg): _20.MsgFundCommunityPoolResponse;
                fromProtoMsg(message: _20.MsgFundCommunityPoolResponseProtoMsg): _20.MsgFundCommunityPoolResponse;
                toProto(message: _20.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _20.MsgFundCommunityPoolResponse): _20.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(_: _19.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.QueryBalanceRequest;
                fromPartial(_: Partial<_19.QueryBalanceRequest>): _19.QueryBalanceRequest;
                fromAmino(_: _19.QueryBalanceRequestAmino): _19.QueryBalanceRequest;
                toAmino(_: _19.QueryBalanceRequest): _19.QueryBalanceRequestAmino;
                fromAminoMsg(object: _19.QueryBalanceRequestAminoMsg): _19.QueryBalanceRequest;
                fromProtoMsg(message: _19.QueryBalanceRequestProtoMsg): _19.QueryBalanceRequest;
                toProto(message: _19.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _19.QueryBalanceRequest): _19.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _19.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryBalanceResponse;
                fromPartial(object: Partial<_19.QueryBalanceResponse>): _19.QueryBalanceResponse;
                fromAmino(object: _19.QueryBalanceResponseAmino): _19.QueryBalanceResponse;
                toAmino(message: _19.QueryBalanceResponse): _19.QueryBalanceResponseAmino;
                fromAminoMsg(object: _19.QueryBalanceResponseAminoMsg): _19.QueryBalanceResponse;
                fromProtoMsg(message: _19.QueryBalanceResponseProtoMsg): _19.QueryBalanceResponse;
                toProto(message: _19.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _19.QueryBalanceResponse): _19.QueryBalanceResponseProtoMsg;
            };
            QueryTotalBalanceRequest: {
                typeUrl: string;
                encode(_: _19.QueryTotalBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.QueryTotalBalanceRequest;
                fromPartial(_: Partial<_19.QueryTotalBalanceRequest>): _19.QueryTotalBalanceRequest;
                fromAmino(_: _19.QueryTotalBalanceRequestAmino): _19.QueryTotalBalanceRequest;
                toAmino(_: _19.QueryTotalBalanceRequest): _19.QueryTotalBalanceRequestAmino;
                fromAminoMsg(object: _19.QueryTotalBalanceRequestAminoMsg): _19.QueryTotalBalanceRequest;
                fromProtoMsg(message: _19.QueryTotalBalanceRequestProtoMsg): _19.QueryTotalBalanceRequest;
                toProto(message: _19.QueryTotalBalanceRequest): Uint8Array;
                toProtoMsg(message: _19.QueryTotalBalanceRequest): _19.QueryTotalBalanceRequestProtoMsg;
            };
            QueryTotalBalanceResponse: {
                typeUrl: string;
                encode(message: _19.QueryTotalBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.QueryTotalBalanceResponse;
                fromPartial(object: Partial<_19.QueryTotalBalanceResponse>): _19.QueryTotalBalanceResponse;
                fromAmino(object: _19.QueryTotalBalanceResponseAmino): _19.QueryTotalBalanceResponse;
                toAmino(message: _19.QueryTotalBalanceResponse): _19.QueryTotalBalanceResponseAmino;
                fromAminoMsg(object: _19.QueryTotalBalanceResponseAminoMsg): _19.QueryTotalBalanceResponse;
                fromProtoMsg(message: _19.QueryTotalBalanceResponseProtoMsg): _19.QueryTotalBalanceResponse;
                toProto(message: _19.QueryTotalBalanceResponse): Uint8Array;
                toProtoMsg(message: _19.QueryTotalBalanceResponse): _19.QueryTotalBalanceResponseProtoMsg;
            };
            CommunityPoolLendDepositProposal: {
                typeUrl: string;
                encode(message: _18.CommunityPoolLendDepositProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.CommunityPoolLendDepositProposal;
                fromPartial(object: Partial<_18.CommunityPoolLendDepositProposal>): _18.CommunityPoolLendDepositProposal;
                fromAmino(object: _18.CommunityPoolLendDepositProposalAmino): _18.CommunityPoolLendDepositProposal;
                toAmino(message: _18.CommunityPoolLendDepositProposal): _18.CommunityPoolLendDepositProposalAmino;
                fromAminoMsg(object: _18.CommunityPoolLendDepositProposalAminoMsg): _18.CommunityPoolLendDepositProposal;
                fromProtoMsg(message: _18.CommunityPoolLendDepositProposalProtoMsg): _18.CommunityPoolLendDepositProposal;
                toProto(message: _18.CommunityPoolLendDepositProposal): Uint8Array;
                toProtoMsg(message: _18.CommunityPoolLendDepositProposal): _18.CommunityPoolLendDepositProposalProtoMsg;
            };
            CommunityPoolLendWithdrawProposal: {
                typeUrl: string;
                encode(message: _18.CommunityPoolLendWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.CommunityPoolLendWithdrawProposal;
                fromPartial(object: Partial<_18.CommunityPoolLendWithdrawProposal>): _18.CommunityPoolLendWithdrawProposal;
                fromAmino(object: _18.CommunityPoolLendWithdrawProposalAmino): _18.CommunityPoolLendWithdrawProposal;
                toAmino(message: _18.CommunityPoolLendWithdrawProposal): _18.CommunityPoolLendWithdrawProposalAmino;
                fromAminoMsg(object: _18.CommunityPoolLendWithdrawProposalAminoMsg): _18.CommunityPoolLendWithdrawProposal;
                fromProtoMsg(message: _18.CommunityPoolLendWithdrawProposalProtoMsg): _18.CommunityPoolLendWithdrawProposal;
                toProto(message: _18.CommunityPoolLendWithdrawProposal): Uint8Array;
                toProtoMsg(message: _18.CommunityPoolLendWithdrawProposal): _18.CommunityPoolLendWithdrawProposalProtoMsg;
            };
            CommunityCDPRepayDebtProposal: {
                typeUrl: string;
                encode(message: _18.CommunityCDPRepayDebtProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.CommunityCDPRepayDebtProposal;
                fromPartial(object: Partial<_18.CommunityCDPRepayDebtProposal>): _18.CommunityCDPRepayDebtProposal;
                fromAmino(object: _18.CommunityCDPRepayDebtProposalAmino): _18.CommunityCDPRepayDebtProposal;
                toAmino(message: _18.CommunityCDPRepayDebtProposal): _18.CommunityCDPRepayDebtProposalAmino;
                fromAminoMsg(object: _18.CommunityCDPRepayDebtProposalAminoMsg): _18.CommunityCDPRepayDebtProposal;
                fromProtoMsg(message: _18.CommunityCDPRepayDebtProposalProtoMsg): _18.CommunityCDPRepayDebtProposal;
                toProto(message: _18.CommunityCDPRepayDebtProposal): Uint8Array;
                toProtoMsg(message: _18.CommunityCDPRepayDebtProposal): _18.CommunityCDPRepayDebtProposalProtoMsg;
            };
            CommunityCDPWithdrawCollateralProposal: {
                typeUrl: string;
                encode(message: _18.CommunityCDPWithdrawCollateralProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.CommunityCDPWithdrawCollateralProposal;
                fromPartial(object: Partial<_18.CommunityCDPWithdrawCollateralProposal>): _18.CommunityCDPWithdrawCollateralProposal;
                fromAmino(object: _18.CommunityCDPWithdrawCollateralProposalAmino): _18.CommunityCDPWithdrawCollateralProposal;
                toAmino(message: _18.CommunityCDPWithdrawCollateralProposal): _18.CommunityCDPWithdrawCollateralProposalAmino;
                fromAminoMsg(object: _18.CommunityCDPWithdrawCollateralProposalAminoMsg): _18.CommunityCDPWithdrawCollateralProposal;
                fromProtoMsg(message: _18.CommunityCDPWithdrawCollateralProposalProtoMsg): _18.CommunityCDPWithdrawCollateralProposal;
                toProto(message: _18.CommunityCDPWithdrawCollateralProposal): Uint8Array;
                toProtoMsg(message: _18.CommunityCDPWithdrawCollateralProposal): _18.CommunityCDPWithdrawCollateralProposalProtoMsg;
            };
        };
    }
    namespace earn {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                vaults(request?: _24.QueryVaultsRequest): Promise<_24.QueryVaultsResponse>;
                vault(request: _24.QueryVaultRequest): Promise<_24.QueryVaultResponse>;
                deposits(request: _24.QueryDepositsRequest): Promise<_24.QueryDepositsResponse>;
                totalSupply(request?: _24.QueryTotalSupplyRequest): Promise<_24.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _26.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _26.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _26.MsgDeposit): {
                        typeUrl: string;
                        value: _26.MsgDeposit;
                    };
                    withdraw(value: _26.MsgWithdraw): {
                        typeUrl: string;
                        value: _26.MsgWithdraw;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _26.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _26.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _26.MsgDeposit): {
                        typeUrl: string;
                        value: _26.MsgDeposit;
                    };
                    withdraw(value: _26.MsgWithdraw): {
                        typeUrl: string;
                        value: _26.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.earn.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _26.MsgDeposit) => _26.MsgDepositAmino;
                    fromAmino: (object: _26.MsgDepositAmino) => _26.MsgDeposit;
                };
                "/kava.earn.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _26.MsgWithdraw) => _26.MsgWithdrawAmino;
                    fromAmino: (object: _26.MsgWithdrawAmino) => _26.MsgWithdraw;
                };
            };
            AllowedVault: {
                typeUrl: string;
                encode(message: _27.AllowedVault, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.AllowedVault;
                fromPartial(object: Partial<_27.AllowedVault>): _27.AllowedVault;
                fromAmino(object: _27.AllowedVaultAmino): _27.AllowedVault;
                toAmino(message: _27.AllowedVault): _27.AllowedVaultAmino;
                fromAminoMsg(object: _27.AllowedVaultAminoMsg): _27.AllowedVault;
                fromProtoMsg(message: _27.AllowedVaultProtoMsg): _27.AllowedVault;
                toProto(message: _27.AllowedVault): Uint8Array;
                toProtoMsg(message: _27.AllowedVault): _27.AllowedVaultProtoMsg;
            };
            VaultRecord: {
                typeUrl: string;
                encode(message: _27.VaultRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.VaultRecord;
                fromPartial(object: Partial<_27.VaultRecord>): _27.VaultRecord;
                fromAmino(object: _27.VaultRecordAmino): _27.VaultRecord;
                toAmino(message: _27.VaultRecord): _27.VaultRecordAmino;
                fromAminoMsg(object: _27.VaultRecordAminoMsg): _27.VaultRecord;
                fromProtoMsg(message: _27.VaultRecordProtoMsg): _27.VaultRecord;
                toProto(message: _27.VaultRecord): Uint8Array;
                toProtoMsg(message: _27.VaultRecord): _27.VaultRecordProtoMsg;
            };
            VaultShareRecord: {
                typeUrl: string;
                encode(message: _27.VaultShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.VaultShareRecord;
                fromPartial(object: Partial<_27.VaultShareRecord>): _27.VaultShareRecord;
                fromAmino(object: _27.VaultShareRecordAmino): _27.VaultShareRecord;
                toAmino(message: _27.VaultShareRecord): _27.VaultShareRecordAmino;
                fromAminoMsg(object: _27.VaultShareRecordAminoMsg): _27.VaultShareRecord;
                fromProtoMsg(message: _27.VaultShareRecordProtoMsg): _27.VaultShareRecord;
                toProto(message: _27.VaultShareRecord): Uint8Array;
                toProtoMsg(message: _27.VaultShareRecord): _27.VaultShareRecordProtoMsg;
            };
            VaultShare: {
                typeUrl: string;
                encode(message: _27.VaultShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.VaultShare;
                fromPartial(object: Partial<_27.VaultShare>): _27.VaultShare;
                fromAmino(object: _27.VaultShareAmino): _27.VaultShare;
                toAmino(message: _27.VaultShare): _27.VaultShareAmino;
                fromAminoMsg(object: _27.VaultShareAminoMsg): _27.VaultShare;
                fromProtoMsg(message: _27.VaultShareProtoMsg): _27.VaultShare;
                toProto(message: _27.VaultShare): Uint8Array;
                toProtoMsg(message: _27.VaultShare): _27.VaultShareProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _26.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MsgDeposit;
                fromPartial(object: Partial<_26.MsgDeposit>): _26.MsgDeposit;
                fromAmino(object: _26.MsgDepositAmino): _26.MsgDeposit;
                toAmino(message: _26.MsgDeposit): _26.MsgDepositAmino;
                fromAminoMsg(object: _26.MsgDepositAminoMsg): _26.MsgDeposit;
                fromProtoMsg(message: _26.MsgDepositProtoMsg): _26.MsgDeposit;
                toProto(message: _26.MsgDeposit): Uint8Array;
                toProtoMsg(message: _26.MsgDeposit): _26.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(message: _26.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MsgDepositResponse;
                fromPartial(object: Partial<_26.MsgDepositResponse>): _26.MsgDepositResponse;
                fromAmino(object: _26.MsgDepositResponseAmino): _26.MsgDepositResponse;
                toAmino(message: _26.MsgDepositResponse): _26.MsgDepositResponseAmino;
                fromAminoMsg(object: _26.MsgDepositResponseAminoMsg): _26.MsgDepositResponse;
                fromProtoMsg(message: _26.MsgDepositResponseProtoMsg): _26.MsgDepositResponse;
                toProto(message: _26.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _26.MsgDepositResponse): _26.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _26.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MsgWithdraw;
                fromPartial(object: Partial<_26.MsgWithdraw>): _26.MsgWithdraw;
                fromAmino(object: _26.MsgWithdrawAmino): _26.MsgWithdraw;
                toAmino(message: _26.MsgWithdraw): _26.MsgWithdrawAmino;
                fromAminoMsg(object: _26.MsgWithdrawAminoMsg): _26.MsgWithdraw;
                fromProtoMsg(message: _26.MsgWithdrawProtoMsg): _26.MsgWithdraw;
                toProto(message: _26.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _26.MsgWithdraw): _26.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(message: _26.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.MsgWithdrawResponse;
                fromPartial(object: Partial<_26.MsgWithdrawResponse>): _26.MsgWithdrawResponse;
                fromAmino(object: _26.MsgWithdrawResponseAmino): _26.MsgWithdrawResponse;
                toAmino(message: _26.MsgWithdrawResponse): _26.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _26.MsgWithdrawResponseAminoMsg): _26.MsgWithdrawResponse;
                fromProtoMsg(message: _26.MsgWithdrawResponseProtoMsg): _26.MsgWithdrawResponse;
                toProto(message: _26.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawResponse): _26.MsgWithdrawResponseProtoMsg;
            };
            strategyTypeFromJSON(object: any): _25.StrategyType;
            strategyTypeToJSON(object: _25.StrategyType): string;
            StrategyType: typeof _25.StrategyType;
            StrategyTypeSDKType: typeof _25.StrategyType;
            StrategyTypeAmino: typeof _25.StrategyType;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _24.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.QueryParamsRequest;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
                fromAmino(_: _24.QueryParamsRequestAmino): _24.QueryParamsRequest;
                toAmino(_: _24.QueryParamsRequest): _24.QueryParamsRequestAmino;
                fromAminoMsg(object: _24.QueryParamsRequestAminoMsg): _24.QueryParamsRequest;
                fromProtoMsg(message: _24.QueryParamsRequestProtoMsg): _24.QueryParamsRequest;
                toProto(message: _24.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _24.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
                fromAmino(object: _24.QueryParamsResponseAmino): _24.QueryParamsResponse;
                toAmino(message: _24.QueryParamsResponse): _24.QueryParamsResponseAmino;
                fromAminoMsg(object: _24.QueryParamsResponseAminoMsg): _24.QueryParamsResponse;
                fromProtoMsg(message: _24.QueryParamsResponseProtoMsg): _24.QueryParamsResponse;
                toProto(message: _24.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseProtoMsg;
            };
            QueryVaultsRequest: {
                typeUrl: string;
                encode(_: _24.QueryVaultsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.QueryVaultsRequest;
                fromPartial(_: Partial<_24.QueryVaultsRequest>): _24.QueryVaultsRequest;
                fromAmino(_: _24.QueryVaultsRequestAmino): _24.QueryVaultsRequest;
                toAmino(_: _24.QueryVaultsRequest): _24.QueryVaultsRequestAmino;
                fromAminoMsg(object: _24.QueryVaultsRequestAminoMsg): _24.QueryVaultsRequest;
                fromProtoMsg(message: _24.QueryVaultsRequestProtoMsg): _24.QueryVaultsRequest;
                toProto(message: _24.QueryVaultsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryVaultsRequest): _24.QueryVaultsRequestProtoMsg;
            };
            QueryVaultsResponse: {
                typeUrl: string;
                encode(message: _24.QueryVaultsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryVaultsResponse;
                fromPartial(object: Partial<_24.QueryVaultsResponse>): _24.QueryVaultsResponse;
                fromAmino(object: _24.QueryVaultsResponseAmino): _24.QueryVaultsResponse;
                toAmino(message: _24.QueryVaultsResponse): _24.QueryVaultsResponseAmino;
                fromAminoMsg(object: _24.QueryVaultsResponseAminoMsg): _24.QueryVaultsResponse;
                fromProtoMsg(message: _24.QueryVaultsResponseProtoMsg): _24.QueryVaultsResponse;
                toProto(message: _24.QueryVaultsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryVaultsResponse): _24.QueryVaultsResponseProtoMsg;
            };
            QueryVaultRequest: {
                typeUrl: string;
                encode(message: _24.QueryVaultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryVaultRequest;
                fromPartial(object: Partial<_24.QueryVaultRequest>): _24.QueryVaultRequest;
                fromAmino(object: _24.QueryVaultRequestAmino): _24.QueryVaultRequest;
                toAmino(message: _24.QueryVaultRequest): _24.QueryVaultRequestAmino;
                fromAminoMsg(object: _24.QueryVaultRequestAminoMsg): _24.QueryVaultRequest;
                fromProtoMsg(message: _24.QueryVaultRequestProtoMsg): _24.QueryVaultRequest;
                toProto(message: _24.QueryVaultRequest): Uint8Array;
                toProtoMsg(message: _24.QueryVaultRequest): _24.QueryVaultRequestProtoMsg;
            };
            QueryVaultResponse: {
                typeUrl: string;
                encode(message: _24.QueryVaultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryVaultResponse;
                fromPartial(object: Partial<_24.QueryVaultResponse>): _24.QueryVaultResponse;
                fromAmino(object: _24.QueryVaultResponseAmino): _24.QueryVaultResponse;
                toAmino(message: _24.QueryVaultResponse): _24.QueryVaultResponseAmino;
                fromAminoMsg(object: _24.QueryVaultResponseAminoMsg): _24.QueryVaultResponse;
                fromProtoMsg(message: _24.QueryVaultResponseProtoMsg): _24.QueryVaultResponse;
                toProto(message: _24.QueryVaultResponse): Uint8Array;
                toProtoMsg(message: _24.QueryVaultResponse): _24.QueryVaultResponseProtoMsg;
            };
            VaultResponse: {
                typeUrl: string;
                encode(message: _24.VaultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.VaultResponse;
                fromPartial(object: Partial<_24.VaultResponse>): _24.VaultResponse;
                fromAmino(object: _24.VaultResponseAmino): _24.VaultResponse;
                toAmino(message: _24.VaultResponse): _24.VaultResponseAmino;
                fromAminoMsg(object: _24.VaultResponseAminoMsg): _24.VaultResponse;
                fromProtoMsg(message: _24.VaultResponseProtoMsg): _24.VaultResponse;
                toProto(message: _24.VaultResponse): Uint8Array;
                toProtoMsg(message: _24.VaultResponse): _24.VaultResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _24.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryDepositsRequest;
                fromPartial(object: Partial<_24.QueryDepositsRequest>): _24.QueryDepositsRequest;
                fromAmino(object: _24.QueryDepositsRequestAmino): _24.QueryDepositsRequest;
                toAmino(message: _24.QueryDepositsRequest): _24.QueryDepositsRequestAmino;
                fromAminoMsg(object: _24.QueryDepositsRequestAminoMsg): _24.QueryDepositsRequest;
                fromProtoMsg(message: _24.QueryDepositsRequestProtoMsg): _24.QueryDepositsRequest;
                toProto(message: _24.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDepositsRequest): _24.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _24.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryDepositsResponse;
                fromPartial(object: Partial<_24.QueryDepositsResponse>): _24.QueryDepositsResponse;
                fromAmino(object: _24.QueryDepositsResponseAmino): _24.QueryDepositsResponse;
                toAmino(message: _24.QueryDepositsResponse): _24.QueryDepositsResponseAmino;
                fromAminoMsg(object: _24.QueryDepositsResponseAminoMsg): _24.QueryDepositsResponse;
                fromProtoMsg(message: _24.QueryDepositsResponseProtoMsg): _24.QueryDepositsResponse;
                toProto(message: _24.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDepositsResponse): _24.QueryDepositsResponseProtoMsg;
            };
            DepositResponse: {
                typeUrl: string;
                encode(message: _24.DepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.DepositResponse;
                fromPartial(object: Partial<_24.DepositResponse>): _24.DepositResponse;
                fromAmino(object: _24.DepositResponseAmino): _24.DepositResponse;
                toAmino(message: _24.DepositResponse): _24.DepositResponseAmino;
                fromAminoMsg(object: _24.DepositResponseAminoMsg): _24.DepositResponse;
                fromProtoMsg(message: _24.DepositResponseProtoMsg): _24.DepositResponse;
                toProto(message: _24.DepositResponse): Uint8Array;
                toProtoMsg(message: _24.DepositResponse): _24.DepositResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(_: _24.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_24.QueryTotalSupplyRequest>): _24.QueryTotalSupplyRequest;
                fromAmino(_: _24.QueryTotalSupplyRequestAmino): _24.QueryTotalSupplyRequest;
                toAmino(_: _24.QueryTotalSupplyRequest): _24.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _24.QueryTotalSupplyRequestAminoMsg): _24.QueryTotalSupplyRequest;
                fromProtoMsg(message: _24.QueryTotalSupplyRequestProtoMsg): _24.QueryTotalSupplyRequest;
                toProto(message: _24.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _24.QueryTotalSupplyRequest): _24.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _24.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_24.QueryTotalSupplyResponse>): _24.QueryTotalSupplyResponse;
                fromAmino(object: _24.QueryTotalSupplyResponseAmino): _24.QueryTotalSupplyResponse;
                toAmino(message: _24.QueryTotalSupplyResponse): _24.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _24.QueryTotalSupplyResponseAminoMsg): _24.QueryTotalSupplyResponse;
                fromProtoMsg(message: _24.QueryTotalSupplyResponseProtoMsg): _24.QueryTotalSupplyResponse;
                toProto(message: _24.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _24.QueryTotalSupplyResponse): _24.QueryTotalSupplyResponseProtoMsg;
            };
            CommunityPoolDepositProposal: {
                typeUrl: string;
                encode(message: _23.CommunityPoolDepositProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.CommunityPoolDepositProposal;
                fromPartial(object: Partial<_23.CommunityPoolDepositProposal>): _23.CommunityPoolDepositProposal;
                fromAmino(object: _23.CommunityPoolDepositProposalAmino): _23.CommunityPoolDepositProposal;
                toAmino(message: _23.CommunityPoolDepositProposal): _23.CommunityPoolDepositProposalAmino;
                fromAminoMsg(object: _23.CommunityPoolDepositProposalAminoMsg): _23.CommunityPoolDepositProposal;
                fromProtoMsg(message: _23.CommunityPoolDepositProposalProtoMsg): _23.CommunityPoolDepositProposal;
                toProto(message: _23.CommunityPoolDepositProposal): Uint8Array;
                toProtoMsg(message: _23.CommunityPoolDepositProposal): _23.CommunityPoolDepositProposalProtoMsg;
            };
            CommunityPoolDepositProposalJSON: {
                typeUrl: string;
                encode(message: _23.CommunityPoolDepositProposalJSON, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.CommunityPoolDepositProposalJSON;
                fromPartial(object: Partial<_23.CommunityPoolDepositProposalJSON>): _23.CommunityPoolDepositProposalJSON;
                fromAmino(object: _23.CommunityPoolDepositProposalJSONAmino): _23.CommunityPoolDepositProposalJSON;
                toAmino(message: _23.CommunityPoolDepositProposalJSON): _23.CommunityPoolDepositProposalJSONAmino;
                fromAminoMsg(object: _23.CommunityPoolDepositProposalJSONAminoMsg): _23.CommunityPoolDepositProposalJSON;
                fromProtoMsg(message: _23.CommunityPoolDepositProposalJSONProtoMsg): _23.CommunityPoolDepositProposalJSON;
                toProto(message: _23.CommunityPoolDepositProposalJSON): Uint8Array;
                toProtoMsg(message: _23.CommunityPoolDepositProposalJSON): _23.CommunityPoolDepositProposalJSONProtoMsg;
            };
            CommunityPoolWithdrawProposal: {
                typeUrl: string;
                encode(message: _23.CommunityPoolWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.CommunityPoolWithdrawProposal;
                fromPartial(object: Partial<_23.CommunityPoolWithdrawProposal>): _23.CommunityPoolWithdrawProposal;
                fromAmino(object: _23.CommunityPoolWithdrawProposalAmino): _23.CommunityPoolWithdrawProposal;
                toAmino(message: _23.CommunityPoolWithdrawProposal): _23.CommunityPoolWithdrawProposalAmino;
                fromAminoMsg(object: _23.CommunityPoolWithdrawProposalAminoMsg): _23.CommunityPoolWithdrawProposal;
                fromProtoMsg(message: _23.CommunityPoolWithdrawProposalProtoMsg): _23.CommunityPoolWithdrawProposal;
                toProto(message: _23.CommunityPoolWithdrawProposal): Uint8Array;
                toProtoMsg(message: _23.CommunityPoolWithdrawProposal): _23.CommunityPoolWithdrawProposalProtoMsg;
            };
            CommunityPoolWithdrawProposalJSON: {
                typeUrl: string;
                encode(message: _23.CommunityPoolWithdrawProposalJSON, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.CommunityPoolWithdrawProposalJSON;
                fromPartial(object: Partial<_23.CommunityPoolWithdrawProposalJSON>): _23.CommunityPoolWithdrawProposalJSON;
                fromAmino(object: _23.CommunityPoolWithdrawProposalJSONAmino): _23.CommunityPoolWithdrawProposalJSON;
                toAmino(message: _23.CommunityPoolWithdrawProposalJSON): _23.CommunityPoolWithdrawProposalJSONAmino;
                fromAminoMsg(object: _23.CommunityPoolWithdrawProposalJSONAminoMsg): _23.CommunityPoolWithdrawProposalJSON;
                fromProtoMsg(message: _23.CommunityPoolWithdrawProposalJSONProtoMsg): _23.CommunityPoolWithdrawProposalJSON;
                toProto(message: _23.CommunityPoolWithdrawProposalJSON): Uint8Array;
                toProtoMsg(message: _23.CommunityPoolWithdrawProposalJSON): _23.CommunityPoolWithdrawProposalJSONProtoMsg;
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
    }
    namespace evmutil {
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                deployedCosmosCoinContracts(request: _30.QueryDeployedCosmosCoinContractsRequest): Promise<_30.QueryDeployedCosmosCoinContractsResponse>;
            };
            LCDQueryClient: typeof _215.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoinToERC20(value: _31.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20ToCoin(value: _31.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertCosmosCoinToERC20(value: _31.MsgConvertCosmosCoinToERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertCosmosCoinFromERC20(value: _31.MsgConvertCosmosCoinFromERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoinToERC20(value: _31.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: _31.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: _31.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: _31.MsgConvertERC20ToCoin;
                    };
                    convertCosmosCoinToERC20(value: _31.MsgConvertCosmosCoinToERC20): {
                        typeUrl: string;
                        value: _31.MsgConvertCosmosCoinToERC20;
                    };
                    convertCosmosCoinFromERC20(value: _31.MsgConvertCosmosCoinFromERC20): {
                        typeUrl: string;
                        value: _31.MsgConvertCosmosCoinFromERC20;
                    };
                };
                fromJSON: {
                    convertCoinToERC20(value: any): {
                        typeUrl: string;
                        value: _31.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: any): {
                        typeUrl: string;
                        value: _31.MsgConvertERC20ToCoin;
                    };
                    convertCosmosCoinToERC20(value: any): {
                        typeUrl: string;
                        value: _31.MsgConvertCosmosCoinToERC20;
                    };
                    convertCosmosCoinFromERC20(value: any): {
                        typeUrl: string;
                        value: _31.MsgConvertCosmosCoinFromERC20;
                    };
                };
                fromPartial: {
                    convertCoinToERC20(value: _31.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: _31.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: _31.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: _31.MsgConvertERC20ToCoin;
                    };
                    convertCosmosCoinToERC20(value: _31.MsgConvertCosmosCoinToERC20): {
                        typeUrl: string;
                        value: _31.MsgConvertCosmosCoinToERC20;
                    };
                    convertCosmosCoinFromERC20(value: _31.MsgConvertCosmosCoinFromERC20): {
                        typeUrl: string;
                        value: _31.MsgConvertCosmosCoinFromERC20;
                    };
                };
            };
            AminoConverter: {
                "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
                    aminoType: string;
                    toAmino: (message: _31.MsgConvertCoinToERC20) => _31.MsgConvertCoinToERC20Amino;
                    fromAmino: (object: _31.MsgConvertCoinToERC20Amino) => _31.MsgConvertCoinToERC20;
                };
                "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
                    aminoType: string;
                    toAmino: (message: _31.MsgConvertERC20ToCoin) => _31.MsgConvertERC20ToCoinAmino;
                    fromAmino: (object: _31.MsgConvertERC20ToCoinAmino) => _31.MsgConvertERC20ToCoin;
                };
                "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20": {
                    aminoType: string;
                    toAmino: (message: _31.MsgConvertCosmosCoinToERC20) => _31.MsgConvertCosmosCoinToERC20Amino;
                    fromAmino: (object: _31.MsgConvertCosmosCoinToERC20Amino) => _31.MsgConvertCosmosCoinToERC20;
                };
                "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20": {
                    aminoType: string;
                    toAmino: (message: _31.MsgConvertCosmosCoinFromERC20) => _31.MsgConvertCosmosCoinFromERC20Amino;
                    fromAmino: (object: _31.MsgConvertCosmosCoinFromERC20Amino) => _31.MsgConvertCosmosCoinFromERC20;
                };
            };
            MsgConvertCoinToERC20: {
                typeUrl: string;
                encode(message: _31.MsgConvertCoinToERC20, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgConvertCoinToERC20;
                fromPartial(object: Partial<_31.MsgConvertCoinToERC20>): _31.MsgConvertCoinToERC20;
                fromAmino(object: _31.MsgConvertCoinToERC20Amino): _31.MsgConvertCoinToERC20;
                toAmino(message: _31.MsgConvertCoinToERC20): _31.MsgConvertCoinToERC20Amino;
                fromAminoMsg(object: _31.MsgConvertCoinToERC20AminoMsg): _31.MsgConvertCoinToERC20;
                fromProtoMsg(message: _31.MsgConvertCoinToERC20ProtoMsg): _31.MsgConvertCoinToERC20;
                toProto(message: _31.MsgConvertCoinToERC20): Uint8Array;
                toProtoMsg(message: _31.MsgConvertCoinToERC20): _31.MsgConvertCoinToERC20ProtoMsg;
            };
            MsgConvertCoinToERC20Response: {
                typeUrl: string;
                encode(_: _31.MsgConvertCoinToERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgConvertCoinToERC20Response;
                fromPartial(_: Partial<_31.MsgConvertCoinToERC20Response>): _31.MsgConvertCoinToERC20Response;
                fromAmino(_: _31.MsgConvertCoinToERC20ResponseAmino): _31.MsgConvertCoinToERC20Response;
                toAmino(_: _31.MsgConvertCoinToERC20Response): _31.MsgConvertCoinToERC20ResponseAmino;
                fromAminoMsg(object: _31.MsgConvertCoinToERC20ResponseAminoMsg): _31.MsgConvertCoinToERC20Response;
                fromProtoMsg(message: _31.MsgConvertCoinToERC20ResponseProtoMsg): _31.MsgConvertCoinToERC20Response;
                toProto(message: _31.MsgConvertCoinToERC20Response): Uint8Array;
                toProtoMsg(message: _31.MsgConvertCoinToERC20Response): _31.MsgConvertCoinToERC20ResponseProtoMsg;
            };
            MsgConvertERC20ToCoin: {
                typeUrl: string;
                encode(message: _31.MsgConvertERC20ToCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgConvertERC20ToCoin;
                fromPartial(object: Partial<_31.MsgConvertERC20ToCoin>): _31.MsgConvertERC20ToCoin;
                fromAmino(object: _31.MsgConvertERC20ToCoinAmino): _31.MsgConvertERC20ToCoin;
                toAmino(message: _31.MsgConvertERC20ToCoin): _31.MsgConvertERC20ToCoinAmino;
                fromAminoMsg(object: _31.MsgConvertERC20ToCoinAminoMsg): _31.MsgConvertERC20ToCoin;
                fromProtoMsg(message: _31.MsgConvertERC20ToCoinProtoMsg): _31.MsgConvertERC20ToCoin;
                toProto(message: _31.MsgConvertERC20ToCoin): Uint8Array;
                toProtoMsg(message: _31.MsgConvertERC20ToCoin): _31.MsgConvertERC20ToCoinProtoMsg;
            };
            MsgConvertERC20ToCoinResponse: {
                typeUrl: string;
                encode(_: _31.MsgConvertERC20ToCoinResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgConvertERC20ToCoinResponse;
                fromPartial(_: Partial<_31.MsgConvertERC20ToCoinResponse>): _31.MsgConvertERC20ToCoinResponse;
                fromAmino(_: _31.MsgConvertERC20ToCoinResponseAmino): _31.MsgConvertERC20ToCoinResponse;
                toAmino(_: _31.MsgConvertERC20ToCoinResponse): _31.MsgConvertERC20ToCoinResponseAmino;
                fromAminoMsg(object: _31.MsgConvertERC20ToCoinResponseAminoMsg): _31.MsgConvertERC20ToCoinResponse;
                fromProtoMsg(message: _31.MsgConvertERC20ToCoinResponseProtoMsg): _31.MsgConvertERC20ToCoinResponse;
                toProto(message: _31.MsgConvertERC20ToCoinResponse): Uint8Array;
                toProtoMsg(message: _31.MsgConvertERC20ToCoinResponse): _31.MsgConvertERC20ToCoinResponseProtoMsg;
            };
            MsgConvertCosmosCoinToERC20: {
                typeUrl: string;
                encode(message: _31.MsgConvertCosmosCoinToERC20, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgConvertCosmosCoinToERC20;
                fromPartial(object: Partial<_31.MsgConvertCosmosCoinToERC20>): _31.MsgConvertCosmosCoinToERC20;
                fromAmino(object: _31.MsgConvertCosmosCoinToERC20Amino): _31.MsgConvertCosmosCoinToERC20;
                toAmino(message: _31.MsgConvertCosmosCoinToERC20): _31.MsgConvertCosmosCoinToERC20Amino;
                fromAminoMsg(object: _31.MsgConvertCosmosCoinToERC20AminoMsg): _31.MsgConvertCosmosCoinToERC20;
                fromProtoMsg(message: _31.MsgConvertCosmosCoinToERC20ProtoMsg): _31.MsgConvertCosmosCoinToERC20;
                toProto(message: _31.MsgConvertCosmosCoinToERC20): Uint8Array;
                toProtoMsg(message: _31.MsgConvertCosmosCoinToERC20): _31.MsgConvertCosmosCoinToERC20ProtoMsg;
            };
            MsgConvertCosmosCoinToERC20Response: {
                typeUrl: string;
                encode(_: _31.MsgConvertCosmosCoinToERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgConvertCosmosCoinToERC20Response;
                fromPartial(_: Partial<_31.MsgConvertCosmosCoinToERC20Response>): _31.MsgConvertCosmosCoinToERC20Response;
                fromAmino(_: _31.MsgConvertCosmosCoinToERC20ResponseAmino): _31.MsgConvertCosmosCoinToERC20Response;
                toAmino(_: _31.MsgConvertCosmosCoinToERC20Response): _31.MsgConvertCosmosCoinToERC20ResponseAmino;
                fromAminoMsg(object: _31.MsgConvertCosmosCoinToERC20ResponseAminoMsg): _31.MsgConvertCosmosCoinToERC20Response;
                fromProtoMsg(message: _31.MsgConvertCosmosCoinToERC20ResponseProtoMsg): _31.MsgConvertCosmosCoinToERC20Response;
                toProto(message: _31.MsgConvertCosmosCoinToERC20Response): Uint8Array;
                toProtoMsg(message: _31.MsgConvertCosmosCoinToERC20Response): _31.MsgConvertCosmosCoinToERC20ResponseProtoMsg;
            };
            MsgConvertCosmosCoinFromERC20: {
                typeUrl: string;
                encode(message: _31.MsgConvertCosmosCoinFromERC20, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgConvertCosmosCoinFromERC20;
                fromPartial(object: Partial<_31.MsgConvertCosmosCoinFromERC20>): _31.MsgConvertCosmosCoinFromERC20;
                fromAmino(object: _31.MsgConvertCosmosCoinFromERC20Amino): _31.MsgConvertCosmosCoinFromERC20;
                toAmino(message: _31.MsgConvertCosmosCoinFromERC20): _31.MsgConvertCosmosCoinFromERC20Amino;
                fromAminoMsg(object: _31.MsgConvertCosmosCoinFromERC20AminoMsg): _31.MsgConvertCosmosCoinFromERC20;
                fromProtoMsg(message: _31.MsgConvertCosmosCoinFromERC20ProtoMsg): _31.MsgConvertCosmosCoinFromERC20;
                toProto(message: _31.MsgConvertCosmosCoinFromERC20): Uint8Array;
                toProtoMsg(message: _31.MsgConvertCosmosCoinFromERC20): _31.MsgConvertCosmosCoinFromERC20ProtoMsg;
            };
            MsgConvertCosmosCoinFromERC20Response: {
                typeUrl: string;
                encode(_: _31.MsgConvertCosmosCoinFromERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgConvertCosmosCoinFromERC20Response;
                fromPartial(_: Partial<_31.MsgConvertCosmosCoinFromERC20Response>): _31.MsgConvertCosmosCoinFromERC20Response;
                fromAmino(_: _31.MsgConvertCosmosCoinFromERC20ResponseAmino): _31.MsgConvertCosmosCoinFromERC20Response;
                toAmino(_: _31.MsgConvertCosmosCoinFromERC20Response): _31.MsgConvertCosmosCoinFromERC20ResponseAmino;
                fromAminoMsg(object: _31.MsgConvertCosmosCoinFromERC20ResponseAminoMsg): _31.MsgConvertCosmosCoinFromERC20Response;
                fromProtoMsg(message: _31.MsgConvertCosmosCoinFromERC20ResponseProtoMsg): _31.MsgConvertCosmosCoinFromERC20Response;
                toProto(message: _31.MsgConvertCosmosCoinFromERC20Response): Uint8Array;
                toProtoMsg(message: _31.MsgConvertCosmosCoinFromERC20Response): _31.MsgConvertCosmosCoinFromERC20ResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _30.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.QueryParamsRequest;
                fromPartial(_: Partial<_30.QueryParamsRequest>): _30.QueryParamsRequest;
                fromAmino(_: _30.QueryParamsRequestAmino): _30.QueryParamsRequest;
                toAmino(_: _30.QueryParamsRequest): _30.QueryParamsRequestAmino;
                fromAminoMsg(object: _30.QueryParamsRequestAminoMsg): _30.QueryParamsRequest;
                fromProtoMsg(message: _30.QueryParamsRequestProtoMsg): _30.QueryParamsRequest;
                toProto(message: _30.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryParamsRequest): _30.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _30.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryParamsResponse;
                fromPartial(object: Partial<_30.QueryParamsResponse>): _30.QueryParamsResponse;
                fromAmino(object: _30.QueryParamsResponseAmino): _30.QueryParamsResponse;
                toAmino(message: _30.QueryParamsResponse): _30.QueryParamsResponseAmino;
                fromAminoMsg(object: _30.QueryParamsResponseAminoMsg): _30.QueryParamsResponse;
                fromProtoMsg(message: _30.QueryParamsResponseProtoMsg): _30.QueryParamsResponse;
                toProto(message: _30.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryParamsResponse): _30.QueryParamsResponseProtoMsg;
            };
            QueryDeployedCosmosCoinContractsRequest: {
                typeUrl: string;
                encode(message: _30.QueryDeployedCosmosCoinContractsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryDeployedCosmosCoinContractsRequest;
                fromPartial(object: Partial<_30.QueryDeployedCosmosCoinContractsRequest>): _30.QueryDeployedCosmosCoinContractsRequest;
                fromAmino(object: _30.QueryDeployedCosmosCoinContractsRequestAmino): _30.QueryDeployedCosmosCoinContractsRequest;
                toAmino(message: _30.QueryDeployedCosmosCoinContractsRequest): _30.QueryDeployedCosmosCoinContractsRequestAmino;
                fromAminoMsg(object: _30.QueryDeployedCosmosCoinContractsRequestAminoMsg): _30.QueryDeployedCosmosCoinContractsRequest;
                fromProtoMsg(message: _30.QueryDeployedCosmosCoinContractsRequestProtoMsg): _30.QueryDeployedCosmosCoinContractsRequest;
                toProto(message: _30.QueryDeployedCosmosCoinContractsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryDeployedCosmosCoinContractsRequest): _30.QueryDeployedCosmosCoinContractsRequestProtoMsg;
            };
            QueryDeployedCosmosCoinContractsResponse: {
                typeUrl: string;
                encode(message: _30.QueryDeployedCosmosCoinContractsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.QueryDeployedCosmosCoinContractsResponse;
                fromPartial(object: Partial<_30.QueryDeployedCosmosCoinContractsResponse>): _30.QueryDeployedCosmosCoinContractsResponse;
                fromAmino(object: _30.QueryDeployedCosmosCoinContractsResponseAmino): _30.QueryDeployedCosmosCoinContractsResponse;
                toAmino(message: _30.QueryDeployedCosmosCoinContractsResponse): _30.QueryDeployedCosmosCoinContractsResponseAmino;
                fromAminoMsg(object: _30.QueryDeployedCosmosCoinContractsResponseAminoMsg): _30.QueryDeployedCosmosCoinContractsResponse;
                fromProtoMsg(message: _30.QueryDeployedCosmosCoinContractsResponseProtoMsg): _30.QueryDeployedCosmosCoinContractsResponse;
                toProto(message: _30.QueryDeployedCosmosCoinContractsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryDeployedCosmosCoinContractsResponse): _30.QueryDeployedCosmosCoinContractsResponseProtoMsg;
            };
            DeployedCosmosCoinContract: {
                typeUrl: string;
                encode(message: _30.DeployedCosmosCoinContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DeployedCosmosCoinContract;
                fromPartial(object: Partial<_30.DeployedCosmosCoinContract>): _30.DeployedCosmosCoinContract;
                fromAmino(object: _30.DeployedCosmosCoinContractAmino): _30.DeployedCosmosCoinContract;
                toAmino(message: _30.DeployedCosmosCoinContract): _30.DeployedCosmosCoinContractAmino;
                fromAminoMsg(object: _30.DeployedCosmosCoinContractAminoMsg): _30.DeployedCosmosCoinContract;
                fromProtoMsg(message: _30.DeployedCosmosCoinContractProtoMsg): _30.DeployedCosmosCoinContract;
                toProto(message: _30.DeployedCosmosCoinContract): Uint8Array;
                toProtoMsg(message: _30.DeployedCosmosCoinContract): _30.DeployedCosmosCoinContractProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
            Account: {
                typeUrl: string;
                encode(message: _29.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Account;
                fromPartial(object: Partial<_29.Account>): _29.Account;
                fromAmino(object: _29.AccountAmino): _29.Account;
                toAmino(message: _29.Account): _29.AccountAmino;
                fromAminoMsg(object: _29.AccountAminoMsg): _29.Account;
                fromProtoMsg(message: _29.AccountProtoMsg): _29.Account;
                toProto(message: _29.Account): Uint8Array;
                toProtoMsg(message: _29.Account): _29.AccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _29.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Params;
                fromPartial(object: Partial<_29.Params>): _29.Params;
                fromAmino(object: _29.ParamsAmino): _29.Params;
                toAmino(message: _29.Params): _29.ParamsAmino;
                fromAminoMsg(object: _29.ParamsAminoMsg): _29.Params;
                fromProtoMsg(message: _29.ParamsProtoMsg): _29.Params;
                toProto(message: _29.Params): Uint8Array;
                toProtoMsg(message: _29.Params): _29.ParamsProtoMsg;
            };
            ConversionPair: {
                typeUrl: string;
                encode(message: _28.ConversionPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.ConversionPair;
                fromPartial(object: Partial<_28.ConversionPair>): _28.ConversionPair;
                fromAmino(object: _28.ConversionPairAmino): _28.ConversionPair;
                toAmino(message: _28.ConversionPair): _28.ConversionPairAmino;
                fromAminoMsg(object: _28.ConversionPairAminoMsg): _28.ConversionPair;
                fromProtoMsg(message: _28.ConversionPairProtoMsg): _28.ConversionPair;
                toProto(message: _28.ConversionPair): Uint8Array;
                toProtoMsg(message: _28.ConversionPair): _28.ConversionPairProtoMsg;
            };
            AllowedCosmosCoinERC20Token: {
                typeUrl: string;
                encode(message: _28.AllowedCosmosCoinERC20Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.AllowedCosmosCoinERC20Token;
                fromPartial(object: Partial<_28.AllowedCosmosCoinERC20Token>): _28.AllowedCosmosCoinERC20Token;
                fromAmino(object: _28.AllowedCosmosCoinERC20TokenAmino): _28.AllowedCosmosCoinERC20Token;
                toAmino(message: _28.AllowedCosmosCoinERC20Token): _28.AllowedCosmosCoinERC20TokenAmino;
                fromAminoMsg(object: _28.AllowedCosmosCoinERC20TokenAminoMsg): _28.AllowedCosmosCoinERC20Token;
                fromProtoMsg(message: _28.AllowedCosmosCoinERC20TokenProtoMsg): _28.AllowedCosmosCoinERC20Token;
                toProto(message: _28.AllowedCosmosCoinERC20Token): Uint8Array;
                toProtoMsg(message: _28.AllowedCosmosCoinERC20Token): _28.AllowedCosmosCoinERC20TokenProtoMsg;
            };
        };
    }
    namespace hard {
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                accounts(request?: _34.QueryAccountsRequest): Promise<_34.QueryAccountsResponse>;
                deposits(request: _34.QueryDepositsRequest): Promise<_34.QueryDepositsResponse>;
                unsyncedDeposits(request: _34.QueryUnsyncedDepositsRequest): Promise<_34.QueryUnsyncedDepositsResponse>;
                totalDeposited(request: _34.QueryTotalDepositedRequest): Promise<_34.QueryTotalDepositedResponse>;
                borrows(request: _34.QueryBorrowsRequest): Promise<_34.QueryBorrowsResponse>;
                unsyncedBorrows(request: _34.QueryUnsyncedBorrowsRequest): Promise<_34.QueryUnsyncedBorrowsResponse>;
                totalBorrowed(request: _34.QueryTotalBorrowedRequest): Promise<_34.QueryTotalBorrowedResponse>;
                interestRate(request: _34.QueryInterestRateRequest): Promise<_34.QueryInterestRateResponse>;
                reserves(request: _34.QueryReservesRequest): Promise<_34.QueryReservesResponse>;
                interestFactors(request: _34.QueryInterestFactorsRequest): Promise<_34.QueryInterestFactorsResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _35.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _35.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    borrow(value: _35.MsgBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repay(value: _35.MsgRepay): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _35.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _35.MsgDeposit): {
                        typeUrl: string;
                        value: _35.MsgDeposit;
                    };
                    withdraw(value: _35.MsgWithdraw): {
                        typeUrl: string;
                        value: _35.MsgWithdraw;
                    };
                    borrow(value: _35.MsgBorrow): {
                        typeUrl: string;
                        value: _35.MsgBorrow;
                    };
                    repay(value: _35.MsgRepay): {
                        typeUrl: string;
                        value: _35.MsgRepay;
                    };
                    liquidate(value: _35.MsgLiquidate): {
                        typeUrl: string;
                        value: _35.MsgLiquidate;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _35.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _35.MsgWithdraw;
                    };
                    borrow(value: any): {
                        typeUrl: string;
                        value: _35.MsgBorrow;
                    };
                    repay(value: any): {
                        typeUrl: string;
                        value: _35.MsgRepay;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _35.MsgLiquidate;
                    };
                };
                fromPartial: {
                    deposit(value: _35.MsgDeposit): {
                        typeUrl: string;
                        value: _35.MsgDeposit;
                    };
                    withdraw(value: _35.MsgWithdraw): {
                        typeUrl: string;
                        value: _35.MsgWithdraw;
                    };
                    borrow(value: _35.MsgBorrow): {
                        typeUrl: string;
                        value: _35.MsgBorrow;
                    };
                    repay(value: _35.MsgRepay): {
                        typeUrl: string;
                        value: _35.MsgRepay;
                    };
                    liquidate(value: _35.MsgLiquidate): {
                        typeUrl: string;
                        value: _35.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.hard.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _35.MsgDeposit) => _35.MsgDepositAmino;
                    fromAmino: (object: _35.MsgDepositAmino) => _35.MsgDeposit;
                };
                "/kava.hard.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _35.MsgWithdraw) => _35.MsgWithdrawAmino;
                    fromAmino: (object: _35.MsgWithdrawAmino) => _35.MsgWithdraw;
                };
                "/kava.hard.v1beta1.MsgBorrow": {
                    aminoType: string;
                    toAmino: (message: _35.MsgBorrow) => _35.MsgBorrowAmino;
                    fromAmino: (object: _35.MsgBorrowAmino) => _35.MsgBorrow;
                };
                "/kava.hard.v1beta1.MsgRepay": {
                    aminoType: string;
                    toAmino: (message: _35.MsgRepay) => _35.MsgRepayAmino;
                    fromAmino: (object: _35.MsgRepayAmino) => _35.MsgRepay;
                };
                "/kava.hard.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: (message: _35.MsgLiquidate) => _35.MsgLiquidateAmino;
                    fromAmino: (object: _35.MsgLiquidateAmino) => _35.MsgLiquidate;
                };
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _35.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgDeposit;
                fromPartial(object: Partial<_35.MsgDeposit>): _35.MsgDeposit;
                fromAmino(object: _35.MsgDepositAmino): _35.MsgDeposit;
                toAmino(message: _35.MsgDeposit): _35.MsgDepositAmino;
                fromAminoMsg(object: _35.MsgDepositAminoMsg): _35.MsgDeposit;
                fromProtoMsg(message: _35.MsgDepositProtoMsg): _35.MsgDeposit;
                toProto(message: _35.MsgDeposit): Uint8Array;
                toProtoMsg(message: _35.MsgDeposit): _35.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _35.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgDepositResponse;
                fromPartial(_: Partial<_35.MsgDepositResponse>): _35.MsgDepositResponse;
                fromAmino(_: _35.MsgDepositResponseAmino): _35.MsgDepositResponse;
                toAmino(_: _35.MsgDepositResponse): _35.MsgDepositResponseAmino;
                fromAminoMsg(object: _35.MsgDepositResponseAminoMsg): _35.MsgDepositResponse;
                fromProtoMsg(message: _35.MsgDepositResponseProtoMsg): _35.MsgDepositResponse;
                toProto(message: _35.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _35.MsgDepositResponse): _35.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _35.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgWithdraw;
                fromPartial(object: Partial<_35.MsgWithdraw>): _35.MsgWithdraw;
                fromAmino(object: _35.MsgWithdrawAmino): _35.MsgWithdraw;
                toAmino(message: _35.MsgWithdraw): _35.MsgWithdrawAmino;
                fromAminoMsg(object: _35.MsgWithdrawAminoMsg): _35.MsgWithdraw;
                fromProtoMsg(message: _35.MsgWithdrawProtoMsg): _35.MsgWithdraw;
                toProto(message: _35.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _35.MsgWithdraw): _35.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _35.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgWithdrawResponse;
                fromPartial(_: Partial<_35.MsgWithdrawResponse>): _35.MsgWithdrawResponse;
                fromAmino(_: _35.MsgWithdrawResponseAmino): _35.MsgWithdrawResponse;
                toAmino(_: _35.MsgWithdrawResponse): _35.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _35.MsgWithdrawResponseAminoMsg): _35.MsgWithdrawResponse;
                fromProtoMsg(message: _35.MsgWithdrawResponseProtoMsg): _35.MsgWithdrawResponse;
                toProto(message: _35.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _35.MsgWithdrawResponse): _35.MsgWithdrawResponseProtoMsg;
            };
            MsgBorrow: {
                typeUrl: string;
                encode(message: _35.MsgBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgBorrow;
                fromPartial(object: Partial<_35.MsgBorrow>): _35.MsgBorrow;
                fromAmino(object: _35.MsgBorrowAmino): _35.MsgBorrow;
                toAmino(message: _35.MsgBorrow): _35.MsgBorrowAmino;
                fromAminoMsg(object: _35.MsgBorrowAminoMsg): _35.MsgBorrow;
                fromProtoMsg(message: _35.MsgBorrowProtoMsg): _35.MsgBorrow;
                toProto(message: _35.MsgBorrow): Uint8Array;
                toProtoMsg(message: _35.MsgBorrow): _35.MsgBorrowProtoMsg;
            };
            MsgBorrowResponse: {
                typeUrl: string;
                encode(_: _35.MsgBorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgBorrowResponse;
                fromPartial(_: Partial<_35.MsgBorrowResponse>): _35.MsgBorrowResponse;
                fromAmino(_: _35.MsgBorrowResponseAmino): _35.MsgBorrowResponse;
                toAmino(_: _35.MsgBorrowResponse): _35.MsgBorrowResponseAmino;
                fromAminoMsg(object: _35.MsgBorrowResponseAminoMsg): _35.MsgBorrowResponse;
                fromProtoMsg(message: _35.MsgBorrowResponseProtoMsg): _35.MsgBorrowResponse;
                toProto(message: _35.MsgBorrowResponse): Uint8Array;
                toProtoMsg(message: _35.MsgBorrowResponse): _35.MsgBorrowResponseProtoMsg;
            };
            MsgRepay: {
                typeUrl: string;
                encode(message: _35.MsgRepay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgRepay;
                fromPartial(object: Partial<_35.MsgRepay>): _35.MsgRepay;
                fromAmino(object: _35.MsgRepayAmino): _35.MsgRepay;
                toAmino(message: _35.MsgRepay): _35.MsgRepayAmino;
                fromAminoMsg(object: _35.MsgRepayAminoMsg): _35.MsgRepay;
                fromProtoMsg(message: _35.MsgRepayProtoMsg): _35.MsgRepay;
                toProto(message: _35.MsgRepay): Uint8Array;
                toProtoMsg(message: _35.MsgRepay): _35.MsgRepayProtoMsg;
            };
            MsgRepayResponse: {
                typeUrl: string;
                encode(_: _35.MsgRepayResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgRepayResponse;
                fromPartial(_: Partial<_35.MsgRepayResponse>): _35.MsgRepayResponse;
                fromAmino(_: _35.MsgRepayResponseAmino): _35.MsgRepayResponse;
                toAmino(_: _35.MsgRepayResponse): _35.MsgRepayResponseAmino;
                fromAminoMsg(object: _35.MsgRepayResponseAminoMsg): _35.MsgRepayResponse;
                fromProtoMsg(message: _35.MsgRepayResponseProtoMsg): _35.MsgRepayResponse;
                toProto(message: _35.MsgRepayResponse): Uint8Array;
                toProtoMsg(message: _35.MsgRepayResponse): _35.MsgRepayResponseProtoMsg;
            };
            MsgLiquidate: {
                typeUrl: string;
                encode(message: _35.MsgLiquidate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.MsgLiquidate;
                fromPartial(object: Partial<_35.MsgLiquidate>): _35.MsgLiquidate;
                fromAmino(object: _35.MsgLiquidateAmino): _35.MsgLiquidate;
                toAmino(message: _35.MsgLiquidate): _35.MsgLiquidateAmino;
                fromAminoMsg(object: _35.MsgLiquidateAminoMsg): _35.MsgLiquidate;
                fromProtoMsg(message: _35.MsgLiquidateProtoMsg): _35.MsgLiquidate;
                toProto(message: _35.MsgLiquidate): Uint8Array;
                toProtoMsg(message: _35.MsgLiquidate): _35.MsgLiquidateProtoMsg;
            };
            MsgLiquidateResponse: {
                typeUrl: string;
                encode(_: _35.MsgLiquidateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.MsgLiquidateResponse;
                fromPartial(_: Partial<_35.MsgLiquidateResponse>): _35.MsgLiquidateResponse;
                fromAmino(_: _35.MsgLiquidateResponseAmino): _35.MsgLiquidateResponse;
                toAmino(_: _35.MsgLiquidateResponse): _35.MsgLiquidateResponseAmino;
                fromAminoMsg(object: _35.MsgLiquidateResponseAminoMsg): _35.MsgLiquidateResponse;
                fromProtoMsg(message: _35.MsgLiquidateResponseProtoMsg): _35.MsgLiquidateResponse;
                toProto(message: _35.MsgLiquidateResponse): Uint8Array;
                toProtoMsg(message: _35.MsgLiquidateResponse): _35.MsgLiquidateResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _34.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryParamsRequest;
                fromPartial(_: Partial<_34.QueryParamsRequest>): _34.QueryParamsRequest;
                fromAmino(_: _34.QueryParamsRequestAmino): _34.QueryParamsRequest;
                toAmino(_: _34.QueryParamsRequest): _34.QueryParamsRequestAmino;
                fromAminoMsg(object: _34.QueryParamsRequestAminoMsg): _34.QueryParamsRequest;
                fromProtoMsg(message: _34.QueryParamsRequestProtoMsg): _34.QueryParamsRequest;
                toProto(message: _34.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryParamsRequest): _34.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _34.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryParamsResponse;
                fromPartial(object: Partial<_34.QueryParamsResponse>): _34.QueryParamsResponse;
                fromAmino(object: _34.QueryParamsResponseAmino): _34.QueryParamsResponse;
                toAmino(message: _34.QueryParamsResponse): _34.QueryParamsResponseAmino;
                fromAminoMsg(object: _34.QueryParamsResponseAminoMsg): _34.QueryParamsResponse;
                fromProtoMsg(message: _34.QueryParamsResponseProtoMsg): _34.QueryParamsResponse;
                toProto(message: _34.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryParamsResponse): _34.QueryParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(_: _34.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryAccountsRequest;
                fromPartial(_: Partial<_34.QueryAccountsRequest>): _34.QueryAccountsRequest;
                fromAmino(_: _34.QueryAccountsRequestAmino): _34.QueryAccountsRequest;
                toAmino(_: _34.QueryAccountsRequest): _34.QueryAccountsRequestAmino;
                fromAminoMsg(object: _34.QueryAccountsRequestAminoMsg): _34.QueryAccountsRequest;
                fromProtoMsg(message: _34.QueryAccountsRequestProtoMsg): _34.QueryAccountsRequest;
                toProto(message: _34.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryAccountsRequest): _34.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _34.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryAccountsResponse;
                fromPartial(object: Partial<_34.QueryAccountsResponse>): _34.QueryAccountsResponse;
                fromAmino(object: _34.QueryAccountsResponseAmino): _34.QueryAccountsResponse;
                toAmino(message: _34.QueryAccountsResponse): _34.QueryAccountsResponseAmino;
                fromAminoMsg(object: _34.QueryAccountsResponseAminoMsg): _34.QueryAccountsResponse;
                fromProtoMsg(message: _34.QueryAccountsResponseProtoMsg): _34.QueryAccountsResponse;
                toProto(message: _34.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryAccountsResponse): _34.QueryAccountsResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _34.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDepositsRequest;
                fromPartial(object: Partial<_34.QueryDepositsRequest>): _34.QueryDepositsRequest;
                fromAmino(object: _34.QueryDepositsRequestAmino): _34.QueryDepositsRequest;
                toAmino(message: _34.QueryDepositsRequest): _34.QueryDepositsRequestAmino;
                fromAminoMsg(object: _34.QueryDepositsRequestAminoMsg): _34.QueryDepositsRequest;
                fromProtoMsg(message: _34.QueryDepositsRequestProtoMsg): _34.QueryDepositsRequest;
                toProto(message: _34.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryDepositsRequest): _34.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _34.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDepositsResponse;
                fromPartial(object: Partial<_34.QueryDepositsResponse>): _34.QueryDepositsResponse;
                fromAmino(object: _34.QueryDepositsResponseAmino): _34.QueryDepositsResponse;
                toAmino(message: _34.QueryDepositsResponse): _34.QueryDepositsResponseAmino;
                fromAminoMsg(object: _34.QueryDepositsResponseAminoMsg): _34.QueryDepositsResponse;
                fromProtoMsg(message: _34.QueryDepositsResponseProtoMsg): _34.QueryDepositsResponse;
                toProto(message: _34.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDepositsResponse): _34.QueryDepositsResponseProtoMsg;
            };
            QueryUnsyncedDepositsRequest: {
                typeUrl: string;
                encode(message: _34.QueryUnsyncedDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryUnsyncedDepositsRequest;
                fromPartial(object: Partial<_34.QueryUnsyncedDepositsRequest>): _34.QueryUnsyncedDepositsRequest;
                fromAmino(object: _34.QueryUnsyncedDepositsRequestAmino): _34.QueryUnsyncedDepositsRequest;
                toAmino(message: _34.QueryUnsyncedDepositsRequest): _34.QueryUnsyncedDepositsRequestAmino;
                fromAminoMsg(object: _34.QueryUnsyncedDepositsRequestAminoMsg): _34.QueryUnsyncedDepositsRequest;
                fromProtoMsg(message: _34.QueryUnsyncedDepositsRequestProtoMsg): _34.QueryUnsyncedDepositsRequest;
                toProto(message: _34.QueryUnsyncedDepositsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryUnsyncedDepositsRequest): _34.QueryUnsyncedDepositsRequestProtoMsg;
            };
            QueryUnsyncedDepositsResponse: {
                typeUrl: string;
                encode(message: _34.QueryUnsyncedDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryUnsyncedDepositsResponse;
                fromPartial(object: Partial<_34.QueryUnsyncedDepositsResponse>): _34.QueryUnsyncedDepositsResponse;
                fromAmino(object: _34.QueryUnsyncedDepositsResponseAmino): _34.QueryUnsyncedDepositsResponse;
                toAmino(message: _34.QueryUnsyncedDepositsResponse): _34.QueryUnsyncedDepositsResponseAmino;
                fromAminoMsg(object: _34.QueryUnsyncedDepositsResponseAminoMsg): _34.QueryUnsyncedDepositsResponse;
                fromProtoMsg(message: _34.QueryUnsyncedDepositsResponseProtoMsg): _34.QueryUnsyncedDepositsResponse;
                toProto(message: _34.QueryUnsyncedDepositsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryUnsyncedDepositsResponse): _34.QueryUnsyncedDepositsResponseProtoMsg;
            };
            QueryTotalDepositedRequest: {
                typeUrl: string;
                encode(message: _34.QueryTotalDepositedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryTotalDepositedRequest;
                fromPartial(object: Partial<_34.QueryTotalDepositedRequest>): _34.QueryTotalDepositedRequest;
                fromAmino(object: _34.QueryTotalDepositedRequestAmino): _34.QueryTotalDepositedRequest;
                toAmino(message: _34.QueryTotalDepositedRequest): _34.QueryTotalDepositedRequestAmino;
                fromAminoMsg(object: _34.QueryTotalDepositedRequestAminoMsg): _34.QueryTotalDepositedRequest;
                fromProtoMsg(message: _34.QueryTotalDepositedRequestProtoMsg): _34.QueryTotalDepositedRequest;
                toProto(message: _34.QueryTotalDepositedRequest): Uint8Array;
                toProtoMsg(message: _34.QueryTotalDepositedRequest): _34.QueryTotalDepositedRequestProtoMsg;
            };
            QueryTotalDepositedResponse: {
                typeUrl: string;
                encode(message: _34.QueryTotalDepositedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryTotalDepositedResponse;
                fromPartial(object: Partial<_34.QueryTotalDepositedResponse>): _34.QueryTotalDepositedResponse;
                fromAmino(object: _34.QueryTotalDepositedResponseAmino): _34.QueryTotalDepositedResponse;
                toAmino(message: _34.QueryTotalDepositedResponse): _34.QueryTotalDepositedResponseAmino;
                fromAminoMsg(object: _34.QueryTotalDepositedResponseAminoMsg): _34.QueryTotalDepositedResponse;
                fromProtoMsg(message: _34.QueryTotalDepositedResponseProtoMsg): _34.QueryTotalDepositedResponse;
                toProto(message: _34.QueryTotalDepositedResponse): Uint8Array;
                toProtoMsg(message: _34.QueryTotalDepositedResponse): _34.QueryTotalDepositedResponseProtoMsg;
            };
            QueryBorrowsRequest: {
                typeUrl: string;
                encode(message: _34.QueryBorrowsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBorrowsRequest;
                fromPartial(object: Partial<_34.QueryBorrowsRequest>): _34.QueryBorrowsRequest;
                fromAmino(object: _34.QueryBorrowsRequestAmino): _34.QueryBorrowsRequest;
                toAmino(message: _34.QueryBorrowsRequest): _34.QueryBorrowsRequestAmino;
                fromAminoMsg(object: _34.QueryBorrowsRequestAminoMsg): _34.QueryBorrowsRequest;
                fromProtoMsg(message: _34.QueryBorrowsRequestProtoMsg): _34.QueryBorrowsRequest;
                toProto(message: _34.QueryBorrowsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryBorrowsRequest): _34.QueryBorrowsRequestProtoMsg;
            };
            QueryBorrowsResponse: {
                typeUrl: string;
                encode(message: _34.QueryBorrowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBorrowsResponse;
                fromPartial(object: Partial<_34.QueryBorrowsResponse>): _34.QueryBorrowsResponse;
                fromAmino(object: _34.QueryBorrowsResponseAmino): _34.QueryBorrowsResponse;
                toAmino(message: _34.QueryBorrowsResponse): _34.QueryBorrowsResponseAmino;
                fromAminoMsg(object: _34.QueryBorrowsResponseAminoMsg): _34.QueryBorrowsResponse;
                fromProtoMsg(message: _34.QueryBorrowsResponseProtoMsg): _34.QueryBorrowsResponse;
                toProto(message: _34.QueryBorrowsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryBorrowsResponse): _34.QueryBorrowsResponseProtoMsg;
            };
            QueryUnsyncedBorrowsRequest: {
                typeUrl: string;
                encode(message: _34.QueryUnsyncedBorrowsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryUnsyncedBorrowsRequest;
                fromPartial(object: Partial<_34.QueryUnsyncedBorrowsRequest>): _34.QueryUnsyncedBorrowsRequest;
                fromAmino(object: _34.QueryUnsyncedBorrowsRequestAmino): _34.QueryUnsyncedBorrowsRequest;
                toAmino(message: _34.QueryUnsyncedBorrowsRequest): _34.QueryUnsyncedBorrowsRequestAmino;
                fromAminoMsg(object: _34.QueryUnsyncedBorrowsRequestAminoMsg): _34.QueryUnsyncedBorrowsRequest;
                fromProtoMsg(message: _34.QueryUnsyncedBorrowsRequestProtoMsg): _34.QueryUnsyncedBorrowsRequest;
                toProto(message: _34.QueryUnsyncedBorrowsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryUnsyncedBorrowsRequest): _34.QueryUnsyncedBorrowsRequestProtoMsg;
            };
            QueryUnsyncedBorrowsResponse: {
                typeUrl: string;
                encode(message: _34.QueryUnsyncedBorrowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryUnsyncedBorrowsResponse;
                fromPartial(object: Partial<_34.QueryUnsyncedBorrowsResponse>): _34.QueryUnsyncedBorrowsResponse;
                fromAmino(object: _34.QueryUnsyncedBorrowsResponseAmino): _34.QueryUnsyncedBorrowsResponse;
                toAmino(message: _34.QueryUnsyncedBorrowsResponse): _34.QueryUnsyncedBorrowsResponseAmino;
                fromAminoMsg(object: _34.QueryUnsyncedBorrowsResponseAminoMsg): _34.QueryUnsyncedBorrowsResponse;
                fromProtoMsg(message: _34.QueryUnsyncedBorrowsResponseProtoMsg): _34.QueryUnsyncedBorrowsResponse;
                toProto(message: _34.QueryUnsyncedBorrowsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryUnsyncedBorrowsResponse): _34.QueryUnsyncedBorrowsResponseProtoMsg;
            };
            QueryTotalBorrowedRequest: {
                typeUrl: string;
                encode(message: _34.QueryTotalBorrowedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryTotalBorrowedRequest;
                fromPartial(object: Partial<_34.QueryTotalBorrowedRequest>): _34.QueryTotalBorrowedRequest;
                fromAmino(object: _34.QueryTotalBorrowedRequestAmino): _34.QueryTotalBorrowedRequest;
                toAmino(message: _34.QueryTotalBorrowedRequest): _34.QueryTotalBorrowedRequestAmino;
                fromAminoMsg(object: _34.QueryTotalBorrowedRequestAminoMsg): _34.QueryTotalBorrowedRequest;
                fromProtoMsg(message: _34.QueryTotalBorrowedRequestProtoMsg): _34.QueryTotalBorrowedRequest;
                toProto(message: _34.QueryTotalBorrowedRequest): Uint8Array;
                toProtoMsg(message: _34.QueryTotalBorrowedRequest): _34.QueryTotalBorrowedRequestProtoMsg;
            };
            QueryTotalBorrowedResponse: {
                typeUrl: string;
                encode(message: _34.QueryTotalBorrowedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryTotalBorrowedResponse;
                fromPartial(object: Partial<_34.QueryTotalBorrowedResponse>): _34.QueryTotalBorrowedResponse;
                fromAmino(object: _34.QueryTotalBorrowedResponseAmino): _34.QueryTotalBorrowedResponse;
                toAmino(message: _34.QueryTotalBorrowedResponse): _34.QueryTotalBorrowedResponseAmino;
                fromAminoMsg(object: _34.QueryTotalBorrowedResponseAminoMsg): _34.QueryTotalBorrowedResponse;
                fromProtoMsg(message: _34.QueryTotalBorrowedResponseProtoMsg): _34.QueryTotalBorrowedResponse;
                toProto(message: _34.QueryTotalBorrowedResponse): Uint8Array;
                toProtoMsg(message: _34.QueryTotalBorrowedResponse): _34.QueryTotalBorrowedResponseProtoMsg;
            };
            QueryInterestRateRequest: {
                typeUrl: string;
                encode(message: _34.QueryInterestRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryInterestRateRequest;
                fromPartial(object: Partial<_34.QueryInterestRateRequest>): _34.QueryInterestRateRequest;
                fromAmino(object: _34.QueryInterestRateRequestAmino): _34.QueryInterestRateRequest;
                toAmino(message: _34.QueryInterestRateRequest): _34.QueryInterestRateRequestAmino;
                fromAminoMsg(object: _34.QueryInterestRateRequestAminoMsg): _34.QueryInterestRateRequest;
                fromProtoMsg(message: _34.QueryInterestRateRequestProtoMsg): _34.QueryInterestRateRequest;
                toProto(message: _34.QueryInterestRateRequest): Uint8Array;
                toProtoMsg(message: _34.QueryInterestRateRequest): _34.QueryInterestRateRequestProtoMsg;
            };
            QueryInterestRateResponse: {
                typeUrl: string;
                encode(message: _34.QueryInterestRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryInterestRateResponse;
                fromPartial(object: Partial<_34.QueryInterestRateResponse>): _34.QueryInterestRateResponse;
                fromAmino(object: _34.QueryInterestRateResponseAmino): _34.QueryInterestRateResponse;
                toAmino(message: _34.QueryInterestRateResponse): _34.QueryInterestRateResponseAmino;
                fromAminoMsg(object: _34.QueryInterestRateResponseAminoMsg): _34.QueryInterestRateResponse;
                fromProtoMsg(message: _34.QueryInterestRateResponseProtoMsg): _34.QueryInterestRateResponse;
                toProto(message: _34.QueryInterestRateResponse): Uint8Array;
                toProtoMsg(message: _34.QueryInterestRateResponse): _34.QueryInterestRateResponseProtoMsg;
            };
            QueryReservesRequest: {
                typeUrl: string;
                encode(message: _34.QueryReservesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryReservesRequest;
                fromPartial(object: Partial<_34.QueryReservesRequest>): _34.QueryReservesRequest;
                fromAmino(object: _34.QueryReservesRequestAmino): _34.QueryReservesRequest;
                toAmino(message: _34.QueryReservesRequest): _34.QueryReservesRequestAmino;
                fromAminoMsg(object: _34.QueryReservesRequestAminoMsg): _34.QueryReservesRequest;
                fromProtoMsg(message: _34.QueryReservesRequestProtoMsg): _34.QueryReservesRequest;
                toProto(message: _34.QueryReservesRequest): Uint8Array;
                toProtoMsg(message: _34.QueryReservesRequest): _34.QueryReservesRequestProtoMsg;
            };
            QueryReservesResponse: {
                typeUrl: string;
                encode(message: _34.QueryReservesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryReservesResponse;
                fromPartial(object: Partial<_34.QueryReservesResponse>): _34.QueryReservesResponse;
                fromAmino(object: _34.QueryReservesResponseAmino): _34.QueryReservesResponse;
                toAmino(message: _34.QueryReservesResponse): _34.QueryReservesResponseAmino;
                fromAminoMsg(object: _34.QueryReservesResponseAminoMsg): _34.QueryReservesResponse;
                fromProtoMsg(message: _34.QueryReservesResponseProtoMsg): _34.QueryReservesResponse;
                toProto(message: _34.QueryReservesResponse): Uint8Array;
                toProtoMsg(message: _34.QueryReservesResponse): _34.QueryReservesResponseProtoMsg;
            };
            QueryInterestFactorsRequest: {
                typeUrl: string;
                encode(message: _34.QueryInterestFactorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryInterestFactorsRequest;
                fromPartial(object: Partial<_34.QueryInterestFactorsRequest>): _34.QueryInterestFactorsRequest;
                fromAmino(object: _34.QueryInterestFactorsRequestAmino): _34.QueryInterestFactorsRequest;
                toAmino(message: _34.QueryInterestFactorsRequest): _34.QueryInterestFactorsRequestAmino;
                fromAminoMsg(object: _34.QueryInterestFactorsRequestAminoMsg): _34.QueryInterestFactorsRequest;
                fromProtoMsg(message: _34.QueryInterestFactorsRequestProtoMsg): _34.QueryInterestFactorsRequest;
                toProto(message: _34.QueryInterestFactorsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryInterestFactorsRequest): _34.QueryInterestFactorsRequestProtoMsg;
            };
            QueryInterestFactorsResponse: {
                typeUrl: string;
                encode(message: _34.QueryInterestFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryInterestFactorsResponse;
                fromPartial(object: Partial<_34.QueryInterestFactorsResponse>): _34.QueryInterestFactorsResponse;
                fromAmino(object: _34.QueryInterestFactorsResponseAmino): _34.QueryInterestFactorsResponse;
                toAmino(message: _34.QueryInterestFactorsResponse): _34.QueryInterestFactorsResponseAmino;
                fromAminoMsg(object: _34.QueryInterestFactorsResponseAminoMsg): _34.QueryInterestFactorsResponse;
                fromProtoMsg(message: _34.QueryInterestFactorsResponseProtoMsg): _34.QueryInterestFactorsResponse;
                toProto(message: _34.QueryInterestFactorsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryInterestFactorsResponse): _34.QueryInterestFactorsResponseProtoMsg;
            };
            DepositResponse: {
                typeUrl: string;
                encode(message: _34.DepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.DepositResponse;
                fromPartial(object: Partial<_34.DepositResponse>): _34.DepositResponse;
                fromAmino(object: _34.DepositResponseAmino): _34.DepositResponse;
                toAmino(message: _34.DepositResponse): _34.DepositResponseAmino;
                fromAminoMsg(object: _34.DepositResponseAminoMsg): _34.DepositResponse;
                fromProtoMsg(message: _34.DepositResponseProtoMsg): _34.DepositResponse;
                toProto(message: _34.DepositResponse): Uint8Array;
                toProtoMsg(message: _34.DepositResponse): _34.DepositResponseProtoMsg;
            };
            SupplyInterestFactorResponse: {
                typeUrl: string;
                encode(message: _34.SupplyInterestFactorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.SupplyInterestFactorResponse;
                fromPartial(object: Partial<_34.SupplyInterestFactorResponse>): _34.SupplyInterestFactorResponse;
                fromAmino(object: _34.SupplyInterestFactorResponseAmino): _34.SupplyInterestFactorResponse;
                toAmino(message: _34.SupplyInterestFactorResponse): _34.SupplyInterestFactorResponseAmino;
                fromAminoMsg(object: _34.SupplyInterestFactorResponseAminoMsg): _34.SupplyInterestFactorResponse;
                fromProtoMsg(message: _34.SupplyInterestFactorResponseProtoMsg): _34.SupplyInterestFactorResponse;
                toProto(message: _34.SupplyInterestFactorResponse): Uint8Array;
                toProtoMsg(message: _34.SupplyInterestFactorResponse): _34.SupplyInterestFactorResponseProtoMsg;
            };
            BorrowResponse: {
                typeUrl: string;
                encode(message: _34.BorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.BorrowResponse;
                fromPartial(object: Partial<_34.BorrowResponse>): _34.BorrowResponse;
                fromAmino(object: _34.BorrowResponseAmino): _34.BorrowResponse;
                toAmino(message: _34.BorrowResponse): _34.BorrowResponseAmino;
                fromAminoMsg(object: _34.BorrowResponseAminoMsg): _34.BorrowResponse;
                fromProtoMsg(message: _34.BorrowResponseProtoMsg): _34.BorrowResponse;
                toProto(message: _34.BorrowResponse): Uint8Array;
                toProtoMsg(message: _34.BorrowResponse): _34.BorrowResponseProtoMsg;
            };
            BorrowInterestFactorResponse: {
                typeUrl: string;
                encode(message: _34.BorrowInterestFactorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.BorrowInterestFactorResponse;
                fromPartial(object: Partial<_34.BorrowInterestFactorResponse>): _34.BorrowInterestFactorResponse;
                fromAmino(object: _34.BorrowInterestFactorResponseAmino): _34.BorrowInterestFactorResponse;
                toAmino(message: _34.BorrowInterestFactorResponse): _34.BorrowInterestFactorResponseAmino;
                fromAminoMsg(object: _34.BorrowInterestFactorResponseAminoMsg): _34.BorrowInterestFactorResponse;
                fromProtoMsg(message: _34.BorrowInterestFactorResponseProtoMsg): _34.BorrowInterestFactorResponse;
                toProto(message: _34.BorrowInterestFactorResponse): Uint8Array;
                toProtoMsg(message: _34.BorrowInterestFactorResponse): _34.BorrowInterestFactorResponseProtoMsg;
            };
            MoneyMarketInterestRate: {
                typeUrl: string;
                encode(message: _34.MoneyMarketInterestRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MoneyMarketInterestRate;
                fromPartial(object: Partial<_34.MoneyMarketInterestRate>): _34.MoneyMarketInterestRate;
                fromAmino(object: _34.MoneyMarketInterestRateAmino): _34.MoneyMarketInterestRate;
                toAmino(message: _34.MoneyMarketInterestRate): _34.MoneyMarketInterestRateAmino;
                fromAminoMsg(object: _34.MoneyMarketInterestRateAminoMsg): _34.MoneyMarketInterestRate;
                fromProtoMsg(message: _34.MoneyMarketInterestRateProtoMsg): _34.MoneyMarketInterestRate;
                toProto(message: _34.MoneyMarketInterestRate): Uint8Array;
                toProtoMsg(message: _34.MoneyMarketInterestRate): _34.MoneyMarketInterestRateProtoMsg;
            };
            InterestFactor: {
                typeUrl: string;
                encode(message: _34.InterestFactor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.InterestFactor;
                fromPartial(object: Partial<_34.InterestFactor>): _34.InterestFactor;
                fromAmino(object: _34.InterestFactorAmino): _34.InterestFactor;
                toAmino(message: _34.InterestFactor): _34.InterestFactorAmino;
                fromAminoMsg(object: _34.InterestFactorAminoMsg): _34.InterestFactor;
                fromProtoMsg(message: _34.InterestFactorProtoMsg): _34.InterestFactor;
                toProto(message: _34.InterestFactor): Uint8Array;
                toProtoMsg(message: _34.InterestFactor): _34.InterestFactorProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _33.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Params;
                fromPartial(object: Partial<_33.Params>): _33.Params;
                fromAmino(object: _33.ParamsAmino): _33.Params;
                toAmino(message: _33.Params): _33.ParamsAmino;
                fromAminoMsg(object: _33.ParamsAminoMsg): _33.Params;
                fromProtoMsg(message: _33.ParamsProtoMsg): _33.Params;
                toProto(message: _33.Params): Uint8Array;
                toProtoMsg(message: _33.Params): _33.ParamsProtoMsg;
            };
            MoneyMarket: {
                typeUrl: string;
                encode(message: _33.MoneyMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MoneyMarket;
                fromPartial(object: Partial<_33.MoneyMarket>): _33.MoneyMarket;
                fromAmino(object: _33.MoneyMarketAmino): _33.MoneyMarket;
                toAmino(message: _33.MoneyMarket): _33.MoneyMarketAmino;
                fromAminoMsg(object: _33.MoneyMarketAminoMsg): _33.MoneyMarket;
                fromProtoMsg(message: _33.MoneyMarketProtoMsg): _33.MoneyMarket;
                toProto(message: _33.MoneyMarket): Uint8Array;
                toProtoMsg(message: _33.MoneyMarket): _33.MoneyMarketProtoMsg;
            };
            BorrowLimit: {
                typeUrl: string;
                encode(message: _33.BorrowLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.BorrowLimit;
                fromPartial(object: Partial<_33.BorrowLimit>): _33.BorrowLimit;
                fromAmino(object: _33.BorrowLimitAmino): _33.BorrowLimit;
                toAmino(message: _33.BorrowLimit): _33.BorrowLimitAmino;
                fromAminoMsg(object: _33.BorrowLimitAminoMsg): _33.BorrowLimit;
                fromProtoMsg(message: _33.BorrowLimitProtoMsg): _33.BorrowLimit;
                toProto(message: _33.BorrowLimit): Uint8Array;
                toProtoMsg(message: _33.BorrowLimit): _33.BorrowLimitProtoMsg;
            };
            InterestRateModel: {
                typeUrl: string;
                encode(message: _33.InterestRateModel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.InterestRateModel;
                fromPartial(object: Partial<_33.InterestRateModel>): _33.InterestRateModel;
                fromAmino(object: _33.InterestRateModelAmino): _33.InterestRateModel;
                toAmino(message: _33.InterestRateModel): _33.InterestRateModelAmino;
                fromAminoMsg(object: _33.InterestRateModelAminoMsg): _33.InterestRateModel;
                fromProtoMsg(message: _33.InterestRateModelProtoMsg): _33.InterestRateModel;
                toProto(message: _33.InterestRateModel): Uint8Array;
                toProtoMsg(message: _33.InterestRateModel): _33.InterestRateModelProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _33.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Deposit;
                fromPartial(object: Partial<_33.Deposit>): _33.Deposit;
                fromAmino(object: _33.DepositAmino): _33.Deposit;
                toAmino(message: _33.Deposit): _33.DepositAmino;
                fromAminoMsg(object: _33.DepositAminoMsg): _33.Deposit;
                fromProtoMsg(message: _33.DepositProtoMsg): _33.Deposit;
                toProto(message: _33.Deposit): Uint8Array;
                toProtoMsg(message: _33.Deposit): _33.DepositProtoMsg;
            };
            Borrow: {
                typeUrl: string;
                encode(message: _33.Borrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Borrow;
                fromPartial(object: Partial<_33.Borrow>): _33.Borrow;
                fromAmino(object: _33.BorrowAmino): _33.Borrow;
                toAmino(message: _33.Borrow): _33.BorrowAmino;
                fromAminoMsg(object: _33.BorrowAminoMsg): _33.Borrow;
                fromProtoMsg(message: _33.BorrowProtoMsg): _33.Borrow;
                toProto(message: _33.Borrow): Uint8Array;
                toProtoMsg(message: _33.Borrow): _33.BorrowProtoMsg;
            };
            SupplyInterestFactor: {
                typeUrl: string;
                encode(message: _33.SupplyInterestFactor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.SupplyInterestFactor;
                fromPartial(object: Partial<_33.SupplyInterestFactor>): _33.SupplyInterestFactor;
                fromAmino(object: _33.SupplyInterestFactorAmino): _33.SupplyInterestFactor;
                toAmino(message: _33.SupplyInterestFactor): _33.SupplyInterestFactorAmino;
                fromAminoMsg(object: _33.SupplyInterestFactorAminoMsg): _33.SupplyInterestFactor;
                fromProtoMsg(message: _33.SupplyInterestFactorProtoMsg): _33.SupplyInterestFactor;
                toProto(message: _33.SupplyInterestFactor): Uint8Array;
                toProtoMsg(message: _33.SupplyInterestFactor): _33.SupplyInterestFactorProtoMsg;
            };
            BorrowInterestFactor: {
                typeUrl: string;
                encode(message: _33.BorrowInterestFactor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.BorrowInterestFactor;
                fromPartial(object: Partial<_33.BorrowInterestFactor>): _33.BorrowInterestFactor;
                fromAmino(object: _33.BorrowInterestFactorAmino): _33.BorrowInterestFactor;
                toAmino(message: _33.BorrowInterestFactor): _33.BorrowInterestFactorAmino;
                fromAminoMsg(object: _33.BorrowInterestFactorAminoMsg): _33.BorrowInterestFactor;
                fromProtoMsg(message: _33.BorrowInterestFactorProtoMsg): _33.BorrowInterestFactor;
                toProto(message: _33.BorrowInterestFactor): Uint8Array;
                toProtoMsg(message: _33.BorrowInterestFactor): _33.BorrowInterestFactorProtoMsg;
            };
            CoinsProto: {
                typeUrl: string;
                encode(message: _33.CoinsProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.CoinsProto;
                fromPartial(object: Partial<_33.CoinsProto>): _33.CoinsProto;
                fromAmino(object: _33.CoinsProtoAmino): _33.CoinsProto;
                toAmino(message: _33.CoinsProto): _33.CoinsProtoAmino;
                fromAminoMsg(object: _33.CoinsProtoAminoMsg): _33.CoinsProto;
                fromProtoMsg(message: _33.CoinsProtoProtoMsg): _33.CoinsProto;
                toProto(message: _33.CoinsProto): Uint8Array;
                toProtoMsg(message: _33.CoinsProto): _33.CoinsProtoProtoMsg;
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
            GenesisAccumulationTime: {
                typeUrl: string;
                encode(message: _32.GenesisAccumulationTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisAccumulationTime;
                fromPartial(object: Partial<_32.GenesisAccumulationTime>): _32.GenesisAccumulationTime;
                fromAmino(object: _32.GenesisAccumulationTimeAmino): _32.GenesisAccumulationTime;
                toAmino(message: _32.GenesisAccumulationTime): _32.GenesisAccumulationTimeAmino;
                fromAminoMsg(object: _32.GenesisAccumulationTimeAminoMsg): _32.GenesisAccumulationTime;
                fromProtoMsg(message: _32.GenesisAccumulationTimeProtoMsg): _32.GenesisAccumulationTime;
                toProto(message: _32.GenesisAccumulationTime): Uint8Array;
                toProtoMsg(message: _32.GenesisAccumulationTime): _32.GenesisAccumulationTimeProtoMsg;
            };
        };
    }
    namespace incentive {
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                rewards(request: _40.QueryRewardsRequest): Promise<_40.QueryRewardsResponse>;
                rewardFactors(request?: _40.QueryRewardFactorsRequest): Promise<_40.QueryRewardFactorsResponse>;
                apy(request?: _40.QueryApyRequest): Promise<_40.QueryApyResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimUSDXMintingReward(value: _41.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimHardReward(value: _41.MsgClaimHardReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimDelegatorReward(value: _41.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSwapReward(value: _41.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSavingsReward(value: _41.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimEarnReward(value: _41.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimUSDXMintingReward(value: _41.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _41.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _41.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _41.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _41.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _41.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _41.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _41.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _41.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _41.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: _41.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: _41.MsgClaimEarnReward;
                    };
                };
                fromJSON: {
                    claimUSDXMintingReward(value: any): {
                        typeUrl: string;
                        value: _41.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: any): {
                        typeUrl: string;
                        value: _41.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _41.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: any): {
                        typeUrl: string;
                        value: _41.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: any): {
                        typeUrl: string;
                        value: _41.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: any): {
                        typeUrl: string;
                        value: _41.MsgClaimEarnReward;
                    };
                };
                fromPartial: {
                    claimUSDXMintingReward(value: _41.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _41.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _41.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _41.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _41.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _41.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _41.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _41.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _41.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _41.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: _41.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: _41.MsgClaimEarnReward;
                    };
                };
            };
            AminoConverter: {
                "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
                    aminoType: string;
                    toAmino: (message: _41.MsgClaimUSDXMintingReward) => _41.MsgClaimUSDXMintingRewardAmino;
                    fromAmino: (object: _41.MsgClaimUSDXMintingRewardAmino) => _41.MsgClaimUSDXMintingReward;
                };
                "/kava.incentive.v1beta1.MsgClaimHardReward": {
                    aminoType: string;
                    toAmino: (message: _41.MsgClaimHardReward) => _41.MsgClaimHardRewardAmino;
                    fromAmino: (object: _41.MsgClaimHardRewardAmino) => _41.MsgClaimHardReward;
                };
                "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _41.MsgClaimDelegatorReward) => _41.MsgClaimDelegatorRewardAmino;
                    fromAmino: (object: _41.MsgClaimDelegatorRewardAmino) => _41.MsgClaimDelegatorReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSwapReward": {
                    aminoType: string;
                    toAmino: (message: _41.MsgClaimSwapReward) => _41.MsgClaimSwapRewardAmino;
                    fromAmino: (object: _41.MsgClaimSwapRewardAmino) => _41.MsgClaimSwapReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
                    aminoType: string;
                    toAmino: (message: _41.MsgClaimSavingsReward) => _41.MsgClaimSavingsRewardAmino;
                    fromAmino: (object: _41.MsgClaimSavingsRewardAmino) => _41.MsgClaimSavingsReward;
                };
                "/kava.incentive.v1beta1.MsgClaimEarnReward": {
                    aminoType: string;
                    toAmino: (message: _41.MsgClaimEarnReward) => _41.MsgClaimEarnRewardAmino;
                    fromAmino: (object: _41.MsgClaimEarnRewardAmino) => _41.MsgClaimEarnReward;
                };
            };
            Selection: {
                typeUrl: string;
                encode(message: _41.Selection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Selection;
                fromPartial(object: Partial<_41.Selection>): _41.Selection;
                fromAmino(object: _41.SelectionAmino): _41.Selection;
                toAmino(message: _41.Selection): _41.SelectionAmino;
                fromAminoMsg(object: _41.SelectionAminoMsg): _41.Selection;
                fromProtoMsg(message: _41.SelectionProtoMsg): _41.Selection;
                toProto(message: _41.Selection): Uint8Array;
                toProtoMsg(message: _41.Selection): _41.SelectionProtoMsg;
            };
            MsgClaimUSDXMintingReward: {
                typeUrl: string;
                encode(message: _41.MsgClaimUSDXMintingReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgClaimUSDXMintingReward;
                fromPartial(object: Partial<_41.MsgClaimUSDXMintingReward>): _41.MsgClaimUSDXMintingReward;
                fromAmino(object: _41.MsgClaimUSDXMintingRewardAmino): _41.MsgClaimUSDXMintingReward;
                toAmino(message: _41.MsgClaimUSDXMintingReward): _41.MsgClaimUSDXMintingRewardAmino;
                fromAminoMsg(object: _41.MsgClaimUSDXMintingRewardAminoMsg): _41.MsgClaimUSDXMintingReward;
                fromProtoMsg(message: _41.MsgClaimUSDXMintingRewardProtoMsg): _41.MsgClaimUSDXMintingReward;
                toProto(message: _41.MsgClaimUSDXMintingReward): Uint8Array;
                toProtoMsg(message: _41.MsgClaimUSDXMintingReward): _41.MsgClaimUSDXMintingRewardProtoMsg;
            };
            MsgClaimUSDXMintingRewardResponse: {
                typeUrl: string;
                encode(_: _41.MsgClaimUSDXMintingRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgClaimUSDXMintingRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimUSDXMintingRewardResponse>): _41.MsgClaimUSDXMintingRewardResponse;
                fromAmino(_: _41.MsgClaimUSDXMintingRewardResponseAmino): _41.MsgClaimUSDXMintingRewardResponse;
                toAmino(_: _41.MsgClaimUSDXMintingRewardResponse): _41.MsgClaimUSDXMintingRewardResponseAmino;
                fromAminoMsg(object: _41.MsgClaimUSDXMintingRewardResponseAminoMsg): _41.MsgClaimUSDXMintingRewardResponse;
                fromProtoMsg(message: _41.MsgClaimUSDXMintingRewardResponseProtoMsg): _41.MsgClaimUSDXMintingRewardResponse;
                toProto(message: _41.MsgClaimUSDXMintingRewardResponse): Uint8Array;
                toProtoMsg(message: _41.MsgClaimUSDXMintingRewardResponse): _41.MsgClaimUSDXMintingRewardResponseProtoMsg;
            };
            MsgClaimHardReward: {
                typeUrl: string;
                encode(message: _41.MsgClaimHardReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgClaimHardReward;
                fromPartial(object: Partial<_41.MsgClaimHardReward>): _41.MsgClaimHardReward;
                fromAmino(object: _41.MsgClaimHardRewardAmino): _41.MsgClaimHardReward;
                toAmino(message: _41.MsgClaimHardReward): _41.MsgClaimHardRewardAmino;
                fromAminoMsg(object: _41.MsgClaimHardRewardAminoMsg): _41.MsgClaimHardReward;
                fromProtoMsg(message: _41.MsgClaimHardRewardProtoMsg): _41.MsgClaimHardReward;
                toProto(message: _41.MsgClaimHardReward): Uint8Array;
                toProtoMsg(message: _41.MsgClaimHardReward): _41.MsgClaimHardRewardProtoMsg;
            };
            MsgClaimHardRewardResponse: {
                typeUrl: string;
                encode(_: _41.MsgClaimHardRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgClaimHardRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimHardRewardResponse>): _41.MsgClaimHardRewardResponse;
                fromAmino(_: _41.MsgClaimHardRewardResponseAmino): _41.MsgClaimHardRewardResponse;
                toAmino(_: _41.MsgClaimHardRewardResponse): _41.MsgClaimHardRewardResponseAmino;
                fromAminoMsg(object: _41.MsgClaimHardRewardResponseAminoMsg): _41.MsgClaimHardRewardResponse;
                fromProtoMsg(message: _41.MsgClaimHardRewardResponseProtoMsg): _41.MsgClaimHardRewardResponse;
                toProto(message: _41.MsgClaimHardRewardResponse): Uint8Array;
                toProtoMsg(message: _41.MsgClaimHardRewardResponse): _41.MsgClaimHardRewardResponseProtoMsg;
            };
            MsgClaimDelegatorReward: {
                typeUrl: string;
                encode(message: _41.MsgClaimDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgClaimDelegatorReward;
                fromPartial(object: Partial<_41.MsgClaimDelegatorReward>): _41.MsgClaimDelegatorReward;
                fromAmino(object: _41.MsgClaimDelegatorRewardAmino): _41.MsgClaimDelegatorReward;
                toAmino(message: _41.MsgClaimDelegatorReward): _41.MsgClaimDelegatorRewardAmino;
                fromAminoMsg(object: _41.MsgClaimDelegatorRewardAminoMsg): _41.MsgClaimDelegatorReward;
                fromProtoMsg(message: _41.MsgClaimDelegatorRewardProtoMsg): _41.MsgClaimDelegatorReward;
                toProto(message: _41.MsgClaimDelegatorReward): Uint8Array;
                toProtoMsg(message: _41.MsgClaimDelegatorReward): _41.MsgClaimDelegatorRewardProtoMsg;
            };
            MsgClaimDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _41.MsgClaimDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgClaimDelegatorRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimDelegatorRewardResponse>): _41.MsgClaimDelegatorRewardResponse;
                fromAmino(_: _41.MsgClaimDelegatorRewardResponseAmino): _41.MsgClaimDelegatorRewardResponse;
                toAmino(_: _41.MsgClaimDelegatorRewardResponse): _41.MsgClaimDelegatorRewardResponseAmino;
                fromAminoMsg(object: _41.MsgClaimDelegatorRewardResponseAminoMsg): _41.MsgClaimDelegatorRewardResponse;
                fromProtoMsg(message: _41.MsgClaimDelegatorRewardResponseProtoMsg): _41.MsgClaimDelegatorRewardResponse;
                toProto(message: _41.MsgClaimDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _41.MsgClaimDelegatorRewardResponse): _41.MsgClaimDelegatorRewardResponseProtoMsg;
            };
            MsgClaimSwapReward: {
                typeUrl: string;
                encode(message: _41.MsgClaimSwapReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgClaimSwapReward;
                fromPartial(object: Partial<_41.MsgClaimSwapReward>): _41.MsgClaimSwapReward;
                fromAmino(object: _41.MsgClaimSwapRewardAmino): _41.MsgClaimSwapReward;
                toAmino(message: _41.MsgClaimSwapReward): _41.MsgClaimSwapRewardAmino;
                fromAminoMsg(object: _41.MsgClaimSwapRewardAminoMsg): _41.MsgClaimSwapReward;
                fromProtoMsg(message: _41.MsgClaimSwapRewardProtoMsg): _41.MsgClaimSwapReward;
                toProto(message: _41.MsgClaimSwapReward): Uint8Array;
                toProtoMsg(message: _41.MsgClaimSwapReward): _41.MsgClaimSwapRewardProtoMsg;
            };
            MsgClaimSwapRewardResponse: {
                typeUrl: string;
                encode(_: _41.MsgClaimSwapRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgClaimSwapRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimSwapRewardResponse>): _41.MsgClaimSwapRewardResponse;
                fromAmino(_: _41.MsgClaimSwapRewardResponseAmino): _41.MsgClaimSwapRewardResponse;
                toAmino(_: _41.MsgClaimSwapRewardResponse): _41.MsgClaimSwapRewardResponseAmino;
                fromAminoMsg(object: _41.MsgClaimSwapRewardResponseAminoMsg): _41.MsgClaimSwapRewardResponse;
                fromProtoMsg(message: _41.MsgClaimSwapRewardResponseProtoMsg): _41.MsgClaimSwapRewardResponse;
                toProto(message: _41.MsgClaimSwapRewardResponse): Uint8Array;
                toProtoMsg(message: _41.MsgClaimSwapRewardResponse): _41.MsgClaimSwapRewardResponseProtoMsg;
            };
            MsgClaimSavingsReward: {
                typeUrl: string;
                encode(message: _41.MsgClaimSavingsReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgClaimSavingsReward;
                fromPartial(object: Partial<_41.MsgClaimSavingsReward>): _41.MsgClaimSavingsReward;
                fromAmino(object: _41.MsgClaimSavingsRewardAmino): _41.MsgClaimSavingsReward;
                toAmino(message: _41.MsgClaimSavingsReward): _41.MsgClaimSavingsRewardAmino;
                fromAminoMsg(object: _41.MsgClaimSavingsRewardAminoMsg): _41.MsgClaimSavingsReward;
                fromProtoMsg(message: _41.MsgClaimSavingsRewardProtoMsg): _41.MsgClaimSavingsReward;
                toProto(message: _41.MsgClaimSavingsReward): Uint8Array;
                toProtoMsg(message: _41.MsgClaimSavingsReward): _41.MsgClaimSavingsRewardProtoMsg;
            };
            MsgClaimSavingsRewardResponse: {
                typeUrl: string;
                encode(_: _41.MsgClaimSavingsRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgClaimSavingsRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimSavingsRewardResponse>): _41.MsgClaimSavingsRewardResponse;
                fromAmino(_: _41.MsgClaimSavingsRewardResponseAmino): _41.MsgClaimSavingsRewardResponse;
                toAmino(_: _41.MsgClaimSavingsRewardResponse): _41.MsgClaimSavingsRewardResponseAmino;
                fromAminoMsg(object: _41.MsgClaimSavingsRewardResponseAminoMsg): _41.MsgClaimSavingsRewardResponse;
                fromProtoMsg(message: _41.MsgClaimSavingsRewardResponseProtoMsg): _41.MsgClaimSavingsRewardResponse;
                toProto(message: _41.MsgClaimSavingsRewardResponse): Uint8Array;
                toProtoMsg(message: _41.MsgClaimSavingsRewardResponse): _41.MsgClaimSavingsRewardResponseProtoMsg;
            };
            MsgClaimEarnReward: {
                typeUrl: string;
                encode(message: _41.MsgClaimEarnReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgClaimEarnReward;
                fromPartial(object: Partial<_41.MsgClaimEarnReward>): _41.MsgClaimEarnReward;
                fromAmino(object: _41.MsgClaimEarnRewardAmino): _41.MsgClaimEarnReward;
                toAmino(message: _41.MsgClaimEarnReward): _41.MsgClaimEarnRewardAmino;
                fromAminoMsg(object: _41.MsgClaimEarnRewardAminoMsg): _41.MsgClaimEarnReward;
                fromProtoMsg(message: _41.MsgClaimEarnRewardProtoMsg): _41.MsgClaimEarnReward;
                toProto(message: _41.MsgClaimEarnReward): Uint8Array;
                toProtoMsg(message: _41.MsgClaimEarnReward): _41.MsgClaimEarnRewardProtoMsg;
            };
            MsgClaimEarnRewardResponse: {
                typeUrl: string;
                encode(_: _41.MsgClaimEarnRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgClaimEarnRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimEarnRewardResponse>): _41.MsgClaimEarnRewardResponse;
                fromAmino(_: _41.MsgClaimEarnRewardResponseAmino): _41.MsgClaimEarnRewardResponse;
                toAmino(_: _41.MsgClaimEarnRewardResponse): _41.MsgClaimEarnRewardResponseAmino;
                fromAminoMsg(object: _41.MsgClaimEarnRewardResponseAminoMsg): _41.MsgClaimEarnRewardResponse;
                fromProtoMsg(message: _41.MsgClaimEarnRewardResponseProtoMsg): _41.MsgClaimEarnRewardResponse;
                toProto(message: _41.MsgClaimEarnRewardResponse): Uint8Array;
                toProtoMsg(message: _41.MsgClaimEarnRewardResponse): _41.MsgClaimEarnRewardResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _40.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                fromProtoMsg(message: _40.QueryParamsRequestProtoMsg): _40.QueryParamsRequest;
                toProto(message: _40.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _40.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
                fromAmino(object: _40.QueryParamsResponseAmino): _40.QueryParamsResponse;
                toAmino(message: _40.QueryParamsResponse): _40.QueryParamsResponseAmino;
                fromAminoMsg(object: _40.QueryParamsResponseAminoMsg): _40.QueryParamsResponse;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
            QueryRewardsRequest: {
                typeUrl: string;
                encode(message: _40.QueryRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryRewardsRequest;
                fromPartial(object: Partial<_40.QueryRewardsRequest>): _40.QueryRewardsRequest;
                fromAmino(object: _40.QueryRewardsRequestAmino): _40.QueryRewardsRequest;
                toAmino(message: _40.QueryRewardsRequest): _40.QueryRewardsRequestAmino;
                fromAminoMsg(object: _40.QueryRewardsRequestAminoMsg): _40.QueryRewardsRequest;
                fromProtoMsg(message: _40.QueryRewardsRequestProtoMsg): _40.QueryRewardsRequest;
                toProto(message: _40.QueryRewardsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryRewardsRequest): _40.QueryRewardsRequestProtoMsg;
            };
            QueryRewardsResponse: {
                typeUrl: string;
                encode(message: _40.QueryRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryRewardsResponse;
                fromPartial(object: Partial<_40.QueryRewardsResponse>): _40.QueryRewardsResponse;
                fromAmino(object: _40.QueryRewardsResponseAmino): _40.QueryRewardsResponse;
                toAmino(message: _40.QueryRewardsResponse): _40.QueryRewardsResponseAmino;
                fromAminoMsg(object: _40.QueryRewardsResponseAminoMsg): _40.QueryRewardsResponse;
                fromProtoMsg(message: _40.QueryRewardsResponseProtoMsg): _40.QueryRewardsResponse;
                toProto(message: _40.QueryRewardsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryRewardsResponse): _40.QueryRewardsResponseProtoMsg;
            };
            QueryRewardFactorsRequest: {
                typeUrl: string;
                encode(_: _40.QueryRewardFactorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryRewardFactorsRequest;
                fromPartial(_: Partial<_40.QueryRewardFactorsRequest>): _40.QueryRewardFactorsRequest;
                fromAmino(_: _40.QueryRewardFactorsRequestAmino): _40.QueryRewardFactorsRequest;
                toAmino(_: _40.QueryRewardFactorsRequest): _40.QueryRewardFactorsRequestAmino;
                fromAminoMsg(object: _40.QueryRewardFactorsRequestAminoMsg): _40.QueryRewardFactorsRequest;
                fromProtoMsg(message: _40.QueryRewardFactorsRequestProtoMsg): _40.QueryRewardFactorsRequest;
                toProto(message: _40.QueryRewardFactorsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryRewardFactorsRequest): _40.QueryRewardFactorsRequestProtoMsg;
            };
            QueryRewardFactorsResponse: {
                typeUrl: string;
                encode(message: _40.QueryRewardFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryRewardFactorsResponse;
                fromPartial(object: Partial<_40.QueryRewardFactorsResponse>): _40.QueryRewardFactorsResponse;
                fromAmino(object: _40.QueryRewardFactorsResponseAmino): _40.QueryRewardFactorsResponse;
                toAmino(message: _40.QueryRewardFactorsResponse): _40.QueryRewardFactorsResponseAmino;
                fromAminoMsg(object: _40.QueryRewardFactorsResponseAminoMsg): _40.QueryRewardFactorsResponse;
                fromProtoMsg(message: _40.QueryRewardFactorsResponseProtoMsg): _40.QueryRewardFactorsResponse;
                toProto(message: _40.QueryRewardFactorsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryRewardFactorsResponse): _40.QueryRewardFactorsResponseProtoMsg;
            };
            QueryApyRequest: {
                typeUrl: string;
                encode(_: _40.QueryApyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryApyRequest;
                fromPartial(_: Partial<_40.QueryApyRequest>): _40.QueryApyRequest;
                fromAmino(_: _40.QueryApyRequestAmino): _40.QueryApyRequest;
                toAmino(_: _40.QueryApyRequest): _40.QueryApyRequestAmino;
                fromAminoMsg(object: _40.QueryApyRequestAminoMsg): _40.QueryApyRequest;
                fromProtoMsg(message: _40.QueryApyRequestProtoMsg): _40.QueryApyRequest;
                toProto(message: _40.QueryApyRequest): Uint8Array;
                toProtoMsg(message: _40.QueryApyRequest): _40.QueryApyRequestProtoMsg;
            };
            QueryApyResponse: {
                typeUrl: string;
                encode(message: _40.QueryApyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryApyResponse;
                fromPartial(object: Partial<_40.QueryApyResponse>): _40.QueryApyResponse;
                fromAmino(object: _40.QueryApyResponseAmino): _40.QueryApyResponse;
                toAmino(message: _40.QueryApyResponse): _40.QueryApyResponseAmino;
                fromAminoMsg(object: _40.QueryApyResponseAminoMsg): _40.QueryApyResponse;
                fromProtoMsg(message: _40.QueryApyResponseProtoMsg): _40.QueryApyResponse;
                toProto(message: _40.QueryApyResponse): Uint8Array;
                toProtoMsg(message: _40.QueryApyResponse): _40.QueryApyResponseProtoMsg;
            };
            RewardPeriod: {
                typeUrl: string;
                encode(message: _39.RewardPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.RewardPeriod;
                fromPartial(object: Partial<_39.RewardPeriod>): _39.RewardPeriod;
                fromAmino(object: _39.RewardPeriodAmino): _39.RewardPeriod;
                toAmino(message: _39.RewardPeriod): _39.RewardPeriodAmino;
                fromAminoMsg(object: _39.RewardPeriodAminoMsg): _39.RewardPeriod;
                fromProtoMsg(message: _39.RewardPeriodProtoMsg): _39.RewardPeriod;
                toProto(message: _39.RewardPeriod): Uint8Array;
                toProtoMsg(message: _39.RewardPeriod): _39.RewardPeriodProtoMsg;
            };
            MultiRewardPeriod: {
                typeUrl: string;
                encode(message: _39.MultiRewardPeriod, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MultiRewardPeriod;
                fromPartial(object: Partial<_39.MultiRewardPeriod>): _39.MultiRewardPeriod;
                fromAmino(object: _39.MultiRewardPeriodAmino): _39.MultiRewardPeriod;
                toAmino(message: _39.MultiRewardPeriod): _39.MultiRewardPeriodAmino;
                fromAminoMsg(object: _39.MultiRewardPeriodAminoMsg): _39.MultiRewardPeriod;
                fromProtoMsg(message: _39.MultiRewardPeriodProtoMsg): _39.MultiRewardPeriod;
                toProto(message: _39.MultiRewardPeriod): Uint8Array;
                toProtoMsg(message: _39.MultiRewardPeriod): _39.MultiRewardPeriodProtoMsg;
            };
            Multiplier: {
                typeUrl: string;
                encode(message: _39.Multiplier, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Multiplier;
                fromPartial(object: Partial<_39.Multiplier>): _39.Multiplier;
                fromAmino(object: _39.MultiplierAmino): _39.Multiplier;
                toAmino(message: _39.Multiplier): _39.MultiplierAmino;
                fromAminoMsg(object: _39.MultiplierAminoMsg): _39.Multiplier;
                fromProtoMsg(message: _39.MultiplierProtoMsg): _39.Multiplier;
                toProto(message: _39.Multiplier): Uint8Array;
                toProtoMsg(message: _39.Multiplier): _39.MultiplierProtoMsg;
            };
            MultipliersPerDenom: {
                typeUrl: string;
                encode(message: _39.MultipliersPerDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.MultipliersPerDenom;
                fromPartial(object: Partial<_39.MultipliersPerDenom>): _39.MultipliersPerDenom;
                fromAmino(object: _39.MultipliersPerDenomAmino): _39.MultipliersPerDenom;
                toAmino(message: _39.MultipliersPerDenom): _39.MultipliersPerDenomAmino;
                fromAminoMsg(object: _39.MultipliersPerDenomAminoMsg): _39.MultipliersPerDenom;
                fromProtoMsg(message: _39.MultipliersPerDenomProtoMsg): _39.MultipliersPerDenom;
                toProto(message: _39.MultipliersPerDenom): Uint8Array;
                toProtoMsg(message: _39.MultipliersPerDenom): _39.MultipliersPerDenomProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _39.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            AccumulationTime: {
                typeUrl: string;
                encode(message: _38.AccumulationTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.AccumulationTime;
                fromPartial(object: Partial<_38.AccumulationTime>): _38.AccumulationTime;
                fromAmino(object: _38.AccumulationTimeAmino): _38.AccumulationTime;
                toAmino(message: _38.AccumulationTime): _38.AccumulationTimeAmino;
                fromAminoMsg(object: _38.AccumulationTimeAminoMsg): _38.AccumulationTime;
                fromProtoMsg(message: _38.AccumulationTimeProtoMsg): _38.AccumulationTime;
                toProto(message: _38.AccumulationTime): Uint8Array;
                toProtoMsg(message: _38.AccumulationTime): _38.AccumulationTimeProtoMsg;
            };
            GenesisRewardState: {
                typeUrl: string;
                encode(message: _38.GenesisRewardState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisRewardState;
                fromPartial(object: Partial<_38.GenesisRewardState>): _38.GenesisRewardState;
                fromAmino(object: _38.GenesisRewardStateAmino): _38.GenesisRewardState;
                toAmino(message: _38.GenesisRewardState): _38.GenesisRewardStateAmino;
                fromAminoMsg(object: _38.GenesisRewardStateAminoMsg): _38.GenesisRewardState;
                fromProtoMsg(message: _38.GenesisRewardStateProtoMsg): _38.GenesisRewardState;
                toProto(message: _38.GenesisRewardState): Uint8Array;
                toProtoMsg(message: _38.GenesisRewardState): _38.GenesisRewardStateProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
            BaseClaim: {
                typeUrl: string;
                encode(message: _37.BaseClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.BaseClaim;
                fromPartial(object: Partial<_37.BaseClaim>): _37.BaseClaim;
                fromAmino(object: _37.BaseClaimAmino): _37.BaseClaim;
                toAmino(message: _37.BaseClaim): _37.BaseClaimAmino;
                fromAminoMsg(object: _37.BaseClaimAminoMsg): _37.BaseClaim;
                fromProtoMsg(message: _37.BaseClaimProtoMsg): _37.BaseClaim;
                toProto(message: _37.BaseClaim): Uint8Array;
                toProtoMsg(message: _37.BaseClaim): _37.BaseClaimProtoMsg;
            };
            BaseMultiClaim: {
                typeUrl: string;
                encode(message: _37.BaseMultiClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.BaseMultiClaim;
                fromPartial(object: Partial<_37.BaseMultiClaim>): _37.BaseMultiClaim;
                fromAmino(object: _37.BaseMultiClaimAmino): _37.BaseMultiClaim;
                toAmino(message: _37.BaseMultiClaim): _37.BaseMultiClaimAmino;
                fromAminoMsg(object: _37.BaseMultiClaimAminoMsg): _37.BaseMultiClaim;
                fromProtoMsg(message: _37.BaseMultiClaimProtoMsg): _37.BaseMultiClaim;
                toProto(message: _37.BaseMultiClaim): Uint8Array;
                toProtoMsg(message: _37.BaseMultiClaim): _37.BaseMultiClaimProtoMsg;
            };
            RewardIndex: {
                typeUrl: string;
                encode(message: _37.RewardIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.RewardIndex;
                fromPartial(object: Partial<_37.RewardIndex>): _37.RewardIndex;
                fromAmino(object: _37.RewardIndexAmino): _37.RewardIndex;
                toAmino(message: _37.RewardIndex): _37.RewardIndexAmino;
                fromAminoMsg(object: _37.RewardIndexAminoMsg): _37.RewardIndex;
                fromProtoMsg(message: _37.RewardIndexProtoMsg): _37.RewardIndex;
                toProto(message: _37.RewardIndex): Uint8Array;
                toProtoMsg(message: _37.RewardIndex): _37.RewardIndexProtoMsg;
            };
            RewardIndexesProto: {
                typeUrl: string;
                encode(message: _37.RewardIndexesProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.RewardIndexesProto;
                fromPartial(object: Partial<_37.RewardIndexesProto>): _37.RewardIndexesProto;
                fromAmino(object: _37.RewardIndexesProtoAmino): _37.RewardIndexesProto;
                toAmino(message: _37.RewardIndexesProto): _37.RewardIndexesProtoAmino;
                fromAminoMsg(object: _37.RewardIndexesProtoAminoMsg): _37.RewardIndexesProto;
                fromProtoMsg(message: _37.RewardIndexesProtoProtoMsg): _37.RewardIndexesProto;
                toProto(message: _37.RewardIndexesProto): Uint8Array;
                toProtoMsg(message: _37.RewardIndexesProto): _37.RewardIndexesProtoProtoMsg;
            };
            MultiRewardIndex: {
                typeUrl: string;
                encode(message: _37.MultiRewardIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MultiRewardIndex;
                fromPartial(object: Partial<_37.MultiRewardIndex>): _37.MultiRewardIndex;
                fromAmino(object: _37.MultiRewardIndexAmino): _37.MultiRewardIndex;
                toAmino(message: _37.MultiRewardIndex): _37.MultiRewardIndexAmino;
                fromAminoMsg(object: _37.MultiRewardIndexAminoMsg): _37.MultiRewardIndex;
                fromProtoMsg(message: _37.MultiRewardIndexProtoMsg): _37.MultiRewardIndex;
                toProto(message: _37.MultiRewardIndex): Uint8Array;
                toProtoMsg(message: _37.MultiRewardIndex): _37.MultiRewardIndexProtoMsg;
            };
            MultiRewardIndexesProto: {
                typeUrl: string;
                encode(message: _37.MultiRewardIndexesProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.MultiRewardIndexesProto;
                fromPartial(object: Partial<_37.MultiRewardIndexesProto>): _37.MultiRewardIndexesProto;
                fromAmino(object: _37.MultiRewardIndexesProtoAmino): _37.MultiRewardIndexesProto;
                toAmino(message: _37.MultiRewardIndexesProto): _37.MultiRewardIndexesProtoAmino;
                fromAminoMsg(object: _37.MultiRewardIndexesProtoAminoMsg): _37.MultiRewardIndexesProto;
                fromProtoMsg(message: _37.MultiRewardIndexesProtoProtoMsg): _37.MultiRewardIndexesProto;
                toProto(message: _37.MultiRewardIndexesProto): Uint8Array;
                toProtoMsg(message: _37.MultiRewardIndexesProto): _37.MultiRewardIndexesProtoProtoMsg;
            };
            USDXMintingClaim: {
                typeUrl: string;
                encode(message: _37.USDXMintingClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.USDXMintingClaim;
                fromPartial(object: Partial<_37.USDXMintingClaim>): _37.USDXMintingClaim;
                fromAmino(object: _37.USDXMintingClaimAmino): _37.USDXMintingClaim;
                toAmino(message: _37.USDXMintingClaim): _37.USDXMintingClaimAmino;
                fromAminoMsg(object: _37.USDXMintingClaimAminoMsg): _37.USDXMintingClaim;
                fromProtoMsg(message: _37.USDXMintingClaimProtoMsg): _37.USDXMintingClaim;
                toProto(message: _37.USDXMintingClaim): Uint8Array;
                toProtoMsg(message: _37.USDXMintingClaim): _37.USDXMintingClaimProtoMsg;
            };
            HardLiquidityProviderClaim: {
                typeUrl: string;
                encode(message: _37.HardLiquidityProviderClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.HardLiquidityProviderClaim;
                fromPartial(object: Partial<_37.HardLiquidityProviderClaim>): _37.HardLiquidityProviderClaim;
                fromAmino(object: _37.HardLiquidityProviderClaimAmino): _37.HardLiquidityProviderClaim;
                toAmino(message: _37.HardLiquidityProviderClaim): _37.HardLiquidityProviderClaimAmino;
                fromAminoMsg(object: _37.HardLiquidityProviderClaimAminoMsg): _37.HardLiquidityProviderClaim;
                fromProtoMsg(message: _37.HardLiquidityProviderClaimProtoMsg): _37.HardLiquidityProviderClaim;
                toProto(message: _37.HardLiquidityProviderClaim): Uint8Array;
                toProtoMsg(message: _37.HardLiquidityProviderClaim): _37.HardLiquidityProviderClaimProtoMsg;
            };
            DelegatorClaim: {
                typeUrl: string;
                encode(message: _37.DelegatorClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.DelegatorClaim;
                fromPartial(object: Partial<_37.DelegatorClaim>): _37.DelegatorClaim;
                fromAmino(object: _37.DelegatorClaimAmino): _37.DelegatorClaim;
                toAmino(message: _37.DelegatorClaim): _37.DelegatorClaimAmino;
                fromAminoMsg(object: _37.DelegatorClaimAminoMsg): _37.DelegatorClaim;
                fromProtoMsg(message: _37.DelegatorClaimProtoMsg): _37.DelegatorClaim;
                toProto(message: _37.DelegatorClaim): Uint8Array;
                toProtoMsg(message: _37.DelegatorClaim): _37.DelegatorClaimProtoMsg;
            };
            SwapClaim: {
                typeUrl: string;
                encode(message: _37.SwapClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.SwapClaim;
                fromPartial(object: Partial<_37.SwapClaim>): _37.SwapClaim;
                fromAmino(object: _37.SwapClaimAmino): _37.SwapClaim;
                toAmino(message: _37.SwapClaim): _37.SwapClaimAmino;
                fromAminoMsg(object: _37.SwapClaimAminoMsg): _37.SwapClaim;
                fromProtoMsg(message: _37.SwapClaimProtoMsg): _37.SwapClaim;
                toProto(message: _37.SwapClaim): Uint8Array;
                toProtoMsg(message: _37.SwapClaim): _37.SwapClaimProtoMsg;
            };
            SavingsClaim: {
                typeUrl: string;
                encode(message: _37.SavingsClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.SavingsClaim;
                fromPartial(object: Partial<_37.SavingsClaim>): _37.SavingsClaim;
                fromAmino(object: _37.SavingsClaimAmino): _37.SavingsClaim;
                toAmino(message: _37.SavingsClaim): _37.SavingsClaimAmino;
                fromAminoMsg(object: _37.SavingsClaimAminoMsg): _37.SavingsClaim;
                fromProtoMsg(message: _37.SavingsClaimProtoMsg): _37.SavingsClaim;
                toProto(message: _37.SavingsClaim): Uint8Array;
                toProtoMsg(message: _37.SavingsClaim): _37.SavingsClaimProtoMsg;
            };
            EarnClaim: {
                typeUrl: string;
                encode(message: _37.EarnClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EarnClaim;
                fromPartial(object: Partial<_37.EarnClaim>): _37.EarnClaim;
                fromAmino(object: _37.EarnClaimAmino): _37.EarnClaim;
                toAmino(message: _37.EarnClaim): _37.EarnClaimAmino;
                fromAminoMsg(object: _37.EarnClaimAminoMsg): _37.EarnClaim;
                fromProtoMsg(message: _37.EarnClaimProtoMsg): _37.EarnClaim;
                toProto(message: _37.EarnClaim): Uint8Array;
                toProtoMsg(message: _37.EarnClaim): _37.EarnClaimProtoMsg;
            };
            Apy: {
                typeUrl: string;
                encode(message: _36.Apy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Apy;
                fromPartial(object: Partial<_36.Apy>): _36.Apy;
                fromAmino(object: _36.ApyAmino): _36.Apy;
                toAmino(message: _36.Apy): _36.ApyAmino;
                fromAminoMsg(object: _36.ApyAminoMsg): _36.Apy;
                fromProtoMsg(message: _36.ApyProtoMsg): _36.Apy;
                toProto(message: _36.Apy): Uint8Array;
                toProtoMsg(message: _36.Apy): _36.ApyProtoMsg;
            };
        };
    }
    namespace issuance {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueTokens(value: _44.MsgIssueTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokens(value: _44.MsgRedeemTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    blockAddress(value: _44.MsgBlockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unblockAddress(value: _44.MsgUnblockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPauseStatus(value: _44.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueTokens(value: _44.MsgIssueTokens): {
                        typeUrl: string;
                        value: _44.MsgIssueTokens;
                    };
                    redeemTokens(value: _44.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _44.MsgRedeemTokens;
                    };
                    blockAddress(value: _44.MsgBlockAddress): {
                        typeUrl: string;
                        value: _44.MsgBlockAddress;
                    };
                    unblockAddress(value: _44.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _44.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _44.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _44.MsgSetPauseStatus;
                    };
                };
                fromJSON: {
                    issueTokens(value: any): {
                        typeUrl: string;
                        value: _44.MsgIssueTokens;
                    };
                    redeemTokens(value: any): {
                        typeUrl: string;
                        value: _44.MsgRedeemTokens;
                    };
                    blockAddress(value: any): {
                        typeUrl: string;
                        value: _44.MsgBlockAddress;
                    };
                    unblockAddress(value: any): {
                        typeUrl: string;
                        value: _44.MsgUnblockAddress;
                    };
                    setPauseStatus(value: any): {
                        typeUrl: string;
                        value: _44.MsgSetPauseStatus;
                    };
                };
                fromPartial: {
                    issueTokens(value: _44.MsgIssueTokens): {
                        typeUrl: string;
                        value: _44.MsgIssueTokens;
                    };
                    redeemTokens(value: _44.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _44.MsgRedeemTokens;
                    };
                    blockAddress(value: _44.MsgBlockAddress): {
                        typeUrl: string;
                        value: _44.MsgBlockAddress;
                    };
                    unblockAddress(value: _44.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _44.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _44.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _44.MsgSetPauseStatus;
                    };
                };
            };
            AminoConverter: {
                "/kava.issuance.v1beta1.MsgIssueTokens": {
                    aminoType: string;
                    toAmino: (message: _44.MsgIssueTokens) => _44.MsgIssueTokensAmino;
                    fromAmino: (object: _44.MsgIssueTokensAmino) => _44.MsgIssueTokens;
                };
                "/kava.issuance.v1beta1.MsgRedeemTokens": {
                    aminoType: string;
                    toAmino: (message: _44.MsgRedeemTokens) => _44.MsgRedeemTokensAmino;
                    fromAmino: (object: _44.MsgRedeemTokensAmino) => _44.MsgRedeemTokens;
                };
                "/kava.issuance.v1beta1.MsgBlockAddress": {
                    aminoType: string;
                    toAmino: (message: _44.MsgBlockAddress) => _44.MsgBlockAddressAmino;
                    fromAmino: (object: _44.MsgBlockAddressAmino) => _44.MsgBlockAddress;
                };
                "/kava.issuance.v1beta1.MsgUnblockAddress": {
                    aminoType: string;
                    toAmino: (message: _44.MsgUnblockAddress) => _44.MsgUnblockAddressAmino;
                    fromAmino: (object: _44.MsgUnblockAddressAmino) => _44.MsgUnblockAddress;
                };
                "/kava.issuance.v1beta1.MsgSetPauseStatus": {
                    aminoType: string;
                    toAmino: (message: _44.MsgSetPauseStatus) => _44.MsgSetPauseStatusAmino;
                    fromAmino: (object: _44.MsgSetPauseStatusAmino) => _44.MsgSetPauseStatus;
                };
            };
            MsgIssueTokens: {
                typeUrl: string;
                encode(message: _44.MsgIssueTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgIssueTokens;
                fromPartial(object: Partial<_44.MsgIssueTokens>): _44.MsgIssueTokens;
                fromAmino(object: _44.MsgIssueTokensAmino): _44.MsgIssueTokens;
                toAmino(message: _44.MsgIssueTokens): _44.MsgIssueTokensAmino;
                fromAminoMsg(object: _44.MsgIssueTokensAminoMsg): _44.MsgIssueTokens;
                fromProtoMsg(message: _44.MsgIssueTokensProtoMsg): _44.MsgIssueTokens;
                toProto(message: _44.MsgIssueTokens): Uint8Array;
                toProtoMsg(message: _44.MsgIssueTokens): _44.MsgIssueTokensProtoMsg;
            };
            MsgIssueTokensResponse: {
                typeUrl: string;
                encode(_: _44.MsgIssueTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgIssueTokensResponse;
                fromPartial(_: Partial<_44.MsgIssueTokensResponse>): _44.MsgIssueTokensResponse;
                fromAmino(_: _44.MsgIssueTokensResponseAmino): _44.MsgIssueTokensResponse;
                toAmino(_: _44.MsgIssueTokensResponse): _44.MsgIssueTokensResponseAmino;
                fromAminoMsg(object: _44.MsgIssueTokensResponseAminoMsg): _44.MsgIssueTokensResponse;
                fromProtoMsg(message: _44.MsgIssueTokensResponseProtoMsg): _44.MsgIssueTokensResponse;
                toProto(message: _44.MsgIssueTokensResponse): Uint8Array;
                toProtoMsg(message: _44.MsgIssueTokensResponse): _44.MsgIssueTokensResponseProtoMsg;
            };
            MsgRedeemTokens: {
                typeUrl: string;
                encode(message: _44.MsgRedeemTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgRedeemTokens;
                fromPartial(object: Partial<_44.MsgRedeemTokens>): _44.MsgRedeemTokens;
                fromAmino(object: _44.MsgRedeemTokensAmino): _44.MsgRedeemTokens;
                toAmino(message: _44.MsgRedeemTokens): _44.MsgRedeemTokensAmino;
                fromAminoMsg(object: _44.MsgRedeemTokensAminoMsg): _44.MsgRedeemTokens;
                fromProtoMsg(message: _44.MsgRedeemTokensProtoMsg): _44.MsgRedeemTokens;
                toProto(message: _44.MsgRedeemTokens): Uint8Array;
                toProtoMsg(message: _44.MsgRedeemTokens): _44.MsgRedeemTokensProtoMsg;
            };
            MsgRedeemTokensResponse: {
                typeUrl: string;
                encode(_: _44.MsgRedeemTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgRedeemTokensResponse;
                fromPartial(_: Partial<_44.MsgRedeemTokensResponse>): _44.MsgRedeemTokensResponse;
                fromAmino(_: _44.MsgRedeemTokensResponseAmino): _44.MsgRedeemTokensResponse;
                toAmino(_: _44.MsgRedeemTokensResponse): _44.MsgRedeemTokensResponseAmino;
                fromAminoMsg(object: _44.MsgRedeemTokensResponseAminoMsg): _44.MsgRedeemTokensResponse;
                fromProtoMsg(message: _44.MsgRedeemTokensResponseProtoMsg): _44.MsgRedeemTokensResponse;
                toProto(message: _44.MsgRedeemTokensResponse): Uint8Array;
                toProtoMsg(message: _44.MsgRedeemTokensResponse): _44.MsgRedeemTokensResponseProtoMsg;
            };
            MsgBlockAddress: {
                typeUrl: string;
                encode(message: _44.MsgBlockAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgBlockAddress;
                fromPartial(object: Partial<_44.MsgBlockAddress>): _44.MsgBlockAddress;
                fromAmino(object: _44.MsgBlockAddressAmino): _44.MsgBlockAddress;
                toAmino(message: _44.MsgBlockAddress): _44.MsgBlockAddressAmino;
                fromAminoMsg(object: _44.MsgBlockAddressAminoMsg): _44.MsgBlockAddress;
                fromProtoMsg(message: _44.MsgBlockAddressProtoMsg): _44.MsgBlockAddress;
                toProto(message: _44.MsgBlockAddress): Uint8Array;
                toProtoMsg(message: _44.MsgBlockAddress): _44.MsgBlockAddressProtoMsg;
            };
            MsgBlockAddressResponse: {
                typeUrl: string;
                encode(_: _44.MsgBlockAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgBlockAddressResponse;
                fromPartial(_: Partial<_44.MsgBlockAddressResponse>): _44.MsgBlockAddressResponse;
                fromAmino(_: _44.MsgBlockAddressResponseAmino): _44.MsgBlockAddressResponse;
                toAmino(_: _44.MsgBlockAddressResponse): _44.MsgBlockAddressResponseAmino;
                fromAminoMsg(object: _44.MsgBlockAddressResponseAminoMsg): _44.MsgBlockAddressResponse;
                fromProtoMsg(message: _44.MsgBlockAddressResponseProtoMsg): _44.MsgBlockAddressResponse;
                toProto(message: _44.MsgBlockAddressResponse): Uint8Array;
                toProtoMsg(message: _44.MsgBlockAddressResponse): _44.MsgBlockAddressResponseProtoMsg;
            };
            MsgUnblockAddress: {
                typeUrl: string;
                encode(message: _44.MsgUnblockAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgUnblockAddress;
                fromPartial(object: Partial<_44.MsgUnblockAddress>): _44.MsgUnblockAddress;
                fromAmino(object: _44.MsgUnblockAddressAmino): _44.MsgUnblockAddress;
                toAmino(message: _44.MsgUnblockAddress): _44.MsgUnblockAddressAmino;
                fromAminoMsg(object: _44.MsgUnblockAddressAminoMsg): _44.MsgUnblockAddress;
                fromProtoMsg(message: _44.MsgUnblockAddressProtoMsg): _44.MsgUnblockAddress;
                toProto(message: _44.MsgUnblockAddress): Uint8Array;
                toProtoMsg(message: _44.MsgUnblockAddress): _44.MsgUnblockAddressProtoMsg;
            };
            MsgUnblockAddressResponse: {
                typeUrl: string;
                encode(_: _44.MsgUnblockAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgUnblockAddressResponse;
                fromPartial(_: Partial<_44.MsgUnblockAddressResponse>): _44.MsgUnblockAddressResponse;
                fromAmino(_: _44.MsgUnblockAddressResponseAmino): _44.MsgUnblockAddressResponse;
                toAmino(_: _44.MsgUnblockAddressResponse): _44.MsgUnblockAddressResponseAmino;
                fromAminoMsg(object: _44.MsgUnblockAddressResponseAminoMsg): _44.MsgUnblockAddressResponse;
                fromProtoMsg(message: _44.MsgUnblockAddressResponseProtoMsg): _44.MsgUnblockAddressResponse;
                toProto(message: _44.MsgUnblockAddressResponse): Uint8Array;
                toProtoMsg(message: _44.MsgUnblockAddressResponse): _44.MsgUnblockAddressResponseProtoMsg;
            };
            MsgSetPauseStatus: {
                typeUrl: string;
                encode(message: _44.MsgSetPauseStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgSetPauseStatus;
                fromPartial(object: Partial<_44.MsgSetPauseStatus>): _44.MsgSetPauseStatus;
                fromAmino(object: _44.MsgSetPauseStatusAmino): _44.MsgSetPauseStatus;
                toAmino(message: _44.MsgSetPauseStatus): _44.MsgSetPauseStatusAmino;
                fromAminoMsg(object: _44.MsgSetPauseStatusAminoMsg): _44.MsgSetPauseStatus;
                fromProtoMsg(message: _44.MsgSetPauseStatusProtoMsg): _44.MsgSetPauseStatus;
                toProto(message: _44.MsgSetPauseStatus): Uint8Array;
                toProtoMsg(message: _44.MsgSetPauseStatus): _44.MsgSetPauseStatusProtoMsg;
            };
            MsgSetPauseStatusResponse: {
                typeUrl: string;
                encode(_: _44.MsgSetPauseStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgSetPauseStatusResponse;
                fromPartial(_: Partial<_44.MsgSetPauseStatusResponse>): _44.MsgSetPauseStatusResponse;
                fromAmino(_: _44.MsgSetPauseStatusResponseAmino): _44.MsgSetPauseStatusResponse;
                toAmino(_: _44.MsgSetPauseStatusResponse): _44.MsgSetPauseStatusResponseAmino;
                fromAminoMsg(object: _44.MsgSetPauseStatusResponseAminoMsg): _44.MsgSetPauseStatusResponse;
                fromProtoMsg(message: _44.MsgSetPauseStatusResponseProtoMsg): _44.MsgSetPauseStatusResponse;
                toProto(message: _44.MsgSetPauseStatusResponse): Uint8Array;
                toProtoMsg(message: _44.MsgSetPauseStatusResponse): _44.MsgSetPauseStatusResponseProtoMsg;
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
            GenesisState: {
                typeUrl: string;
                encode(message: _42.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.GenesisState;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
                fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
                toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
                fromAminoMsg(object: _42.GenesisStateAminoMsg): _42.GenesisState;
                fromProtoMsg(message: _42.GenesisStateProtoMsg): _42.GenesisState;
                toProto(message: _42.GenesisState): Uint8Array;
                toProtoMsg(message: _42.GenesisState): _42.GenesisStateProtoMsg;
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
            Asset: {
                typeUrl: string;
                encode(message: _42.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Asset;
                fromPartial(object: Partial<_42.Asset>): _42.Asset;
                fromAmino(object: _42.AssetAmino): _42.Asset;
                toAmino(message: _42.Asset): _42.AssetAmino;
                fromAminoMsg(object: _42.AssetAminoMsg): _42.Asset;
                fromProtoMsg(message: _42.AssetProtoMsg): _42.Asset;
                toProto(message: _42.Asset): Uint8Array;
                toProtoMsg(message: _42.Asset): _42.AssetProtoMsg;
            };
            RateLimit: {
                typeUrl: string;
                encode(message: _42.RateLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.RateLimit;
                fromPartial(object: Partial<_42.RateLimit>): _42.RateLimit;
                fromAmino(object: _42.RateLimitAmino): _42.RateLimit;
                toAmino(message: _42.RateLimit): _42.RateLimitAmino;
                fromAminoMsg(object: _42.RateLimitAminoMsg): _42.RateLimit;
                fromProtoMsg(message: _42.RateLimitProtoMsg): _42.RateLimit;
                toProto(message: _42.RateLimit): Uint8Array;
                toProtoMsg(message: _42.RateLimit): _42.RateLimitProtoMsg;
            };
            AssetSupply: {
                typeUrl: string;
                encode(message: _42.AssetSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.AssetSupply;
                fromPartial(object: Partial<_42.AssetSupply>): _42.AssetSupply;
                fromAmino(object: _42.AssetSupplyAmino): _42.AssetSupply;
                toAmino(message: _42.AssetSupply): _42.AssetSupplyAmino;
                fromAminoMsg(object: _42.AssetSupplyAminoMsg): _42.AssetSupply;
                fromProtoMsg(message: _42.AssetSupplyProtoMsg): _42.AssetSupply;
                toProto(message: _42.AssetSupply): Uint8Array;
                toProtoMsg(message: _42.AssetSupply): _42.AssetSupplyProtoMsg;
            };
        };
    }
    namespace kavadist {
        const v1beta1: {
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                balance(request?: _48.QueryBalanceRequest): Promise<_48.QueryBalanceResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _48.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryParamsRequest;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
                fromAmino(_: _48.QueryParamsRequestAmino): _48.QueryParamsRequest;
                toAmino(_: _48.QueryParamsRequest): _48.QueryParamsRequestAmino;
                fromAminoMsg(object: _48.QueryParamsRequestAminoMsg): _48.QueryParamsRequest;
                fromProtoMsg(message: _48.QueryParamsRequestProtoMsg): _48.QueryParamsRequest;
                toProto(message: _48.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _48.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
                fromAmino(object: _48.QueryParamsResponseAmino): _48.QueryParamsResponse;
                toAmino(message: _48.QueryParamsResponse): _48.QueryParamsResponseAmino;
                fromAminoMsg(object: _48.QueryParamsResponseAminoMsg): _48.QueryParamsResponse;
                fromProtoMsg(message: _48.QueryParamsResponseProtoMsg): _48.QueryParamsResponse;
                toProto(message: _48.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(_: _48.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryBalanceRequest;
                fromPartial(_: Partial<_48.QueryBalanceRequest>): _48.QueryBalanceRequest;
                fromAmino(_: _48.QueryBalanceRequestAmino): _48.QueryBalanceRequest;
                toAmino(_: _48.QueryBalanceRequest): _48.QueryBalanceRequestAmino;
                fromAminoMsg(object: _48.QueryBalanceRequestAminoMsg): _48.QueryBalanceRequest;
                fromProtoMsg(message: _48.QueryBalanceRequestProtoMsg): _48.QueryBalanceRequest;
                toProto(message: _48.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _48.QueryBalanceRequest): _48.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _48.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryBalanceResponse;
                fromPartial(object: Partial<_48.QueryBalanceResponse>): _48.QueryBalanceResponse;
                fromAmino(object: _48.QueryBalanceResponseAmino): _48.QueryBalanceResponse;
                toAmino(message: _48.QueryBalanceResponse): _48.QueryBalanceResponseAmino;
                fromAminoMsg(object: _48.QueryBalanceResponseAminoMsg): _48.QueryBalanceResponse;
                fromProtoMsg(message: _48.QueryBalanceResponseProtoMsg): _48.QueryBalanceResponse;
                toProto(message: _48.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _48.QueryBalanceResponse): _48.QueryBalanceResponseProtoMsg;
            };
            CommunityPoolMultiSpendProposal: {
                typeUrl: string;
                encode(message: _47.CommunityPoolMultiSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.CommunityPoolMultiSpendProposal;
                fromPartial(object: Partial<_47.CommunityPoolMultiSpendProposal>): _47.CommunityPoolMultiSpendProposal;
                fromAmino(object: _47.CommunityPoolMultiSpendProposalAmino): _47.CommunityPoolMultiSpendProposal;
                toAmino(message: _47.CommunityPoolMultiSpendProposal): _47.CommunityPoolMultiSpendProposalAmino;
                fromAminoMsg(object: _47.CommunityPoolMultiSpendProposalAminoMsg): _47.CommunityPoolMultiSpendProposal;
                fromProtoMsg(message: _47.CommunityPoolMultiSpendProposalProtoMsg): _47.CommunityPoolMultiSpendProposal;
                toProto(message: _47.CommunityPoolMultiSpendProposal): Uint8Array;
                toProtoMsg(message: _47.CommunityPoolMultiSpendProposal): _47.CommunityPoolMultiSpendProposalProtoMsg;
            };
            CommunityPoolMultiSpendProposalJSON: {
                typeUrl: string;
                encode(message: _47.CommunityPoolMultiSpendProposalJSON, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.CommunityPoolMultiSpendProposalJSON;
                fromPartial(object: Partial<_47.CommunityPoolMultiSpendProposalJSON>): _47.CommunityPoolMultiSpendProposalJSON;
                fromAmino(object: _47.CommunityPoolMultiSpendProposalJSONAmino): _47.CommunityPoolMultiSpendProposalJSON;
                toAmino(message: _47.CommunityPoolMultiSpendProposalJSON): _47.CommunityPoolMultiSpendProposalJSONAmino;
                fromAminoMsg(object: _47.CommunityPoolMultiSpendProposalJSONAminoMsg): _47.CommunityPoolMultiSpendProposalJSON;
                fromProtoMsg(message: _47.CommunityPoolMultiSpendProposalJSONProtoMsg): _47.CommunityPoolMultiSpendProposalJSON;
                toProto(message: _47.CommunityPoolMultiSpendProposalJSON): Uint8Array;
                toProtoMsg(message: _47.CommunityPoolMultiSpendProposalJSON): _47.CommunityPoolMultiSpendProposalJSONProtoMsg;
            };
            MultiSpendRecipient: {
                typeUrl: string;
                encode(message: _47.MultiSpendRecipient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.MultiSpendRecipient;
                fromPartial(object: Partial<_47.MultiSpendRecipient>): _47.MultiSpendRecipient;
                fromAmino(object: _47.MultiSpendRecipientAmino): _47.MultiSpendRecipient;
                toAmino(message: _47.MultiSpendRecipient): _47.MultiSpendRecipientAmino;
                fromAminoMsg(object: _47.MultiSpendRecipientAminoMsg): _47.MultiSpendRecipient;
                fromProtoMsg(message: _47.MultiSpendRecipientProtoMsg): _47.MultiSpendRecipient;
                toProto(message: _47.MultiSpendRecipient): Uint8Array;
                toProtoMsg(message: _47.MultiSpendRecipient): _47.MultiSpendRecipientProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _46.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
                fromAmino(object: _46.ParamsAmino): _46.Params;
                toAmino(message: _46.Params): _46.ParamsAmino;
                fromAminoMsg(object: _46.ParamsAminoMsg): _46.Params;
                fromProtoMsg(message: _46.ParamsProtoMsg): _46.Params;
                toProto(message: _46.Params): Uint8Array;
                toProtoMsg(message: _46.Params): _46.ParamsProtoMsg;
            };
            InfrastructureParams: {
                typeUrl: string;
                encode(message: _46.InfrastructureParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.InfrastructureParams;
                fromPartial(object: Partial<_46.InfrastructureParams>): _46.InfrastructureParams;
                fromAmino(object: _46.InfrastructureParamsAmino): _46.InfrastructureParams;
                toAmino(message: _46.InfrastructureParams): _46.InfrastructureParamsAmino;
                fromAminoMsg(object: _46.InfrastructureParamsAminoMsg): _46.InfrastructureParams;
                fromProtoMsg(message: _46.InfrastructureParamsProtoMsg): _46.InfrastructureParams;
                toProto(message: _46.InfrastructureParams): Uint8Array;
                toProtoMsg(message: _46.InfrastructureParams): _46.InfrastructureParamsProtoMsg;
            };
            CoreReward: {
                typeUrl: string;
                encode(message: _46.CoreReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.CoreReward;
                fromPartial(object: Partial<_46.CoreReward>): _46.CoreReward;
                fromAmino(object: _46.CoreRewardAmino): _46.CoreReward;
                toAmino(message: _46.CoreReward): _46.CoreRewardAmino;
                fromAminoMsg(object: _46.CoreRewardAminoMsg): _46.CoreReward;
                fromProtoMsg(message: _46.CoreRewardProtoMsg): _46.CoreReward;
                toProto(message: _46.CoreReward): Uint8Array;
                toProtoMsg(message: _46.CoreReward): _46.CoreRewardProtoMsg;
            };
            PartnerReward: {
                typeUrl: string;
                encode(message: _46.PartnerReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.PartnerReward;
                fromPartial(object: Partial<_46.PartnerReward>): _46.PartnerReward;
                fromAmino(object: _46.PartnerRewardAmino): _46.PartnerReward;
                toAmino(message: _46.PartnerReward): _46.PartnerRewardAmino;
                fromAminoMsg(object: _46.PartnerRewardAminoMsg): _46.PartnerReward;
                fromProtoMsg(message: _46.PartnerRewardProtoMsg): _46.PartnerReward;
                toProto(message: _46.PartnerReward): Uint8Array;
                toProtoMsg(message: _46.PartnerReward): _46.PartnerRewardProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _46.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Period;
                fromPartial(object: Partial<_46.Period>): _46.Period;
                fromAmino(object: _46.PeriodAmino): _46.Period;
                toAmino(message: _46.Period): _46.PeriodAmino;
                fromAminoMsg(object: _46.PeriodAminoMsg): _46.Period;
                fromProtoMsg(message: _46.PeriodProtoMsg): _46.Period;
                toProto(message: _46.Period): Uint8Array;
                toProtoMsg(message: _46.Period): _46.PeriodProtoMsg;
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
        };
    }
    namespace liquid {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                delegatedBalance(request: _49.QueryDelegatedBalanceRequest): Promise<_49.QueryDelegatedBalanceResponse>;
                totalSupply(request?: _49.QueryTotalSupplyRequest): Promise<_49.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintDerivative(value: _50.MsgMintDerivative): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnDerivative(value: _50.MsgBurnDerivative): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintDerivative(value: _50.MsgMintDerivative): {
                        typeUrl: string;
                        value: _50.MsgMintDerivative;
                    };
                    burnDerivative(value: _50.MsgBurnDerivative): {
                        typeUrl: string;
                        value: _50.MsgBurnDerivative;
                    };
                };
                fromJSON: {
                    mintDerivative(value: any): {
                        typeUrl: string;
                        value: _50.MsgMintDerivative;
                    };
                    burnDerivative(value: any): {
                        typeUrl: string;
                        value: _50.MsgBurnDerivative;
                    };
                };
                fromPartial: {
                    mintDerivative(value: _50.MsgMintDerivative): {
                        typeUrl: string;
                        value: _50.MsgMintDerivative;
                    };
                    burnDerivative(value: _50.MsgBurnDerivative): {
                        typeUrl: string;
                        value: _50.MsgBurnDerivative;
                    };
                };
            };
            AminoConverter: {
                "/kava.liquid.v1beta1.MsgMintDerivative": {
                    aminoType: string;
                    toAmino: (message: _50.MsgMintDerivative) => _50.MsgMintDerivativeAmino;
                    fromAmino: (object: _50.MsgMintDerivativeAmino) => _50.MsgMintDerivative;
                };
                "/kava.liquid.v1beta1.MsgBurnDerivative": {
                    aminoType: string;
                    toAmino: (message: _50.MsgBurnDerivative) => _50.MsgBurnDerivativeAmino;
                    fromAmino: (object: _50.MsgBurnDerivativeAmino) => _50.MsgBurnDerivative;
                };
            };
            MsgMintDerivative: {
                typeUrl: string;
                encode(message: _50.MsgMintDerivative, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgMintDerivative;
                fromPartial(object: Partial<_50.MsgMintDerivative>): _50.MsgMintDerivative;
                fromAmino(object: _50.MsgMintDerivativeAmino): _50.MsgMintDerivative;
                toAmino(message: _50.MsgMintDerivative): _50.MsgMintDerivativeAmino;
                fromAminoMsg(object: _50.MsgMintDerivativeAminoMsg): _50.MsgMintDerivative;
                fromProtoMsg(message: _50.MsgMintDerivativeProtoMsg): _50.MsgMintDerivative;
                toProto(message: _50.MsgMintDerivative): Uint8Array;
                toProtoMsg(message: _50.MsgMintDerivative): _50.MsgMintDerivativeProtoMsg;
            };
            MsgMintDerivativeResponse: {
                typeUrl: string;
                encode(message: _50.MsgMintDerivativeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgMintDerivativeResponse;
                fromPartial(object: Partial<_50.MsgMintDerivativeResponse>): _50.MsgMintDerivativeResponse;
                fromAmino(object: _50.MsgMintDerivativeResponseAmino): _50.MsgMintDerivativeResponse;
                toAmino(message: _50.MsgMintDerivativeResponse): _50.MsgMintDerivativeResponseAmino;
                fromAminoMsg(object: _50.MsgMintDerivativeResponseAminoMsg): _50.MsgMintDerivativeResponse;
                fromProtoMsg(message: _50.MsgMintDerivativeResponseProtoMsg): _50.MsgMintDerivativeResponse;
                toProto(message: _50.MsgMintDerivativeResponse): Uint8Array;
                toProtoMsg(message: _50.MsgMintDerivativeResponse): _50.MsgMintDerivativeResponseProtoMsg;
            };
            MsgBurnDerivative: {
                typeUrl: string;
                encode(message: _50.MsgBurnDerivative, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgBurnDerivative;
                fromPartial(object: Partial<_50.MsgBurnDerivative>): _50.MsgBurnDerivative;
                fromAmino(object: _50.MsgBurnDerivativeAmino): _50.MsgBurnDerivative;
                toAmino(message: _50.MsgBurnDerivative): _50.MsgBurnDerivativeAmino;
                fromAminoMsg(object: _50.MsgBurnDerivativeAminoMsg): _50.MsgBurnDerivative;
                fromProtoMsg(message: _50.MsgBurnDerivativeProtoMsg): _50.MsgBurnDerivative;
                toProto(message: _50.MsgBurnDerivative): Uint8Array;
                toProtoMsg(message: _50.MsgBurnDerivative): _50.MsgBurnDerivativeProtoMsg;
            };
            MsgBurnDerivativeResponse: {
                typeUrl: string;
                encode(message: _50.MsgBurnDerivativeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgBurnDerivativeResponse;
                fromPartial(object: Partial<_50.MsgBurnDerivativeResponse>): _50.MsgBurnDerivativeResponse;
                fromAmino(object: _50.MsgBurnDerivativeResponseAmino): _50.MsgBurnDerivativeResponse;
                toAmino(message: _50.MsgBurnDerivativeResponse): _50.MsgBurnDerivativeResponseAmino;
                fromAminoMsg(object: _50.MsgBurnDerivativeResponseAminoMsg): _50.MsgBurnDerivativeResponse;
                fromProtoMsg(message: _50.MsgBurnDerivativeResponseProtoMsg): _50.MsgBurnDerivativeResponse;
                toProto(message: _50.MsgBurnDerivativeResponse): Uint8Array;
                toProtoMsg(message: _50.MsgBurnDerivativeResponse): _50.MsgBurnDerivativeResponseProtoMsg;
            };
            QueryDelegatedBalanceRequest: {
                typeUrl: string;
                encode(message: _49.QueryDelegatedBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegatedBalanceRequest;
                fromPartial(object: Partial<_49.QueryDelegatedBalanceRequest>): _49.QueryDelegatedBalanceRequest;
                fromAmino(object: _49.QueryDelegatedBalanceRequestAmino): _49.QueryDelegatedBalanceRequest;
                toAmino(message: _49.QueryDelegatedBalanceRequest): _49.QueryDelegatedBalanceRequestAmino;
                fromAminoMsg(object: _49.QueryDelegatedBalanceRequestAminoMsg): _49.QueryDelegatedBalanceRequest;
                fromProtoMsg(message: _49.QueryDelegatedBalanceRequestProtoMsg): _49.QueryDelegatedBalanceRequest;
                toProto(message: _49.QueryDelegatedBalanceRequest): Uint8Array;
                toProtoMsg(message: _49.QueryDelegatedBalanceRequest): _49.QueryDelegatedBalanceRequestProtoMsg;
            };
            QueryDelegatedBalanceResponse: {
                typeUrl: string;
                encode(message: _49.QueryDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryDelegatedBalanceResponse;
                fromPartial(object: Partial<_49.QueryDelegatedBalanceResponse>): _49.QueryDelegatedBalanceResponse;
                fromAmino(object: _49.QueryDelegatedBalanceResponseAmino): _49.QueryDelegatedBalanceResponse;
                toAmino(message: _49.QueryDelegatedBalanceResponse): _49.QueryDelegatedBalanceResponseAmino;
                fromAminoMsg(object: _49.QueryDelegatedBalanceResponseAminoMsg): _49.QueryDelegatedBalanceResponse;
                fromProtoMsg(message: _49.QueryDelegatedBalanceResponseProtoMsg): _49.QueryDelegatedBalanceResponse;
                toProto(message: _49.QueryDelegatedBalanceResponse): Uint8Array;
                toProtoMsg(message: _49.QueryDelegatedBalanceResponse): _49.QueryDelegatedBalanceResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(_: _49.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_49.QueryTotalSupplyRequest>): _49.QueryTotalSupplyRequest;
                fromAmino(_: _49.QueryTotalSupplyRequestAmino): _49.QueryTotalSupplyRequest;
                toAmino(_: _49.QueryTotalSupplyRequest): _49.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _49.QueryTotalSupplyRequestAminoMsg): _49.QueryTotalSupplyRequest;
                fromProtoMsg(message: _49.QueryTotalSupplyRequestProtoMsg): _49.QueryTotalSupplyRequest;
                toProto(message: _49.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _49.QueryTotalSupplyRequest): _49.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _49.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_49.QueryTotalSupplyResponse>): _49.QueryTotalSupplyResponse;
                fromAmino(object: _49.QueryTotalSupplyResponseAmino): _49.QueryTotalSupplyResponse;
                toAmino(message: _49.QueryTotalSupplyResponse): _49.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _49.QueryTotalSupplyResponseAminoMsg): _49.QueryTotalSupplyResponse;
                fromProtoMsg(message: _49.QueryTotalSupplyResponseProtoMsg): _49.QueryTotalSupplyResponse;
                toProto(message: _49.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _49.QueryTotalSupplyResponse): _49.QueryTotalSupplyResponseProtoMsg;
            };
        };
    }
    namespace pricefeed {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                price(request: _52.QueryPriceRequest): Promise<_52.QueryPriceResponse>;
                prices(request?: _52.QueryPricesRequest): Promise<_52.QueryPricesResponse>;
                rawPrices(request: _52.QueryRawPricesRequest): Promise<_52.QueryRawPricesResponse>;
                oracles(request: _52.QueryOraclesRequest): Promise<_52.QueryOraclesResponse>;
                markets(request?: _52.QueryMarketsRequest): Promise<_52.QueryMarketsResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    postPrice(value: _54.MsgPostPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    postPrice(value: _54.MsgPostPrice): {
                        typeUrl: string;
                        value: _54.MsgPostPrice;
                    };
                };
                fromJSON: {
                    postPrice(value: any): {
                        typeUrl: string;
                        value: _54.MsgPostPrice;
                    };
                };
                fromPartial: {
                    postPrice(value: _54.MsgPostPrice): {
                        typeUrl: string;
                        value: _54.MsgPostPrice;
                    };
                };
            };
            AminoConverter: {
                "/kava.pricefeed.v1beta1.MsgPostPrice": {
                    aminoType: string;
                    toAmino: (message: _54.MsgPostPrice) => _54.MsgPostPriceAmino;
                    fromAmino: (object: _54.MsgPostPriceAmino) => _54.MsgPostPrice;
                };
            };
            MsgPostPrice: {
                typeUrl: string;
                encode(message: _54.MsgPostPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgPostPrice;
                fromPartial(object: Partial<_54.MsgPostPrice>): _54.MsgPostPrice;
                fromAmino(object: _54.MsgPostPriceAmino): _54.MsgPostPrice;
                toAmino(message: _54.MsgPostPrice): _54.MsgPostPriceAmino;
                fromAminoMsg(object: _54.MsgPostPriceAminoMsg): _54.MsgPostPrice;
                fromProtoMsg(message: _54.MsgPostPriceProtoMsg): _54.MsgPostPrice;
                toProto(message: _54.MsgPostPrice): Uint8Array;
                toProtoMsg(message: _54.MsgPostPrice): _54.MsgPostPriceProtoMsg;
            };
            MsgPostPriceResponse: {
                typeUrl: string;
                encode(_: _54.MsgPostPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgPostPriceResponse;
                fromPartial(_: Partial<_54.MsgPostPriceResponse>): _54.MsgPostPriceResponse;
                fromAmino(_: _54.MsgPostPriceResponseAmino): _54.MsgPostPriceResponse;
                toAmino(_: _54.MsgPostPriceResponse): _54.MsgPostPriceResponseAmino;
                fromAminoMsg(object: _54.MsgPostPriceResponseAminoMsg): _54.MsgPostPriceResponse;
                fromProtoMsg(message: _54.MsgPostPriceResponseProtoMsg): _54.MsgPostPriceResponse;
                toProto(message: _54.MsgPostPriceResponse): Uint8Array;
                toProtoMsg(message: _54.MsgPostPriceResponse): _54.MsgPostPriceResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _53.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
                fromAmino(object: _53.ParamsAmino): _53.Params;
                toAmino(message: _53.Params): _53.ParamsAmino;
                fromAminoMsg(object: _53.ParamsAminoMsg): _53.Params;
                fromProtoMsg(message: _53.ParamsProtoMsg): _53.Params;
                toProto(message: _53.Params): Uint8Array;
                toProtoMsg(message: _53.Params): _53.ParamsProtoMsg;
            };
            Market: {
                typeUrl: string;
                encode(message: _53.Market, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Market;
                fromPartial(object: Partial<_53.Market>): _53.Market;
                fromAmino(object: _53.MarketAmino): _53.Market;
                toAmino(message: _53.Market): _53.MarketAmino;
                fromAminoMsg(object: _53.MarketAminoMsg): _53.Market;
                fromProtoMsg(message: _53.MarketProtoMsg): _53.Market;
                toProto(message: _53.Market): Uint8Array;
                toProtoMsg(message: _53.Market): _53.MarketProtoMsg;
            };
            PostedPrice: {
                typeUrl: string;
                encode(message: _53.PostedPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.PostedPrice;
                fromPartial(object: Partial<_53.PostedPrice>): _53.PostedPrice;
                fromAmino(object: _53.PostedPriceAmino): _53.PostedPrice;
                toAmino(message: _53.PostedPrice): _53.PostedPriceAmino;
                fromAminoMsg(object: _53.PostedPriceAminoMsg): _53.PostedPrice;
                fromProtoMsg(message: _53.PostedPriceProtoMsg): _53.PostedPrice;
                toProto(message: _53.PostedPrice): Uint8Array;
                toProtoMsg(message: _53.PostedPrice): _53.PostedPriceProtoMsg;
            };
            CurrentPrice: {
                typeUrl: string;
                encode(message: _53.CurrentPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.CurrentPrice;
                fromPartial(object: Partial<_53.CurrentPrice>): _53.CurrentPrice;
                fromAmino(object: _53.CurrentPriceAmino): _53.CurrentPrice;
                toAmino(message: _53.CurrentPrice): _53.CurrentPriceAmino;
                fromAminoMsg(object: _53.CurrentPriceAminoMsg): _53.CurrentPrice;
                fromProtoMsg(message: _53.CurrentPriceProtoMsg): _53.CurrentPrice;
                toProto(message: _53.CurrentPrice): Uint8Array;
                toProtoMsg(message: _53.CurrentPrice): _53.CurrentPriceProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _52.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryParamsRequest;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
                fromAmino(_: _52.QueryParamsRequestAmino): _52.QueryParamsRequest;
                toAmino(_: _52.QueryParamsRequest): _52.QueryParamsRequestAmino;
                fromAminoMsg(object: _52.QueryParamsRequestAminoMsg): _52.QueryParamsRequest;
                fromProtoMsg(message: _52.QueryParamsRequestProtoMsg): _52.QueryParamsRequest;
                toProto(message: _52.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _52.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
                fromAmino(object: _52.QueryParamsResponseAmino): _52.QueryParamsResponse;
                toAmino(message: _52.QueryParamsResponse): _52.QueryParamsResponseAmino;
                fromAminoMsg(object: _52.QueryParamsResponseAminoMsg): _52.QueryParamsResponse;
                fromProtoMsg(message: _52.QueryParamsResponseProtoMsg): _52.QueryParamsResponse;
                toProto(message: _52.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseProtoMsg;
            };
            QueryPriceRequest: {
                typeUrl: string;
                encode(message: _52.QueryPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryPriceRequest;
                fromPartial(object: Partial<_52.QueryPriceRequest>): _52.QueryPriceRequest;
                fromAmino(object: _52.QueryPriceRequestAmino): _52.QueryPriceRequest;
                toAmino(message: _52.QueryPriceRequest): _52.QueryPriceRequestAmino;
                fromAminoMsg(object: _52.QueryPriceRequestAminoMsg): _52.QueryPriceRequest;
                fromProtoMsg(message: _52.QueryPriceRequestProtoMsg): _52.QueryPriceRequest;
                toProto(message: _52.QueryPriceRequest): Uint8Array;
                toProtoMsg(message: _52.QueryPriceRequest): _52.QueryPriceRequestProtoMsg;
            };
            QueryPriceResponse: {
                typeUrl: string;
                encode(message: _52.QueryPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryPriceResponse;
                fromPartial(object: Partial<_52.QueryPriceResponse>): _52.QueryPriceResponse;
                fromAmino(object: _52.QueryPriceResponseAmino): _52.QueryPriceResponse;
                toAmino(message: _52.QueryPriceResponse): _52.QueryPriceResponseAmino;
                fromAminoMsg(object: _52.QueryPriceResponseAminoMsg): _52.QueryPriceResponse;
                fromProtoMsg(message: _52.QueryPriceResponseProtoMsg): _52.QueryPriceResponse;
                toProto(message: _52.QueryPriceResponse): Uint8Array;
                toProtoMsg(message: _52.QueryPriceResponse): _52.QueryPriceResponseProtoMsg;
            };
            QueryPricesRequest: {
                typeUrl: string;
                encode(_: _52.QueryPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryPricesRequest;
                fromPartial(_: Partial<_52.QueryPricesRequest>): _52.QueryPricesRequest;
                fromAmino(_: _52.QueryPricesRequestAmino): _52.QueryPricesRequest;
                toAmino(_: _52.QueryPricesRequest): _52.QueryPricesRequestAmino;
                fromAminoMsg(object: _52.QueryPricesRequestAminoMsg): _52.QueryPricesRequest;
                fromProtoMsg(message: _52.QueryPricesRequestProtoMsg): _52.QueryPricesRequest;
                toProto(message: _52.QueryPricesRequest): Uint8Array;
                toProtoMsg(message: _52.QueryPricesRequest): _52.QueryPricesRequestProtoMsg;
            };
            QueryPricesResponse: {
                typeUrl: string;
                encode(message: _52.QueryPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryPricesResponse;
                fromPartial(object: Partial<_52.QueryPricesResponse>): _52.QueryPricesResponse;
                fromAmino(object: _52.QueryPricesResponseAmino): _52.QueryPricesResponse;
                toAmino(message: _52.QueryPricesResponse): _52.QueryPricesResponseAmino;
                fromAminoMsg(object: _52.QueryPricesResponseAminoMsg): _52.QueryPricesResponse;
                fromProtoMsg(message: _52.QueryPricesResponseProtoMsg): _52.QueryPricesResponse;
                toProto(message: _52.QueryPricesResponse): Uint8Array;
                toProtoMsg(message: _52.QueryPricesResponse): _52.QueryPricesResponseProtoMsg;
            };
            QueryRawPricesRequest: {
                typeUrl: string;
                encode(message: _52.QueryRawPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryRawPricesRequest;
                fromPartial(object: Partial<_52.QueryRawPricesRequest>): _52.QueryRawPricesRequest;
                fromAmino(object: _52.QueryRawPricesRequestAmino): _52.QueryRawPricesRequest;
                toAmino(message: _52.QueryRawPricesRequest): _52.QueryRawPricesRequestAmino;
                fromAminoMsg(object: _52.QueryRawPricesRequestAminoMsg): _52.QueryRawPricesRequest;
                fromProtoMsg(message: _52.QueryRawPricesRequestProtoMsg): _52.QueryRawPricesRequest;
                toProto(message: _52.QueryRawPricesRequest): Uint8Array;
                toProtoMsg(message: _52.QueryRawPricesRequest): _52.QueryRawPricesRequestProtoMsg;
            };
            QueryRawPricesResponse: {
                typeUrl: string;
                encode(message: _52.QueryRawPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryRawPricesResponse;
                fromPartial(object: Partial<_52.QueryRawPricesResponse>): _52.QueryRawPricesResponse;
                fromAmino(object: _52.QueryRawPricesResponseAmino): _52.QueryRawPricesResponse;
                toAmino(message: _52.QueryRawPricesResponse): _52.QueryRawPricesResponseAmino;
                fromAminoMsg(object: _52.QueryRawPricesResponseAminoMsg): _52.QueryRawPricesResponse;
                fromProtoMsg(message: _52.QueryRawPricesResponseProtoMsg): _52.QueryRawPricesResponse;
                toProto(message: _52.QueryRawPricesResponse): Uint8Array;
                toProtoMsg(message: _52.QueryRawPricesResponse): _52.QueryRawPricesResponseProtoMsg;
            };
            QueryOraclesRequest: {
                typeUrl: string;
                encode(message: _52.QueryOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryOraclesRequest;
                fromPartial(object: Partial<_52.QueryOraclesRequest>): _52.QueryOraclesRequest;
                fromAmino(object: _52.QueryOraclesRequestAmino): _52.QueryOraclesRequest;
                toAmino(message: _52.QueryOraclesRequest): _52.QueryOraclesRequestAmino;
                fromAminoMsg(object: _52.QueryOraclesRequestAminoMsg): _52.QueryOraclesRequest;
                fromProtoMsg(message: _52.QueryOraclesRequestProtoMsg): _52.QueryOraclesRequest;
                toProto(message: _52.QueryOraclesRequest): Uint8Array;
                toProtoMsg(message: _52.QueryOraclesRequest): _52.QueryOraclesRequestProtoMsg;
            };
            QueryOraclesResponse: {
                typeUrl: string;
                encode(message: _52.QueryOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryOraclesResponse;
                fromPartial(object: Partial<_52.QueryOraclesResponse>): _52.QueryOraclesResponse;
                fromAmino(object: _52.QueryOraclesResponseAmino): _52.QueryOraclesResponse;
                toAmino(message: _52.QueryOraclesResponse): _52.QueryOraclesResponseAmino;
                fromAminoMsg(object: _52.QueryOraclesResponseAminoMsg): _52.QueryOraclesResponse;
                fromProtoMsg(message: _52.QueryOraclesResponseProtoMsg): _52.QueryOraclesResponse;
                toProto(message: _52.QueryOraclesResponse): Uint8Array;
                toProtoMsg(message: _52.QueryOraclesResponse): _52.QueryOraclesResponseProtoMsg;
            };
            QueryMarketsRequest: {
                typeUrl: string;
                encode(_: _52.QueryMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _52.QueryMarketsRequest;
                fromPartial(_: Partial<_52.QueryMarketsRequest>): _52.QueryMarketsRequest;
                fromAmino(_: _52.QueryMarketsRequestAmino): _52.QueryMarketsRequest;
                toAmino(_: _52.QueryMarketsRequest): _52.QueryMarketsRequestAmino;
                fromAminoMsg(object: _52.QueryMarketsRequestAminoMsg): _52.QueryMarketsRequest;
                fromProtoMsg(message: _52.QueryMarketsRequestProtoMsg): _52.QueryMarketsRequest;
                toProto(message: _52.QueryMarketsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryMarketsRequest): _52.QueryMarketsRequestProtoMsg;
            };
            QueryMarketsResponse: {
                typeUrl: string;
                encode(message: _52.QueryMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryMarketsResponse;
                fromPartial(object: Partial<_52.QueryMarketsResponse>): _52.QueryMarketsResponse;
                fromAmino(object: _52.QueryMarketsResponseAmino): _52.QueryMarketsResponse;
                toAmino(message: _52.QueryMarketsResponse): _52.QueryMarketsResponseAmino;
                fromAminoMsg(object: _52.QueryMarketsResponseAminoMsg): _52.QueryMarketsResponse;
                fromProtoMsg(message: _52.QueryMarketsResponseProtoMsg): _52.QueryMarketsResponse;
                toProto(message: _52.QueryMarketsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryMarketsResponse): _52.QueryMarketsResponseProtoMsg;
            };
            PostedPriceResponse: {
                typeUrl: string;
                encode(message: _52.PostedPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.PostedPriceResponse;
                fromPartial(object: Partial<_52.PostedPriceResponse>): _52.PostedPriceResponse;
                fromAmino(object: _52.PostedPriceResponseAmino): _52.PostedPriceResponse;
                toAmino(message: _52.PostedPriceResponse): _52.PostedPriceResponseAmino;
                fromAminoMsg(object: _52.PostedPriceResponseAminoMsg): _52.PostedPriceResponse;
                fromProtoMsg(message: _52.PostedPriceResponseProtoMsg): _52.PostedPriceResponse;
                toProto(message: _52.PostedPriceResponse): Uint8Array;
                toProtoMsg(message: _52.PostedPriceResponse): _52.PostedPriceResponseProtoMsg;
            };
            CurrentPriceResponse: {
                typeUrl: string;
                encode(message: _52.CurrentPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.CurrentPriceResponse;
                fromPartial(object: Partial<_52.CurrentPriceResponse>): _52.CurrentPriceResponse;
                fromAmino(object: _52.CurrentPriceResponseAmino): _52.CurrentPriceResponse;
                toAmino(message: _52.CurrentPriceResponse): _52.CurrentPriceResponseAmino;
                fromAminoMsg(object: _52.CurrentPriceResponseAminoMsg): _52.CurrentPriceResponse;
                fromProtoMsg(message: _52.CurrentPriceResponseProtoMsg): _52.CurrentPriceResponse;
                toProto(message: _52.CurrentPriceResponse): Uint8Array;
                toProtoMsg(message: _52.CurrentPriceResponse): _52.CurrentPriceResponseProtoMsg;
            };
            MarketResponse: {
                typeUrl: string;
                encode(message: _52.MarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.MarketResponse;
                fromPartial(object: Partial<_52.MarketResponse>): _52.MarketResponse;
                fromAmino(object: _52.MarketResponseAmino): _52.MarketResponse;
                toAmino(message: _52.MarketResponse): _52.MarketResponseAmino;
                fromAminoMsg(object: _52.MarketResponseAminoMsg): _52.MarketResponse;
                fromProtoMsg(message: _52.MarketResponseProtoMsg): _52.MarketResponse;
                toProto(message: _52.MarketResponse): Uint8Array;
                toProtoMsg(message: _52.MarketResponse): _52.MarketResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _51.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
        };
    }
    namespace router {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintDeposit(value: _55.MsgMintDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateMintDeposit(value: _55.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawBurn(value: _55.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawBurnUndelegate(value: _55.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintDeposit(value: _55.MsgMintDeposit): {
                        typeUrl: string;
                        value: _55.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: _55.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: _55.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: _55.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: _55.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: _55.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: _55.MsgWithdrawBurnUndelegate;
                    };
                };
                fromJSON: {
                    mintDeposit(value: any): {
                        typeUrl: string;
                        value: _55.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: any): {
                        typeUrl: string;
                        value: _55.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: any): {
                        typeUrl: string;
                        value: _55.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: any): {
                        typeUrl: string;
                        value: _55.MsgWithdrawBurnUndelegate;
                    };
                };
                fromPartial: {
                    mintDeposit(value: _55.MsgMintDeposit): {
                        typeUrl: string;
                        value: _55.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: _55.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: _55.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: _55.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: _55.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: _55.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: _55.MsgWithdrawBurnUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/kava.router.v1beta1.MsgMintDeposit": {
                    aminoType: string;
                    toAmino: (message: _55.MsgMintDeposit) => _55.MsgMintDepositAmino;
                    fromAmino: (object: _55.MsgMintDepositAmino) => _55.MsgMintDeposit;
                };
                "/kava.router.v1beta1.MsgDelegateMintDeposit": {
                    aminoType: string;
                    toAmino: (message: _55.MsgDelegateMintDeposit) => _55.MsgDelegateMintDepositAmino;
                    fromAmino: (object: _55.MsgDelegateMintDepositAmino) => _55.MsgDelegateMintDeposit;
                };
                "/kava.router.v1beta1.MsgWithdrawBurn": {
                    aminoType: string;
                    toAmino: (message: _55.MsgWithdrawBurn) => _55.MsgWithdrawBurnAmino;
                    fromAmino: (object: _55.MsgWithdrawBurnAmino) => _55.MsgWithdrawBurn;
                };
                "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
                    aminoType: string;
                    toAmino: (message: _55.MsgWithdrawBurnUndelegate) => _55.MsgWithdrawBurnUndelegateAmino;
                    fromAmino: (object: _55.MsgWithdrawBurnUndelegateAmino) => _55.MsgWithdrawBurnUndelegate;
                };
            };
            MsgMintDeposit: {
                typeUrl: string;
                encode(message: _55.MsgMintDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgMintDeposit;
                fromPartial(object: Partial<_55.MsgMintDeposit>): _55.MsgMintDeposit;
                fromAmino(object: _55.MsgMintDepositAmino): _55.MsgMintDeposit;
                toAmino(message: _55.MsgMintDeposit): _55.MsgMintDepositAmino;
                fromAminoMsg(object: _55.MsgMintDepositAminoMsg): _55.MsgMintDeposit;
                fromProtoMsg(message: _55.MsgMintDepositProtoMsg): _55.MsgMintDeposit;
                toProto(message: _55.MsgMintDeposit): Uint8Array;
                toProtoMsg(message: _55.MsgMintDeposit): _55.MsgMintDepositProtoMsg;
            };
            MsgMintDepositResponse: {
                typeUrl: string;
                encode(_: _55.MsgMintDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgMintDepositResponse;
                fromPartial(_: Partial<_55.MsgMintDepositResponse>): _55.MsgMintDepositResponse;
                fromAmino(_: _55.MsgMintDepositResponseAmino): _55.MsgMintDepositResponse;
                toAmino(_: _55.MsgMintDepositResponse): _55.MsgMintDepositResponseAmino;
                fromAminoMsg(object: _55.MsgMintDepositResponseAminoMsg): _55.MsgMintDepositResponse;
                fromProtoMsg(message: _55.MsgMintDepositResponseProtoMsg): _55.MsgMintDepositResponse;
                toProto(message: _55.MsgMintDepositResponse): Uint8Array;
                toProtoMsg(message: _55.MsgMintDepositResponse): _55.MsgMintDepositResponseProtoMsg;
            };
            MsgDelegateMintDeposit: {
                typeUrl: string;
                encode(message: _55.MsgDelegateMintDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgDelegateMintDeposit;
                fromPartial(object: Partial<_55.MsgDelegateMintDeposit>): _55.MsgDelegateMintDeposit;
                fromAmino(object: _55.MsgDelegateMintDepositAmino): _55.MsgDelegateMintDeposit;
                toAmino(message: _55.MsgDelegateMintDeposit): _55.MsgDelegateMintDepositAmino;
                fromAminoMsg(object: _55.MsgDelegateMintDepositAminoMsg): _55.MsgDelegateMintDeposit;
                fromProtoMsg(message: _55.MsgDelegateMintDepositProtoMsg): _55.MsgDelegateMintDeposit;
                toProto(message: _55.MsgDelegateMintDeposit): Uint8Array;
                toProtoMsg(message: _55.MsgDelegateMintDeposit): _55.MsgDelegateMintDepositProtoMsg;
            };
            MsgDelegateMintDepositResponse: {
                typeUrl: string;
                encode(_: _55.MsgDelegateMintDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgDelegateMintDepositResponse;
                fromPartial(_: Partial<_55.MsgDelegateMintDepositResponse>): _55.MsgDelegateMintDepositResponse;
                fromAmino(_: _55.MsgDelegateMintDepositResponseAmino): _55.MsgDelegateMintDepositResponse;
                toAmino(_: _55.MsgDelegateMintDepositResponse): _55.MsgDelegateMintDepositResponseAmino;
                fromAminoMsg(object: _55.MsgDelegateMintDepositResponseAminoMsg): _55.MsgDelegateMintDepositResponse;
                fromProtoMsg(message: _55.MsgDelegateMintDepositResponseProtoMsg): _55.MsgDelegateMintDepositResponse;
                toProto(message: _55.MsgDelegateMintDepositResponse): Uint8Array;
                toProtoMsg(message: _55.MsgDelegateMintDepositResponse): _55.MsgDelegateMintDepositResponseProtoMsg;
            };
            MsgWithdrawBurn: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawBurn;
                fromPartial(object: Partial<_55.MsgWithdrawBurn>): _55.MsgWithdrawBurn;
                fromAmino(object: _55.MsgWithdrawBurnAmino): _55.MsgWithdrawBurn;
                toAmino(message: _55.MsgWithdrawBurn): _55.MsgWithdrawBurnAmino;
                fromAminoMsg(object: _55.MsgWithdrawBurnAminoMsg): _55.MsgWithdrawBurn;
                fromProtoMsg(message: _55.MsgWithdrawBurnProtoMsg): _55.MsgWithdrawBurn;
                toProto(message: _55.MsgWithdrawBurn): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawBurn): _55.MsgWithdrawBurnProtoMsg;
            };
            MsgWithdrawBurnResponse: {
                typeUrl: string;
                encode(_: _55.MsgWithdrawBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgWithdrawBurnResponse;
                fromPartial(_: Partial<_55.MsgWithdrawBurnResponse>): _55.MsgWithdrawBurnResponse;
                fromAmino(_: _55.MsgWithdrawBurnResponseAmino): _55.MsgWithdrawBurnResponse;
                toAmino(_: _55.MsgWithdrawBurnResponse): _55.MsgWithdrawBurnResponseAmino;
                fromAminoMsg(object: _55.MsgWithdrawBurnResponseAminoMsg): _55.MsgWithdrawBurnResponse;
                fromProtoMsg(message: _55.MsgWithdrawBurnResponseProtoMsg): _55.MsgWithdrawBurnResponse;
                toProto(message: _55.MsgWithdrawBurnResponse): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawBurnResponse): _55.MsgWithdrawBurnResponseProtoMsg;
            };
            MsgWithdrawBurnUndelegate: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawBurnUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawBurnUndelegate;
                fromPartial(object: Partial<_55.MsgWithdrawBurnUndelegate>): _55.MsgWithdrawBurnUndelegate;
                fromAmino(object: _55.MsgWithdrawBurnUndelegateAmino): _55.MsgWithdrawBurnUndelegate;
                toAmino(message: _55.MsgWithdrawBurnUndelegate): _55.MsgWithdrawBurnUndelegateAmino;
                fromAminoMsg(object: _55.MsgWithdrawBurnUndelegateAminoMsg): _55.MsgWithdrawBurnUndelegate;
                fromProtoMsg(message: _55.MsgWithdrawBurnUndelegateProtoMsg): _55.MsgWithdrawBurnUndelegate;
                toProto(message: _55.MsgWithdrawBurnUndelegate): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawBurnUndelegate): _55.MsgWithdrawBurnUndelegateProtoMsg;
            };
            MsgWithdrawBurnUndelegateResponse: {
                typeUrl: string;
                encode(_: _55.MsgWithdrawBurnUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgWithdrawBurnUndelegateResponse;
                fromPartial(_: Partial<_55.MsgWithdrawBurnUndelegateResponse>): _55.MsgWithdrawBurnUndelegateResponse;
                fromAmino(_: _55.MsgWithdrawBurnUndelegateResponseAmino): _55.MsgWithdrawBurnUndelegateResponse;
                toAmino(_: _55.MsgWithdrawBurnUndelegateResponse): _55.MsgWithdrawBurnUndelegateResponseAmino;
                fromAminoMsg(object: _55.MsgWithdrawBurnUndelegateResponseAminoMsg): _55.MsgWithdrawBurnUndelegateResponse;
                fromProtoMsg(message: _55.MsgWithdrawBurnUndelegateResponseProtoMsg): _55.MsgWithdrawBurnUndelegateResponse;
                toProto(message: _55.MsgWithdrawBurnUndelegateResponse): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawBurnUndelegateResponse): _55.MsgWithdrawBurnUndelegateResponseProtoMsg;
            };
        };
    }
    namespace savings {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                totalSupply(request?: _57.QueryTotalSupplyRequest): Promise<_57.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _59.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                    withdraw(value: _59.MsgWithdraw): {
                        typeUrl: string;
                        value: _59.MsgWithdraw;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _59.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                    withdraw(value: _59.MsgWithdraw): {
                        typeUrl: string;
                        value: _59.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.savings.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _59.MsgDeposit) => _59.MsgDepositAmino;
                    fromAmino: (object: _59.MsgDepositAmino) => _59.MsgDeposit;
                };
                "/kava.savings.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _59.MsgWithdraw) => _59.MsgWithdrawAmino;
                    fromAmino: (object: _59.MsgWithdrawAmino) => _59.MsgWithdraw;
                };
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _59.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgDeposit;
                fromPartial(object: Partial<_59.MsgDeposit>): _59.MsgDeposit;
                fromAmino(object: _59.MsgDepositAmino): _59.MsgDeposit;
                toAmino(message: _59.MsgDeposit): _59.MsgDepositAmino;
                fromAminoMsg(object: _59.MsgDepositAminoMsg): _59.MsgDeposit;
                fromProtoMsg(message: _59.MsgDepositProtoMsg): _59.MsgDeposit;
                toProto(message: _59.MsgDeposit): Uint8Array;
                toProtoMsg(message: _59.MsgDeposit): _59.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _59.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgDepositResponse;
                fromPartial(_: Partial<_59.MsgDepositResponse>): _59.MsgDepositResponse;
                fromAmino(_: _59.MsgDepositResponseAmino): _59.MsgDepositResponse;
                toAmino(_: _59.MsgDepositResponse): _59.MsgDepositResponseAmino;
                fromAminoMsg(object: _59.MsgDepositResponseAminoMsg): _59.MsgDepositResponse;
                fromProtoMsg(message: _59.MsgDepositResponseProtoMsg): _59.MsgDepositResponse;
                toProto(message: _59.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _59.MsgDepositResponse): _59.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _59.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgWithdraw;
                fromPartial(object: Partial<_59.MsgWithdraw>): _59.MsgWithdraw;
                fromAmino(object: _59.MsgWithdrawAmino): _59.MsgWithdraw;
                toAmino(message: _59.MsgWithdraw): _59.MsgWithdrawAmino;
                fromAminoMsg(object: _59.MsgWithdrawAminoMsg): _59.MsgWithdraw;
                fromProtoMsg(message: _59.MsgWithdrawProtoMsg): _59.MsgWithdraw;
                toProto(message: _59.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _59.MsgWithdraw): _59.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _59.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgWithdrawResponse;
                fromPartial(_: Partial<_59.MsgWithdrawResponse>): _59.MsgWithdrawResponse;
                fromAmino(_: _59.MsgWithdrawResponseAmino): _59.MsgWithdrawResponse;
                toAmino(_: _59.MsgWithdrawResponse): _59.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _59.MsgWithdrawResponseAminoMsg): _59.MsgWithdrawResponse;
                fromProtoMsg(message: _59.MsgWithdrawResponseProtoMsg): _59.MsgWithdrawResponse;
                toProto(message: _59.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _59.MsgWithdrawResponse): _59.MsgWithdrawResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _58.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.Params;
                fromPartial(object: Partial<_58.Params>): _58.Params;
                fromAmino(object: _58.ParamsAmino): _58.Params;
                toAmino(message: _58.Params): _58.ParamsAmino;
                fromAminoMsg(object: _58.ParamsAminoMsg): _58.Params;
                fromProtoMsg(message: _58.ParamsProtoMsg): _58.Params;
                toProto(message: _58.Params): Uint8Array;
                toProtoMsg(message: _58.Params): _58.ParamsProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _58.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.Deposit;
                fromPartial(object: Partial<_58.Deposit>): _58.Deposit;
                fromAmino(object: _58.DepositAmino): _58.Deposit;
                toAmino(message: _58.Deposit): _58.DepositAmino;
                fromAminoMsg(object: _58.DepositAminoMsg): _58.Deposit;
                fromProtoMsg(message: _58.DepositProtoMsg): _58.Deposit;
                toProto(message: _58.Deposit): Uint8Array;
                toProtoMsg(message: _58.Deposit): _58.DepositProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _57.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.QueryParamsRequest;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                fromAmino(_: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                toAmino(_: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
                fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
                fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
                toProto(message: _57.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _57.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
                fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
                toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
                fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
                fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
                toProto(message: _57.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _57.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDepositsRequest;
                fromPartial(object: Partial<_57.QueryDepositsRequest>): _57.QueryDepositsRequest;
                fromAmino(object: _57.QueryDepositsRequestAmino): _57.QueryDepositsRequest;
                toAmino(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestAmino;
                fromAminoMsg(object: _57.QueryDepositsRequestAminoMsg): _57.QueryDepositsRequest;
                fromProtoMsg(message: _57.QueryDepositsRequestProtoMsg): _57.QueryDepositsRequest;
                toProto(message: _57.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _57.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDepositsResponse;
                fromPartial(object: Partial<_57.QueryDepositsResponse>): _57.QueryDepositsResponse;
                fromAmino(object: _57.QueryDepositsResponseAmino): _57.QueryDepositsResponse;
                toAmino(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseAmino;
                fromAminoMsg(object: _57.QueryDepositsResponseAminoMsg): _57.QueryDepositsResponse;
                fromProtoMsg(message: _57.QueryDepositsResponseProtoMsg): _57.QueryDepositsResponse;
                toProto(message: _57.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(_: _57.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _57.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_57.QueryTotalSupplyRequest>): _57.QueryTotalSupplyRequest;
                fromAmino(_: _57.QueryTotalSupplyRequestAmino): _57.QueryTotalSupplyRequest;
                toAmino(_: _57.QueryTotalSupplyRequest): _57.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _57.QueryTotalSupplyRequestAminoMsg): _57.QueryTotalSupplyRequest;
                fromProtoMsg(message: _57.QueryTotalSupplyRequestProtoMsg): _57.QueryTotalSupplyRequest;
                toProto(message: _57.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _57.QueryTotalSupplyRequest): _57.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _57.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_57.QueryTotalSupplyResponse>): _57.QueryTotalSupplyResponse;
                fromAmino(object: _57.QueryTotalSupplyResponseAmino): _57.QueryTotalSupplyResponse;
                toAmino(message: _57.QueryTotalSupplyResponse): _57.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _57.QueryTotalSupplyResponseAminoMsg): _57.QueryTotalSupplyResponse;
                fromProtoMsg(message: _57.QueryTotalSupplyResponseProtoMsg): _57.QueryTotalSupplyResponse;
                toProto(message: _57.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _57.QueryTotalSupplyResponse): _57.QueryTotalSupplyResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _56.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
                fromAmino(object: _56.GenesisStateAmino): _56.GenesisState;
                toAmino(message: _56.GenesisState): _56.GenesisStateAmino;
                fromAminoMsg(object: _56.GenesisStateAminoMsg): _56.GenesisState;
                fromProtoMsg(message: _56.GenesisStateProtoMsg): _56.GenesisState;
                toProto(message: _56.GenesisState): Uint8Array;
                toProtoMsg(message: _56.GenesisState): _56.GenesisStateProtoMsg;
            };
        };
    }
    namespace swap {
        const v1beta1: {
            MsgClientImpl: typeof _253.MsgClientImpl;
            QueryClientImpl: typeof _238.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                pools(request: _61.QueryPoolsRequest): Promise<_61.QueryPoolsResponse>;
                deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _63.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactForTokens(value: _63.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapForExactTokens(value: _63.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                    withdraw(value: _63.MsgWithdraw): {
                        typeUrl: string;
                        value: _63.MsgWithdraw;
                    };
                    swapExactForTokens(value: _63.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _63.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _63.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _63.MsgSwapForExactTokens;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _63.MsgWithdraw;
                    };
                    swapExactForTokens(value: any): {
                        typeUrl: string;
                        value: _63.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: any): {
                        typeUrl: string;
                        value: _63.MsgSwapForExactTokens;
                    };
                };
                fromPartial: {
                    deposit(value: _63.MsgDeposit): {
                        typeUrl: string;
                        value: _63.MsgDeposit;
                    };
                    withdraw(value: _63.MsgWithdraw): {
                        typeUrl: string;
                        value: _63.MsgWithdraw;
                    };
                    swapExactForTokens(value: _63.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _63.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _63.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _63.MsgSwapForExactTokens;
                    };
                };
            };
            AminoConverter: {
                "/kava.swap.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _63.MsgDeposit) => _63.MsgDepositAmino;
                    fromAmino: (object: _63.MsgDepositAmino) => _63.MsgDeposit;
                };
                "/kava.swap.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _63.MsgWithdraw) => _63.MsgWithdrawAmino;
                    fromAmino: (object: _63.MsgWithdrawAmino) => _63.MsgWithdraw;
                };
                "/kava.swap.v1beta1.MsgSwapExactForTokens": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSwapExactForTokens) => _63.MsgSwapExactForTokensAmino;
                    fromAmino: (object: _63.MsgSwapExactForTokensAmino) => _63.MsgSwapExactForTokens;
                };
                "/kava.swap.v1beta1.MsgSwapForExactTokens": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSwapForExactTokens) => _63.MsgSwapForExactTokensAmino;
                    fromAmino: (object: _63.MsgSwapForExactTokensAmino) => _63.MsgSwapForExactTokens;
                };
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _63.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgDeposit;
                fromPartial(object: Partial<_63.MsgDeposit>): _63.MsgDeposit;
                fromAmino(object: _63.MsgDepositAmino): _63.MsgDeposit;
                toAmino(message: _63.MsgDeposit): _63.MsgDepositAmino;
                fromAminoMsg(object: _63.MsgDepositAminoMsg): _63.MsgDeposit;
                fromProtoMsg(message: _63.MsgDepositProtoMsg): _63.MsgDeposit;
                toProto(message: _63.MsgDeposit): Uint8Array;
                toProtoMsg(message: _63.MsgDeposit): _63.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _63.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgDepositResponse;
                fromPartial(_: Partial<_63.MsgDepositResponse>): _63.MsgDepositResponse;
                fromAmino(_: _63.MsgDepositResponseAmino): _63.MsgDepositResponse;
                toAmino(_: _63.MsgDepositResponse): _63.MsgDepositResponseAmino;
                fromAminoMsg(object: _63.MsgDepositResponseAminoMsg): _63.MsgDepositResponse;
                fromProtoMsg(message: _63.MsgDepositResponseProtoMsg): _63.MsgDepositResponse;
                toProto(message: _63.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _63.MsgDepositResponse): _63.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _63.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgWithdraw;
                fromPartial(object: Partial<_63.MsgWithdraw>): _63.MsgWithdraw;
                fromAmino(object: _63.MsgWithdrawAmino): _63.MsgWithdraw;
                toAmino(message: _63.MsgWithdraw): _63.MsgWithdrawAmino;
                fromAminoMsg(object: _63.MsgWithdrawAminoMsg): _63.MsgWithdraw;
                fromProtoMsg(message: _63.MsgWithdrawProtoMsg): _63.MsgWithdraw;
                toProto(message: _63.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _63.MsgWithdraw): _63.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _63.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgWithdrawResponse;
                fromPartial(_: Partial<_63.MsgWithdrawResponse>): _63.MsgWithdrawResponse;
                fromAmino(_: _63.MsgWithdrawResponseAmino): _63.MsgWithdrawResponse;
                toAmino(_: _63.MsgWithdrawResponse): _63.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _63.MsgWithdrawResponseAminoMsg): _63.MsgWithdrawResponse;
                fromProtoMsg(message: _63.MsgWithdrawResponseProtoMsg): _63.MsgWithdrawResponse;
                toProto(message: _63.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawResponse): _63.MsgWithdrawResponseProtoMsg;
            };
            MsgSwapExactForTokens: {
                typeUrl: string;
                encode(message: _63.MsgSwapExactForTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgSwapExactForTokens;
                fromPartial(object: Partial<_63.MsgSwapExactForTokens>): _63.MsgSwapExactForTokens;
                fromAmino(object: _63.MsgSwapExactForTokensAmino): _63.MsgSwapExactForTokens;
                toAmino(message: _63.MsgSwapExactForTokens): _63.MsgSwapExactForTokensAmino;
                fromAminoMsg(object: _63.MsgSwapExactForTokensAminoMsg): _63.MsgSwapExactForTokens;
                fromProtoMsg(message: _63.MsgSwapExactForTokensProtoMsg): _63.MsgSwapExactForTokens;
                toProto(message: _63.MsgSwapExactForTokens): Uint8Array;
                toProtoMsg(message: _63.MsgSwapExactForTokens): _63.MsgSwapExactForTokensProtoMsg;
            };
            MsgSwapExactForTokensResponse: {
                typeUrl: string;
                encode(_: _63.MsgSwapExactForTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgSwapExactForTokensResponse;
                fromPartial(_: Partial<_63.MsgSwapExactForTokensResponse>): _63.MsgSwapExactForTokensResponse;
                fromAmino(_: _63.MsgSwapExactForTokensResponseAmino): _63.MsgSwapExactForTokensResponse;
                toAmino(_: _63.MsgSwapExactForTokensResponse): _63.MsgSwapExactForTokensResponseAmino;
                fromAminoMsg(object: _63.MsgSwapExactForTokensResponseAminoMsg): _63.MsgSwapExactForTokensResponse;
                fromProtoMsg(message: _63.MsgSwapExactForTokensResponseProtoMsg): _63.MsgSwapExactForTokensResponse;
                toProto(message: _63.MsgSwapExactForTokensResponse): Uint8Array;
                toProtoMsg(message: _63.MsgSwapExactForTokensResponse): _63.MsgSwapExactForTokensResponseProtoMsg;
            };
            MsgSwapForExactTokens: {
                typeUrl: string;
                encode(message: _63.MsgSwapForExactTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgSwapForExactTokens;
                fromPartial(object: Partial<_63.MsgSwapForExactTokens>): _63.MsgSwapForExactTokens;
                fromAmino(object: _63.MsgSwapForExactTokensAmino): _63.MsgSwapForExactTokens;
                toAmino(message: _63.MsgSwapForExactTokens): _63.MsgSwapForExactTokensAmino;
                fromAminoMsg(object: _63.MsgSwapForExactTokensAminoMsg): _63.MsgSwapForExactTokens;
                fromProtoMsg(message: _63.MsgSwapForExactTokensProtoMsg): _63.MsgSwapForExactTokens;
                toProto(message: _63.MsgSwapForExactTokens): Uint8Array;
                toProtoMsg(message: _63.MsgSwapForExactTokens): _63.MsgSwapForExactTokensProtoMsg;
            };
            MsgSwapForExactTokensResponse: {
                typeUrl: string;
                encode(_: _63.MsgSwapForExactTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgSwapForExactTokensResponse;
                fromPartial(_: Partial<_63.MsgSwapForExactTokensResponse>): _63.MsgSwapForExactTokensResponse;
                fromAmino(_: _63.MsgSwapForExactTokensResponseAmino): _63.MsgSwapForExactTokensResponse;
                toAmino(_: _63.MsgSwapForExactTokensResponse): _63.MsgSwapForExactTokensResponseAmino;
                fromAminoMsg(object: _63.MsgSwapForExactTokensResponseAminoMsg): _63.MsgSwapForExactTokensResponse;
                fromProtoMsg(message: _63.MsgSwapForExactTokensResponseProtoMsg): _63.MsgSwapForExactTokensResponse;
                toProto(message: _63.MsgSwapForExactTokensResponse): Uint8Array;
                toProtoMsg(message: _63.MsgSwapForExactTokensResponse): _63.MsgSwapForExactTokensResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _62.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.Params;
                fromPartial(object: Partial<_62.Params>): _62.Params;
                fromAmino(object: _62.ParamsAmino): _62.Params;
                toAmino(message: _62.Params): _62.ParamsAmino;
                fromAminoMsg(object: _62.ParamsAminoMsg): _62.Params;
                fromProtoMsg(message: _62.ParamsProtoMsg): _62.Params;
                toProto(message: _62.Params): Uint8Array;
                toProtoMsg(message: _62.Params): _62.ParamsProtoMsg;
            };
            AllowedPool: {
                typeUrl: string;
                encode(message: _62.AllowedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.AllowedPool;
                fromPartial(object: Partial<_62.AllowedPool>): _62.AllowedPool;
                fromAmino(object: _62.AllowedPoolAmino): _62.AllowedPool;
                toAmino(message: _62.AllowedPool): _62.AllowedPoolAmino;
                fromAminoMsg(object: _62.AllowedPoolAminoMsg): _62.AllowedPool;
                fromProtoMsg(message: _62.AllowedPoolProtoMsg): _62.AllowedPool;
                toProto(message: _62.AllowedPool): Uint8Array;
                toProtoMsg(message: _62.AllowedPool): _62.AllowedPoolProtoMsg;
            };
            PoolRecord: {
                typeUrl: string;
                encode(message: _62.PoolRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PoolRecord;
                fromPartial(object: Partial<_62.PoolRecord>): _62.PoolRecord;
                fromAmino(object: _62.PoolRecordAmino): _62.PoolRecord;
                toAmino(message: _62.PoolRecord): _62.PoolRecordAmino;
                fromAminoMsg(object: _62.PoolRecordAminoMsg): _62.PoolRecord;
                fromProtoMsg(message: _62.PoolRecordProtoMsg): _62.PoolRecord;
                toProto(message: _62.PoolRecord): Uint8Array;
                toProtoMsg(message: _62.PoolRecord): _62.PoolRecordProtoMsg;
            };
            ShareRecord: {
                typeUrl: string;
                encode(message: _62.ShareRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.ShareRecord;
                fromPartial(object: Partial<_62.ShareRecord>): _62.ShareRecord;
                fromAmino(object: _62.ShareRecordAmino): _62.ShareRecord;
                toAmino(message: _62.ShareRecord): _62.ShareRecordAmino;
                fromAminoMsg(object: _62.ShareRecordAminoMsg): _62.ShareRecord;
                fromProtoMsg(message: _62.ShareRecordProtoMsg): _62.ShareRecord;
                toProto(message: _62.ShareRecord): Uint8Array;
                toProtoMsg(message: _62.ShareRecord): _62.ShareRecordProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _61.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _61.QueryParamsRequest;
                fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                fromAmino(_: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                toAmino(_: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
                fromAminoMsg(object: _61.QueryParamsRequestAminoMsg): _61.QueryParamsRequest;
                fromProtoMsg(message: _61.QueryParamsRequestProtoMsg): _61.QueryParamsRequest;
                toProto(message: _61.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _61.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryParamsResponse;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
                fromAmino(object: _61.QueryParamsResponseAmino): _61.QueryParamsResponse;
                toAmino(message: _61.QueryParamsResponse): _61.QueryParamsResponseAmino;
                fromAminoMsg(object: _61.QueryParamsResponseAminoMsg): _61.QueryParamsResponse;
                fromProtoMsg(message: _61.QueryParamsResponseProtoMsg): _61.QueryParamsResponse;
                toProto(message: _61.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _61.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryPoolsRequest;
                fromPartial(object: Partial<_61.QueryPoolsRequest>): _61.QueryPoolsRequest;
                fromAmino(object: _61.QueryPoolsRequestAmino): _61.QueryPoolsRequest;
                toAmino(message: _61.QueryPoolsRequest): _61.QueryPoolsRequestAmino;
                fromAminoMsg(object: _61.QueryPoolsRequestAminoMsg): _61.QueryPoolsRequest;
                fromProtoMsg(message: _61.QueryPoolsRequestProtoMsg): _61.QueryPoolsRequest;
                toProto(message: _61.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryPoolsRequest): _61.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _61.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryPoolsResponse;
                fromPartial(object: Partial<_61.QueryPoolsResponse>): _61.QueryPoolsResponse;
                fromAmino(object: _61.QueryPoolsResponseAmino): _61.QueryPoolsResponse;
                toAmino(message: _61.QueryPoolsResponse): _61.QueryPoolsResponseAmino;
                fromAminoMsg(object: _61.QueryPoolsResponseAminoMsg): _61.QueryPoolsResponse;
                fromProtoMsg(message: _61.QueryPoolsResponseProtoMsg): _61.QueryPoolsResponse;
                toProto(message: _61.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryPoolsResponse): _61.QueryPoolsResponseProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _61.PoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.PoolResponse;
                fromPartial(object: Partial<_61.PoolResponse>): _61.PoolResponse;
                fromAmino(object: _61.PoolResponseAmino): _61.PoolResponse;
                toAmino(message: _61.PoolResponse): _61.PoolResponseAmino;
                fromAminoMsg(object: _61.PoolResponseAminoMsg): _61.PoolResponse;
                fromProtoMsg(message: _61.PoolResponseProtoMsg): _61.PoolResponse;
                toProto(message: _61.PoolResponse): Uint8Array;
                toProtoMsg(message: _61.PoolResponse): _61.PoolResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _61.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositsRequest;
                fromPartial(object: Partial<_61.QueryDepositsRequest>): _61.QueryDepositsRequest;
                fromAmino(object: _61.QueryDepositsRequestAmino): _61.QueryDepositsRequest;
                toAmino(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestAmino;
                fromAminoMsg(object: _61.QueryDepositsRequestAminoMsg): _61.QueryDepositsRequest;
                fromProtoMsg(message: _61.QueryDepositsRequestProtoMsg): _61.QueryDepositsRequest;
                toProto(message: _61.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsRequest): _61.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _61.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.QueryDepositsResponse;
                fromPartial(object: Partial<_61.QueryDepositsResponse>): _61.QueryDepositsResponse;
                fromAmino(object: _61.QueryDepositsResponseAmino): _61.QueryDepositsResponse;
                toAmino(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseAmino;
                fromAminoMsg(object: _61.QueryDepositsResponseAminoMsg): _61.QueryDepositsResponse;
                fromProtoMsg(message: _61.QueryDepositsResponseProtoMsg): _61.QueryDepositsResponse;
                toProto(message: _61.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _61.QueryDepositsResponse): _61.QueryDepositsResponseProtoMsg;
            };
            DepositResponse: {
                typeUrl: string;
                encode(message: _61.DepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.DepositResponse;
                fromPartial(object: Partial<_61.DepositResponse>): _61.DepositResponse;
                fromAmino(object: _61.DepositResponseAmino): _61.DepositResponse;
                toAmino(message: _61.DepositResponse): _61.DepositResponseAmino;
                fromAminoMsg(object: _61.DepositResponseAminoMsg): _61.DepositResponse;
                fromProtoMsg(message: _61.DepositResponseProtoMsg): _61.DepositResponse;
                toProto(message: _61.DepositResponse): Uint8Array;
                toProtoMsg(message: _61.DepositResponse): _61.DepositResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                toProto(message: _60.GenesisState): Uint8Array;
                toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            kava: {
                auction: {
                    v1beta1: _239.MsgClientImpl;
                };
                bep3: {
                    v1beta1: _240.MsgClientImpl;
                };
                cdp: {
                    v1beta1: _241.MsgClientImpl;
                };
                committee: {
                    v1beta1: _242.MsgClientImpl;
                };
                community: {
                    v1beta1: _243.MsgClientImpl;
                };
                earn: {
                    v1beta1: _244.MsgClientImpl;
                };
                evmutil: {
                    v1beta1: _245.MsgClientImpl;
                };
                hard: {
                    v1beta1: _246.MsgClientImpl;
                };
                incentive: {
                    v1beta1: _247.MsgClientImpl;
                };
                issuance: {
                    v1beta1: _248.MsgClientImpl;
                };
                liquid: {
                    v1beta1: _249.MsgClientImpl;
                };
                pricefeed: {
                    v1beta1: _250.MsgClientImpl;
                };
                router: {
                    v1beta1: _251.MsgClientImpl;
                };
                savings: {
                    v1beta1: _252.MsgClientImpl;
                };
                swap: {
                    v1beta1: _253.MsgClientImpl;
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
                        balance(request?: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                        totalBalance(request?: _19.QueryTotalBalanceRequest): Promise<_19.QueryTotalBalanceResponse>;
                    };
                };
                earn: {
                    v1beta1: {
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        vaults(request?: _24.QueryVaultsRequest): Promise<_24.QueryVaultsResponse>;
                        vault(request: _24.QueryVaultRequest): Promise<_24.QueryVaultResponse>;
                        deposits(request: _24.QueryDepositsRequest): Promise<_24.QueryDepositsResponse>;
                        totalSupply(request?: _24.QueryTotalSupplyRequest): Promise<_24.QueryTotalSupplyResponse>;
                    };
                };
                evmutil: {
                    v1beta1: {
                        params(request?: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                        deployedCosmosCoinContracts(request: _30.QueryDeployedCosmosCoinContractsRequest): Promise<_30.QueryDeployedCosmosCoinContractsResponse>;
                    };
                };
                hard: {
                    v1beta1: {
                        params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        accounts(request?: _34.QueryAccountsRequest): Promise<_34.QueryAccountsResponse>;
                        deposits(request: _34.QueryDepositsRequest): Promise<_34.QueryDepositsResponse>;
                        unsyncedDeposits(request: _34.QueryUnsyncedDepositsRequest): Promise<_34.QueryUnsyncedDepositsResponse>;
                        totalDeposited(request: _34.QueryTotalDepositedRequest): Promise<_34.QueryTotalDepositedResponse>;
                        borrows(request: _34.QueryBorrowsRequest): Promise<_34.QueryBorrowsResponse>;
                        unsyncedBorrows(request: _34.QueryUnsyncedBorrowsRequest): Promise<_34.QueryUnsyncedBorrowsResponse>;
                        totalBorrowed(request: _34.QueryTotalBorrowedRequest): Promise<_34.QueryTotalBorrowedResponse>;
                        interestRate(request: _34.QueryInterestRateRequest): Promise<_34.QueryInterestRateResponse>;
                        reserves(request: _34.QueryReservesRequest): Promise<_34.QueryReservesResponse>;
                        interestFactors(request: _34.QueryInterestFactorsRequest): Promise<_34.QueryInterestFactorsResponse>;
                    };
                };
                incentive: {
                    v1beta1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        rewards(request: _40.QueryRewardsRequest): Promise<_40.QueryRewardsResponse>;
                        rewardFactors(request?: _40.QueryRewardFactorsRequest): Promise<_40.QueryRewardFactorsResponse>;
                        apy(request?: _40.QueryApyRequest): Promise<_40.QueryApyResponse>;
                    };
                };
                issuance: {
                    v1beta1: {
                        params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                    };
                };
                kavadist: {
                    v1beta1: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        balance(request?: _48.QueryBalanceRequest): Promise<_48.QueryBalanceResponse>;
                    };
                };
                liquid: {
                    v1beta1: {
                        delegatedBalance(request: _49.QueryDelegatedBalanceRequest): Promise<_49.QueryDelegatedBalanceResponse>;
                        totalSupply(request?: _49.QueryTotalSupplyRequest): Promise<_49.QueryTotalSupplyResponse>;
                    };
                };
                pricefeed: {
                    v1beta1: {
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        price(request: _52.QueryPriceRequest): Promise<_52.QueryPriceResponse>;
                        prices(request?: _52.QueryPricesRequest): Promise<_52.QueryPricesResponse>;
                        rawPrices(request: _52.QueryRawPricesRequest): Promise<_52.QueryRawPricesResponse>;
                        oracles(request: _52.QueryOraclesRequest): Promise<_52.QueryOraclesResponse>;
                        markets(request?: _52.QueryMarketsRequest): Promise<_52.QueryMarketsResponse>;
                    };
                };
                savings: {
                    v1beta1: {
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                        totalSupply(request?: _57.QueryTotalSupplyRequest): Promise<_57.QueryTotalSupplyResponse>;
                    };
                };
                swap: {
                    v1beta1: {
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        pools(request: _61.QueryPoolsRequest): Promise<_61.QueryPoolsResponse>;
                        deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
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
            kava: {
                auction: {
                    v1beta1: _209.LCDQueryClient;
                };
                bep3: {
                    v1beta1: _210.LCDQueryClient;
                };
                cdp: {
                    v1beta1: _211.LCDQueryClient;
                };
                committee: {
                    v1beta1: _212.LCDQueryClient;
                };
                community: {
                    v1beta1: _213.LCDQueryClient;
                };
                earn: {
                    v1beta1: _214.LCDQueryClient;
                };
                evmutil: {
                    v1beta1: _215.LCDQueryClient;
                };
                hard: {
                    v1beta1: _216.LCDQueryClient;
                };
                incentive: {
                    v1beta1: _217.LCDQueryClient;
                };
                issuance: {
                    v1beta1: _218.LCDQueryClient;
                };
                kavadist: {
                    v1beta1: _219.LCDQueryClient;
                };
                liquid: {
                    v1beta1: _220.LCDQueryClient;
                };
                pricefeed: {
                    v1beta1: _221.LCDQueryClient;
                };
                savings: {
                    v1beta1: _222.LCDQueryClient;
                };
                swap: {
                    v1beta1: _223.LCDQueryClient;
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
