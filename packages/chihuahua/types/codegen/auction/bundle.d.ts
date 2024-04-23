import * as _0 from "./v1/auction";
import * as _1 from "./v1/genesis";
import * as _2 from "./v1/proposal";
import * as _3 from "./v1/query";
import * as _4 from "./v1/tx";
import * as _145 from "./v1/query.lcd";
import * as _146 from "./v1/query.rpc.Query";
import * as _147 from "./v1/tx.rpc.msg";
export declare namespace auction {
    const v1: {
        MsgClientImpl: typeof _147.MsgClientImpl;
        QueryClientImpl: typeof _146.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            queryParams(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
            queryActiveAuction(request: _3.QueryActiveAuctionRequest): Promise<_3.QueryActiveAuctionResponse>;
            queryEndedAuction(request: _3.QueryEndedAuctionRequest): Promise<_3.QueryEndedAuctionResponse>;
            queryActiveAuctions(request?: _3.QueryActiveAuctionsRequest): Promise<_3.QueryActiveAuctionsResponse>;
            queryEndedAuctions(request?: _3.QueryEndedAuctionsRequest): Promise<_3.QueryEndedAuctionsResponse>;
            queryBid(request: _3.QueryBidRequest): Promise<_3.QueryBidResponse>;
            queryBidsByAuction(request: _3.QueryBidsByAuctionRequest): Promise<_3.QueryBidsByAuctionResponse>;
            queryTokenPrice(request: _3.QueryTokenPriceRequest): Promise<_3.QueryTokenPriceResponse>;
            queryTokenPrices(request?: _3.QueryTokenPricesRequest): Promise<_3.QueryTokenPricesResponse>;
        };
        LCDQueryClient: typeof _145.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                submitBid(value: _4.MsgSubmitBidRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                submitBid(value: _4.MsgSubmitBidRequest): {
                    typeUrl: string;
                    value: _4.MsgSubmitBidRequest;
                };
            };
            fromJSON: {
                submitBid(value: any): {
                    typeUrl: string;
                    value: _4.MsgSubmitBidRequest;
                };
            };
            fromPartial: {
                submitBid(value: _4.MsgSubmitBidRequest): {
                    typeUrl: string;
                    value: _4.MsgSubmitBidRequest;
                };
            };
        };
        AminoConverter: {
            "/auction.v1.MsgSubmitBidRequest": {
                aminoType: string;
                toAmino: (message: _4.MsgSubmitBidRequest) => _4.MsgSubmitBidRequestAmino;
                fromAmino: (object: _4.MsgSubmitBidRequestAmino) => _4.MsgSubmitBidRequest;
            };
        };
        MsgSubmitBidRequest: {
            typeUrl: string;
            encode(message: _4.MsgSubmitBidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgSubmitBidRequest;
            fromPartial(object: Partial<_4.MsgSubmitBidRequest>): _4.MsgSubmitBidRequest;
            fromAmino(object: _4.MsgSubmitBidRequestAmino): _4.MsgSubmitBidRequest;
            toAmino(message: _4.MsgSubmitBidRequest): _4.MsgSubmitBidRequestAmino;
            fromAminoMsg(object: _4.MsgSubmitBidRequestAminoMsg): _4.MsgSubmitBidRequest;
            fromProtoMsg(message: _4.MsgSubmitBidRequestProtoMsg): _4.MsgSubmitBidRequest;
            toProto(message: _4.MsgSubmitBidRequest): Uint8Array;
            toProtoMsg(message: _4.MsgSubmitBidRequest): _4.MsgSubmitBidRequestProtoMsg;
        };
        MsgSubmitBidResponse: {
            typeUrl: string;
            encode(message: _4.MsgSubmitBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgSubmitBidResponse;
            fromPartial(object: Partial<_4.MsgSubmitBidResponse>): _4.MsgSubmitBidResponse;
            fromAmino(object: _4.MsgSubmitBidResponseAmino): _4.MsgSubmitBidResponse;
            toAmino(message: _4.MsgSubmitBidResponse): _4.MsgSubmitBidResponseAmino;
            fromAminoMsg(object: _4.MsgSubmitBidResponseAminoMsg): _4.MsgSubmitBidResponse;
            fromProtoMsg(message: _4.MsgSubmitBidResponseProtoMsg): _4.MsgSubmitBidResponse;
            toProto(message: _4.MsgSubmitBidResponse): Uint8Array;
            toProtoMsg(message: _4.MsgSubmitBidResponse): _4.MsgSubmitBidResponseProtoMsg;
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
        QueryActiveAuctionRequest: {
            typeUrl: string;
            encode(message: _3.QueryActiveAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryActiveAuctionRequest;
            fromPartial(object: Partial<_3.QueryActiveAuctionRequest>): _3.QueryActiveAuctionRequest;
            fromAmino(object: _3.QueryActiveAuctionRequestAmino): _3.QueryActiveAuctionRequest;
            toAmino(message: _3.QueryActiveAuctionRequest): _3.QueryActiveAuctionRequestAmino;
            fromAminoMsg(object: _3.QueryActiveAuctionRequestAminoMsg): _3.QueryActiveAuctionRequest;
            fromProtoMsg(message: _3.QueryActiveAuctionRequestProtoMsg): _3.QueryActiveAuctionRequest;
            toProto(message: _3.QueryActiveAuctionRequest): Uint8Array;
            toProtoMsg(message: _3.QueryActiveAuctionRequest): _3.QueryActiveAuctionRequestProtoMsg;
        };
        QueryActiveAuctionResponse: {
            typeUrl: string;
            encode(message: _3.QueryActiveAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryActiveAuctionResponse;
            fromPartial(object: Partial<_3.QueryActiveAuctionResponse>): _3.QueryActiveAuctionResponse;
            fromAmino(object: _3.QueryActiveAuctionResponseAmino): _3.QueryActiveAuctionResponse;
            toAmino(message: _3.QueryActiveAuctionResponse): _3.QueryActiveAuctionResponseAmino;
            fromAminoMsg(object: _3.QueryActiveAuctionResponseAminoMsg): _3.QueryActiveAuctionResponse;
            fromProtoMsg(message: _3.QueryActiveAuctionResponseProtoMsg): _3.QueryActiveAuctionResponse;
            toProto(message: _3.QueryActiveAuctionResponse): Uint8Array;
            toProtoMsg(message: _3.QueryActiveAuctionResponse): _3.QueryActiveAuctionResponseProtoMsg;
        };
        QueryEndedAuctionRequest: {
            typeUrl: string;
            encode(message: _3.QueryEndedAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryEndedAuctionRequest;
            fromPartial(object: Partial<_3.QueryEndedAuctionRequest>): _3.QueryEndedAuctionRequest;
            fromAmino(object: _3.QueryEndedAuctionRequestAmino): _3.QueryEndedAuctionRequest;
            toAmino(message: _3.QueryEndedAuctionRequest): _3.QueryEndedAuctionRequestAmino;
            fromAminoMsg(object: _3.QueryEndedAuctionRequestAminoMsg): _3.QueryEndedAuctionRequest;
            fromProtoMsg(message: _3.QueryEndedAuctionRequestProtoMsg): _3.QueryEndedAuctionRequest;
            toProto(message: _3.QueryEndedAuctionRequest): Uint8Array;
            toProtoMsg(message: _3.QueryEndedAuctionRequest): _3.QueryEndedAuctionRequestProtoMsg;
        };
        QueryEndedAuctionResponse: {
            typeUrl: string;
            encode(message: _3.QueryEndedAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryEndedAuctionResponse;
            fromPartial(object: Partial<_3.QueryEndedAuctionResponse>): _3.QueryEndedAuctionResponse;
            fromAmino(object: _3.QueryEndedAuctionResponseAmino): _3.QueryEndedAuctionResponse;
            toAmino(message: _3.QueryEndedAuctionResponse): _3.QueryEndedAuctionResponseAmino;
            fromAminoMsg(object: _3.QueryEndedAuctionResponseAminoMsg): _3.QueryEndedAuctionResponse;
            fromProtoMsg(message: _3.QueryEndedAuctionResponseProtoMsg): _3.QueryEndedAuctionResponse;
            toProto(message: _3.QueryEndedAuctionResponse): Uint8Array;
            toProtoMsg(message: _3.QueryEndedAuctionResponse): _3.QueryEndedAuctionResponseProtoMsg;
        };
        QueryActiveAuctionsRequest: {
            typeUrl: string;
            encode(_: _3.QueryActiveAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.QueryActiveAuctionsRequest;
            fromPartial(_: Partial<_3.QueryActiveAuctionsRequest>): _3.QueryActiveAuctionsRequest;
            fromAmino(_: _3.QueryActiveAuctionsRequestAmino): _3.QueryActiveAuctionsRequest;
            toAmino(_: _3.QueryActiveAuctionsRequest): _3.QueryActiveAuctionsRequestAmino;
            fromAminoMsg(object: _3.QueryActiveAuctionsRequestAminoMsg): _3.QueryActiveAuctionsRequest;
            fromProtoMsg(message: _3.QueryActiveAuctionsRequestProtoMsg): _3.QueryActiveAuctionsRequest;
            toProto(message: _3.QueryActiveAuctionsRequest): Uint8Array;
            toProtoMsg(message: _3.QueryActiveAuctionsRequest): _3.QueryActiveAuctionsRequestProtoMsg;
        };
        QueryActiveAuctionsResponse: {
            typeUrl: string;
            encode(message: _3.QueryActiveAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryActiveAuctionsResponse;
            fromPartial(object: Partial<_3.QueryActiveAuctionsResponse>): _3.QueryActiveAuctionsResponse;
            fromAmino(object: _3.QueryActiveAuctionsResponseAmino): _3.QueryActiveAuctionsResponse;
            toAmino(message: _3.QueryActiveAuctionsResponse): _3.QueryActiveAuctionsResponseAmino;
            fromAminoMsg(object: _3.QueryActiveAuctionsResponseAminoMsg): _3.QueryActiveAuctionsResponse;
            fromProtoMsg(message: _3.QueryActiveAuctionsResponseProtoMsg): _3.QueryActiveAuctionsResponse;
            toProto(message: _3.QueryActiveAuctionsResponse): Uint8Array;
            toProtoMsg(message: _3.QueryActiveAuctionsResponse): _3.QueryActiveAuctionsResponseProtoMsg;
        };
        QueryEndedAuctionsRequest: {
            typeUrl: string;
            encode(message: _3.QueryEndedAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryEndedAuctionsRequest;
            fromPartial(object: Partial<_3.QueryEndedAuctionsRequest>): _3.QueryEndedAuctionsRequest;
            fromAmino(object: _3.QueryEndedAuctionsRequestAmino): _3.QueryEndedAuctionsRequest;
            toAmino(message: _3.QueryEndedAuctionsRequest): _3.QueryEndedAuctionsRequestAmino;
            fromAminoMsg(object: _3.QueryEndedAuctionsRequestAminoMsg): _3.QueryEndedAuctionsRequest;
            fromProtoMsg(message: _3.QueryEndedAuctionsRequestProtoMsg): _3.QueryEndedAuctionsRequest;
            toProto(message: _3.QueryEndedAuctionsRequest): Uint8Array;
            toProtoMsg(message: _3.QueryEndedAuctionsRequest): _3.QueryEndedAuctionsRequestProtoMsg;
        };
        QueryEndedAuctionsResponse: {
            typeUrl: string;
            encode(message: _3.QueryEndedAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryEndedAuctionsResponse;
            fromPartial(object: Partial<_3.QueryEndedAuctionsResponse>): _3.QueryEndedAuctionsResponse;
            fromAmino(object: _3.QueryEndedAuctionsResponseAmino): _3.QueryEndedAuctionsResponse;
            toAmino(message: _3.QueryEndedAuctionsResponse): _3.QueryEndedAuctionsResponseAmino;
            fromAminoMsg(object: _3.QueryEndedAuctionsResponseAminoMsg): _3.QueryEndedAuctionsResponse;
            fromProtoMsg(message: _3.QueryEndedAuctionsResponseProtoMsg): _3.QueryEndedAuctionsResponse;
            toProto(message: _3.QueryEndedAuctionsResponse): Uint8Array;
            toProtoMsg(message: _3.QueryEndedAuctionsResponse): _3.QueryEndedAuctionsResponseProtoMsg;
        };
        QueryBidRequest: {
            typeUrl: string;
            encode(message: _3.QueryBidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryBidRequest;
            fromPartial(object: Partial<_3.QueryBidRequest>): _3.QueryBidRequest;
            fromAmino(object: _3.QueryBidRequestAmino): _3.QueryBidRequest;
            toAmino(message: _3.QueryBidRequest): _3.QueryBidRequestAmino;
            fromAminoMsg(object: _3.QueryBidRequestAminoMsg): _3.QueryBidRequest;
            fromProtoMsg(message: _3.QueryBidRequestProtoMsg): _3.QueryBidRequest;
            toProto(message: _3.QueryBidRequest): Uint8Array;
            toProtoMsg(message: _3.QueryBidRequest): _3.QueryBidRequestProtoMsg;
        };
        QueryBidResponse: {
            typeUrl: string;
            encode(message: _3.QueryBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryBidResponse;
            fromPartial(object: Partial<_3.QueryBidResponse>): _3.QueryBidResponse;
            fromAmino(object: _3.QueryBidResponseAmino): _3.QueryBidResponse;
            toAmino(message: _3.QueryBidResponse): _3.QueryBidResponseAmino;
            fromAminoMsg(object: _3.QueryBidResponseAminoMsg): _3.QueryBidResponse;
            fromProtoMsg(message: _3.QueryBidResponseProtoMsg): _3.QueryBidResponse;
            toProto(message: _3.QueryBidResponse): Uint8Array;
            toProtoMsg(message: _3.QueryBidResponse): _3.QueryBidResponseProtoMsg;
        };
        QueryBidsByAuctionRequest: {
            typeUrl: string;
            encode(message: _3.QueryBidsByAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryBidsByAuctionRequest;
            fromPartial(object: Partial<_3.QueryBidsByAuctionRequest>): _3.QueryBidsByAuctionRequest;
            fromAmino(object: _3.QueryBidsByAuctionRequestAmino): _3.QueryBidsByAuctionRequest;
            toAmino(message: _3.QueryBidsByAuctionRequest): _3.QueryBidsByAuctionRequestAmino;
            fromAminoMsg(object: _3.QueryBidsByAuctionRequestAminoMsg): _3.QueryBidsByAuctionRequest;
            fromProtoMsg(message: _3.QueryBidsByAuctionRequestProtoMsg): _3.QueryBidsByAuctionRequest;
            toProto(message: _3.QueryBidsByAuctionRequest): Uint8Array;
            toProtoMsg(message: _3.QueryBidsByAuctionRequest): _3.QueryBidsByAuctionRequestProtoMsg;
        };
        QueryBidsByAuctionResponse: {
            typeUrl: string;
            encode(message: _3.QueryBidsByAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryBidsByAuctionResponse;
            fromPartial(object: Partial<_3.QueryBidsByAuctionResponse>): _3.QueryBidsByAuctionResponse;
            fromAmino(object: _3.QueryBidsByAuctionResponseAmino): _3.QueryBidsByAuctionResponse;
            toAmino(message: _3.QueryBidsByAuctionResponse): _3.QueryBidsByAuctionResponseAmino;
            fromAminoMsg(object: _3.QueryBidsByAuctionResponseAminoMsg): _3.QueryBidsByAuctionResponse;
            fromProtoMsg(message: _3.QueryBidsByAuctionResponseProtoMsg): _3.QueryBidsByAuctionResponse;
            toProto(message: _3.QueryBidsByAuctionResponse): Uint8Array;
            toProtoMsg(message: _3.QueryBidsByAuctionResponse): _3.QueryBidsByAuctionResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _3.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryTokenPriceRequest;
            fromPartial(object: Partial<_3.QueryTokenPriceRequest>): _3.QueryTokenPriceRequest;
            fromAmino(object: _3.QueryTokenPriceRequestAmino): _3.QueryTokenPriceRequest;
            toAmino(message: _3.QueryTokenPriceRequest): _3.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _3.QueryTokenPriceRequestAminoMsg): _3.QueryTokenPriceRequest;
            fromProtoMsg(message: _3.QueryTokenPriceRequestProtoMsg): _3.QueryTokenPriceRequest;
            toProto(message: _3.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _3.QueryTokenPriceRequest): _3.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPriceResponse: {
            typeUrl: string;
            encode(message: _3.QueryTokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryTokenPriceResponse;
            fromPartial(object: Partial<_3.QueryTokenPriceResponse>): _3.QueryTokenPriceResponse;
            fromAmino(object: _3.QueryTokenPriceResponseAmino): _3.QueryTokenPriceResponse;
            toAmino(message: _3.QueryTokenPriceResponse): _3.QueryTokenPriceResponseAmino;
            fromAminoMsg(object: _3.QueryTokenPriceResponseAminoMsg): _3.QueryTokenPriceResponse;
            fromProtoMsg(message: _3.QueryTokenPriceResponseProtoMsg): _3.QueryTokenPriceResponse;
            toProto(message: _3.QueryTokenPriceResponse): Uint8Array;
            toProtoMsg(message: _3.QueryTokenPriceResponse): _3.QueryTokenPriceResponseProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(_: _3.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _3.QueryTokenPricesRequest;
            fromPartial(_: Partial<_3.QueryTokenPricesRequest>): _3.QueryTokenPricesRequest;
            fromAmino(_: _3.QueryTokenPricesRequestAmino): _3.QueryTokenPricesRequest;
            toAmino(_: _3.QueryTokenPricesRequest): _3.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _3.QueryTokenPricesRequestAminoMsg): _3.QueryTokenPricesRequest;
            fromProtoMsg(message: _3.QueryTokenPricesRequestProtoMsg): _3.QueryTokenPricesRequest;
            toProto(message: _3.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _3.QueryTokenPricesRequest): _3.QueryTokenPricesRequestProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _3.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryTokenPricesResponse;
            fromPartial(object: Partial<_3.QueryTokenPricesResponse>): _3.QueryTokenPricesResponse;
            fromAmino(object: _3.QueryTokenPricesResponseAmino): _3.QueryTokenPricesResponse;
            toAmino(message: _3.QueryTokenPricesResponse): _3.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _3.QueryTokenPricesResponseAminoMsg): _3.QueryTokenPricesResponse;
            fromProtoMsg(message: _3.QueryTokenPricesResponseProtoMsg): _3.QueryTokenPricesResponse;
            toProto(message: _3.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _3.QueryTokenPricesResponse): _3.QueryTokenPricesResponseProtoMsg;
        };
        SetTokenPricesProposal: {
            typeUrl: string;
            encode(message: _2.SetTokenPricesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.SetTokenPricesProposal;
            fromPartial(object: Partial<_2.SetTokenPricesProposal>): _2.SetTokenPricesProposal;
            fromAmino(object: _2.SetTokenPricesProposalAmino): _2.SetTokenPricesProposal;
            toAmino(message: _2.SetTokenPricesProposal): _2.SetTokenPricesProposalAmino;
            fromAminoMsg(object: _2.SetTokenPricesProposalAminoMsg): _2.SetTokenPricesProposal;
            fromProtoMsg(message: _2.SetTokenPricesProposalProtoMsg): _2.SetTokenPricesProposal;
            toProto(message: _2.SetTokenPricesProposal): Uint8Array;
            toProtoMsg(message: _2.SetTokenPricesProposal): _2.SetTokenPricesProposalProtoMsg;
        };
        SetTokenPricesProposalWithDeposit: {
            typeUrl: string;
            encode(message: _2.SetTokenPricesProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.SetTokenPricesProposalWithDeposit;
            fromPartial(object: Partial<_2.SetTokenPricesProposalWithDeposit>): _2.SetTokenPricesProposalWithDeposit;
            fromAmino(object: _2.SetTokenPricesProposalWithDepositAmino): _2.SetTokenPricesProposalWithDeposit;
            toAmino(message: _2.SetTokenPricesProposalWithDeposit): _2.SetTokenPricesProposalWithDepositAmino;
            fromAminoMsg(object: _2.SetTokenPricesProposalWithDepositAminoMsg): _2.SetTokenPricesProposalWithDeposit;
            fromProtoMsg(message: _2.SetTokenPricesProposalWithDepositProtoMsg): _2.SetTokenPricesProposalWithDeposit;
            toProto(message: _2.SetTokenPricesProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _2.SetTokenPricesProposalWithDeposit): _2.SetTokenPricesProposalWithDepositProtoMsg;
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
        Auction: {
            typeUrl: string;
            encode(message: _0.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.Auction;
            fromPartial(object: Partial<_0.Auction>): _0.Auction;
            fromAmino(object: _0.AuctionAmino): _0.Auction;
            toAmino(message: _0.Auction): _0.AuctionAmino;
            fromAminoMsg(object: _0.AuctionAminoMsg): _0.Auction;
            fromProtoMsg(message: _0.AuctionProtoMsg): _0.Auction;
            toProto(message: _0.Auction): Uint8Array;
            toProtoMsg(message: _0.Auction): _0.AuctionProtoMsg;
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
        TokenPrice: {
            typeUrl: string;
            encode(message: _0.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.TokenPrice;
            fromPartial(object: Partial<_0.TokenPrice>): _0.TokenPrice;
            fromAmino(object: _0.TokenPriceAmino): _0.TokenPrice;
            toAmino(message: _0.TokenPrice): _0.TokenPriceAmino;
            fromAminoMsg(object: _0.TokenPriceAminoMsg): _0.TokenPrice;
            fromProtoMsg(message: _0.TokenPriceProtoMsg): _0.TokenPrice;
            toProto(message: _0.TokenPrice): Uint8Array;
            toProtoMsg(message: _0.TokenPrice): _0.TokenPriceProtoMsg;
        };
        ProposedTokenPrice: {
            typeUrl: string;
            encode(message: _0.ProposedTokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.ProposedTokenPrice;
            fromPartial(object: Partial<_0.ProposedTokenPrice>): _0.ProposedTokenPrice;
            fromAmino(object: _0.ProposedTokenPriceAmino): _0.ProposedTokenPrice;
            toAmino(message: _0.ProposedTokenPrice): _0.ProposedTokenPriceAmino;
            fromAminoMsg(object: _0.ProposedTokenPriceAminoMsg): _0.ProposedTokenPrice;
            fromProtoMsg(message: _0.ProposedTokenPriceProtoMsg): _0.ProposedTokenPrice;
            toProto(message: _0.ProposedTokenPrice): Uint8Array;
            toProtoMsg(message: _0.ProposedTokenPrice): _0.ProposedTokenPriceProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            auction: {
                v1: _147.MsgClientImpl;
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
            auction: {
                v1: {
                    queryParams(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    queryActiveAuction(request: _3.QueryActiveAuctionRequest): Promise<_3.QueryActiveAuctionResponse>;
                    queryEndedAuction(request: _3.QueryEndedAuctionRequest): Promise<_3.QueryEndedAuctionResponse>;
                    queryActiveAuctions(request?: _3.QueryActiveAuctionsRequest): Promise<_3.QueryActiveAuctionsResponse>;
                    queryEndedAuctions(request?: _3.QueryEndedAuctionsRequest): Promise<_3.QueryEndedAuctionsResponse>;
                    queryBid(request: _3.QueryBidRequest): Promise<_3.QueryBidResponse>;
                    queryBidsByAuction(request: _3.QueryBidsByAuctionRequest): Promise<_3.QueryBidsByAuctionResponse>;
                    queryTokenPrice(request: _3.QueryTokenPriceRequest): Promise<_3.QueryTokenPriceResponse>;
                    queryTokenPrices(request?: _3.QueryTokenPricesRequest): Promise<_3.QueryTokenPricesResponse>;
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
            auction: {
                v1: _145.LCDQueryClient;
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
