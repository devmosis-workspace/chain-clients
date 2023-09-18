import * as _3 from "./v1/cork";
import * as _4 from "./v1/genesis";
import * as _5 from "./v1/proposal";
import * as _6 from "./v1/query";
import * as _7 from "./v1/tx";
import * as _117 from "./v1/query.lcd";
import * as _118 from "./v1/query.rpc.Query";
import * as _119 from "./v1/tx.rpc.msg";
export declare namespace cork {
    const v1: {
        MsgClientImpl: typeof _119.MsgClientImpl;
        QueryClientImpl: typeof _118.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            queryParams(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
            querySubmittedCorks(request?: _6.QuerySubmittedCorksRequest): Promise<_6.QuerySubmittedCorksResponse>;
            queryCommitPeriod(request?: _6.QueryCommitPeriodRequest): Promise<_6.QueryCommitPeriodResponse>;
            queryCellarIDs(request?: _6.QueryCellarIDsRequest): Promise<_6.QueryCellarIDsResponse>;
            queryScheduledCorks(request?: _6.QueryScheduledCorksRequest): Promise<_6.QueryScheduledCorksResponse>;
            queryScheduledBlockHeights(request?: _6.QueryScheduledBlockHeightsRequest): Promise<_6.QueryScheduledBlockHeightsResponse>;
            queryScheduledCorksByBlockHeight(request: _6.QueryScheduledCorksByBlockHeightRequest): Promise<_6.QueryScheduledCorksByBlockHeightResponse>;
        };
        LCDQueryClient: typeof _117.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                submitCork(value: _7.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                scheduleCork(value: _7.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                submitCork(value: _7.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _7.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _7.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _7.MsgScheduleCorkRequest;
                };
            };
            fromJSON: {
                submitCork(value: any): {
                    typeUrl: string;
                    value: _7.MsgSubmitCorkRequest;
                };
                scheduleCork(value: any): {
                    typeUrl: string;
                    value: _7.MsgScheduleCorkRequest;
                };
            };
            fromPartial: {
                submitCork(value: _7.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _7.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _7.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _7.MsgScheduleCorkRequest;
                };
            };
        };
        AminoConverter: {
            "/cork.v1.MsgSubmitCorkRequest": {
                aminoType: string;
                toAmino: (message: _7.MsgSubmitCorkRequest) => _7.MsgSubmitCorkRequestAmino;
                fromAmino: (object: _7.MsgSubmitCorkRequestAmino) => _7.MsgSubmitCorkRequest;
            };
            "/cork.v1.MsgScheduleCorkRequest": {
                aminoType: string;
                toAmino: (message: _7.MsgScheduleCorkRequest) => _7.MsgScheduleCorkRequestAmino;
                fromAmino: (object: _7.MsgScheduleCorkRequestAmino) => _7.MsgScheduleCorkRequest;
            };
        };
        MsgSubmitCorkRequest: {
            typeUrl: string;
            encode(message: _7.MsgSubmitCorkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.MsgSubmitCorkRequest;
            fromPartial(object: Partial<_7.MsgSubmitCorkRequest>): _7.MsgSubmitCorkRequest;
            fromAmino(object: _7.MsgSubmitCorkRequestAmino): _7.MsgSubmitCorkRequest;
            toAmino(message: _7.MsgSubmitCorkRequest): _7.MsgSubmitCorkRequestAmino;
            fromAminoMsg(object: _7.MsgSubmitCorkRequestAminoMsg): _7.MsgSubmitCorkRequest;
            fromProtoMsg(message: _7.MsgSubmitCorkRequestProtoMsg): _7.MsgSubmitCorkRequest;
            toProto(message: _7.MsgSubmitCorkRequest): Uint8Array;
            toProtoMsg(message: _7.MsgSubmitCorkRequest): _7.MsgSubmitCorkRequestProtoMsg;
        };
        MsgSubmitCorkResponse: {
            typeUrl: string;
            encode(_: _7.MsgSubmitCorkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _7.MsgSubmitCorkResponse;
            fromPartial(_: Partial<_7.MsgSubmitCorkResponse>): _7.MsgSubmitCorkResponse;
            fromAmino(_: _7.MsgSubmitCorkResponseAmino): _7.MsgSubmitCorkResponse;
            toAmino(_: _7.MsgSubmitCorkResponse): _7.MsgSubmitCorkResponseAmino;
            fromAminoMsg(object: _7.MsgSubmitCorkResponseAminoMsg): _7.MsgSubmitCorkResponse;
            fromProtoMsg(message: _7.MsgSubmitCorkResponseProtoMsg): _7.MsgSubmitCorkResponse;
            toProto(message: _7.MsgSubmitCorkResponse): Uint8Array;
            toProtoMsg(message: _7.MsgSubmitCorkResponse): _7.MsgSubmitCorkResponseProtoMsg;
        };
        MsgScheduleCorkRequest: {
            typeUrl: string;
            encode(message: _7.MsgScheduleCorkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.MsgScheduleCorkRequest;
            fromPartial(object: Partial<_7.MsgScheduleCorkRequest>): _7.MsgScheduleCorkRequest;
            fromAmino(object: _7.MsgScheduleCorkRequestAmino): _7.MsgScheduleCorkRequest;
            toAmino(message: _7.MsgScheduleCorkRequest): _7.MsgScheduleCorkRequestAmino;
            fromAminoMsg(object: _7.MsgScheduleCorkRequestAminoMsg): _7.MsgScheduleCorkRequest;
            fromProtoMsg(message: _7.MsgScheduleCorkRequestProtoMsg): _7.MsgScheduleCorkRequest;
            toProto(message: _7.MsgScheduleCorkRequest): Uint8Array;
            toProtoMsg(message: _7.MsgScheduleCorkRequest): _7.MsgScheduleCorkRequestProtoMsg;
        };
        MsgScheduleCorkResponse: {
            typeUrl: string;
            encode(_: _7.MsgScheduleCorkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _7.MsgScheduleCorkResponse;
            fromPartial(_: Partial<_7.MsgScheduleCorkResponse>): _7.MsgScheduleCorkResponse;
            fromAmino(_: _7.MsgScheduleCorkResponseAmino): _7.MsgScheduleCorkResponse;
            toAmino(_: _7.MsgScheduleCorkResponse): _7.MsgScheduleCorkResponseAmino;
            fromAminoMsg(object: _7.MsgScheduleCorkResponseAminoMsg): _7.MsgScheduleCorkResponse;
            fromProtoMsg(message: _7.MsgScheduleCorkResponseProtoMsg): _7.MsgScheduleCorkResponse;
            toProto(message: _7.MsgScheduleCorkResponse): Uint8Array;
            toProtoMsg(message: _7.MsgScheduleCorkResponse): _7.MsgScheduleCorkResponseProtoMsg;
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
        QuerySubmittedCorksRequest: {
            typeUrl: string;
            encode(_: _6.QuerySubmittedCorksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QuerySubmittedCorksRequest;
            fromPartial(_: Partial<_6.QuerySubmittedCorksRequest>): _6.QuerySubmittedCorksRequest;
            fromAmino(_: _6.QuerySubmittedCorksRequestAmino): _6.QuerySubmittedCorksRequest;
            toAmino(_: _6.QuerySubmittedCorksRequest): _6.QuerySubmittedCorksRequestAmino;
            fromAminoMsg(object: _6.QuerySubmittedCorksRequestAminoMsg): _6.QuerySubmittedCorksRequest;
            fromProtoMsg(message: _6.QuerySubmittedCorksRequestProtoMsg): _6.QuerySubmittedCorksRequest;
            toProto(message: _6.QuerySubmittedCorksRequest): Uint8Array;
            toProtoMsg(message: _6.QuerySubmittedCorksRequest): _6.QuerySubmittedCorksRequestProtoMsg;
        };
        QuerySubmittedCorksResponse: {
            typeUrl: string;
            encode(message: _6.QuerySubmittedCorksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QuerySubmittedCorksResponse;
            fromPartial(object: Partial<_6.QuerySubmittedCorksResponse>): _6.QuerySubmittedCorksResponse;
            fromAmino(object: _6.QuerySubmittedCorksResponseAmino): _6.QuerySubmittedCorksResponse;
            toAmino(message: _6.QuerySubmittedCorksResponse): _6.QuerySubmittedCorksResponseAmino;
            fromAminoMsg(object: _6.QuerySubmittedCorksResponseAminoMsg): _6.QuerySubmittedCorksResponse;
            fromProtoMsg(message: _6.QuerySubmittedCorksResponseProtoMsg): _6.QuerySubmittedCorksResponse;
            toProto(message: _6.QuerySubmittedCorksResponse): Uint8Array;
            toProtoMsg(message: _6.QuerySubmittedCorksResponse): _6.QuerySubmittedCorksResponseProtoMsg;
        };
        QueryCommitPeriodRequest: {
            typeUrl: string;
            encode(_: _6.QueryCommitPeriodRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryCommitPeriodRequest;
            fromPartial(_: Partial<_6.QueryCommitPeriodRequest>): _6.QueryCommitPeriodRequest;
            fromAmino(_: _6.QueryCommitPeriodRequestAmino): _6.QueryCommitPeriodRequest;
            toAmino(_: _6.QueryCommitPeriodRequest): _6.QueryCommitPeriodRequestAmino;
            fromAminoMsg(object: _6.QueryCommitPeriodRequestAminoMsg): _6.QueryCommitPeriodRequest;
            fromProtoMsg(message: _6.QueryCommitPeriodRequestProtoMsg): _6.QueryCommitPeriodRequest;
            toProto(message: _6.QueryCommitPeriodRequest): Uint8Array;
            toProtoMsg(message: _6.QueryCommitPeriodRequest): _6.QueryCommitPeriodRequestProtoMsg;
        };
        QueryCommitPeriodResponse: {
            typeUrl: string;
            encode(message: _6.QueryCommitPeriodResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryCommitPeriodResponse;
            fromPartial(object: Partial<_6.QueryCommitPeriodResponse>): _6.QueryCommitPeriodResponse;
            fromAmino(object: _6.QueryCommitPeriodResponseAmino): _6.QueryCommitPeriodResponse;
            toAmino(message: _6.QueryCommitPeriodResponse): _6.QueryCommitPeriodResponseAmino;
            fromAminoMsg(object: _6.QueryCommitPeriodResponseAminoMsg): _6.QueryCommitPeriodResponse;
            fromProtoMsg(message: _6.QueryCommitPeriodResponseProtoMsg): _6.QueryCommitPeriodResponse;
            toProto(message: _6.QueryCommitPeriodResponse): Uint8Array;
            toProtoMsg(message: _6.QueryCommitPeriodResponse): _6.QueryCommitPeriodResponseProtoMsg;
        };
        QueryCellarIDsRequest: {
            typeUrl: string;
            encode(_: _6.QueryCellarIDsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryCellarIDsRequest;
            fromPartial(_: Partial<_6.QueryCellarIDsRequest>): _6.QueryCellarIDsRequest;
            fromAmino(_: _6.QueryCellarIDsRequestAmino): _6.QueryCellarIDsRequest;
            toAmino(_: _6.QueryCellarIDsRequest): _6.QueryCellarIDsRequestAmino;
            fromAminoMsg(object: _6.QueryCellarIDsRequestAminoMsg): _6.QueryCellarIDsRequest;
            fromProtoMsg(message: _6.QueryCellarIDsRequestProtoMsg): _6.QueryCellarIDsRequest;
            toProto(message: _6.QueryCellarIDsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryCellarIDsRequest): _6.QueryCellarIDsRequestProtoMsg;
        };
        QueryCellarIDsResponse: {
            typeUrl: string;
            encode(message: _6.QueryCellarIDsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryCellarIDsResponse;
            fromPartial(object: Partial<_6.QueryCellarIDsResponse>): _6.QueryCellarIDsResponse;
            fromAmino(object: _6.QueryCellarIDsResponseAmino): _6.QueryCellarIDsResponse;
            toAmino(message: _6.QueryCellarIDsResponse): _6.QueryCellarIDsResponseAmino;
            fromAminoMsg(object: _6.QueryCellarIDsResponseAminoMsg): _6.QueryCellarIDsResponse;
            fromProtoMsg(message: _6.QueryCellarIDsResponseProtoMsg): _6.QueryCellarIDsResponse;
            toProto(message: _6.QueryCellarIDsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryCellarIDsResponse): _6.QueryCellarIDsResponseProtoMsg;
        };
        QueryScheduledCorksRequest: {
            typeUrl: string;
            encode(_: _6.QueryScheduledCorksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryScheduledCorksRequest;
            fromPartial(_: Partial<_6.QueryScheduledCorksRequest>): _6.QueryScheduledCorksRequest;
            fromAmino(_: _6.QueryScheduledCorksRequestAmino): _6.QueryScheduledCorksRequest;
            toAmino(_: _6.QueryScheduledCorksRequest): _6.QueryScheduledCorksRequestAmino;
            fromAminoMsg(object: _6.QueryScheduledCorksRequestAminoMsg): _6.QueryScheduledCorksRequest;
            fromProtoMsg(message: _6.QueryScheduledCorksRequestProtoMsg): _6.QueryScheduledCorksRequest;
            toProto(message: _6.QueryScheduledCorksRequest): Uint8Array;
            toProtoMsg(message: _6.QueryScheduledCorksRequest): _6.QueryScheduledCorksRequestProtoMsg;
        };
        QueryScheduledCorksResponse: {
            typeUrl: string;
            encode(message: _6.QueryScheduledCorksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryScheduledCorksResponse;
            fromPartial(object: Partial<_6.QueryScheduledCorksResponse>): _6.QueryScheduledCorksResponse;
            fromAmino(object: _6.QueryScheduledCorksResponseAmino): _6.QueryScheduledCorksResponse;
            toAmino(message: _6.QueryScheduledCorksResponse): _6.QueryScheduledCorksResponseAmino;
            fromAminoMsg(object: _6.QueryScheduledCorksResponseAminoMsg): _6.QueryScheduledCorksResponse;
            fromProtoMsg(message: _6.QueryScheduledCorksResponseProtoMsg): _6.QueryScheduledCorksResponse;
            toProto(message: _6.QueryScheduledCorksResponse): Uint8Array;
            toProtoMsg(message: _6.QueryScheduledCorksResponse): _6.QueryScheduledCorksResponseProtoMsg;
        };
        QueryScheduledBlockHeightsRequest: {
            typeUrl: string;
            encode(_: _6.QueryScheduledBlockHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryScheduledBlockHeightsRequest;
            fromPartial(_: Partial<_6.QueryScheduledBlockHeightsRequest>): _6.QueryScheduledBlockHeightsRequest;
            fromAmino(_: _6.QueryScheduledBlockHeightsRequestAmino): _6.QueryScheduledBlockHeightsRequest;
            toAmino(_: _6.QueryScheduledBlockHeightsRequest): _6.QueryScheduledBlockHeightsRequestAmino;
            fromAminoMsg(object: _6.QueryScheduledBlockHeightsRequestAminoMsg): _6.QueryScheduledBlockHeightsRequest;
            fromProtoMsg(message: _6.QueryScheduledBlockHeightsRequestProtoMsg): _6.QueryScheduledBlockHeightsRequest;
            toProto(message: _6.QueryScheduledBlockHeightsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryScheduledBlockHeightsRequest): _6.QueryScheduledBlockHeightsRequestProtoMsg;
        };
        QueryScheduledBlockHeightsResponse: {
            typeUrl: string;
            encode(message: _6.QueryScheduledBlockHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryScheduledBlockHeightsResponse;
            fromPartial(object: Partial<_6.QueryScheduledBlockHeightsResponse>): _6.QueryScheduledBlockHeightsResponse;
            fromAmino(object: _6.QueryScheduledBlockHeightsResponseAmino): _6.QueryScheduledBlockHeightsResponse;
            toAmino(message: _6.QueryScheduledBlockHeightsResponse): _6.QueryScheduledBlockHeightsResponseAmino;
            fromAminoMsg(object: _6.QueryScheduledBlockHeightsResponseAminoMsg): _6.QueryScheduledBlockHeightsResponse;
            fromProtoMsg(message: _6.QueryScheduledBlockHeightsResponseProtoMsg): _6.QueryScheduledBlockHeightsResponse;
            toProto(message: _6.QueryScheduledBlockHeightsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryScheduledBlockHeightsResponse): _6.QueryScheduledBlockHeightsResponseProtoMsg;
        };
        QueryScheduledCorksByBlockHeightRequest: {
            typeUrl: string;
            encode(message: _6.QueryScheduledCorksByBlockHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryScheduledCorksByBlockHeightRequest;
            fromPartial(object: Partial<_6.QueryScheduledCorksByBlockHeightRequest>): _6.QueryScheduledCorksByBlockHeightRequest;
            fromAmino(object: _6.QueryScheduledCorksByBlockHeightRequestAmino): _6.QueryScheduledCorksByBlockHeightRequest;
            toAmino(message: _6.QueryScheduledCorksByBlockHeightRequest): _6.QueryScheduledCorksByBlockHeightRequestAmino;
            fromAminoMsg(object: _6.QueryScheduledCorksByBlockHeightRequestAminoMsg): _6.QueryScheduledCorksByBlockHeightRequest;
            fromProtoMsg(message: _6.QueryScheduledCorksByBlockHeightRequestProtoMsg): _6.QueryScheduledCorksByBlockHeightRequest;
            toProto(message: _6.QueryScheduledCorksByBlockHeightRequest): Uint8Array;
            toProtoMsg(message: _6.QueryScheduledCorksByBlockHeightRequest): _6.QueryScheduledCorksByBlockHeightRequestProtoMsg;
        };
        QueryScheduledCorksByBlockHeightResponse: {
            typeUrl: string;
            encode(message: _6.QueryScheduledCorksByBlockHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryScheduledCorksByBlockHeightResponse;
            fromPartial(object: Partial<_6.QueryScheduledCorksByBlockHeightResponse>): _6.QueryScheduledCorksByBlockHeightResponse;
            fromAmino(object: _6.QueryScheduledCorksByBlockHeightResponseAmino): _6.QueryScheduledCorksByBlockHeightResponse;
            toAmino(message: _6.QueryScheduledCorksByBlockHeightResponse): _6.QueryScheduledCorksByBlockHeightResponseAmino;
            fromAminoMsg(object: _6.QueryScheduledCorksByBlockHeightResponseAminoMsg): _6.QueryScheduledCorksByBlockHeightResponse;
            fromProtoMsg(message: _6.QueryScheduledCorksByBlockHeightResponseProtoMsg): _6.QueryScheduledCorksByBlockHeightResponse;
            toProto(message: _6.QueryScheduledCorksByBlockHeightResponse): Uint8Array;
            toProtoMsg(message: _6.QueryScheduledCorksByBlockHeightResponse): _6.QueryScheduledCorksByBlockHeightResponseProtoMsg;
        };
        AddManagedCellarIDsProposal: {
            typeUrl: string;
            encode(message: _5.AddManagedCellarIDsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.AddManagedCellarIDsProposal;
            fromPartial(object: Partial<_5.AddManagedCellarIDsProposal>): _5.AddManagedCellarIDsProposal;
            fromAmino(object: _5.AddManagedCellarIDsProposalAmino): _5.AddManagedCellarIDsProposal;
            toAmino(message: _5.AddManagedCellarIDsProposal): _5.AddManagedCellarIDsProposalAmino;
            fromAminoMsg(object: _5.AddManagedCellarIDsProposalAminoMsg): _5.AddManagedCellarIDsProposal;
            fromProtoMsg(message: _5.AddManagedCellarIDsProposalProtoMsg): _5.AddManagedCellarIDsProposal;
            toProto(message: _5.AddManagedCellarIDsProposal): Uint8Array;
            toProtoMsg(message: _5.AddManagedCellarIDsProposal): _5.AddManagedCellarIDsProposalProtoMsg;
        };
        AddManagedCellarIDsProposalWithDeposit: {
            typeUrl: string;
            encode(message: _5.AddManagedCellarIDsProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.AddManagedCellarIDsProposalWithDeposit;
            fromPartial(object: Partial<_5.AddManagedCellarIDsProposalWithDeposit>): _5.AddManagedCellarIDsProposalWithDeposit;
            fromAmino(object: _5.AddManagedCellarIDsProposalWithDepositAmino): _5.AddManagedCellarIDsProposalWithDeposit;
            toAmino(message: _5.AddManagedCellarIDsProposalWithDeposit): _5.AddManagedCellarIDsProposalWithDepositAmino;
            fromAminoMsg(object: _5.AddManagedCellarIDsProposalWithDepositAminoMsg): _5.AddManagedCellarIDsProposalWithDeposit;
            fromProtoMsg(message: _5.AddManagedCellarIDsProposalWithDepositProtoMsg): _5.AddManagedCellarIDsProposalWithDeposit;
            toProto(message: _5.AddManagedCellarIDsProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _5.AddManagedCellarIDsProposalWithDeposit): _5.AddManagedCellarIDsProposalWithDepositProtoMsg;
        };
        RemoveManagedCellarIDsProposal: {
            typeUrl: string;
            encode(message: _5.RemoveManagedCellarIDsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.RemoveManagedCellarIDsProposal;
            fromPartial(object: Partial<_5.RemoveManagedCellarIDsProposal>): _5.RemoveManagedCellarIDsProposal;
            fromAmino(object: _5.RemoveManagedCellarIDsProposalAmino): _5.RemoveManagedCellarIDsProposal;
            toAmino(message: _5.RemoveManagedCellarIDsProposal): _5.RemoveManagedCellarIDsProposalAmino;
            fromAminoMsg(object: _5.RemoveManagedCellarIDsProposalAminoMsg): _5.RemoveManagedCellarIDsProposal;
            fromProtoMsg(message: _5.RemoveManagedCellarIDsProposalProtoMsg): _5.RemoveManagedCellarIDsProposal;
            toProto(message: _5.RemoveManagedCellarIDsProposal): Uint8Array;
            toProtoMsg(message: _5.RemoveManagedCellarIDsProposal): _5.RemoveManagedCellarIDsProposalProtoMsg;
        };
        RemoveManagedCellarIDsProposalWithDeposit: {
            typeUrl: string;
            encode(message: _5.RemoveManagedCellarIDsProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.RemoveManagedCellarIDsProposalWithDeposit;
            fromPartial(object: Partial<_5.RemoveManagedCellarIDsProposalWithDeposit>): _5.RemoveManagedCellarIDsProposalWithDeposit;
            fromAmino(object: _5.RemoveManagedCellarIDsProposalWithDepositAmino): _5.RemoveManagedCellarIDsProposalWithDeposit;
            toAmino(message: _5.RemoveManagedCellarIDsProposalWithDeposit): _5.RemoveManagedCellarIDsProposalWithDepositAmino;
            fromAminoMsg(object: _5.RemoveManagedCellarIDsProposalWithDepositAminoMsg): _5.RemoveManagedCellarIDsProposalWithDeposit;
            fromProtoMsg(message: _5.RemoveManagedCellarIDsProposalWithDepositProtoMsg): _5.RemoveManagedCellarIDsProposalWithDeposit;
            toProto(message: _5.RemoveManagedCellarIDsProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _5.RemoveManagedCellarIDsProposalWithDeposit): _5.RemoveManagedCellarIDsProposalWithDepositProtoMsg;
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
        Cork: {
            typeUrl: string;
            encode(message: _3.Cork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.Cork;
            fromPartial(object: Partial<_3.Cork>): _3.Cork;
            fromAmino(object: _3.CorkAmino): _3.Cork;
            toAmino(message: _3.Cork): _3.CorkAmino;
            fromAminoMsg(object: _3.CorkAminoMsg): _3.Cork;
            fromProtoMsg(message: _3.CorkProtoMsg): _3.Cork;
            toProto(message: _3.Cork): Uint8Array;
            toProtoMsg(message: _3.Cork): _3.CorkProtoMsg;
        };
        ValidatorCork: {
            typeUrl: string;
            encode(message: _3.ValidatorCork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.ValidatorCork;
            fromPartial(object: Partial<_3.ValidatorCork>): _3.ValidatorCork;
            fromAmino(object: _3.ValidatorCorkAmino): _3.ValidatorCork;
            toAmino(message: _3.ValidatorCork): _3.ValidatorCorkAmino;
            fromAminoMsg(object: _3.ValidatorCorkAminoMsg): _3.ValidatorCork;
            fromProtoMsg(message: _3.ValidatorCorkProtoMsg): _3.ValidatorCork;
            toProto(message: _3.ValidatorCork): Uint8Array;
            toProtoMsg(message: _3.ValidatorCork): _3.ValidatorCorkProtoMsg;
        };
        ScheduledCork: {
            typeUrl: string;
            encode(message: _3.ScheduledCork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.ScheduledCork;
            fromPartial(object: Partial<_3.ScheduledCork>): _3.ScheduledCork;
            fromAmino(object: _3.ScheduledCorkAmino): _3.ScheduledCork;
            toAmino(message: _3.ScheduledCork): _3.ScheduledCorkAmino;
            fromAminoMsg(object: _3.ScheduledCorkAminoMsg): _3.ScheduledCork;
            fromProtoMsg(message: _3.ScheduledCorkProtoMsg): _3.ScheduledCork;
            toProto(message: _3.ScheduledCork): Uint8Array;
            toProtoMsg(message: _3.ScheduledCork): _3.ScheduledCorkProtoMsg;
        };
        CellarIDSet: {
            typeUrl: string;
            encode(message: _3.CellarIDSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.CellarIDSet;
            fromPartial(object: Partial<_3.CellarIDSet>): _3.CellarIDSet;
            fromAmino(object: _3.CellarIDSetAmino): _3.CellarIDSet;
            toAmino(message: _3.CellarIDSet): _3.CellarIDSetAmino;
            fromAminoMsg(object: _3.CellarIDSetAminoMsg): _3.CellarIDSet;
            fromProtoMsg(message: _3.CellarIDSetProtoMsg): _3.CellarIDSet;
            toProto(message: _3.CellarIDSet): Uint8Array;
            toProtoMsg(message: _3.CellarIDSet): _3.CellarIDSetProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cork: {
                v1: _119.MsgClientImpl;
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
            cork: {
                v1: {
                    queryParams(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                    querySubmittedCorks(request?: _6.QuerySubmittedCorksRequest): Promise<_6.QuerySubmittedCorksResponse>;
                    queryCommitPeriod(request?: _6.QueryCommitPeriodRequest): Promise<_6.QueryCommitPeriodResponse>;
                    queryCellarIDs(request?: _6.QueryCellarIDsRequest): Promise<_6.QueryCellarIDsResponse>;
                    queryScheduledCorks(request?: _6.QueryScheduledCorksRequest): Promise<_6.QueryScheduledCorksResponse>;
                    queryScheduledBlockHeights(request?: _6.QueryScheduledBlockHeightsRequest): Promise<_6.QueryScheduledBlockHeightsResponse>;
                    queryScheduledCorksByBlockHeight(request: _6.QueryScheduledCorksByBlockHeightRequest): Promise<_6.QueryScheduledCorksByBlockHeightResponse>;
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
            cork: {
                v1: _117.LCDQueryClient;
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
