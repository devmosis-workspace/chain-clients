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
import * as _208 from "./auction/v1beta1/query.lcd";
import * as _209 from "./bep3/v1beta1/query.lcd";
import * as _210 from "./cdp/v1beta1/query.lcd";
import * as _211 from "./committee/v1beta1/query.lcd";
import * as _212 from "./community/v1beta1/query.lcd";
import * as _213 from "./earn/v1beta1/query.lcd";
import * as _214 from "./evmutil/v1beta1/query.lcd";
import * as _215 from "./hard/v1beta1/query.lcd";
import * as _216 from "./incentive/v1beta1/query.lcd";
import * as _217 from "./issuance/v1beta1/query.lcd";
import * as _218 from "./kavadist/v1beta1/query.lcd";
import * as _219 from "./liquid/v1beta1/query.lcd";
import * as _220 from "./pricefeed/v1beta1/query.lcd";
import * as _221 from "./savings/v1beta1/query.lcd";
import * as _222 from "./swap/v1beta1/query.lcd";
import * as _223 from "./auction/v1beta1/query.rpc.Query";
import * as _224 from "./bep3/v1beta1/query.rpc.Query";
import * as _225 from "./cdp/v1beta1/query.rpc.Query";
import * as _226 from "./committee/v1beta1/query.rpc.Query";
import * as _227 from "./community/v1beta1/query.rpc.Query";
import * as _228 from "./earn/v1beta1/query.rpc.Query";
import * as _229 from "./evmutil/v1beta1/query.rpc.Query";
import * as _230 from "./hard/v1beta1/query.rpc.Query";
import * as _231 from "./incentive/v1beta1/query.rpc.Query";
import * as _232 from "./issuance/v1beta1/query.rpc.Query";
import * as _233 from "./kavadist/v1beta1/query.rpc.Query";
import * as _234 from "./liquid/v1beta1/query.rpc.Query";
import * as _235 from "./pricefeed/v1beta1/query.rpc.Query";
import * as _236 from "./savings/v1beta1/query.rpc.Query";
import * as _237 from "./swap/v1beta1/query.rpc.Query";
import * as _238 from "./auction/v1beta1/tx.rpc.msg";
import * as _239 from "./bep3/v1beta1/tx.rpc.msg";
import * as _240 from "./cdp/v1beta1/tx.rpc.msg";
import * as _241 from "./committee/v1beta1/tx.rpc.msg";
import * as _242 from "./community/v1beta1/tx.rpc.msg";
import * as _243 from "./earn/v1beta1/tx.rpc.msg";
import * as _244 from "./evmutil/v1beta1/tx.rpc.msg";
import * as _245 from "./hard/v1beta1/tx.rpc.msg";
import * as _246 from "./incentive/v1beta1/tx.rpc.msg";
import * as _247 from "./issuance/v1beta1/tx.rpc.msg";
import * as _248 from "./liquid/v1beta1/tx.rpc.msg";
import * as _249 from "./pricefeed/v1beta1/tx.rpc.msg";
import * as _250 from "./router/v1beta1/tx.rpc.msg";
import * as _251 from "./savings/v1beta1/tx.rpc.msg";
import * as _252 from "./swap/v1beta1/tx.rpc.msg";
export declare namespace kava {
    namespace auction {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                auction(request: _2.QueryAuctionRequest): Promise<_2.QueryAuctionResponse>;
                auctions(request: _2.QueryAuctionsRequest): Promise<_2.QueryAuctionsResponse>;
                nextAuctionID(request?: _2.QueryNextAuctionIDRequest): Promise<_2.QueryNextAuctionIDResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
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
                    toAmino: ({ auctionId, bidder, amount }: _3.MsgPlaceBid) => {
                        auction_id: string;
                        bidder: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ auction_id, bidder, amount }: {
                        auction_id: string;
                        bidder: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _3.MsgPlaceBid;
                };
            };
            MsgPlaceBid: {
                encode(message: _3.MsgPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgPlaceBid;
                fromPartial(object: Partial<_3.MsgPlaceBid>): _3.MsgPlaceBid;
            };
            MsgPlaceBidResponse: {
                encode(_: _3.MsgPlaceBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgPlaceBidResponse;
                fromPartial(_: Partial<_3.MsgPlaceBidResponse>): _3.MsgPlaceBidResponse;
            };
            QueryParamsRequest: {
                encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
            };
            QueryAuctionRequest: {
                encode(message: _2.QueryAuctionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryAuctionRequest;
                fromPartial(object: Partial<_2.QueryAuctionRequest>): _2.QueryAuctionRequest;
            };
            QueryAuctionResponse: {
                encode(message: _2.QueryAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryAuctionResponse;
                fromPartial(object: Partial<_2.QueryAuctionResponse>): _2.QueryAuctionResponse;
            };
            QueryAuctionsRequest: {
                encode(message: _2.QueryAuctionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryAuctionsRequest;
                fromPartial(object: Partial<_2.QueryAuctionsRequest>): _2.QueryAuctionsRequest;
            };
            QueryAuctionsResponse: {
                encode(message: _2.QueryAuctionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryAuctionsResponse;
                fromPartial(object: Partial<_2.QueryAuctionsResponse>): _2.QueryAuctionsResponse;
            };
            QueryNextAuctionIDRequest: {
                encode(_: _2.QueryNextAuctionIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryNextAuctionIDRequest;
                fromPartial(_: Partial<_2.QueryNextAuctionIDRequest>): _2.QueryNextAuctionIDRequest;
            };
            QueryNextAuctionIDResponse: {
                encode(message: _2.QueryNextAuctionIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryNextAuctionIDResponse;
                fromPartial(object: Partial<_2.QueryNextAuctionIDResponse>): _2.QueryNextAuctionIDResponse;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            };
            Params: {
                encode(message: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.Params;
                fromPartial(object: Partial<_1.Params>): _1.Params;
            };
            BaseAuction: {
                encode(message: _0.BaseAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.BaseAuction;
                fromPartial(object: Partial<_0.BaseAuction>): _0.BaseAuction;
            };
            SurplusAuction: {
                encode(message: _0.SurplusAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.SurplusAuction;
                fromPartial(object: Partial<_0.SurplusAuction>): _0.SurplusAuction;
            };
            DebtAuction: {
                encode(message: _0.DebtAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.DebtAuction;
                fromPartial(object: Partial<_0.DebtAuction>): _0.DebtAuction;
            };
            CollateralAuction: {
                encode(message: _0.CollateralAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.CollateralAuction;
                fromPartial(object: Partial<_0.CollateralAuction>): _0.CollateralAuction;
            };
            WeightedAddresses: {
                encode(message: _0.WeightedAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.WeightedAddresses;
                fromPartial(object: Partial<_0.WeightedAddresses>): _0.WeightedAddresses;
            };
        };
    }
    namespace bep3 {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                assetSupply(request: _6.QueryAssetSupplyRequest): Promise<_6.QueryAssetSupplyResponse>;
                assetSupplies(request?: _6.QueryAssetSuppliesRequest): Promise<_6.QueryAssetSuppliesResponse>;
                atomicSwap(request: _6.QueryAtomicSwapRequest): Promise<_6.QueryAtomicSwapResponse>;
                atomicSwaps(request: _6.QueryAtomicSwapsRequest): Promise<_6.QueryAtomicSwapsResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
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
                    toAmino: ({ from, to, recipientOtherChain, senderOtherChain, randomNumberHash, timestamp, amount, heightSpan }: _7.MsgCreateAtomicSwap) => {
                        from: string;
                        to: string;
                        recipient_other_chain: string;
                        sender_other_chain: string;
                        random_number_hash: string;
                        timestamp: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        height_span: string;
                    };
                    fromAmino: ({ from, to, recipient_other_chain, sender_other_chain, random_number_hash, timestamp, amount, height_span }: {
                        from: string;
                        to: string;
                        recipient_other_chain: string;
                        sender_other_chain: string;
                        random_number_hash: string;
                        timestamp: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        height_span: string;
                    }) => _7.MsgCreateAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, swapId, randomNumber }: _7.MsgClaimAtomicSwap) => {
                        from: string;
                        swap_id: string;
                        random_number: string;
                    };
                    fromAmino: ({ from, swap_id, random_number }: {
                        from: string;
                        swap_id: string;
                        random_number: string;
                    }) => _7.MsgClaimAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, swapId }: _7.MsgRefundAtomicSwap) => {
                        from: string;
                        swap_id: string;
                    };
                    fromAmino: ({ from, swap_id }: {
                        from: string;
                        swap_id: string;
                    }) => _7.MsgRefundAtomicSwap;
                };
            };
            MsgCreateAtomicSwap: {
                encode(message: _7.MsgCreateAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MsgCreateAtomicSwap;
                fromPartial(object: Partial<_7.MsgCreateAtomicSwap>): _7.MsgCreateAtomicSwap;
            };
            MsgCreateAtomicSwapResponse: {
                encode(_: _7.MsgCreateAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _7.MsgCreateAtomicSwapResponse;
                fromPartial(_: Partial<_7.MsgCreateAtomicSwapResponse>): _7.MsgCreateAtomicSwapResponse;
            };
            MsgClaimAtomicSwap: {
                encode(message: _7.MsgClaimAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MsgClaimAtomicSwap;
                fromPartial(object: Partial<_7.MsgClaimAtomicSwap>): _7.MsgClaimAtomicSwap;
            };
            MsgClaimAtomicSwapResponse: {
                encode(_: _7.MsgClaimAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _7.MsgClaimAtomicSwapResponse;
                fromPartial(_: Partial<_7.MsgClaimAtomicSwapResponse>): _7.MsgClaimAtomicSwapResponse;
            };
            MsgRefundAtomicSwap: {
                encode(message: _7.MsgRefundAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.MsgRefundAtomicSwap;
                fromPartial(object: Partial<_7.MsgRefundAtomicSwap>): _7.MsgRefundAtomicSwap;
            };
            MsgRefundAtomicSwapResponse: {
                encode(_: _7.MsgRefundAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _7.MsgRefundAtomicSwapResponse;
                fromPartial(_: Partial<_7.MsgRefundAtomicSwapResponse>): _7.MsgRefundAtomicSwapResponse;
            };
            QueryParamsRequest: {
                encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _6.QueryParamsRequest;
                fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryParamsResponse;
                fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
            };
            QueryAssetSupplyRequest: {
                encode(message: _6.QueryAssetSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAssetSupplyRequest;
                fromPartial(object: Partial<_6.QueryAssetSupplyRequest>): _6.QueryAssetSupplyRequest;
            };
            AssetSupplyResponse: {
                encode(message: _6.AssetSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.AssetSupplyResponse;
                fromPartial(object: Partial<_6.AssetSupplyResponse>): _6.AssetSupplyResponse;
            };
            QueryAssetSupplyResponse: {
                encode(message: _6.QueryAssetSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAssetSupplyResponse;
                fromPartial(object: Partial<_6.QueryAssetSupplyResponse>): _6.QueryAssetSupplyResponse;
            };
            QueryAssetSuppliesRequest: {
                encode(_: _6.QueryAssetSuppliesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _6.QueryAssetSuppliesRequest;
                fromPartial(_: Partial<_6.QueryAssetSuppliesRequest>): _6.QueryAssetSuppliesRequest;
            };
            QueryAssetSuppliesResponse: {
                encode(message: _6.QueryAssetSuppliesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAssetSuppliesResponse;
                fromPartial(object: Partial<_6.QueryAssetSuppliesResponse>): _6.QueryAssetSuppliesResponse;
            };
            QueryAtomicSwapRequest: {
                encode(message: _6.QueryAtomicSwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAtomicSwapRequest;
                fromPartial(object: Partial<_6.QueryAtomicSwapRequest>): _6.QueryAtomicSwapRequest;
            };
            QueryAtomicSwapResponse: {
                encode(message: _6.QueryAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAtomicSwapResponse;
                fromPartial(object: Partial<_6.QueryAtomicSwapResponse>): _6.QueryAtomicSwapResponse;
            };
            AtomicSwapResponse: {
                encode(message: _6.AtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.AtomicSwapResponse;
                fromPartial(object: Partial<_6.AtomicSwapResponse>): _6.AtomicSwapResponse;
            };
            QueryAtomicSwapsRequest: {
                encode(message: _6.QueryAtomicSwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAtomicSwapsRequest;
                fromPartial(object: Partial<_6.QueryAtomicSwapsRequest>): _6.QueryAtomicSwapsRequest;
            };
            QueryAtomicSwapsResponse: {
                encode(message: _6.QueryAtomicSwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.QueryAtomicSwapsResponse;
                fromPartial(object: Partial<_6.QueryAtomicSwapsResponse>): _6.QueryAtomicSwapsResponse;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            };
            swapStatusFromJSON(object: any): _4.SwapStatus;
            swapStatusToJSON(object: _4.SwapStatus): string;
            swapDirectionFromJSON(object: any): _4.SwapDirection;
            swapDirectionToJSON(object: _4.SwapDirection): string;
            SwapStatus: typeof _4.SwapStatus;
            SwapStatusSDKType: typeof _4.SwapStatus;
            SwapDirection: typeof _4.SwapDirection;
            SwapDirectionSDKType: typeof _4.SwapDirection;
            Params: {
                encode(message: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
            };
            AssetParam: {
                encode(message: _4.AssetParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.AssetParam;
                fromPartial(object: Partial<_4.AssetParam>): _4.AssetParam;
            };
            SupplyLimit: {
                encode(message: _4.SupplyLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.SupplyLimit;
                fromPartial(object: Partial<_4.SupplyLimit>): _4.SupplyLimit;
            };
            AtomicSwap: {
                encode(message: _4.AtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.AtomicSwap;
                fromPartial(object: Partial<_4.AtomicSwap>): _4.AtomicSwap;
            };
            AssetSupply: {
                encode(message: _4.AssetSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.AssetSupply;
                fromPartial(object: Partial<_4.AssetSupply>): _4.AssetSupply;
            };
        };
    }
    namespace cdp {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                accounts(request?: _10.QueryAccountsRequest): Promise<_10.QueryAccountsResponse>;
                totalPrincipal(request: _10.QueryTotalPrincipalRequest): Promise<_10.QueryTotalPrincipalResponse>;
                totalCollateral(request: _10.QueryTotalCollateralRequest): Promise<_10.QueryTotalCollateralResponse>;
                cdps(request: _10.QueryCdpsRequest): Promise<_10.QueryCdpsResponse>;
                cdp(request: _10.QueryCdpRequest): Promise<_10.QueryCdpResponse>;
                deposits(request: _10.QueryDepositsRequest): Promise<_10.QueryDepositsResponse>;
            };
            LCDQueryClient: typeof _210.LCDQueryClient;
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
                    toAmino: ({ sender, collateral, principal, collateralType }: _11.MsgCreateCDP) => {
                        sender: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        principal: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ sender, collateral, principal, collateral_type }: {
                        sender: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        principal: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _11.MsgCreateCDP;
                };
                "/kava.cdp.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, owner, collateral, collateralType }: _11.MsgDeposit) => {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ depositor, owner, collateral, collateral_type }: {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _11.MsgDeposit;
                };
                "/kava.cdp.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, owner, collateral, collateralType }: _11.MsgWithdraw) => {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ depositor, owner, collateral, collateral_type }: {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _11.MsgWithdraw;
                };
                "/kava.cdp.v1beta1.MsgDrawDebt": {
                    aminoType: string;
                    toAmino: ({ sender, collateralType, principal }: _11.MsgDrawDebt) => {
                        sender: string;
                        collateral_type: string;
                        principal: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, collateral_type, principal }: {
                        sender: string;
                        collateral_type: string;
                        principal: {
                            denom: string;
                            amount: string;
                        };
                    }) => _11.MsgDrawDebt;
                };
                "/kava.cdp.v1beta1.MsgRepayDebt": {
                    aminoType: string;
                    toAmino: ({ sender, collateralType, payment }: _11.MsgRepayDebt) => {
                        sender: string;
                        collateral_type: string;
                        payment: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, collateral_type, payment }: {
                        sender: string;
                        collateral_type: string;
                        payment: {
                            denom: string;
                            amount: string;
                        };
                    }) => _11.MsgRepayDebt;
                };
                "/kava.cdp.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ keeper, borrower, collateralType }: _11.MsgLiquidate) => {
                        keeper: string;
                        borrower: string;
                        collateral_type: string;
                    };
                    fromAmino: ({ keeper, borrower, collateral_type }: {
                        keeper: string;
                        borrower: string;
                        collateral_type: string;
                    }) => _11.MsgLiquidate;
                };
            };
            MsgCreateCDP: {
                encode(message: _11.MsgCreateCDP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgCreateCDP;
                fromPartial(object: Partial<_11.MsgCreateCDP>): _11.MsgCreateCDP;
            };
            MsgCreateCDPResponse: {
                encode(message: _11.MsgCreateCDPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgCreateCDPResponse;
                fromPartial(object: Partial<_11.MsgCreateCDPResponse>): _11.MsgCreateCDPResponse;
            };
            MsgDeposit: {
                encode(message: _11.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgDeposit;
                fromPartial(object: Partial<_11.MsgDeposit>): _11.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _11.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgDepositResponse;
                fromPartial(_: Partial<_11.MsgDepositResponse>): _11.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _11.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgWithdraw;
                fromPartial(object: Partial<_11.MsgWithdraw>): _11.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _11.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgWithdrawResponse;
                fromPartial(_: Partial<_11.MsgWithdrawResponse>): _11.MsgWithdrawResponse;
            };
            MsgDrawDebt: {
                encode(message: _11.MsgDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgDrawDebt;
                fromPartial(object: Partial<_11.MsgDrawDebt>): _11.MsgDrawDebt;
            };
            MsgDrawDebtResponse: {
                encode(_: _11.MsgDrawDebtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgDrawDebtResponse;
                fromPartial(_: Partial<_11.MsgDrawDebtResponse>): _11.MsgDrawDebtResponse;
            };
            MsgRepayDebt: {
                encode(message: _11.MsgRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgRepayDebt;
                fromPartial(object: Partial<_11.MsgRepayDebt>): _11.MsgRepayDebt;
            };
            MsgRepayDebtResponse: {
                encode(_: _11.MsgRepayDebtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgRepayDebtResponse;
                fromPartial(_: Partial<_11.MsgRepayDebtResponse>): _11.MsgRepayDebtResponse;
            };
            MsgLiquidate: {
                encode(message: _11.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.MsgLiquidate;
                fromPartial(object: Partial<_11.MsgLiquidate>): _11.MsgLiquidate;
            };
            MsgLiquidateResponse: {
                encode(_: _11.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _11.MsgLiquidateResponse;
                fromPartial(_: Partial<_11.MsgLiquidateResponse>): _11.MsgLiquidateResponse;
            };
            QueryParamsRequest: {
                encode(_: _10.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.QueryParamsRequest;
                fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _10.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryParamsResponse;
                fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
            };
            QueryAccountsRequest: {
                encode(_: _10.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _10.QueryAccountsRequest;
                fromPartial(_: Partial<_10.QueryAccountsRequest>): _10.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _10.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryAccountsResponse;
                fromPartial(object: Partial<_10.QueryAccountsResponse>): _10.QueryAccountsResponse;
            };
            QueryCdpRequest: {
                encode(message: _10.QueryCdpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryCdpRequest;
                fromPartial(object: Partial<_10.QueryCdpRequest>): _10.QueryCdpRequest;
            };
            QueryCdpResponse: {
                encode(message: _10.QueryCdpResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryCdpResponse;
                fromPartial(object: Partial<_10.QueryCdpResponse>): _10.QueryCdpResponse;
            };
            QueryCdpsRequest: {
                encode(message: _10.QueryCdpsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryCdpsRequest;
                fromPartial(object: Partial<_10.QueryCdpsRequest>): _10.QueryCdpsRequest;
            };
            QueryCdpsResponse: {
                encode(message: _10.QueryCdpsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryCdpsResponse;
                fromPartial(object: Partial<_10.QueryCdpsResponse>): _10.QueryCdpsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _10.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryDepositsRequest;
                fromPartial(object: Partial<_10.QueryDepositsRequest>): _10.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _10.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryDepositsResponse;
                fromPartial(object: Partial<_10.QueryDepositsResponse>): _10.QueryDepositsResponse;
            };
            QueryTotalPrincipalRequest: {
                encode(message: _10.QueryTotalPrincipalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryTotalPrincipalRequest;
                fromPartial(object: Partial<_10.QueryTotalPrincipalRequest>): _10.QueryTotalPrincipalRequest;
            };
            QueryTotalPrincipalResponse: {
                encode(message: _10.QueryTotalPrincipalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryTotalPrincipalResponse;
                fromPartial(object: Partial<_10.QueryTotalPrincipalResponse>): _10.QueryTotalPrincipalResponse;
            };
            QueryTotalCollateralRequest: {
                encode(message: _10.QueryTotalCollateralRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryTotalCollateralRequest;
                fromPartial(object: Partial<_10.QueryTotalCollateralRequest>): _10.QueryTotalCollateralRequest;
            };
            QueryTotalCollateralResponse: {
                encode(message: _10.QueryTotalCollateralResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.QueryTotalCollateralResponse;
                fromPartial(object: Partial<_10.QueryTotalCollateralResponse>): _10.QueryTotalCollateralResponse;
            };
            CDPResponse: {
                encode(message: _10.CDPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.CDPResponse;
                fromPartial(object: Partial<_10.CDPResponse>): _10.CDPResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.GenesisState;
                fromPartial(object: Partial<_9.GenesisState>): _9.GenesisState;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
            };
            DebtParam: {
                encode(message: _9.DebtParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.DebtParam;
                fromPartial(object: Partial<_9.DebtParam>): _9.DebtParam;
            };
            CollateralParam: {
                encode(message: _9.CollateralParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.CollateralParam;
                fromPartial(object: Partial<_9.CollateralParam>): _9.CollateralParam;
            };
            GenesisAccumulationTime: {
                encode(message: _9.GenesisAccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.GenesisAccumulationTime;
                fromPartial(object: Partial<_9.GenesisAccumulationTime>): _9.GenesisAccumulationTime;
            };
            GenesisTotalPrincipal: {
                encode(message: _9.GenesisTotalPrincipal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.GenesisTotalPrincipal;
                fromPartial(object: Partial<_9.GenesisTotalPrincipal>): _9.GenesisTotalPrincipal;
            };
            CDP: {
                encode(message: _8.CDP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.CDP;
                fromPartial(object: Partial<_8.CDP>): _8.CDP;
            };
            Deposit: {
                encode(message: _8.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.Deposit;
                fromPartial(object: Partial<_8.Deposit>): _8.Deposit;
            };
            TotalPrincipal: {
                encode(message: _8.TotalPrincipal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.TotalPrincipal;
                fromPartial(object: Partial<_8.TotalPrincipal>): _8.TotalPrincipal;
            };
            TotalCollateral: {
                encode(message: _8.TotalCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.TotalCollateral;
                fromPartial(object: Partial<_8.TotalCollateral>): _8.TotalCollateral;
            };
            OwnerCDPIndex: {
                encode(message: _8.OwnerCDPIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.OwnerCDPIndex;
                fromPartial(object: Partial<_8.OwnerCDPIndex>): _8.OwnerCDPIndex;
            };
        };
    }
    namespace committee {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
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
            LCDQueryClient: typeof _211.LCDQueryClient;
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
                    toAmino: ({ pubProposal, proposer, committeeId }: _17.MsgSubmitProposal) => {
                        pub_proposal: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        proposer: string;
                        committee_id: string;
                    };
                    fromAmino: ({ pub_proposal, proposer, committee_id }: {
                        pub_proposal: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        proposer: string;
                        committee_id: string;
                    }) => _17.MsgSubmitProposal;
                };
                "/kava.committee.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, voteType }: _17.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        vote_type: number;
                    };
                    fromAmino: ({ proposal_id, voter, vote_type }: {
                        proposal_id: string;
                        voter: string;
                        vote_type: number;
                    }) => _17.MsgVote;
                };
            };
            MsgSubmitProposal: {
                encode(message: _17.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgSubmitProposal;
                fromPartial(object: Partial<_17.MsgSubmitProposal>): _17.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _17.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_17.MsgSubmitProposalResponse>): _17.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _17.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgVote;
                fromPartial(object: Partial<_17.MsgVote>): _17.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _17.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgVoteResponse;
                fromPartial(_: Partial<_17.MsgVoteResponse>): _17.MsgVoteResponse;
            };
            QueryCommitteesRequest: {
                encode(_: _16.QueryCommitteesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.QueryCommitteesRequest;
                fromPartial(_: Partial<_16.QueryCommitteesRequest>): _16.QueryCommitteesRequest;
            };
            QueryCommitteesResponse: {
                encode(message: _16.QueryCommitteesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryCommitteesResponse;
                fromPartial(object: Partial<_16.QueryCommitteesResponse>): _16.QueryCommitteesResponse;
            };
            QueryCommitteeRequest: {
                encode(message: _16.QueryCommitteeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryCommitteeRequest;
                fromPartial(object: Partial<_16.QueryCommitteeRequest>): _16.QueryCommitteeRequest;
            };
            QueryCommitteeResponse: {
                encode(message: _16.QueryCommitteeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryCommitteeResponse;
                fromPartial(object: Partial<_16.QueryCommitteeResponse>): _16.QueryCommitteeResponse;
            };
            QueryProposalsRequest: {
                encode(message: _16.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryProposalsRequest;
                fromPartial(object: Partial<_16.QueryProposalsRequest>): _16.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _16.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryProposalsResponse;
                fromPartial(object: Partial<_16.QueryProposalsResponse>): _16.QueryProposalsResponse;
            };
            QueryProposalRequest: {
                encode(message: _16.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryProposalRequest;
                fromPartial(object: Partial<_16.QueryProposalRequest>): _16.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _16.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryProposalResponse;
                fromPartial(object: Partial<_16.QueryProposalResponse>): _16.QueryProposalResponse;
            };
            QueryNextProposalIDRequest: {
                encode(_: _16.QueryNextProposalIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.QueryNextProposalIDRequest;
                fromPartial(_: Partial<_16.QueryNextProposalIDRequest>): _16.QueryNextProposalIDRequest;
            };
            QueryNextProposalIDResponse: {
                encode(message: _16.QueryNextProposalIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryNextProposalIDResponse;
                fromPartial(object: Partial<_16.QueryNextProposalIDResponse>): _16.QueryNextProposalIDResponse;
            };
            QueryVotesRequest: {
                encode(message: _16.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryVotesRequest;
                fromPartial(object: Partial<_16.QueryVotesRequest>): _16.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _16.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryVotesResponse;
                fromPartial(object: Partial<_16.QueryVotesResponse>): _16.QueryVotesResponse;
            };
            QueryVoteRequest: {
                encode(message: _16.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryVoteRequest;
                fromPartial(object: Partial<_16.QueryVoteRequest>): _16.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _16.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryVoteResponse;
                fromPartial(object: Partial<_16.QueryVoteResponse>): _16.QueryVoteResponse;
            };
            QueryTallyRequest: {
                encode(message: _16.QueryTallyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryTallyRequest;
                fromPartial(object: Partial<_16.QueryTallyRequest>): _16.QueryTallyRequest;
            };
            QueryTallyResponse: {
                encode(message: _16.QueryTallyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryTallyResponse;
                fromPartial(object: Partial<_16.QueryTallyResponse>): _16.QueryTallyResponse;
            };
            QueryRawParamsRequest: {
                encode(message: _16.QueryRawParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryRawParamsRequest;
                fromPartial(object: Partial<_16.QueryRawParamsRequest>): _16.QueryRawParamsRequest;
            };
            QueryRawParamsResponse: {
                encode(message: _16.QueryRawParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryRawParamsResponse;
                fromPartial(object: Partial<_16.QueryRawParamsResponse>): _16.QueryRawParamsResponse;
            };
            CommitteeChangeProposal: {
                encode(message: _15.CommitteeChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.CommitteeChangeProposal;
                fromPartial(object: Partial<_15.CommitteeChangeProposal>): _15.CommitteeChangeProposal;
            };
            CommitteeDeleteProposal: {
                encode(message: _15.CommitteeDeleteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.CommitteeDeleteProposal;
                fromPartial(object: Partial<_15.CommitteeDeleteProposal>): _15.CommitteeDeleteProposal;
            };
            GodPermission: {
                encode(_: _14.GodPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.GodPermission;
                fromPartial(_: Partial<_14.GodPermission>): _14.GodPermission;
            };
            SoftwareUpgradePermission: {
                encode(_: _14.SoftwareUpgradePermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.SoftwareUpgradePermission;
                fromPartial(_: Partial<_14.SoftwareUpgradePermission>): _14.SoftwareUpgradePermission;
            };
            TextPermission: {
                encode(_: _14.TextPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.TextPermission;
                fromPartial(_: Partial<_14.TextPermission>): _14.TextPermission;
            };
            CommunityCDPRepayDebtPermission: {
                encode(_: _14.CommunityCDPRepayDebtPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.CommunityCDPRepayDebtPermission;
                fromPartial(_: Partial<_14.CommunityCDPRepayDebtPermission>): _14.CommunityCDPRepayDebtPermission;
            };
            CommunityCDPWithdrawCollateralPermission: {
                encode(_: _14.CommunityCDPWithdrawCollateralPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.CommunityCDPWithdrawCollateralPermission;
                fromPartial(_: Partial<_14.CommunityCDPWithdrawCollateralPermission>): _14.CommunityCDPWithdrawCollateralPermission;
            };
            CommunityPoolLendWithdrawPermission: {
                encode(_: _14.CommunityPoolLendWithdrawPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _14.CommunityPoolLendWithdrawPermission;
                fromPartial(_: Partial<_14.CommunityPoolLendWithdrawPermission>): _14.CommunityPoolLendWithdrawPermission;
            };
            ParamsChangePermission: {
                encode(message: _14.ParamsChangePermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.ParamsChangePermission;
                fromPartial(object: Partial<_14.ParamsChangePermission>): _14.ParamsChangePermission;
            };
            AllowedParamsChange: {
                encode(message: _14.AllowedParamsChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.AllowedParamsChange;
                fromPartial(object: Partial<_14.AllowedParamsChange>): _14.AllowedParamsChange;
            };
            SubparamRequirement: {
                encode(message: _14.SubparamRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.SubparamRequirement;
                fromPartial(object: Partial<_14.SubparamRequirement>): _14.SubparamRequirement;
            };
            voteTypeFromJSON(object: any): _13.VoteType;
            voteTypeToJSON(object: _13.VoteType): string;
            VoteType: typeof _13.VoteType;
            VoteTypeSDKType: typeof _13.VoteType;
            GenesisState: {
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.GenesisState;
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
            };
            Proposal: {
                encode(message: _13.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Proposal;
                fromPartial(object: Partial<_13.Proposal>): _13.Proposal;
            };
            Vote: {
                encode(message: _13.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Vote;
                fromPartial(object: Partial<_13.Vote>): _13.Vote;
            };
            tallyOptionFromJSON(object: any): _12.TallyOption;
            tallyOptionToJSON(object: _12.TallyOption): string;
            TallyOption: typeof _12.TallyOption;
            TallyOptionSDKType: typeof _12.TallyOption;
            BaseCommittee: {
                encode(message: _12.BaseCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.BaseCommittee;
                fromPartial(object: Partial<_12.BaseCommittee>): _12.BaseCommittee;
            };
            MemberCommittee: {
                encode(message: _12.MemberCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.MemberCommittee;
                fromPartial(object: Partial<_12.MemberCommittee>): _12.MemberCommittee;
            };
            TokenCommittee: {
                encode(message: _12.TokenCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.TokenCommittee;
                fromPartial(object: Partial<_12.TokenCommittee>): _12.TokenCommittee;
            };
        };
    }
    namespace community {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request?: _19.QueryBalanceRequest): Promise<_19.QueryBalanceResponse>;
                totalBalance(request?: _19.QueryTotalBalanceRequest): Promise<_19.QueryTotalBalanceResponse>;
            };
            LCDQueryClient: typeof _212.LCDQueryClient;
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
                    toAmino: ({ amount, depositor }: _20.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _20.MsgFundCommunityPool;
                };
            };
            MsgFundCommunityPool: {
                encode(message: _20.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.MsgFundCommunityPool;
                fromPartial(object: Partial<_20.MsgFundCommunityPool>): _20.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _20.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_20.MsgFundCommunityPoolResponse>): _20.MsgFundCommunityPoolResponse;
            };
            QueryBalanceRequest: {
                encode(_: _19.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.QueryBalanceRequest;
                fromPartial(_: Partial<_19.QueryBalanceRequest>): _19.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _19.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryBalanceResponse;
                fromPartial(object: Partial<_19.QueryBalanceResponse>): _19.QueryBalanceResponse;
            };
            QueryTotalBalanceRequest: {
                encode(_: _19.QueryTotalBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.QueryTotalBalanceRequest;
                fromPartial(_: Partial<_19.QueryTotalBalanceRequest>): _19.QueryTotalBalanceRequest;
            };
            QueryTotalBalanceResponse: {
                encode(message: _19.QueryTotalBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.QueryTotalBalanceResponse;
                fromPartial(object: Partial<_19.QueryTotalBalanceResponse>): _19.QueryTotalBalanceResponse;
            };
            CommunityPoolLendDepositProposal: {
                encode(message: _18.CommunityPoolLendDepositProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.CommunityPoolLendDepositProposal;
                fromPartial(object: Partial<_18.CommunityPoolLendDepositProposal>): _18.CommunityPoolLendDepositProposal;
            };
            CommunityPoolLendWithdrawProposal: {
                encode(message: _18.CommunityPoolLendWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.CommunityPoolLendWithdrawProposal;
                fromPartial(object: Partial<_18.CommunityPoolLendWithdrawProposal>): _18.CommunityPoolLendWithdrawProposal;
            };
            CommunityCDPRepayDebtProposal: {
                encode(message: _18.CommunityCDPRepayDebtProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.CommunityCDPRepayDebtProposal;
                fromPartial(object: Partial<_18.CommunityCDPRepayDebtProposal>): _18.CommunityCDPRepayDebtProposal;
            };
            CommunityCDPWithdrawCollateralProposal: {
                encode(message: _18.CommunityCDPWithdrawCollateralProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.CommunityCDPWithdrawCollateralProposal;
                fromPartial(object: Partial<_18.CommunityCDPWithdrawCollateralProposal>): _18.CommunityCDPWithdrawCollateralProposal;
            };
        };
    }
    namespace earn {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                vaults(request?: _24.QueryVaultsRequest): Promise<_24.QueryVaultsResponse>;
                vault(request: _24.QueryVaultRequest): Promise<_24.QueryVaultResponse>;
                deposits(request: _24.QueryDepositsRequest): Promise<_24.QueryDepositsResponse>;
                totalSupply(request?: _24.QueryTotalSupplyRequest): Promise<_24.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _213.LCDQueryClient;
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
                    toAmino: ({ depositor, amount, strategy }: _26.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        strategy: number;
                    };
                    fromAmino: ({ depositor, amount, strategy }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        strategy: number;
                    }) => _26.MsgDeposit;
                };
                "/kava.earn.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ from, amount, strategy }: _26.MsgWithdraw) => {
                        from: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        strategy: number;
                    };
                    fromAmino: ({ from, amount, strategy }: {
                        from: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        strategy: number;
                    }) => _26.MsgWithdraw;
                };
            };
            AllowedVault: {
                encode(message: _27.AllowedVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.AllowedVault;
                fromPartial(object: Partial<_27.AllowedVault>): _27.AllowedVault;
            };
            VaultRecord: {
                encode(message: _27.VaultRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.VaultRecord;
                fromPartial(object: Partial<_27.VaultRecord>): _27.VaultRecord;
            };
            VaultShareRecord: {
                encode(message: _27.VaultShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.VaultShareRecord;
                fromPartial(object: Partial<_27.VaultShareRecord>): _27.VaultShareRecord;
            };
            VaultShare: {
                encode(message: _27.VaultShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.VaultShare;
                fromPartial(object: Partial<_27.VaultShare>): _27.VaultShare;
            };
            MsgDeposit: {
                encode(message: _26.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.MsgDeposit;
                fromPartial(object: Partial<_26.MsgDeposit>): _26.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(message: _26.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.MsgDepositResponse;
                fromPartial(object: Partial<_26.MsgDepositResponse>): _26.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _26.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.MsgWithdraw;
                fromPartial(object: Partial<_26.MsgWithdraw>): _26.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(message: _26.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.MsgWithdrawResponse;
                fromPartial(object: Partial<_26.MsgWithdrawResponse>): _26.MsgWithdrawResponse;
            };
            strategyTypeFromJSON(object: any): _25.StrategyType;
            strategyTypeToJSON(object: _25.StrategyType): string;
            StrategyType: typeof _25.StrategyType;
            StrategyTypeSDKType: typeof _25.StrategyType;
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.QueryParamsRequest;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
            };
            QueryVaultsRequest: {
                encode(_: _24.QueryVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.QueryVaultsRequest;
                fromPartial(_: Partial<_24.QueryVaultsRequest>): _24.QueryVaultsRequest;
            };
            QueryVaultsResponse: {
                encode(message: _24.QueryVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryVaultsResponse;
                fromPartial(object: Partial<_24.QueryVaultsResponse>): _24.QueryVaultsResponse;
            };
            QueryVaultRequest: {
                encode(message: _24.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryVaultRequest;
                fromPartial(object: Partial<_24.QueryVaultRequest>): _24.QueryVaultRequest;
            };
            QueryVaultResponse: {
                encode(message: _24.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryVaultResponse;
                fromPartial(object: Partial<_24.QueryVaultResponse>): _24.QueryVaultResponse;
            };
            VaultResponse: {
                encode(message: _24.VaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.VaultResponse;
                fromPartial(object: Partial<_24.VaultResponse>): _24.VaultResponse;
            };
            QueryDepositsRequest: {
                encode(message: _24.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryDepositsRequest;
                fromPartial(object: Partial<_24.QueryDepositsRequest>): _24.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _24.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryDepositsResponse;
                fromPartial(object: Partial<_24.QueryDepositsResponse>): _24.QueryDepositsResponse;
            };
            DepositResponse: {
                encode(message: _24.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.DepositResponse;
                fromPartial(object: Partial<_24.DepositResponse>): _24.DepositResponse;
            };
            QueryTotalSupplyRequest: {
                encode(_: _24.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_24.QueryTotalSupplyRequest>): _24.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _24.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_24.QueryTotalSupplyResponse>): _24.QueryTotalSupplyResponse;
            };
            CommunityPoolDepositProposal: {
                encode(message: _23.CommunityPoolDepositProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.CommunityPoolDepositProposal;
                fromPartial(object: Partial<_23.CommunityPoolDepositProposal>): _23.CommunityPoolDepositProposal;
            };
            CommunityPoolDepositProposalJSON: {
                encode(message: _23.CommunityPoolDepositProposalJSON, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.CommunityPoolDepositProposalJSON;
                fromPartial(object: Partial<_23.CommunityPoolDepositProposalJSON>): _23.CommunityPoolDepositProposalJSON;
            };
            CommunityPoolWithdrawProposal: {
                encode(message: _23.CommunityPoolWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.CommunityPoolWithdrawProposal;
                fromPartial(object: Partial<_23.CommunityPoolWithdrawProposal>): _23.CommunityPoolWithdrawProposal;
            };
            CommunityPoolWithdrawProposalJSON: {
                encode(message: _23.CommunityPoolWithdrawProposalJSON, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.CommunityPoolWithdrawProposalJSON;
                fromPartial(object: Partial<_23.CommunityPoolWithdrawProposalJSON>): _23.CommunityPoolWithdrawProposalJSON;
            };
            Params: {
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.Params;
                fromPartial(object: Partial<_22.Params>): _22.Params;
            };
            GenesisState: {
                encode(message: _21.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
            };
        };
    }
    namespace evmutil {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                deployedCosmosCoinContracts(request: _30.QueryDeployedCosmosCoinContractsRequest): Promise<_30.QueryDeployedCosmosCoinContractsResponse>;
            };
            LCDQueryClient: typeof _214.LCDQueryClient;
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
                    toAmino: ({ initiator, receiver, amount }: _31.MsgConvertCoinToERC20) => {
                        initiator: string;
                        receiver: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ initiator, receiver, amount }: {
                        initiator: string;
                        receiver: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _31.MsgConvertCoinToERC20;
                };
                "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
                    aminoType: string;
                    toAmino: ({ initiator, receiver, kavaErc20Address, amount }: _31.MsgConvertERC20ToCoin) => {
                        initiator: string;
                        receiver: string;
                        kava_erc20_address: string;
                        amount: string;
                    };
                    fromAmino: ({ initiator, receiver, kava_erc20_address, amount }: {
                        initiator: string;
                        receiver: string;
                        kava_erc20_address: string;
                        amount: string;
                    }) => _31.MsgConvertERC20ToCoin;
                };
                "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20": {
                    aminoType: string;
                    toAmino: ({ initiator, receiver, amount }: _31.MsgConvertCosmosCoinToERC20) => {
                        initiator: string;
                        receiver: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ initiator, receiver, amount }: {
                        initiator: string;
                        receiver: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _31.MsgConvertCosmosCoinToERC20;
                };
                "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20": {
                    aminoType: string;
                    toAmino: ({ initiator, receiver, amount }: _31.MsgConvertCosmosCoinFromERC20) => {
                        initiator: string;
                        receiver: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ initiator, receiver, amount }: {
                        initiator: string;
                        receiver: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _31.MsgConvertCosmosCoinFromERC20;
                };
            };
            MsgConvertCoinToERC20: {
                encode(message: _31.MsgConvertCoinToERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.MsgConvertCoinToERC20;
                fromPartial(object: Partial<_31.MsgConvertCoinToERC20>): _31.MsgConvertCoinToERC20;
            };
            MsgConvertCoinToERC20Response: {
                encode(_: _31.MsgConvertCoinToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _31.MsgConvertCoinToERC20Response;
                fromPartial(_: Partial<_31.MsgConvertCoinToERC20Response>): _31.MsgConvertCoinToERC20Response;
            };
            MsgConvertERC20ToCoin: {
                encode(message: _31.MsgConvertERC20ToCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.MsgConvertERC20ToCoin;
                fromPartial(object: Partial<_31.MsgConvertERC20ToCoin>): _31.MsgConvertERC20ToCoin;
            };
            MsgConvertERC20ToCoinResponse: {
                encode(_: _31.MsgConvertERC20ToCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _31.MsgConvertERC20ToCoinResponse;
                fromPartial(_: Partial<_31.MsgConvertERC20ToCoinResponse>): _31.MsgConvertERC20ToCoinResponse;
            };
            MsgConvertCosmosCoinToERC20: {
                encode(message: _31.MsgConvertCosmosCoinToERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.MsgConvertCosmosCoinToERC20;
                fromPartial(object: Partial<_31.MsgConvertCosmosCoinToERC20>): _31.MsgConvertCosmosCoinToERC20;
            };
            MsgConvertCosmosCoinToERC20Response: {
                encode(_: _31.MsgConvertCosmosCoinToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _31.MsgConvertCosmosCoinToERC20Response;
                fromPartial(_: Partial<_31.MsgConvertCosmosCoinToERC20Response>): _31.MsgConvertCosmosCoinToERC20Response;
            };
            MsgConvertCosmosCoinFromERC20: {
                encode(message: _31.MsgConvertCosmosCoinFromERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.MsgConvertCosmosCoinFromERC20;
                fromPartial(object: Partial<_31.MsgConvertCosmosCoinFromERC20>): _31.MsgConvertCosmosCoinFromERC20;
            };
            MsgConvertCosmosCoinFromERC20Response: {
                encode(_: _31.MsgConvertCosmosCoinFromERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _31.MsgConvertCosmosCoinFromERC20Response;
                fromPartial(_: Partial<_31.MsgConvertCosmosCoinFromERC20Response>): _31.MsgConvertCosmosCoinFromERC20Response;
            };
            QueryParamsRequest: {
                encode(_: _30.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _30.QueryParamsRequest;
                fromPartial(_: Partial<_30.QueryParamsRequest>): _30.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _30.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryParamsResponse;
                fromPartial(object: Partial<_30.QueryParamsResponse>): _30.QueryParamsResponse;
            };
            QueryDeployedCosmosCoinContractsRequest: {
                encode(message: _30.QueryDeployedCosmosCoinContractsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryDeployedCosmosCoinContractsRequest;
                fromPartial(object: Partial<_30.QueryDeployedCosmosCoinContractsRequest>): _30.QueryDeployedCosmosCoinContractsRequest;
            };
            QueryDeployedCosmosCoinContractsResponse: {
                encode(message: _30.QueryDeployedCosmosCoinContractsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.QueryDeployedCosmosCoinContractsResponse;
                fromPartial(object: Partial<_30.QueryDeployedCosmosCoinContractsResponse>): _30.QueryDeployedCosmosCoinContractsResponse;
            };
            DeployedCosmosCoinContract: {
                encode(message: _30.DeployedCosmosCoinContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.DeployedCosmosCoinContract;
                fromPartial(object: Partial<_30.DeployedCosmosCoinContract>): _30.DeployedCosmosCoinContract;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.GenesisState;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
            };
            Account: {
                encode(message: _29.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.Account;
                fromPartial(object: Partial<_29.Account>): _29.Account;
            };
            Params: {
                encode(message: _29.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.Params;
                fromPartial(object: Partial<_29.Params>): _29.Params;
            };
            ConversionPair: {
                encode(message: _28.ConversionPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.ConversionPair;
                fromPartial(object: Partial<_28.ConversionPair>): _28.ConversionPair;
            };
            AllowedCosmosCoinERC20Token: {
                encode(message: _28.AllowedCosmosCoinERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.AllowedCosmosCoinERC20Token;
                fromPartial(object: Partial<_28.AllowedCosmosCoinERC20Token>): _28.AllowedCosmosCoinERC20Token;
            };
        };
    }
    namespace hard {
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
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
            LCDQueryClient: typeof _215.LCDQueryClient;
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
                    toAmino: ({ depositor, amount }: _35.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _35.MsgDeposit;
                };
                "/kava.hard.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _35.MsgWithdraw) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _35.MsgWithdraw;
                };
                "/kava.hard.v1beta1.MsgBorrow": {
                    aminoType: string;
                    toAmino: ({ borrower, amount }: _35.MsgBorrow) => {
                        borrower: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ borrower, amount }: {
                        borrower: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _35.MsgBorrow;
                };
                "/kava.hard.v1beta1.MsgRepay": {
                    aminoType: string;
                    toAmino: ({ sender, owner, amount }: _35.MsgRepay) => {
                        sender: string;
                        owner: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, owner, amount }: {
                        sender: string;
                        owner: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _35.MsgRepay;
                };
                "/kava.hard.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ keeper, borrower }: _35.MsgLiquidate) => {
                        keeper: string;
                        borrower: string;
                    };
                    fromAmino: ({ keeper, borrower }: {
                        keeper: string;
                        borrower: string;
                    }) => _35.MsgLiquidate;
                };
            };
            MsgDeposit: {
                encode(message: _35.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgDeposit;
                fromPartial(object: Partial<_35.MsgDeposit>): _35.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _35.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgDepositResponse;
                fromPartial(_: Partial<_35.MsgDepositResponse>): _35.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _35.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgWithdraw;
                fromPartial(object: Partial<_35.MsgWithdraw>): _35.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _35.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgWithdrawResponse;
                fromPartial(_: Partial<_35.MsgWithdrawResponse>): _35.MsgWithdrawResponse;
            };
            MsgBorrow: {
                encode(message: _35.MsgBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgBorrow;
                fromPartial(object: Partial<_35.MsgBorrow>): _35.MsgBorrow;
            };
            MsgBorrowResponse: {
                encode(_: _35.MsgBorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgBorrowResponse;
                fromPartial(_: Partial<_35.MsgBorrowResponse>): _35.MsgBorrowResponse;
            };
            MsgRepay: {
                encode(message: _35.MsgRepay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgRepay;
                fromPartial(object: Partial<_35.MsgRepay>): _35.MsgRepay;
            };
            MsgRepayResponse: {
                encode(_: _35.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgRepayResponse;
                fromPartial(_: Partial<_35.MsgRepayResponse>): _35.MsgRepayResponse;
            };
            MsgLiquidate: {
                encode(message: _35.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.MsgLiquidate;
                fromPartial(object: Partial<_35.MsgLiquidate>): _35.MsgLiquidate;
            };
            MsgLiquidateResponse: {
                encode(_: _35.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _35.MsgLiquidateResponse;
                fromPartial(_: Partial<_35.MsgLiquidateResponse>): _35.MsgLiquidateResponse;
            };
            QueryParamsRequest: {
                encode(_: _34.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.QueryParamsRequest;
                fromPartial(_: Partial<_34.QueryParamsRequest>): _34.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _34.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryParamsResponse;
                fromPartial(object: Partial<_34.QueryParamsResponse>): _34.QueryParamsResponse;
            };
            QueryAccountsRequest: {
                encode(_: _34.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _34.QueryAccountsRequest;
                fromPartial(_: Partial<_34.QueryAccountsRequest>): _34.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _34.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryAccountsResponse;
                fromPartial(object: Partial<_34.QueryAccountsResponse>): _34.QueryAccountsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _34.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDepositsRequest;
                fromPartial(object: Partial<_34.QueryDepositsRequest>): _34.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _34.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryDepositsResponse;
                fromPartial(object: Partial<_34.QueryDepositsResponse>): _34.QueryDepositsResponse;
            };
            QueryUnsyncedDepositsRequest: {
                encode(message: _34.QueryUnsyncedDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryUnsyncedDepositsRequest;
                fromPartial(object: Partial<_34.QueryUnsyncedDepositsRequest>): _34.QueryUnsyncedDepositsRequest;
            };
            QueryUnsyncedDepositsResponse: {
                encode(message: _34.QueryUnsyncedDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryUnsyncedDepositsResponse;
                fromPartial(object: Partial<_34.QueryUnsyncedDepositsResponse>): _34.QueryUnsyncedDepositsResponse;
            };
            QueryTotalDepositedRequest: {
                encode(message: _34.QueryTotalDepositedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryTotalDepositedRequest;
                fromPartial(object: Partial<_34.QueryTotalDepositedRequest>): _34.QueryTotalDepositedRequest;
            };
            QueryTotalDepositedResponse: {
                encode(message: _34.QueryTotalDepositedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryTotalDepositedResponse;
                fromPartial(object: Partial<_34.QueryTotalDepositedResponse>): _34.QueryTotalDepositedResponse;
            };
            QueryBorrowsRequest: {
                encode(message: _34.QueryBorrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryBorrowsRequest;
                fromPartial(object: Partial<_34.QueryBorrowsRequest>): _34.QueryBorrowsRequest;
            };
            QueryBorrowsResponse: {
                encode(message: _34.QueryBorrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryBorrowsResponse;
                fromPartial(object: Partial<_34.QueryBorrowsResponse>): _34.QueryBorrowsResponse;
            };
            QueryUnsyncedBorrowsRequest: {
                encode(message: _34.QueryUnsyncedBorrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryUnsyncedBorrowsRequest;
                fromPartial(object: Partial<_34.QueryUnsyncedBorrowsRequest>): _34.QueryUnsyncedBorrowsRequest;
            };
            QueryUnsyncedBorrowsResponse: {
                encode(message: _34.QueryUnsyncedBorrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryUnsyncedBorrowsResponse;
                fromPartial(object: Partial<_34.QueryUnsyncedBorrowsResponse>): _34.QueryUnsyncedBorrowsResponse;
            };
            QueryTotalBorrowedRequest: {
                encode(message: _34.QueryTotalBorrowedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryTotalBorrowedRequest;
                fromPartial(object: Partial<_34.QueryTotalBorrowedRequest>): _34.QueryTotalBorrowedRequest;
            };
            QueryTotalBorrowedResponse: {
                encode(message: _34.QueryTotalBorrowedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryTotalBorrowedResponse;
                fromPartial(object: Partial<_34.QueryTotalBorrowedResponse>): _34.QueryTotalBorrowedResponse;
            };
            QueryInterestRateRequest: {
                encode(message: _34.QueryInterestRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryInterestRateRequest;
                fromPartial(object: Partial<_34.QueryInterestRateRequest>): _34.QueryInterestRateRequest;
            };
            QueryInterestRateResponse: {
                encode(message: _34.QueryInterestRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryInterestRateResponse;
                fromPartial(object: Partial<_34.QueryInterestRateResponse>): _34.QueryInterestRateResponse;
            };
            QueryReservesRequest: {
                encode(message: _34.QueryReservesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryReservesRequest;
                fromPartial(object: Partial<_34.QueryReservesRequest>): _34.QueryReservesRequest;
            };
            QueryReservesResponse: {
                encode(message: _34.QueryReservesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryReservesResponse;
                fromPartial(object: Partial<_34.QueryReservesResponse>): _34.QueryReservesResponse;
            };
            QueryInterestFactorsRequest: {
                encode(message: _34.QueryInterestFactorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryInterestFactorsRequest;
                fromPartial(object: Partial<_34.QueryInterestFactorsRequest>): _34.QueryInterestFactorsRequest;
            };
            QueryInterestFactorsResponse: {
                encode(message: _34.QueryInterestFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.QueryInterestFactorsResponse;
                fromPartial(object: Partial<_34.QueryInterestFactorsResponse>): _34.QueryInterestFactorsResponse;
            };
            DepositResponse: {
                encode(message: _34.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.DepositResponse;
                fromPartial(object: Partial<_34.DepositResponse>): _34.DepositResponse;
            };
            SupplyInterestFactorResponse: {
                encode(message: _34.SupplyInterestFactorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.SupplyInterestFactorResponse;
                fromPartial(object: Partial<_34.SupplyInterestFactorResponse>): _34.SupplyInterestFactorResponse;
            };
            BorrowResponse: {
                encode(message: _34.BorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.BorrowResponse;
                fromPartial(object: Partial<_34.BorrowResponse>): _34.BorrowResponse;
            };
            BorrowInterestFactorResponse: {
                encode(message: _34.BorrowInterestFactorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.BorrowInterestFactorResponse;
                fromPartial(object: Partial<_34.BorrowInterestFactorResponse>): _34.BorrowInterestFactorResponse;
            };
            MoneyMarketInterestRate: {
                encode(message: _34.MoneyMarketInterestRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.MoneyMarketInterestRate;
                fromPartial(object: Partial<_34.MoneyMarketInterestRate>): _34.MoneyMarketInterestRate;
            };
            InterestFactor: {
                encode(message: _34.InterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.InterestFactor;
                fromPartial(object: Partial<_34.InterestFactor>): _34.InterestFactor;
            };
            Params: {
                encode(message: _33.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Params;
                fromPartial(object: Partial<_33.Params>): _33.Params;
            };
            MoneyMarket: {
                encode(message: _33.MoneyMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.MoneyMarket;
                fromPartial(object: Partial<_33.MoneyMarket>): _33.MoneyMarket;
            };
            BorrowLimit: {
                encode(message: _33.BorrowLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.BorrowLimit;
                fromPartial(object: Partial<_33.BorrowLimit>): _33.BorrowLimit;
            };
            InterestRateModel: {
                encode(message: _33.InterestRateModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.InterestRateModel;
                fromPartial(object: Partial<_33.InterestRateModel>): _33.InterestRateModel;
            };
            Deposit: {
                encode(message: _33.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Deposit;
                fromPartial(object: Partial<_33.Deposit>): _33.Deposit;
            };
            Borrow: {
                encode(message: _33.Borrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.Borrow;
                fromPartial(object: Partial<_33.Borrow>): _33.Borrow;
            };
            SupplyInterestFactor: {
                encode(message: _33.SupplyInterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.SupplyInterestFactor;
                fromPartial(object: Partial<_33.SupplyInterestFactor>): _33.SupplyInterestFactor;
            };
            BorrowInterestFactor: {
                encode(message: _33.BorrowInterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.BorrowInterestFactor;
                fromPartial(object: Partial<_33.BorrowInterestFactor>): _33.BorrowInterestFactor;
            };
            CoinsProto: {
                encode(message: _33.CoinsProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _33.CoinsProto;
                fromPartial(object: Partial<_33.CoinsProto>): _33.CoinsProto;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
            GenesisAccumulationTime: {
                encode(message: _32.GenesisAccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.GenesisAccumulationTime;
                fromPartial(object: Partial<_32.GenesisAccumulationTime>): _32.GenesisAccumulationTime;
            };
        };
    }
    namespace incentive {
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                rewards(request: _40.QueryRewardsRequest): Promise<_40.QueryRewardsResponse>;
                rewardFactors(request?: _40.QueryRewardFactorsRequest): Promise<_40.QueryRewardFactorsResponse>;
                apy(request?: _40.QueryApyRequest): Promise<_40.QueryApyResponse>;
            };
            LCDQueryClient: typeof _216.LCDQueryClient;
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
                    toAmino: ({ sender, multiplierName }: _41.MsgClaimUSDXMintingReward) => {
                        sender: string;
                        multiplier_name: string;
                    };
                    fromAmino: ({ sender, multiplier_name }: {
                        sender: string;
                        multiplier_name: string;
                    }) => _41.MsgClaimUSDXMintingReward;
                };
                "/kava.incentive.v1beta1.MsgClaimHardReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _41.MsgClaimHardReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _41.MsgClaimHardReward;
                };
                "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _41.MsgClaimDelegatorReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _41.MsgClaimDelegatorReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSwapReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _41.MsgClaimSwapReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _41.MsgClaimSwapReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _41.MsgClaimSavingsReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _41.MsgClaimSavingsReward;
                };
                "/kava.incentive.v1beta1.MsgClaimEarnReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _41.MsgClaimEarnReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _41.MsgClaimEarnReward;
                };
            };
            Selection: {
                encode(message: _41.Selection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.Selection;
                fromPartial(object: Partial<_41.Selection>): _41.Selection;
            };
            MsgClaimUSDXMintingReward: {
                encode(message: _41.MsgClaimUSDXMintingReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgClaimUSDXMintingReward;
                fromPartial(object: Partial<_41.MsgClaimUSDXMintingReward>): _41.MsgClaimUSDXMintingReward;
            };
            MsgClaimUSDXMintingRewardResponse: {
                encode(_: _41.MsgClaimUSDXMintingRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgClaimUSDXMintingRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimUSDXMintingRewardResponse>): _41.MsgClaimUSDXMintingRewardResponse;
            };
            MsgClaimHardReward: {
                encode(message: _41.MsgClaimHardReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgClaimHardReward;
                fromPartial(object: Partial<_41.MsgClaimHardReward>): _41.MsgClaimHardReward;
            };
            MsgClaimHardRewardResponse: {
                encode(_: _41.MsgClaimHardRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgClaimHardRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimHardRewardResponse>): _41.MsgClaimHardRewardResponse;
            };
            MsgClaimDelegatorReward: {
                encode(message: _41.MsgClaimDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgClaimDelegatorReward;
                fromPartial(object: Partial<_41.MsgClaimDelegatorReward>): _41.MsgClaimDelegatorReward;
            };
            MsgClaimDelegatorRewardResponse: {
                encode(_: _41.MsgClaimDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgClaimDelegatorRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimDelegatorRewardResponse>): _41.MsgClaimDelegatorRewardResponse;
            };
            MsgClaimSwapReward: {
                encode(message: _41.MsgClaimSwapReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgClaimSwapReward;
                fromPartial(object: Partial<_41.MsgClaimSwapReward>): _41.MsgClaimSwapReward;
            };
            MsgClaimSwapRewardResponse: {
                encode(_: _41.MsgClaimSwapRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgClaimSwapRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimSwapRewardResponse>): _41.MsgClaimSwapRewardResponse;
            };
            MsgClaimSavingsReward: {
                encode(message: _41.MsgClaimSavingsReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgClaimSavingsReward;
                fromPartial(object: Partial<_41.MsgClaimSavingsReward>): _41.MsgClaimSavingsReward;
            };
            MsgClaimSavingsRewardResponse: {
                encode(_: _41.MsgClaimSavingsRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgClaimSavingsRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimSavingsRewardResponse>): _41.MsgClaimSavingsRewardResponse;
            };
            MsgClaimEarnReward: {
                encode(message: _41.MsgClaimEarnReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.MsgClaimEarnReward;
                fromPartial(object: Partial<_41.MsgClaimEarnReward>): _41.MsgClaimEarnReward;
            };
            MsgClaimEarnRewardResponse: {
                encode(_: _41.MsgClaimEarnRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _41.MsgClaimEarnRewardResponse;
                fromPartial(_: Partial<_41.MsgClaimEarnRewardResponse>): _41.MsgClaimEarnRewardResponse;
            };
            QueryParamsRequest: {
                encode(_: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
            };
            QueryRewardsRequest: {
                encode(message: _40.QueryRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryRewardsRequest;
                fromPartial(object: Partial<_40.QueryRewardsRequest>): _40.QueryRewardsRequest;
            };
            QueryRewardsResponse: {
                encode(message: _40.QueryRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryRewardsResponse;
                fromPartial(object: Partial<_40.QueryRewardsResponse>): _40.QueryRewardsResponse;
            };
            QueryRewardFactorsRequest: {
                encode(_: _40.QueryRewardFactorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.QueryRewardFactorsRequest;
                fromPartial(_: Partial<_40.QueryRewardFactorsRequest>): _40.QueryRewardFactorsRequest;
            };
            QueryRewardFactorsResponse: {
                encode(message: _40.QueryRewardFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryRewardFactorsResponse;
                fromPartial(object: Partial<_40.QueryRewardFactorsResponse>): _40.QueryRewardFactorsResponse;
            };
            QueryApyRequest: {
                encode(_: _40.QueryApyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _40.QueryApyRequest;
                fromPartial(_: Partial<_40.QueryApyRequest>): _40.QueryApyRequest;
            };
            QueryApyResponse: {
                encode(message: _40.QueryApyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.QueryApyResponse;
                fromPartial(object: Partial<_40.QueryApyResponse>): _40.QueryApyResponse;
            };
            RewardPeriod: {
                encode(message: _39.RewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.RewardPeriod;
                fromPartial(object: Partial<_39.RewardPeriod>): _39.RewardPeriod;
            };
            MultiRewardPeriod: {
                encode(message: _39.MultiRewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.MultiRewardPeriod;
                fromPartial(object: Partial<_39.MultiRewardPeriod>): _39.MultiRewardPeriod;
            };
            Multiplier: {
                encode(message: _39.Multiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Multiplier;
                fromPartial(object: Partial<_39.Multiplier>): _39.Multiplier;
            };
            MultipliersPerDenom: {
                encode(message: _39.MultipliersPerDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.MultipliersPerDenom;
                fromPartial(object: Partial<_39.MultipliersPerDenom>): _39.MultipliersPerDenom;
            };
            Params: {
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
            };
            AccumulationTime: {
                encode(message: _38.AccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.AccumulationTime;
                fromPartial(object: Partial<_38.AccumulationTime>): _38.AccumulationTime;
            };
            GenesisRewardState: {
                encode(message: _38.GenesisRewardState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.GenesisRewardState;
                fromPartial(object: Partial<_38.GenesisRewardState>): _38.GenesisRewardState;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
            };
            BaseClaim: {
                encode(message: _37.BaseClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.BaseClaim;
                fromPartial(object: Partial<_37.BaseClaim>): _37.BaseClaim;
            };
            BaseMultiClaim: {
                encode(message: _37.BaseMultiClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.BaseMultiClaim;
                fromPartial(object: Partial<_37.BaseMultiClaim>): _37.BaseMultiClaim;
            };
            RewardIndex: {
                encode(message: _37.RewardIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.RewardIndex;
                fromPartial(object: Partial<_37.RewardIndex>): _37.RewardIndex;
            };
            RewardIndexesProto: {
                encode(message: _37.RewardIndexesProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.RewardIndexesProto;
                fromPartial(object: Partial<_37.RewardIndexesProto>): _37.RewardIndexesProto;
            };
            MultiRewardIndex: {
                encode(message: _37.MultiRewardIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MultiRewardIndex;
                fromPartial(object: Partial<_37.MultiRewardIndex>): _37.MultiRewardIndex;
            };
            MultiRewardIndexesProto: {
                encode(message: _37.MultiRewardIndexesProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.MultiRewardIndexesProto;
                fromPartial(object: Partial<_37.MultiRewardIndexesProto>): _37.MultiRewardIndexesProto;
            };
            USDXMintingClaim: {
                encode(message: _37.USDXMintingClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.USDXMintingClaim;
                fromPartial(object: Partial<_37.USDXMintingClaim>): _37.USDXMintingClaim;
            };
            HardLiquidityProviderClaim: {
                encode(message: _37.HardLiquidityProviderClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.HardLiquidityProviderClaim;
                fromPartial(object: Partial<_37.HardLiquidityProviderClaim>): _37.HardLiquidityProviderClaim;
            };
            DelegatorClaim: {
                encode(message: _37.DelegatorClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.DelegatorClaim;
                fromPartial(object: Partial<_37.DelegatorClaim>): _37.DelegatorClaim;
            };
            SwapClaim: {
                encode(message: _37.SwapClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.SwapClaim;
                fromPartial(object: Partial<_37.SwapClaim>): _37.SwapClaim;
            };
            SavingsClaim: {
                encode(message: _37.SavingsClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.SavingsClaim;
                fromPartial(object: Partial<_37.SavingsClaim>): _37.SavingsClaim;
            };
            EarnClaim: {
                encode(message: _37.EarnClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.EarnClaim;
                fromPartial(object: Partial<_37.EarnClaim>): _37.EarnClaim;
            };
            Apy: {
                encode(message: _36.Apy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Apy;
                fromPartial(object: Partial<_36.Apy>): _36.Apy;
            };
        };
    }
    namespace issuance {
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _217.LCDQueryClient;
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
                    toAmino: ({ sender, tokens, receiver }: _44.MsgIssueTokens) => {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                    };
                    fromAmino: ({ sender, tokens, receiver }: {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                    }) => _44.MsgIssueTokens;
                };
                "/kava.issuance.v1beta1.MsgRedeemTokens": {
                    aminoType: string;
                    toAmino: ({ sender, tokens }: _44.MsgRedeemTokens) => {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, tokens }: {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                    }) => _44.MsgRedeemTokens;
                };
                "/kava.issuance.v1beta1.MsgBlockAddress": {
                    aminoType: string;
                    toAmino: ({ sender, denom, blockedAddress }: _44.MsgBlockAddress) => {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    };
                    fromAmino: ({ sender, denom, blocked_address }: {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    }) => _44.MsgBlockAddress;
                };
                "/kava.issuance.v1beta1.MsgUnblockAddress": {
                    aminoType: string;
                    toAmino: ({ sender, denom, blockedAddress }: _44.MsgUnblockAddress) => {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    };
                    fromAmino: ({ sender, denom, blocked_address }: {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    }) => _44.MsgUnblockAddress;
                };
                "/kava.issuance.v1beta1.MsgSetPauseStatus": {
                    aminoType: string;
                    toAmino: ({ sender, denom, status }: _44.MsgSetPauseStatus) => {
                        sender: string;
                        denom: string;
                        status: boolean;
                    };
                    fromAmino: ({ sender, denom, status }: {
                        sender: string;
                        denom: string;
                        status: boolean;
                    }) => _44.MsgSetPauseStatus;
                };
            };
            MsgIssueTokens: {
                encode(message: _44.MsgIssueTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgIssueTokens;
                fromPartial(object: Partial<_44.MsgIssueTokens>): _44.MsgIssueTokens;
            };
            MsgIssueTokensResponse: {
                encode(_: _44.MsgIssueTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgIssueTokensResponse;
                fromPartial(_: Partial<_44.MsgIssueTokensResponse>): _44.MsgIssueTokensResponse;
            };
            MsgRedeemTokens: {
                encode(message: _44.MsgRedeemTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgRedeemTokens;
                fromPartial(object: Partial<_44.MsgRedeemTokens>): _44.MsgRedeemTokens;
            };
            MsgRedeemTokensResponse: {
                encode(_: _44.MsgRedeemTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgRedeemTokensResponse;
                fromPartial(_: Partial<_44.MsgRedeemTokensResponse>): _44.MsgRedeemTokensResponse;
            };
            MsgBlockAddress: {
                encode(message: _44.MsgBlockAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgBlockAddress;
                fromPartial(object: Partial<_44.MsgBlockAddress>): _44.MsgBlockAddress;
            };
            MsgBlockAddressResponse: {
                encode(_: _44.MsgBlockAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgBlockAddressResponse;
                fromPartial(_: Partial<_44.MsgBlockAddressResponse>): _44.MsgBlockAddressResponse;
            };
            MsgUnblockAddress: {
                encode(message: _44.MsgUnblockAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgUnblockAddress;
                fromPartial(object: Partial<_44.MsgUnblockAddress>): _44.MsgUnblockAddress;
            };
            MsgUnblockAddressResponse: {
                encode(_: _44.MsgUnblockAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgUnblockAddressResponse;
                fromPartial(_: Partial<_44.MsgUnblockAddressResponse>): _44.MsgUnblockAddressResponse;
            };
            MsgSetPauseStatus: {
                encode(message: _44.MsgSetPauseStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgSetPauseStatus;
                fromPartial(object: Partial<_44.MsgSetPauseStatus>): _44.MsgSetPauseStatus;
            };
            MsgSetPauseStatusResponse: {
                encode(_: _44.MsgSetPauseStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgSetPauseStatusResponse;
                fromPartial(_: Partial<_44.MsgSetPauseStatusResponse>): _44.MsgSetPauseStatusResponse;
            };
            QueryParamsRequest: {
                encode(_: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _43.QueryParamsRequest;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.QueryParamsResponse;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.GenesisState;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            };
            Params: {
                encode(message: _42.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Params;
                fromPartial(object: Partial<_42.Params>): _42.Params;
            };
            Asset: {
                encode(message: _42.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Asset;
                fromPartial(object: Partial<_42.Asset>): _42.Asset;
            };
            RateLimit: {
                encode(message: _42.RateLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.RateLimit;
                fromPartial(object: Partial<_42.RateLimit>): _42.RateLimit;
            };
            AssetSupply: {
                encode(message: _42.AssetSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.AssetSupply;
                fromPartial(object: Partial<_42.AssetSupply>): _42.AssetSupply;
            };
        };
    }
    namespace kavadist {
        const v1beta1: {
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                balance(request?: _48.QueryBalanceRequest): Promise<_48.QueryBalanceResponse>;
            };
            LCDQueryClient: typeof _218.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.QueryParamsRequest;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
            };
            QueryBalanceRequest: {
                encode(_: _48.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _48.QueryBalanceRequest;
                fromPartial(_: Partial<_48.QueryBalanceRequest>): _48.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _48.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _48.QueryBalanceResponse;
                fromPartial(object: Partial<_48.QueryBalanceResponse>): _48.QueryBalanceResponse;
            };
            CommunityPoolMultiSpendProposal: {
                encode(message: _47.CommunityPoolMultiSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.CommunityPoolMultiSpendProposal;
                fromPartial(object: Partial<_47.CommunityPoolMultiSpendProposal>): _47.CommunityPoolMultiSpendProposal;
            };
            CommunityPoolMultiSpendProposalJSON: {
                encode(message: _47.CommunityPoolMultiSpendProposalJSON, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.CommunityPoolMultiSpendProposalJSON;
                fromPartial(object: Partial<_47.CommunityPoolMultiSpendProposalJSON>): _47.CommunityPoolMultiSpendProposalJSON;
            };
            MultiSpendRecipient: {
                encode(message: _47.MultiSpendRecipient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.MultiSpendRecipient;
                fromPartial(object: Partial<_47.MultiSpendRecipient>): _47.MultiSpendRecipient;
            };
            Params: {
                encode(message: _46.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
            };
            InfrastructureParams: {
                encode(message: _46.InfrastructureParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.InfrastructureParams;
                fromPartial(object: Partial<_46.InfrastructureParams>): _46.InfrastructureParams;
            };
            CoreReward: {
                encode(message: _46.CoreReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.CoreReward;
                fromPartial(object: Partial<_46.CoreReward>): _46.CoreReward;
            };
            PartnerReward: {
                encode(message: _46.PartnerReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.PartnerReward;
                fromPartial(object: Partial<_46.PartnerReward>): _46.PartnerReward;
            };
            Period: {
                encode(message: _46.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Period;
                fromPartial(object: Partial<_46.Period>): _46.Period;
            };
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
            };
        };
    }
    namespace liquid {
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                delegatedBalance(request: _49.QueryDelegatedBalanceRequest): Promise<_49.QueryDelegatedBalanceResponse>;
                totalSupply(request?: _49.QueryTotalSupplyRequest): Promise<_49.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _219.LCDQueryClient;
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
                    toAmino: ({ sender, validator, amount }: _50.MsgMintDerivative) => {
                        sender: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, validator, amount }: {
                        sender: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _50.MsgMintDerivative;
                };
                "/kava.liquid.v1beta1.MsgBurnDerivative": {
                    aminoType: string;
                    toAmino: ({ sender, validator, amount }: _50.MsgBurnDerivative) => {
                        sender: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, validator, amount }: {
                        sender: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _50.MsgBurnDerivative;
                };
            };
            MsgMintDerivative: {
                encode(message: _50.MsgMintDerivative, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgMintDerivative;
                fromPartial(object: Partial<_50.MsgMintDerivative>): _50.MsgMintDerivative;
            };
            MsgMintDerivativeResponse: {
                encode(message: _50.MsgMintDerivativeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgMintDerivativeResponse;
                fromPartial(object: Partial<_50.MsgMintDerivativeResponse>): _50.MsgMintDerivativeResponse;
            };
            MsgBurnDerivative: {
                encode(message: _50.MsgBurnDerivative, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgBurnDerivative;
                fromPartial(object: Partial<_50.MsgBurnDerivative>): _50.MsgBurnDerivative;
            };
            MsgBurnDerivativeResponse: {
                encode(message: _50.MsgBurnDerivativeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.MsgBurnDerivativeResponse;
                fromPartial(object: Partial<_50.MsgBurnDerivativeResponse>): _50.MsgBurnDerivativeResponse;
            };
            QueryDelegatedBalanceRequest: {
                encode(message: _49.QueryDelegatedBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegatedBalanceRequest;
                fromPartial(object: Partial<_49.QueryDelegatedBalanceRequest>): _49.QueryDelegatedBalanceRequest;
            };
            QueryDelegatedBalanceResponse: {
                encode(message: _49.QueryDelegatedBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryDelegatedBalanceResponse;
                fromPartial(object: Partial<_49.QueryDelegatedBalanceResponse>): _49.QueryDelegatedBalanceResponse;
            };
            QueryTotalSupplyRequest: {
                encode(_: _49.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_49.QueryTotalSupplyRequest>): _49.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _49.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_49.QueryTotalSupplyResponse>): _49.QueryTotalSupplyResponse;
            };
        };
    }
    namespace pricefeed {
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                price(request: _52.QueryPriceRequest): Promise<_52.QueryPriceResponse>;
                prices(request?: _52.QueryPricesRequest): Promise<_52.QueryPricesResponse>;
                rawPrices(request: _52.QueryRawPricesRequest): Promise<_52.QueryRawPricesResponse>;
                oracles(request: _52.QueryOraclesRequest): Promise<_52.QueryOraclesResponse>;
                markets(request?: _52.QueryMarketsRequest): Promise<_52.QueryMarketsResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
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
                    toAmino: ({ from, marketId, price, expiry }: _54.MsgPostPrice) => {
                        from: string;
                        market_id: string;
                        price: string;
                        expiry: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ from, market_id, price, expiry }: {
                        from: string;
                        market_id: string;
                        price: string;
                        expiry: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _54.MsgPostPrice;
                };
            };
            MsgPostPrice: {
                encode(message: _54.MsgPostPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _54.MsgPostPrice;
                fromPartial(object: Partial<_54.MsgPostPrice>): _54.MsgPostPrice;
            };
            MsgPostPriceResponse: {
                encode(_: _54.MsgPostPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _54.MsgPostPriceResponse;
                fromPartial(_: Partial<_54.MsgPostPriceResponse>): _54.MsgPostPriceResponse;
            };
            Params: {
                encode(message: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
            };
            Market: {
                encode(message: _53.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.Market;
                fromPartial(object: Partial<_53.Market>): _53.Market;
            };
            PostedPrice: {
                encode(message: _53.PostedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.PostedPrice;
                fromPartial(object: Partial<_53.PostedPrice>): _53.PostedPrice;
            };
            CurrentPrice: {
                encode(message: _53.CurrentPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _53.CurrentPrice;
                fromPartial(object: Partial<_53.CurrentPrice>): _53.CurrentPrice;
            };
            QueryParamsRequest: {
                encode(_: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.QueryParamsRequest;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
            };
            QueryPriceRequest: {
                encode(message: _52.QueryPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryPriceRequest;
                fromPartial(object: Partial<_52.QueryPriceRequest>): _52.QueryPriceRequest;
            };
            QueryPriceResponse: {
                encode(message: _52.QueryPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryPriceResponse;
                fromPartial(object: Partial<_52.QueryPriceResponse>): _52.QueryPriceResponse;
            };
            QueryPricesRequest: {
                encode(_: _52.QueryPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.QueryPricesRequest;
                fromPartial(_: Partial<_52.QueryPricesRequest>): _52.QueryPricesRequest;
            };
            QueryPricesResponse: {
                encode(message: _52.QueryPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryPricesResponse;
                fromPartial(object: Partial<_52.QueryPricesResponse>): _52.QueryPricesResponse;
            };
            QueryRawPricesRequest: {
                encode(message: _52.QueryRawPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryRawPricesRequest;
                fromPartial(object: Partial<_52.QueryRawPricesRequest>): _52.QueryRawPricesRequest;
            };
            QueryRawPricesResponse: {
                encode(message: _52.QueryRawPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryRawPricesResponse;
                fromPartial(object: Partial<_52.QueryRawPricesResponse>): _52.QueryRawPricesResponse;
            };
            QueryOraclesRequest: {
                encode(message: _52.QueryOraclesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryOraclesRequest;
                fromPartial(object: Partial<_52.QueryOraclesRequest>): _52.QueryOraclesRequest;
            };
            QueryOraclesResponse: {
                encode(message: _52.QueryOraclesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryOraclesResponse;
                fromPartial(object: Partial<_52.QueryOraclesResponse>): _52.QueryOraclesResponse;
            };
            QueryMarketsRequest: {
                encode(_: _52.QueryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _52.QueryMarketsRequest;
                fromPartial(_: Partial<_52.QueryMarketsRequest>): _52.QueryMarketsRequest;
            };
            QueryMarketsResponse: {
                encode(message: _52.QueryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryMarketsResponse;
                fromPartial(object: Partial<_52.QueryMarketsResponse>): _52.QueryMarketsResponse;
            };
            PostedPriceResponse: {
                encode(message: _52.PostedPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.PostedPriceResponse;
                fromPartial(object: Partial<_52.PostedPriceResponse>): _52.PostedPriceResponse;
            };
            CurrentPriceResponse: {
                encode(message: _52.CurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.CurrentPriceResponse;
                fromPartial(object: Partial<_52.CurrentPriceResponse>): _52.CurrentPriceResponse;
            };
            MarketResponse: {
                encode(message: _52.MarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.MarketResponse;
                fromPartial(object: Partial<_52.MarketResponse>): _52.MarketResponse;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
    }
    namespace router {
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
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
                    toAmino: ({ depositor, validator, amount }: _55.MsgMintDeposit) => {
                        depositor: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ depositor, validator, amount }: {
                        depositor: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _55.MsgMintDeposit;
                };
                "/kava.router.v1beta1.MsgDelegateMintDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, validator, amount }: _55.MsgDelegateMintDeposit) => {
                        depositor: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ depositor, validator, amount }: {
                        depositor: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _55.MsgDelegateMintDeposit;
                };
                "/kava.router.v1beta1.MsgWithdrawBurn": {
                    aminoType: string;
                    toAmino: ({ from, validator, amount }: _55.MsgWithdrawBurn) => {
                        from: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ from, validator, amount }: {
                        from: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _55.MsgWithdrawBurn;
                };
                "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
                    aminoType: string;
                    toAmino: ({ from, validator, amount }: _55.MsgWithdrawBurnUndelegate) => {
                        from: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ from, validator, amount }: {
                        from: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _55.MsgWithdrawBurnUndelegate;
                };
            };
            MsgMintDeposit: {
                encode(message: _55.MsgMintDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgMintDeposit;
                fromPartial(object: Partial<_55.MsgMintDeposit>): _55.MsgMintDeposit;
            };
            MsgMintDepositResponse: {
                encode(_: _55.MsgMintDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgMintDepositResponse;
                fromPartial(_: Partial<_55.MsgMintDepositResponse>): _55.MsgMintDepositResponse;
            };
            MsgDelegateMintDeposit: {
                encode(message: _55.MsgDelegateMintDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgDelegateMintDeposit;
                fromPartial(object: Partial<_55.MsgDelegateMintDeposit>): _55.MsgDelegateMintDeposit;
            };
            MsgDelegateMintDepositResponse: {
                encode(_: _55.MsgDelegateMintDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgDelegateMintDepositResponse;
                fromPartial(_: Partial<_55.MsgDelegateMintDepositResponse>): _55.MsgDelegateMintDepositResponse;
            };
            MsgWithdrawBurn: {
                encode(message: _55.MsgWithdrawBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgWithdrawBurn;
                fromPartial(object: Partial<_55.MsgWithdrawBurn>): _55.MsgWithdrawBurn;
            };
            MsgWithdrawBurnResponse: {
                encode(_: _55.MsgWithdrawBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgWithdrawBurnResponse;
                fromPartial(_: Partial<_55.MsgWithdrawBurnResponse>): _55.MsgWithdrawBurnResponse;
            };
            MsgWithdrawBurnUndelegate: {
                encode(message: _55.MsgWithdrawBurnUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _55.MsgWithdrawBurnUndelegate;
                fromPartial(object: Partial<_55.MsgWithdrawBurnUndelegate>): _55.MsgWithdrawBurnUndelegate;
            };
            MsgWithdrawBurnUndelegateResponse: {
                encode(_: _55.MsgWithdrawBurnUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _55.MsgWithdrawBurnUndelegateResponse;
                fromPartial(_: Partial<_55.MsgWithdrawBurnUndelegateResponse>): _55.MsgWithdrawBurnUndelegateResponse;
            };
        };
    }
    namespace savings {
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _236.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                totalSupply(request?: _57.QueryTotalSupplyRequest): Promise<_57.QueryTotalSupplyResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
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
                    toAmino: ({ depositor, amount }: _59.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _59.MsgDeposit;
                };
                "/kava.savings.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _59.MsgWithdraw) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _59.MsgWithdraw;
                };
            };
            MsgDeposit: {
                encode(message: _59.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgDeposit;
                fromPartial(object: Partial<_59.MsgDeposit>): _59.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _59.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgDepositResponse;
                fromPartial(_: Partial<_59.MsgDepositResponse>): _59.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _59.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _59.MsgWithdraw;
                fromPartial(object: Partial<_59.MsgWithdraw>): _59.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _59.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _59.MsgWithdrawResponse;
                fromPartial(_: Partial<_59.MsgWithdrawResponse>): _59.MsgWithdrawResponse;
            };
            Params: {
                encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.Params;
                fromPartial(object: Partial<_58.Params>): _58.Params;
            };
            Deposit: {
                encode(message: _58.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _58.Deposit;
                fromPartial(object: Partial<_58.Deposit>): _58.Deposit;
            };
            QueryParamsRequest: {
                encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.QueryParamsRequest;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _57.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryDepositsRequest;
                fromPartial(object: Partial<_57.QueryDepositsRequest>): _57.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _57.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryDepositsResponse;
                fromPartial(object: Partial<_57.QueryDepositsResponse>): _57.QueryDepositsResponse;
            };
            QueryTotalSupplyRequest: {
                encode(_: _57.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _57.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_57.QueryTotalSupplyRequest>): _57.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _57.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _57.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_57.QueryTotalSupplyResponse>): _57.QueryTotalSupplyResponse;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _56.GenesisState;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace swap {
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                pools(request: _61.QueryPoolsRequest): Promise<_61.QueryPoolsResponse>;
                deposits(request: _61.QueryDepositsRequest): Promise<_61.QueryDepositsResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
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
                    toAmino: ({ depositor, tokenA, tokenB, slippage, deadline }: _63.MsgDeposit) => {
                        depositor: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ depositor, token_a, token_b, slippage, deadline }: {
                        depositor: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _63.MsgDeposit;
                };
                "/kava.swap.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ from, shares, minTokenA, minTokenB, deadline }: _63.MsgWithdraw) => {
                        from: string;
                        shares: string;
                        min_token_a: {
                            denom: string;
                            amount: string;
                        };
                        min_token_b: {
                            denom: string;
                            amount: string;
                        };
                        deadline: string;
                    };
                    fromAmino: ({ from, shares, min_token_a, min_token_b, deadline }: {
                        from: string;
                        shares: string;
                        min_token_a: {
                            denom: string;
                            amount: string;
                        };
                        min_token_b: {
                            denom: string;
                            amount: string;
                        };
                        deadline: string;
                    }) => _63.MsgWithdraw;
                };
                "/kava.swap.v1beta1.MsgSwapExactForTokens": {
                    aminoType: string;
                    toAmino: ({ requester, exactTokenA, tokenB, slippage, deadline }: _63.MsgSwapExactForTokens) => {
                        requester: string;
                        exact_token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ requester, exact_token_a, token_b, slippage, deadline }: {
                        requester: string;
                        exact_token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _63.MsgSwapExactForTokens;
                };
                "/kava.swap.v1beta1.MsgSwapForExactTokens": {
                    aminoType: string;
                    toAmino: ({ requester, tokenA, exactTokenB, slippage, deadline }: _63.MsgSwapForExactTokens) => {
                        requester: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        exact_token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ requester, token_a, exact_token_b, slippage, deadline }: {
                        requester: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        exact_token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _63.MsgSwapForExactTokens;
                };
            };
            MsgDeposit: {
                encode(message: _63.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgDeposit;
                fromPartial(object: Partial<_63.MsgDeposit>): _63.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _63.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgDepositResponse;
                fromPartial(_: Partial<_63.MsgDepositResponse>): _63.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _63.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgWithdraw;
                fromPartial(object: Partial<_63.MsgWithdraw>): _63.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _63.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgWithdrawResponse;
                fromPartial(_: Partial<_63.MsgWithdrawResponse>): _63.MsgWithdrawResponse;
            };
            MsgSwapExactForTokens: {
                encode(message: _63.MsgSwapExactForTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgSwapExactForTokens;
                fromPartial(object: Partial<_63.MsgSwapExactForTokens>): _63.MsgSwapExactForTokens;
            };
            MsgSwapExactForTokensResponse: {
                encode(_: _63.MsgSwapExactForTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgSwapExactForTokensResponse;
                fromPartial(_: Partial<_63.MsgSwapExactForTokensResponse>): _63.MsgSwapExactForTokensResponse;
            };
            MsgSwapForExactTokens: {
                encode(message: _63.MsgSwapForExactTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _63.MsgSwapForExactTokens;
                fromPartial(object: Partial<_63.MsgSwapForExactTokens>): _63.MsgSwapForExactTokens;
            };
            MsgSwapForExactTokensResponse: {
                encode(_: _63.MsgSwapForExactTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _63.MsgSwapForExactTokensResponse;
                fromPartial(_: Partial<_63.MsgSwapForExactTokensResponse>): _63.MsgSwapForExactTokensResponse;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.Params;
                fromPartial(object: Partial<_62.Params>): _62.Params;
            };
            AllowedPool: {
                encode(message: _62.AllowedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.AllowedPool;
                fromPartial(object: Partial<_62.AllowedPool>): _62.AllowedPool;
            };
            PoolRecord: {
                encode(message: _62.PoolRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.PoolRecord;
                fromPartial(object: Partial<_62.PoolRecord>): _62.PoolRecord;
            };
            ShareRecord: {
                encode(message: _62.ShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _62.ShareRecord;
                fromPartial(object: Partial<_62.ShareRecord>): _62.ShareRecord;
            };
            QueryParamsRequest: {
                encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _61.QueryParamsRequest;
                fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryParamsResponse;
                fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
            };
            QueryPoolsRequest: {
                encode(message: _61.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryPoolsRequest;
                fromPartial(object: Partial<_61.QueryPoolsRequest>): _61.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _61.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryPoolsResponse;
                fromPartial(object: Partial<_61.QueryPoolsResponse>): _61.QueryPoolsResponse;
            };
            PoolResponse: {
                encode(message: _61.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.PoolResponse;
                fromPartial(object: Partial<_61.PoolResponse>): _61.PoolResponse;
            };
            QueryDepositsRequest: {
                encode(message: _61.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDepositsRequest;
                fromPartial(object: Partial<_61.QueryDepositsRequest>): _61.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _61.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.QueryDepositsResponse;
                fromPartial(object: Partial<_61.QueryDepositsResponse>): _61.QueryDepositsResponse;
            };
            DepositResponse: {
                encode(message: _61.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _61.DepositResponse;
                fromPartial(object: Partial<_61.DepositResponse>): _61.DepositResponse;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _60.GenesisState;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            kava: {
                auction: {
                    v1beta1: _238.MsgClientImpl;
                };
                bep3: {
                    v1beta1: _239.MsgClientImpl;
                };
                cdp: {
                    v1beta1: _240.MsgClientImpl;
                };
                committee: {
                    v1beta1: _241.MsgClientImpl;
                };
                community: {
                    v1beta1: _242.MsgClientImpl;
                };
                earn: {
                    v1beta1: _243.MsgClientImpl;
                };
                evmutil: {
                    v1beta1: _244.MsgClientImpl;
                };
                hard: {
                    v1beta1: _245.MsgClientImpl;
                };
                incentive: {
                    v1beta1: _246.MsgClientImpl;
                };
                issuance: {
                    v1beta1: _247.MsgClientImpl;
                };
                liquid: {
                    v1beta1: _248.MsgClientImpl;
                };
                pricefeed: {
                    v1beta1: _249.MsgClientImpl;
                };
                router: {
                    v1beta1: _250.MsgClientImpl;
                };
                savings: {
                    v1beta1: _251.MsgClientImpl;
                };
                swap: {
                    v1beta1: _252.MsgClientImpl;
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
                    v1beta1: _208.LCDQueryClient;
                };
                bep3: {
                    v1beta1: _209.LCDQueryClient;
                };
                cdp: {
                    v1beta1: _210.LCDQueryClient;
                };
                committee: {
                    v1beta1: _211.LCDQueryClient;
                };
                community: {
                    v1beta1: _212.LCDQueryClient;
                };
                earn: {
                    v1beta1: _213.LCDQueryClient;
                };
                evmutil: {
                    v1beta1: _214.LCDQueryClient;
                };
                hard: {
                    v1beta1: _215.LCDQueryClient;
                };
                incentive: {
                    v1beta1: _216.LCDQueryClient;
                };
                issuance: {
                    v1beta1: _217.LCDQueryClient;
                };
                kavadist: {
                    v1beta1: _218.LCDQueryClient;
                };
                liquid: {
                    v1beta1: _219.LCDQueryClient;
                };
                pricefeed: {
                    v1beta1: _220.LCDQueryClient;
                };
                savings: {
                    v1beta1: _221.LCDQueryClient;
                };
                swap: {
                    v1beta1: _222.LCDQueryClient;
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
