import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/kv/v1beta1/kv";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/tendermint/v1beta1/query";
import * as _43 from "./auth/v1beta1/auth";
import * as _44 from "./auth/v1beta1/genesis";
import * as _45 from "./auth/v1beta1/query";
import * as _46 from "./authz/v1beta1/authz";
import * as _47 from "./authz/v1beta1/event";
import * as _48 from "./authz/v1beta1/genesis";
import * as _49 from "./authz/v1beta1/query";
import * as _50 from "./authz/v1beta1/tx";
import * as _51 from "./bank/v1beta1/authz";
import * as _52 from "./bank/v1beta1/bank";
import * as _53 from "./bank/v1beta1/genesis";
import * as _54 from "./bank/v1beta1/query";
import * as _55 from "./bank/v1beta1/tx";
import * as _56 from "./capability/v1beta1/capability";
import * as _57 from "./capability/v1beta1/genesis";
import * as _58 from "./crisis/v1beta1/genesis";
import * as _59 from "./crisis/v1beta1/tx";
import * as _60 from "./crypto/ed25519/keys";
import * as _61 from "./crypto/multisig/keys";
import * as _62 from "./crypto/secp256k1/keys";
import * as _63 from "./crypto/secp256r1/keys";
import * as _64 from "./distribution/v1beta1/distribution";
import * as _65 from "./distribution/v1beta1/genesis";
import * as _66 from "./distribution/v1beta1/query";
import * as _67 from "./distribution/v1beta1/tx";
import * as _68 from "./evidence/v1beta1/evidence";
import * as _69 from "./evidence/v1beta1/genesis";
import * as _70 from "./evidence/v1beta1/query";
import * as _71 from "./evidence/v1beta1/tx";
import * as _72 from "./feegrant/v1beta1/feegrant";
import * as _73 from "./feegrant/v1beta1/genesis";
import * as _74 from "./feegrant/v1beta1/query";
import * as _75 from "./feegrant/v1beta1/tx";
import * as _76 from "./genutil/v1beta1/genesis";
import * as _77 from "./gov/v1beta1/genesis";
import * as _78 from "./gov/v1beta1/gov";
import * as _79 from "./gov/v1beta1/query";
import * as _80 from "./gov/v1beta1/tx";
import * as _81 from "./mint/v1beta1/genesis";
import * as _82 from "./mint/v1beta1/mint";
import * as _83 from "./mint/v1beta1/query";
import * as _84 from "./params/v1beta1/params";
import * as _85 from "./params/v1beta1/query";
import * as _86 from "./slashing/v1beta1/genesis";
import * as _87 from "./slashing/v1beta1/query";
import * as _88 from "./slashing/v1beta1/slashing";
import * as _89 from "./slashing/v1beta1/tx";
import * as _90 from "./staking/v1beta1/authz";
import * as _91 from "./staking/v1beta1/genesis";
import * as _92 from "./staking/v1beta1/query";
import * as _93 from "./staking/v1beta1/staking";
import * as _94 from "./staking/v1beta1/tx";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/upgrade";
import * as _100 from "./vesting/v1beta1/tx";
import * as _101 from "./vesting/v1beta1/vesting";
import * as _165 from "./auth/v1beta1/query.lcd";
import * as _166 from "./authz/v1beta1/query.lcd";
import * as _167 from "./bank/v1beta1/query.lcd";
import * as _168 from "./base/node/v1beta1/query.lcd";
import * as _169 from "./base/tendermint/v1beta1/query.lcd";
import * as _170 from "./distribution/v1beta1/query.lcd";
import * as _171 from "./evidence/v1beta1/query.lcd";
import * as _172 from "./feegrant/v1beta1/query.lcd";
import * as _173 from "./gov/v1beta1/query.lcd";
import * as _174 from "./mint/v1beta1/query.lcd";
import * as _175 from "./params/v1beta1/query.lcd";
import * as _176 from "./slashing/v1beta1/query.lcd";
import * as _177 from "./staking/v1beta1/query.lcd";
import * as _178 from "./tx/v1beta1/service.lcd";
import * as _179 from "./upgrade/v1beta1/query.lcd";
import * as _180 from "./auth/v1beta1/query.rpc.Query";
import * as _181 from "./authz/v1beta1/query.rpc.Query";
import * as _182 from "./bank/v1beta1/query.rpc.Query";
import * as _183 from "./base/node/v1beta1/query.rpc.Service";
import * as _184 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _185 from "./distribution/v1beta1/query.rpc.Query";
import * as _186 from "./evidence/v1beta1/query.rpc.Query";
import * as _187 from "./feegrant/v1beta1/query.rpc.Query";
import * as _188 from "./gov/v1beta1/query.rpc.Query";
import * as _189 from "./mint/v1beta1/query.rpc.Query";
import * as _190 from "./params/v1beta1/query.rpc.Query";
import * as _191 from "./slashing/v1beta1/query.rpc.Query";
import * as _192 from "./staking/v1beta1/query.rpc.Query";
import * as _193 from "./tx/v1beta1/service.rpc.Service";
import * as _194 from "./upgrade/v1beta1/query.rpc.Query";
import * as _195 from "./authz/v1beta1/tx.rpc.msg";
import * as _196 from "./bank/v1beta1/tx.rpc.msg";
import * as _197 from "./crisis/v1beta1/tx.rpc.msg";
import * as _198 from "./distribution/v1beta1/tx.rpc.msg";
import * as _199 from "./evidence/v1beta1/tx.rpc.msg";
import * as _200 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _201 from "./gov/v1beta1/tx.rpc.msg";
import * as _202 from "./slashing/v1beta1/tx.rpc.msg";
import * as _203 from "./staking/v1beta1/tx.rpc.msg";
import * as _204 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace base {
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _32.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.PageRequest;
                    fromPartial(object: Partial<_32.PageRequest>): _32.PageRequest;
                    fromAmino(object: _32.PageRequestAmino): _32.PageRequest;
                    toAmino(message: _32.PageRequest): _32.PageRequestAmino;
                    fromAminoMsg(object: _32.PageRequestAminoMsg): _32.PageRequest;
                    toAminoMsg(message: _32.PageRequest): _32.PageRequestAminoMsg;
                    fromProtoMsg(message: _32.PageRequestProtoMsg): _32.PageRequest;
                    toProto(message: _32.PageRequest): Uint8Array;
                    toProtoMsg(message: _32.PageRequest): _32.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _32.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _32.PageResponse;
                    fromPartial(object: Partial<_32.PageResponse>): _32.PageResponse;
                    fromAmino(object: _32.PageResponseAmino): _32.PageResponse;
                    toAmino(message: _32.PageResponse): _32.PageResponseAmino;
                    fromAminoMsg(object: _32.PageResponseAminoMsg): _32.PageResponse;
                    toAminoMsg(message: _32.PageResponse): _32.PageResponseAminoMsg;
                    fromProtoMsg(message: _32.PageResponseProtoMsg): _32.PageResponse;
                    toProto(message: _32.PageResponse): Uint8Array;
                    toProtoMsg(message: _32.PageResponse): _32.PageResponseProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _33.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Coin;
                fromPartial(object: Partial<_33.Coin>): _33.Coin;
                fromAmino(object: _33.CoinAmino): _33.Coin;
                toAmino(message: _33.Coin): _33.CoinAmino;
                fromAminoMsg(object: _33.CoinAminoMsg): _33.Coin;
                toAminoMsg(message: _33.Coin): _33.CoinAminoMsg;
                fromProtoMsg(message: _33.CoinProtoMsg): _33.Coin;
                toProto(message: _33.Coin): Uint8Array;
                toProtoMsg(message: _33.Coin): _33.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _33.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DecCoin;
                fromPartial(object: Partial<_33.DecCoin>): _33.DecCoin;
                fromAmino(object: _33.DecCoinAmino): _33.DecCoin;
                toAmino(message: _33.DecCoin): _33.DecCoinAmino;
                fromAminoMsg(object: _33.DecCoinAminoMsg): _33.DecCoin;
                toAminoMsg(message: _33.DecCoin): _33.DecCoinAminoMsg;
                fromProtoMsg(message: _33.DecCoinProtoMsg): _33.DecCoin;
                toProto(message: _33.DecCoin): Uint8Array;
                toProtoMsg(message: _33.DecCoin): _33.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _33.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.IntProto;
                fromPartial(object: Partial<_33.IntProto>): _33.IntProto;
                fromAmino(object: _33.IntProtoAmino): _33.IntProto;
                toAmino(message: _33.IntProto): _33.IntProtoAmino;
                fromAminoMsg(object: _33.IntProtoAminoMsg): _33.IntProto;
                toAminoMsg(message: _33.IntProto): _33.IntProtoAminoMsg;
                fromProtoMsg(message: _33.IntProtoProtoMsg): _33.IntProto;
                toProto(message: _33.IntProto): Uint8Array;
                toProtoMsg(message: _33.IntProto): _33.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _33.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.DecProto;
                fromPartial(object: Partial<_33.DecProto>): _33.DecProto;
                fromAmino(object: _33.DecProtoAmino): _33.DecProto;
                toAmino(message: _33.DecProto): _33.DecProtoAmino;
                fromAminoMsg(object: _33.DecProtoAminoMsg): _33.DecProto;
                toAminoMsg(message: _33.DecProto): _33.DecProtoAminoMsg;
                fromProtoMsg(message: _33.DecProtoProtoMsg): _33.DecProto;
                toProto(message: _33.DecProto): Uint8Array;
                toProtoMsg(message: _33.DecProto): _33.DecProtoProtoMsg;
            };
        };
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _34.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.TxResponse;
                    fromPartial(object: Partial<_34.TxResponse>): _34.TxResponse;
                    fromAmino(object: _34.TxResponseAmino): _34.TxResponse;
                    toAmino(message: _34.TxResponse): _34.TxResponseAmino;
                    fromAminoMsg(object: _34.TxResponseAminoMsg): _34.TxResponse;
                    toAminoMsg(message: _34.TxResponse): _34.TxResponseAminoMsg;
                    fromProtoMsg(message: _34.TxResponseProtoMsg): _34.TxResponse;
                    toProto(message: _34.TxResponse): Uint8Array;
                    toProtoMsg(message: _34.TxResponse): _34.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _34.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.ABCIMessageLog;
                    fromPartial(object: Partial<_34.ABCIMessageLog>): _34.ABCIMessageLog;
                    fromAmino(object: _34.ABCIMessageLogAmino): _34.ABCIMessageLog;
                    toAmino(message: _34.ABCIMessageLog): _34.ABCIMessageLogAmino;
                    fromAminoMsg(object: _34.ABCIMessageLogAminoMsg): _34.ABCIMessageLog;
                    toAminoMsg(message: _34.ABCIMessageLog): _34.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _34.ABCIMessageLogProtoMsg): _34.ABCIMessageLog;
                    toProto(message: _34.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _34.ABCIMessageLog): _34.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _34.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.StringEvent;
                    fromPartial(object: Partial<_34.StringEvent>): _34.StringEvent;
                    fromAmino(object: _34.StringEventAmino): _34.StringEvent;
                    toAmino(message: _34.StringEvent): _34.StringEventAmino;
                    fromAminoMsg(object: _34.StringEventAminoMsg): _34.StringEvent;
                    toAminoMsg(message: _34.StringEvent): _34.StringEventAminoMsg;
                    fromProtoMsg(message: _34.StringEventProtoMsg): _34.StringEvent;
                    toProto(message: _34.StringEvent): Uint8Array;
                    toProtoMsg(message: _34.StringEvent): _34.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _34.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Attribute;
                    fromPartial(object: Partial<_34.Attribute>): _34.Attribute;
                    fromAmino(object: _34.AttributeAmino): _34.Attribute;
                    toAmino(message: _34.Attribute): _34.AttributeAmino;
                    fromAminoMsg(object: _34.AttributeAminoMsg): _34.Attribute;
                    toAminoMsg(message: _34.Attribute): _34.AttributeAminoMsg;
                    fromProtoMsg(message: _34.AttributeProtoMsg): _34.Attribute;
                    toProto(message: _34.Attribute): Uint8Array;
                    toProtoMsg(message: _34.Attribute): _34.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _34.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.GasInfo;
                    fromPartial(object: Partial<_34.GasInfo>): _34.GasInfo;
                    fromAmino(object: _34.GasInfoAmino): _34.GasInfo;
                    toAmino(message: _34.GasInfo): _34.GasInfoAmino;
                    fromAminoMsg(object: _34.GasInfoAminoMsg): _34.GasInfo;
                    toAminoMsg(message: _34.GasInfo): _34.GasInfoAminoMsg;
                    fromProtoMsg(message: _34.GasInfoProtoMsg): _34.GasInfo;
                    toProto(message: _34.GasInfo): Uint8Array;
                    toProtoMsg(message: _34.GasInfo): _34.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _34.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.Result;
                    fromPartial(object: Partial<_34.Result>): _34.Result;
                    fromAmino(object: _34.ResultAmino): _34.Result;
                    toAmino(message: _34.Result): _34.ResultAmino;
                    fromAminoMsg(object: _34.ResultAminoMsg): _34.Result;
                    toAminoMsg(message: _34.Result): _34.ResultAminoMsg;
                    fromProtoMsg(message: _34.ResultProtoMsg): _34.Result;
                    toProto(message: _34.Result): Uint8Array;
                    toProtoMsg(message: _34.Result): _34.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _34.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SimulationResponse;
                    fromPartial(object: Partial<_34.SimulationResponse>): _34.SimulationResponse;
                    fromAmino(object: _34.SimulationResponseAmino): _34.SimulationResponse;
                    toAmino(message: _34.SimulationResponse): _34.SimulationResponseAmino;
                    fromAminoMsg(object: _34.SimulationResponseAminoMsg): _34.SimulationResponse;
                    toAminoMsg(message: _34.SimulationResponse): _34.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _34.SimulationResponseProtoMsg): _34.SimulationResponse;
                    toProto(message: _34.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _34.SimulationResponse): _34.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _34.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.MsgData;
                    fromPartial(object: Partial<_34.MsgData>): _34.MsgData;
                    fromAmino(object: _34.MsgDataAmino): _34.MsgData;
                    toAmino(message: _34.MsgData): _34.MsgDataAmino;
                    fromAminoMsg(object: _34.MsgDataAminoMsg): _34.MsgData;
                    toAminoMsg(message: _34.MsgData): _34.MsgDataAminoMsg;
                    fromProtoMsg(message: _34.MsgDataProtoMsg): _34.MsgData;
                    toProto(message: _34.MsgData): Uint8Array;
                    toProtoMsg(message: _34.MsgData): _34.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _34.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.TxMsgData;
                    fromPartial(object: Partial<_34.TxMsgData>): _34.TxMsgData;
                    fromAmino(object: _34.TxMsgDataAmino): _34.TxMsgData;
                    toAmino(message: _34.TxMsgData): _34.TxMsgDataAmino;
                    fromAminoMsg(object: _34.TxMsgDataAminoMsg): _34.TxMsgData;
                    toAminoMsg(message: _34.TxMsgData): _34.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _34.TxMsgDataProtoMsg): _34.TxMsgData;
                    toProto(message: _34.TxMsgData): Uint8Array;
                    toProtoMsg(message: _34.TxMsgData): _34.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _34.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _34.SearchTxsResult;
                    fromPartial(object: Partial<_34.SearchTxsResult>): _34.SearchTxsResult;
                    fromAmino(object: _34.SearchTxsResultAmino): _34.SearchTxsResult;
                    toAmino(message: _34.SearchTxsResult): _34.SearchTxsResultAmino;
                    fromAminoMsg(object: _34.SearchTxsResultAminoMsg): _34.SearchTxsResult;
                    toAminoMsg(message: _34.SearchTxsResult): _34.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _34.SearchTxsResultProtoMsg): _34.SearchTxsResult;
                    toProto(message: _34.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _34.SearchTxsResult): _34.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _35.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Pairs;
                    fromPartial(object: Partial<_35.Pairs>): _35.Pairs;
                    fromAmino(object: _35.PairsAmino): _35.Pairs;
                    toAmino(message: _35.Pairs): _35.PairsAmino;
                    fromAminoMsg(object: _35.PairsAminoMsg): _35.Pairs;
                    toAminoMsg(message: _35.Pairs): _35.PairsAminoMsg;
                    fromProtoMsg(message: _35.PairsProtoMsg): _35.Pairs;
                    toProto(message: _35.Pairs): Uint8Array;
                    toProtoMsg(message: _35.Pairs): _35.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _35.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _35.Pair;
                    fromPartial(object: Partial<_35.Pair>): _35.Pair;
                    fromAmino(object: _35.PairAmino): _35.Pair;
                    toAmino(message: _35.Pair): _35.PairAmino;
                    fromAminoMsg(object: _35.PairAminoMsg): _35.Pair;
                    toAminoMsg(message: _35.Pair): _35.PairAminoMsg;
                    fromProtoMsg(message: _35.PairProtoMsg): _35.Pair;
                    toProto(message: _35.Pair): Uint8Array;
                    toProtoMsg(message: _35.Pair): _35.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _183.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _36.ConfigRequest): Promise<_36.ConfigResponse>;
                };
                LCDQueryClient: typeof _168.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _36.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _36.ConfigRequest;
                    fromPartial(_: Partial<_36.ConfigRequest>): _36.ConfigRequest;
                    fromAmino(_: _36.ConfigRequestAmino): _36.ConfigRequest;
                    toAmino(_: _36.ConfigRequest): _36.ConfigRequestAmino;
                    fromAminoMsg(object: _36.ConfigRequestAminoMsg): _36.ConfigRequest;
                    toAminoMsg(message: _36.ConfigRequest): _36.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _36.ConfigRequestProtoMsg): _36.ConfigRequest;
                    toProto(message: _36.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _36.ConfigRequest): _36.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _36.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _36.ConfigResponse;
                    fromPartial(object: Partial<_36.ConfigResponse>): _36.ConfigResponse;
                    fromAmino(object: _36.ConfigResponseAmino): _36.ConfigResponse;
                    toAmino(message: _36.ConfigResponse): _36.ConfigResponseAmino;
                    fromAminoMsg(object: _36.ConfigResponseAminoMsg): _36.ConfigResponse;
                    toAminoMsg(message: _36.ConfigResponse): _36.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _36.ConfigResponseProtoMsg): _36.ConfigResponse;
                    toProto(message: _36.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _36.ConfigResponse): _36.ConfigResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _37.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _37.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_37.ListAllInterfacesRequest>): _37.ListAllInterfacesRequest;
                    fromAmino(_: _37.ListAllInterfacesRequestAmino): _37.ListAllInterfacesRequest;
                    toAmino(_: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _37.ListAllInterfacesRequestAminoMsg): _37.ListAllInterfacesRequest;
                    toAminoMsg(message: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _37.ListAllInterfacesRequestProtoMsg): _37.ListAllInterfacesRequest;
                    toProto(message: _37.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _37.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_37.ListAllInterfacesResponse>): _37.ListAllInterfacesResponse;
                    fromAmino(object: _37.ListAllInterfacesResponseAmino): _37.ListAllInterfacesResponse;
                    toAmino(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _37.ListAllInterfacesResponseAminoMsg): _37.ListAllInterfacesResponse;
                    toAminoMsg(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _37.ListAllInterfacesResponseProtoMsg): _37.ListAllInterfacesResponse;
                    toProto(message: _37.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _37.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListImplementationsRequest;
                    fromPartial(object: Partial<_37.ListImplementationsRequest>): _37.ListImplementationsRequest;
                    fromAmino(object: _37.ListImplementationsRequestAmino): _37.ListImplementationsRequest;
                    toAmino(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _37.ListImplementationsRequestAminoMsg): _37.ListImplementationsRequest;
                    toAminoMsg(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _37.ListImplementationsRequestProtoMsg): _37.ListImplementationsRequest;
                    toProto(message: _37.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _37.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _37.ListImplementationsResponse;
                    fromPartial(object: Partial<_37.ListImplementationsResponse>): _37.ListImplementationsResponse;
                    fromAmino(object: _37.ListImplementationsResponseAmino): _37.ListImplementationsResponse;
                    toAmino(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _37.ListImplementationsResponseAminoMsg): _37.ListImplementationsResponse;
                    toAminoMsg(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _37.ListImplementationsResponseProtoMsg): _37.ListImplementationsResponse;
                    toProto(message: _37.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.AppDescriptor;
                    fromPartial(object: Partial<_38.AppDescriptor>): _38.AppDescriptor;
                    fromAmino(object: _38.AppDescriptorAmino): _38.AppDescriptor;
                    toAmino(message: _38.AppDescriptor): _38.AppDescriptorAmino;
                    fromAminoMsg(object: _38.AppDescriptorAminoMsg): _38.AppDescriptor;
                    toAminoMsg(message: _38.AppDescriptor): _38.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AppDescriptorProtoMsg): _38.AppDescriptor;
                    toProto(message: _38.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AppDescriptor): _38.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _38.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.TxDescriptor;
                    fromPartial(object: Partial<_38.TxDescriptor>): _38.TxDescriptor;
                    fromAmino(object: _38.TxDescriptorAmino): _38.TxDescriptor;
                    toAmino(message: _38.TxDescriptor): _38.TxDescriptorAmino;
                    fromAminoMsg(object: _38.TxDescriptorAminoMsg): _38.TxDescriptor;
                    toAminoMsg(message: _38.TxDescriptor): _38.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _38.TxDescriptorProtoMsg): _38.TxDescriptor;
                    toProto(message: _38.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _38.TxDescriptor): _38.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.AuthnDescriptor;
                    fromPartial(object: Partial<_38.AuthnDescriptor>): _38.AuthnDescriptor;
                    fromAmino(object: _38.AuthnDescriptorAmino): _38.AuthnDescriptor;
                    toAmino(message: _38.AuthnDescriptor): _38.AuthnDescriptorAmino;
                    fromAminoMsg(object: _38.AuthnDescriptorAminoMsg): _38.AuthnDescriptor;
                    toAminoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AuthnDescriptorProtoMsg): _38.AuthnDescriptor;
                    toProto(message: _38.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _38.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.SigningModeDescriptor;
                    fromPartial(object: Partial<_38.SigningModeDescriptor>): _38.SigningModeDescriptor;
                    fromAmino(object: _38.SigningModeDescriptorAmino): _38.SigningModeDescriptor;
                    toAmino(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _38.SigningModeDescriptorAminoMsg): _38.SigningModeDescriptor;
                    toAminoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _38.SigningModeDescriptorProtoMsg): _38.SigningModeDescriptor;
                    toProto(message: _38.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ChainDescriptor;
                    fromPartial(object: Partial<_38.ChainDescriptor>): _38.ChainDescriptor;
                    fromAmino(object: _38.ChainDescriptorAmino): _38.ChainDescriptor;
                    toAmino(message: _38.ChainDescriptor): _38.ChainDescriptorAmino;
                    fromAminoMsg(object: _38.ChainDescriptorAminoMsg): _38.ChainDescriptor;
                    toAminoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ChainDescriptorProtoMsg): _38.ChainDescriptor;
                    toProto(message: _38.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _38.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.CodecDescriptor;
                    fromPartial(object: Partial<_38.CodecDescriptor>): _38.CodecDescriptor;
                    fromAmino(object: _38.CodecDescriptorAmino): _38.CodecDescriptor;
                    toAmino(message: _38.CodecDescriptor): _38.CodecDescriptorAmino;
                    fromAminoMsg(object: _38.CodecDescriptorAminoMsg): _38.CodecDescriptor;
                    toAminoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _38.CodecDescriptorProtoMsg): _38.CodecDescriptor;
                    toProto(message: _38.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceDescriptor;
                    fromPartial(object: Partial<_38.InterfaceDescriptor>): _38.InterfaceDescriptor;
                    fromAmino(object: _38.InterfaceDescriptorAmino): _38.InterfaceDescriptor;
                    toAmino(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceDescriptorAminoMsg): _38.InterfaceDescriptor;
                    toAminoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceDescriptorProtoMsg): _38.InterfaceDescriptor;
                    toProto(message: _38.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_38.InterfaceImplementerDescriptor>): _38.InterfaceImplementerDescriptor;
                    fromAmino(object: _38.InterfaceImplementerDescriptorAmino): _38.InterfaceImplementerDescriptor;
                    toAmino(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceImplementerDescriptorAminoMsg): _38.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceImplementerDescriptorProtoMsg): _38.InterfaceImplementerDescriptor;
                    toProto(message: _38.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_38.InterfaceAcceptingMessageDescriptor>): _38.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _38.InterfaceAcceptingMessageDescriptorAmino): _38.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceAcceptingMessageDescriptorAminoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceAcceptingMessageDescriptorProtoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _38.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.ConfigurationDescriptor;
                    fromPartial(object: Partial<_38.ConfigurationDescriptor>): _38.ConfigurationDescriptor;
                    fromAmino(object: _38.ConfigurationDescriptorAmino): _38.ConfigurationDescriptor;
                    toAmino(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _38.ConfigurationDescriptorAminoMsg): _38.ConfigurationDescriptor;
                    toAminoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ConfigurationDescriptorProtoMsg): _38.ConfigurationDescriptor;
                    toProto(message: _38.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _38.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.MsgDescriptor;
                    fromPartial(object: Partial<_38.MsgDescriptor>): _38.MsgDescriptor;
                    fromAmino(object: _38.MsgDescriptorAmino): _38.MsgDescriptor;
                    toAmino(message: _38.MsgDescriptor): _38.MsgDescriptorAmino;
                    fromAminoMsg(object: _38.MsgDescriptorAminoMsg): _38.MsgDescriptor;
                    toAminoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _38.MsgDescriptorProtoMsg): _38.MsgDescriptor;
                    toProto(message: _38.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_38.GetAuthnDescriptorRequest>): _38.GetAuthnDescriptorRequest;
                    fromAmino(_: _38.GetAuthnDescriptorRequestAmino): _38.GetAuthnDescriptorRequest;
                    toAmino(_: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorRequestAminoMsg): _38.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorRequestProtoMsg): _38.GetAuthnDescriptorRequest;
                    toProto(message: _38.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_38.GetAuthnDescriptorResponse>): _38.GetAuthnDescriptorResponse;
                    fromAmino(object: _38.GetAuthnDescriptorResponseAmino): _38.GetAuthnDescriptorResponse;
                    toAmino(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorResponseAminoMsg): _38.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorResponseProtoMsg): _38.GetAuthnDescriptorResponse;
                    toProto(message: _38.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_38.GetChainDescriptorRequest>): _38.GetChainDescriptorRequest;
                    fromAmino(_: _38.GetChainDescriptorRequestAmino): _38.GetChainDescriptorRequest;
                    toAmino(_: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorRequestAminoMsg): _38.GetChainDescriptorRequest;
                    toAminoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorRequestProtoMsg): _38.GetChainDescriptorRequest;
                    toProto(message: _38.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_38.GetChainDescriptorResponse>): _38.GetChainDescriptorResponse;
                    fromAmino(object: _38.GetChainDescriptorResponseAmino): _38.GetChainDescriptorResponse;
                    toAmino(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorResponseAminoMsg): _38.GetChainDescriptorResponse;
                    toAminoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorResponseProtoMsg): _38.GetChainDescriptorResponse;
                    toProto(message: _38.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_38.GetCodecDescriptorRequest>): _38.GetCodecDescriptorRequest;
                    fromAmino(_: _38.GetCodecDescriptorRequestAmino): _38.GetCodecDescriptorRequest;
                    toAmino(_: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorRequestAminoMsg): _38.GetCodecDescriptorRequest;
                    toAminoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorRequestProtoMsg): _38.GetCodecDescriptorRequest;
                    toProto(message: _38.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_38.GetCodecDescriptorResponse>): _38.GetCodecDescriptorResponse;
                    fromAmino(object: _38.GetCodecDescriptorResponseAmino): _38.GetCodecDescriptorResponse;
                    toAmino(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorResponseAminoMsg): _38.GetCodecDescriptorResponse;
                    toAminoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorResponseProtoMsg): _38.GetCodecDescriptorResponse;
                    toProto(message: _38.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_38.GetConfigurationDescriptorRequest>): _38.GetConfigurationDescriptorRequest;
                    fromAmino(_: _38.GetConfigurationDescriptorRequestAmino): _38.GetConfigurationDescriptorRequest;
                    toAmino(_: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorRequestAminoMsg): _38.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorRequestProtoMsg): _38.GetConfigurationDescriptorRequest;
                    toProto(message: _38.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_38.GetConfigurationDescriptorResponse>): _38.GetConfigurationDescriptorResponse;
                    fromAmino(object: _38.GetConfigurationDescriptorResponseAmino): _38.GetConfigurationDescriptorResponse;
                    toAmino(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorResponseAminoMsg): _38.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorResponseProtoMsg): _38.GetConfigurationDescriptorResponse;
                    toProto(message: _38.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_38.GetQueryServicesDescriptorRequest>): _38.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _38.GetQueryServicesDescriptorRequestAmino): _38.GetQueryServicesDescriptorRequest;
                    toAmino(_: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorRequestAminoMsg): _38.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorRequestProtoMsg): _38.GetQueryServicesDescriptorRequest;
                    toProto(message: _38.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_38.GetQueryServicesDescriptorResponse>): _38.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _38.GetQueryServicesDescriptorResponseAmino): _38.GetQueryServicesDescriptorResponse;
                    toAmino(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorResponseAminoMsg): _38.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorResponseProtoMsg): _38.GetQueryServicesDescriptorResponse;
                    toProto(message: _38.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _38.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_38.GetTxDescriptorRequest>): _38.GetTxDescriptorRequest;
                    fromAmino(_: _38.GetTxDescriptorRequestAmino): _38.GetTxDescriptorRequest;
                    toAmino(_: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorRequestAminoMsg): _38.GetTxDescriptorRequest;
                    toAminoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorRequestProtoMsg): _38.GetTxDescriptorRequest;
                    toProto(message: _38.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_38.GetTxDescriptorResponse>): _38.GetTxDescriptorResponse;
                    fromAmino(object: _38.GetTxDescriptorResponseAmino): _38.GetTxDescriptorResponse;
                    toAmino(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorResponseAminoMsg): _38.GetTxDescriptorResponse;
                    toAminoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorResponseProtoMsg): _38.GetTxDescriptorResponse;
                    toProto(message: _38.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryServicesDescriptor;
                    fromPartial(object: Partial<_38.QueryServicesDescriptor>): _38.QueryServicesDescriptor;
                    fromAmino(object: _38.QueryServicesDescriptorAmino): _38.QueryServicesDescriptor;
                    toAmino(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServicesDescriptorAminoMsg): _38.QueryServicesDescriptor;
                    toAminoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServicesDescriptorProtoMsg): _38.QueryServicesDescriptor;
                    toProto(message: _38.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryServiceDescriptor;
                    fromPartial(object: Partial<_38.QueryServiceDescriptor>): _38.QueryServiceDescriptor;
                    fromAmino(object: _38.QueryServiceDescriptorAmino): _38.QueryServiceDescriptor;
                    toAmino(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServiceDescriptorAminoMsg): _38.QueryServiceDescriptor;
                    toAminoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServiceDescriptorProtoMsg): _38.QueryServiceDescriptor;
                    toProto(message: _38.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _38.QueryMethodDescriptor;
                    fromPartial(object: Partial<_38.QueryMethodDescriptor>): _38.QueryMethodDescriptor;
                    fromAmino(object: _38.QueryMethodDescriptorAmino): _38.QueryMethodDescriptor;
                    toAmino(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _38.QueryMethodDescriptorAminoMsg): _38.QueryMethodDescriptor;
                    toAminoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryMethodDescriptorProtoMsg): _38.QueryMethodDescriptor;
                    toProto(message: _38.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _39.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Snapshot;
                    fromPartial(object: Partial<_39.Snapshot>): _39.Snapshot;
                    fromAmino(object: _39.SnapshotAmino): _39.Snapshot;
                    toAmino(message: _39.Snapshot): _39.SnapshotAmino;
                    fromAminoMsg(object: _39.SnapshotAminoMsg): _39.Snapshot;
                    toAminoMsg(message: _39.Snapshot): _39.SnapshotAminoMsg;
                    fromProtoMsg(message: _39.SnapshotProtoMsg): _39.Snapshot;
                    toProto(message: _39.Snapshot): Uint8Array;
                    toProtoMsg(message: _39.Snapshot): _39.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _39.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.Metadata;
                    fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
                    fromAmino(object: _39.MetadataAmino): _39.Metadata;
                    toAmino(message: _39.Metadata): _39.MetadataAmino;
                    fromAminoMsg(object: _39.MetadataAminoMsg): _39.Metadata;
                    toAminoMsg(message: _39.Metadata): _39.MetadataAminoMsg;
                    fromProtoMsg(message: _39.MetadataProtoMsg): _39.Metadata;
                    toProto(message: _39.Metadata): Uint8Array;
                    toProtoMsg(message: _39.Metadata): _39.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotItem;
                    fromPartial(object: Partial<_39.SnapshotItem>): _39.SnapshotItem;
                    fromAmino(object: _39.SnapshotItemAmino): _39.SnapshotItem;
                    toAmino(message: _39.SnapshotItem): _39.SnapshotItemAmino;
                    fromAminoMsg(object: _39.SnapshotItemAminoMsg): _39.SnapshotItem;
                    toAminoMsg(message: _39.SnapshotItem): _39.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotItemProtoMsg): _39.SnapshotItem;
                    toProto(message: _39.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotItem): _39.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotStoreItem;
                    fromPartial(object: Partial<_39.SnapshotStoreItem>): _39.SnapshotStoreItem;
                    fromAmino(object: _39.SnapshotStoreItemAmino): _39.SnapshotStoreItem;
                    toAmino(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _39.SnapshotStoreItemAminoMsg): _39.SnapshotStoreItem;
                    toAminoMsg(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotStoreItemProtoMsg): _39.SnapshotStoreItem;
                    toProto(message: _39.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotIAVLItem;
                    fromPartial(object: Partial<_39.SnapshotIAVLItem>): _39.SnapshotIAVLItem;
                    fromAmino(object: _39.SnapshotIAVLItemAmino): _39.SnapshotIAVLItem;
                    toAmino(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _39.SnapshotIAVLItemAminoMsg): _39.SnapshotIAVLItem;
                    toAminoMsg(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotIAVLItemProtoMsg): _39.SnapshotIAVLItem;
                    toProto(message: _39.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _39.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_39.SnapshotExtensionMeta>): _39.SnapshotExtensionMeta;
                    fromAmino(object: _39.SnapshotExtensionMetaAmino): _39.SnapshotExtensionMeta;
                    toAmino(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _39.SnapshotExtensionMetaAminoMsg): _39.SnapshotExtensionMeta;
                    toAminoMsg(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _39.SnapshotExtensionMetaProtoMsg): _39.SnapshotExtensionMeta;
                    toProto(message: _39.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _39.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _39.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_39.SnapshotExtensionPayload>): _39.SnapshotExtensionPayload;
                    fromAmino(object: _39.SnapshotExtensionPayloadAmino): _39.SnapshotExtensionPayload;
                    toAmino(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _39.SnapshotExtensionPayloadAminoMsg): _39.SnapshotExtensionPayload;
                    toAminoMsg(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _39.SnapshotExtensionPayloadProtoMsg): _39.SnapshotExtensionPayload;
                    toProto(message: _39.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _41.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.StoreKVPair;
                    fromPartial(object: Partial<_41.StoreKVPair>): _41.StoreKVPair;
                    fromAmino(object: _41.StoreKVPairAmino): _41.StoreKVPair;
                    toAmino(message: _41.StoreKVPair): _41.StoreKVPairAmino;
                    fromAminoMsg(object: _41.StoreKVPairAminoMsg): _41.StoreKVPair;
                    toAminoMsg(message: _41.StoreKVPair): _41.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _41.StoreKVPairProtoMsg): _41.StoreKVPair;
                    toProto(message: _41.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _41.StoreKVPair): _41.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _41.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.BlockMetadata;
                    fromPartial(object: Partial<_41.BlockMetadata>): _41.BlockMetadata;
                    fromAmino(object: _41.BlockMetadataAmino): _41.BlockMetadata;
                    toAmino(message: _41.BlockMetadata): _41.BlockMetadataAmino;
                    fromAminoMsg(object: _41.BlockMetadataAminoMsg): _41.BlockMetadata;
                    toAminoMsg(message: _41.BlockMetadata): _41.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _41.BlockMetadataProtoMsg): _41.BlockMetadata;
                    toProto(message: _41.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _41.BlockMetadata): _41.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _41.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _41.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_41.BlockMetadata_DeliverTx>): _41.BlockMetadata_DeliverTx;
                    fromAmino(object: _41.BlockMetadata_DeliverTxAmino): _41.BlockMetadata_DeliverTx;
                    toAmino(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _41.BlockMetadata_DeliverTxAminoMsg): _41.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _41.BlockMetadata_DeliverTxProtoMsg): _41.BlockMetadata_DeliverTx;
                    toProto(message: _41.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _40.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.CommitInfo;
                    fromPartial(object: Partial<_40.CommitInfo>): _40.CommitInfo;
                    fromAmino(object: _40.CommitInfoAmino): _40.CommitInfo;
                    toAmino(message: _40.CommitInfo): _40.CommitInfoAmino;
                    fromAminoMsg(object: _40.CommitInfoAminoMsg): _40.CommitInfo;
                    toAminoMsg(message: _40.CommitInfo): _40.CommitInfoAminoMsg;
                    fromProtoMsg(message: _40.CommitInfoProtoMsg): _40.CommitInfo;
                    toProto(message: _40.CommitInfo): Uint8Array;
                    toProtoMsg(message: _40.CommitInfo): _40.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _40.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.StoreInfo;
                    fromPartial(object: Partial<_40.StoreInfo>): _40.StoreInfo;
                    fromAmino(object: _40.StoreInfoAmino): _40.StoreInfo;
                    toAmino(message: _40.StoreInfo): _40.StoreInfoAmino;
                    fromAminoMsg(object: _40.StoreInfoAminoMsg): _40.StoreInfo;
                    toAminoMsg(message: _40.StoreInfo): _40.StoreInfoAminoMsg;
                    fromProtoMsg(message: _40.StoreInfoProtoMsg): _40.StoreInfo;
                    toProto(message: _40.StoreInfo): Uint8Array;
                    toProtoMsg(message: _40.StoreInfo): _40.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _40.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _40.CommitID;
                    fromPartial(object: Partial<_40.CommitID>): _40.CommitID;
                    fromAmino(object: _40.CommitIDAmino): _40.CommitID;
                    toAmino(message: _40.CommitID): _40.CommitIDAmino;
                    fromAminoMsg(object: _40.CommitIDAminoMsg): _40.CommitID;
                    toAminoMsg(message: _40.CommitID): _40.CommitIDAminoMsg;
                    fromProtoMsg(message: _40.CommitIDProtoMsg): _40.CommitID;
                    toProto(message: _40.CommitID): Uint8Array;
                    toProtoMsg(message: _40.CommitID): _40.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _184.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _42.GetNodeInfoRequest): Promise<_42.GetNodeInfoResponse>;
                    getSyncing(request?: _42.GetSyncingRequest): Promise<_42.GetSyncingResponse>;
                    getLatestBlock(request?: _42.GetLatestBlockRequest): Promise<_42.GetLatestBlockResponse>;
                    getBlockByHeight(request: _42.GetBlockByHeightRequest): Promise<_42.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _42.GetLatestValidatorSetRequest): Promise<_42.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _42.GetValidatorSetByHeightRequest): Promise<_42.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _169.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _42.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightRequest>): _42.GetValidatorSetByHeightRequest;
                    fromAmino(object: _42.GetValidatorSetByHeightRequestAmino): _42.GetValidatorSetByHeightRequest;
                    toAmino(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _42.GetValidatorSetByHeightRequestAminoMsg): _42.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _42.GetValidatorSetByHeightRequestProtoMsg): _42.GetValidatorSetByHeightRequest;
                    toProto(message: _42.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _42.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightResponse>): _42.GetValidatorSetByHeightResponse;
                    fromAmino(object: _42.GetValidatorSetByHeightResponseAmino): _42.GetValidatorSetByHeightResponse;
                    toAmino(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _42.GetValidatorSetByHeightResponseAminoMsg): _42.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _42.GetValidatorSetByHeightResponseProtoMsg): _42.GetValidatorSetByHeightResponse;
                    toProto(message: _42.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _42.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetRequest>): _42.GetLatestValidatorSetRequest;
                    fromAmino(object: _42.GetLatestValidatorSetRequestAmino): _42.GetLatestValidatorSetRequest;
                    toAmino(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _42.GetLatestValidatorSetRequestAminoMsg): _42.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _42.GetLatestValidatorSetRequestProtoMsg): _42.GetLatestValidatorSetRequest;
                    toProto(message: _42.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _42.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetResponse>): _42.GetLatestValidatorSetResponse;
                    fromAmino(object: _42.GetLatestValidatorSetResponseAmino): _42.GetLatestValidatorSetResponse;
                    toAmino(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _42.GetLatestValidatorSetResponseAminoMsg): _42.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _42.GetLatestValidatorSetResponseProtoMsg): _42.GetLatestValidatorSetResponse;
                    toProto(message: _42.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _42.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Validator;
                    fromPartial(object: Partial<_42.Validator>): _42.Validator;
                    fromAmino(object: _42.ValidatorAmino): _42.Validator;
                    toAmino(message: _42.Validator): _42.ValidatorAmino;
                    fromAminoMsg(object: _42.ValidatorAminoMsg): _42.Validator;
                    toAminoMsg(message: _42.Validator): _42.ValidatorAminoMsg;
                    fromProtoMsg(message: _42.ValidatorProtoMsg): _42.Validator;
                    toProto(message: _42.Validator): Uint8Array;
                    toProtoMsg(message: _42.Validator): _42.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _42.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_42.GetBlockByHeightRequest>): _42.GetBlockByHeightRequest;
                    fromAmino(object: _42.GetBlockByHeightRequestAmino): _42.GetBlockByHeightRequest;
                    toAmino(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _42.GetBlockByHeightRequestAminoMsg): _42.GetBlockByHeightRequest;
                    toAminoMsg(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _42.GetBlockByHeightRequestProtoMsg): _42.GetBlockByHeightRequest;
                    toProto(message: _42.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _42.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_42.GetBlockByHeightResponse>): _42.GetBlockByHeightResponse;
                    fromAmino(object: _42.GetBlockByHeightResponseAmino): _42.GetBlockByHeightResponse;
                    toAmino(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _42.GetBlockByHeightResponseAminoMsg): _42.GetBlockByHeightResponse;
                    toAminoMsg(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _42.GetBlockByHeightResponseProtoMsg): _42.GetBlockByHeightResponse;
                    toProto(message: _42.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _42.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetLatestBlockRequest;
                    fromPartial(_: Partial<_42.GetLatestBlockRequest>): _42.GetLatestBlockRequest;
                    fromAmino(_: _42.GetLatestBlockRequestAmino): _42.GetLatestBlockRequest;
                    toAmino(_: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _42.GetLatestBlockRequestAminoMsg): _42.GetLatestBlockRequest;
                    toAminoMsg(message: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _42.GetLatestBlockRequestProtoMsg): _42.GetLatestBlockRequest;
                    toProto(message: _42.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _42.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetLatestBlockResponse;
                    fromPartial(object: Partial<_42.GetLatestBlockResponse>): _42.GetLatestBlockResponse;
                    fromAmino(object: _42.GetLatestBlockResponseAmino): _42.GetLatestBlockResponse;
                    toAmino(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _42.GetLatestBlockResponseAminoMsg): _42.GetLatestBlockResponse;
                    toAminoMsg(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _42.GetLatestBlockResponseProtoMsg): _42.GetLatestBlockResponse;
                    toProto(message: _42.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _42.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetSyncingRequest;
                    fromPartial(_: Partial<_42.GetSyncingRequest>): _42.GetSyncingRequest;
                    fromAmino(_: _42.GetSyncingRequestAmino): _42.GetSyncingRequest;
                    toAmino(_: _42.GetSyncingRequest): _42.GetSyncingRequestAmino;
                    fromAminoMsg(object: _42.GetSyncingRequestAminoMsg): _42.GetSyncingRequest;
                    toAminoMsg(message: _42.GetSyncingRequest): _42.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _42.GetSyncingRequestProtoMsg): _42.GetSyncingRequest;
                    toProto(message: _42.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _42.GetSyncingRequest): _42.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _42.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetSyncingResponse;
                    fromPartial(object: Partial<_42.GetSyncingResponse>): _42.GetSyncingResponse;
                    fromAmino(object: _42.GetSyncingResponseAmino): _42.GetSyncingResponse;
                    toAmino(message: _42.GetSyncingResponse): _42.GetSyncingResponseAmino;
                    fromAminoMsg(object: _42.GetSyncingResponseAminoMsg): _42.GetSyncingResponse;
                    toAminoMsg(message: _42.GetSyncingResponse): _42.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _42.GetSyncingResponseProtoMsg): _42.GetSyncingResponse;
                    toProto(message: _42.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _42.GetSyncingResponse): _42.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _42.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _42.GetNodeInfoRequest;
                    fromPartial(_: Partial<_42.GetNodeInfoRequest>): _42.GetNodeInfoRequest;
                    fromAmino(_: _42.GetNodeInfoRequestAmino): _42.GetNodeInfoRequest;
                    toAmino(_: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _42.GetNodeInfoRequestAminoMsg): _42.GetNodeInfoRequest;
                    toAminoMsg(message: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _42.GetNodeInfoRequestProtoMsg): _42.GetNodeInfoRequest;
                    toProto(message: _42.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _42.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.GetNodeInfoResponse;
                    fromPartial(object: Partial<_42.GetNodeInfoResponse>): _42.GetNodeInfoResponse;
                    fromAmino(object: _42.GetNodeInfoResponseAmino): _42.GetNodeInfoResponse;
                    toAmino(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _42.GetNodeInfoResponseAminoMsg): _42.GetNodeInfoResponse;
                    toAminoMsg(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _42.GetNodeInfoResponseProtoMsg): _42.GetNodeInfoResponse;
                    toProto(message: _42.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _42.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.VersionInfo;
                    fromPartial(object: Partial<_42.VersionInfo>): _42.VersionInfo;
                    fromAmino(object: _42.VersionInfoAmino): _42.VersionInfo;
                    toAmino(message: _42.VersionInfo): _42.VersionInfoAmino;
                    fromAminoMsg(object: _42.VersionInfoAminoMsg): _42.VersionInfo;
                    toAminoMsg(message: _42.VersionInfo): _42.VersionInfoAminoMsg;
                    fromProtoMsg(message: _42.VersionInfoProtoMsg): _42.VersionInfo;
                    toProto(message: _42.VersionInfo): Uint8Array;
                    toProtoMsg(message: _42.VersionInfo): _42.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _42.Module;
                    fromPartial(object: Partial<_42.Module>): _42.Module;
                    fromAmino(object: _42.ModuleAmino): _42.Module;
                    toAmino(message: _42.Module): _42.ModuleAmino;
                    fromAminoMsg(object: _42.ModuleAminoMsg): _42.Module;
                    toAminoMsg(message: _42.Module): _42.ModuleAminoMsg;
                    fromProtoMsg(message: _42.ModuleProtoMsg): _42.Module;
                    toProto(message: _42.Module): Uint8Array;
                    toProtoMsg(message: _42.Module): _42.ModuleProtoMsg;
                };
            };
        }
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _45.QueryAccountsRequest): Promise<_45.QueryAccountsResponse>;
                account(request: _45.QueryAccountRequest): Promise<_45.QueryAccountResponse>;
                params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                moduleAccountByName(request: _45.QueryModuleAccountByNameRequest): Promise<_45.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _45.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryAccountsRequest;
                fromPartial(object: Partial<_45.QueryAccountsRequest>): _45.QueryAccountsRequest;
                fromAmino(object: _45.QueryAccountsRequestAmino): _45.QueryAccountsRequest;
                toAmino(message: _45.QueryAccountsRequest): _45.QueryAccountsRequestAmino;
                fromAminoMsg(object: _45.QueryAccountsRequestAminoMsg): _45.QueryAccountsRequest;
                toAminoMsg(message: _45.QueryAccountsRequest): _45.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAccountsRequestProtoMsg): _45.QueryAccountsRequest;
                toProto(message: _45.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAccountsRequest): _45.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _45.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryAccountsResponse;
                fromPartial(object: Partial<_45.QueryAccountsResponse>): _45.QueryAccountsResponse;
                fromAmino(object: _45.QueryAccountsResponseAmino): _45.QueryAccountsResponse;
                toAmino(message: _45.QueryAccountsResponse): _45.QueryAccountsResponseAmino;
                fromAminoMsg(object: _45.QueryAccountsResponseAminoMsg): _45.QueryAccountsResponse;
                toAminoMsg(message: _45.QueryAccountsResponse): _45.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAccountsResponseProtoMsg): _45.QueryAccountsResponse;
                toProto(message: _45.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAccountsResponse): _45.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _45.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryAccountRequest;
                fromPartial(object: Partial<_45.QueryAccountRequest>): _45.QueryAccountRequest;
                fromAmino(object: _45.QueryAccountRequestAmino): _45.QueryAccountRequest;
                toAmino(message: _45.QueryAccountRequest): _45.QueryAccountRequestAmino;
                fromAminoMsg(object: _45.QueryAccountRequestAminoMsg): _45.QueryAccountRequest;
                toAminoMsg(message: _45.QueryAccountRequest): _45.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _45.QueryAccountRequestProtoMsg): _45.QueryAccountRequest;
                toProto(message: _45.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _45.QueryAccountRequest): _45.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _45.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryAccountResponse;
                fromPartial(object: Partial<_45.QueryAccountResponse>): _45.QueryAccountResponse;
                fromAmino(object: _45.QueryAccountResponseAmino): _45.QueryAccountResponse;
                toAmino(message: _45.QueryAccountResponse): _45.QueryAccountResponseAmino;
                fromAminoMsg(object: _45.QueryAccountResponseAminoMsg): _45.QueryAccountResponse;
                toAminoMsg(message: _45.QueryAccountResponse): _45.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _45.QueryAccountResponseProtoMsg): _45.QueryAccountResponse;
                toProto(message: _45.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _45.QueryAccountResponse): _45.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _45.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _45.QueryParamsRequest;
                fromPartial(_: Partial<_45.QueryParamsRequest>): _45.QueryParamsRequest;
                fromAmino(_: _45.QueryParamsRequestAmino): _45.QueryParamsRequest;
                toAmino(_: _45.QueryParamsRequest): _45.QueryParamsRequestAmino;
                fromAminoMsg(object: _45.QueryParamsRequestAminoMsg): _45.QueryParamsRequest;
                toAminoMsg(message: _45.QueryParamsRequest): _45.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _45.QueryParamsRequestProtoMsg): _45.QueryParamsRequest;
                toProto(message: _45.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryParamsRequest): _45.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _45.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryParamsResponse;
                fromPartial(object: Partial<_45.QueryParamsResponse>): _45.QueryParamsResponse;
                fromAmino(object: _45.QueryParamsResponseAmino): _45.QueryParamsResponse;
                toAmino(message: _45.QueryParamsResponse): _45.QueryParamsResponseAmino;
                fromAminoMsg(object: _45.QueryParamsResponseAminoMsg): _45.QueryParamsResponse;
                toAminoMsg(message: _45.QueryParamsResponse): _45.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _45.QueryParamsResponseProtoMsg): _45.QueryParamsResponse;
                toProto(message: _45.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryParamsResponse): _45.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _45.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_45.QueryModuleAccountByNameRequest>): _45.QueryModuleAccountByNameRequest;
                fromAmino(object: _45.QueryModuleAccountByNameRequestAmino): _45.QueryModuleAccountByNameRequest;
                toAmino(message: _45.QueryModuleAccountByNameRequest): _45.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _45.QueryModuleAccountByNameRequestAminoMsg): _45.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _45.QueryModuleAccountByNameRequest): _45.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _45.QueryModuleAccountByNameRequestProtoMsg): _45.QueryModuleAccountByNameRequest;
                toProto(message: _45.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _45.QueryModuleAccountByNameRequest): _45.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _45.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_45.QueryModuleAccountByNameResponse>): _45.QueryModuleAccountByNameResponse;
                fromAmino(object: _45.QueryModuleAccountByNameResponseAmino): _45.QueryModuleAccountByNameResponse;
                toAmino(message: _45.QueryModuleAccountByNameResponse): _45.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _45.QueryModuleAccountByNameResponseAminoMsg): _45.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _45.QueryModuleAccountByNameResponse): _45.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _45.QueryModuleAccountByNameResponseProtoMsg): _45.QueryModuleAccountByNameResponse;
                toProto(message: _45.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _45.QueryModuleAccountByNameResponse): _45.QueryModuleAccountByNameResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _43.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _43.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
            BaseAccount: {
                typeUrl: string;
                encode(message: _43.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.BaseAccount;
                fromPartial(object: Partial<_43.BaseAccount>): _43.BaseAccount;
                fromAmino(object: _43.BaseAccountAmino): _43.BaseAccount;
                toAmino(message: _43.BaseAccount): _43.BaseAccountAmino;
                fromAminoMsg(object: _43.BaseAccountAminoMsg): _43.BaseAccount;
                toAminoMsg(message: _43.BaseAccount): _43.BaseAccountAminoMsg;
                fromProtoMsg(message: _43.BaseAccountProtoMsg): _43.BaseAccount;
                toProto(message: _43.BaseAccount): Uint8Array;
                toProtoMsg(message: _43.BaseAccount): _43.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _43.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.ModuleAccount;
                fromPartial(object: Partial<_43.ModuleAccount>): _43.ModuleAccount;
                fromAmino(object: _43.ModuleAccountAmino): _43.ModuleAccount;
                toAmino(message: _43.ModuleAccount): _43.ModuleAccountAmino;
                fromAminoMsg(object: _43.ModuleAccountAminoMsg): _43.ModuleAccount;
                toAminoMsg(message: _43.ModuleAccount): _43.ModuleAccountAminoMsg;
                fromProtoMsg(message: _43.ModuleAccountProtoMsg): _43.ModuleAccount;
                toProto(message: _43.ModuleAccount): Uint8Array;
                toProtoMsg(message: _43.ModuleAccount): _43.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _43.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.Params;
                fromPartial(object: Partial<_43.Params>): _43.Params;
                fromAmino(object: _43.ParamsAmino): _43.Params;
                toAmino(message: _43.Params): _43.ParamsAmino;
                fromAminoMsg(object: _43.ParamsAminoMsg): _43.Params;
                toAminoMsg(message: _43.Params): _43.ParamsAminoMsg;
                fromProtoMsg(message: _43.ParamsProtoMsg): _43.Params;
                toProto(message: _43.Params): Uint8Array;
                toProtoMsg(message: _43.Params): _43.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _195.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _49.QueryGrantsRequest): Promise<_49.QueryGrantsResponse>;
                granterGrants(request: _49.QueryGranterGrantsRequest): Promise<_49.QueryGranterGrantsResponse>;
                granteeGrants(request: _49.QueryGranteeGrantsRequest): Promise<_49.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _50.MsgGrant): {
                        typeUrl: string;
                        value: _50.MsgGrant;
                    };
                    exec(value: _50.MsgExec): {
                        typeUrl: string;
                        value: _50.MsgExec;
                    };
                    revoke(value: _50.MsgRevoke): {
                        typeUrl: string;
                        value: _50.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _50.MsgGrant) => _50.MsgGrantAmino;
                    fromAmino: (object: _50.MsgGrantAmino) => _50.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _50.MsgExec) => _50.MsgExecAmino;
                    fromAmino: (object: _50.MsgExecAmino) => _50.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _50.MsgRevoke) => _50.MsgRevokeAmino;
                    fromAmino: (object: _50.MsgRevokeAmino) => _50.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _50.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgGrant;
                fromPartial(object: Partial<_50.MsgGrant>): _50.MsgGrant;
                fromAmino(object: _50.MsgGrantAmino): _50.MsgGrant;
                toAmino(message: _50.MsgGrant): _50.MsgGrantAmino;
                fromAminoMsg(object: _50.MsgGrantAminoMsg): _50.MsgGrant;
                toAminoMsg(message: _50.MsgGrant): _50.MsgGrantAminoMsg;
                fromProtoMsg(message: _50.MsgGrantProtoMsg): _50.MsgGrant;
                toProto(message: _50.MsgGrant): Uint8Array;
                toProtoMsg(message: _50.MsgGrant): _50.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _50.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgExecResponse;
                fromPartial(object: Partial<_50.MsgExecResponse>): _50.MsgExecResponse;
                fromAmino(object: _50.MsgExecResponseAmino): _50.MsgExecResponse;
                toAmino(message: _50.MsgExecResponse): _50.MsgExecResponseAmino;
                fromAminoMsg(object: _50.MsgExecResponseAminoMsg): _50.MsgExecResponse;
                toAminoMsg(message: _50.MsgExecResponse): _50.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _50.MsgExecResponseProtoMsg): _50.MsgExecResponse;
                toProto(message: _50.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _50.MsgExecResponse): _50.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _50.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgExec;
                fromPartial(object: Partial<_50.MsgExec>): _50.MsgExec;
                fromAmino(object: _50.MsgExecAmino): _50.MsgExec;
                toAmino(message: _50.MsgExec): _50.MsgExecAmino;
                fromAminoMsg(object: _50.MsgExecAminoMsg): _50.MsgExec;
                toAminoMsg(message: _50.MsgExec): _50.MsgExecAminoMsg;
                fromProtoMsg(message: _50.MsgExecProtoMsg): _50.MsgExec;
                toProto(message: _50.MsgExec): Uint8Array;
                toProtoMsg(message: _50.MsgExec): _50.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _50.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgGrantResponse;
                fromPartial(_: Partial<_50.MsgGrantResponse>): _50.MsgGrantResponse;
                fromAmino(_: _50.MsgGrantResponseAmino): _50.MsgGrantResponse;
                toAmino(_: _50.MsgGrantResponse): _50.MsgGrantResponseAmino;
                fromAminoMsg(object: _50.MsgGrantResponseAminoMsg): _50.MsgGrantResponse;
                toAminoMsg(message: _50.MsgGrantResponse): _50.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _50.MsgGrantResponseProtoMsg): _50.MsgGrantResponse;
                toProto(message: _50.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _50.MsgGrantResponse): _50.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _50.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgRevoke;
                fromPartial(object: Partial<_50.MsgRevoke>): _50.MsgRevoke;
                fromAmino(object: _50.MsgRevokeAmino): _50.MsgRevoke;
                toAmino(message: _50.MsgRevoke): _50.MsgRevokeAmino;
                fromAminoMsg(object: _50.MsgRevokeAminoMsg): _50.MsgRevoke;
                toAminoMsg(message: _50.MsgRevoke): _50.MsgRevokeAminoMsg;
                fromProtoMsg(message: _50.MsgRevokeProtoMsg): _50.MsgRevoke;
                toProto(message: _50.MsgRevoke): Uint8Array;
                toProtoMsg(message: _50.MsgRevoke): _50.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _50.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgRevokeResponse;
                fromPartial(_: Partial<_50.MsgRevokeResponse>): _50.MsgRevokeResponse;
                fromAmino(_: _50.MsgRevokeResponseAmino): _50.MsgRevokeResponse;
                toAmino(_: _50.MsgRevokeResponse): _50.MsgRevokeResponseAmino;
                fromAminoMsg(object: _50.MsgRevokeResponseAminoMsg): _50.MsgRevokeResponse;
                toAminoMsg(message: _50.MsgRevokeResponse): _50.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _50.MsgRevokeResponseProtoMsg): _50.MsgRevokeResponse;
                toProto(message: _50.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _50.MsgRevokeResponse): _50.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _49.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryGrantsRequest;
                fromPartial(object: Partial<_49.QueryGrantsRequest>): _49.QueryGrantsRequest;
                fromAmino(object: _49.QueryGrantsRequestAmino): _49.QueryGrantsRequest;
                toAmino(message: _49.QueryGrantsRequest): _49.QueryGrantsRequestAmino;
                fromAminoMsg(object: _49.QueryGrantsRequestAminoMsg): _49.QueryGrantsRequest;
                toAminoMsg(message: _49.QueryGrantsRequest): _49.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryGrantsRequestProtoMsg): _49.QueryGrantsRequest;
                toProto(message: _49.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryGrantsRequest): _49.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _49.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryGrantsResponse;
                fromPartial(object: Partial<_49.QueryGrantsResponse>): _49.QueryGrantsResponse;
                fromAmino(object: _49.QueryGrantsResponseAmino): _49.QueryGrantsResponse;
                toAmino(message: _49.QueryGrantsResponse): _49.QueryGrantsResponseAmino;
                fromAminoMsg(object: _49.QueryGrantsResponseAminoMsg): _49.QueryGrantsResponse;
                toAminoMsg(message: _49.QueryGrantsResponse): _49.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryGrantsResponseProtoMsg): _49.QueryGrantsResponse;
                toProto(message: _49.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryGrantsResponse): _49.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _49.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_49.QueryGranterGrantsRequest>): _49.QueryGranterGrantsRequest;
                fromAmino(object: _49.QueryGranterGrantsRequestAmino): _49.QueryGranterGrantsRequest;
                toAmino(message: _49.QueryGranterGrantsRequest): _49.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _49.QueryGranterGrantsRequestAminoMsg): _49.QueryGranterGrantsRequest;
                toAminoMsg(message: _49.QueryGranterGrantsRequest): _49.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryGranterGrantsRequestProtoMsg): _49.QueryGranterGrantsRequest;
                toProto(message: _49.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryGranterGrantsRequest): _49.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _49.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_49.QueryGranterGrantsResponse>): _49.QueryGranterGrantsResponse;
                fromAmino(object: _49.QueryGranterGrantsResponseAmino): _49.QueryGranterGrantsResponse;
                toAmino(message: _49.QueryGranterGrantsResponse): _49.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _49.QueryGranterGrantsResponseAminoMsg): _49.QueryGranterGrantsResponse;
                toAminoMsg(message: _49.QueryGranterGrantsResponse): _49.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryGranterGrantsResponseProtoMsg): _49.QueryGranterGrantsResponse;
                toProto(message: _49.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryGranterGrantsResponse): _49.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _49.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_49.QueryGranteeGrantsRequest>): _49.QueryGranteeGrantsRequest;
                fromAmino(object: _49.QueryGranteeGrantsRequestAmino): _49.QueryGranteeGrantsRequest;
                toAmino(message: _49.QueryGranteeGrantsRequest): _49.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _49.QueryGranteeGrantsRequestAminoMsg): _49.QueryGranteeGrantsRequest;
                toAminoMsg(message: _49.QueryGranteeGrantsRequest): _49.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryGranteeGrantsRequestProtoMsg): _49.QueryGranteeGrantsRequest;
                toProto(message: _49.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryGranteeGrantsRequest): _49.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _49.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_49.QueryGranteeGrantsResponse>): _49.QueryGranteeGrantsResponse;
                fromAmino(object: _49.QueryGranteeGrantsResponseAmino): _49.QueryGranteeGrantsResponse;
                toAmino(message: _49.QueryGranteeGrantsResponse): _49.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _49.QueryGranteeGrantsResponseAminoMsg): _49.QueryGranteeGrantsResponse;
                toAminoMsg(message: _49.QueryGranteeGrantsResponse): _49.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryGranteeGrantsResponseProtoMsg): _49.QueryGranteeGrantsResponse;
                toProto(message: _49.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryGranteeGrantsResponse): _49.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _48.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.GenesisState;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
                fromAmino(object: _48.GenesisStateAmino): _48.GenesisState;
                toAmino(message: _48.GenesisState): _48.GenesisStateAmino;
                fromAminoMsg(object: _48.GenesisStateAminoMsg): _48.GenesisState;
                toAminoMsg(message: _48.GenesisState): _48.GenesisStateAminoMsg;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _47.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.EventGrant;
                fromPartial(object: Partial<_47.EventGrant>): _47.EventGrant;
                fromAmino(object: _47.EventGrantAmino): _47.EventGrant;
                toAmino(message: _47.EventGrant): _47.EventGrantAmino;
                fromAminoMsg(object: _47.EventGrantAminoMsg): _47.EventGrant;
                toAminoMsg(message: _47.EventGrant): _47.EventGrantAminoMsg;
                fromProtoMsg(message: _47.EventGrantProtoMsg): _47.EventGrant;
                toProto(message: _47.EventGrant): Uint8Array;
                toProtoMsg(message: _47.EventGrant): _47.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _47.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.EventRevoke;
                fromPartial(object: Partial<_47.EventRevoke>): _47.EventRevoke;
                fromAmino(object: _47.EventRevokeAmino): _47.EventRevoke;
                toAmino(message: _47.EventRevoke): _47.EventRevokeAmino;
                fromAminoMsg(object: _47.EventRevokeAminoMsg): _47.EventRevoke;
                toAminoMsg(message: _47.EventRevoke): _47.EventRevokeAminoMsg;
                fromProtoMsg(message: _47.EventRevokeProtoMsg): _47.EventRevoke;
                toProto(message: _47.EventRevoke): Uint8Array;
                toProtoMsg(message: _47.EventRevoke): _47.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _46.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.GenericAuthorization;
                fromPartial(object: Partial<_46.GenericAuthorization>): _46.GenericAuthorization;
                fromAmino(object: _46.GenericAuthorizationAmino): _46.GenericAuthorization;
                toAmino(message: _46.GenericAuthorization): _46.GenericAuthorizationAmino;
                fromAminoMsg(object: _46.GenericAuthorizationAminoMsg): _46.GenericAuthorization;
                toAminoMsg(message: _46.GenericAuthorization): _46.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _46.GenericAuthorizationProtoMsg): _46.GenericAuthorization;
                toProto(message: _46.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _46.GenericAuthorization): _46.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _46.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Grant;
                fromPartial(object: Partial<_46.Grant>): _46.Grant;
                fromAmino(object: _46.GrantAmino): _46.Grant;
                toAmino(message: _46.Grant): _46.GrantAmino;
                fromAminoMsg(object: _46.GrantAminoMsg): _46.Grant;
                toAminoMsg(message: _46.Grant): _46.GrantAminoMsg;
                fromProtoMsg(message: _46.GrantProtoMsg): _46.Grant;
                toProto(message: _46.Grant): Uint8Array;
                toProtoMsg(message: _46.Grant): _46.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _46.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.GrantAuthorization;
                fromPartial(object: Partial<_46.GrantAuthorization>): _46.GrantAuthorization;
                fromAmino(object: _46.GrantAuthorizationAmino): _46.GrantAuthorization;
                toAmino(message: _46.GrantAuthorization): _46.GrantAuthorizationAmino;
                fromAminoMsg(object: _46.GrantAuthorizationAminoMsg): _46.GrantAuthorization;
                toAminoMsg(message: _46.GrantAuthorization): _46.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _46.GrantAuthorizationProtoMsg): _46.GrantAuthorization;
                toProto(message: _46.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _46.GrantAuthorization): _46.GrantAuthorizationProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _51.SendAuthorization | _90.StakeAuthorization | _46.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _54.QueryBalanceRequest): Promise<_54.QueryBalanceResponse>;
                allBalances(request: _54.QueryAllBalancesRequest): Promise<_54.QueryAllBalancesResponse>;
                spendableBalances(request: _54.QuerySpendableBalancesRequest): Promise<_54.QuerySpendableBalancesResponse>;
                totalSupply(request?: _54.QueryTotalSupplyRequest): Promise<_54.QueryTotalSupplyResponse>;
                supplyOf(request: _54.QuerySupplyOfRequest): Promise<_54.QuerySupplyOfResponse>;
                params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                denomMetadata(request: _54.QueryDenomMetadataRequest): Promise<_54.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _54.QueryDenomsMetadataRequest): Promise<_54.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _55.MsgSend): {
                        typeUrl: string;
                        value: _55.MsgSend;
                    };
                    multiSend(value: _55.MsgMultiSend): {
                        typeUrl: string;
                        value: _55.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _55.MsgSend) => _55.MsgSendAmino;
                    fromAmino: (object: _55.MsgSendAmino) => _55.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _55.MsgMultiSend) => _55.MsgMultiSendAmino;
                    fromAmino: (object: _55.MsgMultiSendAmino) => _55.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _55.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgSend;
                fromPartial(object: Partial<_55.MsgSend>): _55.MsgSend;
                fromAmino(object: _55.MsgSendAmino): _55.MsgSend;
                toAmino(message: _55.MsgSend): _55.MsgSendAmino;
                fromAminoMsg(object: _55.MsgSendAminoMsg): _55.MsgSend;
                toAminoMsg(message: _55.MsgSend): _55.MsgSendAminoMsg;
                fromProtoMsg(message: _55.MsgSendProtoMsg): _55.MsgSend;
                toProto(message: _55.MsgSend): Uint8Array;
                toProtoMsg(message: _55.MsgSend): _55.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _55.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgSendResponse;
                fromPartial(_: Partial<_55.MsgSendResponse>): _55.MsgSendResponse;
                fromAmino(_: _55.MsgSendResponseAmino): _55.MsgSendResponse;
                toAmino(_: _55.MsgSendResponse): _55.MsgSendResponseAmino;
                fromAminoMsg(object: _55.MsgSendResponseAminoMsg): _55.MsgSendResponse;
                toAminoMsg(message: _55.MsgSendResponse): _55.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _55.MsgSendResponseProtoMsg): _55.MsgSendResponse;
                toProto(message: _55.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _55.MsgSendResponse): _55.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _55.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.MsgMultiSend;
                fromPartial(object: Partial<_55.MsgMultiSend>): _55.MsgMultiSend;
                fromAmino(object: _55.MsgMultiSendAmino): _55.MsgMultiSend;
                toAmino(message: _55.MsgMultiSend): _55.MsgMultiSendAmino;
                fromAminoMsg(object: _55.MsgMultiSendAminoMsg): _55.MsgMultiSend;
                toAminoMsg(message: _55.MsgMultiSend): _55.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _55.MsgMultiSendProtoMsg): _55.MsgMultiSend;
                toProto(message: _55.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _55.MsgMultiSend): _55.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _55.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _55.MsgMultiSendResponse;
                fromPartial(_: Partial<_55.MsgMultiSendResponse>): _55.MsgMultiSendResponse;
                fromAmino(_: _55.MsgMultiSendResponseAmino): _55.MsgMultiSendResponse;
                toAmino(_: _55.MsgMultiSendResponse): _55.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _55.MsgMultiSendResponseAminoMsg): _55.MsgMultiSendResponse;
                toAminoMsg(message: _55.MsgMultiSendResponse): _55.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _55.MsgMultiSendResponseProtoMsg): _55.MsgMultiSendResponse;
                toProto(message: _55.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _55.MsgMultiSendResponse): _55.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _54.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryBalanceRequest;
                fromPartial(object: Partial<_54.QueryBalanceRequest>): _54.QueryBalanceRequest;
                fromAmino(object: _54.QueryBalanceRequestAmino): _54.QueryBalanceRequest;
                toAmino(message: _54.QueryBalanceRequest): _54.QueryBalanceRequestAmino;
                fromAminoMsg(object: _54.QueryBalanceRequestAminoMsg): _54.QueryBalanceRequest;
                toAminoMsg(message: _54.QueryBalanceRequest): _54.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _54.QueryBalanceRequestProtoMsg): _54.QueryBalanceRequest;
                toProto(message: _54.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _54.QueryBalanceRequest): _54.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _54.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryBalanceResponse;
                fromPartial(object: Partial<_54.QueryBalanceResponse>): _54.QueryBalanceResponse;
                fromAmino(object: _54.QueryBalanceResponseAmino): _54.QueryBalanceResponse;
                toAmino(message: _54.QueryBalanceResponse): _54.QueryBalanceResponseAmino;
                fromAminoMsg(object: _54.QueryBalanceResponseAminoMsg): _54.QueryBalanceResponse;
                toAminoMsg(message: _54.QueryBalanceResponse): _54.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _54.QueryBalanceResponseProtoMsg): _54.QueryBalanceResponse;
                toProto(message: _54.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _54.QueryBalanceResponse): _54.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _54.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryAllBalancesRequest;
                fromPartial(object: Partial<_54.QueryAllBalancesRequest>): _54.QueryAllBalancesRequest;
                fromAmino(object: _54.QueryAllBalancesRequestAmino): _54.QueryAllBalancesRequest;
                toAmino(message: _54.QueryAllBalancesRequest): _54.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _54.QueryAllBalancesRequestAminoMsg): _54.QueryAllBalancesRequest;
                toAminoMsg(message: _54.QueryAllBalancesRequest): _54.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _54.QueryAllBalancesRequestProtoMsg): _54.QueryAllBalancesRequest;
                toProto(message: _54.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _54.QueryAllBalancesRequest): _54.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _54.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryAllBalancesResponse;
                fromPartial(object: Partial<_54.QueryAllBalancesResponse>): _54.QueryAllBalancesResponse;
                fromAmino(object: _54.QueryAllBalancesResponseAmino): _54.QueryAllBalancesResponse;
                toAmino(message: _54.QueryAllBalancesResponse): _54.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _54.QueryAllBalancesResponseAminoMsg): _54.QueryAllBalancesResponse;
                toAminoMsg(message: _54.QueryAllBalancesResponse): _54.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _54.QueryAllBalancesResponseProtoMsg): _54.QueryAllBalancesResponse;
                toProto(message: _54.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _54.QueryAllBalancesResponse): _54.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _54.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_54.QuerySpendableBalancesRequest>): _54.QuerySpendableBalancesRequest;
                fromAmino(object: _54.QuerySpendableBalancesRequestAmino): _54.QuerySpendableBalancesRequest;
                toAmino(message: _54.QuerySpendableBalancesRequest): _54.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _54.QuerySpendableBalancesRequestAminoMsg): _54.QuerySpendableBalancesRequest;
                toAminoMsg(message: _54.QuerySpendableBalancesRequest): _54.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _54.QuerySpendableBalancesRequestProtoMsg): _54.QuerySpendableBalancesRequest;
                toProto(message: _54.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _54.QuerySpendableBalancesRequest): _54.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _54.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_54.QuerySpendableBalancesResponse>): _54.QuerySpendableBalancesResponse;
                fromAmino(object: _54.QuerySpendableBalancesResponseAmino): _54.QuerySpendableBalancesResponse;
                toAmino(message: _54.QuerySpendableBalancesResponse): _54.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _54.QuerySpendableBalancesResponseAminoMsg): _54.QuerySpendableBalancesResponse;
                toAminoMsg(message: _54.QuerySpendableBalancesResponse): _54.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _54.QuerySpendableBalancesResponseProtoMsg): _54.QuerySpendableBalancesResponse;
                toProto(message: _54.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _54.QuerySpendableBalancesResponse): _54.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _54.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_54.QueryTotalSupplyRequest>): _54.QueryTotalSupplyRequest;
                fromAmino(object: _54.QueryTotalSupplyRequestAmino): _54.QueryTotalSupplyRequest;
                toAmino(message: _54.QueryTotalSupplyRequest): _54.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _54.QueryTotalSupplyRequestAminoMsg): _54.QueryTotalSupplyRequest;
                toAminoMsg(message: _54.QueryTotalSupplyRequest): _54.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _54.QueryTotalSupplyRequestProtoMsg): _54.QueryTotalSupplyRequest;
                toProto(message: _54.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _54.QueryTotalSupplyRequest): _54.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _54.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_54.QueryTotalSupplyResponse>): _54.QueryTotalSupplyResponse;
                fromAmino(object: _54.QueryTotalSupplyResponseAmino): _54.QueryTotalSupplyResponse;
                toAmino(message: _54.QueryTotalSupplyResponse): _54.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _54.QueryTotalSupplyResponseAminoMsg): _54.QueryTotalSupplyResponse;
                toAminoMsg(message: _54.QueryTotalSupplyResponse): _54.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _54.QueryTotalSupplyResponseProtoMsg): _54.QueryTotalSupplyResponse;
                toProto(message: _54.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _54.QueryTotalSupplyResponse): _54.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _54.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QuerySupplyOfRequest;
                fromPartial(object: Partial<_54.QuerySupplyOfRequest>): _54.QuerySupplyOfRequest;
                fromAmino(object: _54.QuerySupplyOfRequestAmino): _54.QuerySupplyOfRequest;
                toAmino(message: _54.QuerySupplyOfRequest): _54.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _54.QuerySupplyOfRequestAminoMsg): _54.QuerySupplyOfRequest;
                toAminoMsg(message: _54.QuerySupplyOfRequest): _54.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _54.QuerySupplyOfRequestProtoMsg): _54.QuerySupplyOfRequest;
                toProto(message: _54.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _54.QuerySupplyOfRequest): _54.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _54.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QuerySupplyOfResponse;
                fromPartial(object: Partial<_54.QuerySupplyOfResponse>): _54.QuerySupplyOfResponse;
                fromAmino(object: _54.QuerySupplyOfResponseAmino): _54.QuerySupplyOfResponse;
                toAmino(message: _54.QuerySupplyOfResponse): _54.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _54.QuerySupplyOfResponseAminoMsg): _54.QuerySupplyOfResponse;
                toAminoMsg(message: _54.QuerySupplyOfResponse): _54.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _54.QuerySupplyOfResponseProtoMsg): _54.QuerySupplyOfResponse;
                toProto(message: _54.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _54.QuerySupplyOfResponse): _54.QuerySupplyOfResponseProtoMsg;
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
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _54.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_54.QueryDenomsMetadataRequest>): _54.QueryDenomsMetadataRequest;
                fromAmino(object: _54.QueryDenomsMetadataRequestAmino): _54.QueryDenomsMetadataRequest;
                toAmino(message: _54.QueryDenomsMetadataRequest): _54.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _54.QueryDenomsMetadataRequestAminoMsg): _54.QueryDenomsMetadataRequest;
                toAminoMsg(message: _54.QueryDenomsMetadataRequest): _54.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDenomsMetadataRequestProtoMsg): _54.QueryDenomsMetadataRequest;
                toProto(message: _54.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDenomsMetadataRequest): _54.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _54.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_54.QueryDenomsMetadataResponse>): _54.QueryDenomsMetadataResponse;
                fromAmino(object: _54.QueryDenomsMetadataResponseAmino): _54.QueryDenomsMetadataResponse;
                toAmino(message: _54.QueryDenomsMetadataResponse): _54.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _54.QueryDenomsMetadataResponseAminoMsg): _54.QueryDenomsMetadataResponse;
                toAminoMsg(message: _54.QueryDenomsMetadataResponse): _54.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDenomsMetadataResponseProtoMsg): _54.QueryDenomsMetadataResponse;
                toProto(message: _54.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDenomsMetadataResponse): _54.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _54.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_54.QueryDenomMetadataRequest>): _54.QueryDenomMetadataRequest;
                fromAmino(object: _54.QueryDenomMetadataRequestAmino): _54.QueryDenomMetadataRequest;
                toAmino(message: _54.QueryDenomMetadataRequest): _54.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _54.QueryDenomMetadataRequestAminoMsg): _54.QueryDenomMetadataRequest;
                toAminoMsg(message: _54.QueryDenomMetadataRequest): _54.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDenomMetadataRequestProtoMsg): _54.QueryDenomMetadataRequest;
                toProto(message: _54.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDenomMetadataRequest): _54.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _54.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_54.QueryDenomMetadataResponse>): _54.QueryDenomMetadataResponse;
                fromAmino(object: _54.QueryDenomMetadataResponseAmino): _54.QueryDenomMetadataResponse;
                toAmino(message: _54.QueryDenomMetadataResponse): _54.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _54.QueryDenomMetadataResponseAminoMsg): _54.QueryDenomMetadataResponse;
                toAminoMsg(message: _54.QueryDenomMetadataResponse): _54.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDenomMetadataResponseProtoMsg): _54.QueryDenomMetadataResponse;
                toProto(message: _54.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDenomMetadataResponse): _54.QueryDenomMetadataResponseProtoMsg;
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
            Balance: {
                typeUrl: string;
                encode(message: _53.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.Balance;
                fromPartial(object: Partial<_53.Balance>): _53.Balance;
                fromAmino(object: _53.BalanceAmino): _53.Balance;
                toAmino(message: _53.Balance): _53.BalanceAmino;
                fromAminoMsg(object: _53.BalanceAminoMsg): _53.Balance;
                toAminoMsg(message: _53.Balance): _53.BalanceAminoMsg;
                fromProtoMsg(message: _53.BalanceProtoMsg): _53.Balance;
                toProto(message: _53.Balance): Uint8Array;
                toProtoMsg(message: _53.Balance): _53.BalanceProtoMsg;
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
            SendEnabled: {
                typeUrl: string;
                encode(message: _52.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.SendEnabled;
                fromPartial(object: Partial<_52.SendEnabled>): _52.SendEnabled;
                fromAmino(object: _52.SendEnabledAmino): _52.SendEnabled;
                toAmino(message: _52.SendEnabled): _52.SendEnabledAmino;
                fromAminoMsg(object: _52.SendEnabledAminoMsg): _52.SendEnabled;
                toAminoMsg(message: _52.SendEnabled): _52.SendEnabledAminoMsg;
                fromProtoMsg(message: _52.SendEnabledProtoMsg): _52.SendEnabled;
                toProto(message: _52.SendEnabled): Uint8Array;
                toProtoMsg(message: _52.SendEnabled): _52.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _52.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Input;
                fromPartial(object: Partial<_52.Input>): _52.Input;
                fromAmino(object: _52.InputAmino): _52.Input;
                toAmino(message: _52.Input): _52.InputAmino;
                fromAminoMsg(object: _52.InputAminoMsg): _52.Input;
                toAminoMsg(message: _52.Input): _52.InputAminoMsg;
                fromProtoMsg(message: _52.InputProtoMsg): _52.Input;
                toProto(message: _52.Input): Uint8Array;
                toProtoMsg(message: _52.Input): _52.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _52.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Output;
                fromPartial(object: Partial<_52.Output>): _52.Output;
                fromAmino(object: _52.OutputAmino): _52.Output;
                toAmino(message: _52.Output): _52.OutputAmino;
                fromAminoMsg(object: _52.OutputAminoMsg): _52.Output;
                toAminoMsg(message: _52.Output): _52.OutputAminoMsg;
                fromProtoMsg(message: _52.OutputProtoMsg): _52.Output;
                toProto(message: _52.Output): Uint8Array;
                toProtoMsg(message: _52.Output): _52.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _52.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Supply;
                fromPartial(object: Partial<_52.Supply>): _52.Supply;
                fromAmino(object: _52.SupplyAmino): _52.Supply;
                toAmino(message: _52.Supply): _52.SupplyAmino;
                fromAminoMsg(object: _52.SupplyAminoMsg): _52.Supply;
                toAminoMsg(message: _52.Supply): _52.SupplyAminoMsg;
                fromProtoMsg(message: _52.SupplyProtoMsg): _52.Supply;
                toProto(message: _52.Supply): Uint8Array;
                toProtoMsg(message: _52.Supply): _52.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _52.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.DenomUnit;
                fromPartial(object: Partial<_52.DenomUnit>): _52.DenomUnit;
                fromAmino(object: _52.DenomUnitAmino): _52.DenomUnit;
                toAmino(message: _52.DenomUnit): _52.DenomUnitAmino;
                fromAminoMsg(object: _52.DenomUnitAminoMsg): _52.DenomUnit;
                toAminoMsg(message: _52.DenomUnit): _52.DenomUnitAminoMsg;
                fromProtoMsg(message: _52.DenomUnitProtoMsg): _52.DenomUnit;
                toProto(message: _52.DenomUnit): Uint8Array;
                toProtoMsg(message: _52.DenomUnit): _52.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _52.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Metadata;
                fromPartial(object: Partial<_52.Metadata>): _52.Metadata;
                fromAmino(object: _52.MetadataAmino): _52.Metadata;
                toAmino(message: _52.Metadata): _52.MetadataAmino;
                fromAminoMsg(object: _52.MetadataAminoMsg): _52.Metadata;
                toAminoMsg(message: _52.Metadata): _52.MetadataAminoMsg;
                fromProtoMsg(message: _52.MetadataProtoMsg): _52.Metadata;
                toProto(message: _52.Metadata): Uint8Array;
                toProtoMsg(message: _52.Metadata): _52.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _51.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.SendAuthorization;
                fromPartial(object: Partial<_51.SendAuthorization>): _51.SendAuthorization;
                fromAmino(object: _51.SendAuthorizationAmino): _51.SendAuthorization;
                toAmino(message: _51.SendAuthorization): _51.SendAuthorizationAmino;
                fromAminoMsg(object: _51.SendAuthorizationAminoMsg): _51.SendAuthorization;
                toAminoMsg(message: _51.SendAuthorization): _51.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _51.SendAuthorizationProtoMsg): _51.SendAuthorization;
                toProto(message: _51.SendAuthorization): Uint8Array;
                toProtoMsg(message: _51.SendAuthorization): _51.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _57.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.GenesisOwners;
                fromPartial(object: Partial<_57.GenesisOwners>): _57.GenesisOwners;
                fromAmino(object: _57.GenesisOwnersAmino): _57.GenesisOwners;
                toAmino(message: _57.GenesisOwners): _57.GenesisOwnersAmino;
                fromAminoMsg(object: _57.GenesisOwnersAminoMsg): _57.GenesisOwners;
                toAminoMsg(message: _57.GenesisOwners): _57.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _57.GenesisOwnersProtoMsg): _57.GenesisOwners;
                toProto(message: _57.GenesisOwners): Uint8Array;
                toProtoMsg(message: _57.GenesisOwners): _57.GenesisOwnersProtoMsg;
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
            Capability: {
                typeUrl: string;
                encode(message: _56.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Capability;
                fromPartial(object: Partial<_56.Capability>): _56.Capability;
                fromAmino(object: _56.CapabilityAmino): _56.Capability;
                toAmino(message: _56.Capability): _56.CapabilityAmino;
                fromAminoMsg(object: _56.CapabilityAminoMsg): _56.Capability;
                toAminoMsg(message: _56.Capability): _56.CapabilityAminoMsg;
                fromProtoMsg(message: _56.CapabilityProtoMsg): _56.Capability;
                toProto(message: _56.Capability): Uint8Array;
                toProtoMsg(message: _56.Capability): _56.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _56.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Owner;
                fromPartial(object: Partial<_56.Owner>): _56.Owner;
                fromAmino(object: _56.OwnerAmino): _56.Owner;
                toAmino(message: _56.Owner): _56.OwnerAmino;
                fromAminoMsg(object: _56.OwnerAminoMsg): _56.Owner;
                toAminoMsg(message: _56.Owner): _56.OwnerAminoMsg;
                fromProtoMsg(message: _56.OwnerProtoMsg): _56.Owner;
                toProto(message: _56.Owner): Uint8Array;
                toProtoMsg(message: _56.Owner): _56.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _56.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.CapabilityOwners;
                fromPartial(object: Partial<_56.CapabilityOwners>): _56.CapabilityOwners;
                fromAmino(object: _56.CapabilityOwnersAmino): _56.CapabilityOwners;
                toAmino(message: _56.CapabilityOwners): _56.CapabilityOwnersAmino;
                fromAminoMsg(object: _56.CapabilityOwnersAminoMsg): _56.CapabilityOwners;
                toAminoMsg(message: _56.CapabilityOwners): _56.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _56.CapabilityOwnersProtoMsg): _56.CapabilityOwners;
                toProto(message: _56.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _56.CapabilityOwners): _56.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _197.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _59.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _59.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _59.MsgVerifyInvariant) => _59.MsgVerifyInvariantAmino;
                    fromAmino: (object: _59.MsgVerifyInvariantAmino) => _59.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _59.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _59.MsgVerifyInvariant;
                fromPartial(object: Partial<_59.MsgVerifyInvariant>): _59.MsgVerifyInvariant;
                fromAmino(object: _59.MsgVerifyInvariantAmino): _59.MsgVerifyInvariant;
                toAmino(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _59.MsgVerifyInvariantAminoMsg): _59.MsgVerifyInvariant;
                toAminoMsg(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _59.MsgVerifyInvariantProtoMsg): _59.MsgVerifyInvariant;
                toProto(message: _59.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _59.MsgVerifyInvariant): _59.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _59.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _59.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_59.MsgVerifyInvariantResponse>): _59.MsgVerifyInvariantResponse;
                fromAmino(_: _59.MsgVerifyInvariantResponseAmino): _59.MsgVerifyInvariantResponse;
                toAmino(_: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _59.MsgVerifyInvariantResponseAminoMsg): _59.MsgVerifyInvariantResponse;
                toAminoMsg(message: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _59.MsgVerifyInvariantResponseProtoMsg): _59.MsgVerifyInvariantResponse;
                toProto(message: _59.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _59.MsgVerifyInvariantResponse): _59.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _58.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
                fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
                toAminoMsg(message: _58.GenesisState): _58.GenesisStateAminoMsg;
                fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
                toProto(message: _58.GenesisState): Uint8Array;
                toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _60.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.PubKey;
                fromPartial(object: Partial<_60.PubKey>): _60.PubKey;
                fromAmino(object: _60.PubKeyAmino): _60.PubKey;
                toAmino(message: _60.PubKey): _60.PubKeyAmino;
                fromAminoMsg(object: _60.PubKeyAminoMsg): _60.PubKey;
                toAminoMsg(message: _60.PubKey): _60.PubKeyAminoMsg;
                fromProtoMsg(message: _60.PubKeyProtoMsg): _60.PubKey;
                toProto(message: _60.PubKey): Uint8Array;
                toProtoMsg(message: _60.PubKey): _60.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _60.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.PrivKey;
                fromPartial(object: Partial<_60.PrivKey>): _60.PrivKey;
                fromAmino(object: _60.PrivKeyAmino): _60.PrivKey;
                toAmino(message: _60.PrivKey): _60.PrivKeyAmino;
                fromAminoMsg(object: _60.PrivKeyAminoMsg): _60.PrivKey;
                toAminoMsg(message: _60.PrivKey): _60.PrivKeyAminoMsg;
                fromProtoMsg(message: _60.PrivKeyProtoMsg): _60.PrivKey;
                toProto(message: _60.PrivKey): Uint8Array;
                toProtoMsg(message: _60.PrivKey): _60.PrivKeyProtoMsg;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _61.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.LegacyAminoPubKey;
                fromPartial(object: Partial<_61.LegacyAminoPubKey>): _61.LegacyAminoPubKey;
                fromAmino(object: _61.LegacyAminoPubKeyAmino): _61.LegacyAminoPubKey;
                toAmino(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _61.LegacyAminoPubKeyAminoMsg): _61.LegacyAminoPubKey;
                toAminoMsg(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _61.LegacyAminoPubKeyProtoMsg): _61.LegacyAminoPubKey;
                toProto(message: _61.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _61.LegacyAminoPubKey): _61.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _62.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PubKey;
                fromPartial(object: Partial<_62.PubKey>): _62.PubKey;
                fromAmino(object: _62.PubKeyAmino): _62.PubKey;
                toAmino(message: _62.PubKey): _62.PubKeyAmino;
                fromAminoMsg(object: _62.PubKeyAminoMsg): _62.PubKey;
                toAminoMsg(message: _62.PubKey): _62.PubKeyAminoMsg;
                fromProtoMsg(message: _62.PubKeyProtoMsg): _62.PubKey;
                toProto(message: _62.PubKey): Uint8Array;
                toProtoMsg(message: _62.PubKey): _62.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _62.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.PrivKey;
                fromPartial(object: Partial<_62.PrivKey>): _62.PrivKey;
                fromAmino(object: _62.PrivKeyAmino): _62.PrivKey;
                toAmino(message: _62.PrivKey): _62.PrivKeyAmino;
                fromAminoMsg(object: _62.PrivKeyAminoMsg): _62.PrivKey;
                toAminoMsg(message: _62.PrivKey): _62.PrivKeyAminoMsg;
                fromProtoMsg(message: _62.PrivKeyProtoMsg): _62.PrivKey;
                toProto(message: _62.PrivKey): Uint8Array;
                toProtoMsg(message: _62.PrivKey): _62.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _63.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.PubKey;
                fromPartial(object: Partial<_63.PubKey>): _63.PubKey;
                fromAmino(object: _63.PubKeyAmino): _63.PubKey;
                toAmino(message: _63.PubKey): _63.PubKeyAmino;
                fromAminoMsg(object: _63.PubKeyAminoMsg): _63.PubKey;
                toAminoMsg(message: _63.PubKey): _63.PubKeyAminoMsg;
                fromProtoMsg(message: _63.PubKeyProtoMsg): _63.PubKey;
                toProto(message: _63.PubKey): Uint8Array;
                toProtoMsg(message: _63.PubKey): _63.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _63.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.PrivKey;
                fromPartial(object: Partial<_63.PrivKey>): _63.PrivKey;
                fromAmino(object: _63.PrivKeyAmino): _63.PrivKey;
                toAmino(message: _63.PrivKey): _63.PrivKeyAmino;
                fromAminoMsg(object: _63.PrivKeyAminoMsg): _63.PrivKey;
                toAminoMsg(message: _63.PrivKey): _63.PrivKeyAminoMsg;
                fromProtoMsg(message: _63.PrivKeyProtoMsg): _63.PrivKey;
                toProto(message: _63.PrivKey): Uint8Array;
                toProtoMsg(message: _63.PrivKey): _63.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _198.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                validatorOutstandingRewards(request: _66.QueryValidatorOutstandingRewardsRequest): Promise<_66.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _66.QueryValidatorCommissionRequest): Promise<_66.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _66.QueryValidatorSlashesRequest): Promise<_66.QueryValidatorSlashesResponse>;
                delegationRewards(request: _66.QueryDelegationRewardsRequest): Promise<_66.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _66.QueryDelegationTotalRewardsRequest): Promise<_66.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _66.QueryDelegatorValidatorsRequest): Promise<_66.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _66.QueryDelegatorWithdrawAddressRequest): Promise<_66.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _66.QueryCommunityPoolRequest): Promise<_66.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _67.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _67.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _67.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _67.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _67.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _67.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _67.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _67.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _67.MsgSetWithdrawAddress) => _67.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _67.MsgSetWithdrawAddressAmino) => _67.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _67.MsgWithdrawDelegatorReward) => _67.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _67.MsgWithdrawDelegatorRewardAmino) => _67.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _67.MsgWithdrawValidatorCommission) => _67.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _67.MsgWithdrawValidatorCommissionAmino) => _67.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _67.MsgFundCommunityPool) => _67.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _67.MsgFundCommunityPoolAmino) => _67.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _67.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_67.MsgSetWithdrawAddress>): _67.MsgSetWithdrawAddress;
                fromAmino(object: _67.MsgSetWithdrawAddressAmino): _67.MsgSetWithdrawAddress;
                toAmino(message: _67.MsgSetWithdrawAddress): _67.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _67.MsgSetWithdrawAddressAminoMsg): _67.MsgSetWithdrawAddress;
                toAminoMsg(message: _67.MsgSetWithdrawAddress): _67.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _67.MsgSetWithdrawAddressProtoMsg): _67.MsgSetWithdrawAddress;
                toProto(message: _67.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _67.MsgSetWithdrawAddress): _67.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _67.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_67.MsgSetWithdrawAddressResponse>): _67.MsgSetWithdrawAddressResponse;
                fromAmino(_: _67.MsgSetWithdrawAddressResponseAmino): _67.MsgSetWithdrawAddressResponse;
                toAmino(_: _67.MsgSetWithdrawAddressResponse): _67.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _67.MsgSetWithdrawAddressResponseAminoMsg): _67.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _67.MsgSetWithdrawAddressResponse): _67.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _67.MsgSetWithdrawAddressResponseProtoMsg): _67.MsgSetWithdrawAddressResponse;
                toProto(message: _67.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _67.MsgSetWithdrawAddressResponse): _67.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _67.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_67.MsgWithdrawDelegatorReward>): _67.MsgWithdrawDelegatorReward;
                fromAmino(object: _67.MsgWithdrawDelegatorRewardAmino): _67.MsgWithdrawDelegatorReward;
                toAmino(message: _67.MsgWithdrawDelegatorReward): _67.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _67.MsgWithdrawDelegatorRewardAminoMsg): _67.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _67.MsgWithdrawDelegatorReward): _67.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _67.MsgWithdrawDelegatorRewardProtoMsg): _67.MsgWithdrawDelegatorReward;
                toProto(message: _67.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _67.MsgWithdrawDelegatorReward): _67.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _67.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_67.MsgWithdrawDelegatorRewardResponse>): _67.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _67.MsgWithdrawDelegatorRewardResponseAmino): _67.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _67.MsgWithdrawDelegatorRewardResponse): _67.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _67.MsgWithdrawDelegatorRewardResponseAminoMsg): _67.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _67.MsgWithdrawDelegatorRewardResponse): _67.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _67.MsgWithdrawDelegatorRewardResponseProtoMsg): _67.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _67.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _67.MsgWithdrawDelegatorRewardResponse): _67.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _67.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_67.MsgWithdrawValidatorCommission>): _67.MsgWithdrawValidatorCommission;
                fromAmino(object: _67.MsgWithdrawValidatorCommissionAmino): _67.MsgWithdrawValidatorCommission;
                toAmino(message: _67.MsgWithdrawValidatorCommission): _67.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _67.MsgWithdrawValidatorCommissionAminoMsg): _67.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _67.MsgWithdrawValidatorCommission): _67.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _67.MsgWithdrawValidatorCommissionProtoMsg): _67.MsgWithdrawValidatorCommission;
                toProto(message: _67.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _67.MsgWithdrawValidatorCommission): _67.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _67.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_67.MsgWithdrawValidatorCommissionResponse>): _67.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _67.MsgWithdrawValidatorCommissionResponseAmino): _67.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _67.MsgWithdrawValidatorCommissionResponse): _67.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _67.MsgWithdrawValidatorCommissionResponseAminoMsg): _67.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _67.MsgWithdrawValidatorCommissionResponse): _67.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _67.MsgWithdrawValidatorCommissionResponseProtoMsg): _67.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _67.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _67.MsgWithdrawValidatorCommissionResponse): _67.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _67.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.MsgFundCommunityPool;
                fromPartial(object: Partial<_67.MsgFundCommunityPool>): _67.MsgFundCommunityPool;
                fromAmino(object: _67.MsgFundCommunityPoolAmino): _67.MsgFundCommunityPool;
                toAmino(message: _67.MsgFundCommunityPool): _67.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _67.MsgFundCommunityPoolAminoMsg): _67.MsgFundCommunityPool;
                toAminoMsg(message: _67.MsgFundCommunityPool): _67.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _67.MsgFundCommunityPoolProtoMsg): _67.MsgFundCommunityPool;
                toProto(message: _67.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _67.MsgFundCommunityPool): _67.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _67.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _67.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_67.MsgFundCommunityPoolResponse>): _67.MsgFundCommunityPoolResponse;
                fromAmino(_: _67.MsgFundCommunityPoolResponseAmino): _67.MsgFundCommunityPoolResponse;
                toAmino(_: _67.MsgFundCommunityPoolResponse): _67.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _67.MsgFundCommunityPoolResponseAminoMsg): _67.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _67.MsgFundCommunityPoolResponse): _67.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _67.MsgFundCommunityPoolResponseProtoMsg): _67.MsgFundCommunityPoolResponse;
                toProto(message: _67.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _67.MsgFundCommunityPoolResponse): _67.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _66.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
                fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                toProto(message: _66.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _66.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
                fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                toProto(message: _66.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_66.QueryValidatorOutstandingRewardsRequest>): _66.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _66.QueryValidatorOutstandingRewardsRequestAmino): _66.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _66.QueryValidatorOutstandingRewardsRequest): _66.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorOutstandingRewardsRequestAminoMsg): _66.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _66.QueryValidatorOutstandingRewardsRequest): _66.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorOutstandingRewardsRequestProtoMsg): _66.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _66.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorOutstandingRewardsRequest): _66.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_66.QueryValidatorOutstandingRewardsResponse>): _66.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _66.QueryValidatorOutstandingRewardsResponseAmino): _66.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _66.QueryValidatorOutstandingRewardsResponse): _66.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorOutstandingRewardsResponseAminoMsg): _66.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _66.QueryValidatorOutstandingRewardsResponse): _66.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorOutstandingRewardsResponseProtoMsg): _66.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _66.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorOutstandingRewardsResponse): _66.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_66.QueryValidatorCommissionRequest>): _66.QueryValidatorCommissionRequest;
                fromAmino(object: _66.QueryValidatorCommissionRequestAmino): _66.QueryValidatorCommissionRequest;
                toAmino(message: _66.QueryValidatorCommissionRequest): _66.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorCommissionRequestAminoMsg): _66.QueryValidatorCommissionRequest;
                toAminoMsg(message: _66.QueryValidatorCommissionRequest): _66.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorCommissionRequestProtoMsg): _66.QueryValidatorCommissionRequest;
                toProto(message: _66.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorCommissionRequest): _66.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_66.QueryValidatorCommissionResponse>): _66.QueryValidatorCommissionResponse;
                fromAmino(object: _66.QueryValidatorCommissionResponseAmino): _66.QueryValidatorCommissionResponse;
                toAmino(message: _66.QueryValidatorCommissionResponse): _66.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorCommissionResponseAminoMsg): _66.QueryValidatorCommissionResponse;
                toAminoMsg(message: _66.QueryValidatorCommissionResponse): _66.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorCommissionResponseProtoMsg): _66.QueryValidatorCommissionResponse;
                toProto(message: _66.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorCommissionResponse): _66.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _66.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_66.QueryValidatorSlashesRequest>): _66.QueryValidatorSlashesRequest;
                fromAmino(object: _66.QueryValidatorSlashesRequestAmino): _66.QueryValidatorSlashesRequest;
                toAmino(message: _66.QueryValidatorSlashesRequest): _66.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _66.QueryValidatorSlashesRequestAminoMsg): _66.QueryValidatorSlashesRequest;
                toAminoMsg(message: _66.QueryValidatorSlashesRequest): _66.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorSlashesRequestProtoMsg): _66.QueryValidatorSlashesRequest;
                toProto(message: _66.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorSlashesRequest): _66.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _66.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_66.QueryValidatorSlashesResponse>): _66.QueryValidatorSlashesResponse;
                fromAmino(object: _66.QueryValidatorSlashesResponseAmino): _66.QueryValidatorSlashesResponse;
                toAmino(message: _66.QueryValidatorSlashesResponse): _66.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _66.QueryValidatorSlashesResponseAminoMsg): _66.QueryValidatorSlashesResponse;
                toAminoMsg(message: _66.QueryValidatorSlashesResponse): _66.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _66.QueryValidatorSlashesResponseProtoMsg): _66.QueryValidatorSlashesResponse;
                toProto(message: _66.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _66.QueryValidatorSlashesResponse): _66.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_66.QueryDelegationRewardsRequest>): _66.QueryDelegationRewardsRequest;
                fromAmino(object: _66.QueryDelegationRewardsRequestAmino): _66.QueryDelegationRewardsRequest;
                toAmino(message: _66.QueryDelegationRewardsRequest): _66.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegationRewardsRequestAminoMsg): _66.QueryDelegationRewardsRequest;
                toAminoMsg(message: _66.QueryDelegationRewardsRequest): _66.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationRewardsRequestProtoMsg): _66.QueryDelegationRewardsRequest;
                toProto(message: _66.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationRewardsRequest): _66.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_66.QueryDelegationRewardsResponse>): _66.QueryDelegationRewardsResponse;
                fromAmino(object: _66.QueryDelegationRewardsResponseAmino): _66.QueryDelegationRewardsResponse;
                toAmino(message: _66.QueryDelegationRewardsResponse): _66.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegationRewardsResponseAminoMsg): _66.QueryDelegationRewardsResponse;
                toAminoMsg(message: _66.QueryDelegationRewardsResponse): _66.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationRewardsResponseProtoMsg): _66.QueryDelegationRewardsResponse;
                toProto(message: _66.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationRewardsResponse): _66.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_66.QueryDelegationTotalRewardsRequest>): _66.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _66.QueryDelegationTotalRewardsRequestAmino): _66.QueryDelegationTotalRewardsRequest;
                toAmino(message: _66.QueryDelegationTotalRewardsRequest): _66.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegationTotalRewardsRequestAminoMsg): _66.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _66.QueryDelegationTotalRewardsRequest): _66.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationTotalRewardsRequestProtoMsg): _66.QueryDelegationTotalRewardsRequest;
                toProto(message: _66.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationTotalRewardsRequest): _66.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_66.QueryDelegationTotalRewardsResponse>): _66.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _66.QueryDelegationTotalRewardsResponseAmino): _66.QueryDelegationTotalRewardsResponse;
                toAmino(message: _66.QueryDelegationTotalRewardsResponse): _66.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegationTotalRewardsResponseAminoMsg): _66.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _66.QueryDelegationTotalRewardsResponse): _66.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegationTotalRewardsResponseProtoMsg): _66.QueryDelegationTotalRewardsResponse;
                toProto(message: _66.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegationTotalRewardsResponse): _66.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorsRequest>): _66.QueryDelegatorValidatorsRequest;
                fromAmino(object: _66.QueryDelegatorValidatorsRequestAmino): _66.QueryDelegatorValidatorsRequest;
                toAmino(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _66.QueryDelegatorValidatorsRequestAminoMsg): _66.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorValidatorsRequestProtoMsg): _66.QueryDelegatorValidatorsRequest;
                toProto(message: _66.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorValidatorsRequest): _66.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_66.QueryDelegatorValidatorsResponse>): _66.QueryDelegatorValidatorsResponse;
                fromAmino(object: _66.QueryDelegatorValidatorsResponseAmino): _66.QueryDelegatorValidatorsResponse;
                toAmino(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _66.QueryDelegatorValidatorsResponseAminoMsg): _66.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorValidatorsResponseProtoMsg): _66.QueryDelegatorValidatorsResponse;
                toProto(message: _66.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorValidatorsResponse): _66.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_66.QueryDelegatorWithdrawAddressRequest>): _66.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _66.QueryDelegatorWithdrawAddressRequestAmino): _66.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _66.QueryDelegatorWithdrawAddressRequest): _66.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _66.QueryDelegatorWithdrawAddressRequestAminoMsg): _66.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _66.QueryDelegatorWithdrawAddressRequest): _66.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorWithdrawAddressRequestProtoMsg): _66.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _66.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorWithdrawAddressRequest): _66.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _66.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_66.QueryDelegatorWithdrawAddressResponse>): _66.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _66.QueryDelegatorWithdrawAddressResponseAmino): _66.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _66.QueryDelegatorWithdrawAddressResponse): _66.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _66.QueryDelegatorWithdrawAddressResponseAminoMsg): _66.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _66.QueryDelegatorWithdrawAddressResponse): _66.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDelegatorWithdrawAddressResponseProtoMsg): _66.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _66.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDelegatorWithdrawAddressResponse): _66.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _66.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _66.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_66.QueryCommunityPoolRequest>): _66.QueryCommunityPoolRequest;
                fromAmino(_: _66.QueryCommunityPoolRequestAmino): _66.QueryCommunityPoolRequest;
                toAmino(_: _66.QueryCommunityPoolRequest): _66.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _66.QueryCommunityPoolRequestAminoMsg): _66.QueryCommunityPoolRequest;
                toAminoMsg(message: _66.QueryCommunityPoolRequest): _66.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _66.QueryCommunityPoolRequestProtoMsg): _66.QueryCommunityPoolRequest;
                toProto(message: _66.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _66.QueryCommunityPoolRequest): _66.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _66.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_66.QueryCommunityPoolResponse>): _66.QueryCommunityPoolResponse;
                fromAmino(object: _66.QueryCommunityPoolResponseAmino): _66.QueryCommunityPoolResponse;
                toAmino(message: _66.QueryCommunityPoolResponse): _66.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _66.QueryCommunityPoolResponseAminoMsg): _66.QueryCommunityPoolResponse;
                toAminoMsg(message: _66.QueryCommunityPoolResponse): _66.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _66.QueryCommunityPoolResponseProtoMsg): _66.QueryCommunityPoolResponse;
                toProto(message: _66.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _66.QueryCommunityPoolResponse): _66.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _65.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_65.DelegatorWithdrawInfo>): _65.DelegatorWithdrawInfo;
                fromAmino(object: _65.DelegatorWithdrawInfoAmino): _65.DelegatorWithdrawInfo;
                toAmino(message: _65.DelegatorWithdrawInfo): _65.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _65.DelegatorWithdrawInfoAminoMsg): _65.DelegatorWithdrawInfo;
                toAminoMsg(message: _65.DelegatorWithdrawInfo): _65.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _65.DelegatorWithdrawInfoProtoMsg): _65.DelegatorWithdrawInfo;
                toProto(message: _65.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _65.DelegatorWithdrawInfo): _65.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorOutstandingRewardsRecord>): _65.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _65.ValidatorOutstandingRewardsRecordAmino): _65.ValidatorOutstandingRewardsRecord;
                toAmino(message: _65.ValidatorOutstandingRewardsRecord): _65.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _65.ValidatorOutstandingRewardsRecordAminoMsg): _65.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _65.ValidatorOutstandingRewardsRecord): _65.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorOutstandingRewardsRecordProtoMsg): _65.ValidatorOutstandingRewardsRecord;
                toProto(message: _65.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorOutstandingRewardsRecord): _65.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_65.ValidatorAccumulatedCommissionRecord>): _65.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _65.ValidatorAccumulatedCommissionRecordAmino): _65.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _65.ValidatorAccumulatedCommissionRecord): _65.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _65.ValidatorAccumulatedCommissionRecordAminoMsg): _65.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _65.ValidatorAccumulatedCommissionRecord): _65.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorAccumulatedCommissionRecordProtoMsg): _65.ValidatorAccumulatedCommissionRecord;
                toProto(message: _65.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorAccumulatedCommissionRecord): _65.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorHistoricalRewardsRecord>): _65.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _65.ValidatorHistoricalRewardsRecordAmino): _65.ValidatorHistoricalRewardsRecord;
                toAmino(message: _65.ValidatorHistoricalRewardsRecord): _65.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _65.ValidatorHistoricalRewardsRecordAminoMsg): _65.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _65.ValidatorHistoricalRewardsRecord): _65.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorHistoricalRewardsRecordProtoMsg): _65.ValidatorHistoricalRewardsRecord;
                toProto(message: _65.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorHistoricalRewardsRecord): _65.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_65.ValidatorCurrentRewardsRecord>): _65.ValidatorCurrentRewardsRecord;
                fromAmino(object: _65.ValidatorCurrentRewardsRecordAmino): _65.ValidatorCurrentRewardsRecord;
                toAmino(message: _65.ValidatorCurrentRewardsRecord): _65.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _65.ValidatorCurrentRewardsRecordAminoMsg): _65.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _65.ValidatorCurrentRewardsRecord): _65.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorCurrentRewardsRecordProtoMsg): _65.ValidatorCurrentRewardsRecord;
                toProto(message: _65.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorCurrentRewardsRecord): _65.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _65.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_65.DelegatorStartingInfoRecord>): _65.DelegatorStartingInfoRecord;
                fromAmino(object: _65.DelegatorStartingInfoRecordAmino): _65.DelegatorStartingInfoRecord;
                toAmino(message: _65.DelegatorStartingInfoRecord): _65.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _65.DelegatorStartingInfoRecordAminoMsg): _65.DelegatorStartingInfoRecord;
                toAminoMsg(message: _65.DelegatorStartingInfoRecord): _65.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _65.DelegatorStartingInfoRecordProtoMsg): _65.DelegatorStartingInfoRecord;
                toProto(message: _65.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _65.DelegatorStartingInfoRecord): _65.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _65.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_65.ValidatorSlashEventRecord>): _65.ValidatorSlashEventRecord;
                fromAmino(object: _65.ValidatorSlashEventRecordAmino): _65.ValidatorSlashEventRecord;
                toAmino(message: _65.ValidatorSlashEventRecord): _65.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _65.ValidatorSlashEventRecordAminoMsg): _65.ValidatorSlashEventRecord;
                toAminoMsg(message: _65.ValidatorSlashEventRecord): _65.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _65.ValidatorSlashEventRecordProtoMsg): _65.ValidatorSlashEventRecord;
                toProto(message: _65.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _65.ValidatorSlashEventRecord): _65.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _64.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Params;
                fromPartial(object: Partial<_64.Params>): _64.Params;
                fromAmino(object: _64.ParamsAmino): _64.Params;
                toAmino(message: _64.Params): _64.ParamsAmino;
                fromAminoMsg(object: _64.ParamsAminoMsg): _64.Params;
                toAminoMsg(message: _64.Params): _64.ParamsAminoMsg;
                fromProtoMsg(message: _64.ParamsProtoMsg): _64.Params;
                toProto(message: _64.Params): Uint8Array;
                toProtoMsg(message: _64.Params): _64.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _64.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_64.ValidatorHistoricalRewards>): _64.ValidatorHistoricalRewards;
                fromAmino(object: _64.ValidatorHistoricalRewardsAmino): _64.ValidatorHistoricalRewards;
                toAmino(message: _64.ValidatorHistoricalRewards): _64.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _64.ValidatorHistoricalRewardsAminoMsg): _64.ValidatorHistoricalRewards;
                toAminoMsg(message: _64.ValidatorHistoricalRewards): _64.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _64.ValidatorHistoricalRewardsProtoMsg): _64.ValidatorHistoricalRewards;
                toProto(message: _64.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _64.ValidatorHistoricalRewards): _64.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _64.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorCurrentRewards;
                fromPartial(object: Partial<_64.ValidatorCurrentRewards>): _64.ValidatorCurrentRewards;
                fromAmino(object: _64.ValidatorCurrentRewardsAmino): _64.ValidatorCurrentRewards;
                toAmino(message: _64.ValidatorCurrentRewards): _64.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _64.ValidatorCurrentRewardsAminoMsg): _64.ValidatorCurrentRewards;
                toAminoMsg(message: _64.ValidatorCurrentRewards): _64.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _64.ValidatorCurrentRewardsProtoMsg): _64.ValidatorCurrentRewards;
                toProto(message: _64.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _64.ValidatorCurrentRewards): _64.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _64.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_64.ValidatorAccumulatedCommission>): _64.ValidatorAccumulatedCommission;
                fromAmino(object: _64.ValidatorAccumulatedCommissionAmino): _64.ValidatorAccumulatedCommission;
                toAmino(message: _64.ValidatorAccumulatedCommission): _64.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _64.ValidatorAccumulatedCommissionAminoMsg): _64.ValidatorAccumulatedCommission;
                toAminoMsg(message: _64.ValidatorAccumulatedCommission): _64.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _64.ValidatorAccumulatedCommissionProtoMsg): _64.ValidatorAccumulatedCommission;
                toProto(message: _64.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _64.ValidatorAccumulatedCommission): _64.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _64.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_64.ValidatorOutstandingRewards>): _64.ValidatorOutstandingRewards;
                fromAmino(object: _64.ValidatorOutstandingRewardsAmino): _64.ValidatorOutstandingRewards;
                toAmino(message: _64.ValidatorOutstandingRewards): _64.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _64.ValidatorOutstandingRewardsAminoMsg): _64.ValidatorOutstandingRewards;
                toAminoMsg(message: _64.ValidatorOutstandingRewards): _64.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _64.ValidatorOutstandingRewardsProtoMsg): _64.ValidatorOutstandingRewards;
                toProto(message: _64.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _64.ValidatorOutstandingRewards): _64.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _64.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorSlashEvent;
                fromPartial(object: Partial<_64.ValidatorSlashEvent>): _64.ValidatorSlashEvent;
                fromAmino(object: _64.ValidatorSlashEventAmino): _64.ValidatorSlashEvent;
                toAmino(message: _64.ValidatorSlashEvent): _64.ValidatorSlashEventAmino;
                fromAminoMsg(object: _64.ValidatorSlashEventAminoMsg): _64.ValidatorSlashEvent;
                toAminoMsg(message: _64.ValidatorSlashEvent): _64.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _64.ValidatorSlashEventProtoMsg): _64.ValidatorSlashEvent;
                toProto(message: _64.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _64.ValidatorSlashEvent): _64.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _64.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.ValidatorSlashEvents;
                fromPartial(object: Partial<_64.ValidatorSlashEvents>): _64.ValidatorSlashEvents;
                fromAmino(object: _64.ValidatorSlashEventsAmino): _64.ValidatorSlashEvents;
                toAmino(message: _64.ValidatorSlashEvents): _64.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _64.ValidatorSlashEventsAminoMsg): _64.ValidatorSlashEvents;
                toAminoMsg(message: _64.ValidatorSlashEvents): _64.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _64.ValidatorSlashEventsProtoMsg): _64.ValidatorSlashEvents;
                toProto(message: _64.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _64.ValidatorSlashEvents): _64.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _64.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.FeePool;
                fromPartial(object: Partial<_64.FeePool>): _64.FeePool;
                fromAmino(object: _64.FeePoolAmino): _64.FeePool;
                toAmino(message: _64.FeePool): _64.FeePoolAmino;
                fromAminoMsg(object: _64.FeePoolAminoMsg): _64.FeePool;
                toAminoMsg(message: _64.FeePool): _64.FeePoolAminoMsg;
                fromProtoMsg(message: _64.FeePoolProtoMsg): _64.FeePool;
                toProto(message: _64.FeePool): Uint8Array;
                toProtoMsg(message: _64.FeePool): _64.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _64.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_64.CommunityPoolSpendProposal>): _64.CommunityPoolSpendProposal;
                fromAmino(object: _64.CommunityPoolSpendProposalAmino): _64.CommunityPoolSpendProposal;
                toAmino(message: _64.CommunityPoolSpendProposal): _64.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _64.CommunityPoolSpendProposalAminoMsg): _64.CommunityPoolSpendProposal;
                toAminoMsg(message: _64.CommunityPoolSpendProposal): _64.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _64.CommunityPoolSpendProposalProtoMsg): _64.CommunityPoolSpendProposal;
                toProto(message: _64.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _64.CommunityPoolSpendProposal): _64.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _64.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DelegatorStartingInfo;
                fromPartial(object: Partial<_64.DelegatorStartingInfo>): _64.DelegatorStartingInfo;
                fromAmino(object: _64.DelegatorStartingInfoAmino): _64.DelegatorStartingInfo;
                toAmino(message: _64.DelegatorStartingInfo): _64.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _64.DelegatorStartingInfoAminoMsg): _64.DelegatorStartingInfo;
                toAminoMsg(message: _64.DelegatorStartingInfo): _64.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _64.DelegatorStartingInfoProtoMsg): _64.DelegatorStartingInfo;
                toProto(message: _64.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _64.DelegatorStartingInfo): _64.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _64.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.DelegationDelegatorReward;
                fromPartial(object: Partial<_64.DelegationDelegatorReward>): _64.DelegationDelegatorReward;
                fromAmino(object: _64.DelegationDelegatorRewardAmino): _64.DelegationDelegatorReward;
                toAmino(message: _64.DelegationDelegatorReward): _64.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _64.DelegationDelegatorRewardAminoMsg): _64.DelegationDelegatorReward;
                toAminoMsg(message: _64.DelegationDelegatorReward): _64.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _64.DelegationDelegatorRewardProtoMsg): _64.DelegationDelegatorReward;
                toProto(message: _64.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _64.DelegationDelegatorReward): _64.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _64.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_64.CommunityPoolSpendProposalWithDeposit>): _64.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _64.CommunityPoolSpendProposalWithDepositAmino): _64.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _64.CommunityPoolSpendProposalWithDeposit): _64.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _64.CommunityPoolSpendProposalWithDepositAminoMsg): _64.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _64.CommunityPoolSpendProposalWithDeposit): _64.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _64.CommunityPoolSpendProposalWithDepositProtoMsg): _64.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _64.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _64.CommunityPoolSpendProposalWithDeposit): _64.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _199.MsgClientImpl;
            QueryClientImpl: typeof _186.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _70.QueryEvidenceRequest): Promise<_70.QueryEvidenceResponse>;
                allEvidence(request?: _70.QueryAllEvidenceRequest): Promise<_70.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _71.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _71.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _71.MsgSubmitEvidence) => _71.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _71.MsgSubmitEvidenceAmino) => _71.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _71.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgSubmitEvidence;
                fromPartial(object: Partial<_71.MsgSubmitEvidence>): _71.MsgSubmitEvidence;
                fromAmino(object: _71.MsgSubmitEvidenceAmino): _71.MsgSubmitEvidence;
                toAmino(message: _71.MsgSubmitEvidence): _71.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _71.MsgSubmitEvidenceAminoMsg): _71.MsgSubmitEvidence;
                toAminoMsg(message: _71.MsgSubmitEvidence): _71.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _71.MsgSubmitEvidenceProtoMsg): _71.MsgSubmitEvidence;
                toProto(message: _71.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _71.MsgSubmitEvidence): _71.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _71.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_71.MsgSubmitEvidenceResponse>): _71.MsgSubmitEvidenceResponse;
                fromAmino(object: _71.MsgSubmitEvidenceResponseAmino): _71.MsgSubmitEvidenceResponse;
                toAmino(message: _71.MsgSubmitEvidenceResponse): _71.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _71.MsgSubmitEvidenceResponseAminoMsg): _71.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _71.MsgSubmitEvidenceResponse): _71.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _71.MsgSubmitEvidenceResponseProtoMsg): _71.MsgSubmitEvidenceResponse;
                toProto(message: _71.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _71.MsgSubmitEvidenceResponse): _71.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _70.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryEvidenceRequest;
                fromPartial(object: Partial<_70.QueryEvidenceRequest>): _70.QueryEvidenceRequest;
                fromAmino(object: _70.QueryEvidenceRequestAmino): _70.QueryEvidenceRequest;
                toAmino(message: _70.QueryEvidenceRequest): _70.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _70.QueryEvidenceRequestAminoMsg): _70.QueryEvidenceRequest;
                toAminoMsg(message: _70.QueryEvidenceRequest): _70.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _70.QueryEvidenceRequestProtoMsg): _70.QueryEvidenceRequest;
                toProto(message: _70.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _70.QueryEvidenceRequest): _70.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _70.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryEvidenceResponse;
                fromPartial(object: Partial<_70.QueryEvidenceResponse>): _70.QueryEvidenceResponse;
                fromAmino(object: _70.QueryEvidenceResponseAmino): _70.QueryEvidenceResponse;
                toAmino(message: _70.QueryEvidenceResponse): _70.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _70.QueryEvidenceResponseAminoMsg): _70.QueryEvidenceResponse;
                toAminoMsg(message: _70.QueryEvidenceResponse): _70.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _70.QueryEvidenceResponseProtoMsg): _70.QueryEvidenceResponse;
                toProto(message: _70.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _70.QueryEvidenceResponse): _70.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_70.QueryAllEvidenceRequest>): _70.QueryAllEvidenceRequest;
                fromAmino(object: _70.QueryAllEvidenceRequestAmino): _70.QueryAllEvidenceRequest;
                toAmino(message: _70.QueryAllEvidenceRequest): _70.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _70.QueryAllEvidenceRequestAminoMsg): _70.QueryAllEvidenceRequest;
                toAminoMsg(message: _70.QueryAllEvidenceRequest): _70.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllEvidenceRequestProtoMsg): _70.QueryAllEvidenceRequest;
                toProto(message: _70.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllEvidenceRequest): _70.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_70.QueryAllEvidenceResponse>): _70.QueryAllEvidenceResponse;
                fromAmino(object: _70.QueryAllEvidenceResponseAmino): _70.QueryAllEvidenceResponse;
                toAmino(message: _70.QueryAllEvidenceResponse): _70.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _70.QueryAllEvidenceResponseAminoMsg): _70.QueryAllEvidenceResponse;
                toAminoMsg(message: _70.QueryAllEvidenceResponse): _70.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllEvidenceResponseProtoMsg): _70.QueryAllEvidenceResponse;
                toProto(message: _70.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllEvidenceResponse): _70.QueryAllEvidenceResponseProtoMsg;
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
            Equivocation: {
                typeUrl: string;
                encode(message: _68.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.Equivocation;
                fromPartial(object: Partial<_68.Equivocation>): _68.Equivocation;
                fromAmino(object: _68.EquivocationAmino): _68.Equivocation;
                toAmino(message: _68.Equivocation): _68.EquivocationAmino;
                fromAminoMsg(object: _68.EquivocationAminoMsg): _68.Equivocation;
                toAminoMsg(message: _68.Equivocation): _68.EquivocationAminoMsg;
                fromProtoMsg(message: _68.EquivocationProtoMsg): _68.Equivocation;
                toProto(message: _68.Equivocation): Uint8Array;
                toProtoMsg(message: _68.Equivocation): _68.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _200.MsgClientImpl;
            QueryClientImpl: typeof _187.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _74.QueryAllowanceRequest): Promise<_74.QueryAllowanceResponse>;
                allowances(request: _74.QueryAllowancesRequest): Promise<_74.QueryAllowancesResponse>;
                allowancesByGranter(request: _74.QueryAllowancesByGranterRequest): Promise<_74.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _75.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _75.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _75.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _75.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _75.MsgGrantAllowance) => _75.MsgGrantAllowanceAmino;
                    fromAmino: (object: _75.MsgGrantAllowanceAmino) => _75.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _75.MsgRevokeAllowance) => _75.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _75.MsgRevokeAllowanceAmino) => _75.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _75.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgGrantAllowance;
                fromPartial(object: Partial<_75.MsgGrantAllowance>): _75.MsgGrantAllowance;
                fromAmino(object: _75.MsgGrantAllowanceAmino): _75.MsgGrantAllowance;
                toAmino(message: _75.MsgGrantAllowance): _75.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _75.MsgGrantAllowanceAminoMsg): _75.MsgGrantAllowance;
                toAminoMsg(message: _75.MsgGrantAllowance): _75.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _75.MsgGrantAllowanceProtoMsg): _75.MsgGrantAllowance;
                toProto(message: _75.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _75.MsgGrantAllowance): _75.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _75.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_75.MsgGrantAllowanceResponse>): _75.MsgGrantAllowanceResponse;
                fromAmino(_: _75.MsgGrantAllowanceResponseAmino): _75.MsgGrantAllowanceResponse;
                toAmino(_: _75.MsgGrantAllowanceResponse): _75.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _75.MsgGrantAllowanceResponseAminoMsg): _75.MsgGrantAllowanceResponse;
                toAminoMsg(message: _75.MsgGrantAllowanceResponse): _75.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _75.MsgGrantAllowanceResponseProtoMsg): _75.MsgGrantAllowanceResponse;
                toProto(message: _75.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _75.MsgGrantAllowanceResponse): _75.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _75.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MsgRevokeAllowance;
                fromPartial(object: Partial<_75.MsgRevokeAllowance>): _75.MsgRevokeAllowance;
                fromAmino(object: _75.MsgRevokeAllowanceAmino): _75.MsgRevokeAllowance;
                toAmino(message: _75.MsgRevokeAllowance): _75.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _75.MsgRevokeAllowanceAminoMsg): _75.MsgRevokeAllowance;
                toAminoMsg(message: _75.MsgRevokeAllowance): _75.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _75.MsgRevokeAllowanceProtoMsg): _75.MsgRevokeAllowance;
                toProto(message: _75.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _75.MsgRevokeAllowance): _75.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _75.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_75.MsgRevokeAllowanceResponse>): _75.MsgRevokeAllowanceResponse;
                fromAmino(_: _75.MsgRevokeAllowanceResponseAmino): _75.MsgRevokeAllowanceResponse;
                toAmino(_: _75.MsgRevokeAllowanceResponse): _75.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _75.MsgRevokeAllowanceResponseAminoMsg): _75.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _75.MsgRevokeAllowanceResponse): _75.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _75.MsgRevokeAllowanceResponseProtoMsg): _75.MsgRevokeAllowanceResponse;
                toProto(message: _75.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _75.MsgRevokeAllowanceResponse): _75.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _72.BasicAllowance | _72.PeriodicAllowance | _72.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _74.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowanceRequest;
                fromPartial(object: Partial<_74.QueryAllowanceRequest>): _74.QueryAllowanceRequest;
                fromAmino(object: _74.QueryAllowanceRequestAmino): _74.QueryAllowanceRequest;
                toAmino(message: _74.QueryAllowanceRequest): _74.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _74.QueryAllowanceRequestAminoMsg): _74.QueryAllowanceRequest;
                toAminoMsg(message: _74.QueryAllowanceRequest): _74.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAllowanceRequestProtoMsg): _74.QueryAllowanceRequest;
                toProto(message: _74.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAllowanceRequest): _74.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _74.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowanceResponse;
                fromPartial(object: Partial<_74.QueryAllowanceResponse>): _74.QueryAllowanceResponse;
                fromAmino(object: _74.QueryAllowanceResponseAmino): _74.QueryAllowanceResponse;
                toAmino(message: _74.QueryAllowanceResponse): _74.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _74.QueryAllowanceResponseAminoMsg): _74.QueryAllowanceResponse;
                toAminoMsg(message: _74.QueryAllowanceResponse): _74.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAllowanceResponseProtoMsg): _74.QueryAllowanceResponse;
                toProto(message: _74.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAllowanceResponse): _74.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _74.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowancesRequest;
                fromPartial(object: Partial<_74.QueryAllowancesRequest>): _74.QueryAllowancesRequest;
                fromAmino(object: _74.QueryAllowancesRequestAmino): _74.QueryAllowancesRequest;
                toAmino(message: _74.QueryAllowancesRequest): _74.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _74.QueryAllowancesRequestAminoMsg): _74.QueryAllowancesRequest;
                toAminoMsg(message: _74.QueryAllowancesRequest): _74.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAllowancesRequestProtoMsg): _74.QueryAllowancesRequest;
                toProto(message: _74.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAllowancesRequest): _74.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _74.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowancesResponse;
                fromPartial(object: Partial<_74.QueryAllowancesResponse>): _74.QueryAllowancesResponse;
                fromAmino(object: _74.QueryAllowancesResponseAmino): _74.QueryAllowancesResponse;
                toAmino(message: _74.QueryAllowancesResponse): _74.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _74.QueryAllowancesResponseAminoMsg): _74.QueryAllowancesResponse;
                toAminoMsg(message: _74.QueryAllowancesResponse): _74.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAllowancesResponseProtoMsg): _74.QueryAllowancesResponse;
                toProto(message: _74.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAllowancesResponse): _74.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _74.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_74.QueryAllowancesByGranterRequest>): _74.QueryAllowancesByGranterRequest;
                fromAmino(object: _74.QueryAllowancesByGranterRequestAmino): _74.QueryAllowancesByGranterRequest;
                toAmino(message: _74.QueryAllowancesByGranterRequest): _74.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _74.QueryAllowancesByGranterRequestAminoMsg): _74.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _74.QueryAllowancesByGranterRequest): _74.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAllowancesByGranterRequestProtoMsg): _74.QueryAllowancesByGranterRequest;
                toProto(message: _74.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAllowancesByGranterRequest): _74.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _74.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_74.QueryAllowancesByGranterResponse>): _74.QueryAllowancesByGranterResponse;
                fromAmino(object: _74.QueryAllowancesByGranterResponseAmino): _74.QueryAllowancesByGranterResponse;
                toAmino(message: _74.QueryAllowancesByGranterResponse): _74.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _74.QueryAllowancesByGranterResponseAminoMsg): _74.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _74.QueryAllowancesByGranterResponse): _74.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAllowancesByGranterResponseProtoMsg): _74.QueryAllowancesByGranterResponse;
                toProto(message: _74.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAllowancesByGranterResponse): _74.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _73.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                toProto(message: _73.GenesisState): Uint8Array;
                toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _72.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.BasicAllowance;
                fromPartial(object: Partial<_72.BasicAllowance>): _72.BasicAllowance;
                fromAmino(object: _72.BasicAllowanceAmino): _72.BasicAllowance;
                toAmino(message: _72.BasicAllowance): _72.BasicAllowanceAmino;
                fromAminoMsg(object: _72.BasicAllowanceAminoMsg): _72.BasicAllowance;
                toAminoMsg(message: _72.BasicAllowance): _72.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _72.BasicAllowanceProtoMsg): _72.BasicAllowance;
                toProto(message: _72.BasicAllowance): Uint8Array;
                toProtoMsg(message: _72.BasicAllowance): _72.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _72.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.PeriodicAllowance;
                fromPartial(object: Partial<_72.PeriodicAllowance>): _72.PeriodicAllowance;
                fromAmino(object: _72.PeriodicAllowanceAmino): _72.PeriodicAllowance;
                toAmino(message: _72.PeriodicAllowance): _72.PeriodicAllowanceAmino;
                fromAminoMsg(object: _72.PeriodicAllowanceAminoMsg): _72.PeriodicAllowance;
                toAminoMsg(message: _72.PeriodicAllowance): _72.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _72.PeriodicAllowanceProtoMsg): _72.PeriodicAllowance;
                toProto(message: _72.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _72.PeriodicAllowance): _72.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _72.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.AllowedMsgAllowance;
                fromPartial(object: Partial<_72.AllowedMsgAllowance>): _72.AllowedMsgAllowance;
                fromAmino(object: _72.AllowedMsgAllowanceAmino): _72.AllowedMsgAllowance;
                toAmino(message: _72.AllowedMsgAllowance): _72.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _72.AllowedMsgAllowanceAminoMsg): _72.AllowedMsgAllowance;
                toAminoMsg(message: _72.AllowedMsgAllowance): _72.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _72.AllowedMsgAllowanceProtoMsg): _72.AllowedMsgAllowance;
                toProto(message: _72.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _72.AllowedMsgAllowance): _72.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _72.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.Grant;
                fromPartial(object: Partial<_72.Grant>): _72.Grant;
                fromAmino(object: _72.GrantAmino): _72.Grant;
                toAmino(message: _72.Grant): _72.GrantAmino;
                fromAminoMsg(object: _72.GrantAminoMsg): _72.Grant;
                toAminoMsg(message: _72.Grant): _72.GrantAminoMsg;
                fromProtoMsg(message: _72.GrantProtoMsg): _72.Grant;
                toProto(message: _72.Grant): Uint8Array;
                toProtoMsg(message: _72.Grant): _72.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _76.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.GenesisState;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                toAminoMsg(message: _76.GenesisState): _76.GenesisStateAminoMsg;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _188.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                proposals(request: _79.QueryProposalsRequest): Promise<_79.QueryProposalsResponse>;
                vote(request: _79.QueryVoteRequest): Promise<_79.QueryVoteResponse>;
                votes(request: _79.QueryVotesRequest): Promise<_79.QueryVotesResponse>;
                params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                deposit(request: _79.QueryDepositRequest): Promise<_79.QueryDepositResponse>;
                deposits(request: _79.QueryDepositsRequest): Promise<_79.QueryDepositsResponse>;
                tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _80.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _80.MsgSubmitProposal;
                    };
                    vote(value: _80.MsgVote): {
                        typeUrl: string;
                        value: _80.MsgVote;
                    };
                    voteWeighted(value: _80.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _80.MsgVoteWeighted;
                    };
                    deposit(value: _80.MsgDeposit): {
                        typeUrl: string;
                        value: _80.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _80.MsgSubmitProposal) => _80.MsgSubmitProposalAmino;
                    fromAmino: (object: _80.MsgSubmitProposalAmino) => _80.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _80.MsgVote) => _80.MsgVoteAmino;
                    fromAmino: (object: _80.MsgVoteAmino) => _80.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _80.MsgVoteWeighted) => _80.MsgVoteWeightedAmino;
                    fromAmino: (object: _80.MsgVoteWeightedAmino) => _80.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _80.MsgDeposit) => _80.MsgDepositAmino;
                    fromAmino: (object: _80.MsgDepositAmino) => _80.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _80.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSubmitProposal;
                fromPartial(object: Partial<_80.MsgSubmitProposal>): _80.MsgSubmitProposal;
                fromAmino(object: _80.MsgSubmitProposalAmino): _80.MsgSubmitProposal;
                toAmino(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalAmino;
                fromAminoMsg(object: _80.MsgSubmitProposalAminoMsg): _80.MsgSubmitProposal;
                toAminoMsg(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _80.MsgSubmitProposalProtoMsg): _80.MsgSubmitProposal;
                toProto(message: _80.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _80.MsgSubmitProposal): _80.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _80.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_80.MsgSubmitProposalResponse>): _80.MsgSubmitProposalResponse;
                fromAmino(object: _80.MsgSubmitProposalResponseAmino): _80.MsgSubmitProposalResponse;
                toAmino(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _80.MsgSubmitProposalResponseAminoMsg): _80.MsgSubmitProposalResponse;
                toAminoMsg(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _80.MsgSubmitProposalResponseProtoMsg): _80.MsgSubmitProposalResponse;
                toProto(message: _80.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _80.MsgSubmitProposalResponse): _80.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _80.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgVote;
                fromPartial(object: Partial<_80.MsgVote>): _80.MsgVote;
                fromAmino(object: _80.MsgVoteAmino): _80.MsgVote;
                toAmino(message: _80.MsgVote): _80.MsgVoteAmino;
                fromAminoMsg(object: _80.MsgVoteAminoMsg): _80.MsgVote;
                toAminoMsg(message: _80.MsgVote): _80.MsgVoteAminoMsg;
                fromProtoMsg(message: _80.MsgVoteProtoMsg): _80.MsgVote;
                toProto(message: _80.MsgVote): Uint8Array;
                toProtoMsg(message: _80.MsgVote): _80.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _80.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgVoteResponse;
                fromPartial(_: Partial<_80.MsgVoteResponse>): _80.MsgVoteResponse;
                fromAmino(_: _80.MsgVoteResponseAmino): _80.MsgVoteResponse;
                toAmino(_: _80.MsgVoteResponse): _80.MsgVoteResponseAmino;
                fromAminoMsg(object: _80.MsgVoteResponseAminoMsg): _80.MsgVoteResponse;
                toAminoMsg(message: _80.MsgVoteResponse): _80.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _80.MsgVoteResponseProtoMsg): _80.MsgVoteResponse;
                toProto(message: _80.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _80.MsgVoteResponse): _80.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _80.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgVoteWeighted;
                fromPartial(object: Partial<_80.MsgVoteWeighted>): _80.MsgVoteWeighted;
                fromAmino(object: _80.MsgVoteWeightedAmino): _80.MsgVoteWeighted;
                toAmino(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedAmino;
                fromAminoMsg(object: _80.MsgVoteWeightedAminoMsg): _80.MsgVoteWeighted;
                toAminoMsg(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _80.MsgVoteWeightedProtoMsg): _80.MsgVoteWeighted;
                toProto(message: _80.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _80.MsgVoteWeighted): _80.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _80.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_80.MsgVoteWeightedResponse>): _80.MsgVoteWeightedResponse;
                fromAmino(_: _80.MsgVoteWeightedResponseAmino): _80.MsgVoteWeightedResponse;
                toAmino(_: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _80.MsgVoteWeightedResponseAminoMsg): _80.MsgVoteWeightedResponse;
                toAminoMsg(message: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _80.MsgVoteWeightedResponseProtoMsg): _80.MsgVoteWeightedResponse;
                toProto(message: _80.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _80.MsgVoteWeightedResponse): _80.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _80.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgDeposit;
                fromPartial(object: Partial<_80.MsgDeposit>): _80.MsgDeposit;
                fromAmino(object: _80.MsgDepositAmino): _80.MsgDeposit;
                toAmino(message: _80.MsgDeposit): _80.MsgDepositAmino;
                fromAminoMsg(object: _80.MsgDepositAminoMsg): _80.MsgDeposit;
                toAminoMsg(message: _80.MsgDeposit): _80.MsgDepositAminoMsg;
                fromProtoMsg(message: _80.MsgDepositProtoMsg): _80.MsgDeposit;
                toProto(message: _80.MsgDeposit): Uint8Array;
                toProtoMsg(message: _80.MsgDeposit): _80.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _80.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgDepositResponse;
                fromPartial(_: Partial<_80.MsgDepositResponse>): _80.MsgDepositResponse;
                fromAmino(_: _80.MsgDepositResponseAmino): _80.MsgDepositResponse;
                toAmino(_: _80.MsgDepositResponse): _80.MsgDepositResponseAmino;
                fromAminoMsg(object: _80.MsgDepositResponseAminoMsg): _80.MsgDepositResponse;
                toAminoMsg(message: _80.MsgDepositResponse): _80.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _80.MsgDepositResponseProtoMsg): _80.MsgDepositResponse;
                toProto(message: _80.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _80.MsgDepositResponse): _80.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _78.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _79.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalRequest;
                fromPartial(object: Partial<_79.QueryProposalRequest>): _79.QueryProposalRequest;
                fromAmino(object: _79.QueryProposalRequestAmino): _79.QueryProposalRequest;
                toAmino(message: _79.QueryProposalRequest): _79.QueryProposalRequestAmino;
                fromAminoMsg(object: _79.QueryProposalRequestAminoMsg): _79.QueryProposalRequest;
                toAminoMsg(message: _79.QueryProposalRequest): _79.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _79.QueryProposalRequestProtoMsg): _79.QueryProposalRequest;
                toProto(message: _79.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _79.QueryProposalRequest): _79.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _79.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalResponse;
                fromPartial(object: Partial<_79.QueryProposalResponse>): _79.QueryProposalResponse;
                fromAmino(object: _79.QueryProposalResponseAmino): _79.QueryProposalResponse;
                toAmino(message: _79.QueryProposalResponse): _79.QueryProposalResponseAmino;
                fromAminoMsg(object: _79.QueryProposalResponseAminoMsg): _79.QueryProposalResponse;
                toAminoMsg(message: _79.QueryProposalResponse): _79.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _79.QueryProposalResponseProtoMsg): _79.QueryProposalResponse;
                toProto(message: _79.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _79.QueryProposalResponse): _79.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _79.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalsRequest;
                fromPartial(object: Partial<_79.QueryProposalsRequest>): _79.QueryProposalsRequest;
                fromAmino(object: _79.QueryProposalsRequestAmino): _79.QueryProposalsRequest;
                toAmino(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestAmino;
                fromAminoMsg(object: _79.QueryProposalsRequestAminoMsg): _79.QueryProposalsRequest;
                toAminoMsg(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryProposalsRequestProtoMsg): _79.QueryProposalsRequest;
                toProto(message: _79.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryProposalsRequest): _79.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _79.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryProposalsResponse;
                fromPartial(object: Partial<_79.QueryProposalsResponse>): _79.QueryProposalsResponse;
                fromAmino(object: _79.QueryProposalsResponseAmino): _79.QueryProposalsResponse;
                toAmino(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseAmino;
                fromAminoMsg(object: _79.QueryProposalsResponseAminoMsg): _79.QueryProposalsResponse;
                toAminoMsg(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryProposalsResponseProtoMsg): _79.QueryProposalsResponse;
                toProto(message: _79.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryProposalsResponse): _79.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _79.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVoteRequest;
                fromPartial(object: Partial<_79.QueryVoteRequest>): _79.QueryVoteRequest;
                fromAmino(object: _79.QueryVoteRequestAmino): _79.QueryVoteRequest;
                toAmino(message: _79.QueryVoteRequest): _79.QueryVoteRequestAmino;
                fromAminoMsg(object: _79.QueryVoteRequestAminoMsg): _79.QueryVoteRequest;
                toAminoMsg(message: _79.QueryVoteRequest): _79.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVoteRequestProtoMsg): _79.QueryVoteRequest;
                toProto(message: _79.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVoteRequest): _79.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _79.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVoteResponse;
                fromPartial(object: Partial<_79.QueryVoteResponse>): _79.QueryVoteResponse;
                fromAmino(object: _79.QueryVoteResponseAmino): _79.QueryVoteResponse;
                toAmino(message: _79.QueryVoteResponse): _79.QueryVoteResponseAmino;
                fromAminoMsg(object: _79.QueryVoteResponseAminoMsg): _79.QueryVoteResponse;
                toAminoMsg(message: _79.QueryVoteResponse): _79.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVoteResponseProtoMsg): _79.QueryVoteResponse;
                toProto(message: _79.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVoteResponse): _79.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _79.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesRequest;
                fromPartial(object: Partial<_79.QueryVotesRequest>): _79.QueryVotesRequest;
                fromAmino(object: _79.QueryVotesRequestAmino): _79.QueryVotesRequest;
                toAmino(message: _79.QueryVotesRequest): _79.QueryVotesRequestAmino;
                fromAminoMsg(object: _79.QueryVotesRequestAminoMsg): _79.QueryVotesRequest;
                toAminoMsg(message: _79.QueryVotesRequest): _79.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryVotesRequestProtoMsg): _79.QueryVotesRequest;
                toProto(message: _79.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryVotesRequest): _79.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _79.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryVotesResponse;
                fromPartial(object: Partial<_79.QueryVotesResponse>): _79.QueryVotesResponse;
                fromAmino(object: _79.QueryVotesResponseAmino): _79.QueryVotesResponse;
                toAmino(message: _79.QueryVotesResponse): _79.QueryVotesResponseAmino;
                fromAminoMsg(object: _79.QueryVotesResponseAminoMsg): _79.QueryVotesResponse;
                toAminoMsg(message: _79.QueryVotesResponse): _79.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryVotesResponseProtoMsg): _79.QueryVotesResponse;
                toProto(message: _79.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryVotesResponse): _79.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _79.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryParamsRequest;
                fromPartial(object: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                fromAmino(object: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(message: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
                fromAminoMsg(object: _79.QueryParamsRequestAminoMsg): _79.QueryParamsRequest;
                toAminoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryParamsRequestProtoMsg): _79.QueryParamsRequest;
                toProto(message: _79.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _79.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryParamsResponse;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
                fromAmino(object: _79.QueryParamsResponseAmino): _79.QueryParamsResponse;
                toAmino(message: _79.QueryParamsResponse): _79.QueryParamsResponseAmino;
                fromAminoMsg(object: _79.QueryParamsResponseAminoMsg): _79.QueryParamsResponse;
                toAminoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryParamsResponseProtoMsg): _79.QueryParamsResponse;
                toProto(message: _79.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _79.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositRequest;
                fromPartial(object: Partial<_79.QueryDepositRequest>): _79.QueryDepositRequest;
                fromAmino(object: _79.QueryDepositRequestAmino): _79.QueryDepositRequest;
                toAmino(message: _79.QueryDepositRequest): _79.QueryDepositRequestAmino;
                fromAminoMsg(object: _79.QueryDepositRequestAminoMsg): _79.QueryDepositRequest;
                toAminoMsg(message: _79.QueryDepositRequest): _79.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDepositRequestProtoMsg): _79.QueryDepositRequest;
                toProto(message: _79.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDepositRequest): _79.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _79.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositResponse;
                fromPartial(object: Partial<_79.QueryDepositResponse>): _79.QueryDepositResponse;
                fromAmino(object: _79.QueryDepositResponseAmino): _79.QueryDepositResponse;
                toAmino(message: _79.QueryDepositResponse): _79.QueryDepositResponseAmino;
                fromAminoMsg(object: _79.QueryDepositResponseAminoMsg): _79.QueryDepositResponse;
                toAminoMsg(message: _79.QueryDepositResponse): _79.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDepositResponseProtoMsg): _79.QueryDepositResponse;
                toProto(message: _79.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDepositResponse): _79.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _79.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositsRequest;
                fromPartial(object: Partial<_79.QueryDepositsRequest>): _79.QueryDepositsRequest;
                fromAmino(object: _79.QueryDepositsRequestAmino): _79.QueryDepositsRequest;
                toAmino(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestAmino;
                fromAminoMsg(object: _79.QueryDepositsRequestAminoMsg): _79.QueryDepositsRequest;
                toAminoMsg(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryDepositsRequestProtoMsg): _79.QueryDepositsRequest;
                toProto(message: _79.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDepositsRequest): _79.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _79.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryDepositsResponse;
                fromPartial(object: Partial<_79.QueryDepositsResponse>): _79.QueryDepositsResponse;
                fromAmino(object: _79.QueryDepositsResponseAmino): _79.QueryDepositsResponse;
                toAmino(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseAmino;
                fromAminoMsg(object: _79.QueryDepositsResponseAminoMsg): _79.QueryDepositsResponse;
                toAminoMsg(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryDepositsResponseProtoMsg): _79.QueryDepositsResponse;
                toProto(message: _79.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDepositsResponse): _79.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _79.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTallyResultRequest;
                fromPartial(object: Partial<_79.QueryTallyResultRequest>): _79.QueryTallyResultRequest;
                fromAmino(object: _79.QueryTallyResultRequestAmino): _79.QueryTallyResultRequest;
                toAmino(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _79.QueryTallyResultRequestAminoMsg): _79.QueryTallyResultRequest;
                toAminoMsg(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _79.QueryTallyResultRequestProtoMsg): _79.QueryTallyResultRequest;
                toProto(message: _79.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _79.QueryTallyResultRequest): _79.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _79.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryTallyResultResponse;
                fromPartial(object: Partial<_79.QueryTallyResultResponse>): _79.QueryTallyResultResponse;
                fromAmino(object: _79.QueryTallyResultResponseAmino): _79.QueryTallyResultResponse;
                toAmino(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _79.QueryTallyResultResponseAminoMsg): _79.QueryTallyResultResponse;
                toAminoMsg(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _79.QueryTallyResultResponseProtoMsg): _79.QueryTallyResultResponse;
                toProto(message: _79.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _79.QueryTallyResultResponse): _79.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _78.VoteOption;
            voteOptionToJSON(object: _78.VoteOption): string;
            proposalStatusFromJSON(object: any): _78.ProposalStatus;
            proposalStatusToJSON(object: _78.ProposalStatus): string;
            VoteOption: typeof _78.VoteOption;
            VoteOptionSDKType: typeof _78.VoteOption;
            VoteOptionAmino: typeof _78.VoteOption;
            ProposalStatus: typeof _78.ProposalStatus;
            ProposalStatusSDKType: typeof _78.ProposalStatus;
            ProposalStatusAmino: typeof _78.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _78.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.WeightedVoteOption;
                fromPartial(object: Partial<_78.WeightedVoteOption>): _78.WeightedVoteOption;
                fromAmino(object: _78.WeightedVoteOptionAmino): _78.WeightedVoteOption;
                toAmino(message: _78.WeightedVoteOption): _78.WeightedVoteOptionAmino;
                fromAminoMsg(object: _78.WeightedVoteOptionAminoMsg): _78.WeightedVoteOption;
                toAminoMsg(message: _78.WeightedVoteOption): _78.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _78.WeightedVoteOptionProtoMsg): _78.WeightedVoteOption;
                toProto(message: _78.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _78.WeightedVoteOption): _78.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _78.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TextProposal;
                fromPartial(object: Partial<_78.TextProposal>): _78.TextProposal;
                fromAmino(object: _78.TextProposalAmino): _78.TextProposal;
                toAmino(message: _78.TextProposal): _78.TextProposalAmino;
                fromAminoMsg(object: _78.TextProposalAminoMsg): _78.TextProposal;
                toAminoMsg(message: _78.TextProposal): _78.TextProposalAminoMsg;
                fromProtoMsg(message: _78.TextProposalProtoMsg): _78.TextProposal;
                toProto(message: _78.TextProposal): Uint8Array;
                toProtoMsg(message: _78.TextProposal): _78.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _78.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Deposit;
                fromPartial(object: Partial<_78.Deposit>): _78.Deposit;
                fromAmino(object: _78.DepositAmino): _78.Deposit;
                toAmino(message: _78.Deposit): _78.DepositAmino;
                fromAminoMsg(object: _78.DepositAminoMsg): _78.Deposit;
                toAminoMsg(message: _78.Deposit): _78.DepositAminoMsg;
                fromProtoMsg(message: _78.DepositProtoMsg): _78.Deposit;
                toProto(message: _78.Deposit): Uint8Array;
                toProtoMsg(message: _78.Deposit): _78.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _78.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Proposal;
                fromPartial(object: Partial<_78.Proposal>): _78.Proposal;
                fromAmino(object: _78.ProposalAmino): _78.Proposal;
                toAmino(message: _78.Proposal): _78.ProposalAmino;
                fromAminoMsg(object: _78.ProposalAminoMsg): _78.Proposal;
                toAminoMsg(message: _78.Proposal): _78.ProposalAminoMsg;
                fromProtoMsg(message: _78.ProposalProtoMsg): _78.Proposal;
                toProto(message: _78.Proposal): Uint8Array;
                toProtoMsg(message: _78.Proposal): _78.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _78.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TallyResult;
                fromPartial(object: Partial<_78.TallyResult>): _78.TallyResult;
                fromAmino(object: _78.TallyResultAmino): _78.TallyResult;
                toAmino(message: _78.TallyResult): _78.TallyResultAmino;
                fromAminoMsg(object: _78.TallyResultAminoMsg): _78.TallyResult;
                toAminoMsg(message: _78.TallyResult): _78.TallyResultAminoMsg;
                fromProtoMsg(message: _78.TallyResultProtoMsg): _78.TallyResult;
                toProto(message: _78.TallyResult): Uint8Array;
                toProtoMsg(message: _78.TallyResult): _78.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _78.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.Vote;
                fromPartial(object: Partial<_78.Vote>): _78.Vote;
                fromAmino(object: _78.VoteAmino): _78.Vote;
                toAmino(message: _78.Vote): _78.VoteAmino;
                fromAminoMsg(object: _78.VoteAminoMsg): _78.Vote;
                toAminoMsg(message: _78.Vote): _78.VoteAminoMsg;
                fromProtoMsg(message: _78.VoteProtoMsg): _78.Vote;
                toProto(message: _78.Vote): Uint8Array;
                toProtoMsg(message: _78.Vote): _78.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _78.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.DepositParams;
                fromPartial(object: Partial<_78.DepositParams>): _78.DepositParams;
                fromAmino(object: _78.DepositParamsAmino): _78.DepositParams;
                toAmino(message: _78.DepositParams): _78.DepositParamsAmino;
                fromAminoMsg(object: _78.DepositParamsAminoMsg): _78.DepositParams;
                toAminoMsg(message: _78.DepositParams): _78.DepositParamsAminoMsg;
                fromProtoMsg(message: _78.DepositParamsProtoMsg): _78.DepositParams;
                toProto(message: _78.DepositParams): Uint8Array;
                toProtoMsg(message: _78.DepositParams): _78.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _78.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.VotingParams;
                fromPartial(object: Partial<_78.VotingParams>): _78.VotingParams;
                fromAmino(object: _78.VotingParamsAmino): _78.VotingParams;
                toAmino(message: _78.VotingParams): _78.VotingParamsAmino;
                fromAminoMsg(object: _78.VotingParamsAminoMsg): _78.VotingParams;
                toAminoMsg(message: _78.VotingParams): _78.VotingParamsAminoMsg;
                fromProtoMsg(message: _78.VotingParamsProtoMsg): _78.VotingParams;
                toProto(message: _78.VotingParams): Uint8Array;
                toProtoMsg(message: _78.VotingParams): _78.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _78.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.TallyParams;
                fromPartial(object: Partial<_78.TallyParams>): _78.TallyParams;
                fromAmino(object: _78.TallyParamsAmino): _78.TallyParams;
                toAmino(message: _78.TallyParams): _78.TallyParamsAmino;
                fromAminoMsg(object: _78.TallyParamsAminoMsg): _78.TallyParams;
                toAminoMsg(message: _78.TallyParams): _78.TallyParamsAminoMsg;
                fromProtoMsg(message: _78.TallyParamsProtoMsg): _78.TallyParams;
                toProto(message: _78.TallyParams): Uint8Array;
                toProtoMsg(message: _78.TallyParams): _78.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _77.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.GenesisState;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
                fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                toAminoMsg(message: _77.GenesisState): _77.GenesisStateAminoMsg;
                fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                toProto(message: _77.GenesisState): Uint8Array;
                toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _189.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                inflation(request?: _83.QueryInflationRequest): Promise<_83.QueryInflationResponse>;
                annualProvisions(request?: _83.QueryAnnualProvisionsRequest): Promise<_83.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _174.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryParamsRequest;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromAmino(_: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(_: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
                fromAminoMsg(object: _83.QueryParamsRequestAminoMsg): _83.QueryParamsRequest;
                toAminoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryParamsRequestProtoMsg): _83.QueryParamsRequest;
                toProto(message: _83.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _83.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryParamsResponse;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
                fromAmino(object: _83.QueryParamsResponseAmino): _83.QueryParamsResponse;
                toAmino(message: _83.QueryParamsResponse): _83.QueryParamsResponseAmino;
                fromAminoMsg(object: _83.QueryParamsResponseAminoMsg): _83.QueryParamsResponse;
                toAminoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryParamsResponseProtoMsg): _83.QueryParamsResponse;
                toProto(message: _83.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _83.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryInflationRequest;
                fromPartial(_: Partial<_83.QueryInflationRequest>): _83.QueryInflationRequest;
                fromAmino(_: _83.QueryInflationRequestAmino): _83.QueryInflationRequest;
                toAmino(_: _83.QueryInflationRequest): _83.QueryInflationRequestAmino;
                fromAminoMsg(object: _83.QueryInflationRequestAminoMsg): _83.QueryInflationRequest;
                toAminoMsg(message: _83.QueryInflationRequest): _83.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _83.QueryInflationRequestProtoMsg): _83.QueryInflationRequest;
                toProto(message: _83.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _83.QueryInflationRequest): _83.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _83.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryInflationResponse;
                fromPartial(object: Partial<_83.QueryInflationResponse>): _83.QueryInflationResponse;
                fromAmino(object: _83.QueryInflationResponseAmino): _83.QueryInflationResponse;
                toAmino(message: _83.QueryInflationResponse): _83.QueryInflationResponseAmino;
                fromAminoMsg(object: _83.QueryInflationResponseAminoMsg): _83.QueryInflationResponse;
                toAminoMsg(message: _83.QueryInflationResponse): _83.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _83.QueryInflationResponseProtoMsg): _83.QueryInflationResponse;
                toProto(message: _83.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _83.QueryInflationResponse): _83.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _83.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _83.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_83.QueryAnnualProvisionsRequest>): _83.QueryAnnualProvisionsRequest;
                fromAmino(_: _83.QueryAnnualProvisionsRequestAmino): _83.QueryAnnualProvisionsRequest;
                toAmino(_: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _83.QueryAnnualProvisionsRequestAminoMsg): _83.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryAnnualProvisionsRequestProtoMsg): _83.QueryAnnualProvisionsRequest;
                toProto(message: _83.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _83.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _83.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_83.QueryAnnualProvisionsResponse>): _83.QueryAnnualProvisionsResponse;
                fromAmino(object: _83.QueryAnnualProvisionsResponseAmino): _83.QueryAnnualProvisionsResponse;
                toAmino(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _83.QueryAnnualProvisionsResponseAminoMsg): _83.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryAnnualProvisionsResponseProtoMsg): _83.QueryAnnualProvisionsResponse;
                toProto(message: _83.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _82.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Minter;
                fromPartial(object: Partial<_82.Minter>): _82.Minter;
                fromAmino(object: _82.MinterAmino): _82.Minter;
                toAmino(message: _82.Minter): _82.MinterAmino;
                fromAminoMsg(object: _82.MinterAminoMsg): _82.Minter;
                toAminoMsg(message: _82.Minter): _82.MinterAminoMsg;
                fromProtoMsg(message: _82.MinterProtoMsg): _82.Minter;
                toProto(message: _82.Minter): Uint8Array;
                toProtoMsg(message: _82.Minter): _82.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _82.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.Params;
                fromPartial(object: Partial<_82.Params>): _82.Params;
                fromAmino(object: _82.ParamsAmino): _82.Params;
                toAmino(message: _82.Params): _82.ParamsAmino;
                fromAminoMsg(object: _82.ParamsAminoMsg): _82.Params;
                toAminoMsg(message: _82.Params): _82.ParamsAminoMsg;
                fromProtoMsg(message: _82.ParamsProtoMsg): _82.Params;
                toProto(message: _82.Params): Uint8Array;
                toProtoMsg(message: _82.Params): _82.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _81.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.GenesisState;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                toAminoMsg(message: _81.GenesisState): _81.GenesisStateAminoMsg;
                fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                toProto(message: _81.GenesisState): Uint8Array;
                toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _190.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _85.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryParamsRequest;
                fromPartial(object: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
                fromAmino(object: _85.QueryParamsRequestAmino): _85.QueryParamsRequest;
                toAmino(message: _85.QueryParamsRequest): _85.QueryParamsRequestAmino;
                fromAminoMsg(object: _85.QueryParamsRequestAminoMsg): _85.QueryParamsRequest;
                toAminoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryParamsRequestProtoMsg): _85.QueryParamsRequest;
                toProto(message: _85.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _85.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.QueryParamsResponse;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
                fromAmino(object: _85.QueryParamsResponseAmino): _85.QueryParamsResponse;
                toAmino(message: _85.QueryParamsResponse): _85.QueryParamsResponseAmino;
                fromAminoMsg(object: _85.QueryParamsResponseAminoMsg): _85.QueryParamsResponse;
                toAminoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryParamsResponseProtoMsg): _85.QueryParamsResponse;
                toProto(message: _85.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _84.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ParameterChangeProposal;
                fromPartial(object: Partial<_84.ParameterChangeProposal>): _84.ParameterChangeProposal;
                fromAmino(object: _84.ParameterChangeProposalAmino): _84.ParameterChangeProposal;
                toAmino(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalAmino;
                fromAminoMsg(object: _84.ParameterChangeProposalAminoMsg): _84.ParameterChangeProposal;
                toAminoMsg(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _84.ParameterChangeProposalProtoMsg): _84.ParameterChangeProposal;
                toProto(message: _84.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _84.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.ParamChange;
                fromPartial(object: Partial<_84.ParamChange>): _84.ParamChange;
                fromAmino(object: _84.ParamChangeAmino): _84.ParamChange;
                toAmino(message: _84.ParamChange): _84.ParamChangeAmino;
                fromAminoMsg(object: _84.ParamChangeAminoMsg): _84.ParamChange;
                toAminoMsg(message: _84.ParamChange): _84.ParamChangeAminoMsg;
                fromProtoMsg(message: _84.ParamChangeProtoMsg): _84.ParamChange;
                toProto(message: _84.ParamChange): Uint8Array;
                toProtoMsg(message: _84.ParamChange): _84.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _191.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUnjail) => _89.MsgUnjailAmino;
                    fromAmino: (object: _89.MsgUnjailAmino) => _89.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _89.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.MsgUnjail;
                fromPartial(object: Partial<_89.MsgUnjail>): _89.MsgUnjail;
                fromAmino(object: _89.MsgUnjailAmino): _89.MsgUnjail;
                toAmino(message: _89.MsgUnjail): _89.MsgUnjailAmino;
                fromAminoMsg(object: _89.MsgUnjailAminoMsg): _89.MsgUnjail;
                toAminoMsg(message: _89.MsgUnjail): _89.MsgUnjailAminoMsg;
                fromProtoMsg(message: _89.MsgUnjailProtoMsg): _89.MsgUnjail;
                toProto(message: _89.MsgUnjail): Uint8Array;
                toProtoMsg(message: _89.MsgUnjail): _89.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _89.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _89.MsgUnjailResponse;
                fromPartial(_: Partial<_89.MsgUnjailResponse>): _89.MsgUnjailResponse;
                fromAmino(_: _89.MsgUnjailResponseAmino): _89.MsgUnjailResponse;
                toAmino(_: _89.MsgUnjailResponse): _89.MsgUnjailResponseAmino;
                fromAminoMsg(object: _89.MsgUnjailResponseAminoMsg): _89.MsgUnjailResponse;
                toAminoMsg(message: _89.MsgUnjailResponse): _89.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUnjailResponseProtoMsg): _89.MsgUnjailResponse;
                toProto(message: _89.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUnjailResponse): _89.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _88.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.ValidatorSigningInfo;
                fromPartial(object: Partial<_88.ValidatorSigningInfo>): _88.ValidatorSigningInfo;
                fromAmino(object: _88.ValidatorSigningInfoAmino): _88.ValidatorSigningInfo;
                toAmino(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _88.ValidatorSigningInfoAminoMsg): _88.ValidatorSigningInfo;
                toAminoMsg(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _88.ValidatorSigningInfoProtoMsg): _88.ValidatorSigningInfo;
                toProto(message: _88.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _88.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Params;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _87.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _87.QueryParamsRequest;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _87.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QueryParamsResponse;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QuerySigningInfoRequest;
                fromPartial(object: Partial<_87.QuerySigningInfoRequest>): _87.QuerySigningInfoRequest;
                fromAmino(object: _87.QuerySigningInfoRequestAmino): _87.QuerySigningInfoRequest;
                toAmino(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _87.QuerySigningInfoRequestAminoMsg): _87.QuerySigningInfoRequest;
                toAminoMsg(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfoRequestProtoMsg): _87.QuerySigningInfoRequest;
                toProto(message: _87.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QuerySigningInfoResponse;
                fromPartial(object: Partial<_87.QuerySigningInfoResponse>): _87.QuerySigningInfoResponse;
                fromAmino(object: _87.QuerySigningInfoResponseAmino): _87.QuerySigningInfoResponse;
                toAmino(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _87.QuerySigningInfoResponseAminoMsg): _87.QuerySigningInfoResponse;
                toAminoMsg(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfoResponseProtoMsg): _87.QuerySigningInfoResponse;
                toProto(message: _87.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QuerySigningInfosRequest;
                fromPartial(object: Partial<_87.QuerySigningInfosRequest>): _87.QuerySigningInfosRequest;
                fromAmino(object: _87.QuerySigningInfosRequestAmino): _87.QuerySigningInfosRequest;
                toAmino(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _87.QuerySigningInfosRequestAminoMsg): _87.QuerySigningInfosRequest;
                toAminoMsg(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfosRequestProtoMsg): _87.QuerySigningInfosRequest;
                toProto(message: _87.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.QuerySigningInfosResponse;
                fromPartial(object: Partial<_87.QuerySigningInfosResponse>): _87.QuerySigningInfosResponse;
                fromAmino(object: _87.QuerySigningInfosResponseAmino): _87.QuerySigningInfosResponse;
                toAmino(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _87.QuerySigningInfosResponseAminoMsg): _87.QuerySigningInfosResponse;
                toAminoMsg(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfosResponseProtoMsg): _87.QuerySigningInfosResponse;
                toProto(message: _87.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.GenesisState;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _86.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.SigningInfo;
                fromPartial(object: Partial<_86.SigningInfo>): _86.SigningInfo;
                fromAmino(object: _86.SigningInfoAmino): _86.SigningInfo;
                toAmino(message: _86.SigningInfo): _86.SigningInfoAmino;
                fromAminoMsg(object: _86.SigningInfoAminoMsg): _86.SigningInfo;
                toAminoMsg(message: _86.SigningInfo): _86.SigningInfoAminoMsg;
                fromProtoMsg(message: _86.SigningInfoProtoMsg): _86.SigningInfo;
                toProto(message: _86.SigningInfo): Uint8Array;
                toProtoMsg(message: _86.SigningInfo): _86.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _86.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.ValidatorMissedBlocks;
                fromPartial(object: Partial<_86.ValidatorMissedBlocks>): _86.ValidatorMissedBlocks;
                fromAmino(object: _86.ValidatorMissedBlocksAmino): _86.ValidatorMissedBlocks;
                toAmino(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _86.ValidatorMissedBlocksAminoMsg): _86.ValidatorMissedBlocks;
                toAminoMsg(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _86.ValidatorMissedBlocksProtoMsg): _86.ValidatorMissedBlocks;
                toProto(message: _86.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _86.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MissedBlock;
                fromPartial(object: Partial<_86.MissedBlock>): _86.MissedBlock;
                fromAmino(object: _86.MissedBlockAmino): _86.MissedBlock;
                toAmino(message: _86.MissedBlock): _86.MissedBlockAmino;
                fromAminoMsg(object: _86.MissedBlockAminoMsg): _86.MissedBlock;
                toAminoMsg(message: _86.MissedBlock): _86.MissedBlockAminoMsg;
                fromProtoMsg(message: _86.MissedBlockProtoMsg): _86.MissedBlock;
                toProto(message: _86.MissedBlock): Uint8Array;
                toProtoMsg(message: _86.MissedBlock): _86.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _192.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateValidator) => _94.MsgCreateValidatorAmino;
                    fromAmino: (object: _94.MsgCreateValidatorAmino) => _94.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _94.MsgEditValidator) => _94.MsgEditValidatorAmino;
                    fromAmino: (object: _94.MsgEditValidatorAmino) => _94.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgDelegate) => _94.MsgDelegateAmino;
                    fromAmino: (object: _94.MsgDelegateAmino) => _94.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgBeginRedelegate) => _94.MsgBeginRedelegateAmino;
                    fromAmino: (object: _94.MsgBeginRedelegateAmino) => _94.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUndelegate) => _94.MsgUndelegateAmino;
                    fromAmino: (object: _94.MsgUndelegateAmino) => _94.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _94.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgCreateValidator;
                fromPartial(object: Partial<_94.MsgCreateValidator>): _94.MsgCreateValidator;
                fromAmino(object: _94.MsgCreateValidatorAmino): _94.MsgCreateValidator;
                toAmino(message: _94.MsgCreateValidator): _94.MsgCreateValidatorAmino;
                fromAminoMsg(object: _94.MsgCreateValidatorAminoMsg): _94.MsgCreateValidator;
                toAminoMsg(message: _94.MsgCreateValidator): _94.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _94.MsgCreateValidatorProtoMsg): _94.MsgCreateValidator;
                toProto(message: _94.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _94.MsgCreateValidator): _94.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _94.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_94.MsgCreateValidatorResponse>): _94.MsgCreateValidatorResponse;
                fromAmino(_: _94.MsgCreateValidatorResponseAmino): _94.MsgCreateValidatorResponse;
                toAmino(_: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _94.MsgCreateValidatorResponseAminoMsg): _94.MsgCreateValidatorResponse;
                toAminoMsg(message: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateValidatorResponseProtoMsg): _94.MsgCreateValidatorResponse;
                toProto(message: _94.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _94.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgEditValidator;
                fromPartial(object: Partial<_94.MsgEditValidator>): _94.MsgEditValidator;
                fromAmino(object: _94.MsgEditValidatorAmino): _94.MsgEditValidator;
                toAmino(message: _94.MsgEditValidator): _94.MsgEditValidatorAmino;
                fromAminoMsg(object: _94.MsgEditValidatorAminoMsg): _94.MsgEditValidator;
                toAminoMsg(message: _94.MsgEditValidator): _94.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _94.MsgEditValidatorProtoMsg): _94.MsgEditValidator;
                toProto(message: _94.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _94.MsgEditValidator): _94.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _94.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgEditValidatorResponse;
                fromPartial(_: Partial<_94.MsgEditValidatorResponse>): _94.MsgEditValidatorResponse;
                fromAmino(_: _94.MsgEditValidatorResponseAmino): _94.MsgEditValidatorResponse;
                toAmino(_: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _94.MsgEditValidatorResponseAminoMsg): _94.MsgEditValidatorResponse;
                toAminoMsg(message: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _94.MsgEditValidatorResponseProtoMsg): _94.MsgEditValidatorResponse;
                toProto(message: _94.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _94.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgDelegate;
                fromPartial(object: Partial<_94.MsgDelegate>): _94.MsgDelegate;
                fromAmino(object: _94.MsgDelegateAmino): _94.MsgDelegate;
                toAmino(message: _94.MsgDelegate): _94.MsgDelegateAmino;
                fromAminoMsg(object: _94.MsgDelegateAminoMsg): _94.MsgDelegate;
                toAminoMsg(message: _94.MsgDelegate): _94.MsgDelegateAminoMsg;
                fromProtoMsg(message: _94.MsgDelegateProtoMsg): _94.MsgDelegate;
                toProto(message: _94.MsgDelegate): Uint8Array;
                toProtoMsg(message: _94.MsgDelegate): _94.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _94.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _94.MsgDelegateResponse;
                fromPartial(_: Partial<_94.MsgDelegateResponse>): _94.MsgDelegateResponse;
                fromAmino(_: _94.MsgDelegateResponseAmino): _94.MsgDelegateResponse;
                toAmino(_: _94.MsgDelegateResponse): _94.MsgDelegateResponseAmino;
                fromAminoMsg(object: _94.MsgDelegateResponseAminoMsg): _94.MsgDelegateResponse;
                toAminoMsg(message: _94.MsgDelegateResponse): _94.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgDelegateResponseProtoMsg): _94.MsgDelegateResponse;
                toProto(message: _94.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgDelegateResponse): _94.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _94.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgBeginRedelegate;
                fromPartial(object: Partial<_94.MsgBeginRedelegate>): _94.MsgBeginRedelegate;
                fromAmino(object: _94.MsgBeginRedelegateAmino): _94.MsgBeginRedelegate;
                toAmino(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _94.MsgBeginRedelegateAminoMsg): _94.MsgBeginRedelegate;
                toAminoMsg(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _94.MsgBeginRedelegateProtoMsg): _94.MsgBeginRedelegate;
                toProto(message: _94.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _94.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_94.MsgBeginRedelegateResponse>): _94.MsgBeginRedelegateResponse;
                fromAmino(object: _94.MsgBeginRedelegateResponseAmino): _94.MsgBeginRedelegateResponse;
                toAmino(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _94.MsgBeginRedelegateResponseAminoMsg): _94.MsgBeginRedelegateResponse;
                toAminoMsg(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgBeginRedelegateResponseProtoMsg): _94.MsgBeginRedelegateResponse;
                toProto(message: _94.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _94.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUndelegate;
                fromPartial(object: Partial<_94.MsgUndelegate>): _94.MsgUndelegate;
                fromAmino(object: _94.MsgUndelegateAmino): _94.MsgUndelegate;
                toAmino(message: _94.MsgUndelegate): _94.MsgUndelegateAmino;
                fromAminoMsg(object: _94.MsgUndelegateAminoMsg): _94.MsgUndelegate;
                toAminoMsg(message: _94.MsgUndelegate): _94.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _94.MsgUndelegateProtoMsg): _94.MsgUndelegate;
                toProto(message: _94.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _94.MsgUndelegate): _94.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _94.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgUndelegateResponse;
                fromPartial(object: Partial<_94.MsgUndelegateResponse>): _94.MsgUndelegateResponse;
                fromAmino(object: _94.MsgUndelegateResponseAmino): _94.MsgUndelegateResponse;
                toAmino(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _94.MsgUndelegateResponseAminoMsg): _94.MsgUndelegateResponse;
                toAminoMsg(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUndelegateResponseProtoMsg): _94.MsgUndelegateResponse;
                toProto(message: _94.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _93.BondStatus;
            bondStatusToJSON(object: _93.BondStatus): string;
            BondStatus: typeof _93.BondStatus;
            BondStatusSDKType: typeof _93.BondStatus;
            BondStatusAmino: typeof _93.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _93.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.HistoricalInfo;
                fromPartial(object: Partial<_93.HistoricalInfo>): _93.HistoricalInfo;
                fromAmino(object: _93.HistoricalInfoAmino): _93.HistoricalInfo;
                toAmino(message: _93.HistoricalInfo): _93.HistoricalInfoAmino;
                fromAminoMsg(object: _93.HistoricalInfoAminoMsg): _93.HistoricalInfo;
                toAminoMsg(message: _93.HistoricalInfo): _93.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _93.HistoricalInfoProtoMsg): _93.HistoricalInfo;
                toProto(message: _93.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _93.HistoricalInfo): _93.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _93.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.CommissionRates;
                fromPartial(object: Partial<_93.CommissionRates>): _93.CommissionRates;
                fromAmino(object: _93.CommissionRatesAmino): _93.CommissionRates;
                toAmino(message: _93.CommissionRates): _93.CommissionRatesAmino;
                fromAminoMsg(object: _93.CommissionRatesAminoMsg): _93.CommissionRates;
                toAminoMsg(message: _93.CommissionRates): _93.CommissionRatesAminoMsg;
                fromProtoMsg(message: _93.CommissionRatesProtoMsg): _93.CommissionRates;
                toProto(message: _93.CommissionRates): Uint8Array;
                toProtoMsg(message: _93.CommissionRates): _93.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _93.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Commission;
                fromPartial(object: Partial<_93.Commission>): _93.Commission;
                fromAmino(object: _93.CommissionAmino): _93.Commission;
                toAmino(message: _93.Commission): _93.CommissionAmino;
                fromAminoMsg(object: _93.CommissionAminoMsg): _93.Commission;
                toAminoMsg(message: _93.Commission): _93.CommissionAminoMsg;
                fromProtoMsg(message: _93.CommissionProtoMsg): _93.Commission;
                toProto(message: _93.Commission): Uint8Array;
                toProtoMsg(message: _93.Commission): _93.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _93.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Description;
                fromPartial(object: Partial<_93.Description>): _93.Description;
                fromAmino(object: _93.DescriptionAmino): _93.Description;
                toAmino(message: _93.Description): _93.DescriptionAmino;
                fromAminoMsg(object: _93.DescriptionAminoMsg): _93.Description;
                toAminoMsg(message: _93.Description): _93.DescriptionAminoMsg;
                fromProtoMsg(message: _93.DescriptionProtoMsg): _93.Description;
                toProto(message: _93.Description): Uint8Array;
                toProtoMsg(message: _93.Description): _93.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _93.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Validator;
                fromPartial(object: Partial<_93.Validator>): _93.Validator;
                fromAmino(object: _93.ValidatorAmino): _93.Validator;
                toAmino(message: _93.Validator): _93.ValidatorAmino;
                fromAminoMsg(object: _93.ValidatorAminoMsg): _93.Validator;
                toAminoMsg(message: _93.Validator): _93.ValidatorAminoMsg;
                fromProtoMsg(message: _93.ValidatorProtoMsg): _93.Validator;
                toProto(message: _93.Validator): Uint8Array;
                toProtoMsg(message: _93.Validator): _93.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _93.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.ValAddresses;
                fromPartial(object: Partial<_93.ValAddresses>): _93.ValAddresses;
                fromAmino(object: _93.ValAddressesAmino): _93.ValAddresses;
                toAmino(message: _93.ValAddresses): _93.ValAddressesAmino;
                fromAminoMsg(object: _93.ValAddressesAminoMsg): _93.ValAddresses;
                toAminoMsg(message: _93.ValAddresses): _93.ValAddressesAminoMsg;
                fromProtoMsg(message: _93.ValAddressesProtoMsg): _93.ValAddresses;
                toProto(message: _93.ValAddresses): Uint8Array;
                toProtoMsg(message: _93.ValAddresses): _93.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _93.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DVPair;
                fromPartial(object: Partial<_93.DVPair>): _93.DVPair;
                fromAmino(object: _93.DVPairAmino): _93.DVPair;
                toAmino(message: _93.DVPair): _93.DVPairAmino;
                fromAminoMsg(object: _93.DVPairAminoMsg): _93.DVPair;
                toAminoMsg(message: _93.DVPair): _93.DVPairAminoMsg;
                fromProtoMsg(message: _93.DVPairProtoMsg): _93.DVPair;
                toProto(message: _93.DVPair): Uint8Array;
                toProtoMsg(message: _93.DVPair): _93.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _93.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DVPairs;
                fromPartial(object: Partial<_93.DVPairs>): _93.DVPairs;
                fromAmino(object: _93.DVPairsAmino): _93.DVPairs;
                toAmino(message: _93.DVPairs): _93.DVPairsAmino;
                fromAminoMsg(object: _93.DVPairsAminoMsg): _93.DVPairs;
                toAminoMsg(message: _93.DVPairs): _93.DVPairsAminoMsg;
                fromProtoMsg(message: _93.DVPairsProtoMsg): _93.DVPairs;
                toProto(message: _93.DVPairs): Uint8Array;
                toProtoMsg(message: _93.DVPairs): _93.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _93.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DVVTriplet;
                fromPartial(object: Partial<_93.DVVTriplet>): _93.DVVTriplet;
                fromAmino(object: _93.DVVTripletAmino): _93.DVVTriplet;
                toAmino(message: _93.DVVTriplet): _93.DVVTripletAmino;
                fromAminoMsg(object: _93.DVVTripletAminoMsg): _93.DVVTriplet;
                toAminoMsg(message: _93.DVVTriplet): _93.DVVTripletAminoMsg;
                fromProtoMsg(message: _93.DVVTripletProtoMsg): _93.DVVTriplet;
                toProto(message: _93.DVVTriplet): Uint8Array;
                toProtoMsg(message: _93.DVVTriplet): _93.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _93.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DVVTriplets;
                fromPartial(object: Partial<_93.DVVTriplets>): _93.DVVTriplets;
                fromAmino(object: _93.DVVTripletsAmino): _93.DVVTriplets;
                toAmino(message: _93.DVVTriplets): _93.DVVTripletsAmino;
                fromAminoMsg(object: _93.DVVTripletsAminoMsg): _93.DVVTriplets;
                toAminoMsg(message: _93.DVVTriplets): _93.DVVTripletsAminoMsg;
                fromProtoMsg(message: _93.DVVTripletsProtoMsg): _93.DVVTriplets;
                toProto(message: _93.DVVTriplets): Uint8Array;
                toProtoMsg(message: _93.DVVTriplets): _93.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _93.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Delegation;
                fromPartial(object: Partial<_93.Delegation>): _93.Delegation;
                fromAmino(object: _93.DelegationAmino): _93.Delegation;
                toAmino(message: _93.Delegation): _93.DelegationAmino;
                fromAminoMsg(object: _93.DelegationAminoMsg): _93.Delegation;
                toAminoMsg(message: _93.Delegation): _93.DelegationAminoMsg;
                fromProtoMsg(message: _93.DelegationProtoMsg): _93.Delegation;
                toProto(message: _93.Delegation): Uint8Array;
                toProtoMsg(message: _93.Delegation): _93.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _93.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.UnbondingDelegation;
                fromPartial(object: Partial<_93.UnbondingDelegation>): _93.UnbondingDelegation;
                fromAmino(object: _93.UnbondingDelegationAmino): _93.UnbondingDelegation;
                toAmino(message: _93.UnbondingDelegation): _93.UnbondingDelegationAmino;
                fromAminoMsg(object: _93.UnbondingDelegationAminoMsg): _93.UnbondingDelegation;
                toAminoMsg(message: _93.UnbondingDelegation): _93.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _93.UnbondingDelegationProtoMsg): _93.UnbondingDelegation;
                toProto(message: _93.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _93.UnbondingDelegation): _93.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _93.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.UnbondingDelegationEntry;
                fromPartial(object: Partial<_93.UnbondingDelegationEntry>): _93.UnbondingDelegationEntry;
                fromAmino(object: _93.UnbondingDelegationEntryAmino): _93.UnbondingDelegationEntry;
                toAmino(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _93.UnbondingDelegationEntryAminoMsg): _93.UnbondingDelegationEntry;
                toAminoMsg(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _93.UnbondingDelegationEntryProtoMsg): _93.UnbondingDelegationEntry;
                toProto(message: _93.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _93.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.RedelegationEntry;
                fromPartial(object: Partial<_93.RedelegationEntry>): _93.RedelegationEntry;
                fromAmino(object: _93.RedelegationEntryAmino): _93.RedelegationEntry;
                toAmino(message: _93.RedelegationEntry): _93.RedelegationEntryAmino;
                fromAminoMsg(object: _93.RedelegationEntryAminoMsg): _93.RedelegationEntry;
                toAminoMsg(message: _93.RedelegationEntry): _93.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _93.RedelegationEntryProtoMsg): _93.RedelegationEntry;
                toProto(message: _93.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _93.RedelegationEntry): _93.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _93.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Redelegation;
                fromPartial(object: Partial<_93.Redelegation>): _93.Redelegation;
                fromAmino(object: _93.RedelegationAmino): _93.Redelegation;
                toAmino(message: _93.Redelegation): _93.RedelegationAmino;
                fromAminoMsg(object: _93.RedelegationAminoMsg): _93.Redelegation;
                toAminoMsg(message: _93.Redelegation): _93.RedelegationAminoMsg;
                fromProtoMsg(message: _93.RedelegationProtoMsg): _93.Redelegation;
                toProto(message: _93.Redelegation): Uint8Array;
                toProtoMsg(message: _93.Redelegation): _93.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _93.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Params;
                fromPartial(object: Partial<_93.Params>): _93.Params;
                fromAmino(object: _93.ParamsAmino): _93.Params;
                toAmino(message: _93.Params): _93.ParamsAmino;
                fromAminoMsg(object: _93.ParamsAminoMsg): _93.Params;
                toAminoMsg(message: _93.Params): _93.ParamsAminoMsg;
                fromProtoMsg(message: _93.ParamsProtoMsg): _93.Params;
                toProto(message: _93.Params): Uint8Array;
                toProtoMsg(message: _93.Params): _93.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _93.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.DelegationResponse;
                fromPartial(object: Partial<_93.DelegationResponse>): _93.DelegationResponse;
                fromAmino(object: _93.DelegationResponseAmino): _93.DelegationResponse;
                toAmino(message: _93.DelegationResponse): _93.DelegationResponseAmino;
                fromAminoMsg(object: _93.DelegationResponseAminoMsg): _93.DelegationResponse;
                toAminoMsg(message: _93.DelegationResponse): _93.DelegationResponseAminoMsg;
                fromProtoMsg(message: _93.DelegationResponseProtoMsg): _93.DelegationResponse;
                toProto(message: _93.DelegationResponse): Uint8Array;
                toProtoMsg(message: _93.DelegationResponse): _93.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _93.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.RedelegationEntryResponse;
                fromPartial(object: Partial<_93.RedelegationEntryResponse>): _93.RedelegationEntryResponse;
                fromAmino(object: _93.RedelegationEntryResponseAmino): _93.RedelegationEntryResponse;
                toAmino(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _93.RedelegationEntryResponseAminoMsg): _93.RedelegationEntryResponse;
                toAminoMsg(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _93.RedelegationEntryResponseProtoMsg): _93.RedelegationEntryResponse;
                toProto(message: _93.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _93.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.RedelegationResponse;
                fromPartial(object: Partial<_93.RedelegationResponse>): _93.RedelegationResponse;
                fromAmino(object: _93.RedelegationResponseAmino): _93.RedelegationResponse;
                toAmino(message: _93.RedelegationResponse): _93.RedelegationResponseAmino;
                fromAminoMsg(object: _93.RedelegationResponseAminoMsg): _93.RedelegationResponse;
                toAminoMsg(message: _93.RedelegationResponse): _93.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _93.RedelegationResponseProtoMsg): _93.RedelegationResponse;
                toProto(message: _93.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _93.RedelegationResponse): _93.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _93.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Pool;
                fromPartial(object: Partial<_93.Pool>): _93.Pool;
                fromAmino(object: _93.PoolAmino): _93.Pool;
                toAmino(message: _93.Pool): _93.PoolAmino;
                fromAminoMsg(object: _93.PoolAminoMsg): _93.Pool;
                toAminoMsg(message: _93.Pool): _93.PoolAminoMsg;
                fromProtoMsg(message: _93.PoolProtoMsg): _93.Pool;
                toProto(message: _93.Pool): Uint8Array;
                toProtoMsg(message: _93.Pool): _93.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorsRequest;
                fromPartial(object: Partial<_92.QueryValidatorsRequest>): _92.QueryValidatorsRequest;
                fromAmino(object: _92.QueryValidatorsRequestAmino): _92.QueryValidatorsRequest;
                toAmino(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorsRequestAminoMsg): _92.QueryValidatorsRequest;
                toAminoMsg(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorsRequestProtoMsg): _92.QueryValidatorsRequest;
                toProto(message: _92.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorsResponse;
                fromPartial(object: Partial<_92.QueryValidatorsResponse>): _92.QueryValidatorsResponse;
                fromAmino(object: _92.QueryValidatorsResponseAmino): _92.QueryValidatorsResponse;
                toAmino(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorsResponseAminoMsg): _92.QueryValidatorsResponse;
                toAminoMsg(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorsResponseProtoMsg): _92.QueryValidatorsResponse;
                toProto(message: _92.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorRequest;
                fromPartial(object: Partial<_92.QueryValidatorRequest>): _92.QueryValidatorRequest;
                fromAmino(object: _92.QueryValidatorRequestAmino): _92.QueryValidatorRequest;
                toAmino(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorRequestAminoMsg): _92.QueryValidatorRequest;
                toAminoMsg(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorRequestProtoMsg): _92.QueryValidatorRequest;
                toProto(message: _92.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorResponse;
                fromPartial(object: Partial<_92.QueryValidatorResponse>): _92.QueryValidatorResponse;
                fromAmino(object: _92.QueryValidatorResponseAmino): _92.QueryValidatorResponse;
                toAmino(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorResponseAminoMsg): _92.QueryValidatorResponse;
                toAminoMsg(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorResponseProtoMsg): _92.QueryValidatorResponse;
                toProto(message: _92.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsRequest>): _92.QueryValidatorDelegationsRequest;
                fromAmino(object: _92.QueryValidatorDelegationsRequestAmino): _92.QueryValidatorDelegationsRequest;
                toAmino(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorDelegationsRequestAminoMsg): _92.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorDelegationsRequestProtoMsg): _92.QueryValidatorDelegationsRequest;
                toProto(message: _92.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsResponse>): _92.QueryValidatorDelegationsResponse;
                fromAmino(object: _92.QueryValidatorDelegationsResponseAmino): _92.QueryValidatorDelegationsResponse;
                toAmino(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorDelegationsResponseAminoMsg): _92.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorDelegationsResponseProtoMsg): _92.QueryValidatorDelegationsResponse;
                toProto(message: _92.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsRequest>): _92.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _92.QueryValidatorUnbondingDelegationsRequestAmino): _92.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorUnbondingDelegationsRequestAminoMsg): _92.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorUnbondingDelegationsRequestProtoMsg): _92.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _92.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsResponse>): _92.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _92.QueryValidatorUnbondingDelegationsResponseAmino): _92.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorUnbondingDelegationsResponseAminoMsg): _92.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorUnbondingDelegationsResponseProtoMsg): _92.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _92.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegationRequest;
                fromPartial(object: Partial<_92.QueryDelegationRequest>): _92.QueryDelegationRequest;
                fromAmino(object: _92.QueryDelegationRequestAmino): _92.QueryDelegationRequest;
                toAmino(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestAmino;
                fromAminoMsg(object: _92.QueryDelegationRequestAminoMsg): _92.QueryDelegationRequest;
                toAminoMsg(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegationRequestProtoMsg): _92.QueryDelegationRequest;
                toProto(message: _92.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegationResponse;
                fromPartial(object: Partial<_92.QueryDelegationResponse>): _92.QueryDelegationResponse;
                fromAmino(object: _92.QueryDelegationResponseAmino): _92.QueryDelegationResponse;
                toAmino(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseAmino;
                fromAminoMsg(object: _92.QueryDelegationResponseAminoMsg): _92.QueryDelegationResponse;
                toAminoMsg(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegationResponseProtoMsg): _92.QueryDelegationResponse;
                toProto(message: _92.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _92.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationRequest>): _92.QueryUnbondingDelegationRequest;
                fromAmino(object: _92.QueryUnbondingDelegationRequestAmino): _92.QueryUnbondingDelegationRequest;
                toAmino(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _92.QueryUnbondingDelegationRequestAminoMsg): _92.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryUnbondingDelegationRequestProtoMsg): _92.QueryUnbondingDelegationRequest;
                toProto(message: _92.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _92.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationResponse>): _92.QueryUnbondingDelegationResponse;
                fromAmino(object: _92.QueryUnbondingDelegationResponseAmino): _92.QueryUnbondingDelegationResponse;
                toAmino(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _92.QueryUnbondingDelegationResponseAminoMsg): _92.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryUnbondingDelegationResponseProtoMsg): _92.QueryUnbondingDelegationResponse;
                toProto(message: _92.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsRequest>): _92.QueryDelegatorDelegationsRequest;
                fromAmino(object: _92.QueryDelegatorDelegationsRequestAmino): _92.QueryDelegatorDelegationsRequest;
                toAmino(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorDelegationsRequestAminoMsg): _92.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorDelegationsRequestProtoMsg): _92.QueryDelegatorDelegationsRequest;
                toProto(message: _92.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsResponse>): _92.QueryDelegatorDelegationsResponse;
                fromAmino(object: _92.QueryDelegatorDelegationsResponseAmino): _92.QueryDelegatorDelegationsResponse;
                toAmino(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorDelegationsResponseAminoMsg): _92.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorDelegationsResponseProtoMsg): _92.QueryDelegatorDelegationsResponse;
                toProto(message: _92.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsRequest>): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _92.QueryDelegatorUnbondingDelegationsRequestAmino): _92.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _92.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _92.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _92.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsResponse>): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _92.QueryDelegatorUnbondingDelegationsResponseAmino): _92.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _92.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _92.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _92.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryRedelegationsRequest;
                fromPartial(object: Partial<_92.QueryRedelegationsRequest>): _92.QueryRedelegationsRequest;
                fromAmino(object: _92.QueryRedelegationsRequestAmino): _92.QueryRedelegationsRequest;
                toAmino(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryRedelegationsRequestAminoMsg): _92.QueryRedelegationsRequest;
                toAminoMsg(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryRedelegationsRequestProtoMsg): _92.QueryRedelegationsRequest;
                toProto(message: _92.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryRedelegationsResponse;
                fromPartial(object: Partial<_92.QueryRedelegationsResponse>): _92.QueryRedelegationsResponse;
                fromAmino(object: _92.QueryRedelegationsResponseAmino): _92.QueryRedelegationsResponse;
                toAmino(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryRedelegationsResponseAminoMsg): _92.QueryRedelegationsResponse;
                toAminoMsg(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryRedelegationsResponseProtoMsg): _92.QueryRedelegationsResponse;
                toProto(message: _92.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsRequest>): _92.QueryDelegatorValidatorsRequest;
                fromAmino(object: _92.QueryDelegatorValidatorsRequestAmino): _92.QueryDelegatorValidatorsRequest;
                toAmino(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorsRequestAminoMsg): _92.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorsRequestProtoMsg): _92.QueryDelegatorValidatorsRequest;
                toProto(message: _92.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsResponse>): _92.QueryDelegatorValidatorsResponse;
                fromAmino(object: _92.QueryDelegatorValidatorsResponseAmino): _92.QueryDelegatorValidatorsResponse;
                toAmino(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorsResponseAminoMsg): _92.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorsResponseProtoMsg): _92.QueryDelegatorValidatorsResponse;
                toProto(message: _92.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorRequest>): _92.QueryDelegatorValidatorRequest;
                fromAmino(object: _92.QueryDelegatorValidatorRequestAmino): _92.QueryDelegatorValidatorRequest;
                toAmino(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorRequestAminoMsg): _92.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorRequestProtoMsg): _92.QueryDelegatorValidatorRequest;
                toProto(message: _92.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorResponse>): _92.QueryDelegatorValidatorResponse;
                fromAmino(object: _92.QueryDelegatorValidatorResponseAmino): _92.QueryDelegatorValidatorResponse;
                toAmino(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorResponseAminoMsg): _92.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorResponseProtoMsg): _92.QueryDelegatorValidatorResponse;
                toProto(message: _92.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _92.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_92.QueryHistoricalInfoRequest>): _92.QueryHistoricalInfoRequest;
                fromAmino(object: _92.QueryHistoricalInfoRequestAmino): _92.QueryHistoricalInfoRequest;
                toAmino(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _92.QueryHistoricalInfoRequestAminoMsg): _92.QueryHistoricalInfoRequest;
                toAminoMsg(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _92.QueryHistoricalInfoRequestProtoMsg): _92.QueryHistoricalInfoRequest;
                toProto(message: _92.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _92.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_92.QueryHistoricalInfoResponse>): _92.QueryHistoricalInfoResponse;
                fromAmino(object: _92.QueryHistoricalInfoResponseAmino): _92.QueryHistoricalInfoResponse;
                toAmino(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _92.QueryHistoricalInfoResponseAminoMsg): _92.QueryHistoricalInfoResponse;
                toAminoMsg(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _92.QueryHistoricalInfoResponseProtoMsg): _92.QueryHistoricalInfoResponse;
                toProto(message: _92.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _92.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryPoolRequest;
                fromPartial(_: Partial<_92.QueryPoolRequest>): _92.QueryPoolRequest;
                fromAmino(_: _92.QueryPoolRequestAmino): _92.QueryPoolRequest;
                toAmino(_: _92.QueryPoolRequest): _92.QueryPoolRequestAmino;
                fromAminoMsg(object: _92.QueryPoolRequestAminoMsg): _92.QueryPoolRequest;
                toAminoMsg(message: _92.QueryPoolRequest): _92.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _92.QueryPoolRequestProtoMsg): _92.QueryPoolRequest;
                toProto(message: _92.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _92.QueryPoolRequest): _92.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _92.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryPoolResponse;
                fromPartial(object: Partial<_92.QueryPoolResponse>): _92.QueryPoolResponse;
                fromAmino(object: _92.QueryPoolResponseAmino): _92.QueryPoolResponse;
                toAmino(message: _92.QueryPoolResponse): _92.QueryPoolResponseAmino;
                fromAminoMsg(object: _92.QueryPoolResponseAminoMsg): _92.QueryPoolResponse;
                toAminoMsg(message: _92.QueryPoolResponse): _92.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _92.QueryPoolResponseProtoMsg): _92.QueryPoolResponse;
                toProto(message: _92.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _92.QueryPoolResponse): _92.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.QueryParamsRequest;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                toProto(message: _92.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _92.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.QueryParamsResponse;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                toProto(message: _92.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _91.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                fromAmino(object: _91.GenesisStateAmino): _91.GenesisState;
                toAmino(message: _91.GenesisState): _91.GenesisStateAmino;
                fromAminoMsg(object: _91.GenesisStateAminoMsg): _91.GenesisState;
                toAminoMsg(message: _91.GenesisState): _91.GenesisStateAminoMsg;
                fromProtoMsg(message: _91.GenesisStateProtoMsg): _91.GenesisState;
                toProto(message: _91.GenesisState): Uint8Array;
                toProtoMsg(message: _91.GenesisState): _91.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _91.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.LastValidatorPower;
                fromPartial(object: Partial<_91.LastValidatorPower>): _91.LastValidatorPower;
                fromAmino(object: _91.LastValidatorPowerAmino): _91.LastValidatorPower;
                toAmino(message: _91.LastValidatorPower): _91.LastValidatorPowerAmino;
                fromAminoMsg(object: _91.LastValidatorPowerAminoMsg): _91.LastValidatorPower;
                toAminoMsg(message: _91.LastValidatorPower): _91.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _91.LastValidatorPowerProtoMsg): _91.LastValidatorPower;
                toProto(message: _91.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _91.LastValidatorPower): _91.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _90.AuthorizationType;
            authorizationTypeToJSON(object: _90.AuthorizationType): string;
            AuthorizationType: typeof _90.AuthorizationType;
            AuthorizationTypeSDKType: typeof _90.AuthorizationType;
            AuthorizationTypeAmino: typeof _90.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _90.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.StakeAuthorization;
                fromPartial(object: Partial<_90.StakeAuthorization>): _90.StakeAuthorization;
                fromAmino(object: _90.StakeAuthorizationAmino): _90.StakeAuthorization;
                toAmino(message: _90.StakeAuthorization): _90.StakeAuthorizationAmino;
                fromAminoMsg(object: _90.StakeAuthorizationAminoMsg): _90.StakeAuthorization;
                toAminoMsg(message: _90.StakeAuthorization): _90.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _90.StakeAuthorizationProtoMsg): _90.StakeAuthorization;
                toProto(message: _90.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _90.StakeAuthorization): _90.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _90.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _90.StakeAuthorization_Validators;
                fromPartial(object: Partial<_90.StakeAuthorization_Validators>): _90.StakeAuthorization_Validators;
                fromAmino(object: _90.StakeAuthorization_ValidatorsAmino): _90.StakeAuthorization_Validators;
                toAmino(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _90.StakeAuthorization_ValidatorsAminoMsg): _90.StakeAuthorization_Validators;
                toAminoMsg(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _90.StakeAuthorization_ValidatorsProtoMsg): _90.StakeAuthorization_Validators;
                toProto(message: _90.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _95.SignMode;
                signModeToJSON(object: _95.SignMode): string;
                SignMode: typeof _95.SignMode;
                SignModeSDKType: typeof _95.SignMode;
                SignModeAmino: typeof _95.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptors;
                    fromPartial(object: Partial<_95.SignatureDescriptors>): _95.SignatureDescriptors;
                    fromAmino(object: _95.SignatureDescriptorsAmino): _95.SignatureDescriptors;
                    toAmino(message: _95.SignatureDescriptors): _95.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _95.SignatureDescriptorsAminoMsg): _95.SignatureDescriptors;
                    toAminoMsg(message: _95.SignatureDescriptors): _95.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptorsProtoMsg): _95.SignatureDescriptors;
                    toProto(message: _95.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptors): _95.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptor;
                    fromPartial(object: Partial<_95.SignatureDescriptor>): _95.SignatureDescriptor;
                    fromAmino(object: _95.SignatureDescriptorAmino): _95.SignatureDescriptor;
                    toAmino(message: _95.SignatureDescriptor): _95.SignatureDescriptorAmino;
                    fromAminoMsg(object: _95.SignatureDescriptorAminoMsg): _95.SignatureDescriptor;
                    toAminoMsg(message: _95.SignatureDescriptor): _95.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptorProtoMsg): _95.SignatureDescriptor;
                    toProto(message: _95.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor): _95.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data>): _95.SignatureDescriptor_Data;
                    fromAmino(object: _95.SignatureDescriptor_DataAmino): _95.SignatureDescriptor_Data;
                    toAmino(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_DataAminoMsg): _95.SignatureDescriptor_Data;
                    toAminoMsg(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_DataProtoMsg): _95.SignatureDescriptor_Data;
                    toProto(message: _95.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Single>): _95.SignatureDescriptor_Data_Single;
                    fromAmino(object: _95.SignatureDescriptor_Data_SingleAmino): _95.SignatureDescriptor_Data_Single;
                    toAmino(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_Data_SingleAminoMsg): _95.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_Data_SingleProtoMsg): _95.SignatureDescriptor_Data_Single;
                    toProto(message: _95.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Multi>): _95.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _95.SignatureDescriptor_Data_MultiAmino): _95.SignatureDescriptor_Data_Multi;
                    toAmino(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_Data_MultiAminoMsg): _95.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_Data_MultiProtoMsg): _95.SignatureDescriptor_Data_Multi;
                    toProto(message: _95.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _193.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _97.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Tx;
                fromPartial(object: Partial<_97.Tx>): _97.Tx;
                fromAmino(object: _97.TxAmino): _97.Tx;
                toAmino(message: _97.Tx): _97.TxAmino;
                fromAminoMsg(object: _97.TxAminoMsg): _97.Tx;
                toAminoMsg(message: _97.Tx): _97.TxAminoMsg;
                fromProtoMsg(message: _97.TxProtoMsg): _97.Tx;
                toProto(message: _97.Tx): Uint8Array;
                toProtoMsg(message: _97.Tx): _97.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _97.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.TxRaw;
                fromPartial(object: Partial<_97.TxRaw>): _97.TxRaw;
                fromAmino(object: _97.TxRawAmino): _97.TxRaw;
                toAmino(message: _97.TxRaw): _97.TxRawAmino;
                fromAminoMsg(object: _97.TxRawAminoMsg): _97.TxRaw;
                toAminoMsg(message: _97.TxRaw): _97.TxRawAminoMsg;
                fromProtoMsg(message: _97.TxRawProtoMsg): _97.TxRaw;
                toProto(message: _97.TxRaw): Uint8Array;
                toProtoMsg(message: _97.TxRaw): _97.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _97.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.SignDoc;
                fromPartial(object: Partial<_97.SignDoc>): _97.SignDoc;
                fromAmino(object: _97.SignDocAmino): _97.SignDoc;
                toAmino(message: _97.SignDoc): _97.SignDocAmino;
                fromAminoMsg(object: _97.SignDocAminoMsg): _97.SignDoc;
                toAminoMsg(message: _97.SignDoc): _97.SignDocAminoMsg;
                fromProtoMsg(message: _97.SignDocProtoMsg): _97.SignDoc;
                toProto(message: _97.SignDoc): Uint8Array;
                toProtoMsg(message: _97.SignDoc): _97.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _97.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.TxBody;
                fromPartial(object: Partial<_97.TxBody>): _97.TxBody;
                fromAmino(object: _97.TxBodyAmino): _97.TxBody;
                toAmino(message: _97.TxBody): _97.TxBodyAmino;
                fromAminoMsg(object: _97.TxBodyAminoMsg): _97.TxBody;
                toAminoMsg(message: _97.TxBody): _97.TxBodyAminoMsg;
                fromProtoMsg(message: _97.TxBodyProtoMsg): _97.TxBody;
                toProto(message: _97.TxBody): Uint8Array;
                toProtoMsg(message: _97.TxBody): _97.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _97.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.AuthInfo;
                fromPartial(object: Partial<_97.AuthInfo>): _97.AuthInfo;
                fromAmino(object: _97.AuthInfoAmino): _97.AuthInfo;
                toAmino(message: _97.AuthInfo): _97.AuthInfoAmino;
                fromAminoMsg(object: _97.AuthInfoAminoMsg): _97.AuthInfo;
                toAminoMsg(message: _97.AuthInfo): _97.AuthInfoAminoMsg;
                fromProtoMsg(message: _97.AuthInfoProtoMsg): _97.AuthInfo;
                toProto(message: _97.AuthInfo): Uint8Array;
                toProtoMsg(message: _97.AuthInfo): _97.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _97.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.SignerInfo;
                fromPartial(object: Partial<_97.SignerInfo>): _97.SignerInfo;
                fromAmino(object: _97.SignerInfoAmino): _97.SignerInfo;
                toAmino(message: _97.SignerInfo): _97.SignerInfoAmino;
                fromAminoMsg(object: _97.SignerInfoAminoMsg): _97.SignerInfo;
                toAminoMsg(message: _97.SignerInfo): _97.SignerInfoAminoMsg;
                fromProtoMsg(message: _97.SignerInfoProtoMsg): _97.SignerInfo;
                toProto(message: _97.SignerInfo): Uint8Array;
                toProtoMsg(message: _97.SignerInfo): _97.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _97.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ModeInfo;
                fromPartial(object: Partial<_97.ModeInfo>): _97.ModeInfo;
                fromAmino(object: _97.ModeInfoAmino): _97.ModeInfo;
                toAmino(message: _97.ModeInfo): _97.ModeInfoAmino;
                fromAminoMsg(object: _97.ModeInfoAminoMsg): _97.ModeInfo;
                toAminoMsg(message: _97.ModeInfo): _97.ModeInfoAminoMsg;
                fromProtoMsg(message: _97.ModeInfoProtoMsg): _97.ModeInfo;
                toProto(message: _97.ModeInfo): Uint8Array;
                toProtoMsg(message: _97.ModeInfo): _97.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _97.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ModeInfo_Single;
                fromPartial(object: Partial<_97.ModeInfo_Single>): _97.ModeInfo_Single;
                fromAmino(object: _97.ModeInfo_SingleAmino): _97.ModeInfo_Single;
                toAmino(message: _97.ModeInfo_Single): _97.ModeInfo_SingleAmino;
                fromAminoMsg(object: _97.ModeInfo_SingleAminoMsg): _97.ModeInfo_Single;
                toAminoMsg(message: _97.ModeInfo_Single): _97.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _97.ModeInfo_SingleProtoMsg): _97.ModeInfo_Single;
                toProto(message: _97.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _97.ModeInfo_Single): _97.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _97.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.ModeInfo_Multi;
                fromPartial(object: Partial<_97.ModeInfo_Multi>): _97.ModeInfo_Multi;
                fromAmino(object: _97.ModeInfo_MultiAmino): _97.ModeInfo_Multi;
                toAmino(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiAmino;
                fromAminoMsg(object: _97.ModeInfo_MultiAminoMsg): _97.ModeInfo_Multi;
                toAminoMsg(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _97.ModeInfo_MultiProtoMsg): _97.ModeInfo_Multi;
                toProto(message: _97.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _97.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.Fee;
                fromPartial(object: Partial<_97.Fee>): _97.Fee;
                fromAmino(object: _97.FeeAmino): _97.Fee;
                toAmino(message: _97.Fee): _97.FeeAmino;
                fromAminoMsg(object: _97.FeeAminoMsg): _97.Fee;
                toAminoMsg(message: _97.Fee): _97.FeeAminoMsg;
                fromProtoMsg(message: _97.FeeProtoMsg): _97.Fee;
                toProto(message: _97.Fee): Uint8Array;
                toProtoMsg(message: _97.Fee): _97.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _96.OrderBy;
            orderByToJSON(object: _96.OrderBy): string;
            broadcastModeFromJSON(object: any): _96.BroadcastMode;
            broadcastModeToJSON(object: _96.BroadcastMode): string;
            OrderBy: typeof _96.OrderBy;
            OrderBySDKType: typeof _96.OrderBy;
            OrderByAmino: typeof _96.OrderBy;
            BroadcastMode: typeof _96.BroadcastMode;
            BroadcastModeSDKType: typeof _96.BroadcastMode;
            BroadcastModeAmino: typeof _96.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _96.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetTxsEventRequest;
                fromPartial(object: Partial<_96.GetTxsEventRequest>): _96.GetTxsEventRequest;
                fromAmino(object: _96.GetTxsEventRequestAmino): _96.GetTxsEventRequest;
                toAmino(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestAmino;
                fromAminoMsg(object: _96.GetTxsEventRequestAminoMsg): _96.GetTxsEventRequest;
                toAminoMsg(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _96.GetTxsEventRequestProtoMsg): _96.GetTxsEventRequest;
                toProto(message: _96.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _96.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetTxsEventResponse;
                fromPartial(object: Partial<_96.GetTxsEventResponse>): _96.GetTxsEventResponse;
                fromAmino(object: _96.GetTxsEventResponseAmino): _96.GetTxsEventResponse;
                toAmino(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseAmino;
                fromAminoMsg(object: _96.GetTxsEventResponseAminoMsg): _96.GetTxsEventResponse;
                toAminoMsg(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _96.GetTxsEventResponseProtoMsg): _96.GetTxsEventResponse;
                toProto(message: _96.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _96.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.BroadcastTxRequest;
                fromPartial(object: Partial<_96.BroadcastTxRequest>): _96.BroadcastTxRequest;
                fromAmino(object: _96.BroadcastTxRequestAmino): _96.BroadcastTxRequest;
                toAmino(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestAmino;
                fromAminoMsg(object: _96.BroadcastTxRequestAminoMsg): _96.BroadcastTxRequest;
                toAminoMsg(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _96.BroadcastTxRequestProtoMsg): _96.BroadcastTxRequest;
                toProto(message: _96.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _96.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.BroadcastTxResponse;
                fromPartial(object: Partial<_96.BroadcastTxResponse>): _96.BroadcastTxResponse;
                fromAmino(object: _96.BroadcastTxResponseAmino): _96.BroadcastTxResponse;
                toAmino(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseAmino;
                fromAminoMsg(object: _96.BroadcastTxResponseAminoMsg): _96.BroadcastTxResponse;
                toAminoMsg(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _96.BroadcastTxResponseProtoMsg): _96.BroadcastTxResponse;
                toProto(message: _96.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _96.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.SimulateRequest;
                fromPartial(object: Partial<_96.SimulateRequest>): _96.SimulateRequest;
                fromAmino(object: _96.SimulateRequestAmino): _96.SimulateRequest;
                toAmino(message: _96.SimulateRequest): _96.SimulateRequestAmino;
                fromAminoMsg(object: _96.SimulateRequestAminoMsg): _96.SimulateRequest;
                toAminoMsg(message: _96.SimulateRequest): _96.SimulateRequestAminoMsg;
                fromProtoMsg(message: _96.SimulateRequestProtoMsg): _96.SimulateRequest;
                toProto(message: _96.SimulateRequest): Uint8Array;
                toProtoMsg(message: _96.SimulateRequest): _96.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _96.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.SimulateResponse;
                fromPartial(object: Partial<_96.SimulateResponse>): _96.SimulateResponse;
                fromAmino(object: _96.SimulateResponseAmino): _96.SimulateResponse;
                toAmino(message: _96.SimulateResponse): _96.SimulateResponseAmino;
                fromAminoMsg(object: _96.SimulateResponseAminoMsg): _96.SimulateResponse;
                toAminoMsg(message: _96.SimulateResponse): _96.SimulateResponseAminoMsg;
                fromProtoMsg(message: _96.SimulateResponseProtoMsg): _96.SimulateResponse;
                toProto(message: _96.SimulateResponse): Uint8Array;
                toProtoMsg(message: _96.SimulateResponse): _96.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _96.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetTxRequest;
                fromPartial(object: Partial<_96.GetTxRequest>): _96.GetTxRequest;
                fromAmino(object: _96.GetTxRequestAmino): _96.GetTxRequest;
                toAmino(message: _96.GetTxRequest): _96.GetTxRequestAmino;
                fromAminoMsg(object: _96.GetTxRequestAminoMsg): _96.GetTxRequest;
                toAminoMsg(message: _96.GetTxRequest): _96.GetTxRequestAminoMsg;
                fromProtoMsg(message: _96.GetTxRequestProtoMsg): _96.GetTxRequest;
                toProto(message: _96.GetTxRequest): Uint8Array;
                toProtoMsg(message: _96.GetTxRequest): _96.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _96.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetTxResponse;
                fromPartial(object: Partial<_96.GetTxResponse>): _96.GetTxResponse;
                fromAmino(object: _96.GetTxResponseAmino): _96.GetTxResponse;
                toAmino(message: _96.GetTxResponse): _96.GetTxResponseAmino;
                fromAminoMsg(object: _96.GetTxResponseAminoMsg): _96.GetTxResponse;
                toAminoMsg(message: _96.GetTxResponse): _96.GetTxResponseAminoMsg;
                fromProtoMsg(message: _96.GetTxResponseProtoMsg): _96.GetTxResponse;
                toProto(message: _96.GetTxResponse): Uint8Array;
                toProtoMsg(message: _96.GetTxResponse): _96.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _96.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_96.GetBlockWithTxsRequest>): _96.GetBlockWithTxsRequest;
                fromAmino(object: _96.GetBlockWithTxsRequestAmino): _96.GetBlockWithTxsRequest;
                toAmino(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _96.GetBlockWithTxsRequestAminoMsg): _96.GetBlockWithTxsRequest;
                toAminoMsg(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _96.GetBlockWithTxsRequestProtoMsg): _96.GetBlockWithTxsRequest;
                toProto(message: _96.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _96.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_96.GetBlockWithTxsResponse>): _96.GetBlockWithTxsResponse;
                fromAmino(object: _96.GetBlockWithTxsResponseAmino): _96.GetBlockWithTxsResponse;
                toAmino(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _96.GetBlockWithTxsResponseAminoMsg): _96.GetBlockWithTxsResponse;
                toAminoMsg(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _96.GetBlockWithTxsResponseProtoMsg): _96.GetBlockWithTxsResponse;
                toProto(message: _96.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            Plan: {
                typeUrl: string;
                encode(message: _99.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.Plan;
                fromPartial(object: Partial<_99.Plan>): _99.Plan;
                fromAmino(object: _99.PlanAmino): _99.Plan;
                toAmino(message: _99.Plan): _99.PlanAmino;
                fromAminoMsg(object: _99.PlanAminoMsg): _99.Plan;
                toAminoMsg(message: _99.Plan): _99.PlanAminoMsg;
                fromProtoMsg(message: _99.PlanProtoMsg): _99.Plan;
                toProto(message: _99.Plan): Uint8Array;
                toProtoMsg(message: _99.Plan): _99.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _99.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_99.SoftwareUpgradeProposal>): _99.SoftwareUpgradeProposal;
                fromAmino(object: _99.SoftwareUpgradeProposalAmino): _99.SoftwareUpgradeProposal;
                toAmino(message: _99.SoftwareUpgradeProposal): _99.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _99.SoftwareUpgradeProposalAminoMsg): _99.SoftwareUpgradeProposal;
                toAminoMsg(message: _99.SoftwareUpgradeProposal): _99.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _99.SoftwareUpgradeProposalProtoMsg): _99.SoftwareUpgradeProposal;
                toProto(message: _99.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _99.SoftwareUpgradeProposal): _99.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _99.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_99.CancelSoftwareUpgradeProposal>): _99.CancelSoftwareUpgradeProposal;
                fromAmino(object: _99.CancelSoftwareUpgradeProposalAmino): _99.CancelSoftwareUpgradeProposal;
                toAmino(message: _99.CancelSoftwareUpgradeProposal): _99.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _99.CancelSoftwareUpgradeProposalAminoMsg): _99.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _99.CancelSoftwareUpgradeProposal): _99.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _99.CancelSoftwareUpgradeProposalProtoMsg): _99.CancelSoftwareUpgradeProposal;
                toProto(message: _99.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _99.CancelSoftwareUpgradeProposal): _99.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _99.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.ModuleVersion;
                fromPartial(object: Partial<_99.ModuleVersion>): _99.ModuleVersion;
                fromAmino(object: _99.ModuleVersionAmino): _99.ModuleVersion;
                toAmino(message: _99.ModuleVersion): _99.ModuleVersionAmino;
                fromAminoMsg(object: _99.ModuleVersionAminoMsg): _99.ModuleVersion;
                toAminoMsg(message: _99.ModuleVersion): _99.ModuleVersionAminoMsg;
                fromProtoMsg(message: _99.ModuleVersionProtoMsg): _99.ModuleVersion;
                toProto(message: _99.ModuleVersion): Uint8Array;
                toProtoMsg(message: _99.ModuleVersion): _99.ModuleVersionProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _98.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_98.QueryCurrentPlanRequest>): _98.QueryCurrentPlanRequest;
                fromAmino(_: _98.QueryCurrentPlanRequestAmino): _98.QueryCurrentPlanRequest;
                toAmino(_: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _98.QueryCurrentPlanRequestAminoMsg): _98.QueryCurrentPlanRequest;
                toAminoMsg(message: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _98.QueryCurrentPlanRequestProtoMsg): _98.QueryCurrentPlanRequest;
                toProto(message: _98.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _98.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_98.QueryCurrentPlanResponse>): _98.QueryCurrentPlanResponse;
                fromAmino(object: _98.QueryCurrentPlanResponseAmino): _98.QueryCurrentPlanResponse;
                toAmino(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _98.QueryCurrentPlanResponseAminoMsg): _98.QueryCurrentPlanResponse;
                toAminoMsg(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _98.QueryCurrentPlanResponseProtoMsg): _98.QueryCurrentPlanResponse;
                toProto(message: _98.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _98.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_98.QueryAppliedPlanRequest>): _98.QueryAppliedPlanRequest;
                fromAmino(object: _98.QueryAppliedPlanRequestAmino): _98.QueryAppliedPlanRequest;
                toAmino(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _98.QueryAppliedPlanRequestAminoMsg): _98.QueryAppliedPlanRequest;
                toAminoMsg(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAppliedPlanRequestProtoMsg): _98.QueryAppliedPlanRequest;
                toProto(message: _98.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _98.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_98.QueryAppliedPlanResponse>): _98.QueryAppliedPlanResponse;
                fromAmino(object: _98.QueryAppliedPlanResponseAmino): _98.QueryAppliedPlanResponse;
                toAmino(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _98.QueryAppliedPlanResponseAminoMsg): _98.QueryAppliedPlanResponse;
                toAminoMsg(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAppliedPlanResponseProtoMsg): _98.QueryAppliedPlanResponse;
                toProto(message: _98.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _98.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateRequest>): _98.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _98.QueryUpgradedConsensusStateRequestAmino): _98.QueryUpgradedConsensusStateRequest;
                toAmino(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _98.QueryUpgradedConsensusStateRequestAminoMsg): _98.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _98.QueryUpgradedConsensusStateRequestProtoMsg): _98.QueryUpgradedConsensusStateRequest;
                toProto(message: _98.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _98.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateResponse>): _98.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _98.QueryUpgradedConsensusStateResponseAmino): _98.QueryUpgradedConsensusStateResponse;
                toAmino(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _98.QueryUpgradedConsensusStateResponseAminoMsg): _98.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _98.QueryUpgradedConsensusStateResponseProtoMsg): _98.QueryUpgradedConsensusStateResponse;
                toProto(message: _98.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _98.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_98.QueryModuleVersionsRequest>): _98.QueryModuleVersionsRequest;
                fromAmino(object: _98.QueryModuleVersionsRequestAmino): _98.QueryModuleVersionsRequest;
                toAmino(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _98.QueryModuleVersionsRequestAminoMsg): _98.QueryModuleVersionsRequest;
                toAminoMsg(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryModuleVersionsRequestProtoMsg): _98.QueryModuleVersionsRequest;
                toProto(message: _98.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _98.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_98.QueryModuleVersionsResponse>): _98.QueryModuleVersionsResponse;
                fromAmino(object: _98.QueryModuleVersionsResponseAmino): _98.QueryModuleVersionsResponse;
                toAmino(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _98.QueryModuleVersionsResponseAminoMsg): _98.QueryModuleVersionsResponse;
                toAminoMsg(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryModuleVersionsResponseProtoMsg): _98.QueryModuleVersionsResponse;
                toProto(message: _98.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _100.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _100.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _100.MsgCreateVestingAccount) => _100.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _100.MsgCreateVestingAccountAmino) => _100.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _101.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.BaseVestingAccount;
                fromPartial(object: Partial<_101.BaseVestingAccount>): _101.BaseVestingAccount;
                fromAmino(object: _101.BaseVestingAccountAmino): _101.BaseVestingAccount;
                toAmino(message: _101.BaseVestingAccount): _101.BaseVestingAccountAmino;
                fromAminoMsg(object: _101.BaseVestingAccountAminoMsg): _101.BaseVestingAccount;
                toAminoMsg(message: _101.BaseVestingAccount): _101.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _101.BaseVestingAccountProtoMsg): _101.BaseVestingAccount;
                toProto(message: _101.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _101.BaseVestingAccount): _101.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _101.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.ContinuousVestingAccount;
                fromPartial(object: Partial<_101.ContinuousVestingAccount>): _101.ContinuousVestingAccount;
                fromAmino(object: _101.ContinuousVestingAccountAmino): _101.ContinuousVestingAccount;
                toAmino(message: _101.ContinuousVestingAccount): _101.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _101.ContinuousVestingAccountAminoMsg): _101.ContinuousVestingAccount;
                toAminoMsg(message: _101.ContinuousVestingAccount): _101.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _101.ContinuousVestingAccountProtoMsg): _101.ContinuousVestingAccount;
                toProto(message: _101.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _101.ContinuousVestingAccount): _101.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _101.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.DelayedVestingAccount;
                fromPartial(object: Partial<_101.DelayedVestingAccount>): _101.DelayedVestingAccount;
                fromAmino(object: _101.DelayedVestingAccountAmino): _101.DelayedVestingAccount;
                toAmino(message: _101.DelayedVestingAccount): _101.DelayedVestingAccountAmino;
                fromAminoMsg(object: _101.DelayedVestingAccountAminoMsg): _101.DelayedVestingAccount;
                toAminoMsg(message: _101.DelayedVestingAccount): _101.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _101.DelayedVestingAccountProtoMsg): _101.DelayedVestingAccount;
                toProto(message: _101.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _101.DelayedVestingAccount): _101.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _101.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.Period;
                fromPartial(object: Partial<_101.Period>): _101.Period;
                fromAmino(object: _101.PeriodAmino): _101.Period;
                toAmino(message: _101.Period): _101.PeriodAmino;
                fromAminoMsg(object: _101.PeriodAminoMsg): _101.Period;
                toAminoMsg(message: _101.Period): _101.PeriodAminoMsg;
                fromProtoMsg(message: _101.PeriodProtoMsg): _101.Period;
                toProto(message: _101.Period): Uint8Array;
                toProtoMsg(message: _101.Period): _101.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _101.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PeriodicVestingAccount;
                fromPartial(object: Partial<_101.PeriodicVestingAccount>): _101.PeriodicVestingAccount;
                fromAmino(object: _101.PeriodicVestingAccountAmino): _101.PeriodicVestingAccount;
                toAmino(message: _101.PeriodicVestingAccount): _101.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _101.PeriodicVestingAccountAminoMsg): _101.PeriodicVestingAccount;
                toAminoMsg(message: _101.PeriodicVestingAccount): _101.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _101.PeriodicVestingAccountProtoMsg): _101.PeriodicVestingAccount;
                toProto(message: _101.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _101.PeriodicVestingAccount): _101.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _101.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.PermanentLockedAccount;
                fromPartial(object: Partial<_101.PermanentLockedAccount>): _101.PermanentLockedAccount;
                fromAmino(object: _101.PermanentLockedAccountAmino): _101.PermanentLockedAccount;
                toAmino(message: _101.PermanentLockedAccount): _101.PermanentLockedAccountAmino;
                fromAminoMsg(object: _101.PermanentLockedAccountAminoMsg): _101.PermanentLockedAccount;
                toAminoMsg(message: _101.PermanentLockedAccount): _101.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _101.PermanentLockedAccountProtoMsg): _101.PermanentLockedAccount;
                toProto(message: _101.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _101.PermanentLockedAccount): _101.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _100.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgCreateVestingAccount;
                fromPartial(object: Partial<_100.MsgCreateVestingAccount>): _100.MsgCreateVestingAccount;
                fromAmino(object: _100.MsgCreateVestingAccountAmino): _100.MsgCreateVestingAccount;
                toAmino(message: _100.MsgCreateVestingAccount): _100.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _100.MsgCreateVestingAccountAminoMsg): _100.MsgCreateVestingAccount;
                toAminoMsg(message: _100.MsgCreateVestingAccount): _100.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _100.MsgCreateVestingAccountProtoMsg): _100.MsgCreateVestingAccount;
                toProto(message: _100.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _100.MsgCreateVestingAccount): _100.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _100.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_100.MsgCreateVestingAccountResponse>): _100.MsgCreateVestingAccountResponse;
                fromAmino(_: _100.MsgCreateVestingAccountResponseAmino): _100.MsgCreateVestingAccountResponse;
                toAmino(_: _100.MsgCreateVestingAccountResponse): _100.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _100.MsgCreateVestingAccountResponseAminoMsg): _100.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _100.MsgCreateVestingAccountResponse): _100.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _100.MsgCreateVestingAccountResponseProtoMsg): _100.MsgCreateVestingAccountResponse;
                toProto(message: _100.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _100.MsgCreateVestingAccountResponse): _100.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _195.MsgClientImpl;
                };
                bank: {
                    v1beta1: _196.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _197.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _198.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _199.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _200.MsgClientImpl;
                };
                gov: {
                    v1beta1: _201.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _202.MsgClientImpl;
                };
                staking: {
                    v1beta1: _203.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _204.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _45.QueryAccountsRequest): Promise<_45.QueryAccountsResponse>;
                        account(request: _45.QueryAccountRequest): Promise<_45.QueryAccountResponse>;
                        params(request?: _45.QueryParamsRequest): Promise<_45.QueryParamsResponse>;
                        moduleAccountByName(request: _45.QueryModuleAccountByNameRequest): Promise<_45.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _49.QueryGrantsRequest): Promise<_49.QueryGrantsResponse>;
                        granterGrants(request: _49.QueryGranterGrantsRequest): Promise<_49.QueryGranterGrantsResponse>;
                        granteeGrants(request: _49.QueryGranteeGrantsRequest): Promise<_49.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _54.QueryBalanceRequest): Promise<_54.QueryBalanceResponse>;
                        allBalances(request: _54.QueryAllBalancesRequest): Promise<_54.QueryAllBalancesResponse>;
                        spendableBalances(request: _54.QuerySpendableBalancesRequest): Promise<_54.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _54.QueryTotalSupplyRequest): Promise<_54.QueryTotalSupplyResponse>;
                        supplyOf(request: _54.QuerySupplyOfRequest): Promise<_54.QuerySupplyOfResponse>;
                        params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        denomMetadata(request: _54.QueryDenomMetadataRequest): Promise<_54.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _54.QueryDenomsMetadataRequest): Promise<_54.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _36.ConfigRequest): Promise<_36.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _42.GetNodeInfoRequest): Promise<_42.GetNodeInfoResponse>;
                            getSyncing(request?: _42.GetSyncingRequest): Promise<_42.GetSyncingResponse>;
                            getLatestBlock(request?: _42.GetLatestBlockRequest): Promise<_42.GetLatestBlockResponse>;
                            getBlockByHeight(request: _42.GetBlockByHeightRequest): Promise<_42.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _42.GetLatestValidatorSetRequest): Promise<_42.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _42.GetValidatorSetByHeightRequest): Promise<_42.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _66.QueryValidatorOutstandingRewardsRequest): Promise<_66.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _66.QueryValidatorCommissionRequest): Promise<_66.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _66.QueryValidatorSlashesRequest): Promise<_66.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _66.QueryDelegationRewardsRequest): Promise<_66.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _66.QueryDelegationTotalRewardsRequest): Promise<_66.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _66.QueryDelegatorValidatorsRequest): Promise<_66.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _66.QueryDelegatorWithdrawAddressRequest): Promise<_66.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _66.QueryCommunityPoolRequest): Promise<_66.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _70.QueryEvidenceRequest): Promise<_70.QueryEvidenceResponse>;
                        allEvidence(request?: _70.QueryAllEvidenceRequest): Promise<_70.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _74.QueryAllowanceRequest): Promise<_74.QueryAllowanceResponse>;
                        allowances(request: _74.QueryAllowancesRequest): Promise<_74.QueryAllowancesResponse>;
                        allowancesByGranter(request: _74.QueryAllowancesByGranterRequest): Promise<_74.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _79.QueryProposalRequest): Promise<_79.QueryProposalResponse>;
                        proposals(request: _79.QueryProposalsRequest): Promise<_79.QueryProposalsResponse>;
                        vote(request: _79.QueryVoteRequest): Promise<_79.QueryVoteResponse>;
                        votes(request: _79.QueryVotesRequest): Promise<_79.QueryVotesResponse>;
                        params(request: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        deposit(request: _79.QueryDepositRequest): Promise<_79.QueryDepositResponse>;
                        deposits(request: _79.QueryDepositsRequest): Promise<_79.QueryDepositsResponse>;
                        tallyResult(request: _79.QueryTallyResultRequest): Promise<_79.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        inflation(request?: _83.QueryInflationRequest): Promise<_83.QueryInflationResponse>;
                        annualProvisions(request?: _83.QueryAnnualProvisionsRequest): Promise<_83.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                        signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                        validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                        validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                        unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                        delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                        pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                        getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                        broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                        getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                        getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                        appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _165.LCDQueryClient;
                };
                authz: {
                    v1beta1: _166.LCDQueryClient;
                };
                bank: {
                    v1beta1: _167.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _168.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _169.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _170.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _171.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _172.LCDQueryClient;
                };
                gov: {
                    v1beta1: _173.LCDQueryClient;
                };
                mint: {
                    v1beta1: _174.LCDQueryClient;
                };
                params: {
                    v1beta1: _175.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _176.LCDQueryClient;
                };
                staking: {
                    v1beta1: _177.LCDQueryClient;
                };
                tx: {
                    v1beta1: _178.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _179.LCDQueryClient;
                };
            };
        }>;
    };
}
