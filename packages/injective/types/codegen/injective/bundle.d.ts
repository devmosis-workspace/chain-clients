import * as _0 from "./auction/v1beta1/auction";
import * as _1 from "./auction/v1beta1/genesis";
import * as _2 from "./auction/v1beta1/query";
import * as _3 from "./auction/v1beta1/tx";
import * as _4 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _5 from "./exchange/v1beta1/authz";
import * as _6 from "./exchange/v1beta1/events";
import * as _7 from "./exchange/v1beta1/exchange";
import * as _8 from "./exchange/v1beta1/genesis";
import * as _9 from "./exchange/v1beta1/query";
import * as _10 from "./exchange/v1beta1/tx";
import * as _11 from "./insurance/v1beta1/genesis";
import * as _12 from "./insurance/v1beta1/insurance";
import * as _13 from "./insurance/v1beta1/query";
import * as _14 from "./insurance/v1beta1/tx";
import * as _15 from "./ocr/v1beta1/genesis";
import * as _16 from "./ocr/v1beta1/ocr";
import * as _17 from "./ocr/v1beta1/query";
import * as _18 from "./ocr/v1beta1/tx";
import * as _19 from "./oracle/v1beta1/events";
import * as _20 from "./oracle/v1beta1/genesis";
import * as _21 from "./oracle/v1beta1/oracle";
import * as _22 from "./oracle/v1beta1/proposal";
import * as _23 from "./oracle/v1beta1/query";
import * as _24 from "./oracle/v1beta1/tx";
import * as _25 from "./peggy/v1/attestation";
import * as _26 from "./peggy/v1/batch";
import * as _27 from "./peggy/v1/ethereum_signer";
import * as _28 from "./peggy/v1/events";
import * as _29 from "./peggy/v1/genesis";
import * as _30 from "./peggy/v1/msgs";
import * as _31 from "./peggy/v1/params";
import * as _32 from "./peggy/v1/pool";
import * as _33 from "./peggy/v1/proposal";
import * as _34 from "./peggy/v1/query";
import * as _35 from "./peggy/v1/types";
import * as _36 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _37 from "./tokenfactory/v1beta1/events";
import * as _38 from "./tokenfactory/v1beta1/genesis";
import * as _39 from "./tokenfactory/v1beta1/params";
import * as _40 from "./tokenfactory/v1beta1/query";
import * as _41 from "./tokenfactory/v1beta1/tx";
import * as _42 from "./types/v1beta1/account";
import * as _43 from "./types/v1beta1/tx_ext";
import * as _44 from "./types/v1beta1/tx_response";
import * as _45 from "./wasmx/v1/events";
import * as _46 from "./wasmx/v1/genesis";
import * as _47 from "./wasmx/v1/proposal";
import * as _48 from "./wasmx/v1/query";
import * as _49 from "./wasmx/v1/tx";
import * as _50 from "./wasmx/v1/wasmx";
import * as _220 from "./auction/v1beta1/query.lcd";
import * as _221 from "./exchange/v1beta1/query.lcd";
import * as _222 from "./insurance/v1beta1/query.lcd";
import * as _223 from "./ocr/v1beta1/query.lcd";
import * as _224 from "./oracle/v1beta1/query.lcd";
import * as _225 from "./peggy/v1/query.lcd";
import * as _226 from "./tokenfactory/v1beta1/query.lcd";
import * as _227 from "./wasmx/v1/query.lcd";
import * as _228 from "./auction/v1beta1/query.rpc.Query";
import * as _229 from "./exchange/v1beta1/query.rpc.Query";
import * as _230 from "./insurance/v1beta1/query.rpc.Query";
import * as _231 from "./ocr/v1beta1/query.rpc.Query";
import * as _232 from "./oracle/v1beta1/query.rpc.Query";
import * as _233 from "./peggy/v1/query.rpc.Query";
import * as _234 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _235 from "./wasmx/v1/query.rpc.Query";
import * as _236 from "./auction/v1beta1/tx.rpc.msg";
import * as _237 from "./exchange/v1beta1/tx.rpc.msg";
import * as _238 from "./insurance/v1beta1/tx.rpc.msg";
import * as _239 from "./ocr/v1beta1/tx.rpc.msg";
import * as _240 from "./oracle/v1beta1/tx.rpc.msg";
import * as _241 from "./peggy/v1/msgs.rpc.msg";
import * as _242 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _243 from "./wasmx/v1/tx.rpc.msg";
export declare namespace injective {
    namespace auction {
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                auctionParams(request?: _2.QueryAuctionParamsRequest): Promise<_2.QueryAuctionParamsResponse>;
                currentAuctionBasket(request?: _2.QueryCurrentAuctionBasketRequest): Promise<_2.QueryCurrentAuctionBasketResponse>;
                auctionModuleState(request?: _2.QueryModuleStateRequest): Promise<_2.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    bid(value: _3.MsgBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    bid(value: _3.MsgBid): {
                        typeUrl: string;
                        value: _3.MsgBid;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    bid(value: any): {
                        typeUrl: string;
                        value: _3.MsgBid;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    bid(value: _3.MsgBid): {
                        typeUrl: string;
                        value: _3.MsgBid;
                    };
                    updateParams(value: _3.MsgUpdateParams): {
                        typeUrl: string;
                        value: _3.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.auction.v1beta1.MsgBid": {
                    aminoType: string;
                    toAmino: (message: _3.MsgBid) => _3.MsgBidAmino;
                    fromAmino: (object: _3.MsgBidAmino) => _3.MsgBid;
                };
                "/injective.auction.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _3.MsgUpdateParams) => _3.MsgUpdateParamsAmino;
                    fromAmino: (object: _3.MsgUpdateParamsAmino) => _3.MsgUpdateParams;
                };
            };
            MsgBid: {
                typeUrl: string;
                encode(message: _3.MsgBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgBid;
                fromPartial(object: Partial<_3.MsgBid>): _3.MsgBid;
                fromAmino(object: _3.MsgBidAmino): _3.MsgBid;
                toAmino(message: _3.MsgBid): _3.MsgBidAmino;
                fromAminoMsg(object: _3.MsgBidAminoMsg): _3.MsgBid;
                fromProtoMsg(message: _3.MsgBidProtoMsg): _3.MsgBid;
                toProto(message: _3.MsgBid): Uint8Array;
                toProtoMsg(message: _3.MsgBid): _3.MsgBidProtoMsg;
            };
            MsgBidResponse: {
                typeUrl: string;
                encode(_: _3.MsgBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgBidResponse;
                fromPartial(_: Partial<_3.MsgBidResponse>): _3.MsgBidResponse;
                fromAmino(_: _3.MsgBidResponseAmino): _3.MsgBidResponse;
                toAmino(_: _3.MsgBidResponse): _3.MsgBidResponseAmino;
                fromAminoMsg(object: _3.MsgBidResponseAminoMsg): _3.MsgBidResponse;
                fromProtoMsg(message: _3.MsgBidResponseProtoMsg): _3.MsgBidResponse;
                toProto(message: _3.MsgBidResponse): Uint8Array;
                toProtoMsg(message: _3.MsgBidResponse): _3.MsgBidResponseProtoMsg;
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
            QueryAuctionParamsRequest: {
                typeUrl: string;
                encode(_: _2.QueryAuctionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryAuctionParamsRequest;
                fromPartial(_: Partial<_2.QueryAuctionParamsRequest>): _2.QueryAuctionParamsRequest;
                fromAmino(_: _2.QueryAuctionParamsRequestAmino): _2.QueryAuctionParamsRequest;
                toAmino(_: _2.QueryAuctionParamsRequest): _2.QueryAuctionParamsRequestAmino;
                fromAminoMsg(object: _2.QueryAuctionParamsRequestAminoMsg): _2.QueryAuctionParamsRequest;
                fromProtoMsg(message: _2.QueryAuctionParamsRequestProtoMsg): _2.QueryAuctionParamsRequest;
                toProto(message: _2.QueryAuctionParamsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryAuctionParamsRequest): _2.QueryAuctionParamsRequestProtoMsg;
            };
            QueryAuctionParamsResponse: {
                typeUrl: string;
                encode(message: _2.QueryAuctionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAuctionParamsResponse;
                fromPartial(object: Partial<_2.QueryAuctionParamsResponse>): _2.QueryAuctionParamsResponse;
                fromAmino(object: _2.QueryAuctionParamsResponseAmino): _2.QueryAuctionParamsResponse;
                toAmino(message: _2.QueryAuctionParamsResponse): _2.QueryAuctionParamsResponseAmino;
                fromAminoMsg(object: _2.QueryAuctionParamsResponseAminoMsg): _2.QueryAuctionParamsResponse;
                fromProtoMsg(message: _2.QueryAuctionParamsResponseProtoMsg): _2.QueryAuctionParamsResponse;
                toProto(message: _2.QueryAuctionParamsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryAuctionParamsResponse): _2.QueryAuctionParamsResponseProtoMsg;
            };
            QueryCurrentAuctionBasketRequest: {
                typeUrl: string;
                encode(_: _2.QueryCurrentAuctionBasketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryCurrentAuctionBasketRequest;
                fromPartial(_: Partial<_2.QueryCurrentAuctionBasketRequest>): _2.QueryCurrentAuctionBasketRequest;
                fromAmino(_: _2.QueryCurrentAuctionBasketRequestAmino): _2.QueryCurrentAuctionBasketRequest;
                toAmino(_: _2.QueryCurrentAuctionBasketRequest): _2.QueryCurrentAuctionBasketRequestAmino;
                fromAminoMsg(object: _2.QueryCurrentAuctionBasketRequestAminoMsg): _2.QueryCurrentAuctionBasketRequest;
                fromProtoMsg(message: _2.QueryCurrentAuctionBasketRequestProtoMsg): _2.QueryCurrentAuctionBasketRequest;
                toProto(message: _2.QueryCurrentAuctionBasketRequest): Uint8Array;
                toProtoMsg(message: _2.QueryCurrentAuctionBasketRequest): _2.QueryCurrentAuctionBasketRequestProtoMsg;
            };
            QueryCurrentAuctionBasketResponse: {
                typeUrl: string;
                encode(message: _2.QueryCurrentAuctionBasketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryCurrentAuctionBasketResponse;
                fromPartial(object: Partial<_2.QueryCurrentAuctionBasketResponse>): _2.QueryCurrentAuctionBasketResponse;
                fromAmino(object: _2.QueryCurrentAuctionBasketResponseAmino): _2.QueryCurrentAuctionBasketResponse;
                toAmino(message: _2.QueryCurrentAuctionBasketResponse): _2.QueryCurrentAuctionBasketResponseAmino;
                fromAminoMsg(object: _2.QueryCurrentAuctionBasketResponseAminoMsg): _2.QueryCurrentAuctionBasketResponse;
                fromProtoMsg(message: _2.QueryCurrentAuctionBasketResponseProtoMsg): _2.QueryCurrentAuctionBasketResponse;
                toProto(message: _2.QueryCurrentAuctionBasketResponse): Uint8Array;
                toProtoMsg(message: _2.QueryCurrentAuctionBasketResponse): _2.QueryCurrentAuctionBasketResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _2.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryModuleStateRequest;
                fromPartial(_: Partial<_2.QueryModuleStateRequest>): _2.QueryModuleStateRequest;
                fromAmino(_: _2.QueryModuleStateRequestAmino): _2.QueryModuleStateRequest;
                toAmino(_: _2.QueryModuleStateRequest): _2.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _2.QueryModuleStateRequestAminoMsg): _2.QueryModuleStateRequest;
                fromProtoMsg(message: _2.QueryModuleStateRequestProtoMsg): _2.QueryModuleStateRequest;
                toProto(message: _2.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _2.QueryModuleStateRequest): _2.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _2.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryModuleStateResponse;
                fromPartial(object: Partial<_2.QueryModuleStateResponse>): _2.QueryModuleStateResponse;
                fromAmino(object: _2.QueryModuleStateResponseAmino): _2.QueryModuleStateResponse;
                toAmino(message: _2.QueryModuleStateResponse): _2.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _2.QueryModuleStateResponseAminoMsg): _2.QueryModuleStateResponse;
                fromProtoMsg(message: _2.QueryModuleStateResponseProtoMsg): _2.QueryModuleStateResponse;
                toProto(message: _2.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _2.QueryModuleStateResponse): _2.QueryModuleStateResponseProtoMsg;
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
                encode(message: _0.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Params;
                fromPartial(object: Partial<_0.Params>): _0.Params;
                fromAmino(object: _0.ParamsAmino): _0.Params;
                toAmino(message: _0.Params): _0.ParamsAmino;
                fromAminoMsg(object: _0.ParamsAminoMsg): _0.Params;
                fromProtoMsg(message: _0.ParamsProtoMsg): _0.Params;
                toProto(message: _0.Params): Uint8Array;
                toProtoMsg(message: _0.Params): _0.ParamsProtoMsg;
            };
            Bid: {
                typeUrl: string;
                encode(message: _0.Bid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Bid;
                fromPartial(object: Partial<_0.Bid>): _0.Bid;
                fromAmino(object: _0.BidAmino): _0.Bid;
                toAmino(message: _0.Bid): _0.BidAmino;
                fromAminoMsg(object: _0.BidAminoMsg): _0.Bid;
                fromProtoMsg(message: _0.BidProtoMsg): _0.Bid;
                toProto(message: _0.Bid): Uint8Array;
                toProtoMsg(message: _0.Bid): _0.BidProtoMsg;
            };
            EventBid: {
                typeUrl: string;
                encode(message: _0.EventBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EventBid;
                fromPartial(object: Partial<_0.EventBid>): _0.EventBid;
                fromAmino(object: _0.EventBidAmino): _0.EventBid;
                toAmino(message: _0.EventBid): _0.EventBidAmino;
                fromAminoMsg(object: _0.EventBidAminoMsg): _0.EventBid;
                fromProtoMsg(message: _0.EventBidProtoMsg): _0.EventBid;
                toProto(message: _0.EventBid): Uint8Array;
                toProtoMsg(message: _0.EventBid): _0.EventBidProtoMsg;
            };
            EventAuctionResult: {
                typeUrl: string;
                encode(message: _0.EventAuctionResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EventAuctionResult;
                fromPartial(object: Partial<_0.EventAuctionResult>): _0.EventAuctionResult;
                fromAmino(object: _0.EventAuctionResultAmino): _0.EventAuctionResult;
                toAmino(message: _0.EventAuctionResult): _0.EventAuctionResultAmino;
                fromAminoMsg(object: _0.EventAuctionResultAminoMsg): _0.EventAuctionResult;
                fromProtoMsg(message: _0.EventAuctionResultProtoMsg): _0.EventAuctionResult;
                toProto(message: _0.EventAuctionResult): Uint8Array;
                toProtoMsg(message: _0.EventAuctionResult): _0.EventAuctionResultProtoMsg;
            };
            EventAuctionStart: {
                typeUrl: string;
                encode(message: _0.EventAuctionStart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EventAuctionStart;
                fromPartial(object: Partial<_0.EventAuctionStart>): _0.EventAuctionStart;
                fromAmino(object: _0.EventAuctionStartAmino): _0.EventAuctionStart;
                toAmino(message: _0.EventAuctionStart): _0.EventAuctionStartAmino;
                fromAminoMsg(object: _0.EventAuctionStartAminoMsg): _0.EventAuctionStart;
                fromProtoMsg(message: _0.EventAuctionStartProtoMsg): _0.EventAuctionStart;
                toProto(message: _0.EventAuctionStart): Uint8Array;
                toProtoMsg(message: _0.EventAuctionStart): _0.EventAuctionStartProtoMsg;
            };
        };
    }
    namespace crypto {
        namespace v1beta1 {
            const ethsecp256k1: {
                PubKey: {
                    typeUrl: string;
                    encode(message: _4.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _4.PubKey;
                    fromPartial(object: Partial<_4.PubKey>): _4.PubKey;
                    fromAmino(object: _4.PubKeyAmino): _4.PubKey;
                    toAmino(message: _4.PubKey): _4.PubKeyAmino;
                    fromAminoMsg(object: _4.PubKeyAminoMsg): _4.PubKey;
                    fromProtoMsg(message: _4.PubKeyProtoMsg): _4.PubKey;
                    toProto(message: _4.PubKey): Uint8Array;
                    toProtoMsg(message: _4.PubKey): _4.PubKeyProtoMsg;
                };
                PrivKey: {
                    typeUrl: string;
                    encode(message: _4.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _4.PrivKey;
                    fromPartial(object: Partial<_4.PrivKey>): _4.PrivKey;
                    fromAmino(object: _4.PrivKeyAmino): _4.PrivKey;
                    toAmino(message: _4.PrivKey): _4.PrivKeyAmino;
                    fromAminoMsg(object: _4.PrivKeyAminoMsg): _4.PrivKey;
                    fromProtoMsg(message: _4.PrivKeyProtoMsg): _4.PrivKey;
                    toProto(message: _4.PrivKey): Uint8Array;
                    toProtoMsg(message: _4.PrivKey): _4.PrivKeyProtoMsg;
                };
            };
        }
    }
    namespace exchange {
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                queryExchangeParams(request?: _9.QueryExchangeParamsRequest): Promise<_9.QueryExchangeParamsResponse>;
                subaccountDeposits(request: _9.QuerySubaccountDepositsRequest): Promise<_9.QuerySubaccountDepositsResponse>;
                subaccountDeposit(request: _9.QuerySubaccountDepositRequest): Promise<_9.QuerySubaccountDepositResponse>;
                exchangeBalances(request?: _9.QueryExchangeBalancesRequest): Promise<_9.QueryExchangeBalancesResponse>;
                aggregateVolume(request: _9.QueryAggregateVolumeRequest): Promise<_9.QueryAggregateVolumeResponse>;
                aggregateVolumes(request: _9.QueryAggregateVolumesRequest): Promise<_9.QueryAggregateVolumesResponse>;
                aggregateMarketVolume(request: _9.QueryAggregateMarketVolumeRequest): Promise<_9.QueryAggregateMarketVolumeResponse>;
                aggregateMarketVolumes(request: _9.QueryAggregateMarketVolumesRequest): Promise<_9.QueryAggregateMarketVolumesResponse>;
                denomDecimal(request: _9.QueryDenomDecimalRequest): Promise<_9.QueryDenomDecimalResponse>;
                denomDecimals(request: _9.QueryDenomDecimalsRequest): Promise<_9.QueryDenomDecimalsResponse>;
                spotMarkets(request: _9.QuerySpotMarketsRequest): Promise<_9.QuerySpotMarketsResponse>;
                spotMarket(request: _9.QuerySpotMarketRequest): Promise<_9.QuerySpotMarketResponse>;
                fullSpotMarkets(request: _9.QueryFullSpotMarketsRequest): Promise<_9.QueryFullSpotMarketsResponse>;
                fullSpotMarket(request: _9.QueryFullSpotMarketRequest): Promise<_9.QueryFullSpotMarketResponse>;
                spotOrderbook(request: _9.QuerySpotOrderbookRequest): Promise<_9.QuerySpotOrderbookResponse>;
                traderSpotOrders(request: _9.QueryTraderSpotOrdersRequest): Promise<_9.QueryTraderSpotOrdersResponse>;
                accountAddressSpotOrders(request: _9.QueryAccountAddressSpotOrdersRequest): Promise<_9.QueryAccountAddressSpotOrdersResponse>;
                spotOrdersByHashes(request: _9.QuerySpotOrdersByHashesRequest): Promise<_9.QuerySpotOrdersByHashesResponse>;
                subaccountOrders(request: _9.QuerySubaccountOrdersRequest): Promise<_9.QuerySubaccountOrdersResponse>;
                traderSpotTransientOrders(request: _9.QueryTraderSpotOrdersRequest): Promise<_9.QueryTraderSpotOrdersResponse>;
                spotMidPriceAndTOB(request: _9.QuerySpotMidPriceAndTOBRequest): Promise<_9.QuerySpotMidPriceAndTOBResponse>;
                derivativeMidPriceAndTOB(request: _9.QueryDerivativeMidPriceAndTOBRequest): Promise<_9.QueryDerivativeMidPriceAndTOBResponse>;
                derivativeOrderbook(request: _9.QueryDerivativeOrderbookRequest): Promise<_9.QueryDerivativeOrderbookResponse>;
                traderDerivativeOrders(request: _9.QueryTraderDerivativeOrdersRequest): Promise<_9.QueryTraderDerivativeOrdersResponse>;
                accountAddressDerivativeOrders(request: _9.QueryAccountAddressDerivativeOrdersRequest): Promise<_9.QueryAccountAddressDerivativeOrdersResponse>;
                derivativeOrdersByHashes(request: _9.QueryDerivativeOrdersByHashesRequest): Promise<_9.QueryDerivativeOrdersByHashesResponse>;
                traderDerivativeTransientOrders(request: _9.QueryTraderDerivativeOrdersRequest): Promise<_9.QueryTraderDerivativeOrdersResponse>;
                derivativeMarkets(request: _9.QueryDerivativeMarketsRequest): Promise<_9.QueryDerivativeMarketsResponse>;
                derivativeMarket(request: _9.QueryDerivativeMarketRequest): Promise<_9.QueryDerivativeMarketResponse>;
                derivativeMarketAddress(request: _9.QueryDerivativeMarketAddressRequest): Promise<_9.QueryDerivativeMarketAddressResponse>;
                subaccountTradeNonce(request: _9.QuerySubaccountTradeNonceRequest): Promise<_9.QuerySubaccountTradeNonceResponse>;
                exchangeModuleState(request?: _9.QueryModuleStateRequest): Promise<_9.QueryModuleStateResponse>;
                positions(request?: _9.QueryPositionsRequest): Promise<_9.QueryPositionsResponse>;
                subaccountPositions(request: _9.QuerySubaccountPositionsRequest): Promise<_9.QuerySubaccountPositionsResponse>;
                subaccountPositionInMarket(request: _9.QuerySubaccountPositionInMarketRequest): Promise<_9.QuerySubaccountPositionInMarketResponse>;
                subaccountEffectivePositionInMarket(request: _9.QuerySubaccountEffectivePositionInMarketRequest): Promise<_9.QuerySubaccountEffectivePositionInMarketResponse>;
                perpetualMarketInfo(request: _9.QueryPerpetualMarketInfoRequest): Promise<_9.QueryPerpetualMarketInfoResponse>;
                expiryFuturesMarketInfo(request: _9.QueryExpiryFuturesMarketInfoRequest): Promise<_9.QueryExpiryFuturesMarketInfoResponse>;
                perpetualMarketFunding(request: _9.QueryPerpetualMarketFundingRequest): Promise<_9.QueryPerpetualMarketFundingResponse>;
                subaccountOrderMetadata(request: _9.QuerySubaccountOrderMetadataRequest): Promise<_9.QuerySubaccountOrderMetadataResponse>;
                tradeRewardPoints(request: _9.QueryTradeRewardPointsRequest): Promise<_9.QueryTradeRewardPointsResponse>;
                pendingTradeRewardPoints(request: _9.QueryTradeRewardPointsRequest): Promise<_9.QueryTradeRewardPointsResponse>;
                tradeRewardCampaign(request?: _9.QueryTradeRewardCampaignRequest): Promise<_9.QueryTradeRewardCampaignResponse>;
                feeDiscountAccountInfo(request: _9.QueryFeeDiscountAccountInfoRequest): Promise<_9.QueryFeeDiscountAccountInfoResponse>;
                feeDiscountSchedule(request?: _9.QueryFeeDiscountScheduleRequest): Promise<_9.QueryFeeDiscountScheduleResponse>;
                balanceMismatches(request: _9.QueryBalanceMismatchesRequest): Promise<_9.QueryBalanceMismatchesResponse>;
                balanceWithBalanceHolds(request?: _9.QueryBalanceWithBalanceHoldsRequest): Promise<_9.QueryBalanceWithBalanceHoldsResponse>;
                feeDiscountTierStatistics(request?: _9.QueryFeeDiscountTierStatisticsRequest): Promise<_9.QueryFeeDiscountTierStatisticsResponse>;
                mitoVaultInfos(request?: _9.MitoVaultInfosRequest): Promise<_9.MitoVaultInfosResponse>;
                queryMarketIDFromVault(request: _9.QueryMarketIDFromVaultRequest): Promise<_9.QueryMarketIDFromVaultResponse>;
                historicalTradeRecords(request: _9.QueryHistoricalTradeRecordsRequest): Promise<_9.QueryHistoricalTradeRecordsResponse>;
                isOptedOutOfRewards(request: _9.QueryIsOptedOutOfRewardsRequest): Promise<_9.QueryIsOptedOutOfRewardsResponse>;
                optedOutOfRewardsAccounts(request?: _9.QueryOptedOutOfRewardsAccountsRequest): Promise<_9.QueryOptedOutOfRewardsAccountsResponse>;
                marketVolatility(request: _9.QueryMarketVolatilityRequest): Promise<_9.QueryMarketVolatilityResponse>;
                binaryOptionsMarkets(request: _9.QueryBinaryMarketsRequest): Promise<_9.QueryBinaryMarketsResponse>;
                traderDerivativeConditionalOrders(request: _9.QueryTraderDerivativeConditionalOrdersRequest): Promise<_9.QueryTraderDerivativeConditionalOrdersResponse>;
                marketAtomicExecutionFeeMultiplier(request: _9.QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<_9.QueryMarketAtomicExecutionFeeMultiplierResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _10.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _10.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantSpotMarketLaunch(value: _10.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantPerpetualMarketLaunch(value: _10.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantExpiryFuturesMarketLaunch(value: _10.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSpotLimitOrder(value: _10.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCreateSpotLimitOrders(value: _10.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSpotMarketOrder(value: _10.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelSpotOrder(value: _10.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelSpotOrders(value: _10.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchUpdateOrders(value: _10.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    privilegedExecuteContract(value: _10.MsgPrivilegedExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDerivativeLimitOrder(value: _10.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCreateDerivativeLimitOrders(value: _10.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDerivativeMarketOrder(value: _10.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelDerivativeOrder(value: _10.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelDerivativeOrders(value: _10.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantBinaryOptionsMarketLaunch(value: _10.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBinaryOptionsLimitOrder(value: _10.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBinaryOptionsMarketOrder(value: _10.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelBinaryOptionsOrder(value: _10.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    batchCancelBinaryOptionsOrders(value: _10.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    subaccountTransfer(value: _10.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    externalTransfer(value: _10.MsgExternalTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidatePosition(value: _10.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    increasePositionMargin(value: _10.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    rewardsOptOut(value: _10.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    adminUpdateBinaryOptionsMarket(value: _10.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    reclaimLockedFunds(value: _10.MsgReclaimLockedFunds): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _10.MsgDeposit): {
                        typeUrl: string;
                        value: _10.MsgDeposit;
                    };
                    withdraw(value: _10.MsgWithdraw): {
                        typeUrl: string;
                        value: _10.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: _10.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: _10.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: _10.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: _10.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: _10.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: _10.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: _10.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: _10.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: _10.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchUpdateOrders;
                    };
                    privilegedExecuteContract(value: _10.MsgPrivilegedExecuteContract): {
                        typeUrl: string;
                        value: _10.MsgPrivilegedExecuteContract;
                    };
                    createDerivativeLimitOrder(value: _10.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: _10.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: _10.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: _10.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: _10.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: _10.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: _10.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: _10.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: _10.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: _10.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: _10.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: _10.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: _10.MsgExternalTransfer): {
                        typeUrl: string;
                        value: _10.MsgExternalTransfer;
                    };
                    liquidatePosition(value: _10.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: _10.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: _10.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: _10.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: _10.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: _10.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: _10.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: _10.MsgAdminUpdateBinaryOptionsMarket;
                    };
                    reclaimLockedFunds(value: _10.MsgReclaimLockedFunds): {
                        typeUrl: string;
                        value: _10.MsgReclaimLockedFunds;
                    };
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _10.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _10.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: any): {
                        typeUrl: string;
                        value: _10.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: any): {
                        typeUrl: string;
                        value: _10.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: any): {
                        typeUrl: string;
                        value: _10.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchUpdateOrders;
                    };
                    privilegedExecuteContract(value: any): {
                        typeUrl: string;
                        value: _10.MsgPrivilegedExecuteContract;
                    };
                    createDerivativeLimitOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: any): {
                        typeUrl: string;
                        value: _10.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: any): {
                        typeUrl: string;
                        value: _10.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: any): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: any): {
                        typeUrl: string;
                        value: _10.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: any): {
                        typeUrl: string;
                        value: _10.MsgExternalTransfer;
                    };
                    liquidatePosition(value: any): {
                        typeUrl: string;
                        value: _10.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: any): {
                        typeUrl: string;
                        value: _10.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: any): {
                        typeUrl: string;
                        value: _10.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: any): {
                        typeUrl: string;
                        value: _10.MsgAdminUpdateBinaryOptionsMarket;
                    };
                    reclaimLockedFunds(value: any): {
                        typeUrl: string;
                        value: _10.MsgReclaimLockedFunds;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    deposit(value: _10.MsgDeposit): {
                        typeUrl: string;
                        value: _10.MsgDeposit;
                    };
                    withdraw(value: _10.MsgWithdraw): {
                        typeUrl: string;
                        value: _10.MsgWithdraw;
                    };
                    instantSpotMarketLaunch(value: _10.MsgInstantSpotMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantSpotMarketLaunch;
                    };
                    instantPerpetualMarketLaunch(value: _10.MsgInstantPerpetualMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantPerpetualMarketLaunch;
                    };
                    instantExpiryFuturesMarketLaunch(value: _10.MsgInstantExpiryFuturesMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantExpiryFuturesMarketLaunch;
                    };
                    createSpotLimitOrder(value: _10.MsgCreateSpotLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotLimitOrder;
                    };
                    batchCreateSpotLimitOrders(value: _10.MsgBatchCreateSpotLimitOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateSpotLimitOrders;
                    };
                    createSpotMarketOrder(value: _10.MsgCreateSpotMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateSpotMarketOrder;
                    };
                    cancelSpotOrder(value: _10.MsgCancelSpotOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelSpotOrder;
                    };
                    batchCancelSpotOrders(value: _10.MsgBatchCancelSpotOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelSpotOrders;
                    };
                    batchUpdateOrders(value: _10.MsgBatchUpdateOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchUpdateOrders;
                    };
                    privilegedExecuteContract(value: _10.MsgPrivilegedExecuteContract): {
                        typeUrl: string;
                        value: _10.MsgPrivilegedExecuteContract;
                    };
                    createDerivativeLimitOrder(value: _10.MsgCreateDerivativeLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeLimitOrder;
                    };
                    batchCreateDerivativeLimitOrders(value: _10.MsgBatchCreateDerivativeLimitOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCreateDerivativeLimitOrders;
                    };
                    createDerivativeMarketOrder(value: _10.MsgCreateDerivativeMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateDerivativeMarketOrder;
                    };
                    cancelDerivativeOrder(value: _10.MsgCancelDerivativeOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelDerivativeOrder;
                    };
                    batchCancelDerivativeOrders(value: _10.MsgBatchCancelDerivativeOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelDerivativeOrders;
                    };
                    instantBinaryOptionsMarketLaunch(value: _10.MsgInstantBinaryOptionsMarketLaunch): {
                        typeUrl: string;
                        value: _10.MsgInstantBinaryOptionsMarketLaunch;
                    };
                    createBinaryOptionsLimitOrder(value: _10.MsgCreateBinaryOptionsLimitOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsLimitOrder;
                    };
                    createBinaryOptionsMarketOrder(value: _10.MsgCreateBinaryOptionsMarketOrder): {
                        typeUrl: string;
                        value: _10.MsgCreateBinaryOptionsMarketOrder;
                    };
                    cancelBinaryOptionsOrder(value: _10.MsgCancelBinaryOptionsOrder): {
                        typeUrl: string;
                        value: _10.MsgCancelBinaryOptionsOrder;
                    };
                    batchCancelBinaryOptionsOrders(value: _10.MsgBatchCancelBinaryOptionsOrders): {
                        typeUrl: string;
                        value: _10.MsgBatchCancelBinaryOptionsOrders;
                    };
                    subaccountTransfer(value: _10.MsgSubaccountTransfer): {
                        typeUrl: string;
                        value: _10.MsgSubaccountTransfer;
                    };
                    externalTransfer(value: _10.MsgExternalTransfer): {
                        typeUrl: string;
                        value: _10.MsgExternalTransfer;
                    };
                    liquidatePosition(value: _10.MsgLiquidatePosition): {
                        typeUrl: string;
                        value: _10.MsgLiquidatePosition;
                    };
                    increasePositionMargin(value: _10.MsgIncreasePositionMargin): {
                        typeUrl: string;
                        value: _10.MsgIncreasePositionMargin;
                    };
                    rewardsOptOut(value: _10.MsgRewardsOptOut): {
                        typeUrl: string;
                        value: _10.MsgRewardsOptOut;
                    };
                    adminUpdateBinaryOptionsMarket(value: _10.MsgAdminUpdateBinaryOptionsMarket): {
                        typeUrl: string;
                        value: _10.MsgAdminUpdateBinaryOptionsMarket;
                    };
                    reclaimLockedFunds(value: _10.MsgReclaimLockedFunds): {
                        typeUrl: string;
                        value: _10.MsgReclaimLockedFunds;
                    };
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.exchange.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _10.MsgDeposit) => _10.MsgDepositAmino;
                    fromAmino: (object: _10.MsgDepositAmino) => _10.MsgDeposit;
                };
                "/injective.exchange.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _10.MsgWithdraw) => _10.MsgWithdrawAmino;
                    fromAmino: (object: _10.MsgWithdrawAmino) => _10.MsgWithdraw;
                };
                "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
                    aminoType: string;
                    toAmino: (message: _10.MsgInstantSpotMarketLaunch) => _10.MsgInstantSpotMarketLaunchAmino;
                    fromAmino: (object: _10.MsgInstantSpotMarketLaunchAmino) => _10.MsgInstantSpotMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
                    aminoType: string;
                    toAmino: (message: _10.MsgInstantPerpetualMarketLaunch) => _10.MsgInstantPerpetualMarketLaunchAmino;
                    fromAmino: (object: _10.MsgInstantPerpetualMarketLaunchAmino) => _10.MsgInstantPerpetualMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
                    aminoType: string;
                    toAmino: (message: _10.MsgInstantExpiryFuturesMarketLaunch) => _10.MsgInstantExpiryFuturesMarketLaunchAmino;
                    fromAmino: (object: _10.MsgInstantExpiryFuturesMarketLaunchAmino) => _10.MsgInstantExpiryFuturesMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateSpotLimitOrder) => _10.MsgCreateSpotLimitOrderAmino;
                    fromAmino: (object: _10.MsgCreateSpotLimitOrderAmino) => _10.MsgCreateSpotLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
                    aminoType: string;
                    toAmino: (message: _10.MsgBatchCreateSpotLimitOrders) => _10.MsgBatchCreateSpotLimitOrdersAmino;
                    fromAmino: (object: _10.MsgBatchCreateSpotLimitOrdersAmino) => _10.MsgBatchCreateSpotLimitOrders;
                };
                "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateSpotMarketOrder) => _10.MsgCreateSpotMarketOrderAmino;
                    fromAmino: (object: _10.MsgCreateSpotMarketOrderAmino) => _10.MsgCreateSpotMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCancelSpotOrder) => _10.MsgCancelSpotOrderAmino;
                    fromAmino: (object: _10.MsgCancelSpotOrderAmino) => _10.MsgCancelSpotOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
                    aminoType: string;
                    toAmino: (message: _10.MsgBatchCancelSpotOrders) => _10.MsgBatchCancelSpotOrdersAmino;
                    fromAmino: (object: _10.MsgBatchCancelSpotOrdersAmino) => _10.MsgBatchCancelSpotOrders;
                };
                "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
                    aminoType: string;
                    toAmino: (message: _10.MsgBatchUpdateOrders) => _10.MsgBatchUpdateOrdersAmino;
                    fromAmino: (object: _10.MsgBatchUpdateOrdersAmino) => _10.MsgBatchUpdateOrders;
                };
                "/injective.exchange.v1beta1.MsgPrivilegedExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _10.MsgPrivilegedExecuteContract) => _10.MsgPrivilegedExecuteContractAmino;
                    fromAmino: (object: _10.MsgPrivilegedExecuteContractAmino) => _10.MsgPrivilegedExecuteContract;
                };
                "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateDerivativeLimitOrder) => _10.MsgCreateDerivativeLimitOrderAmino;
                    fromAmino: (object: _10.MsgCreateDerivativeLimitOrderAmino) => _10.MsgCreateDerivativeLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
                    aminoType: string;
                    toAmino: (message: _10.MsgBatchCreateDerivativeLimitOrders) => _10.MsgBatchCreateDerivativeLimitOrdersAmino;
                    fromAmino: (object: _10.MsgBatchCreateDerivativeLimitOrdersAmino) => _10.MsgBatchCreateDerivativeLimitOrders;
                };
                "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateDerivativeMarketOrder) => _10.MsgCreateDerivativeMarketOrderAmino;
                    fromAmino: (object: _10.MsgCreateDerivativeMarketOrderAmino) => _10.MsgCreateDerivativeMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCancelDerivativeOrder) => _10.MsgCancelDerivativeOrderAmino;
                    fromAmino: (object: _10.MsgCancelDerivativeOrderAmino) => _10.MsgCancelDerivativeOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
                    aminoType: string;
                    toAmino: (message: _10.MsgBatchCancelDerivativeOrders) => _10.MsgBatchCancelDerivativeOrdersAmino;
                    fromAmino: (object: _10.MsgBatchCancelDerivativeOrdersAmino) => _10.MsgBatchCancelDerivativeOrders;
                };
                "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
                    aminoType: string;
                    toAmino: (message: _10.MsgInstantBinaryOptionsMarketLaunch) => _10.MsgInstantBinaryOptionsMarketLaunchAmino;
                    fromAmino: (object: _10.MsgInstantBinaryOptionsMarketLaunchAmino) => _10.MsgInstantBinaryOptionsMarketLaunch;
                };
                "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateBinaryOptionsLimitOrder) => _10.MsgCreateBinaryOptionsLimitOrderAmino;
                    fromAmino: (object: _10.MsgCreateBinaryOptionsLimitOrderAmino) => _10.MsgCreateBinaryOptionsLimitOrder;
                };
                "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateBinaryOptionsMarketOrder) => _10.MsgCreateBinaryOptionsMarketOrderAmino;
                    fromAmino: (object: _10.MsgCreateBinaryOptionsMarketOrderAmino) => _10.MsgCreateBinaryOptionsMarketOrder;
                };
                "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCancelBinaryOptionsOrder) => _10.MsgCancelBinaryOptionsOrderAmino;
                    fromAmino: (object: _10.MsgCancelBinaryOptionsOrderAmino) => _10.MsgCancelBinaryOptionsOrder;
                };
                "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
                    aminoType: string;
                    toAmino: (message: _10.MsgBatchCancelBinaryOptionsOrders) => _10.MsgBatchCancelBinaryOptionsOrdersAmino;
                    fromAmino: (object: _10.MsgBatchCancelBinaryOptionsOrdersAmino) => _10.MsgBatchCancelBinaryOptionsOrders;
                };
                "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
                    aminoType: string;
                    toAmino: (message: _10.MsgSubaccountTransfer) => _10.MsgSubaccountTransferAmino;
                    fromAmino: (object: _10.MsgSubaccountTransferAmino) => _10.MsgSubaccountTransfer;
                };
                "/injective.exchange.v1beta1.MsgExternalTransfer": {
                    aminoType: string;
                    toAmino: (message: _10.MsgExternalTransfer) => _10.MsgExternalTransferAmino;
                    fromAmino: (object: _10.MsgExternalTransferAmino) => _10.MsgExternalTransfer;
                };
                "/injective.exchange.v1beta1.MsgLiquidatePosition": {
                    aminoType: string;
                    toAmino: (message: _10.MsgLiquidatePosition) => _10.MsgLiquidatePositionAmino;
                    fromAmino: (object: _10.MsgLiquidatePositionAmino) => _10.MsgLiquidatePosition;
                };
                "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
                    aminoType: string;
                    toAmino: (message: _10.MsgIncreasePositionMargin) => _10.MsgIncreasePositionMarginAmino;
                    fromAmino: (object: _10.MsgIncreasePositionMarginAmino) => _10.MsgIncreasePositionMargin;
                };
                "/injective.exchange.v1beta1.MsgRewardsOptOut": {
                    aminoType: string;
                    toAmino: (message: _10.MsgRewardsOptOut) => _10.MsgRewardsOptOutAmino;
                    fromAmino: (object: _10.MsgRewardsOptOutAmino) => _10.MsgRewardsOptOut;
                };
                "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
                    aminoType: string;
                    toAmino: (message: _10.MsgAdminUpdateBinaryOptionsMarket) => _10.MsgAdminUpdateBinaryOptionsMarketAmino;
                    fromAmino: (object: _10.MsgAdminUpdateBinaryOptionsMarketAmino) => _10.MsgAdminUpdateBinaryOptionsMarket;
                };
                "/injective.exchange.v1beta1.MsgReclaimLockedFunds": {
                    aminoType: string;
                    toAmino: (message: _10.MsgReclaimLockedFunds) => _10.MsgReclaimLockedFundsAmino;
                    fromAmino: (object: _10.MsgReclaimLockedFundsAmino) => _10.MsgReclaimLockedFunds;
                };
                "/injective.exchange.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _10.MsgUpdateParams) => _10.MsgUpdateParamsAmino;
                    fromAmino: (object: _10.MsgUpdateParamsAmino) => _10.MsgUpdateParams;
                };
            };
            exchangeTypeFromJSON(object: any): _10.ExchangeType;
            exchangeTypeToJSON(object: _10.ExchangeType): string;
            ExchangeType: typeof _10.ExchangeType;
            ExchangeTypeSDKType: typeof _10.ExchangeType;
            ExchangeTypeAmino: typeof _10.ExchangeType;
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _10.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgUpdateParams;
                fromPartial(object: Partial<_10.MsgUpdateParams>): _10.MsgUpdateParams;
                fromAmino(object: _10.MsgUpdateParamsAmino): _10.MsgUpdateParams;
                toAmino(message: _10.MsgUpdateParams): _10.MsgUpdateParamsAmino;
                fromAminoMsg(object: _10.MsgUpdateParamsAminoMsg): _10.MsgUpdateParams;
                fromProtoMsg(message: _10.MsgUpdateParamsProtoMsg): _10.MsgUpdateParams;
                toProto(message: _10.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _10.MsgUpdateParams): _10.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _10.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_10.MsgUpdateParamsResponse>): _10.MsgUpdateParamsResponse;
                fromAmino(_: _10.MsgUpdateParamsResponseAmino): _10.MsgUpdateParamsResponse;
                toAmino(_: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _10.MsgUpdateParamsResponseAminoMsg): _10.MsgUpdateParamsResponse;
                fromProtoMsg(message: _10.MsgUpdateParamsResponseProtoMsg): _10.MsgUpdateParamsResponse;
                toProto(message: _10.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _10.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgDeposit;
                fromPartial(object: Partial<_10.MsgDeposit>): _10.MsgDeposit;
                fromAmino(object: _10.MsgDepositAmino): _10.MsgDeposit;
                toAmino(message: _10.MsgDeposit): _10.MsgDepositAmino;
                fromAminoMsg(object: _10.MsgDepositAminoMsg): _10.MsgDeposit;
                fromProtoMsg(message: _10.MsgDepositProtoMsg): _10.MsgDeposit;
                toProto(message: _10.MsgDeposit): Uint8Array;
                toProtoMsg(message: _10.MsgDeposit): _10.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _10.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgDepositResponse;
                fromPartial(_: Partial<_10.MsgDepositResponse>): _10.MsgDepositResponse;
                fromAmino(_: _10.MsgDepositResponseAmino): _10.MsgDepositResponse;
                toAmino(_: _10.MsgDepositResponse): _10.MsgDepositResponseAmino;
                fromAminoMsg(object: _10.MsgDepositResponseAminoMsg): _10.MsgDepositResponse;
                fromProtoMsg(message: _10.MsgDepositResponseProtoMsg): _10.MsgDepositResponse;
                toProto(message: _10.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _10.MsgDepositResponse): _10.MsgDepositResponseProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _10.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgWithdraw;
                fromPartial(object: Partial<_10.MsgWithdraw>): _10.MsgWithdraw;
                fromAmino(object: _10.MsgWithdrawAmino): _10.MsgWithdraw;
                toAmino(message: _10.MsgWithdraw): _10.MsgWithdrawAmino;
                fromAminoMsg(object: _10.MsgWithdrawAminoMsg): _10.MsgWithdraw;
                fromProtoMsg(message: _10.MsgWithdrawProtoMsg): _10.MsgWithdraw;
                toProto(message: _10.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _10.MsgWithdraw): _10.MsgWithdrawProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(_: _10.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgWithdrawResponse;
                fromPartial(_: Partial<_10.MsgWithdrawResponse>): _10.MsgWithdrawResponse;
                fromAmino(_: _10.MsgWithdrawResponseAmino): _10.MsgWithdrawResponse;
                toAmino(_: _10.MsgWithdrawResponse): _10.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _10.MsgWithdrawResponseAminoMsg): _10.MsgWithdrawResponse;
                fromProtoMsg(message: _10.MsgWithdrawResponseProtoMsg): _10.MsgWithdrawResponse;
                toProto(message: _10.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _10.MsgWithdrawResponse): _10.MsgWithdrawResponseProtoMsg;
            };
            MsgCreateSpotLimitOrder: {
                typeUrl: string;
                encode(message: _10.MsgCreateSpotLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateSpotLimitOrder;
                fromPartial(object: Partial<_10.MsgCreateSpotLimitOrder>): _10.MsgCreateSpotLimitOrder;
                fromAmino(object: _10.MsgCreateSpotLimitOrderAmino): _10.MsgCreateSpotLimitOrder;
                toAmino(message: _10.MsgCreateSpotLimitOrder): _10.MsgCreateSpotLimitOrderAmino;
                fromAminoMsg(object: _10.MsgCreateSpotLimitOrderAminoMsg): _10.MsgCreateSpotLimitOrder;
                fromProtoMsg(message: _10.MsgCreateSpotLimitOrderProtoMsg): _10.MsgCreateSpotLimitOrder;
                toProto(message: _10.MsgCreateSpotLimitOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCreateSpotLimitOrder): _10.MsgCreateSpotLimitOrderProtoMsg;
            };
            MsgCreateSpotLimitOrderResponse: {
                typeUrl: string;
                encode(message: _10.MsgCreateSpotLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateSpotLimitOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateSpotLimitOrderResponse>): _10.MsgCreateSpotLimitOrderResponse;
                fromAmino(object: _10.MsgCreateSpotLimitOrderResponseAmino): _10.MsgCreateSpotLimitOrderResponse;
                toAmino(message: _10.MsgCreateSpotLimitOrderResponse): _10.MsgCreateSpotLimitOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCreateSpotLimitOrderResponseAminoMsg): _10.MsgCreateSpotLimitOrderResponse;
                fromProtoMsg(message: _10.MsgCreateSpotLimitOrderResponseProtoMsg): _10.MsgCreateSpotLimitOrderResponse;
                toProto(message: _10.MsgCreateSpotLimitOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateSpotLimitOrderResponse): _10.MsgCreateSpotLimitOrderResponseProtoMsg;
            };
            MsgBatchCreateSpotLimitOrders: {
                typeUrl: string;
                encode(message: _10.MsgBatchCreateSpotLimitOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCreateSpotLimitOrders;
                fromPartial(object: Partial<_10.MsgBatchCreateSpotLimitOrders>): _10.MsgBatchCreateSpotLimitOrders;
                fromAmino(object: _10.MsgBatchCreateSpotLimitOrdersAmino): _10.MsgBatchCreateSpotLimitOrders;
                toAmino(message: _10.MsgBatchCreateSpotLimitOrders): _10.MsgBatchCreateSpotLimitOrdersAmino;
                fromAminoMsg(object: _10.MsgBatchCreateSpotLimitOrdersAminoMsg): _10.MsgBatchCreateSpotLimitOrders;
                fromProtoMsg(message: _10.MsgBatchCreateSpotLimitOrdersProtoMsg): _10.MsgBatchCreateSpotLimitOrders;
                toProto(message: _10.MsgBatchCreateSpotLimitOrders): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCreateSpotLimitOrders): _10.MsgBatchCreateSpotLimitOrdersProtoMsg;
            };
            MsgBatchCreateSpotLimitOrdersResponse: {
                typeUrl: string;
                encode(message: _10.MsgBatchCreateSpotLimitOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCreateSpotLimitOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCreateSpotLimitOrdersResponse>): _10.MsgBatchCreateSpotLimitOrdersResponse;
                fromAmino(object: _10.MsgBatchCreateSpotLimitOrdersResponseAmino): _10.MsgBatchCreateSpotLimitOrdersResponse;
                toAmino(message: _10.MsgBatchCreateSpotLimitOrdersResponse): _10.MsgBatchCreateSpotLimitOrdersResponseAmino;
                fromAminoMsg(object: _10.MsgBatchCreateSpotLimitOrdersResponseAminoMsg): _10.MsgBatchCreateSpotLimitOrdersResponse;
                fromProtoMsg(message: _10.MsgBatchCreateSpotLimitOrdersResponseProtoMsg): _10.MsgBatchCreateSpotLimitOrdersResponse;
                toProto(message: _10.MsgBatchCreateSpotLimitOrdersResponse): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCreateSpotLimitOrdersResponse): _10.MsgBatchCreateSpotLimitOrdersResponseProtoMsg;
            };
            MsgInstantSpotMarketLaunch: {
                typeUrl: string;
                encode(message: _10.MsgInstantSpotMarketLaunch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgInstantSpotMarketLaunch;
                fromPartial(object: Partial<_10.MsgInstantSpotMarketLaunch>): _10.MsgInstantSpotMarketLaunch;
                fromAmino(object: _10.MsgInstantSpotMarketLaunchAmino): _10.MsgInstantSpotMarketLaunch;
                toAmino(message: _10.MsgInstantSpotMarketLaunch): _10.MsgInstantSpotMarketLaunchAmino;
                fromAminoMsg(object: _10.MsgInstantSpotMarketLaunchAminoMsg): _10.MsgInstantSpotMarketLaunch;
                fromProtoMsg(message: _10.MsgInstantSpotMarketLaunchProtoMsg): _10.MsgInstantSpotMarketLaunch;
                toProto(message: _10.MsgInstantSpotMarketLaunch): Uint8Array;
                toProtoMsg(message: _10.MsgInstantSpotMarketLaunch): _10.MsgInstantSpotMarketLaunchProtoMsg;
            };
            MsgInstantSpotMarketLaunchResponse: {
                typeUrl: string;
                encode(_: _10.MsgInstantSpotMarketLaunchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgInstantSpotMarketLaunchResponse;
                fromPartial(_: Partial<_10.MsgInstantSpotMarketLaunchResponse>): _10.MsgInstantSpotMarketLaunchResponse;
                fromAmino(_: _10.MsgInstantSpotMarketLaunchResponseAmino): _10.MsgInstantSpotMarketLaunchResponse;
                toAmino(_: _10.MsgInstantSpotMarketLaunchResponse): _10.MsgInstantSpotMarketLaunchResponseAmino;
                fromAminoMsg(object: _10.MsgInstantSpotMarketLaunchResponseAminoMsg): _10.MsgInstantSpotMarketLaunchResponse;
                fromProtoMsg(message: _10.MsgInstantSpotMarketLaunchResponseProtoMsg): _10.MsgInstantSpotMarketLaunchResponse;
                toProto(message: _10.MsgInstantSpotMarketLaunchResponse): Uint8Array;
                toProtoMsg(message: _10.MsgInstantSpotMarketLaunchResponse): _10.MsgInstantSpotMarketLaunchResponseProtoMsg;
            };
            MsgInstantPerpetualMarketLaunch: {
                typeUrl: string;
                encode(message: _10.MsgInstantPerpetualMarketLaunch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgInstantPerpetualMarketLaunch;
                fromPartial(object: Partial<_10.MsgInstantPerpetualMarketLaunch>): _10.MsgInstantPerpetualMarketLaunch;
                fromAmino(object: _10.MsgInstantPerpetualMarketLaunchAmino): _10.MsgInstantPerpetualMarketLaunch;
                toAmino(message: _10.MsgInstantPerpetualMarketLaunch): _10.MsgInstantPerpetualMarketLaunchAmino;
                fromAminoMsg(object: _10.MsgInstantPerpetualMarketLaunchAminoMsg): _10.MsgInstantPerpetualMarketLaunch;
                fromProtoMsg(message: _10.MsgInstantPerpetualMarketLaunchProtoMsg): _10.MsgInstantPerpetualMarketLaunch;
                toProto(message: _10.MsgInstantPerpetualMarketLaunch): Uint8Array;
                toProtoMsg(message: _10.MsgInstantPerpetualMarketLaunch): _10.MsgInstantPerpetualMarketLaunchProtoMsg;
            };
            MsgInstantPerpetualMarketLaunchResponse: {
                typeUrl: string;
                encode(_: _10.MsgInstantPerpetualMarketLaunchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgInstantPerpetualMarketLaunchResponse;
                fromPartial(_: Partial<_10.MsgInstantPerpetualMarketLaunchResponse>): _10.MsgInstantPerpetualMarketLaunchResponse;
                fromAmino(_: _10.MsgInstantPerpetualMarketLaunchResponseAmino): _10.MsgInstantPerpetualMarketLaunchResponse;
                toAmino(_: _10.MsgInstantPerpetualMarketLaunchResponse): _10.MsgInstantPerpetualMarketLaunchResponseAmino;
                fromAminoMsg(object: _10.MsgInstantPerpetualMarketLaunchResponseAminoMsg): _10.MsgInstantPerpetualMarketLaunchResponse;
                fromProtoMsg(message: _10.MsgInstantPerpetualMarketLaunchResponseProtoMsg): _10.MsgInstantPerpetualMarketLaunchResponse;
                toProto(message: _10.MsgInstantPerpetualMarketLaunchResponse): Uint8Array;
                toProtoMsg(message: _10.MsgInstantPerpetualMarketLaunchResponse): _10.MsgInstantPerpetualMarketLaunchResponseProtoMsg;
            };
            MsgInstantBinaryOptionsMarketLaunch: {
                typeUrl: string;
                encode(message: _10.MsgInstantBinaryOptionsMarketLaunch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgInstantBinaryOptionsMarketLaunch;
                fromPartial(object: Partial<_10.MsgInstantBinaryOptionsMarketLaunch>): _10.MsgInstantBinaryOptionsMarketLaunch;
                fromAmino(object: _10.MsgInstantBinaryOptionsMarketLaunchAmino): _10.MsgInstantBinaryOptionsMarketLaunch;
                toAmino(message: _10.MsgInstantBinaryOptionsMarketLaunch): _10.MsgInstantBinaryOptionsMarketLaunchAmino;
                fromAminoMsg(object: _10.MsgInstantBinaryOptionsMarketLaunchAminoMsg): _10.MsgInstantBinaryOptionsMarketLaunch;
                fromProtoMsg(message: _10.MsgInstantBinaryOptionsMarketLaunchProtoMsg): _10.MsgInstantBinaryOptionsMarketLaunch;
                toProto(message: _10.MsgInstantBinaryOptionsMarketLaunch): Uint8Array;
                toProtoMsg(message: _10.MsgInstantBinaryOptionsMarketLaunch): _10.MsgInstantBinaryOptionsMarketLaunchProtoMsg;
            };
            MsgInstantBinaryOptionsMarketLaunchResponse: {
                typeUrl: string;
                encode(_: _10.MsgInstantBinaryOptionsMarketLaunchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgInstantBinaryOptionsMarketLaunchResponse;
                fromPartial(_: Partial<_10.MsgInstantBinaryOptionsMarketLaunchResponse>): _10.MsgInstantBinaryOptionsMarketLaunchResponse;
                fromAmino(_: _10.MsgInstantBinaryOptionsMarketLaunchResponseAmino): _10.MsgInstantBinaryOptionsMarketLaunchResponse;
                toAmino(_: _10.MsgInstantBinaryOptionsMarketLaunchResponse): _10.MsgInstantBinaryOptionsMarketLaunchResponseAmino;
                fromAminoMsg(object: _10.MsgInstantBinaryOptionsMarketLaunchResponseAminoMsg): _10.MsgInstantBinaryOptionsMarketLaunchResponse;
                fromProtoMsg(message: _10.MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg): _10.MsgInstantBinaryOptionsMarketLaunchResponse;
                toProto(message: _10.MsgInstantBinaryOptionsMarketLaunchResponse): Uint8Array;
                toProtoMsg(message: _10.MsgInstantBinaryOptionsMarketLaunchResponse): _10.MsgInstantBinaryOptionsMarketLaunchResponseProtoMsg;
            };
            MsgInstantExpiryFuturesMarketLaunch: {
                typeUrl: string;
                encode(message: _10.MsgInstantExpiryFuturesMarketLaunch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgInstantExpiryFuturesMarketLaunch;
                fromPartial(object: Partial<_10.MsgInstantExpiryFuturesMarketLaunch>): _10.MsgInstantExpiryFuturesMarketLaunch;
                fromAmino(object: _10.MsgInstantExpiryFuturesMarketLaunchAmino): _10.MsgInstantExpiryFuturesMarketLaunch;
                toAmino(message: _10.MsgInstantExpiryFuturesMarketLaunch): _10.MsgInstantExpiryFuturesMarketLaunchAmino;
                fromAminoMsg(object: _10.MsgInstantExpiryFuturesMarketLaunchAminoMsg): _10.MsgInstantExpiryFuturesMarketLaunch;
                fromProtoMsg(message: _10.MsgInstantExpiryFuturesMarketLaunchProtoMsg): _10.MsgInstantExpiryFuturesMarketLaunch;
                toProto(message: _10.MsgInstantExpiryFuturesMarketLaunch): Uint8Array;
                toProtoMsg(message: _10.MsgInstantExpiryFuturesMarketLaunch): _10.MsgInstantExpiryFuturesMarketLaunchProtoMsg;
            };
            MsgInstantExpiryFuturesMarketLaunchResponse: {
                typeUrl: string;
                encode(_: _10.MsgInstantExpiryFuturesMarketLaunchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgInstantExpiryFuturesMarketLaunchResponse;
                fromPartial(_: Partial<_10.MsgInstantExpiryFuturesMarketLaunchResponse>): _10.MsgInstantExpiryFuturesMarketLaunchResponse;
                fromAmino(_: _10.MsgInstantExpiryFuturesMarketLaunchResponseAmino): _10.MsgInstantExpiryFuturesMarketLaunchResponse;
                toAmino(_: _10.MsgInstantExpiryFuturesMarketLaunchResponse): _10.MsgInstantExpiryFuturesMarketLaunchResponseAmino;
                fromAminoMsg(object: _10.MsgInstantExpiryFuturesMarketLaunchResponseAminoMsg): _10.MsgInstantExpiryFuturesMarketLaunchResponse;
                fromProtoMsg(message: _10.MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg): _10.MsgInstantExpiryFuturesMarketLaunchResponse;
                toProto(message: _10.MsgInstantExpiryFuturesMarketLaunchResponse): Uint8Array;
                toProtoMsg(message: _10.MsgInstantExpiryFuturesMarketLaunchResponse): _10.MsgInstantExpiryFuturesMarketLaunchResponseProtoMsg;
            };
            MsgCreateSpotMarketOrder: {
                typeUrl: string;
                encode(message: _10.MsgCreateSpotMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateSpotMarketOrder;
                fromPartial(object: Partial<_10.MsgCreateSpotMarketOrder>): _10.MsgCreateSpotMarketOrder;
                fromAmino(object: _10.MsgCreateSpotMarketOrderAmino): _10.MsgCreateSpotMarketOrder;
                toAmino(message: _10.MsgCreateSpotMarketOrder): _10.MsgCreateSpotMarketOrderAmino;
                fromAminoMsg(object: _10.MsgCreateSpotMarketOrderAminoMsg): _10.MsgCreateSpotMarketOrder;
                fromProtoMsg(message: _10.MsgCreateSpotMarketOrderProtoMsg): _10.MsgCreateSpotMarketOrder;
                toProto(message: _10.MsgCreateSpotMarketOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCreateSpotMarketOrder): _10.MsgCreateSpotMarketOrderProtoMsg;
            };
            MsgCreateSpotMarketOrderResponse: {
                typeUrl: string;
                encode(message: _10.MsgCreateSpotMarketOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateSpotMarketOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateSpotMarketOrderResponse>): _10.MsgCreateSpotMarketOrderResponse;
                fromAmino(object: _10.MsgCreateSpotMarketOrderResponseAmino): _10.MsgCreateSpotMarketOrderResponse;
                toAmino(message: _10.MsgCreateSpotMarketOrderResponse): _10.MsgCreateSpotMarketOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCreateSpotMarketOrderResponseAminoMsg): _10.MsgCreateSpotMarketOrderResponse;
                fromProtoMsg(message: _10.MsgCreateSpotMarketOrderResponseProtoMsg): _10.MsgCreateSpotMarketOrderResponse;
                toProto(message: _10.MsgCreateSpotMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateSpotMarketOrderResponse): _10.MsgCreateSpotMarketOrderResponseProtoMsg;
            };
            SpotMarketOrderResults: {
                typeUrl: string;
                encode(message: _10.SpotMarketOrderResults, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.SpotMarketOrderResults;
                fromPartial(object: Partial<_10.SpotMarketOrderResults>): _10.SpotMarketOrderResults;
                fromAmino(object: _10.SpotMarketOrderResultsAmino): _10.SpotMarketOrderResults;
                toAmino(message: _10.SpotMarketOrderResults): _10.SpotMarketOrderResultsAmino;
                fromAminoMsg(object: _10.SpotMarketOrderResultsAminoMsg): _10.SpotMarketOrderResults;
                fromProtoMsg(message: _10.SpotMarketOrderResultsProtoMsg): _10.SpotMarketOrderResults;
                toProto(message: _10.SpotMarketOrderResults): Uint8Array;
                toProtoMsg(message: _10.SpotMarketOrderResults): _10.SpotMarketOrderResultsProtoMsg;
            };
            MsgCreateDerivativeLimitOrder: {
                typeUrl: string;
                encode(message: _10.MsgCreateDerivativeLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateDerivativeLimitOrder;
                fromPartial(object: Partial<_10.MsgCreateDerivativeLimitOrder>): _10.MsgCreateDerivativeLimitOrder;
                fromAmino(object: _10.MsgCreateDerivativeLimitOrderAmino): _10.MsgCreateDerivativeLimitOrder;
                toAmino(message: _10.MsgCreateDerivativeLimitOrder): _10.MsgCreateDerivativeLimitOrderAmino;
                fromAminoMsg(object: _10.MsgCreateDerivativeLimitOrderAminoMsg): _10.MsgCreateDerivativeLimitOrder;
                fromProtoMsg(message: _10.MsgCreateDerivativeLimitOrderProtoMsg): _10.MsgCreateDerivativeLimitOrder;
                toProto(message: _10.MsgCreateDerivativeLimitOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCreateDerivativeLimitOrder): _10.MsgCreateDerivativeLimitOrderProtoMsg;
            };
            MsgCreateDerivativeLimitOrderResponse: {
                typeUrl: string;
                encode(message: _10.MsgCreateDerivativeLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateDerivativeLimitOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateDerivativeLimitOrderResponse>): _10.MsgCreateDerivativeLimitOrderResponse;
                fromAmino(object: _10.MsgCreateDerivativeLimitOrderResponseAmino): _10.MsgCreateDerivativeLimitOrderResponse;
                toAmino(message: _10.MsgCreateDerivativeLimitOrderResponse): _10.MsgCreateDerivativeLimitOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCreateDerivativeLimitOrderResponseAminoMsg): _10.MsgCreateDerivativeLimitOrderResponse;
                fromProtoMsg(message: _10.MsgCreateDerivativeLimitOrderResponseProtoMsg): _10.MsgCreateDerivativeLimitOrderResponse;
                toProto(message: _10.MsgCreateDerivativeLimitOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateDerivativeLimitOrderResponse): _10.MsgCreateDerivativeLimitOrderResponseProtoMsg;
            };
            MsgCreateBinaryOptionsLimitOrder: {
                typeUrl: string;
                encode(message: _10.MsgCreateBinaryOptionsLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateBinaryOptionsLimitOrder;
                fromPartial(object: Partial<_10.MsgCreateBinaryOptionsLimitOrder>): _10.MsgCreateBinaryOptionsLimitOrder;
                fromAmino(object: _10.MsgCreateBinaryOptionsLimitOrderAmino): _10.MsgCreateBinaryOptionsLimitOrder;
                toAmino(message: _10.MsgCreateBinaryOptionsLimitOrder): _10.MsgCreateBinaryOptionsLimitOrderAmino;
                fromAminoMsg(object: _10.MsgCreateBinaryOptionsLimitOrderAminoMsg): _10.MsgCreateBinaryOptionsLimitOrder;
                fromProtoMsg(message: _10.MsgCreateBinaryOptionsLimitOrderProtoMsg): _10.MsgCreateBinaryOptionsLimitOrder;
                toProto(message: _10.MsgCreateBinaryOptionsLimitOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCreateBinaryOptionsLimitOrder): _10.MsgCreateBinaryOptionsLimitOrderProtoMsg;
            };
            MsgCreateBinaryOptionsLimitOrderResponse: {
                typeUrl: string;
                encode(message: _10.MsgCreateBinaryOptionsLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateBinaryOptionsLimitOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateBinaryOptionsLimitOrderResponse>): _10.MsgCreateBinaryOptionsLimitOrderResponse;
                fromAmino(object: _10.MsgCreateBinaryOptionsLimitOrderResponseAmino): _10.MsgCreateBinaryOptionsLimitOrderResponse;
                toAmino(message: _10.MsgCreateBinaryOptionsLimitOrderResponse): _10.MsgCreateBinaryOptionsLimitOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCreateBinaryOptionsLimitOrderResponseAminoMsg): _10.MsgCreateBinaryOptionsLimitOrderResponse;
                fromProtoMsg(message: _10.MsgCreateBinaryOptionsLimitOrderResponseProtoMsg): _10.MsgCreateBinaryOptionsLimitOrderResponse;
                toProto(message: _10.MsgCreateBinaryOptionsLimitOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateBinaryOptionsLimitOrderResponse): _10.MsgCreateBinaryOptionsLimitOrderResponseProtoMsg;
            };
            MsgBatchCreateDerivativeLimitOrders: {
                typeUrl: string;
                encode(message: _10.MsgBatchCreateDerivativeLimitOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCreateDerivativeLimitOrders;
                fromPartial(object: Partial<_10.MsgBatchCreateDerivativeLimitOrders>): _10.MsgBatchCreateDerivativeLimitOrders;
                fromAmino(object: _10.MsgBatchCreateDerivativeLimitOrdersAmino): _10.MsgBatchCreateDerivativeLimitOrders;
                toAmino(message: _10.MsgBatchCreateDerivativeLimitOrders): _10.MsgBatchCreateDerivativeLimitOrdersAmino;
                fromAminoMsg(object: _10.MsgBatchCreateDerivativeLimitOrdersAminoMsg): _10.MsgBatchCreateDerivativeLimitOrders;
                fromProtoMsg(message: _10.MsgBatchCreateDerivativeLimitOrdersProtoMsg): _10.MsgBatchCreateDerivativeLimitOrders;
                toProto(message: _10.MsgBatchCreateDerivativeLimitOrders): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCreateDerivativeLimitOrders): _10.MsgBatchCreateDerivativeLimitOrdersProtoMsg;
            };
            MsgBatchCreateDerivativeLimitOrdersResponse: {
                typeUrl: string;
                encode(message: _10.MsgBatchCreateDerivativeLimitOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCreateDerivativeLimitOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCreateDerivativeLimitOrdersResponse>): _10.MsgBatchCreateDerivativeLimitOrdersResponse;
                fromAmino(object: _10.MsgBatchCreateDerivativeLimitOrdersResponseAmino): _10.MsgBatchCreateDerivativeLimitOrdersResponse;
                toAmino(message: _10.MsgBatchCreateDerivativeLimitOrdersResponse): _10.MsgBatchCreateDerivativeLimitOrdersResponseAmino;
                fromAminoMsg(object: _10.MsgBatchCreateDerivativeLimitOrdersResponseAminoMsg): _10.MsgBatchCreateDerivativeLimitOrdersResponse;
                fromProtoMsg(message: _10.MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg): _10.MsgBatchCreateDerivativeLimitOrdersResponse;
                toProto(message: _10.MsgBatchCreateDerivativeLimitOrdersResponse): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCreateDerivativeLimitOrdersResponse): _10.MsgBatchCreateDerivativeLimitOrdersResponseProtoMsg;
            };
            MsgCancelSpotOrder: {
                typeUrl: string;
                encode(message: _10.MsgCancelSpotOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCancelSpotOrder;
                fromPartial(object: Partial<_10.MsgCancelSpotOrder>): _10.MsgCancelSpotOrder;
                fromAmino(object: _10.MsgCancelSpotOrderAmino): _10.MsgCancelSpotOrder;
                toAmino(message: _10.MsgCancelSpotOrder): _10.MsgCancelSpotOrderAmino;
                fromAminoMsg(object: _10.MsgCancelSpotOrderAminoMsg): _10.MsgCancelSpotOrder;
                fromProtoMsg(message: _10.MsgCancelSpotOrderProtoMsg): _10.MsgCancelSpotOrder;
                toProto(message: _10.MsgCancelSpotOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCancelSpotOrder): _10.MsgCancelSpotOrderProtoMsg;
            };
            MsgCancelSpotOrderResponse: {
                typeUrl: string;
                encode(_: _10.MsgCancelSpotOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgCancelSpotOrderResponse;
                fromPartial(_: Partial<_10.MsgCancelSpotOrderResponse>): _10.MsgCancelSpotOrderResponse;
                fromAmino(_: _10.MsgCancelSpotOrderResponseAmino): _10.MsgCancelSpotOrderResponse;
                toAmino(_: _10.MsgCancelSpotOrderResponse): _10.MsgCancelSpotOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCancelSpotOrderResponseAminoMsg): _10.MsgCancelSpotOrderResponse;
                fromProtoMsg(message: _10.MsgCancelSpotOrderResponseProtoMsg): _10.MsgCancelSpotOrderResponse;
                toProto(message: _10.MsgCancelSpotOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCancelSpotOrderResponse): _10.MsgCancelSpotOrderResponseProtoMsg;
            };
            MsgBatchCancelSpotOrders: {
                typeUrl: string;
                encode(message: _10.MsgBatchCancelSpotOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCancelSpotOrders;
                fromPartial(object: Partial<_10.MsgBatchCancelSpotOrders>): _10.MsgBatchCancelSpotOrders;
                fromAmino(object: _10.MsgBatchCancelSpotOrdersAmino): _10.MsgBatchCancelSpotOrders;
                toAmino(message: _10.MsgBatchCancelSpotOrders): _10.MsgBatchCancelSpotOrdersAmino;
                fromAminoMsg(object: _10.MsgBatchCancelSpotOrdersAminoMsg): _10.MsgBatchCancelSpotOrders;
                fromProtoMsg(message: _10.MsgBatchCancelSpotOrdersProtoMsg): _10.MsgBatchCancelSpotOrders;
                toProto(message: _10.MsgBatchCancelSpotOrders): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCancelSpotOrders): _10.MsgBatchCancelSpotOrdersProtoMsg;
            };
            MsgBatchCancelSpotOrdersResponse: {
                typeUrl: string;
                encode(message: _10.MsgBatchCancelSpotOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCancelSpotOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCancelSpotOrdersResponse>): _10.MsgBatchCancelSpotOrdersResponse;
                fromAmino(object: _10.MsgBatchCancelSpotOrdersResponseAmino): _10.MsgBatchCancelSpotOrdersResponse;
                toAmino(message: _10.MsgBatchCancelSpotOrdersResponse): _10.MsgBatchCancelSpotOrdersResponseAmino;
                fromAminoMsg(object: _10.MsgBatchCancelSpotOrdersResponseAminoMsg): _10.MsgBatchCancelSpotOrdersResponse;
                fromProtoMsg(message: _10.MsgBatchCancelSpotOrdersResponseProtoMsg): _10.MsgBatchCancelSpotOrdersResponse;
                toProto(message: _10.MsgBatchCancelSpotOrdersResponse): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCancelSpotOrdersResponse): _10.MsgBatchCancelSpotOrdersResponseProtoMsg;
            };
            MsgBatchCancelBinaryOptionsOrders: {
                typeUrl: string;
                encode(message: _10.MsgBatchCancelBinaryOptionsOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCancelBinaryOptionsOrders;
                fromPartial(object: Partial<_10.MsgBatchCancelBinaryOptionsOrders>): _10.MsgBatchCancelBinaryOptionsOrders;
                fromAmino(object: _10.MsgBatchCancelBinaryOptionsOrdersAmino): _10.MsgBatchCancelBinaryOptionsOrders;
                toAmino(message: _10.MsgBatchCancelBinaryOptionsOrders): _10.MsgBatchCancelBinaryOptionsOrdersAmino;
                fromAminoMsg(object: _10.MsgBatchCancelBinaryOptionsOrdersAminoMsg): _10.MsgBatchCancelBinaryOptionsOrders;
                fromProtoMsg(message: _10.MsgBatchCancelBinaryOptionsOrdersProtoMsg): _10.MsgBatchCancelBinaryOptionsOrders;
                toProto(message: _10.MsgBatchCancelBinaryOptionsOrders): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCancelBinaryOptionsOrders): _10.MsgBatchCancelBinaryOptionsOrdersProtoMsg;
            };
            MsgBatchCancelBinaryOptionsOrdersResponse: {
                typeUrl: string;
                encode(message: _10.MsgBatchCancelBinaryOptionsOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCancelBinaryOptionsOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCancelBinaryOptionsOrdersResponse>): _10.MsgBatchCancelBinaryOptionsOrdersResponse;
                fromAmino(object: _10.MsgBatchCancelBinaryOptionsOrdersResponseAmino): _10.MsgBatchCancelBinaryOptionsOrdersResponse;
                toAmino(message: _10.MsgBatchCancelBinaryOptionsOrdersResponse): _10.MsgBatchCancelBinaryOptionsOrdersResponseAmino;
                fromAminoMsg(object: _10.MsgBatchCancelBinaryOptionsOrdersResponseAminoMsg): _10.MsgBatchCancelBinaryOptionsOrdersResponse;
                fromProtoMsg(message: _10.MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg): _10.MsgBatchCancelBinaryOptionsOrdersResponse;
                toProto(message: _10.MsgBatchCancelBinaryOptionsOrdersResponse): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCancelBinaryOptionsOrdersResponse): _10.MsgBatchCancelBinaryOptionsOrdersResponseProtoMsg;
            };
            MsgBatchUpdateOrders: {
                typeUrl: string;
                encode(message: _10.MsgBatchUpdateOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchUpdateOrders;
                fromPartial(object: Partial<_10.MsgBatchUpdateOrders>): _10.MsgBatchUpdateOrders;
                fromAmino(object: _10.MsgBatchUpdateOrdersAmino): _10.MsgBatchUpdateOrders;
                toAmino(message: _10.MsgBatchUpdateOrders): _10.MsgBatchUpdateOrdersAmino;
                fromAminoMsg(object: _10.MsgBatchUpdateOrdersAminoMsg): _10.MsgBatchUpdateOrders;
                fromProtoMsg(message: _10.MsgBatchUpdateOrdersProtoMsg): _10.MsgBatchUpdateOrders;
                toProto(message: _10.MsgBatchUpdateOrders): Uint8Array;
                toProtoMsg(message: _10.MsgBatchUpdateOrders): _10.MsgBatchUpdateOrdersProtoMsg;
            };
            MsgBatchUpdateOrdersResponse: {
                typeUrl: string;
                encode(message: _10.MsgBatchUpdateOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchUpdateOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchUpdateOrdersResponse>): _10.MsgBatchUpdateOrdersResponse;
                fromAmino(object: _10.MsgBatchUpdateOrdersResponseAmino): _10.MsgBatchUpdateOrdersResponse;
                toAmino(message: _10.MsgBatchUpdateOrdersResponse): _10.MsgBatchUpdateOrdersResponseAmino;
                fromAminoMsg(object: _10.MsgBatchUpdateOrdersResponseAminoMsg): _10.MsgBatchUpdateOrdersResponse;
                fromProtoMsg(message: _10.MsgBatchUpdateOrdersResponseProtoMsg): _10.MsgBatchUpdateOrdersResponse;
                toProto(message: _10.MsgBatchUpdateOrdersResponse): Uint8Array;
                toProtoMsg(message: _10.MsgBatchUpdateOrdersResponse): _10.MsgBatchUpdateOrdersResponseProtoMsg;
            };
            MsgCreateDerivativeMarketOrder: {
                typeUrl: string;
                encode(message: _10.MsgCreateDerivativeMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateDerivativeMarketOrder;
                fromPartial(object: Partial<_10.MsgCreateDerivativeMarketOrder>): _10.MsgCreateDerivativeMarketOrder;
                fromAmino(object: _10.MsgCreateDerivativeMarketOrderAmino): _10.MsgCreateDerivativeMarketOrder;
                toAmino(message: _10.MsgCreateDerivativeMarketOrder): _10.MsgCreateDerivativeMarketOrderAmino;
                fromAminoMsg(object: _10.MsgCreateDerivativeMarketOrderAminoMsg): _10.MsgCreateDerivativeMarketOrder;
                fromProtoMsg(message: _10.MsgCreateDerivativeMarketOrderProtoMsg): _10.MsgCreateDerivativeMarketOrder;
                toProto(message: _10.MsgCreateDerivativeMarketOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCreateDerivativeMarketOrder): _10.MsgCreateDerivativeMarketOrderProtoMsg;
            };
            MsgCreateDerivativeMarketOrderResponse: {
                typeUrl: string;
                encode(message: _10.MsgCreateDerivativeMarketOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateDerivativeMarketOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateDerivativeMarketOrderResponse>): _10.MsgCreateDerivativeMarketOrderResponse;
                fromAmino(object: _10.MsgCreateDerivativeMarketOrderResponseAmino): _10.MsgCreateDerivativeMarketOrderResponse;
                toAmino(message: _10.MsgCreateDerivativeMarketOrderResponse): _10.MsgCreateDerivativeMarketOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCreateDerivativeMarketOrderResponseAminoMsg): _10.MsgCreateDerivativeMarketOrderResponse;
                fromProtoMsg(message: _10.MsgCreateDerivativeMarketOrderResponseProtoMsg): _10.MsgCreateDerivativeMarketOrderResponse;
                toProto(message: _10.MsgCreateDerivativeMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateDerivativeMarketOrderResponse): _10.MsgCreateDerivativeMarketOrderResponseProtoMsg;
            };
            DerivativeMarketOrderResults: {
                typeUrl: string;
                encode(message: _10.DerivativeMarketOrderResults, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.DerivativeMarketOrderResults;
                fromPartial(object: Partial<_10.DerivativeMarketOrderResults>): _10.DerivativeMarketOrderResults;
                fromAmino(object: _10.DerivativeMarketOrderResultsAmino): _10.DerivativeMarketOrderResults;
                toAmino(message: _10.DerivativeMarketOrderResults): _10.DerivativeMarketOrderResultsAmino;
                fromAminoMsg(object: _10.DerivativeMarketOrderResultsAminoMsg): _10.DerivativeMarketOrderResults;
                fromProtoMsg(message: _10.DerivativeMarketOrderResultsProtoMsg): _10.DerivativeMarketOrderResults;
                toProto(message: _10.DerivativeMarketOrderResults): Uint8Array;
                toProtoMsg(message: _10.DerivativeMarketOrderResults): _10.DerivativeMarketOrderResultsProtoMsg;
            };
            MsgCreateBinaryOptionsMarketOrder: {
                typeUrl: string;
                encode(message: _10.MsgCreateBinaryOptionsMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateBinaryOptionsMarketOrder;
                fromPartial(object: Partial<_10.MsgCreateBinaryOptionsMarketOrder>): _10.MsgCreateBinaryOptionsMarketOrder;
                fromAmino(object: _10.MsgCreateBinaryOptionsMarketOrderAmino): _10.MsgCreateBinaryOptionsMarketOrder;
                toAmino(message: _10.MsgCreateBinaryOptionsMarketOrder): _10.MsgCreateBinaryOptionsMarketOrderAmino;
                fromAminoMsg(object: _10.MsgCreateBinaryOptionsMarketOrderAminoMsg): _10.MsgCreateBinaryOptionsMarketOrder;
                fromProtoMsg(message: _10.MsgCreateBinaryOptionsMarketOrderProtoMsg): _10.MsgCreateBinaryOptionsMarketOrder;
                toProto(message: _10.MsgCreateBinaryOptionsMarketOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCreateBinaryOptionsMarketOrder): _10.MsgCreateBinaryOptionsMarketOrderProtoMsg;
            };
            MsgCreateBinaryOptionsMarketOrderResponse: {
                typeUrl: string;
                encode(message: _10.MsgCreateBinaryOptionsMarketOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateBinaryOptionsMarketOrderResponse;
                fromPartial(object: Partial<_10.MsgCreateBinaryOptionsMarketOrderResponse>): _10.MsgCreateBinaryOptionsMarketOrderResponse;
                fromAmino(object: _10.MsgCreateBinaryOptionsMarketOrderResponseAmino): _10.MsgCreateBinaryOptionsMarketOrderResponse;
                toAmino(message: _10.MsgCreateBinaryOptionsMarketOrderResponse): _10.MsgCreateBinaryOptionsMarketOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCreateBinaryOptionsMarketOrderResponseAminoMsg): _10.MsgCreateBinaryOptionsMarketOrderResponse;
                fromProtoMsg(message: _10.MsgCreateBinaryOptionsMarketOrderResponseProtoMsg): _10.MsgCreateBinaryOptionsMarketOrderResponse;
                toProto(message: _10.MsgCreateBinaryOptionsMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateBinaryOptionsMarketOrderResponse): _10.MsgCreateBinaryOptionsMarketOrderResponseProtoMsg;
            };
            MsgCancelDerivativeOrder: {
                typeUrl: string;
                encode(message: _10.MsgCancelDerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCancelDerivativeOrder;
                fromPartial(object: Partial<_10.MsgCancelDerivativeOrder>): _10.MsgCancelDerivativeOrder;
                fromAmino(object: _10.MsgCancelDerivativeOrderAmino): _10.MsgCancelDerivativeOrder;
                toAmino(message: _10.MsgCancelDerivativeOrder): _10.MsgCancelDerivativeOrderAmino;
                fromAminoMsg(object: _10.MsgCancelDerivativeOrderAminoMsg): _10.MsgCancelDerivativeOrder;
                fromProtoMsg(message: _10.MsgCancelDerivativeOrderProtoMsg): _10.MsgCancelDerivativeOrder;
                toProto(message: _10.MsgCancelDerivativeOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCancelDerivativeOrder): _10.MsgCancelDerivativeOrderProtoMsg;
            };
            MsgCancelDerivativeOrderResponse: {
                typeUrl: string;
                encode(_: _10.MsgCancelDerivativeOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgCancelDerivativeOrderResponse;
                fromPartial(_: Partial<_10.MsgCancelDerivativeOrderResponse>): _10.MsgCancelDerivativeOrderResponse;
                fromAmino(_: _10.MsgCancelDerivativeOrderResponseAmino): _10.MsgCancelDerivativeOrderResponse;
                toAmino(_: _10.MsgCancelDerivativeOrderResponse): _10.MsgCancelDerivativeOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCancelDerivativeOrderResponseAminoMsg): _10.MsgCancelDerivativeOrderResponse;
                fromProtoMsg(message: _10.MsgCancelDerivativeOrderResponseProtoMsg): _10.MsgCancelDerivativeOrderResponse;
                toProto(message: _10.MsgCancelDerivativeOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCancelDerivativeOrderResponse): _10.MsgCancelDerivativeOrderResponseProtoMsg;
            };
            MsgCancelBinaryOptionsOrder: {
                typeUrl: string;
                encode(message: _10.MsgCancelBinaryOptionsOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCancelBinaryOptionsOrder;
                fromPartial(object: Partial<_10.MsgCancelBinaryOptionsOrder>): _10.MsgCancelBinaryOptionsOrder;
                fromAmino(object: _10.MsgCancelBinaryOptionsOrderAmino): _10.MsgCancelBinaryOptionsOrder;
                toAmino(message: _10.MsgCancelBinaryOptionsOrder): _10.MsgCancelBinaryOptionsOrderAmino;
                fromAminoMsg(object: _10.MsgCancelBinaryOptionsOrderAminoMsg): _10.MsgCancelBinaryOptionsOrder;
                fromProtoMsg(message: _10.MsgCancelBinaryOptionsOrderProtoMsg): _10.MsgCancelBinaryOptionsOrder;
                toProto(message: _10.MsgCancelBinaryOptionsOrder): Uint8Array;
                toProtoMsg(message: _10.MsgCancelBinaryOptionsOrder): _10.MsgCancelBinaryOptionsOrderProtoMsg;
            };
            MsgCancelBinaryOptionsOrderResponse: {
                typeUrl: string;
                encode(_: _10.MsgCancelBinaryOptionsOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgCancelBinaryOptionsOrderResponse;
                fromPartial(_: Partial<_10.MsgCancelBinaryOptionsOrderResponse>): _10.MsgCancelBinaryOptionsOrderResponse;
                fromAmino(_: _10.MsgCancelBinaryOptionsOrderResponseAmino): _10.MsgCancelBinaryOptionsOrderResponse;
                toAmino(_: _10.MsgCancelBinaryOptionsOrderResponse): _10.MsgCancelBinaryOptionsOrderResponseAmino;
                fromAminoMsg(object: _10.MsgCancelBinaryOptionsOrderResponseAminoMsg): _10.MsgCancelBinaryOptionsOrderResponse;
                fromProtoMsg(message: _10.MsgCancelBinaryOptionsOrderResponseProtoMsg): _10.MsgCancelBinaryOptionsOrderResponse;
                toProto(message: _10.MsgCancelBinaryOptionsOrderResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCancelBinaryOptionsOrderResponse): _10.MsgCancelBinaryOptionsOrderResponseProtoMsg;
            };
            OrderData: {
                typeUrl: string;
                encode(message: _10.OrderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.OrderData;
                fromPartial(object: Partial<_10.OrderData>): _10.OrderData;
                fromAmino(object: _10.OrderDataAmino): _10.OrderData;
                toAmino(message: _10.OrderData): _10.OrderDataAmino;
                fromAminoMsg(object: _10.OrderDataAminoMsg): _10.OrderData;
                fromProtoMsg(message: _10.OrderDataProtoMsg): _10.OrderData;
                toProto(message: _10.OrderData): Uint8Array;
                toProtoMsg(message: _10.OrderData): _10.OrderDataProtoMsg;
            };
            MsgBatchCancelDerivativeOrders: {
                typeUrl: string;
                encode(message: _10.MsgBatchCancelDerivativeOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCancelDerivativeOrders;
                fromPartial(object: Partial<_10.MsgBatchCancelDerivativeOrders>): _10.MsgBatchCancelDerivativeOrders;
                fromAmino(object: _10.MsgBatchCancelDerivativeOrdersAmino): _10.MsgBatchCancelDerivativeOrders;
                toAmino(message: _10.MsgBatchCancelDerivativeOrders): _10.MsgBatchCancelDerivativeOrdersAmino;
                fromAminoMsg(object: _10.MsgBatchCancelDerivativeOrdersAminoMsg): _10.MsgBatchCancelDerivativeOrders;
                fromProtoMsg(message: _10.MsgBatchCancelDerivativeOrdersProtoMsg): _10.MsgBatchCancelDerivativeOrders;
                toProto(message: _10.MsgBatchCancelDerivativeOrders): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCancelDerivativeOrders): _10.MsgBatchCancelDerivativeOrdersProtoMsg;
            };
            MsgBatchCancelDerivativeOrdersResponse: {
                typeUrl: string;
                encode(message: _10.MsgBatchCancelDerivativeOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgBatchCancelDerivativeOrdersResponse;
                fromPartial(object: Partial<_10.MsgBatchCancelDerivativeOrdersResponse>): _10.MsgBatchCancelDerivativeOrdersResponse;
                fromAmino(object: _10.MsgBatchCancelDerivativeOrdersResponseAmino): _10.MsgBatchCancelDerivativeOrdersResponse;
                toAmino(message: _10.MsgBatchCancelDerivativeOrdersResponse): _10.MsgBatchCancelDerivativeOrdersResponseAmino;
                fromAminoMsg(object: _10.MsgBatchCancelDerivativeOrdersResponseAminoMsg): _10.MsgBatchCancelDerivativeOrdersResponse;
                fromProtoMsg(message: _10.MsgBatchCancelDerivativeOrdersResponseProtoMsg): _10.MsgBatchCancelDerivativeOrdersResponse;
                toProto(message: _10.MsgBatchCancelDerivativeOrdersResponse): Uint8Array;
                toProtoMsg(message: _10.MsgBatchCancelDerivativeOrdersResponse): _10.MsgBatchCancelDerivativeOrdersResponseProtoMsg;
            };
            MsgSubaccountTransfer: {
                typeUrl: string;
                encode(message: _10.MsgSubaccountTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgSubaccountTransfer;
                fromPartial(object: Partial<_10.MsgSubaccountTransfer>): _10.MsgSubaccountTransfer;
                fromAmino(object: _10.MsgSubaccountTransferAmino): _10.MsgSubaccountTransfer;
                toAmino(message: _10.MsgSubaccountTransfer): _10.MsgSubaccountTransferAmino;
                fromAminoMsg(object: _10.MsgSubaccountTransferAminoMsg): _10.MsgSubaccountTransfer;
                fromProtoMsg(message: _10.MsgSubaccountTransferProtoMsg): _10.MsgSubaccountTransfer;
                toProto(message: _10.MsgSubaccountTransfer): Uint8Array;
                toProtoMsg(message: _10.MsgSubaccountTransfer): _10.MsgSubaccountTransferProtoMsg;
            };
            MsgSubaccountTransferResponse: {
                typeUrl: string;
                encode(_: _10.MsgSubaccountTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgSubaccountTransferResponse;
                fromPartial(_: Partial<_10.MsgSubaccountTransferResponse>): _10.MsgSubaccountTransferResponse;
                fromAmino(_: _10.MsgSubaccountTransferResponseAmino): _10.MsgSubaccountTransferResponse;
                toAmino(_: _10.MsgSubaccountTransferResponse): _10.MsgSubaccountTransferResponseAmino;
                fromAminoMsg(object: _10.MsgSubaccountTransferResponseAminoMsg): _10.MsgSubaccountTransferResponse;
                fromProtoMsg(message: _10.MsgSubaccountTransferResponseProtoMsg): _10.MsgSubaccountTransferResponse;
                toProto(message: _10.MsgSubaccountTransferResponse): Uint8Array;
                toProtoMsg(message: _10.MsgSubaccountTransferResponse): _10.MsgSubaccountTransferResponseProtoMsg;
            };
            MsgExternalTransfer: {
                typeUrl: string;
                encode(message: _10.MsgExternalTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgExternalTransfer;
                fromPartial(object: Partial<_10.MsgExternalTransfer>): _10.MsgExternalTransfer;
                fromAmino(object: _10.MsgExternalTransferAmino): _10.MsgExternalTransfer;
                toAmino(message: _10.MsgExternalTransfer): _10.MsgExternalTransferAmino;
                fromAminoMsg(object: _10.MsgExternalTransferAminoMsg): _10.MsgExternalTransfer;
                fromProtoMsg(message: _10.MsgExternalTransferProtoMsg): _10.MsgExternalTransfer;
                toProto(message: _10.MsgExternalTransfer): Uint8Array;
                toProtoMsg(message: _10.MsgExternalTransfer): _10.MsgExternalTransferProtoMsg;
            };
            MsgExternalTransferResponse: {
                typeUrl: string;
                encode(_: _10.MsgExternalTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgExternalTransferResponse;
                fromPartial(_: Partial<_10.MsgExternalTransferResponse>): _10.MsgExternalTransferResponse;
                fromAmino(_: _10.MsgExternalTransferResponseAmino): _10.MsgExternalTransferResponse;
                toAmino(_: _10.MsgExternalTransferResponse): _10.MsgExternalTransferResponseAmino;
                fromAminoMsg(object: _10.MsgExternalTransferResponseAminoMsg): _10.MsgExternalTransferResponse;
                fromProtoMsg(message: _10.MsgExternalTransferResponseProtoMsg): _10.MsgExternalTransferResponse;
                toProto(message: _10.MsgExternalTransferResponse): Uint8Array;
                toProtoMsg(message: _10.MsgExternalTransferResponse): _10.MsgExternalTransferResponseProtoMsg;
            };
            MsgLiquidatePosition: {
                typeUrl: string;
                encode(message: _10.MsgLiquidatePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgLiquidatePosition;
                fromPartial(object: Partial<_10.MsgLiquidatePosition>): _10.MsgLiquidatePosition;
                fromAmino(object: _10.MsgLiquidatePositionAmino): _10.MsgLiquidatePosition;
                toAmino(message: _10.MsgLiquidatePosition): _10.MsgLiquidatePositionAmino;
                fromAminoMsg(object: _10.MsgLiquidatePositionAminoMsg): _10.MsgLiquidatePosition;
                fromProtoMsg(message: _10.MsgLiquidatePositionProtoMsg): _10.MsgLiquidatePosition;
                toProto(message: _10.MsgLiquidatePosition): Uint8Array;
                toProtoMsg(message: _10.MsgLiquidatePosition): _10.MsgLiquidatePositionProtoMsg;
            };
            MsgLiquidatePositionResponse: {
                typeUrl: string;
                encode(_: _10.MsgLiquidatePositionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgLiquidatePositionResponse;
                fromPartial(_: Partial<_10.MsgLiquidatePositionResponse>): _10.MsgLiquidatePositionResponse;
                fromAmino(_: _10.MsgLiquidatePositionResponseAmino): _10.MsgLiquidatePositionResponse;
                toAmino(_: _10.MsgLiquidatePositionResponse): _10.MsgLiquidatePositionResponseAmino;
                fromAminoMsg(object: _10.MsgLiquidatePositionResponseAminoMsg): _10.MsgLiquidatePositionResponse;
                fromProtoMsg(message: _10.MsgLiquidatePositionResponseProtoMsg): _10.MsgLiquidatePositionResponse;
                toProto(message: _10.MsgLiquidatePositionResponse): Uint8Array;
                toProtoMsg(message: _10.MsgLiquidatePositionResponse): _10.MsgLiquidatePositionResponseProtoMsg;
            };
            MsgIncreasePositionMargin: {
                typeUrl: string;
                encode(message: _10.MsgIncreasePositionMargin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgIncreasePositionMargin;
                fromPartial(object: Partial<_10.MsgIncreasePositionMargin>): _10.MsgIncreasePositionMargin;
                fromAmino(object: _10.MsgIncreasePositionMarginAmino): _10.MsgIncreasePositionMargin;
                toAmino(message: _10.MsgIncreasePositionMargin): _10.MsgIncreasePositionMarginAmino;
                fromAminoMsg(object: _10.MsgIncreasePositionMarginAminoMsg): _10.MsgIncreasePositionMargin;
                fromProtoMsg(message: _10.MsgIncreasePositionMarginProtoMsg): _10.MsgIncreasePositionMargin;
                toProto(message: _10.MsgIncreasePositionMargin): Uint8Array;
                toProtoMsg(message: _10.MsgIncreasePositionMargin): _10.MsgIncreasePositionMarginProtoMsg;
            };
            MsgIncreasePositionMarginResponse: {
                typeUrl: string;
                encode(_: _10.MsgIncreasePositionMarginResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgIncreasePositionMarginResponse;
                fromPartial(_: Partial<_10.MsgIncreasePositionMarginResponse>): _10.MsgIncreasePositionMarginResponse;
                fromAmino(_: _10.MsgIncreasePositionMarginResponseAmino): _10.MsgIncreasePositionMarginResponse;
                toAmino(_: _10.MsgIncreasePositionMarginResponse): _10.MsgIncreasePositionMarginResponseAmino;
                fromAminoMsg(object: _10.MsgIncreasePositionMarginResponseAminoMsg): _10.MsgIncreasePositionMarginResponse;
                fromProtoMsg(message: _10.MsgIncreasePositionMarginResponseProtoMsg): _10.MsgIncreasePositionMarginResponse;
                toProto(message: _10.MsgIncreasePositionMarginResponse): Uint8Array;
                toProtoMsg(message: _10.MsgIncreasePositionMarginResponse): _10.MsgIncreasePositionMarginResponseProtoMsg;
            };
            MsgPrivilegedExecuteContract: {
                typeUrl: string;
                encode(message: _10.MsgPrivilegedExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgPrivilegedExecuteContract;
                fromPartial(object: Partial<_10.MsgPrivilegedExecuteContract>): _10.MsgPrivilegedExecuteContract;
                fromAmino(object: _10.MsgPrivilegedExecuteContractAmino): _10.MsgPrivilegedExecuteContract;
                toAmino(message: _10.MsgPrivilegedExecuteContract): _10.MsgPrivilegedExecuteContractAmino;
                fromAminoMsg(object: _10.MsgPrivilegedExecuteContractAminoMsg): _10.MsgPrivilegedExecuteContract;
                fromProtoMsg(message: _10.MsgPrivilegedExecuteContractProtoMsg): _10.MsgPrivilegedExecuteContract;
                toProto(message: _10.MsgPrivilegedExecuteContract): Uint8Array;
                toProtoMsg(message: _10.MsgPrivilegedExecuteContract): _10.MsgPrivilegedExecuteContractProtoMsg;
            };
            MsgPrivilegedExecuteContractResponse: {
                typeUrl: string;
                encode(message: _10.MsgPrivilegedExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgPrivilegedExecuteContractResponse;
                fromPartial(object: Partial<_10.MsgPrivilegedExecuteContractResponse>): _10.MsgPrivilegedExecuteContractResponse;
                fromAmino(object: _10.MsgPrivilegedExecuteContractResponseAmino): _10.MsgPrivilegedExecuteContractResponse;
                toAmino(message: _10.MsgPrivilegedExecuteContractResponse): _10.MsgPrivilegedExecuteContractResponseAmino;
                fromAminoMsg(object: _10.MsgPrivilegedExecuteContractResponseAminoMsg): _10.MsgPrivilegedExecuteContractResponse;
                fromProtoMsg(message: _10.MsgPrivilegedExecuteContractResponseProtoMsg): _10.MsgPrivilegedExecuteContractResponse;
                toProto(message: _10.MsgPrivilegedExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _10.MsgPrivilegedExecuteContractResponse): _10.MsgPrivilegedExecuteContractResponseProtoMsg;
            };
            SpotMarketParamUpdateProposal: {
                typeUrl: string;
                encode(message: _10.SpotMarketParamUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.SpotMarketParamUpdateProposal;
                fromPartial(object: Partial<_10.SpotMarketParamUpdateProposal>): _10.SpotMarketParamUpdateProposal;
                fromAmino(object: _10.SpotMarketParamUpdateProposalAmino): _10.SpotMarketParamUpdateProposal;
                toAmino(message: _10.SpotMarketParamUpdateProposal): _10.SpotMarketParamUpdateProposalAmino;
                fromAminoMsg(object: _10.SpotMarketParamUpdateProposalAminoMsg): _10.SpotMarketParamUpdateProposal;
                fromProtoMsg(message: _10.SpotMarketParamUpdateProposalProtoMsg): _10.SpotMarketParamUpdateProposal;
                toProto(message: _10.SpotMarketParamUpdateProposal): Uint8Array;
                toProtoMsg(message: _10.SpotMarketParamUpdateProposal): _10.SpotMarketParamUpdateProposalProtoMsg;
            };
            ExchangeEnableProposal: {
                typeUrl: string;
                encode(message: _10.ExchangeEnableProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ExchangeEnableProposal;
                fromPartial(object: Partial<_10.ExchangeEnableProposal>): _10.ExchangeEnableProposal;
                fromAmino(object: _10.ExchangeEnableProposalAmino): _10.ExchangeEnableProposal;
                toAmino(message: _10.ExchangeEnableProposal): _10.ExchangeEnableProposalAmino;
                fromAminoMsg(object: _10.ExchangeEnableProposalAminoMsg): _10.ExchangeEnableProposal;
                fromProtoMsg(message: _10.ExchangeEnableProposalProtoMsg): _10.ExchangeEnableProposal;
                toProto(message: _10.ExchangeEnableProposal): Uint8Array;
                toProtoMsg(message: _10.ExchangeEnableProposal): _10.ExchangeEnableProposalProtoMsg;
            };
            BatchExchangeModificationProposal: {
                typeUrl: string;
                encode(message: _10.BatchExchangeModificationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BatchExchangeModificationProposal;
                fromPartial(object: Partial<_10.BatchExchangeModificationProposal>): _10.BatchExchangeModificationProposal;
                fromAmino(object: _10.BatchExchangeModificationProposalAmino): _10.BatchExchangeModificationProposal;
                toAmino(message: _10.BatchExchangeModificationProposal): _10.BatchExchangeModificationProposalAmino;
                fromAminoMsg(object: _10.BatchExchangeModificationProposalAminoMsg): _10.BatchExchangeModificationProposal;
                fromProtoMsg(message: _10.BatchExchangeModificationProposalProtoMsg): _10.BatchExchangeModificationProposal;
                toProto(message: _10.BatchExchangeModificationProposal): Uint8Array;
                toProtoMsg(message: _10.BatchExchangeModificationProposal): _10.BatchExchangeModificationProposalProtoMsg;
            };
            SpotMarketLaunchProposal: {
                typeUrl: string;
                encode(message: _10.SpotMarketLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.SpotMarketLaunchProposal;
                fromPartial(object: Partial<_10.SpotMarketLaunchProposal>): _10.SpotMarketLaunchProposal;
                fromAmino(object: _10.SpotMarketLaunchProposalAmino): _10.SpotMarketLaunchProposal;
                toAmino(message: _10.SpotMarketLaunchProposal): _10.SpotMarketLaunchProposalAmino;
                fromAminoMsg(object: _10.SpotMarketLaunchProposalAminoMsg): _10.SpotMarketLaunchProposal;
                fromProtoMsg(message: _10.SpotMarketLaunchProposalProtoMsg): _10.SpotMarketLaunchProposal;
                toProto(message: _10.SpotMarketLaunchProposal): Uint8Array;
                toProtoMsg(message: _10.SpotMarketLaunchProposal): _10.SpotMarketLaunchProposalProtoMsg;
            };
            PerpetualMarketLaunchProposal: {
                typeUrl: string;
                encode(message: _10.PerpetualMarketLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.PerpetualMarketLaunchProposal;
                fromPartial(object: Partial<_10.PerpetualMarketLaunchProposal>): _10.PerpetualMarketLaunchProposal;
                fromAmino(object: _10.PerpetualMarketLaunchProposalAmino): _10.PerpetualMarketLaunchProposal;
                toAmino(message: _10.PerpetualMarketLaunchProposal): _10.PerpetualMarketLaunchProposalAmino;
                fromAminoMsg(object: _10.PerpetualMarketLaunchProposalAminoMsg): _10.PerpetualMarketLaunchProposal;
                fromProtoMsg(message: _10.PerpetualMarketLaunchProposalProtoMsg): _10.PerpetualMarketLaunchProposal;
                toProto(message: _10.PerpetualMarketLaunchProposal): Uint8Array;
                toProtoMsg(message: _10.PerpetualMarketLaunchProposal): _10.PerpetualMarketLaunchProposalProtoMsg;
            };
            BinaryOptionsMarketLaunchProposal: {
                typeUrl: string;
                encode(message: _10.BinaryOptionsMarketLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BinaryOptionsMarketLaunchProposal;
                fromPartial(object: Partial<_10.BinaryOptionsMarketLaunchProposal>): _10.BinaryOptionsMarketLaunchProposal;
                fromAmino(object: _10.BinaryOptionsMarketLaunchProposalAmino): _10.BinaryOptionsMarketLaunchProposal;
                toAmino(message: _10.BinaryOptionsMarketLaunchProposal): _10.BinaryOptionsMarketLaunchProposalAmino;
                fromAminoMsg(object: _10.BinaryOptionsMarketLaunchProposalAminoMsg): _10.BinaryOptionsMarketLaunchProposal;
                fromProtoMsg(message: _10.BinaryOptionsMarketLaunchProposalProtoMsg): _10.BinaryOptionsMarketLaunchProposal;
                toProto(message: _10.BinaryOptionsMarketLaunchProposal): Uint8Array;
                toProtoMsg(message: _10.BinaryOptionsMarketLaunchProposal): _10.BinaryOptionsMarketLaunchProposalProtoMsg;
            };
            ExpiryFuturesMarketLaunchProposal: {
                typeUrl: string;
                encode(message: _10.ExpiryFuturesMarketLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ExpiryFuturesMarketLaunchProposal;
                fromPartial(object: Partial<_10.ExpiryFuturesMarketLaunchProposal>): _10.ExpiryFuturesMarketLaunchProposal;
                fromAmino(object: _10.ExpiryFuturesMarketLaunchProposalAmino): _10.ExpiryFuturesMarketLaunchProposal;
                toAmino(message: _10.ExpiryFuturesMarketLaunchProposal): _10.ExpiryFuturesMarketLaunchProposalAmino;
                fromAminoMsg(object: _10.ExpiryFuturesMarketLaunchProposalAminoMsg): _10.ExpiryFuturesMarketLaunchProposal;
                fromProtoMsg(message: _10.ExpiryFuturesMarketLaunchProposalProtoMsg): _10.ExpiryFuturesMarketLaunchProposal;
                toProto(message: _10.ExpiryFuturesMarketLaunchProposal): Uint8Array;
                toProtoMsg(message: _10.ExpiryFuturesMarketLaunchProposal): _10.ExpiryFuturesMarketLaunchProposalProtoMsg;
            };
            DerivativeMarketParamUpdateProposal: {
                typeUrl: string;
                encode(message: _10.DerivativeMarketParamUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.DerivativeMarketParamUpdateProposal;
                fromPartial(object: Partial<_10.DerivativeMarketParamUpdateProposal>): _10.DerivativeMarketParamUpdateProposal;
                fromAmino(object: _10.DerivativeMarketParamUpdateProposalAmino): _10.DerivativeMarketParamUpdateProposal;
                toAmino(message: _10.DerivativeMarketParamUpdateProposal): _10.DerivativeMarketParamUpdateProposalAmino;
                fromAminoMsg(object: _10.DerivativeMarketParamUpdateProposalAminoMsg): _10.DerivativeMarketParamUpdateProposal;
                fromProtoMsg(message: _10.DerivativeMarketParamUpdateProposalProtoMsg): _10.DerivativeMarketParamUpdateProposal;
                toProto(message: _10.DerivativeMarketParamUpdateProposal): Uint8Array;
                toProtoMsg(message: _10.DerivativeMarketParamUpdateProposal): _10.DerivativeMarketParamUpdateProposalProtoMsg;
            };
            MarketForcedSettlementProposal: {
                typeUrl: string;
                encode(message: _10.MarketForcedSettlementProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MarketForcedSettlementProposal;
                fromPartial(object: Partial<_10.MarketForcedSettlementProposal>): _10.MarketForcedSettlementProposal;
                fromAmino(object: _10.MarketForcedSettlementProposalAmino): _10.MarketForcedSettlementProposal;
                toAmino(message: _10.MarketForcedSettlementProposal): _10.MarketForcedSettlementProposalAmino;
                fromAminoMsg(object: _10.MarketForcedSettlementProposalAminoMsg): _10.MarketForcedSettlementProposal;
                fromProtoMsg(message: _10.MarketForcedSettlementProposalProtoMsg): _10.MarketForcedSettlementProposal;
                toProto(message: _10.MarketForcedSettlementProposal): Uint8Array;
                toProtoMsg(message: _10.MarketForcedSettlementProposal): _10.MarketForcedSettlementProposalProtoMsg;
            };
            UpdateDenomDecimalsProposal: {
                typeUrl: string;
                encode(message: _10.UpdateDenomDecimalsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.UpdateDenomDecimalsProposal;
                fromPartial(object: Partial<_10.UpdateDenomDecimalsProposal>): _10.UpdateDenomDecimalsProposal;
                fromAmino(object: _10.UpdateDenomDecimalsProposalAmino): _10.UpdateDenomDecimalsProposal;
                toAmino(message: _10.UpdateDenomDecimalsProposal): _10.UpdateDenomDecimalsProposalAmino;
                fromAminoMsg(object: _10.UpdateDenomDecimalsProposalAminoMsg): _10.UpdateDenomDecimalsProposal;
                fromProtoMsg(message: _10.UpdateDenomDecimalsProposalProtoMsg): _10.UpdateDenomDecimalsProposal;
                toProto(message: _10.UpdateDenomDecimalsProposal): Uint8Array;
                toProtoMsg(message: _10.UpdateDenomDecimalsProposal): _10.UpdateDenomDecimalsProposalProtoMsg;
            };
            BinaryOptionsMarketParamUpdateProposal: {
                typeUrl: string;
                encode(message: _10.BinaryOptionsMarketParamUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BinaryOptionsMarketParamUpdateProposal;
                fromPartial(object: Partial<_10.BinaryOptionsMarketParamUpdateProposal>): _10.BinaryOptionsMarketParamUpdateProposal;
                fromAmino(object: _10.BinaryOptionsMarketParamUpdateProposalAmino): _10.BinaryOptionsMarketParamUpdateProposal;
                toAmino(message: _10.BinaryOptionsMarketParamUpdateProposal): _10.BinaryOptionsMarketParamUpdateProposalAmino;
                fromAminoMsg(object: _10.BinaryOptionsMarketParamUpdateProposalAminoMsg): _10.BinaryOptionsMarketParamUpdateProposal;
                fromProtoMsg(message: _10.BinaryOptionsMarketParamUpdateProposalProtoMsg): _10.BinaryOptionsMarketParamUpdateProposal;
                toProto(message: _10.BinaryOptionsMarketParamUpdateProposal): Uint8Array;
                toProtoMsg(message: _10.BinaryOptionsMarketParamUpdateProposal): _10.BinaryOptionsMarketParamUpdateProposalProtoMsg;
            };
            ProviderOracleParams: {
                typeUrl: string;
                encode(message: _10.ProviderOracleParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ProviderOracleParams;
                fromPartial(object: Partial<_10.ProviderOracleParams>): _10.ProviderOracleParams;
                fromAmino(object: _10.ProviderOracleParamsAmino): _10.ProviderOracleParams;
                toAmino(message: _10.ProviderOracleParams): _10.ProviderOracleParamsAmino;
                fromAminoMsg(object: _10.ProviderOracleParamsAminoMsg): _10.ProviderOracleParams;
                fromProtoMsg(message: _10.ProviderOracleParamsProtoMsg): _10.ProviderOracleParams;
                toProto(message: _10.ProviderOracleParams): Uint8Array;
                toProtoMsg(message: _10.ProviderOracleParams): _10.ProviderOracleParamsProtoMsg;
            };
            OracleParams: {
                typeUrl: string;
                encode(message: _10.OracleParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.OracleParams;
                fromPartial(object: Partial<_10.OracleParams>): _10.OracleParams;
                fromAmino(object: _10.OracleParamsAmino): _10.OracleParams;
                toAmino(message: _10.OracleParams): _10.OracleParamsAmino;
                fromAminoMsg(object: _10.OracleParamsAminoMsg): _10.OracleParams;
                fromProtoMsg(message: _10.OracleParamsProtoMsg): _10.OracleParams;
                toProto(message: _10.OracleParams): Uint8Array;
                toProtoMsg(message: _10.OracleParams): _10.OracleParamsProtoMsg;
            };
            TradingRewardCampaignLaunchProposal: {
                typeUrl: string;
                encode(message: _10.TradingRewardCampaignLaunchProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.TradingRewardCampaignLaunchProposal;
                fromPartial(object: Partial<_10.TradingRewardCampaignLaunchProposal>): _10.TradingRewardCampaignLaunchProposal;
                fromAmino(object: _10.TradingRewardCampaignLaunchProposalAmino): _10.TradingRewardCampaignLaunchProposal;
                toAmino(message: _10.TradingRewardCampaignLaunchProposal): _10.TradingRewardCampaignLaunchProposalAmino;
                fromAminoMsg(object: _10.TradingRewardCampaignLaunchProposalAminoMsg): _10.TradingRewardCampaignLaunchProposal;
                fromProtoMsg(message: _10.TradingRewardCampaignLaunchProposalProtoMsg): _10.TradingRewardCampaignLaunchProposal;
                toProto(message: _10.TradingRewardCampaignLaunchProposal): Uint8Array;
                toProtoMsg(message: _10.TradingRewardCampaignLaunchProposal): _10.TradingRewardCampaignLaunchProposalProtoMsg;
            };
            TradingRewardCampaignUpdateProposal: {
                typeUrl: string;
                encode(message: _10.TradingRewardCampaignUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.TradingRewardCampaignUpdateProposal;
                fromPartial(object: Partial<_10.TradingRewardCampaignUpdateProposal>): _10.TradingRewardCampaignUpdateProposal;
                fromAmino(object: _10.TradingRewardCampaignUpdateProposalAmino): _10.TradingRewardCampaignUpdateProposal;
                toAmino(message: _10.TradingRewardCampaignUpdateProposal): _10.TradingRewardCampaignUpdateProposalAmino;
                fromAminoMsg(object: _10.TradingRewardCampaignUpdateProposalAminoMsg): _10.TradingRewardCampaignUpdateProposal;
                fromProtoMsg(message: _10.TradingRewardCampaignUpdateProposalProtoMsg): _10.TradingRewardCampaignUpdateProposal;
                toProto(message: _10.TradingRewardCampaignUpdateProposal): Uint8Array;
                toProtoMsg(message: _10.TradingRewardCampaignUpdateProposal): _10.TradingRewardCampaignUpdateProposalProtoMsg;
            };
            RewardPointUpdate: {
                typeUrl: string;
                encode(message: _10.RewardPointUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.RewardPointUpdate;
                fromPartial(object: Partial<_10.RewardPointUpdate>): _10.RewardPointUpdate;
                fromAmino(object: _10.RewardPointUpdateAmino): _10.RewardPointUpdate;
                toAmino(message: _10.RewardPointUpdate): _10.RewardPointUpdateAmino;
                fromAminoMsg(object: _10.RewardPointUpdateAminoMsg): _10.RewardPointUpdate;
                fromProtoMsg(message: _10.RewardPointUpdateProtoMsg): _10.RewardPointUpdate;
                toProto(message: _10.RewardPointUpdate): Uint8Array;
                toProtoMsg(message: _10.RewardPointUpdate): _10.RewardPointUpdateProtoMsg;
            };
            TradingRewardPendingPointsUpdateProposal: {
                typeUrl: string;
                encode(message: _10.TradingRewardPendingPointsUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.TradingRewardPendingPointsUpdateProposal;
                fromPartial(object: Partial<_10.TradingRewardPendingPointsUpdateProposal>): _10.TradingRewardPendingPointsUpdateProposal;
                fromAmino(object: _10.TradingRewardPendingPointsUpdateProposalAmino): _10.TradingRewardPendingPointsUpdateProposal;
                toAmino(message: _10.TradingRewardPendingPointsUpdateProposal): _10.TradingRewardPendingPointsUpdateProposalAmino;
                fromAminoMsg(object: _10.TradingRewardPendingPointsUpdateProposalAminoMsg): _10.TradingRewardPendingPointsUpdateProposal;
                fromProtoMsg(message: _10.TradingRewardPendingPointsUpdateProposalProtoMsg): _10.TradingRewardPendingPointsUpdateProposal;
                toProto(message: _10.TradingRewardPendingPointsUpdateProposal): Uint8Array;
                toProtoMsg(message: _10.TradingRewardPendingPointsUpdateProposal): _10.TradingRewardPendingPointsUpdateProposalProtoMsg;
            };
            FeeDiscountProposal: {
                typeUrl: string;
                encode(message: _10.FeeDiscountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.FeeDiscountProposal;
                fromPartial(object: Partial<_10.FeeDiscountProposal>): _10.FeeDiscountProposal;
                fromAmino(object: _10.FeeDiscountProposalAmino): _10.FeeDiscountProposal;
                toAmino(message: _10.FeeDiscountProposal): _10.FeeDiscountProposalAmino;
                fromAminoMsg(object: _10.FeeDiscountProposalAminoMsg): _10.FeeDiscountProposal;
                fromProtoMsg(message: _10.FeeDiscountProposalProtoMsg): _10.FeeDiscountProposal;
                toProto(message: _10.FeeDiscountProposal): Uint8Array;
                toProtoMsg(message: _10.FeeDiscountProposal): _10.FeeDiscountProposalProtoMsg;
            };
            BatchCommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _10.BatchCommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.BatchCommunityPoolSpendProposal;
                fromPartial(object: Partial<_10.BatchCommunityPoolSpendProposal>): _10.BatchCommunityPoolSpendProposal;
                fromAmino(object: _10.BatchCommunityPoolSpendProposalAmino): _10.BatchCommunityPoolSpendProposal;
                toAmino(message: _10.BatchCommunityPoolSpendProposal): _10.BatchCommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _10.BatchCommunityPoolSpendProposalAminoMsg): _10.BatchCommunityPoolSpendProposal;
                fromProtoMsg(message: _10.BatchCommunityPoolSpendProposalProtoMsg): _10.BatchCommunityPoolSpendProposal;
                toProto(message: _10.BatchCommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _10.BatchCommunityPoolSpendProposal): _10.BatchCommunityPoolSpendProposalProtoMsg;
            };
            MsgRewardsOptOut: {
                typeUrl: string;
                encode(message: _10.MsgRewardsOptOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgRewardsOptOut;
                fromPartial(object: Partial<_10.MsgRewardsOptOut>): _10.MsgRewardsOptOut;
                fromAmino(object: _10.MsgRewardsOptOutAmino): _10.MsgRewardsOptOut;
                toAmino(message: _10.MsgRewardsOptOut): _10.MsgRewardsOptOutAmino;
                fromAminoMsg(object: _10.MsgRewardsOptOutAminoMsg): _10.MsgRewardsOptOut;
                fromProtoMsg(message: _10.MsgRewardsOptOutProtoMsg): _10.MsgRewardsOptOut;
                toProto(message: _10.MsgRewardsOptOut): Uint8Array;
                toProtoMsg(message: _10.MsgRewardsOptOut): _10.MsgRewardsOptOutProtoMsg;
            };
            MsgRewardsOptOutResponse: {
                typeUrl: string;
                encode(_: _10.MsgRewardsOptOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgRewardsOptOutResponse;
                fromPartial(_: Partial<_10.MsgRewardsOptOutResponse>): _10.MsgRewardsOptOutResponse;
                fromAmino(_: _10.MsgRewardsOptOutResponseAmino): _10.MsgRewardsOptOutResponse;
                toAmino(_: _10.MsgRewardsOptOutResponse): _10.MsgRewardsOptOutResponseAmino;
                fromAminoMsg(object: _10.MsgRewardsOptOutResponseAminoMsg): _10.MsgRewardsOptOutResponse;
                fromProtoMsg(message: _10.MsgRewardsOptOutResponseProtoMsg): _10.MsgRewardsOptOutResponse;
                toProto(message: _10.MsgRewardsOptOutResponse): Uint8Array;
                toProtoMsg(message: _10.MsgRewardsOptOutResponse): _10.MsgRewardsOptOutResponseProtoMsg;
            };
            MsgReclaimLockedFunds: {
                typeUrl: string;
                encode(message: _10.MsgReclaimLockedFunds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgReclaimLockedFunds;
                fromPartial(object: Partial<_10.MsgReclaimLockedFunds>): _10.MsgReclaimLockedFunds;
                fromAmino(object: _10.MsgReclaimLockedFundsAmino): _10.MsgReclaimLockedFunds;
                toAmino(message: _10.MsgReclaimLockedFunds): _10.MsgReclaimLockedFundsAmino;
                fromAminoMsg(object: _10.MsgReclaimLockedFundsAminoMsg): _10.MsgReclaimLockedFunds;
                fromProtoMsg(message: _10.MsgReclaimLockedFundsProtoMsg): _10.MsgReclaimLockedFunds;
                toProto(message: _10.MsgReclaimLockedFunds): Uint8Array;
                toProtoMsg(message: _10.MsgReclaimLockedFunds): _10.MsgReclaimLockedFundsProtoMsg;
            };
            MsgReclaimLockedFundsResponse: {
                typeUrl: string;
                encode(_: _10.MsgReclaimLockedFundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgReclaimLockedFundsResponse;
                fromPartial(_: Partial<_10.MsgReclaimLockedFundsResponse>): _10.MsgReclaimLockedFundsResponse;
                fromAmino(_: _10.MsgReclaimLockedFundsResponseAmino): _10.MsgReclaimLockedFundsResponse;
                toAmino(_: _10.MsgReclaimLockedFundsResponse): _10.MsgReclaimLockedFundsResponseAmino;
                fromAminoMsg(object: _10.MsgReclaimLockedFundsResponseAminoMsg): _10.MsgReclaimLockedFundsResponse;
                fromProtoMsg(message: _10.MsgReclaimLockedFundsResponseProtoMsg): _10.MsgReclaimLockedFundsResponse;
                toProto(message: _10.MsgReclaimLockedFundsResponse): Uint8Array;
                toProtoMsg(message: _10.MsgReclaimLockedFundsResponse): _10.MsgReclaimLockedFundsResponseProtoMsg;
            };
            MsgSignData: {
                typeUrl: string;
                encode(message: _10.MsgSignData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgSignData;
                fromPartial(object: Partial<_10.MsgSignData>): _10.MsgSignData;
                fromAmino(object: _10.MsgSignDataAmino): _10.MsgSignData;
                toAmino(message: _10.MsgSignData): _10.MsgSignDataAmino;
                fromAminoMsg(object: _10.MsgSignDataAminoMsg): _10.MsgSignData;
                fromProtoMsg(message: _10.MsgSignDataProtoMsg): _10.MsgSignData;
                toProto(message: _10.MsgSignData): Uint8Array;
                toProtoMsg(message: _10.MsgSignData): _10.MsgSignDataProtoMsg;
            };
            MsgSignDoc: {
                typeUrl: string;
                encode(message: _10.MsgSignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgSignDoc;
                fromPartial(object: Partial<_10.MsgSignDoc>): _10.MsgSignDoc;
                fromAmino(object: _10.MsgSignDocAmino): _10.MsgSignDoc;
                toAmino(message: _10.MsgSignDoc): _10.MsgSignDocAmino;
                fromAminoMsg(object: _10.MsgSignDocAminoMsg): _10.MsgSignDoc;
                fromProtoMsg(message: _10.MsgSignDocProtoMsg): _10.MsgSignDoc;
                toProto(message: _10.MsgSignDoc): Uint8Array;
                toProtoMsg(message: _10.MsgSignDoc): _10.MsgSignDocProtoMsg;
            };
            MsgAdminUpdateBinaryOptionsMarket: {
                typeUrl: string;
                encode(message: _10.MsgAdminUpdateBinaryOptionsMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgAdminUpdateBinaryOptionsMarket;
                fromPartial(object: Partial<_10.MsgAdminUpdateBinaryOptionsMarket>): _10.MsgAdminUpdateBinaryOptionsMarket;
                fromAmino(object: _10.MsgAdminUpdateBinaryOptionsMarketAmino): _10.MsgAdminUpdateBinaryOptionsMarket;
                toAmino(message: _10.MsgAdminUpdateBinaryOptionsMarket): _10.MsgAdminUpdateBinaryOptionsMarketAmino;
                fromAminoMsg(object: _10.MsgAdminUpdateBinaryOptionsMarketAminoMsg): _10.MsgAdminUpdateBinaryOptionsMarket;
                fromProtoMsg(message: _10.MsgAdminUpdateBinaryOptionsMarketProtoMsg): _10.MsgAdminUpdateBinaryOptionsMarket;
                toProto(message: _10.MsgAdminUpdateBinaryOptionsMarket): Uint8Array;
                toProtoMsg(message: _10.MsgAdminUpdateBinaryOptionsMarket): _10.MsgAdminUpdateBinaryOptionsMarketProtoMsg;
            };
            MsgAdminUpdateBinaryOptionsMarketResponse: {
                typeUrl: string;
                encode(_: _10.MsgAdminUpdateBinaryOptionsMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgAdminUpdateBinaryOptionsMarketResponse;
                fromPartial(_: Partial<_10.MsgAdminUpdateBinaryOptionsMarketResponse>): _10.MsgAdminUpdateBinaryOptionsMarketResponse;
                fromAmino(_: _10.MsgAdminUpdateBinaryOptionsMarketResponseAmino): _10.MsgAdminUpdateBinaryOptionsMarketResponse;
                toAmino(_: _10.MsgAdminUpdateBinaryOptionsMarketResponse): _10.MsgAdminUpdateBinaryOptionsMarketResponseAmino;
                fromAminoMsg(object: _10.MsgAdminUpdateBinaryOptionsMarketResponseAminoMsg): _10.MsgAdminUpdateBinaryOptionsMarketResponse;
                fromProtoMsg(message: _10.MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg): _10.MsgAdminUpdateBinaryOptionsMarketResponse;
                toProto(message: _10.MsgAdminUpdateBinaryOptionsMarketResponse): Uint8Array;
                toProtoMsg(message: _10.MsgAdminUpdateBinaryOptionsMarketResponse): _10.MsgAdminUpdateBinaryOptionsMarketResponseProtoMsg;
            };
            AtomicMarketOrderFeeMultiplierScheduleProposal: {
                typeUrl: string;
                encode(message: _10.AtomicMarketOrderFeeMultiplierScheduleProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.AtomicMarketOrderFeeMultiplierScheduleProposal;
                fromPartial(object: Partial<_10.AtomicMarketOrderFeeMultiplierScheduleProposal>): _10.AtomicMarketOrderFeeMultiplierScheduleProposal;
                fromAmino(object: _10.AtomicMarketOrderFeeMultiplierScheduleProposalAmino): _10.AtomicMarketOrderFeeMultiplierScheduleProposal;
                toAmino(message: _10.AtomicMarketOrderFeeMultiplierScheduleProposal): _10.AtomicMarketOrderFeeMultiplierScheduleProposalAmino;
                fromAminoMsg(object: _10.AtomicMarketOrderFeeMultiplierScheduleProposalAminoMsg): _10.AtomicMarketOrderFeeMultiplierScheduleProposal;
                fromProtoMsg(message: _10.AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg): _10.AtomicMarketOrderFeeMultiplierScheduleProposal;
                toProto(message: _10.AtomicMarketOrderFeeMultiplierScheduleProposal): Uint8Array;
                toProtoMsg(message: _10.AtomicMarketOrderFeeMultiplierScheduleProposal): _10.AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg;
            };
            orderSideFromJSON(object: any): _9.OrderSide;
            orderSideToJSON(object: _9.OrderSide): string;
            cancellationStrategyFromJSON(object: any): _9.CancellationStrategy;
            cancellationStrategyToJSON(object: _9.CancellationStrategy): string;
            OrderSide: typeof _9.OrderSide;
            OrderSideSDKType: typeof _9.OrderSide;
            OrderSideAmino: typeof _9.OrderSide;
            CancellationStrategy: typeof _9.CancellationStrategy;
            CancellationStrategySDKType: typeof _9.CancellationStrategy;
            CancellationStrategyAmino: typeof _9.CancellationStrategy;
            Subaccount: {
                typeUrl: string;
                encode(message: _9.Subaccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Subaccount;
                fromPartial(object: Partial<_9.Subaccount>): _9.Subaccount;
                fromAmino(object: _9.SubaccountAmino): _9.Subaccount;
                toAmino(message: _9.Subaccount): _9.SubaccountAmino;
                fromAminoMsg(object: _9.SubaccountAminoMsg): _9.Subaccount;
                fromProtoMsg(message: _9.SubaccountProtoMsg): _9.Subaccount;
                toProto(message: _9.Subaccount): Uint8Array;
                toProtoMsg(message: _9.Subaccount): _9.SubaccountProtoMsg;
            };
            QuerySubaccountOrdersRequest: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountOrdersRequest;
                fromPartial(object: Partial<_9.QuerySubaccountOrdersRequest>): _9.QuerySubaccountOrdersRequest;
                fromAmino(object: _9.QuerySubaccountOrdersRequestAmino): _9.QuerySubaccountOrdersRequest;
                toAmino(message: _9.QuerySubaccountOrdersRequest): _9.QuerySubaccountOrdersRequestAmino;
                fromAminoMsg(object: _9.QuerySubaccountOrdersRequestAminoMsg): _9.QuerySubaccountOrdersRequest;
                fromProtoMsg(message: _9.QuerySubaccountOrdersRequestProtoMsg): _9.QuerySubaccountOrdersRequest;
                toProto(message: _9.QuerySubaccountOrdersRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountOrdersRequest): _9.QuerySubaccountOrdersRequestProtoMsg;
            };
            QuerySubaccountOrdersResponse: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountOrdersResponse;
                fromPartial(object: Partial<_9.QuerySubaccountOrdersResponse>): _9.QuerySubaccountOrdersResponse;
                fromAmino(object: _9.QuerySubaccountOrdersResponseAmino): _9.QuerySubaccountOrdersResponse;
                toAmino(message: _9.QuerySubaccountOrdersResponse): _9.QuerySubaccountOrdersResponseAmino;
                fromAminoMsg(object: _9.QuerySubaccountOrdersResponseAminoMsg): _9.QuerySubaccountOrdersResponse;
                fromProtoMsg(message: _9.QuerySubaccountOrdersResponseProtoMsg): _9.QuerySubaccountOrdersResponse;
                toProto(message: _9.QuerySubaccountOrdersResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountOrdersResponse): _9.QuerySubaccountOrdersResponseProtoMsg;
            };
            SubaccountOrderbookMetadataWithMarket: {
                typeUrl: string;
                encode(message: _9.SubaccountOrderbookMetadataWithMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.SubaccountOrderbookMetadataWithMarket;
                fromPartial(object: Partial<_9.SubaccountOrderbookMetadataWithMarket>): _9.SubaccountOrderbookMetadataWithMarket;
                fromAmino(object: _9.SubaccountOrderbookMetadataWithMarketAmino): _9.SubaccountOrderbookMetadataWithMarket;
                toAmino(message: _9.SubaccountOrderbookMetadataWithMarket): _9.SubaccountOrderbookMetadataWithMarketAmino;
                fromAminoMsg(object: _9.SubaccountOrderbookMetadataWithMarketAminoMsg): _9.SubaccountOrderbookMetadataWithMarket;
                fromProtoMsg(message: _9.SubaccountOrderbookMetadataWithMarketProtoMsg): _9.SubaccountOrderbookMetadataWithMarket;
                toProto(message: _9.SubaccountOrderbookMetadataWithMarket): Uint8Array;
                toProtoMsg(message: _9.SubaccountOrderbookMetadataWithMarket): _9.SubaccountOrderbookMetadataWithMarketProtoMsg;
            };
            QueryExchangeParamsRequest: {
                typeUrl: string;
                encode(_: _9.QueryExchangeParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryExchangeParamsRequest;
                fromPartial(_: Partial<_9.QueryExchangeParamsRequest>): _9.QueryExchangeParamsRequest;
                fromAmino(_: _9.QueryExchangeParamsRequestAmino): _9.QueryExchangeParamsRequest;
                toAmino(_: _9.QueryExchangeParamsRequest): _9.QueryExchangeParamsRequestAmino;
                fromAminoMsg(object: _9.QueryExchangeParamsRequestAminoMsg): _9.QueryExchangeParamsRequest;
                fromProtoMsg(message: _9.QueryExchangeParamsRequestProtoMsg): _9.QueryExchangeParamsRequest;
                toProto(message: _9.QueryExchangeParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryExchangeParamsRequest): _9.QueryExchangeParamsRequestProtoMsg;
            };
            QueryExchangeParamsResponse: {
                typeUrl: string;
                encode(message: _9.QueryExchangeParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryExchangeParamsResponse;
                fromPartial(object: Partial<_9.QueryExchangeParamsResponse>): _9.QueryExchangeParamsResponse;
                fromAmino(object: _9.QueryExchangeParamsResponseAmino): _9.QueryExchangeParamsResponse;
                toAmino(message: _9.QueryExchangeParamsResponse): _9.QueryExchangeParamsResponseAmino;
                fromAminoMsg(object: _9.QueryExchangeParamsResponseAminoMsg): _9.QueryExchangeParamsResponse;
                fromProtoMsg(message: _9.QueryExchangeParamsResponseProtoMsg): _9.QueryExchangeParamsResponse;
                toProto(message: _9.QueryExchangeParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryExchangeParamsResponse): _9.QueryExchangeParamsResponseProtoMsg;
            };
            QuerySubaccountDepositsRequest: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountDepositsRequest;
                fromPartial(object: Partial<_9.QuerySubaccountDepositsRequest>): _9.QuerySubaccountDepositsRequest;
                fromAmino(object: _9.QuerySubaccountDepositsRequestAmino): _9.QuerySubaccountDepositsRequest;
                toAmino(message: _9.QuerySubaccountDepositsRequest): _9.QuerySubaccountDepositsRequestAmino;
                fromAminoMsg(object: _9.QuerySubaccountDepositsRequestAminoMsg): _9.QuerySubaccountDepositsRequest;
                fromProtoMsg(message: _9.QuerySubaccountDepositsRequestProtoMsg): _9.QuerySubaccountDepositsRequest;
                toProto(message: _9.QuerySubaccountDepositsRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountDepositsRequest): _9.QuerySubaccountDepositsRequestProtoMsg;
            };
            QuerySubaccountDepositsResponse_DepositsEntry: {
                encode(message: _9.QuerySubaccountDepositsResponse_DepositsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountDepositsResponse_DepositsEntry;
                fromPartial(object: Partial<_9.QuerySubaccountDepositsResponse_DepositsEntry>): _9.QuerySubaccountDepositsResponse_DepositsEntry;
                fromAmino(object: _9.QuerySubaccountDepositsResponse_DepositsEntryAmino): _9.QuerySubaccountDepositsResponse_DepositsEntry;
                toAmino(message: _9.QuerySubaccountDepositsResponse_DepositsEntry): _9.QuerySubaccountDepositsResponse_DepositsEntryAmino;
                fromAminoMsg(object: _9.QuerySubaccountDepositsResponse_DepositsEntryAminoMsg): _9.QuerySubaccountDepositsResponse_DepositsEntry;
                fromProtoMsg(message: _9.QuerySubaccountDepositsResponse_DepositsEntryProtoMsg): _9.QuerySubaccountDepositsResponse_DepositsEntry;
                toProto(message: _9.QuerySubaccountDepositsResponse_DepositsEntry): Uint8Array;
            };
            QuerySubaccountDepositsResponse: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountDepositsResponse;
                fromPartial(object: Partial<_9.QuerySubaccountDepositsResponse>): _9.QuerySubaccountDepositsResponse;
                fromAmino(object: _9.QuerySubaccountDepositsResponseAmino): _9.QuerySubaccountDepositsResponse;
                toAmino(message: _9.QuerySubaccountDepositsResponse): _9.QuerySubaccountDepositsResponseAmino;
                fromAminoMsg(object: _9.QuerySubaccountDepositsResponseAminoMsg): _9.QuerySubaccountDepositsResponse;
                fromProtoMsg(message: _9.QuerySubaccountDepositsResponseProtoMsg): _9.QuerySubaccountDepositsResponse;
                toProto(message: _9.QuerySubaccountDepositsResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountDepositsResponse): _9.QuerySubaccountDepositsResponseProtoMsg;
            };
            QueryExchangeBalancesRequest: {
                typeUrl: string;
                encode(_: _9.QueryExchangeBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryExchangeBalancesRequest;
                fromPartial(_: Partial<_9.QueryExchangeBalancesRequest>): _9.QueryExchangeBalancesRequest;
                fromAmino(_: _9.QueryExchangeBalancesRequestAmino): _9.QueryExchangeBalancesRequest;
                toAmino(_: _9.QueryExchangeBalancesRequest): _9.QueryExchangeBalancesRequestAmino;
                fromAminoMsg(object: _9.QueryExchangeBalancesRequestAminoMsg): _9.QueryExchangeBalancesRequest;
                fromProtoMsg(message: _9.QueryExchangeBalancesRequestProtoMsg): _9.QueryExchangeBalancesRequest;
                toProto(message: _9.QueryExchangeBalancesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryExchangeBalancesRequest): _9.QueryExchangeBalancesRequestProtoMsg;
            };
            QueryExchangeBalancesResponse: {
                typeUrl: string;
                encode(message: _9.QueryExchangeBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryExchangeBalancesResponse;
                fromPartial(object: Partial<_9.QueryExchangeBalancesResponse>): _9.QueryExchangeBalancesResponse;
                fromAmino(object: _9.QueryExchangeBalancesResponseAmino): _9.QueryExchangeBalancesResponse;
                toAmino(message: _9.QueryExchangeBalancesResponse): _9.QueryExchangeBalancesResponseAmino;
                fromAminoMsg(object: _9.QueryExchangeBalancesResponseAminoMsg): _9.QueryExchangeBalancesResponse;
                fromProtoMsg(message: _9.QueryExchangeBalancesResponseProtoMsg): _9.QueryExchangeBalancesResponse;
                toProto(message: _9.QueryExchangeBalancesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryExchangeBalancesResponse): _9.QueryExchangeBalancesResponseProtoMsg;
            };
            QueryAggregateVolumeRequest: {
                typeUrl: string;
                encode(message: _9.QueryAggregateVolumeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateVolumeRequest;
                fromPartial(object: Partial<_9.QueryAggregateVolumeRequest>): _9.QueryAggregateVolumeRequest;
                fromAmino(object: _9.QueryAggregateVolumeRequestAmino): _9.QueryAggregateVolumeRequest;
                toAmino(message: _9.QueryAggregateVolumeRequest): _9.QueryAggregateVolumeRequestAmino;
                fromAminoMsg(object: _9.QueryAggregateVolumeRequestAminoMsg): _9.QueryAggregateVolumeRequest;
                fromProtoMsg(message: _9.QueryAggregateVolumeRequestProtoMsg): _9.QueryAggregateVolumeRequest;
                toProto(message: _9.QueryAggregateVolumeRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateVolumeRequest): _9.QueryAggregateVolumeRequestProtoMsg;
            };
            QueryAggregateVolumeResponse: {
                typeUrl: string;
                encode(message: _9.QueryAggregateVolumeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateVolumeResponse;
                fromPartial(object: Partial<_9.QueryAggregateVolumeResponse>): _9.QueryAggregateVolumeResponse;
                fromAmino(object: _9.QueryAggregateVolumeResponseAmino): _9.QueryAggregateVolumeResponse;
                toAmino(message: _9.QueryAggregateVolumeResponse): _9.QueryAggregateVolumeResponseAmino;
                fromAminoMsg(object: _9.QueryAggregateVolumeResponseAminoMsg): _9.QueryAggregateVolumeResponse;
                fromProtoMsg(message: _9.QueryAggregateVolumeResponseProtoMsg): _9.QueryAggregateVolumeResponse;
                toProto(message: _9.QueryAggregateVolumeResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateVolumeResponse): _9.QueryAggregateVolumeResponseProtoMsg;
            };
            QueryAggregateVolumesRequest: {
                typeUrl: string;
                encode(message: _9.QueryAggregateVolumesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateVolumesRequest;
                fromPartial(object: Partial<_9.QueryAggregateVolumesRequest>): _9.QueryAggregateVolumesRequest;
                fromAmino(object: _9.QueryAggregateVolumesRequestAmino): _9.QueryAggregateVolumesRequest;
                toAmino(message: _9.QueryAggregateVolumesRequest): _9.QueryAggregateVolumesRequestAmino;
                fromAminoMsg(object: _9.QueryAggregateVolumesRequestAminoMsg): _9.QueryAggregateVolumesRequest;
                fromProtoMsg(message: _9.QueryAggregateVolumesRequestProtoMsg): _9.QueryAggregateVolumesRequest;
                toProto(message: _9.QueryAggregateVolumesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateVolumesRequest): _9.QueryAggregateVolumesRequestProtoMsg;
            };
            QueryAggregateVolumesResponse: {
                typeUrl: string;
                encode(message: _9.QueryAggregateVolumesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateVolumesResponse;
                fromPartial(object: Partial<_9.QueryAggregateVolumesResponse>): _9.QueryAggregateVolumesResponse;
                fromAmino(object: _9.QueryAggregateVolumesResponseAmino): _9.QueryAggregateVolumesResponse;
                toAmino(message: _9.QueryAggregateVolumesResponse): _9.QueryAggregateVolumesResponseAmino;
                fromAminoMsg(object: _9.QueryAggregateVolumesResponseAminoMsg): _9.QueryAggregateVolumesResponse;
                fromProtoMsg(message: _9.QueryAggregateVolumesResponseProtoMsg): _9.QueryAggregateVolumesResponse;
                toProto(message: _9.QueryAggregateVolumesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateVolumesResponse): _9.QueryAggregateVolumesResponseProtoMsg;
            };
            QueryAggregateMarketVolumeRequest: {
                typeUrl: string;
                encode(message: _9.QueryAggregateMarketVolumeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateMarketVolumeRequest;
                fromPartial(object: Partial<_9.QueryAggregateMarketVolumeRequest>): _9.QueryAggregateMarketVolumeRequest;
                fromAmino(object: _9.QueryAggregateMarketVolumeRequestAmino): _9.QueryAggregateMarketVolumeRequest;
                toAmino(message: _9.QueryAggregateMarketVolumeRequest): _9.QueryAggregateMarketVolumeRequestAmino;
                fromAminoMsg(object: _9.QueryAggregateMarketVolumeRequestAminoMsg): _9.QueryAggregateMarketVolumeRequest;
                fromProtoMsg(message: _9.QueryAggregateMarketVolumeRequestProtoMsg): _9.QueryAggregateMarketVolumeRequest;
                toProto(message: _9.QueryAggregateMarketVolumeRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateMarketVolumeRequest): _9.QueryAggregateMarketVolumeRequestProtoMsg;
            };
            QueryAggregateMarketVolumeResponse: {
                typeUrl: string;
                encode(message: _9.QueryAggregateMarketVolumeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateMarketVolumeResponse;
                fromPartial(object: Partial<_9.QueryAggregateMarketVolumeResponse>): _9.QueryAggregateMarketVolumeResponse;
                fromAmino(object: _9.QueryAggregateMarketVolumeResponseAmino): _9.QueryAggregateMarketVolumeResponse;
                toAmino(message: _9.QueryAggregateMarketVolumeResponse): _9.QueryAggregateMarketVolumeResponseAmino;
                fromAminoMsg(object: _9.QueryAggregateMarketVolumeResponseAminoMsg): _9.QueryAggregateMarketVolumeResponse;
                fromProtoMsg(message: _9.QueryAggregateMarketVolumeResponseProtoMsg): _9.QueryAggregateMarketVolumeResponse;
                toProto(message: _9.QueryAggregateMarketVolumeResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateMarketVolumeResponse): _9.QueryAggregateMarketVolumeResponseProtoMsg;
            };
            QueryDenomDecimalRequest: {
                typeUrl: string;
                encode(message: _9.QueryDenomDecimalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDenomDecimalRequest;
                fromPartial(object: Partial<_9.QueryDenomDecimalRequest>): _9.QueryDenomDecimalRequest;
                fromAmino(object: _9.QueryDenomDecimalRequestAmino): _9.QueryDenomDecimalRequest;
                toAmino(message: _9.QueryDenomDecimalRequest): _9.QueryDenomDecimalRequestAmino;
                fromAminoMsg(object: _9.QueryDenomDecimalRequestAminoMsg): _9.QueryDenomDecimalRequest;
                fromProtoMsg(message: _9.QueryDenomDecimalRequestProtoMsg): _9.QueryDenomDecimalRequest;
                toProto(message: _9.QueryDenomDecimalRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDenomDecimalRequest): _9.QueryDenomDecimalRequestProtoMsg;
            };
            QueryDenomDecimalResponse: {
                typeUrl: string;
                encode(message: _9.QueryDenomDecimalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDenomDecimalResponse;
                fromPartial(object: Partial<_9.QueryDenomDecimalResponse>): _9.QueryDenomDecimalResponse;
                fromAmino(object: _9.QueryDenomDecimalResponseAmino): _9.QueryDenomDecimalResponse;
                toAmino(message: _9.QueryDenomDecimalResponse): _9.QueryDenomDecimalResponseAmino;
                fromAminoMsg(object: _9.QueryDenomDecimalResponseAminoMsg): _9.QueryDenomDecimalResponse;
                fromProtoMsg(message: _9.QueryDenomDecimalResponseProtoMsg): _9.QueryDenomDecimalResponse;
                toProto(message: _9.QueryDenomDecimalResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDenomDecimalResponse): _9.QueryDenomDecimalResponseProtoMsg;
            };
            QueryDenomDecimalsRequest: {
                typeUrl: string;
                encode(message: _9.QueryDenomDecimalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDenomDecimalsRequest;
                fromPartial(object: Partial<_9.QueryDenomDecimalsRequest>): _9.QueryDenomDecimalsRequest;
                fromAmino(object: _9.QueryDenomDecimalsRequestAmino): _9.QueryDenomDecimalsRequest;
                toAmino(message: _9.QueryDenomDecimalsRequest): _9.QueryDenomDecimalsRequestAmino;
                fromAminoMsg(object: _9.QueryDenomDecimalsRequestAminoMsg): _9.QueryDenomDecimalsRequest;
                fromProtoMsg(message: _9.QueryDenomDecimalsRequestProtoMsg): _9.QueryDenomDecimalsRequest;
                toProto(message: _9.QueryDenomDecimalsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDenomDecimalsRequest): _9.QueryDenomDecimalsRequestProtoMsg;
            };
            QueryDenomDecimalsResponse: {
                typeUrl: string;
                encode(message: _9.QueryDenomDecimalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDenomDecimalsResponse;
                fromPartial(object: Partial<_9.QueryDenomDecimalsResponse>): _9.QueryDenomDecimalsResponse;
                fromAmino(object: _9.QueryDenomDecimalsResponseAmino): _9.QueryDenomDecimalsResponse;
                toAmino(message: _9.QueryDenomDecimalsResponse): _9.QueryDenomDecimalsResponseAmino;
                fromAminoMsg(object: _9.QueryDenomDecimalsResponseAminoMsg): _9.QueryDenomDecimalsResponse;
                fromProtoMsg(message: _9.QueryDenomDecimalsResponseProtoMsg): _9.QueryDenomDecimalsResponse;
                toProto(message: _9.QueryDenomDecimalsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDenomDecimalsResponse): _9.QueryDenomDecimalsResponseProtoMsg;
            };
            QueryAggregateMarketVolumesRequest: {
                typeUrl: string;
                encode(message: _9.QueryAggregateMarketVolumesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateMarketVolumesRequest;
                fromPartial(object: Partial<_9.QueryAggregateMarketVolumesRequest>): _9.QueryAggregateMarketVolumesRequest;
                fromAmino(object: _9.QueryAggregateMarketVolumesRequestAmino): _9.QueryAggregateMarketVolumesRequest;
                toAmino(message: _9.QueryAggregateMarketVolumesRequest): _9.QueryAggregateMarketVolumesRequestAmino;
                fromAminoMsg(object: _9.QueryAggregateMarketVolumesRequestAminoMsg): _9.QueryAggregateMarketVolumesRequest;
                fromProtoMsg(message: _9.QueryAggregateMarketVolumesRequestProtoMsg): _9.QueryAggregateMarketVolumesRequest;
                toProto(message: _9.QueryAggregateMarketVolumesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateMarketVolumesRequest): _9.QueryAggregateMarketVolumesRequestProtoMsg;
            };
            QueryAggregateMarketVolumesResponse: {
                typeUrl: string;
                encode(message: _9.QueryAggregateMarketVolumesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAggregateMarketVolumesResponse;
                fromPartial(object: Partial<_9.QueryAggregateMarketVolumesResponse>): _9.QueryAggregateMarketVolumesResponse;
                fromAmino(object: _9.QueryAggregateMarketVolumesResponseAmino): _9.QueryAggregateMarketVolumesResponse;
                toAmino(message: _9.QueryAggregateMarketVolumesResponse): _9.QueryAggregateMarketVolumesResponseAmino;
                fromAminoMsg(object: _9.QueryAggregateMarketVolumesResponseAminoMsg): _9.QueryAggregateMarketVolumesResponse;
                fromProtoMsg(message: _9.QueryAggregateMarketVolumesResponseProtoMsg): _9.QueryAggregateMarketVolumesResponse;
                toProto(message: _9.QueryAggregateMarketVolumesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAggregateMarketVolumesResponse): _9.QueryAggregateMarketVolumesResponseProtoMsg;
            };
            QuerySubaccountDepositRequest: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountDepositRequest;
                fromPartial(object: Partial<_9.QuerySubaccountDepositRequest>): _9.QuerySubaccountDepositRequest;
                fromAmino(object: _9.QuerySubaccountDepositRequestAmino): _9.QuerySubaccountDepositRequest;
                toAmino(message: _9.QuerySubaccountDepositRequest): _9.QuerySubaccountDepositRequestAmino;
                fromAminoMsg(object: _9.QuerySubaccountDepositRequestAminoMsg): _9.QuerySubaccountDepositRequest;
                fromProtoMsg(message: _9.QuerySubaccountDepositRequestProtoMsg): _9.QuerySubaccountDepositRequest;
                toProto(message: _9.QuerySubaccountDepositRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountDepositRequest): _9.QuerySubaccountDepositRequestProtoMsg;
            };
            QuerySubaccountDepositResponse: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountDepositResponse;
                fromPartial(object: Partial<_9.QuerySubaccountDepositResponse>): _9.QuerySubaccountDepositResponse;
                fromAmino(object: _9.QuerySubaccountDepositResponseAmino): _9.QuerySubaccountDepositResponse;
                toAmino(message: _9.QuerySubaccountDepositResponse): _9.QuerySubaccountDepositResponseAmino;
                fromAminoMsg(object: _9.QuerySubaccountDepositResponseAminoMsg): _9.QuerySubaccountDepositResponse;
                fromProtoMsg(message: _9.QuerySubaccountDepositResponseProtoMsg): _9.QuerySubaccountDepositResponse;
                toProto(message: _9.QuerySubaccountDepositResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountDepositResponse): _9.QuerySubaccountDepositResponseProtoMsg;
            };
            QuerySpotMarketsRequest: {
                typeUrl: string;
                encode(message: _9.QuerySpotMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotMarketsRequest;
                fromPartial(object: Partial<_9.QuerySpotMarketsRequest>): _9.QuerySpotMarketsRequest;
                fromAmino(object: _9.QuerySpotMarketsRequestAmino): _9.QuerySpotMarketsRequest;
                toAmino(message: _9.QuerySpotMarketsRequest): _9.QuerySpotMarketsRequestAmino;
                fromAminoMsg(object: _9.QuerySpotMarketsRequestAminoMsg): _9.QuerySpotMarketsRequest;
                fromProtoMsg(message: _9.QuerySpotMarketsRequestProtoMsg): _9.QuerySpotMarketsRequest;
                toProto(message: _9.QuerySpotMarketsRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySpotMarketsRequest): _9.QuerySpotMarketsRequestProtoMsg;
            };
            QuerySpotMarketsResponse: {
                typeUrl: string;
                encode(message: _9.QuerySpotMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotMarketsResponse;
                fromPartial(object: Partial<_9.QuerySpotMarketsResponse>): _9.QuerySpotMarketsResponse;
                fromAmino(object: _9.QuerySpotMarketsResponseAmino): _9.QuerySpotMarketsResponse;
                toAmino(message: _9.QuerySpotMarketsResponse): _9.QuerySpotMarketsResponseAmino;
                fromAminoMsg(object: _9.QuerySpotMarketsResponseAminoMsg): _9.QuerySpotMarketsResponse;
                fromProtoMsg(message: _9.QuerySpotMarketsResponseProtoMsg): _9.QuerySpotMarketsResponse;
                toProto(message: _9.QuerySpotMarketsResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySpotMarketsResponse): _9.QuerySpotMarketsResponseProtoMsg;
            };
            QuerySpotMarketRequest: {
                typeUrl: string;
                encode(message: _9.QuerySpotMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotMarketRequest;
                fromPartial(object: Partial<_9.QuerySpotMarketRequest>): _9.QuerySpotMarketRequest;
                fromAmino(object: _9.QuerySpotMarketRequestAmino): _9.QuerySpotMarketRequest;
                toAmino(message: _9.QuerySpotMarketRequest): _9.QuerySpotMarketRequestAmino;
                fromAminoMsg(object: _9.QuerySpotMarketRequestAminoMsg): _9.QuerySpotMarketRequest;
                fromProtoMsg(message: _9.QuerySpotMarketRequestProtoMsg): _9.QuerySpotMarketRequest;
                toProto(message: _9.QuerySpotMarketRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySpotMarketRequest): _9.QuerySpotMarketRequestProtoMsg;
            };
            QuerySpotMarketResponse: {
                typeUrl: string;
                encode(message: _9.QuerySpotMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotMarketResponse;
                fromPartial(object: Partial<_9.QuerySpotMarketResponse>): _9.QuerySpotMarketResponse;
                fromAmino(object: _9.QuerySpotMarketResponseAmino): _9.QuerySpotMarketResponse;
                toAmino(message: _9.QuerySpotMarketResponse): _9.QuerySpotMarketResponseAmino;
                fromAminoMsg(object: _9.QuerySpotMarketResponseAminoMsg): _9.QuerySpotMarketResponse;
                fromProtoMsg(message: _9.QuerySpotMarketResponseProtoMsg): _9.QuerySpotMarketResponse;
                toProto(message: _9.QuerySpotMarketResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySpotMarketResponse): _9.QuerySpotMarketResponseProtoMsg;
            };
            QuerySpotOrderbookRequest: {
                typeUrl: string;
                encode(message: _9.QuerySpotOrderbookRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotOrderbookRequest;
                fromPartial(object: Partial<_9.QuerySpotOrderbookRequest>): _9.QuerySpotOrderbookRequest;
                fromAmino(object: _9.QuerySpotOrderbookRequestAmino): _9.QuerySpotOrderbookRequest;
                toAmino(message: _9.QuerySpotOrderbookRequest): _9.QuerySpotOrderbookRequestAmino;
                fromAminoMsg(object: _9.QuerySpotOrderbookRequestAminoMsg): _9.QuerySpotOrderbookRequest;
                fromProtoMsg(message: _9.QuerySpotOrderbookRequestProtoMsg): _9.QuerySpotOrderbookRequest;
                toProto(message: _9.QuerySpotOrderbookRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySpotOrderbookRequest): _9.QuerySpotOrderbookRequestProtoMsg;
            };
            QuerySpotOrderbookResponse: {
                typeUrl: string;
                encode(message: _9.QuerySpotOrderbookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotOrderbookResponse;
                fromPartial(object: Partial<_9.QuerySpotOrderbookResponse>): _9.QuerySpotOrderbookResponse;
                fromAmino(object: _9.QuerySpotOrderbookResponseAmino): _9.QuerySpotOrderbookResponse;
                toAmino(message: _9.QuerySpotOrderbookResponse): _9.QuerySpotOrderbookResponseAmino;
                fromAminoMsg(object: _9.QuerySpotOrderbookResponseAminoMsg): _9.QuerySpotOrderbookResponse;
                fromProtoMsg(message: _9.QuerySpotOrderbookResponseProtoMsg): _9.QuerySpotOrderbookResponse;
                toProto(message: _9.QuerySpotOrderbookResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySpotOrderbookResponse): _9.QuerySpotOrderbookResponseProtoMsg;
            };
            FullSpotMarket: {
                typeUrl: string;
                encode(message: _9.FullSpotMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.FullSpotMarket;
                fromPartial(object: Partial<_9.FullSpotMarket>): _9.FullSpotMarket;
                fromAmino(object: _9.FullSpotMarketAmino): _9.FullSpotMarket;
                toAmino(message: _9.FullSpotMarket): _9.FullSpotMarketAmino;
                fromAminoMsg(object: _9.FullSpotMarketAminoMsg): _9.FullSpotMarket;
                fromProtoMsg(message: _9.FullSpotMarketProtoMsg): _9.FullSpotMarket;
                toProto(message: _9.FullSpotMarket): Uint8Array;
                toProtoMsg(message: _9.FullSpotMarket): _9.FullSpotMarketProtoMsg;
            };
            QueryFullSpotMarketsRequest: {
                typeUrl: string;
                encode(message: _9.QueryFullSpotMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFullSpotMarketsRequest;
                fromPartial(object: Partial<_9.QueryFullSpotMarketsRequest>): _9.QueryFullSpotMarketsRequest;
                fromAmino(object: _9.QueryFullSpotMarketsRequestAmino): _9.QueryFullSpotMarketsRequest;
                toAmino(message: _9.QueryFullSpotMarketsRequest): _9.QueryFullSpotMarketsRequestAmino;
                fromAminoMsg(object: _9.QueryFullSpotMarketsRequestAminoMsg): _9.QueryFullSpotMarketsRequest;
                fromProtoMsg(message: _9.QueryFullSpotMarketsRequestProtoMsg): _9.QueryFullSpotMarketsRequest;
                toProto(message: _9.QueryFullSpotMarketsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryFullSpotMarketsRequest): _9.QueryFullSpotMarketsRequestProtoMsg;
            };
            QueryFullSpotMarketsResponse: {
                typeUrl: string;
                encode(message: _9.QueryFullSpotMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFullSpotMarketsResponse;
                fromPartial(object: Partial<_9.QueryFullSpotMarketsResponse>): _9.QueryFullSpotMarketsResponse;
                fromAmino(object: _9.QueryFullSpotMarketsResponseAmino): _9.QueryFullSpotMarketsResponse;
                toAmino(message: _9.QueryFullSpotMarketsResponse): _9.QueryFullSpotMarketsResponseAmino;
                fromAminoMsg(object: _9.QueryFullSpotMarketsResponseAminoMsg): _9.QueryFullSpotMarketsResponse;
                fromProtoMsg(message: _9.QueryFullSpotMarketsResponseProtoMsg): _9.QueryFullSpotMarketsResponse;
                toProto(message: _9.QueryFullSpotMarketsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryFullSpotMarketsResponse): _9.QueryFullSpotMarketsResponseProtoMsg;
            };
            QueryFullSpotMarketRequest: {
                typeUrl: string;
                encode(message: _9.QueryFullSpotMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFullSpotMarketRequest;
                fromPartial(object: Partial<_9.QueryFullSpotMarketRequest>): _9.QueryFullSpotMarketRequest;
                fromAmino(object: _9.QueryFullSpotMarketRequestAmino): _9.QueryFullSpotMarketRequest;
                toAmino(message: _9.QueryFullSpotMarketRequest): _9.QueryFullSpotMarketRequestAmino;
                fromAminoMsg(object: _9.QueryFullSpotMarketRequestAminoMsg): _9.QueryFullSpotMarketRequest;
                fromProtoMsg(message: _9.QueryFullSpotMarketRequestProtoMsg): _9.QueryFullSpotMarketRequest;
                toProto(message: _9.QueryFullSpotMarketRequest): Uint8Array;
                toProtoMsg(message: _9.QueryFullSpotMarketRequest): _9.QueryFullSpotMarketRequestProtoMsg;
            };
            QueryFullSpotMarketResponse: {
                typeUrl: string;
                encode(message: _9.QueryFullSpotMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFullSpotMarketResponse;
                fromPartial(object: Partial<_9.QueryFullSpotMarketResponse>): _9.QueryFullSpotMarketResponse;
                fromAmino(object: _9.QueryFullSpotMarketResponseAmino): _9.QueryFullSpotMarketResponse;
                toAmino(message: _9.QueryFullSpotMarketResponse): _9.QueryFullSpotMarketResponseAmino;
                fromAminoMsg(object: _9.QueryFullSpotMarketResponseAminoMsg): _9.QueryFullSpotMarketResponse;
                fromProtoMsg(message: _9.QueryFullSpotMarketResponseProtoMsg): _9.QueryFullSpotMarketResponse;
                toProto(message: _9.QueryFullSpotMarketResponse): Uint8Array;
                toProtoMsg(message: _9.QueryFullSpotMarketResponse): _9.QueryFullSpotMarketResponseProtoMsg;
            };
            QuerySpotOrdersByHashesRequest: {
                typeUrl: string;
                encode(message: _9.QuerySpotOrdersByHashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotOrdersByHashesRequest;
                fromPartial(object: Partial<_9.QuerySpotOrdersByHashesRequest>): _9.QuerySpotOrdersByHashesRequest;
                fromAmino(object: _9.QuerySpotOrdersByHashesRequestAmino): _9.QuerySpotOrdersByHashesRequest;
                toAmino(message: _9.QuerySpotOrdersByHashesRequest): _9.QuerySpotOrdersByHashesRequestAmino;
                fromAminoMsg(object: _9.QuerySpotOrdersByHashesRequestAminoMsg): _9.QuerySpotOrdersByHashesRequest;
                fromProtoMsg(message: _9.QuerySpotOrdersByHashesRequestProtoMsg): _9.QuerySpotOrdersByHashesRequest;
                toProto(message: _9.QuerySpotOrdersByHashesRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySpotOrdersByHashesRequest): _9.QuerySpotOrdersByHashesRequestProtoMsg;
            };
            QuerySpotOrdersByHashesResponse: {
                typeUrl: string;
                encode(message: _9.QuerySpotOrdersByHashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotOrdersByHashesResponse;
                fromPartial(object: Partial<_9.QuerySpotOrdersByHashesResponse>): _9.QuerySpotOrdersByHashesResponse;
                fromAmino(object: _9.QuerySpotOrdersByHashesResponseAmino): _9.QuerySpotOrdersByHashesResponse;
                toAmino(message: _9.QuerySpotOrdersByHashesResponse): _9.QuerySpotOrdersByHashesResponseAmino;
                fromAminoMsg(object: _9.QuerySpotOrdersByHashesResponseAminoMsg): _9.QuerySpotOrdersByHashesResponse;
                fromProtoMsg(message: _9.QuerySpotOrdersByHashesResponseProtoMsg): _9.QuerySpotOrdersByHashesResponse;
                toProto(message: _9.QuerySpotOrdersByHashesResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySpotOrdersByHashesResponse): _9.QuerySpotOrdersByHashesResponseProtoMsg;
            };
            QueryTraderSpotOrdersRequest: {
                typeUrl: string;
                encode(message: _9.QueryTraderSpotOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTraderSpotOrdersRequest;
                fromPartial(object: Partial<_9.QueryTraderSpotOrdersRequest>): _9.QueryTraderSpotOrdersRequest;
                fromAmino(object: _9.QueryTraderSpotOrdersRequestAmino): _9.QueryTraderSpotOrdersRequest;
                toAmino(message: _9.QueryTraderSpotOrdersRequest): _9.QueryTraderSpotOrdersRequestAmino;
                fromAminoMsg(object: _9.QueryTraderSpotOrdersRequestAminoMsg): _9.QueryTraderSpotOrdersRequest;
                fromProtoMsg(message: _9.QueryTraderSpotOrdersRequestProtoMsg): _9.QueryTraderSpotOrdersRequest;
                toProto(message: _9.QueryTraderSpotOrdersRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTraderSpotOrdersRequest): _9.QueryTraderSpotOrdersRequestProtoMsg;
            };
            QueryAccountAddressSpotOrdersRequest: {
                typeUrl: string;
                encode(message: _9.QueryAccountAddressSpotOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAccountAddressSpotOrdersRequest;
                fromPartial(object: Partial<_9.QueryAccountAddressSpotOrdersRequest>): _9.QueryAccountAddressSpotOrdersRequest;
                fromAmino(object: _9.QueryAccountAddressSpotOrdersRequestAmino): _9.QueryAccountAddressSpotOrdersRequest;
                toAmino(message: _9.QueryAccountAddressSpotOrdersRequest): _9.QueryAccountAddressSpotOrdersRequestAmino;
                fromAminoMsg(object: _9.QueryAccountAddressSpotOrdersRequestAminoMsg): _9.QueryAccountAddressSpotOrdersRequest;
                fromProtoMsg(message: _9.QueryAccountAddressSpotOrdersRequestProtoMsg): _9.QueryAccountAddressSpotOrdersRequest;
                toProto(message: _9.QueryAccountAddressSpotOrdersRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountAddressSpotOrdersRequest): _9.QueryAccountAddressSpotOrdersRequestProtoMsg;
            };
            TrimmedSpotLimitOrder: {
                typeUrl: string;
                encode(message: _9.TrimmedSpotLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.TrimmedSpotLimitOrder;
                fromPartial(object: Partial<_9.TrimmedSpotLimitOrder>): _9.TrimmedSpotLimitOrder;
                fromAmino(object: _9.TrimmedSpotLimitOrderAmino): _9.TrimmedSpotLimitOrder;
                toAmino(message: _9.TrimmedSpotLimitOrder): _9.TrimmedSpotLimitOrderAmino;
                fromAminoMsg(object: _9.TrimmedSpotLimitOrderAminoMsg): _9.TrimmedSpotLimitOrder;
                fromProtoMsg(message: _9.TrimmedSpotLimitOrderProtoMsg): _9.TrimmedSpotLimitOrder;
                toProto(message: _9.TrimmedSpotLimitOrder): Uint8Array;
                toProtoMsg(message: _9.TrimmedSpotLimitOrder): _9.TrimmedSpotLimitOrderProtoMsg;
            };
            QueryTraderSpotOrdersResponse: {
                typeUrl: string;
                encode(message: _9.QueryTraderSpotOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTraderSpotOrdersResponse;
                fromPartial(object: Partial<_9.QueryTraderSpotOrdersResponse>): _9.QueryTraderSpotOrdersResponse;
                fromAmino(object: _9.QueryTraderSpotOrdersResponseAmino): _9.QueryTraderSpotOrdersResponse;
                toAmino(message: _9.QueryTraderSpotOrdersResponse): _9.QueryTraderSpotOrdersResponseAmino;
                fromAminoMsg(object: _9.QueryTraderSpotOrdersResponseAminoMsg): _9.QueryTraderSpotOrdersResponse;
                fromProtoMsg(message: _9.QueryTraderSpotOrdersResponseProtoMsg): _9.QueryTraderSpotOrdersResponse;
                toProto(message: _9.QueryTraderSpotOrdersResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTraderSpotOrdersResponse): _9.QueryTraderSpotOrdersResponseProtoMsg;
            };
            QueryAccountAddressSpotOrdersResponse: {
                typeUrl: string;
                encode(message: _9.QueryAccountAddressSpotOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAccountAddressSpotOrdersResponse;
                fromPartial(object: Partial<_9.QueryAccountAddressSpotOrdersResponse>): _9.QueryAccountAddressSpotOrdersResponse;
                fromAmino(object: _9.QueryAccountAddressSpotOrdersResponseAmino): _9.QueryAccountAddressSpotOrdersResponse;
                toAmino(message: _9.QueryAccountAddressSpotOrdersResponse): _9.QueryAccountAddressSpotOrdersResponseAmino;
                fromAminoMsg(object: _9.QueryAccountAddressSpotOrdersResponseAminoMsg): _9.QueryAccountAddressSpotOrdersResponse;
                fromProtoMsg(message: _9.QueryAccountAddressSpotOrdersResponseProtoMsg): _9.QueryAccountAddressSpotOrdersResponse;
                toProto(message: _9.QueryAccountAddressSpotOrdersResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountAddressSpotOrdersResponse): _9.QueryAccountAddressSpotOrdersResponseProtoMsg;
            };
            QuerySpotMidPriceAndTOBRequest: {
                typeUrl: string;
                encode(message: _9.QuerySpotMidPriceAndTOBRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotMidPriceAndTOBRequest;
                fromPartial(object: Partial<_9.QuerySpotMidPriceAndTOBRequest>): _9.QuerySpotMidPriceAndTOBRequest;
                fromAmino(object: _9.QuerySpotMidPriceAndTOBRequestAmino): _9.QuerySpotMidPriceAndTOBRequest;
                toAmino(message: _9.QuerySpotMidPriceAndTOBRequest): _9.QuerySpotMidPriceAndTOBRequestAmino;
                fromAminoMsg(object: _9.QuerySpotMidPriceAndTOBRequestAminoMsg): _9.QuerySpotMidPriceAndTOBRequest;
                fromProtoMsg(message: _9.QuerySpotMidPriceAndTOBRequestProtoMsg): _9.QuerySpotMidPriceAndTOBRequest;
                toProto(message: _9.QuerySpotMidPriceAndTOBRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySpotMidPriceAndTOBRequest): _9.QuerySpotMidPriceAndTOBRequestProtoMsg;
            };
            QuerySpotMidPriceAndTOBResponse: {
                typeUrl: string;
                encode(message: _9.QuerySpotMidPriceAndTOBResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySpotMidPriceAndTOBResponse;
                fromPartial(object: Partial<_9.QuerySpotMidPriceAndTOBResponse>): _9.QuerySpotMidPriceAndTOBResponse;
                fromAmino(object: _9.QuerySpotMidPriceAndTOBResponseAmino): _9.QuerySpotMidPriceAndTOBResponse;
                toAmino(message: _9.QuerySpotMidPriceAndTOBResponse): _9.QuerySpotMidPriceAndTOBResponseAmino;
                fromAminoMsg(object: _9.QuerySpotMidPriceAndTOBResponseAminoMsg): _9.QuerySpotMidPriceAndTOBResponse;
                fromProtoMsg(message: _9.QuerySpotMidPriceAndTOBResponseProtoMsg): _9.QuerySpotMidPriceAndTOBResponse;
                toProto(message: _9.QuerySpotMidPriceAndTOBResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySpotMidPriceAndTOBResponse): _9.QuerySpotMidPriceAndTOBResponseProtoMsg;
            };
            QueryDerivativeMidPriceAndTOBRequest: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeMidPriceAndTOBRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeMidPriceAndTOBRequest;
                fromPartial(object: Partial<_9.QueryDerivativeMidPriceAndTOBRequest>): _9.QueryDerivativeMidPriceAndTOBRequest;
                fromAmino(object: _9.QueryDerivativeMidPriceAndTOBRequestAmino): _9.QueryDerivativeMidPriceAndTOBRequest;
                toAmino(message: _9.QueryDerivativeMidPriceAndTOBRequest): _9.QueryDerivativeMidPriceAndTOBRequestAmino;
                fromAminoMsg(object: _9.QueryDerivativeMidPriceAndTOBRequestAminoMsg): _9.QueryDerivativeMidPriceAndTOBRequest;
                fromProtoMsg(message: _9.QueryDerivativeMidPriceAndTOBRequestProtoMsg): _9.QueryDerivativeMidPriceAndTOBRequest;
                toProto(message: _9.QueryDerivativeMidPriceAndTOBRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeMidPriceAndTOBRequest): _9.QueryDerivativeMidPriceAndTOBRequestProtoMsg;
            };
            QueryDerivativeMidPriceAndTOBResponse: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeMidPriceAndTOBResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeMidPriceAndTOBResponse;
                fromPartial(object: Partial<_9.QueryDerivativeMidPriceAndTOBResponse>): _9.QueryDerivativeMidPriceAndTOBResponse;
                fromAmino(object: _9.QueryDerivativeMidPriceAndTOBResponseAmino): _9.QueryDerivativeMidPriceAndTOBResponse;
                toAmino(message: _9.QueryDerivativeMidPriceAndTOBResponse): _9.QueryDerivativeMidPriceAndTOBResponseAmino;
                fromAminoMsg(object: _9.QueryDerivativeMidPriceAndTOBResponseAminoMsg): _9.QueryDerivativeMidPriceAndTOBResponse;
                fromProtoMsg(message: _9.QueryDerivativeMidPriceAndTOBResponseProtoMsg): _9.QueryDerivativeMidPriceAndTOBResponse;
                toProto(message: _9.QueryDerivativeMidPriceAndTOBResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeMidPriceAndTOBResponse): _9.QueryDerivativeMidPriceAndTOBResponseProtoMsg;
            };
            QueryDerivativeOrderbookRequest: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeOrderbookRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeOrderbookRequest;
                fromPartial(object: Partial<_9.QueryDerivativeOrderbookRequest>): _9.QueryDerivativeOrderbookRequest;
                fromAmino(object: _9.QueryDerivativeOrderbookRequestAmino): _9.QueryDerivativeOrderbookRequest;
                toAmino(message: _9.QueryDerivativeOrderbookRequest): _9.QueryDerivativeOrderbookRequestAmino;
                fromAminoMsg(object: _9.QueryDerivativeOrderbookRequestAminoMsg): _9.QueryDerivativeOrderbookRequest;
                fromProtoMsg(message: _9.QueryDerivativeOrderbookRequestProtoMsg): _9.QueryDerivativeOrderbookRequest;
                toProto(message: _9.QueryDerivativeOrderbookRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeOrderbookRequest): _9.QueryDerivativeOrderbookRequestProtoMsg;
            };
            QueryDerivativeOrderbookResponse: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeOrderbookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeOrderbookResponse;
                fromPartial(object: Partial<_9.QueryDerivativeOrderbookResponse>): _9.QueryDerivativeOrderbookResponse;
                fromAmino(object: _9.QueryDerivativeOrderbookResponseAmino): _9.QueryDerivativeOrderbookResponse;
                toAmino(message: _9.QueryDerivativeOrderbookResponse): _9.QueryDerivativeOrderbookResponseAmino;
                fromAminoMsg(object: _9.QueryDerivativeOrderbookResponseAminoMsg): _9.QueryDerivativeOrderbookResponse;
                fromProtoMsg(message: _9.QueryDerivativeOrderbookResponseProtoMsg): _9.QueryDerivativeOrderbookResponse;
                toProto(message: _9.QueryDerivativeOrderbookResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeOrderbookResponse): _9.QueryDerivativeOrderbookResponseProtoMsg;
            };
            QueryTraderSpotOrdersToCancelUpToAmountRequest: {
                typeUrl: string;
                encode(message: _9.QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                fromPartial(object: Partial<_9.QueryTraderSpotOrdersToCancelUpToAmountRequest>): _9.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                fromAmino(object: _9.QueryTraderSpotOrdersToCancelUpToAmountRequestAmino): _9.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                toAmino(message: _9.QueryTraderSpotOrdersToCancelUpToAmountRequest): _9.QueryTraderSpotOrdersToCancelUpToAmountRequestAmino;
                fromAminoMsg(object: _9.QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg): _9.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                fromProtoMsg(message: _9.QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg): _9.QueryTraderSpotOrdersToCancelUpToAmountRequest;
                toProto(message: _9.QueryTraderSpotOrdersToCancelUpToAmountRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTraderSpotOrdersToCancelUpToAmountRequest): _9.QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg;
            };
            QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
                typeUrl: string;
                encode(message: _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                fromPartial(object: Partial<_9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                fromAmino(object: _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                toAmino(message: _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino;
                fromAminoMsg(object: _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                fromProtoMsg(message: _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
                toProto(message: _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequest): _9.QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg;
            };
            QueryTraderDerivativeOrdersRequest: {
                typeUrl: string;
                encode(message: _9.QueryTraderDerivativeOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTraderDerivativeOrdersRequest;
                fromPartial(object: Partial<_9.QueryTraderDerivativeOrdersRequest>): _9.QueryTraderDerivativeOrdersRequest;
                fromAmino(object: _9.QueryTraderDerivativeOrdersRequestAmino): _9.QueryTraderDerivativeOrdersRequest;
                toAmino(message: _9.QueryTraderDerivativeOrdersRequest): _9.QueryTraderDerivativeOrdersRequestAmino;
                fromAminoMsg(object: _9.QueryTraderDerivativeOrdersRequestAminoMsg): _9.QueryTraderDerivativeOrdersRequest;
                fromProtoMsg(message: _9.QueryTraderDerivativeOrdersRequestProtoMsg): _9.QueryTraderDerivativeOrdersRequest;
                toProto(message: _9.QueryTraderDerivativeOrdersRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTraderDerivativeOrdersRequest): _9.QueryTraderDerivativeOrdersRequestProtoMsg;
            };
            QueryAccountAddressDerivativeOrdersRequest: {
                typeUrl: string;
                encode(message: _9.QueryAccountAddressDerivativeOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAccountAddressDerivativeOrdersRequest;
                fromPartial(object: Partial<_9.QueryAccountAddressDerivativeOrdersRequest>): _9.QueryAccountAddressDerivativeOrdersRequest;
                fromAmino(object: _9.QueryAccountAddressDerivativeOrdersRequestAmino): _9.QueryAccountAddressDerivativeOrdersRequest;
                toAmino(message: _9.QueryAccountAddressDerivativeOrdersRequest): _9.QueryAccountAddressDerivativeOrdersRequestAmino;
                fromAminoMsg(object: _9.QueryAccountAddressDerivativeOrdersRequestAminoMsg): _9.QueryAccountAddressDerivativeOrdersRequest;
                fromProtoMsg(message: _9.QueryAccountAddressDerivativeOrdersRequestProtoMsg): _9.QueryAccountAddressDerivativeOrdersRequest;
                toProto(message: _9.QueryAccountAddressDerivativeOrdersRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAccountAddressDerivativeOrdersRequest): _9.QueryAccountAddressDerivativeOrdersRequestProtoMsg;
            };
            TrimmedDerivativeLimitOrder: {
                typeUrl: string;
                encode(message: _9.TrimmedDerivativeLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.TrimmedDerivativeLimitOrder;
                fromPartial(object: Partial<_9.TrimmedDerivativeLimitOrder>): _9.TrimmedDerivativeLimitOrder;
                fromAmino(object: _9.TrimmedDerivativeLimitOrderAmino): _9.TrimmedDerivativeLimitOrder;
                toAmino(message: _9.TrimmedDerivativeLimitOrder): _9.TrimmedDerivativeLimitOrderAmino;
                fromAminoMsg(object: _9.TrimmedDerivativeLimitOrderAminoMsg): _9.TrimmedDerivativeLimitOrder;
                fromProtoMsg(message: _9.TrimmedDerivativeLimitOrderProtoMsg): _9.TrimmedDerivativeLimitOrder;
                toProto(message: _9.TrimmedDerivativeLimitOrder): Uint8Array;
                toProtoMsg(message: _9.TrimmedDerivativeLimitOrder): _9.TrimmedDerivativeLimitOrderProtoMsg;
            };
            QueryTraderDerivativeOrdersResponse: {
                typeUrl: string;
                encode(message: _9.QueryTraderDerivativeOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTraderDerivativeOrdersResponse;
                fromPartial(object: Partial<_9.QueryTraderDerivativeOrdersResponse>): _9.QueryTraderDerivativeOrdersResponse;
                fromAmino(object: _9.QueryTraderDerivativeOrdersResponseAmino): _9.QueryTraderDerivativeOrdersResponse;
                toAmino(message: _9.QueryTraderDerivativeOrdersResponse): _9.QueryTraderDerivativeOrdersResponseAmino;
                fromAminoMsg(object: _9.QueryTraderDerivativeOrdersResponseAminoMsg): _9.QueryTraderDerivativeOrdersResponse;
                fromProtoMsg(message: _9.QueryTraderDerivativeOrdersResponseProtoMsg): _9.QueryTraderDerivativeOrdersResponse;
                toProto(message: _9.QueryTraderDerivativeOrdersResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTraderDerivativeOrdersResponse): _9.QueryTraderDerivativeOrdersResponseProtoMsg;
            };
            QueryAccountAddressDerivativeOrdersResponse: {
                typeUrl: string;
                encode(message: _9.QueryAccountAddressDerivativeOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryAccountAddressDerivativeOrdersResponse;
                fromPartial(object: Partial<_9.QueryAccountAddressDerivativeOrdersResponse>): _9.QueryAccountAddressDerivativeOrdersResponse;
                fromAmino(object: _9.QueryAccountAddressDerivativeOrdersResponseAmino): _9.QueryAccountAddressDerivativeOrdersResponse;
                toAmino(message: _9.QueryAccountAddressDerivativeOrdersResponse): _9.QueryAccountAddressDerivativeOrdersResponseAmino;
                fromAminoMsg(object: _9.QueryAccountAddressDerivativeOrdersResponseAminoMsg): _9.QueryAccountAddressDerivativeOrdersResponse;
                fromProtoMsg(message: _9.QueryAccountAddressDerivativeOrdersResponseProtoMsg): _9.QueryAccountAddressDerivativeOrdersResponse;
                toProto(message: _9.QueryAccountAddressDerivativeOrdersResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAccountAddressDerivativeOrdersResponse): _9.QueryAccountAddressDerivativeOrdersResponseProtoMsg;
            };
            QueryDerivativeOrdersByHashesRequest: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeOrdersByHashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeOrdersByHashesRequest;
                fromPartial(object: Partial<_9.QueryDerivativeOrdersByHashesRequest>): _9.QueryDerivativeOrdersByHashesRequest;
                fromAmino(object: _9.QueryDerivativeOrdersByHashesRequestAmino): _9.QueryDerivativeOrdersByHashesRequest;
                toAmino(message: _9.QueryDerivativeOrdersByHashesRequest): _9.QueryDerivativeOrdersByHashesRequestAmino;
                fromAminoMsg(object: _9.QueryDerivativeOrdersByHashesRequestAminoMsg): _9.QueryDerivativeOrdersByHashesRequest;
                fromProtoMsg(message: _9.QueryDerivativeOrdersByHashesRequestProtoMsg): _9.QueryDerivativeOrdersByHashesRequest;
                toProto(message: _9.QueryDerivativeOrdersByHashesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeOrdersByHashesRequest): _9.QueryDerivativeOrdersByHashesRequestProtoMsg;
            };
            QueryDerivativeOrdersByHashesResponse: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeOrdersByHashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeOrdersByHashesResponse;
                fromPartial(object: Partial<_9.QueryDerivativeOrdersByHashesResponse>): _9.QueryDerivativeOrdersByHashesResponse;
                fromAmino(object: _9.QueryDerivativeOrdersByHashesResponseAmino): _9.QueryDerivativeOrdersByHashesResponse;
                toAmino(message: _9.QueryDerivativeOrdersByHashesResponse): _9.QueryDerivativeOrdersByHashesResponseAmino;
                fromAminoMsg(object: _9.QueryDerivativeOrdersByHashesResponseAminoMsg): _9.QueryDerivativeOrdersByHashesResponse;
                fromProtoMsg(message: _9.QueryDerivativeOrdersByHashesResponseProtoMsg): _9.QueryDerivativeOrdersByHashesResponse;
                toProto(message: _9.QueryDerivativeOrdersByHashesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeOrdersByHashesResponse): _9.QueryDerivativeOrdersByHashesResponseProtoMsg;
            };
            QueryDerivativeMarketsRequest: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeMarketsRequest;
                fromPartial(object: Partial<_9.QueryDerivativeMarketsRequest>): _9.QueryDerivativeMarketsRequest;
                fromAmino(object: _9.QueryDerivativeMarketsRequestAmino): _9.QueryDerivativeMarketsRequest;
                toAmino(message: _9.QueryDerivativeMarketsRequest): _9.QueryDerivativeMarketsRequestAmino;
                fromAminoMsg(object: _9.QueryDerivativeMarketsRequestAminoMsg): _9.QueryDerivativeMarketsRequest;
                fromProtoMsg(message: _9.QueryDerivativeMarketsRequestProtoMsg): _9.QueryDerivativeMarketsRequest;
                toProto(message: _9.QueryDerivativeMarketsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeMarketsRequest): _9.QueryDerivativeMarketsRequestProtoMsg;
            };
            PriceLevel: {
                typeUrl: string;
                encode(message: _9.PriceLevel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.PriceLevel;
                fromPartial(object: Partial<_9.PriceLevel>): _9.PriceLevel;
                fromAmino(object: _9.PriceLevelAmino): _9.PriceLevel;
                toAmino(message: _9.PriceLevel): _9.PriceLevelAmino;
                fromAminoMsg(object: _9.PriceLevelAminoMsg): _9.PriceLevel;
                fromProtoMsg(message: _9.PriceLevelProtoMsg): _9.PriceLevel;
                toProto(message: _9.PriceLevel): Uint8Array;
                toProtoMsg(message: _9.PriceLevel): _9.PriceLevelProtoMsg;
            };
            PerpetualMarketState: {
                typeUrl: string;
                encode(message: _9.PerpetualMarketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.PerpetualMarketState;
                fromPartial(object: Partial<_9.PerpetualMarketState>): _9.PerpetualMarketState;
                fromAmino(object: _9.PerpetualMarketStateAmino): _9.PerpetualMarketState;
                toAmino(message: _9.PerpetualMarketState): _9.PerpetualMarketStateAmino;
                fromAminoMsg(object: _9.PerpetualMarketStateAminoMsg): _9.PerpetualMarketState;
                fromProtoMsg(message: _9.PerpetualMarketStateProtoMsg): _9.PerpetualMarketState;
                toProto(message: _9.PerpetualMarketState): Uint8Array;
                toProtoMsg(message: _9.PerpetualMarketState): _9.PerpetualMarketStateProtoMsg;
            };
            FullDerivativeMarket: {
                typeUrl: string;
                encode(message: _9.FullDerivativeMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.FullDerivativeMarket;
                fromPartial(object: Partial<_9.FullDerivativeMarket>): _9.FullDerivativeMarket;
                fromAmino(object: _9.FullDerivativeMarketAmino): _9.FullDerivativeMarket;
                toAmino(message: _9.FullDerivativeMarket): _9.FullDerivativeMarketAmino;
                fromAminoMsg(object: _9.FullDerivativeMarketAminoMsg): _9.FullDerivativeMarket;
                fromProtoMsg(message: _9.FullDerivativeMarketProtoMsg): _9.FullDerivativeMarket;
                toProto(message: _9.FullDerivativeMarket): Uint8Array;
                toProtoMsg(message: _9.FullDerivativeMarket): _9.FullDerivativeMarketProtoMsg;
            };
            QueryDerivativeMarketsResponse: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeMarketsResponse;
                fromPartial(object: Partial<_9.QueryDerivativeMarketsResponse>): _9.QueryDerivativeMarketsResponse;
                fromAmino(object: _9.QueryDerivativeMarketsResponseAmino): _9.QueryDerivativeMarketsResponse;
                toAmino(message: _9.QueryDerivativeMarketsResponse): _9.QueryDerivativeMarketsResponseAmino;
                fromAminoMsg(object: _9.QueryDerivativeMarketsResponseAminoMsg): _9.QueryDerivativeMarketsResponse;
                fromProtoMsg(message: _9.QueryDerivativeMarketsResponseProtoMsg): _9.QueryDerivativeMarketsResponse;
                toProto(message: _9.QueryDerivativeMarketsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeMarketsResponse): _9.QueryDerivativeMarketsResponseProtoMsg;
            };
            QueryDerivativeMarketRequest: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeMarketRequest;
                fromPartial(object: Partial<_9.QueryDerivativeMarketRequest>): _9.QueryDerivativeMarketRequest;
                fromAmino(object: _9.QueryDerivativeMarketRequestAmino): _9.QueryDerivativeMarketRequest;
                toAmino(message: _9.QueryDerivativeMarketRequest): _9.QueryDerivativeMarketRequestAmino;
                fromAminoMsg(object: _9.QueryDerivativeMarketRequestAminoMsg): _9.QueryDerivativeMarketRequest;
                fromProtoMsg(message: _9.QueryDerivativeMarketRequestProtoMsg): _9.QueryDerivativeMarketRequest;
                toProto(message: _9.QueryDerivativeMarketRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeMarketRequest): _9.QueryDerivativeMarketRequestProtoMsg;
            };
            QueryDerivativeMarketResponse: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeMarketResponse;
                fromPartial(object: Partial<_9.QueryDerivativeMarketResponse>): _9.QueryDerivativeMarketResponse;
                fromAmino(object: _9.QueryDerivativeMarketResponseAmino): _9.QueryDerivativeMarketResponse;
                toAmino(message: _9.QueryDerivativeMarketResponse): _9.QueryDerivativeMarketResponseAmino;
                fromAminoMsg(object: _9.QueryDerivativeMarketResponseAminoMsg): _9.QueryDerivativeMarketResponse;
                fromProtoMsg(message: _9.QueryDerivativeMarketResponseProtoMsg): _9.QueryDerivativeMarketResponse;
                toProto(message: _9.QueryDerivativeMarketResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeMarketResponse): _9.QueryDerivativeMarketResponseProtoMsg;
            };
            QueryDerivativeMarketAddressRequest: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeMarketAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeMarketAddressRequest;
                fromPartial(object: Partial<_9.QueryDerivativeMarketAddressRequest>): _9.QueryDerivativeMarketAddressRequest;
                fromAmino(object: _9.QueryDerivativeMarketAddressRequestAmino): _9.QueryDerivativeMarketAddressRequest;
                toAmino(message: _9.QueryDerivativeMarketAddressRequest): _9.QueryDerivativeMarketAddressRequestAmino;
                fromAminoMsg(object: _9.QueryDerivativeMarketAddressRequestAminoMsg): _9.QueryDerivativeMarketAddressRequest;
                fromProtoMsg(message: _9.QueryDerivativeMarketAddressRequestProtoMsg): _9.QueryDerivativeMarketAddressRequest;
                toProto(message: _9.QueryDerivativeMarketAddressRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeMarketAddressRequest): _9.QueryDerivativeMarketAddressRequestProtoMsg;
            };
            QueryDerivativeMarketAddressResponse: {
                typeUrl: string;
                encode(message: _9.QueryDerivativeMarketAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryDerivativeMarketAddressResponse;
                fromPartial(object: Partial<_9.QueryDerivativeMarketAddressResponse>): _9.QueryDerivativeMarketAddressResponse;
                fromAmino(object: _9.QueryDerivativeMarketAddressResponseAmino): _9.QueryDerivativeMarketAddressResponse;
                toAmino(message: _9.QueryDerivativeMarketAddressResponse): _9.QueryDerivativeMarketAddressResponseAmino;
                fromAminoMsg(object: _9.QueryDerivativeMarketAddressResponseAminoMsg): _9.QueryDerivativeMarketAddressResponse;
                fromProtoMsg(message: _9.QueryDerivativeMarketAddressResponseProtoMsg): _9.QueryDerivativeMarketAddressResponse;
                toProto(message: _9.QueryDerivativeMarketAddressResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDerivativeMarketAddressResponse): _9.QueryDerivativeMarketAddressResponseProtoMsg;
            };
            QuerySubaccountTradeNonceRequest: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountTradeNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountTradeNonceRequest;
                fromPartial(object: Partial<_9.QuerySubaccountTradeNonceRequest>): _9.QuerySubaccountTradeNonceRequest;
                fromAmino(object: _9.QuerySubaccountTradeNonceRequestAmino): _9.QuerySubaccountTradeNonceRequest;
                toAmino(message: _9.QuerySubaccountTradeNonceRequest): _9.QuerySubaccountTradeNonceRequestAmino;
                fromAminoMsg(object: _9.QuerySubaccountTradeNonceRequestAminoMsg): _9.QuerySubaccountTradeNonceRequest;
                fromProtoMsg(message: _9.QuerySubaccountTradeNonceRequestProtoMsg): _9.QuerySubaccountTradeNonceRequest;
                toProto(message: _9.QuerySubaccountTradeNonceRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountTradeNonceRequest): _9.QuerySubaccountTradeNonceRequestProtoMsg;
            };
            QuerySubaccountPositionsRequest: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountPositionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountPositionsRequest;
                fromPartial(object: Partial<_9.QuerySubaccountPositionsRequest>): _9.QuerySubaccountPositionsRequest;
                fromAmino(object: _9.QuerySubaccountPositionsRequestAmino): _9.QuerySubaccountPositionsRequest;
                toAmino(message: _9.QuerySubaccountPositionsRequest): _9.QuerySubaccountPositionsRequestAmino;
                fromAminoMsg(object: _9.QuerySubaccountPositionsRequestAminoMsg): _9.QuerySubaccountPositionsRequest;
                fromProtoMsg(message: _9.QuerySubaccountPositionsRequestProtoMsg): _9.QuerySubaccountPositionsRequest;
                toProto(message: _9.QuerySubaccountPositionsRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountPositionsRequest): _9.QuerySubaccountPositionsRequestProtoMsg;
            };
            QuerySubaccountPositionInMarketRequest: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountPositionInMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountPositionInMarketRequest;
                fromPartial(object: Partial<_9.QuerySubaccountPositionInMarketRequest>): _9.QuerySubaccountPositionInMarketRequest;
                fromAmino(object: _9.QuerySubaccountPositionInMarketRequestAmino): _9.QuerySubaccountPositionInMarketRequest;
                toAmino(message: _9.QuerySubaccountPositionInMarketRequest): _9.QuerySubaccountPositionInMarketRequestAmino;
                fromAminoMsg(object: _9.QuerySubaccountPositionInMarketRequestAminoMsg): _9.QuerySubaccountPositionInMarketRequest;
                fromProtoMsg(message: _9.QuerySubaccountPositionInMarketRequestProtoMsg): _9.QuerySubaccountPositionInMarketRequest;
                toProto(message: _9.QuerySubaccountPositionInMarketRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountPositionInMarketRequest): _9.QuerySubaccountPositionInMarketRequestProtoMsg;
            };
            QuerySubaccountEffectivePositionInMarketRequest: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountEffectivePositionInMarketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountEffectivePositionInMarketRequest;
                fromPartial(object: Partial<_9.QuerySubaccountEffectivePositionInMarketRequest>): _9.QuerySubaccountEffectivePositionInMarketRequest;
                fromAmino(object: _9.QuerySubaccountEffectivePositionInMarketRequestAmino): _9.QuerySubaccountEffectivePositionInMarketRequest;
                toAmino(message: _9.QuerySubaccountEffectivePositionInMarketRequest): _9.QuerySubaccountEffectivePositionInMarketRequestAmino;
                fromAminoMsg(object: _9.QuerySubaccountEffectivePositionInMarketRequestAminoMsg): _9.QuerySubaccountEffectivePositionInMarketRequest;
                fromProtoMsg(message: _9.QuerySubaccountEffectivePositionInMarketRequestProtoMsg): _9.QuerySubaccountEffectivePositionInMarketRequest;
                toProto(message: _9.QuerySubaccountEffectivePositionInMarketRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountEffectivePositionInMarketRequest): _9.QuerySubaccountEffectivePositionInMarketRequestProtoMsg;
            };
            QuerySubaccountOrderMetadataRequest: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountOrderMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountOrderMetadataRequest;
                fromPartial(object: Partial<_9.QuerySubaccountOrderMetadataRequest>): _9.QuerySubaccountOrderMetadataRequest;
                fromAmino(object: _9.QuerySubaccountOrderMetadataRequestAmino): _9.QuerySubaccountOrderMetadataRequest;
                toAmino(message: _9.QuerySubaccountOrderMetadataRequest): _9.QuerySubaccountOrderMetadataRequestAmino;
                fromAminoMsg(object: _9.QuerySubaccountOrderMetadataRequestAminoMsg): _9.QuerySubaccountOrderMetadataRequest;
                fromProtoMsg(message: _9.QuerySubaccountOrderMetadataRequestProtoMsg): _9.QuerySubaccountOrderMetadataRequest;
                toProto(message: _9.QuerySubaccountOrderMetadataRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountOrderMetadataRequest): _9.QuerySubaccountOrderMetadataRequestProtoMsg;
            };
            QuerySubaccountPositionsResponse: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountPositionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountPositionsResponse;
                fromPartial(object: Partial<_9.QuerySubaccountPositionsResponse>): _9.QuerySubaccountPositionsResponse;
                fromAmino(object: _9.QuerySubaccountPositionsResponseAmino): _9.QuerySubaccountPositionsResponse;
                toAmino(message: _9.QuerySubaccountPositionsResponse): _9.QuerySubaccountPositionsResponseAmino;
                fromAminoMsg(object: _9.QuerySubaccountPositionsResponseAminoMsg): _9.QuerySubaccountPositionsResponse;
                fromProtoMsg(message: _9.QuerySubaccountPositionsResponseProtoMsg): _9.QuerySubaccountPositionsResponse;
                toProto(message: _9.QuerySubaccountPositionsResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountPositionsResponse): _9.QuerySubaccountPositionsResponseProtoMsg;
            };
            QuerySubaccountPositionInMarketResponse: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountPositionInMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountPositionInMarketResponse;
                fromPartial(object: Partial<_9.QuerySubaccountPositionInMarketResponse>): _9.QuerySubaccountPositionInMarketResponse;
                fromAmino(object: _9.QuerySubaccountPositionInMarketResponseAmino): _9.QuerySubaccountPositionInMarketResponse;
                toAmino(message: _9.QuerySubaccountPositionInMarketResponse): _9.QuerySubaccountPositionInMarketResponseAmino;
                fromAminoMsg(object: _9.QuerySubaccountPositionInMarketResponseAminoMsg): _9.QuerySubaccountPositionInMarketResponse;
                fromProtoMsg(message: _9.QuerySubaccountPositionInMarketResponseProtoMsg): _9.QuerySubaccountPositionInMarketResponse;
                toProto(message: _9.QuerySubaccountPositionInMarketResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountPositionInMarketResponse): _9.QuerySubaccountPositionInMarketResponseProtoMsg;
            };
            EffectivePosition: {
                typeUrl: string;
                encode(message: _9.EffectivePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EffectivePosition;
                fromPartial(object: Partial<_9.EffectivePosition>): _9.EffectivePosition;
                fromAmino(object: _9.EffectivePositionAmino): _9.EffectivePosition;
                toAmino(message: _9.EffectivePosition): _9.EffectivePositionAmino;
                fromAminoMsg(object: _9.EffectivePositionAminoMsg): _9.EffectivePosition;
                fromProtoMsg(message: _9.EffectivePositionProtoMsg): _9.EffectivePosition;
                toProto(message: _9.EffectivePosition): Uint8Array;
                toProtoMsg(message: _9.EffectivePosition): _9.EffectivePositionProtoMsg;
            };
            QuerySubaccountEffectivePositionInMarketResponse: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountEffectivePositionInMarketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountEffectivePositionInMarketResponse;
                fromPartial(object: Partial<_9.QuerySubaccountEffectivePositionInMarketResponse>): _9.QuerySubaccountEffectivePositionInMarketResponse;
                fromAmino(object: _9.QuerySubaccountEffectivePositionInMarketResponseAmino): _9.QuerySubaccountEffectivePositionInMarketResponse;
                toAmino(message: _9.QuerySubaccountEffectivePositionInMarketResponse): _9.QuerySubaccountEffectivePositionInMarketResponseAmino;
                fromAminoMsg(object: _9.QuerySubaccountEffectivePositionInMarketResponseAminoMsg): _9.QuerySubaccountEffectivePositionInMarketResponse;
                fromProtoMsg(message: _9.QuerySubaccountEffectivePositionInMarketResponseProtoMsg): _9.QuerySubaccountEffectivePositionInMarketResponse;
                toProto(message: _9.QuerySubaccountEffectivePositionInMarketResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountEffectivePositionInMarketResponse): _9.QuerySubaccountEffectivePositionInMarketResponseProtoMsg;
            };
            QueryPerpetualMarketInfoRequest: {
                typeUrl: string;
                encode(message: _9.QueryPerpetualMarketInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryPerpetualMarketInfoRequest;
                fromPartial(object: Partial<_9.QueryPerpetualMarketInfoRequest>): _9.QueryPerpetualMarketInfoRequest;
                fromAmino(object: _9.QueryPerpetualMarketInfoRequestAmino): _9.QueryPerpetualMarketInfoRequest;
                toAmino(message: _9.QueryPerpetualMarketInfoRequest): _9.QueryPerpetualMarketInfoRequestAmino;
                fromAminoMsg(object: _9.QueryPerpetualMarketInfoRequestAminoMsg): _9.QueryPerpetualMarketInfoRequest;
                fromProtoMsg(message: _9.QueryPerpetualMarketInfoRequestProtoMsg): _9.QueryPerpetualMarketInfoRequest;
                toProto(message: _9.QueryPerpetualMarketInfoRequest): Uint8Array;
                toProtoMsg(message: _9.QueryPerpetualMarketInfoRequest): _9.QueryPerpetualMarketInfoRequestProtoMsg;
            };
            QueryPerpetualMarketInfoResponse: {
                typeUrl: string;
                encode(message: _9.QueryPerpetualMarketInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryPerpetualMarketInfoResponse;
                fromPartial(object: Partial<_9.QueryPerpetualMarketInfoResponse>): _9.QueryPerpetualMarketInfoResponse;
                fromAmino(object: _9.QueryPerpetualMarketInfoResponseAmino): _9.QueryPerpetualMarketInfoResponse;
                toAmino(message: _9.QueryPerpetualMarketInfoResponse): _9.QueryPerpetualMarketInfoResponseAmino;
                fromAminoMsg(object: _9.QueryPerpetualMarketInfoResponseAminoMsg): _9.QueryPerpetualMarketInfoResponse;
                fromProtoMsg(message: _9.QueryPerpetualMarketInfoResponseProtoMsg): _9.QueryPerpetualMarketInfoResponse;
                toProto(message: _9.QueryPerpetualMarketInfoResponse): Uint8Array;
                toProtoMsg(message: _9.QueryPerpetualMarketInfoResponse): _9.QueryPerpetualMarketInfoResponseProtoMsg;
            };
            QueryExpiryFuturesMarketInfoRequest: {
                typeUrl: string;
                encode(message: _9.QueryExpiryFuturesMarketInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryExpiryFuturesMarketInfoRequest;
                fromPartial(object: Partial<_9.QueryExpiryFuturesMarketInfoRequest>): _9.QueryExpiryFuturesMarketInfoRequest;
                fromAmino(object: _9.QueryExpiryFuturesMarketInfoRequestAmino): _9.QueryExpiryFuturesMarketInfoRequest;
                toAmino(message: _9.QueryExpiryFuturesMarketInfoRequest): _9.QueryExpiryFuturesMarketInfoRequestAmino;
                fromAminoMsg(object: _9.QueryExpiryFuturesMarketInfoRequestAminoMsg): _9.QueryExpiryFuturesMarketInfoRequest;
                fromProtoMsg(message: _9.QueryExpiryFuturesMarketInfoRequestProtoMsg): _9.QueryExpiryFuturesMarketInfoRequest;
                toProto(message: _9.QueryExpiryFuturesMarketInfoRequest): Uint8Array;
                toProtoMsg(message: _9.QueryExpiryFuturesMarketInfoRequest): _9.QueryExpiryFuturesMarketInfoRequestProtoMsg;
            };
            QueryExpiryFuturesMarketInfoResponse: {
                typeUrl: string;
                encode(message: _9.QueryExpiryFuturesMarketInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryExpiryFuturesMarketInfoResponse;
                fromPartial(object: Partial<_9.QueryExpiryFuturesMarketInfoResponse>): _9.QueryExpiryFuturesMarketInfoResponse;
                fromAmino(object: _9.QueryExpiryFuturesMarketInfoResponseAmino): _9.QueryExpiryFuturesMarketInfoResponse;
                toAmino(message: _9.QueryExpiryFuturesMarketInfoResponse): _9.QueryExpiryFuturesMarketInfoResponseAmino;
                fromAminoMsg(object: _9.QueryExpiryFuturesMarketInfoResponseAminoMsg): _9.QueryExpiryFuturesMarketInfoResponse;
                fromProtoMsg(message: _9.QueryExpiryFuturesMarketInfoResponseProtoMsg): _9.QueryExpiryFuturesMarketInfoResponse;
                toProto(message: _9.QueryExpiryFuturesMarketInfoResponse): Uint8Array;
                toProtoMsg(message: _9.QueryExpiryFuturesMarketInfoResponse): _9.QueryExpiryFuturesMarketInfoResponseProtoMsg;
            };
            QueryPerpetualMarketFundingRequest: {
                typeUrl: string;
                encode(message: _9.QueryPerpetualMarketFundingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryPerpetualMarketFundingRequest;
                fromPartial(object: Partial<_9.QueryPerpetualMarketFundingRequest>): _9.QueryPerpetualMarketFundingRequest;
                fromAmino(object: _9.QueryPerpetualMarketFundingRequestAmino): _9.QueryPerpetualMarketFundingRequest;
                toAmino(message: _9.QueryPerpetualMarketFundingRequest): _9.QueryPerpetualMarketFundingRequestAmino;
                fromAminoMsg(object: _9.QueryPerpetualMarketFundingRequestAminoMsg): _9.QueryPerpetualMarketFundingRequest;
                fromProtoMsg(message: _9.QueryPerpetualMarketFundingRequestProtoMsg): _9.QueryPerpetualMarketFundingRequest;
                toProto(message: _9.QueryPerpetualMarketFundingRequest): Uint8Array;
                toProtoMsg(message: _9.QueryPerpetualMarketFundingRequest): _9.QueryPerpetualMarketFundingRequestProtoMsg;
            };
            QueryPerpetualMarketFundingResponse: {
                typeUrl: string;
                encode(message: _9.QueryPerpetualMarketFundingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryPerpetualMarketFundingResponse;
                fromPartial(object: Partial<_9.QueryPerpetualMarketFundingResponse>): _9.QueryPerpetualMarketFundingResponse;
                fromAmino(object: _9.QueryPerpetualMarketFundingResponseAmino): _9.QueryPerpetualMarketFundingResponse;
                toAmino(message: _9.QueryPerpetualMarketFundingResponse): _9.QueryPerpetualMarketFundingResponseAmino;
                fromAminoMsg(object: _9.QueryPerpetualMarketFundingResponseAminoMsg): _9.QueryPerpetualMarketFundingResponse;
                fromProtoMsg(message: _9.QueryPerpetualMarketFundingResponseProtoMsg): _9.QueryPerpetualMarketFundingResponse;
                toProto(message: _9.QueryPerpetualMarketFundingResponse): Uint8Array;
                toProtoMsg(message: _9.QueryPerpetualMarketFundingResponse): _9.QueryPerpetualMarketFundingResponseProtoMsg;
            };
            QuerySubaccountOrderMetadataResponse: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountOrderMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountOrderMetadataResponse;
                fromPartial(object: Partial<_9.QuerySubaccountOrderMetadataResponse>): _9.QuerySubaccountOrderMetadataResponse;
                fromAmino(object: _9.QuerySubaccountOrderMetadataResponseAmino): _9.QuerySubaccountOrderMetadataResponse;
                toAmino(message: _9.QuerySubaccountOrderMetadataResponse): _9.QuerySubaccountOrderMetadataResponseAmino;
                fromAminoMsg(object: _9.QuerySubaccountOrderMetadataResponseAminoMsg): _9.QuerySubaccountOrderMetadataResponse;
                fromProtoMsg(message: _9.QuerySubaccountOrderMetadataResponseProtoMsg): _9.QuerySubaccountOrderMetadataResponse;
                toProto(message: _9.QuerySubaccountOrderMetadataResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountOrderMetadataResponse): _9.QuerySubaccountOrderMetadataResponseProtoMsg;
            };
            QuerySubaccountTradeNonceResponse: {
                typeUrl: string;
                encode(message: _9.QuerySubaccountTradeNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QuerySubaccountTradeNonceResponse;
                fromPartial(object: Partial<_9.QuerySubaccountTradeNonceResponse>): _9.QuerySubaccountTradeNonceResponse;
                fromAmino(object: _9.QuerySubaccountTradeNonceResponseAmino): _9.QuerySubaccountTradeNonceResponse;
                toAmino(message: _9.QuerySubaccountTradeNonceResponse): _9.QuerySubaccountTradeNonceResponseAmino;
                fromAminoMsg(object: _9.QuerySubaccountTradeNonceResponseAminoMsg): _9.QuerySubaccountTradeNonceResponse;
                fromProtoMsg(message: _9.QuerySubaccountTradeNonceResponseProtoMsg): _9.QuerySubaccountTradeNonceResponse;
                toProto(message: _9.QuerySubaccountTradeNonceResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySubaccountTradeNonceResponse): _9.QuerySubaccountTradeNonceResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _9.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryModuleStateRequest;
                fromPartial(_: Partial<_9.QueryModuleStateRequest>): _9.QueryModuleStateRequest;
                fromAmino(_: _9.QueryModuleStateRequestAmino): _9.QueryModuleStateRequest;
                toAmino(_: _9.QueryModuleStateRequest): _9.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _9.QueryModuleStateRequestAminoMsg): _9.QueryModuleStateRequest;
                fromProtoMsg(message: _9.QueryModuleStateRequestProtoMsg): _9.QueryModuleStateRequest;
                toProto(message: _9.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _9.QueryModuleStateRequest): _9.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _9.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryModuleStateResponse;
                fromPartial(object: Partial<_9.QueryModuleStateResponse>): _9.QueryModuleStateResponse;
                fromAmino(object: _9.QueryModuleStateResponseAmino): _9.QueryModuleStateResponse;
                toAmino(message: _9.QueryModuleStateResponse): _9.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _9.QueryModuleStateResponseAminoMsg): _9.QueryModuleStateResponse;
                fromProtoMsg(message: _9.QueryModuleStateResponseProtoMsg): _9.QueryModuleStateResponse;
                toProto(message: _9.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _9.QueryModuleStateResponse): _9.QueryModuleStateResponseProtoMsg;
            };
            QueryPositionsRequest: {
                typeUrl: string;
                encode(_: _9.QueryPositionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryPositionsRequest;
                fromPartial(_: Partial<_9.QueryPositionsRequest>): _9.QueryPositionsRequest;
                fromAmino(_: _9.QueryPositionsRequestAmino): _9.QueryPositionsRequest;
                toAmino(_: _9.QueryPositionsRequest): _9.QueryPositionsRequestAmino;
                fromAminoMsg(object: _9.QueryPositionsRequestAminoMsg): _9.QueryPositionsRequest;
                fromProtoMsg(message: _9.QueryPositionsRequestProtoMsg): _9.QueryPositionsRequest;
                toProto(message: _9.QueryPositionsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryPositionsRequest): _9.QueryPositionsRequestProtoMsg;
            };
            QueryPositionsResponse: {
                typeUrl: string;
                encode(message: _9.QueryPositionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryPositionsResponse;
                fromPartial(object: Partial<_9.QueryPositionsResponse>): _9.QueryPositionsResponse;
                fromAmino(object: _9.QueryPositionsResponseAmino): _9.QueryPositionsResponse;
                toAmino(message: _9.QueryPositionsResponse): _9.QueryPositionsResponseAmino;
                fromAminoMsg(object: _9.QueryPositionsResponseAminoMsg): _9.QueryPositionsResponse;
                fromProtoMsg(message: _9.QueryPositionsResponseProtoMsg): _9.QueryPositionsResponse;
                toProto(message: _9.QueryPositionsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryPositionsResponse): _9.QueryPositionsResponseProtoMsg;
            };
            QueryTradeRewardPointsRequest: {
                typeUrl: string;
                encode(message: _9.QueryTradeRewardPointsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTradeRewardPointsRequest;
                fromPartial(object: Partial<_9.QueryTradeRewardPointsRequest>): _9.QueryTradeRewardPointsRequest;
                fromAmino(object: _9.QueryTradeRewardPointsRequestAmino): _9.QueryTradeRewardPointsRequest;
                toAmino(message: _9.QueryTradeRewardPointsRequest): _9.QueryTradeRewardPointsRequestAmino;
                fromAminoMsg(object: _9.QueryTradeRewardPointsRequestAminoMsg): _9.QueryTradeRewardPointsRequest;
                fromProtoMsg(message: _9.QueryTradeRewardPointsRequestProtoMsg): _9.QueryTradeRewardPointsRequest;
                toProto(message: _9.QueryTradeRewardPointsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTradeRewardPointsRequest): _9.QueryTradeRewardPointsRequestProtoMsg;
            };
            QueryTradeRewardPointsResponse: {
                typeUrl: string;
                encode(message: _9.QueryTradeRewardPointsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTradeRewardPointsResponse;
                fromPartial(object: Partial<_9.QueryTradeRewardPointsResponse>): _9.QueryTradeRewardPointsResponse;
                fromAmino(object: _9.QueryTradeRewardPointsResponseAmino): _9.QueryTradeRewardPointsResponse;
                toAmino(message: _9.QueryTradeRewardPointsResponse): _9.QueryTradeRewardPointsResponseAmino;
                fromAminoMsg(object: _9.QueryTradeRewardPointsResponseAminoMsg): _9.QueryTradeRewardPointsResponse;
                fromProtoMsg(message: _9.QueryTradeRewardPointsResponseProtoMsg): _9.QueryTradeRewardPointsResponse;
                toProto(message: _9.QueryTradeRewardPointsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTradeRewardPointsResponse): _9.QueryTradeRewardPointsResponseProtoMsg;
            };
            QueryTradeRewardCampaignRequest: {
                typeUrl: string;
                encode(_: _9.QueryTradeRewardCampaignRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryTradeRewardCampaignRequest;
                fromPartial(_: Partial<_9.QueryTradeRewardCampaignRequest>): _9.QueryTradeRewardCampaignRequest;
                fromAmino(_: _9.QueryTradeRewardCampaignRequestAmino): _9.QueryTradeRewardCampaignRequest;
                toAmino(_: _9.QueryTradeRewardCampaignRequest): _9.QueryTradeRewardCampaignRequestAmino;
                fromAminoMsg(object: _9.QueryTradeRewardCampaignRequestAminoMsg): _9.QueryTradeRewardCampaignRequest;
                fromProtoMsg(message: _9.QueryTradeRewardCampaignRequestProtoMsg): _9.QueryTradeRewardCampaignRequest;
                toProto(message: _9.QueryTradeRewardCampaignRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTradeRewardCampaignRequest): _9.QueryTradeRewardCampaignRequestProtoMsg;
            };
            QueryTradeRewardCampaignResponse: {
                typeUrl: string;
                encode(message: _9.QueryTradeRewardCampaignResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTradeRewardCampaignResponse;
                fromPartial(object: Partial<_9.QueryTradeRewardCampaignResponse>): _9.QueryTradeRewardCampaignResponse;
                fromAmino(object: _9.QueryTradeRewardCampaignResponseAmino): _9.QueryTradeRewardCampaignResponse;
                toAmino(message: _9.QueryTradeRewardCampaignResponse): _9.QueryTradeRewardCampaignResponseAmino;
                fromAminoMsg(object: _9.QueryTradeRewardCampaignResponseAminoMsg): _9.QueryTradeRewardCampaignResponse;
                fromProtoMsg(message: _9.QueryTradeRewardCampaignResponseProtoMsg): _9.QueryTradeRewardCampaignResponse;
                toProto(message: _9.QueryTradeRewardCampaignResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTradeRewardCampaignResponse): _9.QueryTradeRewardCampaignResponseProtoMsg;
            };
            QueryIsOptedOutOfRewardsRequest: {
                typeUrl: string;
                encode(message: _9.QueryIsOptedOutOfRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryIsOptedOutOfRewardsRequest;
                fromPartial(object: Partial<_9.QueryIsOptedOutOfRewardsRequest>): _9.QueryIsOptedOutOfRewardsRequest;
                fromAmino(object: _9.QueryIsOptedOutOfRewardsRequestAmino): _9.QueryIsOptedOutOfRewardsRequest;
                toAmino(message: _9.QueryIsOptedOutOfRewardsRequest): _9.QueryIsOptedOutOfRewardsRequestAmino;
                fromAminoMsg(object: _9.QueryIsOptedOutOfRewardsRequestAminoMsg): _9.QueryIsOptedOutOfRewardsRequest;
                fromProtoMsg(message: _9.QueryIsOptedOutOfRewardsRequestProtoMsg): _9.QueryIsOptedOutOfRewardsRequest;
                toProto(message: _9.QueryIsOptedOutOfRewardsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryIsOptedOutOfRewardsRequest): _9.QueryIsOptedOutOfRewardsRequestProtoMsg;
            };
            QueryIsOptedOutOfRewardsResponse: {
                typeUrl: string;
                encode(message: _9.QueryIsOptedOutOfRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryIsOptedOutOfRewardsResponse;
                fromPartial(object: Partial<_9.QueryIsOptedOutOfRewardsResponse>): _9.QueryIsOptedOutOfRewardsResponse;
                fromAmino(object: _9.QueryIsOptedOutOfRewardsResponseAmino): _9.QueryIsOptedOutOfRewardsResponse;
                toAmino(message: _9.QueryIsOptedOutOfRewardsResponse): _9.QueryIsOptedOutOfRewardsResponseAmino;
                fromAminoMsg(object: _9.QueryIsOptedOutOfRewardsResponseAminoMsg): _9.QueryIsOptedOutOfRewardsResponse;
                fromProtoMsg(message: _9.QueryIsOptedOutOfRewardsResponseProtoMsg): _9.QueryIsOptedOutOfRewardsResponse;
                toProto(message: _9.QueryIsOptedOutOfRewardsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryIsOptedOutOfRewardsResponse): _9.QueryIsOptedOutOfRewardsResponseProtoMsg;
            };
            QueryOptedOutOfRewardsAccountsRequest: {
                typeUrl: string;
                encode(_: _9.QueryOptedOutOfRewardsAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryOptedOutOfRewardsAccountsRequest;
                fromPartial(_: Partial<_9.QueryOptedOutOfRewardsAccountsRequest>): _9.QueryOptedOutOfRewardsAccountsRequest;
                fromAmino(_: _9.QueryOptedOutOfRewardsAccountsRequestAmino): _9.QueryOptedOutOfRewardsAccountsRequest;
                toAmino(_: _9.QueryOptedOutOfRewardsAccountsRequest): _9.QueryOptedOutOfRewardsAccountsRequestAmino;
                fromAminoMsg(object: _9.QueryOptedOutOfRewardsAccountsRequestAminoMsg): _9.QueryOptedOutOfRewardsAccountsRequest;
                fromProtoMsg(message: _9.QueryOptedOutOfRewardsAccountsRequestProtoMsg): _9.QueryOptedOutOfRewardsAccountsRequest;
                toProto(message: _9.QueryOptedOutOfRewardsAccountsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryOptedOutOfRewardsAccountsRequest): _9.QueryOptedOutOfRewardsAccountsRequestProtoMsg;
            };
            QueryOptedOutOfRewardsAccountsResponse: {
                typeUrl: string;
                encode(message: _9.QueryOptedOutOfRewardsAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryOptedOutOfRewardsAccountsResponse;
                fromPartial(object: Partial<_9.QueryOptedOutOfRewardsAccountsResponse>): _9.QueryOptedOutOfRewardsAccountsResponse;
                fromAmino(object: _9.QueryOptedOutOfRewardsAccountsResponseAmino): _9.QueryOptedOutOfRewardsAccountsResponse;
                toAmino(message: _9.QueryOptedOutOfRewardsAccountsResponse): _9.QueryOptedOutOfRewardsAccountsResponseAmino;
                fromAminoMsg(object: _9.QueryOptedOutOfRewardsAccountsResponseAminoMsg): _9.QueryOptedOutOfRewardsAccountsResponse;
                fromProtoMsg(message: _9.QueryOptedOutOfRewardsAccountsResponseProtoMsg): _9.QueryOptedOutOfRewardsAccountsResponse;
                toProto(message: _9.QueryOptedOutOfRewardsAccountsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryOptedOutOfRewardsAccountsResponse): _9.QueryOptedOutOfRewardsAccountsResponseProtoMsg;
            };
            QueryFeeDiscountAccountInfoRequest: {
                typeUrl: string;
                encode(message: _9.QueryFeeDiscountAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFeeDiscountAccountInfoRequest;
                fromPartial(object: Partial<_9.QueryFeeDiscountAccountInfoRequest>): _9.QueryFeeDiscountAccountInfoRequest;
                fromAmino(object: _9.QueryFeeDiscountAccountInfoRequestAmino): _9.QueryFeeDiscountAccountInfoRequest;
                toAmino(message: _9.QueryFeeDiscountAccountInfoRequest): _9.QueryFeeDiscountAccountInfoRequestAmino;
                fromAminoMsg(object: _9.QueryFeeDiscountAccountInfoRequestAminoMsg): _9.QueryFeeDiscountAccountInfoRequest;
                fromProtoMsg(message: _9.QueryFeeDiscountAccountInfoRequestProtoMsg): _9.QueryFeeDiscountAccountInfoRequest;
                toProto(message: _9.QueryFeeDiscountAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _9.QueryFeeDiscountAccountInfoRequest): _9.QueryFeeDiscountAccountInfoRequestProtoMsg;
            };
            QueryFeeDiscountAccountInfoResponse: {
                typeUrl: string;
                encode(message: _9.QueryFeeDiscountAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFeeDiscountAccountInfoResponse;
                fromPartial(object: Partial<_9.QueryFeeDiscountAccountInfoResponse>): _9.QueryFeeDiscountAccountInfoResponse;
                fromAmino(object: _9.QueryFeeDiscountAccountInfoResponseAmino): _9.QueryFeeDiscountAccountInfoResponse;
                toAmino(message: _9.QueryFeeDiscountAccountInfoResponse): _9.QueryFeeDiscountAccountInfoResponseAmino;
                fromAminoMsg(object: _9.QueryFeeDiscountAccountInfoResponseAminoMsg): _9.QueryFeeDiscountAccountInfoResponse;
                fromProtoMsg(message: _9.QueryFeeDiscountAccountInfoResponseProtoMsg): _9.QueryFeeDiscountAccountInfoResponse;
                toProto(message: _9.QueryFeeDiscountAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _9.QueryFeeDiscountAccountInfoResponse): _9.QueryFeeDiscountAccountInfoResponseProtoMsg;
            };
            QueryFeeDiscountScheduleRequest: {
                typeUrl: string;
                encode(_: _9.QueryFeeDiscountScheduleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryFeeDiscountScheduleRequest;
                fromPartial(_: Partial<_9.QueryFeeDiscountScheduleRequest>): _9.QueryFeeDiscountScheduleRequest;
                fromAmino(_: _9.QueryFeeDiscountScheduleRequestAmino): _9.QueryFeeDiscountScheduleRequest;
                toAmino(_: _9.QueryFeeDiscountScheduleRequest): _9.QueryFeeDiscountScheduleRequestAmino;
                fromAminoMsg(object: _9.QueryFeeDiscountScheduleRequestAminoMsg): _9.QueryFeeDiscountScheduleRequest;
                fromProtoMsg(message: _9.QueryFeeDiscountScheduleRequestProtoMsg): _9.QueryFeeDiscountScheduleRequest;
                toProto(message: _9.QueryFeeDiscountScheduleRequest): Uint8Array;
                toProtoMsg(message: _9.QueryFeeDiscountScheduleRequest): _9.QueryFeeDiscountScheduleRequestProtoMsg;
            };
            QueryFeeDiscountScheduleResponse: {
                typeUrl: string;
                encode(message: _9.QueryFeeDiscountScheduleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFeeDiscountScheduleResponse;
                fromPartial(object: Partial<_9.QueryFeeDiscountScheduleResponse>): _9.QueryFeeDiscountScheduleResponse;
                fromAmino(object: _9.QueryFeeDiscountScheduleResponseAmino): _9.QueryFeeDiscountScheduleResponse;
                toAmino(message: _9.QueryFeeDiscountScheduleResponse): _9.QueryFeeDiscountScheduleResponseAmino;
                fromAminoMsg(object: _9.QueryFeeDiscountScheduleResponseAminoMsg): _9.QueryFeeDiscountScheduleResponse;
                fromProtoMsg(message: _9.QueryFeeDiscountScheduleResponseProtoMsg): _9.QueryFeeDiscountScheduleResponse;
                toProto(message: _9.QueryFeeDiscountScheduleResponse): Uint8Array;
                toProtoMsg(message: _9.QueryFeeDiscountScheduleResponse): _9.QueryFeeDiscountScheduleResponseProtoMsg;
            };
            QueryBalanceMismatchesRequest: {
                typeUrl: string;
                encode(message: _9.QueryBalanceMismatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryBalanceMismatchesRequest;
                fromPartial(object: Partial<_9.QueryBalanceMismatchesRequest>): _9.QueryBalanceMismatchesRequest;
                fromAmino(object: _9.QueryBalanceMismatchesRequestAmino): _9.QueryBalanceMismatchesRequest;
                toAmino(message: _9.QueryBalanceMismatchesRequest): _9.QueryBalanceMismatchesRequestAmino;
                fromAminoMsg(object: _9.QueryBalanceMismatchesRequestAminoMsg): _9.QueryBalanceMismatchesRequest;
                fromProtoMsg(message: _9.QueryBalanceMismatchesRequestProtoMsg): _9.QueryBalanceMismatchesRequest;
                toProto(message: _9.QueryBalanceMismatchesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryBalanceMismatchesRequest): _9.QueryBalanceMismatchesRequestProtoMsg;
            };
            BalanceMismatch: {
                typeUrl: string;
                encode(message: _9.BalanceMismatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.BalanceMismatch;
                fromPartial(object: Partial<_9.BalanceMismatch>): _9.BalanceMismatch;
                fromAmino(object: _9.BalanceMismatchAmino): _9.BalanceMismatch;
                toAmino(message: _9.BalanceMismatch): _9.BalanceMismatchAmino;
                fromAminoMsg(object: _9.BalanceMismatchAminoMsg): _9.BalanceMismatch;
                fromProtoMsg(message: _9.BalanceMismatchProtoMsg): _9.BalanceMismatch;
                toProto(message: _9.BalanceMismatch): Uint8Array;
                toProtoMsg(message: _9.BalanceMismatch): _9.BalanceMismatchProtoMsg;
            };
            QueryBalanceMismatchesResponse: {
                typeUrl: string;
                encode(message: _9.QueryBalanceMismatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryBalanceMismatchesResponse;
                fromPartial(object: Partial<_9.QueryBalanceMismatchesResponse>): _9.QueryBalanceMismatchesResponse;
                fromAmino(object: _9.QueryBalanceMismatchesResponseAmino): _9.QueryBalanceMismatchesResponse;
                toAmino(message: _9.QueryBalanceMismatchesResponse): _9.QueryBalanceMismatchesResponseAmino;
                fromAminoMsg(object: _9.QueryBalanceMismatchesResponseAminoMsg): _9.QueryBalanceMismatchesResponse;
                fromProtoMsg(message: _9.QueryBalanceMismatchesResponseProtoMsg): _9.QueryBalanceMismatchesResponse;
                toProto(message: _9.QueryBalanceMismatchesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryBalanceMismatchesResponse): _9.QueryBalanceMismatchesResponseProtoMsg;
            };
            QueryBalanceWithBalanceHoldsRequest: {
                typeUrl: string;
                encode(_: _9.QueryBalanceWithBalanceHoldsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryBalanceWithBalanceHoldsRequest;
                fromPartial(_: Partial<_9.QueryBalanceWithBalanceHoldsRequest>): _9.QueryBalanceWithBalanceHoldsRequest;
                fromAmino(_: _9.QueryBalanceWithBalanceHoldsRequestAmino): _9.QueryBalanceWithBalanceHoldsRequest;
                toAmino(_: _9.QueryBalanceWithBalanceHoldsRequest): _9.QueryBalanceWithBalanceHoldsRequestAmino;
                fromAminoMsg(object: _9.QueryBalanceWithBalanceHoldsRequestAminoMsg): _9.QueryBalanceWithBalanceHoldsRequest;
                fromProtoMsg(message: _9.QueryBalanceWithBalanceHoldsRequestProtoMsg): _9.QueryBalanceWithBalanceHoldsRequest;
                toProto(message: _9.QueryBalanceWithBalanceHoldsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryBalanceWithBalanceHoldsRequest): _9.QueryBalanceWithBalanceHoldsRequestProtoMsg;
            };
            BalanceWithMarginHold: {
                typeUrl: string;
                encode(message: _9.BalanceWithMarginHold, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.BalanceWithMarginHold;
                fromPartial(object: Partial<_9.BalanceWithMarginHold>): _9.BalanceWithMarginHold;
                fromAmino(object: _9.BalanceWithMarginHoldAmino): _9.BalanceWithMarginHold;
                toAmino(message: _9.BalanceWithMarginHold): _9.BalanceWithMarginHoldAmino;
                fromAminoMsg(object: _9.BalanceWithMarginHoldAminoMsg): _9.BalanceWithMarginHold;
                fromProtoMsg(message: _9.BalanceWithMarginHoldProtoMsg): _9.BalanceWithMarginHold;
                toProto(message: _9.BalanceWithMarginHold): Uint8Array;
                toProtoMsg(message: _9.BalanceWithMarginHold): _9.BalanceWithMarginHoldProtoMsg;
            };
            QueryBalanceWithBalanceHoldsResponse: {
                typeUrl: string;
                encode(message: _9.QueryBalanceWithBalanceHoldsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryBalanceWithBalanceHoldsResponse;
                fromPartial(object: Partial<_9.QueryBalanceWithBalanceHoldsResponse>): _9.QueryBalanceWithBalanceHoldsResponse;
                fromAmino(object: _9.QueryBalanceWithBalanceHoldsResponseAmino): _9.QueryBalanceWithBalanceHoldsResponse;
                toAmino(message: _9.QueryBalanceWithBalanceHoldsResponse): _9.QueryBalanceWithBalanceHoldsResponseAmino;
                fromAminoMsg(object: _9.QueryBalanceWithBalanceHoldsResponseAminoMsg): _9.QueryBalanceWithBalanceHoldsResponse;
                fromProtoMsg(message: _9.QueryBalanceWithBalanceHoldsResponseProtoMsg): _9.QueryBalanceWithBalanceHoldsResponse;
                toProto(message: _9.QueryBalanceWithBalanceHoldsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryBalanceWithBalanceHoldsResponse): _9.QueryBalanceWithBalanceHoldsResponseProtoMsg;
            };
            QueryFeeDiscountTierStatisticsRequest: {
                typeUrl: string;
                encode(_: _9.QueryFeeDiscountTierStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.QueryFeeDiscountTierStatisticsRequest;
                fromPartial(_: Partial<_9.QueryFeeDiscountTierStatisticsRequest>): _9.QueryFeeDiscountTierStatisticsRequest;
                fromAmino(_: _9.QueryFeeDiscountTierStatisticsRequestAmino): _9.QueryFeeDiscountTierStatisticsRequest;
                toAmino(_: _9.QueryFeeDiscountTierStatisticsRequest): _9.QueryFeeDiscountTierStatisticsRequestAmino;
                fromAminoMsg(object: _9.QueryFeeDiscountTierStatisticsRequestAminoMsg): _9.QueryFeeDiscountTierStatisticsRequest;
                fromProtoMsg(message: _9.QueryFeeDiscountTierStatisticsRequestProtoMsg): _9.QueryFeeDiscountTierStatisticsRequest;
                toProto(message: _9.QueryFeeDiscountTierStatisticsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryFeeDiscountTierStatisticsRequest): _9.QueryFeeDiscountTierStatisticsRequestProtoMsg;
            };
            TierStatistic: {
                typeUrl: string;
                encode(message: _9.TierStatistic, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.TierStatistic;
                fromPartial(object: Partial<_9.TierStatistic>): _9.TierStatistic;
                fromAmino(object: _9.TierStatisticAmino): _9.TierStatistic;
                toAmino(message: _9.TierStatistic): _9.TierStatisticAmino;
                fromAminoMsg(object: _9.TierStatisticAminoMsg): _9.TierStatistic;
                fromProtoMsg(message: _9.TierStatisticProtoMsg): _9.TierStatistic;
                toProto(message: _9.TierStatistic): Uint8Array;
                toProtoMsg(message: _9.TierStatistic): _9.TierStatisticProtoMsg;
            };
            QueryFeeDiscountTierStatisticsResponse: {
                typeUrl: string;
                encode(message: _9.QueryFeeDiscountTierStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryFeeDiscountTierStatisticsResponse;
                fromPartial(object: Partial<_9.QueryFeeDiscountTierStatisticsResponse>): _9.QueryFeeDiscountTierStatisticsResponse;
                fromAmino(object: _9.QueryFeeDiscountTierStatisticsResponseAmino): _9.QueryFeeDiscountTierStatisticsResponse;
                toAmino(message: _9.QueryFeeDiscountTierStatisticsResponse): _9.QueryFeeDiscountTierStatisticsResponseAmino;
                fromAminoMsg(object: _9.QueryFeeDiscountTierStatisticsResponseAminoMsg): _9.QueryFeeDiscountTierStatisticsResponse;
                fromProtoMsg(message: _9.QueryFeeDiscountTierStatisticsResponseProtoMsg): _9.QueryFeeDiscountTierStatisticsResponse;
                toProto(message: _9.QueryFeeDiscountTierStatisticsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryFeeDiscountTierStatisticsResponse): _9.QueryFeeDiscountTierStatisticsResponseProtoMsg;
            };
            MitoVaultInfosRequest: {
                typeUrl: string;
                encode(_: _9.MitoVaultInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MitoVaultInfosRequest;
                fromPartial(_: Partial<_9.MitoVaultInfosRequest>): _9.MitoVaultInfosRequest;
                fromAmino(_: _9.MitoVaultInfosRequestAmino): _9.MitoVaultInfosRequest;
                toAmino(_: _9.MitoVaultInfosRequest): _9.MitoVaultInfosRequestAmino;
                fromAminoMsg(object: _9.MitoVaultInfosRequestAminoMsg): _9.MitoVaultInfosRequest;
                fromProtoMsg(message: _9.MitoVaultInfosRequestProtoMsg): _9.MitoVaultInfosRequest;
                toProto(message: _9.MitoVaultInfosRequest): Uint8Array;
                toProtoMsg(message: _9.MitoVaultInfosRequest): _9.MitoVaultInfosRequestProtoMsg;
            };
            MitoVaultInfosResponse: {
                typeUrl: string;
                encode(message: _9.MitoVaultInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MitoVaultInfosResponse;
                fromPartial(object: Partial<_9.MitoVaultInfosResponse>): _9.MitoVaultInfosResponse;
                fromAmino(object: _9.MitoVaultInfosResponseAmino): _9.MitoVaultInfosResponse;
                toAmino(message: _9.MitoVaultInfosResponse): _9.MitoVaultInfosResponseAmino;
                fromAminoMsg(object: _9.MitoVaultInfosResponseAminoMsg): _9.MitoVaultInfosResponse;
                fromProtoMsg(message: _9.MitoVaultInfosResponseProtoMsg): _9.MitoVaultInfosResponse;
                toProto(message: _9.MitoVaultInfosResponse): Uint8Array;
                toProtoMsg(message: _9.MitoVaultInfosResponse): _9.MitoVaultInfosResponseProtoMsg;
            };
            QueryMarketIDFromVaultRequest: {
                typeUrl: string;
                encode(message: _9.QueryMarketIDFromVaultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryMarketIDFromVaultRequest;
                fromPartial(object: Partial<_9.QueryMarketIDFromVaultRequest>): _9.QueryMarketIDFromVaultRequest;
                fromAmino(object: _9.QueryMarketIDFromVaultRequestAmino): _9.QueryMarketIDFromVaultRequest;
                toAmino(message: _9.QueryMarketIDFromVaultRequest): _9.QueryMarketIDFromVaultRequestAmino;
                fromAminoMsg(object: _9.QueryMarketIDFromVaultRequestAminoMsg): _9.QueryMarketIDFromVaultRequest;
                fromProtoMsg(message: _9.QueryMarketIDFromVaultRequestProtoMsg): _9.QueryMarketIDFromVaultRequest;
                toProto(message: _9.QueryMarketIDFromVaultRequest): Uint8Array;
                toProtoMsg(message: _9.QueryMarketIDFromVaultRequest): _9.QueryMarketIDFromVaultRequestProtoMsg;
            };
            QueryMarketIDFromVaultResponse: {
                typeUrl: string;
                encode(message: _9.QueryMarketIDFromVaultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryMarketIDFromVaultResponse;
                fromPartial(object: Partial<_9.QueryMarketIDFromVaultResponse>): _9.QueryMarketIDFromVaultResponse;
                fromAmino(object: _9.QueryMarketIDFromVaultResponseAmino): _9.QueryMarketIDFromVaultResponse;
                toAmino(message: _9.QueryMarketIDFromVaultResponse): _9.QueryMarketIDFromVaultResponseAmino;
                fromAminoMsg(object: _9.QueryMarketIDFromVaultResponseAminoMsg): _9.QueryMarketIDFromVaultResponse;
                fromProtoMsg(message: _9.QueryMarketIDFromVaultResponseProtoMsg): _9.QueryMarketIDFromVaultResponse;
                toProto(message: _9.QueryMarketIDFromVaultResponse): Uint8Array;
                toProtoMsg(message: _9.QueryMarketIDFromVaultResponse): _9.QueryMarketIDFromVaultResponseProtoMsg;
            };
            QueryHistoricalTradeRecordsRequest: {
                typeUrl: string;
                encode(message: _9.QueryHistoricalTradeRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryHistoricalTradeRecordsRequest;
                fromPartial(object: Partial<_9.QueryHistoricalTradeRecordsRequest>): _9.QueryHistoricalTradeRecordsRequest;
                fromAmino(object: _9.QueryHistoricalTradeRecordsRequestAmino): _9.QueryHistoricalTradeRecordsRequest;
                toAmino(message: _9.QueryHistoricalTradeRecordsRequest): _9.QueryHistoricalTradeRecordsRequestAmino;
                fromAminoMsg(object: _9.QueryHistoricalTradeRecordsRequestAminoMsg): _9.QueryHistoricalTradeRecordsRequest;
                fromProtoMsg(message: _9.QueryHistoricalTradeRecordsRequestProtoMsg): _9.QueryHistoricalTradeRecordsRequest;
                toProto(message: _9.QueryHistoricalTradeRecordsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryHistoricalTradeRecordsRequest): _9.QueryHistoricalTradeRecordsRequestProtoMsg;
            };
            QueryHistoricalTradeRecordsResponse: {
                typeUrl: string;
                encode(message: _9.QueryHistoricalTradeRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryHistoricalTradeRecordsResponse;
                fromPartial(object: Partial<_9.QueryHistoricalTradeRecordsResponse>): _9.QueryHistoricalTradeRecordsResponse;
                fromAmino(object: _9.QueryHistoricalTradeRecordsResponseAmino): _9.QueryHistoricalTradeRecordsResponse;
                toAmino(message: _9.QueryHistoricalTradeRecordsResponse): _9.QueryHistoricalTradeRecordsResponseAmino;
                fromAminoMsg(object: _9.QueryHistoricalTradeRecordsResponseAminoMsg): _9.QueryHistoricalTradeRecordsResponse;
                fromProtoMsg(message: _9.QueryHistoricalTradeRecordsResponseProtoMsg): _9.QueryHistoricalTradeRecordsResponse;
                toProto(message: _9.QueryHistoricalTradeRecordsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryHistoricalTradeRecordsResponse): _9.QueryHistoricalTradeRecordsResponseProtoMsg;
            };
            TradeHistoryOptions: {
                typeUrl: string;
                encode(message: _9.TradeHistoryOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.TradeHistoryOptions;
                fromPartial(object: Partial<_9.TradeHistoryOptions>): _9.TradeHistoryOptions;
                fromAmino(object: _9.TradeHistoryOptionsAmino): _9.TradeHistoryOptions;
                toAmino(message: _9.TradeHistoryOptions): _9.TradeHistoryOptionsAmino;
                fromAminoMsg(object: _9.TradeHistoryOptionsAminoMsg): _9.TradeHistoryOptions;
                fromProtoMsg(message: _9.TradeHistoryOptionsProtoMsg): _9.TradeHistoryOptions;
                toProto(message: _9.TradeHistoryOptions): Uint8Array;
                toProtoMsg(message: _9.TradeHistoryOptions): _9.TradeHistoryOptionsProtoMsg;
            };
            QueryMarketVolatilityRequest: {
                typeUrl: string;
                encode(message: _9.QueryMarketVolatilityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryMarketVolatilityRequest;
                fromPartial(object: Partial<_9.QueryMarketVolatilityRequest>): _9.QueryMarketVolatilityRequest;
                fromAmino(object: _9.QueryMarketVolatilityRequestAmino): _9.QueryMarketVolatilityRequest;
                toAmino(message: _9.QueryMarketVolatilityRequest): _9.QueryMarketVolatilityRequestAmino;
                fromAminoMsg(object: _9.QueryMarketVolatilityRequestAminoMsg): _9.QueryMarketVolatilityRequest;
                fromProtoMsg(message: _9.QueryMarketVolatilityRequestProtoMsg): _9.QueryMarketVolatilityRequest;
                toProto(message: _9.QueryMarketVolatilityRequest): Uint8Array;
                toProtoMsg(message: _9.QueryMarketVolatilityRequest): _9.QueryMarketVolatilityRequestProtoMsg;
            };
            QueryMarketVolatilityResponse: {
                typeUrl: string;
                encode(message: _9.QueryMarketVolatilityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryMarketVolatilityResponse;
                fromPartial(object: Partial<_9.QueryMarketVolatilityResponse>): _9.QueryMarketVolatilityResponse;
                fromAmino(object: _9.QueryMarketVolatilityResponseAmino): _9.QueryMarketVolatilityResponse;
                toAmino(message: _9.QueryMarketVolatilityResponse): _9.QueryMarketVolatilityResponseAmino;
                fromAminoMsg(object: _9.QueryMarketVolatilityResponseAminoMsg): _9.QueryMarketVolatilityResponse;
                fromProtoMsg(message: _9.QueryMarketVolatilityResponseProtoMsg): _9.QueryMarketVolatilityResponse;
                toProto(message: _9.QueryMarketVolatilityResponse): Uint8Array;
                toProtoMsg(message: _9.QueryMarketVolatilityResponse): _9.QueryMarketVolatilityResponseProtoMsg;
            };
            QueryBinaryMarketsRequest: {
                typeUrl: string;
                encode(message: _9.QueryBinaryMarketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryBinaryMarketsRequest;
                fromPartial(object: Partial<_9.QueryBinaryMarketsRequest>): _9.QueryBinaryMarketsRequest;
                fromAmino(object: _9.QueryBinaryMarketsRequestAmino): _9.QueryBinaryMarketsRequest;
                toAmino(message: _9.QueryBinaryMarketsRequest): _9.QueryBinaryMarketsRequestAmino;
                fromAminoMsg(object: _9.QueryBinaryMarketsRequestAminoMsg): _9.QueryBinaryMarketsRequest;
                fromProtoMsg(message: _9.QueryBinaryMarketsRequestProtoMsg): _9.QueryBinaryMarketsRequest;
                toProto(message: _9.QueryBinaryMarketsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryBinaryMarketsRequest): _9.QueryBinaryMarketsRequestProtoMsg;
            };
            QueryBinaryMarketsResponse: {
                typeUrl: string;
                encode(message: _9.QueryBinaryMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryBinaryMarketsResponse;
                fromPartial(object: Partial<_9.QueryBinaryMarketsResponse>): _9.QueryBinaryMarketsResponse;
                fromAmino(object: _9.QueryBinaryMarketsResponseAmino): _9.QueryBinaryMarketsResponse;
                toAmino(message: _9.QueryBinaryMarketsResponse): _9.QueryBinaryMarketsResponseAmino;
                fromAminoMsg(object: _9.QueryBinaryMarketsResponseAminoMsg): _9.QueryBinaryMarketsResponse;
                fromProtoMsg(message: _9.QueryBinaryMarketsResponseProtoMsg): _9.QueryBinaryMarketsResponse;
                toProto(message: _9.QueryBinaryMarketsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryBinaryMarketsResponse): _9.QueryBinaryMarketsResponseProtoMsg;
            };
            QueryTraderDerivativeConditionalOrdersRequest: {
                typeUrl: string;
                encode(message: _9.QueryTraderDerivativeConditionalOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTraderDerivativeConditionalOrdersRequest;
                fromPartial(object: Partial<_9.QueryTraderDerivativeConditionalOrdersRequest>): _9.QueryTraderDerivativeConditionalOrdersRequest;
                fromAmino(object: _9.QueryTraderDerivativeConditionalOrdersRequestAmino): _9.QueryTraderDerivativeConditionalOrdersRequest;
                toAmino(message: _9.QueryTraderDerivativeConditionalOrdersRequest): _9.QueryTraderDerivativeConditionalOrdersRequestAmino;
                fromAminoMsg(object: _9.QueryTraderDerivativeConditionalOrdersRequestAminoMsg): _9.QueryTraderDerivativeConditionalOrdersRequest;
                fromProtoMsg(message: _9.QueryTraderDerivativeConditionalOrdersRequestProtoMsg): _9.QueryTraderDerivativeConditionalOrdersRequest;
                toProto(message: _9.QueryTraderDerivativeConditionalOrdersRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTraderDerivativeConditionalOrdersRequest): _9.QueryTraderDerivativeConditionalOrdersRequestProtoMsg;
            };
            TrimmedDerivativeConditionalOrder: {
                typeUrl: string;
                encode(message: _9.TrimmedDerivativeConditionalOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.TrimmedDerivativeConditionalOrder;
                fromPartial(object: Partial<_9.TrimmedDerivativeConditionalOrder>): _9.TrimmedDerivativeConditionalOrder;
                fromAmino(object: _9.TrimmedDerivativeConditionalOrderAmino): _9.TrimmedDerivativeConditionalOrder;
                toAmino(message: _9.TrimmedDerivativeConditionalOrder): _9.TrimmedDerivativeConditionalOrderAmino;
                fromAminoMsg(object: _9.TrimmedDerivativeConditionalOrderAminoMsg): _9.TrimmedDerivativeConditionalOrder;
                fromProtoMsg(message: _9.TrimmedDerivativeConditionalOrderProtoMsg): _9.TrimmedDerivativeConditionalOrder;
                toProto(message: _9.TrimmedDerivativeConditionalOrder): Uint8Array;
                toProtoMsg(message: _9.TrimmedDerivativeConditionalOrder): _9.TrimmedDerivativeConditionalOrderProtoMsg;
            };
            QueryTraderDerivativeConditionalOrdersResponse: {
                typeUrl: string;
                encode(message: _9.QueryTraderDerivativeConditionalOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryTraderDerivativeConditionalOrdersResponse;
                fromPartial(object: Partial<_9.QueryTraderDerivativeConditionalOrdersResponse>): _9.QueryTraderDerivativeConditionalOrdersResponse;
                fromAmino(object: _9.QueryTraderDerivativeConditionalOrdersResponseAmino): _9.QueryTraderDerivativeConditionalOrdersResponse;
                toAmino(message: _9.QueryTraderDerivativeConditionalOrdersResponse): _9.QueryTraderDerivativeConditionalOrdersResponseAmino;
                fromAminoMsg(object: _9.QueryTraderDerivativeConditionalOrdersResponseAminoMsg): _9.QueryTraderDerivativeConditionalOrdersResponse;
                fromProtoMsg(message: _9.QueryTraderDerivativeConditionalOrdersResponseProtoMsg): _9.QueryTraderDerivativeConditionalOrdersResponse;
                toProto(message: _9.QueryTraderDerivativeConditionalOrdersResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTraderDerivativeConditionalOrdersResponse): _9.QueryTraderDerivativeConditionalOrdersResponseProtoMsg;
            };
            QueryMarketAtomicExecutionFeeMultiplierRequest: {
                typeUrl: string;
                encode(message: _9.QueryMarketAtomicExecutionFeeMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryMarketAtomicExecutionFeeMultiplierRequest;
                fromPartial(object: Partial<_9.QueryMarketAtomicExecutionFeeMultiplierRequest>): _9.QueryMarketAtomicExecutionFeeMultiplierRequest;
                fromAmino(object: _9.QueryMarketAtomicExecutionFeeMultiplierRequestAmino): _9.QueryMarketAtomicExecutionFeeMultiplierRequest;
                toAmino(message: _9.QueryMarketAtomicExecutionFeeMultiplierRequest): _9.QueryMarketAtomicExecutionFeeMultiplierRequestAmino;
                fromAminoMsg(object: _9.QueryMarketAtomicExecutionFeeMultiplierRequestAminoMsg): _9.QueryMarketAtomicExecutionFeeMultiplierRequest;
                fromProtoMsg(message: _9.QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg): _9.QueryMarketAtomicExecutionFeeMultiplierRequest;
                toProto(message: _9.QueryMarketAtomicExecutionFeeMultiplierRequest): Uint8Array;
                toProtoMsg(message: _9.QueryMarketAtomicExecutionFeeMultiplierRequest): _9.QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg;
            };
            QueryMarketAtomicExecutionFeeMultiplierResponse: {
                typeUrl: string;
                encode(message: _9.QueryMarketAtomicExecutionFeeMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.QueryMarketAtomicExecutionFeeMultiplierResponse;
                fromPartial(object: Partial<_9.QueryMarketAtomicExecutionFeeMultiplierResponse>): _9.QueryMarketAtomicExecutionFeeMultiplierResponse;
                fromAmino(object: _9.QueryMarketAtomicExecutionFeeMultiplierResponseAmino): _9.QueryMarketAtomicExecutionFeeMultiplierResponse;
                toAmino(message: _9.QueryMarketAtomicExecutionFeeMultiplierResponse): _9.QueryMarketAtomicExecutionFeeMultiplierResponseAmino;
                fromAminoMsg(object: _9.QueryMarketAtomicExecutionFeeMultiplierResponseAminoMsg): _9.QueryMarketAtomicExecutionFeeMultiplierResponse;
                fromProtoMsg(message: _9.QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg): _9.QueryMarketAtomicExecutionFeeMultiplierResponse;
                toProto(message: _9.QueryMarketAtomicExecutionFeeMultiplierResponse): Uint8Array;
                toProtoMsg(message: _9.QueryMarketAtomicExecutionFeeMultiplierResponse): _9.QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.GenesisState;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            OrderbookSequence: {
                typeUrl: string;
                encode(message: _8.OrderbookSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.OrderbookSequence;
                fromPartial(object: Partial<_8.OrderbookSequence>): _8.OrderbookSequence;
                fromAmino(object: _8.OrderbookSequenceAmino): _8.OrderbookSequence;
                toAmino(message: _8.OrderbookSequence): _8.OrderbookSequenceAmino;
                fromAminoMsg(object: _8.OrderbookSequenceAminoMsg): _8.OrderbookSequence;
                fromProtoMsg(message: _8.OrderbookSequenceProtoMsg): _8.OrderbookSequence;
                toProto(message: _8.OrderbookSequence): Uint8Array;
                toProtoMsg(message: _8.OrderbookSequence): _8.OrderbookSequenceProtoMsg;
            };
            FeeDiscountAccountTierTTL: {
                typeUrl: string;
                encode(message: _8.FeeDiscountAccountTierTTL, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.FeeDiscountAccountTierTTL;
                fromPartial(object: Partial<_8.FeeDiscountAccountTierTTL>): _8.FeeDiscountAccountTierTTL;
                fromAmino(object: _8.FeeDiscountAccountTierTTLAmino): _8.FeeDiscountAccountTierTTL;
                toAmino(message: _8.FeeDiscountAccountTierTTL): _8.FeeDiscountAccountTierTTLAmino;
                fromAminoMsg(object: _8.FeeDiscountAccountTierTTLAminoMsg): _8.FeeDiscountAccountTierTTL;
                fromProtoMsg(message: _8.FeeDiscountAccountTierTTLProtoMsg): _8.FeeDiscountAccountTierTTL;
                toProto(message: _8.FeeDiscountAccountTierTTL): Uint8Array;
                toProtoMsg(message: _8.FeeDiscountAccountTierTTL): _8.FeeDiscountAccountTierTTLProtoMsg;
            };
            FeeDiscountBucketVolumeAccounts: {
                typeUrl: string;
                encode(message: _8.FeeDiscountBucketVolumeAccounts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.FeeDiscountBucketVolumeAccounts;
                fromPartial(object: Partial<_8.FeeDiscountBucketVolumeAccounts>): _8.FeeDiscountBucketVolumeAccounts;
                fromAmino(object: _8.FeeDiscountBucketVolumeAccountsAmino): _8.FeeDiscountBucketVolumeAccounts;
                toAmino(message: _8.FeeDiscountBucketVolumeAccounts): _8.FeeDiscountBucketVolumeAccountsAmino;
                fromAminoMsg(object: _8.FeeDiscountBucketVolumeAccountsAminoMsg): _8.FeeDiscountBucketVolumeAccounts;
                fromProtoMsg(message: _8.FeeDiscountBucketVolumeAccountsProtoMsg): _8.FeeDiscountBucketVolumeAccounts;
                toProto(message: _8.FeeDiscountBucketVolumeAccounts): Uint8Array;
                toProtoMsg(message: _8.FeeDiscountBucketVolumeAccounts): _8.FeeDiscountBucketVolumeAccountsProtoMsg;
            };
            AccountVolume: {
                typeUrl: string;
                encode(message: _8.AccountVolume, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.AccountVolume;
                fromPartial(object: Partial<_8.AccountVolume>): _8.AccountVolume;
                fromAmino(object: _8.AccountVolumeAmino): _8.AccountVolume;
                toAmino(message: _8.AccountVolume): _8.AccountVolumeAmino;
                fromAminoMsg(object: _8.AccountVolumeAminoMsg): _8.AccountVolume;
                fromProtoMsg(message: _8.AccountVolumeProtoMsg): _8.AccountVolume;
                toProto(message: _8.AccountVolume): Uint8Array;
                toProtoMsg(message: _8.AccountVolume): _8.AccountVolumeProtoMsg;
            };
            TradingRewardCampaignAccountPoints: {
                typeUrl: string;
                encode(message: _8.TradingRewardCampaignAccountPoints, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.TradingRewardCampaignAccountPoints;
                fromPartial(object: Partial<_8.TradingRewardCampaignAccountPoints>): _8.TradingRewardCampaignAccountPoints;
                fromAmino(object: _8.TradingRewardCampaignAccountPointsAmino): _8.TradingRewardCampaignAccountPoints;
                toAmino(message: _8.TradingRewardCampaignAccountPoints): _8.TradingRewardCampaignAccountPointsAmino;
                fromAminoMsg(object: _8.TradingRewardCampaignAccountPointsAminoMsg): _8.TradingRewardCampaignAccountPoints;
                fromProtoMsg(message: _8.TradingRewardCampaignAccountPointsProtoMsg): _8.TradingRewardCampaignAccountPoints;
                toProto(message: _8.TradingRewardCampaignAccountPoints): Uint8Array;
                toProtoMsg(message: _8.TradingRewardCampaignAccountPoints): _8.TradingRewardCampaignAccountPointsProtoMsg;
            };
            TradingRewardCampaignAccountPendingPoints: {
                typeUrl: string;
                encode(message: _8.TradingRewardCampaignAccountPendingPoints, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.TradingRewardCampaignAccountPendingPoints;
                fromPartial(object: Partial<_8.TradingRewardCampaignAccountPendingPoints>): _8.TradingRewardCampaignAccountPendingPoints;
                fromAmino(object: _8.TradingRewardCampaignAccountPendingPointsAmino): _8.TradingRewardCampaignAccountPendingPoints;
                toAmino(message: _8.TradingRewardCampaignAccountPendingPoints): _8.TradingRewardCampaignAccountPendingPointsAmino;
                fromAminoMsg(object: _8.TradingRewardCampaignAccountPendingPointsAminoMsg): _8.TradingRewardCampaignAccountPendingPoints;
                fromProtoMsg(message: _8.TradingRewardCampaignAccountPendingPointsProtoMsg): _8.TradingRewardCampaignAccountPendingPoints;
                toProto(message: _8.TradingRewardCampaignAccountPendingPoints): Uint8Array;
                toProtoMsg(message: _8.TradingRewardCampaignAccountPendingPoints): _8.TradingRewardCampaignAccountPendingPointsProtoMsg;
            };
            SpotOrderBook: {
                typeUrl: string;
                encode(message: _8.SpotOrderBook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.SpotOrderBook;
                fromPartial(object: Partial<_8.SpotOrderBook>): _8.SpotOrderBook;
                fromAmino(object: _8.SpotOrderBookAmino): _8.SpotOrderBook;
                toAmino(message: _8.SpotOrderBook): _8.SpotOrderBookAmino;
                fromAminoMsg(object: _8.SpotOrderBookAminoMsg): _8.SpotOrderBook;
                fromProtoMsg(message: _8.SpotOrderBookProtoMsg): _8.SpotOrderBook;
                toProto(message: _8.SpotOrderBook): Uint8Array;
                toProtoMsg(message: _8.SpotOrderBook): _8.SpotOrderBookProtoMsg;
            };
            DerivativeOrderBook: {
                typeUrl: string;
                encode(message: _8.DerivativeOrderBook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.DerivativeOrderBook;
                fromPartial(object: Partial<_8.DerivativeOrderBook>): _8.DerivativeOrderBook;
                fromAmino(object: _8.DerivativeOrderBookAmino): _8.DerivativeOrderBook;
                toAmino(message: _8.DerivativeOrderBook): _8.DerivativeOrderBookAmino;
                fromAminoMsg(object: _8.DerivativeOrderBookAminoMsg): _8.DerivativeOrderBook;
                fromProtoMsg(message: _8.DerivativeOrderBookProtoMsg): _8.DerivativeOrderBook;
                toProto(message: _8.DerivativeOrderBook): Uint8Array;
                toProtoMsg(message: _8.DerivativeOrderBook): _8.DerivativeOrderBookProtoMsg;
            };
            ConditionalDerivativeOrderBook: {
                typeUrl: string;
                encode(message: _8.ConditionalDerivativeOrderBook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ConditionalDerivativeOrderBook;
                fromPartial(object: Partial<_8.ConditionalDerivativeOrderBook>): _8.ConditionalDerivativeOrderBook;
                fromAmino(object: _8.ConditionalDerivativeOrderBookAmino): _8.ConditionalDerivativeOrderBook;
                toAmino(message: _8.ConditionalDerivativeOrderBook): _8.ConditionalDerivativeOrderBookAmino;
                fromAminoMsg(object: _8.ConditionalDerivativeOrderBookAminoMsg): _8.ConditionalDerivativeOrderBook;
                fromProtoMsg(message: _8.ConditionalDerivativeOrderBookProtoMsg): _8.ConditionalDerivativeOrderBook;
                toProto(message: _8.ConditionalDerivativeOrderBook): Uint8Array;
                toProtoMsg(message: _8.ConditionalDerivativeOrderBook): _8.ConditionalDerivativeOrderBookProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _8.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Balance;
                fromPartial(object: Partial<_8.Balance>): _8.Balance;
                fromAmino(object: _8.BalanceAmino): _8.Balance;
                toAmino(message: _8.Balance): _8.BalanceAmino;
                fromAminoMsg(object: _8.BalanceAminoMsg): _8.Balance;
                fromProtoMsg(message: _8.BalanceProtoMsg): _8.Balance;
                toProto(message: _8.Balance): Uint8Array;
                toProtoMsg(message: _8.Balance): _8.BalanceProtoMsg;
            };
            DerivativePosition: {
                typeUrl: string;
                encode(message: _8.DerivativePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.DerivativePosition;
                fromPartial(object: Partial<_8.DerivativePosition>): _8.DerivativePosition;
                fromAmino(object: _8.DerivativePositionAmino): _8.DerivativePosition;
                toAmino(message: _8.DerivativePosition): _8.DerivativePositionAmino;
                fromAminoMsg(object: _8.DerivativePositionAminoMsg): _8.DerivativePosition;
                fromProtoMsg(message: _8.DerivativePositionProtoMsg): _8.DerivativePosition;
                toProto(message: _8.DerivativePosition): Uint8Array;
                toProtoMsg(message: _8.DerivativePosition): _8.DerivativePositionProtoMsg;
            };
            SubaccountNonce: {
                typeUrl: string;
                encode(message: _8.SubaccountNonce, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.SubaccountNonce;
                fromPartial(object: Partial<_8.SubaccountNonce>): _8.SubaccountNonce;
                fromAmino(object: _8.SubaccountNonceAmino): _8.SubaccountNonce;
                toAmino(message: _8.SubaccountNonce): _8.SubaccountNonceAmino;
                fromAminoMsg(object: _8.SubaccountNonceAminoMsg): _8.SubaccountNonce;
                fromProtoMsg(message: _8.SubaccountNonceProtoMsg): _8.SubaccountNonce;
                toProto(message: _8.SubaccountNonce): Uint8Array;
                toProtoMsg(message: _8.SubaccountNonce): _8.SubaccountNonceProtoMsg;
            };
            ExpiryFuturesMarketInfoState: {
                typeUrl: string;
                encode(message: _8.ExpiryFuturesMarketInfoState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ExpiryFuturesMarketInfoState;
                fromPartial(object: Partial<_8.ExpiryFuturesMarketInfoState>): _8.ExpiryFuturesMarketInfoState;
                fromAmino(object: _8.ExpiryFuturesMarketInfoStateAmino): _8.ExpiryFuturesMarketInfoState;
                toAmino(message: _8.ExpiryFuturesMarketInfoState): _8.ExpiryFuturesMarketInfoStateAmino;
                fromAminoMsg(object: _8.ExpiryFuturesMarketInfoStateAminoMsg): _8.ExpiryFuturesMarketInfoState;
                fromProtoMsg(message: _8.ExpiryFuturesMarketInfoStateProtoMsg): _8.ExpiryFuturesMarketInfoState;
                toProto(message: _8.ExpiryFuturesMarketInfoState): Uint8Array;
                toProtoMsg(message: _8.ExpiryFuturesMarketInfoState): _8.ExpiryFuturesMarketInfoStateProtoMsg;
            };
            PerpetualMarketFundingState: {
                typeUrl: string;
                encode(message: _8.PerpetualMarketFundingState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.PerpetualMarketFundingState;
                fromPartial(object: Partial<_8.PerpetualMarketFundingState>): _8.PerpetualMarketFundingState;
                fromAmino(object: _8.PerpetualMarketFundingStateAmino): _8.PerpetualMarketFundingState;
                toAmino(message: _8.PerpetualMarketFundingState): _8.PerpetualMarketFundingStateAmino;
                fromAminoMsg(object: _8.PerpetualMarketFundingStateAminoMsg): _8.PerpetualMarketFundingState;
                fromProtoMsg(message: _8.PerpetualMarketFundingStateProtoMsg): _8.PerpetualMarketFundingState;
                toProto(message: _8.PerpetualMarketFundingState): Uint8Array;
                toProtoMsg(message: _8.PerpetualMarketFundingState): _8.PerpetualMarketFundingStateProtoMsg;
            };
            atomicMarketOrderAccessLevelFromJSON(object: any): _7.AtomicMarketOrderAccessLevel;
            atomicMarketOrderAccessLevelToJSON(object: _7.AtomicMarketOrderAccessLevel): string;
            marketStatusFromJSON(object: any): _7.MarketStatus;
            marketStatusToJSON(object: _7.MarketStatus): string;
            orderTypeFromJSON(object: any): _7.OrderType;
            orderTypeToJSON(object: _7.OrderType): string;
            executionTypeFromJSON(object: any): _7.ExecutionType;
            executionTypeToJSON(object: _7.ExecutionType): string;
            orderMaskFromJSON(object: any): _7.OrderMask;
            orderMaskToJSON(object: _7.OrderMask): string;
            AtomicMarketOrderAccessLevel: typeof _7.AtomicMarketOrderAccessLevel;
            AtomicMarketOrderAccessLevelSDKType: typeof _7.AtomicMarketOrderAccessLevel;
            AtomicMarketOrderAccessLevelAmino: typeof _7.AtomicMarketOrderAccessLevel;
            MarketStatus: typeof _7.MarketStatus;
            MarketStatusSDKType: typeof _7.MarketStatus;
            MarketStatusAmino: typeof _7.MarketStatus;
            OrderType: typeof _7.OrderType;
            OrderTypeSDKType: typeof _7.OrderType;
            OrderTypeAmino: typeof _7.OrderType;
            ExecutionType: typeof _7.ExecutionType;
            ExecutionTypeSDKType: typeof _7.ExecutionType;
            ExecutionTypeAmino: typeof _7.ExecutionType;
            OrderMask: typeof _7.OrderMask;
            OrderMaskSDKType: typeof _7.OrderMask;
            OrderMaskAmino: typeof _7.OrderMask;
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
            MarketFeeMultiplier: {
                typeUrl: string;
                encode(message: _7.MarketFeeMultiplier, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MarketFeeMultiplier;
                fromPartial(object: Partial<_7.MarketFeeMultiplier>): _7.MarketFeeMultiplier;
                fromAmino(object: _7.MarketFeeMultiplierAmino): _7.MarketFeeMultiplier;
                toAmino(message: _7.MarketFeeMultiplier): _7.MarketFeeMultiplierAmino;
                fromAminoMsg(object: _7.MarketFeeMultiplierAminoMsg): _7.MarketFeeMultiplier;
                fromProtoMsg(message: _7.MarketFeeMultiplierProtoMsg): _7.MarketFeeMultiplier;
                toProto(message: _7.MarketFeeMultiplier): Uint8Array;
                toProtoMsg(message: _7.MarketFeeMultiplier): _7.MarketFeeMultiplierProtoMsg;
            };
            DerivativeMarket: {
                typeUrl: string;
                encode(message: _7.DerivativeMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DerivativeMarket;
                fromPartial(object: Partial<_7.DerivativeMarket>): _7.DerivativeMarket;
                fromAmino(object: _7.DerivativeMarketAmino): _7.DerivativeMarket;
                toAmino(message: _7.DerivativeMarket): _7.DerivativeMarketAmino;
                fromAminoMsg(object: _7.DerivativeMarketAminoMsg): _7.DerivativeMarket;
                fromProtoMsg(message: _7.DerivativeMarketProtoMsg): _7.DerivativeMarket;
                toProto(message: _7.DerivativeMarket): Uint8Array;
                toProtoMsg(message: _7.DerivativeMarket): _7.DerivativeMarketProtoMsg;
            };
            BinaryOptionsMarket: {
                typeUrl: string;
                encode(message: _7.BinaryOptionsMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.BinaryOptionsMarket;
                fromPartial(object: Partial<_7.BinaryOptionsMarket>): _7.BinaryOptionsMarket;
                fromAmino(object: _7.BinaryOptionsMarketAmino): _7.BinaryOptionsMarket;
                toAmino(message: _7.BinaryOptionsMarket): _7.BinaryOptionsMarketAmino;
                fromAminoMsg(object: _7.BinaryOptionsMarketAminoMsg): _7.BinaryOptionsMarket;
                fromProtoMsg(message: _7.BinaryOptionsMarketProtoMsg): _7.BinaryOptionsMarket;
                toProto(message: _7.BinaryOptionsMarket): Uint8Array;
                toProtoMsg(message: _7.BinaryOptionsMarket): _7.BinaryOptionsMarketProtoMsg;
            };
            ExpiryFuturesMarketInfo: {
                typeUrl: string;
                encode(message: _7.ExpiryFuturesMarketInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ExpiryFuturesMarketInfo;
                fromPartial(object: Partial<_7.ExpiryFuturesMarketInfo>): _7.ExpiryFuturesMarketInfo;
                fromAmino(object: _7.ExpiryFuturesMarketInfoAmino): _7.ExpiryFuturesMarketInfo;
                toAmino(message: _7.ExpiryFuturesMarketInfo): _7.ExpiryFuturesMarketInfoAmino;
                fromAminoMsg(object: _7.ExpiryFuturesMarketInfoAminoMsg): _7.ExpiryFuturesMarketInfo;
                fromProtoMsg(message: _7.ExpiryFuturesMarketInfoProtoMsg): _7.ExpiryFuturesMarketInfo;
                toProto(message: _7.ExpiryFuturesMarketInfo): Uint8Array;
                toProtoMsg(message: _7.ExpiryFuturesMarketInfo): _7.ExpiryFuturesMarketInfoProtoMsg;
            };
            PerpetualMarketInfo: {
                typeUrl: string;
                encode(message: _7.PerpetualMarketInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PerpetualMarketInfo;
                fromPartial(object: Partial<_7.PerpetualMarketInfo>): _7.PerpetualMarketInfo;
                fromAmino(object: _7.PerpetualMarketInfoAmino): _7.PerpetualMarketInfo;
                toAmino(message: _7.PerpetualMarketInfo): _7.PerpetualMarketInfoAmino;
                fromAminoMsg(object: _7.PerpetualMarketInfoAminoMsg): _7.PerpetualMarketInfo;
                fromProtoMsg(message: _7.PerpetualMarketInfoProtoMsg): _7.PerpetualMarketInfo;
                toProto(message: _7.PerpetualMarketInfo): Uint8Array;
                toProtoMsg(message: _7.PerpetualMarketInfo): _7.PerpetualMarketInfoProtoMsg;
            };
            PerpetualMarketFunding: {
                typeUrl: string;
                encode(message: _7.PerpetualMarketFunding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PerpetualMarketFunding;
                fromPartial(object: Partial<_7.PerpetualMarketFunding>): _7.PerpetualMarketFunding;
                fromAmino(object: _7.PerpetualMarketFundingAmino): _7.PerpetualMarketFunding;
                toAmino(message: _7.PerpetualMarketFunding): _7.PerpetualMarketFundingAmino;
                fromAminoMsg(object: _7.PerpetualMarketFundingAminoMsg): _7.PerpetualMarketFunding;
                fromProtoMsg(message: _7.PerpetualMarketFundingProtoMsg): _7.PerpetualMarketFunding;
                toProto(message: _7.PerpetualMarketFunding): Uint8Array;
                toProtoMsg(message: _7.PerpetualMarketFunding): _7.PerpetualMarketFundingProtoMsg;
            };
            DerivativeMarketSettlementInfo: {
                typeUrl: string;
                encode(message: _7.DerivativeMarketSettlementInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DerivativeMarketSettlementInfo;
                fromPartial(object: Partial<_7.DerivativeMarketSettlementInfo>): _7.DerivativeMarketSettlementInfo;
                fromAmino(object: _7.DerivativeMarketSettlementInfoAmino): _7.DerivativeMarketSettlementInfo;
                toAmino(message: _7.DerivativeMarketSettlementInfo): _7.DerivativeMarketSettlementInfoAmino;
                fromAminoMsg(object: _7.DerivativeMarketSettlementInfoAminoMsg): _7.DerivativeMarketSettlementInfo;
                fromProtoMsg(message: _7.DerivativeMarketSettlementInfoProtoMsg): _7.DerivativeMarketSettlementInfo;
                toProto(message: _7.DerivativeMarketSettlementInfo): Uint8Array;
                toProtoMsg(message: _7.DerivativeMarketSettlementInfo): _7.DerivativeMarketSettlementInfoProtoMsg;
            };
            NextFundingTimestamp: {
                typeUrl: string;
                encode(message: _7.NextFundingTimestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.NextFundingTimestamp;
                fromPartial(object: Partial<_7.NextFundingTimestamp>): _7.NextFundingTimestamp;
                fromAmino(object: _7.NextFundingTimestampAmino): _7.NextFundingTimestamp;
                toAmino(message: _7.NextFundingTimestamp): _7.NextFundingTimestampAmino;
                fromAminoMsg(object: _7.NextFundingTimestampAminoMsg): _7.NextFundingTimestamp;
                fromProtoMsg(message: _7.NextFundingTimestampProtoMsg): _7.NextFundingTimestamp;
                toProto(message: _7.NextFundingTimestamp): Uint8Array;
                toProtoMsg(message: _7.NextFundingTimestamp): _7.NextFundingTimestampProtoMsg;
            };
            MidPriceAndTOB: {
                typeUrl: string;
                encode(message: _7.MidPriceAndTOB, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MidPriceAndTOB;
                fromPartial(object: Partial<_7.MidPriceAndTOB>): _7.MidPriceAndTOB;
                fromAmino(object: _7.MidPriceAndTOBAmino): _7.MidPriceAndTOB;
                toAmino(message: _7.MidPriceAndTOB): _7.MidPriceAndTOBAmino;
                fromAminoMsg(object: _7.MidPriceAndTOBAminoMsg): _7.MidPriceAndTOB;
                fromProtoMsg(message: _7.MidPriceAndTOBProtoMsg): _7.MidPriceAndTOB;
                toProto(message: _7.MidPriceAndTOB): Uint8Array;
                toProtoMsg(message: _7.MidPriceAndTOB): _7.MidPriceAndTOBProtoMsg;
            };
            SpotMarket: {
                typeUrl: string;
                encode(message: _7.SpotMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SpotMarket;
                fromPartial(object: Partial<_7.SpotMarket>): _7.SpotMarket;
                fromAmino(object: _7.SpotMarketAmino): _7.SpotMarket;
                toAmino(message: _7.SpotMarket): _7.SpotMarketAmino;
                fromAminoMsg(object: _7.SpotMarketAminoMsg): _7.SpotMarket;
                fromProtoMsg(message: _7.SpotMarketProtoMsg): _7.SpotMarket;
                toProto(message: _7.SpotMarket): Uint8Array;
                toProtoMsg(message: _7.SpotMarket): _7.SpotMarketProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _7.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Deposit;
                fromPartial(object: Partial<_7.Deposit>): _7.Deposit;
                fromAmino(object: _7.DepositAmino): _7.Deposit;
                toAmino(message: _7.Deposit): _7.DepositAmino;
                fromAminoMsg(object: _7.DepositAminoMsg): _7.Deposit;
                fromProtoMsg(message: _7.DepositProtoMsg): _7.Deposit;
                toProto(message: _7.Deposit): Uint8Array;
                toProtoMsg(message: _7.Deposit): _7.DepositProtoMsg;
            };
            SubaccountTradeNonce: {
                typeUrl: string;
                encode(message: _7.SubaccountTradeNonce, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SubaccountTradeNonce;
                fromPartial(object: Partial<_7.SubaccountTradeNonce>): _7.SubaccountTradeNonce;
                fromAmino(object: _7.SubaccountTradeNonceAmino): _7.SubaccountTradeNonce;
                toAmino(message: _7.SubaccountTradeNonce): _7.SubaccountTradeNonceAmino;
                fromAminoMsg(object: _7.SubaccountTradeNonceAminoMsg): _7.SubaccountTradeNonce;
                fromProtoMsg(message: _7.SubaccountTradeNonceProtoMsg): _7.SubaccountTradeNonce;
                toProto(message: _7.SubaccountTradeNonce): Uint8Array;
                toProtoMsg(message: _7.SubaccountTradeNonce): _7.SubaccountTradeNonceProtoMsg;
            };
            OrderInfo: {
                typeUrl: string;
                encode(message: _7.OrderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.OrderInfo;
                fromPartial(object: Partial<_7.OrderInfo>): _7.OrderInfo;
                fromAmino(object: _7.OrderInfoAmino): _7.OrderInfo;
                toAmino(message: _7.OrderInfo): _7.OrderInfoAmino;
                fromAminoMsg(object: _7.OrderInfoAminoMsg): _7.OrderInfo;
                fromProtoMsg(message: _7.OrderInfoProtoMsg): _7.OrderInfo;
                toProto(message: _7.OrderInfo): Uint8Array;
                toProtoMsg(message: _7.OrderInfo): _7.OrderInfoProtoMsg;
            };
            SpotOrder: {
                typeUrl: string;
                encode(message: _7.SpotOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SpotOrder;
                fromPartial(object: Partial<_7.SpotOrder>): _7.SpotOrder;
                fromAmino(object: _7.SpotOrderAmino): _7.SpotOrder;
                toAmino(message: _7.SpotOrder): _7.SpotOrderAmino;
                fromAminoMsg(object: _7.SpotOrderAminoMsg): _7.SpotOrder;
                fromProtoMsg(message: _7.SpotOrderProtoMsg): _7.SpotOrder;
                toProto(message: _7.SpotOrder): Uint8Array;
                toProtoMsg(message: _7.SpotOrder): _7.SpotOrderProtoMsg;
            };
            SpotLimitOrder: {
                typeUrl: string;
                encode(message: _7.SpotLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SpotLimitOrder;
                fromPartial(object: Partial<_7.SpotLimitOrder>): _7.SpotLimitOrder;
                fromAmino(object: _7.SpotLimitOrderAmino): _7.SpotLimitOrder;
                toAmino(message: _7.SpotLimitOrder): _7.SpotLimitOrderAmino;
                fromAminoMsg(object: _7.SpotLimitOrderAminoMsg): _7.SpotLimitOrder;
                fromProtoMsg(message: _7.SpotLimitOrderProtoMsg): _7.SpotLimitOrder;
                toProto(message: _7.SpotLimitOrder): Uint8Array;
                toProtoMsg(message: _7.SpotLimitOrder): _7.SpotLimitOrderProtoMsg;
            };
            SpotMarketOrder: {
                typeUrl: string;
                encode(message: _7.SpotMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SpotMarketOrder;
                fromPartial(object: Partial<_7.SpotMarketOrder>): _7.SpotMarketOrder;
                fromAmino(object: _7.SpotMarketOrderAmino): _7.SpotMarketOrder;
                toAmino(message: _7.SpotMarketOrder): _7.SpotMarketOrderAmino;
                fromAminoMsg(object: _7.SpotMarketOrderAminoMsg): _7.SpotMarketOrder;
                fromProtoMsg(message: _7.SpotMarketOrderProtoMsg): _7.SpotMarketOrder;
                toProto(message: _7.SpotMarketOrder): Uint8Array;
                toProtoMsg(message: _7.SpotMarketOrder): _7.SpotMarketOrderProtoMsg;
            };
            DerivativeOrder: {
                typeUrl: string;
                encode(message: _7.DerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DerivativeOrder;
                fromPartial(object: Partial<_7.DerivativeOrder>): _7.DerivativeOrder;
                fromAmino(object: _7.DerivativeOrderAmino): _7.DerivativeOrder;
                toAmino(message: _7.DerivativeOrder): _7.DerivativeOrderAmino;
                fromAminoMsg(object: _7.DerivativeOrderAminoMsg): _7.DerivativeOrder;
                fromProtoMsg(message: _7.DerivativeOrderProtoMsg): _7.DerivativeOrder;
                toProto(message: _7.DerivativeOrder): Uint8Array;
                toProtoMsg(message: _7.DerivativeOrder): _7.DerivativeOrderProtoMsg;
            };
            SubaccountOrderbookMetadata: {
                typeUrl: string;
                encode(message: _7.SubaccountOrderbookMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SubaccountOrderbookMetadata;
                fromPartial(object: Partial<_7.SubaccountOrderbookMetadata>): _7.SubaccountOrderbookMetadata;
                fromAmino(object: _7.SubaccountOrderbookMetadataAmino): _7.SubaccountOrderbookMetadata;
                toAmino(message: _7.SubaccountOrderbookMetadata): _7.SubaccountOrderbookMetadataAmino;
                fromAminoMsg(object: _7.SubaccountOrderbookMetadataAminoMsg): _7.SubaccountOrderbookMetadata;
                fromProtoMsg(message: _7.SubaccountOrderbookMetadataProtoMsg): _7.SubaccountOrderbookMetadata;
                toProto(message: _7.SubaccountOrderbookMetadata): Uint8Array;
                toProtoMsg(message: _7.SubaccountOrderbookMetadata): _7.SubaccountOrderbookMetadataProtoMsg;
            };
            SubaccountOrder: {
                typeUrl: string;
                encode(message: _7.SubaccountOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SubaccountOrder;
                fromPartial(object: Partial<_7.SubaccountOrder>): _7.SubaccountOrder;
                fromAmino(object: _7.SubaccountOrderAmino): _7.SubaccountOrder;
                toAmino(message: _7.SubaccountOrder): _7.SubaccountOrderAmino;
                fromAminoMsg(object: _7.SubaccountOrderAminoMsg): _7.SubaccountOrder;
                fromProtoMsg(message: _7.SubaccountOrderProtoMsg): _7.SubaccountOrder;
                toProto(message: _7.SubaccountOrder): Uint8Array;
                toProtoMsg(message: _7.SubaccountOrder): _7.SubaccountOrderProtoMsg;
            };
            SubaccountOrderData: {
                typeUrl: string;
                encode(message: _7.SubaccountOrderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SubaccountOrderData;
                fromPartial(object: Partial<_7.SubaccountOrderData>): _7.SubaccountOrderData;
                fromAmino(object: _7.SubaccountOrderDataAmino): _7.SubaccountOrderData;
                toAmino(message: _7.SubaccountOrderData): _7.SubaccountOrderDataAmino;
                fromAminoMsg(object: _7.SubaccountOrderDataAminoMsg): _7.SubaccountOrderData;
                fromProtoMsg(message: _7.SubaccountOrderDataProtoMsg): _7.SubaccountOrderData;
                toProto(message: _7.SubaccountOrderData): Uint8Array;
                toProtoMsg(message: _7.SubaccountOrderData): _7.SubaccountOrderDataProtoMsg;
            };
            DerivativeLimitOrder: {
                typeUrl: string;
                encode(message: _7.DerivativeLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DerivativeLimitOrder;
                fromPartial(object: Partial<_7.DerivativeLimitOrder>): _7.DerivativeLimitOrder;
                fromAmino(object: _7.DerivativeLimitOrderAmino): _7.DerivativeLimitOrder;
                toAmino(message: _7.DerivativeLimitOrder): _7.DerivativeLimitOrderAmino;
                fromAminoMsg(object: _7.DerivativeLimitOrderAminoMsg): _7.DerivativeLimitOrder;
                fromProtoMsg(message: _7.DerivativeLimitOrderProtoMsg): _7.DerivativeLimitOrder;
                toProto(message: _7.DerivativeLimitOrder): Uint8Array;
                toProtoMsg(message: _7.DerivativeLimitOrder): _7.DerivativeLimitOrderProtoMsg;
            };
            DerivativeMarketOrder: {
                typeUrl: string;
                encode(message: _7.DerivativeMarketOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DerivativeMarketOrder;
                fromPartial(object: Partial<_7.DerivativeMarketOrder>): _7.DerivativeMarketOrder;
                fromAmino(object: _7.DerivativeMarketOrderAmino): _7.DerivativeMarketOrder;
                toAmino(message: _7.DerivativeMarketOrder): _7.DerivativeMarketOrderAmino;
                fromAminoMsg(object: _7.DerivativeMarketOrderAminoMsg): _7.DerivativeMarketOrder;
                fromProtoMsg(message: _7.DerivativeMarketOrderProtoMsg): _7.DerivativeMarketOrder;
                toProto(message: _7.DerivativeMarketOrder): Uint8Array;
                toProtoMsg(message: _7.DerivativeMarketOrder): _7.DerivativeMarketOrderProtoMsg;
            };
            Position: {
                typeUrl: string;
                encode(message: _7.Position, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Position;
                fromPartial(object: Partial<_7.Position>): _7.Position;
                fromAmino(object: _7.PositionAmino): _7.Position;
                toAmino(message: _7.Position): _7.PositionAmino;
                fromAminoMsg(object: _7.PositionAminoMsg): _7.Position;
                fromProtoMsg(message: _7.PositionProtoMsg): _7.Position;
                toProto(message: _7.Position): Uint8Array;
                toProtoMsg(message: _7.Position): _7.PositionProtoMsg;
            };
            MarketOrderIndicator: {
                typeUrl: string;
                encode(message: _7.MarketOrderIndicator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MarketOrderIndicator;
                fromPartial(object: Partial<_7.MarketOrderIndicator>): _7.MarketOrderIndicator;
                fromAmino(object: _7.MarketOrderIndicatorAmino): _7.MarketOrderIndicator;
                toAmino(message: _7.MarketOrderIndicator): _7.MarketOrderIndicatorAmino;
                fromAminoMsg(object: _7.MarketOrderIndicatorAminoMsg): _7.MarketOrderIndicator;
                fromProtoMsg(message: _7.MarketOrderIndicatorProtoMsg): _7.MarketOrderIndicator;
                toProto(message: _7.MarketOrderIndicator): Uint8Array;
                toProtoMsg(message: _7.MarketOrderIndicator): _7.MarketOrderIndicatorProtoMsg;
            };
            TradeLog: {
                typeUrl: string;
                encode(message: _7.TradeLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.TradeLog;
                fromPartial(object: Partial<_7.TradeLog>): _7.TradeLog;
                fromAmino(object: _7.TradeLogAmino): _7.TradeLog;
                toAmino(message: _7.TradeLog): _7.TradeLogAmino;
                fromAminoMsg(object: _7.TradeLogAminoMsg): _7.TradeLog;
                fromProtoMsg(message: _7.TradeLogProtoMsg): _7.TradeLog;
                toProto(message: _7.TradeLog): Uint8Array;
                toProtoMsg(message: _7.TradeLog): _7.TradeLogProtoMsg;
            };
            PositionDelta: {
                typeUrl: string;
                encode(message: _7.PositionDelta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PositionDelta;
                fromPartial(object: Partial<_7.PositionDelta>): _7.PositionDelta;
                fromAmino(object: _7.PositionDeltaAmino): _7.PositionDelta;
                toAmino(message: _7.PositionDelta): _7.PositionDeltaAmino;
                fromAminoMsg(object: _7.PositionDeltaAminoMsg): _7.PositionDelta;
                fromProtoMsg(message: _7.PositionDeltaProtoMsg): _7.PositionDelta;
                toProto(message: _7.PositionDelta): Uint8Array;
                toProtoMsg(message: _7.PositionDelta): _7.PositionDeltaProtoMsg;
            };
            DerivativeTradeLog: {
                typeUrl: string;
                encode(message: _7.DerivativeTradeLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DerivativeTradeLog;
                fromPartial(object: Partial<_7.DerivativeTradeLog>): _7.DerivativeTradeLog;
                fromAmino(object: _7.DerivativeTradeLogAmino): _7.DerivativeTradeLog;
                toAmino(message: _7.DerivativeTradeLog): _7.DerivativeTradeLogAmino;
                fromAminoMsg(object: _7.DerivativeTradeLogAminoMsg): _7.DerivativeTradeLog;
                fromProtoMsg(message: _7.DerivativeTradeLogProtoMsg): _7.DerivativeTradeLog;
                toProto(message: _7.DerivativeTradeLog): Uint8Array;
                toProtoMsg(message: _7.DerivativeTradeLog): _7.DerivativeTradeLogProtoMsg;
            };
            SubaccountPosition: {
                typeUrl: string;
                encode(message: _7.SubaccountPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SubaccountPosition;
                fromPartial(object: Partial<_7.SubaccountPosition>): _7.SubaccountPosition;
                fromAmino(object: _7.SubaccountPositionAmino): _7.SubaccountPosition;
                toAmino(message: _7.SubaccountPosition): _7.SubaccountPositionAmino;
                fromAminoMsg(object: _7.SubaccountPositionAminoMsg): _7.SubaccountPosition;
                fromProtoMsg(message: _7.SubaccountPositionProtoMsg): _7.SubaccountPosition;
                toProto(message: _7.SubaccountPosition): Uint8Array;
                toProtoMsg(message: _7.SubaccountPosition): _7.SubaccountPositionProtoMsg;
            };
            SubaccountDeposit: {
                typeUrl: string;
                encode(message: _7.SubaccountDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SubaccountDeposit;
                fromPartial(object: Partial<_7.SubaccountDeposit>): _7.SubaccountDeposit;
                fromAmino(object: _7.SubaccountDepositAmino): _7.SubaccountDeposit;
                toAmino(message: _7.SubaccountDeposit): _7.SubaccountDepositAmino;
                fromAminoMsg(object: _7.SubaccountDepositAminoMsg): _7.SubaccountDeposit;
                fromProtoMsg(message: _7.SubaccountDepositProtoMsg): _7.SubaccountDeposit;
                toProto(message: _7.SubaccountDeposit): Uint8Array;
                toProtoMsg(message: _7.SubaccountDeposit): _7.SubaccountDepositProtoMsg;
            };
            DepositUpdate: {
                typeUrl: string;
                encode(message: _7.DepositUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DepositUpdate;
                fromPartial(object: Partial<_7.DepositUpdate>): _7.DepositUpdate;
                fromAmino(object: _7.DepositUpdateAmino): _7.DepositUpdate;
                toAmino(message: _7.DepositUpdate): _7.DepositUpdateAmino;
                fromAminoMsg(object: _7.DepositUpdateAminoMsg): _7.DepositUpdate;
                fromProtoMsg(message: _7.DepositUpdateProtoMsg): _7.DepositUpdate;
                toProto(message: _7.DepositUpdate): Uint8Array;
                toProtoMsg(message: _7.DepositUpdate): _7.DepositUpdateProtoMsg;
            };
            PointsMultiplier: {
                typeUrl: string;
                encode(message: _7.PointsMultiplier, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PointsMultiplier;
                fromPartial(object: Partial<_7.PointsMultiplier>): _7.PointsMultiplier;
                fromAmino(object: _7.PointsMultiplierAmino): _7.PointsMultiplier;
                toAmino(message: _7.PointsMultiplier): _7.PointsMultiplierAmino;
                fromAminoMsg(object: _7.PointsMultiplierAminoMsg): _7.PointsMultiplier;
                fromProtoMsg(message: _7.PointsMultiplierProtoMsg): _7.PointsMultiplier;
                toProto(message: _7.PointsMultiplier): Uint8Array;
                toProtoMsg(message: _7.PointsMultiplier): _7.PointsMultiplierProtoMsg;
            };
            TradingRewardCampaignBoostInfo: {
                typeUrl: string;
                encode(message: _7.TradingRewardCampaignBoostInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.TradingRewardCampaignBoostInfo;
                fromPartial(object: Partial<_7.TradingRewardCampaignBoostInfo>): _7.TradingRewardCampaignBoostInfo;
                fromAmino(object: _7.TradingRewardCampaignBoostInfoAmino): _7.TradingRewardCampaignBoostInfo;
                toAmino(message: _7.TradingRewardCampaignBoostInfo): _7.TradingRewardCampaignBoostInfoAmino;
                fromAminoMsg(object: _7.TradingRewardCampaignBoostInfoAminoMsg): _7.TradingRewardCampaignBoostInfo;
                fromProtoMsg(message: _7.TradingRewardCampaignBoostInfoProtoMsg): _7.TradingRewardCampaignBoostInfo;
                toProto(message: _7.TradingRewardCampaignBoostInfo): Uint8Array;
                toProtoMsg(message: _7.TradingRewardCampaignBoostInfo): _7.TradingRewardCampaignBoostInfoProtoMsg;
            };
            CampaignRewardPool: {
                typeUrl: string;
                encode(message: _7.CampaignRewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.CampaignRewardPool;
                fromPartial(object: Partial<_7.CampaignRewardPool>): _7.CampaignRewardPool;
                fromAmino(object: _7.CampaignRewardPoolAmino): _7.CampaignRewardPool;
                toAmino(message: _7.CampaignRewardPool): _7.CampaignRewardPoolAmino;
                fromAminoMsg(object: _7.CampaignRewardPoolAminoMsg): _7.CampaignRewardPool;
                fromProtoMsg(message: _7.CampaignRewardPoolProtoMsg): _7.CampaignRewardPool;
                toProto(message: _7.CampaignRewardPool): Uint8Array;
                toProtoMsg(message: _7.CampaignRewardPool): _7.CampaignRewardPoolProtoMsg;
            };
            TradingRewardCampaignInfo: {
                typeUrl: string;
                encode(message: _7.TradingRewardCampaignInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.TradingRewardCampaignInfo;
                fromPartial(object: Partial<_7.TradingRewardCampaignInfo>): _7.TradingRewardCampaignInfo;
                fromAmino(object: _7.TradingRewardCampaignInfoAmino): _7.TradingRewardCampaignInfo;
                toAmino(message: _7.TradingRewardCampaignInfo): _7.TradingRewardCampaignInfoAmino;
                fromAminoMsg(object: _7.TradingRewardCampaignInfoAminoMsg): _7.TradingRewardCampaignInfo;
                fromProtoMsg(message: _7.TradingRewardCampaignInfoProtoMsg): _7.TradingRewardCampaignInfo;
                toProto(message: _7.TradingRewardCampaignInfo): Uint8Array;
                toProtoMsg(message: _7.TradingRewardCampaignInfo): _7.TradingRewardCampaignInfoProtoMsg;
            };
            FeeDiscountTierInfo: {
                typeUrl: string;
                encode(message: _7.FeeDiscountTierInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.FeeDiscountTierInfo;
                fromPartial(object: Partial<_7.FeeDiscountTierInfo>): _7.FeeDiscountTierInfo;
                fromAmino(object: _7.FeeDiscountTierInfoAmino): _7.FeeDiscountTierInfo;
                toAmino(message: _7.FeeDiscountTierInfo): _7.FeeDiscountTierInfoAmino;
                fromAminoMsg(object: _7.FeeDiscountTierInfoAminoMsg): _7.FeeDiscountTierInfo;
                fromProtoMsg(message: _7.FeeDiscountTierInfoProtoMsg): _7.FeeDiscountTierInfo;
                toProto(message: _7.FeeDiscountTierInfo): Uint8Array;
                toProtoMsg(message: _7.FeeDiscountTierInfo): _7.FeeDiscountTierInfoProtoMsg;
            };
            FeeDiscountSchedule: {
                typeUrl: string;
                encode(message: _7.FeeDiscountSchedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.FeeDiscountSchedule;
                fromPartial(object: Partial<_7.FeeDiscountSchedule>): _7.FeeDiscountSchedule;
                fromAmino(object: _7.FeeDiscountScheduleAmino): _7.FeeDiscountSchedule;
                toAmino(message: _7.FeeDiscountSchedule): _7.FeeDiscountScheduleAmino;
                fromAminoMsg(object: _7.FeeDiscountScheduleAminoMsg): _7.FeeDiscountSchedule;
                fromProtoMsg(message: _7.FeeDiscountScheduleProtoMsg): _7.FeeDiscountSchedule;
                toProto(message: _7.FeeDiscountSchedule): Uint8Array;
                toProtoMsg(message: _7.FeeDiscountSchedule): _7.FeeDiscountScheduleProtoMsg;
            };
            FeeDiscountTierTTL: {
                typeUrl: string;
                encode(message: _7.FeeDiscountTierTTL, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.FeeDiscountTierTTL;
                fromPartial(object: Partial<_7.FeeDiscountTierTTL>): _7.FeeDiscountTierTTL;
                fromAmino(object: _7.FeeDiscountTierTTLAmino): _7.FeeDiscountTierTTL;
                toAmino(message: _7.FeeDiscountTierTTL): _7.FeeDiscountTierTTLAmino;
                fromAminoMsg(object: _7.FeeDiscountTierTTLAminoMsg): _7.FeeDiscountTierTTL;
                fromProtoMsg(message: _7.FeeDiscountTierTTLProtoMsg): _7.FeeDiscountTierTTL;
                toProto(message: _7.FeeDiscountTierTTL): Uint8Array;
                toProtoMsg(message: _7.FeeDiscountTierTTL): _7.FeeDiscountTierTTLProtoMsg;
            };
            VolumeRecord: {
                typeUrl: string;
                encode(message: _7.VolumeRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.VolumeRecord;
                fromPartial(object: Partial<_7.VolumeRecord>): _7.VolumeRecord;
                fromAmino(object: _7.VolumeRecordAmino): _7.VolumeRecord;
                toAmino(message: _7.VolumeRecord): _7.VolumeRecordAmino;
                fromAminoMsg(object: _7.VolumeRecordAminoMsg): _7.VolumeRecord;
                fromProtoMsg(message: _7.VolumeRecordProtoMsg): _7.VolumeRecord;
                toProto(message: _7.VolumeRecord): Uint8Array;
                toProtoMsg(message: _7.VolumeRecord): _7.VolumeRecordProtoMsg;
            };
            AccountRewards: {
                typeUrl: string;
                encode(message: _7.AccountRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.AccountRewards;
                fromPartial(object: Partial<_7.AccountRewards>): _7.AccountRewards;
                fromAmino(object: _7.AccountRewardsAmino): _7.AccountRewards;
                toAmino(message: _7.AccountRewards): _7.AccountRewardsAmino;
                fromAminoMsg(object: _7.AccountRewardsAminoMsg): _7.AccountRewards;
                fromProtoMsg(message: _7.AccountRewardsProtoMsg): _7.AccountRewards;
                toProto(message: _7.AccountRewards): Uint8Array;
                toProtoMsg(message: _7.AccountRewards): _7.AccountRewardsProtoMsg;
            };
            TradeRecords: {
                typeUrl: string;
                encode(message: _7.TradeRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.TradeRecords;
                fromPartial(object: Partial<_7.TradeRecords>): _7.TradeRecords;
                fromAmino(object: _7.TradeRecordsAmino): _7.TradeRecords;
                toAmino(message: _7.TradeRecords): _7.TradeRecordsAmino;
                fromAminoMsg(object: _7.TradeRecordsAminoMsg): _7.TradeRecords;
                fromProtoMsg(message: _7.TradeRecordsProtoMsg): _7.TradeRecords;
                toProto(message: _7.TradeRecords): Uint8Array;
                toProtoMsg(message: _7.TradeRecords): _7.TradeRecordsProtoMsg;
            };
            SubaccountIDs: {
                typeUrl: string;
                encode(message: _7.SubaccountIDs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SubaccountIDs;
                fromPartial(object: Partial<_7.SubaccountIDs>): _7.SubaccountIDs;
                fromAmino(object: _7.SubaccountIDsAmino): _7.SubaccountIDs;
                toAmino(message: _7.SubaccountIDs): _7.SubaccountIDsAmino;
                fromAminoMsg(object: _7.SubaccountIDsAminoMsg): _7.SubaccountIDs;
                fromProtoMsg(message: _7.SubaccountIDsProtoMsg): _7.SubaccountIDs;
                toProto(message: _7.SubaccountIDs): Uint8Array;
                toProtoMsg(message: _7.SubaccountIDs): _7.SubaccountIDsProtoMsg;
            };
            TradeRecord: {
                typeUrl: string;
                encode(message: _7.TradeRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.TradeRecord;
                fromPartial(object: Partial<_7.TradeRecord>): _7.TradeRecord;
                fromAmino(object: _7.TradeRecordAmino): _7.TradeRecord;
                toAmino(message: _7.TradeRecord): _7.TradeRecordAmino;
                fromAminoMsg(object: _7.TradeRecordAminoMsg): _7.TradeRecord;
                fromProtoMsg(message: _7.TradeRecordProtoMsg): _7.TradeRecord;
                toProto(message: _7.TradeRecord): Uint8Array;
                toProtoMsg(message: _7.TradeRecord): _7.TradeRecordProtoMsg;
            };
            Level: {
                typeUrl: string;
                encode(message: _7.Level, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Level;
                fromPartial(object: Partial<_7.Level>): _7.Level;
                fromAmino(object: _7.LevelAmino): _7.Level;
                toAmino(message: _7.Level): _7.LevelAmino;
                fromAminoMsg(object: _7.LevelAminoMsg): _7.Level;
                fromProtoMsg(message: _7.LevelProtoMsg): _7.Level;
                toProto(message: _7.Level): Uint8Array;
                toProtoMsg(message: _7.Level): _7.LevelProtoMsg;
            };
            AggregateSubaccountVolumeRecord: {
                typeUrl: string;
                encode(message: _7.AggregateSubaccountVolumeRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.AggregateSubaccountVolumeRecord;
                fromPartial(object: Partial<_7.AggregateSubaccountVolumeRecord>): _7.AggregateSubaccountVolumeRecord;
                fromAmino(object: _7.AggregateSubaccountVolumeRecordAmino): _7.AggregateSubaccountVolumeRecord;
                toAmino(message: _7.AggregateSubaccountVolumeRecord): _7.AggregateSubaccountVolumeRecordAmino;
                fromAminoMsg(object: _7.AggregateSubaccountVolumeRecordAminoMsg): _7.AggregateSubaccountVolumeRecord;
                fromProtoMsg(message: _7.AggregateSubaccountVolumeRecordProtoMsg): _7.AggregateSubaccountVolumeRecord;
                toProto(message: _7.AggregateSubaccountVolumeRecord): Uint8Array;
                toProtoMsg(message: _7.AggregateSubaccountVolumeRecord): _7.AggregateSubaccountVolumeRecordProtoMsg;
            };
            AggregateAccountVolumeRecord: {
                typeUrl: string;
                encode(message: _7.AggregateAccountVolumeRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.AggregateAccountVolumeRecord;
                fromPartial(object: Partial<_7.AggregateAccountVolumeRecord>): _7.AggregateAccountVolumeRecord;
                fromAmino(object: _7.AggregateAccountVolumeRecordAmino): _7.AggregateAccountVolumeRecord;
                toAmino(message: _7.AggregateAccountVolumeRecord): _7.AggregateAccountVolumeRecordAmino;
                fromAminoMsg(object: _7.AggregateAccountVolumeRecordAminoMsg): _7.AggregateAccountVolumeRecord;
                fromProtoMsg(message: _7.AggregateAccountVolumeRecordProtoMsg): _7.AggregateAccountVolumeRecord;
                toProto(message: _7.AggregateAccountVolumeRecord): Uint8Array;
                toProtoMsg(message: _7.AggregateAccountVolumeRecord): _7.AggregateAccountVolumeRecordProtoMsg;
            };
            MarketVolume: {
                typeUrl: string;
                encode(message: _7.MarketVolume, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.MarketVolume;
                fromPartial(object: Partial<_7.MarketVolume>): _7.MarketVolume;
                fromAmino(object: _7.MarketVolumeAmino): _7.MarketVolume;
                toAmino(message: _7.MarketVolume): _7.MarketVolumeAmino;
                fromAminoMsg(object: _7.MarketVolumeAminoMsg): _7.MarketVolume;
                fromProtoMsg(message: _7.MarketVolumeProtoMsg): _7.MarketVolume;
                toProto(message: _7.MarketVolume): Uint8Array;
                toProtoMsg(message: _7.MarketVolume): _7.MarketVolumeProtoMsg;
            };
            DenomDecimals: {
                typeUrl: string;
                encode(message: _7.DenomDecimals, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DenomDecimals;
                fromPartial(object: Partial<_7.DenomDecimals>): _7.DenomDecimals;
                fromAmino(object: _7.DenomDecimalsAmino): _7.DenomDecimals;
                toAmino(message: _7.DenomDecimals): _7.DenomDecimalsAmino;
                fromAminoMsg(object: _7.DenomDecimalsAminoMsg): _7.DenomDecimals;
                fromProtoMsg(message: _7.DenomDecimalsProtoMsg): _7.DenomDecimals;
                toProto(message: _7.DenomDecimals): Uint8Array;
                toProtoMsg(message: _7.DenomDecimals): _7.DenomDecimalsProtoMsg;
            };
            EventBatchSpotExecution: {
                typeUrl: string;
                encode(message: _6.EventBatchSpotExecution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventBatchSpotExecution;
                fromPartial(object: Partial<_6.EventBatchSpotExecution>): _6.EventBatchSpotExecution;
                fromAmino(object: _6.EventBatchSpotExecutionAmino): _6.EventBatchSpotExecution;
                toAmino(message: _6.EventBatchSpotExecution): _6.EventBatchSpotExecutionAmino;
                fromAminoMsg(object: _6.EventBatchSpotExecutionAminoMsg): _6.EventBatchSpotExecution;
                fromProtoMsg(message: _6.EventBatchSpotExecutionProtoMsg): _6.EventBatchSpotExecution;
                toProto(message: _6.EventBatchSpotExecution): Uint8Array;
                toProtoMsg(message: _6.EventBatchSpotExecution): _6.EventBatchSpotExecutionProtoMsg;
            };
            EventBatchDerivativeExecution: {
                typeUrl: string;
                encode(message: _6.EventBatchDerivativeExecution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventBatchDerivativeExecution;
                fromPartial(object: Partial<_6.EventBatchDerivativeExecution>): _6.EventBatchDerivativeExecution;
                fromAmino(object: _6.EventBatchDerivativeExecutionAmino): _6.EventBatchDerivativeExecution;
                toAmino(message: _6.EventBatchDerivativeExecution): _6.EventBatchDerivativeExecutionAmino;
                fromAminoMsg(object: _6.EventBatchDerivativeExecutionAminoMsg): _6.EventBatchDerivativeExecution;
                fromProtoMsg(message: _6.EventBatchDerivativeExecutionProtoMsg): _6.EventBatchDerivativeExecution;
                toProto(message: _6.EventBatchDerivativeExecution): Uint8Array;
                toProtoMsg(message: _6.EventBatchDerivativeExecution): _6.EventBatchDerivativeExecutionProtoMsg;
            };
            EventLostFundsFromLiquidation: {
                typeUrl: string;
                encode(message: _6.EventLostFundsFromLiquidation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventLostFundsFromLiquidation;
                fromPartial(object: Partial<_6.EventLostFundsFromLiquidation>): _6.EventLostFundsFromLiquidation;
                fromAmino(object: _6.EventLostFundsFromLiquidationAmino): _6.EventLostFundsFromLiquidation;
                toAmino(message: _6.EventLostFundsFromLiquidation): _6.EventLostFundsFromLiquidationAmino;
                fromAminoMsg(object: _6.EventLostFundsFromLiquidationAminoMsg): _6.EventLostFundsFromLiquidation;
                fromProtoMsg(message: _6.EventLostFundsFromLiquidationProtoMsg): _6.EventLostFundsFromLiquidation;
                toProto(message: _6.EventLostFundsFromLiquidation): Uint8Array;
                toProtoMsg(message: _6.EventLostFundsFromLiquidation): _6.EventLostFundsFromLiquidationProtoMsg;
            };
            EventBatchDerivativePosition: {
                typeUrl: string;
                encode(message: _6.EventBatchDerivativePosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventBatchDerivativePosition;
                fromPartial(object: Partial<_6.EventBatchDerivativePosition>): _6.EventBatchDerivativePosition;
                fromAmino(object: _6.EventBatchDerivativePositionAmino): _6.EventBatchDerivativePosition;
                toAmino(message: _6.EventBatchDerivativePosition): _6.EventBatchDerivativePositionAmino;
                fromAminoMsg(object: _6.EventBatchDerivativePositionAminoMsg): _6.EventBatchDerivativePosition;
                fromProtoMsg(message: _6.EventBatchDerivativePositionProtoMsg): _6.EventBatchDerivativePosition;
                toProto(message: _6.EventBatchDerivativePosition): Uint8Array;
                toProtoMsg(message: _6.EventBatchDerivativePosition): _6.EventBatchDerivativePositionProtoMsg;
            };
            EventDerivativeMarketPaused: {
                typeUrl: string;
                encode(message: _6.EventDerivativeMarketPaused, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventDerivativeMarketPaused;
                fromPartial(object: Partial<_6.EventDerivativeMarketPaused>): _6.EventDerivativeMarketPaused;
                fromAmino(object: _6.EventDerivativeMarketPausedAmino): _6.EventDerivativeMarketPaused;
                toAmino(message: _6.EventDerivativeMarketPaused): _6.EventDerivativeMarketPausedAmino;
                fromAminoMsg(object: _6.EventDerivativeMarketPausedAminoMsg): _6.EventDerivativeMarketPaused;
                fromProtoMsg(message: _6.EventDerivativeMarketPausedProtoMsg): _6.EventDerivativeMarketPaused;
                toProto(message: _6.EventDerivativeMarketPaused): Uint8Array;
                toProtoMsg(message: _6.EventDerivativeMarketPaused): _6.EventDerivativeMarketPausedProtoMsg;
            };
            EventMarketBeyondBankruptcy: {
                typeUrl: string;
                encode(message: _6.EventMarketBeyondBankruptcy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventMarketBeyondBankruptcy;
                fromPartial(object: Partial<_6.EventMarketBeyondBankruptcy>): _6.EventMarketBeyondBankruptcy;
                fromAmino(object: _6.EventMarketBeyondBankruptcyAmino): _6.EventMarketBeyondBankruptcy;
                toAmino(message: _6.EventMarketBeyondBankruptcy): _6.EventMarketBeyondBankruptcyAmino;
                fromAminoMsg(object: _6.EventMarketBeyondBankruptcyAminoMsg): _6.EventMarketBeyondBankruptcy;
                fromProtoMsg(message: _6.EventMarketBeyondBankruptcyProtoMsg): _6.EventMarketBeyondBankruptcy;
                toProto(message: _6.EventMarketBeyondBankruptcy): Uint8Array;
                toProtoMsg(message: _6.EventMarketBeyondBankruptcy): _6.EventMarketBeyondBankruptcyProtoMsg;
            };
            EventAllPositionsHaircut: {
                typeUrl: string;
                encode(message: _6.EventAllPositionsHaircut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventAllPositionsHaircut;
                fromPartial(object: Partial<_6.EventAllPositionsHaircut>): _6.EventAllPositionsHaircut;
                fromAmino(object: _6.EventAllPositionsHaircutAmino): _6.EventAllPositionsHaircut;
                toAmino(message: _6.EventAllPositionsHaircut): _6.EventAllPositionsHaircutAmino;
                fromAminoMsg(object: _6.EventAllPositionsHaircutAminoMsg): _6.EventAllPositionsHaircut;
                fromProtoMsg(message: _6.EventAllPositionsHaircutProtoMsg): _6.EventAllPositionsHaircut;
                toProto(message: _6.EventAllPositionsHaircut): Uint8Array;
                toProtoMsg(message: _6.EventAllPositionsHaircut): _6.EventAllPositionsHaircutProtoMsg;
            };
            EventBinaryOptionsMarketUpdate: {
                typeUrl: string;
                encode(message: _6.EventBinaryOptionsMarketUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventBinaryOptionsMarketUpdate;
                fromPartial(object: Partial<_6.EventBinaryOptionsMarketUpdate>): _6.EventBinaryOptionsMarketUpdate;
                fromAmino(object: _6.EventBinaryOptionsMarketUpdateAmino): _6.EventBinaryOptionsMarketUpdate;
                toAmino(message: _6.EventBinaryOptionsMarketUpdate): _6.EventBinaryOptionsMarketUpdateAmino;
                fromAminoMsg(object: _6.EventBinaryOptionsMarketUpdateAminoMsg): _6.EventBinaryOptionsMarketUpdate;
                fromProtoMsg(message: _6.EventBinaryOptionsMarketUpdateProtoMsg): _6.EventBinaryOptionsMarketUpdate;
                toProto(message: _6.EventBinaryOptionsMarketUpdate): Uint8Array;
                toProtoMsg(message: _6.EventBinaryOptionsMarketUpdate): _6.EventBinaryOptionsMarketUpdateProtoMsg;
            };
            EventNewSpotOrders: {
                typeUrl: string;
                encode(message: _6.EventNewSpotOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventNewSpotOrders;
                fromPartial(object: Partial<_6.EventNewSpotOrders>): _6.EventNewSpotOrders;
                fromAmino(object: _6.EventNewSpotOrdersAmino): _6.EventNewSpotOrders;
                toAmino(message: _6.EventNewSpotOrders): _6.EventNewSpotOrdersAmino;
                fromAminoMsg(object: _6.EventNewSpotOrdersAminoMsg): _6.EventNewSpotOrders;
                fromProtoMsg(message: _6.EventNewSpotOrdersProtoMsg): _6.EventNewSpotOrders;
                toProto(message: _6.EventNewSpotOrders): Uint8Array;
                toProtoMsg(message: _6.EventNewSpotOrders): _6.EventNewSpotOrdersProtoMsg;
            };
            EventNewDerivativeOrders: {
                typeUrl: string;
                encode(message: _6.EventNewDerivativeOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventNewDerivativeOrders;
                fromPartial(object: Partial<_6.EventNewDerivativeOrders>): _6.EventNewDerivativeOrders;
                fromAmino(object: _6.EventNewDerivativeOrdersAmino): _6.EventNewDerivativeOrders;
                toAmino(message: _6.EventNewDerivativeOrders): _6.EventNewDerivativeOrdersAmino;
                fromAminoMsg(object: _6.EventNewDerivativeOrdersAminoMsg): _6.EventNewDerivativeOrders;
                fromProtoMsg(message: _6.EventNewDerivativeOrdersProtoMsg): _6.EventNewDerivativeOrders;
                toProto(message: _6.EventNewDerivativeOrders): Uint8Array;
                toProtoMsg(message: _6.EventNewDerivativeOrders): _6.EventNewDerivativeOrdersProtoMsg;
            };
            EventCancelSpotOrder: {
                typeUrl: string;
                encode(message: _6.EventCancelSpotOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventCancelSpotOrder;
                fromPartial(object: Partial<_6.EventCancelSpotOrder>): _6.EventCancelSpotOrder;
                fromAmino(object: _6.EventCancelSpotOrderAmino): _6.EventCancelSpotOrder;
                toAmino(message: _6.EventCancelSpotOrder): _6.EventCancelSpotOrderAmino;
                fromAminoMsg(object: _6.EventCancelSpotOrderAminoMsg): _6.EventCancelSpotOrder;
                fromProtoMsg(message: _6.EventCancelSpotOrderProtoMsg): _6.EventCancelSpotOrder;
                toProto(message: _6.EventCancelSpotOrder): Uint8Array;
                toProtoMsg(message: _6.EventCancelSpotOrder): _6.EventCancelSpotOrderProtoMsg;
            };
            EventSpotMarketUpdate: {
                typeUrl: string;
                encode(message: _6.EventSpotMarketUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventSpotMarketUpdate;
                fromPartial(object: Partial<_6.EventSpotMarketUpdate>): _6.EventSpotMarketUpdate;
                fromAmino(object: _6.EventSpotMarketUpdateAmino): _6.EventSpotMarketUpdate;
                toAmino(message: _6.EventSpotMarketUpdate): _6.EventSpotMarketUpdateAmino;
                fromAminoMsg(object: _6.EventSpotMarketUpdateAminoMsg): _6.EventSpotMarketUpdate;
                fromProtoMsg(message: _6.EventSpotMarketUpdateProtoMsg): _6.EventSpotMarketUpdate;
                toProto(message: _6.EventSpotMarketUpdate): Uint8Array;
                toProtoMsg(message: _6.EventSpotMarketUpdate): _6.EventSpotMarketUpdateProtoMsg;
            };
            EventPerpetualMarketUpdate: {
                typeUrl: string;
                encode(message: _6.EventPerpetualMarketUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventPerpetualMarketUpdate;
                fromPartial(object: Partial<_6.EventPerpetualMarketUpdate>): _6.EventPerpetualMarketUpdate;
                fromAmino(object: _6.EventPerpetualMarketUpdateAmino): _6.EventPerpetualMarketUpdate;
                toAmino(message: _6.EventPerpetualMarketUpdate): _6.EventPerpetualMarketUpdateAmino;
                fromAminoMsg(object: _6.EventPerpetualMarketUpdateAminoMsg): _6.EventPerpetualMarketUpdate;
                fromProtoMsg(message: _6.EventPerpetualMarketUpdateProtoMsg): _6.EventPerpetualMarketUpdate;
                toProto(message: _6.EventPerpetualMarketUpdate): Uint8Array;
                toProtoMsg(message: _6.EventPerpetualMarketUpdate): _6.EventPerpetualMarketUpdateProtoMsg;
            };
            EventExpiryFuturesMarketUpdate: {
                typeUrl: string;
                encode(message: _6.EventExpiryFuturesMarketUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventExpiryFuturesMarketUpdate;
                fromPartial(object: Partial<_6.EventExpiryFuturesMarketUpdate>): _6.EventExpiryFuturesMarketUpdate;
                fromAmino(object: _6.EventExpiryFuturesMarketUpdateAmino): _6.EventExpiryFuturesMarketUpdate;
                toAmino(message: _6.EventExpiryFuturesMarketUpdate): _6.EventExpiryFuturesMarketUpdateAmino;
                fromAminoMsg(object: _6.EventExpiryFuturesMarketUpdateAminoMsg): _6.EventExpiryFuturesMarketUpdate;
                fromProtoMsg(message: _6.EventExpiryFuturesMarketUpdateProtoMsg): _6.EventExpiryFuturesMarketUpdate;
                toProto(message: _6.EventExpiryFuturesMarketUpdate): Uint8Array;
                toProtoMsg(message: _6.EventExpiryFuturesMarketUpdate): _6.EventExpiryFuturesMarketUpdateProtoMsg;
            };
            EventPerpetualMarketFundingUpdate: {
                typeUrl: string;
                encode(message: _6.EventPerpetualMarketFundingUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventPerpetualMarketFundingUpdate;
                fromPartial(object: Partial<_6.EventPerpetualMarketFundingUpdate>): _6.EventPerpetualMarketFundingUpdate;
                fromAmino(object: _6.EventPerpetualMarketFundingUpdateAmino): _6.EventPerpetualMarketFundingUpdate;
                toAmino(message: _6.EventPerpetualMarketFundingUpdate): _6.EventPerpetualMarketFundingUpdateAmino;
                fromAminoMsg(object: _6.EventPerpetualMarketFundingUpdateAminoMsg): _6.EventPerpetualMarketFundingUpdate;
                fromProtoMsg(message: _6.EventPerpetualMarketFundingUpdateProtoMsg): _6.EventPerpetualMarketFundingUpdate;
                toProto(message: _6.EventPerpetualMarketFundingUpdate): Uint8Array;
                toProtoMsg(message: _6.EventPerpetualMarketFundingUpdate): _6.EventPerpetualMarketFundingUpdateProtoMsg;
            };
            EventSubaccountDeposit: {
                typeUrl: string;
                encode(message: _6.EventSubaccountDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventSubaccountDeposit;
                fromPartial(object: Partial<_6.EventSubaccountDeposit>): _6.EventSubaccountDeposit;
                fromAmino(object: _6.EventSubaccountDepositAmino): _6.EventSubaccountDeposit;
                toAmino(message: _6.EventSubaccountDeposit): _6.EventSubaccountDepositAmino;
                fromAminoMsg(object: _6.EventSubaccountDepositAminoMsg): _6.EventSubaccountDeposit;
                fromProtoMsg(message: _6.EventSubaccountDepositProtoMsg): _6.EventSubaccountDeposit;
                toProto(message: _6.EventSubaccountDeposit): Uint8Array;
                toProtoMsg(message: _6.EventSubaccountDeposit): _6.EventSubaccountDepositProtoMsg;
            };
            EventSubaccountWithdraw: {
                typeUrl: string;
                encode(message: _6.EventSubaccountWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventSubaccountWithdraw;
                fromPartial(object: Partial<_6.EventSubaccountWithdraw>): _6.EventSubaccountWithdraw;
                fromAmino(object: _6.EventSubaccountWithdrawAmino): _6.EventSubaccountWithdraw;
                toAmino(message: _6.EventSubaccountWithdraw): _6.EventSubaccountWithdrawAmino;
                fromAminoMsg(object: _6.EventSubaccountWithdrawAminoMsg): _6.EventSubaccountWithdraw;
                fromProtoMsg(message: _6.EventSubaccountWithdrawProtoMsg): _6.EventSubaccountWithdraw;
                toProto(message: _6.EventSubaccountWithdraw): Uint8Array;
                toProtoMsg(message: _6.EventSubaccountWithdraw): _6.EventSubaccountWithdrawProtoMsg;
            };
            EventSubaccountBalanceTransfer: {
                typeUrl: string;
                encode(message: _6.EventSubaccountBalanceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventSubaccountBalanceTransfer;
                fromPartial(object: Partial<_6.EventSubaccountBalanceTransfer>): _6.EventSubaccountBalanceTransfer;
                fromAmino(object: _6.EventSubaccountBalanceTransferAmino): _6.EventSubaccountBalanceTransfer;
                toAmino(message: _6.EventSubaccountBalanceTransfer): _6.EventSubaccountBalanceTransferAmino;
                fromAminoMsg(object: _6.EventSubaccountBalanceTransferAminoMsg): _6.EventSubaccountBalanceTransfer;
                fromProtoMsg(message: _6.EventSubaccountBalanceTransferProtoMsg): _6.EventSubaccountBalanceTransfer;
                toProto(message: _6.EventSubaccountBalanceTransfer): Uint8Array;
                toProtoMsg(message: _6.EventSubaccountBalanceTransfer): _6.EventSubaccountBalanceTransferProtoMsg;
            };
            EventBatchDepositUpdate: {
                typeUrl: string;
                encode(message: _6.EventBatchDepositUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventBatchDepositUpdate;
                fromPartial(object: Partial<_6.EventBatchDepositUpdate>): _6.EventBatchDepositUpdate;
                fromAmino(object: _6.EventBatchDepositUpdateAmino): _6.EventBatchDepositUpdate;
                toAmino(message: _6.EventBatchDepositUpdate): _6.EventBatchDepositUpdateAmino;
                fromAminoMsg(object: _6.EventBatchDepositUpdateAminoMsg): _6.EventBatchDepositUpdate;
                fromProtoMsg(message: _6.EventBatchDepositUpdateProtoMsg): _6.EventBatchDepositUpdate;
                toProto(message: _6.EventBatchDepositUpdate): Uint8Array;
                toProtoMsg(message: _6.EventBatchDepositUpdate): _6.EventBatchDepositUpdateProtoMsg;
            };
            DerivativeMarketOrderCancel: {
                typeUrl: string;
                encode(message: _6.DerivativeMarketOrderCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.DerivativeMarketOrderCancel;
                fromPartial(object: Partial<_6.DerivativeMarketOrderCancel>): _6.DerivativeMarketOrderCancel;
                fromAmino(object: _6.DerivativeMarketOrderCancelAmino): _6.DerivativeMarketOrderCancel;
                toAmino(message: _6.DerivativeMarketOrderCancel): _6.DerivativeMarketOrderCancelAmino;
                fromAminoMsg(object: _6.DerivativeMarketOrderCancelAminoMsg): _6.DerivativeMarketOrderCancel;
                fromProtoMsg(message: _6.DerivativeMarketOrderCancelProtoMsg): _6.DerivativeMarketOrderCancel;
                toProto(message: _6.DerivativeMarketOrderCancel): Uint8Array;
                toProtoMsg(message: _6.DerivativeMarketOrderCancel): _6.DerivativeMarketOrderCancelProtoMsg;
            };
            EventCancelDerivativeOrder: {
                typeUrl: string;
                encode(message: _6.EventCancelDerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventCancelDerivativeOrder;
                fromPartial(object: Partial<_6.EventCancelDerivativeOrder>): _6.EventCancelDerivativeOrder;
                fromAmino(object: _6.EventCancelDerivativeOrderAmino): _6.EventCancelDerivativeOrder;
                toAmino(message: _6.EventCancelDerivativeOrder): _6.EventCancelDerivativeOrderAmino;
                fromAminoMsg(object: _6.EventCancelDerivativeOrderAminoMsg): _6.EventCancelDerivativeOrder;
                fromProtoMsg(message: _6.EventCancelDerivativeOrderProtoMsg): _6.EventCancelDerivativeOrder;
                toProto(message: _6.EventCancelDerivativeOrder): Uint8Array;
                toProtoMsg(message: _6.EventCancelDerivativeOrder): _6.EventCancelDerivativeOrderProtoMsg;
            };
            EventFeeDiscountSchedule: {
                typeUrl: string;
                encode(message: _6.EventFeeDiscountSchedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventFeeDiscountSchedule;
                fromPartial(object: Partial<_6.EventFeeDiscountSchedule>): _6.EventFeeDiscountSchedule;
                fromAmino(object: _6.EventFeeDiscountScheduleAmino): _6.EventFeeDiscountSchedule;
                toAmino(message: _6.EventFeeDiscountSchedule): _6.EventFeeDiscountScheduleAmino;
                fromAminoMsg(object: _6.EventFeeDiscountScheduleAminoMsg): _6.EventFeeDiscountSchedule;
                fromProtoMsg(message: _6.EventFeeDiscountScheduleProtoMsg): _6.EventFeeDiscountSchedule;
                toProto(message: _6.EventFeeDiscountSchedule): Uint8Array;
                toProtoMsg(message: _6.EventFeeDiscountSchedule): _6.EventFeeDiscountScheduleProtoMsg;
            };
            EventTradingRewardCampaignUpdate: {
                typeUrl: string;
                encode(message: _6.EventTradingRewardCampaignUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventTradingRewardCampaignUpdate;
                fromPartial(object: Partial<_6.EventTradingRewardCampaignUpdate>): _6.EventTradingRewardCampaignUpdate;
                fromAmino(object: _6.EventTradingRewardCampaignUpdateAmino): _6.EventTradingRewardCampaignUpdate;
                toAmino(message: _6.EventTradingRewardCampaignUpdate): _6.EventTradingRewardCampaignUpdateAmino;
                fromAminoMsg(object: _6.EventTradingRewardCampaignUpdateAminoMsg): _6.EventTradingRewardCampaignUpdate;
                fromProtoMsg(message: _6.EventTradingRewardCampaignUpdateProtoMsg): _6.EventTradingRewardCampaignUpdate;
                toProto(message: _6.EventTradingRewardCampaignUpdate): Uint8Array;
                toProtoMsg(message: _6.EventTradingRewardCampaignUpdate): _6.EventTradingRewardCampaignUpdateProtoMsg;
            };
            EventTradingRewardDistribution: {
                typeUrl: string;
                encode(message: _6.EventTradingRewardDistribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventTradingRewardDistribution;
                fromPartial(object: Partial<_6.EventTradingRewardDistribution>): _6.EventTradingRewardDistribution;
                fromAmino(object: _6.EventTradingRewardDistributionAmino): _6.EventTradingRewardDistribution;
                toAmino(message: _6.EventTradingRewardDistribution): _6.EventTradingRewardDistributionAmino;
                fromAminoMsg(object: _6.EventTradingRewardDistributionAminoMsg): _6.EventTradingRewardDistribution;
                fromProtoMsg(message: _6.EventTradingRewardDistributionProtoMsg): _6.EventTradingRewardDistribution;
                toProto(message: _6.EventTradingRewardDistribution): Uint8Array;
                toProtoMsg(message: _6.EventTradingRewardDistribution): _6.EventTradingRewardDistributionProtoMsg;
            };
            EventNewConditionalDerivativeOrder: {
                typeUrl: string;
                encode(message: _6.EventNewConditionalDerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventNewConditionalDerivativeOrder;
                fromPartial(object: Partial<_6.EventNewConditionalDerivativeOrder>): _6.EventNewConditionalDerivativeOrder;
                fromAmino(object: _6.EventNewConditionalDerivativeOrderAmino): _6.EventNewConditionalDerivativeOrder;
                toAmino(message: _6.EventNewConditionalDerivativeOrder): _6.EventNewConditionalDerivativeOrderAmino;
                fromAminoMsg(object: _6.EventNewConditionalDerivativeOrderAminoMsg): _6.EventNewConditionalDerivativeOrder;
                fromProtoMsg(message: _6.EventNewConditionalDerivativeOrderProtoMsg): _6.EventNewConditionalDerivativeOrder;
                toProto(message: _6.EventNewConditionalDerivativeOrder): Uint8Array;
                toProtoMsg(message: _6.EventNewConditionalDerivativeOrder): _6.EventNewConditionalDerivativeOrderProtoMsg;
            };
            EventCancelConditionalDerivativeOrder: {
                typeUrl: string;
                encode(message: _6.EventCancelConditionalDerivativeOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventCancelConditionalDerivativeOrder;
                fromPartial(object: Partial<_6.EventCancelConditionalDerivativeOrder>): _6.EventCancelConditionalDerivativeOrder;
                fromAmino(object: _6.EventCancelConditionalDerivativeOrderAmino): _6.EventCancelConditionalDerivativeOrder;
                toAmino(message: _6.EventCancelConditionalDerivativeOrder): _6.EventCancelConditionalDerivativeOrderAmino;
                fromAminoMsg(object: _6.EventCancelConditionalDerivativeOrderAminoMsg): _6.EventCancelConditionalDerivativeOrder;
                fromProtoMsg(message: _6.EventCancelConditionalDerivativeOrderProtoMsg): _6.EventCancelConditionalDerivativeOrder;
                toProto(message: _6.EventCancelConditionalDerivativeOrder): Uint8Array;
                toProtoMsg(message: _6.EventCancelConditionalDerivativeOrder): _6.EventCancelConditionalDerivativeOrderProtoMsg;
            };
            EventConditionalDerivativeOrderTrigger: {
                typeUrl: string;
                encode(message: _6.EventConditionalDerivativeOrderTrigger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventConditionalDerivativeOrderTrigger;
                fromPartial(object: Partial<_6.EventConditionalDerivativeOrderTrigger>): _6.EventConditionalDerivativeOrderTrigger;
                fromAmino(object: _6.EventConditionalDerivativeOrderTriggerAmino): _6.EventConditionalDerivativeOrderTrigger;
                toAmino(message: _6.EventConditionalDerivativeOrderTrigger): _6.EventConditionalDerivativeOrderTriggerAmino;
                fromAminoMsg(object: _6.EventConditionalDerivativeOrderTriggerAminoMsg): _6.EventConditionalDerivativeOrderTrigger;
                fromProtoMsg(message: _6.EventConditionalDerivativeOrderTriggerProtoMsg): _6.EventConditionalDerivativeOrderTrigger;
                toProto(message: _6.EventConditionalDerivativeOrderTrigger): Uint8Array;
                toProtoMsg(message: _6.EventConditionalDerivativeOrderTrigger): _6.EventConditionalDerivativeOrderTriggerProtoMsg;
            };
            EventOrderFail: {
                typeUrl: string;
                encode(message: _6.EventOrderFail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventOrderFail;
                fromPartial(object: Partial<_6.EventOrderFail>): _6.EventOrderFail;
                fromAmino(object: _6.EventOrderFailAmino): _6.EventOrderFail;
                toAmino(message: _6.EventOrderFail): _6.EventOrderFailAmino;
                fromAminoMsg(object: _6.EventOrderFailAminoMsg): _6.EventOrderFail;
                fromProtoMsg(message: _6.EventOrderFailProtoMsg): _6.EventOrderFail;
                toProto(message: _6.EventOrderFail): Uint8Array;
                toProtoMsg(message: _6.EventOrderFail): _6.EventOrderFailProtoMsg;
            };
            EventAtomicMarketOrderFeeMultipliersUpdated: {
                typeUrl: string;
                encode(message: _6.EventAtomicMarketOrderFeeMultipliersUpdated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventAtomicMarketOrderFeeMultipliersUpdated;
                fromPartial(object: Partial<_6.EventAtomicMarketOrderFeeMultipliersUpdated>): _6.EventAtomicMarketOrderFeeMultipliersUpdated;
                fromAmino(object: _6.EventAtomicMarketOrderFeeMultipliersUpdatedAmino): _6.EventAtomicMarketOrderFeeMultipliersUpdated;
                toAmino(message: _6.EventAtomicMarketOrderFeeMultipliersUpdated): _6.EventAtomicMarketOrderFeeMultipliersUpdatedAmino;
                fromAminoMsg(object: _6.EventAtomicMarketOrderFeeMultipliersUpdatedAminoMsg): _6.EventAtomicMarketOrderFeeMultipliersUpdated;
                fromProtoMsg(message: _6.EventAtomicMarketOrderFeeMultipliersUpdatedProtoMsg): _6.EventAtomicMarketOrderFeeMultipliersUpdated;
                toProto(message: _6.EventAtomicMarketOrderFeeMultipliersUpdated): Uint8Array;
                toProtoMsg(message: _6.EventAtomicMarketOrderFeeMultipliersUpdated): _6.EventAtomicMarketOrderFeeMultipliersUpdatedProtoMsg;
            };
            EventOrderbookUpdate: {
                typeUrl: string;
                encode(message: _6.EventOrderbookUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.EventOrderbookUpdate;
                fromPartial(object: Partial<_6.EventOrderbookUpdate>): _6.EventOrderbookUpdate;
                fromAmino(object: _6.EventOrderbookUpdateAmino): _6.EventOrderbookUpdate;
                toAmino(message: _6.EventOrderbookUpdate): _6.EventOrderbookUpdateAmino;
                fromAminoMsg(object: _6.EventOrderbookUpdateAminoMsg): _6.EventOrderbookUpdate;
                fromProtoMsg(message: _6.EventOrderbookUpdateProtoMsg): _6.EventOrderbookUpdate;
                toProto(message: _6.EventOrderbookUpdate): Uint8Array;
                toProtoMsg(message: _6.EventOrderbookUpdate): _6.EventOrderbookUpdateProtoMsg;
            };
            OrderbookUpdate: {
                typeUrl: string;
                encode(message: _6.OrderbookUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.OrderbookUpdate;
                fromPartial(object: Partial<_6.OrderbookUpdate>): _6.OrderbookUpdate;
                fromAmino(object: _6.OrderbookUpdateAmino): _6.OrderbookUpdate;
                toAmino(message: _6.OrderbookUpdate): _6.OrderbookUpdateAmino;
                fromAminoMsg(object: _6.OrderbookUpdateAminoMsg): _6.OrderbookUpdate;
                fromProtoMsg(message: _6.OrderbookUpdateProtoMsg): _6.OrderbookUpdate;
                toProto(message: _6.OrderbookUpdate): Uint8Array;
                toProtoMsg(message: _6.OrderbookUpdate): _6.OrderbookUpdateProtoMsg;
            };
            Orderbook: {
                typeUrl: string;
                encode(message: _6.Orderbook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Orderbook;
                fromPartial(object: Partial<_6.Orderbook>): _6.Orderbook;
                fromAmino(object: _6.OrderbookAmino): _6.Orderbook;
                toAmino(message: _6.Orderbook): _6.OrderbookAmino;
                fromAminoMsg(object: _6.OrderbookAminoMsg): _6.Orderbook;
                fromProtoMsg(message: _6.OrderbookProtoMsg): _6.Orderbook;
                toProto(message: _6.Orderbook): Uint8Array;
                toProtoMsg(message: _6.Orderbook): _6.OrderbookProtoMsg;
            };
            CreateSpotLimitOrderAuthz: {
                typeUrl: string;
                encode(message: _5.CreateSpotLimitOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CreateSpotLimitOrderAuthz;
                fromPartial(object: Partial<_5.CreateSpotLimitOrderAuthz>): _5.CreateSpotLimitOrderAuthz;
                fromAmino(object: _5.CreateSpotLimitOrderAuthzAmino): _5.CreateSpotLimitOrderAuthz;
                toAmino(message: _5.CreateSpotLimitOrderAuthz): _5.CreateSpotLimitOrderAuthzAmino;
                fromAminoMsg(object: _5.CreateSpotLimitOrderAuthzAminoMsg): _5.CreateSpotLimitOrderAuthz;
                fromProtoMsg(message: _5.CreateSpotLimitOrderAuthzProtoMsg): _5.CreateSpotLimitOrderAuthz;
                toProto(message: _5.CreateSpotLimitOrderAuthz): Uint8Array;
                toProtoMsg(message: _5.CreateSpotLimitOrderAuthz): _5.CreateSpotLimitOrderAuthzProtoMsg;
            };
            CreateSpotMarketOrderAuthz: {
                typeUrl: string;
                encode(message: _5.CreateSpotMarketOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CreateSpotMarketOrderAuthz;
                fromPartial(object: Partial<_5.CreateSpotMarketOrderAuthz>): _5.CreateSpotMarketOrderAuthz;
                fromAmino(object: _5.CreateSpotMarketOrderAuthzAmino): _5.CreateSpotMarketOrderAuthz;
                toAmino(message: _5.CreateSpotMarketOrderAuthz): _5.CreateSpotMarketOrderAuthzAmino;
                fromAminoMsg(object: _5.CreateSpotMarketOrderAuthzAminoMsg): _5.CreateSpotMarketOrderAuthz;
                fromProtoMsg(message: _5.CreateSpotMarketOrderAuthzProtoMsg): _5.CreateSpotMarketOrderAuthz;
                toProto(message: _5.CreateSpotMarketOrderAuthz): Uint8Array;
                toProtoMsg(message: _5.CreateSpotMarketOrderAuthz): _5.CreateSpotMarketOrderAuthzProtoMsg;
            };
            BatchCreateSpotLimitOrdersAuthz: {
                typeUrl: string;
                encode(message: _5.BatchCreateSpotLimitOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.BatchCreateSpotLimitOrdersAuthz;
                fromPartial(object: Partial<_5.BatchCreateSpotLimitOrdersAuthz>): _5.BatchCreateSpotLimitOrdersAuthz;
                fromAmino(object: _5.BatchCreateSpotLimitOrdersAuthzAmino): _5.BatchCreateSpotLimitOrdersAuthz;
                toAmino(message: _5.BatchCreateSpotLimitOrdersAuthz): _5.BatchCreateSpotLimitOrdersAuthzAmino;
                fromAminoMsg(object: _5.BatchCreateSpotLimitOrdersAuthzAminoMsg): _5.BatchCreateSpotLimitOrdersAuthz;
                fromProtoMsg(message: _5.BatchCreateSpotLimitOrdersAuthzProtoMsg): _5.BatchCreateSpotLimitOrdersAuthz;
                toProto(message: _5.BatchCreateSpotLimitOrdersAuthz): Uint8Array;
                toProtoMsg(message: _5.BatchCreateSpotLimitOrdersAuthz): _5.BatchCreateSpotLimitOrdersAuthzProtoMsg;
            };
            CancelSpotOrderAuthz: {
                typeUrl: string;
                encode(message: _5.CancelSpotOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CancelSpotOrderAuthz;
                fromPartial(object: Partial<_5.CancelSpotOrderAuthz>): _5.CancelSpotOrderAuthz;
                fromAmino(object: _5.CancelSpotOrderAuthzAmino): _5.CancelSpotOrderAuthz;
                toAmino(message: _5.CancelSpotOrderAuthz): _5.CancelSpotOrderAuthzAmino;
                fromAminoMsg(object: _5.CancelSpotOrderAuthzAminoMsg): _5.CancelSpotOrderAuthz;
                fromProtoMsg(message: _5.CancelSpotOrderAuthzProtoMsg): _5.CancelSpotOrderAuthz;
                toProto(message: _5.CancelSpotOrderAuthz): Uint8Array;
                toProtoMsg(message: _5.CancelSpotOrderAuthz): _5.CancelSpotOrderAuthzProtoMsg;
            };
            BatchCancelSpotOrdersAuthz: {
                typeUrl: string;
                encode(message: _5.BatchCancelSpotOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.BatchCancelSpotOrdersAuthz;
                fromPartial(object: Partial<_5.BatchCancelSpotOrdersAuthz>): _5.BatchCancelSpotOrdersAuthz;
                fromAmino(object: _5.BatchCancelSpotOrdersAuthzAmino): _5.BatchCancelSpotOrdersAuthz;
                toAmino(message: _5.BatchCancelSpotOrdersAuthz): _5.BatchCancelSpotOrdersAuthzAmino;
                fromAminoMsg(object: _5.BatchCancelSpotOrdersAuthzAminoMsg): _5.BatchCancelSpotOrdersAuthz;
                fromProtoMsg(message: _5.BatchCancelSpotOrdersAuthzProtoMsg): _5.BatchCancelSpotOrdersAuthz;
                toProto(message: _5.BatchCancelSpotOrdersAuthz): Uint8Array;
                toProtoMsg(message: _5.BatchCancelSpotOrdersAuthz): _5.BatchCancelSpotOrdersAuthzProtoMsg;
            };
            CreateDerivativeLimitOrderAuthz: {
                typeUrl: string;
                encode(message: _5.CreateDerivativeLimitOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CreateDerivativeLimitOrderAuthz;
                fromPartial(object: Partial<_5.CreateDerivativeLimitOrderAuthz>): _5.CreateDerivativeLimitOrderAuthz;
                fromAmino(object: _5.CreateDerivativeLimitOrderAuthzAmino): _5.CreateDerivativeLimitOrderAuthz;
                toAmino(message: _5.CreateDerivativeLimitOrderAuthz): _5.CreateDerivativeLimitOrderAuthzAmino;
                fromAminoMsg(object: _5.CreateDerivativeLimitOrderAuthzAminoMsg): _5.CreateDerivativeLimitOrderAuthz;
                fromProtoMsg(message: _5.CreateDerivativeLimitOrderAuthzProtoMsg): _5.CreateDerivativeLimitOrderAuthz;
                toProto(message: _5.CreateDerivativeLimitOrderAuthz): Uint8Array;
                toProtoMsg(message: _5.CreateDerivativeLimitOrderAuthz): _5.CreateDerivativeLimitOrderAuthzProtoMsg;
            };
            CreateDerivativeMarketOrderAuthz: {
                typeUrl: string;
                encode(message: _5.CreateDerivativeMarketOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CreateDerivativeMarketOrderAuthz;
                fromPartial(object: Partial<_5.CreateDerivativeMarketOrderAuthz>): _5.CreateDerivativeMarketOrderAuthz;
                fromAmino(object: _5.CreateDerivativeMarketOrderAuthzAmino): _5.CreateDerivativeMarketOrderAuthz;
                toAmino(message: _5.CreateDerivativeMarketOrderAuthz): _5.CreateDerivativeMarketOrderAuthzAmino;
                fromAminoMsg(object: _5.CreateDerivativeMarketOrderAuthzAminoMsg): _5.CreateDerivativeMarketOrderAuthz;
                fromProtoMsg(message: _5.CreateDerivativeMarketOrderAuthzProtoMsg): _5.CreateDerivativeMarketOrderAuthz;
                toProto(message: _5.CreateDerivativeMarketOrderAuthz): Uint8Array;
                toProtoMsg(message: _5.CreateDerivativeMarketOrderAuthz): _5.CreateDerivativeMarketOrderAuthzProtoMsg;
            };
            BatchCreateDerivativeLimitOrdersAuthz: {
                typeUrl: string;
                encode(message: _5.BatchCreateDerivativeLimitOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.BatchCreateDerivativeLimitOrdersAuthz;
                fromPartial(object: Partial<_5.BatchCreateDerivativeLimitOrdersAuthz>): _5.BatchCreateDerivativeLimitOrdersAuthz;
                fromAmino(object: _5.BatchCreateDerivativeLimitOrdersAuthzAmino): _5.BatchCreateDerivativeLimitOrdersAuthz;
                toAmino(message: _5.BatchCreateDerivativeLimitOrdersAuthz): _5.BatchCreateDerivativeLimitOrdersAuthzAmino;
                fromAminoMsg(object: _5.BatchCreateDerivativeLimitOrdersAuthzAminoMsg): _5.BatchCreateDerivativeLimitOrdersAuthz;
                fromProtoMsg(message: _5.BatchCreateDerivativeLimitOrdersAuthzProtoMsg): _5.BatchCreateDerivativeLimitOrdersAuthz;
                toProto(message: _5.BatchCreateDerivativeLimitOrdersAuthz): Uint8Array;
                toProtoMsg(message: _5.BatchCreateDerivativeLimitOrdersAuthz): _5.BatchCreateDerivativeLimitOrdersAuthzProtoMsg;
            };
            CancelDerivativeOrderAuthz: {
                typeUrl: string;
                encode(message: _5.CancelDerivativeOrderAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CancelDerivativeOrderAuthz;
                fromPartial(object: Partial<_5.CancelDerivativeOrderAuthz>): _5.CancelDerivativeOrderAuthz;
                fromAmino(object: _5.CancelDerivativeOrderAuthzAmino): _5.CancelDerivativeOrderAuthz;
                toAmino(message: _5.CancelDerivativeOrderAuthz): _5.CancelDerivativeOrderAuthzAmino;
                fromAminoMsg(object: _5.CancelDerivativeOrderAuthzAminoMsg): _5.CancelDerivativeOrderAuthz;
                fromProtoMsg(message: _5.CancelDerivativeOrderAuthzProtoMsg): _5.CancelDerivativeOrderAuthz;
                toProto(message: _5.CancelDerivativeOrderAuthz): Uint8Array;
                toProtoMsg(message: _5.CancelDerivativeOrderAuthz): _5.CancelDerivativeOrderAuthzProtoMsg;
            };
            BatchCancelDerivativeOrdersAuthz: {
                typeUrl: string;
                encode(message: _5.BatchCancelDerivativeOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.BatchCancelDerivativeOrdersAuthz;
                fromPartial(object: Partial<_5.BatchCancelDerivativeOrdersAuthz>): _5.BatchCancelDerivativeOrdersAuthz;
                fromAmino(object: _5.BatchCancelDerivativeOrdersAuthzAmino): _5.BatchCancelDerivativeOrdersAuthz;
                toAmino(message: _5.BatchCancelDerivativeOrdersAuthz): _5.BatchCancelDerivativeOrdersAuthzAmino;
                fromAminoMsg(object: _5.BatchCancelDerivativeOrdersAuthzAminoMsg): _5.BatchCancelDerivativeOrdersAuthz;
                fromProtoMsg(message: _5.BatchCancelDerivativeOrdersAuthzProtoMsg): _5.BatchCancelDerivativeOrdersAuthz;
                toProto(message: _5.BatchCancelDerivativeOrdersAuthz): Uint8Array;
                toProtoMsg(message: _5.BatchCancelDerivativeOrdersAuthz): _5.BatchCancelDerivativeOrdersAuthzProtoMsg;
            };
            BatchUpdateOrdersAuthz: {
                typeUrl: string;
                encode(message: _5.BatchUpdateOrdersAuthz, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.BatchUpdateOrdersAuthz;
                fromPartial(object: Partial<_5.BatchUpdateOrdersAuthz>): _5.BatchUpdateOrdersAuthz;
                fromAmino(object: _5.BatchUpdateOrdersAuthzAmino): _5.BatchUpdateOrdersAuthz;
                toAmino(message: _5.BatchUpdateOrdersAuthz): _5.BatchUpdateOrdersAuthzAmino;
                fromAminoMsg(object: _5.BatchUpdateOrdersAuthzAminoMsg): _5.BatchUpdateOrdersAuthz;
                fromProtoMsg(message: _5.BatchUpdateOrdersAuthzProtoMsg): _5.BatchUpdateOrdersAuthz;
                toProto(message: _5.BatchUpdateOrdersAuthz): Uint8Array;
                toProtoMsg(message: _5.BatchUpdateOrdersAuthz): _5.BatchUpdateOrdersAuthzProtoMsg;
            };
        };
    }
    namespace insurance {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                insuranceParams(request?: _13.QueryInsuranceParamsRequest): Promise<_13.QueryInsuranceParamsResponse>;
                insuranceFund(request: _13.QueryInsuranceFundRequest): Promise<_13.QueryInsuranceFundResponse>;
                insuranceFunds(request?: _13.QueryInsuranceFundsRequest): Promise<_13.QueryInsuranceFundsResponse>;
                estimatedRedemptions(request: _13.QueryEstimatedRedemptionsRequest): Promise<_13.QueryEstimatedRedemptionsResponse>;
                pendingRedemptions(request: _13.QueryPendingRedemptionsRequest): Promise<_13.QueryPendingRedemptionsResponse>;
                insuranceModuleState(request?: _13.QueryModuleStateRequest): Promise<_13.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createInsuranceFund(value: _14.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    underwrite(value: _14.MsgUnderwrite): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestRedemption(value: _14.MsgRequestRedemption): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _14.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createInsuranceFund(value: _14.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: _14.MsgCreateInsuranceFund;
                    };
                    underwrite(value: _14.MsgUnderwrite): {
                        typeUrl: string;
                        value: _14.MsgUnderwrite;
                    };
                    requestRedemption(value: _14.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _14.MsgRequestRedemption;
                    };
                    updateParams(value: _14.MsgUpdateParams): {
                        typeUrl: string;
                        value: _14.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createInsuranceFund(value: any): {
                        typeUrl: string;
                        value: _14.MsgCreateInsuranceFund;
                    };
                    underwrite(value: any): {
                        typeUrl: string;
                        value: _14.MsgUnderwrite;
                    };
                    requestRedemption(value: any): {
                        typeUrl: string;
                        value: _14.MsgRequestRedemption;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _14.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createInsuranceFund(value: _14.MsgCreateInsuranceFund): {
                        typeUrl: string;
                        value: _14.MsgCreateInsuranceFund;
                    };
                    underwrite(value: _14.MsgUnderwrite): {
                        typeUrl: string;
                        value: _14.MsgUnderwrite;
                    };
                    requestRedemption(value: _14.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _14.MsgRequestRedemption;
                    };
                    updateParams(value: _14.MsgUpdateParams): {
                        typeUrl: string;
                        value: _14.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
                    aminoType: string;
                    toAmino: (message: _14.MsgCreateInsuranceFund) => _14.MsgCreateInsuranceFundAmino;
                    fromAmino: (object: _14.MsgCreateInsuranceFundAmino) => _14.MsgCreateInsuranceFund;
                };
                "/injective.insurance.v1beta1.MsgUnderwrite": {
                    aminoType: string;
                    toAmino: (message: _14.MsgUnderwrite) => _14.MsgUnderwriteAmino;
                    fromAmino: (object: _14.MsgUnderwriteAmino) => _14.MsgUnderwrite;
                };
                "/injective.insurance.v1beta1.MsgRequestRedemption": {
                    aminoType: string;
                    toAmino: (message: _14.MsgRequestRedemption) => _14.MsgRequestRedemptionAmino;
                    fromAmino: (object: _14.MsgRequestRedemptionAmino) => _14.MsgRequestRedemption;
                };
                "/injective.insurance.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _14.MsgUpdateParams) => _14.MsgUpdateParamsAmino;
                    fromAmino: (object: _14.MsgUpdateParamsAmino) => _14.MsgUpdateParams;
                };
            };
            MsgCreateInsuranceFund: {
                typeUrl: string;
                encode(message: _14.MsgCreateInsuranceFund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgCreateInsuranceFund;
                fromPartial(object: Partial<_14.MsgCreateInsuranceFund>): _14.MsgCreateInsuranceFund;
                fromAmino(object: _14.MsgCreateInsuranceFundAmino): _14.MsgCreateInsuranceFund;
                toAmino(message: _14.MsgCreateInsuranceFund): _14.MsgCreateInsuranceFundAmino;
                fromAminoMsg(object: _14.MsgCreateInsuranceFundAminoMsg): _14.MsgCreateInsuranceFund;
                fromProtoMsg(message: _14.MsgCreateInsuranceFundProtoMsg): _14.MsgCreateInsuranceFund;
                toProto(message: _14.MsgCreateInsuranceFund): Uint8Array;
                toProtoMsg(message: _14.MsgCreateInsuranceFund): _14.MsgCreateInsuranceFundProtoMsg;
            };
            MsgCreateInsuranceFundResponse: {
                typeUrl: string;
                encode(_: _14.MsgCreateInsuranceFundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgCreateInsuranceFundResponse;
                fromPartial(_: Partial<_14.MsgCreateInsuranceFundResponse>): _14.MsgCreateInsuranceFundResponse;
                fromAmino(_: _14.MsgCreateInsuranceFundResponseAmino): _14.MsgCreateInsuranceFundResponse;
                toAmino(_: _14.MsgCreateInsuranceFundResponse): _14.MsgCreateInsuranceFundResponseAmino;
                fromAminoMsg(object: _14.MsgCreateInsuranceFundResponseAminoMsg): _14.MsgCreateInsuranceFundResponse;
                fromProtoMsg(message: _14.MsgCreateInsuranceFundResponseProtoMsg): _14.MsgCreateInsuranceFundResponse;
                toProto(message: _14.MsgCreateInsuranceFundResponse): Uint8Array;
                toProtoMsg(message: _14.MsgCreateInsuranceFundResponse): _14.MsgCreateInsuranceFundResponseProtoMsg;
            };
            MsgUnderwrite: {
                typeUrl: string;
                encode(message: _14.MsgUnderwrite, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgUnderwrite;
                fromPartial(object: Partial<_14.MsgUnderwrite>): _14.MsgUnderwrite;
                fromAmino(object: _14.MsgUnderwriteAmino): _14.MsgUnderwrite;
                toAmino(message: _14.MsgUnderwrite): _14.MsgUnderwriteAmino;
                fromAminoMsg(object: _14.MsgUnderwriteAminoMsg): _14.MsgUnderwrite;
                fromProtoMsg(message: _14.MsgUnderwriteProtoMsg): _14.MsgUnderwrite;
                toProto(message: _14.MsgUnderwrite): Uint8Array;
                toProtoMsg(message: _14.MsgUnderwrite): _14.MsgUnderwriteProtoMsg;
            };
            MsgUnderwriteResponse: {
                typeUrl: string;
                encode(_: _14.MsgUnderwriteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgUnderwriteResponse;
                fromPartial(_: Partial<_14.MsgUnderwriteResponse>): _14.MsgUnderwriteResponse;
                fromAmino(_: _14.MsgUnderwriteResponseAmino): _14.MsgUnderwriteResponse;
                toAmino(_: _14.MsgUnderwriteResponse): _14.MsgUnderwriteResponseAmino;
                fromAminoMsg(object: _14.MsgUnderwriteResponseAminoMsg): _14.MsgUnderwriteResponse;
                fromProtoMsg(message: _14.MsgUnderwriteResponseProtoMsg): _14.MsgUnderwriteResponse;
                toProto(message: _14.MsgUnderwriteResponse): Uint8Array;
                toProtoMsg(message: _14.MsgUnderwriteResponse): _14.MsgUnderwriteResponseProtoMsg;
            };
            MsgRequestRedemption: {
                typeUrl: string;
                encode(message: _14.MsgRequestRedemption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgRequestRedemption;
                fromPartial(object: Partial<_14.MsgRequestRedemption>): _14.MsgRequestRedemption;
                fromAmino(object: _14.MsgRequestRedemptionAmino): _14.MsgRequestRedemption;
                toAmino(message: _14.MsgRequestRedemption): _14.MsgRequestRedemptionAmino;
                fromAminoMsg(object: _14.MsgRequestRedemptionAminoMsg): _14.MsgRequestRedemption;
                fromProtoMsg(message: _14.MsgRequestRedemptionProtoMsg): _14.MsgRequestRedemption;
                toProto(message: _14.MsgRequestRedemption): Uint8Array;
                toProtoMsg(message: _14.MsgRequestRedemption): _14.MsgRequestRedemptionProtoMsg;
            };
            MsgRequestRedemptionResponse: {
                typeUrl: string;
                encode(_: _14.MsgRequestRedemptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgRequestRedemptionResponse;
                fromPartial(_: Partial<_14.MsgRequestRedemptionResponse>): _14.MsgRequestRedemptionResponse;
                fromAmino(_: _14.MsgRequestRedemptionResponseAmino): _14.MsgRequestRedemptionResponse;
                toAmino(_: _14.MsgRequestRedemptionResponse): _14.MsgRequestRedemptionResponseAmino;
                fromAminoMsg(object: _14.MsgRequestRedemptionResponseAminoMsg): _14.MsgRequestRedemptionResponse;
                fromProtoMsg(message: _14.MsgRequestRedemptionResponseProtoMsg): _14.MsgRequestRedemptionResponse;
                toProto(message: _14.MsgRequestRedemptionResponse): Uint8Array;
                toProtoMsg(message: _14.MsgRequestRedemptionResponse): _14.MsgRequestRedemptionResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _14.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.MsgUpdateParams;
                fromPartial(object: Partial<_14.MsgUpdateParams>): _14.MsgUpdateParams;
                fromAmino(object: _14.MsgUpdateParamsAmino): _14.MsgUpdateParams;
                toAmino(message: _14.MsgUpdateParams): _14.MsgUpdateParamsAmino;
                fromAminoMsg(object: _14.MsgUpdateParamsAminoMsg): _14.MsgUpdateParams;
                fromProtoMsg(message: _14.MsgUpdateParamsProtoMsg): _14.MsgUpdateParams;
                toProto(message: _14.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _14.MsgUpdateParams): _14.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _14.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_14.MsgUpdateParamsResponse>): _14.MsgUpdateParamsResponse;
                fromAmino(_: _14.MsgUpdateParamsResponseAmino): _14.MsgUpdateParamsResponse;
                toAmino(_: _14.MsgUpdateParamsResponse): _14.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _14.MsgUpdateParamsResponseAminoMsg): _14.MsgUpdateParamsResponse;
                fromProtoMsg(message: _14.MsgUpdateParamsResponseProtoMsg): _14.MsgUpdateParamsResponse;
                toProto(message: _14.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _14.MsgUpdateParamsResponse): _14.MsgUpdateParamsResponseProtoMsg;
            };
            QueryInsuranceParamsRequest: {
                typeUrl: string;
                encode(_: _13.QueryInsuranceParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryInsuranceParamsRequest;
                fromPartial(_: Partial<_13.QueryInsuranceParamsRequest>): _13.QueryInsuranceParamsRequest;
                fromAmino(_: _13.QueryInsuranceParamsRequestAmino): _13.QueryInsuranceParamsRequest;
                toAmino(_: _13.QueryInsuranceParamsRequest): _13.QueryInsuranceParamsRequestAmino;
                fromAminoMsg(object: _13.QueryInsuranceParamsRequestAminoMsg): _13.QueryInsuranceParamsRequest;
                fromProtoMsg(message: _13.QueryInsuranceParamsRequestProtoMsg): _13.QueryInsuranceParamsRequest;
                toProto(message: _13.QueryInsuranceParamsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryInsuranceParamsRequest): _13.QueryInsuranceParamsRequestProtoMsg;
            };
            QueryInsuranceParamsResponse: {
                typeUrl: string;
                encode(message: _13.QueryInsuranceParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryInsuranceParamsResponse;
                fromPartial(object: Partial<_13.QueryInsuranceParamsResponse>): _13.QueryInsuranceParamsResponse;
                fromAmino(object: _13.QueryInsuranceParamsResponseAmino): _13.QueryInsuranceParamsResponse;
                toAmino(message: _13.QueryInsuranceParamsResponse): _13.QueryInsuranceParamsResponseAmino;
                fromAminoMsg(object: _13.QueryInsuranceParamsResponseAminoMsg): _13.QueryInsuranceParamsResponse;
                fromProtoMsg(message: _13.QueryInsuranceParamsResponseProtoMsg): _13.QueryInsuranceParamsResponse;
                toProto(message: _13.QueryInsuranceParamsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryInsuranceParamsResponse): _13.QueryInsuranceParamsResponseProtoMsg;
            };
            QueryInsuranceFundRequest: {
                typeUrl: string;
                encode(message: _13.QueryInsuranceFundRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryInsuranceFundRequest;
                fromPartial(object: Partial<_13.QueryInsuranceFundRequest>): _13.QueryInsuranceFundRequest;
                fromAmino(object: _13.QueryInsuranceFundRequestAmino): _13.QueryInsuranceFundRequest;
                toAmino(message: _13.QueryInsuranceFundRequest): _13.QueryInsuranceFundRequestAmino;
                fromAminoMsg(object: _13.QueryInsuranceFundRequestAminoMsg): _13.QueryInsuranceFundRequest;
                fromProtoMsg(message: _13.QueryInsuranceFundRequestProtoMsg): _13.QueryInsuranceFundRequest;
                toProto(message: _13.QueryInsuranceFundRequest): Uint8Array;
                toProtoMsg(message: _13.QueryInsuranceFundRequest): _13.QueryInsuranceFundRequestProtoMsg;
            };
            QueryInsuranceFundResponse: {
                typeUrl: string;
                encode(message: _13.QueryInsuranceFundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryInsuranceFundResponse;
                fromPartial(object: Partial<_13.QueryInsuranceFundResponse>): _13.QueryInsuranceFundResponse;
                fromAmino(object: _13.QueryInsuranceFundResponseAmino): _13.QueryInsuranceFundResponse;
                toAmino(message: _13.QueryInsuranceFundResponse): _13.QueryInsuranceFundResponseAmino;
                fromAminoMsg(object: _13.QueryInsuranceFundResponseAminoMsg): _13.QueryInsuranceFundResponse;
                fromProtoMsg(message: _13.QueryInsuranceFundResponseProtoMsg): _13.QueryInsuranceFundResponse;
                toProto(message: _13.QueryInsuranceFundResponse): Uint8Array;
                toProtoMsg(message: _13.QueryInsuranceFundResponse): _13.QueryInsuranceFundResponseProtoMsg;
            };
            QueryInsuranceFundsRequest: {
                typeUrl: string;
                encode(_: _13.QueryInsuranceFundsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryInsuranceFundsRequest;
                fromPartial(_: Partial<_13.QueryInsuranceFundsRequest>): _13.QueryInsuranceFundsRequest;
                fromAmino(_: _13.QueryInsuranceFundsRequestAmino): _13.QueryInsuranceFundsRequest;
                toAmino(_: _13.QueryInsuranceFundsRequest): _13.QueryInsuranceFundsRequestAmino;
                fromAminoMsg(object: _13.QueryInsuranceFundsRequestAminoMsg): _13.QueryInsuranceFundsRequest;
                fromProtoMsg(message: _13.QueryInsuranceFundsRequestProtoMsg): _13.QueryInsuranceFundsRequest;
                toProto(message: _13.QueryInsuranceFundsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryInsuranceFundsRequest): _13.QueryInsuranceFundsRequestProtoMsg;
            };
            QueryInsuranceFundsResponse: {
                typeUrl: string;
                encode(message: _13.QueryInsuranceFundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryInsuranceFundsResponse;
                fromPartial(object: Partial<_13.QueryInsuranceFundsResponse>): _13.QueryInsuranceFundsResponse;
                fromAmino(object: _13.QueryInsuranceFundsResponseAmino): _13.QueryInsuranceFundsResponse;
                toAmino(message: _13.QueryInsuranceFundsResponse): _13.QueryInsuranceFundsResponseAmino;
                fromAminoMsg(object: _13.QueryInsuranceFundsResponseAminoMsg): _13.QueryInsuranceFundsResponse;
                fromProtoMsg(message: _13.QueryInsuranceFundsResponseProtoMsg): _13.QueryInsuranceFundsResponse;
                toProto(message: _13.QueryInsuranceFundsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryInsuranceFundsResponse): _13.QueryInsuranceFundsResponseProtoMsg;
            };
            QueryEstimatedRedemptionsRequest: {
                typeUrl: string;
                encode(message: _13.QueryEstimatedRedemptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryEstimatedRedemptionsRequest;
                fromPartial(object: Partial<_13.QueryEstimatedRedemptionsRequest>): _13.QueryEstimatedRedemptionsRequest;
                fromAmino(object: _13.QueryEstimatedRedemptionsRequestAmino): _13.QueryEstimatedRedemptionsRequest;
                toAmino(message: _13.QueryEstimatedRedemptionsRequest): _13.QueryEstimatedRedemptionsRequestAmino;
                fromAminoMsg(object: _13.QueryEstimatedRedemptionsRequestAminoMsg): _13.QueryEstimatedRedemptionsRequest;
                fromProtoMsg(message: _13.QueryEstimatedRedemptionsRequestProtoMsg): _13.QueryEstimatedRedemptionsRequest;
                toProto(message: _13.QueryEstimatedRedemptionsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryEstimatedRedemptionsRequest): _13.QueryEstimatedRedemptionsRequestProtoMsg;
            };
            QueryEstimatedRedemptionsResponse: {
                typeUrl: string;
                encode(message: _13.QueryEstimatedRedemptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryEstimatedRedemptionsResponse;
                fromPartial(object: Partial<_13.QueryEstimatedRedemptionsResponse>): _13.QueryEstimatedRedemptionsResponse;
                fromAmino(object: _13.QueryEstimatedRedemptionsResponseAmino): _13.QueryEstimatedRedemptionsResponse;
                toAmino(message: _13.QueryEstimatedRedemptionsResponse): _13.QueryEstimatedRedemptionsResponseAmino;
                fromAminoMsg(object: _13.QueryEstimatedRedemptionsResponseAminoMsg): _13.QueryEstimatedRedemptionsResponse;
                fromProtoMsg(message: _13.QueryEstimatedRedemptionsResponseProtoMsg): _13.QueryEstimatedRedemptionsResponse;
                toProto(message: _13.QueryEstimatedRedemptionsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryEstimatedRedemptionsResponse): _13.QueryEstimatedRedemptionsResponseProtoMsg;
            };
            QueryPendingRedemptionsRequest: {
                typeUrl: string;
                encode(message: _13.QueryPendingRedemptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryPendingRedemptionsRequest;
                fromPartial(object: Partial<_13.QueryPendingRedemptionsRequest>): _13.QueryPendingRedemptionsRequest;
                fromAmino(object: _13.QueryPendingRedemptionsRequestAmino): _13.QueryPendingRedemptionsRequest;
                toAmino(message: _13.QueryPendingRedemptionsRequest): _13.QueryPendingRedemptionsRequestAmino;
                fromAminoMsg(object: _13.QueryPendingRedemptionsRequestAminoMsg): _13.QueryPendingRedemptionsRequest;
                fromProtoMsg(message: _13.QueryPendingRedemptionsRequestProtoMsg): _13.QueryPendingRedemptionsRequest;
                toProto(message: _13.QueryPendingRedemptionsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryPendingRedemptionsRequest): _13.QueryPendingRedemptionsRequestProtoMsg;
            };
            QueryPendingRedemptionsResponse: {
                typeUrl: string;
                encode(message: _13.QueryPendingRedemptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryPendingRedemptionsResponse;
                fromPartial(object: Partial<_13.QueryPendingRedemptionsResponse>): _13.QueryPendingRedemptionsResponse;
                fromAmino(object: _13.QueryPendingRedemptionsResponseAmino): _13.QueryPendingRedemptionsResponse;
                toAmino(message: _13.QueryPendingRedemptionsResponse): _13.QueryPendingRedemptionsResponseAmino;
                fromAminoMsg(object: _13.QueryPendingRedemptionsResponseAminoMsg): _13.QueryPendingRedemptionsResponse;
                fromProtoMsg(message: _13.QueryPendingRedemptionsResponseProtoMsg): _13.QueryPendingRedemptionsResponse;
                toProto(message: _13.QueryPendingRedemptionsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryPendingRedemptionsResponse): _13.QueryPendingRedemptionsResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _13.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.QueryModuleStateRequest;
                fromPartial(_: Partial<_13.QueryModuleStateRequest>): _13.QueryModuleStateRequest;
                fromAmino(_: _13.QueryModuleStateRequestAmino): _13.QueryModuleStateRequest;
                toAmino(_: _13.QueryModuleStateRequest): _13.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _13.QueryModuleStateRequestAminoMsg): _13.QueryModuleStateRequest;
                fromProtoMsg(message: _13.QueryModuleStateRequestProtoMsg): _13.QueryModuleStateRequest;
                toProto(message: _13.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _13.QueryModuleStateRequest): _13.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _13.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.QueryModuleStateResponse;
                fromPartial(object: Partial<_13.QueryModuleStateResponse>): _13.QueryModuleStateResponse;
                fromAmino(object: _13.QueryModuleStateResponseAmino): _13.QueryModuleStateResponse;
                toAmino(message: _13.QueryModuleStateResponse): _13.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _13.QueryModuleStateResponseAminoMsg): _13.QueryModuleStateResponse;
                fromProtoMsg(message: _13.QueryModuleStateResponseProtoMsg): _13.QueryModuleStateResponse;
                toProto(message: _13.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _13.QueryModuleStateResponse): _13.QueryModuleStateResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _12.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Params;
                fromPartial(object: Partial<_12.Params>): _12.Params;
                fromAmino(object: _12.ParamsAmino): _12.Params;
                toAmino(message: _12.Params): _12.ParamsAmino;
                fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
                fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
                toProto(message: _12.Params): Uint8Array;
                toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
            };
            InsuranceFund: {
                typeUrl: string;
                encode(message: _12.InsuranceFund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.InsuranceFund;
                fromPartial(object: Partial<_12.InsuranceFund>): _12.InsuranceFund;
                fromAmino(object: _12.InsuranceFundAmino): _12.InsuranceFund;
                toAmino(message: _12.InsuranceFund): _12.InsuranceFundAmino;
                fromAminoMsg(object: _12.InsuranceFundAminoMsg): _12.InsuranceFund;
                fromProtoMsg(message: _12.InsuranceFundProtoMsg): _12.InsuranceFund;
                toProto(message: _12.InsuranceFund): Uint8Array;
                toProtoMsg(message: _12.InsuranceFund): _12.InsuranceFundProtoMsg;
            };
            RedemptionSchedule: {
                typeUrl: string;
                encode(message: _12.RedemptionSchedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.RedemptionSchedule;
                fromPartial(object: Partial<_12.RedemptionSchedule>): _12.RedemptionSchedule;
                fromAmino(object: _12.RedemptionScheduleAmino): _12.RedemptionSchedule;
                toAmino(message: _12.RedemptionSchedule): _12.RedemptionScheduleAmino;
                fromAminoMsg(object: _12.RedemptionScheduleAminoMsg): _12.RedemptionSchedule;
                fromProtoMsg(message: _12.RedemptionScheduleProtoMsg): _12.RedemptionSchedule;
                toProto(message: _12.RedemptionSchedule): Uint8Array;
                toProtoMsg(message: _12.RedemptionSchedule): _12.RedemptionScheduleProtoMsg;
            };
            EventInsuranceFundUpdate: {
                typeUrl: string;
                encode(message: _12.EventInsuranceFundUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventInsuranceFundUpdate;
                fromPartial(object: Partial<_12.EventInsuranceFundUpdate>): _12.EventInsuranceFundUpdate;
                fromAmino(object: _12.EventInsuranceFundUpdateAmino): _12.EventInsuranceFundUpdate;
                toAmino(message: _12.EventInsuranceFundUpdate): _12.EventInsuranceFundUpdateAmino;
                fromAminoMsg(object: _12.EventInsuranceFundUpdateAminoMsg): _12.EventInsuranceFundUpdate;
                fromProtoMsg(message: _12.EventInsuranceFundUpdateProtoMsg): _12.EventInsuranceFundUpdate;
                toProto(message: _12.EventInsuranceFundUpdate): Uint8Array;
                toProtoMsg(message: _12.EventInsuranceFundUpdate): _12.EventInsuranceFundUpdateProtoMsg;
            };
            EventRequestRedemption: {
                typeUrl: string;
                encode(message: _12.EventRequestRedemption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventRequestRedemption;
                fromPartial(object: Partial<_12.EventRequestRedemption>): _12.EventRequestRedemption;
                fromAmino(object: _12.EventRequestRedemptionAmino): _12.EventRequestRedemption;
                toAmino(message: _12.EventRequestRedemption): _12.EventRequestRedemptionAmino;
                fromAminoMsg(object: _12.EventRequestRedemptionAminoMsg): _12.EventRequestRedemption;
                fromProtoMsg(message: _12.EventRequestRedemptionProtoMsg): _12.EventRequestRedemption;
                toProto(message: _12.EventRequestRedemption): Uint8Array;
                toProtoMsg(message: _12.EventRequestRedemption): _12.EventRequestRedemptionProtoMsg;
            };
            EventWithdrawRedemption: {
                typeUrl: string;
                encode(message: _12.EventWithdrawRedemption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventWithdrawRedemption;
                fromPartial(object: Partial<_12.EventWithdrawRedemption>): _12.EventWithdrawRedemption;
                fromAmino(object: _12.EventWithdrawRedemptionAmino): _12.EventWithdrawRedemption;
                toAmino(message: _12.EventWithdrawRedemption): _12.EventWithdrawRedemptionAmino;
                fromAminoMsg(object: _12.EventWithdrawRedemptionAminoMsg): _12.EventWithdrawRedemption;
                fromProtoMsg(message: _12.EventWithdrawRedemptionProtoMsg): _12.EventWithdrawRedemption;
                toProto(message: _12.EventWithdrawRedemption): Uint8Array;
                toProtoMsg(message: _12.EventWithdrawRedemption): _12.EventWithdrawRedemptionProtoMsg;
            };
            EventUnderwrite: {
                typeUrl: string;
                encode(message: _12.EventUnderwrite, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.EventUnderwrite;
                fromPartial(object: Partial<_12.EventUnderwrite>): _12.EventUnderwrite;
                fromAmino(object: _12.EventUnderwriteAmino): _12.EventUnderwrite;
                toAmino(message: _12.EventUnderwrite): _12.EventUnderwriteAmino;
                fromAminoMsg(object: _12.EventUnderwriteAminoMsg): _12.EventUnderwrite;
                fromProtoMsg(message: _12.EventUnderwriteProtoMsg): _12.EventUnderwrite;
                toProto(message: _12.EventUnderwrite): Uint8Array;
                toProtoMsg(message: _12.EventUnderwrite): _12.EventUnderwriteProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
        };
    }
    namespace ocr {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                feedConfig(request: _17.QueryFeedConfigRequest): Promise<_17.QueryFeedConfigResponse>;
                feedConfigInfo(request: _17.QueryFeedConfigInfoRequest): Promise<_17.QueryFeedConfigInfoResponse>;
                latestRound(request: _17.QueryLatestRoundRequest): Promise<_17.QueryLatestRoundResponse>;
                latestTransmissionDetails(request: _17.QueryLatestTransmissionDetailsRequest): Promise<_17.QueryLatestTransmissionDetailsResponse>;
                owedAmount(request: _17.QueryOwedAmountRequest): Promise<_17.QueryOwedAmountResponse>;
                ocrModuleState(request?: _17.QueryModuleStateRequest): Promise<_17.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _223.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createFeed(value: _18.MsgCreateFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeed(value: _18.MsgUpdateFeed): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transmit(value: _18.MsgTransmit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundFeedRewardPool(value: _18.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawFeedRewardPool(value: _18.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPayees(value: _18.MsgSetPayees): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferPayeeship(value: _18.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    acceptPayeeship(value: _18.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createFeed(value: _18.MsgCreateFeed): {
                        typeUrl: string;
                        value: _18.MsgCreateFeed;
                    };
                    updateFeed(value: _18.MsgUpdateFeed): {
                        typeUrl: string;
                        value: _18.MsgUpdateFeed;
                    };
                    transmit(value: _18.MsgTransmit): {
                        typeUrl: string;
                        value: _18.MsgTransmit;
                    };
                    fundFeedRewardPool(value: _18.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: _18.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: _18.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: _18.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: _18.MsgSetPayees): {
                        typeUrl: string;
                        value: _18.MsgSetPayees;
                    };
                    transferPayeeship(value: _18.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: _18.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: _18.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: _18.MsgAcceptPayeeship;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createFeed(value: any): {
                        typeUrl: string;
                        value: _18.MsgCreateFeed;
                    };
                    updateFeed(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateFeed;
                    };
                    transmit(value: any): {
                        typeUrl: string;
                        value: _18.MsgTransmit;
                    };
                    fundFeedRewardPool(value: any): {
                        typeUrl: string;
                        value: _18.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: any): {
                        typeUrl: string;
                        value: _18.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: any): {
                        typeUrl: string;
                        value: _18.MsgSetPayees;
                    };
                    transferPayeeship(value: any): {
                        typeUrl: string;
                        value: _18.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: any): {
                        typeUrl: string;
                        value: _18.MsgAcceptPayeeship;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createFeed(value: _18.MsgCreateFeed): {
                        typeUrl: string;
                        value: _18.MsgCreateFeed;
                    };
                    updateFeed(value: _18.MsgUpdateFeed): {
                        typeUrl: string;
                        value: _18.MsgUpdateFeed;
                    };
                    transmit(value: _18.MsgTransmit): {
                        typeUrl: string;
                        value: _18.MsgTransmit;
                    };
                    fundFeedRewardPool(value: _18.MsgFundFeedRewardPool): {
                        typeUrl: string;
                        value: _18.MsgFundFeedRewardPool;
                    };
                    withdrawFeedRewardPool(value: _18.MsgWithdrawFeedRewardPool): {
                        typeUrl: string;
                        value: _18.MsgWithdrawFeedRewardPool;
                    };
                    setPayees(value: _18.MsgSetPayees): {
                        typeUrl: string;
                        value: _18.MsgSetPayees;
                    };
                    transferPayeeship(value: _18.MsgTransferPayeeship): {
                        typeUrl: string;
                        value: _18.MsgTransferPayeeship;
                    };
                    acceptPayeeship(value: _18.MsgAcceptPayeeship): {
                        typeUrl: string;
                        value: _18.MsgAcceptPayeeship;
                    };
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.ocr.v1beta1.MsgCreateFeed": {
                    aminoType: string;
                    toAmino: (message: _18.MsgCreateFeed) => _18.MsgCreateFeedAmino;
                    fromAmino: (object: _18.MsgCreateFeedAmino) => _18.MsgCreateFeed;
                };
                "/injective.ocr.v1beta1.MsgUpdateFeed": {
                    aminoType: string;
                    toAmino: (message: _18.MsgUpdateFeed) => _18.MsgUpdateFeedAmino;
                    fromAmino: (object: _18.MsgUpdateFeedAmino) => _18.MsgUpdateFeed;
                };
                "/injective.ocr.v1beta1.MsgTransmit": {
                    aminoType: string;
                    toAmino: (message: _18.MsgTransmit) => _18.MsgTransmitAmino;
                    fromAmino: (object: _18.MsgTransmitAmino) => _18.MsgTransmit;
                };
                "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
                    aminoType: string;
                    toAmino: (message: _18.MsgFundFeedRewardPool) => _18.MsgFundFeedRewardPoolAmino;
                    fromAmino: (object: _18.MsgFundFeedRewardPoolAmino) => _18.MsgFundFeedRewardPool;
                };
                "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
                    aminoType: string;
                    toAmino: (message: _18.MsgWithdrawFeedRewardPool) => _18.MsgWithdrawFeedRewardPoolAmino;
                    fromAmino: (object: _18.MsgWithdrawFeedRewardPoolAmino) => _18.MsgWithdrawFeedRewardPool;
                };
                "/injective.ocr.v1beta1.MsgSetPayees": {
                    aminoType: string;
                    toAmino: (message: _18.MsgSetPayees) => _18.MsgSetPayeesAmino;
                    fromAmino: (object: _18.MsgSetPayeesAmino) => _18.MsgSetPayees;
                };
                "/injective.ocr.v1beta1.MsgTransferPayeeship": {
                    aminoType: string;
                    toAmino: (message: _18.MsgTransferPayeeship) => _18.MsgTransferPayeeshipAmino;
                    fromAmino: (object: _18.MsgTransferPayeeshipAmino) => _18.MsgTransferPayeeship;
                };
                "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
                    aminoType: string;
                    toAmino: (message: _18.MsgAcceptPayeeship) => _18.MsgAcceptPayeeshipAmino;
                    fromAmino: (object: _18.MsgAcceptPayeeshipAmino) => _18.MsgAcceptPayeeship;
                };
                "/injective.ocr.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _18.MsgUpdateParams) => _18.MsgUpdateParamsAmino;
                    fromAmino: (object: _18.MsgUpdateParamsAmino) => _18.MsgUpdateParams;
                };
            };
            MsgCreateFeed: {
                typeUrl: string;
                encode(message: _18.MsgCreateFeed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgCreateFeed;
                fromPartial(object: Partial<_18.MsgCreateFeed>): _18.MsgCreateFeed;
                fromAmino(object: _18.MsgCreateFeedAmino): _18.MsgCreateFeed;
                toAmino(message: _18.MsgCreateFeed): _18.MsgCreateFeedAmino;
                fromAminoMsg(object: _18.MsgCreateFeedAminoMsg): _18.MsgCreateFeed;
                fromProtoMsg(message: _18.MsgCreateFeedProtoMsg): _18.MsgCreateFeed;
                toProto(message: _18.MsgCreateFeed): Uint8Array;
                toProtoMsg(message: _18.MsgCreateFeed): _18.MsgCreateFeedProtoMsg;
            };
            MsgCreateFeedResponse: {
                typeUrl: string;
                encode(_: _18.MsgCreateFeedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgCreateFeedResponse;
                fromPartial(_: Partial<_18.MsgCreateFeedResponse>): _18.MsgCreateFeedResponse;
                fromAmino(_: _18.MsgCreateFeedResponseAmino): _18.MsgCreateFeedResponse;
                toAmino(_: _18.MsgCreateFeedResponse): _18.MsgCreateFeedResponseAmino;
                fromAminoMsg(object: _18.MsgCreateFeedResponseAminoMsg): _18.MsgCreateFeedResponse;
                fromProtoMsg(message: _18.MsgCreateFeedResponseProtoMsg): _18.MsgCreateFeedResponse;
                toProto(message: _18.MsgCreateFeedResponse): Uint8Array;
                toProtoMsg(message: _18.MsgCreateFeedResponse): _18.MsgCreateFeedResponseProtoMsg;
            };
            MsgUpdateFeed: {
                typeUrl: string;
                encode(message: _18.MsgUpdateFeed, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgUpdateFeed;
                fromPartial(object: Partial<_18.MsgUpdateFeed>): _18.MsgUpdateFeed;
                fromAmino(object: _18.MsgUpdateFeedAmino): _18.MsgUpdateFeed;
                toAmino(message: _18.MsgUpdateFeed): _18.MsgUpdateFeedAmino;
                fromAminoMsg(object: _18.MsgUpdateFeedAminoMsg): _18.MsgUpdateFeed;
                fromProtoMsg(message: _18.MsgUpdateFeedProtoMsg): _18.MsgUpdateFeed;
                toProto(message: _18.MsgUpdateFeed): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateFeed): _18.MsgUpdateFeedProtoMsg;
            };
            MsgUpdateFeedResponse: {
                typeUrl: string;
                encode(_: _18.MsgUpdateFeedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgUpdateFeedResponse;
                fromPartial(_: Partial<_18.MsgUpdateFeedResponse>): _18.MsgUpdateFeedResponse;
                fromAmino(_: _18.MsgUpdateFeedResponseAmino): _18.MsgUpdateFeedResponse;
                toAmino(_: _18.MsgUpdateFeedResponse): _18.MsgUpdateFeedResponseAmino;
                fromAminoMsg(object: _18.MsgUpdateFeedResponseAminoMsg): _18.MsgUpdateFeedResponse;
                fromProtoMsg(message: _18.MsgUpdateFeedResponseProtoMsg): _18.MsgUpdateFeedResponse;
                toProto(message: _18.MsgUpdateFeedResponse): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateFeedResponse): _18.MsgUpdateFeedResponseProtoMsg;
            };
            MsgTransmit: {
                typeUrl: string;
                encode(message: _18.MsgTransmit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgTransmit;
                fromPartial(object: Partial<_18.MsgTransmit>): _18.MsgTransmit;
                fromAmino(object: _18.MsgTransmitAmino): _18.MsgTransmit;
                toAmino(message: _18.MsgTransmit): _18.MsgTransmitAmino;
                fromAminoMsg(object: _18.MsgTransmitAminoMsg): _18.MsgTransmit;
                fromProtoMsg(message: _18.MsgTransmitProtoMsg): _18.MsgTransmit;
                toProto(message: _18.MsgTransmit): Uint8Array;
                toProtoMsg(message: _18.MsgTransmit): _18.MsgTransmitProtoMsg;
            };
            MsgTransmitResponse: {
                typeUrl: string;
                encode(_: _18.MsgTransmitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgTransmitResponse;
                fromPartial(_: Partial<_18.MsgTransmitResponse>): _18.MsgTransmitResponse;
                fromAmino(_: _18.MsgTransmitResponseAmino): _18.MsgTransmitResponse;
                toAmino(_: _18.MsgTransmitResponse): _18.MsgTransmitResponseAmino;
                fromAminoMsg(object: _18.MsgTransmitResponseAminoMsg): _18.MsgTransmitResponse;
                fromProtoMsg(message: _18.MsgTransmitResponseProtoMsg): _18.MsgTransmitResponse;
                toProto(message: _18.MsgTransmitResponse): Uint8Array;
                toProtoMsg(message: _18.MsgTransmitResponse): _18.MsgTransmitResponseProtoMsg;
            };
            MsgFundFeedRewardPool: {
                typeUrl: string;
                encode(message: _18.MsgFundFeedRewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgFundFeedRewardPool;
                fromPartial(object: Partial<_18.MsgFundFeedRewardPool>): _18.MsgFundFeedRewardPool;
                fromAmino(object: _18.MsgFundFeedRewardPoolAmino): _18.MsgFundFeedRewardPool;
                toAmino(message: _18.MsgFundFeedRewardPool): _18.MsgFundFeedRewardPoolAmino;
                fromAminoMsg(object: _18.MsgFundFeedRewardPoolAminoMsg): _18.MsgFundFeedRewardPool;
                fromProtoMsg(message: _18.MsgFundFeedRewardPoolProtoMsg): _18.MsgFundFeedRewardPool;
                toProto(message: _18.MsgFundFeedRewardPool): Uint8Array;
                toProtoMsg(message: _18.MsgFundFeedRewardPool): _18.MsgFundFeedRewardPoolProtoMsg;
            };
            MsgFundFeedRewardPoolResponse: {
                typeUrl: string;
                encode(_: _18.MsgFundFeedRewardPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgFundFeedRewardPoolResponse;
                fromPartial(_: Partial<_18.MsgFundFeedRewardPoolResponse>): _18.MsgFundFeedRewardPoolResponse;
                fromAmino(_: _18.MsgFundFeedRewardPoolResponseAmino): _18.MsgFundFeedRewardPoolResponse;
                toAmino(_: _18.MsgFundFeedRewardPoolResponse): _18.MsgFundFeedRewardPoolResponseAmino;
                fromAminoMsg(object: _18.MsgFundFeedRewardPoolResponseAminoMsg): _18.MsgFundFeedRewardPoolResponse;
                fromProtoMsg(message: _18.MsgFundFeedRewardPoolResponseProtoMsg): _18.MsgFundFeedRewardPoolResponse;
                toProto(message: _18.MsgFundFeedRewardPoolResponse): Uint8Array;
                toProtoMsg(message: _18.MsgFundFeedRewardPoolResponse): _18.MsgFundFeedRewardPoolResponseProtoMsg;
            };
            MsgWithdrawFeedRewardPool: {
                typeUrl: string;
                encode(message: _18.MsgWithdrawFeedRewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgWithdrawFeedRewardPool;
                fromPartial(object: Partial<_18.MsgWithdrawFeedRewardPool>): _18.MsgWithdrawFeedRewardPool;
                fromAmino(object: _18.MsgWithdrawFeedRewardPoolAmino): _18.MsgWithdrawFeedRewardPool;
                toAmino(message: _18.MsgWithdrawFeedRewardPool): _18.MsgWithdrawFeedRewardPoolAmino;
                fromAminoMsg(object: _18.MsgWithdrawFeedRewardPoolAminoMsg): _18.MsgWithdrawFeedRewardPool;
                fromProtoMsg(message: _18.MsgWithdrawFeedRewardPoolProtoMsg): _18.MsgWithdrawFeedRewardPool;
                toProto(message: _18.MsgWithdrawFeedRewardPool): Uint8Array;
                toProtoMsg(message: _18.MsgWithdrawFeedRewardPool): _18.MsgWithdrawFeedRewardPoolProtoMsg;
            };
            MsgWithdrawFeedRewardPoolResponse: {
                typeUrl: string;
                encode(_: _18.MsgWithdrawFeedRewardPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgWithdrawFeedRewardPoolResponse;
                fromPartial(_: Partial<_18.MsgWithdrawFeedRewardPoolResponse>): _18.MsgWithdrawFeedRewardPoolResponse;
                fromAmino(_: _18.MsgWithdrawFeedRewardPoolResponseAmino): _18.MsgWithdrawFeedRewardPoolResponse;
                toAmino(_: _18.MsgWithdrawFeedRewardPoolResponse): _18.MsgWithdrawFeedRewardPoolResponseAmino;
                fromAminoMsg(object: _18.MsgWithdrawFeedRewardPoolResponseAminoMsg): _18.MsgWithdrawFeedRewardPoolResponse;
                fromProtoMsg(message: _18.MsgWithdrawFeedRewardPoolResponseProtoMsg): _18.MsgWithdrawFeedRewardPoolResponse;
                toProto(message: _18.MsgWithdrawFeedRewardPoolResponse): Uint8Array;
                toProtoMsg(message: _18.MsgWithdrawFeedRewardPoolResponse): _18.MsgWithdrawFeedRewardPoolResponseProtoMsg;
            };
            MsgSetPayees: {
                typeUrl: string;
                encode(message: _18.MsgSetPayees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgSetPayees;
                fromPartial(object: Partial<_18.MsgSetPayees>): _18.MsgSetPayees;
                fromAmino(object: _18.MsgSetPayeesAmino): _18.MsgSetPayees;
                toAmino(message: _18.MsgSetPayees): _18.MsgSetPayeesAmino;
                fromAminoMsg(object: _18.MsgSetPayeesAminoMsg): _18.MsgSetPayees;
                fromProtoMsg(message: _18.MsgSetPayeesProtoMsg): _18.MsgSetPayees;
                toProto(message: _18.MsgSetPayees): Uint8Array;
                toProtoMsg(message: _18.MsgSetPayees): _18.MsgSetPayeesProtoMsg;
            };
            MsgSetPayeesResponse: {
                typeUrl: string;
                encode(_: _18.MsgSetPayeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgSetPayeesResponse;
                fromPartial(_: Partial<_18.MsgSetPayeesResponse>): _18.MsgSetPayeesResponse;
                fromAmino(_: _18.MsgSetPayeesResponseAmino): _18.MsgSetPayeesResponse;
                toAmino(_: _18.MsgSetPayeesResponse): _18.MsgSetPayeesResponseAmino;
                fromAminoMsg(object: _18.MsgSetPayeesResponseAminoMsg): _18.MsgSetPayeesResponse;
                fromProtoMsg(message: _18.MsgSetPayeesResponseProtoMsg): _18.MsgSetPayeesResponse;
                toProto(message: _18.MsgSetPayeesResponse): Uint8Array;
                toProtoMsg(message: _18.MsgSetPayeesResponse): _18.MsgSetPayeesResponseProtoMsg;
            };
            MsgTransferPayeeship: {
                typeUrl: string;
                encode(message: _18.MsgTransferPayeeship, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgTransferPayeeship;
                fromPartial(object: Partial<_18.MsgTransferPayeeship>): _18.MsgTransferPayeeship;
                fromAmino(object: _18.MsgTransferPayeeshipAmino): _18.MsgTransferPayeeship;
                toAmino(message: _18.MsgTransferPayeeship): _18.MsgTransferPayeeshipAmino;
                fromAminoMsg(object: _18.MsgTransferPayeeshipAminoMsg): _18.MsgTransferPayeeship;
                fromProtoMsg(message: _18.MsgTransferPayeeshipProtoMsg): _18.MsgTransferPayeeship;
                toProto(message: _18.MsgTransferPayeeship): Uint8Array;
                toProtoMsg(message: _18.MsgTransferPayeeship): _18.MsgTransferPayeeshipProtoMsg;
            };
            MsgTransferPayeeshipResponse: {
                typeUrl: string;
                encode(_: _18.MsgTransferPayeeshipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgTransferPayeeshipResponse;
                fromPartial(_: Partial<_18.MsgTransferPayeeshipResponse>): _18.MsgTransferPayeeshipResponse;
                fromAmino(_: _18.MsgTransferPayeeshipResponseAmino): _18.MsgTransferPayeeshipResponse;
                toAmino(_: _18.MsgTransferPayeeshipResponse): _18.MsgTransferPayeeshipResponseAmino;
                fromAminoMsg(object: _18.MsgTransferPayeeshipResponseAminoMsg): _18.MsgTransferPayeeshipResponse;
                fromProtoMsg(message: _18.MsgTransferPayeeshipResponseProtoMsg): _18.MsgTransferPayeeshipResponse;
                toProto(message: _18.MsgTransferPayeeshipResponse): Uint8Array;
                toProtoMsg(message: _18.MsgTransferPayeeshipResponse): _18.MsgTransferPayeeshipResponseProtoMsg;
            };
            MsgAcceptPayeeship: {
                typeUrl: string;
                encode(message: _18.MsgAcceptPayeeship, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgAcceptPayeeship;
                fromPartial(object: Partial<_18.MsgAcceptPayeeship>): _18.MsgAcceptPayeeship;
                fromAmino(object: _18.MsgAcceptPayeeshipAmino): _18.MsgAcceptPayeeship;
                toAmino(message: _18.MsgAcceptPayeeship): _18.MsgAcceptPayeeshipAmino;
                fromAminoMsg(object: _18.MsgAcceptPayeeshipAminoMsg): _18.MsgAcceptPayeeship;
                fromProtoMsg(message: _18.MsgAcceptPayeeshipProtoMsg): _18.MsgAcceptPayeeship;
                toProto(message: _18.MsgAcceptPayeeship): Uint8Array;
                toProtoMsg(message: _18.MsgAcceptPayeeship): _18.MsgAcceptPayeeshipProtoMsg;
            };
            MsgAcceptPayeeshipResponse: {
                typeUrl: string;
                encode(_: _18.MsgAcceptPayeeshipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgAcceptPayeeshipResponse;
                fromPartial(_: Partial<_18.MsgAcceptPayeeshipResponse>): _18.MsgAcceptPayeeshipResponse;
                fromAmino(_: _18.MsgAcceptPayeeshipResponseAmino): _18.MsgAcceptPayeeshipResponse;
                toAmino(_: _18.MsgAcceptPayeeshipResponse): _18.MsgAcceptPayeeshipResponseAmino;
                fromAminoMsg(object: _18.MsgAcceptPayeeshipResponseAminoMsg): _18.MsgAcceptPayeeshipResponse;
                fromProtoMsg(message: _18.MsgAcceptPayeeshipResponseProtoMsg): _18.MsgAcceptPayeeshipResponse;
                toProto(message: _18.MsgAcceptPayeeshipResponse): Uint8Array;
                toProtoMsg(message: _18.MsgAcceptPayeeshipResponse): _18.MsgAcceptPayeeshipResponseProtoMsg;
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
            QueryFeedConfigRequest: {
                typeUrl: string;
                encode(message: _17.QueryFeedConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryFeedConfigRequest;
                fromPartial(object: Partial<_17.QueryFeedConfigRequest>): _17.QueryFeedConfigRequest;
                fromAmino(object: _17.QueryFeedConfigRequestAmino): _17.QueryFeedConfigRequest;
                toAmino(message: _17.QueryFeedConfigRequest): _17.QueryFeedConfigRequestAmino;
                fromAminoMsg(object: _17.QueryFeedConfigRequestAminoMsg): _17.QueryFeedConfigRequest;
                fromProtoMsg(message: _17.QueryFeedConfigRequestProtoMsg): _17.QueryFeedConfigRequest;
                toProto(message: _17.QueryFeedConfigRequest): Uint8Array;
                toProtoMsg(message: _17.QueryFeedConfigRequest): _17.QueryFeedConfigRequestProtoMsg;
            };
            QueryFeedConfigResponse: {
                typeUrl: string;
                encode(message: _17.QueryFeedConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryFeedConfigResponse;
                fromPartial(object: Partial<_17.QueryFeedConfigResponse>): _17.QueryFeedConfigResponse;
                fromAmino(object: _17.QueryFeedConfigResponseAmino): _17.QueryFeedConfigResponse;
                toAmino(message: _17.QueryFeedConfigResponse): _17.QueryFeedConfigResponseAmino;
                fromAminoMsg(object: _17.QueryFeedConfigResponseAminoMsg): _17.QueryFeedConfigResponse;
                fromProtoMsg(message: _17.QueryFeedConfigResponseProtoMsg): _17.QueryFeedConfigResponse;
                toProto(message: _17.QueryFeedConfigResponse): Uint8Array;
                toProtoMsg(message: _17.QueryFeedConfigResponse): _17.QueryFeedConfigResponseProtoMsg;
            };
            QueryFeedConfigInfoRequest: {
                typeUrl: string;
                encode(message: _17.QueryFeedConfigInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryFeedConfigInfoRequest;
                fromPartial(object: Partial<_17.QueryFeedConfigInfoRequest>): _17.QueryFeedConfigInfoRequest;
                fromAmino(object: _17.QueryFeedConfigInfoRequestAmino): _17.QueryFeedConfigInfoRequest;
                toAmino(message: _17.QueryFeedConfigInfoRequest): _17.QueryFeedConfigInfoRequestAmino;
                fromAminoMsg(object: _17.QueryFeedConfigInfoRequestAminoMsg): _17.QueryFeedConfigInfoRequest;
                fromProtoMsg(message: _17.QueryFeedConfigInfoRequestProtoMsg): _17.QueryFeedConfigInfoRequest;
                toProto(message: _17.QueryFeedConfigInfoRequest): Uint8Array;
                toProtoMsg(message: _17.QueryFeedConfigInfoRequest): _17.QueryFeedConfigInfoRequestProtoMsg;
            };
            QueryFeedConfigInfoResponse: {
                typeUrl: string;
                encode(message: _17.QueryFeedConfigInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryFeedConfigInfoResponse;
                fromPartial(object: Partial<_17.QueryFeedConfigInfoResponse>): _17.QueryFeedConfigInfoResponse;
                fromAmino(object: _17.QueryFeedConfigInfoResponseAmino): _17.QueryFeedConfigInfoResponse;
                toAmino(message: _17.QueryFeedConfigInfoResponse): _17.QueryFeedConfigInfoResponseAmino;
                fromAminoMsg(object: _17.QueryFeedConfigInfoResponseAminoMsg): _17.QueryFeedConfigInfoResponse;
                fromProtoMsg(message: _17.QueryFeedConfigInfoResponseProtoMsg): _17.QueryFeedConfigInfoResponse;
                toProto(message: _17.QueryFeedConfigInfoResponse): Uint8Array;
                toProtoMsg(message: _17.QueryFeedConfigInfoResponse): _17.QueryFeedConfigInfoResponseProtoMsg;
            };
            QueryLatestRoundRequest: {
                typeUrl: string;
                encode(message: _17.QueryLatestRoundRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryLatestRoundRequest;
                fromPartial(object: Partial<_17.QueryLatestRoundRequest>): _17.QueryLatestRoundRequest;
                fromAmino(object: _17.QueryLatestRoundRequestAmino): _17.QueryLatestRoundRequest;
                toAmino(message: _17.QueryLatestRoundRequest): _17.QueryLatestRoundRequestAmino;
                fromAminoMsg(object: _17.QueryLatestRoundRequestAminoMsg): _17.QueryLatestRoundRequest;
                fromProtoMsg(message: _17.QueryLatestRoundRequestProtoMsg): _17.QueryLatestRoundRequest;
                toProto(message: _17.QueryLatestRoundRequest): Uint8Array;
                toProtoMsg(message: _17.QueryLatestRoundRequest): _17.QueryLatestRoundRequestProtoMsg;
            };
            QueryLatestRoundResponse: {
                typeUrl: string;
                encode(message: _17.QueryLatestRoundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryLatestRoundResponse;
                fromPartial(object: Partial<_17.QueryLatestRoundResponse>): _17.QueryLatestRoundResponse;
                fromAmino(object: _17.QueryLatestRoundResponseAmino): _17.QueryLatestRoundResponse;
                toAmino(message: _17.QueryLatestRoundResponse): _17.QueryLatestRoundResponseAmino;
                fromAminoMsg(object: _17.QueryLatestRoundResponseAminoMsg): _17.QueryLatestRoundResponse;
                fromProtoMsg(message: _17.QueryLatestRoundResponseProtoMsg): _17.QueryLatestRoundResponse;
                toProto(message: _17.QueryLatestRoundResponse): Uint8Array;
                toProtoMsg(message: _17.QueryLatestRoundResponse): _17.QueryLatestRoundResponseProtoMsg;
            };
            QueryLatestTransmissionDetailsRequest: {
                typeUrl: string;
                encode(message: _17.QueryLatestTransmissionDetailsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryLatestTransmissionDetailsRequest;
                fromPartial(object: Partial<_17.QueryLatestTransmissionDetailsRequest>): _17.QueryLatestTransmissionDetailsRequest;
                fromAmino(object: _17.QueryLatestTransmissionDetailsRequestAmino): _17.QueryLatestTransmissionDetailsRequest;
                toAmino(message: _17.QueryLatestTransmissionDetailsRequest): _17.QueryLatestTransmissionDetailsRequestAmino;
                fromAminoMsg(object: _17.QueryLatestTransmissionDetailsRequestAminoMsg): _17.QueryLatestTransmissionDetailsRequest;
                fromProtoMsg(message: _17.QueryLatestTransmissionDetailsRequestProtoMsg): _17.QueryLatestTransmissionDetailsRequest;
                toProto(message: _17.QueryLatestTransmissionDetailsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryLatestTransmissionDetailsRequest): _17.QueryLatestTransmissionDetailsRequestProtoMsg;
            };
            QueryLatestTransmissionDetailsResponse: {
                typeUrl: string;
                encode(message: _17.QueryLatestTransmissionDetailsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryLatestTransmissionDetailsResponse;
                fromPartial(object: Partial<_17.QueryLatestTransmissionDetailsResponse>): _17.QueryLatestTransmissionDetailsResponse;
                fromAmino(object: _17.QueryLatestTransmissionDetailsResponseAmino): _17.QueryLatestTransmissionDetailsResponse;
                toAmino(message: _17.QueryLatestTransmissionDetailsResponse): _17.QueryLatestTransmissionDetailsResponseAmino;
                fromAminoMsg(object: _17.QueryLatestTransmissionDetailsResponseAminoMsg): _17.QueryLatestTransmissionDetailsResponse;
                fromProtoMsg(message: _17.QueryLatestTransmissionDetailsResponseProtoMsg): _17.QueryLatestTransmissionDetailsResponse;
                toProto(message: _17.QueryLatestTransmissionDetailsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryLatestTransmissionDetailsResponse): _17.QueryLatestTransmissionDetailsResponseProtoMsg;
            };
            QueryOwedAmountRequest: {
                typeUrl: string;
                encode(message: _17.QueryOwedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryOwedAmountRequest;
                fromPartial(object: Partial<_17.QueryOwedAmountRequest>): _17.QueryOwedAmountRequest;
                fromAmino(object: _17.QueryOwedAmountRequestAmino): _17.QueryOwedAmountRequest;
                toAmino(message: _17.QueryOwedAmountRequest): _17.QueryOwedAmountRequestAmino;
                fromAminoMsg(object: _17.QueryOwedAmountRequestAminoMsg): _17.QueryOwedAmountRequest;
                fromProtoMsg(message: _17.QueryOwedAmountRequestProtoMsg): _17.QueryOwedAmountRequest;
                toProto(message: _17.QueryOwedAmountRequest): Uint8Array;
                toProtoMsg(message: _17.QueryOwedAmountRequest): _17.QueryOwedAmountRequestProtoMsg;
            };
            QueryOwedAmountResponse: {
                typeUrl: string;
                encode(message: _17.QueryOwedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryOwedAmountResponse;
                fromPartial(object: Partial<_17.QueryOwedAmountResponse>): _17.QueryOwedAmountResponse;
                fromAmino(object: _17.QueryOwedAmountResponseAmino): _17.QueryOwedAmountResponse;
                toAmino(message: _17.QueryOwedAmountResponse): _17.QueryOwedAmountResponseAmino;
                fromAminoMsg(object: _17.QueryOwedAmountResponseAminoMsg): _17.QueryOwedAmountResponse;
                fromProtoMsg(message: _17.QueryOwedAmountResponseProtoMsg): _17.QueryOwedAmountResponse;
                toProto(message: _17.QueryOwedAmountResponse): Uint8Array;
                toProtoMsg(message: _17.QueryOwedAmountResponse): _17.QueryOwedAmountResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _17.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryModuleStateRequest;
                fromPartial(_: Partial<_17.QueryModuleStateRequest>): _17.QueryModuleStateRequest;
                fromAmino(_: _17.QueryModuleStateRequestAmino): _17.QueryModuleStateRequest;
                toAmino(_: _17.QueryModuleStateRequest): _17.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _17.QueryModuleStateRequestAminoMsg): _17.QueryModuleStateRequest;
                fromProtoMsg(message: _17.QueryModuleStateRequestProtoMsg): _17.QueryModuleStateRequest;
                toProto(message: _17.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _17.QueryModuleStateRequest): _17.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _17.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryModuleStateResponse;
                fromPartial(object: Partial<_17.QueryModuleStateResponse>): _17.QueryModuleStateResponse;
                fromAmino(object: _17.QueryModuleStateResponseAmino): _17.QueryModuleStateResponse;
                toAmino(message: _17.QueryModuleStateResponse): _17.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _17.QueryModuleStateResponseAminoMsg): _17.QueryModuleStateResponse;
                fromProtoMsg(message: _17.QueryModuleStateResponseProtoMsg): _17.QueryModuleStateResponse;
                toProto(message: _17.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _17.QueryModuleStateResponse): _17.QueryModuleStateResponseProtoMsg;
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
            FeedConfig: {
                typeUrl: string;
                encode(message: _16.FeedConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.FeedConfig;
                fromPartial(object: Partial<_16.FeedConfig>): _16.FeedConfig;
                fromAmino(object: _16.FeedConfigAmino): _16.FeedConfig;
                toAmino(message: _16.FeedConfig): _16.FeedConfigAmino;
                fromAminoMsg(object: _16.FeedConfigAminoMsg): _16.FeedConfig;
                fromProtoMsg(message: _16.FeedConfigProtoMsg): _16.FeedConfig;
                toProto(message: _16.FeedConfig): Uint8Array;
                toProtoMsg(message: _16.FeedConfig): _16.FeedConfigProtoMsg;
            };
            FeedConfigInfo: {
                typeUrl: string;
                encode(message: _16.FeedConfigInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.FeedConfigInfo;
                fromPartial(object: Partial<_16.FeedConfigInfo>): _16.FeedConfigInfo;
                fromAmino(object: _16.FeedConfigInfoAmino): _16.FeedConfigInfo;
                toAmino(message: _16.FeedConfigInfo): _16.FeedConfigInfoAmino;
                fromAminoMsg(object: _16.FeedConfigInfoAminoMsg): _16.FeedConfigInfo;
                fromProtoMsg(message: _16.FeedConfigInfoProtoMsg): _16.FeedConfigInfo;
                toProto(message: _16.FeedConfigInfo): Uint8Array;
                toProtoMsg(message: _16.FeedConfigInfo): _16.FeedConfigInfoProtoMsg;
            };
            ModuleParams: {
                typeUrl: string;
                encode(message: _16.ModuleParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ModuleParams;
                fromPartial(object: Partial<_16.ModuleParams>): _16.ModuleParams;
                fromAmino(object: _16.ModuleParamsAmino): _16.ModuleParams;
                toAmino(message: _16.ModuleParams): _16.ModuleParamsAmino;
                fromAminoMsg(object: _16.ModuleParamsAminoMsg): _16.ModuleParams;
                fromProtoMsg(message: _16.ModuleParamsProtoMsg): _16.ModuleParams;
                toProto(message: _16.ModuleParams): Uint8Array;
                toProtoMsg(message: _16.ModuleParams): _16.ModuleParamsProtoMsg;
            };
            ContractConfig: {
                typeUrl: string;
                encode(message: _16.ContractConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ContractConfig;
                fromPartial(object: Partial<_16.ContractConfig>): _16.ContractConfig;
                fromAmino(object: _16.ContractConfigAmino): _16.ContractConfig;
                toAmino(message: _16.ContractConfig): _16.ContractConfigAmino;
                fromAminoMsg(object: _16.ContractConfigAminoMsg): _16.ContractConfig;
                fromProtoMsg(message: _16.ContractConfigProtoMsg): _16.ContractConfig;
                toProto(message: _16.ContractConfig): Uint8Array;
                toProtoMsg(message: _16.ContractConfig): _16.ContractConfigProtoMsg;
            };
            SetConfigProposal: {
                typeUrl: string;
                encode(message: _16.SetConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SetConfigProposal;
                fromPartial(object: Partial<_16.SetConfigProposal>): _16.SetConfigProposal;
                fromAmino(object: _16.SetConfigProposalAmino): _16.SetConfigProposal;
                toAmino(message: _16.SetConfigProposal): _16.SetConfigProposalAmino;
                fromAminoMsg(object: _16.SetConfigProposalAminoMsg): _16.SetConfigProposal;
                fromProtoMsg(message: _16.SetConfigProposalProtoMsg): _16.SetConfigProposal;
                toProto(message: _16.SetConfigProposal): Uint8Array;
                toProtoMsg(message: _16.SetConfigProposal): _16.SetConfigProposalProtoMsg;
            };
            FeedProperties: {
                typeUrl: string;
                encode(message: _16.FeedProperties, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.FeedProperties;
                fromPartial(object: Partial<_16.FeedProperties>): _16.FeedProperties;
                fromAmino(object: _16.FeedPropertiesAmino): _16.FeedProperties;
                toAmino(message: _16.FeedProperties): _16.FeedPropertiesAmino;
                fromAminoMsg(object: _16.FeedPropertiesAminoMsg): _16.FeedProperties;
                fromProtoMsg(message: _16.FeedPropertiesProtoMsg): _16.FeedProperties;
                toProto(message: _16.FeedProperties): Uint8Array;
                toProtoMsg(message: _16.FeedProperties): _16.FeedPropertiesProtoMsg;
            };
            SetBatchConfigProposal: {
                typeUrl: string;
                encode(message: _16.SetBatchConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SetBatchConfigProposal;
                fromPartial(object: Partial<_16.SetBatchConfigProposal>): _16.SetBatchConfigProposal;
                fromAmino(object: _16.SetBatchConfigProposalAmino): _16.SetBatchConfigProposal;
                toAmino(message: _16.SetBatchConfigProposal): _16.SetBatchConfigProposalAmino;
                fromAminoMsg(object: _16.SetBatchConfigProposalAminoMsg): _16.SetBatchConfigProposal;
                fromProtoMsg(message: _16.SetBatchConfigProposalProtoMsg): _16.SetBatchConfigProposal;
                toProto(message: _16.SetBatchConfigProposal): Uint8Array;
                toProtoMsg(message: _16.SetBatchConfigProposal): _16.SetBatchConfigProposalProtoMsg;
            };
            OracleObservationsCounts: {
                typeUrl: string;
                encode(message: _16.OracleObservationsCounts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.OracleObservationsCounts;
                fromPartial(object: Partial<_16.OracleObservationsCounts>): _16.OracleObservationsCounts;
                fromAmino(object: _16.OracleObservationsCountsAmino): _16.OracleObservationsCounts;
                toAmino(message: _16.OracleObservationsCounts): _16.OracleObservationsCountsAmino;
                fromAminoMsg(object: _16.OracleObservationsCountsAminoMsg): _16.OracleObservationsCounts;
                fromProtoMsg(message: _16.OracleObservationsCountsProtoMsg): _16.OracleObservationsCounts;
                toProto(message: _16.OracleObservationsCounts): Uint8Array;
                toProtoMsg(message: _16.OracleObservationsCounts): _16.OracleObservationsCountsProtoMsg;
            };
            GasReimbursements: {
                typeUrl: string;
                encode(message: _16.GasReimbursements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.GasReimbursements;
                fromPartial(object: Partial<_16.GasReimbursements>): _16.GasReimbursements;
                fromAmino(object: _16.GasReimbursementsAmino): _16.GasReimbursements;
                toAmino(message: _16.GasReimbursements): _16.GasReimbursementsAmino;
                fromAminoMsg(object: _16.GasReimbursementsAminoMsg): _16.GasReimbursements;
                fromProtoMsg(message: _16.GasReimbursementsProtoMsg): _16.GasReimbursements;
                toProto(message: _16.GasReimbursements): Uint8Array;
                toProtoMsg(message: _16.GasReimbursements): _16.GasReimbursementsProtoMsg;
            };
            Payee: {
                typeUrl: string;
                encode(message: _16.Payee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Payee;
                fromPartial(object: Partial<_16.Payee>): _16.Payee;
                fromAmino(object: _16.PayeeAmino): _16.Payee;
                toAmino(message: _16.Payee): _16.PayeeAmino;
                fromAminoMsg(object: _16.PayeeAminoMsg): _16.Payee;
                fromProtoMsg(message: _16.PayeeProtoMsg): _16.Payee;
                toProto(message: _16.Payee): Uint8Array;
                toProtoMsg(message: _16.Payee): _16.PayeeProtoMsg;
            };
            Transmission: {
                typeUrl: string;
                encode(message: _16.Transmission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Transmission;
                fromPartial(object: Partial<_16.Transmission>): _16.Transmission;
                fromAmino(object: _16.TransmissionAmino): _16.Transmission;
                toAmino(message: _16.Transmission): _16.TransmissionAmino;
                fromAminoMsg(object: _16.TransmissionAminoMsg): _16.Transmission;
                fromProtoMsg(message: _16.TransmissionProtoMsg): _16.Transmission;
                toProto(message: _16.Transmission): Uint8Array;
                toProtoMsg(message: _16.Transmission): _16.TransmissionProtoMsg;
            };
            EpochAndRound: {
                typeUrl: string;
                encode(message: _16.EpochAndRound, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EpochAndRound;
                fromPartial(object: Partial<_16.EpochAndRound>): _16.EpochAndRound;
                fromAmino(object: _16.EpochAndRoundAmino): _16.EpochAndRound;
                toAmino(message: _16.EpochAndRound): _16.EpochAndRoundAmino;
                fromAminoMsg(object: _16.EpochAndRoundAminoMsg): _16.EpochAndRound;
                fromProtoMsg(message: _16.EpochAndRoundProtoMsg): _16.EpochAndRound;
                toProto(message: _16.EpochAndRound): Uint8Array;
                toProtoMsg(message: _16.EpochAndRound): _16.EpochAndRoundProtoMsg;
            };
            Report: {
                typeUrl: string;
                encode(message: _16.Report, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Report;
                fromPartial(object: Partial<_16.Report>): _16.Report;
                fromAmino(object: _16.ReportAmino): _16.Report;
                toAmino(message: _16.Report): _16.ReportAmino;
                fromAminoMsg(object: _16.ReportAminoMsg): _16.Report;
                fromProtoMsg(message: _16.ReportProtoMsg): _16.Report;
                toProto(message: _16.Report): Uint8Array;
                toProtoMsg(message: _16.Report): _16.ReportProtoMsg;
            };
            ReportToSign: {
                typeUrl: string;
                encode(message: _16.ReportToSign, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ReportToSign;
                fromPartial(object: Partial<_16.ReportToSign>): _16.ReportToSign;
                fromAmino(object: _16.ReportToSignAmino): _16.ReportToSign;
                toAmino(message: _16.ReportToSign): _16.ReportToSignAmino;
                fromAminoMsg(object: _16.ReportToSignAminoMsg): _16.ReportToSign;
                fromProtoMsg(message: _16.ReportToSignProtoMsg): _16.ReportToSign;
                toProto(message: _16.ReportToSign): Uint8Array;
                toProtoMsg(message: _16.ReportToSign): _16.ReportToSignProtoMsg;
            };
            EventOraclePaid: {
                typeUrl: string;
                encode(message: _16.EventOraclePaid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventOraclePaid;
                fromPartial(object: Partial<_16.EventOraclePaid>): _16.EventOraclePaid;
                fromAmino(object: _16.EventOraclePaidAmino): _16.EventOraclePaid;
                toAmino(message: _16.EventOraclePaid): _16.EventOraclePaidAmino;
                fromAminoMsg(object: _16.EventOraclePaidAminoMsg): _16.EventOraclePaid;
                fromProtoMsg(message: _16.EventOraclePaidProtoMsg): _16.EventOraclePaid;
                toProto(message: _16.EventOraclePaid): Uint8Array;
                toProtoMsg(message: _16.EventOraclePaid): _16.EventOraclePaidProtoMsg;
            };
            EventAnswerUpdated: {
                typeUrl: string;
                encode(message: _16.EventAnswerUpdated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventAnswerUpdated;
                fromPartial(object: Partial<_16.EventAnswerUpdated>): _16.EventAnswerUpdated;
                fromAmino(object: _16.EventAnswerUpdatedAmino): _16.EventAnswerUpdated;
                toAmino(message: _16.EventAnswerUpdated): _16.EventAnswerUpdatedAmino;
                fromAminoMsg(object: _16.EventAnswerUpdatedAminoMsg): _16.EventAnswerUpdated;
                fromProtoMsg(message: _16.EventAnswerUpdatedProtoMsg): _16.EventAnswerUpdated;
                toProto(message: _16.EventAnswerUpdated): Uint8Array;
                toProtoMsg(message: _16.EventAnswerUpdated): _16.EventAnswerUpdatedProtoMsg;
            };
            EventNewRound: {
                typeUrl: string;
                encode(message: _16.EventNewRound, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventNewRound;
                fromPartial(object: Partial<_16.EventNewRound>): _16.EventNewRound;
                fromAmino(object: _16.EventNewRoundAmino): _16.EventNewRound;
                toAmino(message: _16.EventNewRound): _16.EventNewRoundAmino;
                fromAminoMsg(object: _16.EventNewRoundAminoMsg): _16.EventNewRound;
                fromProtoMsg(message: _16.EventNewRoundProtoMsg): _16.EventNewRound;
                toProto(message: _16.EventNewRound): Uint8Array;
                toProtoMsg(message: _16.EventNewRound): _16.EventNewRoundProtoMsg;
            };
            EventTransmitted: {
                typeUrl: string;
                encode(message: _16.EventTransmitted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventTransmitted;
                fromPartial(object: Partial<_16.EventTransmitted>): _16.EventTransmitted;
                fromAmino(object: _16.EventTransmittedAmino): _16.EventTransmitted;
                toAmino(message: _16.EventTransmitted): _16.EventTransmittedAmino;
                fromAminoMsg(object: _16.EventTransmittedAminoMsg): _16.EventTransmitted;
                fromProtoMsg(message: _16.EventTransmittedProtoMsg): _16.EventTransmitted;
                toProto(message: _16.EventTransmitted): Uint8Array;
                toProtoMsg(message: _16.EventTransmitted): _16.EventTransmittedProtoMsg;
            };
            EventNewTransmission: {
                typeUrl: string;
                encode(message: _16.EventNewTransmission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventNewTransmission;
                fromPartial(object: Partial<_16.EventNewTransmission>): _16.EventNewTransmission;
                fromAmino(object: _16.EventNewTransmissionAmino): _16.EventNewTransmission;
                toAmino(message: _16.EventNewTransmission): _16.EventNewTransmissionAmino;
                fromAminoMsg(object: _16.EventNewTransmissionAminoMsg): _16.EventNewTransmission;
                fromProtoMsg(message: _16.EventNewTransmissionProtoMsg): _16.EventNewTransmission;
                toProto(message: _16.EventNewTransmission): Uint8Array;
                toProtoMsg(message: _16.EventNewTransmission): _16.EventNewTransmissionProtoMsg;
            };
            EventConfigSet: {
                typeUrl: string;
                encode(message: _16.EventConfigSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventConfigSet;
                fromPartial(object: Partial<_16.EventConfigSet>): _16.EventConfigSet;
                fromAmino(object: _16.EventConfigSetAmino): _16.EventConfigSet;
                toAmino(message: _16.EventConfigSet): _16.EventConfigSetAmino;
                fromAminoMsg(object: _16.EventConfigSetAminoMsg): _16.EventConfigSet;
                fromProtoMsg(message: _16.EventConfigSetProtoMsg): _16.EventConfigSet;
                toProto(message: _16.EventConfigSet): Uint8Array;
                toProtoMsg(message: _16.EventConfigSet): _16.EventConfigSetProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
                fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
                toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
                fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                toProto(message: _15.GenesisState): Uint8Array;
                toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
            };
            FeedTransmission: {
                typeUrl: string;
                encode(message: _15.FeedTransmission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.FeedTransmission;
                fromPartial(object: Partial<_15.FeedTransmission>): _15.FeedTransmission;
                fromAmino(object: _15.FeedTransmissionAmino): _15.FeedTransmission;
                toAmino(message: _15.FeedTransmission): _15.FeedTransmissionAmino;
                fromAminoMsg(object: _15.FeedTransmissionAminoMsg): _15.FeedTransmission;
                fromProtoMsg(message: _15.FeedTransmissionProtoMsg): _15.FeedTransmission;
                toProto(message: _15.FeedTransmission): Uint8Array;
                toProtoMsg(message: _15.FeedTransmission): _15.FeedTransmissionProtoMsg;
            };
            FeedEpochAndRound: {
                typeUrl: string;
                encode(message: _15.FeedEpochAndRound, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.FeedEpochAndRound;
                fromPartial(object: Partial<_15.FeedEpochAndRound>): _15.FeedEpochAndRound;
                fromAmino(object: _15.FeedEpochAndRoundAmino): _15.FeedEpochAndRound;
                toAmino(message: _15.FeedEpochAndRound): _15.FeedEpochAndRoundAmino;
                fromAminoMsg(object: _15.FeedEpochAndRoundAminoMsg): _15.FeedEpochAndRound;
                fromProtoMsg(message: _15.FeedEpochAndRoundProtoMsg): _15.FeedEpochAndRound;
                toProto(message: _15.FeedEpochAndRound): Uint8Array;
                toProtoMsg(message: _15.FeedEpochAndRound): _15.FeedEpochAndRoundProtoMsg;
            };
            FeedLatestAggregatorRoundIDs: {
                typeUrl: string;
                encode(message: _15.FeedLatestAggregatorRoundIDs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.FeedLatestAggregatorRoundIDs;
                fromPartial(object: Partial<_15.FeedLatestAggregatorRoundIDs>): _15.FeedLatestAggregatorRoundIDs;
                fromAmino(object: _15.FeedLatestAggregatorRoundIDsAmino): _15.FeedLatestAggregatorRoundIDs;
                toAmino(message: _15.FeedLatestAggregatorRoundIDs): _15.FeedLatestAggregatorRoundIDsAmino;
                fromAminoMsg(object: _15.FeedLatestAggregatorRoundIDsAminoMsg): _15.FeedLatestAggregatorRoundIDs;
                fromProtoMsg(message: _15.FeedLatestAggregatorRoundIDsProtoMsg): _15.FeedLatestAggregatorRoundIDs;
                toProto(message: _15.FeedLatestAggregatorRoundIDs): Uint8Array;
                toProtoMsg(message: _15.FeedLatestAggregatorRoundIDs): _15.FeedLatestAggregatorRoundIDsProtoMsg;
            };
            RewardPool: {
                typeUrl: string;
                encode(message: _15.RewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.RewardPool;
                fromPartial(object: Partial<_15.RewardPool>): _15.RewardPool;
                fromAmino(object: _15.RewardPoolAmino): _15.RewardPool;
                toAmino(message: _15.RewardPool): _15.RewardPoolAmino;
                fromAminoMsg(object: _15.RewardPoolAminoMsg): _15.RewardPool;
                fromProtoMsg(message: _15.RewardPoolProtoMsg): _15.RewardPool;
                toProto(message: _15.RewardPool): Uint8Array;
                toProtoMsg(message: _15.RewardPool): _15.RewardPoolProtoMsg;
            };
            FeedCounts: {
                typeUrl: string;
                encode(message: _15.FeedCounts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.FeedCounts;
                fromPartial(object: Partial<_15.FeedCounts>): _15.FeedCounts;
                fromAmino(object: _15.FeedCountsAmino): _15.FeedCounts;
                toAmino(message: _15.FeedCounts): _15.FeedCountsAmino;
                fromAminoMsg(object: _15.FeedCountsAminoMsg): _15.FeedCounts;
                fromProtoMsg(message: _15.FeedCountsProtoMsg): _15.FeedCounts;
                toProto(message: _15.FeedCounts): Uint8Array;
                toProtoMsg(message: _15.FeedCounts): _15.FeedCountsProtoMsg;
            };
            Count: {
                typeUrl: string;
                encode(message: _15.Count, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Count;
                fromPartial(object: Partial<_15.Count>): _15.Count;
                fromAmino(object: _15.CountAmino): _15.Count;
                toAmino(message: _15.Count): _15.CountAmino;
                fromAminoMsg(object: _15.CountAminoMsg): _15.Count;
                fromProtoMsg(message: _15.CountProtoMsg): _15.Count;
                toProto(message: _15.Count): Uint8Array;
                toProtoMsg(message: _15.Count): _15.CountProtoMsg;
            };
            PendingPayeeship: {
                typeUrl: string;
                encode(message: _15.PendingPayeeship, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.PendingPayeeship;
                fromPartial(object: Partial<_15.PendingPayeeship>): _15.PendingPayeeship;
                fromAmino(object: _15.PendingPayeeshipAmino): _15.PendingPayeeship;
                toAmino(message: _15.PendingPayeeship): _15.PendingPayeeshipAmino;
                fromAminoMsg(object: _15.PendingPayeeshipAminoMsg): _15.PendingPayeeship;
                fromProtoMsg(message: _15.PendingPayeeshipProtoMsg): _15.PendingPayeeship;
                toProto(message: _15.PendingPayeeship): Uint8Array;
                toProtoMsg(message: _15.PendingPayeeship): _15.PendingPayeeshipProtoMsg;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                bandRelayers(request?: _23.QueryBandRelayersRequest): Promise<_23.QueryBandRelayersResponse>;
                bandPriceStates(request?: _23.QueryBandPriceStatesRequest): Promise<_23.QueryBandPriceStatesResponse>;
                bandIBCPriceStates(request?: _23.QueryBandIBCPriceStatesRequest): Promise<_23.QueryBandIBCPriceStatesResponse>;
                priceFeedPriceStates(request?: _23.QueryPriceFeedPriceStatesRequest): Promise<_23.QueryPriceFeedPriceStatesResponse>;
                coinbasePriceStates(request?: _23.QueryCoinbasePriceStatesRequest): Promise<_23.QueryCoinbasePriceStatesResponse>;
                pythPriceStates(request?: _23.QueryPythPriceStatesRequest): Promise<_23.QueryPythPriceStatesResponse>;
                providerPriceState(request: _23.QueryProviderPriceStateRequest): Promise<_23.QueryProviderPriceStateResponse>;
                oracleModuleState(request?: _23.QueryModuleStateRequest): Promise<_23.QueryModuleStateResponse>;
                historicalPriceRecords(request: _23.QueryHistoricalPriceRecordsRequest): Promise<_23.QueryHistoricalPriceRecordsResponse>;
                oracleVolatility(request: _23.QueryOracleVolatilityRequest): Promise<_23.QueryOracleVolatilityResponse>;
                oracleProvidersInfo(request?: _23.QueryOracleProvidersInfoRequest): Promise<_23.QueryOracleProvidersInfoResponse>;
                oracleProviderPrices(request: _23.QueryOracleProviderPricesRequest): Promise<_23.QueryOracleProviderPricesResponse>;
                oraclePrice(request: _23.QueryOraclePriceRequest): Promise<_23.QueryOraclePriceResponse>;
                pythPrice(request: _23.QueryPythPriceRequest): Promise<_23.QueryPythPriceResponse>;
            };
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    relayProviderPrices(value: _24.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayPriceFeedPrice(value: _24.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayBandRates(value: _24.MsgRelayBandRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestBandIBCRates(value: _24.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayCoinbaseMessages(value: _24.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    relayPythPrices(value: _24.MsgRelayPythPrices): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    relayProviderPrices(value: _24.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: _24.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: _24.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: _24.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: _24.MsgRelayBandRates): {
                        typeUrl: string;
                        value: _24.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: _24.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: _24.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: _24.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: _24.MsgRelayCoinbaseMessages;
                    };
                    relayPythPrices(value: _24.MsgRelayPythPrices): {
                        typeUrl: string;
                        value: _24.MsgRelayPythPrices;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    relayProviderPrices(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: any): {
                        typeUrl: string;
                        value: _24.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayCoinbaseMessages;
                    };
                    relayPythPrices(value: any): {
                        typeUrl: string;
                        value: _24.MsgRelayPythPrices;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    relayProviderPrices(value: _24.MsgRelayProviderPrices): {
                        typeUrl: string;
                        value: _24.MsgRelayProviderPrices;
                    };
                    relayPriceFeedPrice(value: _24.MsgRelayPriceFeedPrice): {
                        typeUrl: string;
                        value: _24.MsgRelayPriceFeedPrice;
                    };
                    relayBandRates(value: _24.MsgRelayBandRates): {
                        typeUrl: string;
                        value: _24.MsgRelayBandRates;
                    };
                    requestBandIBCRates(value: _24.MsgRequestBandIBCRates): {
                        typeUrl: string;
                        value: _24.MsgRequestBandIBCRates;
                    };
                    relayCoinbaseMessages(value: _24.MsgRelayCoinbaseMessages): {
                        typeUrl: string;
                        value: _24.MsgRelayCoinbaseMessages;
                    };
                    relayPythPrices(value: _24.MsgRelayPythPrices): {
                        typeUrl: string;
                        value: _24.MsgRelayPythPrices;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRelayProviderPrices) => _24.MsgRelayProviderPricesAmino;
                    fromAmino: (object: _24.MsgRelayProviderPricesAmino) => _24.MsgRelayProviderPrices;
                };
                "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRelayPriceFeedPrice) => _24.MsgRelayPriceFeedPriceAmino;
                    fromAmino: (object: _24.MsgRelayPriceFeedPriceAmino) => _24.MsgRelayPriceFeedPrice;
                };
                "/injective.oracle.v1beta1.MsgRelayBandRates": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRelayBandRates) => _24.MsgRelayBandRatesAmino;
                    fromAmino: (object: _24.MsgRelayBandRatesAmino) => _24.MsgRelayBandRates;
                };
                "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRequestBandIBCRates) => _24.MsgRequestBandIBCRatesAmino;
                    fromAmino: (object: _24.MsgRequestBandIBCRatesAmino) => _24.MsgRequestBandIBCRates;
                };
                "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRelayCoinbaseMessages) => _24.MsgRelayCoinbaseMessagesAmino;
                    fromAmino: (object: _24.MsgRelayCoinbaseMessagesAmino) => _24.MsgRelayCoinbaseMessages;
                };
                "/injective.oracle.v1beta1.MsgRelayPythPrices": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRelayPythPrices) => _24.MsgRelayPythPricesAmino;
                    fromAmino: (object: _24.MsgRelayPythPricesAmino) => _24.MsgRelayPythPrices;
                };
                "/injective.oracle.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _24.MsgUpdateParams) => _24.MsgUpdateParamsAmino;
                    fromAmino: (object: _24.MsgUpdateParamsAmino) => _24.MsgUpdateParams;
                };
            };
            MsgRelayProviderPrices: {
                typeUrl: string;
                encode(message: _24.MsgRelayProviderPrices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRelayProviderPrices;
                fromPartial(object: Partial<_24.MsgRelayProviderPrices>): _24.MsgRelayProviderPrices;
                fromAmino(object: _24.MsgRelayProviderPricesAmino): _24.MsgRelayProviderPrices;
                toAmino(message: _24.MsgRelayProviderPrices): _24.MsgRelayProviderPricesAmino;
                fromAminoMsg(object: _24.MsgRelayProviderPricesAminoMsg): _24.MsgRelayProviderPrices;
                fromProtoMsg(message: _24.MsgRelayProviderPricesProtoMsg): _24.MsgRelayProviderPrices;
                toProto(message: _24.MsgRelayProviderPrices): Uint8Array;
                toProtoMsg(message: _24.MsgRelayProviderPrices): _24.MsgRelayProviderPricesProtoMsg;
            };
            MsgRelayProviderPricesResponse: {
                typeUrl: string;
                encode(_: _24.MsgRelayProviderPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRelayProviderPricesResponse;
                fromPartial(_: Partial<_24.MsgRelayProviderPricesResponse>): _24.MsgRelayProviderPricesResponse;
                fromAmino(_: _24.MsgRelayProviderPricesResponseAmino): _24.MsgRelayProviderPricesResponse;
                toAmino(_: _24.MsgRelayProviderPricesResponse): _24.MsgRelayProviderPricesResponseAmino;
                fromAminoMsg(object: _24.MsgRelayProviderPricesResponseAminoMsg): _24.MsgRelayProviderPricesResponse;
                fromProtoMsg(message: _24.MsgRelayProviderPricesResponseProtoMsg): _24.MsgRelayProviderPricesResponse;
                toProto(message: _24.MsgRelayProviderPricesResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRelayProviderPricesResponse): _24.MsgRelayProviderPricesResponseProtoMsg;
            };
            MsgRelayPriceFeedPrice: {
                typeUrl: string;
                encode(message: _24.MsgRelayPriceFeedPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRelayPriceFeedPrice;
                fromPartial(object: Partial<_24.MsgRelayPriceFeedPrice>): _24.MsgRelayPriceFeedPrice;
                fromAmino(object: _24.MsgRelayPriceFeedPriceAmino): _24.MsgRelayPriceFeedPrice;
                toAmino(message: _24.MsgRelayPriceFeedPrice): _24.MsgRelayPriceFeedPriceAmino;
                fromAminoMsg(object: _24.MsgRelayPriceFeedPriceAminoMsg): _24.MsgRelayPriceFeedPrice;
                fromProtoMsg(message: _24.MsgRelayPriceFeedPriceProtoMsg): _24.MsgRelayPriceFeedPrice;
                toProto(message: _24.MsgRelayPriceFeedPrice): Uint8Array;
                toProtoMsg(message: _24.MsgRelayPriceFeedPrice): _24.MsgRelayPriceFeedPriceProtoMsg;
            };
            MsgRelayPriceFeedPriceResponse: {
                typeUrl: string;
                encode(_: _24.MsgRelayPriceFeedPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRelayPriceFeedPriceResponse;
                fromPartial(_: Partial<_24.MsgRelayPriceFeedPriceResponse>): _24.MsgRelayPriceFeedPriceResponse;
                fromAmino(_: _24.MsgRelayPriceFeedPriceResponseAmino): _24.MsgRelayPriceFeedPriceResponse;
                toAmino(_: _24.MsgRelayPriceFeedPriceResponse): _24.MsgRelayPriceFeedPriceResponseAmino;
                fromAminoMsg(object: _24.MsgRelayPriceFeedPriceResponseAminoMsg): _24.MsgRelayPriceFeedPriceResponse;
                fromProtoMsg(message: _24.MsgRelayPriceFeedPriceResponseProtoMsg): _24.MsgRelayPriceFeedPriceResponse;
                toProto(message: _24.MsgRelayPriceFeedPriceResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRelayPriceFeedPriceResponse): _24.MsgRelayPriceFeedPriceResponseProtoMsg;
            };
            MsgRelayBandRates: {
                typeUrl: string;
                encode(message: _24.MsgRelayBandRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRelayBandRates;
                fromPartial(object: Partial<_24.MsgRelayBandRates>): _24.MsgRelayBandRates;
                fromAmino(object: _24.MsgRelayBandRatesAmino): _24.MsgRelayBandRates;
                toAmino(message: _24.MsgRelayBandRates): _24.MsgRelayBandRatesAmino;
                fromAminoMsg(object: _24.MsgRelayBandRatesAminoMsg): _24.MsgRelayBandRates;
                fromProtoMsg(message: _24.MsgRelayBandRatesProtoMsg): _24.MsgRelayBandRates;
                toProto(message: _24.MsgRelayBandRates): Uint8Array;
                toProtoMsg(message: _24.MsgRelayBandRates): _24.MsgRelayBandRatesProtoMsg;
            };
            MsgRelayBandRatesResponse: {
                typeUrl: string;
                encode(_: _24.MsgRelayBandRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRelayBandRatesResponse;
                fromPartial(_: Partial<_24.MsgRelayBandRatesResponse>): _24.MsgRelayBandRatesResponse;
                fromAmino(_: _24.MsgRelayBandRatesResponseAmino): _24.MsgRelayBandRatesResponse;
                toAmino(_: _24.MsgRelayBandRatesResponse): _24.MsgRelayBandRatesResponseAmino;
                fromAminoMsg(object: _24.MsgRelayBandRatesResponseAminoMsg): _24.MsgRelayBandRatesResponse;
                fromProtoMsg(message: _24.MsgRelayBandRatesResponseProtoMsg): _24.MsgRelayBandRatesResponse;
                toProto(message: _24.MsgRelayBandRatesResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRelayBandRatesResponse): _24.MsgRelayBandRatesResponseProtoMsg;
            };
            MsgRelayCoinbaseMessages: {
                typeUrl: string;
                encode(message: _24.MsgRelayCoinbaseMessages, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRelayCoinbaseMessages;
                fromPartial(object: Partial<_24.MsgRelayCoinbaseMessages>): _24.MsgRelayCoinbaseMessages;
                fromAmino(object: _24.MsgRelayCoinbaseMessagesAmino): _24.MsgRelayCoinbaseMessages;
                toAmino(message: _24.MsgRelayCoinbaseMessages): _24.MsgRelayCoinbaseMessagesAmino;
                fromAminoMsg(object: _24.MsgRelayCoinbaseMessagesAminoMsg): _24.MsgRelayCoinbaseMessages;
                fromProtoMsg(message: _24.MsgRelayCoinbaseMessagesProtoMsg): _24.MsgRelayCoinbaseMessages;
                toProto(message: _24.MsgRelayCoinbaseMessages): Uint8Array;
                toProtoMsg(message: _24.MsgRelayCoinbaseMessages): _24.MsgRelayCoinbaseMessagesProtoMsg;
            };
            MsgRelayCoinbaseMessagesResponse: {
                typeUrl: string;
                encode(_: _24.MsgRelayCoinbaseMessagesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRelayCoinbaseMessagesResponse;
                fromPartial(_: Partial<_24.MsgRelayCoinbaseMessagesResponse>): _24.MsgRelayCoinbaseMessagesResponse;
                fromAmino(_: _24.MsgRelayCoinbaseMessagesResponseAmino): _24.MsgRelayCoinbaseMessagesResponse;
                toAmino(_: _24.MsgRelayCoinbaseMessagesResponse): _24.MsgRelayCoinbaseMessagesResponseAmino;
                fromAminoMsg(object: _24.MsgRelayCoinbaseMessagesResponseAminoMsg): _24.MsgRelayCoinbaseMessagesResponse;
                fromProtoMsg(message: _24.MsgRelayCoinbaseMessagesResponseProtoMsg): _24.MsgRelayCoinbaseMessagesResponse;
                toProto(message: _24.MsgRelayCoinbaseMessagesResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRelayCoinbaseMessagesResponse): _24.MsgRelayCoinbaseMessagesResponseProtoMsg;
            };
            MsgRequestBandIBCRates: {
                typeUrl: string;
                encode(message: _24.MsgRequestBandIBCRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRequestBandIBCRates;
                fromPartial(object: Partial<_24.MsgRequestBandIBCRates>): _24.MsgRequestBandIBCRates;
                fromAmino(object: _24.MsgRequestBandIBCRatesAmino): _24.MsgRequestBandIBCRates;
                toAmino(message: _24.MsgRequestBandIBCRates): _24.MsgRequestBandIBCRatesAmino;
                fromAminoMsg(object: _24.MsgRequestBandIBCRatesAminoMsg): _24.MsgRequestBandIBCRates;
                fromProtoMsg(message: _24.MsgRequestBandIBCRatesProtoMsg): _24.MsgRequestBandIBCRates;
                toProto(message: _24.MsgRequestBandIBCRates): Uint8Array;
                toProtoMsg(message: _24.MsgRequestBandIBCRates): _24.MsgRequestBandIBCRatesProtoMsg;
            };
            MsgRequestBandIBCRatesResponse: {
                typeUrl: string;
                encode(_: _24.MsgRequestBandIBCRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRequestBandIBCRatesResponse;
                fromPartial(_: Partial<_24.MsgRequestBandIBCRatesResponse>): _24.MsgRequestBandIBCRatesResponse;
                fromAmino(_: _24.MsgRequestBandIBCRatesResponseAmino): _24.MsgRequestBandIBCRatesResponse;
                toAmino(_: _24.MsgRequestBandIBCRatesResponse): _24.MsgRequestBandIBCRatesResponseAmino;
                fromAminoMsg(object: _24.MsgRequestBandIBCRatesResponseAminoMsg): _24.MsgRequestBandIBCRatesResponse;
                fromProtoMsg(message: _24.MsgRequestBandIBCRatesResponseProtoMsg): _24.MsgRequestBandIBCRatesResponse;
                toProto(message: _24.MsgRequestBandIBCRatesResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRequestBandIBCRatesResponse): _24.MsgRequestBandIBCRatesResponseProtoMsg;
            };
            MsgRelayPythPrices: {
                typeUrl: string;
                encode(message: _24.MsgRelayPythPrices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRelayPythPrices;
                fromPartial(object: Partial<_24.MsgRelayPythPrices>): _24.MsgRelayPythPrices;
                fromAmino(object: _24.MsgRelayPythPricesAmino): _24.MsgRelayPythPrices;
                toAmino(message: _24.MsgRelayPythPrices): _24.MsgRelayPythPricesAmino;
                fromAminoMsg(object: _24.MsgRelayPythPricesAminoMsg): _24.MsgRelayPythPrices;
                fromProtoMsg(message: _24.MsgRelayPythPricesProtoMsg): _24.MsgRelayPythPrices;
                toProto(message: _24.MsgRelayPythPrices): Uint8Array;
                toProtoMsg(message: _24.MsgRelayPythPrices): _24.MsgRelayPythPricesProtoMsg;
            };
            MsgRelayPythPricesResponse: {
                typeUrl: string;
                encode(_: _24.MsgRelayPythPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRelayPythPricesResponse;
                fromPartial(_: Partial<_24.MsgRelayPythPricesResponse>): _24.MsgRelayPythPricesResponse;
                fromAmino(_: _24.MsgRelayPythPricesResponseAmino): _24.MsgRelayPythPricesResponse;
                toAmino(_: _24.MsgRelayPythPricesResponse): _24.MsgRelayPythPricesResponseAmino;
                fromAminoMsg(object: _24.MsgRelayPythPricesResponseAminoMsg): _24.MsgRelayPythPricesResponse;
                fromProtoMsg(message: _24.MsgRelayPythPricesResponseProtoMsg): _24.MsgRelayPythPricesResponse;
                toProto(message: _24.MsgRelayPythPricesResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRelayPythPricesResponse): _24.MsgRelayPythPricesResponseProtoMsg;
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
            QueryPythPriceRequest: {
                typeUrl: string;
                encode(message: _23.QueryPythPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPythPriceRequest;
                fromPartial(object: Partial<_23.QueryPythPriceRequest>): _23.QueryPythPriceRequest;
                fromAmino(object: _23.QueryPythPriceRequestAmino): _23.QueryPythPriceRequest;
                toAmino(message: _23.QueryPythPriceRequest): _23.QueryPythPriceRequestAmino;
                fromAminoMsg(object: _23.QueryPythPriceRequestAminoMsg): _23.QueryPythPriceRequest;
                fromProtoMsg(message: _23.QueryPythPriceRequestProtoMsg): _23.QueryPythPriceRequest;
                toProto(message: _23.QueryPythPriceRequest): Uint8Array;
                toProtoMsg(message: _23.QueryPythPriceRequest): _23.QueryPythPriceRequestProtoMsg;
            };
            QueryPythPriceResponse: {
                typeUrl: string;
                encode(message: _23.QueryPythPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPythPriceResponse;
                fromPartial(object: Partial<_23.QueryPythPriceResponse>): _23.QueryPythPriceResponse;
                fromAmino(object: _23.QueryPythPriceResponseAmino): _23.QueryPythPriceResponse;
                toAmino(message: _23.QueryPythPriceResponse): _23.QueryPythPriceResponseAmino;
                fromAminoMsg(object: _23.QueryPythPriceResponseAminoMsg): _23.QueryPythPriceResponse;
                fromProtoMsg(message: _23.QueryPythPriceResponseProtoMsg): _23.QueryPythPriceResponse;
                toProto(message: _23.QueryPythPriceResponse): Uint8Array;
                toProtoMsg(message: _23.QueryPythPriceResponse): _23.QueryPythPriceResponseProtoMsg;
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
            QueryBandRelayersRequest: {
                typeUrl: string;
                encode(_: _23.QueryBandRelayersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryBandRelayersRequest;
                fromPartial(_: Partial<_23.QueryBandRelayersRequest>): _23.QueryBandRelayersRequest;
                fromAmino(_: _23.QueryBandRelayersRequestAmino): _23.QueryBandRelayersRequest;
                toAmino(_: _23.QueryBandRelayersRequest): _23.QueryBandRelayersRequestAmino;
                fromAminoMsg(object: _23.QueryBandRelayersRequestAminoMsg): _23.QueryBandRelayersRequest;
                fromProtoMsg(message: _23.QueryBandRelayersRequestProtoMsg): _23.QueryBandRelayersRequest;
                toProto(message: _23.QueryBandRelayersRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBandRelayersRequest): _23.QueryBandRelayersRequestProtoMsg;
            };
            QueryBandRelayersResponse: {
                typeUrl: string;
                encode(message: _23.QueryBandRelayersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBandRelayersResponse;
                fromPartial(object: Partial<_23.QueryBandRelayersResponse>): _23.QueryBandRelayersResponse;
                fromAmino(object: _23.QueryBandRelayersResponseAmino): _23.QueryBandRelayersResponse;
                toAmino(message: _23.QueryBandRelayersResponse): _23.QueryBandRelayersResponseAmino;
                fromAminoMsg(object: _23.QueryBandRelayersResponseAminoMsg): _23.QueryBandRelayersResponse;
                fromProtoMsg(message: _23.QueryBandRelayersResponseProtoMsg): _23.QueryBandRelayersResponse;
                toProto(message: _23.QueryBandRelayersResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBandRelayersResponse): _23.QueryBandRelayersResponseProtoMsg;
            };
            QueryBandPriceStatesRequest: {
                typeUrl: string;
                encode(_: _23.QueryBandPriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryBandPriceStatesRequest;
                fromPartial(_: Partial<_23.QueryBandPriceStatesRequest>): _23.QueryBandPriceStatesRequest;
                fromAmino(_: _23.QueryBandPriceStatesRequestAmino): _23.QueryBandPriceStatesRequest;
                toAmino(_: _23.QueryBandPriceStatesRequest): _23.QueryBandPriceStatesRequestAmino;
                fromAminoMsg(object: _23.QueryBandPriceStatesRequestAminoMsg): _23.QueryBandPriceStatesRequest;
                fromProtoMsg(message: _23.QueryBandPriceStatesRequestProtoMsg): _23.QueryBandPriceStatesRequest;
                toProto(message: _23.QueryBandPriceStatesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBandPriceStatesRequest): _23.QueryBandPriceStatesRequestProtoMsg;
            };
            QueryBandPriceStatesResponse: {
                typeUrl: string;
                encode(message: _23.QueryBandPriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBandPriceStatesResponse;
                fromPartial(object: Partial<_23.QueryBandPriceStatesResponse>): _23.QueryBandPriceStatesResponse;
                fromAmino(object: _23.QueryBandPriceStatesResponseAmino): _23.QueryBandPriceStatesResponse;
                toAmino(message: _23.QueryBandPriceStatesResponse): _23.QueryBandPriceStatesResponseAmino;
                fromAminoMsg(object: _23.QueryBandPriceStatesResponseAminoMsg): _23.QueryBandPriceStatesResponse;
                fromProtoMsg(message: _23.QueryBandPriceStatesResponseProtoMsg): _23.QueryBandPriceStatesResponse;
                toProto(message: _23.QueryBandPriceStatesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBandPriceStatesResponse): _23.QueryBandPriceStatesResponseProtoMsg;
            };
            QueryBandIBCPriceStatesRequest: {
                typeUrl: string;
                encode(_: _23.QueryBandIBCPriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryBandIBCPriceStatesRequest;
                fromPartial(_: Partial<_23.QueryBandIBCPriceStatesRequest>): _23.QueryBandIBCPriceStatesRequest;
                fromAmino(_: _23.QueryBandIBCPriceStatesRequestAmino): _23.QueryBandIBCPriceStatesRequest;
                toAmino(_: _23.QueryBandIBCPriceStatesRequest): _23.QueryBandIBCPriceStatesRequestAmino;
                fromAminoMsg(object: _23.QueryBandIBCPriceStatesRequestAminoMsg): _23.QueryBandIBCPriceStatesRequest;
                fromProtoMsg(message: _23.QueryBandIBCPriceStatesRequestProtoMsg): _23.QueryBandIBCPriceStatesRequest;
                toProto(message: _23.QueryBandIBCPriceStatesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBandIBCPriceStatesRequest): _23.QueryBandIBCPriceStatesRequestProtoMsg;
            };
            QueryBandIBCPriceStatesResponse: {
                typeUrl: string;
                encode(message: _23.QueryBandIBCPriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBandIBCPriceStatesResponse;
                fromPartial(object: Partial<_23.QueryBandIBCPriceStatesResponse>): _23.QueryBandIBCPriceStatesResponse;
                fromAmino(object: _23.QueryBandIBCPriceStatesResponseAmino): _23.QueryBandIBCPriceStatesResponse;
                toAmino(message: _23.QueryBandIBCPriceStatesResponse): _23.QueryBandIBCPriceStatesResponseAmino;
                fromAminoMsg(object: _23.QueryBandIBCPriceStatesResponseAminoMsg): _23.QueryBandIBCPriceStatesResponse;
                fromProtoMsg(message: _23.QueryBandIBCPriceStatesResponseProtoMsg): _23.QueryBandIBCPriceStatesResponse;
                toProto(message: _23.QueryBandIBCPriceStatesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBandIBCPriceStatesResponse): _23.QueryBandIBCPriceStatesResponseProtoMsg;
            };
            QueryPriceFeedPriceStatesRequest: {
                typeUrl: string;
                encode(_: _23.QueryPriceFeedPriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryPriceFeedPriceStatesRequest;
                fromPartial(_: Partial<_23.QueryPriceFeedPriceStatesRequest>): _23.QueryPriceFeedPriceStatesRequest;
                fromAmino(_: _23.QueryPriceFeedPriceStatesRequestAmino): _23.QueryPriceFeedPriceStatesRequest;
                toAmino(_: _23.QueryPriceFeedPriceStatesRequest): _23.QueryPriceFeedPriceStatesRequestAmino;
                fromAminoMsg(object: _23.QueryPriceFeedPriceStatesRequestAminoMsg): _23.QueryPriceFeedPriceStatesRequest;
                fromProtoMsg(message: _23.QueryPriceFeedPriceStatesRequestProtoMsg): _23.QueryPriceFeedPriceStatesRequest;
                toProto(message: _23.QueryPriceFeedPriceStatesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryPriceFeedPriceStatesRequest): _23.QueryPriceFeedPriceStatesRequestProtoMsg;
            };
            QueryPriceFeedPriceStatesResponse: {
                typeUrl: string;
                encode(message: _23.QueryPriceFeedPriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPriceFeedPriceStatesResponse;
                fromPartial(object: Partial<_23.QueryPriceFeedPriceStatesResponse>): _23.QueryPriceFeedPriceStatesResponse;
                fromAmino(object: _23.QueryPriceFeedPriceStatesResponseAmino): _23.QueryPriceFeedPriceStatesResponse;
                toAmino(message: _23.QueryPriceFeedPriceStatesResponse): _23.QueryPriceFeedPriceStatesResponseAmino;
                fromAminoMsg(object: _23.QueryPriceFeedPriceStatesResponseAminoMsg): _23.QueryPriceFeedPriceStatesResponse;
                fromProtoMsg(message: _23.QueryPriceFeedPriceStatesResponseProtoMsg): _23.QueryPriceFeedPriceStatesResponse;
                toProto(message: _23.QueryPriceFeedPriceStatesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryPriceFeedPriceStatesResponse): _23.QueryPriceFeedPriceStatesResponseProtoMsg;
            };
            QueryCoinbasePriceStatesRequest: {
                typeUrl: string;
                encode(_: _23.QueryCoinbasePriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryCoinbasePriceStatesRequest;
                fromPartial(_: Partial<_23.QueryCoinbasePriceStatesRequest>): _23.QueryCoinbasePriceStatesRequest;
                fromAmino(_: _23.QueryCoinbasePriceStatesRequestAmino): _23.QueryCoinbasePriceStatesRequest;
                toAmino(_: _23.QueryCoinbasePriceStatesRequest): _23.QueryCoinbasePriceStatesRequestAmino;
                fromAminoMsg(object: _23.QueryCoinbasePriceStatesRequestAminoMsg): _23.QueryCoinbasePriceStatesRequest;
                fromProtoMsg(message: _23.QueryCoinbasePriceStatesRequestProtoMsg): _23.QueryCoinbasePriceStatesRequest;
                toProto(message: _23.QueryCoinbasePriceStatesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryCoinbasePriceStatesRequest): _23.QueryCoinbasePriceStatesRequestProtoMsg;
            };
            QueryCoinbasePriceStatesResponse: {
                typeUrl: string;
                encode(message: _23.QueryCoinbasePriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCoinbasePriceStatesResponse;
                fromPartial(object: Partial<_23.QueryCoinbasePriceStatesResponse>): _23.QueryCoinbasePriceStatesResponse;
                fromAmino(object: _23.QueryCoinbasePriceStatesResponseAmino): _23.QueryCoinbasePriceStatesResponse;
                toAmino(message: _23.QueryCoinbasePriceStatesResponse): _23.QueryCoinbasePriceStatesResponseAmino;
                fromAminoMsg(object: _23.QueryCoinbasePriceStatesResponseAminoMsg): _23.QueryCoinbasePriceStatesResponse;
                fromProtoMsg(message: _23.QueryCoinbasePriceStatesResponseProtoMsg): _23.QueryCoinbasePriceStatesResponse;
                toProto(message: _23.QueryCoinbasePriceStatesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryCoinbasePriceStatesResponse): _23.QueryCoinbasePriceStatesResponseProtoMsg;
            };
            QueryPythPriceStatesRequest: {
                typeUrl: string;
                encode(_: _23.QueryPythPriceStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryPythPriceStatesRequest;
                fromPartial(_: Partial<_23.QueryPythPriceStatesRequest>): _23.QueryPythPriceStatesRequest;
                fromAmino(_: _23.QueryPythPriceStatesRequestAmino): _23.QueryPythPriceStatesRequest;
                toAmino(_: _23.QueryPythPriceStatesRequest): _23.QueryPythPriceStatesRequestAmino;
                fromAminoMsg(object: _23.QueryPythPriceStatesRequestAminoMsg): _23.QueryPythPriceStatesRequest;
                fromProtoMsg(message: _23.QueryPythPriceStatesRequestProtoMsg): _23.QueryPythPriceStatesRequest;
                toProto(message: _23.QueryPythPriceStatesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryPythPriceStatesRequest): _23.QueryPythPriceStatesRequestProtoMsg;
            };
            QueryPythPriceStatesResponse: {
                typeUrl: string;
                encode(message: _23.QueryPythPriceStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryPythPriceStatesResponse;
                fromPartial(object: Partial<_23.QueryPythPriceStatesResponse>): _23.QueryPythPriceStatesResponse;
                fromAmino(object: _23.QueryPythPriceStatesResponseAmino): _23.QueryPythPriceStatesResponse;
                toAmino(message: _23.QueryPythPriceStatesResponse): _23.QueryPythPriceStatesResponseAmino;
                fromAminoMsg(object: _23.QueryPythPriceStatesResponseAminoMsg): _23.QueryPythPriceStatesResponse;
                fromProtoMsg(message: _23.QueryPythPriceStatesResponseProtoMsg): _23.QueryPythPriceStatesResponse;
                toProto(message: _23.QueryPythPriceStatesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryPythPriceStatesResponse): _23.QueryPythPriceStatesResponseProtoMsg;
            };
            QueryProviderPriceStateRequest: {
                typeUrl: string;
                encode(message: _23.QueryProviderPriceStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryProviderPriceStateRequest;
                fromPartial(object: Partial<_23.QueryProviderPriceStateRequest>): _23.QueryProviderPriceStateRequest;
                fromAmino(object: _23.QueryProviderPriceStateRequestAmino): _23.QueryProviderPriceStateRequest;
                toAmino(message: _23.QueryProviderPriceStateRequest): _23.QueryProviderPriceStateRequestAmino;
                fromAminoMsg(object: _23.QueryProviderPriceStateRequestAminoMsg): _23.QueryProviderPriceStateRequest;
                fromProtoMsg(message: _23.QueryProviderPriceStateRequestProtoMsg): _23.QueryProviderPriceStateRequest;
                toProto(message: _23.QueryProviderPriceStateRequest): Uint8Array;
                toProtoMsg(message: _23.QueryProviderPriceStateRequest): _23.QueryProviderPriceStateRequestProtoMsg;
            };
            QueryProviderPriceStateResponse: {
                typeUrl: string;
                encode(message: _23.QueryProviderPriceStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryProviderPriceStateResponse;
                fromPartial(object: Partial<_23.QueryProviderPriceStateResponse>): _23.QueryProviderPriceStateResponse;
                fromAmino(object: _23.QueryProviderPriceStateResponseAmino): _23.QueryProviderPriceStateResponse;
                toAmino(message: _23.QueryProviderPriceStateResponse): _23.QueryProviderPriceStateResponseAmino;
                fromAminoMsg(object: _23.QueryProviderPriceStateResponseAminoMsg): _23.QueryProviderPriceStateResponse;
                fromProtoMsg(message: _23.QueryProviderPriceStateResponseProtoMsg): _23.QueryProviderPriceStateResponse;
                toProto(message: _23.QueryProviderPriceStateResponse): Uint8Array;
                toProtoMsg(message: _23.QueryProviderPriceStateResponse): _23.QueryProviderPriceStateResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _23.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryModuleStateRequest;
                fromPartial(_: Partial<_23.QueryModuleStateRequest>): _23.QueryModuleStateRequest;
                fromAmino(_: _23.QueryModuleStateRequestAmino): _23.QueryModuleStateRequest;
                toAmino(_: _23.QueryModuleStateRequest): _23.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _23.QueryModuleStateRequestAminoMsg): _23.QueryModuleStateRequest;
                fromProtoMsg(message: _23.QueryModuleStateRequestProtoMsg): _23.QueryModuleStateRequest;
                toProto(message: _23.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _23.QueryModuleStateRequest): _23.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _23.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryModuleStateResponse;
                fromPartial(object: Partial<_23.QueryModuleStateResponse>): _23.QueryModuleStateResponse;
                fromAmino(object: _23.QueryModuleStateResponseAmino): _23.QueryModuleStateResponse;
                toAmino(message: _23.QueryModuleStateResponse): _23.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _23.QueryModuleStateResponseAminoMsg): _23.QueryModuleStateResponse;
                fromProtoMsg(message: _23.QueryModuleStateResponseProtoMsg): _23.QueryModuleStateResponse;
                toProto(message: _23.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _23.QueryModuleStateResponse): _23.QueryModuleStateResponseProtoMsg;
            };
            QueryHistoricalPriceRecordsRequest: {
                typeUrl: string;
                encode(message: _23.QueryHistoricalPriceRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryHistoricalPriceRecordsRequest;
                fromPartial(object: Partial<_23.QueryHistoricalPriceRecordsRequest>): _23.QueryHistoricalPriceRecordsRequest;
                fromAmino(object: _23.QueryHistoricalPriceRecordsRequestAmino): _23.QueryHistoricalPriceRecordsRequest;
                toAmino(message: _23.QueryHistoricalPriceRecordsRequest): _23.QueryHistoricalPriceRecordsRequestAmino;
                fromAminoMsg(object: _23.QueryHistoricalPriceRecordsRequestAminoMsg): _23.QueryHistoricalPriceRecordsRequest;
                fromProtoMsg(message: _23.QueryHistoricalPriceRecordsRequestProtoMsg): _23.QueryHistoricalPriceRecordsRequest;
                toProto(message: _23.QueryHistoricalPriceRecordsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryHistoricalPriceRecordsRequest): _23.QueryHistoricalPriceRecordsRequestProtoMsg;
            };
            QueryHistoricalPriceRecordsResponse: {
                typeUrl: string;
                encode(message: _23.QueryHistoricalPriceRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryHistoricalPriceRecordsResponse;
                fromPartial(object: Partial<_23.QueryHistoricalPriceRecordsResponse>): _23.QueryHistoricalPriceRecordsResponse;
                fromAmino(object: _23.QueryHistoricalPriceRecordsResponseAmino): _23.QueryHistoricalPriceRecordsResponse;
                toAmino(message: _23.QueryHistoricalPriceRecordsResponse): _23.QueryHistoricalPriceRecordsResponseAmino;
                fromAminoMsg(object: _23.QueryHistoricalPriceRecordsResponseAminoMsg): _23.QueryHistoricalPriceRecordsResponse;
                fromProtoMsg(message: _23.QueryHistoricalPriceRecordsResponseProtoMsg): _23.QueryHistoricalPriceRecordsResponse;
                toProto(message: _23.QueryHistoricalPriceRecordsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryHistoricalPriceRecordsResponse): _23.QueryHistoricalPriceRecordsResponseProtoMsg;
            };
            OracleHistoryOptions: {
                typeUrl: string;
                encode(message: _23.OracleHistoryOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.OracleHistoryOptions;
                fromPartial(object: Partial<_23.OracleHistoryOptions>): _23.OracleHistoryOptions;
                fromAmino(object: _23.OracleHistoryOptionsAmino): _23.OracleHistoryOptions;
                toAmino(message: _23.OracleHistoryOptions): _23.OracleHistoryOptionsAmino;
                fromAminoMsg(object: _23.OracleHistoryOptionsAminoMsg): _23.OracleHistoryOptions;
                fromProtoMsg(message: _23.OracleHistoryOptionsProtoMsg): _23.OracleHistoryOptions;
                toProto(message: _23.OracleHistoryOptions): Uint8Array;
                toProtoMsg(message: _23.OracleHistoryOptions): _23.OracleHistoryOptionsProtoMsg;
            };
            QueryOracleVolatilityRequest: {
                typeUrl: string;
                encode(message: _23.QueryOracleVolatilityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOracleVolatilityRequest;
                fromPartial(object: Partial<_23.QueryOracleVolatilityRequest>): _23.QueryOracleVolatilityRequest;
                fromAmino(object: _23.QueryOracleVolatilityRequestAmino): _23.QueryOracleVolatilityRequest;
                toAmino(message: _23.QueryOracleVolatilityRequest): _23.QueryOracleVolatilityRequestAmino;
                fromAminoMsg(object: _23.QueryOracleVolatilityRequestAminoMsg): _23.QueryOracleVolatilityRequest;
                fromProtoMsg(message: _23.QueryOracleVolatilityRequestProtoMsg): _23.QueryOracleVolatilityRequest;
                toProto(message: _23.QueryOracleVolatilityRequest): Uint8Array;
                toProtoMsg(message: _23.QueryOracleVolatilityRequest): _23.QueryOracleVolatilityRequestProtoMsg;
            };
            QueryOracleVolatilityResponse: {
                typeUrl: string;
                encode(message: _23.QueryOracleVolatilityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOracleVolatilityResponse;
                fromPartial(object: Partial<_23.QueryOracleVolatilityResponse>): _23.QueryOracleVolatilityResponse;
                fromAmino(object: _23.QueryOracleVolatilityResponseAmino): _23.QueryOracleVolatilityResponse;
                toAmino(message: _23.QueryOracleVolatilityResponse): _23.QueryOracleVolatilityResponseAmino;
                fromAminoMsg(object: _23.QueryOracleVolatilityResponseAminoMsg): _23.QueryOracleVolatilityResponse;
                fromProtoMsg(message: _23.QueryOracleVolatilityResponseProtoMsg): _23.QueryOracleVolatilityResponse;
                toProto(message: _23.QueryOracleVolatilityResponse): Uint8Array;
                toProtoMsg(message: _23.QueryOracleVolatilityResponse): _23.QueryOracleVolatilityResponseProtoMsg;
            };
            QueryOracleProvidersInfoRequest: {
                typeUrl: string;
                encode(_: _23.QueryOracleProvidersInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryOracleProvidersInfoRequest;
                fromPartial(_: Partial<_23.QueryOracleProvidersInfoRequest>): _23.QueryOracleProvidersInfoRequest;
                fromAmino(_: _23.QueryOracleProvidersInfoRequestAmino): _23.QueryOracleProvidersInfoRequest;
                toAmino(_: _23.QueryOracleProvidersInfoRequest): _23.QueryOracleProvidersInfoRequestAmino;
                fromAminoMsg(object: _23.QueryOracleProvidersInfoRequestAminoMsg): _23.QueryOracleProvidersInfoRequest;
                fromProtoMsg(message: _23.QueryOracleProvidersInfoRequestProtoMsg): _23.QueryOracleProvidersInfoRequest;
                toProto(message: _23.QueryOracleProvidersInfoRequest): Uint8Array;
                toProtoMsg(message: _23.QueryOracleProvidersInfoRequest): _23.QueryOracleProvidersInfoRequestProtoMsg;
            };
            QueryOracleProvidersInfoResponse: {
                typeUrl: string;
                encode(message: _23.QueryOracleProvidersInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOracleProvidersInfoResponse;
                fromPartial(object: Partial<_23.QueryOracleProvidersInfoResponse>): _23.QueryOracleProvidersInfoResponse;
                fromAmino(object: _23.QueryOracleProvidersInfoResponseAmino): _23.QueryOracleProvidersInfoResponse;
                toAmino(message: _23.QueryOracleProvidersInfoResponse): _23.QueryOracleProvidersInfoResponseAmino;
                fromAminoMsg(object: _23.QueryOracleProvidersInfoResponseAminoMsg): _23.QueryOracleProvidersInfoResponse;
                fromProtoMsg(message: _23.QueryOracleProvidersInfoResponseProtoMsg): _23.QueryOracleProvidersInfoResponse;
                toProto(message: _23.QueryOracleProvidersInfoResponse): Uint8Array;
                toProtoMsg(message: _23.QueryOracleProvidersInfoResponse): _23.QueryOracleProvidersInfoResponseProtoMsg;
            };
            QueryOracleProviderPricesRequest: {
                typeUrl: string;
                encode(message: _23.QueryOracleProviderPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOracleProviderPricesRequest;
                fromPartial(object: Partial<_23.QueryOracleProviderPricesRequest>): _23.QueryOracleProviderPricesRequest;
                fromAmino(object: _23.QueryOracleProviderPricesRequestAmino): _23.QueryOracleProviderPricesRequest;
                toAmino(message: _23.QueryOracleProviderPricesRequest): _23.QueryOracleProviderPricesRequestAmino;
                fromAminoMsg(object: _23.QueryOracleProviderPricesRequestAminoMsg): _23.QueryOracleProviderPricesRequest;
                fromProtoMsg(message: _23.QueryOracleProviderPricesRequestProtoMsg): _23.QueryOracleProviderPricesRequest;
                toProto(message: _23.QueryOracleProviderPricesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryOracleProviderPricesRequest): _23.QueryOracleProviderPricesRequestProtoMsg;
            };
            QueryOracleProviderPricesResponse: {
                typeUrl: string;
                encode(message: _23.QueryOracleProviderPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOracleProviderPricesResponse;
                fromPartial(object: Partial<_23.QueryOracleProviderPricesResponse>): _23.QueryOracleProviderPricesResponse;
                fromAmino(object: _23.QueryOracleProviderPricesResponseAmino): _23.QueryOracleProviderPricesResponse;
                toAmino(message: _23.QueryOracleProviderPricesResponse): _23.QueryOracleProviderPricesResponseAmino;
                fromAminoMsg(object: _23.QueryOracleProviderPricesResponseAminoMsg): _23.QueryOracleProviderPricesResponse;
                fromProtoMsg(message: _23.QueryOracleProviderPricesResponseProtoMsg): _23.QueryOracleProviderPricesResponse;
                toProto(message: _23.QueryOracleProviderPricesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryOracleProviderPricesResponse): _23.QueryOracleProviderPricesResponseProtoMsg;
            };
            QueryOraclePriceRequest: {
                typeUrl: string;
                encode(message: _23.QueryOraclePriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOraclePriceRequest;
                fromPartial(object: Partial<_23.QueryOraclePriceRequest>): _23.QueryOraclePriceRequest;
                fromAmino(object: _23.QueryOraclePriceRequestAmino): _23.QueryOraclePriceRequest;
                toAmino(message: _23.QueryOraclePriceRequest): _23.QueryOraclePriceRequestAmino;
                fromAminoMsg(object: _23.QueryOraclePriceRequestAminoMsg): _23.QueryOraclePriceRequest;
                fromProtoMsg(message: _23.QueryOraclePriceRequestProtoMsg): _23.QueryOraclePriceRequest;
                toProto(message: _23.QueryOraclePriceRequest): Uint8Array;
                toProtoMsg(message: _23.QueryOraclePriceRequest): _23.QueryOraclePriceRequestProtoMsg;
            };
            PricePairState: {
                typeUrl: string;
                encode(message: _23.PricePairState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.PricePairState;
                fromPartial(object: Partial<_23.PricePairState>): _23.PricePairState;
                fromAmino(object: _23.PricePairStateAmino): _23.PricePairState;
                toAmino(message: _23.PricePairState): _23.PricePairStateAmino;
                fromAminoMsg(object: _23.PricePairStateAminoMsg): _23.PricePairState;
                fromProtoMsg(message: _23.PricePairStateProtoMsg): _23.PricePairState;
                toProto(message: _23.PricePairState): Uint8Array;
                toProtoMsg(message: _23.PricePairState): _23.PricePairStateProtoMsg;
            };
            QueryOraclePriceResponse: {
                typeUrl: string;
                encode(message: _23.QueryOraclePriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryOraclePriceResponse;
                fromPartial(object: Partial<_23.QueryOraclePriceResponse>): _23.QueryOraclePriceResponse;
                fromAmino(object: _23.QueryOraclePriceResponseAmino): _23.QueryOraclePriceResponse;
                toAmino(message: _23.QueryOraclePriceResponse): _23.QueryOraclePriceResponseAmino;
                fromAminoMsg(object: _23.QueryOraclePriceResponseAminoMsg): _23.QueryOraclePriceResponse;
                fromProtoMsg(message: _23.QueryOraclePriceResponseProtoMsg): _23.QueryOraclePriceResponse;
                toProto(message: _23.QueryOraclePriceResponse): Uint8Array;
                toProtoMsg(message: _23.QueryOraclePriceResponse): _23.QueryOraclePriceResponseProtoMsg;
            };
            GrantBandOraclePrivilegeProposal: {
                typeUrl: string;
                encode(message: _22.GrantBandOraclePrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.GrantBandOraclePrivilegeProposal;
                fromPartial(object: Partial<_22.GrantBandOraclePrivilegeProposal>): _22.GrantBandOraclePrivilegeProposal;
                fromAmino(object: _22.GrantBandOraclePrivilegeProposalAmino): _22.GrantBandOraclePrivilegeProposal;
                toAmino(message: _22.GrantBandOraclePrivilegeProposal): _22.GrantBandOraclePrivilegeProposalAmino;
                fromAminoMsg(object: _22.GrantBandOraclePrivilegeProposalAminoMsg): _22.GrantBandOraclePrivilegeProposal;
                fromProtoMsg(message: _22.GrantBandOraclePrivilegeProposalProtoMsg): _22.GrantBandOraclePrivilegeProposal;
                toProto(message: _22.GrantBandOraclePrivilegeProposal): Uint8Array;
                toProtoMsg(message: _22.GrantBandOraclePrivilegeProposal): _22.GrantBandOraclePrivilegeProposalProtoMsg;
            };
            RevokeBandOraclePrivilegeProposal: {
                typeUrl: string;
                encode(message: _22.RevokeBandOraclePrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.RevokeBandOraclePrivilegeProposal;
                fromPartial(object: Partial<_22.RevokeBandOraclePrivilegeProposal>): _22.RevokeBandOraclePrivilegeProposal;
                fromAmino(object: _22.RevokeBandOraclePrivilegeProposalAmino): _22.RevokeBandOraclePrivilegeProposal;
                toAmino(message: _22.RevokeBandOraclePrivilegeProposal): _22.RevokeBandOraclePrivilegeProposalAmino;
                fromAminoMsg(object: _22.RevokeBandOraclePrivilegeProposalAminoMsg): _22.RevokeBandOraclePrivilegeProposal;
                fromProtoMsg(message: _22.RevokeBandOraclePrivilegeProposalProtoMsg): _22.RevokeBandOraclePrivilegeProposal;
                toProto(message: _22.RevokeBandOraclePrivilegeProposal): Uint8Array;
                toProtoMsg(message: _22.RevokeBandOraclePrivilegeProposal): _22.RevokeBandOraclePrivilegeProposalProtoMsg;
            };
            GrantPriceFeederPrivilegeProposal: {
                typeUrl: string;
                encode(message: _22.GrantPriceFeederPrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.GrantPriceFeederPrivilegeProposal;
                fromPartial(object: Partial<_22.GrantPriceFeederPrivilegeProposal>): _22.GrantPriceFeederPrivilegeProposal;
                fromAmino(object: _22.GrantPriceFeederPrivilegeProposalAmino): _22.GrantPriceFeederPrivilegeProposal;
                toAmino(message: _22.GrantPriceFeederPrivilegeProposal): _22.GrantPriceFeederPrivilegeProposalAmino;
                fromAminoMsg(object: _22.GrantPriceFeederPrivilegeProposalAminoMsg): _22.GrantPriceFeederPrivilegeProposal;
                fromProtoMsg(message: _22.GrantPriceFeederPrivilegeProposalProtoMsg): _22.GrantPriceFeederPrivilegeProposal;
                toProto(message: _22.GrantPriceFeederPrivilegeProposal): Uint8Array;
                toProtoMsg(message: _22.GrantPriceFeederPrivilegeProposal): _22.GrantPriceFeederPrivilegeProposalProtoMsg;
            };
            GrantProviderPrivilegeProposal: {
                typeUrl: string;
                encode(message: _22.GrantProviderPrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.GrantProviderPrivilegeProposal;
                fromPartial(object: Partial<_22.GrantProviderPrivilegeProposal>): _22.GrantProviderPrivilegeProposal;
                fromAmino(object: _22.GrantProviderPrivilegeProposalAmino): _22.GrantProviderPrivilegeProposal;
                toAmino(message: _22.GrantProviderPrivilegeProposal): _22.GrantProviderPrivilegeProposalAmino;
                fromAminoMsg(object: _22.GrantProviderPrivilegeProposalAminoMsg): _22.GrantProviderPrivilegeProposal;
                fromProtoMsg(message: _22.GrantProviderPrivilegeProposalProtoMsg): _22.GrantProviderPrivilegeProposal;
                toProto(message: _22.GrantProviderPrivilegeProposal): Uint8Array;
                toProtoMsg(message: _22.GrantProviderPrivilegeProposal): _22.GrantProviderPrivilegeProposalProtoMsg;
            };
            RevokeProviderPrivilegeProposal: {
                typeUrl: string;
                encode(message: _22.RevokeProviderPrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.RevokeProviderPrivilegeProposal;
                fromPartial(object: Partial<_22.RevokeProviderPrivilegeProposal>): _22.RevokeProviderPrivilegeProposal;
                fromAmino(object: _22.RevokeProviderPrivilegeProposalAmino): _22.RevokeProviderPrivilegeProposal;
                toAmino(message: _22.RevokeProviderPrivilegeProposal): _22.RevokeProviderPrivilegeProposalAmino;
                fromAminoMsg(object: _22.RevokeProviderPrivilegeProposalAminoMsg): _22.RevokeProviderPrivilegeProposal;
                fromProtoMsg(message: _22.RevokeProviderPrivilegeProposalProtoMsg): _22.RevokeProviderPrivilegeProposal;
                toProto(message: _22.RevokeProviderPrivilegeProposal): Uint8Array;
                toProtoMsg(message: _22.RevokeProviderPrivilegeProposal): _22.RevokeProviderPrivilegeProposalProtoMsg;
            };
            RevokePriceFeederPrivilegeProposal: {
                typeUrl: string;
                encode(message: _22.RevokePriceFeederPrivilegeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.RevokePriceFeederPrivilegeProposal;
                fromPartial(object: Partial<_22.RevokePriceFeederPrivilegeProposal>): _22.RevokePriceFeederPrivilegeProposal;
                fromAmino(object: _22.RevokePriceFeederPrivilegeProposalAmino): _22.RevokePriceFeederPrivilegeProposal;
                toAmino(message: _22.RevokePriceFeederPrivilegeProposal): _22.RevokePriceFeederPrivilegeProposalAmino;
                fromAminoMsg(object: _22.RevokePriceFeederPrivilegeProposalAminoMsg): _22.RevokePriceFeederPrivilegeProposal;
                fromProtoMsg(message: _22.RevokePriceFeederPrivilegeProposalProtoMsg): _22.RevokePriceFeederPrivilegeProposal;
                toProto(message: _22.RevokePriceFeederPrivilegeProposal): Uint8Array;
                toProtoMsg(message: _22.RevokePriceFeederPrivilegeProposal): _22.RevokePriceFeederPrivilegeProposalProtoMsg;
            };
            AuthorizeBandOracleRequestProposal: {
                typeUrl: string;
                encode(message: _22.AuthorizeBandOracleRequestProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.AuthorizeBandOracleRequestProposal;
                fromPartial(object: Partial<_22.AuthorizeBandOracleRequestProposal>): _22.AuthorizeBandOracleRequestProposal;
                fromAmino(object: _22.AuthorizeBandOracleRequestProposalAmino): _22.AuthorizeBandOracleRequestProposal;
                toAmino(message: _22.AuthorizeBandOracleRequestProposal): _22.AuthorizeBandOracleRequestProposalAmino;
                fromAminoMsg(object: _22.AuthorizeBandOracleRequestProposalAminoMsg): _22.AuthorizeBandOracleRequestProposal;
                fromProtoMsg(message: _22.AuthorizeBandOracleRequestProposalProtoMsg): _22.AuthorizeBandOracleRequestProposal;
                toProto(message: _22.AuthorizeBandOracleRequestProposal): Uint8Array;
                toProtoMsg(message: _22.AuthorizeBandOracleRequestProposal): _22.AuthorizeBandOracleRequestProposalProtoMsg;
            };
            UpdateBandOracleRequestProposal: {
                typeUrl: string;
                encode(message: _22.UpdateBandOracleRequestProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.UpdateBandOracleRequestProposal;
                fromPartial(object: Partial<_22.UpdateBandOracleRequestProposal>): _22.UpdateBandOracleRequestProposal;
                fromAmino(object: _22.UpdateBandOracleRequestProposalAmino): _22.UpdateBandOracleRequestProposal;
                toAmino(message: _22.UpdateBandOracleRequestProposal): _22.UpdateBandOracleRequestProposalAmino;
                fromAminoMsg(object: _22.UpdateBandOracleRequestProposalAminoMsg): _22.UpdateBandOracleRequestProposal;
                fromProtoMsg(message: _22.UpdateBandOracleRequestProposalProtoMsg): _22.UpdateBandOracleRequestProposal;
                toProto(message: _22.UpdateBandOracleRequestProposal): Uint8Array;
                toProtoMsg(message: _22.UpdateBandOracleRequestProposal): _22.UpdateBandOracleRequestProposalProtoMsg;
            };
            EnableBandIBCProposal: {
                typeUrl: string;
                encode(message: _22.EnableBandIBCProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.EnableBandIBCProposal;
                fromPartial(object: Partial<_22.EnableBandIBCProposal>): _22.EnableBandIBCProposal;
                fromAmino(object: _22.EnableBandIBCProposalAmino): _22.EnableBandIBCProposal;
                toAmino(message: _22.EnableBandIBCProposal): _22.EnableBandIBCProposalAmino;
                fromAminoMsg(object: _22.EnableBandIBCProposalAminoMsg): _22.EnableBandIBCProposal;
                fromProtoMsg(message: _22.EnableBandIBCProposalProtoMsg): _22.EnableBandIBCProposal;
                toProto(message: _22.EnableBandIBCProposal): Uint8Array;
                toProtoMsg(message: _22.EnableBandIBCProposal): _22.EnableBandIBCProposalProtoMsg;
            };
            oracleTypeFromJSON(object: any): _21.OracleType;
            oracleTypeToJSON(object: _21.OracleType): string;
            OracleType: typeof _21.OracleType;
            OracleTypeSDKType: typeof _21.OracleType;
            OracleTypeAmino: typeof _21.OracleType;
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
            OracleInfo: {
                typeUrl: string;
                encode(message: _21.OracleInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.OracleInfo;
                fromPartial(object: Partial<_21.OracleInfo>): _21.OracleInfo;
                fromAmino(object: _21.OracleInfoAmino): _21.OracleInfo;
                toAmino(message: _21.OracleInfo): _21.OracleInfoAmino;
                fromAminoMsg(object: _21.OracleInfoAminoMsg): _21.OracleInfo;
                fromProtoMsg(message: _21.OracleInfoProtoMsg): _21.OracleInfo;
                toProto(message: _21.OracleInfo): Uint8Array;
                toProtoMsg(message: _21.OracleInfo): _21.OracleInfoProtoMsg;
            };
            ChainlinkPriceState: {
                typeUrl: string;
                encode(message: _21.ChainlinkPriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ChainlinkPriceState;
                fromPartial(object: Partial<_21.ChainlinkPriceState>): _21.ChainlinkPriceState;
                fromAmino(object: _21.ChainlinkPriceStateAmino): _21.ChainlinkPriceState;
                toAmino(message: _21.ChainlinkPriceState): _21.ChainlinkPriceStateAmino;
                fromAminoMsg(object: _21.ChainlinkPriceStateAminoMsg): _21.ChainlinkPriceState;
                fromProtoMsg(message: _21.ChainlinkPriceStateProtoMsg): _21.ChainlinkPriceState;
                toProto(message: _21.ChainlinkPriceState): Uint8Array;
                toProtoMsg(message: _21.ChainlinkPriceState): _21.ChainlinkPriceStateProtoMsg;
            };
            BandPriceState: {
                typeUrl: string;
                encode(message: _21.BandPriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.BandPriceState;
                fromPartial(object: Partial<_21.BandPriceState>): _21.BandPriceState;
                fromAmino(object: _21.BandPriceStateAmino): _21.BandPriceState;
                toAmino(message: _21.BandPriceState): _21.BandPriceStateAmino;
                fromAminoMsg(object: _21.BandPriceStateAminoMsg): _21.BandPriceState;
                fromProtoMsg(message: _21.BandPriceStateProtoMsg): _21.BandPriceState;
                toProto(message: _21.BandPriceState): Uint8Array;
                toProtoMsg(message: _21.BandPriceState): _21.BandPriceStateProtoMsg;
            };
            PriceFeedState: {
                typeUrl: string;
                encode(message: _21.PriceFeedState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PriceFeedState;
                fromPartial(object: Partial<_21.PriceFeedState>): _21.PriceFeedState;
                fromAmino(object: _21.PriceFeedStateAmino): _21.PriceFeedState;
                toAmino(message: _21.PriceFeedState): _21.PriceFeedStateAmino;
                fromAminoMsg(object: _21.PriceFeedStateAminoMsg): _21.PriceFeedState;
                fromProtoMsg(message: _21.PriceFeedStateProtoMsg): _21.PriceFeedState;
                toProto(message: _21.PriceFeedState): Uint8Array;
                toProtoMsg(message: _21.PriceFeedState): _21.PriceFeedStateProtoMsg;
            };
            ProviderInfo: {
                typeUrl: string;
                encode(message: _21.ProviderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ProviderInfo;
                fromPartial(object: Partial<_21.ProviderInfo>): _21.ProviderInfo;
                fromAmino(object: _21.ProviderInfoAmino): _21.ProviderInfo;
                toAmino(message: _21.ProviderInfo): _21.ProviderInfoAmino;
                fromAminoMsg(object: _21.ProviderInfoAminoMsg): _21.ProviderInfo;
                fromProtoMsg(message: _21.ProviderInfoProtoMsg): _21.ProviderInfo;
                toProto(message: _21.ProviderInfo): Uint8Array;
                toProtoMsg(message: _21.ProviderInfo): _21.ProviderInfoProtoMsg;
            };
            ProviderState: {
                typeUrl: string;
                encode(message: _21.ProviderState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ProviderState;
                fromPartial(object: Partial<_21.ProviderState>): _21.ProviderState;
                fromAmino(object: _21.ProviderStateAmino): _21.ProviderState;
                toAmino(message: _21.ProviderState): _21.ProviderStateAmino;
                fromAminoMsg(object: _21.ProviderStateAminoMsg): _21.ProviderState;
                fromProtoMsg(message: _21.ProviderStateProtoMsg): _21.ProviderState;
                toProto(message: _21.ProviderState): Uint8Array;
                toProtoMsg(message: _21.ProviderState): _21.ProviderStateProtoMsg;
            };
            ProviderPriceState: {
                typeUrl: string;
                encode(message: _21.ProviderPriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ProviderPriceState;
                fromPartial(object: Partial<_21.ProviderPriceState>): _21.ProviderPriceState;
                fromAmino(object: _21.ProviderPriceStateAmino): _21.ProviderPriceState;
                toAmino(message: _21.ProviderPriceState): _21.ProviderPriceStateAmino;
                fromAminoMsg(object: _21.ProviderPriceStateAminoMsg): _21.ProviderPriceState;
                fromProtoMsg(message: _21.ProviderPriceStateProtoMsg): _21.ProviderPriceState;
                toProto(message: _21.ProviderPriceState): Uint8Array;
                toProtoMsg(message: _21.ProviderPriceState): _21.ProviderPriceStateProtoMsg;
            };
            PriceFeedInfo: {
                typeUrl: string;
                encode(message: _21.PriceFeedInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PriceFeedInfo;
                fromPartial(object: Partial<_21.PriceFeedInfo>): _21.PriceFeedInfo;
                fromAmino(object: _21.PriceFeedInfoAmino): _21.PriceFeedInfo;
                toAmino(message: _21.PriceFeedInfo): _21.PriceFeedInfoAmino;
                fromAminoMsg(object: _21.PriceFeedInfoAminoMsg): _21.PriceFeedInfo;
                fromProtoMsg(message: _21.PriceFeedInfoProtoMsg): _21.PriceFeedInfo;
                toProto(message: _21.PriceFeedInfo): Uint8Array;
                toProtoMsg(message: _21.PriceFeedInfo): _21.PriceFeedInfoProtoMsg;
            };
            PriceFeedPrice: {
                typeUrl: string;
                encode(message: _21.PriceFeedPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PriceFeedPrice;
                fromPartial(object: Partial<_21.PriceFeedPrice>): _21.PriceFeedPrice;
                fromAmino(object: _21.PriceFeedPriceAmino): _21.PriceFeedPrice;
                toAmino(message: _21.PriceFeedPrice): _21.PriceFeedPriceAmino;
                fromAminoMsg(object: _21.PriceFeedPriceAminoMsg): _21.PriceFeedPrice;
                fromProtoMsg(message: _21.PriceFeedPriceProtoMsg): _21.PriceFeedPrice;
                toProto(message: _21.PriceFeedPrice): Uint8Array;
                toProtoMsg(message: _21.PriceFeedPrice): _21.PriceFeedPriceProtoMsg;
            };
            CoinbasePriceState: {
                typeUrl: string;
                encode(message: _21.CoinbasePriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.CoinbasePriceState;
                fromPartial(object: Partial<_21.CoinbasePriceState>): _21.CoinbasePriceState;
                fromAmino(object: _21.CoinbasePriceStateAmino): _21.CoinbasePriceState;
                toAmino(message: _21.CoinbasePriceState): _21.CoinbasePriceStateAmino;
                fromAminoMsg(object: _21.CoinbasePriceStateAminoMsg): _21.CoinbasePriceState;
                fromProtoMsg(message: _21.CoinbasePriceStateProtoMsg): _21.CoinbasePriceState;
                toProto(message: _21.CoinbasePriceState): Uint8Array;
                toProtoMsg(message: _21.CoinbasePriceState): _21.CoinbasePriceStateProtoMsg;
            };
            PriceState: {
                typeUrl: string;
                encode(message: _21.PriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PriceState;
                fromPartial(object: Partial<_21.PriceState>): _21.PriceState;
                fromAmino(object: _21.PriceStateAmino): _21.PriceState;
                toAmino(message: _21.PriceState): _21.PriceStateAmino;
                fromAminoMsg(object: _21.PriceStateAminoMsg): _21.PriceState;
                fromProtoMsg(message: _21.PriceStateProtoMsg): _21.PriceState;
                toProto(message: _21.PriceState): Uint8Array;
                toProtoMsg(message: _21.PriceState): _21.PriceStateProtoMsg;
            };
            PythPriceState: {
                typeUrl: string;
                encode(message: _21.PythPriceState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PythPriceState;
                fromPartial(object: Partial<_21.PythPriceState>): _21.PythPriceState;
                fromAmino(object: _21.PythPriceStateAmino): _21.PythPriceState;
                toAmino(message: _21.PythPriceState): _21.PythPriceStateAmino;
                fromAminoMsg(object: _21.PythPriceStateAminoMsg): _21.PythPriceState;
                fromProtoMsg(message: _21.PythPriceStateProtoMsg): _21.PythPriceState;
                toProto(message: _21.PythPriceState): Uint8Array;
                toProtoMsg(message: _21.PythPriceState): _21.PythPriceStateProtoMsg;
            };
            BandOracleRequest: {
                typeUrl: string;
                encode(message: _21.BandOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.BandOracleRequest;
                fromPartial(object: Partial<_21.BandOracleRequest>): _21.BandOracleRequest;
                fromAmino(object: _21.BandOracleRequestAmino): _21.BandOracleRequest;
                toAmino(message: _21.BandOracleRequest): _21.BandOracleRequestAmino;
                fromAminoMsg(object: _21.BandOracleRequestAminoMsg): _21.BandOracleRequest;
                fromProtoMsg(message: _21.BandOracleRequestProtoMsg): _21.BandOracleRequest;
                toProto(message: _21.BandOracleRequest): Uint8Array;
                toProtoMsg(message: _21.BandOracleRequest): _21.BandOracleRequestProtoMsg;
            };
            BandIBCParams: {
                typeUrl: string;
                encode(message: _21.BandIBCParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.BandIBCParams;
                fromPartial(object: Partial<_21.BandIBCParams>): _21.BandIBCParams;
                fromAmino(object: _21.BandIBCParamsAmino): _21.BandIBCParams;
                toAmino(message: _21.BandIBCParams): _21.BandIBCParamsAmino;
                fromAminoMsg(object: _21.BandIBCParamsAminoMsg): _21.BandIBCParams;
                fromProtoMsg(message: _21.BandIBCParamsProtoMsg): _21.BandIBCParams;
                toProto(message: _21.BandIBCParams): Uint8Array;
                toProtoMsg(message: _21.BandIBCParams): _21.BandIBCParamsProtoMsg;
            };
            SymbolPriceTimestamp: {
                typeUrl: string;
                encode(message: _21.SymbolPriceTimestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.SymbolPriceTimestamp;
                fromPartial(object: Partial<_21.SymbolPriceTimestamp>): _21.SymbolPriceTimestamp;
                fromAmino(object: _21.SymbolPriceTimestampAmino): _21.SymbolPriceTimestamp;
                toAmino(message: _21.SymbolPriceTimestamp): _21.SymbolPriceTimestampAmino;
                fromAminoMsg(object: _21.SymbolPriceTimestampAminoMsg): _21.SymbolPriceTimestamp;
                fromProtoMsg(message: _21.SymbolPriceTimestampProtoMsg): _21.SymbolPriceTimestamp;
                toProto(message: _21.SymbolPriceTimestamp): Uint8Array;
                toProtoMsg(message: _21.SymbolPriceTimestamp): _21.SymbolPriceTimestampProtoMsg;
            };
            LastPriceTimestamps: {
                typeUrl: string;
                encode(message: _21.LastPriceTimestamps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.LastPriceTimestamps;
                fromPartial(object: Partial<_21.LastPriceTimestamps>): _21.LastPriceTimestamps;
                fromAmino(object: _21.LastPriceTimestampsAmino): _21.LastPriceTimestamps;
                toAmino(message: _21.LastPriceTimestamps): _21.LastPriceTimestampsAmino;
                fromAminoMsg(object: _21.LastPriceTimestampsAminoMsg): _21.LastPriceTimestamps;
                fromProtoMsg(message: _21.LastPriceTimestampsProtoMsg): _21.LastPriceTimestamps;
                toProto(message: _21.LastPriceTimestamps): Uint8Array;
                toProtoMsg(message: _21.LastPriceTimestamps): _21.LastPriceTimestampsProtoMsg;
            };
            PriceRecords: {
                typeUrl: string;
                encode(message: _21.PriceRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PriceRecords;
                fromPartial(object: Partial<_21.PriceRecords>): _21.PriceRecords;
                fromAmino(object: _21.PriceRecordsAmino): _21.PriceRecords;
                toAmino(message: _21.PriceRecords): _21.PriceRecordsAmino;
                fromAminoMsg(object: _21.PriceRecordsAminoMsg): _21.PriceRecords;
                fromProtoMsg(message: _21.PriceRecordsProtoMsg): _21.PriceRecords;
                toProto(message: _21.PriceRecords): Uint8Array;
                toProtoMsg(message: _21.PriceRecords): _21.PriceRecordsProtoMsg;
            };
            PriceRecord: {
                typeUrl: string;
                encode(message: _21.PriceRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PriceRecord;
                fromPartial(object: Partial<_21.PriceRecord>): _21.PriceRecord;
                fromAmino(object: _21.PriceRecordAmino): _21.PriceRecord;
                toAmino(message: _21.PriceRecord): _21.PriceRecordAmino;
                fromAminoMsg(object: _21.PriceRecordAminoMsg): _21.PriceRecord;
                fromProtoMsg(message: _21.PriceRecordProtoMsg): _21.PriceRecord;
                toProto(message: _21.PriceRecord): Uint8Array;
                toProtoMsg(message: _21.PriceRecord): _21.PriceRecordProtoMsg;
            };
            MetadataStatistics: {
                typeUrl: string;
                encode(message: _21.MetadataStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.MetadataStatistics;
                fromPartial(object: Partial<_21.MetadataStatistics>): _21.MetadataStatistics;
                fromAmino(object: _21.MetadataStatisticsAmino): _21.MetadataStatistics;
                toAmino(message: _21.MetadataStatistics): _21.MetadataStatisticsAmino;
                fromAminoMsg(object: _21.MetadataStatisticsAminoMsg): _21.MetadataStatistics;
                fromProtoMsg(message: _21.MetadataStatisticsProtoMsg): _21.MetadataStatistics;
                toProto(message: _21.MetadataStatistics): Uint8Array;
                toProtoMsg(message: _21.MetadataStatistics): _21.MetadataStatisticsProtoMsg;
            };
            PriceAttestation: {
                typeUrl: string;
                encode(message: _21.PriceAttestation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.PriceAttestation;
                fromPartial(object: Partial<_21.PriceAttestation>): _21.PriceAttestation;
                fromAmino(object: _21.PriceAttestationAmino): _21.PriceAttestation;
                toAmino(message: _21.PriceAttestation): _21.PriceAttestationAmino;
                fromAminoMsg(object: _21.PriceAttestationAminoMsg): _21.PriceAttestation;
                fromProtoMsg(message: _21.PriceAttestationProtoMsg): _21.PriceAttestation;
                toProto(message: _21.PriceAttestation): Uint8Array;
                toProtoMsg(message: _21.PriceAttestation): _21.PriceAttestationProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _20.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.GenesisState;
                fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
                fromAmino(object: _20.GenesisStateAmino): _20.GenesisState;
                toAmino(message: _20.GenesisState): _20.GenesisStateAmino;
                fromAminoMsg(object: _20.GenesisStateAminoMsg): _20.GenesisState;
                fromProtoMsg(message: _20.GenesisStateProtoMsg): _20.GenesisState;
                toProto(message: _20.GenesisState): Uint8Array;
                toProtoMsg(message: _20.GenesisState): _20.GenesisStateProtoMsg;
            };
            CalldataRecord: {
                typeUrl: string;
                encode(message: _20.CalldataRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.CalldataRecord;
                fromPartial(object: Partial<_20.CalldataRecord>): _20.CalldataRecord;
                fromAmino(object: _20.CalldataRecordAmino): _20.CalldataRecord;
                toAmino(message: _20.CalldataRecord): _20.CalldataRecordAmino;
                fromAminoMsg(object: _20.CalldataRecordAminoMsg): _20.CalldataRecord;
                fromProtoMsg(message: _20.CalldataRecordProtoMsg): _20.CalldataRecord;
                toProto(message: _20.CalldataRecord): Uint8Array;
                toProtoMsg(message: _20.CalldataRecord): _20.CalldataRecordProtoMsg;
            };
            SetChainlinkPriceEvent: {
                typeUrl: string;
                encode(message: _19.SetChainlinkPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SetChainlinkPriceEvent;
                fromPartial(object: Partial<_19.SetChainlinkPriceEvent>): _19.SetChainlinkPriceEvent;
                fromAmino(object: _19.SetChainlinkPriceEventAmino): _19.SetChainlinkPriceEvent;
                toAmino(message: _19.SetChainlinkPriceEvent): _19.SetChainlinkPriceEventAmino;
                fromAminoMsg(object: _19.SetChainlinkPriceEventAminoMsg): _19.SetChainlinkPriceEvent;
                fromProtoMsg(message: _19.SetChainlinkPriceEventProtoMsg): _19.SetChainlinkPriceEvent;
                toProto(message: _19.SetChainlinkPriceEvent): Uint8Array;
                toProtoMsg(message: _19.SetChainlinkPriceEvent): _19.SetChainlinkPriceEventProtoMsg;
            };
            SetBandPriceEvent: {
                typeUrl: string;
                encode(message: _19.SetBandPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SetBandPriceEvent;
                fromPartial(object: Partial<_19.SetBandPriceEvent>): _19.SetBandPriceEvent;
                fromAmino(object: _19.SetBandPriceEventAmino): _19.SetBandPriceEvent;
                toAmino(message: _19.SetBandPriceEvent): _19.SetBandPriceEventAmino;
                fromAminoMsg(object: _19.SetBandPriceEventAminoMsg): _19.SetBandPriceEvent;
                fromProtoMsg(message: _19.SetBandPriceEventProtoMsg): _19.SetBandPriceEvent;
                toProto(message: _19.SetBandPriceEvent): Uint8Array;
                toProtoMsg(message: _19.SetBandPriceEvent): _19.SetBandPriceEventProtoMsg;
            };
            SetBandIBCPriceEvent: {
                typeUrl: string;
                encode(message: _19.SetBandIBCPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SetBandIBCPriceEvent;
                fromPartial(object: Partial<_19.SetBandIBCPriceEvent>): _19.SetBandIBCPriceEvent;
                fromAmino(object: _19.SetBandIBCPriceEventAmino): _19.SetBandIBCPriceEvent;
                toAmino(message: _19.SetBandIBCPriceEvent): _19.SetBandIBCPriceEventAmino;
                fromAminoMsg(object: _19.SetBandIBCPriceEventAminoMsg): _19.SetBandIBCPriceEvent;
                fromProtoMsg(message: _19.SetBandIBCPriceEventProtoMsg): _19.SetBandIBCPriceEvent;
                toProto(message: _19.SetBandIBCPriceEvent): Uint8Array;
                toProtoMsg(message: _19.SetBandIBCPriceEvent): _19.SetBandIBCPriceEventProtoMsg;
            };
            EventBandIBCAckSuccess: {
                typeUrl: string;
                encode(message: _19.EventBandIBCAckSuccess, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventBandIBCAckSuccess;
                fromPartial(object: Partial<_19.EventBandIBCAckSuccess>): _19.EventBandIBCAckSuccess;
                fromAmino(object: _19.EventBandIBCAckSuccessAmino): _19.EventBandIBCAckSuccess;
                toAmino(message: _19.EventBandIBCAckSuccess): _19.EventBandIBCAckSuccessAmino;
                fromAminoMsg(object: _19.EventBandIBCAckSuccessAminoMsg): _19.EventBandIBCAckSuccess;
                fromProtoMsg(message: _19.EventBandIBCAckSuccessProtoMsg): _19.EventBandIBCAckSuccess;
                toProto(message: _19.EventBandIBCAckSuccess): Uint8Array;
                toProtoMsg(message: _19.EventBandIBCAckSuccess): _19.EventBandIBCAckSuccessProtoMsg;
            };
            EventBandIBCAckError: {
                typeUrl: string;
                encode(message: _19.EventBandIBCAckError, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventBandIBCAckError;
                fromPartial(object: Partial<_19.EventBandIBCAckError>): _19.EventBandIBCAckError;
                fromAmino(object: _19.EventBandIBCAckErrorAmino): _19.EventBandIBCAckError;
                toAmino(message: _19.EventBandIBCAckError): _19.EventBandIBCAckErrorAmino;
                fromAminoMsg(object: _19.EventBandIBCAckErrorAminoMsg): _19.EventBandIBCAckError;
                fromProtoMsg(message: _19.EventBandIBCAckErrorProtoMsg): _19.EventBandIBCAckError;
                toProto(message: _19.EventBandIBCAckError): Uint8Array;
                toProtoMsg(message: _19.EventBandIBCAckError): _19.EventBandIBCAckErrorProtoMsg;
            };
            EventBandIBCResponseTimeout: {
                typeUrl: string;
                encode(message: _19.EventBandIBCResponseTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventBandIBCResponseTimeout;
                fromPartial(object: Partial<_19.EventBandIBCResponseTimeout>): _19.EventBandIBCResponseTimeout;
                fromAmino(object: _19.EventBandIBCResponseTimeoutAmino): _19.EventBandIBCResponseTimeout;
                toAmino(message: _19.EventBandIBCResponseTimeout): _19.EventBandIBCResponseTimeoutAmino;
                fromAminoMsg(object: _19.EventBandIBCResponseTimeoutAminoMsg): _19.EventBandIBCResponseTimeout;
                fromProtoMsg(message: _19.EventBandIBCResponseTimeoutProtoMsg): _19.EventBandIBCResponseTimeout;
                toProto(message: _19.EventBandIBCResponseTimeout): Uint8Array;
                toProtoMsg(message: _19.EventBandIBCResponseTimeout): _19.EventBandIBCResponseTimeoutProtoMsg;
            };
            SetPriceFeedPriceEvent: {
                typeUrl: string;
                encode(message: _19.SetPriceFeedPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SetPriceFeedPriceEvent;
                fromPartial(object: Partial<_19.SetPriceFeedPriceEvent>): _19.SetPriceFeedPriceEvent;
                fromAmino(object: _19.SetPriceFeedPriceEventAmino): _19.SetPriceFeedPriceEvent;
                toAmino(message: _19.SetPriceFeedPriceEvent): _19.SetPriceFeedPriceEventAmino;
                fromAminoMsg(object: _19.SetPriceFeedPriceEventAminoMsg): _19.SetPriceFeedPriceEvent;
                fromProtoMsg(message: _19.SetPriceFeedPriceEventProtoMsg): _19.SetPriceFeedPriceEvent;
                toProto(message: _19.SetPriceFeedPriceEvent): Uint8Array;
                toProtoMsg(message: _19.SetPriceFeedPriceEvent): _19.SetPriceFeedPriceEventProtoMsg;
            };
            SetProviderPriceEvent: {
                typeUrl: string;
                encode(message: _19.SetProviderPriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SetProviderPriceEvent;
                fromPartial(object: Partial<_19.SetProviderPriceEvent>): _19.SetProviderPriceEvent;
                fromAmino(object: _19.SetProviderPriceEventAmino): _19.SetProviderPriceEvent;
                toAmino(message: _19.SetProviderPriceEvent): _19.SetProviderPriceEventAmino;
                fromAminoMsg(object: _19.SetProviderPriceEventAminoMsg): _19.SetProviderPriceEvent;
                fromProtoMsg(message: _19.SetProviderPriceEventProtoMsg): _19.SetProviderPriceEvent;
                toProto(message: _19.SetProviderPriceEvent): Uint8Array;
                toProtoMsg(message: _19.SetProviderPriceEvent): _19.SetProviderPriceEventProtoMsg;
            };
            SetCoinbasePriceEvent: {
                typeUrl: string;
                encode(message: _19.SetCoinbasePriceEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.SetCoinbasePriceEvent;
                fromPartial(object: Partial<_19.SetCoinbasePriceEvent>): _19.SetCoinbasePriceEvent;
                fromAmino(object: _19.SetCoinbasePriceEventAmino): _19.SetCoinbasePriceEvent;
                toAmino(message: _19.SetCoinbasePriceEvent): _19.SetCoinbasePriceEventAmino;
                fromAminoMsg(object: _19.SetCoinbasePriceEventAminoMsg): _19.SetCoinbasePriceEvent;
                fromProtoMsg(message: _19.SetCoinbasePriceEventProtoMsg): _19.SetCoinbasePriceEvent;
                toProto(message: _19.SetCoinbasePriceEvent): Uint8Array;
                toProtoMsg(message: _19.SetCoinbasePriceEvent): _19.SetCoinbasePriceEventProtoMsg;
            };
            EventSetPythPrices: {
                typeUrl: string;
                encode(message: _19.EventSetPythPrices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventSetPythPrices;
                fromPartial(object: Partial<_19.EventSetPythPrices>): _19.EventSetPythPrices;
                fromAmino(object: _19.EventSetPythPricesAmino): _19.EventSetPythPrices;
                toAmino(message: _19.EventSetPythPrices): _19.EventSetPythPricesAmino;
                fromAminoMsg(object: _19.EventSetPythPricesAminoMsg): _19.EventSetPythPrices;
                fromProtoMsg(message: _19.EventSetPythPricesProtoMsg): _19.EventSetPythPrices;
                toProto(message: _19.EventSetPythPrices): Uint8Array;
                toProtoMsg(message: _19.EventSetPythPrices): _19.EventSetPythPricesProtoMsg;
            };
        };
    }
    namespace peggy {
        const v1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                currentValset(request?: _34.QueryCurrentValsetRequest): Promise<_34.QueryCurrentValsetResponse>;
                valsetRequest(request: _34.QueryValsetRequestRequest): Promise<_34.QueryValsetRequestResponse>;
                valsetConfirm(request: _34.QueryValsetConfirmRequest): Promise<_34.QueryValsetConfirmResponse>;
                valsetConfirmsByNonce(request: _34.QueryValsetConfirmsByNonceRequest): Promise<_34.QueryValsetConfirmsByNonceResponse>;
                lastValsetRequests(request?: _34.QueryLastValsetRequestsRequest): Promise<_34.QueryLastValsetRequestsResponse>;
                lastPendingValsetRequestByAddr(request: _34.QueryLastPendingValsetRequestByAddrRequest): Promise<_34.QueryLastPendingValsetRequestByAddrResponse>;
                lastEventByAddr(request: _34.QueryLastEventByAddrRequest): Promise<_34.QueryLastEventByAddrResponse>;
                getPendingSendToEth(request: _34.QueryPendingSendToEth): Promise<_34.QueryPendingSendToEthResponse>;
                batchFees(request?: _34.QueryBatchFeeRequest): Promise<_34.QueryBatchFeeResponse>;
                outgoingTxBatches(request?: _34.QueryOutgoingTxBatchesRequest): Promise<_34.QueryOutgoingTxBatchesResponse>;
                lastPendingBatchRequestByAddr(request: _34.QueryLastPendingBatchRequestByAddrRequest): Promise<_34.QueryLastPendingBatchRequestByAddrResponse>;
                batchRequestByNonce(request: _34.QueryBatchRequestByNonceRequest): Promise<_34.QueryBatchRequestByNonceResponse>;
                batchConfirms(request: _34.QueryBatchConfirmsRequest): Promise<_34.QueryBatchConfirmsResponse>;
                eRC20ToDenom(request: _34.QueryERC20ToDenomRequest): Promise<_34.QueryERC20ToDenomResponse>;
                denomToERC20(request: _34.QueryDenomToERC20Request): Promise<_34.QueryDenomToERC20Response>;
                getDelegateKeyByValidator(request: _34.QueryDelegateKeysByValidatorAddress): Promise<_34.QueryDelegateKeysByValidatorAddressResponse>;
                getDelegateKeyByEth(request: _34.QueryDelegateKeysByEthAddress): Promise<_34.QueryDelegateKeysByEthAddressResponse>;
                getDelegateKeyByOrchestrator(request: _34.QueryDelegateKeysByOrchestratorAddress): Promise<_34.QueryDelegateKeysByOrchestratorAddressResponse>;
                peggyModuleState(request?: _34.QueryModuleStateRequest): Promise<_34.QueryModuleStateResponse>;
                missingPeggoNonces(request?: _34.MissingNoncesRequest): Promise<_34.MissingNoncesResponse>;
            };
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    valsetConfirm(value: _30.MsgValsetConfirm): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sendToEth(value: _30.MsgSendToEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    requestBatch(value: _30.MsgRequestBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    confirmBatch(value: _30.MsgConfirmBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositClaim(value: _30.MsgDepositClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawClaim(value: _30.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    valsetUpdateClaim(value: _30.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    eRC20DeployedClaim(value: _30.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setOrchestratorAddresses(value: _30.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelSendToEth(value: _30.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitBadSignatureEvidence(value: _30.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _30.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    valsetConfirm(value: _30.MsgValsetConfirm): {
                        typeUrl: string;
                        value: _30.MsgValsetConfirm;
                    };
                    sendToEth(value: _30.MsgSendToEth): {
                        typeUrl: string;
                        value: _30.MsgSendToEth;
                    };
                    requestBatch(value: _30.MsgRequestBatch): {
                        typeUrl: string;
                        value: _30.MsgRequestBatch;
                    };
                    confirmBatch(value: _30.MsgConfirmBatch): {
                        typeUrl: string;
                        value: _30.MsgConfirmBatch;
                    };
                    depositClaim(value: _30.MsgDepositClaim): {
                        typeUrl: string;
                        value: _30.MsgDepositClaim;
                    };
                    withdrawClaim(value: _30.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: _30.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: _30.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: _30.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: _30.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: _30.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: _30.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: _30.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: _30.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: _30.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: _30.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: _30.MsgSubmitBadSignatureEvidence;
                    };
                    updateParams(value: _30.MsgUpdateParams): {
                        typeUrl: string;
                        value: _30.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    valsetConfirm(value: any): {
                        typeUrl: string;
                        value: _30.MsgValsetConfirm;
                    };
                    sendToEth(value: any): {
                        typeUrl: string;
                        value: _30.MsgSendToEth;
                    };
                    requestBatch(value: any): {
                        typeUrl: string;
                        value: _30.MsgRequestBatch;
                    };
                    confirmBatch(value: any): {
                        typeUrl: string;
                        value: _30.MsgConfirmBatch;
                    };
                    depositClaim(value: any): {
                        typeUrl: string;
                        value: _30.MsgDepositClaim;
                    };
                    withdrawClaim(value: any): {
                        typeUrl: string;
                        value: _30.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: any): {
                        typeUrl: string;
                        value: _30.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: any): {
                        typeUrl: string;
                        value: _30.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: any): {
                        typeUrl: string;
                        value: _30.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: any): {
                        typeUrl: string;
                        value: _30.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: any): {
                        typeUrl: string;
                        value: _30.MsgSubmitBadSignatureEvidence;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _30.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    valsetConfirm(value: _30.MsgValsetConfirm): {
                        typeUrl: string;
                        value: _30.MsgValsetConfirm;
                    };
                    sendToEth(value: _30.MsgSendToEth): {
                        typeUrl: string;
                        value: _30.MsgSendToEth;
                    };
                    requestBatch(value: _30.MsgRequestBatch): {
                        typeUrl: string;
                        value: _30.MsgRequestBatch;
                    };
                    confirmBatch(value: _30.MsgConfirmBatch): {
                        typeUrl: string;
                        value: _30.MsgConfirmBatch;
                    };
                    depositClaim(value: _30.MsgDepositClaim): {
                        typeUrl: string;
                        value: _30.MsgDepositClaim;
                    };
                    withdrawClaim(value: _30.MsgWithdrawClaim): {
                        typeUrl: string;
                        value: _30.MsgWithdrawClaim;
                    };
                    valsetUpdateClaim(value: _30.MsgValsetUpdatedClaim): {
                        typeUrl: string;
                        value: _30.MsgValsetUpdatedClaim;
                    };
                    eRC20DeployedClaim(value: _30.MsgERC20DeployedClaim): {
                        typeUrl: string;
                        value: _30.MsgERC20DeployedClaim;
                    };
                    setOrchestratorAddresses(value: _30.MsgSetOrchestratorAddresses): {
                        typeUrl: string;
                        value: _30.MsgSetOrchestratorAddresses;
                    };
                    cancelSendToEth(value: _30.MsgCancelSendToEth): {
                        typeUrl: string;
                        value: _30.MsgCancelSendToEth;
                    };
                    submitBadSignatureEvidence(value: _30.MsgSubmitBadSignatureEvidence): {
                        typeUrl: string;
                        value: _30.MsgSubmitBadSignatureEvidence;
                    };
                    updateParams(value: _30.MsgUpdateParams): {
                        typeUrl: string;
                        value: _30.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.peggy.v1.MsgValsetConfirm": {
                    aminoType: string;
                    toAmino: (message: _30.MsgValsetConfirm) => _30.MsgValsetConfirmAmino;
                    fromAmino: (object: _30.MsgValsetConfirmAmino) => _30.MsgValsetConfirm;
                };
                "/injective.peggy.v1.MsgSendToEth": {
                    aminoType: string;
                    toAmino: (message: _30.MsgSendToEth) => _30.MsgSendToEthAmino;
                    fromAmino: (object: _30.MsgSendToEthAmino) => _30.MsgSendToEth;
                };
                "/injective.peggy.v1.MsgRequestBatch": {
                    aminoType: string;
                    toAmino: (message: _30.MsgRequestBatch) => _30.MsgRequestBatchAmino;
                    fromAmino: (object: _30.MsgRequestBatchAmino) => _30.MsgRequestBatch;
                };
                "/injective.peggy.v1.MsgConfirmBatch": {
                    aminoType: string;
                    toAmino: (message: _30.MsgConfirmBatch) => _30.MsgConfirmBatchAmino;
                    fromAmino: (object: _30.MsgConfirmBatchAmino) => _30.MsgConfirmBatch;
                };
                "/injective.peggy.v1.MsgDepositClaim": {
                    aminoType: string;
                    toAmino: (message: _30.MsgDepositClaim) => _30.MsgDepositClaimAmino;
                    fromAmino: (object: _30.MsgDepositClaimAmino) => _30.MsgDepositClaim;
                };
                "/injective.peggy.v1.MsgWithdrawClaim": {
                    aminoType: string;
                    toAmino: (message: _30.MsgWithdrawClaim) => _30.MsgWithdrawClaimAmino;
                    fromAmino: (object: _30.MsgWithdrawClaimAmino) => _30.MsgWithdrawClaim;
                };
                "/injective.peggy.v1.MsgValsetUpdatedClaim": {
                    aminoType: string;
                    toAmino: (message: _30.MsgValsetUpdatedClaim) => _30.MsgValsetUpdatedClaimAmino;
                    fromAmino: (object: _30.MsgValsetUpdatedClaimAmino) => _30.MsgValsetUpdatedClaim;
                };
                "/injective.peggy.v1.MsgERC20DeployedClaim": {
                    aminoType: string;
                    toAmino: (message: _30.MsgERC20DeployedClaim) => _30.MsgERC20DeployedClaimAmino;
                    fromAmino: (object: _30.MsgERC20DeployedClaimAmino) => _30.MsgERC20DeployedClaim;
                };
                "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
                    aminoType: string;
                    toAmino: (message: _30.MsgSetOrchestratorAddresses) => _30.MsgSetOrchestratorAddressesAmino;
                    fromAmino: (object: _30.MsgSetOrchestratorAddressesAmino) => _30.MsgSetOrchestratorAddresses;
                };
                "/injective.peggy.v1.MsgCancelSendToEth": {
                    aminoType: string;
                    toAmino: (message: _30.MsgCancelSendToEth) => _30.MsgCancelSendToEthAmino;
                    fromAmino: (object: _30.MsgCancelSendToEthAmino) => _30.MsgCancelSendToEth;
                };
                "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
                    aminoType: string;
                    toAmino: (message: _30.MsgSubmitBadSignatureEvidence) => _30.MsgSubmitBadSignatureEvidenceAmino;
                    fromAmino: (object: _30.MsgSubmitBadSignatureEvidenceAmino) => _30.MsgSubmitBadSignatureEvidence;
                };
                "/injective.peggy.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _30.MsgUpdateParams) => _30.MsgUpdateParamsAmino;
                    fromAmino: (object: _30.MsgUpdateParamsAmino) => _30.MsgUpdateParams;
                };
            };
            BridgeValidator: {
                typeUrl: string;
                encode(message: _35.BridgeValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.BridgeValidator;
                fromPartial(object: Partial<_35.BridgeValidator>): _35.BridgeValidator;
                fromAmino(object: _35.BridgeValidatorAmino): _35.BridgeValidator;
                toAmino(message: _35.BridgeValidator): _35.BridgeValidatorAmino;
                fromAminoMsg(object: _35.BridgeValidatorAminoMsg): _35.BridgeValidator;
                fromProtoMsg(message: _35.BridgeValidatorProtoMsg): _35.BridgeValidator;
                toProto(message: _35.BridgeValidator): Uint8Array;
                toProtoMsg(message: _35.BridgeValidator): _35.BridgeValidatorProtoMsg;
            };
            Valset: {
                typeUrl: string;
                encode(message: _35.Valset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.Valset;
                fromPartial(object: Partial<_35.Valset>): _35.Valset;
                fromAmino(object: _35.ValsetAmino): _35.Valset;
                toAmino(message: _35.Valset): _35.ValsetAmino;
                fromAminoMsg(object: _35.ValsetAminoMsg): _35.Valset;
                fromProtoMsg(message: _35.ValsetProtoMsg): _35.Valset;
                toProto(message: _35.Valset): Uint8Array;
                toProtoMsg(message: _35.Valset): _35.ValsetProtoMsg;
            };
            LastObservedEthereumBlockHeight: {
                typeUrl: string;
                encode(message: _35.LastObservedEthereumBlockHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.LastObservedEthereumBlockHeight;
                fromPartial(object: Partial<_35.LastObservedEthereumBlockHeight>): _35.LastObservedEthereumBlockHeight;
                fromAmino(object: _35.LastObservedEthereumBlockHeightAmino): _35.LastObservedEthereumBlockHeight;
                toAmino(message: _35.LastObservedEthereumBlockHeight): _35.LastObservedEthereumBlockHeightAmino;
                fromAminoMsg(object: _35.LastObservedEthereumBlockHeightAminoMsg): _35.LastObservedEthereumBlockHeight;
                fromProtoMsg(message: _35.LastObservedEthereumBlockHeightProtoMsg): _35.LastObservedEthereumBlockHeight;
                toProto(message: _35.LastObservedEthereumBlockHeight): Uint8Array;
                toProtoMsg(message: _35.LastObservedEthereumBlockHeight): _35.LastObservedEthereumBlockHeightProtoMsg;
            };
            LastClaimEvent: {
                typeUrl: string;
                encode(message: _35.LastClaimEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.LastClaimEvent;
                fromPartial(object: Partial<_35.LastClaimEvent>): _35.LastClaimEvent;
                fromAmino(object: _35.LastClaimEventAmino): _35.LastClaimEvent;
                toAmino(message: _35.LastClaimEvent): _35.LastClaimEventAmino;
                fromAminoMsg(object: _35.LastClaimEventAminoMsg): _35.LastClaimEvent;
                fromProtoMsg(message: _35.LastClaimEventProtoMsg): _35.LastClaimEvent;
                toProto(message: _35.LastClaimEvent): Uint8Array;
                toProtoMsg(message: _35.LastClaimEvent): _35.LastClaimEventProtoMsg;
            };
            ERC20ToDenom: {
                typeUrl: string;
                encode(message: _35.ERC20ToDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.ERC20ToDenom;
                fromPartial(object: Partial<_35.ERC20ToDenom>): _35.ERC20ToDenom;
                fromAmino(object: _35.ERC20ToDenomAmino): _35.ERC20ToDenom;
                toAmino(message: _35.ERC20ToDenom): _35.ERC20ToDenomAmino;
                fromAminoMsg(object: _35.ERC20ToDenomAminoMsg): _35.ERC20ToDenom;
                fromProtoMsg(message: _35.ERC20ToDenomProtoMsg): _35.ERC20ToDenom;
                toProto(message: _35.ERC20ToDenom): Uint8Array;
                toProtoMsg(message: _35.ERC20ToDenom): _35.ERC20ToDenomProtoMsg;
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
            QueryCurrentValsetRequest: {
                typeUrl: string;
                encode(_: _34.QueryCurrentValsetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryCurrentValsetRequest;
                fromPartial(_: Partial<_34.QueryCurrentValsetRequest>): _34.QueryCurrentValsetRequest;
                fromAmino(_: _34.QueryCurrentValsetRequestAmino): _34.QueryCurrentValsetRequest;
                toAmino(_: _34.QueryCurrentValsetRequest): _34.QueryCurrentValsetRequestAmino;
                fromAminoMsg(object: _34.QueryCurrentValsetRequestAminoMsg): _34.QueryCurrentValsetRequest;
                fromProtoMsg(message: _34.QueryCurrentValsetRequestProtoMsg): _34.QueryCurrentValsetRequest;
                toProto(message: _34.QueryCurrentValsetRequest): Uint8Array;
                toProtoMsg(message: _34.QueryCurrentValsetRequest): _34.QueryCurrentValsetRequestProtoMsg;
            };
            QueryCurrentValsetResponse: {
                typeUrl: string;
                encode(message: _34.QueryCurrentValsetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryCurrentValsetResponse;
                fromPartial(object: Partial<_34.QueryCurrentValsetResponse>): _34.QueryCurrentValsetResponse;
                fromAmino(object: _34.QueryCurrentValsetResponseAmino): _34.QueryCurrentValsetResponse;
                toAmino(message: _34.QueryCurrentValsetResponse): _34.QueryCurrentValsetResponseAmino;
                fromAminoMsg(object: _34.QueryCurrentValsetResponseAminoMsg): _34.QueryCurrentValsetResponse;
                fromProtoMsg(message: _34.QueryCurrentValsetResponseProtoMsg): _34.QueryCurrentValsetResponse;
                toProto(message: _34.QueryCurrentValsetResponse): Uint8Array;
                toProtoMsg(message: _34.QueryCurrentValsetResponse): _34.QueryCurrentValsetResponseProtoMsg;
            };
            QueryValsetRequestRequest: {
                typeUrl: string;
                encode(message: _34.QueryValsetRequestRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValsetRequestRequest;
                fromPartial(object: Partial<_34.QueryValsetRequestRequest>): _34.QueryValsetRequestRequest;
                fromAmino(object: _34.QueryValsetRequestRequestAmino): _34.QueryValsetRequestRequest;
                toAmino(message: _34.QueryValsetRequestRequest): _34.QueryValsetRequestRequestAmino;
                fromAminoMsg(object: _34.QueryValsetRequestRequestAminoMsg): _34.QueryValsetRequestRequest;
                fromProtoMsg(message: _34.QueryValsetRequestRequestProtoMsg): _34.QueryValsetRequestRequest;
                toProto(message: _34.QueryValsetRequestRequest): Uint8Array;
                toProtoMsg(message: _34.QueryValsetRequestRequest): _34.QueryValsetRequestRequestProtoMsg;
            };
            QueryValsetRequestResponse: {
                typeUrl: string;
                encode(message: _34.QueryValsetRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValsetRequestResponse;
                fromPartial(object: Partial<_34.QueryValsetRequestResponse>): _34.QueryValsetRequestResponse;
                fromAmino(object: _34.QueryValsetRequestResponseAmino): _34.QueryValsetRequestResponse;
                toAmino(message: _34.QueryValsetRequestResponse): _34.QueryValsetRequestResponseAmino;
                fromAminoMsg(object: _34.QueryValsetRequestResponseAminoMsg): _34.QueryValsetRequestResponse;
                fromProtoMsg(message: _34.QueryValsetRequestResponseProtoMsg): _34.QueryValsetRequestResponse;
                toProto(message: _34.QueryValsetRequestResponse): Uint8Array;
                toProtoMsg(message: _34.QueryValsetRequestResponse): _34.QueryValsetRequestResponseProtoMsg;
            };
            QueryValsetConfirmRequest: {
                typeUrl: string;
                encode(message: _34.QueryValsetConfirmRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValsetConfirmRequest;
                fromPartial(object: Partial<_34.QueryValsetConfirmRequest>): _34.QueryValsetConfirmRequest;
                fromAmino(object: _34.QueryValsetConfirmRequestAmino): _34.QueryValsetConfirmRequest;
                toAmino(message: _34.QueryValsetConfirmRequest): _34.QueryValsetConfirmRequestAmino;
                fromAminoMsg(object: _34.QueryValsetConfirmRequestAminoMsg): _34.QueryValsetConfirmRequest;
                fromProtoMsg(message: _34.QueryValsetConfirmRequestProtoMsg): _34.QueryValsetConfirmRequest;
                toProto(message: _34.QueryValsetConfirmRequest): Uint8Array;
                toProtoMsg(message: _34.QueryValsetConfirmRequest): _34.QueryValsetConfirmRequestProtoMsg;
            };
            QueryValsetConfirmResponse: {
                typeUrl: string;
                encode(message: _34.QueryValsetConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValsetConfirmResponse;
                fromPartial(object: Partial<_34.QueryValsetConfirmResponse>): _34.QueryValsetConfirmResponse;
                fromAmino(object: _34.QueryValsetConfirmResponseAmino): _34.QueryValsetConfirmResponse;
                toAmino(message: _34.QueryValsetConfirmResponse): _34.QueryValsetConfirmResponseAmino;
                fromAminoMsg(object: _34.QueryValsetConfirmResponseAminoMsg): _34.QueryValsetConfirmResponse;
                fromProtoMsg(message: _34.QueryValsetConfirmResponseProtoMsg): _34.QueryValsetConfirmResponse;
                toProto(message: _34.QueryValsetConfirmResponse): Uint8Array;
                toProtoMsg(message: _34.QueryValsetConfirmResponse): _34.QueryValsetConfirmResponseProtoMsg;
            };
            QueryValsetConfirmsByNonceRequest: {
                typeUrl: string;
                encode(message: _34.QueryValsetConfirmsByNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValsetConfirmsByNonceRequest;
                fromPartial(object: Partial<_34.QueryValsetConfirmsByNonceRequest>): _34.QueryValsetConfirmsByNonceRequest;
                fromAmino(object: _34.QueryValsetConfirmsByNonceRequestAmino): _34.QueryValsetConfirmsByNonceRequest;
                toAmino(message: _34.QueryValsetConfirmsByNonceRequest): _34.QueryValsetConfirmsByNonceRequestAmino;
                fromAminoMsg(object: _34.QueryValsetConfirmsByNonceRequestAminoMsg): _34.QueryValsetConfirmsByNonceRequest;
                fromProtoMsg(message: _34.QueryValsetConfirmsByNonceRequestProtoMsg): _34.QueryValsetConfirmsByNonceRequest;
                toProto(message: _34.QueryValsetConfirmsByNonceRequest): Uint8Array;
                toProtoMsg(message: _34.QueryValsetConfirmsByNonceRequest): _34.QueryValsetConfirmsByNonceRequestProtoMsg;
            };
            QueryValsetConfirmsByNonceResponse: {
                typeUrl: string;
                encode(message: _34.QueryValsetConfirmsByNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryValsetConfirmsByNonceResponse;
                fromPartial(object: Partial<_34.QueryValsetConfirmsByNonceResponse>): _34.QueryValsetConfirmsByNonceResponse;
                fromAmino(object: _34.QueryValsetConfirmsByNonceResponseAmino): _34.QueryValsetConfirmsByNonceResponse;
                toAmino(message: _34.QueryValsetConfirmsByNonceResponse): _34.QueryValsetConfirmsByNonceResponseAmino;
                fromAminoMsg(object: _34.QueryValsetConfirmsByNonceResponseAminoMsg): _34.QueryValsetConfirmsByNonceResponse;
                fromProtoMsg(message: _34.QueryValsetConfirmsByNonceResponseProtoMsg): _34.QueryValsetConfirmsByNonceResponse;
                toProto(message: _34.QueryValsetConfirmsByNonceResponse): Uint8Array;
                toProtoMsg(message: _34.QueryValsetConfirmsByNonceResponse): _34.QueryValsetConfirmsByNonceResponseProtoMsg;
            };
            QueryLastValsetRequestsRequest: {
                typeUrl: string;
                encode(_: _34.QueryLastValsetRequestsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryLastValsetRequestsRequest;
                fromPartial(_: Partial<_34.QueryLastValsetRequestsRequest>): _34.QueryLastValsetRequestsRequest;
                fromAmino(_: _34.QueryLastValsetRequestsRequestAmino): _34.QueryLastValsetRequestsRequest;
                toAmino(_: _34.QueryLastValsetRequestsRequest): _34.QueryLastValsetRequestsRequestAmino;
                fromAminoMsg(object: _34.QueryLastValsetRequestsRequestAminoMsg): _34.QueryLastValsetRequestsRequest;
                fromProtoMsg(message: _34.QueryLastValsetRequestsRequestProtoMsg): _34.QueryLastValsetRequestsRequest;
                toProto(message: _34.QueryLastValsetRequestsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryLastValsetRequestsRequest): _34.QueryLastValsetRequestsRequestProtoMsg;
            };
            QueryLastValsetRequestsResponse: {
                typeUrl: string;
                encode(message: _34.QueryLastValsetRequestsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryLastValsetRequestsResponse;
                fromPartial(object: Partial<_34.QueryLastValsetRequestsResponse>): _34.QueryLastValsetRequestsResponse;
                fromAmino(object: _34.QueryLastValsetRequestsResponseAmino): _34.QueryLastValsetRequestsResponse;
                toAmino(message: _34.QueryLastValsetRequestsResponse): _34.QueryLastValsetRequestsResponseAmino;
                fromAminoMsg(object: _34.QueryLastValsetRequestsResponseAminoMsg): _34.QueryLastValsetRequestsResponse;
                fromProtoMsg(message: _34.QueryLastValsetRequestsResponseProtoMsg): _34.QueryLastValsetRequestsResponse;
                toProto(message: _34.QueryLastValsetRequestsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryLastValsetRequestsResponse): _34.QueryLastValsetRequestsResponseProtoMsg;
            };
            QueryLastPendingValsetRequestByAddrRequest: {
                typeUrl: string;
                encode(message: _34.QueryLastPendingValsetRequestByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryLastPendingValsetRequestByAddrRequest;
                fromPartial(object: Partial<_34.QueryLastPendingValsetRequestByAddrRequest>): _34.QueryLastPendingValsetRequestByAddrRequest;
                fromAmino(object: _34.QueryLastPendingValsetRequestByAddrRequestAmino): _34.QueryLastPendingValsetRequestByAddrRequest;
                toAmino(message: _34.QueryLastPendingValsetRequestByAddrRequest): _34.QueryLastPendingValsetRequestByAddrRequestAmino;
                fromAminoMsg(object: _34.QueryLastPendingValsetRequestByAddrRequestAminoMsg): _34.QueryLastPendingValsetRequestByAddrRequest;
                fromProtoMsg(message: _34.QueryLastPendingValsetRequestByAddrRequestProtoMsg): _34.QueryLastPendingValsetRequestByAddrRequest;
                toProto(message: _34.QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
                toProtoMsg(message: _34.QueryLastPendingValsetRequestByAddrRequest): _34.QueryLastPendingValsetRequestByAddrRequestProtoMsg;
            };
            QueryLastPendingValsetRequestByAddrResponse: {
                typeUrl: string;
                encode(message: _34.QueryLastPendingValsetRequestByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryLastPendingValsetRequestByAddrResponse;
                fromPartial(object: Partial<_34.QueryLastPendingValsetRequestByAddrResponse>): _34.QueryLastPendingValsetRequestByAddrResponse;
                fromAmino(object: _34.QueryLastPendingValsetRequestByAddrResponseAmino): _34.QueryLastPendingValsetRequestByAddrResponse;
                toAmino(message: _34.QueryLastPendingValsetRequestByAddrResponse): _34.QueryLastPendingValsetRequestByAddrResponseAmino;
                fromAminoMsg(object: _34.QueryLastPendingValsetRequestByAddrResponseAminoMsg): _34.QueryLastPendingValsetRequestByAddrResponse;
                fromProtoMsg(message: _34.QueryLastPendingValsetRequestByAddrResponseProtoMsg): _34.QueryLastPendingValsetRequestByAddrResponse;
                toProto(message: _34.QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
                toProtoMsg(message: _34.QueryLastPendingValsetRequestByAddrResponse): _34.QueryLastPendingValsetRequestByAddrResponseProtoMsg;
            };
            QueryBatchFeeRequest: {
                typeUrl: string;
                encode(_: _34.QueryBatchFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryBatchFeeRequest;
                fromPartial(_: Partial<_34.QueryBatchFeeRequest>): _34.QueryBatchFeeRequest;
                fromAmino(_: _34.QueryBatchFeeRequestAmino): _34.QueryBatchFeeRequest;
                toAmino(_: _34.QueryBatchFeeRequest): _34.QueryBatchFeeRequestAmino;
                fromAminoMsg(object: _34.QueryBatchFeeRequestAminoMsg): _34.QueryBatchFeeRequest;
                fromProtoMsg(message: _34.QueryBatchFeeRequestProtoMsg): _34.QueryBatchFeeRequest;
                toProto(message: _34.QueryBatchFeeRequest): Uint8Array;
                toProtoMsg(message: _34.QueryBatchFeeRequest): _34.QueryBatchFeeRequestProtoMsg;
            };
            QueryBatchFeeResponse: {
                typeUrl: string;
                encode(message: _34.QueryBatchFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBatchFeeResponse;
                fromPartial(object: Partial<_34.QueryBatchFeeResponse>): _34.QueryBatchFeeResponse;
                fromAmino(object: _34.QueryBatchFeeResponseAmino): _34.QueryBatchFeeResponse;
                toAmino(message: _34.QueryBatchFeeResponse): _34.QueryBatchFeeResponseAmino;
                fromAminoMsg(object: _34.QueryBatchFeeResponseAminoMsg): _34.QueryBatchFeeResponse;
                fromProtoMsg(message: _34.QueryBatchFeeResponseProtoMsg): _34.QueryBatchFeeResponse;
                toProto(message: _34.QueryBatchFeeResponse): Uint8Array;
                toProtoMsg(message: _34.QueryBatchFeeResponse): _34.QueryBatchFeeResponseProtoMsg;
            };
            QueryLastPendingBatchRequestByAddrRequest: {
                typeUrl: string;
                encode(message: _34.QueryLastPendingBatchRequestByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryLastPendingBatchRequestByAddrRequest;
                fromPartial(object: Partial<_34.QueryLastPendingBatchRequestByAddrRequest>): _34.QueryLastPendingBatchRequestByAddrRequest;
                fromAmino(object: _34.QueryLastPendingBatchRequestByAddrRequestAmino): _34.QueryLastPendingBatchRequestByAddrRequest;
                toAmino(message: _34.QueryLastPendingBatchRequestByAddrRequest): _34.QueryLastPendingBatchRequestByAddrRequestAmino;
                fromAminoMsg(object: _34.QueryLastPendingBatchRequestByAddrRequestAminoMsg): _34.QueryLastPendingBatchRequestByAddrRequest;
                fromProtoMsg(message: _34.QueryLastPendingBatchRequestByAddrRequestProtoMsg): _34.QueryLastPendingBatchRequestByAddrRequest;
                toProto(message: _34.QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
                toProtoMsg(message: _34.QueryLastPendingBatchRequestByAddrRequest): _34.QueryLastPendingBatchRequestByAddrRequestProtoMsg;
            };
            QueryLastPendingBatchRequestByAddrResponse: {
                typeUrl: string;
                encode(message: _34.QueryLastPendingBatchRequestByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryLastPendingBatchRequestByAddrResponse;
                fromPartial(object: Partial<_34.QueryLastPendingBatchRequestByAddrResponse>): _34.QueryLastPendingBatchRequestByAddrResponse;
                fromAmino(object: _34.QueryLastPendingBatchRequestByAddrResponseAmino): _34.QueryLastPendingBatchRequestByAddrResponse;
                toAmino(message: _34.QueryLastPendingBatchRequestByAddrResponse): _34.QueryLastPendingBatchRequestByAddrResponseAmino;
                fromAminoMsg(object: _34.QueryLastPendingBatchRequestByAddrResponseAminoMsg): _34.QueryLastPendingBatchRequestByAddrResponse;
                fromProtoMsg(message: _34.QueryLastPendingBatchRequestByAddrResponseProtoMsg): _34.QueryLastPendingBatchRequestByAddrResponse;
                toProto(message: _34.QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
                toProtoMsg(message: _34.QueryLastPendingBatchRequestByAddrResponse): _34.QueryLastPendingBatchRequestByAddrResponseProtoMsg;
            };
            QueryOutgoingTxBatchesRequest: {
                typeUrl: string;
                encode(_: _34.QueryOutgoingTxBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryOutgoingTxBatchesRequest;
                fromPartial(_: Partial<_34.QueryOutgoingTxBatchesRequest>): _34.QueryOutgoingTxBatchesRequest;
                fromAmino(_: _34.QueryOutgoingTxBatchesRequestAmino): _34.QueryOutgoingTxBatchesRequest;
                toAmino(_: _34.QueryOutgoingTxBatchesRequest): _34.QueryOutgoingTxBatchesRequestAmino;
                fromAminoMsg(object: _34.QueryOutgoingTxBatchesRequestAminoMsg): _34.QueryOutgoingTxBatchesRequest;
                fromProtoMsg(message: _34.QueryOutgoingTxBatchesRequestProtoMsg): _34.QueryOutgoingTxBatchesRequest;
                toProto(message: _34.QueryOutgoingTxBatchesRequest): Uint8Array;
                toProtoMsg(message: _34.QueryOutgoingTxBatchesRequest): _34.QueryOutgoingTxBatchesRequestProtoMsg;
            };
            QueryOutgoingTxBatchesResponse: {
                typeUrl: string;
                encode(message: _34.QueryOutgoingTxBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryOutgoingTxBatchesResponse;
                fromPartial(object: Partial<_34.QueryOutgoingTxBatchesResponse>): _34.QueryOutgoingTxBatchesResponse;
                fromAmino(object: _34.QueryOutgoingTxBatchesResponseAmino): _34.QueryOutgoingTxBatchesResponse;
                toAmino(message: _34.QueryOutgoingTxBatchesResponse): _34.QueryOutgoingTxBatchesResponseAmino;
                fromAminoMsg(object: _34.QueryOutgoingTxBatchesResponseAminoMsg): _34.QueryOutgoingTxBatchesResponse;
                fromProtoMsg(message: _34.QueryOutgoingTxBatchesResponseProtoMsg): _34.QueryOutgoingTxBatchesResponse;
                toProto(message: _34.QueryOutgoingTxBatchesResponse): Uint8Array;
                toProtoMsg(message: _34.QueryOutgoingTxBatchesResponse): _34.QueryOutgoingTxBatchesResponseProtoMsg;
            };
            QueryBatchRequestByNonceRequest: {
                typeUrl: string;
                encode(message: _34.QueryBatchRequestByNonceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBatchRequestByNonceRequest;
                fromPartial(object: Partial<_34.QueryBatchRequestByNonceRequest>): _34.QueryBatchRequestByNonceRequest;
                fromAmino(object: _34.QueryBatchRequestByNonceRequestAmino): _34.QueryBatchRequestByNonceRequest;
                toAmino(message: _34.QueryBatchRequestByNonceRequest): _34.QueryBatchRequestByNonceRequestAmino;
                fromAminoMsg(object: _34.QueryBatchRequestByNonceRequestAminoMsg): _34.QueryBatchRequestByNonceRequest;
                fromProtoMsg(message: _34.QueryBatchRequestByNonceRequestProtoMsg): _34.QueryBatchRequestByNonceRequest;
                toProto(message: _34.QueryBatchRequestByNonceRequest): Uint8Array;
                toProtoMsg(message: _34.QueryBatchRequestByNonceRequest): _34.QueryBatchRequestByNonceRequestProtoMsg;
            };
            QueryBatchRequestByNonceResponse: {
                typeUrl: string;
                encode(message: _34.QueryBatchRequestByNonceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBatchRequestByNonceResponse;
                fromPartial(object: Partial<_34.QueryBatchRequestByNonceResponse>): _34.QueryBatchRequestByNonceResponse;
                fromAmino(object: _34.QueryBatchRequestByNonceResponseAmino): _34.QueryBatchRequestByNonceResponse;
                toAmino(message: _34.QueryBatchRequestByNonceResponse): _34.QueryBatchRequestByNonceResponseAmino;
                fromAminoMsg(object: _34.QueryBatchRequestByNonceResponseAminoMsg): _34.QueryBatchRequestByNonceResponse;
                fromProtoMsg(message: _34.QueryBatchRequestByNonceResponseProtoMsg): _34.QueryBatchRequestByNonceResponse;
                toProto(message: _34.QueryBatchRequestByNonceResponse): Uint8Array;
                toProtoMsg(message: _34.QueryBatchRequestByNonceResponse): _34.QueryBatchRequestByNonceResponseProtoMsg;
            };
            QueryBatchConfirmsRequest: {
                typeUrl: string;
                encode(message: _34.QueryBatchConfirmsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBatchConfirmsRequest;
                fromPartial(object: Partial<_34.QueryBatchConfirmsRequest>): _34.QueryBatchConfirmsRequest;
                fromAmino(object: _34.QueryBatchConfirmsRequestAmino): _34.QueryBatchConfirmsRequest;
                toAmino(message: _34.QueryBatchConfirmsRequest): _34.QueryBatchConfirmsRequestAmino;
                fromAminoMsg(object: _34.QueryBatchConfirmsRequestAminoMsg): _34.QueryBatchConfirmsRequest;
                fromProtoMsg(message: _34.QueryBatchConfirmsRequestProtoMsg): _34.QueryBatchConfirmsRequest;
                toProto(message: _34.QueryBatchConfirmsRequest): Uint8Array;
                toProtoMsg(message: _34.QueryBatchConfirmsRequest): _34.QueryBatchConfirmsRequestProtoMsg;
            };
            QueryBatchConfirmsResponse: {
                typeUrl: string;
                encode(message: _34.QueryBatchConfirmsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryBatchConfirmsResponse;
                fromPartial(object: Partial<_34.QueryBatchConfirmsResponse>): _34.QueryBatchConfirmsResponse;
                fromAmino(object: _34.QueryBatchConfirmsResponseAmino): _34.QueryBatchConfirmsResponse;
                toAmino(message: _34.QueryBatchConfirmsResponse): _34.QueryBatchConfirmsResponseAmino;
                fromAminoMsg(object: _34.QueryBatchConfirmsResponseAminoMsg): _34.QueryBatchConfirmsResponse;
                fromProtoMsg(message: _34.QueryBatchConfirmsResponseProtoMsg): _34.QueryBatchConfirmsResponse;
                toProto(message: _34.QueryBatchConfirmsResponse): Uint8Array;
                toProtoMsg(message: _34.QueryBatchConfirmsResponse): _34.QueryBatchConfirmsResponseProtoMsg;
            };
            QueryLastEventByAddrRequest: {
                typeUrl: string;
                encode(message: _34.QueryLastEventByAddrRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryLastEventByAddrRequest;
                fromPartial(object: Partial<_34.QueryLastEventByAddrRequest>): _34.QueryLastEventByAddrRequest;
                fromAmino(object: _34.QueryLastEventByAddrRequestAmino): _34.QueryLastEventByAddrRequest;
                toAmino(message: _34.QueryLastEventByAddrRequest): _34.QueryLastEventByAddrRequestAmino;
                fromAminoMsg(object: _34.QueryLastEventByAddrRequestAminoMsg): _34.QueryLastEventByAddrRequest;
                fromProtoMsg(message: _34.QueryLastEventByAddrRequestProtoMsg): _34.QueryLastEventByAddrRequest;
                toProto(message: _34.QueryLastEventByAddrRequest): Uint8Array;
                toProtoMsg(message: _34.QueryLastEventByAddrRequest): _34.QueryLastEventByAddrRequestProtoMsg;
            };
            QueryLastEventByAddrResponse: {
                typeUrl: string;
                encode(message: _34.QueryLastEventByAddrResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryLastEventByAddrResponse;
                fromPartial(object: Partial<_34.QueryLastEventByAddrResponse>): _34.QueryLastEventByAddrResponse;
                fromAmino(object: _34.QueryLastEventByAddrResponseAmino): _34.QueryLastEventByAddrResponse;
                toAmino(message: _34.QueryLastEventByAddrResponse): _34.QueryLastEventByAddrResponseAmino;
                fromAminoMsg(object: _34.QueryLastEventByAddrResponseAminoMsg): _34.QueryLastEventByAddrResponse;
                fromProtoMsg(message: _34.QueryLastEventByAddrResponseProtoMsg): _34.QueryLastEventByAddrResponse;
                toProto(message: _34.QueryLastEventByAddrResponse): Uint8Array;
                toProtoMsg(message: _34.QueryLastEventByAddrResponse): _34.QueryLastEventByAddrResponseProtoMsg;
            };
            QueryERC20ToDenomRequest: {
                typeUrl: string;
                encode(message: _34.QueryERC20ToDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryERC20ToDenomRequest;
                fromPartial(object: Partial<_34.QueryERC20ToDenomRequest>): _34.QueryERC20ToDenomRequest;
                fromAmino(object: _34.QueryERC20ToDenomRequestAmino): _34.QueryERC20ToDenomRequest;
                toAmino(message: _34.QueryERC20ToDenomRequest): _34.QueryERC20ToDenomRequestAmino;
                fromAminoMsg(object: _34.QueryERC20ToDenomRequestAminoMsg): _34.QueryERC20ToDenomRequest;
                fromProtoMsg(message: _34.QueryERC20ToDenomRequestProtoMsg): _34.QueryERC20ToDenomRequest;
                toProto(message: _34.QueryERC20ToDenomRequest): Uint8Array;
                toProtoMsg(message: _34.QueryERC20ToDenomRequest): _34.QueryERC20ToDenomRequestProtoMsg;
            };
            QueryERC20ToDenomResponse: {
                typeUrl: string;
                encode(message: _34.QueryERC20ToDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryERC20ToDenomResponse;
                fromPartial(object: Partial<_34.QueryERC20ToDenomResponse>): _34.QueryERC20ToDenomResponse;
                fromAmino(object: _34.QueryERC20ToDenomResponseAmino): _34.QueryERC20ToDenomResponse;
                toAmino(message: _34.QueryERC20ToDenomResponse): _34.QueryERC20ToDenomResponseAmino;
                fromAminoMsg(object: _34.QueryERC20ToDenomResponseAminoMsg): _34.QueryERC20ToDenomResponse;
                fromProtoMsg(message: _34.QueryERC20ToDenomResponseProtoMsg): _34.QueryERC20ToDenomResponse;
                toProto(message: _34.QueryERC20ToDenomResponse): Uint8Array;
                toProtoMsg(message: _34.QueryERC20ToDenomResponse): _34.QueryERC20ToDenomResponseProtoMsg;
            };
            QueryDenomToERC20Request: {
                typeUrl: string;
                encode(message: _34.QueryDenomToERC20Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDenomToERC20Request;
                fromPartial(object: Partial<_34.QueryDenomToERC20Request>): _34.QueryDenomToERC20Request;
                fromAmino(object: _34.QueryDenomToERC20RequestAmino): _34.QueryDenomToERC20Request;
                toAmino(message: _34.QueryDenomToERC20Request): _34.QueryDenomToERC20RequestAmino;
                fromAminoMsg(object: _34.QueryDenomToERC20RequestAminoMsg): _34.QueryDenomToERC20Request;
                fromProtoMsg(message: _34.QueryDenomToERC20RequestProtoMsg): _34.QueryDenomToERC20Request;
                toProto(message: _34.QueryDenomToERC20Request): Uint8Array;
                toProtoMsg(message: _34.QueryDenomToERC20Request): _34.QueryDenomToERC20RequestProtoMsg;
            };
            QueryDenomToERC20Response: {
                typeUrl: string;
                encode(message: _34.QueryDenomToERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDenomToERC20Response;
                fromPartial(object: Partial<_34.QueryDenomToERC20Response>): _34.QueryDenomToERC20Response;
                fromAmino(object: _34.QueryDenomToERC20ResponseAmino): _34.QueryDenomToERC20Response;
                toAmino(message: _34.QueryDenomToERC20Response): _34.QueryDenomToERC20ResponseAmino;
                fromAminoMsg(object: _34.QueryDenomToERC20ResponseAminoMsg): _34.QueryDenomToERC20Response;
                fromProtoMsg(message: _34.QueryDenomToERC20ResponseProtoMsg): _34.QueryDenomToERC20Response;
                toProto(message: _34.QueryDenomToERC20Response): Uint8Array;
                toProtoMsg(message: _34.QueryDenomToERC20Response): _34.QueryDenomToERC20ResponseProtoMsg;
            };
            QueryDelegateKeysByValidatorAddress: {
                typeUrl: string;
                encode(message: _34.QueryDelegateKeysByValidatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegateKeysByValidatorAddress;
                fromPartial(object: Partial<_34.QueryDelegateKeysByValidatorAddress>): _34.QueryDelegateKeysByValidatorAddress;
                fromAmino(object: _34.QueryDelegateKeysByValidatorAddressAmino): _34.QueryDelegateKeysByValidatorAddress;
                toAmino(message: _34.QueryDelegateKeysByValidatorAddress): _34.QueryDelegateKeysByValidatorAddressAmino;
                fromAminoMsg(object: _34.QueryDelegateKeysByValidatorAddressAminoMsg): _34.QueryDelegateKeysByValidatorAddress;
                fromProtoMsg(message: _34.QueryDelegateKeysByValidatorAddressProtoMsg): _34.QueryDelegateKeysByValidatorAddress;
                toProto(message: _34.QueryDelegateKeysByValidatorAddress): Uint8Array;
                toProtoMsg(message: _34.QueryDelegateKeysByValidatorAddress): _34.QueryDelegateKeysByValidatorAddressProtoMsg;
            };
            QueryDelegateKeysByValidatorAddressResponse: {
                typeUrl: string;
                encode(message: _34.QueryDelegateKeysByValidatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegateKeysByValidatorAddressResponse;
                fromPartial(object: Partial<_34.QueryDelegateKeysByValidatorAddressResponse>): _34.QueryDelegateKeysByValidatorAddressResponse;
                fromAmino(object: _34.QueryDelegateKeysByValidatorAddressResponseAmino): _34.QueryDelegateKeysByValidatorAddressResponse;
                toAmino(message: _34.QueryDelegateKeysByValidatorAddressResponse): _34.QueryDelegateKeysByValidatorAddressResponseAmino;
                fromAminoMsg(object: _34.QueryDelegateKeysByValidatorAddressResponseAminoMsg): _34.QueryDelegateKeysByValidatorAddressResponse;
                fromProtoMsg(message: _34.QueryDelegateKeysByValidatorAddressResponseProtoMsg): _34.QueryDelegateKeysByValidatorAddressResponse;
                toProto(message: _34.QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDelegateKeysByValidatorAddressResponse): _34.QueryDelegateKeysByValidatorAddressResponseProtoMsg;
            };
            QueryDelegateKeysByEthAddress: {
                typeUrl: string;
                encode(message: _34.QueryDelegateKeysByEthAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegateKeysByEthAddress;
                fromPartial(object: Partial<_34.QueryDelegateKeysByEthAddress>): _34.QueryDelegateKeysByEthAddress;
                fromAmino(object: _34.QueryDelegateKeysByEthAddressAmino): _34.QueryDelegateKeysByEthAddress;
                toAmino(message: _34.QueryDelegateKeysByEthAddress): _34.QueryDelegateKeysByEthAddressAmino;
                fromAminoMsg(object: _34.QueryDelegateKeysByEthAddressAminoMsg): _34.QueryDelegateKeysByEthAddress;
                fromProtoMsg(message: _34.QueryDelegateKeysByEthAddressProtoMsg): _34.QueryDelegateKeysByEthAddress;
                toProto(message: _34.QueryDelegateKeysByEthAddress): Uint8Array;
                toProtoMsg(message: _34.QueryDelegateKeysByEthAddress): _34.QueryDelegateKeysByEthAddressProtoMsg;
            };
            QueryDelegateKeysByEthAddressResponse: {
                typeUrl: string;
                encode(message: _34.QueryDelegateKeysByEthAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegateKeysByEthAddressResponse;
                fromPartial(object: Partial<_34.QueryDelegateKeysByEthAddressResponse>): _34.QueryDelegateKeysByEthAddressResponse;
                fromAmino(object: _34.QueryDelegateKeysByEthAddressResponseAmino): _34.QueryDelegateKeysByEthAddressResponse;
                toAmino(message: _34.QueryDelegateKeysByEthAddressResponse): _34.QueryDelegateKeysByEthAddressResponseAmino;
                fromAminoMsg(object: _34.QueryDelegateKeysByEthAddressResponseAminoMsg): _34.QueryDelegateKeysByEthAddressResponse;
                fromProtoMsg(message: _34.QueryDelegateKeysByEthAddressResponseProtoMsg): _34.QueryDelegateKeysByEthAddressResponse;
                toProto(message: _34.QueryDelegateKeysByEthAddressResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDelegateKeysByEthAddressResponse): _34.QueryDelegateKeysByEthAddressResponseProtoMsg;
            };
            QueryDelegateKeysByOrchestratorAddress: {
                typeUrl: string;
                encode(message: _34.QueryDelegateKeysByOrchestratorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegateKeysByOrchestratorAddress;
                fromPartial(object: Partial<_34.QueryDelegateKeysByOrchestratorAddress>): _34.QueryDelegateKeysByOrchestratorAddress;
                fromAmino(object: _34.QueryDelegateKeysByOrchestratorAddressAmino): _34.QueryDelegateKeysByOrchestratorAddress;
                toAmino(message: _34.QueryDelegateKeysByOrchestratorAddress): _34.QueryDelegateKeysByOrchestratorAddressAmino;
                fromAminoMsg(object: _34.QueryDelegateKeysByOrchestratorAddressAminoMsg): _34.QueryDelegateKeysByOrchestratorAddress;
                fromProtoMsg(message: _34.QueryDelegateKeysByOrchestratorAddressProtoMsg): _34.QueryDelegateKeysByOrchestratorAddress;
                toProto(message: _34.QueryDelegateKeysByOrchestratorAddress): Uint8Array;
                toProtoMsg(message: _34.QueryDelegateKeysByOrchestratorAddress): _34.QueryDelegateKeysByOrchestratorAddressProtoMsg;
            };
            QueryDelegateKeysByOrchestratorAddressResponse: {
                typeUrl: string;
                encode(message: _34.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryDelegateKeysByOrchestratorAddressResponse;
                fromPartial(object: Partial<_34.QueryDelegateKeysByOrchestratorAddressResponse>): _34.QueryDelegateKeysByOrchestratorAddressResponse;
                fromAmino(object: _34.QueryDelegateKeysByOrchestratorAddressResponseAmino): _34.QueryDelegateKeysByOrchestratorAddressResponse;
                toAmino(message: _34.QueryDelegateKeysByOrchestratorAddressResponse): _34.QueryDelegateKeysByOrchestratorAddressResponseAmino;
                fromAminoMsg(object: _34.QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): _34.QueryDelegateKeysByOrchestratorAddressResponse;
                fromProtoMsg(message: _34.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): _34.QueryDelegateKeysByOrchestratorAddressResponse;
                toProto(message: _34.QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
                toProtoMsg(message: _34.QueryDelegateKeysByOrchestratorAddressResponse): _34.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
            };
            QueryPendingSendToEth: {
                typeUrl: string;
                encode(message: _34.QueryPendingSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryPendingSendToEth;
                fromPartial(object: Partial<_34.QueryPendingSendToEth>): _34.QueryPendingSendToEth;
                fromAmino(object: _34.QueryPendingSendToEthAmino): _34.QueryPendingSendToEth;
                toAmino(message: _34.QueryPendingSendToEth): _34.QueryPendingSendToEthAmino;
                fromAminoMsg(object: _34.QueryPendingSendToEthAminoMsg): _34.QueryPendingSendToEth;
                fromProtoMsg(message: _34.QueryPendingSendToEthProtoMsg): _34.QueryPendingSendToEth;
                toProto(message: _34.QueryPendingSendToEth): Uint8Array;
                toProtoMsg(message: _34.QueryPendingSendToEth): _34.QueryPendingSendToEthProtoMsg;
            };
            QueryPendingSendToEthResponse: {
                typeUrl: string;
                encode(message: _34.QueryPendingSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryPendingSendToEthResponse;
                fromPartial(object: Partial<_34.QueryPendingSendToEthResponse>): _34.QueryPendingSendToEthResponse;
                fromAmino(object: _34.QueryPendingSendToEthResponseAmino): _34.QueryPendingSendToEthResponse;
                toAmino(message: _34.QueryPendingSendToEthResponse): _34.QueryPendingSendToEthResponseAmino;
                fromAminoMsg(object: _34.QueryPendingSendToEthResponseAminoMsg): _34.QueryPendingSendToEthResponse;
                fromProtoMsg(message: _34.QueryPendingSendToEthResponseProtoMsg): _34.QueryPendingSendToEthResponse;
                toProto(message: _34.QueryPendingSendToEthResponse): Uint8Array;
                toProtoMsg(message: _34.QueryPendingSendToEthResponse): _34.QueryPendingSendToEthResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _34.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.QueryModuleStateRequest;
                fromPartial(_: Partial<_34.QueryModuleStateRequest>): _34.QueryModuleStateRequest;
                fromAmino(_: _34.QueryModuleStateRequestAmino): _34.QueryModuleStateRequest;
                toAmino(_: _34.QueryModuleStateRequest): _34.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _34.QueryModuleStateRequestAminoMsg): _34.QueryModuleStateRequest;
                fromProtoMsg(message: _34.QueryModuleStateRequestProtoMsg): _34.QueryModuleStateRequest;
                toProto(message: _34.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _34.QueryModuleStateRequest): _34.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _34.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.QueryModuleStateResponse;
                fromPartial(object: Partial<_34.QueryModuleStateResponse>): _34.QueryModuleStateResponse;
                fromAmino(object: _34.QueryModuleStateResponseAmino): _34.QueryModuleStateResponse;
                toAmino(message: _34.QueryModuleStateResponse): _34.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _34.QueryModuleStateResponseAminoMsg): _34.QueryModuleStateResponse;
                fromProtoMsg(message: _34.QueryModuleStateResponseProtoMsg): _34.QueryModuleStateResponse;
                toProto(message: _34.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _34.QueryModuleStateResponse): _34.QueryModuleStateResponseProtoMsg;
            };
            MissingNoncesRequest: {
                typeUrl: string;
                encode(_: _34.MissingNoncesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _34.MissingNoncesRequest;
                fromPartial(_: Partial<_34.MissingNoncesRequest>): _34.MissingNoncesRequest;
                fromAmino(_: _34.MissingNoncesRequestAmino): _34.MissingNoncesRequest;
                toAmino(_: _34.MissingNoncesRequest): _34.MissingNoncesRequestAmino;
                fromAminoMsg(object: _34.MissingNoncesRequestAminoMsg): _34.MissingNoncesRequest;
                fromProtoMsg(message: _34.MissingNoncesRequestProtoMsg): _34.MissingNoncesRequest;
                toProto(message: _34.MissingNoncesRequest): Uint8Array;
                toProtoMsg(message: _34.MissingNoncesRequest): _34.MissingNoncesRequestProtoMsg;
            };
            MissingNoncesResponse: {
                typeUrl: string;
                encode(message: _34.MissingNoncesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.MissingNoncesResponse;
                fromPartial(object: Partial<_34.MissingNoncesResponse>): _34.MissingNoncesResponse;
                fromAmino(object: _34.MissingNoncesResponseAmino): _34.MissingNoncesResponse;
                toAmino(message: _34.MissingNoncesResponse): _34.MissingNoncesResponseAmino;
                fromAminoMsg(object: _34.MissingNoncesResponseAminoMsg): _34.MissingNoncesResponse;
                fromProtoMsg(message: _34.MissingNoncesResponseProtoMsg): _34.MissingNoncesResponse;
                toProto(message: _34.MissingNoncesResponse): Uint8Array;
                toProtoMsg(message: _34.MissingNoncesResponse): _34.MissingNoncesResponseProtoMsg;
            };
            BlacklistEthereumAddressesProposal: {
                typeUrl: string;
                encode(message: _33.BlacklistEthereumAddressesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.BlacklistEthereumAddressesProposal;
                fromPartial(object: Partial<_33.BlacklistEthereumAddressesProposal>): _33.BlacklistEthereumAddressesProposal;
                fromAmino(object: _33.BlacklistEthereumAddressesProposalAmino): _33.BlacklistEthereumAddressesProposal;
                toAmino(message: _33.BlacklistEthereumAddressesProposal): _33.BlacklistEthereumAddressesProposalAmino;
                fromAminoMsg(object: _33.BlacklistEthereumAddressesProposalAminoMsg): _33.BlacklistEthereumAddressesProposal;
                fromProtoMsg(message: _33.BlacklistEthereumAddressesProposalProtoMsg): _33.BlacklistEthereumAddressesProposal;
                toProto(message: _33.BlacklistEthereumAddressesProposal): Uint8Array;
                toProtoMsg(message: _33.BlacklistEthereumAddressesProposal): _33.BlacklistEthereumAddressesProposalProtoMsg;
            };
            RevokeEthereumBlacklistProposal: {
                typeUrl: string;
                encode(message: _33.RevokeEthereumBlacklistProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.RevokeEthereumBlacklistProposal;
                fromPartial(object: Partial<_33.RevokeEthereumBlacklistProposal>): _33.RevokeEthereumBlacklistProposal;
                fromAmino(object: _33.RevokeEthereumBlacklistProposalAmino): _33.RevokeEthereumBlacklistProposal;
                toAmino(message: _33.RevokeEthereumBlacklistProposal): _33.RevokeEthereumBlacklistProposalAmino;
                fromAminoMsg(object: _33.RevokeEthereumBlacklistProposalAminoMsg): _33.RevokeEthereumBlacklistProposal;
                fromProtoMsg(message: _33.RevokeEthereumBlacklistProposalProtoMsg): _33.RevokeEthereumBlacklistProposal;
                toProto(message: _33.RevokeEthereumBlacklistProposal): Uint8Array;
                toProtoMsg(message: _33.RevokeEthereumBlacklistProposal): _33.RevokeEthereumBlacklistProposalProtoMsg;
            };
            IDSet: {
                typeUrl: string;
                encode(message: _32.IDSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.IDSet;
                fromPartial(object: Partial<_32.IDSet>): _32.IDSet;
                fromAmino(object: _32.IDSetAmino): _32.IDSet;
                toAmino(message: _32.IDSet): _32.IDSetAmino;
                fromAminoMsg(object: _32.IDSetAminoMsg): _32.IDSet;
                fromProtoMsg(message: _32.IDSetProtoMsg): _32.IDSet;
                toProto(message: _32.IDSet): Uint8Array;
                toProtoMsg(message: _32.IDSet): _32.IDSetProtoMsg;
            };
            BatchFees: {
                typeUrl: string;
                encode(message: _32.BatchFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.BatchFees;
                fromPartial(object: Partial<_32.BatchFees>): _32.BatchFees;
                fromAmino(object: _32.BatchFeesAmino): _32.BatchFees;
                toAmino(message: _32.BatchFees): _32.BatchFeesAmino;
                fromAminoMsg(object: _32.BatchFeesAminoMsg): _32.BatchFees;
                fromProtoMsg(message: _32.BatchFeesProtoMsg): _32.BatchFees;
                toProto(message: _32.BatchFees): Uint8Array;
                toProtoMsg(message: _32.BatchFees): _32.BatchFeesProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _31.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Params;
                fromPartial(object: Partial<_31.Params>): _31.Params;
                fromAmino(object: _31.ParamsAmino): _31.Params;
                toAmino(message: _31.Params): _31.ParamsAmino;
                fromAminoMsg(object: _31.ParamsAminoMsg): _31.Params;
                fromProtoMsg(message: _31.ParamsProtoMsg): _31.Params;
                toProto(message: _31.Params): Uint8Array;
                toProtoMsg(message: _31.Params): _31.ParamsProtoMsg;
            };
            MsgSetOrchestratorAddresses: {
                typeUrl: string;
                encode(message: _30.MsgSetOrchestratorAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgSetOrchestratorAddresses;
                fromPartial(object: Partial<_30.MsgSetOrchestratorAddresses>): _30.MsgSetOrchestratorAddresses;
                fromAmino(object: _30.MsgSetOrchestratorAddressesAmino): _30.MsgSetOrchestratorAddresses;
                toAmino(message: _30.MsgSetOrchestratorAddresses): _30.MsgSetOrchestratorAddressesAmino;
                fromAminoMsg(object: _30.MsgSetOrchestratorAddressesAminoMsg): _30.MsgSetOrchestratorAddresses;
                fromProtoMsg(message: _30.MsgSetOrchestratorAddressesProtoMsg): _30.MsgSetOrchestratorAddresses;
                toProto(message: _30.MsgSetOrchestratorAddresses): Uint8Array;
                toProtoMsg(message: _30.MsgSetOrchestratorAddresses): _30.MsgSetOrchestratorAddressesProtoMsg;
            };
            MsgSetOrchestratorAddressesResponse: {
                typeUrl: string;
                encode(_: _30.MsgSetOrchestratorAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgSetOrchestratorAddressesResponse;
                fromPartial(_: Partial<_30.MsgSetOrchestratorAddressesResponse>): _30.MsgSetOrchestratorAddressesResponse;
                fromAmino(_: _30.MsgSetOrchestratorAddressesResponseAmino): _30.MsgSetOrchestratorAddressesResponse;
                toAmino(_: _30.MsgSetOrchestratorAddressesResponse): _30.MsgSetOrchestratorAddressesResponseAmino;
                fromAminoMsg(object: _30.MsgSetOrchestratorAddressesResponseAminoMsg): _30.MsgSetOrchestratorAddressesResponse;
                fromProtoMsg(message: _30.MsgSetOrchestratorAddressesResponseProtoMsg): _30.MsgSetOrchestratorAddressesResponse;
                toProto(message: _30.MsgSetOrchestratorAddressesResponse): Uint8Array;
                toProtoMsg(message: _30.MsgSetOrchestratorAddressesResponse): _30.MsgSetOrchestratorAddressesResponseProtoMsg;
            };
            MsgValsetConfirm: {
                typeUrl: string;
                encode(message: _30.MsgValsetConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgValsetConfirm;
                fromPartial(object: Partial<_30.MsgValsetConfirm>): _30.MsgValsetConfirm;
                fromAmino(object: _30.MsgValsetConfirmAmino): _30.MsgValsetConfirm;
                toAmino(message: _30.MsgValsetConfirm): _30.MsgValsetConfirmAmino;
                fromAminoMsg(object: _30.MsgValsetConfirmAminoMsg): _30.MsgValsetConfirm;
                fromProtoMsg(message: _30.MsgValsetConfirmProtoMsg): _30.MsgValsetConfirm;
                toProto(message: _30.MsgValsetConfirm): Uint8Array;
                toProtoMsg(message: _30.MsgValsetConfirm): _30.MsgValsetConfirmProtoMsg;
            };
            MsgValsetConfirmResponse: {
                typeUrl: string;
                encode(_: _30.MsgValsetConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgValsetConfirmResponse;
                fromPartial(_: Partial<_30.MsgValsetConfirmResponse>): _30.MsgValsetConfirmResponse;
                fromAmino(_: _30.MsgValsetConfirmResponseAmino): _30.MsgValsetConfirmResponse;
                toAmino(_: _30.MsgValsetConfirmResponse): _30.MsgValsetConfirmResponseAmino;
                fromAminoMsg(object: _30.MsgValsetConfirmResponseAminoMsg): _30.MsgValsetConfirmResponse;
                fromProtoMsg(message: _30.MsgValsetConfirmResponseProtoMsg): _30.MsgValsetConfirmResponse;
                toProto(message: _30.MsgValsetConfirmResponse): Uint8Array;
                toProtoMsg(message: _30.MsgValsetConfirmResponse): _30.MsgValsetConfirmResponseProtoMsg;
            };
            MsgSendToEth: {
                typeUrl: string;
                encode(message: _30.MsgSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgSendToEth;
                fromPartial(object: Partial<_30.MsgSendToEth>): _30.MsgSendToEth;
                fromAmino(object: _30.MsgSendToEthAmino): _30.MsgSendToEth;
                toAmino(message: _30.MsgSendToEth): _30.MsgSendToEthAmino;
                fromAminoMsg(object: _30.MsgSendToEthAminoMsg): _30.MsgSendToEth;
                fromProtoMsg(message: _30.MsgSendToEthProtoMsg): _30.MsgSendToEth;
                toProto(message: _30.MsgSendToEth): Uint8Array;
                toProtoMsg(message: _30.MsgSendToEth): _30.MsgSendToEthProtoMsg;
            };
            MsgSendToEthResponse: {
                typeUrl: string;
                encode(_: _30.MsgSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgSendToEthResponse;
                fromPartial(_: Partial<_30.MsgSendToEthResponse>): _30.MsgSendToEthResponse;
                fromAmino(_: _30.MsgSendToEthResponseAmino): _30.MsgSendToEthResponse;
                toAmino(_: _30.MsgSendToEthResponse): _30.MsgSendToEthResponseAmino;
                fromAminoMsg(object: _30.MsgSendToEthResponseAminoMsg): _30.MsgSendToEthResponse;
                fromProtoMsg(message: _30.MsgSendToEthResponseProtoMsg): _30.MsgSendToEthResponse;
                toProto(message: _30.MsgSendToEthResponse): Uint8Array;
                toProtoMsg(message: _30.MsgSendToEthResponse): _30.MsgSendToEthResponseProtoMsg;
            };
            MsgRequestBatch: {
                typeUrl: string;
                encode(message: _30.MsgRequestBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgRequestBatch;
                fromPartial(object: Partial<_30.MsgRequestBatch>): _30.MsgRequestBatch;
                fromAmino(object: _30.MsgRequestBatchAmino): _30.MsgRequestBatch;
                toAmino(message: _30.MsgRequestBatch): _30.MsgRequestBatchAmino;
                fromAminoMsg(object: _30.MsgRequestBatchAminoMsg): _30.MsgRequestBatch;
                fromProtoMsg(message: _30.MsgRequestBatchProtoMsg): _30.MsgRequestBatch;
                toProto(message: _30.MsgRequestBatch): Uint8Array;
                toProtoMsg(message: _30.MsgRequestBatch): _30.MsgRequestBatchProtoMsg;
            };
            MsgRequestBatchResponse: {
                typeUrl: string;
                encode(_: _30.MsgRequestBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgRequestBatchResponse;
                fromPartial(_: Partial<_30.MsgRequestBatchResponse>): _30.MsgRequestBatchResponse;
                fromAmino(_: _30.MsgRequestBatchResponseAmino): _30.MsgRequestBatchResponse;
                toAmino(_: _30.MsgRequestBatchResponse): _30.MsgRequestBatchResponseAmino;
                fromAminoMsg(object: _30.MsgRequestBatchResponseAminoMsg): _30.MsgRequestBatchResponse;
                fromProtoMsg(message: _30.MsgRequestBatchResponseProtoMsg): _30.MsgRequestBatchResponse;
                toProto(message: _30.MsgRequestBatchResponse): Uint8Array;
                toProtoMsg(message: _30.MsgRequestBatchResponse): _30.MsgRequestBatchResponseProtoMsg;
            };
            MsgConfirmBatch: {
                typeUrl: string;
                encode(message: _30.MsgConfirmBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgConfirmBatch;
                fromPartial(object: Partial<_30.MsgConfirmBatch>): _30.MsgConfirmBatch;
                fromAmino(object: _30.MsgConfirmBatchAmino): _30.MsgConfirmBatch;
                toAmino(message: _30.MsgConfirmBatch): _30.MsgConfirmBatchAmino;
                fromAminoMsg(object: _30.MsgConfirmBatchAminoMsg): _30.MsgConfirmBatch;
                fromProtoMsg(message: _30.MsgConfirmBatchProtoMsg): _30.MsgConfirmBatch;
                toProto(message: _30.MsgConfirmBatch): Uint8Array;
                toProtoMsg(message: _30.MsgConfirmBatch): _30.MsgConfirmBatchProtoMsg;
            };
            MsgConfirmBatchResponse: {
                typeUrl: string;
                encode(_: _30.MsgConfirmBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgConfirmBatchResponse;
                fromPartial(_: Partial<_30.MsgConfirmBatchResponse>): _30.MsgConfirmBatchResponse;
                fromAmino(_: _30.MsgConfirmBatchResponseAmino): _30.MsgConfirmBatchResponse;
                toAmino(_: _30.MsgConfirmBatchResponse): _30.MsgConfirmBatchResponseAmino;
                fromAminoMsg(object: _30.MsgConfirmBatchResponseAminoMsg): _30.MsgConfirmBatchResponse;
                fromProtoMsg(message: _30.MsgConfirmBatchResponseProtoMsg): _30.MsgConfirmBatchResponse;
                toProto(message: _30.MsgConfirmBatchResponse): Uint8Array;
                toProtoMsg(message: _30.MsgConfirmBatchResponse): _30.MsgConfirmBatchResponseProtoMsg;
            };
            MsgDepositClaim: {
                typeUrl: string;
                encode(message: _30.MsgDepositClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgDepositClaim;
                fromPartial(object: Partial<_30.MsgDepositClaim>): _30.MsgDepositClaim;
                fromAmino(object: _30.MsgDepositClaimAmino): _30.MsgDepositClaim;
                toAmino(message: _30.MsgDepositClaim): _30.MsgDepositClaimAmino;
                fromAminoMsg(object: _30.MsgDepositClaimAminoMsg): _30.MsgDepositClaim;
                fromProtoMsg(message: _30.MsgDepositClaimProtoMsg): _30.MsgDepositClaim;
                toProto(message: _30.MsgDepositClaim): Uint8Array;
                toProtoMsg(message: _30.MsgDepositClaim): _30.MsgDepositClaimProtoMsg;
            };
            MsgDepositClaimResponse: {
                typeUrl: string;
                encode(_: _30.MsgDepositClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgDepositClaimResponse;
                fromPartial(_: Partial<_30.MsgDepositClaimResponse>): _30.MsgDepositClaimResponse;
                fromAmino(_: _30.MsgDepositClaimResponseAmino): _30.MsgDepositClaimResponse;
                toAmino(_: _30.MsgDepositClaimResponse): _30.MsgDepositClaimResponseAmino;
                fromAminoMsg(object: _30.MsgDepositClaimResponseAminoMsg): _30.MsgDepositClaimResponse;
                fromProtoMsg(message: _30.MsgDepositClaimResponseProtoMsg): _30.MsgDepositClaimResponse;
                toProto(message: _30.MsgDepositClaimResponse): Uint8Array;
                toProtoMsg(message: _30.MsgDepositClaimResponse): _30.MsgDepositClaimResponseProtoMsg;
            };
            MsgWithdrawClaim: {
                typeUrl: string;
                encode(message: _30.MsgWithdrawClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgWithdrawClaim;
                fromPartial(object: Partial<_30.MsgWithdrawClaim>): _30.MsgWithdrawClaim;
                fromAmino(object: _30.MsgWithdrawClaimAmino): _30.MsgWithdrawClaim;
                toAmino(message: _30.MsgWithdrawClaim): _30.MsgWithdrawClaimAmino;
                fromAminoMsg(object: _30.MsgWithdrawClaimAminoMsg): _30.MsgWithdrawClaim;
                fromProtoMsg(message: _30.MsgWithdrawClaimProtoMsg): _30.MsgWithdrawClaim;
                toProto(message: _30.MsgWithdrawClaim): Uint8Array;
                toProtoMsg(message: _30.MsgWithdrawClaim): _30.MsgWithdrawClaimProtoMsg;
            };
            MsgWithdrawClaimResponse: {
                typeUrl: string;
                encode(_: _30.MsgWithdrawClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgWithdrawClaimResponse;
                fromPartial(_: Partial<_30.MsgWithdrawClaimResponse>): _30.MsgWithdrawClaimResponse;
                fromAmino(_: _30.MsgWithdrawClaimResponseAmino): _30.MsgWithdrawClaimResponse;
                toAmino(_: _30.MsgWithdrawClaimResponse): _30.MsgWithdrawClaimResponseAmino;
                fromAminoMsg(object: _30.MsgWithdrawClaimResponseAminoMsg): _30.MsgWithdrawClaimResponse;
                fromProtoMsg(message: _30.MsgWithdrawClaimResponseProtoMsg): _30.MsgWithdrawClaimResponse;
                toProto(message: _30.MsgWithdrawClaimResponse): Uint8Array;
                toProtoMsg(message: _30.MsgWithdrawClaimResponse): _30.MsgWithdrawClaimResponseProtoMsg;
            };
            MsgERC20DeployedClaim: {
                typeUrl: string;
                encode(message: _30.MsgERC20DeployedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgERC20DeployedClaim;
                fromPartial(object: Partial<_30.MsgERC20DeployedClaim>): _30.MsgERC20DeployedClaim;
                fromAmino(object: _30.MsgERC20DeployedClaimAmino): _30.MsgERC20DeployedClaim;
                toAmino(message: _30.MsgERC20DeployedClaim): _30.MsgERC20DeployedClaimAmino;
                fromAminoMsg(object: _30.MsgERC20DeployedClaimAminoMsg): _30.MsgERC20DeployedClaim;
                fromProtoMsg(message: _30.MsgERC20DeployedClaimProtoMsg): _30.MsgERC20DeployedClaim;
                toProto(message: _30.MsgERC20DeployedClaim): Uint8Array;
                toProtoMsg(message: _30.MsgERC20DeployedClaim): _30.MsgERC20DeployedClaimProtoMsg;
            };
            MsgERC20DeployedClaimResponse: {
                typeUrl: string;
                encode(_: _30.MsgERC20DeployedClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgERC20DeployedClaimResponse;
                fromPartial(_: Partial<_30.MsgERC20DeployedClaimResponse>): _30.MsgERC20DeployedClaimResponse;
                fromAmino(_: _30.MsgERC20DeployedClaimResponseAmino): _30.MsgERC20DeployedClaimResponse;
                toAmino(_: _30.MsgERC20DeployedClaimResponse): _30.MsgERC20DeployedClaimResponseAmino;
                fromAminoMsg(object: _30.MsgERC20DeployedClaimResponseAminoMsg): _30.MsgERC20DeployedClaimResponse;
                fromProtoMsg(message: _30.MsgERC20DeployedClaimResponseProtoMsg): _30.MsgERC20DeployedClaimResponse;
                toProto(message: _30.MsgERC20DeployedClaimResponse): Uint8Array;
                toProtoMsg(message: _30.MsgERC20DeployedClaimResponse): _30.MsgERC20DeployedClaimResponseProtoMsg;
            };
            MsgCancelSendToEth: {
                typeUrl: string;
                encode(message: _30.MsgCancelSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgCancelSendToEth;
                fromPartial(object: Partial<_30.MsgCancelSendToEth>): _30.MsgCancelSendToEth;
                fromAmino(object: _30.MsgCancelSendToEthAmino): _30.MsgCancelSendToEth;
                toAmino(message: _30.MsgCancelSendToEth): _30.MsgCancelSendToEthAmino;
                fromAminoMsg(object: _30.MsgCancelSendToEthAminoMsg): _30.MsgCancelSendToEth;
                fromProtoMsg(message: _30.MsgCancelSendToEthProtoMsg): _30.MsgCancelSendToEth;
                toProto(message: _30.MsgCancelSendToEth): Uint8Array;
                toProtoMsg(message: _30.MsgCancelSendToEth): _30.MsgCancelSendToEthProtoMsg;
            };
            MsgCancelSendToEthResponse: {
                typeUrl: string;
                encode(_: _30.MsgCancelSendToEthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgCancelSendToEthResponse;
                fromPartial(_: Partial<_30.MsgCancelSendToEthResponse>): _30.MsgCancelSendToEthResponse;
                fromAmino(_: _30.MsgCancelSendToEthResponseAmino): _30.MsgCancelSendToEthResponse;
                toAmino(_: _30.MsgCancelSendToEthResponse): _30.MsgCancelSendToEthResponseAmino;
                fromAminoMsg(object: _30.MsgCancelSendToEthResponseAminoMsg): _30.MsgCancelSendToEthResponse;
                fromProtoMsg(message: _30.MsgCancelSendToEthResponseProtoMsg): _30.MsgCancelSendToEthResponse;
                toProto(message: _30.MsgCancelSendToEthResponse): Uint8Array;
                toProtoMsg(message: _30.MsgCancelSendToEthResponse): _30.MsgCancelSendToEthResponseProtoMsg;
            };
            MsgSubmitBadSignatureEvidence: {
                typeUrl: string;
                encode(message: _30.MsgSubmitBadSignatureEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgSubmitBadSignatureEvidence;
                fromPartial(object: Partial<_30.MsgSubmitBadSignatureEvidence>): _30.MsgSubmitBadSignatureEvidence;
                fromAmino(object: _30.MsgSubmitBadSignatureEvidenceAmino): _30.MsgSubmitBadSignatureEvidence;
                toAmino(message: _30.MsgSubmitBadSignatureEvidence): _30.MsgSubmitBadSignatureEvidenceAmino;
                fromAminoMsg(object: _30.MsgSubmitBadSignatureEvidenceAminoMsg): _30.MsgSubmitBadSignatureEvidence;
                fromProtoMsg(message: _30.MsgSubmitBadSignatureEvidenceProtoMsg): _30.MsgSubmitBadSignatureEvidence;
                toProto(message: _30.MsgSubmitBadSignatureEvidence): Uint8Array;
                toProtoMsg(message: _30.MsgSubmitBadSignatureEvidence): _30.MsgSubmitBadSignatureEvidenceProtoMsg;
            };
            MsgSubmitBadSignatureEvidenceResponse: {
                typeUrl: string;
                encode(_: _30.MsgSubmitBadSignatureEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgSubmitBadSignatureEvidenceResponse;
                fromPartial(_: Partial<_30.MsgSubmitBadSignatureEvidenceResponse>): _30.MsgSubmitBadSignatureEvidenceResponse;
                fromAmino(_: _30.MsgSubmitBadSignatureEvidenceResponseAmino): _30.MsgSubmitBadSignatureEvidenceResponse;
                toAmino(_: _30.MsgSubmitBadSignatureEvidenceResponse): _30.MsgSubmitBadSignatureEvidenceResponseAmino;
                fromAminoMsg(object: _30.MsgSubmitBadSignatureEvidenceResponseAminoMsg): _30.MsgSubmitBadSignatureEvidenceResponse;
                fromProtoMsg(message: _30.MsgSubmitBadSignatureEvidenceResponseProtoMsg): _30.MsgSubmitBadSignatureEvidenceResponse;
                toProto(message: _30.MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
                toProtoMsg(message: _30.MsgSubmitBadSignatureEvidenceResponse): _30.MsgSubmitBadSignatureEvidenceResponseProtoMsg;
            };
            MsgValsetUpdatedClaim: {
                typeUrl: string;
                encode(message: _30.MsgValsetUpdatedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgValsetUpdatedClaim;
                fromPartial(object: Partial<_30.MsgValsetUpdatedClaim>): _30.MsgValsetUpdatedClaim;
                fromAmino(object: _30.MsgValsetUpdatedClaimAmino): _30.MsgValsetUpdatedClaim;
                toAmino(message: _30.MsgValsetUpdatedClaim): _30.MsgValsetUpdatedClaimAmino;
                fromAminoMsg(object: _30.MsgValsetUpdatedClaimAminoMsg): _30.MsgValsetUpdatedClaim;
                fromProtoMsg(message: _30.MsgValsetUpdatedClaimProtoMsg): _30.MsgValsetUpdatedClaim;
                toProto(message: _30.MsgValsetUpdatedClaim): Uint8Array;
                toProtoMsg(message: _30.MsgValsetUpdatedClaim): _30.MsgValsetUpdatedClaimProtoMsg;
            };
            MsgValsetUpdatedClaimResponse: {
                typeUrl: string;
                encode(_: _30.MsgValsetUpdatedClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgValsetUpdatedClaimResponse;
                fromPartial(_: Partial<_30.MsgValsetUpdatedClaimResponse>): _30.MsgValsetUpdatedClaimResponse;
                fromAmino(_: _30.MsgValsetUpdatedClaimResponseAmino): _30.MsgValsetUpdatedClaimResponse;
                toAmino(_: _30.MsgValsetUpdatedClaimResponse): _30.MsgValsetUpdatedClaimResponseAmino;
                fromAminoMsg(object: _30.MsgValsetUpdatedClaimResponseAminoMsg): _30.MsgValsetUpdatedClaimResponse;
                fromProtoMsg(message: _30.MsgValsetUpdatedClaimResponseProtoMsg): _30.MsgValsetUpdatedClaimResponse;
                toProto(message: _30.MsgValsetUpdatedClaimResponse): Uint8Array;
                toProtoMsg(message: _30.MsgValsetUpdatedClaimResponse): _30.MsgValsetUpdatedClaimResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _30.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.MsgUpdateParams;
                fromPartial(object: Partial<_30.MsgUpdateParams>): _30.MsgUpdateParams;
                fromAmino(object: _30.MsgUpdateParamsAmino): _30.MsgUpdateParams;
                toAmino(message: _30.MsgUpdateParams): _30.MsgUpdateParamsAmino;
                fromAminoMsg(object: _30.MsgUpdateParamsAminoMsg): _30.MsgUpdateParams;
                fromProtoMsg(message: _30.MsgUpdateParamsProtoMsg): _30.MsgUpdateParams;
                toProto(message: _30.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _30.MsgUpdateParams): _30.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _30.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _30.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_30.MsgUpdateParamsResponse>): _30.MsgUpdateParamsResponse;
                fromAmino(_: _30.MsgUpdateParamsResponseAmino): _30.MsgUpdateParamsResponse;
                toAmino(_: _30.MsgUpdateParamsResponse): _30.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _30.MsgUpdateParamsResponseAminoMsg): _30.MsgUpdateParamsResponse;
                fromProtoMsg(message: _30.MsgUpdateParamsResponseProtoMsg): _30.MsgUpdateParamsResponse;
                toProto(message: _30.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _30.MsgUpdateParamsResponse): _30.MsgUpdateParamsResponseProtoMsg;
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
            EventAttestationObserved: {
                typeUrl: string;
                encode(message: _28.EventAttestationObserved, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventAttestationObserved;
                fromPartial(object: Partial<_28.EventAttestationObserved>): _28.EventAttestationObserved;
                fromAmino(object: _28.EventAttestationObservedAmino): _28.EventAttestationObserved;
                toAmino(message: _28.EventAttestationObserved): _28.EventAttestationObservedAmino;
                fromAminoMsg(object: _28.EventAttestationObservedAminoMsg): _28.EventAttestationObserved;
                fromProtoMsg(message: _28.EventAttestationObservedProtoMsg): _28.EventAttestationObserved;
                toProto(message: _28.EventAttestationObserved): Uint8Array;
                toProtoMsg(message: _28.EventAttestationObserved): _28.EventAttestationObservedProtoMsg;
            };
            EventBridgeWithdrawCanceled: {
                typeUrl: string;
                encode(message: _28.EventBridgeWithdrawCanceled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventBridgeWithdrawCanceled;
                fromPartial(object: Partial<_28.EventBridgeWithdrawCanceled>): _28.EventBridgeWithdrawCanceled;
                fromAmino(object: _28.EventBridgeWithdrawCanceledAmino): _28.EventBridgeWithdrawCanceled;
                toAmino(message: _28.EventBridgeWithdrawCanceled): _28.EventBridgeWithdrawCanceledAmino;
                fromAminoMsg(object: _28.EventBridgeWithdrawCanceledAminoMsg): _28.EventBridgeWithdrawCanceled;
                fromProtoMsg(message: _28.EventBridgeWithdrawCanceledProtoMsg): _28.EventBridgeWithdrawCanceled;
                toProto(message: _28.EventBridgeWithdrawCanceled): Uint8Array;
                toProtoMsg(message: _28.EventBridgeWithdrawCanceled): _28.EventBridgeWithdrawCanceledProtoMsg;
            };
            EventOutgoingBatch: {
                typeUrl: string;
                encode(message: _28.EventOutgoingBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventOutgoingBatch;
                fromPartial(object: Partial<_28.EventOutgoingBatch>): _28.EventOutgoingBatch;
                fromAmino(object: _28.EventOutgoingBatchAmino): _28.EventOutgoingBatch;
                toAmino(message: _28.EventOutgoingBatch): _28.EventOutgoingBatchAmino;
                fromAminoMsg(object: _28.EventOutgoingBatchAminoMsg): _28.EventOutgoingBatch;
                fromProtoMsg(message: _28.EventOutgoingBatchProtoMsg): _28.EventOutgoingBatch;
                toProto(message: _28.EventOutgoingBatch): Uint8Array;
                toProtoMsg(message: _28.EventOutgoingBatch): _28.EventOutgoingBatchProtoMsg;
            };
            EventOutgoingBatchCanceled: {
                typeUrl: string;
                encode(message: _28.EventOutgoingBatchCanceled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventOutgoingBatchCanceled;
                fromPartial(object: Partial<_28.EventOutgoingBatchCanceled>): _28.EventOutgoingBatchCanceled;
                fromAmino(object: _28.EventOutgoingBatchCanceledAmino): _28.EventOutgoingBatchCanceled;
                toAmino(message: _28.EventOutgoingBatchCanceled): _28.EventOutgoingBatchCanceledAmino;
                fromAminoMsg(object: _28.EventOutgoingBatchCanceledAminoMsg): _28.EventOutgoingBatchCanceled;
                fromProtoMsg(message: _28.EventOutgoingBatchCanceledProtoMsg): _28.EventOutgoingBatchCanceled;
                toProto(message: _28.EventOutgoingBatchCanceled): Uint8Array;
                toProtoMsg(message: _28.EventOutgoingBatchCanceled): _28.EventOutgoingBatchCanceledProtoMsg;
            };
            EventValsetUpdateRequest: {
                typeUrl: string;
                encode(message: _28.EventValsetUpdateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventValsetUpdateRequest;
                fromPartial(object: Partial<_28.EventValsetUpdateRequest>): _28.EventValsetUpdateRequest;
                fromAmino(object: _28.EventValsetUpdateRequestAmino): _28.EventValsetUpdateRequest;
                toAmino(message: _28.EventValsetUpdateRequest): _28.EventValsetUpdateRequestAmino;
                fromAminoMsg(object: _28.EventValsetUpdateRequestAminoMsg): _28.EventValsetUpdateRequest;
                fromProtoMsg(message: _28.EventValsetUpdateRequestProtoMsg): _28.EventValsetUpdateRequest;
                toProto(message: _28.EventValsetUpdateRequest): Uint8Array;
                toProtoMsg(message: _28.EventValsetUpdateRequest): _28.EventValsetUpdateRequestProtoMsg;
            };
            EventSetOrchestratorAddresses: {
                typeUrl: string;
                encode(message: _28.EventSetOrchestratorAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventSetOrchestratorAddresses;
                fromPartial(object: Partial<_28.EventSetOrchestratorAddresses>): _28.EventSetOrchestratorAddresses;
                fromAmino(object: _28.EventSetOrchestratorAddressesAmino): _28.EventSetOrchestratorAddresses;
                toAmino(message: _28.EventSetOrchestratorAddresses): _28.EventSetOrchestratorAddressesAmino;
                fromAminoMsg(object: _28.EventSetOrchestratorAddressesAminoMsg): _28.EventSetOrchestratorAddresses;
                fromProtoMsg(message: _28.EventSetOrchestratorAddressesProtoMsg): _28.EventSetOrchestratorAddresses;
                toProto(message: _28.EventSetOrchestratorAddresses): Uint8Array;
                toProtoMsg(message: _28.EventSetOrchestratorAddresses): _28.EventSetOrchestratorAddressesProtoMsg;
            };
            EventValsetConfirm: {
                typeUrl: string;
                encode(message: _28.EventValsetConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventValsetConfirm;
                fromPartial(object: Partial<_28.EventValsetConfirm>): _28.EventValsetConfirm;
                fromAmino(object: _28.EventValsetConfirmAmino): _28.EventValsetConfirm;
                toAmino(message: _28.EventValsetConfirm): _28.EventValsetConfirmAmino;
                fromAminoMsg(object: _28.EventValsetConfirmAminoMsg): _28.EventValsetConfirm;
                fromProtoMsg(message: _28.EventValsetConfirmProtoMsg): _28.EventValsetConfirm;
                toProto(message: _28.EventValsetConfirm): Uint8Array;
                toProtoMsg(message: _28.EventValsetConfirm): _28.EventValsetConfirmProtoMsg;
            };
            EventSendToEth: {
                typeUrl: string;
                encode(message: _28.EventSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventSendToEth;
                fromPartial(object: Partial<_28.EventSendToEth>): _28.EventSendToEth;
                fromAmino(object: _28.EventSendToEthAmino): _28.EventSendToEth;
                toAmino(message: _28.EventSendToEth): _28.EventSendToEthAmino;
                fromAminoMsg(object: _28.EventSendToEthAminoMsg): _28.EventSendToEth;
                fromProtoMsg(message: _28.EventSendToEthProtoMsg): _28.EventSendToEth;
                toProto(message: _28.EventSendToEth): Uint8Array;
                toProtoMsg(message: _28.EventSendToEth): _28.EventSendToEthProtoMsg;
            };
            EventConfirmBatch: {
                typeUrl: string;
                encode(message: _28.EventConfirmBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventConfirmBatch;
                fromPartial(object: Partial<_28.EventConfirmBatch>): _28.EventConfirmBatch;
                fromAmino(object: _28.EventConfirmBatchAmino): _28.EventConfirmBatch;
                toAmino(message: _28.EventConfirmBatch): _28.EventConfirmBatchAmino;
                fromAminoMsg(object: _28.EventConfirmBatchAminoMsg): _28.EventConfirmBatch;
                fromProtoMsg(message: _28.EventConfirmBatchProtoMsg): _28.EventConfirmBatch;
                toProto(message: _28.EventConfirmBatch): Uint8Array;
                toProtoMsg(message: _28.EventConfirmBatch): _28.EventConfirmBatchProtoMsg;
            };
            EventAttestationVote: {
                typeUrl: string;
                encode(message: _28.EventAttestationVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventAttestationVote;
                fromPartial(object: Partial<_28.EventAttestationVote>): _28.EventAttestationVote;
                fromAmino(object: _28.EventAttestationVoteAmino): _28.EventAttestationVote;
                toAmino(message: _28.EventAttestationVote): _28.EventAttestationVoteAmino;
                fromAminoMsg(object: _28.EventAttestationVoteAminoMsg): _28.EventAttestationVote;
                fromProtoMsg(message: _28.EventAttestationVoteProtoMsg): _28.EventAttestationVote;
                toProto(message: _28.EventAttestationVote): Uint8Array;
                toProtoMsg(message: _28.EventAttestationVote): _28.EventAttestationVoteProtoMsg;
            };
            EventDepositClaim: {
                typeUrl: string;
                encode(message: _28.EventDepositClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventDepositClaim;
                fromPartial(object: Partial<_28.EventDepositClaim>): _28.EventDepositClaim;
                fromAmino(object: _28.EventDepositClaimAmino): _28.EventDepositClaim;
                toAmino(message: _28.EventDepositClaim): _28.EventDepositClaimAmino;
                fromAminoMsg(object: _28.EventDepositClaimAminoMsg): _28.EventDepositClaim;
                fromProtoMsg(message: _28.EventDepositClaimProtoMsg): _28.EventDepositClaim;
                toProto(message: _28.EventDepositClaim): Uint8Array;
                toProtoMsg(message: _28.EventDepositClaim): _28.EventDepositClaimProtoMsg;
            };
            EventWithdrawClaim: {
                typeUrl: string;
                encode(message: _28.EventWithdrawClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventWithdrawClaim;
                fromPartial(object: Partial<_28.EventWithdrawClaim>): _28.EventWithdrawClaim;
                fromAmino(object: _28.EventWithdrawClaimAmino): _28.EventWithdrawClaim;
                toAmino(message: _28.EventWithdrawClaim): _28.EventWithdrawClaimAmino;
                fromAminoMsg(object: _28.EventWithdrawClaimAminoMsg): _28.EventWithdrawClaim;
                fromProtoMsg(message: _28.EventWithdrawClaimProtoMsg): _28.EventWithdrawClaim;
                toProto(message: _28.EventWithdrawClaim): Uint8Array;
                toProtoMsg(message: _28.EventWithdrawClaim): _28.EventWithdrawClaimProtoMsg;
            };
            EventERC20DeployedClaim: {
                typeUrl: string;
                encode(message: _28.EventERC20DeployedClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventERC20DeployedClaim;
                fromPartial(object: Partial<_28.EventERC20DeployedClaim>): _28.EventERC20DeployedClaim;
                fromAmino(object: _28.EventERC20DeployedClaimAmino): _28.EventERC20DeployedClaim;
                toAmino(message: _28.EventERC20DeployedClaim): _28.EventERC20DeployedClaimAmino;
                fromAminoMsg(object: _28.EventERC20DeployedClaimAminoMsg): _28.EventERC20DeployedClaim;
                fromProtoMsg(message: _28.EventERC20DeployedClaimProtoMsg): _28.EventERC20DeployedClaim;
                toProto(message: _28.EventERC20DeployedClaim): Uint8Array;
                toProtoMsg(message: _28.EventERC20DeployedClaim): _28.EventERC20DeployedClaimProtoMsg;
            };
            EventValsetUpdateClaim: {
                typeUrl: string;
                encode(message: _28.EventValsetUpdateClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventValsetUpdateClaim;
                fromPartial(object: Partial<_28.EventValsetUpdateClaim>): _28.EventValsetUpdateClaim;
                fromAmino(object: _28.EventValsetUpdateClaimAmino): _28.EventValsetUpdateClaim;
                toAmino(message: _28.EventValsetUpdateClaim): _28.EventValsetUpdateClaimAmino;
                fromAminoMsg(object: _28.EventValsetUpdateClaimAminoMsg): _28.EventValsetUpdateClaim;
                fromProtoMsg(message: _28.EventValsetUpdateClaimProtoMsg): _28.EventValsetUpdateClaim;
                toProto(message: _28.EventValsetUpdateClaim): Uint8Array;
                toProtoMsg(message: _28.EventValsetUpdateClaim): _28.EventValsetUpdateClaimProtoMsg;
            };
            EventCancelSendToEth: {
                typeUrl: string;
                encode(message: _28.EventCancelSendToEth, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventCancelSendToEth;
                fromPartial(object: Partial<_28.EventCancelSendToEth>): _28.EventCancelSendToEth;
                fromAmino(object: _28.EventCancelSendToEthAmino): _28.EventCancelSendToEth;
                toAmino(message: _28.EventCancelSendToEth): _28.EventCancelSendToEthAmino;
                fromAminoMsg(object: _28.EventCancelSendToEthAminoMsg): _28.EventCancelSendToEth;
                fromProtoMsg(message: _28.EventCancelSendToEthProtoMsg): _28.EventCancelSendToEth;
                toProto(message: _28.EventCancelSendToEth): Uint8Array;
                toProtoMsg(message: _28.EventCancelSendToEth): _28.EventCancelSendToEthProtoMsg;
            };
            EventSubmitBadSignatureEvidence: {
                typeUrl: string;
                encode(message: _28.EventSubmitBadSignatureEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventSubmitBadSignatureEvidence;
                fromPartial(object: Partial<_28.EventSubmitBadSignatureEvidence>): _28.EventSubmitBadSignatureEvidence;
                fromAmino(object: _28.EventSubmitBadSignatureEvidenceAmino): _28.EventSubmitBadSignatureEvidence;
                toAmino(message: _28.EventSubmitBadSignatureEvidence): _28.EventSubmitBadSignatureEvidenceAmino;
                fromAminoMsg(object: _28.EventSubmitBadSignatureEvidenceAminoMsg): _28.EventSubmitBadSignatureEvidence;
                fromProtoMsg(message: _28.EventSubmitBadSignatureEvidenceProtoMsg): _28.EventSubmitBadSignatureEvidence;
                toProto(message: _28.EventSubmitBadSignatureEvidence): Uint8Array;
                toProtoMsg(message: _28.EventSubmitBadSignatureEvidence): _28.EventSubmitBadSignatureEvidenceProtoMsg;
            };
            EventValidatorSlash: {
                typeUrl: string;
                encode(message: _28.EventValidatorSlash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.EventValidatorSlash;
                fromPartial(object: Partial<_28.EventValidatorSlash>): _28.EventValidatorSlash;
                fromAmino(object: _28.EventValidatorSlashAmino): _28.EventValidatorSlash;
                toAmino(message: _28.EventValidatorSlash): _28.EventValidatorSlashAmino;
                fromAminoMsg(object: _28.EventValidatorSlashAminoMsg): _28.EventValidatorSlash;
                fromProtoMsg(message: _28.EventValidatorSlashProtoMsg): _28.EventValidatorSlash;
                toProto(message: _28.EventValidatorSlash): Uint8Array;
                toProtoMsg(message: _28.EventValidatorSlash): _28.EventValidatorSlashProtoMsg;
            };
            signTypeFromJSON(object: any): _27.SignType;
            signTypeToJSON(object: _27.SignType): string;
            SignType: typeof _27.SignType;
            SignTypeSDKType: typeof _27.SignType;
            SignTypeAmino: typeof _27.SignType;
            OutgoingTxBatch: {
                typeUrl: string;
                encode(message: _26.OutgoingTxBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.OutgoingTxBatch;
                fromPartial(object: Partial<_26.OutgoingTxBatch>): _26.OutgoingTxBatch;
                fromAmino(object: _26.OutgoingTxBatchAmino): _26.OutgoingTxBatch;
                toAmino(message: _26.OutgoingTxBatch): _26.OutgoingTxBatchAmino;
                fromAminoMsg(object: _26.OutgoingTxBatchAminoMsg): _26.OutgoingTxBatch;
                fromProtoMsg(message: _26.OutgoingTxBatchProtoMsg): _26.OutgoingTxBatch;
                toProto(message: _26.OutgoingTxBatch): Uint8Array;
                toProtoMsg(message: _26.OutgoingTxBatch): _26.OutgoingTxBatchProtoMsg;
            };
            OutgoingTransferTx: {
                typeUrl: string;
                encode(message: _26.OutgoingTransferTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.OutgoingTransferTx;
                fromPartial(object: Partial<_26.OutgoingTransferTx>): _26.OutgoingTransferTx;
                fromAmino(object: _26.OutgoingTransferTxAmino): _26.OutgoingTransferTx;
                toAmino(message: _26.OutgoingTransferTx): _26.OutgoingTransferTxAmino;
                fromAminoMsg(object: _26.OutgoingTransferTxAminoMsg): _26.OutgoingTransferTx;
                fromProtoMsg(message: _26.OutgoingTransferTxProtoMsg): _26.OutgoingTransferTx;
                toProto(message: _26.OutgoingTransferTx): Uint8Array;
                toProtoMsg(message: _26.OutgoingTransferTx): _26.OutgoingTransferTxProtoMsg;
            };
            claimTypeFromJSON(object: any): _25.ClaimType;
            claimTypeToJSON(object: _25.ClaimType): string;
            ClaimType: typeof _25.ClaimType;
            ClaimTypeSDKType: typeof _25.ClaimType;
            ClaimTypeAmino: typeof _25.ClaimType;
            Attestation: {
                typeUrl: string;
                encode(message: _25.Attestation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Attestation;
                fromPartial(object: Partial<_25.Attestation>): _25.Attestation;
                fromAmino(object: _25.AttestationAmino): _25.Attestation;
                toAmino(message: _25.Attestation): _25.AttestationAmino;
                fromAminoMsg(object: _25.AttestationAminoMsg): _25.Attestation;
                fromProtoMsg(message: _25.AttestationProtoMsg): _25.Attestation;
                toProto(message: _25.Attestation): Uint8Array;
                toProtoMsg(message: _25.Attestation): _25.AttestationProtoMsg;
            };
            ERC20Token: {
                typeUrl: string;
                encode(message: _25.ERC20Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ERC20Token;
                fromPartial(object: Partial<_25.ERC20Token>): _25.ERC20Token;
                fromAmino(object: _25.ERC20TokenAmino): _25.ERC20Token;
                toAmino(message: _25.ERC20Token): _25.ERC20TokenAmino;
                fromAminoMsg(object: _25.ERC20TokenAminoMsg): _25.ERC20Token;
                fromProtoMsg(message: _25.ERC20TokenProtoMsg): _25.ERC20Token;
                toProto(message: _25.ERC20Token): Uint8Array;
                toProtoMsg(message: _25.ERC20Token): _25.ERC20TokenProtoMsg;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                denomAuthorityMetadata(request: _40.QueryDenomAuthorityMetadataRequest): Promise<_40.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _40.QueryDenomsFromCreatorRequest): Promise<_40.QueryDenomsFromCreatorResponse>;
                tokenfactoryModuleState(request?: _40.QueryModuleStateRequest): Promise<_40.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _41.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _41.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _41.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _41.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _41.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _41.MsgCreateDenom): {
                        typeUrl: string;
                        value: _41.MsgCreateDenom;
                    };
                    mint(value: _41.MsgMint): {
                        typeUrl: string;
                        value: _41.MsgMint;
                    };
                    burn(value: _41.MsgBurn): {
                        typeUrl: string;
                        value: _41.MsgBurn;
                    };
                    changeAdmin(value: _41.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _41.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _41.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _41.MsgSetDenomMetadata;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _41.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _41.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _41.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _41.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _41.MsgSetDenomMetadata;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createDenom(value: _41.MsgCreateDenom): {
                        typeUrl: string;
                        value: _41.MsgCreateDenom;
                    };
                    mint(value: _41.MsgMint): {
                        typeUrl: string;
                        value: _41.MsgMint;
                    };
                    burn(value: _41.MsgBurn): {
                        typeUrl: string;
                        value: _41.MsgBurn;
                    };
                    changeAdmin(value: _41.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _41.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _41.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _41.MsgSetDenomMetadata;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/injective.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _41.MsgCreateDenom) => _41.MsgCreateDenomAmino;
                    fromAmino: (object: _41.MsgCreateDenomAmino) => _41.MsgCreateDenom;
                };
                "/injective.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _41.MsgMint) => _41.MsgMintAmino;
                    fromAmino: (object: _41.MsgMintAmino) => _41.MsgMint;
                };
                "/injective.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _41.MsgBurn) => _41.MsgBurnAmino;
                    fromAmino: (object: _41.MsgBurnAmino) => _41.MsgBurn;
                };
                "/injective.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _41.MsgChangeAdmin) => _41.MsgChangeAdminAmino;
                    fromAmino: (object: _41.MsgChangeAdminAmino) => _41.MsgChangeAdmin;
                };
                "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _41.MsgSetDenomMetadata) => _41.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _41.MsgSetDenomMetadataAmino) => _41.MsgSetDenomMetadata;
                };
                "/injective.tokenfactory.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _41.MsgUpdateParams) => _41.MsgUpdateParamsAmino;
                    fromAmino: (object: _41.MsgUpdateParamsAmino) => _41.MsgUpdateParams;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _41.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgCreateDenom;
                fromPartial(object: Partial<_41.MsgCreateDenom>): _41.MsgCreateDenom;
                fromAmino(object: _41.MsgCreateDenomAmino): _41.MsgCreateDenom;
                toAmino(message: _41.MsgCreateDenom): _41.MsgCreateDenomAmino;
                fromAminoMsg(object: _41.MsgCreateDenomAminoMsg): _41.MsgCreateDenom;
                fromProtoMsg(message: _41.MsgCreateDenomProtoMsg): _41.MsgCreateDenom;
                toProto(message: _41.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _41.MsgCreateDenom): _41.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _41.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgCreateDenomResponse;
                fromPartial(object: Partial<_41.MsgCreateDenomResponse>): _41.MsgCreateDenomResponse;
                fromAmino(object: _41.MsgCreateDenomResponseAmino): _41.MsgCreateDenomResponse;
                toAmino(message: _41.MsgCreateDenomResponse): _41.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _41.MsgCreateDenomResponseAminoMsg): _41.MsgCreateDenomResponse;
                fromProtoMsg(message: _41.MsgCreateDenomResponseProtoMsg): _41.MsgCreateDenomResponse;
                toProto(message: _41.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _41.MsgCreateDenomResponse): _41.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _41.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgMint;
                fromPartial(object: Partial<_41.MsgMint>): _41.MsgMint;
                fromAmino(object: _41.MsgMintAmino): _41.MsgMint;
                toAmino(message: _41.MsgMint): _41.MsgMintAmino;
                fromAminoMsg(object: _41.MsgMintAminoMsg): _41.MsgMint;
                fromProtoMsg(message: _41.MsgMintProtoMsg): _41.MsgMint;
                toProto(message: _41.MsgMint): Uint8Array;
                toProtoMsg(message: _41.MsgMint): _41.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _41.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgMintResponse;
                fromPartial(_: Partial<_41.MsgMintResponse>): _41.MsgMintResponse;
                fromAmino(_: _41.MsgMintResponseAmino): _41.MsgMintResponse;
                toAmino(_: _41.MsgMintResponse): _41.MsgMintResponseAmino;
                fromAminoMsg(object: _41.MsgMintResponseAminoMsg): _41.MsgMintResponse;
                fromProtoMsg(message: _41.MsgMintResponseProtoMsg): _41.MsgMintResponse;
                toProto(message: _41.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _41.MsgMintResponse): _41.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _41.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgBurn;
                fromPartial(object: Partial<_41.MsgBurn>): _41.MsgBurn;
                fromAmino(object: _41.MsgBurnAmino): _41.MsgBurn;
                toAmino(message: _41.MsgBurn): _41.MsgBurnAmino;
                fromAminoMsg(object: _41.MsgBurnAminoMsg): _41.MsgBurn;
                fromProtoMsg(message: _41.MsgBurnProtoMsg): _41.MsgBurn;
                toProto(message: _41.MsgBurn): Uint8Array;
                toProtoMsg(message: _41.MsgBurn): _41.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _41.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgBurnResponse;
                fromPartial(_: Partial<_41.MsgBurnResponse>): _41.MsgBurnResponse;
                fromAmino(_: _41.MsgBurnResponseAmino): _41.MsgBurnResponse;
                toAmino(_: _41.MsgBurnResponse): _41.MsgBurnResponseAmino;
                fromAminoMsg(object: _41.MsgBurnResponseAminoMsg): _41.MsgBurnResponse;
                fromProtoMsg(message: _41.MsgBurnResponseProtoMsg): _41.MsgBurnResponse;
                toProto(message: _41.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _41.MsgBurnResponse): _41.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _41.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgChangeAdmin;
                fromPartial(object: Partial<_41.MsgChangeAdmin>): _41.MsgChangeAdmin;
                fromAmino(object: _41.MsgChangeAdminAmino): _41.MsgChangeAdmin;
                toAmino(message: _41.MsgChangeAdmin): _41.MsgChangeAdminAmino;
                fromAminoMsg(object: _41.MsgChangeAdminAminoMsg): _41.MsgChangeAdmin;
                fromProtoMsg(message: _41.MsgChangeAdminProtoMsg): _41.MsgChangeAdmin;
                toProto(message: _41.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _41.MsgChangeAdmin): _41.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _41.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgChangeAdminResponse;
                fromPartial(_: Partial<_41.MsgChangeAdminResponse>): _41.MsgChangeAdminResponse;
                fromAmino(_: _41.MsgChangeAdminResponseAmino): _41.MsgChangeAdminResponse;
                toAmino(_: _41.MsgChangeAdminResponse): _41.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _41.MsgChangeAdminResponseAminoMsg): _41.MsgChangeAdminResponse;
                fromProtoMsg(message: _41.MsgChangeAdminResponseProtoMsg): _41.MsgChangeAdminResponse;
                toProto(message: _41.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _41.MsgChangeAdminResponse): _41.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _41.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgSetDenomMetadata;
                fromPartial(object: Partial<_41.MsgSetDenomMetadata>): _41.MsgSetDenomMetadata;
                fromAmino(object: _41.MsgSetDenomMetadataAmino): _41.MsgSetDenomMetadata;
                toAmino(message: _41.MsgSetDenomMetadata): _41.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _41.MsgSetDenomMetadataAminoMsg): _41.MsgSetDenomMetadata;
                fromProtoMsg(message: _41.MsgSetDenomMetadataProtoMsg): _41.MsgSetDenomMetadata;
                toProto(message: _41.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _41.MsgSetDenomMetadata): _41.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _41.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_41.MsgSetDenomMetadataResponse>): _41.MsgSetDenomMetadataResponse;
                fromAmino(_: _41.MsgSetDenomMetadataResponseAmino): _41.MsgSetDenomMetadataResponse;
                toAmino(_: _41.MsgSetDenomMetadataResponse): _41.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _41.MsgSetDenomMetadataResponseAminoMsg): _41.MsgSetDenomMetadataResponse;
                fromProtoMsg(message: _41.MsgSetDenomMetadataResponseProtoMsg): _41.MsgSetDenomMetadataResponse;
                toProto(message: _41.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _41.MsgSetDenomMetadataResponse): _41.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _41.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgUpdateParams;
                fromPartial(object: Partial<_41.MsgUpdateParams>): _41.MsgUpdateParams;
                fromAmino(object: _41.MsgUpdateParamsAmino): _41.MsgUpdateParams;
                toAmino(message: _41.MsgUpdateParams): _41.MsgUpdateParamsAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsAminoMsg): _41.MsgUpdateParams;
                fromProtoMsg(message: _41.MsgUpdateParamsProtoMsg): _41.MsgUpdateParams;
                toProto(message: _41.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateParams): _41.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _41.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_41.MsgUpdateParamsResponse>): _41.MsgUpdateParamsResponse;
                fromAmino(_: _41.MsgUpdateParamsResponseAmino): _41.MsgUpdateParamsResponse;
                toAmino(_: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsResponseAminoMsg): _41.MsgUpdateParamsResponse;
                fromProtoMsg(message: _41.MsgUpdateParamsResponseProtoMsg): _41.MsgUpdateParamsResponse;
                toProto(message: _41.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseProtoMsg;
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
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _40.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_40.QueryDenomAuthorityMetadataRequest>): _40.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _40.QueryDenomAuthorityMetadataRequestAmino): _40.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _40.QueryDenomAuthorityMetadataRequest): _40.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _40.QueryDenomAuthorityMetadataRequestAminoMsg): _40.QueryDenomAuthorityMetadataRequest;
                fromProtoMsg(message: _40.QueryDenomAuthorityMetadataRequestProtoMsg): _40.QueryDenomAuthorityMetadataRequest;
                toProto(message: _40.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDenomAuthorityMetadataRequest): _40.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _40.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_40.QueryDenomAuthorityMetadataResponse>): _40.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _40.QueryDenomAuthorityMetadataResponseAmino): _40.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _40.QueryDenomAuthorityMetadataResponse): _40.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _40.QueryDenomAuthorityMetadataResponseAminoMsg): _40.QueryDenomAuthorityMetadataResponse;
                fromProtoMsg(message: _40.QueryDenomAuthorityMetadataResponseProtoMsg): _40.QueryDenomAuthorityMetadataResponse;
                toProto(message: _40.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDenomAuthorityMetadataResponse): _40.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _40.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_40.QueryDenomsFromCreatorRequest>): _40.QueryDenomsFromCreatorRequest;
                fromAmino(object: _40.QueryDenomsFromCreatorRequestAmino): _40.QueryDenomsFromCreatorRequest;
                toAmino(message: _40.QueryDenomsFromCreatorRequest): _40.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _40.QueryDenomsFromCreatorRequestAminoMsg): _40.QueryDenomsFromCreatorRequest;
                fromProtoMsg(message: _40.QueryDenomsFromCreatorRequestProtoMsg): _40.QueryDenomsFromCreatorRequest;
                toProto(message: _40.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDenomsFromCreatorRequest): _40.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _40.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_40.QueryDenomsFromCreatorResponse>): _40.QueryDenomsFromCreatorResponse;
                fromAmino(object: _40.QueryDenomsFromCreatorResponseAmino): _40.QueryDenomsFromCreatorResponse;
                toAmino(message: _40.QueryDenomsFromCreatorResponse): _40.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _40.QueryDenomsFromCreatorResponseAminoMsg): _40.QueryDenomsFromCreatorResponse;
                fromProtoMsg(message: _40.QueryDenomsFromCreatorResponseProtoMsg): _40.QueryDenomsFromCreatorResponse;
                toProto(message: _40.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDenomsFromCreatorResponse): _40.QueryDenomsFromCreatorResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _40.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryModuleStateRequest;
                fromPartial(_: Partial<_40.QueryModuleStateRequest>): _40.QueryModuleStateRequest;
                fromAmino(_: _40.QueryModuleStateRequestAmino): _40.QueryModuleStateRequest;
                toAmino(_: _40.QueryModuleStateRequest): _40.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _40.QueryModuleStateRequestAminoMsg): _40.QueryModuleStateRequest;
                fromProtoMsg(message: _40.QueryModuleStateRequestProtoMsg): _40.QueryModuleStateRequest;
                toProto(message: _40.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _40.QueryModuleStateRequest): _40.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _40.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryModuleStateResponse;
                fromPartial(object: Partial<_40.QueryModuleStateResponse>): _40.QueryModuleStateResponse;
                fromAmino(object: _40.QueryModuleStateResponseAmino): _40.QueryModuleStateResponse;
                toAmino(message: _40.QueryModuleStateResponse): _40.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _40.QueryModuleStateResponseAminoMsg): _40.QueryModuleStateResponse;
                fromProtoMsg(message: _40.QueryModuleStateResponseProtoMsg): _40.QueryModuleStateResponse;
                toProto(message: _40.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _40.QueryModuleStateResponse): _40.QueryModuleStateResponseProtoMsg;
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
            GenesisDenom: {
                typeUrl: string;
                encode(message: _38.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisDenom;
                fromPartial(object: Partial<_38.GenesisDenom>): _38.GenesisDenom;
                fromAmino(object: _38.GenesisDenomAmino): _38.GenesisDenom;
                toAmino(message: _38.GenesisDenom): _38.GenesisDenomAmino;
                fromAminoMsg(object: _38.GenesisDenomAminoMsg): _38.GenesisDenom;
                fromProtoMsg(message: _38.GenesisDenomProtoMsg): _38.GenesisDenom;
                toProto(message: _38.GenesisDenom): Uint8Array;
                toProtoMsg(message: _38.GenesisDenom): _38.GenesisDenomProtoMsg;
            };
            EventCreateTFDenom: {
                typeUrl: string;
                encode(message: _37.EventCreateTFDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventCreateTFDenom;
                fromPartial(object: Partial<_37.EventCreateTFDenom>): _37.EventCreateTFDenom;
                fromAmino(object: _37.EventCreateTFDenomAmino): _37.EventCreateTFDenom;
                toAmino(message: _37.EventCreateTFDenom): _37.EventCreateTFDenomAmino;
                fromAminoMsg(object: _37.EventCreateTFDenomAminoMsg): _37.EventCreateTFDenom;
                fromProtoMsg(message: _37.EventCreateTFDenomProtoMsg): _37.EventCreateTFDenom;
                toProto(message: _37.EventCreateTFDenom): Uint8Array;
                toProtoMsg(message: _37.EventCreateTFDenom): _37.EventCreateTFDenomProtoMsg;
            };
            EventMintTFDenom: {
                typeUrl: string;
                encode(message: _37.EventMintTFDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventMintTFDenom;
                fromPartial(object: Partial<_37.EventMintTFDenom>): _37.EventMintTFDenom;
                fromAmino(object: _37.EventMintTFDenomAmino): _37.EventMintTFDenom;
                toAmino(message: _37.EventMintTFDenom): _37.EventMintTFDenomAmino;
                fromAminoMsg(object: _37.EventMintTFDenomAminoMsg): _37.EventMintTFDenom;
                fromProtoMsg(message: _37.EventMintTFDenomProtoMsg): _37.EventMintTFDenom;
                toProto(message: _37.EventMintTFDenom): Uint8Array;
                toProtoMsg(message: _37.EventMintTFDenom): _37.EventMintTFDenomProtoMsg;
            };
            EventBurnTFDenom: {
                typeUrl: string;
                encode(message: _37.EventBurnTFDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventBurnTFDenom;
                fromPartial(object: Partial<_37.EventBurnTFDenom>): _37.EventBurnTFDenom;
                fromAmino(object: _37.EventBurnTFDenomAmino): _37.EventBurnTFDenom;
                toAmino(message: _37.EventBurnTFDenom): _37.EventBurnTFDenomAmino;
                fromAminoMsg(object: _37.EventBurnTFDenomAminoMsg): _37.EventBurnTFDenom;
                fromProtoMsg(message: _37.EventBurnTFDenomProtoMsg): _37.EventBurnTFDenom;
                toProto(message: _37.EventBurnTFDenom): Uint8Array;
                toProtoMsg(message: _37.EventBurnTFDenom): _37.EventBurnTFDenomProtoMsg;
            };
            EventChangeTFAdmin: {
                typeUrl: string;
                encode(message: _37.EventChangeTFAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventChangeTFAdmin;
                fromPartial(object: Partial<_37.EventChangeTFAdmin>): _37.EventChangeTFAdmin;
                fromAmino(object: _37.EventChangeTFAdminAmino): _37.EventChangeTFAdmin;
                toAmino(message: _37.EventChangeTFAdmin): _37.EventChangeTFAdminAmino;
                fromAminoMsg(object: _37.EventChangeTFAdminAminoMsg): _37.EventChangeTFAdmin;
                fromProtoMsg(message: _37.EventChangeTFAdminProtoMsg): _37.EventChangeTFAdmin;
                toProto(message: _37.EventChangeTFAdmin): Uint8Array;
                toProtoMsg(message: _37.EventChangeTFAdmin): _37.EventChangeTFAdminProtoMsg;
            };
            EventSetTFDenomMetadata: {
                typeUrl: string;
                encode(message: _37.EventSetTFDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventSetTFDenomMetadata;
                fromPartial(object: Partial<_37.EventSetTFDenomMetadata>): _37.EventSetTFDenomMetadata;
                fromAmino(object: _37.EventSetTFDenomMetadataAmino): _37.EventSetTFDenomMetadata;
                toAmino(message: _37.EventSetTFDenomMetadata): _37.EventSetTFDenomMetadataAmino;
                fromAminoMsg(object: _37.EventSetTFDenomMetadataAminoMsg): _37.EventSetTFDenomMetadata;
                fromProtoMsg(message: _37.EventSetTFDenomMetadataProtoMsg): _37.EventSetTFDenomMetadata;
                toProto(message: _37.EventSetTFDenomMetadata): Uint8Array;
                toProtoMsg(message: _37.EventSetTFDenomMetadata): _37.EventSetTFDenomMetadataProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _36.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.DenomAuthorityMetadata;
                fromPartial(object: Partial<_36.DenomAuthorityMetadata>): _36.DenomAuthorityMetadata;
                fromAmino(object: _36.DenomAuthorityMetadataAmino): _36.DenomAuthorityMetadata;
                toAmino(message: _36.DenomAuthorityMetadata): _36.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _36.DenomAuthorityMetadataAminoMsg): _36.DenomAuthorityMetadata;
                fromProtoMsg(message: _36.DenomAuthorityMetadataProtoMsg): _36.DenomAuthorityMetadata;
                toProto(message: _36.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _36.DenomAuthorityMetadata): _36.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace types {
        const v1beta1: {
            TxResponseGenericMessage: {
                typeUrl: string;
                encode(message: _44.TxResponseGenericMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.TxResponseGenericMessage;
                fromPartial(object: Partial<_44.TxResponseGenericMessage>): _44.TxResponseGenericMessage;
                fromAmino(object: _44.TxResponseGenericMessageAmino): _44.TxResponseGenericMessage;
                toAmino(message: _44.TxResponseGenericMessage): _44.TxResponseGenericMessageAmino;
                fromAminoMsg(object: _44.TxResponseGenericMessageAminoMsg): _44.TxResponseGenericMessage;
                fromProtoMsg(message: _44.TxResponseGenericMessageProtoMsg): _44.TxResponseGenericMessage;
                toProto(message: _44.TxResponseGenericMessage): Uint8Array;
                toProtoMsg(message: _44.TxResponseGenericMessage): _44.TxResponseGenericMessageProtoMsg;
            };
            TxResponseData: {
                typeUrl: string;
                encode(message: _44.TxResponseData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.TxResponseData;
                fromPartial(object: Partial<_44.TxResponseData>): _44.TxResponseData;
                fromAmino(object: _44.TxResponseDataAmino): _44.TxResponseData;
                toAmino(message: _44.TxResponseData): _44.TxResponseDataAmino;
                fromAminoMsg(object: _44.TxResponseDataAminoMsg): _44.TxResponseData;
                fromProtoMsg(message: _44.TxResponseDataProtoMsg): _44.TxResponseData;
                toProto(message: _44.TxResponseData): Uint8Array;
                toProtoMsg(message: _44.TxResponseData): _44.TxResponseDataProtoMsg;
            };
            ExtensionOptionsWeb3Tx: {
                typeUrl: string;
                encode(message: _43.ExtensionOptionsWeb3Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ExtensionOptionsWeb3Tx;
                fromPartial(object: Partial<_43.ExtensionOptionsWeb3Tx>): _43.ExtensionOptionsWeb3Tx;
                fromAmino(object: _43.ExtensionOptionsWeb3TxAmino): _43.ExtensionOptionsWeb3Tx;
                toAmino(message: _43.ExtensionOptionsWeb3Tx): _43.ExtensionOptionsWeb3TxAmino;
                fromAminoMsg(object: _43.ExtensionOptionsWeb3TxAminoMsg): _43.ExtensionOptionsWeb3Tx;
                fromProtoMsg(message: _43.ExtensionOptionsWeb3TxProtoMsg): _43.ExtensionOptionsWeb3Tx;
                toProto(message: _43.ExtensionOptionsWeb3Tx): Uint8Array;
                toProtoMsg(message: _43.ExtensionOptionsWeb3Tx): _43.ExtensionOptionsWeb3TxProtoMsg;
            };
            EthAccount: {
                typeUrl: string;
                encode(message: _42.EthAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.EthAccount;
                fromPartial(object: Partial<_42.EthAccount>): _42.EthAccount;
                fromAmino(object: _42.EthAccountAmino): _42.EthAccount;
                toAmino(message: _42.EthAccount): _42.EthAccountAmino;
                fromAminoMsg(object: _42.EthAccountAminoMsg): _42.EthAccount;
                fromProtoMsg(message: _42.EthAccountProtoMsg): _42.EthAccount;
                toProto(message: _42.EthAccount): Uint8Array;
                toProtoMsg(message: _42.EthAccount): _42.EthAccountProtoMsg;
            };
        };
    }
    namespace wasmx {
        const v1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                wasmxParams(request?: _48.QueryWasmxParamsRequest): Promise<_48.QueryWasmxParamsResponse>;
                contractRegistrationInfo(request: _48.QueryContractRegistrationInfoRequest): Promise<_48.QueryContractRegistrationInfoResponse>;
                wasmxModuleState(request?: _48.QueryModuleStateRequest): Promise<_48.QueryModuleStateResponse>;
            };
            LCDQueryClient: typeof _227.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateRegistryContractParams(value: _49.MsgUpdateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    activateRegistryContract(value: _49.MsgActivateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deactivateRegistryContract(value: _49.MsgDeactivateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContractCompat(value: _49.MsgExecuteContractCompat): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _49.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateRegistryContractParams(value: _49.MsgUpdateContract): {
                        typeUrl: string;
                        value: _49.MsgUpdateContract;
                    };
                    activateRegistryContract(value: _49.MsgActivateContract): {
                        typeUrl: string;
                        value: _49.MsgActivateContract;
                    };
                    deactivateRegistryContract(value: _49.MsgDeactivateContract): {
                        typeUrl: string;
                        value: _49.MsgDeactivateContract;
                    };
                    executeContractCompat(value: _49.MsgExecuteContractCompat): {
                        typeUrl: string;
                        value: _49.MsgExecuteContractCompat;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    registerContract(value: _49.MsgRegisterContract): {
                        typeUrl: string;
                        value: _49.MsgRegisterContract;
                    };
                };
                fromJSON: {
                    updateRegistryContractParams(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateContract;
                    };
                    activateRegistryContract(value: any): {
                        typeUrl: string;
                        value: _49.MsgActivateContract;
                    };
                    deactivateRegistryContract(value: any): {
                        typeUrl: string;
                        value: _49.MsgDeactivateContract;
                    };
                    executeContractCompat(value: any): {
                        typeUrl: string;
                        value: _49.MsgExecuteContractCompat;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    registerContract(value: any): {
                        typeUrl: string;
                        value: _49.MsgRegisterContract;
                    };
                };
                fromPartial: {
                    updateRegistryContractParams(value: _49.MsgUpdateContract): {
                        typeUrl: string;
                        value: _49.MsgUpdateContract;
                    };
                    activateRegistryContract(value: _49.MsgActivateContract): {
                        typeUrl: string;
                        value: _49.MsgActivateContract;
                    };
                    deactivateRegistryContract(value: _49.MsgDeactivateContract): {
                        typeUrl: string;
                        value: _49.MsgDeactivateContract;
                    };
                    executeContractCompat(value: _49.MsgExecuteContractCompat): {
                        typeUrl: string;
                        value: _49.MsgExecuteContractCompat;
                    };
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                    registerContract(value: _49.MsgRegisterContract): {
                        typeUrl: string;
                        value: _49.MsgRegisterContract;
                    };
                };
            };
            AminoConverter: {
                "/injective.wasmx.v1.MsgUpdateContract": {
                    aminoType: string;
                    toAmino: (message: _49.MsgUpdateContract) => _49.MsgUpdateContractAmino;
                    fromAmino: (object: _49.MsgUpdateContractAmino) => _49.MsgUpdateContract;
                };
                "/injective.wasmx.v1.MsgActivateContract": {
                    aminoType: string;
                    toAmino: (message: _49.MsgActivateContract) => _49.MsgActivateContractAmino;
                    fromAmino: (object: _49.MsgActivateContractAmino) => _49.MsgActivateContract;
                };
                "/injective.wasmx.v1.MsgDeactivateContract": {
                    aminoType: string;
                    toAmino: (message: _49.MsgDeactivateContract) => _49.MsgDeactivateContractAmino;
                    fromAmino: (object: _49.MsgDeactivateContractAmino) => _49.MsgDeactivateContract;
                };
                "/injective.wasmx.v1.MsgExecuteContractCompat": {
                    aminoType: string;
                    toAmino: (message: _49.MsgExecuteContractCompat) => _49.MsgExecuteContractCompatAmino;
                    fromAmino: (object: _49.MsgExecuteContractCompatAmino) => _49.MsgExecuteContractCompat;
                };
                "/injective.wasmx.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _49.MsgUpdateParams) => _49.MsgUpdateParamsAmino;
                    fromAmino: (object: _49.MsgUpdateParamsAmino) => _49.MsgUpdateParams;
                };
                "/injective.wasmx.v1.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: (message: _49.MsgRegisterContract) => _49.MsgRegisterContractAmino;
                    fromAmino: (object: _49.MsgRegisterContractAmino) => _49.MsgRegisterContract;
                };
            };
            Params: {
                typeUrl: string;
                encode(message: _50.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
                fromAmino(object: _50.ParamsAmino): _50.Params;
                toAmino(message: _50.Params): _50.ParamsAmino;
                fromAminoMsg(object: _50.ParamsAminoMsg): _50.Params;
                fromProtoMsg(message: _50.ParamsProtoMsg): _50.Params;
                toProto(message: _50.Params): Uint8Array;
                toProtoMsg(message: _50.Params): _50.ParamsProtoMsg;
            };
            RegisteredContract: {
                typeUrl: string;
                encode(message: _50.RegisteredContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.RegisteredContract;
                fromPartial(object: Partial<_50.RegisteredContract>): _50.RegisteredContract;
                fromAmino(object: _50.RegisteredContractAmino): _50.RegisteredContract;
                toAmino(message: _50.RegisteredContract): _50.RegisteredContractAmino;
                fromAminoMsg(object: _50.RegisteredContractAminoMsg): _50.RegisteredContract;
                fromProtoMsg(message: _50.RegisteredContractProtoMsg): _50.RegisteredContract;
                toProto(message: _50.RegisteredContract): Uint8Array;
                toProtoMsg(message: _50.RegisteredContract): _50.RegisteredContractProtoMsg;
            };
            MsgExecuteContractCompat: {
                typeUrl: string;
                encode(message: _49.MsgExecuteContractCompat, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgExecuteContractCompat;
                fromPartial(object: Partial<_49.MsgExecuteContractCompat>): _49.MsgExecuteContractCompat;
                fromAmino(object: _49.MsgExecuteContractCompatAmino): _49.MsgExecuteContractCompat;
                toAmino(message: _49.MsgExecuteContractCompat): _49.MsgExecuteContractCompatAmino;
                fromAminoMsg(object: _49.MsgExecuteContractCompatAminoMsg): _49.MsgExecuteContractCompat;
                fromProtoMsg(message: _49.MsgExecuteContractCompatProtoMsg): _49.MsgExecuteContractCompat;
                toProto(message: _49.MsgExecuteContractCompat): Uint8Array;
                toProtoMsg(message: _49.MsgExecuteContractCompat): _49.MsgExecuteContractCompatProtoMsg;
            };
            MsgExecuteContractCompatResponse: {
                typeUrl: string;
                encode(message: _49.MsgExecuteContractCompatResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgExecuteContractCompatResponse;
                fromPartial(object: Partial<_49.MsgExecuteContractCompatResponse>): _49.MsgExecuteContractCompatResponse;
                fromAmino(object: _49.MsgExecuteContractCompatResponseAmino): _49.MsgExecuteContractCompatResponse;
                toAmino(message: _49.MsgExecuteContractCompatResponse): _49.MsgExecuteContractCompatResponseAmino;
                fromAminoMsg(object: _49.MsgExecuteContractCompatResponseAminoMsg): _49.MsgExecuteContractCompatResponse;
                fromProtoMsg(message: _49.MsgExecuteContractCompatResponseProtoMsg): _49.MsgExecuteContractCompatResponse;
                toProto(message: _49.MsgExecuteContractCompatResponse): Uint8Array;
                toProtoMsg(message: _49.MsgExecuteContractCompatResponse): _49.MsgExecuteContractCompatResponseProtoMsg;
            };
            MsgUpdateContract: {
                typeUrl: string;
                encode(message: _49.MsgUpdateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgUpdateContract;
                fromPartial(object: Partial<_49.MsgUpdateContract>): _49.MsgUpdateContract;
                fromAmino(object: _49.MsgUpdateContractAmino): _49.MsgUpdateContract;
                toAmino(message: _49.MsgUpdateContract): _49.MsgUpdateContractAmino;
                fromAminoMsg(object: _49.MsgUpdateContractAminoMsg): _49.MsgUpdateContract;
                fromProtoMsg(message: _49.MsgUpdateContractProtoMsg): _49.MsgUpdateContract;
                toProto(message: _49.MsgUpdateContract): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateContract): _49.MsgUpdateContractProtoMsg;
            };
            MsgUpdateContractResponse: {
                typeUrl: string;
                encode(_: _49.MsgUpdateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgUpdateContractResponse;
                fromPartial(_: Partial<_49.MsgUpdateContractResponse>): _49.MsgUpdateContractResponse;
                fromAmino(_: _49.MsgUpdateContractResponseAmino): _49.MsgUpdateContractResponse;
                toAmino(_: _49.MsgUpdateContractResponse): _49.MsgUpdateContractResponseAmino;
                fromAminoMsg(object: _49.MsgUpdateContractResponseAminoMsg): _49.MsgUpdateContractResponse;
                fromProtoMsg(message: _49.MsgUpdateContractResponseProtoMsg): _49.MsgUpdateContractResponse;
                toProto(message: _49.MsgUpdateContractResponse): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateContractResponse): _49.MsgUpdateContractResponseProtoMsg;
            };
            MsgActivateContract: {
                typeUrl: string;
                encode(message: _49.MsgActivateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgActivateContract;
                fromPartial(object: Partial<_49.MsgActivateContract>): _49.MsgActivateContract;
                fromAmino(object: _49.MsgActivateContractAmino): _49.MsgActivateContract;
                toAmino(message: _49.MsgActivateContract): _49.MsgActivateContractAmino;
                fromAminoMsg(object: _49.MsgActivateContractAminoMsg): _49.MsgActivateContract;
                fromProtoMsg(message: _49.MsgActivateContractProtoMsg): _49.MsgActivateContract;
                toProto(message: _49.MsgActivateContract): Uint8Array;
                toProtoMsg(message: _49.MsgActivateContract): _49.MsgActivateContractProtoMsg;
            };
            MsgActivateContractResponse: {
                typeUrl: string;
                encode(_: _49.MsgActivateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgActivateContractResponse;
                fromPartial(_: Partial<_49.MsgActivateContractResponse>): _49.MsgActivateContractResponse;
                fromAmino(_: _49.MsgActivateContractResponseAmino): _49.MsgActivateContractResponse;
                toAmino(_: _49.MsgActivateContractResponse): _49.MsgActivateContractResponseAmino;
                fromAminoMsg(object: _49.MsgActivateContractResponseAminoMsg): _49.MsgActivateContractResponse;
                fromProtoMsg(message: _49.MsgActivateContractResponseProtoMsg): _49.MsgActivateContractResponse;
                toProto(message: _49.MsgActivateContractResponse): Uint8Array;
                toProtoMsg(message: _49.MsgActivateContractResponse): _49.MsgActivateContractResponseProtoMsg;
            };
            MsgDeactivateContract: {
                typeUrl: string;
                encode(message: _49.MsgDeactivateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgDeactivateContract;
                fromPartial(object: Partial<_49.MsgDeactivateContract>): _49.MsgDeactivateContract;
                fromAmino(object: _49.MsgDeactivateContractAmino): _49.MsgDeactivateContract;
                toAmino(message: _49.MsgDeactivateContract): _49.MsgDeactivateContractAmino;
                fromAminoMsg(object: _49.MsgDeactivateContractAminoMsg): _49.MsgDeactivateContract;
                fromProtoMsg(message: _49.MsgDeactivateContractProtoMsg): _49.MsgDeactivateContract;
                toProto(message: _49.MsgDeactivateContract): Uint8Array;
                toProtoMsg(message: _49.MsgDeactivateContract): _49.MsgDeactivateContractProtoMsg;
            };
            MsgDeactivateContractResponse: {
                typeUrl: string;
                encode(_: _49.MsgDeactivateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgDeactivateContractResponse;
                fromPartial(_: Partial<_49.MsgDeactivateContractResponse>): _49.MsgDeactivateContractResponse;
                fromAmino(_: _49.MsgDeactivateContractResponseAmino): _49.MsgDeactivateContractResponse;
                toAmino(_: _49.MsgDeactivateContractResponse): _49.MsgDeactivateContractResponseAmino;
                fromAminoMsg(object: _49.MsgDeactivateContractResponseAminoMsg): _49.MsgDeactivateContractResponse;
                fromProtoMsg(message: _49.MsgDeactivateContractResponseProtoMsg): _49.MsgDeactivateContractResponse;
                toProto(message: _49.MsgDeactivateContractResponse): Uint8Array;
                toProtoMsg(message: _49.MsgDeactivateContractResponse): _49.MsgDeactivateContractResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _49.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgUpdateParams;
                fromPartial(object: Partial<_49.MsgUpdateParams>): _49.MsgUpdateParams;
                fromAmino(object: _49.MsgUpdateParamsAmino): _49.MsgUpdateParams;
                toAmino(message: _49.MsgUpdateParams): _49.MsgUpdateParamsAmino;
                fromAminoMsg(object: _49.MsgUpdateParamsAminoMsg): _49.MsgUpdateParams;
                fromProtoMsg(message: _49.MsgUpdateParamsProtoMsg): _49.MsgUpdateParams;
                toProto(message: _49.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateParams): _49.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _49.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_49.MsgUpdateParamsResponse>): _49.MsgUpdateParamsResponse;
                fromAmino(_: _49.MsgUpdateParamsResponseAmino): _49.MsgUpdateParamsResponse;
                toAmino(_: _49.MsgUpdateParamsResponse): _49.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _49.MsgUpdateParamsResponseAminoMsg): _49.MsgUpdateParamsResponse;
                fromProtoMsg(message: _49.MsgUpdateParamsResponseProtoMsg): _49.MsgUpdateParamsResponse;
                toProto(message: _49.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateParamsResponse): _49.MsgUpdateParamsResponseProtoMsg;
            };
            MsgRegisterContract: {
                typeUrl: string;
                encode(message: _49.MsgRegisterContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgRegisterContract;
                fromPartial(object: Partial<_49.MsgRegisterContract>): _49.MsgRegisterContract;
                fromAmino(object: _49.MsgRegisterContractAmino): _49.MsgRegisterContract;
                toAmino(message: _49.MsgRegisterContract): _49.MsgRegisterContractAmino;
                fromAminoMsg(object: _49.MsgRegisterContractAminoMsg): _49.MsgRegisterContract;
                fromProtoMsg(message: _49.MsgRegisterContractProtoMsg): _49.MsgRegisterContract;
                toProto(message: _49.MsgRegisterContract): Uint8Array;
                toProtoMsg(message: _49.MsgRegisterContract): _49.MsgRegisterContractProtoMsg;
            };
            MsgRegisterContractResponse: {
                typeUrl: string;
                encode(_: _49.MsgRegisterContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgRegisterContractResponse;
                fromPartial(_: Partial<_49.MsgRegisterContractResponse>): _49.MsgRegisterContractResponse;
                fromAmino(_: _49.MsgRegisterContractResponseAmino): _49.MsgRegisterContractResponse;
                toAmino(_: _49.MsgRegisterContractResponse): _49.MsgRegisterContractResponseAmino;
                fromAminoMsg(object: _49.MsgRegisterContractResponseAminoMsg): _49.MsgRegisterContractResponse;
                fromProtoMsg(message: _49.MsgRegisterContractResponseProtoMsg): _49.MsgRegisterContractResponse;
                toProto(message: _49.MsgRegisterContractResponse): Uint8Array;
                toProtoMsg(message: _49.MsgRegisterContractResponse): _49.MsgRegisterContractResponseProtoMsg;
            };
            QueryWasmxParamsRequest: {
                typeUrl: string;
                encode(_: _48.QueryWasmxParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryWasmxParamsRequest;
                fromPartial(_: Partial<_48.QueryWasmxParamsRequest>): _48.QueryWasmxParamsRequest;
                fromAmino(_: _48.QueryWasmxParamsRequestAmino): _48.QueryWasmxParamsRequest;
                toAmino(_: _48.QueryWasmxParamsRequest): _48.QueryWasmxParamsRequestAmino;
                fromAminoMsg(object: _48.QueryWasmxParamsRequestAminoMsg): _48.QueryWasmxParamsRequest;
                fromProtoMsg(message: _48.QueryWasmxParamsRequestProtoMsg): _48.QueryWasmxParamsRequest;
                toProto(message: _48.QueryWasmxParamsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryWasmxParamsRequest): _48.QueryWasmxParamsRequestProtoMsg;
            };
            QueryWasmxParamsResponse: {
                typeUrl: string;
                encode(message: _48.QueryWasmxParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryWasmxParamsResponse;
                fromPartial(object: Partial<_48.QueryWasmxParamsResponse>): _48.QueryWasmxParamsResponse;
                fromAmino(object: _48.QueryWasmxParamsResponseAmino): _48.QueryWasmxParamsResponse;
                toAmino(message: _48.QueryWasmxParamsResponse): _48.QueryWasmxParamsResponseAmino;
                fromAminoMsg(object: _48.QueryWasmxParamsResponseAminoMsg): _48.QueryWasmxParamsResponse;
                fromProtoMsg(message: _48.QueryWasmxParamsResponseProtoMsg): _48.QueryWasmxParamsResponse;
                toProto(message: _48.QueryWasmxParamsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryWasmxParamsResponse): _48.QueryWasmxParamsResponseProtoMsg;
            };
            QueryModuleStateRequest: {
                typeUrl: string;
                encode(_: _48.QueryModuleStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.QueryModuleStateRequest;
                fromPartial(_: Partial<_48.QueryModuleStateRequest>): _48.QueryModuleStateRequest;
                fromAmino(_: _48.QueryModuleStateRequestAmino): _48.QueryModuleStateRequest;
                toAmino(_: _48.QueryModuleStateRequest): _48.QueryModuleStateRequestAmino;
                fromAminoMsg(object: _48.QueryModuleStateRequestAminoMsg): _48.QueryModuleStateRequest;
                fromProtoMsg(message: _48.QueryModuleStateRequestProtoMsg): _48.QueryModuleStateRequest;
                toProto(message: _48.QueryModuleStateRequest): Uint8Array;
                toProtoMsg(message: _48.QueryModuleStateRequest): _48.QueryModuleStateRequestProtoMsg;
            };
            QueryModuleStateResponse: {
                typeUrl: string;
                encode(message: _48.QueryModuleStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryModuleStateResponse;
                fromPartial(object: Partial<_48.QueryModuleStateResponse>): _48.QueryModuleStateResponse;
                fromAmino(object: _48.QueryModuleStateResponseAmino): _48.QueryModuleStateResponse;
                toAmino(message: _48.QueryModuleStateResponse): _48.QueryModuleStateResponseAmino;
                fromAminoMsg(object: _48.QueryModuleStateResponseAminoMsg): _48.QueryModuleStateResponse;
                fromProtoMsg(message: _48.QueryModuleStateResponseProtoMsg): _48.QueryModuleStateResponse;
                toProto(message: _48.QueryModuleStateResponse): Uint8Array;
                toProtoMsg(message: _48.QueryModuleStateResponse): _48.QueryModuleStateResponseProtoMsg;
            };
            QueryContractRegistrationInfoRequest: {
                typeUrl: string;
                encode(message: _48.QueryContractRegistrationInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryContractRegistrationInfoRequest;
                fromPartial(object: Partial<_48.QueryContractRegistrationInfoRequest>): _48.QueryContractRegistrationInfoRequest;
                fromAmino(object: _48.QueryContractRegistrationInfoRequestAmino): _48.QueryContractRegistrationInfoRequest;
                toAmino(message: _48.QueryContractRegistrationInfoRequest): _48.QueryContractRegistrationInfoRequestAmino;
                fromAminoMsg(object: _48.QueryContractRegistrationInfoRequestAminoMsg): _48.QueryContractRegistrationInfoRequest;
                fromProtoMsg(message: _48.QueryContractRegistrationInfoRequestProtoMsg): _48.QueryContractRegistrationInfoRequest;
                toProto(message: _48.QueryContractRegistrationInfoRequest): Uint8Array;
                toProtoMsg(message: _48.QueryContractRegistrationInfoRequest): _48.QueryContractRegistrationInfoRequestProtoMsg;
            };
            QueryContractRegistrationInfoResponse: {
                typeUrl: string;
                encode(message: _48.QueryContractRegistrationInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.QueryContractRegistrationInfoResponse;
                fromPartial(object: Partial<_48.QueryContractRegistrationInfoResponse>): _48.QueryContractRegistrationInfoResponse;
                fromAmino(object: _48.QueryContractRegistrationInfoResponseAmino): _48.QueryContractRegistrationInfoResponse;
                toAmino(message: _48.QueryContractRegistrationInfoResponse): _48.QueryContractRegistrationInfoResponseAmino;
                fromAminoMsg(object: _48.QueryContractRegistrationInfoResponseAminoMsg): _48.QueryContractRegistrationInfoResponse;
                fromProtoMsg(message: _48.QueryContractRegistrationInfoResponseProtoMsg): _48.QueryContractRegistrationInfoResponse;
                toProto(message: _48.QueryContractRegistrationInfoResponse): Uint8Array;
                toProtoMsg(message: _48.QueryContractRegistrationInfoResponse): _48.QueryContractRegistrationInfoResponseProtoMsg;
            };
            fundingModeFromJSON(object: any): _47.FundingMode;
            fundingModeToJSON(object: _47.FundingMode): string;
            FundingMode: typeof _47.FundingMode;
            FundingModeSDKType: typeof _47.FundingMode;
            FundingModeAmino: typeof _47.FundingMode;
            ContractRegistrationRequestProposal: {
                typeUrl: string;
                encode(message: _47.ContractRegistrationRequestProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ContractRegistrationRequestProposal;
                fromPartial(object: Partial<_47.ContractRegistrationRequestProposal>): _47.ContractRegistrationRequestProposal;
                fromAmino(object: _47.ContractRegistrationRequestProposalAmino): _47.ContractRegistrationRequestProposal;
                toAmino(message: _47.ContractRegistrationRequestProposal): _47.ContractRegistrationRequestProposalAmino;
                fromAminoMsg(object: _47.ContractRegistrationRequestProposalAminoMsg): _47.ContractRegistrationRequestProposal;
                fromProtoMsg(message: _47.ContractRegistrationRequestProposalProtoMsg): _47.ContractRegistrationRequestProposal;
                toProto(message: _47.ContractRegistrationRequestProposal): Uint8Array;
                toProtoMsg(message: _47.ContractRegistrationRequestProposal): _47.ContractRegistrationRequestProposalProtoMsg;
            };
            BatchContractRegistrationRequestProposal: {
                typeUrl: string;
                encode(message: _47.BatchContractRegistrationRequestProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.BatchContractRegistrationRequestProposal;
                fromPartial(object: Partial<_47.BatchContractRegistrationRequestProposal>): _47.BatchContractRegistrationRequestProposal;
                fromAmino(object: _47.BatchContractRegistrationRequestProposalAmino): _47.BatchContractRegistrationRequestProposal;
                toAmino(message: _47.BatchContractRegistrationRequestProposal): _47.BatchContractRegistrationRequestProposalAmino;
                fromAminoMsg(object: _47.BatchContractRegistrationRequestProposalAminoMsg): _47.BatchContractRegistrationRequestProposal;
                fromProtoMsg(message: _47.BatchContractRegistrationRequestProposalProtoMsg): _47.BatchContractRegistrationRequestProposal;
                toProto(message: _47.BatchContractRegistrationRequestProposal): Uint8Array;
                toProtoMsg(message: _47.BatchContractRegistrationRequestProposal): _47.BatchContractRegistrationRequestProposalProtoMsg;
            };
            BatchContractDeregistrationProposal: {
                typeUrl: string;
                encode(message: _47.BatchContractDeregistrationProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.BatchContractDeregistrationProposal;
                fromPartial(object: Partial<_47.BatchContractDeregistrationProposal>): _47.BatchContractDeregistrationProposal;
                fromAmino(object: _47.BatchContractDeregistrationProposalAmino): _47.BatchContractDeregistrationProposal;
                toAmino(message: _47.BatchContractDeregistrationProposal): _47.BatchContractDeregistrationProposalAmino;
                fromAminoMsg(object: _47.BatchContractDeregistrationProposalAminoMsg): _47.BatchContractDeregistrationProposal;
                fromProtoMsg(message: _47.BatchContractDeregistrationProposalProtoMsg): _47.BatchContractDeregistrationProposal;
                toProto(message: _47.BatchContractDeregistrationProposal): Uint8Array;
                toProtoMsg(message: _47.BatchContractDeregistrationProposal): _47.BatchContractDeregistrationProposalProtoMsg;
            };
            ContractRegistrationRequest: {
                typeUrl: string;
                encode(message: _47.ContractRegistrationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.ContractRegistrationRequest;
                fromPartial(object: Partial<_47.ContractRegistrationRequest>): _47.ContractRegistrationRequest;
                fromAmino(object: _47.ContractRegistrationRequestAmino): _47.ContractRegistrationRequest;
                toAmino(message: _47.ContractRegistrationRequest): _47.ContractRegistrationRequestAmino;
                fromAminoMsg(object: _47.ContractRegistrationRequestAminoMsg): _47.ContractRegistrationRequest;
                fromProtoMsg(message: _47.ContractRegistrationRequestProtoMsg): _47.ContractRegistrationRequest;
                toProto(message: _47.ContractRegistrationRequest): Uint8Array;
                toProtoMsg(message: _47.ContractRegistrationRequest): _47.ContractRegistrationRequestProtoMsg;
            };
            BatchStoreCodeProposal: {
                typeUrl: string;
                encode(message: _47.BatchStoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.BatchStoreCodeProposal;
                fromPartial(object: Partial<_47.BatchStoreCodeProposal>): _47.BatchStoreCodeProposal;
                fromAmino(object: _47.BatchStoreCodeProposalAmino): _47.BatchStoreCodeProposal;
                toAmino(message: _47.BatchStoreCodeProposal): _47.BatchStoreCodeProposalAmino;
                fromAminoMsg(object: _47.BatchStoreCodeProposalAminoMsg): _47.BatchStoreCodeProposal;
                fromProtoMsg(message: _47.BatchStoreCodeProposalProtoMsg): _47.BatchStoreCodeProposal;
                toProto(message: _47.BatchStoreCodeProposal): Uint8Array;
                toProtoMsg(message: _47.BatchStoreCodeProposal): _47.BatchStoreCodeProposalProtoMsg;
            };
            RegisteredContractWithAddress: {
                typeUrl: string;
                encode(message: _46.RegisteredContractWithAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.RegisteredContractWithAddress;
                fromPartial(object: Partial<_46.RegisteredContractWithAddress>): _46.RegisteredContractWithAddress;
                fromAmino(object: _46.RegisteredContractWithAddressAmino): _46.RegisteredContractWithAddress;
                toAmino(message: _46.RegisteredContractWithAddress): _46.RegisteredContractWithAddressAmino;
                fromAminoMsg(object: _46.RegisteredContractWithAddressAminoMsg): _46.RegisteredContractWithAddress;
                fromProtoMsg(message: _46.RegisteredContractWithAddressProtoMsg): _46.RegisteredContractWithAddress;
                toProto(message: _46.RegisteredContractWithAddress): Uint8Array;
                toProtoMsg(message: _46.RegisteredContractWithAddress): _46.RegisteredContractWithAddressProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _46.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                toProto(message: _46.GenesisState): Uint8Array;
                toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
            };
            EventContractExecution: {
                typeUrl: string;
                encode(message: _45.EventContractExecution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.EventContractExecution;
                fromPartial(object: Partial<_45.EventContractExecution>): _45.EventContractExecution;
                fromAmino(object: _45.EventContractExecutionAmino): _45.EventContractExecution;
                toAmino(message: _45.EventContractExecution): _45.EventContractExecutionAmino;
                fromAminoMsg(object: _45.EventContractExecutionAminoMsg): _45.EventContractExecution;
                fromProtoMsg(message: _45.EventContractExecutionProtoMsg): _45.EventContractExecution;
                toProto(message: _45.EventContractExecution): Uint8Array;
                toProtoMsg(message: _45.EventContractExecution): _45.EventContractExecutionProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            injective: {
                auction: {
                    v1beta1: _236.MsgClientImpl;
                };
                exchange: {
                    v1beta1: _237.MsgClientImpl;
                };
                insurance: {
                    v1beta1: _238.MsgClientImpl;
                };
                ocr: {
                    v1beta1: _239.MsgClientImpl;
                };
                oracle: {
                    v1beta1: _240.MsgClientImpl;
                };
                peggy: {
                    v1: _241.MsgClientImpl;
                };
                tokenfactory: {
                    v1beta1: _242.MsgClientImpl;
                };
                wasmx: {
                    v1: _243.MsgClientImpl;
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
            injective: {
                auction: {
                    v1beta1: {
                        auctionParams(request?: _2.QueryAuctionParamsRequest): Promise<_2.QueryAuctionParamsResponse>;
                        currentAuctionBasket(request?: _2.QueryCurrentAuctionBasketRequest): Promise<_2.QueryCurrentAuctionBasketResponse>;
                        auctionModuleState(request?: _2.QueryModuleStateRequest): Promise<_2.QueryModuleStateResponse>;
                    };
                };
                exchange: {
                    v1beta1: {
                        queryExchangeParams(request?: _9.QueryExchangeParamsRequest): Promise<_9.QueryExchangeParamsResponse>;
                        subaccountDeposits(request: _9.QuerySubaccountDepositsRequest): Promise<_9.QuerySubaccountDepositsResponse>;
                        subaccountDeposit(request: _9.QuerySubaccountDepositRequest): Promise<_9.QuerySubaccountDepositResponse>;
                        exchangeBalances(request?: _9.QueryExchangeBalancesRequest): Promise<_9.QueryExchangeBalancesResponse>;
                        aggregateVolume(request: _9.QueryAggregateVolumeRequest): Promise<_9.QueryAggregateVolumeResponse>;
                        aggregateVolumes(request: _9.QueryAggregateVolumesRequest): Promise<_9.QueryAggregateVolumesResponse>;
                        aggregateMarketVolume(request: _9.QueryAggregateMarketVolumeRequest): Promise<_9.QueryAggregateMarketVolumeResponse>;
                        aggregateMarketVolumes(request: _9.QueryAggregateMarketVolumesRequest): Promise<_9.QueryAggregateMarketVolumesResponse>;
                        denomDecimal(request: _9.QueryDenomDecimalRequest): Promise<_9.QueryDenomDecimalResponse>;
                        denomDecimals(request: _9.QueryDenomDecimalsRequest): Promise<_9.QueryDenomDecimalsResponse>;
                        spotMarkets(request: _9.QuerySpotMarketsRequest): Promise<_9.QuerySpotMarketsResponse>;
                        spotMarket(request: _9.QuerySpotMarketRequest): Promise<_9.QuerySpotMarketResponse>;
                        fullSpotMarkets(request: _9.QueryFullSpotMarketsRequest): Promise<_9.QueryFullSpotMarketsResponse>;
                        fullSpotMarket(request: _9.QueryFullSpotMarketRequest): Promise<_9.QueryFullSpotMarketResponse>;
                        spotOrderbook(request: _9.QuerySpotOrderbookRequest): Promise<_9.QuerySpotOrderbookResponse>;
                        traderSpotOrders(request: _9.QueryTraderSpotOrdersRequest): Promise<_9.QueryTraderSpotOrdersResponse>;
                        accountAddressSpotOrders(request: _9.QueryAccountAddressSpotOrdersRequest): Promise<_9.QueryAccountAddressSpotOrdersResponse>;
                        spotOrdersByHashes(request: _9.QuerySpotOrdersByHashesRequest): Promise<_9.QuerySpotOrdersByHashesResponse>;
                        subaccountOrders(request: _9.QuerySubaccountOrdersRequest): Promise<_9.QuerySubaccountOrdersResponse>;
                        traderSpotTransientOrders(request: _9.QueryTraderSpotOrdersRequest): Promise<_9.QueryTraderSpotOrdersResponse>;
                        spotMidPriceAndTOB(request: _9.QuerySpotMidPriceAndTOBRequest): Promise<_9.QuerySpotMidPriceAndTOBResponse>;
                        derivativeMidPriceAndTOB(request: _9.QueryDerivativeMidPriceAndTOBRequest): Promise<_9.QueryDerivativeMidPriceAndTOBResponse>;
                        derivativeOrderbook(request: _9.QueryDerivativeOrderbookRequest): Promise<_9.QueryDerivativeOrderbookResponse>;
                        traderDerivativeOrders(request: _9.QueryTraderDerivativeOrdersRequest): Promise<_9.QueryTraderDerivativeOrdersResponse>;
                        accountAddressDerivativeOrders(request: _9.QueryAccountAddressDerivativeOrdersRequest): Promise<_9.QueryAccountAddressDerivativeOrdersResponse>;
                        derivativeOrdersByHashes(request: _9.QueryDerivativeOrdersByHashesRequest): Promise<_9.QueryDerivativeOrdersByHashesResponse>;
                        traderDerivativeTransientOrders(request: _9.QueryTraderDerivativeOrdersRequest): Promise<_9.QueryTraderDerivativeOrdersResponse>;
                        derivativeMarkets(request: _9.QueryDerivativeMarketsRequest): Promise<_9.QueryDerivativeMarketsResponse>;
                        derivativeMarket(request: _9.QueryDerivativeMarketRequest): Promise<_9.QueryDerivativeMarketResponse>;
                        derivativeMarketAddress(request: _9.QueryDerivativeMarketAddressRequest): Promise<_9.QueryDerivativeMarketAddressResponse>;
                        subaccountTradeNonce(request: _9.QuerySubaccountTradeNonceRequest): Promise<_9.QuerySubaccountTradeNonceResponse>;
                        exchangeModuleState(request?: _9.QueryModuleStateRequest): Promise<_9.QueryModuleStateResponse>;
                        positions(request?: _9.QueryPositionsRequest): Promise<_9.QueryPositionsResponse>;
                        subaccountPositions(request: _9.QuerySubaccountPositionsRequest): Promise<_9.QuerySubaccountPositionsResponse>;
                        subaccountPositionInMarket(request: _9.QuerySubaccountPositionInMarketRequest): Promise<_9.QuerySubaccountPositionInMarketResponse>;
                        subaccountEffectivePositionInMarket(request: _9.QuerySubaccountEffectivePositionInMarketRequest): Promise<_9.QuerySubaccountEffectivePositionInMarketResponse>;
                        perpetualMarketInfo(request: _9.QueryPerpetualMarketInfoRequest): Promise<_9.QueryPerpetualMarketInfoResponse>;
                        expiryFuturesMarketInfo(request: _9.QueryExpiryFuturesMarketInfoRequest): Promise<_9.QueryExpiryFuturesMarketInfoResponse>;
                        perpetualMarketFunding(request: _9.QueryPerpetualMarketFundingRequest): Promise<_9.QueryPerpetualMarketFundingResponse>;
                        subaccountOrderMetadata(request: _9.QuerySubaccountOrderMetadataRequest): Promise<_9.QuerySubaccountOrderMetadataResponse>;
                        tradeRewardPoints(request: _9.QueryTradeRewardPointsRequest): Promise<_9.QueryTradeRewardPointsResponse>;
                        pendingTradeRewardPoints(request: _9.QueryTradeRewardPointsRequest): Promise<_9.QueryTradeRewardPointsResponse>;
                        tradeRewardCampaign(request?: _9.QueryTradeRewardCampaignRequest): Promise<_9.QueryTradeRewardCampaignResponse>;
                        feeDiscountAccountInfo(request: _9.QueryFeeDiscountAccountInfoRequest): Promise<_9.QueryFeeDiscountAccountInfoResponse>;
                        feeDiscountSchedule(request?: _9.QueryFeeDiscountScheduleRequest): Promise<_9.QueryFeeDiscountScheduleResponse>;
                        balanceMismatches(request: _9.QueryBalanceMismatchesRequest): Promise<_9.QueryBalanceMismatchesResponse>;
                        balanceWithBalanceHolds(request?: _9.QueryBalanceWithBalanceHoldsRequest): Promise<_9.QueryBalanceWithBalanceHoldsResponse>;
                        feeDiscountTierStatistics(request?: _9.QueryFeeDiscountTierStatisticsRequest): Promise<_9.QueryFeeDiscountTierStatisticsResponse>;
                        mitoVaultInfos(request?: _9.MitoVaultInfosRequest): Promise<_9.MitoVaultInfosResponse>;
                        queryMarketIDFromVault(request: _9.QueryMarketIDFromVaultRequest): Promise<_9.QueryMarketIDFromVaultResponse>;
                        historicalTradeRecords(request: _9.QueryHistoricalTradeRecordsRequest): Promise<_9.QueryHistoricalTradeRecordsResponse>;
                        isOptedOutOfRewards(request: _9.QueryIsOptedOutOfRewardsRequest): Promise<_9.QueryIsOptedOutOfRewardsResponse>;
                        optedOutOfRewardsAccounts(request?: _9.QueryOptedOutOfRewardsAccountsRequest): Promise<_9.QueryOptedOutOfRewardsAccountsResponse>;
                        marketVolatility(request: _9.QueryMarketVolatilityRequest): Promise<_9.QueryMarketVolatilityResponse>;
                        binaryOptionsMarkets(request: _9.QueryBinaryMarketsRequest): Promise<_9.QueryBinaryMarketsResponse>;
                        traderDerivativeConditionalOrders(request: _9.QueryTraderDerivativeConditionalOrdersRequest): Promise<_9.QueryTraderDerivativeConditionalOrdersResponse>;
                        marketAtomicExecutionFeeMultiplier(request: _9.QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<_9.QueryMarketAtomicExecutionFeeMultiplierResponse>;
                    };
                };
                insurance: {
                    v1beta1: {
                        insuranceParams(request?: _13.QueryInsuranceParamsRequest): Promise<_13.QueryInsuranceParamsResponse>;
                        insuranceFund(request: _13.QueryInsuranceFundRequest): Promise<_13.QueryInsuranceFundResponse>;
                        insuranceFunds(request?: _13.QueryInsuranceFundsRequest): Promise<_13.QueryInsuranceFundsResponse>;
                        estimatedRedemptions(request: _13.QueryEstimatedRedemptionsRequest): Promise<_13.QueryEstimatedRedemptionsResponse>;
                        pendingRedemptions(request: _13.QueryPendingRedemptionsRequest): Promise<_13.QueryPendingRedemptionsResponse>;
                        insuranceModuleState(request?: _13.QueryModuleStateRequest): Promise<_13.QueryModuleStateResponse>;
                    };
                };
                ocr: {
                    v1beta1: {
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        feedConfig(request: _17.QueryFeedConfigRequest): Promise<_17.QueryFeedConfigResponse>;
                        feedConfigInfo(request: _17.QueryFeedConfigInfoRequest): Promise<_17.QueryFeedConfigInfoResponse>;
                        latestRound(request: _17.QueryLatestRoundRequest): Promise<_17.QueryLatestRoundResponse>;
                        latestTransmissionDetails(request: _17.QueryLatestTransmissionDetailsRequest): Promise<_17.QueryLatestTransmissionDetailsResponse>;
                        owedAmount(request: _17.QueryOwedAmountRequest): Promise<_17.QueryOwedAmountResponse>;
                        ocrModuleState(request?: _17.QueryModuleStateRequest): Promise<_17.QueryModuleStateResponse>;
                    };
                };
                oracle: {
                    v1beta1: {
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        bandRelayers(request?: _23.QueryBandRelayersRequest): Promise<_23.QueryBandRelayersResponse>;
                        bandPriceStates(request?: _23.QueryBandPriceStatesRequest): Promise<_23.QueryBandPriceStatesResponse>;
                        bandIBCPriceStates(request?: _23.QueryBandIBCPriceStatesRequest): Promise<_23.QueryBandIBCPriceStatesResponse>;
                        priceFeedPriceStates(request?: _23.QueryPriceFeedPriceStatesRequest): Promise<_23.QueryPriceFeedPriceStatesResponse>;
                        coinbasePriceStates(request?: _23.QueryCoinbasePriceStatesRequest): Promise<_23.QueryCoinbasePriceStatesResponse>;
                        pythPriceStates(request?: _23.QueryPythPriceStatesRequest): Promise<_23.QueryPythPriceStatesResponse>;
                        providerPriceState(request: _23.QueryProviderPriceStateRequest): Promise<_23.QueryProviderPriceStateResponse>;
                        oracleModuleState(request?: _23.QueryModuleStateRequest): Promise<_23.QueryModuleStateResponse>;
                        historicalPriceRecords(request: _23.QueryHistoricalPriceRecordsRequest): Promise<_23.QueryHistoricalPriceRecordsResponse>;
                        oracleVolatility(request: _23.QueryOracleVolatilityRequest): Promise<_23.QueryOracleVolatilityResponse>;
                        oracleProvidersInfo(request?: _23.QueryOracleProvidersInfoRequest): Promise<_23.QueryOracleProvidersInfoResponse>;
                        oracleProviderPrices(request: _23.QueryOracleProviderPricesRequest): Promise<_23.QueryOracleProviderPricesResponse>;
                        oraclePrice(request: _23.QueryOraclePriceRequest): Promise<_23.QueryOraclePriceResponse>;
                        pythPrice(request: _23.QueryPythPriceRequest): Promise<_23.QueryPythPriceResponse>;
                    };
                };
                peggy: {
                    v1: {
                        params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        currentValset(request?: _34.QueryCurrentValsetRequest): Promise<_34.QueryCurrentValsetResponse>;
                        valsetRequest(request: _34.QueryValsetRequestRequest): Promise<_34.QueryValsetRequestResponse>;
                        valsetConfirm(request: _34.QueryValsetConfirmRequest): Promise<_34.QueryValsetConfirmResponse>;
                        valsetConfirmsByNonce(request: _34.QueryValsetConfirmsByNonceRequest): Promise<_34.QueryValsetConfirmsByNonceResponse>;
                        lastValsetRequests(request?: _34.QueryLastValsetRequestsRequest): Promise<_34.QueryLastValsetRequestsResponse>;
                        lastPendingValsetRequestByAddr(request: _34.QueryLastPendingValsetRequestByAddrRequest): Promise<_34.QueryLastPendingValsetRequestByAddrResponse>;
                        lastEventByAddr(request: _34.QueryLastEventByAddrRequest): Promise<_34.QueryLastEventByAddrResponse>;
                        getPendingSendToEth(request: _34.QueryPendingSendToEth): Promise<_34.QueryPendingSendToEthResponse>;
                        batchFees(request?: _34.QueryBatchFeeRequest): Promise<_34.QueryBatchFeeResponse>;
                        outgoingTxBatches(request?: _34.QueryOutgoingTxBatchesRequest): Promise<_34.QueryOutgoingTxBatchesResponse>;
                        lastPendingBatchRequestByAddr(request: _34.QueryLastPendingBatchRequestByAddrRequest): Promise<_34.QueryLastPendingBatchRequestByAddrResponse>;
                        batchRequestByNonce(request: _34.QueryBatchRequestByNonceRequest): Promise<_34.QueryBatchRequestByNonceResponse>;
                        batchConfirms(request: _34.QueryBatchConfirmsRequest): Promise<_34.QueryBatchConfirmsResponse>;
                        eRC20ToDenom(request: _34.QueryERC20ToDenomRequest): Promise<_34.QueryERC20ToDenomResponse>;
                        denomToERC20(request: _34.QueryDenomToERC20Request): Promise<_34.QueryDenomToERC20Response>;
                        getDelegateKeyByValidator(request: _34.QueryDelegateKeysByValidatorAddress): Promise<_34.QueryDelegateKeysByValidatorAddressResponse>;
                        getDelegateKeyByEth(request: _34.QueryDelegateKeysByEthAddress): Promise<_34.QueryDelegateKeysByEthAddressResponse>;
                        getDelegateKeyByOrchestrator(request: _34.QueryDelegateKeysByOrchestratorAddress): Promise<_34.QueryDelegateKeysByOrchestratorAddressResponse>;
                        peggyModuleState(request?: _34.QueryModuleStateRequest): Promise<_34.QueryModuleStateResponse>;
                        missingPeggoNonces(request?: _34.MissingNoncesRequest): Promise<_34.MissingNoncesResponse>;
                    };
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _40.QueryDenomAuthorityMetadataRequest): Promise<_40.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _40.QueryDenomsFromCreatorRequest): Promise<_40.QueryDenomsFromCreatorResponse>;
                        tokenfactoryModuleState(request?: _40.QueryModuleStateRequest): Promise<_40.QueryModuleStateResponse>;
                    };
                };
                wasmx: {
                    v1: {
                        wasmxParams(request?: _48.QueryWasmxParamsRequest): Promise<_48.QueryWasmxParamsResponse>;
                        contractRegistrationInfo(request: _48.QueryContractRegistrationInfoRequest): Promise<_48.QueryContractRegistrationInfoResponse>;
                        wasmxModuleState(request?: _48.QueryModuleStateRequest): Promise<_48.QueryModuleStateResponse>;
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
            injective: {
                auction: {
                    v1beta1: _220.LCDQueryClient;
                };
                exchange: {
                    v1beta1: _221.LCDQueryClient;
                };
                insurance: {
                    v1beta1: _222.LCDQueryClient;
                };
                ocr: {
                    v1beta1: _223.LCDQueryClient;
                };
                oracle: {
                    v1beta1: _224.LCDQueryClient;
                };
                peggy: {
                    v1: _225.LCDQueryClient;
                };
                tokenfactory: {
                    v1beta1: _226.LCDQueryClient;
                };
                wasmx: {
                    v1: _227.LCDQueryClient;
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
