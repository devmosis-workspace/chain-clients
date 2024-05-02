import * as _136 from "./builder/v1/genesis";
import * as _137 from "./builder/v1/tx";
import * as _270 from "./builder/v1/tx.rpc.msg";
export declare namespace pob {
    namespace builder {
        const v1: {
            MsgClientImpl: typeof _270.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    auctionBid(value: _137.MsgAuctionBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    auctionBid(value: _137.MsgAuctionBid): {
                        typeUrl: string;
                        value: _137.MsgAuctionBid;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    auctionBid(value: any): {
                        typeUrl: string;
                        value: _137.MsgAuctionBid;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    auctionBid(value: _137.MsgAuctionBid): {
                        typeUrl: string;
                        value: _137.MsgAuctionBid;
                    };
                    updateParams(value: _137.MsgUpdateParams): {
                        typeUrl: string;
                        value: _137.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/pob.builder.v1.MsgAuctionBid": {
                    aminoType: string;
                    toAmino: (message: _137.MsgAuctionBid) => _137.MsgAuctionBidAmino;
                    fromAmino: (object: _137.MsgAuctionBidAmino) => _137.MsgAuctionBid;
                };
                "/pob.builder.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _137.MsgUpdateParams) => _137.MsgUpdateParamsAmino;
                    fromAmino: (object: _137.MsgUpdateParamsAmino) => _137.MsgUpdateParams;
                };
            };
            MsgAuctionBid: {
                typeUrl: string;
                encode(message: _137.MsgAuctionBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgAuctionBid;
                fromPartial(object: Partial<_137.MsgAuctionBid>): _137.MsgAuctionBid;
                fromAmino(object: _137.MsgAuctionBidAmino): _137.MsgAuctionBid;
                toAmino(message: _137.MsgAuctionBid): _137.MsgAuctionBidAmino;
                fromAminoMsg(object: _137.MsgAuctionBidAminoMsg): _137.MsgAuctionBid;
                toAminoMsg(message: _137.MsgAuctionBid): _137.MsgAuctionBidAminoMsg;
                fromProtoMsg(message: _137.MsgAuctionBidProtoMsg): _137.MsgAuctionBid;
                toProto(message: _137.MsgAuctionBid): Uint8Array;
                toProtoMsg(message: _137.MsgAuctionBid): _137.MsgAuctionBidProtoMsg;
            };
            MsgAuctionBidResponse: {
                typeUrl: string;
                encode(_: _137.MsgAuctionBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgAuctionBidResponse;
                fromPartial(_: Partial<_137.MsgAuctionBidResponse>): _137.MsgAuctionBidResponse;
                fromAmino(_: _137.MsgAuctionBidResponseAmino): _137.MsgAuctionBidResponse;
                toAmino(_: _137.MsgAuctionBidResponse): _137.MsgAuctionBidResponseAmino;
                fromAminoMsg(object: _137.MsgAuctionBidResponseAminoMsg): _137.MsgAuctionBidResponse;
                fromProtoMsg(message: _137.MsgAuctionBidResponseProtoMsg): _137.MsgAuctionBidResponse;
                toProto(message: _137.MsgAuctionBidResponse): Uint8Array;
                toProtoMsg(message: _137.MsgAuctionBidResponse): _137.MsgAuctionBidResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _137.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _137.MsgUpdateParams;
                fromPartial(object: Partial<_137.MsgUpdateParams>): _137.MsgUpdateParams;
                fromAmino(object: _137.MsgUpdateParamsAmino): _137.MsgUpdateParams;
                toAmino(message: _137.MsgUpdateParams): _137.MsgUpdateParamsAmino;
                fromAminoMsg(object: _137.MsgUpdateParamsAminoMsg): _137.MsgUpdateParams;
                toAminoMsg(message: _137.MsgUpdateParams): _137.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _137.MsgUpdateParamsProtoMsg): _137.MsgUpdateParams;
                toProto(message: _137.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateParams): _137.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _137.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _137.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_137.MsgUpdateParamsResponse>): _137.MsgUpdateParamsResponse;
                fromAmino(_: _137.MsgUpdateParamsResponseAmino): _137.MsgUpdateParamsResponse;
                toAmino(_: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _137.MsgUpdateParamsResponseAminoMsg): _137.MsgUpdateParamsResponse;
                fromProtoMsg(message: _137.MsgUpdateParamsResponseProtoMsg): _137.MsgUpdateParamsResponse;
                toProto(message: _137.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _136.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.GenesisState;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                toProto(message: _136.GenesisState): Uint8Array;
                toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _136.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _136.Params;
                fromPartial(object: Partial<_136.Params>): _136.Params;
                fromAmino(object: _136.ParamsAmino): _136.Params;
                toAmino(message: _136.Params): _136.ParamsAmino;
                fromAminoMsg(object: _136.ParamsAminoMsg): _136.Params;
                toAminoMsg(message: _136.Params): _136.ParamsAminoMsg;
                fromProtoMsg(message: _136.ParamsProtoMsg): _136.Params;
                toProto(message: _136.Params): Uint8Array;
                toProtoMsg(message: _136.Params): _136.ParamsProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
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
            pob: {
                builder: {
                    v1: _270.MsgClientImpl;
                };
            };
        }>;
    };
}
