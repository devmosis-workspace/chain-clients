import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/kv/v1beta1/kv";
import * as _16 from "./base/node/v1beta1/query";
import * as _17 from "./base/reflection/v1beta1/reflection";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/snapshots/v1beta1/snapshot";
import * as _20 from "./base/store/v1beta1/commit_info";
import * as _21 from "./base/store/v1beta1/listening";
import * as _22 from "./base/tendermint/v1beta1/query";
import * as _23 from "./base/tendermint/v1beta1/types";
import * as _24 from "./base/v1beta1/coin";
import * as _25 from "./app/module/v1alpha1/module";
import * as _26 from "./app/v1alpha1/config";
import * as _27 from "./app/v1alpha1/module";
import * as _28 from "./app/v1alpha1/query";
import * as _29 from "./auth/v1beta1/auth";
import * as _30 from "./auth/v1beta1/genesis";
import * as _31 from "./auth/v1beta1/query";
import * as _32 from "./authz/v1beta1/authz";
import * as _33 from "./authz/v1beta1/event";
import * as _34 from "./authz/v1beta1/genesis";
import * as _35 from "./authz/v1beta1/query";
import * as _36 from "./authz/v1beta1/tx";
import * as _37 from "./bank/v1beta1/authz";
import * as _38 from "./bank/v1beta1/bank";
import * as _39 from "./bank/v1beta1/genesis";
import * as _40 from "./bank/v1beta1/query";
import * as _41 from "./bank/v1beta1/tx";
import * as _42 from "./capability/v1beta1/capability";
import * as _43 from "./capability/v1beta1/genesis";
import * as _44 from "./crisis/v1beta1/genesis";
import * as _45 from "./crisis/v1beta1/tx";
import * as _46 from "./crypto/ed25519/keys";
import * as _47 from "./crypto/hd/v1/hd";
import * as _48 from "./crypto/keyring/v1/record";
import * as _49 from "./crypto/multisig/keys";
import * as _50 from "./crypto/secp256k1/keys";
import * as _51 from "./crypto/secp256r1/keys";
import * as _52 from "./distribution/v1beta1/distribution";
import * as _53 from "./distribution/v1beta1/genesis";
import * as _54 from "./distribution/v1beta1/query";
import * as _55 from "./distribution/v1beta1/tx";
import * as _56 from "./evidence/v1beta1/evidence";
import * as _57 from "./evidence/v1beta1/genesis";
import * as _58 from "./evidence/v1beta1/query";
import * as _59 from "./evidence/v1beta1/tx";
import * as _60 from "./feegrant/v1beta1/feegrant";
import * as _61 from "./feegrant/v1beta1/genesis";
import * as _62 from "./feegrant/v1beta1/query";
import * as _63 from "./feegrant/v1beta1/tx";
import * as _64 from "./genutil/v1beta1/genesis";
import * as _65 from "./gov/v1/genesis";
import * as _66 from "./gov/v1/gov";
import * as _67 from "./gov/v1/query";
import * as _68 from "./gov/v1/tx";
import * as _69 from "./gov/v1beta1/genesis";
import * as _70 from "./gov/v1beta1/gov";
import * as _71 from "./gov/v1beta1/query";
import * as _72 from "./gov/v1beta1/tx";
import * as _73 from "./group/v1/events";
import * as _74 from "./group/v1/genesis";
import * as _75 from "./group/v1/query";
import * as _76 from "./group/v1/tx";
import * as _77 from "./group/v1/types";
import * as _78 from "./mint/v1beta1/genesis";
import * as _79 from "./mint/v1beta1/mint";
import * as _80 from "./mint/v1beta1/query";
import * as _82 from "./nft/v1beta1/event";
import * as _83 from "./nft/v1beta1/genesis";
import * as _84 from "./nft/v1beta1/nft";
import * as _85 from "./nft/v1beta1/query";
import * as _86 from "./nft/v1beta1/tx";
import * as _87 from "./orm/module/v1alpha1/module";
import * as _88 from "./orm/v1/orm";
import * as _89 from "./orm/v1alpha1/schema";
import * as _90 from "./params/v1beta1/params";
import * as _91 from "./params/v1beta1/query";
import * as _92 from "./slashing/v1beta1/genesis";
import * as _93 from "./slashing/v1beta1/query";
import * as _94 from "./slashing/v1beta1/slashing";
import * as _95 from "./slashing/v1beta1/tx";
import * as _96 from "./staking/v1beta1/authz";
import * as _97 from "./staking/v1beta1/genesis";
import * as _98 from "./staking/v1beta1/query";
import * as _99 from "./staking/v1beta1/staking";
import * as _100 from "./staking/v1beta1/tx";
import * as _101 from "./tx/signing/v1beta1/signing";
import * as _102 from "./tx/v1beta1/service";
import * as _103 from "./tx/v1beta1/tx";
import * as _104 from "./upgrade/v1beta1/query";
import * as _105 from "./upgrade/v1beta1/tx";
import * as _106 from "./upgrade/v1beta1/upgrade";
import * as _107 from "./vesting/v1beta1/tx";
import * as _108 from "./vesting/v1beta1/vesting";
import * as _168 from "./auth/v1beta1/query.lcd";
import * as _169 from "./authz/v1beta1/query.lcd";
import * as _170 from "./bank/v1beta1/query.lcd";
import * as _171 from "./base/node/v1beta1/query.lcd";
import * as _172 from "./base/tendermint/v1beta1/query.lcd";
import * as _173 from "./distribution/v1beta1/query.lcd";
import * as _174 from "./evidence/v1beta1/query.lcd";
import * as _175 from "./feegrant/v1beta1/query.lcd";
import * as _176 from "./gov/v1/query.lcd";
import * as _177 from "./gov/v1beta1/query.lcd";
import * as _178 from "./group/v1/query.lcd";
import * as _179 from "./mint/v1beta1/query.lcd";
import * as _180 from "./nft/v1beta1/query.lcd";
import * as _181 from "./params/v1beta1/query.lcd";
import * as _182 from "./slashing/v1beta1/query.lcd";
import * as _183 from "./staking/v1beta1/query.lcd";
import * as _184 from "./tx/v1beta1/service.lcd";
import * as _185 from "./upgrade/v1beta1/query.lcd";
import * as _186 from "./app/v1alpha1/query.rpc.Query";
import * as _187 from "./auth/v1beta1/query.rpc.Query";
import * as _188 from "./authz/v1beta1/query.rpc.Query";
import * as _189 from "./bank/v1beta1/query.rpc.Query";
import * as _190 from "./base/node/v1beta1/query.rpc.Service";
import * as _191 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _192 from "./distribution/v1beta1/query.rpc.Query";
import * as _193 from "./evidence/v1beta1/query.rpc.Query";
import * as _194 from "./feegrant/v1beta1/query.rpc.Query";
import * as _195 from "./gov/v1/query.rpc.Query";
import * as _196 from "./gov/v1beta1/query.rpc.Query";
import * as _197 from "./group/v1/query.rpc.Query";
import * as _198 from "./mint/v1beta1/query.rpc.Query";
import * as _199 from "./nft/v1beta1/query.rpc.Query";
import * as _200 from "./params/v1beta1/query.rpc.Query";
import * as _201 from "./slashing/v1beta1/query.rpc.Query";
import * as _202 from "./staking/v1beta1/query.rpc.Query";
import * as _203 from "./tx/v1beta1/service.rpc.Service";
import * as _204 from "./upgrade/v1beta1/query.rpc.Query";
import * as _205 from "./authz/v1beta1/tx.rpc.msg";
import * as _206 from "./bank/v1beta1/tx.rpc.msg";
import * as _207 from "./crisis/v1beta1/tx.rpc.msg";
import * as _208 from "./distribution/v1beta1/tx.rpc.msg";
import * as _209 from "./evidence/v1beta1/tx.rpc.msg";
import * as _210 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _211 from "./gov/v1/tx.rpc.msg";
import * as _212 from "./gov/v1beta1/tx.rpc.msg";
import * as _213 from "./group/v1/tx.rpc.msg";
import * as _214 from "./nft/v1beta1/tx.rpc.msg";
import * as _215 from "./slashing/v1beta1/tx.rpc.msg";
import * as _216 from "./staking/v1beta1/tx.rpc.msg";
import * as _217 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _218 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace base {
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _13.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.PageRequest;
                    fromPartial(object: Partial<_13.PageRequest>): _13.PageRequest;
                    fromAmino(object: _13.PageRequestAmino): _13.PageRequest;
                    toAmino(message: _13.PageRequest): _13.PageRequestAmino;
                    fromAminoMsg(object: _13.PageRequestAminoMsg): _13.PageRequest;
                    toAminoMsg(message: _13.PageRequest): _13.PageRequestAminoMsg;
                    fromProtoMsg(message: _13.PageRequestProtoMsg): _13.PageRequest;
                    toProto(message: _13.PageRequest): Uint8Array;
                    toProtoMsg(message: _13.PageRequest): _13.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _13.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.PageResponse;
                    fromPartial(object: Partial<_13.PageResponse>): _13.PageResponse;
                    fromAmino(object: _13.PageResponseAmino): _13.PageResponse;
                    toAmino(message: _13.PageResponse): _13.PageResponseAmino;
                    fromAminoMsg(object: _13.PageResponseAminoMsg): _13.PageResponse;
                    toAminoMsg(message: _13.PageResponse): _13.PageResponseAminoMsg;
                    fromProtoMsg(message: _13.PageResponseProtoMsg): _13.PageResponse;
                    toProto(message: _13.PageResponse): Uint8Array;
                    toProtoMsg(message: _13.PageResponse): _13.PageResponseProtoMsg;
                };
            };
        }
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _14.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.TxResponse;
                    fromPartial(object: Partial<_14.TxResponse>): _14.TxResponse;
                    fromAmino(object: _14.TxResponseAmino): _14.TxResponse;
                    toAmino(message: _14.TxResponse): _14.TxResponseAmino;
                    fromAminoMsg(object: _14.TxResponseAminoMsg): _14.TxResponse;
                    toAminoMsg(message: _14.TxResponse): _14.TxResponseAminoMsg;
                    fromProtoMsg(message: _14.TxResponseProtoMsg): _14.TxResponse;
                    toProto(message: _14.TxResponse): Uint8Array;
                    toProtoMsg(message: _14.TxResponse): _14.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _14.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.ABCIMessageLog;
                    fromPartial(object: Partial<_14.ABCIMessageLog>): _14.ABCIMessageLog;
                    fromAmino(object: _14.ABCIMessageLogAmino): _14.ABCIMessageLog;
                    toAmino(message: _14.ABCIMessageLog): _14.ABCIMessageLogAmino;
                    fromAminoMsg(object: _14.ABCIMessageLogAminoMsg): _14.ABCIMessageLog;
                    toAminoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _14.ABCIMessageLogProtoMsg): _14.ABCIMessageLog;
                    toProto(message: _14.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _14.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.StringEvent;
                    fromPartial(object: Partial<_14.StringEvent>): _14.StringEvent;
                    fromAmino(object: _14.StringEventAmino): _14.StringEvent;
                    toAmino(message: _14.StringEvent): _14.StringEventAmino;
                    fromAminoMsg(object: _14.StringEventAminoMsg): _14.StringEvent;
                    toAminoMsg(message: _14.StringEvent): _14.StringEventAminoMsg;
                    fromProtoMsg(message: _14.StringEventProtoMsg): _14.StringEvent;
                    toProto(message: _14.StringEvent): Uint8Array;
                    toProtoMsg(message: _14.StringEvent): _14.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _14.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.Attribute;
                    fromPartial(object: Partial<_14.Attribute>): _14.Attribute;
                    fromAmino(object: _14.AttributeAmino): _14.Attribute;
                    toAmino(message: _14.Attribute): _14.AttributeAmino;
                    fromAminoMsg(object: _14.AttributeAminoMsg): _14.Attribute;
                    toAminoMsg(message: _14.Attribute): _14.AttributeAminoMsg;
                    fromProtoMsg(message: _14.AttributeProtoMsg): _14.Attribute;
                    toProto(message: _14.Attribute): Uint8Array;
                    toProtoMsg(message: _14.Attribute): _14.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _14.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.GasInfo;
                    fromPartial(object: Partial<_14.GasInfo>): _14.GasInfo;
                    fromAmino(object: _14.GasInfoAmino): _14.GasInfo;
                    toAmino(message: _14.GasInfo): _14.GasInfoAmino;
                    fromAminoMsg(object: _14.GasInfoAminoMsg): _14.GasInfo;
                    toAminoMsg(message: _14.GasInfo): _14.GasInfoAminoMsg;
                    fromProtoMsg(message: _14.GasInfoProtoMsg): _14.GasInfo;
                    toProto(message: _14.GasInfo): Uint8Array;
                    toProtoMsg(message: _14.GasInfo): _14.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _14.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.Result;
                    fromPartial(object: Partial<_14.Result>): _14.Result;
                    fromAmino(object: _14.ResultAmino): _14.Result;
                    toAmino(message: _14.Result): _14.ResultAmino;
                    fromAminoMsg(object: _14.ResultAminoMsg): _14.Result;
                    toAminoMsg(message: _14.Result): _14.ResultAminoMsg;
                    fromProtoMsg(message: _14.ResultProtoMsg): _14.Result;
                    toProto(message: _14.Result): Uint8Array;
                    toProtoMsg(message: _14.Result): _14.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _14.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.SimulationResponse;
                    fromPartial(object: Partial<_14.SimulationResponse>): _14.SimulationResponse;
                    fromAmino(object: _14.SimulationResponseAmino): _14.SimulationResponse;
                    toAmino(message: _14.SimulationResponse): _14.SimulationResponseAmino;
                    fromAminoMsg(object: _14.SimulationResponseAminoMsg): _14.SimulationResponse;
                    toAminoMsg(message: _14.SimulationResponse): _14.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _14.SimulationResponseProtoMsg): _14.SimulationResponse;
                    toProto(message: _14.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _14.SimulationResponse): _14.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _14.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.MsgData;
                    fromPartial(object: Partial<_14.MsgData>): _14.MsgData;
                    fromAmino(object: _14.MsgDataAmino): _14.MsgData;
                    toAmino(message: _14.MsgData): _14.MsgDataAmino;
                    fromAminoMsg(object: _14.MsgDataAminoMsg): _14.MsgData;
                    toAminoMsg(message: _14.MsgData): _14.MsgDataAminoMsg;
                    fromProtoMsg(message: _14.MsgDataProtoMsg): _14.MsgData;
                    toProto(message: _14.MsgData): Uint8Array;
                    toProtoMsg(message: _14.MsgData): _14.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _14.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.TxMsgData;
                    fromPartial(object: Partial<_14.TxMsgData>): _14.TxMsgData;
                    fromAmino(object: _14.TxMsgDataAmino): _14.TxMsgData;
                    toAmino(message: _14.TxMsgData): _14.TxMsgDataAmino;
                    fromAminoMsg(object: _14.TxMsgDataAminoMsg): _14.TxMsgData;
                    toAminoMsg(message: _14.TxMsgData): _14.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _14.TxMsgDataProtoMsg): _14.TxMsgData;
                    toProto(message: _14.TxMsgData): Uint8Array;
                    toProtoMsg(message: _14.TxMsgData): _14.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _14.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.SearchTxsResult;
                    fromPartial(object: Partial<_14.SearchTxsResult>): _14.SearchTxsResult;
                    fromAmino(object: _14.SearchTxsResultAmino): _14.SearchTxsResult;
                    toAmino(message: _14.SearchTxsResult): _14.SearchTxsResultAmino;
                    fromAminoMsg(object: _14.SearchTxsResultAminoMsg): _14.SearchTxsResult;
                    toAminoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _14.SearchTxsResultProtoMsg): _14.SearchTxsResult;
                    toProto(message: _14.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _15.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.Pairs;
                    fromPartial(object: Partial<_15.Pairs>): _15.Pairs;
                    fromAmino(object: _15.PairsAmino): _15.Pairs;
                    toAmino(message: _15.Pairs): _15.PairsAmino;
                    fromAminoMsg(object: _15.PairsAminoMsg): _15.Pairs;
                    toAminoMsg(message: _15.Pairs): _15.PairsAminoMsg;
                    fromProtoMsg(message: _15.PairsProtoMsg): _15.Pairs;
                    toProto(message: _15.Pairs): Uint8Array;
                    toProtoMsg(message: _15.Pairs): _15.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _15.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.Pair;
                    fromPartial(object: Partial<_15.Pair>): _15.Pair;
                    fromAmino(object: _15.PairAmino): _15.Pair;
                    toAmino(message: _15.Pair): _15.PairAmino;
                    fromAminoMsg(object: _15.PairAminoMsg): _15.Pair;
                    toAminoMsg(message: _15.Pair): _15.PairAminoMsg;
                    fromProtoMsg(message: _15.PairProtoMsg): _15.Pair;
                    toProto(message: _15.Pair): Uint8Array;
                    toProtoMsg(message: _15.Pair): _15.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _190.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    config(request?: _16.ConfigRequest): Promise<_16.ConfigResponse>;
                };
                LCDQueryClient: typeof _171.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _16.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _16.ConfigRequest;
                    fromPartial(_: Partial<_16.ConfigRequest>): _16.ConfigRequest;
                    fromAmino(_: _16.ConfigRequestAmino): _16.ConfigRequest;
                    toAmino(_: _16.ConfigRequest): _16.ConfigRequestAmino;
                    fromAminoMsg(object: _16.ConfigRequestAminoMsg): _16.ConfigRequest;
                    toAminoMsg(message: _16.ConfigRequest): _16.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _16.ConfigRequestProtoMsg): _16.ConfigRequest;
                    toProto(message: _16.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _16.ConfigRequest): _16.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _16.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _16.ConfigResponse;
                    fromPartial(object: Partial<_16.ConfigResponse>): _16.ConfigResponse;
                    fromAmino(object: _16.ConfigResponseAmino): _16.ConfigResponse;
                    toAmino(message: _16.ConfigResponse): _16.ConfigResponseAmino;
                    fromAminoMsg(object: _16.ConfigResponseAminoMsg): _16.ConfigResponse;
                    toAminoMsg(message: _16.ConfigResponse): _16.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _16.ConfigResponseProtoMsg): _16.ConfigResponse;
                    toProto(message: _16.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _16.ConfigResponse): _16.ConfigResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _17.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _17.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_17.ListAllInterfacesRequest>): _17.ListAllInterfacesRequest;
                    fromAmino(_: _17.ListAllInterfacesRequestAmino): _17.ListAllInterfacesRequest;
                    toAmino(_: _17.ListAllInterfacesRequest): _17.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _17.ListAllInterfacesRequestAminoMsg): _17.ListAllInterfacesRequest;
                    toAminoMsg(message: _17.ListAllInterfacesRequest): _17.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _17.ListAllInterfacesRequestProtoMsg): _17.ListAllInterfacesRequest;
                    toProto(message: _17.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _17.ListAllInterfacesRequest): _17.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _17.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_17.ListAllInterfacesResponse>): _17.ListAllInterfacesResponse;
                    fromAmino(object: _17.ListAllInterfacesResponseAmino): _17.ListAllInterfacesResponse;
                    toAmino(message: _17.ListAllInterfacesResponse): _17.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _17.ListAllInterfacesResponseAminoMsg): _17.ListAllInterfacesResponse;
                    toAminoMsg(message: _17.ListAllInterfacesResponse): _17.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _17.ListAllInterfacesResponseProtoMsg): _17.ListAllInterfacesResponse;
                    toProto(message: _17.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _17.ListAllInterfacesResponse): _17.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _17.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ListImplementationsRequest;
                    fromPartial(object: Partial<_17.ListImplementationsRequest>): _17.ListImplementationsRequest;
                    fromAmino(object: _17.ListImplementationsRequestAmino): _17.ListImplementationsRequest;
                    toAmino(message: _17.ListImplementationsRequest): _17.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _17.ListImplementationsRequestAminoMsg): _17.ListImplementationsRequest;
                    toAminoMsg(message: _17.ListImplementationsRequest): _17.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _17.ListImplementationsRequestProtoMsg): _17.ListImplementationsRequest;
                    toProto(message: _17.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _17.ListImplementationsRequest): _17.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _17.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _17.ListImplementationsResponse;
                    fromPartial(object: Partial<_17.ListImplementationsResponse>): _17.ListImplementationsResponse;
                    fromAmino(object: _17.ListImplementationsResponseAmino): _17.ListImplementationsResponse;
                    toAmino(message: _17.ListImplementationsResponse): _17.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _17.ListImplementationsResponseAminoMsg): _17.ListImplementationsResponse;
                    toAminoMsg(message: _17.ListImplementationsResponse): _17.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _17.ListImplementationsResponseProtoMsg): _17.ListImplementationsResponse;
                    toProto(message: _17.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _17.ListImplementationsResponse): _17.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _18.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.AppDescriptor;
                    fromPartial(object: Partial<_18.AppDescriptor>): _18.AppDescriptor;
                    fromAmino(object: _18.AppDescriptorAmino): _18.AppDescriptor;
                    toAmino(message: _18.AppDescriptor): _18.AppDescriptorAmino;
                    fromAminoMsg(object: _18.AppDescriptorAminoMsg): _18.AppDescriptor;
                    toAminoMsg(message: _18.AppDescriptor): _18.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _18.AppDescriptorProtoMsg): _18.AppDescriptor;
                    toProto(message: _18.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _18.AppDescriptor): _18.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _18.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.TxDescriptor;
                    fromPartial(object: Partial<_18.TxDescriptor>): _18.TxDescriptor;
                    fromAmino(object: _18.TxDescriptorAmino): _18.TxDescriptor;
                    toAmino(message: _18.TxDescriptor): _18.TxDescriptorAmino;
                    fromAminoMsg(object: _18.TxDescriptorAminoMsg): _18.TxDescriptor;
                    toAminoMsg(message: _18.TxDescriptor): _18.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _18.TxDescriptorProtoMsg): _18.TxDescriptor;
                    toProto(message: _18.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _18.TxDescriptor): _18.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _18.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.AuthnDescriptor;
                    fromPartial(object: Partial<_18.AuthnDescriptor>): _18.AuthnDescriptor;
                    fromAmino(object: _18.AuthnDescriptorAmino): _18.AuthnDescriptor;
                    toAmino(message: _18.AuthnDescriptor): _18.AuthnDescriptorAmino;
                    fromAminoMsg(object: _18.AuthnDescriptorAminoMsg): _18.AuthnDescriptor;
                    toAminoMsg(message: _18.AuthnDescriptor): _18.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _18.AuthnDescriptorProtoMsg): _18.AuthnDescriptor;
                    toProto(message: _18.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _18.AuthnDescriptor): _18.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _18.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.SigningModeDescriptor;
                    fromPartial(object: Partial<_18.SigningModeDescriptor>): _18.SigningModeDescriptor;
                    fromAmino(object: _18.SigningModeDescriptorAmino): _18.SigningModeDescriptor;
                    toAmino(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _18.SigningModeDescriptorAminoMsg): _18.SigningModeDescriptor;
                    toAminoMsg(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _18.SigningModeDescriptorProtoMsg): _18.SigningModeDescriptor;
                    toProto(message: _18.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _18.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.ChainDescriptor;
                    fromPartial(object: Partial<_18.ChainDescriptor>): _18.ChainDescriptor;
                    fromAmino(object: _18.ChainDescriptorAmino): _18.ChainDescriptor;
                    toAmino(message: _18.ChainDescriptor): _18.ChainDescriptorAmino;
                    fromAminoMsg(object: _18.ChainDescriptorAminoMsg): _18.ChainDescriptor;
                    toAminoMsg(message: _18.ChainDescriptor): _18.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _18.ChainDescriptorProtoMsg): _18.ChainDescriptor;
                    toProto(message: _18.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _18.ChainDescriptor): _18.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _18.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.CodecDescriptor;
                    fromPartial(object: Partial<_18.CodecDescriptor>): _18.CodecDescriptor;
                    fromAmino(object: _18.CodecDescriptorAmino): _18.CodecDescriptor;
                    toAmino(message: _18.CodecDescriptor): _18.CodecDescriptorAmino;
                    fromAminoMsg(object: _18.CodecDescriptorAminoMsg): _18.CodecDescriptor;
                    toAminoMsg(message: _18.CodecDescriptor): _18.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _18.CodecDescriptorProtoMsg): _18.CodecDescriptor;
                    toProto(message: _18.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _18.CodecDescriptor): _18.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _18.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.InterfaceDescriptor;
                    fromPartial(object: Partial<_18.InterfaceDescriptor>): _18.InterfaceDescriptor;
                    fromAmino(object: _18.InterfaceDescriptorAmino): _18.InterfaceDescriptor;
                    toAmino(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceDescriptorAminoMsg): _18.InterfaceDescriptor;
                    toAminoMsg(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceDescriptorProtoMsg): _18.InterfaceDescriptor;
                    toProto(message: _18.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _18.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_18.InterfaceImplementerDescriptor>): _18.InterfaceImplementerDescriptor;
                    fromAmino(object: _18.InterfaceImplementerDescriptorAmino): _18.InterfaceImplementerDescriptor;
                    toAmino(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceImplementerDescriptorAminoMsg): _18.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceImplementerDescriptorProtoMsg): _18.InterfaceImplementerDescriptor;
                    toProto(message: _18.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _18.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_18.InterfaceAcceptingMessageDescriptor>): _18.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _18.InterfaceAcceptingMessageDescriptorAmino): _18.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceAcceptingMessageDescriptorAminoMsg): _18.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceAcceptingMessageDescriptorProtoMsg): _18.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _18.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _18.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.ConfigurationDescriptor;
                    fromPartial(object: Partial<_18.ConfigurationDescriptor>): _18.ConfigurationDescriptor;
                    fromAmino(object: _18.ConfigurationDescriptorAmino): _18.ConfigurationDescriptor;
                    toAmino(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _18.ConfigurationDescriptorAminoMsg): _18.ConfigurationDescriptor;
                    toAminoMsg(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _18.ConfigurationDescriptorProtoMsg): _18.ConfigurationDescriptor;
                    toProto(message: _18.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _18.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.MsgDescriptor;
                    fromPartial(object: Partial<_18.MsgDescriptor>): _18.MsgDescriptor;
                    fromAmino(object: _18.MsgDescriptorAmino): _18.MsgDescriptor;
                    toAmino(message: _18.MsgDescriptor): _18.MsgDescriptorAmino;
                    fromAminoMsg(object: _18.MsgDescriptorAminoMsg): _18.MsgDescriptor;
                    toAminoMsg(message: _18.MsgDescriptor): _18.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _18.MsgDescriptorProtoMsg): _18.MsgDescriptor;
                    toProto(message: _18.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _18.MsgDescriptor): _18.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_18.GetAuthnDescriptorRequest>): _18.GetAuthnDescriptorRequest;
                    fromAmino(_: _18.GetAuthnDescriptorRequestAmino): _18.GetAuthnDescriptorRequest;
                    toAmino(_: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetAuthnDescriptorRequestAminoMsg): _18.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetAuthnDescriptorRequestProtoMsg): _18.GetAuthnDescriptorRequest;
                    toProto(message: _18.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_18.GetAuthnDescriptorResponse>): _18.GetAuthnDescriptorResponse;
                    fromAmino(object: _18.GetAuthnDescriptorResponseAmino): _18.GetAuthnDescriptorResponse;
                    toAmino(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetAuthnDescriptorResponseAminoMsg): _18.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetAuthnDescriptorResponseProtoMsg): _18.GetAuthnDescriptorResponse;
                    toProto(message: _18.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_18.GetChainDescriptorRequest>): _18.GetChainDescriptorRequest;
                    fromAmino(_: _18.GetChainDescriptorRequestAmino): _18.GetChainDescriptorRequest;
                    toAmino(_: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetChainDescriptorRequestAminoMsg): _18.GetChainDescriptorRequest;
                    toAminoMsg(message: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetChainDescriptorRequestProtoMsg): _18.GetChainDescriptorRequest;
                    toProto(message: _18.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_18.GetChainDescriptorResponse>): _18.GetChainDescriptorResponse;
                    fromAmino(object: _18.GetChainDescriptorResponseAmino): _18.GetChainDescriptorResponse;
                    toAmino(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetChainDescriptorResponseAminoMsg): _18.GetChainDescriptorResponse;
                    toAminoMsg(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetChainDescriptorResponseProtoMsg): _18.GetChainDescriptorResponse;
                    toProto(message: _18.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_18.GetCodecDescriptorRequest>): _18.GetCodecDescriptorRequest;
                    fromAmino(_: _18.GetCodecDescriptorRequestAmino): _18.GetCodecDescriptorRequest;
                    toAmino(_: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetCodecDescriptorRequestAminoMsg): _18.GetCodecDescriptorRequest;
                    toAminoMsg(message: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetCodecDescriptorRequestProtoMsg): _18.GetCodecDescriptorRequest;
                    toProto(message: _18.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_18.GetCodecDescriptorResponse>): _18.GetCodecDescriptorResponse;
                    fromAmino(object: _18.GetCodecDescriptorResponseAmino): _18.GetCodecDescriptorResponse;
                    toAmino(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetCodecDescriptorResponseAminoMsg): _18.GetCodecDescriptorResponse;
                    toAminoMsg(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetCodecDescriptorResponseProtoMsg): _18.GetCodecDescriptorResponse;
                    toProto(message: _18.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_18.GetConfigurationDescriptorRequest>): _18.GetConfigurationDescriptorRequest;
                    fromAmino(_: _18.GetConfigurationDescriptorRequestAmino): _18.GetConfigurationDescriptorRequest;
                    toAmino(_: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetConfigurationDescriptorRequestAminoMsg): _18.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetConfigurationDescriptorRequestProtoMsg): _18.GetConfigurationDescriptorRequest;
                    toProto(message: _18.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_18.GetConfigurationDescriptorResponse>): _18.GetConfigurationDescriptorResponse;
                    fromAmino(object: _18.GetConfigurationDescriptorResponseAmino): _18.GetConfigurationDescriptorResponse;
                    toAmino(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetConfigurationDescriptorResponseAminoMsg): _18.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetConfigurationDescriptorResponseProtoMsg): _18.GetConfigurationDescriptorResponse;
                    toProto(message: _18.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_18.GetQueryServicesDescriptorRequest>): _18.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _18.GetQueryServicesDescriptorRequestAmino): _18.GetQueryServicesDescriptorRequest;
                    toAmino(_: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetQueryServicesDescriptorRequestAminoMsg): _18.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetQueryServicesDescriptorRequestProtoMsg): _18.GetQueryServicesDescriptorRequest;
                    toProto(message: _18.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_18.GetQueryServicesDescriptorResponse>): _18.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _18.GetQueryServicesDescriptorResponseAmino): _18.GetQueryServicesDescriptorResponse;
                    toAmino(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetQueryServicesDescriptorResponseAminoMsg): _18.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetQueryServicesDescriptorResponseProtoMsg): _18.GetQueryServicesDescriptorResponse;
                    toProto(message: _18.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _18.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _18.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_18.GetTxDescriptorRequest>): _18.GetTxDescriptorRequest;
                    fromAmino(_: _18.GetTxDescriptorRequestAmino): _18.GetTxDescriptorRequest;
                    toAmino(_: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetTxDescriptorRequestAminoMsg): _18.GetTxDescriptorRequest;
                    toAminoMsg(message: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetTxDescriptorRequestProtoMsg): _18.GetTxDescriptorRequest;
                    toProto(message: _18.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _18.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_18.GetTxDescriptorResponse>): _18.GetTxDescriptorResponse;
                    fromAmino(object: _18.GetTxDescriptorResponseAmino): _18.GetTxDescriptorResponse;
                    toAmino(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetTxDescriptorResponseAminoMsg): _18.GetTxDescriptorResponse;
                    toAminoMsg(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetTxDescriptorResponseProtoMsg): _18.GetTxDescriptorResponse;
                    toProto(message: _18.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _18.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.QueryServicesDescriptor;
                    fromPartial(object: Partial<_18.QueryServicesDescriptor>): _18.QueryServicesDescriptor;
                    fromAmino(object: _18.QueryServicesDescriptorAmino): _18.QueryServicesDescriptor;
                    toAmino(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _18.QueryServicesDescriptorAminoMsg): _18.QueryServicesDescriptor;
                    toAminoMsg(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryServicesDescriptorProtoMsg): _18.QueryServicesDescriptor;
                    toProto(message: _18.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _18.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.QueryServiceDescriptor;
                    fromPartial(object: Partial<_18.QueryServiceDescriptor>): _18.QueryServiceDescriptor;
                    fromAmino(object: _18.QueryServiceDescriptorAmino): _18.QueryServiceDescriptor;
                    toAmino(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _18.QueryServiceDescriptorAminoMsg): _18.QueryServiceDescriptor;
                    toAminoMsg(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryServiceDescriptorProtoMsg): _18.QueryServiceDescriptor;
                    toProto(message: _18.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _18.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _18.QueryMethodDescriptor;
                    fromPartial(object: Partial<_18.QueryMethodDescriptor>): _18.QueryMethodDescriptor;
                    fromAmino(object: _18.QueryMethodDescriptorAmino): _18.QueryMethodDescriptor;
                    toAmino(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _18.QueryMethodDescriptorAminoMsg): _18.QueryMethodDescriptor;
                    toAminoMsg(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryMethodDescriptorProtoMsg): _18.QueryMethodDescriptor;
                    toProto(message: _18.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _19.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Snapshot;
                    fromPartial(object: Partial<_19.Snapshot>): _19.Snapshot;
                    fromAmino(object: _19.SnapshotAmino): _19.Snapshot;
                    toAmino(message: _19.Snapshot): _19.SnapshotAmino;
                    fromAminoMsg(object: _19.SnapshotAminoMsg): _19.Snapshot;
                    toAminoMsg(message: _19.Snapshot): _19.SnapshotAminoMsg;
                    fromProtoMsg(message: _19.SnapshotProtoMsg): _19.Snapshot;
                    toProto(message: _19.Snapshot): Uint8Array;
                    toProtoMsg(message: _19.Snapshot): _19.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _19.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.Metadata;
                    fromPartial(object: Partial<_19.Metadata>): _19.Metadata;
                    fromAmino(object: _19.MetadataAmino): _19.Metadata;
                    toAmino(message: _19.Metadata): _19.MetadataAmino;
                    fromAminoMsg(object: _19.MetadataAminoMsg): _19.Metadata;
                    toAminoMsg(message: _19.Metadata): _19.MetadataAminoMsg;
                    fromProtoMsg(message: _19.MetadataProtoMsg): _19.Metadata;
                    toProto(message: _19.Metadata): Uint8Array;
                    toProtoMsg(message: _19.Metadata): _19.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _19.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotItem;
                    fromPartial(object: Partial<_19.SnapshotItem>): _19.SnapshotItem;
                    fromAmino(object: _19.SnapshotItemAmino): _19.SnapshotItem;
                    toAmino(message: _19.SnapshotItem): _19.SnapshotItemAmino;
                    fromAminoMsg(object: _19.SnapshotItemAminoMsg): _19.SnapshotItem;
                    toAminoMsg(message: _19.SnapshotItem): _19.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _19.SnapshotItemProtoMsg): _19.SnapshotItem;
                    toProto(message: _19.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _19.SnapshotItem): _19.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _19.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotStoreItem;
                    fromPartial(object: Partial<_19.SnapshotStoreItem>): _19.SnapshotStoreItem;
                    fromAmino(object: _19.SnapshotStoreItemAmino): _19.SnapshotStoreItem;
                    toAmino(message: _19.SnapshotStoreItem): _19.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _19.SnapshotStoreItemAminoMsg): _19.SnapshotStoreItem;
                    toAminoMsg(message: _19.SnapshotStoreItem): _19.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _19.SnapshotStoreItemProtoMsg): _19.SnapshotStoreItem;
                    toProto(message: _19.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _19.SnapshotStoreItem): _19.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _19.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotIAVLItem;
                    fromPartial(object: Partial<_19.SnapshotIAVLItem>): _19.SnapshotIAVLItem;
                    fromAmino(object: _19.SnapshotIAVLItemAmino): _19.SnapshotIAVLItem;
                    toAmino(message: _19.SnapshotIAVLItem): _19.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _19.SnapshotIAVLItemAminoMsg): _19.SnapshotIAVLItem;
                    toAminoMsg(message: _19.SnapshotIAVLItem): _19.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _19.SnapshotIAVLItemProtoMsg): _19.SnapshotIAVLItem;
                    toProto(message: _19.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _19.SnapshotIAVLItem): _19.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _19.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_19.SnapshotExtensionMeta>): _19.SnapshotExtensionMeta;
                    fromAmino(object: _19.SnapshotExtensionMetaAmino): _19.SnapshotExtensionMeta;
                    toAmino(message: _19.SnapshotExtensionMeta): _19.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _19.SnapshotExtensionMetaAminoMsg): _19.SnapshotExtensionMeta;
                    toAminoMsg(message: _19.SnapshotExtensionMeta): _19.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _19.SnapshotExtensionMetaProtoMsg): _19.SnapshotExtensionMeta;
                    toProto(message: _19.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _19.SnapshotExtensionMeta): _19.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _19.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_19.SnapshotExtensionPayload>): _19.SnapshotExtensionPayload;
                    fromAmino(object: _19.SnapshotExtensionPayloadAmino): _19.SnapshotExtensionPayload;
                    toAmino(message: _19.SnapshotExtensionPayload): _19.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _19.SnapshotExtensionPayloadAminoMsg): _19.SnapshotExtensionPayload;
                    toAminoMsg(message: _19.SnapshotExtensionPayload): _19.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _19.SnapshotExtensionPayloadProtoMsg): _19.SnapshotExtensionPayload;
                    toProto(message: _19.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _19.SnapshotExtensionPayload): _19.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _19.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotKVItem;
                    fromPartial(object: Partial<_19.SnapshotKVItem>): _19.SnapshotKVItem;
                    fromAmino(object: _19.SnapshotKVItemAmino): _19.SnapshotKVItem;
                    toAmino(message: _19.SnapshotKVItem): _19.SnapshotKVItemAmino;
                    fromAminoMsg(object: _19.SnapshotKVItemAminoMsg): _19.SnapshotKVItem;
                    toAminoMsg(message: _19.SnapshotKVItem): _19.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _19.SnapshotKVItemProtoMsg): _19.SnapshotKVItem;
                    toProto(message: _19.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _19.SnapshotKVItem): _19.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _19.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _19.SnapshotSchema;
                    fromPartial(object: Partial<_19.SnapshotSchema>): _19.SnapshotSchema;
                    fromAmino(object: _19.SnapshotSchemaAmino): _19.SnapshotSchema;
                    toAmino(message: _19.SnapshotSchema): _19.SnapshotSchemaAmino;
                    fromAminoMsg(object: _19.SnapshotSchemaAminoMsg): _19.SnapshotSchema;
                    toAminoMsg(message: _19.SnapshotSchema): _19.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _19.SnapshotSchemaProtoMsg): _19.SnapshotSchema;
                    toProto(message: _19.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _19.SnapshotSchema): _19.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _21.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.StoreKVPair;
                    fromPartial(object: Partial<_21.StoreKVPair>): _21.StoreKVPair;
                    fromAmino(object: _21.StoreKVPairAmino): _21.StoreKVPair;
                    toAmino(message: _21.StoreKVPair): _21.StoreKVPairAmino;
                    fromAminoMsg(object: _21.StoreKVPairAminoMsg): _21.StoreKVPair;
                    toAminoMsg(message: _21.StoreKVPair): _21.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _21.StoreKVPairProtoMsg): _21.StoreKVPair;
                    toProto(message: _21.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _21.StoreKVPair): _21.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _21.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.BlockMetadata;
                    fromPartial(object: Partial<_21.BlockMetadata>): _21.BlockMetadata;
                    fromAmino(object: _21.BlockMetadataAmino): _21.BlockMetadata;
                    toAmino(message: _21.BlockMetadata): _21.BlockMetadataAmino;
                    fromAminoMsg(object: _21.BlockMetadataAminoMsg): _21.BlockMetadata;
                    toAminoMsg(message: _21.BlockMetadata): _21.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _21.BlockMetadataProtoMsg): _21.BlockMetadata;
                    toProto(message: _21.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _21.BlockMetadata): _21.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _21.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _21.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_21.BlockMetadata_DeliverTx>): _21.BlockMetadata_DeliverTx;
                    fromAmino(object: _21.BlockMetadata_DeliverTxAmino): _21.BlockMetadata_DeliverTx;
                    toAmino(message: _21.BlockMetadata_DeliverTx): _21.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _21.BlockMetadata_DeliverTxAminoMsg): _21.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _21.BlockMetadata_DeliverTx): _21.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _21.BlockMetadata_DeliverTxProtoMsg): _21.BlockMetadata_DeliverTx;
                    toProto(message: _21.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _21.BlockMetadata_DeliverTx): _21.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _20.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.CommitInfo;
                    fromPartial(object: Partial<_20.CommitInfo>): _20.CommitInfo;
                    fromAmino(object: _20.CommitInfoAmino): _20.CommitInfo;
                    toAmino(message: _20.CommitInfo): _20.CommitInfoAmino;
                    fromAminoMsg(object: _20.CommitInfoAminoMsg): _20.CommitInfo;
                    toAminoMsg(message: _20.CommitInfo): _20.CommitInfoAminoMsg;
                    fromProtoMsg(message: _20.CommitInfoProtoMsg): _20.CommitInfo;
                    toProto(message: _20.CommitInfo): Uint8Array;
                    toProtoMsg(message: _20.CommitInfo): _20.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _20.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.StoreInfo;
                    fromPartial(object: Partial<_20.StoreInfo>): _20.StoreInfo;
                    fromAmino(object: _20.StoreInfoAmino): _20.StoreInfo;
                    toAmino(message: _20.StoreInfo): _20.StoreInfoAmino;
                    fromAminoMsg(object: _20.StoreInfoAminoMsg): _20.StoreInfo;
                    toAminoMsg(message: _20.StoreInfo): _20.StoreInfoAminoMsg;
                    fromProtoMsg(message: _20.StoreInfoProtoMsg): _20.StoreInfo;
                    toProto(message: _20.StoreInfo): Uint8Array;
                    toProtoMsg(message: _20.StoreInfo): _20.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _20.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _20.CommitID;
                    fromPartial(object: Partial<_20.CommitID>): _20.CommitID;
                    fromAmino(object: _20.CommitIDAmino): _20.CommitID;
                    toAmino(message: _20.CommitID): _20.CommitIDAmino;
                    fromAminoMsg(object: _20.CommitIDAminoMsg): _20.CommitID;
                    toAminoMsg(message: _20.CommitID): _20.CommitIDAminoMsg;
                    fromProtoMsg(message: _20.CommitIDProtoMsg): _20.CommitID;
                    toProto(message: _20.CommitID): Uint8Array;
                    toProtoMsg(message: _20.CommitID): _20.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _191.ServiceClientImpl;
                createRpcQueryExtension: (base: QueryClient) => {
                    getNodeInfo(request?: _22.GetNodeInfoRequest): Promise<_22.GetNodeInfoResponse>;
                    getSyncing(request?: _22.GetSyncingRequest): Promise<_22.GetSyncingResponse>;
                    getLatestBlock(request?: _22.GetLatestBlockRequest): Promise<_22.GetLatestBlockResponse>;
                    getBlockByHeight(request: _22.GetBlockByHeightRequest): Promise<_22.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _22.GetLatestValidatorSetRequest): Promise<_22.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _22.GetValidatorSetByHeightRequest): Promise<_22.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _22.ABCIQueryRequest): Promise<_22.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _172.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _23.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Block;
                    fromPartial(object: Partial<_23.Block>): _23.Block;
                    fromAmino(object: _23.BlockAmino): _23.Block;
                    toAmino(message: _23.Block): _23.BlockAmino;
                    fromAminoMsg(object: _23.BlockAminoMsg): _23.Block;
                    toAminoMsg(message: _23.Block): _23.BlockAminoMsg;
                    fromProtoMsg(message: _23.BlockProtoMsg): _23.Block;
                    toProto(message: _23.Block): Uint8Array;
                    toProtoMsg(message: _23.Block): _23.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _23.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _23.Header;
                    fromPartial(object: Partial<_23.Header>): _23.Header;
                    fromAmino(object: _23.HeaderAmino): _23.Header;
                    toAmino(message: _23.Header): _23.HeaderAmino;
                    fromAminoMsg(object: _23.HeaderAminoMsg): _23.Header;
                    toAminoMsg(message: _23.Header): _23.HeaderAminoMsg;
                    fromProtoMsg(message: _23.HeaderProtoMsg): _23.Header;
                    toProto(message: _23.Header): Uint8Array;
                    toProtoMsg(message: _23.Header): _23.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _22.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_22.GetValidatorSetByHeightRequest>): _22.GetValidatorSetByHeightRequest;
                    fromAmino(object: _22.GetValidatorSetByHeightRequestAmino): _22.GetValidatorSetByHeightRequest;
                    toAmino(message: _22.GetValidatorSetByHeightRequest): _22.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _22.GetValidatorSetByHeightRequestAminoMsg): _22.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _22.GetValidatorSetByHeightRequest): _22.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _22.GetValidatorSetByHeightRequestProtoMsg): _22.GetValidatorSetByHeightRequest;
                    toProto(message: _22.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _22.GetValidatorSetByHeightRequest): _22.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _22.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_22.GetValidatorSetByHeightResponse>): _22.GetValidatorSetByHeightResponse;
                    fromAmino(object: _22.GetValidatorSetByHeightResponseAmino): _22.GetValidatorSetByHeightResponse;
                    toAmino(message: _22.GetValidatorSetByHeightResponse): _22.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _22.GetValidatorSetByHeightResponseAminoMsg): _22.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _22.GetValidatorSetByHeightResponse): _22.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _22.GetValidatorSetByHeightResponseProtoMsg): _22.GetValidatorSetByHeightResponse;
                    toProto(message: _22.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _22.GetValidatorSetByHeightResponse): _22.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _22.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_22.GetLatestValidatorSetRequest>): _22.GetLatestValidatorSetRequest;
                    fromAmino(object: _22.GetLatestValidatorSetRequestAmino): _22.GetLatestValidatorSetRequest;
                    toAmino(message: _22.GetLatestValidatorSetRequest): _22.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _22.GetLatestValidatorSetRequestAminoMsg): _22.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _22.GetLatestValidatorSetRequest): _22.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _22.GetLatestValidatorSetRequestProtoMsg): _22.GetLatestValidatorSetRequest;
                    toProto(message: _22.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _22.GetLatestValidatorSetRequest): _22.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _22.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_22.GetLatestValidatorSetResponse>): _22.GetLatestValidatorSetResponse;
                    fromAmino(object: _22.GetLatestValidatorSetResponseAmino): _22.GetLatestValidatorSetResponse;
                    toAmino(message: _22.GetLatestValidatorSetResponse): _22.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _22.GetLatestValidatorSetResponseAminoMsg): _22.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _22.GetLatestValidatorSetResponse): _22.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _22.GetLatestValidatorSetResponseProtoMsg): _22.GetLatestValidatorSetResponse;
                    toProto(message: _22.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _22.GetLatestValidatorSetResponse): _22.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _22.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Validator;
                    fromPartial(object: Partial<_22.Validator>): _22.Validator;
                    fromAmino(object: _22.ValidatorAmino): _22.Validator;
                    toAmino(message: _22.Validator): _22.ValidatorAmino;
                    fromAminoMsg(object: _22.ValidatorAminoMsg): _22.Validator;
                    toAminoMsg(message: _22.Validator): _22.ValidatorAminoMsg;
                    fromProtoMsg(message: _22.ValidatorProtoMsg): _22.Validator;
                    toProto(message: _22.Validator): Uint8Array;
                    toProtoMsg(message: _22.Validator): _22.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _22.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_22.GetBlockByHeightRequest>): _22.GetBlockByHeightRequest;
                    fromAmino(object: _22.GetBlockByHeightRequestAmino): _22.GetBlockByHeightRequest;
                    toAmino(message: _22.GetBlockByHeightRequest): _22.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _22.GetBlockByHeightRequestAminoMsg): _22.GetBlockByHeightRequest;
                    toAminoMsg(message: _22.GetBlockByHeightRequest): _22.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _22.GetBlockByHeightRequestProtoMsg): _22.GetBlockByHeightRequest;
                    toProto(message: _22.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _22.GetBlockByHeightRequest): _22.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _22.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_22.GetBlockByHeightResponse>): _22.GetBlockByHeightResponse;
                    fromAmino(object: _22.GetBlockByHeightResponseAmino): _22.GetBlockByHeightResponse;
                    toAmino(message: _22.GetBlockByHeightResponse): _22.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _22.GetBlockByHeightResponseAminoMsg): _22.GetBlockByHeightResponse;
                    toAminoMsg(message: _22.GetBlockByHeightResponse): _22.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _22.GetBlockByHeightResponseProtoMsg): _22.GetBlockByHeightResponse;
                    toProto(message: _22.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _22.GetBlockByHeightResponse): _22.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _22.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetLatestBlockRequest;
                    fromPartial(_: Partial<_22.GetLatestBlockRequest>): _22.GetLatestBlockRequest;
                    fromAmino(_: _22.GetLatestBlockRequestAmino): _22.GetLatestBlockRequest;
                    toAmino(_: _22.GetLatestBlockRequest): _22.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _22.GetLatestBlockRequestAminoMsg): _22.GetLatestBlockRequest;
                    toAminoMsg(message: _22.GetLatestBlockRequest): _22.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _22.GetLatestBlockRequestProtoMsg): _22.GetLatestBlockRequest;
                    toProto(message: _22.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _22.GetLatestBlockRequest): _22.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _22.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetLatestBlockResponse;
                    fromPartial(object: Partial<_22.GetLatestBlockResponse>): _22.GetLatestBlockResponse;
                    fromAmino(object: _22.GetLatestBlockResponseAmino): _22.GetLatestBlockResponse;
                    toAmino(message: _22.GetLatestBlockResponse): _22.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _22.GetLatestBlockResponseAminoMsg): _22.GetLatestBlockResponse;
                    toAminoMsg(message: _22.GetLatestBlockResponse): _22.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _22.GetLatestBlockResponseProtoMsg): _22.GetLatestBlockResponse;
                    toProto(message: _22.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _22.GetLatestBlockResponse): _22.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _22.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetSyncingRequest;
                    fromPartial(_: Partial<_22.GetSyncingRequest>): _22.GetSyncingRequest;
                    fromAmino(_: _22.GetSyncingRequestAmino): _22.GetSyncingRequest;
                    toAmino(_: _22.GetSyncingRequest): _22.GetSyncingRequestAmino;
                    fromAminoMsg(object: _22.GetSyncingRequestAminoMsg): _22.GetSyncingRequest;
                    toAminoMsg(message: _22.GetSyncingRequest): _22.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _22.GetSyncingRequestProtoMsg): _22.GetSyncingRequest;
                    toProto(message: _22.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _22.GetSyncingRequest): _22.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _22.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetSyncingResponse;
                    fromPartial(object: Partial<_22.GetSyncingResponse>): _22.GetSyncingResponse;
                    fromAmino(object: _22.GetSyncingResponseAmino): _22.GetSyncingResponse;
                    toAmino(message: _22.GetSyncingResponse): _22.GetSyncingResponseAmino;
                    fromAminoMsg(object: _22.GetSyncingResponseAminoMsg): _22.GetSyncingResponse;
                    toAminoMsg(message: _22.GetSyncingResponse): _22.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _22.GetSyncingResponseProtoMsg): _22.GetSyncingResponse;
                    toProto(message: _22.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _22.GetSyncingResponse): _22.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _22.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _22.GetNodeInfoRequest;
                    fromPartial(_: Partial<_22.GetNodeInfoRequest>): _22.GetNodeInfoRequest;
                    fromAmino(_: _22.GetNodeInfoRequestAmino): _22.GetNodeInfoRequest;
                    toAmino(_: _22.GetNodeInfoRequest): _22.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _22.GetNodeInfoRequestAminoMsg): _22.GetNodeInfoRequest;
                    toAminoMsg(message: _22.GetNodeInfoRequest): _22.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _22.GetNodeInfoRequestProtoMsg): _22.GetNodeInfoRequest;
                    toProto(message: _22.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _22.GetNodeInfoRequest): _22.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _22.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.GetNodeInfoResponse;
                    fromPartial(object: Partial<_22.GetNodeInfoResponse>): _22.GetNodeInfoResponse;
                    fromAmino(object: _22.GetNodeInfoResponseAmino): _22.GetNodeInfoResponse;
                    toAmino(message: _22.GetNodeInfoResponse): _22.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _22.GetNodeInfoResponseAminoMsg): _22.GetNodeInfoResponse;
                    toAminoMsg(message: _22.GetNodeInfoResponse): _22.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _22.GetNodeInfoResponseProtoMsg): _22.GetNodeInfoResponse;
                    toProto(message: _22.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _22.GetNodeInfoResponse): _22.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _22.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.VersionInfo;
                    fromPartial(object: Partial<_22.VersionInfo>): _22.VersionInfo;
                    fromAmino(object: _22.VersionInfoAmino): _22.VersionInfo;
                    toAmino(message: _22.VersionInfo): _22.VersionInfoAmino;
                    fromAminoMsg(object: _22.VersionInfoAminoMsg): _22.VersionInfo;
                    toAminoMsg(message: _22.VersionInfo): _22.VersionInfoAminoMsg;
                    fromProtoMsg(message: _22.VersionInfoProtoMsg): _22.VersionInfo;
                    toProto(message: _22.VersionInfo): Uint8Array;
                    toProtoMsg(message: _22.VersionInfo): _22.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _22.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.Module;
                    fromPartial(object: Partial<_22.Module>): _22.Module;
                    fromAmino(object: _22.ModuleAmino): _22.Module;
                    toAmino(message: _22.Module): _22.ModuleAmino;
                    fromAminoMsg(object: _22.ModuleAminoMsg): _22.Module;
                    toAminoMsg(message: _22.Module): _22.ModuleAminoMsg;
                    fromProtoMsg(message: _22.ModuleProtoMsg): _22.Module;
                    toProto(message: _22.Module): Uint8Array;
                    toProtoMsg(message: _22.Module): _22.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _22.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ABCIQueryRequest;
                    fromPartial(object: Partial<_22.ABCIQueryRequest>): _22.ABCIQueryRequest;
                    fromAmino(object: _22.ABCIQueryRequestAmino): _22.ABCIQueryRequest;
                    toAmino(message: _22.ABCIQueryRequest): _22.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _22.ABCIQueryRequestAminoMsg): _22.ABCIQueryRequest;
                    toAminoMsg(message: _22.ABCIQueryRequest): _22.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _22.ABCIQueryRequestProtoMsg): _22.ABCIQueryRequest;
                    toProto(message: _22.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _22.ABCIQueryRequest): _22.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _22.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ABCIQueryResponse;
                    fromPartial(object: Partial<_22.ABCIQueryResponse>): _22.ABCIQueryResponse;
                    fromAmino(object: _22.ABCIQueryResponseAmino): _22.ABCIQueryResponse;
                    toAmino(message: _22.ABCIQueryResponse): _22.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _22.ABCIQueryResponseAminoMsg): _22.ABCIQueryResponse;
                    toAminoMsg(message: _22.ABCIQueryResponse): _22.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _22.ABCIQueryResponseProtoMsg): _22.ABCIQueryResponse;
                    toProto(message: _22.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _22.ABCIQueryResponse): _22.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _22.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ProofOp;
                    fromPartial(object: Partial<_22.ProofOp>): _22.ProofOp;
                    fromAmino(object: _22.ProofOpAmino): _22.ProofOp;
                    toAmino(message: _22.ProofOp): _22.ProofOpAmino;
                    fromAminoMsg(object: _22.ProofOpAminoMsg): _22.ProofOp;
                    toAminoMsg(message: _22.ProofOp): _22.ProofOpAminoMsg;
                    fromProtoMsg(message: _22.ProofOpProtoMsg): _22.ProofOp;
                    toProto(message: _22.ProofOp): Uint8Array;
                    toProtoMsg(message: _22.ProofOp): _22.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _22.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _22.ProofOps;
                    fromPartial(object: Partial<_22.ProofOps>): _22.ProofOps;
                    fromAmino(object: _22.ProofOpsAmino): _22.ProofOps;
                    toAmino(message: _22.ProofOps): _22.ProofOpsAmino;
                    fromAminoMsg(object: _22.ProofOpsAminoMsg): _22.ProofOps;
                    toAminoMsg(message: _22.ProofOps): _22.ProofOpsAminoMsg;
                    fromProtoMsg(message: _22.ProofOpsProtoMsg): _22.ProofOps;
                    toProto(message: _22.ProofOps): Uint8Array;
                    toProtoMsg(message: _22.ProofOps): _22.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _24.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Coin;
                fromPartial(object: Partial<_24.Coin>): _24.Coin;
                fromAmino(object: _24.CoinAmino): _24.Coin;
                toAmino(message: _24.Coin): _24.CoinAmino;
                fromAminoMsg(object: _24.CoinAminoMsg): _24.Coin;
                toAminoMsg(message: _24.Coin): _24.CoinAminoMsg;
                fromProtoMsg(message: _24.CoinProtoMsg): _24.Coin;
                toProto(message: _24.Coin): Uint8Array;
                toProtoMsg(message: _24.Coin): _24.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _24.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.DecCoin;
                fromPartial(object: Partial<_24.DecCoin>): _24.DecCoin;
                fromAmino(object: _24.DecCoinAmino): _24.DecCoin;
                toAmino(message: _24.DecCoin): _24.DecCoinAmino;
                fromAminoMsg(object: _24.DecCoinAminoMsg): _24.DecCoin;
                toAminoMsg(message: _24.DecCoin): _24.DecCoinAminoMsg;
                fromProtoMsg(message: _24.DecCoinProtoMsg): _24.DecCoin;
                toProto(message: _24.DecCoin): Uint8Array;
                toProtoMsg(message: _24.DecCoin): _24.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _24.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.IntProto;
                fromPartial(object: Partial<_24.IntProto>): _24.IntProto;
                fromAmino(object: _24.IntProtoAmino): _24.IntProto;
                toAmino(message: _24.IntProto): _24.IntProtoAmino;
                fromAminoMsg(object: _24.IntProtoAminoMsg): _24.IntProto;
                toAminoMsg(message: _24.IntProto): _24.IntProtoAminoMsg;
                fromProtoMsg(message: _24.IntProtoProtoMsg): _24.IntProto;
                toProto(message: _24.IntProto): Uint8Array;
                toProtoMsg(message: _24.IntProto): _24.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _24.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.DecProto;
                fromPartial(object: Partial<_24.DecProto>): _24.DecProto;
                fromAmino(object: _24.DecProtoAmino): _24.DecProto;
                toAmino(message: _24.DecProto): _24.DecProtoAmino;
                fromAminoMsg(object: _24.DecProtoAminoMsg): _24.DecProto;
                toAminoMsg(message: _24.DecProto): _24.DecProtoAminoMsg;
                fromProtoMsg(message: _24.DecProtoProtoMsg): _24.DecProto;
                toProto(message: _24.DecProto): Uint8Array;
                toProtoMsg(message: _24.DecProto): _24.DecProtoProtoMsg;
            };
        };
    }
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _25.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _25.Module;
                    fromPartial(_: Partial<_25.Module>): _25.Module;
                    fromAmino(_: _25.ModuleAmino): _25.Module;
                    toAmino(_: _25.Module): _25.ModuleAmino;
                    fromAminoMsg(object: _25.ModuleAminoMsg): _25.Module;
                    toAminoMsg(message: _25.Module): _25.ModuleAminoMsg;
                    fromProtoMsg(message: _25.ModuleProtoMsg): _25.Module;
                    toProto(message: _25.Module): Uint8Array;
                    toProtoMsg(message: _25.Module): _25.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                config(request?: _28.QueryConfigRequest): Promise<_28.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _28.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.QueryConfigRequest;
                fromPartial(_: Partial<_28.QueryConfigRequest>): _28.QueryConfigRequest;
                fromAmino(_: _28.QueryConfigRequestAmino): _28.QueryConfigRequest;
                toAmino(_: _28.QueryConfigRequest): _28.QueryConfigRequestAmino;
                fromAminoMsg(object: _28.QueryConfigRequestAminoMsg): _28.QueryConfigRequest;
                toAminoMsg(message: _28.QueryConfigRequest): _28.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _28.QueryConfigRequestProtoMsg): _28.QueryConfigRequest;
                toProto(message: _28.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _28.QueryConfigRequest): _28.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _28.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryConfigResponse;
                fromPartial(object: Partial<_28.QueryConfigResponse>): _28.QueryConfigResponse;
                fromAmino(object: _28.QueryConfigResponseAmino): _28.QueryConfigResponse;
                toAmino(message: _28.QueryConfigResponse): _28.QueryConfigResponseAmino;
                fromAminoMsg(object: _28.QueryConfigResponseAminoMsg): _28.QueryConfigResponse;
                toAminoMsg(message: _28.QueryConfigResponse): _28.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _28.QueryConfigResponseProtoMsg): _28.QueryConfigResponse;
                toProto(message: _28.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _28.QueryConfigResponse): _28.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _27.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ModuleDescriptor;
                fromPartial(object: Partial<_27.ModuleDescriptor>): _27.ModuleDescriptor;
                fromAmino(object: _27.ModuleDescriptorAmino): _27.ModuleDescriptor;
                toAmino(message: _27.ModuleDescriptor): _27.ModuleDescriptorAmino;
                fromAminoMsg(object: _27.ModuleDescriptorAminoMsg): _27.ModuleDescriptor;
                toAminoMsg(message: _27.ModuleDescriptor): _27.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _27.ModuleDescriptorProtoMsg): _27.ModuleDescriptor;
                toProto(message: _27.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _27.ModuleDescriptor): _27.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _27.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.PackageReference;
                fromPartial(object: Partial<_27.PackageReference>): _27.PackageReference;
                fromAmino(object: _27.PackageReferenceAmino): _27.PackageReference;
                toAmino(message: _27.PackageReference): _27.PackageReferenceAmino;
                fromAminoMsg(object: _27.PackageReferenceAminoMsg): _27.PackageReference;
                toAminoMsg(message: _27.PackageReference): _27.PackageReferenceAminoMsg;
                fromProtoMsg(message: _27.PackageReferenceProtoMsg): _27.PackageReference;
                toProto(message: _27.PackageReference): Uint8Array;
                toProtoMsg(message: _27.PackageReference): _27.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _27.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MigrateFromInfo;
                fromPartial(object: Partial<_27.MigrateFromInfo>): _27.MigrateFromInfo;
                fromAmino(object: _27.MigrateFromInfoAmino): _27.MigrateFromInfo;
                toAmino(message: _27.MigrateFromInfo): _27.MigrateFromInfoAmino;
                fromAminoMsg(object: _27.MigrateFromInfoAminoMsg): _27.MigrateFromInfo;
                toAminoMsg(message: _27.MigrateFromInfo): _27.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _27.MigrateFromInfoProtoMsg): _27.MigrateFromInfo;
                toProto(message: _27.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _27.MigrateFromInfo): _27.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _26.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Config;
                fromPartial(object: Partial<_26.Config>): _26.Config;
                fromAmino(object: _26.ConfigAmino): _26.Config;
                toAmino(message: _26.Config): _26.ConfigAmino;
                fromAminoMsg(object: _26.ConfigAminoMsg): _26.Config;
                toAminoMsg(message: _26.Config): _26.ConfigAminoMsg;
                fromProtoMsg(message: _26.ConfigProtoMsg): _26.Config;
                toProto(message: _26.Config): Uint8Array;
                toProtoMsg(message: _26.Config): _26.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _26.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.ModuleConfig;
                fromPartial(object: Partial<_26.ModuleConfig>): _26.ModuleConfig;
                fromAmino(object: _26.ModuleConfigAmino): _26.ModuleConfig;
                toAmino(message: _26.ModuleConfig): _26.ModuleConfigAmino;
                fromAminoMsg(object: _26.ModuleConfigAminoMsg): _26.ModuleConfig;
                toAminoMsg(message: _26.ModuleConfig): _26.ModuleConfigAminoMsg;
                fromProtoMsg(message: _26.ModuleConfigProtoMsg): _26.ModuleConfig;
                toProto(message: _26.ModuleConfig): Uint8Array;
                toProtoMsg(message: _26.ModuleConfig): _26.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                accounts(request?: _31.QueryAccountsRequest): Promise<_31.QueryAccountsResponse>;
                account(request: _31.QueryAccountRequest): Promise<_31.QueryAccountResponse>;
                accountAddressByID(request: _31.QueryAccountAddressByIDRequest): Promise<_31.QueryAccountAddressByIDResponse>;
                params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                moduleAccounts(request?: _31.QueryModuleAccountsRequest): Promise<_31.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _31.QueryModuleAccountByNameRequest): Promise<_31.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _31.Bech32PrefixRequest): Promise<_31.Bech32PrefixResponse>;
                addressBytesToString(request: _31.AddressBytesToStringRequest): Promise<_31.AddressBytesToStringResponse>;
                addressStringToBytes(request: _31.AddressStringToBytesRequest): Promise<_31.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _31.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountsRequest;
                fromPartial(object: Partial<_31.QueryAccountsRequest>): _31.QueryAccountsRequest;
                fromAmino(object: _31.QueryAccountsRequestAmino): _31.QueryAccountsRequest;
                toAmino(message: _31.QueryAccountsRequest): _31.QueryAccountsRequestAmino;
                fromAminoMsg(object: _31.QueryAccountsRequestAminoMsg): _31.QueryAccountsRequest;
                toAminoMsg(message: _31.QueryAccountsRequest): _31.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryAccountsRequestProtoMsg): _31.QueryAccountsRequest;
                toProto(message: _31.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryAccountsRequest): _31.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _31.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountsResponse;
                fromPartial(object: Partial<_31.QueryAccountsResponse>): _31.QueryAccountsResponse;
                fromAmino(object: _31.QueryAccountsResponseAmino): _31.QueryAccountsResponse;
                toAmino(message: _31.QueryAccountsResponse): _31.QueryAccountsResponseAmino;
                fromAminoMsg(object: _31.QueryAccountsResponseAminoMsg): _31.QueryAccountsResponse;
                toAminoMsg(message: _31.QueryAccountsResponse): _31.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryAccountsResponseProtoMsg): _31.QueryAccountsResponse;
                toProto(message: _31.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryAccountsResponse): _31.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _31.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountRequest;
                fromPartial(object: Partial<_31.QueryAccountRequest>): _31.QueryAccountRequest;
                fromAmino(object: _31.QueryAccountRequestAmino): _31.QueryAccountRequest;
                toAmino(message: _31.QueryAccountRequest): _31.QueryAccountRequestAmino;
                fromAminoMsg(object: _31.QueryAccountRequestAminoMsg): _31.QueryAccountRequest;
                toAminoMsg(message: _31.QueryAccountRequest): _31.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _31.QueryAccountRequestProtoMsg): _31.QueryAccountRequest;
                toProto(message: _31.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _31.QueryAccountRequest): _31.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _31.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountResponse;
                fromPartial(object: Partial<_31.QueryAccountResponse>): _31.QueryAccountResponse;
                fromAmino(object: _31.QueryAccountResponseAmino): _31.QueryAccountResponse;
                toAmino(message: _31.QueryAccountResponse): _31.QueryAccountResponseAmino;
                fromAminoMsg(object: _31.QueryAccountResponseAminoMsg): _31.QueryAccountResponse;
                toAminoMsg(message: _31.QueryAccountResponse): _31.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _31.QueryAccountResponseProtoMsg): _31.QueryAccountResponse;
                toProto(message: _31.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _31.QueryAccountResponse): _31.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _31.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryParamsRequest;
                fromPartial(_: Partial<_31.QueryParamsRequest>): _31.QueryParamsRequest;
                fromAmino(_: _31.QueryParamsRequestAmino): _31.QueryParamsRequest;
                toAmino(_: _31.QueryParamsRequest): _31.QueryParamsRequestAmino;
                fromAminoMsg(object: _31.QueryParamsRequestAminoMsg): _31.QueryParamsRequest;
                toAminoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryParamsRequestProtoMsg): _31.QueryParamsRequest;
                toProto(message: _31.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _31.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryParamsResponse;
                fromPartial(object: Partial<_31.QueryParamsResponse>): _31.QueryParamsResponse;
                fromAmino(object: _31.QueryParamsResponseAmino): _31.QueryParamsResponse;
                toAmino(message: _31.QueryParamsResponse): _31.QueryParamsResponseAmino;
                fromAminoMsg(object: _31.QueryParamsResponseAminoMsg): _31.QueryParamsResponse;
                toAminoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryParamsResponseProtoMsg): _31.QueryParamsResponse;
                toProto(message: _31.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _31.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_31.QueryModuleAccountsRequest>): _31.QueryModuleAccountsRequest;
                fromAmino(_: _31.QueryModuleAccountsRequestAmino): _31.QueryModuleAccountsRequest;
                toAmino(_: _31.QueryModuleAccountsRequest): _31.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _31.QueryModuleAccountsRequestAminoMsg): _31.QueryModuleAccountsRequest;
                toAminoMsg(message: _31.QueryModuleAccountsRequest): _31.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryModuleAccountsRequestProtoMsg): _31.QueryModuleAccountsRequest;
                toProto(message: _31.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryModuleAccountsRequest): _31.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _31.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_31.QueryModuleAccountsResponse>): _31.QueryModuleAccountsResponse;
                fromAmino(object: _31.QueryModuleAccountsResponseAmino): _31.QueryModuleAccountsResponse;
                toAmino(message: _31.QueryModuleAccountsResponse): _31.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _31.QueryModuleAccountsResponseAminoMsg): _31.QueryModuleAccountsResponse;
                toAminoMsg(message: _31.QueryModuleAccountsResponse): _31.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryModuleAccountsResponseProtoMsg): _31.QueryModuleAccountsResponse;
                toProto(message: _31.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryModuleAccountsResponse): _31.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _31.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_31.QueryModuleAccountByNameRequest>): _31.QueryModuleAccountByNameRequest;
                fromAmino(object: _31.QueryModuleAccountByNameRequestAmino): _31.QueryModuleAccountByNameRequest;
                toAmino(message: _31.QueryModuleAccountByNameRequest): _31.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _31.QueryModuleAccountByNameRequestAminoMsg): _31.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _31.QueryModuleAccountByNameRequest): _31.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _31.QueryModuleAccountByNameRequestProtoMsg): _31.QueryModuleAccountByNameRequest;
                toProto(message: _31.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _31.QueryModuleAccountByNameRequest): _31.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _31.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_31.QueryModuleAccountByNameResponse>): _31.QueryModuleAccountByNameResponse;
                fromAmino(object: _31.QueryModuleAccountByNameResponseAmino): _31.QueryModuleAccountByNameResponse;
                toAmino(message: _31.QueryModuleAccountByNameResponse): _31.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _31.QueryModuleAccountByNameResponseAminoMsg): _31.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _31.QueryModuleAccountByNameResponse): _31.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _31.QueryModuleAccountByNameResponseProtoMsg): _31.QueryModuleAccountByNameResponse;
                toProto(message: _31.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _31.QueryModuleAccountByNameResponse): _31.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _31.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.Bech32PrefixRequest;
                fromPartial(_: Partial<_31.Bech32PrefixRequest>): _31.Bech32PrefixRequest;
                fromAmino(_: _31.Bech32PrefixRequestAmino): _31.Bech32PrefixRequest;
                toAmino(_: _31.Bech32PrefixRequest): _31.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _31.Bech32PrefixRequestAminoMsg): _31.Bech32PrefixRequest;
                toAminoMsg(message: _31.Bech32PrefixRequest): _31.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _31.Bech32PrefixRequestProtoMsg): _31.Bech32PrefixRequest;
                toProto(message: _31.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _31.Bech32PrefixRequest): _31.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _31.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Bech32PrefixResponse;
                fromPartial(object: Partial<_31.Bech32PrefixResponse>): _31.Bech32PrefixResponse;
                fromAmino(object: _31.Bech32PrefixResponseAmino): _31.Bech32PrefixResponse;
                toAmino(message: _31.Bech32PrefixResponse): _31.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _31.Bech32PrefixResponseAminoMsg): _31.Bech32PrefixResponse;
                toAminoMsg(message: _31.Bech32PrefixResponse): _31.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _31.Bech32PrefixResponseProtoMsg): _31.Bech32PrefixResponse;
                toProto(message: _31.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _31.Bech32PrefixResponse): _31.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _31.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.AddressBytesToStringRequest;
                fromPartial(object: Partial<_31.AddressBytesToStringRequest>): _31.AddressBytesToStringRequest;
                fromAmino(object: _31.AddressBytesToStringRequestAmino): _31.AddressBytesToStringRequest;
                toAmino(message: _31.AddressBytesToStringRequest): _31.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _31.AddressBytesToStringRequestAminoMsg): _31.AddressBytesToStringRequest;
                toAminoMsg(message: _31.AddressBytesToStringRequest): _31.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _31.AddressBytesToStringRequestProtoMsg): _31.AddressBytesToStringRequest;
                toProto(message: _31.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _31.AddressBytesToStringRequest): _31.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _31.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.AddressBytesToStringResponse;
                fromPartial(object: Partial<_31.AddressBytesToStringResponse>): _31.AddressBytesToStringResponse;
                fromAmino(object: _31.AddressBytesToStringResponseAmino): _31.AddressBytesToStringResponse;
                toAmino(message: _31.AddressBytesToStringResponse): _31.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _31.AddressBytesToStringResponseAminoMsg): _31.AddressBytesToStringResponse;
                toAminoMsg(message: _31.AddressBytesToStringResponse): _31.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _31.AddressBytesToStringResponseProtoMsg): _31.AddressBytesToStringResponse;
                toProto(message: _31.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _31.AddressBytesToStringResponse): _31.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _31.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.AddressStringToBytesRequest;
                fromPartial(object: Partial<_31.AddressStringToBytesRequest>): _31.AddressStringToBytesRequest;
                fromAmino(object: _31.AddressStringToBytesRequestAmino): _31.AddressStringToBytesRequest;
                toAmino(message: _31.AddressStringToBytesRequest): _31.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _31.AddressStringToBytesRequestAminoMsg): _31.AddressStringToBytesRequest;
                toAminoMsg(message: _31.AddressStringToBytesRequest): _31.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _31.AddressStringToBytesRequestProtoMsg): _31.AddressStringToBytesRequest;
                toProto(message: _31.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _31.AddressStringToBytesRequest): _31.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _31.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.AddressStringToBytesResponse;
                fromPartial(object: Partial<_31.AddressStringToBytesResponse>): _31.AddressStringToBytesResponse;
                fromAmino(object: _31.AddressStringToBytesResponseAmino): _31.AddressStringToBytesResponse;
                toAmino(message: _31.AddressStringToBytesResponse): _31.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _31.AddressStringToBytesResponseAminoMsg): _31.AddressStringToBytesResponse;
                toAminoMsg(message: _31.AddressStringToBytesResponse): _31.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _31.AddressStringToBytesResponseProtoMsg): _31.AddressStringToBytesResponse;
                toProto(message: _31.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _31.AddressStringToBytesResponse): _31.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _31.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_31.QueryAccountAddressByIDRequest>): _31.QueryAccountAddressByIDRequest;
                fromAmino(object: _31.QueryAccountAddressByIDRequestAmino): _31.QueryAccountAddressByIDRequest;
                toAmino(message: _31.QueryAccountAddressByIDRequest): _31.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _31.QueryAccountAddressByIDRequestAminoMsg): _31.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _31.QueryAccountAddressByIDRequest): _31.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _31.QueryAccountAddressByIDRequestProtoMsg): _31.QueryAccountAddressByIDRequest;
                toProto(message: _31.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _31.QueryAccountAddressByIDRequest): _31.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _31.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_31.QueryAccountAddressByIDResponse>): _31.QueryAccountAddressByIDResponse;
                fromAmino(object: _31.QueryAccountAddressByIDResponseAmino): _31.QueryAccountAddressByIDResponse;
                toAmino(message: _31.QueryAccountAddressByIDResponse): _31.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _31.QueryAccountAddressByIDResponseAminoMsg): _31.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _31.QueryAccountAddressByIDResponse): _31.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _31.QueryAccountAddressByIDResponseProtoMsg): _31.QueryAccountAddressByIDResponse;
                toProto(message: _31.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _31.QueryAccountAddressByIDResponse): _31.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _29.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _29.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _30.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _29.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.BaseAccount;
                fromPartial(object: Partial<_29.BaseAccount>): _29.BaseAccount;
                fromAmino(object: _29.BaseAccountAmino): _29.BaseAccount;
                toAmino(message: _29.BaseAccount): _29.BaseAccountAmino;
                fromAminoMsg(object: _29.BaseAccountAminoMsg): _29.BaseAccount;
                toAminoMsg(message: _29.BaseAccount): _29.BaseAccountAminoMsg;
                fromProtoMsg(message: _29.BaseAccountProtoMsg): _29.BaseAccount;
                toProto(message: _29.BaseAccount): Uint8Array;
                toProtoMsg(message: _29.BaseAccount): _29.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _29.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.ModuleAccount;
                fromPartial(object: Partial<_29.ModuleAccount>): _29.ModuleAccount;
                fromAmino(object: _29.ModuleAccountAmino): _29.ModuleAccount;
                toAmino(message: _29.ModuleAccount): _29.ModuleAccountAmino;
                fromAminoMsg(object: _29.ModuleAccountAminoMsg): _29.ModuleAccount;
                toAminoMsg(message: _29.ModuleAccount): _29.ModuleAccountAminoMsg;
                fromProtoMsg(message: _29.ModuleAccountProtoMsg): _29.ModuleAccount;
                toProto(message: _29.ModuleAccount): Uint8Array;
                toProtoMsg(message: _29.ModuleAccount): _29.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _29.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.Params;
                fromPartial(object: Partial<_29.Params>): _29.Params;
                fromAmino(object: _29.ParamsAmino): _29.Params;
                toAmino(message: _29.Params): _29.ParamsAmino;
                fromAminoMsg(object: _29.ParamsAminoMsg): _29.Params;
                toAminoMsg(message: _29.Params): _29.ParamsAminoMsg;
                fromProtoMsg(message: _29.ParamsProtoMsg): _29.Params;
                toProto(message: _29.Params): Uint8Array;
                toProtoMsg(message: _29.Params): _29.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                grants(request: _35.QueryGrantsRequest): Promise<_35.QueryGrantsResponse>;
                granterGrants(request: _35.QueryGranterGrantsRequest): Promise<_35.QueryGranterGrantsResponse>;
                granteeGrants(request: _35.QueryGranteeGrantsRequest): Promise<_35.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _36.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _36.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _36.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _36.MsgGrant): {
                        typeUrl: string;
                        value: _36.MsgGrant;
                    };
                    exec(value: _36.MsgExec): {
                        typeUrl: string;
                        value: _36.MsgExec;
                    };
                    revoke(value: _36.MsgRevoke): {
                        typeUrl: string;
                        value: _36.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _36.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _36.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _36.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _36.MsgGrant): {
                        typeUrl: string;
                        value: _36.MsgGrant;
                    };
                    exec(value: _36.MsgExec): {
                        typeUrl: string;
                        value: _36.MsgExec;
                    };
                    revoke(value: _36.MsgRevoke): {
                        typeUrl: string;
                        value: _36.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _36.MsgGrant) => _36.MsgGrantAmino;
                    fromAmino: (object: _36.MsgGrantAmino) => _36.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _36.MsgExec) => _36.MsgExecAmino;
                    fromAmino: (object: _36.MsgExecAmino) => _36.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _36.MsgRevoke) => _36.MsgRevokeAmino;
                    fromAmino: (object: _36.MsgRevokeAmino) => _36.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _36.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgGrant;
                fromPartial(object: Partial<_36.MsgGrant>): _36.MsgGrant;
                fromAmino(object: _36.MsgGrantAmino): _36.MsgGrant;
                toAmino(message: _36.MsgGrant): _36.MsgGrantAmino;
                fromAminoMsg(object: _36.MsgGrantAminoMsg): _36.MsgGrant;
                toAminoMsg(message: _36.MsgGrant): _36.MsgGrantAminoMsg;
                fromProtoMsg(message: _36.MsgGrantProtoMsg): _36.MsgGrant;
                toProto(message: _36.MsgGrant): Uint8Array;
                toProtoMsg(message: _36.MsgGrant): _36.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _36.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgExecResponse;
                fromPartial(object: Partial<_36.MsgExecResponse>): _36.MsgExecResponse;
                fromAmino(object: _36.MsgExecResponseAmino): _36.MsgExecResponse;
                toAmino(message: _36.MsgExecResponse): _36.MsgExecResponseAmino;
                fromAminoMsg(object: _36.MsgExecResponseAminoMsg): _36.MsgExecResponse;
                toAminoMsg(message: _36.MsgExecResponse): _36.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _36.MsgExecResponseProtoMsg): _36.MsgExecResponse;
                toProto(message: _36.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _36.MsgExecResponse): _36.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _36.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgExec;
                fromPartial(object: Partial<_36.MsgExec>): _36.MsgExec;
                fromAmino(object: _36.MsgExecAmino): _36.MsgExec;
                toAmino(message: _36.MsgExec): _36.MsgExecAmino;
                fromAminoMsg(object: _36.MsgExecAminoMsg): _36.MsgExec;
                toAminoMsg(message: _36.MsgExec): _36.MsgExecAminoMsg;
                fromProtoMsg(message: _36.MsgExecProtoMsg): _36.MsgExec;
                toProto(message: _36.MsgExec): Uint8Array;
                toProtoMsg(message: _36.MsgExec): _36.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _36.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgGrantResponse;
                fromPartial(_: Partial<_36.MsgGrantResponse>): _36.MsgGrantResponse;
                fromAmino(_: _36.MsgGrantResponseAmino): _36.MsgGrantResponse;
                toAmino(_: _36.MsgGrantResponse): _36.MsgGrantResponseAmino;
                fromAminoMsg(object: _36.MsgGrantResponseAminoMsg): _36.MsgGrantResponse;
                toAminoMsg(message: _36.MsgGrantResponse): _36.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _36.MsgGrantResponseProtoMsg): _36.MsgGrantResponse;
                toProto(message: _36.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _36.MsgGrantResponse): _36.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _36.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgRevoke;
                fromPartial(object: Partial<_36.MsgRevoke>): _36.MsgRevoke;
                fromAmino(object: _36.MsgRevokeAmino): _36.MsgRevoke;
                toAmino(message: _36.MsgRevoke): _36.MsgRevokeAmino;
                fromAminoMsg(object: _36.MsgRevokeAminoMsg): _36.MsgRevoke;
                toAminoMsg(message: _36.MsgRevoke): _36.MsgRevokeAminoMsg;
                fromProtoMsg(message: _36.MsgRevokeProtoMsg): _36.MsgRevoke;
                toProto(message: _36.MsgRevoke): Uint8Array;
                toProtoMsg(message: _36.MsgRevoke): _36.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _36.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgRevokeResponse;
                fromPartial(_: Partial<_36.MsgRevokeResponse>): _36.MsgRevokeResponse;
                fromAmino(_: _36.MsgRevokeResponseAmino): _36.MsgRevokeResponse;
                toAmino(_: _36.MsgRevokeResponse): _36.MsgRevokeResponseAmino;
                fromAminoMsg(object: _36.MsgRevokeResponseAminoMsg): _36.MsgRevokeResponse;
                toAminoMsg(message: _36.MsgRevokeResponse): _36.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _36.MsgRevokeResponseProtoMsg): _36.MsgRevokeResponse;
                toProto(message: _36.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _36.MsgRevokeResponse): _36.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _35.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGrantsRequest;
                fromPartial(object: Partial<_35.QueryGrantsRequest>): _35.QueryGrantsRequest;
                fromAmino(object: _35.QueryGrantsRequestAmino): _35.QueryGrantsRequest;
                toAmino(message: _35.QueryGrantsRequest): _35.QueryGrantsRequestAmino;
                fromAminoMsg(object: _35.QueryGrantsRequestAminoMsg): _35.QueryGrantsRequest;
                toAminoMsg(message: _35.QueryGrantsRequest): _35.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryGrantsRequestProtoMsg): _35.QueryGrantsRequest;
                toProto(message: _35.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryGrantsRequest): _35.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _35.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGrantsResponse;
                fromPartial(object: Partial<_35.QueryGrantsResponse>): _35.QueryGrantsResponse;
                fromAmino(object: _35.QueryGrantsResponseAmino): _35.QueryGrantsResponse;
                toAmino(message: _35.QueryGrantsResponse): _35.QueryGrantsResponseAmino;
                fromAminoMsg(object: _35.QueryGrantsResponseAminoMsg): _35.QueryGrantsResponse;
                toAminoMsg(message: _35.QueryGrantsResponse): _35.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryGrantsResponseProtoMsg): _35.QueryGrantsResponse;
                toProto(message: _35.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryGrantsResponse): _35.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _35.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_35.QueryGranterGrantsRequest>): _35.QueryGranterGrantsRequest;
                fromAmino(object: _35.QueryGranterGrantsRequestAmino): _35.QueryGranterGrantsRequest;
                toAmino(message: _35.QueryGranterGrantsRequest): _35.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _35.QueryGranterGrantsRequestAminoMsg): _35.QueryGranterGrantsRequest;
                toAminoMsg(message: _35.QueryGranterGrantsRequest): _35.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryGranterGrantsRequestProtoMsg): _35.QueryGranterGrantsRequest;
                toProto(message: _35.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryGranterGrantsRequest): _35.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _35.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_35.QueryGranterGrantsResponse>): _35.QueryGranterGrantsResponse;
                fromAmino(object: _35.QueryGranterGrantsResponseAmino): _35.QueryGranterGrantsResponse;
                toAmino(message: _35.QueryGranterGrantsResponse): _35.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _35.QueryGranterGrantsResponseAminoMsg): _35.QueryGranterGrantsResponse;
                toAminoMsg(message: _35.QueryGranterGrantsResponse): _35.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryGranterGrantsResponseProtoMsg): _35.QueryGranterGrantsResponse;
                toProto(message: _35.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryGranterGrantsResponse): _35.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _35.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_35.QueryGranteeGrantsRequest>): _35.QueryGranteeGrantsRequest;
                fromAmino(object: _35.QueryGranteeGrantsRequestAmino): _35.QueryGranteeGrantsRequest;
                toAmino(message: _35.QueryGranteeGrantsRequest): _35.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _35.QueryGranteeGrantsRequestAminoMsg): _35.QueryGranteeGrantsRequest;
                toAminoMsg(message: _35.QueryGranteeGrantsRequest): _35.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryGranteeGrantsRequestProtoMsg): _35.QueryGranteeGrantsRequest;
                toProto(message: _35.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryGranteeGrantsRequest): _35.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _35.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_35.QueryGranteeGrantsResponse>): _35.QueryGranteeGrantsResponse;
                fromAmino(object: _35.QueryGranteeGrantsResponseAmino): _35.QueryGranteeGrantsResponse;
                toAmino(message: _35.QueryGranteeGrantsResponse): _35.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _35.QueryGranteeGrantsResponseAminoMsg): _35.QueryGranteeGrantsResponse;
                toAminoMsg(message: _35.QueryGranteeGrantsResponse): _35.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryGranteeGrantsResponseProtoMsg): _35.QueryGranteeGrantsResponse;
                toProto(message: _35.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryGranteeGrantsResponse): _35.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _34.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
                fromAmino(object: _34.GenesisStateAmino): _34.GenesisState;
                toAmino(message: _34.GenesisState): _34.GenesisStateAmino;
                fromAminoMsg(object: _34.GenesisStateAminoMsg): _34.GenesisState;
                toAminoMsg(message: _34.GenesisState): _34.GenesisStateAminoMsg;
                fromProtoMsg(message: _34.GenesisStateProtoMsg): _34.GenesisState;
                toProto(message: _34.GenesisState): Uint8Array;
                toProtoMsg(message: _34.GenesisState): _34.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _33.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.EventGrant;
                fromPartial(object: Partial<_33.EventGrant>): _33.EventGrant;
                fromAmino(object: _33.EventGrantAmino): _33.EventGrant;
                toAmino(message: _33.EventGrant): _33.EventGrantAmino;
                fromAminoMsg(object: _33.EventGrantAminoMsg): _33.EventGrant;
                toAminoMsg(message: _33.EventGrant): _33.EventGrantAminoMsg;
                fromProtoMsg(message: _33.EventGrantProtoMsg): _33.EventGrant;
                toProto(message: _33.EventGrant): Uint8Array;
                toProtoMsg(message: _33.EventGrant): _33.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _33.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.EventRevoke;
                fromPartial(object: Partial<_33.EventRevoke>): _33.EventRevoke;
                fromAmino(object: _33.EventRevokeAmino): _33.EventRevoke;
                toAmino(message: _33.EventRevoke): _33.EventRevokeAmino;
                fromAminoMsg(object: _33.EventRevokeAminoMsg): _33.EventRevoke;
                toAminoMsg(message: _33.EventRevoke): _33.EventRevokeAminoMsg;
                fromProtoMsg(message: _33.EventRevokeProtoMsg): _33.EventRevoke;
                toProto(message: _33.EventRevoke): Uint8Array;
                toProtoMsg(message: _33.EventRevoke): _33.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _32.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenericAuthorization;
                fromPartial(object: Partial<_32.GenericAuthorization>): _32.GenericAuthorization;
                fromAmino(object: _32.GenericAuthorizationAmino): _32.GenericAuthorization;
                toAmino(message: _32.GenericAuthorization): _32.GenericAuthorizationAmino;
                fromAminoMsg(object: _32.GenericAuthorizationAminoMsg): _32.GenericAuthorization;
                toAminoMsg(message: _32.GenericAuthorization): _32.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _32.GenericAuthorizationProtoMsg): _32.GenericAuthorization;
                toProto(message: _32.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _32.GenericAuthorization): _32.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _32.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Grant;
                fromPartial(object: Partial<_32.Grant>): _32.Grant;
                fromAmino(object: _32.GrantAmino): _32.Grant;
                toAmino(message: _32.Grant): _32.GrantAmino;
                fromAminoMsg(object: _32.GrantAminoMsg): _32.Grant;
                toAminoMsg(message: _32.Grant): _32.GrantAminoMsg;
                fromProtoMsg(message: _32.GrantProtoMsg): _32.Grant;
                toProto(message: _32.Grant): Uint8Array;
                toProtoMsg(message: _32.Grant): _32.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _32.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GrantAuthorization;
                fromPartial(object: Partial<_32.GrantAuthorization>): _32.GrantAuthorization;
                fromAmino(object: _32.GrantAuthorizationAmino): _32.GrantAuthorization;
                toAmino(message: _32.GrantAuthorization): _32.GrantAuthorizationAmino;
                fromAminoMsg(object: _32.GrantAuthorizationAminoMsg): _32.GrantAuthorization;
                toAminoMsg(message: _32.GrantAuthorization): _32.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _32.GrantAuthorizationProtoMsg): _32.GrantAuthorization;
                toProto(message: _32.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _32.GrantAuthorization): _32.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _32.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GrantQueueItem;
                fromPartial(object: Partial<_32.GrantQueueItem>): _32.GrantQueueItem;
                fromAmino(object: _32.GrantQueueItemAmino): _32.GrantQueueItem;
                toAmino(message: _32.GrantQueueItem): _32.GrantQueueItemAmino;
                fromAminoMsg(object: _32.GrantQueueItemAminoMsg): _32.GrantQueueItem;
                toAminoMsg(message: _32.GrantQueueItem): _32.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _32.GrantQueueItemProtoMsg): _32.GrantQueueItem;
                toProto(message: _32.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _32.GrantQueueItem): _32.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _37.SendAuthorization | _96.StakeAuthorization | _32.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _40.QueryBalanceRequest): Promise<_40.QueryBalanceResponse>;
                allBalances(request: _40.QueryAllBalancesRequest): Promise<_40.QueryAllBalancesResponse>;
                spendableBalances(request: _40.QuerySpendableBalancesRequest): Promise<_40.QuerySpendableBalancesResponse>;
                totalSupply(request?: _40.QueryTotalSupplyRequest): Promise<_40.QueryTotalSupplyResponse>;
                supplyOf(request: _40.QuerySupplyOfRequest): Promise<_40.QuerySupplyOfResponse>;
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                denomMetadata(request: _40.QueryDenomMetadataRequest): Promise<_40.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _40.QueryDenomsMetadataRequest): Promise<_40.QueryDenomsMetadataResponse>;
                denomOwners(request: _40.QueryDenomOwnersRequest): Promise<_40.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _41.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _41.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _41.MsgSend): {
                        typeUrl: string;
                        value: _41.MsgSend;
                    };
                    multiSend(value: _41.MsgMultiSend): {
                        typeUrl: string;
                        value: _41.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _41.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _41.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _41.MsgSend): {
                        typeUrl: string;
                        value: _41.MsgSend;
                    };
                    multiSend(value: _41.MsgMultiSend): {
                        typeUrl: string;
                        value: _41.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _41.MsgSend) => _41.MsgSendAmino;
                    fromAmino: (object: _41.MsgSendAmino) => _41.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _41.MsgMultiSend) => _41.MsgMultiSendAmino;
                    fromAmino: (object: _41.MsgMultiSendAmino) => _41.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _41.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgSend;
                fromPartial(object: Partial<_41.MsgSend>): _41.MsgSend;
                fromAmino(object: _41.MsgSendAmino): _41.MsgSend;
                toAmino(message: _41.MsgSend): _41.MsgSendAmino;
                fromAminoMsg(object: _41.MsgSendAminoMsg): _41.MsgSend;
                toAminoMsg(message: _41.MsgSend): _41.MsgSendAminoMsg;
                fromProtoMsg(message: _41.MsgSendProtoMsg): _41.MsgSend;
                toProto(message: _41.MsgSend): Uint8Array;
                toProtoMsg(message: _41.MsgSend): _41.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _41.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgSendResponse;
                fromPartial(_: Partial<_41.MsgSendResponse>): _41.MsgSendResponse;
                fromAmino(_: _41.MsgSendResponseAmino): _41.MsgSendResponse;
                toAmino(_: _41.MsgSendResponse): _41.MsgSendResponseAmino;
                fromAminoMsg(object: _41.MsgSendResponseAminoMsg): _41.MsgSendResponse;
                toAminoMsg(message: _41.MsgSendResponse): _41.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _41.MsgSendResponseProtoMsg): _41.MsgSendResponse;
                toProto(message: _41.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _41.MsgSendResponse): _41.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _41.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgMultiSend;
                fromPartial(object: Partial<_41.MsgMultiSend>): _41.MsgMultiSend;
                fromAmino(object: _41.MsgMultiSendAmino): _41.MsgMultiSend;
                toAmino(message: _41.MsgMultiSend): _41.MsgMultiSendAmino;
                fromAminoMsg(object: _41.MsgMultiSendAminoMsg): _41.MsgMultiSend;
                toAminoMsg(message: _41.MsgMultiSend): _41.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _41.MsgMultiSendProtoMsg): _41.MsgMultiSend;
                toProto(message: _41.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _41.MsgMultiSend): _41.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _41.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgMultiSendResponse;
                fromPartial(_: Partial<_41.MsgMultiSendResponse>): _41.MsgMultiSendResponse;
                fromAmino(_: _41.MsgMultiSendResponseAmino): _41.MsgMultiSendResponse;
                toAmino(_: _41.MsgMultiSendResponse): _41.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _41.MsgMultiSendResponseAminoMsg): _41.MsgMultiSendResponse;
                toAminoMsg(message: _41.MsgMultiSendResponse): _41.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _41.MsgMultiSendResponseProtoMsg): _41.MsgMultiSendResponse;
                toProto(message: _41.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _41.MsgMultiSendResponse): _41.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _40.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryBalanceRequest;
                fromPartial(object: Partial<_40.QueryBalanceRequest>): _40.QueryBalanceRequest;
                fromAmino(object: _40.QueryBalanceRequestAmino): _40.QueryBalanceRequest;
                toAmino(message: _40.QueryBalanceRequest): _40.QueryBalanceRequestAmino;
                fromAminoMsg(object: _40.QueryBalanceRequestAminoMsg): _40.QueryBalanceRequest;
                toAminoMsg(message: _40.QueryBalanceRequest): _40.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _40.QueryBalanceRequestProtoMsg): _40.QueryBalanceRequest;
                toProto(message: _40.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _40.QueryBalanceRequest): _40.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _40.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryBalanceResponse;
                fromPartial(object: Partial<_40.QueryBalanceResponse>): _40.QueryBalanceResponse;
                fromAmino(object: _40.QueryBalanceResponseAmino): _40.QueryBalanceResponse;
                toAmino(message: _40.QueryBalanceResponse): _40.QueryBalanceResponseAmino;
                fromAminoMsg(object: _40.QueryBalanceResponseAminoMsg): _40.QueryBalanceResponse;
                toAminoMsg(message: _40.QueryBalanceResponse): _40.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _40.QueryBalanceResponseProtoMsg): _40.QueryBalanceResponse;
                toProto(message: _40.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _40.QueryBalanceResponse): _40.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _40.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryAllBalancesRequest;
                fromPartial(object: Partial<_40.QueryAllBalancesRequest>): _40.QueryAllBalancesRequest;
                fromAmino(object: _40.QueryAllBalancesRequestAmino): _40.QueryAllBalancesRequest;
                toAmino(message: _40.QueryAllBalancesRequest): _40.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _40.QueryAllBalancesRequestAminoMsg): _40.QueryAllBalancesRequest;
                toAminoMsg(message: _40.QueryAllBalancesRequest): _40.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _40.QueryAllBalancesRequestProtoMsg): _40.QueryAllBalancesRequest;
                toProto(message: _40.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _40.QueryAllBalancesRequest): _40.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _40.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryAllBalancesResponse;
                fromPartial(object: Partial<_40.QueryAllBalancesResponse>): _40.QueryAllBalancesResponse;
                fromAmino(object: _40.QueryAllBalancesResponseAmino): _40.QueryAllBalancesResponse;
                toAmino(message: _40.QueryAllBalancesResponse): _40.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _40.QueryAllBalancesResponseAminoMsg): _40.QueryAllBalancesResponse;
                toAminoMsg(message: _40.QueryAllBalancesResponse): _40.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _40.QueryAllBalancesResponseProtoMsg): _40.QueryAllBalancesResponse;
                toProto(message: _40.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _40.QueryAllBalancesResponse): _40.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _40.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_40.QuerySpendableBalancesRequest>): _40.QuerySpendableBalancesRequest;
                fromAmino(object: _40.QuerySpendableBalancesRequestAmino): _40.QuerySpendableBalancesRequest;
                toAmino(message: _40.QuerySpendableBalancesRequest): _40.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _40.QuerySpendableBalancesRequestAminoMsg): _40.QuerySpendableBalancesRequest;
                toAminoMsg(message: _40.QuerySpendableBalancesRequest): _40.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _40.QuerySpendableBalancesRequestProtoMsg): _40.QuerySpendableBalancesRequest;
                toProto(message: _40.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _40.QuerySpendableBalancesRequest): _40.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _40.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_40.QuerySpendableBalancesResponse>): _40.QuerySpendableBalancesResponse;
                fromAmino(object: _40.QuerySpendableBalancesResponseAmino): _40.QuerySpendableBalancesResponse;
                toAmino(message: _40.QuerySpendableBalancesResponse): _40.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _40.QuerySpendableBalancesResponseAminoMsg): _40.QuerySpendableBalancesResponse;
                toAminoMsg(message: _40.QuerySpendableBalancesResponse): _40.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _40.QuerySpendableBalancesResponseProtoMsg): _40.QuerySpendableBalancesResponse;
                toProto(message: _40.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _40.QuerySpendableBalancesResponse): _40.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _40.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_40.QueryTotalSupplyRequest>): _40.QueryTotalSupplyRequest;
                fromAmino(object: _40.QueryTotalSupplyRequestAmino): _40.QueryTotalSupplyRequest;
                toAmino(message: _40.QueryTotalSupplyRequest): _40.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _40.QueryTotalSupplyRequestAminoMsg): _40.QueryTotalSupplyRequest;
                toAminoMsg(message: _40.QueryTotalSupplyRequest): _40.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _40.QueryTotalSupplyRequestProtoMsg): _40.QueryTotalSupplyRequest;
                toProto(message: _40.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _40.QueryTotalSupplyRequest): _40.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _40.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_40.QueryTotalSupplyResponse>): _40.QueryTotalSupplyResponse;
                fromAmino(object: _40.QueryTotalSupplyResponseAmino): _40.QueryTotalSupplyResponse;
                toAmino(message: _40.QueryTotalSupplyResponse): _40.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _40.QueryTotalSupplyResponseAminoMsg): _40.QueryTotalSupplyResponse;
                toAminoMsg(message: _40.QueryTotalSupplyResponse): _40.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _40.QueryTotalSupplyResponseProtoMsg): _40.QueryTotalSupplyResponse;
                toProto(message: _40.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _40.QueryTotalSupplyResponse): _40.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _40.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QuerySupplyOfRequest;
                fromPartial(object: Partial<_40.QuerySupplyOfRequest>): _40.QuerySupplyOfRequest;
                fromAmino(object: _40.QuerySupplyOfRequestAmino): _40.QuerySupplyOfRequest;
                toAmino(message: _40.QuerySupplyOfRequest): _40.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _40.QuerySupplyOfRequestAminoMsg): _40.QuerySupplyOfRequest;
                toAminoMsg(message: _40.QuerySupplyOfRequest): _40.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _40.QuerySupplyOfRequestProtoMsg): _40.QuerySupplyOfRequest;
                toProto(message: _40.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _40.QuerySupplyOfRequest): _40.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _40.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QuerySupplyOfResponse;
                fromPartial(object: Partial<_40.QuerySupplyOfResponse>): _40.QuerySupplyOfResponse;
                fromAmino(object: _40.QuerySupplyOfResponseAmino): _40.QuerySupplyOfResponse;
                toAmino(message: _40.QuerySupplyOfResponse): _40.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _40.QuerySupplyOfResponseAminoMsg): _40.QuerySupplyOfResponse;
                toAminoMsg(message: _40.QuerySupplyOfResponse): _40.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _40.QuerySupplyOfResponseProtoMsg): _40.QuerySupplyOfResponse;
                toProto(message: _40.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _40.QuerySupplyOfResponse): _40.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _40.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                toAminoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestAminoMsg;
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
                toAminoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _40.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_40.QueryDenomsMetadataRequest>): _40.QueryDenomsMetadataRequest;
                fromAmino(object: _40.QueryDenomsMetadataRequestAmino): _40.QueryDenomsMetadataRequest;
                toAmino(message: _40.QueryDenomsMetadataRequest): _40.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _40.QueryDenomsMetadataRequestAminoMsg): _40.QueryDenomsMetadataRequest;
                toAminoMsg(message: _40.QueryDenomsMetadataRequest): _40.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDenomsMetadataRequestProtoMsg): _40.QueryDenomsMetadataRequest;
                toProto(message: _40.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDenomsMetadataRequest): _40.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _40.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_40.QueryDenomsMetadataResponse>): _40.QueryDenomsMetadataResponse;
                fromAmino(object: _40.QueryDenomsMetadataResponseAmino): _40.QueryDenomsMetadataResponse;
                toAmino(message: _40.QueryDenomsMetadataResponse): _40.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _40.QueryDenomsMetadataResponseAminoMsg): _40.QueryDenomsMetadataResponse;
                toAminoMsg(message: _40.QueryDenomsMetadataResponse): _40.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDenomsMetadataResponseProtoMsg): _40.QueryDenomsMetadataResponse;
                toProto(message: _40.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDenomsMetadataResponse): _40.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _40.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_40.QueryDenomMetadataRequest>): _40.QueryDenomMetadataRequest;
                fromAmino(object: _40.QueryDenomMetadataRequestAmino): _40.QueryDenomMetadataRequest;
                toAmino(message: _40.QueryDenomMetadataRequest): _40.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _40.QueryDenomMetadataRequestAminoMsg): _40.QueryDenomMetadataRequest;
                toAminoMsg(message: _40.QueryDenomMetadataRequest): _40.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDenomMetadataRequestProtoMsg): _40.QueryDenomMetadataRequest;
                toProto(message: _40.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDenomMetadataRequest): _40.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _40.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_40.QueryDenomMetadataResponse>): _40.QueryDenomMetadataResponse;
                fromAmino(object: _40.QueryDenomMetadataResponseAmino): _40.QueryDenomMetadataResponse;
                toAmino(message: _40.QueryDenomMetadataResponse): _40.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _40.QueryDenomMetadataResponseAminoMsg): _40.QueryDenomMetadataResponse;
                toAminoMsg(message: _40.QueryDenomMetadataResponse): _40.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDenomMetadataResponseProtoMsg): _40.QueryDenomMetadataResponse;
                toProto(message: _40.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDenomMetadataResponse): _40.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _40.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_40.QueryDenomOwnersRequest>): _40.QueryDenomOwnersRequest;
                fromAmino(object: _40.QueryDenomOwnersRequestAmino): _40.QueryDenomOwnersRequest;
                toAmino(message: _40.QueryDenomOwnersRequest): _40.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _40.QueryDenomOwnersRequestAminoMsg): _40.QueryDenomOwnersRequest;
                toAminoMsg(message: _40.QueryDenomOwnersRequest): _40.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDenomOwnersRequestProtoMsg): _40.QueryDenomOwnersRequest;
                toProto(message: _40.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDenomOwnersRequest): _40.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _40.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.DenomOwner;
                fromPartial(object: Partial<_40.DenomOwner>): _40.DenomOwner;
                fromAmino(object: _40.DenomOwnerAmino): _40.DenomOwner;
                toAmino(message: _40.DenomOwner): _40.DenomOwnerAmino;
                fromAminoMsg(object: _40.DenomOwnerAminoMsg): _40.DenomOwner;
                toAminoMsg(message: _40.DenomOwner): _40.DenomOwnerAminoMsg;
                fromProtoMsg(message: _40.DenomOwnerProtoMsg): _40.DenomOwner;
                toProto(message: _40.DenomOwner): Uint8Array;
                toProtoMsg(message: _40.DenomOwner): _40.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _40.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_40.QueryDenomOwnersResponse>): _40.QueryDenomOwnersResponse;
                fromAmino(object: _40.QueryDenomOwnersResponseAmino): _40.QueryDenomOwnersResponse;
                toAmino(message: _40.QueryDenomOwnersResponse): _40.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _40.QueryDenomOwnersResponseAminoMsg): _40.QueryDenomOwnersResponse;
                toAminoMsg(message: _40.QueryDenomOwnersResponse): _40.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDenomOwnersResponseProtoMsg): _40.QueryDenomOwnersResponse;
                toProto(message: _40.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDenomOwnersResponse): _40.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _39.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
                fromAmino(object: _39.GenesisStateAmino): _39.GenesisState;
                toAmino(message: _39.GenesisState): _39.GenesisStateAmino;
                fromAminoMsg(object: _39.GenesisStateAminoMsg): _39.GenesisState;
                toAminoMsg(message: _39.GenesisState): _39.GenesisStateAminoMsg;
                fromProtoMsg(message: _39.GenesisStateProtoMsg): _39.GenesisState;
                toProto(message: _39.GenesisState): Uint8Array;
                toProtoMsg(message: _39.GenesisState): _39.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _39.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Balance;
                fromPartial(object: Partial<_39.Balance>): _39.Balance;
                fromAmino(object: _39.BalanceAmino): _39.Balance;
                toAmino(message: _39.Balance): _39.BalanceAmino;
                fromAminoMsg(object: _39.BalanceAminoMsg): _39.Balance;
                toAminoMsg(message: _39.Balance): _39.BalanceAminoMsg;
                fromProtoMsg(message: _39.BalanceProtoMsg): _39.Balance;
                toProto(message: _39.Balance): Uint8Array;
                toProtoMsg(message: _39.Balance): _39.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _38.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Params;
                fromPartial(object: Partial<_38.Params>): _38.Params;
                fromAmino(object: _38.ParamsAmino): _38.Params;
                toAmino(message: _38.Params): _38.ParamsAmino;
                fromAminoMsg(object: _38.ParamsAminoMsg): _38.Params;
                toAminoMsg(message: _38.Params): _38.ParamsAminoMsg;
                fromProtoMsg(message: _38.ParamsProtoMsg): _38.Params;
                toProto(message: _38.Params): Uint8Array;
                toProtoMsg(message: _38.Params): _38.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _38.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.SendEnabled;
                fromPartial(object: Partial<_38.SendEnabled>): _38.SendEnabled;
                fromAmino(object: _38.SendEnabledAmino): _38.SendEnabled;
                toAmino(message: _38.SendEnabled): _38.SendEnabledAmino;
                fromAminoMsg(object: _38.SendEnabledAminoMsg): _38.SendEnabled;
                toAminoMsg(message: _38.SendEnabled): _38.SendEnabledAminoMsg;
                fromProtoMsg(message: _38.SendEnabledProtoMsg): _38.SendEnabled;
                toProto(message: _38.SendEnabled): Uint8Array;
                toProtoMsg(message: _38.SendEnabled): _38.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _38.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Input;
                fromPartial(object: Partial<_38.Input>): _38.Input;
                fromAmino(object: _38.InputAmino): _38.Input;
                toAmino(message: _38.Input): _38.InputAmino;
                fromAminoMsg(object: _38.InputAminoMsg): _38.Input;
                toAminoMsg(message: _38.Input): _38.InputAminoMsg;
                fromProtoMsg(message: _38.InputProtoMsg): _38.Input;
                toProto(message: _38.Input): Uint8Array;
                toProtoMsg(message: _38.Input): _38.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _38.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Output;
                fromPartial(object: Partial<_38.Output>): _38.Output;
                fromAmino(object: _38.OutputAmino): _38.Output;
                toAmino(message: _38.Output): _38.OutputAmino;
                fromAminoMsg(object: _38.OutputAminoMsg): _38.Output;
                toAminoMsg(message: _38.Output): _38.OutputAminoMsg;
                fromProtoMsg(message: _38.OutputProtoMsg): _38.Output;
                toProto(message: _38.Output): Uint8Array;
                toProtoMsg(message: _38.Output): _38.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _38.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Supply;
                fromPartial(object: Partial<_38.Supply>): _38.Supply;
                fromAmino(object: _38.SupplyAmino): _38.Supply;
                toAmino(message: _38.Supply): _38.SupplyAmino;
                fromAminoMsg(object: _38.SupplyAminoMsg): _38.Supply;
                toAminoMsg(message: _38.Supply): _38.SupplyAminoMsg;
                fromProtoMsg(message: _38.SupplyProtoMsg): _38.Supply;
                toProto(message: _38.Supply): Uint8Array;
                toProtoMsg(message: _38.Supply): _38.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _38.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.DenomUnit;
                fromPartial(object: Partial<_38.DenomUnit>): _38.DenomUnit;
                fromAmino(object: _38.DenomUnitAmino): _38.DenomUnit;
                toAmino(message: _38.DenomUnit): _38.DenomUnitAmino;
                fromAminoMsg(object: _38.DenomUnitAminoMsg): _38.DenomUnit;
                toAminoMsg(message: _38.DenomUnit): _38.DenomUnitAminoMsg;
                fromProtoMsg(message: _38.DenomUnitProtoMsg): _38.DenomUnit;
                toProto(message: _38.DenomUnit): Uint8Array;
                toProtoMsg(message: _38.DenomUnit): _38.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _38.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Metadata;
                fromPartial(object: Partial<_38.Metadata>): _38.Metadata;
                fromAmino(object: _38.MetadataAmino): _38.Metadata;
                toAmino(message: _38.Metadata): _38.MetadataAmino;
                fromAminoMsg(object: _38.MetadataAminoMsg): _38.Metadata;
                toAminoMsg(message: _38.Metadata): _38.MetadataAminoMsg;
                fromProtoMsg(message: _38.MetadataProtoMsg): _38.Metadata;
                toProto(message: _38.Metadata): Uint8Array;
                toProtoMsg(message: _38.Metadata): _38.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _37.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.SendAuthorization;
                fromPartial(object: Partial<_37.SendAuthorization>): _37.SendAuthorization;
                fromAmino(object: _37.SendAuthorizationAmino): _37.SendAuthorization;
                toAmino(message: _37.SendAuthorization): _37.SendAuthorizationAmino;
                fromAminoMsg(object: _37.SendAuthorizationAminoMsg): _37.SendAuthorization;
                toAminoMsg(message: _37.SendAuthorization): _37.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _37.SendAuthorizationProtoMsg): _37.SendAuthorization;
                toProto(message: _37.SendAuthorization): Uint8Array;
                toProtoMsg(message: _37.SendAuthorization): _37.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _43.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.GenesisOwners;
                fromPartial(object: Partial<_43.GenesisOwners>): _43.GenesisOwners;
                fromAmino(object: _43.GenesisOwnersAmino): _43.GenesisOwners;
                toAmino(message: _43.GenesisOwners): _43.GenesisOwnersAmino;
                fromAminoMsg(object: _43.GenesisOwnersAminoMsg): _43.GenesisOwners;
                toAminoMsg(message: _43.GenesisOwners): _43.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _43.GenesisOwnersProtoMsg): _43.GenesisOwners;
                toProto(message: _43.GenesisOwners): Uint8Array;
                toProtoMsg(message: _43.GenesisOwners): _43.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _43.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
                fromAmino(object: _43.GenesisStateAmino): _43.GenesisState;
                toAmino(message: _43.GenesisState): _43.GenesisStateAmino;
                fromAminoMsg(object: _43.GenesisStateAminoMsg): _43.GenesisState;
                toAminoMsg(message: _43.GenesisState): _43.GenesisStateAminoMsg;
                fromProtoMsg(message: _43.GenesisStateProtoMsg): _43.GenesisState;
                toProto(message: _43.GenesisState): Uint8Array;
                toProtoMsg(message: _43.GenesisState): _43.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _42.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Capability;
                fromPartial(object: Partial<_42.Capability>): _42.Capability;
                fromAmino(object: _42.CapabilityAmino): _42.Capability;
                toAmino(message: _42.Capability): _42.CapabilityAmino;
                fromAminoMsg(object: _42.CapabilityAminoMsg): _42.Capability;
                toAminoMsg(message: _42.Capability): _42.CapabilityAminoMsg;
                fromProtoMsg(message: _42.CapabilityProtoMsg): _42.Capability;
                toProto(message: _42.Capability): Uint8Array;
                toProtoMsg(message: _42.Capability): _42.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _42.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Owner;
                fromPartial(object: Partial<_42.Owner>): _42.Owner;
                fromAmino(object: _42.OwnerAmino): _42.Owner;
                toAmino(message: _42.Owner): _42.OwnerAmino;
                fromAminoMsg(object: _42.OwnerAminoMsg): _42.Owner;
                toAminoMsg(message: _42.Owner): _42.OwnerAminoMsg;
                fromProtoMsg(message: _42.OwnerProtoMsg): _42.Owner;
                toProto(message: _42.Owner): Uint8Array;
                toProtoMsg(message: _42.Owner): _42.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _42.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.CapabilityOwners;
                fromPartial(object: Partial<_42.CapabilityOwners>): _42.CapabilityOwners;
                fromAmino(object: _42.CapabilityOwnersAmino): _42.CapabilityOwners;
                toAmino(message: _42.CapabilityOwners): _42.CapabilityOwnersAmino;
                fromAminoMsg(object: _42.CapabilityOwnersAminoMsg): _42.CapabilityOwners;
                toAminoMsg(message: _42.CapabilityOwners): _42.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _42.CapabilityOwnersProtoMsg): _42.CapabilityOwners;
                toProto(message: _42.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _42.CapabilityOwners): _42.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _45.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _45.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _45.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _45.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _45.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _45.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _45.MsgVerifyInvariant) => _45.MsgVerifyInvariantAmino;
                    fromAmino: (object: _45.MsgVerifyInvariantAmino) => _45.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _45.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.MsgVerifyInvariant;
                fromPartial(object: Partial<_45.MsgVerifyInvariant>): _45.MsgVerifyInvariant;
                fromAmino(object: _45.MsgVerifyInvariantAmino): _45.MsgVerifyInvariant;
                toAmino(message: _45.MsgVerifyInvariant): _45.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _45.MsgVerifyInvariantAminoMsg): _45.MsgVerifyInvariant;
                toAminoMsg(message: _45.MsgVerifyInvariant): _45.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _45.MsgVerifyInvariantProtoMsg): _45.MsgVerifyInvariant;
                toProto(message: _45.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _45.MsgVerifyInvariant): _45.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _45.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_45.MsgVerifyInvariantResponse>): _45.MsgVerifyInvariantResponse;
                fromAmino(_: _45.MsgVerifyInvariantResponseAmino): _45.MsgVerifyInvariantResponse;
                toAmino(_: _45.MsgVerifyInvariantResponse): _45.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _45.MsgVerifyInvariantResponseAminoMsg): _45.MsgVerifyInvariantResponse;
                toAminoMsg(message: _45.MsgVerifyInvariantResponse): _45.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _45.MsgVerifyInvariantResponseProtoMsg): _45.MsgVerifyInvariantResponse;
                toProto(message: _45.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _45.MsgVerifyInvariantResponse): _45.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _44.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.GenesisState;
                fromPartial(object: Partial<_44.GenesisState>): _44.GenesisState;
                fromAmino(object: _44.GenesisStateAmino): _44.GenesisState;
                toAmino(message: _44.GenesisState): _44.GenesisStateAmino;
                fromAminoMsg(object: _44.GenesisStateAminoMsg): _44.GenesisState;
                toAminoMsg(message: _44.GenesisState): _44.GenesisStateAminoMsg;
                fromProtoMsg(message: _44.GenesisStateProtoMsg): _44.GenesisState;
                toProto(message: _44.GenesisState): Uint8Array;
                toProtoMsg(message: _44.GenesisState): _44.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _46.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.PubKey;
                fromPartial(object: Partial<_46.PubKey>): _46.PubKey;
                fromAmino(object: _46.PubKeyAmino): _46.PubKey;
                toAmino(message: _46.PubKey): _46.PubKeyAmino;
                fromAminoMsg(object: _46.PubKeyAminoMsg): _46.PubKey;
                toAminoMsg(message: _46.PubKey): _46.PubKeyAminoMsg;
                fromProtoMsg(message: _46.PubKeyProtoMsg): _46.PubKey;
                toProto(message: _46.PubKey): Uint8Array;
                toProtoMsg(message: _46.PubKey): _46.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _46.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.PrivKey;
                fromPartial(object: Partial<_46.PrivKey>): _46.PrivKey;
                fromAmino(object: _46.PrivKeyAmino): _46.PrivKey;
                toAmino(message: _46.PrivKey): _46.PrivKeyAmino;
                fromAminoMsg(object: _46.PrivKeyAminoMsg): _46.PrivKey;
                toAminoMsg(message: _46.PrivKey): _46.PrivKeyAminoMsg;
                fromProtoMsg(message: _46.PrivKeyProtoMsg): _46.PrivKey;
                toProto(message: _46.PrivKey): Uint8Array;
                toProtoMsg(message: _46.PrivKey): _46.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _47.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _47.BIP44Params;
                    fromPartial(object: Partial<_47.BIP44Params>): _47.BIP44Params;
                    fromAmino(object: _47.BIP44ParamsAmino): _47.BIP44Params;
                    toAmino(message: _47.BIP44Params): _47.BIP44ParamsAmino;
                    fromAminoMsg(object: _47.BIP44ParamsAminoMsg): _47.BIP44Params;
                    toAminoMsg(message: _47.BIP44Params): _47.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _47.BIP44ParamsProtoMsg): _47.BIP44Params;
                    toProto(message: _47.BIP44Params): Uint8Array;
                    toProtoMsg(message: _47.BIP44Params): _47.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _48.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Record;
                    fromPartial(object: Partial<_48.Record>): _48.Record;
                    fromAmino(object: _48.RecordAmino): _48.Record;
                    toAmino(message: _48.Record): _48.RecordAmino;
                    fromAminoMsg(object: _48.RecordAminoMsg): _48.Record;
                    toAminoMsg(message: _48.Record): _48.RecordAminoMsg;
                    fromProtoMsg(message: _48.RecordProtoMsg): _48.Record;
                    toProto(message: _48.Record): Uint8Array;
                    toProtoMsg(message: _48.Record): _48.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _48.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Record_Local;
                    fromPartial(object: Partial<_48.Record_Local>): _48.Record_Local;
                    fromAmino(object: _48.Record_LocalAmino): _48.Record_Local;
                    toAmino(message: _48.Record_Local): _48.Record_LocalAmino;
                    fromAminoMsg(object: _48.Record_LocalAminoMsg): _48.Record_Local;
                    toAminoMsg(message: _48.Record_Local): _48.Record_LocalAminoMsg;
                    fromProtoMsg(message: _48.Record_LocalProtoMsg): _48.Record_Local;
                    toProto(message: _48.Record_Local): Uint8Array;
                    toProtoMsg(message: _48.Record_Local): _48.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _48.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _48.Record_Ledger;
                    fromPartial(object: Partial<_48.Record_Ledger>): _48.Record_Ledger;
                    fromAmino(object: _48.Record_LedgerAmino): _48.Record_Ledger;
                    toAmino(message: _48.Record_Ledger): _48.Record_LedgerAmino;
                    fromAminoMsg(object: _48.Record_LedgerAminoMsg): _48.Record_Ledger;
                    toAminoMsg(message: _48.Record_Ledger): _48.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _48.Record_LedgerProtoMsg): _48.Record_Ledger;
                    toProto(message: _48.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _48.Record_Ledger): _48.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _48.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.Record_Multi;
                    fromPartial(_: Partial<_48.Record_Multi>): _48.Record_Multi;
                    fromAmino(_: _48.Record_MultiAmino): _48.Record_Multi;
                    toAmino(_: _48.Record_Multi): _48.Record_MultiAmino;
                    fromAminoMsg(object: _48.Record_MultiAminoMsg): _48.Record_Multi;
                    toAminoMsg(message: _48.Record_Multi): _48.Record_MultiAminoMsg;
                    fromProtoMsg(message: _48.Record_MultiProtoMsg): _48.Record_Multi;
                    toProto(message: _48.Record_Multi): Uint8Array;
                    toProtoMsg(message: _48.Record_Multi): _48.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _48.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _48.Record_Offline;
                    fromPartial(_: Partial<_48.Record_Offline>): _48.Record_Offline;
                    fromAmino(_: _48.Record_OfflineAmino): _48.Record_Offline;
                    toAmino(_: _48.Record_Offline): _48.Record_OfflineAmino;
                    fromAminoMsg(object: _48.Record_OfflineAminoMsg): _48.Record_Offline;
                    toAminoMsg(message: _48.Record_Offline): _48.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _48.Record_OfflineProtoMsg): _48.Record_Offline;
                    toProto(message: _48.Record_Offline): Uint8Array;
                    toProtoMsg(message: _48.Record_Offline): _48.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _49.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.LegacyAminoPubKey;
                fromPartial(object: Partial<_49.LegacyAminoPubKey>): _49.LegacyAminoPubKey;
                fromAmino(object: _49.LegacyAminoPubKeyAmino): _49.LegacyAminoPubKey;
                toAmino(message: _49.LegacyAminoPubKey): _49.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _49.LegacyAminoPubKeyAminoMsg): _49.LegacyAminoPubKey;
                toAminoMsg(message: _49.LegacyAminoPubKey): _49.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _49.LegacyAminoPubKeyProtoMsg): _49.LegacyAminoPubKey;
                toProto(message: _49.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _49.LegacyAminoPubKey): _49.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _50.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.PubKey;
                fromPartial(object: Partial<_50.PubKey>): _50.PubKey;
                fromAmino(object: _50.PubKeyAmino): _50.PubKey;
                toAmino(message: _50.PubKey): _50.PubKeyAmino;
                fromAminoMsg(object: _50.PubKeyAminoMsg): _50.PubKey;
                toAminoMsg(message: _50.PubKey): _50.PubKeyAminoMsg;
                fromProtoMsg(message: _50.PubKeyProtoMsg): _50.PubKey;
                toProto(message: _50.PubKey): Uint8Array;
                toProtoMsg(message: _50.PubKey): _50.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _50.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.PrivKey;
                fromPartial(object: Partial<_50.PrivKey>): _50.PrivKey;
                fromAmino(object: _50.PrivKeyAmino): _50.PrivKey;
                toAmino(message: _50.PrivKey): _50.PrivKeyAmino;
                fromAminoMsg(object: _50.PrivKeyAminoMsg): _50.PrivKey;
                toAminoMsg(message: _50.PrivKey): _50.PrivKeyAminoMsg;
                fromProtoMsg(message: _50.PrivKeyProtoMsg): _50.PrivKey;
                toProto(message: _50.PrivKey): Uint8Array;
                toProtoMsg(message: _50.PrivKey): _50.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _51.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PubKey;
                fromPartial(object: Partial<_51.PubKey>): _51.PubKey;
                fromAmino(object: _51.PubKeyAmino): _51.PubKey;
                toAmino(message: _51.PubKey): _51.PubKeyAmino;
                fromAminoMsg(object: _51.PubKeyAminoMsg): _51.PubKey;
                toAminoMsg(message: _51.PubKey): _51.PubKeyAminoMsg;
                fromProtoMsg(message: _51.PubKeyProtoMsg): _51.PubKey;
                toProto(message: _51.PubKey): Uint8Array;
                toProtoMsg(message: _51.PubKey): _51.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _51.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.PrivKey;
                fromPartial(object: Partial<_51.PrivKey>): _51.PrivKey;
                fromAmino(object: _51.PrivKeyAmino): _51.PrivKey;
                toAmino(message: _51.PrivKey): _51.PrivKeyAmino;
                fromAminoMsg(object: _51.PrivKeyAminoMsg): _51.PrivKey;
                toAminoMsg(message: _51.PrivKey): _51.PrivKeyAminoMsg;
                fromProtoMsg(message: _51.PrivKeyProtoMsg): _51.PrivKey;
                toProto(message: _51.PrivKey): Uint8Array;
                toProtoMsg(message: _51.PrivKey): _51.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                validatorOutstandingRewards(request: _54.QueryValidatorOutstandingRewardsRequest): Promise<_54.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _54.QueryValidatorCommissionRequest): Promise<_54.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _54.QueryValidatorSlashesRequest): Promise<_54.QueryValidatorSlashesResponse>;
                delegationRewards(request: _54.QueryDelegationRewardsRequest): Promise<_54.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _54.QueryDelegationTotalRewardsRequest): Promise<_54.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _54.QueryDelegatorValidatorsRequest): Promise<_54.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _54.QueryDelegatorWithdrawAddressRequest): Promise<_54.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _54.QueryCommunityPoolRequest): Promise<_54.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _55.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _55.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _55.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _55.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _55.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _55.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _55.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _55.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _55.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _55.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _55.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _55.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _55.MsgSetWithdrawAddress) => _55.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _55.MsgSetWithdrawAddressAmino) => _55.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _55.MsgWithdrawDelegatorReward) => _55.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _55.MsgWithdrawDelegatorRewardAmino) => _55.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _55.MsgWithdrawValidatorCommission) => _55.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _55.MsgWithdrawValidatorCommissionAmino) => _55.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _55.MsgFundCommunityPool) => _55.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _55.MsgFundCommunityPoolAmino) => _55.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _55.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_55.MsgSetWithdrawAddress>): _55.MsgSetWithdrawAddress;
                fromAmino(object: _55.MsgSetWithdrawAddressAmino): _55.MsgSetWithdrawAddress;
                toAmino(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _55.MsgSetWithdrawAddressAminoMsg): _55.MsgSetWithdrawAddress;
                toAminoMsg(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _55.MsgSetWithdrawAddressProtoMsg): _55.MsgSetWithdrawAddress;
                toProto(message: _55.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _55.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_55.MsgSetWithdrawAddressResponse>): _55.MsgSetWithdrawAddressResponse;
                fromAmino(_: _55.MsgSetWithdrawAddressResponseAmino): _55.MsgSetWithdrawAddressResponse;
                toAmino(_: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _55.MsgSetWithdrawAddressResponseAminoMsg): _55.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _55.MsgSetWithdrawAddressResponseProtoMsg): _55.MsgSetWithdrawAddressResponse;
                toProto(message: _55.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_55.MsgWithdrawDelegatorReward>): _55.MsgWithdrawDelegatorReward;
                fromAmino(object: _55.MsgWithdrawDelegatorRewardAmino): _55.MsgWithdrawDelegatorReward;
                toAmino(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _55.MsgWithdrawDelegatorRewardAminoMsg): _55.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawDelegatorRewardProtoMsg): _55.MsgWithdrawDelegatorReward;
                toProto(message: _55.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_55.MsgWithdrawDelegatorRewardResponse>): _55.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _55.MsgWithdrawDelegatorRewardResponseAmino): _55.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _55.MsgWithdrawDelegatorRewardResponseAminoMsg): _55.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawDelegatorRewardResponseProtoMsg): _55.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _55.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_55.MsgWithdrawValidatorCommission>): _55.MsgWithdrawValidatorCommission;
                fromAmino(object: _55.MsgWithdrawValidatorCommissionAmino): _55.MsgWithdrawValidatorCommission;
                toAmino(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _55.MsgWithdrawValidatorCommissionAminoMsg): _55.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawValidatorCommissionProtoMsg): _55.MsgWithdrawValidatorCommission;
                toProto(message: _55.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_55.MsgWithdrawValidatorCommissionResponse>): _55.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _55.MsgWithdrawValidatorCommissionResponseAmino): _55.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _55.MsgWithdrawValidatorCommissionResponseAminoMsg): _55.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawValidatorCommissionResponseProtoMsg): _55.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _55.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _55.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgFundCommunityPool;
                fromPartial(object: Partial<_55.MsgFundCommunityPool>): _55.MsgFundCommunityPool;
                fromAmino(object: _55.MsgFundCommunityPoolAmino): _55.MsgFundCommunityPool;
                toAmino(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _55.MsgFundCommunityPoolAminoMsg): _55.MsgFundCommunityPool;
                toAminoMsg(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _55.MsgFundCommunityPoolProtoMsg): _55.MsgFundCommunityPool;
                toProto(message: _55.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _55.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_55.MsgFundCommunityPoolResponse>): _55.MsgFundCommunityPoolResponse;
                fromAmino(_: _55.MsgFundCommunityPoolResponseAmino): _55.MsgFundCommunityPoolResponse;
                toAmino(_: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _55.MsgFundCommunityPoolResponseAminoMsg): _55.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _55.MsgFundCommunityPoolResponseProtoMsg): _55.MsgFundCommunityPoolResponse;
                toProto(message: _55.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _54.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.QueryParamsRequest;
                fromPartial(_: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
                fromAmino(_: _54.QueryParamsRequestAmino): _54.QueryParamsRequest;
                toAmino(_: _54.QueryParamsRequest): _54.QueryParamsRequestAmino;
                fromAminoMsg(object: _54.QueryParamsRequestAminoMsg): _54.QueryParamsRequest;
                toAminoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryParamsRequestProtoMsg): _54.QueryParamsRequest;
                toProto(message: _54.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _54.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
                fromAmino(object: _54.QueryParamsResponseAmino): _54.QueryParamsResponse;
                toAmino(message: _54.QueryParamsResponse): _54.QueryParamsResponseAmino;
                fromAminoMsg(object: _54.QueryParamsResponseAminoMsg): _54.QueryParamsResponse;
                toAminoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryParamsResponseProtoMsg): _54.QueryParamsResponse;
                toProto(message: _54.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_54.QueryValidatorOutstandingRewardsRequest>): _54.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _54.QueryValidatorOutstandingRewardsRequestAmino): _54.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorOutstandingRewardsRequestAminoMsg): _54.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorOutstandingRewardsRequestProtoMsg): _54.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _54.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_54.QueryValidatorOutstandingRewardsResponse>): _54.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _54.QueryValidatorOutstandingRewardsResponseAmino): _54.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorOutstandingRewardsResponseAminoMsg): _54.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorOutstandingRewardsResponseProtoMsg): _54.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _54.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_54.QueryValidatorCommissionRequest>): _54.QueryValidatorCommissionRequest;
                fromAmino(object: _54.QueryValidatorCommissionRequestAmino): _54.QueryValidatorCommissionRequest;
                toAmino(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorCommissionRequestAminoMsg): _54.QueryValidatorCommissionRequest;
                toAminoMsg(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorCommissionRequestProtoMsg): _54.QueryValidatorCommissionRequest;
                toProto(message: _54.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_54.QueryValidatorCommissionResponse>): _54.QueryValidatorCommissionResponse;
                fromAmino(object: _54.QueryValidatorCommissionResponseAmino): _54.QueryValidatorCommissionResponse;
                toAmino(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorCommissionResponseAminoMsg): _54.QueryValidatorCommissionResponse;
                toAminoMsg(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorCommissionResponseProtoMsg): _54.QueryValidatorCommissionResponse;
                toProto(message: _54.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_54.QueryValidatorSlashesRequest>): _54.QueryValidatorSlashesRequest;
                fromAmino(object: _54.QueryValidatorSlashesRequestAmino): _54.QueryValidatorSlashesRequest;
                toAmino(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorSlashesRequestAminoMsg): _54.QueryValidatorSlashesRequest;
                toAminoMsg(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorSlashesRequestProtoMsg): _54.QueryValidatorSlashesRequest;
                toProto(message: _54.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_54.QueryValidatorSlashesResponse>): _54.QueryValidatorSlashesResponse;
                fromAmino(object: _54.QueryValidatorSlashesResponseAmino): _54.QueryValidatorSlashesResponse;
                toAmino(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorSlashesResponseAminoMsg): _54.QueryValidatorSlashesResponse;
                toAminoMsg(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorSlashesResponseProtoMsg): _54.QueryValidatorSlashesResponse;
                toProto(message: _54.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_54.QueryDelegationRewardsRequest>): _54.QueryDelegationRewardsRequest;
                fromAmino(object: _54.QueryDelegationRewardsRequestAmino): _54.QueryDelegationRewardsRequest;
                toAmino(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegationRewardsRequestAminoMsg): _54.QueryDelegationRewardsRequest;
                toAminoMsg(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationRewardsRequestProtoMsg): _54.QueryDelegationRewardsRequest;
                toProto(message: _54.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_54.QueryDelegationRewardsResponse>): _54.QueryDelegationRewardsResponse;
                fromAmino(object: _54.QueryDelegationRewardsResponseAmino): _54.QueryDelegationRewardsResponse;
                toAmino(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegationRewardsResponseAminoMsg): _54.QueryDelegationRewardsResponse;
                toAminoMsg(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationRewardsResponseProtoMsg): _54.QueryDelegationRewardsResponse;
                toProto(message: _54.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_54.QueryDelegationTotalRewardsRequest>): _54.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _54.QueryDelegationTotalRewardsRequestAmino): _54.QueryDelegationTotalRewardsRequest;
                toAmino(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegationTotalRewardsRequestAminoMsg): _54.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationTotalRewardsRequestProtoMsg): _54.QueryDelegationTotalRewardsRequest;
                toProto(message: _54.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_54.QueryDelegationTotalRewardsResponse>): _54.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _54.QueryDelegationTotalRewardsResponseAmino): _54.QueryDelegationTotalRewardsResponse;
                toAmino(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegationTotalRewardsResponseAminoMsg): _54.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationTotalRewardsResponseProtoMsg): _54.QueryDelegationTotalRewardsResponse;
                toProto(message: _54.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_54.QueryDelegatorValidatorsRequest>): _54.QueryDelegatorValidatorsRequest;
                fromAmino(object: _54.QueryDelegatorValidatorsRequestAmino): _54.QueryDelegatorValidatorsRequest;
                toAmino(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegatorValidatorsRequestAminoMsg): _54.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorValidatorsRequestProtoMsg): _54.QueryDelegatorValidatorsRequest;
                toProto(message: _54.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_54.QueryDelegatorValidatorsResponse>): _54.QueryDelegatorValidatorsResponse;
                fromAmino(object: _54.QueryDelegatorValidatorsResponseAmino): _54.QueryDelegatorValidatorsResponse;
                toAmino(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegatorValidatorsResponseAminoMsg): _54.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorValidatorsResponseProtoMsg): _54.QueryDelegatorValidatorsResponse;
                toProto(message: _54.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_54.QueryDelegatorWithdrawAddressRequest>): _54.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _54.QueryDelegatorWithdrawAddressRequestAmino): _54.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _54.QueryDelegatorWithdrawAddressRequestAminoMsg): _54.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorWithdrawAddressRequestProtoMsg): _54.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _54.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_54.QueryDelegatorWithdrawAddressResponse>): _54.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _54.QueryDelegatorWithdrawAddressResponseAmino): _54.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _54.QueryDelegatorWithdrawAddressResponseAminoMsg): _54.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorWithdrawAddressResponseProtoMsg): _54.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _54.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _54.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_54.QueryCommunityPoolRequest>): _54.QueryCommunityPoolRequest;
                fromAmino(_: _54.QueryCommunityPoolRequestAmino): _54.QueryCommunityPoolRequest;
                toAmino(_: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _54.QueryCommunityPoolRequestAminoMsg): _54.QueryCommunityPoolRequest;
                toAminoMsg(message: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _54.QueryCommunityPoolRequestProtoMsg): _54.QueryCommunityPoolRequest;
                toProto(message: _54.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _54.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_54.QueryCommunityPoolResponse>): _54.QueryCommunityPoolResponse;
                fromAmino(object: _54.QueryCommunityPoolResponseAmino): _54.QueryCommunityPoolResponse;
                toAmino(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _54.QueryCommunityPoolResponseAminoMsg): _54.QueryCommunityPoolResponse;
                toAminoMsg(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _54.QueryCommunityPoolResponseProtoMsg): _54.QueryCommunityPoolResponse;
                toProto(message: _54.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _53.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_53.DelegatorWithdrawInfo>): _53.DelegatorWithdrawInfo;
                fromAmino(object: _53.DelegatorWithdrawInfoAmino): _53.DelegatorWithdrawInfo;
                toAmino(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _53.DelegatorWithdrawInfoAminoMsg): _53.DelegatorWithdrawInfo;
                toAminoMsg(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _53.DelegatorWithdrawInfoProtoMsg): _53.DelegatorWithdrawInfo;
                toProto(message: _53.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorOutstandingRewardsRecord>): _53.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _53.ValidatorOutstandingRewardsRecordAmino): _53.ValidatorOutstandingRewardsRecord;
                toAmino(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorOutstandingRewardsRecordAminoMsg): _53.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorOutstandingRewardsRecordProtoMsg): _53.ValidatorOutstandingRewardsRecord;
                toProto(message: _53.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_53.ValidatorAccumulatedCommissionRecord>): _53.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _53.ValidatorAccumulatedCommissionRecordAmino): _53.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _53.ValidatorAccumulatedCommissionRecordAminoMsg): _53.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorAccumulatedCommissionRecordProtoMsg): _53.ValidatorAccumulatedCommissionRecord;
                toProto(message: _53.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorHistoricalRewardsRecord>): _53.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _53.ValidatorHistoricalRewardsRecordAmino): _53.ValidatorHistoricalRewardsRecord;
                toAmino(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorHistoricalRewardsRecordAminoMsg): _53.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorHistoricalRewardsRecordProtoMsg): _53.ValidatorHistoricalRewardsRecord;
                toProto(message: _53.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorCurrentRewardsRecord>): _53.ValidatorCurrentRewardsRecord;
                fromAmino(object: _53.ValidatorCurrentRewardsRecordAmino): _53.ValidatorCurrentRewardsRecord;
                toAmino(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorCurrentRewardsRecordAminoMsg): _53.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorCurrentRewardsRecordProtoMsg): _53.ValidatorCurrentRewardsRecord;
                toProto(message: _53.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _53.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_53.DelegatorStartingInfoRecord>): _53.DelegatorStartingInfoRecord;
                fromAmino(object: _53.DelegatorStartingInfoRecordAmino): _53.DelegatorStartingInfoRecord;
                toAmino(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _53.DelegatorStartingInfoRecordAminoMsg): _53.DelegatorStartingInfoRecord;
                toAminoMsg(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _53.DelegatorStartingInfoRecordProtoMsg): _53.DelegatorStartingInfoRecord;
                toProto(message: _53.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_53.ValidatorSlashEventRecord>): _53.ValidatorSlashEventRecord;
                fromAmino(object: _53.ValidatorSlashEventRecordAmino): _53.ValidatorSlashEventRecord;
                toAmino(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventRecordAminoMsg): _53.ValidatorSlashEventRecord;
                toAminoMsg(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventRecordProtoMsg): _53.ValidatorSlashEventRecord;
                toProto(message: _53.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _53.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                toProto(message: _53.GenesisState): Uint8Array;
                toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _52.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Params;
                fromPartial(object: Partial<_52.Params>): _52.Params;
                fromAmino(object: _52.ParamsAmino): _52.Params;
                toAmino(message: _52.Params): _52.ParamsAmino;
                fromAminoMsg(object: _52.ParamsAminoMsg): _52.Params;
                toAminoMsg(message: _52.Params): _52.ParamsAminoMsg;
                fromProtoMsg(message: _52.ParamsProtoMsg): _52.Params;
                toProto(message: _52.Params): Uint8Array;
                toProtoMsg(message: _52.Params): _52.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_52.ValidatorHistoricalRewards>): _52.ValidatorHistoricalRewards;
                fromAmino(object: _52.ValidatorHistoricalRewardsAmino): _52.ValidatorHistoricalRewards;
                toAmino(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _52.ValidatorHistoricalRewardsAminoMsg): _52.ValidatorHistoricalRewards;
                toAminoMsg(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorHistoricalRewardsProtoMsg): _52.ValidatorHistoricalRewards;
                toProto(message: _52.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorCurrentRewards;
                fromPartial(object: Partial<_52.ValidatorCurrentRewards>): _52.ValidatorCurrentRewards;
                fromAmino(object: _52.ValidatorCurrentRewardsAmino): _52.ValidatorCurrentRewards;
                toAmino(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _52.ValidatorCurrentRewardsAminoMsg): _52.ValidatorCurrentRewards;
                toAminoMsg(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorCurrentRewardsProtoMsg): _52.ValidatorCurrentRewards;
                toProto(message: _52.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _52.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_52.ValidatorAccumulatedCommission>): _52.ValidatorAccumulatedCommission;
                fromAmino(object: _52.ValidatorAccumulatedCommissionAmino): _52.ValidatorAccumulatedCommission;
                toAmino(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _52.ValidatorAccumulatedCommissionAminoMsg): _52.ValidatorAccumulatedCommission;
                toAminoMsg(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _52.ValidatorAccumulatedCommissionProtoMsg): _52.ValidatorAccumulatedCommission;
                toProto(message: _52.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_52.ValidatorOutstandingRewards>): _52.ValidatorOutstandingRewards;
                fromAmino(object: _52.ValidatorOutstandingRewardsAmino): _52.ValidatorOutstandingRewards;
                toAmino(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _52.ValidatorOutstandingRewardsAminoMsg): _52.ValidatorOutstandingRewards;
                toAminoMsg(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorOutstandingRewardsProtoMsg): _52.ValidatorOutstandingRewards;
                toProto(message: _52.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _52.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorSlashEvent;
                fromPartial(object: Partial<_52.ValidatorSlashEvent>): _52.ValidatorSlashEvent;
                fromAmino(object: _52.ValidatorSlashEventAmino): _52.ValidatorSlashEvent;
                toAmino(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventAmino;
                fromAminoMsg(object: _52.ValidatorSlashEventAminoMsg): _52.ValidatorSlashEvent;
                toAminoMsg(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _52.ValidatorSlashEventProtoMsg): _52.ValidatorSlashEvent;
                toProto(message: _52.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _52.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.ValidatorSlashEvents;
                fromPartial(object: Partial<_52.ValidatorSlashEvents>): _52.ValidatorSlashEvents;
                fromAmino(object: _52.ValidatorSlashEventsAmino): _52.ValidatorSlashEvents;
                toAmino(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _52.ValidatorSlashEventsAminoMsg): _52.ValidatorSlashEvents;
                toAminoMsg(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _52.ValidatorSlashEventsProtoMsg): _52.ValidatorSlashEvents;
                toProto(message: _52.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _52.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.FeePool;
                fromPartial(object: Partial<_52.FeePool>): _52.FeePool;
                fromAmino(object: _52.FeePoolAmino): _52.FeePool;
                toAmino(message: _52.FeePool): _52.FeePoolAmino;
                fromAminoMsg(object: _52.FeePoolAminoMsg): _52.FeePool;
                toAminoMsg(message: _52.FeePool): _52.FeePoolAminoMsg;
                fromProtoMsg(message: _52.FeePoolProtoMsg): _52.FeePool;
                toProto(message: _52.FeePool): Uint8Array;
                toProtoMsg(message: _52.FeePool): _52.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _52.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_52.CommunityPoolSpendProposal>): _52.CommunityPoolSpendProposal;
                fromAmino(object: _52.CommunityPoolSpendProposalAmino): _52.CommunityPoolSpendProposal;
                toAmino(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _52.CommunityPoolSpendProposalAminoMsg): _52.CommunityPoolSpendProposal;
                toAminoMsg(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _52.CommunityPoolSpendProposalProtoMsg): _52.CommunityPoolSpendProposal;
                toProto(message: _52.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _52.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.DelegatorStartingInfo;
                fromPartial(object: Partial<_52.DelegatorStartingInfo>): _52.DelegatorStartingInfo;
                fromAmino(object: _52.DelegatorStartingInfoAmino): _52.DelegatorStartingInfo;
                toAmino(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _52.DelegatorStartingInfoAminoMsg): _52.DelegatorStartingInfo;
                toAminoMsg(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _52.DelegatorStartingInfoProtoMsg): _52.DelegatorStartingInfo;
                toProto(message: _52.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _52.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.DelegationDelegatorReward;
                fromPartial(object: Partial<_52.DelegationDelegatorReward>): _52.DelegationDelegatorReward;
                fromAmino(object: _52.DelegationDelegatorRewardAmino): _52.DelegationDelegatorReward;
                toAmino(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _52.DelegationDelegatorRewardAminoMsg): _52.DelegationDelegatorReward;
                toAminoMsg(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _52.DelegationDelegatorRewardProtoMsg): _52.DelegationDelegatorReward;
                toProto(message: _52.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _52.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_52.CommunityPoolSpendProposalWithDeposit>): _52.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _52.CommunityPoolSpendProposalWithDepositAmino): _52.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _52.CommunityPoolSpendProposalWithDepositAminoMsg): _52.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _52.CommunityPoolSpendProposalWithDepositProtoMsg): _52.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _52.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _209.MsgClientImpl;
            QueryClientImpl: typeof _193.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                evidence(request: _58.QueryEvidenceRequest): Promise<_58.QueryEvidenceResponse>;
                allEvidence(request?: _58.QueryAllEvidenceRequest): Promise<_58.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _174.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _59.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _59.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _59.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _59.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _59.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _59.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _59.MsgSubmitEvidence) => _59.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _59.MsgSubmitEvidenceAmino) => _59.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _59.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSubmitEvidence;
                fromPartial(object: Partial<_59.MsgSubmitEvidence>): _59.MsgSubmitEvidence;
                fromAmino(object: _59.MsgSubmitEvidenceAmino): _59.MsgSubmitEvidence;
                toAmino(message: _59.MsgSubmitEvidence): _59.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _59.MsgSubmitEvidenceAminoMsg): _59.MsgSubmitEvidence;
                toAminoMsg(message: _59.MsgSubmitEvidence): _59.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _59.MsgSubmitEvidenceProtoMsg): _59.MsgSubmitEvidence;
                toProto(message: _59.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _59.MsgSubmitEvidence): _59.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_59.MsgSubmitEvidenceResponse>): _59.MsgSubmitEvidenceResponse;
                fromAmino(object: _59.MsgSubmitEvidenceResponseAmino): _59.MsgSubmitEvidenceResponse;
                toAmino(message: _59.MsgSubmitEvidenceResponse): _59.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _59.MsgSubmitEvidenceResponseAminoMsg): _59.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _59.MsgSubmitEvidenceResponse): _59.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.MsgSubmitEvidenceResponseProtoMsg): _59.MsgSubmitEvidenceResponse;
                toProto(message: _59.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.MsgSubmitEvidenceResponse): _59.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _58.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryEvidenceRequest;
                fromPartial(object: Partial<_58.QueryEvidenceRequest>): _58.QueryEvidenceRequest;
                fromAmino(object: _58.QueryEvidenceRequestAmino): _58.QueryEvidenceRequest;
                toAmino(message: _58.QueryEvidenceRequest): _58.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _58.QueryEvidenceRequestAminoMsg): _58.QueryEvidenceRequest;
                toAminoMsg(message: _58.QueryEvidenceRequest): _58.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _58.QueryEvidenceRequestProtoMsg): _58.QueryEvidenceRequest;
                toProto(message: _58.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _58.QueryEvidenceRequest): _58.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _58.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryEvidenceResponse;
                fromPartial(object: Partial<_58.QueryEvidenceResponse>): _58.QueryEvidenceResponse;
                fromAmino(object: _58.QueryEvidenceResponseAmino): _58.QueryEvidenceResponse;
                toAmino(message: _58.QueryEvidenceResponse): _58.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _58.QueryEvidenceResponseAminoMsg): _58.QueryEvidenceResponse;
                toAminoMsg(message: _58.QueryEvidenceResponse): _58.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _58.QueryEvidenceResponseProtoMsg): _58.QueryEvidenceResponse;
                toProto(message: _58.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _58.QueryEvidenceResponse): _58.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _58.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_58.QueryAllEvidenceRequest>): _58.QueryAllEvidenceRequest;
                fromAmino(object: _58.QueryAllEvidenceRequestAmino): _58.QueryAllEvidenceRequest;
                toAmino(message: _58.QueryAllEvidenceRequest): _58.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _58.QueryAllEvidenceRequestAminoMsg): _58.QueryAllEvidenceRequest;
                toAminoMsg(message: _58.QueryAllEvidenceRequest): _58.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _58.QueryAllEvidenceRequestProtoMsg): _58.QueryAllEvidenceRequest;
                toProto(message: _58.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _58.QueryAllEvidenceRequest): _58.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _58.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_58.QueryAllEvidenceResponse>): _58.QueryAllEvidenceResponse;
                fromAmino(object: _58.QueryAllEvidenceResponseAmino): _58.QueryAllEvidenceResponse;
                toAmino(message: _58.QueryAllEvidenceResponse): _58.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _58.QueryAllEvidenceResponseAminoMsg): _58.QueryAllEvidenceResponse;
                toAminoMsg(message: _58.QueryAllEvidenceResponse): _58.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _58.QueryAllEvidenceResponseProtoMsg): _58.QueryAllEvidenceResponse;
                toProto(message: _58.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _58.QueryAllEvidenceResponse): _58.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _57.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.GenesisState;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
                fromAmino(object: _57.GenesisStateAmino): _57.GenesisState;
                toAmino(message: _57.GenesisState): _57.GenesisStateAmino;
                fromAminoMsg(object: _57.GenesisStateAminoMsg): _57.GenesisState;
                toAminoMsg(message: _57.GenesisState): _57.GenesisStateAminoMsg;
                fromProtoMsg(message: _57.GenesisStateProtoMsg): _57.GenesisState;
                toProto(message: _57.GenesisState): Uint8Array;
                toProtoMsg(message: _57.GenesisState): _57.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _56.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Equivocation;
                fromPartial(object: Partial<_56.Equivocation>): _56.Equivocation;
                fromAmino(object: _56.EquivocationAmino): _56.Equivocation;
                toAmino(message: _56.Equivocation): _56.EquivocationAmino;
                fromAminoMsg(object: _56.EquivocationAminoMsg): _56.Equivocation;
                toAminoMsg(message: _56.Equivocation): _56.EquivocationAminoMsg;
                fromProtoMsg(message: _56.EquivocationProtoMsg): _56.Equivocation;
                toProto(message: _56.Equivocation): Uint8Array;
                toProtoMsg(message: _56.Equivocation): _56.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _210.MsgClientImpl;
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                allowance(request: _62.QueryAllowanceRequest): Promise<_62.QueryAllowanceResponse>;
                allowances(request: _62.QueryAllowancesRequest): Promise<_62.QueryAllowancesResponse>;
                allowancesByGranter(request: _62.QueryAllowancesByGranterRequest): Promise<_62.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _63.MsgGrantAllowance) => _63.MsgGrantAllowanceAmino;
                    fromAmino: (object: _63.MsgGrantAllowanceAmino) => _63.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _63.MsgRevokeAllowance) => _63.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _63.MsgRevokeAllowanceAmino) => _63.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _63.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgGrantAllowance;
                fromPartial(object: Partial<_63.MsgGrantAllowance>): _63.MsgGrantAllowance;
                fromAmino(object: _63.MsgGrantAllowanceAmino): _63.MsgGrantAllowance;
                toAmino(message: _63.MsgGrantAllowance): _63.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _63.MsgGrantAllowanceAminoMsg): _63.MsgGrantAllowance;
                toAminoMsg(message: _63.MsgGrantAllowance): _63.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _63.MsgGrantAllowanceProtoMsg): _63.MsgGrantAllowance;
                toProto(message: _63.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _63.MsgGrantAllowance): _63.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _63.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_63.MsgGrantAllowanceResponse>): _63.MsgGrantAllowanceResponse;
                fromAmino(_: _63.MsgGrantAllowanceResponseAmino): _63.MsgGrantAllowanceResponse;
                toAmino(_: _63.MsgGrantAllowanceResponse): _63.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _63.MsgGrantAllowanceResponseAminoMsg): _63.MsgGrantAllowanceResponse;
                toAminoMsg(message: _63.MsgGrantAllowanceResponse): _63.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _63.MsgGrantAllowanceResponseProtoMsg): _63.MsgGrantAllowanceResponse;
                toProto(message: _63.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _63.MsgGrantAllowanceResponse): _63.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _63.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.MsgRevokeAllowance;
                fromPartial(object: Partial<_63.MsgRevokeAllowance>): _63.MsgRevokeAllowance;
                fromAmino(object: _63.MsgRevokeAllowanceAmino): _63.MsgRevokeAllowance;
                toAmino(message: _63.MsgRevokeAllowance): _63.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _63.MsgRevokeAllowanceAminoMsg): _63.MsgRevokeAllowance;
                toAminoMsg(message: _63.MsgRevokeAllowance): _63.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _63.MsgRevokeAllowanceProtoMsg): _63.MsgRevokeAllowance;
                toProto(message: _63.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _63.MsgRevokeAllowance): _63.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _63.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _63.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_63.MsgRevokeAllowanceResponse>): _63.MsgRevokeAllowanceResponse;
                fromAmino(_: _63.MsgRevokeAllowanceResponseAmino): _63.MsgRevokeAllowanceResponse;
                toAmino(_: _63.MsgRevokeAllowanceResponse): _63.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _63.MsgRevokeAllowanceResponseAminoMsg): _63.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _63.MsgRevokeAllowanceResponse): _63.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _63.MsgRevokeAllowanceResponseProtoMsg): _63.MsgRevokeAllowanceResponse;
                toProto(message: _63.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _63.MsgRevokeAllowanceResponse): _63.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _60.BasicAllowance | _60.PeriodicAllowance | _60.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _62.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllowanceRequest;
                fromPartial(object: Partial<_62.QueryAllowanceRequest>): _62.QueryAllowanceRequest;
                fromAmino(object: _62.QueryAllowanceRequestAmino): _62.QueryAllowanceRequest;
                toAmino(message: _62.QueryAllowanceRequest): _62.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _62.QueryAllowanceRequestAminoMsg): _62.QueryAllowanceRequest;
                toAminoMsg(message: _62.QueryAllowanceRequest): _62.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAllowanceRequestProtoMsg): _62.QueryAllowanceRequest;
                toProto(message: _62.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAllowanceRequest): _62.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _62.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllowanceResponse;
                fromPartial(object: Partial<_62.QueryAllowanceResponse>): _62.QueryAllowanceResponse;
                fromAmino(object: _62.QueryAllowanceResponseAmino): _62.QueryAllowanceResponse;
                toAmino(message: _62.QueryAllowanceResponse): _62.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _62.QueryAllowanceResponseAminoMsg): _62.QueryAllowanceResponse;
                toAminoMsg(message: _62.QueryAllowanceResponse): _62.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAllowanceResponseProtoMsg): _62.QueryAllowanceResponse;
                toProto(message: _62.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAllowanceResponse): _62.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _62.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllowancesRequest;
                fromPartial(object: Partial<_62.QueryAllowancesRequest>): _62.QueryAllowancesRequest;
                fromAmino(object: _62.QueryAllowancesRequestAmino): _62.QueryAllowancesRequest;
                toAmino(message: _62.QueryAllowancesRequest): _62.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _62.QueryAllowancesRequestAminoMsg): _62.QueryAllowancesRequest;
                toAminoMsg(message: _62.QueryAllowancesRequest): _62.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAllowancesRequestProtoMsg): _62.QueryAllowancesRequest;
                toProto(message: _62.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAllowancesRequest): _62.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _62.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllowancesResponse;
                fromPartial(object: Partial<_62.QueryAllowancesResponse>): _62.QueryAllowancesResponse;
                fromAmino(object: _62.QueryAllowancesResponseAmino): _62.QueryAllowancesResponse;
                toAmino(message: _62.QueryAllowancesResponse): _62.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _62.QueryAllowancesResponseAminoMsg): _62.QueryAllowancesResponse;
                toAminoMsg(message: _62.QueryAllowancesResponse): _62.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAllowancesResponseProtoMsg): _62.QueryAllowancesResponse;
                toProto(message: _62.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAllowancesResponse): _62.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _62.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_62.QueryAllowancesByGranterRequest>): _62.QueryAllowancesByGranterRequest;
                fromAmino(object: _62.QueryAllowancesByGranterRequestAmino): _62.QueryAllowancesByGranterRequest;
                toAmino(message: _62.QueryAllowancesByGranterRequest): _62.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _62.QueryAllowancesByGranterRequestAminoMsg): _62.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _62.QueryAllowancesByGranterRequest): _62.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAllowancesByGranterRequestProtoMsg): _62.QueryAllowancesByGranterRequest;
                toProto(message: _62.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAllowancesByGranterRequest): _62.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _62.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_62.QueryAllowancesByGranterResponse>): _62.QueryAllowancesByGranterResponse;
                fromAmino(object: _62.QueryAllowancesByGranterResponseAmino): _62.QueryAllowancesByGranterResponse;
                toAmino(message: _62.QueryAllowancesByGranterResponse): _62.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _62.QueryAllowancesByGranterResponseAminoMsg): _62.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _62.QueryAllowancesByGranterResponse): _62.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAllowancesByGranterResponseProtoMsg): _62.QueryAllowancesByGranterResponse;
                toProto(message: _62.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAllowancesByGranterResponse): _62.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _61.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.GenesisState;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
                fromAmino(object: _61.GenesisStateAmino): _61.GenesisState;
                toAmino(message: _61.GenesisState): _61.GenesisStateAmino;
                fromAminoMsg(object: _61.GenesisStateAminoMsg): _61.GenesisState;
                toAminoMsg(message: _61.GenesisState): _61.GenesisStateAminoMsg;
                fromProtoMsg(message: _61.GenesisStateProtoMsg): _61.GenesisState;
                toProto(message: _61.GenesisState): Uint8Array;
                toProtoMsg(message: _61.GenesisState): _61.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _60.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.BasicAllowance;
                fromPartial(object: Partial<_60.BasicAllowance>): _60.BasicAllowance;
                fromAmino(object: _60.BasicAllowanceAmino): _60.BasicAllowance;
                toAmino(message: _60.BasicAllowance): _60.BasicAllowanceAmino;
                fromAminoMsg(object: _60.BasicAllowanceAminoMsg): _60.BasicAllowance;
                toAminoMsg(message: _60.BasicAllowance): _60.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _60.BasicAllowanceProtoMsg): _60.BasicAllowance;
                toProto(message: _60.BasicAllowance): Uint8Array;
                toProtoMsg(message: _60.BasicAllowance): _60.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _60.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.PeriodicAllowance;
                fromPartial(object: Partial<_60.PeriodicAllowance>): _60.PeriodicAllowance;
                fromAmino(object: _60.PeriodicAllowanceAmino): _60.PeriodicAllowance;
                toAmino(message: _60.PeriodicAllowance): _60.PeriodicAllowanceAmino;
                fromAminoMsg(object: _60.PeriodicAllowanceAminoMsg): _60.PeriodicAllowance;
                toAminoMsg(message: _60.PeriodicAllowance): _60.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _60.PeriodicAllowanceProtoMsg): _60.PeriodicAllowance;
                toProto(message: _60.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _60.PeriodicAllowance): _60.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _60.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.AllowedMsgAllowance;
                fromPartial(object: Partial<_60.AllowedMsgAllowance>): _60.AllowedMsgAllowance;
                fromAmino(object: _60.AllowedMsgAllowanceAmino): _60.AllowedMsgAllowance;
                toAmino(message: _60.AllowedMsgAllowance): _60.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _60.AllowedMsgAllowanceAminoMsg): _60.AllowedMsgAllowance;
                toAminoMsg(message: _60.AllowedMsgAllowance): _60.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _60.AllowedMsgAllowanceProtoMsg): _60.AllowedMsgAllowance;
                toProto(message: _60.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _60.AllowedMsgAllowance): _60.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _60.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Grant;
                fromPartial(object: Partial<_60.Grant>): _60.Grant;
                fromAmino(object: _60.GrantAmino): _60.Grant;
                toAmino(message: _60.Grant): _60.GrantAmino;
                fromAminoMsg(object: _60.GrantAminoMsg): _60.Grant;
                toAminoMsg(message: _60.Grant): _60.GrantAminoMsg;
                fromProtoMsg(message: _60.GrantProtoMsg): _60.Grant;
                toProto(message: _60.Grant): Uint8Array;
                toProtoMsg(message: _60.Grant): _60.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.GenesisState;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _211.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _67.QueryProposalRequest): Promise<_67.QueryProposalResponse>;
                proposals(request: _67.QueryProposalsRequest): Promise<_67.QueryProposalsResponse>;
                vote(request: _67.QueryVoteRequest): Promise<_67.QueryVoteResponse>;
                votes(request: _67.QueryVotesRequest): Promise<_67.QueryVotesResponse>;
                params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                deposit(request: _67.QueryDepositRequest): Promise<_67.QueryDepositResponse>;
                deposits(request: _67.QueryDepositsRequest): Promise<_67.QueryDepositsResponse>;
                tallyResult(request: _67.QueryTallyResultRequest): Promise<_67.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _68.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _68.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _68.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _68.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _68.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _68.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _68.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _68.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _68.MsgExecLegacyContent;
                    };
                    vote(value: _68.MsgVote): {
                        typeUrl: string;
                        value: _68.MsgVote;
                    };
                    voteWeighted(value: _68.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _68.MsgVoteWeighted;
                    };
                    deposit(value: _68.MsgDeposit): {
                        typeUrl: string;
                        value: _68.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _68.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _68.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _68.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _68.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _68.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _68.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _68.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _68.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _68.MsgExecLegacyContent;
                    };
                    vote(value: _68.MsgVote): {
                        typeUrl: string;
                        value: _68.MsgVote;
                    };
                    voteWeighted(value: _68.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _68.MsgVoteWeighted;
                    };
                    deposit(value: _68.MsgDeposit): {
                        typeUrl: string;
                        value: _68.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _68.MsgSubmitProposal) => _68.MsgSubmitProposalAmino;
                    fromAmino: (object: _68.MsgSubmitProposalAmino) => _68.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _68.MsgExecLegacyContent) => _68.MsgExecLegacyContentAmino;
                    fromAmino: (object: _68.MsgExecLegacyContentAmino) => _68.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _68.MsgVote) => _68.MsgVoteAmino;
                    fromAmino: (object: _68.MsgVoteAmino) => _68.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _68.MsgVoteWeighted) => _68.MsgVoteWeightedAmino;
                    fromAmino: (object: _68.MsgVoteWeightedAmino) => _68.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _68.MsgDeposit) => _68.MsgDepositAmino;
                    fromAmino: (object: _68.MsgDepositAmino) => _68.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _68.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSubmitProposal;
                fromPartial(object: Partial<_68.MsgSubmitProposal>): _68.MsgSubmitProposal;
                fromAmino(object: _68.MsgSubmitProposalAmino): _68.MsgSubmitProposal;
                toAmino(message: _68.MsgSubmitProposal): _68.MsgSubmitProposalAmino;
                fromAminoMsg(object: _68.MsgSubmitProposalAminoMsg): _68.MsgSubmitProposal;
                toAminoMsg(message: _68.MsgSubmitProposal): _68.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _68.MsgSubmitProposalProtoMsg): _68.MsgSubmitProposal;
                toProto(message: _68.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _68.MsgSubmitProposal): _68.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _68.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_68.MsgSubmitProposalResponse>): _68.MsgSubmitProposalResponse;
                fromAmino(object: _68.MsgSubmitProposalResponseAmino): _68.MsgSubmitProposalResponse;
                toAmino(message: _68.MsgSubmitProposalResponse): _68.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _68.MsgSubmitProposalResponseAminoMsg): _68.MsgSubmitProposalResponse;
                toAminoMsg(message: _68.MsgSubmitProposalResponse): _68.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _68.MsgSubmitProposalResponseProtoMsg): _68.MsgSubmitProposalResponse;
                toProto(message: _68.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _68.MsgSubmitProposalResponse): _68.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _68.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgExecLegacyContent;
                fromPartial(object: Partial<_68.MsgExecLegacyContent>): _68.MsgExecLegacyContent;
                fromAmino(object: _68.MsgExecLegacyContentAmino): _68.MsgExecLegacyContent;
                toAmino(message: _68.MsgExecLegacyContent): _68.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _68.MsgExecLegacyContentAminoMsg): _68.MsgExecLegacyContent;
                toAminoMsg(message: _68.MsgExecLegacyContent): _68.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _68.MsgExecLegacyContentProtoMsg): _68.MsgExecLegacyContent;
                toProto(message: _68.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _68.MsgExecLegacyContent): _68.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _68.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_68.MsgExecLegacyContentResponse>): _68.MsgExecLegacyContentResponse;
                fromAmino(_: _68.MsgExecLegacyContentResponseAmino): _68.MsgExecLegacyContentResponse;
                toAmino(_: _68.MsgExecLegacyContentResponse): _68.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _68.MsgExecLegacyContentResponseAminoMsg): _68.MsgExecLegacyContentResponse;
                toAminoMsg(message: _68.MsgExecLegacyContentResponse): _68.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _68.MsgExecLegacyContentResponseProtoMsg): _68.MsgExecLegacyContentResponse;
                toProto(message: _68.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _68.MsgExecLegacyContentResponse): _68.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _68.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgVote;
                fromPartial(object: Partial<_68.MsgVote>): _68.MsgVote;
                fromAmino(object: _68.MsgVoteAmino): _68.MsgVote;
                toAmino(message: _68.MsgVote): _68.MsgVoteAmino;
                fromAminoMsg(object: _68.MsgVoteAminoMsg): _68.MsgVote;
                toAminoMsg(message: _68.MsgVote): _68.MsgVoteAminoMsg;
                fromProtoMsg(message: _68.MsgVoteProtoMsg): _68.MsgVote;
                toProto(message: _68.MsgVote): Uint8Array;
                toProtoMsg(message: _68.MsgVote): _68.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _68.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgVoteResponse;
                fromPartial(_: Partial<_68.MsgVoteResponse>): _68.MsgVoteResponse;
                fromAmino(_: _68.MsgVoteResponseAmino): _68.MsgVoteResponse;
                toAmino(_: _68.MsgVoteResponse): _68.MsgVoteResponseAmino;
                fromAminoMsg(object: _68.MsgVoteResponseAminoMsg): _68.MsgVoteResponse;
                toAminoMsg(message: _68.MsgVoteResponse): _68.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _68.MsgVoteResponseProtoMsg): _68.MsgVoteResponse;
                toProto(message: _68.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _68.MsgVoteResponse): _68.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _68.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgVoteWeighted;
                fromPartial(object: Partial<_68.MsgVoteWeighted>): _68.MsgVoteWeighted;
                fromAmino(object: _68.MsgVoteWeightedAmino): _68.MsgVoteWeighted;
                toAmino(message: _68.MsgVoteWeighted): _68.MsgVoteWeightedAmino;
                fromAminoMsg(object: _68.MsgVoteWeightedAminoMsg): _68.MsgVoteWeighted;
                toAminoMsg(message: _68.MsgVoteWeighted): _68.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _68.MsgVoteWeightedProtoMsg): _68.MsgVoteWeighted;
                toProto(message: _68.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _68.MsgVoteWeighted): _68.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _68.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_68.MsgVoteWeightedResponse>): _68.MsgVoteWeightedResponse;
                fromAmino(_: _68.MsgVoteWeightedResponseAmino): _68.MsgVoteWeightedResponse;
                toAmino(_: _68.MsgVoteWeightedResponse): _68.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _68.MsgVoteWeightedResponseAminoMsg): _68.MsgVoteWeightedResponse;
                toAminoMsg(message: _68.MsgVoteWeightedResponse): _68.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _68.MsgVoteWeightedResponseProtoMsg): _68.MsgVoteWeightedResponse;
                toProto(message: _68.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _68.MsgVoteWeightedResponse): _68.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _68.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.MsgDeposit;
                fromPartial(object: Partial<_68.MsgDeposit>): _68.MsgDeposit;
                fromAmino(object: _68.MsgDepositAmino): _68.MsgDeposit;
                toAmino(message: _68.MsgDeposit): _68.MsgDepositAmino;
                fromAminoMsg(object: _68.MsgDepositAminoMsg): _68.MsgDeposit;
                toAminoMsg(message: _68.MsgDeposit): _68.MsgDepositAminoMsg;
                fromProtoMsg(message: _68.MsgDepositProtoMsg): _68.MsgDeposit;
                toProto(message: _68.MsgDeposit): Uint8Array;
                toProtoMsg(message: _68.MsgDeposit): _68.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _68.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _68.MsgDepositResponse;
                fromPartial(_: Partial<_68.MsgDepositResponse>): _68.MsgDepositResponse;
                fromAmino(_: _68.MsgDepositResponseAmino): _68.MsgDepositResponse;
                toAmino(_: _68.MsgDepositResponse): _68.MsgDepositResponseAmino;
                fromAminoMsg(object: _68.MsgDepositResponseAminoMsg): _68.MsgDepositResponse;
                toAminoMsg(message: _68.MsgDepositResponse): _68.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _68.MsgDepositResponseProtoMsg): _68.MsgDepositResponse;
                toProto(message: _68.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _68.MsgDepositResponse): _68.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _70.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _67.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryProposalRequest;
                fromPartial(object: Partial<_67.QueryProposalRequest>): _67.QueryProposalRequest;
                fromAmino(object: _67.QueryProposalRequestAmino): _67.QueryProposalRequest;
                toAmino(message: _67.QueryProposalRequest): _67.QueryProposalRequestAmino;
                fromAminoMsg(object: _67.QueryProposalRequestAminoMsg): _67.QueryProposalRequest;
                toAminoMsg(message: _67.QueryProposalRequest): _67.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _67.QueryProposalRequestProtoMsg): _67.QueryProposalRequest;
                toProto(message: _67.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _67.QueryProposalRequest): _67.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _67.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryProposalResponse;
                fromPartial(object: Partial<_67.QueryProposalResponse>): _67.QueryProposalResponse;
                fromAmino(object: _67.QueryProposalResponseAmino): _67.QueryProposalResponse;
                toAmino(message: _67.QueryProposalResponse): _67.QueryProposalResponseAmino;
                fromAminoMsg(object: _67.QueryProposalResponseAminoMsg): _67.QueryProposalResponse;
                toAminoMsg(message: _67.QueryProposalResponse): _67.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _67.QueryProposalResponseProtoMsg): _67.QueryProposalResponse;
                toProto(message: _67.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _67.QueryProposalResponse): _67.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _67.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryProposalsRequest;
                fromPartial(object: Partial<_67.QueryProposalsRequest>): _67.QueryProposalsRequest;
                fromAmino(object: _67.QueryProposalsRequestAmino): _67.QueryProposalsRequest;
                toAmino(message: _67.QueryProposalsRequest): _67.QueryProposalsRequestAmino;
                fromAminoMsg(object: _67.QueryProposalsRequestAminoMsg): _67.QueryProposalsRequest;
                toAminoMsg(message: _67.QueryProposalsRequest): _67.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryProposalsRequestProtoMsg): _67.QueryProposalsRequest;
                toProto(message: _67.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryProposalsRequest): _67.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _67.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryProposalsResponse;
                fromPartial(object: Partial<_67.QueryProposalsResponse>): _67.QueryProposalsResponse;
                fromAmino(object: _67.QueryProposalsResponseAmino): _67.QueryProposalsResponse;
                toAmino(message: _67.QueryProposalsResponse): _67.QueryProposalsResponseAmino;
                fromAminoMsg(object: _67.QueryProposalsResponseAminoMsg): _67.QueryProposalsResponse;
                toAminoMsg(message: _67.QueryProposalsResponse): _67.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryProposalsResponseProtoMsg): _67.QueryProposalsResponse;
                toProto(message: _67.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryProposalsResponse): _67.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _67.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryVoteRequest;
                fromPartial(object: Partial<_67.QueryVoteRequest>): _67.QueryVoteRequest;
                fromAmino(object: _67.QueryVoteRequestAmino): _67.QueryVoteRequest;
                toAmino(message: _67.QueryVoteRequest): _67.QueryVoteRequestAmino;
                fromAminoMsg(object: _67.QueryVoteRequestAminoMsg): _67.QueryVoteRequest;
                toAminoMsg(message: _67.QueryVoteRequest): _67.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _67.QueryVoteRequestProtoMsg): _67.QueryVoteRequest;
                toProto(message: _67.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _67.QueryVoteRequest): _67.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _67.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryVoteResponse;
                fromPartial(object: Partial<_67.QueryVoteResponse>): _67.QueryVoteResponse;
                fromAmino(object: _67.QueryVoteResponseAmino): _67.QueryVoteResponse;
                toAmino(message: _67.QueryVoteResponse): _67.QueryVoteResponseAmino;
                fromAminoMsg(object: _67.QueryVoteResponseAminoMsg): _67.QueryVoteResponse;
                toAminoMsg(message: _67.QueryVoteResponse): _67.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _67.QueryVoteResponseProtoMsg): _67.QueryVoteResponse;
                toProto(message: _67.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _67.QueryVoteResponse): _67.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _67.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryVotesRequest;
                fromPartial(object: Partial<_67.QueryVotesRequest>): _67.QueryVotesRequest;
                fromAmino(object: _67.QueryVotesRequestAmino): _67.QueryVotesRequest;
                toAmino(message: _67.QueryVotesRequest): _67.QueryVotesRequestAmino;
                fromAminoMsg(object: _67.QueryVotesRequestAminoMsg): _67.QueryVotesRequest;
                toAminoMsg(message: _67.QueryVotesRequest): _67.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _67.QueryVotesRequestProtoMsg): _67.QueryVotesRequest;
                toProto(message: _67.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _67.QueryVotesRequest): _67.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _67.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryVotesResponse;
                fromPartial(object: Partial<_67.QueryVotesResponse>): _67.QueryVotesResponse;
                fromAmino(object: _67.QueryVotesResponseAmino): _67.QueryVotesResponse;
                toAmino(message: _67.QueryVotesResponse): _67.QueryVotesResponseAmino;
                fromAminoMsg(object: _67.QueryVotesResponseAminoMsg): _67.QueryVotesResponse;
                toAminoMsg(message: _67.QueryVotesResponse): _67.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _67.QueryVotesResponseProtoMsg): _67.QueryVotesResponse;
                toProto(message: _67.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _67.QueryVotesResponse): _67.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _67.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryParamsRequest;
                fromPartial(object: Partial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
                fromAmino(object: _67.QueryParamsRequestAmino): _67.QueryParamsRequest;
                toAmino(message: _67.QueryParamsRequest): _67.QueryParamsRequestAmino;
                fromAminoMsg(object: _67.QueryParamsRequestAminoMsg): _67.QueryParamsRequest;
                toAminoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryParamsRequestProtoMsg): _67.QueryParamsRequest;
                toProto(message: _67.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryParamsRequest): _67.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _67.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryParamsResponse;
                fromPartial(object: Partial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
                fromAmino(object: _67.QueryParamsResponseAmino): _67.QueryParamsResponse;
                toAmino(message: _67.QueryParamsResponse): _67.QueryParamsResponseAmino;
                fromAminoMsg(object: _67.QueryParamsResponseAminoMsg): _67.QueryParamsResponse;
                toAminoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryParamsResponseProtoMsg): _67.QueryParamsResponse;
                toProto(message: _67.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryParamsResponse): _67.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _67.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDepositRequest;
                fromPartial(object: Partial<_67.QueryDepositRequest>): _67.QueryDepositRequest;
                fromAmino(object: _67.QueryDepositRequestAmino): _67.QueryDepositRequest;
                toAmino(message: _67.QueryDepositRequest): _67.QueryDepositRequestAmino;
                fromAminoMsg(object: _67.QueryDepositRequestAminoMsg): _67.QueryDepositRequest;
                toAminoMsg(message: _67.QueryDepositRequest): _67.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDepositRequestProtoMsg): _67.QueryDepositRequest;
                toProto(message: _67.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDepositRequest): _67.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _67.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDepositResponse;
                fromPartial(object: Partial<_67.QueryDepositResponse>): _67.QueryDepositResponse;
                fromAmino(object: _67.QueryDepositResponseAmino): _67.QueryDepositResponse;
                toAmino(message: _67.QueryDepositResponse): _67.QueryDepositResponseAmino;
                fromAminoMsg(object: _67.QueryDepositResponseAminoMsg): _67.QueryDepositResponse;
                toAminoMsg(message: _67.QueryDepositResponse): _67.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDepositResponseProtoMsg): _67.QueryDepositResponse;
                toProto(message: _67.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDepositResponse): _67.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _67.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDepositsRequest;
                fromPartial(object: Partial<_67.QueryDepositsRequest>): _67.QueryDepositsRequest;
                fromAmino(object: _67.QueryDepositsRequestAmino): _67.QueryDepositsRequest;
                toAmino(message: _67.QueryDepositsRequest): _67.QueryDepositsRequestAmino;
                fromAminoMsg(object: _67.QueryDepositsRequestAminoMsg): _67.QueryDepositsRequest;
                toAminoMsg(message: _67.QueryDepositsRequest): _67.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _67.QueryDepositsRequestProtoMsg): _67.QueryDepositsRequest;
                toProto(message: _67.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _67.QueryDepositsRequest): _67.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _67.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryDepositsResponse;
                fromPartial(object: Partial<_67.QueryDepositsResponse>): _67.QueryDepositsResponse;
                fromAmino(object: _67.QueryDepositsResponseAmino): _67.QueryDepositsResponse;
                toAmino(message: _67.QueryDepositsResponse): _67.QueryDepositsResponseAmino;
                fromAminoMsg(object: _67.QueryDepositsResponseAminoMsg): _67.QueryDepositsResponse;
                toAminoMsg(message: _67.QueryDepositsResponse): _67.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _67.QueryDepositsResponseProtoMsg): _67.QueryDepositsResponse;
                toProto(message: _67.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _67.QueryDepositsResponse): _67.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _67.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryTallyResultRequest;
                fromPartial(object: Partial<_67.QueryTallyResultRequest>): _67.QueryTallyResultRequest;
                fromAmino(object: _67.QueryTallyResultRequestAmino): _67.QueryTallyResultRequest;
                toAmino(message: _67.QueryTallyResultRequest): _67.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _67.QueryTallyResultRequestAminoMsg): _67.QueryTallyResultRequest;
                toAminoMsg(message: _67.QueryTallyResultRequest): _67.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _67.QueryTallyResultRequestProtoMsg): _67.QueryTallyResultRequest;
                toProto(message: _67.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _67.QueryTallyResultRequest): _67.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _67.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.QueryTallyResultResponse;
                fromPartial(object: Partial<_67.QueryTallyResultResponse>): _67.QueryTallyResultResponse;
                fromAmino(object: _67.QueryTallyResultResponseAmino): _67.QueryTallyResultResponse;
                toAmino(message: _67.QueryTallyResultResponse): _67.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _67.QueryTallyResultResponseAminoMsg): _67.QueryTallyResultResponse;
                toAminoMsg(message: _67.QueryTallyResultResponse): _67.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _67.QueryTallyResultResponseProtoMsg): _67.QueryTallyResultResponse;
                toProto(message: _67.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _67.QueryTallyResultResponse): _67.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _66.VoteOption;
            voteOptionToJSON(object: _66.VoteOption): string;
            proposalStatusFromJSON(object: any): _66.ProposalStatus;
            proposalStatusToJSON(object: _66.ProposalStatus): string;
            VoteOption: typeof _66.VoteOption;
            VoteOptionSDKType: typeof _66.VoteOption;
            VoteOptionAmino: typeof _66.VoteOption;
            ProposalStatus: typeof _66.ProposalStatus;
            ProposalStatusSDKType: typeof _66.ProposalStatus;
            ProposalStatusAmino: typeof _66.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _66.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.WeightedVoteOption;
                fromPartial(object: Partial<_66.WeightedVoteOption>): _66.WeightedVoteOption;
                fromAmino(object: _66.WeightedVoteOptionAmino): _66.WeightedVoteOption;
                toAmino(message: _66.WeightedVoteOption): _66.WeightedVoteOptionAmino;
                fromAminoMsg(object: _66.WeightedVoteOptionAminoMsg): _66.WeightedVoteOption;
                toAminoMsg(message: _66.WeightedVoteOption): _66.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _66.WeightedVoteOptionProtoMsg): _66.WeightedVoteOption;
                toProto(message: _66.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _66.WeightedVoteOption): _66.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _66.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Deposit;
                fromPartial(object: Partial<_66.Deposit>): _66.Deposit;
                fromAmino(object: _66.DepositAmino): _66.Deposit;
                toAmino(message: _66.Deposit): _66.DepositAmino;
                fromAminoMsg(object: _66.DepositAminoMsg): _66.Deposit;
                toAminoMsg(message: _66.Deposit): _66.DepositAminoMsg;
                fromProtoMsg(message: _66.DepositProtoMsg): _66.Deposit;
                toProto(message: _66.Deposit): Uint8Array;
                toProtoMsg(message: _66.Deposit): _66.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _66.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Proposal;
                fromPartial(object: Partial<_66.Proposal>): _66.Proposal;
                fromAmino(object: _66.ProposalAmino): _66.Proposal;
                toAmino(message: _66.Proposal): _66.ProposalAmino;
                fromAminoMsg(object: _66.ProposalAminoMsg): _66.Proposal;
                toAminoMsg(message: _66.Proposal): _66.ProposalAminoMsg;
                fromProtoMsg(message: _66.ProposalProtoMsg): _66.Proposal;
                toProto(message: _66.Proposal): Uint8Array;
                toProtoMsg(message: _66.Proposal): _66.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _66.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.TallyResult;
                fromPartial(object: Partial<_66.TallyResult>): _66.TallyResult;
                fromAmino(object: _66.TallyResultAmino): _66.TallyResult;
                toAmino(message: _66.TallyResult): _66.TallyResultAmino;
                fromAminoMsg(object: _66.TallyResultAminoMsg): _66.TallyResult;
                toAminoMsg(message: _66.TallyResult): _66.TallyResultAminoMsg;
                fromProtoMsg(message: _66.TallyResultProtoMsg): _66.TallyResult;
                toProto(message: _66.TallyResult): Uint8Array;
                toProtoMsg(message: _66.TallyResult): _66.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _66.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.Vote;
                fromPartial(object: Partial<_66.Vote>): _66.Vote;
                fromAmino(object: _66.VoteAmino): _66.Vote;
                toAmino(message: _66.Vote): _66.VoteAmino;
                fromAminoMsg(object: _66.VoteAminoMsg): _66.Vote;
                toAminoMsg(message: _66.Vote): _66.VoteAminoMsg;
                fromProtoMsg(message: _66.VoteProtoMsg): _66.Vote;
                toProto(message: _66.Vote): Uint8Array;
                toProtoMsg(message: _66.Vote): _66.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _66.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.DepositParams;
                fromPartial(object: Partial<_66.DepositParams>): _66.DepositParams;
                fromAmino(object: _66.DepositParamsAmino): _66.DepositParams;
                toAmino(message: _66.DepositParams): _66.DepositParamsAmino;
                fromAminoMsg(object: _66.DepositParamsAminoMsg): _66.DepositParams;
                toAminoMsg(message: _66.DepositParams): _66.DepositParamsAminoMsg;
                fromProtoMsg(message: _66.DepositParamsProtoMsg): _66.DepositParams;
                toProto(message: _66.DepositParams): Uint8Array;
                toProtoMsg(message: _66.DepositParams): _66.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _66.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.VotingParams;
                fromPartial(object: Partial<_66.VotingParams>): _66.VotingParams;
                fromAmino(object: _66.VotingParamsAmino): _66.VotingParams;
                toAmino(message: _66.VotingParams): _66.VotingParamsAmino;
                fromAminoMsg(object: _66.VotingParamsAminoMsg): _66.VotingParams;
                toAminoMsg(message: _66.VotingParams): _66.VotingParamsAminoMsg;
                fromProtoMsg(message: _66.VotingParamsProtoMsg): _66.VotingParams;
                toProto(message: _66.VotingParams): Uint8Array;
                toProtoMsg(message: _66.VotingParams): _66.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _66.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.TallyParams;
                fromPartial(object: Partial<_66.TallyParams>): _66.TallyParams;
                fromAmino(object: _66.TallyParamsAmino): _66.TallyParams;
                toAmino(message: _66.TallyParams): _66.TallyParamsAmino;
                fromAminoMsg(object: _66.TallyParamsAminoMsg): _66.TallyParams;
                toAminoMsg(message: _66.TallyParams): _66.TallyParamsAminoMsg;
                fromProtoMsg(message: _66.TallyParamsProtoMsg): _66.TallyParams;
                toProto(message: _66.TallyParams): Uint8Array;
                toProtoMsg(message: _66.TallyParams): _66.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _65.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
                fromAmino(object: _65.GenesisStateAmino): _65.GenesisState;
                toAmino(message: _65.GenesisState): _65.GenesisStateAmino;
                fromAminoMsg(object: _65.GenesisStateAminoMsg): _65.GenesisState;
                toAminoMsg(message: _65.GenesisState): _65.GenesisStateAminoMsg;
                fromProtoMsg(message: _65.GenesisStateProtoMsg): _65.GenesisState;
                toProto(message: _65.GenesisState): Uint8Array;
                toProtoMsg(message: _65.GenesisState): _65.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _212.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _72.MsgSubmitProposal) => _72.MsgSubmitProposalAmino;
                    fromAmino: (object: _72.MsgSubmitProposalAmino) => _72.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _72.MsgVote) => _72.MsgVoteAmino;
                    fromAmino: (object: _72.MsgVoteAmino) => _72.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _72.MsgVoteWeighted) => _72.MsgVoteWeightedAmino;
                    fromAmino: (object: _72.MsgVoteWeightedAmino) => _72.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _72.MsgDeposit) => _72.MsgDepositAmino;
                    fromAmino: (object: _72.MsgDepositAmino) => _72.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _72.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSubmitProposal;
                fromPartial(object: Partial<_72.MsgSubmitProposal>): _72.MsgSubmitProposal;
                fromAmino(object: _72.MsgSubmitProposalAmino): _72.MsgSubmitProposal;
                toAmino(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalAmino;
                fromAminoMsg(object: _72.MsgSubmitProposalAminoMsg): _72.MsgSubmitProposal;
                toAminoMsg(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitProposalProtoMsg): _72.MsgSubmitProposal;
                toProto(message: _72.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _72.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_72.MsgSubmitProposalResponse>): _72.MsgSubmitProposalResponse;
                fromAmino(object: _72.MsgSubmitProposalResponseAmino): _72.MsgSubmitProposalResponse;
                toAmino(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _72.MsgSubmitProposalResponseAminoMsg): _72.MsgSubmitProposalResponse;
                toAminoMsg(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitProposalResponseProtoMsg): _72.MsgSubmitProposalResponse;
                toProto(message: _72.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _72.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgVote;
                fromPartial(object: Partial<_72.MsgVote>): _72.MsgVote;
                fromAmino(object: _72.MsgVoteAmino): _72.MsgVote;
                toAmino(message: _72.MsgVote): _72.MsgVoteAmino;
                fromAminoMsg(object: _72.MsgVoteAminoMsg): _72.MsgVote;
                toAminoMsg(message: _72.MsgVote): _72.MsgVoteAminoMsg;
                fromProtoMsg(message: _72.MsgVoteProtoMsg): _72.MsgVote;
                toProto(message: _72.MsgVote): Uint8Array;
                toProtoMsg(message: _72.MsgVote): _72.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _72.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgVoteResponse;
                fromPartial(_: Partial<_72.MsgVoteResponse>): _72.MsgVoteResponse;
                fromAmino(_: _72.MsgVoteResponseAmino): _72.MsgVoteResponse;
                toAmino(_: _72.MsgVoteResponse): _72.MsgVoteResponseAmino;
                fromAminoMsg(object: _72.MsgVoteResponseAminoMsg): _72.MsgVoteResponse;
                toAminoMsg(message: _72.MsgVoteResponse): _72.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _72.MsgVoteResponseProtoMsg): _72.MsgVoteResponse;
                toProto(message: _72.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _72.MsgVoteResponse): _72.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _72.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgVoteWeighted;
                fromPartial(object: Partial<_72.MsgVoteWeighted>): _72.MsgVoteWeighted;
                fromAmino(object: _72.MsgVoteWeightedAmino): _72.MsgVoteWeighted;
                toAmino(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedAmino;
                fromAminoMsg(object: _72.MsgVoteWeightedAminoMsg): _72.MsgVoteWeighted;
                toAminoMsg(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _72.MsgVoteWeightedProtoMsg): _72.MsgVoteWeighted;
                toProto(message: _72.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _72.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_72.MsgVoteWeightedResponse>): _72.MsgVoteWeightedResponse;
                fromAmino(_: _72.MsgVoteWeightedResponseAmino): _72.MsgVoteWeightedResponse;
                toAmino(_: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _72.MsgVoteWeightedResponseAminoMsg): _72.MsgVoteWeightedResponse;
                toAminoMsg(message: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _72.MsgVoteWeightedResponseProtoMsg): _72.MsgVoteWeightedResponse;
                toProto(message: _72.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _72.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.MsgDeposit;
                fromPartial(object: Partial<_72.MsgDeposit>): _72.MsgDeposit;
                fromAmino(object: _72.MsgDepositAmino): _72.MsgDeposit;
                toAmino(message: _72.MsgDeposit): _72.MsgDepositAmino;
                fromAminoMsg(object: _72.MsgDepositAminoMsg): _72.MsgDeposit;
                toAminoMsg(message: _72.MsgDeposit): _72.MsgDepositAminoMsg;
                fromProtoMsg(message: _72.MsgDepositProtoMsg): _72.MsgDeposit;
                toProto(message: _72.MsgDeposit): Uint8Array;
                toProtoMsg(message: _72.MsgDeposit): _72.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _72.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _72.MsgDepositResponse;
                fromPartial(_: Partial<_72.MsgDepositResponse>): _72.MsgDepositResponse;
                fromAmino(_: _72.MsgDepositResponseAmino): _72.MsgDepositResponse;
                toAmino(_: _72.MsgDepositResponse): _72.MsgDepositResponseAmino;
                fromAminoMsg(object: _72.MsgDepositResponseAminoMsg): _72.MsgDepositResponse;
                toAminoMsg(message: _72.MsgDepositResponse): _72.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _72.MsgDepositResponseProtoMsg): _72.MsgDepositResponse;
                toProto(message: _72.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _72.MsgDepositResponse): _72.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _70.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _71.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalRequest;
                fromPartial(object: Partial<_71.QueryProposalRequest>): _71.QueryProposalRequest;
                fromAmino(object: _71.QueryProposalRequestAmino): _71.QueryProposalRequest;
                toAmino(message: _71.QueryProposalRequest): _71.QueryProposalRequestAmino;
                fromAminoMsg(object: _71.QueryProposalRequestAminoMsg): _71.QueryProposalRequest;
                toAminoMsg(message: _71.QueryProposalRequest): _71.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _71.QueryProposalRequestProtoMsg): _71.QueryProposalRequest;
                toProto(message: _71.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _71.QueryProposalRequest): _71.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _71.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalResponse;
                fromPartial(object: Partial<_71.QueryProposalResponse>): _71.QueryProposalResponse;
                fromAmino(object: _71.QueryProposalResponseAmino): _71.QueryProposalResponse;
                toAmino(message: _71.QueryProposalResponse): _71.QueryProposalResponseAmino;
                fromAminoMsg(object: _71.QueryProposalResponseAminoMsg): _71.QueryProposalResponse;
                toAminoMsg(message: _71.QueryProposalResponse): _71.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _71.QueryProposalResponseProtoMsg): _71.QueryProposalResponse;
                toProto(message: _71.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _71.QueryProposalResponse): _71.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _71.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalsRequest;
                fromPartial(object: Partial<_71.QueryProposalsRequest>): _71.QueryProposalsRequest;
                fromAmino(object: _71.QueryProposalsRequestAmino): _71.QueryProposalsRequest;
                toAmino(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestAmino;
                fromAminoMsg(object: _71.QueryProposalsRequestAminoMsg): _71.QueryProposalsRequest;
                toAminoMsg(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryProposalsRequestProtoMsg): _71.QueryProposalsRequest;
                toProto(message: _71.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _71.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryProposalsResponse;
                fromPartial(object: Partial<_71.QueryProposalsResponse>): _71.QueryProposalsResponse;
                fromAmino(object: _71.QueryProposalsResponseAmino): _71.QueryProposalsResponse;
                toAmino(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseAmino;
                fromAminoMsg(object: _71.QueryProposalsResponseAminoMsg): _71.QueryProposalsResponse;
                toAminoMsg(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryProposalsResponseProtoMsg): _71.QueryProposalsResponse;
                toProto(message: _71.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _71.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVoteRequest;
                fromPartial(object: Partial<_71.QueryVoteRequest>): _71.QueryVoteRequest;
                fromAmino(object: _71.QueryVoteRequestAmino): _71.QueryVoteRequest;
                toAmino(message: _71.QueryVoteRequest): _71.QueryVoteRequestAmino;
                fromAminoMsg(object: _71.QueryVoteRequestAminoMsg): _71.QueryVoteRequest;
                toAminoMsg(message: _71.QueryVoteRequest): _71.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _71.QueryVoteRequestProtoMsg): _71.QueryVoteRequest;
                toProto(message: _71.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _71.QueryVoteRequest): _71.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _71.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVoteResponse;
                fromPartial(object: Partial<_71.QueryVoteResponse>): _71.QueryVoteResponse;
                fromAmino(object: _71.QueryVoteResponseAmino): _71.QueryVoteResponse;
                toAmino(message: _71.QueryVoteResponse): _71.QueryVoteResponseAmino;
                fromAminoMsg(object: _71.QueryVoteResponseAminoMsg): _71.QueryVoteResponse;
                toAminoMsg(message: _71.QueryVoteResponse): _71.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _71.QueryVoteResponseProtoMsg): _71.QueryVoteResponse;
                toProto(message: _71.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _71.QueryVoteResponse): _71.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _71.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVotesRequest;
                fromPartial(object: Partial<_71.QueryVotesRequest>): _71.QueryVotesRequest;
                fromAmino(object: _71.QueryVotesRequestAmino): _71.QueryVotesRequest;
                toAmino(message: _71.QueryVotesRequest): _71.QueryVotesRequestAmino;
                fromAminoMsg(object: _71.QueryVotesRequestAminoMsg): _71.QueryVotesRequest;
                toAminoMsg(message: _71.QueryVotesRequest): _71.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _71.QueryVotesRequestProtoMsg): _71.QueryVotesRequest;
                toProto(message: _71.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _71.QueryVotesRequest): _71.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _71.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryVotesResponse;
                fromPartial(object: Partial<_71.QueryVotesResponse>): _71.QueryVotesResponse;
                fromAmino(object: _71.QueryVotesResponseAmino): _71.QueryVotesResponse;
                toAmino(message: _71.QueryVotesResponse): _71.QueryVotesResponseAmino;
                fromAminoMsg(object: _71.QueryVotesResponseAminoMsg): _71.QueryVotesResponse;
                toAminoMsg(message: _71.QueryVotesResponse): _71.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _71.QueryVotesResponseProtoMsg): _71.QueryVotesResponse;
                toProto(message: _71.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _71.QueryVotesResponse): _71.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _71.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryParamsRequest;
                fromPartial(object: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
                fromAmino(object: _71.QueryParamsRequestAmino): _71.QueryParamsRequest;
                toAmino(message: _71.QueryParamsRequest): _71.QueryParamsRequestAmino;
                fromAminoMsg(object: _71.QueryParamsRequestAminoMsg): _71.QueryParamsRequest;
                toAminoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryParamsRequestProtoMsg): _71.QueryParamsRequest;
                toProto(message: _71.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _71.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryParamsResponse;
                fromPartial(object: Partial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
                fromAmino(object: _71.QueryParamsResponseAmino): _71.QueryParamsResponse;
                toAmino(message: _71.QueryParamsResponse): _71.QueryParamsResponseAmino;
                fromAminoMsg(object: _71.QueryParamsResponseAminoMsg): _71.QueryParamsResponse;
                toAminoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryParamsResponseProtoMsg): _71.QueryParamsResponse;
                toProto(message: _71.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _71.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositRequest;
                fromPartial(object: Partial<_71.QueryDepositRequest>): _71.QueryDepositRequest;
                fromAmino(object: _71.QueryDepositRequestAmino): _71.QueryDepositRequest;
                toAmino(message: _71.QueryDepositRequest): _71.QueryDepositRequestAmino;
                fromAminoMsg(object: _71.QueryDepositRequestAminoMsg): _71.QueryDepositRequest;
                toAminoMsg(message: _71.QueryDepositRequest): _71.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDepositRequestProtoMsg): _71.QueryDepositRequest;
                toProto(message: _71.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDepositRequest): _71.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _71.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositResponse;
                fromPartial(object: Partial<_71.QueryDepositResponse>): _71.QueryDepositResponse;
                fromAmino(object: _71.QueryDepositResponseAmino): _71.QueryDepositResponse;
                toAmino(message: _71.QueryDepositResponse): _71.QueryDepositResponseAmino;
                fromAminoMsg(object: _71.QueryDepositResponseAminoMsg): _71.QueryDepositResponse;
                toAminoMsg(message: _71.QueryDepositResponse): _71.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDepositResponseProtoMsg): _71.QueryDepositResponse;
                toProto(message: _71.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDepositResponse): _71.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _71.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositsRequest;
                fromPartial(object: Partial<_71.QueryDepositsRequest>): _71.QueryDepositsRequest;
                fromAmino(object: _71.QueryDepositsRequestAmino): _71.QueryDepositsRequest;
                toAmino(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestAmino;
                fromAminoMsg(object: _71.QueryDepositsRequestAminoMsg): _71.QueryDepositsRequest;
                toAminoMsg(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDepositsRequestProtoMsg): _71.QueryDepositsRequest;
                toProto(message: _71.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _71.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryDepositsResponse;
                fromPartial(object: Partial<_71.QueryDepositsResponse>): _71.QueryDepositsResponse;
                fromAmino(object: _71.QueryDepositsResponseAmino): _71.QueryDepositsResponse;
                toAmino(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseAmino;
                fromAminoMsg(object: _71.QueryDepositsResponseAminoMsg): _71.QueryDepositsResponse;
                toAminoMsg(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDepositsResponseProtoMsg): _71.QueryDepositsResponse;
                toProto(message: _71.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _71.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryTallyResultRequest;
                fromPartial(object: Partial<_71.QueryTallyResultRequest>): _71.QueryTallyResultRequest;
                fromAmino(object: _71.QueryTallyResultRequestAmino): _71.QueryTallyResultRequest;
                toAmino(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _71.QueryTallyResultRequestAminoMsg): _71.QueryTallyResultRequest;
                toAminoMsg(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _71.QueryTallyResultRequestProtoMsg): _71.QueryTallyResultRequest;
                toProto(message: _71.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _71.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.QueryTallyResultResponse;
                fromPartial(object: Partial<_71.QueryTallyResultResponse>): _71.QueryTallyResultResponse;
                fromAmino(object: _71.QueryTallyResultResponseAmino): _71.QueryTallyResultResponse;
                toAmino(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _71.QueryTallyResultResponseAminoMsg): _71.QueryTallyResultResponse;
                toAminoMsg(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _71.QueryTallyResultResponseProtoMsg): _71.QueryTallyResultResponse;
                toProto(message: _71.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _70.VoteOption;
            voteOptionToJSON(object: _70.VoteOption): string;
            proposalStatusFromJSON(object: any): _70.ProposalStatus;
            proposalStatusToJSON(object: _70.ProposalStatus): string;
            VoteOption: typeof _70.VoteOption;
            VoteOptionSDKType: typeof _70.VoteOption;
            VoteOptionAmino: typeof _70.VoteOption;
            ProposalStatus: typeof _70.ProposalStatus;
            ProposalStatusSDKType: typeof _70.ProposalStatus;
            ProposalStatusAmino: typeof _70.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _70.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.WeightedVoteOption;
                fromPartial(object: Partial<_70.WeightedVoteOption>): _70.WeightedVoteOption;
                fromAmino(object: _70.WeightedVoteOptionAmino): _70.WeightedVoteOption;
                toAmino(message: _70.WeightedVoteOption): _70.WeightedVoteOptionAmino;
                fromAminoMsg(object: _70.WeightedVoteOptionAminoMsg): _70.WeightedVoteOption;
                toAminoMsg(message: _70.WeightedVoteOption): _70.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _70.WeightedVoteOptionProtoMsg): _70.WeightedVoteOption;
                toProto(message: _70.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _70.WeightedVoteOption): _70.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _70.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TextProposal;
                fromPartial(object: Partial<_70.TextProposal>): _70.TextProposal;
                fromAmino(object: _70.TextProposalAmino): _70.TextProposal;
                toAmino(message: _70.TextProposal): _70.TextProposalAmino;
                fromAminoMsg(object: _70.TextProposalAminoMsg): _70.TextProposal;
                toAminoMsg(message: _70.TextProposal): _70.TextProposalAminoMsg;
                fromProtoMsg(message: _70.TextProposalProtoMsg): _70.TextProposal;
                toProto(message: _70.TextProposal): Uint8Array;
                toProtoMsg(message: _70.TextProposal): _70.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _70.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Deposit;
                fromPartial(object: Partial<_70.Deposit>): _70.Deposit;
                fromAmino(object: _70.DepositAmino): _70.Deposit;
                toAmino(message: _70.Deposit): _70.DepositAmino;
                fromAminoMsg(object: _70.DepositAminoMsg): _70.Deposit;
                toAminoMsg(message: _70.Deposit): _70.DepositAminoMsg;
                fromProtoMsg(message: _70.DepositProtoMsg): _70.Deposit;
                toProto(message: _70.Deposit): Uint8Array;
                toProtoMsg(message: _70.Deposit): _70.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _70.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Proposal;
                fromPartial(object: Partial<_70.Proposal>): _70.Proposal;
                fromAmino(object: _70.ProposalAmino): _70.Proposal;
                toAmino(message: _70.Proposal): _70.ProposalAmino;
                fromAminoMsg(object: _70.ProposalAminoMsg): _70.Proposal;
                toAminoMsg(message: _70.Proposal): _70.ProposalAminoMsg;
                fromProtoMsg(message: _70.ProposalProtoMsg): _70.Proposal;
                toProto(message: _70.Proposal): Uint8Array;
                toProtoMsg(message: _70.Proposal): _70.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _70.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TallyResult;
                fromPartial(object: Partial<_70.TallyResult>): _70.TallyResult;
                fromAmino(object: _70.TallyResultAmino): _70.TallyResult;
                toAmino(message: _70.TallyResult): _70.TallyResultAmino;
                fromAminoMsg(object: _70.TallyResultAminoMsg): _70.TallyResult;
                toAminoMsg(message: _70.TallyResult): _70.TallyResultAminoMsg;
                fromProtoMsg(message: _70.TallyResultProtoMsg): _70.TallyResult;
                toProto(message: _70.TallyResult): Uint8Array;
                toProtoMsg(message: _70.TallyResult): _70.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _70.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Vote;
                fromPartial(object: Partial<_70.Vote>): _70.Vote;
                fromAmino(object: _70.VoteAmino): _70.Vote;
                toAmino(message: _70.Vote): _70.VoteAmino;
                fromAminoMsg(object: _70.VoteAminoMsg): _70.Vote;
                toAminoMsg(message: _70.Vote): _70.VoteAminoMsg;
                fromProtoMsg(message: _70.VoteProtoMsg): _70.Vote;
                toProto(message: _70.Vote): Uint8Array;
                toProtoMsg(message: _70.Vote): _70.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _70.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.DepositParams;
                fromPartial(object: Partial<_70.DepositParams>): _70.DepositParams;
                fromAmino(object: _70.DepositParamsAmino): _70.DepositParams;
                toAmino(message: _70.DepositParams): _70.DepositParamsAmino;
                fromAminoMsg(object: _70.DepositParamsAminoMsg): _70.DepositParams;
                toAminoMsg(message: _70.DepositParams): _70.DepositParamsAminoMsg;
                fromProtoMsg(message: _70.DepositParamsProtoMsg): _70.DepositParams;
                toProto(message: _70.DepositParams): Uint8Array;
                toProtoMsg(message: _70.DepositParams): _70.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _70.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.VotingParams;
                fromPartial(object: Partial<_70.VotingParams>): _70.VotingParams;
                fromAmino(object: _70.VotingParamsAmino): _70.VotingParams;
                toAmino(message: _70.VotingParams): _70.VotingParamsAmino;
                fromAminoMsg(object: _70.VotingParamsAminoMsg): _70.VotingParams;
                toAminoMsg(message: _70.VotingParams): _70.VotingParamsAminoMsg;
                fromProtoMsg(message: _70.VotingParamsProtoMsg): _70.VotingParams;
                toProto(message: _70.VotingParams): Uint8Array;
                toProtoMsg(message: _70.VotingParams): _70.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _70.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.TallyParams;
                fromPartial(object: Partial<_70.TallyParams>): _70.TallyParams;
                fromAmino(object: _70.TallyParamsAmino): _70.TallyParams;
                toAmino(message: _70.TallyParams): _70.TallyParamsAmino;
                fromAminoMsg(object: _70.TallyParamsAminoMsg): _70.TallyParams;
                toAminoMsg(message: _70.TallyParams): _70.TallyParamsAminoMsg;
                fromProtoMsg(message: _70.TallyParamsProtoMsg): _70.TallyParams;
                toProto(message: _70.TallyParams): Uint8Array;
                toProtoMsg(message: _70.TallyParams): _70.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _69.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
                fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                toProto(message: _69.GenesisState): Uint8Array;
                toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                groupInfo(request: _75.QueryGroupInfoRequest): Promise<_75.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _75.QueryGroupPolicyInfoRequest): Promise<_75.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _75.QueryGroupMembersRequest): Promise<_75.QueryGroupMembersResponse>;
                groupsByAdmin(request: _75.QueryGroupsByAdminRequest): Promise<_75.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _75.QueryGroupPoliciesByGroupRequest): Promise<_75.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _75.QueryGroupPoliciesByAdminRequest): Promise<_75.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _75.QueryProposalsByGroupPolicyRequest): Promise<_75.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _75.QueryVoteByProposalVoterRequest): Promise<_75.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _75.QueryVotesByProposalRequest): Promise<_75.QueryVotesByProposalResponse>;
                votesByVoter(request: _75.QueryVotesByVoterRequest): Promise<_75.QueryVotesByVoterResponse>;
                groupsByMember(request: _75.QueryGroupsByMemberRequest): Promise<_75.QueryGroupsByMemberResponse>;
                tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
                groups(request?: _75.QueryGroupsRequest): Promise<_75.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _76.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _76.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _76.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _76.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _76.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _76.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _76.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _76.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _76.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _76.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _76.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _76.MsgCreateGroup): {
                        typeUrl: string;
                        value: _76.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _76.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _76.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _76.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _76.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _76.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _76.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _76.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _76.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _76.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _76.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _76.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _76.MsgWithdrawProposal;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    leaveGroup(value: _76.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _76.MsgLeaveGroup;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _76.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _76.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _76.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _76.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _76.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _76.MsgCreateGroup): {
                        typeUrl: string;
                        value: _76.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _76.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _76.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _76.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _76.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _76.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _76.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _76.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _76.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _76.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _76.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _76.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _76.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _76.MsgWithdrawProposal;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    exec(value: _76.MsgExec): {
                        typeUrl: string;
                        value: _76.MsgExec;
                    };
                    leaveGroup(value: _76.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _76.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _76.MsgCreateGroup) => _76.MsgCreateGroupAmino;
                    fromAmino: (object: _76.MsgCreateGroupAmino) => _76.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUpdateGroupMembers) => _76.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _76.MsgUpdateGroupMembersAmino) => _76.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUpdateGroupAdmin) => _76.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _76.MsgUpdateGroupAdminAmino) => _76.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUpdateGroupMetadata) => _76.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _76.MsgUpdateGroupMetadataAmino) => _76.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _76.MsgCreateGroupPolicy) => _76.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _76.MsgCreateGroupPolicyAmino) => _76.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _76.MsgCreateGroupWithPolicy) => _76.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _76.MsgCreateGroupWithPolicyAmino) => _76.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUpdateGroupPolicyAdmin) => _76.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _76.MsgUpdateGroupPolicyAdminAmino) => _76.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUpdateGroupPolicyDecisionPolicy) => _76.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _76.MsgUpdateGroupPolicyDecisionPolicyAmino) => _76.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUpdateGroupPolicyMetadata) => _76.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _76.MsgUpdateGroupPolicyMetadataAmino) => _76.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _76.MsgSubmitProposal) => _76.MsgSubmitProposalAmino;
                    fromAmino: (object: _76.MsgSubmitProposalAmino) => _76.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _76.MsgWithdrawProposal) => _76.MsgWithdrawProposalAmino;
                    fromAmino: (object: _76.MsgWithdrawProposalAmino) => _76.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _76.MsgVote) => _76.MsgVoteAmino;
                    fromAmino: (object: _76.MsgVoteAmino) => _76.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _76.MsgExec) => _76.MsgExecAmino;
                    fromAmino: (object: _76.MsgExecAmino) => _76.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _76.MsgLeaveGroup) => _76.MsgLeaveGroupAmino;
                    fromAmino: (object: _76.MsgLeaveGroupAmino) => _76.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _77.VoteOption;
            voteOptionToJSON(object: _77.VoteOption): string;
            proposalStatusFromJSON(object: any): _77.ProposalStatus;
            proposalStatusToJSON(object: _77.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _77.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _77.ProposalExecutorResult): string;
            VoteOption: typeof _77.VoteOption;
            VoteOptionSDKType: typeof _77.VoteOption;
            VoteOptionAmino: typeof _77.VoteOption;
            ProposalStatus: typeof _77.ProposalStatus;
            ProposalStatusSDKType: typeof _77.ProposalStatus;
            ProposalStatusAmino: typeof _77.ProposalStatus;
            ProposalExecutorResult: typeof _77.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _77.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _77.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _77.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Member;
                fromPartial(object: Partial<_77.Member>): _77.Member;
                fromAmino(object: _77.MemberAmino): _77.Member;
                toAmino(message: _77.Member): _77.MemberAmino;
                fromAminoMsg(object: _77.MemberAminoMsg): _77.Member;
                toAminoMsg(message: _77.Member): _77.MemberAminoMsg;
                fromProtoMsg(message: _77.MemberProtoMsg): _77.Member;
                toProto(message: _77.Member): Uint8Array;
                toProtoMsg(message: _77.Member): _77.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _77.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MemberRequest;
                fromPartial(object: Partial<_77.MemberRequest>): _77.MemberRequest;
                fromAmino(object: _77.MemberRequestAmino): _77.MemberRequest;
                toAmino(message: _77.MemberRequest): _77.MemberRequestAmino;
                fromAminoMsg(object: _77.MemberRequestAminoMsg): _77.MemberRequest;
                toAminoMsg(message: _77.MemberRequest): _77.MemberRequestAminoMsg;
                fromProtoMsg(message: _77.MemberRequestProtoMsg): _77.MemberRequest;
                toProto(message: _77.MemberRequest): Uint8Array;
                toProtoMsg(message: _77.MemberRequest): _77.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _77.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_77.ThresholdDecisionPolicy>): _77.ThresholdDecisionPolicy;
                fromAmino(object: _77.ThresholdDecisionPolicyAmino): _77.ThresholdDecisionPolicy;
                toAmino(message: _77.ThresholdDecisionPolicy): _77.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _77.ThresholdDecisionPolicyAminoMsg): _77.ThresholdDecisionPolicy;
                toAminoMsg(message: _77.ThresholdDecisionPolicy): _77.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _77.ThresholdDecisionPolicyProtoMsg): _77.ThresholdDecisionPolicy;
                toProto(message: _77.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _77.ThresholdDecisionPolicy): _77.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _77.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.PercentageDecisionPolicy;
                fromPartial(object: Partial<_77.PercentageDecisionPolicy>): _77.PercentageDecisionPolicy;
                fromAmino(object: _77.PercentageDecisionPolicyAmino): _77.PercentageDecisionPolicy;
                toAmino(message: _77.PercentageDecisionPolicy): _77.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _77.PercentageDecisionPolicyAminoMsg): _77.PercentageDecisionPolicy;
                toAminoMsg(message: _77.PercentageDecisionPolicy): _77.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _77.PercentageDecisionPolicyProtoMsg): _77.PercentageDecisionPolicy;
                toProto(message: _77.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _77.PercentageDecisionPolicy): _77.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _77.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.DecisionPolicyWindows;
                fromPartial(object: Partial<_77.DecisionPolicyWindows>): _77.DecisionPolicyWindows;
                fromAmino(object: _77.DecisionPolicyWindowsAmino): _77.DecisionPolicyWindows;
                toAmino(message: _77.DecisionPolicyWindows): _77.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _77.DecisionPolicyWindowsAminoMsg): _77.DecisionPolicyWindows;
                toAminoMsg(message: _77.DecisionPolicyWindows): _77.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _77.DecisionPolicyWindowsProtoMsg): _77.DecisionPolicyWindows;
                toProto(message: _77.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _77.DecisionPolicyWindows): _77.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _77.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.GroupInfo;
                fromPartial(object: Partial<_77.GroupInfo>): _77.GroupInfo;
                fromAmino(object: _77.GroupInfoAmino): _77.GroupInfo;
                toAmino(message: _77.GroupInfo): _77.GroupInfoAmino;
                fromAminoMsg(object: _77.GroupInfoAminoMsg): _77.GroupInfo;
                toAminoMsg(message: _77.GroupInfo): _77.GroupInfoAminoMsg;
                fromProtoMsg(message: _77.GroupInfoProtoMsg): _77.GroupInfo;
                toProto(message: _77.GroupInfo): Uint8Array;
                toProtoMsg(message: _77.GroupInfo): _77.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _77.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.GroupMember;
                fromPartial(object: Partial<_77.GroupMember>): _77.GroupMember;
                fromAmino(object: _77.GroupMemberAmino): _77.GroupMember;
                toAmino(message: _77.GroupMember): _77.GroupMemberAmino;
                fromAminoMsg(object: _77.GroupMemberAminoMsg): _77.GroupMember;
                toAminoMsg(message: _77.GroupMember): _77.GroupMemberAminoMsg;
                fromProtoMsg(message: _77.GroupMemberProtoMsg): _77.GroupMember;
                toProto(message: _77.GroupMember): Uint8Array;
                toProtoMsg(message: _77.GroupMember): _77.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _77.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.GroupPolicyInfo;
                fromPartial(object: Partial<_77.GroupPolicyInfo>): _77.GroupPolicyInfo;
                fromAmino(object: _77.GroupPolicyInfoAmino): _77.GroupPolicyInfo;
                toAmino(message: _77.GroupPolicyInfo): _77.GroupPolicyInfoAmino;
                fromAminoMsg(object: _77.GroupPolicyInfoAminoMsg): _77.GroupPolicyInfo;
                toAminoMsg(message: _77.GroupPolicyInfo): _77.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _77.GroupPolicyInfoProtoMsg): _77.GroupPolicyInfo;
                toProto(message: _77.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _77.GroupPolicyInfo): _77.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _77.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Proposal;
                fromPartial(object: Partial<_77.Proposal>): _77.Proposal;
                fromAmino(object: _77.ProposalAmino): _77.Proposal;
                toAmino(message: _77.Proposal): _77.ProposalAmino;
                fromAminoMsg(object: _77.ProposalAminoMsg): _77.Proposal;
                toAminoMsg(message: _77.Proposal): _77.ProposalAminoMsg;
                fromProtoMsg(message: _77.ProposalProtoMsg): _77.Proposal;
                toProto(message: _77.Proposal): Uint8Array;
                toProtoMsg(message: _77.Proposal): _77.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _77.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.TallyResult;
                fromPartial(object: Partial<_77.TallyResult>): _77.TallyResult;
                fromAmino(object: _77.TallyResultAmino): _77.TallyResult;
                toAmino(message: _77.TallyResult): _77.TallyResultAmino;
                fromAminoMsg(object: _77.TallyResultAminoMsg): _77.TallyResult;
                toAminoMsg(message: _77.TallyResult): _77.TallyResultAminoMsg;
                fromProtoMsg(message: _77.TallyResultProtoMsg): _77.TallyResult;
                toProto(message: _77.TallyResult): Uint8Array;
                toProtoMsg(message: _77.TallyResult): _77.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _77.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Vote;
                fromPartial(object: Partial<_77.Vote>): _77.Vote;
                fromAmino(object: _77.VoteAmino): _77.Vote;
                toAmino(message: _77.Vote): _77.VoteAmino;
                fromAminoMsg(object: _77.VoteAminoMsg): _77.Vote;
                toAminoMsg(message: _77.Vote): _77.VoteAminoMsg;
                fromProtoMsg(message: _77.VoteProtoMsg): _77.Vote;
                toProto(message: _77.Vote): Uint8Array;
                toProtoMsg(message: _77.Vote): _77.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _76.Exec;
            execToJSON(object: _76.Exec): string;
            Exec: typeof _76.Exec;
            ExecSDKType: typeof _76.Exec;
            ExecAmino: typeof _76.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _76.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateGroup;
                fromPartial(object: Partial<_76.MsgCreateGroup>): _76.MsgCreateGroup;
                fromAmino(object: _76.MsgCreateGroupAmino): _76.MsgCreateGroup;
                toAmino(message: _76.MsgCreateGroup): _76.MsgCreateGroupAmino;
                fromAminoMsg(object: _76.MsgCreateGroupAminoMsg): _76.MsgCreateGroup;
                toAminoMsg(message: _76.MsgCreateGroup): _76.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _76.MsgCreateGroupProtoMsg): _76.MsgCreateGroup;
                toProto(message: _76.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _76.MsgCreateGroup): _76.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _76.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateGroupResponse;
                fromPartial(object: Partial<_76.MsgCreateGroupResponse>): _76.MsgCreateGroupResponse;
                fromAmino(object: _76.MsgCreateGroupResponseAmino): _76.MsgCreateGroupResponse;
                toAmino(message: _76.MsgCreateGroupResponse): _76.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _76.MsgCreateGroupResponseAminoMsg): _76.MsgCreateGroupResponse;
                toAminoMsg(message: _76.MsgCreateGroupResponse): _76.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _76.MsgCreateGroupResponseProtoMsg): _76.MsgCreateGroupResponse;
                toProto(message: _76.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _76.MsgCreateGroupResponse): _76.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _76.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_76.MsgUpdateGroupMembers>): _76.MsgUpdateGroupMembers;
                fromAmino(object: _76.MsgUpdateGroupMembersAmino): _76.MsgUpdateGroupMembers;
                toAmino(message: _76.MsgUpdateGroupMembers): _76.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupMembersAminoMsg): _76.MsgUpdateGroupMembers;
                toAminoMsg(message: _76.MsgUpdateGroupMembers): _76.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupMembersProtoMsg): _76.MsgUpdateGroupMembers;
                toProto(message: _76.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupMembers): _76.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _76.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_76.MsgUpdateGroupMembersResponse>): _76.MsgUpdateGroupMembersResponse;
                fromAmino(_: _76.MsgUpdateGroupMembersResponseAmino): _76.MsgUpdateGroupMembersResponse;
                toAmino(_: _76.MsgUpdateGroupMembersResponse): _76.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupMembersResponseAminoMsg): _76.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _76.MsgUpdateGroupMembersResponse): _76.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupMembersResponseProtoMsg): _76.MsgUpdateGroupMembersResponse;
                toProto(message: _76.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupMembersResponse): _76.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _76.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_76.MsgUpdateGroupAdmin>): _76.MsgUpdateGroupAdmin;
                fromAmino(object: _76.MsgUpdateGroupAdminAmino): _76.MsgUpdateGroupAdmin;
                toAmino(message: _76.MsgUpdateGroupAdmin): _76.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupAdminAminoMsg): _76.MsgUpdateGroupAdmin;
                toAminoMsg(message: _76.MsgUpdateGroupAdmin): _76.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupAdminProtoMsg): _76.MsgUpdateGroupAdmin;
                toProto(message: _76.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupAdmin): _76.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _76.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_76.MsgUpdateGroupAdminResponse>): _76.MsgUpdateGroupAdminResponse;
                fromAmino(_: _76.MsgUpdateGroupAdminResponseAmino): _76.MsgUpdateGroupAdminResponse;
                toAmino(_: _76.MsgUpdateGroupAdminResponse): _76.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupAdminResponseAminoMsg): _76.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _76.MsgUpdateGroupAdminResponse): _76.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupAdminResponseProtoMsg): _76.MsgUpdateGroupAdminResponse;
                toProto(message: _76.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupAdminResponse): _76.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _76.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_76.MsgUpdateGroupMetadata>): _76.MsgUpdateGroupMetadata;
                fromAmino(object: _76.MsgUpdateGroupMetadataAmino): _76.MsgUpdateGroupMetadata;
                toAmino(message: _76.MsgUpdateGroupMetadata): _76.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupMetadataAminoMsg): _76.MsgUpdateGroupMetadata;
                toAminoMsg(message: _76.MsgUpdateGroupMetadata): _76.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupMetadataProtoMsg): _76.MsgUpdateGroupMetadata;
                toProto(message: _76.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupMetadata): _76.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _76.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_76.MsgUpdateGroupMetadataResponse>): _76.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _76.MsgUpdateGroupMetadataResponseAmino): _76.MsgUpdateGroupMetadataResponse;
                toAmino(_: _76.MsgUpdateGroupMetadataResponse): _76.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupMetadataResponseAminoMsg): _76.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _76.MsgUpdateGroupMetadataResponse): _76.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupMetadataResponseProtoMsg): _76.MsgUpdateGroupMetadataResponse;
                toProto(message: _76.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupMetadataResponse): _76.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _76.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_76.MsgCreateGroupPolicy>): _76.MsgCreateGroupPolicy;
                fromAmino(object: _76.MsgCreateGroupPolicyAmino): _76.MsgCreateGroupPolicy;
                toAmino(message: _76.MsgCreateGroupPolicy): _76.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _76.MsgCreateGroupPolicyAminoMsg): _76.MsgCreateGroupPolicy;
                toAminoMsg(message: _76.MsgCreateGroupPolicy): _76.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _76.MsgCreateGroupPolicyProtoMsg): _76.MsgCreateGroupPolicy;
                toProto(message: _76.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _76.MsgCreateGroupPolicy): _76.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _76.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_76.MsgCreateGroupPolicyResponse>): _76.MsgCreateGroupPolicyResponse;
                fromAmino(object: _76.MsgCreateGroupPolicyResponseAmino): _76.MsgCreateGroupPolicyResponse;
                toAmino(message: _76.MsgCreateGroupPolicyResponse): _76.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _76.MsgCreateGroupPolicyResponseAminoMsg): _76.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _76.MsgCreateGroupPolicyResponse): _76.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _76.MsgCreateGroupPolicyResponseProtoMsg): _76.MsgCreateGroupPolicyResponse;
                toProto(message: _76.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _76.MsgCreateGroupPolicyResponse): _76.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _76.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_76.MsgUpdateGroupPolicyAdmin>): _76.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _76.MsgUpdateGroupPolicyAdminAmino): _76.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _76.MsgUpdateGroupPolicyAdmin): _76.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupPolicyAdminAminoMsg): _76.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _76.MsgUpdateGroupPolicyAdmin): _76.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupPolicyAdminProtoMsg): _76.MsgUpdateGroupPolicyAdmin;
                toProto(message: _76.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupPolicyAdmin): _76.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _76.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_76.MsgCreateGroupWithPolicy>): _76.MsgCreateGroupWithPolicy;
                fromAmino(object: _76.MsgCreateGroupWithPolicyAmino): _76.MsgCreateGroupWithPolicy;
                toAmino(message: _76.MsgCreateGroupWithPolicy): _76.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _76.MsgCreateGroupWithPolicyAminoMsg): _76.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _76.MsgCreateGroupWithPolicy): _76.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _76.MsgCreateGroupWithPolicyProtoMsg): _76.MsgCreateGroupWithPolicy;
                toProto(message: _76.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _76.MsgCreateGroupWithPolicy): _76.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _76.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_76.MsgCreateGroupWithPolicyResponse>): _76.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _76.MsgCreateGroupWithPolicyResponseAmino): _76.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _76.MsgCreateGroupWithPolicyResponse): _76.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _76.MsgCreateGroupWithPolicyResponseAminoMsg): _76.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _76.MsgCreateGroupWithPolicyResponse): _76.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _76.MsgCreateGroupWithPolicyResponseProtoMsg): _76.MsgCreateGroupWithPolicyResponse;
                toProto(message: _76.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _76.MsgCreateGroupWithPolicyResponse): _76.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _76.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_76.MsgUpdateGroupPolicyAdminResponse>): _76.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _76.MsgUpdateGroupPolicyAdminResponseAmino): _76.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _76.MsgUpdateGroupPolicyAdminResponse): _76.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupPolicyAdminResponseAminoMsg): _76.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _76.MsgUpdateGroupPolicyAdminResponse): _76.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupPolicyAdminResponseProtoMsg): _76.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _76.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupPolicyAdminResponse): _76.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _76.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_76.MsgUpdateGroupPolicyDecisionPolicy>): _76.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _76.MsgUpdateGroupPolicyDecisionPolicyAmino): _76.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _76.MsgUpdateGroupPolicyDecisionPolicy): _76.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _76.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _76.MsgUpdateGroupPolicyDecisionPolicy): _76.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _76.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _76.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupPolicyDecisionPolicy): _76.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _76.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_76.MsgUpdateGroupPolicyDecisionPolicyResponse>): _76.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _76.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _76.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _76.MsgUpdateGroupPolicyDecisionPolicyResponse): _76.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _76.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _76.MsgUpdateGroupPolicyDecisionPolicyResponse): _76.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _76.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _76.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupPolicyDecisionPolicyResponse): _76.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _76.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_76.MsgUpdateGroupPolicyMetadata>): _76.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _76.MsgUpdateGroupPolicyMetadataAmino): _76.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _76.MsgUpdateGroupPolicyMetadata): _76.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupPolicyMetadataAminoMsg): _76.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _76.MsgUpdateGroupPolicyMetadata): _76.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupPolicyMetadataProtoMsg): _76.MsgUpdateGroupPolicyMetadata;
                toProto(message: _76.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupPolicyMetadata): _76.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _76.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_76.MsgUpdateGroupPolicyMetadataResponse>): _76.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _76.MsgUpdateGroupPolicyMetadataResponseAmino): _76.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _76.MsgUpdateGroupPolicyMetadataResponse): _76.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _76.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _76.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _76.MsgUpdateGroupPolicyMetadataResponse): _76.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _76.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _76.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateGroupPolicyMetadataResponse): _76.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _76.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgSubmitProposal;
                fromPartial(object: Partial<_76.MsgSubmitProposal>): _76.MsgSubmitProposal;
                fromAmino(object: _76.MsgSubmitProposalAmino): _76.MsgSubmitProposal;
                toAmino(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalAmino;
                fromAminoMsg(object: _76.MsgSubmitProposalAminoMsg): _76.MsgSubmitProposal;
                toAminoMsg(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _76.MsgSubmitProposalProtoMsg): _76.MsgSubmitProposal;
                toProto(message: _76.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _76.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_76.MsgSubmitProposalResponse>): _76.MsgSubmitProposalResponse;
                fromAmino(object: _76.MsgSubmitProposalResponseAmino): _76.MsgSubmitProposalResponse;
                toAmino(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _76.MsgSubmitProposalResponseAminoMsg): _76.MsgSubmitProposalResponse;
                toAminoMsg(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _76.MsgSubmitProposalResponseProtoMsg): _76.MsgSubmitProposalResponse;
                toProto(message: _76.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _76.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgWithdrawProposal;
                fromPartial(object: Partial<_76.MsgWithdrawProposal>): _76.MsgWithdrawProposal;
                fromAmino(object: _76.MsgWithdrawProposalAmino): _76.MsgWithdrawProposal;
                toAmino(message: _76.MsgWithdrawProposal): _76.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _76.MsgWithdrawProposalAminoMsg): _76.MsgWithdrawProposal;
                toAminoMsg(message: _76.MsgWithdrawProposal): _76.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _76.MsgWithdrawProposalProtoMsg): _76.MsgWithdrawProposal;
                toProto(message: _76.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _76.MsgWithdrawProposal): _76.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _76.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_76.MsgWithdrawProposalResponse>): _76.MsgWithdrawProposalResponse;
                fromAmino(_: _76.MsgWithdrawProposalResponseAmino): _76.MsgWithdrawProposalResponse;
                toAmino(_: _76.MsgWithdrawProposalResponse): _76.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _76.MsgWithdrawProposalResponseAminoMsg): _76.MsgWithdrawProposalResponse;
                toAminoMsg(message: _76.MsgWithdrawProposalResponse): _76.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _76.MsgWithdrawProposalResponseProtoMsg): _76.MsgWithdrawProposalResponse;
                toProto(message: _76.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _76.MsgWithdrawProposalResponse): _76.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _76.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgVote;
                fromPartial(object: Partial<_76.MsgVote>): _76.MsgVote;
                fromAmino(object: _76.MsgVoteAmino): _76.MsgVote;
                toAmino(message: _76.MsgVote): _76.MsgVoteAmino;
                fromAminoMsg(object: _76.MsgVoteAminoMsg): _76.MsgVote;
                toAminoMsg(message: _76.MsgVote): _76.MsgVoteAminoMsg;
                fromProtoMsg(message: _76.MsgVoteProtoMsg): _76.MsgVote;
                toProto(message: _76.MsgVote): Uint8Array;
                toProtoMsg(message: _76.MsgVote): _76.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _76.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgVoteResponse;
                fromPartial(_: Partial<_76.MsgVoteResponse>): _76.MsgVoteResponse;
                fromAmino(_: _76.MsgVoteResponseAmino): _76.MsgVoteResponse;
                toAmino(_: _76.MsgVoteResponse): _76.MsgVoteResponseAmino;
                fromAminoMsg(object: _76.MsgVoteResponseAminoMsg): _76.MsgVoteResponse;
                toAminoMsg(message: _76.MsgVoteResponse): _76.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _76.MsgVoteResponseProtoMsg): _76.MsgVoteResponse;
                toProto(message: _76.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _76.MsgVoteResponse): _76.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _76.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgExec;
                fromPartial(object: Partial<_76.MsgExec>): _76.MsgExec;
                fromAmino(object: _76.MsgExecAmino): _76.MsgExec;
                toAmino(message: _76.MsgExec): _76.MsgExecAmino;
                fromAminoMsg(object: _76.MsgExecAminoMsg): _76.MsgExec;
                toAminoMsg(message: _76.MsgExec): _76.MsgExecAminoMsg;
                fromProtoMsg(message: _76.MsgExecProtoMsg): _76.MsgExec;
                toProto(message: _76.MsgExec): Uint8Array;
                toProtoMsg(message: _76.MsgExec): _76.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _76.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgExecResponse;
                fromPartial(object: Partial<_76.MsgExecResponse>): _76.MsgExecResponse;
                fromAmino(object: _76.MsgExecResponseAmino): _76.MsgExecResponse;
                toAmino(message: _76.MsgExecResponse): _76.MsgExecResponseAmino;
                fromAminoMsg(object: _76.MsgExecResponseAminoMsg): _76.MsgExecResponse;
                toAminoMsg(message: _76.MsgExecResponse): _76.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _76.MsgExecResponseProtoMsg): _76.MsgExecResponse;
                toProto(message: _76.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _76.MsgExecResponse): _76.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _76.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.MsgLeaveGroup;
                fromPartial(object: Partial<_76.MsgLeaveGroup>): _76.MsgLeaveGroup;
                fromAmino(object: _76.MsgLeaveGroupAmino): _76.MsgLeaveGroup;
                toAmino(message: _76.MsgLeaveGroup): _76.MsgLeaveGroupAmino;
                fromAminoMsg(object: _76.MsgLeaveGroupAminoMsg): _76.MsgLeaveGroup;
                toAminoMsg(message: _76.MsgLeaveGroup): _76.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _76.MsgLeaveGroupProtoMsg): _76.MsgLeaveGroup;
                toProto(message: _76.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _76.MsgLeaveGroup): _76.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _76.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _76.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_76.MsgLeaveGroupResponse>): _76.MsgLeaveGroupResponse;
                fromAmino(_: _76.MsgLeaveGroupResponseAmino): _76.MsgLeaveGroupResponse;
                toAmino(_: _76.MsgLeaveGroupResponse): _76.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _76.MsgLeaveGroupResponseAminoMsg): _76.MsgLeaveGroupResponse;
                toAminoMsg(message: _76.MsgLeaveGroupResponse): _76.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _76.MsgLeaveGroupResponseProtoMsg): _76.MsgLeaveGroupResponse;
                toProto(message: _76.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _76.MsgLeaveGroupResponse): _76.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _75.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupInfoRequest;
                fromPartial(object: Partial<_75.QueryGroupInfoRequest>): _75.QueryGroupInfoRequest;
                fromAmino(object: _75.QueryGroupInfoRequestAmino): _75.QueryGroupInfoRequest;
                toAmino(message: _75.QueryGroupInfoRequest): _75.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _75.QueryGroupInfoRequestAminoMsg): _75.QueryGroupInfoRequest;
                toAminoMsg(message: _75.QueryGroupInfoRequest): _75.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGroupInfoRequestProtoMsg): _75.QueryGroupInfoRequest;
                toProto(message: _75.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGroupInfoRequest): _75.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _75.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupInfoResponse;
                fromPartial(object: Partial<_75.QueryGroupInfoResponse>): _75.QueryGroupInfoResponse;
                fromAmino(object: _75.QueryGroupInfoResponseAmino): _75.QueryGroupInfoResponse;
                toAmino(message: _75.QueryGroupInfoResponse): _75.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _75.QueryGroupInfoResponseAminoMsg): _75.QueryGroupInfoResponse;
                toAminoMsg(message: _75.QueryGroupInfoResponse): _75.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGroupInfoResponseProtoMsg): _75.QueryGroupInfoResponse;
                toProto(message: _75.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGroupInfoResponse): _75.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _75.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_75.QueryGroupPolicyInfoRequest>): _75.QueryGroupPolicyInfoRequest;
                fromAmino(object: _75.QueryGroupPolicyInfoRequestAmino): _75.QueryGroupPolicyInfoRequest;
                toAmino(message: _75.QueryGroupPolicyInfoRequest): _75.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _75.QueryGroupPolicyInfoRequestAminoMsg): _75.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _75.QueryGroupPolicyInfoRequest): _75.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGroupPolicyInfoRequestProtoMsg): _75.QueryGroupPolicyInfoRequest;
                toProto(message: _75.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGroupPolicyInfoRequest): _75.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _75.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_75.QueryGroupPolicyInfoResponse>): _75.QueryGroupPolicyInfoResponse;
                fromAmino(object: _75.QueryGroupPolicyInfoResponseAmino): _75.QueryGroupPolicyInfoResponse;
                toAmino(message: _75.QueryGroupPolicyInfoResponse): _75.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _75.QueryGroupPolicyInfoResponseAminoMsg): _75.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _75.QueryGroupPolicyInfoResponse): _75.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGroupPolicyInfoResponseProtoMsg): _75.QueryGroupPolicyInfoResponse;
                toProto(message: _75.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGroupPolicyInfoResponse): _75.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _75.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupMembersRequest;
                fromPartial(object: Partial<_75.QueryGroupMembersRequest>): _75.QueryGroupMembersRequest;
                fromAmino(object: _75.QueryGroupMembersRequestAmino): _75.QueryGroupMembersRequest;
                toAmino(message: _75.QueryGroupMembersRequest): _75.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _75.QueryGroupMembersRequestAminoMsg): _75.QueryGroupMembersRequest;
                toAminoMsg(message: _75.QueryGroupMembersRequest): _75.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGroupMembersRequestProtoMsg): _75.QueryGroupMembersRequest;
                toProto(message: _75.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGroupMembersRequest): _75.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _75.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupMembersResponse;
                fromPartial(object: Partial<_75.QueryGroupMembersResponse>): _75.QueryGroupMembersResponse;
                fromAmino(object: _75.QueryGroupMembersResponseAmino): _75.QueryGroupMembersResponse;
                toAmino(message: _75.QueryGroupMembersResponse): _75.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _75.QueryGroupMembersResponseAminoMsg): _75.QueryGroupMembersResponse;
                toAminoMsg(message: _75.QueryGroupMembersResponse): _75.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGroupMembersResponseProtoMsg): _75.QueryGroupMembersResponse;
                toProto(message: _75.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGroupMembersResponse): _75.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _75.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_75.QueryGroupsByAdminRequest>): _75.QueryGroupsByAdminRequest;
                fromAmino(object: _75.QueryGroupsByAdminRequestAmino): _75.QueryGroupsByAdminRequest;
                toAmino(message: _75.QueryGroupsByAdminRequest): _75.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _75.QueryGroupsByAdminRequestAminoMsg): _75.QueryGroupsByAdminRequest;
                toAminoMsg(message: _75.QueryGroupsByAdminRequest): _75.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGroupsByAdminRequestProtoMsg): _75.QueryGroupsByAdminRequest;
                toProto(message: _75.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGroupsByAdminRequest): _75.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _75.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_75.QueryGroupsByAdminResponse>): _75.QueryGroupsByAdminResponse;
                fromAmino(object: _75.QueryGroupsByAdminResponseAmino): _75.QueryGroupsByAdminResponse;
                toAmino(message: _75.QueryGroupsByAdminResponse): _75.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _75.QueryGroupsByAdminResponseAminoMsg): _75.QueryGroupsByAdminResponse;
                toAminoMsg(message: _75.QueryGroupsByAdminResponse): _75.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGroupsByAdminResponseProtoMsg): _75.QueryGroupsByAdminResponse;
                toProto(message: _75.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGroupsByAdminResponse): _75.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _75.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_75.QueryGroupPoliciesByGroupRequest>): _75.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _75.QueryGroupPoliciesByGroupRequestAmino): _75.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _75.QueryGroupPoliciesByGroupRequest): _75.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _75.QueryGroupPoliciesByGroupRequestAminoMsg): _75.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _75.QueryGroupPoliciesByGroupRequest): _75.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGroupPoliciesByGroupRequestProtoMsg): _75.QueryGroupPoliciesByGroupRequest;
                toProto(message: _75.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGroupPoliciesByGroupRequest): _75.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _75.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_75.QueryGroupPoliciesByGroupResponse>): _75.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _75.QueryGroupPoliciesByGroupResponseAmino): _75.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _75.QueryGroupPoliciesByGroupResponse): _75.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _75.QueryGroupPoliciesByGroupResponseAminoMsg): _75.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _75.QueryGroupPoliciesByGroupResponse): _75.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGroupPoliciesByGroupResponseProtoMsg): _75.QueryGroupPoliciesByGroupResponse;
                toProto(message: _75.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGroupPoliciesByGroupResponse): _75.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _75.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_75.QueryGroupPoliciesByAdminRequest>): _75.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _75.QueryGroupPoliciesByAdminRequestAmino): _75.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _75.QueryGroupPoliciesByAdminRequest): _75.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _75.QueryGroupPoliciesByAdminRequestAminoMsg): _75.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _75.QueryGroupPoliciesByAdminRequest): _75.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGroupPoliciesByAdminRequestProtoMsg): _75.QueryGroupPoliciesByAdminRequest;
                toProto(message: _75.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGroupPoliciesByAdminRequest): _75.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _75.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_75.QueryGroupPoliciesByAdminResponse>): _75.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _75.QueryGroupPoliciesByAdminResponseAmino): _75.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _75.QueryGroupPoliciesByAdminResponse): _75.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _75.QueryGroupPoliciesByAdminResponseAminoMsg): _75.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _75.QueryGroupPoliciesByAdminResponse): _75.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGroupPoliciesByAdminResponseProtoMsg): _75.QueryGroupPoliciesByAdminResponse;
                toProto(message: _75.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGroupPoliciesByAdminResponse): _75.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _75.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryProposalRequest;
                fromPartial(object: Partial<_75.QueryProposalRequest>): _75.QueryProposalRequest;
                fromAmino(object: _75.QueryProposalRequestAmino): _75.QueryProposalRequest;
                toAmino(message: _75.QueryProposalRequest): _75.QueryProposalRequestAmino;
                fromAminoMsg(object: _75.QueryProposalRequestAminoMsg): _75.QueryProposalRequest;
                toAminoMsg(message: _75.QueryProposalRequest): _75.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _75.QueryProposalRequestProtoMsg): _75.QueryProposalRequest;
                toProto(message: _75.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _75.QueryProposalRequest): _75.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _75.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryProposalResponse;
                fromPartial(object: Partial<_75.QueryProposalResponse>): _75.QueryProposalResponse;
                fromAmino(object: _75.QueryProposalResponseAmino): _75.QueryProposalResponse;
                toAmino(message: _75.QueryProposalResponse): _75.QueryProposalResponseAmino;
                fromAminoMsg(object: _75.QueryProposalResponseAminoMsg): _75.QueryProposalResponse;
                toAminoMsg(message: _75.QueryProposalResponse): _75.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _75.QueryProposalResponseProtoMsg): _75.QueryProposalResponse;
                toProto(message: _75.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _75.QueryProposalResponse): _75.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _75.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_75.QueryProposalsByGroupPolicyRequest>): _75.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _75.QueryProposalsByGroupPolicyRequestAmino): _75.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _75.QueryProposalsByGroupPolicyRequest): _75.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _75.QueryProposalsByGroupPolicyRequestAminoMsg): _75.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _75.QueryProposalsByGroupPolicyRequest): _75.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _75.QueryProposalsByGroupPolicyRequestProtoMsg): _75.QueryProposalsByGroupPolicyRequest;
                toProto(message: _75.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _75.QueryProposalsByGroupPolicyRequest): _75.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _75.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_75.QueryProposalsByGroupPolicyResponse>): _75.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _75.QueryProposalsByGroupPolicyResponseAmino): _75.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _75.QueryProposalsByGroupPolicyResponse): _75.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _75.QueryProposalsByGroupPolicyResponseAminoMsg): _75.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _75.QueryProposalsByGroupPolicyResponse): _75.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _75.QueryProposalsByGroupPolicyResponseProtoMsg): _75.QueryProposalsByGroupPolicyResponse;
                toProto(message: _75.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _75.QueryProposalsByGroupPolicyResponse): _75.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _75.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_75.QueryVoteByProposalVoterRequest>): _75.QueryVoteByProposalVoterRequest;
                fromAmino(object: _75.QueryVoteByProposalVoterRequestAmino): _75.QueryVoteByProposalVoterRequest;
                toAmino(message: _75.QueryVoteByProposalVoterRequest): _75.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _75.QueryVoteByProposalVoterRequestAminoMsg): _75.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _75.QueryVoteByProposalVoterRequest): _75.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _75.QueryVoteByProposalVoterRequestProtoMsg): _75.QueryVoteByProposalVoterRequest;
                toProto(message: _75.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _75.QueryVoteByProposalVoterRequest): _75.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _75.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_75.QueryVoteByProposalVoterResponse>): _75.QueryVoteByProposalVoterResponse;
                fromAmino(object: _75.QueryVoteByProposalVoterResponseAmino): _75.QueryVoteByProposalVoterResponse;
                toAmino(message: _75.QueryVoteByProposalVoterResponse): _75.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _75.QueryVoteByProposalVoterResponseAminoMsg): _75.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _75.QueryVoteByProposalVoterResponse): _75.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _75.QueryVoteByProposalVoterResponseProtoMsg): _75.QueryVoteByProposalVoterResponse;
                toProto(message: _75.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _75.QueryVoteByProposalVoterResponse): _75.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _75.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_75.QueryVotesByProposalRequest>): _75.QueryVotesByProposalRequest;
                fromAmino(object: _75.QueryVotesByProposalRequestAmino): _75.QueryVotesByProposalRequest;
                toAmino(message: _75.QueryVotesByProposalRequest): _75.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _75.QueryVotesByProposalRequestAminoMsg): _75.QueryVotesByProposalRequest;
                toAminoMsg(message: _75.QueryVotesByProposalRequest): _75.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _75.QueryVotesByProposalRequestProtoMsg): _75.QueryVotesByProposalRequest;
                toProto(message: _75.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _75.QueryVotesByProposalRequest): _75.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _75.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_75.QueryVotesByProposalResponse>): _75.QueryVotesByProposalResponse;
                fromAmino(object: _75.QueryVotesByProposalResponseAmino): _75.QueryVotesByProposalResponse;
                toAmino(message: _75.QueryVotesByProposalResponse): _75.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _75.QueryVotesByProposalResponseAminoMsg): _75.QueryVotesByProposalResponse;
                toAminoMsg(message: _75.QueryVotesByProposalResponse): _75.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _75.QueryVotesByProposalResponseProtoMsg): _75.QueryVotesByProposalResponse;
                toProto(message: _75.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _75.QueryVotesByProposalResponse): _75.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _75.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_75.QueryVotesByVoterRequest>): _75.QueryVotesByVoterRequest;
                fromAmino(object: _75.QueryVotesByVoterRequestAmino): _75.QueryVotesByVoterRequest;
                toAmino(message: _75.QueryVotesByVoterRequest): _75.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _75.QueryVotesByVoterRequestAminoMsg): _75.QueryVotesByVoterRequest;
                toAminoMsg(message: _75.QueryVotesByVoterRequest): _75.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _75.QueryVotesByVoterRequestProtoMsg): _75.QueryVotesByVoterRequest;
                toProto(message: _75.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _75.QueryVotesByVoterRequest): _75.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _75.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_75.QueryVotesByVoterResponse>): _75.QueryVotesByVoterResponse;
                fromAmino(object: _75.QueryVotesByVoterResponseAmino): _75.QueryVotesByVoterResponse;
                toAmino(message: _75.QueryVotesByVoterResponse): _75.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _75.QueryVotesByVoterResponseAminoMsg): _75.QueryVotesByVoterResponse;
                toAminoMsg(message: _75.QueryVotesByVoterResponse): _75.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _75.QueryVotesByVoterResponseProtoMsg): _75.QueryVotesByVoterResponse;
                toProto(message: _75.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _75.QueryVotesByVoterResponse): _75.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _75.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_75.QueryGroupsByMemberRequest>): _75.QueryGroupsByMemberRequest;
                fromAmino(object: _75.QueryGroupsByMemberRequestAmino): _75.QueryGroupsByMemberRequest;
                toAmino(message: _75.QueryGroupsByMemberRequest): _75.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _75.QueryGroupsByMemberRequestAminoMsg): _75.QueryGroupsByMemberRequest;
                toAminoMsg(message: _75.QueryGroupsByMemberRequest): _75.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGroupsByMemberRequestProtoMsg): _75.QueryGroupsByMemberRequest;
                toProto(message: _75.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGroupsByMemberRequest): _75.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _75.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_75.QueryGroupsByMemberResponse>): _75.QueryGroupsByMemberResponse;
                fromAmino(object: _75.QueryGroupsByMemberResponseAmino): _75.QueryGroupsByMemberResponse;
                toAmino(message: _75.QueryGroupsByMemberResponse): _75.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _75.QueryGroupsByMemberResponseAminoMsg): _75.QueryGroupsByMemberResponse;
                toAminoMsg(message: _75.QueryGroupsByMemberResponse): _75.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGroupsByMemberResponseProtoMsg): _75.QueryGroupsByMemberResponse;
                toProto(message: _75.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGroupsByMemberResponse): _75.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _75.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryTallyResultRequest;
                fromPartial(object: Partial<_75.QueryTallyResultRequest>): _75.QueryTallyResultRequest;
                fromAmino(object: _75.QueryTallyResultRequestAmino): _75.QueryTallyResultRequest;
                toAmino(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _75.QueryTallyResultRequestAminoMsg): _75.QueryTallyResultRequest;
                toAminoMsg(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _75.QueryTallyResultRequestProtoMsg): _75.QueryTallyResultRequest;
                toProto(message: _75.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _75.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryTallyResultResponse;
                fromPartial(object: Partial<_75.QueryTallyResultResponse>): _75.QueryTallyResultResponse;
                fromAmino(object: _75.QueryTallyResultResponseAmino): _75.QueryTallyResultResponse;
                toAmino(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _75.QueryTallyResultResponseAminoMsg): _75.QueryTallyResultResponse;
                toAminoMsg(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _75.QueryTallyResultResponseProtoMsg): _75.QueryTallyResultResponse;
                toProto(message: _75.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _75.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupsRequest;
                fromPartial(object: Partial<_75.QueryGroupsRequest>): _75.QueryGroupsRequest;
                fromAmino(object: _75.QueryGroupsRequestAmino): _75.QueryGroupsRequest;
                toAmino(message: _75.QueryGroupsRequest): _75.QueryGroupsRequestAmino;
                fromAminoMsg(object: _75.QueryGroupsRequestAminoMsg): _75.QueryGroupsRequest;
                toAminoMsg(message: _75.QueryGroupsRequest): _75.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryGroupsRequestProtoMsg): _75.QueryGroupsRequest;
                toProto(message: _75.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryGroupsRequest): _75.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _75.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.QueryGroupsResponse;
                fromPartial(object: Partial<_75.QueryGroupsResponse>): _75.QueryGroupsResponse;
                fromAmino(object: _75.QueryGroupsResponseAmino): _75.QueryGroupsResponse;
                toAmino(message: _75.QueryGroupsResponse): _75.QueryGroupsResponseAmino;
                fromAminoMsg(object: _75.QueryGroupsResponseAminoMsg): _75.QueryGroupsResponse;
                toAminoMsg(message: _75.QueryGroupsResponse): _75.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryGroupsResponseProtoMsg): _75.QueryGroupsResponse;
                toProto(message: _75.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryGroupsResponse): _75.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _74.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.GenesisState;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
                fromAmino(object: _74.GenesisStateAmino): _74.GenesisState;
                toAmino(message: _74.GenesisState): _74.GenesisStateAmino;
                fromAminoMsg(object: _74.GenesisStateAminoMsg): _74.GenesisState;
                toAminoMsg(message: _74.GenesisState): _74.GenesisStateAminoMsg;
                fromProtoMsg(message: _74.GenesisStateProtoMsg): _74.GenesisState;
                toProto(message: _74.GenesisState): Uint8Array;
                toProtoMsg(message: _74.GenesisState): _74.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _73.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventCreateGroup;
                fromPartial(object: Partial<_73.EventCreateGroup>): _73.EventCreateGroup;
                fromAmino(object: _73.EventCreateGroupAmino): _73.EventCreateGroup;
                toAmino(message: _73.EventCreateGroup): _73.EventCreateGroupAmino;
                fromAminoMsg(object: _73.EventCreateGroupAminoMsg): _73.EventCreateGroup;
                toAminoMsg(message: _73.EventCreateGroup): _73.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _73.EventCreateGroupProtoMsg): _73.EventCreateGroup;
                toProto(message: _73.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _73.EventCreateGroup): _73.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _73.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventUpdateGroup;
                fromPartial(object: Partial<_73.EventUpdateGroup>): _73.EventUpdateGroup;
                fromAmino(object: _73.EventUpdateGroupAmino): _73.EventUpdateGroup;
                toAmino(message: _73.EventUpdateGroup): _73.EventUpdateGroupAmino;
                fromAminoMsg(object: _73.EventUpdateGroupAminoMsg): _73.EventUpdateGroup;
                toAminoMsg(message: _73.EventUpdateGroup): _73.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _73.EventUpdateGroupProtoMsg): _73.EventUpdateGroup;
                toProto(message: _73.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _73.EventUpdateGroup): _73.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _73.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventCreateGroupPolicy;
                fromPartial(object: Partial<_73.EventCreateGroupPolicy>): _73.EventCreateGroupPolicy;
                fromAmino(object: _73.EventCreateGroupPolicyAmino): _73.EventCreateGroupPolicy;
                toAmino(message: _73.EventCreateGroupPolicy): _73.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _73.EventCreateGroupPolicyAminoMsg): _73.EventCreateGroupPolicy;
                toAminoMsg(message: _73.EventCreateGroupPolicy): _73.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _73.EventCreateGroupPolicyProtoMsg): _73.EventCreateGroupPolicy;
                toProto(message: _73.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _73.EventCreateGroupPolicy): _73.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _73.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_73.EventUpdateGroupPolicy>): _73.EventUpdateGroupPolicy;
                fromAmino(object: _73.EventUpdateGroupPolicyAmino): _73.EventUpdateGroupPolicy;
                toAmino(message: _73.EventUpdateGroupPolicy): _73.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _73.EventUpdateGroupPolicyAminoMsg): _73.EventUpdateGroupPolicy;
                toAminoMsg(message: _73.EventUpdateGroupPolicy): _73.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _73.EventUpdateGroupPolicyProtoMsg): _73.EventUpdateGroupPolicy;
                toProto(message: _73.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _73.EventUpdateGroupPolicy): _73.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _73.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventSubmitProposal;
                fromPartial(object: Partial<_73.EventSubmitProposal>): _73.EventSubmitProposal;
                fromAmino(object: _73.EventSubmitProposalAmino): _73.EventSubmitProposal;
                toAmino(message: _73.EventSubmitProposal): _73.EventSubmitProposalAmino;
                fromAminoMsg(object: _73.EventSubmitProposalAminoMsg): _73.EventSubmitProposal;
                toAminoMsg(message: _73.EventSubmitProposal): _73.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _73.EventSubmitProposalProtoMsg): _73.EventSubmitProposal;
                toProto(message: _73.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _73.EventSubmitProposal): _73.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _73.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventWithdrawProposal;
                fromPartial(object: Partial<_73.EventWithdrawProposal>): _73.EventWithdrawProposal;
                fromAmino(object: _73.EventWithdrawProposalAmino): _73.EventWithdrawProposal;
                toAmino(message: _73.EventWithdrawProposal): _73.EventWithdrawProposalAmino;
                fromAminoMsg(object: _73.EventWithdrawProposalAminoMsg): _73.EventWithdrawProposal;
                toAminoMsg(message: _73.EventWithdrawProposal): _73.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _73.EventWithdrawProposalProtoMsg): _73.EventWithdrawProposal;
                toProto(message: _73.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _73.EventWithdrawProposal): _73.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _73.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventVote;
                fromPartial(object: Partial<_73.EventVote>): _73.EventVote;
                fromAmino(object: _73.EventVoteAmino): _73.EventVote;
                toAmino(message: _73.EventVote): _73.EventVoteAmino;
                fromAminoMsg(object: _73.EventVoteAminoMsg): _73.EventVote;
                toAminoMsg(message: _73.EventVote): _73.EventVoteAminoMsg;
                fromProtoMsg(message: _73.EventVoteProtoMsg): _73.EventVote;
                toProto(message: _73.EventVote): Uint8Array;
                toProtoMsg(message: _73.EventVote): _73.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _73.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventExec;
                fromPartial(object: Partial<_73.EventExec>): _73.EventExec;
                fromAmino(object: _73.EventExecAmino): _73.EventExec;
                toAmino(message: _73.EventExec): _73.EventExecAmino;
                fromAminoMsg(object: _73.EventExecAminoMsg): _73.EventExec;
                toAminoMsg(message: _73.EventExec): _73.EventExecAminoMsg;
                fromProtoMsg(message: _73.EventExecProtoMsg): _73.EventExec;
                toProto(message: _73.EventExec): Uint8Array;
                toProtoMsg(message: _73.EventExec): _73.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _73.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventLeaveGroup;
                fromPartial(object: Partial<_73.EventLeaveGroup>): _73.EventLeaveGroup;
                fromAmino(object: _73.EventLeaveGroupAmino): _73.EventLeaveGroup;
                toAmino(message: _73.EventLeaveGroup): _73.EventLeaveGroupAmino;
                fromAminoMsg(object: _73.EventLeaveGroupAminoMsg): _73.EventLeaveGroup;
                toAminoMsg(message: _73.EventLeaveGroup): _73.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _73.EventLeaveGroupProtoMsg): _73.EventLeaveGroup;
                toProto(message: _73.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _73.EventLeaveGroup): _73.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _73.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.EventProposalPruned;
                fromPartial(object: Partial<_73.EventProposalPruned>): _73.EventProposalPruned;
                fromAmino(object: _73.EventProposalPrunedAmino): _73.EventProposalPruned;
                toAmino(message: _73.EventProposalPruned): _73.EventProposalPrunedAmino;
                fromAminoMsg(object: _73.EventProposalPrunedAminoMsg): _73.EventProposalPruned;
                toAminoMsg(message: _73.EventProposalPruned): _73.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _73.EventProposalPrunedProtoMsg): _73.EventProposalPruned;
                toProto(message: _73.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _73.EventProposalPruned): _73.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                inflation(request?: _80.QueryInflationRequest): Promise<_80.QueryInflationResponse>;
                annualProvisions(request?: _80.QueryAnnualProvisionsRequest): Promise<_80.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _80.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.QueryParamsRequest;
                fromPartial(_: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
                fromAmino(_: _80.QueryParamsRequestAmino): _80.QueryParamsRequest;
                toAmino(_: _80.QueryParamsRequest): _80.QueryParamsRequestAmino;
                fromAminoMsg(object: _80.QueryParamsRequestAminoMsg): _80.QueryParamsRequest;
                toAminoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryParamsRequestProtoMsg): _80.QueryParamsRequest;
                toProto(message: _80.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _80.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryParamsResponse;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
                fromAmino(object: _80.QueryParamsResponseAmino): _80.QueryParamsResponse;
                toAmino(message: _80.QueryParamsResponse): _80.QueryParamsResponseAmino;
                fromAminoMsg(object: _80.QueryParamsResponseAminoMsg): _80.QueryParamsResponse;
                toAminoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryParamsResponseProtoMsg): _80.QueryParamsResponse;
                toProto(message: _80.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _80.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.QueryInflationRequest;
                fromPartial(_: Partial<_80.QueryInflationRequest>): _80.QueryInflationRequest;
                fromAmino(_: _80.QueryInflationRequestAmino): _80.QueryInflationRequest;
                toAmino(_: _80.QueryInflationRequest): _80.QueryInflationRequestAmino;
                fromAminoMsg(object: _80.QueryInflationRequestAminoMsg): _80.QueryInflationRequest;
                toAminoMsg(message: _80.QueryInflationRequest): _80.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _80.QueryInflationRequestProtoMsg): _80.QueryInflationRequest;
                toProto(message: _80.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _80.QueryInflationRequest): _80.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _80.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryInflationResponse;
                fromPartial(object: Partial<_80.QueryInflationResponse>): _80.QueryInflationResponse;
                fromAmino(object: _80.QueryInflationResponseAmino): _80.QueryInflationResponse;
                toAmino(message: _80.QueryInflationResponse): _80.QueryInflationResponseAmino;
                fromAminoMsg(object: _80.QueryInflationResponseAminoMsg): _80.QueryInflationResponse;
                toAminoMsg(message: _80.QueryInflationResponse): _80.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _80.QueryInflationResponseProtoMsg): _80.QueryInflationResponse;
                toProto(message: _80.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _80.QueryInflationResponse): _80.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _80.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_80.QueryAnnualProvisionsRequest>): _80.QueryAnnualProvisionsRequest;
                fromAmino(_: _80.QueryAnnualProvisionsRequestAmino): _80.QueryAnnualProvisionsRequest;
                toAmino(_: _80.QueryAnnualProvisionsRequest): _80.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _80.QueryAnnualProvisionsRequestAminoMsg): _80.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _80.QueryAnnualProvisionsRequest): _80.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryAnnualProvisionsRequestProtoMsg): _80.QueryAnnualProvisionsRequest;
                toProto(message: _80.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryAnnualProvisionsRequest): _80.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _80.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_80.QueryAnnualProvisionsResponse>): _80.QueryAnnualProvisionsResponse;
                fromAmino(object: _80.QueryAnnualProvisionsResponseAmino): _80.QueryAnnualProvisionsResponse;
                toAmino(message: _80.QueryAnnualProvisionsResponse): _80.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _80.QueryAnnualProvisionsResponseAminoMsg): _80.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _80.QueryAnnualProvisionsResponse): _80.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryAnnualProvisionsResponseProtoMsg): _80.QueryAnnualProvisionsResponse;
                toProto(message: _80.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryAnnualProvisionsResponse): _80.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _79.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Minter;
                fromPartial(object: Partial<_79.Minter>): _79.Minter;
                fromAmino(object: _79.MinterAmino): _79.Minter;
                toAmino(message: _79.Minter): _79.MinterAmino;
                fromAminoMsg(object: _79.MinterAminoMsg): _79.Minter;
                toAminoMsg(message: _79.Minter): _79.MinterAminoMsg;
                fromProtoMsg(message: _79.MinterProtoMsg): _79.Minter;
                toProto(message: _79.Minter): Uint8Array;
                toProtoMsg(message: _79.Minter): _79.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _79.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Params;
                fromPartial(object: Partial<_79.Params>): _79.Params;
                fromAmino(object: _79.ParamsAmino): _79.Params;
                toAmino(message: _79.Params): _79.ParamsAmino;
                fromAminoMsg(object: _79.ParamsAminoMsg): _79.Params;
                toAminoMsg(message: _79.Params): _79.ParamsAminoMsg;
                fromProtoMsg(message: _79.ParamsProtoMsg): _79.Params;
                toProto(message: _79.Params): Uint8Array;
                toProtoMsg(message: _79.Params): _79.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _78.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GenesisState;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
                fromAmino(object: _78.GenesisStateAmino): _78.GenesisState;
                toAmino(message: _78.GenesisState): _78.GenesisStateAmino;
                fromAminoMsg(object: _78.GenesisStateAminoMsg): _78.GenesisState;
                toAminoMsg(message: _78.GenesisState): _78.GenesisStateAminoMsg;
                fromProtoMsg(message: _78.GenesisStateProtoMsg): _78.GenesisState;
                toProto(message: _78.GenesisState): Uint8Array;
                toProtoMsg(message: _78.GenesisState): _78.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                balance(request: _85.QueryBalanceRequest): Promise<_85.QueryBalanceResponse>;
                owner(request: _85.QueryOwnerRequest): Promise<_85.QueryOwnerResponse>;
                supply(request: _85.QuerySupplyRequest): Promise<_85.QuerySupplyResponse>;
                nFTs(request: _85.QueryNFTsRequest): Promise<_85.QueryNFTsResponse>;
                nFT(request: _85.QueryNFTRequest): Promise<_85.QueryNFTResponse>;
                class(request: _85.QueryClassRequest): Promise<_85.QueryClassResponse>;
                classes(request?: _85.QueryClassesRequest): Promise<_85.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _86.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _86.MsgSend): {
                        typeUrl: string;
                        value: _86.MsgSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _86.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _86.MsgSend): {
                        typeUrl: string;
                        value: _86.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _86.MsgSend) => _86.MsgSendAmino;
                    fromAmino: (object: _86.MsgSendAmino) => _86.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _86.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgSend;
                fromPartial(object: Partial<_86.MsgSend>): _86.MsgSend;
                fromAmino(object: _86.MsgSendAmino): _86.MsgSend;
                toAmino(message: _86.MsgSend): _86.MsgSendAmino;
                fromAminoMsg(object: _86.MsgSendAminoMsg): _86.MsgSend;
                toAminoMsg(message: _86.MsgSend): _86.MsgSendAminoMsg;
                fromProtoMsg(message: _86.MsgSendProtoMsg): _86.MsgSend;
                toProto(message: _86.MsgSend): Uint8Array;
                toProtoMsg(message: _86.MsgSend): _86.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _86.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgSendResponse;
                fromPartial(_: Partial<_86.MsgSendResponse>): _86.MsgSendResponse;
                fromAmino(_: _86.MsgSendResponseAmino): _86.MsgSendResponse;
                toAmino(_: _86.MsgSendResponse): _86.MsgSendResponseAmino;
                fromAminoMsg(object: _86.MsgSendResponseAminoMsg): _86.MsgSendResponse;
                toAminoMsg(message: _86.MsgSendResponse): _86.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _86.MsgSendResponseProtoMsg): _86.MsgSendResponse;
                toProto(message: _86.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _86.MsgSendResponse): _86.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _85.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryBalanceRequest;
                fromPartial(object: Partial<_85.QueryBalanceRequest>): _85.QueryBalanceRequest;
                fromAmino(object: _85.QueryBalanceRequestAmino): _85.QueryBalanceRequest;
                toAmino(message: _85.QueryBalanceRequest): _85.QueryBalanceRequestAmino;
                fromAminoMsg(object: _85.QueryBalanceRequestAminoMsg): _85.QueryBalanceRequest;
                toAminoMsg(message: _85.QueryBalanceRequest): _85.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _85.QueryBalanceRequestProtoMsg): _85.QueryBalanceRequest;
                toProto(message: _85.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _85.QueryBalanceRequest): _85.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _85.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryBalanceResponse;
                fromPartial(object: Partial<_85.QueryBalanceResponse>): _85.QueryBalanceResponse;
                fromAmino(object: _85.QueryBalanceResponseAmino): _85.QueryBalanceResponse;
                toAmino(message: _85.QueryBalanceResponse): _85.QueryBalanceResponseAmino;
                fromAminoMsg(object: _85.QueryBalanceResponseAminoMsg): _85.QueryBalanceResponse;
                toAminoMsg(message: _85.QueryBalanceResponse): _85.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _85.QueryBalanceResponseProtoMsg): _85.QueryBalanceResponse;
                toProto(message: _85.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _85.QueryBalanceResponse): _85.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _85.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryOwnerRequest;
                fromPartial(object: Partial<_85.QueryOwnerRequest>): _85.QueryOwnerRequest;
                fromAmino(object: _85.QueryOwnerRequestAmino): _85.QueryOwnerRequest;
                toAmino(message: _85.QueryOwnerRequest): _85.QueryOwnerRequestAmino;
                fromAminoMsg(object: _85.QueryOwnerRequestAminoMsg): _85.QueryOwnerRequest;
                toAminoMsg(message: _85.QueryOwnerRequest): _85.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _85.QueryOwnerRequestProtoMsg): _85.QueryOwnerRequest;
                toProto(message: _85.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _85.QueryOwnerRequest): _85.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _85.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryOwnerResponse;
                fromPartial(object: Partial<_85.QueryOwnerResponse>): _85.QueryOwnerResponse;
                fromAmino(object: _85.QueryOwnerResponseAmino): _85.QueryOwnerResponse;
                toAmino(message: _85.QueryOwnerResponse): _85.QueryOwnerResponseAmino;
                fromAminoMsg(object: _85.QueryOwnerResponseAminoMsg): _85.QueryOwnerResponse;
                toAminoMsg(message: _85.QueryOwnerResponse): _85.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _85.QueryOwnerResponseProtoMsg): _85.QueryOwnerResponse;
                toProto(message: _85.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _85.QueryOwnerResponse): _85.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _85.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QuerySupplyRequest;
                fromPartial(object: Partial<_85.QuerySupplyRequest>): _85.QuerySupplyRequest;
                fromAmino(object: _85.QuerySupplyRequestAmino): _85.QuerySupplyRequest;
                toAmino(message: _85.QuerySupplyRequest): _85.QuerySupplyRequestAmino;
                fromAminoMsg(object: _85.QuerySupplyRequestAminoMsg): _85.QuerySupplyRequest;
                toAminoMsg(message: _85.QuerySupplyRequest): _85.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _85.QuerySupplyRequestProtoMsg): _85.QuerySupplyRequest;
                toProto(message: _85.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _85.QuerySupplyRequest): _85.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _85.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QuerySupplyResponse;
                fromPartial(object: Partial<_85.QuerySupplyResponse>): _85.QuerySupplyResponse;
                fromAmino(object: _85.QuerySupplyResponseAmino): _85.QuerySupplyResponse;
                toAmino(message: _85.QuerySupplyResponse): _85.QuerySupplyResponseAmino;
                fromAminoMsg(object: _85.QuerySupplyResponseAminoMsg): _85.QuerySupplyResponse;
                toAminoMsg(message: _85.QuerySupplyResponse): _85.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _85.QuerySupplyResponseProtoMsg): _85.QuerySupplyResponse;
                toProto(message: _85.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _85.QuerySupplyResponse): _85.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _85.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryNFTsRequest;
                fromPartial(object: Partial<_85.QueryNFTsRequest>): _85.QueryNFTsRequest;
                fromAmino(object: _85.QueryNFTsRequestAmino): _85.QueryNFTsRequest;
                toAmino(message: _85.QueryNFTsRequest): _85.QueryNFTsRequestAmino;
                fromAminoMsg(object: _85.QueryNFTsRequestAminoMsg): _85.QueryNFTsRequest;
                toAminoMsg(message: _85.QueryNFTsRequest): _85.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryNFTsRequestProtoMsg): _85.QueryNFTsRequest;
                toProto(message: _85.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryNFTsRequest): _85.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _85.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryNFTsResponse;
                fromPartial(object: Partial<_85.QueryNFTsResponse>): _85.QueryNFTsResponse;
                fromAmino(object: _85.QueryNFTsResponseAmino): _85.QueryNFTsResponse;
                toAmino(message: _85.QueryNFTsResponse): _85.QueryNFTsResponseAmino;
                fromAminoMsg(object: _85.QueryNFTsResponseAminoMsg): _85.QueryNFTsResponse;
                toAminoMsg(message: _85.QueryNFTsResponse): _85.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryNFTsResponseProtoMsg): _85.QueryNFTsResponse;
                toProto(message: _85.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryNFTsResponse): _85.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _85.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryNFTRequest;
                fromPartial(object: Partial<_85.QueryNFTRequest>): _85.QueryNFTRequest;
                fromAmino(object: _85.QueryNFTRequestAmino): _85.QueryNFTRequest;
                toAmino(message: _85.QueryNFTRequest): _85.QueryNFTRequestAmino;
                fromAminoMsg(object: _85.QueryNFTRequestAminoMsg): _85.QueryNFTRequest;
                toAminoMsg(message: _85.QueryNFTRequest): _85.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _85.QueryNFTRequestProtoMsg): _85.QueryNFTRequest;
                toProto(message: _85.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _85.QueryNFTRequest): _85.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _85.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryNFTResponse;
                fromPartial(object: Partial<_85.QueryNFTResponse>): _85.QueryNFTResponse;
                fromAmino(object: _85.QueryNFTResponseAmino): _85.QueryNFTResponse;
                toAmino(message: _85.QueryNFTResponse): _85.QueryNFTResponseAmino;
                fromAminoMsg(object: _85.QueryNFTResponseAminoMsg): _85.QueryNFTResponse;
                toAminoMsg(message: _85.QueryNFTResponse): _85.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _85.QueryNFTResponseProtoMsg): _85.QueryNFTResponse;
                toProto(message: _85.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _85.QueryNFTResponse): _85.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _85.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryClassRequest;
                fromPartial(object: Partial<_85.QueryClassRequest>): _85.QueryClassRequest;
                fromAmino(object: _85.QueryClassRequestAmino): _85.QueryClassRequest;
                toAmino(message: _85.QueryClassRequest): _85.QueryClassRequestAmino;
                fromAminoMsg(object: _85.QueryClassRequestAminoMsg): _85.QueryClassRequest;
                toAminoMsg(message: _85.QueryClassRequest): _85.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _85.QueryClassRequestProtoMsg): _85.QueryClassRequest;
                toProto(message: _85.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _85.QueryClassRequest): _85.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _85.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryClassResponse;
                fromPartial(object: Partial<_85.QueryClassResponse>): _85.QueryClassResponse;
                fromAmino(object: _85.QueryClassResponseAmino): _85.QueryClassResponse;
                toAmino(message: _85.QueryClassResponse): _85.QueryClassResponseAmino;
                fromAminoMsg(object: _85.QueryClassResponseAminoMsg): _85.QueryClassResponse;
                toAminoMsg(message: _85.QueryClassResponse): _85.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _85.QueryClassResponseProtoMsg): _85.QueryClassResponse;
                toProto(message: _85.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _85.QueryClassResponse): _85.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _85.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryClassesRequest;
                fromPartial(object: Partial<_85.QueryClassesRequest>): _85.QueryClassesRequest;
                fromAmino(object: _85.QueryClassesRequestAmino): _85.QueryClassesRequest;
                toAmino(message: _85.QueryClassesRequest): _85.QueryClassesRequestAmino;
                fromAminoMsg(object: _85.QueryClassesRequestAminoMsg): _85.QueryClassesRequest;
                toAminoMsg(message: _85.QueryClassesRequest): _85.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _85.QueryClassesRequestProtoMsg): _85.QueryClassesRequest;
                toProto(message: _85.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _85.QueryClassesRequest): _85.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _85.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryClassesResponse;
                fromPartial(object: Partial<_85.QueryClassesResponse>): _85.QueryClassesResponse;
                fromAmino(object: _85.QueryClassesResponseAmino): _85.QueryClassesResponse;
                toAmino(message: _85.QueryClassesResponse): _85.QueryClassesResponseAmino;
                fromAminoMsg(object: _85.QueryClassesResponseAminoMsg): _85.QueryClassesResponse;
                toAminoMsg(message: _85.QueryClassesResponse): _85.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _85.QueryClassesResponseProtoMsg): _85.QueryClassesResponse;
                toProto(message: _85.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _85.QueryClassesResponse): _85.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _84.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Class;
                fromPartial(object: Partial<_84.Class>): _84.Class;
                fromAmino(object: _84.ClassAmino): _84.Class;
                toAmino(message: _84.Class): _84.ClassAmino;
                fromAminoMsg(object: _84.ClassAminoMsg): _84.Class;
                toAminoMsg(message: _84.Class): _84.ClassAminoMsg;
                fromProtoMsg(message: _84.ClassProtoMsg): _84.Class;
                toProto(message: _84.Class): Uint8Array;
                toProtoMsg(message: _84.Class): _84.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _84.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.NFT;
                fromPartial(object: Partial<_84.NFT>): _84.NFT;
                fromAmino(object: _84.NFTAmino): _84.NFT;
                toAmino(message: _84.NFT): _84.NFTAmino;
                fromAminoMsg(object: _84.NFTAminoMsg): _84.NFT;
                toAminoMsg(message: _84.NFT): _84.NFTAminoMsg;
                fromProtoMsg(message: _84.NFTProtoMsg): _84.NFT;
                toProto(message: _84.NFT): Uint8Array;
                toProtoMsg(message: _84.NFT): _84.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _83.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.GenesisState;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
                fromAmino(object: _83.GenesisStateAmino): _83.GenesisState;
                toAmino(message: _83.GenesisState): _83.GenesisStateAmino;
                fromAminoMsg(object: _83.GenesisStateAminoMsg): _83.GenesisState;
                toAminoMsg(message: _83.GenesisState): _83.GenesisStateAminoMsg;
                fromProtoMsg(message: _83.GenesisStateProtoMsg): _83.GenesisState;
                toProto(message: _83.GenesisState): Uint8Array;
                toProtoMsg(message: _83.GenesisState): _83.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _83.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.Entry;
                fromPartial(object: Partial<_83.Entry>): _83.Entry;
                fromAmino(object: _83.EntryAmino): _83.Entry;
                toAmino(message: _83.Entry): _83.EntryAmino;
                fromAminoMsg(object: _83.EntryAminoMsg): _83.Entry;
                toAminoMsg(message: _83.Entry): _83.EntryAminoMsg;
                fromProtoMsg(message: _83.EntryProtoMsg): _83.Entry;
                toProto(message: _83.Entry): Uint8Array;
                toProtoMsg(message: _83.Entry): _83.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _82.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventSend;
                fromPartial(object: Partial<_82.EventSend>): _82.EventSend;
                fromAmino(object: _82.EventSendAmino): _82.EventSend;
                toAmino(message: _82.EventSend): _82.EventSendAmino;
                fromAminoMsg(object: _82.EventSendAminoMsg): _82.EventSend;
                toAminoMsg(message: _82.EventSend): _82.EventSendAminoMsg;
                fromProtoMsg(message: _82.EventSendProtoMsg): _82.EventSend;
                toProto(message: _82.EventSend): Uint8Array;
                toProtoMsg(message: _82.EventSend): _82.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _82.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventMint;
                fromPartial(object: Partial<_82.EventMint>): _82.EventMint;
                fromAmino(object: _82.EventMintAmino): _82.EventMint;
                toAmino(message: _82.EventMint): _82.EventMintAmino;
                fromAminoMsg(object: _82.EventMintAminoMsg): _82.EventMint;
                toAminoMsg(message: _82.EventMint): _82.EventMintAminoMsg;
                fromProtoMsg(message: _82.EventMintProtoMsg): _82.EventMint;
                toProto(message: _82.EventMint): Uint8Array;
                toProtoMsg(message: _82.EventMint): _82.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _82.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.EventBurn;
                fromPartial(object: Partial<_82.EventBurn>): _82.EventBurn;
                fromAmino(object: _82.EventBurnAmino): _82.EventBurn;
                toAmino(message: _82.EventBurn): _82.EventBurnAmino;
                fromAminoMsg(object: _82.EventBurnAminoMsg): _82.EventBurn;
                toAminoMsg(message: _82.EventBurn): _82.EventBurnAminoMsg;
                fromProtoMsg(message: _82.EventBurnProtoMsg): _82.EventBurn;
                toProto(message: _82.EventBurn): Uint8Array;
                toProtoMsg(message: _82.EventBurn): _82.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _87.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _87.Module;
                    fromPartial(_: Partial<_87.Module>): _87.Module;
                    fromAmino(_: _87.ModuleAmino): _87.Module;
                    toAmino(_: _87.Module): _87.ModuleAmino;
                    fromAminoMsg(object: _87.ModuleAminoMsg): _87.Module;
                    toAminoMsg(message: _87.Module): _87.ModuleAminoMsg;
                    fromProtoMsg(message: _87.ModuleProtoMsg): _87.Module;
                    toProto(message: _87.Module): Uint8Array;
                    toProtoMsg(message: _87.Module): _87.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _88.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.TableDescriptor;
                fromPartial(object: Partial<_88.TableDescriptor>): _88.TableDescriptor;
                fromAmino(object: _88.TableDescriptorAmino): _88.TableDescriptor;
                toAmino(message: _88.TableDescriptor): _88.TableDescriptorAmino;
                fromAminoMsg(object: _88.TableDescriptorAminoMsg): _88.TableDescriptor;
                toAminoMsg(message: _88.TableDescriptor): _88.TableDescriptorAminoMsg;
                fromProtoMsg(message: _88.TableDescriptorProtoMsg): _88.TableDescriptor;
                toProto(message: _88.TableDescriptor): Uint8Array;
                toProtoMsg(message: _88.TableDescriptor): _88.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _88.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_88.PrimaryKeyDescriptor>): _88.PrimaryKeyDescriptor;
                fromAmino(object: _88.PrimaryKeyDescriptorAmino): _88.PrimaryKeyDescriptor;
                toAmino(message: _88.PrimaryKeyDescriptor): _88.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _88.PrimaryKeyDescriptorAminoMsg): _88.PrimaryKeyDescriptor;
                toAminoMsg(message: _88.PrimaryKeyDescriptor): _88.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _88.PrimaryKeyDescriptorProtoMsg): _88.PrimaryKeyDescriptor;
                toProto(message: _88.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _88.PrimaryKeyDescriptor): _88.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _88.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_88.SecondaryIndexDescriptor>): _88.SecondaryIndexDescriptor;
                fromAmino(object: _88.SecondaryIndexDescriptorAmino): _88.SecondaryIndexDescriptor;
                toAmino(message: _88.SecondaryIndexDescriptor): _88.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _88.SecondaryIndexDescriptorAminoMsg): _88.SecondaryIndexDescriptor;
                toAminoMsg(message: _88.SecondaryIndexDescriptor): _88.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _88.SecondaryIndexDescriptorProtoMsg): _88.SecondaryIndexDescriptor;
                toProto(message: _88.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _88.SecondaryIndexDescriptor): _88.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _88.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.SingletonDescriptor;
                fromPartial(object: Partial<_88.SingletonDescriptor>): _88.SingletonDescriptor;
                fromAmino(object: _88.SingletonDescriptorAmino): _88.SingletonDescriptor;
                toAmino(message: _88.SingletonDescriptor): _88.SingletonDescriptorAmino;
                fromAminoMsg(object: _88.SingletonDescriptorAminoMsg): _88.SingletonDescriptor;
                toAminoMsg(message: _88.SingletonDescriptor): _88.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _88.SingletonDescriptorProtoMsg): _88.SingletonDescriptor;
                toProto(message: _88.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _88.SingletonDescriptor): _88.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _89.StorageType;
            storageTypeToJSON(object: _89.StorageType): string;
            StorageType: typeof _89.StorageType;
            StorageTypeSDKType: typeof _89.StorageType;
            StorageTypeAmino: typeof _89.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _89.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_89.ModuleSchemaDescriptor>): _89.ModuleSchemaDescriptor;
                fromAmino(object: _89.ModuleSchemaDescriptorAmino): _89.ModuleSchemaDescriptor;
                toAmino(message: _89.ModuleSchemaDescriptor): _89.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _89.ModuleSchemaDescriptorAminoMsg): _89.ModuleSchemaDescriptor;
                toAminoMsg(message: _89.ModuleSchemaDescriptor): _89.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _89.ModuleSchemaDescriptorProtoMsg): _89.ModuleSchemaDescriptor;
                toProto(message: _89.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _89.ModuleSchemaDescriptor): _89.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _89.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_89.ModuleSchemaDescriptor_FileEntry>): _89.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _89.ModuleSchemaDescriptor_FileEntryAmino): _89.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _89.ModuleSchemaDescriptor_FileEntry): _89.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _89.ModuleSchemaDescriptor_FileEntryAminoMsg): _89.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _89.ModuleSchemaDescriptor_FileEntry): _89.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _89.ModuleSchemaDescriptor_FileEntryProtoMsg): _89.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _89.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _89.ModuleSchemaDescriptor_FileEntry): _89.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                subspaces(request?: _91.QuerySubspacesRequest): Promise<_91.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _91.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryParamsRequest;
                fromPartial(object: Partial<_91.QueryParamsRequest>): _91.QueryParamsRequest;
                fromAmino(object: _91.QueryParamsRequestAmino): _91.QueryParamsRequest;
                toAmino(message: _91.QueryParamsRequest): _91.QueryParamsRequestAmino;
                fromAminoMsg(object: _91.QueryParamsRequestAminoMsg): _91.QueryParamsRequest;
                toAminoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _91.QueryParamsRequestProtoMsg): _91.QueryParamsRequest;
                toProto(message: _91.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _91.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QueryParamsResponse;
                fromPartial(object: Partial<_91.QueryParamsResponse>): _91.QueryParamsResponse;
                fromAmino(object: _91.QueryParamsResponseAmino): _91.QueryParamsResponse;
                toAmino(message: _91.QueryParamsResponse): _91.QueryParamsResponseAmino;
                fromAminoMsg(object: _91.QueryParamsResponseAminoMsg): _91.QueryParamsResponse;
                toAminoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _91.QueryParamsResponseProtoMsg): _91.QueryParamsResponse;
                toProto(message: _91.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _91.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.QuerySubspacesRequest;
                fromPartial(_: Partial<_91.QuerySubspacesRequest>): _91.QuerySubspacesRequest;
                fromAmino(_: _91.QuerySubspacesRequestAmino): _91.QuerySubspacesRequest;
                toAmino(_: _91.QuerySubspacesRequest): _91.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _91.QuerySubspacesRequestAminoMsg): _91.QuerySubspacesRequest;
                toAminoMsg(message: _91.QuerySubspacesRequest): _91.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _91.QuerySubspacesRequestProtoMsg): _91.QuerySubspacesRequest;
                toProto(message: _91.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _91.QuerySubspacesRequest): _91.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _91.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.QuerySubspacesResponse;
                fromPartial(object: Partial<_91.QuerySubspacesResponse>): _91.QuerySubspacesResponse;
                fromAmino(object: _91.QuerySubspacesResponseAmino): _91.QuerySubspacesResponse;
                toAmino(message: _91.QuerySubspacesResponse): _91.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _91.QuerySubspacesResponseAminoMsg): _91.QuerySubspacesResponse;
                toAminoMsg(message: _91.QuerySubspacesResponse): _91.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _91.QuerySubspacesResponseProtoMsg): _91.QuerySubspacesResponse;
                toProto(message: _91.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _91.QuerySubspacesResponse): _91.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _91.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Subspace;
                fromPartial(object: Partial<_91.Subspace>): _91.Subspace;
                fromAmino(object: _91.SubspaceAmino): _91.Subspace;
                toAmino(message: _91.Subspace): _91.SubspaceAmino;
                fromAminoMsg(object: _91.SubspaceAminoMsg): _91.Subspace;
                toAminoMsg(message: _91.Subspace): _91.SubspaceAminoMsg;
                fromProtoMsg(message: _91.SubspaceProtoMsg): _91.Subspace;
                toProto(message: _91.Subspace): Uint8Array;
                toProtoMsg(message: _91.Subspace): _91.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _90.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ParameterChangeProposal;
                fromPartial(object: Partial<_90.ParameterChangeProposal>): _90.ParameterChangeProposal;
                fromAmino(object: _90.ParameterChangeProposalAmino): _90.ParameterChangeProposal;
                toAmino(message: _90.ParameterChangeProposal): _90.ParameterChangeProposalAmino;
                fromAminoMsg(object: _90.ParameterChangeProposalAminoMsg): _90.ParameterChangeProposal;
                toAminoMsg(message: _90.ParameterChangeProposal): _90.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _90.ParameterChangeProposalProtoMsg): _90.ParameterChangeProposal;
                toProto(message: _90.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _90.ParameterChangeProposal): _90.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _90.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.ParamChange;
                fromPartial(object: Partial<_90.ParamChange>): _90.ParamChange;
                fromAmino(object: _90.ParamChangeAmino): _90.ParamChange;
                toAmino(message: _90.ParamChange): _90.ParamChangeAmino;
                fromAminoMsg(object: _90.ParamChangeAminoMsg): _90.ParamChange;
                toAminoMsg(message: _90.ParamChange): _90.ParamChangeAminoMsg;
                fromProtoMsg(message: _90.ParamChangeProtoMsg): _90.ParamChange;
                toProto(message: _90.ParamChange): Uint8Array;
                toProtoMsg(message: _90.ParamChange): _90.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                signingInfo(request: _93.QuerySigningInfoRequest): Promise<_93.QuerySigningInfoResponse>;
                signingInfos(request?: _93.QuerySigningInfosRequest): Promise<_93.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _95.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _95.MsgUnjail): {
                        typeUrl: string;
                        value: _95.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _95.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _95.MsgUnjail): {
                        typeUrl: string;
                        value: _95.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _95.MsgUnjail) => _95.MsgUnjailAmino;
                    fromAmino: (object: _95.MsgUnjailAmino) => _95.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _95.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MsgUnjail;
                fromPartial(object: Partial<_95.MsgUnjail>): _95.MsgUnjail;
                fromAmino(object: _95.MsgUnjailAmino): _95.MsgUnjail;
                toAmino(message: _95.MsgUnjail): _95.MsgUnjailAmino;
                fromAminoMsg(object: _95.MsgUnjailAminoMsg): _95.MsgUnjail;
                toAminoMsg(message: _95.MsgUnjail): _95.MsgUnjailAminoMsg;
                fromProtoMsg(message: _95.MsgUnjailProtoMsg): _95.MsgUnjail;
                toProto(message: _95.MsgUnjail): Uint8Array;
                toProtoMsg(message: _95.MsgUnjail): _95.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _95.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _95.MsgUnjailResponse;
                fromPartial(_: Partial<_95.MsgUnjailResponse>): _95.MsgUnjailResponse;
                fromAmino(_: _95.MsgUnjailResponseAmino): _95.MsgUnjailResponse;
                toAmino(_: _95.MsgUnjailResponse): _95.MsgUnjailResponseAmino;
                fromAminoMsg(object: _95.MsgUnjailResponseAminoMsg): _95.MsgUnjailResponse;
                toAminoMsg(message: _95.MsgUnjailResponse): _95.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _95.MsgUnjailResponseProtoMsg): _95.MsgUnjailResponse;
                toProto(message: _95.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _95.MsgUnjailResponse): _95.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _94.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.ValidatorSigningInfo;
                fromPartial(object: Partial<_94.ValidatorSigningInfo>): _94.ValidatorSigningInfo;
                fromAmino(object: _94.ValidatorSigningInfoAmino): _94.ValidatorSigningInfo;
                toAmino(message: _94.ValidatorSigningInfo): _94.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _94.ValidatorSigningInfoAminoMsg): _94.ValidatorSigningInfo;
                toAminoMsg(message: _94.ValidatorSigningInfo): _94.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _94.ValidatorSigningInfoProtoMsg): _94.ValidatorSigningInfo;
                toProto(message: _94.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _94.ValidatorSigningInfo): _94.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _94.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Params;
                fromPartial(object: Partial<_94.Params>): _94.Params;
                fromAmino(object: _94.ParamsAmino): _94.Params;
                toAmino(message: _94.Params): _94.ParamsAmino;
                fromAminoMsg(object: _94.ParamsAminoMsg): _94.Params;
                toAminoMsg(message: _94.Params): _94.ParamsAminoMsg;
                fromProtoMsg(message: _94.ParamsProtoMsg): _94.Params;
                toProto(message: _94.Params): Uint8Array;
                toProtoMsg(message: _94.Params): _94.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _93.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.QueryParamsRequest;
                fromPartial(_: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
                fromAmino(_: _93.QueryParamsRequestAmino): _93.QueryParamsRequest;
                toAmino(_: _93.QueryParamsRequest): _93.QueryParamsRequestAmino;
                fromAminoMsg(object: _93.QueryParamsRequestAminoMsg): _93.QueryParamsRequest;
                toAminoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryParamsRequestProtoMsg): _93.QueryParamsRequest;
                toProto(message: _93.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryParamsRequest): _93.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _93.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QueryParamsResponse;
                fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
                fromAmino(object: _93.QueryParamsResponseAmino): _93.QueryParamsResponse;
                toAmino(message: _93.QueryParamsResponse): _93.QueryParamsResponseAmino;
                fromAminoMsg(object: _93.QueryParamsResponseAminoMsg): _93.QueryParamsResponse;
                toAminoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryParamsResponseProtoMsg): _93.QueryParamsResponse;
                toProto(message: _93.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryParamsResponse): _93.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _93.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QuerySigningInfoRequest;
                fromPartial(object: Partial<_93.QuerySigningInfoRequest>): _93.QuerySigningInfoRequest;
                fromAmino(object: _93.QuerySigningInfoRequestAmino): _93.QuerySigningInfoRequest;
                toAmino(message: _93.QuerySigningInfoRequest): _93.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _93.QuerySigningInfoRequestAminoMsg): _93.QuerySigningInfoRequest;
                toAminoMsg(message: _93.QuerySigningInfoRequest): _93.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _93.QuerySigningInfoRequestProtoMsg): _93.QuerySigningInfoRequest;
                toProto(message: _93.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _93.QuerySigningInfoRequest): _93.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _93.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QuerySigningInfoResponse;
                fromPartial(object: Partial<_93.QuerySigningInfoResponse>): _93.QuerySigningInfoResponse;
                fromAmino(object: _93.QuerySigningInfoResponseAmino): _93.QuerySigningInfoResponse;
                toAmino(message: _93.QuerySigningInfoResponse): _93.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _93.QuerySigningInfoResponseAminoMsg): _93.QuerySigningInfoResponse;
                toAminoMsg(message: _93.QuerySigningInfoResponse): _93.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _93.QuerySigningInfoResponseProtoMsg): _93.QuerySigningInfoResponse;
                toProto(message: _93.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _93.QuerySigningInfoResponse): _93.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _93.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QuerySigningInfosRequest;
                fromPartial(object: Partial<_93.QuerySigningInfosRequest>): _93.QuerySigningInfosRequest;
                fromAmino(object: _93.QuerySigningInfosRequestAmino): _93.QuerySigningInfosRequest;
                toAmino(message: _93.QuerySigningInfosRequest): _93.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _93.QuerySigningInfosRequestAminoMsg): _93.QuerySigningInfosRequest;
                toAminoMsg(message: _93.QuerySigningInfosRequest): _93.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _93.QuerySigningInfosRequestProtoMsg): _93.QuerySigningInfosRequest;
                toProto(message: _93.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _93.QuerySigningInfosRequest): _93.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _93.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.QuerySigningInfosResponse;
                fromPartial(object: Partial<_93.QuerySigningInfosResponse>): _93.QuerySigningInfosResponse;
                fromAmino(object: _93.QuerySigningInfosResponseAmino): _93.QuerySigningInfosResponse;
                toAmino(message: _93.QuerySigningInfosResponse): _93.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _93.QuerySigningInfosResponseAminoMsg): _93.QuerySigningInfosResponse;
                toAminoMsg(message: _93.QuerySigningInfosResponse): _93.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _93.QuerySigningInfosResponseProtoMsg): _93.QuerySigningInfosResponse;
                toProto(message: _93.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _93.QuerySigningInfosResponse): _93.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GenesisState;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                toAminoMsg(message: _92.GenesisState): _92.GenesisStateAminoMsg;
                fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                toProto(message: _92.GenesisState): Uint8Array;
                toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _92.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.SigningInfo;
                fromPartial(object: Partial<_92.SigningInfo>): _92.SigningInfo;
                fromAmino(object: _92.SigningInfoAmino): _92.SigningInfo;
                toAmino(message: _92.SigningInfo): _92.SigningInfoAmino;
                fromAminoMsg(object: _92.SigningInfoAminoMsg): _92.SigningInfo;
                toAminoMsg(message: _92.SigningInfo): _92.SigningInfoAminoMsg;
                fromProtoMsg(message: _92.SigningInfoProtoMsg): _92.SigningInfo;
                toProto(message: _92.SigningInfo): Uint8Array;
                toProtoMsg(message: _92.SigningInfo): _92.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _92.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.ValidatorMissedBlocks;
                fromPartial(object: Partial<_92.ValidatorMissedBlocks>): _92.ValidatorMissedBlocks;
                fromAmino(object: _92.ValidatorMissedBlocksAmino): _92.ValidatorMissedBlocks;
                toAmino(message: _92.ValidatorMissedBlocks): _92.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _92.ValidatorMissedBlocksAminoMsg): _92.ValidatorMissedBlocks;
                toAminoMsg(message: _92.ValidatorMissedBlocks): _92.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _92.ValidatorMissedBlocksProtoMsg): _92.ValidatorMissedBlocks;
                toProto(message: _92.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _92.ValidatorMissedBlocks): _92.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _92.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MissedBlock;
                fromPartial(object: Partial<_92.MissedBlock>): _92.MissedBlock;
                fromAmino(object: _92.MissedBlockAmino): _92.MissedBlock;
                toAmino(message: _92.MissedBlock): _92.MissedBlockAmino;
                fromAminoMsg(object: _92.MissedBlockAminoMsg): _92.MissedBlock;
                toAminoMsg(message: _92.MissedBlock): _92.MissedBlockAminoMsg;
                fromProtoMsg(message: _92.MissedBlockProtoMsg): _92.MissedBlock;
                toProto(message: _92.MissedBlock): Uint8Array;
                toProtoMsg(message: _92.MissedBlock): _92.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _202.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                validators(request: _98.QueryValidatorsRequest): Promise<_98.QueryValidatorsResponse>;
                validator(request: _98.QueryValidatorRequest): Promise<_98.QueryValidatorResponse>;
                validatorDelegations(request: _98.QueryValidatorDelegationsRequest): Promise<_98.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _98.QueryValidatorUnbondingDelegationsRequest): Promise<_98.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _98.QueryDelegationRequest): Promise<_98.QueryDelegationResponse>;
                unbondingDelegation(request: _98.QueryUnbondingDelegationRequest): Promise<_98.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _98.QueryDelegatorDelegationsRequest): Promise<_98.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _98.QueryDelegatorUnbondingDelegationsRequest): Promise<_98.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _98.QueryRedelegationsRequest): Promise<_98.QueryRedelegationsResponse>;
                delegatorValidators(request: _98.QueryDelegatorValidatorsRequest): Promise<_98.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _98.QueryDelegatorValidatorRequest): Promise<_98.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _98.QueryHistoricalInfoRequest): Promise<_98.QueryHistoricalInfoResponse>;
                pool(request?: _98.QueryPoolRequest): Promise<_98.QueryPoolResponse>;
                params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _183.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _100.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _100.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _100.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _100.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _100.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _100.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _100.MsgCreateValidator): {
                        typeUrl: string;
                        value: _100.MsgCreateValidator;
                    };
                    editValidator(value: _100.MsgEditValidator): {
                        typeUrl: string;
                        value: _100.MsgEditValidator;
                    };
                    delegate(value: _100.MsgDelegate): {
                        typeUrl: string;
                        value: _100.MsgDelegate;
                    };
                    beginRedelegate(value: _100.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _100.MsgBeginRedelegate;
                    };
                    undelegate(value: _100.MsgUndelegate): {
                        typeUrl: string;
                        value: _100.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _100.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _100.MsgCancelUnbondingDelegation;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _100.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _100.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _100.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _100.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _100.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _100.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _100.MsgCreateValidator): {
                        typeUrl: string;
                        value: _100.MsgCreateValidator;
                    };
                    editValidator(value: _100.MsgEditValidator): {
                        typeUrl: string;
                        value: _100.MsgEditValidator;
                    };
                    delegate(value: _100.MsgDelegate): {
                        typeUrl: string;
                        value: _100.MsgDelegate;
                    };
                    beginRedelegate(value: _100.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _100.MsgBeginRedelegate;
                    };
                    undelegate(value: _100.MsgUndelegate): {
                        typeUrl: string;
                        value: _100.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _100.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _100.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _100.MsgCreateValidator) => _100.MsgCreateValidatorAmino;
                    fromAmino: (object: _100.MsgCreateValidatorAmino) => _100.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _100.MsgEditValidator) => _100.MsgEditValidatorAmino;
                    fromAmino: (object: _100.MsgEditValidatorAmino) => _100.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _100.MsgDelegate) => _100.MsgDelegateAmino;
                    fromAmino: (object: _100.MsgDelegateAmino) => _100.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _100.MsgBeginRedelegate) => _100.MsgBeginRedelegateAmino;
                    fromAmino: (object: _100.MsgBeginRedelegateAmino) => _100.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _100.MsgUndelegate) => _100.MsgUndelegateAmino;
                    fromAmino: (object: _100.MsgUndelegateAmino) => _100.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _100.MsgCancelUnbondingDelegation) => _100.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _100.MsgCancelUnbondingDelegationAmino) => _100.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _100.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgCreateValidator;
                fromPartial(object: Partial<_100.MsgCreateValidator>): _100.MsgCreateValidator;
                fromAmino(object: _100.MsgCreateValidatorAmino): _100.MsgCreateValidator;
                toAmino(message: _100.MsgCreateValidator): _100.MsgCreateValidatorAmino;
                fromAminoMsg(object: _100.MsgCreateValidatorAminoMsg): _100.MsgCreateValidator;
                toAminoMsg(message: _100.MsgCreateValidator): _100.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _100.MsgCreateValidatorProtoMsg): _100.MsgCreateValidator;
                toProto(message: _100.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _100.MsgCreateValidator): _100.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _100.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_100.MsgCreateValidatorResponse>): _100.MsgCreateValidatorResponse;
                fromAmino(_: _100.MsgCreateValidatorResponseAmino): _100.MsgCreateValidatorResponse;
                toAmino(_: _100.MsgCreateValidatorResponse): _100.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _100.MsgCreateValidatorResponseAminoMsg): _100.MsgCreateValidatorResponse;
                toAminoMsg(message: _100.MsgCreateValidatorResponse): _100.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _100.MsgCreateValidatorResponseProtoMsg): _100.MsgCreateValidatorResponse;
                toProto(message: _100.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _100.MsgCreateValidatorResponse): _100.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _100.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgEditValidator;
                fromPartial(object: Partial<_100.MsgEditValidator>): _100.MsgEditValidator;
                fromAmino(object: _100.MsgEditValidatorAmino): _100.MsgEditValidator;
                toAmino(message: _100.MsgEditValidator): _100.MsgEditValidatorAmino;
                fromAminoMsg(object: _100.MsgEditValidatorAminoMsg): _100.MsgEditValidator;
                toAminoMsg(message: _100.MsgEditValidator): _100.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _100.MsgEditValidatorProtoMsg): _100.MsgEditValidator;
                toProto(message: _100.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _100.MsgEditValidator): _100.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _100.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgEditValidatorResponse;
                fromPartial(_: Partial<_100.MsgEditValidatorResponse>): _100.MsgEditValidatorResponse;
                fromAmino(_: _100.MsgEditValidatorResponseAmino): _100.MsgEditValidatorResponse;
                toAmino(_: _100.MsgEditValidatorResponse): _100.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _100.MsgEditValidatorResponseAminoMsg): _100.MsgEditValidatorResponse;
                toAminoMsg(message: _100.MsgEditValidatorResponse): _100.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _100.MsgEditValidatorResponseProtoMsg): _100.MsgEditValidatorResponse;
                toProto(message: _100.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _100.MsgEditValidatorResponse): _100.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _100.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgDelegate;
                fromPartial(object: Partial<_100.MsgDelegate>): _100.MsgDelegate;
                fromAmino(object: _100.MsgDelegateAmino): _100.MsgDelegate;
                toAmino(message: _100.MsgDelegate): _100.MsgDelegateAmino;
                fromAminoMsg(object: _100.MsgDelegateAminoMsg): _100.MsgDelegate;
                toAminoMsg(message: _100.MsgDelegate): _100.MsgDelegateAminoMsg;
                fromProtoMsg(message: _100.MsgDelegateProtoMsg): _100.MsgDelegate;
                toProto(message: _100.MsgDelegate): Uint8Array;
                toProtoMsg(message: _100.MsgDelegate): _100.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _100.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgDelegateResponse;
                fromPartial(_: Partial<_100.MsgDelegateResponse>): _100.MsgDelegateResponse;
                fromAmino(_: _100.MsgDelegateResponseAmino): _100.MsgDelegateResponse;
                toAmino(_: _100.MsgDelegateResponse): _100.MsgDelegateResponseAmino;
                fromAminoMsg(object: _100.MsgDelegateResponseAminoMsg): _100.MsgDelegateResponse;
                toAminoMsg(message: _100.MsgDelegateResponse): _100.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _100.MsgDelegateResponseProtoMsg): _100.MsgDelegateResponse;
                toProto(message: _100.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _100.MsgDelegateResponse): _100.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _100.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgBeginRedelegate;
                fromPartial(object: Partial<_100.MsgBeginRedelegate>): _100.MsgBeginRedelegate;
                fromAmino(object: _100.MsgBeginRedelegateAmino): _100.MsgBeginRedelegate;
                toAmino(message: _100.MsgBeginRedelegate): _100.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _100.MsgBeginRedelegateAminoMsg): _100.MsgBeginRedelegate;
                toAminoMsg(message: _100.MsgBeginRedelegate): _100.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _100.MsgBeginRedelegateProtoMsg): _100.MsgBeginRedelegate;
                toProto(message: _100.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _100.MsgBeginRedelegate): _100.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _100.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_100.MsgBeginRedelegateResponse>): _100.MsgBeginRedelegateResponse;
                fromAmino(object: _100.MsgBeginRedelegateResponseAmino): _100.MsgBeginRedelegateResponse;
                toAmino(message: _100.MsgBeginRedelegateResponse): _100.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _100.MsgBeginRedelegateResponseAminoMsg): _100.MsgBeginRedelegateResponse;
                toAminoMsg(message: _100.MsgBeginRedelegateResponse): _100.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _100.MsgBeginRedelegateResponseProtoMsg): _100.MsgBeginRedelegateResponse;
                toProto(message: _100.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _100.MsgBeginRedelegateResponse): _100.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _100.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgUndelegate;
                fromPartial(object: Partial<_100.MsgUndelegate>): _100.MsgUndelegate;
                fromAmino(object: _100.MsgUndelegateAmino): _100.MsgUndelegate;
                toAmino(message: _100.MsgUndelegate): _100.MsgUndelegateAmino;
                fromAminoMsg(object: _100.MsgUndelegateAminoMsg): _100.MsgUndelegate;
                toAminoMsg(message: _100.MsgUndelegate): _100.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _100.MsgUndelegateProtoMsg): _100.MsgUndelegate;
                toProto(message: _100.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _100.MsgUndelegate): _100.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _100.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgUndelegateResponse;
                fromPartial(object: Partial<_100.MsgUndelegateResponse>): _100.MsgUndelegateResponse;
                fromAmino(object: _100.MsgUndelegateResponseAmino): _100.MsgUndelegateResponse;
                toAmino(message: _100.MsgUndelegateResponse): _100.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _100.MsgUndelegateResponseAminoMsg): _100.MsgUndelegateResponse;
                toAminoMsg(message: _100.MsgUndelegateResponse): _100.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _100.MsgUndelegateResponseProtoMsg): _100.MsgUndelegateResponse;
                toProto(message: _100.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _100.MsgUndelegateResponse): _100.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _100.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_100.MsgCancelUnbondingDelegation>): _100.MsgCancelUnbondingDelegation;
                fromAmino(object: _100.MsgCancelUnbondingDelegationAmino): _100.MsgCancelUnbondingDelegation;
                toAmino(message: _100.MsgCancelUnbondingDelegation): _100.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _100.MsgCancelUnbondingDelegationAminoMsg): _100.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _100.MsgCancelUnbondingDelegation): _100.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _100.MsgCancelUnbondingDelegationProtoMsg): _100.MsgCancelUnbondingDelegation;
                toProto(message: _100.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _100.MsgCancelUnbondingDelegation): _100.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _100.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_100.MsgCancelUnbondingDelegationResponse>): _100.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _100.MsgCancelUnbondingDelegationResponseAmino): _100.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _100.MsgCancelUnbondingDelegationResponse): _100.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _100.MsgCancelUnbondingDelegationResponseAminoMsg): _100.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _100.MsgCancelUnbondingDelegationResponse): _100.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _100.MsgCancelUnbondingDelegationResponseProtoMsg): _100.MsgCancelUnbondingDelegationResponse;
                toProto(message: _100.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _100.MsgCancelUnbondingDelegationResponse): _100.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => any;
            bondStatusFromJSON(object: any): _99.BondStatus;
            bondStatusToJSON(object: _99.BondStatus): string;
            BondStatus: typeof _99.BondStatus;
            BondStatusSDKType: typeof _99.BondStatus;
            BondStatusAmino: typeof _99.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _99.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.HistoricalInfo;
                fromPartial(object: Partial<_99.HistoricalInfo>): _99.HistoricalInfo;
                fromAmino(object: _99.HistoricalInfoAmino): _99.HistoricalInfo;
                toAmino(message: _99.HistoricalInfo): _99.HistoricalInfoAmino;
                fromAminoMsg(object: _99.HistoricalInfoAminoMsg): _99.HistoricalInfo;
                toAminoMsg(message: _99.HistoricalInfo): _99.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _99.HistoricalInfoProtoMsg): _99.HistoricalInfo;
                toProto(message: _99.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _99.HistoricalInfo): _99.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _99.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.CommissionRates;
                fromPartial(object: Partial<_99.CommissionRates>): _99.CommissionRates;
                fromAmino(object: _99.CommissionRatesAmino): _99.CommissionRates;
                toAmino(message: _99.CommissionRates): _99.CommissionRatesAmino;
                fromAminoMsg(object: _99.CommissionRatesAminoMsg): _99.CommissionRates;
                toAminoMsg(message: _99.CommissionRates): _99.CommissionRatesAminoMsg;
                fromProtoMsg(message: _99.CommissionRatesProtoMsg): _99.CommissionRates;
                toProto(message: _99.CommissionRates): Uint8Array;
                toProtoMsg(message: _99.CommissionRates): _99.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _99.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Commission;
                fromPartial(object: Partial<_99.Commission>): _99.Commission;
                fromAmino(object: _99.CommissionAmino): _99.Commission;
                toAmino(message: _99.Commission): _99.CommissionAmino;
                fromAminoMsg(object: _99.CommissionAminoMsg): _99.Commission;
                toAminoMsg(message: _99.Commission): _99.CommissionAminoMsg;
                fromProtoMsg(message: _99.CommissionProtoMsg): _99.Commission;
                toProto(message: _99.Commission): Uint8Array;
                toProtoMsg(message: _99.Commission): _99.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _99.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Description;
                fromPartial(object: Partial<_99.Description>): _99.Description;
                fromAmino(object: _99.DescriptionAmino): _99.Description;
                toAmino(message: _99.Description): _99.DescriptionAmino;
                fromAminoMsg(object: _99.DescriptionAminoMsg): _99.Description;
                toAminoMsg(message: _99.Description): _99.DescriptionAminoMsg;
                fromProtoMsg(message: _99.DescriptionProtoMsg): _99.Description;
                toProto(message: _99.Description): Uint8Array;
                toProtoMsg(message: _99.Description): _99.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _99.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Validator;
                fromPartial(object: Partial<_99.Validator>): _99.Validator;
                fromAmino(object: _99.ValidatorAmino): _99.Validator;
                toAmino(message: _99.Validator): _99.ValidatorAmino;
                fromAminoMsg(object: _99.ValidatorAminoMsg): _99.Validator;
                toAminoMsg(message: _99.Validator): _99.ValidatorAminoMsg;
                fromProtoMsg(message: _99.ValidatorProtoMsg): _99.Validator;
                toProto(message: _99.Validator): Uint8Array;
                toProtoMsg(message: _99.Validator): _99.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _99.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ValAddresses;
                fromPartial(object: Partial<_99.ValAddresses>): _99.ValAddresses;
                fromAmino(object: _99.ValAddressesAmino): _99.ValAddresses;
                toAmino(message: _99.ValAddresses): _99.ValAddressesAmino;
                fromAminoMsg(object: _99.ValAddressesAminoMsg): _99.ValAddresses;
                toAminoMsg(message: _99.ValAddresses): _99.ValAddressesAminoMsg;
                fromProtoMsg(message: _99.ValAddressesProtoMsg): _99.ValAddresses;
                toProto(message: _99.ValAddresses): Uint8Array;
                toProtoMsg(message: _99.ValAddresses): _99.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _99.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.DVPair;
                fromPartial(object: Partial<_99.DVPair>): _99.DVPair;
                fromAmino(object: _99.DVPairAmino): _99.DVPair;
                toAmino(message: _99.DVPair): _99.DVPairAmino;
                fromAminoMsg(object: _99.DVPairAminoMsg): _99.DVPair;
                toAminoMsg(message: _99.DVPair): _99.DVPairAminoMsg;
                fromProtoMsg(message: _99.DVPairProtoMsg): _99.DVPair;
                toProto(message: _99.DVPair): Uint8Array;
                toProtoMsg(message: _99.DVPair): _99.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _99.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.DVPairs;
                fromPartial(object: Partial<_99.DVPairs>): _99.DVPairs;
                fromAmino(object: _99.DVPairsAmino): _99.DVPairs;
                toAmino(message: _99.DVPairs): _99.DVPairsAmino;
                fromAminoMsg(object: _99.DVPairsAminoMsg): _99.DVPairs;
                toAminoMsg(message: _99.DVPairs): _99.DVPairsAminoMsg;
                fromProtoMsg(message: _99.DVPairsProtoMsg): _99.DVPairs;
                toProto(message: _99.DVPairs): Uint8Array;
                toProtoMsg(message: _99.DVPairs): _99.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _99.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.DVVTriplet;
                fromPartial(object: Partial<_99.DVVTriplet>): _99.DVVTriplet;
                fromAmino(object: _99.DVVTripletAmino): _99.DVVTriplet;
                toAmino(message: _99.DVVTriplet): _99.DVVTripletAmino;
                fromAminoMsg(object: _99.DVVTripletAminoMsg): _99.DVVTriplet;
                toAminoMsg(message: _99.DVVTriplet): _99.DVVTripletAminoMsg;
                fromProtoMsg(message: _99.DVVTripletProtoMsg): _99.DVVTriplet;
                toProto(message: _99.DVVTriplet): Uint8Array;
                toProtoMsg(message: _99.DVVTriplet): _99.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _99.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.DVVTriplets;
                fromPartial(object: Partial<_99.DVVTriplets>): _99.DVVTriplets;
                fromAmino(object: _99.DVVTripletsAmino): _99.DVVTriplets;
                toAmino(message: _99.DVVTriplets): _99.DVVTripletsAmino;
                fromAminoMsg(object: _99.DVVTripletsAminoMsg): _99.DVVTriplets;
                toAminoMsg(message: _99.DVVTriplets): _99.DVVTripletsAminoMsg;
                fromProtoMsg(message: _99.DVVTripletsProtoMsg): _99.DVVTriplets;
                toProto(message: _99.DVVTriplets): Uint8Array;
                toProtoMsg(message: _99.DVVTriplets): _99.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _99.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Delegation;
                fromPartial(object: Partial<_99.Delegation>): _99.Delegation;
                fromAmino(object: _99.DelegationAmino): _99.Delegation;
                toAmino(message: _99.Delegation): _99.DelegationAmino;
                fromAminoMsg(object: _99.DelegationAminoMsg): _99.Delegation;
                toAminoMsg(message: _99.Delegation): _99.DelegationAminoMsg;
                fromProtoMsg(message: _99.DelegationProtoMsg): _99.Delegation;
                toProto(message: _99.Delegation): Uint8Array;
                toProtoMsg(message: _99.Delegation): _99.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _99.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.UnbondingDelegation;
                fromPartial(object: Partial<_99.UnbondingDelegation>): _99.UnbondingDelegation;
                fromAmino(object: _99.UnbondingDelegationAmino): _99.UnbondingDelegation;
                toAmino(message: _99.UnbondingDelegation): _99.UnbondingDelegationAmino;
                fromAminoMsg(object: _99.UnbondingDelegationAminoMsg): _99.UnbondingDelegation;
                toAminoMsg(message: _99.UnbondingDelegation): _99.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _99.UnbondingDelegationProtoMsg): _99.UnbondingDelegation;
                toProto(message: _99.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _99.UnbondingDelegation): _99.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _99.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.UnbondingDelegationEntry;
                fromPartial(object: Partial<_99.UnbondingDelegationEntry>): _99.UnbondingDelegationEntry;
                fromAmino(object: _99.UnbondingDelegationEntryAmino): _99.UnbondingDelegationEntry;
                toAmino(message: _99.UnbondingDelegationEntry): _99.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _99.UnbondingDelegationEntryAminoMsg): _99.UnbondingDelegationEntry;
                toAminoMsg(message: _99.UnbondingDelegationEntry): _99.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _99.UnbondingDelegationEntryProtoMsg): _99.UnbondingDelegationEntry;
                toProto(message: _99.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _99.UnbondingDelegationEntry): _99.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _99.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.RedelegationEntry;
                fromPartial(object: Partial<_99.RedelegationEntry>): _99.RedelegationEntry;
                fromAmino(object: _99.RedelegationEntryAmino): _99.RedelegationEntry;
                toAmino(message: _99.RedelegationEntry): _99.RedelegationEntryAmino;
                fromAminoMsg(object: _99.RedelegationEntryAminoMsg): _99.RedelegationEntry;
                toAminoMsg(message: _99.RedelegationEntry): _99.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _99.RedelegationEntryProtoMsg): _99.RedelegationEntry;
                toProto(message: _99.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _99.RedelegationEntry): _99.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _99.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Redelegation;
                fromPartial(object: Partial<_99.Redelegation>): _99.Redelegation;
                fromAmino(object: _99.RedelegationAmino): _99.Redelegation;
                toAmino(message: _99.Redelegation): _99.RedelegationAmino;
                fromAminoMsg(object: _99.RedelegationAminoMsg): _99.Redelegation;
                toAminoMsg(message: _99.Redelegation): _99.RedelegationAminoMsg;
                fromProtoMsg(message: _99.RedelegationProtoMsg): _99.Redelegation;
                toProto(message: _99.Redelegation): Uint8Array;
                toProtoMsg(message: _99.Redelegation): _99.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _99.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Params;
                fromPartial(object: Partial<_99.Params>): _99.Params;
                fromAmino(object: _99.ParamsAmino): _99.Params;
                toAmino(message: _99.Params): _99.ParamsAmino;
                fromAminoMsg(object: _99.ParamsAminoMsg): _99.Params;
                toAminoMsg(message: _99.Params): _99.ParamsAminoMsg;
                fromProtoMsg(message: _99.ParamsProtoMsg): _99.Params;
                toProto(message: _99.Params): Uint8Array;
                toProtoMsg(message: _99.Params): _99.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _99.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.DelegationResponse;
                fromPartial(object: Partial<_99.DelegationResponse>): _99.DelegationResponse;
                fromAmino(object: _99.DelegationResponseAmino): _99.DelegationResponse;
                toAmino(message: _99.DelegationResponse): _99.DelegationResponseAmino;
                fromAminoMsg(object: _99.DelegationResponseAminoMsg): _99.DelegationResponse;
                toAminoMsg(message: _99.DelegationResponse): _99.DelegationResponseAminoMsg;
                fromProtoMsg(message: _99.DelegationResponseProtoMsg): _99.DelegationResponse;
                toProto(message: _99.DelegationResponse): Uint8Array;
                toProtoMsg(message: _99.DelegationResponse): _99.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _99.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.RedelegationEntryResponse;
                fromPartial(object: Partial<_99.RedelegationEntryResponse>): _99.RedelegationEntryResponse;
                fromAmino(object: _99.RedelegationEntryResponseAmino): _99.RedelegationEntryResponse;
                toAmino(message: _99.RedelegationEntryResponse): _99.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _99.RedelegationEntryResponseAminoMsg): _99.RedelegationEntryResponse;
                toAminoMsg(message: _99.RedelegationEntryResponse): _99.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _99.RedelegationEntryResponseProtoMsg): _99.RedelegationEntryResponse;
                toProto(message: _99.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _99.RedelegationEntryResponse): _99.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _99.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.RedelegationResponse;
                fromPartial(object: Partial<_99.RedelegationResponse>): _99.RedelegationResponse;
                fromAmino(object: _99.RedelegationResponseAmino): _99.RedelegationResponse;
                toAmino(message: _99.RedelegationResponse): _99.RedelegationResponseAmino;
                fromAminoMsg(object: _99.RedelegationResponseAminoMsg): _99.RedelegationResponse;
                toAminoMsg(message: _99.RedelegationResponse): _99.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _99.RedelegationResponseProtoMsg): _99.RedelegationResponse;
                toProto(message: _99.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _99.RedelegationResponse): _99.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _99.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Pool;
                fromPartial(object: Partial<_99.Pool>): _99.Pool;
                fromAmino(object: _99.PoolAmino): _99.Pool;
                toAmino(message: _99.Pool): _99.PoolAmino;
                fromAminoMsg(object: _99.PoolAminoMsg): _99.Pool;
                toAminoMsg(message: _99.Pool): _99.PoolAminoMsg;
                fromProtoMsg(message: _99.PoolProtoMsg): _99.Pool;
                toProto(message: _99.Pool): Uint8Array;
                toProtoMsg(message: _99.Pool): _99.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _98.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorsRequest;
                fromPartial(object: Partial<_98.QueryValidatorsRequest>): _98.QueryValidatorsRequest;
                fromAmino(object: _98.QueryValidatorsRequestAmino): _98.QueryValidatorsRequest;
                toAmino(message: _98.QueryValidatorsRequest): _98.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _98.QueryValidatorsRequestAminoMsg): _98.QueryValidatorsRequest;
                toAminoMsg(message: _98.QueryValidatorsRequest): _98.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorsRequestProtoMsg): _98.QueryValidatorsRequest;
                toProto(message: _98.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorsRequest): _98.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _98.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorsResponse;
                fromPartial(object: Partial<_98.QueryValidatorsResponse>): _98.QueryValidatorsResponse;
                fromAmino(object: _98.QueryValidatorsResponseAmino): _98.QueryValidatorsResponse;
                toAmino(message: _98.QueryValidatorsResponse): _98.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _98.QueryValidatorsResponseAminoMsg): _98.QueryValidatorsResponse;
                toAminoMsg(message: _98.QueryValidatorsResponse): _98.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorsResponseProtoMsg): _98.QueryValidatorsResponse;
                toProto(message: _98.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorsResponse): _98.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _98.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorRequest;
                fromPartial(object: Partial<_98.QueryValidatorRequest>): _98.QueryValidatorRequest;
                fromAmino(object: _98.QueryValidatorRequestAmino): _98.QueryValidatorRequest;
                toAmino(message: _98.QueryValidatorRequest): _98.QueryValidatorRequestAmino;
                fromAminoMsg(object: _98.QueryValidatorRequestAminoMsg): _98.QueryValidatorRequest;
                toAminoMsg(message: _98.QueryValidatorRequest): _98.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorRequestProtoMsg): _98.QueryValidatorRequest;
                toProto(message: _98.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorRequest): _98.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _98.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorResponse;
                fromPartial(object: Partial<_98.QueryValidatorResponse>): _98.QueryValidatorResponse;
                fromAmino(object: _98.QueryValidatorResponseAmino): _98.QueryValidatorResponse;
                toAmino(message: _98.QueryValidatorResponse): _98.QueryValidatorResponseAmino;
                fromAminoMsg(object: _98.QueryValidatorResponseAminoMsg): _98.QueryValidatorResponse;
                toAminoMsg(message: _98.QueryValidatorResponse): _98.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorResponseProtoMsg): _98.QueryValidatorResponse;
                toProto(message: _98.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorResponse): _98.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _98.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_98.QueryValidatorDelegationsRequest>): _98.QueryValidatorDelegationsRequest;
                fromAmino(object: _98.QueryValidatorDelegationsRequestAmino): _98.QueryValidatorDelegationsRequest;
                toAmino(message: _98.QueryValidatorDelegationsRequest): _98.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _98.QueryValidatorDelegationsRequestAminoMsg): _98.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _98.QueryValidatorDelegationsRequest): _98.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorDelegationsRequestProtoMsg): _98.QueryValidatorDelegationsRequest;
                toProto(message: _98.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorDelegationsRequest): _98.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _98.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_98.QueryValidatorDelegationsResponse>): _98.QueryValidatorDelegationsResponse;
                fromAmino(object: _98.QueryValidatorDelegationsResponseAmino): _98.QueryValidatorDelegationsResponse;
                toAmino(message: _98.QueryValidatorDelegationsResponse): _98.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _98.QueryValidatorDelegationsResponseAminoMsg): _98.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _98.QueryValidatorDelegationsResponse): _98.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorDelegationsResponseProtoMsg): _98.QueryValidatorDelegationsResponse;
                toProto(message: _98.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorDelegationsResponse): _98.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _98.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_98.QueryValidatorUnbondingDelegationsRequest>): _98.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _98.QueryValidatorUnbondingDelegationsRequestAmino): _98.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _98.QueryValidatorUnbondingDelegationsRequest): _98.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _98.QueryValidatorUnbondingDelegationsRequestAminoMsg): _98.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _98.QueryValidatorUnbondingDelegationsRequest): _98.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorUnbondingDelegationsRequestProtoMsg): _98.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _98.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorUnbondingDelegationsRequest): _98.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _98.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_98.QueryValidatorUnbondingDelegationsResponse>): _98.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _98.QueryValidatorUnbondingDelegationsResponseAmino): _98.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _98.QueryValidatorUnbondingDelegationsResponse): _98.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _98.QueryValidatorUnbondingDelegationsResponseAminoMsg): _98.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _98.QueryValidatorUnbondingDelegationsResponse): _98.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryValidatorUnbondingDelegationsResponseProtoMsg): _98.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _98.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryValidatorUnbondingDelegationsResponse): _98.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegationRequest;
                fromPartial(object: Partial<_98.QueryDelegationRequest>): _98.QueryDelegationRequest;
                fromAmino(object: _98.QueryDelegationRequestAmino): _98.QueryDelegationRequest;
                toAmino(message: _98.QueryDelegationRequest): _98.QueryDelegationRequestAmino;
                fromAminoMsg(object: _98.QueryDelegationRequestAminoMsg): _98.QueryDelegationRequest;
                toAminoMsg(message: _98.QueryDelegationRequest): _98.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegationRequestProtoMsg): _98.QueryDelegationRequest;
                toProto(message: _98.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegationRequest): _98.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegationResponse;
                fromPartial(object: Partial<_98.QueryDelegationResponse>): _98.QueryDelegationResponse;
                fromAmino(object: _98.QueryDelegationResponseAmino): _98.QueryDelegationResponse;
                toAmino(message: _98.QueryDelegationResponse): _98.QueryDelegationResponseAmino;
                fromAminoMsg(object: _98.QueryDelegationResponseAminoMsg): _98.QueryDelegationResponse;
                toAminoMsg(message: _98.QueryDelegationResponse): _98.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegationResponseProtoMsg): _98.QueryDelegationResponse;
                toProto(message: _98.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegationResponse): _98.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _98.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_98.QueryUnbondingDelegationRequest>): _98.QueryUnbondingDelegationRequest;
                fromAmino(object: _98.QueryUnbondingDelegationRequestAmino): _98.QueryUnbondingDelegationRequest;
                toAmino(message: _98.QueryUnbondingDelegationRequest): _98.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _98.QueryUnbondingDelegationRequestAminoMsg): _98.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _98.QueryUnbondingDelegationRequest): _98.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _98.QueryUnbondingDelegationRequestProtoMsg): _98.QueryUnbondingDelegationRequest;
                toProto(message: _98.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _98.QueryUnbondingDelegationRequest): _98.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _98.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_98.QueryUnbondingDelegationResponse>): _98.QueryUnbondingDelegationResponse;
                fromAmino(object: _98.QueryUnbondingDelegationResponseAmino): _98.QueryUnbondingDelegationResponse;
                toAmino(message: _98.QueryUnbondingDelegationResponse): _98.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _98.QueryUnbondingDelegationResponseAminoMsg): _98.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _98.QueryUnbondingDelegationResponse): _98.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _98.QueryUnbondingDelegationResponseProtoMsg): _98.QueryUnbondingDelegationResponse;
                toProto(message: _98.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _98.QueryUnbondingDelegationResponse): _98.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_98.QueryDelegatorDelegationsRequest>): _98.QueryDelegatorDelegationsRequest;
                fromAmino(object: _98.QueryDelegatorDelegationsRequestAmino): _98.QueryDelegatorDelegationsRequest;
                toAmino(message: _98.QueryDelegatorDelegationsRequest): _98.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _98.QueryDelegatorDelegationsRequestAminoMsg): _98.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _98.QueryDelegatorDelegationsRequest): _98.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorDelegationsRequestProtoMsg): _98.QueryDelegatorDelegationsRequest;
                toProto(message: _98.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorDelegationsRequest): _98.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_98.QueryDelegatorDelegationsResponse>): _98.QueryDelegatorDelegationsResponse;
                fromAmino(object: _98.QueryDelegatorDelegationsResponseAmino): _98.QueryDelegatorDelegationsResponse;
                toAmino(message: _98.QueryDelegatorDelegationsResponse): _98.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _98.QueryDelegatorDelegationsResponseAminoMsg): _98.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _98.QueryDelegatorDelegationsResponse): _98.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorDelegationsResponseProtoMsg): _98.QueryDelegatorDelegationsResponse;
                toProto(message: _98.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorDelegationsResponse): _98.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_98.QueryDelegatorUnbondingDelegationsRequest>): _98.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _98.QueryDelegatorUnbondingDelegationsRequestAmino): _98.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _98.QueryDelegatorUnbondingDelegationsRequest): _98.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _98.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _98.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _98.QueryDelegatorUnbondingDelegationsRequest): _98.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _98.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _98.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorUnbondingDelegationsRequest): _98.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_98.QueryDelegatorUnbondingDelegationsResponse>): _98.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _98.QueryDelegatorUnbondingDelegationsResponseAmino): _98.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _98.QueryDelegatorUnbondingDelegationsResponse): _98.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _98.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _98.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _98.QueryDelegatorUnbondingDelegationsResponse): _98.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _98.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _98.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorUnbondingDelegationsResponse): _98.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _98.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryRedelegationsRequest;
                fromPartial(object: Partial<_98.QueryRedelegationsRequest>): _98.QueryRedelegationsRequest;
                fromAmino(object: _98.QueryRedelegationsRequestAmino): _98.QueryRedelegationsRequest;
                toAmino(message: _98.QueryRedelegationsRequest): _98.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _98.QueryRedelegationsRequestAminoMsg): _98.QueryRedelegationsRequest;
                toAminoMsg(message: _98.QueryRedelegationsRequest): _98.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryRedelegationsRequestProtoMsg): _98.QueryRedelegationsRequest;
                toProto(message: _98.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryRedelegationsRequest): _98.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _98.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryRedelegationsResponse;
                fromPartial(object: Partial<_98.QueryRedelegationsResponse>): _98.QueryRedelegationsResponse;
                fromAmino(object: _98.QueryRedelegationsResponseAmino): _98.QueryRedelegationsResponse;
                toAmino(message: _98.QueryRedelegationsResponse): _98.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _98.QueryRedelegationsResponseAminoMsg): _98.QueryRedelegationsResponse;
                toAminoMsg(message: _98.QueryRedelegationsResponse): _98.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryRedelegationsResponseProtoMsg): _98.QueryRedelegationsResponse;
                toProto(message: _98.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryRedelegationsResponse): _98.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_98.QueryDelegatorValidatorsRequest>): _98.QueryDelegatorValidatorsRequest;
                fromAmino(object: _98.QueryDelegatorValidatorsRequestAmino): _98.QueryDelegatorValidatorsRequest;
                toAmino(message: _98.QueryDelegatorValidatorsRequest): _98.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _98.QueryDelegatorValidatorsRequestAminoMsg): _98.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _98.QueryDelegatorValidatorsRequest): _98.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorValidatorsRequestProtoMsg): _98.QueryDelegatorValidatorsRequest;
                toProto(message: _98.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorValidatorsRequest): _98.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_98.QueryDelegatorValidatorsResponse>): _98.QueryDelegatorValidatorsResponse;
                fromAmino(object: _98.QueryDelegatorValidatorsResponseAmino): _98.QueryDelegatorValidatorsResponse;
                toAmino(message: _98.QueryDelegatorValidatorsResponse): _98.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _98.QueryDelegatorValidatorsResponseAminoMsg): _98.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _98.QueryDelegatorValidatorsResponse): _98.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorValidatorsResponseProtoMsg): _98.QueryDelegatorValidatorsResponse;
                toProto(message: _98.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorValidatorsResponse): _98.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_98.QueryDelegatorValidatorRequest>): _98.QueryDelegatorValidatorRequest;
                fromAmino(object: _98.QueryDelegatorValidatorRequestAmino): _98.QueryDelegatorValidatorRequest;
                toAmino(message: _98.QueryDelegatorValidatorRequest): _98.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _98.QueryDelegatorValidatorRequestAminoMsg): _98.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _98.QueryDelegatorValidatorRequest): _98.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorValidatorRequestProtoMsg): _98.QueryDelegatorValidatorRequest;
                toProto(message: _98.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorValidatorRequest): _98.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _98.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_98.QueryDelegatorValidatorResponse>): _98.QueryDelegatorValidatorResponse;
                fromAmino(object: _98.QueryDelegatorValidatorResponseAmino): _98.QueryDelegatorValidatorResponse;
                toAmino(message: _98.QueryDelegatorValidatorResponse): _98.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _98.QueryDelegatorValidatorResponseAminoMsg): _98.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _98.QueryDelegatorValidatorResponse): _98.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _98.QueryDelegatorValidatorResponseProtoMsg): _98.QueryDelegatorValidatorResponse;
                toProto(message: _98.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _98.QueryDelegatorValidatorResponse): _98.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _98.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_98.QueryHistoricalInfoRequest>): _98.QueryHistoricalInfoRequest;
                fromAmino(object: _98.QueryHistoricalInfoRequestAmino): _98.QueryHistoricalInfoRequest;
                toAmino(message: _98.QueryHistoricalInfoRequest): _98.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _98.QueryHistoricalInfoRequestAminoMsg): _98.QueryHistoricalInfoRequest;
                toAminoMsg(message: _98.QueryHistoricalInfoRequest): _98.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _98.QueryHistoricalInfoRequestProtoMsg): _98.QueryHistoricalInfoRequest;
                toProto(message: _98.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _98.QueryHistoricalInfoRequest): _98.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _98.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_98.QueryHistoricalInfoResponse>): _98.QueryHistoricalInfoResponse;
                fromAmino(object: _98.QueryHistoricalInfoResponseAmino): _98.QueryHistoricalInfoResponse;
                toAmino(message: _98.QueryHistoricalInfoResponse): _98.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _98.QueryHistoricalInfoResponseAminoMsg): _98.QueryHistoricalInfoResponse;
                toAminoMsg(message: _98.QueryHistoricalInfoResponse): _98.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _98.QueryHistoricalInfoResponseProtoMsg): _98.QueryHistoricalInfoResponse;
                toProto(message: _98.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _98.QueryHistoricalInfoResponse): _98.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _98.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryPoolRequest;
                fromPartial(_: Partial<_98.QueryPoolRequest>): _98.QueryPoolRequest;
                fromAmino(_: _98.QueryPoolRequestAmino): _98.QueryPoolRequest;
                toAmino(_: _98.QueryPoolRequest): _98.QueryPoolRequestAmino;
                fromAminoMsg(object: _98.QueryPoolRequestAminoMsg): _98.QueryPoolRequest;
                toAminoMsg(message: _98.QueryPoolRequest): _98.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _98.QueryPoolRequestProtoMsg): _98.QueryPoolRequest;
                toProto(message: _98.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _98.QueryPoolRequest): _98.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _98.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryPoolResponse;
                fromPartial(object: Partial<_98.QueryPoolResponse>): _98.QueryPoolResponse;
                fromAmino(object: _98.QueryPoolResponseAmino): _98.QueryPoolResponse;
                toAmino(message: _98.QueryPoolResponse): _98.QueryPoolResponseAmino;
                fromAminoMsg(object: _98.QueryPoolResponseAminoMsg): _98.QueryPoolResponse;
                toAminoMsg(message: _98.QueryPoolResponse): _98.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _98.QueryPoolResponseProtoMsg): _98.QueryPoolResponse;
                toProto(message: _98.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _98.QueryPoolResponse): _98.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _98.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryParamsRequest;
                fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
                fromAmino(_: _98.QueryParamsRequestAmino): _98.QueryParamsRequest;
                toAmino(_: _98.QueryParamsRequest): _98.QueryParamsRequestAmino;
                fromAminoMsg(object: _98.QueryParamsRequestAminoMsg): _98.QueryParamsRequest;
                toAminoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryParamsRequestProtoMsg): _98.QueryParamsRequest;
                toProto(message: _98.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _98.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryParamsResponse;
                fromPartial(object: Partial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
                fromAmino(object: _98.QueryParamsResponseAmino): _98.QueryParamsResponse;
                toAmino(message: _98.QueryParamsResponse): _98.QueryParamsResponseAmino;
                fromAminoMsg(object: _98.QueryParamsResponseAminoMsg): _98.QueryParamsResponse;
                toAminoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryParamsResponseProtoMsg): _98.QueryParamsResponse;
                toProto(message: _98.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _97.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.GenesisState;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                fromAmino(object: _97.GenesisStateAmino): _97.GenesisState;
                toAmino(message: _97.GenesisState): _97.GenesisStateAmino;
                fromAminoMsg(object: _97.GenesisStateAminoMsg): _97.GenesisState;
                toAminoMsg(message: _97.GenesisState): _97.GenesisStateAminoMsg;
                fromProtoMsg(message: _97.GenesisStateProtoMsg): _97.GenesisState;
                toProto(message: _97.GenesisState): Uint8Array;
                toProtoMsg(message: _97.GenesisState): _97.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _97.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.LastValidatorPower;
                fromPartial(object: Partial<_97.LastValidatorPower>): _97.LastValidatorPower;
                fromAmino(object: _97.LastValidatorPowerAmino): _97.LastValidatorPower;
                toAmino(message: _97.LastValidatorPower): _97.LastValidatorPowerAmino;
                fromAminoMsg(object: _97.LastValidatorPowerAminoMsg): _97.LastValidatorPower;
                toAminoMsg(message: _97.LastValidatorPower): _97.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _97.LastValidatorPowerProtoMsg): _97.LastValidatorPower;
                toProto(message: _97.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _97.LastValidatorPower): _97.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _96.AuthorizationType;
            authorizationTypeToJSON(object: _96.AuthorizationType): string;
            AuthorizationType: typeof _96.AuthorizationType;
            AuthorizationTypeSDKType: typeof _96.AuthorizationType;
            AuthorizationTypeAmino: typeof _96.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _96.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.StakeAuthorization;
                fromPartial(object: Partial<_96.StakeAuthorization>): _96.StakeAuthorization;
                fromAmino(object: _96.StakeAuthorizationAmino): _96.StakeAuthorization;
                toAmino(message: _96.StakeAuthorization): _96.StakeAuthorizationAmino;
                fromAminoMsg(object: _96.StakeAuthorizationAminoMsg): _96.StakeAuthorization;
                toAminoMsg(message: _96.StakeAuthorization): _96.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _96.StakeAuthorizationProtoMsg): _96.StakeAuthorization;
                toProto(message: _96.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _96.StakeAuthorization): _96.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _96.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.StakeAuthorization_Validators;
                fromPartial(object: Partial<_96.StakeAuthorization_Validators>): _96.StakeAuthorization_Validators;
                fromAmino(object: _96.StakeAuthorization_ValidatorsAmino): _96.StakeAuthorization_Validators;
                toAmino(message: _96.StakeAuthorization_Validators): _96.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _96.StakeAuthorization_ValidatorsAminoMsg): _96.StakeAuthorization_Validators;
                toAminoMsg(message: _96.StakeAuthorization_Validators): _96.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _96.StakeAuthorization_ValidatorsProtoMsg): _96.StakeAuthorization_Validators;
                toProto(message: _96.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _96.StakeAuthorization_Validators): _96.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _101.SignMode;
                signModeToJSON(object: _101.SignMode): string;
                SignMode: typeof _101.SignMode;
                SignModeSDKType: typeof _101.SignMode;
                SignModeAmino: typeof _101.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _101.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.SignatureDescriptors;
                    fromPartial(object: Partial<_101.SignatureDescriptors>): _101.SignatureDescriptors;
                    fromAmino(object: _101.SignatureDescriptorsAmino): _101.SignatureDescriptors;
                    toAmino(message: _101.SignatureDescriptors): _101.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _101.SignatureDescriptorsAminoMsg): _101.SignatureDescriptors;
                    toAminoMsg(message: _101.SignatureDescriptors): _101.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _101.SignatureDescriptorsProtoMsg): _101.SignatureDescriptors;
                    toProto(message: _101.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _101.SignatureDescriptors): _101.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _101.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.SignatureDescriptor;
                    fromPartial(object: Partial<_101.SignatureDescriptor>): _101.SignatureDescriptor;
                    fromAmino(object: _101.SignatureDescriptorAmino): _101.SignatureDescriptor;
                    toAmino(message: _101.SignatureDescriptor): _101.SignatureDescriptorAmino;
                    fromAminoMsg(object: _101.SignatureDescriptorAminoMsg): _101.SignatureDescriptor;
                    toAminoMsg(message: _101.SignatureDescriptor): _101.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _101.SignatureDescriptorProtoMsg): _101.SignatureDescriptor;
                    toProto(message: _101.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _101.SignatureDescriptor): _101.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _101.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_101.SignatureDescriptor_Data>): _101.SignatureDescriptor_Data;
                    fromAmino(object: _101.SignatureDescriptor_DataAmino): _101.SignatureDescriptor_Data;
                    toAmino(message: _101.SignatureDescriptor_Data): _101.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _101.SignatureDescriptor_DataAminoMsg): _101.SignatureDescriptor_Data;
                    toAminoMsg(message: _101.SignatureDescriptor_Data): _101.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _101.SignatureDescriptor_DataProtoMsg): _101.SignatureDescriptor_Data;
                    toProto(message: _101.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _101.SignatureDescriptor_Data): _101.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _101.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_101.SignatureDescriptor_Data_Single>): _101.SignatureDescriptor_Data_Single;
                    fromAmino(object: _101.SignatureDescriptor_Data_SingleAmino): _101.SignatureDescriptor_Data_Single;
                    toAmino(message: _101.SignatureDescriptor_Data_Single): _101.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _101.SignatureDescriptor_Data_SingleAminoMsg): _101.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _101.SignatureDescriptor_Data_Single): _101.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _101.SignatureDescriptor_Data_SingleProtoMsg): _101.SignatureDescriptor_Data_Single;
                    toProto(message: _101.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _101.SignatureDescriptor_Data_Single): _101.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _101.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_101.SignatureDescriptor_Data_Multi>): _101.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _101.SignatureDescriptor_Data_MultiAmino): _101.SignatureDescriptor_Data_Multi;
                    toAmino(message: _101.SignatureDescriptor_Data_Multi): _101.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _101.SignatureDescriptor_Data_MultiAminoMsg): _101.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _101.SignatureDescriptor_Data_Multi): _101.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _101.SignatureDescriptor_Data_MultiProtoMsg): _101.SignatureDescriptor_Data_Multi;
                    toProto(message: _101.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _101.SignatureDescriptor_Data_Multi): _101.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _203.ServiceClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                simulate(request: _102.SimulateRequest): Promise<_102.SimulateResponse>;
                getTx(request: _102.GetTxRequest): Promise<_102.GetTxResponse>;
                broadcastTx(request: _102.BroadcastTxRequest): Promise<_102.BroadcastTxResponse>;
                getTxsEvent(request: _102.GetTxsEventRequest): Promise<_102.GetTxsEventResponse>;
                getBlockWithTxs(request: _102.GetBlockWithTxsRequest): Promise<_102.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _103.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Tx;
                fromPartial(object: Partial<_103.Tx>): _103.Tx;
                fromAmino(object: _103.TxAmino): _103.Tx;
                toAmino(message: _103.Tx): _103.TxAmino;
                fromAminoMsg(object: _103.TxAminoMsg): _103.Tx;
                toAminoMsg(message: _103.Tx): _103.TxAminoMsg;
                fromProtoMsg(message: _103.TxProtoMsg): _103.Tx;
                toProto(message: _103.Tx): Uint8Array;
                toProtoMsg(message: _103.Tx): _103.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _103.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.TxRaw;
                fromPartial(object: Partial<_103.TxRaw>): _103.TxRaw;
                fromAmino(object: _103.TxRawAmino): _103.TxRaw;
                toAmino(message: _103.TxRaw): _103.TxRawAmino;
                fromAminoMsg(object: _103.TxRawAminoMsg): _103.TxRaw;
                toAminoMsg(message: _103.TxRaw): _103.TxRawAminoMsg;
                fromProtoMsg(message: _103.TxRawProtoMsg): _103.TxRaw;
                toProto(message: _103.TxRaw): Uint8Array;
                toProtoMsg(message: _103.TxRaw): _103.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _103.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SignDoc;
                fromPartial(object: Partial<_103.SignDoc>): _103.SignDoc;
                fromAmino(object: _103.SignDocAmino): _103.SignDoc;
                toAmino(message: _103.SignDoc): _103.SignDocAmino;
                fromAminoMsg(object: _103.SignDocAminoMsg): _103.SignDoc;
                toAminoMsg(message: _103.SignDoc): _103.SignDocAminoMsg;
                fromProtoMsg(message: _103.SignDocProtoMsg): _103.SignDoc;
                toProto(message: _103.SignDoc): Uint8Array;
                toProtoMsg(message: _103.SignDoc): _103.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _103.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SignDocDirectAux;
                fromPartial(object: Partial<_103.SignDocDirectAux>): _103.SignDocDirectAux;
                fromAmino(object: _103.SignDocDirectAuxAmino): _103.SignDocDirectAux;
                toAmino(message: _103.SignDocDirectAux): _103.SignDocDirectAuxAmino;
                fromAminoMsg(object: _103.SignDocDirectAuxAminoMsg): _103.SignDocDirectAux;
                toAminoMsg(message: _103.SignDocDirectAux): _103.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _103.SignDocDirectAuxProtoMsg): _103.SignDocDirectAux;
                toProto(message: _103.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _103.SignDocDirectAux): _103.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _103.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.TxBody;
                fromPartial(object: Partial<_103.TxBody>): _103.TxBody;
                fromAmino(object: _103.TxBodyAmino): _103.TxBody;
                toAmino(message: _103.TxBody): _103.TxBodyAmino;
                fromAminoMsg(object: _103.TxBodyAminoMsg): _103.TxBody;
                toAminoMsg(message: _103.TxBody): _103.TxBodyAminoMsg;
                fromProtoMsg(message: _103.TxBodyProtoMsg): _103.TxBody;
                toProto(message: _103.TxBody): Uint8Array;
                toProtoMsg(message: _103.TxBody): _103.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _103.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.AuthInfo;
                fromPartial(object: Partial<_103.AuthInfo>): _103.AuthInfo;
                fromAmino(object: _103.AuthInfoAmino): _103.AuthInfo;
                toAmino(message: _103.AuthInfo): _103.AuthInfoAmino;
                fromAminoMsg(object: _103.AuthInfoAminoMsg): _103.AuthInfo;
                toAminoMsg(message: _103.AuthInfo): _103.AuthInfoAminoMsg;
                fromProtoMsg(message: _103.AuthInfoProtoMsg): _103.AuthInfo;
                toProto(message: _103.AuthInfo): Uint8Array;
                toProtoMsg(message: _103.AuthInfo): _103.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _103.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.SignerInfo;
                fromPartial(object: Partial<_103.SignerInfo>): _103.SignerInfo;
                fromAmino(object: _103.SignerInfoAmino): _103.SignerInfo;
                toAmino(message: _103.SignerInfo): _103.SignerInfoAmino;
                fromAminoMsg(object: _103.SignerInfoAminoMsg): _103.SignerInfo;
                toAminoMsg(message: _103.SignerInfo): _103.SignerInfoAminoMsg;
                fromProtoMsg(message: _103.SignerInfoProtoMsg): _103.SignerInfo;
                toProto(message: _103.SignerInfo): Uint8Array;
                toProtoMsg(message: _103.SignerInfo): _103.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _103.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ModeInfo;
                fromPartial(object: Partial<_103.ModeInfo>): _103.ModeInfo;
                fromAmino(object: _103.ModeInfoAmino): _103.ModeInfo;
                toAmino(message: _103.ModeInfo): _103.ModeInfoAmino;
                fromAminoMsg(object: _103.ModeInfoAminoMsg): _103.ModeInfo;
                toAminoMsg(message: _103.ModeInfo): _103.ModeInfoAminoMsg;
                fromProtoMsg(message: _103.ModeInfoProtoMsg): _103.ModeInfo;
                toProto(message: _103.ModeInfo): Uint8Array;
                toProtoMsg(message: _103.ModeInfo): _103.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _103.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ModeInfo_Single;
                fromPartial(object: Partial<_103.ModeInfo_Single>): _103.ModeInfo_Single;
                fromAmino(object: _103.ModeInfo_SingleAmino): _103.ModeInfo_Single;
                toAmino(message: _103.ModeInfo_Single): _103.ModeInfo_SingleAmino;
                fromAminoMsg(object: _103.ModeInfo_SingleAminoMsg): _103.ModeInfo_Single;
                toAminoMsg(message: _103.ModeInfo_Single): _103.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _103.ModeInfo_SingleProtoMsg): _103.ModeInfo_Single;
                toProto(message: _103.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _103.ModeInfo_Single): _103.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _103.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ModeInfo_Multi;
                fromPartial(object: Partial<_103.ModeInfo_Multi>): _103.ModeInfo_Multi;
                fromAmino(object: _103.ModeInfo_MultiAmino): _103.ModeInfo_Multi;
                toAmino(message: _103.ModeInfo_Multi): _103.ModeInfo_MultiAmino;
                fromAminoMsg(object: _103.ModeInfo_MultiAminoMsg): _103.ModeInfo_Multi;
                toAminoMsg(message: _103.ModeInfo_Multi): _103.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _103.ModeInfo_MultiProtoMsg): _103.ModeInfo_Multi;
                toProto(message: _103.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _103.ModeInfo_Multi): _103.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _103.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Fee;
                fromPartial(object: Partial<_103.Fee>): _103.Fee;
                fromAmino(object: _103.FeeAmino): _103.Fee;
                toAmino(message: _103.Fee): _103.FeeAmino;
                fromAminoMsg(object: _103.FeeAminoMsg): _103.Fee;
                toAminoMsg(message: _103.Fee): _103.FeeAminoMsg;
                fromProtoMsg(message: _103.FeeProtoMsg): _103.Fee;
                toProto(message: _103.Fee): Uint8Array;
                toProtoMsg(message: _103.Fee): _103.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _103.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Tip;
                fromPartial(object: Partial<_103.Tip>): _103.Tip;
                fromAmino(object: _103.TipAmino): _103.Tip;
                toAmino(message: _103.Tip): _103.TipAmino;
                fromAminoMsg(object: _103.TipAminoMsg): _103.Tip;
                toAminoMsg(message: _103.Tip): _103.TipAminoMsg;
                fromProtoMsg(message: _103.TipProtoMsg): _103.Tip;
                toProto(message: _103.Tip): Uint8Array;
                toProtoMsg(message: _103.Tip): _103.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _103.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.AuxSignerData;
                fromPartial(object: Partial<_103.AuxSignerData>): _103.AuxSignerData;
                fromAmino(object: _103.AuxSignerDataAmino): _103.AuxSignerData;
                toAmino(message: _103.AuxSignerData): _103.AuxSignerDataAmino;
                fromAminoMsg(object: _103.AuxSignerDataAminoMsg): _103.AuxSignerData;
                toAminoMsg(message: _103.AuxSignerData): _103.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _103.AuxSignerDataProtoMsg): _103.AuxSignerData;
                toProto(message: _103.AuxSignerData): Uint8Array;
                toProtoMsg(message: _103.AuxSignerData): _103.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _102.OrderBy;
            orderByToJSON(object: _102.OrderBy): string;
            broadcastModeFromJSON(object: any): _102.BroadcastMode;
            broadcastModeToJSON(object: _102.BroadcastMode): string;
            OrderBy: typeof _102.OrderBy;
            OrderBySDKType: typeof _102.OrderBy;
            OrderByAmino: typeof _102.OrderBy;
            BroadcastMode: typeof _102.BroadcastMode;
            BroadcastModeSDKType: typeof _102.BroadcastMode;
            BroadcastModeAmino: typeof _102.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _102.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.GetTxsEventRequest;
                fromPartial(object: Partial<_102.GetTxsEventRequest>): _102.GetTxsEventRequest;
                fromAmino(object: _102.GetTxsEventRequestAmino): _102.GetTxsEventRequest;
                toAmino(message: _102.GetTxsEventRequest): _102.GetTxsEventRequestAmino;
                fromAminoMsg(object: _102.GetTxsEventRequestAminoMsg): _102.GetTxsEventRequest;
                toAminoMsg(message: _102.GetTxsEventRequest): _102.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _102.GetTxsEventRequestProtoMsg): _102.GetTxsEventRequest;
                toProto(message: _102.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _102.GetTxsEventRequest): _102.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _102.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.GetTxsEventResponse;
                fromPartial(object: Partial<_102.GetTxsEventResponse>): _102.GetTxsEventResponse;
                fromAmino(object: _102.GetTxsEventResponseAmino): _102.GetTxsEventResponse;
                toAmino(message: _102.GetTxsEventResponse): _102.GetTxsEventResponseAmino;
                fromAminoMsg(object: _102.GetTxsEventResponseAminoMsg): _102.GetTxsEventResponse;
                toAminoMsg(message: _102.GetTxsEventResponse): _102.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _102.GetTxsEventResponseProtoMsg): _102.GetTxsEventResponse;
                toProto(message: _102.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _102.GetTxsEventResponse): _102.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _102.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.BroadcastTxRequest;
                fromPartial(object: Partial<_102.BroadcastTxRequest>): _102.BroadcastTxRequest;
                fromAmino(object: _102.BroadcastTxRequestAmino): _102.BroadcastTxRequest;
                toAmino(message: _102.BroadcastTxRequest): _102.BroadcastTxRequestAmino;
                fromAminoMsg(object: _102.BroadcastTxRequestAminoMsg): _102.BroadcastTxRequest;
                toAminoMsg(message: _102.BroadcastTxRequest): _102.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _102.BroadcastTxRequestProtoMsg): _102.BroadcastTxRequest;
                toProto(message: _102.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _102.BroadcastTxRequest): _102.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _102.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.BroadcastTxResponse;
                fromPartial(object: Partial<_102.BroadcastTxResponse>): _102.BroadcastTxResponse;
                fromAmino(object: _102.BroadcastTxResponseAmino): _102.BroadcastTxResponse;
                toAmino(message: _102.BroadcastTxResponse): _102.BroadcastTxResponseAmino;
                fromAminoMsg(object: _102.BroadcastTxResponseAminoMsg): _102.BroadcastTxResponse;
                toAminoMsg(message: _102.BroadcastTxResponse): _102.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _102.BroadcastTxResponseProtoMsg): _102.BroadcastTxResponse;
                toProto(message: _102.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _102.BroadcastTxResponse): _102.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _102.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.SimulateRequest;
                fromPartial(object: Partial<_102.SimulateRequest>): _102.SimulateRequest;
                fromAmino(object: _102.SimulateRequestAmino): _102.SimulateRequest;
                toAmino(message: _102.SimulateRequest): _102.SimulateRequestAmino;
                fromAminoMsg(object: _102.SimulateRequestAminoMsg): _102.SimulateRequest;
                toAminoMsg(message: _102.SimulateRequest): _102.SimulateRequestAminoMsg;
                fromProtoMsg(message: _102.SimulateRequestProtoMsg): _102.SimulateRequest;
                toProto(message: _102.SimulateRequest): Uint8Array;
                toProtoMsg(message: _102.SimulateRequest): _102.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _102.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.SimulateResponse;
                fromPartial(object: Partial<_102.SimulateResponse>): _102.SimulateResponse;
                fromAmino(object: _102.SimulateResponseAmino): _102.SimulateResponse;
                toAmino(message: _102.SimulateResponse): _102.SimulateResponseAmino;
                fromAminoMsg(object: _102.SimulateResponseAminoMsg): _102.SimulateResponse;
                toAminoMsg(message: _102.SimulateResponse): _102.SimulateResponseAminoMsg;
                fromProtoMsg(message: _102.SimulateResponseProtoMsg): _102.SimulateResponse;
                toProto(message: _102.SimulateResponse): Uint8Array;
                toProtoMsg(message: _102.SimulateResponse): _102.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _102.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.GetTxRequest;
                fromPartial(object: Partial<_102.GetTxRequest>): _102.GetTxRequest;
                fromAmino(object: _102.GetTxRequestAmino): _102.GetTxRequest;
                toAmino(message: _102.GetTxRequest): _102.GetTxRequestAmino;
                fromAminoMsg(object: _102.GetTxRequestAminoMsg): _102.GetTxRequest;
                toAminoMsg(message: _102.GetTxRequest): _102.GetTxRequestAminoMsg;
                fromProtoMsg(message: _102.GetTxRequestProtoMsg): _102.GetTxRequest;
                toProto(message: _102.GetTxRequest): Uint8Array;
                toProtoMsg(message: _102.GetTxRequest): _102.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _102.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.GetTxResponse;
                fromPartial(object: Partial<_102.GetTxResponse>): _102.GetTxResponse;
                fromAmino(object: _102.GetTxResponseAmino): _102.GetTxResponse;
                toAmino(message: _102.GetTxResponse): _102.GetTxResponseAmino;
                fromAminoMsg(object: _102.GetTxResponseAminoMsg): _102.GetTxResponse;
                toAminoMsg(message: _102.GetTxResponse): _102.GetTxResponseAminoMsg;
                fromProtoMsg(message: _102.GetTxResponseProtoMsg): _102.GetTxResponse;
                toProto(message: _102.GetTxResponse): Uint8Array;
                toProtoMsg(message: _102.GetTxResponse): _102.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _102.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_102.GetBlockWithTxsRequest>): _102.GetBlockWithTxsRequest;
                fromAmino(object: _102.GetBlockWithTxsRequestAmino): _102.GetBlockWithTxsRequest;
                toAmino(message: _102.GetBlockWithTxsRequest): _102.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _102.GetBlockWithTxsRequestAminoMsg): _102.GetBlockWithTxsRequest;
                toAminoMsg(message: _102.GetBlockWithTxsRequest): _102.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _102.GetBlockWithTxsRequestProtoMsg): _102.GetBlockWithTxsRequest;
                toProto(message: _102.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _102.GetBlockWithTxsRequest): _102.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _102.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_102.GetBlockWithTxsResponse>): _102.GetBlockWithTxsResponse;
                fromAmino(object: _102.GetBlockWithTxsResponseAmino): _102.GetBlockWithTxsResponse;
                toAmino(message: _102.GetBlockWithTxsResponse): _102.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _102.GetBlockWithTxsResponseAminoMsg): _102.GetBlockWithTxsResponse;
                toAminoMsg(message: _102.GetBlockWithTxsResponse): _102.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _102.GetBlockWithTxsResponseProtoMsg): _102.GetBlockWithTxsResponse;
                toProto(message: _102.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _102.GetBlockWithTxsResponse): _102.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                currentPlan(request?: _104.QueryCurrentPlanRequest): Promise<_104.QueryCurrentPlanResponse>;
                appliedPlan(request: _104.QueryAppliedPlanRequest): Promise<_104.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _104.QueryUpgradedConsensusStateRequest): Promise<_104.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _104.QueryModuleVersionsRequest): Promise<_104.QueryModuleVersionsResponse>;
                authority(request?: _104.QueryAuthorityRequest): Promise<_104.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _105.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _105.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _105.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _105.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _105.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _105.MsgCancelUpgrade;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _105.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _105.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _105.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _105.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _105.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _105.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _105.MsgSoftwareUpgrade) => _105.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _105.MsgSoftwareUpgradeAmino) => _105.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _105.MsgCancelUpgrade) => _105.MsgCancelUpgradeAmino;
                    fromAmino: (object: _105.MsgCancelUpgradeAmino) => _105.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _106.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Plan;
                fromPartial(object: Partial<_106.Plan>): _106.Plan;
                fromAmino(object: _106.PlanAmino): _106.Plan;
                toAmino(message: _106.Plan): _106.PlanAmino;
                fromAminoMsg(object: _106.PlanAminoMsg): _106.Plan;
                toAminoMsg(message: _106.Plan): _106.PlanAminoMsg;
                fromProtoMsg(message: _106.PlanProtoMsg): _106.Plan;
                toProto(message: _106.Plan): Uint8Array;
                toProtoMsg(message: _106.Plan): _106.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _106.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_106.SoftwareUpgradeProposal>): _106.SoftwareUpgradeProposal;
                fromAmino(object: _106.SoftwareUpgradeProposalAmino): _106.SoftwareUpgradeProposal;
                toAmino(message: _106.SoftwareUpgradeProposal): _106.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _106.SoftwareUpgradeProposalAminoMsg): _106.SoftwareUpgradeProposal;
                toAminoMsg(message: _106.SoftwareUpgradeProposal): _106.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _106.SoftwareUpgradeProposalProtoMsg): _106.SoftwareUpgradeProposal;
                toProto(message: _106.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _106.SoftwareUpgradeProposal): _106.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _106.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_106.CancelSoftwareUpgradeProposal>): _106.CancelSoftwareUpgradeProposal;
                fromAmino(object: _106.CancelSoftwareUpgradeProposalAmino): _106.CancelSoftwareUpgradeProposal;
                toAmino(message: _106.CancelSoftwareUpgradeProposal): _106.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _106.CancelSoftwareUpgradeProposalAminoMsg): _106.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _106.CancelSoftwareUpgradeProposal): _106.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _106.CancelSoftwareUpgradeProposalProtoMsg): _106.CancelSoftwareUpgradeProposal;
                toProto(message: _106.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _106.CancelSoftwareUpgradeProposal): _106.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _106.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.ModuleVersion;
                fromPartial(object: Partial<_106.ModuleVersion>): _106.ModuleVersion;
                fromAmino(object: _106.ModuleVersionAmino): _106.ModuleVersion;
                toAmino(message: _106.ModuleVersion): _106.ModuleVersionAmino;
                fromAminoMsg(object: _106.ModuleVersionAminoMsg): _106.ModuleVersion;
                toAminoMsg(message: _106.ModuleVersion): _106.ModuleVersionAminoMsg;
                fromProtoMsg(message: _106.ModuleVersionProtoMsg): _106.ModuleVersion;
                toProto(message: _106.ModuleVersion): Uint8Array;
                toProtoMsg(message: _106.ModuleVersion): _106.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _105.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_105.MsgSoftwareUpgrade>): _105.MsgSoftwareUpgrade;
                fromAmino(object: _105.MsgSoftwareUpgradeAmino): _105.MsgSoftwareUpgrade;
                toAmino(message: _105.MsgSoftwareUpgrade): _105.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _105.MsgSoftwareUpgradeAminoMsg): _105.MsgSoftwareUpgrade;
                toAminoMsg(message: _105.MsgSoftwareUpgrade): _105.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _105.MsgSoftwareUpgradeProtoMsg): _105.MsgSoftwareUpgrade;
                toProto(message: _105.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _105.MsgSoftwareUpgrade): _105.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _105.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_105.MsgSoftwareUpgradeResponse>): _105.MsgSoftwareUpgradeResponse;
                fromAmino(_: _105.MsgSoftwareUpgradeResponseAmino): _105.MsgSoftwareUpgradeResponse;
                toAmino(_: _105.MsgSoftwareUpgradeResponse): _105.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _105.MsgSoftwareUpgradeResponseAminoMsg): _105.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _105.MsgSoftwareUpgradeResponse): _105.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _105.MsgSoftwareUpgradeResponseProtoMsg): _105.MsgSoftwareUpgradeResponse;
                toProto(message: _105.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _105.MsgSoftwareUpgradeResponse): _105.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _105.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.MsgCancelUpgrade;
                fromPartial(object: Partial<_105.MsgCancelUpgrade>): _105.MsgCancelUpgrade;
                fromAmino(object: _105.MsgCancelUpgradeAmino): _105.MsgCancelUpgrade;
                toAmino(message: _105.MsgCancelUpgrade): _105.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _105.MsgCancelUpgradeAminoMsg): _105.MsgCancelUpgrade;
                toAminoMsg(message: _105.MsgCancelUpgrade): _105.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _105.MsgCancelUpgradeProtoMsg): _105.MsgCancelUpgrade;
                toProto(message: _105.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _105.MsgCancelUpgrade): _105.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _105.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _105.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_105.MsgCancelUpgradeResponse>): _105.MsgCancelUpgradeResponse;
                fromAmino(_: _105.MsgCancelUpgradeResponseAmino): _105.MsgCancelUpgradeResponse;
                toAmino(_: _105.MsgCancelUpgradeResponse): _105.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _105.MsgCancelUpgradeResponseAminoMsg): _105.MsgCancelUpgradeResponse;
                toAminoMsg(message: _105.MsgCancelUpgradeResponse): _105.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _105.MsgCancelUpgradeResponseProtoMsg): _105.MsgCancelUpgradeResponse;
                toProto(message: _105.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _105.MsgCancelUpgradeResponse): _105.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _104.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_104.QueryCurrentPlanRequest>): _104.QueryCurrentPlanRequest;
                fromAmino(_: _104.QueryCurrentPlanRequestAmino): _104.QueryCurrentPlanRequest;
                toAmino(_: _104.QueryCurrentPlanRequest): _104.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _104.QueryCurrentPlanRequestAminoMsg): _104.QueryCurrentPlanRequest;
                toAminoMsg(message: _104.QueryCurrentPlanRequest): _104.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _104.QueryCurrentPlanRequestProtoMsg): _104.QueryCurrentPlanRequest;
                toProto(message: _104.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _104.QueryCurrentPlanRequest): _104.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _104.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_104.QueryCurrentPlanResponse>): _104.QueryCurrentPlanResponse;
                fromAmino(object: _104.QueryCurrentPlanResponseAmino): _104.QueryCurrentPlanResponse;
                toAmino(message: _104.QueryCurrentPlanResponse): _104.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _104.QueryCurrentPlanResponseAminoMsg): _104.QueryCurrentPlanResponse;
                toAminoMsg(message: _104.QueryCurrentPlanResponse): _104.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _104.QueryCurrentPlanResponseProtoMsg): _104.QueryCurrentPlanResponse;
                toProto(message: _104.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _104.QueryCurrentPlanResponse): _104.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _104.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_104.QueryAppliedPlanRequest>): _104.QueryAppliedPlanRequest;
                fromAmino(object: _104.QueryAppliedPlanRequestAmino): _104.QueryAppliedPlanRequest;
                toAmino(message: _104.QueryAppliedPlanRequest): _104.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _104.QueryAppliedPlanRequestAminoMsg): _104.QueryAppliedPlanRequest;
                toAminoMsg(message: _104.QueryAppliedPlanRequest): _104.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _104.QueryAppliedPlanRequestProtoMsg): _104.QueryAppliedPlanRequest;
                toProto(message: _104.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _104.QueryAppliedPlanRequest): _104.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _104.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_104.QueryAppliedPlanResponse>): _104.QueryAppliedPlanResponse;
                fromAmino(object: _104.QueryAppliedPlanResponseAmino): _104.QueryAppliedPlanResponse;
                toAmino(message: _104.QueryAppliedPlanResponse): _104.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _104.QueryAppliedPlanResponseAminoMsg): _104.QueryAppliedPlanResponse;
                toAminoMsg(message: _104.QueryAppliedPlanResponse): _104.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _104.QueryAppliedPlanResponseProtoMsg): _104.QueryAppliedPlanResponse;
                toProto(message: _104.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _104.QueryAppliedPlanResponse): _104.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _104.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_104.QueryUpgradedConsensusStateRequest>): _104.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _104.QueryUpgradedConsensusStateRequestAmino): _104.QueryUpgradedConsensusStateRequest;
                toAmino(message: _104.QueryUpgradedConsensusStateRequest): _104.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _104.QueryUpgradedConsensusStateRequestAminoMsg): _104.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _104.QueryUpgradedConsensusStateRequest): _104.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _104.QueryUpgradedConsensusStateRequestProtoMsg): _104.QueryUpgradedConsensusStateRequest;
                toProto(message: _104.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _104.QueryUpgradedConsensusStateRequest): _104.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _104.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_104.QueryUpgradedConsensusStateResponse>): _104.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _104.QueryUpgradedConsensusStateResponseAmino): _104.QueryUpgradedConsensusStateResponse;
                toAmino(message: _104.QueryUpgradedConsensusStateResponse): _104.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _104.QueryUpgradedConsensusStateResponseAminoMsg): _104.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _104.QueryUpgradedConsensusStateResponse): _104.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _104.QueryUpgradedConsensusStateResponseProtoMsg): _104.QueryUpgradedConsensusStateResponse;
                toProto(message: _104.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _104.QueryUpgradedConsensusStateResponse): _104.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _104.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_104.QueryModuleVersionsRequest>): _104.QueryModuleVersionsRequest;
                fromAmino(object: _104.QueryModuleVersionsRequestAmino): _104.QueryModuleVersionsRequest;
                toAmino(message: _104.QueryModuleVersionsRequest): _104.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _104.QueryModuleVersionsRequestAminoMsg): _104.QueryModuleVersionsRequest;
                toAminoMsg(message: _104.QueryModuleVersionsRequest): _104.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryModuleVersionsRequestProtoMsg): _104.QueryModuleVersionsRequest;
                toProto(message: _104.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryModuleVersionsRequest): _104.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _104.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_104.QueryModuleVersionsResponse>): _104.QueryModuleVersionsResponse;
                fromAmino(object: _104.QueryModuleVersionsResponseAmino): _104.QueryModuleVersionsResponse;
                toAmino(message: _104.QueryModuleVersionsResponse): _104.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _104.QueryModuleVersionsResponseAminoMsg): _104.QueryModuleVersionsResponse;
                toAminoMsg(message: _104.QueryModuleVersionsResponse): _104.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryModuleVersionsResponseProtoMsg): _104.QueryModuleVersionsResponse;
                toProto(message: _104.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryModuleVersionsResponse): _104.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _104.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _104.QueryAuthorityRequest;
                fromPartial(_: Partial<_104.QueryAuthorityRequest>): _104.QueryAuthorityRequest;
                fromAmino(_: _104.QueryAuthorityRequestAmino): _104.QueryAuthorityRequest;
                toAmino(_: _104.QueryAuthorityRequest): _104.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _104.QueryAuthorityRequestAminoMsg): _104.QueryAuthorityRequest;
                toAminoMsg(message: _104.QueryAuthorityRequest): _104.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _104.QueryAuthorityRequestProtoMsg): _104.QueryAuthorityRequest;
                toProto(message: _104.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _104.QueryAuthorityRequest): _104.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _104.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryAuthorityResponse;
                fromPartial(object: Partial<_104.QueryAuthorityResponse>): _104.QueryAuthorityResponse;
                fromAmino(object: _104.QueryAuthorityResponseAmino): _104.QueryAuthorityResponse;
                toAmino(message: _104.QueryAuthorityResponse): _104.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _104.QueryAuthorityResponseAminoMsg): _104.QueryAuthorityResponse;
                toAminoMsg(message: _104.QueryAuthorityResponse): _104.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _104.QueryAuthorityResponseProtoMsg): _104.QueryAuthorityResponse;
                toProto(message: _104.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _104.QueryAuthorityResponse): _104.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _107.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _107.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _107.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _107.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _107.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _107.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _107.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _107.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _107.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _107.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _107.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _107.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _107.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _107.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _107.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _107.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _107.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _107.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _107.MsgCreateVestingAccount) => _107.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _107.MsgCreateVestingAccountAmino) => _107.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _107.MsgCreatePermanentLockedAccount) => _107.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _107.MsgCreatePermanentLockedAccountAmino) => _107.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _107.MsgCreatePeriodicVestingAccount) => _107.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _107.MsgCreatePeriodicVestingAccountAmino) => _107.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _108.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.BaseVestingAccount;
                fromPartial(object: Partial<_108.BaseVestingAccount>): _108.BaseVestingAccount;
                fromAmino(object: _108.BaseVestingAccountAmino): _108.BaseVestingAccount;
                toAmino(message: _108.BaseVestingAccount): _108.BaseVestingAccountAmino;
                fromAminoMsg(object: _108.BaseVestingAccountAminoMsg): _108.BaseVestingAccount;
                toAminoMsg(message: _108.BaseVestingAccount): _108.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _108.BaseVestingAccountProtoMsg): _108.BaseVestingAccount;
                toProto(message: _108.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _108.BaseVestingAccount): _108.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _108.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.ContinuousVestingAccount;
                fromPartial(object: Partial<_108.ContinuousVestingAccount>): _108.ContinuousVestingAccount;
                fromAmino(object: _108.ContinuousVestingAccountAmino): _108.ContinuousVestingAccount;
                toAmino(message: _108.ContinuousVestingAccount): _108.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _108.ContinuousVestingAccountAminoMsg): _108.ContinuousVestingAccount;
                toAminoMsg(message: _108.ContinuousVestingAccount): _108.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _108.ContinuousVestingAccountProtoMsg): _108.ContinuousVestingAccount;
                toProto(message: _108.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _108.ContinuousVestingAccount): _108.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _108.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.DelayedVestingAccount;
                fromPartial(object: Partial<_108.DelayedVestingAccount>): _108.DelayedVestingAccount;
                fromAmino(object: _108.DelayedVestingAccountAmino): _108.DelayedVestingAccount;
                toAmino(message: _108.DelayedVestingAccount): _108.DelayedVestingAccountAmino;
                fromAminoMsg(object: _108.DelayedVestingAccountAminoMsg): _108.DelayedVestingAccount;
                toAminoMsg(message: _108.DelayedVestingAccount): _108.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _108.DelayedVestingAccountProtoMsg): _108.DelayedVestingAccount;
                toProto(message: _108.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _108.DelayedVestingAccount): _108.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _108.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Period;
                fromPartial(object: Partial<_108.Period>): _108.Period;
                fromAmino(object: _108.PeriodAmino): _108.Period;
                toAmino(message: _108.Period): _108.PeriodAmino;
                fromAminoMsg(object: _108.PeriodAminoMsg): _108.Period;
                toAminoMsg(message: _108.Period): _108.PeriodAminoMsg;
                fromProtoMsg(message: _108.PeriodProtoMsg): _108.Period;
                toProto(message: _108.Period): Uint8Array;
                toProtoMsg(message: _108.Period): _108.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _108.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.PeriodicVestingAccount;
                fromPartial(object: Partial<_108.PeriodicVestingAccount>): _108.PeriodicVestingAccount;
                fromAmino(object: _108.PeriodicVestingAccountAmino): _108.PeriodicVestingAccount;
                toAmino(message: _108.PeriodicVestingAccount): _108.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _108.PeriodicVestingAccountAminoMsg): _108.PeriodicVestingAccount;
                toAminoMsg(message: _108.PeriodicVestingAccount): _108.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _108.PeriodicVestingAccountProtoMsg): _108.PeriodicVestingAccount;
                toProto(message: _108.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _108.PeriodicVestingAccount): _108.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _108.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.PermanentLockedAccount;
                fromPartial(object: Partial<_108.PermanentLockedAccount>): _108.PermanentLockedAccount;
                fromAmino(object: _108.PermanentLockedAccountAmino): _108.PermanentLockedAccount;
                toAmino(message: _108.PermanentLockedAccount): _108.PermanentLockedAccountAmino;
                fromAminoMsg(object: _108.PermanentLockedAccountAminoMsg): _108.PermanentLockedAccount;
                toAminoMsg(message: _108.PermanentLockedAccount): _108.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _108.PermanentLockedAccountProtoMsg): _108.PermanentLockedAccount;
                toProto(message: _108.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _108.PermanentLockedAccount): _108.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _107.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgCreateVestingAccount;
                fromPartial(object: Partial<_107.MsgCreateVestingAccount>): _107.MsgCreateVestingAccount;
                fromAmino(object: _107.MsgCreateVestingAccountAmino): _107.MsgCreateVestingAccount;
                toAmino(message: _107.MsgCreateVestingAccount): _107.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _107.MsgCreateVestingAccountAminoMsg): _107.MsgCreateVestingAccount;
                toAminoMsg(message: _107.MsgCreateVestingAccount): _107.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _107.MsgCreateVestingAccountProtoMsg): _107.MsgCreateVestingAccount;
                toProto(message: _107.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _107.MsgCreateVestingAccount): _107.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _107.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_107.MsgCreateVestingAccountResponse>): _107.MsgCreateVestingAccountResponse;
                fromAmino(_: _107.MsgCreateVestingAccountResponseAmino): _107.MsgCreateVestingAccountResponse;
                toAmino(_: _107.MsgCreateVestingAccountResponse): _107.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _107.MsgCreateVestingAccountResponseAminoMsg): _107.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _107.MsgCreateVestingAccountResponse): _107.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _107.MsgCreateVestingAccountResponseProtoMsg): _107.MsgCreateVestingAccountResponse;
                toProto(message: _107.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _107.MsgCreateVestingAccountResponse): _107.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _107.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_107.MsgCreatePermanentLockedAccount>): _107.MsgCreatePermanentLockedAccount;
                fromAmino(object: _107.MsgCreatePermanentLockedAccountAmino): _107.MsgCreatePermanentLockedAccount;
                toAmino(message: _107.MsgCreatePermanentLockedAccount): _107.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _107.MsgCreatePermanentLockedAccountAminoMsg): _107.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _107.MsgCreatePermanentLockedAccount): _107.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _107.MsgCreatePermanentLockedAccountProtoMsg): _107.MsgCreatePermanentLockedAccount;
                toProto(message: _107.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _107.MsgCreatePermanentLockedAccount): _107.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _107.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_107.MsgCreatePermanentLockedAccountResponse>): _107.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _107.MsgCreatePermanentLockedAccountResponseAmino): _107.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _107.MsgCreatePermanentLockedAccountResponse): _107.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _107.MsgCreatePermanentLockedAccountResponseAminoMsg): _107.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _107.MsgCreatePermanentLockedAccountResponse): _107.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _107.MsgCreatePermanentLockedAccountResponseProtoMsg): _107.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _107.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _107.MsgCreatePermanentLockedAccountResponse): _107.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _107.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_107.MsgCreatePeriodicVestingAccount>): _107.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _107.MsgCreatePeriodicVestingAccountAmino): _107.MsgCreatePeriodicVestingAccount;
                toAmino(message: _107.MsgCreatePeriodicVestingAccount): _107.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _107.MsgCreatePeriodicVestingAccountAminoMsg): _107.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _107.MsgCreatePeriodicVestingAccount): _107.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _107.MsgCreatePeriodicVestingAccountProtoMsg): _107.MsgCreatePeriodicVestingAccount;
                toProto(message: _107.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _107.MsgCreatePeriodicVestingAccount): _107.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _107.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _107.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_107.MsgCreatePeriodicVestingAccountResponse>): _107.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _107.MsgCreatePeriodicVestingAccountResponseAmino): _107.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _107.MsgCreatePeriodicVestingAccountResponse): _107.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _107.MsgCreatePeriodicVestingAccountResponseAminoMsg): _107.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _107.MsgCreatePeriodicVestingAccountResponse): _107.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _107.MsgCreatePeriodicVestingAccountResponseProtoMsg): _107.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _107.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _107.MsgCreatePeriodicVestingAccountResponse): _107.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _205.MsgClientImpl;
                };
                bank: {
                    v1beta1: _206.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _207.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _208.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _209.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _210.MsgClientImpl;
                };
                gov: {
                    v1: _211.MsgClientImpl;
                    v1beta1: _212.MsgClientImpl;
                };
                group: {
                    v1: _213.MsgClientImpl;
                };
                nft: {
                    v1beta1: _214.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _215.MsgClientImpl;
                };
                staking: {
                    v1beta1: _216.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _217.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _218.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _28.QueryConfigRequest): Promise<_28.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _31.QueryAccountsRequest): Promise<_31.QueryAccountsResponse>;
                        account(request: _31.QueryAccountRequest): Promise<_31.QueryAccountResponse>;
                        accountAddressByID(request: _31.QueryAccountAddressByIDRequest): Promise<_31.QueryAccountAddressByIDResponse>;
                        params(request?: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        moduleAccounts(request?: _31.QueryModuleAccountsRequest): Promise<_31.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _31.QueryModuleAccountByNameRequest): Promise<_31.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _31.Bech32PrefixRequest): Promise<_31.Bech32PrefixResponse>;
                        addressBytesToString(request: _31.AddressBytesToStringRequest): Promise<_31.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _31.AddressStringToBytesRequest): Promise<_31.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _35.QueryGrantsRequest): Promise<_35.QueryGrantsResponse>;
                        granterGrants(request: _35.QueryGranterGrantsRequest): Promise<_35.QueryGranterGrantsResponse>;
                        granteeGrants(request: _35.QueryGranteeGrantsRequest): Promise<_35.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _40.QueryBalanceRequest): Promise<_40.QueryBalanceResponse>;
                        allBalances(request: _40.QueryAllBalancesRequest): Promise<_40.QueryAllBalancesResponse>;
                        spendableBalances(request: _40.QuerySpendableBalancesRequest): Promise<_40.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _40.QueryTotalSupplyRequest): Promise<_40.QueryTotalSupplyResponse>;
                        supplyOf(request: _40.QuerySupplyOfRequest): Promise<_40.QuerySupplyOfResponse>;
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        denomMetadata(request: _40.QueryDenomMetadataRequest): Promise<_40.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _40.QueryDenomsMetadataRequest): Promise<_40.QueryDenomsMetadataResponse>;
                        denomOwners(request: _40.QueryDenomOwnersRequest): Promise<_40.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _16.ConfigRequest): Promise<_16.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _22.GetNodeInfoRequest): Promise<_22.GetNodeInfoResponse>;
                            getSyncing(request?: _22.GetSyncingRequest): Promise<_22.GetSyncingResponse>;
                            getLatestBlock(request?: _22.GetLatestBlockRequest): Promise<_22.GetLatestBlockResponse>;
                            getBlockByHeight(request: _22.GetBlockByHeightRequest): Promise<_22.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _22.GetLatestValidatorSetRequest): Promise<_22.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _22.GetValidatorSetByHeightRequest): Promise<_22.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _22.ABCIQueryRequest): Promise<_22.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _54.QueryValidatorOutstandingRewardsRequest): Promise<_54.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _54.QueryValidatorCommissionRequest): Promise<_54.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _54.QueryValidatorSlashesRequest): Promise<_54.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _54.QueryDelegationRewardsRequest): Promise<_54.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _54.QueryDelegationTotalRewardsRequest): Promise<_54.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _54.QueryDelegatorValidatorsRequest): Promise<_54.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _54.QueryDelegatorWithdrawAddressRequest): Promise<_54.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _54.QueryCommunityPoolRequest): Promise<_54.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _58.QueryEvidenceRequest): Promise<_58.QueryEvidenceResponse>;
                        allEvidence(request?: _58.QueryAllEvidenceRequest): Promise<_58.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _62.QueryAllowanceRequest): Promise<_62.QueryAllowanceResponse>;
                        allowances(request: _62.QueryAllowancesRequest): Promise<_62.QueryAllowancesResponse>;
                        allowancesByGranter(request: _62.QueryAllowancesByGranterRequest): Promise<_62.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _67.QueryProposalRequest): Promise<_67.QueryProposalResponse>;
                        proposals(request: _67.QueryProposalsRequest): Promise<_67.QueryProposalsResponse>;
                        vote(request: _67.QueryVoteRequest): Promise<_67.QueryVoteResponse>;
                        votes(request: _67.QueryVotesRequest): Promise<_67.QueryVotesResponse>;
                        params(request: _67.QueryParamsRequest): Promise<_67.QueryParamsResponse>;
                        deposit(request: _67.QueryDepositRequest): Promise<_67.QueryDepositResponse>;
                        deposits(request: _67.QueryDepositsRequest): Promise<_67.QueryDepositsResponse>;
                        tallyResult(request: _67.QueryTallyResultRequest): Promise<_67.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                        proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                        vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                        votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                        params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                        deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                        tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _75.QueryGroupInfoRequest): Promise<_75.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _75.QueryGroupPolicyInfoRequest): Promise<_75.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _75.QueryGroupMembersRequest): Promise<_75.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _75.QueryGroupsByAdminRequest): Promise<_75.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _75.QueryGroupPoliciesByGroupRequest): Promise<_75.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _75.QueryGroupPoliciesByAdminRequest): Promise<_75.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _75.QueryProposalsByGroupPolicyRequest): Promise<_75.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _75.QueryVoteByProposalVoterRequest): Promise<_75.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _75.QueryVotesByProposalRequest): Promise<_75.QueryVotesByProposalResponse>;
                        votesByVoter(request: _75.QueryVotesByVoterRequest): Promise<_75.QueryVotesByVoterResponse>;
                        groupsByMember(request: _75.QueryGroupsByMemberRequest): Promise<_75.QueryGroupsByMemberResponse>;
                        tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
                        groups(request?: _75.QueryGroupsRequest): Promise<_75.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        inflation(request?: _80.QueryInflationRequest): Promise<_80.QueryInflationResponse>;
                        annualProvisions(request?: _80.QueryAnnualProvisionsRequest): Promise<_80.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _85.QueryBalanceRequest): Promise<_85.QueryBalanceResponse>;
                        owner(request: _85.QueryOwnerRequest): Promise<_85.QueryOwnerResponse>;
                        supply(request: _85.QuerySupplyRequest): Promise<_85.QuerySupplyResponse>;
                        nFTs(request: _85.QueryNFTsRequest): Promise<_85.QueryNFTsResponse>;
                        nFT(request: _85.QueryNFTRequest): Promise<_85.QueryNFTResponse>;
                        class(request: _85.QueryClassRequest): Promise<_85.QueryClassResponse>;
                        classes(request?: _85.QueryClassesRequest): Promise<_85.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                        subspaces(request?: _91.QuerySubspacesRequest): Promise<_91.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                        signingInfo(request: _93.QuerySigningInfoRequest): Promise<_93.QuerySigningInfoResponse>;
                        signingInfos(request?: _93.QuerySigningInfosRequest): Promise<_93.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _98.QueryValidatorsRequest): Promise<_98.QueryValidatorsResponse>;
                        validator(request: _98.QueryValidatorRequest): Promise<_98.QueryValidatorResponse>;
                        validatorDelegations(request: _98.QueryValidatorDelegationsRequest): Promise<_98.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _98.QueryValidatorUnbondingDelegationsRequest): Promise<_98.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _98.QueryDelegationRequest): Promise<_98.QueryDelegationResponse>;
                        unbondingDelegation(request: _98.QueryUnbondingDelegationRequest): Promise<_98.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _98.QueryDelegatorDelegationsRequest): Promise<_98.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _98.QueryDelegatorUnbondingDelegationsRequest): Promise<_98.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _98.QueryRedelegationsRequest): Promise<_98.QueryRedelegationsResponse>;
                        delegatorValidators(request: _98.QueryDelegatorValidatorsRequest): Promise<_98.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _98.QueryDelegatorValidatorRequest): Promise<_98.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _98.QueryHistoricalInfoRequest): Promise<_98.QueryHistoricalInfoResponse>;
                        pool(request?: _98.QueryPoolRequest): Promise<_98.QueryPoolResponse>;
                        params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _102.SimulateRequest): Promise<_102.SimulateResponse>;
                        getTx(request: _102.GetTxRequest): Promise<_102.GetTxResponse>;
                        broadcastTx(request: _102.BroadcastTxRequest): Promise<_102.BroadcastTxResponse>;
                        getTxsEvent(request: _102.GetTxsEventRequest): Promise<_102.GetTxsEventResponse>;
                        getBlockWithTxs(request: _102.GetBlockWithTxsRequest): Promise<_102.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _104.QueryCurrentPlanRequest): Promise<_104.QueryCurrentPlanResponse>;
                        appliedPlan(request: _104.QueryAppliedPlanRequest): Promise<_104.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _104.QueryUpgradedConsensusStateRequest): Promise<_104.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _104.QueryModuleVersionsRequest): Promise<_104.QueryModuleVersionsResponse>;
                        authority(request?: _104.QueryAuthorityRequest): Promise<_104.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _168.LCDQueryClient;
                };
                authz: {
                    v1beta1: _169.LCDQueryClient;
                };
                bank: {
                    v1beta1: _170.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _171.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _172.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _173.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _174.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _175.LCDQueryClient;
                };
                gov: {
                    v1: _176.LCDQueryClient;
                    v1beta1: _177.LCDQueryClient;
                };
                group: {
                    v1: _178.LCDQueryClient;
                };
                mint: {
                    v1beta1: _179.LCDQueryClient;
                };
                nft: {
                    v1beta1: _180.LCDQueryClient;
                };
                params: {
                    v1beta1: _181.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _182.LCDQueryClient;
                };
                staking: {
                    v1beta1: _183.LCDQueryClient;
                };
                tx: {
                    v1beta1: _184.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _185.LCDQueryClient;
                };
            };
        }>;
    };
}
